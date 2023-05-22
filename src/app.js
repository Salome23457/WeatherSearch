let apiKey = "2ff29bed3181c3526c35cc5408037f85";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function displayTemp(response) {
  console.log(response.data.main.temp);
  let temperatureEl = document.querySelector("#temperature");
  temperatureEl.innerHTML = Math.round(response.data.main.temp);
}

axios.get(apiUrl).then(displayTemp);
