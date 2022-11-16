with (BABYLON)
{

_25047_JSO_002a503ccba238fffd = function(pGame)
{
	_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.call(this);

	this.pGame = pGame;

	this.pCollisionPosList = [new Vector3(), new Vector3(), new Vector3()];

	return this;
};

_25047_JSO_002a503ccba238fffd.prototype = Object.create(_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype);
_25047_JSO_002a503ccba238fffd.prototype.constructor = _25047_JSO_002a503ccba238fffd;
pLiveScriptService.addClass(_25047_JSO_002a503ccba238fffd);

_25047_JSO_002a503ccba238fffd.prototype.pGame = null;
_25047_JSO_002a503ccba238fffd.prototype.pCollisionPosList = null;
_25047_JSO_002a503ccba238fffd.prototype.collisionPosListDirty = true;

_25047_JSO_002a503ccba238fffd.prototype.initialize = function(_25047_JSO_34a44a1af65c6d58, direction)
{
};

_25047_JSO_002a503ccba238fffd.prototype.init = function()
{
	this.collisionPosListDirty = true;

	_25047_JSO_08bc0f7bddb22ece657320262d17ef504b.prototype.init.call(this);
};

_25047_JSO_002a503ccba238fffd.prototype.updateCollisionPosList = function()
{
	if (this.collisionPosListDirty)
	{
		this.pCollisionPosList[0].copyFrom(this._25047_JSO_3a02fb201464a2244d.add(this.v0.scale(0.9)));
		this.pCollisionPosList[1].copyFrom(this._25047_JSO_3a02fb201464a2244d);
		this.pCollisionPosList[2].copyFrom(this._25047_JSO_3a02fb201464a2244d.add(this.v0.scale(-0.8)));

		this.collisionPosListDirty = false;
	}

	return this.pCollisionPosList;
};

}
