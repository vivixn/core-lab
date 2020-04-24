

 var foundText = [
{
	
		"sections":[ "We went to a cafe in SoHo for breakfast",
	    "I held the door for a slim older woman with long gray hair",
		"Emma, do you know who that was?"],

		"fullText": "<mark> Dear Diary: Last spring, I spent a long weekend in New York with my mother. One morning,</mark> we went to a cafe in SoHo for breakfast.<mark> As we went inside,</mark> I held the door for a slim older woman with long gray hair <mark> who was wearing flannel and a black beanie. As the woman walked inside ahead of us, my mother hit me in the back. </mark> “Emma, do you know who that was?” <mark> she said.” “No,” I said honestly. “That,” she said, “was Patti Smith.” — Emma Romell",
		"date": "0309",
		"source": "'I Was on the F Train Headed to an Afternoon Doctor's Appointment' – NYT Metropolitan Diary",
		"sourceLink" : "https://www.nytimes.com/2020/03/08/nyregion/metropolitan-diary.html",
		"categorization": "nostalgic"
	},
	
	{	
		"sections":[ "Creativity comes from spontaneous meetings, from random dicsussions",
	    "and",
	    "accidentally bumping into other people"],

		"fullText": " <mark> Sorry, but working from home is overrated. Steve Jobs, for one, was a famous opponent of remote work, believing that Apple employees’ best work came from</mark> accidentally bumping into other people, <mark> not sitting at home in front of an email inbox. </mark> “Creativity comes from spontaneous meetings, from random discussions,” <mark> Mr. Jobs said. “You run into someone, you ask what they’re doing, you say ‘Wow,’ </mark> and <mark> soon you’re cooking up all sorts of ideas.” </mark>",
		"date": "0309",
		"source": "'Sorry, but Working From Home Is Overrated' – NYT THE SHIFT, Kevin Roose",
		"sourceLink" : "https://www.nytimes.com/2020/03/10/technology/working-from-home.html",
		"categorization": "nostalgic"
	},

	{
		
		"sections": [ "It takes two to tango"],

		"fullText": "It takes two to tango <mark>, Grab a good book and get out on the dance floor. Begin, Dive in, Page turn, Plot Twist!, Melt, Leap Forward, Flip Backward, Stretch, Bookworm!, Curl Up, Release, Book Drop, Bow. </mark>",
		"date": "0310",
		"source": "'It Takes Two to Tango' – The New Yorker, Grant Snider",
		"sourceLink" : "https://www.nytimes.com/2020/03/06/books/review/Sketchbook-Grant-Snider.html",
		"categorization": "funny"
	},
		
	{
		"sections" :[ "her son, Jiabao",
		"means priceless treasure",
		"tries to grab his grandmother's hands",
		"mama mama",
		"her husband",
		"they had met in medical school. eachothers first loves. they had planned to grow old together."],

		"fullText": " <mark> Dr. Peng remains baffled about why Dr. Xia died after she had seemed to improve. Her immune system, like that of many health workers, may have been compromised by constant exposure to sickness. Perhaps she suffered from what experts call a 'cytokine storm' in which the immune system's reaction to a new virus englfs the lungs with white blood cells and fluid. Perhaps she died because her organs were starved of oxygen. Back at Dr. Xia's home, </mark> her son, Jiabao – which means priceless treasure, <mark> – still thinks his mother is working. When the phone rings, he </mark>tries to grab <mark>it from </mark>his grandmother's hands, <mark> shouting : </mark> 'mama, mama.'<mark> </mark>Her husband<mark>, Dr. Wu, doesn't know what to tell Jiabao. He </mark>hasn't come to terms with her death himself. They had met in medical school and were eachother's first loves. They had planned to grow old together.</mark>",
		"date": "0313",
		"source": "Two Women Fell Sick From the Coronavirus. One Survived – NYT ",
		"sourceLink" : "https://www.nytimes.com/interactive/2020/03/13/world/asia/coronavirus-death-life.html",
		"categorization": "sad"
	},
		
	{	
		"sectiona" : "🐍",
		"fullText": "snake",
		"date": "sssss",
		"source": "carnivores",
		"sourceLink" : "hi",
		"categorization": "zero"
	}
	]

// function searchByCategorization(categorization) 
// 	{var filteredArray = categorization.filter(foundText => foundText.categorization === categorization);
// 	return filteredArray;
// }

//monday.description +

//array = foundText(1).description
//foundText[monday].description


for(var i=0; i<foundText.length; i++){
	$('#foundpoem').append( "<div class ='text'>" +
		foundText[i].fullText + "<br>" + "<br>" +
		"</div>" )
}
