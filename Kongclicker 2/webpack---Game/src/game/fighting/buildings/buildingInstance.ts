
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingInstance = void 0;
var BuildingInstance = /** @class */ (function () {
    function BuildingInstance(ClassID, ID, UID, Position, Angle) {
        this.ClassID = ClassID;
        this.ID = ID;
        this.UID = UID;
        this.Position = Position;
        this.Angle = Angle;
    }
    BuildingInstance.prototype.GetInstance = function () {
        for (var _i = 0, _a = this.GetAllInstances(); _i < _a.length; _i++) {
            var instance = _a[_i];
            if (instance.uid == this.UID) {
                return instance;
            }
        }
        return null;
    };
    BuildingInstance.prototype.IsCreated = function () {
        return this.GetInstance() != null;
    };
    BuildingInstance.prototype.Create = function () {
        if (!this.IsCreated()) {
            this.UID = this.CreateAndGetUID();
            this.ID = this.ID + "::" + this.UID;
        }
        else {
            throw new Error("Building instance with UID '" + this.UID + "' is already created");
        }
    };
    BuildingInstance.prototype.Destroy = function () {
        if (this.IsCreated() && this.GetInstance()) {
            this.GetInstance().destroy();
        }
        else {
            throw new Error("Building instance with UID '" + this.UID + "' is not created to destroy it!");
        }
    };
    BuildingInstance.prototype.InitFrom = function (_storage, item) {
        //todo implement, check if place is still fine, and it's not, don't build anything
        this.ID = item.ID;
        this.Position = item.Position;
        this.Angle = item.Angle;
        this.UID = -1;
    };
    return BuildingInstance;
}());
exports.BuildingInstance = BuildingInstance;

