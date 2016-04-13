'use strict';
//

function convertWord(word) {
  let worse = word.split('');
  console.log(worse);
  return worse.map(function(x) {
    return Math.random() > 0.40 ? x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase() : x;
  });
}

convertWord('Confidence');
