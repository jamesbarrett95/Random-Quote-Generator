var words = ["bunch", "of", "random", "words", "javascript",
            "william", "dark", "light", "blue", "green"];


$("button").click(function(){
var stringArray = [];
$(".quotearea").addClass("border");
  for(i = 0; i < words.length; i++) {
    stringArray.push(words[Math.floor(Math.random()*words.length)]);
  }
  var string = stringArray.join(' ');
  $('.quotearea').html('<p>' + string + '</p>');
});
