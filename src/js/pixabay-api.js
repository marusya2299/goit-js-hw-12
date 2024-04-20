'use strict';

import axios from 'axios';

const API_KEY = '43475453-62a6130baf5d53b90b99f069a';
const BASE_URL = 'https://pixabay.com/api/';

export async function imagesSearch(input = "", page = 1, perPage = 15) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: input,
        image_type: "photo",
        orientation: "hotizontal",
        safesearch: true,
        page: page,
        per_page: perPage
    })

    try{
        const response = await axios.get(`${BASE_URL}?${params.toString()}`);
        if (response.status !== 200) {
            throw new Error('Failed to fetch images');
        }
        return response.data;
    }
    catch (error){
        throw new Error('Failed to fetch images');
    }
}