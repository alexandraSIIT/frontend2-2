/* global $ MoviesList */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    var movieList = new MoviesList();
    
    console.log(movieList);
    
    movieList.getMovies().then(displayMovie);
    var content = document.getElementById('container');
    
    function displayMovie() {

        
        for(var i = 0; i < 10; i++) {
            
            var movieItem = document.createElement("section");
               movieItem.setAttribute('class', 'flex-container');
            
            var moviePoster = document.createElement('img');
                moviePoster.setAttribute('src', movieList.model[i].poster );
                moviePoster.innerHTML = movieList.model[i].poster;
                
            var movieTitle = document.createElement('a');
                movieTitle.innerHTML = movieList.model[i].title;
                movieTitle.setAttribute('href', 'movieDetails.html?movieId=' + movieList.model[i].id);
                movieTitle.setAttribute('target', '_blank');
                
                // console.log(movieList.model[i].id);
                
            // var movieYear = document.createElement('p');
            //     movieYear.innerHTML = movieList.model[i].year;
                
            // var movieimdbRating = document.createElement('span');
            //     movieimdbRating.innerHTML = movieList.model[i].imdbRating;
                
            content.appendChild(movieItem);
            movieItem.appendChild(moviePoster);
            movieItem.appendChild(movieTitle);
            // movieItem.appendChild(movieYear);
            // movieItem.appendChild(movieimdbRating);
         
        }
        
        
    }
    
}