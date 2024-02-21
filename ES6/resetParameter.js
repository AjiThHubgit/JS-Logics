// function addNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// const sum = addNumbers(2, 3, 5, 8);

// console.log(sum);

const checkListArr = [
    {
        name: 'First Name',
        checked: false
    },
    {
        name: 'Last Name',
        checked: false
    },
    {
        name: 'Email',
        checked: false
    }
]

const checkListFrom = 'student';

const takeItems = (...studentDetails) => {
    console.log(studentDetails);
}

takeItems(checkListFrom, checkListArr);

// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));
//   // Expected output: 6
  
//   console.log(sum(1, 2, 3, 4));
//   // Expected output: 10




