
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectStorage = void 0;
var ObjectStorage = /** @class */ (function () {
    function ObjectStorage(items, allowSameName) {
        if (allowSameName === void 0) { allowSameName = false; }
        this.AllowSameName = allowSameName;
        if (items) {
            this.items = items;
        }
        else {
            this.items = [];
        }
    }
    Object.defineProperty(ObjectStorage.prototype, "Length", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    ObjectStorage.prototype.GetItem = function (id) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.ID === id) {
                return item;
            }
        }
        throw new Error("Item now found: " + id);
    };
    ObjectStorage.prototype.GetItems = function (id) {
        var items = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.ID === id) {
                items.push(item);
            }
        }
        if (items.length != 0) {
            return items;
        }
        else {
            throw new Error("Items not found: " + id);
        }
    };
    ObjectStorage.prototype.GetItemOfType = function (type, id) {
        var items = this.GetAllItemsOfType(type);
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.ID == id) {
                return item;
            }
        }
        throw new Error("Item of type " + type.name + " not found");
    };
    ObjectStorage.prototype.GetAllItemsOfType = function (type) {
        var items = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item instanceof type) {
                items.push(item);
            }
        }
        if (items) {
            return items;
        }
        else
            throw new Error("Items of type " + type.name + " not found");
    };
    ObjectStorage.prototype.GetItemOfClass = function (classID, id) {
        var items = this.GetAllItemsOfClass(classID);
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.ID == id) {
                return item;
            }
        }
        throw new Error("Item of type " + classID + " and id " + id + " not found");
    };
    ObjectStorage.prototype.GetAllItemsOfClass = function (classID) {
        var items = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.ClassID === classID) {
                items.push(item);
            }
        }
        if (items.length != 0) {
            return items;
        }
        else {
            throw new Error("Item of class not found: " + classID);
        }
    };
    ObjectStorage.prototype.GetAllItems = function () {
        return this.items;
    };
    Object.defineProperty(ObjectStorage.prototype, "Items", {
        get: function () {
            return this.GetAllItems();
        },
        enumerable: false,
        configurable: true
    });
    ObjectStorage.prototype.IsItemExists = function (id) {
        try {
            this.GetItem(id);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ObjectStorage.prototype.IsItemOfTypeExists = function (type, id) {
        try {
            this.GetItemOfType(type, id);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ObjectStorage.prototype.IsItemOfClassExists = function (classID, id) {
        try {
            this.GetItemOfClass(classID, id);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    ObjectStorage.prototype.AddItem = function (item) {
        if (this.AllowSameName || !this.IsItemExists(item.ID)) {
            this.items.push(item);
        }
        else {
            throw new Error("Item already exists: " + item.ID);
        }
    };
    ObjectStorage.prototype.RemoveItem = function (id, errorIfNotFound) {
        if (errorIfNotFound === void 0) { errorIfNotFound = true; }
        for (var i = 0; i < this.Items.length; i++) {
            var item = this.Items[i];
            if (item.ID == id) {
                this.items.splice(i, 1);
                return;
            }
        }
        if (errorIfNotFound) {
            throw new Error("Item was not found to remove: " + id);
        }
    };
    ObjectStorage.prototype.AddItems = function (items) {
        for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
            var item = items_3[_i];
            this.AddItem(item);
        }
    };
    ObjectStorage.prototype.RemoveAll = function () {
        this.items = [];
    };
    return ObjectStorage;
}());
exports.ObjectStorage = ObjectStorage;

