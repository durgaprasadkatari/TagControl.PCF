var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Tags/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Tags/index.ts":
/*!***********************!*\
  !*** ./Tags/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Tags =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function Tags() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  Tags.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Init local variables\n    this.localContext = context;\n    this.localNotifyOutputChanged = notifyOutputChanged;\n    this.localContainer = container;\n    this.onChangeDivElement = this.divChanged.bind(this);\n    this.closeClicked = this.closeButtonClicked.bind(this);\n    this.plusClickEvent = this.plusButtonClicked.bind(this);\n    this.textBoxBlurEvent = this.textBoxBlurEventFired.bind(this);\n    /* Register EventHandler\r\n    //this.refreshClicked = this.refreshClick.bind(this);\r\n    \r\n      //// Refresh button\r\n    //this.refreshButton = document.createElement(\"button\");\r\n    //this.refreshButton.setAttribute(\"type\", \"button\");\r\n    //this.refreshButton.setAttribute(\"value\", \"Refresh\");\r\n    //this.refreshButton.setAttribute(\"class\", \"btn btn-default btn-sm glyphicon glyphicon-refresh\");\r\n    //this.refreshButton.addEventListener(\"click\", this.refreshClick);\r\n      // Add elements to container\r\n    //this.localContainer.appendChild(this.refreshButton); */\n    // CRM attributes bound to the control properties. \n    // @ts-ignore \n\n    var crmTagStringsAttribute = context.parameters.Tags.attributes.LogicalName;\n\n    var _readonlySelection = context.parameters.ReadOnly.raw || \"False\";\n\n    var readonlySelection = _readonlySelection == \"True\" ? true : false; // @ts-ignore \n\n    var crmTagStringsAttributeValue = Xrm.Page.getAttribute(crmTagStringsAttribute).getValue();\n    this.DivElement = document.createElement(\"div\");\n    this.DivElement.addEventListener(\"blur\", this.onChangeDivElement);\n\n    if (readonlySelection) {\n      if (crmTagStringsAttributeValue != null) {\n        var data = crmTagStringsAttributeValue.split(\",\");\n\n        for (var i in data) {\n          // Create controls\n          // Tag element\n          this.tagsElement = document.createElement(\"span\");\n          this.tagsElement.setAttribute(\"class\", \"badge badge-pill badge-primary\");\n          this.tagsElement.innerHTML = data[i];\n          this.hiddenSpan = document.createElement(\"span\");\n          this.hiddenSpan.setAttribute(\"aria-hidden\", \"true\");\n          this.hiddenSpan.setAttribute(\"class\", \"close\");\n          this.hiddenSpan.setAttribute(\"contenteditable\", \"false\");\n          this.tagsElement.appendChild(this.hiddenSpan);\n          this.DivElement.appendChild(this.tagsElement); // Space element\n\n          this.spaceElement = document.createElement(\"span\");\n          this.spaceElement.innerHTML = \"  \";\n          this.DivElement.appendChild(this.spaceElement);\n        }\n\n        this.localContainer.appendChild(this.DivElement);\n      }\n    } else {\n      //this.DivElement.setAttribute(\"contentEditable\", \"true\");\n      if (crmTagStringsAttributeValue != null) {\n        var data = crmTagStringsAttributeValue.split(\",\");\n\n        for (var i in data) {\n          // Create controls\n          // Tag element\n          this.tagsElement = document.createElement(\"span\");\n          this.tagsElement.setAttribute(\"class\", \"badge badge-pill badge-primary\");\n          this.tagsElement.innerHTML = data[i];\n          this.hiddenSpan = document.createElement(\"span\");\n          this.hiddenSpan.setAttribute(\"aria-hidden\", \"true\");\n          this.hiddenSpan.setAttribute(\"class\", \"close\");\n          this.hiddenSpan.setAttribute(\"contenteditable\", \"false\");\n          this.hiddenSpan.innerHTML = \"&nbsp;&times;\";\n          this.hiddenSpan.addEventListener(\"click\", this.closeClicked);\n          this.tagsElement.appendChild(this.hiddenSpan);\n          this.DivElement.appendChild(this.tagsElement); // Space element\n\n          this.spaceElement = document.createElement(\"span\");\n          this.spaceElement.innerHTML = \"  \";\n          this.DivElement.appendChild(this.spaceElement);\n        }\n      }\n\n      this.plusIcon = document.createElement(\"i\");\n      this.plusIcon.setAttribute(\"class\", \"plusButton\");\n      this.plusIcon.setAttribute(\"contenteditable\", \"false\");\n      this.plusIcon.addEventListener(\"click\", this.plusClickEvent);\n      this.DivElement.appendChild(this.plusIcon);\n      this.localContainer.appendChild(this.DivElement);\n    }\n  };\n\n  Tags.prototype.divChanged = function (evt) {\n    var divString = \"\";\n    var spanElements = this.DivElement.getElementsByClassName(\"badge-primary\");\n\n    for (var i = 0; i < spanElements.length; i++) {\n      var rootSpan = spanElements[i];\n      var firstChild = rootSpan.firstChild;\n\n      if (i == 0) {\n        divString = firstChild.textContent;\n      } else {\n        divString = divString + \",\" + firstChild.textContent;\n      }\n    }\n\n    var re = /  /gi; // @ts-ignore \n\n    var crmTagStringsAttribute = this.localContext != null && this.localContext.parameters != null ? this.localContext.parameters.Tags.attributes.LogicalName : null; // @ts-ignore\n\n    Xrm.Page.getAttribute(crmTagStringsAttribute).setValue(divString.replace(re, \",\"));\n  };\n\n  Tags.prototype.closeButtonClicked = function (evt) {\n    var currentSpan = evt.target;\n    var parentHTMLNode = currentSpan.parentElement;\n\n    if (currentSpan != null) {\n      this.DivElement.removeChild(parentHTMLNode);\n      this.divChanged(evt);\n    }\n  };\n\n  Tags.prototype.plusButtonClicked = function (evt) {\n    this.textInput = document.createElement(\"input\");\n    this.textInput.setAttribute(\"type\", \"text\");\n    this.textInput.addEventListener(\"blur\", this.textBoxBlurEvent);\n    this.DivElement.appendChild(this.textInput);\n  };\n\n  Tags.prototype.textBoxBlurEventFired = function (evt) {\n    var newTagText = evt.target.value;\n    this.tagsElement = document.createElement(\"span\");\n    this.tagsElement.setAttribute(\"class\", \"badge badge-pill badge-primary\");\n    this.tagsElement.innerHTML = newTagText;\n    this.hiddenSpan = document.createElement(\"span\");\n    this.hiddenSpan.setAttribute(\"aria-hidden\", \"true\");\n    this.hiddenSpan.setAttribute(\"class\", \"close\");\n    this.hiddenSpan.setAttribute(\"contenteditable\", \"false\");\n    this.hiddenSpan.innerHTML = \"&nbsp;&times;\";\n    this.hiddenSpan.addEventListener(\"click\", this.closeClicked);\n    this.tagsElement.appendChild(this.hiddenSpan);\n    this.DivElement.appendChild(this.tagsElement); // Space element\n\n    this.spaceElement = document.createElement(\"span\");\n    this.spaceElement.innerHTML = \"  \";\n    this.DivElement.appendChild(this.spaceElement);\n    this.divChanged(evt);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  Tags.prototype.updateView = function (context) {\n    // Add code to update control view\n    // @ts-ignore \n    // Add code to update control view\n    // CRM attributes bound to the control properties. \n    // @ts-ignore \n    var crmTagStringsAttribute = this.localContext != null && this.localContext.parameters != null ? this.localContext.parameters.Tags.attributes.LogicalName : null;\n\n    var _readonlySelection = context.parameters.ReadOnly.raw || \"False\";\n\n    var readonlySelection = _readonlySelection == \"True\" ? true : false; // @ts-ignore \n\n    var crmTagStringsAttributeValue = crmTagStringsAttribute != null ? Xrm.Page.getAttribute(crmTagStringsAttribute).getValue() : \"red,green,blue\"; // Delete all elements first\n\n    var tagCollection = this.localContainer.getElementsByTagName(\"span\");\n    var loopLength = tagCollection.length;\n    this.DivElement.innerHTML = \"&nbsp;\";\n\n    if (readonlySelection) {\n      if (crmTagStringsAttributeValue != null) {\n        var data = crmTagStringsAttributeValue.split(\",\"); // Add new tags\n\n        for (var i in data) {\n          if (data[i] != \"\" && data[i] != \"  \" && data[i] != null) {\n            this.tagsElement = document.createElement(\"span\");\n            this.tagsElement.setAttribute(\"class\", \"badge badge-pill badge-primary\");\n            this.tagsElement.innerHTML = data[i];\n            this.hiddenSpan = document.createElement(\"span\");\n            this.hiddenSpan.setAttribute(\"aria-hidden\", \"true\");\n            this.hiddenSpan.setAttribute(\"class\", \"close\");\n            this.hiddenSpan.setAttribute(\"contenteditable\", \"false\");\n            this.tagsElement.appendChild(this.hiddenSpan);\n            this.DivElement.appendChild(this.tagsElement); // Space element\n\n            this.spaceElement = document.createElement(\"span\");\n            this.spaceElement.innerHTML = \"  \";\n            this.DivElement.appendChild(this.spaceElement);\n          }\n        }\n      }\n    } else {\n      if (crmTagStringsAttributeValue != null) {\n        var data = crmTagStringsAttributeValue.split(\",\"); // Add new tags\n\n        for (var i in data) {\n          if (data[i] != \"\" && data[i] != \"  \" && data[i] != null) {\n            // Create controls\n            // Tag element\n            this.tagsElement = document.createElement(\"span\");\n            this.tagsElement.setAttribute(\"class\", \"badge badge-pill badge-primary\");\n            this.tagsElement.innerHTML = data[i];\n            this.hiddenSpan = document.createElement(\"span\");\n            this.hiddenSpan.setAttribute(\"aria-hidden\", \"true\");\n            this.hiddenSpan.setAttribute(\"class\", \"close\");\n            this.hiddenSpan.setAttribute(\"contenteditable\", \"false\");\n            this.hiddenSpan.innerHTML = \"&nbsp;&times;\";\n            this.hiddenSpan.addEventListener(\"click\", this.closeClicked);\n            this.tagsElement.appendChild(this.hiddenSpan);\n            this.DivElement.appendChild(this.tagsElement); // Space element\n\n            this.spaceElement = document.createElement(\"span\");\n            this.spaceElement.innerHTML = \"  \";\n            this.DivElement.appendChild(this.spaceElement);\n          }\n        } //this.localContainer.appendChild(this.DivElement);\n\n      }\n\n      this.plusIcon = document.createElement(\"i\");\n      this.plusIcon.setAttribute(\"class\", \"plusButton\");\n      this.plusIcon.setAttribute(\"contenteditable\", \"false\");\n      this.plusIcon.addEventListener(\"click\", this.plusClickEvent);\n      this.DivElement.appendChild(this.plusIcon);\n    }\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  Tags.prototype.getOutputs = function () {\n    return {\n      Tags: this.tagsString\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  Tags.prototype.destroy = function () {\n    this.refreshButton.removeEventListener(\"click\", this.refreshClick);\n  };\n  /**\r\n   * Custom Event Handlers\r\n   */\n\n\n  Tags.prototype.refreshClick = function (evnt) {\n    this.localNotifyOutputChanged();\n  };\n\n  return Tags;\n}();\n\nexports.Tags = Tags;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Tags/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('DKControls.Tags', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Tags);
} else {
	var DKControls = DKControls || {};
	DKControls.Tags = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Tags;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}