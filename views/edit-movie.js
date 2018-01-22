/* global $ Movie */

$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {

const movieDetails = new Movie();
const token="09pzCOnnXwyx8VlM-rriX2c5mGZssJ9z";
const formContent=document.getElementById("editform");
const button=document.getElementById("editm");

movieDetails.id = getMovieIdFromUrl();
movieDetails.getMovieItem().then(displayArticleToEdit())

function displayArticleToEdit(){
    
    console.log(movieDetails)
    // movieData.title.val()=movieDetails.title;
    
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



