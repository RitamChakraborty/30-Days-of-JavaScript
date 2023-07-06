const WEATHER_API_URL = 'https://api.tomorrow.io/v4/weather/realtime';
const API_KEY = 'ujeBAIJqXIadTfNcv7PHN5p9OnQg4uiQ';

const cityForm = document.querySelector('#city-form');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = searchInput.value;
    if (city.value?.length === 0) return;
    const url = getRequestUrl(city);
    await getWeatherData(url);
});

function getRequestUrl(location) {
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append('apikey', API_KEY);
    apiUrl.searchParams.append('location', location);
    return apiUrl.href;
}

async function getWeatherData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}