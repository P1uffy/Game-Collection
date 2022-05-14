
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitTweakTests = void 0;
var testManager_1 = __webpack_require__(/*! ../../testManager */ "./src/testing/testManager.ts");
var test_1 = __webpack_require__(/*! ../../test */ "./src/testing/test.ts");
var wallet_1 = __webpack_require__(/*! ../../../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var gameData_1 = __webpack_require__(/*! ../../../data/game/gameData */ "./src/data/game/gameData.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
function InitTweakTests(context) {
    return new testManager_1.TestManager('Tweaks', [
        new test_1.Test('upgradeBuyTweak', 'Testing tweaked value', 3, function () {
            var rubles = new wallet_1.Wallet(null, 'Rubles', 9999);
            var gameData = new gameData_1.GameData('value', 1);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
                new price_1.Price(rubles, 5, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray(new tweak_1.Tweak('tweak', true, 2, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), gameData)));
            upgrade.Buy(1);
            return gameData.Value.AsNumber;
        }),
        new test_1.Test('upgradeBuyTweak', 'Testing tweaked value with multiple different tweaks', 312, function () {
            var rubles = new wallet_1.Wallet(null, 'Rubles', 9999);
            var gameData = new gameData_1.GameData('value', 1);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
                new price_1.Price(rubles, 5, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak('tweakMp', true, 3, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionTimes(), gameData),
                new tweak_1.Tweak('tweakAdd', true, 6, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), gameData),
                new tweak_1.Tweak('tweakPercent', true, 100, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionWithPercent(), gameData),
                new tweak_1.Tweak('tweakAdd2', true, 6, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), gameData),
                new tweak_1.Tweak('tweakMp2', true, 4, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionTimes(), gameData),
            ]));
            upgrade.Buy(1);
            return gameData.Value.AsNumber;
        }),
    ]);
}
exports.InitTweakTests = InitTweakTests;

