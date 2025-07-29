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
    } else {
      throw Error(weatherResponse.text());
    }

    if (forecastResponse.ok) {
      forecastData = await forecastResponse.json();
    } else {
      throw Error(forecastResponse.text());
    }

    displayResults(weatherData, forecastData);
  } catch (error) {
    console.error(error);
  }
}

function displayResults(weatherData, forecastData) {
  weatherInfo.innerHTML = /*html*/ `
    <p><b>${weatherData.main.temp}&deg;</b> C</p>
    <p>${weatherData.weather[0].main}</p>
    <p>High: ${weatherData.main.temp_max}</p>
    <p>Low: ${weatherData.main.temp_min}</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
    <p>Sunrise: ${formatDatetime(weatherData.sys.sunrise)}</p>
    <p>Sunset: ${formatDatetime(weatherData.sys.sunset)}</p>
  `;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  let desc = weatherData.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  forecast.innerHTML = /*html */ `

    <p>Today: <b>${forecastData.list[0].main.temp}&deg; C</b></p>
    <p>${formatDate(forecastData.list[1].dt)}: <b>${
    forecastData.list[0].main.temp
  }&deg; C</b></p>
    <p>${formatDate(forecastData.list[7].dt)}: <b>${
    forecastData.list[7].main.temp
  }&deg; C</b></p>
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

function formatDate(date) {
  const weekday = new Date(date * 1000);
  const dateString = weekday.toLocaleDateString("en-US", { weekday: "long" });
  return dateString;
}

apiFetch();
