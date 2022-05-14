
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
var float_1 = __webpack_require__(/*! ../data/math/float */ "./src/data/math/float.ts");
var Random;
(function (Random) {
    var Utils;
    (function (Utils) {
        /**
         * @param chance 0-100
         * @param count
         * @return Returns count of happened events
         */
        function BoolCount(chance, count) {
            chance = float_1.RawFloatValue(chance);
            count = float_1.RawFloatValue(count);
            var happened = 0;
            for (var i = 0; i < count; i++) {
                happened += content_1.RNG.bool(chance / 100) ? 1 : 0;
            }
            return happened;
        }
        Utils.BoolCount = BoolCount;
    })(Utils = Random.Utils || (Random.Utils = {}));
})(Random = exports.Random || (exports.Random = {}));

