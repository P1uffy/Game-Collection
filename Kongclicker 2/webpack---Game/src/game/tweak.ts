
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
exports.Tweak = exports.TweakPriority = exports.TweakFunctionWithPercent = exports.TweakFunctionDivide = exports.TweakFunctionTimes = exports.TweakFunctionMinus = exports.TweakFunctionPlus = exports.TweakFunction = void 0;
var valueCalc_1 = __webpack_require__(/*! ../data/math/valueCalc */ "./src/data/math/valueCalc.ts");
var float_1 = __webpack_require__(/*! ../data/math/float */ "./src/data/math/float.ts");
var percent_1 = __webpack_require__(/*! ../data/math/percent */ "./src/data/math/percent.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
//todo make separate class for TweakFunctions
var TweakFunction = /** @class */ (function () {
    function TweakFunction() {
    }
    return TweakFunction;
}());
exports.TweakFunction = TweakFunction;
var TweakFunctionPlus = /** @class */ (function (_super) {
    __extends(TweakFunctionPlus, _super);
    function TweakFunctionPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Priority = TweakPriority.PlusOrMinus;
        return _this;
    }
    TweakFunctionPlus.prototype.Get = function (value, tweakValue, _tweak) {
        return float_1.Float.Plus(value, tweakValue);
    };
    return TweakFunctionPlus;
}(TweakFunction));
exports.TweakFunctionPlus = TweakFunctionPlus;
var TweakFunctionMinus = /** @class */ (function (_super) {
    __extends(TweakFunctionMinus, _super);
    function TweakFunctionMinus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Priority = TweakPriority.PlusOrMinus;
        return _this;
    }
    TweakFunctionMinus.prototype.Get = function (value, tweakValue, _tweak) {
        return float_1.Float.Minus(value, tweakValue);
    };
    return TweakFunctionMinus;
}(TweakFunction));
exports.TweakFunctionMinus = TweakFunctionMinus;
var TweakFunctionTimes = /** @class */ (function (_super) {
    __extends(TweakFunctionTimes, _super);
    function TweakFunctionTimes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Priority = TweakPriority.Multiply;
        return _this;
    }
    TweakFunctionTimes.prototype.Get = function (value, tweakValue, _tweak) {
        return float_1.Float.Times(value, tweakValue);
    };
    return TweakFunctionTimes;
}(TweakFunction));
exports.TweakFunctionTimes = TweakFunctionTimes;
var TweakFunctionDivide = /** @class */ (function (_super) {
    __extends(TweakFunctionDivide, _super);
    function TweakFunctionDivide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Priority = TweakPriority.Multiply;
        return _this;
    }
    TweakFunctionDivide.prototype.Get = function (value, tweakValue, _tweak) {
        return float_1.Float.Divide(value, tweakValue);
    };
    return TweakFunctionDivide;
}(TweakFunction));
exports.TweakFunctionDivide = TweakFunctionDivide;
var TweakFunctionWithPercent = /** @class */ (function () {
    function TweakFunctionWithPercent() {
        this.Priority = TweakPriority.Percent;
    }
    TweakFunctionWithPercent.prototype.Get = function (value, tweakValue, _tweak) {
        return percent_1.Percent.GetValueWithPercent(value, tweakValue);
    };
    return TweakFunctionWithPercent;
}());
exports.TweakFunctionWithPercent = TweakFunctionWithPercent;
var TweakPriority;
(function (TweakPriority) {
    TweakPriority[TweakPriority["PlusOrMinus"] = 100] = "PlusOrMinus";
    TweakPriority[TweakPriority["Multiply"] = 200] = "Multiply";
    TweakPriority[TweakPriority["Percent"] = 300] = "Percent";
})(TweakPriority = exports.TweakPriority || (exports.TweakPriority = {}));
var Tweak = /** @class */ (function () {
    function Tweak(id, active, value, step, calc, tweakFunction, targetList) {
        this.ClassID = this.constructor.name;
        this.ID = id;
        this.active = active;
        this.value = new float_1.Float(value);
        this.step = new float_1.Float(step);
        this.Function = tweakFunction;
        this.TargetList = Array.isArray(targetList) ? targetList : [targetList];
        this.calc = calc;
        this.isBought = false;
        this.baseValue = this.value;
        this.baseStep = this.step;
        this.baseActive = this.active;
    }
    Tweak.prototype.Reset = function () {
        this.value = this.baseValue;
        this.step = this.baseStep;
        this.isBought = false;
        this.active = this.baseActive;
    };
    Object.defineProperty(Tweak.prototype, "IsBought", {
        get: function () {
            return this.isBought;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tweak.prototype, "IsActive", {
        get: function () {
            return this.active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tweak.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tweak.prototype, "Step", {
        get: function () {
            return this.step;
        },
        set: function (value) {
            this.step = value;
        },
        enumerable: false,
        configurable: true
    });
    Tweak.SortTweaks = function (tweaks) {
        return tweaks.sort(this.CompareTweaks);
    };
    Tweak.CompareTweaks = function (tweak1, tweak2) {
        return tweak1.Function.Priority - tweak2.Function.Priority;
    };
    /**
     * @param relativeLevel For example, level = 2 returns next value
     * @constructor
     */
    Tweak.prototype.GetValueOnLevel = function (relativeLevel) {
        return this.calc.GetElement(this.value, this.step, relativeLevel);
    };
    Tweak.prototype.GetCopyWithValue = function (value) {
        return new Tweak(this.ID, this.active, value, this.step, this.calc, this.Function, this.TargetList);
    };
    Tweak.prototype.Toggle = function (active) {
        this.active = active;
    };
    Tweak.prototype.Upgrade = function (count) {
        count = new float_1.Float(count);
        if (!this.isBought) {
            if (count.IsEqual(1)) {
                this.isBought = true;
            }
            else {
                this.isBought = true;
                this.Upgrade(count.Minus(1));
            }
        }
        else {
            this.value = this.calc.GetElement(this.value, this.Step, count.Plus(1));
        }
        this.AddOrUpdateToGameData();
    };
    Tweak.prototype.AddOrUpdateToGameData = function () {
        for (var _i = 0, _a = this.TargetList; _i < _a.length; _i++) {
            var gameData = _a[_i];
            gameData.AddOrUpdateTweak(this, true);
        }
    };
    Tweak.prototype.CalculateValue = function (value) {
        return this.Function.Get(value, this.value, this);
    };
    __decorate([
        class_transformer_1.Type(function () { return TweakFunction; })
    ], Tweak.prototype, "Function", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Tweak.prototype, "TargetList", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Tweak.prototype, "value", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Tweak.prototype, "step", void 0);
    __decorate([
        class_transformer_1.Type(function () { return valueCalc_1.ValueCalc; })
    ], Tweak.prototype, "calc", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Tweak.prototype, "baseValue", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Tweak.prototype, "baseStep", void 0);
    return Tweak;
}());
exports.Tweak = Tweak;

