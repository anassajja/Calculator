document.addEventListener('DOMContentLoaded', function() {  // Wait for the DOM to load
    const display = document.getElementById('display'); // Get the display element
    const buttons = document.querySelectorAll('.btn'); // Get all the buttons
    let currentInput = ''; // Initialize the current input
    let operator = ''; // Initialize the operator
    let previousInput = ''; // Initialize the previous input

    buttons.forEach(button => { // Loop over all the buttons
        button.addEventListener('click', async function() { // Add a click event listener to each button
            const value = this.getAttribute('data-value'); // Get the value of the button

            if (value === 'C') { // If the value is 'C', clear the display and reset the inputs
                currentInput = ''; // Reset the current input
                operator = ''; // Reset the operator
                previousInput = ''; // Reset the previous input
                display.textContent = '0'; // Reset the display
            } else if (value === '=') { // If the value is '=', evaluate the expression
                if (currentInput && previousInput && operator) {  // If there is a current input, previous input, and operator
                    try { // Try to evaluate the expression
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`); // Evaluate the expression
                        display.textContent = currentInput; // Display the result
                        previousInput = ''; // Reset the previous input
                        operator = ''; // Reset the operator
                    } catch (error) { // Catch any errors
                        console.error('Error evaluating expression:', error); // Log the error
                        display.textContent = 'Error'; // Display an error message
                    }
                }
            } else if (['+', '-', '*', '/'].includes(value)) { // If the value is an operator
                if (currentInput) { // If there is a current input
                    operator = value; // Set the operator
                    previousInput = currentInput; // Set the previous input
                    currentInput = ''; // Reset the current input
                }
            } else { // If the value is a number
                currentInput += value; // Append the value to the current input
                display.textContent = currentInput; // Display the current input
            }
        });
    });
});