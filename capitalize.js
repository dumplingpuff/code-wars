'use strict';
let capitalize : function(str) {
  let ll;
  let arr = str.split('');
  let letter = arr[0];
  switch (letter) {
    case 'a':
    ll = 'A';
    break;
    case 'b':
    ll = 'B';
    break;
    case 'c':
    ll = 'C';
    break;
    case 'd':
    ll = 'D';
    break;
    case 'e':
    ll = 'E';
    break;
    case 'f':
    ll = 'F';
    break;
    case 'g':
    ll = 'G';
    break;
    case 'h':
    ll = 'H';
    break;
    case 'i':
    ll = 'I';
    break;
    case 'j':
    ll = 'J';
    break;
    case 'k':
    ll = 'K';
    break;
    case 'l':
    ll = 'L';
    break;
    case 'm':
    ll = 'M';
    break;
    case 'n':
    ll = 'N';
    break;
    case 'o':
    ll = 'O';
    break;
    case 'p':
    ll = 'P';
    break;
    case 'q':
    ll = 'Q';
    break;
    case 'r':
    ll = 'R';
    break;
    case 's':
    ll = 'S';
    break;
    case 't':
    ll = 'T';
    break;
    case 'u':
    ll = 'U';
    break;
    case 'v':
    ll = 'V';
    break;
    case 'w':
    ll = 'W';
    break;
    case 'x':
    ll = 'X';
    break;
    case 'y':
    ll = 'Y';
    break;
    case 'z':
    ll = 'Z';
    break;
  }
  return ll + str.substring(1);
};
