// Variables:
// ----------
// array of beer-related quotes
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
// count for slide show
var slideNum = 1;

// On page load:
// -------------
$( document ).ready(function() {
	$("#randQuote").html(quotes[0].quote);
	$("#quoteAttr").html(quotes[0].author);
	// Loop through displaying quotes
	setInterval(function(){
		console.log(slideNum);
		// display next quote
		$("#randQuote").html(quotes[slideNum].quote);
		$("#quoteAttr").html(quotes[slideNum].author);
		slideNum++;
		// when runs through all quotes
		if (slideNum === quotes.length) {
			// go back to first quote in array
			slideNum =  0;
			}
		}, 1000*5); // changes quote every 5 seconds
});