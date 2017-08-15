const newQuoteButton = document.getElementById('newquote');
const quoteArea = document.querySelector('.quotearea');
const tweetQuoteButton = document.querySelector('.tweet');

let content, title;

// A function to apply a random background colour to the <body>
function getRandomBackgroundColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    document.body.style.backgroundColor = color;
}

// jQuery hack to remove <p> tags and convert HTML entities to usable characters
function sanitizeString(string) {
    var span = $('<span/>');
    string = span.html(string).text().replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
    return string;
}

// Tweet the quote!
function tweetQuote() {
    window.open(`https://www.twitter.com/intent/tweet?text=${sanitizeString(content)} ${title}`);
}

async function getQuote() {

    getRandomBackgroundColor();
    const response = await fetch('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
    const data = await response.json();
    content = data["0"].content;
    title = data["0"].title;

    quoteArea.classList.add('border');
    quoteArea.innerHTML = `${content} ${title}`;
    tweetQuoteButton.style.display = 'inline';
}

newQuoteButton.addEventListener('click', getQuote);
tweetQuoteButton.addEventListener('click', tweetQuote);
