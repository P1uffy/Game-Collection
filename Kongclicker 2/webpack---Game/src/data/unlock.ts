
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unlock = void 0;
var gameObject_1 = __webpack_require__(/*! ../game/gameObject */ "./src/game/gameObject.ts");
var event_1 = __webpack_require__(/*! ../game/managers/eventSystem/event */ "./src/game/managers/eventSystem/event.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
//todo короче, сделать класс Condition, и сделать ConditionalUnlock, которому ещё можно будет настроить автоапдейт
// это по сути класс достижений
var Unlock = /** @class */ (function (_super) {
    __extends(Unlock, _super);
    function Unlock(objectStorage, id, isUnlocked, onToggledEvent) {
        if (isUnlocked === void 0) { isUnlocked = false; }
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Unlock, id) || this;
        _this.Events = {
            OnToggled: new event_1.GameEvent(),
        };
        _this.unlocked = isUnlocked;
        _this.OnToggled = onToggledEvent;
        _this.baseUnlocked = _this.unlocked;
        return _this;
    }
    Unlock.prototype.Reset = function () {
        this.Toggle(this.baseUnlocked);
    };
    Object.defineProperty(Unlock.prototype, "IsUnlocked", {
        get: function () {
            return this.unlocked;
        },
        enumerable: false,
        configurable: true
    });
    Unlock.prototype.Toggle = function (unlocked, throwExceptionIfAlreadySet) {
        if (throwExceptionIfAlreadySet === void 0) { throwExceptionIfAlreadySet = false; }
        if (this.unlocked == unlocked && throwExceptionIfAlreadySet) {
            throw new Error("Unlock '" + this.ID + "' already set to '" + unlocked + "'");
        }
        else {
            var isUnlockedBefore = this.unlocked;
            this.unlocked = unlocked;
            if (this.OnToggled) {
                this.OnToggled.OnEvent(unlocked, isUnlockedBefore, this);
            }
            this.Events.OnToggled.Trigger(this, {
                IsUnlocked: this.unlocked,
                IsUnlockedBefore: isUnlockedBefore
            });
        }
    };
    Unlock.prototype.InitFrom = function (_storage, oldUnlock) {
        this.Toggle(oldUnlock.unlocked);
    };
    __decorate([
        class_transformer_1.Exclude()
    ], Unlock.prototype, "OnToggled", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Unlock.prototype, "baseUnlocked", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Unlock.prototype, "Events", void 0);
    return Unlock;
}(gameObject_1.GameObject));
exports.Unlock = Unlock;

