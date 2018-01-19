/* global $ Cookie Auth Validate */
$(document).ready( function() {
    $("#submitButton").click( function(){
        event.preventDefault();

        const userName     = $("#userName").val(),
              userPassword = $("#userPassword").val();

        //input fields should not be empty
        if (Validate.validateLogin(userName, userPassword)) {
            Auth.logInUser(userName, userPassword)
                .then(data => {
                    Cookie.setCookie(userName, data.accessToken);
                    window.location.href = 'home.html'; 
                })
                .catch(reason => {appendError(reason.responseJSON.message)}); 
        }       
        else {
            appendError('Login Error');
        }
    });
});


function appendError(errorText) {
    
    const errorElement = document.getElementById("error");
    
    if (!errorElement) {
        const newError = document.createElement('p');
        newError.setAttribute('id', 'error');
        newError.innerHTML = errorText;
        document.getElementById('root').appendChild(newError);
    }
    
    else {
        errorElement.innerHTML = errorText;    
    }
   
}