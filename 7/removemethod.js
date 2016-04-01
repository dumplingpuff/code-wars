'use strict';
// http://www.codewars.com/kata/565d76490397dcf0e700001e/train/javascript
var someArray = [1, 2, 3];
// someArray.remove(1);
Array.prototype.remove = function(x) {
  for(let i = 0; i < this.length; i++) {
    if(this[i] === x) {this.splice(i, 1);}
  }
  return this;
};

someArray.remove(2);
