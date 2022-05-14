
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixOutdatedIDs = exports.GetClassByName = void 0;
var contentTypes_1 = __webpack_require__(/*! ../../../content/contentTypes */ "./src/content/contentTypes.ts");
var gameObject_1 = __webpack_require__(/*! ../../gameObject */ "./src/game/gameObject.ts");
var content_1 = __webpack_require__(/*! ../../../content/content */ "./src/content/content.ts");
function GetClassByName(name) {
    for (var _i = 0, _a = contentTypes_1.GetTypeList(); _i < _a.length; _i++) {
        var type = _a[_i];
        if (type.name == name) {
            return type;
        }
    }
    throw new Error("Type '" + name + "' was not found");
}
exports.GetClassByName = GetClassByName;
function FixOutdatedIDs(item) {
    var classFixes = [
        //# From very old version #
        {
            Right: gameObject_1.ClassName.TurretInstance,
            Aliases: ["TurretInstanceInfo"]
        },
    ];
    var idFixes = [
        //# 0.3 -> 0.4 #
        {
            Right: content_1.Content.Rebirth.Stats.IsNotificationShow.ID,
            Aliases: ["Rebirth.IsNotificationShow"]
        },
        {
            Right: content_1.Content.Rebirth.Stats.NextPointProgress.ID,
            Aliases: ["Rebirth.NextPointProgress"]
        },
        {
            Right: content_1.Content.Rebirth.Main.StartCoinBonus.ID,
            Aliases: ["Rebirth.StartCoinBonus"]
        },
        {
            Right: content_1.Content.Rebirth.Main.RPPerLevel.ID,
            Aliases: ["Rebirth.RPPerLevel"]
        },
        {
            Right: content_1.Content.Rebirth.Main.RPRewardMP.ID,
            Aliases: ["Rebirth.RPRewardMP"]
        },
        {
            Right: content_1.Content.Rebirth.BasicMonster.Count.ID,
            Aliases: ["Rebirth.Upgrades.BasicMonster.Count"]
        },
        {
            Right: content_1.Content.Rebirth.BasicMonster.Reward.ID,
            Aliases: ["Rebirth.BasicMonsterReward"]
        },
        {
            Right: content_1.Content.Rebirth.ArmoredMonster.Reward.ID,
            Aliases: ["Rebirth.Upgrades.ArmoredMonster.Reward"]
        },
        {
            Right: content_1.Content.Rebirth.FastMonster.Reward.ID,
            Aliases: ["Rebirth.Upgrades.FastMonster.Reward"]
        },
        {
            Right: content_1.Content.Rebirth.BasicTurret.Count.ID,
            Aliases: ["Rebirth.Upgrades.BasicTurret.Count"]
        },
        {
            Right: content_1.Content.Rebirth.LaserTurret.Count.ID,
            Aliases: ["Rebirth.Upgrades.LaserTurret.Count"]
        },
        {
            Right: content_1.Content.Rebirth.RailTurret.Count.ID,
            Aliases: ["Rebirth.Upgrades.RailTurret.Count"]
        },
        {
            Right: content_1.Content.Rebirth.Spikes.Count.ID,
            Aliases: ["Rebirth.Upgrades.Spikes.Count"]
        },
    ];
    for (var _i = 0, classFixes_1 = classFixes; _i < classFixes_1.length; _i++) {
        var classFix = classFixes_1[_i];
        if (classFix.Aliases.includes(item.ClassID)) {
            item.ClassID = classFix.Right;
        }
    }
    for (var _a = 0, idFixes_1 = idFixes; _a < idFixes_1.length; _a++) {
        var idFix = idFixes_1[_a];
        if (idFix.Aliases.includes(item.ID)) {
            item.ID = idFix.Right;
        }
    }
    //todo maybe just skip item with wrong classID, and show error only, without exception... dunno
    return item;
}
exports.FixOutdatedIDs = FixOutdatedIDs;

