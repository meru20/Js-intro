/*****
 *  === Create a simple calculator app ===
// 1. On your web page, add a button that triggers a confirm
// asking the user if they would like to calculate two numbers
// 2. if they confirm it should then trigger a prompt
// that asks if they would like to 'add', 'subtract', 'multiply' or 'divide' the two values
// then trigger prompts that asks for the number values
// And finally an alert that lets the user know the result of their values
// Create a js-challenge-three.html and js-challenge-three.js file and submit to github when you are done
// Aside: Create separate functions to run different tasks. And feel free to make your code as dynamic and efficient as you see fit
 */

 const ask = () => {
     let answer = confirm('Hey there! would you like to calculate two numbers?')
     if (answer == true) {
let arthimetic = prompt(' would you like to add , subtract, multiply or divide the two value?')
//debugger;
switch (arthimetic) {
    case'add':
    let addOne = prompt('what is the first value you want to add?');
    let addTwo = prompt('what is the second value you want to add?')
    let addition = parseInt(addOne) + parseInt(addTwo) ;
    alert ('The sum of the two numbers is '+ addition);
    break;
    case'subtract':
    let subOne = prompt('what is the first value you want to subtract?');
    let subTwo = prompt('what is the second value you want to subtract?')
    let subtraction = parseInt(subOne) - parseInt(subTwo) ;
    alert ('The difference of the two numbers is '+ subtraction);
    break;
    case'divide':
    let divideOne = prompt('what is the first value you want to divide?');
    let divideTwo = prompt('what is the second value you want to divide?')
    let division = parseInt(divideOne) / parseInt(divideTwo) ;
    alert ('the division of the two numbers is '+ division);
    break;
    case'multiply':
    let multiplyOne = prompt('what is the first value you want to multiply?');
    let multiplyTwo = prompt('what is the second value you want to multiply?')
    let multiplication = parseInt(multiplyOne) * parseInt(multiplyTwo) ;
    alert ('the multiplication of the two numbers is '+ multiplication);
    break;

    default:
    alert('Please enter the arthimetic operation you want to use.');

}
     }
     else {
         alert('It was Great having you for a sec! come back soon!');
     }
 }