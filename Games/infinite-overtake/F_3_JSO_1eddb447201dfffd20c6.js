with (BABYLON)
{

Game = function()
{
	_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.call(this);

	new GameView(this);

	this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = new _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a(this, new Vector3(0, 0, 1.0));

	this.pTrafficSimulationContainer = new _25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf();
	this._25047_JSO_5fddf9beb9201c436bfffdd8201e178fc70a8ac2e376b47351aeedb(this.pTrafficSimulationContainer);

	this.pAllTrafficVehicles = [];
	this.pEnabledTrafficVehicles = this.pTrafficSimulationContainer._25047_JSO_4ea5a876b239d808fffdd8201e178fc70a8acb6f9ad53c076f270();
	this.pNotEnabledTrafficVehicles = [];

	for (var a = 0; a < 20; ++a)
	{
		var _25047_JSO_465746d13e6645ff002a503ccba238fffd = new _25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd(this);
		this.pAllTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
		this.pNotEnabledTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
		_25047_JSO_465746d13e6645ff002a503ccba238fffd.pViewTag.pView._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
	}

	if (this.pAllTrafficVehicles.length == 0)
	{
		var _25047_JSO_465746d13e6645ff002a503ccba238fffd = new _25047_JSO_a6cfadf2756ee96859b0376a1ea54bfffd(this);
		this.pAllTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
		this.pTrafficSimulationContainer._25047_JSO_5fddf9beb9201c436bfffdd8201e178fc70a8ac2e376b47351aeedb(_25047_JSO_465746d13e6645ff002a503ccba238fffd);

		var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;
		_25047_JSO_465746d13e6645ff002a503ccba238fffd.initialize(_25047_JSO_347a51d8e2e2e7e0.pSlices[2], 1.0);
	}

	return this;
};

Game.prototype = Object.create(_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype);
Game.prototype.constructor = Game;
pLiveScriptService.addClass(Game);

Game.prototype.iterationCount1 = 0;
Game.prototype.iterationCount2 = 0;

Game.prototype._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = null;
Game.prototype.pTrafficSimulationContainer = null;
Game.prototype.pAllTrafficVehicles = null;
Game.prototype.pEnabledTrafficVehicles = null;
Game.prototype.pNotEnabledTrafficVehicles = null;
Game.prototype.positiveDirectionCount = 0;

Game.prototype.majorCrashTime = 0.0;
Game.prototype.minorCrashTime = 0.0;
Game.prototype.crashTime = 0.0;
Game.prototype.improperTime = 0.0;
Game.prototype.wrongDirectionTime = 0.0;
Game.prototype.overtakeTime = 0.0;

Game.prototype.trafficDensityCount = 10;
Game.prototype.trafficDensityIndex = 2;

Game.GameMode_None = 0;
Game.GameMode_AutoAdaptive = 1;
Game.GameMode_EasyRandom = 2;
Game.GameMode_FairRandom = 3;
Game.GameMode_HardRandom = 4;
Game.GameMode_FullyRandom = 5;
Game.GameMode_Custom = 6;

Game.prototype.gameMode = Game.GameMode_AutoAdaptive;

Game.prototype.operateGame = function(dt)
{
	var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;
	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = _25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
	if (_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached)
	{
		return 0.0;
	}

	var max_dt1 = 0.01;
	var iterationCount1 = 1;
	if (dt > max_dt1)
	{
		iterationCount1 = Math.floor(dt / max_dt1) + 1;
		if (iterationCount1 > 10)
		{
			iterationCount1 = 10;
		}
	}

	var iteration_dt1 = dt / iterationCount1;
	if (iteration_dt1 > max_dt1)
	{
		iteration_dt1 = max_dt1;
		dt = iteration_dt1 * iterationCount1;
	}

	var max_dt2 = 0.05;
	var iterationCount2 = 1;
	if (dt > max_dt2)
	{
		iterationCount2 = Math.floor(dt / max_dt2) + 1;
	}

	var iteration_dt2 = dt / iterationCount2;
	var iteration_dt2Ratio = (iterationCount1 + 1) / (iterationCount2 + 1);

	var k = iterationCount2 / iterationCount1;
	var b = 0;
	var c = 0;
	for (var a = 0; a < iterationCount1; ++a)
	{
		if (a * k >= b)
		{
			++b;
			c = 0;

			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.init();
			this.init();

			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.solve();
			this.solve();

			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.simulate(iteration_dt1);
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.simulate2(iteration_dt1, c, iteration_dt2Ratio);
			this.simulate(iteration_dt2);
		}
		else
		{
			++c;

			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.init();
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.solve();
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.simulate(iteration_dt1);
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.simulate2(iteration_dt1, c, 0.0);
		}
	}

	this.iterationCount1 = iterationCount1;
	this.iterationCount2 = iterationCount2;

	return dt;
};

Game.prototype.init = function()
{
	_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.init.call(this);

	var n = this.pEnabledTrafficVehicles.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b = this.pEnabledTrafficVehicles[a];
		_25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.pFollowedVehicle = null;
		_25047_JSO_bd6226706f187f3c7fcd50c0fffd06003b.distanceToFollowedVehicle = 0.0;
	}

	var r0 = 120.0;
	var r1 = 5.2;
	var r2 = 1.8;
	for (var a = 0; a < n; ++a)
	{
		var pVehicle1 = this.pEnabledTrafficVehicles[a];
		var vehicle1Direction = pVehicle1.direction;
		var pVehicle1Pos = pVehicle1._25047_JSO_3a02fb201464a2244d;
		var pVehicle1V0 = pVehicle1.v0;

		for (var b = a + 1; b <= n; ++b)
		{
			var pVehicle2 = null;
			if (b == n)
			{
				if (vehicle1Direction < 0.0)
				{
					continue;
				}

				pVehicle2 = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;
			}
			else
			{
				pVehicle2 = this.pEnabledTrafficVehicles[b];
			}

			var pVehicle2Pos = pVehicle2._25047_JSO_3a02fb201464a2244d;
			var d = pVehicle2Pos.subtract(pVehicle1Pos);

			if (Math.abs(d.x) > r0 || Math.abs(d.y) > r0)
			{
				continue;
			}

			var r = d.length();
			if (r > r0)
			{
				continue;
			}

			if (b == n || vehicle1Direction == pVehicle2.direction)
			{
				if (Vector3.Dot(d, pVehicle1V0) > 0.0)
				{
					if (pVehicle1.pFollowedVehicle == null || r < pVehicle1.distanceToFollowedVehicle)
					{
						pVehicle1.pFollowedVehicle = pVehicle2;
						pVehicle1.distanceToFollowedVehicle = r;
					}
				}
				else if (b < n)
				{
					if (pVehicle2.pFollowedVehicle == null || r < pVehicle2.distanceToFollowedVehicle)
					{
						pVehicle2.pFollowedVehicle = pVehicle1;
						pVehicle2.distanceToFollowedVehicle = r;
					}
				}
			}

			if (b == n || r > r1)
			{
				continue;
			}

			var pPosList1 = pVehicle1.updateCollisionPosList();
			var pPosList2 = pVehicle2.updateCollisionPosList();

			for (var b1 = 0; b1 < 3; ++b1)
			{
				var p1 = pPosList1[b1];
				for (var c1 = 0; c1 < 3; ++c1)
				{
					var p2 = pPosList2[c1];

					d.copyFrom(p2.subtract(p1));
					if (Math.abs(d.x) > r2 || Math.abs(d.y) > r2 || Math.abs(d.z) > r2)
					{
						continue;
					}
					var r = d.length();
					if (r > r2)
					{
						continue;
					}

					d.scaleInPlace(1.0 / r);
					r = r - r2;
					if (r > 1.0)
					{
						r = 1.0;
					}

					if (r > 0.9 || pVehicle1.hasMajorCrash || pVehicle2.hasMajorCrash)
					{
						pVehicle1.hasMajorCrash = true;
						pVehicle2.hasMajorCrash = true;
					}

					var f = d.scale(50000.0 * r);

					var v = pVehicle1._25047_JSO_dceddc17dd7dfc7178.subtract(pVehicle2._25047_JSO_dceddc17dd7dfc7178);
					var s = Vector3.Dot(v, d);
					if (s > 0.0)
					{
						r = v.length();
						v.scaleInPlace(1.0 / r);
						if (r > 20.0)
						{
							r = 20.0;
						}

						r = -2000.0 * Math.pow(r, 0.3);
						f.addInPlace(v.scale(r));
					}

					pVehicle1._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f, p1);
					pVehicle2._25047_JSO_b6b351b6be206e1312f5be65d3d845c4(f.negate(), p1);
				}
			}
		}
	}

};

Game.prototype.solve = function()
{
	_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.solve.call(this);
};

Game.prototype.simulate = function(dt)
{
	_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.simulate.call(this, dt);

	var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;
	_25047_JSO_347a51d8e2e2e7e0.update();

	if (this.pEnabledTrafficVehicles.length < this.trafficDensityCount)
	{
		if (this.pEnabledTrafficVehicles.length > 2 && 
			this.positiveDirectionCount / this.pEnabledTrafficVehicles.length > 0.8)
		{
			var maxRange = 0.0;
			var minRange = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range + 200.0;
			var maxRangeIndex = -1;
			for (var a = this.pEnabledTrafficVehicles.length - 1; a >= 0; --a)
			{
				var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.pEnabledTrafficVehicles[a];
				var range = _25047_JSO_465746d13e6645ff002a503ccba238fffd.range;
				if (_25047_JSO_465746d13e6645ff002a503ccba238fffd.direction < 0.0 || range < minRange)
				{
					continue;
				}
					
				if (maxRangeIndex == -1 || range > maxRange)
				{
					maxRange = range;
					maxRangeIndex = a;
				}
			}

			if (maxRangeIndex != -1)
			{
				var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.setTrafficVehicleNotEnabled(maxRangeIndex);
				if (_25047_JSO_465746d13e6645ff002a503ccba238fffd != null)
				{
					this.setTrafficVehicleEnabled(_25047_JSO_465746d13e6645ff002a503ccba238fffd, -1.0);
				}
			}
		}
		else if (
			this.pNotEnabledTrafficVehicles.length > 0)
		{
			var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.pNotEnabledTrafficVehicles[0];
			this.setTrafficVehicleEnabled(_25047_JSO_465746d13e6645ff002a503ccba238fffd, (Math.random() > 0.7) ? 1.0 : -1.0);
		}
	}

	var pMainVehiclePos = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d;

	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pTires[0].pPoint.pViewTag.pView.pValidTriangle;
	if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
	{
		var _25047_JSO_34a44a1af65c6d58 = _25047_JSO_a6091513150509033f0ccea65fe3fffdca._25047_JSO_34a44a1af65c6d58;
		if (_25047_JSO_34a44a1af65c6d58.id > _25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice.id)
		{
			_25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice = _25047_JSO_34a44a1af65c6d58;
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.allowedMinRange = _25047_JSO_34a44a1af65c6d58.range - 50.0;
		}
	}

	var range = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range;
	var maxRange = range + 600.0;
	var minRange = range - 10.0;
	var n = this.pEnabledTrafficVehicles.length;
	for (var a = 0; a < n; ++a)
	{
		var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.pEnabledTrafficVehicles[a];

		var triangleValidity = _25047_JSO_465746d13e6645ff002a503ccba238fffd.checkTriangleValidity();
		if (triangleValidity)
		{
			var d = _25047_JSO_465746d13e6645ff002a503ccba238fffd._25047_JSO_3a02fb201464a2244d.subtract(pMainVehiclePos);
			if (Math.abs(d.x) < 10.0 && Math.abs(d.y) < 10.0)
			{
				continue;
			}
		}

		if (!triangleValidity || _25047_JSO_465746d13e6645ff002a503ccba238fffd.range > maxRange || _25047_JSO_465746d13e6645ff002a503ccba238fffd.range < minRange)
		{
			if (this.setTrafficVehicleNotEnabled(a) != null)
			{
				--a;
				--n;

				if (_25047_JSO_465746d13e6645ff002a503ccba238fffd.direction > 0.0 && _25047_JSO_465746d13e6645ff002a503ccba238fffd.range < minRange)
				{
					var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = _25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
					++_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.overtakeCount;
					this.overtakeTime = 1.0;
					this.pViewTag.pView._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pOvertakeSound.play();
				}
			}
		}
	}

	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = _25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
	if (this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range > _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.range && _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Approaching)
	{
		_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.setStatus(_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached);
		this.pViewTag.pView.clean();
	}

	if (this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.checkImproper())
	{
		this.improperTime += dt;
		this.wrongDirectionTime = 0.0;

		if (this.improperTime > 1.5)
		{
			this.crashNotify(true);
		}

		if (this.improperTime > 2.5)
		{
			this.improperTime = 0.0;
			this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.initialize(_25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice, 1.0);
		}
	}
	else
	{
		this.improperTime = 0.0;

		if (this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.checkWrongDirection())
		{
			this.wrongDirectionTime += dt;

			if (this.wrongDirectionTime > 2.0)
			{
				this.wrongDirectionTime = 0.0;
				this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.initialize(_25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice, 1.0);
			}
		}
		else
		{
			this.wrongDirectionTime = 0.0;
		}
	}

	if (this.majorCrashTime > 0.0)
	{
		this.majorCrashTime -= dt;
		if (this.majorCrashTime < 0.0)
		{
			this.majorCrashTime = 0.0;
		}
	}

	if (this.minorCrashTime > 0.0)
	{
		this.minorCrashTime -= dt;
		if (this.minorCrashTime < 0.0)
		{
			this.minorCrashTime = 0.0;
		}
	}

	if (this.crashTime > 0.0)
	{
		this.crashTime -= dt;
		if (this.crashTime < 0.0)
		{
			this.crashTime = 0.0;
		}
	}

	if (this.overtakeTime > 0.0)
	{
		this.overtakeTime -= dt;
		if (this.overtakeTime < 0.0)
		{
			this.overtakeTime = 0.0;
		}
	}

};

Game.prototype.update = function()
{
	_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.update.call(this);
	this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.update();
};

Game.prototype.setTrafficVehicleEnabled = function(_25047_JSO_465746d13e6645ff002a503ccba238fffd, direction)
{
	var pGameView = this.pViewTag.pView;
	var pSlices = pGameView._25047_JSO_347a51d8e2e2e7e0.pSlices;

	var _25047_JSO_34a44a1af65c6d58 = null;
	var maxRange = this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.range + 500.0;
	var n = pSlices.length;
	for (var a = n - 1; a >= 0; --a)
	{
		_25047_JSO_34a44a1af65c6d58 = pSlices[a];
		if (_25047_JSO_34a44a1af65c6d58.range < maxRange)
		{
			break;
		}
	}

	if (_25047_JSO_34a44a1af65c6d58 == null)
	{
		return false;
	}

	var n = this.pEnabledTrafficVehicles.length;
	while (true)
	{
		var pSlicePos = _25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d;
		var r = _25047_JSO_34a44a1af65c6d58.length + 10.0;

		var collides = false;
		for (var a = 0; a < n; ++a)
		{
			var pTrafficVehicle2 = this.pEnabledTrafficVehicles[a];
			var d = pSlicePos.subtract(pTrafficVehicle2._25047_JSO_3a02fb201464a2244d);
			if (Math.abs(d.x) < r && Math.abs(d.y) < r)
			{
				collides = true;
				break;
			}
		}

		if (collides)
		{
			_25047_JSO_34a44a1af65c6d58 = _25047_JSO_34a44a1af65c6d58.pNextSlice;
		}
		else
		{
			break;
		}

		if (_25047_JSO_34a44a1af65c6d58 == null)
		{
			return false;
		}
	}

	this.pEnabledTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
	this.pNotEnabledTrafficVehicles.splice(this.pNotEnabledTrafficVehicles.indexOf(_25047_JSO_465746d13e6645ff002a503ccba238fffd), 1);

	_25047_JSO_465746d13e6645ff002a503ccba238fffd.direction = direction;
	if (direction > 0.0)
	{
		++this.positiveDirectionCount;
	}

	_25047_JSO_465746d13e6645ff002a503ccba238fffd.maxSpeed = 50.0 - Math.random() * 10.0;
	_25047_JSO_465746d13e6645ff002a503ccba238fffd.edgeDistance = 0.5 + Math.random() * 1.2 - direction * 0.2;
	_25047_JSO_465746d13e6645ff002a503ccba238fffd.distanceTreshold = 8.0 + Math.random() * 20.0;

	_25047_JSO_465746d13e6645ff002a503ccba238fffd.initialize(_25047_JSO_34a44a1af65c6d58, direction);

	var pMaterial = VehicleMesh.pTorsoMaterials[Math.floor(Math.random() * VehicleMesh.pTorsoMaterials.length)];
	var pTrafficVehicleView = _25047_JSO_465746d13e6645ff002a503ccba238fffd.pViewTag.pView;
	pTrafficVehicleView.pVehicleMesh.pTorsoMesh.material = pMaterial;
	pTrafficVehicleView.pVehicleMesh.pTorsoMesh2.material = pMaterial;
	pTrafficVehicleView._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);

	var pTireMeshes = pTrafficVehicleView.pTireMeshes;
	for (var a = 0; a < pTireMeshes.length; ++a)
	{
		var pTireMesh = pTireMeshes[a];
		pTireMesh.pRimMesh.material = pMaterial;
	}

	return true;
};

Game.prototype.setTrafficVehicleNotEnabled = function(index)
{
	if (index < 0 || index >= this.pEnabledTrafficVehicles.length)
	{
		return null;
	}

	var _25047_JSO_465746d13e6645ff002a503ccba238fffd = this.pEnabledTrafficVehicles[index];
	if (_25047_JSO_465746d13e6645ff002a503ccba238fffd.direction > 0.0)
	{
		--this.positiveDirectionCount;
	}

	this.pEnabledTrafficVehicles.splice(index, 1);
	this.pNotEnabledTrafficVehicles.push(_25047_JSO_465746d13e6645ff002a503ccba238fffd);
	_25047_JSO_465746d13e6645ff002a503ccba238fffd.pViewTag.pView._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);

	return _25047_JSO_465746d13e6645ff002a503ccba238fffd;
};

Game.prototype.crashNotify = function(majorCrash)
{
	var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;
	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = _25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
	if (_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached)
	{
		return;
	}

	if (majorCrash)
	{
		if (this.majorCrashTime > 0.0)
		{
			return;
		}

		this.majorCrashTime = 4.0;
		++_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.majorCrashCount;
	}
	else
	{
		if (this.minorCrashTime > 0.0 || this.majorCrashTime > 0.0)
		{
			return;
		}

		this.minorCrashTime = 3.0;
		++_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.minorCrashCount;
	}

	this.crashTime = 3.0;
};

Game.prototype.setTrafficDensityIndex = function(trafficDensityIndex)
{
	this.trafficDensityIndex = trafficDensityIndex;
	this.trafficDensityCount = Math.floor(trafficDensityIndex / 4.0 * this.pAllTrafficVehicles.length);
};

Game.prototype.setGameMode = function(gameMode)
{
	this.gameMode = gameMode;
};

Game.prototype.randomizeForGameMode = function()
{
	if (this.gameMode == Game.GameMode_EasyRandom ||
		this.gameMode == Game.GameMode_FairRandom ||
		this.gameMode == Game.GameMode_HardRandom ||
		this.gameMode == Game.GameMode_FullyRandom)
	{
		var targetGameModeScore = 0.0;

		if (this.gameMode == Game.GameMode_EasyRandom)
		{
			targetGameModeScore = 1.5 + Math.random() * 3.0;
		}
		if (this.gameMode == Game.GameMode_FairRandom)
		{
			targetGameModeScore = 4.5 + Math.random() * 4.0;
		}
		if (this.gameMode == Game.GameMode_HardRandom)
		{
			targetGameModeScore = 8.5 + Math.random() * 4.0;
		}
		if (this.gameMode == Game.GameMode_FullyRandom)
		{
			targetGameModeScore = 1.5 + Math.random() * 11.0;
		}

		var gameModeScore = this.randomizeForGameMode2(targetGameModeScore);
		if (gameModeScore == -1.0)
		{
			console.log("Warning");
		}
	}
};

Game.prototype.randomizeForGameMode2 = function(targetGameModeScore)
{
	if (targetGameModeScore < 1.0 || targetGameModeScore > 16.0)
	{
		return -1.0;
	}

	var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;

	if (this.gameMode == Game.GameMode_EasyRandom)
	{
		this.trafficDensityIndex = 2;
	}
	if (this.gameMode == Game.GameMode_FairRandom)
	{
		this.trafficDensityIndex = 3;
	}
	if (this.gameMode == Game.GameMode_HardRandom)
	{
		this.trafficDensityIndex = 4;
	}
	if (this.gameMode == Game.GameMode_AutoAdaptive)
	{
		this.trafficDensityIndex = 2;
		if (targetGameModeScore > 3)
		{
			this.trafficDensityIndex = 3;
		}
		if (targetGameModeScore > 5)
		{
			this.trafficDensityIndex = 4;
		}
	}
	if (this.gameMode == Game.GameMode_FullyRandom)
	{
		this.trafficDensityIndex = 1 + Math.floor(Math.random() * 4.0);
	}

	_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 1;
	if (this.gameMode == Game.GameMode_EasyRandom)
	{
		_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 0;
	}
	if (this.gameMode == Game.GameMode_FairRandom)
	{
		_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 1;
	}
	if (this.gameMode == Game.GameMode_HardRandom)
	{
		_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 2;
	}
	if (this.gameMode == Game.GameMode_FullyRandom)
	{
		if (Math.random() < 0.25)
		{
			_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 2;
		}
		else
		{
			if (Math.random() < 0.5)
			{
				_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 1;
			}
			else
			{
				_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 0;
			}
		}
	}

	var coast = _25047_JSO_347a51d8e2e2e7e0.coast;
	if (!(_25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_Left || _25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_Right))
	{
		if (Math.random() < 0.5)
		{
			coast = _25047_JSO_78ac15334a20202b5.Coast_Left;
		}
		else
		{
			coast = _25047_JSO_78ac15334a20202b5.Coast_Right;
		}
	}

	for (var a = 0; a < 10000; ++a)
	{
		if (this.gameMode == Game.GameMode_AutoAdaptive)
		{
			if (Math.random() < 0.25)
			{
				_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 2;
			}
			else
			{
				if (Math.random() < 0.5)
				{
					_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 1;
				}
				else
				{
					_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = 0;
				}
			}
		}

		var r = Math.random();
		if (r < 0.4)
		{
			_25047_JSO_347a51d8e2e2e7e0.coast = coast;
		}
		else if (r < 0.7)
		{
			_25047_JSO_347a51d8e2e2e7e0.coast = _25047_JSO_78ac15334a20202b5.Coast_None;
		}
		else
		{
			if (coast == _25047_JSO_78ac15334a20202b5.Coast_Left)
			{
				_25047_JSO_347a51d8e2e2e7e0.coast = _25047_JSO_78ac15334a20202b5.Coast_Right;
			}
			else
			{
				_25047_JSO_347a51d8e2e2e7e0.coast = _25047_JSO_78ac15334a20202b5.Coast_Left;
			}
		}

		if (this.gameMode == Game.GameMode_EasyRandom && _25047_JSO_347a51d8e2e2e7e0.coast != _25047_JSO_78ac15334a20202b5.Coast_Left)
		{
			continue;
		}
		if (this.gameMode == Game.GameMode_FairRandom &&
			!(_25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_Left || _25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_Right))
		{
			continue;
		}

		_25047_JSO_347a51d8e2e2e7e0.setRoadIndentIndex(Math.floor(Math.random() * 4.0));
		if (this.gameMode == Game.GameMode_EasyRandom && _25047_JSO_347a51d8e2e2e7e0.roadIndentIndex > 0)
		{
			continue;
		}
		if (this.gameMode == Game.GameMode_FairRandom && _25047_JSO_347a51d8e2e2e7e0.roadIndentIndex > 2)
		{
			continue;
		}

		_25047_JSO_347a51d8e2e2e7e0.setRoadCurvatureIndex(Math.floor(Math.random() * 5.0));
		if (this.gameMode == Game.GameMode_EasyRandom && _25047_JSO_347a51d8e2e2e7e0.roadCurvatureIndex > 1)
		{
			continue;
		}
		if (this.gameMode == Game.GameMode_FairRandom && _25047_JSO_347a51d8e2e2e7e0.roadCurvatureIndex > 2)
		{
			continue;
		}

		_25047_JSO_347a51d8e2e2e7e0.setRoadSlopeIndex(Math.floor(Math.random() * 4.0));
		if (this.gameMode == Game.GameMode_EasyRandom && _25047_JSO_347a51d8e2e2e7e0.roadSlopeIndex > 1)
		{
			continue;
		}
		if (this.gameMode == Game.GameMode_FairRandom && _25047_JSO_347a51d8e2e2e7e0.roadSlopeIndex > 2)
		{
			continue;
		}

		var gameModeScore = this.calculateGameModeScore();
		if (Math.abs(targetGameModeScore - gameModeScore) < 1.0)
		{
			var trafficDensityIndex = this.trafficDensityIndex;
			this.trafficDensityIndex = -1;
			this.setTrafficDensityIndex(trafficDensityIndex);

			var trafficSpeedIndex = _25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex;
			_25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex = -1;
			_25047_JSO_347a51d8e2e2e7e0.setTrafficSpeedIndex(trafficSpeedIndex);

			return gameModeScore;
		}
	}

	return -1.0;
};

Game.prototype.calculateGameModeScore = function()
{
	var _25047_JSO_347a51d8e2e2e7e0 = this.pViewTag.pView._25047_JSO_347a51d8e2e2e7e0;

	var gameModeScore = 0.0;

	gameModeScore += 1.0;
	if (_25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_Both || _25047_JSO_347a51d8e2e2e7e0.coast == _25047_JSO_78ac15334a20202b5.Coast_None)
	{
		gameModeScore += 1.0;
	}

	gameModeScore += _25047_JSO_347a51d8e2e2e7e0.roadIndentIndex * 1.0;
	gameModeScore += _25047_JSO_347a51d8e2e2e7e0.roadCurvatureIndex * 1.0;
	gameModeScore += _25047_JSO_347a51d8e2e2e7e0.roadSlopeIndex * 1.0;
	gameModeScore += _25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex * _25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex * 1.0;

	return gameModeScore;
};

Game.prototype.clean = function(translation)
{
	this._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.clean(translation);

	for (var a = 0; a < this.pEnabledTrafficVehicles.length; ++a)
	{
		this.pEnabledTrafficVehicles[a].clean(translation);
	}
};

}
