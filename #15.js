// NAME:

// Mutations


// TASK:

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// 1st version: 

function mutation(arr) {
  var i,
    wordSize = arr[1].length;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  for(i = 0; i < wordSize; i += 1) {
      if (arr[0].indexOf(arr[1][i]) < 0) {
        return false;
      }
  }
  return true;
}
mutation(["hello", "hey"]);