const guessNumber = () => {
    let guessedNumber = prompt('Pick a number between 1 and 10');
    let answerNumber = 4;
    //let verifyNumber = isNaN(guessedNumber);
// if (verifyNumber) {
//     alert('please enter a number only');
// }
let verified = verifyNumber(guessedNumber);
if(verified) {
    alert('That is not a number, Fool!')
}
    if(answerNumber == guessedNumber){
      alert('Good Guess, You have picked the right number!')
    }
    else {
      alert('Sorry you picked the wrong number, please try again!')
    }

  }

  const verifyNumber = userInput => {
      let result = isNaN(userInput);

    return result;
  }