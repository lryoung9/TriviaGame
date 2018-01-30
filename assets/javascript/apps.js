// Variables:
// ----------
// Object with questons and answers
var trivia = [
	{question: "A person who collects beer bottles is known as what?", options: ["oenophilist", "brewskiphilist", "labeorphilist", "contophilist"], correctAnswer: "labeorphilist", funFact: "Collecting beer mats is called Tegestology and the fear of an empty glass is Cenosillicaphobia ."},
	{question: "All vitamins and minerals necessary for good health are in beer and other alcoholic beverages.", options: ["true", "false"], correctAnswer: "true", funFact: "Research suggests it can help protect against Alzheimer’s disease, aid weight loss and even balance hormones. Beer is high in vitamins AND low in sugar content. Beer contains all of the essential – and many of the non-essential – amino acids. As well as these protein-building blocks and minerals including phosphorus, iodine, magnesium and potassium, beer is rich in calcium so could benefit your bones."},
	{question: "What ingredient is NOT required for a beverage to be considered a beer?", options: ["water", "barley", "hops", "yeast"], correctAnswer: "barley", funFact: "Despite Bavarian Duke Wilhelm IV's decree in 1516 that the only legal ingredients for brewing beer were barley malt, hops and water, beer can be made with any cereal grain - not just barley. Early recipes for beer sometimes included mushrooms, poppy seeds, butter, bay leaves, sugar, aromatics, honey, and bread crumbs."},
	{question: "The oldest known written recipe is a recipe for beer.", options: ["true", "false"], correctAnswer: "true", funFact: "The Sumerians of ancient Mesopotamia wrote a recipe for beer around 4,000 years ago! The Babylonians are known to have made at least sixteen different kinds of beer and used a variety of grains."},
	{question: "Quite a few celebrities resorted to bar tending to pay the bills before their careers took off. Which of the following has NOT been a bartender?", options: ["Ellen DeGeneres", "Sandra Bullock", "Bruce Willis", "Bradley Cooper"], correctAnswer: "Bradley Cooper", funFact: "Conditioning your hair with beer has none benefits of cleansing, strengthening and adding a healthy shine. Catherine Zeta-Jones has been a long time fan of this sort of shower beer."},
];
// User's answer to a question
var userAnswer = [];
// Number of Correct choices
var numCorrect = 0;
// Number of Incorrect choices
var numIncorrect = 0;
// Unaswered questions
var numUnanswered = 0;
// Set time given to answer questions
var counter = 90;

var timerId;

// Functions:
// ----------
// score keeping
function scoreKeeping() {
	// take user's answer and store in Variables
	for (var i = 0; i < trivia.length; i++) {
		var selectedAnswer = $('input[name=' + i + ']:checked').val();
		console.log(selectedAnswer)
		// userAnswer.push(selectedAnswer)
		// compare array of user selected answers against the correct answers
		// for (var i = 0; i < trivia.length; i++) {
			// Check if user even answered
			if (typeof selectedAnswer === "undefined") {
				// add 1 to unanswered questions if user did not provide a choice of answer
				numUnanswered++;
				console.log("Number of unanswered: " + numUnanswered)
			} else // if user DID answer, check if correct or incorrect
				if (selectedAnswer === trivia[i].correctAnswer) {
					// add 1 to correct chocie if users's answer is the same as the correct answer
					numCorrect++;
					console.log("Number of correct:" + numCorrect)
				} else {
					// add 1 to incorrect chocie if user's answer differs from the correct answer
					numIncorrect++;
					console.log("Number of incorrect: " + numIncorrect)
				}
		// }	
	}
	
}
// end of game
function endOfGame() {
	// Hide question section
	$("#trivia").hide();
	$("#showScore").show();
	// snarky comment on perfomance
	if (numCorrect < (numIncorrect + numCorrect)) {
		$("#result").html("<h2>Are you drunk already? You played horribly!</h2>");
	} else {
		$("#result").html("<h2>Well played! You might be a professional alcoholic.</h2>")
	}
	// reveal # of correct answers
	$("#correct").html("<h2>Correct Answers: " + numCorrect + "</h2>")
	// reveal # incorrect answers
	$("#incorrect").html("<h2>Incorrect Answers: " + numIncorrect + "</h2>")
	// revial # unanswered questions
	$("#unanswered").html("<h2>Unaswered: " + numUnanswered + "</h2>")
}

// On page load:
// -------------
$( document ).ready(function() {
	// Hide end results
	$("#showScore").hide();
	// Start button reveals trivia questions
		for (var i = 0; i < trivia.length; i++) {
		var dispQuestion = $("<p>");
		dispQuestion.addClass("questions");
		dispQuestion.text(trivia[i].question);
		$(".trivia-wrap").append(dispQuestion);
		for (var j = 0; j < trivia[i].options.length; j++) {
			var dispOptions = $('<label class="radio-inline"><input name=' + i + ' value= ' + trivia[i].options[j] + ' type="radio">' + trivia[i].options[j] + '</label>');
			dispOptions.addClass("answers");
			$(".trivia-wrap").append(dispOptions);
		}
	}
	$("#time").html("Time left: " + counter + " seconds")
	// start timer countdown
	timerId = setInterval(function() {
		console.log(counter);
		counter--
		$("#time").html("Time left: " + counter + " seconds")
		// when time runs out
		if (counter === 0) {
			// stop timer
			clearInterval(timerId);
			// run score keeping
			scoreKeeping();
			// run end of game
			endOfGame();
			}
		}, 1000);

	// if user hits done button
	$("#end").click(function() {
		// run score keeping
		scoreKeeping();
		// run end of game
		endOfGame();
	});
});