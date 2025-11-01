export const initializeDom = (handleWeatherRequest) => {
    const elements = {
        searchInput: document.getElementById('search-bar'),
        searchButton: document.getElementById('search-button'),
    };

    if (!elements.searchInput || !elements.searchButton) {
        console.error('Search elements not found');
        return null;
    }

    const updateWeatherDisplay = (weatherData) => {
        if (!weatherData) {
            console.log('No weather data to display');
            return;
        }
        console.log('Weather data received', weatherData);
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
        elements.searchButton.addEventListener('keydown', handleKeyPress);
    };

    setUpEventListeners();

    return {
        handleSearch,
        updateWeatherDisplay,
    };
};
