"use strict";

const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const keyboard = document.querySelector('.keyboard');
const resultField = document.querySelector('.result');

function resetInputFields() {
  inputOne.value = null;
  inputTwo.value = null;
}

function calculate(event) {
  const numOne = Number(inputOne.value);
  const numTwo = Number(inputTwo.value);

  if (numOne === 0 || numTwo === 0) {
    resultField.innerText = 'Enter all numbers'
    return;
  }

  switch (event.target.id) {
    case 'add':
      resultField.innerText = numOne + numTwo;
      resetInputFields();
      break;
    case 'subtract':
      resultField.innerText = numOne - numTwo;
      resetInputFields();
      break;
    case 'multiply':
      resultField.innerText = numOne * numTwo;
      resetInputFields();
      break;
    case 'divide':
      resultField.innerText = (numOne / numTwo).toFixed(5);
      resetInputFields();
      break;
    default:
      return undefined;
  }
}

keyboard.addEventListener('click', event => calculate(event))
