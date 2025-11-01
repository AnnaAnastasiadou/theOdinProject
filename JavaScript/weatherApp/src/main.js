import './style.css';
import { getWeatherData } from './api';
import { initializeDom } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
    const handleWeatherRequest = async (location) => {
        return await getWeatherData(location);
    };
    initializeDom(handleWeatherRequest);
});
