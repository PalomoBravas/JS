"use strict";

const testArr = [6,5,11,4,-1, -10, 3, 8];

function bubbleSort (arr) {
  const sortArr = arr;

  for (let j = 0; j < sortArr.length-1; j++) {
    let f = false;

    for (let i = 0; i<sortArr.length-1-j; i++){
      if(sortArr[i] > sortArr[i+1]) {
        [sortArr[i], sortArr[i+1]] = [sortArr[i+1], sortArr[i]];
        f = true;
      }
    }

    if (!f) {
      break;
    }
  }

  return sortArr;
}

console.log(bubbleSort(testArr));


