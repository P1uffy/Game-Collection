
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
exports.UpgradeOnBuyIdler = exports.UpgradeOnBuyEvent = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var idler_1 = __webpack_require__(/*! ../idler */ "./src/game/gameObjects/idler.ts");
var UpgradeOnBuyEvent = /** @class */ (function () {
    function UpgradeOnBuyEvent() {
    }
    return UpgradeOnBuyEvent;
}());
exports.UpgradeOnBuyEvent = UpgradeOnBuyEvent;
var UpgradeOnBuyIdler = /** @class */ (function (_super) {
    __extends(UpgradeOnBuyIdler, _super);
    function UpgradeOnBuyIdler(idler) {
        var _this = _super.call(this) || this;
        _this.idler = idler;
        return _this;
    }
    UpgradeOnBuyIdler.prototype.Trigger = function (_upgrade, _count, _spent) {
        this.idler.Start();
    };
    __decorate([
        class_transformer_1.Type(function () { return idler_1.Idler; })
    ], UpgradeOnBuyIdler.prototype, "idler", void 0);
    return UpgradeOnBuyIdler;
}(UpgradeOnBuyEvent));
exports.UpgradeOnBuyIdler = UpgradeOnBuyIdler;

