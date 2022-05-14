
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progression = exports.ProgressionType = void 0;
var float_1 = __webpack_require__(/*! ./float */ "./src/data/math/float.ts");
var ProgressionType;
(function (ProgressionType) {
    ProgressionType["Arithmetical"] = "Arithmetical";
    ProgressionType["Geometrical"] = "Geometrical";
})(ProgressionType = exports.ProgressionType || (exports.ProgressionType = {}));
var Progression = /** @class */ (function () {
    function Progression(progressionType, first, step) {
        this.classID = this.constructor.name;
        this.progressionType = progressionType;
        this.first = new float_1.Float(first);
        this.step = new float_1.Float(step);
    }
    Object.defineProperty(Progression.prototype, "Type", {
        get: function () {
            return this.progressionType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progression.prototype, "First", {
        get: function () {
            return this.first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Progression.prototype, "Step", {
        get: function () {
            return this.step;
        },
        enumerable: false,
        configurable: true
    });
    Progression.prototype.GetElement = function (n) {
        n = new float_1.Float(n);
        if (this.progressionType == ProgressionType.Arithmetical) {
            return this.first.Plus((this.step).Times(n.Minus(1)));
        }
        else if (this.progressionType == ProgressionType.Geometrical) {
            return this.first.Times((this.step).Pow(n.Minus(1)));
        }
        else {
            throw new Error("Error, progression type is not correct");
        }
    };
    Progression.prototype.GetSum = function (n) {
        n = new float_1.Float(n);
        if (this.progressionType == ProgressionType.Arithmetical) {
            return ((float_1.NewFloat(2).Times(this.first).Plus(this.step.Times(n.Minus(1)))).Divide(2)).Times(n);
        }
        else if (this.progressionType == ProgressionType.Geometrical) {
            return (this.first.Times(this.step.Pow(n).Minus(1))).Divide(this.step.Minus(1));
        }
        else {
            throw new Error("Error, progression type is not correct");
        }
    };
    Progression.prototype.GetSumInterval = function (start, end) {
        start = new float_1.Float(start);
        end = new float_1.Float(end);
        if (this.progressionType == ProgressionType.Arithmetical) {
            start = start.Minus(1);
            var s1 = ((float_1.NewFloat(2).Times(this.first).Plus(this.step.Times(start.Minus(1)))).Divide(2)).Times(start);
            var s2 = ((float_1.NewFloat(2).Times(this.first).Plus(this.step.Times(end.Minus(1)))).Divide(2)).Times(end);
            return s2.Minus(s1);
        }
        else if (this.progressionType == ProgressionType.Geometrical) {
            start = start.Minus(1);
            var s1 = this.first.Times(this.step.Pow(start).Minus(1)).Divide(this.step.Minus(1));
            var s2 = this.first.Times(this.step.Pow(end).Minus(1)).Divide(this.step.Minus(1));
            return s2.Minus(s1);
        }
        else {
            throw new Error("Error, progression type is not correct");
        }
    };
    return Progression;
}());
exports.Progression = Progression;

