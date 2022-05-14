
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineUIManager = void 0;
var main_1 = __webpack_require__(/*! ../main */ "./javascript/construct3/main.js");
var EngineUIManager = /** @class */ (function () {
    function EngineUIManager() {
    }
    //todo make enum for all c3 functions!!!
    //todo maybe make actually functions for c3 functions
    EngineUIManager.SetTextSize = function (name, size) {
        main_1.Construct3.callFunction('SetTextSize', name, size);
    };
    EngineUIManager.UpdateSelectors = function (id, value) {
        main_1.Construct3.callFunction('UpdateSelectors', value, id);
    };
    //todo why i need x and y there?
    EngineUIManager.SetView = function (viewID, viewX, viewY) {
        main_1.Construct3.callFunction('SetView', viewID, viewX, viewY);
    };
    return EngineUIManager;
}());
exports.EngineUIManager = EngineUIManager;

