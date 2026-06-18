//loadScript("../../../common/scripts/templates/slide/InteractiveSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 895;
var STAGE_HEIGHT = 430;

function getData()
{
	var temp_type = "INTERACTIVE";
	var common_texts = [{compId:"ID_inst",x:2,y:2,size:11,textAlign:"left",expand:"down",width:433},
						{compId:"ID_table1_title",x:2,y:98,size:11,textAlign:"left",expand:"right",width:450},
						{compId:"ID_table2_title",x:3,y:186,size:11,textAlign:"left",expand:"right",width:325},
						{compId:"ID_question1",x:3,y:250,size:11,textAlign:"left",expand:"right",width:325},
						{compId:"ID_question2",x:3,y:292,size:11,textAlign:"left",expand:"right",width:560},
						{compId:"ID_hub",x:787.9,y:112,size:11,textAlign:"left",expand:"up",width:75},
						{compId:"ID_table1_txt01",x:11,y:144.4,size:11,textAlign:"center",expand:"up",width:77},
						{compId:"ID_table1_txt02",x:89.9,y:144.4,size:11,textAlign:"center",expand:"up",width:77},						
						{compId:"ID_table1_txt03",x:165.8,y:144.4,size:11,textAlign:"center",expand:"up",width:77},
						{compId:"ID_table1_txt04",x:245.7,y:144.4,size:11,textAlign:"center",expand:"up",width:77},						
						{compId:"ID_table1_txt05",x:322.6,y:144.4,size:11,textAlign:"center",expand:"up",width:77},
						{compId:"ID_table1_txt06",x:400.5,y:144.4,size:11,textAlign:"center",expand:"up",width:77},
						{text:"Fa1",compId:"Fa1_1",x:20,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa2",compId:"Fa2_1",x:61.3,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa3",compId:"Fa3_1",x:97.5,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa4",compId:"Fa4_1",x:132.75,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa5",compId:"Fa5_1",x:173.1,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa6",compId:"Fa6_1",x:212.05,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa7",compId:"Fa7_1",x:253.2,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa8",compId:"Fa8_1",x:291.5,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa9",compId:"Fa9_1",x:331.65,y:204.85,size:11,textAlign:"center",expand:"left+right",width:23},
						{text:"Fa10",compId:"Fa10_1",x:364.65,y:204.85,size:11,textAlign:"center",expand:"left+right",width:29},
						{text:"Fa11",compId:"Fa11_1",x:404.15,y:204.85,size:11,textAlign:"center",expand:"left+right",width:29},
						{text:"Fa12",compId:"Fa12_1",x:443.4,y:204.85,size:11,textAlign:"center",expand:"left+right",width:29},
						{text:"<b>0A</b>",compId:"0A1",x:560,y:103,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>0B</b>",compId:"0B1",x:607,y:103,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>0C</b>",compId:"0C1",x:657,y:103,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>0D</b>",compId:"0D1",x:703,y:103,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>0E</b>",compId:"0E1",x:749,y:185,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>0F</b>",compId:"0F1",x:797,y:185,size:11,textAlign:"center",expand:"left+right",width:21,color:"#FFF"},
						{text:"<b>Fa1 &nbsp;Fa2 &nbsp;Fa3 &nbsp;Fa4 &nbsp;Fa5 &nbsp;Fa6 &nbsp;Fa7 &nbsp;Fa8 &nbsp;&nbsp;Fa9&nbsp;&nbsp;Fa10Fa11Fa12</b>",compId:"FFF",x:558,y:23,size:10,textAlign:"left",expand:"left+right",width:300,color:"#FFF"}
						];
	var common_images = [{name:"Topology.png",x:470,y:2,width:389,height:221,type:""},
						{name:"table1.png",x:2,y:115,width:480,height:64,type:""},
						{name:"table2.png",x:2,y:201,width:480,height:40.8,type:""}];
	
	var slide_object = {type:"CUSTOM",
						texts:common_texts,
						images:common_images}
	return {templateType:temp_type,
			x:0,
			y:0,
			slideObject:slide_object}
	
	
}

