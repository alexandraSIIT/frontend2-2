/* global Login $ */
$(document).ready( function() {
    $("#submitButton").click(function(){
        event.preventDefault();

        const userName     = $("#userName").val();
        const userPassword = $("#userPassword").val();

        const loginSession = new Login();

        //input fields should not be empty
        if (validateCredentials(userName, userPassword)) {
            loginSession.sendCredentials(userName, userPassword)
                .then(data => {
                    setCookie(userName, data.accessToken);
                    //more stuff here 
                })
                .catch(reason => {console.log(reason.responseText)});
        }
        else {alert("fields must be filled!");}
    });
});

//return true if username & password fields are filled or false if at least one is not filled
function validateCredentials(userName, password) {
  return (userName !== "" && password !== "") ? true : false;
}

function setCookie(userName, token) {
    document.cookie = `loggedUser=${userName}`;
    document.cookie = `loggedUserToken=${token}`;
}