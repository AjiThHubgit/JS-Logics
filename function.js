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

let result = [];



function empWorkingBlockDetails(getEmpDetails, searchEmp) {
    for (let blockName in getEmpDetails) {
        for (let unit in getEmpDetails[blockName]) {
            for (let i = 0; i < getEmpDetails[blockName][unit].length; i++) {
                if (searchEmp == getEmpDetails[blockName][unit][i]) {
                    result.push(
                        {
                            'block': blockName,
                            'unit': unit
                        }
                    )
                }
            }
        }
    }

    console.log(result, 'result');
}

let searchEmpWorkingDetails = 'mohan';
empWorkingBlockDetails(empWorkingDetails, searchEmpWorkingDetails);

