with (BABYLON)
{

_25047_JSO_a9b01349425c266ab252d70472201447c9 = function(_25047_JSO_347a51d8e2e2e7e0)
{
	this._25047_JSO_347a51d8e2e2e7e0 = _25047_JSO_347a51d8e2e2e7e0;

	if (_25047_JSO_a9b01349425c266ab252d70472201447c9.pBoxMaterial == null)
	{
		var pBoxMaterial = new StandardMaterial("", null);
		pBoxMaterial.ambientColor = new BABYLON.Color3(0.0, 0.4, 0.8).scale(0.7);
		pBoxMaterial.diffuseColor = new BABYLON.Color3(0.0, 0.4, 0.8).scale(0.9);
		pBoxMaterial.emissiveColor = new BABYLON.Color3(0.0, 0.4, 0.8).scale(0.7);
		pBoxMaterial.specularColor = new BABYLON.Color3(0.0, 0.4, 0.8).scale(0.9);
		_25047_JSO_a9b01349425c266ab252d70472201447c9.pBoxMaterial = pBoxMaterial;
	}

	var pMeshMaterial = new StandardMaterial("", null);
	pMeshMaterial.ambientColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMeshMaterial.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMeshMaterial.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMeshMaterial.specularColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	this.pMeshMaterial = pMeshMaterial;

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.scaleInPlace(0.2);

	var pBox1 = BABYLON.MeshBuilder.CreateBox("", { size: 1 }, null);
	pBox1.material = _25047_JSO_a9b01349425c266ab252d70472201447c9.pBoxMaterial;
	pBox1.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	pBox1.scaling.set(0.2, 7.0, 0.2);
	pBox1.position.y = 4.0;

	var pBox2 = BABYLON.MeshBuilder.CreateBox("", { size: 1 }, null);
	pBox2.material = _25047_JSO_a9b01349425c266ab252d70472201447c9.pBoxMaterial;
	pBox2.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	pBox2.scaling.copyFrom(pBox1.scaling);
	pBox2.position.y = -pBox1.position.y;

	this.pMesh = new Mesh("", null);
	this.pMesh.material = this.pMeshMaterial;
	this.pMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.updateMesh("Checkpoint");

	this.pMesh.rotation.set(Math.PI * 0.0, Math.PI * 0.5, -Math.PI * 0.5);
	pBox1.rotation = this.pMesh.rotation;
	pBox2.rotation = this.pMesh.rotation;

	this.pDataList = [];
	this.pCurrentData = _25047_JSO_a9b01349425c266ab252d70472201447c9.newData(null);
	this.pDataList.push(this.pCurrentData);
	this.pBestData = this.pCurrentData;
	this.pCumulativeData = _25047_JSO_a9b01349425c266ab252d70472201447c9.newData(null);

	this.reset();

	this.updateMenuDiv();

	return this;
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype = Object.create(Object.prototype);
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.constructor = _25047_JSO_a9b01349425c266ab252d70472201447c9;
pLiveScriptService.addClass(_25047_JSO_a9b01349425c266ab252d70472201447c9);

_25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh = 3.6;

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pMeshMaterial = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.pBoxMaterial = null;

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pMesh = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.range = 0.0;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.nextRange = 0.0;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.departingTime = 0.0;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.departingRange = 0.0;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.departingFuelPos = 0.0;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.limitForBonusPoints = 0.0;

_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Approaching = 1;
_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached = 2;
_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Departing = 3;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.status = _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Departing;

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype._25047_JSO_347a51d8e2e2e7e0 = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pDataList = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pCurrentData = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pBestData = null;
_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.pCumulativeData = null;

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.updateMesh = function(text)
{
	var n = 13;
	var pVertices = new Array(n * 2 * 3);
	var pUVs = new Array(n * 2 * 2);
	var pIndices = new Array((n - 1) * 2 * 3);
	
	var c = 0;
	for (var a = 0; a < n; ++a)
	{
		var u = a / (n - 1);
		var x = (u - 0.5) * 2.0 * 4.0;
		var y = x * x * 0.04 + 1.8;
		var p1 = new Vector3(x, y, 0.0);
		var p2 = new Vector3(x, y + 1.0, 0.0);

		var b = a * 6;
		pVertices[b] = p1.x;
		pVertices[b + 1] = p1.y;
		pVertices[b + 2] = p1.z;
		pVertices[b + 3] = p2.x;
		pVertices[b + 4] = p2.y;
		pVertices[b + 5] = p2.z;

		b = a * 4;
		pUVs[b] = u;
		pUVs[b + 1] = 0;
		pUVs[b + 2] = u;
		pUVs[b + 3] = 1;

		if (a < n - 1)
		{
			b = a * 2;
			pIndices[c] = b;
			++c;
			pIndices[c] = b + 1;
			++c;
			pIndices[c] = b + 2;
			++c;

			pIndices[c] = b + 1;
			++c;
			pIndices[c] = b + 3;
			++c;
			pIndices[c] = b + 2;
			++c;
		}
	}

	var pVertexData = new VertexData();
	pVertexData.positions = pVertices;
	pVertexData.indices = pIndices;
	pVertexData.uvs = pUVs;
	var pNormals = [];
	BABYLON.VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
	pVertexData.normals = pNormals;
	pVertexData.applyToMesh(this.pMesh);

	var pTexture = new BABYLON.DynamicTexture("", { width: 512, height: 64 }, null, true);
	this.pMeshMaterial.ambientTexture = pTexture;
	this.pMeshMaterial.diffuseTexture = pTexture;
	this.pMeshMaterial.emissiveTexture = pTexture;
	this.pMeshMaterial.specularTexture = pTexture;

	var pContext = pTexture.getContext();
	pContext.fillStyle = "rgba(240, 240, 240, 1)";
	pContext.fillRect(0, 0, 512, 64);

	pContext.fillStyle = "rgba(32, 32, 32, 1)";
	var c = 0;
	for (var a = 0; a < 512; a += 32)
	{
		for (var b = 0; b < 64; b += 32)
		{
			++c;
			if (c % 4 < 2)
			{
				pContext.fillRect(a, b, 32, 32);
			}
		}
	}

	pContext.font = "bold 96px Tahoma";
	pContext.textAlign = "center";
	pContext.translate(256, 52);
	pContext.scale(0.8, 0.6);
	pContext.fillStyle = "blue";
	pContext.fillText(text, 0, 0);
	pContext.fillStyle = "orange";
	pContext.fillText(text, -6, -6);

	pTexture.update();
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.updateNextRange = function(_25047_JSO_34a44a1af65c6d58)
{
	_25047_JSO_201e6f00bcce7ae9f0.setMatrix(this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d,
		_25047_JSO_34a44a1af65c6d58.edge1Dir, _25047_JSO_34a44a1af65c6d58.v1, Vector3.Cross(_25047_JSO_34a44a1af65c6d58.edge1Dir, _25047_JSO_34a44a1af65c6d58.v1));

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.x = 0.8;
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.y = 1.3;
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.z = 1.4;

	this.range = _25047_JSO_34a44a1af65c6d58.range;
	this.nextRange = this.range + 3900.0 + Math.random() * 200.0;
	this.setStatus(_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Approaching);
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.updateCurrentData = function()
{
	var pGameView = this._25047_JSO_347a51d8e2e2e7e0.pGameView;
	var _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = pGameView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;
	var pGame = pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;

	this.pCurrentData.time = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.time - this.departingTime;
	this.pCurrentData.fuelPos = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.fuelPos - this.departingFuelPos;
	this.pCurrentData.length = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range - this.departingRange;
	if (this.pCurrentData.length < 0.0)
	{
		this.pCurrentData.length = 0.0;
	}

	if (pGame.improperTime == 0.0)
	{
		var v = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_dceddc17dd7dfc7178.length();
		if (v > this.pCurrentData.topSpeed)
		{
			this.pCurrentData.topSpeed = v;
		}
	}

	_25047_JSO_a9b01349425c266ab252d70472201447c9.updateData(this.pCurrentData);
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.setStatus = function(status)
{
	this.status = status;

	var pGameView = this._25047_JSO_347a51d8e2e2e7e0.pGameView;
	var _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = pGameView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;
	var _25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018;
	var pGame = pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;

	if (status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Departing)
	{
		this.limitForBonusPoints = 200.0;
		var n = 0;
		for (var a = this.pDataList.length - 1; a >= 0; --a)
		{
			var pData = this.pDataList[a];
			this.limitForBonusPoints += pData.points - pData.bonusPoints;
			++n;
			if (n == 5)
			{
				break;
			}
		}
		if (n > 0)
		{
			this.limitForBonusPoints /= n;
		}

		this.departingTime = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.time;
		this.departingFuelPos = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.fuelPos;
		this.departingRange = this.range;
		this.pCurrentData = _25047_JSO_a9b01349425c266ab252d70472201447c9.newData(null);
		this.pDataList.push(this.pCurrentData);

		_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.setMenuVisible(false);

		this.pCurrentData.gameModeScore = pGame.calculateGameModeScore();
	}
	else if (status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached)
	{
		var targetGameModeScore = this.pCurrentData.gameModeScore;
		if (this.pCurrentData.points >= this.limitForBonusPoints - 100.0)
		{
			var bonusPoints = Math.pow(this.pCurrentData.gameModeScore, 1.5) * 6.0 + 
				this.pCurrentData.overtakeCount * 3.0;
			if (this.pCurrentData.points >= this.limitForBonusPoints)
			{
				bonusPoints *= 2.0;
				targetGameModeScore += 1.0;
			}

			this.pCurrentData.bonusPoints = bonusPoints;
			_25047_JSO_a9b01349425c266ab252d70472201447c9.updateData(this.pCurrentData);
			this.updateCumulativeData();
		}
		else
		{
			targetGameModeScore -= 1.0;
		}

		if (targetGameModeScore < 2.0)
		{
			targetGameModeScore = 2.0;
		}
		else if (targetGameModeScore > 15.0)
		{
			targetGameModeScore = 15.0;
		}

		if (pGame.gameMode == Game.GameMode_AutoAdaptive)
		{
			pGame.randomizeForGameMode2(targetGameModeScore);
		}

		_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.setMenuVisible(true);
	}
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.newData = function(pData)
{
	if (pData == null)
	{
		pData = {};
	}

	pData.overtakeCount = 0;
	pData.majorCrashCount = 0;
	pData.minorCrashCount = 0;
	pData.points = 0.0;
	pData.bonusPoints = 0.0;
	pData.averageSpeed = 0.0;
	pData.topSpeed = 0.0;
	pData.time = 0.0;
	pData.length = 0.0;
	pData.fuelPos = 0.0;
	pData.gameModeScore = 0.0;

	return pData;
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.updateData = function(pData)
{
	var t = pData.time;
	if (t < 5.0)
	{
		pData.averageSpeed = 0.0;
	}
	else
	{
		pData.averageSpeed = pData.length / t;
	}

	pData.points = pData.bonusPoints + 
		(pData.averageSpeed + pData.topSpeed) * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh +
		(pData.overtakeCount * 20 - (pData.majorCrashCount * 50 + pData.minorCrashCount * 10));
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.updateCumulativeData = function()
{
	_25047_JSO_a9b01349425c266ab252d70472201447c9.newData(this.pCumulativeData);

	for (var a = 0; a < this.pDataList.length; ++a)
	{
		var pData = this.pDataList[a];
		this.pCumulativeData.time += pData.time;
		this.pCumulativeData.length += pData.length;
		this.pCumulativeData.fuelPos += pData.fuelPos;
	}

	_25047_JSO_a9b01349425c266ab252d70472201447c9.updateData(this.pCumulativeData);
	this.pCumulativeData.points = 0.0;

	for (var a = 0; a < this.pDataList.length; ++a)
	{
		var pData = this.pDataList[a];

		if (pData.points > this.pBestData.points)
		{
			this.pBestData = pData;
		}

		this.pCumulativeData.points += pData.points;
		this.pCumulativeData.overtakeCount += pData.overtakeCount;
		this.pCumulativeData.majorCrashCount += pData.majorCrashCount;
		this.pCumulativeData.minorCrashCount += pData.minorCrashCount;
		
		if (pData.topSpeed > this.pCumulativeData.topSpeed)
		{
			this.pCumulativeData.topSpeed = pData.topSpeed;
		}
	}
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.updateMenuDiv = function()
{
	var _25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = this._25047_JSO_347a51d8e2e2e7e0.pGameView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018;

	var p1 = 0;
	var p2 = 0;
	var p3 = 0;

	p3 = Math.round(this.pCurrentData.points);
	p2 = Math.round(this.pCurrentData.bonusPoints);
	p1 = p3 - p2;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pPointsLabel1.innerHTML = p1 + " + " + p2 + " = " + p3;

	p3 = Math.round(this.pBestData.points);
	p2 = Math.round(this.pBestData.bonusPoints);
	p1 = p3 - p2;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pPointsLabel2.innerHTML = p1 + " + " + p2 + " = " + p3;

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pPointsLabel3.innerHTML = "" + Math.round(this.pCumulativeData.points);

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOvertakesLabel1.innerHTML = "" + this.pCurrentData.overtakeCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOvertakesLabel2.innerHTML = "" + this.pBestData.overtakeCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOvertakesLabel3.innerHTML = "" + this.pCumulativeData.overtakeCount;

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMajorCrashesLabel1.innerHTML = "" + this.pCurrentData.majorCrashCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMajorCrashesLabel2.innerHTML = "" + this.pBestData.majorCrashCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMajorCrashesLabel3.innerHTML = "" + this.pCumulativeData.majorCrashCount;

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMinorCrashesLabel1.innerHTML = "" + this.pCurrentData.minorCrashCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMinorCrashesLabel2.innerHTML = "" + this.pBestData.minorCrashCount;
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pMinorCrashesLabel3.innerHTML = "" + this.pCumulativeData.minorCrashCount;

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pSpeedLabel1.innerHTML = "" +
		Math.round(this.pCurrentData.averageSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h & " +
		Math.round(this.pCurrentData.topSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pSpeedLabel2.innerHTML = "" +
		Math.round(this.pBestData.averageSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h & " +
		Math.round(this.pBestData.topSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pSpeedLabel3.innerHTML = "" +
		Math.round(this.pCumulativeData.averageSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h & " +
		Math.round(this.pCumulativeData.topSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh) + "km/h";

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pTimeAndLengthLabel1.innerHTML = "" +
		_25047_JSO_a9b01349425c266ab252d70472201447c9.toTimeString(this.pCurrentData.time) + " & " +
		Math.round(this.pCurrentData.length * 0.001 * 10.0) / 10.0 + "km";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pTimeAndLengthLabel2.innerHTML = "" +
		_25047_JSO_a9b01349425c266ab252d70472201447c9.toTimeString(this.pBestData.time) + " & " +
		Math.round(this.pBestData.length * 0.001 * 10.0) / 10.0 + "km";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pTimeAndLengthLabel3.innerHTML = "" +
		_25047_JSO_a9b01349425c266ab252d70472201447c9.toTimeString(this.pCumulativeData.time) + " & " +
		Math.round(this.pCumulativeData.length * 0.001 * 10.0) / 10.0 + "km";

	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOtherLabel1.innerHTML = "" +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toFuelPer100km(this.pCurrentData.fuelPos, this.pCurrentData.length) * 10.0) / 10.0 + "L/." + " & " +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toPointsPerMinute(this.pCurrentData.points, this.pCurrentData.time)) + "/min";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOtherLabel2.innerHTML = "" +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toFuelPer100km(this.pBestData.fuelPos, this.pBestData.length) * 10.0) / 10.0 + "L/." + " & " +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toPointsPerMinute(this.pBestData.points, this.pBestData.time)) + "/min";
	_25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pOtherLabel3.innerHTML = "" +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toFuelPer100km(this.pCumulativeData.fuelPos, this.pCumulativeData.length) * 10.0) / 10.0 + "L/." + " & " +
		Math.round(_25047_JSO_a9b01349425c266ab252d70472201447c9.toPointsPerMinute(this.pCumulativeData.points, this.pCumulativeData.time)) + "/min";
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.reset = function()
{
	var pGameView = this._25047_JSO_347a51d8e2e2e7e0.pGameView;
	var _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = pGameView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;
	var _25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018;
	var pGame = pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;

	this.pDataList.length = 0;
	this.limitForBonusPoints = 200.0;

	if (this.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached)
	{
		this.pCurrentData = _25047_JSO_a9b01349425c266ab252d70472201447c9.newData(this.pCurrentData);
	}
	else
	{
		this.departingTime = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.time;
		this.departingFuelPos = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.fuelPos;
		this.departingRange = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range;

		var gameModeScore = this.pCurrentData.gameModeScore;
		this.pCurrentData = _25047_JSO_a9b01349425c266ab252d70472201447c9.newData(this.pCurrentData);
		this.pCurrentData.gameModeScore = gameModeScore;
	}

	this.pDataList.push(this.pCurrentData);
	this.pBestData = this.pCurrentData;

	this.updateCumulativeData();
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.toTimeString = function(time)
{
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time - (hours * 3600)) / 60);
	var seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
	if (hours < 10) { hours = "0" + hours; }
	if (minutes < 10) { minutes = "0" + minutes; }
	if (seconds < 10) { seconds = "0" + seconds; }
	return hours + ":" + minutes + ":" + seconds;
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.toFuelPer100km = function(fuelPos, length)
{
	if (length == 0.0)
	{
		return 0.0;
	}
	return 25.0 * fuelPos / length;
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.toPointsPerMinute = function(points, time)
{
	if (time == 0.0)
	{
		return 0.0;
	}
	return 60.0 * points / time;
};

_25047_JSO_a9b01349425c266ab252d70472201447c9.prototype.calculateCurrentDataFuelPer100km = function()
{
	return _25047_JSO_a9b01349425c266ab252d70472201447c9.toFuelPer100km(this.pCurrentData.fuelPos, this.pCurrentData.length);
};

}
