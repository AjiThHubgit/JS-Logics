let empWorkingDetails = {
    block1: {
        unit_A: ['sam', 'John'],
        unit_B: ['mohan', 'vishal']
    },
    block2: {
        unit_A: ['sam', 'vijay'],
        unit_B: ['reuban', 'vishal']
    },
    block3: {
        unit_A: ['kamal', 'John'],
        unit_B: ['mohan', 'venky']
    }
}

function empWorkingBlockDetails(getEmpDetails, searchEmp) {
    for (let blockName in getEmpDetails) {
        console.log(getEmpDetails[blockName].length);
        for (let i = 0; i < getEmpDetails[blockName].length; i++) {
            console.log(getEmpDetails[blockName]);
        }
    }
}

let searchEmpWorkingDetails = 'mohan';
empWorkingBlockDetails(empWorkingDetails, searchEmpWorkingDetails);

