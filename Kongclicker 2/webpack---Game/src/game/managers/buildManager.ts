
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildManager = exports.BuildInfo = exports.CanBuildBuilding = exports.CanBuildTurret = void 0;
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var CanBuildTurret = /** @class */ (function () {
    function CanBuildTurret(Turret) {
        this.Turret = Turret;
    }
    //todo universal GetBuildingCount and GetBuildingCountMax
    CanBuildTurret.prototype.Check = function () {
        return content_1.Managers.Fight.GetTurretCount(this.Turret.ID) < content_1.Managers.Fight.GetTurretMaxCount(this.Turret.ID);
    };
    return CanBuildTurret;
}());
exports.CanBuildTurret = CanBuildTurret;
var CanBuildBuilding = /** @class */ (function () {
    function CanBuildBuilding(BuildingID) {
        this.BuildingID = BuildingID;
    }
    //todo universal GetBuildingCount and GetBuildingCountMax
    CanBuildBuilding.prototype.Check = function () {
        var count;
        var countMax;
        switch (this.BuildingID) {
            case gameObject_1.BuildingName.Spikes: {
                var building = content_1.Content.Buildings.Spikes.Entity;
                count = building.Instances.Length;
                countMax = building.Count.Value.AsNumber;
                break;
            }
            default: {
                throw new Error("Building with id " + this.BuildingID + " is not handled");
            }
        }
        return count < countMax;
    };
    return CanBuildBuilding;
}());
exports.CanBuildBuilding = CanBuildBuilding;
//todo move building instances here
var BuildInfo = /** @class */ (function (_super) {
    __extends(BuildInfo, _super);
    function BuildInfo(storage, id, Name, Type, PositionType, 
    // public readonly IsRotatable: boolean,
    CanBuild) {
        var _this = _super.call(this, storage, gameObject_1.ClassName.BuildInfo, id) || this;
        _this.Name = Name;
        _this.Type = Type;
        _this.PositionType = PositionType;
        _this.CanBuild = CanBuild;
        return _this;
    }
    BuildInfo.prototype.InitFrom = function (_storage, _oldObject) {
    };
    return BuildInfo;
}(gameObject_1.GameObject));
exports.BuildInfo = BuildInfo;
var BuildManager = /** @class */ (function () {
    function BuildManager(initialBuilding) {
        this.CurrentBuilding = initialBuilding;
    }
    return BuildManager;
}());
exports.BuildManager = BuildManager;

