const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=-2.5480&lon=-106.6113&appid=fb48214618cad7e2b789beb97bb86188&q=Trier&units=imperial";;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function DisplayResult(data){
    currentTemp.innerHTML = "${data.main.temp}&deg;F";
    const iconsrc = "https://openweathermap.org/img/w/${data.weather[0].icon}04n.png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",desc);

  }

  
