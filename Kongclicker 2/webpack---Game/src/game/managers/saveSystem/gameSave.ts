
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
exports.GetCurrentSaveString = exports.OnSaveDataGot = exports.SaveGame = exports.GetCurrentSaveData = exports.InitSaveWorker = void 0;
var content_1 = __webpack_require__(/*! ../../../content/content */ "./src/content/content.ts");
var gameLoad_1 = __webpack_require__(/*! ./gameLoad */ "./src/game/managers/saveSystem/gameLoad.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var lz_string_1 = __importDefault(__webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js"));
var engine_1 = __webpack_require__(/*! ../../../../javascript/construct3/engine */ "./javascript/construct3/engine.ts");
var game_1 = __webpack_require__(/*! ../../../game */ "./src/game.ts");
//"https://preview.construct.net/game.worker.js"
var SaveWorker;
function InitSaveWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var str;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!SaveWorker) return [3 /*break*/, 2];
                    return [4 /*yield*/, game_1.Construct3.assets.getProjectFileUrl("game.worker.js")];
                case 1:
                    str = _a.sent();
                    SaveWorker = new Worker(str);
                    console.log(SaveWorker);
                    SaveWorker.onmessage = function (e) {
                        // console.log("SaveWorker.OnMessage()");
                        OnSaveDataGot(e.data);
                        // console.log("Worker says: " + e.data.length);
                    };
                    console.log('Worker inited');
                    return [3 /*break*/, 3];
                case 2:
                    console.log('Worker is already inited');
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.InitSaveWorker = InitSaveWorker;
function GetCurrentSaveData() {
    return new gameLoad_1.SaveData(content_1.ContentStorage.Items, content_1.Managers, content_1.TimerStorage.Items);
}
exports.GetCurrentSaveData = GetCurrentSaveData;
var SaveGameState = {
    LastLoadID: 0,
    IsSaving: false
};
function SaveGame() {
    return __awaiter(this, void 0, void 0, function () {
        var data, plain;
        return __generator(this, function (_a) {
            if (!SaveGameState.IsSaving) {
                //console.log('[SaveGame] Saving is not active, started saving...');
                SaveGameState.IsSaving = true;
                SaveGameState.LastLoadID = parseInt(game_1.SaveManager.LoadID.toString());
                data = GetCurrentSaveData();
                plain = class_transformer_1.classToPlain(data);
                SaveWorker.postMessage(plain);
            }
            return [2 /*return*/];
        });
    });
}
exports.SaveGame = SaveGame;
function OnSaveDataGot(saveString) {
    if (SaveGameState.IsSaving) {
        if (game_1.SaveManager.LoadID == SaveGameState.LastLoadID) {
            var slotName = "Save1";
            engine_1.Engine.Storage.SetItem(slotName, saveString);
            console.log("Saved: " + slotName);
        }
        else {
            console.log('[OnSaveDataGot] LoadID had changed, aborting game save.');
        }
        SaveGameState.IsSaving = false;
    }
    else {
        console.log('[OnSaveDataGot] SaveGameState.IsSaving is false, aborting game save');
    }
}
exports.OnSaveDataGot = OnSaveDataGot;
function GetCurrentSaveString() {
    return __awaiter(this, void 0, void 0, function () {
        var saveData, serializedSaveData;
        return __generator(this, function (_a) {
            saveData = GetCurrentSaveData();
            serializedSaveData = class_transformer_1.serialize(saveData);
            return [2 /*return*/, lz_string_1.default.compressToUTF16(serializedSaveData)];
        });
    });
}
exports.GetCurrentSaveString = GetCurrentSaveString;
//
// let SOMETHING1 = new Date().getTime();
// let SOMETHING2 = new Date().getTime();
// console.log(`SOMETHING time: ${GetTimeText(SOMETHING2 - SOMETHING1)}`);

