
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeTitleFontSizeCalc = exports.MonsterUpgradeFontSizeCalc = exports.GetFontSize = void 0;
function GetFontSize(text, fontSize) {
    if (typeof fontSize == "number") {
        return fontSize;
    }
    else {
        return fontSize(text, text.length);
    }
}
exports.GetFontSize = GetFontSize;
function MonsterUpgradeFontSizeCalc(_text, length) {
    if (length <= 15) {
        return 40;
    }
    else if (length <= 17) {
        return 35;
    }
    else if (length <= 19) {
        return 30;
    }
    else {
        return 25;
    }
}
exports.MonsterUpgradeFontSizeCalc = MonsterUpgradeFontSizeCalc;
function UpgradeTitleFontSizeCalc(_text, length) {
    if (length <= 15) {
        return 45;
    }
    else if (length <= 20) {
        return 40;
    }
    else if (length <= 25) {
        return 35;
    }
    else {
        return 30;
    }
}
exports.UpgradeTitleFontSizeCalc = UpgradeTitleFontSizeCalc;

