'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { imagesSearch } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".gallery");
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt'
});

const loader = document.querySelector(".loader");
const buttonLoad = document.querySelector(".load-button");

let page = 1;
let currentKeyWord = '';

function displayLoader(display) {
    loader.style.display = display ? 'block' : 'none';
}

function displayLoadButton(display) {
    buttonLoad.style.display = display ? 'block' : 'none';
}

async function loadImages(keyword, pageNumber = 1) {
    displayLoader(true);
    try {
        const data = await imagesSearch(keyword, pageNumber);
        if (data.totalHits === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                messageColor: 'rgba(250, 250, 251, 1)',
                icon: 'myIcon',
                iconColor: 'rgba(250, 250, 251, 1)',
                color: 'rgba(239, 64, 64, 1)',
                position: 'topRight',
                progressBarColor: 'rgba(181, 27, 27, 1)'
            });
            return;
        }
        else if(page * 15 >= data.totalHits) {
                displayLoadButton(false);
                iziToast.error({
                message: 'We are sorry, but you have reached the end of search results',
                messageColor: 'rgba(250, 250, 251, 1)',
                icon: 'myIcon',
                iconColor: 'rgba(250, 250, 251, 1)',
                color: 'rgba(239, 64, 64, 1)',
                position: 'topRight',
                progressBarColor: 'rgba(181, 27, 27, 1)'
            });
        }
        else {
            displayLoadButton(true);
        }

        createGallery(data.hits, gallery);
        lightbox.refresh();
        page++;
         scroll();
    } catch (error) {
        iziToast.error({ message: 'Failed to fetch images. Please try again!' });
    } finally {
        displayLoader(false);
    }
}

function formSubmit(event) {
    event.preventDefault();
    const keyword = input.value.trim();

    if (!keyword) {
        iziToast.warning({ message: 'The name is incorrect. Please try again' });
        return;
    }

    if (currentKeyWord !== keyword) {
        currentKeyWord = keyword;
        page = 1;
        gallery.innerHTML = '';
    }

    loadImages(keyword);
    input.value = '';
    gallery.innerHTML = '';
}

function loadMore(event) {
    event.preventDefault();
    loadImages(currentKeyWord, page);
}

function scroll() {
    const card = document.querySelector(".gallery-item");
    if (page === 2) return;
    const cardHeight = card.offsetHeight;
        window.scrollBy({
        top: cardHeight*2, 
        behavior: 'smooth'
    });
}

form.addEventListener('submit', formSubmit);
buttonLoad.addEventListener('click', loadMore);
