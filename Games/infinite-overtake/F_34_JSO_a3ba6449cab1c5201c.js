with (BABYLON)
{

_25047_JSO_201e6f00bcce7ae9f0 = function()
{
};

_25047_JSO_201e6f00bcce7ae9f0.blendNormals = function(pVertices, pNormals, epsilon)
{
	var n = pVertices.length / 3;
	for (var a = 0; a < n; ++a)
	{
		var a1 = a * 3;
		var x1 = pVertices[a1];
		var y1 = pVertices[a1 + 1];
		var z1 = pVertices[a1 + 2];

		var normal = new Vector3(pNormals[a1], pNormals[a1 + 1], pNormals[a1 + 2]);

		for (var b = 0; b < n; ++b)
		{
			if (a == b)
			{
				continue;
			}

			var b1 = b * 3;
			var x2 = pVertices[b1];
			var y2 = pVertices[b1 + 1];
			var z2 = pVertices[b1 + 2];

			if (Math.abs(x2 - x1) > epsilon ||
				Math.abs(y2 - y1) > epsilon ||
				Math.abs(z2 - z1) > epsilon)
			{
				continue;
			}

			normal.x += pNormals[b1];
			normal.y += pNormals[b1 + 1];
			normal.z += pNormals[b1 + 2];
		}

		normal.normalize();

		pNormals[a1] = normal.x;
		pNormals[a1 + 1] = normal.y;
		pNormals[a1 + 2] = normal.z;
	}
};

_25047_JSO_201e6f00bcce7ae9f0.powSigned = function(x, p)
{
	if (x == 0.0)
	{
		return 0.0;
	}
	if (x > 0.0)
	{
		return Math.pow(x, p);
	}
	return -Math.pow(-x, p);
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_162a7136161666cb74adae8e573c2c54a = function(t, v)
{
	return t.add(Vector3.Cross(v, t)).normalize();
};

_25047_JSO_201e6f00bcce7ae9f0.rotateX = function(v, angle) 
{
	var fCos = Math.cos(angle);
	var fSin = Math.sin(angle);
	return new Vector3(v.x, v.y*fCos + v.z*(-fSin), v.y*fSin + v.z*fCos);
};

_25047_JSO_201e6f00bcce7ae9f0.rotateY = function(v, angle)
{
	var fCos = Math.cos(angle);
	var fSin = Math.sin(angle);
	return new Vector3(v.x*fCos + v.z*fSin, y, v.x*(-fSin) + v.z*fCos);
};

_25047_JSO_201e6f00bcce7ae9f0.rotateZ = function(v, angle)
{
	var fCos = Math.cos(angle);
	var fSin = Math.sin(angle);
	return new Vector3(v.x*fCos + v.y*(-fSin), v.x*fSin + v.y*fCos, v.z);
};

_25047_JSO_201e6f00bcce7ae9f0.rotate = function(v, v3, angle)
{
	return _25047_JSO_201e6f00bcce7ae9f0.unitRotate(v, v3.normalizeToNew(), angle);
};

_25047_JSO_201e6f00bcce7ae9f0.unitRotate = function(v, v3, angle)
{
	var ux = v3.x;
	var uy = v3.y;
	var uz = v3.z;

	var fCos = Math.cos(angle);
	var fSin = Math.sin(angle);

	return new Vector3(
		v.x * (ux * ux + fCos * (1 - ux * ux)) + v.y * (ux * uy * (1 - fCos) - uz * fSin) + v.z * (uz * ux * (1 - fCos) + uy * fSin),
		v.x * (ux * uy * (1 - fCos) + uz * fSin) + v.y * (uy * uy + fCos * (1 - uy * uy)) + v.z * (uy * uz * (1 - fCos) - ux * fSin),
		v.x * (uz * ux * (1 - fCos) - uy * fSin) + v.y * (uy * uz * (1 - fCos) + ux * fSin) + v.z * (uz * uz + fCos * (1 - uz * uz)));
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_2d4af62026327b0ef7db273f201ef64209201816154122c4dec41ed = function(t, v)
{
	return t.scale(t.x * v.x + t.y * v.y + t.z * v.z);
};

_25047_JSO_201e6f00bcce7ae9f0.setMatrix = function(_25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_3a02fb201464a2244d, v0, v1, v2)
{
	_25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.position.copyFrom(_25047_JSO_3a02fb201464a2244d);
	_25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e.rotation.copyFrom(Vector3.RotationFromAxis(v0, v1, v2));
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b8395d20207119216acb5fffd7f250667b73f4cc3ed178de39e52c6 = function(_25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_3bc36fd5cfecf35bbd67fb2013e8193f0e)
{
	_25047_JSO_201e6f00bcce7ae9f0.setMatrix(_25047_JSO_43fcfffdc534201abf2824d41920146f3cf21e, _25047_JSO_3bc36fd5cfecf35bbd67fb2013e8193f0e._25047_JSO_3a02fb201464a2244d, _25047_JSO_3bc36fd5cfecf35bbd67fb2013e8193f0e.v0, _25047_JSO_3bc36fd5cfecf35bbd67fb2013e8193f0e.v1, _25047_JSO_3bc36fd5cfecf35bbd67fb2013e8193f0e.v2);
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_3e27c4c21953b831201efdfca8d274faf87b15325652c60fffdcf = function(gravity, scalarVel, targetPos, 
	initialVel1, initialVel2, initialVel1IsValid, initialVel2IsValid)
{
	initialVel1IsValid[0] = false;
	initialVel2IsValid[0] = false;

	var p = targetPos.clone();

	var v = scalarVel;
	var g = gravity;

	var a = p.z * p.z + p.x * p.x;
	var b = -p.z * g * p.x * p.x - p.x * p.x * v * v;
	var c = 0.25 * g * g * p.x * p.x * p.x * p.x;

	var determinant = b * b - 4 * a * c;
	if (determinant < 0.0)
	{
		return false;
	}
	determinant = Math.sqrt(determinant);

	var d = new Vector3();

	d.x = (-b + determinant) / (2 * a);
	if (d.x >= 0.0)
	{
		d.x = Math.sqrt(d.x);
		if (p.x < 0.0)
		{
			d.x = -d.x;
		}
			
		d.z = v * v - d.x * d.x;
		if (d.z >= 0.0)
		{
			d.z = Math.sqrt(d.z);

			initialVel1.x = d.x;
			initialVel1.z = d.z;

			initialVel1IsValid[0] = true;
		}
	}

	d.x = (-b - determinant) / (2 * a);	
	if (d.x >= 0.0)
	{
		d.x = Math.sqrt(d.x);
		if (p.x < 0.0)
		{
			d.x = -d.x;
		}
			
		d.z = v * v - d.x * d.x;
		if (d.z >= 0.0)
		{
			d.z = Math.sqrt(d.z);

			initialVel2.x = d.x;
			initialVel2.z = d.z;

			initialVel2IsValid[0] = true;
		}
	}

	return true;
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_b4a350354dc404d9a7cac9a9f3bba844 = function(x, m)
{
	if (x >= 0.0)
	{
		return x % m;
	}

	return m - (((-x) % m) % m);
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_d9332039202618f6a2201464755a7afffde44bd9 = function(ang1, ang2)
{
	var d1 = 0.0;
	var d2 = 0.0;

	if (ang2 > ang1)
	{
		d1 = ang2 - ang1;
		d2 = ang1 + (Math.PI * 2 - ang2);

		if (d1 < d2)
		{
			return d1;
		}
		else
		{
			return -d2;
		}
	}
	else
	{
		d1 = ang1 - ang2;
		d2 = ang2 + (Math.PI * 2 - ang1);

		if (d1 < d2)
		{
			return -d1;
		}
		else
		{
			return d2;
		}
	}
};

_25047_JSO_201e6f00bcce7ae9f0._25047_JSO_a9a6eca12039004c053bb37ca2e97c29311222fbe333fffdd87e73a9e61f440165203a = function(a, b, c, intersectionX1, intersectionX2)
{
	var determinant = b * b - 4 * a * c;

	if (determinant < 0.0)
	{
		return false;
	}

	determinant = Math.sqrt(determinant);

	var a2 = a * 2;
	intersectionX1[0] = (-b - determinant) / a2;
	intersectionX2[0] = (-b + determinant) / a2;

	return true;
};

_25047_JSO_201e6f00bcce7ae9f0.copyToClipboard = function(text)
{
	var el = document.createElement('textarea');
	el.value = text;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	el.select(0, 99999);
	document.execCommand('copy');
	document.body.removeChild(el);
};

_25047_JSO_201e6f00bcce7ae9f0.setCookie = function(name, value, expirationInDays)
{
	var s = name + "=" + value + ";";

	if (expirationInDays != null)
	{
		var d = new Date();
		d.setTime(d.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
		s += "expires=" + d.toUTCString(); + ";";
	}

	s += "path=/";

	document.cookie = s;
};

_25047_JSO_201e6f00bcce7ae9f0.getCookie = function(name)
{
	name += "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0)
		{
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

_25047_JSO_201e6f00bcce7ae9f0.removeAllCookies = function()
{
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++)
	{
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
};

_25047_JSO_201e6f00bcce7ae9f0.consumeFirstTag = function(pTags, tagName)
{
	var tags = pTags[0];
	tagName += "=";

	if (!tags.startsWith(tagName))
	{
		return null;
	}

	var index = tags.indexOf("<;>", tagName.length);
	if (index == -1)
	{
		return null;
	}

	var tagValue = tags.substring(tagName.length, index);
	pTags[0] = tags.substring(index + 3);

	return tagValue;
};

_25047_JSO_201e6f00bcce7ae9f0.findGetParameter = function(parameterName)
{
	var result = null, tmp = [];
	var items = location.search.substr(1).split("&");
	for (var index = 0; index < items.length; index++)
	{
		tmp = items[index].split("=");
		if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
	}
	return result;
};

}