(function(){

    // define the quotes array
    const quotes = [
        {
            name: 'author number 1',
            quote: 'quote number 1'
        }
        ,
        {
            name: 'author number 2',
            quote: 'quote number 2'
        }
        ,
        {
            name: 'author number 3',
            quote: 'quote number 3'
        }
        ,
        {
            name: 'author number 4',
            quote: 'quote number 4'
        }
        ,
        {
            name: 'author number 5',
            quote: 'quote number 5'
        }
    ];

    // get the elements
    const quoteBtn = document.querySelector('#quoteBtn');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const quote = document.querySelector('#quote');

    // add the click event listener for the quote button
    quoteBtn.addEventListener('click', displayQuote);

    // click event listener function
    function displayQuote() {
        // get a random number from the array
        let number = Math.floor(Math.random()*quotes.length);

        // uopdate the values
        quoteAuthor.innerHTML = quotes[number].name;
        quote.innerHTML = quotes[number].quote;
    }
})();