let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function displayTemp(response) {
  console.log(response.data.main.temp);
  let temperatureEl = document.querySelector("#temperature");
  let cityEl = document.querySelector("#city");
  temperatureEl.innerHTML = Math.round(response.data.name);
}

axios.get(apiUrl).then(displayTemp);
