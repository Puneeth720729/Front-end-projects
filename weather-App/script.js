const searchBtn = document.getElementById("searchbtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "e10f351767c0da7c409e05fc5bee48fe";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  fetch(`${apiURL}${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        weatherResult.innerHTML = `<p>City not found. Try again.</p>`;
        return;
      }

      const { name } = data;
      const { temp, feels_like, humidity } = data.main;
      const { description, icon } = data.weather[0];
      const { speed } = data.wind;

      weatherResult.innerHTML = `
        <h2>${name}</h2>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
        <p><strong>${description}</strong></p>
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>😌 Feels Like: ${feels_like}°C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>💨 Wind Speed: ${speed} m/s</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = "<p>Error fetching data.</p>";
      console.error("Fetch error:", error);
    });
});
