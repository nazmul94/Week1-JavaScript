
var button = document.getElementById('myButton');
var click = button.addEventListener('click', calculate);

function calculate()
{   
    var speedInput = document.getElementById('speed').value;
    var consumptionInput = document.getElementById('consumption').value;
    var brakingDistance;
    var thinkingDistance;
    var stoppingDistance = 0.039*speedInput*speedInput;

    function changeToNull()
    {
        if(consumptionInput == null)
            document.getElementById('consumption').innerHTML = 0;
    }
    
    console.log(speedInput);
    if(speedInput < 10)
    {
        console.log("under 10");
    }
    else
    {
        console.log("too high");
    }
}
