$(document).ready (function (){
    
    const movieUrl = "https://ancient-caverns-16784.herokuapp.com";
    
    $('[name=filmNameOrType]').on('keyup', function(){
        let searchData = document.getElementById("filmNameOrType").value;
         let queryToSearch = document.getElementsByName("searchBy");
                 for (var i = 0, length = queryToSearch.length; i < length; i++) {
                  if(queryToSearch[i].selected == true){
                      var searchBy = queryToSearch[i].value;
                  }
    		    }
    
        $.ajax({
            url: movieUrl + "/movies?" +  searchBy + "=" + searchData,
            method: 'GET'
        }).then(dislayResultsList)
    });
    
    function dislayResultsList (response){
        const resultsContainer = $('#resultsContainer');
        for(var i=0; i<response.results.length; i++){
            let movieFound = response.results[i];
            movieFound.Id = response.results[i]._id;
            let htmlMovieItem =  '<div class="movie-item">' +
                                     '<img src=' + movieFound.Poster + '>' +
                                     '<a href=https://front-end-grupa2-monicamuntean.c9users.io/frontend2-2/pages/movieDetails.html?id=' + movieFound.Id + '>' + movieFound.Title + '</a>' +
                                '</div>';
        resultsContainer.append(htmlMovieItem);
        }
    
    };

    
    $('#checkBox').click( function() {
        console.log("click-->", $('#checkBox').is(':checked'))
        
        if($('#checkBox').is(':checked')) {
            $(".advancedSearch").show();
        } else {
            $(".advancedSearch").hide();
        }
    })
    
    $("#advancedSearchForm").submit( function(e) {
        let title = $("#title").val();
        let year = $("#year").val();
        let country = $("#country").val();
        let urlAS = "Title=" + title + "&Year=" + year + "&Country=" + country;
        
        $.ajax({
            url: movieUrl + "/movies?" +  urlAS,
            method: 'GET',
            success: function(response) {
                console.log(response);
            }
        })
         e.preventDefault();
    });
})