with (BABYLON)
{

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b = function(_25047_JSO_34a44a1af65c6d58, pPos1, pPos2, pPos3)
{
	this._25047_JSO_34a44a1af65c6d58 = _25047_JSO_34a44a1af65c6d58;
	this.pPos1 = pPos1;
	this.pPos2 = pPos2;
	this.pPos3 = pPos3;
	this.centerPos = pPos1.add(pPos2).add(pPos3).scale(1.0 / 3.0);

	this.pNeighbors = [];

	this.dir1 = pPos2.subtract(pPos1);
	this.dir2 = pPos3.subtract(pPos2);
	this.dir3 = pPos1.subtract(pPos3);

	this.normal = Vector3.Cross(this.dir1, this.dir2);
	this.normal.normalize();

	this.zIntercept = this.normal.x * this.centerPos.x + this.normal.y * this.centerPos.y + this.normal.z * this.centerPos.z;

	this.v0 = this.dir1.normalizeToNew();
	this.v1 = Vector3.Cross(this.normal, this.v0);

	this.dir1.set(-this.dir1.y, this.dir1.x, 0.0);
	this.dir1.normalize();
	
	this.dir2.set(-this.dir2.y, this.dir2.x, 0.0);
	this.dir2.normalize();

	this.dir3.set(-this.dir3.y, this.dir3.x, 0.0);
	this.dir3.normalize();

	return this;
};

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype = Object.create(Object.prototype);
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.constructor = _25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b;
pLiveScriptService.addClass(_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b);

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype._25047_JSO_34a44a1af65c6d58 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.index = -1;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.pPos1 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.pPos2 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.pPos3 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.centerPos = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.pNeighbors = null;

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.dir1 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.dir2 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.dir3 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.normal = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.zIntercept = 0.0;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.v0 = null;
_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.v1 = null;

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.checkInside = function(_25047_JSO_3a02fb201464a2244d)
{
	var epsilon = -0.01;
	if (Vector3.Dot(_25047_JSO_3a02fb201464a2244d.subtract(this.pPos1), this.dir1) < epsilon || 
		Vector3.Dot(_25047_JSO_3a02fb201464a2244d.subtract(this.pPos2), this.dir2) < epsilon || 
		Vector3.Dot(_25047_JSO_3a02fb201464a2244d.subtract(this.pPos3), this.dir3) < epsilon)
	{
		return false;
	}
	return true;
};

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.addNeighbor = function(_25047_JSO_a6091513150509033f0ccea65fe3fffdca)
{
	this.pNeighbors.push(_25047_JSO_a6091513150509033f0ccea65fe3fffdca);
	_25047_JSO_a6091513150509033f0ccea65fe3fffdca.pNeighbors.push(this);
};

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.findNeighbor = function(_25047_JSO_3a02fb201464a2244d)
{
	var n = this.pNeighbors.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pNeighbors[a];
		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca.checkInside(_25047_JSO_3a02fb201464a2244d))
		{
			return _25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		}
	}
	return null;
};

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.findTriangle = function(_25047_JSO_3a02fb201464a2244d)
{
	if (this.checkInside(_25047_JSO_3a02fb201464a2244d))
	{
		return this;
	}

	return this.findNeighbor(_25047_JSO_3a02fb201464a2244d);
};

_25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b.prototype.clean = function(translation)
{
	this.centerPos.addInPlace(translation);
	this.zIntercept = this.normal.x * this.centerPos.x + this.normal.y * this.centerPos.y + this.normal.z * this.centerPos.z;
};

}
