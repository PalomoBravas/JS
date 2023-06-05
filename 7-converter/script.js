"use strict"

function converter (money, currentCoin, targetCoin) {
  const currency = {
    'usd': 1.0,
    'eur': 1.07,
    'rub': 0.013,
  };
  if (!(currentCoin in currency && targetCoin in currency)) {
    return null
  }

  let coinToUsd;

  switch (currentCoin) {
    case 'rub':
      coinToUsd = money * currency['rub']
      break;
    case 'eur':
      coinToUsd = money * currency['eur']
      break;
    default:
      coinToUsd = money
  }

  switch (targetCoin) {
    case 'rub':
      return coinToUsd / currency['rub']
    case 'eur':
      return coinToUsd / currency['eur']
    default:
      return coinToUsd
  }
}

console.log(converter(10000, 'rub', 'eur'));
