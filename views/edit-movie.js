/* global $ Movie */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    // console.log(window.location.search);
    // console.log(window.location.search.substring(1).split('='));
    
    function getMovieIdFromUrl() {
        
        var url = window.location.search.substring(1).split('=');
            
            // console.log(1);
            // console.log(url[1]);
            // console.log(url[0]=== "movieId");
         
         for(var i = 0; i < url.length; i++) {
            if (url[0]=== "movieId") {
                return url[1];
            }
        
        } 
        
        // console.log(2);
        
            
    }

    var movieDetails = new Movie();
    movieDetails.id = getMovieIdFromUrl();
    console.log('',movieDetails.id);
    movieDetails.getMovieItem(movieDetails.id);
    
    
}