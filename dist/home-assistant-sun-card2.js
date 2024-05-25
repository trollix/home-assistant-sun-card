function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _createClass(e, r, t) {
  return Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _identity(t) {
  return t;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
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

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$2=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$2.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$2.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$2=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$1,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$1(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+h,n=`<${o}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.S(l()),this.S(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.1.3");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.5");

var _templateObject;
i$2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .sun-card {\n    --sun-card-lines: #464646;\n    --sun-card-text-color: #fff;\n    --sun-card-subtitle-color: #fff;\n\n    color: var(--sun-card-text-color);\n    padding: 1rem;\n  }\n\n  .sun-card-body {\n    padding-top: 0.5rem;\n  }\n\n  .sun-card.sun-card-light {\n    --sun-card-lines: #ececec;\n    --sun-card-text-color: #000;\n    --sun-card-subtitle-color: #828282;\n  }\n\n  .sun-card-header {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  .sun-card-footer .sun-card-footer-row {\n    display: flex;\n    justify-content: space-around;\n    padding-top: 1.5rem;\n  }\n\n  .sun-card-title {\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding-bottom: 2rem;\n    margin: 0;\n  }\n\n  .sun-card-text-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .sun-card-header .sun-card-text-subtitle {\n    font-size: 1.15rem;\n    font-weight: 400;\n    padding-bottom: 0.25rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-header .sun-card-text-time {\n    font-size: 1.85rem;\n    font-weight: 400;\n  }\n\n  .sun-card-footer .sun-card-text-subtitle {\n    font-size: 1.15rem;\n    font-weight: 400;\n    padding-bottom: 0.5rem;\n    color: var(--sun-card-subtitle-color);\n  }\n\n  .sun-card-footer .sun-card-text-time {\n    font-size: 1.25rem;\n    font-weight: 500;\n  }\n\n  .sun-card-text-time-period {\n    font-size: 0.75rem;\n  }\n"])));

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

var name = "homeassistant-sun-card-2";
var version = "0.75.17";

var _initClass;
console.info("%c  ".concat(name.toUpperCase(), "  %c  Version ").concat(version, "  "), 'color: white; font-weight: bold; background: crimson', 'color: #000; font-weight: bold; background: #ddd');
var _SunCard;
new ( /*#__PURE__*/function (_identity2) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    (_this = _callSuper(this, _class, [_SunCard]), _defineProperty(_assertThisInitialized(_this), "cardType", 'sun-card'), _defineProperty(_assertThisInitialized(_this), "cardName", 'Sun Card'), _defineProperty(_assertThisInitialized(_this), "cardDescription", 'Custom card that display a graph to track the sun position and related events')), _initClass();
    return _this;
  }
  _inherits(_class, _identity2);
  return _createClass(_class);
}(_identity))();
window.customCards = window.customCards || [];
window.customCards.push({
  type: _SunCard.cardType,
  name: _SunCard.cardName,
  description: _SunCard.cardDescription
});

export { _SunCard as SunCard };
