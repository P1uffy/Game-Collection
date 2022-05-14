
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameData = exports.GameDataStatistics = void 0;
var tweak_1 = __webpack_require__(/*! ../../game/tweak */ "./src/game/tweak.ts");
var float_1 = __webpack_require__(/*! ../math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var tweakArray_1 = __webpack_require__(/*! ../../game/tweakArray */ "./src/game/tweakArray.ts");
//todo be sure all important game data is saved, because i can someday need to use stats from it
var GameDataStatistics = /** @class */ (function () {
    function GameDataStatistics() {
        this.SmallestValue = new float_1.Float(0);
        this.BiggestValue = new float_1.Float(0);
    }
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], GameDataStatistics.prototype, "SmallestValue", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], GameDataStatistics.prototype, "BiggestValue", void 0);
    return GameDataStatistics;
}());
exports.GameDataStatistics = GameDataStatistics;
var GameData = /** @class */ (function () {
    function GameData(id, value, tweaks, minMaxLimit) {
        this.ID = id;
        this.ClassID = this.constructor.name;
        this.baseValue = new float_1.Float(value);
        this.computedValue = this.baseValue;
        this.MinMaxLimit = minMaxLimit;
        if (tweaks) {
            this.TweakArray = tweaks instanceof tweakArray_1.TweakArray ? tweaks : new tweakArray_1.TweakArray(tweaks);
        }
        else {
            this.TweakArray = new tweakArray_1.TweakArray();
        }
        this.firstBaseValue = this.baseValue;
        this.Statistics = new GameDataStatistics();
        this.Statistics.SmallestValue = this.baseValue;
        this.Statistics.BiggestValue = this.baseValue;
    }
    GameData.prototype.Reset = function () {
        this.baseValue = this.firstBaseValue;
        this.recomputeValue();
    };
    Object.defineProperty(GameData.prototype, "Value", {
        get: function () {
            return this.computedValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameData.prototype, "BaseValue", {
        set: function (newValue) {
            this.baseValue = new float_1.Float(newValue);
            this.recomputeValue();
        },
        enumerable: false,
        configurable: true
    });
    GameData.prototype.GetTweak = function (tweak) {
        for (var _i = 0, _a = this.TweakArray.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.ID == tweak.ID) {
                return item;
            }
        }
        throw new Error("Tweak " + tweak + " not found in GameData: " + this.ID);
    };
    GameData.prototype.HasTweak = function (id) {
        return this.TweakArray.HasTweak(id);
    };
    GameData.prototype.recomputeValue = function () {
        var value = this.GetValueWithTweaks(this.TweakArray.Items);
        if (this.MinMaxLimit) {
            if (this.MinMaxLimit[0]) {
                value = float_1.Float.Max(this.MinMaxLimit[0], value);
            }
            if (this.MinMaxLimit[1]) {
                value = float_1.Float.Min(this.MinMaxLimit[1], value);
            }
        }
        if (value.IsLess(this.Statistics.SmallestValue)) {
            this.Statistics.SmallestValue = value;
        }
        if (value.IsMore(this.Statistics.BiggestValue)) {
            this.Statistics.BiggestValue = value;
        }
        this.computedValue = value;
    };
    GameData.prototype.GetValueWithoutTweaks = function (tweaksToExclude) {
        var filteredTweaks = [];
        var _loop_1 = function (tweak) {
            var excludedTweak = tweaksToExclude.find(function (excludedTweak) { return tweak.ID == excludedTweak.ID; });
            if (!excludedTweak) {
                filteredTweaks.push(tweak);
            }
        };
        for (var _i = 0, _a = this.TweakArray.Items; _i < _a.length; _i++) {
            var tweak = _a[_i];
            _loop_1(tweak);
        }
        filteredTweaks = tweak_1.Tweak.SortTweaks(filteredTweaks);
        return this.GetValueWithTweaks(filteredTweaks);
    };
    GameData.prototype.GetValueWithTweaks = function (tweaks, skipDisabledTweaks) {
        if (skipDisabledTweaks === void 0) { skipDisabledTweaks = true; }
        tweaks = tweak_1.Tweak.SortTweaks(tweaks);
        var value = this.baseValue;
        for (var _i = 0, tweaks_1 = tweaks; _i < tweaks_1.length; _i++) {
            var tweak = tweaks_1[_i];
            if (skipDisabledTweaks ? tweak.IsActive : true) {
                value = tweak.CalculateValue(value);
            }
        }
        return value;
    };
    GameData.prototype.UpdateTweak = function (tweak) {
        //console.log(`Tweak value updated: ${this.GetTweak(tweakID).Value.String} -> ${new Float(value).String} [${this.GetTweak(tweakID).ID}]`)
        this.GetTweak(tweak).Value = tweak.Value;
        this.recomputeValue();
    };
    GameData.prototype.AddOrUpdateTweak = function (tweak, update) {
        if (update === void 0) { update = true; }
        if (!this.HasTweak(tweak.ID)) {
            this.TweakArray.Items.push(tweak);
            this.TweakArray.SortTweaks();
            this.recomputeValue();
        }
        else {
            if (update) {
                this.UpdateTweak(tweak);
            }
            else {
                throw new Error("Tweak with id: " + tweak.ID + " is already exists in GameData: " + this.ID);
            }
        }
    };
    GameData.prototype.RemoveTweak = function (id) {
        this.TweakArray.Remove(id);
    };
    __decorate([
        class_transformer_1.Exclude()
    ], GameData.prototype, "baseValue", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], GameData.prototype, "computedValue", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], GameData.prototype, "TweakArray", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], GameData.prototype, "MinMaxLimit", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], GameData.prototype, "firstBaseValue", void 0);
    __decorate([
        class_transformer_1.Type(function () { return GameDataStatistics; })
    ], GameData.prototype, "Statistics", void 0);
    return GameData;
}());
exports.GameData = GameData;

