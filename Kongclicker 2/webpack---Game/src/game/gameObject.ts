
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = exports.BuildingName = exports.ClassName = void 0;
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
var ClassName;
(function (ClassName) {
    ClassName["Idler"] = "Idler";
    ClassName["Points"] = "Points";
    ClassName["Price"] = "Price";
    ClassName["Setting"] = "Setting";
    ClassName["Stat"] = "Stat";
    ClassName["Timer"] = "Timer";
    ClassName["Upgrade"] = "Upgrade";
    ClassName["Wallet"] = "Wallet";
    ClassName["Unlock"] = "Unlock";
    ClassName["Monster"] = "Monster";
    ClassName["BuildInfo"] = "BuildInfo";
    // Buildings
    ClassName["Turret"] = "Turret";
    ClassName["TurretInstance"] = "TurretInstance";
    ClassName["Spikes"] = "Spikes";
    ClassName["SpikesInstance"] = "SpikesInstance";
    // -- end of buildings
    ClassName["Container"] = "Container";
    ClassName["GameFloat"] = "GameFloat";
})(ClassName = exports.ClassName || (exports.ClassName = {}));
var BuildingName;
(function (BuildingName) {
    BuildingName["Spikes"] = "Spikes";
})(BuildingName = exports.BuildingName || (exports.BuildingName = {}));
var GameObject = /** @class */ (function () {
    function GameObject(storage, classID, id) {
        this.ClassID = classID !== null && classID !== void 0 ? classID : "@GameObject.ClassID";
        this.ID = id !== null && id !== void 0 ? id : "@GameObject.ID";
        if (storage) {
            storage.AddItem(this);
        }
    }
    Object.defineProperty(GameObject.prototype, "Signature", {
        get: function () {
            return this.ClassID + "::" + this.ID;
        },
        enumerable: false,
        configurable: true
    });
    GameObject.prototype.IsSameSignature = function (gameObject) {
        return (this.Signature == gameObject.Signature);
    };
    GameObject.prototype.Update = function (_dt) {
    };
    //todo connect with GameEvents
    GameObject.prototype.OnContentInitiatedOrGameLoaded = function () { };
    __decorate([
        class_transformer_1.Expose()
    ], GameObject.prototype, "ClassID", void 0);
    __decorate([
        class_transformer_1.Expose()
    ], GameObject.prototype, "ID", void 0);
    return GameObject;
}());
exports.GameObject = GameObject;

