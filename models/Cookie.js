/* global $ Auth*/
class Cookie {

    static setCookie(userName, token) {
        document.cookie = `loggedUser=${userName}`;
        document.cookie = `loggedUserToken=${token}`;
    }
    
    static findLoggedUserToken() {
        const match = document.cookie.match(new RegExp('loggedUserToken=([^;]+)'));
        if (match) return match[1];
    }

    static deleteTokenCookie() {
        document.cookie = 'loggedUserToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';   
        document.cookie = 'loggedUser=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    static findLoggeedUserName() {
    const match = document.cookie.match(new RegExp('loggedUser=([^;]+)'));
        if (match) return match[1];   
    }
}