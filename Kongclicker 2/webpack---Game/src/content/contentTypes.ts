
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTypeList = void 0;
var stat_1 = __webpack_require__(/*! ../game/gameObjects/stat */ "./src/game/gameObjects/stat.ts");
var wallet_1 = __webpack_require__(/*! ../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var setting_1 = __webpack_require__(/*! ../game/gameObjects/setting */ "./src/game/gameObjects/setting.ts");
var timer_1 = __webpack_require__(/*! ../data/timer */ "./src/data/timer.ts");
var idler_1 = __webpack_require__(/*! ../game/gameObjects/idler */ "./src/game/gameObjects/idler.ts");
var points_1 = __webpack_require__(/*! ../game/gameObjects/points */ "./src/game/gameObjects/points.ts");
var price_1 = __webpack_require__(/*! ../game/gameObjects/price */ "./src/game/gameObjects/price.ts");
var upgrade_1 = __webpack_require__(/*! ../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var unlock_1 = __webpack_require__(/*! ../data/unlock */ "./src/data/unlock.ts");
var monster_1 = __webpack_require__(/*! ../game/fighting/monster */ "./src/game/fighting/monster.ts");
var turret_1 = __webpack_require__(/*! ../game/fighting/turret */ "./src/game/fighting/turret.ts");
var float_1 = __webpack_require__(/*! ../data/math/float */ "./src/data/math/float.ts");
var buildManager_1 = __webpack_require__(/*! ../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var turretInstance_1 = __webpack_require__(/*! ../game/fighting/buildings/turretInstance */ "./src/game/fighting/buildings/turretInstance.ts");
var spikes_1 = __webpack_require__(/*! ../game/fighting/buildings/spikes */ "./src/game/fighting/buildings/spikes.ts");
var container_1 = __webpack_require__(/*! ../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var time_1 = __webpack_require__(/*! ../data/time */ "./src/data/time.ts");
function GetTypeList() {
    return [idler_1.Idler, points_1.Points, price_1.Price, setting_1.Setting, stat_1.Stat, timer_1.Timer, upgrade_1.Upgrade, wallet_1.Wallet, unlock_1.Unlock, upgrade_1.UnlockUpgrade,
        monster_1.Monster, turret_1.Turret, turretInstance_1.TurretInstance, spikes_1.Spikes, spikes_1.SpikesInstance, float_1.GameFloat, buildManager_1.BuildInfo, container_1.Container,
        time_1.Time,
    ];
}
exports.GetTypeList = GetTypeList;
// Game content
//todo maybe bake Setting<StrictType, RawType[string, number, bool, ..]> for SetAnyValue() function
//todo Notation: Setting<number>,
//todo make class ContentContainer, with function for checking all items for null

