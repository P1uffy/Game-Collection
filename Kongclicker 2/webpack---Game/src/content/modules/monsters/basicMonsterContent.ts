
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicMonsterContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var monster_1 = __webpack_require__(/*! ../../../game/fighting/monster */ "./src/game/fighting/monster.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var reward_1 = __webpack_require__(/*! ../../../data/game/reward */ "./src/data/game/reward.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var fightManager_1 = __webpack_require__(/*! ../../../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var BasicMonsterContent = /** @class */ (function () {
    function BasicMonsterContent(Storage, ContentStorage) {
        var _this = this;
        this.Storage = Storage;
        this.ContentStorage = ContentStorage;
        var id = "BasicMonster";
        this.system = new contentModule_1.ContentModule(this.Storage, id + ".System", function () { return ({
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
            IsEnabled: new container_1.Container(_this.ContentStorage, id + ".System.IsEnabled", true),
        }); });
        this.profile = new contentModule_1.ContentModule(this.Storage, id + ".Profile", function () {
            return new monster_1.Monster(_this.ContentStorage, "" + id, content_1.Content.Monsters.Basic.Unlock, new reward_1.Reward(content_1.Content.Wallets.Coins, 0.1), 0.5, 70, 3000, 1, 0.1, 0, 10, 750, 0, 0, 1, 2, 0);
        });
        this.unlock = new contentModule_1.ContentModule(this.Storage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnBasicMonsterUnlocked());
        });
        this.unlockPurchase = new contentModule_1.ContentModule(this.Storage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Monsters.Basic.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 0.1, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]), true);
        });
        this.upgrades = new contentModule_1.ContentModule(this.Storage, id + ".Upgrades", function () { return ({
            Health: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Health", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 5000), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 0.2, 1.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Health::Health", false, 0.1, 0.1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Health),
                new tweak_1.Tweak(id + ".Health::Reward", false, 0.2, 0.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Reward.ValueData)
            ]), undefined, true),
            Speed: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Speed", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 50), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1.5, 2.7, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Speed::Speed", false, 15, 15, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Speed),
                new tweak_1.Tweak(id + ".Speed::Reward", false, 0.4, 0.4, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Reward.ValueData)
            ])),
            Count: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 5, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Count::Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.MaxCount)
            ])),
            SpawnTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".SpawnTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 10, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".SpawnTime::SpawnTime", false, 75, 75, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Monsters.Basic.Entity.SpawnTimeMS)
            ])),
            InstantSpawnChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".InstantSpawnChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 100, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".InstantSpawnChance::Chance", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.InstantSpawnChance),
                new tweak_1.Tweak(id + ".InstantSpawnChance::Reward", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Reward.ValueData)
            ])),
            //todo show notfication when unlocked maybe?
            Shield: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Shield", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 250000, 1.8, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Shield::Shield", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Shield),
                new tweak_1.Tweak(id + ".Shield::Reward", false, 7, 7, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.Reward.ValueData)
            ])),
        }); });
    }
    BasicMonsterContent.prototype.InitUI = function () {
        var monster = this.Entity;
        var upgrades = this.Upgrades;
        {
            //# Upgrades: InstantSpawnChance #
            var upgrade = upgrades.InstantSpawnChance;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.InstantSpawnChance"), upgrade, "#814f9c", "Instant spawn chance", ["Chance", "Reward"]);
        }
        {
            //# Upgrades: Shield #
            var upgrade = upgrades.Shield;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Shield"), upgrade, "#4b7fd2", "Shield", ["Shield", "Reward"]);
        }
    };
    Object.defineProperty(BasicMonsterContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicMonsterContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicMonsterContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicMonsterContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicMonsterContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return BasicMonsterContent;
}());
exports.BasicMonsterContent = BasicMonsterContent;

