class Validate {
    //returns true if username & password fields:  have more than 1 char; do not contain space char.
    //  false if at least one field breaks the rules
    static validateLogin (userName, password) {
        return ((userName.length > 1 && password.length > 1) &&
            (userName.indexOf(" ") == -1 && password.indexOf(" ") == -1)) ? true : false;
    };

    //false if any field breaks the rules ;)
    static validateUserRegistration(userName, password, confirmPassword) {
        return ((userName.length > 1 && 
                password.length > 1 && 
                confirmPassword.length > 1) &&
               (userName.indexOf(" ") == -1 && 
                password.indexOf(" ") == -1 && 
                confirmPassword.indexOf(" ") == -1) &&
               (password === confirmPassword)) ? true : false;
    };
}