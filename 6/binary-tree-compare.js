'use strict';
// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise

// 1       1
// | \     | \
// 2  3    2  3
// => true
//
// 1       1
// | \     | \
// 3  3    2  3
// => false (values not the same 2 != 3)
//
// 1       1
// | \     |
// 2  3    2
//         |
//         3
// => false (structure not the same)

var aNode = {val: 1, left: {val: 1, left: null, right: null}, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};

// function compare(a, b){
//   let same = true;
//   for(let x in a) {
//     if(a[x] !== b[x]){
//       same = false;
//     }
//     else if(typeof a[x] === 'object') {
//       console.log(a[x]);
//       for(let u in a[x]) {
//         console.log(a[x][u]);
//         console.log(b[x][u]);
//         if(a[x][u] !== b[x][u]) {
//           console.log('same is: ' + same);
//           same = false;
//         }
//       }
//     }
//     else if(a[x] !== b[x]) {
//       console.log('here');
//       same = false;
//     }
//   }
//   console.log(same);
//   return same;
// }

function compare(a, b) {
  let same = false;
  if(a.val === b.val) {
    console.log(true);
    same = true;
  }
  else if(a.left !== null && b.left !== null) {
    same = false;
    compare(a.left, b.left);
  }
  else if(a.right !== null && b.right !== null) {
    same = false;
    compare(a.right, b.right);
  }
  return same;
}

compare(bNode, aNode);
