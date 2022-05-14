
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
exports.StandardNotation = void 0;
var notation_1 = __webpack_require__(/*! ./notation */ "./src/data/math/numbers/notation.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/data/math/numbers/utils.ts");
var StandardNotation = /** @class */ (function (_super) {
    __extends(StandardNotation, _super);
    function StandardNotation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Standard";
        return _this;
    }
    StandardNotation.prototype.formatDecimal = function (value, places) {
        var engineering = utils_1.toFixedEngineering(value, places);
        var mantissa = engineering.mantissa.toFixed(places);
        var abbreviation = utils_1.abbreviate(Math.floor(engineering.exponent / 3) - 1);
        return mantissa + " " + abbreviation;
    };
    return StandardNotation;
}(notation_1.Notation));
exports.StandardNotation = StandardNotation;

