"use strict";

const testArr = [6,5,11,4,-1, -10, 3, 8];

function bubbleSort (arr) {
  const sortArr = arr;

  for (let j = 0; j < sortArr.length-1; j++) {
    let sortKey = false;

    for (let i = 0; i<sortArr.length-1-j; i++){
      if(sortArr[i] > sortArr[i+1]) {
        [sortArr[i], sortArr[i+1]] = [sortArr[i+1], sortArr[i]];
        sortKey = true;
      }
    }
// Если перестановок не было значит сортировка закончена и можно раньше выйти из цикла
    if (!sortKey) {break}

  }

  return sortArr;
}

console.log(bubbleSort(testArr));
