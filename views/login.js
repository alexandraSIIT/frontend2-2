/* global Login $ */
$(document).ready( function() {
    $("#submitButton").click(function(){
        event.preventDefault();

        const userName     = $("#userName").val();
        const userPassword = $("#userPassword").val();

        //input fields should not be empty
        if (Validate.validateLogin(userName, userPassword)) {
            Auth.sendCredentials(userName, userPassword)
                .then(data => {
                    Cookie.setCookie(userName, data.accessToken);
                    window.location.href = 'home.html'; 
                })
                .catch(reason => {alert(reason.responseText)}); //write some message in page instead of alert
        }       
        else {
            alert("Login Error!");
            //write some message in page instead of alert
        }
    });
});