
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModule = void 0;
var ContentModule = /** @class */ (function () {
    function ContentModule(storage, id, load, autoAdd) {
        if (autoAdd === void 0) { autoAdd = true; }
        this.isLoaded = false;
        this.ClassID = "Module";
        this.ModuleStorage = storage;
        this.ID = id;
        this.LoadContent = load;
        this.content = null;
        if (autoAdd) {
            storage.AddItem(this);
        }
    }
    ContentModule.prototype.GetModule = function (id) {
        for (var _i = 0, _a = this.ModuleStorage.Items; _i < _a.length; _i++) {
            var module_1 = _a[_i];
            if (module_1.ID == id) {
                return module_1;
            }
        }
        throw new Error("Module not found: '" + id + "'");
    };
    ContentModule.prototype.GetContent = function (id) {
        return this.GetModule(id).Get();
    };
    Object.defineProperty(ContentModule.prototype, "IsLoaded", {
        get: function () {
            return this.isLoaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContentModule.prototype, "Content", {
        get: function () {
            return this.Get();
        },
        enumerable: false,
        configurable: true
    });
    ContentModule.prototype.Load = function () {
        if (!this.IsLoaded) {
            this.isLoaded = true;
            this.content = this.LoadContent();
        }
    };
    ContentModule.prototype.Get = function () {
        this.Load();
        return this.content;
    };
    return ContentModule;
}());
exports.ContentModule = ContentModule;

