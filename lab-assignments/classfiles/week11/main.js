

 var animals = [
	{
		"name": "chicken",
		"sound": "bokbok",
		"diet": "omnivores",
		"numberOfLegs": "two"
	},
	{
		"name": "tiger",
		"sound": "rawr",
		"diet": "carnivores",
		"numberOfLegs": "four"
	},
	{
		"name": "penguin",
		"sound": "gak",
		"diet": "carnivores",
		"numberOfLegs": "two"
	},
	{
		"name": "kangaroo",
		"sound": "growlee",
		"diet": "herbivores",
		"numberOfLegs": "two"
	},
	{
		"name": "snake",
		"sound": "sssss",
		"diet": "carnivores",
		"numberOfLegs": "zero"
	}
]



for(var i=0; i<animals.length; i++){
	$('#list').append("<div class='animalname'>" + animals[i].name + "</div>" + "<br>")
}

for(var i=0; i<animals.length; i++){
	$('#list').append("<div class='animalsound'>" + animals[i].sound + "</div>" + "<br>")
}

for(var i=0; i<animals.length; i++){
	$('#list').append("<div class='animaldiet'>" + animals[i].diet + "</div>" + "<br>")
}

for(var i=0; i<animals.length; i++){
	$('#list').append("<div class='animalnumberoflegs'>" + animals[i].numberOfLegs+ "</div>" + "<br>")
}


// var chicken = 
// 	{
// 		"name": "chicken"
// 		"sound": "bokbok"
// 		"diet": "omnivores"
// 		"numberOfLegs": "two"
// 	}

// var tiger =

// 	{
// 		"name": "tiger"
// 		"sound": "rawr"
// 		"diet": "carnivores"
// 		"numberOfLegs": "four"
// 	},
// var penguin =
// 	{
// 		"name": "penguin"
// 		"sound": "gak"
// 		"diet": "carnivores"
// 		"numberOfLegs": "two"
// 	},

// var kangaroo =
// 	{
// 		"name": "kangaroo"
// 		"sound": "growlee"
// 		"diet": "herbivores"
// 		"numberOfLegs": "two"
// 	},
// var snake =
// 	{
// 		"name": "snake"
// 		"sound": "sssss"
// 		"diet": "carnivores"
// 		"numberOfLegs": "zero"
// 	}



 