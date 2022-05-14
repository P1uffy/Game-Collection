
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
exports.UpgradeOnBuyTurret = exports.InitTurrets = void 0;
var basicTurretContent_1 = __webpack_require__(/*! ./basicTurretContent */ "./src/content/modules/turrets/basicTurretContent.ts");
var laserTurretContent_1 = __webpack_require__(/*! ./laserTurretContent */ "./src/content/modules/turrets/laserTurretContent.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var turret_1 = __webpack_require__(/*! ../../../game/fighting/turret */ "./src/game/fighting/turret.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var upgradeOnBuyEvent_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgradeOnBuyEvent */ "./src/game/gameObjects/upgrade/upgradeOnBuyEvent.ts");
var railTurretContent_1 = __webpack_require__(/*! ./railTurretContent */ "./src/content/modules/turrets/railTurretContent.ts");
function InitTurrets(storage, content) {
    return {
        Basic: new basicTurretContent_1.BasicTurretContent(storage, content),
        Laser: new laserTurretContent_1.LaserTurretContent(storage, content),
        Rail: new railTurretContent_1.RailTurretContent(storage, content),
    };
}
exports.InitTurrets = InitTurrets;
var UpgradeOnBuyTurret = /** @class */ (function (_super) {
    __extends(UpgradeOnBuyTurret, _super);
    function UpgradeOnBuyTurret(turret) {
        var _this = _super.call(this) || this;
        _this.turret = turret;
        return _this;
    }
    UpgradeOnBuyTurret.prototype.Trigger = function (_upgrade, _count, _spent) {
        content_1.Managers.Fight.UpdateTurret(this.turret);
    };
    __decorate([
        class_transformer_1.Type(function () { return turret_1.Turret; })
    ], UpgradeOnBuyTurret.prototype, "turret", void 0);
    return UpgradeOnBuyTurret;
}(upgradeOnBuyEvent_1.UpgradeOnBuyEvent));
exports.UpgradeOnBuyTurret = UpgradeOnBuyTurret;

