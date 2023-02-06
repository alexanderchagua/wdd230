

const url = "https://alexanderchagua.github.io/wdd230/index.json";


const getProphets = async () => {
	let data = await jsonFetch(url);


	displayProphets(data);
};



async function jsonFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data.week01;
    
  }
  




const displayProphets = (data) => {
    const week = data
    week.innerHTML = "";
      // Create elements to add to the div.cards element
      var contenido;
      members.forEach((member) => {
            var lis = document.createElement("li");
            var p = document.createElement("a");
           
            contenido = "week01:"+ member.week01;
            p.appendChild(document.createTextNode(contenido));
            document.querySelector("#lista-pelis").appendChild(lis).appendChild(p);
          })
    
      
      }
     
      getProphets();