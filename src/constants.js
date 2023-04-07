"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var da_json_1 = require("./assets/localization/languages/da.json");
var de_json_1 = require("./assets/localization/languages/de.json");
var en_json_1 = require("./assets/localization/languages/en.json");
var es_json_1 = require("./assets/localization/languages/es.json");
var et_json_1 = require("./assets/localization/languages/et.json");
var fi_json_1 = require("./assets/localization/languages/fi.json");
var fr_json_1 = require("./assets/localization/languages/fr.json");
var hu_json_1 = require("./assets/localization/languages/hu.json");
var it_json_1 = require("./assets/localization/languages/it.json");
var nl_json_1 = require("./assets/localization/languages/nl.json");
var pl_json_1 = require("./assets/localization/languages/pl.json");
var pt_BR_json_1 = require("./assets/localization/languages/pt-BR.json");
var ru_json_1 = require("./assets/localization/languages/ru.json");
var sl_json_1 = require("./assets/localization/languages/sl.json");
var sv_json_1 = require("./assets/localization/languages/sv.json");
var Constants = exports.Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DEFAULT_CONFIG = {
        darkMode: true,
        language: 'en',
        showAzimuth: false,
        showElevation: false,
        timeFormat: '24h',
        sunColor: '#f9d05e'
    };
    Constants.EVENT_X_POSITIONS = {
        dayStart: 5,
        sunrise: 101,
        sunset: 449,
        dayEnd: 545
    };
    Constants.HORIZON_Y = 108;
    Constants.LOCALIZATION_LANGUAGES = {
        da: da_json_1.default,
        de: de_json_1.default,
        en: en_json_1.default,
        es: es_json_1.default,
        et: et_json_1.default,
        fi: fi_json_1.default,
        fr: fr_json_1.default,
        hu: hu_json_1.default,
        it: it_json_1.default,
        nl: nl_json_1.default,
        pl: pl_json_1.default,
        'pt-BR': pt_BR_json_1.default,
        ru: ru_json_1.default,
        sl: sl_json_1.default,
        sv: sv_json_1.default
    };
    Constants.SUN_RADIUS = 17;
    return Constants;
}());
