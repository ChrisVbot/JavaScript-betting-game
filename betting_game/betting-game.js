
$(document).ready(function(){

  var playerCash = 100;
  

  $("#submit").click(function(event){
    var bet = parseInt($('#bet').val());
    var guess = parseInt($('#guess').val());
    if (!validateBet(bet)){
      console.log("do something!");
    } 
    if (!validateGuess(guess)){
      console.log("do something else!");
    }
    event.preventDefault();
    var actualNumber = randomize();
    verify(bet, guess, actualNumber);
  });



  function validateBet(bet){
    if (isNaN(bet)) {
    // alert("You must type an amount in numbers");
    return false;
    } else if (bet < 5 || bet > 10) {
    // alert("You may only bet between $5 and $10");
    return false;
    } else {
      return true;
    }
  }
    

  function validateGuess(guess) {
    if (guess < 1 || guess > 10 || isNaN(guess)) {  
    // alert("You must guess between 1 and 10");
    return false;
    } else {
      return true;
    }
  }

    function randomize(){
      return Math.floor((Math.random() * 10) + 1);
    };




  function verify(bet, guess, randomize) {
    if (guess === bet) {
      playerCash += bet;
      console.log("win");
      // alert("Lucky guess! You win $" + bet + ". Your total cash is $" + playerCash);
    } else if (guess === (randomize + 1 || randomize - 1)) {
      console.log("close - no loss")
      // alert("Close! You missed it by 1. The answer was " + randomize + ". Your total cash is $" + playerCash);
    } else if (guess !== randomize){
        playerCash -= bet; 
        if (playerCash <= 0) {
          console.log("game over");
          // alert("Game over. You lose! The correct answer was " + randomize);
        } else {
          console.log("lose");
          // alert("Sorry! Wrong answer. You lose $ " + bet + ". The correct answer was " + randomize + ". Your total cash is $" + playerCash);
        }
    }
  }

});


// while (playerCash > 0) {
//   var bet = parseInt(prompt("Bet an amount between $5-$10"));
//   if (!validateBet(bet)){
//     continue;
//   } 
//   var guess = parseInt(prompt("Guess a number between 1-10"));
//   if (!validateGuess(guess)){
//     continue;
//   }
//   var actualNumber = randomize();
//   verify(bet, guess, actualNumber);
//   var keepPlaying = confirm("Continue?");
//     if (!keepPlaying){
//       break;
//     }
// }



//   var guess = parseInt(prompt("Guess a number between 1-10"));
//     if (guess < 1 || guess > 10 || isNaN(guess)) {  
//     alert("You must guess between 1 and 10")
//     continue};
  
//   var randomize = computerAnswer[Math.floor(Math.random() * computerAnswer.length)];

//   if (guess === randomize) {
//     playerCash += bet;
//     alert("Lucky guess! You win $" + bet + ". Your total cash is $" + playerCash);
//   } else if (guess === (randomize + 1 || randomize - 1)) {
//     alert("Close! You missed it by 1. The answer was " + randomize + ". Your total cash is $" + playerCash);
//   } else if (guess !== randomize){
//       (playerCash -= bet) 
//       if (playerCash <= 0) {
//         alert("Game over. You lose! The correct answer was " + randomize);
//       } else {
//         alert("Sorry! Wrong answer. You lose $ " + bet + ". The correct answer was " + randomize + ". Your total cash is $" + playerCash);
//       }
//   };
// } while (playerCash > 0);

