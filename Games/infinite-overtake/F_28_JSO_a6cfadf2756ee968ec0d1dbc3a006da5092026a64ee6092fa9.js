with (BABYLON)
{

TrafficVehicleView = function(_25047_JSO_465746d13e6645ff002a503ccba238fffd)
{
	livescriptforjs.service.View.call(this, _25047_JSO_465746d13e6645ff002a503ccba238fffd);

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this.pVehicleMesh = new VehicleMesh();
	this.pVehicleMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.pTireMeshes = [];
	var pTrafficTires = _25047_JSO_465746d13e6645ff002a503ccba238fffd.pTrafficTires;
	for (var a = 0; a < pTrafficTires.length; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = pTrafficTires[a];
		var pTiresMesh = new TireMesh(_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.screwRelPos.y < 0.0, 8);
		this.pTireMeshes.push(pTiresMesh);

		pTiresMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	}

	return this;
};

TrafficVehicleView.prototype = Object.create(livescriptforjs.service.View.prototype);
TrafficVehicleView.prototype.constructor = TrafficVehicleView;
pLiveScriptService.addClass(TrafficVehicleView);

TrafficVehicleView.prototype.pVehicleMesh = null;
TrafficVehicleView.prototype.pTireMeshes = null;

TrafficVehicleView.prototype.compile = function()
{
};

TrafficVehicleView.prototype.update = function()
{
	var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.pModel;
	_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b8395d20207119216acb5fffd7f250667b73f4cc3ed178de39e52c6(this.pVehicleMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_465746d13e6645ff002a503ccba238fffd);

	var pTrafficTires = _25047_JSO_465746d13e6645ff002a503ccba238fffd.pTrafficTires;
	for (var a = 0; a < 4; ++a)
	{
		var pTireMesh = this.pTireMeshes[a];
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = pTrafficTires[a];

		_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b8395d20207119216acb5fffd7f250667b73f4cc3ed178de39e52c6(pTireMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_465746d13e6645ff312b6dddd51ad1a3);
		pTireMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.z += _25047_JSO_465746d13e6645ff312b6dddd51ad1a3.suspensionZ;
	}
};

}
