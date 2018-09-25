// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
var quoteText = document.querySelector(".quote-text");
var quoteAuthor = document.querySelector(".quote-author");
var newQuote = document.querySelector(".new-quote");
function getQuote() {
    quoteText.innerHTML = "";
    quoteAuthor.innerHTML = "";
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data.quoteText);
            console.log(data.quoteAuthor);
            quoteText.innerHTML = data.quoteText;
            quoteText.innerHTML = data.quoteText;
        },
        error: function (error) {
            console.log("There was an error");
        }
    })
}

newQuote.addEventListener("click",function (){
    getQuote();
});
