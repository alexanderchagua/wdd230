


var now = new Date ();
var day = now.getDay();
	
var hora = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();


let  banner = document.querySelector("#banner")

if(day == 0){
    banner.innerHTML = "hola"
}

if(day == 1) {
    let t = document.createElement("h3")
    t.classList.add('sectioncard');
    t.innerHTML = "hola hoy es un buen dia para asistir a nuestra reunion de hoy de la camara de lima"+hora;
    banner.appendChild(t)
    
}
else if(day == 2){
    banner = "hello";
}
else if(day == 3) {
    banner = "hello";
}
else if(day == 4){
    banner = "lo hare";
}
else if(day == 5){
    banner = "yase";
}
else if(day == 6){
    banner = "tu puedes no desmayes";
}



