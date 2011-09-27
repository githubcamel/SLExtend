$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof js=='undefined') js = {}
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i;
		s.b[s.b.length] = " => ";
		s.b[s.b.length] = Std.string(this.get(i));
		if(it.hasNext()) s.b[s.b.length] = ", ";
	}
	s.b[s.b.length] = "}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
if(typeof slExtend=='undefined') slExtend = {}
slExtend.SLExtend = function() { }
slExtend.SLExtend.__name__ = ["slExtend","SLExtend"];
slExtend.SLExtend.extend = function(fullMethodPath,callbackFunction,priority) {
	if(priority > 9) priority = 9;
	if(priority < 0) priority = 0;
	slExtend.SLFilter.getInstance().addFilter(fullMethodPath,callbackFunction,priority);
}
slExtend.SLExtend["super"] = function(fullMethodPath,parameters) {
	return slExtend.SLFilter.getInstance().applyNextFilterElement(fullMethodPath,[]);
}
slExtend.SLExtend.prototype.__class__ = slExtend.SLExtend;
slExtend.SLFilter = function(p) {
}
slExtend.SLFilter.__name__ = ["slExtend","SLFilter"];
slExtend.SLFilter._instance = null;
slExtend.SLFilter._filters = null;
slExtend.SLFilter.getInstance = function() {
	if(slExtend.SLFilter._instance == null) slExtend.SLFilter._instance = new slExtend.SLFilter();
	return slExtend.SLFilter._instance;
}
slExtend.SLFilter.prototype.addFilter = function(filterName,callbackFunction,priority) {
	var filterElement = { filterCallback : callbackFunction, priority : priority};
	if(!slExtend.SLFilter._filters.exists(filterName)) {
		var filter = { currentIndex : 0, elements : new Array()};
		slExtend.SLFilter._filters.set(filterName,filter);
	}
	var filter = slExtend.SLFilter._filters.get(filterName);
	var _g1 = 0, _g = filter.elements.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(filter.elements[i].priority >= filterElement.priority) {
			filter.elements.insert(i,filterElement);
			filter.currentIndex = filter.elements.length - 1;
			return;
		}
	}
	filter.elements.push(filterElement);
	filter.currentIndex = filter.elements.length - 1;
}
slExtend.SLFilter.prototype.applyFilters = function(filterName,parameters) {
	if(slExtend.SLFilter._filters.exists(filterName)) {
		var filter = slExtend.SLFilter._filters.get(filterName);
		return filter.elements[filter.elements.length - 1].filterCallback(parameters);
	} else return parameters;
}
slExtend.SLFilter.prototype.applyNextFilterElement = function(filterName,parameters) {
	if(slExtend.SLFilter._filters.exists(filterName)) {
		var filter = slExtend.SLFilter._filters.get(filterName);
		if(filter.currentIndex > 0) filter.currentIndex--; else return parameters;
		return filter.elements[filter.currentIndex].filterCallback(parameters);
	} else return parameters;
}
slExtend.SLFilter.prototype.__class__ = slExtend.SLFilter;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
if(typeof unit_tests=='undefined') unit_tests = {}
if(!unit_tests.slExtend) unit_tests.slExtend = {}
unit_tests.slExtend.ExtendableCoreClass1 = function(p) {
}
unit_tests.slExtend.ExtendableCoreClass1.__name__ = ["unit_tests","slExtend","ExtendableCoreClass1"];
unit_tests.slExtend.ExtendableCoreClass1.main = function() {
	var mainInstance = new unit_tests.slExtend.ExtendableCoreClass1();
	mainInstance.test1();
}
unit_tests.slExtend.ExtendableCoreClass1.prototype.test1 = function() {
	slExtend.SLFilter.getInstance().addFilter("unit_tests.slExtend.ExtendableCoreClass1.test1",$closure(this,"_slExtend_test1"),-1);
	var args = slExtend.SLFilter.getInstance().applyFilters("unit_tests.slExtend.ExtendableCoreClass1.test1",[]);
}
unit_tests.slExtend.ExtendableCoreClass1.prototype._slExtend_test1 = function() {
	haxe.Log.trace("original code block",{ fileName : "ExtendableCoreClass1.hx", lineNumber : 55, className : "unit_tests.slExtend.ExtendableCoreClass1", methodName : "_slExtend_test1"});
}
unit_tests.slExtend.ExtendableCoreClass1.prototype.__class__ = unit_tests.slExtend.ExtendableCoreClass1;
unit_tests.slExtend.PluginMethodExtend = function() { }
unit_tests.slExtend.PluginMethodExtend.__name__ = ["unit_tests","slExtend","PluginMethodExtend"];
unit_tests.slExtend.PluginMethodExtend.main = function() {
	var classInstance = new unit_tests.slExtend.ExtendableCoreClass1();
	unit_tests.slExtend.PluginMethodExtend.testExtend(classInstance);
	classInstance.test1();
}
unit_tests.slExtend.PluginMethodExtend.testExtend = function(classInstance) {
	slExtend.SLExtend.extend("unit_tests.slExtend.ExtendableCoreClass1.test1",unit_tests.slExtend.PluginMethodExtend.pluginMethod1,1);
	slExtend.SLExtend.extend("unit_tests.slExtend.ExtendableCoreClass1.test1",unit_tests.slExtend.PluginMethodExtend.pluginMethod2,2);
	slExtend.SLExtend.extend("unit_tests.slExtend.ExtendableCoreClass1.test1",unit_tests.slExtend.PluginMethodExtend.pluginMethod3,3);
}
unit_tests.slExtend.PluginMethodExtend.pluginMethod1 = function() {
	haxe.Log.trace("pluginMethod1 called",{ fileName : "PluginMethodExtend.hx", lineNumber : 50, className : "unit_tests.slExtend.PluginMethodExtend", methodName : "pluginMethod1"});
	slExtend.SLExtend["super"]("unit_tests.slExtend.ExtendableCoreClass1.test1",[]);
}
unit_tests.slExtend.PluginMethodExtend.pluginMethod2 = function() {
	haxe.Log.trace("pluginMethod2 called",{ fileName : "PluginMethodExtend.hx", lineNumber : 57, className : "unit_tests.slExtend.PluginMethodExtend", methodName : "pluginMethod2"});
	slExtend.SLExtend["super"]("unit_tests.slExtend.ExtendableCoreClass1.test1",[]);
}
unit_tests.slExtend.PluginMethodExtend.pluginMethod3 = function() {
	haxe.Log.trace("pluginMethod3 called",{ fileName : "PluginMethodExtend.hx", lineNumber : 64, className : "unit_tests.slExtend.PluginMethodExtend", methodName : "pluginMethod3"});
	slExtend.SLExtend["super"]("unit_tests.slExtend.ExtendableCoreClass1.test1",[]);
}
unit_tests.slExtend.PluginMethodExtend.prototype.__class__ = unit_tests.slExtend.PluginMethodExtend;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
slExtend.SLFilter._filters = new Hash();
js.Lib.onerror = null;
unit_tests.slExtend.ExtendableCoreClass1.__meta__ = { fields : { test1 : { extendable : null}}};
unit_tests.slExtend.PluginMethodExtend._methodPath = "unit_tests.slExtend.ExtendableCoreClass1.test1";
unit_tests.slExtend.PluginMethodExtend.main()