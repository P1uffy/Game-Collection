with (livescriptforjs.service) with (livescriptforjs.manager)
{

livescriptforjs.service.View = function(pModel)
{
	ViewList.getViewList().addView(this);

	this.pModel = pModel;
	pModel.pViewTag = { pViewClass: this.__proto__.constructor, pView: this, viewId: this.id };

	return this;
};

View.prototype = Object.create(Object.prototype);
View.prototype.constructor = View;

View.prototype.id = 0;
View.prototype.pModel = null;

View.prototype.compile = function()
{
};

View.prototype.update = function()
{
};

}
