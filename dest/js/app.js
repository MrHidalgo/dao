/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common/common.js":
/*!*********************************!*\
  !*** ./src/js/common/common.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var Common = function () {
  var pressESC = function pressESC() {
    document.addEventListener('keyup', function (ev) {
      if (ev.keyCode === 27) {}
    });
  };

  var clickBody = function clickBody() {
    document.body.addEventListener('click', function (ev) {
      var className = "body";

      if (!ev.target.closest(className).length) {}
    });
  };

  var preventBehavior = function preventBehavior() {
    var link = document.querySelectorAll("a");
    link.forEach(function (val, idx) {
      val.addEventListener("click", function (ev) {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  var initLoad = function initLoad() {
    pressESC();
    clickBody();
    preventBehavior();
  };

  return {
    initLoad: initLoad
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Common);

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/common */ "./src/js/common/common.js");
 // EVENT LISTENER - LOAD
// ========================================

window.addEventListener('load', function (ev) {
  // COMMON
  _common_common__WEBPACK_IMPORTED_MODULE_0__["default"].initLoad(); // MACROS

  var initHamburger = function initHamburger() {
    if (!document.querySelector("[hamburger-js]")) return;
    var btn = document.querySelector("[hamburger-js]"),
        hideScrollContainer = document.querySelectorAll("html, body"),
        mobileContainer = document.querySelector("[mobile-block-js]");
    /**
     * @description
     */

    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;
      elem.classList.toggle("is-active");
      mobileContainer.classList.toggle("is-open");
      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
  };

  var initTableFilterToggle = function initTableFilterToggle() {
    if (!document.querySelector('.staking__toggle a')) return;
    document.querySelectorAll('.staking__toggle a').forEach(function (val, idx) {
      val.addEventListener('click', function (ev) {
        document.querySelector('.staking__toggle a.is-active').classList.remove('is-active');

        if (ev.currentTarget.classList.contains('is-active')) {
          ev.currentTarget.classList.contains('is-active');
        } else {
          ev.currentTarget.classList.add('is-active');
        }
      }, false);
    });
  };

  var donationCB = function donationCB() {
    if (!document.querySelector('[donation-input-js]')) return;
    document.querySelector('[donation-input-js]').addEventListener('keyup', function (ev) {
      var elVal = Number(ev.currentTarget.value),
          donationVal = Number(document.querySelector('[donation-val-js]').getAttribute('data-donation-val')),
          donationSubval = document.querySelector('[donation-val-js]').getAttribute('data-donation-subval'),
          resultNode = document.querySelector('[donation-result-js]'),
          btnNode = document.querySelectorAll('.donation__btn .c-btn');

      if (elVal === 0) {
        resultNode.innerText = '-';
        $(btnNode[0]).show().css('display', 'flex');
        $(btnNode[1]).hide();
      } else {
        resultNode.innerText = elVal * donationVal + ' ' + donationSubval;
        $(btnNode[0]).hide();
        $(btnNode[1]).show().css('display', 'flex');
      }
    });
  };

  var initPopups = function initPopups() {
    $('[popup-js]').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'is-show',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = this.st.el.attr('data-effect');
          $('#fundraisingOverlay').show();
        },
        close: function close() {
          $('#fundraisingOverlay').hide();
        }
      }
    });
  };

  initHamburger();
  initTableFilterToggle();
  donationCB();
  initPopups();
}, false); // EVENT LISTENER - SCROLL
// ========================================

window.addEventListener('scroll', function (ev) {}, false);
}();
/******/ })()
;