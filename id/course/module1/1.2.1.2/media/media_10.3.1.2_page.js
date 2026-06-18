loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_title",
								x:0,
								y:1, 
								width:448,
								height:17,
								size:14,
								textAlign:"center"},
								
						{compId:"ID_txt01",
								x:82.5+37-6-30+50,
								y:137.5-6+60, 
								width:71.85,
								height:20.05,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_txt02",
								x:82.5+37-6-30+80,
								y:137.5-6+78, 
								width:71.85,
								height:20.05,
								size:11,
								textAlign:"center"},
								
						{compId:"ID_txt03",
								x:82.5+37-6-30+160-3,
								y:137.5-6+40+20, 
								width:71.85,
								height:20.05,
								size:11,
								textAlign:"center"},
								
						{compId:"static_txt01",
								bodyText:"<b>PC1</b>",
								x:30.1+27-33,
								y:145.75+20, 
								width:25.6,
								height:17,
								size:11,
								color:"white",
								textAlign:"left"},
								
						{compId:"static_txt02",
								bodyText:"<b>S1</b>",
								x:221.95+24-30,
								y:161.3+20, 
								width:17.6,
								height:17,
								size:11,
								color:"white",
								textAlign:"left"},
								
						{compId:"static_txt03",
								bodyText:"<b>PC2</b>",
								x:407.05+24-33,
								y:145.75+20, 
								width:25.6,
								height:17,
								size:11,
								color:"white",
								textAlign:"left"},];
								
	var common_images = [];
							
	var slide_1_type = "IMAGE";
	
	var slide_1_images = [{name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""},
							
						{name:"10_3_1_2_A.png",
							x:69.5+18-35,
							y:159.5-6+20,
							width:125.15,
							height:9.95,
							type:""}];	
													
	var slide_1_textboxs = [];		
						
	var slide_1_texts = [{compId:"ID_s1_txt01",
								x:5,
								y:287+91-7, 
								width:430,
								height:17,
								size:11,
								expand:"right",
								textAlign:"left"},
								
						{compId:"ID_s1_txt02",
								x:82.5+37-6-40,
								y:137.5-6+24, 
								width:81,
								height:20.05,
								size:11,
								color:"#FFFFFF",
								expand:"up",
								textAlign:"center"}];
								
	var slide_graphics = [];	
							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts,
							graphics:slide_graphics};
							
							
	var slide_2_type = "IMAGE";
	
	var slide_2_images = [{name:"10_3_1_2_B.png",
							x:49.5,
							y:65.1+39,
							width:285.5,
							height:83.05,
							type:""},
							
						{name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""}];
														
	var slide_2_textboxs = [];		
						
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:5,
							y:287+91-20, 
							width:430,
							height:17,
							size:11,
							expand:"right",
							textAlign:"left"},
							
						{compId:"ID_s2_txt02",
							x:82.5+37-6-40,
							y:137.5-6+24,
							width:81,
							height:20.05,
							size:11,
							color:"#FFFFFF",
							textAlign:"center"},
							
						{compId:"ID_s2_txt03",
							x:82.5+127-90+13,
							y:137.5-110+36, 
							width:165,
							height:20.05,
							size:11,
							textAlign:"center"}];
							
	var slide_graphics = [];	
							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts,
							graphics:slide_graphics};
							
	var slide_3_type = "IMAGE";
	
	var slide_3_images = [{name:"10_3_1_2_C.png",
							x:128,
							y:102+20,
							width:430.25,
							height:160.4,
							type:""},
						{name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""}];	
													
	var slide_3_textboxs = [];		
						
	var slide_3_texts = [{compId:"ID_s3_txt01",
							x:5,
							y:287+91-20, 
							width:430,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"},
							
						{compId:"ID_s3_txt02",
							x:289.5+28-40,
							y:139.5-3+3+20, 
							width:77.9,
							height:20.05,
							size:11,
							color:"white",
							expand:"up",
							textAlign:"center"},
							
						{compId:"ID_s3_txt03",
							x:243.5+29-38,
							y:218.5+20, 
							width:77.9,
							height:20.05,
							size:11,
							color:"white",
							expand:"up",
							textAlign:"center"},
							
						{compId:"ID_s3_txt04",
							x:137.4+18-20,
							y:46+20, 
							width:161.5,
							height:55,
							size:11,
							expand:"left+right",
							textAlign:"center"}];
							
	var slide_graphics = [];	
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts,
							graphics:slide_graphics};
							
	var slide_4_type = "IMAGE";
	
	var slide_4_images = [{name:"10_3_1_2_D.png",
							x:265,
							y:155+20,
							width:130.25,
							height:36.4,
							type:""},
							
						{name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""}];	
													
	var slide_4_textboxs = [];	
							
	var slide_4_texts = [{compId:"ID_s4_txt01",
							x:5,
							y:287+91-20, 
							width:430,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"},
							
						{compId:"ID_s4_txt02",
							x:303.5+30-37,
							y:137.5-4+3+20, 
							width:77.9,
							height:20.05,
							size:11,
							color:"white",
							textAlign:"center"}];
							
	var slide_graphics = [];
								
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts,
							graphics:slide_graphics};
							
	var slide_5_type = "IMAGE";
	
	var slide_5_images = [{name:"10_3_1_2_E.png",
							x:145.95+13-30,
							y:101+20,
							width:259.95,
							height:65.2,
							type:""},
							
						 {name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""}];
														
	var slide_5_textboxs = [];	
							
	var slide_5_texts = [{compId:"ID_s5_txt01",
							x:5,
							y:287+91-30, 
							width:430,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"},
							
						{compId:"ID_s5_txt02",
							x:303.5+30-37,
							y:137.5-4+3+20, 
							width:77.9,
							height:20.05,
							size:11,
							color:"white",
							textAlign:"center"},
							
						{compId:"ID_s5_txt03",
							x:137.4+22-26,
							y:46+20, 
							width:165.5,
							height:55,
							size:11,
							textAlign:"center"}];
							
	var slide_graphics = [];
								
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							textboxs:slide_5_textboxs,
							texts:slide_5_texts,
							graphics:slide_graphics};
							
	var slide_6_type = "IMAGE";
	
	var slide_6_images = [{name:"10_3_1_2_F.png",
							x:40.95,
							y:101+22,
							width:259.95,
							height:65.2,
							type:""},
							
						{name:"10_3_1_2.png",
							x:0,
							y:156,
							width:430.25,
							height:126.4,
							type:""}];	
													
	var slide_6_textboxs = [];
								
	var slide_6_texts = [{compId:"ID_s6_txt01",
							x:5,
							y:287+91-30, 
							width:430,
							height:17,
							size:11,
							expand:"down",
							textAlign:"left"},
							
						{compId:"ID_s6_txt03",
							x:137.4,
							y:46+20, 
							width:165.5,
							height:55,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_s6_txt02",
							x:82.5+37-6-40,
							y:137.5-6+24, 
							width:81,
							height:20.05,
							size:11,
							color:"#FFFFFF",
							expand:"up",
							textAlign:"center"}];
							
	var slide_graphics = [];
								
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							textboxs:slide_6_textboxs,
							texts:slide_6_texts,
							graphics:slide_graphics};						
							
		
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:common_images,
			slideObject:slides};
	
}
