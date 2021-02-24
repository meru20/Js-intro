/****
 * Excercise one
 */

 for (let i = 0 ; i <= 100; i++) {

    if( i % 2 != 0)
    {
        console.log('The odd numbers are : ', i)
    }

 }

 /******
  * Excercise two
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