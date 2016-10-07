$("#newquote").click(function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&jsonp=mycallback", function(a) {
    $(".quotearea").empty();
    $(".quotearea").addClass("border");
    var quote = a[Math.floor(Math.random()*a.length)];
    $(".quotearea").append(quote.content + " " + quote.title);
  });
});
