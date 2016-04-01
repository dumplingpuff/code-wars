'use strict';

const zero = Array(10).join('0');

const mutate = (chromosome, p) => {
  let change = { 0 : 1, 1 : 0};
  let per = Math.floor(p * chromosome.length);
  let arr = chromosome.split('');
  for(let i = 0; i < per; i++) {
    arr[i] = change[arr[i]];
  }
  return arr.join('');
};

// mutate([1,1,1,1], 1);
console.log(zero);
mutate(zero,1);
