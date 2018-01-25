/* global $ Movie */

function MoviesList() {
    this.model = [];
}

MoviesList.prototype.getMovies = function() {
    var _this = this;
    return $.ajax('https://ancient-caverns-16784.herokuapp.com' + '/movies' , {
        method: 'GET',
        success: function(response) {
            
            for(var i = 0; i < response.results.length; i++) {
                var movie = new Movie();
                    
                movie.id = response.results[i]._id;
                movie.poster = response.results[i].Poster;
                movie.title = response.results[i].Title;
                movie.year = response.results[i].Year;
                movie.imdbRating = response.results[i].imdbRating;
                
                _this.model.push(movie);
            
            }
        }
    });
};

MoviesList.prototype.searchMovies = function(selection, queryString) {
    var _this = this;
    var url = 'https://ancient-caverns-16784.herokuapp.com/movies';
    
    return $.ajax({
        url: `${url}?${selection}=${queryString}`,
        method: 'GET',
        success: (response) => {
            for (var i = 0; i < response.results.length; i++) {
                var movie = new Movie();    
                movie.id = response.results[i]._id;
                movie.poster = response.results[i].Poster;
                movie.title = response.results[i].Title;
                movie.year = response.results[i].Year;
                movie.imdbRating = response.results[i].imdbRating;
                _this.model.push(movie);
            }
        }
    });
    
    
    
    
    // return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies', {
    //     method: 'GET',
    //     success: function(response) {
            
    //         for(var i = 0; i < response.results.length; i++) {
    //             var movie = new Movie();
                    
    //             movie.id = response.results[i]._id;
    //             movie.poster = response.results[i].Poster;
    //             movie.title = response.results[i].Title;
    //             movie.year = response.results[i].Year;
    //             movie.imdbRating = response.results[i].imdbRating;
                
    //             _this.model.push(movie);
            
    //         }
    //     }
    // });
};

// Movie.prototype.searchMovie = function(selection, queryString) {
    
//     const url = 'https://ancient-caverns-16784.herokuapp.com/movies';
    
//     return $.ajax({
//         url: `${url}?${selection}=${queryString}`,
//         method: 'GET'
//     });
// };