const myGraphic = document.querySelector('#weather-icon')
const myDescription = document.querySelector('figcaption')
const myTemperature = document.querySelector('#current-temp')





const myUrl = "//api.openweathermap.org/data/2.5/weather?lat=-12.0291&lon=-76.9982&appid=fb48214618cad7e2b789beb97bb86188&q=Lima&units=imperial"


fetch(myUrl)
    .then((response) => response.json())
    .then((data) => displayData(data));

function displayData(data){
    console.log(data)
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = data.main.temp+"&deg;F"
    myGraphic.src = "http://openweathermap.org/img/wn/03d@2x.png"
    myGraphic.alt = data.weather[0].main
   
    
}


