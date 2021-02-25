/*************
 * Fun with functions
 * ******** */

 //basic form
 function showMyName () {
     let firstName = 'Merhawit';
     let lastName = 'Gubsa';
     let fullName = firstName + ' ' + lastName;

     console.log (' You are: ', fullName);// use console.log to render fullName
 }
 showMyName();

 //multiply numbers

 function multiplyNumbers (firstNumber, secondNumber) {
     let multiNumbers = firstNumber * secondNumber ;
     console.log(multiNumbers);
     console.log ('these are multiplied numbers!', multiNumbers);
 }
 multiplyNumbers(63,52);

 /** Arrow Fucntions */

 const countToTen = () => {
for (let i = 0; i <= 10 ; i++){
    console.log(i);
}
 };
 countToTen();

 /*****another arrow function */
 const countToTenFromAnypoint = (initialNumber) => {
     if(initailNumber <= 10) {
        for (let initialNumber; initialNumber <= initialnumber + 10 ; initialNumber++){
            console.log(initialNumber);
     }

    }
    else {
        alert('the number is larger than 10')
    }
     };
     countToTenFromAnypoint(4);

     // function that alerts user name using button

     function welcomeNewUser () {//--------------------------------------check it out
         let firstName = 'Merhawit';
         let lastName = 'Gubsa';
         let message = ' Hey there, ';
         let fullMessage = message + firstName + ' '+ lastName;

         // Alert to render the concat name with welcome
         alert (fullMessage);

     };


     const favoriteAnimal = () => {
         let favAnimal = 'bird';
         let message = 'My favorite animal is ';
         let petMessage = message + favAnimal;

         alert (petMessage);
     }

     //welcomeNewUser();

     // Add a button to your html page
     // tied to a function
     //function alerts youruser with your favorite animal