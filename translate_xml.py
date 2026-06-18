import os
import re
import time
from bs4 import BeautifulSoup, NavigableString, Comment, MarkupResemblesLocatorWarning
from deep_translator import GoogleTranslator
import warnings
warnings.filterwarnings("ignore", category=MarkupResemblesLocatorWarning)

DST = r"C:\Users\DYS\Documents\materi\id"
TRANSLATE_INNER_TAGS = {'b', 'i', 'u', 'strong', 'em', 'span', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'li', 'td', 'th'}

def should_translate_text(text):
    text = text.strip()
    if not text:
        return False
    if re.match(r'^[\d\.\s\-_#/\\]+$', text):
        return False
    if len(text) <= 2:
        return False
    if re.match(r'^[\d\.]+$', text.strip()):
        return False
    if re.match(r'^[\w\-]+\.[\w\-]+$', text):
        return False
    return True

def translate_text_content(html_content, translator):
    """Parse HTML content, translate text nodes, return updated HTML string."""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    text_nodes = []
    for tag in soup.find_all(True):
        if tag.name in TRANSLATE_INNER_TAGS:
            for child in list(tag.children):
                if isinstance(child, Comment):
                    continue
                if isinstance(child, NavigableString):
                    text = str(child)
                    if should_translate_text(text):
                        text_nodes.append((child, text))
    
    # Also check direct text in root
    for child in list(soup.children):
        if isinstance(child, Comment):
            continue
        if isinstance(child, NavigableString):
            text = str(child)
            if should_translate_text(text):
                text_nodes.append((child, text))
    
    if not text_nodes:
        return html_content
    
    texts = [t for _, t in text_nodes]
    try:
        translated = translator.translate_batch(texts)
        for (child_node, _), new_text in zip(text_nodes, translated):
            if new_text:
                child_node.replace_with(NavigableString(new_text))
        return str(soup)
    except Exception as e:
        print(f"    Translation error for '{texts}': {e}")
        return html_content

def translate_xml_file(filepath, translator):
    """Translate a single XML file's CDATA text content."""
    rel_path = os.path.relpath(filepath, DST)
    
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    # Pattern for <text><![CDATA[...]]></text>
    cdata_pattern = re.compile(r'(<text\b[^>]*>\s*<!\[CDATA\[)(.*?)(\]\]>\s*</text>)', re.DOTALL)
    
    matches = list(cdata_pattern.finditer(content))
    if not matches:
        return False
    
    changes = []
    for match in matches:
        inner_html = match.group(2)
        if not inner_html.strip():
            continue
        
        # Quick check if there's any text to translate
        text_only = BeautifulSoup(inner_html, 'html.parser').get_text(strip=True)
        if not text_only or not should_translate_text(text_only):
            continue
        
        # Translate the HTML content
        translated_html = translate_text_content(inner_html, translator)
        if translated_html != inner_html:
            changes.append((match.start(), match.end(), match.group(1) + translated_html + match.group(3)))
    
    if not changes:
        return False
    
    # Apply changes in reverse order to preserve positions
    changes.reverse()
    for start, end, replacement in changes:
        content = content[:start] + replacement + content[end:]
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def has_translatable_text(filepath):
    """Quick check if XML file has any translatable text in CDATA."""
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    
    if '<![CDATA[' not in content:
        return False
    
    cdata_pattern = re.compile(r'<!\[CDATA\[(.*?)\]\]>', re.DOTALL)
    for match in cdata_pattern.finditer(content):
        inner = match.group(1)
        text = BeautifulSoup(inner, 'html.parser').get_text(strip=True)
        if should_translate_text(text):
            return True
    return False

def main():
    print("Collecting XML files...")
    xml_files = []
    for root, dirs, files in os.walk(DST):
        for f in files:
            if f.endswith('.xml'):
                xml_files.append(os.path.join(root, f))
    
    print(f"  Found {len(xml_files)} XML files.")
    
    print("Pre-scanning for files with translatable text...")
    content_files = []
    for filepath in xml_files:
        if has_translatable_text(filepath):
            content_files.append(filepath)
    
    print(f"  Files with text to translate: {len(content_files)}/{len(xml_files)}")
    
    if not content_files:
        print("No XML files need translation.")
        return
    
    print("Translating XML files...")
    translator = GoogleTranslator(source='en', target='id')
    
    translated_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, filepath in enumerate(content_files):
        rel_path = os.path.relpath(filepath, DST)
        
        if i % 5 == 0:
            print(f"  Progress: {i}/{len(content_files)} ({translated_count} translated, {skipped_count} skipped, {error_count} errors)...")
        
        try:
            result = translate_xml_file(filepath, translator)
            if result:
                translated_count += 1
            else:
                skipped_count += 1
        except Exception as e:
            print(f"  Error processing {rel_path}: {e}")
            error_count += 1
        
        time.sleep(0.5)
    
    print(f"\nDone!")
    print(f"  Total XML files: {len(xml_files)}")
    print(f"  Files with text: {len(content_files)}")
    print(f"  Translated: {translated_count}")
    print(f"  Skipped: {skipped_count}")
    print(f"  Errors: {error_count}")

if __name__ == '__main__':
    main()
