// Define a function to initialize the ATM machine
function initializeATMMachine() {
    // Step 1: Initialize the atmMachine object
    let atmMachine = {
        "cash_withdraw_details": {},
        "check_balance_details": [],
        "deposit_details": []
    };

    // Step 2: Convert the object to a JSON string
    let atmMachineJSON = JSON.stringify(atmMachine);

    // Step 3: Store the JSON string in local storage when the document loads
    document.addEventListener('DOMContentLoaded', function() {
        localStorage.setItem('atmMachineData', atmMachineJSON);
    });

    // Step 4: Retrieve the JSON string from local storage and parse it back to an object
    let storedData = localStorage.getItem('atmMachineData');
    if (storedData) {
        atmMachine = JSON.parse(storedData);
    }

    // Now 'atmMachine' contains the data from local storage, and you can work with it as needed.

    // Optional: Return the initialized atmMachine object
    return atmMachine;
}

// Call the function to initialize the ATM machine and store the result in a variable
let atmMachineDetails = initializeATMMachine();

// Now you can use the initializedATMMachine variable in your code.

console.log(atmMachineDetails.deposit_details.length, 'initializedATMMachine');
