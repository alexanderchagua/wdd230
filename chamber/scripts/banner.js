


var now = new Date ();
var day = now.getDay();
	



let  banner = document.querySelector("#banner")


if(day == 1) {
    let t = document.createElement("h3")
    t.classList.add('sectioncard');
    t.innerHTML = "Greetings to all, we invite you to join our meeting of the Lima Chamber of Commerce on Wednesday at 7:00 p.m.";
    banner.appendChild(t)
    
}
else if(day == 2){
    let t = document.createElement("h3")
    t.classList.add('sectioncard');
    t.innerHTML = "Greetings to all, we invite you to join our meeting of the Lima Chamber of Commerce on Wednesday at 7:00 p.m.";
    banner.appendChild(t)
}
else if(day == 3) {
    let t = document.createElement("h3")
    t.classList.add('sectioncard');
    t.innerHTML = "Greetings to all, we invite you to join our meeting of the Lima Chamber of Commerce on Wednesday at 7:00 p.m.";
    banner.appendChild(t)
}

