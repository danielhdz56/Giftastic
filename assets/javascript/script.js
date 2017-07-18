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
	$('#images').empty();
	var meme = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=b2ec119853c2410aa76aced2021ac552&q=" + meme + "&limit=10&offset=0&rating=PG-13&lang=en";
	// Creates AJAX call for the specific meme button being clicked
	$.ajax({
		url: queryURL,
	  	method: "GET"
	}).done(function(response) {
		console.log(response);
		for(i=0;i<response.data.length;i++){
			var column = $('<div>');
			column.addClass('col-xs-12 col-sm-6');
			$('#images').append(column);
			var image = $('<img>');
			image.addClass('m-0a still')
			image.attr('src', response.data[i].images.original_still.url);
			image.attr('data-still', response.data[i].images.original_still.url);
			image.attr('data-gif', response.data[i].images.original.url);
			$(column).append(image);
		}
	});
}
function stillToGif(){
	var still = $(this).attr('data-still');
	var gif = $(this).attr('data-gif');
	if(gif === $(this).attr('src')){
		$(this).attr('src', still)
	}
	else {
		console.log('I am turning it on')
		$(this).attr('src', gif)
	}
	
	
	
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
// Adding click event listeners to all elements with a class of "meme"
$(document).on("click", ".meme", displayMemeGiphys);
// Adding click event listeners to all elements with a class of "still"
$(document).on("click", ".still", stillToGif);