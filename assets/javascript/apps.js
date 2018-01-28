// You'll create a trivia form with multiple choice or true/false options (your choice).

// The player will have a limited amount of time to finish the quiz. 

// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.
// Don't forget to include a countdown timer.

// Variables:
// Object with questons and answers
var trivia {
	Q1: {question: "A person who collects beer bottles is known as what?", options: ["oenophilist", "brewskiphilist", "labeorphilist", "contophilist"], correctAnswer: "labeorphilist", funFact: "Collecting beer mats is called Tegestology and the fear of an empty glass is Cenosillicaphobia ."},
	Q2: {question: "All vitamins and minerals necessary for good health are in beer and other alcoholic beverages.", options: ["true", "false"], correctAnswer: "true", funFact: "Research suggests it can help protect against Alzheimer’s disease, aid weight loss and even balance hormones. Beer is high in vitamins AND low in sugar content. Beer contains all of the essential – and many of the non-essential – amino acids. As well as these protein-building blocks and minerals including phosphorus, iodine, magnesium and potassium, beer is rich in calcium so could benefit your bones."},
	Q3: {question: "What ingredient is <strong>NOT</strong> required for a beverage to be considered a beer?", options: ["water", "barley", "hops", "yeast"], correctAnswer: "barley", funFact: "Despite Bavarian Duke Wilhelm IV's decree in 1516 that the only legal ingredients for brewing beer were barley malt, hops and water, beer can be made with any cereal grain - not just barley. Early recipes for beer sometimes included mushrooms, poppy seeds, butter, bay leaves, sugar, aromatics, honey, and bread crumbs."},
	Q4: {question: "The oldest know written recipe is a recipe for beer.", options: ["true", "false"], correctAnswer: "true", funFact: "The Sumerians of ancient Mesopotamia wrote a recipe for beer around 4,000 years ago! The Babylonians are known to have made at least sixteen different kinds of beer and used a variety of grains."},
	Q5: {question: "Quite a few celebrities resorted to bar tending to pay the bills before their careers took off. Which of the following has <strong>NOT</strong> been a bartender?", options: ["Ellen DeGeneres", "Sandra Bullock", "Bruce Willis", "Bradley Cooper"], correctAnswer: "Bradley Cooper", funFact: "Conditioning your hair with beer has none benefits of cleansing, strengthening and adding a healthy shine. Catherine Zeta-Jones has been a long time fan of this sort of shower beer."},
};
// User's answer to a question
var userAnswer;
// Number of Correct choices
var numCorrect = 0;
// Number of Incorrect choices
var numIncorrect = 0;
// Unaswered questions
var numUnanswered = 0;

// Functions: 
// score keeping
function scoreKeeping() {
	// Check if user answered
	if (typeof userAnswer === "undefinied") {
		// add 1 to unanswered questions if user did not provide a choice of answer
		numUnanswered++;
	} else // if user DID answer, check if correct or incorrect
		if (userAnswer === correctAnswer) {
			// add 1 to correct chocie if users's answer is the same as the correct answer
			numCorrect++;
		// add 1 to incorrect chocie if user's answer differs from the correct answer
		} else {
			numIncorrect++;
		}
	// 
}
// end of game
function endOfGame() {
	// reveal # of correct answers
	$("#correct").html("Correct Answers: " + numCorrect)
	// reveal # incorrect answers
	$("#incorrect").html("Incorrect Answesr: " + numIncorrect)
	// revial # unanswered questions
	$("#unanswered").html("Unaswered: " + numUnanswered)
}
// timer


// Click events:
// Start button reveals trivia questions and starts timer countdown
	// while there is still time
		// take user's answer and store in variable
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