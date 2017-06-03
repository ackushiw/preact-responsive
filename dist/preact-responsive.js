(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MediaQuery"] = factory();
	else
		root["MediaQuery"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _preact = __webpack_require__(6);
	
	var _matchmedia = __webpack_require__(5);
	
	var _matchmedia2 = _interopRequireDefault(_matchmedia);
	
	var _hyphenateStyleName = __webpack_require__(2);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _mediaQuery = __webpack_require__(1);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	var _toQuery = __webpack_require__(3);
	
	var _toQuery2 = _interopRequireDefault(_toQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultTypes = {
	  component: true,
	  query: true,
	  values: true,
	  children: true,
	  onChange: true,
	  onBeforeChange: true
	};
	
	var mediaKeys = Object.keys(_mediaQuery2.default.all);
	var excludedQueryKeys = Object.keys(defaultTypes);
	var excludedPropKeys = excludedQueryKeys.concat(mediaKeys);
	
	function omit(object, keys) {
	  var newObject = _extends({}, object);
	  keys.forEach(function (key) {
	    return delete newObject[key];
	  });
	  return newObject;
	}
	
	var MediaQuery = function (_Component) {
	  _inherits(MediaQuery, _Component);
	
	  function MediaQuery() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MediaQuery);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaQuery.__proto__ || Object.getPrototypeOf(MediaQuery)).call.apply(_ref, [this].concat(args))), _this), _this.state = { matches: false }, _this.updateMatches = function () {
	      console.log('MEDIA_QUERY updateMatches', _this._mql.matches);
	      if (_this._mql.matches === _this.state.matches) {
	        return;
	      }
	      _this.setState({
	        matches: _this._mql.matches
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MediaQuery, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	
	      console.log('MEDIA_QUERY WILL_MOUNT', this.props);
	      this.updateQuery(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('MEDIA_QUERY WILL RECEIVE', nextProps);
	      this.updateQuery(nextProps);
	    }
	  }, {
	    key: 'updateQuery',
	    value: function updateQuery(props) {
	      console.log('MEDIA_QUERY updateQuery', props);
	      var values = void 0;
	      if (props.query) {
	        this.query = props.query;
	      } else {
	        this.query = (0, _toQuery2.default)(omit(props, excludedQueryKeys));
	      }
	
	      if (!this.query) {
	        throw new Error('Invalid or missing MediaQuery!');
	      }
	
	      if (props.values) {
	        values = Object.keys(props.values).reduce(function (result, key) {
	          result[(0, _hyphenateStyleName2.default)(key)] = props.values[key];
	          return result;
	        }, {});
	      }
	
	      if (this._mql) {
	        this._mql.removeListener(this.updateMatches);
	      }
	
	      this._mql = (0, _matchmedia2.default)(this.query, values);
	      this._mql.addListener(this.updateMatches);
	      this.updateMatches();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(_, nextState) {
	      if (this.props.onBeforeChange && this.state.matches !== nextState.matches) {
	        this.props.onBeforeChange(this.state.matches);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(_, prevState) {
	      if (this.props.onChange && prevState.matches !== this.state.matches) {
	        this.props.onChange(this.state.matches);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._mql.removeListener(this.updateMatches);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('PRE_RESP', this.state.matches);
	      if (typeof this.props.children === 'function') {
	        return this.props.children(this.state.matches);
	      }
	
	      if (this.state.matches === false) {
	        return null;
	      }
	      var props = omit(this.props, excludedPropKeys);
	      var hasMergeProps = Object.keys(props).length > 0;
	      var childrenCount = this.props.children.length;
	      var wrapChildren = this.props.component || childrenCount > 1 || typeof this.props.children === 'string' || Array.isArray(this.props.children) && childrenCount == 1 || this.props.children === undefined;
	      if (wrapChildren) {
	        return (0, _preact.h)(this.props.component || 'div', props, this.props.children);
	      } else if (hasMergeProps) {
	        return (0, _preact.cloneElement)(this.props.children, props);
	      } else if (childrenCount) {
	        return this.props.children;
	      } else {
	        return null;
	      }
	    }
	  }]);
	
	  return MediaQuery;
	}(_preact.Component);
	
	MediaQuery.displayName = 'MediaQuery';
	MediaQuery.defaultProps = {
	  values: {}
	};
	exports.default = MediaQuery;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var STRING = 'string';
	var NUMBER = 'number';
	var BOOL = 'boolean';
	
	var stringOrNumber = [STRING, NUMBER];
	
	// properties that match media queries
	var matchers = {
	  orientation: ['portrait', 'landscape'],
	
	  scan: ['progressive', 'interlace'],
	
	  aspectRatio: STRING,
	  deviceAspectRatio: STRING,
	
	  height: stringOrNumber,
	  deviceHeight: stringOrNumber,
	
	  width: stringOrNumber,
	  deviceWidth: stringOrNumber,
	
	  color: BOOL,
	
	  colorIndex: BOOL,
	
	  monochrome: BOOL,
	  resolution: stringOrNumber
	
	  // media features
	};var features = _extends({
	  minAspectRatio: STRING,
	  maxAspectRatio: STRING,
	  minDeviceAspectRatio: STRING,
	  maxDeviceAspectRatio: STRING,
	
	  minHeight: stringOrNumber,
	  maxHeight: stringOrNumber,
	  minDeviceHeight: stringOrNumber,
	  maxDeviceHeight: stringOrNumber,
	
	  minWidth: stringOrNumber,
	  maxWidth: stringOrNumber,
	  minDeviceWidth: stringOrNumber,
	  maxDeviceWidth: stringOrNumber,
	
	  minColor: NUMBER,
	  maxColor: NUMBER,
	
	  minColorIndex: NUMBER,
	  maxColorIndex: NUMBER,
	
	  minMonochrome: NUMBER,
	  maxMonochrome: NUMBER,
	
	  minResolution: stringOrNumber,
	  maxResolution: stringOrNumber
	
	}, matchers);
	
	// media types
	var types = {
	  all: BOOL,
	  grid: BOOL,
	  aural: BOOL,
	  braille: BOOL,
	  handheld: BOOL,
	  print: BOOL,
	  projection: BOOL,
	  screen: BOOL,
	  tty: BOOL,
	  tv: BOOL,
	  embossed: BOOL
	};
	
	var all = _extends({}, types, features);
	
	// add the type property
	matchers.type = Object.keys(types);
	
	exports.default = {
	  all: all,
	  types: types,
	  matchers: matchers,
	  features: features
	};
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (obj) {
	  var rules = [];
	  Object.keys(_mediaQuery2.default.all).forEach(function (k) {
	    var v = obj[k];
	    if (v != null) {
	      rules.push(keyVal(k, v));
	    }
	  });
	  return join(rules);
	};
	
	var _hyphenateStyleName = __webpack_require__(2);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _mediaQuery = __webpack_require__(1);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var negate = function negate(cond) {
	  return 'not ' + cond;
	};
	
	function keyVal(k, v) {
	  var realKey = (0, _hyphenateStyleName2.default)(k
	
	  // px shorthand
	  );if (typeof v === 'number') {
	    v = v + 'px';
	  }
	  if (v === true) {
	    return k;
	  }
	  if (v === false) {
	    return negate(k);
	  }
	  return '(' + realKey + ': ' + v + ')';
	}
	
	function join(conds) {
	  return conds.join(' and ');
	}
	
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	'use strict';
	
	exports.match = matchQuery;
	exports.parse = parseQuery;
	
	// -----------------------------------------------------------------------------
	
	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
	
	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;
	
	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;
	
	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }
	
	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];
	
	            // Missing or falsy values don't match.
	            if (!value) { return false; }
	
	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();
	
	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;
	
	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;
	
	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;
	
	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }
	
	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });
	
	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}
	
	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();
	
	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};
	
	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';
	
	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];
	
	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);
	
	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });
	
	        return parsed;
	    });
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;
	
	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }
	
	    return decimal;
	}
	
	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
	
	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}
	
	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];
	
	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var staticMatch = __webpack_require__(4).match;
	var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;
	
	// our fake MediaQueryList
	function Mql(query, values){
	  var self = this;
	  if(dynamicMatch){
	    var mql = dynamicMatch.call(window, query);
	    this.matches = mql.matches;
	    this.media = mql.media;
	    // TODO: is there a time it makes sense to remove this listener?
	    mql.addListener(update);
	  } else {
	    this.matches = staticMatch(query, values);
	    this.media = query;
	  }
	
	  this.addListener = addListener;
	  this.removeListener = removeListener;
	
	  function addListener(listener){
	    if(mql){
	      mql.addListener(listener);
	    }
	  }
	
	  function removeListener(listener){
	    if(mql){
	      mql.removeListener(listener);
	    }
	  }
	
	  // update ourselves!
	  function update(evt){
	    self.matches = evt.matches;
	    self.media = evt.media;
	  }
	}
	
	function matchMedia(query, values){
	  return new Mql(query, values);
	}
	
	module.exports = matchMedia;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	!function() {
	    'use strict';
	    function VNode() {}
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && null != attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
	            if (child === !0 || child === !1) child = null;
	            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
	            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
	            lastSimple = simple;
	        }
	        var p = new VNode();
	        p.nodeName = nodeName;
	        p.children = children;
	        p.attributes = null == attributes ? void 0 : attributes;
	        p.key = null == attributes ? void 0 : attributes.key;
	        if (void 0 !== options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function enqueueRender(component) {
	        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p.__d) renderComponent(p);
	    }
	    function isSameNodeType(node, vnode, hydrating) {
	        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
	        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	    }
	    function getNodeProps(vnode) {
	        var props = extend({}, vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function createNode(nodeName, isSvg) {
	        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	        node.__n = nodeName;
	        return node;
	    }
	    function removeNode(node) {
	        if (node.parentNode) node.parentNode.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('key' === name) ; else if ('ref' === name) {
	            if (old) old(null);
	            if (value) value(node);
	        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var useCapture = name !== (name = name.replace(/Capture$/, ''));
	            name = name.toLowerCase().substring(2);
	            if (value) {
	                if (!old) node.addEventListener(name, eventProxy, useCapture);
	            } else node.removeEventListener(name, eventProxy, useCapture);
	            (node.__l || (node.__l = {}))[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || value === !1) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
	            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this.__l[e.type](options.event && options.event(e) || e);
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
	            hydrating = null != dom && !('__preactattr_' in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, componentRoot) {
	        var out = dom, prevSvgMode = isSvgMode;
	        if (null == vnode) vnode = '';
	        if ('string' == typeof vnode) {
	            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                out = document.createTextNode(vnode);
	                if (dom) {
	                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                    recollectNodeTree(dom, !0);
	                }
	            }
	            out.__preactattr_ = !0;
	            return out;
	        }
	        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
	        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
	            out = createNode(String(vnode.nodeName), isSvgMode);
	            if (dom) {
	                while (dom.firstChild) out.appendChild(dom.firstChild);
	                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                recollectNodeTree(dom, !0);
	            }
	        }
	        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
	        if (0 !== len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
	        }
	        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && void 0 !== keyed[key]) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
	                child = c;
	                children[j] = void 0;
	                if (j === childrenLen - 1) childrenLen--;
	                if (j === min) min++;
	                break;
	            }
	            child = idiff(child, vchild, context, mountAll);
	            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
	        }
	        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
	        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component); else {
	            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
	            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
	            removeChildren(node);
	        }
	    }
	    function removeChildren(node) {
	        node = node.lastChild;
	        while (node) {
	            var next = node.previousSibling;
	            recollectNodeTree(node, !0);
	            node = next;
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name;
	        (components[name] || (components[name] = [])).push(component);
	    }
	    function createComponent(Ctor, props, context) {
	        var inst, list = components[Ctor.name];
	        if (Ctor.prototype && Ctor.prototype.render) {
	            inst = new Ctor(props, context);
	            Component.call(inst, props, context);
	        } else {
	            inst = new Component(props, context);
	            inst.constructor = Ctor;
	            inst.render = doRender;
	        }
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.__b = list[i].__b;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function doRender(props, state, context) {
	        return this.constructor(props, context);
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component.__x) {
	            component.__x = !0;
	            if (component.__r = props.ref) delete props.ref;
	            if (component.__k = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.__c) component.__c = component.context;
	                component.context = context;
	            }
	            if (!component.__p) component.__p = component.props;
	            component.props = props;
	            component.__x = !1;
	            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__r) component.__r(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component.__x) {
	            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.__p = component.__s = component.__c = component.__b = null;
	            component.__d = !1;
	            if (!skip) {
	                rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if ('function' == typeof childComponent) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
	                        toUnmount = inst;
	                        component._component = inst = createComponent(childComponent, childProps, context);
	                        inst.__b = inst.__b || nextBase;
	                        inst.__u = component;
	                        setComponentProps(inst, childProps, 0, context, !1);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase, !1);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t.__u) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                flushMounts();
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.__b) {
	                c.__b = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom, !1);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component.__x = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner); else if (base) {
	            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
	            component.__b = base;
	            removeNode(base);
	            collectComponent(component);
	            removeChildren(base);
	        }
	        if (component.__r) component.__r(null);
	    }
	    function Component(props, context) {
	        this.__d = !0;
	        this.context = context;
	        this.props = props;
	        this.state = this.state || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent, !1);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
	    var items = [];
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.__s) this.__s = extend({}, s);
	            extend(s, 'function' == typeof state ? state(s, this.props) : state);
	            if (callback) (this.__h = this.__h || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function(callback) {
	            if (callback) (this.__h = this.__h || []).push(callback);
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    var preact = {
	        h: h,
	        createElement: h,
	        cloneElement: cloneElement,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options
	    };
	    if (true) module.exports = preact; else self.preact = preact;
	}();
	//# sourceMappingURL=preact.js.map

/***/ })
/******/ ])
});
;
//# sourceMappingURL=preact-responsive.js.map