um'use strict';

// var add = (function(n){
//   let num = n || 0;
//   function test(f){
//     num += f;
//     return test;
//   }
//   test.toString = function() {
//     return num;
//   };
//   return test;
// })(0);

var add = function(n){
  function test(f){
    return add(n + f);
  }
  test.toString = function() {
    return n;
  };
  return test;
};


function add(n){
  var fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    console.log(n);
    return n;
  };
  console.log(fn)
  return fn;
}

add(1)(2);
