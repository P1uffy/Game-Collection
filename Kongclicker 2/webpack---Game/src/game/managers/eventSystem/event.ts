
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
var GameEvent = /** @class */ (function () {
    function GameEvent() {
        this.observers = [];
    }
    Object.defineProperty(GameEvent.prototype, "Observers", {
        get: function () {
            return this.observers;
        },
        enumerable: false,
        configurable: true
    });
    GameEvent.prototype.Register = function (callback, observer, id) {
        if (id === void 0) { id = "none"; }
        this.observers.push({
            Observer: observer,
            ID: id,
            Callback: callback,
        });
    };
    GameEvent.prototype.RemoveObserver = function (id) {
        for (var i = 0; i < this.observers.length; i++) {
            var obs = this.observers[i];
            if (obs.ID == id) {
                this.observers.splice(i, 1);
            }
        }
    };
    GameEvent.prototype.Trigger = function (sender, args) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.Callback(sender, args, obs.Observer);
        }
    };
    return GameEvent;
}());
exports.GameEvent = GameEvent;

