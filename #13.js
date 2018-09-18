// NAME:

// Falsy Bouncer

// TASK:

//Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// 1st version: 

function bouncer(arr) {
  var newArr = [],
  key;
   for (key in arr) {
     if (!!arr[key]) newArr =newArr.concat(arr[key]);
   }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);