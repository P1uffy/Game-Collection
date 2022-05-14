
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllOverlaysContent = exports.InitOverlays = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var overlay_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/gameUI/overlay */ "./javascript/construct3/c3ObjectUtils/gameUI/overlay.ts");
var view_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/gameUI/view */ "./javascript/construct3/c3ObjectUtils/gameUI/view.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
var vector2_1 = __webpack_require__(/*! ../../../data/vector2 */ "./src/data/vector2.ts");
function InitOverlays(storage, content) {
    return new AllOverlaysContent(storage, content);
}
exports.InitOverlays = InitOverlays;
var AllOverlaysContent = /** @class */ (function () {
    function AllOverlaysContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        var screenSize = new vector2_1.Vector2(2880, 1920);
        this.ui = new contentModule_1.ContentModule(ModuleStorage, "Overlays.UI", function () { return ({
            TopOverlay: new overlay_1.Overlay(content_1.UIStorage, "TopOverlay", screenSize, content_1.Content.Views.Overlays.Top, content_1.UIStorage.GetAllItemsOfType(view_1.View)),
            BottomOverlay: new overlay_1.Overlay(content_1.UIStorage, "BottomOverlay", screenSize, content_1.Content.Views.Overlays.Bottom, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Monsters), utilsObjects_1.ValuesOf(content_1.Content.Views.Turrets), utilsObjects_1.ValuesOf(content_1.Content.Views.Buildings), [
                content_1.Content.Views.Rebirth.Main
            ], utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Monsters), utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Turrets), utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Buildings))),
        }); });
        this.game = new contentModule_1.ContentModule(ModuleStorage, "Overlays.Game", function () { return ({
            //# Gameplay Overlays #
            GameFieldOverlay: new overlay_1.Overlay(content_1.UIStorage, "GameFieldOverlay", screenSize, content_1.Content.Views.Overlays.GameField, content_1.UIStorage.GetAllItemsOfType(view_1.View)),
            //# Unlocks Overlays #
            UnlocksOverlay: new overlay_1.Overlay(content_1.UIStorage, "UnlocksOverlay", screenSize, content_1.Content.Views.Overlays.UnlocksOverlay, [content_1.Content.Views.Menus.Unlocks]),
            //# Rebirth Overlays #
            RebirthOverlay: new overlay_1.Overlay(content_1.UIStorage, "RebirthOverlay", screenSize, content_1.Content.Views.Overlays.RebirthOverlay, __spreadArrays([
                content_1.Content.Views.Rebirth.Main
            ], utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Turrets), utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Monsters), utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Buildings))),
            RebirthMonstersOverlay: new overlay_1.Overlay(content_1.UIStorage, "RebirthMonstersOverlay", screenSize, content_1.Content.Views.Overlays.RebirthMonstersOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Monsters))),
            RebirthTurretsOverlay: new overlay_1.Overlay(content_1.UIStorage, "RebirthTurretsOverlay", screenSize, content_1.Content.Views.Overlays.RebirthTurretsOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Turrets))),
            RebirthBuildingsOverlay: new overlay_1.Overlay(content_1.UIStorage, "RebirthBuildingsOverlay", screenSize, content_1.Content.Views.Overlays.RebirthBuildingsOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Rebirth.Buildings))),
            //# Monsters Overlays #
            MonstersOverlay: new overlay_1.Overlay(content_1.UIStorage, "MonstersOverlay", screenSize, content_1.Content.Views.Overlays.MonstersOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Monsters))),
            //# Turrets Overlays #
            TurretsOverlay: new overlay_1.Overlay(content_1.UIStorage, "TurretsOverlay", screenSize, content_1.Content.Views.Overlays.TurretsOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Turrets))),
            //# Buildings Overlays #
            BuildingsOverlay: new overlay_1.Overlay(content_1.UIStorage, "BuildingsOverlay", screenSize, content_1.Content.Views.Overlays.BuildingsOverlay, __spreadArrays(utilsObjects_1.ValuesOf(content_1.Content.Views.Buildings))),
        }); });
    }
    Object.defineProperty(AllOverlaysContent.prototype, "UI", {
        get: function () {
            return this.ui.Get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllOverlaysContent.prototype, "Game", {
        get: function () {
            return this.game.Get();
        },
        enumerable: false,
        configurable: true
    });
    return AllOverlaysContent;
}());
exports.AllOverlaysContent = AllOverlaysContent;

