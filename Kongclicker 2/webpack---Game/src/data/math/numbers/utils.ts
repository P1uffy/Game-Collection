
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abbreviate = exports.toSuperscript = exports.toSubscript = exports.toFixedLongScale = exports.toFixedEngineering = exports.toLongScale = exports.toEngineering = exports.fixMantissaOverflow = exports.formatHigherBaseWithCommas = exports.formatWithCommas = void 0;
var break_infinity_js_1 = __importDefault(__webpack_require__(/*! break_infinity.js */ "./node_modules/break_infinity.js/dist/break_infinity.esm.js"));
function commaSection(value, index) {
    if (index === 0) {
        return value.slice(-3);
    }
    return value.slice(-3 * (index + 1), -3 * index);
}
function addCommas(value) {
    return Array.from(Array(Math.ceil(value.length / 3))).map(function (_, i) { return commaSection(value, i); })
        .reverse()
        .join(",");
}
function formatWithCommas(value) {
    var decimalPointSplit = value.toString().split(".");
    decimalPointSplit[0] = decimalPointSplit[0].replace(/\d+$/g, addCommas);
    return decimalPointSplit.join(".");
}
exports.formatWithCommas = formatWithCommas;
function formatHigherBaseWithCommas(value) {
    var decimalPointSplit = value.toString().split(".");
    decimalPointSplit[0] = decimalPointSplit[0].replace(/[0-9A-Za-z]+$/g, addCommas);
    return decimalPointSplit.join(".");
}
exports.formatHigherBaseWithCommas = formatHigherBaseWithCommas;
/**
 * Fixes cases like (9.6e3, 0), which results in "10e3" (but we need "1e4" instead)
 * because toFixed rounds numbers to closest integer
 */
// eslint-disable-next-line max-params
function fixMantissaOverflow(value, places, threshold, powerOffset) {
    var pow10 = Math.pow(10, places);
    var isOverflowing = Math.round(value.mantissa * pow10) >= threshold * pow10;
    if (isOverflowing) {
        return break_infinity_js_1.default.fromMantissaExponent_noNormalize(1, value.exponent + powerOffset);
    }
    return value;
}
exports.fixMantissaOverflow = fixMantissaOverflow;
/**
 * Transforms 1-digit mantissa decimal into 3-digits mantissa decimal
 * For example: 1.5e5 => 150e3
 * Note, that it does so in 3 exponent increments, so 1.5e3 is still 1.5e3
 */
function toEngineering(value) {
    var exponentOffset = value.exponent % 3;
    return break_infinity_js_1.default.fromMantissaExponent_noNormalize(value.mantissa * Math.pow(10, exponentOffset), value.exponent - exponentOffset);
}
exports.toEngineering = toEngineering;
/**
 * Transforms 1-digit mantissa decimal into 6-digits mantissa decimal
 * For example: 1.5e10 => 15000e3
 * Note, that it does so in 6 exponent increments, so 1.5e6 is still 1.5e6
 */
function toLongScale(value) {
    // Give numbers between a thousand and a million exponent 3.
    var mod = value.exponent < 6 ? 3 : 6;
    var exponentOffset = value.exponent % mod;
    return break_infinity_js_1.default.fromMantissaExponent_noNormalize(value.mantissa * Math.pow(10, exponentOffset), value.exponent - exponentOffset);
}
exports.toLongScale = toLongScale;
function toFixedEngineering(value, places) {
    return fixMantissaOverflow(toEngineering(value), places, 1000, 3);
}
exports.toFixedEngineering = toFixedEngineering;
function toFixedLongScale(value, places) {
    var overflowPlaces = value.exponent < 6 ? 3 : 6;
    return fixMantissaOverflow(toLongScale(value), places, Math.pow(10, overflowPlaces), overflowPlaces);
}
exports.toFixedLongScale = toFixedLongScale;
var SUBSCRIPT_NUMBERS = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];
function toSubscript(value) {
    return value.toFixed(0).split("")
        .map(function (x) { return x === "-" ? "₋" : SUBSCRIPT_NUMBERS[parseInt(x)]; })
        .join("");
}
exports.toSubscript = toSubscript;
var SUPERSCRIPT_NUMBERS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
function toSuperscript(value) {
    return value.toFixed(0).split("")
        .map(function (x) { return x === '-' ? '⁻' : SUPERSCRIPT_NUMBERS[parseInt(x)]; })
        .join("");
}
exports.toSuperscript = toSuperscript;
var STANDARD_ABBREVIATIONS = [
    "K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
    "TDc", "QaDc", "QtDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
    "QaVg", "QtVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
    "QtTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QtQd",
    "SxQd", "SpQd", "OQd", "NQd", "Qi", "UQi", "DQi", "TQi", "QaQi", "QtQi", "SxQi",
    "SpQi", "OQi", "NQi", "Se", "USe", "DSe", "TSe", "QaSe", "QtSe", "SxSe", "SpSe",
    "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QtSt", "SxSt", "SpSt", "OSt",
    "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QtOg", "SxOg", "SpOg", "OOg", "NOg",
    "Nn", "UNn", "DNn", "TNn", "QaNn", "QtNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"
];
var STANDARD_PREFIXES = [
    ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "N"],
    ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Se", "St", "Og", "Nn"],
    ["", "Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"]
];
var STANDARD_PREFIXES_2 = ["", "MI-", "MC-", "NA-", "PC-", "FM-"];
function abbreviate(exp) {
    // Please, someone clean this code up eventually
    if (exp < STANDARD_ABBREVIATIONS.length) {
        return STANDARD_ABBREVIATIONS[exp];
    }
    var index2 = 0;
    var prefix = [STANDARD_PREFIXES[0][exp % 10]];
    var e = exp;
    while (e >= 10) {
        e = Math.floor(e / 10);
        prefix.push(STANDARD_PREFIXES[++index2 % 3][e % 10]);
    }
    index2 = Math.floor(index2 / 3);
    while (prefix.length % 3 !== 0) {
        prefix.push("");
    }
    var abbreviation = "";
    while (index2 >= 0) {
        abbreviation += prefix[index2 * 3] +
            prefix[index2 * 3 + 1] +
            prefix[index2 * 3 + 2] +
            STANDARD_PREFIXES_2[index2--];
    }
    abbreviation = abbreviation.replace(/-$/, "");
    return abbreviation
        .replace("UM", "M")
        .replace("UNA", "NA")
        .replace("UPC", "PC")
        .replace("UFM", "FM");
}
exports.abbreviate = abbreviate;

