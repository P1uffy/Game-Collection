
Object.defineProperty(exports, "__esModule", { value: true });
exports.RailTurretContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var fightManager_1 = __webpack_require__(/*! ../../../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var turret_1 = __webpack_require__(/*! ../../../game/fighting/turret */ "./src/game/fighting/turret.ts");
var buildManager_1 = __webpack_require__(/*! ../../../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var initTurrets_1 = __webpack_require__(/*! ./initTurrets */ "./src/content/modules/turrets/initTurrets.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var RailTurretContent = /** @class */ (function () {
    function RailTurretContent(ModuleStorage, ContentStorage) {
        var _this = this;
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var id = "RailTurret";
        this.system = new contentModule_1.ContentModule(this.ModuleStorage, id + ".System", function () { return ({
            IsBuildModeShown: new container_1.Container(_this.ContentStorage, id + ".System.IsBuildModeShown", false),
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
            IsNotificationShown: new container_1.Container(_this.ContentStorage, id + ".System.IsNotificationShown", false),
        }); });
        this.profile = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Profile", function () {
            return new turret_1.Turret(_this.ContentStorage, "" + id, content_1.Content.Turrets.Rail.Unlock, 5, 0, 0, 2500, 40, 400, 150, 0, 3, 1, 1);
        });
        this.unlock = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnRailTurretUnlocked());
        });
        this.unlockPurchase = new contentModule_1.ContentModule(this.ModuleStorage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Turrets.Rail.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 10000000, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]));
        });
        this.buildInfo = new contentModule_1.ContentModule(this.ModuleStorage, id + ".BuildInfo", function () {
            return new buildManager_1.BuildInfo(_this.ContentStorage, "BuildInfo::" + id, id, "Turret", "OnWall", new buildManager_1.CanBuildTurret(content_1.Content.Turrets.Rail.Entity));
        });
        this.upgrades = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Upgrades", function () { return ({
            Damage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Damage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 200), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 2500000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Damage", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Rail.Entity.Damage)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity), true),
            ReloadTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".ReloadTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 4000000, 2.4, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".ReloadTime", false, 75, 75, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Turrets.Rail.Entity.ReloadTimeMS)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity)),
            Range: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Range", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 25), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 3500000, 2.3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Range", false, 20, 20, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Rail.Entity.Range)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity)),
            HealthDamage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".HealthDamage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 25), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 5000000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".HealthDamage", false, 5, 5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Rail.Entity.HealthDamage)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity)),
            HitsPerShot: new upgrade_1.Upgrade(_this.ContentStorage, id + ".HitsPerShot", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 5), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 10000000, 3.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".HitsPerShot", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Rail.Entity.HitsPerShot)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Rail.Entity)),
        }); });
    }
    RailTurretContent.prototype.InitUI = function () {
        var turret = this.Entity;
        var upgrades = this.Upgrades;
        {
            {
                //# Upgrades: Damage #
                var upgrade = upgrades.Damage;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.Damage"), upgrade, "#a24e4e", "Damage", ["Damage"]);
            }
            {
                //# Upgrades: ReloadTime #
                var upgrade = upgrades.ReloadTime;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.ReloadTime"), upgrade, "#918930", "Reload duration", ["Duration"]);
            }
            {
                //# Upgrades: Range #
                var upgrade = upgrades.Range;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.Range"), upgrade, "#47905f", "Range", ["Range"]);
            }
            {
                //# Upgrades: HealthDamage #
                var upgrade = upgrades.HealthDamage;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.HealthDamage"), upgrade, "#954678", "Health damage", ["Damage"]);
            }
            {
                //# Upgrades: HitsPerShot #
                var upgrade = upgrades.HitsPerShot;
                uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.HitsPerShot"), upgrade, "#8442aa", "Hits per shot", ["Hits"]);
            }
        }
    };
    Object.defineProperty(RailTurretContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailTurretContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailTurretContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailTurretContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailTurretContent.prototype, "BuildInfo", {
        get: function () {
            return this.buildInfo.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RailTurretContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return RailTurretContent;
}());
exports.RailTurretContent = RailTurretContent;

