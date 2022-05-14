
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.ErrorTimerEvent = exports.SaveGameTimerEvent = exports.MonsterSpawnTimerEvent = exports.TimerEvent = void 0;
var gameData_1 = __webpack_require__(/*! ./game/gameData */ "./src/data/game/gameData.ts");
var gameObject_1 = __webpack_require__(/*! ../game/gameObject */ "./src/game/gameObject.ts");
var float_1 = __webpack_require__(/*! ./math/float */ "./src/data/math/float.ts");
var time_1 = __webpack_require__(/*! ./time */ "./src/data/time.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var content_1 = __webpack_require__(/*! ../content/content */ "./src/content/content.ts");
var gameSave_1 = __webpack_require__(/*! ../game/managers/saveSystem/gameSave */ "./src/game/managers/saveSystem/gameSave.ts");
var TimerEvent = /** @class */ (function () {
    function TimerEvent(onTimer) {
        this.onTimer = onTimer;
    }
    TimerEvent.prototype.OnEvent = function () {
        this.onTimer();
    };
    return TimerEvent;
}());
exports.TimerEvent = TimerEvent;
var MonsterSpawnTimerEvent = /** @class */ (function () {
    function MonsterSpawnTimerEvent() {
    }
    MonsterSpawnTimerEvent.prototype.OnEvent = function () {
        content_1.Managers.Fight.CreateNextMonster();
    };
    return MonsterSpawnTimerEvent;
}());
exports.MonsterSpawnTimerEvent = MonsterSpawnTimerEvent;
var SaveGameTimerEvent = /** @class */ (function () {
    function SaveGameTimerEvent() {
    }
    SaveGameTimerEvent.prototype.OnEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(content_1.SystemData.IsContentLoaded && content_1.SystemData.IsAutoSaveEnabledC3)) return [3 /*break*/, 2];
                        return [4 /*yield*/, gameSave_1.SaveGame()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return SaveGameTimerEvent;
}());
exports.SaveGameTimerEvent = SaveGameTimerEvent;
var ErrorTimerEvent = /** @class */ (function () {
    function ErrorTimerEvent(object, description) {
        this.object = object;
        this.description = description;
    }
    ErrorTimerEvent.prototype.OnEvent = function () {
        console.error("[ErrorTimerEvent] happened in object: ");
        console.log(this.object);
        throw new Error(this.description);
    };
    return ErrorTimerEvent;
}());
exports.ErrorTimerEvent = ErrorTimerEvent;
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(timerStorage, id, duration, speed, startOnCreate, repeat, onTimerEvent, saveProgress) {
        if (saveProgress === void 0) { saveProgress = true; }
        var _this = _super.call(this, timerStorage, gameObject_1.ClassName.Timer, id) || this;
        if (duration instanceof time_1.Time) {
            _this.DurationData = new gameData_1.GameData('Duration', duration.TotalMilliseconds);
        }
        else {
            _this.DurationData = new gameData_1.GameData('Duration', duration);
        }
        _this.SpeedData = new gameData_1.GameData('Speed', speed);
        _this.startOnCreate = startOnCreate;
        _this.repeat = repeat;
        _this.onTimerEvent = onTimerEvent;
        _this.progressInMS = new float_1.Float(0); // progress in milliseconds //todo convert to time?
        _this.active = false;
        _this.paused = false;
        _this.baseStartOnCreate = _this.startOnCreate;
        _this.baseRepeat = _this.repeat;
        _this.baseActive = _this.active;
        _this.saveProgress = saveProgress;
        if (_this.startOnCreate) {
            _this.Start();
        }
        return _this;
    }
    Timer.prototype.ResetData = function () {
        this.Stop();
        this.active = this.baseActive;
        this.progressInMS = new float_1.Float(0);
        this.startOnCreate = this.baseStartOnCreate;
        this.repeat = this.baseRepeat;
        if (this.startOnCreate) {
            this.Start();
        }
    };
    Object.defineProperty(Timer.prototype, "StartOnCreate", {
        get: function () {
            return this.startOnCreate;
        },
        set: function (value) {
            this.startOnCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "Repeat", {
        get: function () {
            return this.repeat;
        },
        set: function (value) {
            this.repeat = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "OnTimerEvent", {
        get: function () {
            return this.onTimerEvent;
        },
        set: function (value) {
            this.onTimerEvent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "Duration", {
        get: function () {
            return this.DurationData.Value;
        },
        /**
         * Duration of timer in milliseconds
         */
        set: function (duration) {
            this.DurationData.BaseValue = duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "Speed", {
        get: function () {
            return this.SpeedData.Value;
        },
        set: function (speed) {
            this.SpeedData.BaseValue = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "IsActive", {
        get: function () {
            return this.active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "IsPaused", {
        get: function () {
            return this.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "Elapsed", {
        get: function () {
            return this.progressInMS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "Progress", {
        /**
         * Progress of timer in milliseconds
         */
        get: function () {
            var progress = this.progressInMS.Divide(this.Duration).Times(100);
            progress = float_1.Float.Max(progress, 0);
            progress = float_1.Float.Min(progress, 100);
            return progress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "ElapsedTime", {
        get: function () {
            return new time_1.Time(0, 0, 0, this.Elapsed);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "RemainedTime", {
        get: function () {
            return new time_1.Time(0, 0, 0, float_1.Float.Minus(this.Duration, this.Elapsed));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "DurationTime", {
        get: function () {
            return new time_1.Time(0, 0, 0, this.progressInMS);
        },
        enumerable: false,
        configurable: true
    });
    Timer.prototype.StopAndReset = function () {
        this.progressInMS = new float_1.Float(0);
        this.active = false;
        this.paused = false;
    };
    Timer.prototype.Update = function (dt) {
        _super.prototype.Update.call(this, dt);
        if (this.active && !this.paused) {
            this.progressInMS = this.progressInMS.Plus(dt.TotalMilliseconds.Times(this.Speed));
            if (this.progressInMS.IsMore(this.DurationData.Value)) {
                this.StopAndReset();
                this.onTimerEvent.OnEvent();
                if (this.repeat) {
                    this.Start();
                }
            }
        }
    };
    Timer.prototype.start = function () {
        this.StopAndReset();
        this.active = true;
    };
    Timer.prototype.Start = function (restart) {
        if (restart === void 0) { restart = false; }
        //console.log('Starting timer...');
        if (this.IsActive) {
            if (restart) {
                this.StopAndReset();
                this.start();
            }
            else {
                if (this.IsPaused) {
                    this.Unpause();
                }
            }
        }
        else {
            this.start();
        }
    };
    Timer.prototype.Stop = function () {
        //console.log('Stopping timer...');
        if (this.IsActive) {
            this.StopAndReset();
            return true;
        }
        else {
            return false;
        }
    };
    Timer.prototype.Toggle = function (enabled) {
        if (enabled) {
            this.Start();
        }
        else {
            this.Stop();
        }
    };
    Timer.prototype.Pause = function () {
        if (!this.IsPaused) {
            this.paused = true;
            return true;
        }
        else {
            return false;
        }
    };
    Timer.prototype.Unpause = function () {
        if (this.IsPaused) {
            this.paused = false;
            return true;
        }
        else {
            return false;
        }
        // maybe exception if else?
    };
    Timer.prototype.InitFrom = function (_storage, oldTimer) {
        this.paused = oldTimer.paused;
        this.startOnCreate = oldTimer.startOnCreate;
        this.repeat = oldTimer.repeat;
        if (oldTimer.IsActive && this.saveProgress) {
            this.Start();
            this.progressInMS = oldTimer.progressInMS;
        }
    };
    __decorate([
        class_transformer_1.Expose()
    ], Timer.prototype, "startOnCreate", void 0);
    __decorate([
        class_transformer_1.Expose()
    ], Timer.prototype, "repeat", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "onTimerEvent", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "SpeedData", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "DurationData", void 0);
    __decorate([
        class_transformer_1.Expose(),
        class_transformer_1.Type(function () { return float_1.Float; })
    ], Timer.prototype, "progressInMS", void 0);
    __decorate([
        class_transformer_1.Expose()
    ], Timer.prototype, "active", void 0);
    __decorate([
        class_transformer_1.Expose()
    ], Timer.prototype, "paused", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "saveProgress", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "baseStartOnCreate", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "baseRepeat", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Timer.prototype, "baseActive", void 0);
    return Timer;
}(gameObject_1.GameObject));
exports.Timer = Timer;

