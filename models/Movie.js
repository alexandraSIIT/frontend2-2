/* global $ */

function Movie() {
    this.id = "";
    this.poster = "";
    this.title = "";
    this.year = "";
    this.imdbRating = "";
    this.released = "";
    this.runtime = "";
    this.genre = "";
    this.director = "";
    this.writer = "";
    this.actors = "";
    this.plot = "";
    this.language = "";
    this.country = "";
    this.awards = "";
    this.imdbvotes = "";
    this.imdbId = "";
    this.typem = ""
}

Movie.prototype.getMovieItem = function(movieId) {
    var _this = this;
    var url = `https://ancient-caverns-16784.herokuapp.com/movies/` + this.id;  
    //console.log(url);
    
    return $.ajax(url, {
        method: 'GET',
        success: function(response) {
            
            _this.id = response._id;
            _this.poster = response.Poster;
            _this.title = response.Title;
            _this.year = response.Year;
            _this.imdbRating = response.imdbRating;
            _this.released = response.Released;
            _this.runtime = response.Runtime;
            _this.genre = response.Genre;
            _this.director = response.Director;
            _this.writer = response.Writer;
            _this.actors = response.Actors;
            _this.plot = response.Plot;
            _this.language = response.Language;
            _this.country = response.Country;
            _this.awards = response.Awards;
            _this.imdbvotes = response.imdbVotes;
            _this.imdbId = response.imdbID;
            _this.type = response.Type;

                console.log(response);
        }
    });
};


Movie.prototype.editMovie = function(id,movieData) {
    var baseURL = 'https://ancient-caverns-16784.herokuapp.com';
    return $.ajax({
       url: baseURL + '/movies/' + this.id,
       method: 'PUT',
       headers: {
           'x-auth-token':'p8lcoMNsHryvEJswS2z5ZEsUAj_wC-c4'
       },
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
       success: function(response) {
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
       
        
        },
        
    
        });
    }



Movie.prototype.deleteMovie = function(id, token) {
    
    console.log(id);
    var baseURL = 'https://ancient-caverns-16784.herokuapp.com';
    
   return $.ajax({
        url: baseURL + '/movies/' + id ,
        method: 'DELETE',
        headers: {
            'x-auth-token': token
        },
        
        success: function(response) {
            console.log(response);
   
        }
    });      
  }

  

















