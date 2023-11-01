let displayValue = '';
let hasCalculated = false;

function appendToDisplay(value) {
    if (hasCalculated) {
        clearDisplay();
        hasCalculated = false;
    }
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
    hasCalculated = false;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('result').value = displayValue;
        hasCalculated = true;
    } catch (error) {
        document.getElementById('result').value = 'Erro';
    }
}

function backspace() {
    if (hasCalculated) {
        clearDisplay();
        hasCalculated = false;
    }
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key.match(/[0-9+\-*/.]/)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});