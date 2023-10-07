/*
let number = [23,10,5,12,32];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}
*/

/*
let element = document.querySelectorAll('a');
console.log(element, 'array');
console.log(element.length, 'array length');
for (let i = 0; i < element.length; i++) {
    console.log(element[i], 'loop array');
    element[i].style.color = 'red';
}
*/

/*
let person = { fname: "John", lname: "Mohan", age: 24 };

// using for loop

console.log(Object.keys(person));
let getKey = Object.keys(person);
let findLength = Object.keys(person).length;
for (let i = 0; i < findLength; i++) {
    console.log(person[getKey[i]], 'give person details');
}

// using for in loop

for (let x in person) {
    console.log(x, 'key');
    console.log(person[x], 'value');
}
*/


/*
let resJson = {
    jsonData: { fname: "John", lname: "Mohan", age: 24 }
}

// using for loop
let storeKeyInArray = Object.keys(resJson.jsonData);
for (let i = 0; i < storeKeyInArray.length; i++) {
    console.log(resJson.jsonData[storeKeyInArray[i]]);
}

// using for in loop
let storeJsonData = resJson.jsonData;
for (getData in storeJsonData) {
    console.log(storeJsonData[getData]);
}
*/


let resJson = {
    jsonData: {
        one: [12, 10, 11, 14],
        two: [12, 10, 11, 14],
        three: [12, 10, 11, 14]
    }
}

console.log(Object.keys(resJson));
console.log(Object.keys(resJson.jsonData));

// for () {

// }

