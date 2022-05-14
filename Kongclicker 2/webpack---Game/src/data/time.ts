
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = exports.UniqueID = void 0;
var float_1 = __webpack_require__(/*! ./math/float */ "./src/data/math/float.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var UniqueID = /** @class */ (function () {
    function UniqueID(ClassID) {
        this.ClassID = ClassID;
        this.id = 0;
    }
    Object.defineProperty(UniqueID.prototype, "LastID", {
        get: function () {
            return this.ClassID + "-" + this.id;
        },
        enumerable: false,
        configurable: true
    });
    UniqueID.prototype.GetNextID = function () {
        this.id++;
        return this.ClassID + "-" + this.id;
    };
    return UniqueID;
}());
exports.UniqueID = UniqueID;
//todo implements ISerializable?
var Time = /** @class */ (function () {
    function Time(hours, minutes, seconds, ms) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (ms === void 0) { ms = 0; }
        this.ClassID = this.constructor.name;
        this.ID = Time.UniqueID.GetNextID();
        hours = new float_1.Float(hours);
        minutes = new float_1.Float(minutes);
        seconds = new float_1.Float(seconds);
        ms = new float_1.Float(ms);
        this.milliseconds = (hours.Times(3600).Times(1000)).Plus(minutes.Times(60).Times(1000)).Plus(seconds.Times(1000)).Plus(ms);
    }
    Object.defineProperty(Time.prototype, "TotalMilliseconds", {
        get: function () {
            return this.milliseconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "TotalSeconds", {
        get: function () {
            return this.milliseconds.Divide(1000);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "TotalMinutes", {
        get: function () {
            return this.TotalSeconds.Divide(60);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "TotalHours", {
        get: function () {
            return this.TotalMinutes.Divide(60);
        },
        enumerable: false,
        configurable: true
    });
    Time.prototype.Add = function (time) {
        this.milliseconds = this.milliseconds.Plus(time.TotalMilliseconds);
    };
    Time.prototype.Subtract = function (time) {
        this.milliseconds = this.milliseconds.Minus(time.TotalMilliseconds);
    };
    Time.UniqueID = new UniqueID("Time");
    __decorate([
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Time.prototype, "milliseconds", void 0);
    return Time;
}());
exports.Time = Time;

