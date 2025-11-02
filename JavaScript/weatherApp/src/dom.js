export const initializeDom = (handleWeatherRequest) => {
    const elements = {
        searchInput: document.getElementById('search-bar'),
        searchButton: document.getElementById('search-button'),
    };

    if (!elements.searchInput || !elements.searchButton) {
        console.error('Search elements not found');
        return null;
    }

    const createWeatherContainer = () => {
        const weatherContainer = document.createElement('div');
        weatherContainer.id = 'weather-container';
        weatherContainer.style.display = 'none';
        weatherContainer.innerHTML = `
            <div class="current-weather">
                <h1 id="location-display" class="location"></h1>
                <div class="current-main">
                    <div id="current-temp" class="temp-large"></div>
                    <div id="current-conditions" class="conditions"></div>
                    <div id="feels-like" class="feels-like"></div>
                </div>
                <div class="weather-details">
                    <div class="detail-card">
                        <div class="details-label">Humidity</div>
                        <div class="details-value" id="humidity"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Wind</div>
                        <div class="details-value" id="wind"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Pressure</div>
                        <div class="details-value" id="pressure"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">UV Index</div>
                        <div class="details-value" id="uv-index"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Visibility</div>
                        <div class="details-value" id="visibility"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Sunrise</div>
                        <div class="details-value" id="sunrise"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Sunset</div>
                        <div class="details-value" id="sunset"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">Precipitation</div>
                        <div class="details-value" id="precipitation"></div> 
                    </div>
                </div>
                <div class="forecast-section">
                    <h2 class="forecast-title">7-Day Forecast</h2>
                    <div id="forecast-container" class="forecast-days"></div>
                </div>
            </div>
        `;

        const searchContainer = document.querySelector('.search-container');
        searchContainer.parentNode.insertBefore(
            weatherContainer,
            searchContainer.nextSibling
        );

        return weatherContainer;
    };

    const updateCurrentWeather = (currentData) => {
        if (!currentData) return;

        // Update main weather info
        if (elements.locationDisplay) {
            elements.locationDisplay.textContent =
                currentData.location || 'Uknown Location';
        }
        if (elements.currentTemp) {
            elements.currentTemp.textContent = `${Math.round(
                currentData.temp
            )}°F`;
        }
        if (elements.currentConditions) {
            elements.currentConditions.textContent =
                currentData.conditions || 'Uknown Conditions';
        }
        if (elements.feelsLike) {
            elements.feelsLike.textContent = `Feels like ${Math.round(
                currentData.feelsLike
            )};&degF`;
        }
        // Update weather details
        if (elements.humidity) {
            elements.humidity.textContent = `${currentData.humidity}%`;
        }
        if (elements.wind) {
            elements.humidity.textContent = `${Math.round(
                currentData.windspeed
            )} mph`;
        }
        if (elements.pressure) {
            elements.pressure.textContent = `${currentData.pressure} mb`;
        }
        if (elements.uvIndex) {
            elements.uvIndex.textContent = currentData.uvIndex || 'N/A';
        }
        if (elements.visibility) {
            elements.visibility.textContent = `${currentData.visibility}% mi`;
        }
        if (elements.sunrise) {
            elements.sunrise.textContent = currentData.sunrise || 'N/A';
        }
        if (elements.sunset) {
            elements.sunset.textContent = currentData.sunset || 'N/A';
        }
    };

    const updateForecast = (forecastData) => {
        if (!forecastData || !elements.forecastContainer) return;

        elements.forecastContainer.innerHTML = '';
        forecastData.forEach((day) => {
            const dayCard = document.createElement('div');
            dayCard.classList.add('forecast-card');
            const iconHtml = `<div class="day-icon">${day.icon}</div>`;

            dayCard.innerHTML = `
                <div class="day-date">${new Date(day.date).toLocaleDateString(
                    'en-US',
                    { weekday: 'short' }
                )}</div>
                ${iconHtml}
                <div class="day-temps">
                    <span class="temp-max">${Math.round(day.tempMax)}°</span> / 
                    <span class="temp-min">${Math.round(day.tempMin)}°</span>
                </div>
                <div class="day-precip">${day.precipProb}%</div>
            `;
            elements.forecastContainer.appendChild(dayCard);
        });
    };

    const updateWeatherDisplay = (weatherData) => {
        if (!weatherData) {
            throw new Error('No weather data received');
        }
        console.log('Weather data received:', weatherData);
        updateCurrentWeather(weatherData.current);
        updateForecast(weatherData.forecast);

        // Show the weather container
        if (elements.weatherContainer) {
            elements.weatherContainer.style.display = 'block';
        }
    };

    const handleSearch = async () => {
        const location = elements.searchInput.value.trim();
        if (!location) {
            alert('Please enter a location');
        }
        try {
            console.log('Searching for', location);
            const weatherData = await handleWeatherRequest(location);
            updateWeatherDisplay(weatherData);
        } catch (error) {
            console.error('Search error', error);
            alert('Error fetching weather data');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const setUpEventListeners = () => {
        elements.searchButton.addEventListener('click', handleSearch);
        elements.searchInput.addEventListener('keydown', handleKeyPress);
    };

    // Initialize DOM elements
    const weatherContainer = createWeatherContainer();
    // Add references to the new elements
    elements.weatherContainer = weatherContainer;
    elements.locationDisplay = document.getElementById('location-display');
    elements.currentTemp = document.getElementById('current-temp');
    elements.currentConditions = document.getElementById('current-conditions');
    elements.feelsLike = document.getElementById('feels-like');
    elements.humidity = document.getElementById('humidity');
    elements.wind = document.getElementById('wind');
    elements.pressure = document.getElementById('pressure');
    elements.uvIndex = document.getElementById('uv-index');
    elements.visibility = document.getElementById('visibility');
    elements.sunrise = document.getElementById('sunrise');
    elements.sunset = document.getElementById('sunset');
    elements.precipitation = document.getElementById('precipitation');
    elements.forecastContainer = document.getElementById('forecast-container');

    setUpEventListeners();

    return {
        handleSearch,
    };
};
