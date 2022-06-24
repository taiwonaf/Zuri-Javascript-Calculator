// The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division

// Test values

let x = 9;
let y = 4;

// Additon function
function additon(num1, num2) {
    return num1 + num2;
};

// Substraction function
function substraction(num1, num2) {
    return num1 - num2;
};

// Multiplication function
function multiplication(num1, num2) {
    return num1 * num2;
};

// Division function
function division(num1, num2) {
    return num1 / num2;
};

// Calculatot testing

console.log("Additon " + additon(x, y));
console.log("Substraction " + substraction(x, y));
console.log("Multiplication " + multiplication(x, y));
console.log("Division " + division(x, y));