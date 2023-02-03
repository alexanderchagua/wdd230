const myGraphic = document.querySelector('#weather-icon')
const myDescription = document.querySelector('figcaption')
const myTemperature = document.querySelector('#current-temp')

<<<<<<< HEAD
=======

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-2.5480&lon=-106.6113&appid=fb48214618cad7e2b789beb97bb86188&q=Trier&units=imperial";;
>>>>>>> ad489f05847302fdcd2fb08364d925ee21b7863f


<<<<<<< HEAD
=======
  function DisplayResult(data){
    currentTemp.innerHTML = "${data.main.temp}&deg;F";
    const iconsrc = "https://openweathermap.org/img/w/${data.weather[0].icon}04n.png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",desc);
>>>>>>> ad489f05847302fdcd2fb08364d925ee21b7863f

const myUrl = "//api.openweathermap.org/data/2.5/weather?lat=-2.5480&lon=-106.6113&appid=fb48214618cad7e2b789beb97bb86188&q=Trier&units=imperial"

<<<<<<< HEAD
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
=======
  
>>>>>>> ad489f05847302fdcd2fb08364d925ee21b7863f
