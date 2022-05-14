
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
exports.UnlockUpgrade = exports.OnUnlockUpgradeBuyEvent = exports.Upgrade = exports.UpgradeClassID = void 0;
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var gameObject_1 = __webpack_require__(/*! ../../gameObject */ "./src/game/gameObject.ts");
var tweakArray_1 = __webpack_require__(/*! ../../tweakArray */ "./src/game/tweakArray.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var upgradeOnBuyEvent_1 = __webpack_require__(/*! ./upgradeOnBuyEvent */ "./src/game/gameObjects/upgrade/upgradeOnBuyEvent.ts");
var upgradeGUI_1 = __webpack_require__(/*! ./upgradeGUI */ "./src/game/gameObjects/upgrade/upgradeGUI.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var UpgradeClassID;
(function (UpgradeClassID) {
    UpgradeClassID["Upgrade"] = "Upgrade";
    UpgradeClassID["UnlockUpgrade"] = "UnlockUpgrade";
})(UpgradeClassID = exports.UpgradeClassID || (exports.UpgradeClassID = {}));
var Upgrade = /** @class */ (function (_super) {
    __extends(Upgrade, _super);
    function Upgrade(objectStorage, id, buyCount, level, pricesArray, tweakArray, onBuyFunc, isThemeUnlocked) {
        if (isThemeUnlocked === void 0) { isThemeUnlocked = false; }
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Upgrade, id) || this;
        _this.subClassID = UpgradeClassID.Upgrade;
        _this.Level = level;
        _this.PriceArray = pricesArray;
        _this.TweakArray = tweakArray;
        _this.BuyCount = buyCount;
        _this.OnBuyEvent = onBuyFunc;
        _this.GUI = new upgradeGUI_1.UpgradeGUI(_this);
        _this.Theme = "Upgrade::" + id;
        _this.IsThemeUnlocked = isThemeUnlocked;
        return _this;
    }
    Object.defineProperty(Upgrade.prototype, "SubClassID", {
        get: function () {
            return this.subClassID;
        },
        enumerable: false,
        configurable: true
    });
    Upgrade.prototype.Reset = function () {
        this.Level.Reset();
        this.PriceArray.Reset();
        this.TweakArray.Reset();
    };
    Upgrade.prototype.OnContentInitiatedOrGameLoaded = function () {
        _super.prototype.OnContentInitiatedOrGameLoaded.call(this);
        this.TweakArray.AddOrUpdateToGameData();
    };
    Object.defineProperty(Upgrade.prototype, "Prices", {
        get: function () {
            return this.PriceArray.Prices;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Upgrade.prototype, "Tweaks", {
        get: function () {
            return this.TweakArray.Items;
        },
        enumerable: false,
        configurable: true
    });
    Upgrade.prototype.CorrectBuyCount = function (count) {
        return float_1.Float.Min(this.Level.CanLevelUpCount, count);
    };
    Object.defineProperty(Upgrade.prototype, "BuyCountValue", {
        //todo create BuyCount class!!! по идее можно как раз вынести всю эту логику рассчёта в класс BuyCount
        // и в него передевать цены? мб мб
        get: function () {
            if (this.BuyCount) {
                return new float_1.Float(this.BuyCount.Value);
            }
            else {
                return new float_1.Float(1);
            }
        },
        enumerable: false,
        configurable: true
    });
    //todo maybe return some type of FalseType, like "MaxLevel", or "NotEnoughWallet" and so on, for easier UI making
    Upgrade.prototype.IsCanBuy = function (count) {
        if (this.Level.IsMaxed) {
            return false;
        }
        count = count ? new float_1.Float(count) : this.BuyCountValue;
        count = this.CorrectBuyCount(count);
        return this.PriceArray.IsCanBuy(count);
    };
    //todo разделить на две функции. get GetMaxBuy() и вызывать просто Upgrade.Buy(this.MaxBuyCount)
    /**
     * @return Count of purchases
     */
    Upgrade.prototype.BuyMax = function (maxCount) {
        if (maxCount === void 0) { maxCount = undefined; }
        var bought = new float_1.Float(0);
        while ((maxCount ? bought < maxCount : true) && this.IsCanBuy(1)) {
            this.Buy(1);
            bought = float_1.Float.Plus(bought, 1);
        }
        return bought;
    };
    /**
     * @return Count of purchases
     */
    Upgrade.prototype.Buy = function (count) {
        //todo maybe separate to different functions Buying, updating tweaks and so on.. Because function become too complicated
        // and hard to do ReInit
        if (count) {
            count = new float_1.Float(count);
            if (count.IsLessOrEqual(0)) {
                throw new Error("Buy count was 0 or less when trying to buy");
            }
        }
        else {
            count = this.BuyCountValue;
        }
        count = this.CorrectBuyCount(count);
        if (this.IsCanBuy(count)) {
            var spent = this.PriceArray.Buy(count);
            this.Level.Value = float_1.Float.Plus(this.Level.Value, count);
            this.TweakArray.Toggle(true);
            this.TweakArray.Upgrade(count);
            if (this.OnBuyEvent != undefined) {
                //todo maybe pass 'spent' also
                this.OnBuyEvent.Trigger(this, count, spent);
            }
            return count;
        }
        else {
            throw new Error("Trying to buy count: " + count + ", but can't actually buy!");
        }
    };
    Upgrade.prototype.InitFrom = function (storage, oldUpgrade) {
        // Storing old wallets data of prices. bufferWallets are not references anymore! ITS COPY
        //const bufferWallets = this.PriceArray.Wallets;
        // Replacing
        this.PriceArray.Wallets = oldUpgrade.PriceArray.SpentWallets;
        // Buying with old spent values
        this.BuyMax();
        // Because now, in prices, we have local copy of Price, instead of link to Content.Wallets,
        //  we updating links to the wallet and also adding local wallet value to global, to get buy change
        this.PriceArray.SetWalletsFromContent(storage, true, this.ID);
    };
    __decorate([
        class_transformer_1.Expose()
    ], Upgrade.prototype, "subClassID", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return priceArray_1.PriceArray; })
    ], Upgrade.prototype, "PriceArray", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Upgrade.prototype, "OnBuyEvent", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Upgrade.prototype, "TweakArray", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Upgrade.prototype, "BuyCount", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Upgrade.prototype, "GUI", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return level_1.Level; })
    ], Upgrade.prototype, "Level", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Upgrade.prototype, "Theme", void 0);
    __decorate([
        class_transformer_1.Expose()
    ], Upgrade.prototype, "IsThemeUnlocked", void 0);
    return Upgrade;
}(gameObject_1.GameObject));
exports.Upgrade = Upgrade;
var OnUnlockUpgradeBuyEvent = /** @class */ (function (_super) {
    __extends(OnUnlockUpgradeBuyEvent, _super);
    function OnUnlockUpgradeBuyEvent(unlock) {
        var _this = _super.call(this) || this;
        _this.unlock = unlock;
        return _this;
    }
    OnUnlockUpgradeBuyEvent.prototype.Trigger = function (_upgrade, _count, _spent) {
        this.unlock.Toggle(true);
    };
    return OnUnlockUpgradeBuyEvent;
}(upgradeOnBuyEvent_1.UpgradeOnBuyEvent));
exports.OnUnlockUpgradeBuyEvent = OnUnlockUpgradeBuyEvent;
var UnlockUpgrade = /** @class */ (function (_super) {
    __extends(UnlockUpgrade, _super);
    function UnlockUpgrade(objectStorage, id, unlock, priceArray, isThemeUnlocked) {
        if (isThemeUnlocked === void 0) { isThemeUnlocked = false; }
        var _this = _super.call(this, objectStorage, id, null, new level_1.Level(0, 1), priceArray, new tweakArray_1.TweakArray([]), new OnUnlockUpgradeBuyEvent(unlock), isThemeUnlocked) || this;
        _this.subClassID = UpgradeClassID.UnlockUpgrade;
        _this.Theme = unlock.ID;
        _this.Unlock = unlock;
        return _this;
    }
    UnlockUpgrade.prototype.Reset = function () {
        _super.prototype.Reset.call(this);
        this.Unlock.Reset();
    };
    UnlockUpgrade.prototype.InitFrom = function (storage, oldUpgrade) {
        _super.prototype.InitFrom.call(this, storage, oldUpgrade);
        if (this.Level.Value.IsEqual(0) && oldUpgrade.Level.Value.IsNotEqual(0)) {
            console.log("[UnlockUpgrade] Old upgrade was bought, but current is not, so resetting unlock");
            this.Unlock.Toggle(false);
        }
    };
    __decorate([
        class_transformer_1.Exclude(),
        class_transformer_1.Type(function () { return unlock_1.Unlock; })
    ], UnlockUpgrade.prototype, "Unlock", void 0);
    return UnlockUpgrade;
}(Upgrade));
exports.UnlockUpgrade = UnlockUpgrade;

