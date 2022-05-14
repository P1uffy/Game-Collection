
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percent = void 0;
var float_1 = __webpack_require__(/*! ./float */ "./src/data/math/float.ts");
var Percent = /** @class */ (function () {
    function Percent(percent) {
        this.classID = this.constructor.name;
        this.percent = new float_1.Float(percent);
    }
    Object.defineProperty(Percent.prototype, "Percent", {
        get: function () {
            return this.percent;
        },
        set: function (value) {
            this.percent = value;
        },
        enumerable: false,
        configurable: true
    });
    Percent.GetValueWithPercent = function (value, percent) {
        percent = new float_1.Float(percent);
        value = new float_1.Float(value);
        if (percent.IsEqual(0)) {
            return new float_1.Float(value);
        }
        else {
            var multiplier = float_1.Float.Divide(percent, 100);
            return value.Plus(float_1.Float.Times(value, multiplier));
        }
    };
    Percent.GetValuePercent = function (value, percent) {
        percent = new float_1.Float(percent);
        value = new float_1.Float(value);
        var multiplier = float_1.Float.Divide(percent, 100);
        return float_1.Float.Times(value, multiplier);
    };
    Percent.GetValueWithoutPercent = function (value, percent) {
        percent = new float_1.Float(percent);
        value = new float_1.Float(value);
        if (percent.IsEqual(0)) {
            return value;
        }
        else {
            var multiplier = float_1.Float.Divide(percent, 100);
            return value.Minus(float_1.Float.Times(value, multiplier));
        }
    };
    Percent.prototype.GetValuePercent = function (value) {
        return Percent.GetValuePercent(value, this.percent);
    };
    Percent.prototype.GetValueWithPercent = function (value) {
        return Percent.GetValueWithPercent(value, this.percent);
    };
    Percent.prototype.GetValueWithoutPercent = function (value) {
        return Percent.GetValueWithoutPercent(value, this.percent);
    };
    return Percent;
}());
exports.Percent = Percent;

