
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTurretsGUI = void 0;
//# Basic Turret Upgrades #
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var upgradeInfo_1 = __webpack_require__(/*! ../upgrade/upgradeInfo */ "./src/ui/upgrade/upgradeInfo.ts");
var fontSizeCalc_1 = __webpack_require__(/*! ../fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
function UpdateTurretsGUI() {
    //# BasicTurret #
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.BasicTurret) {
        var upgrades = content_1.Content.Turrets.Basic.Upgrades;
        for (var _i = 0, _a = [upgrades.Damage, upgrades.RotationSpeed, upgrades.Range, upgrades.BulletSpeed]; _i < _a.length; _i++) {
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
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.CriticalChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.CriticalMP, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Prefix: "x", }
            ]
        });
    }
    //# LaserTurret #
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.LaserTurret) {
        var upgrades = content_1.Content.Turrets.Laser.Upgrades;
        for (var _b = 0, _c = [upgrades.Damage, upgrades.RotationSpeed, upgrades.Range, upgrades.ShieldDamage]; _b < _c.length; _b++) {
            var upgrade = _c[_b];
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
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.CriticalChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.CriticalMP, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Prefix: "x", }
            ]
        });
    }
    //# RailTurret #
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.RailTurret) {
        var upgrades = content_1.Content.Turrets.Rail.Upgrades;
        for (var _d = 0, _e = [upgrades.Damage, upgrades.Range, upgrades.HealthDamage, upgrades.HitsPerShot]; _d < _e.length; _d++) {
            var upgrade = _e[_d];
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
    }
}
exports.UpdateTurretsGUI = UpdateTurretsGUI;

