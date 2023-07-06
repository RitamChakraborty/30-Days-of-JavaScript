const WEATHER_API_URL = 'https://api.tomorrow.io/v4/weather/realtime';
const API_KEY = 'ujeBAIJqXIadTfNcv7PHN5p9OnQg4uiQ';

const cityForm = document.querySelector('#city-form');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const loading = document.querySelector(".loading");

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = searchInput.value;
    if (!city || city.length === 0) return;
    const url = getRequestUrl(city);
    toggleLoading();
    await getWeatherData(url);
    toggleLoading();
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

function toggleLoading() {
    loading.toggleAttribute('hidden');
}