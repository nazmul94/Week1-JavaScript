/*This is my script*/

var password = "nazmul";
var i = 0;
var correctPassword = [];
var wrongPassword = [];

//event listener
document.getElementById("myButton").addEventListener("click", checkPassword, false);

//hidden button
document.getElementById('enterWebsite').style.visibility = "hidden";


function checkPassword()
{
    var input = document.getElementById("userP").value;
    console.log(input);
    
    if(input != password && input != '')
    {
        i++;
        
        switch (i)
        {
            case 1:
                var linkButton = document.getElementById("linkB").style.visibility = 'visible";
                document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WROND <br /> <br />" + (i) + " TIME(S), you are left with two more chances <br /><br />then you will be locked out of your account";
                
                var linkedButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
                wrongPassword.push(input);
                break;
            
            case 2:
                var linkButton = document.getElementById("linkB").style.visibility = "visible";
                document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WROND <br /> <br />" + (i) + " TIME(S), you are left with one more chance <br /><br />then you will be locked out of your account";
                
                var linkedButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
                wrongPassword.push(input);
                break;
                        
            default:
                var linkButton = document.getElementById("linkB").style.visibility = "visible";
                document.getElementById("myMessage").innerHTML = "You entered your PASSWORD WRONG <br /> <br />" + (i) + " TIME(S), you are now locked out of your account";
                
                var linkedButton = document.getElementById("linkB").firstElementChild.style.visibility = "hidden";
                
                wrongPassword.push(input);
                
                var submitP = document.getElementById("myButton");
                submitP.remove();
                
                document.getElementById("wrongMessages").innerHTML = "HERE ARE YOUR WRONG PASSWORDS: <br /><br />" + wrongPassword.toString().split(",").join("  |  ");
                
                break;
        }
    }
        
    else if (input == "")
    {

        document.getElementById("wrongMessages").innerHTML = "Sorry you didnt enter a password";
    }
    else 
    {
        document.getElementById("wrongMessages").innerHTML = "Great you have access";
    }
}
        

