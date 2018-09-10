// NAME:

//Find the Longest Word in a String

// TASK:

//Return the length of the longest word in the provided sentence.
//Your response should be a number.
//Remember to use Read-Search-Ask if you get stuck. Write your own code.


// 1st version:

function findLongestWordLength(str) {
  var key,
    words = [],
    wordsQuantity,
    maxWordLength = 0,
    WordLength;
  
  words = str.split(' ');
  for (key in words) {
    WordLength = words[key].length;
    if (WordLength > maxWordLength) {
      maxWordLength = WordLength;
    }
   }
  return maxWordLength;
}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));


// another way - not finished
// function findLongestWordLength(str) {
//   var wordSize = 0,
//   maxSize = 0,
//   i;
//     for (i = 0; i < str.length; i += 1 ) {
//       if (str[i] === ' ') {
//         if (wordSize > maxSize) {
//           maxSize = wordSize;
//           wordSize = 0;
//         } else {
//           wordSize = 0;
//         }
//       } else {
//           wordSize += 1;
//         }
//       }
//     return maxSize;
//   }


// findLongestWordLength("The quick brown fox jumped over the lazy dog");
