
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastMonsterContent = void 0;
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
var FastMonsterContent = /** @class */ (function () {
    function FastMonsterContent(Storage, ContentStorage) {
        var _this = this;
        this.Storage = Storage;
        this.ContentStorage = ContentStorage;
        var id = "FastMonster";
        this.system = new contentModule_1.ContentModule(this.Storage, id + ".System", function () { return ({
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
            IsNotificationShown: new container_1.Container(_this.ContentStorage, id + ".System.IsNotificationShown", false),
            IsEnabled: new container_1.Container(_this.ContentStorage, id + ".System.IsEnabled", true),
        }); });
        this.profile = new contentModule_1.ContentModule(this.Storage, id + ".Profile", function () {
            return new monster_1.Monster(_this.ContentStorage, "" + id, content_1.Content.Monsters.Fast.Unlock, new reward_1.Reward(content_1.Content.Wallets.RebirthPoints, 10), 50, 185, 10000, 1, 1, 100, 1, 5000, 10, 0, 0.9, 2, 0);
        });
        this.unlock = new contentModule_1.ContentModule(this.Storage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnFastMonsterUnlocked());
        });
        this.unlockPurchase = new contentModule_1.ContentModule(this.Storage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Monsters.Fast.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1000000, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]), true);
        });
        this.upgrades = new contentModule_1.ContentModule(this.Storage, id + ".Upgrades", function () { return ({
            Health: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Health", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 5000), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 500000, 1.7, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Health::Health", false, 20, 20, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Health),
                new tweak_1.Tweak(id + ".Health::Reward", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
            ]), undefined, true),
            Speed: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Speed", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 25), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 750000, 1.9, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Speed::Speed", false, 40, 40, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Speed),
                new tweak_1.Tweak(id + ".Speed::Reward", false, 10, 10, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
            ])),
            SpawnTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".SpawnTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 30), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 900000, 1.8, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".SpawnTime", false, 75, 75, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Monsters.Fast.Entity.SpawnTimeMS)
            ])),
            Count: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1250000, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.MaxCount)
            ])),
            Reward: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Reward", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 100), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1500000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Reward", false, 10, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData),
            ])),
            DodgeChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".DodgeChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1500000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".DodgeChance::Chance", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.DodgeChance),
                new tweak_1.Tweak(id + ".DodgeChance::Reward", false, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
            ])),
            DamageReductionMP: new upgrade_1.Upgrade(_this.ContentStorage, id + ".DamageReductionMP", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 2000000, 2.3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".DamageReductionMP::MP", false, 0.01, 0.01, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Monsters.Fast.Entity.DamageReductionMP),
                new tweak_1.Tweak(id + ".DamageReductionMP::Reward", false, 7, 7, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
            ])),
            InstantSpawnChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".InstantSpawnChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 2500000, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".InstantSpawnChance::Chance", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.InstantSpawnChance),
                new tweak_1.Tweak(id + ".InstantSpawnChance::Reward", false, 10, 10, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
            ])),
        }); });
    }
    FastMonsterContent.prototype.InitUI = function () {
        var monster = this.Entity;
        var upgrades = this.Upgrades;
        {
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
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Count"), upgrade, "#4c8a9a", "Count", ["Count"]);
            }
            {
                //# Upgrades: InstantSpawnChance #
                var upgrade = upgrades.InstantSpawnChance;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.InstantSpawnChance"), upgrade, "#814f9c", "Instant pawn chance", ["Health", "Reward"]);
            }
            {
                //# Upgrades: DodgeChance #
                var upgrade = upgrades.DodgeChance;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.DodgeChance"), upgrade, "#3d858a", "Dodge chance", ["Chance", "Reward"]);
            }
            {
                //# Upgrades: DamageReductionMP #
                var upgrade = upgrades.DamageReductionMP;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.DamageReduction"), upgrade, "#a24e4e", "All damage mp", ["Health", "Reward"]);
            }
            {
                //# Upgrades: Reward #
                var upgrade = upgrades.Reward;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(monster.ID + ".Upgrades.Reward"), upgrade, "#519e5e", "Reward", ["RP"]);
            }
        }
    };
    Object.defineProperty(FastMonsterContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FastMonsterContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FastMonsterContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FastMonsterContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FastMonsterContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return FastMonsterContent;
}());
exports.FastMonsterContent = FastMonsterContent;

