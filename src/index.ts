import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(){
    const firstNum = question('Enter your first number: \n');
    const operator = question('Enter the operator: \n');
    const secondNum = question('Enter your second number: \n');

    const rightInput: boolean = isNumber(firstNum) && operatorCheck(operator) && isNumber(secondNum);

    if(rightInput){
        const ans = calculate(firstNum, operator as Operator, secondNum);
        console.log("Your answer is", ans);
    }else {
        console.log("\n\x1b[1m----    ENTER THE RIGHT INPUTS    ----\x1b[0m\n");
        main();
    }
}

function isNumber(numStr: string) :boolean{
    const num = parseInt(numStr);
    if(!isNaN(num)) return true;
    return false;
}

function operatorCheck(operator: string): boolean{
    const validOperators = ['+', '-', '*', '/'];
    return validOperators.includes(operator);
}

function calculate(firstNum: string, operator: Operator, secondNum: string): number{
    const num1 = parseInt(firstNum);
    const num2 = parseInt(secondNum);
        switch(operator){
            case '+':
                return num1+num2;
            case '-':
                return num1-num2;
            case '*':
                return num1*num2;
            case '/':
                return num1/num2;
        }
}

main();