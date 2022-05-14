
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lz_string_1 = __importDefault(__webpack_require__(/*! lz-string */ "./node_modules/lz-string/libs/lz-string.js"));
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
// import {SaveData} from "../../src/game/managers/saveSystem/gameLoad";
var ctx = self;
ctx.onmessage = function (e) {
    // console.log(`Worker function started.`);
    var data = e.data;
    // const data = plainToClass(SaveData, rawData);
    // console.log('SaveData:');
    // console.log(data)
    var serializedSaveData;
    var compress;
    try {
        serializedSaveData = class_transformer_1.serialize(data);
        compress = lz_string_1.default.compressToUTF16(serializedSaveData);
    }
    catch (error) {
        console.log("Error in WebWorker: \n" + JSON.stringify(error));
        return;
    }
    // console.log(`Worker function finished. Result len: ${compress.length}`);
    ctx.postMessage(compress);
};

