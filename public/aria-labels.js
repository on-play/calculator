function addAriaLabels() {
    // Add ARIA labels to number buttons
    for (let i = 0; i <= 9; i++) {
        const button = document.querySelector(`button[data-number='${i}']`);
        if (button) {
            button.setAttribute('aria-label', `number ${i}`);
        }
    }

    // Add ARIA labels to operation buttons
    const operations = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide',
        '^': 'power',
        '√': 'square root'
        // Add more operations as needed
    };

    Object.keys(operations).forEach(op => {
        const button = document.querySelector(`button[data-operation='${op}']`);
        if (button) {
            button.setAttribute('aria-label', operations[op]);
        }
    });

    // Add ARIA labels to memory functions
    const memoryFunctions = {
        'M+': 'memory add',
        'M-': 'memory subtract',
        'MR': 'memory recall',
        'MC': 'memory clear'
        // Add more memory functions if you have them
    };

    Object.keys(memoryFunctions).forEach(func => {
        const button = document.querySelector(`button[data-memory='${func}']`);
        if (button) {
            button.setAttribute('aria-label', memoryFunctions[func]);
        }
    });

    // Add ARIA labels to any other special buttons
    // Example: Clear button
    const clearButton = document.querySelector('button[data-clear]');
    if (clearButton) {
        clearButton.setAttribute('aria-label', 'clear');
    }
}

// Call the function to add ARIA labels when the script loads
addAriaLabels();

