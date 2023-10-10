/*
Array.unshift()
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. This method modifies the original array.
*/

let fruits = ['apple','mango','orange'];
console.log(fruits.unshift('graps'));
console.log(fruits, 'unshift');

/*
Array.push()
The push() method adds one or more elements to the end of an array and returns the new length of the array.
*/

let numArray = [1,4,6,8,10];
console.log(numArray.push(12)); //returns the new length of the array
console.log(numArray, 'push'); //print the numArray

/*
Array.shift()
The shift() method removes the first element from an array and returns that element. This method modifies the original array.
*/

let shitArr = [0,1,2,3,4,5];
console.log(shitArr.shift());
console.log(shitArr, 'shift');

/*
Array.pop()
The pop()method removes the last element from an array and returns that element. This method modifies the original array.
*/

const myArray = [1, 2, 3, 4];
console.log(myArray.pop());
console.log(myArray, 'pop');

/*
Array.slice()
The slice() method returns a shallow copy of a portion of an array into a new array object. The original array is not modified.
*/

const sliceArr = [1, 2, 3, 4];
console.log(sliceArr.slice(1, 3)); //shallow copy
console.log(sliceArr, 'slice'); //The original array is not modified.

/*
Array.splice()
The splice()method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array
*/

const spliceArr = [1, 2, 3, 4];
spliceArr.splice(2, 1, "a", "b");
console.log(spliceArr, 'splice');

/*
Reference :
https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript 
*/