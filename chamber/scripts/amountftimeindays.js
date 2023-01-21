let date0 = new Date("01/21/2023")
let date1 = new Date();

let milisecday =  24 * 60 * 60 *1000;

let milisecdaypass = Math.abs(date0.getTime() - date1.getTime())

let daypass = Math.round(milisecdaypass/milisecday)

document.querySelector(".day").textContent =  daypass



localStorage.setItem("day", daypass);

