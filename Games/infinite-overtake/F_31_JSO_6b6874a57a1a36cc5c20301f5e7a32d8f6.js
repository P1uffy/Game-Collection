_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f = function(_25047_JSO_3e661332c02fe5cd201c0463adb46320182018, width, height)
{
	this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = _25047_JSO_3e661332c02fe5cd201c0463adb46320182018;

	this.pMaterial = new BABYLON.StandardMaterial("", this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_eff1e664bee3aad1);
	this.pMaterial.disableLighting = true;
	this.pMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
	this.pMaterial.useAlphaFromDiffuseTexture = true;
	this.pMaterial.alpha = 1.0;

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new BABYLON.TransformNode("");
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.x = Math.PI;

	this.pPlane = BABYLON.MeshBuilder.CreatePlane("", { width: 1, height: 1, }, this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_eff1e664bee3aad1);
	this.pPlane.material = this.pMaterial;
	this.pPlane.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pCenterUIPanel.addUIComponent(this);

	this.setSize(width, height);
	
	return this;
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype = Object.create(Object.prototype);
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.constructor = _25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f;
pLiveScriptService.addClass(_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f);

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype._25047_JSO_3e661332c02fe5cd201c0463adb46320182018 = null;

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.width = -1;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.height = -1;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.cornerRad = 4;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.lineWidth = 1.5;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.strokeStyle = "rgba(255, 255, 255, 1.0)";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.shadowColor = "gray";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.shadowBlur = 0.2;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.shadowOffsetX = 0.6;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.shadowOffsetY = -0.3;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.color1 = "rgb(210, 0, 0)";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.color2 = "rgb(255, 120, 120)";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.font = "bold 48px Tahoma";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.fontColor1 = "rgba(255, 255, 255, 1.0)";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.fontColor2 = "black";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.fontScale = 0.2;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.textAlign = "center";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pressed = false;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pressEnabled = true;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.text = "";
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.debugEnabled = false;

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pMaterial = null;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pTexture = null;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pContext = null;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.textureScaleX = 1.0;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.textureScaleY = 1.0;

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.textureDirty = true;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.contextDirty = true;

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pClickFuncion = null;
_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.pDrawFunction = null;

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.setSize = function(width, height)
{
	if (this.width == width && this.height == height)
	{
		return;
	}

	this.width = width;
	this.height = height;

	this.pPlane.scaling.set(this.width, this.height, 1);

	this.textureDirty = true;
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.setPressed = function(pressed)
{
	if (this.pressed == pressed)
	{
		return;
	}

	this.pressed = pressed;
	this.contextDirty = true;
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.setText = function(text)
{
	if (this.text == text)
	{
		return;
	}

	this.text = text;
	this.contextDirty = true;
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.update = function()
{
	if (this.textureDirty)
	{
		this.textureDirty = false;

		var w = this.calculateTextureSize(this.width);
		var h = this.calculateTextureSize(this.height);

		this.textureScaleX = w / this.width;
		this.textureScaleY = h / this.height;

		this.pTexture = new BABYLON.DynamicTexture("", {
			width: w,
			height: h },
			this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_eff1e664bee3aad1, true);
		this.pTexture.hasAlpha = true;

		this.pMaterial.diffuseTexture = this.pTexture;
		this.pContext = this.pTexture.getContext();

		this.contextDirty = true;
	}

	if (this.contextDirty)
	{
		this.contextDirty = false;

		this.pContext.save();

		var sx = this.textureScaleX;
		var sy = this.textureScaleY;
		this.pContext.scale(sx, sy);

		var shadowBlur = this.shadowBlur;
		var shadowOffsetX = this.shadowOffsetX;
		var shadowOffsetY = this.shadowOffsetY;

		this.pContext.clearRect(0, 0, this.width, this.height);

		if (this.pressed)
		{
			this.pContext.translate(shadowOffsetX, shadowOffsetY);
		}

		this.pContext.lineWidth = this.lineWidth;

		_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.drawRoundRect(this.pContext,
			this.lineWidth * 0.5,
			(this.lineWidth * 0.5 - shadowOffsetY + shadowBlur),
			this.width - this.lineWidth - shadowOffsetX - shadowBlur,
			this.height - this.lineWidth - (-shadowOffsetY + shadowBlur),
			this.cornerRad);
		this.pContext.strokeStyle = this.strokeStyle;
		if (!this.pressed)
		{
			this.pContext.shadowColor = this.shadowColor;
			this.pContext.shadowBlur = shadowBlur * Math.max(this.textureScaleX, this.textureScaleY);
			this.pContext.shadowOffsetX = shadowOffsetX * this.textureScaleX;
			this.pContext.shadowOffsetY = shadowOffsetY * this.textureScaleY;
		}
		this.pContext.stroke();

		this.pContext.shadowColor = "transparent";

		var pGradient = this.pContext.createLinearGradient(0, 0, 0, this.height);
		pGradient.addColorStop(0, this.color1);
		pGradient.addColorStop(0.5, this.color2);
		pGradient.addColorStop(1, this.color1);

		this.pContext.fillStyle = pGradient;
		_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.drawRoundRect(this.pContext,
			this.lineWidth * 0.5,
			(this.lineWidth * 0.5 - shadowOffsetY + shadowBlur),
			this.width - this.lineWidth - shadowOffsetX - shadowBlur,
			this.height - this.lineWidth - (-shadowOffsetY + shadowBlur),
			this.cornerRad);
		this.pContext.fill();

		if (this.debugEnabled)
		{
			this.pContext.lineWidth = 1;
			this.pContext.strokeStyle = "black";
			this.pContext.shadowColor = "transparent";
			this.pContext.beginPath();
			this.pContext.rect(0, 0, this.width, this.height);
			this.pContext.stroke();
		}

		this.pContext.font = this.font;
		this.pContext.textAlign = this.textAlign;

		var sx2 = this.fontScale * 0.8;
		var sy2 = this.fontScale;
		var x = (-this.lineWidth - shadowOffsetX - shadowBlur) * this.fontScale;
		var y = -(-this.lineWidth - (-shadowOffsetY + shadowBlur)) * this.fontScale;

		this.pContext.translate(this.width * 0.5, this.height * 0.5);

		if (this.pDrawFunction != null)
		{
			this.pContext.save();
			this.pDrawFunction(this, this.pContext);
			this.pContext.restore();
		}

		this.pContext.translate(0, -(48 - 10) * 0.5 * sy2);

		this.pContext.scale(sx2, -sy2);
		this.pContext.fillStyle = this.fontColor2;
		this.pContext.fillText(this.text, 0, 0);

		if (this.pressed)
		{
			this.pContext.shadowColor = "rgba(255, 255, 0, 1.0)";
			this.pContext.shadowBlur = 40 * this.fontScale;
			this.pContext.shadowOffsetX = 0;
			this.pContext.shadowOffsetY = 0;
		}
		
		this.pContext.translate(-this.shadowOffsetX / sx2, this.shadowOffsetY / sy2);
		this.pContext.fillStyle = this.fontColor1;
		this.pContext.fillText(this.text, 0, 0);
		
		this.pContext.restore();		

		this.pTexture.update();
	}
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.checkMouse = function(mouseX, mouseY)
{
	var p1 = this.getPixel(-1, -1);
	var p2 = this.getPixel(1, 1);

	return (mouseX >= p1.x && mouseY >= p1.y && mouseX <= p2.x && mouseY <= p2.y);
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.getPixel = function(cornerX, cornerY)
{
	var p2 = BABYLON.Vector3.Project(new BABYLON.Vector3(cornerX * 0.5, cornerY * 0.5, 0),
		this.pPlane.getWorldMatrix(),
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_eff1e664bee3aad1.getTransformMatrix(),
		this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_712dc4dc0222013f2fffd.viewport);
	var x = window.innerWidth * 0.5 + (p2.x - 0.5) * window.innerWidth;
	var y = window.innerHeight * 0.5 + (p2.y - 0.5) * window.innerHeight;
	
	return {x: x, y: y};
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.clickNotify = function(pEvent)
{
	if (this.pClickFunction != null)
	{
		this.pClickFunction(this);
	}
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.prototype.calculateTextureSize = function(size)
{
	size *= this._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.resolution;

	for (var a = 1; a < 12; ++a)
	{
		var size2 = Math.pow(2, a);
		if (size2 >= size)
		{
			return size2;
		}
	}

	return Math.pow(2, 12);
};

_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.drawRoundRect = function(pContext, x, y, w, h, r)
{
	if (w < 2 * r) r = w / 2;
	if (h < 2 * r) r = h / 2;
	pContext.beginPath();
	pContext.moveTo(x + r, y);
	pContext.arcTo(x + w, y, x + w, y + h, r);
	pContext.arcTo(x + w, y + h, x, y + h, r);
	pContext.arcTo(x, y + h, x, y, r);
	pContext.arcTo(x, y, x + w, y, r);
	pContext.closePath();
};

