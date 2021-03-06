/* global $*/
class Auth {
    // sends login info to backend and returns : token if user is found, or error if user does not exist
    static logInUser(userName, password) {
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
