/****
 * js: part two
 * -operators
 * -control flow
 * -functions
 */
// comparison operators
let value1 = 35;
let value2 = '35';

console.log('does value 1 equals value 2', value1!==value2);// true
console.log('is value 1 greater than value2?',value1>=value2);//false

//logical &&
//in order for the result to be true, all conditions must be met true
console.log('Are my two conditions true or false?', (value1 > value2) && (value1!==value2));

//Logical ||
console.log(
    'Logical ||: Are my two conditions true or false',
    value1 > value2 || value1 !== value2
)// true

// combining logical || and logical &&
console.log('Combining || &&: "what is the result', (value1 > value2) || (value1 !==value2) && value2 > value1);

/******* control structures *********/
//If else

let numberOne = 100;
let numberTwo = 445;
let numberThree = 200;

if (numberOne > numberTwo){
alert(" you are correct!")
} else {
alert('Sorry it is not greater than :(');
}

//If , else if ,else

if (numberOne < numberTwo && numberOne !== numberThree){
    alert(' you are baws!')

}
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

for (let i = 0 ; i < 100 ; i+=10) {

    console.log ("count by 10:", i);
}