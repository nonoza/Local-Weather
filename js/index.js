
$(document).ready(function(){
 var apidata;
  var C = false;
  //Function Render the weather information
  function render(data,C){
    var currentWeather = data.weather[0].description;
    var currentTemp = displayTemp(data.main.temp,C);
    var icon = data.weather[0].icon;
    
    $("#currentTemp").html(currentTemp);
    $("#currentWeather").html(currentWeather);
    
    var apiIcon = "http://openweathermap.org/img/w/01d.png";
    $("#currentTemp").prepend('<img src=' + apiIcon + '>' );
  }
  //Call the location   
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=-26.195246&lon=28.034088&appid=e36712d61477ff8be0a3a47834b620c8').done(function(location) {
    $("#city").html(location.name);
    $("#temp").html(location.main.temp + '&deg;C');
    $("#country").html(location.weather[0].description);
   
    
  // console.log(location);
    //Declaring Variables for Longitude and latitude.
             
    
})

  })


  

  
  
  
  

  
  
    
   
  
   //$(".p1 ").on('click',function(){
   // alert("w");
     
  
          
      
     
     
   
  //});

 
  
   
                                   
    

    
                      

// });
  //Calling the api
