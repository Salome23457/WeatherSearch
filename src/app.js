let apiKey = "3b7t38c5bd8502c1f10a4o47b15a6c8a";

let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New York&key=3b7t38c5bd8502c1f10a4o47b15a6c8a&units=metric";

function displayTemp(response) {
  console.log(response.data.main.temp);
  let temperatureEl = document.querySelector("#temperature");
  temperatureEl.innerHTML = Math.round(response.data.main.temp);
}

axios.get(apiUrl).then(displayTemp);
