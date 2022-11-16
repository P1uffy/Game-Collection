with (BABYLON)
{

_25047_JSO_3fa6cc0723b75cdf = function(_25047_JSO_347a51d8e2e2e7e0)
{
	this._25047_JSO_347a51d8e2e2e7e0 = _25047_JSO_347a51d8e2e2e7e0;
	this.range = _25047_JSO_347a51d8e2e2e7e0.range;

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);

	this.createMesh();

	return this;
};

_25047_JSO_3fa6cc0723b75cdf.prototype = Object.create(Object.prototype);
_25047_JSO_3fa6cc0723b75cdf.prototype.constructor = _25047_JSO_3fa6cc0723b75cdf;
pLiveScriptService.addClass(_25047_JSO_3fa6cc0723b75cdf);

_25047_JSO_3fa6cc0723b75cdf.prototype._25047_JSO_347a51d8e2e2e7e0 = null;
_25047_JSO_3fa6cc0723b75cdf.prototype.range = 0.0;
_25047_JSO_3fa6cc0723b75cdf.prototype.pLastSlice = null;

_25047_JSO_3fa6cc0723b75cdf.pMesh1 = null;
_25047_JSO_3fa6cc0723b75cdf.pMesh2 = null;
_25047_JSO_3fa6cc0723b75cdf.pMesh3 = null;

_25047_JSO_3fa6cc0723b75cdf.prototype.createMesh = function()
{
	var pSlices = this._25047_JSO_347a51d8e2e2e7e0.pSegmentSlices;

	{
		var pMesh1 = new Mesh("", null);
		pMesh1.material = _25047_JSO_78ac15334a20202b5.pMesh1Material;

		var pPositions = [];
		var pNormals = [];
		var pUVs = [];
		var pIndices = [];

		var s = pSlices.length;
		for (var a = 0; a < s; ++a)
		{
			var _25047_JSO_34a44a1af65c6d58 = pSlices[a];
			var pPos = _25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d;
			var pV0 = _25047_JSO_34a44a1af65c6d58.v0;
			var pV1 = _25047_JSO_34a44a1af65c6d58.v1;

			var pVertexList = _25047_JSO_34a44a1af65c6d58.pVertexList;
			var pNormalList = _25047_JSO_34a44a1af65c6d58.pNormalList;
			var n = pVertexList.length;
			var mid = n / 2;

			var pVertex1 = pVertexList[mid - 1];
			var pVertex2 = pVertexList[mid];

			var pNormal1 = pNormalList[mid - 1];
			var pNormal2 = pNormalList[mid];

			pPositions.push(pVertex1.x, pVertex1.y, pVertex1.z);
			pPositions.push(pVertex2.x, pVertex2.y, pVertex2.z);

			pNormals.push(pNormal1.x, pNormal1.y, pNormal1.z);
			pNormals.push(pNormal2.x, pNormal2.y, pNormal2.z);

			var u = (_25047_JSO_34a44a1af65c6d58.range * 0.08);
			pUVs.push(u, 0);
			pUVs.push(u, 1);

			var i = a * 2;
			if (a != s - 1)
			{
				pIndices.push(i, i + 1, i + 2);
				pIndices.push(i + 2, i + 1, i + 3);
			}
		}

		var pVertexData = new VertexData();
		pVertexData.positions = pPositions;
		pVertexData.normals = pNormals;
		pVertexData.uvs = pUVs;
		pVertexData.indices = pIndices;
		pVertexData.applyToMesh(pMesh1);

		this.pMesh1 = pMesh1;
	}

	{
		var pMesh2 = new Mesh("", null);
		pMesh2.material = _25047_JSO_78ac15334a20202b5.pMesh2Material;

		var pPositions = [];
		var pNormals = [];
		var pColors = [];
		var pIndices = [];

		var s = pSlices.length;
		for (var a = 0; a < s; ++a)
		{
			var _25047_JSO_34a44a1af65c6d58 = pSlices[a];
			var pPos = _25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d;
			var pV0 = _25047_JSO_34a44a1af65c6d58.v0;
			var pV1 = _25047_JSO_34a44a1af65c6d58.v1;

			var pVertexList = _25047_JSO_34a44a1af65c6d58.pVertexList;
			var pNormalList = _25047_JSO_34a44a1af65c6d58.pNormalList;
			var n = pVertexList.length;
			var mid = n / 2;

			var pVertex0 = pVertexList[mid - 2];
			var pVertex1 = pVertexList[mid - 1];
			var pVertex2 = pVertexList[mid];
			var pVertex3 = pVertexList[mid + 1];

			var pNormal0 = pNormalList[mid - 2];
			var pNormal1 = pNormalList[mid - 1];
			var pNormal2 = pNormalList[mid];
			var pNormal3 = pNormalList[mid + 1];

			pPositions.push(pVertex0.x, pVertex0.y, pVertex0.z);
			pPositions.push(pVertex1.x, pVertex1.y, pVertex1.z);
			pPositions.push(pVertex2.x, pVertex2.y, pVertex2.z);
			pPositions.push(pVertex3.x, pVertex3.y, pVertex3.z);

			pNormals.push(pNormal0.x, pNormal0.y, pNormal0.z);
			pNormals.push(pNormal1.x, pNormal1.y, pNormal1.z);
			pNormals.push(pNormal2.x, pNormal2.y, pNormal2.z);
			pNormals.push(pNormal3.x, pNormal3.y, pNormal3.z);

			pColors.push(0.5, 0.5, 0.5, 1);
			pColors.push(1, 1, 1, 1);
			pColors.push(1, 1, 1, 1);
			pColors.push(0.5, 0.5, 0.5, 1);

			var i = a * 4;
			if (a != s - 1)
			{
				pIndices.push(i, i + 1, i + 4);
				pIndices.push(i + 4, i + 1, i + 5);

				pIndices.push(i + 2, i + 3, i + 6);
				pIndices.push(i + 6, i + 3, i + 7);
			}
		}

		var pVertexData = new VertexData();
		pVertexData.positions = pPositions;
		pVertexData.normals = pNormals;
		pVertexData.colors = pColors;
		pVertexData.indices = pIndices;
		pVertexData.applyToMesh(pMesh2);

		this.pMesh2 = pMesh2;
	}

	{
		var pMesh3 = new Mesh("", null);
		pMesh3.material = _25047_JSO_78ac15334a20202b5.pMesh3Material;

		var pPositions = [];
		var pNormals = [];
		var pColors = [];
		var pIndices = [];

		var s = pSlices.length;
		for (var a = 0; a < s; ++a)
		{
			var _25047_JSO_34a44a1af65c6d58 = pSlices[a];
			var pPos = _25047_JSO_34a44a1af65c6d58._25047_JSO_3a02fb201464a2244d;
			var pV0 = _25047_JSO_34a44a1af65c6d58.v0;
			var pV1 = _25047_JSO_34a44a1af65c6d58.v1;

			var pVertexList = _25047_JSO_34a44a1af65c6d58.pVertexList;
			var pNormalList = _25047_JSO_34a44a1af65c6d58.pNormalList;
			var n = pVertexList.length;
			var mid = n / 2;

			var pVertex0 = pVertexList[mid - 3];
			var pVertex1 = pVertexList[mid - 2];
			var pVertex2 = pVertexList[mid + 1];
			var pVertex3 = pVertexList[mid + 2];

			var pNormal0 = pNormalList[mid - 2];
			var pNormal1 = pNormalList[mid - 1];
			var pNormal2 = pNormalList[mid];
			var pNormal3 = pNormalList[mid + 1];

			pPositions.push(pVertex0.x, pVertex0.y, pVertex0.z);
			pPositions.push(pVertex1.x, pVertex1.y, pVertex1.z);
			pPositions.push(pVertex2.x, pVertex2.y, pVertex2.z);
			pPositions.push(pVertex3.x, pVertex3.y, pVertex3.z);

			pNormals.push(pNormal0.x, pNormal0.y, pNormal0.z);
			pNormals.push(pNormal1.x, pNormal1.y, pNormal1.z);
			pNormals.push(pNormal2.x, pNormal2.y, pNormal2.z);
			pNormals.push(pNormal3.x, pNormal3.y, pNormal3.z);

			if (_25047_JSO_34a44a1af65c6d58.id % 2 == 0)
			{
				pColors.push(1, 1, 1, 1);
				pColors.push(1, 1, 1, 1);
				pColors.push(1, 1, 1, 1);
				pColors.push(1, 1, 1, 1);
			}
			else
			{
				pColors.push(0.7, 0.7, 0.7, 1);
				pColors.push(0.7, 0.7, 0.7, 1);
				pColors.push(0.7, 0.7, 0.7, 1);
				pColors.push(0.7, 0.7, 0.7, 1);
			}

			var i = a * 4;
			if (a != s - 1)
			{
				pIndices.push(i, i + 1, i + 4);
				pIndices.push(i + 4, i + 1, i + 5);

				pIndices.push(i + 2, i + 3, i + 6);
				pIndices.push(i + 6, i + 3, i + 7);
			}
		}

		var pVertexData = new VertexData();
		pVertexData.positions = pPositions;
		pVertexData.normals = pNormals;
		pVertexData.colors = pColors;
		pVertexData.indices = pIndices;
		pVertexData.applyToMesh(pMesh3);

		this.pMesh3 = pMesh3;
	}

	this.pMesh1.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMesh2.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;
	this.pMesh3.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	this.pMesh1.updateMeshPositions(function() { }, true);
	this.pMesh2.updateMeshPositions(function() { }, true);
	this.pMesh3.updateMeshPositions(function() { }, true);
};

}
