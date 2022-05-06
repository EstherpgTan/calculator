// Find the buttons & storing them
const buttons = document.querySelectorAll(".num-button");

const allButtons = document.querySelectorAll(".button");

const displayBox = document.querySelector("display-box");

const equals = document.querySelector("#equals");

// Storing numbers
const numButton = [...buttons];
const allButtonslist = [...allButtons];

// buttonNumbers.map(buttons, i) => {
for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", () => inputNumber(this.innerText));
}

// Operator buttons
for (let i = 0; i < allButtonslist.length; i++) {
    allButtonslist[i].addEventListener("click", () =>
        allButtonslist(this.innerText)
    );
}

// Use of operations with numbers
let currentNumber = "";

const inputNumber = (anyNumber) => {
    currentNumber += anyNumber;
    display();
};

let previousNumber = "";
let currentOperator = "";

const inputOperator = (op) => {
    currentOperator = op;
    previousNumber = currentNumber;
    currentNumber = "";
};

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
const totalsButton = document.getElementById("equals");
totalsButton.addEventListener("click", () => totalsButton());

// Display
const display = () => {
    document.getElementById("display-box").innerText = currentNumber;
};
