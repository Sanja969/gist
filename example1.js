/* this is not dry - lot of repeating code*/

const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);




/* this is dry - by looping through list we can console every lement from list*/

const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets

pets.forEach( pet => {
  console.log(pet);
})

