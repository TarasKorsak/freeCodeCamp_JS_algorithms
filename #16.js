// NAME:

// Chunky Monkey


// TASK:

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// 1st version: 

function chunkArrayInGroups(arr, size) {
  var index = 0,
    i,
    i1,
    i2,
    newArray = [],
    arrSize = arr.length;
  
  for (var i = 0; i < arrSize / size; i += 1) {
     newArray[i] = [];
  }
  for (i1 = 0; i1 < arrSize / size; i1 += 1) {
    for (i2 = 0; i2 < size; i2 += 1) {
      newArray[i1][i2] = arr[index];
      index +=1;
      if (index === arrSize) break; 
    }
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);