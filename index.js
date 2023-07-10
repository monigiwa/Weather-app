function displayCurrentDateAndTime() {
  let current = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[current.getDay()];
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let currentDateAndTime = document.querySelector("#current-date-time");
  currentDateAndTime.innerHTML = `${day} ${hours}:${minutes}`;
}
displayCurrentDateAndTime();

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${cityInput}, Nigeria`;
}
let submitForm = document.querySelector("#search-input-form");
submitForm.addEventListener("submit", showCity);

function convertTempToCelsius() {
  let convertToCelcius = document.querySelector("#temperature");
  convertToCelcius.innerHTML = `⛅ 30`;
}
let tempC = document.querySelector("#celcius-link");
tempC.addEventListener("click", convertTempToCelsius);

function convertTempToFahrenheit() {
  let convertToFahrenheit = document.querySelector("#temperature");
  convertToFahrenheit.innerHTML = `⛅ 73`;
}
let tempF = document.querySelector("#fahrenheit-link");
tempF.addEventListener("click", convertTempToFahrenheit);
