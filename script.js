var quoteObj;
var quoteContent;
var quoteTitle;

function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * letters.length)];
  }
  document.body.style.backgroundColor = color;
}

$("#newquote").click(function(){
  getRandomColor();
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&jsonp=mycallback", function(a) {
    $(".quotearea").empty();
    $(".quotearea").addClass("border");
    quote = a[Math.floor(Math.random()*a.length)];
    quoteContent = quote.content.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/“/g, "\'").replace(/”/g, "\'").replace(/‘/g, "\'").replace(/’/g, "\'");
    console.log(quoteContent);
    quoteTitle = quote.title;
    $(".quotearea").append(quoteContent + " " + quoteTitle);
    $('.tweetquote:hidden').show();
  });
});

$('.tweetquote').click(function() {
  window.open('https://www.twitter.com/intent/tweet?text=' + quoteContent + quoteTitle);
});
