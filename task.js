// Task 1

// let fruitsBox = ['Apple','Mango','Banana','graps'];
// let userInput = 'Mango';
// let findIndex = fruitsBox.indexOf(userInput);
// fruitsBox.splice(findIndex,1);
// console.log(fruitsBox, 'copyFruitsBox');

// Task 2

let countryFinal = [
    {
        name: 'India',
        selected: false
    },
    {
        name: 'America',
        selected: false
    },
    {
        name: 'Dubai',
        selected: false
    }
]

let countryObj =  [
    {
        name: 'India',
        selected: false
    },
    {
        name: 'America',
        selected: true
    },
    {
        name: 'Dubai',
        selected: false
    }
];

// Find the index of the object with selected: true
let index = countryObj.findIndex(obj => obj.selected === true);

console.log(index);

// If the index is found, remove the element at that index using splice
if (index !== -1) {
    let modifiedArray = countryObj.slice(); // Create a shallow copy
    modifiedArray.splice(index, 1); // Remove the element at the found index

    console.log('Modified Array:', modifiedArray);
} else {
    console.log('No object with selected: true found.');
}

