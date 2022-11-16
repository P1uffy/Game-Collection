var minH = 0.85;
var maxH = 30.0;

with (BABYLON)
{

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca = function(_25047_JSO_347a51d8e2e2e7e0)
{
	this._25047_JSO_347a51d8e2e2e7e0 = _25047_JSO_347a51d8e2e2e7e0;
	this.pos1 = new Vector3();
	this.pos2 = new Vector3();
	this.pPosList = [];

	return this;
};

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype = Object.create(Object.prototype);
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.constructor = _25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca;
pLiveScriptService.addClass(_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca);

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype._25047_JSO_347a51d8e2e2e7e0 = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pos1 = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pos2 = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pPosList = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.rangeForPosList = 0.0;

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.length = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.range = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.relAngZ = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.targetZ = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.slope1 = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.slope2 = 0.0;

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.cornerCount = 0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.cornerDifficulty = 0.0;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pCornerRelAngZList = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pCornerLengthList = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pCornerRangeList = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pCornerSliceList = null;
_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pCornerPosList = null;

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.pTemp = null;

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.generate = function()
{
	var pRoadGuides = this._25047_JSO_347a51d8e2e2e7e0.pRoadGuides;
	var pPrevRoadGuide = pRoadGuides[pRoadGuides.length - 1];
	var pLastSlice = this._25047_JSO_347a51d8e2e2e7e0.pSlices[this._25047_JSO_347a51d8e2e2e7e0.pSlices.length - 1];

	this.range = this._25047_JSO_347a51d8e2e2e7e0.range;
	var minRange = this._25047_JSO_347a51d8e2e2e7e0.pGameView.pModel._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range - 200.0;

	var n = pRoadGuides.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12 = pRoadGuides[n - 1 - a];
		if (_25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12.range < minRange)
		{
			n = a + 1;
			break;
		}
	}

	var minR = 1000.0;

	var difficulty = this._25047_JSO_347a51d8e2e2e7e0.roadCurvature;
	difficulty = Math.pow(difficulty, 2.0);

	var maxSlope = 0.2 * this._25047_JSO_347a51d8e2e2e7e0.roadSlope;
	maxH = minH + 30 * this._25047_JSO_347a51d8e2e2e7e0.roadSlope;

	var count = 0;
	var error = "";
	while (true)
	{
		if (count > 200)
		{
			break;
		}

		error = "";
		this.pos1.copyFrom(pLastSlice._25047_JSO_3a02fb201464a2244d);
		this.slope1 = pLastSlice.v0.z;

		this.relAngZ = _25047_JSO_201e6f00bcce7ae9f0.powSigned(Math.random() - 0.5, 2.0) * 2.0 * 3.0;
		if (count < 10)
		{
			this.relAngZ *= this._25047_JSO_347a51d8e2e2e7e0.roadIndent;
		}
		++count;

		this.cornerDifficulty = 0.1 + Math.pow(Math.random(), 3.0) * 0.9;
		if (count < 10)
		{
			this.cornerDifficulty *= difficulty;
		}

		var d = 10.0 + Math.pow(Math.random(), 1.5) * 40.0;
		this.cornerCount = Math.floor(Math.random() * 3) + 1;
		this.length = this.cornerCount * d;

		this.relAngZ *= this.length;
		var maxCornerRelAngZ = 3.0 * (d / 10.0);
		if (maxCornerRelAngZ > 3.0)
		{
			maxCornerRelAngZ = 3.0;
		}

		var minH2 = minH + 0.0;
		var maxH2 = maxH - 0.0;

		this.targetZ = this.pos1.z + this.slope1 * this.length;
		var keepSlope = (this.targetZ > minH && this.targetZ < maxH && Math.random() < 0.3);
		if (keepSlope)
		{
			this.slope2 = this.slope1;
		}
		else
		{
			var minZ = 0.0;
			var maxZ = 0.0;
			var success = false;
			for (var a = 0; a < 20; ++a)
			{
				var slope = Math.pow(Math.random(), 1.0) * maxSlope * d / 10.0;
				if (Math.random() < 0.65)
				{
					slope = -slope;
				}
				slope = this.slope1 + slope;
				
				if (slope > maxSlope)
				{
					slope = maxSlope;
				}
				else if (slope < -maxSlope)
				{
					slope = -maxSlope;
				}
				this.slope2 = slope;

				var x = this.length;
				this.targetZ = this.pos1.z + this.slope1 * x +
						this.slope2 * x * x / (this.length * 2) -
						this.slope1 * x * x / (this.length * 2);
				var minZ = this.targetZ;
				var maxZ = this.targetZ;

				if (minZ < minH2)
				{
					this.slope2 = (-(this.pos1.z - minH2) - this.slope1 * x + this.slope1 * x * x / (this.length * 2)) * ((this.length * 2) / (x * x));
					minZ = minH2;
				}
				else
				{
					x = this.slope1 * this.length / (this.slope2 - this.slope1);
					if (x > 0.0 && x < this.length)
					{
						var y = this.pos1.z + this.slope1 * x +
							this.slope2 * x * x / (this.length * 2) -
							this.slope1 * x * x / (this.length * 2);
						if (y < minZ)
						{
							minZ = y;
						}
						else if (y > maxZ)
						{
							maxZ = y;
						}

						if (minZ < minH2)
						{
							this.slope2 = (-(this.pos1.z - minH2) - this.slope1 * x + this.slope1 * x * x / (this.length * 2)) * ((this.length * 2) / (x * x));
							minZ = minH2;
						}
					}
				}

				if (minZ >= minH2 && maxZ <= maxH2)
				{
					success = true;
					break;
				}
			}

			if (maxZ > maxH2)
			{
				this.slope2 = -Math.random() * maxSlope;
			}
		}

		this.pCornerRelAngZList = new Array(this.cornerCount);
		this.pCornerLengthList = new Array(this.cornerCount);
		this.pCornerRangeList = new Array(this.cornerCount);
		this.pCornerSliceList = new Array(this.cornerCount);
		this.pCornerPosList = new Array(this.cornerCount);
		this.pPosList.length = 0;

		var length2 = 0.0;
		for (var a = 0; a < this.cornerCount; ++a)
		{
			var cornerLength = d * (1.0 + Math.random() * 0.8);
			this.pCornerLengthList[a] = cornerLength;
			length2 += cornerLength;
		}

		var correction = this.length / length2;
		var range = 0.0;
		for (var a = 0; a < this.cornerCount; ++a)
		{
			this.pCornerLengthList[a] *= correction;
			range += this.pCornerLengthList[a];
			this.pCornerRangeList[a] = range;
		}

		var relAngZ2 = 0.0;
		for (var a = 0; a < this.cornerCount; ++a)
		{
			var cornerRelAngZ = (Math.random() - 0.5) * 2.0 * maxCornerRelAngZ * this.cornerDifficulty;
			this.pCornerRelAngZList[a] = cornerRelAngZ;
			relAngZ2 += cornerRelAngZ * this.pCornerLengthList[a];
		}
		correction = (relAngZ2 - this.relAngZ) / this.length;

		for (var a = 0; a < this.cornerCount; ++a)
		{
			this.pCornerRelAngZList[a] -= correction;

			var correction2 = 0.0;
			if (this.pCornerRelAngZList[a] > maxCornerRelAngZ)
			{
				this.pCornerRelAngZList[a] = maxCornerRelAngZ;
				correction2 = this.pCornerRelAngZList[a] - maxCornerRelAngZ;
			}
			else if (this.pCornerRelAngZList[a] < -maxCornerRelAngZ)
			{
				this.pCornerRelAngZList[a] = -maxCornerRelAngZ;
				correction2 = this.pCornerRelAngZList[a] + maxCornerRelAngZ;
			}

			this.relAngZ -= correction2;
		}

		this.pos2.copyFrom(this.pos1);
		//this.pPosList.push(this.pos2.clone());

		//this.pTemp = [];

		var collides = false;
		var v0 = pLastSlice.v0.clone();
		var v1 = new Vector3(-v0.y, v0.x, 0.0);
		v1.normalize();

		for (var c = 0; c < this.cornerCount; ++c)
		{
			var maxLength = 25.0;
			var divisionCount = Math.floor(this.pCornerLengthList[c] / maxLength) + 2;
			var angle = this.pCornerRelAngZList[c];
			var radius = 0.0;
			var length = 0.0;
			if (Math.abs(angle) > 0.001)
			{
				length = this.pCornerLengthList[c] / divisionCount;
				angle /= divisionCount;
				radius = length / angle;
			}
			else
			{
				length = this.pCornerLengthList[c] / divisionCount;
			}
			for (var e = 0; e < divisionCount; ++e)
			{
				var prevPos = this.pos2.clone();

				if (radius != 0.0)
				{
					this.pos2.addInPlace(v1.scale(radius));
					v1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0.rotateZ(v1, angle));
					this.pos2.addInPlace(v1.scale(-radius));
				}
				else
				{
					this.pos2.addInPlace(new Vector3(v1.y, -v1.x, 0.0).scale(length));
				}
				this.pPosList.push(this.pos2.clone());

				var targetV0 = this.pos2.subtract(prevPos);
				targetV0.z = 0.0;
				targetV0.normalize();
				var targetV1 = new Vector3(-targetV0.y, targetV0.x, 0.0);
				var targetRad = 10.0 + length * (e + 1) * 0.1;
				var targetPos = this.pos2.add(targetV0.scale(targetRad));

				for (var a = this.pPosList.length - 2; a >= 0; --a)
				{
					var v = targetPos.subtract(this.pPosList[a]);
					v.z = 0.0;
					if (v.length() < targetRad)
					{
						error += "1";
						collides = true;
						this.pPosList.length = 0;
						break;
					}
				}
				if (collides)
				{
					break;
				}

				if (c == this.cornerCount - 1)
				{
					targetRad += 100.0;
				}
				else
				{
					targetRad += 20.0;
				}
				targetPos.copyFrom(this.pos2.add(targetV0.scale(targetRad)));

				for (var a = 0; a < n; ++a)
				{
					var _25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12 = pRoadGuides[pRoadGuides.length - 1 - a];
					var pPosList = _25047_JSO_7d1785920145cf0f6c4f81e0718457b0f12.pPosList;

					for (var b = pPosList.length - 1; b >= 0; --b)
					{
						var v = targetPos.subtract(pPosList[b]);
						v.z = 0.0;

						if (v.length() < targetRad)
						{
							error += "2";
							collides = true;
							this.pPosList.length = 0;
							break;
						}
					}
					if (collides)
					{
						break;
					}
				}
				if (collides)
				{
					break;
				}
			}
			if (collides)
			{
				break;
			}
		}
		if (!collides)
		{
			break;
		}
	}

	if (error.length > 0)
	{
		console.log("count = " + count + " n = " + n);
		console.log(error);
	}
};

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.addSlice = function()
{
	var coveredLength = this._25047_JSO_347a51d8e2e2e7e0.currentRoadGuideCoveredLength;
	var cornerIndex = this.cornerCount - 1;
	for (var a = 0; a < this.cornerCount; ++a)
	{
		if (coveredLength < this.pCornerRangeList[a])
		{
			cornerIndex = a;
			break;
		}
	}

	var length = 10.0;
	var relAngZ = 0.0;
	var relAngY = 0.0;

	if (cornerIndex != -1)
	{
		relAngZ = this.pCornerRelAngZList[cornerIndex];
		length = this.pCornerLengthList[cornerIndex];
	}

	var pSlices = this._25047_JSO_347a51d8e2e2e7e0.pSlices;
	var pPrevSlice = null;

	var slope = 0.0;
	var prevSlope = 0.0;
	if (pSlices.length != 0 && this.length != 0.0)
	{
		pPrevSlice = pSlices[pSlices.length - 1];
		prevSlope = pPrevSlice.v0.z;

		var b2 = coveredLength / this.length;
		var b1 = 1.0 - b2;
		slope = this.slope1 * b1 + this.slope2 * b2;

		relAngY = -Math.atan(slope - prevSlope);
	}

	if (cornerIndex != -1)
	{
		var minAng = 0.07 / (1.0 + Math.pow(length, 1.5) * 0.01);
		var n = Math.floor(Math.abs(relAngZ) / minAng);

		var n2 = Math.floor(Math.abs(relAngY) / minAng * 3.0);
		//console.log("n = " + n + " n2 = " + n2 + " length = " + length);
		if (n2 > n)
		{
			n = n2;
		}

		if (n > 15)
		{
			n = 15;
		}

		if (n > 0)
		{
			relAngZ /= n;
			relAngY /= n;
			length /= n;
		}

		if (pPrevSlice._25047_JSO_3a02fb201464a2244d.z < minH)
		{
			slope = 0.01;
			relAngY = -(Math.atan(slope) - Math.atan(prevSlope));
		}
		else if (slope < 0.0)
		{
			var targetZ = pPrevSlice._25047_JSO_3a02fb201464a2244d.z + slope * length * 2.0;
			if (targetZ < minH)
			{
				slope = -(pPrevSlice._25047_JSO_3a02fb201464a2244d.z - minH) / length * 0.5;
				relAngY = -(Math.atan(slope) - Math.atan(prevSlope));
			}
		}
		else
		{
			relAngY = -(Math.atan(slope) - Math.atan(prevSlope));
		}
	}

	var targetRelAngZ = -_25047_JSO_201e6f00bcce7ae9f0.powSigned(relAngZ, 0.5) * 2.0;
	if (targetRelAngZ > 0.15)
	{
		targetRelAngZ = 0.15;
	}
	else if (targetRelAngZ < -0.15)
	{
		targetRelAngZ = -0.15;
	}

	this._25047_JSO_347a51d8e2e2e7e0.relAngXForRoadGuides += (targetRelAngZ - this._25047_JSO_347a51d8e2e2e7e0.relAngXForRoadGuides) * 0.2;

	var _25047_JSO_34a44a1af65c6d58 = this._25047_JSO_347a51d8e2e2e7e0.addSlice(relAngZ, relAngY, this._25047_JSO_347a51d8e2e2e7e0.relAngXForRoadGuides, length, 6.0);

	this.rangeForPosList += length;
	if (this.rangeForPosList > 100.0)
	{
		this.rangeForPosList = 0.0;
		//this.pPosList.push(_25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d.clone());
	}

	this._25047_JSO_347a51d8e2e2e7e0.currentRoadGuideCoveredLength += _25047_JSO_34a44a1af65c6d58.length;
	this.pos2.copyFrom(_25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d);

	if (cornerIndex != -1 && this.pCornerSliceList[cornerIndex] == null)
	{
		this.pCornerSliceList[cornerIndex] = _25047_JSO_34a44a1af65c6d58;
	}

	return _25047_JSO_34a44a1af65c6d58;
};

_25047_JSO_230fd1cdc7201ccd1603f0ccea65fe3fffdca.prototype.clean = function(translation)
{
	this.pos1.addInPlace(translation);
	this.pos2.addInPlace(translation);

	var n = this.pPosList.length;
	for (var a = 0; a < n; ++a)
	{
		this.pPosList[a].addInPlace(translation);
	}
};

}
