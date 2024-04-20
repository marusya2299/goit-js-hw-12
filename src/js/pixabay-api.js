'use strict';

const API_KEY = '43475453-62a6130baf5d53b90b99f069a';
const BASE_URL = 'https://pixabay.com/api/';

export function imagesSearch(input = "") {
    const params = new URLSearchParams({
        key: API_KEY,
        q: input,
        image_type: "photo",
        orientation: "hotizontal",
        safesearch: true
    })
    return fetch(`${BASE_URL}?${params.toString()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
}