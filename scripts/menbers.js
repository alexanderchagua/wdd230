let weekselement = ""; 

ocument.getElementById("weeks")

const url =
	"https://alexanderchagua.github.io/wdd230/index.json";


async function getdates(url){
	const response = await fetch(url);

	if(response.ok){
		dates = await response.json();

		console.log(dates);
		for(let i=0; i<dates.length; i++){
			weekselement += "<li>${dates}[i].week01} </li>"

	
	}
}}

document.getElementById("weeks").innerHTML = weekselement




