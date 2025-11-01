import { WEATHER_API_KEY } from '../api-config.js';

export const getWeatherData = async (location) => {
    if (!location) {
        return;
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${WEATHER_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error(error.message);
        return null;
    }
};
