
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllSettingsContent = exports.InitSettings = void 0;
var setting_1 = __webpack_require__(/*! ../../../game/gameObjects/setting */ "./src/game/gameObjects/setting.ts");
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var vector2_1 = __webpack_require__(/*! ../../../data/vector2 */ "./src/data/vector2.ts");
var game_1 = __webpack_require__(/*! ../../../game */ "./src/game.ts");
var container_1 = __webpack_require__(/*! ../../../game/gameObjects/container */ "./src/game/gameObjects/container.ts");
function InitSettings(moduleStorage, content) {
    return new AllSettingsContent(moduleStorage, content);
}
exports.InitSettings = InitSettings;
var AllSettingsContent = /** @class */ (function () {
    function AllSettingsContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        this.system = new contentModule_1.ContentModule(ModuleStorage, "Settings.Upgrades", function () { return ({
            BuyCount: new setting_1.Setting(ContentStorage, 'BuyCount', 1, new setting_1.ArrayValidator([1, 5, 10, 25, 100, 1000, "Max"])),
            Notation: new setting_1.Setting(ContentStorage, 'Notation', "Letter", new setting_1.ArrayValidator(["Letter", "Scientific"])),
            CustomCursor: new container_1.Container(ContentStorage, 'System.CustomCursor', true),
        }); });
        this.audio = new contentModule_1.ContentModule(ModuleStorage, "Settings.Audio", function () { return ({
            MusicVolume: new setting_1.Setting(ContentStorage, 'MusicVolume', -25, new setting_1.IntervalValidator(new vector2_1.Interval(-50, 15)), function (setting, value) {
                game_1.Construct3.globalVars.MusicVolume = value;
                game_1.Construct3.callFunction("UpdateAudioVolume", "Music", value, setting.Validator.Interval.Min);
            }),
            SoundVolume: new setting_1.Setting(ContentStorage, 'SoundVolume', -5, new setting_1.IntervalValidator(new vector2_1.Interval(-50, 15)), function (setting, value) {
                game_1.Construct3.globalVars.SoundsVolume = value;
                game_1.Construct3.callFunction("UpdateAudioVolume", "Sound", value, setting.Validator.Interval.Min);
            }),
        }); });
        //todo SaveInterval
    }
    Object.defineProperty(AllSettingsContent.prototype, "System", {
        get: function () {
            return this.system.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllSettingsContent.prototype, "Audio", {
        get: function () {
            return this.audio.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllSettingsContent;
}());
exports.AllSettingsContent = AllSettingsContent;

