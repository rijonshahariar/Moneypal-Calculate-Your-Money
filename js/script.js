//Function to get all inputs
function getInput(idinput) {
    const inputField = document.getElementById(idinput).value;
    const input = parseFloat(inputField);
    return input;
}

//Getting Error Handler ids
const rentError = document.getElementById('rentError');
const clothError = document.getElementById('clothError');
const incomeError = document.getElementById('incomeError');
const foodError = document.getElementById('foodError');
const saveError = document.getElementById('saveError');
const balanceError = document.getElementById('balanceError');

//Calculating Costs and Handle Errors
function calculateCost() {
    const income = getInput('income');
    const costOfFood = getInput('food-cost');
    const costOfRent = getInput('rent-cost');
    const costOfCloth = getInput('cloth-cost');
    const totalCost = costOfFood + costOfRent + costOfCloth;
    const balance = income - totalCost;

    //Handle string, minus and other types of errors

    if (income < 0 || isNaN(income)) {
        incomeError.style.display = 'block';
        foodError.style.display = 'none';
        rentError.style.display = 'none';
        clothError.style.display = 'none';
    }
    else if (costOfFood < 0 || isNaN(costOfFood)) {
        foodError.style.display = 'block';
        incomeError.style.display = 'none';
        rentError.style.display = 'none';
        clothError.style.display = 'none';
    }
    else if (costOfRent < 0 || isNaN(costOfRent)) {
        rentError.style.display = 'block';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
        clothError.style.display = 'none';
    }
    else if (costOfCloth < 0 || isNaN(costOfCloth)) {
        clothError.style.display = 'block';
        rentError.style.display = 'none';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
    }

    else if (income < totalCost) {
        balanceError.style.display = 'block';
        document.getElementById('totalCost').innerText = '0';
        document.getElementById('total-balance').innerText = '0';
    }
    else {
        document.getElementById('totalCost').innerText = totalCost;
        document.getElementById('total-balance').innerText = balance;
        clothError.style.display = 'none';
        rentError.style.display = 'none';
        foodError.style.display = 'none';
        incomeError.style.display = 'none';
        balanceError.style.display = 'none';
    }
}

//Balance Saving with Error Handling

function saveBalance() {
    const balanceField = document.getElementById('total-balance').innerText;
    const balance = parseFloat(balanceField);

    const incomeValue = getInput('income');
    const savePercent = getInput('savings');

    const savingsAmount = incomeValue / 100 * savePercent;
    const remainingBalance = balance - savingsAmount;

    if (balance < savingsAmount || isNaN(savePercent) || isNaN(incomeValue)) {
        saveError.style.display = 'block';
        document.getElementById('savings-amount').innerText = '0';
        document.getElementById('remaining-balance').innerText = '0';
    }
    else {
        document.getElementById('savings-amount').innerText = savingsAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        saveError.style.display = 'none';

    }

}

