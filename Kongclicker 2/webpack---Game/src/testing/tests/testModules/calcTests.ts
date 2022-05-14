
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCalcTests = void 0;
var testManager_1 = __webpack_require__(/*! ../../testManager */ "./src/testing/testManager.ts");
var test_1 = __webpack_require__(/*! ../../test */ "./src/testing/test.ts");
var progressionCalculator_1 = __webpack_require__(/*! ../../../data/math/valueCalcs/progressionCalculator */ "./src/data/math/valueCalcs/progressionCalculator.ts");
var progression_1 = __webpack_require__(/*! ../../../data/math/progression */ "./src/data/math/progression.ts");
function InitCalcTests(context) {
    return new testManager_1.TestManager('Calculators', [
        new test_1.Test('progArithElem', 'Check arithmetical progression element', 3, function () {
            var prog = new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical);
            return prog.GetElement(1, 1, 3).AsNumber; // 1 + 1 + 1 = 3
        }),
        new test_1.Test('progArithSum', 'Check arithmetical progression sum', 6, function () {
            var prog = new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Arithmetical);
            return prog.GetSum(1, 1, 3).AsNumber; // 1 + (1 + 1) + (2 + 1) = 1 + 2 + 3 = 6
        }),
        new test_1.Test('progGeomElem', 'Check geometrical progression element', 4, function () {
            var prog = new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical);
            return prog.GetElement(1, 2, 3).AsNumber; // 1 * 2 * 2 = 4
        }),
        new test_1.Test('progGeomSum', 'Check geometrical progression sum', 7, function () {
            var prog = new progressionCalculator_1.ProgressionCalculator(progression_1.ProgressionType.Geometrical);
            return prog.GetSum(1, 2, 3).AsNumber; // 1 + (1 * 2) + (2 * 2) = 1 + 2 + 4 = 7
        }),
    ]);
}
exports.InitCalcTests = InitCalcTests;

