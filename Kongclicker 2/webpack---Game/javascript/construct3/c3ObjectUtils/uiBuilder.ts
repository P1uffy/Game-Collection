
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWalletIcon = exports.CreateUpgradeUI = void 0;
var main_1 = __webpack_require__(/*! ../main */ "./javascript/construct3/main.js");
var fontSizeCalc_1 = __webpack_require__(/*! ../../../src/ui/fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
function CreateUpgradeUI(pos, upgrade, colorHex, title, valueNames, isLocked) {
    main_1.Construct3.callFunction("CreateUpgrade", pos.X, pos.Y, upgrade.ID, colorHex, GetWalletIcon(upgrade.Prices[0].Wallet), title, fontSizeCalc_1.GetFontSize(title, fontSizeCalc_1.UpgradeTitleFontSizeCalc), valueNames.join(', '), isLocked !== null && isLocked !== void 0 ? isLocked : !upgrade.IsThemeUnlocked);
}
exports.CreateUpgradeUI = CreateUpgradeUI;
function GetWalletIcon(wallet) {
    switch (wallet.ID) {
        case "Coins": {
            return 0;
        }
        case "RebirthPoints": {
            return 1;
        }
        default: {
            throw new Error("Wallet with ID: '" + wallet.ID + "' is not handled");
        }
    }
}
exports.GetWalletIcon = GetWalletIcon;

