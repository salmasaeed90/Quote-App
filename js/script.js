

var quotesArr = [
    {quote:"A friend is someone who knows all about you and still loves you",
    author:"Elbert Hubbard"},

    {quote:"Be yourself; everyone else is already take",
    author:"Oscar Wilde"},

    {quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    author:"unknwon"},

    {quote:"Insanity is doing the same thing, over and over again, but expecting different results ",
    author:"Narcotics"},

    {quote:"We accept the love we think we deserve ",
    author:"Stephen Chbosky"},
]

var quote = document.getElementById("quote-text")
var author = document.getElementById("author-name")
var button = document.getElementById("btn")

function randomQuote(){
    var randomQ = quotesArr[Math.floor(Math.random() * quotesArr.length )] ;
    
    console.log(randomQ)
    
    quote.innerHTML = randomQ.quote;
    author.innerHTML = randomQ.author;



    
    // var usedQuote = quote.innerHTML = randomQ.quote;

    // console.log(usedQuote)

    // if(randomQ = usedQuote){
    //     quotesArr.slice(randomQ)
    // }

}


