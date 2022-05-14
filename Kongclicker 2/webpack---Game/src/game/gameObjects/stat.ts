
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
exports.Stat = void 0;
var gameData_1 = __webpack_require__(/*! ../../data/game/gameData */ "./src/data/game/gameData.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var game_1 = __webpack_require__(/*! ../../game */ "./src/game.ts");
var event_1 = __webpack_require__(/*! ../managers/eventSystem/event */ "./src/game/managers/eventSystem/event.ts");
var Stat = /** @class */ (function (_super) {
    __extends(Stat, _super);
    function Stat(objectStorage, id, value, maxValue, onMaxValueExceeded) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Stat, id) || this;
        _this.Events = {
            OnChanged: new event_1.GameEvent()
        };
        _this.value = new float_1.Float(value);
        _this.baseValue = _this.value;
        if (maxValue && onMaxValueExceeded) {
            _this.MaxValueData = new gameData_1.GameData('MaxValue', maxValue);
            _this.onMaxValueExceeded = onMaxValueExceeded;
        }
        return _this;
    }
    Stat.prototype.Reset = function () {
        this.value = this.baseValue;
    };
    Object.defineProperty(Stat.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            var before = this.value;
            this.value = value;
            var after = this.value;
            this.Events.OnChanged.Trigger(this, {
                before: before,
                after: after,
                diff: after.Minus(before)
            });
            this.CheckValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Stat.prototype.Add = function (value) {
        this.Value = float_1.Float.Plus(this.value, value);
        game_1.SmartUIUpdate();
    };
    Stat.prototype.Subtract = function (value) {
        this.Value = float_1.Float.Minus(this.value, value);
        game_1.SmartUIUpdate();
    };
    Object.defineProperty(Stat.prototype, "MaxValue", {
        get: function () {
            return (this.HasMaxValue() ? this.MaxValueData.Value : null);
        },
        enumerable: false,
        configurable: true
    });
    Stat.prototype.HasMaxValue = function () {
        return (this.MaxValueData != undefined && this.onMaxValueExceeded != undefined);
    };
    Stat.prototype.CheckValue = function (value) {
        value = new float_1.Float(value);
        var diff = float_1.Float.Minus(value, this.Value);
        if (this.onMaxValueExceeded) {
            if (value.IsMore(this.MaxValue)) {
                this.onMaxValueExceeded(diff);
            }
        }
    };
    Stat.prototype.InitFrom = function (_storage, oldStat) {
        this.Value = oldStat.Value;
    };
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Stat.prototype, "value", void 0);
    __decorate([
        class_transformer_1.Type(function () { return gameData_1.GameData; })
    ], Stat.prototype, "MaxValueData", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Stat.prototype, "baseValue", void 0);
    return Stat;
}(gameObject_1.GameObject));
exports.Stat = Stat;

