with (BABYLON)
{

Point = function(pGame)
{
	new PointView(this);

	this.pGame = pGame;
	this._25047_JSO_3a02fb201464a2244d = new Vector3();

	return this;
};

Point.prototype = Object.create(Object.prototype);
Point.prototype.constructor = Point;
pLiveScriptService.addClass(Point);

Point.prototype.pGame = null;
Point.prototype._25047_JSO_3a02fb201464a2244d = null;

Point.prototype.updateTriangle = function(_25047_JSO_3a02fb201464a2244d)
{
	this._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);

	var pPointView = this.pViewTag.pView;
	pPointView.updateTriangle();
};

Point.prototype.updateTriangle2 = function(_25047_JSO_3a02fb201464a2244d)
{
	this._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);

	var pPointView = this.pViewTag.pView;
	pPointView.updateTriangle2();
};

Point.prototype.updateTriangle3 = function(_25047_JSO_3a02fb201464a2244d, depth)
{
	this._25047_JSO_3a02fb201464a2244d.copyFrom(_25047_JSO_3a02fb201464a2244d);

	var pPointView = this.pViewTag.pView;
	pPointView.updateTriangle3(depth);
};

}
