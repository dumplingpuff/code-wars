'use strict';

function solution(roman) {
  let numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let arr = roman.split('');
  let newarr= [];
  for(let i = 0; i < arr.length; i++) {
    if(numerals[arr[i]] < numerals[arr[i + 1]]) {
      arr[i] = (-1 * numerals[arr[i]]);
      console.log(arr[i]);
    }
    else{
      arr[i] = numerals[arr[i]];
    }
  }
   let ans = arr.reduce(function(prev, curr) {
    return prev + curr;
  });
  console.log(ans);
  return ans;
}

solution('XC');


// let arr = roman.split('');
// let newarr= [];
// console.log(arr);
// for(let i = 0; i < arr.length; i++) {
//   if(numerals[arr[i]] < numerals[arr[i + 1]]) {
//     newarr.push(-1 * numerals[arr[i]]);
//     console.log(newarr[i]);
//   }
//   else{
//     newarr.push(numerals[arr[i]]);
//   }
// }
// console.log(newarr);
//  let ans = newarr.reduce(function(prev, curr) {
//   return prev + curr;
// });
