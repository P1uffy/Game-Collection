
//todo actually i think it can be good better way to do it in actual save manager, like ISaveType with Load func, dunno..
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
exports.GameLoadManager = exports.LoadType = void 0;
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var main_1 = __webpack_require__(/*! ../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var gameLoad_1 = __webpack_require__(/*! ./saveSystem/gameLoad */ "./src/game/managers/saveSystem/gameLoad.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var LoadType;
(function (LoadType) {
    LoadType["Auto"] = "Auto";
    LoadType["Manual"] = "Manual";
})(LoadType = exports.LoadType || (exports.LoadType = {}));
var GameLoadManager = /** @class */ (function () {
    function GameLoadManager() {
        this.LoadID = 0;
        this.isLoading = false;
        this.loadInfo = undefined;
        this.loadType = undefined;
        this.isSkippingNextLoad = false;
        this.lastLoadInfo = undefined;
    }
    Object.defineProperty(GameLoadManager.prototype, "IsSkippingNextLoad", {
        get: function () {
            return this.isSkippingNextLoad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameLoadManager.prototype, "LastLoadInfo", {
        get: function () {
            return this.lastLoadInfo;
        },
        enumerable: false,
        configurable: true
    });
    GameLoadManager.prototype.IsLoading = function () {
        return this.isLoading;
    };
    GameLoadManager.prototype.Info = function () {
        return this.loadInfo;
    };
    GameLoadManager.prototype.SkipNextLoad = function () {
        this.isSkippingNextLoad = true;
    };
    GameLoadManager.prototype.SetLoadGame = function (type, info) {
        if (!this.IsLoading()) {
            this.loadType = type;
            this.isLoading = true;
            this.loadInfo = info;
            this.lastLoadInfo = this.loadInfo;
        }
        else {
            throw new Error('Game is already loading!');
        }
    };
    //todo возвращать деньги, за все грейды, которые были убраны в новом апдейте, но остались в сейве
    GameLoadManager.prototype.LoadGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var saveDataOrResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!this.IsSkippingNextLoad) return [3 /*break*/, 1];
                        this.isSkippingNextLoad = false;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!this.IsLoading())
                            throw new Error("Load info was not set");
                        return [4 /*yield*/, this.loadInfo.GetSaveData()];
                    case 2:
                        saveDataOrResult = _a.sent();
                        if (!(typeof saveDataOrResult == "string")) return [3 /*break*/, 4];
                        return [4 /*yield*/, gameLoad_1.LoadGame(saveDataOrResult)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (saveDataOrResult.IsError) {
                            throw saveDataOrResult.Error;
                        }
                        else {
                            console.log(saveDataOrResult.Output);
                        }
                        _a.label = 5;
                    case 5:
                        this.loadType = undefined;
                        this.isLoading = false;
                        this.loadInfo = undefined;
                        main_1.Construct3.globalVars.IsGameLoading = 0;
                        return [4 /*yield*/, content_1.OnContentInitiatedOrGameLoaded(true)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        content_1.SystemData.IsGameCrashed = true;
                        content_1.SystemData.IsContentLoaded = false;
                        content_1.SystemData.IsThemesInitiated = false;
                        switch (this.loadType) {
                            case LoadType.Auto: {
                                main_1.Construct3.callFunction("ToggleAutoLoadErrorScreen", true);
                                break;
                            }
                            case LoadType.Manual: {
                                main_1.Construct3.callFunction("ToggleManualLoadErrorScreen", true);
                                break;
                            }
                        }
                        this.Reset();
                        utilsGUI_1.SetText("SaveLoadErrorInfo", e_1);
                        console.error(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    GameLoadManager.prototype.Reset = function () {
        this.loadType = undefined;
        this.isLoading = false;
        this.loadInfo = undefined;
        main_1.Construct3.globalVars.IsGameLoading = 0;
    };
    GameLoadManager.prototype.RestartToLoad = function () {
        if (main_1.Construct3.globalVars.IsGameLoading == 0) {
            content_1.SystemData.IsContentLoaded = false;
            content_1.SystemData.IsThemesInitiated = false;
            main_1.Construct3.globalVars.IsGameLoading = 1;
            main_1.Construct3.callFunction("RestartLayout");
        }
        else {
            throw new Error('Game is already loading');
        }
    };
    return GameLoadManager;
}());
exports.GameLoadManager = GameLoadManager;

