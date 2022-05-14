
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadFile = void 0;
var js_file_download_1 = __importDefault(__webpack_require__(/*! js-file-download */ "./node_modules/js-file-download/file-download.js"));
//todo try to implement (because chrome doesn't ask for file name, it's stupid)
function DownloadFile(fileName, data) {
    js_file_download_1.default(data, fileName);
}
exports.DownloadFile = DownloadFile;

