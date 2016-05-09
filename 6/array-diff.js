'use strict';
// difference([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  let holder = 0;
  function match(x) {
    return x !== holder;
  }
  for(let i = 0; i < b.length; i++) {
    holder = b[i];
    a = a.filter(match);
  }
  console.log(a);
  return a;
}

array_diff([1,2,2,2,3,4,5,3,3,5],[2,3]);
