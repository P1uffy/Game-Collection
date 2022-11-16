PointView = function(pPoint)
{
	livescriptforjs.service.View.call(this, pPoint);
	return this;
};

PointView.prototype = Object.create(livescriptforjs.service.View.prototype);
PointView.prototype.constructor = PointView;
pLiveScriptService.addClass(PointView);

PointView.prototype._25047_JSO_a6091513150509033f0ccea65fe3fffdca = null;
PointView.prototype.pPrevTriangle = null;
PointView.prototype.pValidTriangle = null;

PointView.prototype.updateTriangle = function()
{
	var pPoint = this.pModel;
	var pPointPos = pPoint._25047_JSO_3a02fb201464a2244d;
	var pGameView = pPoint.pGame.pViewTag.pView;
	var _25047_JSO_347a51d8e2e2e7e0 = pGameView._25047_JSO_347a51d8e2e2e7e0;

	this.pPrevTriangle = this._25047_JSO_a6091513150509033f0ccea65fe3fffdca;

	if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
	{
		this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = this._25047_JSO_a6091513150509033f0ccea65fe3fffdca.findTriangle(pPointPos);
	}

	if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
	{
		this.pValidTriangle = this._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
	}
	else
	{
		//console.log("warning");
	}
};

PointView.prototype.updateTriangle2 = function()
{
	this.updateTriangle();

	if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
	{
		this.pPrevTriangle = null;
		this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_347a51d8e2e2e7e0.findTriangle(pPointPos);

		if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
		{
			this.pValidTriangle = this._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		}
		else
		{
			//console.log("warning");
		}
	}
};

PointView.prototype.updateTriangle3 = function(depth)
{
	this.updateTriangle();

	if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
	{
		this.pPrevTriangle = null;

		if (this.pValidTriangle != null)
		{
			var pPoint = this.pModel;
			var pPointPos = pPoint._25047_JSO_3a02fb201464a2244d;

			var _25047_JSO_34a44a1af65c6d58 = this.pValidTriangle._25047_JSO_34a44a1af65c6d58;
			this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_34a44a1af65c6d58.findTriangle(pPointPos);
			
			if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca == null)
			{
				var pSlice1 = _25047_JSO_34a44a1af65c6d58;
				var pSlice2 = _25047_JSO_34a44a1af65c6d58;
				for (var a = 0; a < depth; ++a)
				{
					var pNextSlice = pSlice1.pNextSlice;
					if (pNextSlice != null)
					{
						this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = pNextSlice.findTriangle(pPointPos);
						if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
						{
							break;
						}
						else
						{
							pSlice1 = pNextSlice;
						}
					}

					var pPrevSlice = pSlice2.pPrevSlice;
					if (pPrevSlice != null)
					{
						this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = pPrevSlice.findTriangle(pPointPos);
						if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
						{
							break;
						}
						else
						{
							pSlice2 = pPrevSlice;
						}
					}

					if (pPrevSlice == null && pNextSlice == null)
					{
						break;
					}
				}
			}
		}

		if (this._25047_JSO_a6091513150509033f0ccea65fe3fffdca != null)
		{
			this.pValidTriangle = this._25047_JSO_a6091513150509033f0ccea65fe3fffdca;
		}
		else
		{
			//console.log("warning");
		}
	}
};

PointView.prototype.setTriangle = function(_25047_JSO_a6091513150509033f0ccea65fe3fffdca)
{
	var pPoint = this.pModel;

	this._25047_JSO_a6091513150509033f0ccea65fe3fffdca = _25047_JSO_a6091513150509033f0ccea65fe3fffdca;
	this.pPrevTriangle = null;
	this.pValidTriangle = _25047_JSO_a6091513150509033f0ccea65fe3fffdca;

	pPoint._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_a6091513150509033f0ccea65fe3fffdca.centerPos);
};
