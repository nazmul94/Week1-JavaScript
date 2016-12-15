/*This is my script*/
var password = "nazmul";

function submitEntry()
{
    var input = document.getElementById("userP").value;
    console.log(input);
    if(input === password)
        {
            alert("Password correct: you have gained access to the secret ");
        }
    
    if(input != password)
        {
            if(input == null)
                {
                    alert("Password missing: please enter the password");
                }
            else
                {
                    alert("Password incorrect: please provide a valid password");
                }
        }
}

document.getElementById("myButton").addEventListener("click", submitEntry);