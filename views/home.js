/* global $ MoviesList Movie Cookie Auth*/

$(document).ready(onHtmlLoaded);


function onHtmlLoaded() {

    //function for toggle nav-bar
    var togglebtn=$(".toggle-icon")
    togglebtn.on("click", function(){
        $("#toggle-nav").toggleClass("nav-bar-show")

    })
    
    var movieList = new MoviesList();
    var delMovie = new Movie();
    
    var addMovie = document.getElementById('add-movie');
        addMovie.addEventListener('click', function(){
            window.open("addMovie.html");
        });
        
    $('#login').click( () => {
        window.location.href = 'login.html';
    });
    
    $('#logout').click( () => {
        
        //first we check to see if the user is actualy logged
        const isUserLogged = Cookie.findLoggedUserToken();        
        
        if (isUserLogged) {
            Auth.logOutUser(isUserLogged)
                .then( () => {
                    Cookie.deleteTokenCookie();
                    window.location.href = 'home.html';
                })
                .catch(reason => {console.log(reason)});
        }
        else {
            alert('You are not logged in');
        }
        
    });
    
    checkLoginStatus();
    
    movieList.getMovies().then(displayMovie);
    var content = document.getElementById('movieDisplay');
   
    
    function displayMovie() {

        
        for(var i = 0; i < 10; i++) {
            
            var movieItem = document.createElement("section");
               movieItem.setAttribute('class', 'flex-container');
               movieItem.id=movieList.model[i].id;
            
            var divPosterTitle = document.createElement('div');
                divPosterTitle.className = 'poster-title';
                
            var divPoster = document.createElement('div');
                divPoster.className = 'poster';
            var moviePoster = document.createElement('img');
                moviePoster.setAttribute('src', movieList.model[i].poster );
                moviePoster.className = 'img-movie';
                moviePoster.innerHTML = movieList.model[i].poster;
            
            var divTitle = document.createElement('div');
                divTitle.className = 'title';
            var movieTitle = document.createElement('a');
                movieTitle.innerHTML = movieList.model[i].title;
                movieTitle.setAttribute('href', 'movieDetails.html?movieId=' + movieList.model[i].id);
                movieTitle.setAttribute('target', '_blank');
            
            var movieYear = document.createElement('p');
                movieYear.innerHTML = "<span>Year:</span> " + movieList.model[i].year;
                
            var movieimdbRating = document.createElement('p');
                movieimdbRating.innerHTML ='<span>Raiting:</span> '  + movieList.model[i].imdbRating + ' <i class="fa fa-star fa-2x" aria-hidden="true"></i>';
            
            var divButton = document.createElement('div');
                divButton.className = 'button-content';
            var editButton = document.createElement('button');
                editButton.setAttribute("edit","edit-movie");
                editButton.setAttribute('id', 'edit');
                editButton.innerHTML = 'Edit';
                editButton.addEventListener("click",function(e){
                   
                    window.open('editMovie.html?movieId=' + e.path[2].id);
                });
                
            var deleteButton = document.createElement('button');
                deleteButton.setAttribute("delete","delete-movie");
                deleteButton.setAttribute('id', 'delete');
                deleteButton.innerHTML = 'Delete';
                deleteButton.addEventListener("click",function(e){
                    console.log(e.path[2].id);
                    
                       delMovie.deleteMovie(e.path[2].id).then(deleteMovieItem(e)).catch(function(err){
                        alert("olga nu ai facut bine");
                    });

                });
                
                
            divPoster.appendChild(moviePoster);
            divTitle.appendChild(movieTitle);
            divTitle.appendChild(movieYear);
            divTitle.appendChild(movieimdbRating);
            divPosterTitle.appendChild(divPoster);
            divPosterTitle.appendChild(divTitle);
            divButton.appendChild(editButton);
            divButton.appendChild(deleteButton);
            movieItem.appendChild(divPosterTitle);
            movieItem.appendChild(divButton);
            content.appendChild(movieItem);
            // movieItem.appendChild(movieYear);
            // movieItem.appendChild(movieimdbRating);
         
        }
        
        
    }
    
}
 function deleteMovieItem(e){
     e.path[2].remove();

 }
 
 function checkLoginStatus() {
     const userLogged = Cookie.findLoggedUserName(); 
     if(userLogged) {
         document.getElementById('user-name').innerHTML = "Hi, " + userLogged + "!";
     } 

 }