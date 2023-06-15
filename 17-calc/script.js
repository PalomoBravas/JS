"use strict";

const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const keyboard = document.querySelector('.keyboard');
const resultField = document.querySelector('.result');

function resetInputFields() {
  inputOne.value = '';
  inputTwo.value = '';
}

function calculate(event) {
  if (inputOne.value === ''|| inputTwo.value === '') {
    resultField.innerText = 'Enter all numbers'
    return;
  }
  const numOne = Number(inputOne.value);
  const numTwo = Number(inputTwo.value);

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
