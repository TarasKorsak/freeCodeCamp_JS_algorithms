//NAME:

// Reverse a String

// TASK:

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// 1st version:
function reverseString(str) {
	var letterIndex = str.length - 1,
	i,
	result = '';
	
	for(i = letterIndex; i>= 0; i -= 1) {
		result += str[i]
	}
	return result;
}
reverseString("hello");