with (livescriptforjs.manager)
{

livescriptforjs.manager.ViewList = function(pManager)
{
	this.pManager = pManager;
	this.pViews = [];
	this.pIdVsView = {};
	this.pViewsToCompile = [];

	return this;
}

ViewList.prototype = Object.create(Object.prototype);
ViewList.prototype.constructor = ViewList;

ViewList.pViewList = null;

ViewList.prototype.pMainView = null;
ViewList.prototype.pViews = null;
ViewList.prototype.pIdVsView = null;
ViewList.prototype.lastId = 0;
ViewList.prototype.pViewsToCompile = null;

ViewList.createViewList = function(pManager)
{
	ViewList.pViewList = new ViewList(pManager);
	return ViewList.pViewList;
};

ViewList.getViewList = function()
{
	return ViewList.pViewList;
};

ViewList.prototype.setMainView = function(pMainView)
{
	this.pMainView = pMainView;
};

ViewList.prototype.addView = function(pView)
{
	var id = ++this.lastId;
	pView.id = id;
	this.pViews.push(pView);
	this.pIdVsView["" + id] = pView;
	this.pViewsToCompile.push(pView);
};

ViewList.prototype.removeView = function(pView)
{
	var index = this.pViews.indexOf(pView);
	if (index == -1)
	{
		return -1;
	}

	this.removeViewAt(index);
	return index;
};

ViewList.prototype.removeViewAt = function(index)
{
	if (index < 0 || index >= this.pViews.length)
	{
		return null;
	}

	var pView = this.pViews[index];
	this.pViews.splice(index, 1);
	delete this.pIdVsView["" + pView.id];

	return pView;
};

ViewList.prototype.removeUnreferencedViews = function(pReferencedViews)
{
	var n = this.pViews.length;
	for (var a = 0; a < n; ++a)
	{
		var pView = this.pViews[a];
		if (pReferencedViews.indexOf(pView) == -1)
		{
			if (this.removeViewAt(a) != null)
			{
				--a;
				--n;
			}
		}
	}
};

ViewList.prototype.findView = function(id)
{
	return this.pIdVsView["" + id];
};

ViewList.prototype.compile = function(recompile)
{
	var pViews = null;
	if (recompile)
	{
		pViews = this.pViews;
	}
	else
	{
		pViews = this.pViewsToCompile;
	}

	var n = pViews.length;
	if (n == 0)
	{
		return;
	}

	for (var a = 0; a < n; ++a)
	{
		var pView = pViews[a];
		pView.compile();
	}

	this.pViewsToCompile.length = 0;
};

ViewList.prototype.update = function()
{
	var n = this.pViews.length;
	for (var a = 0; a < n; ++a)
	{
		var pView = this.pViews[a];
		pView.update();
	}
};

}
