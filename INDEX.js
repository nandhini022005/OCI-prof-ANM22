const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

searchButton.addEventListener('click', getWeather);

function getWeather() {
    const city = cityInput.value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert(data.message);
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            alert('Error fetching weather data');
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    weatherDescription.innerText = `Weather: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
