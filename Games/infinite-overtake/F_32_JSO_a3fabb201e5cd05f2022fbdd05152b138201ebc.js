with (BABYLON)
{

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a = function(_25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b)
{
	this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("");
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_712dc4dc0222013f2fffd;
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.z = -10;

	var s = 0.84;
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.set(s, s, 1);

	this._25047_JSO_f0a3a065c92dc2018f517e160b6fffd6e201cfca2 = [];
	this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4 = [];

	this.pCenterUIPanel = this.addUIPanel();

	this.pResolutionSelect = document.getElementById("pResolutionSelect");

	this.pManageButton = document.getElementById("pManageButton");
	this.pInfoLabel1 = document.getElementById("pInfoLabel1");
	this.pInfoLabel2 = document.getElementById("pInfoLabel2");
	this.pInfoLabel3 = document.getElementById("pInfoLabel3");

	this.pMenuDiv = document.getElementById("pMenuDiv");
	this.pOvertakesLabel1 = document.getElementById("pOvertakesLabel1");
	this.pOvertakesLabel2 = document.getElementById("pOvertakesLabel2");
	this.pOvertakesLabel3 = document.getElementById("pOvertakesLabel3");
	this.pMajorCrashesLabel1 = document.getElementById("pMajorCrashesLabel1");
	this.pMajorCrashesLabel2 = document.getElementById("pMajorCrashesLabel2");
	this.pMajorCrashesLabel3 = document.getElementById("pMajorCrashesLabel3");
	this.pMinorCrashesLabel1 = document.getElementById("pMinorCrashesLabel1");
	this.pMinorCrashesLabel2 = document.getElementById("pMinorCrashesLabel2");
	this.pMinorCrashesLabel3 = document.getElementById("pMinorCrashesLabel3");
	this.pPointsLabel1 = document.getElementById("pPointsLabel1");
	this.pPointsLabel2 = document.getElementById("pPointsLabel2");
	this.pPointsLabel3 = document.getElementById("pPointsLabel3");
	this.pSpeedLabel1 = document.getElementById("pSpeedLabel1");
	this.pSpeedLabel2 = document.getElementById("pSpeedLabel2");
	this.pSpeedLabel3 = document.getElementById("pSpeedLabel3");
	this.pTimeAndLengthLabel1 = document.getElementById("pTimeAndLengthLabel1");
	this.pTimeAndLengthLabel2 = document.getElementById("pTimeAndLengthLabel2");
	this.pTimeAndLengthLabel3 = document.getElementById("pTimeAndLengthLabel3");
	this.pOtherLabel1 = document.getElementById("pOtherLabel1");
	this.pOtherLabel2 = document.getElementById("pOtherLabel2");
	this.pOtherLabel3 = document.getElementById("pOtherLabel3");

	this.pGameModeSelect = document.getElementById("pGameModeSelect");
	this.pContinueGameButton = document.getElementById("pContinueGameButton");

	this.pTrafficSpeedSelect = document.getElementById("pTrafficSpeedSelect");
	this.pTrafficDensitySelect = document.getElementById("pTrafficDensitySelect");
	this.pRoadCurvatureSelect = document.getElementById("pRoadCurvatureSelect");
	this.pRoadSlopeSelect = document.getElementById("pRoadSlopeSelect");
	this.pCoastSelect = document.getElementById("pCoastSelect");
	this.pRoadIndentSelect = document.getElementById("pRoadIndentSelect");

	this.pTireSoftnessSelect = document.getElementById("pTireSoftnessSelect");
	this.pGearModeSelect = document.getElementById("pGearModeSelect");
	this.pEngineSelect = document.getElementById("pEngineSelect");

	this.pCameraSelect = document.getElementById("pCameraSelect");
	this.pDrivingStyleSelect = document.getElementById("pDrivingStyleSelect");

	this.pResolutionSelect.pSelectListeners = [this];

	this.pGameModeSelect.pSelectListeners = [this];
	this.pTrafficSpeedSelect.pSelectListeners = [this];
	this.pTrafficDensitySelect.pSelectListeners = [this];
	this.pRoadCurvatureSelect.pSelectListeners = [this];
	this.pRoadSlopeSelect.pSelectListeners = [this];
	this.pCoastSelect.pSelectListeners = [this];
	this.pRoadIndentSelect.pSelectListeners = [this];

	this.pGearModeSelect.pSelectListeners = [this];
	this.pCameraSelect.pSelectListeners = [this];
	this.pDrivingStyleSelect.pSelectListeners = [this];

	return this;
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype = Object.create(Object.prototype);
_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.constructor = _25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a;
pLiveScriptService.addClass(_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a);

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.resolution = 3.0;
_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.notMouseDownTime = -1.0;

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype._25047_JSO_f0a3a065c92dc2018f517e160b6fffd6e201cfca2 = null;
_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4 = null;
_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.pPressedUIComponent = null;

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.menuVisible = false;
_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.menuVisibleTime = 0.0;

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.crashTime = 0.0;

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.addUIPanel = function()
{
	var _25047_JSO_f0a3a065c92dc2018f57fcd50c0fffd06003b = new _25047_JSO_adf12030722030e22022c3(this);
	this._25047_JSO_f0a3a065c92dc2018f517e160b6fffd6e201cfca2.push(_25047_JSO_f0a3a065c92dc2018f57fcd50c0fffd06003b);
	return _25047_JSO_f0a3a065c92dc2018f57fcd50c0fffd06003b;
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.addUIComponent = function(x, y, width, height)
{
	var _25047_JSO_b34ca6c271500820731c2030d051f475c6 = new _25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f(this, width, height);
	_25047_JSO_b34ca6c271500820731c2030d051f475c6._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.x = x;
	_25047_JSO_b34ca6c271500820731c2030d051f475c6._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.y = y;
	this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4.push(_25047_JSO_b34ca6c271500820731c2030d051f475c6);
	return _25047_JSO_b34ca6c271500820731c2030d051f475c6;
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.update = function(deltaTime)
{
	if (this.notMouseDownTime >= 0.0 && !this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.mouseDown)
	{
		this.notMouseDownTime += deltaTime;

		if (this.notMouseDownTime > 0.2)
		{
			this.notMouseDownTime = -1.0;
			this.pPressedUIComponent = null;

			for (var a = 0; a < this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4.length; ++a)
			{
				var _25047_JSO_b34ca6c271500820731c2030d051f475c6 = this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4[a];
				_25047_JSO_b34ca6c271500820731c2030d051f475c6.setPressed(false);
			}
		}
	}

	for (var a = 0; a < this._25047_JSO_f0a3a065c92dc2018f517e160b6fffd6e201cfca2.length; ++a)
	{
		var _25047_JSO_f0a3a065c92dc2018f57fcd50c0fffd06003b = this._25047_JSO_f0a3a065c92dc2018f517e160b6fffd6e201cfca2[a];
		_25047_JSO_f0a3a065c92dc2018f57fcd50c0fffd06003b.update();
	}

	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var pGame = pGameView.pModel;
	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;

	if (this.menuVisible)
	{
		this.menuVisibleTime += 1.0 * deltaTime;

		if (this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.realTime % 1.0 < 0.5)
		{
			this.pContinueGameButton.innerHTML = "Continue Driving";
			this.pContinueGameButton.style.textDecoration = "none";
		}
		else
		{
			this.pContinueGameButton.innerHTML = "Continue Driving (Press Space)";
			this.pContinueGameButton.style.textDecoration = "underline";
		}
		
	}
	else
	{
		this.menuVisibleTime -= 1.0 * deltaTime;
	}

	if (this.menuVisibleTime < 0.0)
	{
		this.menuVisibleTime = 0.0;
	}
	else if (this.menuVisibleTime > 1.0)
	{
		this.menuVisibleTime = 1.0;
	}

	this.pMenuDiv.style.top = (7.0 + (this.menuVisibleTime - 1.0) * 93.0) + "%";

	if (this.menuVisibleTime == 0.0)
	{
		this.pMenuDiv.style.visibility = "hidden";
	}
	else
	{
		this.pMenuDiv.style.visibility = "visible";
	}

	_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.updateMenuDiv();

	this.pInfoLabel1.innerHTML = _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.overtakeCount + " Overtakes";
	if (pGame.overtakeTime > 0.0)
	{
		this.pInfoLabel1.style.backgroundColor = "#00FF00";
	}
	else
	{
		this.pInfoLabel1.style.backgroundColor = "#BB1100";
	}

	var points = Math.round(_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.points) - Math.round(_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.bonusPoints);
	var bonusPointsGained = points >= _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.limitForBonusPoints;
	if (!bonusPointsGained)
	{
		if (_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.points >= _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.limitForBonusPoints - 100.0)
		{
			this.pInfoLabel2.innerHTML = points + " Points+" + "&frac12;" + "Bonus";
		}
		else
		{
			this.pInfoLabel2.innerHTML = points + " Points";
		}

		this.pInfoLabel2.style.backgroundColor = "#BB1100";
	}
	else
	{
		this.pInfoLabel2.innerHTML = points + " Points+Bonus";
		this.pInfoLabel2.style.backgroundColor = "#6688FF";
	}

	if (pGame.crashTime > 0.0)
	{
		if (pGame.majorCrashTime > 0.0)
		{
			this.pInfoLabel3.style.backgroundColor = "#000000";
			if (pGame.crashTime % 1.0 > 0.5)
			{
				this.pInfoLabel3.innerHTML = "Major"
			}
			else
			{
				this.pInfoLabel3.innerHTML = "Major Crash!"
			}
		}
		else
		{
			this.pInfoLabel3.style.backgroundColor = "#FF8800";
			if (pGame.crashTime % 1.0 > 0.5)
			{
				this.pInfoLabel3.innerHTML = "Minor"
			}
			else
			{
				this.pInfoLabel3.innerHTML = "Minor Crash"
			}
		}
	}
	else
	{
		if (pGame.wrongDirectionTime > 0.0)
		{
			this.pInfoLabel3.style.backgroundColor = "#FFDD00";
			if (pGame.wrongDirectionTime % 1.0 > 0.5)
			{
				this.pInfoLabel3.innerHTML = "Wrong"
			}
			else
			{
				this.pInfoLabel3.innerHTML = "Wrong Way!"
			}
		}
		else
		{
			if (bonusPointsGained)
			{
				if (this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.realTime % 1.0 < 0.5)
				{
					this.pInfoLabel3.innerHTML = Math.round(_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.limitForBonusPoints) + "";
				}
				else
				{
					this.pInfoLabel3.innerHTML = Math.round(_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.limitForBonusPoints) + " Reached&#10004;";
				}
				this.pInfoLabel3.style.backgroundColor = "#6688FF";
			}
			else
			{
				this.pInfoLabel3.innerHTML = Math.round(_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.limitForBonusPoints) + " For Bonus";
				this.pInfoLabel3.style.backgroundColor = "#BB1100";
			}
		}
	}

};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.mouseNotify = function(pEvent, forceClick)
{
	var _25047_JSO_b34ca6c271500820731c2030d051f475c6 = this.findUIComponent(pEvent.clientX, pEvent.clientY, true);

	if (this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.mouseDown)
	{
		this.notMouseDownTime = 0.0;
	}

	if (forceClick)
	{
		if (_25047_JSO_b34ca6c271500820731c2030d051f475c6 != null)
		{
			this.pPressedUIComponent = _25047_JSO_b34ca6c271500820731c2030d051f475c6;
			this.pPressedUIComponent.setPressed(true);

			if (this.pPressedUIComponent == _25047_JSO_b34ca6c271500820731c2030d051f475c6)
			{
				this.pPressedUIComponent.clickNotify(pEvent);
			}
		}
		else
		{
			if (this.pPressedUIComponent != null)
			{
				this.pPressedUIComponent.setPressed(false);
				this.pPressedUIComponent = null;
			}
		}

		return (_25047_JSO_b34ca6c271500820731c2030d051f475c6 != null);
	}

	if (pEvent.type == "mousemove")
	{
		if (this.pPressedUIComponent != null)
		{
			this.pPressedUIComponent.setPressed(this.pPressedUIComponent == _25047_JSO_b34ca6c271500820731c2030d051f475c6);
		}
	}
	else
	{
		if (this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.mouseDown)
		{
			if (this.pPressedUIComponent != null)
			{
				this.pPressedUIComponent.setPressed(false);
				this.pPressedUIComponent = null;
			}

			if (_25047_JSO_b34ca6c271500820731c2030d051f475c6 != null)
			{
				this.pPressedUIComponent = _25047_JSO_b34ca6c271500820731c2030d051f475c6;
				this.pPressedUIComponent.setPressed(true);
			}
		}
		else
		{
			if (this.pPressedUIComponent != null)
			{
				if (this.pPressedUIComponent == _25047_JSO_b34ca6c271500820731c2030d051f475c6)
				{
					this.pPressedUIComponent.clickNotify(pEvent);
				}

				this.pPressedUIComponent.setPressed(false);
				this.pPressedUIComponent = null;
			}
		}
	}

	return (_25047_JSO_b34ca6c271500820731c2030d051f475c6 != null);
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.findUIComponent = function(mouseX, mouseY, pressEnabled)
{
	for (var a = 0; a < this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4.length; ++a)
	{
		var _25047_JSO_b34ca6c271500820731c2030d051f475c6 = this._25047_JSO_b34ca6c271500820201ed4ee28d7322122c4[a];
		if (pressEnabled && !_25047_JSO_b34ca6c271500820731c2030d051f475c6.pressEnabled)
		{
			continue;
		}

		if (_25047_JSO_b34ca6c271500820731c2030d051f475c6.checkMouse(mouseX, mouseY))
		{
			return _25047_JSO_b34ca6c271500820731c2030d051f475c6;
		}
	}

	return null;
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.toggleMenuVisible = function()
{
	this.setMenuVisible(!this.menuVisible);
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.setMenuVisible = function(menuVisible)
{
	if (this.menuVisible == menuVisible)
	{
		return;
	}

	this.menuVisible = menuVisible;
	this.updateMenuValues(!menuVisible);

	this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.updateCumulativeData();
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.updateMenuValues = function(writeValues)
{
	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var pGame = pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;
	var _25047_JSO_347a51d8e2e2e7e0 = pGameView._25047_JSO_347a51d8e2e2e7e0;

	if (writeValues)
	{
		pGame.setGameMode((parseInt(this.pGameModeSelect.value) + 1) % 6);

		pGame.setTrafficDensityIndex(parseInt(this.pTrafficDensitySelect.value));
		_25047_JSO_347a51d8e2e2e7e0.setTrafficSpeedIndex(parseInt(this.pTrafficSpeedSelect.value));
		_25047_JSO_347a51d8e2e2e7e0.setRoadCurvatureIndex(parseInt(this.pRoadCurvatureSelect.value));
		_25047_JSO_347a51d8e2e2e7e0.setRoadSlopeIndex(parseInt(this.pRoadSlopeSelect.value));
		_25047_JSO_347a51d8e2e2e7e0.coast = (parseInt(this.pCoastSelect.value) + 1) % 4;
		_25047_JSO_347a51d8e2e2e7e0.setRoadIndentIndex(parseInt(this.pRoadIndentSelect.value));

		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.setTireSoftness(parseInt(this.pTireSoftnessSelect.value) / 4.0);
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.setEngineMaxTorqueIndex(parseInt(this.pEngineSelect.value));
	}
	else
	{
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pGameModeSelect, (pGame.gameMode - 1 + 6) % 6);

		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pTrafficDensitySelect, pGame.trafficDensityIndex);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pTrafficSpeedSelect, _25047_JSO_347a51d8e2e2e7e0.trafficSpeedIndex);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pRoadCurvatureSelect, _25047_JSO_347a51d8e2e2e7e0.roadCurvatureIndex);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pRoadSlopeSelect, _25047_JSO_347a51d8e2e2e7e0.roadSlopeIndex);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pCoastSelect, (_25047_JSO_347a51d8e2e2e7e0.coast - 1 + 4) % 4);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pRoadIndentSelect, _25047_JSO_347a51d8e2e2e7e0.roadIndentIndex);

		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pTireSoftnessSelect, Math.floor(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.tireSoftness * 4.0));
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pEngineSelect, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.engineMaxTorqueIndex);
	}
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.updateNonMenuValues = function(writeValues)
{
	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var pGame = pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;
	var _25047_JSO_347a51d8e2e2e7e0 = pGameView._25047_JSO_347a51d8e2e2e7e0;

	if (writeValues)
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearMode = parseInt(this.pGearModeSelect.value) + 1;
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.setDrivingStyle(parseInt(this.pDrivingStyleSelect.value) + 1);
	}
	else
	{
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pGearModeSelect, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearMode - 1);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pDrivingStyleSelect, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.drivingStyle - 1);
	}
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.continueGame = function()
{
	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
	_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.setStatus(_25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Departing);
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.resetGame = function()
{
	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var _25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b = pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b;
	_25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.reset();
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.prototype.selectNotify = function(pSelect, selected)
{
	if (!selected)
	{
		return;
	}

	var pGameView = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.pGameView;
	var pGame = pGameView.pModel;

	if (pSelect == this.pGameModeSelect)
	{
		pGame.setGameMode((parseInt(this.pGameModeSelect.value) + 1) % 6);
		pGame.randomizeForGameMode();
		this.updateMenuValues(false);
	}
	else if (pSelect == this.pGearModeSelect || pSelect == this.pDrivingStyleSelect)
	{
		this.updateNonMenuValues(true);
	}
	else if (pSelect == this.pCameraSelect)
	{
		this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.updateCameraParameters();
	}
	else if (pSelect == this.pResolutionSelect)
	{
		this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.updatePixelResolution();
	}
	else
	{
		pGame.setGameMode(Game.GameMode_Custom);
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(this.pGameModeSelect, (pGame.gameMode - 1 + 6) % 6);
		this.updateMenuValues(true);
	}
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex = function(pSelect, index)
{
	pSelect.value = index;
	pSelect.parentElement.children[1].innerHTML = pSelect.options[index + 1].innerHTML;
};

_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.getSelectIndex = function(pSelect)
{
	return parseInt(pSelect.value);
};

}
