// Global Variables
var quoteContent, quoteTitle, tweet;

function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  document.body.style.backgroundColor = color;
}

function extractContent(string) {
  var span = $('<span/>');
  tweet = span.html(string).text().replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
  return tweet;
}

$("#newquote").click(function(){
  getRandomColor();
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&jsonp=mycallback", function(data) {
    $(".quotearea").empty().addClass("border");
    quote = data[Math.floor(Math.random()*data.length)];
    quoteContent = quote.content
    extractContent(quoteContent);
    quoteTitle = quote.title;
    $(".quotearea").append(quoteContent + " " + quoteTitle);
    $('.tweetquote:hidden').show();
  });
});

$('.tweetquote').click(function() {
  window.open('https://www.twitter.com/intent/tweet?text=' + tweet + quoteTitle);
});
