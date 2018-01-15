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
               movieItem.id=movieList.model[i].id;
            
            var moviePoster = document.createElement('img');
                moviePoster.setAttribute('src', movieList.model[i].poster );
                moviePoster.innerHTML = movieList.model[i].poster;
                
            var movieTitle = document.createElement('a');
                movieTitle.innerHTML = movieList.model[i].title;
                movieTitle.setAttribute('href', 'movieDetails.html?movieId=' + movieList.model[i].id);
                movieTitle.setAttribute('target', '_blank');
                
            var editButton = document.createElement('button');
                editButton.setAttribute("edit","edit-movie");
                editButton.innerHTML = 'Edit';
                editButton.addEventListener("click",function(e){
                    console.log('sdasda',e);
                    console.log("id", e.path[1].id);
                    window.open('editMovie.html?movieId=' + e.path[1].id);
                });
                
            var deleteButton = document.createElement('button');
                deleteButton.setAttribute("delete","delete-movie");
                deleteButton.innerHTML = 'Delete';
                
            
                
                // console.log(movieList.model[i].id);
                
            // var movieYear = document.createElement('p');
            //     movieYear.innerHTML = movieList.model[i].year;
                
            // var movieimdbRating = document.createElement('span');
            //     movieimdbRating.innerHTML = movieList.model[i].imdbRating;
                
            
            movieItem.appendChild(moviePoster);
            movieItem.appendChild(movieTitle);
            movieItem.appendChild(editButton);
            movieItem.appendChild(deleteButton);
            content.appendChild(movieItem);
            // movieItem.appendChild(movieYear);
            // movieItem.appendChild(movieimdbRating);
         
        }
        
        
    }
    
}