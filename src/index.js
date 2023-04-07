"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var lit_element_1 = require("lit-element");
var cardStyles_1 = require("./cardStyles");
var constants_1 = require("./constants");
var cardContent_1 = require("./cardContent");
var types_1 = require("./types");
var SunCard = function () {
    var _classDecorators = [(0, lit_element_1.customElement)('sun-card')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _config_decorators;
    var _config_initializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var SunCard = _classThis = /** @class */ (function (_super) {
        __extends(SunCard_1, _super);
        function SunCard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.config = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _config_initializers, {}));
            _this.data = __runInitializers(_this, _data_initializers, void 0);
            _this.hasRendered = false;
            return _this;
        }
        Object.defineProperty(SunCard_1.prototype, "hass", {
            set: function (hass) {
                this.lastHass = hass;
                if (!this.hasRendered) {
                    return;
                }
                this.processLastHass();
            },
            enumerable: false,
            configurable: true
        });
        SunCard_1.prototype.calculatePositionAndProgressesByTime = function (hass) {
            var _a;
            var sunLine = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('path');
            var sunrise = new Date(hass.states['sun.sun'].attributes.next_rising);
            var sunset = new Date(hass.states['sun.sun'].attributes.next_setting);
            var eventsAt = {
                dayStart: 0,
                sunrise: this.convertDateToMinutesSinceDayStarted(sunrise),
                sunset: this.convertDateToMinutesSinceDayStarted(sunset),
                dayEnd: (23 * 60) + 59
            };
            var now = new Date();
            var minutesSinceTodayStarted = this.convertDateToMinutesSinceDayStarted(now);
            // Dawn section position [0 - 105]
            var dawnSectionPosition = (Math.min(minutesSinceTodayStarted, eventsAt.sunrise) * 105) / eventsAt.sunrise;
            // Day section position [106 - 499]
            var minutesSinceDayStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunrise, 0);
            var daySectionPosition = (Math.min(minutesSinceDayStarted, eventsAt.sunset - eventsAt.sunrise) * (499 - 106)) / (eventsAt.sunset - eventsAt.sunrise);
            // Dusk section position [500 - 605]
            var minutesSinceDuskStarted = Math.max(minutesSinceTodayStarted - eventsAt.sunset, 0);
            var duskSectionPosition = (minutesSinceDuskStarted * (605 - 500)) / (eventsAt.dayEnd - eventsAt.sunset);
            var position = dawnSectionPosition + daySectionPosition + duskSectionPosition;
            var sunPosition = sunLine.getPointAtLength(position);
            var dawnProgressPercent = (100 * (sunPosition.x - constants_1.Constants.EVENT_X_POSITIONS.dayStart)) / (constants_1.Constants.EVENT_X_POSITIONS.sunrise - constants_1.Constants.EVENT_X_POSITIONS.dayStart);
            var dayProgressPercent = (100 * (sunPosition.x - constants_1.Constants.EVENT_X_POSITIONS.sunrise)) / (constants_1.Constants.EVENT_X_POSITIONS.sunset - constants_1.Constants.EVENT_X_POSITIONS.sunrise);
            var duskProgressPercent = (100 * (sunPosition.x - constants_1.Constants.EVENT_X_POSITIONS.sunset)) / (constants_1.Constants.EVENT_X_POSITIONS.dayEnd - constants_1.Constants.EVENT_X_POSITIONS.sunset);
            var sunYTop = sunPosition.y - constants_1.Constants.SUN_RADIUS;
            var yOver = constants_1.Constants.HORIZON_Y - sunYTop;
            var sunPercentOverHorizon = 0;
            if (yOver > 0) {
                sunPercentOverHorizon = Math.min((100 * yOver) / (2 * constants_1.Constants.SUN_RADIUS), 100);
            }
            return {
                dawnProgressPercent: dawnProgressPercent,
                dayProgressPercent: dayProgressPercent,
                duskProgressPercent: duskProgressPercent,
                sunPercentOverHorizon: sunPercentOverHorizon,
                sunPosition: { x: sunPosition.x, y: sunPosition.y }
            };
        };
        SunCard_1.prototype.convertDateToMinutesSinceDayStarted = function (date) {
            return (date.getHours() * 60) + date.getMinutes();
        };
        SunCard_1.prototype.parseTime = function (timeText, locale) {
            var regex = /\d{1,2}[:.]\d{1,2}|[AMP]+/g;
            var date = new Date(timeText);
            var _a = this.getConfig(), language = _a.language, timeFormat = _a.timeFormat;
            var result = date.toLocaleTimeString(locale !== null && locale !== void 0 ? locale : language, { hour12: timeFormat === '12h' }).match(regex);
            if (!result && !locale) {
                return this.parseTime(timeText, constants_1.Constants.DEFAULT_CONFIG.language);
            }
            var time = result[0], period = result[1];
            return { time: time, period: period };
        };
        SunCard_1.prototype.processLastHass = function () {
            var _a, _b, _c, _d, _e;
            if (!this.lastHass) {
                return;
            }
            if (!this.lastHass.states['sun.sun']) {
                return this.showError(types_1.ESunCardErrors.SunIntegrationNotFound);
            }
            this.config.darkMode = (_a = this.config.darkMode) !== null && _a !== void 0 ? _a : this.lastHass.themes.darkMode;
            this.config.language = (_d = (_b = this.config.language) !== null && _b !== void 0 ? _b : (_c = this.lastHass.locale) === null || _c === void 0 ? void 0 : _c.language) !== null && _d !== void 0 ? _d : this.lastHass.language;
            this.config.timeFormat = (_e = this.config.timeFormat) !== null && _e !== void 0 ? _e : this.getTimeFormatByLanguage(this.config.language);
            var times = {
                dawn: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dawn),
                dusk: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_dusk),
                noon: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_noon),
                sunrise: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_rising),
                sunset: this.parseTime(this.lastHass.states['sun.sun'].attributes.next_setting)
            };
            var _f = this.calculatePositionAndProgressesByTime(this.lastHass), dawnProgressPercent = _f.dawnProgressPercent, dayProgressPercent = _f.dayProgressPercent, duskProgressPercent = _f.duskProgressPercent, sunPercentOverHorizon = _f.sunPercentOverHorizon, sunPosition = _f.sunPosition;
            var data = {
                azimuth: this.lastHass.states['sun.sun'].attributes.azimuth,
                dawnProgressPercent: dawnProgressPercent,
                dayProgressPercent: dayProgressPercent,
                duskProgressPercent: duskProgressPercent,
                elevation: this.lastHass.states['sun.sun'].attributes.elevation,
                sunPercentOverHorizon: sunPercentOverHorizon,
                sunPosition: sunPosition,
                times: times
            };
            this.data = data;
        };
        SunCard_1.prototype.getConfig = function () {
            var _a, _b, _c, _d, _e;
            var config = {};
            config.darkMode = (_a = this.config.darkMode) !== null && _a !== void 0 ? _a : constants_1.Constants.DEFAULT_CONFIG.darkMode;
            config.language = (_b = this.config.language) !== null && _b !== void 0 ? _b : constants_1.Constants.DEFAULT_CONFIG.language;
            config.showAzimuth = (_c = this.config.showAzimuth) !== null && _c !== void 0 ? _c : constants_1.Constants.DEFAULT_CONFIG.showAzimuth;
            config.showElevation = (_d = this.config.showElevation) !== null && _d !== void 0 ? _d : constants_1.Constants.DEFAULT_CONFIG.showElevation;
            config.timeFormat = (_e = this.config.timeFormat) !== null && _e !== void 0 ? _e : constants_1.Constants.DEFAULT_CONFIG.timeFormat;
            config.title = this.config.title;
            config.sunColor = this.config.sunColor;
            if (!Object.keys(constants_1.Constants.LOCALIZATION_LANGUAGES).includes(config.language)) {
                config.language = constants_1.Constants.DEFAULT_CONFIG.language;
            }
            return config;
        };
        SunCard_1.prototype.getTimeFormatByLanguage = function (language) {
            var date = new Date();
            var time = date.toLocaleTimeString(language).toLocaleLowerCase();
            return time.includes('pm') || time.includes('am') ? '12h' : '24h';
        };
        SunCard_1.prototype.setConfig = function (config) {
            this.config = __assign({}, config);
        };
        SunCard_1.prototype.showError = function (error) {
            this.data = { error: error };
        };
        SunCard_1.prototype.render = function () {
            var config = this.getConfig();
            var language = config.language;
            var localization = constants_1.Constants.LOCALIZATION_LANGUAGES[language];
            return cardContent_1.SunCardContent.generate(this.data, localization, config);
        };
        SunCard_1.prototype.updated = function (changedProperties) {
            var _a, _b;
            _super.prototype.updated.call(this, changedProperties);
            if (!this.hasRendered) {
                this.hasRendered = true;
                this.processLastHass();
                return;
            }
            if (this.data.error) {
                var errorElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('hui-error-card');
                if (errorElement) {
                    var config = this.getConfig();
                    var language = config.language;
                    var localization = constants_1.Constants.LOCALIZATION_LANGUAGES[language];
                    var error = localization.errors[this.data.error];
                    (_b = errorElement.setConfig) === null || _b === void 0 ? void 0 : _b.call(errorElement, { error: error });
                    console.error(error);
                }
            }
        };
        Object.defineProperty(SunCard_1, "styles", {
            get: function () {
                return cardStyles_1.default;
            },
            enumerable: false,
            configurable: true
        });
        return SunCard_1;
    }(lit_element_1.LitElement));
    __setFunctionName(_classThis, "SunCard");
    (function () {
        _config_decorators = [(0, lit_element_1.state)()];
        _data_decorators = [(0, lit_element_1.state)()];
        __esDecorate(null, null, _config_decorators, { kind: "field", name: "config", static: false, private: false, access: { has: function (obj) { return "config" in obj; }, get: function (obj) { return obj.config; }, set: function (obj, value) { obj.config = value; } } }, _config_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } } }, _data_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        SunCard = _classThis = _classDescriptor.value;
    })();
    _classThis.cardType = 'sun-card';
    _classThis.cardName = 'Sun Card';
    _classThis.cardDescription = 'Custom card that display a graph to track the sun position and related events';
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SunCard = _classThis;
}();
window.customCards = window.customCards || [];
window.customCards.push({
    type: SunCard.cardType,
    name: SunCard.cardName,
    description: SunCard.cardDescription
});
