
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpolateColors = exports.RGB255ToC3Color = exports.RGBToC3Color = exports.ExternalRGB255ToCurrentRGB255 = void 0;
var d3_interpolate_1 = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
var d3_color_1 = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
function ExternalRGB255ToCurrentRGB255(rgb) {
    return {
        r255: "r" in rgb ? rgb.r : rgb.R,
        g255: "g" in rgb ? rgb.g : rgb.G,
        b255: "b" in rgb ? rgb.b : rgb.B,
    };
}
exports.ExternalRGB255ToCurrentRGB255 = ExternalRGB255ToCurrentRGB255;
function RGBToC3Color(color) {
    return [color.r, color.g, color.b];
}
exports.RGBToC3Color = RGBToC3Color;
function RGB255ToC3Color(color) {
    return [color.r255 / 255, color.g255 / 255, color.b255 / 255];
}
exports.RGB255ToC3Color = RGB255ToC3Color;
function InterpolateColors(color1, color2, progress) {
    var colorValue = d3_interpolate_1.interpolateRgb(color1, color2)(progress / 100);
    return ExternalRGB255ToCurrentRGB255(d3_color_1.rgb(colorValue));
}
exports.InterpolateColors = InterpolateColors;

