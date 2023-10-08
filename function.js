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
    console.log(getEmpDetails, searchEmp);
    
}
let searchEmpWorkingDetails = 'mohan';
empWorkingBlockDetails(empWorkingDetails, searchEmpWorkingDetails);

