
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRebirthGUI = void 0;
//# Rebirth Menu & Upgrades #
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var utilsText_1 = __webpack_require__(/*! ../../utils/utilsText */ "./src/utils/utilsText.ts");
var upgradeInfo_1 = __webpack_require__(/*! ../upgrade/upgradeInfo */ "./src/ui/upgrade/upgradeInfo.ts");
var fontSizeCalc_1 = __webpack_require__(/*! ../fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
function UpdateRebirthGUI() {
    var rebirth = content_1.Content.Rebirth;
    for (var _i = 0, _a = [
        rebirth.BasicTurret.Count,
        rebirth.LaserTurret.Count,
        rebirth.RailTurret.Count,
        rebirth.Spikes.Count,
    ]; _i < _a.length; _i++) {
        var upgrade = _a[_i];
        upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
        });
    }
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.RebirthMain) {
        var progress = content_1.Content.Rebirth.Stats.NextPointProgress;
        var perLevel = content_1.Content.Rebirth.Stats.PointsPerLevel;
        var award = content_1.Content.Rebirth.CurrentRebirthAward;
        utilsGUI_1.SetProgressBar("pointsProgress::Rebirth.NextPointProgress", progress.Progress.AsNumber, undefined, 35);
        utilsGUI_1.SetText("pointsProgressText::Rebirth.NextPointProgress", utilsText_1.GetNumberText(progress.MaxPoints.Minus(progress.Points)) + " left");
        utilsGUI_1.SetText("+stat::Rebirth.PointsPerLevel", "+" + utilsText_1.GetNumberText(perLevel.Value));
        utilsGUI_1.SetText("+stat::Rebirth.Award", "+" + utilsText_1.GetNumberText(award));
        utilsGUI_1.SetButtonEnabled("action::Rebirth", award.IsMoreOrEqual(0.5));
        for (var _b = 0, _c = [
            rebirth.Main.StartCoinBonus,
            rebirth.Main.RPPerLevel,
        ]; _b < _c.length; _b++) {
            var upgrade = _c[_b];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(rebirth.Main.RPRewardMP, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { DataType: "Tweak", }
            ]
        });
    }
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.RebirthBasicMonster) {
        //# Basic Monster #
        for (var _d = 0, _e = [
            rebirth.BasicMonster.RPDropValue,
        ]; _d < _e.length; _d++) {
            var upgrade = _e[_d];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(rebirth.BasicMonster.Count, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                {
                    BaseValue: 1,
                    DataType: "Tweak",
                }
            ],
        });
        upgradeInfo_1.UpdateUpgradeInfo(rebirth.BasicMonster.Reward, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { DataType: "Tweak", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(rebirth.BasicMonster.RPDropChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
    }
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.RebirthArmoredMonster) {
        //# Armored Monster #
        var upgrades = rebirth.ArmoredMonster;
        for (var _f = 0, _g = [
            upgrades.RPDropValue,
        ]; _f < _g.length; _f++) {
            var upgrade = _g[_f];
            upgradeInfo_1.UpdateUpgradeInfo(upgrade, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            });
        }
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.Reward, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { DataType: "Tweak", }
            ]
        });
        upgradeInfo_1.UpdateUpgradeInfo(upgrades.RPDropChance, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { Postfix: "%", }
            ]
        });
    }
    else if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.RebirthFastMonster) {
        //# Fast Monster #
        upgradeInfo_1.UpdateUpgradeInfo(rebirth.FastMonster.Reward, {
            FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
            Tweaks: [
                { DataType: "Tweak", }
            ]
        });
    }
}
exports.UpdateRebirthGUI = UpdateRebirthGUI;

