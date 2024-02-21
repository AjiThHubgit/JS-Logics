const finalStudentDetails = [
    {
        name: 'student1',
        std: 12,
        result: 'pass'
    },
    {
        name: 'student2',
        std: 10,
        result: 'fail'
    },
    {
        name: 'student3',
        std: 11,
        result: 'pass'
    }
]

const studentDetails = [...finalStudentDetails];

// const updateStudentDetails = (updateDetails) => {
//     return updateDetails
//         .filter((detail) => detail.result === 'pass')
//         .map((detail) => {
//             detail.qualify = 'Y';
//             return detail;
//         });
// };



const updatedResult = updateStudentDetails(studentDetails);
console.log(updatedResult, 'updatedResult');

const updateStudentDetails = (updateDetails) => {
    return updateDetails.map((detail) => {
        if (detail.result === 'pass') {
            detail.qualify = 'Y';
        }
        return detail;
    });
};
