'use strict';
function sumStrings(a,b) {
  let sum;
  if(a.length > 20 || b.length > 20) {
    let bottom = Number(a.slice(-16, a.length)) + Number(b.slice(-16, b.length));
    let top = Number(a.slice(0, a.length - 16)) + Number(b.slice(0, b.length -16));
    if(bottom.toString().length > 16) {
      top += 1;
      bottom = bottom.toString().slice(1, a.length);
    }
    return top.toString() + bottom.toString();
  }
  else {
    sum = Number(a) + Number(b);
    return sum.toString();
  }
}


// sumStrings('712569312664357328695151392', '8100824045303269669937');

sumStrings('50095301248058391139327916261', '81055900096023504197206408605');
// - Expected: 131151201344081895336534324866, instead got: 1311512013440711895336534324866
