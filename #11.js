// NAME:

// Title Case a Sentence

// TASK:

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// 1st version: 

function titleCase(str) {
  var i,
      newStr = '';
  
  for (i = 0; i < str.length; i +=1) {
    if ((i == 0) || (str[i - 1] === ' ')) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();   
    }
  }
  
  return newStr;
}
  
titleCase("i'm a liTTle tea pot");