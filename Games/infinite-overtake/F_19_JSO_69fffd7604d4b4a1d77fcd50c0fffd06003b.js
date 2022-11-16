with (BABYLON)
{

_25047_JSO_3f2ee537e739c8e0 = function()
{
	this._25047_JSO_3a02fb201464a2244d = new Vector3();
	this.v0 = new Vector3(1, 0, 0);
	this.v1 = new Vector3(0, 1, 0);

	this.pVertexList = new Array(6);
	this.pNormalList = new Array(6);

	this.edge1Pos = new Vector3();
	this.edge1Dir = new Vector3();
	this.edge2Pos = new Vector3();
	this.edge2Dir = new Vector3();

	return this;
};

_25047_JSO_3f2ee537e739c8e0.prototype = Object.create(Object.prototype);
_25047_JSO_3f2ee537e739c8e0.prototype.constructor = _25047_JSO_3f2ee537e739c8e0;
pLiveScriptService.addClass(_25047_JSO_3f2ee537e739c8e0);

_25047_JSO_3f2ee537e739c8e0.prototype.id = 0;
_25047_JSO_3f2ee537e739c8e0.prototype.range = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype.speed1 = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype.speed2 = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype.deceleration1 = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype.deceleration2 = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype.modifiedSpeed1 = 0.5;
_25047_JSO_3f2ee537e739c8e0.prototype.modifiedSpeed2 = 0.5;

_25047_JSO_3f2ee537e739c8e0.prototype.pNextSlice = null;
_25047_JSO_3f2ee537e739c8e0.prototype.pPrevSlice = null;

_25047_JSO_3f2ee537e739c8e0.prototype.length = 0.0;
_25047_JSO_3f2ee537e739c8e0.prototype._25047_JSO_3a02fb201464a2244d = null;
_25047_JSO_3f2ee537e739c8e0.prototype.v0 = null;
_25047_JSO_3f2ee537e739c8e0.prototype.v1 = null;
_25047_JSO_3f2ee537e739c8e0.prototype.pVertexList = null;
_25047_JSO_3f2ee537e739c8e0.prototype.pNormalList = null;
_25047_JSO_3f2ee537e739c8e0.prototype.pTriangles = null;

_25047_JSO_3f2ee537e739c8e0.prototype.edge1Pos = null;
_25047_JSO_3f2ee537e739c8e0.prototype.edge1Dir = null;
_25047_JSO_3f2ee537e739c8e0.prototype.edge2Pos = null;
_25047_JSO_3f2ee537e739c8e0.prototype.edge2Dir = null;

_25047_JSO_3f2ee537e739c8e0.prototype.pTriangles = null;

_25047_JSO_3f2ee537e739c8e0.prototype.createTriangles = function()
{
	this.pTriangles = new Array(10);

	var pPrevVertexList = this.pPrevSlice.pVertexList;

	var n = 6;
	for (var a = 0; a < n - 1; ++a)
	{
		var pVertex0 = pPrevVertexList[a];
		var pVertex1 = pPrevVertexList[a + 1];
		var pVertex2 = this.pVertexList[a];
		var pVertex3 = this.pVertexList[a + 1];

		var pTriangle1 = new _25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b(this, pVertex0, pVertex2, pVertex1);
		var pTriangle2 = new _25047_JSO_7b77b0221a19bbfd7fcd50c0fffd06003b(this, pVertex1, pVertex2, pVertex3);

		var index1 = a * 2;
		var index2 = index1 + 1;
		this.pTriangles[index1] = pTriangle1;
		this.pTriangles[index2] = pTriangle2;

		pTriangle1.index = index1;
		pTriangle2.index = index2;
	}

	n = 10;
	for (var a = 0; a < n - 1; ++a)
	{
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pTriangles[a];

		var i1 = a + 1;
		var i2 = a + 2;

		if (i1 < n)
		{
			_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(this.pTriangles[i1]);
		}
		if (i2 < n)
		{
			_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(this.pTriangles[i2]);
		}
	}

	var pPrevTriangles = this.pPrevSlice.pTriangles;
	if (pPrevTriangles == null)
	{
		return;
	}

	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pTriangles[a];
		_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(pPrevTriangles[a]);

		var i1 = a - 1;
		var i2 = a + 1;
		var i3 = a + 2;

		if (i1 >= 0)
		{
			_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(pPrevTriangles[i1]);
		}
		if (i2 < n)
		{
			_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(pPrevTriangles[i2]);
		}
		if (i3 < n)
		{
			_25047_JSO_a6091513150509033f0ccea65fe3fffdca.addNeighbor(pPrevTriangles[i3]);
		}
	}

};

_25047_JSO_3f2ee537e739c8e0.prototype.findTriangle = function(_25047_JSO_3a02fb201464a2244d)
{
	if (this.pTriangles == null)
	{
		return null;
	}

	var n = this.pTriangles.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this.pTriangles[a];
		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca.checkInside(_25047_JSO_3a02fb201464a2244d))
		{
			return _25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		}
	}
	return null;
};

_25047_JSO_3f2ee537e739c8e0.prototype.findTargetPos = function(targetRange, _25047_JSO_3a02fb201464a2244d, direction, edgeDistance)
{
	var targetPos = this._25047_JSO_3a02fb201464a2244d.clone();

	var remainingTargetRange = targetRange;
	var pSlice2 = this;
	while (pSlice2 != null)
	{
		var pPrevSlice2 = pSlice2.pPrevSlice;
		if (pPrevSlice2 == null)
		{
			break;
		}

		var pEdgePos = null;
		var pEdgeDir = null;

		if (direction > 0.0)
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
		if (pSlice2 == this)
		{
			x1 = Vector3.Dot(_25047_JSO_3a02fb201464a2244d.subtract(pEdgePos), pEdgeDir);
		}
		var x2 = x1 + remainingTargetRange;

		var excess = x2 - pSlice2.length;
		var step = 0.0;

		if (excess > 0.0)
		{
			step = pSlice2.length - x1;
			remainingTargetRange -= step;

			if (direction > 0.0)
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

			targetPos.copyFrom(pEdgePos.add(pEdgeDir.scale(x2)));
			targetPos.addInPlace(pSlice2.v1.scale(direction * edgeDistance));

			pSlice2 = null;
		}
	}

	return targetPos;
};

_25047_JSO_3f2ee537e739c8e0.prototype.updateSpeed = function()
{
	var maxLength = 100.0;

	var pSlice1 = this;
	var totalLength1 = 0.0;
	var totalCurvature1 = 0.0;
	while (totalLength1 < maxLength)
	{
		var pNextSlice = pSlice1.pNextSlice;
		var length = pSlice1.length;

		var d = pNextSlice.v0.subtract(pSlice1.v0);
		totalCurvature1 += (Math.abs(d.x) + Math.abs(d.y) + Math.abs(d.z) * 3.0) / length * (maxLength - totalLength1);

		totalLength1 += length;
		pSlice1 = pNextSlice;
	}

	var pSlice2 = this;
	var totalLength2 = 0.0;
	var totalCurvature2 = 0.0;
	while (totalLength2 < maxLength)
	{
		var pPrevSlice = pSlice2.pPrevSlice;
		var length = pPrevSlice.length;

		var d = pPrevSlice.v0.subtract(pSlice2.v0);
		totalCurvature2 += (Math.abs(d.x) + Math.abs(d.y) + Math.abs(d.z) * 3.0) / length * (maxLength - totalLength2);

		totalLength2 += length;
		pSlice2 = pPrevSlice;
	}

	this.deceleration1 = Math.pow(totalCurvature1 / totalLength1, 0.8) * 10.0;
	this.deceleration2 = Math.pow(totalCurvature2 / totalLength2, 0.8) * 10.0;

	this.speed1 = 0.03 + 0.97 / (1.0 + this.deceleration1);
	this.speed2 = 0.03 + 0.97 / (1.0 + this.deceleration2);
};

_25047_JSO_3f2ee537e739c8e0.prototype.updateModifiedSpeed = function(trafficSpeed)
{
	this.modifiedSpeed1 = Math.pow(this.speed1, 0.3) * trafficSpeed;
	this.modifiedSpeed2 = Math.pow(this.speed2, 0.3) * trafficSpeed;
};

_25047_JSO_3f2ee537e739c8e0.prototype.clean = function(translation)
{
	this._25047_JSO_3a02fb201464a2244d.addInPlace(translation);

	for (var a = 0; a < 6; ++a)
	{
		this.pVertexList[a].addInPlace(translation);
	}

	this.edge1Pos.addInPlace(translation);
	this.edge2Pos.addInPlace(translation);

	if (this.pTriangles != null)
	{
		for (var a = 0; a < 10; ++a)
		{
			this.pTriangles[a].clean(translation);
		}
	}
};

}