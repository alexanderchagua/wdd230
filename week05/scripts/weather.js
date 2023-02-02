const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const mykey = "fb48214618cad7e2b789beb97bb86188";
const nameCity = "Trier"
const unit = "imperial"
const url = 'http://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${mykey}&units=${unit}';

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
    const iconsrc = "https://openweathermap.org/img/w/${data.weather[0].icon}10d.png";
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt",desc);

  }

  
