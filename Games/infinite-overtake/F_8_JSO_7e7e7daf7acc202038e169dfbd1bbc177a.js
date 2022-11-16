with (BABYLON)
{

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a = function(pGame, _25047_JSO_3a02fb201464a2244d)
{
	_25047_JSO_002a503ccba238fffd.call(this, pGame);

	new MainVehicleView(this);

	this.mass = 1200.0;
	this.I.scaleInPlace(this.mass * 1.1);
	this.I.x *= 0.5;
	this.I.z *= 1.0;
	this.setPos(_25047_JSO_3a02fb201464a2244d);

	this.prevPos = new Vector3();
	this.prevV0 = new Vector3();
	this.prevV1 = new Vector3();
	this.prevV2 = new Vector3();
	this.prevVel = new Vector3();
	this.prevAngVel = new Vector3();

	var scale = 0.6;

	this.pTires = [];
	for (var a = 1; a > -2; a -= 2)
	{
		for (var b = 1; b > -2; b -= 2)
		{
			var _25047_JSO_06dee9b517e59e50c = new _25047_JSO_312b6dddd51ad1a3(this, new Vector3(a * 1.5 + 0.2, b * 1.2, -0.3).scale(scale));
			_25047_JSO_06dee9b517e59e50c.radius *= scale;
			_25047_JSO_06dee9b517e59e50c.index = this.pTires.length;
			_25047_JSO_06dee9b517e59e50c.setPos(_25047_JSO_3a02fb201464a2244d);
			this.pTires.push(_25047_JSO_06dee9b517e59e50c);
		}
	}

	this.gravity = new Vector3(0, 0, -9.81);

	this.pGearRatios = [-0.9, 1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.1, 4.7];
	for (var a = 0; a < this.pGearRatios.length; ++a)
	{
		this.pGearRatios[a] *= 0.06 / scale;
	}

	this.pTorsoRelPosList = new Array(8);
	this.pTorsoRelPosList[0] = new Vector3(2.5, 0.0, -0.1);
	this.pTorsoRelPosList[1] = new Vector3(2.2, 1.0, -0.1);
	this.pTorsoRelPosList[2] = new Vector3(2.2, -1.0, -0.1);
	this.pTorsoRelPosList[3] = new Vector3(-2.3, 1.0, -0.1);
	this.pTorsoRelPosList[4] = new Vector3(-2.3, -1.0, -0.1);
	this.pTorsoRelPosList[5] = new Vector3(1.0, 0.6, 1.5);
	this.pTorsoRelPosList[6] = new Vector3(1.0, -0.6, 1.5);
	this.pTorsoRelPosList[7] = new Vector3(-1.0, 0.0, 1.5);

	this.pTorsoPoints = new Array(8);
	for (var a = 0; a < 8; ++a)
	{
		this.pTorsoPoints[a] = new Point(pGame);
	}

	this.setTireSoftness(0.25);
	this.setDrivingStyle(this.drivingStyle);

	return this;
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype = Object.create(_25047_JSO_002a503ccba238fffd.prototype);
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.constructor = _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a;
pLiveScriptService.addClass(_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a);

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.gravity = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.range = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.allowedMinRange = 0.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.pTires = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.tireAngle = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.targetTireAngle = 0.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.tireSoftness = 0.25;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.tireK1 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.tireK2 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.tireK3 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.spinK1 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.spinK2 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.brakeK = 0.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.angVelToRpm = 60.0 / (Math.PI * 2.0);

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.clutch = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.brake = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.throttle = 0.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineTorque = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineMaxTorque = 150.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineMaxTorqueIndex = 1;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineI = 0.5;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineAngVel = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.rpmIndicatorAngVel = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineMaxAngVel = 18000.0 / _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.angVelToRpm;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineLimitAngVel = 6200.0 / _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.angVelToRpm;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.engineIdleAngVel = 1200.0 / _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.angVelToRpm;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.differentialTorque = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.differentialI = 20.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.differentialAngVel = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.directTransmit = false;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.pGearRatios = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.gearIndex = 1;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.gearRatio = 1.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Automatic = 1;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Manual = 2;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_CVT = 3;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.gearMode = _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Automatic;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Economy = 1;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Normal = 2;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Sportive = 3;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Race = 4;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.drivingStyle = _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Sportive;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.drivingStyleEngineLimitAngVel1 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.drivingStyleEngineLimitAngVel2 = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.drivingStyleEngineMaxTorque = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.drivingStyleTireAngleK = 0.0;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.fuelVel = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.fuelPos = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.accelTestTime = 0.0;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.accelTestVel = 100.0 / 3.6;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.pTorsoPoints = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.pTorsoRelPosList = null;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevPos = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevV0 = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevV1 = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevV2 = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevVel = null;
_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.prevAngVel = null;

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.initialize = function(_25047_JSO_34a44a1af65c6d58, direction)
{
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_34a44a1af65c6d58.pTriangles[_25047_JSO_34a44a1af65c6d58.pTriangles.length / 2 - 1];
	var p = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos.clone();
	p.z += 0.5;

	this.setPos(p);
	this.range = _25047_JSO_34a44a1af65c6d58.range;
	this.setVel(new Vector3());
	this.setAngVel(new Vector3());
	this.engineAngVel = 0.0;
	this.differentialAngVel = 0.0;
	this.gearIndex = 1;
	this.directTransmit = false;
	this.tireAngle = 0.0;
	this.accelTestTime = 0.0;
	if (direction > 0.0)
	{
		this.setV0(_25047_JSO_34a44a1af65c6d58.v0);
		this.setV1(_25047_JSO_34a44a1af65c6d58.v1);
	}
	else
	{
		this.setV0(_25047_JSO_34a44a1af65c6d58.v0.scale(-1));
		this.setV1(_25047_JSO_34a44a1af65c6d58.v1.scale(-1));
	}
	this.setV2(Vector3.Cross(_25047_JSO_34a44a1af65c6d58.v0, _25047_JSO_34a44a1af65c6d58.v1));

	for (var a = 0; a < this.pTires.length; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.setPos(p);
		_25047_JSO_06dee9b517e59e50c.setVel(new Vector3());
		_25047_JSO_06dee9b517e59e50c.setAngVel(new Vector3());
		_25047_JSO_06dee9b517e59e50c.pPoint.pViewTag.pView.setTriangle(_25047_JSO_a6091513150509033f0ccea65fe3fffdca);
		_25047_JSO_06dee9b517e59e50c.touching = false;
		_25047_JSO_06dee9b517e59e50c.slipRelPos.set(0, 0, 0);
		_25047_JSO_06dee9b517e59e50c.brakeSlipRelAng = 0.0;
		_25047_JSO_06dee9b517e59e50c.slipB2 = 0.0;
	}

	for (var a = 0; a < this.pTorsoPoints.length; ++a)
	{
		var pTorsoPoint = this.pTorsoPoints[a];
		pTorsoPoint._25047_JSO_3a02fb201464a2244d.copyFrom(p);
		pTorsoPoint.pViewTag.pView.setTriangle(_25047_JSO_a6091513150509033f0ccea65fe3fffdca);
	}

	this.refresh();

	var pEnabledTrafficVehicles = this.pGame.pEnabledTrafficVehicles;
	for (var a = 0; a < pEnabledTrafficVehicles.length; ++a)
	{
		var _25047_JSO_465746d13e6645ff002a503ccba238fffd = pEnabledTrafficVehicles[a];
		if (_25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d.subtract(this._25047_JSO_3a02fb201464a2244d).length() > 50.0)
		{
			continue;
		}

		if (this.pGame.setTrafficVehicleNotEnabled(a) != null)
		{
			--a;
		}
	}
}

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.init = function()
{
	_25047_JSO_002a503ccba238fffd.prototype.init.call(this);

	this.engineTorque = 0.0;
	this.differentialTorque = 0.0;

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.init();
	}

	for (var a = 0; a < 8; ++a)
	{
		var pTorsoPoint = this.pTorsoPoints[a];
		var pTorsoRelPos = this.pTorsoRelPosList[a];
		pTorsoPoint.updateTriangle3(this._25047_JSO_3a02fb201464a2244d.
			add(this.v0.scale(pTorsoRelPos.x)).
			add(this.v1.scale(pTorsoRelPos.y)).
			add(this.v2.scale(pTorsoRelPos.z)), 20);
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.solve = function()
{
	_25047_JSO_002a503ccba238fffd.prototype.solve.call(this);

	var velLength = this._25047_JSO_dceddc17dd7dfc7178.length();

	var k = Math.pow(velLength, 1.5);
	this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(
		this.v0.scale(-60.0 * k * Vector3.Dot(this.angVel, this.v0)).add(
		this.v1.scale(-150.0 * k * Vector3.Dot(this.angVel, this.v1))).add(
		this.v2.scale(-30.0 * k * this.spinK1 * _25047_JSO_201e6f00bcce7ae9f0.powSigned(Vector3.Dot(this.angVel, this.v2), this.spinK2))));

	this._25047_JSO_41eafb28153e1160201c607c1a390729b8c7(this.gravity);
	this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this._25047_JSO_dceddc17dd7dfc7178.scale(-15.0 * Math.pow(velLength, 0.25)));
	this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this.v2.scale(-2000.0 * Math.pow(velLength, 0.25)),
		this._25047_JSO_3a02fb201464a2244d.add(this.v0.scale(0.20)));

	var throttle = this.throttle;
	this.clutch = 0.0;
	if (this.engineAngVel > this.engineLimitAngVel)
	{
		k = 1.0 - 5.0 * (this.engineAngVel - this.engineLimitAngVel) / this.engineLimitAngVel;
		if (k < 0.0)
		{
			k = 0.0;
		}
		throttle *= k;
	}
	else if (this.engineAngVel < this.engineIdleAngVel)
	{
		k = (this.engineIdleAngVel - this.engineAngVel) / this.engineIdleAngVel;
		var throttle2 = 0.5 * k;
		if (throttle < throttle2)
		{
			throttle = throttle2;
		}

		if (this.brake == 0.0)
		{
			this.clutch = k * 1.5;
		}
		else
		{
			this.clutch = k * 10.0;
		}

		if (this.clutch > 1.0)
		{
			this.clutch = 1.0;
		}
	}

	if (this.throttle > 0.5 && this.brake > 0.5)
	{
		this.clutch = 1.0;
	}

	if (this.gearMode == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Automatic && this.gearIndex != 0)
	{
		var engineLimitAngVel = this.drivingStyleEngineLimitAngVel1;
		if (this.engineAngVel > engineLimitAngVel && this.clutch == 0.0)
		{
			if (this.gearIndex < this.pGearRatios.length - 1)
			{
				++this.gearIndex;
			}
		}
		else if (this.engineAngVel < engineLimitAngVel * 0.7)
		{
			if (this.gearIndex > 1)
			{
				--this.gearIndex;
			}
		}
	}

	if (this.gearMode != _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_CVT || this.gearIndex == 0)
	{
		this.gearRatio = this.pGearRatios[this.gearIndex];
	}

	this.engineTorque += this.drivingStyleEngineMaxTorque * throttle * 
		(this.engineMaxAngVel - this.engineAngVel) / this.engineLimitAngVel;
	this.fuelVel = Math.pow(Math.abs(this.engineTorque), 0.7) * Math.abs(this.engineAngVel) * 0.0008;
	if (throttle < 0.5)
	{
		this.engineTorque += -0.8 * (0.5 - throttle) / 0.5 * this.engineAngVel;
	}

	var pV1 = this.pTires[2].v1;
	var angVel1 = Vector3.Dot(this.pTires[2].angVel, pV1);
	var angVel2 = Vector3.Dot(this.pTires[3].angVel, pV1);
	this.differentialAngVel = (angVel1 + angVel2) * 0.5;

	var d = this.differentialAngVel - this.engineAngVel * this.gearRatio;
	this.directTransmit = (this.clutch == 0.0) &&
		(Math.abs(Math.abs(this.differentialAngVel / (this.engineAngVel * this.gearRatio)) - 1.0) < 0.1);

	if (this.directTransmit)
	{
		this.differentialTorque = this.engineTorque / this.gearRatio;
	}
	else
	{
		var torque = -500.0 * (1.0 - this.clutch) * d;
		this.differentialTorque += torque;
		this.engineTorque -= torque * this.gearRatio;
	}
	this.differentialTorque += -0.01 * this.differentialAngVel;

	var torque3 = pV1.scale(10.0 * (angVel2 - angVel1));
	this.pTires[2]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque3);
	this.pTires[3]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque3.negate());

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.brake = this.brake;
	}

	for (var a = 0; a < 8; ++a)
	{
		var pTorsoPoint = this.pTorsoPoints[a];
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTorsoPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
		{
			continue;
		}

		var pPos = pTorsoPoint._25047_JSO_3a02fb201464a2244d;
		var pNormal = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.normal;
		var p = pPos.subtract(_25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos);
		var h = Vector3.Dot(p, pNormal);
		if (h >= 0.0)
		{
			continue;
		}

		if (h < -0.5)
		{
			h = -0.5;
		}
	
		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(pNormal.scale(-10000.0 * h), pPos);

		var v = this.getVelAt(pPos);
		var s = Vector3.Dot(v, pNormal);
		if (s < 0.0)
		{
			if (s < -10.0)
			{
				s = -10.0;
			}

			var vn = pNormal.scale(s);
			v.subtractInPlace(vn);

			this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(v.scale(-200.0).add(vn.scale(-10000.0)), pPos);
			this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.angVel.scale(-10000.0));

			if (s < -9.0)
			{
				this.pGame.crashNotify(true);

				var pCrashSound3 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound3;
				if (!pCrashSound3.isPlaying)
				{
					pCrashSound3.play();
				}
			}
			else if (s < -3.0)
			{
				this.pGame.crashNotify(false);

				var pCrashSound2 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound2;
				if (!pCrashSound2.isPlaying)
				{
					pCrashSound2.play();
				}
			}
			else
			{
				var pCrashSound1 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound1;
				if (!pCrashSound1.isPlaying)
				{
					pCrashSound1.setVolume(-s / 3.0);
					pCrashSound1.play();
				}
			}
		}
	}

	var h = this._25047_JSO_3a02fb201464a2244d.z;
	if (h < 0.0)
	{
		if (h < -1.0)
		{
			h = -1.0;
		}

		this.force.z += -h * 14000.0;
		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this._25047_JSO_dceddc17dd7dfc7178.scale(Math.pow(velLength, 2.0) * 100.0 * h));
		this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.angVel.scale(500.0 * h));
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.simulate = function(dt)
{
	this.prevPos.copyFrom(this._25047_JSO_3a02fb201464a2244d);
	this.prevV0.copyFrom(this.v0);
	this.prevV1.copyFrom(this.v1);
	this.prevV2.copyFrom(this.v2);
	this.prevVel.copyFrom(this._25047_JSO_dceddc17dd7dfc7178);
	this.prevAngVel.copyFrom(this.angVel);

	var targetSlipB2 = this._25047_JSO_dceddc17dd7dfc7178.length() * 0.1;
	if (targetSlipB2 > 1.0)
	{
		targetSlipB2 = 1.0;
	}
	else
	{
		this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.angVel.scale(-5000.0 * Math.pow(1.0 - targetSlipB2, 2.0)));
	}

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.solveTire(dt, targetSlipB2);

		if (a == 0)
		{
			var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_06dee9b517e59e50c.pPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
			if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
			{
				this.range = _25047_JSO_a6091513150509033f0ccea65fe3fffdca._25047_JSO_34a44a1af65c6d58.range;
			}
		}
	}

	var pV1 = this.pTires[2].v1;

	if (this.directTransmit)
	{
		var torque1 = pV1.scale(Vector3.Dot(this.pTires[2].torque.add(this.pTires[3].torque), pV1) * 0.003 / Math.pow(this.gearRatio, 2.0));
		this.pTires[2]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque1);
		this.pTires[3]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque1);
	}

	var torque2 = pV1.scale(this.differentialTorque * 0.5);
	this.pTires[2]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque2);
	this.pTires[3]._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(torque2);

	_25047_JSO_002a503ccba238fffd.prototype.simulate.call(this, dt);

	var velLength = this._25047_JSO_dceddc17dd7dfc7178.length();

	if (this._25047_JSO_3a02fb201464a2244d.z < 0.0 && this.prevPos.z >= 0.0 && velLength > 1.0)
	{
		this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pSplashSound.play();
	}

	if (this.directTransmit)
	{
		this.engineAngVel = this.differentialAngVel / this.gearRatio;
	}
	else
	{
		this.engineAngVel += this.engineTorque / this.engineI * dt;
	}
	this.fuelPos += this.fuelVel * dt;

	this.rpmIndicatorAngVel += 10.0 * (this.engineAngVel - this.rpmIndicatorAngVel) * dt;

	var k1 = 1.0 / (1.0 + velLength * 0.05);
	var k2 = 1.0 / (1.0 + velLength * 0.05);

	var targetTireAngle2 = this.targetTireAngle;
	if (targetTireAngle2 == 0.0)
	{
		var v = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178, this.v0);
		if (v > 0.0)
		{
			targetTireAngle2 = -this.angVel.z * (1.0 + v * 0.1) * 0.2;
		}
	}

	var d = targetTireAngle2 * k1 - this.tireAngle;
	if (d > 0.3)
	{
		d = 0.3;
	}
	else if (d < -0.3)
	{
		d = -0.3;
	}
	if (this.targetTireAngle != 0.0)
	{
		d *= this.drivingStyleTireAngleK;
	}

	this.tireAngle += d * 20.0 * k2 * dt;
	this.pTires[0].angle = this.tireAngle;
	this.pTires[1].angle = this.tireAngle;

	if (this.gearMode == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_CVT && this.gearIndex != 0)
	{
		var cvtTargetAngVel =
			this.engineAngVel * (1.2 - this.gearRatio * 0.8) * (1.0 - this.throttle) +
			this.drivingStyleEngineLimitAngVel2 * this.throttle;

		this.gearRatio -= (cvtTargetAngVel - this.engineAngVel) * 0.001 * dt;
		if (this.gearRatio < this.pGearRatios[1])
		{
			this.gearRatio = this.pGearRatios[1];
		}
		else if (this.gearRatio > this.pGearRatios[this.pGearRatios.length - 1])
		{
			this.gearRatio = this.pGearRatios[this.pGearRatios.length - 1];
		}
	}

	if (velLength < 0.5)
	{
		this.accelTestTime = 0.0;
	}
	else
	{
		if (this.accelTestTime >= 0.0)
		{
			if (velLength > this.accelTestVel)
			{
				this.accelTestTime = -this.accelTestTime;
			}
			else
			{
				this.accelTestTime += dt;
			}

			if (this.accelTestTime >= 19.0)
			{
				this.accelTestTime = 19.0;
			}
		}
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.simulate2 = function(dt, stepsAhead, dt2Ratio)
{
	var max_dt1 = 0.001;
	var iterationCount1 = 1;
	if (dt > max_dt1)
	{
		iterationCount1 = Math.floor(dt / max_dt1) + 1;
	}
	var iteration_dt1 = dt / iterationCount1;

	var r0 = 15.0;
	var r1 = 1.75;
	var pEnabledTrafficVehicles = this.pGame.pEnabledTrafficVehicles;
	var n = pEnabledTrafficVehicles.length;

	var pTrafficVehicles = [];
	var pCrashes = [];
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_465746d13e6645ff002a503ccba238fffd = pEnabledTrafficVehicles[a];

		var pPos2 = _25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d;
		if (Math.abs(pPos2.x - this._25047_JSO_3a02fb201464a2244d.x) > r0 ||
			Math.abs(pPos2.y - this._25047_JSO_3a02fb201464a2244d.y) > r0 ||
			Math.abs(pPos2.z - this._25047_JSO_3a02fb201464a2244d.z) > r0)
		{
			continue;
		}

		pTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
		pCrashes.push(0.0);
	}
	n = pTrafficVehicles.length;

	if (n > 0 && dt != 0.0)
	{
		var _25047_JSO_3a02fb201464a2244d = this.prevPos.clone();
		var v0 = this.prevV0.clone();
		var v1 = this.prevV1.clone();
		var v2 = this.prevV2.clone();
		var _25047_JSO_dceddc17dd7dfc7178 = this.prevVel.clone();
		var angVel = this.prevAngVel.clone();

		var force = this.force.clone();
		var accel = this.accel.clone();
		var torque = this.torque.clone();

		dt2Ratio /= iterationCount1;

		for (var iteration1 = 0; iteration1 < iterationCount1; ++iteration1)
		{
			_25047_JSO_002a503ccba238fffd.prototype.init.call(this);

			var pPosList = this.updateCollisionPosList();

			for (var a = 0; a < n; ++a)
			{
				var _25047_JSO_465746d13e6645ff002a503ccba238fffd = pTrafficVehicles[a];
				var pVel2 = _25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_dceddc17dd7dfc7178;

				var pos2 = _25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d.add(pVel2.scale(
					(stepsAhead + 1) * dt + (iteration1 - iterationCount1) * iteration_dt1));

				var pPosList2 = _25047_JSO_465746d13e6645ff002a503ccba238fffd.updateCollisionPosList();

				var crash = 0.0;

				for (var b = 0; b < 3; ++b)
				{
					var p1 = pPosList[b];
					for (var c = 0; c < 3; ++c)
					{
						var p2 = pPosList2[c];

						var d = p2.subtract(p1);
						if (Math.abs(d.x) > r1 || Math.abs(d.y) > r1 || Math.abs(d.z) > r1)
						{
							continue;
						}
						var r = d.length();
						if (r > r1)
						{
							continue;
						}

						d.scaleInPlace(1.0 / r);
						r = r - r1;
						if (r > 0.5)
						{
							r = 0.5;
						}

						var f = d.scale(100000.0 * r);

						var v = _25047_JSO_dceddc17dd7dfc7178.subtract(pVel2);
						var s = Vector3.Dot(v, d);
						if (s > 0.0)
						{
							r = v.length();
							v.scaleInPlace(1.0 / r);
							if (r > 10.0)
							{
								r = 10.0;
							}

							r = -5000.0 * Math.pow(r, 0.3);
							f.addInPlace(v.scale(r));
						}

						this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f, p1);
						if (dt2Ratio != 0.0)
						{
							_25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f.scale(-dt2Ratio), p1);
						}

						pCrashes[a] += f.length() * (iteration_dt1 / this.mass);
					}
				}
			}

			var force2 = this.force.add(force);
			_25047_JSO_dceddc17dd7dfc7178.addInPlace(force2.scale(iteration_dt1 / this.mass));
			_25047_JSO_dceddc17dd7dfc7178.addInPlace(accel.scale(iteration_dt1));
			_25047_JSO_3a02fb201464a2244d.addInPlace(_25047_JSO_dceddc17dd7dfc7178.scale(iteration_dt1));

			var torque2 = this.torque.add(torque);
			angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(v0, torque2).scale(iteration_dt1 / this.I.x));
			angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(v1, torque2).scale(iteration_dt1 / this.I.y));
			angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(v2, torque2).scale(iteration_dt1 / this.I.z));

			var v = angVel.scale(iteration_dt1);
			v0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(v0, v));
			v1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(v1, v));
			v2.copyFrom(Vector3.Cross(v0, v1)).normalize();
			v1.copyFrom(Vector3.Cross(v2, v0)).normalize();
		}

		this._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);
		this.v0.copyFrom(v0);
		this.v1.copyFrom(v1);
		this.v2.copyFrom(v2);
		this._25047_JSO_dceddc17dd7dfc7178.copyFrom(_25047_JSO_dceddc17dd7dfc7178);
		this.angVel.copyFrom(angVel);

		for (var a = 0; a < n; ++a)
		{
			var crash = pCrashes[a] / dt;
			if (crash > 40.0)
			{
				pTrafficVehicles[a].hasMajorCrash = true;
				this.pGame.crashNotify(true);

				var pCrashSound3 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound3;
				if (!pCrashSound3.isPlaying)
				{
					pCrashSound3.play();
				}
			}
			else if (crash > 10.0)
			{
				this.pGame.crashNotify(false);

				var pCrashSound2 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound2;
				if (!pCrashSound2.isPlaying)
				{
					pCrashSound2.play();
				}
			}
			else if (crash > 0.0)
			{
				var pCrashSound1 = this.pGame.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pCrashSound1;
				if (!pCrashSound1.isPlaying)
				{
					pCrashSound1.setVolume(1.0);
					pCrashSound1.play();
				}
			}
		}
	}

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.simulate(dt);
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.refresh = function()
{
	this.simulate(0.0);

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.simulate(0.0);
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.update = function()
{
	this.pViewTag.pView.update();
	
	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c.update();
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.updateCollisionPosList = function()
{
	if (this.collisionPosListDirty)
	{
		var p = this._25047_JSO_3a02fb201464a2244d.add(this.v2.scale(-0.1));
		this.pCollisionPosList[0].copyFrom(p.add(this.v0.scale(0.9)));
		this.pCollisionPosList[1].copyFrom(p);
		this.pCollisionPosList[2].copyFrom(p.add(this.v0.scale(-0.8)));

		this.collisionPosListDirty = false;
	}

	return this.pCollisionPosList;
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.checkImproper = function()
{
	if (this.v2.z < 0.8 || this._25047_JSO_3a02fb201464a2244d.z < -1.0)
	{
		return true;
	}

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		if (_25047_JSO_06dee9b517e59e50c.touching)
		{
			return false;
		}
	}

	return true;
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.checkWrongDirection = function()
{
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pTires[0].pPoint.pViewTag.pView.pValidTriangle;
	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
	{
		return false;
	}
	
	var _25047_JSO_34a44a1af65c6d58 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca._25047_JSO_34a44a1af65c6d58;
	if (_25047_JSO_34a44a1af65c6d58.range < this.allowedMinRange)
	{
		return true;
	}

	if (this.v0.z < 0.6)
	{
		return Vector3.Dot(_25047_JSO_34a44a1af65c6d58.v0, this.v0) < 0.0;
	}
	
	return Vector3.Dot(_25047_JSO_34a44a1af65c6d58.v0, this.v0) < 0.5;
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.setTireSoftness = function(tireSoftness)
{
	this.tireSoftness = tireSoftness;

	var b1 = tireSoftness;
	var b2 = 1.0 - b1;

	var c1 = tireSoftness * tireSoftness;
	var c2 = 1.0 - c1;

	this.tireK1 = 4.9 * b1 + 2.6 * b2;
	this.tireK2 = 30.0 * c1 + 2.5 * c2;
	this.tireK3 = 6000.0 * b1 + 2000.0 * b2;

	this.spinK1 = 0.2 * c1 + 0.7 * c2;
	this.spinK2 = 2.0 * c1 + 0.8 * c2;

	this.brakeK = 200.0 * b1 + 40.0 * b2;

	if (tireSoftness == 1.0)
	{
		this.tireK1 *= 0.95;
		this.tireK2 *= 1.45;
		this.tireK3 *= 1.55;
		this.spinK1 *= 0.15;
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.setEngineMaxTorqueIndex = function(engineMaxTorqueIndex)
{
	this.engineMaxTorqueIndex = engineMaxTorqueIndex;
	if (engineMaxTorqueIndex == 0)
	{
		this.engineMaxTorque = 120.0;
	}
	else if (engineMaxTorqueIndex == 1)
	{
		this.engineMaxTorque = 150.0;
	}
	else if (engineMaxTorqueIndex == 2)
	{
		this.engineMaxTorque = 200.0;
	}

	this.setDrivingStyle(this.drivingStyle);
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.setDrivingStyle = function(drivingStyle)
{
	this.drivingStyle = drivingStyle;

	if (drivingStyle == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Economy)
	{
		this.drivingStyleEngineLimitAngVel1 = this.engineLimitAngVel * 0.4;
		this.drivingStyleEngineLimitAngVel2 = this.drivingStyleEngineLimitAngVel1 * 0.9;
		this.drivingStyleEngineMaxTorque = this.engineMaxTorque * 0.4;
		this.drivingStyleTireAngleK = 0.25;
	}
	else if (drivingStyle == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Normal)
	{
		this.drivingStyleEngineLimitAngVel1 = this.engineLimitAngVel * 0.5;
		this.drivingStyleEngineLimitAngVel2 = this.drivingStyleEngineLimitAngVel1 * 0.9;
		this.drivingStyleEngineMaxTorque = this.engineMaxTorque * 0.5;
		this.drivingStyleTireAngleK = 0.25;
	}
	else if (drivingStyle == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Sportive)
	{
		this.drivingStyleEngineLimitAngVel1 = this.engineLimitAngVel;
		this.drivingStyleEngineLimitAngVel2 = this.engineLimitAngVel * 0.95;
		this.drivingStyleEngineMaxTorque = this.engineMaxTorque;
		this.drivingStyleTireAngleK = 0.6;
	}
	else if (drivingStyle == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Race)
	{
		this.drivingStyleEngineLimitAngVel1 = this.engineLimitAngVel;
		this.drivingStyleEngineLimitAngVel2 = this.engineLimitAngVel * 0.95;
		this.drivingStyleEngineMaxTorque = this.engineMaxTorque;
		this.drivingStyleTireAngleK = 1.0;
	}
};

_25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.prototype.clean = function(translation)
{
	this._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
	this.prevPos.addInPlace(translation);

	for (var a = 0; a < this.pTires.length; ++a)
	{
		var _25047_JSO_06dee9b517e59e50c = this.pTires[a];
		_25047_JSO_06dee9b517e59e50c._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
		_25047_JSO_06dee9b517e59e50c.screwPos.addInPlace(translation);
		_25047_JSO_06dee9b517e59e50c.touchPos.addInPlace(translation);
		_25047_JSO_06dee9b517e59e50c.pPoint._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
	}

	for (var a = 0; a < this.pTorsoPoints.length; ++a)
	{
		var pTorsoPoint = this.pTorsoPoints[a];
		pTorsoPoint._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
	}
};

}