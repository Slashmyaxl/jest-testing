function calculator(num1, num2) {
    const add = Math.round((num1 + num2) * 100) / 100;
    const subtract = Math.round((num1 - num2) * 100) / 100;
    const multiply = Math.round((num1 * num2) * 100) / 100;
    const divide = Math.round((num1 / num2) * 100) / 100;

    return { add, subtract, multiply, divide }
}

module.exports = calculator