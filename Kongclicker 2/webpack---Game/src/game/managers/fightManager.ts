
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightManager = exports.OnSpikesUnlocked = exports.OnRailTurretUnlocked = exports.OnLaserTurretUnlocked = exports.OnBasicTurretUnlocked = exports.OnFastMonsterUnlocked = exports.OnArmoredMonsterUnlocked = exports.OnBasicMonsterUnlocked = void 0;
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var turret_1 = __webpack_require__(/*! ../fighting/turret */ "./src/game/fighting/turret.ts");
var monster_1 = __webpack_require__(/*! ../fighting/monster */ "./src/game/fighting/monster.ts");
var main_1 = __webpack_require__(/*! ../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var vector2_1 = __webpack_require__(/*! ../../data/vector2 */ "./src/data/vector2.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var c3themeUtils_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/c3themeUtils */ "./javascript/construct3/c3ObjectUtils/c3themeUtils.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var spikes_1 = __webpack_require__(/*! ../fighting/buildings/spikes */ "./src/game/fighting/buildings/spikes.ts");
var overlayMessage_1 = __webpack_require__(/*! ../../ui/overlayMessage */ "./src/ui/overlayMessage.ts");
var utilsMath_1 = __webpack_require__(/*! ../../utils/utilsMath */ "./src/utils/utilsMath.ts");
var utilsText_1 = __webpack_require__(/*! ../../utils/utilsText */ "./src/utils/utilsText.ts");
var inputHandlers_1 = __webpack_require__(/*! ../../input/inputHandlers */ "./src/input/inputHandlers.ts");
//todo MonsterManager, TurretManager, Field class maybe
//todo сделать OnMonsterUnlocked
// export class OnAnyMonsterUnlocked implements OnUnlockToggledEvent {
//
// }
//
// export class OnAnyTurretUnlocked implements OnUnlockToggledEvent {
//
// }
var OnBasicMonsterUnlocked = /** @class */ (function () {
    function OnBasicMonsterUnlocked() {
    }
    OnBasicMonsterUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var monster = content_1.Content.Monsters.Basic;
        c3themeUtils_1.ToggleTheme('Menu::Monsters', isUnlocked);
        utilsGUI_1.SetSelectorEnabled("Monster", monster.Entity.ID, isUnlocked);
        c3themeUtils_1.ToggleTheme("MonsterSettings::" + monster.Entity.ID, isUnlocked);
        if (isUnlocked) {
            monster.System.IsEverUnlocked.Value = true;
        }
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !content_1.Content.System.Notifications.IsMonsterTutorialShown.Value) {
            overlayMessage_1.ShowOverlayMessage({
                Title: "First monster unlocked!",
                Text: "You just got your first monster! Monsters here are the main way to earn money!"
                    + "\nJust make them disappear, that's all"
                    + "\n\nAt first, to do this, use your main super power..."
                    + "\n[color=#fb6fed][font=KumbhSans-Bold]LEFT MOUSE BUTTON![/font][/color]",
                Icon: {
                    Animation: "Monsters",
                    Frame: 0,
                },
                Button: {
                    //bug color is not set
                    Text: "I'l try!",
                    Color: utilsMath_1.HexToRGB255("#e33b3b"),
                }
            });
            content_1.Content.System.Notifications.IsMonsterTutorialShown.Value = true;
        }
    };
    return OnBasicMonsterUnlocked;
}());
exports.OnBasicMonsterUnlocked = OnBasicMonsterUnlocked;
var OnArmoredMonsterUnlocked = /** @class */ (function () {
    function OnArmoredMonsterUnlocked() {
    }
    OnArmoredMonsterUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var monster = content_1.Content.Monsters.Armored;
        utilsGUI_1.SetSelectorEnabled("Monster", monster.Entity.ID, isUnlocked);
        c3themeUtils_1.ToggleTheme("MonsterSettings::" + monster.Entity.ID, isUnlocked);
        if (isUnlocked) {
            monster.System.IsEverUnlocked.Value = true;
        }
    };
    return OnArmoredMonsterUnlocked;
}());
exports.OnArmoredMonsterUnlocked = OnArmoredMonsterUnlocked;
var OnFastMonsterUnlocked = /** @class */ (function () {
    function OnFastMonsterUnlocked() {
    }
    OnFastMonsterUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var monster = content_1.Content.Monsters.Fast;
        utilsGUI_1.SetSelectorEnabled("Monster", monster.Entity.ID, isUnlocked);
        if (isUnlocked) {
            monster.System.IsEverUnlocked.Value = true;
        }
        //todo а почему я собственно не могу нормально открывать контент здесь?
    };
    return OnFastMonsterUnlocked;
}());
exports.OnFastMonsterUnlocked = OnFastMonsterUnlocked;
//todo maybe give FightManager through this events? I guess yes
//todo ОБЩУЮ ЛОГИКУ ОСТАВИТЬ ЗДЕСЬ, А ОСТАЛЬНОЕ В СПЕЦИФИК КЛАССЫ, а потому и удобно сдесь всё хранить, потому что дублируется код
var OnBasicTurretUnlocked = /** @class */ (function () {
    function OnBasicTurretUnlocked() {
    }
    OnBasicTurretUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var turret = content_1.Content.Turrets.Basic;
        c3themeUtils_1.ToggleTheme('Menu::Turrets', isUnlocked);
        c3themeUtils_1.ToggleTheme('Menu::BuildMode', isUnlocked);
        c3themeUtils_1.ToggleTheme("Build::" + turret.Entity.ID, isUnlocked);
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !turret.System.IsBuildModeShown.Value) {
            content_1.Managers.Views.SetView(content_1.ViewID.BuildMode);
            utilsGUI_1.ToggleSelector("BuildModeBuilding", turret.Entity.ID);
            turret.System.IsBuildModeShown.Value = true;
        }
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !content_1.Content.System.Notifications.IsTurretTutorialShown.Value) {
            overlayMessage_1.ShowOverlayMessage({
                Title: "First turret unlocked!",
                Text: "Hey, you have a buddy now! Turrets will help you to defend... Wait, it's idle game, nevermind!"
                    + "\n\nTo build the turret, use "
                    + "[color=#fb6fed][font=KumbhSans-Bold]Build mode[/font][/color]"
                    + " in the main menu!",
                Icon: {
                    Animation: "Turrets",
                    Frame: 0,
                },
                Button: {
                    //bug color is not set
                    Text: "Show me!",
                    Color: utilsMath_1.HexToRGB255("#e33b3b"),
                }
            });
            content_1.Content.System.Notifications.IsTurretTutorialShown.Value = true;
        }
        if (isUnlocked) {
            turret.System.IsEverUnlocked.Value = true;
        }
        else {
            turret.Entity.DestroyAllInstances();
        }
    };
    return OnBasicTurretUnlocked;
}());
exports.OnBasicTurretUnlocked = OnBasicTurretUnlocked;
var OnLaserTurretUnlocked = /** @class */ (function () {
    function OnLaserTurretUnlocked() {
    }
    OnLaserTurretUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var turret = content_1.Content.Turrets.Laser;
        c3themeUtils_1.ToggleTheme("Build::" + turret.Entity.ID, isUnlocked);
        utilsGUI_1.SetSelectorEnabled("Turret", turret.Entity.ID, isUnlocked);
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !turret.System.IsBuildModeShown.Value) {
            content_1.Managers.Views.SetView(content_1.ViewID.BuildMode);
            utilsGUI_1.ToggleSelector("BuildModeBuilding", turret.Entity.ID);
            turret.System.IsBuildModeShown.Value = true;
        }
        if (isUnlocked) {
            turret.System.IsEverUnlocked.Value = true;
        }
        else {
            turret.Entity.DestroyAllInstances();
        }
    };
    return OnLaserTurretUnlocked;
}());
exports.OnLaserTurretUnlocked = OnLaserTurretUnlocked;
//todo i can actually make universal function like this
var OnRailTurretUnlocked = /** @class */ (function () {
    function OnRailTurretUnlocked() {
    }
    OnRailTurretUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        var turret = content_1.Content.Turrets.Rail;
        c3themeUtils_1.ToggleTheme("Build::" + turret.Entity.ID, isUnlocked);
        utilsGUI_1.SetSelectorEnabled("Turret", turret.Entity.ID, isUnlocked);
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !turret.System.IsBuildModeShown.Value) {
            content_1.Managers.Views.SetView(content_1.ViewID.BuildMode);
            utilsGUI_1.ToggleSelector("BuildModeBuilding", turret.Entity.ID);
            turret.System.IsBuildModeShown.Value = true;
        }
        if (isUnlocked) {
            turret.System.IsEverUnlocked.Value = true;
        }
        else {
            turret.Entity.DestroyAllInstances();
        }
    };
    return OnRailTurretUnlocked;
}());
exports.OnRailTurretUnlocked = OnRailTurretUnlocked;
var OnSpikesUnlocked = /** @class */ (function () {
    function OnSpikesUnlocked() {
    }
    OnSpikesUnlocked.prototype.OnEvent = function (isUnlocked, _isUnlockedBefore, _unlock) {
        c3themeUtils_1.ToggleTheme('Build::Spikes', isUnlocked);
        c3themeUtils_1.ToggleTheme('Menu::Buildings', isUnlocked);
        if (isUnlocked) {
            content_1.Content.Buildings.Spikes.System.IsEverUnlocked.Value = true;
            utilsGUI_1.SetSelectorEnabled("Rebirth.Menu", "Buildings", true);
        }
        if (isUnlocked && content_1.SystemData.IsContentLoaded && !content_1.Content.Buildings.Spikes.System.IsBuildModeShown.Value) {
            content_1.Managers.Views.SetView(content_1.ViewID.BuildMode);
            content_1.Content.Buildings.Spikes.System.IsBuildModeShown.Value = true;
            utilsGUI_1.ToggleSelector("BuildModeBuilding", "Spikes");
        }
        if (!isUnlocked) {
            content_1.Content.Buildings.Spikes.Entity.DestroyAllInstances();
        }
    };
    return OnSpikesUnlocked;
}());
exports.OnSpikesUnlocked = OnSpikesUnlocked;
var FightManager = /** @class */ (function () {
    function FightManager(storage, field) {
        this.CurrentMonsterView = "BasicMonster";
        this.CurrentTurretView = "BasicTurret";
        this.CurrentBuildingView = "Spikes";
        this.Rebirth = {
            CurrentMenu: "Main",
            LastSubMenu: "Main",
            CurrentMonstersMenu: "BasicMonster",
            CurrentTurretsMenu: "BasicTurret",
            CurrentBuildingsMenu: "Spikes",
        };
        this.NextMonster = undefined;
        this.Storage = storage;
        this.Field = field;
        //todo find out the better way to do it
        // this.CurrentMonsterView = Content.Monsters.Basic.Entity.ID;
        // this.CurrentTurretView = Content.Turrets.Basic.Entity.ID;
        // this.CurrentBuildingView = Content.Buildings.Spikes.Entity.ID;
        this.UpdateMonsters();
    }
    FightManager.prototype.UpdateBuildModeInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, turret, _b, _c, building;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                    case 1:
                        _d.sent();
                        //# BuildMode buildings stats #
                        if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.BuildMode) {
                            for (_i = 0, _a = content_1.ContentStorage.GetAllItemsOfType(turret_1.Turret); _i < _a.length; _i++) {
                                turret = _a[_i];
                                utilsGUI_1.SetText("buildingCount::" + turret.ID, utilsText_1.GetNumberText(content_1.Managers.Fight.GetTurretCount(turret.ID)) + " "
                                    + ("/ " + utilsText_1.GetNumberText(content_1.Managers.Fight.GetTurretMaxCount(turret))));
                            }
                            for (_b = 0, _c = [content_1.Content.Buildings.Spikes]; _b < _c.length; _b++) {
                                building = _c[_b];
                                utilsGUI_1.SetText("buildingCount::" + building.Entity.ID, building.Entity.Instances.Length + " "
                                    + ("/ " + building.Entity.Count.Value));
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FightManager.prototype.OnMonsterSpawned = function (monster, position) {
        if (monster.OnSpawned) {
            monster.OnSpawned(position);
        }
        this.UpdateMonsters();
    };
    FightManager.prototype.OnTurretCreated = function (turret) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof turret == "string") {
                            turret = content_1.ContentStorage.GetItemOfType(turret_1.Turret, turret);
                        }
                        return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                    case 1:
                        _a.sent();
                        this.UpdateTurret(turret);
                        return [2 /*return*/];
                }
            });
        });
    };
    //todo i really need event system
    FightManager.prototype.OnContentInitiatedOrGameLoaded = function () {
        this.UpdateMonsters();
    };
    FightManager.prototype.OnGameFullyLoaded = function () {
        for (var _i = 0, _a = main_1.Construct3.objects.MonsterMovePoint.getAllInstances(); _i < _a.length; _i++) {
            var movePoint = _a[_i];
            if (movePoint.instVars.OrderN == 0) {
                this.Field.MonsterSpawnPosition = new vector2_1.Vector2(movePoint.x, movePoint.y);
                break;
            }
        }
        //todo ОБЩИЙ СПИСОК ПОД КЛАССЫ, ЧТОБЫ УБРАТЬ МИЛЛИНЫ ValuesOF!!!!
        for (var _b = 0, _c = content_1.ContentStorage.GetAllItemsOfType(monster_1.Monster); _b < _c.length; _b++) {
            var monster = _c[_b];
            inputHandlers_1.UpdateMonsterToggle(monster.ID, monster.GetContent().System.IsEnabled.Value);
        }
    };
    FightManager.prototype.OnMonsterFinishedPath = function () {
        //todo implement
    };
    FightManager.prototype.OnMonsterDied = function (type, reward, position, damageDealerID) {
        var monster = this.Storage.GetItemOfType(monster_1.Monster, type);
        content_1.Content.Wallets.Coins.Add(reward.Coins);
        content_1.Content.Rebirth.Stats.NonRebirthAward.Value = float_1.Float.Plus(content_1.Content.Rebirth.Stats.NonRebirthAward.Value, reward.RP);
        monster.Statistics.TotalCoinsMade = float_1.Float.Plus(monster.Statistics.TotalCoinsMade, reward.Coins);
        monster.Statistics.TotalRPMade = float_1.Float.Plus(monster.Statistics.TotalRPMade, reward.RP);
        if (monster.OnDied) {
            monster.OnDied(position);
        }
        this.UpdateMonsters();
        if (damageDealerID != "Click" && damageDealerID != "System") {
            var damageDealer = this.Storage.GetItem(damageDealerID);
            if (damageDealer.ClassID == gameObject_1.ClassName.Turret || damageDealer.ClassID == gameObject_1.ClassName.Spikes) {
                var turret = (damageDealer || spikes_1.Spikes);
                turret.Statistics.MonstersKilled++;
                turret.Statistics.TotalCoinsMade = float_1.Float.Plus(turret.Statistics.TotalCoinsMade, reward.Coins);
            }
            else {
                throw new Error("Not handled damage dealer: '" + damageDealerID + "'");
            }
        }
        else if (damageDealerID == "Click") {
            content_1.Content.Statistics.Gameplay.ClickKills.Value++;
        }
        else if (damageDealerID != "System") {
            throw new Error("Damage dealer id '" + damageDealerID + "' is not handled");
        }
    };
    FightManager.prototype.OnMonsterDamaged = function (monsterID, damage, damageDealerID) {
        var monster = content_1.ContentStorage.GetItemOfType(monster_1.Monster, monsterID);
        if (damageDealerID != "Click" && damageDealerID != "System") {
            var damageDealer = this.Storage.GetItem(damageDealerID);
            if (damageDealer.ClassID == gameObject_1.ClassName.Turret || damageDealer.ClassID == gameObject_1.ClassName.Spikes) {
                var turret = (damageDealer || spikes_1.Spikes);
                turret.Statistics.DamageDealt = float_1.Float.Plus(turret.Statistics.DamageDealt, damage);
            }
            else {
                throw new Error("Not handled damage dealer: '" + damageDealerID + "'");
            }
        }
        else if (damageDealerID == "Click") {
            //# Handled in C3 Input events #
        }
        //todo move click damage count here
        else if (damageDealerID != "System") {
            throw new Error("Damage dealer id '" + damageDealerID + "' is not handled");
        }
    };
    FightManager.prototype.GetMonsterCount = function (monsterType) {
        var count = 0;
        var monsters = main_1.Construct3.objects.Monster.getAllInstances();
        for (var _i = 0, monsters_1 = monsters; _i < monsters_1.length; _i++) {
            var monster = monsters_1[_i];
            if (monster.instVars.Type == monsterType.ID) {
                count++;
            }
        }
        return count;
    };
    FightManager.prototype.UpdateMonsters = function () {
        //todo check performance of this stuff
        if (!this.NextMonster) {
            var monsters = this.Storage.GetAllItemsOfType(monster_1.Monster);
            var availableMonsters = [];
            for (var i = monsters.length - 1; i >= 0; i--) {
                var monster = monsters[i];
                var count = this.GetMonsterCount(monster);
                var countMax = monster.MaxCount.Value.AsNumber;
                var content = monster.GetContent();
                if (monster.Unlock.IsUnlocked && content.System.IsEnabled.Value && count < countMax) {
                    availableMonsters.push({
                        Monster: monster,
                        Count: count,
                    });
                }
            }
            if (availableMonsters.length > 0) {
                availableMonsters.sort(function (a, b) { return a.Count - b.Count; });
                var monster = availableMonsters[0].Monster;
                this.NextMonster = monster;
                var frame = 0;
                switch (monster.ID) {
                    case "BasicMonster":
                        frame = 0;
                        break;
                    case "ArmoredMonster":
                        frame = 1;
                        break;
                    case "FastMonster":
                        frame = 2;
                        break;
                }
                utilsGUI_1.SetIconFrame("NextMonster", frame, "Monsters");
                utilsGUI_1.SetIconVisible("NextMonster", true);
                var instantSpawn = content_1.RNG.bool(monster.InstantSpawnChance.Value.Divide(100).AsNumber);
                if (instantSpawn) {
                    content_1.Content.Timers.Game.MonsterSpawn.Duration = new float_1.Float(250);
                }
                else {
                    content_1.Content.Timers.Game.MonsterSpawn.Duration = monster.SpawnTimeMS.Value;
                }
                content_1.Content.Timers.Game.MonsterSpawn.Start();
            }
        }
    };
    FightManager.prototype.UpdateTurrets = function () {
        for (var _i = 0, _a = content_1.ContentStorage.GetAllItemsOfType(turret_1.Turret); _i < _a.length; _i++) {
            var turret = _a[_i];
            if (turret.Unlock.IsUnlocked) {
                this.UpdateTurret(turret);
            }
        }
    };
    FightManager.prototype.GetTurretCount = function (turretOrID) {
        var count = 0;
        var id;
        if (turretOrID) {
            id = this.GetTurret(turretOrID).ID;
        }
        for (var _i = 0, _a = main_1.Construct3.objects.Turret.getAllInstances(); _i < _a.length; _i++) {
            var turret = _a[_i];
            if (id && turret.instVars.Type != id) {
                continue;
            }
            count++;
        }
        return count;
    };
    FightManager.prototype.GetTurretMaxCount = function (turretOrID) {
        return this.GetTurret(turretOrID).Count.Value.AsNumber;
    };
    FightManager.prototype.CreateNextMonster = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, countMax;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.NextMonster) return [3 /*break*/, 5];
                        count = this.GetMonsterCount(this.NextMonster);
                        countMax = this.NextMonster.MaxCount.Value.AsNumber;
                        if (!(count < countMax)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.CreateMonster(this.Field.MonsterSpawnPosition, this.NextMonster)];
                    case 1:
                        _a.sent();
                        setTimeout(function () {
                            if (!content_1.Managers.Fight.NextMonster) {
                                utilsGUI_1.SetIconFrame("NextMonster", 2, "Markup");
                            }
                        }, 350);
                        return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Next monster " + this.NextMonster.ID + " should've been created, but max count is already reached");
                    case 4:
                        this.NextMonster = undefined;
                        return [3 /*break*/, 6];
                    case 5: throw new Error("Next monster was not set");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FightManager.prototype.CreateMonster = function (position, monsterOrID) {
        return __awaiter(this, void 0, void 0, function () {
            var monster;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        monster = this.GetMonster(monsterOrID);
                        monster.Statistics.TotalSpawned++;
                        main_1.Construct3.callFunction("CreateMonster", monster.ID, position.X, position.Y, float_1.RawFloatValue(monster.Health.Value), float_1.RawFloatValue(monster.Speed.Value), float_1.RawFloatValue(monster.Reward.ValueData.Value), float_1.RawFloatValue(monster.RPDropValue.Value), float_1.RawFloatValue(monster.RPDropChance.Value), float_1.RawFloatValue(monster.Shield.Value), float_1.RawFloatValue(monster.DamageReductionMP.Value), float_1.RawFloatValue(monster.DodgeChance.Value));
                        return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                    case 1:
                        _a.sent();
                        this.UpdateMonsters();
                        return [2 /*return*/];
                }
            });
        });
    };
    FightManager.prototype.GetTurret = function (turretOrID) {
        if (typeof turretOrID == "string") {
            return this.Storage.GetItem(turretOrID);
        }
        else
            return turretOrID;
    };
    FightManager.prototype.GetMonster = function (monsterOrID) {
        if (typeof monsterOrID == "string") {
            return this.Storage.GetItem(monsterOrID);
        }
        else
            return monsterOrID;
    };
    //todo move to Create/Upgrade Buildings
    /**
     * @return UID of created turret
     */
    FightManager.prototype.CreateTurret = function (position, turretOrID, angle) {
        var turret = this.GetTurret(turretOrID);
        return main_1.Construct3.callFunction("CreateTurret", turret.ID, position.X, position.Y, angle);
    };
    FightManager.prototype.UpdateTurret = function (turret) {
        main_1.Construct3.callFunction("UpdateTurret", turret.ID, float_1.RawFloatValue(turret.Damage.Value), float_1.RawFloatValue(turret.HealthDamage.Value), float_1.RawFloatValue(turret.ShieldDamage.Value), float_1.RawFloatValue(turret.ReloadTimeMS.Value), float_1.RawFloatValue(turret.RotateSpeed.Value), float_1.RawFloatValue(turret.BulletSpeed.Value), float_1.RawFloatValue(turret.Range.Value), float_1.RawFloatValue(turret.BulletCount.Value), float_1.RawFloatValue(turret.CriticalDamageMP.Value), float_1.RawFloatValue(turret.CriticalDamageChance.Value), float_1.RawFloatValue(turret.HitsPerShot.Value), float_1.RawFloatValue(turret.FirstMonsterDamageMP.Value));
        for (var _i = 0, _a = turret.Instances.Items; _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance.IsCreated()) {
                instance.Angle = instance.GetInstance().instVars.BaseAngle;
            }
        }
    };
    FightManager.prototype.CreateBuilding = function (buildingID, position, angle) {
        if (angle === void 0) { angle = 0; }
        var uid;
        switch (buildingID) {
            case gameObject_1.BuildingName.Spikes: {
                uid = main_1.Construct3.callFunction("CreateSpikes", position.X, position.Y);
                content_1.Content.Buildings.Spikes.Entity.Instances.AddItem(new spikes_1.SpikesInstance(uid, position));
                break;
            }
            default: {
                throw new Error("Building with id " + buildingID + " is not handled");
            }
        }
        this.UpdateBuilding(buildingID);
        return uid;
    };
    FightManager.prototype.UpdateBuilding = function (buildingID) {
        return __awaiter(this, void 0, void 0, function () {
            var spikes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                    case 1:
                        _a.sent();
                        switch (buildingID) {
                            case gameObject_1.BuildingName.Spikes: {
                                spikes = content_1.Content.Buildings.Spikes.Entity;
                                main_1.Construct3.callFunction("UpdateSpikes", float_1.RawFloatValue(spikes.Damage.Value), float_1.RawFloatValue(spikes.HealthDamage.Value), float_1.RawFloatValue(spikes.ShieldDamage.Value), float_1.RawFloatValue(spikes.ReloadTimeMS.Value), float_1.RawFloatValue(spikes.StunChance.Value), float_1.RawFloatValue(spikes.StunSpeedMP.Value), float_1.RawFloatValue(spikes.StunDurationMS.Value), float_1.RawFloatValue(spikes.HealthBasedDamagePercent.Value));
                                break;
                            }
                            default: {
                                throw new Error("Building with id " + buildingID + " is not handled");
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FightManager.prototype.ResetSpawn = function () {
        this.NextMonster = undefined;
    };
    return FightManager;
}());
exports.FightManager = FightManager;

