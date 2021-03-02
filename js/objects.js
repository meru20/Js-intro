/**************objects notes ****** */
let firstObject = new Object();
console.log(firstObject)
let person = {
  name: 'Merhawit',
  hobby: 'basketball',

  isAwesome: true,
  favoriteMovies: ['mangoees','oramges','strawberries'],
  'likes running': 'sometimes',
  pet: {// object within an object
    type:'cat',
    name: 'Mittens',
    age: 2,
  },

};
console.log(person.hobby);
console.log((person['name']));
console.log(person['likes running']);
console.log(person.pet.name);

// delete a property
delete person.hobby;

//key in object
console.log('person', person);
console.log('name' in person);

// for loop with in an object
for (let key in person) {
  console.log('the key name is :', key);// gives the variable names only within an object
  console.log('this key value is :', person[key]);  // gives the values within an object
}
let alertArray = ['firstVal','secondVal','thirdVAl'];
alert(alertArray);// alert on array works
alert('this is my object', person);// alert on an object doesn't work
alert(person.name+' '+person.hobby);
let animals = [
  {
    type:'cat',
    name:'kitten',
    isEvil: false,
  },
  {
    type:'Dog',
    name:'Bob',
    isEvil: false,
  },
  {
    type:'Bird',
    name:'Doug',
    isEvil: true,
  },

]
for (let key in animals) {
  console.log('The names of the animals are :', animals[key].name);
}

//Higher order array methods
// foreach loop in an array
animals.forEach(function (animal) {
  console.log('my animal', animal.name);
});

//using .map for loops in an array
//.map returen us a new array based on function

let animalTypes = animals.map (animal => {
 // console.log('inside the map func', animal);
  return animal.type;
});
console.log('Animal Types :', animalTypes);

//using filter in an Array .filter()
// return an Array back as well
let evilAnimals = animals.filter(animal => {
// check if object.isEvil property is true
// if it is return that animal
return animal.isEvil === true;

});

let evilAnimalNames = animals.filter(animal => {
  return animal.isEvil === true;
}).map ( (evilAnimal) => {
return evilAnimal.name
})
console.log('names of the evil animals :', evilAnimalNames);
console.log('these are the evil animals :', evilAnimals);

/**************
 * Monday challenges
 ***
 ****/
let items = [
  { name: 'Huffy X27', price: 100, category: 'fitness' },
  { name: 'The Alchemist', price: 15, category: 'books' },
  { name: 'Snuggy', price: 10, category: 'home' },
  { name: 'Macbook Pro', price: 1500, category: 'technology' },
  { name: 'Peloton', price: 2000, category: 'fitness' },
  { name: 'iPad Pro', price: 800, category: 'technology' },
  { name: 'Ember Coffee Mug', price: 80, category: 'home' },
  { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];
// Loop through the items, console.log the price with a concatenated string that let's the user know the total price
// - Create a new array using the map method, that returns all the names of each item
// - Create a new array using the filter method that returns all the items that are less than 100
// - Using the find method loop through the array and return the laptop item setting it to a variable
// - Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items

/*******forEach Loops */
items.forEach(item => {
  console.log(`The total price of  ${item.name} is`, item.price);
});



/******mapping */
let itemNames = items.map (item => {

   return item.name;
 });
 console.log('The item names are', itemNames);

 /*****filter less than 100 *///============================================= check
 let itemsLess = items.filter(item => {

  return item.price < 100;
});
console.log('The items less than 100 are :', itemsLess);

/************find laptop and set it to a variable */
let itemLaptop = items.filter(item => {
  return item.name === 'Macbook Pro';
});

console.log('The laptop in this items is ', itemLaptop);

//alternate way of finding in an array
const foundIem = items.find(item => {
  return item.name === 'Macbook Pro';
})
console.log('The laptop item is ', foundIem);

/************chaining */
let itemsAbove = items.filter(item => {
  return item.price > 100;
}).map ( (itemsHigher) => {
return itemsHigher.name
})
console.log('The are the items with price above 100:', itemsAbove);
