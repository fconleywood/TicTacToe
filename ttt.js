$(document).on("ready" function() {
  var = turn = 0;

$("td").on("click", function() {

  var self = $("this");

if ( turn % 2 ) {
    slef.html('O');
  } else {
    self.html("X");
  }
  self.off("click");
  turn++;
});
});
