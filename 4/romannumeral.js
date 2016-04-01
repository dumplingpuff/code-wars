'use strict';

// First you want to at least convert the first digits to rn
// the transition between characters lies at 4 and 9.
//
// First you create an object from 1 to 10 and then you can assign a characters
// 4 and 9 will have two characters and make a transition up the chain.
//
//
// Idea for holding values for each ten is to make an object listing it all out


// 1: 'I',
// 2: 'II',
// 3: 'III',
// 4: 'IV',
// 5: 'V',
// 6: 'VI',

let romanNumerals = {
  0: 'I', //1
  1: 'V', //5
  2: 'X', //10
  3: 'L', //50
  4: 'C', //100
  5: 'D', //500
  6: 'M', //1000
};

let convert = function (n) {
  let arr = n.toString().split('').reverse();
  let base = 0;
  let str = '';

  let addStr = function(s) {
    str = s + str;
  };
  console.log(arr);
  arr.forEach(function(i){
    let num = Number(i);
    if(num === 4) {
      addStr(romanNumerals[base] + romanNumerals[base + 1]);
      base += 2;
    }
    else if (num === 9) {
      base += 2;
      addStr(romanNumerals[base - 2] + romanNumerals[base]);
    }
    else if (num < 4) {
      addStr(romanNumerals[base].repeat(num));
      base+=2;
    }
    else if (num > 4) {
      base+=2;
      addStr(romanNumerals[base - 1] + romanNumerals[base - 2].repeat(num - 5));
    }
    else {
      console.log('Number is greater than 9.');
    }
  });
  console.log(str);
};

convert(888);
