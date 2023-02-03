

const myurl = "https://github.com/alexanderchagua/wdd230/blob/main/index.json"

var pelis = [
    {
        Nombre: "El señor de los anillos",
        Genero: "Acción"
    },
    {
        Nombre: "Regreso al Futuro",
        Genero: "Acción"
    },
    {
        Nombre: "Los increibles 2",
        Genero: "Animación"
    },
];

addLi();

function addLi() {
    var contenido;
    for (i = 0; i < pelis.length; i++) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      contenido = "week"[i]+":" + pelis[i].Nombre + " || Genero: " + pelis[i].Genero;
      a.appendChild(document.createTextNode(contenido));
      document.querySelector("#listweek").appendChild(li).appendChild(a);
    }
}