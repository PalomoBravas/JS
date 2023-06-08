"use strict"

const testArr = [1,2,3,4,5,6,7,8,9];

function checkElement (element) {
  return element <= 3;
}

function arrayClean (arr, conditionFunction) {
  const result = [];
  for ( const element of arr) {
    if (conditionFunction(element)) {
      result.push(element);
    }
  }
  return result;
}

console.log(arrayClean(testArr, checkElement));
