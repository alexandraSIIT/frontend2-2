/* global $*/
function RegisterUser() {}
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
