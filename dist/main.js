/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/commentPopup.js":
/*!*********************************!*\
  !*** ./modules/commentPopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showList.js */ \"./modules/showList.js\");\n/* eslint-disable */\n\n\nconst card = document.querySelector('.main');\nconst commentEl = document.querySelector('.comment-popup');\n\nconst commentItems = (commentObject) => {\n  const buttons = document.querySelectorAll('.comment-btn');\n  buttons.forEach(async (items, index) => {\n    items.addEventListener('click', async () => {\n      const presentButton = commentObject.find((sho) => sho.id === index + 1);\n      card.classList.add('active');\n      \n      const content = `\n\n    <div class=\"comment-section\">\n    <i class=\"bi bi-x-lg closeBtn\"></i>\n      <div class=\"image-section\">\n        <img src=\"${presentButton.image.original}\" alt=\"Movie flyer\">\n      </div>\n      <div class=\"description-section\">\n        <h2 >${presentButton.name}</h2>\n        <p class=\"summary\">${presentButton.summary}</p>\n      </div>\n      <p class=\"comment-title\">Comments(<span id=\"commentSection\">0</span>)</p>\n      <ul id=\"comment-container\" class=\"comment-container\">\n      </ul>\n      <form class=\"form-comment\">\n             <p>\n             <input type=\"text\" id=\"username\" placeholder=\"Enter user name\">\n             </p>\n             <p>\n             <input class=\"textarea\" type=\"text\" id=\"message\" placeholder=\"Enter your comments\">\n             </p>\n             <p><button type=\"submit\">Submit</button></p>\n             <span id=\"error\"></span>\n      </form>\n    </div>\n     `;\n      commentEl.innerHTML = content;\n      commentEl.classList.remove('active');\n      const close = document.querySelector('.closeBtn');\n      close.addEventListener('click', () => {\n        commentEl.classList.add('active');\n        card.classList.remove('active');\n      });\n      const user = document.getElementById('username');\n      const message = document.getElementById('message');\n      const form = document.querySelector('form');\n      const errorMsg = document.getElementById('error');\n      const id = index + 1;\n\n      form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const usernames = user.value;\n        const comments = message.value;\n\n        if (usernames === '' || comments === '') {\n          errorMsg.innerHTML = 'Please enter your username';\n          setTimeout(() => {\n            errorMsg.innerHTML = ' ';\n          }, 2000);\n        } else {\n          \n        try {\n          const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OBkwF2aqUCliQK0tc1AI/comments';\n\n          fetch(api, {\n            method: 'POST',\n            body: JSON.stringify({\n              item_id: id,\n              username: usernames,\n              comment: comments,\n            }),\n            headers: {\n              'Content-type': 'application/json; charset=UTF-8',\n            },\n          }).then((response) => {\n            if (response.ok) {\n              return response.json();\n            }\n            return Promise.reject(response);\n          }).then((data) => data);\n        } catch (error) {\n          return error;\n        }\n\n        form.reset();\n        setTimeout(() => {\n          ShowPopup(id);\n        }, 1000);\n\n      };\n      });\n    \n      const container = document.querySelector('#comment-container');\n      const ShowPopup = async (id) => {\n        await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OBkwF2aqUCliQK0tc1AI/comments?item_id=${id}`).then((response) => response.json()).then((data) => {\n          let markup = '';\n          data.forEach((elem, index) => {\n            markup += `\n          <li style=\"background-color: ${index % 2 && 'rgb(191, 4, 23)'}\">\n          <p>${elem.creation_date}:</p>\n          <h3>${elem.username}</h3>\n          <p>\" ${elem.comment} \".</p>\n          </li>\n          `;\n          });\n          container.innerHTML = markup;\n\n          const commentEl = document.getElementById('commentSection');\n          const comentCount = (data) => {\n            commentEl.innerHTML = data.length;\n          };\n          comentCount(data);\n        });\n      };\n\n      ShowPopup(id);\n    });\n  });\n}\n\n;(0,_showList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentItems);\n\n\n//# sourceURL=webpack://tvshow/./modules/commentPopup.js?");

/***/ }),

/***/ "./modules/movieCount.js":
/*!*******************************!*\
  !*** ./modules/movieCount.js ***!
  \*******************************/
/***/ ((module) => {

eval("const movieCount = (data) => data.length;\n\nmodule.exports = movieCount;\n\n//# sourceURL=webpack://tvshow/./modules/movieCount.js?");

/***/ }),

/***/ "./modules/popper.js":
/*!***************************!*\
  !*** ./modules/popper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reserve_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reserve_api.js */ \"./modules/reserve_api.js\");\n\n\nconst modalCard = (show) => {\n  const popper = document.querySelector('.pop_info');\n  popper.innerHTML = `\n    <div id=\"TVShow_id_${show.id}\" class=\"pop-card flex column\">\n      <div class=\"img-div flex\">\n        <img src=\"${show.image.original}\" alt=\"Movie flyer\" class=\"pop-img\">\n        <i class=\"material-icons close\">&#xe5c9;</i>\n      </div>\n      <div class=\"card_info flex column\">\n        <h2 class=\"movie-title\" title=\"${show.name}\">${show.name}</h2>\n        <p class=\"summary\">${show.summary}</p>\n      </div>\n      <div class=\"flex column res-div\">\n        <h3 class=\"sub\">Reservations <span class=\"tint\">0</span></h3>\n        <ul class=\"list\">\n          <!-- contents for reservation lists -->\n        </ul>\n      </div>\n      <form action=\"#\" id=\"reservation_form\" class=\"form flex column\">\n        <h3 class=\"sub\">Add a reservation</h3>\n        <input type=\"text\" class=\"name\" placeholder=\"Your name\" required>\n        <input type=\"date\" title=\"Start date\" class=\"start_date\" placeholder=\"Start date\" required>\n        <input type=\"date\" title=\"End date\" class=\"end_date\" placeholder=\"End date\">\n        <button type=\"submit\" class=\"url\">Reserve</button>\n      </form>\n    </div>\n  `;\n  document.querySelector('.close').addEventListener('click', () => {\n    popper.style.display = 'none';\n  });\n  document.querySelector('#reservation_form').addEventListener('submit', (e) => {\n    e.preventDefault();\n    _reserve_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInputs(e.target.parentElement.id);\n\n    const callback = (event) => {\n      _reserve_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getApi(event)\n        .then((res) => res.json())\n        .then((data) => _reserve_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateDOM(data));\n    };\n    callback(e.target.parentElement.id);\n    callback(e.target.parentElement.id);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCard);\n\n//# sourceURL=webpack://tvshow/./modules/popper.js?");

/***/ }),

/***/ "./modules/reservation_counter.js":
/*!****************************************!*\
  !*** ./modules/reservation_counter.js ***!
  \****************************************/
/***/ ((module) => {

eval("const interestCounter = (prospects) => prospects.length;\n\nmodule.exports = interestCounter;\n\n//# sourceURL=webpack://tvshow/./modules/reservation_counter.js?");

/***/ }),

/***/ "./modules/reserve_api.js":
/*!********************************!*\
  !*** ./modules/reserve_api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendApi.js */ \"./modules/sendApi.js\");\n\n\nconst counter = __webpack_require__(/*! ./reservation_counter.js */ \"./modules/reservation_counter.js\");\n\n// Helper funtion that itemize reserved dates and other info\nconst displayViews = async (book) => {\n  const going = document.querySelector('.list');\n  going.innerHTML = '';\n  if (book.length >= 2) {\n    book.forEach((viewing) => {\n      going.innerHTML += `\n        <li>${viewing.date_start} - ${viewing.date_end} by ${viewing.username}</li>\n      `;\n    });\n  } else {\n    going.innerHTML += `<li>${book[0].date_start} - ${book[0].date_end} by ${book[0].username}</li>`;\n  }\n  return going;\n};\n\n/* eslint-disable camelcase */\nclass ReservationApi {\n  static getApi = async (id) => {\n    let booked;\n    try {\n      booked = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations?item_id=${id}`);\n    } catch {\n      booked = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations?item_id=${id}`);\n    }\n    return booked;\n  };\n\n  // Get inputs from users and send to BaseURL\n  static getInputs = (event_id) => {\n    // eslint-disable-next-line camelcase\n    const item_id = event_id;\n    const username = document.querySelector('.name').value;\n    const date_start = document.querySelector('.start_date').value;\n    const date_end = document.querySelector('.end_date').value;\n    const visitor = {\n      item_id,\n      username,\n      date_start,\n      date_end,\n    };\n\n    (0,_sendApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/S8jUmAbkqmXOnp8cwdYb/reservations/', visitor);\n    document.querySelector('form').reset();\n  };\n\n  static updateDOM = async (packet) => {\n    const viewers = counter(packet);\n    displayViews(packet);\n    document.querySelector('.tint').innerHTML = await viewers;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReservationApi);\n\n\n//# sourceURL=webpack://tvshow/./modules/reserve_api.js?");

/***/ }),

/***/ "./modules/sendApi.js":
/*!****************************!*\
  !*** ./modules/sendApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendApi = async (baseURL, client) => {\n  const response = await fetch(baseURL, {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json',\n    },\n    body: JSON.stringify(client),\n  });\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendApi);\n\n\n//# sourceURL=webpack://tvshow/./modules/sendApi.js?");

/***/ }),

/***/ "./modules/showList.js":
/*!*****************************!*\
  !*** ./modules/showList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movieCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCount.js */ \"./modules/movieCount.js\");\n/* harmony import */ var _movieCount_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_movieCount_js__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable */\n\nconst card = document.querySelector(\".cards\");\nconst counter = document.querySelector('.counter');\n\nconst cards = async (shows, likesss) => {\n  card.innerHTML = \"\";\n  let inner = \"\";\n  shows.forEach((show, index) => {\n    inner += `\n        <li class = \"show-card\" id=\"${show.id - 1}\" >\n          <h2 class = \"show-name\">${show.name}</h2>\n          <span class = \"likes\">\n          ${likesss[index].likes} Likes</span>\n          <button class=\"like-btn\">👍</button>\n          <img class= \"show-img\" src=\"${show.image.original}\" />\n          <button data-id=${index} class=\"comment-btn\">Comment</button>\n          <button class=\"reserve-btn\">Reserve</button>\n        </li>\n      `;\n  });\n  card.innerHTML = inner;\n  const addLikes = document.querySelectorAll(\".like-btn\");\n  addLikes.forEach((thumb, index) => {\n    thumb.addEventListener(\"click\", () => {\n      postLikes(likesss[index].item_id);\n      thumb.previousElementSibling.textContent =\n        `${likesss[index].likes + 1}` + \" Likes\";\n    });\n    counter.innerHTML = `Best TV series (${_movieCount_js__WEBPACK_IMPORTED_MODULE_0___default()(shows)})`;\n  });\n  const postLikes = async (id) => {\n    const data = {\n      item_id: id,\n    };\n    const post = {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n      },\n      body: JSON.stringify(data),\n    };\n    await fetch(\n      \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes\",\n      post\n    );\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);\n\n\n//# sourceURL=webpack://tvshow/./modules/showList.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/home-background.png */ \"./src/assets/home-background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable */\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  text-decoration: none;\\n  font-family: \\\"Lato\\\", sans-serif;\\n}\\n\\nbody {\\n  width: 100%;\\n  max-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\nheader {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  height: 70px;\\n  background-color: #090b13;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 136px;\\n  letter-spacing: 10px;\\n  z-index: 3;\\n}\\n\\n.counter {\\n  color: white;\\n  padding-top: 15px;\\n  padding-bottom: 15px;\\n}\\n\\n.logo {\\n  padding: 0;\\n  width: 80px;\\n  margin-top: 4px;\\n  max-height: 100px;\\n  display: inline-block;\\n}\\n\\n.logoIcon {\\n  width: 6rem;\\n  height: 4.5rem;\\n}\\n\\n.navMenu {\\n  align-items: center;\\n  display: flex;\\n  flex-flow: row nowrap;\\n  height: 100%;\\n  justify-content: flex-end;\\n  margin: 0;\\n  padding: 0;\\n  position: relative;\\n  margin-right: auto;\\n  margin-left: 50px;\\n}\\n\\n.navMenu a {\\n  display: flex;\\n  align-items: center;\\n  padding: 0 24px;\\n}\\n\\n.navMenu span {\\n  color: rgb(249, 249, 249);\\n  font-size: 14px;\\n  letter-spacing: 1.9px;\\n  line-height: 1.08;\\n  padding: 2px 0;\\n  white-space: nowrap;\\n  position: relative;\\n}\\n\\n.navMenu span:hover {\\n  transform: scale(1.2);\\n  visibility: visible;\\n}\\n\\n/* =================================================================\\n * style the comment section\\n   * ================================================================= */\\n\\n.active {\\n  display: none;\\n}\\n\\n.closeBtn {\\n  position: relative;\\n  left: 95%;\\n  font-size: 28px;\\n}\\n\\n.comment-popup {\\n  width: 100%;\\n  height: auto;\\n  position: absolute;\\n  top: 0;\\n  z-index: 100;\\n  left: 0;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  color: white;\\n}\\n\\n.comment-section {\\n  width: 100%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 2rem;\\n}\\n\\n.image-section {\\n  width: 100%;\\n  height: auto;\\n  padding: 3rem 3rem 1rem;\\n  align-items: center;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.image-section img {\\n  width: 15rem;\\n}\\n\\n.description-section {\\n  align-items: center;\\n  width: 100%;\\n  font-size: 28px;\\n  text-align: center;\\n}\\n\\n.description-section p {\\n  text-align: left;\\n  font-size: 20px;\\n  margin-top: 1rem;\\n}\\n\\n.comment-title {\\n  text-align: center;\\n  font-size: 28px;\\n}\\n\\n.comment-container {\\n  width: 100%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  margin-top: 1rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.comment-container li {\\n  display: flex;\\n  justify-items: center;\\n  justify-content: center;\\n  gap: 0.5rem;\\n  align-items: center;\\n  padding: 0.5rem 0;\\n}\\n\\n.form-comment {\\n  width: 100%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  text-align: center;\\n  gap: 1rem;\\n  color: #fff;\\n}\\n\\n.form-comment input {\\n  color: #fff;\\n}\\n\\n.button-section {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.button-section button {\\n  padding: 3px;\\n}\\n\\n.textarea {\\n  height: 90px;\\n}\\n\\n.form-comment button {\\n  width: 10rem;\\n  align-items: center;\\n  font-size: 20px;\\n  background-color: rgb(191, 4, 23);\\n  border: none;\\n  color: #fff;\\n  padding: 0.1rem;\\n}\\n\\n.footer {\\n  margin-bottom: 10px;\\n  width: 100%;\\n  text-align: center;\\n  height: 57px;\\n  margin-top: 10px;\\n}\\n\\n.main {\\n  /* position: relative; */\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  min-height: calc(100vh - 250px);\\n  overflow-x: hidden;\\n  display: block;\\n  padding: 72px calc(3.5vw + 5px);\\n}\\n\\n.cards {\\n  display: grid;\\n  grid-gap: 25px;\\n  gap: 25px;\\n  grid-template-columns: repeat(4, minmax(0, 1fr));\\n}\\n\\n.comment-btn {\\n  padding: 5%;\\n  margin: 15%;\\n  border-radius: 10px;\\n  box-shadow:\\n    rgb(0 0 0 / 69%) 0 26px 30px -10px,\\n    rgb(0 0 0 / 73%) 0 16px 10px -10px;\\n  border: 3px solid rgba(249, 249, 249, 0.1);\\n}\\n\\n.reserve-btn {\\n  padding: 5%;\\n  border-radius: 10px;\\n  box-shadow:\\n    rgb(0 0 0 / 69%) 0 26px 30px -10px,\\n    rgb(0 0 0 / 73%) 0 16px 10px -10px;\\n  border: 3px solid rgba(249, 249, 249, 0.1);\\n}\\n\\n.comment-btn:hover,\\n.reserve-btn:hover {\\n  transform: scale(1.2);\\n  background-color: rgb(191, 4, 23);\\n  color: #fff;\\n}\\n\\n@media (max-width: 768px) {\\n  .cards {\\n    grid-template-columns: repeat(2, minmax(0, 1fr));\\n  }\\n}\\n\\n.show-card {\\n  padding-top: 2%;\\n  padding-bottom: 2%;\\n  border-radius: 10px;\\n  box-shadow:\\n    rgb(0 0 0 / 69%) 0 26px 30px -10px,\\n    rgb(0 0 0 / 73%) 0 16px 10px -10px;\\n  cursor: pointer;\\n  overflow: hidden;\\n  position: relative;\\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\\n  border: 3px solid rgba(249, 249, 249, 0.1);\\n}\\n\\n.show-card img {\\n  object-fit: cover;\\n  opacity: 1;\\n  transition: opacity 500ms ease-in-out 0s;\\n  width: 100%;\\n  height: 70%;\\n  z-index: 1;\\n  top: 0;\\n}\\n\\n.likes {\\n  color: white;\\n  padding-left: 15px;\\n  padding-right: 25px;\\n}\\n\\n.show-card:hover {\\n  box-shadow:\\n    rgb(0 0 0 / 80%) 0 40px 58px -16px,\\n    rgb(0 0 0 / 72%) 0 30px 22px -10px;\\n  transform: scaleX(1.05);\\n  border-color: rgba(249, 249, 249, 0.8);\\n}\\n\\n.show-card h2 {\\n  padding-left: 25%;\\n  color: white;\\n  font-size: 15px;\\n  padding-bottom: 8%;\\n}\\n\\n.pop_info {\\n  display: none;\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  z-index: 500;\\n  overflow: auto;\\n  background-color: rgb(255, 228, 196, 0.6);\\n  backdrop-filter: blur(25px);\\n  transition: all 1.5s ease-in;\\n}\\n\\n.pop-card {\\n  position: relative;\\n  width: 40vw;\\n  justify-content: center;\\n  margin: 5rem auto;\\n  align-items: center;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.button-section {\\n  margin-top: 2rem;\\n}\\n\\n.button-section button {\\n  padding: 10px;\\n  border-radius: 10px;\\n}\\n\\n.button-section button:hover {\\n  transform: scale(1.2);\\n  background-color: rgb(191, 4, 23);\\n  color: #fff;\\n  border: none;\\n}\\n\\n.column {\\n  flex-direction: column;\\n}\\n\\n.description-section p {\\n  text-align: left;\\n  font-size: 20px;\\n  margin-top: 1rem;\\n  padding: 0 7rem;\\n}\\n\\n.comment-container {\\n  padding: 0 7rem;\\n}\\n\\n.pop-img {\\n  width: 100%;\\n}\\n\\n.close {\\n  position: absolute;\\n  right: -50px;\\n  top: -30px;\\n  cursor: pointer;\\n  transition: transform 0.3s linear;\\n}\\n\\n.close:hover {\\n  transform: rotate(270deg);\\n}\\n\\n.card_info {\\n  margin: 1rem;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.movie-title {\\n  margin: 1rem;\\n}\\n\\nbutton.url {\\n  text-decoration: none;\\n  background-color: rgb(51, 51, 51, 0.6);\\n  color: bisque;\\n  width: fit-content;\\n  padding: 1rem;\\n  margin-top: 1rem;\\n  font-size: 1.5vw;\\n  transition: background-color 0.2s ease-in-out;\\n  border: none;\\n}\\n\\nbutton.url:hover {\\n  background-color: rgb(51, 51, 51);\\n}\\n\\n.tint {\\n  position: relative;\\n  top: -10px;\\n  left: 3px;\\n  color: white;\\n  background-color: rgb(51, 51, 51, 0.6);\\n  padding: 0.5rem 0.7rem;\\n  border-radius: 50%;\\n  font-size: 1rem;\\n}\\n\\n.form {\\n  width: 100%;\\n  gap: 0.6rem;\\n  text-align: center;\\n  align-items: center;\\n}\\n\\n.sub {\\n  margin-right: 0.5rem;\\n  margin-top: 2rem;\\n}\\n\\n.list li {\\n  margin: 1rem 0;\\n}\\n\\n.res-div {\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.list {\\n  list-style-type: none;\\n  margin: 2rem 0;\\n}\\n\\ninput {\\n  font-size: 1rem;\\n  padding: 0.5rem;\\n  outline: none;\\n  border: none;\\n  text-align: center;\\n  width: 70%;\\n  caret-color: bisque;\\n}\\n\\ninput:focus {\\n  background-color: rgb(51, 51, 51, 0.6);\\n}\\n\\ninput:nth-of-type(1) {\\n  text-transform: capitalize;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tvshow/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tvshow/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://tvshow/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tvshow/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tvshow/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tvshow/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/popper.js */ \"./modules/popper.js\");\n/* harmony import */ var _modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/commentPopup.js */ \"./modules/commentPopup.js\");\n/* harmony import */ var _modules_showList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/showList.js */ \"./modules/showList.js\");\n\n\n\n\n\nconst popper = document.querySelector('.pop_info');\n\nconst popInfo = (shows) => {\n  const reservationBtn = document.querySelectorAll('.reserve-btn');\n  reservationBtn.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      popper.style.display = 'block';\n      (0,_modules_popper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shows[e.target.parentElement.id]);\n    });\n  });\n};\n\nconst getShows = async () => {\n  const response = await fetch('https://api.tvmaze.com/shows');\n  const jsonObj = await response.json();\n  const result = jsonObj.slice(0, 12);\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tusUKotsqFxCymui6qpz/likes')\n    .then((res) => res.json())\n    .then((data) => {\n      (0,_modules_showList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(result, data);\n    });\n\n  popInfo(result);\n  (0,_modules_commentPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(result);\n};\n\ndocument.addEventListener('DOMContentLoaded', getShows);\n\n\n//# sourceURL=webpack://tvshow/./src/index.js?");

/***/ }),

/***/ "./src/assets/home-background.png":
/*!****************************************!*\
  !*** ./src/assets/home-background.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a0c4bdd961442f1bc8b1.png\";\n\n//# sourceURL=webpack://tvshow/./src/assets/home-background.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;