/*global $ Movie Cookie Auth*/
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
       const addButton=document.getElementById("addm");
       const homeButton=document.getElementById("home")
       const logoutButton=document.getElementById("logout")
         //Return to home page
         homeButton.addEventListener("click",function() {
           window.location.href = 'home.html'
           
          })
         //Log out functionaliti
         logoutButton.addEventListener("click",function() {
        //first we check to see if the user is actualy logged
          const isUserLogged = Cookie.findLoggedUserToken();        
        
                if (isUserLogged) {
                    Auth.logOutUser(isUserLogged)
                        .then( () => {
                            Cookie.deleteTokenCookie();
                            window.close();
                        })
                        .catch(reason => {console.log(reason)});
                }
                else {
                    alert('You are not logged in');
                }
         });
             
    
   
         //add movie functionality
         addButton.addEventListener("click",function(validateAndSendData){
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
       
        if(validate(movieData,erorMsg)){
            addMovie.addMovieItem(token,movieData)
                .then(data=>{ 
                      formContent.reset();
                      displayAndRemoveSuccesMsg()
                      resetErrorMsg(erorMsg)
                      
                      
                 })
                 .catch(reason=>erorMsg.innerHTML="There was a problem with your submition,you do not have permition to acces this server.Please login!!!")
                 }
         });

}   
    function validate(movieData,erorMsg){
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
    function displayAndRemoveSuccesMsg(){
        
         const successMsg=document.getElementById("successMsg");
               successMsg.style.display="block"
               
               setTimeout(function(){
                      successMsg.style.display="none";
                      },2000)
        }
    function resetErrorMsg(erorMsg){
             erorMsg.innerHTML="";
    }



  
















