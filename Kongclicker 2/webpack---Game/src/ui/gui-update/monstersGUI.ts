
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonstersGUI = void 0;
//# Basic Monster Upgrades #
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var upgradeInfo_1 = __webpack_require__(/*! ../upgrade/upgradeInfo */ "./src/ui/upgrade/upgradeInfo.ts");
var fontSizeCalc_1 = __webpack_require__(/*! ../fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
function UpdateMonstersGUI() {
    //# Basic Monster Upgrades #
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.BasicMonster) {
        var upgrades = content_1.Content.Monsters.Basic.Upgrades;
        for (var _i = 0, _a = [upgrades.Health, upgrades.Speed, upgrades.Count, upgrades.Shield]; _i < _a.length; _i++) {
            var upgrade = _a[_i];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.SpawnTime, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { FormatTime: "Time", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.InstantSpawnChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
    }
    //# Armored Monster Upgrades #
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.ArmoredMonster) {
        var upgrades = content_1.Content.Monsters.Armored.Upgrades;
        for (var _b = 0, _c = [upgrades.Health, upgrades.Speed, upgrades.Count, upgrades.Shield]; _b < _c.length; _b++) {
            var upgrade = _c[_b];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.SpawnTime, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { FormatTime: "Time", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.InstantSpawnChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
    }
    //# Fast Monster Upgrades #
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.FastMonster) {
        var upgrades = content_1.Content.Monsters.Fast.Upgrades;
        for (var _d = 0, _e = [upgrades.Health, upgrades.Count, upgrades.Speed, upgrades.Reward]; _d < _e.length; _d++) {
            var upgrade = _e[_d];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.SpawnTime, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { FormatTime: "Time", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.DamageReductionMP, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Prefix: "x", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.DodgeChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.InstantSpawnChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
    }
}
exports.UpdateMonstersGUI = UpdateMonstersGUI;

