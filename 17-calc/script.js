"use strict";

function resetInputFields () {
  inputOne.value = '0';
  inputTwo.value = '0';
}

const inputOne = document.querySelector('#inputOne');
const inputTwo = document.querySelector('#inputTwo');
const actionBtn = document.querySelectorAll('.button');
const resultField = document.querySelector('.result');

actionBtn.forEach(e => {
  e.addEventListener('click', e => {
    const action = e.target.id;
    const numOne = Number(inputOne.value);
    const numTwo = Number(inputTwo.value);

    if (numOne === 0 || numTwo === 0) {
      resultField.innerText = 'Enter all numbers'
      return;
    }

    switch (action) {
      case 'add':
        resultField.innerText =  numOne + numTwo;
        resetInputFields();
        break;
      case 'subtract':
        resultField.innerText =  numOne - numTwo;
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
  })
})





