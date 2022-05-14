
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
exports.Setting = exports.IntervalValidator = exports.ArrayValidator = void 0;
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var engine_1 = __webpack_require__(/*! ../../../javascript/construct3/engine */ "./javascript/construct3/engine.ts");
var utilsMath_1 = __webpack_require__(/*! ../../utils/utilsMath */ "./src/utils/utilsMath.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var ArrayValidator = /** @class */ (function () {
    function ArrayValidator(Values) {
        this.Values = Values;
    }
    ArrayValidator.prototype.CorrectValue = function (value) {
        if (this.Values.includes(value)) {
            return value;
        }
        else {
            throw new Error("Value " + value + " is not correct");
        }
    };
    ArrayValidator.prototype.IsValueCorrect = function (value) {
        return this.Values.includes(value);
    };
    return ArrayValidator;
}());
exports.ArrayValidator = ArrayValidator;
var IntervalValidator = /** @class */ (function () {
    function IntervalValidator(Interval, Inclusive, Normalize) {
        if (Inclusive === void 0) { Inclusive = true; }
        if (Normalize === void 0) { Normalize = true; }
        this.Interval = Interval;
        this.Inclusive = Inclusive;
        this.Normalize = Normalize;
    }
    IntervalValidator.prototype.CorrectValue = function (value) {
        if (this.Interval.IsValueIn(value, this.Inclusive)) {
            return value;
        }
        else {
            if (this.Normalize) {
                return utilsMath_1.Clamp(value, this.Interval);
            }
            else {
                throw new Error("Value " + value + " is not correct");
            }
        }
    };
    IntervalValidator.prototype.IsValueCorrect = function (value) {
        return this.Interval.IsValueIn(value, this.Inclusive);
    };
    return IntervalValidator;
}());
exports.IntervalValidator = IntervalValidator;
var Setting = /** @class */ (function (_super) {
    __extends(Setting, _super);
    function Setting(objectStorage, id, defaultValue, validator, onValueChanged) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Setting, id) || this;
        _this.DefaultValue = defaultValue;
        _this.Validator = validator;
        _this.OnValueChanged = onValueChanged;
        if (_this.Validator) {
            _this.Value = defaultValue;
        }
        else {
            _this.value = defaultValue;
        }
        return _this;
    }
    Object.defineProperty(Setting.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            if (this.Validator.IsValueCorrect(newValue)) {
                this.value = this.Validator.CorrectValue(newValue);
                if (this.OnValueChanged) {
                    this.OnValueChanged(this, newValue);
                }
            }
            else {
                throw new Error("Trying to set not possible value: " + newValue + " for option: " + this.ID);
            }
        },
        enumerable: false,
        configurable: true
    });
    //todo SetValueFromString()
    Setting.prototype.UpdateUI = function () {
        engine_1.Engine.UIManager.UpdateSelectors(this.ID, this.Value.toString());
    };
    Setting.prototype.InitFrom = function (_storage, oldSetting) {
        if (this.Validator.IsValueCorrect(oldSetting.Value)) {
            this.Value = oldSetting.Value;
        }
        this.UpdateUI();
    };
    __decorate([
        class_transformer_1.Exclude()
    ], Setting.prototype, "Validator", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Setting.prototype, "OnValueChanged", void 0);
    return Setting;
}(gameObject_1.GameObject));
exports.Setting = Setting;

