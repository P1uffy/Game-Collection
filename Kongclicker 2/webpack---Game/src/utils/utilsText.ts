
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTimeText = exports.GetLinesCount = exports.ShortExpNumber = exports.GetNumberText = exports.NumberWithCommas = exports.FormatTime = exports.FormatTimeInSeconds = exports.RemoveBBCode = exports.ParsePath = exports.Whitespace = exports.GetPropertyList = exports.UpperFirstChar = exports.nums = void 0;
var float_1 = __webpack_require__(/*! ../data/math/float */ "./src/data/math/float.ts");
var time_1 = __webpack_require__(/*! ../data/time */ "./src/data/time.ts");
var utilsMath_1 = __webpack_require__(/*! ./utilsMath */ "./src/utils/utilsMath.ts");
var standardNotation_1 = __webpack_require__(/*! ../data/math/numbers/standardNotation */ "./src/data/math/numbers/standardNotation.ts");
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
exports.nums = ['K', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'd', 'U', 'D', 'Tr', 'Qt', 'Qn', 'Sd', 'Sp',
    'Od', 'Nd', 'Vg', 'Uv', 'Du', 'Ts', 'Qtv', 'Qiv', '!', '?', '@', '#', '&',
    '🔰', '⚜️', '💗', '💛', '💚', '💙', '💜', '🖤', '💘'];
for (var i = 0; i < exports.nums.length; i++) {
    exports.nums[i] = exports.nums[i].toLowerCase();
}
function UpperFirstChar(str) {
    if (str) {
        return "" + str[0].toUpperCase() + str.substring(1);
    }
    else {
        throw new Error('String was empty');
    }
}
exports.UpperFirstChar = UpperFirstChar;
function GetPropertyList(obj, depth, showName) {
    if (depth === void 0) { depth = 1; }
    if (showName === void 0) { showName = true; }
    var text = '';
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            var valueText = '';
            // @ts-ignore
            if (typeof obj[property] != 'object' && obj[property] !== null) {
                // @ts-ignore
                valueText = obj[property];
            }
            else {
                // @ts-ignore
                valueText += GetPropertyList(obj[property], 2);
            }
            var nameText = showName ? property + ": " : '';
            if (property != 'contentID' && property != 'varID' && property != 'lang')
                text += "\n" + Whitespace(3 * depth) + "[b]" + nameText + "[/b]" + valueText;
        }
    }
    return text;
}
exports.GetPropertyList = GetPropertyList;
function Whitespace(count) {
    var str = '';
    for (var i = 0; i < count; i++)
        str += ' ';
    return str;
}
exports.Whitespace = Whitespace;
function ParsePath(str) {
    return str.split('.');
}
exports.ParsePath = ParsePath;
function RemoveBBCode(text) {
    return text.replace(/\[\/?(?:b|i|u|url|quote|code|img|color|size)*?.*?\]/img, '');
}
exports.RemoveBBCode = RemoveBBCode;
function FormatTimeInSeconds(time) {
    var seconds = float_1.Float.Floor(time.TotalSeconds);
    var hours;
    if (seconds.IsMoreOrEqual(3600)) {
        hours = float_1.Float.Floor(seconds.Divide(3600));
        seconds = float_1.Float.Minus(seconds, float_1.Float.Times(hours, 3600));
    }
    else
        hours = new float_1.Float(0);
    var minutes;
    if (seconds.IsMoreOrEqual(60)) {
        minutes = float_1.Float.Floor(seconds.Divide(60));
        seconds = float_1.Float.Minus(seconds, float_1.Float.Times(minutes, 60));
    }
    else
        minutes = new float_1.Float(0);
    return FormatTime(hours, minutes, seconds);
}
exports.FormatTimeInSeconds = FormatTimeInSeconds;
function FormatTime(hours, minutes, seconds) {
    hours = float_1.RawFloatValue(hours);
    minutes = float_1.RawFloatValue(minutes);
    seconds = float_1.RawFloatValue(seconds);
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}
exports.FormatTime = FormatTime;
function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports.NumberWithCommas = NumberWithCommas;
function GetNumberText(number, notation, floats) {
    if (floats === void 0) { floats = 2; }
    if (!notation) {
        notation = content_1.Content.Settings.System.Notation.Value;
    }
    var float = new float_1.Float(number);
    if (float.IsLess(1000)) {
        if (utilsMath_1.FractionalPart(float.AsNumber).IsMore(0)) {
            return float.ToStringFixed(floats);
        }
        else {
            return float.ToStringFixed(0);
        }
    }
    else {
        if (notation == "Scientific") {
            var str = float.ToStringExtendedFixed(floats);
            var parts = str.split('+');
            var newSecondPart = NumberWithCommas(parseInt(parts[1]));
            return parts[0] + newSecondPart;
        }
        else {
            var letter = new standardNotation_1.StandardNotation();
            return letter.format(float.AsDecimal, 2, 0);
        }
    }
    // number = FloatOrNumberValue(number);
    // floats = FloatOrNumberValue(floats);
    //todo implement floats and notation settings
    /*
    if (floats == -1) floats = GetOptionValue(Lang.Settings.Floats);

    if (notation == -1) {
        notation = GetOptionValue(Lang.Settings.Notation);
    }
    */
    // number = parseFloat('' + number);
    // if (!isInteger(number)) {
    //     number = parseFloat(number.toFixed(floats));
    // }
    //
    // if (notation === 'letter') {
    //     if (number > 999) {
    //         return ValueShort(number, floats);
    //     }
    //     else {
    //         return number.toString();
    //     }
    // }
    // else if (notation === 'scientific') {
    //     if (number > 999) {
    //         const numStr = parseFloat(number.toString()).toExponential(floats);
    //         return ShortExpNumber(numStr);
    //     }
    //     else {
    //         return number.toString();
    //     }
    // }
    // else {
    //     throw new Error(`Notation is not implemented: ${notation}`);
    // }
}
exports.GetNumberText = GetNumberText;
function ShortExpNumber(numStr) {
    var before = "e+";
    var after = "e";
    return numStr.toString().replace(before, after);
}
exports.ShortExpNumber = ShortExpNumber;
// export function ValueShort(num: number, floats: number): string {
//     if (!isFinite(num)) return 'Infinity';
//     if (num < 1e3 || num >= parseFloat('1e' + 3 * (nums.length))) return Math.round(num).toString();
//     let i = 0;
//
//     while (num >= 1000) {
//         num /= 1000;
//         i++;
//     }
//
//     num = Math.round(num * 1000) / 1000;
//
//     if (num >= 1000) {
//         num /= 1000;
//         i++;
//         num = Math.round(num * 1000) / 1000;
//     }
//
//     num = parseFloat(num.toFixed(floats));
//     return (num + nums[i - 1]).toString();
// }
/*
function ValueShortBig(num: BigNumber, floats: number): string {
    if (!num.isFinite()) {
        return 'Infinity';
    }
    if (num < new BigNumber(1e3) || num >= new BigNumber(parseFloat('1e' + 3 * (nums.length)))) {
        return num.dp(0, BigNumber.ROUND_UP).toString();
    }
    let i = 0;

    while (num >= new BigNumber(1000)) {
        num = num.dividedBy(new BigNumber(1000));
        i++;
    }

    //num = Math.round(num * 1000) / 1000;

    if (num >= new BigNumber(1000)) {
        num = num.dividedBy(new BigNumber(1000));
        i++;
        //num = Math.round(num * 1000) / 1000;
    }

    const numStr = parseFloat(num.toFixed(floats));
    return (numStr + nums[i - 1]).toString();
}
*/
function GetLinesCount(str) {
    return (str.match(/\n/g) || '').length + 1;
}
exports.GetLinesCount = GetLinesCount;
function GetTimeText(timeOrMS, showOnlyTwo) {
    if (showOnlyTwo === void 0) { showOnlyTwo = true; }
    var seconds;
    if (timeOrMS instanceof time_1.Time) {
        seconds = timeOrMS.TotalSeconds;
    }
    else {
        timeOrMS = new float_1.Float(timeOrMS);
        seconds = timeOrMS.Divide(1000);
    }
    seconds = float_1.Float.Max(0, seconds);
    /*
    const centuries = Float.Floor(seconds.Divide(3153600000));
    seconds.DoMinus(Float.Times(centuries, 3153600000));
    const years = Float.Floor(seconds.Divide(31536000));
    seconds.DoMinus(Float.Times(years, 31536000));
    const months = Float.Floor(seconds.Divide(2629743));
    seconds.DoMinus(Float.Times(months, 2629743));
    const weeks = Float.Floor(seconds.Divide(604800));
    seconds.DoMinus(Float.Times(weeks, 604800));
    const days = Float.Floor(seconds.Divide(86400));
    seconds.DoMinus(Float.Times(days, 86400));
    */
    var hours = float_1.Float.Floor(seconds.Divide(3600));
    seconds = float_1.Float.Minus(seconds, float_1.Float.Times(hours, 3600));
    var minutes = float_1.Float.Floor(seconds.Divide(60));
    seconds = float_1.Float.Minus(seconds, float_1.Float.Times(minutes, 60));
    var text = '';
    var parts = [];
    //todo make days/weeks/etc optional
    /*
    text += (years > 0 ? `${years}y ` : '');
    text += (months > 0 ? `${months}mth ` : '');
    text += (weeks > 0 ? `${weeks}w ` : '');
    text += (days > 0 ? `${days}d ` : '');
    */
    if (hours.IsMore(0)) {
        parts.push(hours.IsLess(1000) ? GetNumberText(hours) + "h " : GetNumberText(hours) + " hours");
    }
    if (minutes.IsMore(0) && hours.IsLess(1000)) {
        parts.push(GetNumberText(minutes) + "m ");
    }
    if (seconds.IsMore(0) && hours.IsLess(1000)) {
        if (parts.length !== 0) {
            parts.push(GetNumberText(float_1.Float.Floor(seconds)) + "s ");
        }
        else {
            if (utilsMath_1.FractionalPart(seconds).IsNotEqual(0)) {
                parts.push(seconds.ToFixed(2) + "s ");
            }
            else {
                parts.push(GetNumberText(float_1.Float.Floor(seconds)) + "s ");
            }
        }
    }
    if (seconds.IsLess(0)) {
        parts.push(GetNumberText(float_1.Float.Floor(seconds.Times(1000))) + "ms ");
    }
    for (var i = 0; i < parts.length; i++) {
        text += parts[i];
        if (showOnlyTwo && i === 1) {
            return text.trimEnd();
        }
    }
    return text.trimEnd();
}
exports.GetTimeText = GetTimeText;

