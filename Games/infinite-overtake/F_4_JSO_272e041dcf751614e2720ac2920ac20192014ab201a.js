with (BABYLON)
{

_25047_JSO_0e3f5badcdffd6fffd = function()
{
	var pThis = this;

	this.pMainDiv = document.getElementById("pMainDiv");
	this.pLoadingDiv = document.getElementById("pLoadingDiv");

	this.pFpsDiv = document.getElementById("pFpsDiv");
	this.pFpsLabel = document.getElementById("pFpsLabel");

	this._25047_JSO_ee77ba662022201d7c77 = document.getElementById("pCanvas");
	this._25047_JSO_caa95c2417115f4e = new Engine(this._25047_JSO_ee77ba662022201d7c77, true);

	this._25047_JSO_eff1e664bee3aad1 = new Scene(this._25047_JSO_caa95c2417115f4e);
	this._25047_JSO_eff1e664bee3aad1.useRightHandedSystem = true;
	this._25047_JSO_eff1e664bee3aad1.clearColor = new Color3(0.7, 0.94, 1.0);

	this._25047_JSO_eff1e664bee3aad1.fogMode = Scene.FOGMODE_LINEAR;
	this._25047_JSO_eff1e664bee3aad1.fogDensity = 0.03;
	this._25047_JSO_eff1e664bee3aad1.fogStart = 0.6;
	this._25047_JSO_eff1e664bee3aad1.fogEnd = 650.0;
	this._25047_JSO_eff1e664bee3aad1.fogColor = new Color3(1.0, 1.0, 0.8);

	this.cameraDir = new Vector3();
	this.targetPos = new Vector3();
	this.cameraAngle = 0.0;

	this._25047_JSO_712dc4dc0222013f2fffd = new TargetCamera("pCamera", new Vector3(100, -1000, 500), this._25047_JSO_eff1e664bee3aad1)
	this._25047_JSO_712dc4dc0222013f2fffd.fov = 0.8;
	this._25047_JSO_712dc4dc0222013f2fffd.minZ = 0.6;
	this._25047_JSO_712dc4dc0222013f2fffd.maxZ = 550.0;
	this._25047_JSO_712dc4dc0222013f2fffd.setTarget(new Vector3(0, 0, 0));
	this.lookAngle = Math.PI;

	var pWaterMaterial = new StandardMaterial("", null);
	pWaterMaterial.ambientColor = new Color3(0, 0.6, 1.0).scale(0.3);
	pWaterMaterial.diffuseColor = new Color3(0, 0.6, 1.0).scale(0.3);
	pWaterMaterial.emissiveColor = new Color3(0, 0.6, 1.0).scale(0.3);
	pWaterMaterial.alpha = 0.7;

	this.pSphere = MeshBuilder.CreateSphere("", { segments: 2, sideOrientation: Mesh.BACKSIDE }, null);
	this.pSphere.scaling.scaleInPlace(4.0);
	this.pSphere.setEnabled(false);
	this.pSphere.material = pWaterMaterial;
	this.pSphere.isOccluded = false;

	this.time = 0.0;
	this.deltaTime = 0.0;
	this.realTime = 0.0;
	this.startTime = new Date().getTime() * 0.001;
	this.helperTime = 0.0;

	this.pLight = new PointLight("pLight", new Vector3(1, 10, 5), this._25047_JSO_eff1e664bee3aad1);
	this.pLight.parent = this._25047_JSO_712dc4dc0222013f2fffd;

	this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = new _25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a(this);

	this.pGroundTransformNode = new TransformNode("", this._25047_JSO_eff1e664bee3aad1);

	var pGroundMaterial = new StandardMaterial("pGroundMaterial", this._25047_JSO_eff1e664bee3aad1);
	pGroundMaterial.ambientColor = new Color3(0, 0.18, 0.26).scale(0.1);
	pGroundMaterial.diffuseColor = new Color3(0, 0.18, 0.86).scale(0.2);
	pGroundMaterial.emissiveColor = new Color3(0, 0.18, 0.26).scale(0.1);
	pGroundMaterial.alpha = 0.8;

	var pGroundMaterial2 = new StandardMaterial("pGroundMaterial", this._25047_JSO_eff1e664bee3aad1);
	pGroundMaterial2.ambientColor = new Color3(0, 0.18, 0.26);
	pGroundMaterial2.diffuseColor = new Color3(0, 0.18, 0.86);
	pGroundMaterial2.emissiveColor = new Color3(0, 0.18, 0.26);
	pGroundMaterial2.disableLighting = true;
	pGroundMaterial2.alpha = 0.9;

	for (var z = 0; z > -14.0; z -= 10.0)
	{
		var pGround = MeshBuilder.CreateGround("pGround", { width: 6000, height: 6000, subdivisions: 1, updatable: false }, this._25047_JSO_eff1e664bee3aad1);
		pGround.rotation.x = Math.PI * 0.5;
		pGround.position.z = z;
		pGround.parent = this.pGroundTransformNode;

		if (z == 0)
		{
			pGround.material = pGroundMaterial;
		}
		else
		{
			pGround.material = pGroundMaterial2;
		}
	}

	this.mouseX = 0;
	this.mouseY = 0;
	this.mousePrevX = 0;
	this.mousePrevY = 0;
	this.mouseDown = false;
	this.mouseDragging = false;
	this.cameraTranslation = 0.0;
	this.uiUpdateIndex = 0;

	var onDocumentMouseMove = function(event)
	{
		pThis.mouseX = event.clientX;
		pThis.mouseY = event.clientY;

		if (pThis.mouseDown)
		{
			var deltaX = (pThis.mouseX - pThis.mousePrevX) / pThis._25047_JSO_ee77ba662022201d7c77.width;
			var deltaY = (pThis.mouseY - pThis.mousePrevY) / pThis._25047_JSO_ee77ba662022201d7c77.width;

			pThis.mouseDragging = true;
		}

		pThis.mousePrevX = pThis.mouseX;
		pThis.mousePrevY = pThis.mouseY;

		pThis._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.mouseNotify(event, false);
	}

	var onDocumentMouseDown = function(event)
	{
		pThis.mouseDown = true;
		pThis._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.mouseNotify(event, false);
	}

	var onDocumentMouseUp = function(event)
	{
		pThis.mouseDown = false;
		pThis.mouseDragging = false;
	}

	window.addEventListener('mousemove', onDocumentMouseMove, false);
	window.addEventListener('mousedown', onDocumentMouseDown, false);
	window.addEventListener('mouseup', onDocumentMouseUp, false);

	Hammer(window).on("pan", function(event)
	{
		if (!pThis.mouseDown)
		{
			var deltaX = event.velocityX / pThis._25047_JSO_ee77ba662022201d7c77.width * 80.0;
			var deltaY = event.velocityY / pThis._25047_JSO_ee77ba662022201d7c77.width * 80.0;

			pThis.mouseDragging = true;
		}

		event.clientX = event.center.x;
		event.clientY = event.center.y;
	});

	Hammer(window).on("press", function(event)
	{
		event.clientX = event.center.x;
		event.clientY = event.center.y;

		pThis.mouseDown = true;
		pThis._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.mouseNotify(event, false);
	});

	Hammer(window).on("tap", function(event)
	{
		event.clientX = event.center.x;
		event.clientY = event.center.y;

		pThis.mouseDown = false;
		pThis.mouseDragging = false;

		if (!pThis._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.mouseNotify(event, true))
		{
			pThis.mouseNotify(event, true);
			pThis.mouseNotify(event, true);
		}
	});

	this.pKeys = {};

	window.addEventListener("keydown", function(e)
	{
		if (!(e.target != null && e.target.type == "text"))
		{
			var c = e.keyCode;
			if (c >= 32 && c <= 40)
			{
				e.preventDefault();
			}
		}
		pThis.keyDown(e.key);
	}, false);
	window.addEventListener("keyup", function(e)
	{
		if (!(e.target != null && e.target.type == "text"))
		{
			var c = e.keyCode;
			if (c >= 32 && c <= 40)
			{
				e.preventDefault();
			}
		}
		pThis.keyUp(e.key);
	}, false);

	var onResize = function(event)
	{
		pThis.updatePixelResolution();
	}
	window.addEventListener('resize', onResize);

	this.pMeshDesigner = new MeshDesigner(this);
	this.pDashboardTransformNode = new TransformNode("", this._25047_JSO_eff1e664bee3aad1);
	this.pDrivingWheelMesh = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDrivingWheelMesh"].pMesh;
	this.pNeedle1Mesh = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateNeedle1Mesh"].pMesh;
	this.pNeedle2Mesh = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateNeedle2Mesh"].pMesh;
	this.pLabel1 = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pLabel1;
	this.pLabel2 = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pLabel2;
	this.pLabel3 = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pLabel3;
	this.pLabel4 = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pLabel4;
	this.pLabel5 = this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pLabel5;

	var pGame = new Game();
	this.pGameView = pGame.pViewTag.pView;
	this.pGameView.initialize(this);
	this.headAng = 0.0;

	this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.updateMenuValues(false);
	this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.updateNonMenuValues(false);
	this.updateCameraParameters();
	this.updatePixelResolution();

	this.pEngineSound1 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pEngineSound2 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pEngineSound3 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pSkidSound1 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pSkidSound2 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pSplashSound = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pCrashSound1 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pCrashSound2 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pCrashSound3 = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pOvertakeSound = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();
	this.pMusicSound = _25047_JSO_0e3f5badcdffd6fffd.createDummySound();

	this.loadAssetCount = 0;
	this.pAssetsManager = new AssetsManager(this._25047_JSO_eff1e664bee3aad1);
	this.pAssetsManager.useDefaultLoadingScreen = false;
	this.pAssetsManager.addTextureTask("", "textures/road2.jpg").onSuccess = function(pTask)
	{
		var pMesh1Material = _25047_JSO_78ac15334a20202b5.pMesh1Material;
		pMesh1Material.ambientColor = new Color3(0.6, 0.6, 0.6).scale(0.2);
		pMesh1Material.diffuseColor = new Color3(0.6, 0.6, 0.6).scale(1.0);
		pMesh1Material.emissiveColor = new Color3(0.6, 0.6, 0.6).scale(0.2);
		pMesh1Material.specularColor = new Color3(0.6, 0.6, 0.6).scale(0.8);
		pMesh1Material.diffuseTexture = pTask.texture;

		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/engine17.ogg").onSuccess = function(pTask)
	{
		pThis.pEngineSound1 = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/motor2.ogg").onSuccess = function(pTask)
	{
		pThis.pEngineSound2 = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/engine19.ogg").onSuccess = function(pTask)
	{
		pThis.pEngineSound3 = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/skid1.ogg").onSuccess = function(pTask)
	{
		pThis.pSkidSound1 = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true, volume: 0.0 });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/skid2.ogg").onSuccess = function(pTask)
	{
		pThis.pSkidSound2 = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true, volume: 0.0 });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/splash.ogg").onSuccess = function(pTask)
	{
		pThis.pSplashSound = new Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: false, autoplay: false, volume: 1.0 });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/crash7.ogg").onSuccess = function(pTask)
	{
		pThis.pCrashSound1 = new BABYLON.Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: false, autoplay: false });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/crash3.ogg").onSuccess = function(pTask)
	{
		pThis.pCrashSound2 = new BABYLON.Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: false, autoplay: false });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/crash4.ogg").onSuccess = function(pTask)
	{
		pThis.pCrashSound3 = new BABYLON.Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: false, autoplay: false });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/overtake3.ogg").onSuccess = function(pTask)
	{
		pThis.pOvertakeSound = new BABYLON.Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: false, autoplay: false });
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.addBinaryFileTask("", "audio/music.ogg").onSuccess = function(pTask)
	{
		pThis.pMusicSound = new BABYLON.Sound("", pTask.data, pThis._25047_JSO_eff1e664bee3aad1, null, { loop: true, autoplay: true });
		pThis.pMusicSound.setVolume(0.4);
		pThis.loadAssetNotify(pTask);
	};
	this.pAssetsManager.load();

	return this;
};

_25047_JSO_0e3f5badcdffd6fffd.prototype = Object.create(Object.prototype);
_25047_JSO_0e3f5badcdffd6fffd.prototype.constructor = _25047_JSO_0e3f5badcdffd6fffd;
pLiveScriptService.addClass(_25047_JSO_0e3f5badcdffd6fffd);

_25047_JSO_0e3f5badcdffd6fffd.prototype.loadRecordNotify = function(time)
{
	this.time = time;
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.keyDown = function(key)
{
	key = key.toLowerCase();

	this.pKeys[key] = true;

	var pActiveElement = document.activeElement;
	if (pActiveElement != null && pActiveElement.type == "text")
	{
		return;
	}

	if (key == "p" && this.pKeys["shift"])
	{
		alert("Paused");
	}
	if (key == "f")
	{
		toggleFullScreen();
	}

	var pGame = this.pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;
	if (key == "t")
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearMode = ((++_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearMode - 1) % 3) + 1;
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.updateNonMenuValues(false);
	}
	if (key == "g")
	{
		if (_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex < _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pGearRatios.length - 1)
		{
			++_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex;
		}
	}
	if (key == "b" || key == "v")
	{
		if (_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex > 0)
		{
			--_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex;
		}
	}

	if (key == "m")
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.setDrivingStyle(((++_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.drivingStyle - 1) % 4) + 1);
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.updateNonMenuValues(false);
	}

	if (key == "c")
	{
		var pCameraSelect = this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pCameraSelect;
		_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.setSelectIndex(pCameraSelect, (_25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.getSelectIndex(pCameraSelect) + 1) % 5);
		this.updateCameraParameters();
	}

	if (key == " ")
	{
		if (this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.menuVisible &&
			this.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.status == _25047_JSO_a9b01349425c266ab252d70472201447c9.Status_Reached)
		{
			this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.continueGame();
		}
		else
		{
			this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.toggleMenuVisible();
		}
	}
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.keyUp = function(key)
{
	key = key.toLowerCase();

	this.pKeys[key] = false;

	var pActiveElement = document.activeElement;
	if (pActiveElement != null && pActiveElement.type == "text")
	{
		return;
	}
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.start = function()
{
	var renderLoop = function()
	{
		this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b.renderLoop();
	};
	renderLoop._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = this;

	this._25047_JSO_caa95c2417115f4e.runRenderLoop(renderLoop);
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.renderLoop = function()
{
	var pGame = this.pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;
	var pRoadGuides = this.pGameView._25047_JSO_347a51d8e2e2e7e0.pRoadGuides;

	this.realTime = new Date().getTime() * 0.001;
	this.deltaTime = this._25047_JSO_caa95c2417115f4e.getDeltaTime() * 0.001;
	this.helperTime += this.deltaTime;
	if (this.helperTime > 2.0)
	{
		this.helperTime = 0.0;
	}

	if (this.pLoadingDiv.style.visibility == "visible" &&
		this.realTime > this.startTime + 3.0)
	{
		var opacity = 1.0 - (this.realTime - (this.startTime + 3.0)) * 0.5;
		if (opacity < 0.0)
		{
			opacity = 0.0;
		}

		if (opacity == 0.0)
		{
			this.pLoadingDiv.style.visibility = "hidden";
		}
		else
		{
			this.pLoadingDiv.style.opacity = opacity;
		}
	}

	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.targetTireAngle = 0.0;
	if (this.pKeys["arrowright"] || this.pKeys["d"])
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.targetTireAngle -= 0.9;
	}
	if (this.pKeys["arrowleft"] || this.pKeys["a"])
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.targetTireAngle += 0.9;
	}

	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.throttle = 0.0;
	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.brake = 0.0;
	if (this.pKeys["arrowup"] || this.pKeys["w"])
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.throttle = 1.0;
	}
	if (this.pKeys["arrowdown"] || this.pKeys["s"])
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.brake = 1.0;
	}

	var dt = this.deltaTime;

	if (Configuration.debugMode)
	{
		pLiveScriptService.time = this.time;
		pLiveScriptService.update();
		if (pLiveScriptService.paused)
		{
			dt = 0.0;
		}
	}

	if (this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.menuVisible)
	{
		dt = 0.0;
	}

	dt = pGame.operateGame(dt);
	this.time += dt;
	pGame.update();

	var cameraIndex = this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pCameraSelect.value;
	if (cameraIndex < 2)
	{
		var pV1 = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1.clone();
		var pV0 = _25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0, pV1.scale(0.22));

		var targetHeadAng = 0.0;
		var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pTires[0].pPoint.pViewTag.pView.pValidTriangle;
		if (_25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
		{
			this.targetPos.copyFrom(_25047_JSO_a6091513150509033f0ccea65fe3fffdca._25047_JSO_34a44a1af65c6d58.findTargetPos(20.0, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d, 1.0, 3.0));
			targetHeadAng += Vector3.Dot(this.targetPos.subtract(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d).normalize(), _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1) * 0.5;
		}

		this.headAng += (targetHeadAng - this.headAng) * 4.0 * dt;
		var v2 = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v2.scale(this.headAng);
		pV0.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(pV0, v2));
		pV1.copyFrom(_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a(pV1, v2));
		var pV2 = Vector3.Cross(pV0, pV1).normalize();
		pV1.copyFrom(Vector3.Cross(pV2, pV0));

		var h = 0.7;

		_25047_JSO_201e6f00bcce7ae9f0.setMatrix(this._25047_JSO_712dc4dc0222013f2fffd, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v2.scale(h)).
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1.scale(0.25)).
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0.scale(0.1 - cameraIndex * 0.3)),
			pV1, pV2, pV0);
		this._25047_JSO_712dc4dc0222013f2fffd.rotation.z -= Math.atan(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1.z) * 0.5;

		_25047_JSO_201e6f00bcce7ae9f0.setMatrix(this.pDashboardTransformNode, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v2.scale(h - 0.50 - cameraIndex * 0.04)).
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1.scale(0.25)).
			add(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0.scale(0.8 - cameraIndex * 0.2)),
			_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v1, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v2);
	}
	else
	{
		var targetLookAngle = Math.PI + Math.atan2(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0.y, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.v0.x);
		this.lookAngle += -_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_d9332039202618f6a2201464755a7afffde44bd9(
			_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b4a350354dc404d9a7cac9a9f3bba844(targetLookAngle, Math.PI * 2.0),
			_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b4a350354dc404d9a7cac9a9f3bba844(this.lookAngle, Math.PI * 2.0)) * 5.0 * this.deltaTime;

		this.cameraDir.set(Math.cos(this.lookAngle), Math.sin(this.lookAngle), 0);
		this._25047_JSO_712dc4dc0222013f2fffd.position.x = this.cameraDir.x * 40.0;
		this._25047_JSO_712dc4dc0222013f2fffd.position.y = this.cameraDir.y * 40.0;
		this._25047_JSO_712dc4dc0222013f2fffd.position.z = 10.0 - this.cameraAngle * 15.0;
		this._25047_JSO_712dc4dc0222013f2fffd.position.scaleInPlace(0.3 - this.cameraAngle * 0.1);
		this.targetPos.copyFrom(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d);
		this.targetPos.z = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.z + 1.0;
		this._25047_JSO_712dc4dc0222013f2fffd.position.addInPlace(this.targetPos);

		var targetCameraTranslation = 3.0 + this.cameraAngle * 5.0;
		this.cameraTranslation += (targetCameraTranslation - this.cameraTranslation) * this.deltaTime * 4.0;

		var cameraTranslationX = -this.cameraDir.x * this.cameraTranslation;
		var cameraTranslationY = -this.cameraDir.y * this.cameraTranslation;
		this._25047_JSO_712dc4dc0222013f2fffd.position.x += cameraTranslationX;
		this._25047_JSO_712dc4dc0222013f2fffd.position.y += cameraTranslationY;
		this.targetPos.x += cameraTranslationX;
		this.targetPos.y += cameraTranslationY;

		this._25047_JSO_712dc4dc0222013f2fffd.upVector.set(0, 0, 1);
		this._25047_JSO_712dc4dc0222013f2fffd.setTarget(this.targetPos);
		this._25047_JSO_712dc4dc0222013f2fffd.update();
	}

	this.pDrivingWheelMesh.rotation.z = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.tireAngle * 3.0;
	this.pNeedle1Mesh.rotation.z = -Math.abs(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.rpmIndicatorAngVel * _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.angVelToRpm) * 0.00015 * Math.PI + Math.PI * 0.6;
	this.pNeedle2Mesh.rotation.z = -_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_dceddc17dd7dfc7178.length() * 0.0658 + Math.PI * 0.76;

	var gearMode = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearMode;
	if (gearMode == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Automatic)
	{
		this.pLabel1._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
		this.pLabel1.setText((_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex == 0) ? "R" : "D" + _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex);
		this.pLabel1.update();

		this.pLabel2._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
		this.pLabel3._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
	}
	else if (gearMode == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_Manual)
	{
		this.pLabel2._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
		this.pLabel2.setText((_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex == 0) ? "R" : "M" + _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex);
		this.pLabel2.update();

		this.pLabel1._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
		this.pLabel3._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
	}
	else if (gearMode == _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.GearMode_CVT)
	{
		var lastGearRatio = _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pGearRatios[_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pGearRatios.length - 1];
		this.pLabel3._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
		this.pLabel3.setText((_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearIndex == 0) ? "R" :
			(1 + (_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.gearRatio - 0.1) / (lastGearRatio - 0.1) *
			(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pGearRatios.length - 2)).toFixed(1));
		this.pLabel3.update();

		this.pLabel1._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
		this.pLabel2._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
	}

	if (_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.drivingStyle <= _25047_JSO_7e7e7daf7acc202038e7a02f21442022f17a.DrivingStyle_Normal)
	{
		if (this.helperTime == 0.0)
		{
			this.pLabel4.setText(this.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.calculateCurrentDataFuelPer100km().toFixed(1));
			this.pLabel5.setText("" + Math.round(this.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.averageSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh));
		}
	}
	else
	{
		this.pLabel4.setText(Math.abs(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.accelTestTime).toFixed(2));
		this.pLabel5.setText("" + Math.round(this.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.topSpeed * _25047_JSO_a9b01349425c266ab252d70472201447c9.toKmh));
	}
	this.pLabel4.update();
	this.pLabel5.update();

	this.pGroundTransformNode.position.set(_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.x, _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.y, 0.0);

	this.pSphere.position.set(this._25047_JSO_712dc4dc0222013f2fffd.position.x, this._25047_JSO_712dc4dc0222013f2fffd.position.y, (this._25047_JSO_712dc4dc0222013f2fffd.position.z > 0.0) ? 0.0 : this._25047_JSO_712dc4dc0222013f2fffd.position.z);
	this.pSphere.setEnabled(this._25047_JSO_712dc4dc0222013f2fffd.position.z < 0.0);

	this._25047_JSO_eff1e664bee3aad1.render();

	++this.uiUpdateIndex;
	this.uiUpdateIndex = this.uiUpdateIndex % 10;
	if (this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.menuVisibleTime == 0.0 && this.uiUpdateIndex != 0)
	{
		return;
	}

	updateMainDiv();
	if (this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.menuVisibleTime == 0.0)
	{
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.update(this.deltaTime);
	}
	else
	{
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.update(this.deltaTime * 10);
	}

	if (Configuration.debugMode)
	{
		var s =
			"keys=" + this.pKeys["shift"] + "|" + this.pKeys["control"] + "|" + this.pKeys["alt"] + "<br>" +
			"FPS=" + Math.round(this._25047_JSO_caa95c2417115f4e.getFps() * 10.0) / 10.0 + "<br>" +
			"time=" + Math.round(this.time) + "<br>" +
			"iterationCount1=" + pGame.iterationCount1 + "<br>" +
			"iterationCount2=" + pGame.iterationCount2 + "<br>" +
			"gameModeScore=" + this.pGameView._25047_JSO_347a51d8e2e2e7e0._25047_JSO_f8ccebaab276d517eba5f161201d40b4a31b.pCurrentData.gameModeScore + "<br>" +
			"";
		this.pFpsLabel.innerHTML = s;
	}
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.updateCameraParameters = function()
{
	var pGame = this.pGameView.pModel;
	var _25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed;

	var cameraIndex = this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pCameraSelect.value;
	this.cameraAngle = 0.8 - (cameraIndex - 1) * 0.4;

	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pViewTag.pView._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(cameraIndex > 0);
	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pViewTag.pView.pVehicleMesh.pTorsoMesh.setEnabled(cameraIndex != 1);
	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pViewTag.pView.pVehicleMesh.pTorsoMesh2.setEnabled(cameraIndex != 1);
	_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pViewTag.pView.pVehicleMesh.pLightsMesh.setEnabled(cameraIndex != 1);
	for (var a = 0; a < 4; ++a)
	{
		_25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.pTires[a].pViewTag.pView._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(cameraIndex != 0);
	}

	if (cameraIndex < 2)
	{
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pDashboardTransformNode;

		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.set(0, 0, 0);
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.x = 0.0;
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.y = -Math.PI * 0.5 + 0.1;
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.z = -Math.PI * 0.5;
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.copyFrom(new Vector3(1, 1, 1).scale(0.2));

		this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pMesh.setEnabled(cameraIndex == 0);
		this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDrivingWheelMesh"]._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
	}
	else
	{
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_712dc4dc0222013f2fffd;

		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.set(0, -0.42, -0.9);
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.set(0, 0.0, 0);
		this.pMeshDesigner._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.copyFrom(new Vector3(1, 1, 1).scale(0.24));
		this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDashboardMesh"].pMesh.setEnabled(false);
		this.pMeshDesigner.pFunctionNameVsMeshDesign["updateDrivingWheelMesh"]._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(false);
	}
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.updatePixelResolution = function()
{
	var resolutionIndex = _25047_JSO_a3fabb201e5cd05f20222013ad202639cdcb004a.getSelectIndex(this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pResolutionSelect);
	if (resolutionIndex == 7)
	{
		this.pixelResolution = 1.0;
	}
	else
	{
		this.pixelResolution = (0.3 + 0.7 * Math.pow(resolutionIndex / 7.0, 1.2)) * 1000 / window.innerWidth;
	}
	if (this.pixelResolution > 1.0)
	{
		this.pixelResolution = 1.0;
	}

	this._25047_JSO_ee77ba662022201d7c77.style.width = Math.round(window.innerWidth * this.pixelResolution) + "px";
	this._25047_JSO_ee77ba662022201d7c77.style.height = Math.round(window.innerHeight * this.pixelResolution) + "px";
	this._25047_JSO_caa95c2417115f4e.resize();
	this._25047_JSO_ee77ba662022201d7c77.style.width = "100%";
	this._25047_JSO_ee77ba662022201d7c77.style.height = "100%";
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.mouseNotify = function(event, clicked)
{
};

_25047_JSO_0e3f5badcdffd6fffd.prototype.loadAssetNotify = function(pTask)
{
	++this.loadAssetCount;
	if (this.loadAssetCount == 12)
	{
		console.log("Loaded all");
	}
};

_25047_JSO_0e3f5badcdffd6fffd.createDummySound = function()
{
	var pDummySound = {};
	pDummySound.play = function() { };
	pDummySound.setPlaybackRate = function() { };
	pDummySound.setVolume = function() { };
	return pDummySound;
};

}
