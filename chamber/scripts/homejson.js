const url =
	"http://127.0.0.1:5501/chamber/data/members.json";

const getMembers = async () => {
	let members = await jsonFetch(url);


	displayMembers(members);
};

async function jsonFetch(url) {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data)
	return data.members;
}

const displayMembers = (members) => {
	const cards = document.querySelector("#spotlight");
	cards.innerHTML = "";
   

	    members.forEach((member) => {
        
        
		let card = document.createElement("section");
        card.classList.add('sectioncard');
        let portrait = document.createElement("img");
        portrait.classList.add('imgem');
		let p2 = document.createElement("p")
		p2.classList.add("spt");

		let stats = document.createElement("div");
		stats.classList.add("stats");
		let date = document.createElement("h3")
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
		p2.textContent = member.spotlight;
		date.innerHTML = ` ${member.phoneNumbers}`;
		place.innerHTML = `${member.website}`;
		num.innerHTML = ` ${member.membershipLvl}`;
		
        card.appendChild(portrait);
		stats.appendChild(date);
		stats.appendChild(p2)
		stats.appendChild(place);
		stats.appendChild(num);
		card.appendChild(stats);
		

		cards.appendChild(card);
	});
};

getMembers();

// buttons