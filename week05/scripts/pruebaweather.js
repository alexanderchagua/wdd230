let lon;
let lat;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon")
const  kelvon = 273.75

window.addEventListener("load",() => { 

    if(navigator.geolotacion){
            navigator.geolocation.getCurrentPosition((position) =>  {
                console.log(position);
                lon = position.coords.longitude;
                lat = position.coords.latitude;

                const casa = "fb48214618cad7e2b789beb97bb86188"


                const url_base = "http://api.openweathermap.org/data/2.5/weather?lat=${lat}&"+"lon=${lon}&appid=${api_id}";

                fetch(url_base)
                .then((response) =>{  
                    console.log("respuesta json");
                   
                    return response.json();
                } )
                .then((data) => {
                    console.log(data)

                    temperature.textContent =
                    Math.floor(data.main.temp - kelvin) + "°c";
                    summary.texContent= data.weather[0].description;
                    loc.textContent = data.name  + ","+ data.sys.country;

                });


            });
    }
});