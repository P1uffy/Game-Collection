
//todo здесь хранить инфу о версиях (первой, текущей) и прочую системную лабуду
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSystemContent = exports.InitSystem = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
function InitSystem(moduleStorage, content) {
    //todo надо короче разделить логически статстику (объекты Stat), и геймплейные значения (GameData)
    return new AllSystemContent(moduleStorage, content);
}
exports.InitSystem = InitSystem;
var AllSystemContent = /** @class */ (function () {
    function AllSystemContent(ModuleStorage, ContentStorage) {
        var _this = this;
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var id = "System";
        //todo CompareVersion, parseFloat("0.3.5".replaceAll('.','')) == 35
        var CURRENT_VERSION = "0.4.5";
        this.notifications = new contentModule_1.ContentModule(ModuleStorage, id + ".Notifications", function () { return ({
            IsTutorialShown: new container_1.Container(_this.ContentStorage, id + ".Notifications.IsTutorialShown", false),
            IsMonsterTutorialShown: new container_1.Container(_this.ContentStorage, id + ".Notifications.IsMonsterTutorialShown", false),
            IsTurretTutorialShown: new container_1.Container(_this.ContentStorage, id + ".Notifications.IsTurretTutorialShown", false),
            IsShieldTutorialShown: new container_1.Container(_this.ContentStorage, id + ".Notifications.IsShieldTutorialShown", false),
        }); });
        this.version = new contentModule_1.ContentModule(ModuleStorage, id + ".Version", function () { return ({
            Current: CURRENT_VERSION,
            FirstPlayed: new container_1.Container(_this.ContentStorage, id + ".Version.FirstPlayed", CURRENT_VERSION),
            LastUpdateDateText: "December 18, 2020",
        }); });
    }
    Object.defineProperty(AllSystemContent.prototype, "Notifications", {
        get: function () {
            return this.notifications.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllSystemContent.prototype, "Version", {
        get: function () {
            return this.version.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllSystemContent;
}());
exports.AllSystemContent = AllSystemContent;

