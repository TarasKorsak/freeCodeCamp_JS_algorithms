// NAME:

// Slice and Splice

// TASK:

//You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// 1st version: 

function frankenSplice(arr1, arr2, n) {
	var tempArray1 = [],
			tempArray2 = [],
			newArray = [];
		
		tempArray1 = arr2.slice();
		tempArray2 = arr2.slice(n);
		newArray = tempArray1.splice(0, n).concat(arr1);
		newArray = newArray.concat(tempArray2);
		return newArray;
	}
	
	frankenSplice([1, 2, 3], [4, 5, 6], 1);