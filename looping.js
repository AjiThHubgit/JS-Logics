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
    // person.fname
    // console.log(getKey[i]);
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
for (let getData in storeJsonData) {
    console.log(storeJsonData[getData]);
}
*/

/*
let resJson = {
    jsonData: {
        one: [0, 1, 2, 3],
        two: [4, 1, 6, 3],
        three: [8, 9, 10, 11]
    },
    duplicates : []
}


for (let firstArray in resJson.jsonData.one) {
    for (let secondArray in resJson.jsonData.two) {
        if (resJson.jsonData.one[firstArray] === resJson.jsonData.two[secondArray]) {
            resJson.duplicates.push(resJson.jsonData.one[firstArray]);
        }
    }
}

console.log(resJson);
*/


/*
let duplicates = [];
let oneArray = resJson.jsonData.one;
let twoArray = resJson.jsonData.two;
for (let i = 0; i < oneArray.length; i++) {
    let currentNumber = oneArray[i];
     // Check if the currentNumber exists in the "two" array
     let foundDuplicate = false;
     for (let j = 0; j < twoArray.length; j++) {
        if (currentNumber === twoArray[j]) {
            foundDuplicate = true;
            break;
        }
     }

     // If a duplicate is found, add it to the duplicates array
    if (foundDuplicate && !duplicates.includes(currentNumber)) {
        duplicates.push(currentNumber);
    }
}

// Check if there are any duplicates and print them
if (duplicates.length > 0) {
    console.log("Duplicate numbers between 'one' and 'two' arrays:");
    console.log(duplicates);
} else {
    console.log("No duplicate numbers found between 'one' and 'two' arrays.");
}
*/


/*
var json = {
    jsonData: [{
        one: [11, 12, 13, 14, 15]
    }, {
        two: [21, 22, 23]
    }, {
        three: [31, 32]
    }]
};

for (let i = 0; i < json.jsonData.length; i++) {
    for (let getKeys in json.jsonData[i]) {
        for (let j = 0; j < json.jsonData[i][getKeys].length; j++) {
            console.log(json.jsonData[i][getKeys][j]);
        }
    }
}
*/