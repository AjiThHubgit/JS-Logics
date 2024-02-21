const odd = [1,3,5];

const combine = [2, 4, 6, ...odd]

console.log(combine, 'combain');

const printNum = (...finalArr) => {
    
    console.log(finalArr, 'finalArr');
}

printNum(odd, combine);