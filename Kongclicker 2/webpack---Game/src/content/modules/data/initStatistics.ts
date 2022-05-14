
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllStatisticsContent = exports.InitStatistics = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var time_1 = __webpack_require__(/*! ../../../data/time */ "./src/data/time.ts");
var timer_1 = __webpack_require__(/*! ../../../data/timer */ "./src/data/timer.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
var main_1 = __webpack_require__(/*! ../../../../javascript/construct3/main */ "./javascript/construct3/main.js");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
function InitStatistics(moduleStorage, content) {
    return new AllStatisticsContent(moduleStorage, content);
}
exports.InitStatistics = InitStatistics;
var AllStatisticsContent = /** @class */ (function () {
    function AllStatisticsContent(//todo give structure of storages (TimerStorage, UIStorage, ...)
    ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var contentID = "Statistics";
        var systemID = contentID + ".System";
        this.system = new contentModule_1.ContentModule(ModuleStorage, systemID, function () { return ({
            LastWallTime: new Date(),
            LastGameTime: main_1.Construct3.gameTime * 1000,
        }); });
        var timeID = contentID + ".Time";
        this.time = new contentModule_1.ContentModule(ModuleStorage, timeID, function () { return ({
            StartedPlaying: new container_1.Container(ContentStorage, timeID + ".StartedPlaying", new Date(), container_1.DateContainer),
            TimePlayed: new container_1.Container(ContentStorage, timeID + ".TimePlayed", new time_1.Time(), container_1.TimeContainer),
            InGameTimePlayed: new container_1.Container(ContentStorage, timeID + ".InGameTimePlayed", new time_1.Time(), container_1.TimeContainer),
        }); });
        var gameplayID = contentID + ".Gameplay";
        this.gameplay = new contentModule_1.ContentModule(ModuleStorage, gameplayID, function () { return ({
            TotalClicks: new container_1.Container(ContentStorage, gameplayID + ".TotalClicks", 0),
            TotalClickDamage: new container_1.Container(ContentStorage, gameplayID + ".TotalClickDamage", new float_1.Float(0), container_1.FloatContainer),
            ClickKills: new container_1.Container(ContentStorage, gameplayID + ".ClickKills", 0),
        }); });
        var timersID = contentID + ".Timers";
        this.timers = new contentModule_1.ContentModule(ModuleStorage, timersID, function () { return ({
            StatisticsUpdate: new timer_1.Timer(content_1.TimerStorage, timersID + ".StatisticsUpdate", new time_1.Time(0, 0, 1), 1, true, true, {
                OnEvent: function () {
                    //# Wall Time #
                    {
                        var currentTime = new Date();
                        var lastWallTime = content_1.Content.Statistics.System.LastWallTime;
                        var diffMS = Math.abs(currentTime.getTime() - lastWallTime.getTime());
                        content_1.Content.Statistics.Time.TimePlayed.Value.Add(new time_1.Time(0, 0, 0, diffMS));
                        content_1.Content.Statistics.System.LastWallTime = currentTime;
                    }
                    //# InGame Time #
                    {
                        var currentTime = main_1.Construct3.gameTime * 1000;
                        var lastGameTime = content_1.Content.Statistics.System.LastGameTime;
                        var diffMS = Math.abs(currentTime - lastGameTime);
                        content_1.Content.Statistics.Time.InGameTimePlayed.Value.Add(new time_1.Time(0, 0, 0, diffMS));
                        content_1.Content.Statistics.System.LastGameTime = currentTime;
                    }
                }
            })
        }); });
    }
    Object.defineProperty(AllStatisticsContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllStatisticsContent.prototype, "Time", {
        get: function () {
            return this.time.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllStatisticsContent.prototype, "Gameplay", {
        get: function () {
            return this.gameplay.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllStatisticsContent.prototype, "Timers", {
        get: function () {
            return this.timers.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllStatisticsContent;
}());
exports.AllStatisticsContent = AllStatisticsContent;

