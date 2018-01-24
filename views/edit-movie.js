/* global $ Movie */

$(document).ready(onHtmlLoaded);

     function onHtmlLoaded() {
     const togglebtn=$(".toggle-icon")
         togglebtn.on("click", function(){
            $("#toggle-nav").toggleClass("nav-bar-show")
    
          })

     const movieDetails = new Movie();
     const token="09pzCOnnXwyx8VlM-rriX2c5mGZssJ9z";
     const formContent=document.getElementById("editform");
     const button=document.getElementById("editm");

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

   //Display article to edit

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



     //Edit button functionality

    button.addEventListener("click",function(validateAndSendData){
        validateAndSendData.preventDefault();
        const msg=document.getElementById("warningMsg");
        const successMsg=document.getElementById("successMsg");
        let token=Cookie.findLoggedUserToken();
    
        if(validate(movieData)){
            movieDetails.editMovie(movieDetails.id,movieData)
        .then(submitedSuccess(successMsg,msg))
            }else{errors(msg)}
        


        })


}
    function validate(movieData){
        return (movieData.title.val()!=="" && movieData.year.val()!=="" && !isNaN(movieData.year.val()) && movieData.runtime.val()!=="" && movieData.genre.val()!="" && movieData.language.val()!=="" && movieData.country.val()!=="" && movieData.poster.val()!=="" && movieData.imdbRating.val()!=="" && movieData.imdbVotes.val()!=="" &&  movieData.imdbId.val()!=="" && movieData.typem.val()!=="")?true:false};

    function submitedSuccess(successMsg,msg,formContent){ 

        successMsg.style.display="block";
        msg.innerHTML="";
        setBorders();


        setTimeout(function(){
        successMsg.style.display="none";
        },3000)
     };


    function errors(msg){
        const movieInputs= $(".formimput")
        movieInputs.each(function(i){

        if(this.value==""){
        msg.innerHTML="There was a problem with your submission. Please fill in the "+this.id+" input";
        $(this).addClass("errors");
        return false}
        else{$(this).removeClass("errors");msg.innerHTML=""}
        //Year input
        if(isNaN(movieInputs[1].value)){
        msg.innerHTML="There was a problem with your submission. Expected a number in Year field"; 
        $(movieInputs[1]).addClass("errors")
            return false
        }else{$(movieInputs[1]).removeClass("errors");msg.innerHTML=""}

        })

     }
 


    function setBorders(){
        $(":input").removeClass("errors")
        }

    function getMovieIdFromUrl() {
        const  url = window.location.search.substring(1).split('=');
                    
        for(var i = 0; i < url.length; i++) {
            if (url[0]=== "movieId") {
            return url[1];
                    }
                } 
        }



