





const url = "https://alexanderchagua.github.io/wdd230/index.json";


const getProphets = async () => {
	let data = await jsonFetch(url);


	init(data)
};



async function jsonFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data.week01;}
    

  
  function init() {
    
    let us = document.querySelector("#weeks")
    
    let li4 = document.createElement("li");
    
    let a = document.createElement("a");
    let as = document.createElement("a");
    a.setAttribute("href", "week01/holygrail.html");
    as.setAttribute("href", "week01/media-query.html")
    let aTexto = document.createTextNode("Grail");
    let aTexto2 = document.createTextNode("Media-query");
    a.appendChild(aTexto);
    as.appendChild(aTexto2);
    let aTexto3 = document.createTextNode("Wee01:");
    let aTexto4 = document.createTextNode("|");

    let li5 = document.createElement("li");
    
    let a1 = document.createElement("a");
    let a2 = document.createElement("a");
    a1.setAttribute("href", "week02/design.html");
    a2.setAttribute("href", "week02/bom.html")
    let aTexto1 = document.createTextNode("Design");
    let aTextow2= document.createTextNode("Bom");
    a1.appendChild(aTexto1);
    a2.appendChild(aTextow2);
    let aTextow2a = document.createTextNode("Wee02:");
    let aTextown = document.createTextNode("|");

    let li6 = document.createElement("li");
    
    let a6 = document.createElement("a");
    let a7 = document.createElement("a");
    let a8 = document.createElement("a");
    let a9 = document.createElement("a");
    a6.setAttribute("href", "week03/images/landscape.webp");
    a7.setAttribute("href",  "week03/lazyload.html")
    a8.setAttribute("href", "https://codepen.io/Alexander-Cha-AL/pen/rNrpBad")
    a9.setAttribute("href", "week03/bom.html")
    let aTexto6 = document.createTextNode("WebP");
    let aTexto7= document.createTextNode("Lazy loading");
    let aTexto8= document.createTextNode("Codepen");
    let aTexto9= document.createTextNode("Bom");
    a6.appendChild(aTexto6);
    a7.appendChild(aTexto7);
    a8.appendChild(aTexto8);
    a9.appendChild(aTexto9);

    let aTextoww3 = document.createTextNode("Wee03:");
    let aTextown3 = document.createTextNode("|");
    let aTextown3a = document.createTextNode("|");
    let aTextown3b = document.createTextNode("|");



    let li7 = document.createElement("li");
    
    let a10 = document.createElement("a");
    let a11 = document.createElement("a");
    let a12 = document.createElement("a");
    let a13 = document.createElement("a");
    a10.setAttribute("href", "https://codepen.io/alexanderchagua/pen/GRBxdaY");
    a11.setAttribute("href",  "week04/images/Combinators .png")
    a12.setAttribute("href", "week04/tablebuild.html")
    a13.setAttribute("href", "week04/form-start/index.html")
    let aTexto10 = document.createTextNode("Seudoclass");
    let aTexto11= document.createTextNode("Combinators");
    let aTexto12= document.createTextNode("Tables");
    let aTexto13= document.createTextNode("Form");
    a10.appendChild(aTexto10);
    a11.appendChild(aTexto11);
    a12.appendChild(aTexto12);
    a13.appendChild(aTexto13);

    let aTextoww4 = document.createTextNode("Wee04:");
    let aTextown4 = document.createTextNode("|");
    let aTextown4a = document.createTextNode("|");
    let aTextown4b = document.createTextNode("|");

    let li8 = document.createElement("li");
    
    let a14 = document.createElement("a");
    let a15 = document.createElement("a");
    let a16 = document.createElement("a");
    let a17 = document.createElement("a");
    a14.setAttribute("href", "https://codepen.io/alexanderchagua/pen/GRBYbKy");
    a15.setAttribute("href",  "week05/new-ward-members.json")
    a16.setAttribute("href", "week05/prophets.html")
    a17.setAttribute("href", "week05/weather.html")
    let aTexto14 = document.createTextNode("Codepen");
    let aTexto15= document.createTextNode("MyJSON");
    let aTexto16= document.createTextNode("Prophets");
    let aTexto17= document.createTextNode("Weather");
    a14.appendChild(aTexto14);
    a15.appendChild(aTexto15);
    a16.appendChild(aTexto16);
    a17.appendChild(aTexto17);

    let aTextoww5 = document.createTextNode("Wee05:");
    let aTextown5 = document.createTextNode("|");
    let aTextown5a = document.createTextNode("|");
    let aTextown5b = document.createTextNode("|");

    li4.appendChild(aTexto3 )
    li4.appendChild(a)
    li4.appendChild(aTexto4)
    li4.appendChild(as);
    us.appendChild(li4)

    li5.appendChild(aTextow2a )
    li5.appendChild(a1)
    li5.appendChild(aTextown)
    li5.appendChild(a2);
    us.appendChild(li5)


    li6.appendChild(aTextoww3)
    li6.appendChild(a6)
    li6.appendChild(aTextown3)
    li6.appendChild(a7);
    li6.appendChild(aTextown3a);
    li6.appendChild(a8);
    li6.appendChild(aTextown3b);
    li6.appendChild(a9);
    us.appendChild(li6)

    li7.appendChild(aTextoww4)
    li7.appendChild(a10)
    li7.appendChild(aTextown4)
    li7.appendChild(a11);
    li7.appendChild(aTextown4a);
    li7.appendChild(a12);
    li7.appendChild(aTextown4b);
    li7.appendChild(a13);
    us.appendChild(li7)

    li8.appendChild(aTextoww5)
    li8.appendChild(a14)
    li8.appendChild(aTextown5)
    li8.appendChild(a15);
    li8.appendChild(aTextown5a);
    li8.appendChild(a16);
    li8.appendChild(aTextown5b);
    li8.appendChild(a17);
    us.appendChild(li8)

    
  


//const displayProphets = (data) => {
   // const week = data
   // week.innerHTML = "";
      // Create elements to add to the div.cards element
    //  var contenido;
     //   for (var i = 0; i < week.length; i++) {
       //     var lis = document.createElement("li");
        //    var p = document.createElement("a");
           
         //   contenido = "week01:"+ week[i];
         //   p.appendChild(document.createTextNode(contenido));
          //  document.querySelector("#lista-pelis").appendChild(lis).appendChild(p);
          };
     
      getProphets();


   
