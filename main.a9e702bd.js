parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".page__menu"),t=document.querySelector(".top-action__menu-btn"),n=document.querySelector(".page__body"),a=!1;window.location.hash="#";var o=document.querySelector(".header__content"),d=document.querySelector(".header__image"),i=document.querySelector(".header__image-description");function s(){o.classList.add("header__content--anim"),d.classList.add("header__image--anim"),i.classList.add("header__image-description--anim")}setTimeout(s,200),t.addEventListener("click",function(){window.location.hash=a?"#":"#menu"}),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?(document.body.classList.add("page__body--with-menu"),t.classList.add("top-action__menu-btn--open"),e.classList.add("page__menu--open"),n.classList.add("page__body--with-menu"),a=!0):(document.body.classList.remove("page__body--with-menu"),t.classList.remove("top-action__menu-btn--open"),e.classList.remove("page__menu--open"),n.classList.remove("page__body--with-menu"),a=!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a9e702bd.js.map