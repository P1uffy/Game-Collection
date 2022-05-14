
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
exports.Overlay = void 0;
var utilsGUI_1 = __webpack_require__(/*! ../utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var vector2_1 = __webpack_require__(/*! ../../../../src/data/vector2 */ "./src/data/vector2.ts");
var GUIElement_1 = __webpack_require__(/*! ./GUIElement */ "./javascript/construct3/c3ObjectUtils/gameUI/GUIElement.ts");
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay(storage, id, overlaySize, overlayView, connectedViews) {
        var _this = _super.call(this, storage, GUIElement_1.GameUIElementType.Overlay, id) || this;
        _this.OverlaySize = overlaySize;
        _this.OverlayView = overlayView;
        _this.CurrentView = overlayView;
        _this.ConnectedViews = connectedViews;
        _this.IsElementsSetup = false;
        _this.Elements = _this.FindAllElements();
        return _this;
    }
    Overlay.prototype.IsViewConnected = function (view) {
        for (var _i = 0, _a = this.ConnectedViews; _i < _a.length; _i++) {
            var connectedView = _a[_i];
            if (view.ID == connectedView.ID) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(Overlay.prototype, "WorldPosition", {
        get: function () {
            return this.OverlayView.WorldPosition;
        },
        enumerable: false,
        configurable: true
    });
    Overlay.prototype.GetRelativePosition = function (elem) {
        var x = elem.x - this.WorldPosition.X;
        var y = elem.y - this.WorldPosition.Y;
        return new vector2_1.Vector2(x, y);
    };
    Overlay.prototype.UpdateElementRelativePosition = function (elem) {
        var relativePos = this.GetRelativePosition(elem);
        elem.c_overlayRelativeX = relativePos.X;
        elem.c_overlayRelativeY = relativePos.Y;
    };
    Overlay.prototype.UpdateElementPosition = function (view, elem) {
        elem.x = view.WorldPosition.X + elem.c_overlayRelativeX;
        elem.y = view.WorldPosition.Y + elem.c_overlayRelativeY;
    };
    Overlay.prototype.GetViewportRect = function () {
        var x = this.OverlayView.WorldPosition.X - (this.OverlaySize.X / 2);
        var y = this.OverlayView.WorldPosition.Y - (this.OverlaySize.Y / 2);
        return new DOMRect(x, y, this.OverlaySize.X, this.OverlaySize.Y);
    };
    Overlay.prototype.FindAllElements = function () {
        return utilsGUI_1.FindAllInRect(this.GetViewportRect());
    };
    Overlay.prototype.SetupElements = function () {
        if (this.Elements.length == 0) {
            this.Elements = this.FindAllElements();
        }
        for (var _i = 0, _a = this.Elements; _i < _a.length; _i++) {
            var elem = _a[_i];
            this.UpdateElementRelativePosition(elem);
        }
        this.IsElementsSetup = true;
    };
    Overlay.prototype.MoveToView = function (view) {
        if (this.IsElementsSetup) {
            for (var _i = 0, _a = this.Elements; _i < _a.length; _i++) {
                var elem = _a[_i];
                this.UpdateElementPosition(view, elem);
            }
            this.CurrentView = view;
        }
        else {
            throw new Error("Elements was not setup for Overlay '" + this.ID + "', elements: " + this.Elements.length);
        }
    };
    return Overlay;
}(GUIElement_1.GUIElement));
exports.Overlay = Overlay;

