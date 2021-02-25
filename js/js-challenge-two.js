/****
 * Exercise one
 */

 for (let i = 0 ; i <= 100; i++) {

    if( i % 2 != 0)
    {
        console.log('The odd numbers are : ', i)
    }

 }

 /******
  * Exercise two
  */


  const registerName = () => {
    let firstName = prompt('Enter your first name:');
    let lastName = prompt('Enter your last name ');

     welcomeGuest (firstName , lastName);

  }

  const welcomeGuest = (fName, lName) => {

    let message = 'Welcome';
    let fullName = fName + ' '+lName + '!';


    alert(message+ ' ' + fullName);

  }
  registerName ();

  /****
  **Exercise 3: Verify a User's age
  ******* */

  const verifyAge = () => {
    let age = prompt ('Please Enter your age :');
    //debugger;
    if (age >= 13){
      alert('Welcome,You are good to Get in!');
    }
    else {
      alert('Sorry come back when you are older :(');
    }
  }
  //debugger;
  verifyAge();

  /*****
   * Exercise 4: Temperature in Fahrenheit
   * ******** */

  const weather = () => {
  let temp = prompt ('Please Enter the weather in celsius: ');
  convertTemprature(temp);
  }

  const convertTemprature = (degree) => {
  let fahrenheit = degree * 1.8 + 32;
  alert('The weather in Fahrenheit is :'+ fahrenheit);
  }
  //weather();

  /****
   * Exercise 5: Guess the number between 1 and 10
   */

   const guessNumber = () => {
     let guessedNumber = prompt('Pick a number between 1 and 10');
     let answerNumber = 4;

     if(answerNumber == guessedNumber){
       alert('Good Guess, You have picked the right number!')
     }
     else {
       alert('Sorry you picked the wrong number, please try again!')
     }

   }