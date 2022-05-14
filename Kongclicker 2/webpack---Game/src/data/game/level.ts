
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var float_1 = __webpack_require__(/*! ../math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var gameData_1 = __webpack_require__(/*! ./gameData */ "./src/data/game/gameData.ts");
var Level = /** @class */ (function () {
    function Level(value, valueMax) {
        this.value = new float_1.Float(0);
        this.Value = new float_1.Float(value);
        if (valueMax) {
            this.valueMaxData = new gameData_1.GameData("MaxLevel", 0);
            this.ValueMax = new float_1.Float(valueMax);
        }
        else {
            this.valueMaxData = null;
        }
    }
    Level.prototype.Reset = function () {
        this.value = new float_1.Float(0);
    };
    Object.defineProperty(Level.prototype, "IsMaxed", {
        get: function () {
            return (this.valueMaxData ? this.value.IsEqual(this.valueMaxData.Value) : false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            if (this.valueMaxData ? newValue.IsLessOrEqual(this.valueMaxData.Value) : true) {
                this.value = newValue;
            }
            else {
                throw new Error("Trying to set level (" + newValue + ") more than max level (" + this.valueMaxData + ")");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "ValueMax", {
        get: function () {
            return (this.valueMaxData ? this.valueMaxData.Value : null);
        },
        set: function (value) {
            if (this.valueMaxData && value) {
                this.valueMaxData.BaseValue = value;
            }
            else {
                throw new Error("Trying to set max level data to value, but max level data or value is null");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "CanLevelUpCount", {
        get: function () {
            if (this.ValueMax) {
                return float_1.Float.Minus(this.ValueMax, this.Value);
            }
            else {
                return float_1.Float.MAX_VALUE_NUMBER;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "IsMoreThanZero", {
        get: function () {
            return this.value.IsMore(0);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Level.prototype, "value", void 0);
    __decorate([
        class_transformer_1.Type(function () { return gameData_1.GameData; })
    ], Level.prototype, "valueMaxData", void 0);
    return Level;
}());
exports.Level = Level;

