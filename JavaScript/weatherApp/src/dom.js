import sunImgUrl from '../assets/sun.png';
import weatherIcons from './icons';
import unitValues from './units';

export const initializeDom = (handleWeatherRequest) => {
    const elements = {
        searchInput: document.getElementById('search-bar'),
        searchButton: document.getElementById('search-button'),
    };

    let currentLocation = '';

    if (!elements.searchInput || !elements.searchButton) {
        console.error('Search elements not found');
        return null;
    }

    const createSearchLoader = () => {
        const loader = document.createElement('div');
        loader.id = 'search-loader';
        loader.innerHTML = `<div class="search-spinner"></div>`;
        loader.style.display = 'none';

        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            elements.searchButton.parentNode.insertBefore(
                loader,
                elements.searchButton.nextSibling
            );
        }

        return loader;
    };

    const showLoader = () => {
        if (elements.loader) {
            elements.loader.style.display = 'inline-block';
        }
    };

    const hideLoader = () => {
        if (elements.loader) {
            elements.loader.style.display = 'none';
        }
    };

    const createWeatherContainer = () => {
        const weatherContainer = document.createElement('div');
        weatherContainer.id = 'weather-container';
        weatherContainer.style.display = 'none';
        weatherContainer.innerHTML = `
            <div class="current-weather">
                <h1 id="location-display" class="location">
                    <span id="location-name"></span>
                    <i class="fa-solid fa-location-dot"></i>
                </h1>
                <div class="current-main">
                    <div id="current-temp" class="temp-large"></div>
                    <div id="current-conditions" class="conditions"></div>
                    <div id="all-temp" class="all-temp"></div>
                </div>
                <div class="weather-details">
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-droplet"></i>
                            Humidity
                        </div>
                        <div class="details-value" id="humidity"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-wind"></i>
                            Wind
                        </div>
                        <i class="fas fa-arrow-up wind-arrow" id="wind-arrow"></i> 
                        <span class="details-value" id="wind"></span> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-gauge"></i>
                            Pressure
                        </div>
                        <div class="details-value" id="pressure"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-sun"></i>
                            UV Index
                        </div>
                        <div class="details-value" id="uv-index"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-eye"></i>
                            Visibility
                        </div>
                        <div class="details-value" id="visibility"></div> 
                    </div>
                    <div class="detail-card">
                        <div class="details-label">
                            <i class="fa-solid fa-cloud"></i>
                            Cloud Cover
                        </div>
                        <div class="details-value" id="cloud-cover"></div> 
                    </div>
                    <div class="detail-card" id="sun-diagram">
                        <div id="sun-arc-wrapper">
                            <div id="sunrise-sunset-wrapper">
                                <div class="details-value" id="sunrise"></div>
                                <img src="${sunImgUrl}" alt="sun to moon gif"/>
                                <div class="details-value" id="sunset"></div>
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>
            <div class="forecast-section">
                <h2 class="forecast-title">7-Day Forecast</h2>
                <div id="forecast-container" class="forecast-days"></div>
            </div>
        `;

        const unitsContainer = document.getElementById('units-container');
        unitsContainer.parentNode.insertBefore(
            weatherContainer,
            unitsContainer.nextSibling
        );

        return weatherContainer;
    };

    const createErrorElement = () => {
        // Create error element and insert it after the search button
        const errorElement = document.createElement('div');
        errorElement.id = 'search-error';
        errorElement.className = 'search-error';
        errorElement.style.display = 'none';
        errorElement.innerHTML = `
            <div class="error-content">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span class="error-text">Location "<span id="error-location-text"></span>" not found</span>
            </div>
        `;
        elements.searchButton.parentNode.insertBefore(
            errorElement,
            elements.searchButton.nextSibling
        );

        return errorElement;
    };

    const showError = (location) => {
        if (elements.errorElement) {
            const errorLocationText = document.getElementById(
                'error-location-text'
            );
            if (errorLocationText) {
                errorLocationText.textContent = location;
            }

            elements.errorElement.style.display = 'block';
            elements.searchInput.classList.add('error');
        }
    };

    const hideError = () => {
        if (elements.errorElement) {
            elements.errorElement.style.display = 'none';
            elements.searchInput.classList.remove('error');
        }
    };

    const updateCurrentWeather = (currentData, units) => {
        if (!currentData) return;

        const symbols = unitValues[units];

        // Update main weather info
        if (elements.locationName) {
            elements.locationName.textContent =
                currentData.location || 'Uknown Location';
        }
        if (elements.currentTemp) {
            elements.currentTemp.textContent = `${Math.round(
                currentData.temp
            )} ${symbols.temp}`;
        }
        if (elements.currentConditions) {
            elements.currentConditions.innerHTML = `
            <img src="${weatherIcons[currentData.icon]}" alt=${
                currentData.icon
            } icon>
            ${currentData.conditions}
            `;
        }
        if (elements.allTemp) {
            elements.allTemp.textContent = `${Math.round(currentData.tempMax)}${
                symbols.temp
            } / ${Math.round(currentData.tempMin)}${
                symbols.temp
            } - Feels like ${Math.round(currentData.feelsLike)}${symbols.temp}`;
        }
        // Update weather details
        if (elements.humidity) {
            elements.humidity.textContent = `${currentData.humidity}%`;
        }
        if (elements.wind) {
            elements.wind.textContent = `${Math.round(currentData.windspeed)} ${
                symbols.windspeed
            }`;
        }
        if (elements.windArrow) {
            elements.windArrow.style.transform = `rotate(${currentData.winddir}deg)`;
        }
        if (elements.pressure) {
            elements.pressure.textContent = `${currentData.pressure} mb`;
        }
        if (elements.uvIndex) {
            const uvValue = currentData.uvIndex;

            let uvText = '';
            if (isNaN(uvValue) || (uvValue >= 0 && uvValue <= 2)) {
                uvText = 'Low';
            } else if (uvValue <= 5) {
                uvText = `Moderate (${uvValue.toFixed(0)})`;
            } else if (uvValue <= 7) {
                uvText = `High (${uvValue.toFixed(0)})`;
            } else if (uvValue <= 10) {
                uvText = `Very High (${uvValue.toFixed(0)})`;
            } else {
                uvText = `Extreme (${uvValue.toFixed(0)})`;
            }
            elements.uvIndex.textContent = uvText;
        }
        if (elements.visibility) {
            elements.visibility.textContent = `${currentData.visibility || 0} ${
                symbols.visibility
            }`;
        }
        if (elements.cloudCover) {
            elements.cloudCover.textContent = `${currentData.cloudcover || 0}%`;
        }

        if (elements.sunrise) {
            elements.sunrise.innerHTML = `
                <div class="sunrise-text">Sunrise</div>
                <div class="sunrise-time">${
                    currentData.sunrise.substring(0, 5) || 'N/A'
                }</div>
            `;
        }

        if (elements.sunset) {
            elements.sunset.innerHTML = `
                <div class="sunset-text">Sunset</div>
                <div class="sunset-time">${
                    currentData.sunset.substring(0, 5) || 'N/A'
                }</div>
            `;
        }
    };

    const updateForecast = (forecastData, units) => {
        if (!forecastData || !elements.forecastContainer) return;

        const symbols = unitValues[units];

        elements.forecastContainer.innerHTML = '';
        forecastData.forEach((day) => {
            const dayCard = document.createElement('div');
            dayCard.classList.add('forecast-card');
            const iconHtml = `
                <div class="day-icon">
                    <img src="${weatherIcons[day.icon]}" alt="${day.icon}">
                </div>`;

            dayCard.innerHTML = `
                <div class="day-date">${new Date(day.date).toLocaleDateString(
                    'en-US',
                    { weekday: 'short' }
                )}</div>
                ${iconHtml}
                <div class="day-temps">
                    <span class="temp-max">${Math.round(day.tempMax)}${
                symbols.temp
            }</span> / 
                    <span class="temp-min">${Math.round(day.tempMin)}${
                symbols.temp
            }</span>
                </div>
            `;
            elements.forecastContainer.appendChild(dayCard);
        });
    };

    const updateWeatherDisplay = (weatherData, units) => {
        if (!weatherData) {
            throw new Error('No weather data received');
        }

        if (!weatherData.current || !weatherData.forecast) {
            throw new Error('Incomplete weather data received');
        }

        hideError();
        updateCurrentWeather(weatherData.current, units);
        updateForecast(weatherData.forecast, units);

        // Show the weather container
        if (elements.weatherContainer) {
            elements.weatherContainer.style.display = 'block';
        }
    };

    const showWeatherData = async (location, units = 'metric') => {
        if (!location) {
            alert('Please enter a location');
            return;
        }

        currentLocation = location;
        hideError();
        showLoader();

        try {
            const weatherData = await handleWeatherRequest(location, units);
            updateWeatherDisplay(weatherData, units);
        } catch (error) {
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            }
            if (
                error.message.includes('not found') ||
                error.message.includes('404') ||
                error.message.includes('400') ||
                error.response?.status === 404 ||
                error.response?.status === 400
            ) {
                showError(
                    location,
                    `The location "${location}" does not exist or cannot be found. Please check the spelling and try again.`
                );
            }
            // alert('Error fetching weather data');
        } finally {
            hideLoader();
        }
    };

    const handleDefaultPage = async (defaultPage) => {
        showWeatherData(defaultPage);
    };

    const handleSearch = async () => {
        const location = elements.searchInput.value.trim();
        showWeatherData(location);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const toggleDropdownMenu = (e) => {
        const button = e.target.closest('.dropdown-btn');
        const dropdownList = button.nextElementSibling;
        const closeListener = (clickEvent) => {
            if (
                !button.contains(clickEvent.target) &&
                !dropdownList.contains(clickEvent.target)
            ) {
                dropdownList.classList.remove('visible');
                button.classList.remove('visible');
                document.removeEventListener('click', closeListener);
            }
        };
        if (dropdownList.classList.contains('visible')) {
            dropdownList.classList.remove('visible');
            button.classList.remove('visible');
        } else {
            dropdownList.classList.add('visible');
            button.classList.add('visible');

            setTimeout(() => {
                document.addEventListener('click', closeListener);
            }, 0);
        }
    };

    const unitsButtonClicked = (e) => {
        // e.stopPropagation();
        const value = e.target.getAttribute('value');
        elements.unitListItems.forEach((item) => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');

        if (currentLocation) {
            showWeatherData(currentLocation, value);
        }

        return value;
    };

    const setUpEventListeners = () => {
        elements.searchButton.addEventListener('click', handleSearch);
        elements.searchInput.addEventListener('keydown', handleKeyPress);
        elements.searchInput.addEventListener('input', hideError);
        elements.unitsBtn.addEventListener('click', (e) =>
            toggleDropdownMenu(e)
        );
        elements.unitOptions.addEventListener('click', (e) => {
            if (e.target.classList.contains('dropdown-option')) {
                unitsButtonClicked(e);
            }
        });
    };

    // Initialize DOM elements
    const weatherContainer = createWeatherContainer();
    const errorElement = createErrorElement();
    elements.errorElement = errorElement;
    const loader = createSearchLoader();
    elements.loader = loader;
    // Add references to the new elements
    elements.weatherContainer = weatherContainer;
    elements.errorElement = errorElement;
    elements.unitsBtn = document.getElementById('units-btn');
    elements.unitOptions = document.getElementById('unit-options');
    elements.unitListItems = elements.unitOptions.querySelectorAll('li');
    elements.locationName = document.getElementById('location-name');
    elements.currentTemp = document.getElementById('current-temp');
    elements.currentConditions = document.getElementById('current-conditions');
    elements.allTemp = document.getElementById('all-temp');
    elements.humidity = document.getElementById('humidity');
    elements.wind = document.getElementById('wind');
    elements.windArrow = document.getElementById('wind-arrow');
    elements.pressure = document.getElementById('pressure');
    elements.uvIndex = document.getElementById('uv-index');
    elements.visibility = document.getElementById('visibility');
    elements.cloudCover = document.getElementById('cloud-cover');
    elements.sunrise = document.getElementById('sunrise');
    elements.sunset = document.getElementById('sunset');
    elements.forecastContainer = document.getElementById('forecast-container');

    setUpEventListeners();

    return {
        handleSearch,
        handleDefaultPage,
        unitsButtonClicked,
    };
};
