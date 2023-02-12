const mynamecity = document.querySelector("#name")
const myGraphic1 = document.querySelector('#weather-icon1')
const myDescription1 = document.querySelector('#ficaption1')
const myTemperature1 = document.querySelector('#current-temp1')
const myGraphic2 = document.querySelector('#weather-icon2')
const myDescription2 = document.querySelector('#ficaption2')
const myTemperature2 = document.querySelector('#current-temp2')
const myGraphic3 = document.querySelector('#weather-icon3')
const myDescription3 = document.querySelector('#ficaption3')
const myTemperature3 = document.querySelector('#current-temp3')
const myGraphic4 = document.querySelector('#weather-icon4')
const myDescription4 = document.querySelector('#ficaption4')
const myTemperature4 = document.querySelector('#current-temp4')


const myUrl2 = "//api.openweathermap.org/data/2.5/forecast?lat=-12.0432&lon=-77.0282&appid=fb48214618cad7e2b789beb97bb86188&q=Lima&units=imperial"



fetch(myUrl2)
    .then((response) => response.json())
    .then((data3) => displayData(data3));


   


function displayData(data3){
    console.log(data3)
    
    myDescription4.innerHTML = data3.list[3].weather[0].description;
    myDescription3.innerHTML = data3.list[2].weather[0].description;
    myDescription1.innerHTML = data3.list[0].weather[0].description;
    myDescription2.innerHTML = data3.list[1].weather[0].description;
    myTemperature1.innerHTML = data3.list[0].main.temp+"&deg;F";
    myTemperature2.innerHTML = data3.list[1].main.temp+"&deg;F";
    myTemperature3.innerHTML = data3.list[2].main.temp+"&deg;F";
    myTemperature4.innerHTML = data3.list[3].main.temp+"&deg;F";
    myGraphic1.src = "http://openweathermap.org/img/wn/03n@2x.png";
    myGraphic2.src = "http://openweathermap.org/img/wn/03n@2x.png";
    myGraphic3.src = "http://openweathermap.org/img/wn/04n@2x.png";
    myGraphic4.src = "http://openweathermap.org/img/wn/04n@2x.png";
    myGraphic3.alt = data3.weather[0].main;
   
    
  
   
    


}