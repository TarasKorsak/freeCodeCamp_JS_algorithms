// NAME:

// Repeat a String Repeat a String

// TASK:

//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// 1st version: (not finished)

function repeatStringNumTimes(str, num) {
  var i,
    resultedStr = '';
  
  if (num <= 0){
    return '';
  } else {}
    for (i = 1; i <= num; i += 1){
      resultedStr += str;
    }
  return resultedStr;
}

repeatStringNumTimes("abc", 3);