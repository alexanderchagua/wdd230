

const myurl = "https://github.com/alexanderchagua/wdd230/blob/main/index.json"

var json ={
    "week01": ["week01/holygrail.html", "week01/media-query.html"],
    "week02": ["week02/design.html", "week02/bom.html"],
    "week03": ["week03/images/landscape.webp", "week03/lazyload.html","https://codepen.io/Alexander-Cha-AL/pen/rNrpBad","week03/bom.html"],
    "week04": ["https://codepen.io/alexanderchagua/pen/GRBxdaY", "week04/images/Combinators .png","week04/tablebuild.html","week04/form-start/index.html"],
    "week05": ["https://codepen.io/alexanderchagua/pen/GRBYbKy", "week05/new-ward-members.json","week05/prophets.html","week05/weather.html"]
    
}


var claseul = document.getElementById('arrayjson');
var i;
document.write("<ul>");
for (i in json.week01) {
  document.write(`<li><a href="${json.week01[i].url}">${json.week01[i].week01}</a></li>`);
}


document.write("</ul>");