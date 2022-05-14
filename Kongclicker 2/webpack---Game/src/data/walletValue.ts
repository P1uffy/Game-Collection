
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletValueArray = exports.WalletValue = void 0;
var game_1 = __webpack_require__(/*! ../game */ "./src/game.ts");
var WalletValue = /** @class */ (function () {
    function WalletValue(Wallet, Value) {
        this.Wallet = Wallet;
        this.Value = Value;
    }
    return WalletValue;
}());
exports.WalletValue = WalletValue;
var WalletValueArray = /** @class */ (function () {
    function WalletValueArray(WalletValues) {
        this.WalletValues = WalletValues;
    }
    WalletValueArray.prototype.HasWallet = function (wallet) {
        for (var _i = 0, _a = this.WalletValues; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Wallet.IsSameSignature(wallet)) {
                return true;
            }
        }
        return false;
    };
    WalletValueArray.prototype.GetByWallet = function (wallet) {
        for (var _i = 0, _a = this.WalletValues; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Wallet.IsSameSignature(wallet)) {
                return item;
            }
        }
        throw new Error("WalletValue with wallet '" + wallet.ID + "' was not found");
    };
    WalletValueArray.prototype.Add = function (walletValue) {
        if (this.HasWallet(walletValue.Wallet)) {
            this.GetByWallet(walletValue.Wallet).Value = game_1.Float.Plus(this.GetByWallet(walletValue.Wallet).Value, walletValue.Value);
        }
        else {
            this.WalletValues.push(walletValue);
        }
    };
    WalletValueArray.prototype.Subtract = function (walletValue) {
        this.GetByWallet(walletValue.Wallet).Value = game_1.Float.Minus(this.GetByWallet(walletValue.Wallet).Value, walletValue.Value);
    };
    return WalletValueArray;
}());
exports.WalletValueArray = WalletValueArray;

