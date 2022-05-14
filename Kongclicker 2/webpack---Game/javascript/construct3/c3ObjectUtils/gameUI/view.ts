
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
exports.View = void 0;
var vector2_1 = __webpack_require__(/*! ../../../../src/data/vector2 */ "./src/data/vector2.ts");
var main_1 = __webpack_require__(/*! ../../main */ "./javascript/construct3/main.js");
var GUIElement_1 = __webpack_require__(/*! ./GUIElement */ "./javascript/construct3/c3ObjectUtils/gameUI/GUIElement.ts");
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View(storage, id, position) {
        var _this = _super.call(this, storage, GUIElement_1.GameUIElementType.View, id) || this;
        _this.Position = position;
        return _this;
    }
    Object.defineProperty(View.prototype, "WorldPosition", {
        get: function () {
            var viewPos = this.Position;
            var x = main_1.Construct3.globalVars.SYSTEM_VIEWPORT_WIDTH * viewPos.X + (main_1.Construct3.globalVars.SYSTEM_VIEWPORT_WIDTH / 2);
            var y = main_1.Construct3.globalVars.SYSTEM_VIEWPORT_HEIGHT * viewPos.Y + (main_1.Construct3.globalVars.SYSTEM_VIEWPORT_HEIGHT / 2);
            return new vector2_1.Vector2(x, y);
        },
        enumerable: false,
        configurable: true
    });
    return View;
}(GUIElement_1.GUIElement));
exports.View = View;

