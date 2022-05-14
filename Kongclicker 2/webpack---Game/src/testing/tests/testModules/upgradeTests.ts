
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUpgradeTests = void 0;
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
var objectStorage_1 = __webpack_require__(/*! ../../../data/objectStorage */ "./src/data/objectStorage.ts");
var points_1 = __webpack_require__(/*! ../../../game/gameObjects/points */ "./src/game/gameObjects/points.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
function InitUpgradeTests(context) {
    return new testManager_1.TestManager('Upgrades', [
        new test_1.Test('upgradeBuy1', 'Upgrade price check after buying it once', 10, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 100);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 5, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            upgrade.Buy(1);
            return upgrade.Prices[0].Value.AsNumber;
        }),
        new test_1.Test('upgradeBuy2', 'Upgrade price check after buying it twice', 20, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 100);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 5, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            upgrade.Buy(2);
            return upgrade.Prices[0].Value.AsNumber;
        }),
        new test_1.Test('upgradeBuyLevel', 'Upgrade level check after buying it 10 times', 10, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 9999);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray(new price_1.Price(wallet, 5, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))), new tweakArray_1.TweakArray([]));
            upgrade.Buy(10);
            return upgrade.Level.Value.AsNumber;
        }),
        new test_1.Test('upgradeBuyExactly', 'Upgrade buy exactly as can be bought', 0, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 14);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, null), new priceArray_1.PriceArray(new price_1.Price(wallet, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))), 
            /*
            1) wallet: 20, price: 2, 20 - 2 = 18
            2) wallet: 18, price: 4, 18 - 4 = 14
            3) wallet: 14, price: 8, 14 - 8 = 6,
            4) wallet: 6, price: 16, can't buy more
            */
            new tweakArray_1.TweakArray([]));
            upgrade.Buy(3);
            return wallet.Value.AsNumber;
        }),
        new test_1.Test('upgradeBuyMoreThanCan', 'Upgrade buy more by one than can buy', false, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 20);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, null), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            try {
                upgrade.Buy(4);
                return true;
            }
            catch (error) {
                return false;
            }
        }),
        new test_1.Test('upgradeBuyMoreThanCan2', 'Upgrade buy more by one than can buy #2', false, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 14);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, -1), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            try {
                upgrade.Buy(4);
                return true;
            }
            catch (error) {
                return false;
            }
        }),
        new test_1.Test('upgradeBuyWithoutMoney', 'Upgrade trying to buy upgrade when have no money', false, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 99);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 100, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            try {
                upgrade.Buy(1);
                return true;
            }
            catch (error) {
                return false;
            }
        }),
        new test_1.Test('upgradeBuyAboveMaxLevel', 'Check level when buy above max level', 5, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 10000);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
                new price_1.Price(wallet, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical))
            ]), new tweakArray_1.TweakArray([]));
            upgrade.Buy(10);
            return upgrade.Level.Value.AsNumber;
        }),
        new test_1.Test('upgradeBuyMax', 'Random Upgrade re-inits', 14, function () {
            var wallet = new wallet_1.Wallet(null, 'Rubles', 2950);
            var upgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, null), new priceArray_1.PriceArray(new price_1.Price(wallet, 9, 30, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical))), new tweakArray_1.TweakArray([]));
            upgrade.BuyMax();
            return upgrade.Level.Value.AsNumber;
        }),
        new test_1.Test('randomUpgradesInitFrom', 'Random Upgrade re-inits', 10, function () {
            var completedReInits = 0;
            for (var i = 0; i < 10; i++) {
                var walletValue = context.Random.integer(100, 10000);
                var priceValue = context.Random.integer(1, 50);
                var priceStep = context.Random.integer(2, 50);
                var progression = context.Random.pick([progression_1.ProgressionType.Arithmetical, progression_1.ProgressionType.Geometrical]);
                var storage = new objectStorage_1.ObjectStorage();
                //todo random progression too
                var loadedWallet = new wallet_1.Wallet(null, 'Rubles', walletValue);
                var loadedUpgrade = new upgrade_1.Upgrade(null, 'Upgrade', context.BuyCount, new level_1.Level(0, null), new priceArray_1.PriceArray(new price_1.Price(loadedWallet, priceValue, priceStep, new progressionCalculator_1.ProgressionCalculator(progression))), new tweakArray_1.TweakArray([]));
                loadedUpgrade.BuyMax();
                var currentWallet = new wallet_1.Wallet(storage, 'Rubles', 0);
                var currentUpgrade = new upgrade_1.Upgrade(storage, 'Upgrade', context.BuyCount, new level_1.Level(0, null), new priceArray_1.PriceArray(new price_1.Price(currentWallet, priceValue, priceStep, new progressionCalculator_1.ProgressionCalculator(progression))), new tweakArray_1.TweakArray([]));
                currentUpgrade.InitFrom(storage, loadedUpgrade);
                if (loadedUpgrade.Level.Value.IsEqual(currentUpgrade.Level.Value)) {
                    completedReInits++;
                }
                else {
                    // console.log(`randomReInitLoop: Error with values: `
                    //     + `\n - walletValue: ${walletValue}`
                    //     + `\n - priceValue: ${priceValue}`
                    //     + `\n - priceStep: ${priceStep}`);
                }
            }
            return completedReInits;
        }),
        new test_1.Test('randomPointsMathTest', 'Random Points math check', 10, function () {
            var completedReInits = 0;
            for (var i = 0; i < 10; i++) {
                var maxPoints = context.Random.integer(1, 20);
                var maxPointsStep = context.Random.real(1.1, 5);
                var points = context.Random.integer(1, 10000);
                var progression = context.Random.pick([progression_1.ProgressionType.Arithmetical, progression_1.ProgressionType.Geometrical]);
                var optimized = new points_1.Points(null, "test", new level_1.Level(0, null), 0, maxPoints, maxPointsStep, new progressionCalculator_1.ProgressionCalculator(progression));
                optimized.AddPoints(new float_1.Float(points));
                var notOptimized = new points_1.Points(null, "test", new level_1.Level(0, null), 0, maxPoints, maxPointsStep, new progressionCalculator_1.ProgressionCalculator(progression));
                notOptimized.AddPoints(new float_1.Float(points), false);
                if (optimized.LevelValue.IsEqual(notOptimized.LevelValue)) {
                    completedReInits++;
                }
                else {
                    //console.log(`Optimized: ${optimized.LevelValue}\nNot optimized: ${notOptimized.LevelValue}\n`);
                    //debugger
                }
            }
            return completedReInits;
        }),
        new test_1.Test('randomPointsInitFrom', 'Random Points re-inits', 10, function () {
            var completedReInits = 0;
            for (var i = 0; i < 10; i++) {
                var storage = new objectStorage_1.ObjectStorage();
                var maxPoints = context.Random.integer(1, 1000);
                var maxPointsStep = context.Random.integer(2, 50);
                var points = context.Random.integer(1, 50000);
                var progression = context.Random.pick([progression_1.ProgressionType.Arithmetical, progression_1.ProgressionType.Geometrical]);
                var oldP = new points_1.Points(null, "test", new level_1.Level(0, null), 0, maxPoints, maxPointsStep, new progressionCalculator_1.ProgressionCalculator(progression));
                try {
                    oldP.AddPoints(new float_1.Float(points));
                }
                catch (e) {
                    console.log("Error on step 1");
                    throw e;
                }
                var newP = new points_1.Points(storage, "test", new level_1.Level(0, null), 0, maxPoints, maxPointsStep, new progressionCalculator_1.ProgressionCalculator(progression));
                try {
                    newP.InitFrom(storage, oldP);
                }
                catch (e) {
                    console.log("Error on step 2");
                    throw e;
                }
                if (newP.LevelValue.IsEqual(oldP.LevelValue)) {
                    completedReInits++;
                }
            }
            return completedReInits;
        }),
    ]);
}
exports.InitUpgradeTests = InitUpgradeTests;

