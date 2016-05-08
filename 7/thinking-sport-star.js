'use strict';
// Test.assertSimilar(testit(["run","jump","run","jump","run"],"_|_|_"),"_|_|_", "")
// Test.assertSimilar(testit(["run","jump","run","run","run"],"_|_|_"),"_|_/_", "")
// Test.assertSimilar(testit(["run","run","run","run","run"],"_|_|_"),"_/_/_", "")
// Test.assertSimilar(testit(["jump","jump","jump","jump","jump"],"_|_|_"),"x|x|x", "")
// Test.assertSimilar(testit(["jump","run","jump","run","jump"],"_|_|_"),"x/x/x", "")

// [ 'run', 'run', 'run', 'run', 'run', 'run', 'run', 'run', 'run', 'run' ]
// [ '|', '/', '|', '/', '|', '/', '|', '/', '|', '/' ]


function testit(act, s) {
  let stor = {
    '/' : {val:'run',opp:'|'},
    '|' : {val:'jump',opp:'/'},
    '_' : {val:'run',opp:'x'},
    'x' : {val:'jump',opp:'_'},

  };
  s = s.split('');
  for(let i = 0; i < act.length; i++) {
    if(act[i] !== stor[s[i]].val) {
      s[i] = stor[s[i]].opp;
    }
  }
  console.log(s.join(''));
  return s.join('');
}


testit(['run','jump','run','run','run'],'_|_|_');
testit(['run','run','jump','run','run'],'_|_|_');
