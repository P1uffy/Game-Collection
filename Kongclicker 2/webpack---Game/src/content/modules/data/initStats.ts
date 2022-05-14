
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllStatsContent = exports.InitStats = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var gameData_1 = __webpack_require__(/*! ../../../data/game/gameData */ "./src/data/game/gameData.ts");
var stat_1 = __webpack_require__(/*! ../../../game/gameObjects/stat */ "./src/game/gameObjects/stat.ts");
function InitStats(moduleStorage, content) {
    //todo надо короче разделить логически статстику (объекты Stat), и геймплейные значения (GameData)
    return new AllStatsContent(moduleStorage, content);
}
exports.InitStats = InitStats;
var AllStatsContent = /** @class */ (function () {
    function AllStatsContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        this.game = new contentModule_1.ContentModule(ModuleStorage, "Stats.Game", function () { return ({
            StartCoins: new gameData_1.GameData("StartCoins", 0.1),
        }); });
        this.coins = new contentModule_1.ContentModule(ModuleStorage, "Stats.Coins", function () { return ({
            CollectedBeforeRebirth: new stat_1.Stat(ContentStorage, "Coins.CollectedBeforeRebirth", 0),
        }); });
    }
    Object.defineProperty(AllStatsContent.prototype, "Game", {
        get: function () {
            return this.game.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllStatsContent.prototype, "Coins", {
        get: function () {
            return this.coins.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllStatsContent;
}());
exports.AllStatsContent = AllStatsContent;

