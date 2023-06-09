"use strict";

// если формат MM/DD/YYYY меняем его на DD-MM-YYYY
function changeFormatDate (string) {
  if (string.match('\/')) {
    return `${string.split('/')[1]}-${string.split('/')[0]}-${string.split('/')[2]}`;
  } else {
    return string;
  }
}
// проверка строки на дату
function isValidDate(string) {
  const dateArr = string.split('-').reverse()
  const checkDate = new Date(dateArr.join('-'))

  return checkDate.getFullYear() === Number(dateArr[0])
    && checkDate.getMonth() === Number(dateArr[1]-1)
    && checkDate.getDate() === Number(dateArr[2])
}

function dataArr (arr) {
  return arr.filter(el => el.length === 10)
    .map(el => changeFormatDate(el))
    .filter(el => isValidDate(el))
}

const testArr = ['10-02-2024','test', 'af-cd-fhgt', 'af/cd/fhgt', '00-12-1994','01/02/2022', '36/11/2005', '30/02/2024', '02/29/2024', '12/31/2020', '31-12-2020'];

console.log(dataArr(testArr));
