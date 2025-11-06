import { WEATHER_API_KEY } from '../api-config.js';

export const getWeatherData = async (location, units) => {
    if (!location) {
        return;
    }
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&iconSet=icons2&key=${WEATHER_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const weatherData = await response.json();
        const current = weatherData.currentConditions;
        const days = weatherData.days || [];
        // Current conditions
        const currentData = {
            location: weatherData.resolvedAddress,
            // Basic conditions
            dateTime: current.datetime,
            temp: current.temp,
            feelsLike: current.feelslike,
            conditions: current.conditions,
            tempMax: days[0].tempmax,
            tempMin: days[0].tempmin,

            // Secondary details
            humidity: current.humidity,
            pressure: current.pressure,
            windspeed: current.windspeed,
            winddir: current.winddir,
            uvIndex: current.uvindex,
            visibility: current.visibility,
            cloudcover: current.cloudcover,
            sunrise: current.sunrise,
            sunset: current.sunset,
            icon: current.icon,
        };

        // Weekly Forecast
        const forecastData = days.slice(1, 8).map((day) => ({
            date: day.datetime,
            tempMax: day.tempmax,
            tempMin: day.tempmin,
            conditions: day.conditions,
            icon: day.icon,
        }));
        return {
            current: currentData,
            forecast: forecastData,
        };
    } catch (error) {
        // console.error(error.message);
        throw error;
    }
};
