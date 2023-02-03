const myGraphic = document.querySelector('#weather-icon')
const myDescription = document.querySelector('figcaption')
const myTemperature = document.querySelector('#current-temp')

const myUrl = "//api.openweathermap.org/data/2.5/weather?lat=-2.5480&lon=-106.6113&appid=fb48214618cad7e2b789beb97bb86188&q=Trier&units=imperial"

fetch(myUrl)
    .then((response) => response.json())
    .then((data) => displayData(data));

function displayData(data){
    console.log(data)
    myGraphic.src = "http://openweathermap.org/img/wn/04d@2x.png"
    myGraphic.alt = data.weather[0].main
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = data.main.temp+"&deg;F"
}
