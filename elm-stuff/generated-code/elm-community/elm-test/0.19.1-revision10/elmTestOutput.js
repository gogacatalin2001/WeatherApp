// Apply Node polyfills as necessary.
var window = {
  Date: Date,
  addEventListener: function () {},
  removeEventListener: function () {},
};

var location = {
  href: '',
  host: '',
  hostname: '',
  protocol: '',
  origin: '',
  port: '',
  pathname: '',
  search: '',
  hash: '',
  username: '',
  password: '',
};
var document = { body: {}, createTextNode: function () {}, location: location };

if (typeof FileList === 'undefined') {
  FileList = function () {};
}

if (typeof File === 'undefined') {
  File = function () {};
}

if (typeof XMLHttpRequest === 'undefined') {
  XMLHttpRequest = function () {
    return {
      addEventListener: function () {},
      open: function () {},
      send: function () {},
    };
  };

  var oldConsoleWarn = console.warn;
  console.warn = function () {
    if (
      arguments.length === 1 &&
      arguments[0].indexOf('Compiled in DEV mode') === 0
    )
      return;
    return oldConsoleWarn.apply(console, arguments);
  };
}

if (typeof FormData === 'undefined') {
  FormData = function () {
    this._data = [];
  };
  FormData.prototype.append = function () {
    this._data.push(Array.prototype.slice.call(arguments));
  };
}

var Elm = (function(module) {
var __elmTestSymbol = Symbol("elmTestSymbol");
(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Test_runThunk(thunk)
{
  try {
    // Attempt to run the thunk as normal.
    return $elm$core$Result$Ok(thunk(_Utils_Tuple0));
  } catch (err) {
    // If it throws, return an error instead of crashing.
    return $elm$core$Result$Err(err.toString());
  }
}



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// NOTE: this is duplicating constants also defined in Test.Internal.KernelConstants
//       so if you make any changes here, be sure to synchronize them there!
var virtualDomKernelConstants =
  {
    nodeTypeTagger: 4,
    nodeTypeThunk: 5,
    kids: "e",
    refs: "l",
    thunk: "m",
    node: "k",
    value: "a"
  }

function forceThunks(vNode) {
  if (typeof vNode !== "undefined" && vNode.$ === "#2") {
    // This is a tuple (the kids : List (String, Html) field of a Keyed node); recurse into the right side of the tuple
    vNode.b = forceThunks(vNode.b);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeThunk && !vNode[virtualDomKernelConstants.node]) {
    // This is a lazy node; evaluate it
    var args = vNode[virtualDomKernelConstants.thunk];
    vNode[virtualDomKernelConstants.node] = vNode[virtualDomKernelConstants.thunk].apply(args);
    // And then recurse into the evaluated node
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeTagger) {
    // This is an Html.map; recurse into the node it is wrapping
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && typeof vNode[virtualDomKernelConstants.kids] !== 'undefined') {
    // This is something with children (either a node with kids : List Html, or keyed with kids : List (String, Html));
    // recurse into the children
    vNode[virtualDomKernelConstants.kids] = vNode[virtualDomKernelConstants.kids].map(forceThunks);
  }
  return vNode;
}

function _HtmlAsJson_toJson(html)
{
  return _Json_wrap(forceThunks(html));
}

function _HtmlAsJson_eventHandler(event)
{
  return event[virtualDomKernelConstants.value];
}

function _HtmlAsJson_taggerFunction(tagger)
{
  return tagger.a;
}

function _HtmlAsJson_attributeToJson(attribute)
{
  return _Json_wrap(attribute);
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}

function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}



// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $author$project$Test$Reporter$Reporter$ConsoleReport = function (a) {
	return {$: 'ConsoleReport', a: a};
};
var $author$project$Console$Text$Monochrome = {$: 'Monochrome'};
var $elm$core$Debug$todo = _Debug_todo;
var $author$project$Test$Runner$Node$checkHelperReplaceMe___ = function (_v0) {
	return _Debug_todo(
		'Test.Runner.Node',
		{
			start: {line: 362, column: 5},
			end: {line: 362, column: 15}
		})('The regex for replacing this Debug.todo with some real code must have failed since you see this message!\n\nPlease report this bug: https://github.com/rtfeldman/node-test-runner/issues/new\n');
};
var $author$project$Test$Runner$Node$check = value => value && value.__elmTestSymbol === __elmTestSymbol ? $elm$core$Maybe$Just(value) : $elm$core$Maybe$Nothing;
var $author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$hourlyData = {
	precipitation: _List_fromArray(
		[0, 0.1, 0.2, 0.3]),
	temperatures: _List_fromArray(
		[6.9, 6.4, 5.6, 5.4]),
	times: _List_fromArray(
		[1667772000, 1667775600, 1667779200, 1667782800])
};
var $author$project$WeatherDataTests$hourlyData = {
	precipitation: _List_fromArray(
		[0, 0, 0, 0]),
	temperatures: _List_fromArray(
		[6.9, 6.4, 5.6, 5.4]),
	times: _List_fromArray(
		[1667772000, 1667775600, 1667779200, 1667782800])
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Test$Runner$Node$Receive = function (a) {
	return {$: 'Receive', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$DuplicatedName = {$: 'DuplicatedName'};
var $elm_explorations$test$Test$Internal$ElmTestVariant__Batch = function (a) {
	return {__elmTestSymbol: __elmTestSymbol, $: 'ElmTestVariant__Batch', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$EmptyList = {$: 'EmptyList'};
var $elm_explorations$test$Test$Runner$Failure$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm_explorations$test$Test$Internal$duplicatedName = function (tests) {
	var names = function (test) {
		names:
		while (true) {
			switch (test.$) {
				case 'ElmTestVariant__Labeled':
					var str = test.a;
					return _List_fromArray(
						[str]);
				case 'ElmTestVariant__Batch':
					var subtests = test.a;
					return A2($elm$core$List$concatMap, names, subtests);
				case 'ElmTestVariant__UnitTest':
					return _List_Nil;
				case 'ElmTestVariant__FuzzTest':
					return _List_Nil;
				case 'ElmTestVariant__Skipped':
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				default:
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
			}
		}
	};
	var accumDuplicates = F2(
		function (newName, _v2) {
			var dups = _v2.a;
			var uniques = _v2.b;
			return A2($elm$core$Set$member, newName, uniques) ? _Utils_Tuple2(
				A2($elm$core$Set$insert, newName, dups),
				uniques) : _Utils_Tuple2(
				dups,
				A2($elm$core$Set$insert, newName, uniques));
		});
	var _v1 = A3(
		$elm$core$List$foldl,
		accumDuplicates,
		_Utils_Tuple2($elm$core$Set$empty, $elm$core$Set$empty),
		A2($elm$core$List$concatMap, names, tests));
	var dupsAccum = _v1.a;
	var uniquesAccum = _v1.b;
	return $elm$core$Set$isEmpty(dupsAccum) ? $elm$core$Result$Ok(uniquesAccum) : $elm$core$Result$Err(dupsAccum);
};
var $elm_explorations$test$Test$Internal$ElmTestVariant__UnitTest = function (a) {
	return {__elmTestSymbol: __elmTestSymbol, $: 'ElmTestVariant__UnitTest', a: a};
};
var $elm_explorations$test$Test$Expectation$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var $elm_explorations$test$Test$Distribution$NoDistribution = {$: 'NoDistribution'};
var $elm_explorations$test$Test$Expectation$fail = function (_v0) {
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm_explorations$test$Test$Expectation$Fail(
		{description: description, distributionReport: $elm_explorations$test$Test$Distribution$NoDistribution, given: $elm$core$Maybe$Nothing, reason: reason});
};
var $elm_explorations$test$Test$Internal$failNow = function (record) {
	return $elm_explorations$test$Test$Internal$ElmTestVariant__UnitTest(
		function (_v0) {
			return _List_fromArray(
				[
					$elm_explorations$test$Test$Expectation$fail(record)
				]);
		});
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm_explorations$test$Test$concat = function (tests) {
	if ($elm$core$List$isEmpty(tests)) {
		return $elm_explorations$test$Test$Internal$failNow(
			{
				description: 'This `concat` has no tests in it. Let\'s give it some!',
				reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
			});
	} else {
		var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
		if (_v0.$ === 'Err') {
			var dups = _v0.a;
			var dupDescription = function (duped) {
				return 'A test group contains multiple tests named \'' + (duped + '\'. Do some renaming so that tests have unique names.');
			};
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: A2(
						$elm$core$String$join,
						'\n',
						A2(
							$elm$core$List$map,
							dupDescription,
							$elm$core$Set$toList(dups))),
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
				});
		} else {
			return $elm_explorations$test$Test$Internal$ElmTestVariant__Batch(tests);
		}
	}
};
var $elm_explorations$test$Test$Runner$Failure$BadDescription = {$: 'BadDescription'};
var $elm_explorations$test$Test$Internal$ElmTestVariant__Labeled = F2(
	function (a, b) {
		return {__elmTestSymbol: __elmTestSymbol, $: 'ElmTestVariant__Labeled', a: a, b: b};
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$trim = _String_trim;
var $elm_explorations$test$Test$describe = F2(
	function (untrimmedDesc, tests) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		if ($elm$core$String$isEmpty(desc)) {
			return $elm_explorations$test$Test$Internal$failNow(
				{
					description: 'This `describe` has a blank description. Let\'s give it a useful one!',
					reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
				});
		} else {
			if ($elm$core$List$isEmpty(tests)) {
				return $elm_explorations$test$Test$Internal$failNow(
					{
						description: 'This `describe ' + (desc + '` has no tests in it. Let\'s give it some!'),
						reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
					});
			} else {
				var _v0 = $elm_explorations$test$Test$Internal$duplicatedName(tests);
				if (_v0.$ === 'Err') {
					var dups = _v0.a;
					var dupDescription = function (duped) {
						return 'Contains multiple tests named \'' + (duped + '\'. Let\'s rename them so we know which is which.');
					};
					return A2(
						$elm_explorations$test$Test$Internal$ElmTestVariant__Labeled,
						desc,
						$elm_explorations$test$Test$Internal$failNow(
							{
								description: A2(
									$elm$core$String$join,
									'\n',
									A2(
										$elm$core$List$map,
										dupDescription,
										$elm$core$Set$toList(dups))),
								reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
							}));
				} else {
					var childrenNames = _v0.a;
					return A2($elm$core$Set$member, desc, childrenNames) ? A2(
						$elm_explorations$test$Test$Internal$ElmTestVariant__Labeled,
						desc,
						$elm_explorations$test$Test$Internal$failNow(
							{
								description: 'The test \'' + (desc + '\' contains a child test of the same name. Let\'s rename them so we know which is which.'),
								reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$DuplicatedName)
							})) : A2(
						$elm_explorations$test$Test$Internal$ElmTestVariant__Labeled,
						desc,
						$elm_explorations$test$Test$Internal$ElmTestVariant__Batch(tests));
				}
			}
		}
	});
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Test$Runner$Node$elmTestPort__receive = _Platform_incomingPort('elmTestPort__receive', $elm$json$Json$Decode$value);
var $author$project$Test$Reporter$Reporter$TestReporter = F4(
	function (format, reportBegin, reportComplete, reportSummary) {
		return {format: format, reportBegin: reportBegin, reportComplete: reportComplete, reportSummary: reportSummary};
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Console$Text$Default = {$: 'Default'};
var $author$project$Console$Text$Normal = {$: 'Normal'};
var $author$project$Console$Text$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $author$project$Console$Text$plain = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Default, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$pluralize = F3(
	function (singular, plural, count) {
		var suffix = (count === 1) ? singular : plural;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					$elm$core$String$fromInt(count),
					suffix
				]));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Test$Runner$Node$Vendor$Console$colorsInverted = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[7m', str, '\u001B[27m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$dark = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[2m', str, '\u001B[22m']));
};
var $author$project$Console$Text$applyModifiersHelp = F2(
	function (modifier, str) {
		if (modifier.$ === 'Inverted') {
			return $author$project$Test$Runner$Node$Vendor$Console$colorsInverted(str);
		} else {
			return $author$project$Test$Runner$Node$Vendor$Console$dark(str);
		}
	});
var $author$project$Console$Text$applyModifiers = F2(
	function (modifiers, str) {
		return A3($elm$core$List$foldl, $author$project$Console$Text$applyModifiersHelp, str, modifiers);
	});
var $author$project$Test$Runner$Node$Vendor$Console$bold = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[1m', str, '\u001B[22m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$underline = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[4m', str, '\u001B[24m']));
};
var $author$project$Console$Text$applyStyle = F2(
	function (style, str) {
		switch (style.$) {
			case 'Normal':
				return str;
			case 'Bold':
				return $author$project$Test$Runner$Node$Vendor$Console$bold(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$underline(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$bgBlack = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[40m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgBlue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[44m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgCyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[46m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgGreen = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[42m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgMagenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[45m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgRed = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[41m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgWhite = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[47m', str, '\u001B[49m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$bgYellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[43m', str, '\u001B[49m']));
};
var $author$project$Console$Text$colorizeBackground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$bgRed(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$bgGreen(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$bgYellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlack(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$bgBlue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$bgMagenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$bgCyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$bgWhite(str);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Console$black = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[30m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$blue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[34m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$cyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[36m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$green = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[32m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$magenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[35m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$red = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[31m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$white = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[37m', str, '\u001B[39m']));
};
var $author$project$Test$Runner$Node$Vendor$Console$yellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[33m', str, '\u001B[39m']));
};
var $author$project$Console$Text$colorizeForeground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $author$project$Test$Runner$Node$Vendor$Console$red(str);
			case 'Green':
				return $author$project$Test$Runner$Node$Vendor$Console$green(str);
			case 'Yellow':
				return $author$project$Test$Runner$Node$Vendor$Console$yellow(str);
			case 'Black':
				return $author$project$Test$Runner$Node$Vendor$Console$black(str);
			case 'Blue':
				return $author$project$Test$Runner$Node$Vendor$Console$blue(str);
			case 'Magenta':
				return $author$project$Test$Runner$Node$Vendor$Console$magenta(str);
			case 'Cyan':
				return $author$project$Test$Runner$Node$Vendor$Console$cyan(str);
			default:
				return $author$project$Test$Runner$Node$Vendor$Console$white(str);
		}
	});
var $author$project$Console$Text$render = F2(
	function (useColor, txt) {
		if (txt.$ === 'Text') {
			var attrs = txt.a;
			var str = txt.b;
			if (useColor.$ === 'UseColor') {
				return A2(
					$author$project$Console$Text$applyStyle,
					attrs.style,
					A2(
						$author$project$Console$Text$applyModifiers,
						attrs.modifiers,
						A2(
							$author$project$Console$Text$colorizeForeground,
							attrs.foreground,
							A2($author$project$Console$Text$colorizeBackground, attrs.background, str))));
			} else {
				return str;
			}
		} else {
			var texts = txt.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$author$project$Console$Text$render(useColor),
					texts));
		}
	});
var $author$project$Test$Reporter$Console$textToValue = F2(
	function (useColor, txt) {
		return $elm$json$Json$Encode$string(
			A2($author$project$Console$Text$render, useColor, txt));
	});
var $author$project$Test$Reporter$Console$reportBegin = F2(
	function (useColor, _v0) {
		var globs = _v0.globs;
		var fuzzRuns = _v0.fuzzRuns;
		var testCount = _v0.testCount;
		var initialSeed = _v0.initialSeed;
		var prefix = 'Running ' + (A3($author$project$Test$Reporter$Console$pluralize, 'test', 'tests', testCount) + ('. To reproduce these results, run: elm-test --fuzz ' + ($elm$core$String$fromInt(fuzzRuns) + (' --seed ' + $elm$core$String$fromInt(initialSeed)))));
		return $elm$core$Maybe$Just(
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'type',
						$elm$json$Json$Encode$string('begin')),
						_Utils_Tuple2(
						'output',
						A2(
							$author$project$Test$Reporter$Console$textToValue,
							useColor,
							$author$project$Console$Text$plain(
								A2(
									$elm$core$String$join,
									' ',
									A2($elm$core$List$cons, prefix, globs)) + '\n')))
					])));
	});
var $author$project$Test$Reporter$JUnit$reportBegin = function (_v0) {
	return $elm$core$Maybe$Nothing;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$Test$Reporter$Json$reportBegin = function (_v0) {
	var globs = _v0.globs;
	var paths = _v0.paths;
	var fuzzRuns = _v0.fuzzRuns;
	var testCount = _v0.testCount;
	var initialSeed = _v0.initialSeed;
	return $elm$core$Maybe$Just(
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runStart')),
					_Utils_Tuple2(
					'testCount',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(testCount))),
					_Utils_Tuple2(
					'fuzzRuns',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(fuzzRuns))),
					_Utils_Tuple2(
					'globs',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, globs)),
					_Utils_Tuple2(
					'paths',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, paths)),
					_Utils_Tuple2(
					'initialSeed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(initialSeed)))
				])));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm_explorations$test$AsciiTable$AlignLeft = {$: 'AlignLeft'};
var $elm_explorations$test$AsciiTable$AlignRight = {$: 'AlignRight'};
var $elm_explorations$test$Test$Runner$Distribution$bars = 30;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$length = _String_length;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm$core$Basics$round = _Basics_round;
var $elm_explorations$test$Test$Runner$Distribution$barView = function (_v0) {
	var count = _v0.count;
	var runsElapsed = _v0.runsElapsed;
	var percentage = count / runsElapsed;
	var barsForPercentage = percentage * $elm_explorations$test$Test$Runner$Distribution$bars;
	var fullBars = $elm$core$Basics$round(barsForPercentage);
	return A3(
		$elm$core$String$padRight,
		$elm_explorations$test$Test$Runner$Distribution$bars,
		_Utils_chr('░'),
		A2($elm$core$String$repeat, fullBars, '█'));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$List$map3 = _List_map3;
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_explorations$test$MicroListExtra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_explorations$test$MicroListExtra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_explorations$test$MicroListExtra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm_explorations$test$AsciiTable$view = F2(
	function (columns, items) {
		var padFn = F3(
			function (length, align, string) {
				if (align.$ === 'AlignLeft') {
					return A3(
						$elm$core$String$padRight,
						length,
						_Utils_chr(' '),
						string);
				} else {
					return A3(
						$elm$core$String$padLeft,
						length,
						_Utils_chr(' '),
						string);
				}
			});
		var columnData = A2(
			$elm$core$List$map,
			function (col) {
				return A2($elm$core$List$map, col.toString, items);
			},
			columns);
		var columnLengths = A2(
			$elm$core$List$map,
			function (colRows) {
				return A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$List$maximum(
						A2($elm$core$List$map, $elm$core$String$length, colRows)));
			},
			columnData);
		var paddedColumnData = A4(
			$elm$core$List$map3,
			F3(
				function (col, colLength, colStrings) {
					return A2(
						$elm$core$List$map,
						A2(padFn, colLength, col.align),
						colStrings);
				}),
			columns,
			columnLengths,
			columnData);
		return A3(
			$elm$core$List$map2,
			F2(
				function (item, rowCells) {
					return {
						item: item,
						renderedRow: A2($elm$core$String$join, '  ', rowCells)
					};
				}),
			items,
			$elm_explorations$test$MicroListExtra$transpose(paddedColumnData));
	});
var $elm_explorations$test$Test$Runner$Distribution$viewLabels = function (labels) {
	return $elm$core$List$isEmpty(labels) ? '<uncategorized>' : A2($elm$core$String$join, ', ', labels);
};
var $elm_explorations$test$Test$Runner$Distribution$formatAsciiTable = F2(
	function (runsElapsed, items) {
		return A2(
			$elm_explorations$test$AsciiTable$view,
			_List_fromArray(
				[
					{
					align: $elm_explorations$test$AsciiTable$AlignLeft,
					toString: function (_v0) {
						var labels = _v0.a;
						return '  ' + ($elm_explorations$test$Test$Runner$Distribution$viewLabels(labels) + ':');
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignRight,
					toString: function (_v1) {
						var percentage = _v1.c;
						return $elm$core$String$fromFloat(percentage) + '%';
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignRight,
					toString: function (_v2) {
						var count = _v2.b;
						return '(' + ($elm$core$String$fromInt(count) + 'x)');
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignLeft,
					toString: function (_v3) {
						var count = _v3.b;
						return $elm_explorations$test$Test$Runner$Distribution$barView(
							{count: count, runsElapsed: runsElapsed});
					}
				}
				]),
			items);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Basics$not = _Basics_not;
var $elm_explorations$test$Test$Runner$Distribution$isStrictSubset = F2(
	function (all, combination) {
		var combinationSet = $elm$core$Set$fromList(combination);
		var containsCombinationFully = function (set) {
			return (!$elm$core$Set$isEmpty(
				A2($elm$core$Set$diff, set, combinationSet))) && $elm$core$Set$isEmpty(
				A2($elm$core$Set$diff, combinationSet, set));
		};
		var allSets = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Set$fromList),
			all);
		return A2($elm$core$List$any, containsCombinationFully, allSets);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$core$List$sortBy = _List_sortBy;
var $elm_explorations$test$MicroListExtra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_explorations$test$MicroListExtra$findIndex = $elm_explorations$test$MicroListExtra$findIndexHelp(0);
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_explorations$test$MicroListExtra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_explorations$test$MicroListExtra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			$elm$core$Maybe$map,
			function (i) {
				return A2($elm_explorations$test$MicroListExtra$splitAt, i, list);
			},
			A2($elm_explorations$test$MicroListExtra$findIndex, predicate, list));
	});
var $elm_explorations$test$Test$Runner$Distribution$formatTable = function (_v0) {
	var runsElapsed = _v0.runsElapsed;
	var distributionCount = _v0.distributionCount;
	var runsElapsed_ = runsElapsed;
	var distributionList = $elm$core$Dict$toList(distributionCount);
	var distribution = A2(
		$elm$core$List$map,
		function (_v8) {
			var labels = _v8.a;
			var count = _v8.b;
			var percentage = $elm$core$Basics$round((count / runsElapsed_) * 1000) / 10;
			return _Utils_Tuple3(labels, count, percentage);
		},
		A2(
			$elm$core$List$filter,
			function (_v7) {
				var labels = _v7.a;
				var count = _v7.b;
				return !(($elm$core$List$length(labels) === 1) && ((!count) && A2($elm_explorations$test$Test$Runner$Distribution$isStrictSubset, distributionList, labels)));
			},
			distributionList));
	var _v1 = A2(
		$elm$core$List$partition,
		function (_v3) {
			var labels = _v3.a;
			return $elm$core$List$length(labels) <= 1;
		},
		A2(
			$elm$core$List$sortBy,
			function (_v2) {
				var count = _v2.b;
				return -count;
			},
			distribution));
	var baseRows = _v1.a;
	var combinationsRows = _v1.b;
	var reorderedTable = _Utils_ap(baseRows, combinationsRows);
	var rawTable = A2($elm_explorations$test$Test$Runner$Distribution$formatAsciiTable, runsElapsed_, reorderedTable);
	var _v4 = A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2(rawTable, _List_Nil),
		A2(
			$elm_explorations$test$MicroListExtra$splitWhen,
			function (_v5) {
				var item = _v5.item;
				var _v6 = item;
				var labels = _v6.a;
				return $elm$core$List$length(labels) > 1;
			},
			rawTable));
	var base = _v4.a;
	var combinations = _v4.b;
	var baseString = A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function ($) {
				return $.renderedRow;
			},
			base));
	var combinationsString_ = $elm$core$List$isEmpty(combinations) ? '' : A3(
		$elm$core$String$replace,
		'{COMBINATIONS}',
		A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.renderedRow;
				},
				combinations)),
		'\n\nCombinations (included in the above base counts):\n{COMBINATIONS}');
	var table = _Utils_ap(baseString, combinationsString_);
	return A3($elm$core$String$replace, '{CATEGORIES}', table, 'Distribution report:\n====================\n{CATEGORIES}');
};
var $elm_explorations$test$Test$Distribution$distributionReportTable = function (r) {
	return $elm_explorations$test$Test$Runner$Distribution$formatTable(r);
};
var $author$project$Test$Reporter$Console$distributionReportToString = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return $elm$core$Maybe$Nothing;
		case 'DistributionToReport':
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
		case 'DistributionCheckSucceeded':
			return $elm$core$Maybe$Nothing;
		default:
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
	}
};
var $author$project$Console$Text$Texts = function (a) {
	return {$: 'Texts', a: a};
};
var $author$project$Console$Text$concat = $author$project$Console$Text$Texts;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $author$project$Console$Text$Dark = {$: 'Dark'};
var $author$project$Console$Text$dark = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{
					modifiers: A2($elm$core$List$cons, $author$project$Console$Text$Dark, styles.modifiers)
				}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $elm_explorations$test$Test$Runner$formatLabels = F3(
	function (formatDescription, formatTest, labels) {
		var _v0 = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			labels);
		if (!_v0.b) {
			return _List_Nil;
		} else {
			var test = _v0.a;
			var descriptions = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					formatTest(test),
					A2($elm$core$List$map, formatDescription, descriptions)));
		}
	});
var $author$project$Console$Text$Red = {$: 'Red'};
var $author$project$Console$Text$red = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Red, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$withChar = F2(
	function (icon, str) {
		return $elm$core$String$fromChar(icon) + (' ' + (str + '\n'));
	});
var $author$project$Test$Reporter$Console$failureLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$author$project$Console$Text$red,
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('✗')))),
	$author$project$Console$Text$concat);
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Test$Runner$Node$Vendor$Diff$Added = function (a) {
	return {$: 'Added', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetA = function (a) {
	return {$: 'CannotGetA', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$CannotGetB = function (a) {
	return {$: 'CannotGetB', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$NoChange = function (a) {
	return {$: 'NoChange', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Removed = function (a) {
	return {$: 'Removed', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 'UnexpectedPath', a: a, b: b};
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (_v4.$ === 'Just') {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$author$project$Test$Runner$Node$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (_v5.$ === 'Just') {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$author$project$Test$Runner$Node$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$author$project$Test$Runner$Node$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (_v6.$ === 'Just') {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$author$project$Test$Runner$Node$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$author$project$Test$Runner$Node$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Test$Runner$Node$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (change.$ === 'Err') {
					var err = change.a;
					return $elm$core$Result$Err(err);
				} else {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($author$project$Test$Runner$Node$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $author$project$Test$Runner$Node$Vendor$Diff$Found = function (a) {
	return {$: 'Found', a: a};
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $author$project$Test$Runner$Node$Vendor$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $author$project$Test$Runner$Node$Vendor$Diff$Found(newPath) : $author$project$Test$Runner$Node$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $author$project$Test$Runner$Node$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($author$project$Test$Runner$Node$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 'Found') {
					var path = _v1.a;
					return $author$project$Test$Runner$Node$Vendor$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($author$project$Test$Runner$Node$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 'Found') {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Just') {
					if (_v0.b.$ === 'Just') {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $author$project$Test$Runner$Node$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$author$project$Test$Runner$Node$Vendor$Diff$onpLoopP,
			A2($author$project$Test$Runner$Node$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($author$project$Test$Runner$Node$Vendor$Diff$onp, getA, getB, m, n);
		return A3($author$project$Test$Runner$Node$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $author$project$Test$Runner$Node$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($author$project$Test$Runner$Node$Vendor$Diff$testDiff, a, b);
		if (_v0.$ === 'Ok') {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Test$Reporter$Highlightable$Highlighted = function (a) {
	return {$: 'Highlighted', a: a};
};
var $author$project$Test$Reporter$Highlightable$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $author$project$Test$Reporter$Highlightable$fromDiff = function (diff) {
	switch (diff.$) {
		case 'Added':
			return _List_Nil;
		case 'Removed':
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Highlighted(_char)
				]);
		default:
			var _char = diff.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Highlightable$Plain(_char)
				]);
	}
};
var $author$project$Test$Reporter$Highlightable$diffLists = F2(
	function (expected, actual) {
		return A2(
			$elm$core$List$concatMap,
			$author$project$Test$Reporter$Highlightable$fromDiff,
			A2($author$project$Test$Runner$Node$Vendor$Diff$diff, expected, actual));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $author$project$Test$Reporter$Console$Format$isFloat = function (str) {
	var _v0 = $elm$core$String$toFloat(str);
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Test$Reporter$Highlightable$map = F2(
	function (transform, highlightable) {
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Highlighted(
				transform(val));
		} else {
			var val = highlightable.a;
			return $author$project$Test$Reporter$Highlightable$Plain(
				transform(val));
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Test$Reporter$Highlightable$resolve = F2(
	function (_v0, highlightable) {
		var fromHighlighted = _v0.fromHighlighted;
		var fromPlain = _v0.fromPlain;
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return fromHighlighted(val);
		} else {
			var val = highlightable.a;
			return fromPlain(val);
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Test$Reporter$Console$Format$highlightEqual = F2(
	function (expected, actual) {
		if ((expected === '\"\"') || (actual === '\"\"')) {
			return $elm$core$Maybe$Nothing;
		} else {
			if ($author$project$Test$Reporter$Console$Format$isFloat(expected) && $author$project$Test$Reporter$Console$Format$isFloat(actual)) {
				return $elm$core$Maybe$Nothing;
			} else {
				var isHighlighted = $author$project$Test$Reporter$Highlightable$resolve(
					{
						fromHighlighted: $elm$core$Basics$always(true),
						fromPlain: $elm$core$Basics$always(false)
					});
				var expectedChars = $elm$core$String$toList(expected);
				var edgeCount = function (highlightedString) {
					var highlights = A2($elm$core$List$map, isHighlighted, highlightedString);
					return $elm$core$List$length(
						A2(
							$elm$core$List$filter,
							function (_v0) {
								var lhs = _v0.a;
								var rhs = _v0.b;
								return !_Utils_eq(lhs, rhs);
							},
							A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								A2($elm$core$List$drop, 1, highlights),
								highlights)));
				};
				var actualChars = $elm$core$String$toList(actual);
				var highlightedActual = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, actualChars, expectedChars));
				var highlightedExpected = A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Highlightable$map($elm$core$String$fromChar),
					A2($author$project$Test$Reporter$Highlightable$diffLists, expectedChars, actualChars));
				var plainCharCount = $elm$core$List$length(
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, isHighlighted),
						highlightedExpected));
				return ((_Utils_cmp(
					edgeCount(highlightedActual),
					plainCharCount) > 0) || (_Utils_cmp(
					edgeCount(highlightedExpected),
					plainCharCount) > 0)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(highlightedExpected, highlightedActual));
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[actual, '╷', '│ ' + comparison, '╵', expected]));
	});
var $author$project$Test$Reporter$Console$Format$listDiffToString = F4(
	function (index, description, _v0, originals) {
		listDiffToString:
		while (true) {
			var expected = _v0.expected;
			var actual = _v0.actual;
			var _v1 = _Utils_Tuple2(expected, actual);
			if (!_v1.a.b) {
				if (!_v1.b.b) {
					return A2(
						$elm$core$String$join,
						'',
						_List_fromArray(
							[
								'Two lists were unequal previously, yet ended up equal later.',
								'This should never happen!',
								'Please report this bug to https://github.com/elm-community/elm-test/issues - and include these lists: ',
								'\n',
								A2($elm$core$String$join, ', ', originals.originalExpected),
								'\n',
								A2($elm$core$String$join, ', ', originals.originalActual)
							]));
				} else {
					var _v3 = _v1.b;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was longer than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				}
			} else {
				if (!_v1.b.b) {
					var _v2 = _v1.a;
					return A3(
						$author$project$Test$Reporter$Console$Format$verticalBar,
						description + ' was shorter than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				} else {
					var _v4 = _v1.a;
					var firstExpected = _v4.a;
					var restExpected = _v4.b;
					var _v5 = _v1.b;
					var firstActual = _v5.a;
					var restActual = _v5.b;
					if (_Utils_eq(firstExpected, firstActual)) {
						var $temp$index = index + 1,
							$temp$description = description,
							$temp$_v0 = {actual: restActual, expected: restExpected},
							$temp$originals = originals;
						index = $temp$index;
						description = $temp$description;
						_v0 = $temp$_v0;
						originals = $temp$originals;
						continue listDiffToString;
					} else {
						return A2(
							$elm$core$String$join,
							'',
							_List_fromArray(
								[
									A3(
									$author$project$Test$Reporter$Console$Format$verticalBar,
									description,
									A2($elm$core$String$join, ', ', originals.originalExpected),
									A2($elm$core$String$join, ', ', originals.originalActual)),
									'\n\nThe first diff is at index ',
									$elm$core$String$fromInt(index),
									': it was `',
									firstActual,
									'`, but `',
									firstExpected,
									'` was expected.'
								]));
					}
				}
			}
		}
	});
var $author$project$Test$Reporter$Console$Format$format = F3(
	function (formatEquality, description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				var _v1 = A2($author$project$Test$Reporter$Console$Format$highlightEqual, expected, actual);
				if (_v1.$ === 'Nothing') {
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual);
				} else {
					var _v2 = _v1.a;
					var highlightedExpected = _v2.a;
					var highlightedActual = _v2.b;
					var _v3 = A2(formatEquality, highlightedExpected, highlightedActual);
					var formattedExpected = _v3.a;
					var formattedActual = _v3.b;
					return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, formattedExpected, formattedActual);
				}
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A3($author$project$Test$Reporter$Console$Format$verticalBar, description, first, second);
			case 'TODO':
				return description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v4 = reason.a;
					return (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
				} else {
					return description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A4(
					$author$project$Test$Reporter$Console$Format$listDiffToString,
					0,
					description,
					{actual: actual, expected: expected},
					{originalActual: actual, originalExpected: expected});
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				var missingStr = $elm$core$List$isEmpty(missing) ? '' : ('\nThese keys are missing: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', missing)));
				var extraStr = $elm$core$List$isEmpty(extra) ? '' : ('\nThese keys are extra: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', extra)));
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							A3($author$project$Test$Reporter$Console$Format$verticalBar, description, expected, actual),
							'\n',
							extraStr,
							missingStr
						]));
		}
	});
var $author$project$Test$Reporter$Console$Format$Color$fromHighlightable = $author$project$Test$Reporter$Highlightable$resolve(
	{fromHighlighted: $author$project$Test$Runner$Node$Vendor$Console$colorsInverted, fromPlain: $elm$core$Basics$identity});
var $author$project$Test$Reporter$Console$Format$Color$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var formattedExpected = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedExpected));
		var formattedActual = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $author$project$Test$Reporter$Console$Format$Color$fromHighlightable, highlightedActual));
		return _Utils_Tuple2(formattedExpected, formattedActual);
	});
var $author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable = function (indicator) {
	return $author$project$Test$Reporter$Highlightable$resolve(
		{
			fromHighlighted: function (_char) {
				return _Utils_Tuple2(_char, indicator);
			},
			fromPlain: function (_char) {
				return _Utils_Tuple2(_char, ' ');
			}
		});
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var _v0 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▲'),
				highlightedExpected));
		var formattedExpected = _v0.a;
		var expectedIndicators = _v0.b;
		var combinedExpected = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', formattedExpected),
					A2($elm$core$String$join, '', expectedIndicators)
				]));
		var _v1 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$author$project$Test$Reporter$Console$Format$Monochrome$fromHighlightable('▼'),
				highlightedActual));
		var formattedActual = _v1.a;
		var actualIndicators = _v1.b;
		var combinedActual = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', actualIndicators),
					A2($elm$core$String$join, '', formattedActual)
				]));
		return _Utils_Tuple2(combinedExpected, combinedActual);
	});
var $author$project$Test$Reporter$Console$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			$elm$core$Basics$append('    '),
			A2($elm$core$String$split, '\n', str)));
};
var $author$project$Test$Reporter$Console$failureToText = F2(
	function (useColor, _v0) {
		var given = _v0.a.given;
		var description = _v0.a.description;
		var reason = _v0.a.reason;
		var distributionReport = _v0.b;
		var givenText = A2(
			$elm$core$Maybe$map,
			function (str) {
				return $author$project$Console$Text$dark(
					$author$project$Console$Text$plain('\nGiven ' + (str + '\n')));
			},
			given);
		var formatEquality = function () {
			if (useColor.$ === 'Monochrome') {
				return $author$project$Test$Reporter$Console$Format$Monochrome$formatEquality;
			} else {
				return $author$project$Test$Reporter$Console$Format$Color$formatEquality;
			}
		}();
		var messageText = $author$project$Console$Text$plain(
			'\n' + ($author$project$Test$Reporter$Console$indent(
				A3($author$project$Test$Reporter$Console$Format$format, formatEquality, description, reason)) + '\n\n'));
		var distributionText = A2(
			$elm$core$Maybe$map,
			function (str) {
				return $author$project$Console$Text$dark(
					$author$project$Console$Text$plain(
						'\n' + ($author$project$Test$Reporter$Console$indent(str) + '\n')));
			},
			$author$project$Test$Reporter$Console$distributionReportToString(distributionReport));
		return $author$project$Console$Text$concat(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						distributionText,
						givenText,
						$elm$core$Maybe$Just(messageText)
					])));
	});
var $author$project$Test$Reporter$Console$failuresToText = F3(
	function (useColor, labels, failures) {
		return $author$project$Console$Text$concat(
			A2(
				$elm$core$List$cons,
				$author$project$Test$Reporter$Console$failureLabelsToText(labels),
				A2(
					$elm$core$List$map,
					$author$project$Test$Reporter$Console$failureToText(useColor),
					failures)));
	});
var $author$project$Test$Reporter$Console$getStatus = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			return 'fail';
		case 'Todo':
			return 'todo';
		default:
			return 'pass';
	}
};
var $author$project$Console$Text$Green = {$: 'Green'};
var $author$project$Console$Text$green = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Green, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$passedLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$author$project$Console$Text$green,
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('✓')))),
	$author$project$Console$Text$concat);
var $author$project$Test$Reporter$Console$passedToText = F2(
	function (labels, distributionReport) {
		return $author$project$Console$Text$concat(
			_List_fromArray(
				[
					$author$project$Test$Reporter$Console$passedLabelsToText(labels),
					$author$project$Console$Text$dark(
					$author$project$Console$Text$plain(
						'\n' + ($author$project$Test$Reporter$Console$indent(distributionReport) + '\n\n')))
				]));
	});
var $author$project$Test$Reporter$Console$reportComplete = F2(
	function (useColor, _v0) {
		var labels = _v0.labels;
		var outcome = _v0.outcome;
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('complete')),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						'status',
						$elm$json$Json$Encode$string(
							$author$project$Test$Reporter$Console$getStatus(outcome))),
					function () {
						switch (outcome.$) {
							case 'Passed':
								var distributionReport = outcome.a;
								var _v2 = $author$project$Test$Reporter$Console$distributionReportToString(distributionReport);
								if (_v2.$ === 'Nothing') {
									return _List_Nil;
								} else {
									var report = _v2.a;
									return _List_fromArray(
										[
											_Utils_Tuple2(
											'distributionReport',
											A2(
												$author$project$Test$Reporter$Console$textToValue,
												useColor,
												A2($author$project$Test$Reporter$Console$passedToText, labels, report)))
										]);
								}
							case 'Failed':
								var failures = outcome.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'failure',
										A2(
											$author$project$Test$Reporter$Console$textToValue,
											useColor,
											A3($author$project$Test$Reporter$Console$failuresToText, useColor, labels, failures)))
									]);
							default:
								var str = outcome.a;
								return _List_fromArray(
									[
										_Utils_Tuple2(
										'todo',
										$elm$json$Json$Encode$string(str)),
										_Utils_Tuple2(
										'labels',
										A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, labels))
									]);
						}
					}())));
	});
var $author$project$Test$Reporter$JUnit$encodeDuration = function (time) {
	return $elm$json$Json$Encode$string(
		$elm$core$String$fromFloat(time / 1000));
};
var $author$project$Test$Reporter$JUnit$distributionReportToString = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return $elm$core$Maybe$Nothing;
		case 'DistributionToReport':
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
		case 'DistributionCheckSucceeded':
			return $elm$core$Maybe$Nothing;
		default:
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
	}
};
var $author$project$Test$Reporter$JUnit$encodeDistributionReport = function (reportText) {
	return _Utils_Tuple2(
		'system-out',
		$elm$json$Json$Encode$string(reportText));
};
var $author$project$Test$Reporter$JUnit$encodeFailureTuple = function (message) {
	return _Utils_Tuple2(
		'failure',
		$elm$json$Json$Encode$string(message));
};
var $author$project$Test$Reporter$JUnit$reasonToString = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return expected + ('\n\nwas not equal to\n\n' + actual);
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return first + ('\n\nfailed when compared with ' + (description + (' on\n\n' + second)));
			case 'TODO':
				return 'TODO: ' + description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return 'Invalid test: ' + explanation;
				} else {
					return 'Invalid test: ' + description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2($elm$core$String$join, ', ', expected) + ('\n\nhad different elements than\n\n' + A2($elm$core$String$join, ', ', actual));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return expected + ('\n\nhad different contents than\n\n' + (actual + ('\n\nthese were extra:\n\n' + (A2($elm$core$String$join, '\n', extra) + ('\n\nthese were missing:\n\n' + A2($elm$core$String$join, '\n', missing))))));
		}
	});
var $author$project$Test$Reporter$JUnit$formatFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	var message = A2($author$project$Test$Reporter$JUnit$reasonToString, description, reason);
	if (given.$ === 'Just') {
		var str = given.a;
		return 'Given ' + (str + ('\n\n' + message));
	} else {
		return message;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Test$Reporter$JUnit$encodeOutcome = function (outcome) {
	switch (outcome.$) {
		case 'Passed':
			var distributionReport = outcome.a;
			return A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					$elm$core$Maybe$map,
					A2($elm$core$Basics$composeR, $author$project$Test$Reporter$JUnit$encodeDistributionReport, $elm$core$List$singleton),
					$author$project$Test$Reporter$JUnit$distributionReportToString(distributionReport)));
		case 'Failed':
			var failures = outcome.a;
			var message = A2(
				$elm$core$String$join,
				'\n\n\n',
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Test$Reporter$JUnit$formatFailure),
					failures));
			var distributionReports = A2(
				$elm$core$String$join,
				'\n\n\n',
				A2(
					$elm$core$List$filterMap,
					A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $author$project$Test$Reporter$JUnit$distributionReportToString),
					failures));
			var nonemptyDistributionReports = $elm$core$String$isEmpty(distributionReports) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(distributionReports);
			return A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						$elm$core$Maybe$Just(
						$author$project$Test$Reporter$JUnit$encodeFailureTuple(message)),
						A2($elm$core$Maybe$map, $author$project$Test$Reporter$JUnit$encodeDistributionReport, nonemptyDistributionReports)
					]));
		default:
			var message = outcome.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$JUnit$encodeFailureTuple('TODO: ' + message)
				]);
	}
};
var $author$project$Test$Reporter$JUnit$formatClassAndName = function (labels) {
	if (labels.b) {
		var head = labels.a;
		var rest = labels.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$String$join,
				' ',
				$elm$core$List$reverse(rest)),
			head);
	} else {
		return _Utils_Tuple2('', '');
	}
};
var $author$project$Test$Reporter$JUnit$reportComplete = function (_v0) {
	var labels = _v0.labels;
	var duration = _v0.duration;
	var outcome = _v0.outcome;
	var _v1 = $author$project$Test$Reporter$JUnit$formatClassAndName(labels);
	var classname = _v1.a;
	var name = _v1.b;
	return $elm$json$Json$Encode$object(
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'@classname',
					$elm$json$Json$Encode$string(classname)),
					_Utils_Tuple2(
					'@name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'@time',
					$author$project$Test$Reporter$JUnit$encodeDuration(duration))
				]),
			$author$project$Test$Reporter$JUnit$encodeOutcome(outcome)));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$Test$Reporter$Json$encodeDistributionCount = function (dict) {
	return A2(
		$elm$json$Json$Encode$list,
		function (_v0) {
			var labels = _v0.a;
			var count = _v0.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'labels',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, labels)),
						_Utils_Tuple2(
						'count',
						$elm$json$Json$Encode$int(count))
					]));
		},
		$elm$core$Dict$toList(dict));
};
var $author$project$Test$Reporter$Json$encodeSumType = F2(
	function (sumType, data) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(sumType)),
					_Utils_Tuple2('data', data)
				]));
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Test$Reporter$Json$encodeDistributionReport = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return A2($author$project$Test$Reporter$Json$encodeSumType, 'NoDistribution', $elm$json$Json$Encode$null);
		case 'DistributionToReport':
			var r = distributionReport.a;
			return A2(
				$author$project$Test$Reporter$Json$encodeSumType,
				'DistributionToReport',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$author$project$Test$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed))
						])));
		case 'DistributionCheckSucceeded':
			var r = distributionReport.a;
			return A2(
				$author$project$Test$Reporter$Json$encodeSumType,
				'DistributionCheckSucceeded',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$author$project$Test$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed))
						])));
		default:
			var r = distributionReport.a;
			return A2(
				$author$project$Test$Reporter$Json$encodeSumType,
				'DistributionCheckFailed',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$author$project$Test$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed)),
							_Utils_Tuple2(
							'badLabel',
							$elm$json$Json$Encode$string(r.badLabel)),
							_Utils_Tuple2(
							'badLabelPercentage',
							$elm$json$Json$Encode$float(r.badLabelPercentage)),
							_Utils_Tuple2(
							'expectedDistribution',
							$elm$json$Json$Encode$string(r.expectedDistribution))
						])));
	}
};
var $author$project$Test$Reporter$Json$encodeDistributionReports = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			var failures = outcome.a;
			return A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $author$project$Test$Reporter$Json$encodeDistributionReport),
				failures);
		case 'Todo':
			return _List_Nil;
		default:
			var distributionReport = outcome.a;
			return _List_fromArray(
				[
					$author$project$Test$Reporter$Json$encodeDistributionReport(distributionReport)
				]);
	}
};
var $author$project$Test$Reporter$Json$encodeReason = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'Custom',
					$elm$json$Json$Encode$string(description));
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'Equality',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'Comparison',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'first',
								$elm$json$Json$Encode$string(first)),
								_Utils_Tuple2(
								'second',
								$elm$json$Json$Encode$string(second)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'TODO':
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'TODO',
					$elm$json$Json$Encode$string(description));
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return A2(
						$author$project$Test$Reporter$Json$encodeSumType,
						'Invalid',
						$elm$json$Json$Encode$string(explanation));
				} else {
					return A2(
						$author$project$Test$Reporter$Json$encodeSumType,
						'Invalid',
						$elm$json$Json$Encode$string(description));
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'ListDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, expected)),
								_Utils_Tuple2(
								'actual',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, actual))
							])));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return A2(
					$author$project$Test$Reporter$Json$encodeSumType,
					'CollectionDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'extra',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, extra)),
								_Utils_Tuple2(
								'missing',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, missing))
							])));
		}
	});
var $author$project$Test$Reporter$Json$encodeFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'given',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, given))),
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(description)),
				_Utils_Tuple2(
				'reason',
				A2($author$project$Test$Reporter$Json$encodeReason, description, reason))
			]));
};
var $author$project$Test$Reporter$Json$encodeFailures = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			var failures = outcome.a;
			return A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Test$Reporter$Json$encodeFailure),
				failures);
		case 'Todo':
			var str = outcome.a;
			return _List_fromArray(
				[
					$elm$json$Json$Encode$string(str)
				]);
		default:
			return _List_Nil;
	}
};
var $author$project$Test$Reporter$Json$encodeLabels = function (labels) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$json$Json$Encode$string,
		$elm$core$List$reverse(labels));
};
var $author$project$Test$Reporter$Json$getStatus = function (outcome) {
	switch (outcome.$) {
		case 'Failed':
			return 'fail';
		case 'Todo':
			return 'todo';
		default:
			return 'pass';
	}
};
var $author$project$Test$Reporter$Json$reportComplete = function (_v0) {
	var duration = _v0.duration;
	var labels = _v0.labels;
	var outcome = _v0.outcome;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'event',
				$elm$json$Json$Encode$string('testCompleted')),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(
					$author$project$Test$Reporter$Json$getStatus(outcome))),
				_Utils_Tuple2(
				'labels',
				$author$project$Test$Reporter$Json$encodeLabels(labels)),
				_Utils_Tuple2(
				'failures',
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					$author$project$Test$Reporter$Json$encodeFailures(outcome))),
				_Utils_Tuple2(
				'distributionReports',
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					$author$project$Test$Reporter$Json$encodeDistributionReports(outcome))),
				_Utils_Tuple2(
				'duration',
				$elm$json$Json$Encode$string(
					$elm$core$String$fromInt(duration)))
			]));
};
var $author$project$Test$Reporter$Console$formatDuration = function (time) {
	return $elm$core$String$fromFloat(time) + ' ms';
};
var $author$project$Test$Reporter$Console$stat = F2(
	function (label, value) {
		return $author$project$Console$Text$concat(
			_List_fromArray(
				[
					$author$project$Console$Text$dark(
					$author$project$Console$Text$plain(label)),
					$author$project$Console$Text$plain(value + '\n')
				]));
	});
var $author$project$Test$Reporter$Console$todoLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $author$project$Console$Text$dark, $author$project$Console$Text$plain),
			$author$project$Test$Reporter$Console$withChar(
				_Utils_chr('↓')))),
	$author$project$Console$Text$concat);
var $author$project$Test$Reporter$Console$todoToChalk = function (message) {
	return $author$project$Console$Text$plain('◦ TODO: ' + (message + '\n\n'));
};
var $author$project$Test$Reporter$Console$todosToText = function (_v0) {
	var labels = _v0.a;
	var failure = _v0.b;
	return $author$project$Console$Text$concat(
		_List_fromArray(
			[
				$author$project$Test$Reporter$Console$todoLabelsToText(labels),
				$author$project$Test$Reporter$Console$todoToChalk(failure)
			]));
};
var $author$project$Test$Reporter$Console$summarizeTodos = A2(
	$elm$core$Basics$composeR,
	$elm$core$List$map($author$project$Test$Reporter$Console$todosToText),
	$author$project$Console$Text$concat);
var $author$project$Console$Text$Underline = {$: 'Underline'};
var $author$project$Console$Text$underline = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$author$project$Console$Text$Text,
			_Utils_update(
				styles,
				{style: $author$project$Console$Text$Underline}),
			str);
	} else {
		var texts = txt.a;
		return $author$project$Console$Text$Texts(
			A2($elm$core$List$map, $author$project$Console$Text$dark, texts));
	}
};
var $author$project$Console$Text$Yellow = {$: 'Yellow'};
var $author$project$Console$Text$yellow = $author$project$Console$Text$Text(
	{background: $author$project$Console$Text$Default, foreground: $author$project$Console$Text$Yellow, modifiers: _List_Nil, style: $author$project$Console$Text$Normal});
var $author$project$Test$Reporter$Console$reportSummary = F3(
	function (useColor, _v0, autoFail) {
		var todos = _v0.todos;
		var passed = _v0.passed;
		var failed = _v0.failed;
		var duration = _v0.duration;
		var todoStats = function () {
			var _v7 = $elm$core$List$length(todos);
			if (!_v7) {
				return $author$project$Console$Text$plain('');
			} else {
				var numTodos = _v7;
				return A2(
					$author$project$Test$Reporter$Console$stat,
					'Todo:     ',
					$elm$core$String$fromInt(numTodos));
			}
		}();
		var individualTodos = (failed > 0) ? $author$project$Console$Text$plain('') : $author$project$Test$Reporter$Console$summarizeTodos(
			$elm$core$List$reverse(todos));
		var headlineResult = function () {
			var _v3 = _Utils_Tuple3(
				autoFail,
				failed,
				$elm$core$List$length(todos));
			_v3$4:
			while (true) {
				if (_v3.a.$ === 'Nothing') {
					if (!_v3.b) {
						switch (_v3.c) {
							case 0:
								var _v4 = _v3.a;
								return $elm$core$Result$Ok('TEST RUN PASSED');
							case 1:
								var _v5 = _v3.a;
								return $elm$core$Result$Err(
									_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because there is 1 TODO remaining'));
							default:
								var _v6 = _v3.a;
								var numTodos = _v3.c;
								return $elm$core$Result$Err(
									_Utils_Tuple3(
										$author$project$Console$Text$yellow,
										'TEST RUN INCOMPLETE',
										' because there are ' + ($elm$core$String$fromInt(numTodos) + ' TODOs remaining')));
						}
					} else {
						break _v3$4;
					}
				} else {
					if (!_v3.b) {
						var failure = _v3.a.a;
						return $elm$core$Result$Err(
							_Utils_Tuple3($author$project$Console$Text$yellow, 'TEST RUN INCOMPLETE', ' because ' + failure));
					} else {
						break _v3$4;
					}
				}
			}
			return $elm$core$Result$Err(
				_Utils_Tuple3($author$project$Console$Text$red, 'TEST RUN FAILED', ''));
		}();
		var headline = function () {
			if (headlineResult.$ === 'Ok') {
				var str = headlineResult.a;
				return $author$project$Console$Text$underline(
					$author$project$Console$Text$green('\n' + (str + '\n\n')));
			} else {
				var _v2 = headlineResult.a;
				var colorize = _v2.a;
				var str = _v2.b;
				var suffix = _v2.c;
				return $author$project$Console$Text$concat(
					_List_fromArray(
						[
							$author$project$Console$Text$underline(
							colorize('\n' + str)),
							colorize(suffix + '\n\n')
						]));
			}
		}();
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('summary')),
					_Utils_Tuple2(
					'summary',
					$elm$json$Json$Encode$string(
						A2(
							$author$project$Console$Text$render,
							useColor,
							$author$project$Console$Text$concat(
								_List_fromArray(
									[
										headline,
										A2(
										$author$project$Test$Reporter$Console$stat,
										'Duration: ',
										$author$project$Test$Reporter$Console$formatDuration(duration)),
										A2(
										$author$project$Test$Reporter$Console$stat,
										'Passed:   ',
										$elm$core$String$fromInt(passed)),
										A2(
										$author$project$Test$Reporter$Console$stat,
										'Failed:   ',
										$elm$core$String$fromInt(failed)),
										todoStats,
										individualTodos
									])))))
				]));
	});
var $author$project$Test$Reporter$TestResults$Failed = function (a) {
	return {$: 'Failed', a: a};
};
var $author$project$Test$Reporter$JUnit$encodeExtraFailure = function (_v0) {
	return $author$project$Test$Reporter$JUnit$reportComplete(
		{
			duration: 0,
			labels: _List_Nil,
			outcome: $author$project$Test$Reporter$TestResults$Failed(_List_Nil)
		});
};
var $author$project$Test$Reporter$JUnit$reportSummary = F2(
	function (_v0, autoFail) {
		var testCount = _v0.testCount;
		var duration = _v0.duration;
		var failed = _v0.failed;
		var extraFailures = function () {
			var _v1 = _Utils_Tuple2(failed, autoFail);
			if ((!_v1.a) && (_v1.b.$ === 'Just')) {
				var failure = _v1.b.a;
				return _List_fromArray(
					[
						$author$project$Test$Reporter$JUnit$encodeExtraFailure(failure)
					]);
			} else {
				return _List_Nil;
			}
		}();
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'testsuite',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'@name',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@package',
								$elm$json$Json$Encode$string('elm-test')),
								_Utils_Tuple2(
								'@tests',
								$elm$json$Json$Encode$int(testCount)),
								_Utils_Tuple2(
								'@failures',
								$elm$json$Json$Encode$int(failed)),
								_Utils_Tuple2(
								'@errors',
								$elm$json$Json$Encode$int(0)),
								_Utils_Tuple2(
								'@time',
								$elm$json$Json$Encode$float(duration)),
								_Utils_Tuple2(
								'testcase',
								A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, extraFailures))
							])))
				]));
	});
var $author$project$Test$Reporter$Json$reportSummary = F2(
	function (_v0, autoFail) {
		var duration = _v0.duration;
		var passed = _v0.passed;
		var failed = _v0.failed;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'event',
					$elm$json$Json$Encode$string('runComplete')),
					_Utils_Tuple2(
					'passed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(passed))),
					_Utils_Tuple2(
					'failed',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromInt(failed))),
					_Utils_Tuple2(
					'duration',
					$elm$json$Json$Encode$string(
						$elm$core$String$fromFloat(duration))),
					_Utils_Tuple2(
					'autoFail',
					A2(
						$elm$core$Maybe$withDefault,
						$elm$json$Json$Encode$null,
						A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, autoFail)))
				]));
	});
var $author$project$Test$Reporter$Reporter$createReporter = function (report) {
	switch (report.$) {
		case 'JsonReport':
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JSON', $author$project$Test$Reporter$Json$reportBegin, $author$project$Test$Reporter$Json$reportComplete, $author$project$Test$Reporter$Json$reportSummary);
		case 'ConsoleReport':
			var useColor = report.a;
			return A4(
				$author$project$Test$Reporter$Reporter$TestReporter,
				'CHALK',
				$author$project$Test$Reporter$Console$reportBegin(useColor),
				$author$project$Test$Reporter$Console$reportComplete(useColor),
				$author$project$Test$Reporter$Console$reportSummary(useColor));
		default:
			return A4($author$project$Test$Reporter$Reporter$TestReporter, 'JUNIT', $author$project$Test$Reporter$JUnit$reportBegin, $author$project$Test$Reporter$JUnit$reportComplete, $author$project$Test$Reporter$JUnit$reportSummary);
	}
};
var $author$project$Test$Runner$Node$elmTestPort__send = _Platform_outgoingPort('elmTestPort__send', $elm$json$Json$Encode$string);
var $author$project$Test$Runner$Node$failInit = F3(
	function (message, report, _v0) {
		var model = {
			autoFail: $elm$core$Maybe$Nothing,
			available: $elm$core$Dict$empty,
			nextTestToRun: 0,
			processes: 0,
			results: _List_Nil,
			runInfo: {fuzzRuns: 0, globs: _List_Nil, initialSeed: 0, paths: _List_Nil, testCount: 0},
			testReporter: $author$project$Test$Reporter$Reporter$createReporter(report)
		};
		var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string('SUMMARY')),
							_Utils_Tuple2(
							'exitCode',
							$elm$json$Json$Encode$int(1)),
							_Utils_Tuple2(
							'message',
							$elm$json$Json$Encode$string(message))
						]))));
		return _Utils_Tuple2(model, cmd);
	});
var $elm_explorations$test$Test$Runner$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm_explorations$test$Test$Runner$Only = function (a) {
	return {$: 'Only', a: a};
};
var $elm_explorations$test$Test$Runner$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $elm_explorations$test$Test$Runner$Skipping = function (a) {
	return {$: 'Skipping', a: a};
};
var $elm_explorations$test$Test$Runner$countRunnables = function (runnable) {
	countRunnables:
	while (true) {
		if (runnable.$ === 'Runnable') {
			return 1;
		} else {
			var runner = runnable.b;
			var $temp$runnable = runner;
			runnable = $temp$runnable;
			continue countRunnables;
		}
	}
};
var $elm_explorations$test$Test$Runner$countAllRunnables = A2(
	$elm$core$List$foldl,
	A2($elm$core$Basics$composeR, $elm_explorations$test$Test$Runner$countRunnables, $elm$core$Basics$add),
	0);
var $elm_explorations$test$Test$Runner$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Runnable = function (a) {
	return {$: 'Runnable', a: a};
};
var $elm_explorations$test$Test$Runner$Thunk = function (a) {
	return {$: 'Thunk', a: a};
};
var $elm_explorations$test$Test$Runner$emptyDistribution = function (seed) {
	return {all: _List_Nil, only: _List_Nil, seed: seed, skipped: _List_Nil};
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm_explorations$test$Test$Runner$fnvHash = F2(
	function (a, b) {
		return ((a ^ b) * 16777619) >>> 0;
	});
var $elm_explorations$test$Test$Runner$fnvHashString = F2(
	function (hash, str) {
		return A3(
			$elm$core$List$foldl,
			$elm_explorations$test$Test$Runner$fnvHash,
			hash,
			A2(
				$elm$core$List$map,
				$elm$core$Char$toCode,
				$elm$core$String$toList(str)));
	});
var $elm_explorations$test$Test$Runner$fnvInit = 2166136261;
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var genA = _v0.a;
		var genB = _v1.a;
		var genC = _v2.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v3 = genA(seed0);
				var a = _v3.a;
				var seed1 = _v3.b;
				var _v4 = genB(seed1);
				var b = _v4.a;
				var seed2 = _v4.b;
				var _v5 = genC(seed2);
				var c = _v5.a;
				var seed3 = _v5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $elm$random$Random$independentSeed = $elm$random$Random$Generator(
	function (seed0) {
		var makeIndependentSeed = F3(
			function (state, b, c) {
				return $elm$random$Random$next(
					A2($elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
			});
		var gen = A2($elm$random$Random$int, 0, 4294967295);
		return A2(
			$elm$random$Random$step,
			A4($elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
			seed0);
	});
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$random$Random$maxInt = 2147483647;
var $elm_explorations$test$Test$Runner$batchDistribute = F4(
	function (hashed, runs, test, prev) {
		var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, prev.seed, test);
		return {
			all: _Utils_ap(prev.all, next.all),
			only: _Utils_ap(prev.only, next.only),
			seed: next.seed,
			skipped: _Utils_ap(prev.skipped, next.skipped)
		};
	});
var $elm_explorations$test$Test$Runner$distributeSeedsHelp = F4(
	function (hashed, runs, seed, test) {
		switch (test.$) {
			case 'ElmTestVariant__UnitTest':
				var aRun = test.a;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v1) {
									return aRun(_Utils_Tuple0);
								}))
						]),
					only: _List_Nil,
					seed: seed,
					skipped: _List_Nil
				};
			case 'ElmTestVariant__FuzzTest':
				var aRun = test.a;
				var _v2 = A2($elm$random$Random$step, $elm$random$Random$independentSeed, seed);
				var firstSeed = _v2.a;
				var nextSeed = _v2.b;
				return {
					all: _List_fromArray(
						[
							$elm_explorations$test$Test$Runner$Runnable(
							$elm_explorations$test$Test$Runner$Thunk(
								function (_v3) {
									return A2(aRun, firstSeed, runs);
								}))
						]),
					only: _List_Nil,
					seed: nextSeed,
					skipped: _List_Nil
				};
			case 'ElmTestVariant__Labeled':
				var description = test.a;
				var subTest = test.b;
				if (hashed) {
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, seed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: next.seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				} else {
					var intFromSeed = A2(
						$elm$random$Random$step,
						A2($elm$random$Random$int, 0, $elm$random$Random$maxInt),
						seed).a;
					var hashedSeed = $elm$random$Random$initialSeed(
						A2(
							$elm_explorations$test$Test$Runner$fnvHash,
							intFromSeed,
							A2($elm_explorations$test$Test$Runner$fnvHashString, $elm_explorations$test$Test$Runner$fnvInit, description)));
					var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, hashedSeed, subTest);
					return {
						all: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: seed,
						skipped: A2(
							$elm$core$List$map,
							$elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				}
			case 'ElmTestVariant__Skipped':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return {all: _List_Nil, only: _List_Nil, seed: next.seed, skipped: next.all};
			case 'ElmTestVariant__Only':
				var subTest = test.a;
				var next = A4($elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return _Utils_update(
					next,
					{only: next.all});
			default:
				var tests = test.a;
				return A3(
					$elm$core$List$foldl,
					A2($elm_explorations$test$Test$Runner$batchDistribute, hashed, runs),
					$elm_explorations$test$Test$Runner$emptyDistribution(seed),
					tests);
		}
	});
var $elm_explorations$test$Test$Runner$distributeSeeds = $elm_explorations$test$Test$Runner$distributeSeedsHelp(false);
var $elm_explorations$test$Test$Runner$Failure$Custom = {$: 'Custom'};
var $elm_explorations$test$Expect$fail = function (str) {
	return $elm_explorations$test$Test$Expectation$fail(
		{description: str, reason: $elm_explorations$test$Test$Runner$Failure$Custom});
};
var $elm_explorations$test$Test$Runner$runThunk = _Test_runThunk;
var $elm_explorations$test$Test$Runner$run = function (_v0) {
	var fn = _v0.a;
	var _v1 = $elm_explorations$test$Test$Runner$runThunk(fn);
	if (_v1.$ === 'Ok') {
		var test = _v1.a;
		return test;
	} else {
		var message = _v1.a;
		return _List_fromArray(
			[
				$elm_explorations$test$Expect$fail('This test failed because it threw an exception: \"' + (message + '\"'))
			]);
	}
};
var $elm_explorations$test$Test$Runner$fromRunnableTreeHelp = F2(
	function (labels, runner) {
		fromRunnableTreeHelp:
		while (true) {
			if (runner.$ === 'Runnable') {
				var runnable = runner.a;
				return _List_fromArray(
					[
						{
						labels: labels,
						run: function (_v1) {
							return $elm_explorations$test$Test$Runner$run(runnable);
						}
					}
					]);
			} else {
				var label = runner.a;
				var subRunner = runner.b;
				var $temp$labels = A2($elm$core$List$cons, label, labels),
					$temp$runner = subRunner;
				labels = $temp$labels;
				runner = $temp$runner;
				continue fromRunnableTreeHelp;
			}
		}
	});
var $elm_explorations$test$Test$Runner$fromRunnableTree = $elm_explorations$test$Test$Runner$fromRunnableTreeHelp(_List_Nil);
var $elm_explorations$test$Test$Runner$fromTest = F3(
	function (runs, seed, test) {
		if (runs < 1) {
			return $elm_explorations$test$Test$Runner$Invalid(
				'Test runner run count must be at least 1, not ' + $elm$core$String$fromInt(runs));
		} else {
			var distribution = A3($elm_explorations$test$Test$Runner$distributeSeeds, runs, seed, test);
			return $elm$core$List$isEmpty(distribution.only) ? ((!$elm_explorations$test$Test$Runner$countAllRunnables(distribution.skipped)) ? $elm_explorations$test$Test$Runner$Plain(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all)) : $elm_explorations$test$Test$Runner$Skipping(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all))) : $elm_explorations$test$Test$Runner$Only(
				A2($elm$core$List$concatMap, $elm_explorations$test$Test$Runner$fromRunnableTree, distribution.only));
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Test$Runner$Node$init = F2(
	function (_v0, _v1) {
		var processes = _v0.processes;
		var globs = _v0.globs;
		var paths = _v0.paths;
		var fuzzRuns = _v0.fuzzRuns;
		var initialSeed = _v0.initialSeed;
		var report = _v0.report;
		var runners = _v0.runners;
		var testReporter = $author$project$Test$Reporter$Reporter$createReporter(report);
		var _v2 = function () {
			switch (runners.$) {
				case 'Plain':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Nothing,
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Only':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.only was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				case 'Skipping':
					var runnerList = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just('Test.skip was used'),
						indexedRunners: A2(
							$elm$core$List$indexedMap,
							F2(
								function (a, b) {
									return _Utils_Tuple2(a, b);
								}),
							runnerList)
					};
				default:
					var str = runners.a;
					return {
						autoFail: $elm$core$Maybe$Just(str),
						indexedRunners: _List_Nil
					};
			}
		}();
		var indexedRunners = _v2.indexedRunners;
		var autoFail = _v2.autoFail;
		var testCount = $elm$core$List$length(indexedRunners);
		var model = {
			autoFail: autoFail,
			available: $elm$core$Dict$fromList(indexedRunners),
			nextTestToRun: 0,
			processes: processes,
			results: _List_Nil,
			runInfo: {fuzzRuns: fuzzRuns, globs: globs, initialSeed: initialSeed, paths: paths, testCount: testCount},
			testReporter: testReporter
		};
		return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
	});
var $author$project$Test$Runner$Node$noTestsFoundError = function (globs) {
	return $elm$core$List$isEmpty(globs) ? $elm$core$String$trim('\nNo exposed values of type Test found in the tests/ directory.\n\nAre there tests in any .elm file in the tests/ directory?\nIf not – add some!\nIf there are – are they exposed?\n        ') : A3(
		$elm$core$String$replace,
		'%globs',
		A2($elm$core$String$join, '\n', globs),
		$elm$core$String$trim('\nNo exposed values of type Test found in files matching:\n\n%globs\n\nAre the above patterns correct? Maybe try running elm-test with no arguments?\n\nAre there tests in any of the matched files?\nIf not – add some!\nIf there are – are they exposed?\n        '));
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $author$project$Test$Runner$Node$Dispatch = function (a) {
	return {$: 'Dispatch', a: a};
};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$Test$Runner$JsMessage$Summary = F3(
	function (a, b, c) {
		return {$: 'Summary', a: a, b: b, c: c};
	});
var $author$project$Test$Runner$JsMessage$Test = function (a) {
	return {$: 'Test', a: a};
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Test$Runner$JsMessage$todoDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2(
		$elm$json$Json$Decode$field,
		'labels',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'todo', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$JsMessage$decodeMessageFromType = function (messageType) {
	switch (messageType) {
		case 'TEST':
			return A2(
				$elm$json$Json$Decode$map,
				$author$project$Test$Runner$JsMessage$Test,
				A2($elm$json$Json$Decode$field, 'index', $elm$json$Json$Decode$int));
		case 'SUMMARY':
			return A4(
				$elm$json$Json$Decode$map3,
				$author$project$Test$Runner$JsMessage$Summary,
				A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float),
				A2($elm$json$Json$Decode$field, 'failures', $elm$json$Json$Decode$int),
				A2(
					$elm$json$Json$Decode$field,
					'todos',
					$elm$json$Json$Decode$list($author$project$Test$Runner$JsMessage$todoDecoder)));
		default:
			return $elm$json$Json$Decode$fail('Unrecognized message type: ' + messageType);
	}
};
var $author$project$Test$Runner$JsMessage$decoder = A2(
	$elm$json$Json$Decode$andThen,
	$author$project$Test$Runner$JsMessage$decodeMessageFromType,
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $author$project$Test$Runner$Node$Complete = F4(
	function (a, b, c, d) {
		return {$: 'Complete', a: a, b: b, c: c, d: d};
	});
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $author$project$Test$Reporter$TestResults$Passed = function (a) {
	return {$: 'Passed', a: a};
};
var $author$project$Test$Reporter$TestResults$Todo = function (a) {
	return {$: 'Todo', a: a};
};
var $elm_explorations$test$Test$Runner$getDistributionReport = function (expectation) {
	if (expectation.$ === 'Pass') {
		var distributionReport = expectation.a.distributionReport;
		return distributionReport;
	} else {
		var distributionReport = expectation.a.distributionReport;
		return distributionReport;
	}
};
var $elm_explorations$test$Test$Runner$getFailureReason = function (expectation) {
	if (expectation.$ === 'Pass') {
		return $elm$core$Maybe$Nothing;
	} else {
		var record = expectation.a;
		return $elm$core$Maybe$Just(
			{description: record.description, given: record.given, reason: record.reason});
	}
};
var $elm_explorations$test$Test$Runner$Failure$TODO = {$: 'TODO'};
var $elm_explorations$test$Test$Runner$isTodo = function (expectation) {
	if (expectation.$ === 'Pass') {
		return false;
	} else {
		var reason = expectation.a.reason;
		return _Utils_eq(reason, $elm_explorations$test$Test$Runner$Failure$TODO);
	}
};
var $author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp = F2(
	function (expectation, builder) {
		var _v0 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
		if (_v0.$ === 'Just') {
			var failure = _v0.a;
			return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _Utils_update(
				builder,
				{
					todos: A2($elm$core$List$cons, failure.description, builder.todos)
				}) : _Utils_update(
				builder,
				{
					failures: A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							failure,
							$elm_explorations$test$Test$Runner$getDistributionReport(expectation)),
						builder.failures)
				});
		} else {
			return _Utils_update(
				builder,
				{
					passes: A2(
						$elm$core$List$cons,
						$elm_explorations$test$Test$Runner$getDistributionReport(expectation),
						builder.passes)
				});
		}
	});
var $author$project$Test$Reporter$TestResults$outcomesFromExpectations = function (expectations) {
	if (expectations.b) {
		if (!expectations.b.b) {
			var expectation = expectations.a;
			var _v1 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
			if (_v1.$ === 'Nothing') {
				return _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Passed(
						$elm_explorations$test$Test$Runner$getDistributionReport(expectation))
					]);
			} else {
				var failure = _v1.a;
				return $elm_explorations$test$Test$Runner$isTodo(expectation) ? _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Todo(failure.description)
					]) : _List_fromArray(
					[
						$author$project$Test$Reporter$TestResults$Failed(
						_List_fromArray(
							[
								_Utils_Tuple2(
								failure,
								$elm_explorations$test$Test$Runner$getDistributionReport(expectation))
							]))
					]);
			}
		} else {
			var builder = A3(
				$elm$core$List$foldl,
				$author$project$Test$Reporter$TestResults$outcomesFromExpectationsHelp,
				{failures: _List_Nil, passes: _List_Nil, todos: _List_Nil},
				expectations);
			var failuresList = function () {
				var _v2 = builder.failures;
				if (!_v2.b) {
					return _List_Nil;
				} else {
					var failures = _v2;
					return _List_fromArray(
						[
							$author$project$Test$Reporter$TestResults$Failed(failures)
						]);
				}
			}();
			return $elm$core$List$concat(
				_List_fromArray(
					[
						A2($elm$core$List$map, $author$project$Test$Reporter$TestResults$Passed, builder.passes),
						A2($elm$core$List$map, $author$project$Test$Reporter$TestResults$Todo, builder.todos),
						failuresList
					]));
		}
	} else {
		return _List_Nil;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $author$project$Test$Runner$Node$sendResults = F3(
	function (isFinished, testReporter, results) {
		var typeStr = isFinished ? 'FINISHED' : 'RESULTS';
		var addToKeyValues = F2(
			function (_v0, list) {
				var testId = _v0.a;
				var result = _v0.b;
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						$elm$core$String$fromInt(testId),
						testReporter.reportComplete(result)),
					list);
			});
		return $author$project$Test$Runner$Node$elmTestPort__send(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'type',
							$elm$json$Json$Encode$string(typeStr)),
							_Utils_Tuple2(
							'results',
							$elm$json$Json$Encode$object(
								A3($elm$core$List$foldl, addToKeyValues, _List_Nil, results)))
						]))));
	});
var $author$project$Test$Runner$Node$dispatch = F2(
	function (model, startTime) {
		var _v0 = A2($elm$core$Dict$get, model.nextTestToRun, model.available);
		if (_v0.$ === 'Nothing') {
			return A3($author$project$Test$Runner$Node$sendResults, true, model.testReporter, model.results);
		} else {
			var config = _v0.a;
			var outcomes = $author$project$Test$Reporter$TestResults$outcomesFromExpectations(
				config.run(_Utils_Tuple0));
			return A2(
				$elm$core$Task$perform,
				A3($author$project$Test$Runner$Node$Complete, config.labels, outcomes, startTime),
				$elm$time$Time$now);
		}
	});
var $author$project$Test$Reporter$TestResults$isFailure = function (outcome) {
	if (outcome.$ === 'Failed') {
		return true;
	} else {
		return false;
	}
};
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $author$project$Test$Runner$Node$sendBegin = function (model) {
	var extraFields = function () {
		var _v0 = model.testReporter.reportBegin(model.runInfo);
		if (_v0.$ === 'Just') {
			var report = _v0.a;
			return _List_fromArray(
				[
					_Utils_Tuple2('message', report)
				]);
		} else {
			return _List_Nil;
		}
	}();
	var baseFields = _List_fromArray(
		[
			_Utils_Tuple2(
			'type',
			$elm$json$Json$Encode$string('BEGIN')),
			_Utils_Tuple2(
			'testCount',
			$elm$json$Json$Encode$int(model.runInfo.testCount))
		]);
	return $author$project$Test$Runner$Node$elmTestPort__send(
		A2(
			$elm$json$Json$Encode$encode,
			0,
			$elm$json$Json$Encode$object(
				_Utils_ap(baseFields, extraFields))));
};
var $author$project$Test$Runner$Node$update = F2(
	function (msg, model) {
		var testReporter = model.testReporter;
		switch (msg.$) {
			case 'Receive':
				var val = msg.a;
				var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Test$Runner$JsMessage$decoder, val);
				if (_v1.$ === 'Ok') {
					if (_v1.a.$ === 'Summary') {
						var _v2 = _v1.a;
						var duration = _v2.a;
						var failed = _v2.b;
						var todos = _v2.c;
						var testCount = model.runInfo.testCount;
						var summaryInfo = {
							duration: duration,
							failed: failed,
							passed: (testCount - failed) - $elm$core$List$length(todos),
							testCount: testCount,
							todos: todos
						};
						var summary = A2(testReporter.reportSummary, summaryInfo, model.autoFail);
						var exitCode = (failed > 0) ? 2 : ((_Utils_eq(model.autoFail, $elm$core$Maybe$Nothing) && $elm$core$List$isEmpty(todos)) ? 0 : 3);
						var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
							A2(
								$elm$json$Json$Encode$encode,
								0,
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'type',
											$elm$json$Json$Encode$string('SUMMARY')),
											_Utils_Tuple2(
											'exitCode',
											$elm$json$Json$Encode$int(exitCode)),
											_Utils_Tuple2('message', summary)
										]))));
						return _Utils_Tuple2(model, cmd);
					} else {
						var index = _v1.a.a;
						var cmd = A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now);
						return _Utils_eq(index, -1) ? _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index + model.processes}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										cmd,
										$author$project$Test$Runner$Node$sendBegin(model)
									]))) : _Utils_Tuple2(
							_Utils_update(
								model,
								{nextTestToRun: index}),
							cmd);
					}
				} else {
					var err = _v1.a;
					var cmd = $author$project$Test$Runner$Node$elmTestPort__send(
						A2(
							$elm$json$Json$Encode$encode,
							0,
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'type',
										$elm$json$Json$Encode$string('ERROR')),
										_Utils_Tuple2(
										'message',
										$elm$json$Json$Encode$string(
											$elm$json$Json$Decode$errorToString(err)))
									]))));
					return _Utils_Tuple2(model, cmd);
				}
			case 'Dispatch':
				var startTime = msg.a;
				return _Utils_Tuple2(
					model,
					A2($author$project$Test$Runner$Node$dispatch, model, startTime));
			default:
				var labels = msg.a;
				var outcomes = msg.b;
				var startTime = msg.c;
				var endTime = msg.d;
				var nextTestToRun = model.nextTestToRun + model.processes;
				var isFinished = _Utils_cmp(nextTestToRun, model.runInfo.testCount) > -1;
				var duration = $elm$time$Time$posixToMillis(endTime) - $elm$time$Time$posixToMillis(startTime);
				var prependOutcome = F2(
					function (outcome, rest) {
						return A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								model.nextTestToRun,
								{duration: duration, labels: labels, outcome: outcome}),
							rest);
					});
				var results = A3($elm$core$List$foldl, prependOutcome, model.results, outcomes);
				if (isFinished || A2($elm$core$List$any, $author$project$Test$Reporter$TestResults$isFailure, outcomes)) {
					var cmd = A3($author$project$Test$Runner$Node$sendResults, isFinished, testReporter, results);
					return isFinished ? _Utils_Tuple2(model, cmd) : _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: _List_Nil}),
						$elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									cmd,
									A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now)
								])));
				} else {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{nextTestToRun: nextTestToRun, results: results}),
						A2($elm$core$Task$perform, $author$project$Test$Runner$Node$Dispatch, $elm$time$Time$now));
				}
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Test$Runner$Node$run = F2(
	function (_v0, possiblyTests) {
		var runs = _v0.runs;
		var seed = _v0.seed;
		var report = _v0.report;
		var globs = _v0.globs;
		var paths = _v0.paths;
		var processes = _v0.processes;
		var tests = A2(
			$elm$core$List$filterMap,
			function (_v4) {
				var moduleName = _v4.a;
				var maybeModuleTests = _v4.b;
				var moduleTests = A2($elm$core$List$filterMap, $elm$core$Basics$identity, maybeModuleTests);
				return $elm$core$List$isEmpty(moduleTests) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					A2($elm_explorations$test$Test$describe, moduleName, moduleTests));
			},
			possiblyTests);
		if ($elm$core$List$isEmpty(tests)) {
			return $elm$core$Platform$worker(
				{
					init: A2(
						$author$project$Test$Runner$Node$failInit,
						$author$project$Test$Runner$Node$noTestsFoundError(globs),
						report),
					subscriptions: function (_v1) {
						return $elm$core$Platform$Sub$none;
					},
					update: F2(
						function (_v2, model) {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						})
				});
		} else {
			var runners = A3(
				$elm_explorations$test$Test$Runner$fromTest,
				runs,
				$elm$random$Random$initialSeed(seed),
				$elm_explorations$test$Test$concat(tests));
			var wrappedInit = $author$project$Test$Runner$Node$init(
				{fuzzRuns: runs, globs: globs, initialSeed: seed, paths: paths, processes: processes, report: report, runners: runners});
			return $elm$core$Platform$worker(
				{
					init: wrappedInit,
					subscriptions: function (_v3) {
						return $author$project$Test$Runner$Node$elmTestPort__receive($author$project$Test$Runner$Node$Receive);
					},
					update: $author$project$Test$Runner$Node$update
				});
		}
	});
var $author$project$Model$WeatherData$HourlyDataPoint = F3(
	function (time, temperature, precipitation) {
		return {precipitation: precipitation, temperature: temperature, time: time};
	});
var $elm_explorations$test$Test$Runner$Failure$Equality = F2(
	function (a, b) {
		return {$: 'Equality', a: a, b: b};
	});
var $elm$core$String$contains = _String_contains;
var $elm_explorations$test$Test$Expectation$Pass = function (a) {
	return {$: 'Pass', a: a};
};
var $elm_explorations$test$Expect$pass = $elm_explorations$test$Test$Expectation$Pass(
	{distributionReport: $elm_explorations$test$Test$Distribution$NoDistribution});
var $elm_explorations$test$Test$Internal$toString = _Debug_toString;
var $elm_explorations$test$Expect$testWith = F5(
	function (makeReason, label, runTest, expected, actual) {
		return A2(runTest, actual, expected) ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Test$Expectation$fail(
			{
				description: label,
				reason: A2(
					makeReason,
					$elm_explorations$test$Test$Internal$toString(expected),
					$elm_explorations$test$Test$Internal$toString(actual))
			});
	});
var $elm$core$String$toInt = _String_toInt;
var $elm_explorations$test$Expect$equateWith = F4(
	function (reason, comparison, b, a) {
		var isJust = function (x) {
			if (x.$ === 'Just') {
				return true;
			} else {
				return false;
			}
		};
		var isFloat = function (x) {
			return isJust(
				$elm$core$String$toFloat(x)) && (!isJust(
				$elm$core$String$toInt(x)));
		};
		var usesFloats = isFloat(
			$elm_explorations$test$Test$Internal$toString(a)) || isFloat(
			$elm_explorations$test$Test$Internal$toString(b));
		var floatError = A2($elm$core$String$contains, reason, 'not') ? 'Do not use Expect.notEqual with floats. Use Expect.notWithin instead.' : 'Do not use Expect.equal with floats. Use Expect.within instead.';
		return usesFloats ? $elm_explorations$test$Expect$fail(floatError) : A5($elm_explorations$test$Expect$testWith, $elm_explorations$test$Test$Runner$Failure$Equality, reason, comparison, b, a);
	});
var $elm_explorations$test$Expect$equal = A2($elm_explorations$test$Expect$equateWith, 'Expect.equal', $elm$core$Basics$eq);
var $elm_explorations$test$Test$Internal$blankDescriptionFailure = $elm_explorations$test$Test$Internal$failNow(
	{
		description: 'This test has a blank description. Let\'s give it a useful one!',
		reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$BadDescription)
	});
var $elm_explorations$test$Test$test = F2(
	function (untrimmedDesc, thunk) {
		var desc = $elm$core$String$trim(untrimmedDesc);
		return $elm$core$String$isEmpty(desc) ? $elm_explorations$test$Test$Internal$blankDescriptionFailure : A2(
			$elm_explorations$test$Test$Internal$ElmTestVariant__Labeled,
			desc,
			$elm_explorations$test$Test$Internal$ElmTestVariant__UnitTest(
				function (_v0) {
					return _List_fromArray(
						[
							thunk(_Utils_Tuple0)
						]);
				}));
	});
var $author$project$Model$WeatherData$toHourlyDataPoints = function (_v0) {
	return _Debug_todo(
		'Model.WeatherData',
		{
			start: {line: 77, column: 5},
			end: {line: 77, column: 15}
		})('toHourlyDataPoints');
};
var $author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$weatherData = {hourly: $author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$hourlyData, utcOffset: 7200};
var $author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#toHourlyDataPoints: \n\n    toHourlyDataPoints weatherData\n    --> [ HourlyDataPoint (Time.millisToPosix 1667779200000) 6.9 0\n    --> , HourlyDataPoint (Time.millisToPosix 1667782800000) 6.4 0.1\n    --> , HourlyDataPoint (Time.millisToPosix 1667786400000) 5.6 0.2\n    --> , HourlyDataPoint (Time.millisToPosix 1667790000000) 5.4 0.3\n    --> ]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$author$project$Model$WeatherData$toHourlyDataPoints($author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$weatherData),
			_List_fromArray(
				[
					A3(
					$author$project$Model$WeatherData$HourlyDataPoint,
					$elm$time$Time$millisToPosix(1667779200000),
					6.9,
					0),
					A3(
					$author$project$Model$WeatherData$HourlyDataPoint,
					$elm$time$Time$millisToPosix(1667782800000),
					6.4,
					0.1),
					A3(
					$author$project$Model$WeatherData$HourlyDataPoint,
					$elm$time$Time$millisToPosix(1667786400000),
					5.6,
					0.2),
					A3(
					$author$project$Model$WeatherData$HourlyDataPoint,
					$elm$time$Time$millisToPosix(1667790000000),
					5.4,
					0.3)
				]));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$Model$WeatherItems$allSelected = {currentTime: true, minMax: true, precipitation: true, temperature: true};
var $author$project$Model$WeatherItems$isItemSelected = F2(
	function (item, current) {
		switch (item.$) {
			case 'Temperature':
				return current.temperature;
			case 'Precipitation':
				return current.precipitation;
			case 'MinMax':
				return current.minMax;
			default:
				return current.currentTime;
		}
	});
var $author$project$Model$WeatherItems$CurrentTime = {$: 'CurrentTime'};
var $author$project$Model$WeatherItems$MinMax = {$: 'MinMax'};
var $author$project$Model$WeatherItems$Precipitation = {$: 'Precipitation'};
var $author$project$Model$WeatherItems$Temperature = {$: 'Temperature'};
var $author$project$Model$WeatherItems$weatherItems = _List_fromArray(
	[$author$project$Model$WeatherItems$Temperature, $author$project$Model$WeatherItems$Precipitation, $author$project$Model$WeatherItems$MinMax, $author$project$Model$WeatherItems$CurrentTime]);
var $author$project$VerifyExamples$Model$WeatherItems$AllSelected0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#allSelected: \n\n    List.all (\\i -> isItemSelected i allSelected) weatherItems\n    --> True',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$elm$core$List$all,
				function (i) {
					return A2($author$project$Model$WeatherItems$isItemSelected, i, $author$project$Model$WeatherItems$allSelected);
				},
				$author$project$Model$WeatherItems$weatherItems),
			true);
	});
var $author$project$VerifyExamples$Model$WeatherItems$IsItemSelected0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#isItemSelected: \n\n    isItemSelected Temperature allSelected\n    --> True',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2($author$project$Model$WeatherItems$isItemSelected, $author$project$Model$WeatherItems$Temperature, $author$project$Model$WeatherItems$allSelected),
			true);
	});
var $author$project$Model$WeatherItems$set = F3(
	function (item, value, current) {
		switch (item.$) {
			case 'Temperature':
				return _Utils_update(
					current,
					{temperature: value});
			case 'Precipitation':
				return _Utils_update(
					current,
					{precipitation: value});
			case 'MinMax':
				return _Utils_update(
					current,
					{minMax: value});
			default:
				return _Utils_update(
					current,
					{currentTime: value});
		}
	});
var $author$project$VerifyExamples$Model$WeatherItems$Set0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#set: \n\n    allSelected |> set Precipitation False |> isItemSelected Temperature\n    --> True',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Model$WeatherItems$isItemSelected,
				$author$project$Model$WeatherItems$Temperature,
				A3($author$project$Model$WeatherItems$set, $author$project$Model$WeatherItems$Precipitation, false, $author$project$Model$WeatherItems$allSelected)),
			true);
	});
var $author$project$Util$groupBy = F2(
	function (_v0, _v1) {
		return _Debug_todo(
			'Util',
			{
				start: {line: 49, column: 5},
				end: {line: 49, column: 15}
			})('Implement Util.groupBy');
	});
var $author$project$VerifyExamples$Util$GroupBy0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#groupBy: \n\n    groupBy identity []\n    --> []',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2($author$project$Util$groupBy, $elm$core$Basics$identity, _List_Nil),
			_List_Nil);
	});
var $author$project$Util$maximumBy = F2(
	function (_v0, _v1) {
		return _Debug_todo(
			'Util',
			{
				start: {line: 34, column: 5},
				end: {line: 34, column: 15}
			})('Implement Util.maximumBy');
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$VerifyExamples$Util$MaximumBy0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#maximumBy: \n\n    maximumBy (modBy 10) [ 16, 23, 14, 5 ]\n    --> Just 16',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$maximumBy,
				$elm$core$Basics$modBy(10),
				_List_fromArray(
					[16, 23, 14, 5])),
			$elm$core$Maybe$Just(16));
	});
var $author$project$Util$maybeToList = function (_v0) {
	return _Debug_todo(
		'Util',
		{
			start: {line: 62, column: 5},
			end: {line: 62, column: 15}
		})('Implement Util.maybeToList');
};
var $author$project$VerifyExamples$Util$MaybeToList0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#maybeToList: \n\n    maybeToList Nothing\n    --> []',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$author$project$Util$maybeToList($elm$core$Maybe$Nothing),
			_List_Nil);
	});
var $author$project$Util$minimumBy = F2(
	function (_v0, _v1) {
		return _Debug_todo(
			'Util',
			{
				start: {line: 19, column: 5},
				end: {line: 19, column: 15}
			})('Implement Util.minimumBy');
	});
var $author$project$VerifyExamples$Util$MinimumBy0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#minimumBy: \n\n    minimumBy (modBy 10) [ 16, 23, 14, 5 ]\n    --> Just 23',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$minimumBy,
				$elm$core$Basics$modBy(10),
				_List_fromArray(
					[16, 23, 14, 5])),
			$elm$core$Maybe$Just(23));
	});
var $author$project$Util$zipFilter = F2(
	function (_v0, _v1) {
		return _Debug_todo(
			'Util',
			{
				start: {line: 77, column: 5},
				end: {line: 77, column: 15}
			})('Implement Util.zipFilter');
	});
var $author$project$VerifyExamples$Util$ZipFilter0$spec0 = A2(
	$elm_explorations$test$Test$test,
	'#zipFilter: \n\n    zipFilter [ True, False, True, False ] [ 1, 2, 3, 4 ]\n    --> [1, 3]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$zipFilter,
				_List_fromArray(
					[true, false, true, false]),
				_List_fromArray(
					[1, 2, 3, 4])),
			_List_fromArray(
				[1, 3]));
	});
var $author$project$VerifyExamples$Model$WeatherItems$AllSelected1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#allSelected: \n\n    isItemSelected Temperature allSelected\n    --> True',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2($author$project$Model$WeatherItems$isItemSelected, $author$project$Model$WeatherItems$Temperature, $author$project$Model$WeatherItems$allSelected),
			true);
	});
var $author$project$VerifyExamples$Model$WeatherItems$Set1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#set: \n\n    allSelected |> set Temperature False |> isItemSelected Temperature\n    --> False',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Model$WeatherItems$isItemSelected,
				$author$project$Model$WeatherItems$Temperature,
				A3($author$project$Model$WeatherItems$set, $author$project$Model$WeatherItems$Temperature, false, $author$project$Model$WeatherItems$allSelected)),
			false);
	});
var $author$project$VerifyExamples$Util$GroupBy1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#groupBy: \n\n    groupBy (modBy 10) [ 11, 12, 21, 22 ]\n    --> [(1, [11, 21]), (2, [12, 22])]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$groupBy,
				$elm$core$Basics$modBy(10),
				_List_fromArray(
					[11, 12, 21, 22])),
			_List_fromArray(
				[
					_Utils_Tuple2(
					1,
					_List_fromArray(
						[11, 21])),
					_Utils_Tuple2(
					2,
					_List_fromArray(
						[12, 22]))
				]));
	});
var $author$project$VerifyExamples$Util$MaximumBy1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#maximumBy: \n\n    maximumBy .x []\n    --> Nothing',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$maximumBy,
				function ($) {
					return $.x;
				},
				_List_Nil),
			$elm$core$Maybe$Nothing);
	});
var $author$project$VerifyExamples$Util$MaybeToList1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#maybeToList: \n\n    maybeToList (Just 1)\n    --> [1]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			$author$project$Util$maybeToList(
				$elm$core$Maybe$Just(1)),
			_List_fromArray(
				[1]));
	});
var $author$project$VerifyExamples$Util$MinimumBy1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#minimumBy: \n\n    minimumBy .x []\n    --> Nothing',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$minimumBy,
				function ($) {
					return $.x;
				},
				_List_Nil),
			$elm$core$Maybe$Nothing);
	});
var $author$project$VerifyExamples$Util$ZipFilter1$spec1 = A2(
	$elm_explorations$test$Test$test,
	'#zipFilter: \n\n    zipFilter [ False, False ] [ 1, 2 ]\n    --> []',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$zipFilter,
				_List_fromArray(
					[false, false]),
				_List_fromArray(
					[1, 2])),
			_List_Nil);
	});
var $author$project$VerifyExamples$Util$GroupBy2$spec2 = A2(
	$elm_explorations$test$Test$test,
	'#groupBy: \n\n    groupBy .x [ { x = 1 } ]\n    --> [(1, [{x = 1}])]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$groupBy,
				function ($) {
					return $.x;
				},
				_List_fromArray(
					[
						{x: 1}
					])),
			_List_fromArray(
				[
					_Utils_Tuple2(
					1,
					_List_fromArray(
						[
							{x: 1}
						]))
				]));
	});
var $author$project$VerifyExamples$Util$MaximumBy2$spec2 = A2(
	$elm_explorations$test$Test$test,
	'#maximumBy: \n\n    maximumBy .x [ { x = 1, y = 2 } ]\n    --> Just {x = 1, y = 2}',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$maximumBy,
				function ($) {
					return $.x;
				},
				_List_fromArray(
					[
						{x: 1, y: 2}
					])),
			$elm$core$Maybe$Just(
				{x: 1, y: 2}));
	});
var $author$project$VerifyExamples$Util$MinimumBy2$spec2 = A2(
	$elm_explorations$test$Test$test,
	'#minimumBy: \n\n    minimumBy .x [ { x = 1, y = 2 } ]\n    --> Just {x = 1, y = 2}',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$minimumBy,
				function ($) {
					return $.x;
				},
				_List_fromArray(
					[
						{x: 1, y: 2}
					])),
			$elm$core$Maybe$Just(
				{x: 1, y: 2}));
	});
var $author$project$VerifyExamples$Util$ZipFilter2$spec2 = A2(
	$elm_explorations$test$Test$test,
	'#zipFilter: \n\n    zipFilter [ True, True ] [ 1, 2 ]\n    --> [1, 2]',
	function (_v0) {
		return A2(
			$elm_explorations$test$Expect$equal,
			A2(
				$author$project$Util$zipFilter,
				_List_fromArray(
					[true, true]),
				_List_fromArray(
					[1, 2])),
			_List_fromArray(
				[1, 2]));
	});
var $author$project$Util$Time$Date = function (a) {
	return {$: 'Date', a: a};
};
var $elm$time$Time$Feb = {$: 'Feb'};
var $elm$time$Time$Jan = {$: 'Jan'};
var $elm_explorations$test$Test$Html$Selector$Internal$Class = function (a) {
	return {$: 'Class', a: a};
};
var $elm_explorations$test$Test$Html$Selector$class = $elm_explorations$test$Test$Html$Selector$Internal$Class;
var $elm_explorations$test$Test$Html$Selector$Internal$Containing = function (a) {
	return {$: 'Containing', a: a};
};
var $elm_explorations$test$Test$Html$Selector$containing = $elm_explorations$test$Test$Html$Selector$Internal$Containing;
var $author$project$Util$Time$monthToString = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'Jan';
		case 'Feb':
			return 'Feb';
		case 'Mar':
			return 'Mar';
		case 'Apr':
			return 'Apr';
		case 'May':
			return 'May';
		case 'Jun':
			return 'Jun';
		case 'Jul':
			return 'Jul';
		case 'Aug':
			return 'Aug';
		case 'Sep':
			return 'Sep';
		case 'Oct':
			return 'Oct';
		case 'Nov':
			return 'Nov';
		default:
			return 'Dec';
	}
};
var $author$project$Util$Time$formatDate = function (_v0) {
	var date = _v0.a;
	var year = $elm$core$String$fromInt(date.year);
	var month = $author$project$Util$Time$monthToString(date.month);
	var day = A3(
		$elm$core$String$padLeft,
		2,
		_Utils_chr('0'),
		$elm$core$String$fromInt(date.day));
	return year + (' ' + (month + (' ' + day)));
};
var $elm_explorations$test$Test$Html$Query$Internal$InternalError = function (a) {
	return {$: 'InternalError', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$Query = F2(
	function (a, b) {
		return {$: 'Query', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$Single = F2(
	function (a, b) {
		return {$: 'Single', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$Inert$Node = function (a) {
	return {$: 'Node', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext = F2(
	function (a, b) {
		return {$: 'HtmlContext', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry = function (a) {
	return {$: 'NodeEntry', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord = F4(
	function (tag, children, facts, descendantsCount) {
		return {children: children, descendantsCount: descendantsCount, facts: facts, tag: tag};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$TextTag = function (a) {
	return {$: 'TextTag', a: a};
};
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode = function (a) {
	return {$: 'CustomNode', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode = function (a) {
	return {$: 'MarkdownNode', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$Facts = F5(
	function (styles, events, attributeNamespace, stringAttributes, boolAttributes) {
		return {attributeNamespace: attributeNamespace, boolAttributes: boolAttributes, events: events, stringAttributes: stringAttributes, styles: styles};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey = 'a4';
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey = 'a0';
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents = function (taggedEventDecoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey,
				$elm$json$Json$Decode$dict(
					A2($elm$json$Json$Decode$map, taggedEventDecoder, $elm$json$Json$Decode$value))),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey = 'a3';
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Dict$toList,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$filterMap(
					function (_v0) {
						var key = _v0.a;
						var value = _v0.b;
						var _v1 = A2($elm$json$Json$Decode$decodeValue, decoder, value);
						if (_v1.$ === 'Err') {
							return $elm$core$Maybe$Nothing;
						} else {
							var v = _v1.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(key, v));
						}
					}),
				$elm$core$Dict$fromList)),
		$elm$json$Json$Decode$dict($elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(decoder)),
				$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
			]));
};
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey = 'a1';
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$knownKeys = _List_fromArray(
	[$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$eventKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeKey, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey]);
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys = $elm$core$Dict$filter(
	F2(
		function (key, _v0) {
			return !A2($elm$core$List$member, key, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$knownKeys);
		}));
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers = function (otherDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (attributes) {
			return A2(
				$elm$json$Json$Decode$map,
				A2(
					$elm$core$Basics$composeR,
					$elm_explorations$test$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys,
					$elm$core$Dict$union(attributes)),
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(otherDecoder));
		},
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes(otherDecoder));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$styleKey,
			$elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$succeed($elm$core$Dict$empty)
		]));
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A6(
		$elm$json$Json$Decode$map5,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$Facts,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents(
			eventDecoder(taggers)),
		$elm$json$Json$Decode$maybe(
			A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey, $elm$json$Json$Decode$value)),
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$string),
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$bool));
};
var $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants = {
	markdown: {markdown: 'b', options: 'a'},
	virtualDom: {descendantsCount: 'b', facts: 'd', kids: 'e', model: 'g', node: 'k', nodeType: '$', nodeTypeCustom: 3, nodeTypeKeyedNode: 2, nodeTypeNode: 1, nodeTypeTagger: 4, nodeTypeText: 0, nodeTypeThunk: 5, refs: 'l', tag: 'c', tagger: 'j', text: 'a'}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.model, $elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord = F2(
	function (facts, model) {
		return {facts: facts, model: model};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel = F2(
	function (options, markdown) {
		return {markdown: markdown, options: options};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel = {
	markdown: '',
	options: {
		defaultHighlighting: $elm$core$Maybe$Nothing,
		githubFlavored: $elm$core$Maybe$Just(
			{breaks: false, tables: false}),
		sanitize: false,
		smartypants: false
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel = A2(
	$elm$json$Json$Decode$map,
	$elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel($elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel.options),
	A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.markdown.markdown, $elm$json$Json$Decode$string));
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord = function (context) {
	return A3(
		$elm$json$Json$Decode$map2,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord,
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.model, $elm_explorations$test$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode = function (context) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord(context)),
				A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord(context))
			]));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag = A2(
	$elm$json$Json$Decode$field,
	$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.text,
	A2(
		$elm$json$Json$Decode$andThen,
		function (text) {
			return $elm$json$Json$Decode$succeed(
				{text: text});
		},
		$elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml = function (context) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (nodeType) {
			return _Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeText) ? A2($elm$json$Json$Decode$map, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$TextTag, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeKeyedNode) ? A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode(context)) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeNode) ? A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode(context)) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeCustom) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode(context) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeTagger) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger(context) : (_Utils_eq(nodeType, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeTypeThunk) ? A2(
				$elm$json$Json$Decode$field,
				$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.node,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context)) : $elm$json$Json$Decode$fail(
				'No such type as ' + $elm$core$String$fromInt(nodeType)))))));
		},
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.nodeType, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode = function (context) {
	var decodeSecondNode = A2(
		$elm$json$Json$Decode$field,
		'b',
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
	return A5(
		$elm$json$Json$Decode$map4,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tag, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.kids,
			$elm$json$Json$Decode$list(decodeSecondNode)),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.descendantsCount, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode = function (context) {
	return A5(
		$elm$json$Json$Decode$map4,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord,
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tag, $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.kids,
			$elm$json$Json$Decode$list(
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context))),
		A2(
			$elm$json$Json$Decode$field,
			$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.facts,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)),
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.descendantsCount, $elm$json$Json$Decode$int));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger = function (_v0) {
	var taggers = _v0.a;
	var eventDecoder = _v0.b;
	return A2(
		$elm$json$Json$Decode$andThen,
		function (tagger) {
			var nodeDecoder = $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(
				A2(
					$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext,
					_Utils_ap(
						taggers,
						_List_fromArray(
							[tagger])),
					eventDecoder));
			return A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					[$elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.node]),
				nodeDecoder);
		},
		A2($elm$json$Json$Decode$field, $elm_explorations$test$Test$Internal$KernelConstants$kernelConstants.virtualDom.tagger, $elm$json$Json$Decode$value));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml = function (eventDecoder) {
	return $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(
		A2($elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext, _List_Nil, eventDecoder));
};
var $elm_explorations$test$Test$Html$Internal$Inert$eventDecoder = function (eventHandler) {
	return _HtmlAsJson_eventHandler(eventHandler);
};
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm_explorations$test$Test$Html$Internal$Inert$mapHandler = F2(
	function (f, handler) {
		switch (handler.$) {
			case 'Normal':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$Normal(
					A2($elm$json$Json$Decode$map, f, decoder));
			case 'MayStopPropagation':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$MayStopPropagation(
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Tuple$mapFirst(f),
						decoder));
			case 'MayPreventDefault':
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$MayPreventDefault(
					A2(
						$elm$json$Json$Decode$map,
						$elm$core$Tuple$mapFirst(f),
						decoder));
			default:
				var decoder = handler.a;
				return $elm$virtual_dom$VirtualDom$Custom(
					A2(
						$elm$json$Json$Decode$map,
						function (value) {
							return {
								message: f(value.message),
								preventDefault: value.preventDefault,
								stopPropagation: value.stopPropagation
							};
						},
						decoder));
		}
	});
var $elm_explorations$test$Test$Html$Internal$Inert$taggerFunction = function (tagger) {
	return _HtmlAsJson_taggerFunction(tagger);
};
var $elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder = F2(
	function (taggers, eventHandler) {
		if (!taggers.b) {
			return $elm_explorations$test$Test$Html$Internal$Inert$eventDecoder(eventHandler);
		} else {
			if (!taggers.b.b) {
				var tagger = taggers.a;
				return A2(
					$elm_explorations$test$Test$Html$Internal$Inert$mapHandler,
					$elm_explorations$test$Test$Html$Internal$Inert$taggerFunction(tagger),
					$elm_explorations$test$Test$Html$Internal$Inert$eventDecoder(eventHandler));
			} else {
				var tagger = taggers.a;
				var rest = taggers.b;
				return A2(
					$elm_explorations$test$Test$Html$Internal$Inert$mapHandler,
					$elm_explorations$test$Test$Html$Internal$Inert$taggerFunction(tagger),
					A2($elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder, rest, eventHandler));
			}
		}
	});
var $elm_explorations$test$Test$Html$Internal$Inert$toJson = function (node) {
	return _HtmlAsJson_toJson(node);
};
var $elm_explorations$test$Test$Html$Internal$Inert$fromHtml = function (html) {
	var _v0 = A2(
		$elm$json$Json$Decode$decodeValue,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml($elm_explorations$test$Test$Html$Internal$Inert$taggedEventDecoder),
		$elm_explorations$test$Test$Html$Internal$Inert$toJson(html));
	if (_v0.$ === 'Ok') {
		var elmHtml = _v0.a;
		return $elm$core$Result$Ok(
			$elm_explorations$test$Test$Html$Internal$Inert$Node(elmHtml));
	} else {
		var jsonError = _v0.a;
		return $elm$core$Result$Err(
			$elm$json$Json$Decode$errorToString(jsonError));
	}
};
var $elm_explorations$test$Test$Html$Query$fromHtml = function (html) {
	return A2(
		$elm_explorations$test$Test$Html$Query$Internal$Single,
		true,
		function () {
			var _v0 = $elm_explorations$test$Test$Html$Internal$Inert$fromHtml(html);
			if (_v0.$ === 'Ok') {
				var node = _v0.a;
				return A2($elm_explorations$test$Test$Html$Query$Internal$Query, node, _List_Nil);
			} else {
				var message = _v0.a;
				return $elm_explorations$test$Test$Html$Query$Internal$InternalError(message);
			}
		}());
};
var $elm_explorations$test$Test$Html$Query$Internal$baseIndentation = '    ';
var $elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine = $elm$core$Basics$append('▼ ');
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements = {$: 'EscapableRawTextElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements = {$: 'NormalElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements = {$: 'RawTextElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements = {$: 'VoidElements'};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements = _List_fromArray(
	['textarea', 'title']);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements = _List_fromArray(
	['script', 'style']);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind = function (element) {
	return A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$voidElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements : (A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements : (A2($elm$core$List$member, element, $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements) ? $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements : $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements));
};
var $elm$core$String$toLower = _String_toLower;
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString = F2(
	function (options, _v1) {
		var tag = _v1.tag;
		var children = _v1.children;
		var facts = _v1.facts;
		var styles = function () {
			var _v8 = $elm$core$Dict$toList(facts.styles);
			if (!_v8.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var styleValues = _v8;
				return $elm$core$Maybe$Just(
					function (styleString) {
						return 'style=\"' + (styleString + '\"');
					}(
						A2(
							$elm$core$String$join,
							'',
							A2(
								$elm$core$List$map,
								function (_v9) {
									var key = _v9.a;
									var value = _v9.b;
									return key + (':' + (value + ';'));
								},
								styleValues))));
			}
		}();
		var stringAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v7) {
						var k = _v7.a;
						var v = _v7.b;
						return k + ('=\"' + (v + '\"'));
					},
					$elm$core$Dict$toList(
						A2(
							$elm$core$Dict$filter,
							F2(
								function (k, _v6) {
									return k !== 'className';
								}),
							facts.stringAttributes)))));
		var openTag = function (extras) {
			var trimmedExtras = A2(
				$elm$core$List$filter,
				$elm$core$Basics$neq(''),
				A2(
					$elm$core$List$map,
					$elm$core$String$trim,
					A2(
						$elm$core$List$filterMap,
						function (x) {
							return x;
						},
						extras)));
			var filling = function () {
				if (!trimmedExtras.b) {
					return '';
				} else {
					var more = trimmedExtras;
					return ' ' + A2($elm$core$String$join, ' ', more);
				}
			}();
			return '<' + (tag + (filling + '>'));
		};
		var closeTag = '</' + (tag + '>');
		var classes = A2(
			$elm$core$Maybe$map,
			function (name) {
				return 'class=\"' + (name + '\"');
			},
			A2($elm$core$Dict$get, 'className', facts.stringAttributes));
		var childrenStrings = A2(
			$elm$core$List$map,
			$elm$core$Basics$append(
				A2($elm$core$String$repeat, options.indent, ' ')),
			$elm$core$List$concat(
				A2(
					$elm$core$List$map,
					$elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines(options),
					children)));
		var boolToString = function (b) {
			if (b) {
				return 'True';
			} else {
				return 'False';
			}
		};
		var boolAttributes = $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (_v3) {
						var k = _v3.a;
						var v = _v3.b;
						return k + ('=' + $elm$core$String$toLower(
							boolToString(v)));
					},
					$elm$core$Dict$toList(facts.boolAttributes))));
		var _v2 = $elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag);
		if (_v2.$ === 'VoidElements') {
			return _List_fromArray(
				[
					openTag(
					_List_fromArray(
						[classes, styles, stringAttributes, boolAttributes]))
				]);
		} else {
			return _Utils_ap(
				_List_fromArray(
					[
						openTag(
						_List_fromArray(
							[classes, styles, stringAttributes, boolAttributes]))
					]),
				_Utils_ap(
					childrenStrings,
					_List_fromArray(
						[closeTag])));
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines = F2(
	function (options, nodeType) {
		switch (nodeType.$) {
			case 'TextTag':
				var text = nodeType.a.text;
				return _List_fromArray(
					[text]);
			case 'NodeEntry':
				var record = nodeType.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString, options, record);
			case 'CustomNode':
				return _List_Nil;
			default:
				var record = nodeType.a;
				return _List_fromArray(
					[record.model.markdown]);
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions = function (options) {
	return A2(
		$elm$core$Basics$composeR,
		$elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToLines(options),
		$elm$core$String$join(
			options.newLines ? '\n' : ''));
};
var $elm_explorations$test$Test$Html$Query$Internal$prettyPrint = $elm_explorations$test$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions(
	{indent: 4, newLines: true});
var $elm_explorations$test$Test$Html$Internal$Inert$toElmHtml = function (_v0) {
	var elmHtml = _v0.a;
	return elmHtml;
};
var $elm_explorations$test$Test$Html$Query$Internal$toOutputLine = function (query) {
	if (query.$ === 'Query') {
		var node = query.a;
		return $elm_explorations$test$Test$Html$Query$Internal$prettyPrint(
			$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node));
	} else {
		var message = query.a;
		return 'Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>.  ' + message;
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$addQueryFromHtmlLine = function (query) {
	return A2(
		$elm$core$String$join,
		'\n\n',
		_List_fromArray(
			[
				$elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine('Query.fromHtml'),
				A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					$elm$core$Basics$append($elm_explorations$test$Test$Html$Query$Internal$baseIndentation),
					A2(
						$elm$core$String$split,
						'\n',
						$elm_explorations$test$Test$Html$Query$Internal$toOutputLine(query))))
			]));
};
var $elm_explorations$test$Test$Html$Query$Internal$getChildren = function (elmHtml) {
	if (elmHtml.$ === 'NodeEntry') {
		var children = elmHtml.a.children;
		return children;
	} else {
		return _List_Nil;
	}
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $elm_explorations$test$Test$Html$Query$Internal$getElementAtHelp = F2(
	function (index, list) {
		getElementAtHelp:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var first = list.a;
				var rest = list.b;
				if (!index) {
					return _List_fromArray(
						[first]);
				} else {
					var $temp$index = index - 1,
						$temp$list = rest;
					index = $temp$index;
					list = $temp$list;
					continue getElementAtHelp;
				}
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$getElementAt = F2(
	function (index, list) {
		var length = $elm$core$List$length(list);
		return ((!length) || ((_Utils_cmp(index, length) > -1) || ((index < 0) && (_Utils_cmp(
			$elm$core$Basics$abs(index),
			length) > 0)))) ? _List_Nil : A2(
			$elm_explorations$test$Test$Html$Query$Internal$getElementAtHelp,
			A2($elm$core$Basics$modBy, length, index),
			list);
	});
var $elm$core$String$append = _String_append;
var $elm_explorations$test$Test$Html$Query$Internal$printIndented = F3(
	function (maxDigits, index, elmHtml) {
		var caption = A2(
			$elm$core$String$append,
			$elm_explorations$test$Test$Html$Query$Internal$baseIndentation,
			A3(
				$elm$core$String$padRight,
				maxDigits + 3,
				_Utils_chr(' '),
				$elm$core$String$fromInt(index + 1) + ')'));
		var indentation = A2(
			$elm$core$String$repeat,
			$elm$core$String$length(caption),
			' ');
		var _v0 = A2(
			$elm$core$String$split,
			'\n',
			$elm_explorations$test$Test$Html$Query$Internal$prettyPrint(elmHtml));
		if (!_v0.b) {
			return '';
		} else {
			var first = _v0.a;
			var rest = _v0.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$cons,
					_Utils_ap(caption, first),
					A2(
						$elm$core$List$map,
						$elm$core$String$append(indentation),
						rest)));
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$getHtmlContext = function (elmHtmlList) {
	if ($elm$core$List$isEmpty(elmHtmlList)) {
		return '0 matches found for this query.';
	} else {
		var maxDigits = $elm$core$String$length(
			$elm$core$String$fromInt(
				$elm$core$List$length(elmHtmlList)));
		return A2(
			$elm$core$String$join,
			'\n\n',
			A2(
				$elm$core$List$indexedMap,
				$elm_explorations$test$Test$Html$Query$Internal$printIndented(maxDigits),
				elmHtmlList));
	}
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$joinAsList = F2(
	function (toStr, list) {
		return $elm$core$List$isEmpty(list) ? '[]' : ('[ ' + (A2(
			$elm$core$String$join,
			', ',
			A2($elm$core$List$map, toStr, list)) + ' ]'));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute = F3(
	function (attribute, queryString, facts) {
		var _v0 = A2($elm$core$Dict$get, attribute, facts.stringAttributes);
		if (_v0.$ === 'Just') {
			var id = _v0.a;
			return _Utils_eq(id, queryString);
		} else {
			return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute = F3(
	function (attribute, value, facts) {
		var _v0 = A2($elm$core$Dict$get, attribute, facts.boolAttributes);
		if (_v0.$ === 'Just') {
			var id = _v0.a;
			return _Utils_eq(id, value);
		} else {
			return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames = function (facts) {
	return A2(
		$elm$core$String$split,
		' ',
		A2(
			$elm$core$Maybe$withDefault,
			'',
			A2($elm$core$Dict$get, 'className', facts.stringAttributes)));
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass = F2(
	function (queryString, facts) {
		return A2(
			$elm$core$List$member,
			queryString,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames(facts));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$containsAll = F2(
	function (a, b) {
		return $elm$core$List$isEmpty(
			A3(
				$elm$core$List$foldl,
				F2(
					function (i, acc) {
						return A2(
							$elm$core$List$filter,
							$elm$core$Basics$neq(i),
							acc);
					}),
				a,
				b));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses = F2(
	function (classList, facts) {
		return A2(
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$containsAll,
			classList,
			$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$classnames(facts));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle = F2(
	function (style, facts) {
		return _Utils_eq(
			A2($elm$core$Dict$get, style.key, facts.styles),
			$elm$core$Maybe$Just(style.value));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors = F2(
	function (selectors, record) {
		return A2(
			$elm$core$List$all,
			$elm$core$Basics$identity,
			A2(
				$elm$core$List$map,
				function (selector) {
					return selector(record);
				},
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selectors)));
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$markdownPredicate = function (selector) {
	switch (selector.$) {
		case 'Id':
			var id = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, 'id', id));
		case 'ClassName':
			var classname = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass(classname));
		case 'ClassList':
			var classList = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses(classList));
		case 'Tag':
			return $elm$core$Basics$always(false);
		case 'Attribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, key, value));
		case 'BoolAttribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute, key, value));
		case 'Style':
			var style = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle(style));
		case 'ContainsText':
			var text = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.model;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.markdown;
					},
					$elm$core$String$contains(text)));
		default:
			var selectors = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors(selectors));
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$nodeRecordPredicate = function (selector) {
	switch (selector.$) {
		case 'Id':
			var id = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, 'id', id));
		case 'ClassName':
			var classname = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClass(classname));
		case 'ClassList':
			var classList = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasClasses(classList));
		case 'Tag':
			var tag = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.tag;
				},
				$elm$core$Basics$eq(tag));
		case 'Attribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAttribute, key, value));
		case 'BoolAttribute':
			var key = selector.a;
			var value = selector.b;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasBoolAttribute, key, value));
		case 'Style':
			var style = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.facts;
				},
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasStyle(style));
		case 'ContainsText':
			return $elm$core$Basics$always(false);
		default:
			var selectors = selector.a;
			return A2(
				$elm$core$Basics$composeR,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry,
				$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$hasAllSelectors(selectors));
	}
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector = F2(
	function (selector, html) {
		switch (html.$) {
			case 'NodeEntry':
				var record = html.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$nodeRecordPredicate, selector, record);
			case 'MarkdownNode':
				var markdownModel = html.a;
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$markdownPredicate, selector, markdownModel);
			default:
				return false;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$descendInQuery = F3(
	function (maxDescendantDepth, selector, children) {
		if (maxDescendantDepth.$ === 'Nothing') {
			return A2(
				$elm$core$List$concatMap,
				A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp, $elm$core$Maybe$Nothing, selector),
				children);
		} else {
			var depth = maxDescendantDepth.a;
			return (depth > 0) ? A2(
				$elm$core$List$concatMap,
				A2(
					$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp,
					$elm$core$Maybe$Just(depth - 1),
					selector),
				children) : _List_Nil;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp = F3(
	function (maxDescendantDepth, selector, node) {
		switch (node.$) {
			case 'NodeEntry':
				var record = node.a;
				var childEntries = A3($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$descendInQuery, maxDescendantDepth, selector, record.children);
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selector, node) ? A2($elm$core$List$cons, node, childEntries) : childEntries;
			case 'TextTag':
				var text = node.a.text;
				if (selector.$ === 'ContainsText') {
					var innerText = selector.a;
					return A2($elm$core$String$contains, innerText, text) ? _List_fromArray(
						[node]) : _List_Nil;
				} else {
					return _List_Nil;
				}
			case 'MarkdownNode':
				return A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$predicateFromSelector, selector, node) ? _List_fromArray(
					[node]) : _List_Nil;
			default:
				return _List_Nil;
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNode = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp($elm$core$Maybe$Nothing);
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$query = function (selector) {
	return $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNode(selector);
};
var $elm_explorations$test$Test$Html$Selector$Internal$All = function (a) {
	return {$: 'All', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Attribute = F2(
	function (a, b) {
		return {$: 'Attribute', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$BoolAttribute = F2(
	function (a, b) {
		return {$: 'BoolAttribute', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList = function (a) {
	return {$: 'ClassList', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ContainsText = function (a) {
	return {$: 'ContainsText', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Style = function (a) {
	return {$: 'Style', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Tag = function (a) {
	return {$: 'Tag', a: a};
};
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$getChildren = function (elmHtml) {
	if (elmHtml.$ === 'NodeEntry') {
		var children = elmHtml.a.children;
		return children;
	} else {
		return _List_Nil;
	}
};
var $elm_explorations$test$Test$Html$Selector$Internal$query = F4(
	function (fn, fnAll, selector, list) {
		if (!list.b) {
			return list;
		} else {
			var elems = list;
			switch (selector.$) {
				case 'All':
					var selectors = selector.a;
					return A2(fnAll, selectors, elems);
				case 'Classes':
					var classes = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList(classes)),
						elems);
				case 'Class':
					var _class = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ClassList(
								_List_fromArray(
									[_class]))),
						elems);
				case 'Attribute':
					var name = selector.a.name;
					var value = selector.a.value;
					return A2(
						$elm$core$List$concatMap,
						fn(
							A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Attribute, name, value)),
						elems);
				case 'BoolAttribute':
					var name = selector.a.name;
					var value = selector.a.value;
					return A2(
						$elm$core$List$concatMap,
						fn(
							A2($elm_explorations$test$Test$Html$Internal$ElmHtml$Query$BoolAttribute, name, value)),
						elems);
				case 'Style':
					var style = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Style(style)),
						elems);
				case 'Tag':
					var name = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$Tag(name)),
						elems);
				case 'Text':
					var text = selector.a;
					return A2(
						$elm$core$List$concatMap,
						fn(
							$elm_explorations$test$Test$Html$Internal$ElmHtml$Query$ContainsText(text)),
						elems);
				case 'Containing':
					var selectors = selector.a;
					var anyDescendantsMatch = function (elem) {
						var _v2 = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$getChildren(elem);
						if (!_v2.b) {
							return false;
						} else {
							var children = _v2;
							var _v3 = A4(
								$elm_explorations$test$Test$Html$Selector$Internal$query,
								fn,
								fnAll,
								$elm_explorations$test$Test$Html$Selector$Internal$All(selectors),
								children);
							if (!_v3.b) {
								return A2($elm$core$List$any, anyDescendantsMatch, children);
							} else {
								return true;
							}
						}
					};
					return A2($elm$core$List$filter, anyDescendantsMatch, elems);
				default:
					return _List_Nil;
			}
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$queryAll = F2(
	function (selectors, list) {
		if (!selectors.b) {
			return list;
		} else {
			var selector = selectors.a;
			var rest = selectors.b;
			return A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
				rest,
				A4($elm_explorations$test$Test$Html$Selector$Internal$query, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$query, $elm_explorations$test$Test$Html$Selector$Internal$queryAll, selector, list));
		}
	});
var $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryChildren = $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryInNodeHelp(
	$elm$core$Maybe$Just(1));
var $elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren = F2(
	function (selectors, list) {
		if (!selectors.b) {
			return list;
		} else {
			var selector = selectors.a;
			var rest = selectors.b;
			return A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
				rest,
				A4($elm_explorations$test$Test$Html$Selector$Internal$query, $elm_explorations$test$Test$Html$Internal$ElmHtml$Query$queryChildren, $elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren, selector, list));
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$styleToString = function (_v0) {
	var key = _v0.key;
	var value = _v0.value;
	return key + (':' + value);
};
var $elm_explorations$test$Test$Html$Selector$Internal$selectorToString = function (criteria) {
	var quoteString = function (s) {
		return '\"' + (s + '\"');
	};
	var boolToString = function (b) {
		if (b) {
			return 'True';
		} else {
			return 'False';
		}
	};
	switch (criteria.$) {
		case 'All':
			var list = criteria.a;
			return A2(
				$elm$core$String$join,
				' ',
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, list));
		case 'Classes':
			var list = criteria.a;
			return 'classes ' + quoteString(
				A2($elm$core$String$join, ' ', list));
		case 'Class':
			var _class = criteria.a;
			return 'class ' + quoteString(_class);
		case 'Attribute':
			var name = criteria.a.name;
			var value = criteria.a.value;
			return 'attribute ' + (quoteString(name) + (' ' + quoteString(value)));
		case 'BoolAttribute':
			var name = criteria.a.name;
			var value = criteria.a.value;
			return 'attribute ' + (quoteString(name) + (' ' + boolToString(value)));
		case 'Style':
			var style = criteria.a;
			return 'styles ' + $elm_explorations$test$Test$Html$Selector$Internal$styleToString(style);
		case 'Tag':
			var name = criteria.a;
			return 'tag ' + quoteString(name);
		case 'Text':
			var text = criteria.a;
			return 'text ' + quoteString(text);
		case 'Containing':
			var list = criteria.a;
			var selectors = A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, list));
			return 'containing [ ' + (selectors + ' ] ');
		default:
			return 'invalid';
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$withHtmlContext = F2(
	function (htmlStr, str) {
		return A2(
			$elm$core$String$join,
			'\n\n',
			_List_fromArray(
				[str, htmlStr]));
	});
var $elm_explorations$test$Test$Html$Query$Internal$toLinesHelp = F5(
	function (expectationFailure, elmHtmlList, selectorQueries, queryName, results) {
		var recurse = F3(
			function (newElmHtmlList, rest, result) {
				return A5(
					$elm_explorations$test$Test$Html$Query$Internal$toLinesHelp,
					expectationFailure,
					newElmHtmlList,
					rest,
					queryName,
					A2($elm$core$List$cons, result, results));
			});
		var bailOut = function (result) {
			return A2(
				$elm$core$List$cons,
				A2(
					$elm$core$String$join,
					'\n\n\n✗ ',
					_List_fromArray(
						[result, expectationFailure])),
				results);
		};
		if (!selectorQueries.b) {
			return A2(
				$elm$core$List$cons,
				A2(
					$elm$core$String$join,
					'\n\n',
					_List_fromArray(
						[queryName, expectationFailure])),
				results);
		} else {
			var selectorQuery = selectorQueries.a;
			var rest = selectorQueries.b;
			switch (selectorQuery.$) {
				case 'FindAll':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					return A3(
						recurse,
						elements,
						rest,
						A2(
							$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
							$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
							'Query.findAll ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors)));
				case 'Find':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.find ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors));
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
				case 'Children':
					var selectors = selectorQuery.a;
					var elements = A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList));
					return A3(
						recurse,
						elements,
						rest,
						A2(
							$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
							$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
							'Query.children ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors)));
				case 'First':
					var elements = A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$map,
							function (elem) {
								return _List_fromArray(
									[elem]);
							},
							$elm$core$List$head(elmHtmlList)));
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.first');
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
				default:
					var index = selectorQuery.a;
					var elements = A2($elm_explorations$test$Test$Html$Query$Internal$getElementAt, index, elmHtmlList);
					var result = A2(
						$elm_explorations$test$Test$Html$Query$Internal$withHtmlContext,
						$elm_explorations$test$Test$Html$Query$Internal$getHtmlContext(elements),
						'Query.index ' + $elm$core$String$fromInt(index));
					return ($elm$core$List$length(elements) === 1) ? A3(recurse, elements, rest, result) : bailOut(result);
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$toLines = F3(
	function (expectationFailure, query, queryName) {
		if (query.$ === 'Query') {
			var node = query.a;
			var selectors = query.b;
			return $elm$core$List$reverse(
				A5(
					$elm_explorations$test$Test$Html$Query$Internal$toLinesHelp,
					expectationFailure,
					_List_fromArray(
						[
							$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node)
						]),
					$elm$core$List$reverse(selectors),
					queryName,
					_List_Nil));
		} else {
			var message = query.a;
			return _List_fromArray(
				['Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>', message]);
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$failWithQuery = F4(
	function (showTrace, queryName, query, expectation) {
		var _v0 = $elm_explorations$test$Test$Runner$getFailureReason(expectation);
		if (_v0.$ === 'Just') {
			var description = _v0.a.description;
			var lines = A2(
				$elm$core$List$map,
				$elm_explorations$test$Test$Html$Query$Internal$prefixOutputLine,
				A3($elm_explorations$test$Test$Html$Query$Internal$toLines, description, query, queryName));
			var tracedLines = showTrace ? A2(
				$elm$core$List$cons,
				$elm_explorations$test$Test$Html$Query$Internal$addQueryFromHtmlLine(query),
				lines) : lines;
			return $elm_explorations$test$Expect$fail(
				A2($elm$core$String$join, '\n\n\n', tracedLines));
		} else {
			return expectation;
		}
	});
var $elm_explorations$test$Test$Html$Selector$Internal$hasAll = F2(
	function (selectors, elems) {
		hasAll:
		while (true) {
			if (!selectors.b) {
				return true;
			} else {
				var selector = selectors.a;
				var rest = selectors.b;
				if ($elm$core$List$isEmpty(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						_List_fromArray(
							[selector]),
						elems))) {
					return false;
				} else {
					var $temp$selectors = rest,
						$temp$elems = elems;
					selectors = $temp$selectors;
					elems = $temp$elems;
					continue hasAll;
				}
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$queryErrorToString = function (error) {
	switch (error.$) {
		case 'NoResultsForSingle':
			var queryName = error.a;
			return queryName + ' always expects to find 1 element, but it found 0 instead.';
		case 'MultipleResultsForSingle':
			var queryName = error.a;
			var resultCount = error.b;
			return queryName + (' always expects to find 1 element, but it found ' + ($elm$core$String$fromInt(resultCount) + (' instead.\n\n\nHINT: If you actually expected ' + ($elm$core$String$fromInt(resultCount) + ' elements, use Query.findAll instead of Query.find.'))));
		default:
			var message = error.a;
			return 'Internal Error: failed to decode the virtual dom.  Please report this at <https://github.com/elm-explorations/test/issues>.  ' + message;
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$showSelectorOutcome = F2(
	function (elmHtmlList, selector) {
		var outcome = function () {
			var _v0 = A2(
				$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
				_List_fromArray(
					[selector]),
				elmHtmlList);
			if (!_v0.b) {
				return '✗';
			} else {
				return '✓';
			}
		}();
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					outcome,
					'has',
					$elm_explorations$test$Test$Html$Selector$Internal$selectorToString(selector)
				]));
	});
var $elm_explorations$test$Test$Html$Query$Internal$OtherInternalError = function (a) {
	return {$: 'OtherInternalError', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle = function (a) {
	return {$: 'NoResultsForSingle', a: a};
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$MultipleResultsForSingle = F2(
	function (a, b) {
		return {$: 'MultipleResultsForSingle', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$verifySingle = F2(
	function (queryName, list) {
		if (!list.b) {
			return $elm$core$Result$Err(
				$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle(queryName));
		} else {
			if (!list.b.b) {
				var singleton = list.a;
				return $elm$core$Result$Ok(singleton);
			} else {
				var multiples = list;
				return $elm$core$Result$Err(
					A2(
						$elm_explorations$test$Test$Html$Query$Internal$MultipleResultsForSingle,
						queryName,
						$elm$core$List$length(multiples)));
			}
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverseSelector = F2(
	function (selectorQuery, elmHtmlList) {
		switch (selectorQuery.$) {
			case 'Find':
				var selectors = selectorQuery.a;
				return A2(
					$elm$core$Result$map,
					function (elem) {
						return _List_fromArray(
							[elem]);
					},
					A2(
						$elm_explorations$test$Test$Html$Query$Internal$verifySingle,
						'Query.find',
						A2(
							$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
							selectors,
							A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList))));
			case 'FindAll':
				var selectors = selectorQuery.a;
				return $elm$core$Result$Ok(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAll,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList)));
			case 'Children':
				var selectors = selectorQuery.a;
				return $elm$core$Result$Ok(
					A2(
						$elm_explorations$test$Test$Html$Selector$Internal$queryAllChildren,
						selectors,
						A2($elm$core$List$concatMap, $elm_explorations$test$Test$Html$Query$Internal$getChildren, elmHtmlList)));
			case 'First':
				return A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Result$Err(
						$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle('Query.first')),
					A2(
						$elm$core$Maybe$map,
						function (elem) {
							return $elm$core$Result$Ok(
								_List_fromArray(
									[elem]));
						},
						$elm$core$List$head(elmHtmlList)));
			default:
				var index = selectorQuery.a;
				var elements = A2($elm_explorations$test$Test$Html$Query$Internal$getElementAt, index, elmHtmlList);
				return ($elm$core$List$length(elements) === 1) ? $elm$core$Result$Ok(elements) : $elm$core$Result$Err(
					$elm_explorations$test$Test$Html$Query$Internal$NoResultsForSingle(
						'Query.index ' + $elm$core$String$fromInt(index)));
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverseSelectors = F2(
	function (selectorQueries, elmHtmlList) {
		return A3(
			$elm$core$List$foldr,
			A2($elm$core$Basics$composeR, $elm_explorations$test$Test$Html$Query$Internal$traverseSelector, $elm$core$Result$andThen),
			$elm$core$Result$Ok(elmHtmlList),
			selectorQueries);
	});
var $elm_explorations$test$Test$Html$Query$Internal$traverse = function (query) {
	if (query.$ === 'Query') {
		var node = query.a;
		var selectorQueries = query.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$traverseSelectors,
			selectorQueries,
			_List_fromArray(
				[
					$elm_explorations$test$Test$Html$Internal$Inert$toElmHtml(node)
				]));
	} else {
		var message = query.a;
		return $elm$core$Result$Err(
			$elm_explorations$test$Test$Html$Query$Internal$OtherInternalError(message));
	}
};
var $elm_explorations$test$Test$Html$Query$Internal$has = F2(
	function (selectors, query) {
		var _v0 = $elm_explorations$test$Test$Html$Query$Internal$traverse(query);
		if (_v0.$ === 'Ok') {
			var elmHtmlList = _v0.a;
			return A2($elm_explorations$test$Test$Html$Selector$Internal$hasAll, selectors, elmHtmlList) ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Expect$fail(
				A2(
					$elm$core$String$join,
					'\n',
					A2(
						$elm$core$List$map,
						$elm_explorations$test$Test$Html$Query$Internal$showSelectorOutcome(elmHtmlList),
						selectors)));
		} else {
			var error = _v0.a;
			return $elm_explorations$test$Expect$fail(
				$elm_explorations$test$Test$Html$Query$Internal$queryErrorToString(error));
		}
	});
var $elm_explorations$test$Test$Html$Query$has = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A4(
			$elm_explorations$test$Test$Html$Query$Internal$failWithQuery,
			showTrace,
			'Query.has ' + A2($elm_explorations$test$Test$Html$Query$Internal$joinAsList, $elm_explorations$test$Test$Html$Selector$Internal$selectorToString, selectors),
			query,
			A2($elm_explorations$test$Test$Html$Query$Internal$has, selectors, query));
	});
var $author$project$View$Day$view = function (_v0) {
	return _Debug_todo(
		'View.Day',
		{
			start: {line: 29, column: 5},
			end: {line: 29, column: 15}
		})('Implement View.Day.view');
};
var $author$project$DayViewTests$testDayViewMatchesSelectors = function (_v0) {
	var description = _v0.description;
	var testSelectors = _v0.testSelectors;
	var data = _v0.data;
	return A2(
		$elm_explorations$test$Test$test,
		description,
		function (_v1) {
			return A2(
				$elm_explorations$test$Test$Html$Query$has,
				A2(
					$elm$core$List$cons,
					$elm_explorations$test$Test$Html$Selector$class('day'),
					testSelectors(data)),
				$elm_explorations$test$Test$Html$Query$fromHtml(
					$author$project$View$Day$view(data)));
		});
};
var $elm_explorations$test$Test$Html$Selector$Internal$Text = function (a) {
	return {$: 'Text', a: a};
};
var $elm_explorations$test$Test$Html$Selector$text = $elm_explorations$test$Test$Html$Selector$Internal$Text;
var $author$project$DayViewTests$suite = function () {
	var sampleDailyDataNoMinMax = {
		date: $author$project$Util$Time$Date(
			{day: 5, month: $elm$time$Time$Feb, year: 2022}),
		highTemp: $elm$core$Maybe$Nothing,
		lowTemp: $elm$core$Maybe$Nothing,
		totalPrecipitaion: 0
	};
	var sampleDailyData = {
		date: $author$project$Util$Time$Date(
			{day: 21, month: $elm$time$Time$Jan, year: 2022}),
		highTemp: $elm$core$Maybe$Just(0),
		lowTemp: $elm$core$Maybe$Just(10),
		totalPrecipitaion: 2
	};
	return A2(
		$elm_explorations$test$Test$describe,
		'View.Day module',
		_List_fromArray(
			[
				A2(
				$elm_explorations$test$Test$test,
				'Day view has class day',
				function (_v0) {
					return A2(
						$elm_explorations$test$Test$Html$Query$has,
						_List_fromArray(
							[
								$elm_explorations$test$Test$Html$Selector$class('day')
							]),
						$elm_explorations$test$Test$Html$Query$fromHtml(
							$author$project$View$Day$view(sampleDailyData)));
				}),
				A2(
				$elm_explorations$test$Test$describe,
				'Day view has required classes',
				A2(
					$elm$core$List$map,
					function (c) {
						return $author$project$DayViewTests$testDayViewMatchesSelectors(
							{
								data: sampleDailyData,
								description: c,
								testSelectors: function (_v1) {
									return _List_fromArray(
										[
											$elm_explorations$test$Test$Html$Selector$containing(
											_List_fromArray(
												[
													$elm_explorations$test$Test$Html$Selector$class(c)
												]))
										]);
								}
							});
					},
					_List_fromArray(
						['day-lowtemp', 'day-hightemp', 'day-date', 'day-precipitation']))),
				A2(
				$elm_explorations$test$Test$describe,
				'Day view contains all data fields',
				A2(
					$elm$core$List$map,
					$author$project$DayViewTests$testDayViewMatchesSelectors,
					_List_fromArray(
						[
							{
							data: sampleDailyData,
							description: 'lowTemp',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-hightemp'),
												$elm_explorations$test$Test$Html$Selector$text(
												A2(
													$elm$core$Maybe$withDefault,
													'unavailable',
													A2($elm$core$Maybe$map, $elm$core$String$fromFloat, d.highTemp)))
											]))
									]);
							}
						},
							{
							data: sampleDailyData,
							description: 'highTemp',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-lowtemp'),
												$elm_explorations$test$Test$Html$Selector$text(
												A2(
													$elm$core$Maybe$withDefault,
													'unavailable',
													A2($elm$core$Maybe$map, $elm$core$String$fromFloat, d.lowTemp)))
											]))
									]);
							}
						},
							{
							data: sampleDailyDataNoMinMax,
							description: 'lowTemp (Nothing case)',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-hightemp'),
												$elm_explorations$test$Test$Html$Selector$text(
												A2(
													$elm$core$Maybe$withDefault,
													'unavailable',
													A2($elm$core$Maybe$map, $elm$core$String$fromFloat, d.highTemp)))
											]))
									]);
							}
						},
							{
							data: sampleDailyDataNoMinMax,
							description: 'highTemp (Nothing case)',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-lowtemp'),
												$elm_explorations$test$Test$Html$Selector$text(
												A2(
													$elm$core$Maybe$withDefault,
													'unavailable',
													A2($elm$core$Maybe$map, $elm$core$String$fromFloat, d.lowTemp)))
											]))
									]);
							}
						},
							{
							data: sampleDailyData,
							description: 'date',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-date'),
												$elm_explorations$test$Test$Html$Selector$text(
												$author$project$Util$Time$formatDate(d.date))
											]))
									]);
							}
						},
							{
							data: sampleDailyData,
							description: 'precipitation',
							testSelectors: function (d) {
								return _List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$class('day-precipitation'),
												$elm_explorations$test$Test$Html$Selector$text(
												$elm$core$String$fromFloat(d.totalPrecipitaion))
											]))
									]);
							}
						}
						])))
			]));
}();
var $author$project$Main$ChangeWeatherItemSelection = F2(
	function (a, b) {
		return {$: 'ChangeWeatherItemSelection', a: a, b: b};
	});
var $author$project$Model$HaveWeatherAndTime = function (a) {
	return {$: 'HaveWeatherAndTime', a: a};
};
var $elm$time$Time$Nov = {$: 'Nov'};
var $elm_explorations$test$Expect$allHelp = F2(
	function (list, query) {
		allHelp:
		while (true) {
			if (!list.b) {
				return $elm_explorations$test$Expect$pass;
			} else {
				var check = list.a;
				var rest = list.b;
				var _v1 = check(query);
				if (_v1.$ === 'Pass') {
					var $temp$list = rest,
						$temp$query = query;
					list = $temp$list;
					query = $temp$query;
					continue allHelp;
				} else {
					var outcome = _v1;
					return outcome;
				}
			}
		}
	});
var $elm_explorations$test$Expect$all = F2(
	function (list, query) {
		return $elm$core$List$isEmpty(list) ? $elm_explorations$test$Test$Expectation$fail(
			{
				description: 'Expect.all was given an empty list. You must make at least one expectation to have a valid test!',
				reason: $elm_explorations$test$Test$Runner$Failure$Invalid($elm_explorations$test$Test$Runner$Failure$EmptyList)
			}) : A2($elm_explorations$test$Expect$allHelp, list, query);
	});
var $elm_explorations$test$Test$Html$Selector$Internal$BoolAttribute = function (a) {
	return {$: 'BoolAttribute', a: a};
};
var $elm_explorations$test$Test$Html$Selector$Internal$namedBoolAttr = F2(
	function (name, value) {
		return $elm_explorations$test$Test$Html$Selector$Internal$BoolAttribute(
			{name: name, value: value});
	});
var $elm_explorations$test$Test$Html$Selector$checked = $elm_explorations$test$Test$Html$Selector$Internal$namedBoolAttr('checked');
var $elm_explorations$test$Test$Html$Query$Internal$multipleToExpectation = F2(
	function (_v0, check) {
		var query = _v0.b;
		var _v1 = $elm_explorations$test$Test$Html$Query$Internal$traverse(query);
		if (_v1.$ === 'Ok') {
			var list = _v1.a;
			return check(list);
		} else {
			var error = _v1.a;
			return $elm_explorations$test$Expect$fail(
				$elm_explorations$test$Test$Html$Query$Internal$queryErrorToString(error));
		}
	});
var $elm_explorations$test$Test$Html$Query$count = F2(
	function (expect, multiple) {
		var showTrace = multiple.a;
		var query = multiple.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$multipleToExpectation,
			multiple,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$length,
				A2(
					$elm$core$Basics$composeR,
					expect,
					A3($elm_explorations$test$Test$Html$Query$Internal$failWithQuery, showTrace, 'Query.count', query))));
	});
var $author$project$Model$Dev = {$: 'Dev'};
var $author$project$Main$devFlags = {apiUrl: 'http://localhost:3000', mode: $author$project$Model$Dev};
var $elm_explorations$test$Test$Runner$Failure$ListDiff = F2(
	function (a, b) {
		return {$: 'ListDiff', a: a, b: b};
	});
var $elm_explorations$test$Expect$equalLists = F2(
	function (expected, actual) {
		return _Utils_eq(expected, actual) ? $elm_explorations$test$Expect$pass : $elm_explorations$test$Test$Expectation$fail(
			{
				description: 'Expect.equalLists',
				reason: A2(
					$elm_explorations$test$Test$Runner$Failure$ListDiff,
					A2($elm$core$List$map, $elm_explorations$test$Test$Internal$toString, expected),
					A2($elm$core$List$map, $elm_explorations$test$Test$Internal$toString, actual))
			});
	});
var $elm_explorations$test$Test$Html$Query$Internal$FindAll = function (a) {
	return {$: 'FindAll', a: a};
};
var $elm_explorations$test$Test$Html$Query$Internal$Multiple = F2(
	function (a, b) {
		return {$: 'Multiple', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Query$Internal$prependSelector = F2(
	function (query, selector) {
		if (query.$ === 'Query') {
			var node = query.a;
			var selectors = query.b;
			return A2(
				$elm_explorations$test$Test$Html$Query$Internal$Query,
				node,
				A2($elm$core$List$cons, selector, selectors));
		} else {
			var message = query.a;
			return $elm_explorations$test$Test$Html$Query$Internal$InternalError(message);
		}
	});
var $elm_explorations$test$Test$Html$Query$findAll = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$Multiple,
			showTrace,
			A2(
				$elm_explorations$test$Test$Html$Query$Internal$prependSelector,
				query,
				$elm_explorations$test$Test$Html$Query$Internal$FindAll(selectors)));
	});
var $author$project$Main$getChartData = function (_v0) {
	return _Debug_todo(
		'Main',
		{
			start: {line: 155, column: 5},
			end: {line: 155, column: 15}
		})('getChartData');
};
var $author$project$Main$getWeeklyData = function (_v0) {
	return _Debug_todo(
		'Main',
		{
			start: {line: 169, column: 5},
			end: {line: 169, column: 15}
		})('getWeeklyData');
};
var $author$project$Model$WaitingForTime = {$: 'WaitingForTime'};
var $author$project$Model$initModel = function (config) {
	return {config: config, state: $author$project$Model$WaitingForTime};
};
var $elm_explorations$test$Test$Html$Selector$Internal$Tag = function (a) {
	return {$: 'Tag', a: a};
};
var $elm_explorations$test$Test$Html$Selector$tag = function (name) {
	return $elm_explorations$test$Test$Html$Selector$Internal$Tag(name);
};
var $author$project$Model$FailedToLoad = {$: 'FailedToLoad'};
var $author$project$Model$HaveTime = function (a) {
	return {$: 'HaveTime', a: a};
};
var $author$project$Main$adjustTime = F2(
	function (offset, time) {
		return $elm$time$Time$millisToPosix(
			function (m) {
				return m + (1000 * offset);
			}(
				$elm$time$Time$posixToMillis(time)));
	});
var $author$project$Main$GotWeather = function (a) {
	return {$: 'GotWeather', a: a};
};
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$crossOrigin = F3(
	function (prePath, pathSegments, parameters) {
		return prePath + ('/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
	});
var $author$project$Model$WeatherData$decodeWeatherData = _Debug_todo(
	'Model.WeatherData',
	{
		start: {line: 124, column: 5},
		end: {line: 124, column: 15}
	})('decodeWeatherData');
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$Request = function (a) {
	return {$: 'Request', a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {reqs: reqs, subs: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (cmd.$ === 'Cancel') {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 'Nothing') {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.tracker;
							if (_v4.$ === 'Nothing') {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.reqs));
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.subs)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 'Cancel', a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (cmd.$ === 'Cancel') {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					allowCookiesFromOtherDomains: r.allowCookiesFromOtherDomains,
					body: r.body,
					expect: A2(_Http_mapExpect, func, r.expect),
					headers: r.headers,
					method: r.method,
					timeout: r.timeout,
					tracker: r.tracker,
					url: r.url
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 'MySub', a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{allowCookiesFromOtherDomains: false, body: r.body, expect: r.expect, headers: r.headers, method: r.method, timeout: r.timeout, tracker: r.tracker, url: r.url}));
};
var $elm$http$Http$get = function (r) {
	return $elm$http$Http$request(
		{body: $elm$http$Http$emptyBody, expect: r.expect, headers: _List_Nil, method: 'GET', timeout: $elm$core$Maybe$Nothing, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 'QueryParameter', a: a, b: b};
	});
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $elm$url$Url$Builder$string = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$url$Url$percentEncode(value));
	});
var $author$project$Main$getWeather = function (apiUrl) {
	var queryParams = $elm$core$List$concat(
		_List_fromArray(
			[
				_List_fromArray(
				[
					A2(
					$elm$url$Url$Builder$string,
					'latitude',
					$elm$core$String$fromFloat(46.77)),
					A2(
					$elm$url$Url$Builder$string,
					'longitude',
					$elm$core$String$fromFloat(23.6)),
					A2($elm$url$Url$Builder$string, 'timezone', 'auto'),
					A2($elm$url$Url$Builder$string, 'timeformat', 'unixtime')
				]),
				A2(
				$elm$core$List$map,
				$elm$url$Url$Builder$string('hourly'),
				_List_fromArray(
					['temperature_2m', 'precipitation']))
			]));
	return $elm$http$Http$get(
		{
			expect: A2($elm$http$Http$expectJson, $author$project$Main$GotWeather, $author$project$Model$WeatherData$decodeWeatherData),
			url: A3(
				$elm$url$Url$Builder$crossOrigin,
				apiUrl,
				_List_fromArray(
					['v1', 'forecast']),
				queryParams)
		});
};
var $author$project$Main$update = F2(
	function (msg, model) {
		var _v0 = function () {
			var _v1 = _Utils_Tuple2(msg, model.state);
			_v1$4:
			while (true) {
				switch (_v1.a.$) {
					case 'GotTime':
						var time = _v1.a.a;
						return _Utils_Tuple2(
							$author$project$Model$HaveTime(
								{time: time}),
							$author$project$Main$getWeather(model.config.apiUrl));
					case 'GotWeather':
						if (_v1.b.$ === 'HaveTime') {
							var res = _v1.a.a;
							var state = _v1.b.a;
							if (res.$ === 'Ok') {
								var weather = res.a;
								return _Utils_Tuple2(
									$author$project$Model$HaveWeatherAndTime(
										{
											hovering: _List_Nil,
											selectedItems: $author$project$Model$WeatherItems$allSelected,
											time: A2($author$project$Main$adjustTime, weather.utcOffset, state.time),
											weather: weather
										}),
									$elm$core$Platform$Cmd$none);
							} else {
								var err = res.a;
								return _Utils_Tuple2($author$project$Model$FailedToLoad, $elm$core$Platform$Cmd$none);
							}
						} else {
							break _v1$4;
						}
					case 'OnHover':
						if (_v1.b.$ === 'HaveWeatherAndTime') {
							var hovering = _v1.a.a;
							var data = _v1.b.a;
							return _Utils_Tuple2(
								$author$project$Model$HaveWeatherAndTime(
									_Utils_update(
										data,
										{hovering: hovering})),
								$elm$core$Platform$Cmd$none);
						} else {
							break _v1$4;
						}
					case 'ChangeWeatherItemSelection':
						var _v3 = _v1.a;
						var item = _v3.a;
						var newValue = _v3.b;
						return _Debug_todo(
							'Main',
							{
								start: {line: 137, column: 21},
								end: {line: 137, column: 31}
							})('Handle the ChangeWeatherItemSelection message in update');
					default:
						break _v1$4;
				}
			}
			return _Utils_Tuple2(model.state, $elm$core$Platform$Cmd$none);
		}();
		var newState = _v0.a;
		var cmd = _v0.b;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{state: newState}),
			cmd);
	});
var $author$project$Main$OnHover = function (a) {
	return {$: 'OnHover', a: a};
};
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $terezka$elm_charts$Internal$Helpers$blue = '#12A5ED';
var $terezka$elm_charts$Chart$Attributes$blue = $terezka$elm_charts$Internal$Helpers$blue;
var $elm$html$Html$br = _VirtualDom_node('br');
var $terezka$elm_charts$Internal$Svg$Event = F2(
	function (name, handler) {
		return {handler: handler, name: name};
	});
var $terezka$elm_charts$Internal$Helpers$apply = F2(
	function (funcs, _default) {
		var apply_ = F2(
			function (f, a) {
				return f(a);
			});
		return A3($elm$core$List$foldl, apply_, _default, funcs);
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$clipPath = $elm$svg$Svg$trustedNode('clipPath');
var $debois$elm_dom$DOM$offsetHeight = A2($elm$json$Json$Decode$field, 'offsetHeight', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetWidth = A2($elm$json$Json$Decode$field, 'offsetWidth', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$offsetLeft = A2($elm$json$Json$Decode$field, 'offsetLeft', $elm$json$Json$Decode$float);
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $debois$elm_dom$DOM$offsetParent = F2(
	function (x, decoder) {
		return $elm$json$Json$Decode$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$json$Json$Decode$field,
					'offsetParent',
					$elm$json$Json$Decode$null(x)),
					A2($elm$json$Json$Decode$field, 'offsetParent', decoder)
				]));
	});
var $debois$elm_dom$DOM$offsetTop = A2($elm$json$Json$Decode$field, 'offsetTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollLeft = A2($elm$json$Json$Decode$field, 'scrollLeft', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$scrollTop = A2($elm$json$Json$Decode$field, 'scrollTop', $elm$json$Json$Decode$float);
var $debois$elm_dom$DOM$position = F2(
	function (x, y) {
		return A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				var x_ = _v0.a;
				var y_ = _v0.b;
				return A2(
					$debois$elm_dom$DOM$offsetParent,
					_Utils_Tuple2(x_, y_),
					A2($debois$elm_dom$DOM$position, x_, y_));
			},
			A5(
				$elm$json$Json$Decode$map4,
				F4(
					function (scrollLeftP, scrollTopP, offsetLeftP, offsetTopP) {
						return _Utils_Tuple2((x + offsetLeftP) - scrollLeftP, (y + offsetTopP) - scrollTopP);
					}),
				$debois$elm_dom$DOM$scrollLeft,
				$debois$elm_dom$DOM$scrollTop,
				$debois$elm_dom$DOM$offsetLeft,
				$debois$elm_dom$DOM$offsetTop));
	});
var $debois$elm_dom$DOM$boundingClientRect = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (_v0, width, height) {
			var x = _v0.a;
			var y = _v0.b;
			return {height: height, left: x, top: y, width: width};
		}),
	A2($debois$elm_dom$DOM$position, 0, 0),
	$debois$elm_dom$DOM$offsetWidth,
	$debois$elm_dom$DOM$offsetHeight);
var $elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		$elm$json$Json$Decode$andThen,
		thunk,
		$elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var $debois$elm_dom$DOM$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
function $terezka$elm_charts$Internal$Svg$cyclic$decodePosition() {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$debois$elm_dom$DOM$boundingClientRect,
				$elm$json$Json$Decode$lazy(
				function (_v0) {
					return $debois$elm_dom$DOM$parentElement(
						$terezka$elm_charts$Internal$Svg$cyclic$decodePosition());
				})
			]));
}
try {
	var $terezka$elm_charts$Internal$Svg$decodePosition = $terezka$elm_charts$Internal$Svg$cyclic$decodePosition();
	$terezka$elm_charts$Internal$Svg$cyclic$decodePosition = function () {
		return $terezka$elm_charts$Internal$Svg$decodePosition;
	};
} catch ($) {
	throw 'Some top-level definitions from `Internal.Svg` are causing infinite recursion:\n\n  ┌─────┐\n  │    decodePosition\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $terezka$elm_charts$Internal$Coordinates$innerLength = function (axis) {
	return A2($elm$core$Basics$max, 1, (axis.length - axis.marginMin) - axis.marginMax);
};
var $terezka$elm_charts$Internal$Coordinates$innerWidth = function (plane) {
	return $terezka$elm_charts$Internal$Coordinates$innerLength(plane.x);
};
var $terezka$elm_charts$Internal$Coordinates$range = function (axis) {
	var diff = axis.max - axis.min;
	return (diff > 0) ? diff : 1;
};
var $terezka$elm_charts$Internal$Coordinates$scaleCartesianX = F2(
	function (plane, value) {
		return (value * $terezka$elm_charts$Internal$Coordinates$range(plane.x)) / $terezka$elm_charts$Internal$Coordinates$innerWidth(plane);
	});
var $terezka$elm_charts$Internal$Coordinates$toCartesianX = F2(
	function (plane, value) {
		return A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, value - plane.x.marginMin) + plane.x.min;
	});
var $terezka$elm_charts$Internal$Coordinates$innerHeight = function (plane) {
	return $terezka$elm_charts$Internal$Coordinates$innerLength(plane.y);
};
var $terezka$elm_charts$Internal$Coordinates$scaleCartesianY = F2(
	function (plane, value) {
		return (value * $terezka$elm_charts$Internal$Coordinates$range(plane.y)) / $terezka$elm_charts$Internal$Coordinates$innerHeight(plane);
	});
var $terezka$elm_charts$Internal$Coordinates$toCartesianY = F2(
	function (plane, value) {
		return ($terezka$elm_charts$Internal$Coordinates$range(plane.y) - A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, value - plane.y.marginMin)) + plane.y.min;
	});
var $terezka$elm_charts$Internal$Svg$fromSvg = F2(
	function (plane, point) {
		return {
			x: A2($terezka$elm_charts$Internal$Coordinates$toCartesianX, plane, point.x),
			y: A2($terezka$elm_charts$Internal$Coordinates$toCartesianY, plane, point.y)
		};
	});
var $debois$elm_dom$DOM$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $terezka$elm_charts$Internal$Svg$decoder = F2(
	function (plane, toMsg) {
		var handle = F3(
			function (mouseX, mouseY, box) {
				var yPrev = plane.y;
				var xPrev = plane.x;
				var widthPercent = box.width / plane.x.length;
				var heightPercent = box.height / plane.y.length;
				var newPlane = _Utils_update(
					plane,
					{
						x: _Utils_update(
							xPrev,
							{length: box.width, marginMax: plane.x.marginMax * widthPercent, marginMin: plane.x.marginMin * widthPercent}),
						y: _Utils_update(
							yPrev,
							{length: box.height, marginMax: plane.y.marginMax * heightPercent, marginMin: plane.y.marginMin * heightPercent})
					});
				var searched = A2(
					$terezka$elm_charts$Internal$Svg$fromSvg,
					newPlane,
					{x: mouseX - box.left, y: mouseY - box.top});
				return A2(toMsg, newPlane, searched);
			});
		return A4(
			$elm$json$Json$Decode$map3,
			handle,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			$debois$elm_dom$DOM$target($terezka$elm_charts$Internal$Svg$decodePosition));
	});
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$svg$Svg$Events$on = $elm$html$Html$Events$on;
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $terezka$elm_charts$Internal$Coordinates$toId = function (plane) {
	var numToStr = A2(
		$elm$core$Basics$composeR,
		$elm$core$String$fromFloat,
		A2($elm$core$String$replace, '.', '-'));
	return A2(
		$elm$core$String$join,
		'_',
		_List_fromArray(
			[
				'elm-charts__id',
				numToStr(plane.x.length),
				numToStr(plane.x.min),
				numToStr(plane.x.max),
				numToStr(plane.x.marginMin),
				numToStr(plane.x.marginMax),
				numToStr(plane.y.length),
				numToStr(plane.y.min),
				numToStr(plane.y.max),
				numToStr(plane.y.marginMin),
				numToStr(plane.y.marginMax)
			]));
};
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $terezka$elm_charts$Internal$Svg$container = F5(
	function (plane, config, below, chartEls, above) {
		var toEvent = function (event) {
			return A2(
				$elm$svg$Svg$Events$on,
				event.name,
				A2($terezka$elm_charts$Internal$Svg$decoder, plane, event.handler));
		};
		var svgAttrsSize = config.responsive ? _List_fromArray(
			[
				$elm$svg$Svg$Attributes$viewBox(
				'0 0 ' + ($elm$core$String$fromFloat(plane.x.length) + (' ' + $elm$core$String$fromFloat(plane.y.length)))),
				A2($elm$html$Html$Attributes$style, 'display', 'block')
			]) : _List_fromArray(
			[
				$elm$svg$Svg$Attributes$width(
				$elm$core$String$fromFloat(plane.x.length)),
				$elm$svg$Svg$Attributes$height(
				$elm$core$String$fromFloat(plane.y.length)),
				A2($elm$html$Html$Attributes$style, 'display', 'block')
			]);
		var htmlAttrsSize = config.responsive ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '100%')
			]) : _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'width',
				$elm$core$String$fromFloat(plane.x.length) + 'px'),
				A2(
				$elm$html$Html$Attributes$style,
				'height',
				$elm$core$String$fromFloat(plane.y.length) + 'px')
			]);
		var htmlAttrsDef = _List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-charts__container-inner')
			]);
		var htmlAttrs = _Utils_ap(
			config.htmlAttrs,
			_Utils_ap(htmlAttrsDef, htmlAttrsSize));
		var chartPosition = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$x(
				$elm$core$String$fromFloat(plane.x.marginMin)),
				$elm$svg$Svg$Attributes$y(
				$elm$core$String$fromFloat(plane.y.marginMin)),
				$elm$svg$Svg$Attributes$width(
				$elm$core$String$fromFloat(
					$terezka$elm_charts$Internal$Coordinates$innerWidth(plane))),
				$elm$svg$Svg$Attributes$height(
				$elm$core$String$fromFloat(
					$terezka$elm_charts$Internal$Coordinates$innerHeight(plane))),
				$elm$svg$Svg$Attributes$fill('transparent')
			]);
		var clipPathDefs = A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id(
							$terezka$elm_charts$Internal$Coordinates$toId(plane))
						]),
					_List_fromArray(
						[
							A2($elm$svg$Svg$rect, chartPosition, _List_Nil)
						]))
				]));
		var catcher = A2(
			$elm$svg$Svg$rect,
			_Utils_ap(
				chartPosition,
				A2($elm$core$List$map, toEvent, config.events)),
			_List_Nil);
		var chart = A2(
			$elm$svg$Svg$svg,
			_Utils_ap(svgAttrsSize, config.attrs),
			_Utils_ap(
				_List_fromArray(
					[clipPathDefs]),
				_Utils_ap(
					chartEls,
					_List_fromArray(
						[catcher]))));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('elm-charts__container'),
					A2($elm$html$Html$Attributes$style, 'position', 'relative')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					htmlAttrs,
					_Utils_ap(
						below,
						_Utils_ap(
							_List_fromArray(
								[chart]),
							above)))
				]));
	});
var $terezka$elm_charts$Internal$Coordinates$Position = F4(
	function (x1, x2, y1, y2) {
		return {x1: x1, x2: x2, y1: y1, y2: y2};
	});
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $terezka$elm_charts$Internal$Coordinates$foldPosition = F2(
	function (func, data) {
		var fold = F2(
			function (datum, posM) {
				if (posM.$ === 'Just') {
					var pos = posM.a;
					return $elm$core$Maybe$Just(
						{
							x1: A2(
								$elm$core$Basics$min,
								func(datum).x1,
								pos.x1),
							x2: A2(
								$elm$core$Basics$max,
								func(datum).x2,
								pos.x2),
							y1: A2(
								$elm$core$Basics$min,
								func(datum).y1,
								pos.y1),
							y2: A2(
								$elm$core$Basics$max,
								func(datum).y2,
								pos.y2)
						});
				} else {
					return $elm$core$Maybe$Just(
						func(datum));
				}
			});
		return A2(
			$elm$core$Maybe$withDefault,
			A4($terezka$elm_charts$Internal$Coordinates$Position, 0, 0, 0, 0),
			A3($elm$core$List$foldl, fold, $elm$core$Maybe$Nothing, data));
	});
var $terezka$elm_charts$Chart$Attributes$lowest = F3(
	function (v, edit, b) {
		return _Utils_update(
			b,
			{
				min: A3(edit, v, b.min, b.dataMin)
			});
	});
var $terezka$elm_charts$Chart$Attributes$orLower = F3(
	function (least, real, _v0) {
		return (_Utils_cmp(real, least) > 0) ? least : real;
	});
var $terezka$elm_charts$Chart$definePlane = F2(
	function (config, elements) {
		var width = A2($elm$core$Basics$max, 1, (config.width - config.padding.left) - config.padding.right);
		var toLimit = F5(
			function (length, marginMin, marginMax, min, max) {
				return {dataMax: max, dataMin: min, length: length, marginMax: marginMax, marginMin: marginMin, max: max, min: min};
			});
		var height = A2($elm$core$Basics$max, 1, (config.height - config.padding.bottom) - config.padding.top);
		var fixSingles = function (bs) {
			return _Utils_eq(bs.min, bs.max) ? _Utils_update(
				bs,
				{max: bs.min + 10}) : bs;
		};
		var collectLimits = F2(
			function (el, acc) {
				switch (el.$) {
					case 'Indexed':
						return acc;
					case 'SeriesElement':
						var lims = el.a;
						return _Utils_ap(acc, lims);
					case 'BarsElement':
						var lims = el.a;
						return _Utils_ap(acc, lims);
					case 'CustomElement':
						return acc;
					case 'AxisElement':
						return acc;
					case 'TicksElement':
						return acc;
					case 'TickElement':
						return acc;
					case 'LabelsElement':
						return acc;
					case 'LabelElement':
						return acc;
					case 'GridElement':
						return acc;
					case 'SubElements':
						return acc;
					case 'ListOfElements':
						var subs = el.a;
						return A3($elm$core$List$foldl, collectLimits, acc, subs);
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		var limits_ = function (pos) {
			return function (_v3) {
				var x = _v3.x;
				var y = _v3.y;
				return {
					x: fixSingles(x),
					y: fixSingles(y)
				};
			}(
				{
					x: A5(toLimit, width, config.margin.left, config.margin.right, pos.x1, pos.x2),
					y: A5(toLimit, height, config.margin.top, config.margin.bottom, pos.y1, pos.y2)
				});
		}(
			A2(
				$terezka$elm_charts$Internal$Coordinates$foldPosition,
				$elm$core$Basics$identity,
				A3($elm$core$List$foldl, collectLimits, _List_Nil, elements)));
		var calcRange = function () {
			var _v2 = config.range;
			if (!_v2.b) {
				return limits_.x;
			} else {
				var some = _v2;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (f, b) {
							return f(b);
						}),
					limits_.x,
					some);
			}
		}();
		var calcDomain = function () {
			var _v1 = config.domain;
			if (!_v1.b) {
				return A3($terezka$elm_charts$Chart$Attributes$lowest, 0, $terezka$elm_charts$Chart$Attributes$orLower, limits_.y);
			} else {
				var some = _v1;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (f, b) {
							return f(b);
						}),
					limits_.y,
					some);
			}
		}();
		var unpadded = {x: calcRange, y: calcDomain};
		var scalePadX = $terezka$elm_charts$Internal$Coordinates$scaleCartesianX(unpadded);
		var xMax = calcRange.max + scalePadX(config.padding.right);
		var xMin = calcRange.min - scalePadX(config.padding.left);
		var scalePadY = $terezka$elm_charts$Internal$Coordinates$scaleCartesianY(unpadded);
		var yMax = calcDomain.max + scalePadY(config.padding.top);
		var yMin = calcDomain.min - scalePadY(config.padding.bottom);
		return {
			x: _Utils_update(
				calcRange,
				{
					length: config.width,
					max: A2($elm$core$Basics$max, xMin, xMax),
					min: A2($elm$core$Basics$min, xMin, xMax)
				}),
			y: _Utils_update(
				calcDomain,
				{
					length: config.height,
					max: A2($elm$core$Basics$max, yMin, yMax),
					min: A2($elm$core$Basics$min, yMin, yMax)
				})
		};
	});
var $terezka$elm_charts$Chart$getItems = F2(
	function (plane, elements) {
		var toItems = F2(
			function (el, acc) {
				switch (el.$) {
					case 'Indexed':
						return acc;
					case 'SeriesElement':
						var items = el.b;
						return _Utils_ap(acc, items);
					case 'BarsElement':
						var items = el.b;
						return _Utils_ap(acc, items);
					case 'CustomElement':
						var item = el.a;
						return _Utils_ap(
							acc,
							_List_fromArray(
								[item]));
					case 'AxisElement':
						var func = el.a;
						return acc;
					case 'TicksElement':
						return acc;
					case 'TickElement':
						return acc;
					case 'LabelsElement':
						return acc;
					case 'LabelElement':
						return acc;
					case 'GridElement':
						return acc;
					case 'SubElements':
						return acc;
					case 'ListOfElements':
						var subs = el.a;
						return A3($elm$core$List$foldl, toItems, acc, subs);
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		return A3($elm$core$List$foldl, toItems, _List_Nil, elements);
	});
var $terezka$elm_charts$Chart$getLegends = function (elements) {
	var toLegends = F2(
		function (el, acc) {
			switch (el.$) {
				case 'Indexed':
					return acc;
				case 'SeriesElement':
					var legends_ = el.c;
					return _Utils_ap(acc, legends_);
				case 'BarsElement':
					var legends_ = el.c;
					return _Utils_ap(acc, legends_);
				case 'CustomElement':
					return acc;
				case 'AxisElement':
					return acc;
				case 'TicksElement':
					return acc;
				case 'TickElement':
					return acc;
				case 'LabelsElement':
					return acc;
				case 'LabelElement':
					return acc;
				case 'GridElement':
					return acc;
				case 'SubElements':
					return acc;
				case 'ListOfElements':
					var subs = el.a;
					return A3($elm$core$List$foldl, toLegends, acc, subs);
				case 'SvgElement':
					return acc;
				default:
					return acc;
			}
		});
	return A3($elm$core$List$foldl, toLegends, _List_Nil, elements);
};
var $terezka$elm_charts$Chart$TickValues = F4(
	function (xAxis, yAxis, xs, ys) {
		return {xAxis: xAxis, xs: xs, yAxis: yAxis, ys: ys};
	});
var $terezka$elm_charts$Chart$getTickValues = F3(
	function (plane, items, elements) {
		var toValues = F2(
			function (el, acc) {
				switch (el.$) {
					case 'Indexed':
						return acc;
					case 'SeriesElement':
						return acc;
					case 'BarsElement':
						var func = el.d;
						return A2(func, plane, acc);
					case 'CustomElement':
						var func = el.b;
						return acc;
					case 'AxisElement':
						var func = el.a;
						return A2(func, plane, acc);
					case 'TicksElement':
						var func = el.a;
						return A2(func, plane, acc);
					case 'TickElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'LabelsElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'LabelElement':
						var toC = el.a;
						var func = el.b;
						return A3(
							func,
							plane,
							toC(plane),
							acc);
					case 'SubElements':
						var func = el.a;
						return A3(
							$elm$core$List$foldl,
							toValues,
							acc,
							A2(func, plane, items));
					case 'GridElement':
						return acc;
					case 'ListOfElements':
						var subs = el.a;
						return A3($elm$core$List$foldl, toValues, acc, subs);
					case 'SvgElement':
						return acc;
					default:
						return acc;
				}
			});
		return A3(
			$elm$core$List$foldl,
			toValues,
			A4($terezka$elm_charts$Chart$TickValues, _List_Nil, _List_Nil, _List_Nil, _List_Nil),
			elements);
	});
var $terezka$elm_charts$Chart$GridElement = function (a) {
	return {$: 'GridElement', a: a};
};
var $terezka$elm_charts$Internal$Svg$Circle = {$: 'Circle'};
var $terezka$elm_charts$Chart$Attributes$circle = function (config) {
	return _Utils_update(
		config,
		{
			shape: $elm$core$Maybe$Just($terezka$elm_charts$Internal$Svg$Circle)
		});
};
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $terezka$elm_charts$Chart$Attributes$color = F2(
	function (v, config) {
		return (v === '') ? config : _Utils_update(
			config,
			{color: v});
	});
var $terezka$elm_charts$Internal$Helpers$darkGray = 'rgb(200 200 200)';
var $terezka$elm_charts$Chart$Attributes$dashed = F2(
	function (value, config) {
		return _Utils_update(
			config,
			{dashed: value});
	});
var $terezka$elm_charts$Internal$Helpers$pink = '#ea60df';
var $terezka$elm_charts$Internal$Svg$defaultDot = {border: '', borderWidth: 0, color: $terezka$elm_charts$Internal$Helpers$pink, hideOverflow: false, highlight: 0, highlightColor: '', highlightWidth: 5, opacity: 1, shape: $elm$core$Maybe$Nothing, size: 6};
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $terezka$elm_charts$Internal$Svg$isWithinPlane = F3(
	function (plane, x, y) {
		return _Utils_eq(
			A3($elm$core$Basics$clamp, plane.x.min, plane.x.max, x),
			x) && _Utils_eq(
			A3($elm$core$Basics$clamp, plane.y.min, plane.y.max, y),
			y);
	});
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $terezka$elm_charts$Internal$Svg$plusPath = F4(
	function (area_, off, x_, y_) {
		var side = $elm$core$Basics$sqrt(area_ / 4) + off;
		var r6 = side / 2;
		var r3 = side;
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'M' + ($elm$core$String$fromFloat(x_ - r6) + (' ' + $elm$core$String$fromFloat(((y_ - r3) - r6) + off))),
					'v' + $elm$core$String$fromFloat(r3 - off),
					'h' + $elm$core$String$fromFloat((-r3) + off),
					'v' + $elm$core$String$fromFloat(r3),
					'h' + $elm$core$String$fromFloat(r3 - off),
					'v' + $elm$core$String$fromFloat(r3 - off),
					'h' + $elm$core$String$fromFloat(r3),
					'v' + $elm$core$String$fromFloat((-r3) + off),
					'h' + $elm$core$String$fromFloat(r3 - off),
					'v' + $elm$core$String$fromFloat(-r3),
					'h' + $elm$core$String$fromFloat((-r3) + off),
					'v' + $elm$core$String$fromFloat((-r3) + off),
					'h' + $elm$core$String$fromFloat(-r3),
					'v' + $elm$core$String$fromFloat(r3 - off)
				]));
	});
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $terezka$elm_charts$Internal$Coordinates$scaleSVGX = F2(
	function (plane, value) {
		return (value * $terezka$elm_charts$Internal$Coordinates$innerWidth(plane)) / $terezka$elm_charts$Internal$Coordinates$range(plane.x);
	});
var $terezka$elm_charts$Internal$Coordinates$toSVGX = F2(
	function (plane, value) {
		return A2($terezka$elm_charts$Internal$Coordinates$scaleSVGX, plane, value - plane.x.min) + plane.x.marginMin;
	});
var $terezka$elm_charts$Internal$Coordinates$scaleSVGY = F2(
	function (plane, value) {
		return (value * $terezka$elm_charts$Internal$Coordinates$innerHeight(plane)) / $terezka$elm_charts$Internal$Coordinates$range(plane.y);
	});
var $terezka$elm_charts$Internal$Coordinates$toSVGY = F2(
	function (plane, value) {
		return A2($terezka$elm_charts$Internal$Coordinates$scaleSVGY, plane, plane.y.max - value) + plane.y.marginMin;
	});
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $elm$core$Basics$tan = _Basics_tan;
var $terezka$elm_charts$Internal$Svg$trianglePath = F4(
	function (area_, off, x_, y_) {
		var side = $elm$core$Basics$sqrt(
			(area_ * 4) / $elm$core$Basics$sqrt(3)) + (off * $elm$core$Basics$sqrt(3));
		var height = ($elm$core$Basics$sqrt(3) * side) / 2;
		var fromMiddle = height - (($elm$core$Basics$tan(
			$elm$core$Basics$degrees(30)) * side) / 2);
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'M' + ($elm$core$String$fromFloat(x_) + (' ' + $elm$core$String$fromFloat(y_ - fromMiddle))),
					'l' + ($elm$core$String$fromFloat((-side) / 2) + (' ' + $elm$core$String$fromFloat(height))),
					'h' + $elm$core$String$fromFloat(side),
					'z'
				]));
	});
var $elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var $terezka$elm_charts$Internal$Svg$withinChartArea = function (plane) {
	return $elm$svg$Svg$Attributes$clipPath(
		'url(#' + ($terezka$elm_charts$Internal$Coordinates$toId(plane) + ')'));
};
var $terezka$elm_charts$Internal$Svg$dot = F5(
	function (plane, toX, toY, config, datum_) {
		var yOrg = toY(datum_);
		var y_ = A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, yOrg);
		var xOrg = toX(datum_);
		var x_ = A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, xOrg);
		var styleAttrs = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke(
				(config.border === '') ? config.color : config.border),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(config.borderWidth)),
				$elm$svg$Svg$Attributes$fillOpacity(
				$elm$core$String$fromFloat(config.opacity)),
				$elm$svg$Svg$Attributes$fill(config.color),
				$elm$svg$Svg$Attributes$class('elm-charts__dot'),
				config.hideOverflow ? $terezka$elm_charts$Internal$Svg$withinChartArea(plane) : $elm$svg$Svg$Attributes$class('')
			]);
		var showDot = A3($terezka$elm_charts$Internal$Svg$isWithinPlane, plane, xOrg, yOrg) || config.hideOverflow;
		var highlightColor = (config.highlightColor === '') ? config.color : config.highlightColor;
		var highlightAttrs = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$stroke(highlightColor),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(config.highlightWidth)),
				$elm$svg$Svg$Attributes$strokeOpacity(
				$elm$core$String$fromFloat(config.highlight)),
				$elm$svg$Svg$Attributes$fill('transparent'),
				$elm$svg$Svg$Attributes$class('elm-charts__dot-highlight')
			]);
		var view = F3(
			function (toEl, highlightOff, toAttrs) {
				return (config.highlight > 0) ? A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__dot-container')
						]),
					_List_fromArray(
						[
							A2(
							toEl,
							_Utils_ap(
								toAttrs(highlightOff),
								highlightAttrs),
							_List_Nil),
							A2(
							toEl,
							_Utils_ap(
								toAttrs(0),
								styleAttrs),
							_List_Nil)
						])) : A2(
					toEl,
					_Utils_ap(
						toAttrs(0),
						styleAttrs),
					_List_Nil);
			});
		var area_ = (2 * $elm$core$Basics$pi) * config.size;
		if (!showDot) {
			return $elm$svg$Svg$text('');
		} else {
			var _v0 = config.shape;
			if (_v0.$ === 'Nothing') {
				return $elm$svg$Svg$text('');
			} else {
				switch (_v0.a.$) {
					case 'Circle':
						var _v1 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$circle,
							config.highlightWidth / 2,
							function (off) {
								var radius = $elm$core$Basics$sqrt(area_ / $elm$core$Basics$pi);
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$cx(
										$elm$core$String$fromFloat(x_)),
										$elm$svg$Svg$Attributes$cy(
										$elm$core$String$fromFloat(y_)),
										$elm$svg$Svg$Attributes$r(
										$elm$core$String$fromFloat(radius + off))
									]);
							});
					case 'Triangle':
						var _v2 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$path,
							config.highlightWidth,
							function (off) {
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$d(
										A4($terezka$elm_charts$Internal$Svg$trianglePath, area_, off, x_, y_))
									]);
							});
					case 'Square':
						var _v3 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$rect,
							config.highlightWidth,
							function (off) {
								var side = $elm$core$Basics$sqrt(area_);
								var sideOff = side + off;
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$x(
										$elm$core$String$fromFloat(x_ - (sideOff / 2))),
										$elm$svg$Svg$Attributes$y(
										$elm$core$String$fromFloat(y_ - (sideOff / 2))),
										$elm$svg$Svg$Attributes$width(
										$elm$core$String$fromFloat(sideOff)),
										$elm$svg$Svg$Attributes$height(
										$elm$core$String$fromFloat(sideOff))
									]);
							});
					case 'Diamond':
						var _v4 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$rect,
							config.highlightWidth,
							function (off) {
								var side = $elm$core$Basics$sqrt(area_);
								var sideOff = side + off;
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$x(
										$elm$core$String$fromFloat(x_ - (sideOff / 2))),
										$elm$svg$Svg$Attributes$y(
										$elm$core$String$fromFloat(y_ - (sideOff / 2))),
										$elm$svg$Svg$Attributes$width(
										$elm$core$String$fromFloat(sideOff)),
										$elm$svg$Svg$Attributes$height(
										$elm$core$String$fromFloat(sideOff)),
										$elm$svg$Svg$Attributes$transform(
										'rotate(45 ' + ($elm$core$String$fromFloat(x_) + (' ' + ($elm$core$String$fromFloat(y_) + ')'))))
									]);
							});
					case 'Cross':
						var _v5 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$path,
							config.highlightWidth,
							function (off) {
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$d(
										A4($terezka$elm_charts$Internal$Svg$plusPath, area_, off, x_, y_)),
										$elm$svg$Svg$Attributes$transform(
										'rotate(45 ' + ($elm$core$String$fromFloat(x_) + (' ' + ($elm$core$String$fromFloat(y_) + ')'))))
									]);
							});
					default:
						var _v6 = _v0.a;
						return A3(
							view,
							$elm$svg$Svg$path,
							config.highlightWidth,
							function (off) {
								return _List_fromArray(
									[
										$elm$svg$Svg$Attributes$d(
										A4($terezka$elm_charts$Internal$Svg$plusPath, area_, off, x_, y_))
									]);
							});
				}
			}
		}
	});
var $terezka$elm_charts$Chart$Svg$dot = F4(
	function (plane, toX, toY, edits) {
		return A4(
			$terezka$elm_charts$Internal$Svg$dot,
			plane,
			toX,
			toY,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultDot));
	});
var $terezka$elm_charts$Internal$Helpers$gray = '#EFF2FA';
var $terezka$elm_charts$Internal$Svg$defaultLine = {attrs: _List_Nil, _break: false, color: 'rgb(210, 210, 210)', dashed: _List_Nil, flip: false, hideOverflow: false, opacity: 1, tickDirection: -90, tickLength: 0, width: 1, x1: $elm$core$Maybe$Nothing, x2: $elm$core$Maybe$Nothing, x2Svg: $elm$core$Maybe$Nothing, xOff: 0, y1: $elm$core$Maybe$Nothing, y2: $elm$core$Maybe$Nothing, y2Svg: $elm$core$Maybe$Nothing, yOff: 0};
var $terezka$elm_charts$Internal$Commands$Line = F2(
	function (a, b) {
		return {$: 'Line', a: a, b: b};
	});
var $terezka$elm_charts$Internal$Commands$Move = F2(
	function (a, b) {
		return {$: 'Move', a: a, b: b};
	});
var $elm$core$Basics$cos = _Basics_cos;
var $terezka$elm_charts$Internal$Commands$joinCommands = function (commands) {
	return A2($elm$core$String$join, ' ', commands);
};
var $terezka$elm_charts$Internal$Commands$stringBoolInt = function (bool) {
	return bool ? '1' : '0';
};
var $terezka$elm_charts$Internal$Commands$stringPoint = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return $elm$core$String$fromFloat(x) + (' ' + $elm$core$String$fromFloat(y));
};
var $terezka$elm_charts$Internal$Commands$stringPoints = function (points) {
	return A2(
		$elm$core$String$join,
		',',
		A2($elm$core$List$map, $terezka$elm_charts$Internal$Commands$stringPoint, points));
};
var $terezka$elm_charts$Internal$Commands$stringCommand = function (command) {
	switch (command.$) {
		case 'Move':
			var x = command.a;
			var y = command.b;
			return 'M' + $terezka$elm_charts$Internal$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'Line':
			var x = command.a;
			var y = command.b;
			return 'L' + $terezka$elm_charts$Internal$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'CubicBeziers':
			var cx1 = command.a;
			var cy1 = command.b;
			var cx2 = command.c;
			var cy2 = command.d;
			var x = command.e;
			var y = command.f;
			return 'C' + $terezka$elm_charts$Internal$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(cx2, cy2),
						_Utils_Tuple2(x, y)
					]));
		case 'CubicBeziersShort':
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $terezka$elm_charts$Internal$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(x, y)
					]));
		case 'QuadraticBeziers':
			var cx1 = command.a;
			var cy1 = command.b;
			var x = command.c;
			var y = command.d;
			return 'Q' + $terezka$elm_charts$Internal$Commands$stringPoints(
				_List_fromArray(
					[
						_Utils_Tuple2(cx1, cy1),
						_Utils_Tuple2(x, y)
					]));
		case 'QuadraticBeziersShort':
			var x = command.a;
			var y = command.b;
			return 'T' + $terezka$elm_charts$Internal$Commands$stringPoint(
				_Utils_Tuple2(x, y));
		case 'Arc':
			var rx = command.a;
			var ry = command.b;
			var xAxisRotation = command.c;
			var largeArcFlag = command.d;
			var sweepFlag = command.e;
			var x = command.f;
			var y = command.g;
			return 'A ' + $terezka$elm_charts$Internal$Commands$joinCommands(
				_List_fromArray(
					[
						$terezka$elm_charts$Internal$Commands$stringPoint(
						_Utils_Tuple2(rx, ry)),
						$elm$core$String$fromInt(xAxisRotation),
						$terezka$elm_charts$Internal$Commands$stringBoolInt(largeArcFlag),
						$terezka$elm_charts$Internal$Commands$stringBoolInt(sweepFlag),
						$terezka$elm_charts$Internal$Commands$stringPoint(
						_Utils_Tuple2(x, y))
					]));
		default:
			return 'Z';
	}
};
var $terezka$elm_charts$Internal$Commands$Arc = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 'Arc', a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var $terezka$elm_charts$Internal$Commands$Close = {$: 'Close'};
var $terezka$elm_charts$Internal$Commands$CubicBeziers = F6(
	function (a, b, c, d, e, f) {
		return {$: 'CubicBeziers', a: a, b: b, c: c, d: d, e: e, f: f};
	});
var $terezka$elm_charts$Internal$Commands$CubicBeziersShort = F4(
	function (a, b, c, d) {
		return {$: 'CubicBeziersShort', a: a, b: b, c: c, d: d};
	});
var $terezka$elm_charts$Internal$Commands$QuadraticBeziers = F4(
	function (a, b, c, d) {
		return {$: 'QuadraticBeziers', a: a, b: b, c: c, d: d};
	});
var $terezka$elm_charts$Internal$Commands$QuadraticBeziersShort = F2(
	function (a, b) {
		return {$: 'QuadraticBeziersShort', a: a, b: b};
	});
var $terezka$elm_charts$Internal$Commands$translate = F2(
	function (plane, command) {
		switch (command.$) {
			case 'Move':
				var x = command.a;
				var y = command.b;
				return A2(
					$terezka$elm_charts$Internal$Commands$Move,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'Line':
				var x = command.a;
				var y = command.b;
				return A2(
					$terezka$elm_charts$Internal$Commands$Line,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'CubicBeziers':
				var cx1 = command.a;
				var cy1 = command.b;
				var cx2 = command.c;
				var cy2 = command.d;
				var x = command.e;
				var y = command.f;
				return A6(
					$terezka$elm_charts$Internal$Commands$CubicBeziers,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, cx1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, cy1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, cx2),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, cy2),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'CubicBeziersShort':
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$terezka$elm_charts$Internal$Commands$CubicBeziersShort,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, cx1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, cy1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'QuadraticBeziers':
				var cx1 = command.a;
				var cy1 = command.b;
				var x = command.c;
				var y = command.d;
				return A4(
					$terezka$elm_charts$Internal$Commands$QuadraticBeziers,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, cx1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, cy1),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'QuadraticBeziersShort':
				var x = command.a;
				var y = command.b;
				return A2(
					$terezka$elm_charts$Internal$Commands$QuadraticBeziersShort,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			case 'Arc':
				var rx = command.a;
				var ry = command.b;
				var xAxisRotation = command.c;
				var largeArcFlag = command.d;
				var sweepFlag = command.e;
				var x = command.f;
				var y = command.g;
				return A7(
					$terezka$elm_charts$Internal$Commands$Arc,
					rx,
					ry,
					xAxisRotation,
					largeArcFlag,
					sweepFlag,
					A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x),
					A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y));
			default:
				return $terezka$elm_charts$Internal$Commands$Close;
		}
	});
var $terezka$elm_charts$Internal$Commands$description = F2(
	function (plane, commands) {
		return $terezka$elm_charts$Internal$Commands$joinCommands(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$terezka$elm_charts$Internal$Commands$translate(plane),
					$terezka$elm_charts$Internal$Commands$stringCommand),
				commands));
	});
var $terezka$elm_charts$Internal$Svg$lengthInCartesianX = $terezka$elm_charts$Internal$Coordinates$scaleCartesianX;
var $terezka$elm_charts$Internal$Svg$lengthInCartesianY = $terezka$elm_charts$Internal$Coordinates$scaleCartesianY;
var $elm$core$Basics$sin = _Basics_sin;
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$virtual_dom$VirtualDom$mapAttribute = _VirtualDom_mapAttribute;
var $elm$html$Html$Attributes$map = $elm$virtual_dom$VirtualDom$mapAttribute;
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $terezka$elm_charts$Internal$Svg$withAttrs = F3(
	function (attrs, toEl, defaultAttrs) {
		return toEl(
			_Utils_ap(
				defaultAttrs,
				A2(
					$elm$core$List$map,
					$elm$html$Html$Attributes$map($elm$core$Basics$never),
					attrs)));
	});
var $terezka$elm_charts$Internal$Svg$line = F2(
	function (plane, config) {
		var angle = $elm$core$Basics$degrees(config.tickDirection);
		var _v0 = function () {
			var _v3 = _Utils_Tuple3(
				_Utils_Tuple2(config.x1, config.x2),
				_Utils_Tuple2(config.y1, config.y2),
				_Utils_Tuple2(config.x2Svg, config.y2Svg));
			if (_v3.a.a.$ === 'Just') {
				if (_v3.a.b.$ === 'Just') {
					if (_v3.b.a.$ === 'Nothing') {
						if (_v3.b.b.$ === 'Nothing') {
							var _v4 = _v3.a;
							var a = _v4.a.a;
							var b = _v4.b.a;
							var _v5 = _v3.b;
							var _v6 = _v5.a;
							var _v7 = _v5.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(a, b),
								_Utils_Tuple2(plane.y.min, plane.y.min));
						} else {
							var _v38 = _v3.a;
							var a = _v38.a.a;
							var b = _v38.b.a;
							var _v39 = _v3.b;
							var _v40 = _v39.a;
							var c = _v39.b.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(a, b),
								_Utils_Tuple2(c, c));
						}
					} else {
						if (_v3.b.b.$ === 'Nothing') {
							var _v41 = _v3.a;
							var a = _v41.a.a;
							var b = _v41.b.a;
							var _v42 = _v3.b;
							var c = _v42.a.a;
							var _v43 = _v42.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(a, b),
								_Utils_Tuple2(c, c));
						} else {
							return _Utils_Tuple2(
								_Utils_Tuple2(
									A2($elm$core$Maybe$withDefault, plane.x.min, config.x1),
									A2($elm$core$Maybe$withDefault, plane.x.max, config.x2)),
								_Utils_Tuple2(
									A2($elm$core$Maybe$withDefault, plane.y.min, config.y1),
									A2($elm$core$Maybe$withDefault, plane.y.max, config.y2)));
						}
					}
				} else {
					if (_v3.b.a.$ === 'Nothing') {
						if (_v3.b.b.$ === 'Nothing') {
							var _v8 = _v3.a;
							var a = _v8.a.a;
							var _v9 = _v8.b;
							var _v10 = _v3.b;
							var _v11 = _v10.a;
							var _v12 = _v10.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(a, a),
								_Utils_Tuple2(plane.y.min, plane.y.max));
						} else {
							if (_v3.c.a.$ === 'Just') {
								if (_v3.c.b.$ === 'Just') {
									var _v51 = _v3.a;
									var a = _v51.a.a;
									var _v52 = _v51.b;
									var _v53 = _v3.b;
									var _v54 = _v53.a;
									var b = _v53.b.a;
									var _v55 = _v3.c;
									var xOff = _v55.a.a;
									var yOff = _v55.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								} else {
									var _v56 = _v3.a;
									var a = _v56.a.a;
									var _v57 = _v56.b;
									var _v58 = _v3.b;
									var _v59 = _v58.a;
									var b = _v58.b.a;
									var _v60 = _v3.c;
									var xOff = _v60.a.a;
									var _v61 = _v60.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(b, b));
								}
							} else {
								if (_v3.c.b.$ === 'Nothing') {
									var _v44 = _v3.a;
									var a = _v44.a.a;
									var _v45 = _v44.b;
									var _v46 = _v3.b;
									var _v47 = _v46.a;
									var b = _v46.b.a;
									var _v48 = _v3.c;
									var _v49 = _v48.a;
									var _v50 = _v48.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, plane.x.max),
										_Utils_Tuple2(b, b));
								} else {
									var _v62 = _v3.a;
									var a = _v62.a.a;
									var _v63 = _v62.b;
									var _v64 = _v3.b;
									var _v65 = _v64.a;
									var b = _v64.b.a;
									var _v66 = _v3.c;
									var _v67 = _v66.a;
									var yOff = _v66.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, a),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								}
							}
						}
					} else {
						if (_v3.b.b.$ === 'Just') {
							var _v35 = _v3.a;
							var c = _v35.a.a;
							var _v36 = _v35.b;
							var _v37 = _v3.b;
							var a = _v37.a.a;
							var b = _v37.b.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(c, c),
								_Utils_Tuple2(a, b));
						} else {
							if (_v3.c.a.$ === 'Just') {
								if (_v3.c.b.$ === 'Just') {
									var _v75 = _v3.a;
									var a = _v75.a.a;
									var _v76 = _v75.b;
									var _v77 = _v3.b;
									var b = _v77.a.a;
									var _v78 = _v77.b;
									var _v79 = _v3.c;
									var xOff = _v79.a.a;
									var yOff = _v79.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								} else {
									var _v80 = _v3.a;
									var a = _v80.a.a;
									var _v81 = _v80.b;
									var _v82 = _v3.b;
									var b = _v82.a.a;
									var _v83 = _v82.b;
									var _v84 = _v3.c;
									var xOff = _v84.a.a;
									var _v85 = _v84.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(b, b));
								}
							} else {
								if (_v3.c.b.$ === 'Nothing') {
									var _v68 = _v3.a;
									var a = _v68.a.a;
									var _v69 = _v68.b;
									var _v70 = _v3.b;
									var b = _v70.a.a;
									var _v71 = _v70.b;
									var _v72 = _v3.c;
									var _v73 = _v72.a;
									var _v74 = _v72.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, plane.x.max),
										_Utils_Tuple2(b, b));
								} else {
									var _v86 = _v3.a;
									var a = _v86.a.a;
									var _v87 = _v86.b;
									var _v88 = _v3.b;
									var b = _v88.a.a;
									var _v89 = _v88.b;
									var _v90 = _v3.c;
									var _v91 = _v90.a;
									var yOff = _v90.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, a),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								}
							}
						}
					}
				}
			} else {
				if (_v3.a.b.$ === 'Just') {
					if (_v3.b.a.$ === 'Nothing') {
						if (_v3.b.b.$ === 'Nothing') {
							var _v13 = _v3.a;
							var _v14 = _v13.a;
							var b = _v13.b.a;
							var _v15 = _v3.b;
							var _v16 = _v15.a;
							var _v17 = _v15.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(b, b),
								_Utils_Tuple2(plane.y.min, plane.y.max));
						} else {
							if (_v3.c.a.$ === 'Just') {
								if (_v3.c.b.$ === 'Just') {
									var _v99 = _v3.a;
									var _v100 = _v99.a;
									var a = _v99.b.a;
									var _v101 = _v3.b;
									var _v102 = _v101.a;
									var b = _v101.b.a;
									var _v103 = _v3.c;
									var xOff = _v103.a.a;
									var yOff = _v103.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								} else {
									var _v104 = _v3.a;
									var _v105 = _v104.a;
									var a = _v104.b.a;
									var _v106 = _v3.b;
									var _v107 = _v106.a;
									var b = _v106.b.a;
									var _v108 = _v3.c;
									var xOff = _v108.a.a;
									var _v109 = _v108.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(b, b));
								}
							} else {
								if (_v3.c.b.$ === 'Nothing') {
									var _v92 = _v3.a;
									var _v93 = _v92.a;
									var a = _v92.b.a;
									var _v94 = _v3.b;
									var _v95 = _v94.a;
									var b = _v94.b.a;
									var _v96 = _v3.c;
									var _v97 = _v96.a;
									var _v98 = _v96.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, plane.x.max),
										_Utils_Tuple2(b, b));
								} else {
									var _v110 = _v3.a;
									var _v111 = _v110.a;
									var a = _v110.b.a;
									var _v112 = _v3.b;
									var _v113 = _v112.a;
									var b = _v112.b.a;
									var _v114 = _v3.c;
									var _v115 = _v114.a;
									var yOff = _v114.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, a),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								}
							}
						}
					} else {
						if (_v3.b.b.$ === 'Just') {
							var _v32 = _v3.a;
							var _v33 = _v32.a;
							var c = _v32.b.a;
							var _v34 = _v3.b;
							var a = _v34.a.a;
							var b = _v34.b.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(c, c),
								_Utils_Tuple2(a, b));
						} else {
							if (_v3.c.a.$ === 'Just') {
								if (_v3.c.b.$ === 'Just') {
									var _v123 = _v3.a;
									var _v124 = _v123.a;
									var a = _v123.b.a;
									var _v125 = _v3.b;
									var b = _v125.a.a;
									var _v126 = _v125.b;
									var _v127 = _v3.c;
									var xOff = _v127.a.a;
									var yOff = _v127.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								} else {
									var _v128 = _v3.a;
									var _v129 = _v128.a;
									var a = _v128.b.a;
									var _v130 = _v3.b;
									var b = _v130.a.a;
									var _v131 = _v130.b;
									var _v132 = _v3.c;
									var xOff = _v132.a.a;
									var _v133 = _v132.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(
											a,
											a + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, xOff)),
										_Utils_Tuple2(b, b));
								}
							} else {
								if (_v3.c.b.$ === 'Nothing') {
									var _v116 = _v3.a;
									var _v117 = _v116.a;
									var a = _v116.b.a;
									var _v118 = _v3.b;
									var b = _v118.a.a;
									var _v119 = _v118.b;
									var _v120 = _v3.c;
									var _v121 = _v120.a;
									var _v122 = _v120.b;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, plane.x.max),
										_Utils_Tuple2(b, b));
								} else {
									var _v134 = _v3.a;
									var _v135 = _v134.a;
									var a = _v134.b.a;
									var _v136 = _v3.b;
									var b = _v136.a.a;
									var _v137 = _v136.b;
									var _v138 = _v3.c;
									var _v139 = _v138.a;
									var yOff = _v138.b.a;
									return _Utils_Tuple2(
										_Utils_Tuple2(a, a),
										_Utils_Tuple2(
											b,
											b + A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, yOff)));
								}
							}
						}
					}
				} else {
					if (_v3.b.a.$ === 'Just') {
						if (_v3.b.b.$ === 'Just') {
							var _v18 = _v3.a;
							var _v19 = _v18.a;
							var _v20 = _v18.b;
							var _v21 = _v3.b;
							var a = _v21.a.a;
							var b = _v21.b.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(plane.x.min, plane.x.min),
								_Utils_Tuple2(a, b));
						} else {
							var _v22 = _v3.a;
							var _v23 = _v22.a;
							var _v24 = _v22.b;
							var _v25 = _v3.b;
							var a = _v25.a.a;
							var _v26 = _v25.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(plane.x.min, plane.x.max),
								_Utils_Tuple2(a, a));
						}
					} else {
						if (_v3.b.b.$ === 'Just') {
							var _v27 = _v3.a;
							var _v28 = _v27.a;
							var _v29 = _v27.b;
							var _v30 = _v3.b;
							var _v31 = _v30.a;
							var b = _v30.b.a;
							return _Utils_Tuple2(
								_Utils_Tuple2(plane.x.min, plane.x.max),
								_Utils_Tuple2(b, b));
						} else {
							var _v140 = _v3.a;
							var _v141 = _v140.a;
							var _v142 = _v140.b;
							var _v143 = _v3.b;
							var _v144 = _v143.a;
							var _v145 = _v143.b;
							return _Utils_Tuple2(
								_Utils_Tuple2(plane.x.min, plane.x.max),
								_Utils_Tuple2(plane.y.min, plane.y.max));
						}
					}
				}
			}
		}();
		var _v1 = _v0.a;
		var x1 = _v1.a;
		var x2 = _v1.b;
		var _v2 = _v0.b;
		var y1 = _v2.a;
		var y2 = _v2.b;
		var x1_ = x1 + A2($terezka$elm_charts$Internal$Svg$lengthInCartesianX, plane, config.xOff);
		var x2_ = x2 + A2($terezka$elm_charts$Internal$Svg$lengthInCartesianX, plane, config.xOff);
		var y1_ = y1 - A2($terezka$elm_charts$Internal$Svg$lengthInCartesianY, plane, config.yOff);
		var y2_ = y2 - A2($terezka$elm_charts$Internal$Svg$lengthInCartesianY, plane, config.yOff);
		var _v146 = (config.tickLength > 0) ? _Utils_Tuple2(
			A2(
				$terezka$elm_charts$Internal$Svg$lengthInCartesianX,
				plane,
				$elm$core$Basics$cos(angle) * config.tickLength),
			A2(
				$terezka$elm_charts$Internal$Svg$lengthInCartesianY,
				plane,
				$elm$core$Basics$sin(angle) * config.tickLength)) : _Utils_Tuple2(0, 0);
		var tickOffsetX = _v146.a;
		var tickOffsetY = _v146.b;
		var cmds = config.flip ? _Utils_ap(
			(config.tickLength > 0) ? _List_fromArray(
				[
					A2($terezka$elm_charts$Internal$Commands$Move, x2_ + tickOffsetX, y2_ + tickOffsetY),
					A2($terezka$elm_charts$Internal$Commands$Line, x2_, y2_)
				]) : _List_fromArray(
				[
					A2($terezka$elm_charts$Internal$Commands$Move, x2_, y2_)
				]),
			_Utils_ap(
				config._break ? _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x2_, y1_),
						A2($terezka$elm_charts$Internal$Commands$Line, x1_, y1_)
					]) : _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x1_, y1_)
					]),
				(config.tickLength > 0) ? _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x1_ + tickOffsetX, y1_ + tickOffsetY)
					]) : _List_Nil)) : _Utils_ap(
			(config.tickLength > 0) ? _List_fromArray(
				[
					A2($terezka$elm_charts$Internal$Commands$Move, x1_ + tickOffsetX, y1_ + tickOffsetY),
					A2($terezka$elm_charts$Internal$Commands$Line, x1_, y1_)
				]) : _List_fromArray(
				[
					A2($terezka$elm_charts$Internal$Commands$Move, x1_, y1_)
				]),
			_Utils_ap(
				config._break ? _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x1_, y2_),
						A2($terezka$elm_charts$Internal$Commands$Line, x2_, y2_)
					]) : _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x2_, y2_)
					]),
				(config.tickLength > 0) ? _List_fromArray(
					[
						A2($terezka$elm_charts$Internal$Commands$Line, x2_ + tickOffsetX, y2_ + tickOffsetY)
					]) : _List_Nil));
		return A4(
			$terezka$elm_charts$Internal$Svg$withAttrs,
			config.attrs,
			$elm$svg$Svg$path,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__line'),
					$elm$svg$Svg$Attributes$fill('transparent'),
					$elm$svg$Svg$Attributes$stroke(config.color),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.width)),
					$elm$svg$Svg$Attributes$strokeOpacity(
					$elm$core$String$fromFloat(config.opacity)),
					$elm$svg$Svg$Attributes$strokeDasharray(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, $elm$core$String$fromFloat, config.dashed))),
					$elm$svg$Svg$Attributes$d(
					A2($terezka$elm_charts$Internal$Commands$description, plane, cmds)),
					config.hideOverflow ? $terezka$elm_charts$Internal$Svg$withinChartArea(plane) : $elm$svg$Svg$Attributes$class('')
				]),
			_List_Nil);
	});
var $terezka$elm_charts$Chart$Svg$line = F2(
	function (plane, edits) {
		return A2(
			$terezka$elm_charts$Internal$Svg$line,
			plane,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultLine));
	});
var $terezka$elm_charts$Chart$Attributes$size = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{size: v});
	});
var $terezka$elm_charts$Chart$Attributes$width = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{width: v});
	});
var $terezka$elm_charts$Chart$Attributes$x1 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				x1: $elm$core$Maybe$Just(v)
			});
	});
var $terezka$elm_charts$Chart$Attributes$y1 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				y1: $elm$core$Maybe$Just(v)
			});
	});
var $terezka$elm_charts$Chart$grid = function (edits) {
	var config = A2(
		$terezka$elm_charts$Internal$Helpers$apply,
		edits,
		{color: '', dashed: _List_Nil, dotGrid: false, width: 0});
	var width = (!config.width) ? (config.dotGrid ? 0.5 : 1) : config.width;
	var color = $elm$core$String$isEmpty(config.color) ? (config.dotGrid ? $terezka$elm_charts$Internal$Helpers$darkGray : $terezka$elm_charts$Internal$Helpers$gray) : config.color;
	var toDot = F4(
		function (vs, p, x, y) {
			return (A2($elm$core$List$member, x, vs.xAxis) || A2($elm$core$List$member, y, vs.yAxis)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A5(
					$terezka$elm_charts$Chart$Svg$dot,
					p,
					function ($) {
						return $.x;
					},
					function ($) {
						return $.y;
					},
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(color),
							$terezka$elm_charts$Chart$Attributes$size(width),
							$terezka$elm_charts$Chart$Attributes$circle
						]),
					{x: x, y: y}));
		});
	var toXGrid = F3(
		function (vs, p, v) {
			return A2($elm$core$List$member, v, vs.xAxis) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$terezka$elm_charts$Chart$Svg$line,
					p,
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(color),
							$terezka$elm_charts$Chart$Attributes$width(width),
							$terezka$elm_charts$Chart$Attributes$x1(v),
							$terezka$elm_charts$Chart$Attributes$dashed(config.dashed)
						])));
		});
	var toYGrid = F3(
		function (vs, p, v) {
			return A2($elm$core$List$member, v, vs.yAxis) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A2(
					$terezka$elm_charts$Chart$Svg$line,
					p,
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(color),
							$terezka$elm_charts$Chart$Attributes$width(width),
							$terezka$elm_charts$Chart$Attributes$y1(v),
							$terezka$elm_charts$Chart$Attributes$dashed(config.dashed)
						])));
		});
	return $terezka$elm_charts$Chart$GridElement(
		F2(
			function (p, vs) {
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__grid')
						]),
					config.dotGrid ? A2(
						$elm$core$List$concatMap,
						function (x) {
							return A2(
								$elm$core$List$filterMap,
								A3(toDot, vs, p, x),
								vs.ys);
						},
						vs.xs) : _List_fromArray(
						[
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('elm-charts__x-grid')
								]),
							A2(
								$elm$core$List$filterMap,
								A2(toXGrid, vs, p),
								vs.xs)),
							A2(
							$elm$svg$Svg$g,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$class('elm-charts__y-grid')
								]),
							A2(
								$elm$core$List$filterMap,
								A2(toYGrid, vs, p),
								vs.ys))
						]));
			}));
};
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $terezka$elm_charts$Chart$viewElements = F6(
	function (config, plane, tickValues, allItems, allLegends, elements) {
		var viewOne = F2(
			function (el, _v0) {
				var before = _v0.a;
				var chart_ = _v0.b;
				var after = _v0.c;
				switch (el.$) {
					case 'Indexed':
						return _Utils_Tuple3(before, chart_, after);
					case 'SeriesElement':
						var view = el.d;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'BarsElement':
						var view = el.e;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'CustomElement':
						var view = el.b;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'AxisElement':
						var view = el.b;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'TicksElement':
						var view = el.b;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					case 'TickElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'LabelsElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'LabelElement':
						var toC = el.a;
						var view = el.c;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(
									view,
									plane,
									toC(plane)),
								chart_),
							after);
					case 'GridElement':
						var view = el.a;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								A2(view, plane, tickValues),
								chart_),
							after);
					case 'SubElements':
						var func = el.a;
						return A3(
							$elm$core$List$foldr,
							viewOne,
							_Utils_Tuple3(before, chart_, after),
							A2(func, plane, allItems));
					case 'ListOfElements':
						var els = el.a;
						return A3(
							$elm$core$List$foldr,
							viewOne,
							_Utils_Tuple3(before, chart_, after),
							els);
					case 'SvgElement':
						var view = el.a;
						return _Utils_Tuple3(
							before,
							A2(
								$elm$core$List$cons,
								view(plane),
								chart_),
							after);
					default:
						var view = el.a;
						return _Utils_Tuple3(
							($elm$core$List$length(chart_) > 0) ? A2(
								$elm$core$List$cons,
								A2(view, plane, allLegends),
								before) : before,
							chart_,
							($elm$core$List$length(chart_) > 0) ? after : A2(
								$elm$core$List$cons,
								A2(view, plane, allLegends),
								after));
				}
			});
		return A3(
			$elm$core$List$foldr,
			viewOne,
			_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
			elements);
	});
var $terezka$elm_charts$Chart$chart = F2(
	function (edits, unindexedElements) {
		var indexedElements = function () {
			var toIndexedEl = F2(
				function (el, _v4) {
					var acc = _v4.a;
					var index = _v4.b;
					switch (el.$) {
						case 'Indexed':
							var toElAndIndex = el.a;
							var _v6 = toElAndIndex(index);
							var newEl = _v6.a;
							var newIndex = _v6.b;
							return _Utils_Tuple2(
								_Utils_ap(
									acc,
									_List_fromArray(
										[newEl])),
								newIndex);
						case 'ListOfElements':
							var els = el.a;
							return A3(
								$elm$core$List$foldl,
								toIndexedEl,
								_Utils_Tuple2(acc, index),
								els);
						default:
							return _Utils_Tuple2(
								_Utils_ap(
									acc,
									_List_fromArray(
										[el])),
								index);
					}
				});
			return A3(
				$elm$core$List$foldl,
				toIndexedEl,
				_Utils_Tuple2(_List_Nil, 0),
				unindexedElements).a;
		}();
		var elements = function () {
			var isGrid = function (el) {
				if (el.$ === 'GridElement') {
					return true;
				} else {
					return false;
				}
			};
			return A2($elm$core$List$any, isGrid, indexedElements) ? indexedElements : A2(
				$elm$core$List$cons,
				$terezka$elm_charts$Chart$grid(_List_Nil),
				indexedElements);
		}();
		var legends_ = $terezka$elm_charts$Chart$getLegends(elements);
		var config = A2(
			$terezka$elm_charts$Internal$Helpers$apply,
			edits,
			{
				attrs: _List_fromArray(
					[
						$elm$svg$Svg$Attributes$style('overflow: visible;')
					]),
				domain: _List_Nil,
				events: _List_Nil,
				height: 300,
				htmlAttrs: _List_Nil,
				margin: {bottom: 0, left: 0, right: 0, top: 0},
				padding: {bottom: 0, left: 0, right: 0, top: 0},
				range: _List_Nil,
				responsive: true,
				width: 300
			});
		var plane = A2($terezka$elm_charts$Chart$definePlane, config, elements);
		var items = A2($terezka$elm_charts$Chart$getItems, plane, elements);
		var toEvent = function (_v2) {
			var event_ = _v2.a;
			var _v1 = event_.decoder;
			var decoder = _v1.a;
			return A2(
				$terezka$elm_charts$Internal$Svg$Event,
				event_.name,
				decoder(items));
		};
		var tickValues = A3($terezka$elm_charts$Chart$getTickValues, plane, items, elements);
		var _v0 = A6($terezka$elm_charts$Chart$viewElements, config, plane, tickValues, items, legends_, elements);
		var beforeEls = _v0.a;
		var chartEls = _v0.b;
		var afterEls = _v0.c;
		return A5(
			$terezka$elm_charts$Internal$Svg$container,
			plane,
			{
				attrs: config.attrs,
				events: A2($elm$core$List$map, toEvent, config.events),
				htmlAttrs: config.htmlAttrs,
				responsive: config.responsive
			},
			beforeEls,
			chartEls,
			afterEls);
	});
var $terezka$elm_charts$Internal$Many$Remodel = F2(
	function (a, b) {
		return {$: 'Remodel', a: a, b: b};
	});
var $terezka$elm_charts$Internal$Coordinates$center = function (pos) {
	return {x: pos.x1 + ((pos.x2 - pos.x1) / 2), y: pos.y1 + ((pos.y2 - pos.y1) / 2)};
};
var $terezka$elm_charts$Internal$Many$fromPoint = function (point) {
	return {x1: point.x, x2: point.x, y1: point.y, y2: point.y};
};
var $terezka$elm_charts$Internal$Item$getPosition = F2(
	function (plane, _v0) {
		var item = _v0.a;
		return A2(item.toPosition, plane, item.config);
	});
var $terezka$elm_charts$Internal$Item$Dot = function (a) {
	return {$: 'Dot', a: a};
};
var $terezka$elm_charts$Internal$Item$Rendered = function (a) {
	return {$: 'Rendered', a: a};
};
var $terezka$elm_charts$Internal$Item$isDot = function (_v0) {
	var item = _v0.a;
	var _v1 = item.config.product;
	if (_v1.$ === 'Dot') {
		var dot = _v1.a;
		return $elm$core$Maybe$Just(
			$terezka$elm_charts$Internal$Item$Rendered(
				{
					config: {product: dot, toAny: $terezka$elm_charts$Internal$Item$Dot, tooltipInfo: item.config.tooltipInfo, values: item.config.values},
					toHtml: function (c) {
						return item.toHtml(item.config);
					},
					toLimits: function (_v2) {
						return item.toLimits(item.config);
					},
					toPosition: F2(
						function (plane, _v3) {
							return A2(item.toPosition, plane, item.config);
						}),
					toSvg: F3(
						function (plane, config, pos) {
							return config.values.isReal ? A5(
								$terezka$elm_charts$Internal$Svg$dot,
								plane,
								function ($) {
									return $.x;
								},
								function ($) {
									return $.y;
								},
								config.product,
								{x: config.values.x1, y: config.values.y}) : $elm$svg$Svg$text('');
						})
				}));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $terezka$elm_charts$Internal$Many$dots = function () {
	var centerPosition = F2(
		function (plane, item) {
			return $terezka$elm_charts$Internal$Many$fromPoint(
				$terezka$elm_charts$Internal$Coordinates$center(
					A2($terezka$elm_charts$Internal$Item$getPosition, plane, item)));
		});
	return A2(
		$terezka$elm_charts$Internal$Many$Remodel,
		centerPosition,
		$elm$core$List$filterMap($terezka$elm_charts$Internal$Item$isDot));
}();
var $terezka$elm_charts$Chart$Item$dots = $terezka$elm_charts$Internal$Many$dots;
var $terezka$elm_charts$Chart$SubElements = function (a) {
	return {$: 'SubElements', a: a};
};
var $terezka$elm_charts$Chart$each = F2(
	function (items, func) {
		return $terezka$elm_charts$Chart$SubElements(
			F2(
				function (p, _v0) {
					return A2(
						$elm$core$List$concatMap,
						func(p),
						items);
				}));
	});
var $terezka$elm_charts$Chart$Attributes$fontSize = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				fontSize: $elm$core$Maybe$Just(v)
			});
	});
var $terezka$elm_charts$Internal$Property$Property = function (a) {
	return {$: 'Property', a: a};
};
var $terezka$elm_charts$Internal$Property$Stacked = function (a) {
	return {$: 'Stacked', a: a};
};
var $terezka$elm_charts$Internal$Property$format = F2(
	function (value, prop) {
		if (prop.$ === 'Property') {
			var con = prop.a;
			return $terezka$elm_charts$Internal$Property$Property(
				_Utils_update(
					con,
					{
						format: A2($elm$core$Basics$composeR, con.value, value)
					}));
		} else {
			var cons = prop.a;
			return $terezka$elm_charts$Internal$Property$Stacked(
				A2(
					$elm$core$List$map,
					function (con) {
						return _Utils_update(
							con,
							{
								format: A2($elm$core$Basics$composeR, con.value, value)
							});
					},
					cons));
		}
	});
var $terezka$elm_charts$Chart$format = function (func) {
	return $terezka$elm_charts$Internal$Property$format(
		function (v) {
			if (v.$ === 'Just') {
				var v_ = v.a;
				return func(v_);
			} else {
				return 'N/A';
			}
		});
};
var $elm$time$Time$flooredDiv = F2(
	function (numerator, denominator) {
		return $elm$core$Basics$floor(numerator / denominator);
	});
var $elm$time$Time$toAdjustedMinutesHelp = F3(
	function (defaultOffset, posixMinutes, eras) {
		toAdjustedMinutesHelp:
		while (true) {
			if (!eras.b) {
				return posixMinutes + defaultOffset;
			} else {
				var era = eras.a;
				var olderEras = eras.b;
				if (_Utils_cmp(era.start, posixMinutes) < 0) {
					return posixMinutes + era.offset;
				} else {
					var $temp$defaultOffset = defaultOffset,
						$temp$posixMinutes = posixMinutes,
						$temp$eras = olderEras;
					defaultOffset = $temp$defaultOffset;
					posixMinutes = $temp$posixMinutes;
					eras = $temp$eras;
					continue toAdjustedMinutesHelp;
				}
			}
		}
	});
var $elm$time$Time$toAdjustedMinutes = F2(
	function (_v0, time) {
		var defaultOffset = _v0.a;
		var eras = _v0.b;
		return A3(
			$elm$time$Time$toAdjustedMinutesHelp,
			defaultOffset,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				60000),
			eras);
	});
var $elm$time$Time$toCivil = function (minutes) {
	var rawDay = A2($elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
	var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
	var dayOfEra = rawDay - (era * 146097);
	var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
	var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
	var mp = (((5 * dayOfYear) + 2) / 153) | 0;
	var month = mp + ((mp < 10) ? 3 : (-9));
	var year = yearOfEra + (era * 400);
	return {
		day: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
		month: month,
		year: year + ((month <= 2) ? 1 : 0)
	};
};
var $elm$time$Time$toDay = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).day;
	});
var $elm$time$Time$Apr = {$: 'Apr'};
var $elm$time$Time$Aug = {$: 'Aug'};
var $elm$time$Time$Dec = {$: 'Dec'};
var $elm$time$Time$Jul = {$: 'Jul'};
var $elm$time$Time$Jun = {$: 'Jun'};
var $elm$time$Time$Mar = {$: 'Mar'};
var $elm$time$Time$May = {$: 'May'};
var $elm$time$Time$Oct = {$: 'Oct'};
var $elm$time$Time$Sep = {$: 'Sep'};
var $elm$time$Time$toMonth = F2(
	function (zone, time) {
		var _v0 = $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).month;
		switch (_v0) {
			case 1:
				return $elm$time$Time$Jan;
			case 2:
				return $elm$time$Time$Feb;
			case 3:
				return $elm$time$Time$Mar;
			case 4:
				return $elm$time$Time$Apr;
			case 5:
				return $elm$time$Time$May;
			case 6:
				return $elm$time$Time$Jun;
			case 7:
				return $elm$time$Time$Jul;
			case 8:
				return $elm$time$Time$Aug;
			case 9:
				return $elm$time$Time$Sep;
			case 10:
				return $elm$time$Time$Oct;
			case 11:
				return $elm$time$Time$Nov;
			default:
				return $elm$time$Time$Dec;
		}
	});
var $elm$time$Time$toYear = F2(
	function (zone, time) {
		return $elm$time$Time$toCivil(
			A2($elm$time$Time$toAdjustedMinutes, zone, time)).year;
	});
var $author$project$Util$Time$posixToDate = F2(
	function (tz, time) {
		var year = A2($elm$time$Time$toYear, tz, time);
		var month = A2($elm$time$Time$toMonth, tz, time);
		var day = A2($elm$time$Time$toDay, tz, time);
		return $author$project$Util$Time$Date(
			{day: day, month: month, year: year});
	});
var $elm$time$Time$toHour = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			24,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60));
	});
var $elm$time$Time$toMinute = F2(
	function (zone, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2($elm$time$Time$toAdjustedMinutes, zone, time));
	});
var $author$project$Util$Time$formatTime = F2(
	function (tz, time) {
		var minute = A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			$elm$core$String$fromInt(
				A2($elm$time$Time$toMinute, tz, time)));
		var hour = A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			$elm$core$String$fromInt(
				A2($elm$time$Time$toHour, tz, time)));
		var day = A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			$elm$core$String$fromInt(
				A2($elm$time$Time$toDay, tz, time)));
		var date = A2($author$project$Util$Time$posixToDate, tz, time);
		return $author$project$Util$Time$formatDate(date) + (' ' + (hour + (':' + minute)));
	});
var $terezka$elm_charts$Internal$Item$getColor = function (_v0) {
	var item = _v0.a;
	return item.config.tooltipInfo.color;
};
var $terezka$elm_charts$Chart$Item$getColor = $terezka$elm_charts$Internal$Item$getColor;
var $terezka$elm_charts$Internal$Item$getDatum = function (_v0) {
	var item = _v0.a;
	return item.config.values.datum;
};
var $terezka$elm_charts$Chart$Item$getData = $terezka$elm_charts$Internal$Item$getDatum;
var $terezka$elm_charts$Internal$Item$getName = function (_v0) {
	var item = _v0.a;
	var _v1 = item.config.tooltipInfo.name;
	if (_v1.$ === 'Just') {
		var name = _v1.a;
		return name;
	} else {
		return 'Property #' + $elm$core$String$fromInt(item.config.tooltipInfo.index + 1);
	}
};
var $terezka$elm_charts$Chart$Item$getName = $terezka$elm_charts$Internal$Item$getName;
var $terezka$elm_charts$Internal$Events$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $terezka$elm_charts$Internal$Many$apply = F2(
	function (_v0, items) {
		var func = _v0.b;
		return func(items);
	});
var $terezka$elm_charts$Internal$Svg$closestPoint = F2(
	function (pos, searched) {
		return {
			x: A3($elm$core$Basics$clamp, pos.x1, pos.x2, searched.x),
			y: A3($elm$core$Basics$clamp, pos.y1, pos.y2, searched.y)
		};
	});
var $terezka$elm_charts$Internal$Svg$distanceX = F3(
	function (plane, searched, point) {
		return $elm$core$Basics$abs(
			A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, point.x) - A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, searched.x));
	});
var $terezka$elm_charts$Internal$Svg$distanceY = F3(
	function (plane, searched, point) {
		return $elm$core$Basics$abs(
			A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, point.y) - A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, searched.y));
	});
var $elm$core$Basics$pow = _Basics_pow;
var $terezka$elm_charts$Internal$Svg$distanceSquared = F3(
	function (plane, searched, point) {
		return A2(
			$elm$core$Basics$pow,
			A3($terezka$elm_charts$Internal$Svg$distanceX, plane, searched, point),
			2) + A2(
			$elm$core$Basics$pow,
			A3($terezka$elm_charts$Internal$Svg$distanceY, plane, searched, point),
			2);
	});
var $terezka$elm_charts$Internal$Svg$keepOne = function (toPosition) {
	var toArea = function (a) {
		return function (pos) {
			return (pos.x1 - pos.x2) * (pos.y1 - pos.y2);
		}(
			toPosition(a));
	};
	var func = F2(
		function (one, acc) {
			var _v0 = $elm$core$List$head(acc);
			if (_v0.$ === 'Nothing') {
				return _List_fromArray(
					[one]);
			} else {
				var other = _v0.a;
				return _Utils_eq(
					toPosition(other),
					toPosition(one)) ? A2($elm$core$List$cons, other, acc) : ((_Utils_cmp(
					toArea(other),
					toArea(one)) > 0) ? _List_fromArray(
					[one]) : acc);
			}
		});
	return A2($elm$core$List$foldr, func, _List_Nil);
};
var $terezka$elm_charts$Internal$Svg$getNearestHelp = F4(
	function (toPosition, items, plane, searched) {
		var toPoint = function (i) {
			return A2(
				$terezka$elm_charts$Internal$Svg$closestPoint,
				toPosition(i),
				searched);
		};
		var distanceSquared_ = A2($terezka$elm_charts$Internal$Svg$distanceSquared, plane, searched);
		var getClosest = F2(
			function (item, allClosest) {
				var _v0 = $elm$core$List$head(allClosest);
				if (_v0.$ === 'Just') {
					var closest = _v0.a;
					return _Utils_eq(
						toPoint(closest),
						toPoint(item)) ? A2($elm$core$List$cons, item, allClosest) : ((_Utils_cmp(
						distanceSquared_(
							toPoint(closest)),
						distanceSquared_(
							toPoint(item))) > 0) ? _List_fromArray(
						[item]) : allClosest);
				} else {
					return _List_fromArray(
						[item]);
				}
			});
		return A2(
			$terezka$elm_charts$Internal$Svg$keepOne,
			toPosition,
			A3($elm$core$List$foldl, getClosest, _List_Nil, items));
	});
var $terezka$elm_charts$Internal$Svg$getNearest = F4(
	function (toPosition, items, plane, searched) {
		return A4($terezka$elm_charts$Internal$Svg$getNearestHelp, toPosition, items, plane, searched);
	});
var $terezka$elm_charts$Internal$Events$getNearest = function (grouping) {
	var toPos = grouping.a;
	return $terezka$elm_charts$Internal$Events$Decoder(
		F2(
			function (items, plane) {
				var groups = A2($terezka$elm_charts$Internal$Many$apply, grouping, items);
				return A3(
					$terezka$elm_charts$Internal$Svg$getNearest,
					toPos(plane),
					groups,
					plane);
			}));
};
var $terezka$elm_charts$Chart$Events$getNearest = $terezka$elm_charts$Internal$Events$getNearest;
var $terezka$elm_charts$Internal$Item$getTooltipValue = function (_v0) {
	var item = _v0.a;
	return item.config.tooltipInfo.formatted;
};
var $terezka$elm_charts$Chart$Item$getTooltipValue = $terezka$elm_charts$Internal$Item$getTooltipValue;
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $terezka$elm_charts$Chart$Attributes$height = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{height: v});
	});
var $terezka$elm_charts$Internal$Svg$Linear = {$: 'Linear'};
var $terezka$elm_charts$Chart$Attributes$linear = function (config) {
	return _Utils_update(
		config,
		{
			method: $elm$core$Maybe$Just($terezka$elm_charts$Internal$Svg$Linear)
		});
};
var $terezka$elm_charts$Internal$Property$property = F3(
	function (value, inter, attrs) {
		return $terezka$elm_charts$Internal$Property$Property(
			{
				attrs: attrs,
				extra: F5(
					function (_v0, _v1, _v2, _v3, _v4) {
						return _List_Nil;
					}),
				format: A2(
					$elm$core$Basics$composeR,
					value,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$map($elm$core$String$fromFloat),
						$elm$core$Maybe$withDefault('N/A'))),
				inter: inter,
				meta: $elm$core$Maybe$Nothing,
				value: value,
				visual: value
			});
	});
var $terezka$elm_charts$Chart$interpolated = F2(
	function (y, inter) {
		return A2(
			$terezka$elm_charts$Internal$Property$property,
			A2($elm$core$Basics$composeR, y, $elm$core$Maybe$Just),
			_Utils_ap(
				_List_fromArray(
					[$terezka$elm_charts$Chart$Attributes$linear]),
				inter));
	});
var $terezka$elm_charts$Chart$SvgElement = function (a) {
	return {$: 'SvgElement', a: a};
};
var $terezka$elm_charts$Internal$Svg$defaultLabel = {anchor: $elm$core$Maybe$Nothing, attrs: _List_Nil, border: 'white', borderWidth: 0, color: '#808BAB', ellipsis: $elm$core$Maybe$Nothing, fontSize: $elm$core$Maybe$Nothing, hideOverflow: false, rotate: 0, uppercase: false, xOff: 0, yOff: 0};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$svg$Svg$foreignObject = $elm$svg$Svg$trustedNode('foreignObject');
var $terezka$elm_charts$Internal$Svg$position = F6(
	function (plane, rotation, x_, y_, xOff_, yOff_) {
		return $elm$svg$Svg$Attributes$transform(
			'translate(' + ($elm$core$String$fromFloat(
				A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x_) + xOff_) + (',' + ($elm$core$String$fromFloat(
				A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y_) + yOff_) + (') rotate(' + ($elm$core$String$fromFloat(rotation) + ')'))))));
	});
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$tspan = $elm$svg$Svg$trustedNode('tspan');
var $terezka$elm_charts$Internal$Svg$label = F4(
	function (plane, config, inner, point) {
		var _v0 = config.ellipsis;
		if (_v0.$ === 'Nothing') {
			var withOverflowWrap = function (el) {
				return config.hideOverflow ? A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$terezka$elm_charts$Internal$Svg$withinChartArea(plane)
						]),
					_List_fromArray(
						[el])) : el;
			};
			var uppercaseStyle = config.uppercase ? 'text-transform: uppercase;' : '';
			var fontStyle = function () {
				var _v5 = config.fontSize;
				if (_v5.$ === 'Just') {
					var size_ = _v5.a;
					return 'font-size: ' + ($elm$core$String$fromInt(size_) + 'px;');
				} else {
					return '';
				}
			}();
			var anchorStyle = function () {
				var _v1 = config.anchor;
				if (_v1.$ === 'Nothing') {
					return 'text-anchor: middle;';
				} else {
					switch (_v1.a.$) {
						case 'End':
							var _v2 = _v1.a;
							return 'text-anchor: end;';
						case 'Start':
							var _v3 = _v1.a;
							return 'text-anchor: start;';
						default:
							var _v4 = _v1.a;
							return 'text-anchor: middle;';
					}
				}
			}();
			return withOverflowWrap(
				A4(
					$terezka$elm_charts$Internal$Svg$withAttrs,
					config.attrs,
					$elm$svg$Svg$text_,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__label'),
							$elm$svg$Svg$Attributes$stroke(config.border),
							$elm$svg$Svg$Attributes$strokeWidth(
							$elm$core$String$fromFloat(config.borderWidth)),
							$elm$svg$Svg$Attributes$fill(config.color),
							A6($terezka$elm_charts$Internal$Svg$position, plane, -config.rotate, point.x, point.y, config.xOff, config.yOff),
							$elm$svg$Svg$Attributes$style(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									['pointer-events: none;', fontStyle, anchorStyle, uppercaseStyle])))
						]),
					_List_fromArray(
						[
							A2($elm$svg$Svg$tspan, _List_Nil, inner)
						])));
		} else {
			var ellipsis = _v0.a;
			var xOffWithAnchor = function () {
				var _v11 = config.anchor;
				if (_v11.$ === 'Nothing') {
					return config.xOff - (ellipsis.width / 2);
				} else {
					switch (_v11.a.$) {
						case 'End':
							var _v12 = _v11.a;
							return config.xOff - ellipsis.width;
						case 'Start':
							var _v13 = _v11.a;
							return config.xOff;
						default:
							var _v14 = _v11.a;
							return config.xOff - (ellipsis.width / 2);
					}
				}
			}();
			var withOverflowWrap = function (el) {
				return config.hideOverflow ? A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$terezka$elm_charts$Internal$Svg$withinChartArea(plane)
						]),
					_List_fromArray(
						[el])) : el;
			};
			var uppercaseStyle = config.uppercase ? A2($elm$html$Html$Attributes$style, 'text-transform', 'uppercase') : A2($elm$html$Html$Attributes$style, '', '');
			var fontStyle = function () {
				var _v10 = config.fontSize;
				if (_v10.$ === 'Just') {
					var size_ = _v10.a;
					return A2(
						$elm$html$Html$Attributes$style,
						'font-size',
						$elm$core$String$fromInt(size_) + 'px');
				} else {
					return A2($elm$html$Html$Attributes$style, '', '');
				}
			}();
			var anchorStyle = function () {
				var _v6 = config.anchor;
				if (_v6.$ === 'Nothing') {
					return A2($elm$html$Html$Attributes$style, 'text-align', 'center');
				} else {
					switch (_v6.a.$) {
						case 'End':
							var _v7 = _v6.a;
							return A2($elm$html$Html$Attributes$style, 'text-align', 'right');
						case 'Start':
							var _v8 = _v6.a;
							return A2($elm$html$Html$Attributes$style, 'text-align', 'left');
						default:
							var _v9 = _v6.a;
							return A2($elm$html$Html$Attributes$style, 'text-align', 'center');
					}
				}
			}();
			return withOverflowWrap(
				A4(
					$terezka$elm_charts$Internal$Svg$withAttrs,
					config.attrs,
					$elm$svg$Svg$foreignObject,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__label'),
							$elm$svg$Svg$Attributes$class('elm-charts__html-label'),
							$elm$svg$Svg$Attributes$width(
							$elm$core$String$fromFloat(ellipsis.width)),
							$elm$svg$Svg$Attributes$height(
							$elm$core$String$fromFloat(ellipsis.height)),
							A6($terezka$elm_charts$Internal$Svg$position, plane, -config.rotate, point.x, point.y, xOffWithAnchor, config.yOff - 10)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$attribute, 'xmlns', 'http://www.w3.org/1999/xhtml'),
									A2($elm$html$Html$Attributes$style, 'white-space', 'nowrap'),
									A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
									A2($elm$html$Html$Attributes$style, 'text-overflow', 'ellipsis'),
									A2($elm$html$Html$Attributes$style, 'height', '100%'),
									A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
									A2($elm$html$Html$Attributes$style, 'color', config.color),
									fontStyle,
									uppercaseStyle,
									anchorStyle
								]),
							inner)
						])));
		}
	});
var $terezka$elm_charts$Chart$Svg$label = F2(
	function (plane, edits) {
		return A2(
			$terezka$elm_charts$Internal$Svg$label,
			plane,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultLabel));
	});
var $terezka$elm_charts$Chart$label = F3(
	function (attrs, inner, point) {
		return $terezka$elm_charts$Chart$SvgElement(
			function (p) {
				return A4($terezka$elm_charts$Chart$Svg$label, p, attrs, inner, point);
			});
	});
var $terezka$elm_charts$Chart$line = function (attrs) {
	return $terezka$elm_charts$Chart$SvgElement(
		function (p) {
			return A2($terezka$elm_charts$Chart$Svg$line, p, attrs);
		});
};
var $terezka$elm_charts$Chart$Attributes$margin = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{margin: v});
	});
var $terezka$elm_charts$Chart$Attributes$moveDown = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{yOff: config.yOff + v});
	});
var $terezka$elm_charts$Chart$Attributes$moveUp = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{yOff: config.yOff - v});
	});
var $terezka$elm_charts$Internal$Property$meta = F2(
	function (value, prop) {
		if (prop.$ === 'Property') {
			var con = prop.a;
			return $terezka$elm_charts$Internal$Property$Property(
				_Utils_update(
					con,
					{
						meta: $elm$core$Maybe$Just(value)
					}));
		} else {
			var cons = prop.a;
			return $terezka$elm_charts$Internal$Property$Stacked(
				A2(
					$elm$core$List$map,
					function (con) {
						return _Utils_update(
							con,
							{
								meta: $elm$core$Maybe$Just(value)
							});
					},
					cons));
		}
	});
var $terezka$elm_charts$Chart$named = function (name) {
	return $terezka$elm_charts$Internal$Property$meta(name);
};
var $terezka$elm_charts$Internal$Events$getCoords = $terezka$elm_charts$Internal$Events$Decoder(
	F3(
		function (_v0, plane, searched) {
			return searched;
		}));
var $terezka$elm_charts$Chart$Events$getCoords = $terezka$elm_charts$Internal$Events$getCoords;
var $terezka$elm_charts$Internal$Events$map = F2(
	function (f, _v0) {
		var a = _v0.a;
		return $terezka$elm_charts$Internal$Events$Decoder(
			F3(
				function (ps, s, p) {
					return f(
						A3(a, ps, s, p));
				}));
	});
var $terezka$elm_charts$Chart$Events$map = $terezka$elm_charts$Internal$Events$map;
var $terezka$elm_charts$Internal$Events$Event = function (a) {
	return {$: 'Event', a: a};
};
var $terezka$elm_charts$Internal$Events$on = F3(
	function (name, decoder, config) {
		return _Utils_update(
			config,
			{
				events: A2(
					$elm$core$List$cons,
					$terezka$elm_charts$Internal$Events$Event(
						{decoder: decoder, name: name}),
					config.events)
			});
	});
var $terezka$elm_charts$Chart$Events$on = $terezka$elm_charts$Internal$Events$on;
var $terezka$elm_charts$Chart$Events$onMouseLeave = function (onMsg) {
	return A2(
		$terezka$elm_charts$Chart$Events$on,
		'mouseleave',
		A2(
			$terezka$elm_charts$Chart$Events$map,
			$elm$core$Basics$always(onMsg),
			$terezka$elm_charts$Chart$Events$getCoords));
};
var $terezka$elm_charts$Chart$Events$onMouseMove = F2(
	function (onMsg, decoder) {
		return A2(
			$terezka$elm_charts$Chart$Events$on,
			'mousemove',
			A2($terezka$elm_charts$Chart$Events$map, onMsg, decoder));
	});
var $terezka$elm_charts$Chart$Indexed = function (a) {
	return {$: 'Indexed', a: a};
};
var $terezka$elm_charts$Chart$SeriesElement = F4(
	function (a, b, c, d) {
		return {$: 'SeriesElement', a: a, b: b, c: c, d: d};
	});
var $terezka$elm_charts$Internal$Item$toHtml = function (_v0) {
	var item = _v0.a;
	return item.toHtml(item.config);
};
var $terezka$elm_charts$Internal$Item$toSvg = F2(
	function (plane, _v0) {
		var item = _v0.a;
		return A3(
			item.toSvg,
			plane,
			item.config,
			A2(item.toPosition, plane, item.config));
	});
var $terezka$elm_charts$Internal$Item$generalize = F2(
	function (toAny, _v0) {
		var item = _v0.a;
		return $terezka$elm_charts$Internal$Item$Rendered(
			{
				config: {
					product: toAny(item.config.product),
					toAny: $elm$core$Basics$identity,
					tooltipInfo: item.config.tooltipInfo,
					values: item.config.values
				},
				toHtml: function (c) {
					return $terezka$elm_charts$Internal$Item$toHtml(
						$terezka$elm_charts$Internal$Item$Rendered(item));
				},
				toLimits: function (_v1) {
					return item.toLimits(item.config);
				},
				toPosition: F2(
					function (plane, _v2) {
						return A2(item.toPosition, plane, item.config);
					}),
				toSvg: F3(
					function (plane, _v3, _v4) {
						return A2(
							$terezka$elm_charts$Internal$Item$toSvg,
							plane,
							$terezka$elm_charts$Internal$Item$Rendered(item));
					})
			});
	});
var $terezka$elm_charts$Internal$Many$getMembers = function (_v0) {
	var group_ = _v0.a;
	return function (_v1) {
		var x = _v1.a;
		var xs = _v1.b;
		return A2($elm$core$List$cons, x, xs);
	}(group_.config.items);
};
var $terezka$elm_charts$Internal$Many$getGenerals = function (group_) {
	var generalize = function (_v0) {
		var item = _v0.a;
		return A2(
			$terezka$elm_charts$Internal$Item$generalize,
			item.config.toAny,
			$terezka$elm_charts$Internal$Item$Rendered(item));
	};
	return A2(
		$elm$core$List$map,
		generalize,
		$terezka$elm_charts$Internal$Many$getMembers(group_));
};
var $terezka$elm_charts$Internal$Item$getLimits = function (_v0) {
	var item = _v0.a;
	return item.toLimits(item.config);
};
var $terezka$elm_charts$Internal$Item$map = F2(
	function (func, _v0) {
		var item = _v0.a;
		return $terezka$elm_charts$Internal$Item$Rendered(
			{
				config: {
					product: item.config.product,
					toAny: item.config.toAny,
					tooltipInfo: item.config.tooltipInfo,
					values: {
						datum: func(item.config.values.datum),
						isReal: item.config.values.isReal,
						x1: item.config.values.x1,
						x2: item.config.values.x2,
						y: item.config.values.y
					}
				},
				toHtml: function (_v1) {
					return $terezka$elm_charts$Internal$Item$toHtml(
						$terezka$elm_charts$Internal$Item$Rendered(item));
				},
				toLimits: function (_v2) {
					return item.toLimits(item.config);
				},
				toPosition: F2(
					function (plane, _v3) {
						return A2(item.toPosition, plane, item.config);
					}),
				toSvg: F3(
					function (plane, _v4, _v5) {
						return A2(
							$terezka$elm_charts$Internal$Item$toSvg,
							plane,
							$terezka$elm_charts$Internal$Item$Rendered(item));
					})
			});
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $terezka$elm_charts$Internal$Property$toConfigs = function (prop) {
	if (prop.$ === 'Property') {
		var config = prop.a;
		return _List_fromArray(
			[config]);
	} else {
		var configs = prop.a;
		return configs;
	}
};
var $terezka$elm_charts$Internal$Legend$LineLegend = F3(
	function (a, b, c) {
		return {$: 'LineLegend', a: a, b: b, c: c};
	});
var $terezka$elm_charts$Chart$Attributes$border = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{border: v});
	});
var $terezka$elm_charts$Internal$Svg$defaultInterpolation = {attrs: _List_Nil, color: $terezka$elm_charts$Internal$Helpers$pink, dashed: _List_Nil, design: $elm$core$Maybe$Nothing, method: $elm$core$Maybe$Nothing, opacity: 0, width: 1};
var $terezka$elm_charts$Chart$Attributes$opacity = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{opacity: v});
	});
var $terezka$elm_charts$Internal$Helpers$brown = '#871c1c';
var $terezka$elm_charts$Internal$Helpers$green = '#71c614';
var $terezka$elm_charts$Internal$Helpers$moss = '#92b42c';
var $terezka$elm_charts$Internal$Helpers$orange = '#FF8400';
var $terezka$elm_charts$Internal$Helpers$purple = '#7b4dff';
var $terezka$elm_charts$Internal$Helpers$red = '#F5325B';
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $terezka$elm_charts$Internal$Helpers$toDefault = F3(
	function (_default, items, index) {
		var dict = $elm$core$Dict$fromList(
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, items));
		var numOfItems = $elm$core$Dict$size(dict);
		var itemIndex = index % numOfItems;
		return A2(
			$elm$core$Maybe$withDefault,
			_default,
			A2($elm$core$Dict$get, itemIndex, dict));
	});
var $terezka$elm_charts$Internal$Helpers$turquoise = '#22d2ba';
var $terezka$elm_charts$Internal$Helpers$yellow = '#FFCA00';
var $terezka$elm_charts$Internal$Helpers$toDefaultColor = A2(
	$terezka$elm_charts$Internal$Helpers$toDefault,
	$terezka$elm_charts$Internal$Helpers$pink,
	_List_fromArray(
		[$terezka$elm_charts$Internal$Helpers$purple, $terezka$elm_charts$Internal$Helpers$pink, $terezka$elm_charts$Internal$Helpers$blue, $terezka$elm_charts$Internal$Helpers$green, $terezka$elm_charts$Internal$Helpers$red, $terezka$elm_charts$Internal$Helpers$yellow, $terezka$elm_charts$Internal$Helpers$turquoise, $terezka$elm_charts$Internal$Helpers$orange, $terezka$elm_charts$Internal$Helpers$moss, $terezka$elm_charts$Internal$Helpers$brown]));
var $terezka$elm_charts$Internal$Legend$toDotLegends = F2(
	function (elIndex, properties) {
		var toInterConfig = function (attrs) {
			return A2($terezka$elm_charts$Internal$Helpers$apply, attrs, $terezka$elm_charts$Internal$Svg$defaultInterpolation);
		};
		var toDotLegend = F3(
			function (props, prop, colorIndex) {
				var defaultOpacity = ($elm$core$List$length(props) > 1) ? 0.4 : 0;
				var interAttr = _Utils_ap(
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(
							$terezka$elm_charts$Internal$Helpers$toDefaultColor(colorIndex)),
							$terezka$elm_charts$Chart$Attributes$opacity(defaultOpacity)
						]),
					prop.inter);
				var interConfig = toInterConfig(interAttr);
				var defaultName = 'Property #' + $elm$core$String$fromInt(colorIndex + 1);
				var defaultAttrs = _List_fromArray(
					[
						$terezka$elm_charts$Chart$Attributes$color(interConfig.color),
						$terezka$elm_charts$Chart$Attributes$border(interConfig.color),
						_Utils_eq(interConfig.method, $elm$core$Maybe$Nothing) ? $terezka$elm_charts$Chart$Attributes$circle : $elm$core$Basics$identity
					]);
				var dotAttrs = _Utils_ap(defaultAttrs, prop.attrs);
				return A3(
					$terezka$elm_charts$Internal$Legend$LineLegend,
					A2($elm$core$Maybe$withDefault, defaultName, prop.meta),
					interAttr,
					dotAttrs);
			});
		return A2(
			$elm$core$List$indexedMap,
			F2(
				function (propIndex, f) {
					return f(elIndex + propIndex);
				}),
			A2(
				$elm$core$List$concatMap,
				function (ps) {
					return A2(
						$elm$core$List$map,
						toDotLegend(ps),
						ps);
				},
				A2($elm$core$List$map, $terezka$elm_charts$Internal$Property$toConfigs, properties)));
	});
var $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute('fill-rule');
var $terezka$elm_charts$Internal$Interpolation$linear = $elm$core$List$map(
	$elm$core$List$map(
		function (_v0) {
			var x = _v0.x;
			var y = _v0.y;
			return A2($terezka$elm_charts$Internal$Commands$Line, x, y);
		}));
var $terezka$elm_charts$Internal$Interpolation$First = {$: 'First'};
var $terezka$elm_charts$Internal$Interpolation$Previous = function (a) {
	return {$: 'Previous', a: a};
};
var $terezka$elm_charts$Internal$Interpolation$monotoneCurve = F4(
	function (point0, point1, tangent0, tangent1) {
		var dx = (point1.x - point0.x) / 3;
		return A6($terezka$elm_charts$Internal$Commands$CubicBeziers, point0.x + dx, point0.y + (dx * tangent0), point1.x - dx, point1.y - (dx * tangent1), point1.x, point1.y);
	});
var $terezka$elm_charts$Internal$Interpolation$slope2 = F3(
	function (point0, point1, t) {
		var h = point1.x - point0.x;
		return (!(!h)) ? ((((3 * (point1.y - point0.y)) / h) - t) / 2) : t;
	});
var $elm$core$Basics$isNaN = _Basics_isNaN;
var $terezka$elm_charts$Internal$Interpolation$sign = function (x) {
	return (x < 0) ? (-1) : 1;
};
var $terezka$elm_charts$Internal$Interpolation$toH = F2(
	function (h0, h1) {
		return (!h0) ? ((h1 < 0) ? (0 * (-1)) : h1) : h0;
	});
var $terezka$elm_charts$Internal$Interpolation$slope3 = F3(
	function (point0, point1, point2) {
		var h1 = point2.x - point1.x;
		var h0 = point1.x - point0.x;
		var s0h = A2($terezka$elm_charts$Internal$Interpolation$toH, h0, h1);
		var s0 = (point1.y - point0.y) / s0h;
		var s1h = A2($terezka$elm_charts$Internal$Interpolation$toH, h1, h0);
		var s1 = (point2.y - point1.y) / s1h;
		var p = ((s0 * h1) + (s1 * h0)) / (h0 + h1);
		var slope = ($terezka$elm_charts$Internal$Interpolation$sign(s0) + $terezka$elm_charts$Internal$Interpolation$sign(s1)) * A2(
			$elm$core$Basics$min,
			A2(
				$elm$core$Basics$min,
				$elm$core$Basics$abs(s0),
				$elm$core$Basics$abs(s1)),
			0.5 * $elm$core$Basics$abs(p));
		return $elm$core$Basics$isNaN(slope) ? 0 : slope;
	});
var $terezka$elm_charts$Internal$Interpolation$monotonePart = F2(
	function (points, _v0) {
		var tangent = _v0.a;
		var commands = _v0.b;
		var _v1 = _Utils_Tuple2(tangent, points);
		_v1$4:
		while (true) {
			if (_v1.a.$ === 'First') {
				if (_v1.b.b && _v1.b.b.b) {
					if (_v1.b.b.b.b) {
						var _v2 = _v1.a;
						var _v3 = _v1.b;
						var p0 = _v3.a;
						var _v4 = _v3.b;
						var p1 = _v4.a;
						var _v5 = _v4.b;
						var p2 = _v5.a;
						var rest = _v5.b;
						var t1 = A3($terezka$elm_charts$Internal$Interpolation$slope3, p0, p1, p2);
						var t0 = A3($terezka$elm_charts$Internal$Interpolation$slope2, p0, p1, t1);
						return A2(
							$terezka$elm_charts$Internal$Interpolation$monotonePart,
							A2(
								$elm$core$List$cons,
								p1,
								A2($elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								$terezka$elm_charts$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4($terezka$elm_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var _v9 = _v1.a;
						var _v10 = _v1.b;
						var p0 = _v10.a;
						var _v11 = _v10.b;
						var p1 = _v11.a;
						var t1 = A3($terezka$elm_charts$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							$terezka$elm_charts$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4($terezka$elm_charts$Internal$Interpolation$monotoneCurve, p0, p1, t1, t1),
										A2($terezka$elm_charts$Internal$Commands$Line, p1.x, p1.y)
									])));
					}
				} else {
					break _v1$4;
				}
			} else {
				if (_v1.b.b && _v1.b.b.b) {
					if (_v1.b.b.b.b) {
						var t0 = _v1.a.a;
						var _v6 = _v1.b;
						var p0 = _v6.a;
						var _v7 = _v6.b;
						var p1 = _v7.a;
						var _v8 = _v7.b;
						var p2 = _v8.a;
						var rest = _v8.b;
						var t1 = A3($terezka$elm_charts$Internal$Interpolation$slope3, p0, p1, p2);
						return A2(
							$terezka$elm_charts$Internal$Interpolation$monotonePart,
							A2(
								$elm$core$List$cons,
								p1,
								A2($elm$core$List$cons, p2, rest)),
							_Utils_Tuple2(
								$terezka$elm_charts$Internal$Interpolation$Previous(t1),
								_Utils_ap(
									commands,
									_List_fromArray(
										[
											A4($terezka$elm_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1)
										]))));
					} else {
						var t0 = _v1.a.a;
						var _v12 = _v1.b;
						var p0 = _v12.a;
						var _v13 = _v12.b;
						var p1 = _v13.a;
						var t1 = A3($terezka$elm_charts$Internal$Interpolation$slope3, p0, p1, p1);
						return _Utils_Tuple2(
							$terezka$elm_charts$Internal$Interpolation$Previous(t1),
							_Utils_ap(
								commands,
								_List_fromArray(
									[
										A4($terezka$elm_charts$Internal$Interpolation$monotoneCurve, p0, p1, t0, t1),
										A2($terezka$elm_charts$Internal$Commands$Line, p1.x, p1.y)
									])));
					}
				} else {
					break _v1$4;
				}
			}
		}
		return _Utils_Tuple2(tangent, commands);
	});
var $terezka$elm_charts$Internal$Interpolation$monotoneSection = F2(
	function (points, _v0) {
		var tangent = _v0.a;
		var acc = _v0.b;
		var _v1 = function () {
			if (points.b) {
				var p0 = points.a;
				var rest = points.b;
				return A2(
					$terezka$elm_charts$Internal$Interpolation$monotonePart,
					A2($elm$core$List$cons, p0, rest),
					_Utils_Tuple2(
						tangent,
						_List_fromArray(
							[
								A2($terezka$elm_charts$Internal$Commands$Line, p0.x, p0.y)
							])));
			} else {
				return _Utils_Tuple2(tangent, _List_Nil);
			}
		}();
		var t0 = _v1.a;
		var commands = _v1.b;
		return _Utils_Tuple2(
			t0,
			A2($elm$core$List$cons, commands, acc));
	});
var $terezka$elm_charts$Internal$Interpolation$monotone = function (sections) {
	return A3(
		$elm$core$List$foldr,
		$terezka$elm_charts$Internal$Interpolation$monotoneSection,
		_Utils_Tuple2($terezka$elm_charts$Internal$Interpolation$First, _List_Nil),
		sections).b;
};
var $terezka$elm_charts$Internal$Interpolation$Point = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $terezka$elm_charts$Internal$Interpolation$after = F2(
	function (a, b) {
		return _List_fromArray(
			[
				a,
				A2($terezka$elm_charts$Internal$Interpolation$Point, b.x, a.y),
				b
			]);
	});
var $terezka$elm_charts$Internal$Interpolation$stepped = function (sections) {
	var expand = F2(
		function (result, section) {
			expand:
			while (true) {
				if (section.b) {
					if (section.b.b) {
						var a = section.a;
						var _v1 = section.b;
						var b = _v1.a;
						var rest = _v1.b;
						var $temp$result = _Utils_ap(
							result,
							A2($terezka$elm_charts$Internal$Interpolation$after, a, b)),
							$temp$section = A2($elm$core$List$cons, b, rest);
						result = $temp$result;
						section = $temp$section;
						continue expand;
					} else {
						var last = section.a;
						return result;
					}
				} else {
					return result;
				}
			}
		});
	return A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			expand(_List_Nil),
			$elm$core$List$map(
				function (_v2) {
					var x = _v2.x;
					var y = _v2.y;
					return A2($terezka$elm_charts$Internal$Commands$Line, x, y);
				})),
		sections);
};
var $terezka$elm_charts$Internal$Svg$last = function (list) {
	return $elm$core$List$head(
		A2(
			$elm$core$List$drop,
			$elm$core$List$length(list) - 1,
			list));
};
var $terezka$elm_charts$Internal$Svg$withBorder = F2(
	function (stuff, func) {
		if (stuff.b) {
			var first = stuff.a;
			var rest = stuff.b;
			return $elm$core$Maybe$Just(
				A2(
					func,
					first,
					A2(
						$elm$core$Maybe$withDefault,
						first,
						$terezka$elm_charts$Internal$Svg$last(rest))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $terezka$elm_charts$Internal$Svg$toCommands = F4(
	function (method, toX, toY, data) {
		var toSets = F2(
			function (ps, cmds) {
				return A2(
					$terezka$elm_charts$Internal$Svg$withBorder,
					ps,
					F2(
						function (first, last_) {
							return _Utils_Tuple3(first, cmds, last_);
						}));
			});
		var fold = F2(
			function (datum_, acc) {
				var _v1 = toY(datum_);
				if (_v1.$ === 'Just') {
					var y_ = _v1.a;
					if (acc.b) {
						var latest = acc.a;
						var rest = acc.b;
						return A2(
							$elm$core$List$cons,
							_Utils_ap(
								latest,
								_List_fromArray(
									[
										{
										x: toX(datum_),
										y: y_
									}
									])),
							rest);
					} else {
						return A2(
							$elm$core$List$cons,
							_List_fromArray(
								[
									{
									x: toX(datum_),
									y: y_
								}
								]),
							acc);
					}
				} else {
					return A2($elm$core$List$cons, _List_Nil, acc);
				}
			});
		var points = $elm$core$List$reverse(
			A3($elm$core$List$foldl, fold, _List_Nil, data));
		var commands = function () {
			switch (method.$) {
				case 'Linear':
					return $terezka$elm_charts$Internal$Interpolation$linear(points);
				case 'Monotone':
					return $terezka$elm_charts$Internal$Interpolation$monotone(points);
				default:
					return $terezka$elm_charts$Internal$Interpolation$stepped(points);
			}
		}();
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A3($elm$core$List$map2, toSets, points, commands));
	});
var $terezka$elm_charts$Internal$Svg$apply = F2(
	function (funcs, _default) {
		var apply_ = F2(
			function (f, a) {
				return f(a);
			});
		return A3($elm$core$List$foldl, apply_, _default, funcs);
	});
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $elm$svg$Svg$linearGradient = $elm$svg$Svg$trustedNode('linearGradient');
var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute('offset');
var $elm$svg$Svg$pattern = $elm$svg$Svg$trustedNode('pattern');
var $elm$svg$Svg$Attributes$patternTransform = _VirtualDom_attribute('patternTransform');
var $elm$svg$Svg$Attributes$patternUnits = _VirtualDom_attribute('patternUnits');
var $elm$svg$Svg$stop = $elm$svg$Svg$trustedNode('stop');
var $elm$svg$Svg$Attributes$stopColor = _VirtualDom_attribute('stop-color');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $terezka$elm_charts$Internal$Svg$toPattern = F2(
	function (defaultColor, design) {
		var toPatternId = function (props) {
			return A3(
				$elm$core$String$replace,
				'(',
				'-',
				A3(
					$elm$core$String$replace,
					')',
					'-',
					A3(
						$elm$core$String$replace,
						'.',
						'-',
						A3(
							$elm$core$String$replace,
							',',
							'-',
							A3(
								$elm$core$String$replace,
								' ',
								'-',
								A2(
									$elm$core$String$join,
									'-',
									_Utils_ap(
										_List_fromArray(
											[
												'elm-charts__pattern',
												function () {
												switch (design.$) {
													case 'Striped':
														return 'striped';
													case 'Dotted':
														return 'dotted';
													default:
														return 'gradient';
												}
											}()
											]),
										props)))))));
		};
		var toPatternDefs = F4(
			function (id, spacing, rotate, inside) {
				return A2(
					$elm$svg$Svg$defs,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$pattern,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$id(id),
									$elm$svg$Svg$Attributes$patternUnits('userSpaceOnUse'),
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(spacing)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(spacing)),
									$elm$svg$Svg$Attributes$patternTransform(
									'rotate(' + ($elm$core$String$fromFloat(rotate) + ')'))
								]),
							_List_fromArray(
								[inside]))
						]));
			});
		var _v0 = function () {
			switch (design.$) {
				case 'Striped':
					var edits = design.a;
					var config = A2(
						$terezka$elm_charts$Internal$Svg$apply,
						edits,
						{color: defaultColor, rotate: 45, spacing: 4, width: 3});
					var theId = toPatternId(
						_List_fromArray(
							[
								config.color,
								$elm$core$String$fromFloat(config.width),
								$elm$core$String$fromFloat(config.spacing),
								$elm$core$String$fromFloat(config.rotate)
							]));
					return _Utils_Tuple2(
						A4(
							toPatternDefs,
							theId,
							config.spacing,
							config.rotate,
							A2(
								$elm$svg$Svg$line,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$x1('0'),
										$elm$svg$Svg$Attributes$y('0'),
										$elm$svg$Svg$Attributes$x2('0'),
										$elm$svg$Svg$Attributes$y2(
										$elm$core$String$fromFloat(config.spacing)),
										$elm$svg$Svg$Attributes$stroke(config.color),
										$elm$svg$Svg$Attributes$strokeWidth(
										$elm$core$String$fromFloat(config.width))
									]),
								_List_Nil)),
						theId);
				case 'Dotted':
					var edits = design.a;
					var config = A2(
						$terezka$elm_charts$Internal$Svg$apply,
						edits,
						{color: defaultColor, rotate: 45, spacing: 4, width: 3});
					var theId = toPatternId(
						_List_fromArray(
							[
								config.color,
								$elm$core$String$fromFloat(config.width),
								$elm$core$String$fromFloat(config.spacing),
								$elm$core$String$fromFloat(config.rotate)
							]));
					return _Utils_Tuple2(
						A4(
							toPatternDefs,
							theId,
							config.spacing,
							config.rotate,
							A2(
								$elm$svg$Svg$circle,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$fill(config.color),
										$elm$svg$Svg$Attributes$cx(
										$elm$core$String$fromFloat(config.width / 3)),
										$elm$svg$Svg$Attributes$cy(
										$elm$core$String$fromFloat(config.width / 3)),
										$elm$svg$Svg$Attributes$r(
										$elm$core$String$fromFloat(config.width / 3))
									]),
								_List_Nil)),
						theId);
				default:
					var edits = design.a;
					var colors = _Utils_eq(edits, _List_Nil) ? _List_fromArray(
						[defaultColor, 'white']) : edits;
					var theId = toPatternId(colors);
					var totalColors = $elm$core$List$length(colors);
					var toPercentage = function (i) {
						return (i * 100) / (totalColors - 1);
					};
					var toStop = F2(
						function (i, c) {
							return A2(
								$elm$svg$Svg$stop,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$offset(
										$elm$core$String$fromFloat(
											toPercentage(i)) + '%'),
										$elm$svg$Svg$Attributes$stopColor(c)
									]),
								_List_Nil);
						});
					return _Utils_Tuple2(
						A2(
							$elm$svg$Svg$defs,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$svg$Svg$linearGradient,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$id(theId),
											$elm$svg$Svg$Attributes$x1('0'),
											$elm$svg$Svg$Attributes$x2('0'),
											$elm$svg$Svg$Attributes$y1('0'),
											$elm$svg$Svg$Attributes$y2('1')
										]),
									A2($elm$core$List$indexedMap, toStop, colors))
								])),
						theId);
			}
		}();
		var patternDefs = _v0.a;
		var patternId = _v0.b;
		return _Utils_Tuple2(patternDefs, 'url(#' + (patternId + ')'));
	});
var $terezka$elm_charts$Internal$Svg$area = F6(
	function (plane, toX, toY2M, toY, config, data) {
		var _v0 = function () {
			var _v1 = config.design;
			if (_v1.$ === 'Nothing') {
				return _Utils_Tuple2(
					$elm$svg$Svg$text(''),
					config.color);
			} else {
				var design = _v1.a;
				return A2($terezka$elm_charts$Internal$Svg$toPattern, config.color, design);
			}
		}();
		var patternDefs = _v0.a;
		var fill = _v0.b;
		var view = function (cmds) {
			return A4(
				$terezka$elm_charts$Internal$Svg$withAttrs,
				config.attrs,
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__area-section'),
						$elm$svg$Svg$Attributes$fill(fill),
						$elm$svg$Svg$Attributes$fillOpacity(
						$elm$core$String$fromFloat(config.opacity)),
						$elm$svg$Svg$Attributes$strokeWidth('0'),
						$elm$svg$Svg$Attributes$fillRule('evenodd'),
						$elm$svg$Svg$Attributes$d(
						A2($terezka$elm_charts$Internal$Commands$description, plane, cmds)),
						$terezka$elm_charts$Internal$Svg$withinChartArea(plane)
					]),
				_List_Nil);
		};
		var withUnder = F2(
			function (_v5, _v6) {
				var firstBottom = _v5.a;
				var cmdsBottom = _v5.b;
				var endBottom = _v5.c;
				var firstTop = _v6.a;
				var cmdsTop = _v6.b;
				var endTop = _v6.c;
				return view(
					_Utils_ap(
						_List_fromArray(
							[
								A2($terezka$elm_charts$Internal$Commands$Move, firstBottom.x, firstBottom.y),
								A2($terezka$elm_charts$Internal$Commands$Line, firstTop.x, firstTop.y)
							]),
						_Utils_ap(
							cmdsTop,
							_Utils_ap(
								_List_fromArray(
									[
										A2($terezka$elm_charts$Internal$Commands$Move, firstBottom.x, firstBottom.y)
									]),
								_Utils_ap(
									cmdsBottom,
									_List_fromArray(
										[
											A2($terezka$elm_charts$Internal$Commands$Line, endTop.x, endTop.y)
										]))))));
			});
		var withoutUnder = function (_v4) {
			var first = _v4.a;
			var cmds = _v4.b;
			var end = _v4.c;
			return view(
				_Utils_ap(
					_List_fromArray(
						[
							A2($terezka$elm_charts$Internal$Commands$Move, first.x, 0),
							A2($terezka$elm_charts$Internal$Commands$Line, first.x, first.y)
						]),
					_Utils_ap(
						cmds,
						_List_fromArray(
							[
								A2($terezka$elm_charts$Internal$Commands$Line, end.x, 0)
							]))));
		};
		if (config.opacity <= 0) {
			return $elm$svg$Svg$text('');
		} else {
			var _v2 = config.method;
			if (_v2.$ === 'Nothing') {
				return $elm$svg$Svg$text('');
			} else {
				var method = _v2.a;
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__area-sections')
						]),
					function () {
						if (toY2M.$ === 'Nothing') {
							return A2(
								$elm$core$List$cons,
								patternDefs,
								A2(
									$elm$core$List$map,
									withoutUnder,
									A4($terezka$elm_charts$Internal$Svg$toCommands, method, toX, toY, data)));
						} else {
							var toY2 = toY2M.a;
							return A2(
								$elm$core$List$cons,
								patternDefs,
								A3(
									$elm$core$List$map2,
									withUnder,
									A4($terezka$elm_charts$Internal$Svg$toCommands, method, toX, toY2, data),
									A4($terezka$elm_charts$Internal$Svg$toCommands, method, toX, toY, data)));
						}
					}());
			}
		}
	});
var $terezka$elm_charts$Internal$Svg$interpolation = F5(
	function (plane, toX, toY, config, data) {
		var view = function (_v1) {
			var first = _v1.a;
			var cmds = _v1.b;
			return A4(
				$terezka$elm_charts$Internal$Svg$withAttrs,
				config.attrs,
				$elm$svg$Svg$path,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__interpolation-section'),
						$elm$svg$Svg$Attributes$fill('transparent'),
						$elm$svg$Svg$Attributes$stroke(config.color),
						$elm$svg$Svg$Attributes$strokeDasharray(
						A2(
							$elm$core$String$join,
							' ',
							A2($elm$core$List$map, $elm$core$String$fromFloat, config.dashed))),
						$elm$svg$Svg$Attributes$strokeWidth(
						$elm$core$String$fromFloat(config.width)),
						$elm$svg$Svg$Attributes$d(
						A2(
							$terezka$elm_charts$Internal$Commands$description,
							plane,
							A2(
								$elm$core$List$cons,
								A2($terezka$elm_charts$Internal$Commands$Move, first.x, first.y),
								cmds))),
						$terezka$elm_charts$Internal$Svg$withinChartArea(plane)
					]),
				_List_Nil);
		};
		var _v0 = config.method;
		if (_v0.$ === 'Nothing') {
			return $elm$svg$Svg$text('');
		} else {
			var method = _v0.a;
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__interpolation-sections')
					]),
				A2(
					$elm$core$List$map,
					view,
					A4($terezka$elm_charts$Internal$Svg$toCommands, method, toX, toY, data)));
		}
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm$html$Html$table = _VirtualDom_node('table');
var $terezka$elm_charts$Internal$Produce$toDefaultName = F2(
	function (index, name) {
		return A2(
			$elm$core$Maybe$withDefault,
			'Property #' + $elm$core$String$fromInt(index + 1),
			name);
	});
var $terezka$elm_charts$Internal$Svg$toRadius = F2(
	function (size_, shape) {
		var area_ = (2 * $elm$core$Basics$pi) * size_;
		switch (shape.$) {
			case 'Circle':
				return $elm$core$Basics$sqrt(area_ / $elm$core$Basics$pi);
			case 'Triangle':
				var side = $elm$core$Basics$sqrt(
					(area_ * 4) / $elm$core$Basics$sqrt(3));
				return $elm$core$Basics$sqrt(3) * side;
			case 'Square':
				return $elm$core$Basics$sqrt(area_) / 2;
			case 'Diamond':
				return $elm$core$Basics$sqrt(area_) / 2;
			case 'Cross':
				return $elm$core$Basics$sqrt(area_ / 4);
			default:
				return $elm$core$Basics$sqrt(area_ / 4);
		}
	});
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $terezka$elm_charts$Internal$Produce$tooltipRow = F3(
	function (color, title, text) {
		return A2(
			$elm$html$Html$tr,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$td,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', color),
							A2($elm$html$Html$Attributes$style, 'padding', '0'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '3px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(title + ':')
						])),
					A2(
					$elm$html$Html$td,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
							A2($elm$html$Html$Attributes$style, 'padding', '0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(text)
						]))
				]));
	});
var $terezka$elm_charts$Internal$Produce$toDotSeries = F4(
	function (elIndex, toX, properties, data) {
		var toInterConfig = function (attrs) {
			return A2($terezka$elm_charts$Internal$Helpers$apply, attrs, $terezka$elm_charts$Internal$Svg$defaultInterpolation);
		};
		var toDotConfig = function (attrs) {
			return A2($terezka$elm_charts$Internal$Helpers$apply, attrs, $terezka$elm_charts$Internal$Svg$defaultDot);
		};
		var toDotItem = F7(
			function (lineIndex, stackIndex, colorIndex, prop, interConfig, dataIndex, datum_) {
				var y_ = A2(
					$elm$core$Maybe$withDefault,
					0,
					prop.visual(datum_));
				var x_ = toX(datum_);
				var defaultAttrs = _List_fromArray(
					[
						$terezka$elm_charts$Chart$Attributes$color(interConfig.color),
						$terezka$elm_charts$Chart$Attributes$border(interConfig.color),
						_Utils_eq(interConfig.method, $elm$core$Maybe$Nothing) ? $terezka$elm_charts$Chart$Attributes$circle : $elm$core$Basics$identity
					]);
				var dotAttrs = _Utils_ap(
					defaultAttrs,
					_Utils_ap(
						prop.attrs,
						A5(prop.extra, lineIndex, stackIndex, dataIndex, prop.meta, datum_)));
				var config = toDotConfig(dotAttrs);
				return $terezka$elm_charts$Internal$Item$Rendered(
					{
						config: {
							product: config,
							toAny: $terezka$elm_charts$Internal$Item$Dot,
							tooltipInfo: {
								border: config.border,
								borderWidth: config.borderWidth,
								color: function () {
									var _v6 = config.color;
									if (_v6 === 'white') {
										return interConfig.color;
									} else {
										return config.color;
									}
								}(),
								data: dataIndex,
								elIndex: elIndex,
								formatted: prop.format(datum_),
								index: colorIndex,
								name: prop.meta,
								property: lineIndex,
								stack: stackIndex
							},
							values: {
								datum: datum_,
								isReal: function () {
									var _v7 = prop.value(datum_);
									if (_v7.$ === 'Just') {
										return true;
									} else {
										return false;
									}
								}(),
								x1: x_,
								x2: x_,
								y: y_
							}
						},
						toHtml: function (c) {
							return _List_fromArray(
								[
									A3(
									$terezka$elm_charts$Internal$Produce$tooltipRow,
									c.tooltipInfo.color,
									A2($terezka$elm_charts$Internal$Produce$toDefaultName, colorIndex, c.tooltipInfo.name),
									prop.format(datum_))
								]);
						},
						toLimits: function (_v8) {
							return {x1: x_, x2: x_, y1: y_, y2: y_};
						},
						toPosition: F2(
							function (plane, _v9) {
								var radius = A2(
									$elm$core$Maybe$withDefault,
									0,
									A2(
										$elm$core$Maybe$map,
										$terezka$elm_charts$Internal$Svg$toRadius(config.size),
										config.shape));
								var radiusX_ = A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianX, plane, radius);
								var radiusY_ = A2($terezka$elm_charts$Internal$Coordinates$scaleCartesianY, plane, radius);
								return {x1: x_ - radiusX_, x2: x_ + radiusX_, y1: y_ - radiusY_, y2: y_ + radiusY_};
							}),
						toSvg: F3(
							function (plane, _v10, _v11) {
								var _v12 = prop.value(datum_);
								if (_v12.$ === 'Nothing') {
									return $elm$svg$Svg$text('');
								} else {
									return A5(
										$terezka$elm_charts$Internal$Svg$dot,
										plane,
										function ($) {
											return $.x;
										},
										function ($) {
											return $.y;
										},
										config,
										{x: x_, y: y_});
								}
							})
					});
			});
		var toSeriesItem = F5(
			function (lineIndex, stacks, stackIndex, prop, colorIndex) {
				var defaultOpacity = ($elm$core$List$length(stacks) > 1) ? 0.4 : 0;
				var interAttr = _Utils_ap(
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(
							$terezka$elm_charts$Internal$Helpers$toDefaultColor(colorIndex)),
							$terezka$elm_charts$Chart$Attributes$opacity(defaultOpacity)
						]),
					prop.inter);
				var interConfig = toInterConfig(interAttr);
				var dotItems = A2(
					$elm$core$List$indexedMap,
					A5(toDotItem, lineIndex, stackIndex, colorIndex, prop, interConfig),
					data);
				if (!dotItems.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var first = dotItems.a;
					var rest = dotItems.b;
					return $elm$core$Maybe$Just(
						$terezka$elm_charts$Internal$Item$Rendered(
							{
								config: {
									items: _Utils_Tuple2(first, rest)
								},
								toHtml: function (c) {
									return _List_fromArray(
										[
											A2(
											$elm$html$Html$table,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'margin', '0')
												]),
											A2(
												$elm$core$List$concatMap,
												$terezka$elm_charts$Internal$Item$toHtml,
												function (_v1) {
													var x = _v1.a;
													var xs = _v1.b;
													return A2($elm$core$List$cons, x, xs);
												}(c.items)))
										]);
								},
								toLimits: function (c) {
									return A2(
										$terezka$elm_charts$Internal$Coordinates$foldPosition,
										$terezka$elm_charts$Internal$Item$getLimits,
										function (_v2) {
											var x = _v2.a;
											var xs = _v2.b;
											return A2($elm$core$List$cons, x, xs);
										}(c.items));
								},
								toPosition: F2(
									function (plane, c) {
										return A2(
											$terezka$elm_charts$Internal$Coordinates$foldPosition,
											$terezka$elm_charts$Internal$Item$getPosition(plane),
											function (_v3) {
												var x = _v3.a;
												var xs = _v3.b;
												return A2($elm$core$List$cons, x, xs);
											}(c.items));
									}),
								toSvg: F3(
									function (plane, _v4, _v5) {
										var toBottom = function (datum_) {
											return A3(
												$elm$core$Maybe$map2,
												F2(
													function (real, visual) {
														return visual - real;
													}),
												prop.value(datum_),
												prop.visual(datum_));
										};
										return A2(
											$elm$svg$Svg$g,
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$class('elm-charts__series')
												]),
											_List_fromArray(
												[
													A6(
													$terezka$elm_charts$Internal$Svg$area,
													plane,
													toX,
													$elm$core$Maybe$Just(toBottom),
													prop.visual,
													interConfig,
													data),
													A5($terezka$elm_charts$Internal$Svg$interpolation, plane, toX, prop.visual, interConfig, data),
													A2(
													$elm$svg$Svg$g,
													_List_fromArray(
														[
															$elm$svg$Svg$Attributes$class('elm-charts__dots')
														]),
													A2(
														$elm$core$List$map,
														$terezka$elm_charts$Internal$Item$toSvg(plane),
														dotItems))
												]));
									})
							}));
				}
			});
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (propIndex, f) {
						return f(elIndex + propIndex);
					}),
				$elm$core$List$concat(
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (lineIndex, stacks) {
								return A2(
									$elm$core$List$indexedMap,
									A2(toSeriesItem, lineIndex, stacks),
									stacks);
							}),
						A2($elm$core$List$map, $terezka$elm_charts$Internal$Property$toConfigs, properties)))));
	});
var $terezka$elm_charts$Chart$seriesMap = F4(
	function (mapData, toX, properties, data) {
		return $terezka$elm_charts$Chart$Indexed(
			function (index) {
				var legends_ = A2($terezka$elm_charts$Internal$Legend$toDotLegends, index, properties);
				var items = A4($terezka$elm_charts$Internal$Produce$toDotSeries, index, toX, properties, data);
				var toLimits = A2($elm$core$List$map, $terezka$elm_charts$Internal$Item$getLimits, items);
				var generalized = A2(
					$elm$core$List$map,
					$terezka$elm_charts$Internal$Item$map(mapData),
					A2($elm$core$List$concatMap, $terezka$elm_charts$Internal$Many$getGenerals, items));
				return _Utils_Tuple2(
					A4(
						$terezka$elm_charts$Chart$SeriesElement,
						toLimits,
						generalized,
						legends_,
						function (p) {
							return A2(
								$elm$svg$Svg$map,
								$elm$core$Basics$never,
								A2(
									$elm$svg$Svg$g,
									_List_fromArray(
										[
											$elm$svg$Svg$Attributes$class('elm-charts__dot-series')
										]),
									A2(
										$elm$core$List$map,
										$terezka$elm_charts$Internal$Item$toSvg(p),
										items)));
						}),
					index + $elm$core$List$length(
						A2($elm$core$List$concatMap, $terezka$elm_charts$Internal$Property$toConfigs, properties)));
			});
	});
var $terezka$elm_charts$Chart$series = F3(
	function (toX, properties, data) {
		return A4($terezka$elm_charts$Chart$seriesMap, $elm$core$Basics$identity, toX, properties, data);
	});
var $terezka$elm_charts$Internal$Svg$Times = function (a) {
	return {$: 'Times', a: a};
};
var $terezka$elm_charts$Chart$Attributes$times = F2(
	function (zone, config) {
		return _Utils_update(
			config,
			{
				generate: $terezka$elm_charts$Internal$Svg$Times(zone)
			});
	});
var $terezka$elm_charts$Chart$HtmlElement = function (a) {
	return {$: 'HtmlElement', a: a};
};
var $terezka$elm_charts$Chart$html = function (func) {
	return $terezka$elm_charts$Chart$HtmlElement(
		F2(
			function (p, _v0) {
				return func(p);
			}));
};
var $terezka$elm_charts$Internal$Svg$defaultTooltip = {arrow: true, background: 'white', border: '#D8D8D8', direction: $elm$core$Maybe$Nothing, focal: $elm$core$Maybe$Nothing, height: 0, offset: 8, width: 0};
var $terezka$elm_charts$Internal$Svg$Bottom = {$: 'Bottom'};
var $terezka$elm_charts$Internal$Svg$Left = {$: 'Left'};
var $terezka$elm_charts$Internal$Svg$Right = {$: 'Right'};
var $terezka$elm_charts$Internal$Svg$Top = {$: 'Top'};
var $terezka$elm_charts$Internal$Coordinates$bottom = function (pos) {
	return {x: pos.x1 + ((pos.x2 - pos.x1) / 2), y: pos.y1};
};
var $terezka$elm_charts$Internal$Coordinates$left = function (pos) {
	return {x: pos.x1, y: pos.y1 + ((pos.y2 - pos.y1) / 2)};
};
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $terezka$elm_charts$Internal$Svg$positionHtml = F7(
	function (plane, x, y, xOff, yOff, attrs, content) {
		var yPercentage = ((A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, y) - yOff) * 100) / plane.y.length;
		var xPercentage = ((A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, x) + xOff) * 100) / plane.x.length;
		var posititonStyles = _List_fromArray(
			[
				A2(
				$elm$html$Html$Attributes$style,
				'left',
				$elm$core$String$fromFloat(xPercentage) + '%'),
				A2(
				$elm$html$Html$Attributes$style,
				'top',
				$elm$core$String$fromFloat(yPercentage) + '%'),
				A2($elm$html$Html$Attributes$style, 'margin-right', '-400px'),
				A2($elm$html$Html$Attributes$style, 'position', 'absolute')
			]);
		return A2(
			$elm$html$Html$div,
			_Utils_ap(posititonStyles, attrs),
			content);
	});
var $terezka$elm_charts$Internal$Coordinates$right = function (pos) {
	return {x: pos.x2, y: pos.y1 + ((pos.y2 - pos.y1) / 2)};
};
var $terezka$elm_charts$Internal$Svg$tooltipPointerStyle = F4(
	function (direction, className, background, borderColor) {
		var config = function () {
			switch (direction.$) {
				case 'Top':
					return {a: 'right', b: 'top', c: 'left'};
				case 'Bottom':
					return {a: 'right', b: 'bottom', c: 'left'};
				case 'Left':
					return {a: 'bottom', b: 'left', c: 'top'};
				case 'Right':
					return {a: 'bottom', b: 'right', c: 'top'};
				case 'LeftOrRight':
					return {a: 'bottom', b: 'left', c: 'top'};
				default:
					return {a: 'right', b: 'top', c: 'left'};
			}
		}();
		return '\n  .' + (className + (':before, .' + (className + (':after {\n    content: "";\n    position: absolute;\n    border-' + (config.c + (': 5px solid transparent;\n    border-' + (config.a + (': 5px solid transparent;\n    ' + (config.b + (': 100%;\n    ' + (config.c + (': 50%;\n    margin-' + (config.c + (': -5px;\n  }\n\n  .' + (className + (':after {\n    border-' + (config.b + (': 5px solid ' + (background + (';\n    margin-' + (config.b + (': -1px;\n    z-index: 1;\n    height: 0px;\n  }\n\n  .' + (className + (':before {\n    border-' + (config.b + (': 5px solid ' + (borderColor + ';\n    height: 0px;\n  }\n  ')))))))))))))))))))))))))));
	});
var $terezka$elm_charts$Internal$Coordinates$top = function (pos) {
	return {x: pos.x1 + ((pos.x2 - pos.x1) / 2), y: pos.y2};
};
var $terezka$elm_charts$Internal$Svg$tooltip = F5(
	function (plane, pos, config, htmlAttrs, content) {
		var distanceTop = A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, pos.y2);
		var distanceRight = plane.x.length - A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, pos.x1);
		var distanceLeft = A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, pos.x2);
		var distanceBottom = plane.y.length - A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, pos.y1);
		var direction = function () {
			var _v5 = config.direction;
			if (_v5.$ === 'Just') {
				switch (_v5.a.$) {
					case 'LeftOrRight':
						var _v6 = _v5.a;
						return (config.width > 0) ? ((_Utils_cmp(distanceLeft, config.width + config.offset) > 0) ? $terezka$elm_charts$Internal$Svg$Left : $terezka$elm_charts$Internal$Svg$Right) : ((_Utils_cmp(distanceLeft, distanceRight) > 0) ? $terezka$elm_charts$Internal$Svg$Left : $terezka$elm_charts$Internal$Svg$Right);
					case 'TopOrBottom':
						var _v7 = _v5.a;
						return (config.height > 0) ? ((_Utils_cmp(distanceTop, config.height + config.offset) > 0) ? $terezka$elm_charts$Internal$Svg$Top : $terezka$elm_charts$Internal$Svg$Bottom) : ((_Utils_cmp(distanceTop, distanceBottom) > 0) ? $terezka$elm_charts$Internal$Svg$Top : $terezka$elm_charts$Internal$Svg$Bottom);
					default:
						var dir = _v5.a;
						return dir;
				}
			} else {
				var isLargest = function (a) {
					return $elm$core$List$all(
						function (b) {
							return _Utils_cmp(a, b) > -1;
						});
				};
				return A2(
					isLargest,
					distanceTop,
					_List_fromArray(
						[distanceBottom, distanceLeft, distanceRight])) ? $terezka$elm_charts$Internal$Svg$Top : (A2(
					isLargest,
					distanceBottom,
					_List_fromArray(
						[distanceTop, distanceLeft, distanceRight])) ? $terezka$elm_charts$Internal$Svg$Bottom : (A2(
					isLargest,
					distanceLeft,
					_List_fromArray(
						[distanceTop, distanceBottom, distanceRight])) ? $terezka$elm_charts$Internal$Svg$Left : $terezka$elm_charts$Internal$Svg$Right));
			}
		}();
		var focalPoint = function () {
			var _v2 = config.focal;
			if (_v2.$ === 'Just') {
				var focal = _v2.a;
				switch (direction.$) {
					case 'Top':
						return $terezka$elm_charts$Internal$Coordinates$top(
							focal(pos));
					case 'Bottom':
						return $terezka$elm_charts$Internal$Coordinates$bottom(
							focal(pos));
					case 'Left':
						return $terezka$elm_charts$Internal$Coordinates$left(
							focal(pos));
					case 'Right':
						return $terezka$elm_charts$Internal$Coordinates$right(
							focal(pos));
					case 'LeftOrRight':
						return $terezka$elm_charts$Internal$Coordinates$left(
							focal(pos));
					default:
						return $terezka$elm_charts$Internal$Coordinates$right(
							focal(pos));
				}
			} else {
				switch (direction.$) {
					case 'Top':
						return $terezka$elm_charts$Internal$Coordinates$top(pos);
					case 'Bottom':
						return $terezka$elm_charts$Internal$Coordinates$bottom(pos);
					case 'Left':
						return $terezka$elm_charts$Internal$Coordinates$left(pos);
					case 'Right':
						return $terezka$elm_charts$Internal$Coordinates$right(pos);
					case 'LeftOrRight':
						return $terezka$elm_charts$Internal$Coordinates$left(pos);
					default:
						return $terezka$elm_charts$Internal$Coordinates$right(pos);
				}
			}
		}();
		var arrowWidth = config.arrow ? 4 : 0;
		var _v0 = function () {
			switch (direction.$) {
				case 'Top':
					return {className: 'elm-charts__tooltip-top', transformation: 'translate(-50%, -100%)', xOff: 0, yOff: config.offset + arrowWidth};
				case 'Bottom':
					return {className: 'elm-charts__tooltip-bottom', transformation: 'translate(-50%, 0%)', xOff: 0, yOff: (-config.offset) - arrowWidth};
				case 'Left':
					return {className: 'elm-charts__tooltip-left', transformation: 'translate(-100%, -50%)', xOff: (-config.offset) - arrowWidth, yOff: 0};
				case 'Right':
					return {className: 'elm-charts__tooltip-right', transformation: 'translate(0, -50%)', xOff: config.offset + arrowWidth, yOff: 0};
				case 'LeftOrRight':
					return {className: 'elm-charts__tooltip-leftOrRight', transformation: 'translate(0, -50%)', xOff: (-config.offset) - arrowWidth, yOff: 0};
				default:
					return {className: 'elm-charts__tooltip-topOrBottom', transformation: 'translate(-50%, -100%)', xOff: 0, yOff: config.offset + arrowWidth};
			}
		}();
		var xOff = _v0.xOff;
		var yOff = _v0.yOff;
		var transformation = _v0.transformation;
		var className = _v0.className;
		var children = config.arrow ? A2(
			$elm$core$List$cons,
			A3(
				$elm$html$Html$node,
				'style',
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						A4($terezka$elm_charts$Internal$Svg$tooltipPointerStyle, direction, className, config.background, config.border))
					])),
			content) : content;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(className),
					A2($elm$html$Html$Attributes$style, 'transform', transformation),
					A2($elm$html$Html$Attributes$style, 'padding', '5px 8px'),
					A2($elm$html$Html$Attributes$style, 'background', config.background),
					A2($elm$html$Html$Attributes$style, 'border', '1px solid ' + config.border),
					A2($elm$html$Html$Attributes$style, 'border-radius', '3px'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none')
				]),
			htmlAttrs);
		return A2(
			$elm$html$Html$map,
			$elm$core$Basics$never,
			A7($terezka$elm_charts$Internal$Svg$positionHtml, plane, focalPoint.x, focalPoint.y, xOff, yOff, attributes, children));
	});
var $terezka$elm_charts$Chart$Svg$tooltip = F3(
	function (plane, pos, edits) {
		return A3(
			$terezka$elm_charts$Internal$Svg$tooltip,
			plane,
			pos,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultTooltip));
	});
var $terezka$elm_charts$Chart$tooltip = F4(
	function (i, edits, attrs_, content) {
		return $terezka$elm_charts$Chart$html(
			function (p) {
				var pos = $terezka$elm_charts$Internal$Item$getLimits(i);
				var content_ = _Utils_eq(content, _List_Nil) ? $terezka$elm_charts$Internal$Item$toHtml(i) : content;
				return A3($terezka$elm_charts$Internal$Svg$isWithinPlane, p, pos.x1, pos.y2) ? A5(
					$terezka$elm_charts$Chart$Svg$tooltip,
					p,
					A2($terezka$elm_charts$Internal$Item$getPosition, p, i),
					edits,
					attrs_,
					content_) : $elm$html$Html$text('');
			});
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $terezka$elm_charts$Chart$Attributes$withGrid = function (config) {
	return _Utils_update(
		config,
		{grid: true});
};
var $terezka$elm_charts$Chart$withPlane = function (func) {
	return $terezka$elm_charts$Chart$SubElements(
		F2(
			function (p, is) {
				return func(p);
			}));
};
var $terezka$elm_charts$Internal$Svg$Floats = {$: 'Floats'};
var $terezka$elm_charts$Chart$LabelsElement = F3(
	function (a, b, c) {
		return {$: 'LabelsElement', a: a, b: b, c: c};
	});
var $terezka$elm_charts$Internal$Svg$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $terezka$intervals$Intervals$Around = function (a) {
	return {$: 'Around', a: a};
};
var $terezka$intervals$Intervals$around = $terezka$intervals$Intervals$Around;
var $terezka$intervals$Intervals$ceilingTo = F2(
	function (prec, number) {
		return prec * $elm$core$Basics$ceiling(number / prec);
	});
var $terezka$intervals$Intervals$getBeginning = F2(
	function (min, interval) {
		var multiple = min / interval;
		return _Utils_eq(
			multiple,
			$elm$core$Basics$round(multiple)) ? min : A2($terezka$intervals$Intervals$ceilingTo, interval, min);
	});
var $myrho$elm_round$Round$addSign = F2(
	function (signed, str) {
		var isNotZero = A2(
			$elm$core$List$any,
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('0'))) && (!_Utils_eq(
					c,
					_Utils_chr('.')));
			},
			$elm$core$String$toList(str));
		return _Utils_ap(
			(signed && isNotZero) ? '-' : '',
			str);
	});
var $elm$core$Char$fromCode = _Char_fromCode;
var $myrho$elm_round$Round$increaseNum = function (_v0) {
	var head = _v0.a;
	var tail = _v0.b;
	if (_Utils_eq(
		head,
		_Utils_chr('9'))) {
		var _v1 = $elm$core$String$uncons(tail);
		if (_v1.$ === 'Nothing') {
			return '01';
		} else {
			var headtail = _v1.a;
			return A2(
				$elm$core$String$cons,
				_Utils_chr('0'),
				$myrho$elm_round$Round$increaseNum(headtail));
		}
	} else {
		var c = $elm$core$Char$toCode(head);
		return ((c >= 48) && (c < 57)) ? A2(
			$elm$core$String$cons,
			$elm$core$Char$fromCode(c + 1),
			tail) : '0';
	}
};
var $elm$core$Basics$isInfinite = _Basics_isInfinite;
var $elm$core$String$reverse = _String_reverse;
var $elm$core$String$slice = _String_slice;
var $myrho$elm_round$Round$splitComma = function (str) {
	var _v0 = A2($elm$core$String$split, '.', str);
	if (_v0.b) {
		if (_v0.b.b) {
			var before = _v0.a;
			var _v1 = _v0.b;
			var after = _v1.a;
			return _Utils_Tuple2(before, after);
		} else {
			var before = _v0.a;
			return _Utils_Tuple2(before, '0');
		}
	} else {
		return _Utils_Tuple2('0', '0');
	}
};
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$startsWith = _String_startsWith;
var $myrho$elm_round$Round$toDecimal = function (fl) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(
			$elm$core$Basics$abs(fl)));
	if (_v0.b) {
		if (_v0.b.b) {
			var num = _v0.a;
			var _v1 = _v0.b;
			var exp = _v1.a;
			var e = A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(
					A2($elm$core$String$startsWith, '+', exp) ? A2($elm$core$String$dropLeft, 1, exp) : exp));
			var _v2 = $myrho$elm_round$Round$splitComma(num);
			var before = _v2.a;
			var after = _v2.b;
			var total = _Utils_ap(before, after);
			var zeroed = (e < 0) ? A2(
				$elm$core$Maybe$withDefault,
				'0',
				A2(
					$elm$core$Maybe$map,
					function (_v3) {
						var a = _v3.a;
						var b = _v3.b;
						return a + ('.' + b);
					},
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$mapFirst($elm$core$String$fromChar),
						$elm$core$String$uncons(
							_Utils_ap(
								A2(
									$elm$core$String$repeat,
									$elm$core$Basics$abs(e),
									'0'),
								total))))) : A3(
				$elm$core$String$padRight,
				e + 1,
				_Utils_chr('0'),
				total);
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				zeroed);
		} else {
			var num = _v0.a;
			return _Utils_ap(
				(fl < 0) ? '-' : '',
				num);
		}
	} else {
		return '';
	}
};
var $myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if ($elm$core$Basics$isInfinite(fl) || $elm$core$Basics$isNaN(fl)) {
			return $elm$core$String$fromFloat(fl);
		} else {
			var signed = fl < 0;
			var _v0 = $myrho$elm_round$Round$splitComma(
				$myrho$elm_round$Round$toDecimal(
					$elm$core$Basics$abs(fl)));
			var before = _v0.a;
			var after = _v0.b;
			var r = $elm$core$String$length(before) + s;
			var normalized = _Utils_ap(
				A2($elm$core$String$repeat, (-r) + 1, '0'),
				A3(
					$elm$core$String$padRight,
					r,
					_Utils_chr('0'),
					_Utils_ap(before, after)));
			var totalLen = $elm$core$String$length(normalized);
			var roundDigitIndex = A2($elm$core$Basics$max, 1, r);
			var increase = A2(
				functor,
				signed,
				A3($elm$core$String$slice, roundDigitIndex, totalLen, normalized));
			var remains = A3($elm$core$String$slice, 0, roundDigitIndex, normalized);
			var num = increase ? $elm$core$String$reverse(
				A2(
					$elm$core$Maybe$withDefault,
					'1',
					A2(
						$elm$core$Maybe$map,
						$myrho$elm_round$Round$increaseNum,
						$elm$core$String$uncons(
							$elm$core$String$reverse(remains))))) : remains;
			var numLen = $elm$core$String$length(num);
			var numZeroed = (num === '0') ? num : ((s <= 0) ? _Utils_ap(
				num,
				A2(
					$elm$core$String$repeat,
					$elm$core$Basics$abs(s),
					'0')) : ((_Utils_cmp(
				s,
				$elm$core$String$length(after)) < 0) ? (A3($elm$core$String$slice, 0, numLen - s, num) + ('.' + A3($elm$core$String$slice, numLen - s, numLen, num))) : _Utils_ap(
				before + '.',
				A3(
					$elm$core$String$padRight,
					s,
					_Utils_chr('0'),
					after))));
			return A2($myrho$elm_round$Round$addSign, signed, numZeroed);
		}
	});
var $myrho$elm_round$Round$round = $myrho$elm_round$Round$roundFun(
	F2(
		function (signed, str) {
			var _v0 = $elm$core$String$uncons(str);
			if (_v0.$ === 'Nothing') {
				return false;
			} else {
				if ('5' === _v0.a.a.valueOf()) {
					if (_v0.a.b === '') {
						var _v1 = _v0.a;
						return !signed;
					} else {
						var _v2 = _v0.a;
						return true;
					}
				} else {
					var _v3 = _v0.a;
					var _int = _v3.a;
					return function (i) {
						return ((i > 53) && signed) || ((i >= 53) && (!signed));
					}(
						$elm$core$Char$toCode(_int));
				}
			}
		}));
var $terezka$intervals$Intervals$correctFloat = function (prec) {
	return A2(
		$elm$core$Basics$composeR,
		$myrho$elm_round$Round$round(prec),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$String$toFloat,
			$elm$core$Maybe$withDefault(0)));
};
var $terezka$intervals$Intervals$getMultiples = F3(
	function (magnitude, allowDecimals, hasTickAmount) {
		var defaults = hasTickAmount ? _List_fromArray(
			[1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) : _List_fromArray(
			[1, 2, 2.5, 5, 10]);
		return allowDecimals ? defaults : ((magnitude === 1) ? A2(
			$elm$core$List$filter,
			function (n) {
				return _Utils_eq(
					$elm$core$Basics$round(n),
					n);
			},
			defaults) : ((magnitude <= 0.1) ? _List_fromArray(
			[1 / magnitude]) : defaults));
	});
var $terezka$intervals$Intervals$getPrecision = function (number) {
	var _v0 = A2(
		$elm$core$String$split,
		'e',
		$elm$core$String$fromFloat(number));
	if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
		var before = _v0.a;
		var _v1 = _v0.b;
		var after = _v1.a;
		return $elm$core$Basics$abs(
			A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(after)));
	} else {
		var _v2 = A2(
			$elm$core$String$split,
			'.',
			$elm$core$String$fromFloat(number));
		if ((_v2.b && _v2.b.b) && (!_v2.b.b.b)) {
			var before = _v2.a;
			var _v3 = _v2.b;
			var after = _v3.a;
			return $elm$core$String$length(after);
		} else {
			return 0;
		}
	}
};
var $elm$core$Basics$e = _Basics_e;
var $terezka$intervals$Intervals$toMagnitude = function (num) {
	return A2(
		$elm$core$Basics$pow,
		10,
		$elm$core$Basics$floor(
			A2($elm$core$Basics$logBase, $elm$core$Basics$e, num) / A2($elm$core$Basics$logBase, $elm$core$Basics$e, 10)));
};
var $terezka$intervals$Intervals$getInterval = F3(
	function (intervalRaw, allowDecimals, hasTickAmount) {
		var magnitude = $terezka$intervals$Intervals$toMagnitude(intervalRaw);
		var multiples = A3($terezka$intervals$Intervals$getMultiples, magnitude, allowDecimals, hasTickAmount);
		var normalized = intervalRaw / magnitude;
		var findMultipleExact = function (multiples_) {
			findMultipleExact:
			while (true) {
				if (multiples_.b) {
					var m1 = multiples_.a;
					var rest = multiples_.b;
					if (_Utils_cmp(m1 * magnitude, intervalRaw) > -1) {
						return m1;
					} else {
						var $temp$multiples_ = rest;
						multiples_ = $temp$multiples_;
						continue findMultipleExact;
					}
				} else {
					return 1;
				}
			}
		};
		var findMultiple = function (multiples_) {
			findMultiple:
			while (true) {
				if (multiples_.b) {
					if (multiples_.b.b) {
						var m1 = multiples_.a;
						var _v2 = multiples_.b;
						var m2 = _v2.a;
						var rest = _v2.b;
						if (_Utils_cmp(normalized, (m1 + m2) / 2) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = A2($elm$core$List$cons, m2, rest);
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					} else {
						var m1 = multiples_.a;
						var rest = multiples_.b;
						if (_Utils_cmp(normalized, m1) < 1) {
							return m1;
						} else {
							var $temp$multiples_ = rest;
							multiples_ = $temp$multiples_;
							continue findMultiple;
						}
					}
				} else {
					return 1;
				}
			}
		};
		var multiple = hasTickAmount ? findMultipleExact(multiples) : findMultiple(multiples);
		var precision = $terezka$intervals$Intervals$getPrecision(magnitude) + $terezka$intervals$Intervals$getPrecision(multiple);
		return A2($terezka$intervals$Intervals$correctFloat, precision, multiple * magnitude);
	});
var $terezka$intervals$Intervals$positions = F5(
	function (range, beginning, interval, m, acc) {
		positions:
		while (true) {
			var nextPosition = A2(
				$terezka$intervals$Intervals$correctFloat,
				$terezka$intervals$Intervals$getPrecision(interval),
				beginning + (m * interval));
			if (_Utils_cmp(nextPosition, range.max) > 0) {
				return acc;
			} else {
				var $temp$range = range,
					$temp$beginning = beginning,
					$temp$interval = interval,
					$temp$m = m + 1,
					$temp$acc = _Utils_ap(
					acc,
					_List_fromArray(
						[nextPosition]));
				range = $temp$range;
				beginning = $temp$beginning;
				interval = $temp$interval;
				m = $temp$m;
				acc = $temp$acc;
				continue positions;
			}
		}
	});
var $terezka$intervals$Intervals$values = F4(
	function (allowDecimals, exact, amountRough, range) {
		var intervalRough = (range.max - range.min) / amountRough;
		var interval = A3($terezka$intervals$Intervals$getInterval, intervalRough, allowDecimals, exact);
		var intervalSafe = (!interval) ? 1 : interval;
		var beginning = A2($terezka$intervals$Intervals$getBeginning, range.min, intervalSafe);
		var amountRoughSafe = (!amountRough) ? 1 : amountRough;
		return A5($terezka$intervals$Intervals$positions, range, beginning, intervalSafe, 0, _List_Nil);
	});
var $terezka$intervals$Intervals$floats = function (amount) {
	if (amount.$ === 'Exactly') {
		var number = amount.a;
		return A3($terezka$intervals$Intervals$values, true, true, number);
	} else {
		var number = amount.a;
		return A3($terezka$intervals$Intervals$values, true, false, number);
	}
};
var $terezka$elm_charts$Internal$Svg$floats = $terezka$elm_charts$Internal$Svg$Generator(
	F2(
		function (i, b) {
			return A2(
				$terezka$intervals$Intervals$floats,
				$terezka$intervals$Intervals$around(i),
				{max: b.max, min: b.min});
		}));
var $terezka$elm_charts$Chart$Svg$floats = $terezka$elm_charts$Internal$Svg$floats;
var $ryannhg$date_format$DateFormat$Language$Language = F6(
	function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
		return {toAmPm: toAmPm, toMonthAbbreviation: toMonthAbbreviation, toMonthName: toMonthName, toOrdinalSuffix: toOrdinalSuffix, toWeekdayAbbreviation: toWeekdayAbbreviation, toWeekdayName: toWeekdayName};
	});
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
	return (hour > 11) ? 'pm' : 'am';
};
var $ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
	switch (month.$) {
		case 'Jan':
			return 'January';
		case 'Feb':
			return 'February';
		case 'Mar':
			return 'March';
		case 'Apr':
			return 'April';
		case 'May':
			return 'May';
		case 'Jun':
			return 'June';
		case 'Jul':
			return 'July';
		case 'Aug':
			return 'August';
		case 'Sep':
			return 'September';
		case 'Oct':
			return 'October';
		case 'Nov':
			return 'November';
		default:
			return 'December';
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
	var _v0 = A2($elm$core$Basics$modBy, 100, num);
	switch (_v0) {
		case 11:
			return 'th';
		case 12:
			return 'th';
		case 13:
			return 'th';
		default:
			var _v1 = A2($elm$core$Basics$modBy, 10, num);
			switch (_v1) {
				case 1:
					return 'st';
				case 2:
					return 'nd';
				case 3:
					return 'rd';
				default:
					return 'th';
			}
	}
};
var $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
	switch (weekday.$) {
		case 'Mon':
			return 'Monday';
		case 'Tue':
			return 'Tuesday';
		case 'Wed':
			return 'Wednesday';
		case 'Thu':
			return 'Thursday';
		case 'Fri':
			return 'Friday';
		case 'Sat':
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $ryannhg$date_format$DateFormat$Language$english = A6(
	$ryannhg$date_format$DateFormat$Language$Language,
	$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishMonthName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
	A2(
		$elm$core$Basics$composeR,
		$ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName,
		$elm$core$String$left(3)),
	$ryannhg$date_format$DateFormat$Language$toEnglishAmPm,
	$ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
var $ryannhg$date_format$DateFormat$amPm = F3(
	function (language, zone, posix) {
		return language.toAmPm(
			A2($elm$time$Time$toHour, zone, posix));
	});
var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
var $elm$time$Time$Sun = {$: 'Sun'};
var $elm$time$Time$Fri = {$: 'Fri'};
var $elm$time$Time$Mon = {$: 'Mon'};
var $elm$time$Time$Sat = {$: 'Sat'};
var $elm$time$Time$Thu = {$: 'Thu'};
var $elm$time$Time$Tue = {$: 'Tue'};
var $elm$time$Time$Wed = {$: 'Wed'};
var $ryannhg$date_format$DateFormat$days = _List_fromArray(
	[$elm$time$Time$Sun, $elm$time$Time$Mon, $elm$time$Time$Tue, $elm$time$Time$Wed, $elm$time$Time$Thu, $elm$time$Time$Fri, $elm$time$Time$Sat]);
var $elm$time$Time$toWeekday = F2(
	function (zone, time) {
		var _v0 = A2(
			$elm$core$Basics$modBy,
			7,
			A2(
				$elm$time$Time$flooredDiv,
				A2($elm$time$Time$toAdjustedMinutes, zone, time),
				60 * 24));
		switch (_v0) {
			case 0:
				return $elm$time$Time$Thu;
			case 1:
				return $elm$time$Time$Fri;
			case 2:
				return $elm$time$Time$Sat;
			case 3:
				return $elm$time$Time$Sun;
			case 4:
				return $elm$time$Time$Mon;
			case 5:
				return $elm$time$Time$Tue;
			default:
				return $elm$time$Time$Wed;
		}
	});
var $ryannhg$date_format$DateFormat$dayOfWeek = F2(
	function (zone, posix) {
		return function (_v1) {
			var i = _v1.a;
			return i;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				_Utils_Tuple2(0, $elm$time$Time$Sun),
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						function (_v0) {
							var day = _v0.b;
							return _Utils_eq(
								day,
								A2($elm$time$Time$toWeekday, zone, posix));
						},
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (i, day) {
									return _Utils_Tuple2(i, day);
								}),
							$ryannhg$date_format$DateFormat$days)))));
	});
var $ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
	return (!(!A2($elm$core$Basics$modBy, 4, year_))) ? false : ((!(!A2($elm$core$Basics$modBy, 100, year_))) ? true : ((!(!A2($elm$core$Basics$modBy, 400, year_))) ? false : true));
};
var $ryannhg$date_format$DateFormat$daysInMonth = F2(
	function (year_, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $ryannhg$date_format$DateFormat$months = _List_fromArray(
	[$elm$time$Time$Jan, $elm$time$Time$Feb, $elm$time$Time$Mar, $elm$time$Time$Apr, $elm$time$Time$May, $elm$time$Time$Jun, $elm$time$Time$Jul, $elm$time$Time$Aug, $elm$time$Time$Sep, $elm$time$Time$Oct, $elm$time$Time$Nov, $elm$time$Time$Dec]);
var $ryannhg$date_format$DateFormat$monthPair = F2(
	function (zone, posix) {
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, $elm$time$Time$Jan),
			$elm$core$List$head(
				A2(
					$elm$core$List$filter,
					function (_v0) {
						var i = _v0.a;
						var m = _v0.b;
						return _Utils_eq(
							m,
							A2($elm$time$Time$toMonth, zone, posix));
					},
					A2(
						$elm$core$List$indexedMap,
						F2(
							function (a, b) {
								return _Utils_Tuple2(a, b);
							}),
						$ryannhg$date_format$DateFormat$months))));
	});
var $ryannhg$date_format$DateFormat$monthNumber_ = F2(
	function (zone, posix) {
		return 1 + function (_v0) {
			var i = _v0.a;
			var m = _v0.b;
			return i;
		}(
			A2($ryannhg$date_format$DateFormat$monthPair, zone, posix));
	});
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $ryannhg$date_format$DateFormat$dayOfYear = F2(
	function (zone, posix) {
		var monthsBeforeThisOne = A2(
			$elm$core$List$take,
			A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) - 1,
			$ryannhg$date_format$DateFormat$months);
		var daysBeforeThisMonth = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				$ryannhg$date_format$DateFormat$daysInMonth(
					A2($elm$time$Time$toYear, zone, posix)),
				monthsBeforeThisOne));
		return daysBeforeThisMonth + A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix);
	});
var $ryannhg$date_format$DateFormat$quarter = F2(
	function (zone, posix) {
		return (A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix) / 4) | 0;
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $ryannhg$date_format$DateFormat$toFixedLength = F2(
	function (totalChars, num) {
		var numStr = $elm$core$String$fromInt(num);
		var numZerosNeeded = totalChars - $elm$core$String$length(numStr);
		var zeros = A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				function (_v0) {
					return '0';
				},
				A2($elm$core$List$range, 1, numZerosNeeded)));
		return _Utils_ap(zeros, numStr);
	});
var $elm$time$Time$toMillis = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			1000,
			$elm$time$Time$posixToMillis(time));
	});
var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
	return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
};
var $elm$time$Time$toSecond = F2(
	function (_v0, time) {
		return A2(
			$elm$core$Basics$modBy,
			60,
			A2(
				$elm$time$Time$flooredDiv,
				$elm$time$Time$posixToMillis(time),
				1000));
	});
var $elm$core$String$toUpper = _String_toUpper;
var $ryannhg$date_format$DateFormat$millisecondsPerYear = $elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
var $ryannhg$date_format$DateFormat$firstDayOfYear = F2(
	function (zone, time) {
		return $elm$time$Time$millisToPosix(
			$ryannhg$date_format$DateFormat$millisecondsPerYear * A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$weekOfYear = F2(
	function (zone, posix) {
		var firstDay = A2($ryannhg$date_format$DateFormat$firstDayOfYear, zone, posix);
		var firstDayOffset = A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, firstDay);
		var daysSoFar = A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix);
		return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
	});
var $ryannhg$date_format$DateFormat$year = F2(
	function (zone, time) {
		return $elm$core$String$fromInt(
			A2($elm$time$Time$toYear, zone, time));
	});
var $ryannhg$date_format$DateFormat$piece = F4(
	function (language, zone, posix, token) {
		switch (token.$) {
			case 'MonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$monthNumber_, zone, posix));
			case 'MonthNameAbbreviated':
				return language.toMonthAbbreviation(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'MonthNameFull':
				return language.toMonthName(
					A2($elm$time$Time$toMonth, zone, posix));
			case 'QuarterNumber':
				return $elm$core$String$fromInt(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'QuarterSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					1 + A2($ryannhg$date_format$DateFormat$quarter, zone, posix));
			case 'DayOfMonthNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfMonthFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$dayOfMonth, zone, posix));
			case 'DayOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($ryannhg$date_format$DateFormat$dayOfYear, zone, posix));
			case 'DayOfWeekNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$dayOfWeek, zone, posix));
			case 'DayOfWeekNameAbbreviated':
				return language.toWeekdayAbbreviation(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'DayOfWeekNameFull':
				return language.toWeekdayName(
					A2($elm$time$Time$toWeekday, zone, posix));
			case 'WeekOfYearNumber':
				return $elm$core$String$fromInt(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearSuffix':
				return function (num) {
					return _Utils_ap(
						$elm$core$String$fromInt(num),
						language.toOrdinalSuffix(num));
				}(
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'WeekOfYearFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($ryannhg$date_format$DateFormat$weekOfYear, zone, posix));
			case 'YearNumberLastTwo':
				return A2(
					$elm$core$String$right,
					2,
					A2($ryannhg$date_format$DateFormat$year, zone, posix));
			case 'YearNumber':
				return A2($ryannhg$date_format$DateFormat$year, zone, posix);
			case 'AmPmUppercase':
				return $elm$core$String$toUpper(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'AmPmLowercase':
				return $elm$core$String$toLower(
					A3($ryannhg$date_format$DateFormat$amPm, language, zone, posix));
			case 'HourMilitaryNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toHour, zone, posix));
			case 'HourNumber':
				return $elm$core$String$fromInt(
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					$ryannhg$date_format$DateFormat$toNonMilitary(
						A2($elm$time$Time$toHour, zone, posix)));
			case 'HourMilitaryFromOneNumber':
				return $elm$core$String$fromInt(
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'HourMilitaryFromOneFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					1 + A2($elm$time$Time$toHour, zone, posix));
			case 'MinuteNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMinute, zone, posix));
			case 'MinuteFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toMinute, zone, posix));
			case 'SecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toSecond, zone, posix));
			case 'SecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					2,
					A2($elm$time$Time$toSecond, zone, posix));
			case 'MillisecondNumber':
				return $elm$core$String$fromInt(
					A2($elm$time$Time$toMillis, zone, posix));
			case 'MillisecondFixed':
				return A2(
					$ryannhg$date_format$DateFormat$toFixedLength,
					3,
					A2($elm$time$Time$toMillis, zone, posix));
			default:
				var string = token.a;
				return string;
		}
	});
var $ryannhg$date_format$DateFormat$formatWithLanguage = F4(
	function (language, tokens, zone, time) {
		return A2(
			$elm$core$String$join,
			'',
			A2(
				$elm$core$List$map,
				A3($ryannhg$date_format$DateFormat$piece, language, zone, time),
				tokens));
	});
var $ryannhg$date_format$DateFormat$format = $ryannhg$date_format$DateFormat$formatWithLanguage($ryannhg$date_format$DateFormat$Language$english);
var $ryannhg$date_format$DateFormat$HourMilitaryFixed = {$: 'HourMilitaryFixed'};
var $ryannhg$date_format$DateFormat$hourMilitaryFixed = $ryannhg$date_format$DateFormat$HourMilitaryFixed;
var $ryannhg$date_format$DateFormat$MinuteFixed = {$: 'MinuteFixed'};
var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
var $ryannhg$date_format$DateFormat$Text = function (a) {
	return {$: 'Text', a: a};
};
var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
var $terezka$elm_charts$Internal$Svg$formatClock = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[
			$ryannhg$date_format$DateFormat$hourMilitaryFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$minuteFixed
		]));
var $ryannhg$date_format$DateFormat$MillisecondFixed = {$: 'MillisecondFixed'};
var $ryannhg$date_format$DateFormat$millisecondFixed = $ryannhg$date_format$DateFormat$MillisecondFixed;
var $ryannhg$date_format$DateFormat$SecondFixed = {$: 'SecondFixed'};
var $ryannhg$date_format$DateFormat$secondFixed = $ryannhg$date_format$DateFormat$SecondFixed;
var $terezka$elm_charts$Internal$Svg$formatClockMillis = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[
			$ryannhg$date_format$DateFormat$hourMilitaryFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$minuteFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$secondFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$millisecondFixed
		]));
var $terezka$elm_charts$Internal$Svg$formatClockSecond = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[
			$ryannhg$date_format$DateFormat$hourMilitaryFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$minuteFixed,
			$ryannhg$date_format$DateFormat$text(':'),
			$ryannhg$date_format$DateFormat$secondFixed
		]));
var $ryannhg$date_format$DateFormat$DayOfMonthNumber = {$: 'DayOfMonthNumber'};
var $ryannhg$date_format$DateFormat$dayOfMonthNumber = $ryannhg$date_format$DateFormat$DayOfMonthNumber;
var $ryannhg$date_format$DateFormat$MonthNumber = {$: 'MonthNumber'};
var $ryannhg$date_format$DateFormat$monthNumber = $ryannhg$date_format$DateFormat$MonthNumber;
var $terezka$elm_charts$Internal$Svg$formatDate = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[
			$ryannhg$date_format$DateFormat$monthNumber,
			$ryannhg$date_format$DateFormat$text('/'),
			$ryannhg$date_format$DateFormat$dayOfMonthNumber
		]));
var $ryannhg$date_format$DateFormat$MonthNameAbbreviated = {$: 'MonthNameAbbreviated'};
var $ryannhg$date_format$DateFormat$monthNameAbbreviated = $ryannhg$date_format$DateFormat$MonthNameAbbreviated;
var $terezka$elm_charts$Internal$Svg$formatMonth = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[$ryannhg$date_format$DateFormat$monthNameAbbreviated]));
var $ryannhg$date_format$DateFormat$DayOfWeekNameFull = {$: 'DayOfWeekNameFull'};
var $ryannhg$date_format$DateFormat$dayOfWeekNameFull = $ryannhg$date_format$DateFormat$DayOfWeekNameFull;
var $terezka$elm_charts$Internal$Svg$formatWeekday = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[$ryannhg$date_format$DateFormat$dayOfWeekNameFull]));
var $ryannhg$date_format$DateFormat$YearNumber = {$: 'YearNumber'};
var $ryannhg$date_format$DateFormat$yearNumber = $ryannhg$date_format$DateFormat$YearNumber;
var $terezka$elm_charts$Internal$Svg$formatYear = $ryannhg$date_format$DateFormat$format(
	_List_fromArray(
		[$ryannhg$date_format$DateFormat$yearNumber]));
var $terezka$elm_charts$Internal$Svg$formatTime = F2(
	function (zone, time) {
		var _v0 = A2($elm$core$Maybe$withDefault, time.unit, time.change);
		switch (_v0.$) {
			case 'Millisecond':
				return A2($terezka$elm_charts$Internal$Svg$formatClockMillis, zone, time.timestamp);
			case 'Second':
				return A2($terezka$elm_charts$Internal$Svg$formatClockSecond, zone, time.timestamp);
			case 'Minute':
				return A2($terezka$elm_charts$Internal$Svg$formatClock, zone, time.timestamp);
			case 'Hour':
				return A2($terezka$elm_charts$Internal$Svg$formatClock, zone, time.timestamp);
			case 'Day':
				return (time.multiple === 7) ? A2($terezka$elm_charts$Internal$Svg$formatWeekday, zone, time.timestamp) : A2($terezka$elm_charts$Internal$Svg$formatDate, zone, time.timestamp);
			case 'Month':
				return A2($terezka$elm_charts$Internal$Svg$formatMonth, zone, time.timestamp);
			default:
				return A2($terezka$elm_charts$Internal$Svg$formatYear, zone, time.timestamp);
		}
	});
var $terezka$elm_charts$Chart$Svg$formatTime = $terezka$elm_charts$Internal$Svg$formatTime;
var $terezka$elm_charts$Internal$Svg$generate = F3(
	function (amount, _v0, limits) {
		var func = _v0.a;
		return A2(func, amount, limits);
	});
var $terezka$elm_charts$Chart$Svg$generate = $terezka$elm_charts$Internal$Svg$generate;
var $terezka$intervals$Intervals$ints = F2(
	function (amount, range) {
		return A2(
			$elm$core$List$map,
			$elm$core$Basics$round,
			function () {
				if (amount.$ === 'Exactly') {
					var number = amount.a;
					return A4($terezka$intervals$Intervals$values, false, true, number, range);
				} else {
					var number = amount.a;
					return A4($terezka$intervals$Intervals$values, false, false, number, range);
				}
			}());
	});
var $terezka$elm_charts$Internal$Svg$ints = $terezka$elm_charts$Internal$Svg$Generator(
	F2(
		function (i, b) {
			return A2(
				$terezka$intervals$Intervals$ints,
				$terezka$intervals$Intervals$around(i),
				{max: b.max, min: b.min});
		}));
var $terezka$elm_charts$Chart$Svg$ints = $terezka$elm_charts$Internal$Svg$ints;
var $terezka$intervals$Intervals$Day = {$: 'Day'};
var $terezka$intervals$Intervals$Hour = {$: 'Hour'};
var $terezka$intervals$Intervals$Millisecond = {$: 'Millisecond'};
var $terezka$intervals$Intervals$Minute = {$: 'Minute'};
var $terezka$intervals$Intervals$Month = {$: 'Month'};
var $terezka$intervals$Intervals$Second = {$: 'Second'};
var $terezka$intervals$Intervals$Year = {$: 'Year'};
var $justinmimbs$time_extra$Time$Extra$Day = {$: 'Day'};
var $justinmimbs$date$Date$Days = {$: 'Days'};
var $justinmimbs$time_extra$Time$Extra$Millisecond = {$: 'Millisecond'};
var $justinmimbs$time_extra$Time$Extra$Month = {$: 'Month'};
var $justinmimbs$date$Date$Months = {$: 'Months'};
var $justinmimbs$date$Date$RD = function (a) {
	return {$: 'RD', a: a};
};
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m.$) {
			case 'Jan':
				return 0;
			case 'Feb':
				return 31;
			case 'Mar':
				return 59 + leapDays;
			case 'Apr':
				return 90 + leapDays;
			case 'May':
				return 120 + leapDays;
			case 'Jun':
				return 151 + leapDays;
			case 'Jul':
				return 181 + leapDays;
			case 'Aug':
				return 212 + leapDays;
			case 'Sep':
				return 243 + leapDays;
			case 'Oct':
				return 273 + leapDays;
			case 'Nov':
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return $elm$time$Time$Jan;
		case 2:
			return $elm$time$Time$Feb;
		case 3:
			return $elm$time$Time$Mar;
		case 4:
			return $elm$time$Time$Apr;
		case 5:
			return $elm$time$Time$May;
		case 6:
			return $elm$time$Time$Jun;
		case 7:
			return $elm$time$Time$Jul;
		case 8:
			return $elm$time$Time$Aug;
		case 9:
			return $elm$time$Time$Sep;
		case 10:
			return $elm$time$Time$Oct;
		case 11:
			return $elm$time$Time$Nov;
		default:
			return $elm$time$Time$Dec;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {day: d, month: m, year: y};
			}
		}
	});
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0.a;
	var y = $justinmimbs$date$Date$year(
		$justinmimbs$date$Date$RD(rd));
	return {
		ordinalDay: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		year: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0.a;
	var date = $justinmimbs$date$Date$toOrdinalDate(
		$justinmimbs$date$Date$RD(rd));
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.year, $elm$time$Time$Jan, date.ordinalDay);
};
var $justinmimbs$date$Date$add = F3(
	function (unit, n, _v0) {
		var rd = _v0.a;
		switch (unit.$) {
			case 'Years':
				return A3(
					$justinmimbs$date$Date$add,
					$justinmimbs$date$Date$Months,
					12 * n,
					$justinmimbs$date$Date$RD(rd));
			case 'Months':
				var date = $justinmimbs$date$Date$toCalendarDate(
					$justinmimbs$date$Date$RD(rd));
				var wholeMonths = ((12 * (date.year - 1)) + ($justinmimbs$date$Date$monthToNumber(date.month) - 1)) + n;
				var m = $justinmimbs$date$Date$numberToMonth(
					A2($elm$core$Basics$modBy, 12, wholeMonths) + 1);
				var y = A2($justinmimbs$date$Date$floorDiv, wholeMonths, 12) + 1;
				return $justinmimbs$date$Date$RD(
					($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A2(
						$elm$core$Basics$min,
						date.day,
						A2($justinmimbs$date$Date$daysInMonth, y, m)));
			case 'Weeks':
				return $justinmimbs$date$Date$RD(rd + (7 * n));
			default:
				return $justinmimbs$date$Date$RD(rd + n);
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
				$elm$core$Basics$clamp,
				1,
				A2($justinmimbs$date$Date$daysInMonth, y, m),
				d));
	});
var $justinmimbs$date$Date$fromPosix = F2(
	function (zone, posix) {
		return A3(
			$justinmimbs$date$Date$fromCalendarDate,
			A2($elm$time$Time$toYear, zone, posix),
			A2($elm$time$Time$toMonth, zone, posix),
			A2($elm$time$Time$toDay, zone, posix));
	});
var $justinmimbs$date$Date$toRataDie = function (_v0) {
	var rd = _v0.a;
	return rd;
};
var $justinmimbs$time_extra$Time$Extra$dateToMillis = function (date) {
	var daysSinceEpoch = $justinmimbs$date$Date$toRataDie(date) - 719163;
	return daysSinceEpoch * 86400000;
};
var $justinmimbs$time_extra$Time$Extra$timeFromClock = F4(
	function (hour, minute, second, millisecond) {
		return (((hour * 3600000) + (minute * 60000)) + (second * 1000)) + millisecond;
	});
var $justinmimbs$time_extra$Time$Extra$timeFromPosix = F2(
	function (zone, posix) {
		return A4(
			$justinmimbs$time_extra$Time$Extra$timeFromClock,
			A2($elm$time$Time$toHour, zone, posix),
			A2($elm$time$Time$toMinute, zone, posix),
			A2($elm$time$Time$toSecond, zone, posix),
			A2($elm$time$Time$toMillis, zone, posix));
	});
var $justinmimbs$time_extra$Time$Extra$toOffset = F2(
	function (zone, posix) {
		var millis = $elm$time$Time$posixToMillis(posix);
		var localMillis = $justinmimbs$time_extra$Time$Extra$dateToMillis(
			A2($justinmimbs$date$Date$fromPosix, zone, posix)) + A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix);
		return ((localMillis - millis) / 60000) | 0;
	});
var $justinmimbs$time_extra$Time$Extra$posixFromDateTime = F3(
	function (zone, date, time) {
		var millis = $justinmimbs$time_extra$Time$Extra$dateToMillis(date) + time;
		var offset0 = A2(
			$justinmimbs$time_extra$Time$Extra$toOffset,
			zone,
			$elm$time$Time$millisToPosix(millis));
		var posix1 = $elm$time$Time$millisToPosix(millis - (offset0 * 60000));
		var offset1 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix1);
		if (_Utils_eq(offset0, offset1)) {
			return posix1;
		} else {
			var posix2 = $elm$time$Time$millisToPosix(millis - (offset1 * 60000));
			var offset2 = A2($justinmimbs$time_extra$Time$Extra$toOffset, zone, posix2);
			return _Utils_eq(offset1, offset2) ? posix2 : posix1;
		}
	});
var $justinmimbs$time_extra$Time$Extra$add = F4(
	function (interval, n, zone, posix) {
		add:
		while (true) {
			switch (interval.$) {
				case 'Millisecond':
					return $elm$time$Time$millisToPosix(
						$elm$time$Time$posixToMillis(posix) + n);
				case 'Second':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 1000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Minute':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 60000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Hour':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Millisecond,
						$temp$n = n * 3600000,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Day':
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							$justinmimbs$date$Date$Days,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Month':
					return A3(
						$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
						zone,
						A3(
							$justinmimbs$date$Date$add,
							$justinmimbs$date$Date$Months,
							n,
							A2($justinmimbs$date$Date$fromPosix, zone, posix)),
						A2($justinmimbs$time_extra$Time$Extra$timeFromPosix, zone, posix));
				case 'Year':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 12,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Quarter':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Month,
						$temp$n = n * 3,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				case 'Week':
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
				default:
					var weekday = interval;
					var $temp$interval = $justinmimbs$time_extra$Time$Extra$Day,
						$temp$n = n * 7,
						$temp$zone = zone,
						$temp$posix = posix;
					interval = $temp$interval;
					n = $temp$n;
					zone = $temp$zone;
					posix = $temp$posix;
					continue add;
			}
		}
	});
var $justinmimbs$time_extra$Time$Extra$Week = {$: 'Week'};
var $justinmimbs$date$Date$Day = {$: 'Day'};
var $justinmimbs$date$Date$Friday = {$: 'Friday'};
var $justinmimbs$date$Date$Monday = {$: 'Monday'};
var $justinmimbs$date$Date$Month = {$: 'Month'};
var $justinmimbs$date$Date$Quarter = {$: 'Quarter'};
var $justinmimbs$date$Date$Saturday = {$: 'Saturday'};
var $justinmimbs$date$Date$Sunday = {$: 'Sunday'};
var $justinmimbs$date$Date$Thursday = {$: 'Thursday'};
var $justinmimbs$date$Date$Tuesday = {$: 'Tuesday'};
var $justinmimbs$date$Date$Wednesday = {$: 'Wednesday'};
var $justinmimbs$date$Date$Week = {$: 'Week'};
var $justinmimbs$date$Date$Year = {$: 'Year'};
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0.a;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$weekdayToNumber = function (wd) {
	switch (wd.$) {
		case 'Mon':
			return 1;
		case 'Tue':
			return 2;
		case 'Wed':
			return 3;
		case 'Thu':
			return 4;
		case 'Fri':
			return 5;
		case 'Sat':
			return 6;
		default:
			return 7;
	}
};
var $justinmimbs$date$Date$daysSincePreviousWeekday = F2(
	function (wd, date) {
		return A2(
			$elm$core$Basics$modBy,
			7,
			($justinmimbs$date$Date$weekdayNumber(date) + 7) - $justinmimbs$date$Date$weekdayToNumber(wd));
	});
var $justinmimbs$date$Date$firstOfMonth = F2(
	function (y, m) {
		return $justinmimbs$date$Date$RD(
			($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + 1);
	});
var $justinmimbs$date$Date$firstOfYear = function (y) {
	return $justinmimbs$date$Date$RD(
		$justinmimbs$date$Date$daysBeforeYear(y) + 1);
};
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.month;
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $justinmimbs$date$Date$quarterToMonth = function (q) {
	return $justinmimbs$date$Date$numberToMonth((q * 3) - 2);
};
var $justinmimbs$date$Date$floor = F2(
	function (interval, date) {
		var rd = date.a;
		switch (interval.$) {
			case 'Year':
				return $justinmimbs$date$Date$firstOfYear(
					$justinmimbs$date$Date$year(date));
			case 'Quarter':
				return A2(
					$justinmimbs$date$Date$firstOfMonth,
					$justinmimbs$date$Date$year(date),
					$justinmimbs$date$Date$quarterToMonth(
						$justinmimbs$date$Date$quarter(date)));
			case 'Month':
				return A2(
					$justinmimbs$date$Date$firstOfMonth,
					$justinmimbs$date$Date$year(date),
					$justinmimbs$date$Date$month(date));
			case 'Week':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Mon, date));
			case 'Monday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Mon, date));
			case 'Tuesday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Tue, date));
			case 'Wednesday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Wed, date));
			case 'Thursday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Thu, date));
			case 'Friday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Fri, date));
			case 'Saturday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Sat, date));
			case 'Sunday':
				return $justinmimbs$date$Date$RD(
					rd - A2($justinmimbs$date$Date$daysSincePreviousWeekday, $elm$time$Time$Sun, date));
			default:
				return date;
		}
	});
var $justinmimbs$time_extra$Time$Extra$floorDate = F3(
	function (dateInterval, zone, posix) {
		return A3(
			$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A2(
				$justinmimbs$date$Date$floor,
				dateInterval,
				A2($justinmimbs$date$Date$fromPosix, zone, posix)),
			0);
	});
var $justinmimbs$time_extra$Time$Extra$floor = F3(
	function (interval, zone, posix) {
		switch (interval.$) {
			case 'Millisecond':
				return posix;
			case 'Second':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						A2($elm$time$Time$toMinute, zone, posix),
						A2($elm$time$Time$toSecond, zone, posix),
						0));
			case 'Minute':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						A2($elm$time$Time$toMinute, zone, posix),
						0,
						0));
			case 'Hour':
				return A3(
					$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
					zone,
					A2($justinmimbs$date$Date$fromPosix, zone, posix),
					A4(
						$justinmimbs$time_extra$Time$Extra$timeFromClock,
						A2($elm$time$Time$toHour, zone, posix),
						0,
						0,
						0));
			case 'Day':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Day, zone, posix);
			case 'Month':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Month, zone, posix);
			case 'Year':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Year, zone, posix);
			case 'Quarter':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Quarter, zone, posix);
			case 'Week':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Week, zone, posix);
			case 'Monday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Monday, zone, posix);
			case 'Tuesday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Tuesday, zone, posix);
			case 'Wednesday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Wednesday, zone, posix);
			case 'Thursday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Thursday, zone, posix);
			case 'Friday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Friday, zone, posix);
			case 'Saturday':
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Saturday, zone, posix);
			default:
				return A3($justinmimbs$time_extra$Time$Extra$floorDate, $justinmimbs$date$Date$Sunday, zone, posix);
		}
	});
var $justinmimbs$time_extra$Time$Extra$ceiling = F3(
	function (interval, zone, posix) {
		var floored = A3($justinmimbs$time_extra$Time$Extra$floor, interval, zone, posix);
		return _Utils_eq(floored, posix) ? posix : A4($justinmimbs$time_extra$Time$Extra$add, interval, 1, zone, floored);
	});
var $terezka$intervals$Intervals$Time$ceilingDay = F3(
	function (zone, mult, stamp) {
		return (mult === 7) ? A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Week, zone, stamp) : A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Day, zone, stamp);
	});
var $justinmimbs$time_extra$Time$Extra$Hour = {$: 'Hour'};
var $justinmimbs$time_extra$Time$Extra$partsToPosix = F2(
	function (zone, _v0) {
		var year = _v0.year;
		var month = _v0.month;
		var day = _v0.day;
		var hour = _v0.hour;
		var minute = _v0.minute;
		var second = _v0.second;
		var millisecond = _v0.millisecond;
		return A3(
			$justinmimbs$time_extra$Time$Extra$posixFromDateTime,
			zone,
			A3($justinmimbs$date$Date$fromCalendarDate, year, month, day),
			A4(
				$justinmimbs$time_extra$Time$Extra$timeFromClock,
				A3($elm$core$Basics$clamp, 0, 23, hour),
				A3($elm$core$Basics$clamp, 0, 59, minute),
				A3($elm$core$Basics$clamp, 0, 59, second),
				A3($elm$core$Basics$clamp, 0, 999, millisecond)));
	});
var $justinmimbs$time_extra$Time$Extra$posixToParts = F2(
	function (zone, posix) {
		return {
			day: A2($elm$time$Time$toDay, zone, posix),
			hour: A2($elm$time$Time$toHour, zone, posix),
			millisecond: A2($elm$time$Time$toMillis, zone, posix),
			minute: A2($elm$time$Time$toMinute, zone, posix),
			month: A2($elm$time$Time$toMonth, zone, posix),
			second: A2($elm$time$Time$toSecond, zone, posix),
			year: A2($elm$time$Time$toYear, zone, posix)
		};
	});
var $terezka$intervals$Intervals$Time$ceilingHour = F3(
	function (zone, mult, stamp) {
		var parts = A2(
			$justinmimbs$time_extra$Time$Extra$posixToParts,
			zone,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Hour, zone, stamp));
		var rem = parts.hour % mult;
		var _new = A2($justinmimbs$time_extra$Time$Extra$partsToPosix, zone, parts);
		return (!rem) ? _new : A4($justinmimbs$time_extra$Time$Extra$add, $justinmimbs$time_extra$Time$Extra$Hour, mult - rem, zone, _new);
	});
var $justinmimbs$time_extra$Time$Extra$Minute = {$: 'Minute'};
var $terezka$intervals$Intervals$Time$ceilingMinute = F3(
	function (zone, mult, stamp) {
		var parts = A2(
			$justinmimbs$time_extra$Time$Extra$posixToParts,
			zone,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Minute, zone, stamp));
		var rem = parts.minute % mult;
		var _new = A2($justinmimbs$time_extra$Time$Extra$partsToPosix, zone, parts);
		return (!rem) ? _new : A4($justinmimbs$time_extra$Time$Extra$add, $justinmimbs$time_extra$Time$Extra$Minute, mult - rem, zone, _new);
	});
var $terezka$intervals$Intervals$Time$intAsMonth = function (_int) {
	switch (_int) {
		case 1:
			return $elm$time$Time$Jan;
		case 2:
			return $elm$time$Time$Feb;
		case 3:
			return $elm$time$Time$Mar;
		case 4:
			return $elm$time$Time$Apr;
		case 5:
			return $elm$time$Time$May;
		case 6:
			return $elm$time$Time$Jun;
		case 7:
			return $elm$time$Time$Jul;
		case 8:
			return $elm$time$Time$Aug;
		case 9:
			return $elm$time$Time$Sep;
		case 10:
			return $elm$time$Time$Oct;
		case 11:
			return $elm$time$Time$Nov;
		case 12:
			return $elm$time$Time$Dec;
		default:
			return $elm$time$Time$Dec;
	}
};
var $terezka$intervals$Intervals$Time$monthAsInt = function (month) {
	switch (month.$) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		default:
			return 12;
	}
};
var $terezka$intervals$Intervals$Time$ceilingMonth = F3(
	function (zone, mult, stamp) {
		var parts = A2(
			$justinmimbs$time_extra$Time$Extra$posixToParts,
			zone,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Month, zone, stamp));
		var monthInt = $terezka$intervals$Intervals$Time$monthAsInt(parts.month);
		var rem = (monthInt - 1) % mult;
		var newMonth = (!rem) ? monthInt : ((monthInt - rem) + mult);
		return A2(
			$justinmimbs$time_extra$Time$Extra$partsToPosix,
			zone,
			(newMonth > 12) ? _Utils_update(
				parts,
				{
					month: $terezka$intervals$Intervals$Time$intAsMonth(newMonth - 12),
					year: parts.year + 1
				}) : _Utils_update(
				parts,
				{
					month: $terezka$intervals$Intervals$Time$intAsMonth(newMonth)
				}));
	});
var $terezka$intervals$Intervals$Time$ceilingMs = F3(
	function (zone, mult, stamp) {
		var parts = A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, stamp);
		var rem = parts.millisecond % mult;
		return (!rem) ? A2($justinmimbs$time_extra$Time$Extra$partsToPosix, zone, parts) : A4($justinmimbs$time_extra$Time$Extra$add, $justinmimbs$time_extra$Time$Extra$Millisecond, mult - rem, zone, stamp);
	});
var $justinmimbs$time_extra$Time$Extra$Second = {$: 'Second'};
var $terezka$intervals$Intervals$Time$ceilingSecond = F3(
	function (zone, mult, stamp) {
		var parts = A2(
			$justinmimbs$time_extra$Time$Extra$posixToParts,
			zone,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Second, zone, stamp));
		var rem = parts.second % mult;
		var _new = A2($justinmimbs$time_extra$Time$Extra$partsToPosix, zone, parts);
		return (!rem) ? _new : A4($justinmimbs$time_extra$Time$Extra$add, $justinmimbs$time_extra$Time$Extra$Second, mult - rem, zone, _new);
	});
var $justinmimbs$time_extra$Time$Extra$Year = {$: 'Year'};
var $terezka$intervals$Intervals$Time$ceilingYear = F3(
	function (zone, mult, stamp) {
		var parts = A2(
			$justinmimbs$time_extra$Time$Extra$posixToParts,
			zone,
			A3($justinmimbs$time_extra$Time$Extra$ceiling, $justinmimbs$time_extra$Time$Extra$Year, zone, stamp));
		var rem = parts.year % mult;
		var newYear = (!rem) ? parts.year : ((parts.year - rem) + mult);
		return A2(
			$justinmimbs$time_extra$Time$Extra$partsToPosix,
			zone,
			_Utils_update(
				parts,
				{year: newYear}));
	});
var $terezka$intervals$Intervals$Time$ceilingUnit = F3(
	function (zone, unit, mult) {
		switch (unit.$) {
			case 'Millisecond':
				return A2($terezka$intervals$Intervals$Time$ceilingMs, zone, mult);
			case 'Second':
				return A2($terezka$intervals$Intervals$Time$ceilingSecond, zone, mult);
			case 'Minute':
				return A2($terezka$intervals$Intervals$Time$ceilingMinute, zone, mult);
			case 'Hour':
				return A2($terezka$intervals$Intervals$Time$ceilingHour, zone, mult);
			case 'Day':
				return A2($terezka$intervals$Intervals$Time$ceilingDay, zone, mult);
			case 'Month':
				return A2($terezka$intervals$Intervals$Time$ceilingMonth, zone, mult);
			default:
				return A2($terezka$intervals$Intervals$Time$ceilingYear, zone, mult);
		}
	});
var $terezka$intervals$Intervals$Time$Day = {$: 'Day'};
var $terezka$intervals$Intervals$Time$Hour = {$: 'Hour'};
var $terezka$intervals$Intervals$Time$Millisecond = {$: 'Millisecond'};
var $terezka$intervals$Intervals$Time$Minute = {$: 'Minute'};
var $terezka$intervals$Intervals$Time$Month = {$: 'Month'};
var $terezka$intervals$Intervals$Time$Second = {$: 'Second'};
var $terezka$intervals$Intervals$Time$Year = {$: 'Year'};
var $terezka$intervals$Intervals$Time$getChange = F3(
	function (zone, a, b) {
		var bP = A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, b);
		var aP = A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, a);
		return (!_Utils_eq(aP.year, bP.year)) ? $terezka$intervals$Intervals$Time$Year : ((!_Utils_eq(aP.month, bP.month)) ? $terezka$intervals$Intervals$Time$Month : ((!_Utils_eq(aP.day, bP.day)) ? $terezka$intervals$Intervals$Time$Day : ((!_Utils_eq(aP.hour, bP.hour)) ? $terezka$intervals$Intervals$Time$Hour : ((!_Utils_eq(aP.minute, bP.minute)) ? $terezka$intervals$Intervals$Time$Minute : ((!_Utils_eq(aP.second, bP.second)) ? $terezka$intervals$Intervals$Time$Second : $terezka$intervals$Intervals$Time$Millisecond)))));
	});
var $danhandrea$elm_time_extra$Util$isLeapYear = function (year) {
	return (!A2($elm$core$Basics$modBy, 400, year)) || ((!(!A2($elm$core$Basics$modBy, 100, year))) && (!A2($elm$core$Basics$modBy, 4, year)));
};
var $danhandrea$elm_time_extra$Month$days = F2(
	function (year, month) {
		switch (month.$) {
			case 'Jan':
				return 31;
			case 'Feb':
				return $danhandrea$elm_time_extra$Util$isLeapYear(year) ? 29 : 28;
			case 'Mar':
				return 31;
			case 'Apr':
				return 30;
			case 'May':
				return 31;
			case 'Jun':
				return 30;
			case 'Jul':
				return 31;
			case 'Aug':
				return 31;
			case 'Sep':
				return 30;
			case 'Oct':
				return 31;
			case 'Nov':
				return 30;
			default:
				return 31;
		}
	});
var $danhandrea$elm_time_extra$TimeExtra$daysInMonth = $danhandrea$elm_time_extra$Month$days;
var $terezka$intervals$Intervals$Time$toMs = $elm$time$Time$posixToMillis;
var $terezka$intervals$Intervals$Time$getDiff = F3(
	function (zone, a, b) {
		var _v0 = (_Utils_cmp(
			$terezka$intervals$Intervals$Time$toMs(a),
			$terezka$intervals$Intervals$Time$toMs(b)) < 0) ? _Utils_Tuple2(
			A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, a),
			A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, b)) : _Utils_Tuple2(
			A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, b),
			A2($justinmimbs$time_extra$Time$Extra$posixToParts, zone, a));
		var aP = _v0.a;
		var bP = _v0.b;
		var dMsX = bP.millisecond - aP.millisecond;
		var dMs = (dMsX < 0) ? (1000 + dMsX) : dMsX;
		var dSecondX = (bP.second - aP.second) + ((dMsX < 0) ? (-1) : 0);
		var dMinuteX = (bP.minute - aP.minute) + ((dSecondX < 0) ? (-1) : 0);
		var dHourX = (bP.hour - aP.hour) + ((dMinuteX < 0) ? (-1) : 0);
		var dDayX = (bP.day - aP.day) + ((dHourX < 0) ? (-1) : 0);
		var dDay = (dDayX < 0) ? (A2($danhandrea$elm_time_extra$TimeExtra$daysInMonth, bP.year, bP.month) + dDayX) : dDayX;
		var dMonthX = ($terezka$intervals$Intervals$Time$monthAsInt(bP.month) - $terezka$intervals$Intervals$Time$monthAsInt(aP.month)) + ((dDayX < 0) ? (-1) : 0);
		var dMonth = (dMonthX < 0) ? (12 + dMonthX) : dMonthX;
		var dHour = (dHourX < 0) ? (24 + dHourX) : dHourX;
		var dMinute = (dMinuteX < 0) ? (60 + dMinuteX) : dMinuteX;
		var dSecond = (dSecondX < 0) ? (60 + dSecondX) : dSecondX;
		var dYearX = (bP.year - aP.year) + ((dMonthX < 0) ? (-1) : 0);
		var dYear = (dYearX < 0) ? ($terezka$intervals$Intervals$Time$monthAsInt(bP.month) + dYearX) : dYearX;
		return {day: dDay, hour: dHour, millisecond: dMs, minute: dMinute, month: dMonth, second: dSecond, year: dYear};
	});
var $terezka$intervals$Intervals$Time$oneSecond = 1000;
var $terezka$intervals$Intervals$Time$oneMinute = $terezka$intervals$Intervals$Time$oneSecond * 60;
var $terezka$intervals$Intervals$Time$oneHour = $terezka$intervals$Intervals$Time$oneMinute * 60;
var $terezka$intervals$Intervals$Time$oneDay = $terezka$intervals$Intervals$Time$oneHour * 24;
var $terezka$intervals$Intervals$Time$oneMs = 1;
var $terezka$intervals$Intervals$Time$getNumOfTicks = F5(
	function (zone, unit, mult, a, b) {
		var div = F2(
			function (n1, n2) {
				return $elm$core$Basics$floor(n1 / n2);
			});
		var timeDiff = function (ms) {
			var ceiled = A4($terezka$intervals$Intervals$Time$ceilingUnit, zone, unit, mult, a);
			return (_Utils_cmp(
				$terezka$intervals$Intervals$Time$toMs(ceiled),
				$terezka$intervals$Intervals$Time$toMs(b)) > 0) ? (-1) : A2(
				div,
				A2(
					div,
					$terezka$intervals$Intervals$Time$toMs(b) - $terezka$intervals$Intervals$Time$toMs(ceiled),
					ms),
				mult);
		};
		var diff = function (property) {
			var ceiled = A4($terezka$intervals$Intervals$Time$ceilingUnit, zone, unit, mult, a);
			return (_Utils_cmp(
				$terezka$intervals$Intervals$Time$toMs(ceiled),
				$terezka$intervals$Intervals$Time$toMs(b)) > 0) ? (-1) : A2(
				div,
				property(
					A3($terezka$intervals$Intervals$Time$getDiff, zone, ceiled, b)),
				mult);
		};
		switch (unit.$) {
			case 'Millisecond':
				return timeDiff($terezka$intervals$Intervals$Time$oneMs) + 1;
			case 'Second':
				return timeDiff($terezka$intervals$Intervals$Time$oneSecond) + 1;
			case 'Minute':
				return timeDiff($terezka$intervals$Intervals$Time$oneMinute) + 1;
			case 'Hour':
				return timeDiff($terezka$intervals$Intervals$Time$oneHour) + 1;
			case 'Day':
				return timeDiff($terezka$intervals$Intervals$Time$oneDay) + 1;
			case 'Month':
				return diff(
					function (d) {
						return d.month + (d.year * 12);
					}) + 1;
			default:
				return diff(
					function ($) {
						return $.year;
					}) + 1;
		}
	});
var $terezka$intervals$Intervals$Time$largerUnit = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Second);
		case 'Second':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Minute);
		case 'Minute':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Hour);
		case 'Hour':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Day);
		case 'Day':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Month);
		case 'Month':
			return $elm$core$Maybe$Just($terezka$intervals$Intervals$Time$Year);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $terezka$intervals$Intervals$Time$niceMultiples = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return _List_fromArray(
				[1, 2, 5, 10, 20, 25, 50, 100, 200, 500]);
		case 'Second':
			return _List_fromArray(
				[1, 2, 5, 10, 15, 30]);
		case 'Minute':
			return _List_fromArray(
				[1, 2, 5, 10, 15, 30]);
		case 'Hour':
			return _List_fromArray(
				[1, 2, 3, 4, 6, 8, 12]);
		case 'Day':
			return _List_fromArray(
				[1, 2, 3, 7, 14]);
		case 'Month':
			return _List_fromArray(
				[1, 2, 3, 4, 6]);
		default:
			return _List_fromArray(
				[1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000, 10000, 1000000, 10000000]);
	}
};
var $terezka$intervals$Intervals$Time$toBestUnit = F4(
	function (zone, amount, min, max) {
		var toNice = function (unit) {
			toNice:
			while (true) {
				var niceNums = $terezka$intervals$Intervals$Time$niceMultiples(unit);
				var maybeNiceNum = A2(
					$elm$core$List$filter,
					function (n) {
						return _Utils_cmp(
							A5($terezka$intervals$Intervals$Time$getNumOfTicks, zone, unit, n, min, max),
							amount) < 1;
					},
					niceNums);
				var div = F2(
					function (n1, n2) {
						return $elm$core$Basics$ceiling(n1 / n2);
					});
				var _v0 = $elm$core$List$head(maybeNiceNum);
				if (_v0.$ === 'Just') {
					var niceNum = _v0.a;
					return _Utils_Tuple2(unit, niceNum);
				} else {
					var _v1 = $terezka$intervals$Intervals$Time$largerUnit(unit);
					if (_v1.$ === 'Just') {
						var larger = _v1.a;
						var $temp$unit = larger;
						unit = $temp$unit;
						continue toNice;
					} else {
						return _Utils_Tuple2($terezka$intervals$Intervals$Time$Year, 100000000);
					}
				}
			}
		};
		return toNice($terezka$intervals$Intervals$Time$Millisecond);
	});
var $terezka$intervals$Intervals$Time$toExtraUnit = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return $justinmimbs$time_extra$Time$Extra$Millisecond;
		case 'Second':
			return $justinmimbs$time_extra$Time$Extra$Second;
		case 'Minute':
			return $justinmimbs$time_extra$Time$Extra$Minute;
		case 'Hour':
			return $justinmimbs$time_extra$Time$Extra$Hour;
		case 'Day':
			return $justinmimbs$time_extra$Time$Extra$Day;
		case 'Month':
			return $justinmimbs$time_extra$Time$Extra$Month;
		default:
			return $justinmimbs$time_extra$Time$Extra$Year;
	}
};
var $terezka$intervals$Intervals$Time$unitToInt = function (unit) {
	switch (unit.$) {
		case 'Millisecond':
			return 0;
		case 'Second':
			return 1;
		case 'Minute':
			return 2;
		case 'Hour':
			return 3;
		case 'Day':
			return 4;
		case 'Month':
			return 5;
		default:
			return 6;
	}
};
var $terezka$intervals$Intervals$Time$values = F4(
	function (zone, maxMmount, min, max) {
		var _v0 = A4($terezka$intervals$Intervals$Time$toBestUnit, zone, maxMmount, min, max);
		var unit = _v0.a;
		var mult = _v0.b;
		var amount = A5($terezka$intervals$Intervals$Time$getNumOfTicks, zone, unit, mult, min, max);
		var initial = A4($terezka$intervals$Intervals$Time$ceilingUnit, zone, unit, mult, min);
		var tUnit = $terezka$intervals$Intervals$Time$toExtraUnit(unit);
		var toTick = F3(
			function (x, timestamp, change) {
				return {
					change: (_Utils_cmp(
						$terezka$intervals$Intervals$Time$unitToInt(change),
						$terezka$intervals$Intervals$Time$unitToInt(unit)) > 0) ? $elm$core$Maybe$Just(change) : $elm$core$Maybe$Nothing,
					isFirst: !x,
					multiple: mult,
					timestamp: timestamp,
					unit: unit,
					zone: zone
				};
			});
		var toTicks = F2(
			function (xs, acc) {
				toTicks:
				while (true) {
					if (xs.b) {
						var x = xs.a;
						var rest = xs.b;
						var prev = A4($justinmimbs$time_extra$Time$Extra$add, tUnit, (x - 1) * mult, zone, initial);
						var curr = A4($justinmimbs$time_extra$Time$Extra$add, tUnit, x * mult, zone, initial);
						var change = A3($terezka$intervals$Intervals$Time$getChange, zone, prev, curr);
						var $temp$xs = rest,
							$temp$acc = A2(
							$elm$core$List$cons,
							A3(toTick, x, curr, change),
							acc);
						xs = $temp$xs;
						acc = $temp$acc;
						continue toTicks;
					} else {
						return acc;
					}
				}
			});
		return $elm$core$List$reverse(
			A2(
				toTicks,
				A2($elm$core$List$range, 0, amount - 1),
				_List_Nil));
	});
var $terezka$intervals$Intervals$times = F3(
	function (zone, amount, range) {
		var toUnit = function (unit) {
			switch (unit.$) {
				case 'Millisecond':
					return $terezka$intervals$Intervals$Millisecond;
				case 'Second':
					return $terezka$intervals$Intervals$Second;
				case 'Minute':
					return $terezka$intervals$Intervals$Minute;
				case 'Hour':
					return $terezka$intervals$Intervals$Hour;
				case 'Day':
					return $terezka$intervals$Intervals$Day;
				case 'Month':
					return $terezka$intervals$Intervals$Month;
				default:
					return $terezka$intervals$Intervals$Year;
			}
		};
		var translateUnit = function (time) {
			return {
				change: A2($elm$core$Maybe$map, toUnit, time.change),
				isFirst: time.isFirst,
				multiple: time.multiple,
				timestamp: time.timestamp,
				unit: toUnit(time.unit),
				zone: time.zone
			};
		};
		var fromMs = function (ts) {
			return $elm$time$Time$millisToPosix(
				$elm$core$Basics$round(ts));
		};
		return A2(
			$elm$core$List$map,
			translateUnit,
			A4(
				$terezka$intervals$Intervals$Time$values,
				zone,
				amount,
				fromMs(range.min),
				fromMs(range.max)));
	});
var $terezka$elm_charts$Internal$Svg$times = function (zone) {
	return $terezka$elm_charts$Internal$Svg$Generator(
		F2(
			function (i, b) {
				return A3(
					$terezka$intervals$Intervals$times,
					zone,
					i,
					{max: b.max, min: b.min});
			}));
};
var $terezka$elm_charts$Chart$Svg$times = $terezka$elm_charts$Internal$Svg$times;
var $terezka$elm_charts$Chart$generateValues = F4(
	function (amount, tick, maybeFormat, axis) {
		var toTickValues = F2(
			function (toValue, toString) {
				return $elm$core$List$map(
					function (i) {
						return {
							label: function () {
								if (maybeFormat.$ === 'Just') {
									var formatter = maybeFormat.a;
									return formatter(
										toValue(i));
								} else {
									return toString(i);
								}
							}(),
							value: toValue(i)
						};
					});
			});
		switch (tick.$) {
			case 'Floats':
				return A3(
					toTickValues,
					$elm$core$Basics$identity,
					$elm$core$String$fromFloat,
					A3($terezka$elm_charts$Chart$Svg$generate, amount, $terezka$elm_charts$Chart$Svg$floats, axis));
			case 'Ints':
				return A3(
					toTickValues,
					$elm$core$Basics$toFloat,
					$elm$core$String$fromInt,
					A3($terezka$elm_charts$Chart$Svg$generate, amount, $terezka$elm_charts$Chart$Svg$ints, axis));
			default:
				var zone = tick.a;
				return A3(
					toTickValues,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Basics$toFloat, $elm$time$Time$posixToMillis),
						function ($) {
							return $.timestamp;
						}),
					$terezka$elm_charts$Chart$Svg$formatTime(zone),
					A3(
						$terezka$elm_charts$Chart$Svg$generate,
						amount,
						$terezka$elm_charts$Chart$Svg$times(zone),
						axis));
		}
	});
var $terezka$elm_charts$Chart$Attributes$zero = function (b) {
	return A3($elm$core$Basics$clamp, b.min, b.max, 0);
};
var $terezka$elm_charts$Chart$xLabels = function (edits) {
	var toTicks = F2(
		function (p, config) {
			return A4(
				$terezka$elm_charts$Chart$generateValues,
				config.amount,
				config.generate,
				config.format,
				A3(
					$elm$core$List$foldl,
					F2(
						function (f, x) {
							return f(x);
						}),
					p.x,
					config.limits));
		});
	var toTickValues = F3(
		function (p, config, ts) {
			return (!config.grid) ? ts : _Utils_update(
				ts,
				{
					xs: _Utils_ap(
						ts.xs,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.value;
							},
							A2(toTicks, p, config)))
				});
		});
	var toConfig = function (p) {
		return A2(
			$terezka$elm_charts$Internal$Helpers$apply,
			edits,
			{amount: 5, anchor: $elm$core$Maybe$Nothing, attrs: _List_Nil, color: '#808BAB', ellipsis: $elm$core$Maybe$Nothing, flip: false, fontSize: $elm$core$Maybe$Nothing, format: $elm$core$Maybe$Nothing, generate: $terezka$elm_charts$Internal$Svg$Floats, grid: false, hideOverflow: false, limits: _List_Nil, pinned: $terezka$elm_charts$Chart$Attributes$zero, rotate: 0, uppercase: false, xOff: 0, yOff: 18});
	};
	return A3(
		$terezka$elm_charts$Chart$LabelsElement,
		toConfig,
		toTickValues,
		F2(
			function (p, config) {
				var _default = $terezka$elm_charts$Internal$Svg$defaultLabel;
				var toLabel = function (item) {
					return A4(
						$terezka$elm_charts$Internal$Svg$label,
						p,
						_Utils_update(
							_default,
							{
								anchor: config.anchor,
								attrs: config.attrs,
								color: config.color,
								ellipsis: config.ellipsis,
								fontSize: config.fontSize,
								hideOverflow: config.hideOverflow,
								rotate: config.rotate,
								uppercase: config.uppercase,
								xOff: config.xOff,
								yOff: config.flip ? ((-config.yOff) + 10) : config.yOff
							}),
						_List_fromArray(
							[
								$elm$svg$Svg$text(item.label)
							]),
						{
							x: item.value,
							y: config.pinned(p.y)
						});
				};
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__x-labels')
						]),
					A2(
						$elm$core$List$map,
						toLabel,
						A2(toTicks, p, config)));
			}));
};
var $terezka$elm_charts$Chart$TicksElement = F2(
	function (a, b) {
		return {$: 'TicksElement', a: a, b: b};
	});
var $terezka$elm_charts$Chart$Attributes$length = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{length: v});
	});
var $terezka$elm_charts$Internal$Svg$defaultTick = {attrs: _List_Nil, color: 'rgb(210, 210, 210)', length: 5, width: 1};
var $terezka$elm_charts$Internal$Svg$tick = F4(
	function (plane, config, isX, point) {
		return A4(
			$terezka$elm_charts$Internal$Svg$withAttrs,
			config.attrs,
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$class('elm-charts__tick'),
					$elm$svg$Svg$Attributes$stroke(config.color),
					$elm$svg$Svg$Attributes$strokeWidth(
					$elm$core$String$fromFloat(config.width)),
					$elm$svg$Svg$Attributes$x1(
					$elm$core$String$fromFloat(
						A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, point.x))),
					$elm$svg$Svg$Attributes$x2(
					$elm$core$String$fromFloat(
						A2($terezka$elm_charts$Internal$Coordinates$toSVGX, plane, point.x) + (isX ? 0 : (-config.length)))),
					$elm$svg$Svg$Attributes$y1(
					$elm$core$String$fromFloat(
						A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, point.y))),
					$elm$svg$Svg$Attributes$y2(
					$elm$core$String$fromFloat(
						A2($terezka$elm_charts$Internal$Coordinates$toSVGY, plane, point.y) + (isX ? config.length : 0)))
				]),
			_List_Nil);
	});
var $terezka$elm_charts$Internal$Svg$xTick = F3(
	function (plane, config, point) {
		return A4($terezka$elm_charts$Internal$Svg$tick, plane, config, true, point);
	});
var $terezka$elm_charts$Chart$Svg$xTick = F2(
	function (plane, edits) {
		return A2(
			$terezka$elm_charts$Internal$Svg$xTick,
			plane,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultTick));
	});
var $terezka$elm_charts$Chart$xTicks = function (edits) {
	var config = A2(
		$terezka$elm_charts$Internal$Helpers$apply,
		edits,
		{amount: 5, color: '', flip: false, generate: $terezka$elm_charts$Internal$Svg$Floats, grid: true, height: 5, limits: _List_Nil, pinned: $terezka$elm_charts$Chart$Attributes$zero, width: 1});
	var toTicks = function (p) {
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.value;
			},
			A4(
				$terezka$elm_charts$Chart$generateValues,
				config.amount,
				config.generate,
				$elm$core$Maybe$Nothing,
				A3(
					$elm$core$List$foldl,
					F2(
						function (f, x) {
							return f(x);
						}),
					p.x,
					config.limits)));
	};
	var addTickValues = F2(
		function (p, ts) {
			return (!config.grid) ? ts : _Utils_update(
				ts,
				{
					xs: _Utils_ap(
						ts.xs,
						toTicks(p))
				});
		});
	return A2(
		$terezka$elm_charts$Chart$TicksElement,
		addTickValues,
		function (p) {
			var toTick = function (x) {
				return A3(
					$terezka$elm_charts$Chart$Svg$xTick,
					p,
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(config.color),
							$terezka$elm_charts$Chart$Attributes$length(
							config.flip ? (-config.height) : config.height),
							$terezka$elm_charts$Chart$Attributes$width(config.width)
						]),
					{
						x: x,
						y: config.pinned(p.y)
					});
			};
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__x-ticks')
					]),
				A2(
					$elm$core$List$map,
					toTick,
					toTicks(p)));
		});
};
var $terezka$elm_charts$Chart$Attributes$y2 = F2(
	function (v, config) {
		return _Utils_update(
			config,
			{
				y2: $elm$core$Maybe$Just(v)
			});
	});
var $terezka$elm_charts$Internal$Svg$End = {$: 'End'};
var $terezka$elm_charts$Internal$Svg$Start = {$: 'Start'};
var $terezka$elm_charts$Chart$yLabels = function (edits) {
	var toTicks = F2(
		function (p, config) {
			return A4(
				$terezka$elm_charts$Chart$generateValues,
				config.amount,
				config.generate,
				config.format,
				A3(
					$elm$core$List$foldl,
					F2(
						function (f, y) {
							return f(y);
						}),
					p.y,
					config.limits));
		});
	var toTickValues = F3(
		function (p, config, ts) {
			return (!config.grid) ? ts : _Utils_update(
				ts,
				{
					ys: _Utils_ap(
						ts.ys,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.value;
							},
							A2(toTicks, p, config)))
				});
		});
	var toConfig = function (p) {
		return A2(
			$terezka$elm_charts$Internal$Helpers$apply,
			edits,
			{amount: 5, anchor: $elm$core$Maybe$Nothing, attrs: _List_Nil, color: '#808BAB', ellipsis: $elm$core$Maybe$Nothing, flip: false, fontSize: $elm$core$Maybe$Nothing, format: $elm$core$Maybe$Nothing, generate: $terezka$elm_charts$Internal$Svg$Floats, grid: false, hideOverflow: false, limits: _List_Nil, pinned: $terezka$elm_charts$Chart$Attributes$zero, rotate: 0, uppercase: false, xOff: -10, yOff: 3});
	};
	return A3(
		$terezka$elm_charts$Chart$LabelsElement,
		toConfig,
		toTickValues,
		F2(
			function (p, config) {
				var _default = $terezka$elm_charts$Internal$Svg$defaultLabel;
				var toLabel = function (item) {
					return A4(
						$terezka$elm_charts$Internal$Svg$label,
						p,
						_Utils_update(
							_default,
							{
								anchor: function () {
									var _v0 = config.anchor;
									if (_v0.$ === 'Nothing') {
										return $elm$core$Maybe$Just(
											config.flip ? $terezka$elm_charts$Internal$Svg$Start : $terezka$elm_charts$Internal$Svg$End);
									} else {
										var anchor = _v0.a;
										return $elm$core$Maybe$Just(anchor);
									}
								}(),
								attrs: config.attrs,
								color: config.color,
								ellipsis: config.ellipsis,
								fontSize: config.fontSize,
								hideOverflow: config.hideOverflow,
								rotate: config.rotate,
								uppercase: config.uppercase,
								xOff: config.flip ? (-config.xOff) : config.xOff,
								yOff: config.yOff
							}),
						_List_fromArray(
							[
								$elm$svg$Svg$text(item.label)
							]),
						{
							x: config.pinned(p.x),
							y: item.value
						});
				};
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('elm-charts__y-labels')
						]),
					A2(
						$elm$core$List$map,
						toLabel,
						A2(toTicks, p, config)));
			}));
};
var $terezka$elm_charts$Internal$Svg$yTick = F3(
	function (plane, config, point) {
		return A4($terezka$elm_charts$Internal$Svg$tick, plane, config, false, point);
	});
var $terezka$elm_charts$Chart$Svg$yTick = F2(
	function (plane, edits) {
		return A2(
			$terezka$elm_charts$Internal$Svg$yTick,
			plane,
			A2($terezka$elm_charts$Internal$Helpers$apply, edits, $terezka$elm_charts$Internal$Svg$defaultTick));
	});
var $terezka$elm_charts$Chart$yTicks = function (edits) {
	var config = A2(
		$terezka$elm_charts$Internal$Helpers$apply,
		edits,
		{amount: 5, color: '', flip: false, generate: $terezka$elm_charts$Internal$Svg$Floats, grid: true, height: 5, limits: _List_Nil, pinned: $terezka$elm_charts$Chart$Attributes$zero, width: 1});
	var toTicks = function (p) {
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.value;
			},
			A4(
				$terezka$elm_charts$Chart$generateValues,
				config.amount,
				config.generate,
				$elm$core$Maybe$Nothing,
				A3(
					$elm$core$List$foldl,
					F2(
						function (f, y) {
							return f(y);
						}),
					p.y,
					config.limits)));
	};
	var addTickValues = F2(
		function (p, ts) {
			return _Utils_update(
				ts,
				{
					ys: _Utils_ap(
						ts.ys,
						toTicks(p))
				});
		});
	return A2(
		$terezka$elm_charts$Chart$TicksElement,
		addTickValues,
		function (p) {
			var toTick = function (y) {
				return A3(
					$terezka$elm_charts$Chart$Svg$yTick,
					p,
					_List_fromArray(
						[
							$terezka$elm_charts$Chart$Attributes$color(config.color),
							$terezka$elm_charts$Chart$Attributes$length(
							config.flip ? (-config.height) : config.height),
							$terezka$elm_charts$Chart$Attributes$width(config.width)
						]),
					{
						x: config.pinned(p.x),
						y: y
					});
			};
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$class('elm-charts__y-ticks')
					]),
				A2(
					$elm$core$List$map,
					toTick,
					toTicks(p)));
		});
};
var $author$project$View$WeatherChart$view = F2(
	function (msgMap, _v0) {
		var minTempPoint = _v0.minTempPoint;
		var maxTempPoint = _v0.maxTempPoint;
		var hourlyPoints = _v0.hourlyPoints;
		var hovering = _v0.hovering;
		var now = _v0.now;
		var itemsToShow = _v0.itemsToShow;
		var temperatureLabel = F3(
			function (extraAttrs, labelText, point) {
				return $author$project$Util$maybeToList(
					A2(
						$elm$core$Maybe$map,
						function (p) {
							return A3(
								$terezka$elm_charts$Chart$label,
								A2(
									$elm$core$List$cons,
									$terezka$elm_charts$Chart$Attributes$fontSize(12),
									extraAttrs),
								_List_fromArray(
									[
										$elm$html$Html$text(
										labelText + ($elm$core$String$fromFloat(p.temperature) + '°C'))
									]),
								{
									x: $elm$time$Time$posixToMillis(p.time),
									y: p.temperature
								});
						},
						point));
			});
		var minLabel = A3(
			temperatureLabel,
			_List_fromArray(
				[
					$terezka$elm_charts$Chart$Attributes$moveDown(10)
				]),
			'Min: ',
			minTempPoint);
		var maxLabel = A3(
			temperatureLabel,
			_List_fromArray(
				[
					$terezka$elm_charts$Chart$Attributes$moveUp(10)
				]),
			'Max: ',
			maxTempPoint);
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$h2,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Overview')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '30%'),
							A2($elm$html$Html$Attributes$style, 'height', '30%')
						]),
					_List_fromArray(
						[
							A2(
							$terezka$elm_charts$Chart$chart,
							_List_fromArray(
								[
									$terezka$elm_charts$Chart$Attributes$margin(
									{bottom: 50, left: 50, right: 30, top: 30}),
									$terezka$elm_charts$Chart$Attributes$height(500),
									$terezka$elm_charts$Chart$Attributes$width(500),
									A2(
									$terezka$elm_charts$Chart$Events$onMouseMove,
									msgMap.onHover,
									$terezka$elm_charts$Chart$Events$getNearest($terezka$elm_charts$Chart$Item$dots)),
									$terezka$elm_charts$Chart$Events$onMouseLeave(
									msgMap.onHover(_List_Nil))
								]),
							$elm$core$List$concat(
								_List_fromArray(
									[
										_List_fromArray(
										[
											$terezka$elm_charts$Chart$xTicks(
											_List_fromArray(
												[
													$terezka$elm_charts$Chart$Attributes$times($elm$time$Time$utc)
												])),
											$terezka$elm_charts$Chart$xLabels(
											_List_fromArray(
												[
													$terezka$elm_charts$Chart$Attributes$times($elm$time$Time$utc)
												])),
											$terezka$elm_charts$Chart$yLabels(
											_List_fromArray(
												[$terezka$elm_charts$Chart$Attributes$withGrid])),
											$terezka$elm_charts$Chart$yTicks(_List_Nil),
											A3(
											$terezka$elm_charts$Chart$series,
											A2(
												$elm$core$Basics$composeR,
												function ($) {
													return $.time;
												},
												A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$core$Basics$toFloat)),
											A2(
												$author$project$Util$zipFilter,
												_List_fromArray(
													[itemsToShow.temperature, itemsToShow.precipitation]),
												_List_fromArray(
													[
														A2(
														$terezka$elm_charts$Chart$format,
														function (t) {
															return $elm$core$String$fromFloat(t) + '°C';
														},
														A2(
															$terezka$elm_charts$Chart$named,
															'Temperature',
															A3(
																$terezka$elm_charts$Chart$interpolated,
																function ($) {
																	return $.temperature;
																},
																_List_fromArray(
																	[
																		$terezka$elm_charts$Chart$Attributes$color('orange')
																	]),
																_List_Nil))),
														A2(
														$terezka$elm_charts$Chart$format,
														function (t) {
															return $elm$core$String$fromFloat(t) + 'mm';
														},
														A2(
															$terezka$elm_charts$Chart$named,
															'Precipitation',
															A3(
																$terezka$elm_charts$Chart$interpolated,
																function ($) {
																	return $.precipitation;
																},
																_List_fromArray(
																	[
																		$terezka$elm_charts$Chart$Attributes$color('blue')
																	]),
																_List_Nil)))
													])),
											hourlyPoints),
											A2(
											$terezka$elm_charts$Chart$each,
											hovering,
											F2(
												function (p, item) {
													var value = $terezka$elm_charts$Chart$Item$getTooltipValue(item);
													var name = $terezka$elm_charts$Chart$Item$getName(item);
													var data = $terezka$elm_charts$Chart$Item$getData(item);
													var color = $terezka$elm_charts$Chart$Item$getColor(item);
													return _List_fromArray(
														[
															A4(
															$terezka$elm_charts$Chart$tooltip,
															item,
															_List_Nil,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'color', color)
																]),
															_List_fromArray(
																[
																	$elm$html$Html$text(name + (': ' + value)),
																	A2($elm$html$Html$br, _List_Nil, _List_Nil),
																	$elm$html$Html$text(
																	A2($author$project$Util$Time$formatTime, $elm$time$Time$utc, data.time))
																]))
														]);
												}))
										]),
										A2(
										$author$project$Util$zipFilter,
										_List_fromArray(
											[itemsToShow.currentTime, itemsToShow.minMax, itemsToShow.minMax]),
										$elm$core$List$concat(
											_List_fromArray(
												[
													_List_fromArray(
													[
														$terezka$elm_charts$Chart$withPlane(
														function (p) {
															return _List_fromArray(
																[
																	$terezka$elm_charts$Chart$line(
																	_List_fromArray(
																		[
																			$terezka$elm_charts$Chart$Attributes$x1(
																			$elm$time$Time$posixToMillis(now)),
																			$terezka$elm_charts$Chart$Attributes$y1(p.y.min),
																			$terezka$elm_charts$Chart$Attributes$y2(p.y.max),
																			$terezka$elm_charts$Chart$Attributes$dashed(
																			_List_fromArray(
																				[5, 5])),
																			$terezka$elm_charts$Chart$Attributes$color($terezka$elm_charts$Chart$Attributes$blue)
																		]))
																]);
														})
													]),
													minLabel,
													maxLabel
												])))
									])))
						]))
				]));
	});
var $author$project$View$Week$view = function (_v0) {
	return _Debug_todo(
		'View.Week',
		{
			start: {line: 25, column: 5},
			end: {line: 25, column: 15}
		})('Implement View.Week.view');
};
var $author$project$Main$view = function (model) {
	var _v0 = model.state;
	switch (_v0.$) {
		case 'FailedToLoad':
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Failed to load')
					]));
		case 'WaitingForTime':
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Obtaining the current time')
					]));
		case 'HaveTime':
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Loading the weather')
					]));
		default:
			var data = _v0.a;
			return A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h1,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$h1,
								_List_Nil,
								_List_fromArray(
									[
										_Utils_eq(model.config.mode, $author$project$Model$Dev) ? $elm$html$Html$text('Weather (DEV)') : $elm$html$Html$text('Weather')
									]))
							])),
						_Debug_todo(
						'Main',
						{
							start: {line: 198, column: 19},
							end: {line: 198, column: 29}
						})('Add View.WeatherItems.view'),
						A2(
						$author$project$View$WeatherChart$view,
						{onHover: $author$project$Main$OnHover},
						$author$project$Main$getChartData(data)),
						$author$project$View$Week$view(
						$author$project$Main$getWeeklyData(data))
					]));
	}
};
var $author$project$MainTests$suite = A2(
	$elm_explorations$test$Test$describe,
	'Main module',
	_List_fromArray(
		[
			A2(
			$elm_explorations$test$Test$describe,
			'view',
			_List_fromArray(
				[
					A2(
					$elm_explorations$test$Test$test,
					'view contains 4 checkboxes',
					function (_v0) {
						return A2(
							$elm_explorations$test$Test$Html$Query$count,
							$elm_explorations$test$Expect$equal(4),
							A2(
								$elm_explorations$test$Test$Html$Query$findAll,
								_List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$class('checkbox'),
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$tag('input'),
												$elm_explorations$test$Test$Html$Selector$checked(true)
											]))
									]),
								$elm_explorations$test$Test$Html$Query$fromHtml(
									$author$project$Main$view(
										function (m) {
											return _Utils_update(
												m,
												{
													state: $author$project$Model$HaveWeatherAndTime(
														{
															hovering: _List_Nil,
															selectedItems: $author$project$Model$WeatherItems$allSelected,
															time: $elm$time$Time$millisToPosix(0),
															weather: {
																hourly: {precipitation: _List_Nil, temperatures: _List_Nil, times: _List_Nil},
																utcOffset: 0
															}
														})
												});
										}(
											$author$project$Model$initModel($author$project$Main$devFlags))))));
					})
				])),
			A2(
			$elm_explorations$test$Test$describe,
			'update',
			_List_fromArray(
				[
					A2(
					$elm_explorations$test$Test$test,
					'The selected weather items state is changed correctly in update',
					function (item) {
						return function (_v1) {
							var m = _v1.a;
							var _v2 = m.state;
							if (_v2.$ === 'HaveWeatherAndTime') {
								var weather = _v2.a;
								return A2(
									$elm_explorations$test$Expect$all,
									_List_fromArray(
										[
											A2(
											$elm$core$Basics$composeR,
											$author$project$Model$WeatherItems$isItemSelected($author$project$Model$WeatherItems$Temperature),
											$elm_explorations$test$Expect$equal(false)),
											A2(
											$elm$core$Basics$composeR,
											$author$project$Model$WeatherItems$isItemSelected($author$project$Model$WeatherItems$Precipitation),
											$elm_explorations$test$Expect$equal(true)),
											A2(
											$elm$core$Basics$composeR,
											$author$project$Model$WeatherItems$isItemSelected($author$project$Model$WeatherItems$MinMax),
											$elm_explorations$test$Expect$equal(true)),
											A2(
											$elm$core$Basics$composeR,
											$author$project$Model$WeatherItems$isItemSelected($author$project$Model$WeatherItems$CurrentTime),
											$elm_explorations$test$Expect$equal(true))
										]),
									weather.selectedItems);
							} else {
								return $elm_explorations$test$Expect$fail('the state should still be Model.HaveWeatherAndTime');
							}
						}(
							A2(
								$author$project$Main$update,
								A2($author$project$Main$ChangeWeatherItemSelection, $author$project$Model$WeatherItems$Temperature, false),
								function (m) {
									return _Utils_update(
										m,
										{
											state: $author$project$Model$HaveWeatherAndTime(
												{
													hovering: _List_Nil,
													selectedItems: $author$project$Model$WeatherItems$allSelected,
													time: $elm$time$Time$millisToPosix(0),
													weather: {
														hourly: {precipitation: _List_Nil, temperatures: _List_Nil, times: _List_Nil},
														utcOffset: 0
													}
												})
										});
								}(
									$author$project$Model$initModel($author$project$Main$devFlags))));
					})
				])),
			A2(
			$elm_explorations$test$Test$test,
			'getChartData extracts data from the model correctly',
			function (_v3) {
				return A2(
					$elm_explorations$test$Expect$equal,
					{
						hourlyPoints: _List_fromArray(
							[
								{
								precipitation: 0,
								temperature: 6.9,
								time: $elm$time$Time$millisToPosix(1667779200000)
							},
								{
								precipitation: 0.1,
								temperature: 6.4,
								time: $elm$time$Time$millisToPosix(1667782800000)
							},
								{
								precipitation: 0.2,
								temperature: 5.6,
								time: $elm$time$Time$millisToPosix(1667786400000)
							},
								{
								precipitation: 0.3,
								temperature: 5.4,
								time: $elm$time$Time$millisToPosix(1667790000000)
							}
							]),
						hovering: _List_Nil,
						itemsToShow: $author$project$Model$WeatherItems$allSelected,
						maxTempPoint: $elm$core$Maybe$Just(
							{
								precipitation: 0,
								temperature: 6.9,
								time: $elm$time$Time$millisToPosix(1667779200000)
							}),
						minTempPoint: $elm$core$Maybe$Just(
							{
								precipitation: 0.3,
								temperature: 5.4,
								time: $elm$time$Time$millisToPosix(1667790000000)
							}),
						now: $elm$time$Time$millisToPosix(0)
					},
					$author$project$Main$getChartData(
						{
							hovering: _List_Nil,
							selectedItems: $author$project$Model$WeatherItems$allSelected,
							time: $elm$time$Time$millisToPosix(0),
							weather: {
								hourly: {
									precipitation: _List_fromArray(
										[0, 0.1, 0.2, 0.3]),
									temperatures: _List_fromArray(
										[6.9, 6.4, 5.6, 5.4]),
									times: _List_fromArray(
										[1667772000, 1667775600, 1667779200, 1667782800])
								},
								utcOffset: 7200
							}
						}));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'getWeeklyData extracts data from the model correctly',
			function (_v4) {
				return A2(
					$elm_explorations$test$Expect$equalLists,
					_List_fromArray(
						[
							{
							date: $author$project$Util$Time$Date(
								{day: 8, month: $elm$time$Time$Nov, year: 2022}),
							highTemp: $elm$core$Maybe$Just(12.6),
							lowTemp: $elm$core$Maybe$Just(8.7),
							totalPrecipitaion: 4.5
						},
							{
							date: $author$project$Util$Time$Date(
								{day: 9, month: $elm$time$Time$Nov, year: 2022}),
							highTemp: $elm$core$Maybe$Just(11.6),
							lowTemp: $elm$core$Maybe$Just(6),
							totalPrecipitaion: 0
						}
						]),
					A3(
						$elm$core$Basics$composeR,
						$author$project$Main$getWeeklyData,
						function ($) {
							return $.dailyData;
						},
						{
							hovering: _List_Nil,
							selectedItems: $author$project$Model$WeatherItems$allSelected,
							time: $elm$time$Time$millisToPosix(0),
							weather: {
								hourly: {
									precipitation: _List_fromArray(
										[0.1, 0.3, 0.3, 0.5, 0.3, 0.2, 1.3, 0.9, 0.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]),
									temperatures: _List_fromArray(
										[9.9, 9.8, 10.3, 10.3, 10.2, 10.2, 9.9, 9.9, 9.9, 10.1, 10.8, 11.2, 11.5, 11.8, 12.4, 12.6, 12.5, 11.8, 11.1, 10.6, 9.9, 9.3, 9.0, 8.7, 8.2, 7.6, 7.1, 6.8, 6.7, 6.7, 6.4, 6.7, 7.1, 7.7, 9.3, 10.6, 11.2, 11.6, 11.6, 11.5, 11.2, 10.0, 8.7, 7.9, 7.4, 7.1, 6.5, 6.0]),
									times: A2(
										$elm$core$List$map,
										function (i) {
											return (i * 3600) + 1667858400;
										},
										A2($elm$core$List$range, 0, 48))
								},
								utcOffset: 7200
							}
						}));
			})
		]));
var $author$project$Model$WeatherData$decodeHourlyData = _Debug_todo(
	'Model.WeatherData',
	{
		start: {line: 102, column: 5},
		end: {line: 102, column: 15}
	})('decodeHourlyData');
var $elm_explorations$test$Test$Runner$Failure$Comparison = F2(
	function (a, b) {
		return {$: 'Comparison', a: a, b: b};
	});
var $elm_explorations$test$Expect$err = function (result) {
	if (result.$ === 'Ok') {
		return $elm_explorations$test$Test$Expectation$fail(
			{
				description: 'Expect.err',
				reason: A2(
					$elm_explorations$test$Test$Runner$Failure$Comparison,
					'Err _',
					$elm_explorations$test$Test$Internal$toString(result))
			});
	} else {
		return $elm_explorations$test$Expect$pass;
	}
};
var $author$project$WeatherDataTests$weatherData = {hourly: $author$project$WeatherDataTests$hourlyData, utcOffset: 7200};
var $author$project$WeatherDataTests$suite = function () {
	var hourlyDataJsonStr = '{\r\n                  "time": [1667772000, 1667775600, 1667779200, 1667782800],\r\n                  "temperature_2m": [6.9, 6.4, 5.6, 5.4],\r\n                  "precipitation": [0, 0, 0, 0]\r\n                }';
	var weatherDataJsonStr = '{\r\n                 "latitude": 46.75,\r\n                 "longitude": 23.625,\r\n                 "utc_offset_seconds": 7200,\r\n                 "hourly": ' + (hourlyDataJsonStr + '}');
	return A2(
		$elm_explorations$test$Test$describe,
		'Model.WeatherData module',
		_List_fromArray(
			[
				A2(
				$elm_explorations$test$Test$test,
				'decodeHourlyData works correctly',
				function (_v0) {
					return A2(
						$elm_explorations$test$Expect$equal,
						$elm$core$Result$Ok($author$project$WeatherDataTests$hourlyData),
						A2($elm$json$Json$Decode$decodeString, $author$project$Model$WeatherData$decodeHourlyData, hourlyDataJsonStr));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'decodeWeatherData works correctly',
				function (_v1) {
					return A2(
						$elm_explorations$test$Expect$equal,
						$elm$core$Result$Ok($author$project$WeatherDataTests$weatherData),
						A2($elm$json$Json$Decode$decodeString, $author$project$Model$WeatherData$decodeWeatherData, weatherDataJsonStr));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'decodeHourlyData returns an error for invalid data',
				function (_v2) {
					return $elm_explorations$test$Expect$err(
						A2($elm$json$Json$Decode$decodeString, $author$project$Model$WeatherData$decodeHourlyData, 'invalid'));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'decodeWeatherData returns an error for invalid data',
				function (_v3) {
					return $elm_explorations$test$Expect$err(
						A2($elm$json$Json$Decode$decodeString, $author$project$Model$WeatherData$decodeWeatherData, 'invalid'));
				})
			]));
}();
var $author$project$WeatherItemsViewTests$OnChange = F2(
	function (a, b) {
		return {$: 'OnChange', a: a, b: b};
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm_explorations$test$Test$Html$Event$check = function (checked) {
	return _Utils_Tuple2(
		'change',
		$elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'target',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'checked',
								$elm$json$Json$Encode$bool(checked))
							])))
				])));
};
var $elm_explorations$test$Test$Html$Event$Event = F2(
	function (a, b) {
		return {$: 'Event', a: a, b: b};
	});
var $elm_explorations$test$Test$Html$Event$eventPayload = function (_v0) {
	var _v1 = _v0.a;
	var payload = _v1.b;
	return payload;
};
var $elm_explorations$test$Test$Html$Event$Handling = F3(
	function (message, stopPropagation, preventDefault) {
		return {message: message, preventDefault: preventDefault, stopPropagation: stopPropagation};
	});
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm_explorations$test$Test$Html$Event$findEvent = F2(
	function (eventName, element) {
		var handlerToDecoder = function (handler) {
			switch (handler.$) {
				case 'Normal':
					var decoder = handler.a;
					return A2(
						$elm$json$Json$Decode$map,
						function (msg) {
							return A3($elm_explorations$test$Test$Html$Event$Handling, msg, false, false);
						},
						decoder);
				case 'MayStopPropagation':
					var decoder = handler.a;
					return A2(
						$elm$json$Json$Decode$map,
						function (_v2) {
							var msg = _v2.a;
							var sp = _v2.b;
							return A3($elm_explorations$test$Test$Html$Event$Handling, msg, sp, false);
						},
						decoder);
				case 'MayPreventDefault':
					var decoder = handler.a;
					return A2(
						$elm$json$Json$Decode$map,
						function (_v3) {
							var msg = _v3.a;
							var pd = _v3.b;
							return A3($elm_explorations$test$Test$Html$Event$Handling, msg, false, pd);
						},
						decoder);
				default:
					var decoder = handler.a;
					return decoder;
			}
		};
		var elementOutput = $elm_explorations$test$Test$Html$Query$Internal$prettyPrint(element);
		var eventDecoder = function (node) {
			return A2(
				$elm$core$Result$fromMaybe,
				'Event.expectEvent: I found a node, but it does not listen for \"' + (eventName + ('\" events like I expected it would.\n\n' + elementOutput)),
				A2(
					$elm$core$Maybe$map,
					handlerToDecoder,
					A2($elm$core$Dict$get, eventName, node.facts.events)));
		};
		switch (element.$) {
			case 'TextTag':
				return $elm$core$Result$Err('I found a text node instead of an element. Text nodes do not receive events, so it would be impossible to simulate \"' + (eventName + ('\" events on it. The text in the node was: \"' + (elementOutput + '\"'))));
			case 'NodeEntry':
				var node = element.a;
				return eventDecoder(node);
			case 'CustomNode':
				var node = element.a;
				return eventDecoder(node);
			default:
				var node = element.a;
				return eventDecoder(node);
		}
	});
var $elm_explorations$test$Test$Html$Event$findHandler = function (_v0) {
	var _v1 = _v0.a;
	var eventName = _v1.a;
	var _v2 = _v0.b;
	var query = _v2.b;
	return A2(
		$elm$core$Result$andThen,
		$elm_explorations$test$Test$Html$Event$findEvent(eventName),
		A2(
			$elm$core$Result$mapError,
			$elm_explorations$test$Test$Html$Query$Internal$queryErrorToString,
			A2(
				$elm$core$Result$andThen,
				$elm_explorations$test$Test$Html$Query$Internal$verifySingle(eventName),
				$elm_explorations$test$Test$Html$Query$Internal$traverse(query))));
};
var $elm_explorations$test$Test$Html$Event$toResult = function (event) {
	return A2(
		$elm$core$Result$andThen,
		function (handler) {
			return A2(
				$elm$core$Result$mapError,
				$elm$json$Json$Decode$errorToString,
				A2(
					$elm$json$Json$Decode$decodeValue,
					handler,
					$elm_explorations$test$Test$Html$Event$eventPayload(event)));
		},
		A2(
			$elm$core$Result$map,
			$elm$json$Json$Decode$map(
				function ($) {
					return $.message;
				}),
			$elm_explorations$test$Test$Html$Event$findHandler(event)));
};
var $elm_explorations$test$Test$Html$Event$expect = F2(
	function (msg, _v0) {
		var event = _v0.a;
		var _v1 = _v0.b;
		var showTrace = _v1.a;
		var query = _v1.b;
		var _v2 = $elm_explorations$test$Test$Html$Event$toResult(
			A2(
				$elm_explorations$test$Test$Html$Event$Event,
				event,
				A2($elm_explorations$test$Test$Html$Query$Internal$Single, showTrace, query)));
		if (_v2.$ === 'Err') {
			var noEvent = _v2.a;
			return A4(
				$elm_explorations$test$Test$Html$Query$Internal$failWithQuery,
				showTrace,
				'',
				query,
				$elm_explorations$test$Expect$fail(noEvent));
		} else {
			var foundMsg = _v2.a;
			return A4(
				$elm_explorations$test$Test$Html$Query$Internal$failWithQuery,
				showTrace,
				'Event.expectEvent: Expected the msg \u001B[32m' + ($elm_explorations$test$Test$Internal$toString(msg) + ('\u001B[39m from the event \u001B[31m' + ($elm_explorations$test$Test$Internal$toString(event) + '\u001B[39m but could not find the event.'))),
				query,
				A2($elm_explorations$test$Expect$equal, msg, foundMsg));
		}
	});
var $elm_explorations$test$Test$Html$Query$Internal$Find = function (a) {
	return {$: 'Find', a: a};
};
var $elm_explorations$test$Test$Html$Query$find = F2(
	function (selectors, _v0) {
		var showTrace = _v0.a;
		var query = _v0.b;
		return A2(
			$elm_explorations$test$Test$Html$Query$Internal$Single,
			showTrace,
			A2(
				$elm_explorations$test$Test$Html$Query$Internal$prependSelector,
				query,
				$elm_explorations$test$Test$Html$Query$Internal$Find(selectors)));
	});
var $elm_explorations$test$Test$Html$Event$simulate = $elm_explorations$test$Test$Html$Event$Event;
var $author$project$View$WeatherItems$view = F2(
	function (_v0, _v1) {
		return _Debug_todo(
			'View.WeatherItems',
			{
				start: {line: 25, column: 5},
				end: {line: 25, column: 15}
			})('view');
	});
var $author$project$WeatherItemsViewTests$suite = A2(
	$elm_explorations$test$Test$describe,
	'View.WeatherItems module',
	_List_fromArray(
		[
			A2(
			$elm_explorations$test$Test$test,
			'view contains 4 checkboxes',
			function (_v0) {
				return A2(
					$elm_explorations$test$Test$Html$Query$count,
					$elm_explorations$test$Expect$equal(4),
					A2(
						$elm_explorations$test$Test$Html$Query$findAll,
						_List_fromArray(
							[
								$elm_explorations$test$Test$Html$Selector$class('checkbox'),
								$elm_explorations$test$Test$Html$Selector$containing(
								_List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$tag('input'),
										$elm_explorations$test$Test$Html$Selector$checked(true)
									]))
							]),
						$elm_explorations$test$Test$Html$Query$fromHtml(
							A2(
								$author$project$View$WeatherItems$view,
								{onChangeSelection: $author$project$WeatherItemsViewTests$OnChange},
								$author$project$Model$WeatherItems$allSelected))));
			}),
			A2(
			$elm_explorations$test$Test$test,
			'The correct message is sent when a checkbox is clicked',
			function (_v1) {
				return A2(
					$elm_explorations$test$Test$Html$Event$expect,
					A2($author$project$WeatherItemsViewTests$OnChange, $author$project$Model$WeatherItems$Temperature, false),
					A2(
						$elm_explorations$test$Test$Html$Event$simulate,
						$elm_explorations$test$Test$Html$Event$check(false),
						A2(
							$elm_explorations$test$Test$Html$Query$find,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$tag('input')
								]),
							A2(
								$elm_explorations$test$Test$Html$Query$find,
								_List_fromArray(
									[
										$elm_explorations$test$Test$Html$Selector$class('checkbox'),
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$tag('input'),
												$elm_explorations$test$Test$Html$Selector$checked(true)
											])),
										$elm_explorations$test$Test$Html$Selector$containing(
										_List_fromArray(
											[
												$elm_explorations$test$Test$Html$Selector$text('Temperature')
											]))
									]),
								$elm_explorations$test$Test$Html$Query$fromHtml(
									A2(
										$author$project$View$WeatherItems$view,
										{onChangeSelection: $author$project$WeatherItemsViewTests$OnChange},
										$author$project$Model$WeatherItems$allSelected))))));
			})
		]));
var $author$project$WeekViewTests$suite = function () {
	var sampleDailyData = {
		date: $author$project$Util$Time$Date(
			{day: 21, month: $elm$time$Time$Jan, year: 2022}),
		highTemp: $elm$core$Maybe$Just(0),
		lowTemp: $elm$core$Maybe$Just(10),
		totalPrecipitaion: 2
	};
	var makeWeeklyData = function (nr) {
		return {
			dailyData: A2($elm$core$List$repeat, nr, sampleDailyData)
		};
	};
	return A2(
		$elm_explorations$test$Test$describe,
		'View.Week module',
		_List_fromArray(
			[
				A2(
				$elm_explorations$test$Test$test,
				'Week view has class week',
				function (_v0) {
					return A2(
						$elm_explorations$test$Test$Html$Query$has,
						_List_fromArray(
							[
								$elm_explorations$test$Test$Html$Selector$class('week')
							]),
						$elm_explorations$test$Test$Html$Query$fromHtml(
							$author$project$View$Week$view(
								makeWeeklyData(7))));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'Week view has the correct number of days',
				function (_v1) {
					return A2(
						$elm_explorations$test$Test$Html$Query$count,
						$elm_explorations$test$Expect$equal(7),
						A2(
							$elm_explorations$test$Test$Html$Query$findAll,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$class('day')
								]),
							$elm_explorations$test$Test$Html$Query$fromHtml(
								$author$project$View$Week$view(
									makeWeeklyData(7)))));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'Week view contains the start and end dates',
				function (_v2) {
					return A2(
						$elm_explorations$test$Test$Html$Query$has,
						_List_fromArray(
							[
								$elm_explorations$test$Test$Html$Selector$text('2022'),
								$elm_explorations$test$Test$Html$Selector$text('2020'),
								$elm_explorations$test$Test$Html$Selector$text('Jan'),
								$elm_explorations$test$Test$Html$Selector$text('Feb'),
								$elm_explorations$test$Test$Html$Selector$text('12'),
								$elm_explorations$test$Test$Html$Selector$text('26')
							]),
						A2(
							$elm_explorations$test$Test$Html$Query$find,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$tag('h2')
								]),
							$elm_explorations$test$Test$Html$Query$fromHtml(
								$author$project$View$Week$view(
									{
										dailyData: _List_fromArray(
											[
												{
												date: $author$project$Util$Time$Date(
													{day: 12, month: $elm$time$Time$Jan, year: 2020}),
												highTemp: $elm$core$Maybe$Just(0),
												lowTemp: $elm$core$Maybe$Just(10),
												totalPrecipitaion: 2
											},
												{
												date: $author$project$Util$Time$Date(
													{day: 26, month: $elm$time$Time$Feb, year: 2022}),
												highTemp: $elm$core$Maybe$Just(0),
												lowTemp: $elm$core$Maybe$Just(10),
												totalPrecipitaion: 2
											}
											])
									}))));
				}),
				A2(
				$elm_explorations$test$Test$test,
				'Week view shows \"No data\" when the list of days is empty',
				function (_v3) {
					return A2(
						$elm_explorations$test$Test$Html$Query$has,
						_List_fromArray(
							[
								$elm_explorations$test$Test$Html$Selector$text('No data')
							]),
						A2(
							$elm_explorations$test$Test$Html$Query$find,
							_List_fromArray(
								[
									$elm_explorations$test$Test$Html$Selector$tag('h2')
								]),
							$elm_explorations$test$Test$Html$Query$fromHtml(
								$author$project$View$Week$view(
									{dailyData: _List_Nil}))));
				})
			]));
}();
var $elm_explorations$test$Fuzz$Internal$Fuzzer = function (a) {
	return {$: 'Fuzzer', a: a};
};
var $elm_explorations$test$GenResult$Generated = function (a) {
	return {$: 'Generated', a: a};
};
var $elm_explorations$test$Fuzz$constant = function (x) {
	return $elm_explorations$test$Fuzz$Internal$Fuzzer(
		function (prng) {
			return $elm_explorations$test$GenResult$Generated(
				{prng: prng, value: x});
		});
};
var $elm_explorations$test$GenResult$Rejected = function (a) {
	return {$: 'Rejected', a: a};
};
var $elm_explorations$test$Fuzz$andThen = F2(
	function (fn, _v0) {
		var fuzzer = _v0.a;
		return $elm_explorations$test$Fuzz$Internal$Fuzzer(
			function (prng) {
				var _v1 = fuzzer(prng);
				if (_v1.$ === 'Generated') {
					var g = _v1.a;
					var _v2 = fn(g.value);
					var newFuzzer = _v2.a;
					return newFuzzer(g.prng);
				} else {
					var r = _v1.a;
					return $elm_explorations$test$GenResult$Rejected(r);
				}
			});
	});
var $elm_explorations$test$MicroListExtra$getAt = F2(
	function (index, list) {
		return (index < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, index, list));
	});
var $elm_explorations$test$Fuzz$invalid = function (reason) {
	return $elm_explorations$test$Fuzz$Internal$Fuzzer(
		function (prng) {
			return $elm_explorations$test$GenResult$Rejected(
				{prng: prng, reason: reason});
		});
};
var $elm_explorations$test$PRNG$Hardcoded = function (a) {
	return {$: 'Hardcoded', a: a};
};
var $elm_explorations$test$PRNG$Random = function (a) {
	return {$: 'Random', a: a};
};
var $elm_explorations$test$Queue$Queue = F2(
	function (a, b) {
		return {$: 'Queue', a: a, b: b};
	});
var $elm_explorations$test$Queue$queue = F2(
	function (fl, rl) {
		if (!fl.b) {
			return A2(
				$elm_explorations$test$Queue$Queue,
				$elm$core$List$reverse(rl),
				_List_Nil);
		} else {
			return A2($elm_explorations$test$Queue$Queue, fl, rl);
		}
	});
var $elm_explorations$test$Queue$enqueue = F2(
	function (a, _v0) {
		var fl = _v0.a;
		var rl = _v0.b;
		return A2(
			$elm_explorations$test$Queue$queue,
			fl,
			A2($elm$core$List$cons, a, rl));
	});
var $elm_explorations$test$RandomRun$append = F2(
	function (n, run) {
		return _Utils_update(
			run,
			{
				data: A2($elm_explorations$test$Queue$enqueue, n, run.data),
				length: run.length + 1
			});
	});
var $elm_explorations$test$PRNG$getRun = function (prng) {
	if (prng.$ === 'Random') {
		var run = prng.a.run;
		return run;
	} else {
		var wholeRun = prng.a.wholeRun;
		return wholeRun;
	}
};
var $elm_explorations$test$RandomRun$maxLength = 64 * 1024;
var $elm_explorations$test$RandomRun$isFull = function (run) {
	return _Utils_eq(run.length, $elm_explorations$test$RandomRun$maxLength);
};
var $elm_explorations$test$Queue$dequeue = function (_v0) {
	var fl = _v0.a;
	var rl = _v0.b;
	if (!fl.b) {
		return _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A2($elm_explorations$test$Queue$Queue, _List_Nil, _List_Nil));
	} else {
		var head = fl.a;
		var tail = fl.b;
		return _Utils_Tuple2(
			$elm$core$Maybe$Just(head),
			A2($elm_explorations$test$Queue$queue, tail, rl));
	}
};
var $elm_explorations$test$RandomRun$nextChoice = function (run) {
	var _v0 = $elm_explorations$test$Queue$dequeue(run.data);
	if (_v0.a.$ === 'Nothing') {
		var _v1 = _v0.a;
		return $elm$core$Maybe$Nothing;
	} else {
		var first = _v0.a.a;
		var rest = _v0.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(
				first,
				_Utils_update(
					run,
					{data: rest, length: run.length - 1})));
	}
};
var $elm_explorations$test$Fuzz$rollDice = F2(
	function (maxValue, diceGenerator) {
		return $elm_explorations$test$Fuzz$Internal$Fuzzer(
			function (prng) {
				if ($elm_explorations$test$RandomRun$isFull(
					$elm_explorations$test$PRNG$getRun(prng))) {
					return $elm_explorations$test$GenResult$Rejected(
						{prng: prng, reason: 'Fuzz.rollDice: Your fuzzers have hit the max size of RandomRun (generating too much data).'});
				} else {
					if (prng.$ === 'Random') {
						var r = prng.a;
						var _v1 = A2($elm$random$Random$step, diceGenerator, r.seed);
						var diceRoll = _v1.a;
						var newSeed = _v1.b;
						return (diceRoll < 0) ? $elm_explorations$test$GenResult$Rejected(
							{prng: prng, reason: 'elm-test bug: generated a choice < 0'}) : ((_Utils_cmp(diceRoll, maxValue) > 0) ? $elm_explorations$test$GenResult$Rejected(
							{prng: prng, reason: 'elm-test bug: generated a choice > maxChoice'}) : $elm_explorations$test$GenResult$Generated(
							{
								prng: $elm_explorations$test$PRNG$Random(
									{
										run: A2($elm_explorations$test$RandomRun$append, diceRoll, r.run),
										seed: newSeed
									}),
								value: diceRoll
							}));
					} else {
						var h = prng.a;
						var _v2 = $elm_explorations$test$RandomRun$nextChoice(h.unusedPart);
						if (_v2.$ === 'Nothing') {
							return $elm_explorations$test$GenResult$Rejected(
								{prng: prng, reason: 'elm-test internals: hardcoded PRNG run out of numbers'});
						} else {
							var _v3 = _v2.a;
							var hardcodedChoice = _v3.a;
							var restOfChoices = _v3.b;
							return (hardcodedChoice < 0) ? $elm_explorations$test$GenResult$Rejected(
								{prng: prng, reason: 'elm-test internals: generated a choice < 0'}) : ((_Utils_cmp(hardcodedChoice, maxValue) > 0) ? $elm_explorations$test$GenResult$Rejected(
								{prng: prng, reason: 'elm-test internals: generated a choice > maxChoice'}) : $elm_explorations$test$GenResult$Generated(
								{
									prng: $elm_explorations$test$PRNG$Hardcoded(
										_Utils_update(
											h,
											{unusedPart: restOfChoices})),
									value: hardcodedChoice
								}));
						}
					}
				}
			});
	});
var $elm_explorations$test$Fuzz$uniformInt = function (n) {
	return A2(
		$elm_explorations$test$Fuzz$rollDice,
		n,
		A2($elm$random$Random$int, 0, n));
};
var $elm_explorations$test$Fuzz$oneOfHelp = F3(
	function (functionName, itemName, fuzzers) {
		var _v0 = $elm$core$List$length(fuzzers);
		if (!_v0) {
			return $elm_explorations$test$Fuzz$invalid(functionName + ': You must provide at least one item.');
		} else {
			var length = _v0;
			return A2(
				$elm_explorations$test$Fuzz$andThen,
				function (i) {
					var _v1 = A2($elm_explorations$test$MicroListExtra$getAt, i, fuzzers);
					if (_v1.$ === 'Nothing') {
						return $elm_explorations$test$Fuzz$invalid(
							'elm-test bug: ' + (functionName + (' didn\'t find a ' + (itemName + (' at position ' + ($elm$core$String$fromInt(i) + (' in the list of length ' + ($elm$core$String$fromInt(length) + '.'))))))));
					} else {
						var fuzzer = _v1.a;
						return fuzzer;
					}
				},
				$elm_explorations$test$Fuzz$uniformInt(length - 1));
		}
	});
var $elm_explorations$test$Fuzz$oneOfValues = function (values) {
	return A3(
		$elm_explorations$test$Fuzz$oneOfHelp,
		'Fuzz.oneOfValues',
		'value',
		A2($elm$core$List$map, $elm_explorations$test$Fuzz$constant, values));
};
var $author$project$MainTests$weatherItemFuzzer = $elm_explorations$test$Fuzz$oneOfValues(
	_List_fromArray(
		[$author$project$Model$WeatherItems$Temperature, $author$project$Model$WeatherItems$Precipitation, $author$project$Model$WeatherItems$MinMax, $author$project$Model$WeatherItems$CurrentTime]));
var $author$project$Test$Generated$Main$main = A2(
	$author$project$Test$Runner$Node$run,
	{
		globs: _List_Nil,
		paths: _List_fromArray(
			['/home/gogacatalin2001/University/FP/WeatherApp/tests/DayViewTests.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/MainTests.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherData/ToHourlyDataPoints0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherItems/AllSelected0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherItems/AllSelected1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherItems/IsItemSelected0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherItems/Set0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Model/WeatherItems/Set1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/GroupBy0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/GroupBy1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/GroupBy2.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MaximumBy0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MaximumBy1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MaximumBy2.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MaybeToList0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MaybeToList1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MinimumBy0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MinimumBy1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/MinimumBy2.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/ZipFilter0.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/ZipFilter1.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/VerifyExamples/Util/ZipFilter2.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/WeatherDataTests.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/WeatherItemsViewTests.elm', '/home/gogacatalin2001/University/FP/WeatherApp/tests/WeekViewTests.elm']),
		processes: 4,
		report: $author$project$Test$Reporter$Reporter$ConsoleReport($author$project$Console$Text$Monochrome),
		runs: 100,
		seed: 376158560164992
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			'DayViewTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$DayViewTests$suite)
				])),
			_Utils_Tuple2(
			'MainTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$MainTests$weatherItemFuzzer),
					$author$project$Test$Runner$Node$check($author$project$MainTests$suite)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherData.ToHourlyDataPoints0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$weatherData),
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$hourlyData),
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherData$ToHourlyDataPoints0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherItems.AllSelected0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherItems$AllSelected0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherItems.AllSelected1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherItems$AllSelected1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherItems.IsItemSelected0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherItems$IsItemSelected0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherItems.Set0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherItems$Set0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Model.WeatherItems.Set1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Model$WeatherItems$Set1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.GroupBy0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$GroupBy0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.GroupBy1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$GroupBy1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.GroupBy2',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$GroupBy2$spec2)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MaximumBy0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MaximumBy0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MaximumBy1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MaximumBy1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MaximumBy2',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MaximumBy2$spec2)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MaybeToList0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MaybeToList0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MaybeToList1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MaybeToList1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MinimumBy0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MinimumBy0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MinimumBy1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MinimumBy1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.MinimumBy2',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$MinimumBy2$spec2)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.ZipFilter0',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$ZipFilter0$spec0)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.ZipFilter1',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$ZipFilter1$spec1)
				])),
			_Utils_Tuple2(
			'VerifyExamples.Util.ZipFilter2',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$VerifyExamples$Util$ZipFilter2$spec2)
				])),
			_Utils_Tuple2(
			'WeatherDataTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$WeatherDataTests$hourlyData),
					$author$project$Test$Runner$Node$check($author$project$WeatherDataTests$weatherData),
					$author$project$Test$Runner$Node$check($author$project$WeatherDataTests$suite)
				])),
			_Utils_Tuple2(
			'WeatherItemsViewTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$WeatherItemsViewTests$suite)
				])),
			_Utils_Tuple2(
			'WeekViewTests',
			_List_fromArray(
				[
					$author$project$Test$Runner$Node$check($author$project$WeekViewTests$suite)
				]))
		]));
_Platform_export({'Test':{'Generated':{'Main':{'init':$author$project$Test$Generated$Main$main($elm$json$Json$Decode$int)(0)}}}});}(this));
return this.Elm;
})({});
var pipeFilename = "/tmp/elm_test-5141.sock";
var net = require('net'),
  client = net.createConnection(pipeFilename);

client.on('error', function (error) {
  console.error(error);
  client.end();
  process.exit(1);
});

client.setEncoding('utf8');
client.setNoDelay(true);

// Run the Elm app.
var app = Elm.Test.Generated.Main.init({ flags: Date.now() });

client.on('data', function (msg) {
  app.ports.elmTestPort__receive.send(JSON.parse(msg));
});

// Use ports for inter-process communication.
app.ports.elmTestPort__send.subscribe(function (msg) {
  // We split incoming messages on the socket on newlines. The gist is that node
  // is rather unpredictable in whether or not a single `write` will result in a
  // single `on('data')` callback. Sometimes it does, sometimes multiple writes
  // result in a single callback and - worst of all - sometimes a single read
  // results in multiple callbacks, each receiving a piece of the data. The
  // horror.
  client.write(msg + '\n');
});