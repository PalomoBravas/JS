"use strict";

const REGEX = new RegExp('^(0[1-9]|[12][0-9]|3[01])([-|\\/])(0[1-9]|1[012])([-|\\/])((19|20)\\d\\d)', 'gm');

function dataArr (arr) {
  const filteredArr = arr.filter(el => REGEX.test(el));
  return filteredArr.map(el => el.replace(/\//g, '-'));
}

const testArr = ['10-02-2024','test', '00-12-1994','01/02/2022', '36/11/2005'];

console.log(dataArr(testArr));
