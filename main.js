(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _gmap_gmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gmap/gmap.component */ "./src/app/gmap/gmap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//This is where the Client side routing is defined







var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]] },
    { path: 'summary', component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]] },
    //{ path: 'gmap', component: GmapComponent, canActivate: [AuthService] } 
    { path: 'gmap', component: _gmap_gmap_component__WEBPACK_IMPORTED_MODULE_6__["GmapComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n/* Space out content a bit */\r\nbody {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n/* Everything but the jumbotron gets side spacing for mobile first views */\r\n.header,\r\n.content,\r\n.footer {\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n.alignleft {\r\n\tfloat: left;\r\n}\r\n.alignright {\r\n\tfloat: right;\r\n}\r\n.red {\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 class=\"alignleft\">{{title}} {{version}}</h1>\r\n    <span *ngIf=\"currentUser$\">\r\n        <p class=\"alignright\" >logged in as {{currentUser$ | async}}</p> \r\n    </span>\r\n    <span *ngIf=\"!currentUser$ | async\">\r\n        <p class=\"alignright red\" >You are not logged in</p> \r\n    </span>\r\n    <div style=\"clear: both;\"></div>\r\n</div>\r\n\r\n<nav>\r\n   <a routerLink=\"/login\">Login</a>\r\n  <!-- <a routerLink=\"/signup\">Sign Up</a> -->\r\n   <a routerLink=\"/gmap\">Catalog</a>\r\n   <a routerLink=\"summary\">Summary</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<!--<app-messages></app-messages> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'OLSA Public';
        this.version = 0.6;
        this.currentUser$ = this.userService.getCurrentUser();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _censusblock_censusblock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./censusblock/censusblock.component */ "./src/app/censusblock/censusblock.component.ts");
/* harmony import */ var _gmap_gmap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gmap/gmap.component */ "./src/app/gmap/gmap.component.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./site/site.component */ "./src/app/site/site.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _sitesumtable_sitesumtable_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sitesumtable/sitesumtable.component */ "./src/app/sitesumtable/sitesumtable.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _groupby_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groupby.pipe */ "./src/app/groupby.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _summap_summap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./summap/summap.component */ "./src/app/summap/summap.component.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';



















//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"].forRoot()
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                /*
                HttpClientInMemoryWebApiModule.forRoot(
                  InMemoryDataService, { dataEncapsulation: false }
                )
                */
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__["CatalogComponent"],
                _censusblock_censusblock_component__WEBPACK_IMPORTED_MODULE_8__["CensusblockComponent"],
                _gmap_gmap_component__WEBPACK_IMPORTED_MODULE_9__["GmapComponent"],
                _site_site_component__WEBPACK_IMPORTED_MODULE_10__["SiteComponent"],
                _block_block_component__WEBPACK_IMPORTED_MODULE_11__["BlockComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_16__["SummaryComponent"],
                _sitesumtable_sitesumtable_component__WEBPACK_IMPORTED_MODULE_17__["SitesumtableComponent"],
                _groupby_pipe__WEBPACK_IMPORTED_MODULE_19__["GroupbyPipe"],
                _summap_summap_component__WEBPACK_IMPORTED_MODULE_21__["SummapComponent"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _globals__WEBPACK_IMPORTED_MODULE_22__["Globals"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block/block.component.css":
/*!*******************************************!*\
  !*** ./src/app/block/block.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "example-radio-group {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n  .example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .form-control:invalid {\r\n    /* background-color: red; */\r\n    border: 2px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/block/block.component.html":
/*!********************************************!*\
  !*** ./src/app/block/block.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Diagnostic Data: {{diagnostic}} -->\r\n<!-- Panel Body -->\r\n<!--<div class=\"panel-body scrollable-panel\"> -->\r\n\r\n<!-- Creates Form (novalidate disables HTML validation, Angular will control) -->\r\n<!-- Text Boxes and Other User Inputs.  -->\r\n<mat-expansion-panel>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n      Block Info {{model.block}}\r\n    </mat-panel-title>\r\n    <mat-panel-description>\r\n       {{sitesavestatus}}\r\n    </mat-panel-description>\r\n  </mat-expansion-panel-header>\r\n\r\n  <form name=\"blockForm\" class=\"form-inline\" #blockForm=\"ngForm\" novalidate>\r\n    <div class=\"form-group\">\r\n        <label for=\"cataloger\">*Cataloger</label>              \r\n        <select class=\"form-control\" [(ngModel)]=\"model.cataloger\" id=\"cataloger\" name=\"cataloger\" (change)=\"saveBlock()\" required>\r\n          <option *ngFor=\"let choice of users\"  [value]=\"choice.username\">{{choice.username}}</option>\r\n        </select>\r\n      </div>\r\n<!--\r\n    <div class=\"form-group\">\r\n      <label for=\"cataloger\">Cataloger <span class=\"badge\">From Login</span></label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cataloger\" name=\"cataloger\" placeholder=\"cataloger name\" [(ngModel)]=\"model.cataloger\" (blur)=\"saveBlock()\" required>\r\n    </div>\r\n-->\r\n    <div class=\"form-group\">\r\n      <label for=\"block\">*Census Block</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"block\" name=\"block\" [(ngModel)]=\"model.block\" readonly required>\r\n    </div>\r\n    <div class=\"form-group\">                          \r\n      <mat-radio-group name='blocktyperadio' [(ngModel)]=\"model.blocktype\" id=\"blocktyperadio\" \r\n          name=\"blocktyperadio\" (change)=\"saveBlock()\" required >\r\n        <mat-radio-button class='blocktype-radio-button' *ngFor=\"let choice of blockTypes\" [value]=\"choice\">{{choice}}</mat-radio-button>\r\n      </mat-radio-group>                         \r\n    </div>\r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label for=\"blocktype\">Block Type</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"model.blocktype\" id=\"blocktype\" name=\"blocktype\" (change)=\"saveBlock()\" >\r\n        <option *ngFor=\"let choice of blockTypes\"  [value]=\"choice\">{{choice}}</option>\r\n      </select>                                \r\n    </div>\r\n    -->\r\n    <div class=\"form-group\">\r\n      <label for=\"cbarea\">*Block Area</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cbarea\"  name=\"cbarea\" [(ngModel)]=\"model.cbarea\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"cblatlng\">*Block Coords</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"cblatlng\" name=\"cblatlng\" [value]=\"model.cblat + ', ' + model.cblon\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lights\">*Light Count</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"lights\" name=\"lights\" [(ngModel)]=\"model.lightcount\"  [value]= \"model?.lights?.length\" [readonly]=\"model.lightcount\" required >\r\n    </div>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Light Info \r\n        </mat-panel-title>\r\n        <mat-panel-description > \r\n          <span *ngIf=\"model.lights?.length\">     \r\n            <span i18n> {model.lights?.length, plural, =0 {No Lights} =1 {1 Light} other {{{model.lights?.length}} Lights}}</span>\r\n          </span>\r\n          <span *ngIf=\"!(model.lights?.length)\">No Lights</span>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <div class=\"selectable\" *ngFor=\"let light of model.lights;let index=index;trackBy:trackByIndex;\" (click)=\"onHighlightLight(index)\" >\r\n        <div class=\"form-group\">\r\n          <label for=\"lightid\">Light ID</label>\r\n          <input type=\"text\" [value]=\"light.lightid\" id=\"lightid-{{index}}\" name=\"lightid-{{index}}\" readonly>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"lightloc\">Location</label>\r\n          <input type=\"text\" id=\"lightloc-{{index}}\" name=\"lightloc-{{index}}\" [value]=\"light.lat + ', ' + light.long\" readonly>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-danger\" (click)=\"onRemoveLight(index)\">Delete Light {{model.lights[index].lightid}}</button>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <div class=\"form-group\">\r\n      <label for=\"notes\">Notes</label>\r\n      <textarea rows=\"1\" class=\"form-control\" id=\"blocknotes\" name=\"blocknotes\" placeholder=\"Notes\" [(ngModel)]=\"model.notes\" (blur)=\"saveBlock()\"> </textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"blockstatus\">*Block Status</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"model.blockstatus\" id=\"blockstatus\" name=\"blockstatus\" (change)=\"saveBlock()\" required >\r\n        <option *ngFor=\"let choice of blockstatuses\" [value]=\"choice\">{{choice}}</option>\r\n      </select> \r\n    </div>  \r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"blockqcer\">QC Person</label>              \r\n      <select class=\"form-control\" [(ngModel)]=\"model.qcer\" id=\"blockqcer\" name=\"blockqcer\" (change)=\"saveBlock()\">\r\n        <option *ngFor=\"let choice of users\"  [value]=\"choice.username\">{{choice.username}}</option>\r\n      </select>\r\n    </div>\r\n    \r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label for=\"blockqcer\">QC Person</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"blockqcer\" name=\"blockqcer\" placeholder=\"QC Person\" [(ngModel)]=\"model.qcer\" (blur)=\"saveBlock()\">\r\n    </div>\r\n    -->\r\n    <div class=\"form-group\">\r\n      <label for=\"blockqcnotes\">QC Notes</label>\r\n      <textarea rows=\"1\" class=\"form-control\" id=\"blockqcnotes\" name=\"blockqcnotes\" placeholder=\"Notes\" [(ngModel)]=\"model.qcnotes\" (blur)=\"saveBlock()\"> </textarea>\r\n    </div>\r\n  </form>\r\n</mat-expansion-panel>\r\n"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/block */ "./src/app/services/block.ts");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _services_current_block_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/current-block.service */ "./src/app/services/current-block.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_site_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/site.model */ "./src/app/services/site.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ConsoleReporter } from 'jasmine';
var BlockComponent = /** @class */ (function () {
    function BlockComponent(changeDetector, blockService, currentblockservice, userservice, siteService) {
        this.changeDetector = changeDetector;
        this.blockService = blockService;
        this.currentblockservice = currentblockservice;
        this.userservice = userservice;
        this.siteService = siteService;
        this.removeLight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.highlightLight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = new _services_block__WEBPACK_IMPORTED_MODULE_1__["Block"]('No Block Selected Yet');
        //lookup lists
        this.blockstatuses = ['In Progress', 'Ready for QC', 'QC In Progress', 'QC Complete'];
        this.blockTypes = ['No OLSA', 'Street Lights Only', 'Other OLSA'];
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    BlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentblockservice.currentBlock.subscribe(function (block) {
            //console.log('block data:' + this.diagnostic);      
            if (typeof block !== 'undefined') {
                _this.model = block;
            }
        });
        this.getUsers();
        //this.currentblockservice.getSelectedBlock.subscribe(block => {
        //  this.currentblock = block;
        //  this.model = this.currentblock[0];
        //})
    };
    BlockComponent.prototype.ngOnChanges = function (changes) {
        var data = changes.block.currentValue;
        if (data) {
            this.model = Object.assign({}, data);
            this.sitesavestatus = "";
        }
    };
    BlockComponent.prototype.getUsers = function () {
        var _this = this;
        this.userservice.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.users.sort(function (a, b) { return a.username.toString().localeCompare(b.username.toString()); });
        });
    };
    BlockComponent.prototype.getBlockSites = function (block) {
        var _this = this;
        this.siteService.getAllSitesByBlock(block)
            .subscribe(function (sites) {
            _this.sites = sites;
            console.log('in getblocksites', _this.sites);
        });
    };
    BlockComponent.prototype.saveBlock = function () {
        var _this = this;
        /* work out form dirty test issue
        if(this.blockForm.dirty)
        */
        //if (typeof this.model.block === "undefined") {
        if (!this.model.block) {
            alert(this.validateMsg);
            console.log("no block, dont save");
            this.sitesavestatus = 'No block, not saved';
        }
        else if (!this.model.cataloger) {
            alert(this.validateMsg);
            console.log("no catalogger, dont save");
            this.sitesavestatus = 'Specify catalogger to make changes';
        }
        else if (!this.isValidBlock()) {
            alert(this.validateMsg);
            this.sitesavestatus = 'Not Saved, missing data';
            this.changeDetector.detectChanges(); //has to be before change or it won't detect change since it's most likely being set back to original value
            this.model.blockstatus = this.blockstatuses[0];
        }
        else {
            // Grabs all of the text box fields
            //change status when starting
            if (this.model && !this.model.blockstatus) {
                this.model.blockstatus = this.blockstatuses[0];
            }
            if (this.model && this.model.lights && this.model.lights.length) {
                this.model.lightcount = this.model.lights.length;
                console.log('update lights on save:', this.model.lightcount);
            }
            else {
                console.log('did not update lights on save', this.model.lights);
            }
            var BlockData = this.model;
            BlockData.updated_at = Date.now();
            // Saves the Block data to the db
            this.blockService.updateBlock(BlockData).subscribe(function () { return _this.sitesavestatus = 'Block Updated'; });
        }
    };
    BlockComponent.prototype.isValidBlock = function () {
        // *** add more validation rules    
        var isValid = false;
        this.validateMsg = 'Required block data is missing:';
        //change this to also short circuit if block status is blank
        //if  (this.model.blockstatus  && (this.model.blockstatus == this.blockstatuses[0])) return true; // still in progress don't validate
        //console.log('in isvalidblock staus index is:', this.blockstatuses.indexOf(this.model.blockstatus));
        //let status:number = this.blockstatuses.indexOf(this.model.blockstatus);
        if (this.blockstatuses.indexOf(this.model.blockstatus) < 1)
            return true; // still in progress don't validate    
        if (this.model && this.model.cataloger && this.model.cataloger != 'undefined' && this.model.block && this.model.blocktype && this.model.blockstatus) {
            console.log('in isvalidblock lightcount:', this.model.lightcount, ' type is ', typeof this.model.lightcount);
            if (typeof this.model.lightcount != 'number') {
                console.log('light count false, typeof:', typeof this.model.lightcount, this.model);
                isValid = false;
                this.validateMsg += ' check light count';
            }
            else {
                //console.log('light count true');
                //check that all sites are complete
                //this.siteService.getAllSitesByBlock(this.model).subscribe((sites =>{
                isValid = true;
                //  ******** change this to use a site input to keep a sites variable up to date
                //attempt at bringing in sites, but it's async so it doesn't work properly.
                /*
                this.getBlockSites(this.model.block);
                  console.log('in isvalid sites is',this.sites);
                  if(this.sites){
                    //var siteOfShape = this.siteList.find((s) => s.siteID.toString() === shape.siteID.toString());
                    let tmp = this.sites.find((s) => s.sitecomplete == false);
                    if (tmp){
                      this.validateMsg = 'All Sites must be marked as complete';
                    } else{
                      isValid = true;
                    }
                  }
                */
            }
        }
        else {
            console.log('in isvalidblock catalogger:', this.model.cataloger);
            if (!this.model || !this.model.cataloger || this.model.cataloger == 'undefined')
                this.validateMsg += ' no cataloger,';
            if (!this.model.blocktype)
                this.validateMsg += ' no block type,';
            if (!this.model.blockstatus)
                this.validateMsg += ' no block status,';
            if (!this.model.lightcount || typeof this.model.lightcount != 'number')
                this.validateMsg += ' check light count (try enering 0 if there are none),';
            this.validateMsg = this.validateMsg.slice(0, -1) + '.';
        }
        return isValid;
    };
    BlockComponent.prototype.onRemoveLight = function (index) {
        console.log('in onRemoveLight');
        this.removeLight.emit(this.model.lights[index].lightid);
    };
    BlockComponent.prototype.onHighlightLight = function (index) {
        console.log('in onHighlightLight', index);
        this.highlightLight.emit(this.model.lights[index].lightid);
    };
    Object.defineProperty(BlockComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model.blockstatus); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_block__WEBPACK_IMPORTED_MODULE_1__["Block"])
    ], BlockComponent.prototype, "block", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"])
    ], BlockComponent.prototype, "site", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BlockComponent.prototype, "removeLight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BlockComponent.prototype, "highlightLight", void 0);
    BlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block',
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/block/block.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"],
            _services_current_block_service__WEBPACK_IMPORTED_MODULE_3__["CurrentBlockService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_site_service__WEBPACK_IMPORTED_MODULE_5__["SiteService"]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/*!***********************************************!*\
  !*** ./src/app/catalog/catalog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  catalog works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogComponent = /** @class */ (function () {
    function CatalogComponent() {
    }
    CatalogComponent.prototype.ngOnInit = function () {
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/censusblock/censusblock.component.css":
/*!*******************************************************!*\
  !*** ./src/app/censusblock/censusblock.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Space out content a bit */\r\nbody {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n/* Everything but the jumbotron gets side spacing for mobile first views */\r\n.header,\r\n  .content,\r\n  .footer {\r\n      padding-left: 15px;\r\n      padding-right: 15px;\r\n  }\r\n.form-control {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.checkbox-list {\r\n    margin-left: 25px;\r\n}"

/***/ }),

/***/ "./src/app/censusblock/censusblock.component.html":
/*!********************************************************!*\
  !*** ./src/app/censusblock/censusblock.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row content\">\r\n  <div class=\"col-md-2\">\r\n    <span class=\"form-group\">\r\n      <label for=\"censusblock\">Pick a block </label>\r\n      <!--<select class=\"form-control\" [(ngModel)]=\"selectedBlockData\" id=\"censusblock\" (change) = \"selectedBlock(selectedBlockData)\" >-->\r\n      <select class=\"form-control\"  [(ngModel)]=\"selectedBlockData\" id=\"censusblock\" (change) = \"selectedBlock($event.target.value)\" >\r\n        <option *ngFor=\"let cb of censusblocks\"  [value]=\"cb.geoid10\">{{cb.geoid10}}</option>\r\n      </select>\r\n    </span>\r\n  </div> <!--  End of CB column-->\r\n  <div class=\"col-md-5\">\r\n    * Or *   \r\n    <label class=\"form-check-inline\">\r\n      <input type=\"checkbox\" class=\"checkbox-list\" id=\"toggleAllBlocks\" [(ngModel)]=\"showallblocks\" >Show All Blocks\r\n    </label>\r\n    <div class=\"form-inline\">\r\n      <span class=\"form-group\">\r\n        <label for=\"state\"> Pick a state </label>\r\n        <select class=\"form-control mr-2\"  [(ngModel)]=\"state\" id=\"state\" (change) = 'updateCountyList(state)' >\r\n          <option *ngFor=\"let state of states\"  [value]=\"state\">{{state}}</option>\r\n        </select>\r\n      </span>\r\n\r\n      <span class=\"form-group\">\r\n        <label for=\"county\"> county </label>  \r\n        <select class=\"form-control mr-2\"  [(ngModel)]=\"county\" id=\"county\" (change) = 'updateTractList(county, state)' >\r\n          <option *ngFor=\"let county of counties\"  [value]=\"county\">{{county}}</option>\r\n        </select>\r\n      </span>\r\n\r\n      <span class=\"form-group\">\r\n        <label for=\"tractblock\"> and Track-Block </label>  \r\n        <select class=\"form-control mr-2\"  [(ngModel)]=\"tractblock\" id=\"tractblock\" (change) = 'gotoTrackBlock(state, county, tractblock)' >\r\n          <option *ngFor=\"let tractblock of tractblocks\"  [value]=\"tractblock\">{{tractblock}}</option>\r\n        </select>\r\n      </span>\r\n    </div>\r\n  </div> <!--  End of pieces column-->\r\n  <div class=\"col-md-5\">\r\n    Search \r\n    <div class=\"form-inline\">\r\n       <!--\r\n        <span class=\"form-group\">\r\n            <label for=\"blockcriteria\"> Search Criteria </label>\r\n            <select class=\"form-control mr-2\"  id=\"blockcriteria\" [(ngModel)]=\"blockCriteria\" >\r\n              <option *ngFor=\"let criteria of blockcriterion\"  [value]=\"criteria\">{{criteria}}</option>\r\n            </select>\r\n          </span>\r\n\r\n      <span class=\"form-group\" *ngIf=\"blockCriteria=='Status'\">\r\n        <label for=\"blockstatus\"> Status </label>\r\n        <select class=\"form-control mr-2\"  id=\"blockstatus\" (blur) = 'updateBlockStatusList($event.target.value)' >\r\n          <option *ngFor=\"let status of blockstatuses\"  [value]=\"status\">{{status}}</option>\r\n        </select>\r\n      </span>\r\n      \r\n      <span class=\"form-group\" *ngIf=\"blockCriteria=='Status'\">\r\n        <label for=\"block\"> block </label>  \r\n        <select class=\"form-control mr-2\"  #block [(ngModel)]=\"searchBlock\" (change) = 'selectedBlock(block?.value)' >\r\n            <option *ngFor=\"let block of blocksbyStatus\"  [value]=\"block.block\">{{block.block}}</option>\r\n          </select>\r\n      </span>\r\n      <span class=\"form-group\" *ngIf=\"blockCriteria=='Status' && blocksbyStatus?.length>99\">\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"selectedBlock(searchBlock)\">Go</button>\r\n      </span>\r\n      -->\r\n      <!--  User criteria section -->\r\n     <!-- <span class=\"form-group\" *ngIf=\"blockCriteria=='User'\"> -->\r\n      <span class=\"form-group\" >\r\n        <label for=\"blockuser\"> User </label>\r\n        <select class=\"form-control mr-2\"   [(ngModel)]=\"user\" id=\"blockuser\" (blur) = 'updateBlockUserStatusList(blockstatus,$event.target.value)' >\r\n          <option *ngFor=\"let user of blockUsers\"  [value]=\"user.username\">{{user.username}}</option>\r\n        </select>\r\n      </span>\r\n      <!--  Status criteria section -->\r\n      <span class=\"form-group\">\r\n        <label for=\"blockstatus\"> Status </label>\r\n        <select class=\"form-control mr-2\"  [(ngModel)]=\"blockstatus\" id=\"blockstatus\" (blur) = 'updateBlockUserStatusList($event.target.value, user)' >\r\n          <option *ngFor=\"let status of blockstatuses\"  [value]=\"status\">{{status}}</option>\r\n        </select>\r\n      </span>\r\n\r\n      <span class=\"form-group\" >\r\n        <label for=\"block\"> block </label>  \r\n        <select class=\"form-control mr-2\"  #block [(ngModel)]=\"searchBlock\" (change) = 'selectedBlock(block?.value)' >\r\n            <option *ngFor=\"let block of blocksbyUserStatus\"  [value]=\"block.block\">{{block.block}}</option>\r\n          </select>\r\n      </span>\r\n     <!-- <span class=\"form-group\" *ngIf=\"blocksbyUser?.length==1\">  -->\r\n      <span class=\"form-group\" *ngIf=\"blockCriteria=='User' && blocksbyUser?.length>99\">\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"selectedBlock(searchBlock)\">Go</button>\r\n      </span>     \r\n    </div>\r\n  </div>  <!--  End of types column -->\r\n</div> <!--  End of Row -->\r\n"

/***/ }),

/***/ "./src/app/censusblock/censusblock.component.ts":
/*!******************************************************!*\
  !*** ./src/app/censusblock/censusblock.component.ts ***!
  \******************************************************/
/*! exports provided: CensusblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensusblockComponent", function() { return CensusblockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_censusblock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/censusblock.service */ "./src/app/services/censusblock.service.ts");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CensusblockComponent = /** @class */ (function () {
    function CensusblockComponent(censusblockService, blockService, userService) {
        this.censusblockService = censusblockService;
        this.blockService = blockService;
        this.userService = userService;
        this.pickedBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //tractblock:string;
        this.alluserconstant = 'All Users';
        this.allstatusconstant = 'Any Status';
        this.blockstatuses = [this.allstatusconstant, 'Ready for QC', 'QC In Progress', 'QC Complete', 'In Progress', 'blank'];
        this.blockcriterion = ['Status', 'User'];
        this.showallblocks = false;
        //TODO remove all reference to this temp variable
        this.skipsection = true;
    }
    CensusblockComponent.prototype.ngOnInit = function () {
        this.getCensusblocks();
        this.getBlocks();
        this.getUsers();
    };
    CensusblockComponent.prototype.getCensusblocks = function () {
        var _this = this;
        this.censusblockService.getCensusblocks()
            .subscribe(function (censusblocks) {
            _this.censusblocks = censusblocks;
            //objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));
            _this.censusblocks.sort(function (a, b) { return a.geoid10.toString().localeCompare(b.geoid10.toString()); });
            _this.states = Array.from(new Set(_this.censusblocks.map(function (item) { return item.state; })));
        });
    };
    CensusblockComponent.prototype.getBlocks = function () {
        var _this = this;
        this.blockService.getAllBlocks()
            .subscribe(function (blocks) {
            _this.blocks = blocks;
        });
    };
    CensusblockComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            var blank = [{ 'email': '', 'username': _this.alluserconstant, 'firstname': '', 'lastname': '', 'type': '', 'password': '', 'cpassword': '' }];
            _this.blockUsers = blank.concat(users);
        });
    };
    CensusblockComponent.prototype.selectedBlock = function (block) {
        console.log('start of SelectedBlock: ', block, Date());
        this.pickedBlock.emit(block);
        console.log('end of SelectedBlock: ', Date());
    };
    CensusblockComponent.prototype.updateCountyList = function (state) {
        //filter by state
        var blank = [""];
        var tmp = this.censusblocks.filter(function (x) {
            return x.state == state;
        });
        //only return unique
        this.counties = blank.concat(Array.from(new Set(tmp.map(function (item) { return item.county; }))));
        //console.log ('length of list filtered by state ' + tmp.length + ' and length of counties is ' + this.counties.length);
    };
    CensusblockComponent.prototype.updateTractList = function (county, state) {
        var _this = this;
        //console.log('in updatecountylist county is ' + county + ' and state is ' + state);
        //filter by county and state
        var blank = [""];
        var tmp = this.censusblocks.filter(function (x) { return x.county == county; })
            .filter(function (x) { return x.state == state; });
        //filter out done if showallblocks is not checked
        console.log('new block status', this.blocks.find(function (s) { return s.block == '530330042002002'; }));
        if (!this.showallblocks) {
            var tmpdoneBlocksobj = this.blocks.filter(function (x) {
                return _this.blockstatuses.indexOf(x.blockstatus) < 4 && _this.blockstatuses.indexOf(x.blockstatus) > 0;
            });
            var tmpdoneBlocks_1 = Array.from(new Set(tmpdoneBlocksobj.map(function (item) { return item.block; })));
            tmp = tmp.filter(function (x) {
                return !(tmpdoneBlocks_1.indexOf(String(x.geoid10)) != -1);
            });
            //console.log("tmpdoneblocks", tmpdoneBlocks, 'tmp is',tmp);
        }
        //only return unique    
        this.tractblocks = blank.concat(Array.from(new Set(tmp.map(function (item) { return item.tractblock; }))));
        //this.tractblock = null;
        //console.log ('length of list filtered by state ' + tmp.length + ' and length of counties is ' + this.tractblocks.length);
    };
    CensusblockComponent.prototype.updateBlockStatusList = function (status) {
        var _this = this;
        //filter by status
        console.log('in updateblocklist', status);
        var blank = [{ 'block': "" }];
        //this.getBlocks(); //it would be nice to only call this if new blocks have been added
        if (this.blocks) {
            this.blocksbyStatus = blank.concat(this.blocks.filter(function (x) {
                if (_this.blockstatuses.indexOf(status) == 4) {
                    //console.log('in undefined:', x.blockstatus);
                    return !x.blockstatus;
                }
                else {
                    return x.blockstatus == status;
                }
            }));
        }
        else {
            return null;
        }
        console.log('in updateblocklist length', this.blocksbyStatus.length);
    };
    CensusblockComponent.prototype.updateBlockUserList = function (user) {
        //filter by status
        console.log('in updateBlockUserList', user);
        var blank = [{ 'block': "" }];
        //this.getBlocks(); //it would be nice to only call this if new blocks have been added
        if (this.blocks) {
            this.blocksbyUser = blank.concat(this.blocks.filter(function (x) {
                return x.cataloger == user;
            }));
        }
        else {
            return null;
        }
        console.log('in updateblocklist length', this.blocksbyUser.length);
    };
    CensusblockComponent.prototype.updateBlockUserStatusList = function (status, user) {
        var _this = this;
        //filter by status
        console.log('in updateBlockUserStatusList', status, user);
        var blank = [{ 'block': "" }];
        //this.getBlocks(); //it would be nice to only call this if new blocks have been added
        if (this.blocks) {
            this.blocksbyUserStatus = blank.concat(this.blocks
                .filter(function (x) {
                if (status == _this.allstatusconstant) {
                    return x;
                }
                else {
                    return x.blockstatus == status;
                }
            })
                .filter(function (x) {
                if (user == _this.alluserconstant) {
                    return x;
                }
                else {
                    return x.cataloger == user;
                }
            }));
            this.blocksbyUserStatus.sort(function (a, b) { return a.block.toString().localeCompare(b.block.toString()); });
        }
        else {
            return null;
        }
        console.log('in updateBlockUserStatusList length', this.blocksbyUserStatus.length);
    };
    CensusblockComponent.prototype.gotoTrackBlock = function (state, county, tractblock) {
        var tmp = this.censusblocks
            .filter(function (x) { return x.county == county; })
            .filter(function (x) { return x.state == state; })
            .filter(function (x) { return x.tractblock == tractblock; });
        this.selectedBlock(tmp[0].geoid10);
    };
    Object.defineProperty(CensusblockComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.tractblocks); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CensusblockComponent.prototype, "pickedBlock", void 0);
    CensusblockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-censusblock',
            template: __webpack_require__(/*! ./censusblock.component.html */ "./src/app/censusblock/censusblock.component.html"),
            styles: [__webpack_require__(/*! ./censusblock.component.css */ "./src/app/censusblock/censusblock.component.css")]
        }),
        __metadata("design:paramtypes", [_services_censusblock_service__WEBPACK_IMPORTED_MODULE_1__["CensusblockService"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], CensusblockComponent);
    return CensusblockComponent;
}());



/***/ }),

/***/ "./src/app/fusiontabledata.service.ts":
/*!********************************************!*\
  !*** ./src/app/fusiontabledata.service.ts ***!
  \********************************************/
/*! exports provided: FusiontabledataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusiontabledataService", function() { return FusiontabledataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _fusiontabledata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fusiontabledata */ "./src/app/fusiontabledata.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FusiontabledataService = /** @class */ (function () {
    //geometry:any;
    function FusiontabledataService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.urlBase = 'https://www.googleapis.com/fusiontables/v2/query?sql=SELECT+geometry+FROM+1UuMuU8demcoaoW2pIVc1P8nsD_YhpOzfa5RRsGwk+WHERE+name='; // URL to web api
    }
    /** GET fusiontable data from the server */
    FusiontabledataService.prototype.getFusionTableData = function (geoid) {
        var _this = this;
        this.fusionUrl = this.urlBase + geoid + '&key=AIzaSyBdxTJFQjbFwatyJX71blXQK7JVPXLdQVQ';
        //console.log('in get fusion table data id is ' , geoid , ' and url is ' , this.fusionUrl);
        return this.http.get(this.fusionUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (fusiontable) { return _this.log('fetched fusion table data'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFusionTableData', new _fusiontabledata__WEBPACK_IMPORTED_MODULE_5__["FusionData"]())));
    };
    /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
    FusiontabledataService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    FusiontabledataService.prototype.log = function (message) {
        this.messageService.add("FusiontabledataService: " + message);
    };
    FusiontabledataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], FusiontabledataService);
    return FusiontabledataService;
}());



/***/ }),

/***/ "./src/app/fusiontabledata.ts":
/*!************************************!*\
  !*** ./src/app/fusiontabledata.ts ***!
  \************************************/
/*! exports provided: FusionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusionData", function() { return FusionData; });
var FusionData = /** @class */ (function () {
    function FusionData() {
    }
    return FusionData;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        //awsapibase: string = 'https://zbm6lu962h.execute-api.us-west-2.amazonaws.com/test/';  //points to dev version on 54
        this.awsapibase = 'https://qcmokvl5vg.execute-api.us-west-2.amazonaws.com/test/'; //points to public version on 34
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/gmap/gmap.component.css":
/*!*****************************************!*\
  !*** ./src/app/gmap/gmap.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n#ToggleLayerBoxes {\r\n  position: absolute;\r\n  top: 80px;\r\n  left: 20px;\r\n  background-color: white;\r\n}\r\n\r\n#info-box {\r\n  background-color: white;\r\n  border: 1px solid black;\r\n  top: 10px;\r\n  padding: 5px; \r\n  position: absolute;\r\n  left: 600px;\r\n}\r\n\r\n.site-row {\r\n  cursor: pointer;\r\n}\r\n\r\n.site-row:hover {\r\n  background-color: #ececec;\r\n}\r\n\r\n.data-container {\r\n  position: relative;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #eee;\r\n  width: 100%;\r\n}\r\n\r\n.data-sidenav {\r\n  width: 400px;\r\n}\r\n\r\n/*map stuff \r\nold in html listing style=\"width:100%;height:1000px\"\r\n*/\r\n\r\n.embed-responsive {\r\n  position: relative;\r\n  padding-bottom: 45%; /* This is the aspect ratio  was 50% */\r\n  height: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.embed-responsive-item {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%; /* !important */\r\n  /*height: 100%;  !important */\r\n}\r\n\r\n/* Everything but the jumbotron gets side spacing for mobile first views */\r\n\r\n/*\r\n.flags\r\n {\r\n  padding-left: 5px; \r\n}\r\n*/\r\n\r\n.form-check-inline{\r\n  padding-left: 5px;\r\n}\r\n\r\n.btn{\r\n  margin-left : 5px;  \r\n}\r\n\r\n.inline-block{\r\n  margin-left: 5px;\r\n}\r\n\r\n/* color legend  */\r\n\r\n.square {\r\n  float: right; \r\n  /*position: absolute;\r\n  top: 10px;\r\n  left: 120px; \r\n  */\r\n  height: 20px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n}\r\n\r\n/* ['#1E90FF', '#FF1493', '#32CD32', '#FFFF00', '#4B0082']; */\r\n\r\n.cbsa {\r\n  background: dodgerblue;\r\n  width: 50px;\r\n}\r\n\r\n.rbsa {\r\n  background:plum;\r\n  width: 50px;\r\n}\r\n\r\n.rescom {\r\n  background: green;\r\n  width: 70px;\r\n}\r\n\r\n.nonres {\r\n  background: yellow;\r\n  width: 60px;\r\n  /*color: #eee; */\r\n}\r\n\r\n.restall {\r\n  background: burlywood;\r\n  width: 60px;\r\n}\r\n\r\n/* row content inline-block */"

/***/ }),

/***/ "./src/app/gmap/gmap.component.html":
/*!******************************************!*\
  !*** ./src/app/gmap/gmap.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Diagnostic Data: {{diagnostic}} --> \r\n<mat-sidenav-container class=\"data-container\" hasBackdrop=false mode=\"over\" >\r\n  <!-- Side Panel -->  \r\n  <mat-sidenav  #sidenav mode=\"side\" class=\"data-sidenav\" position=\"end\">\r\n    <div>\r\n      <button (click)='deleteShape()' class='btn btn-danger'>Delete Selected Polygon</button>\r\n    </div>\r\n    <app-block #blockComponent [block]=\"block && block[0]\"\r\n      (removeLight)=\"onRemoveLight($event)\"\r\n      (highlightLight)=\"onHighlightLight($event)\"\r\n      ></app-block>\r\n    <mat-expansion-panel> <!-- Start of Site table panel-->\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            Site List\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            <span *ngIf=\"siteList?.length\">     \r\n                <span i18n> {siteList?.length, plural, =0 {No Sites} =1 {1 Site} other {{{siteList?.length}} Sites}}</span>\r\n              </span>\r\n              <span *ngIf=\"!(siteList?.length)\">No Sites</span>           \r\n           Coverage: {{getBlockCoverage()}}%\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header> \r\n      <button class=\"btn btn-primary btn-sm\" (click)=\"site.addNewSite()\">Add Site</button>\r\n      <button class=\"btn btn-danger btn-sm\" (click)=\"deleteAllSites()\">Delete All Sites</button>\r\n      <!-- <table border=\"1\" style=\"text-align: center\" cellpadding=\"3\" cellspacing=\"0\"> -->\r\n      <table style=\"text-align: center\" cellpadding=\"3\" cellspacing=\"0\">\r\n        <tr>\r\n          <th>Site ID</th>\r\n          <th>Area</th>\r\n          <th>Percent of block area</th>\r\n          <th>Completed</th>\r\n        </tr>\r\n        <tr *ngFor=\"let site of siteList\" (click)=\"changeSite(site.siteID)\" class=\"site-row\">\r\n          <td>{{site.siteID}}</td>\r\n          <td>{{getTotalOfSiteArea(site)}}</td>\r\n          <!--<td>{{Math.round(getTotalOfSiteArea(site) / (this.block[0].cbarea * 0.01))}}%</td>  Round doesn't work-->\r\n          <td>{{getTotalOfSiteArea(site) / (this.block[0].cbarea * 0.01 * conversionM2toF2) | number:'1.0-0'}}%</td>\r\n          <td>{{site.sitecomplete ? 'yes' : null}}</td>\r\n        </tr>\r\n      </table>\r\n    </mat-expansion-panel> <!-- End of Site table panel-->\r\n    <app-site #site\r\n      [site]=\"selectedSite\" \r\n      [block]=\"block && block[0]\" \r\n      (highlightParcel)=\"highlightParcel($event)\"\r\n      (addSite)=\"addSite($event)\"\r\n      (removeParcel)=\"onRemoveParcel($event)\"\r\n      (onDeleteSite)= \"onDeleteSite($event)\"\r\n      (updateSiteMapRelated) = \"refreshSite($event)\"\r\n      (removePlace) = \"onRemovePlace($event)\"\r\n      ></app-site>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <p>\r\n      <label class=\"form-check-inline\">\r\n        <input type=\"checkbox\" class=\"checkbox-list\" id=\"toggleBlockpicker\" [(ngModel)]=\"pickblock\" >Show Block Picker (map is slower when it's on)\r\n      </label>\r\n    </p>\r\n    <div id=\"blockpicker\" *ngIf=\"pickblock\" > \r\n      <app-censusblock (pickedBlock)=\"onPickedBlock($event)\"></app-censusblock>\r\n    </div>\r\n\r\n    <p></p>\r\n    <!-- color legend -->\r\n    <!--\r\n    <div id='colorlegend'>\r\n      <div class='square cbsa'>CBSA</div>\r\n      <div class='square rbsa'>RBSA</div>\r\n      <div class='square rescom'>Res Com</div>\r\n      <div class='square nonres'>NonRes</div>\r\n      <div class='square restall'>Res Tall</div>\r\n    </div>\r\n    -->\r\n\r\n    <div class=\"row content inline-block flags\">\r\n      <button class=\"btn btn-secondary\" (click)=\"removeAllParcelExplore()\">Clear All</button>\r\n      <label class=\"form-check-inline\">\r\n        <input type=\"checkbox\" class=\"checkbox-list\" id=\"showParcelInfo\" [(ngModel)]=\"showParcelInfo\">Show Info window  \r\n      </label>\r\n      <!--\r\n      <label class=\"form-check-inline\">\r\n        <input type=\"checkbox\" class=\"checkbox-list\" id=\"exploreParcel\" [(ngModel)]=\"exploreParcel\" >Parcel Explore \r\n      </label>\r\n      <label class=\"form-check-inline\">\r\n        <input type=\"checkbox\" class=\"checkbox-list\" id=\"addParcelInfo\" [(ngModel)]=\"addParcelInfo\" >Add Item to Site  \r\n      </label>      \r\n      <label class=\"form-check-inline\">\r\n        <input type=\"checkbox\" class=\"checkbox-list\" id=\"addGooglePlace\" [(ngModel)]=\"addGooglePlace\" >Add Google Places\r\n      </label>\r\n      -->\r\n      <button class=\"btn btn-primary btn-sm\" (click)=\"addParcelstoSite()\">Add Parcels to Site</button>\r\n      <button type=\"button\" md-button  class=\"btn btn-info\" (click)=\"sidenav.toggle()\">\r\n          Open Data Menu >>\r\n        </button> \r\n    </div>\r\n    <div class=\"row content inline-block data\">\r\n      <span *ngFor= \"let parcel of parcelExploreData; let i = index\">\r\n        <textarea rows=\"5\" cols=\"30\" id=\"parceldata\" > {{parcel.info}}</textarea>\r\n        <button class=\"delete\" title=\"delete parcel {{parcel.id}}\" (click)=\"removeParcelExplore(i)\">X</button>\r\n      </span>\r\n      <!-- <div id=\"parcelexplore\" *ngfor=\"let parcel of ParcelExploreData; let i = index\">\r\n          <textarea rows=\"5\" cols=\"30\" id=\"parceldata\" > {{parcel.info}}</textarea>\r\n          <button class=\"remove\" (click)=\"removeParcelExplore(i)\">Delete</button>\r\n      </div> -->\r\n    </div> <!-- End of parcel row content -->\r\n\r\n    <!-- Original Google map-->\r\n    <!--<div #gmap style=\"width:100%;height:600px\" ></div> -->\r\n\r\n    <!-- Map  -->\r\n    <div class=\"row content\">\r\n       \r\n      <!-- Google Map -->\r\n      <div class=\"col-md-12 relative\">\r\n        <!--<div id=\"map\" style=\"width:645px; height:645px\"></div> -->\r\n        <!--  <div class=\"embed-responsive embed-responsive-16by9\">  -->\r\n        <div class=\"embed-responsive\">\r\n          <div #gmap  class=\"embed-responsive-item\"></div>\r\n        </div>\r\n       \r\n        <!-- layer checkboxes-->\r\n        <div id=\"ToggleLayerBoxes\">                \r\n          <input type=\"checkbox\" id=\"toggleBlocklayer\" [(ngModel)]=\"toggleblocklayer\" (change)=\"toggleBlockLayer()\">Block<br>\r\n          <input type=\"checkbox\" id=\"togglepolys\" [(ngModel)]=\"togglepolys\" (change)=\"togglePolys()\">Polys<br>\r\n          <input type=\"checkbox\" id=\"togglefeatures\" [(ngModel)]=\"togglefeatures\" (change)=\"toggleFeatures()\">Parcels<br>\r\n          <input type=\"checkbox\" id=\"togglelights\" [(ngModel)]=\"togglelights\" (change)=\"toggleLights()\">Lights<br>\r\n          <input type=\"checkbox\" id=\"toggleplaces\" [(ngModel)]=\"toggleplaces\" (change)=\"togglePlaces()\">Places<br>\r\n         <!-- <input type=\"checkbox\" id=\"togglegglplaces\" [(ngModel)]=\"togglegglplaces\" (change)=\"toggleGglPlaces()\">Places (Ggl)<br> -->\r\n          <input type=\"checkbox\" id=\"toggleparcels\" [(ngModel)]=\"toggleparcels\" (change)=\"toggleParcelLayer()\">Parcel Grid<br>\r\n        </div>\r\n        <div id=\"info-box\" *ngIf=\"parcelInfo\" [innerHTML]=\"parcelInfo\"></div>\r\n      </div>      \r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/gmap/gmap.component.ts":
/*!****************************************!*\
  !*** ./src/app/gmap/gmap.component.ts ***!
  \****************************************/
/*! exports provided: GmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapComponent", function() { return GmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_client_parcel_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models_client/parcel.model */ "./src/app/models_client/parcel.model.ts");
/* harmony import */ var _services_censusblock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/censusblock.service */ "./src/app/services/censusblock.service.ts");
/* harmony import */ var _fusiontabledata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fusiontabledata.service */ "./src/app/fusiontabledata.service.ts");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _services_site_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/site.model */ "./src/app/services/site.model.ts");
/* harmony import */ var _services_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/block */ "./src/app/services/block.ts");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../site/site.component */ "./src/app/site/site.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />












//to get the Reportall REP working
var useREP = true;
var GmapComponent = /** @class */ (function () {
    //class constructor injecting stuff
    function GmapComponent(changeDetector, censusblockService, fusiontabledataService, siteService, blockService, userService, dialog) {
        var _this = this;
        this.changeDetector = changeDetector;
        this.censusblockService = censusblockService;
        this.fusiontabledataService = fusiontabledataService;
        this.siteService = siteService;
        this.blockService = blockService;
        this.userService = userService;
        this.dialog = dialog;
        this.noSiteText = 'no site id yet';
        this.skipAdd = false; //for dialog answer
        this.conversionM2toF2 = 10.7639104;
        this.shouldRun = true;
        this.debugmode = true;
        this.gglid = 1;
        // Selected Location (initialize to Seattle)
        this.selectedLat = 46.073;
        this.selectedLong = -118.368;
        this.selectedBlock = 530719205001030;
        this.selectedID = 0;
        this.currentZoom = 17;
        this.showParcelInfo = false;
        this.exploreParcel = true;
        this.addParcelInfo = false;
        this.addGooglePlace = true;
        this.pickblock = true;
        //Report all variables
        this.infoWindow = null;
        this.mapFeatures = [];
        //Layers
        this.layers = [];
        this.toggleblocklayer = true;
        this.togglepolys = true;
        this.togglefeatures = true;
        this.toggleparcels = true;
        this.togglelights = true;
        this.toggleplaces = true;
        this.togglegglplaces = true;
        this.parcelInfo = '';
        //
        //colors: Array<string> = ['#1E90FF', '#FF1493', '#32CD32', '#FFFF00', '#4B0082'];
        //brown 9E7151
        this.colors = ['dodgerblue', 'plum', 'Green', 'Yellow', 'burlywood', 'Black', 'Gray'];
        /* stop using these unless can find more colors for pin images */
        //https://sites.google.com/site/gmapsdevelopment/
        this.iconImages = [
            //'http://maps.google.com/mapfiles/ms/micons/ltblu-pushpin.png', 
            'http://maps.google.com/mapfiles/ms/micons/blue-pushpin.png',
            'http://maps.google.com/mapfiles/ms/micons/purple-pushpin.png',
            'http://maps.google.com/mapfiles/ms/micons/grn-pushpin.png',
            'http://maps.google.com/mapfiles/ms/micons/ylw-pushpin.png',
            'http://labs.google.com/ridefinder/images/mm_20_brown.png',
            //http://maps.gstatic.com/intl/en_us/mapfiles/marker_brownP.png
            //http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FF1493  //last part is color
            //http://googlemapsmarkers.com
            //http://www.googlemapsmarkers.com/v1/LABEL/FILL COLOR/LABEL COLOR/STROKE COLOR/
            //http://www.googlemapsmarkers.com/v1/A/0099FF/FFFFFF/FF0000/
            'http://maps.google.com/mapfiles/arrow.png', 'http://maps.google.com/mapfiles/arrow.png'
        ];
        //http://maps.google.com/mapfiles/arrow.png
        /*
          markerIconPath: number[] =  [19,0, 24,5, 24,12, 23,13, 23,14, 20,17, 20,18, 19,19, 19,20, 18,21,
          18,22, 17,23, 17,26, 16,27, 16,31, 14,31, 14,26, 13,25, 13,23,
          12,22, 12,20, 10,18, 10,17, 7,14, 7,13, 6,12, 6,6, 7,5, 7,4, 11,0];
          */
        this.markerIconPath = 'M 0,0 -1,-2 V -43 H 1 V -2 z M 1,-40 H 30 V -20 H 1 z'; //Flag
        //path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z', //solid marker
        //https://stackoverflow.com/questions/33321440/google-maps-api-add-custom-svg-marker-with-label  //for putting label origin and anchor
        this.bldgColor = 'rgb(255, 128, 255)';
        this.parcelColor = 'rgb(144,238,144)';
        this.highlightOpacity = 0.5;
        this.baseOpacity = 0.2;
        this.baseStrokeWeight = 2;
        this.selectOpacity = 0.3;
        this.siteList = [];
        this.colorButtons = {};
        this.lightIconPath = google.maps.SymbolPath.BACKWARD_OPEN_ARROW;
        this.lightIconUrl = 'http://maps.google.com/mapfiles/ms/micons/sunny.png';
        this.lightIconScale = 3;
        this.lightIconColor = 'yellow';
        this.greenMarkerUrl = 'http://labs.google.com/ridefinder/images/mm_20_green.png';
        this.redMarkerUrl = 'http://labs.google.com/ridefinder/images/mm_20_red.png';
        this.gglMarkerUrl = this.redMarkerUrl;
        this.polyOptions = {
            strokeWeight: this.baseStrokeWeight,
            fillOpacity: this.baseOpacity,
            editable: true
        };
        this.markerOptionsLight = {
            icon: {
                path: this.lightIconPath,
                //url: this.lightIconUrl,
                strokeColor: this.lightIconColor,
                scale: this.lightIconScale
            },
            draggable: true
        };
        this.markerOptionsPlace = {
            /*
            icon: {
              //path: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
              url: 'http://maps.google.com/mapfiles/arrow.png'
              //path: this.markerIconPath
              //strokeColor: this.lightIconColor,
              //scale:this.lightIconScale
            },
            */
            draggable: true
        };
        this.markerOptionsSitePlace = {
            path: this.markerIconPath,
            //url: this.greenMarkerUrl,
            fillOpacity: 1,
            strokeColor: 'purple',
            strokeWeight: 2,
        };
        this.isHidden = false;
        this.lightmarkers = {
            collection: {},
            add: function (e, id) {
                if (id === void 0) { id = null; }
                var marker = e.overlay, that = _this;
                marker.type = e.type;
                if (id === null) {
                    marker.id = new Date().getTime() + '_' + Math.floor(Math.random() * 1000);
                }
                else {
                    marker.id = id;
                }
                marker.title = marker.id;
                marker.lightid = marker.id;
                marker.setMap(_this.map);
                //marker.set('title',marker.id);
                //console.log('in light add title:',marker.title, marker);
                var newLight = {
                    lightid: marker.id,
                    lat: marker.getPosition().lat(),
                    long: marker.getPosition().lng()
                };
                _this.addLightMarkerListeners(marker);
                if (_this.block && _this.block[0] && _this.block[0].block) {
                    _this.lightmarkers.collection[marker.id] = marker;
                    //if (!this.block[0].lights){
                    if (!_this.blockcomponent.model.lights) {
                        //this.block[0].lights = [] as any;
                        _this.blockcomponent.model.lights = [];
                    }
                    if (!id) {
                        //this.block[0].lights.push(newLight);
                        _this.blockcomponent.model.lights.push(newLight);
                    }
                    //console.log('block status:', this.blockcomponent.model.blockstatus);
                    if (!_this.blockcomponent.model.blockstatus) {
                        //this.block[0].blockstatus = 'In Progress';
                        console.log('setting blockstatus');
                        _this.blockcomponent.model.blockstatus = 'In Progress';
                    }
                    //this.blockService.updateBlock(this.blockcomponent.model); 
                }
                _this.changeDetector.detectChanges();
            },
            updateLocation: function (marker) {
                //var light = this.lightmarkers.collection[marker.lightid];
                console.log('in updateLocation, marker:', marker, 'collection', _this.lightmarkers.collection);
                var lightid = marker.lightid;
                //update in data
                var myblock = _this.block[0];
                if (myblock.lights) {
                    for (var i = 0; i < myblock.lights.length; i++) {
                        console.log('in update light ', myblock.lights[i].lightid, lightid);
                        if (myblock.lights[i].lightid === lightid) {
                            console.log('in matching light ', i);
                            myblock.lights[i].lat = marker.getPosition().lat();
                            myblock.lights[i].long = marker.getPosition().lng();
                            _this.blockService.updateBlock(myblock).subscribe(function () { });
                        }
                    }
                }
                _this.changeDetector.detectChanges();
            },
            delete: function (lightid) {
                console.log('in deletemarker, block lights:', lightid);
                _this.lightmarkers.collection[lightid].setMap(null);
                delete _this.lightmarkers.collection[lightid];
                //delete from data
                var myblock = _this.block[0];
                if (myblock.lights) {
                    for (var i = 0; i < myblock.lights.length; i++) {
                        if (myblock.lights[i].lightid === lightid) {
                            myblock.lights.splice(i, 1);
                            if (myblock.lights) {
                                myblock.lightcount = myblock.lights.length;
                            }
                            else
                                myblock.lightcount = 0;
                            //console.log('in light delete after splice', myblock.lights, myblock);
                            _this.blockService.updateBlock(myblock).subscribe(function () { });
                        }
                    }
                }
                _this.changeDetector.detectChanges();
            },
            hideAll: function () {
                var light;
                var mylights = _this.lightmarkers.collection;
                for (var key in mylights) {
                    if (mylights.hasOwnProperty(key)) {
                        light = mylights[key];
                        light.setMap(null);
                    }
                }
            },
            showAll: function () {
                var light;
                var mylights = _this.lightmarkers.collection;
                for (var key in mylights) {
                    if (mylights.hasOwnProperty(key)) {
                        light = mylights[key];
                        light.setMap(_this.map);
                    }
                }
            },
            clearAll: function () {
                var light;
                var mylights = _this.lightmarkers.collection;
                for (var key in mylights) {
                    if (mylights.hasOwnProperty(key)) {
                        light = mylights[key];
                        light.setMap(null);
                    }
                }
                _this.lightmarkers.collection = {};
            },
            highlight: function (lightid) {
                console.log('in highlight light', lightid);
                var light;
                var mylights = _this.lightmarkers.collection;
                for (var key in mylights) {
                    if (mylights.hasOwnProperty(key)) {
                        light = mylights[key];
                        console.log('in highlight light', lightid, light);
                        if (light.lightid == lightid) {
                            light.setOptions({
                                icon: {
                                    path: _this.lightIconPath,
                                    strokeColor: 'Fuchsia',
                                    scale: _this.lightIconScale
                                }
                            });
                        }
                        else {
                            light.setOptions({
                                icon: {
                                    path: _this.lightIconPath,
                                    strokeColor: _this.lightIconColor,
                                    scale: _this.lightIconScale
                                }
                            });
                        }
                        light.setMap(_this.map);
                    }
                }
            },
        };
        this.shapes = {
            collection: {},
            selectedShape: null,
            add: function (e, siteID, newSite) {
                if (newSite === void 0) { newSite = false; }
                //console.log('this.collection beginning of add is ' + this.shapes.collection);
                var shape = e.overlay, that = _this;
                shape.type = e.type;
                shape.id = new Date().getTime() + '_' + Math.floor(Math.random() * 1000);
                if (!siteID) {
                    _this.shapes.setSelection(shape);
                }
                else {
                    shape.set('draggable', false);
                    shape.set('editable', false);
                }
                _this.addPolyListeners(shape);
                if (_this.block && _this.block[0] && _this.block[0].block && (!siteID || newSite)) {
                    var newSiteID = _this.getNewSiteID();
                    var SiteData = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](newSiteID, 'current user', _this.block[0].block.toString());
                    SiteData.updated_at = Date.now();
                    SiteData.path = _this.getPath(shape);
                    SiteData.patharea = _this.getArea(shape).toString();
                    _this.siteService.updateSite(SiteData).subscribe(function () {
                        _this.selectedSite = SiteData;
                        _this.siteList.push(SiteData);
                        shape.siteID = newSiteID;
                        console.log('in shapes.add final shape new siteid', shape.siteID);
                        _this.shapes.collection[shape.id] = shape;
                        _this.changeDetector.detectChanges();
                    });
                }
                else {
                    if (siteID)
                        shape.siteID = siteID;
                    console.log('in shapes.add final shape existing siteid', shape.siteID);
                    _this.shapes.collection[shape.id] = shape;
                }
            },
            addexisting: function (e, id) {
                var shape = e, that = this;
                shape.id = id;
                this.collection[shape.id] = shape;
                this.addPolyListeners(shape);
            },
            setSelection: function (shape) {
                if (_this.shapes.selectedShape !== shape) {
                    _this.shapes.clearSelection();
                    _this.shapes.selectedShape = shape;
                    if (shape.siteID) {
                        _this.shapes.highlight(shape.siteID);
                        //Causing loop
                        //this.changeSite(shape.siteID);
                    }
                    shape.set('draggable', true);
                    shape.set('editable', true);
                }
            },
            deleteSelected: function () {
                if (_this.shapes.selectedShape) {
                    var shape = _this.shapes.selectedShape;
                    var siteOfShape = _this.siteList.find(function (s) { return s.siteID.toString() === shape.siteID.toString(); });
                    if (siteOfShape) {
                        siteOfShape.path = null;
                        siteOfShape.patharea = null;
                        _this.siteService.updateSite(siteOfShape).subscribe(function () { });
                    }
                    _this.shapes.clearSelection();
                    shape.setMap(null);
                    delete _this.shapes.collection[shape.id];
                }
            },
            deleteShape: function (shape) {
                var siteOfShape = _this.siteList.find(function (s) { return s.siteID.toString() === shape.siteID.toString(); });
                if (siteOfShape) {
                    siteOfShape.path = null;
                    siteOfShape.patharea = null;
                    _this.siteService.updateSite(siteOfShape).subscribe(function () { });
                }
                //this.shapes.clearSelection();
                shape.setMap(null);
                delete _this.shapes.collection[shape.id];
            },
            deleteAll: function () {
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
                _this.shapes.collection = {};
            },
            deleteSiteShape: function (siteid) {
                var shapeid;
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        if (shape.siteID == siteid) {
                            shapeid = shape.id;
                            shape.setMap(null);
                        }
                    }
                }
                delete _this.shapes.collection[shapeid];
            },
            hideAll: function () {
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
            },
            showAll: function () {
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(_this.map);
                    }
                }
            },
            highlight: function (siteid) {
                //console.log('in highlight');
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        if (shape.siteID == siteid) {
                            shape.setOptions({ fillOpacity: _this.highlightOpacity });
                        }
                        else {
                            shape.setOptions({ fillOpacity: _this.baseOpacity });
                        }
                        //console.log('shapes is ', shape);
                        shape.setMap(_this.map);
                    }
                }
            },
            redrawSiteShapes: function (siteid) {
                console.log('in redrawSiteShapes');
                var shape;
                var myshapes = _this.shapes.collection;
                var colorid = _this.getSiteTypeColor(_this.getSiteType(siteid));
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        if (shape.siteID == siteid) {
                            shape.setOptions({ strokeColor: _this.colors[colorid] });
                        }
                        shape.setMap(_this.map);
                    }
                }
            },
            clearSelection: function () {
                if (_this.shapes.selectedShape) {
                    _this.shapes.selectedShape.set('draggable', false);
                    _this.shapes.selectedShape.set('editable', false);
                    _this.shapes.selectedShape = null;
                }
            },
            getSelectedPath: function () {
                if (this.selectedShape) {
                    //var shape = this.selectedShape;                    
                    return this.selectedShape.getPath();
                }
            },
            //This function may not be working as intended.
            getSelectedID: function () {
                if (this.selectedShape) {
                    var shape = this.selectedShape;
                    return this.collection[shape.id].id;
                }
            }
        };
        this.places = {
            collection: {},
            add: function (e, id, siteID) {
                if (siteID === void 0) { siteID = null; }
                console.log('in places add ', e);
                var marker = e, that = _this;
                //marker.setMap(null);  //doesn't work to remove original marker 
                //marker.type = e.type;
                /*
                if (id === null) {
                  console.log('*** uh oh, should not be adding random id, should be placeid', e);
                  marker.id = new Date().getTime() + '_' + Math.floor(Math.random() * 1000);
                } else {
                  */
                marker.id = id;
                //}
                _this.addPlaceListeners(marker);
                if (_this.block && _this.block[0] && _this.block[0].block && (!siteID)) {
                    var newSiteID = _this.getNewSiteID();
                    var SiteData = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](newSiteID, 'current user', _this.block[0].block.toString());
                    SiteData.updated_at = Date.now();
                    _this.siteService.updateSite(SiteData).subscribe(function () {
                        _this.selectedSite = SiteData;
                        _this.siteList.push(SiteData);
                        marker.siteID = newSiteID;
                        _this.places.collection[marker.id] = marker;
                        console.log('in places.add, new site added');
                        _this.changeDetector.detectChanges();
                    });
                }
                else {
                    if (siteID) {
                        marker.siteID = siteID;
                    }
                    marker.setOptions({
                        //title: 'Site ' + siteID.slice(-3) + " - " + marker.name + ': ' + marker.types,
                        icon: __assign({}, _this.markerOptionsSitePlace, { fillColor: _this.colors[_this.getSiteTypeColor(_this.getSiteType(siteID))] })
                    });
                    _this.places.collection[marker.id] = marker;
                }
                marker.setMap(_this.map);
                console.log('at end of places add: collection', _this.places.collection, 'marker', marker);
            },
            deleteAll: function () {
                var place;
                var myplaces = _this.places.collection;
                for (var key in myplaces) {
                    if (myplaces.hasOwnProperty(key)) {
                        place = myplaces[key];
                        place.setMap(null);
                    }
                }
                _this.places.collection = {};
            },
            deleteSiteMarker: function (placeid) {
                var site;
                var place = _this.places.collection[placeid];
                //consider separating out the site removal and just have this be collection removal
                if (place) {
                    console.log('in delsitemkr place from collection passed placeid', placeid, 'collection placeid:', place.id, 'name', place.title, place);
                    site = _this.siteList.find(function (s) { return s.siteID == place.siteID; });
                    if (site && site.places) {
                        console.log('in redrawSiteShapes found site:', site, 'places', _this.places.collection);
                        for (var index = 0; index < site.places.length; index++) {
                            var element = site.places[index];
                            if (element.placeid == place.id) {
                                console.log('deleting place', place.id, 'element name:', element.name, element, 'place title', place.title, place);
                                site.places.splice(index, 1);
                                _this.siteService.updateSite(site).subscribe(function () { });
                                break;
                            }
                        }
                    }
                    _this.places.collection[placeid].setMap(null);
                    delete _this.places.collection[placeid];
                    //detect changes
                    _this.changeDetector.detectChanges();
                }
            },
            updateLocation: function (marker) {
                var site;
                var place = _this.places.collection[marker.id];
                //let colorid:number = this.getSiteTypeColor(this.getSiteType(siteid));
                site = _this.siteList.find(function (s) { return s.siteID == marker.siteID; });
                //console.log('in redrawSiteShapes color', colorid, 'site', site);
                if (site && site.places) {
                    console.log('in redrawSiteShapes found site:', site, 'places', _this.places.collection);
                    for (var index = 0; index < site.places.length; index++) {
                        var element = site.places[index];
                        if (element.placeid = place.id) {
                            console.log('in update location', marker);
                            site.places[index].location = marker.getPosition().lat() + ', ' + marker.getPosition().lng();
                            _this.siteService.updateSite(site).subscribe(function () { });
                            break;
                        }
                    }
                }
                _this.changeDetector.detectChanges();
            },
            hideAll: function () {
                var shape;
                var myshapes = _this.places.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
            },
            showAll: function () {
                var shape;
                var myshapes = _this.places.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(_this.map);
                    }
                }
            },
            clearAll: function () {
                var shape;
                var myshapes = _this.places.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
                _this.places.collection = {};
            },
            highlight: function (siteid) {
                //console.log('in highlight');
                var shape;
                var myshapes = _this.shapes.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        if (shape.siteID == siteid) {
                            shape.setOptions({ fillOpacity: _this.highlightOpacity });
                        }
                        else {
                            shape.setOptions({ fillOpacity: _this.baseOpacity });
                        }
                        //console.log('shapes is ', shape);
                        shape.setMap(_this.map);
                    }
                }
            },
            redrawSitePlaces: function (siteid) {
                var site;
                var place;
                var myplaces = _this.places.collection;
                var colorid = _this.getSiteTypeColor(_this.getSiteType(siteid));
                site = _this.siteList.find(function (s) { return s.siteID == siteid; });
                console.log('in redrawSiteShapes color', colorid, 'site', site);
                if (site && site.places) {
                    console.log('in redrawSiteShapes found site:', site, 'places', _this.places.collection);
                    for (var key in myplaces) {
                        if (myplaces.hasOwnProperty(key)) {
                            place = myplaces[key];
                            console.log('place in found site', site, 'place', place);
                            if (site.places.find(function (p) { return p.placeid == place.id; })) {
                                console.log('found matched site');
                                //place.setOptions({ icon: {url: this.iconImages[colorid]}})            
                                place.setOptions({ icon: __assign({}, _this.markerOptionsSitePlace, { fillColor: _this.colors[colorid] }) });
                            }
                            place.setMap(_this.map);
                        }
                    }
                    _this.changeDetector.detectChanges();
                }
            }
        };
        this.gglmarkers = {
            collection: {},
            add: function (e) {
                //console.log('in gglmarkers add ', e);
                var marker = e;
                marker.googleid = _this.gglid;
                _this.gglid++;
                //this.addPlaceListeners(marker);
                _this.gglmarkers.collection[marker.googleid] = marker;
                //this.changeDetector.detectChanges();
                marker.setMap(_this.map);
                //console.log('at end of places add: collection', this.places.collection, 'marker', marker);
            },
            deleteAll: function () {
                var place;
                var myplaces = _this.gglmarkers.collection;
                for (var key in myplaces) {
                    if (myplaces.hasOwnProperty(key)) {
                        place = myplaces[key];
                        place.setMap(null);
                    }
                }
                _this.gglmarkers.collection = {};
            },
            deleteMarker: function (marker) {
                _this.gglmarkers.collection[marker.googleid].setMap(null);
                delete _this.gglmarkers.collection[marker.googleid];
                //detect changes
                //this.changeDetector.detectChanges();
            },
            hideAll: function () {
                var shape;
                var myshapes = _this.gglmarkers.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
            },
            showAll: function () {
                var shape;
                var myshapes = _this.gglmarkers.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(_this.map);
                    }
                }
            },
            clearAll: function () {
                var shape;
                var myshapes = _this.gglmarkers.collection;
                for (var key in myshapes) {
                    if (myshapes.hasOwnProperty(key)) {
                        shape = myshapes[key];
                        shape.setMap(null);
                    }
                }
                _this.gglmarkers.collection = {};
            }
        };
        this.parcelLayerOptions = {
            name: "Parcels",
            getTileUrl: REP.Layer.Google.parcelsURIConstructor,
            tileSize: new google.maps.Size(256, 256),
            Return_Buildings: true
        };
        this.changeDetector = changeDetector;
    }
    GmapComponent.prototype.ngOnInit = function () {
        ////this.currentUser$ = this.userService.getCurrentUser();
    };
    GmapComponent.prototype.ngAfterViewInit = function () {
        ////this.siteparceldata = this.sitecomponent.model.parcels;
    };
    //ngAfterContentInit(selectedLat, selectedLng, selectedBlock) {
    GmapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        console.log('at start of aftercontentinit', Date());
        google.maps.Polygon.prototype.getBoundingBox = function () {
            var bounds = new google.maps.LatLngBounds();
            this.getPath().forEach(function (element, index) {
                bounds.extend(element);
            });
            return (bounds);
        };
        // Add center calculation method
        google.maps.Polygon.prototype.getApproximateCenter = function () {
            var boundsHeight = 0, boundsWidth = 0, centerPoint, heightIncr = 0, maxSearchLoops, maxSearchSteps = 10, n = 1, northWest, polygonBounds = this.getBoundingBox(), testPos, widthIncr = 0;
            // Get polygon Centroid
            centerPoint = polygonBounds.getCenter();
            if (google.maps.geometry.poly.containsLocation(centerPoint, this)) {
                // Nothing to do Centroid is in polygon use it as is
                return centerPoint;
            }
            else {
                maxSearchLoops = maxSearchSteps / 2;
                // Calculate NorthWest point so we can work out height of polygon NW->SE
                northWest = new google.maps.LatLng(polygonBounds.getNorthEast().lat(), polygonBounds.getSouthWest().lng());
                // Work out how tall and wide the bounds are and what our search increment will be
                boundsHeight = google.maps.geometry.spherical.computeDistanceBetween(northWest, polygonBounds.getSouthWest());
                heightIncr = boundsHeight / maxSearchSteps;
                boundsWidth = google.maps.geometry.spherical.computeDistanceBetween(northWest, polygonBounds.getNorthEast());
                widthIncr = boundsWidth / maxSearchSteps;
                // Expand out from Centroid and find a point within polygon at 0, 90, 180, 270 degrees
                for (; n <= maxSearchLoops; n++) {
                    // Test point North of Centroid
                    testPos = google.maps.geometry.spherical.computeOffset(centerPoint, (heightIncr * n), 0);
                    if (google.maps.geometry.poly.containsLocation(testPos, this)) {
                        break;
                    }
                    // Test point East of Centroid
                    testPos = google.maps.geometry.spherical.computeOffset(centerPoint, (widthIncr * n), 90);
                    if (google.maps.geometry.poly.containsLocation(testPos, this)) {
                        break;
                    }
                    // Test point South of Centroid
                    testPos = google.maps.geometry.spherical.computeOffset(centerPoint, (heightIncr * n), 180);
                    if (google.maps.geometry.poly.containsLocation(testPos, this)) {
                        break;
                    }
                    // Test point West of Centroid
                    testPos = google.maps.geometry.spherical.computeOffset(centerPoint, (widthIncr * n), 270);
                    if (google.maps.geometry.poly.containsLocation(testPos, this)) {
                        break;
                    }
                }
                return (testPos);
            }
        };
        var mapProp = {
            center: new google.maps.LatLng(this.selectedLat, this.selectedLong),
            zoom: 15,
            //mapTypeId: google.maps.MapTypeId.ROADMAP
            mapTypeId: google.maps.MapTypeId.HYBRID,
            tilt: 0,
            scaleControl: true,
            rotateControl: true,
            rotateControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: null,
            drawingControlOptions: {
                drawingModes: ['marker', 'polygon']
                //drawingModes: [, 'polyline', 'polygon']
            },
            markerOptions: this.markerOptionsLight,
            polylineOptions: {
                editable: true
            },
            polygonOptions: this.polyOptions,
            map: this.map
        });
        //this.placesService = new google.maps.places.PlacesService(this.map);
        this.blockLayer = new google.maps.FusionTablesLayer({
            query: {
                //Sample census blocks
                //https://www.google.com/fusiontables/DataSource?docid=181lhJJkYVFl3-SBjZ49gj_DPCNhJTGdhm_-Z0oAg
                select: '\'geometry\'',
                where: 'name = ' + this.selectedBlock,
                from: '1UuMuU8demcoaoW2pIVc1P8nsD_YhpOzfa5RRsGwk'
            },
            options: {
                styleId: 2,
                templateId: 2
            }
        });
        this.blockLayer.setMap(this.map);
        var bingControlDiv = document.createElement('div');
        var bingControl = new this.BingControl(bingControlDiv, this.map);
        //var Control3DDiv = document.createElement('div');
        //var Control3D = new this.Control3D(Control3DDiv, this.map);
        //centerControlDiv.index = 1;
        this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(bingControlDiv);
        //this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(Control3DDiv);
        //Reportall parcel tiles
        if (useREP) {
            REP.Layer.Google.Initialize(this.map, { 'Return_Buildings': true });
        }
        //Have to use arrow function to get around 'this' reference problem    
        google.maps.event.addListener(this.map, 'click', function (e) {
            console.log('in map event click');
            ////////////////////////////report all stuff
            // ----Uncomment below when reportall quota lifted
            if (useREP) {
                if (_this.map.getZoom() < REP.Layer.Google.MIN_ZOOM)
                    return;
            }
            // Close any previous InfoWindow 
            if (_this.infoWindow !== null) {
                _this.infoWindow.close();
                _this.infoWindow = null;
            }
            if (e.placeId) {
                if (!_this.addGooglePlace) {
                    return;
                }
                else {
                    e.stop(); //prevent info window from popping up
                    //this.addPlaceToSite(e.placeId);
                    _this.getPlaceDetails(e.placeId);
                    return;
                }
            }
            var latLng = e.latLng;
            var siteaddr = "";
            var sitemailaddr = "";
            var siteowner = "";
            var siteParcel = "";
            var parcelpath = '';
            var parcelarea;
            //check to see if it's in parcel add/remove mode
            console.log('in map click, selected site:', _this.selectedSite);
            if (_this.addParcelInfo && _this.selectedSite && _this.selectedSite.siteID
                && _this.selectedSite.siteID == _this.noSiteText) {
                _this.selectedSite.siteID = _this.getNewSiteID();
            }
            else {
                //clear features
                // this.clearFeatures(false);
            }
            /* Turn off until get token renewed */
            if (useREP) {
                REP.Layer.Google.IdentifyByPoint(_this.map, latLng, function (resp) {
                    var wText = '';
                    var alreadyAssignedParcel;
                    if (resp.results.length) {
                        var respRow0 = resp.results[0];
                        var uParcelid = respRow0.parcel_id + '__' + respRow0.rausa_id;
                        alreadyAssignedParcel = _this.checkParcelAssigned(uParcelid);
                        console.log('in mapclick alreadyAssignedParcel', alreadyAssignedParcel);
                        for (var respKey in respRow0) {
                            var respVal = respRow0[respKey];
                            if (respVal === null)
                                continue;
                            if (respKey === 'geom' && !alreadyAssignedParcel) {
                                // Add parcel geometry (possibly multiple if multipart) to map.
                                //console.log('selected site',this.selectedSite);                
                                for (var i = 0; i < respVal.length; i++) {
                                    if (_this.addParcelInfo) {
                                        respVal[i].setOptions(__assign({}, _this.getParcelOptions(_this.addParcelInfo ? 1 : 0, _this.addParcelInfo ? _this.getSiteType(_this.selectedSite.siteID) : null), { parcelID: uParcelid, siteID: _this.selectedSite && _this.selectedSite.siteID, owner: respRow0.owner, isHighlight: false }));
                                    }
                                    else {
                                        respVal[i].setOptions(__assign({}, _this.getParcelOptions(_this.addParcelInfo ? 1 : 0, _this.addParcelInfo ? _this.getSiteType(_this.selectedSite.siteID) : null), { parcelID: uParcelid, 
                                            //siteID: this.selectedSite && this.selectedSite.siteID,
                                            owner: respRow0.owner, isHighlight: false }));
                                    }
                                    respVal[i].setMap(_this.map);
                                    //console.log('rep respval:',respVal[i]);
                                    _this.mapFeatures.push(respVal[i]);
                                    _this.addParcelClick(respVal[i]);
                                    _this.addParcelRightClick(respVal[i]);
                                    _this.addParcelMouseOver(respVal[i]);
                                    _this.addParcelMouseOut(respVal[i]);
                                    parcelpath = '';
                                    var pathlength = respVal[i].getPath().getLength();
                                    for (var j = 0; j < pathlength; j++) {
                                        // .toUrlValue(5) limits number of decimals, default is 6 but can do more                   
                                        parcelpath += respVal[i].getPath().getAt(j).toUrlValue() + "; ";
                                    }
                                    parcelpath = parcelpath.slice(0, -2);
                                    //parcelarea = Math.round(google.maps.geometry.spherical.computeArea(respVal[i].getPath()));
                                    parcelarea = _this.getArea(respVal[i]);
                                }
                                /* don't want buildings so skip this
                              } else if (respKey === 'buildings_poly' && !alreadyAssignedParcel) {
                                  // Iterate through each building record.
                                  for (var bldgRecIdx = 0; bldgRecIdx < respVal.length; bldgRecIdx++) {
                                    var bldgRec = respVal[bldgRecIdx];
                                    if (typeof (bldgRec['geom']) === 'undefined' || bldgRec['geom'] === null) continue;
                                    var bldgRecGeoms = bldgRec['geom'];
                                    // Add each building geometry to map.
                                    for (var i = 0; i < bldgRecGeoms.length; i++) {
                                      bldgRecGeoms[i].setOptions({ strokeColor: this.bldgColor, fillOpacity: 0.0, clickable: false, isBldg: true, parcelID: uParcelid, });
                                      bldgRecGeoms[i].setMap(this.map);
                                      this.mapFeatures.push(bldgRecGeoms[i]);
                                    }
                                  }
                                  */
                            }
                            else {
                                if (wText !== '')
                                    wText += '\n<br>';
                                wText += respKey + ': ' + respVal;
                                if (respKey == "parcel_id") {
                                    //siteParcel += " " + respVal;
                                    siteParcel += " " + uParcelid;
                                    siteParcel = siteParcel.trim();
                                }
                                else if (respKey.startsWith('addr') || respKey.startsWith('phys')) {
                                    siteaddr += " " + respVal;
                                    siteaddr = siteaddr.trim();
                                }
                                else if (respKey.startsWith('mail')) {
                                    sitemailaddr += " " + respVal;
                                    sitemailaddr = sitemailaddr.trim();
                                }
                                else if (respKey.startsWith('owner')) {
                                    siteowner += " " + respVal;
                                    siteowner = siteowner.trim();
                                }
                            }
                        }
                        if (siteParcel == "") {
                            siteParcel = uParcelid;
                        }
                        //ugly. I'd rather assign values by attribute
                        //////*****????
                        _this.parcel = new _models_client_parcel_model__WEBPACK_IMPORTED_MODULE_1__["ParcelInfo"](siteParcel, siteaddr, sitemailaddr, siteowner, parcelpath, parcelarea, siteParcel + '\n' + siteowner + '\n' + siteaddr + '\n' + sitemailaddr);
                        if (_this.exploreParcel) {
                            if (typeof _this.parcelExploreData != 'object') {
                                _this.parcelExploreData = [];
                            }
                            _this.parcelExploreData.push(_this.parcel);
                            console.log('parceldata', _this.parcel);
                        }
                        if (_this.addParcelInfo && !alreadyAssignedParcel) {
                            //check to see if this parcel is already on a site
                            console.log('passed parcel free check');
                            var newParcel = {
                                apn: siteParcel,
                                parcelowner: siteowner,
                                parceladdress: siteaddr,
                                parcelowneraddress: sitemailaddr,
                                parcelpath: parcelpath,
                                parcelarea: parcelarea,
                                parcelnotes: ''
                                //parcelnotes: siteParcel + '\n' + siteowner + '\n' + siteaddr + '\n' + sitemailaddr
                            };
                            console.log('in mapclick addParcel', _this.selectedSite);
                            if (_this.selectedSite) {
                                if (!_this.selectedSite.parcels) {
                                    _this.selectedSite.parcels = [];
                                }
                                _this.selectedSite.parcels.push(newParcel);
                                _this.siteService.updateSite(_this.selectedSite).subscribe(function () { });
                            }
                            else if (_this.block && _this.block[0] && _this.block[0].block) {
                                var cataloger_1 = 'user not set :(';
                                if (_this.block[0].cataloger) {
                                    cataloger_1 = _this.block[0].cataloger;
                                }
                                else {
                                    _this.userService.getCurrentUser()
                                        .subscribe(function (user) {
                                        console.log('in map click setting cataloger from current user', user);
                                        cataloger_1 = user.username;
                                    });
                                }
                                var SiteData = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](_this.getNewSiteID(), cataloger_1, _this.block[0].block.toString());
                                SiteData.updated_at = Date.now();
                                SiteData.parcels = [newParcel];
                                _this.siteService.updateSite(SiteData).subscribe(function () {
                                    _this.selectedSite = SiteData;
                                    _this.siteList.push(SiteData);
                                    _this.changeDetector.detectChanges();
                                });
                            }
                        }
                        else if (alreadyAssignedParcel) {
                            //tell user parcel has been assigned to site
                            console.log('parcel available fail');
                        }
                        if (_this.showParcelInfo) {
                            _this.infoWindow = new google.maps.InfoWindow({ position: latLng, content: wText });
                            _this.infoWindow.open(_this.map);
                        }
                        //tell angular stuff changed so it will update
                        _this.changeDetector.detectChanges();
                    }
                }, function (errObj) {
                    alert('REP Overlays error: ' + errObj.message);
                });
            } /* */
            ///////////////////////////////////////////////end report all stuff
        }); //end of map click
        google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (e) {
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                var isNotMarker = (e.type != google.maps.drawing.OverlayType.MARKER);
                // Change back to non-drawing mode after drawing a shape.
                _this.drawingManager.setDrawingMode(null);
            } // end if
            // Add an event listener that selects the newly-drawn shape when the user
            // mouses down on it.
            var createnewsite = false;
            var newShape = e.overlay;
            newShape.type = e.type;
            if (e.type == google.maps.drawing.OverlayType.POLYLINE) {
                var distance = google.maps.geometry.spherical.computeLength(e.overlay.getPath().getArray());
                _this.shapes.add(e, null);
                //add new road to site                      
                //this.streetLength = Math.round(distance * 3.28);
            }
            else if (e.type == google.maps.drawing.OverlayType.MARKER) {
                _this.lightmarkers.add(e);
                if (!_this.block[0].lights) {
                    alert('problem adding light');
                }
                _this.block[0].lightcount = _this.block[0].lights.length;
                //this.blockcomponent
                console.log('in overlay complete marker', e, 'block', _this.block[0]);
                _this.blockService.updateBlock(_this.block[0]).subscribe(function () { });
            }
            else {
                _this.addPolyListeners(newShape); //, isNotMarker);
                //add shape to list
                //not sure if should use selectedsitte or sitelist[0]
                //console.log('in overlaycomplete sitelist is', this.siteList, 'selected site is', this.selectedSite);
                var tmpsiteid = null;
                if (_this.siteList[0].siteID == _this.noSiteText) {
                    _this.siteList[0].siteID = _this.getNewSiteID();
                    tmpsiteid = _this.siteList[0].siteID;
                    createnewsite = false;
                }
                else {
                    if (_this.selectedSite && _this.selectedSite.siteID) {
                        if (_this.selectedSite.path) {
                            //prompt for overwite of exitsint parcel
                            //this.openDialog();
                            var msg = 'Do you want to replace the polygon already associated with this site?';
                            _this.skipAdd = !window.confirm(msg);
                            //if(!window.confirm(msg)){
                            if (_this.skipAdd) {
                                //this.skipAdd = true;
                                e.overlay.setMap(null);
                            }
                            else {
                                tmpsiteid = _this.selectedSite.siteID;
                                //delete current poly
                                _this.shapes.deleteSiteShape(tmpsiteid);
                            }
                        }
                        else {
                            tmpsiteid = _this.selectedSite.siteID;
                        }
                    }
                    //} else{
                    //  tmpsiteid = this.getNewSiteID();
                }
                console.log('after window confirm, skipadd is ', _this.skipAdd, ' site:', tmpsiteid);
                if (!_this.skipAdd) {
                    console.log('create new site:', createnewsite);
                    _this.shapes.add(e, tmpsiteid, createnewsite);
                    //this.polyID = newShape.id;
                    //console.log('newshpae', newShape); 
                    if (!createnewsite) {
                        _this.updatePathVars(newShape);
                    }
                    if (tmpsiteid) {
                        _this.shapes.redrawSiteShapes(tmpsiteid);
                    }
                    _this.changeDetector.detectChanges();
                }
                else {
                }
                //this.changeDetector.detectChanges();
            }
        }); //end of DM overlay complete
    }; //end of ngAfterContentInit
    /*
    openDialog(): void {
      const dialogRef = this.dialog.open(dialogConfirmPolyOverwrite);
      let response:boolean = false;
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.skipAdd = result;
      });
    }
  */
    GmapComponent.prototype.setMapType = function (mapTypeId) {
        this.map.setMapTypeId(mapTypeId);
    };
    GmapComponent.prototype.setCenter = function () {
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: this.selectedBlock.toString(),
        });
        //marker.addListener('click', this.simpleMarkerHandler);
        /*
            marker.addListener('click', () => {
            this.markerHandler(marker);
            });
            */
    };
    GmapComponent.prototype.checkParcelAssigned = function (apn) {
        var siteid = null;
        console.log('in checkParcelAssigned:', apn, this.siteList);
        if (this.siteList) {
            for (var i = 0; i < this.siteList.length; i++) {
                if (this.siteList[i].parcels) {
                    var parcel = this.siteList[i].parcels.find(function (a) { return a.apn === apn; });
                    if (parcel) {
                        siteid = this.siteList[i].siteID;
                        console.log('parcel exists on ', siteid);
                        break;
                    }
                }
            }
        }
        return siteid;
    };
    GmapComponent.prototype.getUserName = function () {
        var cataloger = 'user not set :(';
        if (this.block && this.block[0] && this.block[0].cataloger) {
            cataloger = this.block[0].cataloger;
            return cataloger;
        }
        else {
            this.userService.getCurrentUser()
                .subscribe(function (user) {
                console.log('in getUserName', user);
                cataloger = user.username;
                return cataloger;
            });
        }
    };
    /*
      simpleMarkerHandler() {
        alert('Simple Component\'s function...');
      }
    
      markerHandler(marker: google.maps.Marker) {
        alert('Marker\'s Title: ' + marker.getTitle());
        //alert('Marker\'s Label: ' + marker.getLabel());
      }
    
      showCustomMarker() {
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    
        let location = new google.maps.LatLng(this.latitude, this.longitude);
    
        console.log(`selected marker: ${this.selectedMarkerType}`);
    
        let marker = new google.maps.Marker({
          position: location,
          map: this.map,
          icon: this.iconBase + this.selectedMarkerType,
          title: 'Got you!'
        });
      }
    */
    GmapComponent.prototype.toggleMap = function () {
        this.isHidden = !this.isHidden;
        this.gmapElement.nativeElement.hidden = this.isHidden;
    };
    GmapComponent.prototype.handleLoadBlockSites = function (cbid) {
        var _this = this;
        console.log('in handleloadBlockSites, this:', this);
        var cbs = this.block;
        var index = 0;
        this.gglid = 1;
        this.selectedBlock = parseFloat(cbs[index].block);
        this.selectedLat = cbs[index].cblat;
        this.selectedLong = cbs[index].cblon;
        this.blockLayer.setMap(null); //clear old block
        this.blockLayer = new google.maps.FusionTablesLayer({
            query: {
                select: '\'geometry\'',
                where: 'name = ' + this.selectedBlock,
                from: '1UuMuU8demcoaoW2pIVc1P8nsD_YhpOzfa5RRsGwk'
            },
            options: {
                styleId: 2,
                templateId: 2
            }
        });
        this.blockLayer.setMap(this.map);
        if (this.parcelExploreData) {
            this.parcelExploreData = [];
        }
        console.log('03.0 before fusion call: ', Date());
        //fit to block    
        this.fusiontabledataService.getFusionTableData(this.selectedBlock)
            .subscribe(function (fusiondata) {
            _this.fusiondata = fusiondata;
            _this.setMapBounds();
            //let radius = google.maps.geometry.spherical.computeDistanceBetween (this.map.getBounds().getNorthEast(), this.map.getBounds().getSouthWest())/2;
            console.log('radius', _this.radius, ' bounds', _this.map.getBounds());
            _this.gglmarkers.deleteAll();
            console.log('03.1 at end of fusion subscribe: ', Date());
        });
        console.log('03.2 after fusion call: ', Date());
        //console.log ('in loadblock cbs', cbs);
        //clear old markers
        this.lightmarkers.clearAll();
        //load light markers
        if (cbs[index].lights) {
            cbs[index].lights.forEach(function (l) {
                var newLight = new google.maps.Marker(__assign({ position: new google.maps.LatLng(l.lat, l.long), lightid: l.lightid, title: l.lightid, icon: {
                        path: _this.lightIconPath,
                        strokeColor: _this.lightIconColor,
                        scale: _this.lightIconScale
                    }, map: _this.map }, _this.markerOptionsLight));
                _this.lightmarkers.add({
                    overlay: newLight,
                    type: google.maps.drawing.OverlayType.MARKER
                }, l.lightid);
            });
        }
        this.siteService.getAllSitesByBlock(cbs[index].block).subscribe(function (res) {
            _this.clearFeatures(true);
            _this.shapes.deleteAll();
            _this.places.deleteAll();
            _this.siteList = res;
            if (_this.siteList[0]) {
                _this.selectedSite = _this.siteList[0];
                _this.selectedSiteID = _this.siteList[0].siteID;
                _this.siteList.forEach(function (s) {
                    if (s.path) {
                        var latlongs = [];
                        var pointlist = s.path.split('; ');
                        pointlist.forEach(function (n, i) {
                            latlongs.push(new google.maps.LatLng(n.split(",")[0], n.split(",")[1]));
                        });
                        var newShape = new google.maps.Polygon(__assign({ paths: latlongs, siteID: s.siteID, map: _this.map }, _this.polyOptions, { strokeColor: _this.colors[_this.getSiteTypeColor(s.sitetype)] }));
                        _this.shapes.add({
                            overlay: newShape,
                            type: google.maps.drawing.OverlayType.POLYGON
                        }, s.siteID);
                    }
                    if (s.parcels) {
                        s.parcels.forEach(function (p) {
                            var item = {};
                            var latlongs = [];
                            var pointlist = p.parcelpath.split('; ');
                            pointlist.forEach(function (n, i) {
                                latlongs.push(new google.maps.LatLng(n.split(",")[0], n.split(",")[1]));
                            });
                            //console.log('in loadblocksites site is ',s);
                            var poly = new google.maps.Polygon(__assign({ paths: latlongs, siteID: s.siteID, map: _this.map }, (_this.selectedSiteID === s.siteID ? _this.getParcelOptions(1, s.sitetype) : _this.getParcelOptions(0, s.sitetype)), { parcelID: p.apn, owner: p.parcelowner, isHighlight: false, visible: true }));
                            _this.resetParcelHighlight;
                            item = {
                                overlay: poly,
                                path: p.parcelpath
                            };
                            //console.log('item:', item, ' poly:', poly);
                            _this.mapFeatures.push(poly);
                            _this.addParcelClick(poly);
                            _this.addParcelRightClick(poly);
                            _this.addParcelMouseOver(poly);
                            _this.addParcelMouseOut(poly);
                        });
                    }
                    if (s.places) {
                        console.log('places in getallsitesbyblock', s.places);
                        s.places.forEach(function (p) {
                            var item = {};
                            var latlongs = [];
                            if (p.location) {
                                latlongs = p.location.split(', ');
                            }
                            //console.log('in loadblocksites site is ',s);
                            var marker = new google.maps.Marker(__assign({ map: _this.map, position: new google.maps.LatLng(latlongs[0], latlongs[1]), title: 'Site ' + s.siteID.slice(-3) + " - " + p.name + ': ' + p.types }, _this.markerOptionsPlace, { icon: __assign({}, _this.markerOptionsSitePlace, { fillColor: _this.colors[_this.getSiteTypeColor(s.sitetype)] }), id: p.placeid }));
                            _this.places.add(marker, p.placeid, s.siteID);
                            _this.addPlaceListeners(marker);
                        });
                    }
                });
            }
            else {
                _this.siteList[0] = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](_this.noSiteText, _this.block[0].cataloger, _this.block[0].block);
                _this.selectedSite = _this.siteList[0];
                _this.selectedSiteID = _this.siteList[0].siteID;
            }
        });
        console.log('03.9 end of handleLoadBlockSites: ', Date());
        //console.log('end of handleLoadBlockSites');    
    };
    GmapComponent.prototype.setMapBounds = function () {
        if (typeof this.fusiondata != 'undefined') {
            //this.bounds = new google.maps.LatLngBounds();
            var bounds_1 = new google.maps.LatLngBounds();
            var loc_1;
            if (this.fusiondata.rows && this.fusiondata.rows[0] && this.fusiondata.rows[0][0]) {
                this.fusiondata.rows[0][0].geometry.coordinates[0].forEach(function (point) {
                    //console.log(point);
                    loc_1 = new google.maps.LatLng(point[1], point[0]);
                    bounds_1.extend(loc_1);
                });
            }
            console.log('bounds:', bounds_1);
            this.radius = google.maps.geometry.spherical.computeDistanceBetween(bounds_1.getNorthEast(), bounds_1.getSouthWest()) / 2 * .9;
            //$scope.$apply(function (bounds) {
            this.map.fitBounds(bounds_1);
            //this.map.panToBounds(bounds);    
        }
        else {
            this.setCenter();
        }
    };
    GmapComponent.prototype.loadBlockSites = function (cbid) {
        var _this = this;
        console.log('02.0 start of LoadBlockSites: ', Date());
        this.blockService.getBlockbyID(cbid)
            .subscribe(function (res) {
            if (res.length === 0) {
                _this.censusblockService.getCensusblockbyID(cbid).subscribe(function (res) {
                    _this.userService.getCurrentUser().subscribe(function (user) {
                        console.log('in load block current user is ', user);
                        //const newBlock = new Block(res[0].geoid10.toString(), (res[0].blockarea*this.conversionM2toF2).toString(), res[0].intptlat10, res[0].intptlon10, String(user));  
                        var newBlock = new _services_block__WEBPACK_IMPORTED_MODULE_7__["Block"](res[0].geoid10.toString(), res[0].blockarea.toString(), res[0].intptlat10, res[0].intptlon10, String(user));
                        _this.blockService.updateBlock(newBlock).subscribe(function (res) {
                            _this.block = [res];
                            _this.handleLoadBlockSites(cbid);
                        });
                    });
                });
            }
            else {
                _this.block = res;
                //check that light count matches
                if (_this.block[0].lights && _this.block[0].lights.length) {
                    if (_this.block[0].lightcount != _this.block[0].lights.length) {
                        alert('Light count adjusted to match length of lights list. Light count was ' + _this.block[0].lightcount);
                        _this.block[0].lightcount = _this.block[0].lights.length;
                    }
                }
                _this.handleLoadBlockSites(cbid);
            }
            console.log('02.8 end of subscribe LoadBlockSites: ', Date());
        });
        console.log('02.9 end of LoadBlockSites: ', Date());
    };
    GmapComponent.prototype.getPlaces = function (latlong, next) {
        var _this = this;
        var searchradius = 1; // this.radius
        if (next != '') {
            //console.log('in next token')
            setTimeout(function () {
                _this.placesService.nearbySearch({
                    location: latlong,
                    //radius:,      
                    radius: searchradius,
                }, function (results, status, pagination) { return _this.processPlacesCallback(results, status, pagination); });
            }, 100);
        }
        else {
            //console.log('in get places, no token');
            this.placesService.nearbySearch({
                location: latlong,
                radius: searchradius,
            }, function (results, status, pagination) { return _this.processPlacesCallback(results, status, pagination); });
            /*{
              if(response.status ===google.maps.places.PlacesServiceStatus.INVALID_REQUEST){
                //resubmit
              }else {
                this.processPlacesCallback(response));
              }
            }
            */
        }
    };
    GmapComponent.prototype.placeSite = function (place) {
        var myplace;
        for (var index = 0; index < this.siteList.length; index++) {
            var site = this.siteList[index];
            if (site.places && place) {
                //console.log('in placesite, place', place);
                myplace = site.places.find(function (p) { return p.placeid === place.place_id; });
                if (myplace) {
                    //console.log('found place in site', myplace);
                    return true;
                }
            }
        }
        return false;
    };
    //processPlacesCallback(results, status, next_page_token){    
    GmapComponent.prototype.processPlacesCallback = function (results, status, pagination) {
        //console.log('places response', response);
        console.log('places status', status, ' results', results, 'pagination', pagination, 'next page', pagination.hasNextPage ? pagination.nextPage() : null);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                //console.log('places result',  results[i]);       
                var place = results[i];
                if (place && !this.placeSite(place)) {
                    this.createPlaceMarker(place);
                }
            }
            /*
            var getNextPage:any;
            getNextPage = pagination.hasNextPage;
            while (getNextPage){
            //  setTimeout( () => {
                getNextPage = pagination.hasNextPage && function() {
                  pagination.nextPage();
                };
                console.log('at the end of getnextpage while', getNextPage);
              //},2000)
            }
            */
            if (pagination.hasNextPage) {
                console.log('next page');
                pagination.nextPage();
                //this.getPlaces(0,0,pagination);
            }
        }
        else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
            console.log('uh oh, invalid request. Wait longer?');
        }
    };
    GmapComponent.prototype.createPlaceMarker = function (place) {
        //console.log('in createplacemarker',place);    
        //var infohtml = '<div><strong>' + place.name + '</strong><br>';
        var info = place.name;
        if (place.types) {
            info += ": ";
            var types = "";
            for (var index = 0; index < place.types.length; index++) {
                if (place.types[index]) {
                    types += place.types[index] + ", ";
                }
            }
            if (types) {
                types = types.slice(0, -2);
            }
            info += types;
            //infohtml += types;
        }
        //infohtml += '</div>';
        /*
        if(types == 'locality, political' || types == 'neighborhood, political'){
          return;
        }
        */
        var marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            title: info,
            icon: __assign({}, this.markerOptionsSitePlace)
        });
        //console.log ('in marker click this', this);
        //var alreadyAssignedPlace = this.checkPlaceAssigned(place.place_id)      
        if (this.addGooglePlace) {
            //this.getPlaceDetails(place.place_id); //this adds data to site
            //add included place marker to map and collection
            console.log('about to add place to site', this.selectedSite);
            if (this.selectedSite) {
                this.places.add(marker, place.place_id, this.selectedSite.siteID);
            }
            else {
                this.places.add(marker, place.place_id);
            }
            this.changeDetector.detectChanges();
            //} else if (alreadyAssignedPlace){ //place already assigned to a site
            //  console.log('place available fail');
        }
        //tell angular stuff changed so it will update
    };
    GmapComponent.prototype.createGglPlaceMarker = function (place) {
        var _this = this;
        //console.log('in createplacemarker',place);    
        var infohtml = '<div><strong>' + place.name + '</strong><br>';
        var info = place.name;
        if (place.types) {
            info += ": ";
            var types = "";
            for (var index = 0; index < place.types.length; index++) {
                if (place.types[index]) {
                    types += place.types[index] + ", ";
                }
            }
            if (types) {
                types = types.slice(0, -2);
            }
            info += types;
            infohtml += types;
        }
        infohtml += '</div>';
        var marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location,
            title: info,
            icon: {
                url: this.gglMarkerUrl
            }
            //googleid: this.gglid
        });
        //this.gglid ++;
        this.gglmarkers.add(marker);
        google.maps.event.addListener(marker, 'click', function () {
            //console.log ('in marker click this', this);
            var alreadyAssignedPlace = _this.checkPlaceAssigned(place.place_id);
            if (_this.addParcelInfo && !alreadyAssignedPlace) {
                _this.getPlaceDetails(place.place_id); //this adds data to site
                //clear out default marker
                _this.gglmarkers.deleteMarker(marker);
                //add included place marker to map and collection  
                if (_this.selectedSite) {
                    _this.places.add(marker, place.place_id, _this.selectedSite.siteID);
                }
                else {
                    _this.places.add(marker, place.place_id);
                }
            }
            else if (alreadyAssignedPlace) {
                //tell user parcel has been assigned to site
                console.log('place available fail');
            }
            else {
                if (_this.infoWindow !== null) {
                    _this.infoWindow.close();
                    _this.infoWindow = null;
                }
                _this.infoWindow = new google.maps.InfoWindow({ position: marker.position });
                //this.infoWindow = new google.maps.InfoWindow();        
                _this.infoWindow.setContent(infohtml);
                _this.infoWindow.open(_this.map);
                console.log('after window open', place);
            }
            //tell angular stuff changed so it will update
            _this.changeDetector.detectChanges();
        });
        /*
        google.maps.event.addListener(marker, 'mouseover', (event) => {
          //console.log('mouse over', newShape);
          let info = place.name + '\n<br>';
          if(place.types){
            var types:string = null;
            for (let index = 0; index < place.types.length; index++) {
              types += place.types[index] + ", ";
            }
            types = types.slice(0, -2);
            info += types;
          }
          this.parcelInfo = info;
          });
       
        google.maps.event.addListener(marker, 'mouseout', (event) => {
          this.parcelInfo = '';
          //this.changeDetector.detectChanges();
        });
        */
    };
    GmapComponent.prototype.getPlaceDetails = function (placeid) {
        var _this = this;
        //var infoSubject:PlaceDetails;
        var service = new google.maps.places.PlacesService(this.map);
        //console.log ('in getplacedetails for ', placeid);
        service.getDetails({
            placeId: placeid
        }, function (place, status) { return _this.handlePlaceDetails(place, status); });
    };
    GmapComponent.prototype.handlePlaceDetails = function (place, status) {
        this.addPlaceDetails(place, status); //this adds data to site
        this.createPlaceMarker(place); //This add marker to map
    };
    GmapComponent.prototype.addPlaceDetails = function (place, status) {
        var _this = this;
        //console.log('place detail returned:', status, place);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log('in addPlaceDetails, place:', place);
            if (place.types) {
                var types = "";
                for (var index = 0; index < place.types.length; index++) {
                    types += place.types[index] + ", ";
                }
                types = types.slice(0, -2);
                //infoSubject.types = types;
            }
            var currentPlace;
            currentPlace = {
                placeid: place.place_id,
                location: place.geometry.location.lat() + ", " + place.geometry.location.lng(),
                address: place.formatted_address,
                name: place.name,
                phone: place.formatted_phone_number,
                types: types,
                url: place.url,
                website: place.website,
                notes: null
            };
            //console.log('in addPlaceDetails', currentPlace);
            if (this.selectedSite) {
                if (this.selectedSite.siteID) {
                    if (this.selectedSite.siteID == this.noSiteText) {
                        this.selectedSite.siteID = this.getNewSiteID();
                    }
                }
                else {
                    this.selectedSite.siteID = this.getNewSiteID();
                }
                //console.log('selectedSite', this.selectedSite);
                if (!this.selectedSite.places) {
                    this.selectedSite.places = [];
                }
                this.selectedSite.places.push(currentPlace);
                //check for site id, add if needed
                this.siteService.updateSite(this.selectedSite).subscribe(function () { });
                this.changeDetector.detectChanges();
            }
            else if (this.block && this.block[0] && this.block[0].block) {
                //console.log('no selected site :(');
                var cataloger_2 = 'user not set :(';
                if (this.block[0].cataloger) {
                    cataloger_2 = this.block[0].cataloger;
                }
                else {
                    this.userService.getCurrentUser()
                        .subscribe(function (user) {
                        //console.log('in map click setting cataloger from current user', user);
                        cataloger_2 = user.username;
                    });
                }
                var SiteData = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](this.getNewSiteID(), cataloger_2, this.block[0].block.toString());
                SiteData.updated_at = Date.now();
                SiteData.places = [currentPlace];
                this.siteService.updateSite(SiteData).subscribe(function () {
                    _this.selectedSite = SiteData;
                    _this.siteList.push(SiteData);
                    _this.changeDetector.detectChanges();
                });
            }
            else {
                console.log('in fail over');
            }
        }
    };
    GmapComponent.prototype.checkPlaceAssigned = function (placeid) {
        var siteid = null;
        if (this.siteList) {
            for (var i = 0; i < this.siteList.length; i++) {
                //if (this.siteList[i].places && this.siteList[i].places.length && 'placeid' in this.siteList[i].places[0]){
                if (this.siteList[i].places && this.siteList[i].places.length
                    && this.siteList[i].places[0] && this.siteList[i].places[0].hasOwnProperty('placeid')) {
                    var place = this.siteList[i].places.find(function (a) { return a.placeid === placeid; });
                    if (place) {
                        siteid = this.siteList[i].siteID;
                        console.log('place exists on ', siteid);
                        break;
                    }
                }
            }
        }
        //console.log('in checkPlaceAssigned:', placeid, ' returning ', siteid, this.siteList);
        return siteid;
    };
    GmapComponent.prototype.clearFeatures = function (all) {
        if (all === void 0) { all = true; }
        //this will clear either all the features or just those without a siteID
        // pass true to clear all features, false for just unassigned
        if (this.mapFeatures) {
            //console.log('in clear features',this.mapFeatures);
            for (var i = 0; i < this.mapFeatures.length; i++) {
                //console.log('not siteid',!this.mapFeatures[i].siteID);
                if (all || !this.mapFeatures[i].siteID) {
                    this.mapFeatures[i].setMap(null);
                }
            }
            this.mapFeatures = [];
        }
    };
    GmapComponent.prototype.objExists = function (obj) { return typeof obj != 'undefined'; };
    GmapComponent.prototype.addPolyListeners = function (newShape, isNotMarker) {
        var _this = this;
        if (isNotMarker === void 0) { isNotMarker = false; }
        //console.log('in addpolylisteners',newShape);
        google.maps.event.addListener(newShape, 'click', function () {
            //this.shapes.setSelection(newShape);
            //this.polyID = newShape.id;
            //this.updatePathVars(newShape);
            //console.log('in polyclick shape:', newShape);
            if (newShape.siteID) {
                _this.changeSite(newShape.siteID);
                _this.shapes.highlight(newShape.siteID);
            }
        });
        google.maps.event.addListener(newShape, 'dragend', function () {
            _this.updatePathVars(newShape);
        });
        google.maps.event.addListener(newShape, 'rightclick', function () {
            //delete the polygon
            console.log('in poly rightclick', newShape);
            _this.shapes.deleteShape(newShape);
        });
        google.maps.event.addListener(newShape, 'mouseover', function (event) {
            //console.log('mouse over', newShape);
            if (newShape.siteID == _this.noSiteText) {
                _this.parcelInfo = "Site: " + newShape.siteID;
            }
            else if (newShape.siteID) {
                _this.parcelInfo = "Site: " + newShape.siteID.slice(-3);
            }
            else {
                _this.parcelInfo = "Site: undefined";
            }
            _this.changeDetector.detectChanges();
        });
        google.maps.event.addListener(newShape, 'mouseout', function (event) {
            _this.parcelInfo = '';
            _this.changeDetector.detectChanges();
        });
        if (newShape.type == google.maps.drawing.OverlayType.POLYLINE) {
            //change these to populate a line box on the app. Alerts are annoying while moving line
            google.maps.event.addListener(newShape.getPath(), 'insert_at', function () {
                // New point
                var distance = google.maps.geometry.spherical.computeLength(newShape.getPath().getArray());
                console.log("Line drawn is " + distance * 3.28 + " feet");
            });
            google.maps.event.addListener(newShape.getPath(), 'remove_at', function () {
                // Point was removed
                var distance = google.maps.geometry.spherical.computeLength(newShape.getPath().getArray());
                console.log("Line drawn is " + distance * 3.28 + " feet");
            });
            google.maps.event.addListener(newShape.getPath(), 'set_at', function () {
                // Point was moved
                var distance = google.maps.geometry.spherical.computeLength(newShape.getPath().getArray());
                console.log("Line drawn is " + distance * 3.28 + " feet");
            });
        }
        else {
            newShape.getPaths().forEach(function (path, index) {
                google.maps.event.addListener(path, 'insert_at', function () {
                    // New point
                    _this.updatePathVars(newShape);
                });
                google.maps.event.addListener(path, 'remove_at', function () {
                    // Point was removed
                    _this.updatePathVars(newShape);
                });
                google.maps.event.addListener(path, 'set_at', function () {
                    // Point was moved          
                    _this.updatePathVars(newShape);
                });
            });
        }
    };
    GmapComponent.prototype.addLightMarkerListeners = function (marker) {
        var _this = this;
        //console.log('in addLightMarkerListeners',marker);
        google.maps.event.addListener(marker, 'click', function () {
            //hmm what happend when it's clicked on?    
        });
        google.maps.event.addListener(marker, 'rightclick', function () {
            //delete the light
            console.log('in light rightclick', marker);
            _this.lightmarkers.delete(marker.id);
        });
        google.maps.event.addListener(marker, 'dragend', function () {
            _this.lightmarkers.updateLocation(marker);
        });
    };
    GmapComponent.prototype.addPlaceListeners = function (marker) {
        var _this = this;
        //console.log('in addLightMarkerListeners',marker);
        google.maps.event.addListener(marker, 'click', function () {
            //hmm what happend when it's clicked on?
            console.log('in place click');
        });
        google.maps.event.addListener(marker, 'rightclick', function () {
            //delete the place
            // *** Seems to be running twice when right clicking
            console.log('in place rightclick', marker, 'collection lenght:', Object.keys(_this.places.collection).length, 'marker.id', marker.id);
            _this.places.deleteSiteMarker(marker.id);
        });
        google.maps.event.addListener(marker, 'dragend', function () {
            _this.places.updateLocation(marker);
        });
    };
    GmapComponent.prototype.setSelection = function (shape, isNotMarker) {
        this.clearSelection();
        this.selectedShape = shape;
        if (isNotMarker)
            shape.setEditable(true);
        this.selectColor(shape.get('fillColor') || shape.get('strokeColor'));
        //updateCurSelText(shape);
    };
    GmapComponent.prototype.selectColor = function (color) {
        this.selectedColor = color;
        // Retrieves the current options from the drawing manager and replaces the
        // stroke or fill color as appropriate.
        if (this.drawingManager) {
            console.log('in DM load options section');
            var polylineOptions = this.drawingManager.get('polylineOptions');
            polylineOptions.strokeColor = color;
            this.drawingManager.set('polylineOptions', polylineOptions);
            var polygonOptions = this.drawingManager.get('polygonOptions');
            polygonOptions.fillColor = color;
            this.drawingManager.set('polygonOptions', polygonOptions);
        }
    };
    GmapComponent.prototype.clearSelection = function () {
        //debugger;
        if (this.selectedShape) {
            if (typeof this.selectedShape.setEditable == 'function') {
                this.selectedShape.setEditable(false);
            }
            this.selectedShape = null;
        }
    };
    GmapComponent.prototype.setSelectedShapeColor = function (color) {
        if (this.selectedShape) {
            if (this.selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
                this.selectedShape.set('strokeColor', color);
            }
            else {
                //selectedShape.set('fillColor', color);
                this.selectedShape.set('strokeColor', color);
            }
        }
    };
    GmapComponent.prototype.onPickedBlock = function (censusblock) {
        console.log('01.0 start of pickedblock:', Date());
        this.pickblock = false;
        this.loadBlockSites(censusblock);
        console.log(' 01.9 end of pickedblock:', Date());
    };
    GmapComponent.prototype.removeParcelExplore = function (parcelindex) {
        var parcelid = this.parcelExploreData[parcelindex].id;
        this.parcelExploreData.splice(parcelindex, 1); // Remove from the list
        this.deleteParcelExplore(parcelid); //remove from the map if not on a site
        this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.getPath = function (shape) {
        var pathstr;
        //pathstr = "" + this.shapes.selectedShape.getPath;
        pathstr = "" + shape;
        //if (typeof this.shapes.selectedShape.getPath == 'function') {
        if (typeof shape.getPath == 'function') {
            pathstr = "";
            //for (var i = 0; i < this.shapes.selectedShape.getPath().getLength(); i++) {
            for (var i = 0; i < shape.getPath().getLength(); i++) {
                // .toUrlValue(5) limits number of decimals, default is 6 but can do more                   
                //pathstr += this.shapes.selectedShape.getPath().getAt(i).toUrlValue() + "; ";
                pathstr += shape.getPath().getAt(i).toUrlValue() + "; ";
            }
            pathstr = pathstr.slice(0, -2);
        }
        return pathstr;
    };
    GmapComponent.prototype.getArea = function (shape) {
        //What are the units of the returned function? Whatever it is it matches the census block area.
        console.log('in get area', Math.round(google.maps.geometry.spherical.computeArea(shape.getPath())));
        return Math.round(google.maps.geometry.spherical.computeArea(shape.getPath()) * this.conversionM2toF2);
    };
    GmapComponent.prototype.updatePathVars = function (shape) {
        this.selectedSite.path = this.getPath(shape);
        this.selectedSite.patharea = String(this.getArea(shape));
        this.saveSite(this.selectedSite);
        console.log('in updatePathVars after save', this.shapes.collection);
        this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.hideShapes = function () {
        //hide all the shapes
        //for (i = 0; i < shapes.collection.length; i++) {
        for (var key in this.shapes.collection) {
            if (this.shapes.collection.hasOwnProperty(key)) {
                console.log('shapes visible prop is ' + this.shapes.collection[key].visible);
                // **** May need to add more definition to the shapes collection
                //key.setMap(null)
                //shapes.collection[key].visible = false;
                //console.log('after set shapes visible prop is ' + shapes.collection[key].visible);
            }
        }
    };
    GmapComponent.prototype.togglePolys = function () {
        if (this.togglepolys) {
            this.shapes.showAll();
        }
        else {
            this.shapes.hideAll();
        }
    };
    GmapComponent.prototype.toggleLights = function () {
        if (this.togglelights) {
            this.lightmarkers.showAll();
        }
        else {
            this.lightmarkers.hideAll();
        }
    };
    GmapComponent.prototype.togglePlaces = function () {
        if (this.toggleplaces) {
            this.places.showAll();
        }
        else {
            this.places.hideAll();
        }
    };
    GmapComponent.prototype.toggleGglPlaces = function () {
        if (this.togglegglplaces) {
            this.gglmarkers.showAll();
        }
        else {
            this.gglmarkers.hideAll();
        }
    };
    GmapComponent.prototype.toggleFeatures = function () {
        var visibility = this.togglefeatures;
        for (var i = 0; i < this.mapFeatures.length; i++) {
            this.mapFeatures[i].setOptions({ visible: visibility });
            this.mapFeatures[i].setMap(this.map);
        }
    };
    GmapComponent.prototype.toggleBlockLayer = function () {
        console.log('in toggleblocklayer: ' + this.toggleblocklayer);
        if (this.toggleblocklayer) {
            this.blockLayer.setMap(this.map);
        }
        else {
            this.blockLayer.setMap(null);
        }
    };
    GmapComponent.prototype.toggleParcelLayer = function () {
        if (this.toggleparcels) {
            this.map.overlayMapTypes.insertAt(0, new google.maps.ImageMapType(this.parcelLayerOptions));
        }
        else {
            this.map.overlayMapTypes.removeAt(0);
        }
    };
    GmapComponent.prototype.addParcelRightClick = function (feature) {
        var _this = this;
        //console.log('in addParcelRightClick');
        google.maps.event.addListener(feature, 'rightclick', function () {
            console.log('in ParcelRight Click');
            //need to check to see if user logged in before continuing
            //  **************
            //allow any parcel to be deleted? regardless of site
            //var pointspath = getFeaturepath(featureid);
            var parcelid = feature.parcelID;
            //check to see if parcel is part of current site?
            //remove parcel feature and any buildings
            _this.deleteParcel(parcelid);
            //mapFeatures[0].latLngs.b[0].b[0].lat()                
            //return parcelid so can remove it from site
            //googleMapService.clickRemoveParcel = pointspath;
            /*
            googleMapService.clickRemoveParcel = parcelid;
            $rootScope.$broadcast("parcelRightClicked");
            */
        });
    }; //end add parcel right click
    GmapComponent.prototype.addParcelClick = function (feature) {
        var _this = this;
        //console.log('in addParcelClick',feature);
        //google.maps.event.addListener(this.mapFeatures[featureid], 'click', () => {                
        google.maps.event.addListener(feature, 'click', function () {
            var parcel;
            console.log('in AddPArcelClick siteID:', feature);
            if (feature.siteID) {
                _this.changeSite(feature.siteID);
                parcel = { apn: feature.parcelID };
                console.log('parcel', parcel);
                _this.highlightParcel(parcel);
            }
        });
    };
    GmapComponent.prototype.addParcelMouseOver = function (feature) {
        var _this = this;
        google.maps.event.addListener(feature, 'mouseover', function (event) {
            //console.log('in mouseover',feature);
            var site = _this.noSiteText;
            if (feature.siteID) {
                site = feature.siteID.slice(-3);
            }
            _this.parcelInfo = "Site: " + site + "<br>Parcel ID: " + feature.parcelID + "<br />Owner: " + feature.owner;
            _this.changeDetector.detectChanges();
        });
    };
    GmapComponent.prototype.addParcelMouseOut = function (feature) {
        var _this = this;
        google.maps.event.addListener(feature, 'mouseout', function (event) {
            _this.parcelInfo = '';
            _this.changeDetector.detectChanges();
        });
    };
    GmapComponent.prototype.getFeaturepath = function (featureid) {
        var pointspath;
        //console.log('in getfeaturepath',this.mapFeatures[featureid]);
        //var pointarray: Array<number> = this.mapFeatures[featureid].latLngs.b[0].b
        var pointarray = this.mapFeatures[featureid].paths.b[0].b;
        for (var i = 0; i < pointarray.length; i++) {
            //  **** need to refactor this rounding operation to work in typescript
            //maybe just convert the rounded number to string after rounding
            // pointspath += Number(Math.round(pointarray[i].lat()+'e6')+'e-6') + ',' + Number(Math.round(pointarray[i].lng()+'e6')+'e-6') + '; '
        }
        pointspath = pointspath.slice(0, pointspath.length - 2);
        return pointspath;
    };
    GmapComponent.prototype.resetParcelHighlight = function () {
        //console.log('in resetParcelhighlight features are ',this.mapFeatures);
        for (var i = 0; i < this.mapFeatures.length; i++) {
            //if (this.mapFeatures[i].isHighlight) {
            this.mapFeatures[i].setOptions(__assign({}, this.getParcelOptions(this.mapFeatures[i].siteID === this.selectedSiteID ? 1 : 0, this.getSiteType(this.mapFeatures[i].siteID)), { isHighlight: false }));
            this.mapFeatures[i].setMap(this.map);
            //}
        }
    };
    GmapComponent.prototype.addSite = function (site) {
        this.siteList.push(site);
        this.changeSite(site.siteID);
    };
    //there are two separate highlight parcel functions in the original gservice. One is internal the other is exposed for external use (only takes a parcelID). 
    //The other should be renamed highlightSelectedParcel of something similar as that is what it does, in additions to dehighlighting all the other parcels
    //or this one could be renamed to decorateParcel as it does several things to the passed parcel and nothign to any other parcels
    GmapComponent.prototype.highlightParcel = function (parcel) {
        //console.log('in highlight parcel features are ', this.mapFeatures)
        //console.log('in highlight parcel: ', parcel);
        this.resetParcelHighlight();
        for (var i = 0; i < this.mapFeatures.length; i++) {
            if (this.mapFeatures[i].parcelID === parcel.apn) {
                console.log('parcel id matched ', parcel.apn, ' type is ', this.getSiteType(this.mapFeatures[i].siteID), ' for site ', this.mapFeatures[i].siteID);
                this.mapFeatures[i].setOptions(__assign({}, this.getParcelOptions(2, this.getSiteType(this.mapFeatures[i].siteID)), { isHighlight: true }));
            }
        }
    };
    GmapComponent.prototype.removeAllParcelExplore = function () {
        this.parcelExploreData = [];
        //go through map features to clear those that haven't been assigned to a site
        this.clearFeatures(false);
    };
    GmapComponent.prototype.addParcelstoSite = function () {
        var _this = this;
        var newParcels = [];
        if (this.parcelExploreData) {
            //console.log('parcel explore data is ',this.parcelExploreData);
            var siteid_1;
            console.log('in addParceltoSite, selectedsite:', this.selectedSite);
            if (this.selectedSite && this.selectedSite.siteID) {
                if (this.selectedSite.siteID == this.noSiteText) {
                    siteid_1 = this.getNewSiteID();
                }
                else {
                    siteid_1 = this.selectedSite.siteID;
                }
            }
            else {
                siteid_1 = this.getNewSiteID();
            }
            this.parcelExploreData.forEach(function (parcel) {
                newParcels.push({
                    'apn': parcel.id,
                    'parcelowner': parcel.siteowner,
                    'parcelowneraddress': parcel.mailaddress,
                    'parceladdress': parcel.siteaddress,
                    'parcelpath': parcel.path,
                    'parcelarea': parcel.area
                });
                _this.redrawParcels(siteid_1, parcel.id);
            });
            console.log('newParcels:', newParcels);
            if (!this.selectedSite && this.block && this.block[0] && this.block[0].block) {
                var SiteData = new _services_site_model__WEBPACK_IMPORTED_MODULE_6__["Site"](siteid_1, this.getUserName(), this.block[0].block.toString());
                SiteData.updated_at = Date.now();
                SiteData.parcels = newParcels;
                this.siteService.updateSite(SiteData).subscribe(function () {
                    _this.selectedSite = SiteData;
                    _this.siteList.push(SiteData);
                    console.log('new site saved by addParcels');
                    _this.changeDetector.detectChanges();
                });
            }
            else if (this.selectedSite) {
                if (!this.selectedSite.parcels) {
                    this.selectedSite.parcels = [];
                }
                if (this.selectedSite && this.selectedSite.siteID && this.selectedSite.siteID == this.noSiteText) {
                    //this.selectedSite.siteID = this.getNewSiteID();
                    this.selectedSite.siteID = siteid_1;
                }
                if (this.selectedSite.parcels) {
                    //only add if not in parcel list already
                    var errormsg_1;
                    newParcels.forEach(function (element) {
                        if (!_this.checkParcelAssigned(element.apn)) {
                            _this.selectedSite.parcels.push(element);
                        }
                        else {
                            errormsg_1 += element.apn + " ";
                        }
                    });
                    if (errormsg_1) {
                        errormsg_1 = "Parcels " + errormsg_1 + " not added because they are already part of this site";
                        alert(errormsg_1);
                    }
                }
                else {
                    this.selectedSite.parcels = newParcels;
                }
                this.siteService.updateSite(this.selectedSite).subscribe(function () {
                    console.log('site updated by addParcels');
                    _this.changeDetector.detectChanges();
                });
            }
            console.log('about to clear exploreDate');
            this.parcelExploreData = [];
        }
    };
    GmapComponent.prototype.getNewSiteID = function () {
        return new Date().getTime() + '_' + Math.floor(Math.random() * 1000);
    };
    GmapComponent.prototype.changeSite = function (value) {
        var _this = this;
        var hasPolygon = false;
        this.selectedSiteID = value;
        this.selectedSite = this.siteList.find(function (s) { return s.siteID === value; });
        this.changeDetector.detectChanges();
        Object.entries(this.shapes.collection).map(function (_a) {
            var k = _a[0], v = _a[1];
            var site = Object.assign({}, v);
            if (site.siteID === value.toString()) {
                _this.shapes.setSelection(v);
                hasPolygon = true;
            }
            //else{
            //this.shapes.baseHighlight(value.toString());
            //}
        });
        if (!hasPolygon) {
            this.shapes.clearSelection();
            this.shapes.highlight(0); //sets all to base opacity
        }
        this.mapFeatures.forEach(function (s) {
            //console.log('parcel options', this.getParcelOptions(s.siteID === value ? 1 : 0, this.getSiteType(s.siteID)));
            s.setOptions(_this.getParcelOptions(s.siteID === value ? 1 : 0, _this.getSiteType(s.siteID)));
        });
        //this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.getParcelOptions = function (type, sitetype) {
        if (sitetype === void 0) { sitetype = 'unknown'; }
        // Type is an integer representing the highlight type
        // Sitetype is a string representing the sitetype
        //Normal should set stroke color based on site type. So either need to pass in optional color or site id so it can be looked up.
        //Probably better to vary the fill opacity and perhaps strokeWeight or strokeOpacity
        var colorid = this.getSiteTypeColor(sitetype);
        console.log('in getparceloptions colorid is', colorid, ' sitetype is ', sitetype, ' type is', type);
        switch (type) {
            case 0:// NORMAL      
                return {
                    fillColor: this.parcelColor,
                    strokeColor: this.colors[colorid],
                    strokeWeight: this.baseStrokeWeight,
                    fillOpacity: this.baseOpacity,
                };
            case 1:// SELECTED
                return {
                    fillColor: this.parcelColor,
                    strokeColor: this.colors[colorid],
                    strokeWeight: this.baseStrokeWeight + 1,
                    fillOpacity: this.selectOpacity,
                };
            case 2:// HIGHLIGHT
                return {
                    fillColor: this.parcelColor,
                    strokeColor: this.colors[colorid],
                    strokeWeight: this.baseStrokeWeight + 1.5,
                    fillOpacity: this.highlightOpacity,
                };
        }
    };
    GmapComponent.prototype.getSiteType = function (siteid) {
        //console.log('in getSiteType id:', siteid);
        var site = this.siteList.find(function (s) { return s.siteID === siteid; });
        //console.log ('in getsitetype', site ? site : 'no results');
        var sitetype;
        if (site && site.sitetype) {
            sitetype = site.sitetype;
        }
        else {
            sitetype = null;
        }
        //console.log('in getsitetype', sitetype, ' for site ', siteid);
        return sitetype;
    };
    GmapComponent.prototype.getSiteTypeColor = function (type) {
        //['#1E90FF', '#FF1493', '#32CD32', '#FFFF00', '#4B0082'];
        var colorid;
        switch (type) {
            case 'CBSA':
                colorid = 0; //blue'#1E90FF';
                break;
            case 'RBSA':
                colorid = 1; //purple'#FF1493';
                break;
            case 'Residential with Common':
                colorid = 2; //green'#32CD32';
                break;
            case 'Non-Residential OLSA':
                colorid = 3; //yellow'#FF8C00';
                break;
            case 'Residential > 3 Stories':
                colorid = 4; //green'#32CD32';
                break;
            case 'unknown':
                colorid = 9; //black'#4B0082';
                break;
            default:
                colorid = 9; //grey'#b4b4b4';//grey
        }
        return colorid;
    };
    GmapComponent.prototype.getBlockCoverage = function () {
        var _this = this;
        var totalArea = 0;
        var calc = 0;
        this.siteList.forEach(function (site) {
            totalArea += _this.getTotalOfSiteArea(site);
        });
        if (this.block && this.block[0] && this.block[0].block) {
            calc = Math.round(totalArea / (+this.block[0].cbarea * this.conversionM2toF2) * 100);
        }
        return calc;
    };
    GmapComponent.prototype.getTotalOfSiteArea = function (site) {
        var totalArea = 0;
        if (site.patharea)
            totalArea += parseFloat(site.patharea);
        (site.parcels || []).forEach(function (p) {
            totalArea += parseFloat(p.parcelarea);
        });
        return totalArea;
    };
    GmapComponent.prototype.deleteShape = function () {
        if (this.shapes.selectedShape) {
            this.shapes.deleteSelected();
        }
    };
    GmapComponent.prototype.onDeleteParcel = function (parcelid) {
        console.log('in onDeleteParcel', parcelid);
        this.deleteParcel(parcelid);
    };
    GmapComponent.prototype.deleteMapParcel = function (parcelid) {
        // change this so it also deletes building shapes if they get added back
        for (var i = this.mapFeatures.length - 1; i > -1; i--) {
            if (this.mapFeatures[i].parcelID === parcelid) {
                console.log('in deleteparcel features loop', parcelid);
                this.mapFeatures[i].setMap(null);
                //this splice option cause some issues of parcel mismatch. shouldn't now because decrementing through list
                this.mapFeatures.splice(i, 1);
            }
        }
    };
    GmapComponent.prototype.deleteParcelExplore = function (parcelid) {
        if (this.parcelExploreData) {
            for (var i = this.parcelExploreData.length - 1; i > -1; i--) {
                if (this.parcelExploreData[i].id === parcelid) {
                    this.parcelExploreData.splice(i, 1);
                }
            }
        }
        if (!this.checkParcelAssigned(parcelid)) {
            this.deleteMapParcel(parcelid);
        }
    };
    GmapComponent.prototype.deleteParcel = function (parcelid) {
        this.deleteMapParcel(parcelid);
        this.deleteParcelExplore(parcelid);
        // *** this fails if the current site doesn't have any parcels.
        //so it appears to delete parcel but doesn't really
        console.log('in deleteParcel, site list:', this.siteList);
        if (this.siteList) {
            for (var i = 0; i < this.siteList.length; i++) {
                console.log('in site ', i);
                if (this.siteList[i].parcels) {
                    for (var j = this.siteList[i].parcels.length - 1; j > -1; j--) {
                        if (this.siteList[i].parcels[j].apn.toString() === parcelid.toString()) {
                            this.siteList[i].parcels.splice(j, 1);
                            this.siteService.updateSite(this.siteList[i]).subscribe(function () { });
                        }
                    }
                }
            }
        }
        /* old version
              if (this.selectedSite && this.selectedSite.paFlaycrcels) {
          for (var i = this.selectedSite.parcels.length - 1; i > -1; i--) {
            if (this.selectedSite.parcels[i].apn.toString() === parcelid.toString()) {
              this.selectedSite.parcels.splice(i, 1);
            }
          }
          this.siteService.updateSite(this.selectedSite).subscribe(() => {});
        }
        */
        this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.onRemoveParcel = function (parcelid) {
        this.deleteParcel(parcelid);
    };
    GmapComponent.prototype.onRemoveLight = function (lightid) {
        this.lightmarkers.delete(lightid);
    };
    GmapComponent.prototype.onHighlightLight = function (lightid) {
        this.lightmarkers.highlight(lightid);
    };
    GmapComponent.prototype.onDeleteSite = function (siteid) {
        console.log('in delete site', siteid);
        for (var i = this.mapFeatures.length - 1; i > -1; i--) {
            if (this.mapFeatures[i].siteID === siteid) {
                this.mapFeatures[i].setMap(null);
                this.mapFeatures.splice(i, 1);
            }
        }
        this.shapes.deleteSiteShape(siteid);
        /* below doesn't work because siteid isn't the index (I think that's why it doesn't work anyway)
        console.log('shapes collection', this.shapes.collection);
        Object.entries(this.shapes.collection).map(([k, v]) => {
          const site: Site = Object.assign({}, v) as Site;
          if (site.siteID === siteid.toString()) {
            console.log('col ref', this.shapes.collection[site.siteID]);
            if (this.shapes.collection[site.siteID]){
              this.shapes.collection[site.siteID].setMap(null);
              delete this.shapes.collection[site.siteID];
            }
          }
        });
        */
        for (var i = this.siteList.length - 1; i > -1; i--) {
            if (this.siteList[i].siteID === siteid) {
                this.siteList.splice(i, 1);
            }
        }
        //reset selected site
        console.log('in deleteparcel selected site', this.selectedSite);
        this.selectedSite = null;
        this.selectedSiteID = null;
        this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.redrawParcels = function (siteid, parcelid) {
        if (parcelid === void 0) { parcelid = null; }
        console.log('in redrawParcels site:', siteid, ' parcel:', parcelid);
        var colorid = this.getSiteTypeColor(this.getSiteType(siteid));
        for (var i = 0; i < this.mapFeatures.length; i++) {
            if (this.mapFeatures[i].siteID == siteid) {
                console.log('in update color only');
                this.mapFeatures[i].setOptions({ strokeColor: this.colors[colorid] });
                this.mapFeatures[i].setMap(this.map);
            }
            else if (this.mapFeatures[i].parcelID == parcelid && !this.mapFeatures[i].siteID) {
                console.log('in updating siteid', siteid);
                this.mapFeatures[i].setOptions({ siteID: siteid, strokeColor: this.colors[colorid] });
                this.mapFeatures[i].setMap(this.map);
            }
        }
    };
    GmapComponent.prototype.saveSite = function (site) {
        this.siteService.updateSite(site)
            .subscribe(function () { { } });
    };
    GmapComponent.prototype.refreshSite = function (site) {
        //site data that affects map has changed redraw pieces
        this.shapes.redrawSiteShapes(site.siteID);
        this.redrawParcels(site.siteID);
        this.places.redrawSitePlaces(site.siteID);
    };
    GmapComponent.prototype.onRemovePlace = function (placeid) {
        this.deletePlace(placeid);
    };
    GmapComponent.prototype.deletePlace = function (placeid) {
        //if start loading saved places onto map, need to delete from that list as well
        console.log('in deletePlace, site list:', this.siteList);
        /*
        if(this.siteList){
          for (var i = 0; i < this.siteList.length; i++){
            //console.log('in site ',i);
            if(this.siteList[i].places){
              for (var j = this.siteList[i].places.length - 1; j > -1; j--) {
                console.log('in delete place', placeid, ' site place:', this.siteList[i].places[j].placeid);
                if (this.siteList[i].places[j].placeid === placeid) {
                  this.siteList[i].places.splice(j, 1);
                  this.siteService.updateSite(this.siteList[i]).subscribe(() => {});
                  break;
                }
              }
            }
          }
        }
        */
        this.places.deleteSiteMarker(placeid);
        //this.changeDetector.detectChanges();
    };
    GmapComponent.prototype.deleteAllSites = function () {
        console.log('in deleteallsites', this.block[0].block);
        //delete all the shapes
        this.shapes.deleteAll();
        this.places.deleteAll();
        //this.lightmarkers.clearAll(); //These are part of block not site
        for (var i = this.mapFeatures.length - 1; i > -1; i--) {
            this.mapFeatures[i].setMap(null);
        }
        this.mapFeatures = [];
        //this.siteService.deleteAllSitesbyBlock(this.block[0].block).subscribe(() => {});
        //this is the lame way until the above gets figured out.
        for (var index = 0; index < this.siteList.length; index++) {
            var element = this.siteList[index];
            this.siteService.deleteSite(element.siteID).subscribe(function () { });
        }
        this.siteList = [];
        this.sitecomponent.model = [];
        this.changeDetector.detectChanges();
    };
    //bing map button
    GmapComponent.prototype.BingControl = function (controlDiv, map) {
        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to see this area in Bing';
        controlDiv.appendChild(controlUI);
        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Bing';
        controlUI.appendChild(controlText);
        // Setup the click event listener
        controlUI.addEventListener('click', function () {
            //console.log('in bing click',map);
            var url = 'https://bing.com/maps/default.aspx?cp=' + map.center.lat() + '~' + map.center.lng() + '&lvl=' + map.zoom + '&style=a';
            //let url = 'https://www.bing.com/mapspreview?cp=' + map.center.lat() + '~' + map.center.lng() + '&lvl=18&dir=113.8911&pi=-0.284&style=x&v=2&sV=1'
            console.log('in bing click', map, url, map.zoom);
            // https://www.bing.com/mapspreview?cp=43.590119~-116.393826&lvl=17&dir=113.8911&pi=-0.284&style=x&v=2&sV=1
            //window.location.href = url
            window.open(url);
        });
    };
    Object.defineProperty(GmapComponent.prototype, "diagnostic", {
        /* disabling in favor of showing native control
        //3D map button
        Control3D(controlDiv, map) {
          // Set CSS for the control border.
          var controlUI = document.createElement('div');
          controlUI.style.backgroundColor = '#fff';
          controlUI.style.border = '2px solid #fff';
          controlUI.style.borderRadius = '3px';
          controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
          controlUI.style.cursor = 'pointer';
          controlUI.style.marginBottom = '22px';
          controlUI.style.textAlign = 'center';
          controlUI.title = 'Click to see this area in 3D';
          controlDiv.appendChild(controlUI);
      
          // Set CSS for the control interior.
          var controlText = document.createElement('div');
          controlText.style.color = 'rgb(25,25,25)';
          controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
          controlText.style.fontSize = '16px';
          controlText.style.lineHeight = '38px';
          controlText.style.paddingLeft = '5px';
          controlText.style.paddingRight = '5px';
          controlText.innerHTML = '3D';
          controlUI.appendChild(controlText);
      
          // Setup the click event listener
          controlUI.addEventListener('click', () => {
            console.log('in 3d click',map);
            if(map.tilt == 0){
              map.tilt = 45;
            } else {
              map.tilt = 0;
            }
          });
        }
      */
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.selectedSite); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], GmapComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_site_site_component__WEBPACK_IMPORTED_MODULE_8__["SiteComponent"]),
        __metadata("design:type", Object)
    ], GmapComponent.prototype, "sitecomponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_block_block_component__WEBPACK_IMPORTED_MODULE_9__["BlockComponent"]),
        __metadata("design:type", Object)
    ], GmapComponent.prototype, "blockcomponent", void 0);
    GmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gmap',
            template: __webpack_require__(/*! ./gmap.component.html */ "./src/app/gmap/gmap.component.html"),
            styles: [__webpack_require__(/*! ./gmap.component.css */ "./src/app/gmap/gmap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_censusblock_service__WEBPACK_IMPORTED_MODULE_2__["CensusblockService"],
            _fusiontabledata_service__WEBPACK_IMPORTED_MODULE_3__["FusiontabledataService"],
            _services_site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"],
            _services_block_service__WEBPACK_IMPORTED_MODULE_5__["BlockService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], GmapComponent);
    return GmapComponent;
}());

/*
@Component({
  selector: 'polyoverwritedialog',
  templateUrl: 'polyoverwritedialog.html',
})
export class dialogConfirmPolyOverwrite {}
*/ 


/***/ }),

/***/ "./src/app/groupby.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/groupby.pipe.ts ***!
  \*********************************/
/*! exports provided: GroupbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbyPipe", function() { return GroupbyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupbyPipe = /** @class */ (function () {
    function GroupbyPipe() {
    }
    GroupbyPipe.prototype.transform = function (value, field) {
        if (value) {
            var groupedObj_1 = value.reduce(function (prev, cur) {
                if (!prev[cur[field]]) {
                    prev[cur[field]] = [cur];
                }
                else {
                    prev[cur[field]].push(cur);
                }
                return prev;
            }, {});
            return Object.keys(groupedObj_1).map(function (key) { return ({
                key: key,
                value: groupedObj_1[key]
            }); });
        }
        else {
            return null;
        }
    };
    GroupbyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupby'
        })
    ], GroupbyPipe);
    return GroupbyPipe;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\t<div class=\"col-md-3\"></div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"form-group\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Email:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Password:</label>\r\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" />\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-center\" *ngIf=\"error || success\">\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\r\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"success\">{{success}}</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-center\">\r\n\t\t\t<input type=\"button\" value=\"Log In\" class=\"btn btn-primary\" (click)=\"login()\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router/ */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.model */ "./src/app/services/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.error = '';
        this.success = '';
        this.user = new _services_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '', '', '', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.error = '';
        this.success = '';
        if (!this.user.email || !this.user.password) {
            this.error = 'Please input details';
            return;
        }
        this.userService.login(this.user).subscribe(function (data) {
            if (data.error) {
                _this.error = data.error;
            }
            else {
                var decode = _this.parseJwt(data.token);
                console.log('return from login', decode);
                _this.success = 'Log in successfully!';
                _this.authService.setToken(data.token);
                _this.userService.setCurrentUser(decode.username);
                _this.router.navigate(['gmap']);
            }
        });
    };
    LoginComponent.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router___WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models_client/parcel.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models_client/parcel.model.ts ***!
  \***********************************************/
/*! exports provided: ParcelInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParcelInfo", function() { return ParcelInfo; });
var ParcelInfo = /** @class */ (function () {
    /*
        id: string;
        siteaddress: string;
        mailaddress: string;
        siteowner: string;
        path:string;
        area:number;
        info: string;
        */
    function ParcelInfo(id, siteaddress, mailaddress, siteowner, path, area, info) {
        this.id = id;
        this.siteaddress = siteaddress;
        this.mailaddress = mailaddress;
        this.siteowner = siteowner;
        this.path = path;
        this.area = area;
        this.info = info;
    }
    return ParcelInfo;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
/*  /taken out due to hammerjs dependence
MatSliderModule,
MatSlideToggleModule,
MatTooltipModule,
 */
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                // Material Modules
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.token = '';
        this.token = localStorage.getItem('OLSA_TOKEN') || '';
        var current_time = new Date().getTime() / 1000;
        if (this.token && current_time > (jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(this.token).exp)) {
            localStorage.removeItem('OLSA_TOKEN');
            this.token = '';
        }
    }
    AuthService.prototype.canActivate = function () {
        return !!this.getToken();
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.setToken = function (t) {
        this.token = t;
        localStorage.setItem('OLSA_TOKEN', t);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/block.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/block.service.ts ***!
  \*******************************************/
/*! exports provided: BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BlockService = /** @class */ (function () {
    function BlockService(http, snackBar, messageService, globals) {
        this.http = http;
        this.snackBar = snackBar;
        this.messageService = messageService;
        this.globals = globals;
        //use node server address
        this.blocksUrl = this.globals.awsapibase + 'blocks'; // URL to web api
    }
    /** GET blocks from the server */
    BlockService.prototype.getAllBlocks = function () {
        var _this = this;
        return this.http.get(this.blocksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (blocks) { return _this.log('fetched ' + blocks.length + ' blocks'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBlocks', [])));
    };
    BlockService.prototype.getBlockbyID = function (blockid) {
        var _this = this;
        return this.http.get(this.blocksUrl + '/' + blockid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (censusblocks) { return _this.log('fetched block by id ' + blockid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBlocks')));
    };
    /** PUT: update the Block on the server */
    BlockService.prototype.updateBlock = function (block) {
        var _this = this;
        //console.log('in updateblock', block);
        return this.http.put(this.blocksUrl, block, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.log("updated block id=" + block.block + " with " + block);
            //this.snackBar.open('Block updated',null, {duration:1500, horizontalPosition:'right', verticalPosition: 'top'});
            _this.snackBar.open('Block updated', null, { duration: 1500, verticalPosition: 'top' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateBlock')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    BlockService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            alert('block service error. ' + error.message);
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a BlockService message with the MessageService */
    BlockService.prototype.log = function (message) {
        this.messageService.add("BlockService: " + message);
    };
    BlockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
    ], BlockService);
    return BlockService;
}());



/***/ }),

/***/ "./src/app/services/block.ts":
/*!***********************************!*\
  !*** ./src/app/services/block.ts ***!
  \***********************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
var Block = /** @class */ (function () {
    function Block(block, cbarea, cblat, cblon, cataloger, notes, qcer, qcnotes, blockstatus, blocktype, lightcount, lights, updated_at) {
        this.block = block;
        this.cbarea = cbarea;
        this.cblat = cblat;
        this.cblon = cblon;
        this.cataloger = cataloger;
        this.notes = notes;
        this.qcer = qcer;
        this.qcnotes = qcnotes;
        this.blockstatus = blockstatus;
        this.blocktype = blocktype;
        this.lightcount = lightcount;
        this.lights = lights;
        this.updated_at = updated_at;
    }
    return Block;
}());



/***/ }),

/***/ "./src/app/services/censusblock.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/censusblock.service.ts ***!
  \*************************************************/
/*! exports provided: CensusblockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CensusblockService", function() { return CensusblockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CensusblockService = /** @class */ (function () {
    function CensusblockService(http, messageService, globals) {
        this.http = http;
        this.messageService = messageService;
        this.globals = globals;
        //  private censusblocksUrl = 'api/censusblocks';  // URL to web api  
        this.censusblocksUrl = this.globals.awsapibase + 'censusblocks'; // URL to web api
    }
    /** GET censusblocks from the server */
    CensusblockService.prototype.getCensusblocks = function () {
        var _this = this;
        return this.http.get(this.censusblocksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (censusblocks) { return _this.log('fetched censusblocks'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCensusblocks', [])));
    };
    CensusblockService.prototype.getCensusblockbyID = function (cbid) {
        var _this = this;
        var callURL = this.censusblocksUrl + '/' + cbid;
        console.log('getcbid ' + cbid + 'and the url: ' + callURL);
        if (cbid = "") {
            console.log('no passed cbid, returning null');
            return null;
        }
        return this.http.get(callURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (censusblocks) { return _this.log('fetched censusblock by id ' + censusblocks); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCensusblocks', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CensusblockService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    CensusblockService.prototype.log = function (message) {
        this.messageService.add("CensusblockService: " + message);
    };
    CensusblockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], CensusblockService);
    return CensusblockService;
}());



/***/ }),

/***/ "./src/app/services/current-block.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/current-block.service.ts ***!
  \***************************************************/
/*! exports provided: CurrentBlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentBlockService", function() { return CurrentBlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _block_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _site_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site.service */ "./src/app/services/site.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentBlockService = /** @class */ (function () {
    function CurrentBlockService(blockService, siteService) {
        this.blockService = blockService;
        this.siteService = siteService;
        //sites: Site[];
        this.selectedBlockSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentBlock = this.selectedBlockSubject.asObservable();
        this.blockListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.blockSites = this.blockListSubject.asObservable();
        this.init();
    }
    CurrentBlockService.prototype.init = function () {
        this.refreshBlocks();
    };
    CurrentBlockService.prototype.refreshBlocks = function () {
        this.blocks$ = this.blockService.getAllBlocks();
    };
    /*
    refreshBlockSites():void{
      //there is an odd type problem with Site[]
      this.blockSites$ = this.siteService.getAllSites();
    }
  */
    CurrentBlockService.prototype.getSelectedBlock = function () {
        return this.selectedBlockSubject.asObservable();
    };
    CurrentBlockService.prototype.setSelectedBlock = function (selected) {
        this.selectedBlockSubject.next(selected);
    };
    CurrentBlockService.prototype.getBlockSites = function () {
        return this.blockListSubject.asObservable();
    };
    CurrentBlockService.prototype.setBlockSites = function (selected) {
        var _this = this;
        var siteslocal;
        //let blockList:Site[];
        this.siteService.getAllSites().subscribe(function (sites) {
            siteslocal = sites;
            if (!(typeof selected === 'undefined')) {
                _this.blockListSubject.next(siteslocal.filter(function (x) {
                    return x.block == selected.block;
                }));
            }
            else {
                _this.blockListSubject.next(siteslocal);
            }
            console.log('in setBlockSites ' + selected.block + ' yields ' + _this.blockListSubject.value.length);
        });
    };
    CurrentBlockService.prototype.updateBlock = function (updated) {
        var _this = this;
        return this.blockService.updateBlock(updated)
            .pipe(
        /* If the update is submitted successfully, refresh
          the relevant data sources in this service */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (block) {
            _this.setSelectedBlock(block);
            _this.refreshBlocks();
        }));
    };
    CurrentBlockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"],
            _site_service__WEBPACK_IMPORTED_MODULE_4__["SiteService"]])
    ], CurrentBlockService);
    return CurrentBlockService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/site.model.ts":
/*!****************************************!*\
  !*** ./src/app/services/site.model.ts ***!
  \****************************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
var Site = /** @class */ (function () {
    function Site(siteID, username, block, sitetype, notes, path, patharea, blocktype, usetype, roads, 
    /*
    roads?: {
        road?: [
            {
                name?: String,
                length?: Number,
                fixtures?: [
                    {
                        count?: Number,
                        fiximage?: { data?: Buffer, contentType?: String },
                        imageurl?: String,
                        description?: String
                    }
                ]
            }
        ]
    },*/
    contactorg, contactname, contactphone, contactemail, contactnotes, pathtocontact, partialparcel, 
    // public parcels?: [string],
    parcels, places, sitecomplete, qcnotes, sitestatus, 
    //polypath?: {type?: [Number]}, // [Long, Lat]
    //htmlverified?: String,
    created_at, updated_at) {
        this.siteID = siteID;
        this.username = username;
        this.block = block;
        this.sitetype = sitetype;
        this.notes = notes;
        this.path = path;
        this.patharea = patharea;
        this.blocktype = blocktype;
        this.usetype = usetype;
        this.roads = roads;
        this.contactorg = contactorg;
        this.contactname = contactname;
        this.contactphone = contactphone;
        this.contactemail = contactemail;
        this.contactnotes = contactnotes;
        this.pathtocontact = pathtocontact;
        this.partialparcel = partialparcel;
        this.parcels = parcels;
        this.places = places;
        this.sitecomplete = sitecomplete;
        this.qcnotes = qcnotes;
        this.sitestatus = sitestatus;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Site;
}());



/***/ }),

/***/ "./src/app/services/site.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/site.service.ts ***!
  \******************************************/
/*! exports provided: SiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteService", function() { return SiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SiteService = /** @class */ (function () {
    function SiteService(http, snackBar, messageService, globals) {
        this.http = http;
        this.snackBar = snackBar;
        this.messageService = messageService;
        this.globals = globals;
        //use node server address
        this.sitesUrl = this.globals.awsapibase + 'sites'; // URL to web api
    }
    /** GET Sites from the server */
    SiteService.prototype.getAllSites = function () {
        var _this = this;
        return this.http.get(this.sitesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (sites) { return _this.log('fetched ' + sites.length + ' sites'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllSites', [])));
    };
    SiteService.prototype.getAllSitesByBlock = function (block) {
        var _this = this;
        return this.http.get(this.sitesUrl + '/' + block + '/block')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched sites'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAllSitesByBlock', [])));
    };
    SiteService.prototype.getSitebyID = function (siteid) {
        var _this = this;
        return this.http.get(this.sitesUrl + '/' + siteid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched site by id ' + siteid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSitebyID')));
    };
    /** PUT: update the Site on the server */
    SiteService.prototype.updateSite = function (site) {
        var _this = this;
        console.log('in updatesite, putting', site);
        return this.http.put(this.sitesUrl, site, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.log("updated site id=" + site.siteID + " on " + _this.sitesUrl);
            //this.snackBar.open('Site updated',null, {duration:1500, horizontalPosition:'right', verticalPosition: 'top' });
            _this.snackBar.open('Site updated', null, { duration: 1500, verticalPosition: 'top' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateSite')));
    };
    //  Delete Site
    SiteService.prototype.deleteSite = function (siteid) {
        var _this = this;
        return this.http.delete(this.sitesUrl + "/" + siteid, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted site id=" + siteid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteSite')));
    };
    //delete all sites on block
    SiteService.prototype.deleteAllSitesbyBlock = function (block) {
        console.log('in siteservice deleteallblocks url', this.sitesUrl + "block/" + block);
        //return this.http.delete(this.sitesUrl + "block/" + block, httpOptions).pipe(
        return this.http.delete(this.sitesUrl + "block/" + block, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted sites for block=" + block); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteAllSitesbyBlock')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SiteService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            alert('site service error. ' + error.message);
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    SiteService.prototype.log = function (message) {
        this.messageService.add("SiteService: " + message);
    };
    SiteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_6__["Globals"]])
    ], SiteService);
    return SiteService;
}());



/***/ }),

/***/ "./src/app/services/sitetype.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sitetype.service.ts ***!
  \**********************************************/
/*! exports provided: SitetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitetypeService", function() { return SitetypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SitetypeService = /** @class */ (function () {
    function SitetypeService(http, messageService, globals) {
        this.http = http;
        this.messageService = messageService;
        this.globals = globals;
        this.url = this.globals.awsapibase + 'sitetypes'; // URL to web api
    }
    /** GET sitetypes from the server */
    SitetypeService.prototype.getSiteTypes = function () {
        var _this = this;
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (sitetypes) { return _this.log('fetched sitetypesUrl'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSiteTypes', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SitetypeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    SitetypeService.prototype.log = function (message) {
        this.messageService.add("SitetypeService: " + message);
    };
    SitetypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], SitetypeService);
    return SitetypeService;
}());



/***/ }),

/***/ "./src/app/services/user.model.ts":
/*!****************************************!*\
  !*** ./src/app/services/user.model.ts ***!
  \****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, username, firstname, lastname, type, password, cpassword) {
        this.email = email;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.type = type;
        this.password = password;
        this.cpassword = cpassword;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService, globals) {
        this.http = http;
        this.messageService = messageService;
        this.globals = globals;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.userURL = this.globals.awsapibase + 'user'; // URL to web api
    }
    UserService.prototype.init = function () {
        this.refreshCurrentUser();
    };
    UserService.prototype.refreshCurrentUser = function () {
        this.user = this.getCurrentUser();
    };
    /** POST: user signup */
    UserService.prototype.signup = function (user) {
        return this.http.post(this.userURL + '/signup', user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('')));
    };
    /** POST: user login */
    UserService.prototype.login = function (user) {
        return this.http.post(this.userURL + '/login', user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('')));
    };
    /** GET users from the server */
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.userURL + 's')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log('fetched users'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
    };
    /*** This whole thing might be better served by just reading the token so they don't ahve to relogin to fill this. */
    // Get current username
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.asObservable();
    };
    UserService.prototype.setCurrentUser = function (current) {
        this.currentUserSubject.next(current);
    };
    /** Log a Service message with the MessageService */
    UserService.prototype.log = function (message) {
        this.messageService.add("UserService: " + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/usetype.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usetype.service.ts ***!
  \*********************************************/
/*! exports provided: UsetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsetypeService", function() { return UsetypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UsetypeService = /** @class */ (function () {
    function UsetypeService(http, messageService, globals) {
        this.http = http;
        this.messageService = messageService;
        this.globals = globals;
        this.usetypesUrl = this.globals.awsapibase + 'usetypes'; // URL to web api
    }
    /** GET usetypes from the server */
    UsetypeService.prototype.getUseTypes = function () {
        var _this = this;
        return this.http.get(this.usetypesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (usetypes) { return _this.log('fetched usetypesUrl'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUseTypes', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    UsetypeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a Service message with the MessageService */
    UsetypeService.prototype.log = function (message) {
        this.messageService.add("UsetypeService: " + message);
    };
    UsetypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], UsetypeService);
    return UsetypeService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control:invalid {\r\n    /* background-color: red; */\r\n    border: 2px solid red;\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\t<div class=\"col-md-3\"></div>\r\n\t<div class=\"col-md-6\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>First Name:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.firstname\" />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Last Name:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.lastname\" />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Type:</label>\r\n\t\t\t<select type=\"text\" class=\"form-control\" [(ngModel)]=\"user.type\">\r\n\t\t\t\t<option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Email:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.email\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>User Name:</label>\r\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Password:</label>\r\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label>Confirm Password:</label>\r\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.cpassword\" required />\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-center\" *ngIf=\"error || success\">\r\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"error\">{{error}}</div>\r\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"success\">{{success}}</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-center\">\r\n\t\t\t<input type=\"button\" value=\"Sign Up\" class=\"btn btn-primary\" (click)=\"signup()\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.model */ "./src/app/services/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.error = '';
        this.success = '';
        this.types = ['QCer', 'cataloger'];
        this.user = new _services_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '', '');
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.error = '';
        this.success = '';
        /*if (!this.user.firstname || !this.user.lastname || !this.user.email || !this.user.password || !this.user.username || !this.user.type) { */
        if (!this.user.email || !this.user.password || !this.user.username) {
            this.error = 'Email, username and pasword are all required. Please try again';
            return;
        }
        if (this.user.password !== this.user.cpassword) {
            this.error = 'Password does not match';
            return;
        }
        this.userService.signup(this.user).subscribe(function (data) {
            if (data.error) {
                _this.error = data.error;
            }
            else {
                _this.success = 'Successfully signed up!';
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/site/site.component.css":
/*!*****************************************!*\
  !*** ./src/app/site/site.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control:invalid {\r\n    /* background-color: red; */\r\n    border: 2px solid red;\r\n}\r\n\r\n/*.form-control.id label{*/\r\n\r\n#siteID label{\r\n    display: inline-block;\r\n    clear: left;\r\n    width: 25px;\r\n    text-align:left;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    /*float: left; */\r\n    clear: left;\r\n    width: 25%;\r\n    text-align:left;\r\n}\r\n\r\ninput {\r\n    /*display: inline-block; */\r\n    float: left;\r\n  }\r\n\r\n/* used in parcel section */\r\n\r\n.selectable  label {\r\n    display: inline-block;\r\n    /*float: left; */\r\n    clear: left;\r\n    width: 31%;\r\n    text-align:left;\r\n}\r\n\r\n.selectable input {\r\n      width:200px;\r\n  }\r\n\r\n/*  for places section  */\r\n\r\n.places  label {\r\n    display: inline-block;\r\n    /*float: left; */\r\n    clear: left;\r\n    width: 80px;\r\n    text-align:left;\r\n}\r\n\r\n.places input {\r\n      width:250px;\r\n  }\r\n\r\n/*\r\n  .form-group checkbox_label {\r\n      margin-right: 10px;\r\n  }\r\n  */\r\n\r\n/*mat-checkbox { \r\n  .checkbox{ \r\n      width: 10px;\r\n      /* margin: 40 20px;*/\r\n\r\n/*text-align: left; */\r\n\r\n/*} */\r\n\r\n/*\r\n  .btn-danger{\r\n      margin-left: 75px;\r\n  }\r\n  */"

/***/ }),

/***/ "./src/app/site/site.component.html":
/*!******************************************!*\
  !*** ./src/app/site/site.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Diagnostic Data: {{diagnostic}} -->\r\n<form name=\"siteForm\" class=\"form-inline\" #siteForm=\"ngForm\" novalidate> \r\n  \r\n<!--  <input type=\"checkbox\" name=\"closeothers\" value=\"True\" [(ngModel)]=\"closeothers\">Close Others<br> -->\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Site Info \r\n      </mat-panel-title>\r\n      <mat-panel-description>        \r\n        {{model.siteID}} {{sitesavestatus}}\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"form-group\">\r\n      <!--<button class=\"btn btn-primary btn-sm\" (click)=\"addNewSite()\">Add Site</button> -->\r\n      <button class=\"btn btn-danger btn-sm\" (click)=\"deleteSite()\">Delete Site</button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"siteID\">*Site ID</label>\r\n      <input type=\"text\" class=\"form-control id\" id=\"siteID\" name=\"siteID\" placeholder=\"siteid\" [(ngModel)]=\"model.siteID\" readonly required>      \r\n    </div>\r\n    <div class=\"form-group\">\r\n     \r\n    </div>\r\n    <!-- not tradcking at site level\r\n    <div class=\"form-group\">\r\n      <label for=\"cataloger\">Cataloger</label>              \r\n      <select class=\"form-control\" [(ngModel)]=\"model.username\" id=\"cataloger\" name=\"cataloger\" (change)=\"saveSite()\" required>\r\n        <option *ngFor=\"let choice of users\"  [value]=\"choice.username\">{{choice.username}}</option>\r\n      </select>\r\n    </div>\r\n    -->\r\n    <div class=\"form-group\">\r\n      <label for=\"polypath\">Polygon path</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"path\" name=\"path\" placeholder=\"polygon path\" [(ngModel)]=\"model.path\" readonly required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"polypath\">Area (Sq Ft)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"patharea\" name=\"patharea\" placeholder=\"site area\" [(ngModel)]=\"model.patharea\" readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"language\">Notes</label>\r\n      <textarea rows=\"1\" class=\"form-control\" id=\"notes\" name=\"notes\" placeholder=\"site notes here\" [(ngModel)]=\"model.notes\" (blur)=\"saveSite()\"> </textarea>\r\n    </div>    \r\n    <div class=\"form-group\">\r\n      <label for=\"sitetype\">*Site Type</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"model.sitetype\" id=\"sitetype\" name=\"sitetype\" (change)=\"updateType()\" >\r\n        <option *ngFor=\"let choice of siteTypes\"  [value]=\"choice.sitetype\">{{choice.sitetype}}</option>\r\n      </select>                                \r\n    </div>\r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label for=\"usetypes\">*Use Type Code</label>              \r\n      <select class=\"form-control\" [(ngModel)]=\"model.usetype\" id=\"usetypes\" name=\"usetypes\" (change)=\"saveSite()\" required>\r\n        <option *ngFor=\"let choice of usetypes\"  [value]=\"choice.usetype\">{{choice.usetype}}</option>\r\n      </select>\r\n    </div>\r\n    -->\r\n    <!-- Change to checkbox\r\n    <div class=\"form-group\">\r\n      <label for=\"sitestatus\">Site Status</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"model.sitestatus\" id=\"sitestatus\" name=\"sitestatus\" (change)=\"saveSite()\" required>\r\n        <option *ngFor=\"let choice of sitestatuses\"  [value]=\"choice\">{{choice}}</option>\r\n      </select>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label class=\"form-group checkbox_label\">Site Complete &nbsp;\r\n        <input type=\"checkbox\" class=\"form-control\" id=\"sitecomplete\" name=\"sitecomplete\" [(ngModel)]=\"model.sitecomplete\"  (change)=\"saveSite()\" >  \r\n      </label>\r\n    </div>\r\n    -->    \r\n    <!-- [checked]= \"model.sitecomplete\"-->\r\n    <div class=\"form-group\">\r\n        <mat-checkbox\r\n          class=\"checkbox\"\r\n          id=\"sitecomplete\" name=\"sitecomplete\"          \r\n          [(ngModel)]=\"model.sitecomplete\"\r\n          labelPosition=\"before\"\r\n          (change)=\"saveSite()\">\r\n          Site Complete\r\n      </mat-checkbox>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Place Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"contactname\" name=\"contactname\" placeholder=\"Place Name\" [(ngModel)]=\"model.contactname\" (blur)=\"saveSite()\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"contactphone\" name=\"contactphone\" placeholder=\"Contact Phone\" [(ngModel)]=\"model.contactphone\" (blur)=\"saveSite()\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"contactemail\" name=\"contactemail\" placeholder=\"Contact Email\" [(ngModel)]=\"model.contactemail\" (blur)=\"saveSite()\">\r\n    </div>\r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label for=\"notes\">Contact Notes</label>\r\n      <textarea rows=\"1\" class=\"form-control\" id=\"contactnotes\" name=\"contactnotes\" placeholder=\"Contact Notes\" [(ngModel)]=\"model.contactnotes\" (blur)=\"saveSite()\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"contracttrace\">Search Method</label>\r\n      <textarea rows=\"3\" class=\"form-control\" id=\"pathtocontact\" name=\"pathtocontact\" placeholder=\"How you got contact info\" [(ngModel)]=\"model.pathtocontact\" (blur)=\"saveSite()\"> \r\n    </div>\r\n-->\r\n    <div class=\"form-group\">\r\n        <label for=\"pathtocontact\">Search Method</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"model.pathtocontact\" id=\"pathtocontact\" name=\"pathtocontact\" (change)=\"saveSite()\" >\r\n          <option *ngFor=\"let choice of searchMethods\"  [value]=\"choice\">{{choice}}</option>\r\n        </select>                                \r\n      </div>      \r\n  </mat-expansion-panel> <!-- End of Site Info panel-->\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Site Place Info \r\n      </mat-panel-title>\r\n      <mat-panel-description > \r\n        <span *ngIf=\"model.places?.length\">     \r\n          <span i18n> {model.places?.length, plural, =0 {No Places} =1 {1 Place} other {{{model.places?.length}} Places}}</span>\r\n        </span>\r\n        <span *ngIf=\"!(model.places?.length)\">No Places</span>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>            \r\n    <div class=\"places\" *ngFor=\"let place of model.places;let index=index;trackBy:trackByIndex;\" >\r\n       <!-- -->\r\n       <!-- -->\r\n      <div class=\"form-group\">       \r\n        <label for=\"placeid\">Place ID</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.places[index].placeid\" id=\"placeid-{{index}}\" name=\"placeid-{{index}}\" placeholder=\"placeid\" (blur)=\"saveSite()\">\r\n      </div>\r\n     \r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.places[index].name\" id=\"name-{{index}}\" name=\"name-{{index}}\" placeholder=\"Name\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"address\">Address</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.places[index].address\" id=\"address-{{index}}\" name=\"address-{{index}}\" placeholder=\"Address\" (blur)=\"saveSite()\">\r\n      </div>     \r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">Phone</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.places[index].phone\" id=\"phone-{{index}}\" name=\"phone-{{index}}\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"types\">Types</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.places[index].types\" id=\"types-{{index}}\" name=\"types-{{index}}\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <!--<label for=\"types\">Google URL</label> -->\r\n        <!--<input type=\"text\" [(ngModel)]=\"model.places[index].url\" id=\"url-{{index}}\" name=\"url-{{index}}\" (blur)=\"saveSite()\"> -->\r\n        <span><a target=\"_blank\" href={{model.places[index].url}}>Google page for {{model.places[index].name}}</a> </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"types\">Org Website</label>\r\n        <!--<input type=\"text\" [(ngModel)]=\"model.places[index].website\" id=\"website-{{index}}\" name=\"website-{{index}}\" (blur)=\"saveSite()\"> -->\r\n        <span><a target=\"_blank\" href={{model.places[index].website}}>{{model.places[index].website}}</a> </span>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"notes\">Notes</label>\r\n        <textarea rows=\"1\" id=\"notes-{{index}}\" name='notes-{{index}}' placeholder=\"Notes\" [(ngModel)]=\"model.places[index].notes\" (blur)=\"saveSite()\"> </textarea>\r\n      </div>   \r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-danger btn-sm\" (click)=\"onRemovePlace(index)\">Delete {{model.places[index].name}}</button>\r\n      </div>   \r\n       <!-- -->   \r\n    </div>\r\n    <!--<button class=\"btn btn-primary\" (click)=\"addNewPlace()\">Add Place</button>    -->\r\n  </mat-expansion-panel> <!-- End of Site Place panel-->\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Site Parcel Info \r\n      </mat-panel-title>\r\n      <mat-panel-description > \r\n        <span *ngIf=\"model.parcels?.length\">     \r\n          <span i18n> {model.parcels?.length, plural, =0 {No Parcels} =1 {1 Parcel} other {{{model.parcels?.length}} Parcels}}</span>\r\n        </span>\r\n        <span *ngIf=\"!(model.parcels?.length)\">No Parcels</span>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>        \r\n    <!--\r\n    <div class=\"form-group\">\r\n      <input type=\"checkbox\" name=\"partialparcel\" value=\"True\" [(ngModel)]=\"model.partialparcel\"> Parcels extend outside block<br>\r\n    </div>\r\n    -->\r\n    <!-- can also use let c = count -->\r\n    <div class=\"selectable\" *ngFor=\"let parcel of model.parcels;let index=index;trackBy:trackByIndex;\" (click)=\"onHighlightParcel(model.parcels[index])\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"apn\">Parcel ID</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].apn\" id=\"apn-{{index}}\" name=\"apn-{{index}}\" placeholder=\"APN\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"siteaddress\">Site Address</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].parceladdress\" id=\"siteaddress-{{index}}\" name=\"siteaddress-{{index}}\" placeholder=\"Site Address\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"owneraddress\">Owner Address</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].parcelowneraddress\" id=\"owneraddress-{{index}}\" name=\"owneraddress-{{index}}\" placeholder=\"Owner Address\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"ownername\">Owner Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].parcelowner\" id=\"ownername-{{index}}\" name=\"ownername-{{index}}\" placeholder=\"Owner Name\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"parcelpath\">Parcel Path</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].parcelpath\" id=\"parcelpath-{{index}}\" name=\"parcelpath-{{index}}\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"parcelarea\">Area (Sq Ft)</label>\r\n        <input type=\"text\" [(ngModel)]=\"model.parcels[index].parcelarea\" id=\"parcelarea-{{index}}\" name=\"parcelarea-{{index}}\" (blur)=\"saveSite()\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"parcelnotes\">Notes</label>\r\n        <textarea rows=\"1\" id=\"parcelnotes-{{index}}\" name='parcelnotes-{{index}}' placeholder=\"Notes\" [(ngModel)]=\"model.parcels[index].parcelnotes\" (blur)=\"saveSite()\"> </textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-danger btn-sm\" (click)=\"onRemoveParcel(index)\">Delete Parcel {{model.parcels[index].apn}}</button>\r\n      </div>\r\n    </div>\r\n    <!-- <button class=\"btn btn-primary\" (click)=\"addNewParcel()\">Add Parcel</button>  -->\r\n  </mat-expansion-panel> <!-- End of Site Parcel panel-->\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        QC Notes\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>        \r\n    <div class=\"form-group\">\r\n      <label for=\"qcnotes\">Notes</label>\r\n      <textarea rows=\"5\" class=\"form-control\" id=\"qcnotes\" name=\"qcnotes\" placeholder=\"Notes\" [(ngModel)]=\"model.qcnotes\" (blur)=\"saveSite()\"> </textarea>\r\n    </div>\r\n  </mat-expansion-panel>  <!-- End of QC panel-->\r\n\r\n  <!-- Submit button. Note that its tied to createUser() function from addCtrl. Also note ng-disabled logic which prevents early submits.  -->  \r\n  <!--<button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"saveSite()\" (disabled)=\"addForm.$invalid\">Submit</button> -->\r\n\r\n</form> <!-- End of addForm -->\r\n"

/***/ }),

/***/ "./src/app/site/site.component.ts":
/*!****************************************!*\
  !*** ./src/app/site/site.component.ts ***!
  \****************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_site_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/site.model */ "./src/app/services/site.model.ts");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/block */ "./src/app/services/block.ts");
/* harmony import */ var _services_usetype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usetype.service */ "./src/app/services/usetype.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_sitetype_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/sitetype.service */ "./src/app/services/sitetype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SiteComponent = /** @class */ (function () {
    function SiteComponent(changeDetector, siteService, usetypesService, sitetypesService, userService) {
        this.changeDetector = changeDetector;
        this.siteService = siteService;
        this.usetypesService = usetypesService;
        this.sitetypesService = sitetypesService;
        this.userService = userService;
        this.highlightParcel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addSite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeParcel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeleteSite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateSiteMapRelated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removePlace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //lookup variables
        this.sitestatuses = ['In Progress', 'Ready for QC', 'QC Notes', 'QC Complete'];
        //siteTypes = ['CBSA', 'RBSA', 'Residential with Common', 'Residential > 3 Stories', 'Non-Residential OLSA'];
        /*
        siteTypes = ['Agriculture and fisheries', 'Bulk storage (tanks and silos)', 'Cemetery',
         'Courthouse', 'Data center', 'Independent parking', 'Jail, prison, asylum', 'Manufacturing',
         'Military bases', 'Mining, gas/oil extraction', 'Park/open space with no building > 1,000 SF',
         'Ports (air and water)', 'Power generation, water supply, waste and water treatment',
         'Rail/bus stations', 'Residential <= 3 stories with Common', 'Residential > 3 Stories',
         'Stadiums', 'Mixed Type', 'Unkown'];
         */
        this.searchMethods = ['Place name', 'Place address', 'Parcel owner', 'Parcel site address', 'Place name from signage'];
        this.noSiteText = 'no site id yet';
        this.blockGeoid = 'TBD';
        this.cataloger = 'TBD';
        this.model = new _services_site_model__WEBPACK_IMPORTED_MODULE_1__["Site"](this.noSiteText, this.cataloger, this.blockGeoid);
        this.addNewParcel = function () {
            console.log('in addNewParcel, type is ' + typeof this.model.parcels);
            if (typeof this.model.parcels != 'object') {
                this.model.parcels = [];
            }
            this.model.parcels.push({ 'apn': '' });
        };
        this.addNewPlace = function () {
            console.log('in addNewPlare, type is ' + typeof this.model.places);
            if (typeof this.model.places != 'object') {
                this.model.places = [];
            }
            this.model.places.push({ 'placeid': '' });
        };
        this.getNewSiteID = function () {
            return new Date().getTime() + '_' + Math.floor(Math.random() * 1000);
        };
        this.clearSite = function () {
            //are both of these necessary?
            this.model = new _services_site_model__WEBPACK_IMPORTED_MODULE_1__["Site"](this.noSiteText, this.block.cataloger, 'fill in block from service');
            this.siteForm.reset;
        };
    }
    SiteComponent.prototype.ngOnInit = function () {
        //subscribe to services
        this.getUsetypes();
        this.getSitetypes();
        this.getUsers();
    };
    SiteComponent.prototype.ngOnChanges = function (changes) {
        var data = changes.site && changes.site.currentValue;
        var blockData = changes.block && changes.block.currentValue;
        if (data) {
            //if (changes.site)
            //console.log('in OnChanges for site', changes.model);  //, ' previous value: ', changes.model.previousValue);
            this.model = data;
            this.sitesavestatus = "";
            /*  All bogus
            if (changes.site.previousValue && //not the original load
              (changes.site.currentValue.siteID == changes.site.previousValue.siteID) && //site hasn't changed
              (changes.site.currentValue.parcels != changes.site.previousValue.parcels)){ //parcels has changed
                */
        }
        if (blockData) {
            this.blockGeoid = blockData.block.toString();
            this.cataloger = blockData.cataloger;
            //console.log('in onChanges block',blockData);
            /*
            if(this.model){
              this.model.username = blockData.cataloger;
            }
            */
            this.sitesavestatus = "";
        }
    };
    SiteComponent.prototype.getUsetypes = function () {
        var _this = this;
        this.usetypesService.getUseTypes()
            .subscribe(function (usetypes) {
            _this.usetypes = usetypes;
            //console.log('use types',this.usetypes);
            _this.usetypes.sort(function (a, b) { return a.usetype.toString().localeCompare(b.usetype.toString()); });
        });
    };
    SiteComponent.prototype.getSitetypes = function () {
        var _this = this;
        this.sitetypesService.getSiteTypes()
            .subscribe(function (types) {
            _this.siteTypes = types;
            //console.log('use types',this.usetypes);
            _this.siteTypes.sort(function (a, b) { return a.sitetype.toString().localeCompare(b.sitetype.toString()); });
        });
    };
    SiteComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this.users.sort(function (a, b) { return a.username.toString().localeCompare(b.username.toString()); });
        });
    };
    SiteComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    SiteComponent.prototype.onHighlightParcel = function (parcel) {
        console.log('in onHighlightParcel', parcel);
        this.highlightParcel.emit(parcel);
    };
    SiteComponent.prototype.addNewSite = function () {
        var _this = this;
        if (this.blockGeoid) {
            var hasDummy_1 = false;
            if (this.model.siteID && this.model.siteID == this.noSiteText) {
                //delete placeholder site
                //console.log('in dummy site add');
                hasDummy_1 = true;
                this.model.siteID = this.getNewSiteID();
                this.model.username = this.block.cataloger;
                this.model.block = this.blockGeoid;
            }
            else {
                this.model = new _services_site_model__WEBPACK_IMPORTED_MODULE_1__["Site"](this.getNewSiteID(), this.block.cataloger, this.blockGeoid);
            }
            var SiteData = this.model;
            SiteData.updated_at = Date.now();
            console.log('before emit site data:', SiteData);
            //this.addSite.emit(SiteData);
            this.siteService.updateSite(SiteData)
                .subscribe(function (data) {
                _this.sitesavestatus = 'New site created.';
                if (hasDummy_1) {
                    _this.siteService.deleteSite(_this.noSiteText).subscribe(function () {
                        _this.changeDetector.detectChanges();
                        console.log('in dummy after delete model count:', _this.model);
                        //this.addSite.emit(SiteData);
                    });
                }
                else {
                    _this.changeDetector.detectChanges();
                    console.log('in add site model count:', _this.model);
                    _this.addSite.emit(SiteData);
                }
                //this.addSite.emit(SiteData);
            });
        }
    };
    SiteComponent.prototype.saveSite = function () {
        //debugger;
        /* trouble on floating panel
        if ($scope.addForm.$pristine) {
          console.log("Form is pristine, dont save");
          $scope.sitesavestatus = 'No changes, site not saved'
          //addForm.$pristine
        } else */
        var _this = this;
        if (typeof this.model.siteID === "undefined") {
            console.log("no site id, dont save");
            alert("no site id, couldn't save");
            this.sitesavestatus = "No site id, can't save site";
            //return;
            /*
            } else if (!this.model.username) {
            //} else if (!this.block.cataloger) {
              this.userService.getCurrentUser()
              .subscribe((user)=>{
                this.model.username = user.username;
              })
              */
            /*
            console.log("in savesite, dont save, usename:", this.model.username, ' cataloger:', this.cataloger);
            this.sitesavestatus = "No catalogger, can't save site"
            alert("Please fill in catalogger so the site can be saved");
            */
        }
        else if (!this.isValidSite()) {
            //set last field back if site status
            this.sitesavestatus = "Data missing, can't save site";
            this.changeDetector.detectChanges();
            this.model.sitecomplete = false;
            alert(this.validateMsg);
            console.log('end of save site with validation fail,  sitecomplete is ', this.model.sitecomplete);
            // return; 
        }
        else {
            /*
              var roadsdata = this.model.roads   //JSON.stringify(model.roads);
              console.log('roads is ' + roadsdata);
              if (roadsdata == '') {
                  roadsdata = [];
                  console.log('roads is changed to  ' + roadsdata + '. should be []');
              }
              var parceldata = this.model.parcels
              console.log('parcels is ' + parceldata);
              if (parceldata == '') {
                  parceldata = [];
                  //console.log('parceldata is changed to  ' + parceldata + '. should be []');
              }
              */
            // Grabs all of the text box fields
            // *** Add in QC logic so doesn't change in QC mode
            /*
            if (!this.model.username){
              this.model.username = this.block.cataloger;
            }
            */
            //mark site in progress when saving
            /* changed to site complete
            if (this.model && !this.model.sitestatus){
               this.model.sitestatus = this.sitestatuses[0];
             }
             */
            var SiteData = this.model;
            SiteData.updated_at = Date.now();
            //console.log("filled SiteData. Roads is " + SiteData.roads);
            //debugger;
            // Saves the site data to the db
            this.siteService.updateSite(SiteData)
                .subscribe(function () { return _this.sitesavestatus = 'site updated'; });
            console.log("site saved", this.model);
            this.sitesavestatus = 'site Saved';
            // *** need to determine if type has changed
            //maybe tie a function directly to types blur event!!!
        }
        //end of else
        //console.log("filled SiteData. " + JSON.stringify(SiteData));
    }; //end save site
    SiteComponent.prototype.deleteSite = function () {
        var _this = this;
        var siteid = this.model.siteID;
        console.log('in deleteSite', siteid);
        var msg = 'Are sure you want to delete site ' + siteid + '?';
        if (window.confirm(msg)) {
            this.siteService.deleteSite(siteid)
                .subscribe(function () {
                //trigger changes to map and sitelist, maybe with an emit
                _this.onDeleteSite.emit(siteid);
                //this should really look up another site and switch to it. Only do this if there aren't any other sites
                _this.model = new _services_site_model__WEBPACK_IMPORTED_MODULE_1__["Site"]('no site id yet', _this.cataloger, 'block from service');
                // this.changeDetector.detectChanges();
            });
        }
    };
    SiteComponent.prototype.isValidSite = function () {
        // *** add more validation rules
        //console.log('in isValidSite');
        var isValid = false;
        this.validateMsg = 'Required site data is missing:';
        //change this to also short circuit if block status is blank or update a blank sitestatus to in progress
        console.log('at start of validation sitecomplete is', this.model.sitecomplete);
        /*if  ((this.sitestatuses.indexOf(this.model.sitestatus)<1)) return true; // still in progress don't validate */
        if (!this.model.sitecomplete)
            return true; // still in progress don't validate    
        /*
          let statusindex = this.sitestatuses.indexOf(this.model.sitestatus);
          (this.model.sitestatus == this.sitestatuses[0])) return true; // still in progress don't validate
    */
        //if (this.block && this.block[0] && this.block[0].cataloger && this.block[0].block && this.block[0].blocktype && this.block[0].lightcount && this.block[0].blockstatus){
        if (this.model.siteID && this.model.siteID != this.noSiteText && this.model.sitetype && this.model.block
            && (this.model.contactphone || this.model.places)) {
            if (!this.model.contactphone) {
                var hasPhone = false;
                for (var index = 0; index < this.model.places.length; index++) {
                    var element = this.model.places[index];
                    if (element.phone) {
                        hasPhone = true;
                        break;
                    }
                }
                if (!hasPhone) {
                    this.validateMsg += " missing phone number.";
                    //this.model.sitecomplete = false;
                    //this.changeDetector.detectChanges();
                }
                isValid = hasPhone;
            }
            else if (this.model.contactphone.length < 10) {
                this.validateMsg += " phone number is too short, need 10 digits.";
                //this.model.sitecomplete = false;
                //this.changeDetector.detectChanges();
            }
            else {
                isValid = true;
                //console.log ('has contact phone why here?', this.model.contactphone, !this.model.contactphone, this.model.places);
            }
            //isValid = true; 
            /*
            if (!this.model.username || this.model.username == 'undefined') {
              this.userService.getCurrentUser()
              .subscribe((user) => {
                console.log('in userservice ',user);
                if(user){
                  this.model.username = user.username;
                  isValid = true;
                } else {
                  console.log ('no user returned from userservice');
                }
              });
            } else {
             console.log('in valid with username ', this.model.username);
              isValid = true;
            }
            */
        }
        else {
            if (!this.model.siteID || this.model.siteID == this.noSiteText)
                this.validateMsg += " no site id,";
            if (!this.model.sitetype)
                this.validateMsg += " no site type,";
            if (!this.model.block)
                this.validateMsg += " no block,";
            if (!this.model.contactphone)
                this.validateMsg += " missing phone number,";
            this.validateMsg = this.validateMsg.slice(0, -1) + '.';
            //this.validateMsg = 'Required site data is missing'
            this.model.sitecomplete = false;
            //console.log('validation fail complete:',this.model.sitecomplete);
        }
        /*
      }else{
        this.validateMsg = 'Required block data is missing'
      }
          */
        return isValid;
    };
    SiteComponent.prototype.onRemoveParcel = function (index) {
        console.log('remove parcel', index, this.model.parcels[index].apn);
        this.removeParcel.emit(this.model.parcels[index].apn);
    };
    SiteComponent.prototype.onRemovePlace = function (index) {
        console.log('remove place', index, this.model.places[index].placeid);
        this.removePlace.emit(this.model.places[index].placeid);
    };
    SiteComponent.prototype.updateType = function () {
        console.log('need to refresh map', this.model);
        this.saveSite();
        this.updateSiteMapRelated.emit(this.model);
    };
    Object.defineProperty(SiteComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            var resp = "";
            /*
            if (this.block && this.block.cataloger){
              resp = "cataloger:" + JSON.stringify(this.block.cataloger);
            }
            if (this.model.username){
              resp += ' username:' + this.model.username;
            }
            */
            resp = JSON.stringify(this.model.sitecomplete);
            return resp;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_site_model__WEBPACK_IMPORTED_MODULE_1__["Site"])
    ], SiteComponent.prototype, "site", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_block__WEBPACK_IMPORTED_MODULE_3__["Block"])
    ], SiteComponent.prototype, "block", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "highlightParcel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "addSite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "removeParcel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "onDeleteSite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "updateSiteMapRelated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SiteComponent.prototype, "removePlace", void 0);
    SiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site.component.html */ "./src/app/site/site.component.html"),
            styles: [__webpack_require__(/*! ./site.component.css */ "./src/app/site/site.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_site_service__WEBPACK_IMPORTED_MODULE_2__["SiteService"],
            _services_usetype_service__WEBPACK_IMPORTED_MODULE_4__["UsetypeService"],
            _services_sitetype_service__WEBPACK_IMPORTED_MODULE_6__["SitetypeService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], SiteComponent);
    return SiteComponent;
}());



/***/ }),

/***/ "./src/app/sitesumtable/sitesumtable.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sitesumtable/sitesumtable.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-header-cell, .mat-cell {\r\n    padding-right: 15px;\r\n  }"

/***/ }),

/***/ "./src/app/sitesumtable/sitesumtable.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sitesumtable/sitesumtable.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Site List -->\r\n<!--Diagnostic {{diagnostic}} -->\r\n<!--sites length {{sites.length}} -->\r\n<mat-form-field>\r\n  <input matInput (keyup)=\"applySiteFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"sitedataSource\" matSort>\r\n    <!-- Block -->\r\n    <ng-container matColumnDef=\"block\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Block </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.block}} </td>\r\n    </ng-container>  \r\n\r\n    <!-- Site Column -->\r\n    <ng-container matColumnDef=\"siteID\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Site </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.siteID}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Type Column -->\r\n    <ng-container matColumnDef=\"sitetype\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Site Type </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.sitetype}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Status -->\r\n    <ng-container matColumnDef=\"sitecomplete\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.sitecomplete}} </td>\r\n    </ng-container>  \r\n\r\n    <!-- Use Type -->\r\n    <ng-container matColumnDef=\"usetype\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Use Type </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.usetype}} </td>\r\n    </ng-container>  \r\n\r\n    <!-- User Name -->\r\n    <!--\r\n    <ng-container matColumnDef=\"username\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Catalogger </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.username}} </td>\r\n    </ng-container>  \r\n    -->\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedSiteColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedSiteColumns;\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sitesumtable/sitesumtable.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sitesumtable/sitesumtable.component.ts ***!
  \********************************************************/
/*! exports provided: SitesumtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesumtableComponent", function() { return SitesumtableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_current_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/current-block.service */ "./src/app/services/current-block.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SitesumtableComponent = /** @class */ (function () {
    function SitesumtableComponent(siteService, currentBlockService, changeDetectorRef) {
        this.siteService = siteService;
        this.currentBlockService = currentBlockService;
        this.changeDetectorRef = changeDetectorRef;
        //sites:Site[];
        //displayedSiteColumns: string[] = ['siteID', 'sitetype', 'usetype', 'username'];
        this.displayedSiteColumns = ['block', 'siteID', 'sitetype'];
        this.sitedataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        //this.sitedataSource = new MatTableDataSource(this.sites);
        //this.sitedataSource.paginator = this.paginator;
        //this.sitedataSource.sort = this.sort;  
    }
    //  ******  Figure out how to refresh sitedataSource when there are changes to this.currentBlockService.getBlockSites()  *** //
    SitesumtableComponent.prototype.ngOnInit = function () {
        console.log('in ngOnInit');
        /* tried to use this to tie to input, but it didn't work
        this.sitedataSource = new MatTableDataSource(this.sites);
        this.sitedataSource.paginator = this.paginator;
        this.sitedataSource.sort = this.sort;
        */
        /*
        this.siteService.getAllSites().subscribe(sites => {
          this.sites = sites;
          console.log('in ngOnInit block data: ' + this.diagnostic + ' site count is ' + this.sites.length);
          this.sitedataSource = new MatTableDataSource(this.sites);
          this.sitedataSource.paginator = this.paginator;
          this.sitedataSource.sort = this.sort;
          //this.changeDetectorRef.detectChanges();
        })
      **/
    };
    SitesumtableComponent.prototype.ngOnChanges = function (changes) {
        /*
        console.log('in ngOnChanges');
        this.sitedataSource = new MatTableDataSource(this.sites);
        this.sitedataSource.paginator = this.paginator;
        this.sitedataSource.sort = this.sort;
        */
        //checkk for data change before calling refresh 
        //console.log('changes', changes);
        if (changes.sites &&
            changes.sites.currentValue &&
            changes.sites.currentValue !== changes.sites.previousValue) {
            this.refresh();
        }
    };
    SitesumtableComponent.prototype.refresh = function () {
        //console.log('in sitesumtable refresh there are ' + this.sites.length);
        // this.currentBlockService.getBlockSites().subscribe(sites =>{
        //this.sites = sites;
        // console.log('in sitesumtable refresh block data:' + this.diagnostic + ' site count is ' + this.sites.length);
        //console.log('data source', this.sitedataSource);
        this.sitedataSource.data = (this.sites);
        this.sitedataSource.paginator = this.paginator;
        this.sitedataSource.sort = this.sort;
        //this.changeDetectorRef.detectChanges();      
        // })       
    };
    SitesumtableComponent.prototype.applySiteFilter = function (filterValue) {
        console.log('in apply filter ' + filterValue);
        this.sitedataSource.filter = filterValue.trim().toLowerCase();
        if (this.sitedataSource.paginator) {
            this.sitedataSource.paginator.firstPage();
        }
    };
    Object.defineProperty(SitesumtableComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.sites); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SitesumtableComponent.prototype, "sites", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SitesumtableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SitesumtableComponent.prototype, "sort", void 0);
    SitesumtableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sitesumtable',
            template: __webpack_require__(/*! ./sitesumtable.component.html */ "./src/app/sitesumtable/sitesumtable.component.html"),
            styles: [__webpack_require__(/*! ./sitesumtable.component.css */ "./src/app/sitesumtable/sitesumtable.component.css")]
        }),
        __metadata("design:paramtypes", [_services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"],
            _services_current_block_service__WEBPACK_IMPORTED_MODULE_4__["CurrentBlockService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SitesumtableComponent);
    return SitesumtableComponent;
}()); //end of class



/***/ }),

/***/ "./src/app/summap/summap.component.css":
/*!*********************************************!*\
  !*** ./src/app/summap/summap.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".embed-responsive {\r\n    position: relative;\r\n    padding-bottom: 50%; /* This is the aspect ratio */\r\n    height: 0;\r\n    overflow: hidden;\r\n  }\r\n  .embed-responsive-item {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 90%; /* !important */\r\n    /*height: 100%;  !important */\r\n  }\r\n  /* color legend  */\r\n  .square {\r\n  float: left; \r\n  /*position: absolute;\r\n  top: 10px;\r\n  left: 120px; \r\n  */\r\n  padding-left: 2px;\r\n  height: 25px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .2);\r\n  font-size: 12pt;\r\n}\r\n  /* ['#1E90FF', '#FF1493', '#32CD32', '#FFFF00', '#4B0082']; */\r\n  .progress {\r\n  background: cyan;\r\n  width: 100px;\r\n}\r\n  .readyqc {\r\n  background: greenyellow;\r\n  width: 100px;\r\n}\r\n  .qcnotes {\r\n  background: fuchsia;\r\n  width: 125px;\r\n}\r\n  .qccomplete {\r\n  background:orange;\r\n  width: 100px;\r\n  /*color: #eee; */\r\n}\r\n  .blank {\r\n  background:black;\r\n  width: 60px;\r\n  color: #eee; \r\n}"

/***/ }),

/***/ "./src/app/summap/summap.component.html":
/*!**********************************************!*\
  !*** ./src/app/summap/summap.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- color legend -->\r\n  <div id='colorlegend'>\r\n  <div class='square progress'>In Progress</div>\r\n  <div class='square readyqc'>Ready QC</div>\r\n  <div class='square qcnotes'>QC In Progress</div>\r\n  <div class='square qccomplete'>QC Comp</div>\r\n  <div class='square blank'>Blank</div>\r\n\r\n</div>\r\n<!-- Map -->\r\n<div class=\"embed-responsive\">\r\n  <div #summap  class=\"embed-responsive-item\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/summap/summap.component.ts":
/*!********************************************!*\
  !*** ./src/app/summap/summap.component.ts ***!
  \********************************************/
/*! exports provided: SummapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummapComponent", function() { return SummapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/block.service */ "./src/app/services/block.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />


var SummapComponent = /** @class */ (function () {
    function SummapComponent(blockService) {
        this.blockService = blockService;
        this.defLat = 46.073;
        this.defLng = -118.368;
        this.blockstatuses = ['In Progress', 'Ready for QC', 'QC In Progress', 'QC Complete'];
        //colors: Array<string> = ['#000000', '#1E90FF', '#FF1493', '#32CD32', '#FFFF00', '#4B0082'];
        this.colors = ['black', 'cyan', 'greenyellow', 'fuchsia', 'orange'];
        this.symbols = [google.maps.SymbolPath.CIRCLE, google.maps.SymbolPath.CIRCLE, google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
            google.maps.SymbolPath.FORWARD_OPEN_ARROW, google.maps.SymbolPath.FORWARD_CLOSED_ARROW];
        this.scales = [10, 10, 10, 10, 10];
    }
    SummapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockService.getAllBlocks()
            .subscribe(function (blocks) {
            _this.blocks = blocks;
            //console.log ('in getblocks', this.blocks);
            //console.log ('after getblocks call', this.blocks);
            var mapProp = {
                center: new google.maps.LatLng(_this.defLat, _this.defLng),
                zoom: 19,
                //mapTypeId: google.maps.MapTypeId.ROADMAP
                mapTypeId: google.maps.MapTypeId.HYBRID,
                tilt: 0,
                scaleControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.BOTTOM_LEFT
                }
            };
            //var map = new google.maps.Map(document.getElementById('map')
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapProp);
            _this.blockLayer = new google.maps.FusionTablesLayer({
                query: {
                    //Sample census blocks
                    //https://www.google.com/fusiontables/DataSource?docid=181lhJJkYVFl3-SBjZ49gj_DPCNhJTGdhm_-Z0oAg
                    select: '\'geometry\'',
                    //where: 'name = ' + this.selectedBlock,
                    from: '1UuMuU8demcoaoW2pIVc1P8nsD_YhpOzfa5RRsGwk'
                },
                options: {
                    styleId: 2,
                    templateId: 2
                }
            });
            _this.blockLayer.setMap(_this.map);
            var bounds = new google.maps.LatLngBounds();
            _this.blocks.forEach(function (block) {
                var coords = new google.maps.LatLng(block.cblat, block.cblon);
                bounds.extend(coords);
                //console.log('blockstatus', block.blockstatus);
                var color = _this.colors[_this.blockstatuses.indexOf(block.blockstatus) + 1];
                //let path = this.symbols[this.blockstatuses.indexOf(block.blockstatus)+1]; 
                var path = _this.symbols[0];
                var scale = _this.scales[_this.blockstatuses.indexOf(block.blockstatus) + 1];
                new google.maps.Marker({
                    position: coords,
                    map: _this.map,
                    title: block.block,
                    icon: {
                        path: path,
                        strokeColor: color,
                        scale: scale
                    }
                });
            });
            _this.map.fitBounds(bounds);
        });
    };
    SummapComponent.prototype.getBlocks = function () {
        var _this = this;
        this.blockService.getAllBlocks()
            .subscribe(function (blocks) {
            _this.blocks = blocks;
            //console.log ('in getblocks', this.blocks);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('summap'),
        __metadata("design:type", Object)
    ], SummapComponent.prototype, "mapElement", void 0);
    SummapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summap',
            template: __webpack_require__(/*! ./summap.component.html */ "./src/app/summap/summap.component.html"),
            styles: [__webpack_require__(/*! ./summap.component.css */ "./src/app/summap/summap.component.css")]
        }),
        __metadata("design:paramtypes", [_services_block_service__WEBPACK_IMPORTED_MODULE_1__["BlockService"]])
    ], SummapComponent);
    return SummapComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    margin-left : 10px;  \r\n  }\r\n\r\n  .mat-header-cell, .mat-cell {\r\n    padding-right: 20px;\r\n  }\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- summary.html -->\r\n\r\n<div>\r\n  <h4 class=\"text-center\">Catalogging Summary</h4>\r\n</div>\r\n<div>\r\n  <!--<p>Filter choices go here.</p> -->\r\n</div>\r\n\r\n <!-- diagnostic {{diagnostic}}  -->\r\n  <div class=\"row content\">\r\n    <div class=\"col-md-4\">\r\n      Block Summary\r\n      <ul>\r\n          <li *ngFor=\"let block of blocks | groupby: 'blockstatus'  \">         \r\n            {{ block.value.length }} {{block.key}}\r\n            <td>\r\n            <tr *ngFor=\"let item of block.value | groupby: 'blocktype' \">\r\n              {{item.value.length}} {{item.key}}\r\n              </tr>\r\n            </td>\r\n          </li>            \r\n      </ul>\r\n    </div> <!--  End of block column-->\r\n    <div class=\"col-md-8\">\r\n      Site Summary\r\n     <ul>\r\n        <li *ngFor=\"let site of allSites | groupby:'sitetype' \">            \r\n          {{site.value.length}} {{site.key}}\r\n          <!--\r\n          <td>\r\n            <tr *ngFor=\"let item of site.value | groupby:'sitetype' \">    \r\n              {{item.value.length}} {{item.key}}\r\n            </tr>\r\n          </td> \r\n        -->\r\n        </li>      \r\n      </ul>\r\n    </div> <!--  End of site column-->\r\n  </div> <!--   End of Row  -->\r\n  <p>\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"downloadBlocks(allBlocks, 'AllBlockData')\" >Download Block Data</button>\r\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"downloadSites(allSites, 'AllSiteData')\" >Download Site Data</button>\r\n  </p>\r\n  <app-summap></app-summap>\r\n<mat-grid-list cols=\"2\">\r\n  <mat-grid-tile>\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyBlockFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    \r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"blockdataSource\" matSort>\r\n    \r\n          <!-- Checkbox Column -->\r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                          (change)=\"$event ? selection.toggle(row) : null\"\r\n                          [checked]=\"selection.isSelected(row)\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Block Column -->\r\n        <ng-container matColumnDef=\"block\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Block </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.block}} </td>\r\n        </ng-container>\r\n    \r\n        <!-- Block Type Column -->\r\n        <ng-container matColumnDef=\"blocktype\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Type </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.blocktype}} </td>\r\n        </ng-container>\r\n    \r\n        <!-- Block Status -->\r\n        <ng-container matColumnDef=\"blockstatus\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.blockstatus}} </td>\r\n        </ng-container>  \r\n\r\n        <!-- Light Count -->\r\n        <ng-container matColumnDef=\"lightcount\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Lights </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.lightcount}} </td>\r\n        </ng-container>          \r\n    \r\n        <!-- Site count -->\r\n        <ng-container matColumnDef=\"blocksitecount\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Site Count </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.blocksitecount}} </td>\r\n        </ng-container>  \r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedBlockColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedBlockColumns;\"\r\n                    (click)=\"onRowClick(row)\">\r\n        </tr>\r\n      </table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile>\r\n    <app-sitesumtable [sites]=\"siteList\"></app-sitesumtable>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"downloadSitesAllFields(allSites, 'AllSiteDataFields')\" >Download Site Data</button>\r\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_site_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/site.service */ "./src/app/services/site.service.ts");
/* harmony import */ var _services_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/block.service */ "./src/app/services/block.service.ts");
/* harmony import */ var _services_current_block_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/current-block.service */ "./src/app/services/current-block.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SummaryComponent = /** @class */ (function () {
    //@ViewChild(MatPaginator) paginatorSite: MatPaginator;
    //@ViewChild(MatSort) sortSite: MatSort;
    function SummaryComponent(blockService, siteService, currentBlockService, changeDetectorRef) {
        this.blockService = blockService;
        this.siteService = siteService;
        this.currentBlockService = currentBlockService;
        this.changeDetectorRef = changeDetectorRef;
        this.displayedBlockColumns = ['block', 'blocktype', 'blockstatus', 'lightcount'];
        //displayedSiteColumns: string[] = ['siteID', 'sitetype', 'usetype', 'username'];
        //sitedataSource: MatTableDataSource<Site>;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        //this.blockdataSource = new MatTableDataSource(this.blocks);
        //console.log ('blockdatasource has ' + JSON.stringify(this.blockdataSource));
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockService.getAllBlocks().subscribe(function (blocks) {
            //console.log('block data:' + this.blocks.length);
            _this.handleLoadBlocks(blocks);
            /*
            this.blocks = blocks;
            this.blockdataSource = new MatTableDataSource(this.blocks);
            this.blockdataSource.paginator = this.paginator;
            this.blockdataSource.sort = this.sort;
            */
        });
        this.siteService.getAllSites().subscribe(function (sites) {
            _this.allSites = sites;
            _this.siteList = sites;
        });
        this.blockService.getAllBlocks().subscribe(function (blocks) { return _this.allBlocks = blocks; });
    };
    SummaryComponent.prototype.handleLoadBlocks = function (blocks) {
        this.blocks = blocks;
        this.blockdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.blocks);
        this.blockdataSource.paginator = this.paginator;
        this.blockdataSource.sort = this.sort;
    };
    SummaryComponent.prototype.applyBlockFilter = function (filterValue) {
        this.blockdataSource.filter = filterValue.trim().toLowerCase();
        if (this.blockdataSource.paginator) {
            this.blockdataSource.paginator.firstPage();
        }
    };
    SummaryComponent.prototype.onRowClick = function (row) {
        /* disabling the connection between the tables for now
        //console.log('in onrowclick: ' + JSON.stringify(row.block));
        //pass blockid to site table for filtering
        //this.block = row as Block;
        this.currentBlockService.setSelectedBlock(row as Block);
        //below causing filter error I believe
        this.currentBlockService.setBlockSites(row as Block);
        //this.currentBlockService.getBlockSites().subscribe(sites => {
        this.siteService.getAllSitesByBlock(row.block).subscribe(sites => {
          this.siteList = sites;
          //console.log ('in onrowclick, block is ' + JSON.stringify(row.block) + ' sitelist has ' + this.siteList.length);
          console.log ('in onrowclick, sitelist has ' + this.siteList.length);
          this.changeDetectorRef.detectChanges();
        })
        */
    };
    SummaryComponent.prototype.downloadCSV = function (data, header, filename) {
        /*
         var csvData = this.convertToCsv(data);
         var blob = new Blob([csvData], { type: 'text/csv' });
         var url= window.URL.createObjectURL(blob);
         window.open(url);
         */
        //const replacer = (key, value) => value === null ? '' : value;
        //all this craziness is to deal with the commas in the embedded arrays
        //HAve to deal with the introduced \" in map stringify call later
        var replacer = function (key, value) {
            var output;
            if (!value) {
                output = '';
            }
            else if (!isNaN(value)) {
                output = value;
            }
            else {
                output = '"' + JSON.stringify(value) + '"';
            }
            return output;
        };
        // *** replace hard coded values with all fields in passed table
        //const header = ['siteID', 'block', 'path', 'patharea', 'parcels', 'sitetype', 'contactname', 'contactphone', 'contactemail', 'pathtocontact', 'sitecomplete', 'notes'];
        //let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(',').replace(/\\"/g, ""); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var a = document.createElement('a');
        var blob = new Blob([csvArray], { type: 'text/csv' }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename + ".csv";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    };
    SummaryComponent.prototype.downloadBlocksCSV = function (data, name) {
        /*
         var csvData = this.convertToCsv(data);
         var blob = new Blob([csvData], { type: 'text/csv' });
         var url= window.URL.createObjectURL(blob);
         window.open(url);
         */
        //const replacer = (key, value) => value === null ? '' : value;
        //all this craziness is to deal with the commas in the embedded arrays
        //HAve to deal with the introduced \" in map stringify call later
        var replacer = function (key, value) {
            var output;
            if (!value) {
                output = '';
            }
            else if (!isNaN(value)) {
                output = value;
            }
            else {
                output = '"' + JSON.stringify(value) + '"';
            }
            return output;
        };
        // *** replace hard coded values with all fields in passed table
        var header = ['block', 'blocktype', 'lightcount', 'notes', 'cataloger', 'blockstatus', 'qcnotes', 'qcer', 'cbarea', 'cblat', 'cblon', 'lights', 'updated_at'];
        //let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
        var csv = data.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(',').replace(/\\"/g, ""); });
        csv.unshift(header.join(','));
        var csvArray = csv.join('\r\n');
        var a = document.createElement('a');
        var blob = new Blob([csvArray], { type: 'text/csv' }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = name + ".csv";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    };
    SummaryComponent.prototype.convertToCsv = function (data) {
        //const items = data;
        var items = typeof data != 'object' ? JSON.parse(data) : data;
        var replacer = function (key, value) { return value === null ? '' : value; }; // specify how you want to handle null values here
        var header = Object.keys(items[0]);
        var csv = items.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); });
        csv.unshift(header.join(','));
        csv = csv.join('\r\n');
        console.log('csv output:' + csv);
        return csv;
    };
    SummaryComponent.prototype.downloadSites = function (data, file) {
        var header = ['siteID', 'block', 'patharea', 'parcels', 'sitetype', 'contactname', 'contactphone', 'contactemail', 'pathtocontact', 'sitecomplete', 'notes'];
        this.downloadCSV(data, header, file);
    };
    SummaryComponent.prototype.downloadBlocks = function (data, file) {
        var header = ['block', 'blocktype', 'lightcount', 'notes', 'cataloger', 'blockstatus', 'qcnotes', 'qcer', 'cbarea', 'cblat', 'cblon', 'lights', 'updated_at'];
        this.downloadCSV(data, header, file);
    };
    SummaryComponent.prototype.downloadSitesAllFields = function (data, file) {
        var header = ['siteID', 'block', 'path', 'patharea', 'parcels', 'sitetype', 'contactname', 'contactphone', 'contactemail', 'pathtocontact', 'sitecomplete', 'notes'];
        this.downloadCSV(data, header, file);
    };
    Object.defineProperty(SummaryComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.selection); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SummaryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], SummaryComponent.prototype, "sort", void 0);
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [_services_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"],
            _services_site_service__WEBPACK_IMPORTED_MODULE_3__["SiteService"],
            _services_current_block_service__WEBPACK_IMPORTED_MODULE_5__["CurrentBlockService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SummaryComponent);
    return SummaryComponent;
}()); //end of class



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





/* this section didn't work because the declare module section threw an error
//from https://blog.angular-university.io/debug-rxjs/
import { Observable } from 'rxjs';

const debuggerOn = true;

Observable.prototype.debug = function(message:string){
  return this.do(
    nextValue =>{
      if (debuggerOn){
        console.log(message, nextValue)
      }
    },
    error =>{
      if (debuggerOn){
        console.error(message, error)
      }
    },
    () =>{
      if (debuggerOn){
        console.error("Observable completed -", message)
      }
    }
  );
};

declare module 'rxjs/Observable' {
  interface Observable<T> {
      debug: (...any) => Observable<T>;
  }
}

*/
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Projects\BPA18 (Market Research Services)\TO 2018-016 (OLSA Phase 2)\2 Pilot Block Cataloging\Cataloging App\inprogress\nodetest\A6\a6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map