
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
exports.Monster = exports.MonsterStatistics = exports.OnMonsterSpawned = void 0;
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var gameData_1 = __webpack_require__(/*! ../../data/game/gameData */ "./src/data/game/gameData.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var main_1 = __webpack_require__(/*! ../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var utilsObjects_1 = __webpack_require__(/*! ../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var OnMonsterSpawned = /** @class */ (function () {
    function OnMonsterSpawned() {
    }
    OnMonsterSpawned.prototype.OnEvent = function (_position) {
    };
    return OnMonsterSpawned;
}());
exports.OnMonsterSpawned = OnMonsterSpawned;
var MonsterStatistics = /** @class */ (function () {
    function MonsterStatistics() {
        this.TotalSpawned = 0;
        this.TotalCoinsMade = new float_1.Float(0);
        this.TotalRPMade = new float_1.Float(0);
    }
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], MonsterStatistics.prototype, "TotalCoinsMade", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], MonsterStatistics.prototype, "TotalRPMade", void 0);
    return MonsterStatistics;
}());
exports.MonsterStatistics = MonsterStatistics;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    //todo redo this for params: { ..., ..., ...}
    function Monster(objectStorage, id, unlock, reward, health, speed, spawnTimeMS, maxCount, rpValue, rpDropChance, clickDamagePercent, clickDamageReloadMS, dodgeChance, shield, damageReductionMP, criticalAwardMP, criticalAwardChance) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Monster, id) || this;
        _this.Unlock = unlock;
        _this.Reward = reward;
        _this.Health = new gameData_1.GameData("Health", health);
        _this.Speed = new gameData_1.GameData("Speed", speed);
        _this.SpawnTimeMS = new gameData_1.GameData("SpawnTime", spawnTimeMS);
        _this.MaxCount = new gameData_1.GameData("MaxCount", maxCount);
        _this.InstantSpawnChance = new gameData_1.GameData("InstantSpawnChance", 0); // 0-100
        _this.RPDropValue = new gameData_1.GameData("RPDropValue", rpValue);
        _this.RPDropChance = new gameData_1.GameData("RPDropChance", rpDropChance);
        _this.ClickDamagePercent = new gameData_1.GameData("ClickDamagePercent", clickDamagePercent);
        _this.ClickDamageReloadMS = new gameData_1.GameData("ClickDamageReloadMS", clickDamageReloadMS);
        //todo shield regen, shield/health bonus damage, and so on
        _this.Shield = new gameData_1.GameData("Shield", shield);
        _this.DodgeChance = new gameData_1.GameData("DodgeChance", dodgeChance);
        _this.DamageReductionMP = new gameData_1.GameData("DamageReductionMP", damageReductionMP);
        _this.CriticalAwardMP = new gameData_1.GameData("CriticalAwardMP", criticalAwardMP);
        _this.CriticalAwardChance = new gameData_1.GameData("CriticalAwardMP", criticalAwardChance);
        _this.Statistics = new MonsterStatistics();
        return _this;
    }
    Monster.prototype.GetContent = function () {
        var _this = this;
        var item = utilsObjects_1.ValuesOf(content_1.Content.Monsters)
            .find(function (content) { return content.Entity.ID == _this.ID; });
        if (!item) {
            throw new Error("Monster content not found for id '" + this.ID + "'");
        }
        else
            return item;
    };
    Monster.prototype.GetAllInstances = function () {
        var items = [];
        for (var _i = 0, _a = main_1.Construct3.objects.Monster.getAllInstances(); _i < _a.length; _i++) {
            var monster = _a[_i];
            if (monster.instVars.Type == this.ID) {
                items.push(monster);
            }
        }
        return items;
    };
    Monster.prototype.DestroyAllInstances = function () {
        for (var _i = 0, _a = this.GetAllInstances(); _i < _a.length; _i++) {
            var instance = _a[_i];
            instance.instVars.LastDamageDealer = "System";
            instance.destroy();
            //todo destroy reason? To specify behaviour
        }
    };
    Monster.prototype.InitFrom = function (_storage, _monster) {
        //all stuff here is GameData, so no need in re-init i guess
        this.Statistics = _monster.Statistics;
    };
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return MonsterStatistics; })
    ], Monster.prototype, "Statistics", void 0);
    Monster = __decorate([
        class_transformer_1.Exclude()
    ], Monster);
    return Monster;
}(gameObject_1.GameObject));
exports.Monster = Monster;

