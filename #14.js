// NAME:

// Where do I Belong


// TASK:

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// 1st version: 

function getIndexToIns(arr, num) {
  var arraySize, i;
  
  function compareNumeric(a, b) {
    return a - b;
  }
  
  arr.sort(compareNumeric);
  arraySize = arr.length;
  for (i = 0; i < arraySize; i += 1) {
    if (arr[i] >= num) {
      break;
    }
  }
  if (arr[i] >= num) {
    return i;
  } else {
    return arraySize;
  }
}


getIndexToIns([40, 60], 50);