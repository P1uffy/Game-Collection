
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaserTurretContent = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var priceArray_1 = __webpack_require__(/*! ../../../data/priceArray */ "./src/data/priceArray.ts");
var price_1 = __webpack_require__(/*! ../../../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
var fightManager_1 = __webpack_require__(/*! ../../../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var turret_1 = __webpack_require__(/*! ../../../game/fighting/turret */ "./src/game/fighting/turret.ts");
var buildManager_1 = __webpack_require__(/*! ../../../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var level_1 = __webpack_require__(/*! ../../../data/game/level */ "./src/data/game/level.ts");
var tweakArray_1 = __webpack_require__(/*! ../../../game/tweakArray */ "./src/game/tweakArray.ts");
var tweak_1 = __webpack_require__(/*! ../../../game/tweak */ "./src/game/tweak.ts");
var initTurrets_1 = __webpack_require__(/*! ./initTurrets */ "./src/content/modules/turrets/initTurrets.ts");
var uiBuilder_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts");
var gui_1 = __webpack_require__(/*! ../../../ui/gui */ "./src/ui/gui.ts");
var LaserTurretContent = /** @class */ (function () {
    function LaserTurretContent(ModuleStorage, ContentStorage) {
        var _this = this;
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var id = "LaserTurret";
        this.system = new contentModule_1.ContentModule(this.ModuleStorage, id + ".System", function () { return ({
            IsNotificationShown: new container_1.Container(_this.ContentStorage, id + ".System.IsNotificationShown", false),
            IsBuildModeShown: new container_1.Container(_this.ContentStorage, id + ".System.IsBuildModeShown", false),
            IsEverUnlocked: new container_1.Container(_this.ContentStorage, id + ".System.IsEverUnlocked", false),
        }); });
        this.profile = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Profile", function () {
            return new turret_1.Turret(_this.ContentStorage, "" + id, content_1.Content.Turrets.Laser.Unlock, 1, 0, 0, 250, 200, 1000, 180, 0, 3, 1, 1);
        });
        this.unlock = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Unlock", function () {
            return new unlock_1.Unlock(_this.ContentStorage, "Unlock::" + id, false, new fightManager_1.OnLaserTurretUnlocked());
        });
        this.unlockPurchase = new contentModule_1.ContentModule(this.ModuleStorage, id + ".UnlockPurchase", function () {
            return new upgrade_1.UnlockUpgrade(_this.ContentStorage, id + ".UnlockPurchase", content_1.Content.Turrets.Laser.Unlock, new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 150000, 0, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical)),
            ]));
        });
        this.buildInfo = new contentModule_1.ContentModule(this.ModuleStorage, id + ".BuildInfo", function () {
            return new buildManager_1.BuildInfo(_this.ContentStorage, "BuildInfo::" + id, id, "Turret", "OnWall", new buildManager_1.CanBuildTurret(content_1.Content.Turrets.Laser.Entity));
        });
        this.upgrades = new contentModule_1.ContentModule(this.ModuleStorage, id + ".Upgrades", function () { return ({
            Damage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Damage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 200), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 85000, 2.3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Damage::Damage", false, 0.5, 0.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.Damage)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity), true),
            RotationSpeed: new upgrade_1.Upgrade(_this.ContentStorage, id + ".RotationSpeed", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 150000, 3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".RotationSpeed::RotationSpeed", false, 10, 10, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.RotateSpeed)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
            ReloadTime: new upgrade_1.Upgrade(_this.ContentStorage, id + ".ReloadTime", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 10), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 200000, 2.5, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".ReloadTime::ReloadTime", false, 10, 10, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionMinus(), content_1.Content.Turrets.Laser.Entity.ReloadTimeMS)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
            Range: new upgrade_1.Upgrade(_this.ContentStorage, id + ".Range", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 20), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 125000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".Range::Range", false, 25, 25, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.Range)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
            CriticalChance: new upgrade_1.Upgrade(_this.ContentStorage, id + ".CriticalChance", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 750000, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".CriticalChance", false, 2, 2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.CriticalDamageChance)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
            CriticalMP: new upgrade_1.Upgrade(_this.ContentStorage, id + ".CriticalMP", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 25), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 1000000, 2.2, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".CriticalMP", false, 0.1, 0.1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.CriticalDamageMP)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
            ShieldDamage: new upgrade_1.Upgrade(_this.ContentStorage, id + ".ShieldDamage", content_1.Content.Settings.System.BuyCount, new level_1.Level(0, 15), new priceArray_1.PriceArray([
                new price_1.Price(content_1.Content.Wallets.Coins, 200000, 2.3, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical)),
            ]), new tweakArray_1.TweakArray([
                new tweak_1.Tweak(id + ".ShieldDamage::ShieldDamage", false, 1, 1, new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical), new tweak_1.TweakFunctionPlus(), content_1.Content.Turrets.Laser.Entity.ShieldDamage)
            ]), new initTurrets_1.UpgradeOnBuyTurret(content_1.Content.Turrets.Laser.Entity)),
        }); });
    }
    LaserTurretContent.prototype.InitUI = function () {
        var turret = this.Entity;
        var upgrades = this.Upgrades;
        {
            //# Upgrades: Damage #
            var upgrade = upgrades.Damage;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Turrets." + turret.ID + ".Damage"), upgrade, "#a24e4e", "Damage", ["Damage"]);
        }
        {
            //# Upgrades: RotationSpeed #
            var upgrade = upgrades.RotationSpeed;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Turrets." + turret.ID + ".RotationSpeed"), upgrade, "#3d858a", "Rotation speed", ["Rotation"]);
        }
        {
            //# Upgrades: Range #
            var upgrade = upgrades.Range;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Turrets." + turret.ID + ".Range"), upgrade, "#47905f", "Attack range", ["Range"]);
        }
        {
            //# Upgrades: ReloadTime #
            var upgrade = upgrades.ReloadTime;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos("Turrets." + turret.ID + ".ReloadTime"), upgrade, "#918930", "Reload duration", ["Duration"]);
        }
        {
            //# Upgrades: CriticalChance #
            var upgrade = upgrades.CriticalChance;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.CriticalChance"), upgrade, "#814f9c", "Critical chance", ["Chance"]);
        }
        {
            //# Upgrades: CriticalMP #
            var upgrade = upgrades.CriticalMP;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.CriticalMP"), upgrade, "#a24e4e", "Critical multiplier", ["Multiplier"]);
        }
        {
            //# Upgrades: ShieldDamage #
            var upgrade = upgrades.ShieldDamage;
            uiBuilder_1.CreateUpgradeUI(gui_1.GetUpgradePos(turret.ID + ".Upgrades.ShieldDamage"), upgrade, "#2e79af", "Shield damage", ["Damage"]);
        }
    };
    Object.defineProperty(LaserTurretContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaserTurretContent.prototype, "Entity", {
        get: function () {
            return this.profile.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaserTurretContent.prototype, "Unlock", {
        get: function () {
            return this.unlock.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaserTurretContent.prototype, "UnlockPurchase", {
        get: function () {
            return this.unlockPurchase.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaserTurretContent.prototype, "BuildInfo", {
        get: function () {
            return this.buildInfo.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LaserTurretContent.prototype, "Upgrades", {
        get: function () {
            return this.upgrades.Get();
        },
        enumerable: false,
        configurable: true
    });
    return LaserTurretContent;
}());
exports.LaserTurretContent = LaserTurretContent;

