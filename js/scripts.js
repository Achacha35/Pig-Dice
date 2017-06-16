//business logic

function Dice (total, tally) {
  this.total = totalScore;
  this.tally = tallyScore;
}

Dice.prototype.randomNumber = function() {Math.floor(Math.random() * 6) + 1);
return randomNumber
this.tally = randomNumber + this.tally;
}


//User interface
$("document").ready(function() {
  $("form#pig-dice").submit(event() {
    event.preventDefault

    var firstPlayer = $("input#player-1").val();
    var secondPlayer = $("input#player-2").val();

     var newDice = new Dice (firstPlayer, secondPlayer);
     

  }
}
