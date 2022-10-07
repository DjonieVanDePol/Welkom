
$(document).ready(function() {
$("#start").click(function() {
  var naam = $("#a_naam").val();
  var leeftijd = $("#a_leeftijd").val();
  var woonplaats = $("#a_woonplaats").val();
  window.alert("Welkom, " + naam + ". Je bent " + leeftijd + " jaar en je woont in " + woonplaats + ".");
});
});
