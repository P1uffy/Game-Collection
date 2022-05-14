
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var main_1 = __webpack_require__(/*! ./main */ "./javascript/construct3/main.js");
var engineUIManager_1 = __webpack_require__(/*! ./engineManagers/engineUIManager */ "./javascript/construct3/engineManagers/engineUIManager.ts");
var engineStorage_1 = __webpack_require__(/*! ./engineManagers/engineStorage */ "./javascript/construct3/engineManagers/engineStorage.ts");
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Object.defineProperty(Engine, "Storage", {
        get: function () {
            return engineStorage_1.EngineStorage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engine, "UIManager", {
        get: function () {
            return engineUIManager_1.EngineUIManager;
        },
        enumerable: false,
        configurable: true
    });
    Engine.ToggleFullscreen = function () {
        main_1.Construct3.callFunction('ToggleFullscreen');
    };
    return Engine;
}());
exports.Engine = Engine;

