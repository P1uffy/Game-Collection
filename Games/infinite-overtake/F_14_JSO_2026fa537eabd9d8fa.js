with (BABYLON)
{

_25047_JSO_78ac15334a20202b5 = function(pGameView)
{
	this.pGameView = pGameView;

	if (_25047_JSO_78ac15334a20202b5.pMesh1Material == null)
	{
		var k = 0.4;
		var pMesh1Material = new StandardMaterial("", null);
		pMesh1Material.ambientColor = new Color3(0.6, 0.6, 0.6).scale(0.2 * k);
		pMesh1Material.diffuseColor = new Color3(0.6, 0.6, 0.6).scale(1.0 * k);
		pMesh1Material.emissiveColor = new Color3(0.6, 0.6, 0.6).scale(0.2 * k);
		pMesh1Material.specularColor = new Color3(0.6, 0.6, 0.6).scale(0.8 * k);
		_25047_JSO_78ac15334a20202b5.pMesh1Material = pMesh1Material;

		var pMesh2Material = new StandardMaterial("", null);
		pMesh2Material.ambientColor = new Color3(0.6, 0.6, 0.55).scale(0.1);
		pMesh2Material.diffuseColor = new Color3(0.6, 0.6, 0.55).scale(0.5);
		pMesh2Material.emissiveColor = new Color3(0.6, 0.6, 0.55).scale(0.1);
		pMesh2Material.specularColor = new Color3(0.6, 0.6, 0.55).scale(1.0);
		_25047_JSO_78ac15334a20202b5.pMesh2Material = pMesh2Material;

		var pMesh3Material = new StandardMaterial("", null);
		pMesh3Material.ambientColor = new Color3(229 / 255.0, 83 / 255.0, 7 / 255.0).scale(0.2);
		pMesh3Material.diffuseColor = new Color3(229 / 255.0, 83 / 255.0, 7 / 255.0).scale(0.6);
		pMesh3Material.emissiveColor = new Color3(229 / 255.0, 83 / 255.0, 7 / 255.0).scale(0.2);
		pMesh3Material.specularColor = new Color3(229 / 255.0, 83 / 255.0, 7 / 255.0).scale(0.4);
		_25047_JSO_78ac15334a20202b5.pMesh3Material = pMesh3Material;
	}

	this.pSlices = [];
	this.pSegments = [];
	this.pSegmentSlices = [];

	this.pAllTrafficSigns = [];
	this.pEnabledTrafficSigns = [];
	this.pTextVsNotEnabledTrafficSigns = {};

	for (var speed = 10; speed < 100; speed += 10)
	{
		var text = "" + speed;

		var pNotEnabledTrafficSigns = [];
		this.pTextVsNotEnabledTrafficSigns[text] = pNotEnabledTrafficSigns;

		for (var b = 0; b < 10; ++b)
		{
			var pTrafficSign = new TrafficSign(speed, text);
			this.pAllTrafficSigns.push(pTrafficSign);
			pNotEnabledTrafficSigns.push(pTrafficSign);
			pTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
		}
	}

	this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = new _25047_JSO_a9b01349425c266ab252d70472201447c9(this);

	this.pRoadGuides = [];
	this.pCurrentRoadGuide = new _25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca(this);

	this.addSlice(0.0, 0.0, 0.0, -30.0, 6.0);
	this.addSlice(0.0, 0.0, 0.0, 100.0, 6.0);
	this.pSpeedSlice = this.addSlice(0.0, 0.0, 0.0, 100.0, 6.0);
	this.createSegment();

	this.setTrafficSpeedIndex(0);
	this.setRoadCurvatureIndex(1);
	this.setRoadIndentIndex(1);

	return this;
};

_25047_JSO_78ac15334a20202b5.prototype = Object.create(Object.prototype);
_25047_JSO_78ac15334a20202b5.prototype.constructor = _25047_JSO_78ac15334a20202b5;
pLiveScriptService.addClass(_25047_JSO_78ac15334a20202b5);

_25047_JSO_78ac15334a20202b5.Coast_None = 0;
_25047_JSO_78ac15334a20202b5.Coast_Left = 1;
_25047_JSO_78ac15334a20202b5.Coast_Right = 2;
_25047_JSO_78ac15334a20202b5.Coast_Both = 3;

_25047_JSO_78ac15334a20202b5.prototype.pGameView = null;

_25047_JSO_78ac15334a20202b5.prototype.pSlices = null;
_25047_JSO_78ac15334a20202b5.prototype.pSegments = null;
_25047_JSO_78ac15334a20202b5.prototype.firstSegmentIndex = 0;
_25047_JSO_78ac15334a20202b5.prototype.lastSliceId = 0;
_25047_JSO_78ac15334a20202b5.prototype.range = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.pSpeedSlice = null;
Game.prototype.pMainVehicleFinalSlice = null;

_25047_JSO_78ac15334a20202b5.prototype.pSegmentSlices = null;
_25047_JSO_78ac15334a20202b5.prototype.segmentLength = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.maxSegmentLength = 200.0;
_25047_JSO_78ac15334a20202b5.prototype.maxSegmentSliceCount = 20;

_25047_JSO_78ac15334a20202b5.prototype.pRoadGuides = null;
_25047_JSO_78ac15334a20202b5.prototype.pCurrentRoadGuide = null;
_25047_JSO_78ac15334a20202b5.prototype.currentRoadGuideCoveredLength = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.relAngXForRoadGuides = 0.0;

_25047_JSO_78ac15334a20202b5.prototype.pAllTrafficSigns = null;
_25047_JSO_78ac15334a20202b5.prototype.pEnabledTrafficSigns = null;
_25047_JSO_78ac15334a20202b5.prototype.pTextVsNotEnabledTrafficSigns = null;
_25047_JSO_78ac15334a20202b5.prototype.pLastTrafficSign = null;

_25047_JSO_78ac15334a20202b5.prototype._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = null;
_25047_JSO_78ac15334a20202b5.prototype.trafficSpeed = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.trafficSpeedIndex = -1;
_25047_JSO_78ac15334a20202b5.prototype.roadCurvature = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.roadCurvatureIndex = -1;
_25047_JSO_78ac15334a20202b5.prototype.roadSlope = 0.0;
_25047_JSO_78ac15334a20202b5.prototype.roadSlopeIndex = 0;
_25047_JSO_78ac15334a20202b5.prototype.coast = _25047_JSO_78ac15334a20202b5.Coast_Left;
_25047_JSO_78ac15334a20202b5.prototype.roadIndent = 0.5;
_25047_JSO_78ac15334a20202b5.prototype.roadIndentIndex = -1;

_25047_JSO_78ac15334a20202b5.pMesh1Material = null;
_25047_JSO_78ac15334a20202b5.pMesh2Material = null;
_25047_JSO_78ac15334a20202b5.pMesh3Material = null;

_25047_JSO_78ac15334a20202b5.prototype.update = function()
{
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = this.pGameView.pModel._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;

	var visibleRange = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range + 600.0;
	var n = 0;
	for (var a = this.pSlices.length - 1; a >= 0; --a)
	{
		var _25047_JSO_34a44a1af65c6d58 = this.pSlices[a];
		if (_25047_JSO_34a44a1af65c6d58.range > visibleRange)
		{
			break;
		}
		++n;
		if (n == 10)
		{
			break;
		}
	}

	for (var a = 0; a < n; ++a)
	{
		if (this.currentRoadGuideCoveredLength > this.pCurrentRoadGuide.length - 0.1)
		{
			this.pRoadGuides.push(this.pCurrentRoadGuide);
			this.currentRoadGuideCoveredLength = 0.0;
			this.pCurrentRoadGuide = new _25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca(this);
			this.pCurrentRoadGuide.generate();
		}

		var _25047_JSO_34a44a1af65c6d58 = this.pCurrentRoadGuide.addSlice();
		if (this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Departing &&
			_25047_JSO_34a44a1af65c6d58.range > this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.nextRange)
		{
			this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.updateNextRange(_25047_JSO_34a44a1af65c6d58);
		}
	}

	var count = 0;
	while (this.pSpeedSlice.range < this.range - 200.0)
	{
		this.pSpeedSlice.updateSpeed();
		this.pSpeedSlice.updateModifiedSpeed(this.trafficSpeed);

		this.setTrafficSignEnabled(this.pSpeedSlice);

		this.pSpeedSlice = this.pSpeedSlice.pNextSlice;
		++count;
		if (count >= 6)
		{
			break;
		}
	}

	this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.updateCurrentData();

	var rangeDifference = this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.range - _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range;
	this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(rangeDifference > -200.0 && rangeDifference < 800.0);

	var minRange = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range - 250.0;
	for (var a = this.firstSegmentIndex; a < this.pSegments.length; ++a)
	{
		var pSegment2 = this.pSegments[a];
		if (pSegment2.range < minRange)
		{
			pSegment2._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
			this.firstSegmentIndex = a + 1;
		}
		else
		{
			break;
		}
	}

	for (var a = 0; a < this.pEnabledTrafficSigns.length; ++a)
	{
		var pTrafficSign = this.pEnabledTrafficSigns[a];
		if (pTrafficSign.range < minRange)
		{
			if (this.setTrafficSignNotEnabled(a) != null)
			{
				--a;
			}
		}
	}
};

_25047_JSO_78ac15334a20202b5.prototype.addSlice2 = function(relAngZ, relAngY, relAngX, length, width, n)
{
	var r = 1.0 / n;
	for (var a = 0; a < n; ++a)
	{
		this.addSlice(relAngZ * r, relAngY * r, relAngX * r, length * r, width);
	}
};

_25047_JSO_78ac15334a20202b5.prototype.addSlice = function(relAngZ, relAngY, relAngX, length, width)
{
	var pPrevSlice = null;
	if (this.pSlices.length != 0)
	{
		pPrevSlice = this.pSlices[this.pSlices.length - 1];
	}

	var pPrevPos = null;
	var pPrevV0 = null;
	var pPrevV1 = null;

	if (pPrevSlice == null)
	{
		pPrevPos = new Vector3(-200.0, 0.0, 0.5);
		pPrevV0 = new Vector3(1, 0, 0);
		pPrevV1 = new Vector3(0, 1, 0);
	}
	else
	{
		pPrevPos = pPrevSlice._25047_JSO_3a02fb201464a2244d;
		pPrevV0 = pPrevSlice.v0;
		pPrevV1 = pPrevSlice.v1;
	}

	var v0 = _25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(pPrevV0, pPrevV1.scale(relAngY));
	v0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(v0, new Vector3(0, 0, relAngZ)));
	var v1 = Vector3.Cross(new Vector3(0, 0, 1), v0);
	v1.normalize();
	v1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(v1, v0.scale(relAngX)));
	var v2 = Vector3.Cross(v0, v1);

	var _25047_JSO_3a02fb201464a2244d = pPrevPos.add(v0.scale(length));

	var _25047_JSO_34a44a1af65c6d58 = new _25047_JSO_3f2ee537e739c8e0();
	_25047_JSO_34a44a1af65c6d58.length = length;
	this.range += length;
	_25047_JSO_34a44a1af65c6d58.range = this.range;
	_25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);
	_25047_JSO_34a44a1af65c6d58.v0.copyFrom(v0);
	_25047_JSO_34a44a1af65c6d58.v1.copyFrom(v1);

	_25047_JSO_34a44a1af65c6d58.pPrevSlice = pPrevSlice;
	if (pPrevSlice != null)
	{
		pPrevSlice.pNextSlice = _25047_JSO_34a44a1af65c6d58;
	}

	var pVertexList = _25047_JSO_34a44a1af65c6d58.pVertexList;
	var pNormalList = _25047_JSO_34a44a1af65c6d58.pNormalList;
	var n = pVertexList.length;
	var mid = n / 2;
	var widthDiv2 = width * 0.5;

	var leftIsCoast = this.coast == _25047_JSO_78ac15334a20202b5.Coast_Both || this.coast == _25047_JSO_78ac15334a20202b5.Coast_Left;
	var rightIsCoast = this.coast == _25047_JSO_78ac15334a20202b5.Coast_Both || this.coast == _25047_JSO_78ac15334a20202b5.Coast_Right;

	for (var a = 0; a <= n; ++a)
	{
		if (a == mid)
		{
			continue;
		}

		var w = widthDiv2;
		var h = 0.0;

		var b = a - mid;
		if (Math.abs(b) > 1)
		{
			w += 2.0 + Math.random() * 1.0;
		}
		if (Math.abs(b) > 2)
		{
			w += 10.0;
		}
		if (b < 0)
		{
			w = -w;
		}

		if (Math.abs(b) > 1)
		{
			h -= 0.4;
		}

		if ((b == -3 && !rightIsCoast) || (b == 3 && !leftIsCoast))
		{
			var random = Math.random() * 5.0;
			h += 10.0 + random + relAngZ * relAngZ * 20.0;

			if (b == -3)
			{
				w += random;
			}
			else
			{
				w -= random;
			}
		}

		var c = a;
		if (b > 0)
		{
			c -= 1;
		}

		if (relAngX > 0.0)
		{
			if (b == 1 || b == 2)
			{
				h -= _25047_JSO_201e6f00bcce7ae9f0.powSigned(relAngX, 0.5) * 0.8;
			}
		}
		else if (relAngX < 0.0)
		{
			if (b == -1 || b == -2)
			{
				h += _25047_JSO_201e6f00bcce7ae9f0.powSigned(relAngX, 0.5) * 0.8;
			}
		}

		var vertex = _25047_JSO_3a02fb201464a2244d.add(v1.scale(w));
		if ((b == -3 && rightIsCoast) || (b == 3 && leftIsCoast))
		{
			vertex.z = -10.0;
		}
		else
		{
			vertex.z += h;
		}
		pVertexList[c] = vertex;

		var normal = null;
		if (Math.abs(b) == 1)
		{
			normal = v1.scale(b * 1.5).add(v2);
			normal.normalize();
		}
		else if (Math.abs(b) == 2)
		{
			normal = v1.scale(-b * 0.3).add(v2);
			normal.normalize();
		}
		else
		{
			normal = v1.scale(-b * 0.05).add(v2);
			normal.normalize();
		}
		pNormalList[c] = normal;

		if (b == -1)
		{
			_25047_JSO_34a44a1af65c6d58.edge2Pos.copyFrom(vertex);
		}
		else if (b == 1)
		{
			_25047_JSO_34a44a1af65c6d58.edge1Pos.copyFrom(vertex);
		}
	}

	if (pPrevSlice != null)
	{
		_25047_JSO_34a44a1af65c6d58.createTriangles();

		_25047_JSO_34a44a1af65c6d58.edge1Dir.copyFrom(pPrevSlice.edge1Pos.subtract(_25047_JSO_34a44a1af65c6d58.edge1Pos).normalize());
		pPrevSlice.edge2Dir.copyFrom(_25047_JSO_34a44a1af65c6d58.edge2Pos.subtract(pPrevSlice.edge2Pos).normalize());
	}

	_25047_JSO_34a44a1af65c6d58.id = ++this.lastSliceId;
	this.pSlices.push(_25047_JSO_34a44a1af65c6d58);
	this.pSegmentSlices.push(_25047_JSO_34a44a1af65c6d58);
	this.segmentLength += length;

	if (this.segmentLength >= this.maxSegmentLength || 
		this.pSegmentSlices.length >= this.maxSegmentSliceCount)
	{
		this.createSegment();
	}

	return _25047_JSO_34a44a1af65c6d58;
};

_25047_JSO_78ac15334a20202b5.prototype.createSegment = function()
{
	var _25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b = new _25047_JSO_3fa6cc0723b75cdf(this);

	var pLastSlice = this.pSegmentSlices[this.pSegmentSlices.length - 1];
	_25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b.pLastSlice = pLastSlice;
	this.pSegmentSlices.length = 0;
	this.pSegmentSlices.push(pLastSlice);

	this.segmentLength = 0.0;
	this.pSegments.push(_25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b);

	return _25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b;
};

_25047_JSO_78ac15334a20202b5.prototype.findTriangle = function(_25047_JSO_3a02fb201464a2244d)
{
	var n = this.pSlices.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_34a44a1af65c6d58 = this.pSlices[a];
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_34a44a1af65c6d58.findTriangle(_25047_JSO_3a02fb201464a2244d);
		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
		{
			return _25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		}
	}
	return null;
};

_25047_JSO_78ac15334a20202b5.prototype.setTrafficSignEnabled = function(_25047_JSO_34a44a1af65c6d58)
{
	var speed = this.pSpeedSlice.speed1 * 150.0;

	var p = _25047_JSO_34a44a1af65c6d58.pVertexList[1].add(_25047_JSO_34a44a1af65c6d58.pVertexList[2]).scale(0.5);
	p.z += 1.8;

	var ratio = 0.0;
	if (this.pLastTrafficSign != null)
	{
		ratio = (this.pLastTrafficSign.speed - speed) / speed;
	}

	if (this.pLastTrafficSign == null || (
		this.pLastTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.subtract(p).length() > speed * 2.0 &&
		((ratio < -0.1 && this.pSpeedSlice.deceleration1 > 0.1) || ratio > 0.2)))
	{
		var text = "" + Math.round(speed / 10.0) * 10.0;
		var pNotEnabledTrafficSigns = this.pTextVsNotEnabledTrafficSigns[text];
		if (pNotEnabledTrafficSigns == null || pNotEnabledTrafficSigns.length == 0)
		{
			return null;
		}

		var pTrafficSign = pNotEnabledTrafficSigns.pop();
		this.pEnabledTrafficSigns.push(pTrafficSign);
		pTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
		this.pLastTrafficSign = pTrafficSign;

		_25047_JSO_201e6f00bcce7ae9f0.setMatrix(pTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, p,
			_25047_JSO_34a44a1af65c6d58.edge1Dir, _25047_JSO_34a44a1af65c6d58.v1, Vector3.Cross(_25047_JSO_34a44a1af65c6d58.edge1Dir, _25047_JSO_34a44a1af65c6d58.v1));
		pTrafficSign.range = _25047_JSO_34a44a1af65c6d58.range;

		return pTrafficSign;
	}

	return null;
};

_25047_JSO_78ac15334a20202b5.prototype.setTrafficSignNotEnabled = function(index)
{
	if (index < 0 || index >= this.pEnabledTrafficSigns.length)
	{
		return null;
	}

	var pTrafficSign = this.pEnabledTrafficSigns[index];
	this.pEnabledTrafficSigns.splice(index, 1);

	var pNotEnabledTrafficSigns = this.pTextVsNotEnabledTrafficSigns[pTrafficSign.text];
	pNotEnabledTrafficSigns.push(pTrafficSign);
	pTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);

	return pTrafficSign;
};

_25047_JSO_78ac15334a20202b5.prototype.setTrafficSpeedIndex = function(trafficSpeedIndex)
{
	if (this.trafficSpeedIndex == trafficSpeedIndex)
	{
		return;
	}

	this.trafficSpeedIndex = trafficSpeedIndex;
	this.trafficSpeed = 0.4 + trafficSpeedIndex * 0.2;

	for (var a = 0; a < this.pSlices.length; ++a)
	{
		var _25047_JSO_34a44a1af65c6d58 = this.pSlices[a];
		_25047_JSO_34a44a1af65c6d58.updateModifiedSpeed(this.trafficSpeed);
	}
};

_25047_JSO_78ac15334a20202b5.prototype.setRoadCurvatureIndex = function(roadCurvatureIndex)
{
	if (this.roadCurvatureIndex == roadCurvatureIndex)
	{
		return;
	}

	this.roadCurvatureIndex = roadCurvatureIndex;
	this.roadCurvature = 0.2 + 0.8 * (roadCurvatureIndex / 5.0);
};

_25047_JSO_78ac15334a20202b5.prototype.setRoadSlopeIndex = function(roadSlopeIndex)
{
	if (this.roadSlopeIndex == roadSlopeIndex)
	{
		return;
	}

	this.roadSlopeIndex = roadSlopeIndex;
	this.roadSlope = 0.1 + 0.9 * (roadSlopeIndex / 3.0);
};

_25047_JSO_78ac15334a20202b5.prototype.setRoadIndentIndex = function(roadIndentIndex)
{
	if (this.roadIndentIndex == roadIndentIndex)
	{
		return;
	}

	this.roadIndentIndex = roadIndentIndex;
	this.roadIndent = Math.pow(roadIndentIndex / 3.0, 2.0);
};

_25047_JSO_78ac15334a20202b5.prototype.clean = function(translation)
{
	if (this.firstSegmentIndex > 0)
	{
		for (var a = 0; a < this.firstSegmentIndex; ++a)
		{
			var _25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b = this.pSegments[a];
			_25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.dispose();
		}

		var pFirstSlice = this.pSlices[0];
		var pLastSlice = this.pSegments[this.firstSegmentIndex - 1].pLastSlice;
		var lastRange = pLastSlice.range;

		this.pSegments.splice(0, this.firstSegmentIndex);
		this.firstSegmentIndex = 0;

		var n = pLastSlice.id - pFirstSlice.id + 1;
		this.pSlices.splice(0, n);

		var pNextSlice = pLastSlice.pNextSlice;
		if (pNextSlice != null)
		{
			pNextSlice.pPrevSlice = null;
			var pTriangles = pNextSlice.pTriangles;
			for (var a = 0; a < pTriangles.length; ++a)
			{
				var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTriangles[a];
				_25047_JSO_a6091513150509033f0ccea65fe3fffdca.pNeighbors.length = 0;
			}
		}

		for (var a = 0; a < this.pRoadGuides.length; ++a)
		{
			var _25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12 = this.pRoadGuides[a];
			if (_25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12.range > lastRange)
			{
				this.pRoadGuides.splice(0, a);
				break;
			}
		}
	}

	for (var a = 0; a < this.pRoadGuides.length; ++a)
	{
		var _25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12 = this.pRoadGuides[a];
		_25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12.clean(translation);
	}

	for (var a = 0; a < this.pSegments.length; ++a)
	{
		var _25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b = this.pSegments[a];
		_25047_JSO_d5295fcc20144b68e17fcd50c0fffd06003b._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.addInPlace(translation);
	}

	for (var a = 0; a < this.pSlices.length; ++a)
	{
		var _25047_JSO_34a44a1af65c6d58 = this.pSlices[a];
		_25047_JSO_34a44a1af65c6d58.clean(translation);
	}

	this._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.addInPlace(translation);

	for (var a = 0; a < this.pEnabledTrafficSigns.length; ++a)
	{
		var pTrafficSign = this.pEnabledTrafficSigns[a];
		pTrafficSign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.addInPlace(translation);
	}
};

}
