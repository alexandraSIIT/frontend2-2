
 $(document).ready(onHtmlLoaded);
function onHtmlLoaded(){

        //  function for toggle nav-bar
       const togglebtn=$(".toggle-icon")
           togglebtn.on("click", function(){
           $("#toggle-nav").toggleClass("nav-bar-show")
   
           }) 
       const addMovie=new Movie();
       let token= Cookie.findLoggedUserToken();
       const formContent=document.getElementById("addform");
       const button=document.getElementById("addm");
   

  
       button.addEventListener("click",function(validateAndSendData){
         validateAndSendData.preventDefault();
      
         
         const erorMsg=document.getElementById("warningMsg");
        
        
     
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
         
      
         function validate(){
             let errors=false
             erorMsg.innerHTML=""
             if(movieData.title.val()==""){
                    movieData.title.addClass("errors")
                    erorMsg.innerHTML+=" Title input, "
                    errors=true
             }
             else{
                 movieData.title.removeClass("errors")
             }
             
             if(movieData.year.val()==""){
                    movieData.year.addClass("errors")
                    erorMsg.innerHTML+=" Year input, "
                    errors=true 
             }
             
             else{
                 movieData.year.removeClass("errors")
             }
             
             if(movieData.runtime.val()==""){
                    movieData.runtime.addClass("errors")
                    erorMsg.innerHTML+=" Runtime input, "
                    errors=true
             }
             
             else{
                 movieData.runtime.removeClass("errors")
             }
             
             if(movieData.genre.val()==""){
                    movieData.genre.addClass("errors")
                    erorMsg.innerHTML+=" Genre input, "
                    errors=true
             }
             else{
                 movieData.genre.removeClass("errors")
             }
               
             if(movieData.poster.val()==""){
                    movieData.poster.addClass("errors")
                    erorMsg.innerHTML+=" Poster input, "
                    errors=true
             }
             else{
                 movieData.poster.removeClass("errors")
             }
             
            if(movieData.imdbRating.val()==""){
                    movieData.imdbRating.addClass("errors")
                    erorMsg.innerHTML+=" Rating input, "
                    errors=true
             }
             else{
                 movieData.imdbRating.removeClass("errors")
             }
             
           
             return !errors
                 
            }
            
       
      
        

        if(validate()){
            addMovie.addMovieItem(token,movieData)
                .then(data=>{ 
                      formContent.reset();
                      displayAndRemoveSuccesMsg()
                      erorMsg.innerHTML="";
                      
                 }).catch(reason=>erorMsg.innerHTML="There was a problem with your submition,you do not have permition to acces this server.Please login!!!")
         }
         });

}


      function displayAndRemoveSuccesMsg(){
        
         const successMsg=document.getElementById("successMsg");
               successMsg.style.display="block"
         setTimeout(function(){
                      successMsg.style.display="none";
                      },2000)
        }



    // function resetBorders(){
    //      $(":input").removeClass("errors")
    //      }

















