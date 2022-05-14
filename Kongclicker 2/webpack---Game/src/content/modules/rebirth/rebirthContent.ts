
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RebirthContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var gameData_1 = __webpack_require__(/*! ../../../data/game/gameData */ "./src/data/game/gameData.ts");
var points_1 = __webpack_require__(/*! ../../../game/gameObjects/points */ "./src/game/gameObjects/points.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var gameObject_1 = __webpack_require__(/*! ../../../game/gameObject */ "./src/game/gameObject.ts");
var initTurrets_1 = __webpack_require__(/*! ../turrets/initTurrets */ "./src/content/modules/turrets/initTurrets.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var themeUnlocks_1 = __webpack_require__(/*! ../../themeUnlocks */ "./src/content/themeUnlocks.ts");
var monster_1 = __webpack_require__(/*! ../../../game/fighting/monster */ "./src/game/fighting/monster.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var initBuildings_1 = __webpack_require__(/*! ../buildings/initBuildings */ "./src/content/modules/buildings/initBuildings.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var game_1 = __webpack_require__(/*! ../../../game */ "./src/game.ts");
var RebirthContent = /** @class */ (function () {
    function RebirthContent(ModuleStorage, ContentStorage) {
        var _this = this;
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var moduleId = "Rebirth";
        //# STATS #
        {
            var id_1 = moduleId + ".Stats";
            this.stats = new contentModule_1.ContentModule(this.ModuleStorage, id_1, function () { return ({
                IsNotificationShow: new container_1.Container(ContentStorage, id_1 + ".IsNotificationShow", false),
                PointsPerLevel: new gameData_1.GameData(id_1 + ".PointsPerLevel", 0.1),
                NextPointProgress: new points_1.Points(_this.ContentStorage, id_1 + ".NextPointProgress", new level_1.Level(0, null), 0, 40, 0.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), function (levels) {
                    if (content_1.SystemData.IsContentLoaded) {
                        var value = content_1.Content.Rebirth.Stats.PointsPerLevel.Value.Times(levels);
                        content_1.Content.Rebirth.Stats.RebirthAward.Value
                            = float_1.Float.Plus(content_1.Content.Rebirth.Stats.RebirthAward.Value, value);
                    }
                }),
                RebirthAwardMP: new gameData_1.GameData(id_1 + ".RebirthAwardMP", 1),
                RebirthAward: new container_1.Container(_this.ContentStorage, id_1 + ".RebirthAward", new float_1.Float(0), container_1.FloatContainer),
                NonRebirthAward: new container_1.Container(_this.ContentStorage, id_1 + ".NonRebirthAward", new float_1.Float(0), container_1.FloatContainer),
                HappenedCount: new float_1.GameFloat(_this.ContentStorage, id_1 + ".HappenedCount", 0),
                TotalRPMade: new float_1.GameFloat(_this.ContentStorage, id_1 + ".TotalRPMade", 0),
                LastRebirth: new container_1.Container(_this.ContentStorage, id_1 + ".LastRebirth", new Date(), container_1.DateContainer),
            }); });
        }
        //# MAIN #
        {
            var id_2 = moduleId + ".Main";
            this.main = new contentModule_1.ContentModule(this.ModuleStorage, id_2, function () { return ({
                StartCoinBonus: new upgrade_1.Upgrade(_this.ContentStorage, id_2 + ".StartCoinBonus", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 100), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 0.1, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_2 + ".StartCoinBonus", false, 10, 1.85, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionPlus(), content_1.Content.Stats.Game.StartCoins)
                ]), undefined, true),
                RPPerLevel: new upgrade_1.Upgrade(_this.ContentStorage, id_2 + ".RPPerLevel", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 0.5, 2.1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_2 + ".RPPerLevel", false, 0.05, 0.05, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Rebirth.Stats.PointsPerLevel)
                ]), undefined, true),
                RPRewardMP: new upgrade_1.Upgrade(_this.ContentStorage, id_2 + ".RPRewardMP", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 50, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_2 + ".RPRewardMP", false, 1.5, 0.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionTimes(), content_1.Content.Rebirth.Stats.RebirthAwardMP)
                ]), undefined, false),
            }); });
        }
        //# MONSTERS #
        {
            var id_3 = moduleId + ".BasicMonster";
            this.basicMonster = new contentModule_1.ContentModule(this.ModuleStorage, id_3, function () { return ({
                Count: new upgrade_1.Upgrade(_this.ContentStorage, id_3 + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 0.25, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_3 + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.MaxCount)
                ]), undefined, true),
                Reward: new upgrade_1.Upgrade(_this.ContentStorage, id_3 + ".Reward", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 0.2, 2.3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_3 + ".Reward", false, 25, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionWithPercent(), content_1.Content.Monsters.Basic.Entity.Reward.ValueData)
                ]), undefined, true),
                RPDropChance: new upgrade_1.Upgrade(_this.ContentStorage, id_3 + ".RPDropChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 20, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_3 + ".RPDropChance", false, 2.5, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.RPDropChance)
                ])),
                RPDropValue: new upgrade_1.Upgrade(_this.ContentStorage, id_3 + ".RPDropValue", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 40, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_3 + ".RPDropValue", false, 0.1, 1.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Basic.Entity.RPDropValue)
                ])),
            }); });
        }
        {
            var id_4 = moduleId + ".ArmoredMonster";
            this.armoredMonster = new contentModule_1.ContentModule(this.ModuleStorage, id_4, function () { return ({
                Reward: new upgrade_1.Upgrade(_this.ContentStorage, id_4 + ".Reward", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 25, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_4 + ".Reward", false, 100, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionWithPercent(), content_1.Content.Monsters.Armored.Entity.Reward.ValueData)
                ]), undefined, true),
                RPDropChance: new upgrade_1.Upgrade(_this.ContentStorage, id_4 + ".RPDropChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 100, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_4 + ".RPDropChance", false, 2.5, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.RPDropChance)
                ])),
                RPDropValue: new upgrade_1.Upgrade(_this.ContentStorage, id_4 + ".RPDropValue", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 150, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_4 + ".RPDropValue", false, 10, 1.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionPlus(), content_1.Content.Monsters.Armored.Entity.RPDropValue)
                ])),
            }); });
        }
        {
            var id_5 = moduleId + ".FastMonster";
            this.fastMonster = new contentModule_1.ContentModule(this.ModuleStorage, id_5, function () { return ({
                Reward: new upgrade_1.Upgrade(_this.ContentStorage, id_5 + ".Reward", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 25, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_5 + ".Reward", false, 25, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical), new tweak_1.TweakFunctionWithPercent(), content_1.Content.Monsters.Fast.Entity.Reward.ValueData)
                ]), undefined, true),
            }); });
        }
        //# TURRETS #
        {
            var id_6 = moduleId + ".BasicTurret";
            this.basicTurret = new contentModule_1.ContentModule(this.ModuleStorage, id_6, function () { return ({
                Count: new upgrade_1.Upgrade(_this.ContentStorage, id_6 + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 2, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_6 + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Basic.Entity.Count)
                ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Basic.Entity), true),
            }); });
        }
        {
            var id_7 = moduleId + ".LaserTurret";
            this.laserTurret = new contentModule_1.ContentModule(this.ModuleStorage, id_7, function () { return ({
                Count: new upgrade_1.Upgrade(_this.ContentStorage, id_7 + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 500, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_7 + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.Count)
                ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity), true),
            }); });
        }
        {
            var id_8 = moduleId + ".RailTurret";
            this.railTurret = new contentModule_1.ContentModule(this.ModuleStorage, id_8, function () { return ({
                Count: new upgrade_1.Upgrade(_this.ContentStorage, id_8 + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 2500, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_8 + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Rail.Entity.Count)
                ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity), true),
            }); });
        }
        {
            var id_9 = moduleId + ".Spikes";
            this.spikes = new contentModule_1.ContentModule(this.ModuleStorage, id_9, function () { return ({
                Count: new upgrade_1.Upgrade(_this.ContentStorage, id_9 + ".Count", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                    new price_1.Price(content_1.Content.Wallets.RebirthPoints, 100, 4, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
                ]), new tweakArray_1.TweakArray([
                    new tweak_1.Tweak(id_9 + ".Count", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Buildings.Spikes.Entity.Count)
                ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes), true),
            }); });
        }
    }
    RebirthContent.prototype.InitUI = function () {
        //# Main #
        {
            var upgrades = content_1.Content.Rebirth.Main;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.Main.StartCoins"), upgrades.StartCoinBonus, "#89833e", "Start Coins", ["Coins"]);
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.Main.RPValue"), upgrades.RPPerLevel, "#4b9564", "RP per level", ["RP Value"]);
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.Main.RPRewardMP"), upgrades.RPRewardMP, "#4b9564", "Rebirth award MP", ["RP Value"]);
        }
        //# MONSTERS MONSTERS MONSTERS MONSTERS#
        {
            //# Basic #
            {
                var upgrades = content_1.Content.Rebirth.BasicMonster;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.BasicMonster.Reward"), upgrades.Reward, "#89833e", "Reward", ["Coins"]);
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.BasicMonster.Count"), upgrades.Count, "#4c8a9a", "Start count", ["Count"]);
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.BasicMonster.RPDropChance"), upgrades.RPDropChance, "#4b9564", "RP drop chance", ["Chance"]);
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.BasicMonster.RPDropValue"), upgrades.RPDropValue, "#4b9564", "RP drop value", ["RP"]);
            }
            //# Armored #
            {
                var upgrades = content_1.Content.Rebirth.ArmoredMonster;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.ArmoredMonster.Reward"), upgrades.Reward, "#89833e", "Reward", ["Coins"]);
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.ArmoredMonster.RPDropChance"), upgrades.RPDropChance, "#4b9564", "RP drop chance", ["Chance"]);
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.ArmoredMonster.RPDropValue"), upgrades.RPDropValue, "#4b9564", "RP drop value", ["RP"]);
            }
            //# Fast #
            {
                var upgrades = content_1.Content.Rebirth.FastMonster;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.FastMonster.Reward"), upgrades.Reward, "#89833e", "Reward", ["RP"]);
            }
        }
        //# TURRETS TURRETS TURRETS TURRETS#
        {
            //# Basic #
            {
                var upgrades = content_1.Content.Rebirth.BasicTurret;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.BasicTurret.Count"), upgrades.Count, "#636cb0", "Max count", ["Count"]);
            }
            //# Laser #
            {
                var upgrades = content_1.Content.Rebirth.LaserTurret;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.LaserTurret.Count"), upgrades.Count, "#636cb0", "Max count", ["Count"]);
            }
            //# Rail #
            {
                var upgrades = content_1.Content.Rebirth.RailTurret;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.RailTurret.Count"), upgrades.Count, "#636cb0", "Max count", ["Count"]);
            }
        }
        //# Spikes #
        {
            var upgrades = content_1.Content.Rebirth.Spikes;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Rebirth.Spikes.Count"), upgrades.Count, "#636cb0", "Max count", ["Count"]);
        }
    };
    Object.defineProperty(RebirthContent.prototype, "Stats", {
        get: function () {
            return this.stats.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "Main", {
        get: function () {
            return this.main.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "BasicMonster", {
        //# Monsters #
        get: function () {
            return this.basicMonster.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "ArmoredMonster", {
        get: function () {
            return this.armoredMonster.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "FastMonster", {
        get: function () {
            return this.fastMonster.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "BasicTurret", {
        //# Turrets #
        get: function () {
            return this.basicTurret.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "LaserTurret", {
        get: function () {
            return this.laserTurret.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "RailTurret", {
        get: function () {
            return this.railTurret.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "Spikes", {
        //# Buildings #
        get: function () {
            return this.spikes.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RebirthContent.prototype, "CurrentRebirthAward", {
        get: function () {
            var award = float_1.Float.Plus(content_1.Content.Rebirth.Stats.RebirthAward.Value, content_1.Content.Rebirth.Stats.NonRebirthAward.Value);
            award = award.Times(content_1.Content.Rebirth.Stats.RebirthAwardMP.Value);
            return award;
        },
        enumerable: false,
        configurable: true
    });
    RebirthContent.prototype.Activate = function () {
        game_1.StopwatchStart('WholeRebirth');
        //# As we destroy monster when rebirth, we dont want to show award popups for them #
        var showMonsterAwardBefore = content_1.SystemData.Settings.ShowMonsterAward;
        content_1.SystemData.Settings.ShowMonsterAward = false;
        //# Wallets #
        var award = this.CurrentRebirthAward;
        content_1.Content.Wallets.RebirthPoints.Add(award);
        content_1.Content.Rebirth.Stats.RebirthAward.Value = new float_1.Float(0);
        content_1.Content.Rebirth.Stats.NonRebirthAward.Value = new float_1.Float(0);
        content_1.Content.Wallets.Coins.Reset();
        content_1.Content.Wallets.Coins.Set(content_1.Content.Stats.Game.StartCoins.Value);
        //# Statistics #
        content_1.Content.Rebirth.Stats.HappenedCount.Value = content_1.Content.Rebirth.Stats.HappenedCount.Plus(1);
        content_1.Content.Rebirth.Stats.TotalRPMade.Value = float_1.Float.Plus(content_1.Content.Rebirth.Stats.TotalRPMade, award);
        content_1.Content.Rebirth.Stats.LastRebirth.Value = new Date();
        game_1.StopwatchStart('ResetUpgrades');
        //# Reset all Monster/Turrets coin upgrades and UnlockPurchases to reset stats and unlocks #
        for (var _i = 0, _a = __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Monsters.Basic.Upgrades), utilsObjects_1.ValuesOf(content_1.Content.Monsters.Armored.Upgrades), utilsObjects_1.ValuesOf(content_1.Content.Turrets.Basic.Upgrades), utilsObjects_1.ValuesOf(content_1.Content.Turrets.Laser.Upgrades), utilsObjects_1.ValuesOf(content_1.Content.Buildings.Spikes.Upgrades)); _i < _a.length; _i++) {
            var upgrade = _a[_i];
            upgrade.Reset();
        }
        game_1.StopwatchStop('ResetUpgrades');
        //# Reset themes #
        game_1.StopwatchStart('InitThemeUnlocks');
        themeUnlocks_1.InitThemeUnlocks();
        game_1.StopwatchStop('InitThemeUnlocks');
        //# Reset monster spawn timer and current spawn data #
        content_1.Content.Timers.Game.MonsterSpawn.ResetData();
        content_1.Managers.Fight.ResetSpawn();
        //# Destroy monster instances #
        for (var _b = 0, _c = content_1.ContentStorage.GetAllItemsOfType(monster_1.Monster); _b < _c.length; _b++) {
            var monster = _c[_b];
            monster.DestroyAllInstances();
        }
        //# Re-enable menus #
        game_1.StopwatchStart('ReEnableMenus');
        content_1.Content.Turrets.Basic.Unlock.Toggle(true);
        content_1.Content.Turrets.Laser.Unlock.Toggle(content_1.Content.Turrets.Laser.Unlock.IsUnlocked);
        content_1.Content.Monsters.Basic.Unlock.Toggle(true);
        content_1.Content.Monsters.Armored.Unlock.Toggle(content_1.Content.Monsters.Armored.Unlock.IsUnlocked);
        content_1.Content.Buildings.Spikes.Unlock.Toggle(content_1.Content.Buildings.Spikes.Unlock.IsUnlocked);
        game_1.StopwatchStop('ReEnableMenus');
        //# As we reset turret upgrades, we need to update our instances #
        content_1.Managers.Fight.UpdateTurrets();
        //# Reset settings back to previous values #
        content_1.SystemData.Settings.ShowMonsterAward = showMonsterAwardBefore;
        game_1.StopwatchStart('UpdateThemeUnlocks');
        //# Update themes to get all changes we made before #
        themeUnlocks_1.UpdateThemeUnlocks();
        game_1.StopwatchStop('UpdateThemeUnlocks');
        utilsGUI_1.ToggleSelector("BuildModeBuilding", "BasicTurret");
        game_1.StopwatchStop('WholeRebirth');
    };
    return RebirthContent;
}());
exports.RebirthContent = RebirthContent;

