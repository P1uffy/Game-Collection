
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThemeUnlocks = exports.UpdateScrollbars = exports.EventWithCondition = exports.InitThemeUnlocks = void 0;
var content_1 = __webpack_require__(/*! ./content */ "./src/content/content.ts");
var c3themeUtils_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/c3themeUtils */ "./javascript/construct3/c3ObjectUtils/c3themeUtils.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var utilsObjects_1 = __webpack_require__(/*! ../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
var utilsMath_1 = __webpack_require__(/*! ../utils/utilsMath */ "./src/utils/utilsMath.ts");
var overlayMessage_1 = __webpack_require__(/*! ../ui/overlayMessage */ "./src/ui/overlayMessage.ts");
var upgrade_1 = __webpack_require__(/*! ../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var gameObject_1 = __webpack_require__(/*! ../game/gameObject */ "./src/game/gameObject.ts");
var indicatorsGUI_1 = __webpack_require__(/*! ../ui/gui-update/indicatorsGUI */ "./src/ui/gui-update/indicatorsGUI.ts");
var scrollbar_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/gameUI/scrollbar */ "./javascript/construct3/c3ObjectUtils/gameUI/scrollbar.ts");
var ThemeConditions;
function InitThemeUnlocks() {
    ThemeConditions = [];
    content_1.SystemData.IsThemesInitiated = false;
    //todo ВООБЩЕ ТО, здесь стоит отталкиваться от собственно текущих значений игровых, чтобы потом всё не переделывать
    // в других местах
    //# System #
    c3themeUtils_1.ToggleTheme('SystemStuff', false);
    //TODO REMOVE
    c3themeUtils_1.ToggleTheme('PLACEHOLDER', false);
    //# Menus #
    c3themeUtils_1.ToggleTheme('Menu::Monsters', false);
    c3themeUtils_1.ToggleTheme('Menu::Turrets', false);
    c3themeUtils_1.ToggleTheme('Menu::BuildMode', false);
    c3themeUtils_1.ToggleTheme('Menu::Rebirth', false);
    c3themeUtils_1.ToggleTheme('Menu::Buildings', false);
    c3themeUtils_1.ToggleTheme('Menu::Bosses', false);
    c3themeUtils_1.ToggleTheme('Menu::Researches', false);
    //# Monster & Turret Upgrade Menus #
    c3themeUtils_1.ToggleTheme('Upgrades::ArmoredMonster', false);
    c3themeUtils_1.ToggleTheme('Upgrades::LaserTurret', false);
    //# Unlocks #
    c3themeUtils_1.ToggleTheme("Unlock::BasicTurret", false);
    c3themeUtils_1.ToggleTheme("Unlock::ArmoredMonster", false);
    c3themeUtils_1.ToggleTheme("Unlock::Spikes", false);
    c3themeUtils_1.ToggleTheme("Unlock::LaserTurret", false);
    //# BuildMode #
    c3themeUtils_1.ToggleTheme("Build::Spikes", content_1.Content.Buildings.Spikes.Unlock.IsUnlocked);
    c3themeUtils_1.ToggleTheme("Build::LaserTurret", content_1.Content.Turrets.Laser.Unlock.IsUnlocked);
    //# Turrets & Monster upgrades #
    var allUpgrades = content_1.ContentStorage.GetAllItemsOfType(upgrade_1.Upgrade);
    var _loop_1 = function (upgrade) {
        //ToggleTheme(`Upgrade::${upgrade.ID}`, upgrade.IsThemeUnlocked);
        if (!upgrade.IsThemeUnlocked && upgrade.SubClassID == upgrade_1.UpgradeClassID.Upgrade) {
            ThemeConditions.push(new EventWithCondition(function () { return upgrade.PriceArray.IsCanBuy(1)
                || upgrade.Level.IsMoreThanZero || upgrade.IsThemeUnlocked; }, function () {
                upgrade.IsThemeUnlocked = true;
                c3themeUtils_1.ToggleTheme("Upgrade::" + upgrade.ID, true);
            }));
        }
    };
    for (var _i = 0, allUpgrades_1 = allUpgrades; _i < allUpgrades_1.length; _i++) {
        var upgrade = allUpgrades_1[_i];
        _loop_1(upgrade);
    }
    var unlockableEntities = __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Turrets), utilsObjects_1.ValuesOf(content_1.Content.Monsters), [
        content_1.Content.Buildings.Spikes
    ]);
    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", false);
    ThemeConditions.push(new EventWithCondition(function () { return content_1.Content.Buildings.Spikes.System.IsEverUnlocked.Value; }, function () { return indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", true); }));
    var _loop_2 = function (item) {
        c3themeUtils_1.ToggleTheme("Upgrades::" + item.Entity.ID, false);
        c3themeUtils_1.ToggleTheme("Statistics::" + item.Entity.ID, false);
        c3themeUtils_1.ToggleTheme("Rebirth." + item.Entity.ID, false);
        //todo update rebirth selectors themes
        c3themeUtils_1.ToggleTheme("Rebirth" + item.Entity.ID, false);
        //todo make local functions for this
        if (item.Entity.ClassID == gameObject_1.ClassName.Monster) {
            utilsGUI_1.SetSelectorEnabled("Rebirth.Monsters", item.Entity.ID, false);
            c3themeUtils_1.ToggleTheme("MonsterSettings::" + item.Entity.ID, item.Unlock.IsUnlocked);
        }
        else if (item.Entity.ClassID == gameObject_1.ClassName.Turret) {
            utilsGUI_1.SetSelectorEnabled("Rebirth.Turrets", item.Entity.ID, false);
        }
        else if (utilsObjects_1.ValuesOf(gameObject_1.BuildingName).includes(item.Entity.ClassID)) {
            utilsGUI_1.SetSelectorEnabled("Rebirth.Buildings", item.Entity.ID, false);
        }
        ThemeConditions.push(new EventWithCondition(function () { return item.Unlock.IsUnlocked; }, function () { return c3themeUtils_1.ToggleTheme("Upgrades::" + item.Entity.ID, true); }));
        ThemeConditions.push(new EventWithCondition(function () { return item.System.IsEverUnlocked.Value; }, function () {
            c3themeUtils_1.ToggleTheme("Statistics::" + item.Entity.ID, true);
            c3themeUtils_1.ToggleTheme("Rebirth." + item.Entity.ID, true);
            //todo update rebirth selectors themes
            c3themeUtils_1.ToggleTheme("Rebirth" + item.Entity.ID, true);
            if (item.Entity.ClassID == gameObject_1.ClassName.Monster) {
                utilsGUI_1.SetSelectorEnabled("Rebirth.Monsters", "" + item.Entity.ID, true);
            }
            else if (item.Entity.ClassID == gameObject_1.ClassName.Turret) {
                utilsGUI_1.SetSelectorEnabled("Rebirth.Turrets", "" + item.Entity.ID, true);
            }
            else if (utilsObjects_1.ValuesOf(gameObject_1.BuildingName).includes(item.Entity.ClassID)) {
                utilsGUI_1.SetSelectorEnabled("Rebirth.Buildings", item.Entity.ID, true);
            }
        }));
    };
    for (var _a = 0, unlockableEntities_1 = unlockableEntities; _a < unlockableEntities_1.length; _a++) {
        var item = unlockableEntities_1[_a];
        _loop_2(item);
    }
    for (var _b = 0, _c = utilsObjects_1.ValuesOf(content_1.Content.Monsters)
        .filter(function (item) { return item.Entity.ID != "BasicMonster"; }); _b < _c.length; _b++) {
        var monster = _c[_b];
        utilsGUI_1.SetSelectorEnabled("Rebirth.Monsters", monster.Entity.ID, false);
    }
    for (var _d = 0, _e = utilsObjects_1.ValuesOf(content_1.Content.Turrets)
        .filter(function (item) { return item.Entity.ID != "BasicTurret"; }); _d < _e.length; _d++) {
        var turret = _e[_d];
        utilsGUI_1.SetSelectorEnabled("Rebirth.Turrets", turret.Entity.ID, false);
    }
    //todo easier way to do it for upgrade
    //add ability to specify this stuff in separate classes
    ThemeConditions.push.apply(ThemeConditions, [
        new EventWithCondition(function () { return true; }, function () { return true; }),
        // Unlocks
        new EventWithCondition(function () { return content_1.Content.Monsters.Basic.Unlock.IsUnlocked; }, function () {
            var id = "BasicTurret";
            c3themeUtils_1.ToggleTheme("Unlock::" + id, true);
            content_1.Content.Turrets.Basic.UnlockPurchase.IsThemeUnlocked = true;
        }),
        //todo move it to ArmoredMonsterContent somehow
        //# ArmoredMonster #
        new EventWithCondition(function () { return content_1.Content.Wallets.Coins.Statistics.TotalCollected.IsMore(10000); }, function () {
            var id = "ArmoredMonster";
            c3themeUtils_1.ToggleTheme("Unlock::" + id, true);
            content_1.Content.Monsters.Armored.UnlockPurchase.IsThemeUnlocked = true;
            if (!content_1.Content.Monsters.Armored.System.IsNotificationShown.Value) {
                content_1.Content.Monsters.Armored.System.IsNotificationShown.Value = true;
                overlayMessage_1.ShowOverlayMessage({
                    Title: "Rockster is available!",
                    Text: "New monster is available for purchase! But, before buying him, be sure you are ready to rock!",
                    Icon: {
                        Animation: "Monsters",
                        Frame: 1,
                    },
                    Button: {
                        //bug color is not set
                        Color: utilsMath_1.HexToRGB255("#e33b3b"),
                        Action: function () { return content_1.Managers.Views.SetView(content_1.Content.Views.Menus.Unlocks); }
                    }
                });
            }
        }),
        //# Spikes #
        new EventWithCondition(function () { return content_1.Content.Wallets.Coins.Statistics.TotalCollected.IsMore(75000); }, function () {
            var id = "Spikes";
            c3themeUtils_1.ToggleTheme("Unlock::" + id, true);
            content_1.Content.Buildings.Spikes.UnlockPurchase.IsThemeUnlocked = true;
            if (!content_1.Content.Buildings.Spikes.System.IsNotificationShown.Value) {
                content_1.Content.Buildings.Spikes.System.IsNotificationShown.Value = true;
                overlayMessage_1.ShowOverlayMessage({
                    Title: "Spikes is available!",
                    Text: "New building is available! Spikes is a great thing to damage monsters with armor, "
                        + "because it has ability to deal damage through armor, but you need to unlock it first!",
                    Icon: {
                        Animation: "Buildings",
                        Frame: 0,
                    },
                    Button: {
                        //bug color is not set
                        Color: utilsMath_1.HexToRGB255("#e33b3b"),
                        Action: function () { return content_1.Managers.Views.SetView(content_1.Content.Views.Menus.Unlocks); }
                    }
                });
            }
        }),
        //# LaserTurret #
        new EventWithCondition(function () { return content_1.Content.Wallets.Coins.Statistics.TotalCollected.IsMore(200000); }, function () {
            var id = "LaserTurret";
            c3themeUtils_1.ToggleTheme("Unlock::" + id, true);
            content_1.Content.Turrets.Laser.UnlockPurchase.IsThemeUnlocked = true;
            if (!content_1.Content.Turrets.Laser.System.IsNotificationShown.Value) {
                content_1.Content.Turrets.Laser.System.IsNotificationShown.Value = true;
                overlayMessage_1.ShowOverlayMessage({
                    Title: "Lasergun is available!",
                    Text: "Hey, you have a new turret to buy! It doesn't do much damage, but it rotates quickly and fires frequently. I think you'll find a use for it!",
                    Icon: {
                        Animation: "Turrets",
                        Frame: 1,
                    },
                    Button: {
                        //bug color is not set
                        Color: utilsMath_1.HexToRGB255("#e33b3b"),
                        Action: function () { return content_1.Managers.Views.SetView(content_1.Content.Views.Menus.Unlocks); }
                    }
                });
            }
        }),
        // //# FastMonster #
        // new EventWithCondition(
        //     () => Content.Wallets.Coins.Statistics.TotalCollected.IsMore(5_000_000),
        //     () => {
        //             let id = "FastMonster";
        //             ToggleTheme(`Unlock::${id}`, true);
        //             Content.Monsters.Fast.UnlockPurchase.IsThemeUnlocked = true;
        //         if (!Content.Monsters.Fast.System.IsNotificationShown.Value) {
        //             Content.Monsters.Fast.System.IsNotificationShown.Value = true;
        //             ShowOverlayMessage({
        //                 Title: "Trickster is available!",
        //                 Text: "Wow, template text!",
        //
        //                 Icon: {
        //                     Animation: "Monsters",
        //                     Frame: 2,
        //                 },
        //                 Button: {
        //                     //bug color is not set
        //                     Color: HexToRGB255("#e33b3b"),
        //                     Action: () => Managers.Views.SetView(Content.Views.Menus.Unlocks)
        //                 }
        //             })
        //         }
        //     }),
        //
        //
        // //# RailTurret #
        // new EventWithCondition(
        //     () => Content.Wallets.Coins.Statistics.TotalCollected.IsMore(20_000_000),
        //     () => {
        //             let id = "RailTurret";
        //             ToggleTheme(`Unlock::${id}`, true);
        //             Content.Turrets.Rail.UnlockPurchase.IsThemeUnlocked = true;
        //
        //         if (!Content.Turrets.Rail.System.IsNotificationShown.Value) {
        //             Content.Turrets.Rail.System.IsNotificationShown.Value = true;
        //             ShowOverlayMessage({
        //                 Title: "Railgun is available!",
        //                 Text: "Wow, template text!",
        //
        //                 Icon: {
        //                     Animation: "Turrets",
        //                     Frame: 2,
        //                 },
        //                 Button: {
        //                     //bug color is not set
        //                     Color: HexToRGB255("#e33b3b"),
        //                     Action: () => Managers.Views.SetView(Content.Views.Menus.Unlocks)
        //                 }
        //             })
        //         }
        //     }),
        //# Rebirth #
        new EventWithCondition(function () { return content_1.Content.Rebirth.Stats.HappenedCount.Value.IsMore(0)
            || content_1.Content.Rebirth.Stats.NextPointProgress.LevelValue.IsMoreOrEqual(5); }, function () {
            //todo somehow, make enums for themes and combine them with IDs
            c3themeUtils_1.ToggleTheme('Menu::Rebirth', true);
            utilsGUI_1.SetButtonEnabled("setView::Rebirth", true);
            c3themeUtils_1.ToggleTheme('Upgrade::BasicTurret.Count', true);
            c3themeUtils_1.ToggleTheme('Upgrade::BasicMonster.Rebirth.Health', true);
            if (!content_1.Content.Rebirth.Stats.IsNotificationShow.Value) {
                content_1.Content.Rebirth.Stats.IsNotificationShow.Value = true;
                overlayMessage_1.ShowOverlayMessage({
                    Title: "New menu unlocked!",
                    Text: "You just unlocked Rebirth! It allows you to reset your progress, but get some cool permanent bonuses.",
                    Icon: {
                        Animation: "Wallets",
                        Frame: 1,
                    },
                    Button: {
                        //bug color is not set
                        Color: utilsMath_1.HexToRGB255("#e33b3b"),
                        Action: function () { return content_1.Managers.Views.SetView(content_1.Content.Views.Menus.Menu); }
                    }
                });
            }
        }),
    ]);
    UpdateScrollbars();
    c3themeUtils_1.ToggleTheme('SystemStuff', game_1.BUILD_MODE == "Preview");
    content_1.SystemData.IsThemesInitiated = true;
}
exports.InitThemeUnlocks = InitThemeUnlocks;
var EventWithCondition = /** @class */ (function () {
    function EventWithCondition(CheckCondition, OnConditionTrue) {
        this.CheckCondition = CheckCondition;
        this.OnConditionTrue = OnConditionTrue;
    }
    return EventWithCondition;
}());
exports.EventWithCondition = EventWithCondition;
function UpdateScrollbars() {
    if (content_1.SystemData.IsContentLoaded) {
        for (var _i = 0, _a = content_1.UIStorage.GetAllItemsOfType(scrollbar_1.Scrollbar); _i < _a.length; _i++) {
            var scrollbar = _a[_i];
            //scrollbar.UpdateVisibleElementsData();
            scrollbar.Update();
        }
    }
}
exports.UpdateScrollbars = UpdateScrollbars;
//todo call it on events, not every tick... (or at least every second maybe, for now)
function UpdateThemeUnlocks() {
    content_1.SystemData.IsThemesInitiated = false;
    var completed = 0;
    for (var i = 0; i < ThemeConditions.length; i++) {
        var condition = ThemeConditions[i];
        if (condition.CheckCondition()) {
            completed++;
            condition.OnConditionTrue();
            ThemeConditions.splice(i, 1);
        }
    }
    content_1.SystemData.IsThemesInitiated = true;
    if (completed > 0) {
        UpdateScrollbars();
        game_1.SmartUIUpdate();
        //Construct3.callFunction("UpdateGUI");
    }
}
exports.UpdateThemeUnlocks = UpdateThemeUnlocks;

