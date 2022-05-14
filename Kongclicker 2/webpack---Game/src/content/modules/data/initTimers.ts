
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllTimersContent = exports.InitTimers = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var timer_1 = __webpack_require__(/*! ../../../data/timer */ "./src/data/timer.ts");
var time_1 = __webpack_require__(/*! ../../../data/time */ "./src/data/time.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var main_1 = __webpack_require__(/*! ../../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var upgrade_1 = __webpack_require__(/*! ../../../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var game_1 = __webpack_require__(/*! ../../../game */ "./src/game.ts");
var kongregate_1 = __webpack_require__(/*! ../../../../javascript/kongregate/kongregate */ "./javascript/kongregate/kongregate.ts");
var overlayMessage_1 = __webpack_require__(/*! ../../../ui/overlayMessage */ "./src/ui/overlayMessage.ts");
var utilsMath_1 = __webpack_require__(/*! ../../../utils/utilsMath */ "./src/utils/utilsMath.ts");
var utilsText_1 = __webpack_require__(/*! ../../../utils/utilsText */ "./src/utils/utilsText.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
var turret_1 = __webpack_require__(/*! ../../../game/fighting/turret */ "./src/game/fighting/turret.ts");
var monster_1 = __webpack_require__(/*! ../../../game/fighting/monster */ "./src/game/fighting/monster.ts");
var utilsRandom_1 = __webpack_require__(/*! ../../../utils/utilsRandom */ "./src/utils/utilsRandom.ts");
function InitTimers(storage, content) {
    //todo TimerEvents.SaveGame(args)???
    return new AllTimersContent(storage, content);
}
exports.InitTimers = InitTimers;
var AllTimersContent = /** @class */ (function () {
    function AllTimersContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        this.game = new contentModule_1.ContentModule(ModuleStorage, "Timers.Game", function () { return ({
            MonsterSpawn: new timer_1.Timer(content_1.TimerStorage, "Timers.Game.MonsterSpawn", new time_1.Time(0, 0, 3, 0), 1, false, false, new timer_1.MonsterSpawnTimerEvent(), false),
        }); });
        this.system = new contentModule_1.ContentModule(ModuleStorage, "Timers.System", function () { return ({
            SaveGame: new timer_1.Timer(content_1.TimerStorage, "Timers.System.SaveGame", new time_1.Time(0, 0, 5, 0), 1, false, true, new timer_1.SaveGameTimerEvent()),
            LastUnfocusTime: new container_1.Container(ContentStorage, "Timers.System.LastUnfocusTime", new Date(), container_1.DateContainer),
            UnfocusTimeHappened: false,
            UnfocusTime: new timer_1.Timer(content_1.TimerStorage, "Timers.System.UnfocusTime", new time_1.Time(0, 0, 1, 0), 1, true, true, {
                OnEvent: function () {
                    var lastTime = content_1.Content.Timers.System.LastUnfocusTime.Value;
                    var elapsedTime = new time_1.Time(0, 0, 0, new Date().getTime() - lastTime.getTime());
                    var basicElapsedTime = elapsedTime;
                    content_1.Content.Timers.System.UnfocusTimeHappened = true;
                    content_1.Content.Timers.System.LastUnfocusTime.Value = new Date();
                    var maxOfflineHours = 12;
                    var maxOfflineTimeReached = false;
                    if (elapsedTime.TotalHours.IsMore(maxOfflineHours)) {
                        //elapsedTime = new Time(maxOfflineHours);
                        //maxOfflineTimeReached = true;
                    }
                    //todo всё таки проще будет считать средний доход, причём брать больше времени, если возможно,
                    // просто брать весь заработок за 10 минут, рассчитать сколько в секунду, и умножить на офлайн время
                    if (elapsedTime.TotalSeconds.IsMore(20)) {
                        //let elapsedTime = new Time(24);
                        //todo Offline gains statistics
                        //todo consider instant spawn
                        var universalOrHealthDamage = new game_1.Float(0);
                        //let shieldsDamage = new Float(0);
                        //# Turrets / Buildings dmg/sec #
                        for (var _i = 0, _a = __spreadArrays(utilsObjects_1.ValuesOf(ContentStorage.GetAllItemsOfType(turret_1.Turret)), [
                            content_1.Content.Buildings.Spikes.Entity,
                        ]); _i < _a.length; _i++) {
                            var building = _a[_i];
                            var damage = game_1.Float.Plus(building.Damage.Value, building.HealthDamage.Value);
                            var damagePerSec = damage
                                .Times(building.Instances.Length)
                                .Divide(building.ReloadTimeMS.Value.Divide(1000));
                            if (damagePerSec.IsMore(0)) {
                                universalOrHealthDamage = universalOrHealthDamage.Plus(damagePerSec);
                                console.log("[OfflineTime] " + building.ID + ": dealt " + utilsText_1.GetNumberText(damagePerSec) + " damage");
                            }
                        }
                        if (universalOrHealthDamage.IsEqual(0))
                            return;
                        //# Monsters killed #
                        var activeMonsters = ContentStorage.GetAllItemsOfType(monster_1.Monster)
                            .filter(function (monster) {
                            return monster.Unlock.IsUnlocked
                                && monster.GetContent().System.IsEnabled.Value;
                        });
                        var eachMonsterTimeSec = elapsedTime.TotalSeconds.Divide(activeMonsters.length);
                        var totalCoins = new game_1.Float();
                        var totalRP = new game_1.Float();
                        for (var _b = 0, activeMonsters_1 = activeMonsters; _b < activeMonsters_1.length; _b++) {
                            var monster = activeMonsters_1[_b];
                            var totalHealth = game_1.Float.Plus(monster.Health.Value, monster.Shield.Value);
                            var killTime = totalHealth.Divide(universalOrHealthDamage);
                            var monsterLifeCycle = monster.SpawnTimeMS.Value.Divide(1000)
                                .Plus(killTime);
                            var killed = eachMonsterTimeSec.Divide(monsterLifeCycle).Floor();
                            var reward = killed.Times(monster.Reward.ValueData.Value);
                            console.log("[OfflineTime] " + monster.ID + " killed " + killed);
                            totalCoins = totalCoins.Plus(reward);
                            console.log("[OfflineTime] " + monster.ID + ": " + utilsText_1.GetNumberText(reward) + " Coins");
                            if (monster.RPDropChance.Value.IsMore(0)) {
                                var RPDropCount = utilsRandom_1.Random.Utils.BoolCount(monster.RPDropChance.Value, killed);
                                var rpDrop = game_1.Float.Times(RPDropCount, monster.RPDropValue.Value);
                                totalRP = totalRP.Plus(rpDrop);
                                console.log("[OfflineTime] " + monster.ID + ": " + utilsText_1.GetNumberText(rpDrop) + " RP");
                            }
                        }
                        var offlineGainMultiplier = 1;
                        if (elapsedTime.TotalMinutes.IsLess(15)) {
                            offlineGainMultiplier = 1;
                        }
                        else if (elapsedTime.TotalMinutes.IsLess(30)) {
                            offlineGainMultiplier = 0.9;
                        }
                        else if (elapsedTime.TotalMinutes.IsLess(120)) {
                            offlineGainMultiplier = 0.8;
                        }
                        else if (elapsedTime.TotalMinutes.IsLess(360)) {
                            offlineGainMultiplier = 0.7;
                        }
                        else if (elapsedTime.TotalHours.IsLess(12)) {
                            offlineGainMultiplier = 0.6;
                        }
                        else {
                            offlineGainMultiplier = 0.5;
                        }
                        console.log("Offline gain multiplier: " + offlineGainMultiplier);
                        var multipliedCoins = totalCoins.Times(offlineGainMultiplier);
                        content_1.Content.Wallets.Coins.Add(multipliedCoins);
                        var multipliedRP = new game_1.Float(0);
                        if (totalRP.IsMore(0)) {
                            multipliedRP = totalRP.Times(offlineGainMultiplier);
                            content_1.Content.Rebirth.Stats.NonRebirthAward.Value
                                = game_1.Float.Plus(content_1.Content.Rebirth.Stats.NonRebirthAward.Value, multipliedRP);
                        }
                        var title = content_1.Content.Timers.System.UnfocusTimeHappened
                            ? "Background" : "Offline";
                        var text = content_1.Content.Timers.System.UnfocusTimeHappened
                            ? "Game was in background" : "You was offline";
                        var maxText = maxOfflineTimeReached
                            ? "\n(Max offline time reached: " + maxOfflineHours + "h)" : "";
                        overlayMessage_1.ShowOverlayMessage({
                            Title: title + " progress",
                            Text: text + " for " + utilsText_1.GetTimeText(basicElapsedTime)
                                + ("\n\nDuring this time, you earned [color=#fded0f]" + utilsText_1.GetNumberText(multipliedCoins) + " Coins[/color]!")
                                + (multipliedRP.IsMore(0) ? "\nMonsters dropped [color=#4ad674]" + utilsText_1.GetNumberText(multipliedRP) + " RP[/color]!" : "")
                                + ("\n" + maxText),
                            Icon: {
                                Animation: "Wallets",
                                Frame: 0,
                            },
                            Button: {
                                Text: "Cool",
                                Color: utilsMath_1.HexToRGB255("#e33b3b"),
                            }
                        });
                    }
                }
            }),
            KongStats: new timer_1.Timer(content_1.TimerStorage, "Timers.System.KongStats", new time_1.Time(0, 1, 0, 0), 1, false, true, {
                OnEvent: function () {
                    try {
                        if (kongregate_1.KongregateData.ApiLoaded && content_1.SystemData.IsContentLoaded) {
                            kongregate_1.KongregateManager.stats.submit("Total Coins", content_1.Content.Wallets.Coins.Statistics.TotalCollected.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Total RP", content_1.Content.Wallets.RebirthPoints.Statistics.TotalCollected.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Rebirths", content_1.Content.Rebirth.Stats.HappenedCount.Value.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Time Played", content_1.Content.Statistics.Time.TimePlayed.Value.TotalMinutes.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Gunshot Total Damage", content_1.Content.Turrets.Basic.Entity.Statistics.DamageDealt.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Lasergun Total Damage", content_1.Content.Turrets.Laser.Entity.Statistics.DamageDealt.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Spikes Total Damage", content_1.Content.Buildings.Spikes.Entity.Statistics.DamageDealt.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Click Kills", content_1.Content.Statistics.Gameplay.ClickKills.Value);
                            kongregate_1.KongregateManager.stats.submit("Bally Total Coins", content_1.Content.Monsters.Basic.Entity.Statistics.TotalCoinsMade.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Rockster Total Coins", content_1.Content.Monsters.Armored.Entity.Statistics.TotalCoinsMade.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Total Clicks", content_1.Content.Statistics.Gameplay.TotalClicks.Value);
                            kongregate_1.KongregateManager.stats.submit("Gunshot Max Count", content_1.Content.Turrets.Basic.Entity.Count.Value.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Spikes Max Count", content_1.Content.Buildings.Spikes.Entity.Count.Value.AsNumber);
                            kongregate_1.KongregateManager.stats.submit("Lasergun Max Count", content_1.Content.Turrets.Laser.Entity.Count.Value.AsNumber);
                        }
                    }
                    catch (e) {
                        console.log("KongStats updating error: " + e.name + "\nIt says: '" + e.message + "'!");
                    }
                }
            }),
        }); });
        this.debug = new contentModule_1.ContentModule(ModuleStorage, "Timers.Debug", function () { return ({
            Bot: new timer_1.Timer(content_1.TimerStorage, "Timers.Debug.Bot", new time_1.Time(0, 0, 2, 0), 1, false, true, {
                OnEvent: function () {
                    if (game_1.BUILD_MODE != "Preview" || !content_1.SystemData.Debug.Bot.Enabled)
                        return;
                    var GetUpgrades = function (items) {
                        var upgrades = [];
                        utilsObjects_1.ValuesOf(items).forEach(function (item) {
                            if (item.Unlock.IsUnlocked) {
                                // @ts-ignore
                                upgrades.push.apply(upgrades, utilsObjects_1.ValuesOf(item.Upgrades));
                            }
                        });
                        return upgrades;
                    };
                    // const upgrades = [
                    //     ...GetUpgrades(ValuesOf(Content.Turrets)),
                    //     ...GetUpgrades(ValuesOf(Content.Buildings)),
                    //     ...GetUpgrades(ValuesOf(Content.Monsters))];
                    var upgrades = ContentStorage.GetAllItemsOfType(upgrade_1.Upgrade);
                    content_1.RNG.shuffle(upgrades);
                    for (var _i = 0, upgrades_1 = upgrades; _i < upgrades_1.length; _i++) {
                        var upgrade = upgrades_1[_i];
                        if (upgrade.IsCanBuy(1)) {
                            upgrade.Buy(1);
                        }
                    }
                    // ValuesOf(Content.Turrets).forEach((turret) => {
                    //     if (turret.Unlock.IsUnlocked) {
                    //         for (const upgrade of ValuesOf(turret.Upgrades)) {
                    //             if (upgrade.IsCanBuy(1)) {
                    //                 upgrade.Buy(1);
                    //             }
                    //         }
                    //     }
                    // });
                    //
                    // ValuesOf(Content.Monsters).forEach((monster) => {
                    //     if (monster.Unlock.IsUnlocked) {
                    //         for (const upgrade of ValuesOf(monster.Upgrades)) {
                    //             if (upgrade.IsCanBuy(1)) {
                    //                 upgrade.Buy(1);
                    //             }
                    //         }
                    //     }
                    // })
                    var doClickDamage = content_1.RNG.bool(0.75);
                    if (doClickDamage) {
                        var monsters = main_1.Construct3.objects.Monster.getAllInstances();
                        if (monsters.length > 0) {
                            main_1.Construct3.callFunction("DoClickDamage", content_1.RNG.pick(monsters).uid);
                        }
                    }
                }
            }),
        }); });
    }
    Object.defineProperty(AllTimersContent.prototype, "Game", {
        get: function () {
            return this.game.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllTimersContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllTimersContent.prototype, "Debug", {
        get: function () {
            return this.debug.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllTimersContent;
}());
exports.AllTimersContent = AllTimersContent;

