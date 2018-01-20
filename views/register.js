document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
	console.log("DOM & script loaded");
	
	var userName =  document.forms['registerform']['userName'];
	var confirmPassword =  document.forms['registerform']['confirmPassword'];
	
}
