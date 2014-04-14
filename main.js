// Write a function "firstReverse" that takes a single string parameter and returns the string in reverse order.

// ---------------------------FUNCTION THAT WILL REVERSE THE LETTERS OF A STRING--------------------

var firstReverse = function(str){

	// Split string into an array with each letter as a string index of the array
	var array = str.split('');
	// console.log(array);

	// Reverse order of the array elements using the .reverse() method
	var newArray = [];
	newArray = array.reverse();

	// For loop that mimics .reverse() method
	// for(var i=0 ; i<array.length ; i++){
		
	// 	newArray.push(array[array.length-1-i]);
	// 	// console.log("a", array[i]);
	// 	// console.log("b", array[array.length-1-i]);

	// }

	// Combine elements of the reversed array into a single string with nothing between the elements
	var reverseString = newArray.join('');

	console.log(reverseString);

	return reverseString;

}

firstReverse('matthew');


// Write a function "swapCase" that takes a single string parameter and swaps the case of each character

// --------------------------------------------SWAP CASE FUNCTION-------------------------------

var swapCase = function(str){

	var array = str.split('');

	var newArray = [];

	array.map(function(char){
		
		if(char >= 'A' && char <= 'Z'){
			char.toLowerCase();
			newArray.push(char);
		}
		else if(char >= 'a' && char <= 'z'){
			char.toUpperCase();
			newArray.push(char);
		}
		else{
			newArray.push(char);
		}

		return newArray;
	});

	console.log(newArray);


}

swapCase("Hello World");