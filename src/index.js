function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let currentDate = document.querySelector(".current-date");

  currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
}

formatDate(new Date());

function displayWeatherCondition(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  //   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  //   document.querySelector("#wind").innerHTML = Math.round(
  //     response.data.wind.speed
  //   );
  //   document.querySelector("#description").innerHTML =
  //     response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "d8fdd97962f426d8117d0a10600ebabf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "d8fdd97962f426d8117d0a10600ebabf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 19;
}

// let dateElement = document.querySelector("#date");
// let currentTime = new Date();
// dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);

// let currentLocationButton = document.querySelector("#current-location-button");
// currentLocationButton.addEventListener("click", getCurrentLocation);

// searchCity("New York");

// function showWeather(response) {
//   let temp = document.querySelector(".temperature");
//   let temperature = Math.round(response.data.main.temp);
//   let city = document.querySelector(".city");
//   console.log(response.data.main.temp);
//   temp.innerHTML = `${temperature}°F`;
//   city.innerHTML = `${response.data.name}`;
// }
// function displayWeatherCondition(response) {
//   document.querySelector(".city").innerHTML = response.data.name;
//   document.querySelector(".temperature").innerHTML = Math.round(
//     response.data.main.temp
//   );

//   //   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//   //   document.querySelector("#wind").innerHTML = Math.round(
//   //     response.data.wind.speed
//   //   );
//   //   document.querySelector("#description").innerHTML =
//   //     response.data.weather[0].main;
// }
// function searchWeather(event) {
//   event.preventDefault();
//   let apiKey = "b2cf55c066967fab16dfc1d51b2c3a86";
//   let city = "Paris";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#city-input").value;
//   searchCity(city);
// }
// function convertCelsius(event) {
//   event.preventDefault();
//   let temperature = document.querySelector(".temperature");
//   temperature.innerHTML = "33°";
// }
// let celsiusTemp = document.querySelector(".celsius");
// celsiusTemp.addEventListener("click", convertCelsius);

// function convertFahrenheit(event) {
//   event.preventDefault();
//   let temperature = document.querySelector(".temperature");
//   temperature.innerHTML = "91°";
// }

// let fahrenheitTemp = document.querySelector(".fahrenheit");
// fahrenheitTemp.addEventListener("click", convertFahrenheit);
// function searchWeather(event) {
//   event.preventDefault();
//   let input = document.querySelector(".input");
//   let city = document.querySelector(".city");
//   city.innerHTML = input.value;
// }
// let form = document.querySelector("form");
// form.addEventListener("submit", searchWeather);

// function retrieveWeather(position) {
//   let apiKey = "b2cf55c066967fab16dfc1d51b2c3a86";
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
//   let temperature = document.querySelector(".temperature");
//   temperature.innerHTML = position.data.main.temp;
//   axios.get(url).then(retrieveWeather);
// }
// navigator.geolocation.getCurrentPosition(retrieveWeather);

// let apiKey = "b2cf55c066967fab16dfc1d51b2c3a86";
// let city = "London";
// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=b2cf55c066967fab16dfc1d51b2c3a86"
// function getTemperature (){

// }

// function displayTemperature {

// }
