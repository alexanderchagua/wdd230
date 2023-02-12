
	const imagenevent = document.querySelector("#imagenevent")
	const eventname = document.querySelector("#eventspt")
	const eventspt = document.querySelector("#imagenevent")
	const eventphone= document.querySelector("#eventphone")
	const eventweb = document.querySelector("#eventweb")
	

const url =
"http://127.0.0.1:5501/chamber/data/members.json";
	
	fetch(url)
		.then((response) => response.json())
		.then((members )=> displaypata(members));
	
	
	   
	
	
	function displaypata(members){
		console.log(members)
			for( let i in members ){
				i=0  , i<members, i++
				imagenevent.src = members[i].imageurl;
				eventname.innerHTML = members[i].name;
				eventspt.innerHTML = members[i].spotlight;
				eventphone.innerHTML = members[i].phoneNumbers;
				eventweb.setAttribute("href",members[i].website);
				eventweb.innerHTML = members[i].website;
				

			}
		}
	
		
	  
	
		
	
	
	}