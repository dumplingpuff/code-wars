'use strict';

// //some test cases for you...
// Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// Test.expect(!isValidWalk(['w']), 'should return false');
// Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

// need to be ten in length
// must end up at the starting point

function isValidWalk(walk) {
  let dir = {};
  if(walk.length > 10) { return false;}
  else {
    walk.forEach(function(x) {
      dir[x] = (dir[x] || 0) + 1;
  });
  return (dir['n'] === dir['s'] || dir['w'] === dir['e']);
  }
}

isValidWalk(['n','w','e','s','n','s','n','s','n','s']);
