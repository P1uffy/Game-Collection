
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopwatchStop = exports.StopwatchStart = exports.ToggleStopwatch = exports.Update = exports.SmartUIUpdate = exports.Init = exports.OnReleaseGameInitiated = exports.OnRelease = exports.OnPreviewGameInitiated = exports.OnPreview = exports.Themes = exports.SaveManager = exports.BUILD_MODE = exports.Percent = exports.SaveGame = exports.UpdateThemeUnlocks = exports.InitThemeUnlocks = exports.OnBuildingDestroyed = exports.OnBuildingCreated = exports.TurretInstance = exports.UIBuilder = exports.LoadType = exports.DownloadFile = exports.LoadGameFromString = exports.LoadGameFromSlot = exports.SystemData = exports.ColorUtils = exports.MonsterManager = exports.GUITheme = exports.GUI = exports.Decimal = exports.UI = exports.Float = exports.Construct3 = exports.UtilsObject = exports.UtilsText = exports.UtilsMath = exports.Input = void 0;
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
var content_1 = __webpack_require__(/*! ./content/content */ "./src/content/content.ts");
var themeUnlocks_1 = __webpack_require__(/*! ./content/themeUnlocks */ "./src/content/themeUnlocks.ts");
var gui_1 = __webpack_require__(/*! ./ui/gui */ "./src/ui/gui.ts");
var time_1 = __webpack_require__(/*! ./data/time */ "./src/data/time.ts");
var main_1 = __webpack_require__(/*! ../javascript/construct3/main */ "./javascript/construct3/main.js");
var basicTests_1 = __webpack_require__(/*! ./testing/tests/basicTests */ "./src/testing/tests/basicTests.ts");
var gameLoadManager_1 = __webpack_require__(/*! ./game/managers/gameLoadManager */ "./src/game/managers/gameLoadManager.ts");
var utilsGUI_1 = __webpack_require__(/*! ../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var gameSave_1 = __webpack_require__(/*! ./game/managers/saveSystem/gameSave */ "./src/game/managers/saveSystem/gameSave.ts");
var c3themeUtils_1 = __webpack_require__(/*! ../javascript/construct3/c3ObjectUtils/c3themeUtils */ "./javascript/construct3/c3ObjectUtils/c3themeUtils.ts");
var utilsText_1 = __webpack_require__(/*! ./utils/utilsText */ "./src/utils/utilsText.ts");
//# Exports to use in Construct 3#
exports.Input = __importStar(__webpack_require__(/*! ./input/inputHandlers */ "./src/input/inputHandlers.ts"));
exports.UtilsMath = __importStar(__webpack_require__(/*! ./utils/utilsMath */ "./src/utils/utilsMath.ts"));
exports.UtilsText = __importStar(__webpack_require__(/*! ./utils/utilsText */ "./src/utils/utilsText.ts"));
exports.UtilsObject = __importStar(__webpack_require__(/*! ./utils/utilsObjects */ "./src/utils/utilsObjects.ts"));
var main_2 = __webpack_require__(/*! ../javascript/construct3/main */ "./javascript/construct3/main.js");
Object.defineProperty(exports, "Construct3", { enumerable: true, get: function () { return main_2.Construct3; } });
__exportStar(__webpack_require__(/*! ./content/content */ "./src/content/content.ts"), exports);
var float_1 = __webpack_require__(/*! ./data/math/float */ "./src/data/math/float.ts");
Object.defineProperty(exports, "Float", { enumerable: true, get: function () { return float_1.Float; } });
exports.UI = __importStar(__webpack_require__(/*! ../src/ui/gui */ "./src/ui/gui.ts"));
var break_infinity_js_1 = __webpack_require__(/*! break_infinity.js */ "./node_modules/break_infinity.js/dist/break_infinity.esm.js");
Object.defineProperty(exports, "Decimal", { enumerable: true, get: function () { return __importDefault(break_infinity_js_1).default; } });
exports.GUI = __importStar(__webpack_require__(/*! ../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts"));
exports.GUITheme = __importStar(__webpack_require__(/*! ../javascript/construct3/c3ObjectUtils/c3themeUtils */ "./javascript/construct3/c3ObjectUtils/c3themeUtils.ts"));
exports.MonsterManager = __importStar(__webpack_require__(/*! ./game/gameField */ "./src/game/gameField.ts")); //todo rename
exports.ColorUtils = __importStar(__webpack_require__(/*! ./utils/utilsColor */ "./src/utils/utilsColor.ts"));
var content_2 = __webpack_require__(/*! ./content/content */ "./src/content/content.ts");
Object.defineProperty(exports, "SystemData", { enumerable: true, get: function () { return content_2.SystemData; } });
var gameLoad_1 = __webpack_require__(/*! ./game/managers/saveSystem/gameLoad */ "./src/game/managers/saveSystem/gameLoad.ts");
Object.defineProperty(exports, "LoadGameFromSlot", { enumerable: true, get: function () { return gameLoad_1.LoadGameFromSlot; } });
Object.defineProperty(exports, "LoadGameFromString", { enumerable: true, get: function () { return gameLoad_1.LoadGameFromString; } });
var utils_1 = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
Object.defineProperty(exports, "DownloadFile", { enumerable: true, get: function () { return utils_1.DownloadFile; } });
var gameLoadManager_2 = __webpack_require__(/*! ./game/managers/gameLoadManager */ "./src/game/managers/gameLoadManager.ts");
Object.defineProperty(exports, "LoadType", { enumerable: true, get: function () { return gameLoadManager_2.LoadType; } });
exports.UIBuilder = __importStar(__webpack_require__(/*! ../javascript/construct3/c3ObjectUtils/uiBuilder */ "./javascript/construct3/c3ObjectUtils/uiBuilder.ts"));
var turretInstance_1 = __webpack_require__(/*! ../src/game/fighting/buildings/turretInstance */ "./src/game/fighting/buildings/turretInstance.ts");
Object.defineProperty(exports, "TurretInstance", { enumerable: true, get: function () { return turretInstance_1.TurretInstance; } });
var initBuildings_1 = __webpack_require__(/*! ./content/modules/buildings/initBuildings */ "./src/content/modules/buildings/initBuildings.ts");
Object.defineProperty(exports, "OnBuildingCreated", { enumerable: true, get: function () { return initBuildings_1.OnBuildingCreated; } });
Object.defineProperty(exports, "OnBuildingDestroyed", { enumerable: true, get: function () { return initBuildings_1.OnBuildingDestroyed; } });
var themeUnlocks_2 = __webpack_require__(/*! ./content/themeUnlocks */ "./src/content/themeUnlocks.ts");
Object.defineProperty(exports, "InitThemeUnlocks", { enumerable: true, get: function () { return themeUnlocks_2.InitThemeUnlocks; } });
Object.defineProperty(exports, "UpdateThemeUnlocks", { enumerable: true, get: function () { return themeUnlocks_2.UpdateThemeUnlocks; } });
var gameSave_2 = __webpack_require__(/*! ./game/managers/saveSystem/gameSave */ "./src/game/managers/saveSystem/gameSave.ts");
Object.defineProperty(exports, "SaveGame", { enumerable: true, get: function () { return gameSave_2.SaveGame; } });
var percent_1 = __webpack_require__(/*! ./data/math/percent */ "./src/data/math/percent.ts");
Object.defineProperty(exports, "Percent", { enumerable: true, get: function () { return percent_1.Percent; } });
exports.SaveManager = new gameLoadManager_1.GameLoadManager();
function OnPreview() {
    return __awaiter(this, void 0, void 0, function () {
        var testsCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("[WARNING] Preview mode");
                    exports.BUILD_MODE = "Preview";
                    return [4 /*yield*/, basicTests_1.StartTesting()];
                case 1:
                    testsCount = _a.sent();
                    console.log("All " + testsCount + " tests completed!");
                    content_1.SystemData.Settings.ShowNotifications = false;
                    return [2 /*return*/];
            }
        });
    });
}
exports.OnPreview = OnPreview;
function OnPreviewGameInitiated() {
    content_1.Content.Wallets.Coins.Add("0.5");
}
exports.OnPreviewGameInitiated = OnPreviewGameInitiated;
//todo more todos, like //feature or //bad-code
function OnRelease() {
    console.log("[WARNING] Release mode");
    exports.BUILD_MODE = "Release";
}
exports.OnRelease = OnRelease;
function OnReleaseGameInitiated() {
}
exports.OnReleaseGameInitiated = OnReleaseGameInitiated;
//todo Managers.ThemesManager ???
//todo !!! make dev brunch !!!
function Init() {
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 10, , 11]);
                    gameSave_1.InitSaveWorker();
                    StopwatchStart('Init::InitContent');
                    return [4 /*yield*/, content_1.InitContent()];
                case 1:
                    _a.sent();
                    StopwatchStop('Init::InitContent');
                    return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, gui_1.InitUI()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                case 4:
                    _a.sent();
                    exports.Themes = {
                        List: []
                    };
                    return [4 /*yield*/, main_1.Construct3.callFunction("DoTick")];
                case 5:
                    _a.sent();
                    StopwatchStart('Init::SetupThemeManager');
                    c3themeUtils_1.SetupThemeManager(exports.Themes);
                    StopwatchStop('Init::SetupThemeManager');
                    StopwatchStart('Init::InitThemeUnlocks');
                    themeUnlocks_1.InitThemeUnlocks();
                    StopwatchStop('Init::InitThemeUnlocks');
                    if (!(main_1.Construct3.globalVars.IsGameLoading == 1)) return [3 /*break*/, 7];
                    StopwatchStart('Init::LoadGame');
                    return [4 /*yield*/, exports.SaveManager.LoadGame()];
                case 6:
                    _a.sent();
                    StopwatchStop('Init::LoadGame');
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, content_1.OnContentInitiatedOrGameLoaded()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    console.log('Game initiated :)');
                    return [3 /*break*/, 11];
                case 10:
                    e_1 = _a.sent();
                    OnSystemError(e_1, "Init");
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.Init = Init;
function OnSystemError(error, source) {
    var _a;
    utilsGUI_1.SetText("ErrorSource", "Error in " + source + " method\n\nDetailed info in console");
    utilsGUI_1.SetText("ErrorInfo", "[color=red][size=80]" + error.name + ":[/size][/color]\n" + error.message);
    utilsGUI_1.SetText("ErrorDetails", (_a = error.stack) !== null && _a !== void 0 ? _a : "No stack info found");
    content_1.SystemData.IsContentLoaded = false;
    content_1.SystemData.IsThemesInitiated = false;
    content_1.SystemData.IsGameCrashed = true;
    main_1.Construct3.callFunction("ToggleErrorScreen", true);
    throw error;
}
function SmartUIUpdate() {
    if (content_1.SystemData.IsThemesInitiated && content_1.SystemData.IsContentLoaded && !content_1.SystemData.IsGameCrashed) {
        gui_1.UpdateUIManual();
    }
}
exports.SmartUIUpdate = SmartUIUpdate;
//todo implement smart theme
// export function SmartThemeUnlocks() {
//     if (SystemData.IsThemesInitiated) {
//         UpdateThemeUnlocks();
//     }
// }
function Update(dt) {
    try {
        if (content_1.SystemData.IsContentLoaded && content_1.SystemData.IsThemesInitiated && !content_1.SystemData.IsGameCrashed) {
            //UpdateThemeUnlocks();
            gui_1.UpdateUIEveryTick();
            UpdateObjects(dt);
            UpdateTimers(dt);
            //todo automate update for Managers (ManagerStorage???)
            //todo call on monster died? or MonsterToggle
            content_1.Managers.Fight.UpdateMonsters();
        }
    }
    catch (e) {
        OnSystemError(e, "Update");
    }
}
exports.Update = Update;
function UpdateObjects(dt) {
    for (var _i = 0, _a = content_1.ContentStorage.Items; _i < _a.length; _i++) {
        var item = _a[_i];
        item.Update(dt);
    }
}
function UpdateTimers(dt) {
    for (var _i = 0, _a = content_1.TimerStorage.Items; _i < _a.length; _i++) {
        var item = _a[_i];
        item.Update(dt);
    }
}
var stopwatches = [];
function ToggleStopwatch(id) {
    var stopwatch = stopwatches.find(function (s) { return s.ID == id; });
    if (!stopwatch) {
        StopwatchStart(id);
    }
    else {
        StopwatchStop(id);
    }
}
exports.ToggleStopwatch = ToggleStopwatch;
function StopwatchStart(id) {
    stopwatches.push({
        ID: id,
        Time: new Date(),
    });
}
exports.StopwatchStart = StopwatchStart;
function StopwatchStop(id) {
    var stopwatch = stopwatches.find(function (s) { return s.ID == id; });
    if (stopwatch) {
        var diff = new time_1.Time(0, 0, 0, new Date().getTime() - stopwatch.Time.getTime());
        console.log("[Performance] Stopwatch '" + id + "' time: " + utilsText_1.GetTimeText(diff));
        stopwatches.splice(stopwatches.indexOf(stopwatch), 1);
    }
    else
        throw new Error("Stopwatch with id '" + id + "' was not found");
}
exports.StopwatchStop = StopwatchStop;

