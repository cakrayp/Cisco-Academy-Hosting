loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var animation;
(slideViewDidLoad = function(container,id){
 
 $('#dvSliderContainer').parent().css('background-color', 'black');
 
 AnimationControlComp(id);  
})

animation = function()
{

		env1       = $("#env1")
		env4       = $("#env4")
		env6       = $("#env6")
		env8       = $("#env8")
		arrow       = $("#arrow")
		tabl       = $("#tabl")
		ID_txt01       = $("#ID_txt01")
		ID_txt02       = $("#ID_txt02")
		ID_txt03       = $("#ID_txt03")
		ID_static_4       = $("#ID_static_4")
		ID_static_5       = $("#ID_static_5")
		ID_static_6       = $("#ID_static_6")
		ID_static_7       = $("#ID_static_7")
		scrow			  =	$("#scrow")
		
		
		pause         = $("#pauseBtn");
		play          = $("#playBtn")
		restart       = $("#restartBtn");
		
           tl.to(env1,.2,{css:{opacity:0}})
		  .to(env1,1.8,{css:{opacity:1,left:110}})	
		  .to(env1,.7,{css:{top:-32}})
		  .to(env1,1.3,{css:{left:208,opacity:0}})
		  .to([arrow,tabl,ID_txt01,ID_txt02,ID_txt03,ID_static_4,ID_static_5],.1,{css:{display:"block"}})
		  .to([arrow,tabl,ID_txt01,ID_txt02,ID_txt03,ID_static_4,ID_static_5],2.5,{css:{display:"block"}})
		  .to(env4,.4,{css:{ opacity:1}})
		  .to(env4,2.5,{css:{left:365}})
		  .to(env4,1,{css:{left:372,opacity:0}})
		  .to(env4,1.3,{css:{opacity:0}})
		  .to(env6,1.9,{css:{opacity:1,left:110}})
		  .to(env6,1.8,{css:{top:-128}})
		  .to(env6,1.3,{css:{left:208,opacity:0}})
		  .to([ID_static_6,ID_static_7,scrow],.1,{css:{display:"block"}})
		  .to([ID_static_6,ID_static_7,scrow],2.1,{css:{display:"block"}})
		  .to(env8,.4,{css:{ opacity:1}})
		  .to(env8,2.5,{css:{left:365}})
		  .to(env8,1,{css:{left:372,opacity:0}})
		  .to(pause,.05,{onComplete:myFunction});	
}


function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
var animeArray = [{animFunction:animation}];