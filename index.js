/* empty css                      */import{a as f,S as d,i as l}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const m="54194588-981d51d18056996cd683f89a3",p="https://pixabay.com/api/";async function y(t){const s={key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(p,{params:s})).data}catch{throw new Error("Failed to fetch images from Pixabay API")}}const a=document.querySelector(".gallery");let i=null;function h(t){if(!a){console.error("Gallery container not found");return}const s=t.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img
          src="${e.webformatURL}"
          alt="${e.tags}"
          class="gallery-image"
          loading="lazy"
        />
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${e.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${e.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${e.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${e.downloads}
          </p>
        </div>
      </a>
    </li>
  `).join("");a.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){a&&(a.innerHTML=""),i&&(i.destroy(),i=null)}function b(){const t=document.querySelector(".loader");t&&t.classList.add("visible")}function u(){const t=document.querySelector(".loader");t&&t.classList.remove("visible")}const L=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');L.addEventListener("submit",v);async function v(t){t.preventDefault();const s=w.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}g(),b();try{const e=await y(s);if(u(),!e.hits||e.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}catch(e){u(),l.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Error fetching images:",e)}}
//# sourceMappingURL=index.js.map
