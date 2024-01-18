function timeUpdate() {
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("hh:mm:ss [<small>]A[</small>]");
  }
  //Switzerland
  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichDateElement = zurichElement.querySelector(".date");
    let zurichTimeElement = zurichElement.querySelector(".time");
    let zurichTime = moment().tz("Europe/Zurich");

    zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
    zurichTimeElement.innerHTML = zurichTime.format("hh:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss [<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <p class="date">${cityDate}</p>
  </div>
  <div class="time">${cityTime}</div>
  </div>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

timeUpdate();
setInterval(timeUpdate, 1000);
