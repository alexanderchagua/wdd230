

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
	
	const displaypata = (members) => {
		

		const eventname = document.querySelector("#eventspt")
		const eventspt = document.querySelector("#imagenevent")
		const eventphone= document.querySelector("#eventphone")
		const eventweb = document.querySelector("#eventweb")
		


		members.forEach((member) => {
				
				eventname.innerHTML = member.name;
				eventspt.innerHTML = member.spotlight;
				eventphone.innerHTML = member.phoneNumbers;
				eventweb.href = members.website;
				eventweb.innerHTML = member.website;
				

			})
		}
	
		
		getMembers();