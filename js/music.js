// Initialize Parse app
Parse.initialize("KBpY9UFv8IvbhouDufNQQX5VWlzJ2qrKBJF498pM", "crPCW5ZQ0Xp423pW7fmd3Pvogc8yAYgcMDIXvLeo");

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// Create a new instance of your Music class 
// var song = new Music();

// // Set a property 'band' equal to a band name
// song.set('band', 'Muse'); 

// // Set a property 'website' equal to the band's website
// song.set('website', 'muse.com');
    
// // Set a property 'song' equal to a song
// song.set('song', 'Knights of cydonia');

// // Save your instance of your song -- and go see it on parse.com!
// song.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var music = new Music();

	// For each input element, set a property of your new instance equal to the input's value
	var band = $('#band').val();
	music.set('band', band);
	var song = $('#song').val();
	music.set('song', band);
	var website = $('#website').val();
	music.set('website', band);

	// After setting each property, save your new instance back to your database
	music.save();

	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


