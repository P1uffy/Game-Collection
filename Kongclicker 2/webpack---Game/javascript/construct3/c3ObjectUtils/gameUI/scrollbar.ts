
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
exports.Scrollbar = void 0;
var main_1 = __webpack_require__(/*! ../../main */ "./javascript/construct3/main.js");
var utilsMath_1 = __webpack_require__(/*! ../../../../src/utils/utilsMath */ "./src/utils/utilsMath.ts");
var utilsGUI_1 = __webpack_require__(/*! ../utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var vector2_1 = __webpack_require__(/*! ../../../../src/data/vector2 */ "./src/data/vector2.ts");
var GUIElement_1 = __webpack_require__(/*! ./GUIElement */ "./javascript/construct3/c3ObjectUtils/gameUI/GUIElement.ts");
var Scrollbar = /** @class */ (function (_super) {
    __extends(Scrollbar, _super);
    function Scrollbar(storage, id, rect, viewportSize) {
        var _this = _super.call(this, storage, GUIElement_1.GameUIElementType.Scrollbar, id) || this;
        _this.Data = {
            ShowScrollbar: false,
            AllElementsTop: 0,
            AllElementsBottom: 0,
            VisibleElementsTop: 0,
            VisibleElementsBottom: 0,
        };
        _this.Rect = rect;
        _this.ViewportSize = viewportSize;
        _this.AllElements = [];
        _this.VisibleElements = [];
        var slider = main_1.Construct3.objects.ScrollbarSlider.getAllInstances()
            .find(function (obj) { return obj.instVars.ID == _this.ID; });
        if (slider) {
            _this.Slider = slider;
        }
        else
            throw new Error("Slider with id '" + _this.ID + "' was not found");
        var back = main_1.Construct3.objects.NPElements.getAllInstances()
            .find(function (obj) { return obj.instVars.id_npe == _this.ID; });
        if (back) {
            _this.Back = back;
        }
        else
            throw new Error("Slider with id '" + _this.ID + "' was not found");
        _this.UpdateAllElementsData();
        return _this;
    }
    Scrollbar.prototype.UpdateAllElementsData = function () {
        // this.AllElements = this.FindAllElements();
        // this.AllElements.forEach((item) => item.c_isConnectedToScrollBar = true);
        //
        // if (this.AllElements.length > 0) {
        //     this.Data.AllElementsTop = (this.AllElements
        //         .sort((a, b) => a.c_baseY - b.c_baseY)[0].c_baseY);
        //
        //     this.Data.AllElementsBottom = (this.AllElements
        //         .sort((a, b) => (a.c_baseY - b.c_baseY) * -1)[0].c_baseY);
        // }
        this.AllElements = this.FindAllElements();
        this.AllElements.forEach(function (item) { return item.c_isConnectedToScrollBar = true; });
        if (this.AllElements.length > 0) {
            this.Data.AllElementsTop = (this.AllElements
                .sort(function (a, b) { return a.c_baseY - b.c_baseY; })[0].c_baseY);
            this.Data.AllElementsBottom = (this.AllElements
                .sort(function (a, b) { return (a.c_baseY - b.c_baseY) * -1; })[0].c_baseY);
        }
    };
    Scrollbar.prototype.FindAllElements = function () {
        return utilsGUI_1.FindAllInRect(this.Rect, false);
    };
    Scrollbar.prototype.GetVisibleElements = function () {
        return this.AllElements;
        // let elements = [];
        // for (const elem of this.AllElements) {
        //     if (elem.isVisible) {
        //         elements.push(elem);
        //     }
        // }
        //
        // return elements;
    };
    //todo мб сохранять позицию скроллбара??? так как мне приходится её ресетать
    Scrollbar.prototype.UpdateVisibleElementsData = function () {
        this.VisibleElements = this.GetVisibleElements();
        if (this.VisibleElements.length > 0) {
            this.Data.VisibleElementsTop = (this.VisibleElements
                .sort(function (a, b) {
                return a.c_baseRect.top - b.c_baseRect.top;
            })[0].c_baseRect.top);
            this.Data.VisibleElementsBottom = (this.VisibleElements
                .sort(function (a, b) {
                return (a.c_baseRect.bottom - b.c_baseRect.bottom) * -1;
            })[0].c_baseRect.bottom);
            var viewport = new DOMRect(this.Rect.x, this.Rect.y, this.ViewportSize.Width, this.ViewportSize.Height);
            for (var _i = 0, _a = this.VisibleElements; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!utilsGUI_1.IsPosInRect(new vector2_1.Vector2(item.x, item.c_baseRect.bottom), viewport)) {
                    this.Data.ShowScrollbar = true;
                    return;
                }
            }
            this.Data.ShowScrollbar = false;
        }
    };
    Object.defineProperty(Scrollbar.prototype, "SliderHeight", {
        get: function () {
            return this.Slider.getBoundingBox().height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "BackTop", {
        get: function () {
            return this.Back.getBoundingBox().top;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "BackBottom", {
        get: function () {
            return this.Back.getBoundingBox().bottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "BottomSliderY", {
        get: function () {
            return this.BackBottom - (this.SliderHeight / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "TopSliderY", {
        get: function () {
            return this.BackTop + (this.SliderHeight / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "AllElementsTop", {
        get: function () {
            return this.Data.AllElementsTop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "AllElementsBottom", {
        get: function () {
            return this.Data.AllElementsBottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "VisibleElementsTop", {
        get: function () {
            return this.Data.VisibleElementsTop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "VisibleElementsBottom", {
        get: function () {
            return this.Data.VisibleElementsBottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "Progress", {
        get: function () {
            return (this.Slider.y - this.TopSliderY) / (this.BottomSliderY - this.TopSliderY) * 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scrollbar.prototype, "OffsetY", {
        get: function () {
            return (this.VisibleElementsBottom - this.VisibleElementsTop - (this.ViewportSize.Height - 120)) * this.Progress / 100;
        },
        enumerable: false,
        configurable: true
    });
    Scrollbar.prototype.Update = function () {
        if (!this.Data.ShowScrollbar) {
            //this.Back.isVisible = false;
            this.Slider.isVisible = false;
            for (var _i = 0, _a = this.VisibleElements; _i < _a.length; _i++) {
                var elem = _a[_i];
                elem.y = elem.c_baseY;
            }
        }
        else {
            this.Slider.y = utilsMath_1.Clamp(this.Slider.y, new vector2_1.Interval(this.TopSliderY, this.BottomSliderY, 1, false));
            //this.Back.isVisible = true;
            this.Slider.isVisible = true;
            for (var _b = 0, _c = this.VisibleElements; _b < _c.length; _b++) {
                var elem = _c[_b];
                elem.y = elem.c_baseY - this.OffsetY;
            }
        }
    };
    Scrollbar.prototype.Reset = function () {
        this.Slider.y = this.TopSliderY;
        this.Update();
    };
    return Scrollbar;
}(GUIElement_1.GUIElement));
exports.Scrollbar = Scrollbar;

