
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressionCalculator = void 0;
var progression_1 = __webpack_require__(/*! ../progression */ "./src/data/math/progression.ts");
var valueCalc_1 = __webpack_require__(/*! ../valueCalc */ "./src/data/math/valueCalc.ts");
var ProgressionCalculator = /** @class */ (function (_super) {
    __extends(ProgressionCalculator, _super);
    function ProgressionCalculator(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        return _this;
    }
    ProgressionCalculator.prototype.GetElement = function (first, step, n) {
        return new progression_1.Progression(this.type, first, step).GetElement(n);
    };
    ProgressionCalculator.prototype.GetNextElement = function (first, step) {
        return new progression_1.Progression(this.type, first, step).GetElement(2);
    };
    ProgressionCalculator.prototype.GetSum = function (first, step, n) {
        return new progression_1.Progression(this.type, first, step).GetSum(n);
    };
    return ProgressionCalculator;
}(valueCalc_1.ValueCalc));
exports.ProgressionCalculator = ProgressionCalculator;

