
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikesContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var gameObject_1 = __webpack_require__(/*! ../../../game/gameObject */ "./src/game/gameObject.ts");
var buildManager_1 = __webpack_require__(/*! ../../../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var spikes_1 = __webpack_require__(/*! ../../../game/fighting/buildings/spikes */ "./src/game/fighting/buildings/spikes.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var fightManager_1 = __webpack_require__(/*! ../../../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var initBuildings_1 = __webpack_require__(/*! ./initBuildings */ "./src/content/modules/buildings/initBuildings.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var SpikesContent = /** @class */ (function () {
    function SpikesContent(ModuleStorage, ContentStorage) {
        var _this = this;
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var id = "Spikes";
        this.system = new contentModule_1.ContentModule(this.ModuleStorage, id + ".System", function () { return ({
            IsNotificationShown: new container_1.Container(_this.ContentStorage, id + ".System.IsNotificationShown", false),
            IsBuildModeShown: new container_1.Container(_this.ContentStorage, id + ".System.IsBuildModeShown", false),
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
        }); });
        this.profile = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Profile", function () {
            return new spikes_1.Spikes(_this.ContentStorage, content_1.Content.Turrets.Basic.Unlock, 0, 0.5, 0, 0, 3000, 10, 0.8, 2000, 1);
        });
        this.unlock = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnSpikesUnlocked());
        });
        //todo unlock with researches instead
        this.unlockPurchase = new contentModule_1.ContentModule(this.ModuleStorage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Buildings.Spikes.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 15000, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]));
        });
        this.buildInfo = new contentModule_1.ContentModule(this.ModuleStorage, id + ".BuildInfo", function () {
            return new buildManager_1.BuildInfo(_this.ContentStorage, "BuildInfo::" + id, id, "Building", "OnGrass", new buildManager_1.CanBuildBuilding(gameObject_1.BuildingName.Spikes));
        });
        this.upgrades = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Upgrades", function () { return ({
            Damage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Damage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 200), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 10000, 1.8, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Damage::Damage", false, 0.5, 0.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Buildings.Spikes.Entity.HealthDamage)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes), true),
            ReloadTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".ReloadTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 50), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 15000, 1.9, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".ReloadTime::ReloadTime", false, 50, 50, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Buildings.Spikes.Entity.ReloadTimeMS)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes)),
            HealthBasedDamage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".HealthBasedDamage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 50), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 20000, 1.9, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".HealthBasedDamage", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Buildings.Spikes.Entity.HealthBasedDamagePercent)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes)),
            StunChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".StunChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 30000, 1.85, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".StunChance", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Buildings.Spikes.Entity.StunChance)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes)),
            StunDuration: new upgrade_1.Upgrade(_this.ContentStorage, id + ".StunDuration", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 25), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 40000, 1.9, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".StunDuration", false, 200, 200, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Buildings.Spikes.Entity.StunDurationMS)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes)),
            StunSpeedMP: new upgrade_1.Upgrade(_this.ContentStorage, id + ".StunSpeedMP", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 70000, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".StunSpeedMP", false, 0.05, 0.05, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Buildings.Spikes.Entity.StunSpeedMP)
            ]), new initBuildings_1.UpgradeOnBuyBuilding(gameObject_1.BuildingName.Spikes)),
        }); });
    }
    SpikesContent.prototype.InitUI = function () {
        //# Damage #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.Damage"), content_1.Content.Buildings.Spikes.Upgrades.Damage, "#934848", "Health damage", ["Damage"]);
        //# ReloadTime #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.ReloadTime"), content_1.Content.Buildings.Spikes.Upgrades.ReloadTime, "#519e5e", "Reload duration", ["Duration"]);
        //# HealthBasedDamage #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.HealthBasedDamage"), content_1.Content.Buildings.Spikes.Upgrades.HealthBasedDamage, "#8d3d52", "HP based damage", ["% of HP"]);
        //# StunChance #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.StunChance"), content_1.Content.Buildings.Spikes.Upgrades.StunChance, "#4b9564", "Stun chance", ["Chance"]);
        //# StunDuration #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.StunDuration"), content_1.Content.Buildings.Spikes.Upgrades.StunDuration, "#3d8e94", "Stun duration", ["Duration"]);
        //# StunSpeedMP #
        uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Building.Spikes.StunSpeedMP"), content_1.Content.Buildings.Spikes.Upgrades.StunSpeedMP, "#236099", "Stun slowdown", ["Slowdown"]);
    };
    Object.defineProperty(SpikesContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpikesContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpikesContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpikesContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpikesContent.prototype, "BuildInfo", {
        get: function () {
            return this.buildInfo.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpikesContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return SpikesContent;
}());
exports.SpikesContent = SpikesContent;

