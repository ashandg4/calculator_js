// const currDisplay = document.querySelector(".curr-display");
// const prevDisplay = document.querySelector(".prev-display");
// const numbers = document.querySelector(".number");
// const operands = document.querySelector(".operation");
// const clearButton = document.querySelector(".clear");
// const delButton = document.querySelector(".delete");
// const equalButton = document.querySelector(".equal");

// let operation;
// function appendNumber(number) {
//     if (number === "." && currDisplay.innerText.includes(".")) return;
//     currDisplay.innerText += number;
// }
// function chooseOperation(operand) {
//     if (currDisplay.innerText === "") return;
//     compute(operand);
//     operation = operand;
//     currDisplay.innerText += operand;
//     prevDisplay.innerText = currDisplay.innerText;
//     currDisplay.innerText = "";
// }
// function clearDisplay() {
//     currDisplay.innerText = "";
//     prevDisplay.innerText = "";
// }
// numbers.forEach((number) => {
//     number.addEventListener("click", () => {
//         appendNumber(number.innerText);
//     });
// });
// operands.forEach((operand) => {
//     operand.addEventListener("click", () => {
//         chooseOperation(operand.innerText);
//     });
// });
// clearButton.addEventListener("clicl", () => {
//     clearDisplay();
// });
// equalButton.addEventListener("clicl", () => {
//     compute();
//     prevDisplay.innerText = "";
// });
// delButton.addEventListener("click", () => {
//     currDisplay.innerText = currDisplay.innerText.slice(0, -1);
// });
// function compute(operand) {
//     let result;
//     const prevValue = parseFloat(prevDisplay.innerText);
//     const currValue = parseFloat(currDisplay.innerText);

//     if (isNAN(prevValue) || isNAN(currDisplay)) return;

//     switch (operation) {
//         case "+":
//             result = prevValue + currValue;
//             break;
//         case "-":
//             result = prevValue - currValue;
//             break;
//         case "*":
//             result = prevValue * currValue;
//             break;
//         case "/":
//             result = prevValue / currValue;
//             break;
//         default:
//             return;
//     }
//     currDisplay.innerText = result;
// }

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
        // eval() allows you to execute a string of code as if it were actual JavaScript code.
        // While it is a useful tool, it is a security risk. It is recommend to use eval() ONLY for learning purposes and not any actual production code.
    } catch (error) {
        display.value = "Error";
    }
}
