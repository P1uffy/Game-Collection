with (BABYLON)
{

_25047_JSO_312b6dddd51ad1a3 = function(_25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b, screwRelPos)
{
	this.screwRelPos = new Vector3();
	this.screwRelPos.copyFrom(screwRelPos);
	new TireView(this);

	_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.call(this);
	this.mass = 50.0;
	this.I.scaleInPlace(this.mass * 0.4);

	this.touchPos = new Vector3();
	this.screwPos = new Vector3();

	this.slipRelPos = new Vector3();
	this.slipRelVel = new Vector3();

	this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b = _25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b;
	this.pPoint = new Point(_25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.pGame);

	this.simulatePos();

	return this;
};

_25047_JSO_312b6dddd51ad1a3.prototype = Object.create(_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype);
_25047_JSO_312b6dddd51ad1a3.prototype.constructor = _25047_JSO_312b6dddd51ad1a3;
pLiveScriptService.addClass(_25047_JSO_312b6dddd51ad1a3);

_25047_JSO_312b6dddd51ad1a3.prototype.radius = 0.4;
_25047_JSO_312b6dddd51ad1a3.prototype.index = -1;
_25047_JSO_312b6dddd51ad1a3.prototype._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b = null;
_25047_JSO_312b6dddd51ad1a3.prototype.screwRelPos = null;
_25047_JSO_312b6dddd51ad1a3.prototype.screwPos = null;

_25047_JSO_312b6dddd51ad1a3.prototype.touchPos = null;
_25047_JSO_312b6dddd51ad1a3.prototype.touching = false;
_25047_JSO_312b6dddd51ad1a3.prototype.pPoint = null;
_25047_JSO_312b6dddd51ad1a3.prototype.angle = 0.0;

_25047_JSO_312b6dddd51ad1a3.prototype.slipRelPos = null;
_25047_JSO_312b6dddd51ad1a3.prototype.slipRelVel = null;
_25047_JSO_312b6dddd51ad1a3.prototype.brakeSlipRelAng = 0.0;
_25047_JSO_312b6dddd51ad1a3.prototype.brakeSlipRelAngVel = 0.0;
_25047_JSO_312b6dddd51ad1a3.prototype.slipB2 = 0.0;

_25047_JSO_312b6dddd51ad1a3.prototype.newTriangleTime = 0.0;

_25047_JSO_312b6dddd51ad1a3.prototype.solveTire = function(dt, targetSlipB2)
{
	this.slipB2 += (targetSlipB2 - this.slipB2) * 10.0 * dt;
	var slipB1 = 1.0 - this.slipB2;

	var k1 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.tireK1;
	var k2 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.tireK2;
	var k3 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.tireK3;
	var brakeK = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.brakeK;

	var pVehiclePos = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b._25047_JSO_3a02fb201464a2244d;
	var pVehicleV0 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v0;
	var pVehicleV1 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v1;
	var pVehicleV2 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v2;

	this.pPoint.updateTriangle3(this._25047_JSO_3a02fb201464a2244d.subtract(pVehicleV2.scale(this.radius)), 20);
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
	var pPrevTriangle = this.pPoint.pViewTag.pView.pPrevTriangle;

	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != pPrevTriangle)
	{
		this.newTriangleTime = 0.3;
	}
	this.newTriangleTime -= dt;
	if (this.newTriangleChangeTime < 0.0 || pPrevTriangle == null)
	{
		this.newTriangleTime = 0.0;
	}

	var f = new Vector3();

	this.touching = false;
	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
	{
		var pPos = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos;
		var pV0 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.v0;
		var pV1 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.v1;
		var pV2 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.normal;
		var zIntercept = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.zIntercept;

		if (this.newTriangleTime > 0.0)
		{
			var b1 = this.newTriangleTime / 0.3;
			var b2 = 1.0 - b1;
			pV2 = pV2.scale(b2).add(pPrevTriangle.normal.scale(b1));
			zIntercept = zIntercept * b2 + pPrevTriangle.zIntercept * b1;
		}

		var x = Vector3.Dot(this.v1, pV0);
		var y = Vector3.Dot(this.v1, pV1);
		var z = Vector3.Dot(this.v1, pV2);
		var r2 = x * x + y * y;
		if (r2 > 1.0)
		{
			r2 = 1.0;
		}

		if (r2 < 0.01)
		{
			this.touchPos.copyFrom(this._25047_JSO_3a02fb201464a2244d);
		}
		else
		{
			var k = Math.sqrt((1.0 - r2) / r2);
			var x1 = k * x;
			var y1 = k * y;
			var z1 = -Math.sqrt(r2);
			var v = pV0.scale(x1).add(pV1.scale(y1)).add(pV2.scale(z1));
			this.touchPos.copyFrom(this._25047_JSO_3a02fb201464a2244d.add(v.scale(this.radius)));
		}

		var h = -((zIntercept - pV2.x * this.touchPos.x - pV2.y * this.touchPos.y) / pV2.z - this.touchPos.z);
		if (h < 0.0)
		{
			if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca.index <= 1 || _25047_JSO_a6091513150509033f0ccea65fe3fffdca.index >= 8)
			{
				f.addInPlace(pV2.scale(-50000.0 * h));
				k1 *= 0.1;
			}
			else
			{
				f.addInPlace(pV2.scale(-250000.0 * h));
			}

			var touchVel = this.getVelAt(this.touchPos);
			var touchVel2Length = Vector3.Dot(touchVel, pV2);
			if (touchVel2Length > 0.0)
			{
				touchVel2Length *= 0.3;
			}
			var touchVel2 = pV2.scale(touchVel2Length);
			var touchVel1 = touchVel.subtract(touchVel2);

			var v = touchVel1.length() / k2;
			var k = (-1 / (v + 1) + 1) * (0.6 / (1 + v) + 0.1) * k1;
			if (h < -0.03)
			{
				h = -0.03;
			}
			k *= -h;
			f.addInPlace(touchVel1.normalizeToNew().scale(-(800000.0 * slipB1 + 400000.0 * this.slipB2) * k));
			f.addInPlace(touchVel2.scale(-1000.0));

			var slipV0 = Vector3.Cross(this.v1, pV2).normalizeToNew();
			var slipV1 = Vector3.Cross(pV2, slipV0);
			this.slipRelVel.x = -Vector3.Dot(touchVel, slipV0);
			this.slipRelVel.y = -Vector3.Dot(touchVel, slipV1);

			var slipMaxX = 0.03 * slipB1 + 0.3 * this.slipB2;
			var slipMaxY = slipMaxX;

			this.slipRelPos.addInPlace(this.slipRelVel.scale(dt));
			this.touching = true;

			if (this.slipRelPos.x > slipMaxX)
			{
				this.slipRelPos.x = slipMaxX;
			}
			else if (this.slipRelPos.x < -slipMaxX)
			{
				this.slipRelPos.x = -slipMaxX;
			}

			if (this.slipRelPos.y > slipMaxY)
			{
				this.slipRelPos.y = slipMaxY;
			}
			else if (this.slipRelPos.y < -slipMaxY)
			{
				this.slipRelPos.y = -slipMaxY;
			}
			
			var slipKx = 30000.0 * slipB1 + k3 * this.slipB2;
			var slipKy = 30000.0 * slipB1 + 2500.0 * this.slipB2;

			f.addInPlace(
				slipV0.scale(slipKx * this.slipRelPos.x / (Math.pow(Math.abs(this.slipRelVel.x / 3.0), 1.0) + 1.0)).add(
				slipV1.scale(slipKy * this.slipRelPos.y / (Math.pow(Math.abs(this.slipRelVel.y / 3.0), 1.0) + 1.0))));
		}
	}

	var f2 = pVehicleV2.scale(Vector3.Dot(f, pVehicleV2));
	var f1 = f.subtract(f2);

	var screwPosVel = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.getVelAt(this.screwPos);
	var screwH = Vector3.Dot(this._25047_JSO_3a02fb201464a2244d.subtract(this.screwPos), pVehicleV2);
	var screwV = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178.subtract(screwPosVel), pVehicleV2);
	var f3 = new Vector3();
	f3.addInPlace(pVehicleV2.scale(-80000.0 * screwH));
	f3.addInPlace(pVehicleV2.scale(-3000.0 * _25047_JSO_201e6f00bcce7ae9f0.powSigned(screwV, 0.5)));

	this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f3);
	this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f3.negate(), this.screwPos);

	if (this.touching)
	{
		this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f1, this.touchPos);

		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f2);
		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f1, this.touchPos);
	}
	else
	{
		this.slipRelPos.set(0, 0, 0);
	}

	this._25047_JSO_41eafb28153e1160201c607c1a390729b8c7(pVehicleV2.scale(Vector3.Dot(this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.gravity, pVehicleV2)));

	if (Math.abs(this.slipRelVel.x) < 2.0 && this.brake > 0.0)
	{
		this.brakeSlipRelAngVel = Vector3.Dot(this.angVel, this.v1);
		this.brakeSlipRelAng += this.brakeSlipRelAngVel * dt;

		var brakeSlipRelAngMax = 0.04 * slipB1 + 0.1 * this.slipB2;
		if (this.brakeSlipRelAng > brakeSlipRelAngMax)
		{
			this.brakeSlipRelAng = brakeSlipRelAngMax;
		}
		else if (this.brakeSlipRelAng < -brakeSlipRelAngMax)
		{
			this.brakeSlipRelAng = -brakeSlipRelAngMax;
		}
		
		var slipK = 25000.0 * slipB1 + 10000.0 * this.slipB2;
		this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.v1.scale(
			-brakeK * this.brake * this.brakeSlipRelAngVel -
			slipK * this.brake * this.brakeSlipRelAng / (Math.abs(this.brakeSlipRelAngVel / 5.0) + 1.0)));
	}
	else
	{
		this.brakeSlipRelAng = 0.0;
	}

	var h = this._25047_JSO_3a02fb201464a2244d.z;
	if (h < 0.0)
	{
		if (h < -1.0)
		{
			h = -1.0;
		}

		this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this._25047_JSO_dceddc17dd7dfc7178.scale(Math.pow(this._25047_JSO_dceddc17dd7dfc7178.length(), 2.0) * 10.0 * h), this._25047_JSO_3a02fb201464a2244d);
	}
};

_25047_JSO_312b6dddd51ad1a3.prototype.simulate = function(dt)
{
	_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.simulate.call(this, dt);
	this.simulatePos();
};

_25047_JSO_312b6dddd51ad1a3.prototype.simulatePos = function()
{
	var pVehiclePos = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b._25047_JSO_3a02fb201464a2244d;
	var pVehicleV0 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v0;
	var pVehicleV1 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v1;
	var pVehicleV2 = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.v2;

	this.screwPos.copyFrom(pVehiclePos.
		add(pVehicleV0.scale(this.screwRelPos.x)).
		add(pVehicleV1.scale(this.screwRelPos.y)).
		add(pVehicleV2.scale(this.screwRelPos.z)));

	var p = this._25047_JSO_3a02fb201464a2244d.subtract(this.screwPos);
	this._25047_JSO_3a02fb201464a2244d.subtractInPlace(pVehicleV0.scale(Vector3.Dot(p, pVehicleV0)));
	this._25047_JSO_3a02fb201464a2244d.subtractInPlace(pVehicleV1.scale(Vector3.Dot(p, pVehicleV1)));

	this.v1.copyFrom(pVehicleV1);
	if (this.angle != 0.0)
	{
		this.v1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(this.v1, pVehicleV2.scale(this.angle)));
	}
	this.fixMatrixByV1();

	var v = this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.getVelAt(this._25047_JSO_3a02fb201464a2244d);
	v.subtractInPlace(pVehicleV2.scale(Vector3.Dot(v, pVehicleV2)));
	this._25047_JSO_dceddc17dd7dfc7178.copyFrom(v.add(pVehicleV2.scale(Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178, pVehicleV2))));

	v.copyFrom(this._25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.angVel);
	v.subtractInPlace(this.v1.scale(Vector3.Dot(v, this.v1)));
	this.angVel.copyFrom(v.add(this.v1.scale(Vector3.Dot(this.angVel, this.v1))));
};

_25047_JSO_312b6dddd51ad1a3.prototype.update = function()
{
	this.pViewTag.pView.update();
};

}
