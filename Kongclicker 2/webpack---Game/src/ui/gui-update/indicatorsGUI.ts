
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetIndicatorVisible = exports.UpdateIndicatorInfo = exports.UpdateIndicatorsGUI = void 0;
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var turret_1 = __webpack_require__(/*! ../../game/fighting/turret */ "./src/game/fighting/turret.ts");
function UpdateIndicatorsGUI() {
    //# Unlocks Indicator #
    var unlocks = GetIndicatorValueForUnlocks([
        content_1.Content.Monsters.Basic,
        content_1.Content.Monsters.Armored,
        // Content.Monsters.Fast,
        content_1.Content.Turrets.Basic,
        content_1.Content.Turrets.Laser,
        // Content.Turrets.Rail,
        content_1.Content.Buildings.Spikes,
    ]);
    //todo IsOnScreen universal check for C3 objects to prevent additional checks
    UpdateIndicatorInfo("canBuyIndicator::Unlocks", unlocks);
    //# Monsters Indicator #
    var basicMonster = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Monsters.Basic.Upgrades));
    var armoredMonster = content_1.Content.Monsters.Armored.Unlock.IsUnlocked ?
        GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Monsters.Armored.Upgrades)) : 0;
    var fastMonster = content_1.Content.Monsters.Fast.Unlock.IsUnlocked ?
        GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Monsters.Fast.Upgrades)) : 0;
    var allMonsters = basicMonster + armoredMonster + fastMonster;
    UpdateIndicatorInfo("canBuyIndicator::BasicMonster", basicMonster);
    UpdateIndicatorInfo("canBuyIndicator::ArmoredMonster", armoredMonster);
    UpdateIndicatorInfo("canBuyIndicator::FastMonster", fastMonster);
    UpdateIndicatorInfo("canBuyIndicator::Monsters", allMonsters);
    //# Turrets Indicator #
    var basicTurret = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Turrets.Basic.Upgrades));
    var laserTurret = content_1.Content.Turrets.Laser.Unlock.IsUnlocked ?
        GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Turrets.Laser.Upgrades)) : 0;
    var railTurret = content_1.Content.Turrets.Rail.Unlock.IsUnlocked ?
        GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Turrets.Rail.Upgrades)) : 0;
    var allTurrets = basicTurret + laserTurret + railTurret;
    UpdateIndicatorInfo("canBuyIndicator::BasicTurret", basicTurret);
    UpdateIndicatorInfo("canBuyIndicator::LaserTurret", laserTurret);
    UpdateIndicatorInfo("canBuyIndicator::RailTurret", railTurret);
    UpdateIndicatorInfo("canBuyIndicator::Turrets", allTurrets);
    //# Buildings Indicator #
    var spikes = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Buildings.Spikes.Upgrades));
    var allBuildings = spikes;
    UpdateIndicatorInfo("canBuyIndicator::Spikes", spikes);
    UpdateIndicatorInfo("canBuyIndicator::Buildings", allBuildings);
    //# Rebirth Indicator #
    var rebirthMain = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.Main));
    var rebirthBasicMonster = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.BasicMonster));
    var rebirthBasicTurret = GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.BasicTurret));
    var rebirthArmoredMonster = content_1.Content.Monsters.Armored.System.IsEverUnlocked.Value
        ? GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.ArmoredMonster)) : 0;
    var rebirthSpikes = content_1.Content.Buildings.Spikes.System.IsEverUnlocked.Value
        ? GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.Spikes)) : 0;
    var rebirthLaserTurret = content_1.Content.Turrets.Laser.System.IsEverUnlocked.Value
        ? GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.LaserTurret)) : 0;
    var rebirthFastMonster = content_1.Content.Monsters.Fast.System.IsEverUnlocked.Value
        ? GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.FastMonster)) : 0;
    var rebirthRailTurret = content_1.Content.Turrets.Rail.System.IsEverUnlocked.Value
        ? GetIndicatorValueForUpgrades(utilsObjects_1.ValuesOf(content_1.Content.Rebirth.RailTurret)) : 0;
    var monstersRebirth = rebirthBasicMonster + rebirthArmoredMonster + rebirthFastMonster;
    var turretsRebirth = rebirthBasicTurret + rebirthLaserTurret + rebirthRailTurret;
    var buildingsRebirth = rebirthSpikes;
    var allRebirth = rebirthMain + monstersRebirth + turretsRebirth + buildingsRebirth;
    UpdateIndicatorInfo("canBuyIndicator::Rebirth.Main", rebirthMain);
    UpdateIndicatorInfo("canBuyIndicator::Rebirth.Monsters", monstersRebirth);
    UpdateIndicatorInfo("canBuyIndicator::Rebirth.Turrets", turretsRebirth);
    UpdateIndicatorInfo("canBuyIndicator::Rebirth.Buildings", buildingsRebirth);
    UpdateIndicatorInfo("canBuyIndicator::RebirthBasicMonster", rebirthBasicMonster);
    UpdateIndicatorInfo("canBuyIndicator::RebirthArmoredMonster", rebirthArmoredMonster);
    UpdateIndicatorInfo("canBuyIndicator::RebirthFastMonster", rebirthFastMonster);
    UpdateIndicatorInfo("canBuyIndicator::RebirthBasicTurret", rebirthBasicTurret);
    UpdateIndicatorInfo("canBuyIndicator::RebirthLaserTurret", rebirthLaserTurret);
    UpdateIndicatorInfo("canBuyIndicator::RebirthRailTurret", rebirthRailTurret);
    UpdateIndicatorInfo("canBuyIndicator::RebirthSpikes", rebirthSpikes);
    UpdateIndicatorInfo("canBuyIndicator::Rebirth", allRebirth);
    //# Build Mode Indicator #
    var buildMode = 0;
    for (var _i = 0, _a = content_1.ContentStorage.GetAllItemsOfType(turret_1.Turret); _i < _a.length; _i++) {
        var turret = _a[_i];
        buildMode += turret.Unlock.IsUnlocked
            ? content_1.Managers.Fight.GetTurretMaxCount(turret) - content_1.Managers.Fight.GetTurretCount(turret.ID) : 0;
    }
    for (var _b = 0, _c = [content_1.Content.Buildings.Spikes]; _b < _c.length; _b++) {
        var building = _c[_b];
        buildMode += building.Unlock.IsUnlocked
            ? building.Entity.Count.Value.Minus(building.Entity.Instances.Length).AsNumber : 0;
    }
    UpdateIndicatorInfo("canBuyIndicator::BuildMode", buildMode);
}
exports.UpdateIndicatorsGUI = UpdateIndicatorsGUI;
var GetIndicatorValueForUnlocks = function (items) {
    var value = 0;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.UnlockPurchase.IsThemeUnlocked && item.UnlockPurchase.IsCanBuy(1)) {
            value++;
        }
    }
    return value;
};
var GetIndicatorValueForUpgrades = function (items) {
    var value = 0;
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        if (item.IsThemeUnlocked && item.IsCanBuy(1)) {
            value++;
        }
    }
    return value;
};
function UpdateIndicatorInfo(id, value) {
    utilsGUI_1.SetIconFrame(id, value > 0 ? 1 : 0);
    utilsGUI_1.SetText(id, value);
}
exports.UpdateIndicatorInfo = UpdateIndicatorInfo;
function SetIndicatorVisible(id, visible) {
    utilsGUI_1.SetIconVisible(id, visible);
    utilsGUI_1.SetTextVisible(id, visible);
}
exports.SetIndicatorVisible = SetIndicatorVisible;

