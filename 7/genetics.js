'use strict';
const generate = x => {
  let arr = Array(x);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random());
  }
  return arr;
};
