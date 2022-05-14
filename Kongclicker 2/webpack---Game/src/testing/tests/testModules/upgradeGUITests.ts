
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUpgradeGUITests = void 0;
var testManager_1 = __webpack_require__(/*! ../../testManager */ "./src/testing/testManager.ts");
var test_1 = __webpack_require__(/*! ../../test */ "./src/testing/test.ts");
var wallet_1 = __webpack_require__(/*! ../../../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
function InitUpgradeGUITests(context) {
    var rubles = new wallet_1.Wallet(null, 'Rubles', 0);
    var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
        new price_1.Price(rubles, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
    ]), new tweakArray_1.TweakArray());
    // Value: 1) 0 + (2 * 1) = 2
    //        2) 2 + (2 * 2) = 6
    //        3) 6 + (2 * 4) = 14
    //        4) 14 + (2 * 8) = 30
    //        5) 30 + (2 * 16) = 62
    // for (let i = 1; i <= 5; i++) {
    //     console.log(`${i}. ${upgrade.GUI.GetPriceValueOnLevel(0, i)}`);
    // }
    //todo IEqualCheck/IComparable interface? for Float, to compare it with tests
    return new testManager_1.TestManager('Tweaks', [
        new test_1.Test('priceTextWhenBuying1/5OnZeroLevel', 'Check text for upgrade when trying to buy one from zero', 2, function () {
            return upgrade.GUI.GetPriceValue(0).AsNumber;
        }),
        new test_1.Test('priceTextWhenBuying2/5OnZeroLevel', 'Check text for upgrade when trying to buy second level from zero', 6, function () {
            return upgrade.GUI.GetPriceValueOnLevel(0, 2).AsNumber;
        }),
        new test_1.Test('priceTextWhenBuying4/5OnZeroLevel', 'Check text for upgrade when trying to buy 4 / 5 levels from zero', 30, function () {
            return upgrade.GUI.GetPriceValueOnLevel(0, 4).AsNumber;
        }),
        new test_1.Test('priceTextWhenBuying5/5OnZeroLevel', 'Check text for upgrade when trying to buy all from zero', 62, function () {
            return upgrade.GUI.GetPriceValueOnLevel(0, 5).AsNumber;
        }),
        new test_1.Test('priceTextWhenBuying6/5OnZeroLevel', 'Check text for upgrade when trying to buy one above cap', 62, function () {
            return upgrade.GUI.GetPriceValueOnLevel(0, 6).AsNumber;
        }),
        new test_1.Test('priceTextWhenBuying10/5OnZeroLevel', 'Check text for upgrade when trying to buy more above cap', 62, function () {
            return upgrade.GUI.GetPriceValueOnLevel(0, 10).AsNumber;
        }),
    ]);
}
exports.InitUpgradeGUITests = InitUpgradeGUITests;

