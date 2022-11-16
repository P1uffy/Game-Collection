with (BABYLON)
{

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b = function()
{
	this._25047_JSO_3a02fb201464a2244d = new Vector3();
	this.v0 = new Vector3();
	this.v1 = new Vector3();
	this.v2 = new Vector3();

	this.mass = 1.0;
	this.I = new Vector3(1, 1, 1);

	this._25047_JSO_dceddc17dd7dfc7178 = new Vector3();
	this.angVel = new Vector3();

	this.force = new Vector3();
	this.accel = new Vector3();
	this.torque = new Vector3();

	_25047_JSO_2020be7869b1d32ffd787ea718fd79f73708c414cbb6fffd5d0f.call(this);

	this.setBody();

	return this;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype = Object.create(_25047_JSO_2020be7869b1d32ffd787ea718fd79f73708c414cbb6fffd5d0f.prototype);
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.constructor = _25047_JSO_08bc0f7bddb22ece657320262d17ef504b;
pLiveScriptService.addClass(_25047_JSO_08bc0f7bddb22ece657320262d17ef504b);

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype._25047_JSO_3a02fb201464a2244d = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.v0 = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.v1 = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.v2 = null;

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.mass = 1.0;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.I = null;

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype._25047_JSO_dceddc17dd7dfc7178 = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.angVel = null;

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.force = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.accel = null;
_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.torque = null;

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setPos = function(_25047_JSO_3a02fb201464a2244d)
{
	this._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getPos = function()
{
	return this._25047_JSO_3a02fb201464a2244d;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setV0 = function(v0)
{
	this.v0.copyFrom(v0);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getV0 = function()
{
	return this.v0;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setV1 = function(v1)
{
	this.v1.copyFrom(v1);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getV1 = function()
{
	return this.v1;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setV2 = function(v2)
{
	this.v2.copyFrom(v2);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getV2 = function()
{
	return this.v2;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setBody = function()
{
	this.v0.set(1, 0, 0);
	this.v1.set(0, 1, 0);
	this.v2.set(0, 0, 1);
}

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setMass = function(mass)
{
	this.mass = mass;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getMass = function()
{
	return this.mass;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setI = function(I)
{
	this.I.copyFrom(I);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getI = function()
{
	return this.I;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setVel = function(_25047_JSO_dceddc17dd7dfc7178)
{
	this._25047_JSO_dceddc17dd7dfc7178.copyFrom(_25047_JSO_dceddc17dd7dfc7178);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getVel = function()
{
	return this._25047_JSO_dceddc17dd7dfc7178;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getVelAt = function(_25047_JSO_3a02fb201464a2244d)
{
	return this._25047_JSO_dceddc17dd7dfc7178.add(Vector3.Cross(this.angVel, _25047_JSO_3a02fb201464a2244d.subtract(this._25047_JSO_3a02fb201464a2244d)));
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setAngVel = function(angVel)
{
	this.angVel.copyFrom(angVel);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getAngVel = function()
{
	return this.angVel;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setForce = function(force)
{
	this.force.copyFrom(force);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getForce = function()
{
	return this.force;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setAccel = function(accel)
{
	this.accel.copyFrom(accel);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getAccel = function()
{
	return this.accel;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.setTorque = function(torque)
{
	this.torque.copyFrom(torque);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.getTorque = function()
{
	return this.torque;
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype._25047_JSO_b6b351b6be206e1312f5be65d3d845c4 = function(force, _25047_JSO_3a02fb201464a2244d)
{
	this.force.addInPlace(force);

	if (_25047_JSO_3a02fb201464a2244d)
	{
		this.torque.addInPlace(Vector3.Cross(_25047_JSO_3a02fb201464a2244d.subtract(this._25047_JSO_3a02fb201464a2244d), force));
	}
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype._25047_JSO_41eafb28153e1160201c607c1a390729b8c7 = function(accel)
{
	this.accel.addInPlace(accel);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype._25047_JSO_cab5c174362efe64b8f32021fffd692a230d = function(torque, _25047_JSO_3a02fb201464a2244d)
{
	if (_25047_JSO_3a02fb201464a2244d)
	{
		this.torque.addInPlace(Vector3.Cross(_25047_JSO_3a02fb201464a2244d.subtract(this._25047_JSO_3a02fb201464a2244d), force));
	}
	else
	{
		this.torque.addInPlace(torque);
	}
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.init = function ()
{
	this.force.set(0, 0, 0);
	this.accel.set(0, 0, 0);
	this.torque.set(0, 0, 0);
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.simulate = function(dt)
{
	this._25047_JSO_dceddc17dd7dfc7178.addInPlace(this.force.scale(dt / this.mass));
	this._25047_JSO_dceddc17dd7dfc7178.addInPlace(this.accel.scale(dt));

	this._25047_JSO_3a02fb201464a2244d.addInPlace(this._25047_JSO_dceddc17dd7dfc7178.scale(dt));

	this.angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(this.v0, this.torque).scale(dt / this.I.x));
	this.angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(this.v1, this.torque).scale(dt / this.I.y));
	this.angVel.addInPlace(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed(this.v2, this.torque).scale(dt / this.I.z));

	var v = this.angVel.scale(dt);
	this.v0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(this.v0, v));
	this.v1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(this.v1, v));
	this.v2.copyFrom(Vector3.Cross(this.v0, this.v1)).normalize();
	this.v1.copyFrom(Vector3.Cross(this.v2, this.v0)).normalize();
};

_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.fixMatrixByV1 = function()
{
	this.v2.copyFrom(Vector3.Cross(this.v0, this.v1)).normalize();
	this.v0.copyFrom(Vector3.Cross(this.v1, this.v2)).normalize();
};

}
