import{a as p,S as g,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="49135563-3e7c108cd0494cefc8419da61",y="https://pixabay.com/api/";function b(n){return p.get(y,{params:{key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r).catch(r=>{throw console.log("Error:",r.message),r})}const l=document.querySelector(".loader-container"),L=document.querySelector(".gallery"),S=new g(".gallery a",{captionsData:"alt",captionDelay:250});function q(n,r){const o=n.map(({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:m,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img 
              class="gallery-image" 
              src="${i}" 
              alt="${t}" 
              title="${t}"             />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${s}</p>
            <p class="info-item"><b>Views:</b> ${m}</p>
            <p class="info-item"><b>Comments:</b> ${d}</p>
            <p class="info-item"><b>Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("");r.innerHTML=o,S.refresh()}function w(){L.innerHTML=""}function $(){l.classList.remove("hidden")}function P(){l.classList.add("hidden")}const u=document.querySelector(".form");document.querySelector(".search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery");u.addEventListener("submit",v);function v(n){n.preventDefault();const r=n.currentTarget.elements["search-text"].value.trim();if(r===""){c.innerHTML="",a.error({message:"Please enter a search query!",position:"topRight"});return}w(),$(),b(r).then(o=>{if(o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}q(o.hits,c)}).catch(o=>{console.log(o),a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
