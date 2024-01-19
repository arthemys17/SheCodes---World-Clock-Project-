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

timeUpdate();
setInterval(timeUpdate, 1000);

let intervalId;
function updateCity(event) {
  if (intervalId != undefined) {
    clearInterval(intervalId);
  }

  let cityTimeZone = event.target.value;
  let citiesElement = document.querySelector("#cities");
  if (!cityTimeZone) {
    alert("Please, select a city");
    clearInterval(intervalId);
    citiesElement.innerHTML = ` <div id="cities">
      <div class="city" id="lisbon">
        <div>
          <h2>Lisbon</h2>
          <p class="date"></p>
        </div>
        <div class="time"></div>
      </div>
      <div class="city" id="zurich">
        <div>
          <h2>Zurich</h2>
          <p class="date"></p>
        </div>
        <div class="time"></div>
      </div>
    </div>`;
    return;
  }

  function updateCityTime() {
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
    let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss [<small>]A[</small>]");
    citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <p class="date">${cityDate}</p>
  </div>
  <div class="time">${cityTime}</div>
  </div>
  <a href="/" class="refresh-link">All Cities</a>
  `;
  }

  updateCityTime();
  intervalId = setInterval(updateCityTime, 1000);
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
