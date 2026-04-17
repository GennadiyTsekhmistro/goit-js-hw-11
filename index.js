import{a as f,S as p,i as a}from"./assets/vendor-D3Q8GMQW.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="ТВОЙ_API_KEY",h="https://pixabay.com/api/";function y(n){return f.get(h,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new p(".gallery a");function L(n){const o=n.map(t=>`
        <li>
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div>
            <p>Likes: ${t.likes}</p>
            <p>Views: ${t.views}</p>
            <p>Comments: ${t.comments}</p>
            <p>Downloads: ${t.downloads}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.target.elements["search-text"].value.trim();o&&(b(),w(),y(o).then(t=>{if(c(),t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}).catch(()=>{c(),a.error({message:"Something went wrong. Try again!",position:"topRight"})}),d.reset())}
//# sourceMappingURL=index.js.map
