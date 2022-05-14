
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweakArray = void 0;
var tweak_1 = __webpack_require__(/*! ./tweak */ "./src/game/tweak.ts");
var float_1 = __webpack_require__(/*! ../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var TweakArray = /** @class */ (function () {
    function TweakArray(tweaks) {
        this.classID = this.constructor.name;
        this.tweaks = (tweaks != undefined ? (Array.isArray(tweaks) ? tweaks : [tweaks]) : []);
    }
    TweakArray.prototype.Reset = function () {
        for (var _i = 0, _a = this.tweaks; _i < _a.length; _i++) {
            var tweak = _a[_i];
            tweak.Reset();
            tweak.AddOrUpdateToGameData();
        }
    };
    Object.defineProperty(TweakArray.prototype, "Length", {
        get: function () {
            return this.Items.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TweakArray.prototype, "Items", {
        get: function () {
            return this.tweaks;
        },
        enumerable: false,
        configurable: true
    });
    TweakArray.prototype.Upgrade = function (count) {
        count = new float_1.Float(count);
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var tweak = _a[_i];
            tweak.Upgrade(count);
        }
    };
    TweakArray.prototype.AddOrUpdateToGameData = function () {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var tweak = _a[_i];
            tweak.AddOrUpdateToGameData();
        }
    };
    TweakArray.prototype.Toggle = function (enabled) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var tweak = _a[_i];
            tweak.Toggle(enabled);
        }
    };
    TweakArray.prototype.GetTweak = function (idOrTweak) {
        var id = idOrTweak instanceof tweak_1.Tweak ? idOrTweak.ID : idOrTweak;
        for (var i = 0; i < this.Items.length; i++) {
            var tweak = this.Items[i];
            if (tweak.ID === id) {
                return tweak;
            }
        }
        throw new Error("Tweak '" + id + "' was not found");
    };
    TweakArray.prototype.HasTweak = function (idOrTweak) {
        var id = idOrTweak instanceof tweak_1.Tweak ? idOrTweak.ID : idOrTweak;
        for (var i = 0; i < this.Items.length; i++) {
            var tweak = this.Items[i];
            if (tweak.ID === id) {
                return true;
            }
        }
        return false;
    };
    TweakArray.prototype.SortTweaks = function () {
        this.tweaks = tweak_1.Tweak.SortTweaks(this.tweaks);
    };
    TweakArray.prototype.Remove = function (idOrTweak) {
        var id = idOrTweak instanceof tweak_1.Tweak ? idOrTweak.ID : idOrTweak;
        for (var i = 0; i < this.Length; i++) {
            if (this.tweaks[i].ID == id) {
                this.tweaks.splice(i, 1);
            }
        }
        throw new Error("Tweak '" + id + "' was not found");
    };
    __decorate([
        class_transformer_1.Type(function () { return tweak_1.Tweak; })
    ], TweakArray.prototype, "tweaks", void 0);
    return TweakArray;
}());
exports.TweakArray = TweakArray;

