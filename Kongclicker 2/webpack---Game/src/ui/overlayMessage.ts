
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetCurrentOverlayMessage = exports.HideOverlayMessage = exports.ShowOverlayMessage = exports.OverlayMessageQueue = exports.CurrentOverlayMessageInfo = void 0;
var utilsGUI_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var c3themeUtils_1 = __webpack_require__(/*! ../../javascript/construct3/c3ObjectUtils/c3themeUtils */ "./javascript/construct3/c3ObjectUtils/c3themeUtils.ts");
var utilsMath_1 = __webpack_require__(/*! ../utils/utilsMath */ "./src/utils/utilsMath.ts");
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
var main_1 = __webpack_require__(/*! ../../javascript/construct3/main */ "./javascript/construct3/main.js");
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
exports.OverlayMessageQueue = [];
function ShowOverlayMessage(info) {
    exports.OverlayMessageQueue.push(info);
    info.AddedOn = new Date();
    exports.OverlayMessageQueue.sort(function (a, b) { return a.AddedOn.getTime() - b.AddedOn.getTime(); });
    UpdateOverlayMessageQueue();
}
exports.ShowOverlayMessage = ShowOverlayMessage;
function UpdateOverlayMessageQueue() {
    var _a;
    if (exports.OverlayMessageQueue.length > 0 && !exports.CurrentOverlayMessageInfo && content_1.SystemData.Settings.ShowNotifications) {
        var info = exports.OverlayMessageQueue[0];
        exports.CurrentOverlayMessageInfo = info;
        utilsGUI_1.SetText("OverlayMessageTitle", info.Title);
        utilsGUI_1.SetText("OverlayMessageText", info.Text);
        utilsGUI_1.SetIconFrame("OverlayMessage", info.Icon.Frame, info.Icon.Animation);
        if (info.Button) {
            utilsGUI_1.SetButtonEnabled("action::OverlayMessageButton", false);
            setTimeout(function () {
                console.log('Enabled');
                utilsGUI_1.SetButtonEnabled("action::OverlayMessageButton", true);
                game_1.SmartUIUpdate();
            }, 1000);
            c3themeUtils_1.ToggleTheme("OverlayMessageButton", true);
            utilsGUI_1.SetText("OverlayMessageButtonText", (_a = info.Button.Text) !== null && _a !== void 0 ? _a : "Show me!");
            var color = info.Button.Color
                ? (typeof info.Button.Color == "string"
                    ? utilsMath_1.HexToRGB255(info.Button.Color)
                    : info.Button.Color)
                : utilsMath_1.HexToRGB255("3cd38c");
            utilsGUI_1.SetButtonColor("OverlayMessageButton", color);
            content_1.SystemData.IsShowingOverlay = true;
            content_1.SystemData.CurrentOverlay = {
                Theme: "OverlayMessage",
                InputTheme: "OverlayMessageButton",
            };
        }
        else {
            utilsGUI_1.SetButtonEnabled("action::OverlayMessageButton", false);
            c3themeUtils_1.ToggleTheme("OverlayMessageButton", false);
        }
        main_1.Construct3.callFunction("ToggleOverlayMessage", true);
        exports.OverlayMessageQueue.splice(0, 1);
    }
}
function HideOverlayMessage() {
    main_1.Construct3.callFunction("ToggleOverlayMessage", false);
    content_1.SystemData.IsShowingOverlay = false;
    content_1.SystemData.CurrentOverlay = {
        Theme: "None",
        InputTheme: "None",
    };
}
exports.HideOverlayMessage = HideOverlayMessage;
function ResetCurrentOverlayMessage() {
    exports.CurrentOverlayMessageInfo = undefined;
    UpdateOverlayMessageQueue();
}
exports.ResetCurrentOverlayMessage = ResetCurrentOverlayMessage;

