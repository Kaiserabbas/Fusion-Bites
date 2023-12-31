/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOOD_BASE_URL: () => (/* binding */ FOOD_BASE_URL),
/* harmony export */   apiUrl: () => (/* binding */ apiUrl)
/* harmony export */ });
const FOOD_BASE_URL = 'https://themealdb.com/api/json/v1/1/filter.php?a=Indian';
const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/m0W3EfgcQ9pqpUaHd8PQ';


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateCommentCount = (count, commentCountElement) => {
  commentCountElement.textContent = `Counter: ${count}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCommentCount);

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchComments: () => (/* binding */ fetchComments),
/* harmony export */   sendComment: () => (/* binding */ sendComment)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const sendComment = async (id, username, comment) => {
  const request = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/comments/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      item_id: id,
      username: username,
      comment: comment
    })
  });
};
const fetchComments = async id => {
  const request = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/comments?item_id=${id}`);
  const response = await request.json();
  return response;
};


/***/ }),

/***/ "./src/modules/getItems.js":
/*!*********************************!*\
  !*** ./src/modules/getItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const getFoodItems = async () => {
  const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.FOOD_BASE_URL}`);
  const data = await response.json();
  return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFoodItems);

/***/ }),

/***/ "./src/modules/likesFunctions.js":
/*!***************************************!*\
  !*** ./src/modules/likesFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   saveLikes: () => (/* binding */ saveLikes),
/* harmony export */   updateLikes: () => (/* binding */ updateLikes)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const getLikes = async () => {
  try {
    const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch likes with status: ${response.status}`);
    }
    const likesData = await response.json();
    return likesData;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return [];
  }
};
const saveLikes = async id => {
  try {
    const response = await fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: id
      })
    });
    if (!response.ok) {
      throw new Error(`Failed to save like with status: ${response.status}`);
    }
    console.log('Like saved successfully');
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    likedItems.push(id);
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  } catch (error) {
    console.error('Error saving like:', error);
  }
};
const updateLikes = async (likeCountElement, id) => {
  const dataLikes = await getLikes();
  const likeCount = dataLikes.find(obj => obj.item_id === id);
  if (likeCount) {
    likeCountElement.textContent = `${likeCount.likes} likes`;
  } else {
    likeCountElement.textContent = '0 likes';
  }
  likeCountElement.textContent = `${likeCount.likes} likes`;
};


/***/ }),

/***/ "./src/modules/listCounter.js":
/*!************************************!*\
  !*** ./src/modules/listCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateListCounter = count => {
  const listCounterElement = document.getElementById('nav-dishes');
  listCounterElement.textContent = `(${count}) Dishes`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateListCounter);

/***/ }),

/***/ "./src/modules/logo.js":
/*!*****************************!*\
  !*** ./src/modules/logo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");

const logo = () => {
  const imageHeader = document.querySelector('.image-header');
  imageHeader.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  const imageFooter = document.querySelector('.image-footer');
  imageFooter.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");
 // Import comment-related functions

const fetchFoodDetails = async id => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const response = await request.json();
  const data = response.meals[0];
  return data;
};
const applyPopup = async (itemId, items) => {
  const item = getItemById(itemId, items);
  if (!item) return;
  const detailedItem = await fetchFoodDetails(itemId); // Fetch additional details

  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';
  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';
  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });
  const popupImage = document.createElement('img');
  popupImage.className = 'popup-image';
  popupImage.src = item.strMealThumb;
  const itemName = document.createElement('h2');
  itemName.textContent = item.strMeal;
  const additionalDetails = document.createElement('div');
  additionalDetails.className = 'additional-details';
  const category = document.createElement('p');
  category.textContent = `Category: ${detailedItem.strCategory}`;
  const instructions = document.createElement('p');
  instructions.textContent = `Instructions: ${detailedItem.strInstructions}`;
  const usernameElement = document.createElement('input');
  usernameElement.className = 'username';
  usernameElement.placeholder = 'Enter your username'; // Placeholder text

  const commentsTextArea = document.createElement('textarea');
  commentsTextArea.className = 'comments-textarea';
  commentsTextArea.placeholder = 'Leave a comment...';
  const commentButton = document.createElement('button');
  commentButton.className = 'comment-button';
  commentButton.textContent = 'Comment';
  commentButton.addEventListener('click', async () => {
    const comment = commentsTextArea.value;
    const username = usernameElement.value; // Get username from the input field
    if (comment.trim() !== '' && username.trim() !== '') {
      await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__.sendComment)(item.idMeal, username, comment);
      commentsTextArea.value = '';
      updateComments(item.idMeal, popupContent);
    }
  });
  const commentCountElement = document.createElement('div');
  commentCountElement.className = 'comment-count';
  commentCountElement.textContent = '0 Comments'; // Initialize with 0 comments

  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, commentCountElement); // Initialize comment count

  additionalDetails.appendChild(category);
  additionalDetails.appendChild(instructions);
  popupContent.appendChild(closeButton);
  popupContent.appendChild(popupImage);
  popupContent.appendChild(itemName);
  popupContent.appendChild(additionalDetails); // Append additional details

  popupContent.appendChild(usernameElement);
  popupContent.appendChild(commentsTextArea);
  popupContent.appendChild(commentButton);
  popupContent.appendChild(commentCountElement);
  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
  updateComments(item.idMeal, popupContent, commentCountElement); // Pass commentCountElement
};

const getItemById = (itemId, items) => {
  return items.find(item => item.idMeal === itemId);
};
const updateComments = async (itemId, popupContent, commentCountElement) => {
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';
  const comments = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(itemId);
  if (Array.isArray(comments)) {
    // Check if comments is an array
    comments.forEach(commentData => {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment';
      commentElement.innerHTML = `<strong>${commentData.username}:</strong> ${commentData.comment}`;
      commentsContainer.appendChild(commentElement);
    });
    const commentCountElement = document.querySelector('.comment-count');
    if (commentCountElement) {
      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments.length, commentCountElement);
    }
  } else {
    // Handle the case where comments is not an array (e.g., if it's an object or null)
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'No comments available.';
    commentsContainer.appendChild(errorMessage);
    (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, commentCountElement); // Update comment count
  }

  const existingCommentsContainer = popupContent.querySelector('.comments-container');
  if (existingCommentsContainer) {
    existingCommentsContainer.replaceWith(commentsContainer);
  } else {
    popupContent.appendChild(commentsContainer);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyPopup);

/***/ }),

/***/ "./src/modules/renderLists.js":
/*!************************************!*\
  !*** ./src/modules/renderLists.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItems.js */ "./src/modules/getItems.js");
/* harmony import */ var _likesFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesFunctions.js */ "./src/modules/likesFunctions.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* harmony import */ var _listCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listCounter.js */ "./src/modules/listCounter.js");





// Fetch data from the API and display the item list
(0,_getItems_js__WEBPACK_IMPORTED_MODULE_0__["default"])().then(data => {
  renderItemList(data.meals);
}).catch(error => {
  console.error('Error fetching data:', error);
});
const username = 'YourUsername';
const renderItemList = async items => {
  const itemListElement = document.getElementById('item-list');
  items.forEach(async item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    const itemId = document.createElement('div');
    itemId.className = 'item-id';
    itemId.dataset.itemId = item.idMeal;
    itemId.textContent = item.strMeal;
    const likeButton = document.createElement('i');
    likeButton.className = 'like-icon fa-solid fa-thin fa-thumbs-up';
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    if (likedItems.includes(item.idMeal)) {
      likeButton.classList.add('liked');
      likeButton.disabled = true;
    }
    const likeCountElement = document.createElement('div');
    likeCountElement.className = 'like-count';
    const innerImage = document.createElement('img');
    innerImage.className = 'item-image';
    innerImage.src = item.strMealThumb;
    const commentButton = document.createElement('button');
    commentButton.className = 'item-comment';
    commentButton.textContent = 'Comments';
    commentButton.addEventListener('click', async () => {
      (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item.idMeal, items, username); // Pass the 'items' array and username
    });

    itemElement.appendChild(innerImage);
    itemElement.appendChild(itemId);
    itemElement.appendChild(likeButton);
    itemElement.appendChild(likeCountElement);
    itemElement.appendChild(commentButton);
    itemListElement.appendChild(itemElement);
    likeButton.addEventListener('click', async () => {
      if (!likeButton.classList.contains('liked')) {
        await (0,_likesFunctions_js__WEBPACK_IMPORTED_MODULE_1__.saveLikes)(item.idMeal);
        likeButton.classList.add('liked');
        (0,_likesFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateLikes)(likeCountElement, item.idMeal);
      }
    });
    // Update the list counter
    (0,_listCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(items.length);
    (0,_likesFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateLikes)(likeCountElement, item.idMeal);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItemList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/index.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/index.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
}

header {
  display: flex;
  justify-content: space-between;
  background-color: whitesmoke;
  gap: 20px;
}

/* -------logo over text starts here --- */

.image-header {
  border-radius: 15px;
  margin: 0 0 0 10px;
  display: block;
  width: 200px;
  height: auto;
}

.container {
  position: relative;
  width: 50%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: whitesmoke;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  text-shadow: 3px 1px #dadada;
  color: chocolate;
  font-size: 1.7rem;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 100px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

/* -------logo over text ends here --- */

#logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

#nav-list {
  margin: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav a {
  color: rgb(122, 122, 122);
  font-size: 0.8rem;
}

footer {
  padding: 0 20px;
  width: 100vw;
  color: #000;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
}

.image-footer {
  padding: 10px;
  display: block;
  width: 150px;
  height: auto;
}

/* appened list items start here  */
#item-list {
  margin: 50px 0 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-id {
  margin: 20px 0 0 0;
  text-align: center;
}

.item-image {
  width: 300px;
  border-radius: 20px;
  box-shadow: 10px 10px 5px #ccc, -10px -10px 5px #fff;
}

/* appened list items end here  */
.like-icon {
  font-size: 32px;
  cursor: pointer;
  animation: heartBeat 1s infinite;
}

.liked {
  color: blue;
  cursor: default;
  animation: none;
}

@keyframes heartBeat {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: lightblue;
  color: rgb(0, 0, 0);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

button:active {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

/* popup section  */

/* Add your styles here */
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow-y: scroll;
}

.popup-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 100%;
  width: 700px;
  height: 90vh;
  text-align: center;
  overflow-y: scroll;
}

.popup-content .additional-details {
  padding: 10px;
}

.comments-container {
  max-height: 200px;

  /* Set a maximum height for the comments container */
  overflow-y: auto;

  /* Enable vertical scrolling within the comments container */
}

.close-button {
  margin: 10px 10px 0 0;
  width: 35px;
  height: auto;
  background-color: black;
  color: white;
  border: 1px solid black;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.close-button:hover {
  background-color: white;
  color: black;
}

.popup-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.username {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.comments-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.comment-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

/* popup section  */

/* about section */
#about {
  padding: 10px 20px;
  position: relative;
  left: 25%;
  max-width: 50%;
  text-align: center;
}
#about h1 {
  font-size: 2em;
  text-align: center;
}

#about h2 {
  font-size: 1.5em;
  margin-top: 0;
}

#about p {
  margin-bottom: 1em;
}

#about a {
  text-decoration: none;
  color: #000;
}

#about a:hover {
  color: #fff;
}

#about .button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

#about .button:hover {
  background-color: #fff;
  color: #000;
}
/* about section */

/* contact section */

#contact {
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
}

#contact h1 {
  font-size: 2em;
}

#contact p {
  margin-bottom: 1em;
}

#contact input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#contact textarea {
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#contact input[type="submit"] {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

#contact input[type="submit"]:hover {
  background-color: #fff;
  color: #000;
}
/* contact section */
hr {
  margin: 50px 0 50px 0;
position: relative;
left: 25%;
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/modules/index.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: whitesmoke;\r\n  gap: 20px;\r\n}\r\n\r\n/* -------logo over text starts here --- */\r\n\r\n.image-header {\r\n  border-radius: 15px;\r\n  margin: 0 0 0 10px;\r\n  display: block;\r\n  width: 200px;\r\n  height: auto;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 50%;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  transition: 0.5s ease;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.container:hover .overlay {\r\n  opacity: 1;\r\n}\r\n\r\n.text {\r\n  text-shadow: 3px 1px #dadada;\r\n  color: chocolate;\r\n  font-size: 1.7rem;\r\n  font-weight: 900;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 100px;\r\n  -ms-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  cursor: pointer;\r\n}\r\n\r\n/* -------logo over text ends here --- */\r\n\r\n#logo {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n#nav-list {\r\n  margin: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.nav a {\r\n  color: rgb(122, 122, 122);\r\n  font-size: 0.8rem;\r\n}\r\n\r\nfooter {\r\n  padding: 0 20px;\r\n  width: 100vw;\r\n  color: #000;\r\n  background-color: whitesmoke;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.image-footer {\r\n  padding: 10px;\r\n  display: block;\r\n  width: 150px;\r\n  height: auto;\r\n}\r\n\r\n/* appened list items start here  */\r\n#item-list {\r\n  margin: 50px 0 50px 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.item-id {\r\n  margin: 20px 0 0 0;\r\n  text-align: center;\r\n}\r\n\r\n.item-image {\r\n  width: 300px;\r\n  border-radius: 20px;\r\n  box-shadow: 10px 10px 5px #ccc, -10px -10px 5px #fff;\r\n}\r\n\r\n/* appened list items end here  */\r\n.like-icon {\r\n  font-size: 32px;\r\n  cursor: pointer;\r\n  animation: heartBeat 1s infinite;\r\n}\r\n\r\n.liked {\r\n  color: blue;\r\n  cursor: default;\r\n  animation: none;\r\n}\r\n\r\n@keyframes heartBeat {\r\n  0%,\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.4);\r\n  }\r\n}\r\n\r\nbutton {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: lightblue;\r\n  color: rgb(0, 0, 0);\r\n  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\nbutton:active {\r\n  background-color: rgb(0, 0, 0);\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n/* popup section  */\r\n\r\n/* Add your styles here */\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 999;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-content {\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  padding: 20px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  position: relative;\r\n  max-width: 100%;\r\n  width: 700px;\r\n  height: 90vh;\r\n  text-align: center;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-content .additional-details {\r\n  padding: 10px;\r\n}\r\n\r\n.comments-container {\r\n  max-height: 200px;\r\n\r\n  /* Set a maximum height for the comments container */\r\n  overflow-y: auto;\r\n\r\n  /* Enable vertical scrolling within the comments container */\r\n}\r\n\r\n.close-button {\r\n  margin: 10px 10px 0 0;\r\n  width: 35px;\r\n  height: auto;\r\n  background-color: black;\r\n  color: white;\r\n  border: 1px solid black;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n}\r\n\r\n.close-button:hover {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  max-height: 300px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.username {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comments-textarea {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.comment-button {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: none;\r\n  padding: 8px 16px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* popup section  */\r\n\r\n/* about section */\r\n#about {\r\n  padding: 10px 20px;\r\n  position: relative;\r\n  left: 25%;\r\n  max-width: 50%;\r\n  text-align: center;\r\n}\r\n#about h1 {\r\n  font-size: 2em;\r\n  text-align: center;\r\n}\r\n\r\n#about h2 {\r\n  font-size: 1.5em;\r\n  margin-top: 0;\r\n}\r\n\r\n#about p {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#about a {\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n#about a:hover {\r\n  color: #fff;\r\n}\r\n\r\n#about .button {\r\n  background-color: #000;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#about .button:hover {\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n/* about section */\r\n\r\n/* contact section */\r\n\r\n#contact {\r\n  width: 500px;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n}\r\n\r\n#contact h1 {\r\n  font-size: 2em;\r\n}\r\n\r\n#contact p {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#contact input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n#contact textarea {\r\n  width: 100%;\r\n  height: 150px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n}\r\n\r\n#contact input[type=\"submit\"] {\r\n  background-color: #000;\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n#contact input[type=\"submit\"]:hover {\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n/* contact section */\r\nhr {\r\n  margin: 50px 0 50px 0;\r\nposition: relative;\r\nleft: 25%;\r\n  width: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/modules/index.css":
/*!*******************************!*\
  !*** ./src/modules/index.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a41b152d443f529b3694.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index.css */ "./src/modules/index.css");
/* harmony import */ var _modules_logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/logo.js */ "./src/modules/logo.js");
/* harmony import */ var _modules_renderLists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderLists.js */ "./src/modules/renderLists.js");



const init = () => {
  (0,_modules_logo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_renderLists_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map