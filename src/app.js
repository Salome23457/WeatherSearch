function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours} `;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes} `;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}: ${minutes}`;
}

function displayTemp(response) {
  console.log(response.data.main.temp);
  let temperatureEl = document.querySelector("#temperature");
  let cityEl = document.querySelector("#city");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let dateEl = document.querySelector("#date");
  let icon = document.querySelector("#icon");
  temperatureEl.innerHTML = Math.round(response.data.main.temp);
  cityEl.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  dateEl.innerHTML = formatDate(response.data.dt * 1000);
  icon.setAttribute(
    "src",
    ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  //let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

search("New York");

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
