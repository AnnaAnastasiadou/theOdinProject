import './style.css';
import { getWeatherData } from './api';
import { initializeDom } from './dom.js';

const DEFAULT_CITY = 'Nicosia';

document.addEventListener('DOMContentLoaded', () => {
    const handleWeatherRequest = async (location, units = 'metric') => {
        return await getWeatherData(location, units);
    };
    const domController = initializeDom(handleWeatherRequest);

    domController.handleDefaultPage(DEFAULT_CITY);
});
