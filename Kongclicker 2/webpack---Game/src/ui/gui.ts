
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
exports.UpdateButtonsUI = exports.UpdateUIManual = exports.UpdateUIEveryTick = exports.InitUI = exports.GetUpgradePos = exports.FPS = void 0;
var utilsGUI_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
var upgrade_1 = __webpack_require__(/*! ../game/gameObjects/upgrade/upgrade */ "./src/game/gameObjects/upgrade/upgrade.ts");
var utilsText_1 = __webpack_require__(/*! ../utils/utilsText */ "./src/utils/utilsText.ts");
var fontSizeCalc_1 = __webpack_require__(/*! ./fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
var upgradeInfo_1 = __webpack_require__(/*! ./upgrade/upgradeInfo */ "./src/ui/upgrade/upgradeInfo.ts");
var utilsColor_1 = __webpack_require__(/*! ../utils/utilsColor */ "./src/utils/utilsColor.ts");
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
var rebirthGUI_1 = __webpack_require__(/*! ./gui-update/rebirthGUI */ "./src/ui/gui-update/rebirthGUI.ts");
var indicatorsGUI_1 = __webpack_require__(/*! ./gui-update/indicatorsGUI */ "./src/ui/gui-update/indicatorsGUI.ts");
var monstersGUI_1 = __webpack_require__(/*! ./gui-update/monstersGUI */ "./src/ui/gui-update/monstersGUI.ts");
var turretsGUI_1 = __webpack_require__(/*! ./gui-update/turretsGUI */ "./src/ui/gui-update/turretsGUI.ts");
var statisticsGUI_1 = __webpack_require__(/*! ./gui-update/statisticsGUI */ "./src/ui/gui-update/statisticsGUI.ts");
var buildingsGUI_1 = __webpack_require__(/*! ./gui-update/buildingsGUI */ "./src/ui/gui-update/buildingsGUI.ts");
exports.FPS = 0; //todo move to globalVars
//todo можно сделать так же как с апдейтами тем, чтобы был массив объектов, чтобы каждый раз не находить все объектоы по новой
function GetUpgradePos(textID) {
    try {
        return utilsGUI_1.GetObjPos(utilsGUI_1.FindText(textID)[0]);
    }
    catch (e) {
        throw new Error("Can't find upgrade markup text '" + textID + "'");
    }
}
exports.GetUpgradePos = GetUpgradePos;
function InitUI() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 1:
                    _a.sent();
                    content_1.Content.Rebirth.InitUI();
                    content_1.Content.Monsters.Basic.InitUI();
                    content_1.Content.Monsters.Armored.InitUI();
                    content_1.Content.Monsters.Fast.InitUI();
                    content_1.Content.Turrets.Basic.InitUI();
                    content_1.Content.Turrets.Laser.InitUI();
                    content_1.Content.Turrets.Rail.InitUI();
                    content_1.Content.Buildings.Spikes.InitUI();
                    return [4 /*yield*/, game_1.Construct3.callFunction("DoTick")];
                case 2:
                    _a.sent();
                    console.log('UI Initiated!');
                    return [2 /*return*/];
            }
        });
    });
}
exports.InitUI = InitUI;
function UpdateUIEveryTick() {
    if (game_1.BUILD_MODE == "Preview") {
        utilsGUI_1.SetText("GameTime", "FPS: " + game_1.Construct3.globalVars.GameFPS + " GT: " + utilsText_1.GetTimeText(content_1.Content.Statistics.Time.InGameTimePlayed.Value));
    }
    //# Monster spawn progress bar #
    var monsterSpawnProgress = content_1.Content.Timers.Game.MonsterSpawn.Progress.AsNumber;
    var color;
    if (content_1.Content.Timers.Game.MonsterSpawn.Duration.IsMore(1000)) {
        color = utilsColor_1.InterpolateColors("#e6c13d", "#17d359", content_1.Content.Timers.Game.MonsterSpawn.Progress.AsNumber);
    }
    else {
        color = utilsColor_1.InterpolateColors("#9221a7", "#e161ff", content_1.Content.Timers.Game.MonsterSpawn.Progress.AsNumber);
    }
    utilsGUI_1.SetProgressBar("spawnProgress::BasicMonster", monsterSpawnProgress, color);
    statisticsGUI_1.UpdateStatisticsGUI();
    game_1.UpdateThemeUnlocks();
}
exports.UpdateUIEveryTick = UpdateUIEveryTick;
//todo make a folder UI and make some methods and files to split all those sections (maybe)
function UpdateUIManual() {
    game_1.Construct3.globalVars.SmartUIUpdates++;
    //# Wallets #
    {
        utilsGUI_1.SetText("wallet::" + content_1.Content.Wallets.Coins.ID, "" + utilsText_1.GetNumberText(content_1.Content.Wallets.Coins.Value));
        var award = content_1.Content.Rebirth.CurrentRebirthAward;
        utilsGUI_1.SetText("wallet::" + content_1.Content.Wallets.RebirthPoints.ID, utilsText_1.GetNumberText(content_1.Content.Wallets.RebirthPoints.Value) + " (+" + utilsText_1.GetNumberText(award) + ")");
    }
    //todo Я не уверен, стоит ли мучаться с продвинутой системой отображения информации,
    // как в PM. Мне кажется, проще вручную весь интерфейс прописывать и не усложнять код
    // пусть логика будет отделена лучше от игровых механик/текста
    // ====>> вместо этого, все настройки и проверки делать в функциях UI в первую очередь,
    //         и стараться не добавлять лишние переменные только для UI в игровые объекты
    //todo модульная система интерфейса. Чтобы было удобно собирать разные блоки
    // в том числе для того, чтобы например не делать кучу ифов на IsShowingLevel и IsShowingTweak. Рили надо подумать
    //todo ! Как варик, можно указывать не upgradeValue:NAME:1 а upgradeValue:NAME:TWEAK_NAME
    //todo IsGrayColored for selectors
    //todo хмм, мб сделать какие-то автоматические списки для подобных штук, чтобы вручную не происывать
    //todo maybe move to content class? or like BasicMonsterGUI class... To separate it from single file
    //# Unlocks #
    if (content_1.Managers.Views.CurrentView.ID == content_1.ViewID.Unlocks) {
        for (var _i = 0, _a = content_1.ContentStorage.GetAllItemsOfType(upgrade_1.UnlockUpgrade); _i < _a.length; _i++) {
            var unlock = _a[_i];
            upgradeInfo_1.UpdateUpgradeInfo(unlock, {
                FontSize: fontSizeCalc_1.MonsterUpgradeFontSizeCalc,
                DisplayIfMaxed: "Unlocked",
                ShowLevel: false,
            });
        }
    }
    indicatorsGUI_1.UpdateIndicatorsGUI();
    monstersGUI_1.UpdateMonstersGUI();
    turretsGUI_1.UpdateTurretsGUI();
    buildingsGUI_1.UpdateBuildingsGUI();
    rebirthGUI_1.UpdateRebirthGUI();
    UpdateButtonsUI();
    game_1.Construct3.callFunction("UpdateGUI");
    //todo может тут сделать такую же систему, как в ThemeUnlocks, только наоборот?)) Чтобы не обновлять лишнее
}
exports.UpdateUIManual = UpdateUIManual;
function UpdateButtonsUI() {
    //todo может быть какой-то фикс производительности. Мб создавать отдельные под-списки для разных типов
    var upgrades = content_1.ContentStorage.GetAllItemsOfType(upgrade_1.Upgrade);
    for (var _i = 0, upgrades_1 = upgrades; _i < upgrades_1.length; _i++) {
        var upgrade = upgrades_1[_i];
        upgradeInfo_1.UpdateUpgradeButton(upgrade);
    }
}
exports.UpdateButtonsUI = UpdateButtonsUI;

