document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let firstNumber = '';
    let operation = '';
    let newNumber = true;

    window.appendNumber = function(num) {
        if (newNumber) {
            display.value = num;
            newNumber = false;
        } else {
            display.value += num;
        }
    }

    window.setOperation = function(op) {
        if (display.value !== '') {
            if (firstNumber !== '' && !newNumber) {
                calculate();
            }
            firstNumber = display.value;
            operation = op;
            newNumber = true;
            display.value = firstNumber;
        }
    }

    window.clearDisplay = function() {
        display.value = '';
        firstNumber = '';
        operation = '';
        newNumber = true;
    }

    window.calculate = function() {
        if (operation && firstNumber && display.value !== '') {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(display.value);
            let result;

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Error';
                    break;
            }

            display.value = result;
            firstNumber = result.toString();
            operation = '';
            newNumber = true;
        }
    }

    // Initialize display
    display.value = '';
});