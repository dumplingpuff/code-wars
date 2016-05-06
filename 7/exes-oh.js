'use strict';

function XO(str) {
  str = str.toLowerCase();
  let a = {};
  for(let i = 0; i < str.length; i++) {
    console.log(a[str[i]]);
    a[str[i]] ? a[str[i]] += 1 : a[str[i]] = 1;
  }
  if(a['x'] === a['o']){
    console.log('comparing ' + true);
    return true;
  }
  else if(str.indexOf('x') < 0 && str.indexOf('o') < 0) {
    console.log('scannning ' + true);
    return true;
  }
  else {
    console.log(false);
    return false;
  }
}

XO('xodsxd');
