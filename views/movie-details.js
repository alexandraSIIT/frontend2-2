/* global $ Movie */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    console.log(window.location.search);
    console.log(window.location.search.substring(1).split('='));
    
    function getMovieIdFromUrl() {
        
        var url = window.location.search.substring(1).split('=');
            
            
         for(var i = 0; i < url.length; i++) {
            if (url[0]=== "movieId") {
                return url[1];
            }
        
        } 
        
        
            
    }

    var movieDetails = new Movie();
    movieDetails.id = getMovieIdFromUrl();
   
    movieDetails.getMovieItem(movieDetails.id).then(displayMovie);
    
    function displayMovie(response) {
        console.log("RESPONSE ", response);
        
    }
    
    
}

