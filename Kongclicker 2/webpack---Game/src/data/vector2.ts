
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = exports.Size = exports.Vector2 = void 0;
var float_1 = __webpack_require__(/*! ./math/float */ "./src/data/math/float.ts");
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        this.X = x;
        this.Y = y;
    }
    return Vector2;
}());
exports.Vector2 = Vector2;
var Size = /** @class */ (function () {
    function Size(Width, Height) {
        this.Width = Width;
        this.Height = Height;
    }
    return Size;
}());
exports.Size = Size;
var Interval = /** @class */ (function () {
    function Interval(Min, Max, step, checkValue) {
        if (step === void 0) { step = 1; }
        if (checkValue === void 0) { checkValue = true; }
        this.Min = Min;
        this.Max = Max;
        this.Step = step;
        if (checkValue) {
            if (this.Min == this.Max) {
                throw new Error('Max is the same as Min');
            }
            if (this.Min > this.Max) {
                throw new Error('Max is smaller than Min');
            }
        }
    }
    Interval.prototype.IsValueIn = function (value, inclusive) {
        if (inclusive === void 0) { inclusive = true; }
        value = new float_1.Float(value);
        if (inclusive) {
            return value.IsMoreOrEqual(this.Min) && value.IsLessOrEqual(this.Max);
        }
        else {
            return value.IsMore(this.Min) && value.IsLess(this.Max);
        }
    };
    return Interval;
}());
exports.Interval = Interval;

