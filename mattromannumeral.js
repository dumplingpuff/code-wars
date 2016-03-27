let denoms = [
  {sym: 'M', value: 1000},
  {sym: 'D', value: 500},
  {sym: 'C', value: 100},
  {sym: 'L', value: 50},
  {sym: 'X', value: 10},
  {sym: 'V', value: 5},
  {sym: 'I', value: 1},
];

const toNumerals = function(num) {
  let str = ''
  let denom;
  let sym;

  denom = 100
  sym = "C"
  for (let i = 0; i < parseInt(num / denom); i += 1){
    str += sym;
  }
  num %= denom;

  denom = 50
  sym = "L"
  for (let i = 0; i < parseInt(num / denom); i += 1){
    str += sym;
  }
  num %= denom;

  denom = 10
  sym = "X"
  for (let i = 0; i < parseInt(num / denom); i += 1){
    str += sym;
  }
  num %= denom;

  if (num === 9) {
    str += "IX"
    num -= 9;
  }

  denom = 5
  sym = "V"
  for (let i = 0; i < parseInt(num / denom); i += 1){
    str += sym;
  }
  num %= denom;

  if (num === 4) {
    str += "IV";
    num -= 4;
  }

  denom = 1
  sym = "I"
  for (let i = 0; i < parseInt(num / denom); i += 1){
    str += sym;
  }
  num %= denom;

  return str;
}
