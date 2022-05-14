__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Construct3", function() { return Construct3; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_data_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/data/time */ "./src/data/time.ts");
/* harmony import */ var _src_data_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_data_time__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./javascript/construct3/main.js");
/* harmony import */ var _src_content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/content/content */ "./src/content/content.ts");
/* harmony import */ var _src_content_content__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_content_content__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/game */ "./src/game.ts");
/* harmony import */ var _src_game__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_game__WEBPACK_IMPORTED_MODULE_4__);
 //must be here for global scope access





// import Worker from "worker-loader!./test.worker";
// let myWorker = new Worker();

// Prevent mouse scrolling page
window.addEventListener("wheel", function(e) {
		e.preventDefault();
	}, {
		passive: false
	});

/**
 * @type{C3Runtime}
 */
let Construct3;

// @ts-ignore
runOnStartup(
	/** @param {C3Runtime} runtime */
	async (runtime) => {
		Construct3 = runtime;
		console.log('Project started!');

		//todo TEMP SOLUTION
		runtime.addEventListener("beforeprojectstart", () => InitC3Events(runtime));

		setTimeout(() => {

		}, 2000)
	}
);

/**
 * @param {C3Runtime} runtime
 * @function
 */
function InitC3Events(runtime) {
	runtime.addEventListener("tick", () => EngineTick(runtime));

	runtime.objects.Turret.addEventListener("instancecreate",
		async () => {
			if (_src_content_content__WEBPACK_IMPORTED_MODULE_3__["SystemData"].IsContentLoaded) {
				await Construct3.callFunction("DoTick");
				_src_content_content__WEBPACK_IMPORTED_MODULE_3__["Managers"].Fight.UpdateTurrets();
			}
	})
}

/**
 * @param {C3Runtime} runtime
 * @function
 */
function EngineTick(runtime) {
	Construct3 = runtime;
	Object(_src_game__WEBPACK_IMPORTED_MODULE_4__["Update"])(new _src_data_time__WEBPACK_IMPORTED_MODULE_1__["Time"](0, 0, 0, Construct3.dt * 1000));
}



















