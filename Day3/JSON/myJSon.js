// This is a pratice for JSON

/*var car = {
    "model": "Audi",
    "price": 25000,
    "engine": "Petrol"
}

var f1drivers = ["Lewis","Kimi", "Fernando"]

console.log(car.model);
console.log(f1drivers[2]);*/

/*var F1 = {  
   "data":[  
      {  
         "car":"Mercedes",
         "driver":"Lewis",
         "wins":2
      },
      {  
         "circuit":"Monaco",
         "pointsystem":[  
            {  
               "firstplace":25,
               "secondplace":18,
               "thirdplace":15
            }
         ],
         "teams":11
      }
   ]
}

console.log(F1.data[1].pointsystem[0].thirdplace);
*/

// Now we are starting with AJAX


var myRequest = new XMLHttpRequest; //

myRequest.onreadystatechange = function(){
    if(myRequest.readyState == 4 && myRequest.status == 200) {
        //console.log(myRequest.response);
    };
}

myRequest.open("GET", "https://raw.githubusercontent.com/SenchaArchitect/CarListings/master/CarListings/data/cars.json", true);

myRequest.onload = function() {
    
    var myData = JSON.parse(myRequest.responseText);
    
    console.log(myData);
}

myRequest.send();

console.log("test");
//console.log(myRequest);