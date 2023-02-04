const url =
	"http://127.0.0.1:5501/chamber/data/members.json";

const getMembers = async () => {
	let members = await jsonFetch(url);


	displayMembers(members);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.members;
}

const displayMembers = (members) => {
	const cards = document.querySelector("div.cards");
	cards.innerHTML = "";
   

	    members.forEach((member) => {
        let article = document.createElement("article")
        article.classList.add('grids1');
        article.innerHTML="";
        
		let card = document.createElement("section");
        card.id="newPara";
        let portrait = document.createElement("img");
        portrait.classList.add('imgem');
		let p= document.createElement("p");
        p.classList.add('names');
		let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("p")
        date.classList.add("dates");
	
		let place = document.createElement("a");
        place.classList.add('web');
		let num = document.createElement("p");
		num.classList.add("dates");

        place.setAttribute("href",member.website)
		portrait.setAttribute("src", member.imageurl);
		portrait.setAttribute(
			"alt",
			`${member.name} Company`
		);
		portrait.setAttribute("loading", "lazy");
		portrait.setAttribute("width", "340");
		portrait.setAttribute("height", "440");

		p.textContent = `${member.name} - ${member.adress}`;
		date.innerHTML = ` ${member.phoneNumbers}`;
		place.innerHTML = `${member.website}`;
		num.innerHTML = ` ${member.membershipLvl}`;
		
        card.appendChild(portrait);
		stats.appendChild(date);
		stats.appendChild(place);
		stats.appendChild(num);
		card.appendChild(p);
		card.appendChild(stats);
		article.appendChild(card)

		cards.appendChild(article);
	});
};

getMembers();

// buttons



document.querySelector("#nonus").addEventListener("click", () => {
	getMembers("nonus");
});

document.querySelector("#ten").addEventListener("click", () => {
	getMembers("ten");
});

document.querySelector("#childs").addEventListener("click", () => {
	getMembers("childs");
});

document.querySelector("#childl").addEventListener("click", () => {
	getMembers("childl");
});

document.querySelector("#old").addEventListener("click", () => {
	getMembers("old");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
	return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

const gridbutton = document.querySelector("#grids1");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grids1");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grids1");
}