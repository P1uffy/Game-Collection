
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestResult = void 0;
var TestResult = /** @class */ (function () {
    function TestResult(Result, RightResult, //todo idk should i give right result or not
    IsPassed) {
        this.Result = Result;
        this.RightResult = RightResult;
        this.IsPassed = IsPassed;
    }
    return TestResult;
}());
exports.TestResult = TestResult;

