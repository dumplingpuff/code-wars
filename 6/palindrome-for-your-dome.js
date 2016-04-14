'use strict';

// ensure a string is a palindrome factoring in case insensitive and
// non alphanumeric characters.
// skip spaces too (also alphanumeric)
// cannot manipulate the string in anyway or use arrays.

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid

// check each character from both end points and move towards the middle.
// convert each character to lowercase.
// check if character is alphanumeric.
// stop loop when

const toLower = function(a) { return a.toLowerCase(); };
const isAlpha = function(a, b) {
  if(!a.match(/^[a-z]+$/i)) {
    console.log('in match');
    b++;
    isAlpha(a);
  }
};

function check(word) {
  let end = word.length -1;
  for(let i = 0, a = 0; a < word.length - i; i++, a++) {
    console.log(`end is: ` + end + ` a is ` + a);
    console.log(`start is: ` + word[i] + ` end is ` + word[end - a]);
    isAlpha(word[end - a], a);
    isAlpha(word[i], i);
    if(toLower(word[end - a]) !== toLower(word[i])) {

      console.log(false);
      return false;
    }
    console.log(true);
  }
}

check('tee t');
