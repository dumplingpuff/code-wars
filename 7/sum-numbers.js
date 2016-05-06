'use strict';

function GetSum( a,b )
{
  let min = a;
  let max = b;
  let total = 0;
  if(a > b) {
    min = b;
    max = a;
  }

  for(let i = min; i <= max; i++) {
    total+=i;
  }
  console.log(total);
}


GetSum(0,-1);
