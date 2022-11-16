with (BABYLON)
{

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd = function(_25047_JSO_465746d13e6645ff002a503ccba238fffd, screwRelPos)
{
	this.screwRelPos = new Vector3();
	this.screwRelPos.copyFrom(screwRelPos);

	_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.call(this);

	this._25047_JSO_465746d13e6645ff002a503ccba238fffd = _25047_JSO_465746d13e6645ff002a503ccba238fffd;
	this.pPoint = new Point(_25047_JSO_465746d13e6645ff002a503ccba238fffd.pGame);

	return this;
};

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype = Object.create(_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype);
_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.constructor = _25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd;
pLiveScriptService.addClass(_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd);

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.radius = 0.4;
_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.index = -1;
_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype._25047_JSO_465746d13e6645ff002a503ccba238fffd = null;
_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.screwRelPos = null;
_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.suspensionZ = 0.0;

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.pPoint = null;

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.init = function()
{
};

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.solve = function()
{
	var pPointView = this.pPoint.pViewTag.pView;
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = null;

	if (this.index == 0)
	{
		this.pPoint.updateTriangle3(this._25047_JSO_3a02fb201464a2244d, 5);
		_25047_JSO_a6091513150509033f0ccea65fe3fffdca = pPointView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
	}
	else
	{
		this.pPoint.updateTriangle(this._25047_JSO_3a02fb201464a2244d);
		_25047_JSO_a6091513150509033f0ccea65fe3fffdca = pPointView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;

		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
		{
			var pTrafficTire2 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.pTrafficTires[0];
			var pTriangle2 = pTrafficTire2.pPoint.pViewTag.pView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
			if (pTriangle2 != null)
			{
				pPointView.pValidTriangle = pTriangle2;
				pPointView.updateTriangle3(5);
				_25047_JSO_a6091513150509033f0ccea65fe3fffdca = pPointView._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
			}
		}
	}

	this.suspensionZ = 0.0;

	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
	{
		var pTrafficVehiclePos = this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d;
		var pTrafficVehicleV0 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v0;
		var pTrafficVehicleV1 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v1;
		var pTrafficVehicleV2 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v2;

		var pPos = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos;
		var pV0 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.v0;
		var pV1 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.v1;
		var pV2 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.normal;
		var zIntercept = _25047_JSO_a6091513150509033f0ccea65fe3fffdca.zIntercept;

		var z = this._25047_JSO_3a02fb201464a2244d.z - this.radius;
		var h = -((zIntercept - pV2.x * this._25047_JSO_3a02fb201464a2244d.x - pV2.y * this._25047_JSO_3a02fb201464a2244d.y) / pV2.z - z);
		if (h < 0.0)
		{
			if (h < -0.5)
			{
				h = -0.5;
			}

			this.suspensionZ = -h;
	
			if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca.index <= 1 || _25047_JSO_a6091513150509033f0ccea65fe3fffdca.index >= 8)
			{
				this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(pTrafficVehicleV2.scale(
					-250000.0 * h - 8000.0 * Vector3.Dot(this._25047_JSO_465746d13e6645ff002a503ccba238fffd.getVelAt(this._25047_JSO_3a02fb201464a2244d), pTrafficVehicleV2)), this._25047_JSO_3a02fb201464a2244d);

				this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_dceddc17dd7dfc7178.scale(-4000.0));
				this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_cab5c174362efe64b8f32021fffd692a230d(this._25047_JSO_465746d13e6645ff002a503ccba238fffd.angVel.scale(-500.0));
			}
			else
			{
				this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(pTrafficVehicleV2.scale(
					-50000.0 * h - 2000.0 * Vector3.Dot(this._25047_JSO_465746d13e6645ff002a503ccba238fffd.getVelAt(this._25047_JSO_3a02fb201464a2244d), pTrafficVehicleV2)), this._25047_JSO_3a02fb201464a2244d);
			}
		}
	}
};

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.simulate = function(dt)
{
	var pTrafficVehiclePos = this._25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d;
	var pTrafficVehicleV0 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v0;
	var pTrafficVehicleV1 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v1;
	var pTrafficVehicleV2 = this._25047_JSO_465746d13e6645ff002a503ccba238fffd.v2;

	this._25047_JSO_3a02fb201464a2244d.copyFrom(pTrafficVehiclePos.
		add(pTrafficVehicleV0.scale(this.screwRelPos.x)).
		add(pTrafficVehicleV1.scale(this.screwRelPos.y)).
		add(pTrafficVehicleV2.scale(this.screwRelPos.z)));
};

_25047_JSO_7da621222c20141dd82ef865c02122bf1549fffd.prototype.update = function()
{
	this.pViewTag.pView.update();
};

}
