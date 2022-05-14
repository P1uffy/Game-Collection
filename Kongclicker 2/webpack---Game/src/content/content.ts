
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnContentInitiatedOrGameLoaded = exports.SetupUIForScrolling = exports.InitContent = exports.ViewID = exports.SystemData = exports.Content = exports.Managers = exports.ModuleManager = exports.TimerStorage = exports.UIStorage = exports.ContentStorage = exports.RNG = void 0;
var viewManager_1 = __webpack_require__(/*! ../game/managers/viewManager */ "./src/game/managers/viewManager.ts");
var fightManager_1 = __webpack_require__(/*! ../game/managers/fightManager */ "./src/game/managers/fightManager.ts");
var objectStorage_1 = __webpack_require__(/*! ../data/objectStorage */ "./src/data/objectStorage.ts");
var vector2_1 = __webpack_require__(/*! ../data/vector2 */ "./src/data/vector2.ts");
var random_js_1 = __webpack_require__(/*! random-js */ "./node_modules/random-js/dist/random-js.esm.js");
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
var contentManager_1 = __webpack_require__(/*! ./contentManager */ "./src/content/contentManager.ts");
var scrollbar_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/gameUI/scrollbar */ "./javascript/construct3/c3ObjectUtils/gameUI/scrollbar.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var overlay_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/gameUI/overlay */ "./javascript/construct3/c3ObjectUtils/gameUI/overlay.ts");
var main_1 = __webpack_require__(/*! ../../javascript/construct3/main */ "./javascript/construct3/main.js");
var view_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/gameUI/view */ "./javascript/construct3/c3ObjectUtils/gameUI/view.ts");
var buildManager_1 = __webpack_require__(/*! ../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var overlayMessage_1 = __webpack_require__(/*! ../ui/overlayMessage */ "./src/ui/overlayMessage.ts");
var utilsMath_1 = __webpack_require__(/*! ../utils/utilsMath */ "./src/utils/utilsMath.ts");
var kongregate_1 = __webpack_require__(/*! ../../javascript/kongregate/kongregate */ "./javascript/kongregate/kongregate.ts");
// System content info
//todo type
exports.SystemData = {
    IsContentLoaded: false,
    IsThemesInitiated: false,
    IsAutoSaveEnabledC3: false,
    IsGameCrashed: false,
    /* About: If there is some overlay, all  */
    IsShowingOverlay: false,
    CurrentOverlay: {
        Theme: "",
        InputTheme: "" //OverlayMessageButton
    },
    Settings: {
        ShowNotifications: true,
        ShowMonsterAward: true,
    },
    Debug: {
        Bot: {
            Enabled: false,
            Toggle: function (enabled) {
                exports.Content.Timers.Debug.Bot.Toggle(enabled);
                exports.SystemData.Debug.Bot.Enabled = enabled;
            }
        },
    },
    PerformanceStats: {
        ToggleThemeCalls: 0,
    }
};
//todo NPM: remove unused packages (merge, aes, time...)
//todo разобраться в том, как сделать разные конфигурации билда,
// чтобы при билде в релиз удалялись коменты и использоваться минифаер
//todo Make Switch class. [UPD: i guess Unlock class is what i wanted?]
//todo im not sure i need ClassID this in ObjectStorageItem
//todo !!! start to use Generic IDType in all classes! GameObject for e.g.!
//todo convert to class
var ViewID;
(function (ViewID) {
    //# Overlays #
    ViewID["TopOverlay"] = "TopOverlay";
    ViewID["BottomOverlay"] = "BottomOverlay";
    ViewID["UnlocksOverlay"] = "UnlocksOverlay";
    ViewID["GameFieldOverlay"] = "GameFieldOverlay";
    ViewID["BuildingsOverlay"] = "BuildingsOverlay";
    //# Rebirth #
    ViewID["RebirthOverlay"] = "RebirthOverlay";
    ViewID["RebirthMonstersOverlay"] = "RebirthMonstersOverlay";
    ViewID["RebirthTurretsOverlay"] = "RebirthTurretsOverlay";
    ViewID["RebirthBuildingsOverlay"] = "RebirthBuildingsOverlay";
    ViewID["RebirthMain"] = "Rebirth.Main";
    ViewID["RebirthBasicMonster"] = "Rebirth.BasicMonster";
    ViewID["RebirthArmoredMonster"] = "Rebirth.ArmoredMonster";
    ViewID["RebirthFastMonster"] = "Rebirth.FastMonster";
    ViewID["RebirthBasicTurret"] = "Rebirth.BasicTurret";
    ViewID["RebirthLaserTurret"] = "Rebirth.LaserTurret";
    ViewID["RebirthRailTurret"] = "Rebirth.RailTurret";
    ViewID["RebirthSpikes"] = "Rebirth.Spikes";
    //# Menus #
    ViewID["Menu"] = "Menu";
    ViewID["Unlocks"] = "Unlocks";
    ViewID["BuildMode"] = "BuildMode";
    ViewID["Buildings"] = "Buildings";
    ViewID["Credits"] = "Credits";
    ViewID["Statistics"] = "Statistics";
    ViewID["Settings"] = "Settings";
    //# Monsters #
    ViewID["MonstersOverlay"] = "MonstersOverlay";
    ViewID["BasicMonster"] = "BasicMonster";
    ViewID["ArmoredMonster"] = "ArmoredMonster";
    ViewID["FastMonster"] = "FastMonster";
    //# Turrets #
    ViewID["TurretsOverlay"] = "TurretsOverlay";
    ViewID["BasicTurret"] = "BasicTurret";
    ViewID["LaserTurret"] = "LaserTurret";
    ViewID["RailTurret"] = "RailTurret";
    //# Buildings #
    ViewID["Spikes"] = "Spikes";
})(ViewID = exports.ViewID || (exports.ViewID = {}));
function InitContent() {
    return __awaiter(this, void 0, void 0, function () {
        var randomEngine, _i, _a, module_1, gameField;
        return __generator(this, function (_b) {
            randomEngine = random_js_1.MersenneTwister19937.autoSeed();
            exports.RNG = new random_js_1.Random(randomEngine);
            exports.ContentStorage = new objectStorage_1.ObjectStorage();
            exports.TimerStorage = new objectStorage_1.ObjectStorage();
            exports.UIStorage = new objectStorage_1.ObjectStorage([], true);
            exports.ModuleManager = new objectStorage_1.ObjectStorage();
            exports.Content = new contentManager_1.ContentManager(exports.ModuleManager);
            //todo make RebirthManager instead, and move all this stuff there
            //todo auto-update wallet icon?
            //todo специальная система, которая перед началом игры пробежится по всем необходимым объектам для UI,
            // и скажет каких не хватает (сразу всех), а то так не удобно по одному смотря эксепшены фиксить
            //todo make on-runtime tests for modules as much as i can
            // Loading modules
            {
                for (_i = 0, _a = exports.ModuleManager.Items; _i < _a.length; _i++) {
                    module_1 = _a[_i];
                    module_1.Get();
                }
            }
            gameField = {
                MonsterSize: new vector2_1.Vector2(120, 120),
                StartPosition: new vector2_1.Vector2(120, 240),
                EndPosition: new vector2_1.Vector2(720, 1560),
                MonsterSpawnPosition: new vector2_1.Vector2(-40, 540),
            };
            exports.Managers = {
                Views: new viewManager_1.ViewManager(ViewID.Menu, exports.UIStorage.GetAllItemsOfType(view_1.View), exports.UIStorage.GetAllItemsOfType(overlay_1.Overlay)),
                Fight: new fightManager_1.FightManager(exports.ContentStorage, gameField),
                Build: new buildManager_1.BuildManager(exports.Content.Turrets.Basic.BuildInfo)
            };
            console.log('[Content::Init] finished!');
            return [2 /*return*/];
        });
    });
}
exports.InitContent = InitContent;
//todo ещё можно было бы придумать что-то типо стейтмашины, с системой перехода между разными состояниями
//todo специальная система, которая перед началом игры пробежится по всем необходимым объектам для UI,
function SetupUIForScrolling() {
    var count = 0;
    for (var _i = 0, _a = utilsGUI_1.GetAll(); _i < _a.length; _i++) {
        var item = _a[_i];
        item.c_baseX = item.x;
        item.c_baseY = item.y;
        item.c_baseRect = item.getBoundingBox();
        count++;
    }
    console.log("[OnContentInitiatedOrGameLoaded] Base position set for " + count + " objects!");
}
exports.SetupUIForScrolling = SetupUIForScrolling;
function OnContentInitiatedOrGameLoaded(_isGameLoaded) {
    if (_isGameLoaded === void 0) { _isGameLoaded = false; }
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, item, loadID, _b, _c, scrollbar, _d, _e, overlay, version, value, values, music, sound, customCursor, gameNameColor, unlocks;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                case 1:
                    _f.sent();
                    main_1.Construct3.globalVars.IsGameLoading = 0;
                    for (_i = 0, _a = __spreadArrays(exports.ContentStorage.Items, exports.TimerStorage.Items); _i < _a.length; _i++) {
                        item = _a[_i];
                        item.OnContentInitiatedOrGameLoaded();
                    }
                    exports.Managers.Fight.OnContentInitiatedOrGameLoaded();
                    game_1.SaveManager.LoadID++;
                    loadID = game_1.SaveManager.LoadID;
                    // Я сохраняю LoadID, чтобы удостовериться, что когда будет выполняться отложенный евент,
                    // игра находится всё в том же состоянии, потому что если LoadID не сходится,
                    // значит уже началась другая процедура загрузки
                    if (loadID != game_1.SaveManager.LoadID) {
                        console.log("LoadID is outdated (another game init happened). Canceling OnGameFullyLoaded event");
                        return [2 /*return*/];
                    }
                    if (exports.SystemData.IsGameCrashed) {
                        console.log("An error occurred. Canceling OnGameFullyLoaded event");
                        return [2 /*return*/];
                    }
                    // UI
                    {
                        SetupUIForScrolling();
                        // Tight stuff
                        for (_b = 0, _c = exports.UIStorage.GetAllItemsOfType(scrollbar_1.Scrollbar); _b < _c.length; _b++) {
                            scrollbar = _c[_b];
                            scrollbar.UpdateAllElementsData();
                            scrollbar.UpdateVisibleElementsData();
                            scrollbar.Update();
                        }
                        for (_d = 0, _e = exports.UIStorage.GetAllItemsOfType(overlay_1.Overlay); _d < _e.length; _d++) {
                            overlay = _e[_d];
                            overlay.SetupElements();
                        }
                        // End of tight stuff
                    }
                    exports.SystemData.IsContentLoaded = true;
                    exports.Managers.Fight.OnGameFullyLoaded();
                    exports.Managers.Views.UpdateCamera();
                    main_1.Construct3.callFunction("ToggleLoadingOverlay", false);
                    exports.Content.Timers.System.SaveGame.Start();
                    game_1.SmartUIUpdate();
                    if (game_1.BUILD_MODE == "Release") {
                        game_1.OnReleaseGameInitiated();
                    }
                    else {
                        game_1.OnPreviewGameInitiated();
                    }
                    version = exports.Content.System.Version;
                    utilsGUI_1.SetText("VersionInfo", "Version: [color=#67f5b0][font=KumbhSans-Bold]" + version.Current + "[/font][/color] "
                        + ("(" + version.LastUpdateDateText + ")"));
                    value = exports.Content.Settings.System.Notation.Value;
                    values = exports.Content.Settings.System.Notation.Validator.Values;
                    main_1.Construct3.callFunction("SetNotationList", values.join(", "), values.indexOf(value));
                    music = exports.Content.Settings.Audio.MusicVolume;
                    main_1.Construct3.callFunction("UpdateSliderBar", "MusicVolume", music.Value, music.Validator.Interval.Min, music.Validator.Interval.Max);
                    main_1.Construct3.globalVars.MusicVolume = music.Value;
                    main_1.Construct3.callFunction("UpdateAudioVolume", "Music", music.Value, music.Validator.Interval.Min);
                    sound = exports.Content.Settings.Audio.SoundVolume;
                    main_1.Construct3.callFunction("UpdateSliderBar", "SoundVolume", sound.Value, sound.Validator.Interval.Min, sound.Validator.Interval.Max);
                    main_1.Construct3.globalVars.SoundsVolume = sound.Value;
                    main_1.Construct3.callFunction("UpdateAudioVolume", "Sound", sound.Value, sound.Validator.Interval.Min);
                    customCursor = exports.Content.Settings.System.CustomCursor;
                    main_1.Construct3.callFunction("UpdateCheckbox", "CustomCursor", customCursor.Value);
                    //# CONTENT LOAD FINISHED #
                    return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                case 2:
                    //# CONTENT LOAD FINISHED #
                    _f.sent();
                    main_1.Construct3.callFunction("OnContentLoaded");
                    console.log('[Event::OnContentInitiatedOrGameLoaded] finished');
                    if (!exports.Content.System.Notifications.IsTutorialShown.Value && game_1.BUILD_MODE != "Preview") {
                        gameNameColor = "#aa5eff";
                        unlocks = "#e8c23a";
                        overlayMessage_1.ShowOverlayMessage({
                            Title: "Welcome!",
                            Text: "Hey, glad to see you here!\n Welcome to the beta test of [color=#aa5eff][font=KumbhSans-Bold]DualForce Idle![/font][/color]\n\n"
                                + "In short about this game, it's Idle + Tower Defense, and you control both sides.",
                            Icon: {
                                Animation: "Markup",
                                Frame: 2,
                            },
                            Button: {
                                //bug color is not set
                                Text: "Got it!",
                                Color: utilsMath_1.HexToRGB255("#e33b3b"),
                            }
                        });
                        overlayMessage_1.ShowOverlayMessage({
                            Title: "Instructions!",
                            Text: "Oh, I almost forgot about tutorial!\n First, go to the "
                                + "[color=#e8c23a][font=KumbhSans-Bold]Unlocks[/font][/color] menu and get your first monster."
                                + "\n\nGood luck!",
                            Icon: {
                                Animation: "Markup",
                                Frame: 2,
                            },
                            Button: {
                                //bug color is not set
                                Text: "Got it!",
                                Color: utilsMath_1.HexToRGB255("#e33b3b"),
                            }
                        });
                        exports.Content.System.Notifications.IsTutorialShown.Value = true;
                    }
                    if (kongregate_1.KongregateData.ApiLoaded) {
                        console.log("KongAPI loaded, starting timer");
                        exports.Content.Timers.System.KongStats.Start();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.OnContentInitiatedOrGameLoaded = OnContentInitiatedOrGameLoaded;
//+ "\n\nAnd then try to click right in his face!\n"

