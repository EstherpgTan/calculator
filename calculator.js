// Returning numbers
let currentNumber = "";

const inputNumber = (anyNumber) => {
    currentNumber += anyNumber;
    display();
};

// Display on calculator
const display = () => {
    document.getElementById("display").innerText = currentNumber;
};

// Numbers
let numButton = [
    "num-button-0",
    "num-button-1",
    "num-button-2",
    "num-button-3",
    "num-button-4",
    "num-button-5",
    "num-button-6",
    "num-button-7",
    "num-button-8",
    "num-button-9",
    "num-button-.",
];

for (let i = 0; i < numButton.length; i++) {
    let number = numButton[i];

    let buttons = document.getElementById(number);

    buttons.addEventListener("click", () => inputNumber(buttons.innerText));
}

// Defines previous and current number with an operator event
let previousNumber = "";
let currentOperator = "";

const inputOperator = (op) => {
    currentOperator = op;
    previousNumber = currentNumber;
    currentNumber = "";
};

// Operator buttons
let operatorButton = ["÷", "x", "-", "+"];

for (let i = 0; i < operatorButton.length; i++) {
    let operation = operatorButton[i];

    let operator = document.getElementById("operator-" + operation);

    operator.addEventListener("click", () => inputOperator(operator.innerText));
}

const equalsButton = () => {
    if (currentOperator === "÷") {
        currentNumber = Number(previousNumber) / Number(currentNumber);
        display();
    }

    if (currentOperator === "x") {
        currentNumber = Number(currentNumber) * Number(previousNumber);
        display();
    }

    if (currentOperator === "-") {
        currentNumber = Number(previousNumber) - Number(currentNumber);
        display();
    }

    if (currentOperator === "+") {
        currentNumber = Number(currentNumber) + Number(previousNumber);
        display();
    }
};

// Equals: Total
const equals = document.getElementById("equals");
equals.addEventListener("click", () => equalsButton());
