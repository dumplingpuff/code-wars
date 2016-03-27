'use strict';

let extend =  function(obj, src) {
  for(let key in obj) {
    if(src.hasOwnProperty(key)) {
      obj[key] = obj[key] + src[key];
    }
    obj[key] = src[key];
  }
};
