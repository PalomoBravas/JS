"use strict";

const regEx = /\D+/g;

function luna (checkNumber) {
  const number = checkNumber.replace(regEx, '');
  const numArr = [...number].map(el => Number(el));
  let evenArr = [];
  let oddArr = [];

  numArr.forEach((number, i) => {
    if (!((i+1) % 2)) {
      oddArr.push(number);
    } else {
      evenArr.push(number);
    }
  })

  evenArr = evenArr.map(el => el*2)
    .map(el => {
      return el > 9 ? 1+(el-1) % 9 : el;
  })

  const checkArr = [...evenArr, ...oddArr];
  let check = 0;
  checkArr.forEach(el => check += el);

  return check%10 === 0;
}


console.log(luna('5486-7320-5352-5085'));
