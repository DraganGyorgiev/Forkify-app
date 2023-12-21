var e,
  t,
  r,
  n,
  i,
  o,
  a,
  s,
  c,
  u,
  l,
  d,
  p,
  f,
  h,
  g,
  v,
  m,
  y = globalThis;
function b(e) {
  return e && e.__esModule ? e.default : e;
}
var _ = {},
  w = {},
  k = function (e) {
    return e && e.Math === Math && e;
  };
w =
  k('object' == typeof globalThis && globalThis) ||
  k('object' == typeof window && window) ||
  k('object' == typeof self && self) ||
  k('object' == typeof y && y) ||
  k('object' == typeof w && w) ||
  (function () {
    return this;
  })() ||
  Function('return this')();
var E = {},
  S = {};
E = !(S = function (e) {
  try {
    return !!e();
  } catch (e) {
    return !0;
  }
})(function () {
  return (
    7 !==
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var $ = {},
  F = {};
F = !S(function () {
  var e = function () {}.bind();
  return 'function' != typeof e || e.hasOwnProperty('prototype');
});
var j = Function.prototype.call;
$ = F
  ? j.bind(j)
  : function () {
      return j.apply(j, arguments);
    };
var O = {}.propertyIsEnumerable,
  M = Object.getOwnPropertyDescriptor;
o =
  M && !O.call({ 1: 2 }, 1)
    ? function (e) {
        var t = M(this, e);
        return !!t && t.enumerable;
      }
    : O;
var L = {};
L = function (e, t) {
  return {
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t,
  };
};
var P = {},
  x = {},
  T = {},
  I = Function.prototype,
  A = I.call,
  H = F && I.bind.bind(A, A),
  q = {},
  N = (T = F
    ? H
    : function (e) {
        return function () {
          return A.apply(e, arguments);
        };
      })({}.toString),
  C = T(''.slice);
q = function (e) {
  return C(N(e), 8, -1);
};
var D = Object,
  R = T(''.split);
x = S(function () {
  return !D('z').propertyIsEnumerable(0);
})
  ? function (e) {
      return 'String' === q(e) ? R(e, '') : D(e);
    }
  : D;
var z = {},
  W = {};
W = function (e) {
  return null == e;
};
var G = TypeError;
(z = function (e) {
  if (W(e)) throw new G("Can't call method on " + e);
  return e;
}),
  (P = function (e) {
    return x(z(e));
  });
var U = {},
  B = {},
  Y = {},
  J = {},
  Q = {},
  V = 'object' == typeof document && document.all,
  K = (Q = { all: V, IS_HTMLDDA: void 0 === V && void 0 !== V }).all;
J = Q.IS_HTMLDDA
  ? function (e) {
      return 'function' == typeof e || e === K;
    }
  : function (e) {
      return 'function' == typeof e;
    };
var X = Q.all;
Y = Q.IS_HTMLDDA
  ? function (e) {
      return 'object' == typeof e ? null !== e : J(e) || e === X;
    }
  : function (e) {
      return 'object' == typeof e ? null !== e : J(e);
    };
var Z = {},
  ee = {};
ee = function (e, t) {
  var r;
  return arguments.length < 2
    ? ((r = w[e]), J(r) ? r : void 0)
    : w[e] && w[e][t];
};
var et = {};
et = T({}.isPrototypeOf);
var er = {},
  en = {},
  ei = {},
  eo = {};
eo = ('undefined' != typeof navigator && String(navigator.userAgent)) || '';
var ea = w.process,
  es = w.Deno,
  ec = (ea && ea.versions) || (es && es.version),
  eu = ec && ec.v8;
eu && (s = (a = eu.split('.'))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])),
  !s &&
    eo &&
    (!(a = eo.match(/Edge\/(\d+)/)) || a[1] >= 74) &&
    (a = eo.match(/Chrome\/(\d+)/)) &&
    (s = +a[1]),
  (ei = s);
var el = w.String;
er =
  (en =
    !!Object.getOwnPropertySymbols &&
    !S(function () {
      var e = Symbol('symbol detection');
      return (
        !el(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && ei && ei < 41)
      );
    })) &&
  !Symbol.sham &&
  'symbol' == typeof Symbol.iterator;
var ed = Object;
Z = er
  ? function (e) {
      return 'symbol' == typeof e;
    }
  : function (e) {
      var t = ee('Symbol');
      return J(t) && et(t.prototype, ed(e));
    };
var ep = {},
  ef = {},
  eh = {},
  eg = String;
eh = function (e) {
  try {
    return eg(e);
  } catch (e) {
    return 'Object';
  }
};
var ev = TypeError;
(ef = function (e) {
  if (J(e)) return e;
  throw new ev(eh(e) + ' is not a function');
}),
  (ep = function (e, t) {
    var r = e[t];
    return W(r) ? void 0 : ef(r);
  });
var em = {},
  ey = TypeError;
em = function (e, t) {
  var r, n;
  if (
    ('string' === t && J((r = e.toString)) && !Y((n = $(r, e)))) ||
    (J((r = e.valueOf)) && !Y((n = $(r, e)))) ||
    ('string' !== t && J((r = e.toString)) && !Y((n = $(r, e))))
  )
    return n;
  throw new ey("Can't convert object to primitive value");
};
var eb = {},
  e_ = {};
e_ = !1;
var ew = {},
  ek = {},
  eE = Object.defineProperty;
ek = function (e, t) {
  try {
    eE(w, e, { value: t, configurable: !0, writable: !0 });
  } catch (r) {
    w[e] = t;
  }
  return t;
};
var eS = '__core-js_shared__';
(ew = w[eS] || ek(eS, {})),
  (eb = function (e, t) {
    return ew[e] || (ew[e] = void 0 !== t ? t : {});
  })('versions', []).push({
    version: '3.34.0',
    mode: e_ ? 'pure' : 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE',
    source: 'https://github.com/zloirock/core-js',
  });
var e$ = {},
  eF = {},
  ej = Object;
eF = function (e) {
  return ej(z(e));
};
var eO = T({}.hasOwnProperty);
e$ =
  Object.hasOwn ||
  function (e, t) {
    return eO(eF(e), t);
  };
var eM = {},
  eL = 0,
  eP = Math.random(),
  ex = T((1).toString);
eM = function (e) {
  return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + ex(++eL + eP, 36);
};
var eT = w.Symbol,
  eI = eb('wks'),
  eA = er ? eT.for || eT : (eT && eT.withoutSetter) || eM,
  eH = TypeError,
  eq =
    (e$(eI, (e = 'toPrimitive')) ||
      (eI[e] = en && e$(eT, e) ? eT[e] : eA('Symbol.' + e)),
    eI[e]);
(B = function (e, t) {
  if (!Y(e) || Z(e)) return e;
  var r,
    n = ep(e, eq);
  if (n) {
    if ((void 0 === t && (t = 'default'), (r = $(n, e, t)), !Y(r) || Z(r)))
      return r;
    throw new eH("Can't convert object to primitive value");
  }
  return void 0 === t && (t = 'number'), em(e, t);
}),
  (U = function (e) {
    var t = B(e, 'string');
    return Z(t) ? t : t + '';
  });
var eN = {},
  eC = {},
  eD = w.document,
  eR = Y(eD) && Y(eD.createElement);
(eC = function (e) {
  return eR ? eD.createElement(e) : {};
}),
  (eN =
    !E &&
    !S(function () {
      return (
        7 !==
        Object.defineProperty(eC('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var ez = Object.getOwnPropertyDescriptor;
i = E
  ? ez
  : function (e, t) {
      if (((e = P(e)), (t = U(t)), eN))
        try {
          return ez(e, t);
        } catch (e) {}
      if (e$(e, t)) return L(!$(o, e, t), e[t]);
    };
var eW = {},
  eG = {};
eG =
  E &&
  S(function () {
    return (
      42 !==
      Object.defineProperty(function () {}, 'prototype', {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var eU = {},
  eB = String,
  eY = TypeError;
eU = function (e) {
  if (Y(e)) return e;
  throw new eY(eB(e) + ' is not an object');
};
var eJ = TypeError,
  eQ = Object.defineProperty,
  eV = Object.getOwnPropertyDescriptor,
  eK = 'enumerable',
  eX = 'configurable',
  eZ = 'writable';
(c = E
  ? eG
    ? function (e, t, r) {
        if (
          (eU(e),
          (t = U(t)),
          eU(r),
          'function' == typeof e &&
            'prototype' === t &&
            'value' in r &&
            eZ in r &&
            !r[eZ])
        ) {
          var n = eV(e, t);
          n &&
            n[eZ] &&
            ((e[t] = r.value),
            (r = {
              configurable: eX in r ? r[eX] : n[eX],
              enumerable: eK in r ? r[eK] : n[eK],
              writable: !1,
            }));
        }
        return eQ(e, t, r);
      }
    : eQ
  : function (e, t, r) {
      if ((eU(e), (t = U(t)), eU(r), eN))
        try {
          return eQ(e, t, r);
        } catch (e) {}
      if ('get' in r || 'set' in r) throw new eJ('Accessors not supported');
      return 'value' in r && (e[t] = r.value), e;
    }),
  (eW = E
    ? function (e, t, r) {
        return c(e, t, L(1, r));
      }
    : function (e, t, r) {
        return (e[t] = r), e;
      });
var e0 = {},
  e1 = {},
  e9 = Function.prototype,
  e2 = E && Object.getOwnPropertyDescriptor,
  e4 = e$(e9, 'name') && (!E || (E && e2(e9, 'name').configurable)),
  e3 = {},
  e5 = T(Function.toString);
J(ew.inspectSource) ||
  (ew.inspectSource = function (e) {
    return e5(e);
  }),
  (e3 = ew.inspectSource);
var e7 = {},
  e8 = {},
  e6 = w.WeakMap;
e8 = J(e6) && /native code/.test(String(e6));
var te = {},
  tt = eb('keys');
te = function (e) {
  return tt[e] || (tt[e] = eM(e));
};
var tr = {};
tr = {};
var tn = 'Object already initialized',
  ti = w.TypeError,
  to = w.WeakMap;
if (e8 || ew.state) {
  var ta = ew.state || (ew.state = new to());
  (ta.get = ta.get),
    (ta.has = ta.has),
    (ta.set = ta.set),
    (u = function (e, t) {
      if (ta.has(e)) throw new ti(tn);
      return (t.facade = e), ta.set(e, t), t;
    }),
    (l = function (e) {
      return ta.get(e) || {};
    }),
    (d = function (e) {
      return ta.has(e);
    });
} else {
  var ts = te('state');
  (tr[ts] = !0),
    (u = function (e, t) {
      if (e$(e, ts)) throw new ti(tn);
      return (t.facade = e), eW(e, ts, t), t;
    }),
    (l = function (e) {
      return e$(e, ts) ? e[ts] : {};
    }),
    (d = function (e) {
      return e$(e, ts);
    });
}
var tc = (e7 = {
    set: u,
    get: l,
    has: d,
    enforce: function (e) {
      return d(e) ? l(e) : u(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var r;
        if (!Y(t) || (r = l(t)).type !== e)
          throw new ti('Incompatible receiver, ' + e + ' required');
        return r;
      };
    },
  }).enforce,
  tu = e7.get,
  tl = String,
  tp = Object.defineProperty,
  tf = T(''.slice),
  th = T(''.replace),
  tg = T([].join),
  tv =
    E &&
    !S(function () {
      return 8 !== tp(function () {}, 'length', { value: 8 }).length;
    }),
  tm = String(String).split('String'),
  ty = (e1 = function (e, t, r) {
    'Symbol(' === tf(tl(t), 0, 7) &&
      (t = '[' + th(tl(t), /^Symbol\(([^)]*)\)/, '$1') + ']'),
      r && r.getter && (t = 'get ' + t),
      r && r.setter && (t = 'set ' + t),
      (!e$(e, 'name') || (e4 && e.name !== t)) &&
        (E ? tp(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
      tv &&
        r &&
        e$(r, 'arity') &&
        e.length !== r.arity &&
        tp(e, 'length', { value: r.arity });
    try {
      r && e$(r, 'constructor') && r.constructor
        ? E && tp(e, 'prototype', { writable: !1 })
        : e.prototype && (e.prototype = void 0);
    } catch (e) {}
    var n = tc(e);
    return (
      e$(n, 'source') || (n.source = tg(tm, 'string' == typeof t ? t : '')), e
    );
  });
(Function.prototype.toString = ty(function () {
  return (J(this) && tu(this).source) || e3(this);
}, 'toString')),
  (e0 = function (e, t, r, n) {
    n || (n = {});
    var i = n.enumerable,
      o = void 0 !== n.name ? n.name : t;
    if ((J(r) && e1(r, o, n), n.global)) i ? (e[t] = r) : ek(t, r);
    else {
      try {
        n.unsafe ? e[t] && (i = !0) : delete e[t];
      } catch (e) {}
      i
        ? (e[t] = r)
        : c(e, t, {
            value: r,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable,
          });
    }
    return e;
  });
var tb = {},
  t_ = {},
  tw = {},
  tk = {},
  tE = {},
  tS = {},
  t$ = Math.ceil,
  tF = Math.floor;
(tS =
  Math.trunc ||
  function (e) {
    var t = +e;
    return (t > 0 ? tF : t$)(t);
  }),
  (tE = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : tS(t);
  });
var tj = Math.max,
  tO = Math.min;
tk = function (e, t) {
  var r = tE(e);
  return r < 0 ? tj(r + t, 0) : tO(r, t);
};
var tM = {},
  tL = {},
  tP = Math.min;
(tL = function (e) {
  return e > 0 ? tP(tE(e), 9007199254740991) : 0;
}),
  (tM = function (e) {
    return tL(e.length);
  });
var tx = function (e) {
    return function (t, r, n) {
      var i,
        o = P(t),
        a = tM(o),
        s = tk(n, a);
      if (e && r != r) {
        for (; a > s; ) if ((i = o[s++]) != i) return !0;
      } else
        for (; a > s; s++) if ((e || s in o) && o[s] === r) return e || s || 0;
      return !e && -1;
    };
  },
  tT = { includes: tx(!0), indexOf: tx(!1) }.indexOf,
  tI = T([].push);
tw = function (e, t) {
  var r,
    n = P(e),
    i = 0,
    o = [];
  for (r in n) !e$(tr, r) && e$(n, r) && tI(o, r);
  for (; t.length > i; ) e$(n, (r = t[i++])) && (~tT(o, r) || tI(o, r));
  return o;
};
var tA = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf',
].concat('length', 'prototype');
(p =
  Object.getOwnPropertyNames ||
  function (e) {
    return tw(e, tA);
  }),
  (f = Object.getOwnPropertySymbols);
var tH = T([].concat);
(t_ =
  ee('Reflect', 'ownKeys') ||
  function (e) {
    var t = p(eU(e));
    return f ? tH(t, f(e)) : t;
  }),
  (tb = function (e, t, r) {
    for (var n = t_(t), o = 0; o < n.length; o++) {
      var a = n[o];
      e$(e, a) || (r && e$(r, a)) || c(e, a, i(t, a));
    }
  });
var tq = {},
  tN = /#|\.prototype\./,
  tC = function (e, t) {
    var r = tR[tD(e)];
    return r === tW || (r !== tz && (J(t) ? S(t) : !!t));
  },
  tD = (tC.normalize = function (e) {
    return String(e).replace(tN, '.').toLowerCase();
  }),
  tR = (tC.data = {}),
  tz = (tC.NATIVE = 'N'),
  tW = (tC.POLYFILL = 'P');
(tq = tC),
  (_ = function (e, t) {
    var r,
      n,
      o,
      a,
      s,
      c = e.target,
      u = e.global,
      l = e.stat;
    if ((r = u ? w : l ? w[c] || ek(c, {}) : (w[c] || {}).prototype))
      for (n in t) {
        if (
          ((a = t[n]),
          (o = e.dontCallGetSet ? (s = i(r, n)) && s.value : r[n]),
          !tq(u ? n : c + (l ? '.' : '#') + n, e.forced) && void 0 !== o)
        ) {
          if (typeof a == typeof o) continue;
          tb(a, o);
        }
        (e.sham || (o && o.sham)) && eW(a, 'sham', !0), e0(r, n, a, e);
      }
  });
var tG = {},
  tU = {},
  tB = Function.prototype,
  tY = tB.apply,
  tJ = tB.call;
tU =
  ('object' == typeof Reflect && Reflect.apply) ||
  (F
    ? tJ.bind(tY)
    : function () {
        return tJ.apply(tY, arguments);
      });
var tQ = {},
  tV = {},
  tK = (tV = function (e) {
    if ('Function' === q(e)) return T(e);
  })(tV.bind);
tQ = function (e, t) {
  return (
    ef(e),
    void 0 === t
      ? e
      : F
      ? tK(e, t)
      : function () {
          return e.apply(t, arguments);
        }
  );
};
var tX = {};
tX = ee('document', 'documentElement');
var tZ = {};
tZ = T([].slice);
var t0 = {},
  t1 = TypeError;
t0 = function (e, t) {
  if (e < t) throw new t1('Not enough arguments');
  return e;
};
var t9 = {};
t9 = /(?:ipad|iphone|ipod).*applewebkit/i.test(eo);
var t2 = {};
t2 = 'process' === q(w.process);
var t4 = w.setImmediate,
  t3 = w.clearImmediate,
  t5 = w.process,
  t7 = w.Dispatch,
  t8 = w.Function,
  t6 = w.MessageChannel,
  re = w.String,
  rt = 0,
  rr = {},
  rn = 'onreadystatechange';
S(function () {
  h = w.location;
});
var ri = function (e) {
    if (e$(rr, e)) {
      var t = rr[e];
      delete rr[e], t();
    }
  },
  ro = function (e) {
    return function () {
      ri(e);
    };
  },
  ra = function (e) {
    ri(e.data);
  },
  rs = function (e) {
    w.postMessage(re(e), h.protocol + '//' + h.host);
  };
(t4 && t3) ||
  ((t4 = function (e) {
    t0(arguments.length, 1);
    var t = J(e) ? e : t8(e),
      r = tZ(arguments, 1);
    return (
      (rr[++rt] = function () {
        tU(t, void 0, r);
      }),
      g(rt),
      rt
    );
  }),
  (t3 = function (e) {
    delete rr[e];
  }),
  t2
    ? (g = function (e) {
        t5.nextTick(ro(e));
      })
    : t7 && t7.now
    ? (g = function (e) {
        t7.now(ro(e));
      })
    : t6 && !t9
    ? ((m = (v = new t6()).port2),
      (v.port1.onmessage = ra),
      (g = tQ(m.postMessage, m)))
    : w.addEventListener &&
      J(w.postMessage) &&
      !w.importScripts &&
      h &&
      'file:' !== h.protocol &&
      !S(rs)
    ? ((g = rs), w.addEventListener('message', ra, !1))
    : (g =
        rn in eC('script')
          ? function (e) {
              tX.appendChild(eC('script'))[rn] = function () {
                tX.removeChild(this), ri(e);
              };
            }
          : function (e) {
              setTimeout(ro(e), 0);
            }));
var rc = (tG = { set: t4, clear: t3 }).clear;
_(
  { global: !0, bind: !0, enumerable: !0, forced: w.clearImmediate !== rc },
  { clearImmediate: rc }
);
var ru = tG.set,
  rl = {},
  rd = {};
rd = 'function' == typeof Bun && Bun && 'string' == typeof Bun.version;
var rp = w.Function,
  rf =
    /MSIE .\./.test(eo) ||
    (rd &&
      ((t = w.Bun.version.split('.')).length < 3 ||
        ('0' === t[0] && (t[1] < 3 || ('3' === t[1] && '0' === t[2])))));
rl = function (e, t) {
  var r = t ? 2 : 1;
  return rf
    ? function (n, i) {
        var o = t0(arguments.length, 1) > r,
          a = J(n) ? n : rp(n),
          s = o ? tZ(arguments, r) : [],
          c = o
            ? function () {
                tU(a, this, s);
              }
            : a;
        return t ? e(c, i) : e(c);
      }
    : e;
};
var rh = w.setImmediate ? rl(ru, !1) : ru;
_(
  { global: !0, bind: !0, enumerable: !0, forced: w.setImmediate !== rh },
  { setImmediate: rh }
);
var rg = (function (e) {
  var t,
    r = Object.prototype,
    n = r.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (e, t, r) {
        e[t] = r.value;
      },
    o = 'function' == typeof Symbol ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    c = o.toStringTag || '@@toStringTag';
  function u(e, t, r) {
    return (
      Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      e[t]
    );
  }
  try {
    u({}, '');
  } catch (e) {
    u = function (e, t, r) {
      return (e[t] = r);
    };
  }
  function l(e, r, n, o) {
    var a,
      s,
      c = Object.create((r && r.prototype instanceof v ? r : v).prototype);
    return (
      i(c, '_invoke', {
        value:
          ((a = new j(o || [])),
          (s = p),
          function (r, i) {
            if (s === f) throw Error('Generator is already running');
            if (s === h) {
              if ('throw' === r) throw i;
              return { value: t, done: !0 };
            }
            for (a.method = r, a.arg = i; ; ) {
              var o = a.delegate;
              if (o) {
                var c = (function e(r, n) {
                  var i = n.method,
                    o = r.iterator[i];
                  if (o === t)
                    return (
                      (n.delegate = null),
                      ('throw' === i &&
                        r.iterator.return &&
                        ((n.method = 'return'),
                        (n.arg = t),
                        e(r, n),
                        'throw' === n.method)) ||
                        ('return' !== i &&
                          ((n.method = 'throw'),
                          (n.arg = TypeError(
                            "The iterator does not provide a '" + i + "' method"
                          )))),
                      g
                    );
                  var a = d(o, r.iterator, n.arg);
                  if ('throw' === a.type)
                    return (
                      (n.method = 'throw'),
                      (n.arg = a.arg),
                      (n.delegate = null),
                      g
                    );
                  var s = a.arg;
                  return s
                    ? s.done
                      ? ((n[r.resultName] = s.value),
                        (n.next = r.nextLoc),
                        'return' !== n.method &&
                          ((n.method = 'next'), (n.arg = t)),
                        (n.delegate = null),
                        g)
                      : s
                    : ((n.method = 'throw'),
                      (n.arg = TypeError('iterator result is not an object')),
                      (n.delegate = null),
                      g);
                })(o, a);
                if (c) {
                  if (c === g) continue;
                  return c;
                }
              }
              if ('next' === a.method) a.sent = a._sent = a.arg;
              else if ('throw' === a.method) {
                if (s === p) throw ((s = h), a.arg);
                a.dispatchException(a.arg);
              } else 'return' === a.method && a.abrupt('return', a.arg);
              s = f;
              var u = d(e, n, a);
              if ('normal' === u.type) {
                if (((s = a.done ? h : 'suspendedYield'), u.arg === g))
                  continue;
                return { value: u.arg, done: a.done };
              }
              'throw' === u.type &&
                ((s = h), (a.method = 'throw'), (a.arg = u.arg));
            }
          }),
      }),
      c
    );
  }
  function d(e, t, r) {
    try {
      return { type: 'normal', arg: e.call(t, r) };
    } catch (e) {
      return { type: 'throw', arg: e };
    }
  }
  e.wrap = l;
  var p = 'suspendedStart',
    f = 'executing',
    h = 'completed',
    g = {};
  function v() {}
  function m() {}
  function y() {}
  var b = {};
  u(b, a, function () {
    return this;
  });
  var _ = Object.getPrototypeOf,
    w = _ && _(_(O([])));
  w && w !== r && n.call(w, a) && (b = w);
  var k = (y.prototype = v.prototype = Object.create(b));
  function E(e) {
    ['next', 'throw', 'return'].forEach(function (t) {
      u(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function S(e, t) {
    var r;
    i(this, '_invoke', {
      value: function (i, o) {
        function a() {
          return new t(function (r, a) {
            !(function r(i, o, a, s) {
              var c = d(e[i], e, o);
              if ('throw' === c.type) s(c.arg);
              else {
                var u = c.arg,
                  l = u.value;
                return l && 'object' == typeof l && n.call(l, '__await')
                  ? t.resolve(l.__await).then(
                      function (e) {
                        r('next', e, a, s);
                      },
                      function (e) {
                        r('throw', e, a, s);
                      }
                    )
                  : t.resolve(l).then(
                      function (e) {
                        (u.value = e), a(u);
                      },
                      function (e) {
                        return r('throw', e, a, s);
                      }
                    );
              }
            })(i, o, r, a);
          });
        }
        return (r = r ? r.then(a, a) : a());
      },
    });
  }
  function $(e) {
    var t = { tryLoc: e[0] };
    1 in e && (t.catchLoc = e[1]),
      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
      this.tryEntries.push(t);
  }
  function F(e) {
    var t = e.completion || {};
    (t.type = 'normal'), delete t.arg, (e.completion = t);
  }
  function j(e) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      e.forEach($, this),
      this.reset(!0);
  }
  function O(e) {
    if (e || '' === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var i = -1,
          o = function r() {
            for (; ++i < e.length; )
              if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
            return (r.value = t), (r.done = !0), r;
          };
        return (o.next = o);
      }
    }
    throw TypeError(typeof e + ' is not iterable');
  }
  return (
    (m.prototype = y),
    i(k, 'constructor', { value: y, configurable: !0 }),
    i(y, 'constructor', { value: m, configurable: !0 }),
    (m.displayName = u(y, c, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (e) {
      var t = 'function' == typeof e && e.constructor;
      return (
        !!t && (t === m || 'GeneratorFunction' === (t.displayName || t.name))
      );
    }),
    (e.mark = function (e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, y)
          : ((e.__proto__ = y), u(e, c, 'GeneratorFunction')),
        (e.prototype = Object.create(k)),
        e
      );
    }),
    (e.awrap = function (e) {
      return { __await: e };
    }),
    E(S.prototype),
    u(S.prototype, s, function () {
      return this;
    }),
    (e.AsyncIterator = S),
    (e.async = function (t, r, n, i, o) {
      void 0 === o && (o = Promise);
      var a = new S(l(t, r, n, i), o);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (e) {
            return e.done ? e.value : a.next();
          });
    }),
    E(k),
    u(k, c, 'Generator'),
    u(k, a, function () {
      return this;
    }),
    u(k, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (e) {
      var t = Object(e),
        r = [];
      for (var n in t) r.push(n);
      return (
        r.reverse(),
        function e() {
          for (; r.length; ) {
            var n = r.pop();
            if (n in t) return (e.value = n), (e.done = !1), e;
          }
          return (e.done = !0), e;
        }
      );
    }),
    (e.values = O),
    (j.prototype = {
      constructor: j,
      reset: function (e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(F),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ('throw' === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function i(n, i) {
          return (
            (s.type = 'throw'),
            (s.arg = e),
            (r.next = n),
            i && ((r.method = 'next'), (r.arg = t)),
            !!i
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var a = this.tryEntries[o],
            s = a.completion;
          if ('root' === a.tryLoc) return i('end');
          if (a.tryLoc <= this.prev) {
            var c = n.call(a, 'catchLoc'),
              u = n.call(a, 'finallyLoc');
            if (c && u) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else if (c) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
            } else if (u) {
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else throw Error('try statement without catch or finally');
          }
        }
      },
      abrupt: function (e, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var i = this.tryEntries[r];
          if (
            i.tryLoc <= this.prev &&
            n.call(i, 'finallyLoc') &&
            this.prev < i.finallyLoc
          ) {
            var o = i;
            break;
          }
        }
        o &&
          ('break' === e || 'continue' === e) &&
          o.tryLoc <= t &&
          t <= o.finallyLoc &&
          (o = null);
        var a = o ? o.completion : {};
        return ((a.type = e), (a.arg = t), o)
          ? ((this.method = 'next'), (this.next = o.finallyLoc), g)
          : this.complete(a);
      },
      complete: function (e, t) {
        if ('throw' === e.type) throw e.arg;
        return (
          'break' === e.type || 'continue' === e.type
            ? (this.next = e.arg)
            : 'return' === e.type
            ? ((this.rval = this.arg = e.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === e.type && t && (this.next = t),
          g
        );
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.finallyLoc === e)
            return this.complete(r.completion, r.afterLoc), F(r), g;
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ('throw' === n.type) {
              var i = n.arg;
              F(r);
            }
            return i;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function (e, r, n) {
        return (
          (this.delegate = { iterator: O(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          g
        );
      },
    }),
    e
  );
})({});
try {
  regeneratorRuntime = rg;
} catch (e) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = rg)
    : Function('r', 'regeneratorRuntime = r')(rg);
}
const rv = 'https://forkify-api.herokuapp.com/api/v2/recipes/',
  rm = '3b570b86-899b-47f7-b934-7b38fca855b3',
  ry = async function (e, t) {
    try {
      let r = t
          ? fetch(e, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(t),
            })
          : fetch(e),
        n = await Promise.race([
          r,
          new Promise(function (e, t) {
            setTimeout(function () {
              t(Error('Request took too long! Timeout after 10 second'));
            }, 1e4);
          }),
        ]),
        i = await n.json();
      if (!n.ok) throw Error(`${i.message} (${n.status})`);
      return i;
    } catch (e) {
      throw e;
    }
  };
var rb = {};
rb = new URL('icons.c14567a0.svg', import.meta.url).toString();
class r_ {
  _data;
  render(e, t = !0) {
    if (!e || (Array.isArray(e) && 0 === e.length)) return this.renderError();
    this._data = e;
    let r = this._generateMarkup();
    if (!t) return r;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
  update(e) {
    this._data = e;
    let t = this._generateMarkup(),
      r = Array.from(
        document.createRange().createContextualFragment(t).querySelectorAll('*')
      ),
      n = Array.from(this._parentElement.querySelectorAll('*'));
    r.forEach((e, t) => {
      let r = n[t];
      e.isEqualNode(r) ||
        e.firstChild?.nodeValue.trim() === '' ||
        (r.textContent = e.textContent),
        e.isEqualNode(r) ||
          Array.from(e.attributes).forEach(e =>
            r.setAttribute(e.name, e.value)
          );
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    let e = `
      <div class="spinner">
        <svg>
          <use href="${b(rb)}#icon-loader"></use>
        </svg>
      </div>
     `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
  }
  renderError(e = this._errorMessage) {
    let t = `
      <div class="error">
        <div>
          <svg>
            <use href="${b(rb)}#icon-alert-triangle"></use>
          </svg>
        </div>
          <p>${e}</p>
      </div>
    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
  renderMessage(e = this._message) {
    let t = `
      <div class="message">
        <div>
          <svg>
            <use href="${b(rb)}#icon-smile"></use>
          </svg>
        </div>
          <p>${e}</p>
      </div>
    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
}
var rw = new (class extends r_ {
  _parentElement = '';
  _generateMarkup(e) {
    let t = window.location.hash.slice(1);
    return `
        <li class="preview">
        <a class="preview__link ${
          this._data.id === t ? 'preview__link--active' : ''
        }" href="#${this._data.id}">
        <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
                <use href="${b(rb)}#icon-user"></use>
              </svg>
            </div>
        </div>
        
        </a>
        </li>
  `;
  }
})();
class rk extends r_ {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  addHandlerRender(e) {
    window.addEventListener('load', e);
  }
  _generateMarkup() {
    return this._data.map(e => rw.render(e, !1)).join('');
  }
}
var rE = new rk();
const rS = {
    recipe: {},
    search: { query: '', results: [], page: 1, resultsPerPage: 10 },
    bookmarks: [],
  },
  r$ = function (e) {
    let { recipe: t } = e.data;
    return {
      id: t.id,
      title: t.title,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      image: t.image_url,
      servings: t.servings,
      cookingTime: t.cooking_time,
      ingredients: t.ingredients,
      ...(t.key && { key: t.key }),
    };
  },
  rF = async function (e) {
    try {
      let t = await ry(`${rv}${e}?key=${rm}`);
      (rS.recipe = r$(t)),
        rS.bookmarks.some(t => t.id === e)
          ? (rS.recipe.bookmarked = !0)
          : (rS.recipe.bookmarked = !1),
        console.log(rS.recipe);
    } catch (e) {
      throw (console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`), e);
    }
  },
  rj = async function (e) {
    try {
      rS.search.query = e;
      let t = await ry(`${rv}?search=${e}&key=${rm}`);
      (rS.search.results = t.data.recipes.map(e => ({
        id: e.id,
        title: e.title,
        publisher: e.publisher,
        image: e.image_url,
        ...(e.key && { key: e.key }),
      }))),
        (rS.search.page = 1);
    } catch (e) {
      throw (console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`), e);
    }
  },
  rO = function (e = rS.search.page) {
    rS.search.page = e;
    let t = (e - 1) * rS.search.resultsPerPage,
      r = e * rS.search.resultsPerPage;
    return rS.search.results.slice(t, r);
  },
  rM = function (e) {
    rS.recipe.ingredients.forEach(t => {
      t.quantity = (t.quantity * e) / rS.recipe.servings;
    }),
      (rS.recipe.servings = e);
  },
  rL = function () {
    localStorage.setItem('bookmarks', JSON.stringify(rS.bookmarks));
  },
  rP = function (e) {
    rS.bookmarks.push(e),
      e.id === rS.recipe.id && (rS.recipe.bookmarked = !0),
      rL();
  },
  rx = function (e) {
    let t = rS.bookmarks.findIndex(t => t.id === e);
    rS.bookmarks.splice(t, 1),
      e === rS.recipe.id && (rS.recipe.bookmarked = !1),
      rL();
  };
!(function () {
  let e = localStorage.getItem('bookmarks');
  e && (rS.bookmarks = JSON.parse(e));
})();
const rT = async function (e) {
  try {
    let t = Object.entries(e)
        .filter(e => e[0].startsWith('ingredient') && '' !== e[1])
        .map(e => {
          let t = e[1].split(',').map(e => e.trim());
          if (3 !== t.length)
            throw Error(
              'Wrong ingredient fromat! Please use the correct format :)'
            );
          let [r, n, i] = t;
          return { quantity: r ? +r : null, unit: n, description: i };
        }),
      r = {
        title: e.title,
        source_url: e.sourceUrl,
        image_url: e.image,
        publisher: e.publisher,
        cooking_time: +e.cookingTime,
        servings: +e.servings,
        ingredients: t,
      },
      n = await ry(`${rv}?key=${rm}`, r);
    (rS.recipe = r$(n)), rP(rS.recipe);
  } catch (e) {
    throw e;
  }
};
((Fraction = function (e, t) {
  if (void 0 !== e && t)
    'number' == typeof e && 'number' == typeof t
      ? ((this.numerator = e), (this.denominator = t))
      : 'string' == typeof e &&
        'string' == typeof t &&
        ((this.numerator = parseInt(e)), (this.denominator = parseInt(t)));
  else if (void 0 === t) {
    if ('number' == typeof (num = e))
      (this.numerator = num), (this.denominator = 1);
    else if ('string' == typeof num) {
      var r,
        n,
        i = num.split(' ');
      if (
        (i[0] && (r = i[0]),
        i[1] && (n = i[1]),
        r % 1 == 0 && n && n.match('/'))
      )
        return new Fraction(r).add(new Fraction(n));
      if (!r || n) return;
      if ('string' == typeof r && r.match('/')) {
        var o = r.split('/');
        (this.numerator = o[0]), (this.denominator = o[1]);
      } else {
        if ('string' == typeof r && r.match('.'))
          return new Fraction(parseFloat(r));
        (this.numerator = parseInt(r)), (this.denominator = 1);
      }
    }
  }
  this.normalize();
}).prototype.clone = function () {
  return new Fraction(this.numerator, this.denominator);
}),
  (Fraction.prototype.toString = function () {
    if ('NaN' === this.denominator) return 'NaN';
    var e =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      t = this.numerator % this.denominator,
      r = this.denominator,
      n = [];
    return (
      0 != e && n.push(e),
      0 != t && n.push((0 === e ? t : Math.abs(t)) + '/' + r),
      n.length > 0 ? n.join(' ') : 0
    );
  }),
  (Fraction.prototype.rescale = function (e) {
    return (this.numerator *= e), (this.denominator *= e), this;
  }),
  (Fraction.prototype.add = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator += e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator -= e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.numerator), (t.denominator *= e.denominator);
    else {
      if ('number' != typeof e) return t.multiply(new Fraction(e));
      t.numerator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.divide = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.denominator), (t.denominator *= e.numerator);
    else {
      if ('number' != typeof e) return t.divide(new Fraction(e));
      t.denominator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.equals = function (e) {
    e instanceof Fraction || (e = new Fraction(e));
    var t = this.clone().normalize(),
      e = e.clone().normalize();
    return t.numerator === e.numerator && t.denominator === e.denominator;
  }),
  (Fraction.prototype.normalize =
    ((r = function (e) {
      return (
        'number' == typeof e &&
        ((e > 0 && e % 1 > 0 && e % 1 < 1) ||
          (e < 0 && e % -1 < 0 && e % -1 > -1))
      );
    }),
    (n = function (e, t) {
      if (!t) return Math.round(e);
      var r = Math.pow(10, t);
      return Math.round(e * r) / r;
    }),
    function () {
      if (r(this.denominator)) {
        var e = n(this.denominator, 9),
          t = Math.pow(10, e.toString().split('.')[1].length);
        (this.denominator = Math.round(this.denominator * t)),
          (this.numerator *= t);
      }
      if (r(this.numerator)) {
        var e = n(this.numerator, 9),
          t = Math.pow(10, e.toString().split('.')[1].length);
        (this.numerator = Math.round(this.numerator * t)),
          (this.denominator *= t);
      }
      var i = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= i),
        (this.denominator /= i),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (e, t) {
    var r = [],
      n = Fraction.primeFactors(e),
      i = Fraction.primeFactors(t);
    return (n.forEach(function (e) {
      var t = i.indexOf(e);
      t >= 0 && (r.push(e), i.splice(t, 1));
    }),
    0 === r.length)
      ? 1
      : (function () {
          var e,
            t = r[0];
          for (e = 1; e < r.length; e++) t *= r[e];
          return t;
        })();
  }),
  (Fraction.primeFactors = function (e) {
    for (var t = Math.abs(e), r = [], n = 2; n * n <= t; )
      t % n == 0 ? (r.push(n), (t /= n)) : n++;
    return 1 != t && r.push(t), r;
  }),
  Fraction;
var rI = {};
function rA(e, t, r, n, i) {
  var o, a, s;
  let c = [2, 3, 5];
  if (!0 === i) for (let t = 3; t * t <= e; t += 2) e % t == 0 && c.push(t);
  let u = 0,
    l = e,
    d = t;
  for (; u <= c.length; )
    l % c[u] == 0 && d % c[u] == 0 ? (c[u], (l /= c[u]), (d /= c[u])) : u++;
  return (
    (o = d),
    (a = l),
    (s = r),
    1 === o && 1 === a
      ? ((s = `${n}${(parseInt(s) + 1).toString()}`), `${s}`)
      : 0 === a
      ? `${n}${s}`
      : '0' == s
      ? `${n}${a}/${o}`
      : `${n}${s} ${a}/${o}`
  );
}
rI = function (e) {
  let t, r;
  if ((e < 0 ? ((e = Math.abs(e)), (t = '-')) : (t = ''), void 0 === e))
    return 'Your input was undefined.';
  if (isNaN(e)) return `"${e}" is not a number.`;
  if (1e16 == e) return `${t}9999999999999999`;
  if (e > 1e16)
    return 'Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.';
  if (Number.isInteger(e)) return `${t}${e}`;
  if (e < 1e-6) return '0';
  let n = e.toString(),
    i = n.split('.'),
    o = i[0];
  if ('0' == r && '0' !== o) return o;
  if ('0' == r && '0' == o) return '0';
  if (
    '99' == (r = n.length >= 17 ? i[1].slice(0, i[1].length - 1) : i[1]) &&
    '0' !== o
  )
    return `${o} 99/100`;
  if ('99' == r && '0' == o) return '99/100';
  if ((1 - parseFloat(`.${r}`) < 0.0011 && (r = '999'), void 0 == r)) return o;
  let a = r
    .split('')
    .reverse()
    .join('')
    .match(/^(\d+)\1{1,2}/);
  if (!a || !(r.length > 2)) {
    var s, c;
    return (
      (s = r), (c = t), rA(parseInt(s, 10), Math.pow(10, s.length), o, c, !1)
    );
  }
  {
    let e = a[0].split('').reverse().join(''),
      n = a[1].split('').reverse().join('');
    if (n.length > 1) {
      let e = n.split(''),
        t = 1;
      for (let r = 0; r < e.length; r++) t /= e[0] / e[r];
      1 === t && (n = e[0]);
    }
    return (
      n.length > 1 &&
        n.length % 2 == 0 &&
        (n =
          parseInt(n.slice(0, n.length / 2), 10) -
            parseInt(n.slice(n.length / 2, n.length), 10) ==
          0
            ? n.slice(0, n.length / 2)
            : n),
      (function (e, t, r, n, i) {
        let o = e.length - r.length >= 1 ? e.length - r.length : 1,
          a = parseFloat(`0.${e}`),
          s = Math.pow(10, t.length);
        return rA(
          Math.round((a * s - a) * Math.pow(10, o)),
          (s - 1) * Math.pow(10, o),
          n,
          i,
          !0
        );
      })(r, n, e, o, t)
    );
  }
};
class rH extends r_ {
  _parentElement = document.querySelector('.recipe');
  addHandlerRender(e) {
    ['hashchange', 'load'].forEach(t => window.addEventListener(t, e));
  }
  addHandlerUpdateServings(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--update-servings');
      if (!r) return;
      let { updateTo: n } = r.dataset;
      +n > 0 && e(+n);
    });
  }
  addHandlerAddBookmark(e) {
    this._parentElement.addEventListener('click', function (t) {
      t.target.closest('.btn--bookmark') && e();
    });
  }
  _generateMarkup() {
    return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${b(rb)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${b(rb)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings - 1
            }">
              <svg>
                <use href="${b(rb)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings + 1
            }">
              <svg>
                <use href="${b(rb)}#icon-plus-circle"><use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${b(rb)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
          <use href="${b(rb)}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this._data.publisher
            }</span>. Please check out
            directions at their website.
        </p>
        <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${b(rb)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
  }
  _generateMarkupIngredient(e) {
    return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${b(rb)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${
            e.quantity ? new (b(rI))(e.quantity).toString() : ''
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
              ${e.description}
          </div>
        </li>
      `;
  }
}
var rq = new rH();
class rN {
  #e = document.querySelector('.search');
  getQuery() {
    let e = this.#e.querySelector('.search__field').value;
    return this.#t(), e;
  }
  #t() {
    this.#e.querySelector('.search__field').value = '';
  }
  addHandlerSearch(e) {
    this.#e.addEventListener('submit', function (t) {
      t.preventDefault(), e();
    });
  }
}
var rC = new rN();
class rD extends r_ {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';
  _generateMarkup() {
    return this._data.map(e => rw.render(e, !1)).join('');
  }
}
var rR = new rD();
class rz extends r_ {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--inline');
      r && e(+r.dataset.goto);
    });
  }
  _generateMarkup() {
    let e = this._data.page,
      t = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return 1 === e && t > 1
      ? `
        <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${e + 1}</span>
          <svg class="search__icon">
            <use href="${b(rb)}#icon-arrow-right"></use>
          </svg>
        </button>
      `
      : e === t && t > 1
      ? `
        <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${b(rb)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e - 1}</span>
        </button>
      `
      : e < t
      ? `
        <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${b(rb)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e - 1}</span>
        </button>

        <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${e + 1}</span>
          <svg class="search__icon">
            <use href="${b(rb)}#icon-arrow-right"></use>
          </svg>
        </button>
      `
      : '';
  }
}
var rW = new rz();
class rG extends r_ {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfulyy uploaded :)';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden'),
      this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this)),
      this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault(), e(Object.fromEntries([...new FormData(this)]));
    });
  }
  _generateMarkup() {}
}
var rU = new rG();
const rB = async function () {
    try {
      let e = window.location.hash.slice(1);
      if (!e) return;
      rq.renderSpinner(),
        rR.update(rO()),
        rE.update(rS.bookmarks),
        await rF(e),
        rq.render(rS.recipe);
    } catch (e) {
      rq.renderError(), console.error(e);
    }
  },
  rY = async function () {
    try {
      rR.renderSpinner();
      let e = rC.getQuery();
      if (!e) return;
      await rj(e), rR.render(rO()), rW.render(rS.search);
    } catch (e) {
      console.log(e);
    }
  },
  rJ = async function (e) {
    try {
      rU.renderSpinner(),
        await rT(e),
        console.log(rS.recipe),
        rq.render(rS.recipe),
        rU.renderMessage(),
        rE.render(rS.bookmarks),
        window.history.pushState(null, '', `#${rS.recipe.id}`),
        setTimeout(function () {}, 2500);
    } catch (e) {
      console.error('\uD83D\uDCA5', e), rU.renderError(e.message);
    }
  };
rE.addHandlerRender(function () {
  rE.render(rS.bookmarks);
}),
  rq.addHandlerRender(rB),
  rq.addHandlerUpdateServings(function (e) {
    rM(e), rq.update(rS.recipe);
  }),
  rq.addHandlerAddBookmark(function () {
    rS.recipe.bookmarked ? rx(rS.recipe.id) : rP(rS.recipe),
      rq.update(rS.recipe),
      rE.render(rS.bookmarks);
  }),
  rC.addHandlerSearch(rY),
  rW.addHandlerClick(function (e) {
    rR.render(rO(e)), rW.render(rS.search);
  }),
  rU.addHandlerUpload(rJ),
  console.log('Welcome to the application!');
//# sourceMappingURL=index.2d145182.js.map
