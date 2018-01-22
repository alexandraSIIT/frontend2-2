/* global $ Movie */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {

const movieDetails = new Movie();
const token="09pzCOnnXwyx8VlM-rriX2c5mGZssJ9z";
const formContent=document.getElementById("editform");
const button=document.getElementById("editm");

movieDetails.id = getMovieIdFromUrl();
 movieDetails.getMovieItem().then(displayArticleToEdit);

function displayArticleToEdit(){
    movieData.title.val(movieDetails.title);
    movieData.year.val(movieDetails.year);
    movieData.runtime.val(movieDetails.runtime);
    movieData.genre.val(movieDetails.genre);
    movieData.language.val(movieDetails.language);
    movieData.country.val(movieDetails.country);
    movieData.poster.val(movieDetails.poster);
    movieData.imdbRating.val(movieDetails.imdbRating);
    movieData.imdbVotes.val(movieDetails.imdbvotes);
    movieData.imdbId.val(movieDetails.imdbId);
    movieData.typem.val(movieDetails.type);
    
  
}

    

const movieData={
    title:$("#title"),
    year:$("#year"),
    runtime:$("#runtime"),
    genre:$("#genre"),
    language:$("#language"),
    country:$("#country"),
    poster:$("#poster"),
    imdbRating:$("#imdbrating"),
    imdbVotes:$("#imdbvotes"),
    imdbId:$("#imdbid"),
    typem:$("#typem")
}
 



    
}

function getMovieIdFromUrl() {
    var url = window.location.search.substring(1).split('=');
                
    for(var i = 0; i < url.length; i++) {
        if (url[0]=== "movieId") {
        return url[1];
                }
            } 
    }



