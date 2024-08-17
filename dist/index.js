"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const firstNum = (0, readline_sync_1.question)('Enter your first number: \n');
    const operator = (0, readline_sync_1.question)('Enter the operator: \n');
    const secondNum = (0, readline_sync_1.question)('Enter your second number: \n');
    const rightInput = isNumber(firstNum) && operatorCheck(operator) && isNumber(secondNum);
    if (rightInput) {
        const ans = calculate(firstNum, operator, secondNum);
        console.log("Your answer is", ans);
    }
    else {
        console.log("\n\x1b[1m----    ENTER THE RIGHT INPUTS    ----\x1b[0m\n");
        main();
    }
}
function isNumber(numStr) {
    const num = parseInt(numStr);
    if (!isNaN(num))
        return true;
    return false;
}
function operatorCheck(operator) {
    const validOperators = ['+', '-', '*', '/'];
    return validOperators.includes(operator);
}
function calculate(firstNum, operator, secondNum) {
    const num1 = parseInt(firstNum);
    const num2 = parseInt(secondNum);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
main();
