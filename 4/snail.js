 'use strict';
 // Order is go forward in array
 // go down last items in list
 // take remaining array reverse and for each
 // go up first elements
 // repeat going forward.

let snail = function(array) {
   let arr = array;
   let newarr = [];

   let goAcross = function(a) {
     a[0].forEach(function(x) {
       newarr.push(x);
     });
     a.shift();
     console.log(newarr);
   };

   let goDown = function(a) {
     a.forEach(function(row) {
         newarr.push(row.pop());
       });
      console.log(newarr);
   };

   let goBackwards = function(a) {
     if(a.length !== 0) {
       a[a.length - 1].reverse().forEach(function(x) {
         newarr.push(x);
       });
       a.pop();
     }
    else{
      return newarr;
    }
   };

   let goUp = function(a) {
     a.forEach(function(row) {
       newarr.push(row.shift());
     });
   };

   while(arr.length !== 0) {
     goAcross(arr);
     goDown(arr);
     goBackwards(arr);
     goUp(arr);
   }
   return newarr;
};

snail([[1,2,3],
       [6,5,4],
       [9,8,7]]);
