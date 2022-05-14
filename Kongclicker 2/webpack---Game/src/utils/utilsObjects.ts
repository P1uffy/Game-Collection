
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = exports.IsObject = exports.IsNumber = exports.IsEmptyArray = exports.IsNullOrEmpty = exports.IsNull = exports.ValuesOf = exports.GetProperties = void 0;
function GetProperties(obj) {
    var propertyList = [];
    for (var property in obj) {
        // @ts-ignore
        var value = obj[property];
        var data = { name: property, value: value };
        propertyList.push(data);
    }
    return propertyList;
}
exports.GetProperties = GetProperties;
function ValuesOf(o) {
    return Object.values(o);
}
exports.ValuesOf = ValuesOf;
function IsNull(obj) {
    return (typeof obj == 'undefined' || obj == null);
}
exports.IsNull = IsNull;
function IsNullOrEmpty(obj) {
    return (typeof obj == 'undefined' || obj == null || obj.length == 0);
}
exports.IsNullOrEmpty = IsNullOrEmpty;
function IsEmptyArray(array) {
    return array.length == 0;
}
exports.IsEmptyArray = IsEmptyArray;
function IsNumber(n) {
    return !isNaN(parseFloat(n.toString())) && isFinite(n);
}
exports.IsNumber = IsNumber;
function IsObject(obj) {
    return (obj !== null && typeof obj === 'object');
}
exports.IsObject = IsObject;
function isInteger(num) {
    return (num ^ 0) === num;
}
exports.isInteger = isInteger;

