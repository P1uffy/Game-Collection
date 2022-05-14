
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllInRect = exports.GetAll = exports.IsPosInRect = exports.SetProgressBarColor = exports.SetProgressBar = exports.FindProgressBar = exports.SetTextVisible = exports.SetText = exports.FindText = exports.SetSelectorEnabled = exports.SetIconVisible = exports.SetIconFrame = exports.FindIcon = exports.ToggleSelector = exports.FindSelector = exports.SetButtonColor = exports.FindButton = exports.SetButtonEnabled = exports.GetNumBoolean = exports.GetObjPos = exports.IsPositionInViewport = void 0;
var main_1 = __webpack_require__(/*! ../main */ "./javascript/construct3/main.js");
var utilsColor_1 = __webpack_require__(/*! ../../../src/utils/utilsColor */ "./src/utils/utilsColor.ts");
var vector2_1 = __webpack_require__(/*! ../../../src/data/vector2 */ "./src/data/vector2.ts");
var inputHandlers_1 = __webpack_require__(/*! ../../../src/input/inputHandlers */ "./src/input/inputHandlers.ts");
var content_1 = __webpack_require__(/*! ../../../src/content/content */ "./src/content/content.ts");
function IsPositionInViewport(position) {
    if (content_1.Managers.Views.CurrentScrollbar) {
        return IsPosInRect(position, content_1.Managers.Views.CurrentViewport);
    }
    else {
        return true;
    }
}
exports.IsPositionInViewport = IsPositionInViewport;
function GetObjPos(obj) {
    return new vector2_1.Vector2(obj.x, obj.y);
}
exports.GetObjPos = GetObjPos;
function GetNumBoolean(bool) {
    return bool ? 1 : 0;
}
exports.GetNumBoolean = GetNumBoolean;
function SetButtonEnabled(name, enabled) {
    var buttons = FindButton(name);
    if (buttons.length == 0) {
        throw new Error("UI: Button '" + name + "' was not found!");
    }
    if (buttons) {
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var button = buttons_1[_i];
            button.instVars.enabled = enabled ? 1 : 0;
        }
    }
}
exports.SetButtonEnabled = SetButtonEnabled;
function FindButton(name) {
    var buttons = main_1.Construct3.objects.Button.getAllInstances();
    var selectedButtons = [];
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        if (button.instVars.name === name) {
            selectedButtons.push(button);
        }
    }
    return selectedButtons;
}
exports.FindButton = FindButton;
function SetButtonColor(name, color) {
    var buttons = FindButton(name);
    for (var _i = 0, buttons_2 = buttons; _i < buttons_2.length; _i++) {
        var button = buttons_2[_i];
        button.colorRgb = utilsColor_1.RGB255ToC3Color(color);
    }
}
exports.SetButtonColor = SetButtonColor;
//todo i guess i can do a more generic way to work with it, just using OBJECT.GetAll..
function FindSelector(section, id) {
    var items = main_1.Construct3.objects.Selector.getAllInstances();
    var selectedItems = [];
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.instVars.section == section && item.instVars.id === id) {
            selectedItems.push(item);
        }
    }
    return selectedItems;
}
exports.FindSelector = FindSelector;
function ToggleSelector(section, id) {
    inputHandlers_1.OnSelectorClicked(section, id);
    main_1.Construct3.callFunction('UpdateSelectors', id, section);
}
exports.ToggleSelector = ToggleSelector;
function FindIcon(id) {
    var icons = main_1.Construct3.objects.Icon.getAllInstances();
    var selectedIcons = [];
    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        if (icon.instVars.id === id) {
            selectedIcons.push(icon);
        }
    }
    return selectedIcons;
}
exports.FindIcon = FindIcon;
function SetIconFrame(name, frame, animation) {
    var icons = FindIcon(name);
    if (icons.length == 0) {
        throw new Error("UI: Icon '" + name + "' was not found!");
    }
    for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
        var icon = icons_1[_i];
        if (animation) {
            icon.setAnimation(animation);
        }
        icon.animationFrame = frame;
    }
}
exports.SetIconFrame = SetIconFrame;
function SetIconVisible(name, visible) {
    var icons = FindIcon(name);
    if (icons.length == 0) {
        throw new Error("UI: Icon '" + name + "' was not found!");
    }
    for (var _i = 0, icons_2 = icons; _i < icons_2.length; _i++) {
        var icon = icons_2[_i];
        icon.isVisible = visible;
    }
}
exports.SetIconVisible = SetIconVisible;
function SetSelectorEnabled(section, id, enabled) {
    var items = FindSelector(section, id);
    if (items.length == 0) {
        throw new Error("UI: Selector '" + name + "' was not found!");
    }
    if (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item.instVars.enabled = enabled ? 1 : 0;
        }
    }
}
exports.SetSelectorEnabled = SetSelectorEnabled;
function FindText(name) {
    var texts = main_1.Construct3.objects.Text.getAllInstances();
    var selectedTexts = [];
    for (var i = 0; i < texts.length; i++) {
        var text = texts[i];
        if (text.instVars.name === name) {
            selectedTexts.push(text);
        }
    }
    return selectedTexts;
}
exports.FindText = FindText;
function SetText(name, text) {
    var texts = FindText(name);
    if (texts.length == 0) {
        throw new Error("UI: Text '" + name + "' was not found!");
    }
    for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
        var textObject = texts_1[_i];
        textObject.text = text instanceof String ? text : text.toString();
    }
}
exports.SetText = SetText;
function SetTextVisible(name, visible) {
    var texts = FindText(name);
    if (texts.length == 0) {
        throw new Error("UI: Text '" + name + "' was not found!");
    }
    for (var _i = 0, texts_2 = texts; _i < texts_2.length; _i++) {
        var text = texts_2[_i];
        text.isVisible = visible;
    }
}
exports.SetTextVisible = SetTextVisible;
function FindProgressBar(name) {
    var bars = main_1.Construct3.objects.Bar.getAllInstances();
    var selectedBars = [];
    for (var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        if (bar.instVars.name === name) {
            selectedBars.push(bar);
        }
    }
    return selectedBars;
}
exports.FindProgressBar = FindProgressBar;
function SetProgressBar(name, value, color, minSize) {
    var bars = FindProgressBar(name);
    if (bars.length == 0) {
        throw new Error("UI: Bar '" + name + "' was not found!");
    }
    for (var i = 0; i < bars.length; i++) {
        var bar = bars[i];
        bar.width = value * (bar.instVars.fullWidth / 100);
        if (minSize) {
            bar.width = Math.max(minSize, bar.width);
        }
        bar.isVisible = bar.width >= 4;
        if (color) {
            bar.colorRgb = utilsColor_1.RGB255ToC3Color(color);
        }
    }
}
exports.SetProgressBar = SetProgressBar;
function SetProgressBarColor(name, color) {
    var bars = FindProgressBar(name);
    for (var _i = 0, bars_1 = bars; _i < bars_1.length; _i++) {
        var bar = bars_1[_i];
        bar.colorRgb = utilsColor_1.RGB255ToC3Color(color);
    }
}
exports.SetProgressBarColor = SetProgressBarColor;
//todo split to multiple files
function IsPosInRect(pos, rect, offsetCheck) {
    if (offsetCheck === void 0) { offsetCheck = 1; }
    return (pos.X + offsetCheck >= rect.left
        && pos.X - offsetCheck <= rect.right
        && pos.Y + offsetCheck >= rect.top
        && pos.Y - offsetCheck <= rect.bottom);
}
exports.IsPosInRect = IsPosInRect;
function GetAll() {
    var selectors = main_1.Construct3.objects.Selector.getAllInstances();
    var buttons = main_1.Construct3.objects.Button.getAllInstances();
    var texts = main_1.Construct3.objects.Text.getAllInstances();
    var markups = main_1.Construct3.objects.Markup.getAllInstances();
    var npElements = main_1.Construct3.objects.NPElements.getAllInstances();
    var icons = main_1.Construct3.objects.Icon.getAllInstances();
    var system = __spreadArrays(main_1.Construct3.objects.NotationList.getAllInstances(), main_1.Construct3.objects.FileChooser.getAllInstances(), main_1.Construct3.objects.TextInput.getAllInstances(), main_1.Construct3.objects.SliderBar.getAllInstances(), main_1.Construct3.objects.Checkbox.getAllInstances());
    return __spreadArrays(texts, buttons, markups, npElements, icons, selectors, system);
}
exports.GetAll = GetAll;
function FindAllInRect(rect, checkForVisible) {
    if (checkForVisible === void 0) { checkForVisible = false; }
    var all = GetAll();
    var selected = [];
    //todo проверять, находится ли объект на слое SystemMarkup
    for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
        var item = all_1[_i];
        if (IsPosInRect(new vector2_1.Vector2(item.c_baseX, item.c_baseY), rect) && (checkForVisible ? item.isVisible : true)) {
            selected.push(item);
        }
    }
    return selected;
}
exports.FindAllInRect = FindAllInRect;

