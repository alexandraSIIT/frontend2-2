/* global $ */

function Movie() {
    this.id = "";
    this.poster = "";
    this.title = "";
    this.year = "";
    this.imdbRating = "";
}

Movie.prototype.getMovieItem = function(movieId) {
    var _this = this;
    var url = `https://ancient-caverns-16784.herokuapp.com/movies/` + this.id;  
    //console.log(url);
    
    return $.ajax(url, {
        method: 'GET',
        success: function(response) {
            
            _this.id = response.id;
            _this.poster = response.poster;
            _this.title = response.title;
            _this.year = response.year;
            _this.imdbRating = response.imdbRating;

                console.log(response);
        }
    });
};

Movie.prototype.addMovieItem=function(token,movieData){
    const movieUrl="https://ancient-caverns-16784.herokuapp.com";
    return $.ajax({
        url:movieUrl+"/movies",
        headers:{"X-Auth-Token":token},
        method:"POST",
        data:{
              Title:movieData.title.val(),
              Year:movieData.year.val(),
              Runtime:movieData.runtime.val(),
              Genre:movieData.genre.val(),
              Language:movieData.language.val(),
              Country:movieData.country.val(),
              Poster:movieData.poster.val(),
              imdbRating:movieData.imdbRating.val(),
              imdbVotes:movieData.imdbVotes.val(),
              imdbID:movieData.imdbId.val(),   
              Type:movieData.typem.val()
                    },
        success:function(response){
            console.log(response);
        },
        error:function(err){
       
        console.log("eroor status is: "+err.status+" that means "+err.responseJSON.message)
        },
        
    
        });
    }



Movie.prototype.deleteMovie = function(id) {
    
    console.log(id);
    var baseURL = 'https://ancient-caverns-16784.herokuapp.com';
    
   return $.ajax({
        url: baseURL + '/movies/' + id ,
        method: 'DELETE',
        headers: {
            'x-auth-token':'p8lcoMNsHryvEJswS2z5ZEsUAj_wC-c4'
        },
        
        success: function(response) {
            console.log(response);
   
        }
    });      
  }
    

















