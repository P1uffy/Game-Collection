with (BABYLON)
{

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd = function(pGame)
{
	_25047_JSO_002a503ccba238fffd.call(this, pGame);

	this.mass = 1200.0;
	this.I.scaleInPlace(this.mass * 0.7);
	this.I.x *= 2.0;

	this.gravity = new Vector3(0, 0, -12.0);

	var scale = 0.6;

	this.pTrafficTires = [];
	for (var a = 1; a > -2; a -= 2)
	{
		for (var b = 1; b > -2; b -= 2)
		{
			var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = new _25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd(this, new Vector3(a * 1.5 + 0.2, b * 1.2, -0.1).scale(scale));
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.radius *= scale;
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.index = this.pTrafficTires.length;
			this.pTrafficTires.push(_25047_JSO_465746d13e6645ff312b6dddd51ad1a3);
		}
	}

	this.targetPos = new Vector3();
	this.targetDir = new Vector3();

	new TrafficVehicleView(this);

	return this;
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype = Object.create(_25047_JSO_002a503ccba238fffd.prototype);
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.constructor = _25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd;
pLiveScriptService.addClass(_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd);

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.gravity = null;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.range = 0.0;

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.pTrafficTires = null;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.direction = 1.0;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.targetPos = null;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.targetDir = null;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.targetForceFactor = 7000.0;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.maxSpeed = 50.0;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.edgeDistance = 1.2;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.tireAngle = 0.0;

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.pFollowedVehicle = null;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.distanceToFollowedVehicle = 0.0;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.distanceTreshold = 20.0;

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.hasMajorCrash = false;
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.majorCrashTime = 0.0;

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.initialize = function(_25047_JSO_34a44a1af65c6d58, direction)
{
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_34a44a1af65c6d58.pTriangles[_25047_JSO_34a44a1af65c6d58.pTriangles.length / 2 - Math.round((direction + 1.0) * 0.6)*0];
	var p = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos.clone();
	p.z += 0.5;

	this.setPos(p);
	this.range = _25047_JSO_34a44a1af65c6d58.range;
	this.setVel(new Vector3());
	this.setAngVel(new Vector3());
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

	for (var a = 0; a < this.pTrafficTires.length; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[a];
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.setAngVel(new Vector3());
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.simulate(0.0);

		var pPointView = _25047_JSO_465746d13e6645ff312b6dddd51ad1a3.pPoint.pViewTag.pView;
		pPointView.setTriangle(_25047_JSO_a6091513150509033f0ccea65fe3fffdca);
		pPointView.updateTriangle3(5);
	}

	this.hasMajorCrash = false;
	this.majorCrashTime = 0.0;
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.init = function()
{
	_25047_JSO_002a503ccba238fffd.prototype.init.call(this);

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[a];
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.init();
	}
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.solve = function()
{
	var airborn = false;
	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[a];
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.solve();

		if (_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.suspensionZ <= 0.0)
		{
			airborn = true;
		}
	}

	var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[0];
	var pPoint = _25047_JSO_465746d13e6645ff312b6dddd51ad1a3.pPoint;
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
	{
		return;
	}

	var velLength = this._25047_JSO_dceddc17dd7dfc7178.length();
	var velV0 = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178, this.v0);
	var velV1 = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178, this.v1);

	var _25047_JSO_34a44a1af65c6d58 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca._25047_JSO_34a44a1af65c6d58;
	this.range = _25047_JSO_34a44a1af65c6d58.range;

	var targetRange = 5.0 + Math.pow(velLength, 1.5) * 0.1;
	var remainingTargetRange = targetRange;
	this.targetDir.set(0, 0, 0);

	var pSlice2 = _25047_JSO_34a44a1af65c6d58;
	while (pSlice2 != null)
	{
		var pPrevSlice2 = pSlice2.pPrevSlice;
		if (pPrevSlice2 == null)
		{
			break;
		}

		var pEdgePos = null;
		var pEdgeDir = null;

		if (this.direction > 0.0)
		{
			pEdgePos = pPrevSlice2.edge2Pos;
			pEdgeDir = pPrevSlice2.edge2Dir;
		}
		else
		{
			pEdgePos = pSlice2.edge1Pos;
			pEdgeDir = pSlice2.edge1Dir;
		}

		var x1 = 0.0;
		if (pSlice2 == _25047_JSO_34a44a1af65c6d58)
		{
			x1 = Vector3.Dot(this._25047_JSO_3a02fb201464a2244d.subtract(pEdgePos), pEdgeDir);
		}
		var x2 = x1 + remainingTargetRange;

		var excess = x2 - pSlice2.length;
		var step = 0.0;

		if (excess > 0.0)
		{
			step = pSlice2.length - x1;
			remainingTargetRange -= step;

			if (this.direction > 0.0)
			{
				pSlice2 = pSlice2.pNextSlice;
			}
			else
			{
				pSlice2 = pSlice2.pPrevSlice;
			}
		}
		else
		{
			step = remainingTargetRange;
			remainingTargetRange = 0.0;

			this.targetPos.copyFrom(pEdgePos.add(pEdgeDir.scale(x2)));
			this.targetPos.addInPlace(pSlice2.v1.scale(this.direction * this.edgeDistance));

			pSlice2 = null;
		}

		this.targetDir.addInPlace(pEdgeDir.scale(step));
	}
	this.targetDir.scaleInPlace(1.0 / targetRange);

	this._25047_JSO_41eafb28153e1160201c607c1a390729b8c7(this.gravity);
	this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this._25047_JSO_dceddc17dd7dfc7178.scale(-2.0 * velLength));

	if (this.hasMajorCrash)
	{
		if (this.majorCrashTime > 4.0)
		{
			var k = _25047_JSO_201e6f00bcce7ae9f0.powSigned(velV0, 0.5);
			this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this.v0.scale(-5000.0 * k));
		}

		this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.angVel.scale(-8000.0));
	}
	else
	{
		this._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this.angVel.scale(-500.0));
	}

	var k = _25047_JSO_201e6f00bcce7ae9f0.powSigned(velV1, 0.5);
	if (airborn)
	{
		var f = this.v1.scale(-40000.0 * k).add(this._25047_JSO_dceddc17dd7dfc7178.scale(-300.0));
		f.z = 0.0;
		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f, this._25047_JSO_3a02fb201464a2244d.add(this.v2.scale(-0.1)));
		return;
	}
	else
	{
		var f = this.v1.scale(-40000.0 * k);
		f.z = 0.0;
		this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f, this._25047_JSO_3a02fb201464a2244d.add(this.v2.scale(-0.3)));
	}


	if (this.hasMajorCrash)
	{
		return;
	}

	var p = this.targetPos.subtract(this.targetDir.scale(targetRange * 0.3));
	this.tireAngle = 6.0 * Vector3.Dot(p.subtract(this._25047_JSO_3a02fb201464a2244d), this.v1) / targetRange;
	if (Math.abs(this.tireAngle) < 0.1)
	{
		this.tireAngle = 0.0;
	}
	this.tireAngle += -_25047_JSO_201e6f00bcce7ae9f0.powSigned(this.angVel.z, 2.0) * 1.7;
	this.tireAngle = _25047_JSO_201e6f00bcce7ae9f0.powSigned(this.tireAngle, 2.5) * 5.0;

	var maxTireAngle = 0.9;
	if (this.tireAngle > maxTireAngle)
	{
		this.tireAngle = maxTireAngle;
	}
	else if (this.tireAngle < -maxTireAngle)
	{
		this.tireAngle = -maxTireAngle;
	}

	var torqueZ = _25047_JSO_201e6f00bcce7ae9f0.powSigned(this.tireAngle, 0.5) * 60000.0 * Math.abs(velV1 * velV0);
	var maxTorqueZ = 10000.0;
	if (torqueZ > maxTorqueZ)
	{
		torqueZ = maxTorqueZ;
	}
	else if (torqueZ < -maxTorqueZ)
	{
		torqueZ = -maxTorqueZ;
	}
	this.torque.z += torqueZ;

	var v = this.targetPos.subtract(this._25047_JSO_3a02fb201464a2244d);
	v.z = 0.0;
	v.normalize();

	var speed = 0.0;
	var deceleration = 0.0;
	if (this.direction > 0.0)
	{
		speed = _25047_JSO_34a44a1af65c6d58.modifiedSpeed1 * 0.8 + _25047_JSO_34a44a1af65c6d58.modifiedSpeed2 * 0.2;
		deceleration = _25047_JSO_34a44a1af65c6d58.deceleration1;
	}
	else
	{
		speed = _25047_JSO_34a44a1af65c6d58.modifiedSpeed2 * 0.8 + _25047_JSO_34a44a1af65c6d58.modifiedSpeed1 * 0.2;
		deceleration = _25047_JSO_34a44a1af65c6d58.deceleration2;
	}

	speed = speed * this.maxSpeed - velV0;

	if (this.pFollowedVehicle != null)
	{
		var velDifference = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178.subtract(this.pFollowedVehicle._25047_JSO_dceddc17dd7dfc7178), this.v0);
		if (velDifference < 0.0)
		{
			velDifference = 0.0;
		}

		var distanceTreshold = this.distanceTreshold + velDifference * 3.0;
		if (this.distanceToFollowedVehicle < distanceTreshold)
		{
			var d = (distanceTreshold - this.distanceToFollowedVehicle) / distanceTreshold;
			speed -= Math.pow(d, 3.0) * (velLength + 2.0) * 10.0;
		}
	}

	if (deceleration > 0.1)
	{
		speed -= Math.pow(deceleration - 0.1, 1.0) * Math.pow(velLength, 4.0) * 0.000002;
	}

	var speed2 = 15.0 - velLength * 0.2;
	if (speed > speed2)
	{
		speed = speed2;
	}
	else if (speed < -10.0)
	{
		speed = -10.0;
	}

	if (speed < 0.0 && velV0 > 0.0)
	{
		speed *= (2.0 + velLength * 0.3);
	}

	this._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(v.scale(10.0 * this.mass * _25047_JSO_34a44a1af65c6d58.v0.z * this.direction +
		0.06 * speed * this.targetForceFactor));
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.simulate = function(dt)
{
	_25047_JSO_002a503ccba238fffd.prototype.simulate.call(this, dt);

	var pTrafficTire0 = this.pTrafficTires[0];
	var d = Vector3.Dot(this._25047_JSO_dceddc17dd7dfc7178, this.v0) / pTrafficTire0.radius;

	var tireAngle2 = 0.0;
	if (d > 0.5)
	{
		tireAngle2 = this.angVel.z * 20.0 / d;
	}
	if (tireAngle2 > 0.9)
	{
		tireAngle2 = 0.9;
	}
	else if (tireAngle2 < -0.9)
	{
		tireAngle2 = -0.9;
	}

	d *= dt;

	var pT0V0 = pTrafficTire0.v0;
	var pT0V1 = pTrafficTire0.v1;
	var pT0V2 = pTrafficTire0.v2;
	pT0V1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(this.v1, this.v2.scale(tireAngle2)));
	pT0V0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(pT0V0, pT0V1.scale(d)));
	pTrafficTire0.fixMatrixByV1();

	var pTrafficTire2 = this.pTrafficTires[2];
	var pT2V0 = pTrafficTire2.v0;
	var pT2V1 = pTrafficTire2.v1;
	var pT2V2 = pTrafficTire2.v2;
	pT2V1.copyFrom(this.v1);
	pT2V0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(pT2V0, pT2V1.scale(d)));
	pTrafficTire2.fixMatrixByV1();

	for (var a = 0; a < 4; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[a];
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.simulate(dt);

		if (a == 1)
		{
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v0.copyFrom(pT0V0);
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v1.copyFrom(pT0V1);
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v2.copyFrom(pT0V2);
		}
		else if (a == 3)
		{
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v0.copyFrom(pT2V0);
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v1.copyFrom(pT2V1);
			_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.v2.copyFrom(pT2V2);
		}
	}

	if (this.hasMajorCrash)
	{
		this.majorCrashTime += dt;
	}
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.update = function()
{
	var pTrafficVehicleView = this.pViewTag.pView;
	pTrafficVehicleView.update();
};

_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.checkTriangleValidity = function()
{
	return (this.pTrafficTires[0].pPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null);
};
	
_25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd.prototype.clean = function(translation)
{
	this._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
	this.targetPos.addInPlace(translation);

	for (var a = 0; a < this.pTrafficTires.length; ++a)
	{
		var _25047_JSO_465746d13e6645ff312b6dddd51ad1a3 = this.pTrafficTires[a];
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
		_25047_JSO_465746d13e6645ff312b6dddd51ad1a3.pPoint._25047_JSO_3a02fb201464a2244d.addInPlace(translation);
	}

};

}