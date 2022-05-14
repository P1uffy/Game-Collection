
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllViewsContent = exports.InitViews = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var view_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/gameUI/view */ "./javascript/construct3/c3ObjectUtils/gameUI/view.ts");
var vector2_1 = __webpack_require__(/*! ../../../data/vector2 */ "./src/data/vector2.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
//todo viewID is not so convenient, you know
function InitViews(storage, content) {
    return new AllViewsContent(storage, content);
}
exports.InitViews = InitViews;
var AllViewsContent = /** @class */ (function () {
    function AllViewsContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        this.overlays = new contentModule_1.ContentModule(ModuleStorage, "Views.Overlays", function () { return ({
            Top: new view_1.View(content_1.UIStorage, content_1.ViewID.TopOverlay, new vector2_1.Vector2(4, -1)),
            Bottom: new view_1.View(content_1.UIStorage, content_1.ViewID.BottomOverlay, new vector2_1.Vector2(5, -1)),
            GameField: new view_1.View(content_1.UIStorage, content_1.ViewID.GameFieldOverlay, new vector2_1.Vector2(6, -1)),
            UnlocksOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.UnlocksOverlay, new vector2_1.Vector2(2, -3)),
            //# Rebirth Overlays #
            RebirthOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthOverlay, new vector2_1.Vector2(4, -2)),
            RebirthMonstersOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthMonstersOverlay, new vector2_1.Vector2(5, -2)),
            RebirthTurretsOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthTurretsOverlay, new vector2_1.Vector2(6, -2)),
            RebirthBuildingsOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthBuildingsOverlay, new vector2_1.Vector2(7, -2)),
            MonstersOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.MonstersOverlay, new vector2_1.Vector2(2, -1)),
            TurretsOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.TurretsOverlay, new vector2_1.Vector2(3, -1)),
            BuildingsOverlay: new view_1.View(content_1.UIStorage, content_1.ViewID.BuildingsOverlay, new vector2_1.Vector2(3, -2)),
        }); });
        this.menus = new contentModule_1.ContentModule(ModuleStorage, "Views.Menus", function () { return ({
            Menu: new view_1.View(content_1.UIStorage, content_1.ViewID.Menu, new vector2_1.Vector2(1, -1)),
            Unlocks: new view_1.View(content_1.UIStorage, content_1.ViewID.Unlocks, new vector2_1.Vector2(1, 6)),
            Buildings: new view_1.View(content_1.UIStorage, content_1.ViewID.Buildings, new vector2_1.Vector2(3, 6)),
            BuildMode: new view_1.View(content_1.UIStorage, content_1.ViewID.BuildMode, new vector2_1.Vector2(2, -2)),
            Settings: new view_1.View(content_1.UIStorage, content_1.ViewID.Settings, new vector2_1.Vector2(4, 6)),
            Credits: new view_1.View(content_1.UIStorage, content_1.ViewID.Credits, new vector2_1.Vector2(5, 6)),
            Statistics: new view_1.View(content_1.UIStorage, content_1.ViewID.Statistics, new vector2_1.Vector2(6, 6)),
        }); });
        this.rebirth = new contentModule_1.ContentModule(ModuleStorage, "Views.Rebirth", function () { return ({
            Main: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthMain, new vector2_1.Vector2(1, 12)),
            Monsters: {
                Basic: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthBasicMonster, new vector2_1.Vector2(2, 12)),
                Armored: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthArmoredMonster, new vector2_1.Vector2(4, 12)),
                Fast: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthFastMonster, new vector2_1.Vector2(7, 12)),
            },
            Turrets: {
                Basic: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthBasicTurret, new vector2_1.Vector2(3, 12)),
                Laser: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthLaserTurret, new vector2_1.Vector2(6, 12)),
                Rail: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthRailTurret, new vector2_1.Vector2(8, 12)),
            },
            Buildings: {
                Spikes: new view_1.View(content_1.UIStorage, content_1.ViewID.RebirthSpikes, new vector2_1.Vector2(5, 12)),
            },
        }); });
        this.monsters = new contentModule_1.ContentModule(ModuleStorage, "Views.Monsters", function () { return ({
            Basic: new view_1.View(content_1.UIStorage, content_1.ViewID.BasicMonster, new vector2_1.Vector2(1, 0)),
            Armored: new view_1.View(content_1.UIStorage, content_1.ViewID.ArmoredMonster, new vector2_1.Vector2(2, 0)),
            Fast: new view_1.View(content_1.UIStorage, content_1.ViewID.FastMonster, new vector2_1.Vector2(3, 0)),
        }); });
        this.turrets = new contentModule_1.ContentModule(ModuleStorage, "Views.Turrets", function () { return ({
            Basic: new view_1.View(content_1.UIStorage, content_1.ViewID.BasicTurret, new vector2_1.Vector2(1, 3)),
            Laser: new view_1.View(content_1.UIStorage, content_1.ViewID.LaserTurret, new vector2_1.Vector2(2, 3)),
            Rail: new view_1.View(content_1.UIStorage, content_1.ViewID.RailTurret, new vector2_1.Vector2(3, 3)),
        }); });
        this.buildings = new contentModule_1.ContentModule(ModuleStorage, "Views.Buildings", function () { return ({
            Spikes: new view_1.View(content_1.UIStorage, content_1.ViewID.Spikes, new vector2_1.Vector2(1, 9)),
        }); });
    }
    Object.defineProperty(AllViewsContent.prototype, "Overlays", {
        get: function () {
            return this.overlays.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllViewsContent.prototype, "Menus", {
        get: function () {
            return this.menus.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllViewsContent.prototype, "Rebirth", {
        get: function () {
            return this.rebirth.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllViewsContent.prototype, "Monsters", {
        get: function () {
            return this.monsters.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllViewsContent.prototype, "Turrets", {
        get: function () {
            return this.turrets.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllViewsContent.prototype, "Buildings", {
        get: function () {
            return this.buildings.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllViewsContent;
}());
exports.AllViewsContent = AllViewsContent;

