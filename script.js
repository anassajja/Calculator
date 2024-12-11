// script.js
document.addEventListener('DOMContentLoaded', function() { // Wait for the DOM to be fully loaded
    const display = document.getElementById('display'); // Get the display element
    const buttons = document.querySelectorAll('.btn'); // Get all the buttons
    let currentInput = ''; // Variable to store the current input
    let operator = ''; // Variable to store the operator
    let previousInput = ''; // Variable to store the previous input

    buttons.forEach(button => { // Loop over all the buttons
        button.addEventListener('click', function() { // Add a click event listener to each button
            const value = this.getAttribute('data-value'); // Get the value of the button

            if (value === 'C') { // If the value is 'C', clear the display
                currentInput = '';  // Clear the current input
                operator = ''; // Clear the operator
                previousInput = ''; // Clear the previous input
                display.textContent = '0'; // Set the display to 0
            } else if (value === '=') { // If the value is '=', calculate the result
                if (currentInput && previousInput && operator) { // If there is a current input, previous input, and operator
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`); // Calculate the result using eval
                    display.textContent = currentInput; // Set the display to the result
                    previousInput = '';  // Clear the previous input
                    operator = ''; // Clear the operator
                }
            } else if (['+', '-', '*', '/'].includes(value)) { // If the value is an operator (+, -, *, /)
                if (currentInput) {     // If there is a current input
                    operator = value; // Set the operator to the value
                    previousInput = currentInput; // Set the previous input to the current input
                    currentInput = ''; // Clear the current input
                }
            } else { // If the value is a number
                currentInput += value; // Append the value to the current input
                display.textContent = currentInput; // Set the display to the current input
            }
        });
    });
});