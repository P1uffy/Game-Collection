
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindNPElementsByTheme = exports.FindSelectorByTheme = exports.FindMarkupByTheme = exports.FindTextsByTheme = exports.FindIconsByTheme = exports.FindButtonsByTheme = exports.FindAllByDynamicTheme = exports.SetDynamicThemeInRect = exports.ToggleTheme = exports.SetupThemeManager = exports.FindAllByTheme = void 0;
var main_1 = __webpack_require__(/*! ../main */ "./javascript/construct3/main.js");
var game_1 = __webpack_require__(/*! ../../../src/game */ "./src/game.ts");
var content_1 = __webpack_require__(/*! ../../../src/content/content */ "./src/content/content.ts");
var utilsGUI_1 = __webpack_require__(/*! ./utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
function FindAllByTheme(theme) {
    var selectors = FindSelectorByTheme(theme);
    var buttons = FindButtonsByTheme(theme);
    var texts = FindTextsByTheme(theme);
    var markups = FindMarkupByTheme(theme);
    var npElements = FindNPElementsByTheme(theme);
    var icons = FindIconsByTheme(theme);
    return __spreadArrays(texts, buttons, markups, npElements, icons, selectors);
}
exports.FindAllByTheme = FindAllByTheme;
//todo !!!!!!!!!!!!!!!!!!!!!! ПОИСК ВСЕХ ТЕМ МОЖНО СДЕЛАТЬ 1 РАЗ В САМОМ НАЧАЛЕ, АЛО
function SetupThemeManager(manager) {
    var all = utilsGUI_1.GetAll();
    var itemsAdded = 0;
    var IsHasTheme = function (item) {
        if ("instVars" in item) {
            return "theme" in item.instVars;
        }
        else
            return false;
    };
    var _loop_1 = function (_item) {
        if (IsHasTheme(_item)) {
            var item = _item;
            var theme_1 = item.instVars.theme;
            if (theme_1.length < 2)
                return "continue";
            itemsAdded++;
            var isAnti = false;
            if (theme_1[0] == "!") {
                theme_1 = theme_1.slice(1);
                isAnti = true;
            }
            var themeInfo = manager.List.find(function (themeInfo) { return themeInfo.Name == theme_1; });
            if (!themeInfo) {
                //console.log(`Theme added`)
                themeInfo = {
                    Name: theme_1,
                    Objects: [],
                    AntiObjects: [],
                    Upgrades: [],
                    Enabled: null,
                };
                manager.List.push(themeInfo);
            }
            if (!isAnti) {
                themeInfo.Objects.push(item);
            }
            else
                themeInfo.AntiObjects.push(item);
        }
        else {
            //console.log('Skipped');
        }
    };
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var _item = all_1[_i];
        _loop_1(_item);
    }
    console.log("Items added to themes manager: " + itemsAdded);
}
exports.SetupThemeManager = SetupThemeManager;
function ToggleTheme(theme, enabled) {
    content_1.SystemData.PerformanceStats.ToggleThemeCalls++;
    var themeInfo = game_1.Themes.List.find(function (themeInfo) { return themeInfo.Name == theme; });
    if (themeInfo) {
        if (themeInfo.Enabled == null || themeInfo.Enabled != enabled) {
            for (var _i = 0, _a = themeInfo.Objects; _i < _a.length; _i++) {
                var item = _a[_i];
                item.isVisible = enabled;
            }
            for (var _b = 0, _c = themeInfo.AntiObjects; _b < _c.length; _b++) {
                var antiItem = _c[_b];
                antiItem.isVisible = !enabled;
            }
            for (var _d = 0, _e = themeInfo.Upgrades; _d < _e.length; _d++) {
                var upgrade = _e[_d];
                upgrade.IsThemeUnlocked = enabled;
            }
            themeInfo.Enabled = enabled;
        }
    }
    game_1.SmartUIUpdate();
}
exports.ToggleTheme = ToggleTheme;
//todo check if it works
function SetDynamicThemeInRect(theme, rect, skipAntiThemes) {
    if (skipAntiThemes === void 0) { skipAntiThemes = false; }
    var items = utilsGUI_1.FindAllInRect(rect);
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var anyItem = items_1[_i];
        if (skipAntiThemes) {
            var item = anyItem;
            if ("instVars" in item && "theme" in item["instVars"]) {
                if (item.instVars.theme[0] != "!") {
                    anyItem.c_theme = theme;
                }
            }
            else {
                anyItem.c_theme = theme;
            }
        }
        else {
            anyItem.c_theme = theme;
        }
    }
}
exports.SetDynamicThemeInRect = SetDynamicThemeInRect;
function FindAllByDynamicTheme(theme) {
    var items = utilsGUI_1.GetAll();
    var output = [];
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        if (item.c_theme == theme) {
            output.push(item);
        }
    }
    return output;
}
exports.FindAllByDynamicTheme = FindAllByDynamicTheme;
/**
 * @param {string} theme
 * @return {C3Button[]}
 * @function
 */
function FindButtonsByTheme(theme) {
    var buttons = main_1.Construct3.objects.Button.getAllInstances();
    var result = [];
    for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
        var b = buttons_1[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindButtonsByTheme = FindButtonsByTheme;
function FindIconsByTheme(theme) {
    var icons = main_1.Construct3.objects.Icon.getAllInstances();
    var result = [];
    for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
        var b = icons_1[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindIconsByTheme = FindIconsByTheme;
function FindTextsByTheme(theme) {
    var buttons = main_1.Construct3.objects.Text.getAllInstances();
    var result = [];
    for (var _i = 0, buttons_2 = buttons; _i < buttons_2.length; _i++) {
        var b = buttons_2[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindTextsByTheme = FindTextsByTheme;
function FindMarkupByTheme(theme) {
    var buttons = main_1.Construct3.objects.Markup.getAllInstances();
    var result = [];
    for (var _i = 0, buttons_3 = buttons; _i < buttons_3.length; _i++) {
        var b = buttons_3[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindMarkupByTheme = FindMarkupByTheme;
function FindSelectorByTheme(theme) {
    var selectors = main_1.Construct3.objects.Selector.getAllInstances();
    var result = [];
    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var b = selectors_1[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindSelectorByTheme = FindSelectorByTheme;
function FindNPElementsByTheme(theme) {
    var buttons = main_1.Construct3.objects.NPElements.getAllInstances();
    var result = [];
    for (var _i = 0, buttons_4 = buttons; _i < buttons_4.length; _i++) {
        var b = buttons_4[_i];
        if (b.instVars.theme === theme) {
            result.push(b);
        }
    }
    return result;
}
exports.FindNPElementsByTheme = FindNPElementsByTheme;

