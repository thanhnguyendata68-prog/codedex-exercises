async function fetchWeather() {
  const searchInput = document.getElementById("search").value.trim();
  const weatherDataSection = document.getElementById("weather-data");
  const apiKey = "f14c33c870a44cea4061b99826da8f30";

  if (!searchInput) {
    weatherDataSection.style.display = "block";
    weatherDataSection.innerHTML = `
      <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
      </div>
    `;
    return;
  }

  weatherDataSection.style.display = "block";
  weatherDataSection.innerHTML = `<p>Loading weather for ${searchInput}...</p>`;

  async function getLonAndLat(query) {
    const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=1&appid=${apiKey}`;
    const response = await fetch(geocodeURL);
    if (!response.ok) {
      throw new Error(`Geocode request failed: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
  }

  async function getWeatherData(lat, lon) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(weatherURL);
    if (!response.ok) {
      throw new Error(`Weather request failed: ${response.status}`);
    }
    return response.json();
  }

  try {
    const geocodeData = await getLonAndLat(searchInput);
    if (!geocodeData) {
      weatherDataSection.innerHTML = `
        <div>
          <h2>Invalid city: "${searchInput}"</h2>
          <p>Please try again with a valid <u>city name</u>.</p>
        </div>
      `;
      return;
    }

    const weatherData = await getWeatherData(geocodeData.lat, geocodeData.lon);
    weatherDataSection.style.display = "flex";
    weatherDataSection.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="${weatherData.weather[0].description}" width="100" />
      <div>
        <h2>${weatherData.name}</h2>
        <p><strong>Temperature:</strong> ${Math.round(weatherData.main.temp)}°C</p>
        <p><strong>Description:</strong> ${weatherData.weather[0].description}</p>
      </div>
    `;
    document.getElementById("search").value = "";
  } catch (error) {
    console.error(error);
    weatherDataSection.style.display = "block";
    weatherDataSection.innerHTML = `
      <div>
        <h2>Error loading weather</h2>
        <p>Please check the city name and try again.</p>
      </div>
    `;
  }
}
