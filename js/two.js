/****
 * js: part two
 * -operators
 * -control flow
 * -functions
 */
// // comparison operators
// let value1 = 35;
// let value2 = '35';

// console.log('does value 1 equals value 2', value1!==value2);// true
// console.log('is value 1 greater than value2?',value1>=value2);//false

// //logical &&
// //in order for the result to be true, all conditions must be met true
// console.log('Are my two conditions true or false?', (value1 > value2) && (value1!==value2));

// //Logical ||
// console.log(
//     'Logical ||: Are my two conditions true or false',
//     value1 > value2 || value1 !== value2
// )// true

// // combining logical || and logical &&
// console.log('Combining || &&: "what is the result', (value1 > value2) || (value1 !==value2) && value2 > value1);

/******* control structures *********/
//If else

// let numberOne = 100;
// let numberTwo = 445;
// let numberThree = 200;

// if (numberOne > numberTwo){
// alert(" you are correct!")
// } else {
// alert('Sorry it is not greater than :(');
// }

// //If , else if ,else

// if (numberOne < numberTwo && numberOne !== numberThree){
//     alert(' you are baws!')

//}
// else if (numberOne > numberTwo){
//     alert('thats a match!')
// }

// else{
//     alert('you are still baws!');
// }

//---------Loops


// count up


// for(let i = 0 ; i < 200; i++) {

//     // render the number 10
//     if (i === 10){
//         console.log("The number:" , i)
//     }
//     //console.log('my counter: ', i)

// }

// // count down
// for(let i = 10 ; i > 0; i--) {
//     console.log('my downward courter: ', i)

// }

// create  a for loop that counts by 10 starting with indext at 0 and ending 100

// for (let i = 0 ; i < 100 ; i+=10) {

//     console.log ("count by 10:", i);
// }

// for (let i= 0 ; i <= 100 ; i++) {
//     if (i <= 50 ) {
// // end loop
// break;
//     }
//     else {
//         console.log(i);
//     }
// }

// while loop
// while (i < 10){
//     console.log(i);
//     i++;
// }
// // do while loop

// do {
//     console.log(j);
//     j++;
// }
//  while (j<10);

 /*********** Ternary ******/



 //[if  condition = true] ? (run  this colde()): (run this code ())
//  let age = 20;
//  age > 21 ?
//  alert('Have fun, be safe!')
//  : alert('sorry you cant come in buddy!');

//  /***************Switch statements**************/
//  let animal = 'cow';


//  switch (animal) {

//     case 'dog':
//         alert ('its a dog!');
//         break;
//     case 'cat':
//         alert ('its a cat!');
//         break;
//     case 'monkey':
//         alert('its monkey');
//         break;
//     case 'cow':
//         alert('its a cow');
//         break;
//     case 'rabbit':
//         alert('its rabbit!')
//         break;
//     default:
//         alert ('doesnt match!')



//  }

/*********** functions ***********/
 function firstFunction () {
 console.log('this is my first function')
 }
 //firstFunction();

 function coutDown() {
     for (let m=0 ; m <= 10 ; m++)
     {
         console.log ('count down function!', m );
     }
 }
 //coutDown();

 // Arrow Functin Expressions

 const doMath = () => {
     let num = 10;
     let num2 = 20 ;
     console.log ('my sum is', num + num2);
 }
 doMath();