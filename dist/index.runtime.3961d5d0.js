var e = globalThis,
  r = {},
  t = {},
  n = e.parcelRequire3a11;
null == n &&
  (((n = function (e) {
    if (e in r) return r[e].exports;
    if (e in t) {
      var n = t[e];
      delete t[e];
      var a = { id: e, exports: {} };
      return (r[e] = a), n.call(a.exports, a, a.exports), a.exports;
    }
    var i = Error("Cannot find module '" + e + "'");
    throw ((i.code = 'MODULE_NOT_FOUND'), i);
  }).register = function (e, r) {
    t[e] = r;
  }),
  (e.parcelRequire3a11 = n)),
  (0, n.register)('27Lyk', function (e, r) {
    Object.defineProperty(e.exports, 'register', {
      get: () => t,
      set: e => (t = e),
      enumerable: !0,
      configurable: !0,
    });
    var t,
      n = new Map();
    t = function (e, r) {
      for (var t = 0; t < r.length - 1; t += 2)
        n.set(r[t], { baseUrl: e, path: r[t + 1] });
    };
  }),
  n('27Lyk').register(
    new URL('', import.meta.url).toString(),
    JSON.parse('["f9fpV","index.2d145182.js","eyyUD","icons.c14567a0.svg"]')
  );
//# sourceMappingURL=index.runtime.3961d5d0.js.map
