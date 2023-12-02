// Define a function to initialize the ATM machine
function initializeATMMachine() {

    // Step 1: Retrieve the JSON string from local storage and parse it back to an object
    let storedData = localStorage.getItem('atmMachineData');
    let atmMachine;

    if (storedData) {
        atmMachine = JSON.parse(storedData);
    } else {
        // Step 2: If no data found in local storage, initialize the atmMachine object
        atmMachine = {
            "cash_withdraw_details": {},
            "check_balance_details": [],
            "deposit_details": []
        };

        // Step 3: Store the initial object in local storage
        updateLocalStorage(atmMachine);
    }

    // Optional: Return the initialized atmMachine object
    return atmMachine;
}

// Call the function to initialize the ATM machine and store the result in a variable
let atmMachineDetails = initializeATMMachine();

// console.log(atmMachineDetails.deposit_details.length, 'initializedATMMachine');

function transferBankDetails() {
    let storedAccountNumber = document.getElementById('getAccountNumber').value;
    let storedAmount = document.getElementById('getAmountFromUser').value;

    if (atmMachineDetails.deposit_details.length === 0) {
        console.log('inside empty condition');
        pushDepositDetails(storedAccountNumber, storedAmount);

        // Update local storage after pushing the details
        updateLocalStorage(atmMachineDetails);
        // console.log(atmMachineDetails, 'atmMachineDetails');

    } else if (atmMachineDetails.deposit_details.length > 0 && checkBankDetailsExistOrNot(storedAccountNumber)) {
        UpdateAtmMachineDetails(storedAmount, atmMachineDetails);
    } else {
        pushDepositDetails(storedAccountNumber, storedAmount);
        updateLocalStorage(atmMachineDetails);
    }
}

function updateLocalStorage(data) {
    // Update local storage with the provided object
    localStorage.setItem('atmMachineData', JSON.stringify(data));
}

function pushDepositDetails(storeAcNum, storeAcAmount) {

    atmMachineDetails.deposit_details.push({
        "account_number": +storeAcNum,
        "amount": +storeAcAmount,
    });
}

function checkBankDetailsExistOrNot(acNumExistsOrNot) {

    let result;

    atmMachineDetails.deposit_details.forEach((val) => {
        result = val.account_number === parseInt(acNumExistsOrNot);
    })

    return result;
}

function UpdateAtmMachineDetails(accNum, atmMachineDetails) {

    atmMachineDetails.deposit_details.forEach((val) => {
        if (checkBankDetailsExistOrNot(val.account_number)) {
            val.amount += parseInt(accNum);
        }

        updateLocalStorage(atmMachineDetails);
    })
}

function bankBankBalanceDetails() {

    let getAccountNumberForDisplayBal = document.getElementById('getAccountNumberForDisplayBal').value;
    let retrievedArray = JSON.parse(localStorage.getItem('atmMachineData'));

    retrievedArray.deposit_details.forEach(bankDetails => {
        if(+getAccountNumberForDisplayBal === bankDetails.account_number) {
            console.log('Your Bank Balance is :', bankDetails.amount);
        }
    });
}

function cashWithDrawDetails() {
    
    let getAccountNumberForWithDraw = document.getElementById('getAccountNumberForWithDraw').value;
    let getAmountFromUserForWithDraw = document.getElementById('getAmountFromUserForWithDraw').value;
    if (atmMachineDetails.deposit_details.length === 0) {
        console.log('There is no bank details. please desposit amount then withdraw your cash ..');
    } else if (atmMachineDetails.deposit_details.length > 0 && checkBankDetailsExistOrNot(getAccountNumberForWithDraw)) {
        UpdatecashWithDrawDetails(getAmountFromUserForWithDraw, atmMachineDetails);
    } else {
        pushDepositDetails(getAccountNumberForWithDraw, getAmountFromUserForWithDraw);
        updateLocalStorage(atmMachineDetails);
    }
    console.log('cashWithDrawDetails');
}

function UpdatecashWithDrawDetails(accNum, atmMachineDetails) {

    atmMachineDetails.deposit_details.forEach((val) => {
        if (checkBankDetailsExistOrNot(val.account_number)) {
            val.amount -= parseInt(accNum);
        }

        updateLocalStorage(atmMachineDetails);
    })
}





