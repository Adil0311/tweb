function logQuote(quote) {
    console.log(quote);
    }

function logString(string) {
    console.log('questa funzione stampa solo '+ string)
}
    
function createQuote(quote, callback) {
    const myQuote= `Like I always say, '${quote}'`;
    callback(myQuote);
}
    
createQuote("JavaScript rocks!", logQuote);
createQuote("JavaScript rocks!", logString);