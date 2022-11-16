with (BABYLON)
{

MainVehicleView = function(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed)
{
	livescriptforjs.service.View.call(this, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed);

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this.pVehicleMesh = new VehicleMesh();
	this.pVehicleMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	var h = -0.3;
	this.pVehicleMesh.pTorsoMesh.position.z += h;
	this.pVehicleMesh.pTorsoMesh2.position.z += h;
	this.pVehicleMesh.pGlassMesh.position.z += h;
	this.pVehicleMesh.pGlassMesh2.position.z += h;
	this.pVehicleMesh.pLightsMesh.position.z += h;

	return this;
};

MainVehicleView.prototype = Object.create(livescriptforjs.service.View.prototype);
MainVehicleView.prototype.constructor = MainVehicleView;
pLiveScriptService.addClass(MainVehicleView);

MainVehicleView.prototype.pVehicleMesh = null;

MainVehicleView.prototype.compile = function()
{
};

MainVehicleView.prototype.update = function()
{
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = this.pModel;
	_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b8395d20207119216acb5fffd7f250667b73f4cc3ed178de39e52c6(this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed);

	var _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;
	var pEngineSound1 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pEngineSound1;
	var pEngineSound2 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pEngineSound2;
	var pEngineSound3 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pEngineSound3;
	var pSkidSound1 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pSkidSound1;
	var pSkidSound2 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pSkidSound2;

	var k = 0.2;
	if (_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.z < 0.0)
	{
		k = 0.1;
	}

	if (_25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.menuVisible)
	{
		k = 0.0;
	}

	var v = Math.abs(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.rpmIndicatorAngVel);
	pEngineSound1.setPlaybackRate(0.2 + v * 0.0015);
	pEngineSound1.setVolume((0.0 + v * 0.012) * (0.3 + _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.throttle * 0.5) * 0.5 * k);
	pEngineSound2.setPlaybackRate(0.15 + v * 0.003);
	pEngineSound2.setVolume((0.3 + v * 0.003) * 0.6 * 0.5 * k);
	pEngineSound3.setPlaybackRate(0.7 + v * 0.004);
	v = (-6.0 + v * 0.03) * (0.4 - _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.throttle * 0.1) * 0.4;
	if (v < 0.0)
	{
		v = 0.0;
	}
	pEngineSound3.setVolume(v * k);

	var slipRelVelX = 0.0;
	var slipRelVelY = 0.0;
	var slipRelVelCount = 0;

	for (var a = 2; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pTires[a];
		if (!_25047_JSO_06dee9b517e59e50c.touching || _25047_JSO_06dee9b517e59e50c.touchPos.z < 0.0)
		{
			continue;
		}

		++slipRelVelCount;
		slipRelVelX += _25047_JSO_06dee9b517e59e50c.slipRelVel.x;
		slipRelVelY += _25047_JSO_06dee9b517e59e50c.slipRelVel.y;
	}

	if (slipRelVelCount == 0)
	{
		pSkidSound1.setVolume(0.0);
		pSkidSound2.setVolume(0.0);
	}
	else
	{
		slipRelVelX /= slipRelVelCount;
		slipRelVelY /= slipRelVelCount;

		v = Math.abs(slipRelVelX);
		v = (v - 0.1) * 0.1;
		if (v < 0.0)
		{
			v = 0.0;
		}
		else if (v > 1.0)
		{
			v = 1.0;
		}
		pSkidSound2.setVolume(v * k);
		pSkidSound2.setPlaybackRate(0.6 + v * 0.2);

		v = Math.abs(slipRelVelY);
		v = (v - 0.1) * 0.4;
		if (v < 0.0)
		{
			v = 0.0;
		}
		else if (v > 1.0)
		{
			v = 1.0;
		}
		pSkidSound1.setVolume(v * k);
		pSkidSound1.setPlaybackRate(0.9 + v * 0.2);
	}
};

}
