
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceArray = void 0;
var price_1 = __webpack_require__(/*! ../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var float_1 = __webpack_require__(/*! ./math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var wallet_1 = __webpack_require__(/*! ../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var walletValue_1 = __webpack_require__(/*! ./walletValue */ "./src/data/walletValue.ts");
var utilsText_1 = __webpack_require__(/*! ../utils/utilsText */ "./src/utils/utilsText.ts");
var PriceArray = /** @class */ (function () {
    function PriceArray(prices) {
        this.classID = this.constructor.name;
        this.prices = Array.isArray(prices) ? prices : [prices];
    }
    PriceArray.prototype.Reset = function () {
        for (var _i = 0, _a = this.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            price.Reset();
        }
    };
    Object.defineProperty(PriceArray.prototype, "Prices", {
        get: function () {
            return this.prices;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceArray.prototype, "Wallets", {
        get: function () {
            var wallets = [];
            for (var _i = 0, _a = this.Prices; _i < _a.length; _i++) {
                var price = _a[_i];
                wallets.push(price.Wallet);
            }
            return wallets;
        },
        set: function (wallets) {
            for (var i = 0; i < this.Prices.length; i++) {
                var price = this.Prices[i];
                price.Wallet = wallets[i];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PriceArray.prototype, "SpentWallets", {
        /**
         * @returns Wallets, initiated with Spent property of prices
         */
        get: function () {
            var outputWallets = [];
            for (var _i = 0, _a = this.Prices; _i < _a.length; _i++) {
                var price = _a[_i];
                outputWallets.push(new wallet_1.Wallet(null, price.Wallet.ID, price.Spent));
            }
            return outputWallets;
        },
        enumerable: false,
        configurable: true
    });
    PriceArray.prototype.GetByWallet = function (wallet) {
        for (var _i = 0, _a = this.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            if (price.Wallet.IsSameSignature(wallet)) {
                return price;
            }
        }
        throw new Error("No price found by wallet: " + wallet.ID);
    };
    PriceArray.prototype.SetWalletsFromContent = function (storage, addValueToWalletBeforeReplace, upgradeID) {
        for (var _i = 0, _a = this.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            var localWalletValue = price.Wallet.Value;
            price.Wallet = storage.GetItem(price.Wallet.ID);
            if (addValueToWalletBeforeReplace) {
                if (localWalletValue.IsMore(0.1)) {
                    console.log("[ReInitUpgrade::" + upgradeID + "] Refunded: " + utilsText_1.GetNumberText(localWalletValue) + " of " + price.Wallet.ID);
                    price.Wallet.Add(localWalletValue);
                }
            }
        }
    };
    PriceArray.prototype.AddToWallets = function (wallets) {
        for (var i = 0; i < this.Prices.length; i++) {
            var price = this.Prices[i];
            price.Wallet.Add(wallets[i].Value);
        }
    };
    PriceArray.prototype.IsCanBuy = function (count) {
        count = new float_1.Float(count);
        for (var _i = 0, _a = this.Prices; _i < _a.length; _i++) {
            var price = _a[_i];
            if (!price.IsCanBuy(count)) {
                return false;
            }
        }
        return true;
    };
    /**
     * @return {Float} Returns total spent of all prices
     */
    PriceArray.prototype.Buy = function (count) {
        count = new float_1.Float(count);
        var spentTotal = new walletValue_1.WalletValueArray([]);
        for (var _i = 0, _a = this.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            spentTotal.Add(price.Buy(count));
        }
        return spentTotal;
    };
    PriceArray.prototype.Refund = function (storage) {
        for (var _i = 0, _a = this.prices; _i < _a.length; _i++) {
            var price = _a[_i];
            if (storage.IsItemExists(price.Wallet.ID)) {
                storage.GetItem(price.Wallet.ID).Add(price.Spent);
                if (price.Spent.IsMore(0)) {
                    console.log("[PriceArray.Refund] Refunded " + utilsText_1.GetNumberText(price.Spent) + " " + price.Wallet.ID);
                }
            }
        }
    };
    __decorate([
        class_transformer_1.Type(function () { return price_1.Price; })
    ], PriceArray.prototype, "prices", void 0);
    return PriceArray;
}());
exports.PriceArray = PriceArray;

