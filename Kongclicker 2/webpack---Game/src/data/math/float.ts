
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFloat = exports.Float = exports.RawFloatValue = exports.NewFloat = void 0;
var break_infinity_js_1 = __importDefault(__webpack_require__(/*! break_infinity.js */ "./node_modules/break_infinity.js/dist/break_infinity.esm.js"));
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var gameObject_1 = __webpack_require__(/*! ../../game/gameObject */ "./src/game/gameObject.ts");
function NewFloat(value) {
    return new Float(value);
}
exports.NewFloat = NewFloat;
//move to class maybe?
function RawFloatValue(value) {
    switch (typeof value) {
        case "number": {
            return value;
        }
        case "string": {
            return new Float(value).AsNumber;
        }
        default: {
            return value.AsNumber;
        }
    }
}
exports.RawFloatValue = RawFloatValue;
//todo maybe do interface for number type
var Float = /** @class */ (function () {
    function Float(value) {
        if (value === void 0) { value = 0; }
        this.tolerance = 0.00001;
        this.value = new break_infinity_js_1.default(0);
        this.SetValue(value);
    }
    Object.defineProperty(Float.prototype, "AsDecimal", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Float.prototype.SetValue = function (value) {
        if (value instanceof Float) {
            this.value = value.value;
        }
        else if (value instanceof break_infinity_js_1.default) {
            this.value = value;
        }
        else {
            this.value = new break_infinity_js_1.default(value);
        }
    };
    Float.prototype.GetValue = function () {
        return new Float(this.value);
    };
    Object.defineProperty(Float, "MAX_VALUE_NUMBER", {
        // Constants
        get: function () {
            return new Float(break_infinity_js_1.default.NUMBER_MAX_VALUE);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Float, "MIN_VALUE_NUMBER", {
        get: function () {
            return new Float(break_infinity_js_1.default.NUMBER_MIN_VALUE);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Float, "MAX_VALUE", {
        get: function () {
            return new Float(break_infinity_js_1.default.MAX_VALUE);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Float, "MIN_VALUE", {
        get: function () {
            return new Float(break_infinity_js_1.default.MIN_VALUE);
        },
        enumerable: false,
        configurable: true
    });
    // Static methods
    Float.Plus = function (value1, value2) {
        var value1d = new Float(value1).value;
        var value2d = new Float(value2).value;
        return new Float(break_infinity_js_1.default.plus(value1d, value2d));
    };
    Float.Minus = function (value1, value2) {
        var value1d = new Float(value1).value;
        var value2d = new Float(value2).value;
        return new Float(break_infinity_js_1.default.minus(value1d, value2d));
    };
    Float.Times = function (value1, value2) {
        var value1d = new Float(value1).value;
        var value2d = new Float(value2).value;
        return new Float(break_infinity_js_1.default.times(value1d, value2d));
    };
    Float.Divide = function (value1, value2) {
        var value1d = new Float(value1).value;
        var value2d = new Float(value2).value;
        return new Float(break_infinity_js_1.default.divide(value1d, value2d));
    };
    Float.Pow = function (value, exponent) {
        var valueD = new Float(value).value;
        var exponentD = new Float(exponent).value;
        return new Float(break_infinity_js_1.default.pow(valueD, exponentD));
    };
    Float.Sqrt = function (value) {
        var valueD = new Float(value).value;
        return new Float(break_infinity_js_1.default.sqrt(valueD));
    };
    Float.Abs = function (value) {
        var valueD = new Float(value).value;
        return new Float(break_infinity_js_1.default.abs(valueD));
    };
    // Instance methods
    Float.prototype.Plus = function (value) {
        return Float.Plus(this, value);
    };
    Float.prototype.Minus = function (value) {
        return Float.Minus(this, value);
    };
    Float.prototype.Times = function (value) {
        return Float.Times(this, value);
    };
    Float.prototype.Divide = function (value) {
        return Float.Divide(this, value);
    };
    Float.prototype.Pow = function (exponent) {
        return Float.Pow(this, exponent);
    };
    Float.prototype.Sqrt = function () {
        return Float.Sqrt(this);
    };
    Float.prototype.Abs = function () {
        return Float.Abs(this);
    };
    // Converting to number
    Float.prototype.toNumber = function () {
        return this.value.toNumber();
    };
    Float.prototype.ToNumber = function () {
        return this.toNumber();
    };
    Object.defineProperty(Float.prototype, "AsNumber", {
        get: function () {
            return this.toNumber();
        },
        enumerable: false,
        configurable: true
    });
    // System methods
    Float.prototype.toString = function () {
        return this.value.string();
    };
    // AsString(): string {
    //     return this.value.string();
    // }
    Float.prototype.ToStringFixed = function (floats) {
        return this.value.toFixed(floats);
    };
    Float.prototype.ToStringExtendedFixed = function (floats) {
        return this.value.toStringWithDecimalPlaces(floats);
    };
    // get String(): string {
    //     return this.AsString();
    // }
    Float.FromString = function (valueStr) {
        return new Float(parseFloat(valueStr));
    };
    Float.prototype.FromString = function (valueStr) {
        return Float.FromString(valueStr);
    };
    Float.prototype.SetFromString = function (valueStr) {
        this.value = Float.FromString(valueStr).value;
    };
    // Logical operations
    // todo я пока заменю на сравнение с толерантностью все сравнения,
    //  но потом лучше сделать таки разные методы
    Float.prototype.IsEqual = function (value) {
        var valueD = new Float(value).value;
        return this.value.equals_tolerance(valueD, this.tolerance);
    };
    Float.prototype.IsNotEqual = function (value) {
        return !this.IsEqual(value);
    };
    Float.prototype.IsMore = function (value) {
        var valueD = new Float(value).value;
        return this.value.greaterThan(valueD);
    };
    Float.prototype.IsMoreOrEqual = function (value) {
        var valueD = new Float(value).value;
        return this.value.gte_tolerance(valueD, this.tolerance);
    };
    Float.prototype.IsLess = function (value) {
        var valueD = new Float(value).value;
        return this.value.lessThan(valueD);
    };
    Float.prototype.IsLessOrEqual = function (value) {
        var valueD = new Float(value).value;
        return this.value.lte_tolerance(valueD, this.tolerance);
    };
    // Static Math replacements
    Float.ToFixed = function (value, floats) {
        //return new Float(Float.FromString(FloatOrNumberValue(value).toFixed(FloatOrNumberValue(floats))));
        var valueD = new Float(value).value;
        var floatsN = RawFloatValue(floats);
        return valueD.toFixed(floatsN);
    };
    Float.Max = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var maxValue = new Float(values[0]);
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
            var value = values_1[_a];
            value = new Float(value);
            if (value.IsMore(maxValue)) {
                maxValue = value;
            }
        }
        return maxValue;
    };
    Float.Min = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var minValue = new Float(values[0]);
        for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
            var value = values_2[_a];
            value = new Float(value);
            if (value.IsLess(minValue)) {
                minValue = value;
            }
        }
        return minValue;
    };
    Float.Round = function (value) {
        var valueD = new Float(value).value;
        return new Float(valueD.round());
    };
    Float.Floor = function (value) {
        var valueD = new Float(value).value;
        return new Float(valueD.floor());
    };
    // Instance math replacements
    Float.prototype.ToFixed = function (floats) {
        return Float.ToFixed(this, floats);
    };
    Float.prototype.Round = function () {
        return Float.Round(this);
    };
    Float.prototype.Floor = function () {
        return Float.Floor(this);
    };
    __decorate([
        class_transformer_1.Type(function () { return break_infinity_js_1.default; })
    ], Float.prototype, "value", void 0);
    return Float;
}());
exports.Float = Float;
var GameFloat = /** @class */ (function (_super) {
    __extends(GameFloat, _super);
    function GameFloat(storage, id, value) {
        var _this = _super.call(this, value) || this;
        _this.ID = id;
        _this.ClassID = gameObject_1.ClassName.GameFloat;
        if (storage) {
            storage.AddItem(_this);
        }
        return _this;
    }
    Object.defineProperty(GameFloat.prototype, "Signature", {
        get: function () {
            return this.ClassID + "::" + this.ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameFloat.prototype, "Value", {
        get: function () {
            return this.GetValue();
        },
        set: function (value) {
            this.SetValue(value);
        },
        enumerable: false,
        configurable: true
    });
    GameFloat.prototype.Add = function (value) {
        this.Value = this.Value.Plus(value);
    };
    GameFloat.prototype.Subtract = function (value) {
        this.Value = this.Value.Minus(value);
    };
    GameFloat.prototype.IsSameSignature = function (object) {
        return this.ClassID == object.ClassID && this.ID == object.ID;
    };
    GameFloat.prototype.Update = function (_dt) {
    };
    GameFloat.prototype.OnContentInitiatedOrGameLoaded = function () {
    };
    GameFloat.prototype.InitFrom = function (_storage, _oldItem) {
        this.SetValue(_oldItem.GetValue());
    };
    return GameFloat;
}(Float));
exports.GameFloat = GameFloat;

