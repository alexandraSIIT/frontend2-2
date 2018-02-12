/* global $ MoviesList Movie Cookie Auth*/

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    
    checkLoginStatus();
    
    displayButtonForUserLogged();
    
    getMovies();
    
    //handles click on the pages
    clickHandler();
    
    //search bar functionality
    searchMovies();
    
    //display data (from a hardcoded arary) into a predefined div tag.
    displayAutors();
}

function clickHandler() {

    // delete Movie - attach a delegated event handler
    //we are getting the id from the parent div of the clicked delete button
    $("body").on( "click", "#delete", function(event) {
        var elem = $( this );
        var parentId = elem.closest("section", "flex-container")[0].id;
        var userLogin = Cookie.findLoggedUserToken();
        var movie = new Movie;
        movie.deleteMovie(parentId, userLogin)
            .then( function() {
                deleteMovieItem(parentId);    
            });
    });
    // the cliked img open the miviedetails page
    $("body").on("click",".img-movie",function(e){
        
      const id=$(this).closest(".flex-container")[0].id;
      window.location.href="movieDetails.html?movieId="+id;
     
    });
    
    //add movie button
    $("#add-movie").click(() => {
        window.location.href="addMovie.html";
    });
    
    // login button;    
    $('#login').click( () => {
        window.location.href = 'login.html';
    });
    
    //when clicked, redirects to home.html and deletes the cookies for logged user
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
    
    //this is visible only at small resolution; it toggles the menu.
    $(".toggle-icon").click( () => {
            $("#toggle-nav").toggleClass("nav-bar-show");
    });    
}

function getMovies() {
    var movies = new MoviesList(); 
    movies.getMovies()
        .then( () => {
            displayMovies(movies.model, "movieDisplay");
        })
        .catch(reason => {
                alert(reason.responseJSON.message);
        });
}

//first parameter contains the data, second one contains the location where we want the data to be written
function displayMovies(data, elementId) {
    
    var userToken = Cookie.findLoggedUserToken();
    var content = document.getElementById(elementId);
    
    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            
            var movieItem = document.createElement("section");
            movieItem.setAttribute('class', 'flex-container');
            movieItem.id = data[i].id;
            
            var divPosterTitle = document.createElement('div');
            divPosterTitle.className = 'poster-title';
                
            var divPoster = document.createElement('div');
            divPoster.className = 'poster';
            
            var moviePoster = document.createElement('img');
            
            if (data[i].poster == "N/A") {
                moviePoster.setAttribute('src', '../pages/resources/missing.jpg');    
            }
            else 
                moviePoster.setAttribute('src', data[i].poster);
                
            moviePoster.className = 'img-movie';
            
            // moviePoster.innerHTML = data[i].poster; 
            
            var divTitle = document.createElement('div');
            divTitle.className = 'title';
            
            var movieTitle = document.createElement('a');
            movieTitle.innerHTML = data[i].title;
            movieTitle.setAttribute('href', 'movieDetails.html?movieId=' + data[i].id);
            movieTitle.setAttribute('target', '_blank');
            
            var movieYear = document.createElement('p');
            movieYear.innerHTML = "<span>Year:</span> " + data[i].year;
                
            var movieimdbRating = document.createElement('p');
            movieimdbRating.innerHTML ='<span>Raiting:</span> '  + data[i].imdbRating + ' <i class="fa fa-star fa-2x" aria-hidden="true"></i>';
            
            var divButton = document.createElement('div');
            divButton.className = 'button-content';
            
            var editButton = document.createElement("button");
            editButton.setAttribute("edit","edit-movie");
            editButton.setAttribute('id', 'edit');
            editButton.innerHTML = "Edit";
            editButton.addEventListener("click", function(e) {
                window.location.href="editMovie.html?movieId=" + e.path[2].id;
            });
                
            var deleteButton = document.createElement('button');
            deleteButton.setAttribute("delete","delete-movie");
            deleteButton.setAttribute('id', 'delete');
            deleteButton.innerHTML = 'Delete';
            
            if (!userToken) {
                editButton.setAttribute('class', 'hide');
                deleteButton.setAttribute('class', 'hide');
                document.getElementById('user-name').setAttribute('class', 'hide');
            }
            
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
        }
    }
}

function deleteMovieItem(id){
    $(`#${id}`).remove();
}
 
function checkLoginStatus() {
    const userLogged = Cookie.findLoggedUserName(); 
    if(userLogged) {
        document.getElementById('user-name').innerHTML = "Hi, " + userLogged + "!";
    } 
}
 
function displayButtonForUserLogged() {
    const userLogin = Cookie.findLoggedUserToken();
    if (userLogin) {
        document.getElementById('login').style.display = "none";
        document.getElementById('register').style.display = "none";
    } 
    else {
        document.getElementById('add-movie').style.display = "none";
        document.getElementById('logout').style.display = "none";
    }
}

function searchMovies() {
    
    
             $('[type="search"]').keyup( function (){
              if(document.getElementById('filmNameOrType').value == ""){
                var resultsContainer = $('#resultsContainer');
                resultsContainer.empty();
               }
             });
             
              $(window).click(function() {
                var resultsContainer = $('#resultsContainer');
                 resultsContainer.empty();
               });
             
             $('#searchBtn').click(function(e){
                  e.preventDefault();
                   var movielist      = new MoviesList();
                   var searchBy   = $("#select option:selected").text();
                   var searchData = $("#filmNameOrType").val();
        
                     movielist.searchMovies(searchBy, searchData)
                     .then(() => {
                      displayResultsList(movielist, "resultsContainer");
                      })
                      .catch(reason => {
                      alert(reason.responseJSON.message);
                      });
                     });
    
             $('#filmNameOrType').keypress(function (e) {
                 if (e.which == 13 || event.keyCode == 13) {
                  e.preventDefault();
                    var movielist      = new MoviesList();
                    var searchBy   = $("#select option:selected").text();
                    var searchData = $("#filmNameOrType").val();
        
                     movielist.searchMovies(searchBy, searchData)
                     .then(() => {
                      displayResultsList(movielist, "resultsContainer");
                      })
                      .catch(reason => {
                      alert(reason.responseJSON.message);
                      });
                  }
             }); 
             
           
  
        function displayResultsList (movielist){
             if(movielist.model.length == 0){
              displayError();
             }
             else {
             
             var resultsContainer = $('#resultsContainer');
             $('#resultsContainer').removeClass("hiddenObj");
             
               
               for(var i=0; i<movielist.model.length; i++){
                       
                           
                           if(movielist.model[i].poster === 'N/A') {
                            movielist.model[i].poster = '../pages/resources/missing.jpg';
                            }
                       
                        var htmlMovieItem =  '<div class="movie-item">' +
                                             '<img class="moviePic" src=' +   movielist.model[i].poster + '>' +
                                             '<a href=movieDetails.html?movieId=' +  movielist.model[i].id + '>' +  movielist.model[i].title + '</a>' +
                                              '</div>';
                         resultsContainer.append(htmlMovieItem);
                        
                }
            }
        }
      
         
        function displayError (response){
              var resultsContainer = $('#resultsContainer');
              var errorMessageText =  '<div class="movie-item">' +
                                      '<p>' + " Sorry,  we couldn't find a match! " + '</p>' +
                                      '</div>';
              resultsContainer.append(errorMessageText);
              $('#resultsContainer').removeClass("hiddenObj");
        }
    
}

function displayAutors() {
    
    const blueAutors = document.getElementById('team');
    const autors = [{
        name: 'Pantea Andrei',
        facebook: 'https://www.facebook.com/pantea.andrei.102361',
        linkedin: 'https://www.linkedin.com/in/andrei-daniel-pantea/'
    },
    {
        name: 'Leoveanu Roxana',
        facebook: 'https://www.facebook.com/Deeea.Roxi',
        linkedin: 'https://www.linkedin.com/in/roxana-leoveanu-a34031140'
    },
    {
        name: 'Radan Olga',
        facebook: 'https://www.facebook.com/olga.radan',
        linkedin: 'https://www.linkedin.com/in/olga-radan/'
    },
    {
        name: 'Muntean Monica',
        facebook: 'https://www.facebook.com/monica.muntean13',
        linkedin: 'https://www.linkedin.com/in/monica-muntean-12569b42/'
    },
    {
        name: 'Bukos Stefan',
        facebook: 'https://www.facebook.com/adistef82',
        linkedin: 'https://www.linkedin.com/in/adistef/'
    },
    {
        name: 'Gergo Balogh',
        facebook: 'https://www.facebook.com/baloghgj',
        linkedin: 'https://www.linkedin.com/in/gergobalogh/'
    },
    {
        name: 'Asavinei Claudia',
        facebook: 'https://www.facebook.com/asavineiclaudia.maria',
        linkedin: 'https://www.linkedin.com/in/claudia-maria-asavinei/'
    },
    {
        name: 'Crisan Ancuta',
        facebook: 'https://www.facebook.com/crisan.anca93',
        linkedin: 'http://linkedin.com/in/crisan-ancuta-598b87103'
    }];
    
    

    for( let i = 0; i<autors.length; i++) {
        const blueAutor = document.createElement('section');
        
        blueAutor.className = 'autor';
        blueAutor.innerHTML = `<p>${autors[i].name}</p>
                                <span>
                                    <a href="${autors[i].facebook}" 
                                       target="_blank" 
                                       class="fa fa-facebook">
                                    </a>
                                    <a href="${autors[i].linkedin}" 
                                       target="_blank" 
                                       class="fa fa-linkedin">
                                    </a>
                                </span>`;

        blueAutors.appendChild(blueAutor);
    }
}