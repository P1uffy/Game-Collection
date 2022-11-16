with (BABYLON)
{

TireView = function(_25047_JSO_06dee9b517e59e50c)
{
	livescriptforjs.service.View.call(this, _25047_JSO_06dee9b517e59e50c);

	this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e = new TransformNode("", null);
	this.pTireMesh = new TireMesh(_25047_JSO_06dee9b517e59e50c.screwRelPos.y < 0.0, 12);
	this.pTireMesh._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.parent = this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e;

	return this;
};

TireView.prototype = Object.create(livescriptforjs.service.View.prototype);
TireView.prototype.constructor = TireView;
pLiveScriptService.addClass(TireView);

TireView.prototype.pTireMesh = null;

TireView.prototype.compile = function()
{
};

TireView.prototype.update = function()
{
	var _25047_JSO_06dee9b517e59e50c = this.pModel;
	_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b8395d20207119216acb5fffd7f250667b73f4cc3ed178de39e52c6(this._25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_06dee9b517e59e50c);
};

}
