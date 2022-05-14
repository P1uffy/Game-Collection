
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
exports.Spikes = exports.SpikesInstance = void 0;
var gameObject_1 = __webpack_require__(/*! ../../gameObject */ "./src/game/gameObject.ts");
var objectStorage_1 = __webpack_require__(/*! ../../../data/objectStorage */ "./src/data/objectStorage.ts");
var buildingInstance_1 = __webpack_require__(/*! ./buildingInstance */ "./src/game/fighting/buildings/buildingInstance.ts");
var main_1 = __webpack_require__(/*! ../../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var content_1 = __webpack_require__(/*! ../../../content/content */ "./src/content/content.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var gameData_1 = __webpack_require__(/*! ../../../data/game/gameData */ "./src/data/game/gameData.ts");
var unlock_1 = __webpack_require__(/*! ../../../data/unlock */ "./src/data/unlock.ts");
var turret_1 = __webpack_require__(/*! ../turret */ "./src/game/fighting/turret.ts");
var SpikesInstance = /** @class */ (function (_super) {
    __extends(SpikesInstance, _super);
    function SpikesInstance(UID, Position) {
        var _this = _super.call(this, gameObject_1.ClassName.Spikes, "Spikes::" + UID, UID, Position, 0) || this;
        _this.UID = UID;
        _this.Position = Position;
        return _this;
    }
    SpikesInstance.prototype.GetAllInstances = function () {
        return main_1.Construct3.objects.Spikes.getAllInstances();
    };
    SpikesInstance.prototype.CreateAndGetUID = function () {
        return content_1.Managers.Fight.CreateBuilding(gameObject_1.BuildingName.Spikes, this.Position);
    };
    SpikesInstance.prototype.InitFrom = function (_storage, item) {
        _super.prototype.InitFrom.call(this, _storage, item);
    };
    return SpikesInstance;
}(buildingInstance_1.BuildingInstance));
exports.SpikesInstance = SpikesInstance;
var Spikes = /** @class */ (function (_super) {
    __extends(Spikes, _super);
    function Spikes(objectStorage, unlock, damage, healthDamage, shieldDamage, healthBasedDamagePercent, reloadTimeMS, stunChance, stunSpeedMP, stunDurationMS, maxCount) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Spikes, "Spikes") || this;
        _this.Unlock = unlock;
        _this.Damage = new gameData_1.GameData("Damage", damage);
        _this.HealthDamage = new gameData_1.GameData("HealthDamage", healthDamage);
        _this.ShieldDamage = new gameData_1.GameData("ShieldDamage", shieldDamage);
        _this.HealthBasedDamagePercent = new gameData_1.GameData("HealthBasedDamagePercent", healthBasedDamagePercent);
        _this.StunChance = new gameData_1.GameData("StunChance", stunChance);
        _this.StunSpeedMP = new gameData_1.GameData("StunSpeedMP", stunSpeedMP);
        _this.StunDurationMS = new gameData_1.GameData("StunDuration", stunDurationMS);
        _this.ReloadTimeMS = new gameData_1.GameData("ReloadTimeMS", reloadTimeMS);
        _this.Count = new gameData_1.GameData("Count", maxCount);
        _this.Instances = new objectStorage_1.ObjectStorage();
        _this.Statistics = new turret_1.DamageBuildingStatistics();
        return _this;
    }
    Spikes.prototype.InitFrom = function (storage, item) {
        this.Statistics = item.Statistics;
    };
    Spikes.prototype.DestroyAllInstances = function () {
        for (var _i = 0, _a = this.Instances.Items.slice(0); _i < _a.length; _i++) {
            var instance = _a[_i];
            // console.log(`[i: ${i} / ${len}] Spikes left: ${this.Instances.Items.length}`);
            instance.Destroy();
            //handled in OnDestroyed event
        }
    };
    __decorate([
        class_transformer_1.Type(function () { return unlock_1.Unlock; })
    ], Spikes.prototype, "Unlock", void 0);
    __decorate([
        class_transformer_1.Type(function () { return objectStorage_1.ObjectStorage; })
    ], Spikes.prototype, "Instances", void 0);
    __decorate([
        class_transformer_1.Type(function () { return turret_1.DamageBuildingStatistics; })
    ], Spikes.prototype, "Statistics", void 0);
    return Spikes;
}(gameObject_1.GameObject));
exports.Spikes = Spikes;

