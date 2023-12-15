
// Question 1

/*
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
*/

// function sevenBoom(getVal) {
//     return getVal.join().includes(7) ? 'Boom!' : 'there is no 7 in the array' ;
// }

// let result = sevenBoom([1, 23, 3, 47, 5, 6]);

// console.log(result);


// Question 2

// Methode 1

// const countBoomerangs = arr => {
// 	let collection = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if ((arr[i] === arr[i+2]) && (arr[i] != arr[i+1])) {
// 			collection++;
// 		}
// 	}
// 	return collection;
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

// Methode 2

// function countBoomerangs(arr) {
// 	return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!= arr[index+1]) , 0);
// }

// countBoomerangs([9, 5, 9, 5, 1, 1, 1]);


// Question 3

// Methode 1

// function oddishOrEvenish(num) {
//     let result = 0;
// 	let str = num.toString();

//     for (let i = 0; i < str.length; i++) {
//         result += Number(str[i]);
//     }

//     return result % 2 === 0 ? 'Even Number' : 'The Given Number is odd';
// }

// console.log(oddishOrEvenish(42));
// console.log(oddishOrEvenish(694));

// Methode 2

// function oddishOrEvenish(num) {
// 	return num.toString().split('').reduce((p,c)=>Number(p)+Number(c)) % 2 == 0 ? "Evenish":"Oddish"
// }

// Methode 3

// function oddishOrEvenish(num) {
//     return num
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((total, cur) => total + cur) %
//       2 ===
//       0
//       ? "Evenish"
//       : "Oddish";
//   }

// Question 4

// https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5

// Methode 1

// function getLength(arr) {
// 	return arr.flat(Infinity).length;
// }


// Methode 2

// function getLength(arr) {
// 	let count = 0;
// 	arr.forEach(item => {
// 		if (Array.isArray(item)) {
// 			count += getLength(item);
// 		} else {
// 			count++;
// 		}
// 	});
// 	return count;
// }

// Methode 3

// function getLength(arr) {
// 	return flatten(arr).length
// }

// function flatten(arr) {
// 	return arr.reduce((acc, v) =>
// 		Array.isArray(v) ? acc.concat(flatten(v)) : acc.concat(v), [])
// }

// console.log(getLength([1, [2, 3]]));

// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]])

// getLength([1, [2], 1, [2], 1]) ➞ 5

// Question 5

// function numInStr(arr) {
// 	var result = [];	
// 	for(let i = 0; i < arr.length; i++){
// 		for(let j = 0; j < arr[i].length; j++){
// 			var num = parseInt(arr[i][j]);			
// 			if(num){				
// 				result.push(arr[i]);
// 				break;
// 			}
// 		}
// 	}	
// 	return result;
// }


// const testSym = item => {
//     return Number(item) ? true : false;
// }

// const numInStr = (arr) => {
//     return arr.filter(item => {
//         return [...item].some(testSym) ? item : null;
//     });
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));

// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]