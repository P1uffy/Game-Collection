
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitMonsters = void 0;
var basicMonsterContent_1 = __webpack_require__(/*! ./basicMonsterContent */ "./src/content/modules/monsters/basicMonsterContent.ts");
var armoredMonsterContent_1 = __webpack_require__(/*! ./armoredMonsterContent */ "./src/content/modules/monsters/armoredMonsterContent.ts");
var fastMonsterContent_1 = __webpack_require__(/*! ./fastMonsterContent */ "./src/content/modules/monsters/fastMonsterContent.ts");
function InitMonsters(storage, content) {
    return {
        Basic: new basicMonsterContent_1.BasicMonsterContent(storage, content),
        Armored: new armoredMonsterContent_1.ArmoredMonsterContent(storage, content),
        Fast: new fastMonsterContent_1.FastMonsterContent(storage, content),
    };
}
exports.InitMonsters = InitMonsters;

