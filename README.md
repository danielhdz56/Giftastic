# Giftastic
### Overview
I created a dynamic web page that populates with meme gifs using the GIPHY API. To do this task, I called the GIPHY API and used JavaScript and jQuery to change the HTML of the web page.
### How to use
## Pushing the Buttons
1. When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on the page. 
2. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.
3. Under every gif, the rating (PG, G, so on) is displayed. 
   * This data is provided by the GIPHY API.
## Creating the Buttons
1. The user can add memes(or anything) to the input box. When the user clicks submit that button gets added to the button column.
2. Users can't create multiple buttons with the same name
### Bonus Features
1. AutoComplete
  * When the user is filling out the input section, they are shown options they can use to autocomplete their request.
  * As the user types more characters the autocomplete options are narrowed down.
  * If a button is already on the page, it will not be displayed as an autocomplete option. 
2. If the user creates a button that has no value it will render a error screen. For example if the user creates a button called, "!".
