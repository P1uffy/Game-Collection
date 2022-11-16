with (BABYLON)
{

TireMesh = function(invert, circleVertexCount)
{
	if (TireMesh.pTireMaterial == null)
	{
		var pTireMaterial = new StandardMaterial("", null);
		pTireMaterial.ambientColor = new BABYLON.Color3(0.2, 0.2, 0.1).scale(0.35);
		pTireMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.1).scale(0.35);
		pTireMaterial.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.1).scale(0.35);
		pTireMaterial.specularColor = new BABYLON.Color3(0.2, 0.2, 0.1).scale(0.5);
		TireMesh.pTireMaterial = pTireMaterial;

		var pRimMaterial = new StandardMaterial("", null);
		pRimMaterial.ambientColor = new BABYLON.Color3(1.0, 0.2, 0.1).scale(0.5);
		pRimMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.1).scale(0.3);
		pRimMaterial.emissiveColor = new BABYLON.Color3(1.0, 0.2, 0.1).scale(0.5);
		pRimMaterial.specularColor = new BABYLON.Color3(1.0, 0.2, 0.1).scale(0.5);
		TireMesh.pRimMaterial = pRimMaterial;
	}

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.scaleInPlace(0.6);

	this.pTireMesh = new Mesh("", null);
	this.pTireMesh.material = TireMesh.pTireMaterial;
	this.pTireMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.pRimMesh = new Mesh("", null);
	this.pRimMesh.material = TireMesh.pRimMaterial;
	this.pRimMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	var y = -0.05;
	if (invert)
	{
		this.pRimMesh.rotation.z = Math.PI;
		y = -y;
	}

	this.pTireMesh.position.y = -y;
	this.pRimMesh.position.y = -y;

	this.updateMesh(circleVertexCount);

	return this;
};

TireMesh.prototype = Object.create(Object.prototype);
TireMesh.prototype.constructor = TireMesh;
pLiveScriptService.addClass(TireMesh);

TireMesh.pTireMaterial = null;
TireMesh.pRimMaterial = null;

TireMesh.prototype._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = null;
TireMesh.prototype.pTireMesh = null;
TireMesh.prototype.pRimMesh = null;

TireMesh.prototype.updateMesh = function(circleVertexCount)
{  
	var radius = 0.4;
	var rimRadius = 0.2;
	var width = 0.3;

	var widthDiv2 = width * 0.5;

	var pRimVertices = new Array((circleVertexCount + 1) * 3);
	pRimVertices[0] = 0;
	pRimVertices[1] = widthDiv2 * 1.3;
	pRimVertices[2] = 0;

	{
		var n = circleVertexCount * 4;
		var pVertices = new Array(n * 3);

		var c = 0;
		var d = 0;
		for (var a = 0; a < 4; ++a)
		{
			for (var b = 0; b < circleVertexCount; ++b)
			{
				var angle = Math.PI * 2.0 * b / circleVertexCount;
				var p = new Vector3(Math.cos(angle), 0, Math.sin(angle));

				if (a == 0 || a == 3)
				{
					p.scaleInPlace(rimRadius);
				}
				else
				{
					p.scaleInPlace(radius);
				}

				if (a < 2)
				{
					p.y += widthDiv2;
				}
				else
				{
					p.y -= widthDiv2;
				}

				d = c * 3;
				pVertices[d] = p.x;
				pVertices[d + 1] = p.y;
				pVertices[d + 2] = p.z;
				++c;

				if (a == 0)
				{
					d = c * 3;
					pRimVertices[d] = p.x;
					pRimVertices[d + 1] = p.y;
					pRimVertices[d + 2] = p.z;
				}
			}
		}

		var pIndices = new Array(circleVertexCount * 3 * 6);
		c = 0;
		for (var a = 0; a < 3; ++a)
		{
			var shift = a * circleVertexCount;
			for (var b = 0; b < circleVertexCount; ++b)
			{
				pIndices[c] = shift + b;
				++c;
				pIndices[c] = shift + (b + 1) % circleVertexCount + circleVertexCount;
				++c;
				pIndices[c] = shift + (b + 1) % circleVertexCount;
				++c;

				pIndices[c] = shift + b;
				++c;
				pIndices[c] = shift + b + circleVertexCount;
				++c;
				pIndices[c] = shift + (b + 1) % circleVertexCount + circleVertexCount;
				++c;
			}
		}
                
		var pVertexData = new VertexData();
		pVertexData.positions = pVertices;
		pVertexData.indices = pIndices;
		var pNormals = [];
		BABYLON.VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
		pVertexData.normals = pNormals;
		pVertexData.applyToMesh(this.pTireMesh);
	}
    
	{
		var n = pRimVertices.length / 3;
		var pNormals = new Array(n);
		for (var a = 0; a < n; ++a)
		{
			var b = a * 3;
			var v = new Vector3(pRimVertices[b], pRimVertices[b + 1], pRimVertices[b + 2]);

			pNormals[a] = v.normalize()
			if (a == 0)
			{
				pNormals[a].scaleInPlace(0.5);
			}
		}

		var pIndices = new Array(circleVertexCount * 3);
		var c = 0;
		for (var a = 0; a < circleVertexCount; ++a)
		{
			pIndices[c] = 0;
			++c;
			pIndices[c] = 1 + a;
			++c;
			pIndices[c] = 1 + (a + 1) % circleVertexCount;
			++c;
		}

		var pVertexData = new VertexData();
		pVertexData.positions = pRimVertices;
		pVertexData.indices = pIndices;
		var pNormals = [];
		BABYLON.VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
		_25047_JSO_201e6f00bcce7ae9f0.blendNormals(pRimVertices, pNormals, 0.001);
		pVertexData.normals = pNormals;
		pVertexData.applyToMesh(this.pRimMesh);
	}
};

}
