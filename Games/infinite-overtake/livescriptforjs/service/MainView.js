with (livescriptforjs.service) with (livescriptforjs.manager)
{

livescriptforjs.service.MainView = function(pModel)
{
	View.call(this, pModel);
	ViewList.getViewList().setMainView(this);
	return this;
};

MainView.prototype = Object.create(View.prototype);
MainView.prototype.constructor = MainView;

}
