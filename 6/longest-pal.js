'use strict';
// Test.assertEquals(longestPalindrome("a"), 1)
// Test.assertEquals(longestPalindrome("aa"), 2)
// Test.assertEquals(longestPalindrome("baa"), 2)
// Test.assertEquals(longestPalindrome("aab"), 2)
// Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
// Test.assertEquals(longestPalindrome("baabcd"), 4)
// Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)

function longestPalindrome(str) {
  function isPal(word) {
    if(word === word.split('').reverse().join('')) {
      count = word.length;
    }
  }

  str = str.split('');
  let longest = 0;
  let count = 0;

  for(let i = 0; i < str.length; i++) {
    for(let a = str[i].length; 0 < a; a--) {
      isPal(str[i].substring(0, a));
      longest = count > longest ? count : longest;
    }
  }
  console.log(longest);
  return longest;
}

longestPalindrome('baa');
