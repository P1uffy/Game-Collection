
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitWalletTests = void 0;
var testManager_1 = __webpack_require__(/*! ../../testManager */ "./src/testing/testManager.ts");
var test_1 = __webpack_require__(/*! ../../test */ "./src/testing/test.ts");
var wallet_1 = __webpack_require__(/*! ../../../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
function InitWalletTests(context) {
    return new testManager_1.TestManager('Wallets', [
        new test_1.Test('walletAdd', 'Wallet value changing', 5, function () {
            var rubles = new wallet_1.Wallet(null, 'Rubles', 0);
            rubles.Add(15);
            rubles.Subtract(10);
            return rubles.Value.AsNumber;
        }),
    ]);
}
exports.InitWalletTests = InitWalletTests;

