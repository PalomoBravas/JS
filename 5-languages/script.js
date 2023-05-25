const language = prompt("Select language for learning from ru, eng, de")

//first
switch (language) {
  case 'de':
    console.log('Gutten tag!')
    break;
  case 'eng':
    console.log('Hello!')
    break;
  case 'ru':
    console.log('Привет!')
    break
  default:
    console.log('Language not selected')
}

//second
switch (true) {
  case language === 'de':
    console.log('Gutten tag!')
    break;
  case language === 'eng':
    console.log('Hello!')
    break;
  case language === 'ru':
    console.log('Привет!')
    break
  default:
    console.log('Language not selected')
}
