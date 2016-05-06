'use strict';
function stringy(size) {
  let zero = true;
  let word = '1';

  while(word.length < size) {
    if(zero) {
      word += '0';
      zero = false;
    }
    else {
      word += '1';
      zero = true;
    }
  }
  return word;
}

stringy(12);
