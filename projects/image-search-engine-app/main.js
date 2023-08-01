const API = 'https://api.unsplash.com/search/photos'; // '?page=1&query=office';
const ACCESS_TOKEN = 'm6O5zSyWZi5uXTvCmRXOBin5_-gN1WncoABIsbzGNwY';
const API_URL = new URL('https://api.unsplash.com/search/photos');
API_URL.searchParams.append('client_id', ACCESS_TOKEN);
let currentPage;
let maxPages;
let query;
const images = document.querySelector('.images');
const showMore = document.querySelector('.show-more');

showMore.addEventListener('click', () => {
    currentPage++;
    processImages(query, currentPage);
});

document.forms['image-serach'].addEventListener('submit', (e) => {
    e.preventDefault();
    query = '';
    const queryValue = document.querySelector('#query').value;
    if (!queryValue) return;
    query = queryValue;
    serachImages(query);
});

function serachImages(query) {
    currentPage = 1;
    images.innerHTML = '';
    processImages(query, currentPage);
}

async function processImages(query, page) {
    const response = await callApi(query, page);
    maxPages = response.total_pages;
    const results = response.results;

    for (const result of results) {
        const src = result.urls.small;
        const img = document.createElement('img');
        img.src = src;
        img.alt = result.id;
        images.appendChild(img);
    }

    if (currentPage >= maxPages) {
        showMore.hidden = true;
    } else {
        showMore.hidden = false;
    }
}

async function callApi(query, page) {
    console.log(query);
    API_URL.searchParams.delete('query');
    API_URL.searchParams.append('page', page);
    API_URL.searchParams.append('query', query);
    API_URL.searchParams.append('orientation', 'landscape');
    API_URL.searchParams.append('per_page', 12);
    const response = await fetch(API_URL.href);
    return await response.json();
}
