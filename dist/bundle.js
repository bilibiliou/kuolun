/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Comment-System
 * 
 * Author: Owen 
 * Email: <469564715@qq.com>
 * Github: github.com/numerhero
 * 
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(231);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactRedux = __webpack_require__(173);

	var _configure = __webpack_require__(196);

	var _router = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configure.configureStore)();

	/*** components ***/


	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_router.CommentWrap, null)
	), document.querySelector(".demo"), function () {
	  return console.log(">>>>>>　页面渲染已经完成　<<<<<<");
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(174);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(177);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(175);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(176);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(2);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 176 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = connect;

	var _react = __webpack_require__(2);

	var _storeShape = __webpack_require__(175);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(178);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(179);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(176);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(182);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(194);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(195);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(180);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(181);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(189);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(191);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(192);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(193);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(190);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(182);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(187);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;

	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */

	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(183),
	    isHostObject = __webpack_require__(185),
	    isObjectLike = __webpack_require__(186);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(184);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 184 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	module.exports = __webpack_require__(188)(global || window || this);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;

		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(181);

	var _isPlainObject = __webpack_require__(182);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(190);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(193);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();

	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 194 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.configureStore = undefined;

	var _redux = __webpack_require__(180);

	var _reduxThunk = __webpack_require__(197);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _index = __webpack_require__(198);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// store 根据导入的reduce 生成 state树
	var configureStore = exports.configureStore = function configureStore() {
	    var store = (0, _redux.createStore)(_index2.default, window.devToolsExtension && window.devToolsExtension(), (0, _redux.applyMiddleware)(_reduxThunk2.default));

	    return store;
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(180);

	var _CommentReducer = __webpack_require__(199);

	var _CommentReducer2 = _interopRequireDefault(_CommentReducer);

	var _LoginReducer = __webpack_require__(201);

	var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

	var _SortReducer = __webpack_require__(203);

	var _SortReducer2 = _interopRequireDefault(_SortReducer);

	var _AlertPlaneReducer = __webpack_require__(204);

	var _AlertPlaneReducer2 = _interopRequireDefault(_AlertPlaneReducer);

	var _HandleDataReducer = __webpack_require__(205);

	var _HandleDataReducer2 = _interopRequireDefault(_HandleDataReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// reducers 汇总  
	var rootReducer = (0, _redux.combineReducers)({
	    CommentReducer: _CommentReducer2.default,
	    LoginReducer: _LoginReducer2.default,
	    SortReducer: _SortReducer2.default,
	    AlertPlaneReducer: _AlertPlaneReducer2.default,
	    HandleDataReducer: _HandleDataReducer2.default
	});

	exports.default = rootReducer;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _constants = __webpack_require__(200);

	var _toTimeString$match$s = new Date().toTimeString().match(/(\d{2})\:(\d{2})\:(\d{2})/).slice(1, 4);

	var _toTimeString$match$s2 = _slicedToArray(_toTimeString$match$s, 4);

	var day = _toTimeString$match$s2[0];
	var year = _toTimeString$match$s2[1];
	var month = _toTimeString$match$s2[2];
	var date = _toTimeString$match$s2[3];

	var initialState = {
		ItemDataes: [],
		BandBoff: 1
	};

	var CommentReducer = function CommentReducer() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case _constants.Types.UPDATE_ITEM_DATAES:

				return Object.assign({}, state, { ItemDataes: action.payload.newDataes });

			case _constants.Types.CHANGE_BAND_STATE:
				return Object.assign({}, state, { BandBoff: state.BandBoff ^ 1 });

			default:
				return state;
		}
	};

	exports.default = CommentReducer;

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Types = exports.Types = {
	    // Comment
	    UPDATE_ITEM_DATAES: "UPDATE_ITEM_DATAES",
	    CHANGE_BAND_STATE: "CHANGE_BAND_STATE",

	    // Login
	    CHANGE_LOGIN_TABLE_STATE: "CHANGE_LOGIN_TABLE_STATE",
	    UPDATE_USER_INFO: "UPDATE_USER_INFO",
	    LOGIN_OUT: "LOGIN_OUT",
	    // Sort
	    SORT_STATE_CHANGE: "SORT_STATE_CHANGE",

	    // AlertPlane
	    POP_ALERT_PLANE: "POP_ALERT_PLANE",

	    // HandleData
	    UPDATE_GLOBAL_DATA_INFO: "UPDATE_GLOBAL_DATA_INFO"
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(200);

	var _util = __webpack_require__(202);

	var initialState = {
	    userInfo: {
	        "userName": (0, _util.getCookie)("user-name") ? (0, _util.getCookie)("user-name")[1] : "",
	        "userEmail": (0, _util.getCookie)("user-email") ? (0, _util.getCookie)("user-email")[1] : "",
	        "userAvatar": "/img/default-avatar.png",
	        "commentAuthor": "游客"
	    },
	    loginTableState: true
	};

	var LoginReducer = function LoginReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _constants.Types.CHANGE_LOGIN_TABLE_STATE:
	            var toggleState = !state.loginTableState;
	            return Object.assign({}, state, { loginTableState: toggleState });

	        case _constants.Types.UPDATE_USER_INFO:
	            (0, _util.setCookie)("user-name", action.payload.newInfo.userName, 30);
	            (0, _util.setCookie)("user-email", action.payload.newInfo.userEmail, 30);

	            return Object.assign({}, state, {
	                userInfo: action.payload.newInfo
	            });

	        case _constants.Types.LOGIN_OUT:
	            (0, _util.delCookie)("user-name");
	            (0, _util.delCookie)("user-email");
	            return Object.assign({}, state, {
	                userInfo: {},
	                loginTableState: !state.loginTableState
	            });

	        default:
	            return state;
	    }
	};

	exports.default = LoginReducer;

/***/ },
/* 202 */,
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(200);

	var initialState = {
	    SortState: "newest"
	};

	var SortReducer = function SortReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _constants.Types.SORT_STATE_CHANGE:
	            return Object.assign({}, state, {
	                SortState: action.payload.SortState
	            });

	        default:
	            return state;
	    }
	};

	exports.default = SortReducer;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(200);

	var initialState = {
	    AlertPlanePrompt: "",
	    AlertPlaneState: 0
	};

	var AlertPlaneReducer = function AlertPlaneReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _constants.Types.POP_ALERT_PLANE:
	            return Object.assign({}, state, {
	                AlertPlanePrompt: action.payload.AlertPlanePrompt,
	                AlertPlaneState: action.payload.AlertPlaneState
	            });

	        default:
	            return state;
	    }
	};

	exports.default = AlertPlaneReducer;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _constants = __webpack_require__(200);

	var initialState = {
	    PageCommentsNum: 6, // 每页10条评论
	    PaginationLimit: 9, // 每次展现9页页码
	    AllDataNum: 0, // 评论总数
	    PaginationNum: 0, // 页码数
	    NowPage: 1 // 当前页码
	};

	var HandleDataReducer = function HandleDataReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _constants.Types.UPDATE_GLOBAL_DATA_INFO:
	            var temp = 0,
	                divide = ~~(action.payload.AllDataNum / state.PageCommentsNum),
	                mod = action.payload.AllDataNum % state.PageCommentsNum;

	            temp = !mod ? divide : divide + 1;

	            return Object.assign({}, state, {
	                AllDataNum: action.payload.AllDataNum,
	                PaginationNum: temp,
	                NowPage: action.payload.NowPage
	            });
	        default:
	            return state;
	    }
	};

	exports.default = HandleDataReducer;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AlertPlane = exports.LoginTable = exports.FeedBackMain = exports.CommentWrap = exports.CommentPagination = exports.CommentList = exports.CommentItem = exports.CommentHeader = exports.CommentFooter = exports.CommentFeedback = exports.CommentEditer = undefined;

	var _CommentEditer = __webpack_require__(207);

	var _CommentEditer2 = _interopRequireDefault(_CommentEditer);

	var _CommentFeedback = __webpack_require__(218);

	var _CommentFeedback2 = _interopRequireDefault(_CommentFeedback);

	var _CommentFooter = __webpack_require__(221);

	var _CommentFooter2 = _interopRequireDefault(_CommentFooter);

	var _CommentHeader = __webpack_require__(222);

	var _CommentHeader2 = _interopRequireDefault(_CommentHeader);

	var _CommentItem = __webpack_require__(224);

	var _CommentItem2 = _interopRequireDefault(_CommentItem);

	var _CommentList = __webpack_require__(225);

	var _CommentList2 = _interopRequireDefault(_CommentList);

	var _CommentPagination = __webpack_require__(226);

	var _CommentPagination2 = _interopRequireDefault(_CommentPagination);

	var _CommentWrap = __webpack_require__(227);

	var _CommentWrap2 = _interopRequireDefault(_CommentWrap);

	var _FeedBackMain = __webpack_require__(228);

	var _FeedBackMain2 = _interopRequireDefault(_FeedBackMain);

	var _LoginTable = __webpack_require__(229);

	var _LoginTable2 = _interopRequireDefault(_LoginTable);

	var _AlertPlane = __webpack_require__(230);

	var _AlertPlane2 = _interopRequireDefault(_AlertPlane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.CommentEditer = _CommentEditer2.default;
	exports.CommentFeedback = _CommentFeedback2.default;
	exports.CommentFooter = _CommentFooter2.default;
	exports.CommentHeader = _CommentHeader2.default;
	exports.CommentItem = _CommentItem2.default;
	exports.CommentList = _CommentList2.default;
	exports.CommentPagination = _CommentPagination2.default;
	exports.CommentWrap = _CommentWrap2.default;
	exports.FeedBackMain = _FeedBackMain2.default;
	exports.LoginTable = _LoginTable2.default;
	exports.AlertPlane = _AlertPlane2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "router.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _router = __webpack_require__(206);

	var _util = __webpack_require__(202);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _LoginActions = __webpack_require__(208);

	var _AlertPlaneActions = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 主评论框
	var CommentEditer = function (_Component) {
		_inherits(CommentEditer, _Component);

		function CommentEditer(props) {
			_classCallCheck(this, CommentEditer);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentEditer).call(this, props));

			_this.LoginOut = _this.LoginOut.bind(_this);
			return _this;
		}

		_createClass(CommentEditer, [{
			key: "LoginOut",
			value: function LoginOut() {
				this.props.actions.AlertPlaneThunk("您确定要登出吗？", function () {
					this.props.actions.LoginOutTask();
				}.bind(this));
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var snsLogin = this.refs["sns-login"],
				    loginInfos = this.refs["login-infos"],
				    method = (0, _util.getCookie)("login-method");
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props;
				var userInfo = _props.userInfo;
				var actions = _props.actions;


				var LoginBthns = void 0;

				if (userInfo.userEmail) {
					LoginBthns = _react2.default.createElement(
						"p",
						{ className: "login-infos",
							ref: "login-infos"
						},
						_react2.default.createElement(
							"a",
							{ href: "javascript:;" },
							userInfo.userName,
							" < ",
							userInfo.userEmail,
							" >"
						),
						_react2.default.createElement(
							"span",
							null,
							" ( ",
							userInfo.commentAuthor,
							" )"
						),
						_react2.default.createElement(
							"button",
							{
								className: "login-out__btn",
								onClick: this.LoginOut
							},
							"登出"
						)
					);
				} else {
					LoginBthns = _react2.default.createElement(
						"p",
						{ className: "login-infos",
							ref: "login-infos"
						},
						_react2.default.createElement(
							"a",
							{ href: "javascript:;", className: "init_prompt" },
							"欢迎您使用阔论，请先登录"
						),
						_react2.default.createElement(
							"button",
							{
								className: "login-in__btn",
								onClick: actions.LoginTableStateTask
							},
							"登录"
						)
					);
				}

				return _react2.default.createElement(
					"section",
					{ className: "editer-wrap" },
					_react2.default.createElement(
						"section",
						{ className: "comment__feedback" },
						_react2.default.createElement(
							"figure",
							{ className: "editer-wrap__avatar" },
							_react2.default.createElement("img", { src: "/img/default-avatar.png", alt: "avatar" })
						),
						_react2.default.createElement(
							"section",
							{ className: "comment__feedback--section" },
							LoginBthns,
							_react2.default.createElement(_router.CommentFeedback, {
								CommentMainTask: true,
								MainFeedBackBox: true
							})
						)
					)
				);
			}
		}]);

		return CommentEditer;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			userInfo: state.LoginReducer.userInfo
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				AlertPlaneThunk: _AlertPlaneActions.AlertPlaneThunk,
				LoginOutTask: _LoginActions.LoginOutTask,
				LoginTableStateTask: _LoginActions.LoginTableStateTask
			}, dispatch)
		};
	})(CommentEditer);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentEditer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoginOutTask = exports.LoginInThunk = exports.UpDateUserInfoTask = exports.LoginTableStateTask = undefined;

	var _constants = __webpack_require__(200);

	var _reduxActions = __webpack_require__(209);

	var _AlertPlaneActions = __webpack_require__(215);

	var LoginTableStateTask = exports.LoginTableStateTask = (0, _reduxActions.createAction)(_constants.Types.CHANGE_LOGIN_TABLE_STATE);

	var UpDateUserInfoTask = exports.UpDateUserInfoTask = (0, _reduxActions.createAction)(_constants.Types.UPDATE_USER_INFO, function (newInfo) {
	    return {
	        newInfo: newInfo
	    };
	});

	var LoginInThunk = exports.LoginInThunk = function LoginInThunk(newInfo) {

	    return function (dispatch) {
	        fetch("/setSession", {
	            method: "POST",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            body: "newInfo=" + JSON.stringify(newInfo)
	        }).then(function (res) {
	            switch (true) {
	                case res.ok:
	                    dispatch(UpDateUserInfoTask(newInfo));
	                    break;
	                case res.status === 404:
	                    return Promise.reject(404);
	            }
	        }).catch(function (errCode) {
	            if (errCode) {
	                (0, _AlertPlaneActions.AlertPlaneThunk)("登录失败， " + errCode + " 错误");
	            } else {
	                (0, _AlertPlaneActions.AlertPlaneThunk)("登录失败， 未知错误");
	            }
	        });
	    };
	};

	var LoginOutTask = exports.LoginOutTask = (0, _reduxActions.createAction)(_constants.Types.LOGIN_OUT);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleActions = exports.handleAction = exports.createAction = undefined;

	var _createAction = __webpack_require__(210);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(211);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(212);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.createAction = _createAction2.default;
	exports.handleAction = _handleAction2.default;
	exports.handleActions = _handleActions2.default;

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  var actionHandler = function actionHandler() {
	    var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

	    var action = {
	      type: type
	    };

	    var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalActionCreator.apply(undefined, arguments);
	    if (!(payload === null || payload === undefined)) {
	      action.payload = payload;
	    }

	    if (hasError) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, arguments);
	    }

	    return action;
	  };

	  actionHandler.toString = function () {
	    return type;
	  };

	  return actionHandler;
	}

/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleAction;
	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers, defaultState) {
	  var typeValue = isFunction(type) ? type.toString() : type;

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];

	    // If action type does not match, return previous state
	    if (action.type !== typeValue) return state;

	    var handlerKey = action.error === true ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers.throw = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleActions;

	var _handleAction = __webpack_require__(211);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(213);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(214);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function handleActions(handlers, defaultState) {
	  var reducers = (0, _ownKeys2.default)(handlers).map(function (type) {
	    return (0, _handleAction2.default)(type, handlers[type]);
	  });
	  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));

	  return typeof defaultState !== 'undefined' ? function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
	    var action = arguments[1];
	    return reducer(state, action);
	  } : reducer;
	}

/***/ },
/* 213 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownKeys;
	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

/***/ },
/* 214 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AlertPlaneThunk = exports.TorFTask = undefined;

	var _constants = __webpack_require__(200);

	var _reduxActions = __webpack_require__(209);

	var _foxListener = __webpack_require__(216);

	var _foxListener2 = _interopRequireDefault(_foxListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var foxListener = new _foxListener2.default();

	var AlertPlaneTask = (0, _reduxActions.createAction)(_constants.Types.POP_ALERT_PLANE, function (AlertPlanePrompt, AlertPlaneState) {

	    return {
	        AlertPlanePrompt: AlertPlanePrompt,
	        AlertPlaneState: AlertPlaneState
	    };
	});

	var TorFTask = exports.TorFTask = function TorFTask(result) {
	    return function (dispatch) {
	        foxListener.once("finishChoice", result); // 获得用户返回的结果   
	    };
	};

	var AlertPlaneThunk = exports.AlertPlaneThunk = function AlertPlaneThunk(Prompot, callback) {
	    return function (dispatch) {
	        dispatch(AlertPlaneTask(Prompot, 1)); // 弹出对话框

	        foxListener.subscribe("finishChoice", function (result) {
	            if (result) {
	                // 如果结果为 是 执行回调函数
	                callback && callback();
	            }
	            dispatch(AlertPlaneTask("", 0)); // 关闭对话框         
	        });
	    };
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Listener
	 * Copyright(c) 2016 Owen Brown
	 * MIT Licensed
	 */

	'use strict';

	module.exports = __webpack_require__(217);

/***/ },
/* 217 */
/***/ function(module, exports) {

	"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Util=function(){function e(){_classCallCheck(this,e),this.handlers={}}return _createClass(e,[{key:"publish",value:function(e){for(var t=this,r=arguments.length,n=Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];try{var i=function(){var r=t,s=t.RegAnalyse(e),i=s.ev,a=s.className;if(!t.isHas(i,a))return{v:void 0};if(a)t.handlers[i][a].forEach(function(e){return e.apply(r,n)});else{var l=!0,o=!1,u=void 0;try{for(var h,f=Object.keys(t.handlers[i])[Symbol.iterator]();!(l=(h=f.next()).done);l=!0){var c=h.value;t.handlers[i][c].forEach(function(e){return e.apply(r,n)})}}catch(e){o=!0,u=e}finally{try{!l&&f.return&&f.return()}finally{if(o)throw u}}}}();if("object"===("undefined"==typeof i?"undefined":_typeof(i)))return i.v}catch(e){throw new Error(e)}return this}},{key:"once",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.publish.apply(this,[e].concat(r)),this.unsubscribe(e)}},{key:"subscribe",value:function(e,t){this.isString(e);var r=this.RegAnalyse(e),n=r.ev,s=r.className;if(!n)throw new Error("listenerName must only combine with only character、number and _  ");if(/^default$/.test(s))throw new Error("default eventClass was binded !");return!(n in this.handlers)&&(this.handlers[n]={default:[]}),s?this.handlers[n][s]?this.handlers[n][s].push(t):this.handlers[n][s]=[t]:this.handlers[n].default.push(t),this}},{key:"unsubscribe",value:function(e){this.isString(e);var t=this.RegAnalyse(e),r=t.ev,n=t.className;if(this.isHas(r,n))return n?delete this.handlers[r][n]:delete this.handlers[r],this}},{key:"isHas",value:function(e,t){if(e in this.handlers&&(!t||t in this.handlers[e]))return!0;throw new Error("The Event didnt bind !")}},{key:"RegAnalyse",value:function(e){var t=/^(\w+)(\.(\w+))?$/.exec(e),r=t[1],n=t[3];return{className:n,ev:r}}},{key:"isString",value:function(e){if("string"!=typeof e)throw new Error("EventName must is a string !")}}]),e}();module.exports=Util,exports.default=Util;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _util = __webpack_require__(202);

	var _CommentActions = __webpack_require__(219);

	var _LoginActions = __webpack_require__(208);

	var _AlertPlaneActions = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentFeedback = function (_Component) {
		_inherits(CommentFeedback, _Component);

		function CommentFeedback(props) {
			_classCallCheck(this, CommentFeedback);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentFeedback).call(this, props));

			_this.reSet = _this.reSet.bind(_this);
			_this.sendComment = _this.sendComment.bind(_this);
			_this.editDefalut = _this.editDefalut.bind(_this);
			_this.handleBandState = _this.handleBandState.bind(_this);
			return _this;
		}

		_createClass(CommentFeedback, [{
			key: "editDefalut",
			value: function editDefalut(ev) {
				var target = ev.target;
				var keyCode = ev.keyCode;


				if (keyCode === 9) {
					var setCaretPosition = function setCaretPosition(ctrl, pos) {
						//设置光标位置函数 
						if (ctrl.setSelectionRange) {
							ctrl.focus();
							ctrl.setSelectionRange(pos, pos);
						} else if (ctrl.createTextRange) {
							var range = ctrl.createTextRange();
							range.collapse(true);
							range.moveEnd('character', pos);
							range.moveStart('character', pos);
							range.select();
						}
					};

					var selObj = window.getSelection();
					var anchorOffset = selObj.anchorOffset;


					target.innerHTML = target.innerHTML.splice(anchorOffset - 1, 0, "  ");

					var len = target.innerHTML.length;

					ev.preventDefault();
				}

				if (ev.ctrlKey && keyCode === 13) {
					// 提交	
				}
			}
		}, {
			key: "sendComment",
			value: function sendComment(ev) {
				var _props = this.props;
				var actions = _props.actions;
				var userInfo = _props.userInfo;
				var ItemDataes = _props.ItemDataes;
				var loginTableState = _props.loginTableState;
				var AllDataNum = _props.AllDataNum;
				var CommentMainTask = _props.CommentMainTask;
				var CommentFeedBackTask = _props.CommentFeedBackTask;
				var CommentSubFeedBackTask = _props.CommentSubFeedBackTask;
				var ParentIndexOnDb = _props.ParentIndexOnDb;
				var ParentIndex = _props.ParentIndex;
				var _props$BeFeedIndex = _props.BeFeedIndex;
				var BeFeedIndex = _props$BeFeedIndex === undefined ? BeFeedIndex || -1 : _props$BeFeedIndex;
				var NowPage = _props.NowPage;
				var SortState = _props.SortState;

				var oEditerWrap = this.refs["editer-wrap"];
				var oDate = new Date();

				var _oDate$toLocaleDateSt = oDate.toLocaleDateString().match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/).slice(1, 4);

				var _oDate$toLocaleDateSt2 = _slicedToArray(_oDate$toLocaleDateSt, 3);

				var year = _oDate$toLocaleDateSt2[0];
				var month = _oDate$toLocaleDateSt2[1];
				var day = _oDate$toLocaleDateSt2[2];

				var commentContent = {
					"avatar_url": userInfo.userAvatar,
					"author_name": userInfo.userName,
					"author_email": userInfo.userEmail,
					"publish_time": year + "-" + month + "-" + day + "|" + oDate.getTime(),
					"publish_content": oEditerWrap.innerHTML,
					"vote_up": 0,
					"commentAuthor": userInfo.commentAuthor,
					"ForBidFeedBack": CommentSubFeedBackTask ? true : false
				};

				if (!!(0, _util.getCookie)("user-email")) {

					if (!oEditerWrap.innerHTML) {
						return;
					}

					var arr = [].concat(_toConsumableArray(ItemDataes));

					// 选择 发送主推送，还是回复推送
					// 在这里就处理好数据
					switch (true) {
						case CommentMainTask:
							commentContent["index"] = AllDataNum;
							commentContent["FeedBack"] = [];

							// arr.push(commentContent);
							actions.CommentThunk(NowPage - 1, SortState, commentContent);
							break;

						case CommentFeedBackTask:
						case CommentSubFeedBackTask:

							commentContent["FeedBackIndex"] = ItemDataes[ParentIndex].FeedBack.length;
							commentContent["BeFeedIndex"] = BeFeedIndex;

							// arr[ParentIndex].FeedBack.push(commentContent);
							actions.CommentThunk(NowPage - 1, SortState, commentContent, ParentIndexOnDb);
							break;
					}

					oEditerWrap.innerHTML = "";
				} else {
					actions.LoginTableStateTask();
				}
			}
		}, {
			key: "reSet",
			value: function reSet(ev) {
				var editerWrap = this.refs["editer-wrap"];

				if (editerWrap.innerHTML) {
					this.props.actions.AlertPlaneThunk("您确定需要进行文本重置？", function () {

						editerWrap.innerHTML = "";
						editerWrap.focus();
					}.bind(this));
				}
			}
		}, {
			key: "handleBandState",
			value: function handleBandState(ev) {
				var editerWrap = this.refs["editer-wrap"];

				if (ev.type === "click") {
					editerWrap.focus();
				}
				editerWrap.innerHTML === "" && this.props.actions.ChangeBandHiddenBoffTask();
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var actions = _props2.actions;
				var MainFeedBackBox = _props2.MainFeedBackBox;
				var BandBoff = _props2.BandBoff;


				return _react2.default.createElement(
					"div",
					{ className: "comment__feedback__box" },
					_react2.default.createElement("div", { className: "comment__feedback--edit",
						contentEditable: "true",
						name: "feedback_content",
						placeholder: "说点什么吧...",
						"aria-label": "说点什么吧...",
						onKeyDown: this.editDefalut,
						ref: "editer-wrap",

						onBlur: MainFeedBackBox ? this.handleBandState : null
					}),
					MainFeedBackBox && BandBoff ? _react2.default.createElement(
						"div",
						{ className: "comment__feedback__mask",
							onClick: this.handleBandState
						},
						_react2.default.createElement(
							"p",
							{ className: "comment__feedback__mask--title" },
							"阔论"
						),
						_react2.default.createElement(
							"p",
							{ className: "comment__feedback__mask--pinyin" },
							"KUO LUN"
						)
					) : null,
					_react2.default.createElement(
						"div",
						{ className: "comment__feedback--btns" },
						_react2.default.createElement(
							"button",
							{ className: "feedback--btns__reset",
								onClick: this.reSet
							},
							"重置"
						),
						_react2.default.createElement(
							"button",
							{ className: "feedback--btns__comment",
								onClick: this.sendComment
							},
							"评论一下"
						)
					)
				);
			}
		}]);

		return CommentFeedback;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			loginTableState: state.LoginReducer.loginTableState,
			userInfo: state.LoginReducer.userInfo,
			ItemDataes: state.CommentReducer.ItemDataes,
			BandBoff: state.CommentReducer.BandBoff,
			AllDataNum: state.HandleDataReducer.AllDataNum,
			SortState: state.SortReducer.SortState,
			NowPage: state.HandleDataReducer.NowPage
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				AlertPlaneThunk: _AlertPlaneActions.AlertPlaneThunk,
				CommentThunk: _CommentActions.CommentThunk,
				LoginTableStateTask: _LoginActions.LoginTableStateTask,
				ChangeBandHiddenBoffTask: _CommentActions.ChangeBandHiddenBoffTask
			}, dispatch)
		};
	})(CommentFeedback);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentFeedback.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.VoteUpThunk = exports.ChangeBandHiddenBoffTask = exports.DelThunk = exports.CommentThunk = exports.UpDateItemDataesTask = undefined;

	var _constants = __webpack_require__(200);

	var _reduxActions = __webpack_require__(209);

	var _AlertPlaneActions = __webpack_require__(215);

	var _HandleDataActions = __webpack_require__(220);

	var UpDateItemDataesTask = exports.UpDateItemDataesTask = (0, _reduxActions.createAction)(_constants.Types.UPDATE_ITEM_DATAES, function (newDataes) {
	    return {
	        newDataes: newDataes
	    };
	});

	// 每次进行操作完成后，需要更新数据栈

	var CommentThunk = exports.CommentThunk = function CommentThunk(page, SortState, newContent) {
	    var FBIndex = arguments.length <= 3 || arguments[3] === undefined ? -1 : arguments[3];

	    return function (dispatch) {
	        var data = JSON.stringify(newContent);
	        fetch("/saveData", {
	            method: "POST",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            body: "newContent=" + data + "&FBIndex=" + FBIndex
	        }).then(function (res) {
	            switch (true) {
	                case res.ok:
	                    // 发送完后跳转到首页？
	                    // switch(SortState) {
	                    //     case "newest": 
	                    //         dispatch(getDataesThunk(0, SortState));
	                    //         break;

	                    //     default:
	                    //         dispatch(getDataesThunk(page, SortState));
	                    // }
	                    dispatch((0, _HandleDataActions.getDataesThunk)(page, SortState));
	                    break;
	                case res.status === 404:
	                    return Promise.reject("404");
	                case res.status === 500:
	                    return Promise.reject("500");
	                default:
	                    return Promise.reject();
	            }
	        }).catch(function (HttpCode) {
	            switch (HttpCode) {
	                case 404:
	                    return dispatch((0, _AlertPlaneActions.AlertPlaneThunk)("发布评论出错，请检查网络连接"));

	                case 500:
	                    return dispatch((0, _AlertPlaneActions.AlertPlaneThunk)("服务器出错，暂时无法进行评论"));

	                default:
	                    return dispatch((0, _AlertPlaneActions.AlertPlaneThunk)("未知错误！！！"));
	            }
	        });
	    };
	};

	var DelThunk = exports.DelThunk = function DelThunk(page, SortState, index) {
	    var ParentIndex = arguments.length <= 3 || arguments[3] === undefined ? -1 : arguments[3];

	    return function (dispatch) {
	        fetch("/delData", {
	            method: "POST",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            body: "index=" + index + "&ParentIndex=" + ParentIndex
	        }).then(function (res) {
	            switch (true) {
	                case res.ok:
	                    dispatch((0, _HandleDataActions.getDataesThunk)(page, SortState));
	                    break;
	                case res.status === 404:
	                    return Promise.reject("404");
	                case res.status === 500:
	                    return Promise.reject("500");
	            }
	        }).catch(function (err) {
	            switch (err) {
	                case "404":
	                    return (0, _AlertPlaneActions.AlertPlaneThunk)("404！ 网络不好？删除失败");
	                case "500":
	                    return (0, _AlertPlaneActions.AlertPlaneThunk)("服务器出错，删除失败，请稍后再登录尝试");
	            }
	        });
	    };
	};

	var ChangeBandHiddenBoffTask = exports.ChangeBandHiddenBoffTask = (0, _reduxActions.createAction)(_constants.Types.CHANGE_BAND_STATE);

	var VoteUpThunk = exports.VoteUpThunk = function VoteUpThunk(index, failback) {
	    return function (dispatch) {
	        fetch("/VoteUpSomeItem", {
	            method: "POST",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            body: "index=" + index
	        }).then(function () {
	            if (!res.ok) {
	                return Promise.reject();
	            }
	        }).catch(function () {
	            failback();
	            (0, _AlertPlaneActions.AlertPlaneThunk)("点赞操作出错，请重新尝试");
	        });
	    };
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getDataesThunk = exports.UpDateDataInfoTask = undefined;

	var _constants = __webpack_require__(200);

	var _reduxActions = __webpack_require__(209);

	var _AlertPlaneActions = __webpack_require__(215);

	var _CommentActions = __webpack_require__(219);

	var UpDateDataInfoTask = exports.UpDateDataInfoTask = (0, _reduxActions.createAction)(_constants.Types.UPDATE_GLOBAL_DATA_INFO, function (AllDataNum, NowPage) {
	    return {
	        AllDataNum: AllDataNum,
	        NowPage: NowPage
	    };
	});

	var getDataesThunk = exports.getDataesThunk = function getDataesThunk(page, SortState) {
	    return function (dispatch) {
	        fetch("/resDataes", {
	            method: "POST",
	            headers: {
	                "Content-Type": "application/x-www-form-urlencoded"
	            },
	            body: "whichpage=" + page + "&SortState=" + SortState
	        }).then(function (res) {
	            switch (true) {
	                case res.ok:
	                    return res.json();
	                case res.status === 404:
	                    return Promise.reject("404");
	                case res.status === 500:
	                    return Promise.reject("500");
	            }
	        }).catch(function (err) {
	            switch (err) {
	                case "404":
	                    return (0, _AlertPlaneActions.AlertPlaneThunk)("404！ 网络不好？无法加载全部评论");
	                case "500":
	                    return (0, _AlertPlaneActions.AlertPlaneThunk)("服务器出错，请稍后再登录尝试");
	            }
	        }).then(function (value) {
	            var Dataes = JSON.parse(value);

	            dispatch(UpDateDataInfoTask(Dataes.allLen, page + 1));
	            dispatch((0, _CommentActions.UpDateItemDataesTask)(Dataes.Data));
	        });
	    };
	};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _router = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentFooter = function (_Component) {
		_inherits(CommentFooter, _Component);

		function CommentFooter(props) {
			_classCallCheck(this, CommentFooter);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentFooter).call(this, props));
		}

		_createClass(CommentFooter, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"footer",
					{ className: "comment__footer" },
					_react2.default.createElement(_router.CommentPagination, null)
				);
			}
		}]);

		return CommentFooter;
	}(_react.Component);

	exports.default = CommentFooter;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentFooter.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _SortActions = __webpack_require__(223);

	var _HandleDataActions = __webpack_require__(220);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentHeader = function (_Component) {
		_inherits(CommentHeader, _Component);

		function CommentHeader(props) {
			_classCallCheck(this, CommentHeader);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentHeader).call(this, props));

			_this.sortListHandle = _this.sortListHandle.bind(_this);
			return _this;
		}

		_createClass(CommentHeader, [{
			key: "sortListHandle",
			value: function sortListHandle(St) {
				var _props = this.props;
				var SortState = _props.SortState;
				var NowPage = _props.NowPage;
				var actions = _props.actions;


				if (SortState !== St) {
					this.props.actions.ChangeSortStateTask(St);
					actions.getDataesThunk(NowPage - 1, St);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var ItemDataes = _props2.ItemDataes;
				var AllDataNum = _props2.AllDataNum;


				return _react2.default.createElement(
					"header",
					{ className: "comment__header" },
					_react2.default.createElement(
						"p",
						{ className: "comment__header__span" },
						"评论列表 ( ",
						_react2.default.createElement(
							"span",
							null,
							AllDataNum
						),
						" )"
					),
					_react2.default.createElement(
						"p",
						{ className: "comment__header__btns" },
						_react2.default.createElement(
							"button",
							{
								onClick: this.sortListHandle.bind(this, "newest")
							},
							"最新"
						),
						_react2.default.createElement(
							"button",
							{
								onClick: this.sortListHandle.bind(this, "hottest")
							},
							"最热"
						)
					)
				);
			}
		}]);

		return CommentHeader;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			NowPage: state.HandleDataReducer.NowPage,
			SortState: state.SortReducer.SortState,
			ItemDataes: state.CommentReducer.ItemDataes,
			AllDataNum: state.HandleDataReducer.AllDataNum
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				ChangeSortStateTask: _SortActions.ChangeSortStateTask,
				getDataesThunk: _HandleDataActions.getDataesThunk
			}, dispatch)
		};
	})(CommentHeader);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentHeader.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ChangeSortStateTask = undefined;

	var _constants = __webpack_require__(200);

	var _reduxActions = __webpack_require__(209);

	var ChangeSortStateTask = exports.ChangeSortStateTask = (0, _reduxActions.createAction)(_constants.Types.SORT_STATE_CHANGE, function (SortState) {
	    return {
	        SortState: SortState
	    };
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _CommentActions = __webpack_require__(219);

	var _AlertPlaneActions = __webpack_require__(215);

	var _util = __webpack_require__(202);

	var _router = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentItem = function (_Component) {
		_inherits(CommentItem, _Component);

		function CommentItem(props) {
			_classCallCheck(this, CommentItem);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentItem).call(this, props));

			_this.ToggleFeedbackShow = _this.ToggleFeedbackShow.bind(_this);
			_this.DelSelf = _this.DelSelf.bind(_this);
			_this.VoteUpHandle = _this.VoteUpHandle.bind(_this);

			// 点赞功能 先从数据库获获取 加载页面后的点赞数，点击后
			// 只在View 层做数据更新，不做总体的数据更新，并发送一个Ajax, 修改
			// 数据库中的点赞数
			_this.state = {
				feedContentboff: false,
				feedWrapboff: false
			};
			return _this;
		}

		_createClass(CommentItem, [{
			key: "DelSelf",
			value: function DelSelf() {
				var index = this.props.ItemData.index;
				var _props = this.props;
				var ItemDataes = _props.ItemDataes;
				var actions = _props.actions;
				var SortState = _props.SortState;
				var NowPage = _props.NowPage;


				actions.AlertPlaneThunk("您确定删除该评论？（其下的回复也会被删除!）", function () {
					actions.DelThunk(NowPage - 1, SortState, index);
				});
			}
		}, {
			key: "ToggleFeedbackShow",
			value: function ToggleFeedbackShow() {
				var _state = this.state;
				var feedContentboff = _state.feedContentboff;
				var feedWrapboff = _state.feedWrapboff;


				this.setState({
					feedContentboff: !feedContentboff,
					feedWrapboff: !feedWrapboff
				});
			}
		}, {
			key: "VoteUpHandle",
			value: function VoteUpHandle() {
				// let {
				// 	actions,
				// 	userInfo
				// } = this.props,
				// {
				// 	index
				// } = this.props.ItemData

				// this.setState({
				// 	isVoted: false,
				// 	vote_up: this.state.vote_up + 1
				// })

				// actions.VoteUpThunk(index, userInfo, function () {
				// 	// 如果发生了错误，将点赞状态复原
				// 	this.setState({
				// 		isVoted: true,
				// 		vote_up: this.state.vote_up - 1
				// 	})
				// }.bind(this));
			}
		}, {
			key: "render",
			value: function render() {
				var _props$ItemData = this.props.ItemData;
				var index = _props$ItemData.index;
				var avatar_url = _props$ItemData.avatar_url;
				var author_name = _props$ItemData.author_name;
				var author_email = _props$ItemData.author_email;
				var publish_time = _props$ItemData.publish_time;
				var publish_content = _props$ItemData.publish_content;
				var commentAuthor = _props$ItemData.commentAuthor;
				var FeedBack = _props$ItemData.FeedBack;
				var vote_up = _props$ItemData.vote_up;
				var _props2 = this.props;
				var ItemDataes = _props2.ItemDataes;
				var userInfo = _props2.userInfo;
				var SelfIndex = _props2.SelfIndex;


				var pt = (0, _util.formatDate)(publish_time),
				    voteUpBox = void 0;

				if (this.state.isVoted && author_name !== userInfo.userName) {
					voteUpBox = _react2.default.createElement(
						"section",
						{ className: "comment__options__has-voted-up" },
						_react2.default.createElement(
							"button",
							null,
							_react2.default.createElement(
								"span",
								{
									className: "vote-up-counter"
								},
								vote_up
							),
							" 已赞"
						)
					);
				} else {
					voteUpBox = _react2.default.createElement(
						"section",
						{ className: "comment__options__vote-up", title: "点赞" },
						_react2.default.createElement(
							"button",
							{
								onClick: this.VoteUpHandle
							},
							_react2.default.createElement(
								"span",
								{
									className: "vote-up-counter"
								},
								vote_up
							),
							" 赞"
						)
					);
				}

				return _react2.default.createElement(
					"li",
					{ className: "comment__item" },
					_react2.default.createElement(
						"section",
						{ className: "comment__content" },
						_react2.default.createElement(
							"figure",
							{ className: "comment__author--avatar" },
							_react2.default.createElement("img", { src: avatar_url })
						),
						_react2.default.createElement(
							"section",
							{ className: "comment__content--main" },
							_react2.default.createElement(
								"p",
								{ className: "comment__content--author" },
								_react2.default.createElement(
									"a",
									{ href: "javascript:;" },
									author_name
								),
								_react2.default.createElement(
									"span",
									null,
									" (",
									commentAuthor,
									")"
								)
							),
							_react2.default.createElement(
								"p",
								{ className: "comment__content--time" },
								"发布于：",
								pt
							),
							_react2.default.createElement(
								"p",
								{ className: "comment__content--content" },
								publish_content
							),
							_react2.default.createElement(
								"footer",
								{ className: "comment__content--options" },
								_react2.default.createElement(
									"section",
									{ className: "comment__content--options__wrap" },
									!(userInfo.userEmail === author_email) ? _react2.default.createElement(
										"a",
										{ className: "comment__content--options__callback",
											href: "javascript:;",
											onClick: this.ToggleFeedbackShow
										},
										_react2.default.createElement("i", null),
										_react2.default.createElement(
											"span",
											null,
											"回复 (",
											FeedBack.length,
											"条)"
										)
									) : null,
									userInfo.userEmail === author_email ? _react2.default.createElement(
										"a",
										{ className: "comment__content--options__del",
											href: "javascript:;",
											onClick: this.DelSelf
										},
										_react2.default.createElement("i", null),
										_react2.default.createElement(
											"span",
											null,
											"删除"
										)
									) : null
								),
								voteUpBox
							)
						),
						this.state.feedContentboff ? _react2.default.createElement(
							"section",
							{ className: "feedback__content",
								ref: "feedback-content"
							},
							ItemDataes[SelfIndex].FeedBack.map(function (value, idx) {
								return _react2.default.createElement(_router.FeedBackMain, {
									FeedBackData: value,
									ParentIndexOnDb: index,
									ParentIndex: SelfIndex,
									key: idx
								});
							})
						) : null,
						this.state.feedWrapboff ? _react2.default.createElement(
							"section",
							{ className: "comment__feedback__wrap",
								ref: "comment-feedback-wrap"
							},
							_react2.default.createElement(
								"section",
								{ className: "comment__feedback" },
								_react2.default.createElement(
									"h3",
									null,
									"说点什么吧..."
								),
								_react2.default.createElement(_router.CommentFeedback, {
									CommentFeedBackTask: true,
									ParentIndex: SelfIndex,
									ParentIndexOnDb: index
								})
							)
						) : null
					)
				);
			}
		}]);

		return CommentItem;
	}(_react.Component);

	// CommentItem.PropTypes

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			ItemDataes: state.CommentReducer.ItemDataes,
			userInfo: state.LoginReducer.userInfo,
			SortState: state.SortReducer.SortState,
			NowPage: state.HandleDataReducer.NowPage
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				DelThunk: _CommentActions.DelThunk,
				AlertPlaneThunk: _AlertPlaneActions.AlertPlaneThunk,
				VoteUpThunk: _CommentActions.VoteUpThunk
			}, dispatch)
		};
	})(CommentItem);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _HandleDataActions = __webpack_require__(220);

	var _AlertPlaneActions = __webpack_require__(215);

	var _router = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentList = function (_Component) {
		_inherits(CommentList, _Component);

		function CommentList(props) {
			_classCallCheck(this, CommentList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).call(this, props));
		}

		_createClass(CommentList, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				var _props = this.props;
				var actions = _props.actions;
				var SortState = _props.SortState;

				// 初始时候请求数据，进行初始化

				actions.getDataesThunk(0, SortState);
			}
		}, {
			key: "render",
			value: function render() {
				var _props2 = this.props;
				var ItemDataes = _props2.ItemDataes;
				var SortState = _props2.SortState;
				var NowPage = _props2.NowPage;
				var actions = _props2.actions;
				var AllDataNum = _props2.AllDataNum;


				var box = void 0;

				if (ItemDataes.length && AllDataNum) {
					box = ItemDataes.map(function (ItemData, idx) {
						return _react2.default.createElement(_router.CommentItem, {
							ItemData: ItemData,
							SelfIndex: idx,
							key: idx
						});
					});
				} else if (AllDataNum) {
					box = _react2.default.createElement(
						"li",
						{ className: "no__comment__item" },
						_react2.default.createElement(
							"p",
							null,
							"该页评论已被删除，请切换其他页"
						)
					);
				} else {
					box = _react2.default.createElement(
						"li",
						{ className: "no__comment__item" },
						_react2.default.createElement(
							"p",
							null,
							"评论头条等你来抢！"
						)
					);
				}

				//评论头条等你来抢！
				return _react2.default.createElement(
					"section",
					{ className: "comment__list" },
					_react2.default.createElement(
						"ul",
						null,
						box
					)
				);
			}
		}]);

		return CommentList;
	}(_react.Component);

	CommentList.defaultProps = {
		ItemDataes: []
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			NowPage: state.HandleDataReducer.NowPage,
			ItemDataes: state.CommentReducer.ItemDataes,
			AllDataNum: state.HandleDataReducer.AllDataNum,
			SortState: state.SortReducer.SortState
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				getDataesThunk: _HandleDataActions.getDataesThunk,
				AlertPlaneThunk: _AlertPlaneActions.AlertPlaneThunk
			}, dispatch)
		};
	})(CommentList);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _HandleDataActions = __webpack_require__(220);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentPagination = function (_Component) {
		_inherits(CommentPagination, _Component);

		function CommentPagination(props) {
			_classCallCheck(this, CommentPagination);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentPagination).call(this, props));

			_this.pagination = _this.pagination.bind(_this);
			return _this;
		}

		_createClass(CommentPagination, [{
			key: "pagination",
			value: function pagination() {
				var _props = this.props;
				var AllDataNum = _props.AllDataNum;
				var PaginationNum = _props.PaginationNum;
				var PaginationLimit = _props.PaginationLimit;
				var NowPage = _props.NowPage;
				var halfNum = ~~(PaginationLimit / 2);
				var result = [];

				switch (true) {
					case PaginationNum < PaginationLimit:
						for (var i = 1; i <= PaginationNum; i++) {
							result.push(i);
						}
						return result;

					case NowPage <= halfNum + 1:
						for (var _i = 1; _i <= PaginationLimit; _i++) {
							result.push(_i);
						}

						result.push("尾页");
						return result;

					case NowPage > halfNum + 1 && NowPage < PaginationNum - halfNum:
						result.push("首页");

						for (var _i2 = NowPage - halfNum; _i2 <= NowPage + halfNum; _i2++) {
							result.push(_i2);
						}

						result.push("尾页");
						return result;
					case NowPage >= PaginationNum - halfNum:
						result.push("首页");

						for (var _i3 = PaginationNum - PaginationLimit + 1; _i3 <= PaginationNum; _i3++) {
							result.push(_i3);
						}

						return result;
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var ItemsMap = this.pagination();

				return _react2.default.createElement(
					"ol",
					{ className: "comment__pagination" },
					ItemsMap.map(function (value, idx) {
						return _react2.default.createElement(PaginationsItem, _extends({
							order: value,
							key: idx,
							active: _this2.props.NowPage === value ? 1 : 0

						}, _this2.props));
					})
				);
			}
		}]);

		return CommentPagination;
	}(_react.Component);

	var PaginationsItem = function (_Component2) {
		_inherits(PaginationsItem, _Component2);

		function PaginationsItem(props) {
			_classCallCheck(this, PaginationsItem);

			var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationsItem).call(this, props));

			_this3.handleChangePage.bind(_this3);
			return _this3;
		}

		_createClass(PaginationsItem, [{
			key: "handleChangePage",
			value: function handleChangePage(order) {
				var _props2 = this.props;
				var actions = _props2.actions;
				var AllDataNum = _props2.AllDataNum;
				var PaginationNum = _props2.PaginationNum;
				var SortState = _props2.SortState;


				switch (true) {
					case order === "首页":
						actions.getDataesThunk(0, SortState);
						break;
					case order === "尾页":
						actions.getDataesThunk(PaginationNum - 1, SortState);
						break;
					default:
						actions.getDataesThunk(parseInt(order) - 1, SortState);
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _props3 = this.props;
				var order = _props3.order;
				var active = _props3.active;


				return _react2.default.createElement(
					"li",
					null,
					_react2.default.createElement(
						"div",
						{
							className: active && "active",

							onClick: this.handleChangePage.bind(this, order)
						},
						order
					)
				);
			}
		}]);

		return PaginationsItem;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			SortState: state.SortReducer.SortState,
			AllDataNum: state.HandleDataReducer.AllDataNum, // 总数据的数目
			NowPage: state.HandleDataReducer.NowPage, // 当前页数
			PaginationNum: state.HandleDataReducer.PaginationNum, // 分页数
			PaginationLimit: state.HandleDataReducer.PaginationLimit // 分页限制数 
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				getDataesThunk: _HandleDataActions.getDataesThunk
			}, dispatch)
		};
	})(CommentPagination);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentPagination.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _router = __webpack_require__(206);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentWrap = function (_Component) {
		_inherits(CommentWrap, _Component);

		function CommentWrap(props) {
			_classCallCheck(this, CommentWrap);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentWrap).call(this, props));
		}

		_createClass(CommentWrap, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"section",
					{ className: "comment__wrap" },
					_react2.default.createElement(_router.CommentHeader, null),
					_react2.default.createElement(_router.CommentList, null),
					_react2.default.createElement(_router.CommentFooter, null),
					_react2.default.createElement(_router.CommentEditer, null),
					_react2.default.createElement(_router.LoginTable, null),
					_react2.default.createElement(_router.AlertPlane, null)
				);
			}
		}]);

		return CommentWrap;
	}(_react.Component);

	exports.default = CommentWrap;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommentWrap.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _CommentActions = __webpack_require__(219);

	var _util = __webpack_require__(202);

	var _router = __webpack_require__(206);

	var _AlertPlaneActions = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FeedBackMain = function (_Component) {
		_inherits(FeedBackMain, _Component);

		function FeedBackMain(props) {
			_classCallCheck(this, FeedBackMain);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FeedBackMain).call(this, props));

			_this.toggleFeedBackPlaneState = _this.toggleFeedBackPlaneState.bind(_this);
			_this.DelSelf = _this.DelSelf.bind(_this);
			_this.state = {
				feedbackBoff: false
			};
			return _this;
		}

		_createClass(FeedBackMain, [{
			key: "DelSelf",
			value: function DelSelf() {
				var _props = this.props;
				var ParentIndexOnDb = _props.ParentIndexOnDb;
				var actions = _props.actions;
				var NowPage = _props.NowPage;
				var SortState = _props.SortState;
				var FeedBackIndex = this.props.FeedBackData.FeedBackIndex;


				actions.AlertPlaneThunk("您确定删除该回复吗？", function () {
					actions.DelThunk(NowPage - 1, SortState, FeedBackIndex, ParentIndexOnDb);
				});
			}
		}, {
			key: "toggleFeedBackPlaneState",
			value: function toggleFeedBackPlaneState() {
				this.setState({
					feedbackBoff: !this.state.feedbackBoff
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _props$FeedBackData = this.props.FeedBackData;
				var FeedBackIndex = _props$FeedBackData.FeedBackIndex;
				var avatar_url = _props$FeedBackData.avatar_url;
				var author_name = _props$FeedBackData.author_name;
				var author_email = _props$FeedBackData.author_email;
				var publish_time = _props$FeedBackData.publish_time;
				var publish_content = _props$FeedBackData.publish_content;
				var commentAuthor = _props$FeedBackData.commentAuthor;
				var vote_up = _props$FeedBackData.vote_up;
				var ForBidFeedBack = _props$FeedBackData.ForBidFeedBack;
				var BeFeedIndex = _props$FeedBackData.BeFeedIndex;
				var _props2 = this.props;
				var ItemDataes = _props2.ItemDataes;
				var userInfo = _props2.userInfo;
				var ParentIndex = _props2.ParentIndex;
				var ParentIndexOnDb = _props2.ParentIndexOnDb;

				var pt = (0, _util.formatDate)(publish_time);

				return _react2.default.createElement(
					"section",
					{ className: "feedback__content--main" },
					_react2.default.createElement(
						"figure",
						{ className: "feedback__content--avatar" },
						_react2.default.createElement("img", { src: avatar_url })
					),
					_react2.default.createElement(
						"section",
						{ className: "feedback__wrap--content" },
						_react2.default.createElement(
							"p",
							{ className: "feedback__content--author" },
							_react2.default.createElement(
								"a",
								{ href: "javascript:;" },
								author_name
							),
							_react2.default.createElement(
								"span",
								null,
								" (",
								commentAuthor,
								")"
							)
						),
						ForBidFeedBack ? _react2.default.createElement(
							"p",
							{ className: "sub__feedback" },
							"回复：",
							_react2.default.createElement(
								"span",
								null,
								ItemDataes[ParentIndex].FeedBack[BeFeedIndex].author_name
							)
						) : null,
						_react2.default.createElement(
							"p",
							{ className: "feedback__content--time" },
							"发布于：",
							pt
						),
						_react2.default.createElement(
							"p",
							{ className: "feedback__content--content" },
							publish_content
						),
						_react2.default.createElement(
							"footer",
							{ className: "feedback__content--options" },
							_react2.default.createElement(
								"section",
								{ className: "feedback__content--options__wrap" },
								!ForBidFeedBack && !(author_email === userInfo.userEmail) ? _react2.default.createElement(
									"a",
									{ className: "feedback__content--options__callback",
										href: "javascript:;",
										onClick: this.toggleFeedBackPlaneState
									},
									_react2.default.createElement("i", null),
									_react2.default.createElement(
										"span",
										null,
										"回复"
									)
								) : null,
								userInfo.userEmail === author_email ? _react2.default.createElement(
									"a",
									{ className: "feedback__content--options__del",
										href: "javascript:;",
										onClick: this.DelSelf
									},
									_react2.default.createElement("i", null),
									_react2.default.createElement(
										"span",
										null,
										"删除"
									)
								) : null
							)
						)
					),
					this.state.feedbackBoff ? _react2.default.createElement(
						"section",
						{ className: "feedback__content",
							ref: "feedback-content"
						},
						_react2.default.createElement(_router.CommentFeedback, {
							CommentSubFeedBackTask: true,
							ParentIndexOnDb: ParentIndexOnDb,
							ParentIndex: ParentIndex,
							BeFeedIndex: FeedBackIndex
						})
					) : null
				);
			}
		}]);

		return FeedBackMain;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			ItemDataes: state.CommentReducer.ItemDataes,
			userInfo: state.LoginReducer.userInfo,
			SortState: state.SortReducer.SortState,
			NowPage: state.HandleDataReducer.NowPage
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				DelThunk: _CommentActions.DelThunk,
				AlertPlaneThunk: _AlertPlaneActions.AlertPlaneThunk
			}, dispatch)
		};
	})(FeedBackMain);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FeedBackMain.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _LoginActions = __webpack_require__(208);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginTable = function (_Component) {
		_inherits(LoginTable, _Component);

		function LoginTable(props) {
			_classCallCheck(this, LoginTable);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginTable).call(this, props));

			_this.state = {
				userNameInfo: "",
				userEmailInfo: ""
			};

			_this.nameLegal = false;
			_this.emailLegal = false;
			_this.toggleState = _this.toggleState.bind(_this);
			_this.close = _this.close.bind(_this);
			_this.sP = _this.sP.bind(_this);
			_this.LoginIn = _this.LoginIn.bind(_this);
			_this.fastLogin = _this.fastLogin.bind(_this);
			_this.Validate = _this.Validate.bind(_this);
			return _this;
		}

		_createClass(LoginTable, [{
			key: "changeView",
			value: function changeView(target) {
				var oW = innerWidth,
				    oH = innerHeight;

				target.style.width = oW + "px";
				target.style.height = oH + "px";
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var $self = this,
				    target = $self.refs["login-table-bg"];

				if (target) {
					$self.changeView(target);
				}
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				var $self = this,
				    target = $self.refs["login-table-bg"];

				if (target) {
					$self.changeView(target);
				}
			}
		}, {
			key: "toggleState",
			value: function toggleState(ev) {
				var target = ev.target,
				    index = ~~target.dataset.index,
				    stateBar = this.refs["state-bar"],
				    touristLogin = this.refs["tourist-login"],
				    snsLogin = this.refs["sns-login"];

				if (index) {
					stateBar.classList.add("state__bar--toggle");
					snsLogin.classList.remove("none");
					touristLogin.classList.add("none");
				} else {
					stateBar.classList.remove("state__bar--toggle");
					snsLogin.classList.add("none");
					touristLogin.classList.remove("none");
				}
			}
		}, {
			key: "close",
			value: function close(ev) {
				var _props$actions = this.props.actions;
				var LoginTableStateTask = _props$actions.LoginTableStateTask;
				var ChangeValidateTask = _props$actions.ChangeValidateTask;
				var ChangeValidateInfoTask = _props$actions.ChangeValidateInfoTask;


				LoginTableStateTask();

				this.nameLegal = false;
				this.emailLegal = false;

				this.setState({
					userNameInfo: "",
					userEmailInfo: ""
				});
			}
		}, {
			key: "sP",
			value: function sP(ev) {
				ev.stopPropagation();
			}
		}, {
			key: "LoginIn",
			value: function LoginIn() {
				var Name = this.refs["tourist-login-user-name"].value;
				var Email = this.refs["tourist-login-user-email"].value;
				var actions = this.props.actions;


				if (this.nameLegal && this.emailLegal) {
					actions.LoginInThunk({
						userName: Name,
						userEmail: Email,
						commentAuthor: "游客",
						userAvatar: "/img/default-avatar.png"
					});

					this.close();
				} else {
					return;
				}
			}
		}, {
			key: "Validate",
			value: function Validate(type) {
				var Name = this.refs["tourist-login-user-name"];
				var Email = this.refs["tourist-login-user-email"];

				var actions = this.props.actions;

				var _state = this.state;
				var userNameInfo = _state.userNameInfo;
				var userEmailInfo = _state.userEmailInfo;


				var rule = {
					"username": {
						regexp: /^\w{4,12}$/,
						mes: {
							tooLong: "昵称长度为 4到12位",
							illegalChar: "只能由下划线数字和字母组成"
						}
					},

					"email": {
						regexp: /^\w+@\w+\.\w{2,4}$/,
						mes: {
							illegalChar: "非法的邮箱地址"
						}
					}
				};

				switch (type) {
					case "name":
						if (rule.username.regexp.test(Name.value)) {
							this.nameLegal = true;

							this.setState({
								userNameInfo: ""
							});
						} else {
							this.nameLegal = false;

							if (Name.value.length < 4 || Name.value.length > 12) {
								this.setState({
									userNameInfo: rule.username.mes.tooLong
								});
							} else {
								this.setState({
									userNameInfo: rule.username.mes.illegalChar
								});
							}
						}
						break;

					case "email":
						if (rule.email.regexp.test(Email.value)) {
							this.emailLegal = true;

							this.setState({
								userEmailInfo: ""
							});
						} else {
							this.emailLegal = false;

							this.setState({
								userEmailInfo: rule.email.mes.illegalChar
							});
						}
						break;
				}
			}
		}, {
			key: "fastLogin",
			value: function fastLogin(ev, type) {
				if (ev.keyCode === 13) {
					this.Validate(type);
					this.LoginIn();
				}
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var _props = this.props;
				var loginTableState = _props.loginTableState;
				var actions = _props.actions;


				if (!loginTableState) {
					return _react2.default.createElement(
						"section",
						{ ref: "login-table-bg",
							className: "login__table__bg",
							onClick: this.close
						},
						_react2.default.createElement(
							"section",
							{ className: "login__table",
								onClick: this.sP
							},
							_react2.default.createElement(
								"section",
								{ className: "login__table__wrap" },
								_react2.default.createElement(
									"header",
									{ className: "login__table__header" },
									_react2.default.createElement(
										"button",
										{ "data-index": "0",
											onClick: this.toggleState,
											ref: "btn1"
										},
										"游客登录"
									),
									_react2.default.createElement(
										"button",
										{ "data-index": "1",
											onClick: this.toggleState,
											ref: "btn2"
										},
										"sns登录"
									),
									_react2.default.createElement("div", { ref: "state-bar", className: "state__bar" })
								),
								_react2.default.createElement(
									"section",
									{ className: "login__table__forms" },
									_react2.default.createElement(
										"form",
										{ className: "tourist__login", ref: "tourist-login" },
										_react2.default.createElement(
											"div",
											{ className: "input__wrap" },
											_react2.default.createElement(
												"p",
												null,
												"昵称:"
											),
											_react2.default.createElement("input", { type: "text",
												className: "tourist__login--user-name",
												onKeyDown: function onKeyDown(ev) {
													_this2.fastLogin.call(_this2, ev, "name");
												},
												onBlur: this.Validate.bind(this, "name"),
												ref: "tourist-login-user-name"
											}),
											_react2.default.createElement(
												"label",
												null,
												this.state.userNameInfo
											)
										),
										_react2.default.createElement(
											"div",
											{ className: "input__wrap" },
											_react2.default.createElement(
												"p",
												null,
												"邮箱："
											),
											_react2.default.createElement("input", { type: "text",
												className: "tourist__login--email",
												onKeyDown: function onKeyDown(ev) {
													_this2.fastLogin.call(_this2, ev, "email");
												},
												onBlur: this.Validate.bind(this, "email"),
												ref: "tourist-login-user-email"
											}),
											_react2.default.createElement(
												"label",
												null,
												this.state.userEmailInfo
											)
										),
										_react2.default.createElement("input", { type: "button",
											className: "tourist__login--submit",
											value: "登录",
											onClick: this.LoginIn
										})
									),
									_react2.default.createElement(
										"form",
										{ className: "sns__login none", action: "", ref: "sns-login" },
										_react2.default.createElement("div", null),
										_react2.default.createElement("div", null),
										_react2.default.createElement("div", null),
										_react2.default.createElement("div", null),
										_react2.default.createElement("div", null),
										_react2.default.createElement("div", null)
									)
								)
							)
						)
					);
				} else {
					return null;
				}
			}
		}]);

		return LoginTable;
	}(_react.Component);

	LoginTable.defaultProps = {};

	exports.default = (0, _reactRedux.connect)(function (state) {
		return {
			loginTableState: state.LoginReducer.loginTableState
		};
	}, function (dispatch) {
		return {
			actions: (0, _redux.bindActionCreators)({
				LoginTableStateTask: _LoginActions.LoginTableStateTask,
				LoginInThunk: _LoginActions.LoginInThunk
			}, dispatch)
		};
	})(LoginTable);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LoginTable.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\GitHub\\program\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(173);

	var _redux = __webpack_require__(180);

	var _AlertPlaneActions = __webpack_require__(215);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AlertPlane = function (_Component) {
	    _inherits(AlertPlane, _Component);

	    function AlertPlane(props) {
	        _classCallCheck(this, AlertPlane);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AlertPlane).call(this, props));

	        _this.sure = _this.sure.bind(_this);
	        _this.cancel = _this.cancel.bind(_this);
	        return _this;
	    }

	    _createClass(AlertPlane, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var $self = this,
	                target = $self.refs["alert-wrap-bg"];

	            if (target) {
	                $self.changeView(target);
	            }
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            var $self = this,
	                target = $self.refs["alert-wrap-bg"];

	            if (target) {
	                $self.changeView(target);
	            }
	        }
	    }, {
	        key: "changeView",
	        value: function changeView(target) {
	            var oW = innerWidth,
	                oH = innerHeight;

	            target.style.width = oW + "px";
	            target.style.height = oH + "px";
	        }
	    }, {
	        key: "sure",
	        value: function sure() {
	            this.props.actions.TorFTask(1);
	        }
	    }, {
	        key: "cancel",
	        value: function cancel() {
	            this.props.actions.TorFTask(0);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var AlertPlaneState = this.props.AlertPlaneState;


	            return AlertPlaneState ? _react2.default.createElement(
	                "section",
	                {
	                    className: "alert__wrap",
	                    ref: "alert-wrap-bg"
	                },
	                _react2.default.createElement(
	                    "div",
	                    {
	                        className: "alert__plane"
	                    },
	                    _react2.default.createElement("header", null),
	                    _react2.default.createElement(
	                        "p",
	                        { className: "alert__plane--question" },
	                        this.props.AlertPlanePrompt
	                    ),
	                    _react2.default.createElement(
	                        "footer",
	                        null,
	                        _react2.default.createElement(
	                            "label",
	                            null,
	                            _react2.default.createElement("i", { className: "alert__plane--btn_sure" }),
	                            _react2.default.createElement(
	                                "button",
	                                {
	                                    onClick: this.sure
	                                },
	                                "确定"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "label",
	                            null,
	                            _react2.default.createElement("i", { className: "alert__plane--btn_cancel" }),
	                            _react2.default.createElement(
	                                "button",
	                                {
	                                    onClick: this.cancel
	                                },
	                                "取消"
	                            )
	                        )
	                    )
	                )
	            ) : null;
	        }
	    }]);

	    return AlertPlane;
	}(_react.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        AlertPlaneState: state.AlertPlaneReducer.AlertPlaneState,
	        AlertPlanePrompt: state.AlertPlaneReducer.AlertPlanePrompt
	    };
	}, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            AlertPlaneTask: _AlertPlaneActions.AlertPlaneTask,
	            TorFTask: _AlertPlaneActions.TorFTask
	        }, dispatch)
	    };
	})(AlertPlane);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\GitHub\\program\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AlertPlane.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(232);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(234)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(233)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\n* {\n  box-sizing: border-box;\n  font-family: arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  outline: none;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n}\na {\n  -webkit-transition: 5s;\n  transition: 5s;\n  text-decoration: none;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nh1,\nh2,\nh3 {\n  margin-bottom: 1em;\n}\np {\n  margin: 0;\n}\ninput[type=\"submit\"],\nbutton {\n  display: inline-block;\n  border-radius: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\nfigure {\n  margin: 0;\n}\ni {\n  display: inline-block;\n}\n.none {\n  display: none !important;\n}\n.b-c {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n}\n.hidden {\n  height: 0 !important;\n}\n@-webkit-keyframes swing {\n  20%,\n  40%,\n  60%,\n  80%,\n  100% {\n    -webkit-transform-origin: topcenter;\n            transform-origin: topcenter;\n  }\n  20% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes swing {\n  20%,\n  40%,\n  60%,\n  80%,\n  100% {\n    -webkit-transform-origin: topcenter;\n            transform-origin: topcenter;\n  }\n  20% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n.comment__feedback__wrap {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  overflow: hidden;\n  background: #fbfbfb;\n  width: 100%;\n  margin-top: 20px;\n}\n.comment__feedback__box {\n  position: relative;\n  width: 100%;\n}\n.comment__feedback {\n  padding: 10px;\n  border-top: 1px solid #272636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n}\n.comment__feedback h3 {\n  font: 200 24px/1 arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.login-infos {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  font-size: 16px;\n  padding-bottom: 10px;\n}\n.login-infos a {\n  color: #1C86D1;\n}\n.login-infos .init_prompt {\n  color: rgba(0, 0, 0, 0.5);\n}\n.login-out__btn {\n  border-radius: 5px;\n  float: right;\n  width: 70px;\n  height: 25px;\n  padding: 5px;\n  background: #C81623;\n  color: #fff;\n}\n.login-in__btn {\n  border-radius: 5px;\n  float: right;\n  width: 70px;\n  height: 25px;\n  padding: 5px;\n  background: #1C86D1;\n  color: #fff;\n}\n.comment__feedback--section {\n  width: calc(100% - 74px);\n}\n.comment__feedback--edit {\n  border-radius: 5px;\n  width: 100%;\n  min-height: 30px;\n  padding: 5px;\n  border: 1px solid #272636;\n  font: 200 14px/1.4 arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  white-space: pre-wrap;\n  -moz-tab-size: 2;\n    -o-tab-size: 2;\n       tab-size: 2;\n}\n.comment__feedback--btns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n  margin-top: 10px;\n}\n.comment__feedback--btns button {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-radius: 5px;\n  line-height: 30px;\n  width: 70px;\n  height: 30px;\n}\n.feedback--btns__reset {\n  color: #C81623;\n  border: 1px solid #C81623;\n}\n.feedback--btns__reset:hover {\n  background: #C81623;\n  color: #fff;\n}\n.feedback--btns__comment {\n  margin-left: 10px;\n  color: #272636;\n  border: 1px solid #1C86D1;\n}\n.feedback--btns__comment:hover {\n  background: #1C86D1;\n  color: #fff;\n}\n.comment__feedback__mask {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 606px;\n  height: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: default;\n  background: rgba(0, 0, 0, 0.01);\n}\n.comment__feedback__mask p {\n  color: rgba(0, 0, 0, 0.3);\n}\n.comment__feedback__mask--title {\n  font: 100 60px/60px \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.comment__feedback__mask--pinyin {\n  margin-top: 15px;\n  font: 100 20px/20px arial;\n}\n.clearfix::after {\n  content: \".\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n  clear: both;\n}\n.demo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 900px;\n  margin: 50px auto 50px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 100px;\n}\n.comment__wrap {\n  width: 100%;\n}\n.comment__header {\n  border-radius: 5px;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  background: #1C86D1;\n  color: #fff;\n  padding: 5px 8px;\n  font: 200 16px/16px arial, \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.comment__header::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 41px;\n  bottom: -20px;\n  height: 0px;\n  border: 10px solid transparent;\n  border-top: 10px solid #1C86D1;\n}\n.comment__header .comment__header__span {\n  width: 150px;\n  height: 16px;\n  margin-left: 10px;\n}\n.comment__header .comment__header__btns {\n  width: 80px;\n  height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.comment__header .comment__header__btns button {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  color: #fff;\n  font-size: 14px;\n}\n.comment__header .comment__header__btns button:hover {\n  color: #d32;\n}\n.comment__footer {\n  border-radius: 5px;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.6);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 70px;\n  background: #1C86D1;\n}\n.comment__footer::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -20px;\n  left: 41px;\n  height: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #1C86D1;\n}\n.comment__pagination {\n  border-radius: 5px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 35px;\n}\n.comment__pagination li {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  width: 40px;\n  height: 100%;\n  color: #fff;\n  text-align: center;\n  cursor: pointer;\n}\n.comment__pagination li:hover {\n  color: #1C86D1;\n  background: #fff;\n}\n.comment__pagination li div {\n  padding: 10px 0;\n  height: 100%;\n  line-height: 15px;\n}\n.comment__pagination li > div.active {\n  color: #1C86D1;\n  background: #fff;\n  border-left: none !important;\n}\n.comment__pagination li:not(:nth-of-type(1)) div {\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n}\n.comment__list {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  margin: 0 0 0 50px;\n  border-left: 2px solid #1C86D1;\n}\n.no__comment__item {\n  padding: 20px;\n  text-align: center;\n}\n.no__comment__item p {\n  border-radius: 5px;\n  height: 70px;\n  font-size: 24px;\n  line-height: 70px;\n  color: rgba(0, 0, 0, 0.6);\n  border: 1px solid #272636;\n}\n.comment__item {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: relative;\n  padding: 20px;\n}\n.comment__item::after {\n  border-radius: 50%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: absolute;\n  left: -8px;\n  top: 40px;\n  content: \"\";\n  display: block;\n  background: #1C86D1;\n  width: 10px;\n  height: 10px;\n  border: 2px solid #fff;\n}\n.comment__item:hover::after {\n  background: #51CA65;\n}\n.comment__item:hover .comment__content {\n  -webkit-transform: translateX(15px);\n          transform: translateX(15px);\n}\n.comment__content {\n  border-radius: 5px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  padding: 10px;\n}\n.comment__author--avatar {\n  border-radius: 5px;\n  width: 62px;\n  height: 62px;\n  margin-right: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n}\n.comment__author--avatar > img:hover,\n.comment__author--avatar:hover {\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-transform-origin: topcenter;\n          transform-origin: topcenter;\n  -webkit-animation: swing 0.7s;\n          animation: swing 0.7s;\n}\n.comment__content--main {\n  width: calc(100% - 74px);\n}\n.comment__content--author {\n  font-size: 18px;\n}\n.comment__content--author a {\n  color: #1C86D1;\n}\n.comment__content--time {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ddd;\n  cursor: default;\n}\n.comment__content--time:hover {\n  color: #1C86D1;\n}\n.comment__content--content {\n  font-size: 12px;\n  line-height: 1.4;\n  padding: 24px 0 0 0px;\n}\n.comment__content--options {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.comment__content--options__wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 8;\n      -ms-flex-positive: 8;\n          flex-grow: 8;\n}\n.comment__content--options__wrap a {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.comment__content--options__wrap a i {\n  width: 16px;\n  height: 16px;\n  background-image: url(\"/img/icon.png\");\n}\n.comment__content--options__wrap a span {\n  font-size: 12px;\n  margin-left: 3px;\n  color: #272636;\n}\n.comment__content--options__wrap a:hover span {\n  color: #1C86D1;\n}\n.comment__content--options__wrap a:hover i {\n  background-image: url(\"/img/icon-hover.png\");\n}\n.comment__content--options__callback i {\n  background-position: -5px 0px;\n}\n.comment__content--options__del {\n  margin-left: 8px;\n}\n.comment__content--options__del i {\n  background-position: -5px -16px;\n}\n.comment__options__vote-up {\n  text-align: right;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.comment__options__vote-up button {\n  font-size: 18px;\n}\n.comment__options__vote-up button:hover {\n  color: #1C86D1;\n}\n.comment__options__has-voted-up {\n  text-align: right;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.comment__options__has-voted-up button {\n  font-size: 18px;\n  color: #C91523;\n  cursor: default;\n}\n.feedback__content {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  overflow: hidden;\n  width: 100%;\n  margin: 20px 10px 10px 5px;\n  padding: 0 0 0 74px;\n}\n.feedback__content--main {\n  border-radius: 5px;\n  position: relative;\n  border: 1px solid #272636;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  padding: 5px;\n  margin: 20px 0 0;\n}\n.feedback__content--main::after,\n.feedback__content--main::before {\n  content: \"\";\n  height: 0;\n  position: absolute;\n  left: 30px;\n}\n.feedback__content--main::after {\n  top: -20px;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #272636;\n}\n.feedback__content--main::before {\n  z-index: 2;\n  top: -19px;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #fff;\n}\n.sub__feedback {\n  margin: 5px 0;\n}\n.sub__feedback span {\n  font-size: 18px;\n  color: #1C86D1;\n}\n.feedback__wrap--content {\n  width: calc(100% - 74px);\n}\n.feedback__content--avatar {\n  border-radius: 5px;\n  width: 62px;\n  height: 62px;\n  margin-right: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n}\n.feedback__content--avatar > img:hover,\n.feedback__content--avatar:hover {\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-transform-origin: topcenter;\n          transform-origin: topcenter;\n  -webkit-animation: swing 0.7s;\n          animation: swing 0.7s;\n}\n.feedback__wrap--content {\n  width: calc(100% - 74px);\n}\n.feedback__content--author {\n  font-size: 18px;\n}\n.feedback__content--author a {\n  color: #1C86D1;\n}\n.feedback__content--time {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-size: 12px;\n  margin-top: 2px;\n  color: #ddd;\n  cursor: default;\n}\n.feedback__content--time:hover {\n  color: #1C86D1;\n}\n.feedback__content--content {\n  font-size: 12px;\n  line-height: 1.4;\n  padding: 24px 0 0 0px;\n}\n.feedback__content--options {\n  padding-top: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.feedback__content--options__wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 8;\n      -ms-flex-positive: 8;\n          flex-grow: 8;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.feedback__content--options__wrap a {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.feedback__content--options__wrap a i {\n  width: 16px;\n  height: 16px;\n  background-image: url(\"/img/icon.png\");\n}\n.feedback__content--options__wrap a span {\n  font-size: 12px;\n  margin-left: 3px;\n  color: #272636;\n}\n.feedback__content--options__wrap a:hover span {\n  color: #1C86D1;\n}\n.feedback__content--options__wrap a:hover i {\n  background-image: url(\"/img/icon-hover.png\");\n}\n.feedback__content--options__callback i {\n  background-position: -5px 0px;\n}\n.feedback__content--options__del {\n  margin-left: 8px;\n}\n.feedback__content--options__del i {\n  background-position: -5px -16px;\n}\n.feedback__options__vote-up {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: right;\n}\n.feedback__options__vote-up button {\n  font-size: 18px;\n}\n.feedback__options__vote-up button:hover {\n  color: #1C86D1;\n}\n.editer-wrap {\n  margin-top: 20px;\n}\n.editer-wrap .comment__feedback {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  width: 100%;\n  border-top: none;\n}\n.editer-wrap .sns__login {\n  padding: 0 10px;\n}\n.editer-wrap .editer-wrap__avatar {\n  border-radius: 5px;\n  width: 62px;\n  height: 62px;\n  margin-right: 12px;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n}\n.editer-wrap .editer-wrap__avatar > img:hover,\n.editer-wrap .editer-wrap__avatar:hover {\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-transform-origin: topcenter;\n          transform-origin: topcenter;\n  -webkit-animation: swing 0.7s;\n          animation: swing 0.7s;\n}\n.editer-wrap .editer-wrap__avatar img {\n  height: 100%;\n}\n.editer-wrap .comment__feedback--edit {\n  min-height: 150px;\n}\n.editer-wrap .comment__feddback--btns {\n  width: 100%;\n}\n.login__table__bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999998;\n  background: rgba(0, 0, 0, 0.4);\n}\n.login__table {\n  border-radius: 5px;\n  box-shadow: 0 0 10px #000000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 320px;\n  height: 340px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  background: #fff;\n  z-index: 999999;\n}\n.login__table__wrap {\n  overflow: hidden;\n  padding: 0 10px;\n}\n.login__table__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n}\n.login__table__header button {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  line-height: 50px;\n}\n.state__bar {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  position: absolute;\n  bottom: 0;\n  left: 32px;\n  width: 80px;\n  height: 2px;\n  background: #1C86D1;\n}\n.state__bar:hover {\n  color: #1C86D1;\n}\n.state__bar--toggle {\n  left: 186px;\n}\n.login__table__forms {\n  position: relative;\n  height: 300px;\n}\n.login__table__forms form {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  left: 0;\n}\n.tourist__login {\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  padding-top: 50px;\n}\n.input__wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 5px 0;\n  line-height: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 15px;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n}\n.input__wrap p {\n  width: 60px;\n}\n.input__wrap input[type=\"text\"] {\n  border-radius: 5px;\n  border: 1px solid #272636;\n  padding: 5px;\n  width: 180px;\n  height: 27px;\n}\n.input__wrap label {\n  display: inline-block;\n  width: 100%;\n  height: 20px;\n  font-size: 12px;\n  color: #B61D1D;\n  padding: 5px 30px 0 0;\n  text-align: right;\n}\ninput[type=\"button\"].tourist__login--submit {\n  border-radius: 5px;\n  width: 180px;\n  height: 35px;\n  color: #fff;\n  background: #1C86D1;\n  margin: 30px auto 0;\n  cursor: pointer;\n}\n.sns__login {\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n              -ms-grid-row-align: center;\n          align-items: center;\n  padding: 20px;\n}\n.sns__login div {\n  width: 70px;\n  height: 70px;\n  background: red;\n}\n.alert__wrap {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999999;\n  background: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n.alert__plane {\n  width: 100%;\n  height: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column wrap;\n      flex-flow: column wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: rgba(255, 255, 255, 0.65);\n  -webkit-animation: alert_plane_animate .8s;\n          animation: alert_plane_animate .8s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.alert__plane header {\n  width: 100%;\n  height: 8px;\n  background: -webkit-linear-gradient(left, #F00001 12.5%, transparent 0px), -webkit-linear-gradient(left, #FF7F00 25%, transparent 0px), -webkit-linear-gradient(left, #E1E23B 37.5%, transparent 0px), -webkit-linear-gradient(left, #007940 50%, transparent 0px), -webkit-linear-gradient(left, #4041FE 62.5%, transparent 0px), -webkit-linear-gradient(left, #A001C0 75%, transparent 0px), -webkit-linear-gradient(left, #F7941E 87.5%, transparent 0px), -webkit-linear-gradient(left, #9AC147 100%, transparent 0px);\n  background: linear-gradient(to right, #F00001 12.5%, transparent 0px), linear-gradient(to right, #FF7F00 25%, transparent 0px), linear-gradient(to right, #E1E23B 37.5%, transparent 0px), linear-gradient(to right, #007940 50%, transparent 0px), linear-gradient(to right, #4041FE 62.5%, transparent 0px), linear-gradient(to right, #A001C0 75%, transparent 0px), linear-gradient(to right, #F7941E 87.5%, transparent 0px), linear-gradient(to right, #9AC147 100%, transparent 0px);\n  background-repeat: no-repeat;\n}\n.alert__plane footer {\n  width: 100%;\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.alert__plane footer label {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  height: 100%;\n  cursor: pointer;\n  line-height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.alert__plane footer label:hover button {\n  color: #1C86D1;\n}\n.alert__plane footer label:hover i {\n  background-image: url(\"/img/icon-hover.png\");\n}\n.alert__plane footer label:hover i::before {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.alert__plane footer i {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"/img/icon.png\");\n}\n.alert__plane footer i::before {\n  border-radius: 50%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  content: \"\";\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background: #1C86D1;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.alert__plane footer .alert__plane--btn_sure {\n  background-position: -4px -59px;\n}\n.alert__plane footer .alert__plane--btn_cancel {\n  background-position: -4px -36px;\n}\n.alert__plane footer button {\n  font-size: 18px;\n}\n@-webkit-keyframes alert_plane_animate {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 280px;\n  }\n}\n@keyframes alert_plane_animate {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 280px;\n  }\n}\n.alert__plane--question {\n  width: 100%;\n  height: 230px;\n  padding-top: 50px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 100;\n  line-height: 1.2;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.7);\n}\n", ""]);

	// exports


/***/ },
/* 233 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);