'use strict';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _decorate(decorators, factory, superClass, mixins) {
  var api = _getDecoratorsApi();
  if (mixins) {
    for (var i = 0; i < mixins.length; i++) {
      api = mixins[i](api);
    }
  }
  var r = factory(function initialize(O) {
    api.initializeInstanceElements(O, decorated.elements);
  }, superClass);
  var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  api.initializeClassElements(r.F, decorated.elements);
  return api.runClassFinishers(r.F, decorated.finishers);
}
function _getDecoratorsApi() {
  _getDecoratorsApi = function () {
    return api;
  };
  var api = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function (O, elements) {
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === "own") {
            this.defineClassElement(O, element);
          }
        }, this);
      }, this);
    },
    initializeClassElements: function (F, elements) {
      var proto = F.prototype;
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;
          if (element.kind === kind && (placement === "static" || placement === "prototype")) {
            var receiver = placement === "static" ? F : proto;
            this.defineClassElement(receiver, element);
          }
        }, this);
      }, this);
    },
    defineClassElement: function (receiver, element) {
      var descriptor = element.descriptor;
      if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }
      Object.defineProperty(receiver, element.key, descriptor);
    },
    decorateClass: function (elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {
        static: [],
        prototype: [],
        own: []
      };
      elements.forEach(function (element) {
        this.addElementPlacement(element, placements);
      }, this);
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = this.decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      }, this);
      if (!decorators) {
        return {
          elements: newElements,
          finishers: finishers
        };
      }
      var result = this.decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    },
    addElementPlacement: function (element, placements, silent) {
      var keys = placements[element.placement];
      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError("Duplicated element (" + element.key + ")");
      }
      keys.push(element.key);
    },
    decorateElement: function (element, placements) {
      var extras = [];
      var finishers = [];
      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = this.fromElementDescriptor(element);
        var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        this.addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            this.addElementPlacement(newExtras[j], placements);
          }
          extras.push.apply(extras, newExtras);
        }
      }
      return {
        element: element,
        finishers: finishers,
        extras: extras
      };
    },
    decorateConstructor: function (elements, decorators) {
      var finishers = [];
      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = this.fromClassDescriptor(elements);
        var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }
        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;
          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                throw new TypeError("Duplicated element (" + elements[j].key + ")");
              }
            }
          }
        }
      }
      return {
        elements: elements,
        finishers: finishers
      };
    },
    fromElementDescriptor: function (element) {
      var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === "field") obj.initializer = element.initializer;
      return obj;
    },
    toElementDescriptors: function (elementObjects) {
      if (elementObjects === undefined) return;
      return _toArray(elementObjects).map(function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        this.disallowProperty(elementObject, "finisher", "An element descriptor");
        this.disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
      }, this);
    },
    toElementDescriptor: function (elementObject) {
      var kind = String(elementObject.kind);
      if (kind !== "method" && kind !== "field") {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }
      var key = _toPropertyKey(elementObject.key);
      var placement = String(elementObject.placement);
      if (placement !== "static" && placement !== "prototype" && placement !== "own") {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }
      var descriptor = elementObject.descriptor;
      this.disallowProperty(elementObject, "elements", "An element descriptor");
      var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
      };
      if (kind !== "field") {
        this.disallowProperty(elementObject, "initializer", "A method descriptor");
      } else {
        this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
      }
      return element;
    },
    toElementFinisherExtras: function (elementObject) {
      var element = this.toElementDescriptor(elementObject);
      var finisher = _optionalCallableProperty(elementObject, "finisher");
      var extras = this.toElementDescriptors(elementObject.extras);
      return {
        element: element,
        finisher: finisher,
        extras: extras
      };
    },
    fromClassDescriptor: function (elements) {
      var obj = {
        kind: "class",
        elements: elements.map(this.fromElementDescriptor, this)
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    },
    toClassDescriptor: function (obj) {
      var kind = String(obj.kind);
      if (kind !== "class") {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }
      this.disallowProperty(obj, "key", "A class descriptor");
      this.disallowProperty(obj, "placement", "A class descriptor");
      this.disallowProperty(obj, "descriptor", "A class descriptor");
      this.disallowProperty(obj, "initializer", "A class descriptor");
      this.disallowProperty(obj, "extras", "A class descriptor");
      var finisher = _optionalCallableProperty(obj, "finisher");
      var elements = this.toElementDescriptors(obj.elements);
      return {
        elements: elements,
        finisher: finisher
      };
    },
    runClassFinishers: function (constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
          if (typeof newConstructor !== "function") {
            throw new TypeError("Finishers must return a constructor.");
          }
          constructor = newConstructor;
        }
      }
      return constructor;
    },
    disallowProperty: function (obj, name, objectType) {
      if (obj[name] !== undefined) {
        throw new TypeError(objectType + " can't have a ." + name + " property.");
      }
    }
  };
  return api;
}
function _createElementDescriptor(def) {
  var key = _toPropertyKey(def.key);
  var descriptor;
  if (def.kind === "method") {
    descriptor = {
      value: def.value,
      writable: true,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "get") {
    descriptor = {
      get: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "set") {
    descriptor = {
      set: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "field") {
    descriptor = {
      configurable: true,
      writable: true,
      enumerable: true
    };
  }
  var element = {
    kind: def.kind === "field" ? "field" : "method",
    key: key,
    placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
    descriptor: descriptor
  };
  if (def.decorators) element.decorators = def.decorators;
  if (def.kind === "field") element.initializer = def.value;
  return element;
}
function _coalesceGetterSetter(element, other) {
  if (element.descriptor.get !== undefined) {
    other.descriptor.get = element.descriptor.get;
  } else {
    other.descriptor.set = element.descriptor.set;
  }
}
function _coalesceClassElements(elements) {
  var newElements = [];
  var isSameElement = function (other) {
    return other.kind === "method" && other.key === element.key && other.placement === element.placement;
  };
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var other;
    if (element.kind === "method" && (other = newElements.find(isSameElement))) {
      if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
        if (_hasDecorators(element) || _hasDecorators(other)) {
          throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
        }
        other.descriptor = element.descriptor;
      } else {
        if (_hasDecorators(element)) {
          if (_hasDecorators(other)) {
            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
          }
          other.decorators = element.decorators;
        }
        _coalesceGetterSetter(element, other);
      }
    } else {
      newElements.push(element);
    }
  }
  return newElements;
}
function _hasDecorators(element) {
  return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
  return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _optionalCallableProperty(obj, name) {
  var value = obj[name];
  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }
  return value;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$4=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$4.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a$1};let d$1 = class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$2=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$2,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$1+s.slice(v)+n$2+w):s+n$2+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$2?e$2.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$2)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$2),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$2),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$2,t+1));)v.push({type:7,index:r}),t+=n$2.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.7.2");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.1");

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
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return e({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

var _templateObject$1;
var cardStyles = i$2(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  .sun-card {\n    --sun-card-lines: #464646;\n    --sun-card-text-color: #fff;\n    --sun-card-subtitle-color: #fff;\n\n    color: var(--sun-card-text-color);\n    padding: 1rem;\n  }\n\n  .sun-card-body {\n    padding-top: 0.5rem;\n  }\n\n  .sun-card.sun-card-light {\n    --sun-card-lines: #ececec;\n    --sun-card-text-color: #000;\n    --sun-card-subtitle-color: #828282;\n  }\n\n  .sun-card-header {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .sun-card-footer .sun-card-footer-row {\n    display: flex;\n    justify-content: space-around;\n    padding-top: 1.5rem;\n  }\n\n  .sun-card-title {\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding-bottom: 2rem;\n    margin: 0;\n  }\n\n  .sun-card-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .sun-card-header .sun-card-text-subtitle {\n    font-size: 1.15rem;\n    font-weight: 400;\n    padding-bottom: 0.25rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-header .sun-card-text-time {\n    font-size: 1.85rem;\n    font-weight: 400;\n  }\n\n  .sun-card-footer .sun-card-text-subtitle {\n    font-size: 1.25rem;\n    font-weight: 400;\n    padding-bottom: 0.5rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-footer .sun-card-text-time {\n    font-size: 1.25rem;\n    font-weight: 500;\n  }\n\n  .sun-card-text-time-period {\n    font-size: 0.75rem;\n  }\n"])));

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
var Noon$8 = "Midi solaire";
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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
var SunCardContent = /*#__PURE__*/function () {
  function SunCardContent() {
    _classCallCheck(this, SunCardContent);
  }
  _createClass(SunCardContent, null, [{
    key: "generate",
    value: function generate(data, localization, config) {
      if (data !== null && data !== void 0 && data.error) {
        return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <ha-card>\n          ", "\n        </ha-card>\n      "])), this.generateError());
      }
      return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <ha-card>\n        <div class=\"sun-card ", "\">\n          ", "\n          ", "\n          ", "\n        </div>\n      </ha-card>\n    "])), config.darkMode ? '' : 'sun-card-light', this.generateHeader(data, localization, config), this.generateBody(data, config), this.generateFooter(data, localization, config));
    }
  }, {
    key: "generateHeader",
    value: function generateHeader(data, localization, config) {
      var title = config.title !== undefined ? x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <h1 class=\"sun-card-title\">", "</h1>\n    "])), config.title) : x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
      return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"sun-card-header\">\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n\n        </div>\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n      </div>\n    "])), title, localization.Sunrise, data !== null && data !== void 0 && data.times.sunrise ? this.generateTime(data.times.sunrise) : '', localization.Sunset, data !== null && data !== void 0 && data.times.sunset ? this.generateTime(data.times.sunset) : '');
    }
  }, {
    key: "generateBody",
    value: function generateBody(data, config) {
      var _data$sunPercentOverH, _data$sunPercentOverH2, _data$dawnProgressPer, _data$dawnProgressPer2, _data$dayProgressPerc, _data$dayProgressPerc2, _data$duskProgressPer, _data$duskProgressPer2, _data$sunPosition$x, _data$sunPosition$y, _data$sunPosition$x2, _data$sunPosition$y2;
      var sunID = Math.random().toString(36).replace('0.', '');
      var dawnID = Math.random().toString(36).replace('0.', '');
      var dayID = Math.random().toString(36).replace('0.', '');
      var duskID = Math.random().toString(36).replace('0.', '');
      var startColor = config.sunColor;
      var offset = 10;

      // Convert the start color to RGB
      var startRGB = startColor.match(/\w\w/g).map(function (hex) {
        return parseInt(hex, 16);
      });
      // Add the offset to each RGB component
      var endRGB = startRGB.map(function (c) {
        return c + offset;
      });
      // Convert the end color back to hexadecimal
      var endColor = '#' + endRGB.map(function (c) {
        return c.toString(16).padStart(2, '0');
      }).join('');

      //console.log(endColor); // #eeeb61

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

      return x(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-body\">\n        <svg viewBox=\"0 0 550 150\" xmlns=\"http://www.w3.org/2000/svg\">\n          <defs>\n          <style>\n            .sun-ext{fill:", ";opacity:0.51;isolation:isolate;}\n            .sun-int{fill:", ";stroke:", ";stroke-miterlimit:10;}\n            .line-main{stroke:var(--sun-card-lines)}\n            .ombre { filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5)); }\n            .ombre2 { filter: drop-shadow(-4px -1px 2px rgba(0, 0, 0, 0.4)); }\n          </style>\n          <!--\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"20%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n          -->\n            // aube - dawn\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n            \n            // jour - day\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#8ebeeb;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#8ebeeb;stop-opacity:1\"  />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n            \n            // cr\xE9puscule - dusk\n            <linearGradient id=\"", "\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\n              <stop offset=\"0%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:#393b78;stop-opacity:1\" />\n              <stop offset=\"", "%\" style=\"stop-color:rgb(0,0,0,0);stop-opacity:1\" />\n            </linearGradient>\n          </defs>\n          <path class=\"sun-card-sun-line line-main ombre2\" d=\"M5,146 C29,153 73,128 101,108 C276,-29 342,23 449,108 C473,123 509,150 545,146\" fill=\"none\" stroke=\"var(--sun-card-lines)\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M5,146 C29,153 73,128 101,108 L 5 108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M101,108 C276,-29 342,23 449,108 L 104,108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <path d=\"M449,108 C473,123 509,150 545,146 L 545 108\" fill=\"url(#", ")\" opacity=\"", "\" stroke=\"url(#", ")\" shape-rendering=\"geometricPrecision\" />\n          <line class=\"line-main\" x1=\"5\" y1=\"108\" x2=\"545\" y2=\"108\" />\n          <line class=\"line-main\" x1=\"101\" y1=\"25\" x2=\"101\" y2=\"100\" />\n          <line class=\"line-main\" x1=\"449\" y1=\"25\" x2=\"449\" y2=\"100\" />\n          <circle class=\"sun-ext ombre\" stroke=\"none\" shape-rendering=\"geometricPrecision\" cx=\"", "\" cy=\"", "\" r=\"21\" opacity=\"1\" />\n          <circle class=\"sun-int\" stroke=\"none\" shape-rendering=\"geometricPrecision\" cx=\"", "\" cy=\"", "\" r=\"16\" opacity=\"1\" />\n\n        </svg>\n      </div>\n    "])), endColor, config.sunColor, endColor, sunID, (_data$sunPercentOverH = data === null || data === void 0 ? void 0 : data.sunPercentOverHorizon) !== null && _data$sunPercentOverH !== void 0 ? _data$sunPercentOverH : 0, (_data$sunPercentOverH2 = data === null || data === void 0 ? void 0 : data.sunPercentOverHorizon) !== null && _data$sunPercentOverH2 !== void 0 ? _data$sunPercentOverH2 : 0, dawnID, (_data$dawnProgressPer = data === null || data === void 0 ? void 0 : data.dawnProgressPercent) !== null && _data$dawnProgressPer !== void 0 ? _data$dawnProgressPer : 0, (_data$dawnProgressPer2 = data === null || data === void 0 ? void 0 : data.dawnProgressPercent) !== null && _data$dawnProgressPer2 !== void 0 ? _data$dawnProgressPer2 : 0, dayID, (_data$dayProgressPerc = data === null || data === void 0 ? void 0 : data.dayProgressPercent) !== null && _data$dayProgressPerc !== void 0 ? _data$dayProgressPerc : 0, (_data$dayProgressPerc2 = data === null || data === void 0 ? void 0 : data.dayProgressPercent) !== null && _data$dayProgressPerc2 !== void 0 ? _data$dayProgressPerc2 : 0, duskID, (_data$duskProgressPer = data === null || data === void 0 ? void 0 : data.duskProgressPercent) !== null && _data$duskProgressPer !== void 0 ? _data$duskProgressPer : 0, (_data$duskProgressPer2 = data === null || data === void 0 ? void 0 : data.duskProgressPercent) !== null && _data$duskProgressPer2 !== void 0 ? _data$duskProgressPer2 : 0, dawnID, data !== null && data !== void 0 && data.dawnProgressPercent ? 1 : 0, dawnID, dayID, data !== null && data !== void 0 && data.dayProgressPercent ? 1 : 0, dayID, duskID, data !== null && data !== void 0 && data.duskProgressPercent ? 1 : 0, duskID, (_data$sunPosition$x = data === null || data === void 0 ? void 0 : data.sunPosition.x) !== null && _data$sunPosition$x !== void 0 ? _data$sunPosition$x : 0, (_data$sunPosition$y = data === null || data === void 0 ? void 0 : data.sunPosition.y) !== null && _data$sunPosition$y !== void 0 ? _data$sunPosition$y : 0, (_data$sunPosition$x2 = data === null || data === void 0 ? void 0 : data.sunPosition.x) !== null && _data$sunPosition$x2 !== void 0 ? _data$sunPosition$x2 : 0, (_data$sunPosition$y2 = data === null || data === void 0 ? void 0 : data.sunPosition.y) !== null && _data$sunPosition$y2 !== void 0 ? _data$sunPosition$y2 : 0);
    }
  }, {
    key: "generateError",
    value: function generateError() {
      return x(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <hui-error-card></hui-error-card>\n    "])));
    }
  }, {
    key: "generateFooter",
    value: function generateFooter(data, localization, config) {
      var upperRow = x(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-footer-row\">\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          ", "\n        </div>\n      </div>\n    "])), localization.Dawn, data !== null && data !== void 0 && data.times.dawn ? this.generateTime(data.times.dawn) : '', localization.Noon, data !== null && data !== void 0 && data.times.noon ? this.generateTime(data.times.noon) : '', localization.Dusk, data !== null && data !== void 0 && data.times.dusk ? this.generateTime(data.times.dusk) : '');
      var bottomRow = x(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([""])));
      if (config.showAzimuth || config.showElevation) {
        var _data$azimuth, _data$elevation;
        var azimuth = config.showAzimuth ? x(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          <span class=\"sun-card-dawn-time sun-card-text-time\">", "</span>\n        </div>\n      "])), localization.Azimuth, (_data$azimuth = data === null || data === void 0 ? void 0 : data.azimuth) !== null && _data$azimuth !== void 0 ? _data$azimuth : '') : x(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([""])));
        var elevation = config.showElevation ? x(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          <span class=\"sun-card-dawn-time sun-card-text-time\">", "</span>\n        </div>\n      "])), localization.Elevation, (_data$elevation = data === null || data === void 0 ? void 0 : data.elevation) !== null && _data$elevation !== void 0 ? _data$elevation : '') : x(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
        var daylength = config.showDayLength ? x(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-text-container\">\n          <span class=\"sun-card-text-subtitle\">", "</span>\n          <span class=\"sun-card-dawn-time sun-card-text-time\">\n          ", "\n          </span>\n        </div>\n      "])), localization.Daylength, data !== null && data !== void 0 && data.timeBetweenDuskAndDown ? data.timeBetweenDuskAndDown : '') : x(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([""])));
        bottomRow = x(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        <div class=\"sun-card-footer-row\">\n          ", "\n          ", "\n          ", "\n        </div>\n      "])), azimuth, elevation, daylength);
      }
      return x(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      <div class=\"sun-card-footer\">\n        ", "\n        ", "\n      </div>\n    "])), upperRow, bottomRow);
    }
  }, {
    key: "generateTime",
    value: function generateTime(time) {
      if (time.period) {
        return x(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        <span class=\"sun-card-text-time\">\n          ", " <span class=\"sun-card-text-time-period\">", "</span>\n        </span>\n      "])), time.time, time.period);
      }
      return x(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      <span class=\"sun-card-text-time\">", "</span>\n    "])), time.time);
    }
  }]);
  return SunCardContent;
}();

var ESunCardErrors = /*#__PURE__*/function (ESunCardErrors) {
  ESunCardErrors["SunIntegrationNotFound"] = "SunIntegrationNotFound";
  return ESunCardErrors;
}({});

var CARD_VERSION = '0.59.5';
console.info("%c  HOME-ASSISTANT-SUN-CARD-2 \n%c  Version ".concat(CARD_VERSION, "    "), 'color: orange; font-weight: bold; background: black', 'color: white; font-weight: bold; background: dimgray');
var SunCard = _decorate([e$1('sun-card')], function (_initialize, _LitElement) {
  var SunCard = /*#__PURE__*/function (_LitElement2) {
    _inherits(SunCard, _LitElement2);
    var _super = _createSuper(SunCard);
    function SunCard() {
      var _this;
      _classCallCheck(this, SunCard);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(SunCard);
  }(_LitElement);
  return {
    F: SunCard,
    d: [{
      kind: "field",
      "static": true,
      key: "cardType",
      value: function value() {
        return 'sun-card';
      }
    }, {
      kind: "field",
      "static": true,
      key: "cardName",
      value: function value() {
        return 'Sun Card';
      }
    }, {
      kind: "field",
      "static": true,
      key: "cardDescription",
      value: function value() {
        return 'Custom card that display a graph to track the sun position and related events';
      }
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
      kind: "field",
      key: "hasRendered",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      key: "lastHass",
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

      // Tix
    }, {
      kind: "method",
      key: "convertMinutestoHoursAndMinutes",
      value: function convertMinutestoHoursAndMinutes(minutes) {
        var cHours = Math.floor(minutes / 60);
        var cMinutes = minutes % 60;
        var total = cHours.toString() + ":" + cMinutes.toString();
        return total;
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
            (_errorElement$setConf = errorElement.setConfig) === null || _errorElement$setConf === void 0 ? void 0 : _errorElement$setConf.call(errorElement, {
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
