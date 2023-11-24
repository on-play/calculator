let currentInput = '';
let previousInput = '';
let currentOperation = null;
let memory = 0;

function appendNumber(number) {
    if (currentOperation && previousInput === '') {
        previousInput = currentInput;
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentInput !== '') {
        if (previousInput === '') {
            previousInput = currentInput;
        } else {
            calculate(); // Calculate any existing operation before setting a new one
        }
        currentInput = ''; // Clear current input for the next number
    }
    currentOperation = operation; // Set the new operation
    updateDisplay(); // Update the display
}


function calculate() {
    if (previousInput !== '' && currentOperation && currentInput !== '') {
        const parsedPrev = parseFloat(previousInput);
        const parsedCurr = parseFloat(currentInput);
        switch (currentOperation) {
            case '+': previousInput = (parsedPrev + parsedCurr).toString(); break;
            case '-': previousInput = (parsedPrev - parsedCurr).toString(); break;
            case '*': previousInput = (parsedPrev * parsedCurr).toString(); break;
            case '/': previousInput = (parsedPrev / parsedCurr).toString(); break;
            case '^': previousInput = Math.pow(parsedPrev, parsedCurr).toString(); break;
        }
        currentOperation = null;
        currentInput = '';
    }
    updateDisplay();
}

function squareRoot() {
    if (currentInput) {
        // Apply square root to currentInput if it exists
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    } else if (previousInput) {
        // If currentInput is empty, apply square root to previousInput
        previousInput = Math.sqrt(parseFloat(previousInput)).toString();
        currentInput = '';
    }
    currentOperation = null; // Reset current operation
    updateDisplay(); // Update the display
}


function memoryAdd() {
    memory += parseFloat(currentInput || previousInput);
    currentInput = '';
    previousInput = '';
    updateDisplay();
}

function memorySubtract() {
    memory -= parseFloat(currentInput || previousInput);
    currentInput = '';
    previousInput = '';
    updateDisplay();
}

function memoryRecall() {
    currentInput = memory.toString();
    previousInput = '';
    updateDisplay();
}

function memoryClear() {
    memory = 0;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    if (currentInput === '' && previousInput === '') {
        document.getElementById('display').value = '0';
    } else {
        document.getElementById('display').value = previousInput + (currentOperation ? ' ' + currentOperation : '') + ' ' + currentInput;
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (['+', '-', '*', '/', '^'].includes(event.key)) {
        setOperation(event.key);
    } else if (event.key === 'Enter') {
        calculate();
        event.preventDefault(); // Prevent default form submit behavior
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        backspace();
    } else if (event.ctrlKey && event.key === 'r') {
        squareRoot();
    }
});