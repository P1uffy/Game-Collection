
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmoredMonsterContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var fightManager_1 = __webpack_require__(/*! ../../../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var monster_1 = __webpack_require__(/*! ../../../game/fighting/monster */ "./src/game/fighting/monster.ts");
var reward_1 = __webpack_require__(/*! ../../../data/game/reward */ "./src/data/game/reward.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var ArmoredMonsterContent = /** @class */ (function () {
    function ArmoredMonsterContent(Storage, ContentStorage) {
        var _this = this;
        this.Storage = Storage;
        this.ContentStorage = ContentStorage;
        var id = "ArmoredMonster";
        this.system = new contentModule_1.ContentModule(this.Storage, id + ".System", function () { return ({
            IsNotificationShown: new container_1.Container(_this.ContentStorage, id + ".System.IsNotificationShown", false),
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
            IsEnabled: new container_1.Container(_this.ContentStorage, id + ".System.IsEnabled", true)
        }); });
        this.profile = new contentModule_1.ContentModule(this.Storage, id + ".Profile", function () {
            return new monster_1.Monster(_this.ContentStorage, "" + id, content_1.Content.Monsters.Armored.Unlock, new reward_1.Reward(content_1.Content.Wallets.Coins, 1250), 100, 30, 7500, 1, 10, 0, 5, 2500, 0, 0, 1, 2, 0);
        });
        this.unlock = new contentModule_1.ContentModule(this.Storage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnArmoredMonsterUnlocked());
        });
        this.unlockPurchase = new contentModule_1.ContentModule(this.Storage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Monsters.Armored.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 2500, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]));
        });
        this.upgrades = new contentModule_1.ContentModule(this.Storage, id + ".Upgrades", function () { return ({
            Health: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Health", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 100), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 2000, 1.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Health::Health", false, 25, 25, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Health),
                new tweak_1.Tweak(id + ".Health::Reward", false, 500, 500, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Reward.ValueData)
            ]), undefined, true),
            Speed: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Speed", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 50), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 5000, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Speed::Speed", false, 10, 10, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Speed),
                new tweak_1.Tweak(id + ".Speed::Reward", false, 500, 500, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Reward.ValueData)
            ])),
            SpawnTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".SpawnTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 50), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 7500, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".SpawnTime::SpawnTime", false, 125, 125, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Monsters.Armored.Entity.SpawnTimeMS)
            ])),
            Count: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 10000, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Count::Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.MaxCount)
            ])),
            InstantSpawnChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".InstantSpawnChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 20000, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".InstantSpawnChance::Chance", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.InstantSpawnChance),
                new tweak_1.Tweak(id + ".InstantSpawnChance::Reward", false, 1000, 1000, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Reward.ValueData)
            ])),
            Shield: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Shield", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 400000, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Shield::Shield", false, 200, 200, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Shield),
                new tweak_1.Tweak(id + ".Shield::Reward", false, 5000, 5000, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.Reward.ValueData)
            ])),
        }); });
    }
    ArmoredMonsterContent.prototype.InitUI = function () {
        var monster = this.Entity;
        var upgrades = this.Upgrades;
        {
            //# Upgrades: Health #
            var upgrade = upgrades.Health;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Health"), upgrade, "#519e5e", "Health", ["Health", "Reward"]);
        }
        {
            //# Upgrades: Speed #
            var upgrade = upgrades.Speed;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Speed"), upgrade, "#5581af", "Speed", ["Speed", "Reward"]);
        }
        {
            //# Upgrades: SpawnTime #
            var upgrade = upgrades.SpawnTime;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.SpawnTime"), upgrade, "#89833e", "Spawn duration", ["Duration"]);
        }
        {
            //# Upgrades: Count #
            var upgrade = upgrades.Count;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Count"), upgrade, "#4c8a9a", "Max count", ["Count"]);
        }
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
    Object.defineProperty(ArmoredMonsterContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmoredMonsterContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmoredMonsterContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmoredMonsterContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmoredMonsterContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return ArmoredMonsterContent;
}());
exports.ArmoredMonsterContent = ArmoredMonsterContent;

