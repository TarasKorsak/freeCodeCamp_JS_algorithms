// NAME:

// Truncate a String

// TASK:

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// 1st version:

function truncateString(str, num) {
  var result = '',
    i;
  if (str.length <= num) {
    return str;
  } else {
      for (i = 0; i < num; i += 1) {
          result += str[i];
      }
  }
  result += '...'
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);