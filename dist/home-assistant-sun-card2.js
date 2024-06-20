function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _decorate(e, r, t, i) {
  var o = _getDecoratorsApi();
  var s = r(function (e) {
      o.initializeInstanceElements(e, a.elements);
    }, t),
    a = o.decorateClass(_coalesceClassElements(s.d.map(_createElementDescriptor)), e);
  return o.initializeClassElements(s.F, a.elements), o.runClassFinishers(s.F, a.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return e;
  };
  var e = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (e, r) {
      ["method", "field"].forEach(function (t) {
        r.forEach(function (r) {
          r.kind === t && "own" === r.placement && this.defineClassElement(e, r);
        }, this);
      }, this);
    },
    initializeClassElements: function (e, r) {
      var t = e.prototype;
      ["method", "field"].forEach(function (i) {
        r.forEach(function (r) {
          var o = r.placement;
          if (r.kind === i && ("static" === o || "prototype" === o)) {
            var n = "static" === o ? e : t;
            this.defineClassElement(n, r);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (e, r) {
      var t = r.descriptor;
      if ("field" === r.kind) {
        var i = r.initializer;
        t = {
          enumerable: t.enumerable,
          writable: t.writable,
          configurable: t.configurable,
          value: void 0 === i ? void 0 : i.call(e)
        };
      }
      Object.defineProperty(e, r.key, t);
    },
    decorateClass: function (e, r) {
      var t = [],
        i = [],
        o = {
          static: [],
          prototype: [],
          own: []
        };
      if (e.forEach(function (e) {
        this.addElementPlacement(e, o);
      }, this), e.forEach(function (e) {
        if (!_hasDecorators(e)) return t.push(e);
        var r = this.decorateElement(e, o);
        t.push(r.element), t.push.apply(t, r.extras), i.push.apply(i, r.finishers);
      }, this), !r) return {
        elements: t,
        finishers: i
      };
      var n = this.decorateConstructor(t, r);
      return i.push.apply(i, n.finishers), n.finishers = i, n;
    },
    addElementPlacement: function (e, r, t) {
      var i = r[e.placement];
      if (!t && -1 !== i.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
      i.push(e.key);
    },
    decorateElement: function (e, r) {
      for (var t = [], i = [], o = e.decorators, n = o.length - 1; n >= 0; n--) {
        var s = r[e.placement];
        s.splice(s.indexOf(e.key), 1);
        var a = this.fromElementDescriptor(e),
          l = this.toElementFinisherExtras((0, o[n])(a) || a);
        e = l.element, this.addElementPlacement(e, r), l.finisher && i.push(l.finisher);
        var c = l.extras;
        if (c) {
          for (var p = 0; p < c.length; p++) this.addElementPlacement(c[p], r);
          t.push.apply(t, c);
        }
      }
      return {
        element: e,
        finishers: i,
        extras: t
      };
    },
    decorateConstructor: function (e, r) {
      for (var t = [], i = r.length - 1; i >= 0; i--) {
        var o = this.fromClassDescriptor(e),
          n = this.toClassDescriptor((0, r[i])(o) || o);
        if (void 0 !== n.finisher && t.push(n.finisher), void 0 !== n.elements) {
          e = n.elements;
          for (var s = 0; s < e.length - 1; s++) for (var a = s + 1; a < e.length; a++) if (e[s].key === e[a].key && e[s].placement === e[a].placement) throw new TypeError("Duplicated element (" + e[s].key + ")");
        }
      }
      return {
        elements: e,
        finishers: t
      };
    },
    fromElementDescriptor: function (e) {
      var r = {
        kind: e.kind,
        key: e.key,
        placement: e.placement,
        descriptor: e.descriptor
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), "field" === e.kind && (r.initializer = e.initializer), r;
    },
    toElementDescriptors: function (e) {
      if (void 0 !== e) return _toArray(e).map(function (e) {
        var r = this.toElementDescriptor(e);
        return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), r;
      }, this);
    },
    toElementDescriptor: function (e) {
      var r = e.kind + "";
      if ("method" !== r && "field" !== r) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + r + '"');
      var t = _toPropertyKey(e.key),
        i = e.placement + "";
      if ("static" !== i && "prototype" !== i && "own" !== i) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + i + '"');
      var o = e.descriptor;
      this.disallowProperty(e, "elements", "An element descriptor");
      var n = {
        kind: r,
        key: t,
        placement: i,
        descriptor: Object.assign({}, o)
      };
      return "field" !== r ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(o, "get", "The property descriptor of a field descriptor"), this.disallowProperty(o, "set", "The property descriptor of a field descriptor"), this.disallowProperty(o, "value", "The property descriptor of a field descriptor"), n.initializer = e.initializer), n;
    },
    toElementFinisherExtras: function (e) {
      return {
        element: this.toElementDescriptor(e),
        finisher: _optionalCallableProperty(e, "finisher"),
        extras: this.toElementDescriptors(e.extras)
      };
    },
    fromClassDescriptor: function (e) {
      var r = {
        kind: "class",
        elements: e.map(this.fromElementDescriptor, this)
      };
      return Object.defineProperty(r, Symbol.toStringTag, {
        value: "Descriptor",
        configurable: !0
      }), r;
    },
    toClassDescriptor: function (e) {
      var r = e.kind + "";
      if ("class" !== r) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + r + '"');
      this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
      var t = _optionalCallableProperty(e, "finisher");
      return {
        elements: this.toElementDescriptors(e.elements),
        finisher: t
      };
    },
    runClassFinishers: function (e, r) {
      for (var t = 0; t < r.length; t++) {
        var i = (0, r[t])(e);
        if (void 0 !== i) {
          if ("function" != typeof i) throw new TypeError("Finishers must return a constructor.");
          e = i;
        }
      }
      return e;
    },
    disallowProperty: function (e, r, t) {
      if (void 0 !== e[r]) throw new TypeError(t + " can't have a ." + r + " property.");
    }
  };
  return e;
}
function _createElementDescriptor(e) {
  var r,
    t = _toPropertyKey(e.key);
  "method" === e.kind ? r = {
    value: e.value,
    writable: !0,
    configurable: !0,
    enumerable: !1
  } : "get" === e.kind ? r = {
    get: e.value,
    configurable: !0,
    enumerable: !1
  } : "set" === e.kind ? r = {
    set: e.value,
    configurable: !0,
    enumerable: !1
  } : "field" === e.kind && (r = {
    configurable: !0,
    writable: !0,
    enumerable: !0
  });
  var i = {
    kind: "field" === e.kind ? "field" : "method",
    key: t,
    placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
    descriptor: r
  };
  return e.decorators && (i.decorators = e.decorators), "field" === e.kind && (i.initializer = e.value), i;
}
function _coalesceGetterSetter(e, r) {
  void 0 !== e.descriptor.get ? r.descriptor.get = e.descriptor.get : r.descriptor.set = e.descriptor.set;
}
function _coalesceClassElements(e) {
  for (var r = [], isSameElement = function (e) {
      return "method" === e.kind && e.key === o.key && e.placement === o.placement;
    }, t = 0; t < e.length; t++) {
    var i,
      o = e[t];
    if ("method" === o.kind && (i = r.find(isSameElement))) {
      if (_isDataDescriptor(o.descriptor) || _isDataDescriptor(i.descriptor)) {
        if (_hasDecorators(o) || _hasDecorators(i)) throw new ReferenceError("Duplicated methods (" + o.key + ") can't be decorated.");
        i.descriptor = o.descriptor;
      } else {
        if (_hasDecorators(o)) {
          if (_hasDecorators(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + o.key + ").");
          i.decorators = o.decorators;
        }
        _coalesceGetterSetter(o, i);
      }
    } else r.push(o);
  }
  return r;
}
function _hasDecorators(e) {
  return e.decorators && e.decorators.length;
}
function _isDataDescriptor(e) {
  return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
}
function _optionalCallableProperty(e, r) {
  var t = e[r];
  if (void 0 !== t && "function" != typeof t) throw new TypeError("Expected '" + r + "' to be a function");
  return t;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
var SunCardContent = /*#__PURE__*/function () {
  function SunCardContent() {
    _classCallCheck(this, SunCardContent);
  }
  return _createClass(SunCardContent, null, [{
    key: "generate",
    value: function generate(data, localization, config) {
      if (data !== null && data !== void 0 && data.error) {
        return x(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n        <ha-card>\n          ", "\n        </ha-card>\n      "])), this.generateError());
      }
      return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <ha-card>\n        <div class=\"sun-card ", "\">\n          ", "\n          ", "\n          ", "\n        </div>\n      </ha-card>\n    "])), config.darkMode ? '' : 'sun-card-light', this.generateHeader(data, localization, config), this.generateBody(data, config), this.generateFooter(data, localization, config));
    }
  }, {
    key: "generateHeader",
    value: function generateHeader(data, localization, config) {
      var title = config.title !== undefined ? x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <h1 class=\"sun-card-title\">", "</h1>\n    "])), config.title) : x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
      return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"sun-card-header\">\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n\n        </div>\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n      </div>\n    "])), title, localization.Sunrise, data !== null && data !== void 0 && data.times.sunrise ? this.generateTime(data.times.sunrise) : '', localization.Sunset, data !== null && data !== void 0 && data.times.sunset ? this.generateTime(data.times.sunset) : '');
    }

    // Tix
  }, {
    key: "lightenColor",
    value: function lightenColor(color, amount) {
      var r = parseInt(color.substring(1, 3), 16);
      var g = parseInt(color.substring(3, 5), 16);
      var b = parseInt(color.substring(5, 7), 16);
      r = Math.min(r + amount, 255);
      g = Math.min(g + amount, 255);
      b = Math.min(b + amount, 255);
      var rr = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
      var gg = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
      var bb = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);
      return '#' + rr + gg + bb;
    }
  }, {
    key: "generateBody",
    value: function generateBody(data, config) {
      var _data$sunPercentOverH, _data$sunPercentOverH2, _data$dawnProgressPer, _data$dawnProgressPer2, _data$dayProgressPerc, _data$dayProgressPerc2, _data$duskProgressPer, _data$duskProgressPer2, _data$sunPosition$x, _data$sunPosition$y, _data$sunPosition$x2, _data$sunPosition$y2;
      var sunID = Math.random().toString(36).replace('0.', '');
      var dawnID = Math.random().toString(36).replace('0.', '');
      var dayID = Math.random().toString(36).replace('0.', '');
      var duskID = Math.random().toString(36).replace('0.', '');
      var suncolor = config.sunColor !== undefined ? config.sunColor : '#ffffff';
      var lightenedColor = this.lightenColor(suncolor, 50); // éclaircir la couleur de 50 points

      //console.log(lightenedColor) // affiche '#ffe94a'

      /*
      return html`
        <div class="sun-card-body">
          <svg viewBox="0 0 550 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                .p1j-1{fill:#eeeb61;opacity:0.51;isolation:isolate;}
                .p1j-2{fill:#f5b21a;stroke:#fde901;stroke-miterlimit:10;}
              </style>
              <linearGradient id="${sunID}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:${config.sunColor};stop-opacity:1" />
                <stop offset="${data?.sunPercentOverHorizon ?? 0}%" style="stop-color:${config.sunColor};stop-opacity:1" />
                <stop offset="${data?.sunPercentOverHorizon ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
              </linearGradient>
              
              <linearGradient id="${dawnID}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#393b78;stop-opacity:1" />
                <stop offset="${data?.dawnProgressPercent ?? 0}%" style="stop-color:#393b78;stop-opacity:1" />
                <stop offset="${data?.dawnProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
              </linearGradient>
              
              <linearGradient id="${dayID}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#8ebeeb;stop-opacity:1" />
                <stop offset="${data?.dayProgressPercent ?? 0}%" style="stop-color:#8ebeeb;stop-opacity:1" />
                <stop offset="${data?.dayProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
              </linearGradient>
              
              <linearGradient id="${duskID}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#393b78;stop-opacity:1" />
                <stop offset="${data?.duskProgressPercent ?? 0}%" style="stop-color:#393b78;stop-opacity:1" />
                <stop offset="${data?.duskProgressPercent ?? 0}%" style="stop-color:rgb(0,0,0,0);stop-opacity:1" />
              </linearGradient>
            </defs>
            <path class="sun-card-sun-line" d="M5,146 C29,153 73,128 101,108 C276,-29 342,23 449,108 C473,123 509,150 545,146" fill="none" stroke="var(--sun-card-lines)" shape-rendering="geometricPrecision" />
            <path d="M5,146 C29,153 73,128 101,108 L 5 108" fill="url(#${dawnID})" opacity="${data?.dawnProgressPercent ? 1 : 0}" stroke="url(#${dawnID})" shape-rendering="geometricPrecision" />
            <path d="M101,108 C276,-29 342,23 449,108 L 104,108" fill="url(#${dayID})" opacity="${data?.dayProgressPercent ? 1 : 0}" stroke="url(#${dayID})" shape-rendering="geometricPrecision" />
            <path d="M449,108 C473,123 509,150 545,146 L 545 108" fill="url(#${duskID})" opacity="${data?.duskProgressPercent ? 1 : 0}" stroke="url(#${duskID})" shape-rendering="geometricPrecision" />
            <line x1="5" y1="108" x2="545" y2="108" stroke="var(--sun-card-lines)" />
            <line x1="101" y1="25" x2="101" y2="100" stroke="var(--sun-card-lines)" />
            <line x1="449" y1="25" x2="449" y2="100" stroke="var(--sun-card-lines)" />
            <circle cx="${data?.sunPosition.x ?? 0}" cy="${data?.sunPosition.y ?? 0}" r="17" opacity="${data?.sunPercentOverHorizon ? 1 : 0}" stroke="none" fill="url(#${sunID})" shape-rendering="geometricPrecision" />
          </svg>
        </div>
      `
      */

      return x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-body\">\n        <svg viewBox=\"0 0 550 150\" xmlns=\"http://www.w3.org/2000/svg\">\n          <defs>\n          <style>\n            .sun-ext{fill:", ";opacity:0.51;isolation:isolate;}\n            .sun-int{fill:", ";stroke:", ";stroke-miterlimit:10;stroke-width:3px;stroke-opacity:0.51}\n            .line-main{stroke:var(--sun-card-lines)}\n            .ombre { filter: drop-shadow(-2px 2px 4px rgba(0, 0, 0, 0.2)); }\n            .ombre2 { filter: drop-shadow(-4px -1px 2px rgba(0, 0, 0, 0.4)); }\n          </style>\n          <!--\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"20%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n          -->\n            // aube - dawn\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n            \n            // jour - day\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\"  />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n            \n            // cr\xE9puscule - dusk\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n          </defs>\n          <path class=\"sun-card-sun-line line-main ombre2\" d=\"M5,146 C29,153 73,128 101,108 C276,-29 342,23 449,108 C473,123 509,150 545,146\" fill=\"none\" stroke=\"var(--sun-card-lines)\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M5,146 C29,153 73,128 101,108 L 5 108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M101,108 C276,-29 342,23 449,108 L 104,108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M449,108 C473,123 509,150 545,146 L 545 108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <line class=\"line-main\" x1=\"5\" y1=\"108\" x2=\"545\" y2=\"108\" />\n          <line class=\"line-main\" x1=\"101\" y1=\"25\" x2=\"101\" y2=\"100\" />\n          <line class=\"line-main\" x1=\"449\" y1=\"25\" x2=\"449\" y2=\"100\" />\n          <!--circle class=\"sun-ext ombre\" stroke=\"none\" shape-rendering=\"geometricPrecision\" cx=\"", "\" cy=\"", "\" r=\"21\" opacity=\"1\" /> -->\n          <circle class=\"sun-int ombre\" stroke=\"none\" shape-rendering=\"geometricPrecision\" cx=\"", "\" cy=\"", "\" r=\"", "\" opacity=\"1\" />\n\n        </svg>\n      </div>\n    "])), lightenedColor, config.sunColor, lightenedColor, sunID, (_data$sunPercentOverH = data === null || data === void 0 ? void 0 : data.sunPercentOverHorizon) !== null && _data$sunPercentOverH !== void 0 ? _data$sunPercentOverH : 0, (_data$sunPercentOverH2 = data === null || data === void 0 ? void 0 : data.sunPercentOverHorizon) !== null && _data$sunPercentOverH2 !== void 0 ? _data$sunPercentOverH2 : 0, dawnID, (_data$dawnProgressPer = data === null || data === void 0 ? void 0 : data.dawnProgressPercent) !== null && _data$dawnProgressPer !== void 0 ? _data$dawnProgressPer : 0, (_data$dawnProgressPer2 = data === null || data === void 0 ? void 0 : data.dawnProgressPercent) !== null && _data$dawnProgressPer2 !== void 0 ? _data$dawnProgressPer2 : 0, dayID, (_data$dayProgressPerc = data === null || data === void 0 ? void 0 : data.dayProgressPercent) !== null && _data$dayProgressPerc !== void 0 ? _data$dayProgressPerc : 0, (_data$dayProgressPerc2 = data === null || data === void 0 ? void 0 : data.dayProgressPercent) !== null && _data$dayProgressPerc2 !== void 0 ? _data$dayProgressPerc2 : 0, duskID, (_data$duskProgressPer = data === null || data === void 0 ? void 0 : data.duskProgressPercent) !== null && _data$duskProgressPer !== void 0 ? _data$duskProgressPer : 0, (_data$duskProgressPer2 = data === null || data === void 0 ? void 0 : data.duskProgressPercent) !== null && _data$duskProgressPer2 !== void 0 ? _data$duskProgressPer2 : 0, dawnID, data !== null && data !== void 0 && data.dawnProgressPercent ? 1 : 0, dawnID, dayID, data !== null && data !== void 0 && data.dayProgressPercent ? 1 : 0, dayID, duskID, data !== null && data !== void 0 && data.duskProgressPercent ? 1 : 0, duskID, (_data$sunPosition$x = data === null || data === void 0 ? void 0 : data.sunPosition.x) !== null && _data$sunPosition$x !== void 0 ? _data$sunPosition$x : 0, (_data$sunPosition$y = data === null || data === void 0 ? void 0 : data.sunPosition.y) !== null && _data$sunPosition$y !== void 0 ? _data$sunPosition$y : 0, (_data$sunPosition$x2 = data === null || data === void 0 ? void 0 : data.sunPosition.x) !== null && _data$sunPosition$x2 !== void 0 ? _data$sunPosition$x2 : 0, (_data$sunPosition$y2 = data === null || data === void 0 ? void 0 : data.sunPosition.y) !== null && _data$sunPosition$y2 !== void 0 ? _data$sunPosition$y2 : 0, config.sunRadius);
    }
  }, {
    key: "generateError",
    value: function generateError() {
      return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <hui-error-card></hui-error-card>\n    "])));
    }
  }, {
    key: "generateFooter",
    value: function generateFooter(data, localization, config) {
      var upperRow = x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
      var bottomRow = x(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
      var ldawn = x(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n    "])), localization.Dawn, data !== null && data !== void 0 && data.times.dawn ? this.generateTime(data.times.dawn) : '');
      var lnoon = x(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n    "])), localization.Noon, data !== null && data !== void 0 && data.times.noon ? this.generateTime(data.times.noon) : '');
      var ldusk = x(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n      </div>\n    "])), localization.Dusk, data !== null && data !== void 0 && data.times.dusk ? this.generateTime(data.times.dusk) : '');
      var daylength = config.showDayLength ? x(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    <div class=\"sun-card-text-container\">\n      <span class=\"sun-card-text-subtitle\">", "</span>\n      <span class=\"sun-card-dawn-time sun-card-text-time\">\n      ", "\n      </span>\n    </div>\n    "])), localization.Daylength, data !== null && data !== void 0 && data.timeBetweenDuskAndDown ? data.timeBetweenDuskAndDown : '') : x(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([""])));
      upperRow = x(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-footer-row\">\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    "])), ldawn, lnoon, ldusk, daylength);
      if (config.showAzimuth || config.showElevation || config.showDayLength) {
        var _data$azimuth, _data$elevation;
        var azimuth = config.showAzimuth ? x(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          <span class=\"sun-card-dawn-time sun-card-text-time\">", "</span>\n        </div>\n      "])), localization.Azimuth, (_data$azimuth = data === null || data === void 0 ? void 0 : data.azimuth) !== null && _data$azimuth !== void 0 ? _data$azimuth : '') : x(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([""])));
        var elevation = config.showElevation ? x(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          <span class=\"sun-card-dawn-time sun-card-text-time\">", "</span>\n        </div>\n      "])), localization.Elevation, (_data$elevation = data === null || data === void 0 ? void 0 : data.elevation) !== null && _data$elevation !== void 0 ? _data$elevation : '') : x(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([""])));
        bottomRow = x(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-footer-row\">\n          ", "\n          ", "\n        </div>\n      "])), azimuth, elevation);
      }
      return x(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-footer\">\n        ", "\n        ", "\n      </div>\n    "])), upperRow, bottomRow);
    }
  }, {
    key: "generateTime",
    value: function generateTime(time) {
      if (time.period) {
        return x(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        <span class=\"sun-card-text-time\">\n          ", " <span class=\"sun-card-text-time-period\">", "</span>\n        </span>\n      "])), time.time, time.period);
      }
      return x(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      <span class=\"sun-card-text-time\">", "</span>\n    "])), time.time);
    }
  }]);
}();

var _templateObject;
var cardStyles = i$2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .sun-card {\n    --sun-card-lines: #464646;\n    --sun-card-text-color: #fff;\n    --sun-card-subtitle-color: #fff;\n\n    color: var(--sun-card-text-color);\n    padding: 1rem;\n  }\n\n  .sun-card-body {\n    padding-top: 0.5rem;\n  }\n\n  .sun-card.sun-card-light {\n    --sun-card-lines: #ececec;\n    --sun-card-text-color: #000;\n    --sun-card-subtitle-color: #828282;\n  }\n\n  .sun-card-header {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .sun-card-footer .sun-card-footer-row {\n    display: flex;\n    justify-content: space-around;\n    padding-top: 1.5rem;\n  }\n\n  .sun-card-title {\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding-bottom: 2rem;\n    margin: 0;\n  }\n\n  .sun-card-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .sun-card-header .sun-card-text-subtitle {\n    font-size: 1.15rem;\n    font-weight: 400;\n    padding-bottom: 0.25rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-header .sun-card-text-time {\n    font-size: 1.85rem;\n    font-weight: 400;\n  }\n\n  .sun-card-footer .sun-card-text-subtitle {\n    font-size: 1.15rem;\n    font-weight: 400;\n    padding-bottom: 0.5rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-footer .sun-card-text-time {\n    font-size: 1.25rem;\n    font-weight: 500;\n  }\n\n  .sun-card-text-time-period {\n    font-size: 0.75rem;\n  }\n"])));

var Azimuth$e = "Azimut";
var Dawn$e = "Daggry";
var Dusk$e = "Tusmørke";
var Elevation$e = "Højde";
var Noon$e = "Middag";
var Sunrise$e = "Solopgang";
var Sunset$e = "Solnedgang";
var Daylength$e = "Daylight length";
var errors$e = {
	SunIntegrationNotFound: "Sun integration not found"
};
var da = {
	Azimuth: Azimuth$e,
	Dawn: Dawn$e,
	Dusk: Dusk$e,
	Elevation: Elevation$e,
	Noon: Noon$e,
	Sunrise: Sunrise$e,
	Sunset: Sunset$e,
	Daylength: Daylength$e,
	errors: errors$e
};

var Azimuth$d = "Azimut";
var Dawn$d = "Morgendämmerung";
var Dusk$d = "Abenddämmerung";
var Elevation$d = "Zenitwinkel";
var Noon$d = "Zenit";
var Sunrise$d = "Sonnenaufgang";
var Sunset$d = "Sonnenuntergang";
var Daylength$d = "Daylight length";
var errors$d = {
	SunIntegrationNotFound: "Sun integration not found"
};
var de = {
	Azimuth: Azimuth$d,
	Dawn: Dawn$d,
	Dusk: Dusk$d,
	Elevation: Elevation$d,
	Noon: Noon$d,
	Sunrise: Sunrise$d,
	Sunset: Sunset$d,
	Daylength: Daylength$d,
	errors: errors$d
};

var Azimuth$c = "Azimuth";
var Dawn$c = "Dawn";
var Dusk$c = "Dusk";
var Elevation$c = "Elevation";
var Noon$c = "Solar noon";
var Sunrise$c = "Sunrise";
var Sunset$c = "Sunset";
var Daylength$c = "Daylight length";
var errors$c = {
	SunIntegrationNotFound: "Sun integration not found"
};
var en = {
	Azimuth: Azimuth$c,
	Dawn: Dawn$c,
	Dusk: Dusk$c,
	Elevation: Elevation$c,
	Noon: Noon$c,
	Sunrise: Sunrise$c,
	Sunset: Sunset$c,
	Daylength: Daylength$c,
	errors: errors$c
};

var Azimuth$b = "Azimut";
var Dawn$b = "Amanecer";
var Dusk$b = "Anochecer";
var Elevation$b = "Elevación";
var Noon$b = "Mediodía solar";
var Sunrise$b = "Salida del sol";
var Sunset$b = "Atardecer";
var Daylength$b = "Daylight length";
var errors$b = {
	SunIntegrationNotFound: "Sun integration not found"
};
var es = {
	Azimuth: Azimuth$b,
	Dawn: Dawn$b,
	Dusk: Dusk$b,
	Elevation: Elevation$b,
	Noon: Noon$b,
	Sunrise: Sunrise$b,
	Sunset: Sunset$b,
	Daylength: Daylength$b,
	errors: errors$b
};

var Azimuth$a = "Asimuut";
var Dawn$a = "Koidik";
var Dusk$a = "Hämarik";
var Elevation$a = "Kõrgus";
var Noon$a = "Keskpäev";
var Sunrise$a = "Päikesetõus";
var Sunset$a = "Päikeseloojang";
var Daylength$a = "Daylight length";
var errors$a = {
	SunIntegrationNotFound: "Sun integration not found"
};
var et = {
	Azimuth: Azimuth$a,
	Dawn: Dawn$a,
	Dusk: Dusk$a,
	Elevation: Elevation$a,
	Noon: Noon$a,
	Sunrise: Sunrise$a,
	Sunset: Sunset$a,
	Daylength: Daylength$a,
	errors: errors$a
};

var Azimuth$9 = "Atsimuutti";
var Dawn$9 = "Sarastus";
var Dusk$9 = "Hämärä";
var Elevation$9 = "Korkeus";
var Noon$9 = "Keskipäivä";
var Sunrise$9 = "Auringonnousu";
var Sunset$9 = "Auringonlasku";
var Daylength$9 = "Daylight length";
var errors$9 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var fi = {
	Azimuth: Azimuth$9,
	Dawn: Dawn$9,
	Dusk: Dusk$9,
	Elevation: Elevation$9,
	Noon: Noon$9,
	Sunrise: Sunrise$9,
	Sunset: Sunset$9,
	Daylength: Daylength$9,
	errors: errors$9
};

var Azimuth$8 = "Azimut";
var Dawn$8 = "Aube";
var Dusk$8 = "Crépuscule";
var Elevation$8 = "Élévation";
var Noon$8 = "Midi Solaire";
var Sunrise$8 = "Lever du soleil";
var Sunset$8 = "Coucher du soleil";
var Daylength$8 = "Durée du Jour";
var errors$8 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var fr = {
	Azimuth: Azimuth$8,
	Dawn: Dawn$8,
	Dusk: Dusk$8,
	Elevation: Elevation$8,
	Noon: Noon$8,
	Sunrise: Sunrise$8,
	Sunset: Sunset$8,
	Daylength: Daylength$8,
	errors: errors$8
};

var Azimuth$7 = "Azimut";
var Dawn$7 = "Hajnal";
var Dusk$7 = "Szürkület";
var Elevation$7 = "Magasság";
var Noon$7 = "Dél";
var Sunrise$7 = "Napkelte";
var Sunset$7 = "Napnyugta";
var Daylength$7 = "Daylight length";
var errors$7 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var hu = {
	Azimuth: Azimuth$7,
	Dawn: Dawn$7,
	Dusk: Dusk$7,
	Elevation: Elevation$7,
	Noon: Noon$7,
	Sunrise: Sunrise$7,
	Sunset: Sunset$7,
	Daylength: Daylength$7,
	errors: errors$7
};

var Azimuth$6 = "Azimuth";
var Dawn$6 = "Alba";
var Dusk$6 = "Crepuscolo";
var Elevation$6 = "Elevazione";
var Noon$6 = "Mezzogiorno solare";
var Sunrise$6 = "Alba";
var Sunset$6 = "Tramonto";
var Daylength$6 = "Daylight length";
var errors$6 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var it = {
	Azimuth: Azimuth$6,
	Dawn: Dawn$6,
	Dusk: Dusk$6,
	Elevation: Elevation$6,
	Noon: Noon$6,
	Sunrise: Sunrise$6,
	Sunset: Sunset$6,
	Daylength: Daylength$6,
	errors: errors$6
};

var Azimuth$5 = "Azimut";
var Dawn$5 = "Dageraad";
var Dusk$5 = "Schemer";
var Elevation$5 = "Hoogte";
var Noon$5 = "Zonne-middag";
var Sunrise$5 = "Zonsopkomst";
var Sunset$5 = "Zonsondergang";
var Daylength$5 = "Daylight Lelengthngth";
var errors$5 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var nl = {
	Azimuth: Azimuth$5,
	Dawn: Dawn$5,
	Dusk: Dusk$5,
	Elevation: Elevation$5,
	Noon: Noon$5,
	Sunrise: Sunrise$5,
	Sunset: Sunset$5,
	Daylength: Daylength$5,
	errors: errors$5
};

var Azimuth$4 = "Azymut";
var Dawn$4 = "Świt";
var Dusk$4 = "Zmierzch";
var Elevation$4 = "Wysokość";
var Noon$4 = "Górowanie";
var Sunrise$4 = "Wschód";
var Sunset$4 = "Zachód";
var Daylength$4 = "Day length";
var errors$4 = {
	SunIntegrationNotFound: "Daylight odnaleziono integracji sun"
};
var pl = {
	Azimuth: Azimuth$4,
	Dawn: Dawn$4,
	Dusk: Dusk$4,
	Elevation: Elevation$4,
	Noon: Noon$4,
	Sunrise: Sunrise$4,
	Sunset: Sunset$4,
	Daylength: Daylength$4,
	errors: errors$4
};

var Azimuth$3 = "Azimute";
var Dawn$3 = "Amanhecer";
var Dusk$3 = "Anoitecer";
var Elevation$3 = "Elevação";
var Noon$3 = "Meio dia solar";
var Sunrise$3 = "Nascer do sol";
var Sunset$3 = "Pôr do sol";
var Daylength$3 = "Daylight length";
var errors$3 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var ptBR = {
	Azimuth: Azimuth$3,
	Dawn: Dawn$3,
	Dusk: Dusk$3,
	Elevation: Elevation$3,
	Noon: Noon$3,
	Sunrise: Sunrise$3,
	Sunset: Sunset$3,
	Daylength: Daylength$3,
	errors: errors$3
};

var Azimuth$2 = "Азимут";
var Dawn$2 = "Рассвет";
var Dusk$2 = "Сумерки";
var Elevation$2 = "Высота";
var Noon$2 = "Зенит";
var Sunrise$2 = "Восход";
var Sunset$2 = "Закат";
var Daylength$2 = "Daylight length";
var errors$2 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var ru = {
	Azimuth: Azimuth$2,
	Dawn: Dawn$2,
	Dusk: Dusk$2,
	Elevation: Elevation$2,
	Noon: Noon$2,
	Sunrise: Sunrise$2,
	Sunset: Sunset$2,
	Daylength: Daylength$2,
	errors: errors$2
};

var Azimuth$1 = "Azimut";
var Dawn$1 = "Zora";
var Dusk$1 = "Mrak";
var Elevation$1 = "Višina";
var Noon$1 = "Sončno poldne";
var Sunrise$1 = "Sončni vzhod";
var Sunset$1 = "Sončni zahod";
var Daylength$1 = "Daylight length";
var errors$1 = {
	SunIntegrationNotFound: "Sun integration not found"
};
var sl = {
	Azimuth: Azimuth$1,
	Dawn: Dawn$1,
	Dusk: Dusk$1,
	Elevation: Elevation$1,
	Noon: Noon$1,
	Sunrise: Sunrise$1,
	Sunset: Sunset$1,
	Daylength: Daylength$1,
	errors: errors$1
};

var Azimuth = "Azimut";
var Dawn = "Gryning";
var Dusk = "Skymning";
var Elevation = "Elevation";
var Noon = "Middag";
var Sunrise = "Soluppgång";
var Sunset = "Solnedgång";
var Daylength = "Daylight length";
var errors = {
	SunIntegrationNotFound: "Sun integration not found"
};
var sv = {
	Azimuth: Azimuth,
	Dawn: Dawn,
	Dusk: Dusk,
	Elevation: Elevation,
	Noon: Noon,
	Sunrise: Sunrise,
	Sunset: Sunset,
	Daylength: Daylength,
	errors: errors
};

var Constants = /*#__PURE__*/_createClass(function Constants() {
  _classCallCheck(this, Constants);
});
_defineProperty(Constants, "DEFAULT_CONFIG", {
  darkMode: true,
  language: 'en',
  showAzimuth: false,
  showElevation: false,
  timeFormat: '24h',
  sunColor: '#f9d05e',
  sunRadius: 14,
  showDayLength: false
});
_defineProperty(Constants, "EVENT_X_POSITIONS", {
  dayStart: 5,
  sunrise: 101,
  sunset: 449,
  dayEnd: 545
});
_defineProperty(Constants, "HORIZON_Y", 108);
_defineProperty(Constants, "LOCALIZATION_LANGUAGES", {
  da: da,
  de: de,
  en: en,
  es: es,
  et: et,
  fi: fi,
  fr: fr,
  hu: hu,
  it: it,
  nl: nl,
  pl: pl,
  'pt-BR': ptBR,
  ru: ru,
  sl: sl,
  sv: sv
});
_defineProperty(Constants, "SUN_RADIUS", 17);
var COLOURS_TXT_HEX = {
  'aliceblue': '#f0f8ff',
  'antiquewhite': '#faebd7',
  'aqua': '#00ffff',
  'aquamarine': '#7fffd4',
  'azure': '#f0ffff',
  'beige': '#f5f5dc',
  'bisque': '#ffe4c4',
  'black': '#000000',
  'blanchedalmond': '#ffebcd',
  'blue': '#0000ff',
  'blueviolet': '#8a2be2',
  'brown': '#a52a2a',
  'burlywood': '#deb887',
  'cadetblue': '#5f9ea0',
  'chartreuse': '#7fff00',
  'chocolate': '#d2691e',
  'coral': '#ff7f50',
  'cornflowerblue': '#6495ed',
  'cornsilk': '#fff8dc',
  'crimson': '#dc143c',
  'cyan': '#00ffff',
  'darkblue': '#00008b',
  'darkcyan': '#008b8b',
  'darkgoldenrod': '#b8860b',
  'darkgray': '#a9a9a9',
  'darkgreen': '#006400',
  'darkkhaki': '#bdb76b',
  'darkmagenta': '#8b008b',
  'darkolivegreen': '#556b2f',
  'darkorange': '#ff8c00',
  'darkorchid': '#9932cc',
  'darkred': '#8b0000',
  'darksalmon': '#e9967a',
  'darkseagreen': '#8fbc8f',
  'darkslateblue': '#483d8b',
  'darkslategray': '#2f4f4f',
  'darkturquoise': '#00ced1',
  'darkviolet': '#9400d3',
  'deeppink': '#ff1493',
  'deepskyblue': '#00bfff',
  'dimgray': '#696969',
  'dodgerblue': '#1e90ff',
  'firebrick': '#b22222',
  'floralwhite': '#fffaf0',
  'forestgreen': '#228b22',
  'fuchsia': '#ff00ff',
  'gainsboro': '#dcdcdc',
  'ghostwhite': '#f8f8ff',
  'gold': '#ffd700',
  'goldenrod': '#daa520',
  'gray': '#808080',
  'green': '#008000',
  'greenyellow': '#adff2f',
  'honeydew': '#f0fff0',
  'hotpink': '#ff69b4',
  'indianred ': '#cd5c5c',
  'indigo': '#4b0082',
  'ivory': '#fffff0',
  'khaki': '#f0e68c',
  'lavender': '#e6e6fa',
  'lavenderblush': '#fff0f5',
  'lawngreen': '#7cfc00',
  'lemonchiffon': '#fffacd',
  'lightblue': '#add8e6',
  'lightcoral': '#f08080',
  'lightcyan': '#e0ffff',
  'lightgoldenrodyellow': '#fafad2',
  'lightgrey': '#d3d3d3',
  'lightgreen': '#90ee90',
  'lightpink': '#ffb6c1',
  'lightsalmon': '#ffa07a',
  'lightseagreen': '#20b2aa',
  'lightskyblue': '#87cefa',
  'lightslategray': '#778899',
  'lightsteelblue': '#b0c4de',
  'lightyellow': '#ffffe0',
  'lime': '#00ff00',
  'limegreen': '#32cd32',
  'linen': '#faf0e6',
  'magenta': '#ff00ff',
  'maroon': '#800000',
  'mediumaquamarine': '#66cdaa',
  'mediumblue': '#0000cd',
  'mediumorchid': '#ba55d3',
  'mediumpurple': '#9370d8',
  'mediumseagreen': '#3cb371',
  'mediumslateblue': '#7b68ee',
  'mediumspringgreen': '#00fa9a',
  'mediumturquoise': '#48d1cc',
  'mediumvioletred': '#c71585',
  'midnightblue': '#191970',
  'mintcream': '#f5fffa',
  'mistyrose': '#ffe4e1',
  'moccasin': '#ffe4b5',
  'navajowhite': '#ffdead',
  'navy': '#000080',
  'oldlace': '#fdf5e6',
  'olive': '#808000',
  'olivedrab': '#6b8e23',
  'orange': '#ffa500',
  'orangered': '#ff4500',
  'orchid': '#da70d6',
  'palegoldenrod': '#eee8aa',
  'palegreen': '#98fb98',
  'paleturquoise': '#afeeee',
  'palevioletred': '#d87093',
  'papayawhip': '#ffefd5',
  'peachpuff': '#ffdab9',
  'peru': '#cd853f',
  'pink': '#ffc0cb',
  'plum': '#dda0dd',
  'powderblue': '#b0e0e6',
  'purple': '#800080',
  'rebeccapurple': '#663399',
  'red': '#ff0000',
  'rosybrown': '#bc8f8f',
  'royalblue': '#4169e1',
  'saddlebrown': '#8b4513',
  'salmon': '#fa8072',
  'sandybrown': '#f4a460',
  'seagreen': '#2e8b57',
  'seashell': '#fff5ee',
  'sienna': '#a0522d',
  'silver': '#c0c0c0',
  'skyblue': '#87ceeb',
  'slateblue': '#6a5acd',
  'slategray': '#708090',
  'snow': '#fffafa',
  'springgreen': '#00ff7f',
  'steelblue': '#4682b4',
  'tan': '#d2b48c',
  'teal': '#008080',
  'thistle': '#d8bfd8',
  'tomato': '#ff6347',
  'turquoise': '#40e0d0',
  'violet': '#ee82ee',
  'wheat': '#f5deb3',
  'white': '#ffffff',
  'whitesmoke': '#f5f5f5',
  'yellow': '#ffff00',
  'yellowgreen': '#9acd32'
};

var ESunCardErrors = /*#__PURE__*/function (ESunCardErrors) {
  return ESunCardErrors;
}({});
ESunCardErrors = /*#__PURE__*/function (ESunCardErrors) {
  ESunCardErrors["SunIntegrationNotFound"] = "SunIntegrationNotFound";
  return ESunCardErrors;
}(ESunCardErrors || {});

var name = "homeassistant-sun-card-2";
var version = "0.75.44";

console.info("%c  ".concat(name.toUpperCase(), "  %c  Version ").concat(version, "  "), 'color: white; font-weight: bold; background: crimson', 'color: #000; font-weight: bold; background: #ddd');
var SunCard = _decorate([e$1('sun-card')], function (_initialize, _LitElement) {
  var SunCard = /*#__PURE__*/function (_LitElement2) {
    function SunCard() {
      var _this;
      _classCallCheck(this, SunCard);
      _this = _callSuper(this, SunCard);
      _initialize(_this);
      return _this;
    }

    // Tix
    _inherits(SunCard, _LitElement2);
    return _createClass(SunCard);
  }(_LitElement);
  return {
    F: SunCard,
    d: [{
      kind: "field",
      decorators: [n$1({
        attribute: false
      })],
      "static": true,
      key: "cardType",
      value: function value() {
        return 'sun-card';
      }
    }, {
      kind: "field",
      decorators: [n$1({
        attribute: false
      })],
      "static": true,
      key: "cardName",
      value: function value() {
        return 'Sun Card';
      }
    }, {
      kind: "field",
      decorators: [n$1({
        attribute: false
      })],
      "static": true,
      key: "cardDescription",
      value: function value() {
        return 'Custom card that display a graph to track the sun position and related events';
      }
    }, {
      kind: "field",
      decorators: [n$1({
        attribute: false
      })],
      key: "hasRendered",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [n$1({
        attribute: false
      })],
      key: "lastHass",
      value: void 0
    }, {
      kind: "field",
      decorators: [t()],
      key: "config",
      value: function value() {
        return {};
      }
    }, {
      kind: "field",
      decorators: [t()],
      key: "data",
      value: void 0
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return cardStyles;
      }
    }, {
      kind: "set",
      key: "hass",
      value: function hass(_hass) {
        this.lastHass = _hass;
        if (!this.hasRendered) {
          return;
        }
        this.processLastHass();
      }
    }, {
      kind: "method",
      key: "calculatePositionAndProgressesByTime",
      value: function calculatePositionAndProgressesByTime(hass) {
        var _this$shadowRoot;
        var sunLine = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector('path');
        var sunrise = new Date(hass.states['sun.sun'].attributes.next_rising);
        var sunset = new Date(hass.states['sun.sun'].attributes.next_setting);
        var eventsAt = {
          dayStart: 0,
          sunrise: this.convertDateToMinutesSinceDayStarted(sunrise),
          sunset: this.convertDateToMinutesSinceDayStarted(sunset),
          dayEnd: 23 * 60 + 59
        };
        var now = new Date();
        var minutesSinceTodayStarted = this.convertDateToMinutesSinceDayStarted(now);

        // Dawn section position [0 - 105]
        var dawnSectionPosition = Math.min(minutesSinceTodayStarted, eventsAt.sunrise) * 105 / eventsAt.sunrise;

        // Day section position [106 - 499]
        var minutesSinceDayStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunrise, 0);
        var daySectionPosition = Math.min(minutesSinceDayStarted, eventsAt.sunset - eventsAt.sunrise) * (499 - 106) / (eventsAt.sunset - eventsAt.sunrise);

        // Dusk section position [500 - 605]
        var minutesSinceDuskStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunset, 0);
        var duskSectionPosition = minutesSinceDuskStarted * (605 - 500) / (eventsAt.dayEnd - eventsAt.sunset);
        var position = dawnSectionPosition + daySectionPosition + duskSectionPosition;
        var sunPosition = sunLine.getPointAtLength(position);
        var dawnProgressPercent = 100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.dayStart) / (Constants.EVENT_X_POSITIONS.sunrise - Constants.EVENT_X_POSITIONS.dayStart);
        var dayProgressPercent = 100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunrise) / (Constants.EVENT_X_POSITIONS.sunset - Constants.EVENT_X_POSITIONS.sunrise);
        var duskProgressPercent = 100 * (sunPosition.x - Constants.EVENT_X_POSITIONS.sunset) / (Constants.EVENT_X_POSITIONS.dayEnd - Constants.EVENT_X_POSITIONS.sunset);
        var sunYTop = sunPosition.y - Constants.SUN_RADIUS;
        var yOver = Constants.HORIZON_Y - sunYTop;
        var sunPercentOverHorizon = 0;
        if (yOver > 0) {
          sunPercentOverHorizon = Math.min(100 * yOver / (2 * Constants.SUN_RADIUS), 100);
        }

        // tix - time hhHmm between sunset and sunrise
        var timeBetweenDuskAndDown = this.convertMinutestoHoursAndMinutes(eventsAt.sunset - eventsAt.sunrise); // eventsAt.sunset - eventsAt.sunrise

        return {
          dawnProgressPercent: dawnProgressPercent,
          dayProgressPercent: dayProgressPercent,
          duskProgressPercent: duskProgressPercent,
          sunPercentOverHorizon: sunPercentOverHorizon,
          sunPosition: {
            x: sunPosition.x,
            y: sunPosition.y
          },
          timeBetweenDuskAndDown: timeBetweenDuskAndDown
        };
      }
    }, {
      kind: "method",
      key: "convertDateToMinutesSinceDayStarted",
      value: function convertDateToMinutesSinceDayStarted(date) {
        return date.getHours() * 60 + date.getMinutes();
      }
    }, {
      kind: "method",
      key: "convertMinutestoHoursAndMinutes",
      value: function convertMinutestoHoursAndMinutes(minutes) {
        var cHours = Math.floor(minutes / 60);
        var cMinutes = minutes % 60;
        //const total = cHours.toString() + ':' + cMinutes.toString()

        var HHMM = cHours.toString() + ':' + (cMinutes < 10 ? '0' : '') + cMinutes.toString();
        return HHMM;
      }
    }, {
      kind: "method",
      key: "colourNameToHex",
      value: function colourNameToHex(colour) {
        var reg = /^#([0-9a-f]{3}){1,2}$/i; // test if type of color is '#xxxxxx'

        if (reg.test(colour)) {
          return colour;
        } else if (typeof COLOURS_TXT_HEX[colour.toLowerCase()] != 'undefined') {
          return COLOURS_TXT_HEX[colour.toLowerCase()];
        } else {
          return '#f9d05e'; // default value
        }
      }
    }, {
      kind: "method",
      key: "parseTime",
      value: function parseTime(timeText, locale) {
        var regex = /\d{1,2}[:.]\d{1,2}|[AMP]+/g;
        var date = new Date(timeText);
        var _this$getConfig = this.getConfig(),
          language = _this$getConfig.language,
          timeFormat = _this$getConfig.timeFormat;
        var result = date.toLocaleTimeString(locale !== null && locale !== void 0 ? locale : language, {
          hour12: timeFormat === '12h'
        }).match(regex);
        if (!result && !locale) {
          return this.parseTime(timeText, Constants.DEFAULT_CONFIG.language);
        }
        var _result = _slicedToArray(result, 2),
          time = _result[0],
          period = _result[1];
        return {
          time: time,
          period: period
        };
      }
    }, {
      kind: "method",
      key: "processLastHass",
      value: function processLastHass() {
        var _this$config$darkMode, _ref, _this$config$language, _this$lastHass$locale, _this$config$timeForm;
        if (!this.lastHass) {
          return;
        }
        if (!this.lastHass.states['sun.sun']) {
          return this.showError(ESunCardErrors.SunIntegrationNotFound);
        }
        this.config.darkMode = (_this$config$darkMode = this.config.darkMode) !== null && _this$config$darkMode !== void 0 ? _this$config$darkMode : this.lastHass.themes.darkMode;
        this.config.language = (_ref = (_this$config$language = this.config.language) !== null && _this$config$language !== void 0 ? _this$config$language : (_this$lastHass$locale = this.lastHass.locale) === null || _this$lastHass$locale === void 0 ? void 0 : _this$lastHass$locale.language) !== null && _ref !== void 0 ? _ref : this.lastHass.language;
        this.config.timeFormat = (_this$config$timeForm = this.config.timeFormat) !== null && _this$config$timeForm !== void 0 ? _this$config$timeForm : this.getTimeFormatByLanguage(this.config.language);
        if (this.config.sunColor != undefined) {
          this.config.sunColor = this.colourNameToHex(this.config.sunColor);
        } else {
          this.config.sunColor = '#f9d05e';
        }
        var times = {
          dawn: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dawn),
          dusk: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dusk),
          noon: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_noon),
          sunrise: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_rising),
          sunset: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_setting)
        };
        var _this$calculatePositi = this.calculatePositionAndProgressesByTime(this.lastHass),
          dawnProgressPercent = _this$calculatePositi.dawnProgressPercent,
          dayProgressPercent = _this$calculatePositi.dayProgressPercent,
          duskProgressPercent = _this$calculatePositi.duskProgressPercent,
          sunPercentOverHorizon = _this$calculatePositi.sunPercentOverHorizon,
          sunPosition = _this$calculatePositi.sunPosition,
          timeBetweenDuskAndDown = _this$calculatePositi.timeBetweenDuskAndDown;
        var data = {
          azimuth: this.lastHass.states['sun.sun'].attributes.azimuth,
          dawnProgressPercent: dawnProgressPercent,
          dayProgressPercent: dayProgressPercent,
          duskProgressPercent: duskProgressPercent,
          elevation: this.lastHass.states['sun.sun'].attributes.elevation,
          sunPercentOverHorizon: sunPercentOverHorizon,
          sunPosition: sunPosition,
          times: times,
          timeBetweenDuskAndDown: timeBetweenDuskAndDown
        };
        this.data = data;
      }
    }, {
      kind: "method",
      key: "getConfig",
      value: function getConfig() {
        var _this$config$darkMode2, _this$config$language2, _this$config$showAzim, _this$config$showElev, _this$config$timeForm2;
        var config = {};
        config.darkMode = (_this$config$darkMode2 = this.config.darkMode) !== null && _this$config$darkMode2 !== void 0 ? _this$config$darkMode2 : Constants.DEFAULT_CONFIG.darkMode;
        config.language = (_this$config$language2 = this.config.language) !== null && _this$config$language2 !== void 0 ? _this$config$language2 : Constants.DEFAULT_CONFIG.language;
        config.showAzimuth = (_this$config$showAzim = this.config.showAzimuth) !== null && _this$config$showAzim !== void 0 ? _this$config$showAzim : Constants.DEFAULT_CONFIG.showAzimuth;
        config.showElevation = (_this$config$showElev = this.config.showElevation) !== null && _this$config$showElev !== void 0 ? _this$config$showElev : Constants.DEFAULT_CONFIG.showElevation;
        config.timeFormat = (_this$config$timeForm2 = this.config.timeFormat) !== null && _this$config$timeForm2 !== void 0 ? _this$config$timeForm2 : Constants.DEFAULT_CONFIG.timeFormat;
        config.title = this.config.title;
        config.sunColor = this.config.sunColor;
        config.sunRadius = this.config.sunRadius;
        config.showDayLength = this.config.showDayLength;
        if (!Object.keys(Constants.LOCALIZATION_LANGUAGES).includes(config.language)) {
          config.language = Constants.DEFAULT_CONFIG.language;
        }
        return config;
      }
    }, {
      kind: "method",
      key: "getTimeFormatByLanguage",
      value: function getTimeFormatByLanguage(language) {
        var date = new Date();
        var time = date.toLocaleTimeString(language).toLocaleLowerCase();
        return time.includes('pm') || time.includes('am') ? '12h' : '24h';
      }
    }, {
      kind: "method",
      key: "setConfig",
      value: function setConfig(config) {
        this.config = _objectSpread2({}, config);
      }
    }, {
      kind: "method",
      key: "showError",
      value: function showError(error) {
        this.data = {
          error: error
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var config = this.getConfig();
        var language = config.language;
        var localization = Constants.LOCALIZATION_LANGUAGES[language];
        return SunCardContent.generate(this.data, localization, config);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(SunCard.prototype), "updated", this).call(this, changedProperties);
        if (!this.hasRendered) {
          this.hasRendered = true;
          this.processLastHass();
          return;
        }
        if (this.data.error) {
          var _this$shadowRoot2;
          var errorElement = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelector('hui-error-card');
          if (errorElement) {
            var _errorElement$setConf;
            var _config = this.getConfig();
            var language = _config.language;
            var localization = Constants.LOCALIZATION_LANGUAGES[language];
            var error = localization.errors[this.data.error];
            (_errorElement$setConf = errorElement.setConfig) === null || _errorElement$setConf === void 0 || _errorElement$setConf.call(errorElement, {
              error: error
            });
            console.error(error);
          }
        }
      }
    }]
  };
}, s);
window.customCards = window.customCards || [];
window.customCards.push({
  type: SunCard.cardType,
  name: SunCard.cardName,
  description: SunCard.cardDescription
});

export { SunCard };
