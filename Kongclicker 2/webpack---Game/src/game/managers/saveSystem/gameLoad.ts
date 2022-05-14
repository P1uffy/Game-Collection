
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
exports.LoadGame = exports.CurrentTimeStr = exports.LoadGameFromString = exports.LoadGameFromSlot = exports.SaveData = void 0;
var gameObject_1 = __webpack_require__(/*! ../../gameObject */ "./src/game/gameObject.ts");
var game_1 = __webpack_require__(/*! ../../../game */ "./src/game.ts");
var content_1 = __webpack_require__(/*! ../../../content/content */ "./src/content/content.ts");
var stringGameLoadInfo_1 = __webpack_require__(/*! ./stringGameLoadInfo */ "./src/game/managers/saveSystem/stringGameLoadInfo.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var slotGameLoadInfo_1 = __webpack_require__(/*! ./slotGameLoadInfo */ "./src/game/managers/saveSystem/slotGameLoadInfo.ts");
var classUtils_1 = __webpack_require__(/*! ./classUtils */ "./src/game/managers/saveSystem/classUtils.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var SaveData = /** @class */ (function () {
    function SaveData(Items, Managers, Timers) {
        this.Items = Items;
        this.Managers = Managers;
        this.Timers = Timers;
    }
    return SaveData;
}());
exports.SaveData = SaveData;
function LoadGameFromSlot(loadType, slotName, isCompressed) {
    if (isCompressed === void 0) { isCompressed = true; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            game_1.SaveManager.SetLoadGame(loadType, new slotGameLoadInfo_1.SlotGameLoadInfo(slotName, isCompressed));
            game_1.SaveManager.RestartToLoad();
            return [2 /*return*/];
        });
    });
}
exports.LoadGameFromSlot = LoadGameFromSlot;
function LoadGameFromString(loadType, rawData, isCompressed) {
    if (isCompressed === void 0) { isCompressed = true; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            game_1.SaveManager.SetLoadGame(loadType, new stringGameLoadInfo_1.StringGameLoadInfo(rawData, isCompressed));
            game_1.SaveManager.RestartToLoad();
            return [2 /*return*/];
        });
    });
}
exports.LoadGameFromString = LoadGameFromString;
function CurrentTimeStr() {
    var now = new Date();
    return "[" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds() + "]";
}
exports.CurrentTimeStr = CurrentTimeStr;
function LoadGame(saveData) {
    return __awaiter(this, void 0, void 0, function () {
        var deserializedSaveData, correctItems, correctTimers, _i, _a, rawItem, item, container, _b, _c, rawTimer, timer, _loop_1, _d, correctItems_1, item, _loop_2, _e, correctTimers_1, timer, _loop_3, _f, correctItems_2, item, state_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 1:
                    _g.sent();
                    //todo save version id, for ability to do some version specific migration
                    //todo надо сделать систему Aliases, чтобы когда выходит новый апдейт, нормально загружались грейды которые были
                    // переименованы
                    content_1.SystemData.IsContentLoaded = false;
                    console.log(CurrentTimeStr() + " [LoadGame] Game loading started..");
                    deserializedSaveData = class_transformer_1.deserialize(SaveData, saveData);
                    console.log(deserializedSaveData.Items);
                    correctItems = [];
                    correctTimers = [];
                    console.log(CurrentTimeStr() + " [LoadGame] Data deserialize finished!");
                    // Stage 1: Init (just convert plain object to classes)
                    for (_i = 0, _a = deserializedSaveData.Items; _i < _a.length; _i++) { //deserializeSaveData.Items
                        rawItem = _a[_i];
                        rawItem = classUtils_1.FixOutdatedIDs(rawItem);
                        item = class_transformer_1.plainToClass(classUtils_1.GetClassByName(rawItem.ClassID), rawItem);
                        correctItems.push(item);
                        if (item.ClassID == gameObject_1.ClassName.Container) {
                            container = item;
                            if (utilsObjects_1.IsObject(container.Value)) {
                                if ("ClassID" in container.Value) {
                                    container.Value = class_transformer_1.plainToClass(classUtils_1.GetClassByName(container.Value.ClassID), container.Value);
                                    container.SetBaseValue(class_transformer_1.plainToClass(classUtils_1.GetClassByName(container.Value.ClassID), container.BaseValue));
                                    //console.log(`Container value '${container.Value.ID}' converted to class ${container.Value.ClassID}`);
                                }
                            }
                        }
                        //console.log(`${CurrentTimeStr()} - Item: ${item.ID} converted to class ${rawItem.ClassID}`);
                        for (_b = 0, _c = deserializedSaveData.Timers; _b < _c.length; _b++) {
                            rawTimer = _c[_b];
                            timer = class_transformer_1.plainToClass(classUtils_1.GetClassByName(rawTimer.ClassID), rawTimer);
                            correctTimers.push(timer);
                            //console.log(`${CurrentTimeStr()} - Timer: ${timer.ID} converted to class`);
                        }
                    }
                    console.log(CurrentTimeStr() + " [LoadGame] Stage one of converting objects finished!");
                    _loop_1 = function (item) {
                        var currentItem = content_1.ContentStorage.Items.find(function (obj) { return obj.IsSameSignature(item); });
                        if (currentItem) {
                            currentItem.InitFrom(content_1.ContentStorage, item);
                            //console.log(`${CurrentTimeStr()} - Item ${currentItem.ID} reinited`);
                        }
                        else {
                            console.log(CurrentTimeStr() + " No item found to replace for " + item.ClassID + " - " + item.ID);
                            switch (item.ClassID) {
                                //todo SubClassID??
                                case gameObject_1.ClassName.Upgrade: {
                                    var upgrade = item;
                                    upgrade.PriceArray.Refund(content_1.ContentStorage);
                                    break;
                                }
                            }
                        }
                    };
                    // Stage 2: Merge save data to current content
                    for (_d = 0, correctItems_1 = correctItems; _d < correctItems_1.length; _d++) {
                        item = correctItems_1[_d];
                        _loop_1(item);
                    }
                    _loop_2 = function (timer) {
                        var currentTimer = content_1.TimerStorage.Items.find(function (obj) { return obj.IsSameSignature(timer); });
                        if (currentTimer) {
                            currentTimer.InitFrom(content_1.ContentStorage, timer);
                            //console.log(`${CurrentTimeStr()} - Item ${currentTimer.ID} reinited`);
                        }
                    };
                    for (_e = 0, correctTimers_1 = correctTimers; _e < correctTimers_1.length; _e++) {
                        timer = correctTimers_1[_e];
                        _loop_2(timer);
                    }
                    console.log(CurrentTimeStr() + " [LoadGame] Stage one of re-initiating objects finished!");
                    _loop_3 = function (item) {
                        var currentItem, instancesStorage, loadedBuilding, currentBuilding, building, count, items, _i, _a, instance, correctInstance, turretInstance;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    currentItem = content_1.ContentStorage.Items.find(function (obj) { return obj.IsSameSignature(item); });
                                    instancesStorage = void 0;
                                    loadedBuilding = void 0;
                                    currentBuilding = void 0;
                                    if (!(item.ClassID == gameObject_1.ClassName.Turret || utilsObjects_1.ValuesOf(gameObject_1.BuildingName).includes(item.ClassID))) return [3 /*break*/, 7];
                                    loadedBuilding = item;
                                    currentBuilding = currentItem;
                                    instancesStorage = loadedBuilding.Instances;
                                    if (!content_1.ContentStorage.IsItemExists(item.ID)) return [3 /*break*/, 6];
                                    building = content_1.ContentStorage.GetItem(item.ID);
                                    count = building.Count.Value.AsNumber;
                                    items = instancesStorage.Items;
                                    items = items.slice(0, count);
                                    instancesStorage.RemoveAll();
                                    instancesStorage.AddItems(items);
                                    if (!building.Unlock.IsUnlocked && items.length > 0) {
                                        console.log("Building '" + building.ID + "' isn't unlocked now, so skip loading instances");
                                        return [2 /*return*/, { value: void 0 }];
                                    }
                                    _i = 0, _a = instancesStorage.Items;
                                    _b.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                                    instance = _a[_i];
                                    instance = classUtils_1.FixOutdatedIDs(instance);
                                    correctInstance = class_transformer_1.plainToClass(classUtils_1.GetClassByName(instance.ClassID), instance);
                                    correctInstance.InitFrom(currentBuilding.Instances, correctInstance);
                                    if (!(item.ClassID == gameObject_1.ClassName.Turret)) return [3 /*break*/, 3];
                                    turretInstance = correctInstance;
                                    //bug turret count is not used, so can be placed more turrets than available
                                    return [4 /*yield*/, game_1.Managers.Fight.CreateTurret(turretInstance.Position, turretInstance.TurretID, turretInstance.Angle)];
                                case 2:
                                    //bug turret count is not used, so can be placed more turrets than available
                                    _b.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    game_1.Managers.Fight.CreateBuilding(correctInstance.ClassID, correctInstance.Position);
                                    _b.label = 4;
                                case 4:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 5: return [3 /*break*/, 7];
                                case 6: throw new Error("Building '" + item.ID + "' was not found in the current content");
                                case 7: return [2 /*return*/];
                            }
                        });
                    };
                    _f = 0, correctItems_2 = correctItems;
                    _g.label = 2;
                case 2:
                    if (!(_f < correctItems_2.length)) return [3 /*break*/, 5];
                    item = correctItems_2[_f];
                    return [5 /*yield**/, _loop_3(item)];
                case 3:
                    state_1 = _g.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _g.label = 4;
                case 4:
                    _f++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('[LoadGame] Stage one of specific objects actions after full game load is finished');
                    return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 6:
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.LoadGame = LoadGame;

