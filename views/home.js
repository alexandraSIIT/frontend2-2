/* global $ MoviesList Cookie Auth*/

$(document).ready(onHtmlLoaded);


function onHtmlLoaded() {
    
    var movieList = new MoviesList();
    var delMovie = new Movie();
    
    var addMovie = document.getElementById('add-movie');
        addMovie.addEventListener('click', function(){
            window.open("addMovie.html");
        });
    
    movieList.getMovies().then(displayMovie);
    var content = document.getElementById('movieDisplay');
   
    
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
                editButton.setAttribute('id', 'edit');
                editButton.innerHTML = 'Edit';
                editButton.addEventListener("click",function(e){
                   
                    window.open('editMovie.html?movieId=' + e.path[1].id);
                });
                
            var deleteButton = document.createElement('button');
                deleteButton.setAttribute("delete","delete-movie");
                deleteButton.setAttribute('id', 'delete');
                deleteButton.innerHTML = 'Delete';
                deleteButton.addEventListener("click",function(e){
                    console.log(e.path[1].id);
                    
                       delMovie.deleteMovie(e.path[1].id).then(deleteMovieItem(e)).catch(function(err){
                        alert("olga nu ai facut bine")
                    })

                })
                
                
            
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
 function deleteMovieItem(e){
     e.path[1].remove();

 }