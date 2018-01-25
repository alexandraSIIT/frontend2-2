/* global $ Movie displayMovie*/
$(document).ready( () => {
    
    $("#submitSearch").click( (event) => {
        event.preventDefault();
        
        const MovieItem   = new Movie;
        const selection   = $( "#select option:selected" ).text();
        const queryString = $( "#queryString").val();
        
        MovieItem.searchMovie(selection, queryString)
            .then( data => {
               displayMovie(data);
            })
            .catch(reason => {
                alert(reason.responseJSON.message);
            });
    });
    
});