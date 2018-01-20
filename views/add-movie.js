$(document).ready(onHtmlLoaded);
function onHtmlLoaded(){
    const addMovie=new Movie();
    const token="09pzCOnnXwyx8VlM-rriX2c5mGZssJ9z";
    const formContent=document.getElementById("addform");
    const button=document.getElementById("addm");
   

  
      button.addEventListener("click",function(validateAndSendData){
      validateAndSendData.preventDefault();
      const msg=document.getElementById("warningMsg");
      const successMsg=document.getElementById("successMsg")
     
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
    
    
      if(validate(movieData)){
        addMovie.addMovieItem(token,movieData)
       .then(submitedSuccess(successMsg,msg,formContent))
        }else{errors(msg)}
     
     });




    }
     function validate(movieData){
        return (movieData.title.val()!=="" && movieData.year.val()!=="" && !isNaN(movieData.year.val()) && movieData.runtime.val()!=="" && movieData.genre.val()!="" && movieData.language.val()!=="" && movieData.country.val()!=="" && movieData.poster.val()!=="" && movieData.imdbRating.val()!=="" && movieData.imdbVotes.val()!=="" &&  movieData.imdbId.val()!=="" && movieData.typem.val()!=="")?true:false};
   

    
   

  function submitedSuccess(successMsg,msg,formContent){ 
    formContent.reset();
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
        console.log(movieInputs)
        console.log(movieInputs[1].value)

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

// function getCookiesAsObject(){
//           const cookiesString=document.cookie;
//           const cookiesArray=cookiesString.split("; ");
//           console.log(cookiesArray);
//           const cookies={};
       
//           cookiesArray.forEach(function (e){
//           const cookie=e.split("=");
//           const value=cookie[0];
//           const key=cookie[1];
        
//           cookies[value]=key;
          
//           })
        
//           return cookies;
          
//       };
















