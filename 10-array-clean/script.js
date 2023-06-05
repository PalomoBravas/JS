"use strict"

const testArr = [1,2,3,4,5,6,7,8,9];

function checkElement (element) {
  return element <= 5;
}

function arrayClean (arr, f) {
  let newArr = [];
  for ( const i in arr) {
    if (f(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrayClean(testArr, checkElement));
