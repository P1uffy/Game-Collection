
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllWalletsContent = exports.InitWallets = void 0;
var contentModule_1 = __webpack_require__(/*! ../../../data/game/contentModule */ "./src/data/game/contentModule.ts");
var wallet_1 = __webpack_require__(/*! ../../../game/gameObjects/wallet */ "./src/game/gameObjects/wallet.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
function InitWallets(storage, content) {
    return new AllWalletsContent(storage, content);
}
exports.InitWallets = InitWallets;
var AllWalletsContent = /** @class */ (function () {
    function AllWalletsContent(ModuleStorage, ContentStorage) {
        this.ModuleStorage = ModuleStorage;
        this.ContentStorage = ContentStorage;
        this.wallets = new contentModule_1.ContentModule(ModuleStorage, "Wallets", function () { return ({
            Coins: new wallet_1.Wallet(ContentStorage, 'Coins', content_1.Content.Stats.Game.StartCoins.Value, function (_valueBefore, _valueAfter, diff) {
                if (diff.IsMore(0)) {
                    content_1.Content.Stats.Coins.CollectedBeforeRebirth.Add(diff);
                    content_1.Content.Rebirth.Stats.NextPointProgress.AddPoints(diff);
                }
            }),
            RebirthPoints: new wallet_1.Wallet(ContentStorage, 'RebirthPoints', 0)
        }); });
    }
    Object.defineProperty(AllWalletsContent.prototype, "Coins", {
        get: function () {
            return this.wallets.Get().Coins;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AllWalletsContent.prototype, "RebirthPoints", {
        get: function () {
            return this.wallets.Get().RebirthPoints;
        },
        enumerable: false,
        configurable: true
    });
    return AllWalletsContent;
}());
exports.AllWalletsContent = AllWalletsContent;

