"use strict";

function isValidDate(string) {
  const dateArr = string.split('-').reverse()
  const checkDate = new Date(dateArr.join('-'))

  return checkDate.getFullYear() === Number(dateArr[0])
    && checkDate.getMonth() === Number(dateArr[1]-1)
    && checkDate.getDate() === Number(dateArr[2])
}

function dataArr (arr) {
  return arr.filter(el => el.length === 10)
    .map(el => el.replace(/\//g, '-'))
    .filter(el => isValidDate(el))
}

const testArr = ['10-02-2024','test', '00-12-1994','01/02/2022', '36/11/2005', '29/10-2024', '30/02/2024', '29/02/2024'];

console.log(dataArr(testArr));
