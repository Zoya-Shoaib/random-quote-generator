let author=document.querySelector("#author");
let quote=document.querySelector("#quote");
let btn=document.querySelector("#btn");
let quotes=[
    {
        q:"The best way to get started is to quit talking and begin doing.",
        a:"Walt Disney"
    },
    {
        q:"Don’t let yesterday take up too much of today.",
        a:"Will Rogers"
    },
    {
        q:"It’s not whether you get knocked down, it’s whether you get up.",
        a:"Vince Lombardi"
    },
    {
        q:"If you are working on something exciting, it will keep you motivated.",
        a:"Mark Zuckerberg"
    },
    {
        q:"Success is not in what you have, but who you are",
        a:"Bo Bennett"
    },
    {
        q:"The harder you work for something, the greater you’ll feel when you achieve it.",
        a:"Unknown"
    },
    {
        q:"Dream bigger. Do bigger.",
        a:"Unknown"
    },
    {
        q:"Don’t watch the clock; do what it does. Keep going.",
        a:"Sam Levenson"
    },
    {
        q:"Great things never come from comfort zones",
        a:"Unknown"
    },
    {
        q:"Dream it. Wish it. Do it.",
        a:"Unknown"
    },
    {
        q:"Stay positive, work hard, make it happen.",
        a:"Unknown"
    },
    {
        q:"The secret of getting ahead is getting started.",
        a:"Mark Twain"
    },
    {
        q:"Everything you can imagine is real.",
        a:"Pablo Picasso"
    },
    {
        q:"Do what you can with all you have, wherever you are.",
        a:"Theodore Roosevelt"
    },
    {
        q:"You are never too old to set another goal or to dream a new dream.",
        a:"C.S. Lewis"
    },
    {
        q:"Believe you can and you’re halfway there.",
        a:"Theodore Roosevelt"
    },
    {
        q:"Act as if what you do makes a difference. It does.",
        a:"William James"
    },
    {
        q:"Success doesn’t just find you. You have to go out and get it.",
        a:"Unknown"
    },
    {
        q:"Opportunities don’t happen, you create them.",
        a:"Chris Grosser"
    },
    {
        q:"Don’t be afraid to give up the good to go for the great.",
        a:"John D. Rockefeller"
    },
    {
        q:"I find that the harder I work, the more luck I seem to have.",
        a:"Thomas Jefferson"
    },
    {
        q:"The only limit to our realization of tomorrow will be our doubts of today.",
        a:"Franklin D. Roosevelt"
    },
    {
        q:"Your limitation—it’s only your imagination.",
        a:"Unknown"
    },
    {
        q:"Push yourself, because no one else is going to do it for you.",
        a:"Unknown"
    },
    {
        q:"Happiness is not something ready-made. It comes from your own actions.",
        a:"Dalai Lama"
    }
];
// console.log(qoutes.length)

// console.log(no);
btn.addEventListener("click",function(){
   let index=Math.trunc(Math.random()*(quotes.length));
    quote.textContent=quotes[index].q;
    author.innerHTML="<i>—"+quotes[index].a+"—</i>";
})