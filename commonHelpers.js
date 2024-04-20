import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const f="43475453-62a6130baf5d53b90b99f069a",m="https://pixabay.com/api/";function y(r=""){const t=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"hotizontal",safesearch:!0});return fetch(`${m}?${t.toString()}`).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()})}function g(r,t){const o=r.map(a=>`
        <li class="gallery-item">
            <a href="${a.largeImageURL}" class="gallery-link">
                <img src="${a.webformatURL}" alt="${a.tags}" class="gallery-image">
                <div class="description">
                    <div class="field">
                        <span class="label">Likes</span>
                        <span class="value" data-likes>${a.likes}</span>
                    </div>
                    <div class="field">
                        <span class="label">Views</span>
                        <span class="value" data-views>${a.views}</span>
                    </div>
                    <div class="field">
                        <span class="label">Comments</span>
                        <span class="value" data-comments>${a.comments}</span>
                    </div>
                    <div class="field">
                        <span class="label">Downloads</span>
                        <span class="value" data-downloads>${a.downloads}</span>
                    </div>
                </div>
            </a>
        </li>
    `).join("");return t.insertAdjacentHTML("beforeend",o),t}const u=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery"),h=new p(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),n=document.querySelector(".loader");function b(r){if(r.preventDefault(),n.style.display="flex",n.style.alignitems="center",c.value.trim()===""){l.warning({message:"The name is incorrect. Please try again"});return}d.innerHTML="",y(c.value.trim()).then(t=>{if(t.totalHits===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(250, 250, 251, 1)",icon:"myIcon",iconColor:"rgba(250, 250, 251, 1)",color:"rgba(239, 64, 64, 1)",position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)"}),n.style.display="none";return}g(t.hits,d),h.refresh()}).catch(()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!"})).finally(()=>{u.reset(),n.style.display="none"})}u.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
