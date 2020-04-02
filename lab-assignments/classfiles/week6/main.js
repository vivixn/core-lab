// function changeHeading () {
// 	document.getElementById('heading').style.backgroundColor="lightblue"
// }

//2
// function changeHeading (color) {
// 	document.getElementById('heading').style.backgroundColor=color
// }

// changeHeading () abstract container for variable. 
//then you can write changeHeading ( color ) ... backgroundColor="color"
// and write orange in the brackets of the function in the HTML


//jquery
function changeHeading (color) {
	$('#heading').css({"background-color": color})
}
// variables = no "" because they change. So color doesbt have quotes

$("p").css({"background-color": "pink"});

$(".green").css({"background-color": "limegreen"});

// jQuery methods

// function hideParagraphs () {
// 	$("p").hide()
// }
// function showParagraphs () {
// 	$("p").show()
// }

// function toggleParagraphs () {
// 	$("p").toggle()
// }

//jQuery events

// $("p").click(function(){
//   $("p").css({"background-color": "pink"});
// });

//can put any element in parenthesis 

// $(".green").click(function(){
//   $("p").css({"background-color": "pink"});
// });


// function doSomething(thing) {
// 	console.log('hey',thing)
// }

//‘this’

// $("p").click(function(){
//   $(this).css({"background-color": "pink"});
// });