var quote;

$("#newquote").click(function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&jsonp=mycallback", function(a) {
    $(".quotearea").empty();
    $(".quotearea").addClass("border");
    quote = a[Math.floor(Math.random()*a.length)];
    $(".quotearea").append(quote.content + " " + quote.title);

    $('.tweetquote:hidden').show();
  });
});

$('.tweetquote').click(function() {
  window.open('https://twitter.com/intent/tweet?text=' + quote.content + quote.title);
});
