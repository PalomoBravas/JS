"use strict";

const testObj = {
  search: 'Vasya',
  take: 10,
};

function setQuery(obj) {
  let queryArr = [];
  for (const key in obj) {
    queryArr.push(`${key}=${testObj[key]}`);
  }
  return queryArr.join('&');
}

console.log(setQuery(testObj));
