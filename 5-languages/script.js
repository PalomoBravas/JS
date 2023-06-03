"use strict"

const language = prompt("Select language for learning from ru, eng, de");

switch (language) {
  case 'de':
    console.log('Gutten tag!');
    break;
  case 'eng':
    console.log('Hello!');
    break;
  case 'ru':
    console.log('Привет!');
    break;
  default:
    console.log('Language not selected');
}

