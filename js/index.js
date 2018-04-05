
$(document).ready(function(){
 var apidata;
  var C = false;
  
  //Function to display celsius or f
  function displayTemp(F,C){
    //formula to calculate Fahrenheit to Celsisus
    if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
    //return Fahrenheit
    return Math.round(F) + '&deg; F';
  }
  
  //Function Render the weather information
  function render(data,C){
    var currentWeather = data.weather[0].description;
    var currentTemp = displayTemp(data.main.temp,C);
    var icon = data.weather[0].icon;
    
    $("#currentTemp").html(currentTemp);
    $("#currentWeather").html(currentWeather);
    
    var apiIcon = "http://openweathermap.org/img/w/" + icon + ".png";
    $("#currentTemp").prepend('<img src=' + apiIcon + '>' );
  }
  //Call the location   
  $.getJSON('https://freegeoip.net/json/').done(function(location) {
    $("#city").html(location.city);
    $("#province").html(location.region_name);
    $("#country").html(location.country_name);
   
    
  // console.log(location);
    //Declaring Variables for Longitude and latitude.
   /*Getting the weather data from OpenWeather and link it with the location*/ $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='+ location.latitude +'&lon='+ location.longitude +'&units=imperial&APPid=e36712d61477ff8be0a3a47834b620c8',function(data){
      apidata = data;
      //console.log(data) Sucess!!!
      //The button display the temperature in C/F
      $("#toogle").click(function(){
        C = !C
         render(data,C);
      })
      
      
    })              
    
})

  })


  

  
  
  
  

  
  
    
   
  
   //$(".p1 ").on('click',function(){
   // alert("w");
     
  
          
      
     
     
   
  //});

 
  
   
                                   
    

    
                      

// });
  //Calling the api