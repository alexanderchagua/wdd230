



var now = new Date ();
var day = now.getDay();
if(day == 0){
    d = document.write("<img src='http://www.tu_web.com/imagenes/domingo.gif' alt='domingo'>");
    document.querySelector("#banner").innerHTML = d
}
if(day == 1) document.write("<img src='http://www.tu_web.com/imagenes/lunes.gif' alt='lunes'>");
if(day == 2) document.write("<img src='http://www.tu_web.com/imagenes/martes.gif' alt='martes'>");
if(day == 3)  d2 = document.write("<img src='http://www.tu_web.com/imagenes/miercoles.gif' alt='miercoles'>");
document.querySelector("#banner").innerHTML = d2
if(day == 4) document.write("<img src='http://www.tu_web.com/imagenes/jueves.gif' alt='jueves'>");
if(day == 5) document.write("<img src='http://www.tu_web.com/imagenes/viernes.gif' alt='viernes'>");
if(day == 6) document.write("<img src='http://www.tu_web.com/imagenes/sabadogif' alt='sabado'>");