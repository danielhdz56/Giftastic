//Placeholder for buttons
var memeAPI = "https://api.imgflip.com/get_memes";
var bootstrapClasses = {
	buttons: ['btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger']
}
$.get(memeAPI, function(res){
	for (i=0;i<10;i++){
		var button = $('<button/>');
		button.attr('type', 'button');
		button.addClass('btn ' + bootstrapClasses.buttons[Math.floor(Math.random()*bootstrapClasses.buttons.length)]);
		button.append(res.data.memes[i].name);
		console.log(res.data.memes[i])
		$('#buttons').append(button);
	}
});
