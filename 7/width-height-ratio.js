'use strict';
// Function should take width and height of an image and return a ratio string (ex."16:9").
//If any of width or height entry is 0 function should raise an error.

function calculateRatio(w, h){
  function comdom(a ,b) {
    return b === 0 ? a : comdom(b, a%b);
  }
  if(!w || !h) {
    throw('No value in one of the parameters');
  }
  else {
    let cd = comdom(w,h);
    return `${w/cd}:${h/cd}`;

  }
}
