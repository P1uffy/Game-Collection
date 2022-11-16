with (BABYLON)
{

VehicleMesh = function()
{
	if (VehicleMesh.pTorsoMaterial == null)
	{
		var pTorsoMaterial = new StandardMaterial("", null);
		pTorsoMaterial.ambientColor = new Color3(1.0, 0.2, 0.1).scale(0.5);
		pTorsoMaterial.diffuseColor = new Color3(1.0, 0.2, 0.1).scale(0.3);
		pTorsoMaterial.emissiveColor = new Color3(1.0, 0.2, 0.1).scale(0.5);
		pTorsoMaterial.specularColor = new Color3(1.0, 0.2, 0.1).scale(0.5);
		VehicleMesh.pTorsoMaterial = pTorsoMaterial;

		var pGlassMaterial = new StandardMaterial("", null);
		pGlassMaterial.ambientColor = new Color3(0.7, 0.95, 1.0).scale(0.1);
		pGlassMaterial.diffuseColor = new Color3(0.7, 0.95, 1.0).scale(0.5);
		pGlassMaterial.emissiveColor = new Color3(0.7, 0.95, 1.0).scale(0.8);
		pGlassMaterial.specularColor = new Color3(0.7, 0.95, 1.0).scale(0.2);
		VehicleMesh.pGlassMaterial = pGlassMaterial;

		var pLightsMaterial = new StandardMaterial("", null);
		pLightsMaterial.ambientColor = new Color3(1.0, 1.0, 0.8).scale(1.0);
		pLightsMaterial.diffuseColor = new Color3(1.0, 1.0, 0.8).scale(1.0);
		pLightsMaterial.emissiveColor = new Color3(1.0, 1.0, 0.8).scale(1.0);
		pLightsMaterial.specularColor = new Color3(1.0, 1.0, 0.8).scale(1.0);
		VehicleMesh.pLightsMaterial = pLightsMaterial;

		VehicleMesh.pTorsoMaterials = [];
		for (var a = 0; a < 300; ++a)
		{
			var color = new Color3(
				Math.pow(Math.random(), 1.5),
				Math.pow(Math.random(), 1.5),
				Math.pow(Math.random(), 1.5));
			if (color.r > 0.4 && color.b > 0.4)
			{
				if (Math.random() < 0.5)
				{
					color.r *= 0.25;
				}
				else
				{
					color.b *= 0.25;
				}
			}

			if (Math.random() < 0.3)
			{
				color.r = Math.pow(color.r, 0.2);
				color.g = Math.pow(color.g, 0.2);
				color.b = Math.pow(color.b, 0.2);
			}

			var baseColor = new Color3(0.05, 0.05, 0.05);
			pTorsoMaterial = new StandardMaterial("", null);
			pTorsoMaterial.ambientColor = color.scale(0.4).add(baseColor);
			pTorsoMaterial.diffuseColor = color.scale(0.4).add(baseColor);
			pTorsoMaterial.emissiveColor = color.scale(0.4).add(baseColor);
			pTorsoMaterial.specularColor = color.scale(0.4).add(baseColor);
			VehicleMesh.pTorsoMaterials.push(pTorsoMaterial);
		}
	}

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.scaleInPlace(0.6);
	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.scaling.y *= 1.05;

	var x = 0.2;
	var z = 0.1;
	this.pTorsoMesh = new Mesh("", null);
	this.pTorsoMesh.material = VehicleMesh.pTorsoMaterial;
	this.pTorsoMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pTorsoMesh.position.x = x;
	this.pTorsoMesh.position.z = z;

	this.pTorsoMesh2 = new Mesh("", null);
	this.pTorsoMesh2.material = VehicleMesh.pTorsoMaterial;
	this.pTorsoMesh2.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pTorsoMesh2.position.x = x;
	this.pTorsoMesh2.position.z = z;

	this.pGlassMesh = new Mesh("", null);
	this.pGlassMesh.material = VehicleMesh.pGlassMaterial;
	this.pGlassMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pGlassMesh.position.x = x;
	this.pGlassMesh.position.z = z;

	this.pGlassMesh2 = new Mesh("", null);
	this.pGlassMesh2.material = VehicleMesh.pGlassMaterial;
	this.pGlassMesh2.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pGlassMesh2.position.x = x;
	this.pGlassMesh2.position.z = z;

	this.pLightsMesh = new Mesh("", null);
	this.pLightsMesh.material = VehicleMesh.pLightsMaterial;
	this.pLightsMesh.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pLightsMesh.position.set(2.6, 0.0, 0.2 + z);

	this.createCrossSectionVertices();
	this.createTorsoTriangles();
	this.createGlassTriangles();
	this.updateMesh();
	this.updateLightsMesh();

	return this;
};

VehicleMesh.prototype = Object.create(Object.prototype);
VehicleMesh.prototype.constructor = VehicleMesh;
pLiveScriptService.addClass(VehicleMesh);

VehicleMesh.pTorsoMaterial = null;
VehicleMesh.pGlassMaterial = null;
VehicleMesh.pLightsMaterial = null;
VehicleMesh.pTorsoMaterials = null;

VehicleMesh.prototype._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = null;
VehicleMesh.prototype.pTorsoMesh = null;
VehicleMesh.prototype.pTorsoMesh2 = null;
VehicleMesh.prototype.pGlassMesh = null;
VehicleMesh.prototype.pGlassMesh2 = null;
VehicleMesh.prototype.pLightsMesh = null;
VehicleMesh.prototype.pTorsoTriangles = null;
VehicleMesh.prototype.pGlassTriangles = null;
VehicleMesh.prototype.pCrossSectionVertices = null;

VehicleMesh.prototype.createCrossSectionVertices = function()
{
	this.pCrossSectionVertices = new Array(5);

	var pCS0Vertices = new Array(10);
	pCS0Vertices[0] = new TorsoVertex(2.0, 0.0, 0.00);
	pCS0Vertices[1] = new TorsoVertex(2.5, 0.0, 0.00);
	pCS0Vertices[2] = new TorsoVertex(2.7, 0.0, 0.25);
	pCS0Vertices[3] = new TorsoVertex(2.5, 0.0, 0.55);
	pCS0Vertices[4] = new TorsoVertex(1.2, 0.0, 0.80);
	pCS0Vertices[5] = new TorsoVertex(-1.7, 0.0, 0.90);
	pCS0Vertices[6] = new TorsoVertex(-2.3, 0.0, 0.80);
	pCS0Vertices[7] = new TorsoVertex(-2.7, 0.0, 0.30);
	pCS0Vertices[8] = new TorsoVertex(-2.5, 0.0, 0.00);
	pCS0Vertices[9] = new TorsoVertex(-2.0, 0.0, 0.00);

	var pCS1Vertices = new Array(10);
	for (var a = 0; a < pCS1Vertices.length; ++a)
	{
		pCS1Vertices[a] = new TorsoVertex(0, 0, 0);

		pCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.copyFrom(pCS0Vertices[a]._25047_JSO_3a02fb201464a2244d.scale(0.9));
		if (a == 4)
		{
			pCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.x = 0.9;
		}
		if (a == 5)
		{
			pCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.x = -1.4;
		}

		pCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.y = 1.0;

		if (a == 2 || a == 7)
		{
			pCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.y *= 0.8;
		}
	}

	var pCS2Vertices = new Array(8);
	pCS2Vertices[0] = new TorsoVertex(2.0, 0.0, 0.00);
	pCS2Vertices[1] = new TorsoVertex(2.0, 0.0, 0.50);
	pCS2Vertices[2] = new TorsoVertex(1.0, 0.0, 0.50);
	pCS2Vertices[3] = new TorsoVertex(-1.0, 0.0, 0.50);
	pCS2Vertices[4] = new TorsoVertex(-2.0, 0.0, 0.50);
	pCS2Vertices[5] = new TorsoVertex(-2.0, 0.0, 0.0);
	pCS2Vertices[6] = new TorsoVertex(-1.0, 0.0, 0.0);
	pCS2Vertices[7] = new TorsoVertex(1.0, 0.0, 0.0);
	for (var a = 0; a < pCS2Vertices.length; ++a)
	{
		pCS2Vertices[a]._25047_JSO_3a02fb201464a2244d.y = 1.2;
	}

	var pTopCS0Vertices = new Array(3);
	pTopCS0Vertices[0] = new TorsoVertex(0.4, 0.0, 1.3);
	pTopCS0Vertices[1] = new TorsoVertex(-0.2, 0.0, 1.35);
	pTopCS0Vertices[2] = new TorsoVertex(-1.1, 0.0, 1.28);

	var pTopCS1Vertices = new Array(3);
	for (var a = 0; a < pTopCS1Vertices.length; ++a)
	{
		pTopCS1Vertices[a] = new TorsoVertex(0, 0, 0);

		pTopCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.copyFrom(pTopCS0Vertices[a]._25047_JSO_3a02fb201464a2244d.scale(0.9));
		if (a == 0)
		{
			pTopCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.x = 0.2;
		}
		pTopCS1Vertices[a]._25047_JSO_3a02fb201464a2244d.y = 0.7;
	}

	this.pCrossSectionVertices[0] = pCS0Vertices;
	this.pCrossSectionVertices[1] = pCS1Vertices;
	this.pCrossSectionVertices[2] = pCS2Vertices;
	this.pCrossSectionVertices[3] = pTopCS0Vertices;
	this.pCrossSectionVertices[4] = pTopCS1Vertices;
};

VehicleMesh.prototype.createTorsoTriangles = function()
{
	this.pTorsoTriangles = [];

	var pTriangles = this.pTorsoTriangles;

	//
	{
		this.addTriangle(pTriangles,
            1, 1,
            1, 2,
            1, 3);

		this.addTwoTriangles(pTriangles,
            2, 0,
            1, 1,
            2, 1,
            1, 3);

		for (var a = 0; a < 3; ++a)
		{
			this.continueWithTwoTriangles(pTriangles,
                2, 2 + a,
                1, 4 + a);
		}

		this.continueWithTwoTriangles(pTriangles,
            2, 5,
            1, 8);

		this.addTriangle(pTriangles,
            1, 6,
            1, 7,
            1, 8);
	}

	//
	{
		this.addTwoTriangles(pTriangles,
            1, 1,
            0, 1,
            1, 2,
            0, 2);

		for (var a = 1; a < 3; ++a)
		{
			this.continueWithTwoTriangles(pTriangles,
                1, 2 + a,
                0, 2 + a);
		}

		this.addTwoTriangles(pTriangles,
            1, 5,
            0, 5,
            1, 6,
            0, 6);

		for (var a = 0; a < 2; ++a)
		{
			this.continueWithTwoTriangles(pTriangles,
                1, 7 + a,
                0, 7 + a);
		}
	}

	//
	{
		this.addTwoTriangles(pTriangles,
            2, 2,
            2, 3,
            2, 7,
            2, 6);
	}

	//
	{
		this.addTwoTriangles(pTriangles,
            4, 0,
            3, 0,
            4, 1,
            3, 1);
		this.continueWithTwoTriangles(pTriangles,
            4, 2,
            3, 2);
	}
};

VehicleMesh.prototype.createGlassTriangles = function()
{
	this.pGlassTriangles = [];

	var pTriangles = this.pGlassTriangles;

	//
	{
		this.addTwoTriangles(pTriangles,
            0, 4,
            3, 0,
            1, 4,
            4, 0);
		this.continueWithTriangle(pTriangles,
            4, 1, 0, true);
		this.continueWithTriangle(pTriangles,
            1, 5, 1, true);
		this.continueWithTriangle(pTriangles,
            4, 2, 0, true);
		this.continueWithTriangle(pTriangles,
            3, 2, 1, true);
		this.continueWithTriangle(pTriangles,
            0, 5, 1, true);
	}
};

VehicleMesh.prototype.checkMesh2 = function(_25047_JSO_a6091513150509033f0ccea65fe3fffdca)
{
	if ((_25047_JSO_a6091513150509033f0ccea65fe3fffdca[0] == 0 && _25047_JSO_a6091513150509033f0ccea65fe3fffdca[1] > 4) ||
        (_25047_JSO_a6091513150509033f0ccea65fe3fffdca[2] == 0 && _25047_JSO_a6091513150509033f0ccea65fe3fffdca[3] > 4) ||
        (_25047_JSO_a6091513150509033f0ccea65fe3fffdca[4] == 0 && _25047_JSO_a6091513150509033f0ccea65fe3fffdca[5] > 4) ||
        (_25047_JSO_a6091513150509033f0ccea65fe3fffdca[4] == 3 && _25047_JSO_a6091513150509033f0ccea65fe3fffdca[5] == 2))
	{
		return true;
	}

	return false;
};

VehicleMesh.prototype.updateMesh = function()
{
	{
		var pTriangles = this.pTorsoTriangles;

		var pTriangleVertices = [];
		var pTriangleUvs = [];

		var pTriangleVertices2 = [];
		var pTriangleUvs2 = [];

		for (var a = 0; a < pTriangles.length; ++a)
		{
			var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTriangles[a];
			var vertex1 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[0]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[1]];
			var vertex2 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[2]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[3]];
			var vertex3 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[4]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[5]];

			if (!this.checkMesh2(_25047_JSO_a6091513150509033f0ccea65fe3fffdca))
			{
				pTriangleVertices.push(vertex1._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices.push(vertex2._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices.push(vertex3._25047_JSO_3a02fb201464a2244d);

				pTriangleUvs.push(vertex1.uv);
				pTriangleUvs.push(vertex2.uv);
				pTriangleUvs.push(vertex3.uv);
			}
			else
			{
				pTriangleVertices2.push(vertex1._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices2.push(vertex2._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices2.push(vertex3._25047_JSO_3a02fb201464a2244d);

				pTriangleUvs2.push(vertex1.uv2);
				pTriangleUvs2.push(vertex2.uv2);
				pTriangleUvs2.push(vertex3.uv2);
			}
		}

		var pCS2Vertices = this.pCrossSectionVertices[2];

		//
		{
			var width = 0.1;
			var margin = 0.05;
			this.addMudguardTriangles(
                pTriangleVertices, pTriangleUvs,
                pCS2Vertices[0]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[1]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[1]._25047_JSO_3a02fb201464a2244d.add(pCS2Vertices[2]._25047_JSO_3a02fb201464a2244d).scale(0.5),
                pCS2Vertices[0].uv, pCS2Vertices[1].uv, pCS2Vertices[1].uv.add(pCS2Vertices[2].uv).scale(0.5),
                margin, margin, width, 3);

			this.addMudguardTriangles(
                pTriangleVertices, pTriangleUvs,
                pCS2Vertices[1]._25047_JSO_3a02fb201464a2244d.add(pCS2Vertices[2]._25047_JSO_3a02fb201464a2244d).scale(0.5), pCS2Vertices[2]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[7]._25047_JSO_3a02fb201464a2244d,
                pCS2Vertices[1].uv.add(pCS2Vertices[2].uv).scale(0.5), pCS2Vertices[2].uv, pCS2Vertices[7].uv,
                margin, margin, width, 3);

			this.addMudguardTriangles(
                pTriangleVertices, pTriangleUvs,
                pCS2Vertices[6]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[3]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[3]._25047_JSO_3a02fb201464a2244d.add(pCS2Vertices[4]._25047_JSO_3a02fb201464a2244d).scale(0.5),
                pCS2Vertices[6].uv, pCS2Vertices[3].uv, pCS2Vertices[3].uv.add(pCS2Vertices[4].uv).scale(0.5),
                margin, margin, width, 3);

			this.addMudguardTriangles(
                pTriangleVertices, pTriangleUvs,
                pCS2Vertices[3]._25047_JSO_3a02fb201464a2244d.add(pCS2Vertices[4]._25047_JSO_3a02fb201464a2244d).scale(0.5), pCS2Vertices[4]._25047_JSO_3a02fb201464a2244d, pCS2Vertices[5]._25047_JSO_3a02fb201464a2244d,
                pCS2Vertices[3].uv.add(pCS2Vertices[4].uv).scale(0.5), pCS2Vertices[4].uv, pCS2Vertices[5].uv,
                margin, margin, width, 3);
		}

		for (var b = 0; b < 2; ++b)
		{
			var pTriangleVertices3 = pTriangleVertices;
			var pTriangleUvs3 = pTriangleUvs;
			if (b == 1)
			{
				pTriangleVertices3 = pTriangleVertices2;
				pTriangleUvs3 = pTriangleUvs2;
			}

			var n = pTriangleVertices3.length;
			for (var a = 0; a < n; a += 3)
			{
				var vertex1 = pTriangleVertices3[a].clone();
				var vertex2 = pTriangleVertices3[a + 1].clone();
				var vertex3 = pTriangleVertices3[a + 2].clone();

				var uv1 = pTriangleUvs3[a].clone();
				var uv2 = pTriangleUvs3[a + 1].clone();
				var uv3 = pTriangleUvs3[a + 2].clone();

				vertex1.y = -vertex1.y;
				vertex2.y = -vertex2.y;
				vertex3.y = -vertex3.y;

				var tempVertex = vertex1;
				vertex1 = vertex2;
				vertex2 = tempVertex;

				var tempUv = uv1;
				uv1 = uv2;
				uv2 = tempUv;

				pTriangleVertices3.push(vertex1);
				pTriangleVertices3.push(vertex2);
				pTriangleVertices3.push(vertex3);

				pTriangleUvs3.push(uv1);
				pTriangleUvs3.push(uv2);
				pTriangleUvs3.push(uv3);
			}
		}

		//
		{
			this.addBottomTriangles(pTriangleVertices, pTriangleUvs,
                0, 1,
                1, 1);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 0);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 1);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 2);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 7);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 6);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 3);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 4);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                2, 5);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                1, 8);
			this.continueBottomTriangles(pTriangleVertices, pTriangleUvs,
                0, 8);
		}

		for (var b = 0; b < 2; ++b)
		{
			var pTriangleVertices3 = pTriangleVertices;
			var pTriangleUvs3 = pTriangleUvs;
			var pMesh3 = this.pTorsoMesh;
                    
			if (b == 1)
			{
				pTriangleVertices3 = pTriangleVertices2;
				pTriangleUvs3 = pTriangleUvs2;
				pMesh3 = this.pTorsoMesh2;
			}

			var n = pTriangleVertices3.length;
			var pVertices = new Array(n * 3);
			var pUvs = new Array(n * 2);
			var pIndices = new Array(n);
			var c = 0;
			var d = 0;
			for (var a = 0; a < n; a += 3)
			{
				var vertex1 = pTriangleVertices3[a];
				var vertex2 = pTriangleVertices3[a + 1];
				var vertex3 = pTriangleVertices3[a + 2];

				var uv1 = pTriangleUvs3[a];
				var uv2 = pTriangleUvs3[a + 1];
				var uv3 = pTriangleUvs3[a + 2];

				d = c * 3;
				pVertices[d] = vertex1.x;
				pVertices[d + 1] = vertex1.y;
				pVertices[d + 2] = vertex1.z;

				d = c * 2;
				pUvs[d] = uv1.x;
				pUvs[d + 1] = uv1.y;

				pIndices[c] = c;
				++c;

				d = c * 3;
				pVertices[d] = vertex2.x;
				pVertices[d + 1] = vertex2.y;
				pVertices[d + 2] = vertex2.z;

				d = c * 2;
				pUvs[d] = uv2.x;
				pUvs[d + 1] = uv2.y;

				pIndices[c] = c;
				++c;

				d = c * 3;
				pVertices[d] = vertex3.x;
				pVertices[d + 1] = vertex3.y;
				pVertices[d + 2] = vertex3.z;

				d = c * 2;
				pUvs[d] = uv3.x;
				pUvs[d + 1] = uv3.y;

				pIndices[c] = c;
				++c;
			}

			for (var a = 0; a < pVertices.length; a += 3)
			{
				var z = pVertices[a + 2];
				if (z < 0.01)
				{
					pVertices[a + 2] -= 0.15;
				}
			}

			var pVertexData = new VertexData();
			pVertexData.positions = pVertices;
			pVertexData.uvs = pUvs;
			pVertexData.indices = pIndices;
			var pNormals = [];
			VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
			_25047_JSO_201e6f00bcce7ae9f0.blendNormals(pVertices, pNormals, 0.001);
			pVertexData.normals = pNormals;
			pVertexData.applyToMesh(pMesh3);
		}
	}

	{
		var pMesh = this.pGlassMesh;

		var pTriangles = this.pGlassTriangles;

		var pTriangleVertices = [];
		var pTriangleUvs = [];

		var pTriangleVertices2 = [];
		var pTriangleUvs2 = [];

		for (var a = 0; a < pTriangles.length; ++a)
		{
			var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTriangles[a];
			var vertex1 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[0]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[1]];
			var vertex2 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[2]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[3]];
			var vertex3 = this.pCrossSectionVertices[_25047_JSO_a6091513150509033f0ccea65fe3fffdca[4]][_25047_JSO_a6091513150509033f0ccea65fe3fffdca[5]];

			if (!this.checkMesh2(_25047_JSO_a6091513150509033f0ccea65fe3fffdca))
			{
				pTriangleVertices.push(vertex1._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices.push(vertex2._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices.push(vertex3._25047_JSO_3a02fb201464a2244d);

				pTriangleUvs.push(vertex1.uv);
				pTriangleUvs.push(vertex2.uv);
				pTriangleUvs.push(vertex3.uv);
			}
			else
			{
				pTriangleVertices2.push(vertex1._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices2.push(vertex2._25047_JSO_3a02fb201464a2244d);
				pTriangleVertices2.push(vertex3._25047_JSO_3a02fb201464a2244d);

				pTriangleUvs2.push(vertex1.uv2);
				pTriangleUvs2.push(vertex2.uv2);
				pTriangleUvs2.push(vertex3.uv2);
			}
		}

		for (var b = 0; b < 2; ++b)
		{
			var pTriangleVertices3 = pTriangleVertices;
			var pTriangleUvs3 = pTriangleUvs;
			if (b == 1)
			{
				pTriangleVertices3 = pTriangleVertices2;
				pTriangleUvs3 = pTriangleUvs2;
			}

			var n = pTriangleVertices3.length;
			for (var a = 0; a < n; a += 3)
			{
				var vertex1 = pTriangleVertices3[a].clone();
				var vertex2 = pTriangleVertices3[a + 1].clone();
				var vertex3 = pTriangleVertices3[a + 2].clone();

				var uv1 = pTriangleUvs3[a].clone();
				var uv2 = pTriangleUvs3[a + 1].clone();
				var uv3 = pTriangleUvs3[a + 2].clone();

				vertex1.y = -vertex1.y;
				vertex2.y = -vertex2.y;
				vertex3.y = -vertex3.y;

				var tempVertex = vertex1;
				vertex1 = vertex2;
				vertex2 = tempVertex;

				var tempUv = uv1;
				uv1 = uv2;
				uv2 = tempUv;

				pTriangleVertices3.push(vertex1);
				pTriangleVertices3.push(vertex2);
				pTriangleVertices3.push(vertex3);

				pTriangleUvs3.push(uv1);
				pTriangleUvs3.push(uv2);
				pTriangleUvs3.push(uv3);
			}
		}

		for (var b = 0; b < 2; ++b)
		{
			var pTriangleVertices3 = pTriangleVertices;
			var pTriangleUvs3 = pTriangleUvs;
			var pMesh3 = this.pGlassMesh;

			if (b == 1)
			{
				pTriangleVertices3 = pTriangleVertices2;
				pTriangleUvs3 = pTriangleUvs2;
				pMesh3 = this.pGlassMesh2;
			}

			var n = pTriangleVertices3.length;
			var pVertices = new Array(n * 3);
			var pUvs = new Array(n * 2);
			var pIndices = new Array(n);
			var c = 0;
			var d = 0;
			for (var a = 0; a < n; a += 3)
			{
				var vertex1 = pTriangleVertices3[a];
				var vertex2 = pTriangleVertices3[a + 1];
				var vertex3 = pTriangleVertices3[a + 2];

				var uv1 = pTriangleUvs3[a];
				var uv2 = pTriangleUvs3[a + 1];
				var uv3 = pTriangleUvs3[a + 2];

				d = c * 3;
				pVertices[d] = vertex1.x;
				pVertices[d + 1] = vertex1.y;
				pVertices[d + 2] = vertex1.z;

				d = c * 2;
				pUvs[d] = uv1.x;
				pUvs[d + 1] = uv1.y;

				pIndices[c] = c;
				++c;

				d = c * 3;
				pVertices[d] = vertex2.x;
				pVertices[d + 1] = vertex2.y;
				pVertices[d + 2] = vertex2.z;

				d = c * 2;
				pUvs[d] = uv2.x;
				pUvs[d + 1] = uv2.y;

				pIndices[c] = c;
				++c;

				d = c * 3;
				pVertices[d] = vertex3.x;
				pVertices[d + 1] = vertex3.y;
				pVertices[d + 2] = vertex3.z;

				d = c * 2;
				pUvs[d] = uv3.x;
				pUvs[d + 1] = uv3.y;

				pIndices[c] = c;
				++c;
			}

			var pVertexData = new VertexData();
			pVertexData.positions = pVertices;
			pVertexData.uvs = pUvs;
			pVertexData.indices = pIndices;
			var pNormals = [];
			VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
			pVertexData.normals = pNormals;
			pVertexData.applyToMesh(pMesh3);
		}
	}
};

VehicleMesh.prototype.addTriangle = function(
    pTriangles,
    vertex1CrossSectionIndex, vertex1Index, 
    vertex2CrossSectionIndex, vertex2Index, 
    vertex3CrossSectionIndex, vertex3Index)
{
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = [ 
		vertex1CrossSectionIndex, vertex1Index, 
        vertex2CrossSectionIndex, vertex2Index, 
        vertex3CrossSectionIndex, vertex3Index];
	pTriangles.push(_25047_JSO_a6091513150509033f0ccea65fe3fffdca);
};

VehicleMesh.prototype.addTwoTriangles = function(
    pTriangles,
    vertex1CrossSectionIndex, vertex1Index, 
    vertex2CrossSectionIndex, vertex2Index, 
    vertex3CrossSectionIndex, vertex3Index, 
    vertex4CrossSectionIndex, vertex4Index)
{
	this.addTriangle(pTriangles, 
        vertex1CrossSectionIndex, vertex1Index, 
        vertex2CrossSectionIndex, vertex2Index, 
        vertex3CrossSectionIndex, vertex3Index);

	this.addTriangle(pTriangles, 
        vertex2CrossSectionIndex, vertex2Index, 
        vertex4CrossSectionIndex, vertex4Index, 
        vertex3CrossSectionIndex, vertex3Index);
};

VehicleMesh.prototype.continueWithTriangle = function(
    pTriangles,
    vertex3CrossSectionIndex, vertex3Index, mod, invert)
{
	var m = mod * 2;

	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTriangles[pTriangles.length - 1];
	if (!invert)
	{
		this.addTriangle(pTriangles,
            _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(2 + m) % 6], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(3 + m) % 6],
            _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(4 + m) % 6], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(5 + m) % 6],
            vertex3CrossSectionIndex, vertex3Index);
	}
	else
	{
		this.addTriangle(pTriangles,
            _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(4 + m) % 6], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(5 + m) % 6],
            _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(2 + m) % 6], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[(3 + m) % 6],
            vertex3CrossSectionIndex, vertex3Index);
	}
};

VehicleMesh.prototype.continueWithTwoTriangles = function(
    pTriangles,
    vertex3CrossSectionIndex, vertex3Index,
    vertex4CrossSectionIndex, vertex4Index)
{
	var _25047_JSO_a6091513150509033f0ccea65fe3fffdca = pTriangles[pTriangles.length - 1];

	this.addTriangle(pTriangles,
        _25047_JSO_a6091513150509033f0ccea65fe3fffdca[4], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[5], 
        _25047_JSO_a6091513150509033f0ccea65fe3fffdca[2], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[3], 
        vertex3CrossSectionIndex, vertex3Index);

	this.addTriangle(pTriangles,
        _25047_JSO_a6091513150509033f0ccea65fe3fffdca[2], _25047_JSO_a6091513150509033f0ccea65fe3fffdca[3], 
        vertex4CrossSectionIndex, vertex4Index, 
        vertex3CrossSectionIndex, vertex3Index);
};

VehicleMesh.prototype.addMudguardTriangles = function(
    pTriangleVertices, pTriangleUvs, 
    corner1, corner2, corner3,
    uv1, uv2, uv3, 
    margin1, margin2, width, arcVertexCount)
{
	var v2 = corner2.subtract(corner1);
	var v0 = corner3.subtract(corner2);
	var v1 = Vector3.Cross(v2, v0).normalize().scale(width);

	var uvV2 = uv2.subtract(uv1);
	var uvV0 = uv3.subtract(uv2);

	var p = corner1.add(v0).subtract(v1);

	v0.copyFrom(v0.normalize().scale(v0.length() - margin1));
	v2.copyFrom(v2.normalize().scale(v2.length() - margin2));

	var pVertices = new Array(arcVertexCount + 2);
	pVertices[0] = corner1;

	var pUvs = new Array(arcVertexCount + 2);
	pUvs[0] = uv1;

	for (var a = 0; a < arcVertexCount; ++a)
	{
		var angle = Math.PI * 0.5 * a / (arcVertexCount - 1);
		var v = new Vector3(Math.cos(angle), 0.0, Math.sin(angle)).scale(0.5);

		var uv = uv1.add(uvV0.scale(1.0 - v.x)).add(uvV2.scale(v.z));
		pUvs[a + 1] = uv;

		v.copyFrom(p.subtract(v0.scale(v.x)).add(v2.scale(v.z)));
		pVertices[a + 1] = v;
	}
	pVertices[pVertices.length - 1] = corner3;
	pUvs[pVertices.length - 1] = uv3;

	for (var a = 0; a < pVertices.length - 1; ++a)
	{
		var vertex2 = pVertices[a];
		var vertex3 = pVertices[a + 1];

		var uv21 = pUvs[a];
		var uv31 = pUvs[a + 1];

		pTriangleVertices.push(corner2);
		pTriangleVertices.push(vertex3);
		pTriangleVertices.push(vertex2);

		pTriangleUvs.push(uv2);
		pTriangleUvs.push(uv31);
		pTriangleUvs.push(uv21);
	}
};

VehicleMesh.prototype.addBottomTriangles = function(
    pTriangleVertices, pTriangleUvs,
    vertex1CrossSectionIndex, vertex1Index,
    vertex3CrossSectionIndex, vertex3Index)
{
	var pTorsoVertex1 = this.pCrossSectionVertices[vertex1CrossSectionIndex][vertex1Index];
	var pTorsoVertex3 = this.pCrossSectionVertices[vertex3CrossSectionIndex][vertex3Index];

	var p1 = pTorsoVertex1._25047_JSO_3a02fb201464a2244d.clone();
	var uv1 = pTorsoVertex1.uv.clone();

	var p2 = new Vector3(p1.x, -p1.y, p1.z);
	var uv2 = uv1.clone();

	var p3 = pTorsoVertex3._25047_JSO_3a02fb201464a2244d.clone();
	var uv3 = pTorsoVertex3.uv.clone();

	var p4 = new Vector3(p3.x, -p3.y, p3.z);
	var uv4 = uv3.clone();

	pTriangleVertices.push(p1);
	pTriangleVertices.push(p3);
	pTriangleVertices.push(p2);

	pTriangleUvs.push(uv1);
	pTriangleUvs.push(uv3);
	pTriangleUvs.push(uv2);

	pTriangleVertices.push(p2);
	pTriangleVertices.push(p3);
	pTriangleVertices.push(p4);

	pTriangleUvs.push(uv2);
	pTriangleUvs.push(uv3);
	pTriangleUvs.push(uv4);

	this.vertex1CrossSectionIndexForBottomTriangles = vertex3CrossSectionIndex;
	this.vertex1IndexForBottomTriangles = vertex3Index;
};

VehicleMesh.prototype.vertex1CrossSectionIndexForBottomTriangles = 0;
VehicleMesh.prototype.vertex1IndexForBottomTriangles = 0;

VehicleMesh.prototype.continueBottomTriangles = function(
    pTriangleVertices, pTriangleUvs,
    vertex3CrossSectionIndex, vertex3Index)
{
	this.addBottomTriangles(pTriangleVertices, pTriangleUvs,
        this.vertex1CrossSectionIndexForBottomTriangles, this.vertex1IndexForBottomTriangles,
        vertex3CrossSectionIndex, vertex3Index);
};

VehicleMesh.prototype.updateLightsMesh = function()
{
	var pVertices = [];
	pVertices.push(-0.05, 0.2, 0.12);
	pVertices.push(0.17, -0.3, 0.06);
	pVertices.push(0.17, -0.3, -0.14);
	pVertices.push(-0.02, 0.2, -0.14);

	for (var a = 0; a < 4; ++a)
	{
		var b = a * 3;
		var v = new Vector3(pVertices[b], pVertices[b + 1], pVertices[b + 2]);
		v.scaleInPlace(1.5);
		v.x += -0.3;
		pVertices.push(v.x, v.y, v.z);
	}

	for (var a = 0; a < 8; ++a)
	{
		var b = a * 3;
		pVertices[b + 1] += 0.8;
		pVertices[b + 2] += 0.05;
	}

	var pIndices = [];
	pIndices.push(0, 2, 1);
	pIndices.push(2, 0, 3);
	for (var a = 0; a < 4; ++a)
	{
		pIndices.push(a, (a + 1) % 4, 4 + a);
		pIndices.push(4 + a, (a + 1) % 4, 4 + (a + 1) % 4);
	}

	for (var a = 0; a < 8; ++a)
	{
		var b = a * 3;
		pVertices.push(pVertices[b]);
		pVertices.push(-pVertices[b + 1]);
		pVertices.push(pVertices[b + 2]);
	}

	var n = pIndices.length;
	for (var a = 0; a < n; a += 3)
	{
		pIndices.push(8 + pIndices[a]);
		pIndices.push(8 + pIndices[a + 2]);
		pIndices.push(8 + pIndices[a + 1]);
	}

	var pVertexData = new VertexData();
	pVertexData.positions = pVertices;
	pVertexData.indices = pIndices;
	var pNormals = [];
	VertexData.ComputeNormals(pVertexData.positions, pVertexData.indices, pNormals);
	pVertexData.normals = pNormals;
	pVertexData.applyToMesh(this.pLightsMesh);
};

}
