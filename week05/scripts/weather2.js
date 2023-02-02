const myTown= document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature')

const townName = "Trier"
const myKey = "437209d363a4387bb2f5dffcea58bbee"

const myUrl = "//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}"

fetch(myUrl)
    .then((response) => response.json())
    .then((data) => displayData(data));

function displayData(data){
    console.log(data)
    
}