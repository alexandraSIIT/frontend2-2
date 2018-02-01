/* global $ Movie  Cookie*/

$(document).ready(onHtmlLoaded);

    function onHtmlLoaded() {
    const togglebtn=$(".toggle-icon");
         togglebtn.on("click", function(){
            $("#toggle-nav").toggleClass("nav-bar-show");
         });

    const movieDetails = new Movie();
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
    };

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
        const erorMsg=document.getElementById("warningMsg");
        const successMsg=document.getElementById("successMsg");
        let token=Cookie.findLoggedUserToken();
    
        if(validate(movieData,erorMsg)){
            movieDetails.editMovie(movieDetails.id,movieData,token)
            .then(data=>{ 
                handelSuccesMsg(successMsg);
                returnToHomePage();
             })
            .catch(reason=>{
                handleBadRequest(reason,erorMsg);
            });
        } 
    });

}
     function validate(movieData,erorMsg){
         let errors=false
             erorMsg.innerHTML=""
             if(movieData.title.val()==""){
                    movieData.title.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                    movieData.title.removeClass("errors")
             }
             
             if(movieData.year.val()==""){
                    movieData.year.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true 
             }
             
             else{
                     movieData.year.removeClass("errors")
             }
             
             if(movieData.runtime.val()==""){
                    movieData.runtime.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             
             else{
                     movieData.runtime.removeClass("errors")
             }
             
             if(movieData.genre.val()==""){
                    movieData.genre.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.genre.removeClass("errors")
             }
             
              if(movieData.language.val()==""){
                    movieData.language.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.language.removeClass("errors")
             }
             
              if(movieData.country.val()==""){
                    movieData.country.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.country.removeClass("errors")
             }
             
             if(movieData.poster.val()==""){
                    movieData.poster.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                    movieData.poster.removeClass("errors")
             }
             
            if(movieData.imdbRating.val()==""){
                    movieData.imdbRating.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                    movieData.imdbRating.removeClass("errors")
             }
             
               if(movieData.imdbVotes.val()==""){
                    movieData.imdbVotes.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.imdbVotes.removeClass("errors")
             }
             
               if(movieData.imdbId.val()==""){
                    movieData.imdbId.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.imdbId.removeClass("errors")
             }
             
               if(movieData.typem.val()==""){
                    movieData.typem.addClass("errors")
                    erorMsg.innerHTML="Pleas fill in the highlight imputs"
                    errors=true
             }
             else{
                     movieData.typem.removeClass("errors")
             }
           
             return !errors
                 
        
        
        
        
        
        
    }   
     function handelSuccesMsg(successMsg){
               successMsg.style.display="block";
           
        }
     function returnToHomePage(){
              setTimeout(function(){
                      window.location.href = 'home.html'
                       },2000)
     }
     function getMovieIdFromUrl() {
                const  url = window.location.search.substring(1).split('=');
                            
                for(var i = 0; i < url.length; i++) {
                    if (url[0]=== "movieId") {
                    return url[1];
                            }
                        } 
        }
     function handleBadRequest(reason,erorMsg){
         if(reason.status==400){
             erorMsg.innerHTML=reason.responseJSON.message;
         }
         
     }


//erorMsg.innerHTML="There was a problem with your submission,you do not have permition to acces this server.Please login!!!"
