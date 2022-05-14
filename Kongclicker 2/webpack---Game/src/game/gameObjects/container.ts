
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
exports.Container = exports.FloatContainer = exports.TimeContainer = exports.DateContainer = void 0;
var gameObject_1 = __webpack_require__(/*! ../gameObject */ "./src/game/gameObject.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var game_1 = __webpack_require__(/*! ../../game */ "./src/game.ts");
var time_1 = __webpack_require__(/*! ../../data/time */ "./src/data/time.ts");
var utilsObjects_1 = __webpack_require__(/*! ../../utils/utilsObjects */ "./src/utils/utilsObjects.ts");
exports.DateContainer = {
    Save: function (data) {
        return data.toDateString();
    },
    Load: function (data) {
        return new Date(data);
    }
};
exports.TimeContainer = {
    Save: function (data) {
        return data.TotalMilliseconds.toString();
    },
    Load: function (timeMSorTimeRaw) {
        if (typeof timeMSorTimeRaw != "string") {
            return new time_1.Time(0, 0, 0, new game_1.Float(timeMSorTimeRaw.milliseconds));
        }
        else {
            return new time_1.Time(0, 0, 0, parseFloat(timeMSorTimeRaw));
        }
    }
};
exports.FloatContainer = {
    Save: function (data) {
        return data.toString();
    },
    Load: function (data) {
        if (typeof data == "string") {
            return new game_1.Float(data);
        }
        else {
            return class_transformer_1.plainToClass(game_1.Float, data);
        }
    }
};
//export let TimeContainer
//todo на самом деле, я могу сделать какие-нибудь внутренние классы, которые будут отвечать за хранение разных данных
// и это будет скрытно. Либо конечно можно просто клипать под классы контейнера с кастоымни функциями сохранения и загрузки
// можно ещё опять же юзать декораторы класстрансформера, чтобы указывать туда кастомные функции
//TODO !!! КОРОЧЕ, ПРОСТО СДЕЛАТЬ GAME[TYPE] КЛАССЫ, ЧТОБ НЕ МУЧАТЬСЯ, СЕРЬЁЗНО
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(objectStorage, id, value, dataManager) {
        var _this = _super.call(this, objectStorage, gameObject_1.ClassName.Container, id) || this;
        _this.value = value;
        _this.baseValue = _this.value;
        _this.DataManager = dataManager;
        return _this;
    }
    Object.defineProperty(Container.prototype, "BaseValue", {
        get: function () {
            return this.baseValue;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.SetBaseValue = function (baseValue) {
        this.baseValue = baseValue;
    };
    Object.defineProperty(Container.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (value) {
            this.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Container.prototype.Reset = function () {
        this.value = this.BaseValue;
    };
    Container.prototype.InitFrom = function (_storage, container) {
        //console.log(`Container init-from for ${this.ID}`);
        var oldValue = container.value;
        if (this.DataManager) {
            oldValue = this.DataManager.Load(oldValue);
        }
        if (typeof oldValue != "string" && typeof this.value == "string") {
            if (utilsObjects_1.IsObject(oldValue) && "toString" in oldValue) {
                oldValue = oldValue.toString();
            }
        }
        if (typeof oldValue == "number" && this.value instanceof game_1.Float) {
            oldValue = new game_1.Float(oldValue);
            //console.log(`Container value moved from number to float`);
        }
        else if (typeof this.value == "number" && oldValue instanceof game_1.Float) {
            oldValue = oldValue.AsNumber;
            //console.log(`Container value moved from float to number`);
        }
        this.value = oldValue;
        //console.log(`Loaded value ${JSON.stringify(this.value)} for Container ${this.ID}`);
    };
    __decorate([
        class_transformer_1.Exclude()
    ], Container.prototype, "DataManager", void 0);
    __decorate([
        class_transformer_1.Exclude()
    ], Container.prototype, "baseValue", void 0);
    return Container;
}(gameObject_1.GameObject));
exports.Container = Container;

