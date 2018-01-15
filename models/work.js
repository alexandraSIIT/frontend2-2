$(document).ready(onHtmlLoaded);
function onHtmlLoaded(){
    const movieUrl="https://ancient-caverns-16784.herokuapp.com"
    const moreMovies="?take=10&skip=0" 
    const formContent=document.getElementById("addform")
    let title=document.getElementById("title")
    let year=document.getElementById("year")
    let runtime=document.getElementById("runtime")
    let genre=document.getElementById("genre")
    let language=document.getElementById("language")
    let country=document.getElementById("country")
    let poster=document.getElementById("poster")
    let imdbRating=document.getElementById("imdbrating")
    let imdbVotes=document.getElementById("imdbvotes")
    let imdbId=document.getElementById("imdbid")
    let typem=document.getElementById("typem")
   //?Title=star&Genre=Action
    // fetch(movieUrl)
    // .then(function(response){
    //     return response.json();
    // }).then(function(response){
    //     console.log(response);
    // })
    // formContent.addEventListener("focus",
    // function validation(e){
    //     e.preventDefault();
    //     const allimputs=document.querySelectorAll("[type=text]")
    //     console.log(allimputs);
    //     for (var i=0;i<allimputs.length;i++){
    //         console.log(allimputs[i].value)
    //         if(allimputs[i].value.length<=0){
    //             alert("Please fill the "+allimputs[i].id.toLocaleUpperCase()+" field with some value")
    //             return false;
    //         }
    //     }
    //     formContent.reset();
    // }
    // );
   

    const button=document.getElementById("addm");
    addm.addEventListener("click",function(event){   
        event.preventDefault() ;
        const allimputs=document.querySelectorAll("[type=text]")
        for (var i=0;i<allimputs.length;i++){
                    console.log(allimputs[i].value)
                    if(allimputs[i].value.length<=0){
                        alert("Please fill the "+allimputs[i].id.toLocaleUpperCase()+" field with some value")
                        return false;
                    }else{
       
        $.ajax({
        url:movieUrl+"/movies",
        method:"GET",
        success:function(response){
        console.log(response.results);
         },
        error:function(err){
            console.log(err)
        } 
        })
        var token = "Basic cmFkYW4gb2xnYTphbGJhc3RyZWE=";

        
    $.ajax({
        url:movieUrl+"/movies",
        headers:{"X-Auth-Token":"Basic cmFkYW4gb2xnYTphbGJhc3RyZWE="},
        method:"POST",

        //headers:new Headers(),
        data:{
            Title:title.value,
            Year:year.value,
            Runtime:runtime.value,
            Genre:genre.value,
            Language:language.value,
            Country:country.value,
            Poster:poster.value,
            imdbRating:imdbRating.value,
            imdbVotes:imdbVotes.value,
            imdbID:imdbId.value,   
            Type:typem.value
        },
        success:function(response){
            console.log(response);
            
        },
        error:function(err){
        //console.log(err)
        console.log("eroor status is: "+err.status+" that means "+err.responseJSON.message)
        },
        //beforeSend: setHeader
    
        })
    }
        //  function setHeader(xhr) {
        
        //   xhr.setRequestHeader('X-Auth-Token', token);
        //  }
        formContent.reset();
    
    )
  

}
