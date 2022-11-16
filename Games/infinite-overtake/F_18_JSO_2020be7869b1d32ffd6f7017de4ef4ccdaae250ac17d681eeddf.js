with (BABYLON)
{

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf = function()
{
	_25047_JSO_2020be7869b1d32ffd787ea718fd79f73708c414cbb6fffd5d0f.call(this);

	this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4 = [];

	return this;
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype = Object.create(_25047_JSO_2020be7869b1d32ffd787ea718fd79f73708c414cbb6fffd5d0f.prototype);
_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.constructor = _25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf;
pLiveScriptService.addClass(_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf);

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4 = null;

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.init = function()
{
	var n = this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.length;
	for (var a = 0; a < n; ++a)
	{
		this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4[a].init();
	}
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.solve = function()
{
	var n = this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.length;
	for (var a = 0; a < n; ++a)
	{
		this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4[a].solve();
	}
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.simulate = function(dt)
{
	var n = this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.length;
	for (var a = 0; a < n; ++a)
	{
		this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4[a].simulate(dt);
	}
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.update = function()
{
	var n = this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.length;
	for (var a = 0; a < n; ++a)
	{
		this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4[a].update();
	}
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype._25047_JSO_5fddf9beb9201c436bfffdd8201e178fc70a8ac2e376b47351aeedb = function(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6)
{
	this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.push(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6);
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype._25047_JSO_20b5ee0fb8b403d52defbebbd43af6e6e069201a45ac1dfffd7c354817de839d8552020 = function(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6)
{
	var index = this._25047_JSO_db2014fffd247fc976201de75defecf02dc23201ae6ed743ab47617e201e2022fabae3f6162d16(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6);
	if (index != -1)
	{
		this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.splice(index, 1);
	}
	return index;
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype.getSimulationComponentAt = function(index)
{
	if (index < 0 || index >= this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.length)
	{
		return null;
	}
	return this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4[index];
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype._25047_JSO_db2014fffd247fc976201de75defecf02dc23201ae6ed743ab47617e201e2022fabae3f6162d16 = function(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6)
{
	return this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4.indexOf(_25047_JSO_ef4015567dd03927697d17825f1c8357b731c2030d051f475c6);
};

_25047_JSO_2020be7869b1d32ffd6f7017de4ef4ccdaa22f109ee7ec345cf.prototype._25047_JSO_4ea5a876b239d808fffdd8201e178fc70a8acb6f9ad53c076f270 = function()
{
	return this._25047_JSO_ef4015567dd03927697d17825f1c8357b201ed4ee28d7322122c4;
};

}
