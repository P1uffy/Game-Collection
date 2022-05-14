
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var testResult_1 = __webpack_require__(/*! ./testResult */ "./src/testing/testResult.ts");
var Test = /** @class */ (function () {
    function Test(id, description, rightResult, checkFunction) {
        this.ID = id;
        this.ClassID = this.constructor.name;
        this.description = description;
        this.rightResult = rightResult;
        this.checkFunction = checkFunction;
    }
    Test.prototype.Description = function () {
        return this.description;
    };
    Test.prototype.RightResult = function () {
        return this.rightResult;
    };
    Test.prototype.Check = function () {
        try {
            var result = this.checkFunction();
            if (result == this.rightResult) {
                return new testResult_1.TestResult(result, this.rightResult, true);
            }
            else {
                return new testResult_1.TestResult(result, this.rightResult, false);
            }
        }
        catch (error) {
            return error;
        }
    };
    return Test;
}());
exports.Test = Test;

