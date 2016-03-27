'use strict';

function operate(i ,arr) {
  let op = arr[1];
  let num = arr[0];
  let operators = {
    '+': function(i, arr) {return i + num; },
    '-': function(i, arr) {return i - num; },
    '*': function(i, arr) {return i * num; },
    '/': function(i, arr) {return i / num; },
  };
  return operators[op](i, arr);
}

function zero() {  if(arguments.length !== 0) {
    return operate(0, arguments[0]);
  }
  else {
    return 0;
  }}
function one() {  if(arguments.length !== 0) {
    return operate(1, arguments[0]);
  }
  else {
    return 1;
  }}
function two() {
  if(arguments.length !== 0) {
    return operate(2, arguments[0]);
  }
  else {
    return 2;
  }
}
function three() {
  if(arguments.length !== 0) {
    return operate(3, arguments[0]);
  }
  else {
    return 3;
  }
}
function four() {
  if(arguments.length !== 0) {
    return operate(4, arguments[0]);
  }
  else {
    return 4;
  }
}
function five() {
  if(arguments.length !== 0) {
    return operate(5, arguments[0]);
  }
  else {
    return 5;
  }
}
function six() {
  if(arguments.length !== 0) {
    return operate(6, arguments[0]);
  }
  else {
    return 6;
  }
}
function seven() {
  if(arguments.length !== 0) {
    return operate(7, arguments[0]);
  }
  else {
    return 7;
  }
}
function eight() {
  if(arguments.length !== 0) {
    return operate(8, arguments[0]);
  }
  else {
    return 8;
  }
}
function nine() {
  if(arguments.length !== 0) {
    return operate(9, arguments[0]);
  }
  else {
    return 9;
  }
}

function plus() {
  return [arguments[0], '+'];
}
function minus() {
  return [arguments[0], '-'];
}
function times() {
    return [arguments[0], '*'];
}
function dividedBy() {
    return [arguments[0], '/'];
}

function object(a) {
  let hey = {
    'a': function() {
      return 1;
    }
  };
  return hey['a']();
}

function operate(i ,arr) {
  let op = arr[1];
  let num = arr[0];
  let operators =
  {
    '+': function(i, arr) {return i + num; },
    '-': function(i, arr) {return i - num; },
    '*': function(i, arr) {return i * num; },
    '/': function(i, arr) {return i / num; },

  };
  return operators[op](i, arr);
}

function one() {
  if(arguments.length !== 0) {
    return operate(1, arguments[0]);
  }
  else {
    return 1;
  }
}
function plus() {
  return [arguments[0], '+'];
}
function two() {
  if(arguments.length !== 0) {
    return operate(2, arguments[0]);
  }
  else {
    return 2;
  }
}

function two() {
  if(arguments.length !== 0) {
    console.log('yay');
  }
  else {
    console.log(arguments);
    console.log('empty');
  }
}

one(plus(two()));
// Test.assertEquals(seven(times(five())), 35);
// Test.assertEquals(four(plus(nine())), 13);
// Test.assertEquals(eight(minus(three())), 5);
// Test.assertEquals(six(dividedBy(two())), 3);
