/*This is my javaScript code for the password check*/

var access = "manuel";

document.getElementById("myButton").addEventListener("click", checkPassword, false);

function checkPassword() {
    
    var userPassword = document.getElementById("userP").value.toLowerCase();
    
    if (userPassword === access) {
        
        alert("Yes I am in!!");
    } else {
        
        alert("Sorry not working!!!");
    }
    
    console.log(userPassword);
}




