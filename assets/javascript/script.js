//Placeholder for buttons
var memeAPI = "https://api.imgflip.com/get_memes";
var memes = [];
var bootstrapClasses = {
	buttons: ['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger']
}
function renderButtons() {
	// Deletes the memes prior to adding new memes
	// (this is necessary otherwise you will have repeat buttons)
	$("#buttons").empty();
	// Loops through the array of memes
	for (var i = 0; i < memes.length; i++) {
		// Then dynamicaly generates buttons for each meme in the array
	  	// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
	  	var a = $("<button>");
	  	a.addClass("meme btn ");
	  	// Added a data-attribute
	  	a.attr("data-name", memes[i]);
	  	a.attr("type", "button");
	  	// Provided the initial button text
	  	a.text(memes[i]);
	  	// Added the button to the buttons div
	  	$("#buttons").append(a);
	}
}
// Using the memeAPI to load our initial array
$.get(memeAPI, function(res){
	for (i=0;i<10;i++){
		memes.push(res.data.memes[i].name);
	}
	renderButtons();
});
// displayMemeGiphys function re-renders the HTML to display the appropriate content
function displayMemeGiphys() {
	var meme = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=b2ec119853c2410aa76aced2021ac552&q=" + meme + "&limit=10&offset=0&rating=PG-13&lang=en";
	// Creates AJAX call for the specific meme button being clicked
	$.ajax({
		url: queryURL,
	  	method: "GET"
	}).done(function(response) {
		console.log(response)
		// var h1 = $('<h1/>');
		// $('#movies-view').append(h1);
		// $(h1).append(response.Title);
		// var p1 = $('<p/>');
		// $('#movies-view').append(p1);
		// $(p1).append(response.Rated);
		// var p2 = $('<p/>');
		// $('#movies-view').append(p2);
		// $(p2).append(response.Released);
		// var p3 = $('<p/>');
		// $('#movies-view').append(p3);
		// $(p3).append(response.Plot);
		// var img = $('<img/>');
		// $('#movies-view').append(img);
		// img.attr('200px');
		// $(img).attr('src', response.Poster);
	});
}





//Make the submit button perform a function
$("#add-meme").on("click", function(event) {
	event.preventDefault();
	// This line of code will grab the input from the textbox
	var meme = $("#meme-input").val().trim();

	// The meme from the textbox is then added to our array
	memes.push(meme);
	console.log(memes);
	// Calling renderButtons which handles the processing of our meme array
	renderButtons();
});
// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".meme", displayMemeGiphys);
