let atmMachine = {
    "cash_withdraw_details": {},
    "check_balance_deatils": [],
    "deposite_details": []
};

atmMachine = localStorage.setItem('atmMachineDetails', JSON.stringify(atmMachine));
// Retrieve data from localStorage and parse it
const storedData = localStorage.getItem('atmMachineDetails');
if (storedData) {
    try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData.deposite_details)) {
            atmMachine.deposite_details = parsedData.deposite_details;
        }
    } catch (error) {
        console.error('Error parsing data from localStorage:', error);
    }
}

// Now you can safely check the length
if (Array.isArray(atmMachine.deposite_details)) {
    console.log('Length of deposite_details:', atmMachine.deposite_details.length);
} else {
    console.log('deposite_details is not an array or is undefined.');
}


 function depositAmount() {
    console.log('inside depositAmount');
 }

function transferBankDetails() {
    let storedAmount = document.getElementById('getAmountFromUser').value;
    let storedAccountNumber = document.getElementById('getAccountNumber').value;
        console.log(atmMachine.deposite_details, 'deposit_details');
        // console.log(atmMachine.deposite_details.length, 'deposit_details');
        if (Array.isArray(atmMachine.deposite_details)) {
            if (atmMachine.deposite_details.length === 0) {
                console.log('inside empty condition');
            } else if (atmMachine.deposite_details.length > 0 && checkBankDetailsExistOrNot(storedAccountNumber) === storedAccountNumber) {
                console.log('Account already exist');
            } else {
                console.log('empty array');
                // pushDepositDetails();
            }
        }

    storeBankDetailsInLocalStorage(atmMachine);
}

// function pushDepositDetails() {
//     atmMachine.deposite_details.push({
//         "account_number": +storedAccountNumber,
//         "amount": +storedAmount,
//     });
// }

function checkBankDetailsExistOrNot(acNumExistOrNot) {
    
    const foundAcNumber = atmMachine.deposite_details.find(atmMachine.deposite_details.account_number === acNumExistOrNot)

    return foundAcNumber;
}

function storeBankDetailsInLocalStorage(getBankDetails) {
    localStorage.setItem('atmMachineDetails', JSON.stringify(getBankDetails));
}

function bankBankBalanceDetails() {
    let getAccountNumberForDisplayBal = document.getElementById('getAccountNumberForDisplayBal').value;
    let retrievedArray = JSON.parse(localStorage.getItem('atmMachineDetails'));

    retrievedArray.deposite_details.forEach(bankDetails => {
        if(+getAccountNumberForDisplayBal === bankDetails.account_number) {
            console.log('Your Bank Balance is :', bankDetails.amount);
        }
    });
}

