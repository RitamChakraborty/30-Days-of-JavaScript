const WEATHER_API_URL = 'https://api.tomorrow.io/v4/weather/realtime';
const API_KEY = 'ujeBAIJqXIadTfNcv7PHN5p9OnQg4uiQ';

const cityForm = document.querySelector('#city-form');
const searchInput = document.querySelector('#search-input');
const loading = document.querySelector('.loading');
const error = document.querySelector(".error");
const weatherElm = document.querySelector('.weather');
const weatherBehaviorElm = document.querySelector("#behavior");
const weatherIconElm = document.querySelector("#weather-icon");
const temperatureElm = document.querySelector("#temp");
const humidityElm = document.querySelector("#humidity");
const windSpeedElm = document.querySelector("#wind-speed");
const cityElement = document.querySelector("#city");

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = searchInput.value;
    if (!city || city.length === 0) return;
    const url = getRequestUrl(city);
    initializeState();
    const weatherData = await getWeatherData(url);
    if (weatherData) processWeatherData(weatherData);
    toggleLoading();
});

function getRequestUrl(location) {
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append('apikey', API_KEY);
    apiUrl.searchParams.append('location', location);
    return apiUrl.href;
}

async function getWeatherData(url) {
    let response;

    try {
        response = await fetch(url);
    }
    catch (e) {
    }

    if (response?.ok) {
        const json = await response.json();
        return json;
    }

    error.hidden = false;
    return null;
}

function toggleLoading() {
    loading.toggleAttribute('hidden');
}

function initializeState() {
    toggleLoading();
    error.hidden = true;
    weatherElm.hidden = true;
}

function processWeatherData(data) {
    const values = data.data.values;
    const weatherCode = values.weatherCode;
    const weatherBehavior = getBehavior(weatherCode);
    const weatherIcon = getWeatherIcon(weatherCode);
    const temperature = values.temperature;
    const humidity = values.humidity;
    const windSpeed = values.windSpeed;
    const city = data.location.name;
    weatherElm.hidden = false;
    weatherBehaviorElm.textContent = weatherBehavior;
    weatherIconElm.src = new URL(`./assets/${weatherIcon}`, import.meta.url).href;
    temperatureElm.textContent = +temperature;
    humidityElm.textContent = +humidity;
    windSpeedElm.textContent = +windSpeed;
    cityElement.textContent = city;
    cityElement.setAttribute('title', city);
}

function getBehavior(weatherCode) {
    return weatherBehaviors[+weatherCode];
}

function getWeatherIcon(weatherCode) {
    return weatherIcons[+weatherCode];
}

const weatherBehaviors = {
    "0": "Unknown",
    "1000": "Clear, Sunny",
    "1100": "Mostly Clear",
    "1101": "Partly Cloudy",
    "1102": "Mostly Cloudy",
    "1001": "Cloudy",
    "2000": "Fog",
    "2100": "Light Fog",
    "4000": "Drizzle",
    "4001": "Rain",
    "4200": "Light Rain",
    "4201": "Heavy Rain",
    "5000": "Snow",
    "5001": "Flurries",
    "5100": "Light Snow",
    "5101": "Heavy Snow",
    "6000": "Freezing Drizzle",
    "6001": "Freezing Rain",
    "6200": "Light Freezing Rain",
    "6201": "Heavy Freezing Rain",
    "7000": "Ice Pellets",
    "7101": "Heavy Ice Pellets",
    "7102": "Light Ice Pellets",
    "8000": "Thunderstorm"
};

const weatherIcons = {
    '1000': '10000_clear_large.png',
    '1001': '10010_cloudy_large.png',
    '1100': '11000_mostly_clear_large.png',
    '1101': '11010_partly_cloudy_large.png',
    '1102': '11020_mostly_cloudy_large.png',
    '1103': '11030_mostly_clear_large.png',
    '2000': '20000_fog_large.png',
    '2100': '21000_fog_light_large.png',
    '2101': '21010_fog_light_mostly_clear_large.png',
    '2102': '21020_fog_light_partly_cloudy_large.png',
    '2103': '21030_fog_light_mostly_cloudy_large.png',
    '2106': '21060_fog_mostly_clear_large.png',
    '2107': '21070_fog_partly_cloudy_large.png',
    '2108': '21080_fog_mostly_cloudy_large.png',
    '4000': '40000_drizzle_large.png',
    '4001': '40010_rain_large.png',
    '4200': '42000_rain_light_large.png',
    '4201': '42010_rain_heavy_large.png',
    '4202': '42020_rain_heavy_partly_cloudy_large.png',
    '4203': '42030_drizzle_mostly_clear_large.png',
    '4204': '42040_drizzle_partly_cloudy_large.png',
    '4205': '42050_drizzle_mostly_cloudy_large.png',
    '4208': '42080_rain_partly_cloudy_large.png',
    '4209': '42090_rain_mostly_clear_large.png',
    '4210': '42100_rain_mostly_cloudy_large.png',
    '4211': '42110_rain_heavy_mostly_clear_large.png',
    '4212': '42120_rain_heavy_mostly_cloudy_large.png',
    '4213': '42130_rain_light_mostly_clear_large.png',
    '4214': '42140_rain_light_partly_cloudy_large.png',
    '4215': '42150_rain_light_mostly_cloudy_large.png',
    '5000': '50000_snow_large.png',
    '5001': '50010_flurries_large.png',
    '5100': '51000_snow_light_large.png',
    '5101': '51010_snow_heavy_large.png',
    '5102': '51020_snow_light_mostly_clear_large.png',
    '5103': '51030_snow_light_partly_cloudy_large.png',
    '5104': '51040_snow_light_mostly_cloudy_large.png',
    '5105': '51050_snow_mostly_clear_large.png',
    '5106': '51060_snow_partly_cloudy_large.png',
    '5107': '51070_snow_mostly_cloudy_large.png',
    '5108': '51080_wintry_mix_large.png',
    '5110': '51100_wintry_mix_large.png',
    '5112': '51120_wintry_mix_large.png',
    '5114': '51140_wintry_mix_large.png',
    '5115': '51150_flurries_mostly_clear_large.png',
    '5116': '51160_flurries_partly_cloudy_large.png',
    '5117': '51170_flurries_mostly_cloudy_large.png',
    '5119': '51190_snow_heavy_mostly_clear_large.png',
    '5120': '51200_snow_heavy_partly_cloudy_large.png',
    '5121': '51210_snow_heavy_mostly_cloudy_large.png',
    '5122': '51220_wintry_mix_large.png',
    '6000': '60000_freezing_rain_drizzle_large.png',
    '6001': '60010_freezing_rain_large.png',
    '6002': '60020_freezing_rain_drizzle_partly_cloudy_large.png',
    '6003': '60030_freezing_rain_drizzle_mostly_clear_large.png',
    '6004': '60040_freezing_rain_drizzle_mostly_cloudy_large.png',
    '6200': '62000_freezing_rain_light_large.png',
    '6201': '62010_freezing_rain_heavy_large.png',
    '6202': '62020_freezing_rain_heavy_partly_cloudy_large.png',
    '6203': '62030_freezing_rain_light_partly_cloudy_large.png',
    '6204': '62040_wintry_mix_large.png',
    '6205': '62050_freezing_rain_light_mostly_clear_large.png',
    '6206': '62060_wintry_mix_large.png',
    '6207': '62070_freezing_rain_heavy_mostly_clear_large.png',
    '6208': '62080_freezing_rain_heavy_mostly_cloudy_large.png',
    '6209': '62090_freezing_rain_light_mostly_cloudy_large.png',
    '6212': '62120_wintry_mix_large.png',
    '6213': '62130_freezing_rain_mostly_clear_large.png',
    '6214': '62140_freezing_rain_partly_cloudy_large.png',
    '6215': '62150_freezing_rain_mostly_cloudy_large.png',
    '6220': '62200_wintry_mix_large.png',
    '6222': '62220_wintry_mix_large.png',
    '7000': '70000_ice_pellets_large.png',
    '7101': '71010_ice_pellets_heavy_large.png',
    '7102': '71020_ice_pellets_light_large.png',
    '7103': '71030_wintry_mix_large.png',
    '7105': '71050_wintry_mix_large.png',
    '7106': '71060_wintry_mix_large.png',
    '7107': '71070_ice_pellets_partly_cloudy_large.png',
    '7108': '71080_ice_pellets_mostly_clear_large.png',
    '7109': '71090_ice_pellets_mostly_cloudy_large.png',
    '7110': '71100_ice_pellets_light_mostly_clear_large.png',
    '7111': '71110_ice_pellets_light_partly_cloudy_large.png',
    '7112': '71120_ice_pellets_light_mostly_cloudy_large.png',
    '7113': '71130_ice_pellets_heavy_mostly_clear_large.png',
    '7114': '71140_ice_pellets_heavy_partly_cloudy_large.png',
    '7115': '71150_wintry_mix_large.png',
    '7116': '71160_ice_pellets_heavy_mostly_cloudy_large.png',
    '7117': '71170_wintry_mix_large.png',
    '8000': '80000_tstorm_large.png',
    '8001': '80010_tstorm_mostly_clear_large.png',
    '8002': '80020_tstorm_mostly_cloudy_large.png',
    '8003': '80030_tstorm_partly_cloudy_large.png'
};
