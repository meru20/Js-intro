/*******Arrays  Notes *****/

// Strings Properties and methods

// let firstString = 'Hello world';
// firstString = 'Hello universe  ';
// let wordString = 'meaow, oouf , yikes , whoa';
// console.log(firstString);
// console.log(firstString.length);
// console.log(firstString.indexOf('o'));
// console.log(firstString.trim())
// console.log(firstString.toLowerCase());
// console.log(firstString.toUpperCase());
// console.log(firstString.substring(0,5));
// console.log(firstString.split('  '));
// console.log(wordString.split(' , '))
// console.log(wordString);
// //alert(firstString)


// //Arrays

// let firstArray = new Array(1,2,3,4,5,6,7,8);
// console.log('first Array: ', firstArray)

// let coolerArray = [10,20,30,40,50];
// console.log('cooler Array :', coolerArray);

// let fruits = ['Apples', 'oranges', 'plums', 'banana'];
// console.log('how many items in my fruits array?', fruits.length);
// console.log(fruits);
// console.log(fruits[1]);
// console.log('I like ' + fruits[1] +' and '+ fruits[2]);

// console.log(fruits.push('Mangoose','peaches'));
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift('Tacos');
// console.log(fruits);
// fruits.shift();
// console.log('removing tacos :',fruits);
// console.log(fruits)
// let emptyArray = [];
// console.log('empty array: ',emptyArray.length);

// //loops with an array

// for (let i= 0; i < fruits.length ; i++){
//     console.log(fruits[i]);
// }
// //creat an array of your top 5 movies
// //create a loop that console.logs each of these movies
// //use toUpperCase() to console.log all movies in all caps

let movies = ['inception', 'martin' ,'Fresh prince of bel-Air', 'friends', 'The Intouchables']
let i = 0;
while ( i < movies.length) {
    console.log(movies[i].toUpperCase());
    i++;
}