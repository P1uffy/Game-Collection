
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewManager = void 0;
var engine_1 = __webpack_require__(/*! ../../../javascript/construct3/engine */ "./javascript/construct3/engine.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var game_1 = __webpack_require__(/*! ../../game */ "./src/game.ts");
var main_1 = __webpack_require__(/*! ../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var overlay_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/gameUI/overlay */ "./javascript/construct3/c3ObjectUtils/gameUI/overlay.ts");
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var view_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/gameUI/view */ "./javascript/construct3/c3ObjectUtils/gameUI/view.ts");
var scrollbar_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/gameUI/scrollbar */ "./javascript/construct3/c3ObjectUtils/gameUI/scrollbar.ts");
var ViewManager = /** @class */ (function () {
    function ViewManager(currentView, views, overlays) {
        this.currentScrollbar = null;
        this.ViewsList = views;
        this.Overlays = overlays !== null && overlays !== void 0 ? overlays : [];
        if (currentView instanceof view_1.View) {
            this.currentView = this.GetView(currentView.ID);
        }
        else {
            this.currentView = this.GetView(currentView);
        }
    }
    Object.defineProperty(ViewManager.prototype, "CurrentView", {
        get: function () {
            return this.currentView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewManager.prototype, "CurrentScrollbar", {
        get: function () {
            return this.currentScrollbar;
        },
        enumerable: false,
        configurable: true
    });
    ViewManager.prototype.GetView = function (id) {
        for (var _i = 0, _a = this.ViewsList; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (tab.ID == id) {
                return tab;
            }
        }
        throw new Error("Tab with id/position: '" + id + "' was not found!");
    };
    ViewManager.prototype.SetView = function (id) {
        var _a;
        //todo temp solution
        if (typeof id != "string") {
            id = id.ID;
        }
        this.currentView = this.GetView(id);
        this.UpdateCamera();
        if (id.toString() == "BuildMode") {
            main_1.Construct3.callFunction("ToggleBuildMode", true);
            game_1.Managers.Fight.UpdateBuildModeInfo();
        }
        else if (id.toString() == "Menu") {
            main_1.Construct3.callFunction("ToggleBuildMode", false);
        }
        (_a = this.currentScrollbar) === null || _a === void 0 ? void 0 : _a.Reset();
        //await Construct3.callFunction("DoTick");
        game_1.SmartUIUpdate();
        // UIStorage.GetAllItemsOfType(Scrollbar).forEach((scrollbar) => scrollbar.Reset());
        if (content_1.UIStorage.IsItemOfTypeExists(scrollbar_1.Scrollbar, id)) {
            this.currentScrollbar = content_1.UIStorage.GetItemOfType(scrollbar_1.Scrollbar, id);
        }
        else {
            this.currentScrollbar = null;
        }
    };
    Object.defineProperty(ViewManager.prototype, "CurrentViewport", {
        get: function () {
            if (this.CurrentScrollbar) {
                return (new DOMRect(this.CurrentScrollbar.Rect.x, this.CurrentScrollbar.Rect.y, this.CurrentScrollbar.ViewportSize.Width, this.CurrentScrollbar.ViewportSize.Height));
            }
            else {
                return null;
            }
        },
        enumerable: false,
        configurable: true
    });
    ViewManager.prototype.UpdateCamera = function () {
        engine_1.Engine.UIManager.SetView(this.currentView.ID.toString(), this.currentView.Position.X, this.currentView.Position.Y);
        for (var _i = 0, _a = this.Overlays; _i < _a.length; _i++) {
            var overlay = _a[_i];
            if (overlay.IsViewConnected(this.currentView)) {
                overlay.MoveToView(this.currentView);
            }
        }
    };
    __decorate([
        class_transformer_1.Type(function () { return view_1.View; })
    ], ViewManager.prototype, "ViewsList", void 0);
    __decorate([
        class_transformer_1.Type(function () { return overlay_1.Overlay; })
    ], ViewManager.prototype, "Overlays", void 0);
    __decorate([
        class_transformer_1.Type(function () { return view_1.View; })
    ], ViewManager.prototype, "currentView", void 0);
    return ViewManager;
}());
exports.ViewManager = ViewManager;

