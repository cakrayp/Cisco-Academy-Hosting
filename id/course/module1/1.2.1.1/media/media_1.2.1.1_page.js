//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF); 
loadScript("../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js");
loadScript("../../../common/js/greensock/TweenMax.min.js"); 
$('head').append('<link rel="stylesheet" href="../../../common/js/jquery/css/ui-lightness/jquery-ui-1.9.1.custom.css" type="text/css" />')

var animation;
(slideViewDidLoad = function(container,id){
 
 $('#dvSliderContainer').parent().css('background-color', 'black');
 
 AnimationControlComp(id);  
})
 
animation = function()
{

		zoomImg     = $("#zoomImg")
		pause       = $("#pauseBtn");
		play        = $("#playBtn")
		restart     = $("#restartBtn");
		env1    	= $("#env1");
		env2		= $("#env2");
		env3		= $("#env3");
		env4		= $("#env4");
		env5		= $("#env5");
		bul01		= $("#bul01");
		bul02		= $("#bul02");
		bul03		= $("#bul03");
		
			
	tl.to(env1,1,{css:{opacity:1}})
	.to(env1,1.5,{css:{left:50,top:103}})
	.to(bul01,1.4,{css:{display:"block"}})
	/*.to(bul01,.2,{css:{display:"block"}})*/
	.to(bul01,.2,{css:{display:"none"}})
	.to(bul01,.8,{css:{display:"none"}})
	.to(env1,.3,{css:{opacity:"0"}})
	.to(env2,1,{css:{opacity:"1"}})
	.to(env2,1.5,{css:{left:245,top:36,opacity:0}})
	.to(env3,1,{css:{opacity:"1"}})
	.to(env3,1.5,{css:{left:311,top:103}})
	.to(bul03,1.4,{css:{display:"block"}})
	.to(bul03,.2,{css:{display:"none"}})
	.to(bul03,.8,{css:{display:"none"}})
	.to(env3,.3,{css:{opacity:"0"}})
	.to(env1,1,{css:{opacity:1}})
	.to(env1,1.5,{css:{left:50,top:36,opacity:0}})
	.to(env5,1,{css:{opacity:1}})
	.to(env5,1.5,{css:{left:180,top:103}})
	.to(bul02,1.4,{css:{display:"block"}})
	.to(bul02,.2,{css:{display:"none"}})
	.to(bul02,.8,{css:{display:"none"}})
	.to(env5,.3,{css:{opacity:0}})
	.to(env4,1,{css:{opacity:1}})
	.to(env4,1.5,{css:{left:375,top:36,opacity:0}})
		
	
	/*tl.to(zoomImg,.2,{css:{left:-54,top:190,opacity:0,scale:.1}}) 
	.to(zoomImg,2,{css:{left:59,top:75,opacity:1,scale:.9}})
	.to(zoomImg,2) 
	.to(zoomImg,2,{css:{left:133,top:170,opacity:.6,scale:.2}}) 
	.to(zoomImg,1,{css:{alpha:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(purpleShadowBox,.4,{css:{opacity:1}})
	.to(purpleShadowBox,.4,{css:{opacity:0}})
	.to(tcp,.9,{css:{width:"39px",display:"block"}})
	.to(ID_txt13,.1,{css:{display:"block"}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(purpleShadowBox1,.4,{css:{opacity:.7}})
	.to(purpleShadowBox1,.4,{css:{opacity:0}})
	.to(ip,.9,{css:{width:"27px",display:"block"}})
	.to(ID_txt14,.1,{css:{display:"block"}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.to(purpleShadowBox2,.4,{css:{opacity:.7}})
	.to(purpleShadowBox2,.4,{css:{opacity:0}})
	.append([new TweenLite(ethernet,.9,{css:{width:"64px",display:"block"}}),
			 new TweenLite(empty,.9,{css:{width:"13px",display:"block"}})])
	.to(ID_txt16,.1,{css:{display:"block"}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.to(purpleShadowBox3,.4,{css:{opacity:.7}})
	.to(purpleShadowBox3,.4,{css:{opacity:0}})
	.append([
		new TweenLite(ID_txt03,.1,{css:{display:"none"}}),
		new TweenLite(segment,.8,{css:{top:287,left:27}}),
		new TweenLite(textsegment,.8,{css:{top:60,left:-8}}),
		new TweenLite(ID_txt03,.1,{css:{display:"block"}})			 
		]) 
	.to(textsegment,.4,{css:{alpha:0}})
	.to(segment,.4,{css:{alpha:0}})
	.to(Tween32,.4,{css:{opacity:1}})
	.to(Tween32,.8,{css:{left:195}})*/
	.to(pause,.05,{onComplete:myFunction});
	
}
function myFunction()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
var animeArray = [{animFunction:animation}];

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}