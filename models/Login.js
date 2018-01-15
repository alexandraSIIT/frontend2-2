class Login {
   
    sendCredentials(userName, password) {
        const data = {
            username:userName,
            password:password
        };
        return $.ajax(Login.url, {
            method:'POST',
            data
        });
    }
}

Login.url = 'https://ancient-caverns-16784.herokuapp.com/auth/login';

    

    