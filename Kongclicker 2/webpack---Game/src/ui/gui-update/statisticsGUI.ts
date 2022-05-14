
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatisticsGUI = void 0;
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var utilsText_1 = __webpack_require__(/*! ../../utils/utilsText */ "./src/utils/utilsText.ts");
var time_1 = __webpack_require__(/*! ../../data/time */ "./src/data/time.ts");
var monster_1 = __webpack_require__(/*! ../../game/fighting/monster */ "./src/game/fighting/monster.ts");
var turret_1 = __webpack_require__(/*! ../../game/fighting/turret */ "./src/game/fighting/turret.ts");
function UpdateStatisticsGUI() {
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.Statistics) {
        var totalTime = new Date().getTime() - content_1.Content.Statistics.Time.StartedPlaying.Value.getTime();
        utilsGUI_1.SetText("Statistics::AllTimeInfo", "You are playing since " + content_1.Content.Statistics.Time.StartedPlaying.Value.toLocaleDateString()
            + ("\n(" + utilsText_1.GetTimeText(new time_1.Time(0, 0, 0, totalTime)) + " ago)")
            + ("\nPlay time: " + utilsText_1.GetTimeText(content_1.Content.Statistics.Time.TimePlayed.Value)));
        utilsGUI_1.SetText("Statistics::ClickInfo", "Monsters clicked: " + utilsText_1.GetNumberText(content_1.Content.Statistics.Gameplay.TotalClicks.Value)
            + ("\nTotal click damage: " + utilsText_1.GetNumberText(content_1.Content.Statistics.Gameplay.TotalClickDamage.Value))
            + ("\nClick kills: " + utilsText_1.GetNumberText(content_1.Content.Statistics.Gameplay.ClickKills.Value)));
        utilsGUI_1.SetText("Statistics::WalletsInfo", "Total Coins: " + utilsText_1.GetNumberText(content_1.Content.Wallets.Coins.Statistics.TotalCollected)
            + ("\nTotal RP: " + utilsText_1.GetNumberText(content_1.Content.Wallets.RebirthPoints.Statistics.TotalCollected)));
        var lastRebirthDiff = new Date().getTime() - content_1.Content.Rebirth.Stats.LastRebirth.Value.getTime();
        utilsGUI_1.SetText("Statistics::RebirthInfo", "You made it " + utilsText_1.GetNumberText(content_1.Content.Rebirth.Stats.HappenedCount.Value) + " times"
            + ("\nTotal RP made: " + utilsText_1.GetNumberText(content_1.Content.Rebirth.Stats.TotalRPMade.Value))
            + (content_1.Content.Rebirth.Stats.HappenedCount.Value.IsMore(0)
                ? "\nLast rebirth: " + utilsText_1.GetTimeText(lastRebirthDiff) + " ago"
                : ""));
        for (var _i = 0, _a = content_1.ContentStorage.GetAllItemsOfType(monster_1.Monster); _i < _a.length; _i++) {
            var monster = _a[_i];
            utilsGUI_1.SetText("Statistics::" + monster.ID, "Total spawned: " + utilsText_1.GetNumberText(monster.Statistics.TotalSpawned)
                + ("\nCoins made: " + utilsText_1.GetNumberText(monster.Statistics.TotalCoinsMade))
                + ("\nRP made: " + utilsText_1.GetNumberText(monster.Statistics.TotalRPMade)));
        }
        for (var _b = 0, _c = content_1.ContentStorage.GetAllItemsOfType(turret_1.Turret); _b < _c.length; _b++) {
            var turret = _c[_b];
            utilsGUI_1.SetText("Statistics::" + turret.ID, "Monsters killed: " + utilsText_1.GetNumberText(turret.Statistics.MonstersKilled)
                + ("\nDamage dealt: " + utilsText_1.GetNumberText(turret.Statistics.DamageDealt))
                + ("\nCoins made: " + utilsText_1.GetNumberText(turret.Statistics.TotalCoinsMade)));
        }
        var spikes = content_1.Content.Buildings.Spikes.Entity;
        utilsGUI_1.SetText("Statistics::" + spikes.ID, "Monsters killed: " + utilsText_1.GetNumberText(spikes.Statistics.MonstersKilled)
            + ("\nDamage dealt: " + utilsText_1.GetNumberText(spikes.Statistics.DamageDealt))
            + ("\nCoins made: " + utilsText_1.GetNumberText(spikes.Statistics.TotalCoinsMade)));
    }
}
exports.UpdateStatisticsGUI = UpdateStatisticsGUI;

