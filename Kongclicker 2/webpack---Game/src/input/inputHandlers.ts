
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
exports.IsCanAccessUIObject = exports.IsCanAccessInput = exports.ToggleMonster = exports.UpdateMonsterToggle = exports.SetOption = exports.BuyUpgrade = exports.SetView = exports.OnCheckboxClicked = exports.OnSliderValueChanged = exports.Action = exports.OnScrollbarMoving = exports.IsScrollBarActive = exports.OnSelectorClicked = exports.OnButtonClicked = void 0;
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
var engine_1 = __webpack_require__(/*! ../../javascript/construct3/engine */ "./javascript/construct3/engine.ts");
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
var slotGameLoadInfo_1 = __webpack_require__(/*! ../game/managers/saveSystem/slotGameLoadInfo */ "./src/game/managers/saveSystem/slotGameLoadInfo.ts");
var gameSave_1 = __webpack_require__(/*! ../game/managers/saveSystem/gameSave */ "./src/game/managers/saveSystem/gameSave.ts");
var gameLoadManager_1 = __webpack_require__(/*! ../game/managers/gameLoadManager */ "./src/game/managers/gameLoadManager.ts");
var scrollbar_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/gameUI/scrollbar */ "./javascript/construct3/c3ObjectUtils/gameUI/scrollbar.ts");
var utilsMath_1 = __webpack_require__(/*! ../utils/utilsMath */ "./src/utils/utilsMath.ts");
var buildManager_1 = __webpack_require__(/*! ../game/managers/buildManager */ "./src/game/managers/buildManager.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var overlayMessage_1 = __webpack_require__(/*! ../ui/overlayMessage */ "./src/ui/overlayMessage.ts");
var indicatorsGUI_1 = __webpack_require__(/*! ../ui/gui-update/indicatorsGUI */ "./src/ui/gui-update/indicatorsGUI.ts");
var monster_1 = __webpack_require__(/*! ../game/fighting/monster */ "./src/game/fighting/monster.ts");
function OnButtonClicked(path) {
    return __awaiter(this, void 0, void 0, function () {
        var pathParts, action, params, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pathParts = path.split('::');
                    action = pathParts[0];
                    params = pathParts.slice(1);
                    game_1.SmartUIUpdate();
                    _a = action;
                    switch (_a) {
                        case 'action': return [3 /*break*/, 1];
                        case "buyUpgrade": return [3 /*break*/, 3];
                        case 'setOption': return [3 /*break*/, 4];
                        case "setView": return [3 /*break*/, 5];
                        case "ToggleMonster": return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, Action(params)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 3:
                    {
                        BuyUpgrade(params);
                        return [3 /*break*/, 8];
                    }
                    _b.label = 4;
                case 4:
                    {
                        SetOption(params);
                        return [3 /*break*/, 8];
                    }
                    _b.label = 5;
                case 5:
                    {
                        SetView(params);
                        return [3 /*break*/, 8];
                    }
                    _b.label = 6;
                case 6:
                    {
                        ToggleMonster(params[0]);
                        return [3 /*break*/, 8];
                    }
                    _b.label = 7;
                case 7:
                    {
                        throw new Error("Action not found: " + action);
                    }
                    _b.label = 8;
                case 8: return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 9:
                    _b.sent();
                    game_1.SmartUIUpdate();
                    return [2 /*return*/];
            }
        });
    });
}
exports.OnButtonClicked = OnButtonClicked;
function OnSelectorClicked(section, id) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, menu, selectorSection, _b, subMenuID, subMenuID, subMenuID, value;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    game_1.SmartUIUpdate();
                    _a = section;
                    switch (_a) {
                        case 'View': return [3 /*break*/, 1];
                        case 'Rebirth.Menu': return [3 /*break*/, 2];
                        case "Rebirth.Monsters": return [3 /*break*/, 11];
                        case "Rebirth.Turrets": return [3 /*break*/, 12];
                        case "Rebirth.Buildings": return [3 /*break*/, 13];
                        case 'Monster': return [3 /*break*/, 14];
                        case 'Turret': return [3 /*break*/, 15];
                        case 'Building': return [3 /*break*/, 16];
                        case 'BuyCount': return [3 /*break*/, 17];
                        case "BuildModeBuilding": return [3 /*break*/, 18];
                    }
                    return [3 /*break*/, 19];
                case 1:
                    {
                        content_1.Managers.Views.SetView(id);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 2;
                case 2:
                    menu = id;
                    content_1.Managers.Fight.Rebirth.CurrentMenu = id;
                    selectorSection = "Rebirth." + menu;
                    _b = menu;
                    switch (_b) {
                        case "Main": return [3 /*break*/, 3];
                        case "Monsters": return [3 /*break*/, 4];
                        case "Turrets": return [3 /*break*/, 6];
                        case "Buildings": return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 10];
                case 3:
                    {
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Main", false);
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Monsters", true);
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Turrets", true);
                        if (content_1.Content.Buildings.Spikes.System.IsEverUnlocked)
                            indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", true);
                        content_1.Managers.Views.SetView("Rebirth.Main");
                        return [3 /*break*/, 10];
                    }
                    _c.label = 4;
                case 4:
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Main", true);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Monsters", false);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Turrets", true);
                    if (content_1.Content.Buildings.Spikes.System.IsEverUnlocked)
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", true);
                    return [4 /*yield*/, OnSelectorClicked(selectorSection, content_1.Managers.Fight.Rebirth.CurrentMonstersMenu)];
                case 5:
                    _c.sent();
                    return [3 /*break*/, 10];
                case 6:
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Main", true);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Monsters", true);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Turrets", false);
                    if (content_1.Content.Buildings.Spikes.System.IsEverUnlocked)
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", true);
                    return [4 /*yield*/, OnSelectorClicked(selectorSection, content_1.Managers.Fight.Rebirth.CurrentTurretsMenu)];
                case 7:
                    _c.sent();
                    return [3 /*break*/, 10];
                case 8:
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Main", true);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Monsters", true);
                    indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Turrets", true);
                    if (content_1.Content.Buildings.Spikes.System.IsEverUnlocked)
                        indicatorsGUI_1.SetIndicatorVisible("canBuyIndicator::Rebirth.Buildings", false);
                    return [4 /*yield*/, OnSelectorClicked(selectorSection, content_1.Managers.Fight.Rebirth.CurrentBuildingsMenu)];
                case 9:
                    _c.sent();
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 20];
                case 11:
                    {
                        subMenuID = "Rebirth." + id;
                        content_1.Managers.Fight.Rebirth.CurrentMonstersMenu = id;
                        ;
                        content_1.Managers.Views.SetView(subMenuID);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 12;
                case 12:
                    {
                        subMenuID = "Rebirth." + id;
                        content_1.Managers.Fight.Rebirth.CurrentTurretsMenu = id;
                        content_1.Managers.Views.SetView(subMenuID);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 13;
                case 13:
                    {
                        subMenuID = "Rebirth." + id;
                        content_1.Managers.Fight.Rebirth.CurrentBuildingsMenu = id;
                        content_1.Managers.Views.SetView(subMenuID);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 14;
                case 14:
                    {
                        content_1.Managers.Fight.CurrentMonsterView = id;
                        content_1.Managers.Views.SetView(id);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 15;
                case 15:
                    {
                        content_1.Managers.Fight.CurrentTurretView = id;
                        content_1.Managers.Views.SetView(id);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 16;
                case 16:
                    {
                        content_1.Managers.Fight.CurrentBuildingView = id;
                        content_1.Managers.Views.SetView(id);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 17;
                case 17:
                    {
                        value = utilsMath_1.IsNumber(id) ? parseFloat(id) : id;
                        content_1.Content.Settings.System.BuyCount.Value = value;
                        return [3 /*break*/, 20];
                    }
                    _c.label = 18;
                case 18:
                    {
                        //todo BuildInfo with Name and Type
                        content_1.Managers.Build.CurrentBuilding = content_1.ContentStorage.GetItemOfType(buildManager_1.BuildInfo, "BuildInfo::" + id);
                        return [3 /*break*/, 20];
                    }
                    _c.label = 19;
                case 19:
                    {
                        throw new Error("Selector section '" + section + "' was not found");
                    }
                    _c.label = 20;
                case 20: return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 21:
                    _c.sent();
                    game_1.SmartUIUpdate();
                    return [2 /*return*/];
            }
        });
    });
}
exports.OnSelectorClicked = OnSelectorClicked;
function IsScrollBarActive(id) {
    return id == content_1.Managers.Views.CurrentView.ID;
}
exports.IsScrollBarActive = IsScrollBarActive;
function OnScrollbarMoving(id) {
    //todo ui storage maybe (yeah, should be)
    var scrollbar = content_1.UIStorage.GetItemOfType(scrollbar_1.Scrollbar, id);
    if (scrollbar) {
        if (scrollbar.ID == content_1.Managers.Views.CurrentView.ID) {
            scrollbar.Update();
        }
    }
    else {
        throw new Error("Scrollbar '" + id + "' was not found");
    }
}
exports.OnScrollbarMoving = OnScrollbarMoving;
function Action(params) {
    return __awaiter(this, void 0, void 0, function () {
        var name, _a, Reset, text, input, saveString, e_1, slotName, saveString;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    name = params[0];
                    _a = name;
                    switch (_a) {
                        case "OverlayMessageButton": return [3 /*break*/, 1];
                        case "OpenRebirthUpgrades": return [3 /*break*/, 2];
                        case "OpenMonsterUpgrades": return [3 /*break*/, 3];
                        case "OpenTurretUpgrades": return [3 /*break*/, 4];
                        case "OpenBuildingUpgrades": return [3 /*break*/, 5];
                        case "Reset": return [3 /*break*/, 6];
                        case "TryToLoadAgainOnError": return [3 /*break*/, 7];
                        case "StartNewGameOnError": return [3 /*break*/, 8];
                        case "OnManualLoadFailed": return [3 /*break*/, 9];
                        case "OnError": return [3 /*break*/, 10];
                        case "Save": return [3 /*break*/, 11];
                        case "Load": return [3 /*break*/, 13];
                        case "LoadGameFromFile": return [3 /*break*/, 14];
                        case "LoadGameFromString": return [3 /*break*/, 15];
                        case "SaveToClipboard": return [3 /*break*/, 16];
                        case "SaveToFile": return [3 /*break*/, 22];
                        case 'ToggleFullscreen': return [3 /*break*/, 24];
                        case 'Rebirth': return [3 /*break*/, 25];
                    }
                    return [3 /*break*/, 26];
                case 1:
                    {
                        if (overlayMessage_1.CurrentOverlayMessageInfo) {
                            if (overlayMessage_1.CurrentOverlayMessageInfo.Button) {
                                overlayMessage_1.HideOverlayMessage();
                                if (overlayMessage_1.CurrentOverlayMessageInfo.Button.Action)
                                    overlayMessage_1.CurrentOverlayMessageInfo.Button.Action();
                                overlayMessage_1.ResetCurrentOverlayMessage();
                            }
                            else {
                                throw new Error("Action for overlay message was not set");
                            }
                        }
                        else {
                            throw new Error('Overlay message info was not set');
                        }
                        return [3 /*break*/, 27];
                    }
                    _b.label = 2;
                case 2:
                    {
                        utilsGUI_1.ToggleSelector("Rebirth.Menu", content_1.Managers.Fight.Rebirth.CurrentMenu);
                        switch (content_1.Managers.Fight.Rebirth.LastSubMenu) {
                            case "Main": {
                                break;
                            }
                            case "Monsters": {
                                utilsGUI_1.ToggleSelector("Rebirth.Monsters", content_1.Managers.Fight.Rebirth.CurrentMonstersMenu);
                                break;
                            }
                            case "Turrets": {
                                utilsGUI_1.ToggleSelector("Rebirth.Turrets", content_1.Managers.Fight.Rebirth.CurrentTurretsMenu);
                                break;
                            }
                        }
                        return [3 /*break*/, 27];
                    }
                    _b.label = 3;
                case 3:
                    {
                        utilsGUI_1.ToggleSelector("Monster", content_1.Managers.Fight.CurrentMonsterView);
                        return [3 /*break*/, 27];
                    }
                    _b.label = 4;
                case 4:
                    {
                        utilsGUI_1.ToggleSelector("Turret", content_1.Managers.Fight.CurrentTurretView);
                        return [3 /*break*/, 27];
                    }
                    _b.label = 5;
                case 5:
                    {
                        utilsGUI_1.ToggleSelector("Building", content_1.Managers.Fight.CurrentBuildingView);
                        return [3 /*break*/, 27];
                    }
                    _b.label = 6;
                case 6:
                    {
                        Reset = function () {
                            game_1.SaveManager.SkipNextLoad();
                            game_1.SaveManager.RestartToLoad();
                            console.log("[Action::Reset] finished");
                        };
                        if (game_1.BUILD_MODE == "Preview") {
                            Reset();
                        }
                        else {
                            text = "I want to reset my save";
                            input = prompt("Write \"" + text + "\" in the input field to confirm the full reset");
                            if (input == text) {
                                alert("Okay, you've confirmed your wish! Game will be reset");
                                Reset();
                            }
                            else {
                                alert("You entered the text incorrectly");
                            }
                        }
                        return [3 /*break*/, 27];
                    }
                    _b.label = 7;
                case 7:
                    {
                        content_1.SystemData.IsGameCrashed = false;
                        game_1.Construct3.callFunction("ToggleAutoLoadErrorScreen", false);
                        game_1.SaveManager.SetLoadGame(gameLoadManager_1.LoadType.Auto, game_1.SaveManager.LastLoadInfo);
                        game_1.SaveManager.RestartToLoad();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 8;
                case 8:
                    {
                        content_1.SystemData.IsGameCrashed = false;
                        game_1.Construct3.callFunction("ToggleAutoLoadErrorScreen", false);
                        game_1.SaveManager.SkipNextLoad();
                        game_1.SaveManager.RestartToLoad();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 9;
                case 9:
                    {
                        content_1.SystemData.IsGameCrashed = false;
                        game_1.Construct3.callFunction("ToggleManualLoadErrorScreen", false);
                        game_1.SaveManager.SetLoadGame(gameLoadManager_1.LoadType.Auto, new slotGameLoadInfo_1.SlotGameLoadInfo("Save1", true));
                        game_1.SaveManager.RestartToLoad();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 10;
                case 10:
                    {
                        content_1.SystemData.IsGameCrashed = false;
                        game_1.Construct3.callFunction("ToggleErrorScreen", false);
                        game_1.SaveManager.SkipNextLoad();
                        game_1.SaveManager.RestartToLoad();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 11;
                case 11: return [4 /*yield*/, gameSave_1.SaveGame()];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 27];
                case 13:
                    {
                        game_1.SaveManager.SetLoadGame(gameLoadManager_1.LoadType.Auto, new slotGameLoadInfo_1.SlotGameLoadInfo("Save1", true));
                        game_1.SaveManager.RestartToLoad();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 14;
                case 14:
                    {
                        game_1.Construct3.callFunction("LoadGameFromFile");
                        return [3 /*break*/, 27];
                    }
                    _b.label = 15;
                case 15:
                    {
                        game_1.Construct3.callFunction("LoadGameFromString");
                        return [3 /*break*/, 27];
                    }
                    _b.label = 16;
                case 16: return [4 /*yield*/, gameSave_1.GetCurrentSaveString()];
                case 17:
                    saveString = _b.sent();
                    _b.label = 18;
                case 18:
                    _b.trys.push([18, 20, , 21]);
                    return [4 /*yield*/, navigator.clipboard.writeText(saveString)];
                case 19:
                    _b.sent();
                    alert("Successfully copied " + saveString.length + " characters to clipboard!");
                    return [3 /*break*/, 21];
                case 20:
                    e_1 = _b.sent();
                    alert("An error occurred while trying to save text to the clipboard: '" + e_1 + "' \nIf the problem persists, save it as a file and copy the text from the file.");
                    return [3 /*break*/, 21];
                case 21: return [3 /*break*/, 27];
                case 22:
                    slotName = "Save1";
                    return [4 /*yield*/, gameSave_1.GetCurrentSaveString()];
                case 23:
                    saveString = _b.sent();
                    //todo date & time
                    //todo version
                    game_1.Construct3.callFunction("SaveToFile", "monsters_and_turrets_idle__slot_" + slotName + ".txt", saveString);
                    //
                    return [3 /*break*/, 27];
                case 24:
                    {
                        engine_1.Engine.ToggleFullscreen();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 25;
                case 25:
                    {
                        content_1.Content.Rebirth.Activate();
                        return [3 /*break*/, 27];
                    }
                    _b.label = 26;
                case 26:
                    {
                        throw new Error("Action '" + name + "' was not found!");
                    }
                    _b.label = 27;
                case 27: return [2 /*return*/];
            }
        });
    });
}
exports.Action = Action;
function OnSliderValueChanged(name, value) {
    switch (name) {
        case "MusicVolume": {
            content_1.Content.Settings.Audio.MusicVolume.Value = value;
            break;
        }
        case "SoundVolume": {
            content_1.Content.Settings.Audio.SoundVolume.Value = value;
            break;
        }
    }
}
exports.OnSliderValueChanged = OnSliderValueChanged;
function OnCheckboxClicked(id, enabled) {
    switch (id) {
        case "CustomCursor": {
            //todo temp decisiton here, do a better system; (OnCheckBoxToggled)
            content_1.Content.Settings.System.CustomCursor.Value = enabled;
            game_1.Construct3.callFunction("ToggleCustomCursor", enabled);
            break;
        }
    }
}
exports.OnCheckboxClicked = OnCheckboxClicked;
function SetView(params) {
    var viewID = params[0];
    content_1.Managers.Views.SetView(viewID);
}
exports.SetView = SetView;
function BuyUpgrade(params) {
    var name = params[0];
    content_1.ContentStorage.GetItem(name).Buy();
}
exports.BuyUpgrade = BuyUpgrade;
function SetOption(params) {
    if (Array.isArray(params)) {
        var name_1 = params[0];
        content_1.ContentStorage.GetItem(name_1).Value = params[1];
    }
    else {
        content_1.ContentStorage.GetItem(params.ID).Value = params.Value;
    }
    game_1.SmartUIUpdate();
}
exports.SetOption = SetOption;
function UpdateMonsterToggle(monsterID, enabled) {
    var id = "ToggleMonster::" + monsterID;
    if (enabled) {
        utilsGUI_1.SetText(id, "Enabled");
        utilsGUI_1.SetButtonColor(id, utilsMath_1.HexToRGB255("5dac5f"));
    }
    else {
        utilsGUI_1.SetText(id, "Disabled");
        utilsGUI_1.SetButtonColor(id, utilsMath_1.HexToRGB255("ac5d5d"));
    }
}
exports.UpdateMonsterToggle = UpdateMonsterToggle;
//todo продебажить установку цвета кнопки в нотифаях
function ToggleMonster(monsterID) {
    var monster = content_1.ContentStorage.GetItemOfType(monster_1.Monster, monsterID).GetContent();
    monster.System.IsEnabled.Value = !monster.System.IsEnabled.Value;
    UpdateMonsterToggle(monsterID, monster.System.IsEnabled.Value);
}
exports.ToggleMonster = ToggleMonster;
function IsCanAccessInput() {
    return !content_1.SystemData.IsShowingOverlay;
}
exports.IsCanAccessInput = IsCanAccessInput;
function IsCanAccessUIObject(object) {
    var isViewportFine;
    if (object.c_isConnectedToScrollBar) {
        isViewportFine = utilsGUI_1.IsPositionInViewport({ X: object.x, Y: object.y });
    }
    else {
        isViewportFine = true;
    }
    var isOverlayFine;
    if (content_1.SystemData.IsShowingOverlay) {
        isOverlayFine = object.instVars.theme == content_1.SystemData.CurrentOverlay.InputTheme;
    }
    else {
        isOverlayFine = true;
    }
    return (isViewportFine && isOverlayFine);
}
exports.IsCanAccessUIObject = IsCanAccessUIObject;

