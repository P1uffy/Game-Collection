
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitScrollbars = void 0;
var scrollbar_1 = __webpack_require__(/*! ../../../../javascript/construct3/c3ObjectUtils/gameUI/scrollbar */ "./javascript/construct3/c3ObjectUtils/gameUI/scrollbar.ts");
var vector2_1 = __webpack_require__(/*! ../../../data/vector2 */ "./src/data/vector2.ts");
var content_1 = __webpack_require__(/*! ../../content */ "./src/content/content.ts");
//todo combine with views?
//todo viewID is not so convenient, you know
function InitScrollbars(storage, content) {
    return {
        Menus: {
            Unlocks: new scrollbar_1.Scrollbar(content, content_1.ViewID.Unlocks, new DOMRect(3760, 11860, 1840, 5000), new vector2_1.Size(1840, 1580)),
            Settings: new scrollbar_1.Scrollbar(content, content_1.ViewID.Settings, new DOMRect(12400, 11840, 1880, 5000), new vector2_1.Size(1880, 1580)),
            Statistics: new scrollbar_1.Scrollbar(content, content_1.ViewID.Statistics, new DOMRect(18160, 11860, 1880, 5000), new vector2_1.Size(1880, 1580)),
        },
        Monsters: {
            Basic: new scrollbar_1.Scrollbar(content, content_1.ViewID.BasicMonster, new DOMRect(3760, 340, 1800, 5000), new vector2_1.Size(1860, 1400)),
            Armored: new scrollbar_1.Scrollbar(content, content_1.ViewID.ArmoredMonster, new DOMRect(6640, 340, 1800, 5000), new vector2_1.Size(1860, 1400)),
            Fast: new scrollbar_1.Scrollbar(content, content_1.ViewID.FastMonster, new DOMRect(9520, 340, 1800, 5000), new vector2_1.Size(1860, 1400)),
        },
        Turrets: {
            Basic: new scrollbar_1.Scrollbar(content, content_1.ViewID.BasicTurret, new DOMRect(3760, 6100, 1800, 5000), new vector2_1.Size(1860, 1400)),
            Laser: new scrollbar_1.Scrollbar(content, content_1.ViewID.LaserTurret, new DOMRect(6640, 6100, 1800, 5000), new vector2_1.Size(1860, 1400)),
            Rail: new scrollbar_1.Scrollbar(content, content_1.ViewID.RailTurret, new DOMRect(9520, 6100, 1800, 5000), new vector2_1.Size(1860, 1400)),
        },
        Buildings: {
            Spikes: new scrollbar_1.Scrollbar(content, content_1.ViewID.Spikes, new DOMRect(3760, 17620, 1800, 5000), new vector2_1.Size(1860, 1400)),
        },
        Rebirth: {
            Main: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthMain, new DOMRect(3760, 23360, 1840, 5000), new vector2_1.Size(1840, 1400)),
            //# Monsters #
            BasicMonster: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthBasicMonster, new DOMRect(6640, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            ArmoredMonster: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthArmoredMonster, new DOMRect(12400, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            FastMonster: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthFastMonster, new DOMRect(21040, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            //# Turrets #
            BasicTurret: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthBasicTurret, new DOMRect(9520, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            LaserTurret: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthLaserTurret, new DOMRect(18160, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            RailTurret: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthRailTurret, new DOMRect(23920, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
            //# Buildings #
            Spikes: new scrollbar_1.Scrollbar(content, content_1.ViewID.RebirthSpikes, new DOMRect(15280, 23380, 1840, 5000), new vector2_1.Size(1840, 1400)),
        },
    };
}
exports.InitScrollbars = InitScrollbars;

