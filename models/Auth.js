/* global $*/
class Auth {
    // sends login info to backend and returns : token if user is found, or error if user does not exist
    static sendCredentials(userName, password) {
        const data = {
            username:userName,
            password:password
        };
        return $.ajax(Auth.logInUrl, {
            method:'POST',
            data
        });
    }

    //sends the token to backend for log out;
    static logOutUser(token) {
        return $.ajax(Auth.logOutUrl, {
            method:'GET',
            headers:{ 'X-Auth-Token': `${token}` }
        });
    }
}

Auth.logInUrl  = 'https://ancient-caverns-16784.herokuapp.com/auth/login';
Auth.logOutUrl = 'https://ancient-caverns-16784.herokuapp.com/auth/logout';

 $(document).ready(function() {
    
    function RegisterUser() {}

    // validation method
    RegisterUser.prototype.validate = function(userName, password) {
        $("#errorMsg").html("");

        var errors = false;

        if (!userName) {
            errors = true;
            $("#errorMsg").html("You must enter Username");
        }

        if (userName.length < 5) {
            errors = true;
            $("#errorMsg").html("Username must be at least 5 charachters");
        }

        if (!password) {
            errors = true;
            $("#errorMsg").html("You must enter Password");
        }

        if (password.length < 6) {
            errors = true;
            $("#errorMsg").html("Your password must be at least 6 charachters");
        }

        return !errors;
    };

    // send method
    RegisterUser.prototype.send = function(userName, password) {
        return $.ajax({
            url: "https://ancient-caverns-16784.herokuapp.com/auth/register",
            method: "POST",
            data: {
                username: userName,
                password: password
            },
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                $('#errorMsg').html(error);
            }
        });
    };

    // create instance
    var newUser = new RegisterUser();

    $("#submit").click(function(e) {
        var userName = $("#userName").val(),
            password = $("#password").val();

        if (newUser.validate(userName, password)) {
            newUser.send(userName, password);
        }
    });




})   