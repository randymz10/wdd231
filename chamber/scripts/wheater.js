// select HTML elements in the document
const weatherInfo = document.querySelector("#weather-info");
const weatherIcon = document.querySelector("#weather-icon");
const forecast = document.querySelector("#forecast");
const apiKey = "b76cb441ad80dcea726d5ea599ef63fd";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-23.33&lon=-51.18&units=metric&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.33&lon=-51.18&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const weatherResponse = await fetch(weatherUrl);
    const forecastResponse = await fetch(forecastUrl);
    let weatherData;
    let forecastData;

    if (weatherResponse.ok) {
      weatherData = await weatherResponse.json();
      console.log(weatherData);
    } else {
      throw Error(weatherResponse.text());
    }

    if (weatherResponse.ok) {
      weatherData = await weatherResponse.json();
      console.log(weatherData);
      displayResults(weatherData);
    } else {
      throw Error(weatherResponse.text());
    }

    displayResults(weatherData);
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  weatherInfo.innerHTML = /*html*/ `
    <p><b>${data.main.temp}&deg;</b> C</p>
    <p>${data.weather[0].main}</p>
    <p>High: ${data.main.temp_max}</p>
    <p>Low: ${data.main.temp_min}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Sunrise: ${formatDatetime(data.sys.sunrise)}</p>
    <p>Sunset: ${formatDatetime(data.sys.sunset)}</p>
  `;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  forecast.innerHTML = /*html */ `
    <p>Today: <b>${data.main.temp}&deg; C</b> </p>
    <p><b></b></p>
    <p><b></b></p>
  `;
}

function formatDatetime(datetime) {
  const date = new Date(datetime * 1000);
  const timeString = date.toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return timeString;
}

apiFetch();
