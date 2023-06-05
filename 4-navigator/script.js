"use strict"

const addressLat = Number(prompt('Enter address latitude'));
const addressLong = Number(prompt('Enter address longitude'));
const positionLat = Number(prompt('Enter your position latitude'));
const positionLong = Number(prompt('Enter your position longitude'));

const distance = Math.sqrt((addressLat-positionLat)**2 +(addressLong-positionLong)**2).toFixed(2);

console.log(`Distance from position to address = ${distance}`);
