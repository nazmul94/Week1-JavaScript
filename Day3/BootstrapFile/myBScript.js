/*This is my JS for the car Luxury Pratice*/

var myManufacturer = document.getElementById('manufacturer');

myManufacturer.addEventListener('change', loadMyData);

var mySurvey = document.getElementById('survey');

survey.addEventListener('change', loadMyData);


function loadMyData()
{
    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
/*    console.log(surveyStored);
    console.log(manufacturerStored);*/
    

    var myRequest = new XMLHttpRequest; //

    myRequest.open("GET", "https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", true);

       
    myRequest.onload = function() 
    {
        if(myRequest.readyState == 4 && myRequest.status == 200)
        {
            var myData = JSON.parse(myRequest.responseText);
                
            var selected = document.getElementById('manufacturer').value;
            console.log(selected);
            
            if(selected == '')
            {
                // Set Null Manufacturer Details
                document.getElementById('manufacturerC').innerHTML = '';
                document.getElementById('modelC').innerHTML = '';
                document.getElementById('priceC').innerHTML = '';
                document.getElementById('descriptionC').innerHTML = '';
                document.getElementById('imgC').src = '';
                
                // Set Null Survey scores
                document.getElementById('mechanicalC').innerHTML = '';
                document.getElementById('powertrainC').innerHTML = '';
                document.getElementById('bodyC').innerHTML = '';
                document.getElementById('accessoriesC').innerHTML = '';       
            }
            else
            {
                //Set Null Manufacturer Details
                document.getElementById('manufacturerC').innerHTML = myData.data[selected].manufacturer;
                document.getElementById('modelC').innerHTML = myData.data[selected].model;
                document.getElementById('priceC').innerHTML = myData.data[selected].price;
                document.getElementById('descriptionC').innerHTML = myData.data[selected].wiki;
                
                //Set Survey Scores
                document.getElementById('mechanicalC').innerHTML = myData.data[selected].quality[0].rating;
                document.getElementById('powertrainC').innerHTML = myData.data[selected].quality[2].rating;
                document.getElementById('bodyC').innerHTML = myData.data[selected].quality[3].rating;
                document.getElementById('accessoriesC').innerHTML = myData.data[selected].quality[5].rating;               
                
                //Concatinate Image URL
                var partialUrl = myData.data[selected].img;
                var fullUrl = "https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/" + partialUrl;   
                document.getElementById('imgC').src = fullUrl;
            }
            
        }
    }

    myRequest.onerror = function() 
    {
        document.getElementById('messageAlert').innerHTML = "You arent connect online and cannot reach the server";
    }
        
    myRequest.send();
    
}




