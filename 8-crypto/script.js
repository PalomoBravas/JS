"use strict";

const password = prompt('password');

function crypto (password, passwordKey = 3) {

  if(password.length < 6) {
    console.log('week password')
    return null;
  }

  const partLength = Number(( password.length / passwordKey ).toFixed());

  return [passwordKey,
    ...[...password].slice(partLength, partLength*2),
    ...[...password].slice(0, partLength),
    ...[...password].slice(partLength*2)].reverse().join('');
}

function check (cryptoPassword, password) {
  const checkPasswordArr = [...cryptoPassword].reverse();
  const checkPasswordKey = Number(checkPasswordArr.splice(0,1)[0]);
  const partLength = Number(( checkPasswordArr.length / checkPasswordKey ).toFixed());

  const checkPassword = [...checkPasswordArr.slice(partLength, partLength*2),
    ...checkPasswordArr.slice(0, partLength),
    ...checkPasswordArr.slice(partLength*2)].join('');

  return password === checkPassword;
}
console.log(crypto(password));
console.log(check(crypto(password), password));
console.log(check(crypto(password), 'wrong'));
