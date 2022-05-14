
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turret = exports.DamageBuildingStatistics = void 0;
var objectStorage_1 = __webpack_require__(/*! ../../data/objectStorage */ "./src/data/objectStorage.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var gameData_1 = __webpack_require__(/*! ../../data/game/gameData */ "./src/data/game/gameData.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var DamageBuildingStatistics = /** @class */ (function () {
    function DamageBuildingStatistics() {
        this.MonstersKilled = 0;
        this.DamageDealt = new float_1.Float(0);
        this.TotalCoinsMade = new float_1.Float(0);
    }
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], DamageBuildingStatistics.prototype, "DamageDealt", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], DamageBuildingStatistics.prototype, "TotalCoinsMade", void 0);
    return DamageBuildingStatistics;
}());
exports.DamageBuildingStatistics = DamageBuildingStatistics;
var Turret = /** @class */ (function (_super) {
    __extends(Turret, _super);
    function Turret(objectStorage, id, unlock, damage, healthDamage, shieldDamage, reloadTimeMS, rotateSpeed, bulletSpeed, range, criticalChance, criticalMP, hitsPerShot, count, firstMonsterDamageMP) {
        if (criticalChance === void 0) { criticalChance = 0; }
        if (criticalMP === void 0) { criticalMP = 3; }
        if (hitsPerShot === void 0) { hitsPerShot = 1; }
        if (count === void 0) { count = 1; }
        if (firstMonsterDamageMP === void 0) { firstMonsterDamageMP = 1; }
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Turret, id) || this;
        _this.Unlock = unlock;
        _this.Damage = new gameData_1.GameData("Damage", damage);
        _this.HealthDamage = new gameData_1.GameData("HealthDamage", healthDamage);
        _this.ShieldDamage = new gameData_1.GameData("ShieldDamage", shieldDamage);
        _this.ReloadTimeMS = new gameData_1.GameData("ReloadTime", reloadTimeMS);
        _this.RotateSpeed = new gameData_1.GameData("RotateSpeed", rotateSpeed);
        _this.BulletSpeed = new gameData_1.GameData("BulletSpeed", bulletSpeed);
        _this.Range = new gameData_1.GameData("Range", range);
        _this.Count = new gameData_1.GameData("Count", count);
        _this.BulletCount = new gameData_1.GameData("BulletCount", 1);
        _this.HitsPerShot = new gameData_1.GameData("HitsPerShot", hitsPerShot);
        _this.CriticalDamageMP = new gameData_1.GameData("CriticalDamageMP", criticalMP);
        _this.CriticalDamageChance = new gameData_1.GameData("CriticalDamageChance", criticalChance);
        _this.FirstMonsterDamageMP = new gameData_1.GameData("FirstMonsterDamageMP", firstMonsterDamageMP);
        //this.DoubleBulletChance = new GameData("DoubleBulletChance", 0);
        //this.BulletChanceGoThrough = new GameData("BulletChanceGoThrough", 0);
        //todo multiple targets
        _this.Instances = new objectStorage_1.ObjectStorage();
        _this.Statistics = new DamageBuildingStatistics();
        return _this;
    }
    Turret.prototype.GetContent = function () {
        var _this = this;
        var item = utilsObjects_1.ValuesOf(content_1.Content.Turrets)
            .find(function (content) { return content.Entity.ID == _this.ID; });
        if (!item) {
            throw new Error("Turret content not found for id '" + this.ID + "'");
        }
        else
            return item;
    };
    Turret.Create = function (params) {
    };
    //todo make universal building class
    // Reset() {
    //
    // }
    Turret.prototype.RemoveTurretInstance = function (uid) {
        for (var _i = 0, _a = this.Instances.Items; _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance.UID == uid) {
                this.Instances.RemoveItem(instance.ID);
                return;
            }
        }
    };
    Turret.prototype.DestroyAllInstances = function () {
        for (var _i = 0, _a = this.Instances.Items.slice(0); _i < _a.length; _i++) {
            var instance = _a[_i];
            instance.Destroy();
            // тут инстанс убирается из массива сам по евенту OnCreated в C3
        }
    };
    Turret.prototype.InitFrom = function (_storage, _turret) {
        this.Statistics = _turret.Statistics;
        //all stuff here is GameData, so no need in reinit i guess
    };
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return DamageBuildingStatistics; })
    ], Turret.prototype, "Statistics", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return objectStorage_1.ObjectStorage; })
    ], Turret.prototype, "Instances", void 0);
    Turret = __decorate([
        class_transformer_1.Exclude()
    ], Turret);
    return Turret;
}(gameObject_1.GameObject));
exports.Turret = Turret;

