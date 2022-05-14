
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
exports.Wallet = exports.WalletStatistic = void 0;
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var game_1 = __webpack_require__(/*! ../../game */ "./src/game.ts");
var WalletStatistic = /** @class */ (function () {
    function WalletStatistic() {
        this.TotalCollected = new float_1.Float(0);
        this.TotalSpent = new float_1.Float(0);
        this.BiggestValue = new float_1.Float(0);
    }
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], WalletStatistic.prototype, "TotalCollected", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], WalletStatistic.prototype, "TotalSpent", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], WalletStatistic.prototype, "BiggestValue", void 0);
    return WalletStatistic;
}());
exports.WalletStatistic = WalletStatistic;
var Wallet = /** @class */ (function (_super) {
    __extends(Wallet, _super);
    function Wallet(objectStorage, id, value, OnValueChanged) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Wallet, id) || this;
        _this.OnValueChanged = OnValueChanged;
        _this.value = new float_1.Float(value);
        _this.baseValue = _this.value;
        _this.Statistics = new WalletStatistic();
        _this.Statistics.TotalCollected = _this.value;
        return _this;
    }
    Wallet.prototype.Reset = function () {
        this.value = this.baseValue;
    };
    Object.defineProperty(Wallet.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Wallet.prototype.Set = function (value) {
        this.value = new float_1.Float(value);
    };
    Wallet.prototype.Add = function (value) {
        var valueBefore = this.value;
        this.value = float_1.Float.Plus(this.value, value);
        this.Statistics.TotalCollected = this.Statistics.TotalCollected.Plus(value);
        if (this.value.IsMore(this.Statistics.BiggestValue)) {
            this.Statistics.BiggestValue = this.value;
        }
        if (this.OnValueChanged) {
            this.OnValueChanged(valueBefore, this.value, this.value.Minus(valueBefore));
        }
        game_1.SmartUIUpdate();
    };
    Wallet.prototype.Subtract = function (value) {
        var valueBefore = this.value;
        this.value = float_1.Float.Minus(this.value, value);
        this.Statistics.TotalSpent = this.Statistics.TotalCollected.Plus(value);
        if (this.OnValueChanged) {
            this.OnValueChanged(valueBefore, this.value, this.value.Minus(valueBefore));
        }
        game_1.SmartUIUpdate();
    };
    Wallet.prototype.InitFrom = function (_storage, oldObject) {
        this.value = oldObject.Value;
        this.Statistics = oldObject.Statistics;
    };
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Wallet.prototype, "value", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Wallet.prototype, "OnValueChanged", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Wallet.prototype, "baseValue", void 0);
    __decorate([
        class_transformer_1.Type(function () { return WalletStatistic; })
    ], Wallet.prototype, "Statistics", void 0);
    return Wallet;
}(gameObject_1.GameObject));
exports.Wallet = Wallet;

