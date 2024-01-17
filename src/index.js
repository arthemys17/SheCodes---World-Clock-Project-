function timeUpdate(){
//Lisbon
let lisbonElement = document.querySelector("#lisbon");
let lisbonDateElement = lisbonElement.querySelector(".date");
let lisbonTimeElement = lisbonElement.querySelector(".time");
let lisbonTime = moment().tz("Europe/Lisbon");

lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
lisbonTimeElement.innerHTML = lisbonTime.format("hh:mm:ss [<small>]A[</small>]");

//Switzerland
let zurichElement = document.querySelector("#zurich");
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Europe/Zurich");

zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
zurichTimeElement.innerHTML = zurichTime.format("hh:mm:ss [<small>]A[</small>]");
};

timeUpdate();
setInterval(timeUpdate, 1000);
