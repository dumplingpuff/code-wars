'use strict';

// Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);

// have a problem with recursion, it's a struggle

// function arraySum(arr) {
//   let total = 0;
//   function sum (x) {
//     if(Number(x) / 1 === x) {
//       total += x;
//     }
//     else {
//       for(let i = 0; i < x.length; i++) {
//         total += x[i];
//       }
//     }
//   }
//   for(let i = 0; i < arr.length; i++) {
//     sum(arr[i]);
//   }
//   return total;
// }

function arraySum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i])) {
      console.log(arr[i]);
      total += arr[i];
    }
    else if(Array.isArray(arr[i])) {
      total += arraySum(arr[i]);
    }
  }
  console.log(total);
  return total;
}

arraySum([1, 2, [1, 2]]);
