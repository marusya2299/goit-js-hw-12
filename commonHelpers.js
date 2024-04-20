import{a as g,S as h,i}from"./assets/vendor-6e0bf343.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const b="43475453-62a6130baf5d53b90b99f069a",v="https://pixabay.com/api/";async function w(r="",t=1,s=15){const a=new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"hotizontal",safesearch:!0,page:t,per_page:s});try{const e=await g.get(`${v}?${a.toString()}`);if(e.status!==200)throw new Error("Failed to fetch images");return e.data}catch{throw new Error("Failed to fetch images")}}function L(r,t){const s=r.map(a=>`
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
    `).join("");return t.insertAdjacentHTML("beforeend",s),t}const S=document.querySelector(".form"),u=document.querySelector(".input"),c=document.querySelector(".gallery"),P=new h(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),q=document.querySelector(".loader"),m=document.querySelector(".load-button");let n=1,d="";function p(r){q.style.display=r?"block":"none"}function f(r){m.style.display=r?"block":"none"}async function y(r,t=1){p(!0);try{const s=await w(r,t);if(s.totalHits===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(250, 250, 251, 1)",icon:"myIcon",iconColor:"rgba(250, 250, 251, 1)",color:"rgba(239, 64, 64, 1)",position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)"});return}else n*15>=s.totalHits?(f(!1),i.error({message:"We are sorry, but you have reached the end of search results",messageColor:"rgba(250, 250, 251, 1)",icon:"myIcon",iconColor:"rgba(250, 250, 251, 1)",color:"rgba(239, 64, 64, 1)",position:"topRight",progressBarColor:"rgba(181, 27, 27, 1)"})):f(!0);L(s.hits,c),P.refresh(),n++,C()}catch{i.error({message:"Failed to fetch images. Please try again!"})}finally{p(!1)}}function $(r){r.preventDefault();const t=u.value.trim();if(!t){i.warning({message:"The name is incorrect. Please try again"});return}d!==t&&(d=t,n=1,c.innerHTML=""),y(t),u.value="",c.innerHTML=""}function H(r){r.preventDefault(),y(d,n)}function C(){const r=document.querySelector(".gallery-item");if(n===2)return;const t=r.offsetHeight;window.scrollBy({top:t*2,behavior:"smooth"})}S.addEventListener("submit",$);m.addEventListener("click",H);
//# sourceMappingURL=commonHelpers.js.map
