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
    console.log(url);
    
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
















