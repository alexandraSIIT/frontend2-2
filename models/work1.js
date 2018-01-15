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
    const button=document.getElementById("addm");


    button.addEventListener("click",function(validateAndSendData){
        validateAndSendData.preventDefault();
   
            if(title.value==""){
                alert("You must enter a value in the Title field !!!!")
                return false
            }else if(year.value==""){
                alert("You must enter a value in the Year field !!!!")
                return false
            }else if(runtime.value==""){
                alert("You must enter a value in the Runtime field !!!!")
                return false
            }else if(genre.value==""){
                alert("You must enter a value in the Genre field !!!!")
                return false
            }else if(language.value==""){
                alert("You must enter a value in the Language field !!!!")
                return false
            }else if(country.value==""){
                alert("You must enter a value in the Country field !!!!")
                return false
            }else if(poster.value==""){
                alert("You must enter a value in the Poster field !!!!")
                return false
            }else if(imdbRating.value==""){
                alert("You must enter a value in the imdbRating field !!!!")
                return false
            }else if(imdbVotes.value==""){
                alert("You must enter a value in the imdbVotes field !!!!")
                return false
            }else if(imdbId.value==""){
                alert("You must enter a value in the imdbId field !!!!")
                return false
            }else if(typem.value==""){
                alert("You must enter a value in the Type field !!!!")
                return false
            }
        
        

            else{
                const token="09pzCOnnXwyx8VlM-rriX2c5mGZssJ9z"
                
                    $.ajax({
                        url:movieUrl+"/movies",
                        headers:{"X-Auth-Token":token},
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
                       
                        console.log("eroor status is: "+err.status+" that means "+err.responseJSON.message)
                        },
                        
                    
                        });
                
                
                      
                         formContent.reset();

                         
            }
        
            
    })

    $.ajax({
        url:movieUrl+"/movies/5a5b891876eeb7001fb2ab5f",
        method:"GET",
        success:function(response){
        console.log(response);
         },
        error:function(err){
            console.log(err)
        } 
        })
   
    }
    
    

    



