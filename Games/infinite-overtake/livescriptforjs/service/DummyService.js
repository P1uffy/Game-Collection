with (livescriptforjs.service) with (livescriptforjs.manager)
{

livescriptforjs.service.DummyService = function()
{
	ViewList.createViewList(null);
	return this;
};

DummyService.prototype = Object.create(Object.prototype);
DummyService.prototype.constructor = DummyService;

DummyService.prototype.addClass = function(pClass, name)
{
};

DummyService.prototype.addListener = function(pListener)
{
};

DummyService.prototype.update = function()
{
};

}
