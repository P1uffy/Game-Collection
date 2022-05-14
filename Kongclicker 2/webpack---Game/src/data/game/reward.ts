
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward = void 0;
var gameData_1 = __webpack_require__(/*! ./gameData */ "./src/data/game/gameData.ts");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var wallet_1 = __webpack_require__(/*! ../../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var Reward = /** @class */ (function () {
    function Reward(wallet, value) {
        this.Wallet = wallet;
        this.ValueData = new gameData_1.GameData("Value", value);
    }
    Reward.prototype.AddToWallet = function () {
        this.Wallet.Add(this.ValueData.Value);
    };
    __decorate([
        class_transformer_1.Type(function () { return wallet_1.Wallet; })
    ], Reward.prototype, "Wallet", void 0);
    __decorate([
        class_transformer_1.Type(function () { return gameData_1.GameData; })
    ], Reward.prototype, "ValueData", void 0);
    return Reward;
}());
exports.Reward = Reward;

