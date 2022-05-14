
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitStatTests = void 0;
var testManager_1 = __webpack_require__(/*! ../../testManager */ "./src/testing/testManager.ts");
var test_1 = __webpack_require__(/*! ../../test */ "./src/testing/test.ts");
var stat_1 = __webpack_require__(/*! ../../../game/gameObjects/stat */ "./src/game/gameObjects/stat.ts");
var float_1 = __webpack_require__(/*! ../../../data/math/float */ "./src/data/math/float.ts");
function InitStatTests(context) {
    return new testManager_1.TestManager('Stats', [
        new test_1.Test('statAdd', 'Stat value changing', 5, function () {
            var stat = new stat_1.Stat(null, 'stat', 0, 10);
            stat.Value = float_1.Float.Plus(stat.Value, 10);
            stat.Value = float_1.Float.Minus(stat.Value, 5);
            return stat.Value.AsNumber;
        }),
    ]);
}
exports.InitStatTests = InitStatTests;

