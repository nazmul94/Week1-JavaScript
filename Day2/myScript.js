/*This is my script*/
var password = "nazmul";
var attemptCount = 0;

document.getElementById('enterWebsite').style.visibility = "hidden";

function submitEntry()
{
    var input = document.getElementById("userP").value;
    console.log(input);
    
    if(input === password)
        {
            document.getElementById('myMessage').innerHTML = "Password correct: <br />You have gained access to the secret website!";
            document.getElementById('enterWebsite').style.visibility = 'visible';
            
            console.log("Access Granted")
        }
    
    if(input != password && attemptCount < 3)
        {   
            if(input == '')
                {                    
                    var linkButton = document.getElementById('linkB').style.visibility = 'visible';
                    document.getElementById('myMessage').innerHTML = "Password missing: <br /><br /> Please enter a valid password";
                }
            else
                {
                    attemptCount++;
                    console.log(attemptCount);
                    var maxAttempt = 3;
                    switch (attemptCount)
                        {
                            case 1:
                                var linkButton = document.getElementById('linkB').style.visibility = 'visible';
                              
                                document.getElementById('myMessage').innerHTML = "Password incorrect: <br /><br /> You have entered an incorrect password " + (attemptCount) + " time(s)! <br /><br /> You have " +(maxAttempt - attemptCount) + " attempts left before you become blocked from this website. <br /><br /> Please enter a valid password."
                                break;
                                
                            case 2:
                                var linkButton = document.getElementById('linkB').style.visibility = 'visible';
                              
                                document.getElementById('myMessage').innerHTML = "Password incorrect: <br /><br /> You have entered an incorrect password " + (attemptCount) + " time(s)! <br /><br /> You have " +(maxAttempt - attemptCount) + " attempts left before you become blocked from this website. <br /><br /> Please enter a valid password."
                                break;
                                
                            default:
                                var linkButton = document.getElementById('linkB').style.visibility = 'visible';
                                
                                document.getElementById('myMessage').innerHTML = "Password incorrect: <br /><br /> You have entered an incorrect password " + (attemptCount) + "! <br /><br /> Unfortunately you are barred from gaining access to this site. <br /><br />Sorry for the inconvenience."
                                

                                document.getElementById('myButton').remove();
                                break;
                        }
                }
        }
}

document.getElementById("myButton").addEventListener("click", submitEntry, false);