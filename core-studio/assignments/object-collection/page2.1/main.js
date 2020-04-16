

 var foundText = [
{
		"text1" : {
		"section1a" : "We went to a cafe in SoHo for breakfast",
		"section1b" : "I held the door for a slim older woman with long gray hair",
		"section1c" : "Emma, do you know who that was?",
		"fullText": "Dear Diary: <br> Last spring, I spent a long weekend in New York with my mother. One morning, we went to a cafe in SoHo for breakfast. <br> As we went inside, I held the door for a slim older woman with long gray hair who was wearing flannel and a black beanie. <br> As the woman walked inside ahead of us, my mother hit me in the back. <br> “Emma, do you know who that was?” she said.” <br> “No,” I said honestly. <br> “That,” she said, “was Patti Smith.” <br> — Emma Romell",
		"date": "0309",
		"source": "'I Was on the F Train Headed to an Afternoon Doctor's Appointment' – NYT Metropolitan Diary",
		"sourceLink" : "https://www.nytimes.com/2020/03/08/nyregion/metropolitan-diary.html",
		"categorization": "nostalgic"
	}},
	
	{	"text2" : {	
		"section2a" : "Creativity comes from spontaneous meetings, from random dicsussions",
		"fullText": " Sorry, but working from home is overrated. Steve Jobs, for one, was a famous opponent of remote work, believing that Apple employees’ best work came from accidentally bumping into other people, not sitting at home in front of an email inbox. “Creativity comes from spontaneous meetings, from random discussions,” Mr. Jobs said. “You run into someone, you ask what they’re doing, you say ‘Wow,’ and soon you’re cooking up all sorts of ideas.”",
		"date": "0309",
		"source": "'Sorry, but Working From Home Is Overrated' – NYT THE SHIFT, Kevin Roose",
		"sourceLink" : "https://www.nytimes.com/2020/03/10/technology/working-from-home.html",
		"categorization": "optimistic"
	}},

	{
		
		"text3" : {	
		"section3a" : "It takes two to tango",
		"fullText": "It takes two to tango, Grab a good book and get out on the dance floor. Begin, Dive in, Page turn, Plot Twist!, Melt, Leap Forward, Flip Backward, Stretch, Bookworm!, Curl Up, Release, Book Drop, Bow.",
		"date": "0310",
		"source": "'It Takes Two to Tango' – The New Yorker, Grant Snider",
		"sourceLink" : "https://www.nytimes.com/2020/03/06/books/review/Sketchbook-Grant-Snider.html",
		"categorization": "funny"
	}},
		
	{
		"text4" : {
		"section4a" : "her son, Jiabao",
		"section4b" : "means priceless treasure",
		"section4c" : "tries to grab his grandmother's hands",
		"section4d" : "mama mama",
		"section4e" : "her husband",
		"section4f" : "they had met in medical school. eachothers first loves. they had planned to grow old together.",
		"fullText": "Dr. Peng remains baffled about why Dr. Xia died after she had seemed to improve. Her immune system, like that of many health workers, may have been compromised by constant exposure to sickness. Perhaps she suffered from what ",
		"date": "0313",
		"source": "Two Women Fell Sick From the Coronavirus. One Survived – NYT ",
		"sourceLink" : "hi",
		"categorization": "two"
	}},
		
	{	
		"text5" : {
		"sectiona" : "🐍",
		"fullText": "snake",
		"date": "sssss",
		"source": "carnivores",
		"sourceLink" : "hi",
		"categorization": "zero"
	}}
	]

//monday.description +

//array = foundText(1).description
//foundText[monday].description




for(var i=0; i<1; i++){
	$('#foundpoem').append( "<div class='text1a'>" + "&nbsp" +  "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" +
		foundText[0].text1.section1a + "<br>" +
		"</div>" )
}

for(var i=0; i<1; i++){
	$('#foundpoem').append( "<div class='text1b'>" + 
	foundText[0].text1.section1b + "<br>" +
		"</div>" )
}
