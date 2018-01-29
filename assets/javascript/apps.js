// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

// Variables:
// Object with questons and answers
var quotes = [
	{quote: '"He was a wise man who invented beer."', author: 'Plato'},
	{quote: '"Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health."', author: 'Thomas Jefferson'},
	{quote: '"In a study, scientists report that drinking beer can be good for the liver. I’m sorry, did I say ‘scientists’? I meant Irish people."', author: 'Tina Fey'},
	{quote: '"Instead of water we got here a draught of beer…a lumberer’s drink, which would acclimate and naturalize a man at once—which would make him see green, and, if he slept, dream that he heard the wind sough among the pines."', author: 'Henry David Thoreau'},
	{quote: '"Beer, it’s the best damn drink in the world."', author: 'Jack Nicholson'},
	{quote: '"Isn’t beer the holy libation of sincerity? The potion that dispels all hypocrisy, any charade of fine manners? The drink that does nothing worse than incite its fans to urinate in all innocence, to gain weight in all frankness?"', author: 'Milan Kundera'},
	{quote: '"Beer’s intellectual. What a shame so many idiots drink it."', author: 'Ray Bradbury'},
	{quote: '"Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!"', author: 'Martin Luther'},
	{quote: '"Without question, the greatest invention in the history of mankind is beer. Oh, I grant you that the wheel was also a fine invention, but the wheel does not go nearly as well with pizza."', author: 'Dave Barry'},
	{quote: '"There is an ancient Celtic axiom that says ‘Good people drink good beer.’ Which is true, then as now. Just look around you in any public barroom and you will quickly see: Bad people drink bad beer. Think about it."', author: 'Hunter S. Thompson'},
	{quote: '"Give me a woman who loves beer and I will conquer the world."', author: 'Kaiser Wilhelm'},
	{quote: '"Beer is proof that God loves us and wants us to be happy."', author: 'Benjamin Franklin'},
];

var trivia = [
	{question: "A person who collects beer bottles is known as what?", options: ["oenophilist", "brewskiphilist", "labeorphilist", "contophilist"], correctAnswer: "labeorphilist", funFact: "Collecting beer mats is called Tegestology and the fear of an empty glass is Cenosillicaphobia ."},
	{question: "All vitamins and minerals necessary for good health are in beer and other alcoholic beverages.", options: ["true", "false"], correctAnswer: "true", funFact: "Research suggests it can help protect against Alzheimer’s disease, aid weight loss and even balance hormones. Beer is high in vitamins AND low in sugar content. Beer contains all of the essential – and many of the non-essential – amino acids. As well as these protein-building blocks and minerals including phosphorus, iodine, magnesium and potassium, beer is rich in calcium so could benefit your bones."},
	{question: "What ingredient is <strong>NOT</strong> required for a beverage to be considered a beer?", options: ["water", "barley", "hops", "yeast"], correctAnswer: "barley", funFact: "Despite Bavarian Duke Wilhelm IV's decree in 1516 that the only legal ingredients for brewing beer were barley malt, hops and water, beer can be made with any cereal grain - not just barley. Early recipes for beer sometimes included mushrooms, poppy seeds, butter, bay leaves, sugar, aromatics, honey, and bread crumbs."},
	{question: "The oldest know written recipe is a recipe for beer.", options: ["true", "false"], correctAnswer: "true", funFact: "The Sumerians of ancient Mesopotamia wrote a recipe for beer around 4,000 years ago! The Babylonians are known to have made at least sixteen different kinds of beer and used a variety of grains."},
	{question: "Quite a few celebrities resorted to bar tending to pay the bills before their careers took off. Which of the following has <strong>NOT</strong> been a bartender?", options: ["Ellen DeGeneres", "Sandra Bullock", "Bruce Willis", "Bradley Cooper"], correctAnswer: "Bradley Cooper", funFact: "Conditioning your hair with beer has none benefits of cleansing, strengthening and adding a healthy shine. Catherine Zeta-Jones has been a long time fan of this sort of shower beer."},
];
// User's answer to a question
var userAnswer = [];
// Number of Correct choices
var numCorrect = 0;
// Number of Incorrect choices
var numIncorrect = 0;
// Unaswered questions
var numUnanswered = 0;

// Functions: 
// score keeping
function scoreKeeping() {
	// compare array of user selected answers against the correct answers
	for (var i = 0; i < (trivia.length); i++) {
		// Check if user even answered
		if (typeof userAnswer[i] === "undefined") {
			// add 1 to unanswered questions if user did not provide a choice of answer
			numUnanswered++;
		} else // if user DID answer, check if correct or incorrect
			if (userAnswer[i] === trivia[i].correctAnswer) {
				// add 1 to correct chocie if users's answer is the same as the correct answer
				numCorrect++;
			} else {
				// add 1 to incorrect chocie if user's answer differs from the correct answer
				numIncorrect++;
			}
	}
}
// end of game
function endOfGame() {
	// snarky comment on perfomance
	var result = $("<p>");
	if (numCorrect < (numIncorrect + numCorrect)) {
		result.text("Are you drunk already? You played horribly!");
	} else {
		result.text("Well played! You might be a professional alcoholic.")
	}
	// reveal # of correct answers
	$("#correct").html("Correct Answers: " + numCorrect)
	// reveal # incorrect answers
	$("#incorrect").html("Incorrect Answesr: " + numIncorrect)
	// revial # unanswered questions
	$("#unanswered").html("Unaswered: " + numUnanswered)
}
// timer

$( document ).ready(function() {
	// display a random quote on starting page
	var randomInt= Math.floor(Math.random()*(quotes.length));
	console.log(randomInt);
	console.log(quotes[randomInt].quote);
	console.log(quotes[randomInt].author);
	$("#randQuote").html(quotes[randomInt].quote);
	$("#quoteAttr").html(quotes[randomInt].author);
	// Click events:
	// Start button reveals trivia questions and starts timer countdown
	$( "#clickStart" ).click(function() {
		console.log("you clicked start")
	  $( ".start" ).hide();
	  });
		// while there is still time
			// take user's answer and store in Variables
			// only allow user to choose one answer per question
			// Done button
				// run score keeping
				scoreKeeping();
				// run end of game
				endOfGame();
		// if time runs,
			// run score keeping
			scoreKeeping();
			// run end of game
			endOfGame();
});

