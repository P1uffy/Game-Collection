
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestManager = void 0;
var objectStorage_1 = __webpack_require__(/*! ../data/objectStorage */ "./src/data/objectStorage.ts");
var TestManager = /** @class */ (function (_super) {
    __extends(TestManager, _super);
    function TestManager(ModuleName, tests) {
        var _this = _super.call(this, tests) || this;
        _this.ModuleName = ModuleName;
        return _this;
    }
    TestManager.prototype.CheckAll = function (detailedLog, showOnlyFailed, showStartingInfo) {
        if (detailedLog === void 0) { detailedLog = false; }
        if (showOnlyFailed === void 0) { showOnlyFailed = false; }
        if (showStartingInfo === void 0) { showStartingInfo = false; }
        var testsPassed = 0;
        var startTime = performance.now();
        if (showStartingInfo) {
            console.log("TestModule: '" + this.ModuleName + "'\nTesting started for " + this.Items.length + " items..");
        }
        var i = 1;
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var test = _a[_i];
            var result = test.Check();
            if (result instanceof Error) {
                if (detailedLog) {
                    console.log(i + ". " + test.Description() + ": %cERROR! \n > Error message: " + result.message, 'color: #ff4db8');
                    throw result;
                }
            }
            else {
                var testResult = result;
                if (testResult.IsPassed) {
                    testsPassed++;
                    if (!showOnlyFailed) {
                        console.log(i + ". " + test.Description() + ": %cPASSED!", 'color: #42a828');
                    }
                }
                else {
                    console.log(i + ". " + test.Description() + ": %cFAILED!"
                        + ("\n > Right result: " + test.RightResult())
                        + ("\n > Result: " + testResult.Result), "color: #ff4d4d");
                }
            }
            i++;
        }
        var elapsedTime = performance.now() - startTime;
        var allPassed = testsPassed == this.Items.length;
        console.log("%cTestModule '" + this.ModuleName + "' checking completed!"
            + ("\nTests passed: " + testsPassed + " / " + this.Items.length)
            + ("\nElapsed time: " + Math.floor(elapsedTime) + " ms."), "color:" + (allPassed ? '#42a828' : '#ff4d4d'));
    };
    return TestManager;
}(objectStorage_1.ObjectStorage));
exports.TestManager = TestManager;

