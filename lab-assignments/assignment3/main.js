function changeBackground(backgroundcolor){
	document.getElementById('body').style.backgroundColor= backgroundcolor;
	document.getElementById('body').style.border="thick solid white";

}


//1. paragraphs button
function changeSubHeadingInfo (articleText) {
	document.getElementById('subheading').innerHTML=articleText;
	document.getElementById('subheading').style.fontFamily= "helvetica";
	document.getElementById('subheading').style.color= "darksalmon"; 
	document.getElementById('subheading').style.textAlign="center";
}


//4. console message
var message;
message = "If u r not agnes, y r u looking at my console!?";
console.log (message);

//5. change heading
// function changeHeading (title) {
// 	document.getElementById('title1').style.fontFamily="helvetica";
// }

// let p = document.createElement("p");
// document.body.appendChild(p);

// var para = document.createElement("P");                       // Create a <p> node
// var t = document.createTextNode("hello.");      // Create a text node
// para.appendChild(t);                                          // Append the text to <p>
// document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"

function changeTitle(doineedthis) {
	document.getElementById('title').style.fontFamily="helvetica";
	document.getElementById('title').style.color="indianred";
	document.getElementById('title').style.fontStyle="italic";
	document.getElementById('title').style.textAlign="center";

}

function changeQuote(doineedthis){
	document.getElementById('quote').style.fontFamily="helvetica";
	document.getElementById('quote').style.color="coral";
	document.getElementById('quote').style.fontStyle="italic";
	document.getElementById('quote').style.textAlign="center";
}

function changeSubHeading(doineedthis){
	document.getElementById('subheading').style.fontFamily="helvetica";
	document.getElementById('subheading').style.color="salmon";
	document.getElementById('subheading').style.fontStyle="italic";
	document.getElementById('subheading').style.textAlign="center";
}


function centerDiv(center) {
	document.getElementById('hey').style.textAlign="center";
}