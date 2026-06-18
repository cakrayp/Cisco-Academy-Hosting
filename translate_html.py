import os
import re
import shutil
import time
from bs4 import BeautifulSoup, NavigableString, Comment
from deep_translator import GoogleTranslator

SRC = r"C:\Users\DYS\Documents\materi\en"
DST = r"C:\Users\DYS\Documents\materi\id"

# Elements whose text content should be translated
TRANSLATE_TAGS = {'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'li', 'div', 'td', 'th', 'label', 'button', 'option', 'small', 'strong', 'em', 'b', 'i', 'u'}

# Elements that should be completely skipped
SKIP_TAGS = {'script', 'style', 'code', 'pre', 'textarea'}

def should_translate_text(text):
    """Check if a text string should be translated."""
    text = text.strip()
    if not text:
        return False
    # Skip pure numbers, identifiers, and code-like text
    if re.match(r'^[\d\.\s\-_#/\\]+$', text):
        return False
    # Skip very short text (1-2 chars)
    if len(text) <= 2:
        return False
    # Skip if it looks like a URL or path
    if re.match(r'^[\w\-\.]+(/[\w\-\.]+)*$', text) and '/' in text:
        return False
    # Skip if it's a filename with extension
    if re.match(r'^[\w\-]+\.[\w\-]+$', text):
        return False
    # Skip if it's just an identifier like "0.0.1.1"
    if re.match(r'^[\d\.]+$', text.strip()):
        return False
    return True

def is_media_wrapper(soup):
    """Check if this is a media/Flash wrapper page with no real text."""
    # Check if body has only an iframe and minimal content
    body = soup.find('body')
    if not body:
        return False
    # Get text content excluding script and style
    for tag in body.find_all(['script', 'style']):
        tag.decompose()
    text = body.get_text(strip=True)
    # If almost no text, it's a media wrapper
    if len(text) < 20:
        return True
    return False

def translate_file(filepath, translator):
    """Translate a single HTML file."""
    rel_path = os.path.relpath(filepath, DST)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    soup = BeautifulSoup(content, 'html.parser')
    
    # Skip media wrappers
    if is_media_wrapper(soup):
        return False
    
    # Collect text nodes to translate (only from specific parent elements)
    text_nodes = []
    
    for tag in soup.find_all(True):
        if tag.name in SKIP_TAGS:
            continue
        # Only look at child text nodes (not descendants we'll catch separately)
        for child in list(tag.children):
            if isinstance(child, Comment):
                continue
            if isinstance(child, NavigableString):
                text = str(child)
                if should_translate_text(text):
                    # Check parent is in our translate list (or is a direct child of body/html)
                    if tag.name in TRANSLATE_TAGS or tag.parent is None or tag.parent.name in ['html', 'body']:
                        text_nodes.append((child, text))
    
    if not text_nodes:
        return False
    
    # Also translate title, alt, and title attributes
    title_tag = soup.find('title')
    extra_texts = []
    extra_sources = []
    
    if title_tag and title_tag.string and should_translate_text(title_tag.string):
        extra_texts.append(title_tag.string)
        extra_sources.append(('title', title_tag))
    
    # Collect alt attributes
    for img in soup.find_all('img', alt=True):
        alt = img.get('alt', '')
        if alt and should_translate_text(alt) and len(alt) > 3:
            extra_texts.append(alt)
            extra_sources.append(('alt', img))
    
    # Collect title attributes
    for elem in soup.find_all(title=True):
        title_attr = elem.get('title', '')
        if title_attr and should_translate_text(title_attr) and len(title_attr) > 3:
            extra_texts.append(title_attr)
            extra_sources.append(('title_attr', elem))
    
    # Extract just the text strings
    all_texts = [t for _, t in text_nodes] + extra_texts
    
    if not all_texts:
        return False
    
    try:
        # Translate in batches to minimize API calls
        translated = translator.translate_batch(all_texts)
        
        # Replace text nodes
        for i, (child_node, _) in enumerate(text_nodes):
            new_text = translated[i]
            if new_text:
                child_node.replace_with(NavigableString(new_text))
        
        # Replace extra texts
        offset = len(text_nodes)
        for j, (source_type, elem) in enumerate(extra_sources):
            new_text = translated[offset + j]
            if new_text:
                if source_type == 'title':
                    elem.string.replace_with(NavigableString(new_text))
                elif source_type == 'alt':
                    elem['alt'] = new_text
                elif source_type == 'title_attr':
                    elem['title'] = new_text
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        
        return True
    except Exception as e:
        print(f"  Error translating {rel_path}: {e}")
        time.sleep(5)  # Wait longer on error
        return False


def main():
    print("Step 1: Copying directory structure...")
    
    # Check if DST exists
    if os.path.exists(DST):
        print(f"  Destination {DST} already exists, removing...")
        shutil.rmtree(DST)
    
    print("  Copying directory structure...")
    shutil.copytree(SRC, DST)
    print("  Directory copied.")
    
    print("\nStep 2: Collecting HTML files...")
    html_files = []
    for root, dirs, files in os.walk(DST):
        for f in files:
            if f.endswith('.html'):
                html_files.append(os.path.join(root, f))
    
    print(f"  Found {len(html_files)} HTML files.")
    
    print("\nStep 3: Pre-scanning files to find those with translatable content...")
    
    # First pass: identify files with real content (not media wrappers)
    content_files = []
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        soup = BeautifulSoup(content, 'html.parser')
        if not is_media_wrapper(soup):
            content_files.append(filepath)
    
    print(f"  Files with content to translate: {len(content_files)}/{len(html_files)}")
    
    print("\nStep 4: Translating files...")
    translator = GoogleTranslator(source='en', target='id')
    
    translated_count = 0
    skipped_count = 0
    error_count = 0
    
    for i, filepath in enumerate(content_files):
        rel_path = os.path.relpath(filepath, DST)
        
        if i % 5 == 0:
            print(f"  Progress: {i}/{len(content_files)} files ({translated_count} translated, {skipped_count} skipped, {error_count} errors)...")
        
        try:
            result = translate_file(filepath, translator)
            if result:
                translated_count += 1
            else:
                skipped_count += 1
        except Exception as e:
            print(f"  Error processing {rel_path}: {e}")
            error_count += 1
        
        # Rate limiting
        time.sleep(0.5)
    
    # Count skipped media wrappers
    media_skipped = len(html_files) - len(content_files)
    
    print(f"\nDone!")
    print(f"  Total HTML files: {len(html_files)}")
    print(f"  Media wrappers skipped: {media_skipped}")
    print(f"  Translated: {translated_count}")
    print(f"  Skipped (no text): {skipped_count}")
    print(f"  Errors: {error_count}")
    
    print(f"\nDone!")
    print(f"  Translated: {translated_count}")
    print(f"  Skipped (no text): {skipped_count}")
    print(f"  Errors: {error_count}")

if __name__ == '__main__':
    main()
