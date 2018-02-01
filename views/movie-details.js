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
 // login, logout buttons;    
    $('#login').click( () => {
        window.location.href = 'login.html';
    });
    
// append movies

    var movieDetails = new Movie();
    movieDetails.id = getMovieIdFromUrl();
   
    movieDetails.getMovieItem(movieDetails.id).then(displayMovie);
    
    function displayMovie() {
            var content=document.getElementById("details");
            var textContent = document.createElement("div");
            textContent.className = "about";
            var title=document.createElement("p");
            title.innerHTML="Title: " + movieDetails.title;
            title.id = "titleMovie";
            var year=document.createElement("p");
            year.innerHTML="<strong>Year:</strong> " + '<span>' + movieDetails.year + '</span>';
            var rated=document.createElement("p");
            rated.innerHTML="<strong>Rated:</strong> " + '<span>' + movieDetails.rated + '</span>';
            var released=document.createElement("p");
            released.innerHTML="<strong>Released:</strong> " + '<span>' + movieDetails.released + '</span>';
            var runtime=document.createElement("p");
            runtime.innerHTML="<strong>Runtime:</strong> " + '<span>' + movieDetails.runtime + '</span>';
            var genre=document.createElement("p");
            genre.innerHTML="<strong>Genre:</strong> " + '<span>' + movieDetails.genre + '</span>';
            var director=document.createElement("p");
            director.innerHTML="<strong>Director:</strong> " + '<span>' + movieDetails.director + '</span>';
            var writer=document.createElement("p");
            writer.innerHTML="<strong>Writer:</strong> " + '<span>' + movieDetails.writer + '</span>';
            var actors=document.createElement("p");
            actors.innerHTML="<strong>Actors:</strong> " + '<span>' + movieDetails.actors + '</span>';
            var plot=document.createElement("p");
            plot.innerHTML="<strong>Plot:</strong> " + '<span>' + movieDetails.plot + '</span>';
            var language=document.createElement("p");
            language.innerHTML="<strong>Language:</strong> " + '<span>' + movieDetails.language + '</span>';
            var country=document.createElement("p");
            country.innerHTML="<strong>Country:</strong> " + '<span>' + movieDetails.country + '</span>';
            var awards =document.createElement("p");
            awards.innerHTML="<strong>Awards:</strong> " + '<span>' + movieDetails.awards + '</span>';
            var posterContent = document.createElement("div");
            posterContent.className = "image";
            var poster = document.createElement("img");
            poster.setAttribute("src", movieDetails.poster);
            poster.id = "imgPoster"
            
            posterContent.appendChild(poster);
            textContent.appendChild(title);
            textContent.appendChild(year);
            textContent.appendChild(rated);
            textContent.appendChild(released);
            textContent.appendChild(runtime);
            textContent.appendChild(genre);
            textContent.appendChild(director);
            textContent.appendChild(writer);
            textContent.appendChild(actors);
            textContent.appendChild(plot);
            textContent.appendChild(language);
            textContent.appendChild(country);
            textContent.appendChild(awards);
            content.appendChild(posterContent);
            content.appendChild(textContent);
            
    }
    
    
}

