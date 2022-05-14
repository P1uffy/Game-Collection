
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
exports.TurretInstance = void 0;
var buildingInstance_1 = __webpack_require__(/*! ./buildingInstance */ "./src/game/fighting/buildings/buildingInstance.ts");
var main_1 = __webpack_require__(/*! ../../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var content_1 = __webpack_require__(/*! ../../../content/content */ "./src/content/content.ts");
var gameObject_1 = __webpack_require__(/*! ../../gameObject */ "./src/game/gameObject.ts");
var TurretInstance = /** @class */ (function (_super) {
    __extends(TurretInstance, _super);
    function TurretInstance(ID, TurretID, UID, Position, Angle) {
        var _this = _super.call(this, gameObject_1.ClassName.TurretInstance, ID, UID, Position, Angle) || this;
        _this.ID = ID;
        _this.TurretID = TurretID;
        _this.UID = UID;
        _this.Position = Position;
        _this.Angle = Angle;
        if (content_1.SystemData.IsContentLoaded) {
            if (!content_1.ContentStorage.IsItemExists(TurretID)) {
                throw new Error("Turret type was not found '" + _this.TurretID + "'");
            }
        }
        return _this;
    }
    TurretInstance.prototype.GetAllInstances = function () {
        return main_1.Construct3.objects.Turret.getAllInstances();
    };
    TurretInstance.prototype.CreateAndGetUID = function () {
        return content_1.Managers.Fight.CreateTurret(this.Position, this.TurretID, this.Angle);
    };
    TurretInstance.prototype.InitFrom = function (_storage, item) {
        _super.prototype.InitFrom.call(this, _storage, item);
        this.TurretID = item.TurretID;
    };
    return TurretInstance;
}(buildingInstance_1.BuildingInstance));
exports.TurretInstance = TurretInstance;

