
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
exports.Idler = exports.IdlerTimerEvent = void 0;
var timer_1 = __webpack_require__(/*! ../../data/timer */ "./src/data/timer.ts");
var wallet_1 = __webpack_require__(/*! ./wallet */ "./src/game/gameObjects/wallet.ts");
var gameData_1 = __webpack_require__(/*! ../../data/game/gameData */ "./src/data/game/gameData.ts");
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var content_1 = __webpack_require__(/*! ../../content/content */ "./src/content/content.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var IdlerTimerEvent = /** @class */ (function () {
    function IdlerTimerEvent(wallet, value) {
        this.wallet = wallet;
        this.value = value;
    } //private idler: Idler
    IdlerTimerEvent.prototype.OnEvent = function () {
        this.wallet.Add(this.value.Value);
    };
    return IdlerTimerEvent;
}());
exports.IdlerTimerEvent = IdlerTimerEvent;
var Idler = /** @class */ (function (_super) {
    __extends(Idler, _super);
    function Idler(objectStorage, id, wallet, value, time) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Idler, id) || this;
        _this.wallet = wallet;
        _this.valueData = new gameData_1.GameData('value', value);
        _this.timer = new timer_1.Timer(content_1.TimerStorage, id + ".Timer", time, 1, false, true, new IdlerTimerEvent(_this.wallet, _this.valueData));
        return _this;
    }
    Idler.prototype.Update = function (dt) {
        _super.prototype.Update.call(this, dt);
    };
    Idler.prototype.Start = function () {
        this.Timer.Start(false);
    };
    Object.defineProperty(Idler.prototype, "Wallet", {
        get: function () {
            return this.wallet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "ValueData", {
        get: function () {
            return this.valueData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "Value", {
        get: function () {
            return this.valueData.Value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "Timer", {
        get: function () {
            return this.timer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "Duration", {
        get: function () {
            return this.timer.Duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "DurationTime", {
        get: function () {
            return this.timer.DurationTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Idler.prototype, "IsStarted", {
        get: function () {
            return this.Timer.IsActive;
        },
        enumerable: false,
        configurable: true
    });
    Idler.prototype.InitFrom = function (_storage, _oldIdler) {
        //skip
    };
    __decorate([
        class_transformer_1.Type(function () { return wallet_1.Wallet; })
    ], Idler.prototype, "wallet", void 0);
    __decorate([
        class_transformer_1.Type(function () { return gameData_1.GameData; })
    ], Idler.prototype, "valueData", void 0);
    __decorate([
        class_transformer_1.Type(function () { return timer_1.Timer; })
    ], Idler.prototype, "timer", void 0);
    return Idler;
}(gameObject_1.GameObject));
exports.Idler = Idler;

