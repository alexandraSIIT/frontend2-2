class Cookie {

    static setCookie(userName, token) {
        document.cookie = `loggedUser=${userName}`;
        document.cookie = `loggedUserToken=${token}`;
    }

    static getCookies() {
        return document.cookie;
    }

    static deleteTokenCookie(token) {
        document.cookie = token + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}