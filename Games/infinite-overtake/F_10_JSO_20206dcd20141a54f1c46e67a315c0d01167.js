with (BABYLON)
{

MeshDesigner = function(_25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b)
{
	this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;
	this.pFunctionNameVsMeshDesign = {};

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.set(0, 0, -5);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_712dc4dc0222013f2fffd;

	var pMaterial1 = new BABYLON.StandardMaterial("", null);
	pMaterial1.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.2);
	pMaterial1.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.4);
	pMaterial1.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.2);
	pMaterial1.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.6);
	this.pMaterial1 = pMaterial1;

	var pMaterial2 = new BABYLON.StandardMaterial("", null);
	pMaterial2.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.1);
	pMaterial2.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.2);
	pMaterial2.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.1);
	pMaterial2.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.1);
	this.pMaterial2 = pMaterial2;

	var pMaterial3 = new BABYLON.StandardMaterial("", null);
	pMaterial3.ambientColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.7);
	pMaterial3.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
	pMaterial3.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5).scale(0.7);
	pMaterial3.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
	this.pMaterial3 = pMaterial3;

	var pMaterial4 = new BABYLON.StandardMaterial("", null);
	pMaterial4.ambientColor = new BABYLON.Color3(0.8, 0.1, 0.1).scale(0.7);
	pMaterial4.diffuseColor = new BABYLON.Color3(0.8, 0.1, 0.1);
	pMaterial4.emissiveColor = new BABYLON.Color3(0.8, 0.1, 0.1).scale(0.7);
	pMaterial4.specularColor = new BABYLON.Color3(0.8, 0.1, 0.1);
	this.pMaterial4 = pMaterial4;

	this.update(true);

	return this;
};

MeshDesigner.prototype = Object.create(Object.prototype);
MeshDesigner.prototype.constructor = MeshDesigner;
pLiveScriptService.addClass(MeshDesigner);

MeshDesigner.prototype.pFunctionNameVsMeshDesign = null;
MeshDesigner.prototype._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = null;
MeshDesigner.prototype._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = null;

MeshDesigner.prototype.pDirtyFunction = null;
MeshDesigner.prototype.pMeshDesign = null;
MeshDesigner.prototype.pMaterial1 = null;
MeshDesigner.prototype.pMaterial2 = null;
MeshDesigner.prototype.pMaterial3 = null;

MeshDesigner.prototype.update = function(dirty)
{
	this.updateMesh("updateDashboardMesh", false || dirty);
	this.updateMesh("updateIndicator1Mesh", false || dirty);
	this.updateMesh("updateRedZoneMesh", false || dirty);
	this.updateMesh("updateNeedle1Mesh", false || dirty);
	this.updateMesh("updateIndicator2Mesh", false || dirty);
	this.updateMesh("updateNeedle2Mesh", false || dirty);
	this.updateMesh("updateDrivingWheelMesh", false || dirty);
};

MeshDesigner.prototype.updateMesh = function(functionName, dirty)
{
	if (dirty)
	{
		var pFunction = MeshDesigner.prototype[functionName];

		var pMeshDesign = this.pFunctionNameVsMeshDesign[functionName];
		if (pMeshDesign != null)
		{
			pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.dispose();
		}

		this.pDirtyFunction = pFunction;

		this.pMeshDesign = {};
		this.pFunctionNameVsMeshDesign[functionName] = this.pMeshDesign;
		this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
		this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
		this.pMeshDesign.pVertices = [];
		this.pMeshDesign.pIndices = [];
		this.pMeshDesign.pMesh = new Mesh("", null);
		this.pMeshDesign.pMesh.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

		pFunction.call(this);

		var pVertexData = new VertexData();
		pVertexData.positions = this.pMeshDesign.pVertices;
		pVertexData.indices = this.pMeshDesign.pIndices;
		var pNormals = [];
		BABYLON.VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
		pVertexData.normals = pNormals;
		pVertexData.applyToMesh(this.pMeshDesign.pMesh);
		
		this.pMeshDesign.pMesh.enableEdgesRendering(2);
		this.pMeshDesign.pMesh.edgesWidth = 0.15*0;
		this.pMeshDesign.pMesh.edgesColor = new BABYLON.Color4(0, 0, 1, 1);
	}

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.y = -1.2;
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.z = -3.0;
};

MeshDesigner.prototype.setMarker = function(vertexIndex)
{
};

MeshDesigner.prototype.addVertex = function(vertex)
{
	var pMeshDesign = this.pMeshDesign;
	var pVertices = pMeshDesign.pVertices;
	var vertexIndex = Math.floor(pVertices.length / 3);
	pVertices.push(vertex.x, vertex.y, vertex.z);
	return vertexIndex;
};

MeshDesigner.prototype.addTriangle = function(vertex1Index, vertex2Index, vertex3Index)
{
	var pMeshDesign = this.pMeshDesign;
	var pIndices = pMeshDesign.pIndices;
	pIndices.push(vertex1Index, vertex2Index, vertex3Index);
	//pIndices.push(vertex2Index, vertex1Index, vertex3Index);
};

MeshDesigner.prototype.updateDashboardMesh = function()
{
	this.pMeshDesign.pMesh.material = this.pMaterial2;

	var pStrip1 = [];
	var pStrip2 = [];
	var pStrip3 = [];

	var y1 = 1.1;
	var y2 = 0.0;
	var y3 = -2.0;
	var z = 3.0;

	pStrip1.push(this.addVertex(new Vector3(-4.5, y1 - 0.5, 1.5)));
	pStrip1.push(this.addVertex(new Vector3(-2.5, y1, -0.5)));
	pStrip1.push(this.addVertex(new Vector3(-1.8, y1, -1.4)));
	pStrip1.push(this.addVertex(new Vector3(1.8, y1, -1.4)));
	pStrip1.push(this.addVertex(new Vector3(2.5, y1, -0.5)));
	pStrip1.push(this.addVertex(new Vector3(7.5, y1, 1.5)));

	pStrip2.push(this.addVertex(new Vector3(-4.5, y2, 1.5)));
	pStrip2.push(this.addVertex(new Vector3(-2.5, y2, 0.4)));
	pStrip2.push(this.addVertex(new Vector3(-1.8, y2, -0.2)));
	pStrip2.push(this.addVertex(new Vector3(1.8, y2, -0.2)));
	pStrip2.push(this.addVertex(new Vector3(2.5, y2, 0.4)));
	pStrip2.push(this.addVertex(new Vector3(7.5, y2, 1.5)));

	pStrip3.push(this.addVertex(new Vector3(-4.5, y3, 1.5)));
	pStrip3.push(this.addVertex(new Vector3(-2.5, y3, 0.1)));
	pStrip3.push(this.addVertex(new Vector3(-1.8, y3, -0.5)));
	pStrip3.push(this.addVertex(new Vector3(1.8, y3, -0.5)));
	pStrip3.push(this.addVertex(new Vector3(2.5, y3, 0.1)));
	pStrip3.push(this.addVertex(new Vector3(7.5, y3, 1.5)));

	this.drawStrip(pStrip1, pStrip2, 0, 5, 0);
	this.drawStrip(pStrip2, pStrip3, 0, 5, 0);

	var pStrip4 = [];
	pStrip4.push(this.addVertex(new Vector3(1.2, 0.0, 0.0)));
	pStrip4.push(this.addVertex(new Vector3(-1.2, 0.0, 0.0)));
	pStrip4.push(this.addVertex(new Vector3(-0.8, 1.0, 0.0)));
	pStrip4.push(this.addVertex(new Vector3(0.8, 1.0, 0.0)));
	this.drawFan(pStrip4[0], pStrip4, 1, 2);

	var pStrip5 = [];
	pStrip5.push(this.addVertex(new Vector3(1.3, 0.0, 0.08)));
	pStrip5.push(this.addVertex(new Vector3(-1.3, 0.0, 0.08)));
	pStrip5.push(this.addVertex(new Vector3(-0.9, 1.1, 0.08)));
	pStrip5.push(this.addVertex(new Vector3(0.9, 1.1, 0.08)));
	this.drawStrip(pStrip5, pStrip4, 0, 4, 0);

	var pStrip6 = [];
	pStrip6.push(this.addVertex(new Vector3(1.8, 0.0, -0.5)));
	pStrip6.push(this.addVertex(new Vector3(-1.8, 0.0, -0.5)));
	pStrip6.push(this.addVertex(new Vector3(-2.2, 0.9, -2.0)));
	pStrip6.push(this.addVertex(new Vector3(2.2, 0.9, -2.0)));
	this.drawStrip(pStrip6, pStrip5, 0, 4, 0);

	var pLabel1 = this.drawText("", new Vector3(0, 0.85, 0.01), 0.14);
	pLabel1.fontColor1 = "rgba(0, 255, 0, 1.0)";
	pLabel1.setText("D1");
	pLabel1.update();
	pLabel1._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMeshDesign.pLabel1 = pLabel1;

	var pLabel2 = this.drawText("", new Vector3(0, 0.85, 0.01), 0.14);
	pLabel2.fontColor1 = "rgba(255, 0, 0, 1.0)";
	pLabel2.setText("M1");
	pLabel2.update();
	pLabel2._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMeshDesign.pLabel2 = pLabel2;

	var pLabel3 = this.drawText("", new Vector3(0, 0.85, 0.01), 0.14);
	pLabel3.fontColor1 = "rgba(255, 128, 0, 1.0)";
	pLabel3.setText("CVT");
	pLabel3.update();
	pLabel3._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMeshDesign.pLabel3 = pLabel3;

	var pLabel4 = this.drawText("", new Vector3(-0.45, 0.28, 0.01), 0.10);
	pLabel4.fontColor1 = "rgba(0, 255, 255, 1.0)";
	pLabel4.setText("5.2");
	pLabel4.update();
	pLabel4._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMeshDesign.pLabel4 = pLabel4;

	var pLabel5 = this.drawText("", new Vector3(0.45, 0.28, 0.01), 0.10);
	pLabel5.fontColor1 = "rgba(0, 255, 255, 1.0)";
	pLabel5.setText("200");
	pLabel5.update();
	pLabel5._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMeshDesign.pLabel5 = pLabel5;
};

MeshDesigner.prototype.updateDrivingWheelMesh = function()
{
	this.pMeshDesign.pMesh.material = this.pMaterial1;

	var r1 = 1.02;
	var r2 = 1.06;
	var r3 = 1.14;
	var r4 = 1.20;
	var h1 = 0.02;
	var h2 = 0.05;

	var n = 19;
	var n2 = 5;

	var pStrip1 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (0.1 + 0.8 * a / (n - 1)) * Math.PI;
		pStrip1.push(this.addVertex(new Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0)));
	}
	for (var a = 0; a < n2; ++a)
	{
		var x = (-1 + a / (n2 - 1) * 2) * 0.5;
		var y = 0.3 - 0.4 * x * x;
		pStrip1.push(this.addVertex(new Vector3(x, y, 0)));
	}

	var pVertex2 = null;
	var pStrip2 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (0.05 + 0.9 * a / (n - 1)) * Math.PI;
		pStrip2.push(this.addVertex(new Vector3(Math.cos(angle) * r2, Math.sin(angle) * r2, h1)));
	}
	for (var a = 0; a < n2; ++a)
	{
		var x = (-1 + a / (n2 - 1) * 2) * 0.8;
		var y = 0.3 - 0.2 * x * x;
		var vertex = new Vector3(x, y - 0.2, h2);
		pStrip2.push(this.addVertex(vertex));
		if (a == 0)
		{
			pVertex2 = vertex;
		}
	}

	n = pStrip1.length;
	for (var a = 0; a <= n; ++a)
	{
		this.addTriangle(pStrip1[a % n], pStrip1[(a + 1) % n], pStrip2[a % n]);
		this.addTriangle(pStrip2[a % n], pStrip1[(a + 1) % n], pStrip2[(a + 1) % n]);
	}

	n = 6;
	n2 = 4;
	var pStrip3 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = Math.PI + 0.4 + a / (n - 1) * 0.7;
		pStrip3.push(this.addVertex(new Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0)));
	}
	for (var a = 0; a < n2; ++a)
	{
		var angle = Math.PI * 1.5 + 0.8 + a / (n2 - 1) * 3.0;
		pStrip3.push(this.addVertex(new Vector3(-0.5 + Math.cos(angle) * 0.3, -0.5 + Math.sin(angle) * 0.3, 0)));
	}

	var pStrip4 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = Math.PI + 0.3 + a / (n - 1) * 0.9;
		pStrip4.push(this.addVertex(new Vector3(Math.cos(angle) * r2, Math.sin(angle) * r2, h1)));
	}
	for (var a = 0; a < n2; ++a)
	{
		var angle = Math.PI * 1.5 + 0.8 + a / (n2 - 1) * 3.0;
		var vertex = new Vector3(-0.5 + Math.cos(angle) * 0.4, -0.5 + Math.sin(angle) * 0.4, h1);
		if (a == 1)
		{
			vertex.x = 0.0;
		}
		else if (a == 3)
		{
			vertex.copyFrom(pVertex2);
		}
		pStrip4.push(this.addVertex(vertex));
	}

	n = pStrip3.length;
	for (var a = 0; a < n; ++a)
	{
		this.addTriangle(pStrip3[a % n], pStrip3[(a + 1) % n], pStrip4[a % n]);
		this.addTriangle(pStrip4[a % n], pStrip3[(a + 1) % n], pStrip4[(a + 1) % n]);
	}

	var pStrip5 = [];
	var pStrip6 = [];
	var pVertices = this.pMeshDesign.pVertices;
	for (var a = 0; a < n; ++a)
	{
		var b = pStrip3[a] * 3;
		var vertex = new Vector3(-pVertices[b], pVertices[b + 1], pVertices[b + 2]);
		pStrip5.push(this.addVertex(vertex));
	}
	for (var a = 0; a < n; ++a)
	{
		var b = pStrip4[a] * 3;
		var vertex = new Vector3(-pVertices[b], pVertices[b + 1], pVertices[b + 2]);
		pStrip6.push(this.addVertex(vertex));
	}

	for (var a = 0; a < n; ++a)
	{
		this.addTriangle(pStrip5[(a + 1) % n], pStrip5[a % n], pStrip6[a % n]);
		this.addTriangle(pStrip5[(a + 1) % n], pStrip6[a % n], pStrip6[(a + 1) % n]);
	}

	n = 36;
	var pStrip7 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (a / n) * Math.PI * 2;
		pStrip7.push(this.addVertex(new Vector3(Math.cos(angle) * r3, Math.sin(angle) * r3, h1)));
	}

	this.drawStrip(pStrip2, pStrip7, -1, 20, -1);
	this.drawStrip(pStrip4, pStrip7, -1, 8, 19);
	this.drawStrip(pStrip6, pStrip7, -1, -8, 34);

	var centerVertexIndex = this.addVertex(new Vector3(0, 0, h2));
	this.drawFan(centerVertexIndex, pStrip2, 19, 4);
	this.drawFan(centerVertexIndex, pStrip4, 7, 2);
	this.drawFan(centerVertexIndex, pStrip6, 7, -2);

	n = 36;
	var pStrip8 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (a / n) * Math.PI * 2;
		pStrip8.push(this.addVertex(new Vector3(Math.cos(angle) * r4, Math.sin(angle) * r4, 0.0)));
	}
	this.drawStrip(pStrip7, pStrip8, 0, 36, 0);

	this.pMeshDesign.pMesh.position.z = 0.1;
};

MeshDesigner.prototype.updateIndicator1Mesh = function(isSpeedIndicator)
{
	this.pMeshDesign.pMesh.material = this.pMaterial3;

	var r1 = 0.40;
	var r2 = 0.45;
	var r3 = 0.22;
	var r4 = 0.27;
	var r5 = 0.33;
	var h1 = 0.05;

	var n = 16;

	var pStrip1 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (0.1 + 0.8 * a / (n - 1) - 0.25) * 2.0 * Math.PI;
		pStrip1.push(this.addVertex(new Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0)));
	}
	var pStrip2 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = (0.1 + 0.8 * a / (n - 1) - 0.25) * 2.0 * Math.PI;
		pStrip2.push(this.addVertex(new Vector3(Math.cos(angle) * r2, Math.sin(angle) * r2, h1)));
	}
	this.drawStrip(pStrip1, pStrip2, 0, n, 0);

	n = 9;
	if (isSpeedIndicator)
	{
		n = 14;
	}

	if (isSpeedIndicator)
	{
		for (var a = 0; a < n; ++a)
		{
			var angle = (0.12 + 0.76 * a / (n - 1) - 0.25) * 2.0 * Math.PI;
			var angle1 = angle + 0.04;
			var angle2 = angle - 0.04;

			var v1 = this.addVertex(new Vector3(Math.cos(angle1) * r3, Math.sin(angle1) * r3, 0.01));
			var v2 = this.addVertex(new Vector3(Math.cos(angle2) * r3, Math.sin(angle2) * r3, 0.01));
			var v3 = this.addVertex(new Vector3(Math.cos(angle1) * r4, Math.sin(angle1) * r4, 0.01));
			var v4 = this.addVertex(new Vector3(Math.cos(angle2) * r4, Math.sin(angle2) * r4, 0.01));

			this.addTriangle(v2, v1, v3);
			this.addTriangle(v2, v3, v4);

			this.drawText("" + (13 - a) * 20, new Vector3(Math.cos(angle1) * r5, Math.sin(angle1) * r5 + 0.01, 0.01), 0.06);
		}
	}
	else
	{
		for (var a = 0; a < n; ++a)
		{
			var angle = (0.2 + 0.6 * a / (n - 1) - 0.25) * 2.0 * Math.PI;
			var angle1 = angle + 0.04;
			var angle2 = angle - 0.04;

			var v1 = this.addVertex(new Vector3(Math.cos(angle1) * r3, Math.sin(angle1) * r3, 0.01));
			var v2 = this.addVertex(new Vector3(Math.cos(angle2) * r3, Math.sin(angle2) * r3, 0.01));
			var v3 = this.addVertex(new Vector3(Math.cos(angle1) * r4, Math.sin(angle1) * r4, 0.01));
			var v4 = this.addVertex(new Vector3(Math.cos(angle2) * r4, Math.sin(angle2) * r4, 0.01));

			this.addTriangle(v2, v1, v3);
			this.addTriangle(v2, v3, v4);

			this.drawText("" + (8 - a), new Vector3(Math.cos(angle1) * r5, Math.sin(angle1) * r5 + 0.01, 0.01), 0.1);
		}
	}

	this.pMeshDesign.pMesh.position.x = -0.44;
	this.pMeshDesign.pMesh.position.y = 0.46;
	this.pMeshDesign.pMesh.position.z = 0.0;
};

MeshDesigner.prototype.updateRedZoneMesh = function()
{
	this.pMeshDesign.pMesh.material = this.pMaterial4;

	var r1 = 0.28;
	var r2 = 0.38;

	var pStrip1 = [];
	var pStrip2 = [];
	var n = 6;
	for (var a = 0; a < n; ++a)
	{
		var angle = -0.5 + a / (n - 1);

		pStrip1.push(this.addVertex(new Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0.005)));
		pStrip2.push(this.addVertex(new Vector3(Math.cos(angle) * r2, Math.sin(angle) * r2, 0.005)));
	}

	this.drawStrip(pStrip1, pStrip2, 0, n - 1, 0);

	this.pMeshDesign.pMesh.position.x = -0.44;
	this.pMeshDesign.pMesh.position.y = 0.46;
	this.pMeshDesign.pMesh.position.z = 0.0;
};

MeshDesigner.prototype.updateNeedle1Mesh = function()
{
	this.pMeshDesign.pMesh.material = this.pMaterial4;

	var r1 = 0.05;
	var r2 = 0.32;
	var h1 = 0.06;

	var n = 6;
	var pStrip1 = [];
	for (var a = 0; a < n; ++a)
	{
		var angle = -a / n * 2.0 * Math.PI;
		pStrip1.push(this.addVertex(new Vector3(Math.cos(angle) * r1, Math.sin(angle) * r1, 0.03)));
	}
	var v1 = this.addVertex(new Vector3(0, 0, h1));
	this.drawFan(v1, pStrip1, 0, n);

	var pStrip2 = [];
	pStrip2.push(this.addVertex(new Vector3(0.01, r2, 0.02)));
	pStrip2.push(this.addVertex(new Vector3(-0.01, r2, 0.02)));
	this.drawStrip(pStrip1, pStrip2, 1, 1, 0);

	this.pMeshDesign.pMesh.position.x = -0.44;
	this.pMeshDesign.pMesh.position.y = 0.46;
	this.pMeshDesign.pMesh.position.z = 0.0;
};

MeshDesigner.prototype.updateIndicator2Mesh = function()
{
	this.updateIndicator1Mesh(true);
	this.pMeshDesign.pMesh.position.x = -this.pMeshDesign.pMesh.position.x;
};

MeshDesigner.prototype.updateNeedle2Mesh = function()
{
	this.updateNeedle1Mesh();
	this.pMeshDesign.pMesh.position.x = -this.pMeshDesign.pMesh.position.x;
};

MeshDesigner.prototype.drawStrip = function(pStrip1, pStrip2, strip1Begin, strip1Count, strip2Begin)
{
	var dir = 1;
	if (strip1Count < 0)
	{
		dir = -1;
		strip1Count = -strip1Count;
	}

	var n1 = pStrip1.length;
	var n2 = pStrip2.length;
	for (var a = 0; a < strip1Count; ++a)
	{
		var b1 = (strip1Begin + a + n1) % n1;
		var b2 = (strip2Begin + a * dir + n2) % n2;
		if (dir == 1)
		{
			this.addTriangle(pStrip1[b1], pStrip1[(b1 + 1) % n1], pStrip2[b2]);
			this.addTriangle(pStrip2[b2], pStrip1[(b1 + 1) % n1], pStrip2[(b2 + 1) % n2]);
		}
		else
		{
			this.addTriangle(pStrip1[(b1 + 1) % n1], pStrip1[b1], pStrip2[(b2 + 1) % n2]);
			this.addTriangle(pStrip2[(b2 + 1) % n2], pStrip2[b2], pStrip1[(b1 + 1) % n1]);
		}
	}
};

MeshDesigner.prototype.drawFan = function(centerVertexIndex, pStrip, stripBegin, stripCount)
{
	var dir = 1;
	if (stripCount < 0)
	{
		dir = -1;
		stripCount = -stripCount;
	}

	var n = pStrip.length;
	for (var a = 0; a < stripCount; ++a)
	{
		var b = (stripBegin + a + n) % n;
		if (dir == 1)
		{
			this.addTriangle(centerVertexIndex, pStrip[b % n], pStrip[(b + 1) % n]);
		}
		else
		{
			this.addTriangle(centerVertexIndex, pStrip[(b + 1) % n], pStrip[b % n]);
		}
	}
};

MeshDesigner.prototype.drawText = function(text, _25047_JSO_3a02fb201464a2244d, size)
{
	var pLabel = this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.addUIComponent(0, 0, 22, 8);
	this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b._25047_JSO_3e661332c02fe5cd201c0463adb46320182018.pCenterUIPanel.removeUIComponent(pLabel);

	pLabel.color1 = "transparent";
	pLabel.color2 = "transparent";
	pLabel.strokeStyle = "transparent";
	pLabel.fontColor1 = "rgba(255, 255, 255, 1)";
	pLabel.fontColor2 = "rgba(0, 0, 0, 1)";
	pLabel.text = text;
	pLabel.pressEnabled = false;
	pLabel._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.scaleInPlace(size * 0.12);
	pLabel.fontScale = 0.2;
	pLabel._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.setEnabled(true);
	pLabel._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this.pMeshDesign.pMesh;
	pLabel._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.copyFrom(_25047_JSO_3a02fb201464a2244d);
	pLabel.update();

	return pLabel;
};

}