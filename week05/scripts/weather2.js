const myTown= document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature')

const townName = "Afton"
const myKey = 'fb48214618cad7e2b789beb97bb86188'

const myUrl = "//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}"

fetch(myUrl)
    .then((response) => response.json())
    .then((data) => displayData(data));

function displayData(data){
    console.log(data)
    myTown.innerHTML = data.name
    myGraphic.src="http://openweathermap.org/img/wn/$¨{data.weather[0].icon}02x.png"
    myGraphic.alt=data.weather[0].main
    myDescription.innerHTML= data.weather[0].description
    myTemperature.innerHTML= "${data.main.temp}&deg;F"
}