
$(document).on('ready', function() {
  var turn = 0;
  var oSquares = [];
  var xSquares = [];

  $('td').on('click', function() {

    var self = $(this);

    if ( turn % 2 ) {
      self.html('<div class="player"> <img src=cadieaction.png height="135"> </div>').addClass('o');
      oSquares.push(parseInt(self.attr("id").split("")[5]));

    } else {
      self.html('<div class="player"> <img src=raccoon.png height="135" > </div>').addClass('x');
      xSquares.push(parseInt(self.attr("id").split("")[5]));
    }
    self.off('click');

    turn++;
    if ( turn >= 5 ) {
        checkForWinner();
    }
  });

          function resetGame() {
              location.reload();
}
      function checkForWinner() {

          for (var a = 0; a < xSquares.length; a++) {
            for (var b = a + 1; b < xSquares.length; b++) {
              for (var c = b + 1; c < xSquares.length; c++) {
                if ((xSquares[a]) + (xSquares[b]) + (xSquares[c]) === 15) {
                  $("span").attr("class","confetti");
                  alert("Raccoon Wins!");
                  resetGame();
                  return;
                }
              }
            }
          }
          for (var a = 0; a < oSquares.length; a++) {
            for (var b = a+1; b < oSquares.length; b++) {
              for (var c = b+1; c < oSquares.length; c++) {
                if ((oSquares[a]) + (oSquares[b]) + (oSquares[c]) === 15) {
                  $("span").attr("class","confetti");
                  alert("Cat Wins!");
                  resetGame();
                  return;
                }
              }
            }
          }
          if ( turn === 9 ) {
             alert("Everybody loses! That's a minute of tic-tac-time you'll never get back.");
             resetGame();
           }
        }
    });



//
//   function checkForWinner(squareArray) {
//      if ( turn <= 9 ) {
//        //check sums of xSquares and oSquares for a winner
//        if ( squareArray.length > 3 ) {
//          for (var i = 0; i < squareArray.length; i++) {
//            newArray = squareArray.splice( i, 1 );
//            if (newArray.length > 3) {
//              checkForWinner(newArray);
//            } else {
//              if ( newArray.sum === 15)
//
//            }
//          }
//        }
//      }
//      else if ( turn === 9 ) {
//        alert( "Everybody loses! That's a minute of tic-tac-time you'll never get back." );
//      }
// });
