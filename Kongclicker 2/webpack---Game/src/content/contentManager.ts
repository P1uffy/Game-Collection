
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentManager = void 0;
var content_1 = __webpack_require__(/*! ./content */ "./src/content/content.ts");
var initMonsters_1 = __webpack_require__(/*! ./modules/monsters/initMonsters */ "./src/content/modules/monsters/initMonsters.ts");
var initTurrets_1 = __webpack_require__(/*! ./modules/turrets/initTurrets */ "./src/content/modules/turrets/initTurrets.ts");
var initRebirth_1 = __webpack_require__(/*! ./modules/rebirth/initRebirth */ "./src/content/modules/rebirth/initRebirth.ts");
var initViews_1 = __webpack_require__(/*! ./modules/ui/initViews */ "./src/content/modules/ui/initViews.ts");
var initScrollbars_1 = __webpack_require__(/*! ./modules/ui/initScrollbars */ "./src/content/modules/ui/initScrollbars.ts");
var initOverlays_1 = __webpack_require__(/*! ./modules/ui/initOverlays */ "./src/content/modules/ui/initOverlays.ts");
var initWallets_1 = __webpack_require__(/*! ./modules/data/initWallets */ "./src/content/modules/data/initWallets.ts");
var initStats_1 = __webpack_require__(/*! ./modules/data/initStats */ "./src/content/modules/data/initStats.ts");
var initTimers_1 = __webpack_require__(/*! ./modules/data/initTimers */ "./src/content/modules/data/initTimers.ts");
var initSettings_1 = __webpack_require__(/*! ./modules/data/initSettings */ "./src/content/modules/data/initSettings.ts");
var initBuildings_1 = __webpack_require__(/*! ./modules/buildings/initBuildings */ "./src/content/modules/buildings/initBuildings.ts");
var initStatistics_1 = __webpack_require__(/*! ./modules/data/initStatistics */ "./src/content/modules/data/initStatistics.ts");
var initSystem_1 = __webpack_require__(/*! ./modules/data/initSystem */ "./src/content/modules/data/initSystem.ts");
var ContentManager = /** @class */ (function () {
    function ContentManager(Storage) {
        this.Storage = Storage;
        this.System = initSystem_1.InitSystem(Storage, content_1.ContentStorage);
        this.Wallets = initWallets_1.InitWallets(Storage, content_1.ContentStorage);
        this.Stats = initStats_1.InitStats(Storage, content_1.ContentStorage);
        this.Timers = initTimers_1.InitTimers(Storage, content_1.ContentStorage);
        this.Settings = initSettings_1.InitSettings(Storage, content_1.ContentStorage);
        this.Monsters = initMonsters_1.InitMonsters(Storage, content_1.ContentStorage);
        this.Turrets = initTurrets_1.InitTurrets(Storage, content_1.ContentStorage);
        this.Buildings = initBuildings_1.InitBuildings(Storage, content_1.ContentStorage);
        this.Rebirth = initRebirth_1.InitRebirth(Storage, content_1.ContentStorage);
        this.Views = initViews_1.InitViews(Storage, content_1.UIStorage);
        this.Scrollbars = initScrollbars_1.InitScrollbars(Storage, content_1.UIStorage);
        this.Overlays = initOverlays_1.InitOverlays(Storage, content_1.UIStorage);
        this.Statistics = initStatistics_1.InitStatistics(Storage, content_1.ContentStorage);
    }
    return ContentManager;
}());
exports.ContentManager = ContentManager;

