$("body").css({"background-color": "lavenderblush", 
	"text-align" : "center", "font-family" : "garamond", "color" : "royalblue",
"filter" : "blur(.5px)", "opacity" : "50%", "padding" : "4vmin", "border": "ridge 10vmin pink", "overflow": "none"});

function changeBackground () {
	$(".blue").css({"color": "blue", "font-style" :"italic"})
} ;

function toggle () {
	$("blockquote").toggle() };

function onIt1 () {
$(".p1").css({  "filter" : "blur(.5px)"})  };
function onIt2 () 
{ $(".p2").css({ "filter" : "blur(1px)"})  };
function onIt3 ()
{ $(".p3").css({ "filter" : "blur(1.5px)"})  };
function onIt4 ()
{ $(".p4").css({ "filter" : "blur(2px)"})
 };

  $("button").click(function(){
    $("blockquote").toggle();
  });





//  function onup4 ()
// { $(".p4").css({ "opacity" : "100%", "filter" : "invert(100%)" })
//  };
// document.querySelector('.p1').remove("blur");


// $("p").click(function(){
//   $("p").css({"background-color": "pink"});
// });

