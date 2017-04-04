/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var UI = __webpack_require__(1);
	
	var app = function(){
	  new UI();
	}
	
	window.onload = app;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Films = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../models/films\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var UI = function(){
	  var films = new Films();
	  this.render(films);
	}
	
	UI.prototype = {
	  createText: function(text, label){
	    var p = document.createElement("p");
	    p.innerText = label+text;
	    return p;
	  },
	
	  appendText: function(element, text, label){
	    var pTag = this.createText(text, label);
	    element.appendChild(pTag);
	  },
	
	  createReview: function(li, review){
	    this.appendText(li, review.comment, "Comment: ");
	    this.appendText(li, review.rating, "Rating: ");
	    this.appendText(li, review.author, "Author: ");
	  },
	
	  render: function(films) {
	    var container = document.getElementById("films");
	
	    for(var film of films) {
	      var li = document.createElement("li");
	      this.appendText(li, film.title, "Film: ");
	      
	      for(var review of film.reviews){
	        this.createReview(li, review);
	      }
	      container.appendChild(li);
	    }
	  }
	}
	
	module.exports = UI;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map