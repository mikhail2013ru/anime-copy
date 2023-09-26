/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/******************************************************************
  Theme Name: Anime
  Description: Anime video tamplate
  Author: Colorib
  Author URI: https://colorib.com/
  Version: 1.0
  Created: Colorib
******************************************************************/
/*------------------------------------------------------------------
[Table of contents]

1.  Template default CSS
	1.1	Variables
	1.2	Mixins
	1.3	Flexbox
	1.4	Reset
2.  Helper Css
3.  Header Section
4.  Hero Section
5.  Banner Section
6.  Product Section
7.  Intagram Section
8.  Latest Section
9.  Contact
10.  Footer Style
-------------------------------------------------------------------*/
/*----------------------------------------*/
/* Template default CSS
/*----------------------------------------*/
html,
body {
  height: 100%;
  font-family: "Mulish", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #0b0c2a;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #111111;
  font-weight: 400;
  font-family: "Mulish", sans-serif;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

p {
  font-size: 15px;
  font-family: "Mulish", sans-serif;
  color: #3d3d3d;
  font-weight: 400;
  line-height: 25px;
  margin: 0 0 15px 0;
}

img {
  max-width: 100%;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
  outline: none;
}

a:hover,
a:focus {
  text-decoration: none;
  outline: none;
  color: #ffffff;
}

ul,
ol {
  padding: 0;
  margin: 0;
}

/*---------------------
  Helper CSS
-----------------------*/
.section-title {
  margin-bottom: 30px;
}
.section-title h4,
.section-title h5 {
  color: #ffffff;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
  font-family: "Oswald", sans-serif;
}
.section-title h4:after,
.section-title h5:after {
  position: absolute;
  left: 0;
  top: -6px;
  height: 32px;
  width: 4px;
  background: #e53637;
  content: "";
}

.set-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}

.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white p,
.text-white span,
.text-white li,
.text-white a {
  color: #fff;
}

/* buttons */
.primary-btn {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
}
.primary-btn span {
  font-size: 18px;
  margin-left: 5px;
  position: relative;
  top: 3px;
}

.site-btn {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
}

/* Preloder */
.preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #000;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s;
}

.preloder.active {
  visibility: visible;
  opacity: 1;
}

.loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}
@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}
.spacial-controls {
  position: fixed;
  width: 111px;
  height: 91px;
  top: 0;
  right: 0;
  z-index: 999;
}

.spacial-controls .search-switch {
  display: block;
  height: 100%;
  padding-top: 30px;
  background: #323232;
  text-align: center;
  cursor: pointer;
}

.search-model {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s, z-index 0.3s;
  display: inline;
}

.search-model--active {
  z-index: 9999;
  opacity: 1;
}

.search-model-form {
  padding: 0 15px;
}

.search-model-form input {
  width: 500px;
  font-size: 40px;
  border: none;
  border-bottom: 2px solid #333;
  background: 0 0;
  color: #999;
}

.search-close-switch {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #333;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  font-size: 28px;
  line-height: 28px;
  top: 30px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/*---------------------
  Header
-----------------------*/
.header {
  background: #070720;
}

.header__logo {
  padding: 20px 0 17px;
}
.header__logo a {
  display: inline-block;
}

.header__menu {
  text-align: center;
}
.header__menu ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  margin-right: 16px;
}
.header__menu ul li.active a {
  background: #e53637;
  color: #ffffff;
}
.header__menu ul li:hover a {
  color: #ffffff;
}
.header__menu ul li:hover .dropdown {
  top: 62px;
  opacity: 1;
  visibility: visible;
}
.header__menu ul li:hover .dropdown li a {
  background: transparent;
}
.header__menu ul li:last-child {
  margin-right: 0;
}
.header__menu ul li .dropdown {
  position: absolute;
  left: 0;
  top: 82px;
  width: 150px;
  background: #ffffff;
  text-align: left;
  padding: 5px 0;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}
.header__menu ul li .dropdown li {
  display: block;
  margin-right: 0;
}
.header__menu ul li .dropdown li a {
  font-size: 14px;
  color: #111111;
  font-weight: 500;
  padding: 5px 20px;
}
.header__menu ul li a {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
  -webkit-transition: all, 0.5s;
  -moz-transition: all, 0.5s;
  -ms-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
  padding: 20px;
}
.header__menu ul li a span {
  position: relative;
  font-size: 17px;
  top: 2px;
}

.header__right {
  text-align: right;
  padding: 20px 0 15px;
}
.header__right a {
  display: inline-block;
  font-size: 18px;
  color: #ffffff;
  margin-right: 30px;
}
.header__right a:last-child {
  margin-right: 0;
}

.slicknav_menu {
  display: none;
}

/*---------------------
  Hero
-----------------------*/
.hero {
  padding-top: 50px;
}

.hero-box {
  position: relative;
}
.hero-box .hero__slider-pagination {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
}
.hero-box .hero__slider-pagination span {
  height: 8px;
  width: 8px;
  background: #b7b7b7;
  border-radius: 50%;
  margin-right: 10px;
  opacity: 1;
}
.hero-box .hero__slider-pagination span.active {
  background: #ffffff;
}
.hero-box .hero__slider-pagination span:last-child {
  margin-right: 0;
}
.hero-box .hero__slider-pagination span.swiper-pagination-bullet-active {
  background-color: white;
}
.hero-box .hero__slider-arrow {
  font-size: 36px;
  height: 66px;
  width: 66px;
  background: #0b0c2a;
  line-height: 66px;
  text-align: center;
  color: #ffffff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  z-index: 4;
  position: absolute;
  left: -33px;
  top: 50%;
  margin-top: -47px;
}
.hero-box .hero__slider-arrow.arrow__next {
  left: auto;
  right: -33px;
}
.hero-box .hero__slider-arrow:after {
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  height: 54px;
  width: 54px;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  z-index: -1;
  margin: 0 auto;
}
.hero-box .hero__slider-arrow span {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  display: block;
  z-index: 1;
}

.hero__items {
  padding: 250px 0 42px 50px;
  border-radius: 5px;
  position: relative;
}

.hero__text {
  position: relative;
  z-index: 9;
}
.hero__text .label {
  font-size: 13px;
  color: #e53637;
  background: #ffffff;
  padding: 5px 14px 3px;
  display: inline-block;
  position: relative;
  top: -100px;
  opacity: 0;
  -webkit-transition: all, 0.2s;
  -moz-transition: all, 0.2s;
  -ms-transition: all, 0.2s;
  -o-transition: all, 0.2s;
  transition: all, 0.2s;
}
.hero__text h2 {
  color: #ffffff;
  font-size: 42px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  line-height: 52px;
  margin-top: 35px;
  margin-bottom: 8px;
  position: relative;
  top: -100px;
  opacity: 0;
  -webkit-transition: all, 0.4s;
  -moz-transition: all, 0.4s;
  -ms-transition: all, 0.4s;
  -o-transition: all, 0.4s;
  transition: all, 0.4s;
}
.hero__text p {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 40px;
  position: relative;
  top: -100px;
  opacity: 0;
  -webkit-transition: all, 0.6s;
  -moz-transition: all, 0.6s;
  -ms-transition: all, 0.6s;
  -o-transition: all, 0.6s;
  transition: all, 0.6s;
}
.hero__text a {
  position: relative;
  top: -100px;
  opacity: 0;
  -webkit-transition: all, 0.8s;
  -moz-transition: all, 0.8s;
  -ms-transition: all, 0.8s;
  -o-transition: all, 0.8s;
  transition: all, 0.8s;
}
.hero__text a span {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px 0 0 4px;
  margin-right: 1px;
}
.hero__text a i {
  font-size: 20px;
  display: inline-block;
  background: #e53637;
  padding: 11px 5px 16px 8px;
  color: #ffffff;
  border-radius: 0 4px 4px 0;
}
.hero__text .show {
  opacity: 1;
}

.hero__slider {
  position: relative;
}
.hero__slider .swiper-slide-active .hero__text .label {
  top: 0;
  opacity: 1;
}
.hero__slider .swiper-slide-active .hero__text h2 {
  top: 0;
  opacity: 1;
}
.hero__slider .swiper-slide-active .hero__text p {
  top: 0;
  opacity: 1;
}
.hero__slider .swiper-slide-active .hero__text a {
  top: 0;
  opacity: 1;
}

/*---------------------
  Product
-----------------------*/
.product {
  padding-bottom: 60px;
  padding-top: 80px;
}

.product-page {
  padding-top: 60px;
}

.btn__all {
  text-align: right;
  margin-bottom: 30px;
}

.trending__product {
  margin-bottom: 50px;
}

.popular__product {
  margin-bottom: 50px;
}

.recent__product {
  margin-bottom: 50px;
}

.product__item {
  margin-bottom: 30px;
}

.product__item__pic {
  height: 325px;
  position: relative;
  border-radius: 5px;
}
.product__item__pic img {
  position: absolute;
}
.product__item__pic .ep {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.product__item__pic .comment {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  bottom: 10px;
}
.product__item__pic .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.product__item__text {
  padding-top: 20px;
}
.product__item__text ul {
  margin-bottom: 10px;
}
.product__item__text ul li {
  list-style: none;
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
  padding: 1px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  display: inline-block;
}
.product__item__text h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}

.product__sidebar .section-title h5 {
  color: #ffffff;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
}
.product__sidebar .section-title h5:after {
  position: absolute;
  left: 0;
  top: -6px;
  height: 32px;
  width: 4px;
  background: #e53637;
  content: "";
}

.product__sidebar__view {
  position: relative;
  margin-bottom: 80px;
}
.product__sidebar__view .filter__controls {
  position: absolute;
  right: 0;
  top: -5px;
}
.product__sidebar__view .filter__controls li {
  list-style: none;
  font-size: 13px;
  color: #b7b7b7;
  display: inline-block;
  margin-right: 7px;
  cursor: pointer;
}
.product__sidebar__view .filter__controls li.active {
  color: #ffffff;
}
.product__sidebar__view .filter__controls li:last-child {
  margin-right: 0;
}

.product__sidebar__view__item {
  height: 190px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;
  background-repeat: no-repeat;
  background-size: cover;
}
.product__sidebar__view__item::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 23%, rgba(255, 255, 255, 0) 100%);
  border-radius: 5px;
  z-index: 1;
}
.product__sidebar__view__item img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}
.product__sidebar__view__item .ep {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 2;
}
.product__sidebar__view__item .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
}
.product__sidebar__view__item h5 {
  position: absolute;
  left: 0;
  bottom: 25px;
  width: 100%;
  padding: 0 30px 0 20px;
  z-index: 2;
}
.product__sidebar__view__item h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}

.product__sidebar__comment {
  margin-bottom: 35px;
}

.product__sidebar__comment__item {
  margin-bottom: 20px;
  overflow: hidden;
}

.product__sidebar__comment__item__pic {
  float: left;
  margin-right: 15px;
}

.product__sidebar__comment__item__text {
  overflow: hidden;
}
.product__sidebar__comment__item__text ul {
  margin-bottom: 10px;
}
.product__sidebar__comment__item__text ul li {
  list-style: none;
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
  padding: 1px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  display: inline-block;
}
.product__sidebar__comment__item__text h5 {
  margin-bottom: 10px;
}
.product__sidebar__comment__item__text h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}
.product__sidebar__comment__item__text span {
  display: block;
  font-size: 13px;
  color: #b7b7b7;
}

.product__page__title {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  margin-bottom: 30px;
}
.product__page__title .section-title {
  margin-bottom: 0;
}
.product__page__title .product__page__filter {
  text-align: right;
}
.product__page__title .product__page__filter p {
  color: #ffffff;
  display: inline-block;
  margin-bottom: 0;
  margin-right: 16px;
}
.product__page__title .product__page__filter .nice-select {
  float: none;
  display: inline-block;
  font-size: 15px;
  color: #3d3d3d;
  font-weight: 700;
  border-radius: 0;
  padding-left: 15px;
  padding-right: 40px;
  height: 32px;
  line-height: 32px;
}
.product__page__title .product__page__filter .nice-select:after {
  border-bottom: 2px solid #111;
  border-right: 2px solid #111;
  height: 8px;
  top: 47%;
  width: 8px;
  right: 15px;
}
.product__page__title .product__page__filter .nice-select .list {
  margin-top: 0;
  border-radius: 0;
}

.product__pagination {
  padding-top: 15px;
}
.product__pagination a {
  display: inline-block;
  font-size: 15px;
  color: #b7b7b7;
  font-weight: 600;
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 50%;
  line-height: 48px;
  text-align: center;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}
.product__pagination a:hover {
  color: #ffffff;
}
.product__pagination a.current-page {
  border: 1px solid #ffffff;
}
.product__pagination a i {
  color: #b7b7b7;
  font-size: 15px;
}

/*---------------------
  Anime Details
-----------------------*/
.anime-details {
  padding-top: 60px;
}

.anime__details__content {
  margin-bottom: 65px;
}

.anime__details__text {
  position: relative;
}
.anime__details__text p {
  color: #b7b7b7;
  font-size: 18px;
  line-height: 30px;
}

.anime__details__pic {
  height: 440px;
  border-radius: 5px;
  position: relative;
}
.anime__details__pic .comment {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  bottom: 25px;
}
.anime__details__pic .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 25px;
}

.anime__details__title {
  margin-bottom: 20px;
}
.anime__details__title h3 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 13px;
}
.anime__details__title span {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
}

.anime__details__rating {
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
}
.anime__details__rating .rating i {
  font-size: 24px;
  color: #e89f12;
  display: inline-block;
}
.anime__details__rating span {
  display: block;
  font-size: 18px;
  color: #b7b7b7;
}

.anime__details__widget {
  margin-bottom: 15px;
}
.anime__details__widget ul {
  margin-bottom: 20px;
}
.anime__details__widget ul li {
  list-style: none;
  font-size: 15px;
  color: #ffffff;
  line-height: 30px;
  position: relative;
  padding-left: 18px;
}
.anime__details__widget ul li:before {
  position: absolute;
  left: 0;
  top: 12px;
  height: 6px;
  width: 6px;
  background: #b7b7b7;
  content: "";
}
.anime__details__widget ul li span {
  color: #b7b7b7;
  width: 115px;
  display: inline-block;
}

.anime__details__btn .follow-btn {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px;
  margin-right: 11px;
}
.anime__details__btn .watch-btn span {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px 0 0 4px;
  margin-right: 1px;
}
.anime__details__btn .watch-btn i {
  font-size: 20px;
  display: inline-block;
  background: #e53637;
  padding: 11px 5px 16px 8px;
  color: #ffffff;
  border-radius: 0 4px 4px 0;
}

.anime__details__review {
  margin-bottom: 55px;
}

.anime__review__item {
  overflow: hidden;
  margin-bottom: 15px;
}

.anime__review__item__pic {
  float: left;
  margin-right: 20px;
  position: relative;
}
.anime__review__item__pic:before {
  position: absolute;
  right: -30px;
  top: 15px;
  border-top: 15px solid transparent;
  border-left: 15px solid #1d1e39;
  content: "";
  transform: rotate(45deg);
}
.anime__review__item__pic img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.anime__review__item__text {
  overflow: hidden;
  background: #1d1e39;
  padding: 18px 30px 16px 20px;
  border-radius: 10px;
}
.anime__review__item__text h6 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}
.anime__review__item__text h6 span {
  color: #b7b7b7;
  font-weight: 400;
}
.anime__review__item__text p {
  color: #b7b7b7;
  line-height: 23px;
  margin-bottom: 0;
}

.anime__details__form form textarea {
  width: 100%;
  font-size: 15px;
  color: #b7b7b7;
  padding-left: 20px;
  padding-top: 12px;
  height: 110px;
  border: none;
  border-radius: 5px;
  resize: none;
  margin-bottom: 24px;
}
.anime__details__form form button {
  font-size: 11px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #e53637;
  border: none;
  padding: 10px 15px;
  border-radius: 2px;
}

/*---------------------
  Anime Watching
-----------------------*/
.anime__video__player {
  margin-bottom: 70px;
}
.anime__video__player .plyr--video {
  border-radius: 5px;
  background: transparent;
}
.anime__video__player .plyr audio,
.anime__video__player .plyr iframe,
.anime__video__player .plyr video {
  width: 102%;
}
.anime__video__player .plyr--full-ui.plyr--video .plyr__control--overlaid {
  display: block;
}
.anime__video__player .plyr--video .plyr__control.plyr__tab-focus,
.anime__video__player .plyr--video .plyr__control:hover,
.anime__video__player .plyr--video .plyr__control[aria-expanded=true] {
  background: transparent;
}
.anime__video__player .plyr--video .plyr__controls {
  background: transparent;
}
.anime__video__player .plyr--video .plyr__progress__buffer {
  color: transparent;
}
.anime__video__player .plyr--full-ui input[type=range] {
  color: #ffffff;
}
.anime__video__player .plyr__controls .plyr__controls__item.plyr__progress__container {
  position: absolute;
  left: 26px;
  bottom: 45px;
  width: calc(100% - 60px);
}
.anime__video__player .plyr__menu {
  margin-right: 70px;
}
.anime__video__player .plyr__controls .plyr__controls__item:first-child {
  position: absolute;
  left: 32px;
  bottom: 8px;
}
.anime__video__player .plyr__controls .plyr__controls__item:last-child {
  position: absolute;
  right: 32px;
  bottom: 8px;
}
.anime__video__player .plyr__volume {
  position: absolute;
  width: auto;
  left: 76px;
  bottom: 8px;
}
.anime__video__player .plyr__controls .plyr__controls__item.plyr__time {
  position: absolute;
  left: 106px;
  bottom: 12px;
}
.anime__video__player .plyr__control--overlaid {
  background: transparent;
  background: var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, transparent)));
}
.anime__video__player .plyr__control--overlaid svg {
  height: 60px;
  width: 50px;
}

.anime__details__episodes {
  margin-bottom: 35px;
}
.anime__details__episodes a {
  display: inline-block;
  font-size: 15px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 15px;
  margin-bottom: 20px;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}
.anime__details__episodes a:hover {
  color: #000000;
  background: #ffffff;
}

/*---------------------
  Breadcrumb
-----------------------*/
.breadcrumb-option {
  padding-top: 35px;
}

.breadcrumb__links a {
  font-size: 15px;
  color: #ffffff;
  margin-right: 18px;
  display: inline-block;
  position: relative;
}
.breadcrumb__links a i {
  margin-right: 5px;
  color: #e53637;
}
.breadcrumb__links a:after {
  position: absolute;
  right: -14px;
  top: 0;
  content: "\\f105";
  font-family: "FontAwesome";
}
.breadcrumb__links span {
  font-size: 15px;
  color: #b7b7b7;
  display: inline-block;
}

/*---------------------
    Normal Breadcrumb
-----------------------*/
.normal-breadcrumb {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.normal__breadcrumb__text h2 {
  color: #ffffff;
  font-size: 48px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  margin-bottom: 22px;
}
.normal__breadcrumb__text p {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 0;
}

/*---------------------
    Blog
-----------------------*/
.blog {
  padding-top: 70px;
  padding-bottom: 90px;
}

.blog__item {
  height: 580px;
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 10px;
}
.blog__item.small__item {
  height: 285px;
}
.blog__item.small__item .blog__item__text {
  padding: 0 30px;
}
.blog__item.small__item .blog__item__text p {
  margin-bottom: 5px;
}
.blog__item.small__item .blog__item__text h4 a {
  font-size: 20px;
  line-height: 30px;
}

.blog__item__text {
  position: absolute;
  left: 0;
  bottom: 25px;
  text-align: center;
  width: 100%;
  padding: 0 105px;
}
.blog__item__text p {
  color: #ffffff;
  margin-bottom: 12px;
}
.blog__item__text p span {
  color: #e53637;
  margin-right: 5px;
}
.blog__item__text h4 a {
  color: #ffffff;
  line-height: 34px;
}

/*---------------------
  Blog Details
-----------------------*/
.blog-details {
  padding-top: 70px;
}

.blog__details__title {
  text-align: center;
  margin-bottom: 70px;
}
.blog__details__title h6 {
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.blog__details__title h6 span {
  color: #b7b7b7;
  font-weight: 400;
  text-transform: none;
}
.blog__details__title h2 {
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 38px;
}
.blog__details__title .blog__details__social a {
  display: inline-block;
  font-size: 15px;
  color: #ffffff;
  padding: 16px 35px 14px 20px;
  border-radius: 2px;
  margin-right: 6px;
}
.blog__details__title .blog__details__social a:last-child {
  margin-right: 0;
}
.blog__details__title .blog__details__social a.facebook {
  background: #3b5998;
}
.blog__details__title .blog__details__social a.pinterest {
  background: #ca2027;
}
.blog__details__title .blog__details__social a.linkedin {
  background: #0372b1;
}
.blog__details__title .blog__details__social a.twitter {
  background: #39a1f2;
}
.blog__details__title .blog__details__social a i {
  margin-right: 6px;
}

.blog__details__pic {
  margin-bottom: 30px;
}
.blog__details__pic img {
  min-width: 100%;
}

.blog__details__text {
  margin-bottom: 40px;
}
.blog__details__text p {
  color: #ffffff;
  font-size: 17px;
  line-height: 30px;
}

.blog__details__item__text {
  margin-bottom: 42px;
}
.blog__details__item__text h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 35px;
}
.blog__details__item__text img {
  min-width: 100%;
  margin-bottom: 26px;
}
.blog__details__item__text p {
  color: #ffffff;
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 0;
}

.blog__details__tags {
  margin-bottom: 60px;
}
.blog__details__tags a {
  display: inline-block;
  color: #b7b7b7;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-right: 6px;
  padding: 6px 15px;
  margin-bottom: 10px;
}
.blog__details__tags a:last-child {
  margin-right: 0;
}

.blog__details__btns {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0 15px;
  margin-bottom: 65px;
}

.blog__details__btns__item {
  margin-bottom: 20px;
}
.blog__details__btns__item.next__btn {
  text-align: right;
}
.blog__details__btns__item h5 a {
  font-size: 17px;
  letter-spacing: 2px;
  color: #ffffff;
}
.blog__details__btns__item h5 a span {
  font-size: 30px;
  color: #b7b7b7;
  position: relative;
  top: 8px;
}

.blog__details__comment {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 30px;
}
.blog__details__comment h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 26px;
}

.blog__details__comment__item {
  margin-bottom: 40px;
  overflow: hidden;
}
.blog__details__comment__item.blog__details__comment__item--reply {
  padding-left: 112px;
}

.blog__details__comment__item__pic {
  float: left;
  margin-right: 40px;
}

.blog__details__comment__item__text {
  overflow: hidden;
}
.blog__details__comment__item__text span {
  font-size: 14px;
  color: #b7b7b7;
  display: block;
  margin-bottom: 10px;
}
.blog__details__comment__item__text h5 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}
.blog__details__comment__item__text p {
  color: #b7b7b7;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 25px;
}
.blog__details__comment__item__text a {
  display: inline-block;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 20px;
  letter-spacing: 2px;
  border-radius: 2px;
  margin-right: 14px;
  -webkit-transition: all, 0.3s;
  -moz-transition: all, 0.3s;
  -ms-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}
.blog__details__comment__item__text a:hover {
  background: #e53637;
}

.blog__details__form {
  padding-top: 50px;
}
.blog__details__form h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 26px;
}
.blog__details__form form input {
  height: 50px;
  width: 100%;
  background: #ffffff;
  font-size: 15px;
  color: #a6a6a6;
  padding-left: 20px;
  border-radius: 2px;
  border: none;
  margin-bottom: 30px;
}
.blog__details__form form input::placeholder {
  color: #a6a6a6;
}
.blog__details__form form textarea {
  height: 115px;
  width: 100%;
  background: #ffffff;
  font-size: 15px;
  color: #a6a6a6;
  padding-left: 20px;
  border-radius: 2px;
  padding-top: 12px;
  resize: none;
  border: none;
  margin-bottom: 34px;
}
.blog__details__form form textarea::placeholder {
  color: #a6a6a6;
}

/*---------------------
  Login
-----------------------*/
.login {
  padding-top: 130px;
  padding-bottom: 120px;
}

.login__form {
  position: relative;
  padding-left: 145px;
}
.login__form:after {
  position: absolute;
  right: -14px;
  top: -40px;
  height: 330px;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  content: "";
}
.login__form h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}
.login__form form .input__item {
  position: relative;
  width: 370px;
  margin-bottom: 20px;
}
.login__form form .input__item:before {
  position: absolute;
  left: 50px;
  top: 10px;
  height: 30px;
  width: 1px;
  background: #b7b7b7;
  content: "";
}
.login__form form .input__item input {
  height: 50px;
  width: 100%;
  font-size: 15px;
  color: #b7b7b7;
  background: #ffffff;
  border: none;
  padding-left: 76px;
}
.login__form form .input__item input::placeholder {
  color: #b7b7b7;
}
.login__form form .input__item span {
  color: #b7b7b7;
  font-size: 20px;
  position: absolute;
  left: 15px;
  top: 13px;
}
.login__form form button {
  border-radius: 0;
  margin-top: 10px;
}
.login__form .forget_pass {
  font-size: 15px;
  color: #ffffff;
  display: inline-block;
  position: absolute;
  right: 60px;
  bottom: 12px;
}

.login__register {
  padding-left: 30px;
}
.login__register h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}
.login__register .primary-btn {
  background: #e53637;
  padding: 12px 42px;
}

.login__social {
  padding-top: 52px;
}

.login__social__links {
  text-align: center;
}
.login__social__links span {
  color: #ffffff;
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.login__social__links ul li {
  list-style: none;
  margin-bottom: 15px;
}
.login__social__links ul li:last-child {
  margin-bottom: 0;
}
.login__social__links ul li a {
  color: #ffffff;
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 460px;
  padding: 14px 0;
  position: relative;
  margin: 0 auto;
}
.login__social__links ul li a.facebook {
  background: #4267b2;
}
.login__social__links ul li a.google {
  background: #ff4343;
}
.login__social__links ul li a.twitter {
  background: #1da1f2;
}
.login__social__links ul li a i {
  font-size: 20px;
  position: absolute;
  left: 32px;
  top: 14px;
}

/*---------------------
  Sign Up
-----------------------*/
.signup {
  padding-top: 130px;
  padding-bottom: 150px;
}
.signup .login__form:after {
  height: 450px;
}
.signup .login__form h5 {
  font-size: 15px;
  color: #ffffff;
  margin-top: 36px;
}
.signup .login__form h5 a {
  color: #e53637;
  font-weight: 700;
}
.signup .login__social__links {
  text-align: left;
  padding-left: 40px;
}
.signup .login__social__links h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}
.signup .login__social__links ul li a {
  margin: 0;
  text-align: center;
}

/*---------------------
  Footer
-----------------------*/
.footer {
  background: #070720;
  padding-top: 60px;
  padding-bottom: 40px;
  position: relative;
}

.page-up {
  position: absolute;
  left: 50%;
  top: -25px;
  margin-left: -25px;
}
.page-up a {
  display: inline-block;
  font-size: 36px;
  color: #ffffff;
  height: 50px;
  width: 50px;
  background: #e53637;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
}
.page-up a span {
  position: relative;
  top: 2px;
  left: -1px;
}

.footer__nav {
  text-align: center;
}
.footer__nav ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  margin-right: 40px;
}
.footer__nav ul li:last-child {
  margin-right: 0;
}
.footer__nav ul li a {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
}

.footer__copyright__text {
  color: #b7b7b7;
  margin-bottom: 0;
  text-align: right;
}
.footer__copyright__text a {
  color: #e53637;
}

/*--------------------------------- Responsive Media Quaries -----------------------------*/
@media only screen and (min-width: 1200px) and (max-width: 1300px) {
  .hero {
    overflow: hidden;
  }
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
/* Medium Device = 1200px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero {
    overflow: hidden;
  }
  .login__form {
    position: relative;
    padding-left: 32px;
  }
  .login__social__links ul li a {
    width: 380px;
  }
  .blog__item__text {
    padding: 0 50px;
  }
}
/* Tablet Device = 768px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero {
    overflow: hidden;
  }
  .header {
    position: relative;
  }
  .header .container {
    position: relative;
  }
  .header__right {
    position: absolute;
    right: 120px;
    top: -42px;
    padding: 0;
  }
  .header__menu {
    display: none;
  }
  .slicknav_menu {
    background: transparent;
    padding: 0;
    display: block;
  }
  .slicknav_nav {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: #ffffff;
    padding: 15px 30px;
    z-index: 9;
  }
  .slicknav_nav ul {
    margin: 0;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 7px 0;
    margin: 0;
    color: #111111;
    font-weight: 600;
  }
  .slicknav_btn {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background-color: #222;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .slicknav_nav .slicknav_arrow {
    color: #111111;
  }
  .slicknav_nav .slicknav_row:hover {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .slicknav_nav a:hover {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .product__sidebar {
    padding-top: 50px;
  }
  .footer__logo {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer__nav {
    margin-bottom: 15px;
  }
  .footer__copyright__text {
    text-align: center;
  }
  .anime__details__widget ul li span {
    width: 90px;
  }
  .anime__details__pic {
    margin-bottom: 40px;
  }
  .anime__details__sidebar {
    padding-top: 50px;
  }
  .login__form {
    padding-left: 0;
    margin-bottom: 40px;
  }
  .login__form:after {
    display: none;
  }
  .login__form form .input__item {
    width: auto;
  }
  .login__register {
    padding-left: 0;
  }
  .signup .login__social__links {
    padding-left: 0;
  }
}
/* Wide Mobile = 480px */
@media only screen and (max-width: 767px) {
  .hero {
    overflow: hidden;
  }
  .header {
    position: relative;
  }
  .header .container {
    position: relative;
  }
  .header__right {
    position: absolute;
    right: 120px;
    top: -42px;
    padding: 0;
  }
  .header__menu {
    display: none;
  }
  .slicknav_menu {
    background: transparent;
    padding: 0;
    display: block;
  }
  .slicknav_nav {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: #ffffff;
    padding: 15px 30px;
    z-index: 9;
  }
  .slicknav_nav ul {
    margin: 0;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 7px 0;
    margin: 0;
    color: #111111;
    font-weight: 600;
  }
  .slicknav_btn {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background-color: #222;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .slicknav_nav .slicknav_arrow {
    color: #111111;
  }
  .slicknav_nav .slicknav_row:hover {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .slicknav_nav a:hover {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .product__sidebar {
    padding-top: 50px;
  }
  .footer__logo {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer__nav {
    margin-bottom: 15px;
  }
  .footer__copyright__text {
    text-align: center;
  }
  .blog__details__title h2 {
    font-size: 34px;
    line-height: normal;
  }
  .anime__details__pic {
    margin-bottom: 40px;
  }
  .anime__details__sidebar {
    padding-top: 50px;
  }
  .btn__all {
    text-align: left;
  }
  .product__page__title .section-title {
    margin-bottom: 30px;
  }
  .product__page__title .product__page__filter {
    text-align: left;
  }
  .anime__details__rating {
    text-align: left;
    position: relative;
    margin-bottom: 20px;
  }
  .blog__details__social {
    overflow: hidden;
  }
  .blog__details__title .blog__details__social a {
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(50% - 10px);
    float: left;
  }
  .login__form {
    padding-left: 0;
    margin-bottom: 40px;
  }
  .login__form:after {
    display: none;
  }
  .login__form form .input__item {
    width: auto;
  }
  .signup .login__social__links {
    padding-left: 0;
  }
  .login__social__links ul li a {
    width: auto;
  }
  .blog__item__text {
    padding: 0 30px;
  }
  .login__register {
    padding-left: 0;
  }
  .product__sidebar__view .filter__controls li {
    margin-right: 2px;
  }
  .search-model-form input {
    width: 100%;
  }
}
/* Small Device = 320px */
@media only screen and (max-width: 479px) {
  .hero__slider.owl-carousel .owl-nav {
    display: none;
  }
  .hero__items {
    padding: 250px 0 42px 15px;
  }
  .hero__text h2 {
    font-size: 32px;
  }
  .footer__nav ul li {
    margin-right: 10px;
  }
  .anime__details__btn .follow-btn {
    padding: 14px 26px;
    margin-right: 11px;
    margin-bottom: 25px;
  }
  .anime__details__widget ul li span {
    width: 85px;
  }
  .anime__video__player .plyr__volume {
    left: 65px;
  }
  .anime__video__player .plyr__controls .plyr__controls__item.plyr__time {
    left: 95px;
  }
  .anime__video__player .plyr__menu {
    margin-right: 60px;
  }
  .blog__details__title h2 {
    font-size: 30px;
    line-height: normal;
  }
  .blog__details__title .blog__details__social a {
    padding: 16px 25px 14px 20px;
  }
  .blog__details__comment__item.blog__details__comment__item--reply {
    padding-left: 0;
  }
  .blog__details__comment__item__pic {
    margin-right: 25px;
  }
  .blog__details__comment__item__text a {
    margin-right: 6px;
  }
  .login__social__links ul li a i {
    left: 20px;
  }
  .login__form .forget_pass {
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: 25px;
  }
  .header__right a {
    margin-right: 10px;
  }
  .anime__review__item__text h6 span {
    font-size: 12px;
  }
  .anime__review__item__text {
    padding: 18px 20px 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/_base.scss","webpack://./src/sass/style.scss","webpack://./src/sass/_variable.scss","webpack://./src/sass/_header.scss","webpack://./src/sass/_mixins.scss","webpack://./src/sass/_hero.scss","webpack://./src/sass/_product.scss","webpack://./src/sass/_anime-details.scss","webpack://./src/sass/_anime-watching.scss","webpack://./src/sass/_breadcrumb.scss","webpack://./src/sass/_blog.scss","webpack://./src/sass/_blog-details.scss","webpack://./src/sass/_login.scss","webpack://./src/sass/_signup.scss","webpack://./src/sass/_footer.scss","webpack://./src/sass/_responsive.scss"],"names":[],"mappings":"AAAA;;;;;;;kEAAA;AAQA;;;;;;;;;;;;;;;;;oEAAA;AAmBA,2CAAA;AACA;2CAAA;AAEA;;EAEE,YAAA;EACA,iCAAA;EACA,mCAAA;EACA,mBAAA;ACAF;;ADGA;;;;;;EAME,SAAA;EACA,cAAA;EACA,gBAAA;EACA,iCAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;EACE,eAAA;EACA,iCAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;ACAF;;ADGA;EACE,eAAA;ACAF;;ADGA;;;;EAIE,aAAA;ACAF;;ADGA;;EAEE,qBAAA;EACA,aAAA;EACA,cEhGY;ADgGd;;ADGA;;EAEE,UAAA;EACA,SAAA;ACAF;;ADGA;;wBAAA;AAGA;EACE,mBAAA;ACAF;ADEE;;EAEE,cEjHU;EFkHV,gBAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,iCAAA;ACAJ;ADEI;;EACE,kBAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,mBEjIU;EFkIV,WAAA;ACCN;;ADIA;EACE,4BAAA;EACA,sBAAA;EACA,+BAAA;ACDF;;ADIA;EACE,kBAAA;EACA,qBAAA;ACDF;;ADIA;;;;;;;;;;EAUE,WAAA;ACDF;;ADIA,YAAA;AACA;EACE,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,cEnKY;EFoKZ,mBAAA;ACDF;ADGE;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;ACDJ;;ADKA;EACE,eAAA;EACA,cEhLY;EFiLZ,mBEnLc;EFoLd,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;ACFF;;ADKA,aAAA;AACA;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;ACFF;;ADKA;EACE,mBAAA;EACA,UAAA;ACFF;;ADKA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sCAAA;EACA,8CAAA;ACFF;;ADKA;EACE;IACE,+BAAA;IACA,uBAAA;IACA,yBAAA;IACA,8BAAA;ECFF;EDKA;IACE,iCAAA;IACA,yBAAA;IACA,yBAAA;IACA,8BAAA;ECHF;EDMA;IACE,iCAAA;IACA,yBAAA;IACA,yBAAA;IACA,8BAAA;ECJF;AACF;ADOA;EACE;IACE,+BAAA;IACA,yBAAA;IACA,8BAAA;ECLF;EDQA;IACE,iCAAA;IACA,yBAAA;IACA,8BAAA;ECNF;EDSA;IACE,iCAAA;IACA,yBAAA;IACA,8BAAA;ECPF;AACF;ADUA;EACE,eAAA;EACA,YAAA;EACA,YAAA;EACA,MAAA;EACA,QAAA;EACA,YAAA;ACRF;;ADWA;EACE,cAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;ACRF;;ADWA;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;EACA,sCAAA;EACA,eAAA;ACRF;;ADWA;EACE,aAAA;EACA,UAAA;ACRF;;ADWA;EACE,eAAA;ACRF;;ADWA;EACE,YAAA;EACA,eAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;EACA,WAAA;ACRF;;ADWA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,SAAA;EACA,eAAA;EACA,oBAAA;EACA,oBAAA;EACA,aAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;EACA,wBAAA;EACA,qBAAA;EACA,uBAAA;ACRF;;AErUA;;wBAAA;AAGA;EACI,mBAAA;AFwUJ;;AErUA;EACI,oBAAA;AFwUJ;AEtUI;EACI,qBAAA;AFwUR;;AEpUA;EACI,kBAAA;AFuUJ;AEnUQ;EACI,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;AFqUZ;AEjUgB;EACI,mBD7BJ;EC8BI,cD5BN;AD+Vd;AE7TgB;EAEI,cDpCN;ADkWd;AE3TgB;EACI,SAAA;EACA,UAAA;EACA,mBAAA;AF6TpB;AEzTwB;EACI,uBAAA;AF2T5B;AErTY;EACI,eAAA;AFuThB;AEpTY;EACI,kBAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,mBD9DF;EC+DE,gBAAA;EACA,cAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;ECnEZ,6BDoEY;ECnEZ,0BDmEY;EClEZ,yBDkEY;ECjEZ,wBDiEY;EChEZ,qBDgEY;AF0ThB;AExTgB;EACI,cAAA;EACA,eAAA;AF0TpB;AExToB;EACI,eAAA;EACA,cD3ER;EC4EQ,gBAAA;EACA,iBAAA;AF0TxB;AErTY;EACI,eAAA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;ECvFZ,6BDwFY;ECvFZ,0BDuFY;ECtFZ,yBDsFY;ECrFZ,wBDqFY;ECpFZ,qBDoFY;EACA,aAAA;AF2ThB;AEzTgB;EACI,kBAAA;EACA,eAAA;EACA,QAAA;AF2TpB;;AEpTA;EACI,iBAAA;EACA,oBAAA;AFuTJ;AErTI;EACI,qBAAA;EACA,eAAA;EACA,cD5GM;EC6GN,kBAAA;AFuTR;AErTQ;EACI,eAAA;AFuTZ;;AElTA;EACI,aAAA;AFqTJ;;AI7aA;;wBAAA;AAIA;EACI,iBAAA;AJ+aJ;;AI5aA;EACI,kBAAA;AJ+aJ;AI7aI;EACI,kBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;AJ+aR;AI7aQ;EACI,WAAA;EACA,UAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AJ+aZ;AI7aY;EACI,mBAAA;AJ+ahB;AI5aY;EACI,eAAA;AJ8ahB;AI3aY;EACI,uBAAA;AJ6ahB;AIxaI;EACI,eAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cH7CM;EG8CN,gCAAA;EACA,wBAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,iBAAA;AJ0aR;AIxaQ;EACI,UAAA;EACA,YAAA;AJ0aZ;AIvaQ;EACI,kBAAA;EACA,QAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,oCAAA;EACA,WAAA;EACA,WAAA;EACA,cAAA;AJyaZ;AItaQ;EACI,iCAAA;EACA,yBAAA;EACA,cAAA;EACA,UAAA;AJwaZ;;AInaA;EACI,0BAAA;EACA,kBAAA;EACA,kBAAA;AJsaJ;;AInaA;EACI,kBAAA;EACA,UAAA;AJsaJ;AIpaI;EACI,eAAA;EACA,cHhGQ;EGiGR,mBH/FM;EGgGN,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EDpGJ,6BCqGI;EDpGJ,0BCoGI;EDnGJ,yBCmGI;EDlGJ,wBCkGI;EDjGJ,qBCiGI;AJ0aR;AIvaI;EACI,cHzGM;EG0GN,eAAA;EACA,iCAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EDlHJ,6BCmHI;EDlHJ,0BCkHI;EDjHJ,yBCiHI;EDhHJ,wBCgHI;ED/GJ,qBC+GI;AJ6aR;AI1aI;EACI,cHvHM;EGwHN,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;ED5HJ,6BC6HI;ED5HJ,0BC4HI;ED3HJ,yBC2HI;ED1HJ,wBC0HI;EDzHJ,qBCyHI;AJgbR;AI7aI;EACI,kBAAA;EACA,WAAA;EACA,UAAA;EDnIJ,6BCoII;EDnIJ,0BCmII;EDlIJ,yBCkII;EDjIJ,wBCiII;EDhIJ,qBCgII;AJmbR;AIjbQ;EACI,eAAA;EACA,cHxIE;EGyIF,mBH3II;EG4IJ,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,0BAAA;EACA,iBAAA;AJmbZ;AIhbQ;EACI,eAAA;EACA,qBAAA;EACA,mBHxJI;EGyJJ,0BAAA;EACA,cHxJE;EGyJF,0BAAA;AJkbZ;AI9aI;EACI,UAAA;AJgbR;;AI5aA;EACI,kBAAA;AJ+aJ;AIzagB;EACI,MAAA;EACA,UAAA;AJ2apB;AIxagB;EACI,MAAA;EACA,UAAA;AJ0apB;AIvagB;EACI,MAAA;EACA,UAAA;AJyapB;AItagB;EACI,MAAA;EACA,UAAA;AJwapB;;AKpmBA;;wBAAA;AAGA;EACE,oBAAA;EACA,iBAAA;ALumBF;;AKnmBA;EACE,iBAAA;ALsmBF;;AKnmBA;EACE,iBAAA;EACA,mBAAA;ALsmBF;;AKnmBA;EACE,mBAAA;ALsmBF;;AKnmBA;EACE,mBAAA;ALsmBF;;AKnmBA;EACE,mBAAA;ALsmBF;;AKnmBA;EACE,mBAAA;ALsmBF;;AKnmBA;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;ALsmBF;AKpmBE;EACE,kBAAA;ALsmBJ;AKnmBE;EACE,eAAA;EACA,cJ3CU;EI4CV,mBJ9CY;EI+CZ,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;ALqmBJ;AKlmBE;EACE,eAAA;EACA,cJvDU;EIwDV,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;ALomBJ;AKjmBE;EACE,eAAA;EACA,cJnEU;EIoEV,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;ALmmBJ;;AK/lBA;EACE,iBAAA;ALkmBF;AKhmBE;EACE,mBAAA;ALkmBJ;AKhmBI;EACE,gBAAA;EACA,eAAA;EACA,cJvFQ;EIwFR,gBAAA;EACA,iBAAA;EACA,oCAAA;EACA,mBAAA;EACA,qBAAA;ALkmBN;AK5lBI;EACE,cJnGQ;EIoGR,gBAAA;EACA,iBAAA;AL8lBN;;AKrlBI;EACE,cJ/GQ;EIgHR,gBAAA;EACA,iCAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;ALwlBN;AKtlBM;EACE,kBAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,mBJ/HQ;EIgIR,WAAA;ALwlBR;;AKllBA;EACE,kBAAA;EACA,mBAAA;ALqlBF;AKnlBE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;ALqlBJ;AKnlBI;EACE,gBAAA;EACA,eAAA;EACA,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;ALqlBN;AKnlBM;EACE,cJtJM;AD2uBd;AKllBM;EACE,eAAA;ALolBR;;AK9kBA;EACE,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,4BAAA;EACA,sBAAA;ALilBF;AK/kBE;EACE,WAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,wBAAA;EACA,6GAAA;EACA,kBAAA;EACA,UAAA;ALilBJ;AK9kBE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;ALglBJ;AK7kBE;EACE,eAAA;EACA,cJjMU;EIkMV,mBJpMY;EIqMZ,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;AL+kBJ;AK5kBE;EACE,eAAA;EACA,cJ9MU;EI+MV,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AL8kBJ;AK3kBE;EACE,kBAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,UAAA;AL6kBJ;AK3kBI;EACE,cJlOQ;EImOR,gBAAA;EACA,iBAAA;AL6kBN;;AKxkBA;EACE,mBAAA;AL2kBF;;AKxkBA;EACE,mBAAA;EACA,gBAAA;AL2kBF;;AKxkBA;EACE,WAAA;EACA,kBAAA;AL2kBF;;AKxkBA;EACE,gBAAA;AL2kBF;AKzkBE;EACE,mBAAA;AL2kBJ;AKzkBI;EACE,gBAAA;EACA,eAAA;EACA,cJhQQ;EIiQR,gBAAA;EACA,iBAAA;EACA,oCAAA;EACA,mBAAA;EACA,qBAAA;AL2kBN;AKvkBE;EACE,mBAAA;ALykBJ;AKvkBI;EACE,cJ7QQ;EI8QR,gBAAA;EACA,iBAAA;ALykBN;AKrkBE;EACE,cAAA;EACA,eAAA;EACA,cAAA;ALukBJ;;AKnkBA;EACE,iDAAA;EACA,oBAAA;EACA,mBAAA;ALskBF;AKpkBE;EACE,gBAAA;ALskBJ;AKnkBE;EACE,iBAAA;ALqkBJ;AKnkBI;EACE,cJvSQ;EIwSR,qBAAA;EACA,gBAAA;EACA,kBAAA;ALqkBN;AKlkBI;EACE,WAAA;EACA,qBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;ALokBN;AKlkBM;EACE,6BAAA;EACA,4BAAA;EACA,WAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;ALokBR;AKjkBM;EACE,aAAA;EACA,gBAAA;ALmkBR;;AK7jBA;EACE,iBAAA;ALgkBF;AK9jBE;EACE,qBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EFvVA,6BEwVA;EFvVA,0BEuVA;EFtVA,yBEsVA;EFrVA,wBEqVA;EFpVA,qBEoVA;ALokBJ;AKlkBI;EACE,cAAA;ALokBN;AKjkBI;EACE,yBAAA;ALmkBN;AKhkBI;EACE,cAAA;EACA,eAAA;ALkkBN;;AMx6BA;;wBAAA;AAGA;EACI,iBAAA;AN26BJ;;AMx6BA;EACI,mBAAA;AN26BJ;;AMx6BA;EACI,kBAAA;AN26BJ;AMz6BI;EACI,cAAA;EACA,eAAA;EACA,iBAAA;AN26BR;;AMv6BA;EACI,aAAA;EACA,kBAAA;EACA,kBAAA;AN06BJ;AMx6BI;EACI,eAAA;EACA,cL1BM;EK2BN,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;AN06BR;AMv6BI;EACI,eAAA;EACA,cLtCM;EKuCN,mBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;ANy6BR;;AMr6BA;EACI,mBAAA;ANw6BJ;AMt6BI;EACI,cLrDM;EKsDN,gBAAA;EACA,mBAAA;ANw6BR;AMr6BI;EACI,eAAA;EACA,cAAA;EACA,cAAA;ANu6BR;;AMn6BA;EACI,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,MAAA;ANs6BJ;AMl6BQ;EACI,eAAA;EACA,cAAA;EACA,qBAAA;ANo6BZ;AMh6BI;EACI,cAAA;EACA,eAAA;EACA,cAAA;ANk6BR;;AM95BA;EACI,mBAAA;ANi6BJ;AM/5BI;EACI,mBAAA;ANi6BR;AM/5BQ;EACI,gBAAA;EACA,eAAA;EACA,cLhGE;EKiGF,iBAAA;EACA,kBAAA;EACA,kBAAA;ANi6BZ;AM/5BY;EACI,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,mBAAA;EACA,WAAA;ANi6BhB;AM95BY;EACI,cAAA;EACA,YAAA;EACA,qBAAA;ANg6BhB;;AMx5BI;EACI,eAAA;EACA,cL5HM;EK6HN,mBL/HQ;EKgIR,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;AN25BR;AMt5BQ;EACI,eAAA;EACA,cL3IE;EK4IF,mBL9II;EK+IJ,qBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,0BAAA;EACA,iBAAA;ANw5BZ;AMr5BQ;EACI,eAAA;EACA,qBAAA;EACA,mBL3JI;EK4JJ,0BAAA;EACA,cL3JE;EK4JF,0BAAA;ANu5BZ;;AMl5BA;EACI,mBAAA;ANq5BJ;;AMl5BA;EACI,gBAAA;EACA,mBAAA;ANq5BJ;;AMl5BA;EACI,WAAA;EACA,kBAAA;EACA,kBAAA;ANq5BJ;AMn5BI;EACI,kBAAA;EACA,YAAA;EACA,SAAA;EACA,kCAAA;EACA,+BAAA;EACA,WAAA;EACA,wBAAA;ANq5BR;AMl5BI;EACI,YAAA;EACA,WAAA;EACA,kBAAA;ANo5BR;;AMh5BA;EACG,gBAAA;EACC,mBAAA;EACA,4BAAA;EACA,mBAAA;ANm5BJ;AMj5BI;EACI,cLvMM;EKwMN,gBAAA;EACA,mBAAA;ANm5BR;AMj5BQ;EACI,cAAA;EACA,gBAAA;ANm5BZ;AM/4BI;EACI,cAAA;EACA,iBAAA;EACA,gBAAA;ANi5BR;;AMz4BQ;EACI,WAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AN44BZ;AMz4BQ;EACI,eAAA;EACA,cL3OE;EK4OF,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBLjPI;EKkPJ,YAAA;EACA,kBAAA;EACA,kBAAA;AN24BZ;;AO/nCA;;wBAAA;AAGA;EACE,mBAAA;APkoCF;AOhoCE;EACE,kBAAA;EACA,uBAAA;APkoCJ;AO/nCE;;;EAGE,WAAA;APioCJ;AO9nCE;EACE,cAAA;APgoCJ;AO7nCE;;;EAGE,uBAAA;AP+nCJ;AO5nCE;EACE,uBAAA;AP8nCJ;AO3nCE;EACE,kBAAA;AP6nCJ;AO1nCE;EACE,cNlCU;AD8pCd;AOznCE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,wBAAA;AP2nCJ;AOxnCE;EACE,kBAAA;AP0nCJ;AOvnCE;EACE,kBAAA;EACA,UAAA;EACA,WAAA;APynCJ;AOtnCE;EACE,kBAAA;EACA,WAAA;EACA,WAAA;APwnCJ;AOrnCE;EACE,kBAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;APunCJ;AOpnCE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;APsnCJ;AOnnCE;EACE,uBAAA;EACA,mHAAA;APqnCJ;AOnnCI;EACE,YAAA;EACA,WAAA;APqnCN;;AOhnCA;EACE,mBAAA;APmnCF;AOjnCE;EACE,qBAAA;EACA,eAAA;EACA,cN1FU;EM2FV,oCAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EJ/FA,6BIgGA;EJ/FA,0BI+FA;EJ9FA,yBI8FA;EJ7FA,wBI6FA;EJ5FA,qBI4FA;APunCJ;AOrnCI;EACE,cNhGQ;EMiGR,mBNpGQ;AD2tCd;;AQ7tCA;;wBAAA;AAGA;EACI,iBAAA;ARguCJ;;AQ3tCI;EACI,eAAA;EACA,cPTM;EOUN,kBAAA;EACA,qBAAA;EACA,kBAAA;AR8tCR;AQ5tCQ;EACI,iBAAA;EACA,cPlBI;ADgvChB;AQ3tCQ;EACI,kBAAA;EACA,YAAA;EACA,MAAA;EACA,gBAAA;EACA,0BAAA;AR6tCZ;AQztCI;EACI,eAAA;EACA,cAAA;EACA,qBAAA;AR2tCR;;AQvtCA;;wBAAA;AAGA;EACI,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AR0tCJ;;AQrtCI;EACI,cPhDM;EOiDN,eAAA;EACA,iCAAA;EACA,gBAAA;EACA,mBAAA;ARwtCR;AQrtCI;EACI,cPxDM;EOyDN,eAAA;EACA,gBAAA;ARutCR;;ASnxCA;;wBAAA;AAGA;EACI,iBAAA;EACA,oBAAA;ATsxCJ;;ASnxCA;EACI,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,mBAAA;ATsxCJ;ASpxCI;EACI,aAAA;ATsxCR;ASpxCQ;EACI,eAAA;ATsxCZ;ASpxCY;EACI,kBAAA;ATsxChB;ASjxCgB;EACI,eAAA;EACA,iBAAA;ATmxCpB;;AS5wCA;EACI,kBAAA;EACA,OAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;AT+wCJ;AS7wCI;EACI,cR3CM;EQ4CN,mBAAA;AT+wCR;AS7wCQ;EACI,cRjDI;EQkDJ,iBAAA;AT+wCZ;ASzwCQ;EACI,cRvDE;EQwDF,iBAAA;AT2wCZ;;AUr0CA;;wBAAA;AAGA;EACI,iBAAA;AVw0CJ;;AUr0CA;EACI,kBAAA;EACA,mBAAA;AVw0CJ;AUt0CI;EACI,eAAA;EACA,cTXM;ESYN,gBAAA;EACA,yBAAA;EACA,mBAAA;AVw0CR;AUt0CQ;EACI,cAAA;EACA,gBAAA;EACA,oBAAA;AVw0CZ;AUp0CI;EACI,cTxBM;ESyBN,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AVs0CR;AUj0CQ;EACI,qBAAA;EACA,eAAA;EACA,cTpCE;ESqCF,4BAAA;EACA,kBAAA;EACA,iBAAA;AVm0CZ;AUj0CY;EACI,eAAA;AVm0ChB;AUh0CY;EACI,mBAAA;AVk0ChB;AU/zCY;EACI,mBAAA;AVi0ChB;AU9zCY;EACI,mBAAA;AVg0ChB;AU7zCY;EACI,mBAAA;AV+zChB;AU5zCY;EACI,iBAAA;AV8zChB;;AUxzCA;EACI,mBAAA;AV2zCJ;AUzzCI;EACI,eAAA;AV2zCR;;AUvzCA;EACI,mBAAA;AV0zCJ;AUxzCI;EACI,cThFM;ESiFN,eAAA;EACA,iBAAA;AV0zCR;;AUtzCA;EACI,mBAAA;AVyzCJ;AUvzCI;EACI,cT1FM;ES2FN,gBAAA;EACA,mBAAA;AVyzCR;AUtzCI;EACI,eAAA;EACA,mBAAA;AVwzCR;AUrzCI;EACI,cTrGM;ESsGN,eAAA;EACA,iBAAA;EACA,gBAAA;AVuzCR;;AUnzCA;EACI,mBAAA;AVszCJ;AUpzCI;EACI,qBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,oCAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;AVszCR;AUpzCQ;EACI,eAAA;AVszCZ;;AUjzCA;EACI,8CAAA;EACA,iDAAA;EACA,oBAAA;EACA,mBAAA;AVozCJ;;AUjzCA;EACI,mBAAA;AVozCJ;AUlzCI;EACI,iBAAA;AVozCR;AU/yCQ;EACI,eAAA;EACA,mBAAA;EACA,cTrJE;ADs8Cd;AU/yCY;EACI,eAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;AVizChB;;AU3yCA;EACI,iDAAA;EACA,oBAAA;AV8yCJ;AU5yCI;EACI,cTtKM;ESuKN,gBAAA;EACA,mBAAA;AV8yCR;;AU1yCA;EACI,mBAAA;EACA,gBAAA;AV6yCJ;AU3yCI;EACI,mBAAA;AV6yCR;;AUzyCA;EACI,WAAA;EACA,kBAAA;AV4yCJ;;AUzyCA;EACI,gBAAA;AV4yCJ;AU1yCI;EACI,eAAA;EACA,cAAA;EACA,cAAA;EACA,mBAAA;AV4yCR;AUzyCI;EACI,cTrMM;ESsMN,gBAAA;EACA,mBAAA;AV2yCR;AUxyCI;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;AV0yCR;AUvyCI;EACI,qBAAA;EACA,cTnNM;ESoNN,oCAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EPxNJ,6BOyNI;EPxNJ,0BOwNI;EPvNJ,yBOuNI;EPtNJ,wBOsNI;EPrNJ,qBOqNI;AV6yCR;AU3yCQ;EACI,mBT9NI;AD2gDhB;;AUxyCA;EACI,iBAAA;AV2yCJ;AUzyCI;EACI,cTrOM;ESsON,gBAAA;EACA,mBAAA;AV2yCR;AUtyCQ;EACI,YAAA;EACA,WAAA;EACA,mBT/OE;ESgPF,eAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;AVwyCZ;AUtyCY;EACI,cAAA;AVwyChB;AUpyCQ;EACI,aAAA;EACA,WAAA;EACA,mBT/PE;ESgQF,eAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;AVsyCZ;AUpyCY;EACI,cAAA;AVsyChB;;AWljDA;;wBAAA;AAGA;EACI,kBAAA;EACA,qBAAA;AXqjDJ;;AWljDA;EACI,kBAAA;EACA,mBAAA;AXqjDJ;AWnjDI;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,UAAA;EACA,oCAAA;EACA,WAAA;AXqjDR;AWljDI;EACI,cVrBM;EUsBN,gBAAA;EACA,iCAAA;EACA,mBAAA;AXojDR;AW/iDQ;EACI,kBAAA;EACA,YAAA;EACA,mBAAA;AXijDZ;AW/iDY;EACI,kBAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,WAAA;AXijDhB;AW9iDY;EACI,YAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,mBVjDF;EUkDE,YAAA;EACA,kBAAA;AXgjDhB;AW9iDgB;EACI,cAAA;AXgjDpB;AW5iDY;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;AX8iDhB;AW1iDQ;EACI,gBAAA;EACA,gBAAA;AX4iDZ;AWxiDI;EACI,eAAA;EACA,cV3EM;EU4EN,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AX0iDR;;AWtiDA;EACI,kBAAA;AXyiDJ;AWviDI;EACI,cVvFM;EUwFN,gBAAA;EACA,iCAAA;EACA,mBAAA;AXyiDR;AWtiDI;EACI,mBVhGQ;EUiGR,kBAAA;AXwiDR;;AWpiDA;EACI,iBAAA;AXuiDJ;;AWpiDA;EACI,kBAAA;AXuiDJ;AWriDI;EACI,cV3GM;EU4GN,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;AXuiDR;AWliDQ;EACI,gBAAA;EACA,mBAAA;AXoiDZ;AWliDY;EACI,gBAAA;AXoiDhB;AWjiDY;EACI,cV/HF;EUgIE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;AXmiDhB;AWjiDgB;EACI,mBAAA;AXmiDpB;AWhiDgB;EACI,mBAAA;AXkiDpB;AW/hDgB;EACI,mBAAA;AXiiDpB;AW9hDgB;EACI,eAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;AXgiDpB;;AY5rDA;;wBAAA;AAGA;EACE,kBAAA;EACA,qBAAA;AZ+rDF;AY3rDM;EACI,aAAA;AZ6rDV;AY1rDM;EACE,eAAA;EACA,cXbM;EWcN,gBAAA;AZ4rDR;AY1rDQ;EACE,cXnBM;EWoBN,gBAAA;AZ4rDV;AYvrDE;EACE,gBAAA;EACA,kBAAA;AZyrDJ;AYvrDM;EACE,cX5BM;EW6BN,gBAAA;EACA,iCAAA;EACA,mBAAA;AZyrDR;AYlrDQ;EACE,SAAA;EACA,kBAAA;AZorDV;;Aa9tDA;;wBAAA;AAGA;EACE,mBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AbiuDF;;Aa9tDA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AbiuDF;Aa/tDE;EACE,qBAAA;EACA,eAAA;EACA,cZjBU;EYkBV,YAAA;EACA,WAAA;EACA,mBZtBY;EYuBZ,iBAAA;EACA,kBAAA;EACA,kBAAA;AbiuDJ;Aa/tDI;EACE,kBAAA;EACA,QAAA;EACA,UAAA;AbiuDN;;Aa5tDA;EACE,kBAAA;Ab+tDF;Aa3tDI;EACE,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;Ab6tDN;Aa3tDM;EACE,eAAA;Ab6tDR;Aa1tDM;EACE,eAAA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;Ab4tDR;;AattDA;EACE,cAAA;EACA,gBAAA;EACA,iBAAA;AbytDF;AavtDE;EACE,cZlEY;AD2xDhB;;Ac3xDA,2FAAA;AACA;EACE;IACE,gBAAA;Ed8xDF;AACF;Ac3xDA;EACE;IACE,iBAAA;Ed6xDF;AACF;Ac1xDA,2BAAA;AACA;EACE;IACE,gBAAA;Ed4xDF;EczxDA;IACE,kBAAA;IACA,kBAAA;Ed2xDF;EcxxDA;IACE,YAAA;Ed0xDF;EcvxDA;IACE,eAAA;EdyxDF;AACF;ActxDA,0BAAA;AACA;EACE;IACE,gBAAA;EdwxDF;EcrxDA;IACE,kBAAA;EduxDF;EcrxDE;IACE,kBAAA;EduxDJ;EcnxDA;IACE,kBAAA;IACA,YAAA;IACA,UAAA;IACA,UAAA;EdqxDF;EclxDA;IACE,aAAA;EdoxDF;EcjxDA;IACE,uBAAA;IACA,UAAA;IACA,cAAA;EdmxDF;EchxDA;IACE,kBAAA;IACA,OAAA;IACA,SAAA;IACA,WAAA;IACA,mBbnEU;IaoEV,kBAAA;IACA,UAAA;EdkxDF;Ec/wDA;IACE,SAAA;EdixDF;Ec9wDA;;IAEE,cAAA;IACA,SAAA;IACA,cb/EY;IagFZ,gBAAA;EdgxDF;Ec7wDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,sBAAA;IACA,kBAAA;IACA,QAAA;IACA,QAAA;Ed+wDF;Ec5wDA;IACE,cb9FY;ED42Dd;Ec3wDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cbtGY;EDm3Dd;Ec1wDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cb9GY;ED03Dd;EczwDA;IACE,iBAAA;Ed2wDF;EcxwDA;IACE,kBAAA;IACA,mBAAA;Ed0wDF;EcvwDA;IACE,mBAAA;EdywDF;EctwDA;IACE,kBAAA;EdwwDF;EcrwDA;IACE,WAAA;EduwDF;EcpwDA;IACE,mBAAA;EdswDF;EcnwDA;IACE,iBAAA;EdqwDF;EclwDA;IACE,eAAA;IACA,mBAAA;EdowDF;EclwDE;IACE,aAAA;EdowDJ;EchwDA;IACE,WAAA;EdkwDF;Ec/vDA;IACE,eAAA;EdiwDF;Ec9vDA;IACE,eAAA;EdgwDF;AACF;Ac7vDA,wBAAA;AACA;EACE;IACE,gBAAA;Ed+vDF;Ec5vDA;IACE,kBAAA;Ed8vDF;Ec5vDE;IACE,kBAAA;Ed8vDJ;Ec1vDA;IACE,kBAAA;IACA,YAAA;IACA,UAAA;IACA,UAAA;Ed4vDF;EczvDA;IACE,aAAA;Ed2vDF;EcxvDA;IACE,uBAAA;IACA,UAAA;IACA,cAAA;Ed0vDF;EcvvDA;IACE,kBAAA;IACA,OAAA;IACA,SAAA;IACA,WAAA;IACA,mBbzMU;Ia0MV,kBAAA;IACA,UAAA;EdyvDF;EctvDA;IACE,SAAA;EdwvDF;EcrvDA;;IAEE,cAAA;IACA,SAAA;IACA,cbrNY;IasNZ,gBAAA;EduvDF;EcpvDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,sBAAA;IACA,kBAAA;IACA,QAAA;IACA,QAAA;EdsvDF;EcnvDA;IACE,cbpOY;EDy9Dd;EclvDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cb5OY;EDg+Dd;EcjvDA;IACE,wBAAA;IACA,qBAAA;IACA,gBAAA;IACA,uBAAA;IACA,cbpPY;EDu+Dd;EchvDA;IACE,iBAAA;EdkvDF;Ec/uDA;IACE,kBAAA;IACA,mBAAA;EdivDF;Ec9uDA;IACE,mBAAA;EdgvDF;Ec7uDA;IACE,kBAAA;Ed+uDF;Ec5uDA;IACE,eAAA;IACA,mBAAA;Ed8uDF;Ec3uDA;IACE,mBAAA;Ed6uDF;Ec1uDA;IACE,iBAAA;Ed4uDF;EczuDA;IACE,gBAAA;Ed2uDF;EcxuDA;IACE,mBAAA;Ed0uDF;EcvuDA;IACE,gBAAA;EdyuDF;EctuDA;IACE,gBAAA;IACA,kBAAA;IACA,mBAAA;EdwuDF;EcruDA;IACE,gBAAA;EduuDF;EcpuDA;IACE,kBAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;EdsuDF;EcnuDA;IACE,eAAA;IACA,mBAAA;EdquDF;EcnuDE;IACE,aAAA;EdquDJ;EcjuDA;IACE,WAAA;EdmuDF;EchuDA;IACE,eAAA;EdkuDF;Ec/tDA;IACE,WAAA;EdiuDF;Ec9tDA;IACE,eAAA;EdguDF;Ec7tDA;IACE,eAAA;Ed+tDF;Ec5tDA;IACE,iBAAA;Ed8tDF;Ec3tDA;IACE,WAAA;Ed6tDF;AACF;Ac1tDA,yBAAA;AACA;EACE;IACE,aAAA;Ed4tDF;EcztDA;IACE,0BAAA;Ed2tDF;EcxtDA;IACE,eAAA;Ed0tDF;EcvtDA;IACE,kBAAA;EdytDF;EcttDA;IACE,kBAAA;IACA,kBAAA;IACA,mBAAA;EdwtDF;EcrtDA;IACE,WAAA;EdutDF;EcptDA;IACE,UAAA;EdstDF;EcntDA;IACE,UAAA;EdqtDF;EcltDA;IACE,kBAAA;EdotDF;EcltDA;IACE,eAAA;IACA,mBAAA;EdotDF;EcjtDA;IACE,4BAAA;EdmtDF;EchtDA;IACE,eAAA;EdktDF;Ec/sDA;IACE,kBAAA;EditDF;Ec9sDA;IACE,iBAAA;EdgtDF;Ec7sDA;IACE,UAAA;Ed+sDF;Ec5sDA;IACE,kBAAA;IACA,OAAA;IACA,SAAA;IACA,gBAAA;Ed8sDF;Ec3sDA;IACE,kBAAA;Ed6sDF;Ec3sDA;IACE,eAAA;Ed6sDF;Ec3sDA;IACE,uBAAA;Ed6sDF;AACF","sourcesContent":["/******************************************************************\n  Theme Name: Anime\n  Description: Anime video tamplate\n  Author: Colorib\n  Author URI: https://colorib.com/\n  Version: 1.0\n  Created: Colorib\n******************************************************************/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1.  Template default CSS\n\t1.1\tVariables\n\t1.2\tMixins\n\t1.3\tFlexbox\n\t1.4\tReset\n2.  Helper Css\n3.  Header Section\n4.  Hero Section\n5.  Banner Section\n6.  Product Section\n7.  Intagram Section\n8.  Latest Section\n9.  Contact\n10.  Footer Style\n-------------------------------------------------------------------*/\n\n/*----------------------------------------*/\n/* Template default CSS\n/*----------------------------------------*/\nhtml,\nbody {\n  height: 100%;\n  font-family: 'Mulish', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  background: #0b0c2a;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  color: #111111;\n  font-weight: 400;\n  font-family: 'Mulish', sans-serif;\n}\n\nh1 {\n  font-size: 70px;\n}\n\nh2 {\n  font-size: 36px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 15px;\n  font-family: 'Mulish', sans-serif;\n  color: #3d3d3d;\n  font-weight: 400;\n  line-height: 25px;\n  margin: 0 0 15px 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na:hover,\na:focus {\n  text-decoration: none;\n  outline: none;\n  color: $white-color;\n}\n\nul,\nol {\n  padding: 0;\n  margin: 0;\n}\n\n/*---------------------\n  Helper CSS\n-----------------------*/\n.section-title {\n  margin-bottom: 30px;\n\n  h4,\n  h5 {\n    color: $white-color;\n    font-weight: 600;\n    line-height: 21px;\n    text-transform: uppercase;\n    padding-left: 20px;\n    position: relative;\n    font-family: 'Oswald', sans-serif;\n\n    &:after {\n      position: absolute;\n      left: 0;\n      top: -6px;\n      height: 32px;\n      width: 4px;\n      background: $primary-color;\n      content: \"\";\n    }\n  }\n}\n\n.set-bg {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n}\n\n.spad {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.text-white h1,\n.text-white h2,\n.text-white h3,\n.text-white h4,\n.text-white h5,\n.text-white h6,\n.text-white p,\n.text-white span,\n.text-white li,\n.text-white a {\n  color: #fff;\n}\n\n/* buttons */\n.primary-btn {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: $white-color;\n  letter-spacing: 2px;\n\n  span {\n    font-size: 18px;\n    margin-left: 5px;\n    position: relative;\n    top: 3px;\n  }\n}\n\n.site-btn {\n  font-size: 13px;\n  color: $white-color;\n  background: $primary-color;\n  font-weight: 700;\n  border: none;\n  border-radius: 2px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 12px 30px;\n}\n\n/* Preloder */\n.preloder {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  background: #000;\n  visibility: hidden;\n  opacity: 0;\n  transition: .2s;\n}\n\n.preloder.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -13px;\n  margin-left: -13px;\n  border-radius: 60px;\n  animation: loader 0.8s linear infinite;\n  -webkit-animation: loader 0.8s linear infinite;\n}\n\n@keyframes loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    border: 4px solid #673ab7;\n    border-left-color: transparent;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n}\n\n@-webkit-keyframes loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n\n  50% {\n    -webkit-transform: rotate(180deg);\n    border: 4px solid #673ab7;\n    border-left-color: transparent;\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n}\n\n.spacial-controls {\n  position: fixed;\n  width: 111px;\n  height: 91px;\n  top: 0;\n  right: 0;\n  z-index: 999;\n}\n\n.spacial-controls .search-switch {\n  display: block;\n  height: 100%;\n  padding-top: 30px;\n  background: #323232;\n  text-align: center;\n  cursor: pointer;\n}\n\n.search-model {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: #000;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s, z-index 0.3s;\n  display: inline;\n}\n\n.search-model--active {\n  z-index: 9999;\n  opacity: 1;\n}\n\n.search-model-form {\n  padding: 0 15px;\n}\n\n.search-model-form input {\n  width: 500px;\n  font-size: 40px;\n  border: none;\n  border-bottom: 2px solid #333;\n  background: 0 0;\n  color: #999;\n}\n\n.search-close-switch {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 28px;\n  line-height: 28px;\n  top: 30px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}","/******************************************************************\n  Theme Name: Anime\n  Description: Anime video tamplate\n  Author: Colorib\n  Author URI: https://colorib.com/\n  Version: 1.0\n  Created: Colorib\n******************************************************************/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1.  Template default CSS\n\t1.1\tVariables\n\t1.2\tMixins\n\t1.3\tFlexbox\n\t1.4\tReset\n2.  Helper Css\n3.  Header Section\n4.  Hero Section\n5.  Banner Section\n6.  Product Section\n7.  Intagram Section\n8.  Latest Section\n9.  Contact\n10.  Footer Style\n-------------------------------------------------------------------*/\n/*----------------------------------------*/\n/* Template default CSS\n/*----------------------------------------*/\nhtml,\nbody {\n  height: 100%;\n  font-family: \"Mulish\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  background: #0b0c2a;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  color: #111111;\n  font-weight: 400;\n  font-family: \"Mulish\", sans-serif;\n}\n\nh1 {\n  font-size: 70px;\n}\n\nh2 {\n  font-size: 36px;\n}\n\nh3 {\n  font-size: 30px;\n}\n\nh4 {\n  font-size: 24px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\np {\n  font-size: 15px;\n  font-family: \"Mulish\", sans-serif;\n  color: #3d3d3d;\n  font-weight: 400;\n  line-height: 25px;\n  margin: 0 0 15px 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus,\ntextarea:focus {\n  outline: none;\n}\n\na:hover,\na:focus {\n  text-decoration: none;\n  outline: none;\n  color: #ffffff;\n}\n\nul,\nol {\n  padding: 0;\n  margin: 0;\n}\n\n/*---------------------\n  Helper CSS\n-----------------------*/\n.section-title {\n  margin-bottom: 30px;\n}\n.section-title h4,\n.section-title h5 {\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 21px;\n  text-transform: uppercase;\n  padding-left: 20px;\n  position: relative;\n  font-family: \"Oswald\", sans-serif;\n}\n.section-title h4:after,\n.section-title h5:after {\n  position: absolute;\n  left: 0;\n  top: -6px;\n  height: 32px;\n  width: 4px;\n  background: #e53637;\n  content: \"\";\n}\n\n.set-bg {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n}\n\n.spad {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.text-white h1,\n.text-white h2,\n.text-white h3,\n.text-white h4,\n.text-white h5,\n.text-white h6,\n.text-white p,\n.text-white span,\n.text-white li,\n.text-white a {\n  color: #fff;\n}\n\n/* buttons */\n.primary-btn {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 2px;\n}\n.primary-btn span {\n  font-size: 18px;\n  margin-left: 5px;\n  position: relative;\n  top: 3px;\n}\n\n.site-btn {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  font-weight: 700;\n  border: none;\n  border-radius: 2px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  display: inline-block;\n  padding: 12px 30px;\n}\n\n/* Preloder */\n.preloder {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  background: #000;\n  visibility: hidden;\n  opacity: 0;\n  transition: 0.2s;\n}\n\n.preloder.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.loader {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -13px;\n  margin-left: -13px;\n  border-radius: 60px;\n  animation: loader 0.8s linear infinite;\n  -webkit-animation: loader 0.8s linear infinite;\n}\n\n@keyframes loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    border: 4px solid #673ab7;\n    border-left-color: transparent;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n}\n@-webkit-keyframes loader {\n  0% {\n    -webkit-transform: rotate(0deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n  50% {\n    -webkit-transform: rotate(180deg);\n    border: 4px solid #673ab7;\n    border-left-color: transparent;\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    border: 4px solid #f44336;\n    border-left-color: transparent;\n  }\n}\n.spacial-controls {\n  position: fixed;\n  width: 111px;\n  height: 91px;\n  top: 0;\n  right: 0;\n  z-index: 999;\n}\n\n.spacial-controls .search-switch {\n  display: block;\n  height: 100%;\n  padding-top: 30px;\n  background: #323232;\n  text-align: center;\n  cursor: pointer;\n}\n\n.search-model {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: #000;\n  z-index: -1;\n  opacity: 0;\n  transition: opacity 0.3s, z-index 0.3s;\n  display: inline;\n}\n\n.search-model--active {\n  z-index: 9999;\n  opacity: 1;\n}\n\n.search-model-form {\n  padding: 0 15px;\n}\n\n.search-model-form input {\n  width: 500px;\n  font-size: 40px;\n  border: none;\n  border-bottom: 2px solid #333;\n  background: 0 0;\n  color: #999;\n}\n\n.search-close-switch {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  background: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 28px;\n  line-height: 28px;\n  top: 30px;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n/*---------------------\n  Header\n-----------------------*/\n.header {\n  background: #070720;\n}\n\n.header__logo {\n  padding: 20px 0 17px;\n}\n.header__logo a {\n  display: inline-block;\n}\n\n.header__menu {\n  text-align: center;\n}\n.header__menu ul li {\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  margin-right: 16px;\n}\n.header__menu ul li.active a {\n  background: #e53637;\n  color: #ffffff;\n}\n.header__menu ul li:hover a {\n  color: #ffffff;\n}\n.header__menu ul li:hover .dropdown {\n  top: 62px;\n  opacity: 1;\n  visibility: visible;\n}\n.header__menu ul li:hover .dropdown li a {\n  background: transparent;\n}\n.header__menu ul li:last-child {\n  margin-right: 0;\n}\n.header__menu ul li .dropdown {\n  position: absolute;\n  left: 0;\n  top: 82px;\n  width: 150px;\n  background: #ffffff;\n  text-align: left;\n  padding: 5px 0;\n  z-index: 9;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all, 0.3s;\n  -moz-transition: all, 0.3s;\n  -ms-transition: all, 0.3s;\n  -o-transition: all, 0.3s;\n  transition: all, 0.3s;\n}\n.header__menu ul li .dropdown li {\n  display: block;\n  margin-right: 0;\n}\n.header__menu ul li .dropdown li a {\n  font-size: 14px;\n  color: #111111;\n  font-weight: 500;\n  padding: 5px 20px;\n}\n.header__menu ul li a {\n  font-size: 15px;\n  color: #b7b7b7;\n  display: block;\n  font-weight: 700;\n  -webkit-transition: all, 0.5s;\n  -moz-transition: all, 0.5s;\n  -ms-transition: all, 0.5s;\n  -o-transition: all, 0.5s;\n  transition: all, 0.5s;\n  padding: 20px;\n}\n.header__menu ul li a span {\n  position: relative;\n  font-size: 17px;\n  top: 2px;\n}\n\n.header__right {\n  text-align: right;\n  padding: 20px 0 15px;\n}\n.header__right a {\n  display: inline-block;\n  font-size: 18px;\n  color: #ffffff;\n  margin-right: 30px;\n}\n.header__right a:last-child {\n  margin-right: 0;\n}\n\n.slicknav_menu {\n  display: none;\n}\n\n/*---------------------\n  Hero\n-----------------------*/\n.hero {\n  padding-top: 50px;\n}\n\n.hero-box {\n  position: relative;\n}\n.hero-box .hero__slider-pagination {\n  position: absolute;\n  left: 0;\n  bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.hero-box .hero__slider-pagination span {\n  height: 8px;\n  width: 8px;\n  background: #b7b7b7;\n  border-radius: 50%;\n  margin-right: 10px;\n  opacity: 1;\n}\n.hero-box .hero__slider-pagination span.active {\n  background: #ffffff;\n}\n.hero-box .hero__slider-pagination span:last-child {\n  margin-right: 0;\n}\n.hero-box .hero__slider-pagination span.swiper-pagination-bullet-active {\n  background-color: white;\n}\n.hero-box .hero__slider-arrow {\n  font-size: 36px;\n  height: 66px;\n  width: 66px;\n  background: #0b0c2a;\n  line-height: 66px;\n  text-align: center;\n  color: #ffffff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  position: relative;\n  z-index: 4;\n  position: absolute;\n  left: -33px;\n  top: 50%;\n  margin-top: -47px;\n}\n.hero-box .hero__slider-arrow.arrow__next {\n  left: auto;\n  right: -33px;\n}\n.hero-box .hero__slider-arrow:after {\n  position: absolute;\n  top: 6px;\n  left: 0;\n  right: 0;\n  height: 54px;\n  width: 54px;\n  background: rgba(255, 255, 255, 0.1);\n  content: \"\";\n  z-index: -1;\n  margin: 0 auto;\n}\n.hero-box .hero__slider-arrow span {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  display: block;\n  z-index: 1;\n}\n\n.hero__items {\n  padding: 250px 0 42px 50px;\n  border-radius: 5px;\n  position: relative;\n}\n\n.hero__text {\n  position: relative;\n  z-index: 9;\n}\n.hero__text .label {\n  font-size: 13px;\n  color: #e53637;\n  background: #ffffff;\n  padding: 5px 14px 3px;\n  display: inline-block;\n  position: relative;\n  top: -100px;\n  opacity: 0;\n  -webkit-transition: all, 0.2s;\n  -moz-transition: all, 0.2s;\n  -ms-transition: all, 0.2s;\n  -o-transition: all, 0.2s;\n  transition: all, 0.2s;\n}\n.hero__text h2 {\n  color: #ffffff;\n  font-size: 42px;\n  font-family: \"Oswald\", sans-serif;\n  font-weight: 700;\n  line-height: 52px;\n  margin-top: 35px;\n  margin-bottom: 8px;\n  position: relative;\n  top: -100px;\n  opacity: 0;\n  -webkit-transition: all, 0.4s;\n  -moz-transition: all, 0.4s;\n  -ms-transition: all, 0.4s;\n  -o-transition: all, 0.4s;\n  transition: all, 0.4s;\n}\n.hero__text p {\n  color: #ffffff;\n  font-size: 16px;\n  margin-bottom: 40px;\n  position: relative;\n  top: -100px;\n  opacity: 0;\n  -webkit-transition: all, 0.6s;\n  -moz-transition: all, 0.6s;\n  -ms-transition: all, 0.6s;\n  -o-transition: all, 0.6s;\n  transition: all, 0.6s;\n}\n.hero__text a {\n  position: relative;\n  top: -100px;\n  opacity: 0;\n  -webkit-transition: all, 0.8s;\n  -moz-transition: all, 0.8s;\n  -ms-transition: all, 0.8s;\n  -o-transition: all, 0.8s;\n  transition: all, 0.8s;\n}\n.hero__text a span {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  display: inline-block;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 14px 20px;\n  border-radius: 4px 0 0 4px;\n  margin-right: 1px;\n}\n.hero__text a i {\n  font-size: 20px;\n  display: inline-block;\n  background: #e53637;\n  padding: 11px 5px 16px 8px;\n  color: #ffffff;\n  border-radius: 0 4px 4px 0;\n}\n.hero__text .show {\n  opacity: 1;\n}\n\n.hero__slider {\n  position: relative;\n}\n.hero__slider .swiper-slide-active .hero__text .label {\n  top: 0;\n  opacity: 1;\n}\n.hero__slider .swiper-slide-active .hero__text h2 {\n  top: 0;\n  opacity: 1;\n}\n.hero__slider .swiper-slide-active .hero__text p {\n  top: 0;\n  opacity: 1;\n}\n.hero__slider .swiper-slide-active .hero__text a {\n  top: 0;\n  opacity: 1;\n}\n\n/*---------------------\n  Product\n-----------------------*/\n.product {\n  padding-bottom: 60px;\n  padding-top: 80px;\n}\n\n.product-page {\n  padding-top: 60px;\n}\n\n.btn__all {\n  text-align: right;\n  margin-bottom: 30px;\n}\n\n.trending__product {\n  margin-bottom: 50px;\n}\n\n.popular__product {\n  margin-bottom: 50px;\n}\n\n.recent__product {\n  margin-bottom: 50px;\n}\n\n.product__item {\n  margin-bottom: 30px;\n}\n\n.product__item__pic {\n  height: 325px;\n  position: relative;\n  border-radius: 5px;\n}\n.product__item__pic img {\n  position: absolute;\n}\n.product__item__pic .ep {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 4px;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}\n.product__item__pic .comment {\n  font-size: 13px;\n  color: #ffffff;\n  background: #3d3d3d;\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n}\n.product__item__pic .view {\n  font-size: 13px;\n  color: #ffffff;\n  background: #3d3d3d;\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.product__item__text {\n  padding-top: 20px;\n}\n.product__item__text ul {\n  margin-bottom: 10px;\n}\n.product__item__text ul li {\n  list-style: none;\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 1px 10px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  display: inline-block;\n}\n.product__item__text h5 a {\n  color: #ffffff;\n  font-weight: 700;\n  line-height: 26px;\n}\n\n.product__sidebar .section-title h5 {\n  color: #ffffff;\n  font-weight: 600;\n  font-family: \"Oswald\", sans-serif;\n  line-height: 21px;\n  text-transform: uppercase;\n  padding-left: 20px;\n  position: relative;\n}\n.product__sidebar .section-title h5:after {\n  position: absolute;\n  left: 0;\n  top: -6px;\n  height: 32px;\n  width: 4px;\n  background: #e53637;\n  content: \"\";\n}\n\n.product__sidebar__view {\n  position: relative;\n  margin-bottom: 80px;\n}\n.product__sidebar__view .filter__controls {\n  position: absolute;\n  right: 0;\n  top: -5px;\n}\n.product__sidebar__view .filter__controls li {\n  list-style: none;\n  font-size: 13px;\n  color: #b7b7b7;\n  display: inline-block;\n  margin-right: 7px;\n  cursor: pointer;\n}\n.product__sidebar__view .filter__controls li.active {\n  color: #ffffff;\n}\n.product__sidebar__view .filter__controls li:last-child {\n  margin-right: 0;\n}\n\n.product__sidebar__view__item {\n  height: 190px;\n  position: relative;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.product__sidebar__view__item::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 23%, rgba(255, 255, 255, 0) 100%);\n  border-radius: 5px;\n  z-index: 1;\n}\n.product__sidebar__view__item img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n}\n.product__sidebar__view__item .ep {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 4px;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  z-index: 2;\n}\n.product__sidebar__view__item .view {\n  font-size: 13px;\n  color: #ffffff;\n  background: #3d3d3d;\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 2;\n}\n.product__sidebar__view__item h5 {\n  position: absolute;\n  left: 0;\n  bottom: 25px;\n  width: 100%;\n  padding: 0 30px 0 20px;\n  z-index: 2;\n}\n.product__sidebar__view__item h5 a {\n  color: #ffffff;\n  font-weight: 700;\n  line-height: 26px;\n}\n\n.product__sidebar__comment {\n  margin-bottom: 35px;\n}\n\n.product__sidebar__comment__item {\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n\n.product__sidebar__comment__item__pic {\n  float: left;\n  margin-right: 15px;\n}\n\n.product__sidebar__comment__item__text {\n  overflow: hidden;\n}\n.product__sidebar__comment__item__text ul {\n  margin-bottom: 10px;\n}\n.product__sidebar__comment__item__text ul li {\n  list-style: none;\n  font-size: 10px;\n  color: #ffffff;\n  font-weight: 700;\n  padding: 1px 10px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  display: inline-block;\n}\n.product__sidebar__comment__item__text h5 {\n  margin-bottom: 10px;\n}\n.product__sidebar__comment__item__text h5 a {\n  color: #ffffff;\n  font-weight: 700;\n  line-height: 26px;\n}\n.product__sidebar__comment__item__text span {\n  display: block;\n  font-size: 13px;\n  color: #b7b7b7;\n}\n\n.product__page__title {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 10px;\n  margin-bottom: 30px;\n}\n.product__page__title .section-title {\n  margin-bottom: 0;\n}\n.product__page__title .product__page__filter {\n  text-align: right;\n}\n.product__page__title .product__page__filter p {\n  color: #ffffff;\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 16px;\n}\n.product__page__title .product__page__filter .nice-select {\n  float: none;\n  display: inline-block;\n  font-size: 15px;\n  color: #3d3d3d;\n  font-weight: 700;\n  border-radius: 0;\n  padding-left: 15px;\n  padding-right: 40px;\n  height: 32px;\n  line-height: 32px;\n}\n.product__page__title .product__page__filter .nice-select:after {\n  border-bottom: 2px solid #111;\n  border-right: 2px solid #111;\n  height: 8px;\n  top: 47%;\n  width: 8px;\n  right: 15px;\n}\n.product__page__title .product__page__filter .nice-select .list {\n  margin-top: 0;\n  border-radius: 0;\n}\n\n.product__pagination {\n  padding-top: 15px;\n}\n.product__pagination a {\n  display: inline-block;\n  font-size: 15px;\n  color: #b7b7b7;\n  font-weight: 600;\n  height: 50px;\n  width: 50px;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  line-height: 48px;\n  text-align: center;\n  -webkit-transition: all, 0.3s;\n  -moz-transition: all, 0.3s;\n  -ms-transition: all, 0.3s;\n  -o-transition: all, 0.3s;\n  transition: all, 0.3s;\n}\n.product__pagination a:hover {\n  color: #ffffff;\n}\n.product__pagination a.current-page {\n  border: 1px solid #ffffff;\n}\n.product__pagination a i {\n  color: #b7b7b7;\n  font-size: 15px;\n}\n\n/*---------------------\n  Anime Details\n-----------------------*/\n.anime-details {\n  padding-top: 60px;\n}\n\n.anime__details__content {\n  margin-bottom: 65px;\n}\n\n.anime__details__text {\n  position: relative;\n}\n.anime__details__text p {\n  color: #b7b7b7;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.anime__details__pic {\n  height: 440px;\n  border-radius: 5px;\n  position: relative;\n}\n.anime__details__pic .comment {\n  font-size: 13px;\n  color: #ffffff;\n  background: #3d3d3d;\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  position: absolute;\n  left: 10px;\n  bottom: 25px;\n}\n.anime__details__pic .view {\n  font-size: 13px;\n  color: #ffffff;\n  background: #3d3d3d;\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 4px;\n  position: absolute;\n  right: 10px;\n  bottom: 25px;\n}\n\n.anime__details__title {\n  margin-bottom: 20px;\n}\n.anime__details__title h3 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 13px;\n}\n.anime__details__title span {\n  font-size: 15px;\n  color: #b7b7b7;\n  display: block;\n}\n\n.anime__details__rating {\n  text-align: center;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.anime__details__rating .rating i {\n  font-size: 24px;\n  color: #e89f12;\n  display: inline-block;\n}\n.anime__details__rating span {\n  display: block;\n  font-size: 18px;\n  color: #b7b7b7;\n}\n\n.anime__details__widget {\n  margin-bottom: 15px;\n}\n.anime__details__widget ul {\n  margin-bottom: 20px;\n}\n.anime__details__widget ul li {\n  list-style: none;\n  font-size: 15px;\n  color: #ffffff;\n  line-height: 30px;\n  position: relative;\n  padding-left: 18px;\n}\n.anime__details__widget ul li:before {\n  position: absolute;\n  left: 0;\n  top: 12px;\n  height: 6px;\n  width: 6px;\n  background: #b7b7b7;\n  content: \"\";\n}\n.anime__details__widget ul li span {\n  color: #b7b7b7;\n  width: 115px;\n  display: inline-block;\n}\n\n.anime__details__btn .follow-btn {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  display: inline-block;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 14px 20px;\n  border-radius: 4px;\n  margin-right: 11px;\n}\n.anime__details__btn .watch-btn span {\n  font-size: 13px;\n  color: #ffffff;\n  background: #e53637;\n  display: inline-block;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 14px 20px;\n  border-radius: 4px 0 0 4px;\n  margin-right: 1px;\n}\n.anime__details__btn .watch-btn i {\n  font-size: 20px;\n  display: inline-block;\n  background: #e53637;\n  padding: 11px 5px 16px 8px;\n  color: #ffffff;\n  border-radius: 0 4px 4px 0;\n}\n\n.anime__details__review {\n  margin-bottom: 55px;\n}\n\n.anime__review__item {\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.anime__review__item__pic {\n  float: left;\n  margin-right: 20px;\n  position: relative;\n}\n.anime__review__item__pic:before {\n  position: absolute;\n  right: -30px;\n  top: 15px;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #1d1e39;\n  content: \"\";\n  transform: rotate(45deg);\n}\n.anime__review__item__pic img {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n}\n\n.anime__review__item__text {\n  overflow: hidden;\n  background: #1d1e39;\n  padding: 18px 30px 16px 20px;\n  border-radius: 10px;\n}\n.anime__review__item__text h6 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.anime__review__item__text h6 span {\n  color: #b7b7b7;\n  font-weight: 400;\n}\n.anime__review__item__text p {\n  color: #b7b7b7;\n  line-height: 23px;\n  margin-bottom: 0;\n}\n\n.anime__details__form form textarea {\n  width: 100%;\n  font-size: 15px;\n  color: #b7b7b7;\n  padding-left: 20px;\n  padding-top: 12px;\n  height: 110px;\n  border: none;\n  border-radius: 5px;\n  resize: none;\n  margin-bottom: 24px;\n}\n.anime__details__form form button {\n  font-size: 11px;\n  color: #ffffff;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  background: #e53637;\n  border: none;\n  padding: 10px 15px;\n  border-radius: 2px;\n}\n\n/*---------------------\n  Anime Watching\n-----------------------*/\n.anime__video__player {\n  margin-bottom: 70px;\n}\n.anime__video__player .plyr--video {\n  border-radius: 5px;\n  background: transparent;\n}\n.anime__video__player .plyr audio,\n.anime__video__player .plyr iframe,\n.anime__video__player .plyr video {\n  width: 102%;\n}\n.anime__video__player .plyr--full-ui.plyr--video .plyr__control--overlaid {\n  display: block;\n}\n.anime__video__player .plyr--video .plyr__control.plyr__tab-focus,\n.anime__video__player .plyr--video .plyr__control:hover,\n.anime__video__player .plyr--video .plyr__control[aria-expanded=true] {\n  background: transparent;\n}\n.anime__video__player .plyr--video .plyr__controls {\n  background: transparent;\n}\n.anime__video__player .plyr--video .plyr__progress__buffer {\n  color: transparent;\n}\n.anime__video__player .plyr--full-ui input[type=range] {\n  color: #ffffff;\n}\n.anime__video__player .plyr__controls .plyr__controls__item.plyr__progress__container {\n  position: absolute;\n  left: 26px;\n  bottom: 45px;\n  width: calc(100% - 60px);\n}\n.anime__video__player .plyr__menu {\n  margin-right: 70px;\n}\n.anime__video__player .plyr__controls .plyr__controls__item:first-child {\n  position: absolute;\n  left: 32px;\n  bottom: 8px;\n}\n.anime__video__player .plyr__controls .plyr__controls__item:last-child {\n  position: absolute;\n  right: 32px;\n  bottom: 8px;\n}\n.anime__video__player .plyr__volume {\n  position: absolute;\n  width: auto;\n  left: 76px;\n  bottom: 8px;\n}\n.anime__video__player .plyr__controls .plyr__controls__item.plyr__time {\n  position: absolute;\n  left: 106px;\n  bottom: 12px;\n}\n.anime__video__player .plyr__control--overlaid {\n  background: transparent;\n  background: var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, transparent)));\n}\n.anime__video__player .plyr__control--overlaid svg {\n  height: 60px;\n  width: 50px;\n}\n\n.anime__details__episodes {\n  margin-bottom: 35px;\n}\n.anime__details__episodes a {\n  display: inline-block;\n  font-size: 15px;\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 10px 20px;\n  border-radius: 4px;\n  margin-right: 15px;\n  margin-bottom: 20px;\n  -webkit-transition: all, 0.3s;\n  -moz-transition: all, 0.3s;\n  -ms-transition: all, 0.3s;\n  -o-transition: all, 0.3s;\n  transition: all, 0.3s;\n}\n.anime__details__episodes a:hover {\n  color: #000000;\n  background: #ffffff;\n}\n\n/*---------------------\n  Breadcrumb\n-----------------------*/\n.breadcrumb-option {\n  padding-top: 35px;\n}\n\n.breadcrumb__links a {\n  font-size: 15px;\n  color: #ffffff;\n  margin-right: 18px;\n  display: inline-block;\n  position: relative;\n}\n.breadcrumb__links a i {\n  margin-right: 5px;\n  color: #e53637;\n}\n.breadcrumb__links a:after {\n  position: absolute;\n  right: -14px;\n  top: 0;\n  content: \"\\f105\";\n  font-family: \"FontAwesome\";\n}\n.breadcrumb__links span {\n  font-size: 15px;\n  color: #b7b7b7;\n  display: inline-block;\n}\n\n/*---------------------\n    Normal Breadcrumb\n-----------------------*/\n.normal-breadcrumb {\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.normal__breadcrumb__text h2 {\n  color: #ffffff;\n  font-size: 48px;\n  font-family: \"Oswald\", sans-serif;\n  font-weight: 700;\n  margin-bottom: 22px;\n}\n.normal__breadcrumb__text p {\n  color: #ffffff;\n  font-size: 24px;\n  margin-bottom: 0;\n}\n\n/*---------------------\n    Blog\n-----------------------*/\n.blog {\n  padding-top: 70px;\n  padding-bottom: 90px;\n}\n\n.blog__item {\n  height: 580px;\n  position: relative;\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-bottom: 10px;\n}\n.blog__item.small__item {\n  height: 285px;\n}\n.blog__item.small__item .blog__item__text {\n  padding: 0 30px;\n}\n.blog__item.small__item .blog__item__text p {\n  margin-bottom: 5px;\n}\n.blog__item.small__item .blog__item__text h4 a {\n  font-size: 20px;\n  line-height: 30px;\n}\n\n.blog__item__text {\n  position: absolute;\n  left: 0;\n  bottom: 25px;\n  text-align: center;\n  width: 100%;\n  padding: 0 105px;\n}\n.blog__item__text p {\n  color: #ffffff;\n  margin-bottom: 12px;\n}\n.blog__item__text p span {\n  color: #e53637;\n  margin-right: 5px;\n}\n.blog__item__text h4 a {\n  color: #ffffff;\n  line-height: 34px;\n}\n\n/*---------------------\n  Blog Details\n-----------------------*/\n.blog-details {\n  padding-top: 70px;\n}\n\n.blog__details__title {\n  text-align: center;\n  margin-bottom: 70px;\n}\n.blog__details__title h6 {\n  font-size: 15px;\n  color: #ffffff;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n.blog__details__title h6 span {\n  color: #b7b7b7;\n  font-weight: 400;\n  text-transform: none;\n}\n.blog__details__title h2 {\n  color: #ffffff;\n  font-size: 48px;\n  font-weight: 700;\n  line-height: 60px;\n  margin-bottom: 38px;\n}\n.blog__details__title .blog__details__social a {\n  display: inline-block;\n  font-size: 15px;\n  color: #ffffff;\n  padding: 16px 35px 14px 20px;\n  border-radius: 2px;\n  margin-right: 6px;\n}\n.blog__details__title .blog__details__social a:last-child {\n  margin-right: 0;\n}\n.blog__details__title .blog__details__social a.facebook {\n  background: #3b5998;\n}\n.blog__details__title .blog__details__social a.pinterest {\n  background: #ca2027;\n}\n.blog__details__title .blog__details__social a.linkedin {\n  background: #0372b1;\n}\n.blog__details__title .blog__details__social a.twitter {\n  background: #39a1f2;\n}\n.blog__details__title .blog__details__social a i {\n  margin-right: 6px;\n}\n\n.blog__details__pic {\n  margin-bottom: 30px;\n}\n.blog__details__pic img {\n  min-width: 100%;\n}\n\n.blog__details__text {\n  margin-bottom: 40px;\n}\n.blog__details__text p {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 30px;\n}\n\n.blog__details__item__text {\n  margin-bottom: 42px;\n}\n.blog__details__item__text h4 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 35px;\n}\n.blog__details__item__text img {\n  min-width: 100%;\n  margin-bottom: 26px;\n}\n.blog__details__item__text p {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 30px;\n  margin-bottom: 0;\n}\n\n.blog__details__tags {\n  margin-bottom: 60px;\n}\n.blog__details__tags a {\n  display: inline-block;\n  color: #b7b7b7;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin-right: 6px;\n  padding: 6px 15px;\n  margin-bottom: 10px;\n}\n.blog__details__tags a:last-child {\n  margin-right: 0;\n}\n\n.blog__details__btns {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 20px 0 15px;\n  margin-bottom: 65px;\n}\n\n.blog__details__btns__item {\n  margin-bottom: 20px;\n}\n.blog__details__btns__item.next__btn {\n  text-align: right;\n}\n.blog__details__btns__item h5 a {\n  font-size: 17px;\n  letter-spacing: 2px;\n  color: #ffffff;\n}\n.blog__details__btns__item h5 a span {\n  font-size: 30px;\n  color: #b7b7b7;\n  position: relative;\n  top: 8px;\n}\n\n.blog__details__comment {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding-bottom: 30px;\n}\n.blog__details__comment h4 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 26px;\n}\n\n.blog__details__comment__item {\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n.blog__details__comment__item.blog__details__comment__item--reply {\n  padding-left: 112px;\n}\n\n.blog__details__comment__item__pic {\n  float: left;\n  margin-right: 40px;\n}\n\n.blog__details__comment__item__text {\n  overflow: hidden;\n}\n.blog__details__comment__item__text span {\n  font-size: 14px;\n  color: #b7b7b7;\n  display: block;\n  margin-bottom: 10px;\n}\n.blog__details__comment__item__text h5 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 10px;\n}\n.blog__details__comment__item__text p {\n  color: #b7b7b7;\n  font-size: 14px;\n  line-height: 22px;\n  margin-bottom: 25px;\n}\n.blog__details__comment__item__text a {\n  display: inline-block;\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.1);\n  padding: 6px 20px;\n  letter-spacing: 2px;\n  border-radius: 2px;\n  margin-right: 14px;\n  -webkit-transition: all, 0.3s;\n  -moz-transition: all, 0.3s;\n  -ms-transition: all, 0.3s;\n  -o-transition: all, 0.3s;\n  transition: all, 0.3s;\n}\n.blog__details__comment__item__text a:hover {\n  background: #e53637;\n}\n\n.blog__details__form {\n  padding-top: 50px;\n}\n.blog__details__form h4 {\n  color: #ffffff;\n  font-weight: 700;\n  margin-bottom: 26px;\n}\n.blog__details__form form input {\n  height: 50px;\n  width: 100%;\n  background: #ffffff;\n  font-size: 15px;\n  color: #a6a6a6;\n  padding-left: 20px;\n  border-radius: 2px;\n  border: none;\n  margin-bottom: 30px;\n}\n.blog__details__form form input::placeholder {\n  color: #a6a6a6;\n}\n.blog__details__form form textarea {\n  height: 115px;\n  width: 100%;\n  background: #ffffff;\n  font-size: 15px;\n  color: #a6a6a6;\n  padding-left: 20px;\n  border-radius: 2px;\n  padding-top: 12px;\n  resize: none;\n  border: none;\n  margin-bottom: 34px;\n}\n.blog__details__form form textarea::placeholder {\n  color: #a6a6a6;\n}\n\n/*---------------------\n  Login\n-----------------------*/\n.login {\n  padding-top: 130px;\n  padding-bottom: 120px;\n}\n\n.login__form {\n  position: relative;\n  padding-left: 145px;\n}\n.login__form:after {\n  position: absolute;\n  right: -14px;\n  top: -40px;\n  height: 330px;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.2);\n  content: \"\";\n}\n.login__form h3 {\n  color: #ffffff;\n  font-weight: 700;\n  font-family: \"Oswald\", sans-serif;\n  margin-bottom: 30px;\n}\n.login__form form .input__item {\n  position: relative;\n  width: 370px;\n  margin-bottom: 20px;\n}\n.login__form form .input__item:before {\n  position: absolute;\n  left: 50px;\n  top: 10px;\n  height: 30px;\n  width: 1px;\n  background: #b7b7b7;\n  content: \"\";\n}\n.login__form form .input__item input {\n  height: 50px;\n  width: 100%;\n  font-size: 15px;\n  color: #b7b7b7;\n  background: #ffffff;\n  border: none;\n  padding-left: 76px;\n}\n.login__form form .input__item input::placeholder {\n  color: #b7b7b7;\n}\n.login__form form .input__item span {\n  color: #b7b7b7;\n  font-size: 20px;\n  position: absolute;\n  left: 15px;\n  top: 13px;\n}\n.login__form form button {\n  border-radius: 0;\n  margin-top: 10px;\n}\n.login__form .forget_pass {\n  font-size: 15px;\n  color: #ffffff;\n  display: inline-block;\n  position: absolute;\n  right: 60px;\n  bottom: 12px;\n}\n\n.login__register {\n  padding-left: 30px;\n}\n.login__register h3 {\n  color: #ffffff;\n  font-weight: 700;\n  font-family: \"Oswald\", sans-serif;\n  margin-bottom: 30px;\n}\n.login__register .primary-btn {\n  background: #e53637;\n  padding: 12px 42px;\n}\n\n.login__social {\n  padding-top: 52px;\n}\n\n.login__social__links {\n  text-align: center;\n}\n.login__social__links span {\n  color: #ffffff;\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n}\n.login__social__links ul li {\n  list-style: none;\n  margin-bottom: 15px;\n}\n.login__social__links ul li:last-child {\n  margin-bottom: 0;\n}\n.login__social__links ul li a {\n  color: #ffffff;\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  width: 460px;\n  padding: 14px 0;\n  position: relative;\n  margin: 0 auto;\n}\n.login__social__links ul li a.facebook {\n  background: #4267b2;\n}\n.login__social__links ul li a.google {\n  background: #ff4343;\n}\n.login__social__links ul li a.twitter {\n  background: #1da1f2;\n}\n.login__social__links ul li a i {\n  font-size: 20px;\n  position: absolute;\n  left: 32px;\n  top: 14px;\n}\n\n/*---------------------\n  Sign Up\n-----------------------*/\n.signup {\n  padding-top: 130px;\n  padding-bottom: 150px;\n}\n.signup .login__form:after {\n  height: 450px;\n}\n.signup .login__form h5 {\n  font-size: 15px;\n  color: #ffffff;\n  margin-top: 36px;\n}\n.signup .login__form h5 a {\n  color: #e53637;\n  font-weight: 700;\n}\n.signup .login__social__links {\n  text-align: left;\n  padding-left: 40px;\n}\n.signup .login__social__links h3 {\n  color: #ffffff;\n  font-weight: 700;\n  font-family: \"Oswald\", sans-serif;\n  margin-bottom: 30px;\n}\n.signup .login__social__links ul li a {\n  margin: 0;\n  text-align: center;\n}\n\n/*---------------------\n  Footer\n-----------------------*/\n.footer {\n  background: #070720;\n  padding-top: 60px;\n  padding-bottom: 40px;\n  position: relative;\n}\n\n.page-up {\n  position: absolute;\n  left: 50%;\n  top: -25px;\n  margin-left: -25px;\n}\n.page-up a {\n  display: inline-block;\n  font-size: 36px;\n  color: #ffffff;\n  height: 50px;\n  width: 50px;\n  background: #e53637;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 50%;\n}\n.page-up a span {\n  position: relative;\n  top: 2px;\n  left: -1px;\n}\n\n.footer__nav {\n  text-align: center;\n}\n.footer__nav ul li {\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  margin-right: 40px;\n}\n.footer__nav ul li:last-child {\n  margin-right: 0;\n}\n.footer__nav ul li a {\n  font-size: 15px;\n  color: #b7b7b7;\n  display: block;\n  font-weight: 700;\n}\n\n.footer__copyright__text {\n  color: #b7b7b7;\n  margin-bottom: 0;\n  text-align: right;\n}\n.footer__copyright__text a {\n  color: #e53637;\n}\n\n/*--------------------------------- Responsive Media Quaries -----------------------------*/\n@media only screen and (min-width: 1200px) and (max-width: 1300px) {\n  .hero {\n    overflow: hidden;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  .container {\n    max-width: 1170px;\n  }\n}\n/* Medium Device = 1200px */\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .hero {\n    overflow: hidden;\n  }\n  .login__form {\n    position: relative;\n    padding-left: 32px;\n  }\n  .login__social__links ul li a {\n    width: 380px;\n  }\n  .blog__item__text {\n    padding: 0 50px;\n  }\n}\n/* Tablet Device = 768px */\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .hero {\n    overflow: hidden;\n  }\n  .header {\n    position: relative;\n  }\n  .header .container {\n    position: relative;\n  }\n  .header__right {\n    position: absolute;\n    right: 120px;\n    top: -42px;\n    padding: 0;\n  }\n  .header__menu {\n    display: none;\n  }\n  .slicknav_menu {\n    background: transparent;\n    padding: 0;\n    display: block;\n  }\n  .slicknav_nav {\n    position: absolute;\n    left: 0;\n    top: 60px;\n    width: 100%;\n    background: #ffffff;\n    padding: 15px 30px;\n    z-index: 9;\n  }\n  .slicknav_nav ul {\n    margin: 0;\n  }\n  .slicknav_nav .slicknav_row,\n  .slicknav_nav a {\n    padding: 7px 0;\n    margin: 0;\n    color: #111111;\n    font-weight: 600;\n  }\n  .slicknav_btn {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background-color: #222;\n    position: absolute;\n    right: 0;\n    top: 9px;\n  }\n  .slicknav_nav .slicknav_arrow {\n    color: #111111;\n  }\n  .slicknav_nav .slicknav_row:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: #111111;\n  }\n  .slicknav_nav a:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: #111111;\n  }\n  .product__sidebar {\n    padding-top: 50px;\n  }\n  .footer__logo {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  .footer__nav {\n    margin-bottom: 15px;\n  }\n  .footer__copyright__text {\n    text-align: center;\n  }\n  .anime__details__widget ul li span {\n    width: 90px;\n  }\n  .anime__details__pic {\n    margin-bottom: 40px;\n  }\n  .anime__details__sidebar {\n    padding-top: 50px;\n  }\n  .login__form {\n    padding-left: 0;\n    margin-bottom: 40px;\n  }\n  .login__form:after {\n    display: none;\n  }\n  .login__form form .input__item {\n    width: auto;\n  }\n  .login__register {\n    padding-left: 0;\n  }\n  .signup .login__social__links {\n    padding-left: 0;\n  }\n}\n/* Wide Mobile = 480px */\n@media only screen and (max-width: 767px) {\n  .hero {\n    overflow: hidden;\n  }\n  .header {\n    position: relative;\n  }\n  .header .container {\n    position: relative;\n  }\n  .header__right {\n    position: absolute;\n    right: 120px;\n    top: -42px;\n    padding: 0;\n  }\n  .header__menu {\n    display: none;\n  }\n  .slicknav_menu {\n    background: transparent;\n    padding: 0;\n    display: block;\n  }\n  .slicknav_nav {\n    position: absolute;\n    left: 0;\n    top: 60px;\n    width: 100%;\n    background: #ffffff;\n    padding: 15px 30px;\n    z-index: 9;\n  }\n  .slicknav_nav ul {\n    margin: 0;\n  }\n  .slicknav_nav .slicknav_row,\n  .slicknav_nav a {\n    padding: 7px 0;\n    margin: 0;\n    color: #111111;\n    font-weight: 600;\n  }\n  .slicknav_btn {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background-color: #222;\n    position: absolute;\n    right: 0;\n    top: 9px;\n  }\n  .slicknav_nav .slicknav_arrow {\n    color: #111111;\n  }\n  .slicknav_nav .slicknav_row:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: #111111;\n  }\n  .slicknav_nav a:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: #111111;\n  }\n  .product__sidebar {\n    padding-top: 50px;\n  }\n  .footer__logo {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  .footer__nav {\n    margin-bottom: 15px;\n  }\n  .footer__copyright__text {\n    text-align: center;\n  }\n  .blog__details__title h2 {\n    font-size: 34px;\n    line-height: normal;\n  }\n  .anime__details__pic {\n    margin-bottom: 40px;\n  }\n  .anime__details__sidebar {\n    padding-top: 50px;\n  }\n  .btn__all {\n    text-align: left;\n  }\n  .product__page__title .section-title {\n    margin-bottom: 30px;\n  }\n  .product__page__title .product__page__filter {\n    text-align: left;\n  }\n  .anime__details__rating {\n    text-align: left;\n    position: relative;\n    margin-bottom: 20px;\n  }\n  .blog__details__social {\n    overflow: hidden;\n  }\n  .blog__details__title .blog__details__social a {\n    margin-right: 10px;\n    margin-bottom: 10px;\n    width: calc(50% - 10px);\n    float: left;\n  }\n  .login__form {\n    padding-left: 0;\n    margin-bottom: 40px;\n  }\n  .login__form:after {\n    display: none;\n  }\n  .login__form form .input__item {\n    width: auto;\n  }\n  .signup .login__social__links {\n    padding-left: 0;\n  }\n  .login__social__links ul li a {\n    width: auto;\n  }\n  .blog__item__text {\n    padding: 0 30px;\n  }\n  .login__register {\n    padding-left: 0;\n  }\n  .product__sidebar__view .filter__controls li {\n    margin-right: 2px;\n  }\n  .search-model-form input {\n    width: 100%;\n  }\n}\n/* Small Device = 320px */\n@media only screen and (max-width: 479px) {\n  .hero__slider.owl-carousel .owl-nav {\n    display: none;\n  }\n  .hero__items {\n    padding: 250px 0 42px 15px;\n  }\n  .hero__text h2 {\n    font-size: 32px;\n  }\n  .footer__nav ul li {\n    margin-right: 10px;\n  }\n  .anime__details__btn .follow-btn {\n    padding: 14px 26px;\n    margin-right: 11px;\n    margin-bottom: 25px;\n  }\n  .anime__details__widget ul li span {\n    width: 85px;\n  }\n  .anime__video__player .plyr__volume {\n    left: 65px;\n  }\n  .anime__video__player .plyr__controls .plyr__controls__item.plyr__time {\n    left: 95px;\n  }\n  .anime__video__player .plyr__menu {\n    margin-right: 60px;\n  }\n  .blog__details__title h2 {\n    font-size: 30px;\n    line-height: normal;\n  }\n  .blog__details__title .blog__details__social a {\n    padding: 16px 25px 14px 20px;\n  }\n  .blog__details__comment__item.blog__details__comment__item--reply {\n    padding-left: 0;\n  }\n  .blog__details__comment__item__pic {\n    margin-right: 25px;\n  }\n  .blog__details__comment__item__text a {\n    margin-right: 6px;\n  }\n  .login__social__links ul li a i {\n    left: 20px;\n  }\n  .login__form .forget_pass {\n    position: relative;\n    left: 0;\n    bottom: 0;\n    margin-top: 25px;\n  }\n  .header__right a {\n    margin-right: 10px;\n  }\n  .anime__review__item__text h6 span {\n    font-size: 12px;\n  }\n  .anime__review__item__text {\n    padding: 18px 20px 20px;\n  }\n}","$primary-color: #e53637;\n$secondary-color: #0c2b4b;\n$white-color: #ffffff;\n$heading-color: #111111;\n$para-color: #5C5C5C;\n$black-color: #000000;\n$heading-color-2: #323232;\n$normal-color: #1c1c1c;\n$background: #f5f5f5;\n$background-2: #f2f2f2;\n$border: #ebebeb;\n$border-1: #e1e1e1;\n\n$fm-unna: 'Unna', serif;\n$fm-nunito: 'Nunito Sans', sans-serif;","/*---------------------\n  Header\n-----------------------*/\n.header {\n    background: #070720;\n}\n\n.header__logo {\n    padding: 20px 0 17px;\n\n    a {\n        display: inline-block;\n    }\n}\n\n.header__menu {\n    text-align: center;\n\n    ul {\n\n        li {\n            list-style: none;\n            display: inline-block;\n            position: relative;\n            margin-right: 16px;\n\n            &.active {\n\n                a {\n                    background: $primary-color;\n                    color: $white-color;\n                }\n            }\n\n            &:hover {\n\n                a {\n                    // background: $primary-color;\n                    color: $white-color;\n                }\n\n                .dropdown {\n                    top: 62px;\n                    opacity: 1;\n                    visibility: visible;\n\n                    li {\n\n                        a {\n                            background: transparent;\n                        }\n                    }\n                }\n            }\n\n            &:last-child {\n                margin-right: 0;\n            }\n\n            .dropdown {\n                position: absolute;\n                left: 0;\n                top: 82px;\n                width: 150px;\n                background: $white-color;\n                text-align: left;\n                padding: 5px 0;\n                z-index: 9;\n                opacity: 0;\n                visibility: hidden;\n                @include transition(all, .3s);\n\n                li {\n                    display: block;\n                    margin-right: 0;\n\n                    a {\n                        font-size: 14px;\n                        color: $heading-color;\n                        font-weight: 500;\n                        padding: 5px 20px;\n                    }\n                }\n            }\n\n            a {\n                font-size: 15px;\n                color: #b7b7b7;\n                display: block;\n                font-weight: 700;\n                @include transition(all, .5s);\n                padding: 20px;\n\n                span {\n                    position: relative;\n                    font-size: 17px;\n                    top: 2px;\n                }\n            }\n        }\n    }\n}\n\n.header__right {\n    text-align: right;\n    padding: 20px 0 15px;\n\n    a {\n        display: inline-block;\n        font-size: 18px;\n        color: $white-color;\n        margin-right: 30px;\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}\n\n.slicknav_menu {\n    display: none;\n  }","// transition\n@mixin transition($args...) {\n    -webkit-transition: $args;\n    -moz-transition: $args;\n    -ms-transition: $args;\n    -o-transition: $args;\n    transition: $args;\n}","/*---------------------\n  Hero\n-----------------------*/\n\n.hero {\n    padding-top: 50px;\n}\n\n.hero-box {\n    position: relative;\n\n    .hero__slider-pagination {\n        position: absolute;\n        left: 0;\n        bottom: 10px;\n        width: 100%;\n        text-align: center;\n\n        span {\n            height: 8px;\n            width: 8px;\n            background: #b7b7b7;\n            border-radius: 50%;\n            margin-right: 10px;\n            opacity: 1;\n\n            &.active {\n                background: #ffffff;\n            }\n\n            &:last-child {\n                margin-right: 0;\n            }\n\n            &.swiper-pagination-bullet-active {\n                background-color: white;\n            }\n        }\n    }\n\n    .hero__slider-arrow {\n        font-size: 36px;\n        height: 66px;\n        width: 66px;\n        background: #0b0c2a;\n        line-height: 66px;\n        text-align: center;\n        color: $white-color;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        position: relative;\n        z-index: 4;\n        position: absolute;\n        left: -33px;\n        top: 50%;\n        margin-top: -47px;\n\n        &.arrow__next {\n            left: auto;\n            right: -33px;\n        }\n\n        &:after {\n            position: absolute;\n            top: 6px;\n            left: 0;\n            right: 0;\n            height: 54px;\n            width: 54px;\n            background: rgba(255, 255, 255, 0.1);\n            content: \"\";\n            z-index: -1;\n            margin: 0 auto;\n        }\n\n        span {\n            -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n            display: block;\n            z-index: 1;\n        }\n    }\n}\n\n.hero__items {\n    padding: 250px 0 42px 50px;\n    border-radius: 5px;\n    position: relative;\n}\n\n.hero__text {\n    position: relative;\n    z-index: 9;\n\n    .label {\n        font-size: 13px;\n        color: $primary-color;\n        background: $white-color;\n        padding: 5px 14px 3px;\n        display: inline-block;\n        position: relative;\n        top: -100px;\n        opacity: 0;\n        @include transition(all, .2s);\n    }\n\n    h2 {\n        color: $white-color;\n        font-size: 42px;\n        font-family: 'Oswald', sans-serif;\n        font-weight: 700;\n        line-height: 52px;\n        margin-top: 35px;\n        margin-bottom: 8px;\n        position: relative;\n        top: -100px;\n        opacity: 0;\n        @include transition(all, .4s);\n    }\n\n    p {\n        color: $white-color;\n        font-size: 16px;\n        margin-bottom: 40px;\n        position: relative;\n        top: -100px;\n        opacity: 0;\n        @include transition(all, .6s);\n    }\n\n    a {\n        position: relative;\n        top: -100px;\n        opacity: 0;\n        @include transition(all, .8s);\n\n        span {\n            font-size: 13px;\n            color: $white-color;\n            background: $primary-color;\n            display: inline-block;\n            font-weight: 700;\n            letter-spacing: 2px;\n            text-transform: uppercase;\n            padding: 14px 20px;\n            border-radius: 4px 0 0 4px;\n            margin-right: 1px;\n        }\n        \n        i {\n            font-size: 20px;\n            display: inline-block;\n            background: $primary-color;\n            padding: 11px 5px 16px 8px;\n            color: $white-color;\n            border-radius: 0 4px 4px 0;\n        }\n    }\n    \n    .show {\n        opacity: 1;\n    }\n}\n\n.hero__slider {\n    position: relative;\n\n    .swiper-slide {\n        &-active {\n            .hero__text {\n\n                .label {\n                    top: 0;\n                    opacity: 1;\n                }\n\n                h2 {\n                    top: 0;\n                    opacity: 1;\n                }\n\n                p {\n                    top: 0;\n                    opacity: 1;\n                }\n\n                a {\n                    top: 0;\n                    opacity: 1;\n                }\n            }\n        }\n    }\n}\n\n","/*---------------------\n  Product\n-----------------------*/\n.product {\n  padding-bottom: 60px;\n  padding-top: 80px;\n\n}\n\n.product-page {\n  padding-top: 60px;\n}\n\n.btn__all {\n  text-align: right;\n  margin-bottom: 30px;\n}\n\n.trending__product {\n  margin-bottom: 50px;\n}\n\n.popular__product {\n  margin-bottom: 50px;\n}\n\n.recent__product {\n  margin-bottom: 50px;\n}\n\n.product__item {\n  margin-bottom: 30px;\n}\n\n.product__item__pic {\n  height: 325px;\n  position: relative;\n  border-radius: 5px;\n\n  img {\n    position: absolute;\n  }\n\n  .ep {\n    font-size: 13px;\n    color: $white-color;\n    background: $primary-color;\n    display: inline-block;\n    padding: 2px 12px;\n    border-radius: 4px;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n  }\n\n  .comment {\n    font-size: 13px;\n    color: $white-color;\n    background: #3d3d3d;\n    display: inline-block;\n    padding: 2px 10px;\n    border-radius: 4px;\n    position: absolute;\n    left: 10px;\n    bottom: 10px;\n  }\n\n  .view {\n    font-size: 13px;\n    color: $white-color;\n    background: #3d3d3d;\n    display: inline-block;\n    padding: 2px 10px;\n    border-radius: 4px;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n  }\n}\n\n.product__item__text {\n  padding-top: 20px;\n\n  ul {\n    margin-bottom: 10px;\n\n    li {\n      list-style: none;\n      font-size: 10px;\n      color: $white-color;\n      font-weight: 700;\n      padding: 1px 10px;\n      background: rgba(255, 255, 255, 0.2);\n      border-radius: 50px;\n      display: inline-block;\n    }\n  }\n\n  h5 {\n\n    a {\n      color: $white-color;\n      font-weight: 700;\n      line-height: 26px;\n    }\n  }\n}\n\n.product__sidebar {\n\n  .section-title {\n\n    h5 {\n      color: $white-color;\n      font-weight: 600;\n      font-family: 'Oswald', sans-serif;\n      line-height: 21px;\n      text-transform: uppercase;\n      padding-left: 20px;\n      position: relative;\n\n      &:after {\n        position: absolute;\n        left: 0;\n        top: -6px;\n        height: 32px;\n        width: 4px;\n        background: $primary-color;\n        content: \"\";\n      }\n    }\n  }\n}\n\n.product__sidebar__view {\n  position: relative;\n  margin-bottom: 80px;\n\n  .filter__controls {\n    position: absolute;\n    right: 0;\n    top: -5px;\n\n    li {\n      list-style: none;\n      font-size: 13px;\n      color: #b7b7b7;\n      display: inline-block;\n      margin-right: 7px;\n      cursor: pointer;\n\n      &.active {\n        color: $white-color;\n      }\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n}\n\n.product__sidebar__view__item {\n  height: 190px;\n  position: relative;\n  border-radius: 5px;\n  margin-bottom: 20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgb(0,0,0);\n    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 23%, rgba(255,255,255,0) 100%);\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 0;\n  }\n\n  .ep {\n    font-size: 13px;\n    color: $white-color;\n    background: $primary-color;\n    display: inline-block;\n    padding: 2px 12px;\n    border-radius: 4px;\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    z-index: 2;\n  }\n\n  .view {\n    font-size: 13px;\n    color: $white-color;\n    background: #3d3d3d;\n    display: inline-block;\n    padding: 2px 10px;\n    border-radius: 4px;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    z-index: 2;\n  }\n\n  h5 {\n    position: absolute;\n    left: 0;\n    bottom: 25px;\n    width: 100%;\n    padding: 0 30px 0 20px;\n    z-index: 2;\n\n    a {\n      color: $white-color;\n      font-weight: 700;\n      line-height: 26px;\n    }\n  }\n}\n\n.product__sidebar__comment {\n  margin-bottom: 35px;\n}\n\n.product__sidebar__comment__item {\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n\n.product__sidebar__comment__item__pic {\n  float: left;\n  margin-right: 15px;\n}\n\n.product__sidebar__comment__item__text {\n  overflow: hidden;\n\n  ul {\n    margin-bottom: 10px;\n\n    li {\n      list-style: none;\n      font-size: 10px;\n      color: $white-color;\n      font-weight: 700;\n      padding: 1px 10px;\n      background: rgba(255, 255, 255, 0.2);\n      border-radius: 50px;\n      display: inline-block;\n    }\n  }\n\n  h5 {\n    margin-bottom: 10px;\n\n    a {\n      color: $white-color;\n      font-weight: 700;\n      line-height: 26px;\n    }\n  }\n\n  span {\n    display: block;\n    font-size: 13px;\n    color: #b7b7b7;\n  }\n}\n\n.product__page__title {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  padding-bottom: 10px;\n  margin-bottom: 30px;\n\n  .section-title {\n    margin-bottom: 0;\n  }\n\n  .product__page__filter {\n    text-align: right;\n\n    p {\n      color: $white-color;\n      display: inline-block;\n      margin-bottom: 0;\n      margin-right: 16px;\n    }\n\n    .nice-select {\n      float: none;\n      display: inline-block;\n      font-size: 15px;\n      color: #3d3d3d;\n      font-weight: 700;\n      border-radius: 0;\n      padding-left: 15px;\n      padding-right: 40px;\n      height: 32px;\n      line-height: 32px;\n\n      &:after {\n        border-bottom: 2px solid #111;\n        border-right: 2px solid #111;\n        height: 8px;\n        top: 47%;\n        width: 8px;\n        right: 15px;\n      }\n\n      .list {\n        margin-top: 0;\n        border-radius: 0;\n      }\n    }\n  }\n}\n\n.product__pagination {\n  padding-top: 15px;\n\n  a {\n    display: inline-block;\n    font-size: 15px;\n    color: #b7b7b7;\n    font-weight: 600;\n    height: 50px;\n    width: 50px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    line-height: 48px;\n    text-align: center;\n    @include transition(all, .3s);\n\n    &:hover {\n      color: #ffffff;\n    }\n\n    &.current-page {\n      border: 1px solid #ffffff;\n    }\n\n    i {\n      color: #b7b7b7;\n      font-size: 15px;\n    }\n  }\n}","/*---------------------\n  Anime Details\n-----------------------*/\n.anime-details {\n    padding-top: 60px;\n}\n\n.anime__details__content {\n    margin-bottom: 65px;\n}\n\n.anime__details__text {\n    position: relative;\n\n    p {\n        color: #b7b7b7;\n        font-size: 18px;\n        line-height: 30px;\n    }\n}\n\n.anime__details__pic {\n    height: 440px;\n    border-radius: 5px;\n    position: relative;\n\n    .comment {\n        font-size: 13px;\n        color: $white-color;\n        background: #3d3d3d;\n        display: inline-block;\n        padding: 2px 10px;\n        border-radius: 4px;\n        position: absolute;\n        left: 10px;\n        bottom: 25px;\n    }\n\n    .view {\n        font-size: 13px;\n        color: $white-color;\n        background: #3d3d3d;\n        display: inline-block;\n        padding: 2px 10px;\n        border-radius: 4px;\n        position: absolute;\n        right: 10px;\n        bottom: 25px;\n    }\n}\n\n.anime__details__title {\n    margin-bottom: 20px;\n\n    h3 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 13px;\n    }\n\n    span {\n        font-size: 15px;\n        color: #b7b7b7;\n        display: block;\n    }\n}\n\n.anime__details__rating {\n    text-align: center;\n    position: absolute;\n    right: 0;\n    top: 0;\n\n    .rating {\n\n        i {\n            font-size: 24px;\n            color: #e89f12;\n            display: inline-block;\n        }\n    }\n\n    span {\n        display: block;\n        font-size: 18px;\n        color: #b7b7b7;\n    }\n}\n\n.anime__details__widget {\n    margin-bottom: 15px;\n\n    ul {\n        margin-bottom: 20px;\n\n        li {\n            list-style: none;\n            font-size: 15px;\n            color: $white-color;\n            line-height: 30px;\n            position: relative;\n            padding-left: 18px;\n\n            &:before {\n                position: absolute;\n                left: 0;\n                top: 12px;\n                height: 6px;\n                width: 6px;\n                background: #b7b7b7;\n                content: \"\";\n            }\n            \n            span {\n                color: #b7b7b7;\n                width: 115px;\n                display: inline-block;\n            }\n        }\n    }\n}\n\n.anime__details__btn {\n\n    .follow-btn {\n        font-size: 13px;\n        color: $white-color;\n        background: $primary-color;\n        display: inline-block;\n        font-weight: 700;\n        letter-spacing: 2px;\n        text-transform: uppercase;\n        padding: 14px 20px;\n        border-radius: 4px;\n        margin-right: 11px;\n    }\n\n    .watch-btn {\n\n        span {\n            font-size: 13px;\n            color: $white-color;\n            background: $primary-color;\n            display: inline-block;\n            font-weight: 700;\n            letter-spacing: 2px;\n            text-transform: uppercase;\n            padding: 14px 20px;\n            border-radius: 4px 0 0 4px;\n            margin-right: 1px;\n        }\n        \n        i {\n            font-size: 20px;\n            display: inline-block;\n            background: $primary-color;\n            padding: 11px 5px 16px 8px;\n            color: $white-color;\n            border-radius: 0 4px 4px 0;\n        }\n    }\n}\n\n.anime__details__review {\n    margin-bottom: 55px;\n}\n\n.anime__review__item {\n    overflow: hidden;\n    margin-bottom: 15px;\n}\n\n.anime__review__item__pic {\n    float: left;\n    margin-right: 20px;\n    position: relative;\n\n    &:before {\n        position: absolute;\n        right: -30px;\n        top: 15px;\n        border-top: 15px solid transparent;\n        border-left: 15px solid #1d1e39;\n        content: \"\";\n        transform: rotate(45deg);\n    }\n    \n    img {\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n    }\n}\n\n.anime__review__item__text{\n   overflow: hidden;\n    background: #1d1e39;\n    padding: 18px 30px 16px 20px;\n    border-radius: 10px;\n\n    h6 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 10px;\n\n        span {\n            color: #b7b7b7;\n            font-weight: 400;\n        }\n    }\n\n    p {\n        color: #b7b7b7;\n        line-height: 23px;\n        margin-bottom: 0;\n    }\n}\n\n.anime__details__form {\n\n    form {\n\n        textarea {\n            width: 100%;\n            font-size: 15px;\n            color: #b7b7b7;\n            padding-left: 20px;\n            padding-top: 12px;\n            height: 110px;\n            border: none;\n            border-radius: 5px;\n            resize: none;\n            margin-bottom: 24px;\n        }\n\n        button {\n            font-size: 11px;\n            color: $white-color;\n            font-weight: 700;\n            letter-spacing: 2px;\n            text-transform: uppercase;\n            background: $primary-color;\n            border: none;\n            padding: 10px 15px;\n            border-radius: 2px;\n        }\n    }\n}","/*---------------------\n  Anime Watching\n-----------------------*/\n.anime__video__player {\n  margin-bottom: 70px;\n\n  .plyr--video {\n    border-radius: 5px;\n    background: transparent;\n  }\n\n  .plyr audio,\n  .plyr iframe,\n  .plyr video {\n    width: 102%;\n  }\n\n  .plyr--full-ui.plyr--video .plyr__control--overlaid {\n    display: block;\n  }\n\n  .plyr--video .plyr__control.plyr__tab-focus,\n  .plyr--video .plyr__control:hover,\n  .plyr--video .plyr__control[aria-expanded=true] {\n    background: transparent;\n  }\n\n  .plyr--video .plyr__controls {\n    background: transparent;\n  }\n\n  .plyr--video .plyr__progress__buffer {\n    color: transparent;\n  }\n\n  .plyr--full-ui input[type=range] {\n    color: $white-color;\n  }\n\n  .plyr__controls .plyr__controls__item.plyr__progress__container {\n    position: absolute;\n    left: 26px;\n    bottom: 45px;\n    width: calc(100% - 60px);\n  }\n\n  .plyr__menu {\n    margin-right: 70px;\n  }\n\n  .plyr__controls .plyr__controls__item:first-child {\n    position: absolute;\n    left: 32px;\n    bottom: 8px;\n  }\n\n  .plyr__controls .plyr__controls__item:last-child {\n    position: absolute;\n    right: 32px;\n    bottom: 8px;\n  }\n\n  .plyr__volume {\n    position: absolute;\n    width: auto;\n    left: 76px;\n    bottom: 8px;\n  }\n\n  .plyr__controls .plyr__controls__item.plyr__time {\n    position: absolute;\n    left: 106px;\n    bottom: 12px;\n  }\n\n  .plyr__control--overlaid {\n    background: transparent;\n    background: var(--plyr-video-control-background-hover, var(--plyr-color-main, var(--plyr-color-main, transparent)));\n\n    svg {\n      height: 60px;\n      width: 50px;\n    }\n  }\n}\n\n.anime__details__episodes {\n  margin-bottom: 35px;\n\n  a {\n    display: inline-block;\n    font-size: 15px;\n    color: $white-color;\n    background: rgba(255, 255, 255, .2);\n    padding: 10px 20px;\n    border-radius: 4px;\n    margin-right: 15px;\n    margin-bottom: 20px;\n    @include transition(all, .3s);\n\n    &:hover {\n      color: $black-color;\n      background: $white-color;\n    }\n  }\n}","/*---------------------\n  Breadcrumb\n-----------------------*/\n.breadcrumb-option {\n    padding-top: 35px;\n}\n\n.breadcrumb__links {\n\n    a {\n        font-size: 15px;\n        color: $white-color;\n        margin-right: 18px;\n        display: inline-block;\n        position: relative;\n\n        i {\n            margin-right: 5px;\n            color: $primary-color;\n        }\n\n        &:after {\n            position: absolute;\n            right: -14px;\n            top: 0;\n            content: '\\f105';\n            font-family: \"FontAwesome\";\n        }\n    }\n\n    span {\n        font-size: 15px;\n        color: #b7b7b7;\n        display: inline-block;\n    }\n}\n\n/*---------------------\n    Normal Breadcrumb\n-----------------------*/\n.normal-breadcrumb {\n    height: 300px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.normal__breadcrumb__text {\n\n    h2 {\n        color: $white-color;\n        font-size: 48px;\n        font-family: 'Oswald', sans-serif;\n        font-weight: 700;\n        margin-bottom: 22px;\n    }\n\n    p {\n        color: $white-color;\n        font-size: 24px;\n        margin-bottom: 0;\n    }\n}\n","/*---------------------\n    Blog\n-----------------------*/\n.blog {\n    padding-top: 70px;\n    padding-bottom: 90px;\n}\n\n.blog__item {\n    height: 580px;\n    position: relative;\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-bottom: 10px;\n\n    &.small__item {\n        height: 285px;\n\n        .blog__item__text {\n            padding: 0 30px;\n\n            p {\n                margin-bottom: 5px;\n            }\n\n            h4 {\n                \n                a {\n                    font-size: 20px;\n                    line-height: 30px;\n                }\n            }\n        }\n    }\n}\n\n.blog__item__text {\n    position: absolute;\n    left: 0;\n    bottom: 25px;\n    text-align: center;\n    width: 100%;\n    padding: 0 105px;\n\n    p {\n        color: $white-color;\n        margin-bottom: 12px;\n\n        span {\n            color: $primary-color;\n            margin-right: 5px;\n        }\n    }\n\n    h4 {\n\n        a {\n            color: $white-color;\n            line-height: 34px;\n        }\n    }\n}","/*---------------------\n  Blog Details\n-----------------------*/\n.blog-details {\n    padding-top: 70px;\n}\n\n.blog__details__title {\n    text-align: center;\n    margin-bottom: 70px;\n\n    h6 {\n        font-size: 15px;\n        color: $white-color;\n        font-weight: 700;\n        text-transform: uppercase;\n        margin-bottom: 30px;\n\n        span {\n            color: #b7b7b7;\n            font-weight: 400;\n            text-transform: none;\n        }\n    }\n\n    h2 {\n        color: $white-color;\n        font-size: 48px;\n        font-weight: 700;\n        line-height: 60px;\n        margin-bottom: 38px;\n    }\n\n    .blog__details__social {\n\n        a {\n            display: inline-block;\n            font-size: 15px;\n            color: $white-color;\n            padding: 16px 35px 14px 20px;\n            border-radius: 2px;\n            margin-right: 6px;\n\n            &:last-child {\n                margin-right: 0;\n            }\n\n            &.facebook {\n                background: #3b5998;\n            }\n\n            &.pinterest {\n                background: #ca2027;\n            }\n\n            &.linkedin {\n                background: #0372b1;\n            }\n\n            &.twitter {\n                background: #39a1f2;\n            }\n\n            i {\n                margin-right: 6px;\n            }\n        }\n    }\n}\n\n.blog__details__pic {\n    margin-bottom: 30px;\n\n    img {\n        min-width: 100%;\n    }\n}\n\n.blog__details__text {\n    margin-bottom: 40px;\n\n    p {\n        color: $white-color;\n        font-size: 17px;\n        line-height: 30px;\n    }\n}\n\n.blog__details__item__text {\n    margin-bottom: 42px;\n\n    h4 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 35px;\n    }\n\n    img {\n        min-width: 100%;\n        margin-bottom: 26px;\n    }\n\n    p {\n        color: $white-color;\n        font-size: 17px;\n        line-height: 30px;\n        margin-bottom: 0;\n    }\n}\n\n.blog__details__tags {\n    margin-bottom: 60px;\n\n    a {\n        display: inline-block;\n        color: #b7b7b7;\n        font-size: 12px;\n        font-weight: 700;\n        letter-spacing: 2px;\n        text-transform: uppercase;\n        background: rgba(255, 255, 255, 0.1);\n        border-radius: 2px;\n        margin-right: 6px;\n        padding: 6px 15px;\n        margin-bottom: 10px;\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}\n\n.blog__details__btns {\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    padding: 20px 0 15px;\n    margin-bottom: 65px;\n}\n\n.blog__details__btns__item {\n    margin-bottom: 20px;\n\n    &.next__btn {\n        text-align: right;\n    }\n\n    h5 {\n        \n        a {\n            font-size: 17px;\n            letter-spacing: 2px;\n            color: $white-color;\n\n            span {\n                font-size: 30px;\n                color: #b7b7b7;\n                position: relative;\n                top: 8px;\n            }\n        }\n    }\n}\n\n.blog__details__comment {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    padding-bottom: 30px;\n    \n    h4 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 26px;\n    }\n}\n\n.blog__details__comment__item {\n    margin-bottom: 40px;\n    overflow: hidden;\n\n    &.blog__details__comment__item--reply {\n        padding-left: 112px;\n    }\n}\n\n.blog__details__comment__item__pic {\n    float: left;\n    margin-right: 40px;\n}\n\n.blog__details__comment__item__text {\n    overflow: hidden;\n\n    span {\n        font-size: 14px;\n        color: #b7b7b7;\n        display: block;\n        margin-bottom: 10px;\n    }\n\n    h5 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 10px;\n    }\n\n    p {\n        color: #b7b7b7;\n        font-size: 14px;\n        line-height: 22px;\n        margin-bottom: 25px;\n    }\n\n    a {\n        display: inline-block;\n        color: $white-color;\n        background: rgba(255, 255, 255, 0.1);\n        padding: 6px 20px;\n        letter-spacing: 2px;\n        border-radius: 2px;\n        margin-right: 14px;\n        @include transition(all, .3s);\n\n        &:hover {\n            background: $primary-color;\n        }\n    }\n}\n\n.blog__details__form {\n    padding-top: 50px;\n\n    h4 {\n        color: $white-color;\n        font-weight: 700;\n        margin-bottom: 26px;\n    }\n\n    form {\n\n        input {\n            height: 50px;\n            width: 100%;\n            background: $white-color;\n            font-size: 15px;\n            color: #a6a6a6;\n            padding-left: 20px;\n            border-radius: 2px;\n            border: none;\n            margin-bottom: 30px;\n\n            &::placeholder {\n                color: #a6a6a6;\n            }\n        }\n\n        textarea {\n            height: 115px;\n            width: 100%;\n            background: $white-color;\n            font-size: 15px;\n            color: #a6a6a6;\n            padding-left: 20px;\n            border-radius: 2px;\n            padding-top: 12px;\n            resize: none;\n            border: none;\n            margin-bottom: 34px;\n\n            &::placeholder {\n                color: #a6a6a6;\n            }\n        }\n    }\n}","/*---------------------\n  Login\n-----------------------*/\n.login {\n    padding-top: 130px;\n    padding-bottom: 120px;\n}\n\n.login__form {\n    position: relative;\n    padding-left: 145px;\n    \n    &:after {\n        position: absolute;\n        right: -14px;\n        top: -40px;\n        height: 330px;\n        width: 1px;\n        background: rgba(255, 255, 255, 0.2);\n        content: \"\";\n    }\n\n    h3 {\n        color: $white-color;\n        font-weight: 700;\n        font-family: 'Oswald', sans-serif;\n        margin-bottom: 30px;\n    }\n\n    form {\n        \n        .input__item {\n            position: relative;\n            width: 370px;\n            margin-bottom: 20px;\n\n            &:before {\n                position: absolute;\n                left: 50px;\n                top: 10px;\n                height: 30px;\n                width: 1px;\n                background: #b7b7b7;\n                content: \"\";\n            }\n\n            input {\n                height: 50px;\n                width: 100%;\n                font-size: 15px;\n                color: #b7b7b7;\n                background: $white-color;\n                border: none;\n                padding-left: 76px;\n                \n                &::placeholder {\n                    color: #b7b7b7;\n                }\n            }\n\n            span {\n                color: #b7b7b7;\n                font-size: 20px;\n                position: absolute;\n                left: 15px;\n                top: 13px;\n            }\n        }\n\n        button {\n            border-radius: 0;\n            margin-top: 10px;\n        }\n    }\n\n    .forget_pass {\n        font-size: 15px;\n        color: $white-color;\n        display: inline-block;\n        position: absolute;\n        right: 60px;\n        bottom: 12px;\n    }\n}\n\n.login__register {\n    padding-left: 30px;\n\n    h3 {\n        color: $white-color;\n        font-weight: 700;\n        font-family: 'Oswald', sans-serif;\n        margin-bottom: 30px;\n    }\n\n    .primary-btn {\n        background: $primary-color;\n        padding: 12px 42px;\n    }\n}\n\n.login__social {\n    padding-top: 52px;\n}\n\n.login__social__links {\n    text-align: center;\n    \n    span {\n        color: $white-color;\n        display: block;\n        font-size: 13px;\n        font-weight: 700;\n        letter-spacing: 2px;\n        text-transform: uppercase;\n        margin-bottom: 30px;\n    }\n\n    ul {\n\n        li {\n            list-style: none;\n            margin-bottom: 15px;\n\n            &:last-child {\n                margin-bottom: 0;\n            }\n\n            a {\n                color: $white-color;\n                display: block;\n                font-size: 13px;\n                font-weight: 700;\n                letter-spacing: 2px;\n                text-transform: uppercase;\n                width: 460px;\n                padding: 14px 0;\n                position: relative;\n                margin: 0 auto;\n\n                &.facebook {\n                    background: #4267b2;\n                }\n\n                &.google {\n                    background: #ff4343;\n                }\n\n                &.twitter {\n                    background: #1da1f2;\n                }\n\n                i {\n                    font-size: 20px;\n                    position: absolute;\n                    left: 32px;\n                    top: 14px;\n                }\n            }\n        }\n    }\n}","/*---------------------\n  Sign Up\n-----------------------*/\n.signup {\n  padding-top: 130px;\n  padding-bottom: 150px;\n\n  .login__form {\n\n      &:after {\n          height: 450px;\n      }\n\n      h5 {\n        font-size: 15px;\n        color: $white-color;\n        margin-top: 36px;\n\n        a {\n          color: $primary-color;\n          font-weight: 700;\n        }\n      }\n  }\n\n  .login__social__links {\n    text-align: left;\n    padding-left: 40px;\n\n      h3 {\n        color: $white-color;\n        font-weight: 700;\n        font-family: 'Oswald', sans-serif;\n        margin-bottom: 30px;\n    }\n\n    ul {\n\n      li {\n\n        a {\n          margin: 0;\n          text-align: center;\n        }\n      }\n    }\n  }\n}","/*---------------------\n  Footer\n-----------------------*/\n.footer {\n  background: #070720;\n  padding-top: 60px;\n  padding-bottom: 40px;\n  position: relative;\n}\n\n.page-up {\n  position: absolute;\n  left: 50%;\n  top: -25px;\n  margin-left: -25px;\n\n  a {\n    display: inline-block;\n    font-size: 36px;\n    color: $white-color;\n    height: 50px;\n    width: 50px;\n    background: $primary-color;\n    line-height: 50px;\n    text-align: center;\n    border-radius: 50%;\n\n    span {\n      position: relative;\n      top: 2px;\n      left: -1px;\n    }\n  }\n}\n\n.footer__nav {\n  text-align: center;\n\n  ul {\n\n    li {\n      list-style: none;\n      display: inline-block;\n      position: relative;\n      margin-right: 40px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      a {\n        font-size: 15px;\n        color: #b7b7b7;\n        display: block;\n        font-weight: 700;\n      }\n    }\n  }\n}\n\n.footer__copyright__text {\n  color: #b7b7b7;\n  margin-bottom: 0;\n  text-align: right;\n\n  a {\n    color: $primary-color;\n  }\n}","/*--------------------------------- Responsive Media Quaries -----------------------------*/\n@media only screen and (min-width: 1200px) and (max-width: 1300px) {\n  .hero {\n    overflow: hidden;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  .container {\n    max-width: 1170px;\n  }\n}\n\n/* Medium Device = 1200px */\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .hero {\n    overflow: hidden;\n  }\n\n  .login__form {\n    position: relative;\n    padding-left: 32px;\n  }\n\n  .login__social__links ul li a {\n    width: 380px;\n  }\n\n  .blog__item__text {\n    padding: 0 50px;\n  }\n}\n\n/* Tablet Device = 768px */\n@media only screen and (min-width: 768px) and (max-width: 991px) {\n  .hero {\n    overflow: hidden;\n  }\n\n  .header {\n    position: relative;\n\n    .container {\n      position: relative;\n    }\n  }\n\n  .header__right {\n    position: absolute;\n    right: 120px;\n    top: -42px;\n    padding: 0;\n  }\n\n  .header__menu {\n    display: none;\n  }\n\n  .slicknav_menu {\n    background: transparent;\n    padding: 0;\n    display: block;\n  }\n\n  .slicknav_nav {\n    position: absolute;\n    left: 0;\n    top: 60px;\n    width: 100%;\n    background: $white-color;\n    padding: 15px 30px;\n    z-index: 9;\n  }\n\n  .slicknav_nav ul {\n    margin: 0;\n  }\n\n  .slicknav_nav .slicknav_row,\n  .slicknav_nav a {\n    padding: 7px 0;\n    margin: 0;\n    color: $heading-color;\n    font-weight: 600;\n  }\n\n  .slicknav_btn {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background-color: #222;\n    position: absolute;\n    right: 0;\n    top: 9px;\n  }\n\n  .slicknav_nav .slicknav_arrow {\n    color: $heading-color;\n  }\n\n  .slicknav_nav .slicknav_row:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: $heading-color;\n  }\n\n  .slicknav_nav a:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: $heading-color;\n  }\n\n  .product__sidebar {\n    padding-top: 50px;\n  }\n\n  .footer__logo {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer__nav {\n    margin-bottom: 15px;\n  }\n\n  .footer__copyright__text {\n    text-align: center;\n  }\n\n  .anime__details__widget ul li span {\n    width: 90px;\n  }\n\n  .anime__details__pic {\n    margin-bottom: 40px;\n  }\n\n  .anime__details__sidebar {\n    padding-top: 50px;\n  }\n\n  .login__form {\n    padding-left: 0;\n    margin-bottom: 40px;\n\n    &:after {\n      display: none;\n    }\n  }\n\n  .login__form form .input__item {\n    width: auto;\n  }\n\n  .login__register {\n    padding-left: 0;\n  }\n\n  .signup .login__social__links {\n    padding-left: 0;\n  }\n}\n\n/* Wide Mobile = 480px */\n@media only screen and (max-width: 767px) {\n  .hero {\n    overflow: hidden;\n  }\n\n  .header {\n    position: relative;\n\n    .container {\n      position: relative;\n    }\n  }\n\n  .header__right {\n    position: absolute;\n    right: 120px;\n    top: -42px;\n    padding: 0;\n  }\n\n  .header__menu {\n    display: none;\n  }\n\n  .slicknav_menu {\n    background: transparent;\n    padding: 0;\n    display: block;\n  }\n\n  .slicknav_nav {\n    position: absolute;\n    left: 0;\n    top: 60px;\n    width: 100%;\n    background: $white-color;\n    padding: 15px 30px;\n    z-index: 9;\n  }\n\n  .slicknav_nav ul {\n    margin: 0;\n  }\n\n  .slicknav_nav .slicknav_row,\n  .slicknav_nav a {\n    padding: 7px 0;\n    margin: 0;\n    color: $heading-color;\n    font-weight: 600;\n  }\n\n  .slicknav_btn {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background-color: #222;\n    position: absolute;\n    right: 0;\n    top: 9px;\n  }\n\n  .slicknav_nav .slicknav_arrow {\n    color: $heading-color;\n  }\n\n  .slicknav_nav .slicknav_row:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: $heading-color;\n  }\n\n  .slicknav_nav a:hover {\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n    border-radius: 0;\n    background: transparent;\n    color: $heading-color;\n  }\n\n  .product__sidebar {\n    padding-top: 50px;\n  }\n\n  .footer__logo {\n    text-align: center;\n    margin-bottom: 20px;\n  }\n\n  .footer__nav {\n    margin-bottom: 15px;\n  }\n\n  .footer__copyright__text {\n    text-align: center;\n  }\n\n  .blog__details__title h2 {\n    font-size: 34px;\n    line-height: normal;\n  }\n\n  .anime__details__pic {\n    margin-bottom: 40px;\n  }\n\n  .anime__details__sidebar {\n    padding-top: 50px;\n  }\n\n  .btn__all {\n    text-align: left;\n  }\n\n  .product__page__title .section-title {\n    margin-bottom: 30px;\n  }\n\n  .product__page__title .product__page__filter {\n    text-align: left;\n  }\n\n  .anime__details__rating {\n    text-align: left;\n    position: relative;\n    margin-bottom: 20px;\n  }\n\n  .blog__details__social {\n    overflow: hidden;\n  }\n\n  .blog__details__title .blog__details__social a {\n    margin-right: 10px;\n    margin-bottom: 10px;\n    width: calc(50% - 10px);\n    float: left;\n  }\n\n  .login__form {\n    padding-left: 0;\n    margin-bottom: 40px;\n\n    &:after {\n      display: none;\n    }\n  }\n\n  .login__form form .input__item {\n    width: auto;\n  }\n\n  .signup .login__social__links {\n    padding-left: 0;\n  }\n\n  .login__social__links ul li a {\n    width: auto;\n  }\n\n  .blog__item__text {\n    padding: 0 30px;\n  }\n\n  .login__register {\n    padding-left: 0;\n  }\n\n  .product__sidebar__view .filter__controls li {\n    margin-right: 2px;\n  }\n\n  .search-model-form input {\n    width: 100%;\n  }\n}\n\n/* Small Device = 320px */\n@media only screen and (max-width: 479px) {\n  .hero__slider.owl-carousel .owl-nav {\n    display: none;\n  }\n\n  .hero__items {\n    padding: 250px 0 42px 15px;\n  }\n\n  .hero__text h2 {\n    font-size: 32px;\n  }\n\n  .footer__nav ul li {\n    margin-right: 10px;\n  }\n\n  .anime__details__btn .follow-btn {\n    padding: 14px 26px;\n    margin-right: 11px;\n    margin-bottom: 25px;\n  }\n\n  .anime__details__widget ul li span {\n    width: 85px;\n  }\n\n  .anime__video__player .plyr__volume {\n    left: 65px;\n  }\n\n  .anime__video__player .plyr__controls .plyr__controls__item.plyr__time {\n    left: 95px;\n  }\n\n  .anime__video__player .plyr__menu {\n    margin-right: 60px;\n  }\n  .blog__details__title h2 {\n    font-size: 30px;\n    line-height: normal;\n  }\n\n  .blog__details__title .blog__details__social a {\n    padding: 16px 25px 14px 20px;\n  }\n\n  .blog__details__comment__item.blog__details__comment__item--reply {\n    padding-left: 0;\n  }\n\n  .blog__details__comment__item__pic {\n    margin-right: 25px;\n  }\n\n  .blog__details__comment__item__text a {\n    margin-right: 6px;\n  }\n\n  .login__social__links ul li a i {\n    left: 20px;\n  }\n\n  .login__form .forget_pass {\n    position: relative;\n    left: 0;\n    bottom: 0;\n    margin-top: 25px;\n  }\n\n  .header__right a {\n    margin-right: 10px;\n  }\n  .anime__review__item__text h6 span {\n    font-size: 12px;\n  }\n  .anime__review__item__text {\n    padding: 18px 20px 20px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/bg-elements.js":
/*!*******************************!*\
  !*** ./src/js/bg-elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')
    
    elements.forEach(item => {
        const src = item.dataset.setbg
        item.style.backgroundImage = `url(${src})`
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bgElements);


/***/ }),

/***/ "./src/js/mainData.js":
/*!****************************!*\
  !*** ./src/js/mainData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mainData = () => {
    const renderAnimeList = (array, ganres) => {
        const wrapper = document.querySelector('.product .col-lg-8')
        wrapper.innerHTML = ''

        ganres.forEach((ganreItem) => {
            const productBlock = document.createElement('div')
            const listBlock = document.createElement('div')
            const list = array.filter(item => item.ganre === ganreItem)
            console.log(list);

            listBlock.classList.add('row')
            productBlock.insertAdjacentHTML('afterbegin', `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganreItem}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="/categories.html" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            `)

            list.forEach(item => {
                console.log(item);
                listBlock.insertAdjacentHTML('afterbegin', `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                <div class="ep">${item.rating} / 10</div>
                                <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                            </div>
                            <div class="product__item__text">
                                <ul>
                                    <li>Active</li>
                                    <li>Movie</li>
                                </ul>
                                <h5><a href="/anime-details.html">${item.title}</a></h5>
                            </div>
                        </div>
                    </div>
                `)
            })

            productBlock.append(listBlock)
            wrapper.append(productBlock)

            wrapper.querySelectorAll('.set-bg').forEach(item => {
                const src = item.dataset.setbg
                item.style.backgroundImage = `url(${src})`
            })
        })
    }

    const renderTopAnime = (array) => {
        const wrapper = document.querySelector('.filter__gallery')

        if (wrapper) {
            wrapper.innerHTML = ''
            array.forEach(item => {
                wrapper.insertAdjacentHTML('afterbegin', `
                    <div class="product__sidebar__view__item set-bg mix"
                        data-setbg="${item.image}">
                        <div class="ep">${item.rating} / ?</div>
                        <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                        <h5><a href="/anime-details.html">${item.title}</a></h5>
                    </div>
                `)
            });
    
            wrapper.querySelectorAll('.set-bg').forEach(item => {
                const src = item.dataset.setbg
                item.style.backgroundImage = `url(${src})`
            })
        }
    }

    fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            const ganres = new Set()
            renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            renderAnimeList(data, ganres)
        })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainData);


/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
    const modal = document.querySelector('.search-model')
    const modalBtn = document.querySelector('.icon_search')
    const modalClose = document.querySelector('.search-close-switch')
    const searchInput = document.querySelector('#search-input')
    const wrapper = document.querySelector('.search-model-result')

    wrapper.style.width = '100%'
    wrapper.style.maxWidth = '500px'

    const renderFunc = (items) => {
        wrapper.innerHTML = ''

        items.forEach(item => {
            wrapper.insertAdjacentHTML('afterbegin', `
                <a class="p-2" href="/anime-details.html" target="_blank">${item.title}</a>
            `)
        });
    }

    const searchFunc = (searchStr) => {
        fetch('https://anime-b58d4-default-rtdb.firebaseio.com/anime.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const filteredData = data.filter(dataItem => {
                    return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) || dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
                })
                
                const result = filteredData.slice(0, 5)    
                renderFunc(result)
            })
    }

    modalBtn.addEventListener('click', () => {
        modal.classList.add('search-model--active')
        searchInput.focus()
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('search-model--active')
        searchInput.value = ''
        wrapper.innerHTML = ''
    })

    searchInput.addEventListener('input', (e) => {
        searchFunc(e.target.value)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const preloader = () => {
    const preloader = document.querySelector('.preloder')
    
    preloader.classList.add('active')
    
    setTimeout(() => {
        preloader.classList.remove('active')
    }, 500)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preloader);


/***/ }),

/***/ "./src/js/scrollToTop.js":
/*!*******************************!*\
  !*** ./src/js/scrollToTop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton')
    
    topBtn.addEventListener('click', (e) => {
        e.preventDefault()
    
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);


/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
// import Swiper JS


// import Swiper styles
// import 'swiper/css';

const slider = () => {
    const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
        modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
         // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: "fade",
        speed: 1000
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = new Date().getTime();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
  };
  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");


function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const realIndex = swiper.realIndex;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        const indexBeforeLoopFix = swiper.activeIndex;
        swiper.loopFix({
          direction: newSlideIndex > currentSlideIndex ? 'next' : 'prev',
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
        const indexAfterFix = swiper.activeIndex;
        if (indexBeforeLoopFix === indexAfterFix) {
          swiper.slideToLoop(realIndex, 0, false, true);
        }
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");




function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) swiper.virtual.cache[index] = slideEl;
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}, swiper-slide`).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slidesEl.querySelectorAll(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);

    // Next Slide
    let nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    // Prev Slide
    let prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = e.closest(`.${params.slideClass}, swiper-slide`);
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute('data-swiper-slide-index', index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  // prepend last slides before start
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  if (!data.isMoved) {
    if (isLoop) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
    // need another loop fix
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(event.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate(realIndex);
    swiper.updateSlides();
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
      return;
    }
    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ elementIndex),
/* harmony export */   h: () => (/* binding */ getTranslate),
/* harmony export */   i: () => (/* binding */ elementTransitionEnd),
/* harmony export */   j: () => (/* binding */ isObject),
/* harmony export */   k: () => (/* binding */ getSlideTransformEl),
/* harmony export */   l: () => (/* binding */ elementStyle),
/* harmony export */   m: () => (/* binding */ elementNextAll),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ elementPrevAll),
/* harmony export */   p: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   q: () => (/* binding */ extend),
/* harmony export */   r: () => (/* binding */ deleteProps),
/* harmony export */   s: () => (/* binding */ setCSSProperty)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 10.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 17, 2023
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bg_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bg-elements.js */ "./src/js/bg-elements.js");
/* harmony import */ var _mainData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainData.js */ "./src/js/mainData.js");
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preloader.js */ "./src/js/preloader.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _scrollToTop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollToTop.js */ "./src/js/scrollToTop.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
// import '../index.html'









(0,_bg_elements_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_mainData_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_preloader_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_modal_js__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_scrollToTop_js__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_slider_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map