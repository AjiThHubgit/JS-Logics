let fruitsBox = ['Apple','Mango','Banana','graps'];
let userInput = 'Mango';
let findIndex = fruitsBox.indexOf(userInput);
fruitsBox.splice(findIndex,1);
console.log(fruitsBox, 'copyFruitsBox');

