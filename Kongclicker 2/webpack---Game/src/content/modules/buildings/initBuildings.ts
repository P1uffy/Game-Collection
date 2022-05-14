
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
exports.UpgradeOnBuyBuilding = exports.OnBuildingDestroyed = exports.OnBuildingCreated = exports.InitBuildings = void 0;
var gameObject_1 = __webpack_require__(/*! ../../../game/gameObject */ "./src/game/gameObject.ts");
var spikesContent_1 = __webpack_require__(/*! ./spikesContent */ "./src/content/modules/buildings/spikesContent.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var upgradeOnBuyEvent_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgradeOnBuyEvent */ "./src/game/gameObjects/upgrade/upgradeOnBuyEvent.ts");
function InitBuildings(moduleStorage, content) {
    return {
        Spikes: new spikesContent_1.SpikesContent(moduleStorage, content),
    };
}
exports.InitBuildings = InitBuildings;
//todo make it universal (base Building class?)
//todo DO I ACTUALLY NEED THIS? THE STUFF CAN BE DONE IN FightManager.CreateBuilding(). Not now, at least
function OnBuildingCreated(buildingName, position, uid) {
    if (content_1.SystemData.IsContentLoaded) {
        switch (buildingName) {
            // case BuildingName.Spikes: {
            //     Content.Buildings.Spikes.Entity.Instances.AddItem(new SpikesInstance(uid, position));
            //     break;
            // }
        }
    }
}
exports.OnBuildingCreated = OnBuildingCreated;
function OnBuildingDestroyed(buildingName, uid) {
    var _a;
    if (content_1.SystemData.IsContentLoaded) {
        switch (buildingName) {
            case gameObject_1.BuildingName.Spikes: {
                var spikes = content_1.Content.Buildings.Spikes;
                var id = (_a = spikes.Entity.Instances.Items.find(function (item) { return item.UID == uid; })) === null || _a === void 0 ? void 0 : _a.ID;
                if (id != undefined) {
                    spikes.Entity.Instances.RemoveItem(id);
                }
                else {
                    throw new Error("Instance with UID: '" + uid + "' was not found");
                }
                break;
            }
        }
    }
}
exports.OnBuildingDestroyed = OnBuildingDestroyed;
var UpgradeOnBuyBuilding = /** @class */ (function (_super) {
    __extends(UpgradeOnBuyBuilding, _super);
    function UpgradeOnBuyBuilding(BuildingID) {
        var _this = _super.call(this) || this;
        _this.BuildingID = BuildingID;
        return _this;
    }
    UpgradeOnBuyBuilding.prototype.Trigger = function (_upgrade, _count, _spent) {
        content_1.Managers.Fight.UpdateBuilding(this.BuildingID);
    };
    return UpgradeOnBuyBuilding;
}(upgradeOnBuyEvent_1.UpgradeOnBuyEvent));
exports.UpgradeOnBuyBuilding = UpgradeOnBuyBuilding;

