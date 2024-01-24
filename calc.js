//declare result window to manipulate later
const result = document.getElementById("result");
let operationComputer = "";
let firstResultContainer = "";
let secondResultContainer = "";

//function for number inputs
const numInput = (number) => {
  if (result.innerText == 0) {
    result.innerText = number;
  } else {
    result.innerText += number;
  }
};

//decimal function
const decimalInput = () => {
  if (result.innerText.includes(".")) {
    return;
  } else {
    result.innerText += ".";
  }
};

//clear function
function clearResult() {
  result.innerText = "";
  operationComputer = "";
  firstResultContainer = "";
  secondResultContainer = "";
}

//zero has special properties due to the fact that you cannot add a zero on after another 0 if there is no decimal present
function zeroInput() {
  if (
    result.innerText.includes("0") &&
    !result.innerText.includes(".") &&
    result.innerText[0] == 0
  ) {
    return;
  } else {
    result.innerText += "0";
  }
}

//the operations function will when activated will change the value of the operation calc to the selected operation then it will store the first result into the firstResultComputer.
function operationInput(operator) {
    operationComputer = operator;
    firstResultContainer = result.innerText;
    secondResultContainer = "";
    result.innerText = "";
}

//the equals function will then take the check the current computer operator and execute the operation on the first result by the result inner text. the function will also check to see if there is a value stored in second result. this is to simulate the looping effect that the iphone calculator preforms when you press the equal button multiple times
function equalInput() {
  if (secondResultContainer !== "") {
    const answer = String(
      eval(firstResultContainer + operationComputer + secondResultContainer)
    );
    firstResultContainer = answer;
    result.innerText = answer;
  } else {
    secondResultContainer = result.innerText;
    const answer = String(
      eval(firstResultContainer + operationComputer + secondResultContainer)
    );
    firstResultContainer = answer;
    result.innerText = answer;
  }
}

//percent function
function percentInput() {
  result.innerText = String(eval(`${result.innerText}*.001`));
}

//negative and positive function
function negativeAndPositive(newStr = "") {
  if (Number(result.innerText) < 0) {
    for (let i = 0; i < result.innerText.length; i++) {
      if (result.innerText[i] !== "-") {
        newStr += result.innerText[i];
      }
    }
    result.innerText = newStr;
  } else if (Number(result.innerText) === 0) {
    return;
  } else if (Number(result.innerText) > 0) {
    result.innerText = "-" + result.innerText;
  }
}
