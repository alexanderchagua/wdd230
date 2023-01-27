const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);


const pas1= document.querySelector("#password");
const pas2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pas2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pas1.value !== pas2.value) {
		message.textContent = "The password does not match try again!";
		message.style.display = "block";
		pas2.style.backgroundColor = "gray";
		pas2.style.color = "#fff";
		pas2.focus();
		pas2.value = "";
	} else {
		message.style.display = "none";
		pas2.style.backgroundColor = "#fff";
		pas2.style.color = "#000";
	}
}

const form = document.getElementById("transactionForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
let transactionFormdata = new FormData(form);

insertRowInTransactionTable(transactionFormdata)
})


function insertRowInTransactionTable(transactionFormdata){

let transactionTableRef = document.getElementById("transtable")
let newtransRow = transactionTableRef.inertRow(-1);

let newtypwcellreff = newtransRow.insertCell(0);
newtypwcellreff.textContent = transactionFormdata.get("fullname")

newtypwcellreff = newsdsdRef.insertCell(1);
newtypwcellreff.textContent = transactionFormdata.get("email")

newtypwcellreff = newsdsdRef.insertCell(2);
newtypwcellreff.textContent = transactionFormdata.get("ra")

newtypwcellreff = newsdsdRef.insertCell(3);
newtypwcellreff.textContent = transactionFormdata.get("fullname")

newtypwcellreff = newsdsdRef.insertCell(4);
newtypwcellreff.textContent = transactionFormdata.get("")



}


let x = getElementById("fullname")

document.getElementById("name").innerHTML = x