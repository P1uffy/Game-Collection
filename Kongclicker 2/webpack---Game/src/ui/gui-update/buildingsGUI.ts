
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBuildingsGUI = void 0;
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var upgradeInfo_1 = __webpack_require__(/*! ../upgrade/upgradeInfo */ "./src/ui/upgrade/upgradeInfo.ts");
var fontSizeCalc_1 = __webpack_require__(/*! ../fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
function UpdateBuildingsGUI() {
    //# Spikes #
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.Spikes) {
        var upgrades = content_1.Content.Buildings.Spikes.Upgrades;
        for (var _i = 0, _a = [upgrades.Damage]; _i < _a.length; _i++) {
            var upgrade = _a[_i];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.ReloadTime, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { FormatTime: "Time", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.HealthBasedDamage, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.StunDuration, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { FormatTime: "Time", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.StunChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.StunSpeedMP, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Prefix: "x", }
            ]
        });
    }
}
exports.UpdateBuildingsGUI = UpdateBuildingsGUI;

