with (BABYLON)
{

TrafficSign = function(speed, text)
{
	this.speed = speed;
	this.text = text;

	var pMaterial1 = new StandardMaterial("", null);
	pMaterial1.ambientColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMaterial1.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMaterial1.emissiveColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	pMaterial1.specularColor = new BABYLON.Color3(1.0, 1.0, 1.0).scale(1.0);
	this.pMaterial1 = pMaterial1;

	if (TrafficSign.pMaterial2 == null)
	{
		var pMaterial2 = new StandardMaterial("", null);
		pMaterial2.ambientColor = new BABYLON.Color3(1.0, 0.2, 0.0).scale(0.7);
		pMaterial2.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.0).scale(1.0);
		pMaterial2.emissiveColor = new BABYLON.Color3(1.0, 0.2, 0.0).scale(0.7);
		pMaterial2.specularColor = new BABYLON.Color3(1.0, 0.2, 0.0).scale(1.0);
		TrafficSign.pMaterial2 = pMaterial2;
	}

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.scaleInPlace(1.8);

	this.pMesh1 = new Mesh("", null);
	this.pMesh1.material = this.pMaterial1;
	this.pMesh1.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.pMesh2 = new Mesh("", null);
	this.pMesh2.material = TrafficSign.pMaterial2;
	this.pMesh2.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.updateMesh(this.text);

	this.pMesh1.rotation.set(Math.PI * 0.0, Math.PI * 0.5, -Math.PI * 0.5);
	this.pMesh2.rotation = this.pMesh1.rotation;
	this.pMesh2.position.x = -0.04;

	return this;
};

TrafficSign.prototype = Object.create(Object.prototype);
TrafficSign.prototype.constructor = TrafficSign;
pLiveScriptService.addClass(TrafficSign);

TrafficSign.prototype.pMaterial1 = null;
TrafficSign.pMaterial2 = null;

TrafficSign.prototype._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = null;
TrafficSign.prototype.pMesh1 = null;
TrafficSign.prototype.pMesh2 = null;

TrafficSign.prototype.speed = 0.0;
TrafficSign.prototype.text = "";
TrafficSign.prototype.range = 0.0;

TrafficSign.prototype.updateMesh = function(text)
{  
	var radius = 0.4;
	var circleVertexCount = 12;

	{
		var pVertices = new Array(circleVertexCount * 3);
		var pUVs = new Array(circleVertexCount * 2);
		var pIndices = new Array((circleVertexCount - 2) * 3);

		var c = 0;
		for (var a = 0; a < circleVertexCount; ++a)
		{
			var angle = Math.PI * 2.0 * a / circleVertexCount;
			var p = new Vector3(Math.cos(angle), Math.sin(angle), 0.0);

			var b = a * 3;

			pVertices[b] = p.x * radius;
			pVertices[b + 1] = p.y * radius;
			pVertices[b + 2] = p.z;

			if (a + 2 < circleVertexCount)
			{
				pIndices[c] = 0;
				++c;
				pIndices[c] = a + 2;
				++c;
				pIndices[c] = a + 1;
				++c;
			}

			b = a * 2;
			pUVs[b] = p.x * 0.5 + 0.5;
			pUVs[b + 1] = p.y * 0.5 + 0.5;
		}

		var pVertexData = new VertexData();
		pVertexData.positions = pVertices;
		pVertexData.indices = pIndices;
		pVertexData.uvs = pUVs;
		var pNormals = [];
		BABYLON.VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
		pVertexData.normals = pNormals;
		pVertexData.applyToMesh(this.pMesh1);

		var pTexture = new BABYLON.DynamicTexture("", { width: 64, height: 64 }, null, true);
		this.pMaterial1.ambientTexture = pTexture;
		this.pMaterial1.diffuseTexture = pTexture;
		this.pMaterial1.emissiveTexture = pTexture;
		this.pMaterial1.specularTexture = pTexture;

		var pContext = pTexture.getContext();
		pContext.fillStyle = "white";
		pContext.fillRect(0, 0, 64, 64);

		pContext.lineWidth = 10.0;
		pContext.strokeStyle = "red";
		_25047_JSO_6b6874a57a1a36cc08c414cbb6fffd5d0f.drawRoundRect(pContext, 2, 2, 60, 60, 30);
		pContext.stroke();

		pContext.font = "bold 48px Tahoma";
		pContext.textAlign = "center";
		pContext.translate(32, 52);
		pContext.scale(0.85, 1.15);
		pContext.fillStyle = "black";
		pContext.fillText(text, 0, 0);		
		
		pTexture.update();
	}

	{
		circleVertexCount = 4;

		var pVertices = new Array(circleVertexCount);
		var pIndices = new Array((circleVertexCount - 2) * 3);
		var pUVs = new Array(8);
		pUVs[0] = 0.0;
		pUVs[1] = 0.0;
		pUVs[2] = 1.0;
		pUVs[3] = 0.0;
		pUVs[4] = 1.0;
		pUVs[5] = 1.0;
		pUVs[6] = 0.0;
		pUVs[7] = 1.0;

		var c = 0;
		for (var a = 0; a < circleVertexCount; ++a)
		{
			var angle = Math.PI * 2.0 * a / circleVertexCount + Math.PI * 0.25;
			var p = new Vector3(Math.cos(angle) * 0.1, Math.sin(angle) * 0.7 - 0.7, 0.0);

			var b = a * 3;

			pVertices[b] = p.x;
			pVertices[b + 1] = p.y;
			pVertices[b + 2] = p.z;

			if (a + 2 < circleVertexCount)
			{
				pIndices[c] = 0;
				++c;
				pIndices[c] = a + 2;
				++c;
				pIndices[c] = a + 1;
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
		pVertexData.applyToMesh(this.pMesh2);
	}

};

}
