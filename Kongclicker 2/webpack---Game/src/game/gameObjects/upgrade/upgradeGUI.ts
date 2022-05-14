
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeGUI = void 0;
var wallet_1 = __webpack_require__(/*! ../wallet */ "./src/game/gameObjects/wallet.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
var UpgradeGUI = /** @class */ (function () {
    function UpgradeGUI(upgrade) {
        this.upgrade = upgrade;
    }
    //todo move to PriceArray
    UpgradeGUI.prototype.GetPrice = function (price) {
        if (typeof price == "number") {
            return this.upgrade.Prices[price];
        }
        else if (price instanceof wallet_1.Wallet) {
            return this.upgrade.PriceArray.GetByWallet(price);
        }
        else {
            return price;
        }
    };
    UpgradeGUI.prototype.GetPriceValue = function (priceOrSearchMethod) {
        return this.GetPrice(priceOrSearchMethod).Value;
    };
    // relativeLevel means, 1 is just value, 2 is next value, and so on
    UpgradeGUI.prototype.GetPriceValueOnLevel = function (priceOrSearchMethod, relativeLevel) {
        var price = this.GetPrice(priceOrSearchMethod);
        relativeLevel = relativeLevel ? new float_1.Float(relativeLevel) : new float_1.Float(this.upgrade.BuyCountValue);
        if (this.upgrade.Level.IsMaxed) {
            return price.Value;
        }
        else {
            relativeLevel = this.CorrectLevel(relativeLevel, "Price");
            return price.GetValueOnLevel(relativeLevel);
        }
    };
    UpgradeGUI.prototype.CorrectLevel = function (value, type) {
        if (this.upgrade.Level.ValueMax) {
            var currentLevels = this.upgrade.Level.Value;
            if (this.upgrade.Level.Value.IsEqual(0) || type == "Price") {
                currentLevels = this.upgrade.Level.Value;
            }
            else {
                currentLevels = this.upgrade.Level.Value.Minus(1);
            }
            var buyCount = float_1.Float.Min(value, this.upgrade.Level.ValueMax.Minus(currentLevels));
            if (!this.upgrade.Level.Value.IsEqual(0) && buyCount.IsMore(1)) {
                buyCount = float_1.Float.Max(2, buyCount);
            }
            return buyCount;
        }
        else {
            return value;
        }
    };
    //todo move to TweakArray
    UpgradeGUI.prototype.GetTweak = function (tweakOrSearchMethod) {
        if (typeof tweakOrSearchMethod == "number") {
            return this.upgrade.Tweaks[tweakOrSearchMethod];
        }
        else {
            return tweakOrSearchMethod;
        }
    };
    UpgradeGUI.prototype.GetTweakValue = function (tweakOrSearchMethod, whatToReturnIfNotBought) {
        if (whatToReturnIfNotBought === void 0) { whatToReturnIfNotBought = new float_1.Float(0); }
        var tweak = this.GetTweak(tweakOrSearchMethod);
        if (this.upgrade.Level.Value.IsNotEqual(0)) {
            return tweak.Value;
        }
        else {
            return whatToReturnIfNotBought;
        }
    };
    UpgradeGUI.prototype.GetTweakDataValue = function (tweakOrSearchMethod, gameDataID) {
        var tweak = this.GetTweak(tweakOrSearchMethod);
        return tweak.TargetList[gameDataID].Value;
    };
    //todo there can be some refactoring
    UpgradeGUI.prototype.GetTweakDataValueOnLevel = function (tweakOrSearchMethod, gameDataID, relativeLevel) {
        var tweak = this.GetTweak(tweakOrSearchMethod);
        var gameData = tweak.TargetList[gameDataID];
        var valueBefore = gameData.Value;
        relativeLevel = relativeLevel ? new float_1.Float(relativeLevel) : new float_1.Float(this.upgrade.BuyCountValue);
        if (this.upgrade.Level.IsMaxed) {
            return valueBefore;
        }
        else {
            relativeLevel = this.upgrade.Level.Value.IsEqual(0)
                ? (relativeLevel.IsEqual(1)
                    ? new float_1.Float(1)
                    : relativeLevel.Plus(0))
                : relativeLevel.Plus(1);
            //todo universal function, to not duplicate this code
            if (this.upgrade.Level.ValueMax) {
                // relativeLevel = Float.Max(2, Float.Min(relativeLevel, this.upgrade.Level.ValueMax.Minus(this.upgrade.Level.Value)));
                relativeLevel = this.CorrectLevel(relativeLevel, "Tweak");
            }
            var tweaksAfterUpgrade = gameData.TweakArray.Items.slice(0);
            var countBefore = tweaksAfterUpgrade.length;
            for (var i = 0; i < tweaksAfterUpgrade.length; i++) {
                if (tweaksAfterUpgrade[i].ID == tweak.ID) {
                    tweaksAfterUpgrade.splice(i, 1);
                }
            }
            if (countBefore != tweaksAfterUpgrade.length + 1) {
                throw new Error("Tweaks wasn't filtered correctly. Count change: " + (countBefore - tweaksAfterUpgrade.length));
            }
            var valueOnLevel = tweak.GetValueOnLevel(relativeLevel);
            var tweakAfterUpgrade = tweak.GetCopyWithValue(valueOnLevel);
            tweakAfterUpgrade.Toggle(true);
            tweaksAfterUpgrade.push(tweakAfterUpgrade);
            return gameData.GetValueWithTweaks(tweaksAfterUpgrade);
        }
    };
    // relativeLevel means, 1 is just value, 2 is next value, and so on
    UpgradeGUI.prototype.GetTweakValueOnLevel = function (tweakOrSearchMethod, relativeLevel) {
        var tweak = this.GetTweak(tweakOrSearchMethod);
        relativeLevel = relativeLevel ? new float_1.Float(relativeLevel) : new float_1.Float(this.upgrade.BuyCountValue);
        if (this.upgrade.Level.IsMaxed) {
            return tweak.Value;
        }
        else {
            relativeLevel = this.upgrade.Level.Value.IsEqual(0)
                ? (relativeLevel.IsEqual(1)
                    ? new float_1.Float(1)
                    : relativeLevel.Plus(1))
                : relativeLevel.Plus(1);
            if (this.upgrade.Level.ValueMax) {
                // relativeLevel = Float.Max(2, Float.Min(relativeLevel, this.upgrade.Level.ValueMax.Minus(this.upgrade.Level.Value)));
                relativeLevel = this.CorrectLevel(relativeLevel, "Tweak");
            }
            return tweak.GetValueOnLevel(relativeLevel);
        }
    };
    return UpgradeGUI;
}());
exports.UpgradeGUI = UpgradeGUI;

