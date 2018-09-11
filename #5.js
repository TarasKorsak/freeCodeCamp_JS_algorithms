// NAME:

//Return Largest Numbers in Arrays

// TASK:

//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
// Remember to use Read-Search-Ask if you get stuck. Write your own code.


// 1st version: (not finished)

function largestOfFour(arr) {
	var i1,
	i2,
	finalArr = [],
	maxItem;

	function isBigger(arg1, arg2) {
		return arg1 > arg2 ? arg1 : arg2;
	}

	for (i1 = 0; i1 < arr.length; i1 += 1) {
		maxItem = arr[i1][0];
		for (i2 = 0; i2 < arr[i1].length - 1; i2 += 1) {
			if (maxItem < isBigger(arr[i1][i2], arr[i1][i2 +1])){
            	maxItem = isBigger(arr[i1][i2], arr[i1][i2 +1]);
            } 
		}
		finalArr[i1] = maxItem;
		
		console.log(finalArr[i1]);
	}
	return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);