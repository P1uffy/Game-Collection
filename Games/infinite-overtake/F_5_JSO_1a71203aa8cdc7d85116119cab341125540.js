with (BABYLON)
{

GameView = function(pGame)
{
	livescriptforjs.service.MainView.call(this, pGame);
	return this;
};

GameView.prototype = Object.create(livescriptforjs.service.MainView.prototype);
GameView.prototype.constructor = GameView;
pLiveScriptService.addClass(GameView);

GameView.prototype._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = null;
GameView.prototype._25047_JSO_347a51d8e2e2e7e0 = null;

GameView.prototype.initialize = function(_25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b)
{
	this._25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b = _25047_JSO_4c17e8ea0e0afffd437fcd50c0fffd06003b;

	this._25047_JSO_347a51d8e2e2e7e0 = new _25047_JSO_78ac15334a20202b5(this);

	var pGame = this.pModel;

	this._25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice = this._25047_JSO_347a51d8e2e2e7e0.pSlices[2];
	pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.allowedMinRange = 100.0;
	pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed.initialize(this._25047_JSO_347a51d8e2e2e7e0.pMainVehicleFinalSlice, 1.0);

	pGame.setGameMode(pGame.gameMode);
};

GameView.prototype.clean = function()
{
	var pGame = this.pModel;

	var translation = pGame._25047_JSO_dbcbc0562dca4203ae17520304bd330dcf2ed._25047_JSO_3a02fb201464a2244d.clone();
	translation.x = -translation.x;
	translation.y = -translation.y;
	translation.z = 0.0;

	this._25047_JSO_347a51d8e2e2e7e0.clean(translation);
	pGame.clean(translation);
};

}
