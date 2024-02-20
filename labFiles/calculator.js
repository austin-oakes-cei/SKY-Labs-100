// Calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        return 'Error! Division by zero is not allowed.';
    }
    return a / b;
}

// Function to take user input
function takeInput() {
    let a = Number(prompt("Enter the first number:"));
    let b = Number(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (add, subtract, multiply, divide):");

    return {a, b, operation};
}

// Function to provide output
function provideOutput(a, b, operation) {
    let result;
    switch(operation) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        default:
            result = 'Invalid operation!';
    }
    alert(`The result is: ${result}`);
}

// Main program
let {a, b, operation} = takeInput();
provideOutput(a, b, operation);