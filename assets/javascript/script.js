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
$.get(memeAPI, function(res){
	for (i=0;i<10;i++){
		memes.push(res.data.memes[i].name);
	}
	renderButtons();
});


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