
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUpgradeInfo = exports.UpdateUpgradeButton = void 0;
var fontSizeCalc_1 = __webpack_require__(/*! ../fontSizeCalc */ "./src/ui/fontSizeCalc.ts");
var utilsGUI_1 = __webpack_require__(/*! ../../../javascript/construct3/c3ObjectUtils/utilsGUI */ "./javascript/construct3/c3ObjectUtils/utilsGUI.ts");
var utilsText_1 = __webpack_require__(/*! ../../utils/utilsText */ "./src/utils/utilsText.ts");
var engine_1 = __webpack_require__(/*! ../../../javascript/construct3/engine */ "./javascript/construct3/engine.ts");
var tweak_1 = __webpack_require__(/*! ../../game/tweak */ "./src/game/tweak.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
function UpdateUpgradeButton(upgrade) {
    utilsGUI_1.SetButtonEnabled("buyUpgrade::" + upgrade.ID, upgrade.IsCanBuy() && upgrade.IsThemeUnlocked);
}
exports.UpdateUpgradeButton = UpdateUpgradeButton;
function UpdateUpgradeInfo(upgrade, params) {
    if (params.ShowLevel == undefined)
        params.ShowLevel = true;
    if (params.ShowLevel) {
        utilsGUI_1.SetText("upgradeLevel::" + upgrade.ID, "" + utilsText_1.GetNumberText(upgrade.Level.Value));
    }
    for (var i = 0; i < upgrade.Tweaks.length; i++) {
        var valueTextName = "upgradeValue::" + upgrade.ID + "::" + (i + 1);
        // If not set
        var tweakParams = params.Tweaks ? params.Tweaks[i] : undefined;
        if (!tweakParams) {
            tweakParams = {
                DataType: "Data"
            };
        }
        else {
            if (!tweakParams.DataType)
                tweakParams.DataType = "Data";
        }
        //todo detailed options for each price/tweak
        var valueText = void 0;
        if (tweakParams.DataType == "Data") {
            valueText = GetUpgradeTweakDataInfo(upgrade, i, 0, tweakParams); //todo 0 here is temp solution
        }
        else if (tweakParams.DataType == "Tweak") {
            valueText = GetUpgradeTweakInfo(upgrade, i, tweakParams);
        }
        else {
            throw new Error("Not handled DataType param value: " + tweakParams.DataType);
        }
        utilsGUI_1.SetText(valueTextName, valueText);
        engine_1.Engine.UIManager.SetTextSize(valueTextName, fontSizeCalc_1.GetFontSize(valueText, params.FontSize));
    }
    for (var i = 0; i < upgrade.Prices.length; i++) {
        var priceTextName = "upgradePrice::" + upgrade.ID + "::" + (i + 1);
        var priceText = GetUpgradePriceInfo(upgrade, i, params);
        utilsGUI_1.SetText(priceTextName, priceText);
        //todo do sizing for price text too
    }
}
exports.UpdateUpgradeInfo = UpdateUpgradeInfo;
// ------------------------------ Utils Methods -------------------------------------
function GetUpgradePriceInfo(upgrade, priceID, params) {
    if (upgrade.Level.IsMaxed) {
        if (!params.DisplayIfMaxed)
            params.DisplayIfMaxed = "Maxed";
        return params.DisplayIfMaxed;
    }
    else {
        return utilsText_1.GetNumberText(upgrade.GUI.GetPriceValueOnLevel(priceID, null));
    }
}
function GetUpgradeTweakInfo(upgrade, tweakID, params) {
    var tweak = upgrade.GUI.GetTweak(tweakID);
    var prefix = "";
    if (!params.Prefix) {
        if (tweak.Function.Priority == tweak_1.TweakPriority.Multiply) {
            prefix = "x";
        }
    }
    else {
        prefix = params.Prefix;
    }
    var postfix = "";
    if (!params.Postfix) {
        if (tweak.Function.Priority == tweak_1.TweakPriority.Percent) {
            postfix = "%";
        }
    }
    else {
        postfix = params.Postfix;
    }
    var valueIfNotBought = new float_1.Float(0);
    if (!params.DisplayIfNotBought) {
        if (tweak.Function.Priority == tweak_1.TweakPriority.Multiply) {
            valueIfNotBought = new float_1.Float(1);
        }
    }
    else {
        valueIfNotBought = params.DisplayIfNotBought;
    }
    if (upgrade.Level.IsMaxed) {
        return "" + utilsText_1.GetNumberText(upgrade.GUI.GetTweakValue(tweak)) + postfix;
    }
    else {
        return "" + prefix + utilsText_1.GetNumberText(upgrade.GUI.GetTweakValue(tweak, valueIfNotBought)) + postfix + " \u279C "
            + ("" + prefix + utilsText_1.GetNumberText(upgrade.GUI.GetTweakValueOnLevel(tweak, null)) + postfix);
    }
}
//todo remove code duplication
function GetUpgradeTweakDataInfo(upgrade, tweakID, gameDataID, params) {
    var tweak = upgrade.GUI.GetTweak(tweakID);
    var prefix = "";
    if (!params.Prefix) {
        if (tweak.Function.Priority == tweak_1.TweakPriority.Multiply) {
            prefix = "x";
        }
    }
    else {
        prefix = params.Prefix;
    }
    var postfix = "";
    if (!params.Postfix) {
        if (tweak.Function.Priority == tweak_1.TweakPriority.Percent) {
            postfix = "%";
        }
    }
    else {
        postfix = params.Postfix;
    }
    if (!params.FormatTime)
        params.FormatTime = "Number";
    if (!params.BaseValue)
        params.BaseValue = 0;
    if (upgrade.Level.IsMaxed) {
        var valueText = void 0;
        if (params.FormatTime == "Number") {
            valueText = utilsText_1.GetNumberText(upgrade.GUI.GetTweakDataValue(tweak, gameDataID).Plus(params.BaseValue));
        }
        else if (params.FormatTime == "Time") {
            valueText = utilsText_1.GetTimeText(upgrade.GUI.GetTweakDataValue(tweak, gameDataID).Plus(params.BaseValue));
        }
        return "" + prefix + valueText + postfix;
    }
    else {
        var beforeValueText = void 0;
        var afterValueText = void 0;
        //todo IT CAN BE DONE BETTER!!!
        if (params.FormatTime == "Number") {
            beforeValueText = utilsText_1.GetNumberText(upgrade.GUI.GetTweakDataValue(tweak, gameDataID).Plus(params.BaseValue));
            afterValueText = utilsText_1.GetNumberText(upgrade.GUI.GetTweakDataValueOnLevel(tweak, gameDataID, null).Plus(params.BaseValue));
        }
        else if (params.FormatTime == "Time") {
            beforeValueText = utilsText_1.GetTimeText(upgrade.GUI.GetTweakDataValue(tweak, gameDataID).Plus(params.BaseValue));
            afterValueText = utilsText_1.GetTimeText(upgrade.GUI.GetTweakDataValueOnLevel(tweak, gameDataID, null).Plus(params.BaseValue));
        }
        return "" + prefix + beforeValueText + postfix + " \u279C "
            + ("" + prefix + afterValueText + postfix);
    }
}

