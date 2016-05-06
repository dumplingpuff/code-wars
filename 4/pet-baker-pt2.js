'use strict';

let recipe = {flour: 200, eggs: 1, sugar: 100};

// function findFactor(r, a) {
//   let factor = 1;
//   for(let x in r) {
//     if(r[x] < a[x]) {
//       if(Math.ceil(a[x] / r[x]) > factor){
//           factor = Math.ceil(a[x] / r[x]);
//       }
//     }
//   }
//   return factor;
// }

// findFactor({flour: 200, eggs: 1, sugar: 100}, {flour: 500, eggs: 1, sugar: 200});


function getMissingIngredients(recipe, added) {
  // let factor = findFactor(recipe, added);
  let factor = 1;
  for(let x in recipe) {
    if(Math.ceil(added[x] / recipe[x]) > factor){
      factor = Math.ceil(added[x] / recipe[x]);
    }
  }
  for(let i in recipe) {
    recipe[i] *= factor;
  }
  for(let x in added) {
    if(recipe[x]) {
      recipe[x] - added[x] ? recipe[x] = recipe[x] - added[x] : delete recipe[x];
    }
  }
  console.log(recipe);
  return recipe;
}


getMissingIngredients(recipe, { flour: 150, sugar: 100 });
