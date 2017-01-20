/*******************/
/***Instructions****/
/*******************/

	// Create an array that contains the letters of the alphabet
	// The stackLetter function should accept the array as the sole argument
	// Write a `for` loop that iterates over the array argument and
	// outputs the letters.
	// Invoke the function and pass in the array


/*
	Adding Conditions to the Loop

	Then add logic to stackLetters that places a space after every third letter. 
	This will require you to do some basic math in JavaScript, and use an if statement.
	Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.
	If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator 
	- then add a single space to the output.
	
	a
	ab
	abc
	abc d
	abc de
	abc def
	abc def g
	abc def gh
	abc def ghi
	etc... 
*/

/********************** Iterate Through an Array and Log the Data in the Console ***********************/

// Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
	"u", "v", "w", "x", "y", "z"];

// The stackLetter function accepts the array as the sole argument
function stackLetters (theAlphabetArray) {
    // A `for` loop iterates over the array argument and outputs the letters
     for (i = 0; i < alphabet.length; i++) {
     	// Log the letters of the alphabet in the console
     	console.log(alphabet[i]);
     }
}

// Invoke the function and pass in the array
stackLetters(alphabet);


/************ Iterate Through a String and Log the Data in the Console in a Cascading Form (+1 each line)*************/

// Convert the array into a string
var alphabetJoin = alphabet.join('');
// Initiate a loop to iterate through the string
for (j = 0; j < alphabet.length; j++) {
	// Log cascading segments of the string in the console, beginning with one and increasing by one letter each line
	console.log(alphabetJoin.substr(0,j));
}


/********** Iterate Through an Array and Log the Data in the Console with a Space after Every Third Letter***********/

// Initialize an array to hold the data
var spacedArray = [];
// Initiate a loop to iterate through the array
for (k = 0; k < alphabet.length; k++) {
	// Add letters to the array individually
	spacedArray += alphabet[k];
	// Log letters in the console
	console.log(spacedArray);

	// Determine whether the ordinal number of the letter is divisible by 3 with no remainder
	if ((k + 1) % 3 === 0) {	  	
		// If so, enter a space into the array and log the sequence in the console
		console.log(spacedArray += " ");
	}
};








