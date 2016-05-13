'use strict';
// move the zeros in an array to the end

var moveZeros = function (arr) {
  let holder = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      holder.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr.concat(holder);
};


moveZeros([false,1,0,1,2,0,1,3,'a']);
