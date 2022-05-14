
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
exports.Price = void 0;
var wallet_1 = __webpack_require__(/*! ./wallet */ "./src/game/gameObjects/wallet.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var walletValue_1 = __webpack_require__(/*! ../../data/walletValue */ "./src/data/walletValue.ts");
/*todo сделать этапы для цены, например (отдельным саб-классом, наверное)
    {
        Value: 1,
        Step: 2,
        UntilLevel: 10
    },
    {
        Value: 10,
        Step: 2.5,
        UntilLevel: 20
    }
    ...
    И при покупке правильно разбивать покупку на части, чтобы во время обновлять значения этапов
*/
var Price = /** @class */ (function (_super) {
    __extends(Price, _super);
    function Price(wallet, value, step, calc) {
        var _this = _super.call(this, null, gameObject_1.ClassName.Price, '$price') || this;
        _this.wallet = wallet;
        _this.value = new float_1.Float(value);
        _this.step = new float_1.Float(step);
        _this.calc = calc;
        _this.spent = new float_1.Float(0);
        _this.baseValue = _this.value;
        _this.baseStep = _this.step;
        return _this;
    }
    Price.prototype.Reset = function () {
        this.spent = new float_1.Float(0);
        this.value = this.baseValue;
        this.step = this.baseStep;
    };
    Object.defineProperty(Price.prototype, "Calculator", {
        get: function () {
            return this.calc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Price.prototype, "Wallet", {
        get: function () {
            return this.wallet;
        },
        set: function (wallet) {
            this.wallet = wallet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Price.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Price.prototype, "Step", {
        get: function () {
            return this.step;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Price.prototype, "Spent", {
        get: function () {
            return this.spent;
        },
        enumerable: false,
        configurable: true
    });
    Price.prototype.BuyProgress = function () {
        //todo buyProgress
        // BuyCount must be taken into account
    };
    //todo сделать систему с умным вычислениям как в GameData
    //todo ввести возможность прописывать формулу для подсчёта цены, а не тупо по формуле прогрессий
    Price.prototype.GetValueOnLevel = function (relativeLevel) {
        return this.calc.GetSum(this.Value, this.Step, relativeLevel);
        //console.log(`Type: ${this.ProgressionType}\nValue: ${this.Value}\nStep: ${this.Step}\nSum: ${sum}`);
    };
    Price.prototype.GetNewPrice = function (count) {
        count = new float_1.Float(count);
        return this.calc.GetElement(this.Value, this.Step, count.Plus(1));
    };
    Price.prototype.IsCanBuy = function (count) {
        count = new float_1.Float(count);
        if (this.Wallet) {
            var totalPrice = this.GetValueOnLevel(count);
            return this.Wallet.Value.IsMoreOrEqual(totalPrice);
        }
        else {
            throw Error("Wallet " + this.Wallet + " was not set!");
        }
    };
    /**
     * @return {Float} Returns spent value
     * @function
     */
    Price.prototype.Buy = function (count) {
        count = new float_1.Float(count);
        if (count.IsLessOrEqual(0)) {
            throw new Error("Buy count is " + count);
        }
        if (this.IsCanBuy(count)) {
            var totalPrice = this.GetValueOnLevel(count);
            this.value = this.GetNewPrice(count);
            this.Wallet.Subtract(totalPrice);
            this.spent = float_1.Float.Plus(this.spent, totalPrice);
            return new walletValue_1.WalletValue(this.Wallet, totalPrice);
        }
        else {
            throw new Error("Can't buy price with walletID: " + this.wallet.ID + " Wanted to buy: " + count);
        }
    };
    Price.prototype.InitFrom = function (_storage, _oldPrice) {
        //skip, handled in Upgrade
    };
    __decorate([
        class_transformer_1.Type(function () { return wallet_1.Wallet; })
    ], Price.prototype, "wallet", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Price.prototype, "calc", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Price.prototype, "spent", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Price.prototype, "baseValue", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Price.prototype, "baseStep", void 0);
    return Price;
}(gameObject_1.GameObject));
exports.Price = Price;

