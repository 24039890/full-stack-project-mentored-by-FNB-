document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('result');
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetScreen = false;
    let memory = 0;

    // Update display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Append number to current input
    function appendNumber(number) {
        if (currentInput === '0' || resetScreen) {
            currentInput = number;
            resetScreen = false;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    // Add decimal point
    function addDecimal() {
        if (resetScreen) {
            currentInput = '0.';
            resetScreen = false;
            updateDisplay();
            return;
        }
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }

    // Handle operations
    function handleOperation(op) {
        if (operation !== null) calculate();
        previousInput = currentInput;
        operation = op;
        resetScreen = true;
    }

    // Calculate result
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            case 'x²':
                result = prev * prev;
                break;
            case '√x':
                result = Math.sqrt(prev);
                break;
            case '1/x':
                result = 1 / prev;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operation = null;
        updateDisplay();
    }

    // Clear display
    function clearDisplay() {
        currentInput = '0';
        updateDisplay();
    }

    // Clear everything
    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        updateDisplay();
    }

    // Delete last character
    function deleteLastChar() {
        if (currentInput.length === 1) {
            currentInput = '0';
        } else {
            currentInput = currentInput.slice(0, -1);
        }
        updateDisplay();
    }

    // Toggle sign
    function toggleSign() {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }

    // Memory functions
    function memoryClear() { memory = 0; }
    function memoryRecall() { currentInput = memory.toString(); updateDisplay(); }
    function memoryAdd() { memory += parseFloat(currentInput); }
    function memorySubtract() { memory -= parseFloat(currentInput); }
    function memoryStore() { memory = parseFloat(currentInput); }

    // Event listeners for number buttons
    document.querySelectorAll('.num').forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.textContent);
        });
    });

    // Event listeners for operation buttons
    document.querySelectorAll('.op').forEach(button => {
        button.addEventListener('click', () => {
            handleOperation(button.textContent);
        });
    });

    // Other button listeners
    document.getElementById('decimal').addEventListener('click', addDecimal);
    document.getElementById('plus-minus').addEventListener('click', toggleSign);
    document.getElementById('equals').addEventListener('click', () => {
        calculate();
        resetScreen = true;
    });
    document.getElementById('c').addEventListener('click', clearAll);
    document.getElementById('ce').addEventListener('click', clearDisplay);
    document.getElementById('backspace').addEventListener('click', deleteLastChar);

    // Memory button listeners
    document.getElementById('mc').addEventListener('click', memoryClear);
    document.getElementById('mr').addEventListener('click', memoryRecall);
    document.getElementById('m-plus').addEventListener('click', memoryAdd);
    document.getElementById('m-minus').addEventListener('click', memorySubtract);
    document.getElementById('ms').addEventListener('click', memoryStore);

    // Initialize display
    updateDisplay();
});