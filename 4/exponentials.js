// sum string integers and convert back to string
// edge case any integer over 20 is in exponentials
// check expoentials using logs
// how to convert exponentials back to integers?
// constraints you can't add numbers together with log > 20
// You have to piece meal the total number and convert to string

// you could:
// go through each character in both strings add one by one
// section each number off by 20 digits,
// issue with this method is trailing zeros at start.

'use strict';
function sumStrings(a,b) {
  let sum = Number(a) + Number(b);
  if(sum.log10() > 20) {
    let bi = sum.length / 2;
    Number(a.slice(a.length, bi)) + Number(b.slice);
  }
  return sum.toString();
}
