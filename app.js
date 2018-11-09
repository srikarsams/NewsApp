/*--------------------------
    VARIABLES DECLARATION  
----------------------------*/

let highlights = [];
let highlighsCardsHolder = document.querySelector('.highlighsCardsHolder'); //Highlights div
let endpoints = {
    theVerge        : 'https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    theNextWeb      : 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    bbcNews         : 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    theWallStrt     : 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    businessInsider : 'https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    cnn             : 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    engadget        : 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    techCrunch      : 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    wired           : 'https://newsapi.org/v2/top-headlines?sources=wired&apiKey=d79fdc0cae2443479dc7d282b8279cdc',
    theHindu        : 'https://newsapi.org/v2/top-headlines?sources=the-hindu&apiKey=d79fdc0cae2443479dc7d282b8279cdc'
}

/*---------------------
    HIGHLIGHTS SECTION   
-----------------------*/

// highlight Event Handler

function highlightsHtml(e) {
    let ep = endpoints[e.srcElement.classList[2]]
    fetch(ep)
        .then((data) => data.json())
        .then((news) => {
            highlights = news;
            let html ='',url,imgSrc,title;
            highlights.articles.forEach((article) => {
                url = article.url;
                imgSrc = article.urlToImage;
                title = article.title;
                html += `
                <div class="card">
                    <img src="${imgSrc}" alt="${title}">
                    <h3><a href="${url}" target="_blank">${title}</a></h3>              
                </div> 
                `
                highlighsCardsHolder.innerHTML = html;
            })
        })
};  

// theVerge Handler
document.querySelector('.theVerge').addEventListener('click', highlightsHtml);

// theNextWeb Handler
document.querySelector('.theNextWeb').addEventListener('click', highlightsHtml);

// bbc eventhandler
document.querySelector('.bbcNews').addEventListener('click', highlightsHtml);

// bloomberg Handler
document.querySelector('.theWallStrt').addEventListener('click', highlightsHtml);

// businessInsider Handler
document.querySelector('.businessInsider').addEventListener('click', highlightsHtml);

// cnn Handler
document.querySelector('.cnn').addEventListener('click', highlightsHtml);

// engadget Handler
document.querySelector('.engadget').addEventListener('click', highlightsHtml);

// techCrunch Handler
document.querySelector('.techCrunch').addEventListener('click', highlightsHtml);

// wired Handler
document.querySelector('.wired').addEventListener('click', highlightsHtml);

// theHindu Handler
document.querySelector('.theHindu').addEventListener('click', highlightsHtml);

