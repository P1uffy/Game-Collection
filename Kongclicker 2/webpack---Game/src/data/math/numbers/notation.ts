
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notation = exports.Settings = void 0;
var break_infinity_js_1 = __importDefault(__webpack_require__(/*! break_infinity.js */ "./node_modules/break_infinity.js/dist/break_infinity.esm.js"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/data/math/numbers/utils.ts");
exports.Settings = {
    isInfinite: function (decimal) { return decimal.gte(break_infinity_js_1.default.MAX_VALUE); },
    exponentCommas: {
        show: true,
        min: 100000,
        max: 1000000000
    }
};
var Notation = /** @class */ (function () {
    function Notation() {
    }
    Notation.prototype.format = function (value, places, placesUnder1000) {
        if (places === void 0) { places = 0; }
        if (placesUnder1000 === void 0) { placesUnder1000 = 0; }
        if (typeof value === "number" && !Number.isFinite(value)) {
            return this.infinite;
        }
        var decimal = break_infinity_js_1.default.fromValue_noAlloc(value);
        if (decimal.exponent < -300) {
            return decimal.sign() < 0
                ? this.formatVerySmallNegativeDecimal(decimal.abs(), placesUnder1000)
                : this.formatVerySmallDecimal(decimal, placesUnder1000);
        }
        if (decimal.exponent < 3) {
            var number = decimal.toNumber();
            return number < 0
                ? this.formatNegativeUnder1000(Math.abs(number), placesUnder1000)
                : this.formatUnder1000(number, placesUnder1000);
        }
        if (exports.Settings.isInfinite(decimal.abs())) {
            return decimal.sign() < 0 ? this.negativeInfinite : this.infinite;
        }
        return decimal.sign() < 0
            ? this.formatNegativeDecimal(decimal.abs(), places)
            : this.formatDecimal(decimal, places);
    };
    Object.defineProperty(Notation.prototype, "negativeInfinite", {
        get: function () {
            return "-" + this.infinite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notation.prototype, "infinite", {
        get: function () {
            return "Infinite";
        },
        enumerable: false,
        configurable: true
    });
    Notation.prototype.formatVerySmallNegativeDecimal = function (value, places) {
        return "-" + this.formatVerySmallDecimal(value, places);
    };
    Notation.prototype.formatVerySmallDecimal = function (value, places) {
        // We switch to very small formatting as soon as 1e-300 due to precision loss,
        // so value.toNumber() might not be zero.
        return this.formatUnder1000(value.toNumber(), places);
    };
    Notation.prototype.formatNegativeUnder1000 = function (value, places) {
        return "-" + this.formatUnder1000(value, places);
    };
    Notation.prototype.formatUnder1000 = function (value, places) {
        return value.toFixed(places);
    };
    Notation.prototype.formatNegativeDecimal = function (value, places) {
        return "-" + this.formatDecimal(value, places);
    };
    Notation.prototype.formatExponent = function (exponent) {
        if (this.noSpecialFormatting(exponent)) {
            return exponent.toString();
        }
        if (this.showCommas(exponent)) {
            return utils_1.formatWithCommas(exponent);
        }
        return this.formatDecimal(new break_infinity_js_1.default(exponent), 3);
    };
    Notation.prototype.noSpecialFormatting = function (exponent) {
        return exponent < exports.Settings.exponentCommas.min;
    };
    Notation.prototype.showCommas = function (exponent) {
        return exports.Settings.exponentCommas.show && exponent < exports.Settings.exponentCommas.max;
    };
    return Notation;
}());
exports.Notation = Notation;

