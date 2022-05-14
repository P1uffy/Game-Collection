
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ../../data/math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
//todo rewrite
var Points = /** @class */ (function (_super) {
    __extends(Points, _super);
    function Points(objectStorage, id, level, points, maxPoints, maxPointsStep, xpMaxCalc, OnLevelUp) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Points, id) || this;
        _this.OnLevelUp = OnLevelUp;
        _this.Level = level;
        _this.points = new float_1.Float(points);
        _this.maxPoints = new float_1.Float(maxPoints);
        _this.maxPointsStep = new float_1.Float(maxPointsStep);
        _this.MaxPointsCalc = xpMaxCalc;
        _this.totalPoints = new float_1.Float(0);
        _this.basePoints = _this.points;
        return _this;
    }
    Points.prototype.Reset = function () {
        this.Level.Reset();
        this.totalPoints = new float_1.Float(0);
        this.points = this.basePoints;
    };
    Object.defineProperty(Points.prototype, "MaxPoints", {
        get: function () {
            return this.maxPoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points.prototype, "MaxPointsStep", {
        get: function () {
            return this.maxPointsStep;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points.prototype, "TotalPointsAdded", {
        get: function () {
            return this.totalPoints;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points.prototype, "LevelValue", {
        get: function () {
            return this.Level.Value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points.prototype, "LevelMaxValue", {
        get: function () {
            return this.Level.ValueMax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Points.prototype, "Points", {
        get: function () {
            return this.points;
        },
        enumerable: false,
        configurable: true
    });
    Points.prototype.AddPoints = function (value, optimizedMath) {
        if (optimizedMath === void 0) { optimizedMath = true; }
        value = new float_1.Float(value);
        this.points = float_1.Float.Plus(this.points, value);
        this.totalPoints = this.totalPoints.Plus(value);
        this.checkForLevelUp(optimizedMath);
    };
    Object.defineProperty(Points.prototype, "Progress", {
        get: function () {
            return this.Points.Divide(this.MaxPoints).Times(100);
        },
        enumerable: false,
        configurable: true
    });
    Points.prototype.checkForLevelUp = function (optimizedMath) {
        if (optimizedMath === void 0) { optimizedMath = true; }
        if (this.Points.IsMoreOrEqual(this.MaxPoints)) {
            if (optimizedMath) {
                this.levelUp();
            }
            else {
                this.levelUpOnce();
            }
        }
    };
    Points.prototype.levelUp = function () {
        var i = 0;
        var count = -1;
        var prevRight = 1;
        var right = 1;
        var rightFound = false;
        while (!rightFound) {
            i++;
            var sum = this.MaxPointsCalc.GetSum(this.MaxPoints, this.MaxPointsStep, right);
            if (this.points.IsMore(sum)) {
                prevRight = right;
                right = Math.floor(right * 2);
            }
            else {
                rightFound = true;
                count = prevRight;
            }
            if (i > 1000) {
                throw new Error("Points: Infinite cycle (1)");
            }
        }
        this.levelUpCount(new float_1.Float(count));
        if (count > 100) {
            this.levelUp();
        }
        else {
            this.levelUpOnce();
        }
        if (this.points.IsLess(0)) {
            this.points = new float_1.Float(0);
            console.warn('Points become negative');
        }
        this.checkForLevelUp();
    };
    Points.prototype.levelUpCount = function (count) {
        var sum = this.MaxPointsCalc.GetSum(this.MaxPoints, this.MaxPointsStep, count);
        this.points = this.points.Minus(sum);
        //const maxPointsBefore = this.maxPoints;
        this.maxPoints = this.MaxPointsCalc.GetElement(this.maxPoints, this.maxPointsStep, count.Plus(1));
        //const levelBefore = this.Level.Value;
        this.Level.Value = this.Level.Value.Plus(count);
        //console.log(`~LevelUpCount(${count})\n - Level ${levelBefore} -> ${this.LevelValue}\n - Sum: ${sum}\n - MaxPoints: ${maxPointsBefore} -> ${this.maxPoints}`);
        if (this.OnLevelUp) {
            this.OnLevelUp(new float_1.Float(count));
        }
    };
    Points.prototype.levelUpOnce = function () {
        if (this.points.IsMoreOrEqual(this.MaxPoints)) {
            this.points = this.Points.Minus(this.MaxPoints);
            this.Level.Value = float_1.Float.Plus(this.Level.Value, 1);
            this.maxPoints = this.MaxPointsCalc.GetNextElement(this.MaxPoints, this.MaxPointsStep);
            if (this.OnLevelUp) {
                this.OnLevelUp(new float_1.Float(1));
            }
            this.checkForLevelUp(false);
        }
    };
    Points.prototype.InitFrom = function (_storage, item) {
        this.AddPoints(item.TotalPointsAdded);
    };
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "Level", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "points", void 0);
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Points.prototype, "totalPoints", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "maxPoints", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "maxPointsStep", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "MaxPointsCalc", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "OnLevelUp", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Points.prototype, "basePoints", void 0);
    return Points;
}(gameObject_1.GameObject));
exports.Points = Points;

