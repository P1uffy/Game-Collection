
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUIElement = exports.GameUIElementType = void 0;
var GameUIElementType;
(function (GameUIElementType) {
    GameUIElementType["Scrollbar"] = "Scrollbar";
    GameUIElementType["Overlay"] = "Overlay";
    GameUIElementType["View"] = "View";
})(GameUIElementType = exports.GameUIElementType || (exports.GameUIElementType = {}));
var GUIElement = /** @class */ (function () {
    function GUIElement(storage, classID, id) {
        this.ClassID = classID;
        this.ID = id;
        if (storage) {
            storage.AddItem(this);
        }
    }
    return GUIElement;
}());
exports.GUIElement = GUIElement;

