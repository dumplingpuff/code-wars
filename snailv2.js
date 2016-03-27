// def snail(array)
// array.empty? ? [] : array.shift + snail(array.transpose.reverse)
// end


'use strict';

let snail = function(array) {
  var snailArray = [];
  while (array[0]) {
  snailArray.push(array.splice(0, 1));
  for (var i=0; i < array.length; i++) {
      snailArray.push(array[i].pop());
  }
  for (i=array.length-1; i >=0; i--) {
      snailArray.push(array[(array.length-1)].pop());
  }
  array.pop();
  for (i=array.length-1; i >= 0; i--) {
      snailArray.push(array[i].splice(0,1));
  }
  snailArray=snailArray.reduce(function(a, b) {
   return a.concat(b);
}, []);
}
return snailArray.reduce(function(a, b) {
   return a.concat(b);
}, []);
};

// let test = function(array) {
//   var snailArray = [];
//   snailArray.push(array.splice(0, 1));
//   console.log(snailArray);
//   for (var i=0; i < array.length; i++) {
//       snailArray.push(array[i].pop());
//   }
//   console.log(snailArray);
// };

snail([[1,2,3],[3,5,6],[7,4,5]]);
