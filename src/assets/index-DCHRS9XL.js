(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) {
    return;
  }
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(l);
  }
  new MutationObserver((l) => {
    for (const u of l) {
      if (u.type === "childList") {
        for (const o of u.addedNodes) {
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
        }
      }
    }
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(l) {
    if (l.ep) {
      return;
    }
    l.ep = !0;
    const u = t(l);
    fetch(l.href, u);
  }
})();
function lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qi = { exports: {} },
  nl = {},
  Ki = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xt = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  ic = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  Do = Symbol.iterator;
function vc(e) {
  return e === null || typeof e !== "object"
    ? null
    : ((e = (Do && e[Do]) || e["@@iterator"]),
      typeof e === "function" ? e : null);
}
var Yi = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xi = Object.assign,
  Gi = {};
function lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Gi),
    (this.updater = t || Yi);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e !== "object" && typeof e !== "function" && e != null) {
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  }
  this.updater.enqueueSetState(this, e, n, "setState");
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zi() {}
Zi.prototype = lt.prototype;
function $u(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Gi),
    (this.updater = t || Yi);
}
var Vu = ($u.prototype = new Zi());
Vu.constructor = $u;
Xi(Vu, lt.prototype);
Vu.isPureReactComponent = !0;
var Io = Array.isArray,
  Ji = Object.prototype.hasOwnProperty,
  Au = { current: null },
  qi = { key: !0, ref: !0, __self: !0, __source: !0 };
function bi(e, n, t) {
  var r,
    l = {},
    u = null,
    o = null;
  if (n != null) {
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (u = "" + n.key),
    n)) {
      Ji.call(n, r) && !qi.hasOwnProperty(r) && (l[r] = n[r]);
    }
  }
  var i = arguments.length - 2;
  if (i === 1) {
    l.children = t;
  } else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) {
      s[c] = arguments[c + 2];
    }
    l.children = s;
  }
  if (e && e.defaultProps) {
    for (r in ((i = e.defaultProps), i)) {
      l[r] === void 0 && (l[r] = i[r]);
    }
  }
  return {
    $$typeof: Xt,
    type: e,
    key: u,
    ref: o,
    props: l,
    _owner: Au.current,
  };
}
function hc(e, n) {
  return {
    $$typeof: Xt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bu(e) {
  return typeof e === "object" && e !== null && e.$$typeof === Xt;
}
function yc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Fo = /\/+/g;
function Sl(e, n) {
  return typeof e === "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : n.toString(36);
}
function gr(e, n, t, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) {
    o = !0;
  } else {
    switch (u) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xt:
          case uc:
            o = !0;
        }
    }
  }
  if (o) {
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Sl(o, 0) : r),
      Io(l)
        ? ((t = ""),
          e != null && (t = e.replace(Fo, "$&/") + "/"),
          gr(l, n, t, "", function (c) {
            return c;
          }))
        : l != null &&
          (Bu(l) &&
            (l = hc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fo, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  }
  if (((o = 0), (r = r === "" ? "." : r + ":"), Io(e))) {
    for (var i = 0; i < e.length; i++) {
      u = e[i];
      var s = r + Sl(u, i);
      o += gr(u, n, t, s, l);
    }
  } else if (((s = vc(e)), typeof s === "function")) {
    for (e = s.call(e), i = 0; !(u = e.next()).done; ) {
      (u = u.value), (s = r + Sl(u, i++)), (o += gr(u, n, t, s, l));
    }
  } else if (u === "object") {
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  }
  return o;
}
function nr(e, n, t) {
  if (e == null) {
    return e;
  }
  var r = [],
    l = 0;
  return (
    gr(e, r, "", "", function (u) {
      return n.call(t, u, l++);
    }),
    r
  );
}
function gc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) {
    return e._result.default;
  }
  throw e._result;
}
var ie = { current: null },
  wr = { transition: null },
  wc = {
    ReactCurrentDispatcher: ie,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Au,
  };
function es() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: nr,
  forEach: function (e, n, t) {
    nr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      nr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Bu(e)) {
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    }
    return e;
  },
};
L.Component = lt;
L.Fragment = oc;
L.Profiler = sc;
L.PureComponent = $u;
L.StrictMode = ic;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.act = es;
L.cloneElement = function (e, n, t) {
  if (e == null) {
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  }
  var r = Xi({}, e.props),
    l = e.key,
    u = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((u = n.ref), (o = Au.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    ) {
      var i = e.type.defaultProps;
    }
    for (s in n) {
      Ji.call(n, s) &&
        !qi.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
    }
  }
  var s = arguments.length - 2;
  if (s === 1) {
    r.children = t;
  } else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) {
      i[c] = arguments[c + 2];
    }
    r.children = i;
  }
  return { $$typeof: Xt, type: e.type, key: l, ref: u, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = bi;
L.createFactory = function (e) {
  var n = bi.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
L.isValidElement = Bu;
L.lazy = function (e) {
  return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: gc };
};
L.memo = function (e, n) {
  return { $$typeof: pc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = n;
  }
};
L.unstable_act = es;
L.useCallback = function (e, n) {
  return ie.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ie.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ie.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ie.current.useEffect(e, n);
};
L.useId = function () {
  return ie.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ie.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ie.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ie.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ie.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ie.current.useRef(e);
};
L.useState = function (e) {
  return ie.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ie.current.useTransition();
};
L.version = "18.3.1";
Ki.exports = L;
var Tt = Ki.exports;
const Sc = lc(Tt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = Tt,
  Ec = Symbol.for("react.element"),
  xc = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  _c = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, n, t) {
  var r,
    l = {},
    u = null,
    o = null;
  t !== void 0 && (u = "" + t),
    n.key !== void 0 && (u = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) {
    Cc.call(n, r) && !Nc.hasOwnProperty(r) && (l[r] = n[r]);
  }
  if (e && e.defaultProps) {
    for (r in ((n = e.defaultProps), n)) {
      l[r] === void 0 && (l[r] = n[r]);
    }
  }
  return {
    $$typeof: Ec,
    type: e,
    key: u,
    ref: o,
    props: l,
    _owner: _c.current,
  };
}
nl.Fragment = xc;
nl.jsx = ns;
nl.jsxs = ns;
Qi.exports = nl;
var j = Qi.exports,
  Kl = {},
  ts = { exports: {} },
  ge = {},
  rs = { exports: {} },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(x, P) {
    var z = x.length;
    x.push(P);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = x[W];
      if (0 < l(G, P)) {
        (x[W] = P), (x[z] = G), (z = W);
      } else {
        break e;
      }
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) {
      return null;
    }
    var P = x[0],
      z = x.pop();
    if (z !== P) {
      x[0] = z;
      e: for (var W = 0, G = x.length, bt = G >>> 1; W < bt; ) {
        var hn = 2 * (W + 1) - 1,
          wl = x[hn],
          yn = hn + 1,
          er = x[yn];
        if (0 > l(wl, z)) {
          yn < G && 0 > l(er, wl)
            ? ((x[W] = er), (x[yn] = z), (W = yn))
            : ((x[W] = wl), (x[hn] = z), (W = hn));
        } else if (yn < G && 0 > l(er, z)) {
          (x[W] = er), (x[yn] = z), (W = yn);
        } else {
          break e;
        }
      }
    }
    return P;
  }
  function l(x, P) {
    var z = x.sortIndex - P.sortIndex;
    return z !== 0 ? z : x.id - P.id;
  }
  if (
    typeof performance === "object" &&
    typeof performance.now === "function"
  ) {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var o = Date,
      i = o.now();
    e.unstable_now = function () {
      return o.now() - i;
    };
  }
  var s = [],
    c = [],
    v = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    S = !1,
    F = typeof setTimeout === "function" ? setTimeout : null,
    f = typeof clearTimeout === "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var P = t(c); P !== null; ) {
      if (P.callback === null) {
        r(c);
      } else if (P.startTime <= x) {
        r(c), (P.sortIndex = P.expirationTime), n(s, P);
      } else {
        break;
      }
      P = t(c);
    }
  }
  function h(x) {
    if (((S = !1), d(x), !w)) {
      if (t(s) !== null) {
        (w = !0), yl(E);
      } else {
        var P = t(c);
        P !== null && gl(h, P.startTime - x);
      }
    }
  }
  function E(x, P) {
    (w = !1), S && ((S = !1), f(N), (N = -1)), (g = !0);
    var z = p;
    try {
      for (
        d(P), m = t(s);
        m !== null && (!(m.expirationTime > P) || (x && !Ne()));

      ) {
        var W = m.callback;
        if (typeof W === "function") {
          (m.callback = null), (p = m.priorityLevel);
          var G = W(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof G === "function" ? (m.callback = G) : m === t(s) && r(s),
            d(P);
        } else {
          r(s);
        }
        m = t(s);
      }
      if (m !== null) {
        var bt = !0;
      } else {
        var hn = t(c);
        hn !== null && gl(h, hn.startTime - P), (bt = !1);
      }
      return bt;
    } finally {
      (m = null), (p = z), (g = !1);
    }
  }
  var C = !1,
    _ = null,
    N = -1,
    H = 5,
    T = -1;
  function Ne() {
    return !(e.unstable_now() - T < H);
  }
  function it() {
    if (_ !== null) {
      var x = e.unstable_now();
      T = x;
      var P = !0;
      try {
        P = _(!0, x);
      } finally {
        P ? st() : ((C = !1), (_ = null));
      }
    } else {
      C = !1;
    }
  }
  var st;
  if (typeof a === "function") {
    st = function () {
      a(it);
    };
  } else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      rc = Mo.port2;
    (Mo.port1.onmessage = it),
      (st = function () {
        rc.postMessage(null);
      });
  } else {
    st = function () {
      F(it, 0);
    };
  }
  function yl(x) {
    (_ = x), C || ((C = !0), st());
  }
  function gl(x, P) {
    N = F(function () {
      x(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), yl(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (x) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var z = p;
      p = P;
      try {
        return x();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, P) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var z = p;
      p = x;
      try {
        return P();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (x, P, z) {
      var W = e.unstable_now();
      switch (
        (typeof z === "object" && z !== null
          ? ((z = z.delay), (z = typeof z === "number" && 0 < z ? W + z : W))
          : (z = W),
        x)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (x = {
          id: v++,
          callback: P,
          priorityLevel: x,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((x.sortIndex = z),
            n(c, x),
            t(s) === null &&
              x === t(c) &&
              (S ? (f(N), (N = -1)) : (S = !0), gl(h, z - W)))
          : ((x.sortIndex = G), n(s, x), w || g || ((w = !0), yl(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (x) {
      var P = p;
      return function () {
        var z = p;
        p = P;
        try {
          return x.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(ls);
rs.exports = ls;
var Pc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc = Tt,
  ye = Pc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  ) {
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  }
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var us = new Set(),
  Rt = {};
function Tn(e, n) {
  Jn(e, n), Jn(e + "Capture", n);
}
function Jn(e, n) {
  for (Rt[e] = n, e = 0; e < n.length; e++) {
    us.add(n[e]);
  }
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  Lc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  $o = {};
function Tc(e) {
  return Yl.call($o, e)
    ? !0
    : Yl.call(Uo, e)
    ? !1
    : Lc.test(e)
    ? ($o[e] = !0)
    : ((Uo[e] = !0), !1);
}
function Rc(e, n, t, r) {
  if (t !== null && t.type === 0) {
    return !1;
  }
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Oc(e, n, t, r) {
  if (n === null || typeof n > "u" || Rc(e, n, t, r)) {
    return !0;
  }
  if (r) {
    return !1;
  }
  if (t !== null) {
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  }
  return !1;
}
function se(e, n, t, r, l, u, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = u),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hu = /[\-:]([a-z])/g;
function Wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Hu, Wu);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Hu, Wu);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Hu, Wu);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qu(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Oc(n, t, l, r) && (t = null),
    r || l === null
      ? Tc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tr = Symbol.for("react.element"),
  jn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Ku = Symbol.for("react.strict_mode"),
  Xl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  is = Symbol.for("react.context"),
  Yu = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  Xu = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Vo = Symbol.iterator;
function at(e) {
  return e === null || typeof e !== "object"
    ? null
    : ((e = (Vo && e[Vo]) || e["@@iterator"]),
      typeof e === "function" ? e : null);
}
var A = Object.assign,
  kl;
function yt(e) {
  if (kl === void 0) {
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      kl = (n && n[1]) || "";
    }
  }
  return (
    `
` +
    kl +
    e
  );
}
var El = !1;
function xl(e, n) {
  if (!e || El) {
    return "";
  }
  El = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) {
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect === "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack === "string") {
      for (
        var l = c.stack.split(`
`),
          u = r.stack.split(`
`),
          o = l.length - 1,
          i = u.length - 1;
        1 <= o && 0 <= i && l[o] !== u[i];

      ) {
        i--;
      }
      for (; 1 <= o && 0 <= i; o--, i--) {
        if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1) {
            do {
              if ((o--, i--, 0 > i || l[o] !== u[i])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            } while (1 <= o && 0 <= i);
          }
          break;
        }
      }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? yt(e) : "";
}
function jc(e) {
  switch (e.tag) {
    case 5:
      return yt(e.type);
    case 16:
      return yt("Lazy");
    case 13:
      return yt("Suspense");
    case 19:
      return yt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xl(e.type, !1)), e;
    case 11:
      return (e = xl(e.type.render, !1)), e;
    case 1:
      return (e = xl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) {
    return null;
  }
  if (typeof e === "function") {
    return e.displayName || e.name || null;
  }
  if (typeof e === "string") {
    return e;
  }
  switch (e) {
    case Mn:
      return "Fragment";
    case jn:
      return "Portal";
    case Xl:
      return "Profiler";
    case Ku:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e === "object") {
    switch (e.$$typeof) {
      case is:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Yu:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xu:
        return (
          (n = e.displayName || null), n !== null ? n : Jl(e.type) || "Memo"
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return Jl(e(n));
        } catch {}
    }
  }
  return null;
}
function Mc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(n);
    case 8:
      return n === Ku ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n === "function") {
        return n.displayName || n.name || null;
      }
      if (typeof n === "string") {
        return n;
      }
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Dc(e) {
  var n = as(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get === "function" &&
    typeof t.set === "function"
  ) {
    var l = t.get,
      u = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), u.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Dc(e));
}
function cs(e) {
  if (!e) {
    return !1;
  }
  var n = e._valueTracker;
  if (!n) {
    return !0;
  }
  var t = n.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Tr(e) {
  if (
    ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
  ) {
    return null;
  }
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Ao(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = fn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function fs(e, n) {
  (n = n.checked), n != null && Qu(e, "checked", n, !1);
}
function bl(e, n) {
  fs(e, n);
  var t = fn(n.value),
    r = n.type;
  if (t != null) {
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  } else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? eu(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && eu(e, n.type, fn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Bo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    ) {
      return;
    }
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function eu(e, n, t) {
  (n !== "number" || Tr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var gt = Array.isArray;
function Qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) {
      n["$" + t[l]] = !0;
    }
    for (t = 0; t < e.length; t++) {
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
    }
  } else {
    for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function nu(e, n) {
  if (n.dangerouslySetInnerHTML != null) {
    throw Error(y(91));
  }
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ho(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) {
        throw Error(y(92));
      }
      if (gt(t)) {
        if (1 < t.length) {
          throw Error(y(93));
        }
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: fn(t) };
}
function ds(e, n) {
  var t = fn(n.value),
    r = fn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Wo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function tu(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) {
      e.innerHTML = n;
    } else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = lr.firstChild;
        e.firstChild;

      ) {
        e.removeChild(e.firstChild);
      }
      for (; n.firstChild; ) {
        e.appendChild(n.firstChild);
      }
    }
  });
function Ot(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var kt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(kt).forEach(function (e) {
  Ic.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (kt[n] = kt[e]);
  });
});
function vs(e, n, t) {
  return n == null || typeof n === "boolean" || n === ""
    ? ""
    : t || typeof n !== "number" || n === 0 || (kt.hasOwnProperty(e) && kt[e])
    ? ("" + n).trim()
    : n + "px";
}
function hs(e, n) {
  e = e.style;
  for (var t in n) {
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = vs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
  }
}
var Fc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ru(e, n) {
  if (n) {
    if (Fc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) {
      throw Error(y(137, e));
    }
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) {
        throw Error(y(60));
      }
      if (
        typeof n.dangerouslySetInnerHTML !== "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      ) {
        throw Error(y(61));
      }
    }
    if (n.style != null && typeof n.style !== "object") {
      throw Error(y(62));
    }
  }
}
function lu(e, n) {
  if (e.indexOf("-") === -1) {
    return typeof n.is === "string";
  }
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uu = null;
function Gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ou = null,
  Kn = null,
  Yn = null;
function Qo(e) {
  if ((e = Jt(e))) {
    if (typeof ou !== "function") {
      throw Error(y(280));
    }
    var n = e.stateNode;
    n && ((n = ol(n)), ou(e.stateNode, e.type, n));
  }
}
function ys(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function gs() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Qo(e), n)) {
      for (e = 0; e < n.length; e++) {
        Qo(n[e]);
      }
    }
  }
}
function ws(e, n) {
  return e(n);
}
function Ss() {}
var Cl = !1;
function ks(e, n, t) {
  if (Cl) {
    return e(n, t);
  }
  Cl = !0;
  try {
    return ws(e, n, t);
  } finally {
    (Cl = !1), (Kn !== null || Yn !== null) && (Ss(), gs());
  }
}
function jt(e, n) {
  var t = e.stateNode;
  if (t === null) {
    return null;
  }
  var r = ol(t);
  if (r === null) {
    return null;
  }
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) {
    return null;
  }
  if (t && typeof t !== "function") {
    throw Error(y(231, n, typeof t));
  }
  return t;
}
var iu = !1;
if (We) {
  try {
    var ct = {};
    Object.defineProperty(ct, "passive", {
      get: function () {
        iu = !0;
      },
    }),
      window.addEventListener("test", ct, ct),
      window.removeEventListener("test", ct, ct);
  } catch {
    iu = !1;
  }
}
function Uc(e, n, t, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (v) {
    this.onError(v);
  }
}
var Et = !1,
  Rr = null,
  Or = !1,
  su = null,
  $c = {
    onError: function (e) {
      (Et = !0), (Rr = e);
    },
  };
function Vc(e, n, t, r, l, u, o, i, s) {
  (Et = !1), (Rr = null), Uc.apply($c, arguments);
}
function Ac(e, n, t, r, l, u, o, i, s) {
  if ((Vc.apply(this, arguments), Et)) {
    if (Et) {
      var c = Rr;
      (Et = !1), (Rr = null);
    } else {
      throw Error(y(198));
    }
    Or || ((Or = !0), (su = c));
  }
}
function Rn(e) {
  var n = e,
    t = e;
  if (e.alternate) {
    for (; n.return; ) {
      n = n.return;
    }
  } else {
    e = n;
    do {
      (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    } while (e);
  }
  return n.tag === 3 ? t : null;
}
function Es(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    ) {
      return n.dehydrated;
    }
  }
  return null;
}
function Ko(e) {
  if (Rn(e) !== e) {
    throw Error(y(188));
  }
}
function Bc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Rn(e)), n === null)) {
      throw Error(y(188));
    }
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) {
      break;
    }
    var u = l.alternate;
    if (u === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === t) {
          return Ko(l), e;
        }
        if (u === r) {
          return Ko(l), n;
        }
        u = u.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) {
      (t = l), (r = u);
    } else {
      for (var o = !1, i = l.child; i; ) {
        if (i === t) {
          (o = !0), (t = l), (r = u);
          break;
        }
        if (i === r) {
          (o = !0), (r = l), (t = u);
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === t) {
            (o = !0), (t = u), (r = l);
            break;
          }
          if (i === r) {
            (o = !0), (r = u), (t = l);
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          throw Error(y(189));
        }
      }
    }
    if (t.alternate !== r) {
      throw Error(y(190));
    }
  }
  if (t.tag !== 3) {
    throw Error(y(188));
  }
  return t.stateNode.current === t ? e : n;
}
function xs(e) {
  return (e = Bc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) {
    return e;
  }
  for (e = e.child; e !== null; ) {
    var n = Cs(e);
    if (n !== null) {
      return n;
    }
    e = e.sibling;
  }
  return null;
}
var _s = ye.unstable_scheduleCallback,
  Yo = ye.unstable_cancelCallback,
  Hc = ye.unstable_shouldYield,
  Wc = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  Qc = ye.unstable_getCurrentPriorityLevel,
  Zu = ye.unstable_ImmediatePriority,
  Ns = ye.unstable_UserBlockingPriority,
  jr = ye.unstable_NormalPriority,
  Kc = ye.unstable_LowPriority,
  Ps = ye.unstable_IdlePriority,
  tl = null,
  Fe = null;
function Yc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot === "function") {
    try {
      Fe.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
  }
}
var Re = Math.clz32 ? Math.clz32 : Zc,
  Xc = Math.log,
  Gc = Math.LN2;
function Zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Gc) | 0)) | 0;
}
var ur = 64,
  or = 4194304;
function wt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) {
    return 0;
  }
  var r = 0,
    l = e.suspendedLanes,
    u = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? (r = wt(i)) : ((u &= o), u !== 0 && (r = wt(u)));
  } else {
    (o = t & ~l), o !== 0 ? (r = wt(o)) : u !== 0 && (r = wt(u));
  }
  if (r === 0) {
    return 0;
  }
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
  ) {
    return n;
  }
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0)) {
    for (e = e.entanglements, n &= r; 0 < n; ) {
      (t = 31 - Re(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    }
  }
  return r;
}
function Jc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var o = 31 - Re(u),
      i = 1 << o,
      s = l[o];
    s === -1
      ? (!(i & t) || i & r) && (l[o] = Jc(i, n))
      : s <= n && (e.expiredLanes |= i),
      (u &= ~i);
  }
}
function au(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zs() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function _l(e) {
  for (var n = [], t = 0; 31 > t; t++) {
    n.push(e);
  }
  return n;
}
function Gt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Re(n)),
    (e[n] = t);
}
function bc(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t),
      u = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
  }
}
function Ju(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function Ls(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ts,
  qu,
  Rs,
  Os,
  js,
  cu = !1,
  ir = [],
  tn = null,
  rn = null,
  ln = null,
  Mt = new Map(),
  Dt = new Map(),
  qe = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Mt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dt.delete(n.pointerId);
  }
}
function ft(e, n, t, r, l, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: u,
        targetContainers: [l],
      }),
      n !== null && ((n = Jt(n)), n !== null && qu(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function nf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (tn = ft(tn, e, n, t, r, l)), !0;
    case "dragenter":
      return (rn = ft(rn, e, n, t, r, l)), !0;
    case "mouseover":
      return (ln = ft(ln, e, n, t, r, l)), !0;
    case "pointerover":
      var u = l.pointerId;
      return Mt.set(u, ft(Mt.get(u) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (u = l.pointerId), Dt.set(u, ft(Dt.get(u) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = Es(t)), n !== null)) {
          (e.blockedOn = n),
            js(e.priority, function () {
              Rs(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) {
    return !1;
  }
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = fu(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (uu = r), t.target.dispatchEvent(r), (uu = null);
    } else {
      return (n = Jt(t)), n !== null && qu(n), (e.blockedOn = t), !1;
    }
    n.shift();
  }
  return !0;
}
function Go(e, n, t) {
  Sr(e) && t.delete(n);
}
function tf() {
  (cu = !1),
    tn !== null && Sr(tn) && (tn = null),
    rn !== null && Sr(rn) && (rn = null),
    ln !== null && Sr(ln) && (ln = null),
    Mt.forEach(Go),
    Dt.forEach(Go);
}
function dt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    cu ||
      ((cu = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, tf)));
}
function It(e) {
  function n(l) {
    return dt(l, e);
  }
  if (0 < ir.length) {
    dt(ir[0], e);
    for (var t = 1; t < ir.length; t++) {
      var r = ir[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && dt(tn, e),
      rn !== null && dt(rn, e),
      ln !== null && dt(ln, e),
      Mt.forEach(n),
      Dt.forEach(n),
      t = 0;
    t < qe.length;
    t++
  ) {
    (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  }
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); ) {
    Ms(t), t.blockedOn === null && qe.shift();
  }
}
var Xn = Xe.ReactCurrentBatchConfig,
  Dr = !0;
function rf(e, n, t, r) {
  var l = O,
    u = Xn.transition;
  Xn.transition = null;
  try {
    (O = 1), bu(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = u);
  }
}
function lf(e, n, t, r) {
  var l = O,
    u = Xn.transition;
  Xn.transition = null;
  try {
    (O = 4), bu(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = u);
  }
}
function bu(e, n, t, r) {
  if (Dr) {
    var l = fu(e, n, t, r);
    if (l === null) {
      Dl(e, n, r, Ir, t), Xo(e, r);
    } else if (nf(l, e, n, t, r)) {
      r.stopPropagation();
    } else if ((Xo(e, r), n & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var u = Jt(l);
        if (
          (u !== null && Ts(u),
          (u = fu(e, n, t, r)),
          u === null && Dl(e, n, r, Ir, t),
          u === l)
        ) {
          break;
        }
        l = u;
      }
      l !== null && r.stopPropagation();
    } else {
      Dl(e, n, r, null, t);
    }
  }
}
var Ir = null;
function fu(e, n, t, r) {
  if (((Ir = null), (e = Gu(r)), (e = Sn(e)), e !== null)) {
    if (((n = Rn(e)), n === null)) {
      e = null;
    } else if (((t = n.tag), t === 13)) {
      if (((e = Es(n)), e !== null)) {
        return e;
      }
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) {
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      }
      e = null;
    } else {
      n !== e && (e = null);
    }
  }
  return (Ir = e), null;
}
function Ds(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qc()) {
        case Zu:
          return 1;
        case Ns:
          return 4;
        case jr:
        case Kc:
          return 16;
        case Ps:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  eo = null,
  kr = null;
function Is() {
  if (kr) {
    return kr;
  }
  var e,
    n = eo,
    t = n.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    u = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) {}
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[u - r]; r++) {}
  return (kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Zo() {
  return !1;
}
function we(e) {
  function n(t, r, l, u, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = o),
      (this.currentTarget = null);
    for (var i in e) {
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(u) : u[i]));
    }
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? sr
        : Zo),
      (this.isPropagationStopped = Zo),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue !== "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble !== "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    n
  );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = we(ut),
  Zt = A({}, ut, { view: 0, detail: 0 }),
  uf = we(Zt),
  Nl,
  Pl,
  pt,
  rl = A({}, Zt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pt &&
            (pt && e.type === "mousemove"
              ? ((Nl = e.screenX - pt.screenX), (Pl = e.screenY - pt.screenY))
              : (Pl = Nl = 0),
            (pt = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Jo = we(rl),
  of = A({}, rl, { dataTransfer: 0 }),
  sf = we(of),
  af = A({}, Zt, { relatedTarget: 0 }),
  zl = we(af),
  cf = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = we(cf),
  df = A({}, ut, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = we(df),
  mf = A({}, ut, { data: 0 }),
  qo = we(mf),
  vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = yf[e]) ? !!n[e] : !1;
}
function to() {
  return gf;
}
var wf = A({}, Zt, {
    key: function (e) {
      if (e.key) {
        var n = vf[e.key] || e.key;
        if (n !== "Unidentified") {
          return n;
        }
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Sf = we(wf),
  kf = A({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bo = we(kf),
  Ef = A({}, Zt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  xf = we(Ef),
  Cf = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = we(Cf),
  Nf = A({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pf = we(Nf),
  zf = [9, 13, 27, 32],
  ro = We && "CompositionEvent" in window,
  xt = null;
We && "documentMode" in document && (xt = document.documentMode);
var Lf = We && "TextEvent" in window && !xt,
  Fs = We && (!ro || (xt && 8 < xt && 11 >= xt)),
  ei = " ",
  ni = !1;
function Us(e, n) {
  switch (e) {
    case "keyup":
      return zf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e === "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Tf(e, n) {
  switch (e) {
    case "compositionend":
      return $s(n);
    case "keypress":
      return n.which !== 32 ? null : ((ni = !0), ei);
    case "textInput":
      return (e = n.data), e === ei && ni ? null : e;
    default:
      return null;
  }
}
function Rf(e, n) {
  if (Dn) {
    return e === "compositionend" || (!ro && Us(e, n))
      ? ((e = Is()), (kr = eo = en = null), (Dn = !1), e)
      : null;
  }
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) {
          return n.char;
        }
        if (n.which) {
          return String.fromCharCode(n.which);
        }
      }
      return null;
    case "compositionend":
      return Fs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Of = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ti(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Of[e.type] : n === "textarea";
}
function Vs(e, n, t, r) {
  ys(r),
    (n = Fr(n, "onChange")),
    0 < n.length &&
      ((t = new no("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Ct = null,
  Ft = null;
function jf(e) {
  Js(e, 0);
}
function ll(e) {
  var n = Un(e);
  if (cs(n)) {
    return e;
  }
}
function Mf(e, n) {
  if (e === "change") {
    return n;
  }
}
var As = !1;
if (We) {
  var Ll;
  if (We) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ri = document.createElement("div");
      ri.setAttribute("oninput", "return;"),
        (Tl = typeof ri.oninput === "function");
    }
    Ll = Tl;
  } else {
    Ll = !1;
  }
  As = Ll && (!document.documentMode || 9 < document.documentMode);
}
function li() {
  Ct && (Ct.detachEvent("onpropertychange", Bs), (Ft = Ct = null));
}
function Bs(e) {
  if (e.propertyName === "value" && ll(Ft)) {
    var n = [];
    Vs(n, Ft, e, Gu(e)), ks(jf, n);
  }
}
function Df(e, n, t) {
  e === "focusin"
    ? (li(), (Ct = n), (Ft = t), Ct.attachEvent("onpropertychange", Bs))
    : e === "focusout" && li();
}
function If(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") {
    return ll(Ft);
  }
}
function Ff(e, n) {
  if (e === "click") {
    return ll(n);
  }
}
function Uf(e, n) {
  if (e === "input" || e === "change") {
    return ll(n);
  }
}
function $f(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var je = typeof Object.is === "function" ? Object.is : $f;
function Ut(e, n) {
  if (je(e, n)) {
    return !0;
  }
  if (
    typeof e !== "object" ||
    e === null ||
    typeof n !== "object" ||
    n === null
  ) {
    return !1;
  }
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) {
    return !1;
  }
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Yl.call(n, l) || !je(e[l], n[l])) {
      return !1;
    }
  }
  return !0;
}
function ui(e) {
  for (; e && e.firstChild; ) {
    e = e.firstChild;
  }
  return e;
}
function oi(e, n) {
  var t = ui(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n)) {
        return { node: t, offset: n - e };
      }
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ui(t);
  }
}
function Hs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Hs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, n = Tr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href === "string";
    } catch {
      t = !1;
    }
    if (t) {
      e = n.contentWindow;
    } else {
      break;
    }
    n = Tr(e.document);
  }
  return n;
}
function lo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Vf(e) {
  var n = Ws(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Hs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && lo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      ) {
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      } else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          u = Math.min(r.start, l);
        (r = r.end === void 0 ? u : Math.min(r.end, l)),
          !e.extend && u > r && ((l = r), (r = u), (u = l)),
          (l = oi(t, u));
        var o = oi(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          u > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); ) {
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    }
    for (typeof t.focus === "function" && t.focus(), t = 0; t < n.length; t++) {
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
    }
  }
}
var Af = We && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  du = null,
  _t = null,
  pu = !1;
function ii(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  pu ||
    In == null ||
    In !== Tr(r) ||
    ((r = In),
    "selectionStart" in r && lo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_t && Ut(_t, r)) ||
      ((_t = r),
      (r = Fr(du, "onSelect")),
      0 < r.length &&
        ((n = new no("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = In))));
}
function ar(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Fn = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Rl = {},
  Qs = {};
We &&
  ((Qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function ul(e) {
  if (Rl[e]) {
    return Rl[e];
  }
  if (!Fn[e]) {
    return e;
  }
  var n = Fn[e],
    t;
  for (t in n) {
    if (n.hasOwnProperty(t) && t in Qs) {
      return (Rl[e] = n[t]);
    }
  }
  return e;
}
var Ks = ul("animationend"),
  Ys = ul("animationiteration"),
  Xs = ul("animationstart"),
  Gs = ul("transitionend"),
  Zs = new Map(),
  si =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pn(e, n) {
  Zs.set(e, n), Tn(n, [e]);
}
for (var Ol = 0; Ol < si.length; Ol++) {
  var jl = si[Ol],
    Bf = jl.toLowerCase(),
    Hf = jl[0].toUpperCase() + jl.slice(1);
  pn(Bf, "on" + Hf);
}
pn(Ks, "onAnimationEnd");
pn(Ys, "onAnimationIteration");
pn(Xs, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Gs, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var St =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(St));
function ai(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Ac(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (n) {
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o],
            s = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), s !== u && l.isPropagationStopped())) {
            break e;
          }
          ai(l, i, c), (u = s);
        }
      } else {
        for (o = 0; o < r.length; o++) {
          if (
            ((i = r[o]),
            (s = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            s !== u && l.isPropagationStopped())
          ) {
            break e;
          }
          ai(l, i, c), (u = s);
        }
      }
    }
  }
  if (Or) {
    throw ((e = su), (Or = !1), (su = null), e);
  }
}
function D(e, n) {
  var t = n[gu];
  t === void 0 && (t = n[gu] = new Set());
  var r = e + "__bubble";
  t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
  var r = 0;
  n && (r |= 4), qs(t, e, r, n);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function $t(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      us.forEach(function (t) {
        t !== "selectionchange" && (Wf.has(t) || Ml(t, !1, e), Ml(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[cr] || ((n[cr] = !0), Ml("selectionchange", !1, n));
  }
}
function qs(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = bu;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !iu ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Dl(e, n, t, r, l) {
  var u = r;
  if (!(n & 1) && !(n & 2) && r !== null) {
    e: for (;;) {
      if (r === null) {
        return;
      }
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) {
          break;
        }
        if (o === 4) {
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            ) {
              return;
            }
            o = o.return;
          }
        }
        for (; i !== null; ) {
          if (((o = Sn(i)), o === null)) {
            return;
          }
          if (((s = o.tag), s === 5 || s === 6)) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  }
  ks(function () {
    var c = u,
      v = Gu(t),
      m = [];
    e: {
      var p = Zs.get(e);
      if (p !== void 0) {
        var g = no,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(t) === 0) {
              break e;
            }
          case "keydown":
          case "keyup":
            g = Sf;
            break;
          case "focusin":
            (w = "focus"), (g = zl);
            break;
          case "focusout":
            (w = "blur"), (g = zl);
            break;
          case "beforeblur":
          case "afterblur":
            g = zl;
            break;
          case "click":
            if (t.button === 2) {
              break e;
            }
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Jo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = xf;
            break;
          case Ks:
          case Ys:
          case Xs:
            g = ff;
            break;
          case Gs:
            g = _f;
            break;
          case "scroll":
            g = uf;
            break;
          case "wheel":
            g = Pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bo;
        }
        var S = (n & 4) !== 0,
          F = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var h = d.stateNode;
          if (
            (d.tag === 5 &&
              h !== null &&
              ((d = h),
              f !== null && ((h = jt(a, f)), h != null && S.push(Vt(a, h, d)))),
            F)
          ) {
            break;
          }
          a = a.return;
        }
        0 < S.length &&
          ((p = new g(p, w, null, t, v)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            t !== uu &&
            (w = t.relatedTarget || t.fromElement) &&
            (Sn(w) || w[Qe]))
        ) {
          break e;
        }
        if (
          (g || p) &&
          ((p =
            v.window === v
              ? v
              : (p = v.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = t.relatedTarget || t.toElement),
              (g = c),
              (w = w ? Sn(w) : null),
              w !== null &&
                ((F = Rn(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((S = Jo),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = bo),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (F = g == null ? p : Un(g)),
            (d = w == null ? p : Un(w)),
            (p = new S(h, a + "leave", g, t, v)),
            (p.target = F),
            (p.relatedTarget = d),
            (h = null),
            Sn(v) === c &&
              ((S = new S(f, a + "enter", w, t, v)),
              (S.target = d),
              (S.relatedTarget = F),
              (h = S)),
            (F = h),
            g && w)
          ) {
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = On(d)) {
                a++;
              }
              for (d = 0, h = f; h; h = On(h)) {
                d++;
              }
              for (; 0 < a - d; ) {
                (S = On(S)), a--;
              }
              for (; 0 < d - a; ) {
                (f = On(f)), d--;
              }
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) {
                  break n;
                }
                (S = On(S)), (f = On(f));
              }
              S = null;
            }
          } else {
            S = null;
          }
          g !== null && ci(m, p, g, S, !1),
            w !== null && F !== null && ci(m, F, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Un(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        ) {
          var E = Mf;
        } else if (ti(p)) {
          if (As) {
            E = Uf;
          } else {
            E = If;
            var C = Df;
          }
        } else {
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Ff);
        }
        if (E && (E = E(e, c))) {
          Vs(m, E, t, v);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            eu(p, "number", p.value);
      }
      switch (((C = c ? Un(c) : window), e)) {
        case "focusin":
          (ti(C) || C.contentEditable === "true") &&
            ((In = C), (du = c), (_t = null));
          break;
        case "focusout":
          _t = du = In = null;
          break;
        case "mousedown":
          pu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pu = !1), ii(m, t, v);
          break;
        case "selectionchange":
          if (Af) {
            break;
          }
        case "keydown":
        case "keyup":
          ii(m, t, v);
      }
      var _;
      if (ro) {
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      } else {
        Dn
          ? Us(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      }
      N &&
        (Fs &&
          t.locale !== "ko" &&
          (Dn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Dn && (_ = Is())
            : ((en = v),
              (eo = "value" in en ? en.value : en.textContent),
              (Dn = !0))),
        (C = Fr(c, N)),
        0 < C.length &&
          ((N = new qo(N, e, null, t, v)),
          m.push({ event: N, listeners: C }),
          _ ? (N.data = _) : ((_ = $s(t)), _ !== null && (N.data = _)))),
        (_ = Lf ? Tf(e, t) : Rf(e, t)) &&
          ((c = Fr(c, "onBeforeInput")),
          0 < c.length &&
            ((v = new qo("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: c }),
            (v.data = _)));
    }
    Js(m, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Fr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      u = l.stateNode;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      (u = jt(e, t)),
      u != null && r.unshift(Vt(e, u, l)),
      (u = jt(e, n)),
      u != null && r.push(Vt(e, u, l))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) {
    return null;
  }
  do {
    e = e.return;
  } while (e && e.tag !== 5);
  return e || null;
}
function ci(e, n, t, r, l) {
  for (var u = n._reactName, o = []; t !== null && t !== r; ) {
    var i = t,
      s = i.alternate,
      c = i.stateNode;
    if (s !== null && s === r) {
      break;
    }
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      l
        ? ((s = jt(t, u)), s != null && o.unshift(Vt(t, s, i)))
        : l || ((s = jt(t, u)), s != null && o.push(Vt(t, s, i)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Qf = /\r\n?/g,
  Kf = /\u0000|\uFFFD/g;
function fi(e) {
  return (typeof e === "string" ? e : "" + e)
    .replace(
      Qf,
      `
`
    )
    .replace(Kf, "");
}
function fr(e, n, t) {
  if (((n = fi(n)), fi(e) !== n && t)) {
    throw Error(y(425));
  }
}
function Ur() {}
var mu = null,
  vu = null;
function hu(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children === "string" ||
    typeof n.children === "number" ||
    (typeof n.dangerouslySetInnerHTML === "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var yu = typeof setTimeout === "function" ? setTimeout : void 0,
  Yf = typeof clearTimeout === "function" ? clearTimeout : void 0,
  di = typeof Promise === "function" ? Promise : void 0,
  Xf =
    typeof queueMicrotask === "function"
      ? queueMicrotask
      : typeof di < "u"
      ? function (e) {
          return di.resolve(null).then(e).catch(Gf);
        }
      : yu;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Il(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8)) {
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), It(n);
          return;
        }
        r--;
      } else {
        (t !== "$" && t !== "$?" && t !== "$!") || r++;
      }
    }
    t = l;
  } while (t);
  It(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) {
      break;
    }
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) {
        break;
      }
      if (n === "/$") {
        return null;
      }
    }
  }
  return e;
}
function pi(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) {
          return e;
        }
        n--;
      } else {
        t === "/$" && n++;
      }
    }
    e = e.previousSibling;
  }
  return null;
}
var ot = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + ot,
  At = "__reactProps$" + ot,
  Qe = "__reactContainer$" + ot,
  gu = "__reactEvents$" + ot,
  Zf = "__reactListeners$" + ot,
  Jf = "__reactHandles$" + ot;
function Sn(e) {
  var n = e[Ie];
  if (n) {
    return n;
  }
  for (var t = e.parentNode; t; ) {
    if ((n = t[Qe] || t[Ie])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      ) {
        for (e = pi(e); e !== null; ) {
          if ((t = e[Ie])) {
            return t;
          }
          e = pi(e);
        }
      }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Jt(e) {
  return (
    (e = e[Ie] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) {
    return e.stateNode;
  }
  throw Error(y(33));
}
function ol(e) {
  return e[At] || null;
}
var wu = [],
  $n = -1;
function mn(e) {
  return { current: e };
}
function I(e) {
  0 > $n || ((e.current = wu[$n]), (wu[$n] = null), $n--);
}
function M(e, n) {
  $n++, (wu[$n] = e.current), (e.current = n);
}
var dn = {},
  le = mn(dn),
  fe = mn(!1),
  _n = dn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) {
    return dn;
  }
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) {
    return r.__reactInternalMemoizedMaskedChildContext;
  }
  var l = {},
    u;
  for (u in t) {
    l[u] = n[u];
  }
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  I(fe), I(le);
}
function mi(e, n, t) {
  if (le.current !== dn) {
    throw Error(y(168));
  }
  M(le, n), M(fe, t);
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext !== "function")) {
    return t;
  }
  r = r.getChildContext();
  for (var l in r) {
    if (!(l in n)) {
      throw Error(y(108, Mc(e) || "Unknown", l));
    }
  }
  return A({}, t, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (_n = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function vi(e, n, t) {
  var r = e.stateNode;
  if (!r) {
    throw Error(y(169));
  }
  t
    ? ((e = bs(e, n, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(le),
      M(le, e))
    : I(fe),
    M(fe, t);
}
var Ve = null,
  il = !1,
  Fl = !1;
function ea(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function qf(e) {
  (il = !0), ea(e);
}
function vn() {
  if (!Fl && Ve !== null) {
    Fl = !0;
    var e = 0,
      n = O;
    try {
      var t = Ve;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do {
          r = r(!0);
        } while (r !== null);
      }
      (Ve = null), (il = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), _s(Zu, vn), l);
    } finally {
      (O = n), (Fl = !1);
    }
  }
  return null;
}
var Vn = [],
  An = 0,
  Ar = null,
  Br = 0,
  Se = [],
  ke = 0,
  Nn = null,
  Ae = 1,
  Be = "";
function gn(e, n) {
  (Vn[An++] = Br), (Vn[An++] = Ar), (Ar = e), (Br = n);
}
function na(e, n, t) {
  (Se[ke++] = Ae), (Se[ke++] = Be), (Se[ke++] = Nn), (Nn = e);
  var r = Ae;
  e = Be;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var u = 32 - Re(n) + l;
  if (30 < u) {
    var o = l - (l % 5);
    (u = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ae = (1 << (32 - Re(n) + l)) | (t << l) | r),
      (Be = u + e);
  } else {
    (Ae = (1 << u) | (t << l) | r), (Be = e);
  }
}
function uo(e) {
  e.return !== null && (gn(e, 1), na(e, 1, 0));
}
function oo(e) {
  for (; e === Ar; ) {
    (Ar = Vn[--An]), (Vn[An] = null), (Br = Vn[--An]), (Vn[An] = null);
  }
  for (; e === Nn; ) {
    (Nn = Se[--ke]),
      (Se[ke] = null),
      (Be = Se[--ke]),
      (Se[ke] = null),
      (Ae = Se[--ke]),
      (Se[ke] = null);
  }
}
var he = null,
  ve = null,
  U = !1,
  Te = null;
function ta(e, n) {
  var t = Ee(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function hi(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (he = e), (ve = un(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (he = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: Ae, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ee(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (he = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Su(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ku(e) {
  if (U) {
    var n = ve;
    if (n) {
      var t = n;
      if (!hi(e, n)) {
        if (Su(e)) {
          throw Error(y(418));
        }
        n = un(t.nextSibling);
        var r = he;
        n && hi(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (he = e));
      }
    } else {
      if (Su(e)) {
        throw Error(y(418));
      }
      (e.flags = (e.flags & -4097) | 2), (U = !1), (he = e);
    }
  }
}
function yi(e) {
  for (
    e = e.return;
    e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

  ) {
    e = e.return;
  }
  he = e;
}
function dr(e) {
  if (e !== he) {
    return !1;
  }
  if (!U) {
    return yi(e), (U = !0), !1;
  }
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !hu(e.type, e.memoizedProps))),
    n && (n = ve))
  ) {
    if (Su(e)) {
      throw (ra(), Error(y(418)));
    }
    for (; n; ) {
      ta(e, n), (n = un(n.nextSibling));
    }
  }
  if ((yi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) {
      throw Error(y(317));
    }
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ve = un(e.nextSibling);
              break e;
            }
            n--;
          } else {
            (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else {
    ve = he ? un(e.stateNode.nextSibling) : null;
  }
  return !0;
}
function ra() {
  for (var e = ve; e; ) {
    e = un(e.nextSibling);
  }
}
function bn() {
  (ve = he = null), (U = !1);
}
function io(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var bf = Xe.ReactCurrentBatchConfig;
function mt(e, n, t) {
  if (
    ((e = t.ref),
    e !== null && typeof e !== "function" && typeof e !== "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) {
          throw Error(y(309));
        }
        var r = t.stateNode;
      }
      if (!r) {
        throw Error(y(147, e));
      }
      var l = r,
        u = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref === "function" &&
        n.ref._stringRef === u
        ? n.ref
        : ((n = function (o) {
            var i = l.refs;
            o === null ? delete i[u] : (i[u] = o);
          }),
          (n._stringRef = u),
          n);
    }
    if (typeof e !== "string") {
      throw Error(y(284));
    }
    if (!t._owner) {
      throw Error(y(290, e));
    }
  }
  return e;
}
function pr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function gi(e) {
  var n = e._init;
  return n(e._payload);
}
function la(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) {
      return null;
    }
    for (; a !== null; ) {
      n(f, a), (a = a.sibling);
    }
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; ) {
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    }
    return f;
  }
  function l(f, a) {
    return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function u(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, h) {
    return a === null || a.tag !== 6
      ? ((a = Wl(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, h) {
    var E = d.type;
    return E === Mn
      ? v(f, a, d.props.children, h, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E === "object" &&
            E !== null &&
            E.$$typeof === Ze &&
            gi(E) === a.type))
      ? ((h = l(a, d.props)), (h.ref = mt(f, a, d)), (h.return = f), h)
      : ((h = Lr(d.type, d.key, d.props, null, f.mode, h)),
        (h.ref = mt(f, a, d)),
        (h.return = f),
        h);
  }
  function c(f, a, d, h) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Ql(d, f.mode, h)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function v(f, a, d, h, E) {
    return a === null || a.tag !== 7
      ? ((a = Cn(d, f.mode, h, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a === "string" && a !== "") || typeof a === "number") {
      return (a = Wl("" + a, f.mode, d)), (a.return = f), a;
    }
    if (typeof a === "object" && a !== null) {
      switch (a.$$typeof) {
        case tr:
          return (
            (d = Lr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = mt(f, null, a)),
            (d.return = f),
            d
          );
        case jn:
          return (a = Ql(a, f.mode, d)), (a.return = f), a;
        case Ze:
          var h = a._init;
          return m(f, h(a._payload), d);
      }
      if (gt(a) || at(a)) {
        return (a = Cn(a, f.mode, d, null)), (a.return = f), a;
      }
      pr(f, a);
    }
    return null;
  }
  function p(f, a, d, h) {
    var E = a !== null ? a.key : null;
    if ((typeof d === "string" && d !== "") || typeof d === "number") {
      return E !== null ? null : i(f, a, "" + d, h);
    }
    if (typeof d === "object" && d !== null) {
      switch (d.$$typeof) {
        case tr:
          return d.key === E ? s(f, a, d, h) : null;
        case jn:
          return d.key === E ? c(f, a, d, h) : null;
        case Ze:
          return (E = d._init), p(f, a, E(d._payload), h);
      }
      if (gt(d) || at(d)) {
        return E !== null ? null : v(f, a, d, h, null);
      }
      pr(f, d);
    }
    return null;
  }
  function g(f, a, d, h, E) {
    if ((typeof h === "string" && h !== "") || typeof h === "number") {
      return (f = f.get(d) || null), i(a, f, "" + h, E);
    }
    if (typeof h === "object" && h !== null) {
      switch (h.$$typeof) {
        case tr:
          return (f = f.get(h.key === null ? d : h.key) || null), s(a, f, h, E);
        case jn:
          return (f = f.get(h.key === null ? d : h.key) || null), c(a, f, h, E);
        case Ze:
          var C = h._init;
          return g(f, a, d, C(h._payload), E);
      }
      if (gt(h) || at(h)) {
        return (f = f.get(d) || null), v(a, f, h, E, null);
      }
      pr(a, h);
    }
    return null;
  }
  function w(f, a, d, h) {
    for (
      var E = null, C = null, _ = a, N = (a = 0), H = null;
      _ !== null && N < d.length;
      N++
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var T = p(f, _, d[N], h);
      if (T === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && T.alternate === null && n(f, _),
        (a = u(T, a, N)),
        C === null ? (E = T) : (C.sibling = T),
        (C = T),
        (_ = H);
    }
    if (N === d.length) {
      return t(f, _), U && gn(f, N), E;
    }
    if (_ === null) {
      for (; N < d.length; N++) {
        (_ = m(f, d[N], h)),
          _ !== null &&
            ((a = u(_, a, N)), C === null ? (E = _) : (C.sibling = _), (C = _));
      }
      return U && gn(f, N), E;
    }
    for (_ = r(f, _); N < d.length; N++) {
      (H = g(_, f, N, d[N], h)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? N : H.key),
          (a = u(H, a, N)),
          C === null ? (E = H) : (C.sibling = H),
          (C = H));
    }
    return (
      e &&
        _.forEach(function (Ne) {
          return n(f, Ne);
        }),
      U && gn(f, N),
      E
    );
  }
  function S(f, a, d, h) {
    var E = at(d);
    if (typeof E !== "function") {
      throw Error(y(150));
    }
    if (((d = E.call(d)), d == null)) {
      throw Error(y(151));
    }
    for (
      var C = (E = null), _ = a, N = (a = 0), H = null, T = d.next();
      _ !== null && !T.done;
      N++, T = d.next()
    ) {
      _.index > N ? ((H = _), (_ = null)) : (H = _.sibling);
      var Ne = p(f, _, T.value, h);
      if (Ne === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Ne.alternate === null && n(f, _),
        (a = u(Ne, a, N)),
        C === null ? (E = Ne) : (C.sibling = Ne),
        (C = Ne),
        (_ = H);
    }
    if (T.done) {
      return t(f, _), U && gn(f, N), E;
    }
    if (_ === null) {
      for (; !T.done; N++, T = d.next()) {
        (T = m(f, T.value, h)),
          T !== null &&
            ((a = u(T, a, N)), C === null ? (E = T) : (C.sibling = T), (C = T));
      }
      return U && gn(f, N), E;
    }
    for (_ = r(f, _); !T.done; N++, T = d.next()) {
      (T = g(_, f, N, T.value, h)),
        T !== null &&
          (e && T.alternate !== null && _.delete(T.key === null ? N : T.key),
          (a = u(T, a, N)),
          C === null ? (E = T) : (C.sibling = T),
          (C = T));
    }
    return (
      e &&
        _.forEach(function (it) {
          return n(f, it);
        }),
      U && gn(f, N),
      E
    );
  }
  function F(f, a, d, h) {
    if (
      (typeof d === "object" &&
        d !== null &&
        d.type === Mn &&
        d.key === null &&
        (d = d.props.children),
      typeof d === "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case tr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Mn)) {
                  if (C.tag === 7) {
                    t(f, C.sibling),
                      (a = l(C, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E === "object" &&
                    E !== null &&
                    E.$$typeof === Ze &&
                    gi(E) === C.type)
                ) {
                  t(f, C.sibling),
                    (a = l(C, d.props)),
                    (a.ref = mt(f, C, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                t(f, C);
                break;
              } else {
                n(f, C);
              }
              C = C.sibling;
            }
            d.type === Mn
              ? ((a = Cn(d.props.children, f.mode, h, d.key)),
                (a.return = f),
                (f = a))
              : ((h = Lr(d.type, d.key, d.props, null, f.mode, h)),
                (h.ref = mt(f, a, d)),
                (h.return = f),
                (f = h));
          }
          return o(f);
        case jn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) {
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  t(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              } else {
                n(f, a);
              }
              a = a.sibling;
            }
            (a = Ql(d, f.mode, h)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (C = d._init), F(f, a, C(d._payload), h);
      }
      if (gt(d)) {
        return w(f, a, d, h);
      }
      if (at(d)) {
        return S(f, a, d, h);
      }
      pr(f, d);
    }
    return (typeof d === "string" && d !== "") || typeof d === "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (t(f, a), (a = Wl(d, f.mode, h)), (a.return = f), (f = a)),
        o(f))
      : t(f, a);
  }
  return F;
}
var et = la(!0),
  ua = la(!1),
  Hr = mn(null),
  Wr = null,
  Bn = null,
  so = null;
function ao() {
  so = Bn = Wr = null;
}
function co(e) {
  var n = Hr.current;
  I(Hr), (e._currentValue = n);
}
function Eu(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    ) {
      break;
    }
    e = e.return;
  }
}
function Gn(e, n) {
  (Wr = e),
    (so = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var n = e._currentValue;
  if (so !== e) {
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (Wr === null) {
        throw Error(y(308));
      }
      (Bn = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else {
      Bn = Bn.next = e;
    }
  }
  return n;
}
var kn = null;
function fo(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function oa(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), fo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) {
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  }
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function po(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, n, t) {
  var r = e.updateQueue;
  if (r === null) {
    return null;
  }
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), fo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function xr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ju(e, t);
  }
}
function wi(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      u = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        u === null ? (l = u = o) : (u = u.next = o), (t = t.next);
      } while (t !== null);
      u === null ? (l = u = n) : (u = u.next = n);
    } else {
      l = u = n;
    }
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: u,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Qr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var u = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      c = s.next;
    (s.next = null), o === null ? (u = c) : (o.next = c), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (i = v.lastBaseUpdate),
      i !== o &&
        (i === null ? (v.firstBaseUpdate = c) : (i.next = c),
        (v.lastBaseUpdate = s)));
  }
  if (u !== null) {
    var m = l.baseState;
    (o = 0), (v = c = s = null), (i = u);
    do {
      var p = i.lane,
        g = i.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: g,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            S = i;
          switch (((p = n), (g = t), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w === "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w === "function" ? w.call(g, m, p) : w),
                p == null)
              ) {
                break e;
              }
              m = A({}, m, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [i]) : p.push(i));
      } else {
        (g = {
          eventTime: g,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          v === null ? ((c = v = g), (s = m)) : (v = v.next = g),
          (o |= p);
      }
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) {
          break;
        }
        (p = i),
          (i = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do {
        (o |= l.lane), (l = l.next);
      } while (l !== n);
    } else {
      u === null && (l.shared.lanes = 0);
    }
    (zn |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Si(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null)) {
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l !== "function")) {
          throw Error(y(191, l));
        }
        l.call(r);
      }
    }
  }
}
var qt = {},
  Ue = mn(qt),
  Bt = mn(qt),
  Ht = mn(qt);
function En(e) {
  if (e === qt) {
    throw Error(y(174));
  }
  return e;
}
function mo(e, n) {
  switch ((M(Ht, n), M(Bt, e), M(Ue, qt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : tu(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = tu(n, e));
  }
  I(Ue), M(Ue, n);
}
function nt() {
  I(Ue), I(Bt), I(Ht);
}
function sa(e) {
  En(Ht.current);
  var n = En(Ue.current),
    t = tu(n, e.type);
  n !== t && (M(Bt, e), M(Ue, t));
}
function vo(e) {
  Bt.current === e && (I(Ue), I(Bt));
}
var $ = mn(0);
function Kr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      ) {
        return n;
      }
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) {
        return n;
      }
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) {
      break;
    }
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) {
        return null;
      }
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Ul = [];
function ho() {
  for (var e = 0; e < Ul.length; e++) {
    Ul[e]._workInProgressVersionPrimary = null;
  }
  Ul.length = 0;
}
var Cr = Xe.ReactCurrentDispatcher,
  $l = Xe.ReactCurrentBatchConfig,
  Pn = 0,
  V = null,
  Y = null,
  Z = null,
  Yr = !1,
  Nt = !1,
  Wt = 0,
  ed = 0;
function ne() {
  throw Error(y(321));
}
function yo(e, n) {
  if (n === null) {
    return !1;
  }
  for (var t = 0; t < n.length && t < e.length; t++) {
    if (!je(e[t], n[t])) {
      return !1;
    }
  }
  return !0;
}
function go(e, n, t, r, l, u) {
  if (
    ((Pn = u),
    (V = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? ld : ud),
    (e = t(r, l)),
    Nt)
  ) {
    u = 0;
    do {
      if (((Nt = !1), (Wt = 0), 25 <= u)) {
        throw Error(y(301));
      }
      (u += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Cr.current = od),
        (e = t(r, l));
    } while (Nt);
  }
  if (
    ((Cr.current = Xr),
    (n = Y !== null && Y.next !== null),
    (Pn = 0),
    (Z = Y = V = null),
    (Yr = !1),
    n)
  ) {
    throw Error(y(300));
  }
  return e;
}
function wo() {
  var e = Wt !== 0;
  return (Wt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else {
    e = Y.next;
  }
  var n = Z === null ? V.memoizedState : Z.next;
  if (n !== null) {
    (Z = n), (Y = e);
  } else {
    if (e === null) {
      throw Error(y(310));
    }
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (V.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Qt(e, n) {
  return typeof n === "function" ? n(e) : n;
}
function Vl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) {
    throw Error(y(311));
  }
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    u = t.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = u.next), (u.next = o);
    }
    (r.baseQueue = l = u), (t.pending = null);
  }
  if (l !== null) {
    (u = l.next), (r = r.baseState);
    var i = (o = null),
      s = null,
      c = u;
    do {
      var v = c.lane;
      if ((Pn & v) === v) {
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      } else {
        var m = {
          lane: v,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((i = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= v),
          (zn |= v);
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? (o = r) : (s.next = i),
      je(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do {
      (u = l.lane), (V.lanes |= u), (zn |= u), (l = l.next);
    } while (l !== e);
  } else {
    l === null && (t.lanes = 0);
  }
  return [n.memoizedState, t.dispatch];
}
function Al(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) {
    throw Error(y(311));
  }
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    u = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do {
      (u = e(u, o.action)), (o = o.next);
    } while (o !== l);
    je(u, n.memoizedState) || (ce = !0),
      (n.memoizedState = u),
      n.baseQueue === null && (n.baseState = u),
      (t.lastRenderedState = u);
  }
  return [u, r];
}
function aa() {}
function ca(e, n) {
  var t = V,
    r = _e(),
    l = n(),
    u = !je(r.memoizedState, l);
  if (
    (u && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    So(pa.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || u || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Kt(9, da.bind(null, t, r, l, n), void 0, null),
      J === null)
    ) {
      throw Error(y(349));
    }
    Pn & 30 || fa(t, n, l);
  }
  return l;
}
function fa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function da(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), ma(n) && va(e);
}
function pa(e, n, t) {
  return t(function () {
    ma(n) && va(e);
  });
}
function ma(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !je(e, t);
  } catch {
    return !0;
  }
}
function va(e) {
  var n = Ke(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function ki(e) {
  var n = De();
  return (
    typeof e === "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = rd.bind(null, V, e)),
    [n.memoizedState, e]
  );
}
function Kt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = V.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (V.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ha() {
  return _e().memoizedState;
}
function _r(e, n, t, r) {
  var l = De();
  (V.flags |= e),
    (l.memoizedState = Kt(1 | n, t, void 0, r === void 0 ? null : r));
}
function sl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((u = o.destroy), r !== null && yo(r, o.deps))) {
      l.memoizedState = Kt(n, t, u, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Kt(1 | n, t, u, r));
}
function Ei(e, n) {
  return _r(8390656, 8, e, n);
}
function So(e, n) {
  return sl(2048, 8, e, n);
}
function ya(e, n) {
  return sl(4, 2, e, n);
}
function ga(e, n) {
  return sl(4, 4, e, n);
}
function wa(e, n) {
  if (typeof n === "function") {
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  }
  if (n != null) {
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
  }
}
function Sa(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), sl(4, 4, wa.bind(null, n, e), t)
  );
}
function ko() {}
function ka(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yo(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ea(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && yo(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function xa(e, n, t) {
  return Pn & 21
    ? (je(t, n) || ((t = zs()), (V.lanes |= t), (zn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function nd(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), ($l.transition = r);
  }
}
function Ca() {
  return _e().memoizedState;
}
function td(e, n, t) {
  var r = an(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _a(e))
  ) {
    Na(n, t);
  } else if (((t = oa(e, n, t, r)), t !== null)) {
    var l = oe();
    Oe(t, e, r, l), Pa(t, n, r);
  }
}
function rd(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (_a(e)) {
    Na(n, l);
  } else {
    var u = e.alternate;
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = n.lastRenderedReducer), u !== null)
    ) {
      try {
        var o = n.lastRenderedState,
          i = u(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = i), je(i, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), fo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    }
    (t = oa(e, n, l, r)),
      t !== null && ((l = oe()), Oe(t, e, r, l), Pa(t, n, r));
  }
}
function _a(e) {
  var n = e.alternate;
  return e === V || (n !== null && n === V);
}
function Na(e, n) {
  Nt = Yr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Pa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ju(e, t);
  }
}
var Xr = {
    readContext: Ce,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ce,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ce,
    useEffect: Ei,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        _r(4194308, 4, wa.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return _r(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return _r(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = td.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: ki,
    useDebugValue: ko,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = ki(!1),
        n = e[0];
      return (e = nd.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = V,
        l = De();
      if (U) {
        if (t === void 0) {
          throw Error(y(407));
        }
        t = t();
      } else {
        if (((t = n()), J === null)) {
          throw Error(y(349));
        }
        Pn & 30 || fa(r, n, t);
      }
      l.memoizedState = t;
      var u = { value: t, getSnapshot: n };
      return (
        (l.queue = u),
        Ei(pa.bind(null, r, u, e), [e]),
        (r.flags |= 2048),
        Kt(9, da.bind(null, r, u, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = J.identifierPrefix;
      if (U) {
        var t = Be,
          r = Ae;
        (t = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Wt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else {
        (t = ed++), (n = ":" + n + "r" + t.toString(32) + ":");
      }
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  ud = {
    readContext: Ce,
    useCallback: ka,
    useContext: Ce,
    useEffect: So,
    useImperativeHandle: Sa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: Vl,
    useRef: ha,
    useState: function () {
      return Vl(Qt);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var n = _e();
      return xa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Qt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ca,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ce,
    useCallback: ka,
    useContext: Ce,
    useEffect: So,
    useImperativeHandle: Sa,
    useInsertionEffect: ya,
    useLayoutEffect: ga,
    useMemo: Ea,
    useReducer: Al,
    useRef: ha,
    useState: function () {
      return Al(Qt);
    },
    useDebugValue: ko,
    useDeferredValue: function (e) {
      var n = _e();
      return Y === null ? (n.memoizedState = e) : xa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Qt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ca,
    unstable_isNewReconciler: !1,
  };
function ze(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) {
      n[t] === void 0 && (n[t] = e[t]);
    }
    return n;
  }
  return n;
}
function xu(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      u = He(r, l);
    (u.payload = n),
      t != null && (u.callback = t),
      (n = on(e, u, l)),
      n !== null && (Oe(n, e, l, r), xr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      u = He(r, l);
    (u.tag = 1),
      (u.payload = n),
      t != null && (u.callback = t),
      (n = on(e, u, l)),
      n !== null && (Oe(n, e, l, r), xr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = an(e),
      l = He(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = on(e, l, r)),
      n !== null && (Oe(n, e, r, t), xr(n, e, r));
  },
};
function xi(e, n, t, r, l, u, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate === "function"
      ? e.shouldComponentUpdate(r, u, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ut(t, r) || !Ut(l, u)
      : !0
  );
}
function za(e, n, t) {
  var r = !1,
    l = dn,
    u = n.contextType;
  return (
    typeof u === "object" && u !== null
      ? (u = Ce(u))
      : ((l = de(n) ? _n : le.current),
        (r = n.contextTypes),
        (u = (r = r != null) ? qn(e, l) : dn)),
    (n = new n(t, u)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = al),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    n
  );
}
function Ci(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps === "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps === "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && al.enqueueReplaceState(n, n.state, null);
}
function Cu(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), po(e);
  var u = n.contextType;
  typeof u === "object" && u !== null
    ? (l.context = Ce(u))
    : ((u = de(n) ? _n : le.current), (l.context = qn(e, u))),
    (l.state = e.memoizedState),
    (u = n.getDerivedStateFromProps),
    typeof u === "function" && (xu(e, n, u, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps === "function" ||
      typeof l.getSnapshotBeforeUpdate === "function" ||
      (typeof l.UNSAFE_componentWillMount !== "function" &&
        typeof l.componentWillMount !== "function") ||
      ((n = l.state),
      typeof l.componentWillMount === "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount === "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && al.enqueueReplaceState(l, l.state, null),
      Qr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount === "function" && (e.flags |= 4194308);
}
function tt(e, n) {
  try {
    var t = "",
      r = n;
    do {
      (t += jc(r)), (r = r.return);
    } while (r);
    var l = t;
  } catch (u) {
    l =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function _u(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var id = typeof WeakMap === "function" ? WeakMap : Map;
function La(e, n, t) {
  (t = He(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Zr || ((Zr = !0), (Du = r)), _u(e, n);
    }),
    t
  );
}
function Ta(e, n, t) {
  (t = He(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r === "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        _u(e, n);
      });
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch === "function" &&
      (t.callback = function () {
        _u(e, n),
          typeof r !== "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function _i(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new id();
    var l = new Set();
    r.set(n, l);
  } else {
    (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  }
  l.has(t) || (l.add(t), (e = kd.bind(null, e, n, t)), n.then(e, e));
}
function Ni(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    ) {
      return e;
    }
    e = e.return;
  } while (e !== null);
  return null;
}
function Pi(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = He(-1, 1)), (n.tag = 2), on(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var sd = Xe.ReactCurrentOwner,
  ce = !1;
function ue(e, n, t, r) {
  n.child = e === null ? ua(n, null, t, r) : et(n, e.child, t, r);
}
function zi(e, n, t, r, l) {
  t = t.render;
  var u = n.ref;
  return (
    Gn(n, l),
    (r = go(e, n, t, r, u, l)),
    (t = wo()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && t && uo(n), (n.flags |= 1), ue(e, n, r, l), n.child)
  );
}
function Li(e, n, t, r, l) {
  if (e === null) {
    var u = t.type;
    return typeof u === "function" &&
      !Lo(u) &&
      u.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = u), Ra(e, n, u, r, l))
      : ((e = Lr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((u = e.child), !(e.lanes & l))) {
    var o = u.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ut), t(o, r) && e.ref === n.ref)
    ) {
      return Ye(e, n, l);
    }
  }
  return (
    (n.flags |= 1),
    (e = cn(u, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Ut(u, r) && e.ref === n.ref) {
      if (((ce = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0)) {
        e.flags & 131072 && (ce = !0);
      } else {
        return (n.lanes = e.lanes), Ye(e, n, l);
      }
    }
  }
  return Nu(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") {
    if (!(n.mode & 1)) {
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Wn, me),
        (me |= t);
    } else {
      if (!(t & 1073741824)) {
        return (
          (e = u !== null ? u.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          M(Wn, me),
          (me |= e),
          null
        );
      }
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = u !== null ? u.baseLanes : t),
        M(Wn, me),
        (me |= r);
    }
  } else {
    u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
      M(Wn, me),
      (me |= r);
  }
  return ue(e, n, l, t), n.child;
}
function ja(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Nu(e, n, t, r, l) {
  var u = de(t) ? _n : le.current;
  return (
    (u = qn(n, u)),
    Gn(n, l),
    (t = go(e, n, t, r, u, l)),
    (r = wo()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && r && uo(n), (n.flags |= 1), ue(e, n, t, l), n.child)
  );
}
function Ti(e, n, t, r, l) {
  if (de(t)) {
    var u = !0;
    Vr(n);
  } else {
    u = !1;
  }
  if ((Gn(n, l), n.stateNode === null)) {
    Nr(e, n), za(n, t, r), Cu(n, t, r, l), (r = !0);
  } else if (e === null) {
    var o = n.stateNode,
      i = n.memoizedProps;
    o.props = i;
    var s = o.context,
      c = t.contextType;
    typeof c === "object" && c !== null
      ? (c = Ce(c))
      : ((c = de(t) ? _n : le.current), (c = qn(n, c)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v === "function" ||
        typeof o.getSnapshotBeforeUpdate === "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps !== "function" &&
        typeof o.componentWillReceiveProps !== "function") ||
      ((i !== r || s !== c) && Ci(n, o, r, c)),
      (Je = !1);
    var p = n.memoizedState;
    (o.state = p),
      Qr(n, r, o, l),
      (s = n.memoizedState),
      i !== r || p !== s || fe.current || Je
        ? (typeof v === "function" && (xu(n, t, v, r), (s = n.memoizedState)),
          (i = Je || xi(n, t, i, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount !== "function" &&
                  typeof o.componentWillMount !== "function") ||
                (typeof o.componentWillMount === "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount === "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount === "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount === "function" &&
                (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = i))
        : (typeof o.componentDidMount === "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      ia(e, n),
      (i = n.memoizedProps),
      (c = n.type === n.elementType ? i : ze(n.type, i)),
      (o.props = c),
      (m = n.pendingProps),
      (p = o.context),
      (s = t.contextType),
      typeof s === "object" && s !== null
        ? (s = Ce(s))
        : ((s = de(t) ? _n : le.current), (s = qn(n, s)));
    var g = t.getDerivedStateFromProps;
    (v =
      typeof g === "function" ||
      typeof o.getSnapshotBeforeUpdate === "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps !== "function" &&
        typeof o.componentWillReceiveProps !== "function") ||
      ((i !== m || p !== s) && Ci(n, o, r, s)),
      (Je = !1),
      (p = n.memoizedState),
      (o.state = p),
      Qr(n, r, o, l);
    var w = n.memoizedState;
    i !== m || p !== w || fe.current || Je
      ? (typeof g === "function" && (xu(n, t, g, r), (w = n.memoizedState)),
        (c = Je || xi(n, t, c, r, p, w, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate !== "function" &&
                typeof o.componentWillUpdate !== "function") ||
              (typeof o.componentWillUpdate === "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate === "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate === "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate === "function" &&
              (n.flags |= 1024))
          : (typeof o.componentDidUpdate !== "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate !== "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate !== "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate !== "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return Pu(e, n, t, r, u, l);
}
function Pu(e, n, t, r, l, u) {
  ja(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) {
    return l && vi(n, t, !1), Ye(e, n, u);
  }
  (r = n.stateNode), (sd.current = n);
  var i =
    o && typeof t.getDerivedStateFromError !== "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = et(n, e.child, null, u)), (n.child = et(n, null, i, u)))
      : ue(e, n, i, u),
    (n.memoizedState = r.state),
    l && vi(n, t, !0),
    n.child
  );
}
function Ma(e) {
  var n = e.stateNode;
  n.pendingContext
    ? mi(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && mi(e, n.context, !1),
    mo(e, n.containerInfo);
}
function Ri(e, n, t, r, l) {
  return bn(), io(l), (n.flags |= 256), ue(e, n, t, r), n.child;
}
var zu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Da(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    u = !1,
    o = (n.flags & 128) !== 0,
    i;
  if (
    ((i = o) ||
      (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i
      ? ((u = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  ) {
    return (
      ku(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          u
            ? ((r = n.mode),
              (u = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = o))
                : (u = dl(o, r, 0, null)),
              (e = Cn(e, r, t, null)),
              (u.return = n),
              (e.return = n),
              (u.sibling = e),
              (n.child = u),
              (n.child.memoizedState = Lu(t)),
              (n.memoizedState = zu),
              e)
            : Eo(n, o))
    );
  }
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null))) {
    return ad(e, n, o, r, i, l, t);
  }
  if (u) {
    (u = r.fallback), (o = n.mode), (l = e.child), (i = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (u = cn(i, u)) : ((u = Cn(u, o, t, null)), (u.flags |= 2)),
      (u.return = n),
      (r.return = n),
      (r.sibling = u),
      (n.child = r),
      (r = u),
      (u = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Lu(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (u.memoizedState = o),
      (u.childLanes = e.childLanes & ~t),
      (n.memoizedState = zu),
      r
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (r = cn(u, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Eo(e, n) {
  return (
    (n = dl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function mr(e, n, t, r) {
  return (
    r !== null && io(r),
    et(n, e.child, null, t),
    (e = Eo(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function ad(e, n, t, r, l, u, o) {
  if (t) {
    return n.flags & 256
      ? ((n.flags &= -257), (r = Bl(Error(y(422)))), mr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((u = r.fallback),
        (l = n.mode),
        (r = dl({ mode: "visible", children: r.children }, l, 0, null)),
        (u = Cn(u, l, o, null)),
        (u.flags |= 2),
        (r.return = n),
        (u.return = n),
        (r.sibling = u),
        (n.child = r),
        n.mode & 1 && et(n, e.child, null, o),
        (n.child.memoizedState = Lu(o)),
        (n.memoizedState = zu),
        u);
  }
  if (!(n.mode & 1)) {
    return mr(e, n, o, null);
  }
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) {
      var i = r.dgst;
    }
    return (r = i), (u = Error(y(419))), (r = Bl(u, r, void 0)), mr(e, n, o, r);
  }
  if (((i = (o & e.childLanes) !== 0), ce || i)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== u.retryLane &&
          ((u.retryLane = l), Ke(e, l), Oe(r, e, l, -1));
    }
    return zo(), (r = Bl(Error(y(421)))), mr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Ed.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = u.treeContext),
      (ve = un(l.nextSibling)),
      (he = n),
      (U = !0),
      (Te = null),
      e !== null &&
        ((Se[ke++] = Ae),
        (Se[ke++] = Be),
        (Se[ke++] = Nn),
        (Ae = e.id),
        (Be = e.overflow),
        (Nn = n)),
      (n = Eo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Oi(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Eu(e.return, n, t);
}
function Hl(e, n, t, r, l) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((u.isBackwards = n),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = t),
      (u.tailMode = l));
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    u = r.tail;
  if ((ue(e, n, r.children, t), (r = $.current), r & 2)) {
    (r = (r & 1) | 2), (n.flags |= 128);
  } else {
    if (e !== null && e.flags & 128) {
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) {
          e.memoizedState !== null && Oi(e, t, n);
        } else if (e.tag === 19) {
          Oi(e, t, n);
        } else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) {
          break e;
        }
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) {
            break e;
          }
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    r &= 1;
  }
  if ((M($, r), !(n.mode & 1))) {
    n.memoizedState = null;
  } else {
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) {
          (e = t.alternate),
            e !== null && Kr(e) === null && (l = t),
            (t = t.sibling);
        }
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Hl(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Hl(n, !0, t, null, u);
        break;
      case "together":
        Hl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (zn |= n.lanes),
    !(t & n.childLanes))
  ) {
    return null;
  }
  if (e !== null && n.child !== e.child) {
    throw Error(y(153));
  }
  if (n.child !== null) {
    for (
      e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    ) {
      (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    }
    t.sibling = null;
  }
  return n.child;
}
function cd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ma(n), bn();
      break;
    case 5:
      sa(n);
      break;
    case 1:
      de(n.type) && Vr(n);
      break;
    case 4:
      mo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      M(Hr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null)) {
        return r.dehydrated !== null
          ? (M($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Da(e, n, t)
          : (M($, $.current & 1),
            (e = Ye(e, n, t)),
            e !== null ? e.sibling : null);
      }
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) {
          return Ia(e, n, t);
        }
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      ) {
        break;
      }
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Oa(e, n, t);
  }
  return Ye(e, n, t);
}
var Fa, Tu, Ua, $a;
Fa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) {
      e.appendChild(t.stateNode);
    } else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) {
      break;
    }
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) {
        return;
      }
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Tu = function () {};
Ua = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), En(Ue.current);
    var u = null;
    switch (t) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (u = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (u = []);
        break;
      case "textarea":
        (l = nu(e, l)), (r = nu(e, r)), (u = []);
        break;
      default:
        typeof l.onClick !== "function" &&
          typeof r.onClick === "function" &&
          (e.onclick = Ur);
    }
    ru(t, r);
    var o;
    t = null;
    for (c in l) {
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) {
        if (c === "style") {
          var i = l[c];
          for (o in i) {
            i.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
          }
        } else {
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Rt.hasOwnProperty(c)
              ? u || (u = [])
              : (u = u || []).push(c, null));
        }
      }
    }
    for (c in r) {
      var s = r[c];
      if (
        ((i = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== i && (s != null || i != null))
      ) {
        if (c === "style") {
          if (i) {
            for (o in i) {
              !i.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            }
            for (o in s) {
              s.hasOwnProperty(o) &&
                i[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
            }
          } else {
            t || (u || (u = []), u.push(c, t)), (t = s);
          }
        } else {
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (u = u || []).push(c, s))
            : c === "children"
            ? (typeof s !== "string" && typeof s !== "number") ||
              (u = u || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Rt.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && D("scroll", e),
                  u || i === s || (u = []))
                : (u = u || []).push(c, s));
        }
      }
    }
    t && (u = u || []).push("style", t);
    var c = u;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
$a = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vt(e, n) {
  if (!U) {
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) {
          n.alternate !== null && (t = n), (n = n.sibling);
        }
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) {
          t.alternate !== null && (r = t), (t = t.sibling);
        }
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
  }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n) {
    for (var l = e.child; l !== null; ) {
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
    }
  } else {
    for (l = e.child; l !== null; ) {
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
    }
  }
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function fd(e, n, t) {
  var r = n.pendingProps;
  switch ((oo(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && $r(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        I(fe),
        I(le),
        ho(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Te !== null && (Uu(Te), (Te = null)))),
        Tu(e, n),
        te(n),
        null
      );
    case 5:
      vo(n);
      var l = En(Ht.current);
      if (((t = n.type), e !== null && n.stateNode != null)) {
        Ua(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      } else {
        if (!r) {
          if (n.stateNode === null) {
            throw Error(y(166));
          }
          return te(n), null;
        }
        if (((e = En(Ue.current)), dr(n))) {
          (r = n.stateNode), (t = n.type);
          var u = n.memoizedProps;
          switch (((r[Ie] = n), (r[At] = u), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < St.length; l++) {
                D(St[l], r);
              }
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Ao(r, u), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!u.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Ho(r, u), D("invalid", r);
          }
          ru(t, u), (l = null);
          for (var o in u) {
            if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children"
                ? typeof i === "string"
                  ? r.textContent !== i &&
                    (u.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i === "number" &&
                    r.textContent !== "" + i &&
                    (u.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : Rt.hasOwnProperty(o) &&
                  i != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          }
          switch (t) {
            case "input":
              rr(r), Bo(r, u, !0);
              break;
            case "textarea":
              rr(r), Wo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick === "function" && (r.onclick = Ur);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is === "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ie] = n),
            (e[At] = r),
            Fa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = lu(t, r)), t)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < St.length; l++) {
                  D(St[l], e);
                }
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Ao(e, r), (l = ql(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Ho(e, r), (l = nu(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ru(t, l), (i = l);
            for (u in i) {
              if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style"
                  ? hs(e, s)
                  : u === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : u === "children"
                  ? typeof s === "string"
                    ? (t !== "textarea" || s !== "") && Ot(e, s)
                    : typeof s === "number" && Ot(e, "" + s)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (Rt.hasOwnProperty(u)
                      ? s != null && u === "onScroll" && D("scroll", e)
                      : s != null && Qu(e, u, s, o));
              }
            }
            switch (t) {
              case "input":
                rr(e), Bo(e, r, !1);
                break;
              case "textarea":
                rr(e), Wo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (u = r.value),
                  u != null
                    ? Qn(e, !!r.multiple, u, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick === "function" && (e.onclick = Ur);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) {
        $a(e, n, e.memoizedProps, r);
      } else {
        if (typeof r !== "string" && n.stateNode === null) {
          throw Error(y(166));
        }
        if (((t = En(Ht.current)), En(Ue.current), dr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ie] = n),
            (u = r.nodeValue !== t) && ((e = he), e !== null))
          ) {
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          }
          u && (n.flags |= 4);
        } else {
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ie] = n),
            (n.stateNode = r);
        }
      }
      return te(n), null;
    case 13:
      if (
        (I($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && n.mode & 1 && !(n.flags & 128)) {
          ra(), bn(), (n.flags |= 98560), (u = !1);
        } else if (((u = dr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!u) {
              throw Error(y(318));
            }
            if (
              ((u = n.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            ) {
              throw Error(y(317));
            }
            u[Ie] = n;
          } else {
            bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          }
          te(n), (u = !1);
        } else {
          Te !== null && (Uu(Te), (Te = null)), (u = !0);
        }
        if (!u) {
          return n.flags & 65536 ? n : null;
        }
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : zo())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        nt(), Tu(e, n), e === null && $t(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return co(n.type._context), te(n), null;
    case 17:
      return de(n.type) && $r(), te(n), null;
    case 19:
      if ((I($), (u = n.memoizedState), u === null)) {
        return te(n), null;
      }
      if (((r = (n.flags & 128) !== 0), (o = u.rendering), o === null)) {
        if (r) {
          vt(u, !1);
        } else {
          if (X !== 0 || (e !== null && e.flags & 128)) {
            for (e = n.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    vt(u, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                ) {
                  (u = t),
                    (e = r),
                    (u.flags &= 14680066),
                    (o = u.alternate),
                    o === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = o.childLanes),
                        (u.lanes = o.lanes),
                        (u.child = o.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = o.memoizedProps),
                        (u.memoizedState = o.memoizedState),
                        (u.updateQueue = o.updateQueue),
                        (u.type = o.type),
                        (e = o.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                }
                return M($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          }
          u.tail !== null &&
            Q() > rt &&
            ((n.flags |= 128), (r = !0), vt(u, !1), (n.lanes = 4194304));
        }
      } else {
        if (!r) {
          if (((e = Kr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              vt(u, !0),
              u.tail === null && u.tailMode === "hidden" && !o.alternate && !U)
            ) {
              return te(n), null;
            }
          } else {
            2 * Q() - u.renderingStartTime > rt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), vt(u, !1), (n.lanes = 4194304));
          }
        }
        u.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = u.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (u.last = o));
      }
      return u.tail !== null
        ? ((n = u.tail),
          (u.rendering = n),
          (u.tail = n.sibling),
          (u.renderingStartTime = Q()),
          (n.sibling = null),
          (t = $.current),
          M($, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        Po(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function dd(e, n) {
  switch ((oo(n), n.tag)) {
    case 1:
      return (
        de(n.type) && $r(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        nt(),
        I(fe),
        I(le),
        ho(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return vo(n), null;
    case 13:
      if ((I($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) {
          throw Error(y(340));
        }
        bn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return I($), null;
    case 4:
      return nt(), null;
    case 10:
      return co(n.type._context), null;
    case 22:
    case 23:
      return Po(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  re = !1,
  pd = typeof WeakSet === "function" ? WeakSet : Set,
  k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null) {
    if (typeof t === "function") {
      try {
        t(null);
      } catch (r) {
        B(e, n, r);
      }
    } else {
      t.current = null;
    }
  }
}
function Ru(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var ji = !1;
function md(e, n) {
  if (((mu = Dr), (e = Ws()), lo(e))) {
    if ("selectionStart" in e) {
      var t = { start: e.selectionStart, end: e.selectionEnd };
    } else {
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            i = -1,
            s = -1,
            c = 0,
            v = 0,
            m = e,
            p = null;
          n: for (;;) {
            for (
              var g;
              m !== t || (l !== 0 && m.nodeType !== 3) || (i = o + l),
                m !== u || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (g = m.firstChild) !== null;

            ) {
              (p = m), (m = g);
            }
            for (;;) {
              if (m === e) {
                break n;
              }
              if (
                (p === t && ++c === l && (i = o),
                p === u && ++v === r && (s = o),
                (g = m.nextSibling) !== null)
              ) {
                break;
              }
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else {
          t = null;
        }
      }
    }
    t = t || { start: 0, end: 0 };
  } else {
    t = null;
  }
  for (
    vu = { focusedElem: e, selectionRange: t }, Dr = !1, k = n;
    k !== null;

  ) {
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)) {
      (e.return = n), (k = e);
    } else {
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024) {
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    F = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : ze(n.type, S),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
          }
        } catch (h) {
          B(n, n.return, h);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
    }
  }
  return (w = ji), (ji = !1), w;
}
function Pt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        (l.destroy = void 0), u !== void 0 && Ru(n, t, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ou(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n === "function" ? n(e) : (n.current = e);
  }
}
function Va(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Va(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ie], delete n[At], delete n[gu], delete n[Zf], delete n[Jf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Aa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Aa(e.return)) {
        return null;
      }
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) {
        continue e;
      }
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) {
      return e.stateNode;
    }
  }
}
function ju(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) {
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ur));
  } else if (r !== 4 && ((e = e.child), e !== null)) {
    for (ju(e, n, t), e = e.sibling; e !== null; ) {
      ju(e, n, t), (e = e.sibling);
    }
  }
}
function Mu(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) {
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  } else if (r !== 4 && ((e = e.child), e !== null)) {
    for (Mu(e, n, t), e = e.sibling; e !== null; ) {
      Mu(e, n, t), (e = e.sibling);
    }
  }
}
var q = null,
  Le = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) {
    Ba(e, n, t), (t = t.sibling);
  }
}
function Ba(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount === "function") {
    try {
      Fe.onCommitFiberUnmount(tl, t);
    } catch {}
  }
  switch (t.tag) {
    case 5:
      re || Hn(t, n);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ge(e, n, t),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Il(e.parentNode, t)
              : e.nodeType === 1 && Il(e, t),
            It(e))
          : Il(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = t.stateNode.containerInfo),
        (Le = !0),
        Ge(e, n, t),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var u = l,
            o = u.destroy;
          (u = u.tag),
            o !== void 0 && (u & 2 || u & 4) && Ru(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Hn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount === "function")
      ) {
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          B(t, n, i);
        }
      }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r))
        : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Di(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new pd()),
      n.forEach(function (r) {
        var l = xd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Pe(e, n) {
  var t = n.deletions;
  if (t !== null) {
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e,
          o = n,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (q = i.stateNode), (Le = !1);
              break e;
            case 3:
              (q = i.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = i.stateNode.containerInfo), (Le = !0);
              break e;
          }
          i = i.return;
        }
        if (q === null) {
          throw Error(y(160));
        }
        Ba(u, o, l), (q = null), (Le = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, n, c);
      }
    }
  }
  if (n.subtreeFlags & 12854) {
    for (n = n.child; n !== null; ) {
      Ha(n, e), (n = n.sibling);
    }
  }
}
function Ha(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(n, e), Me(e), r & 4)) {
        try {
          Pt(3, e, e.return), cl(3, e);
        } catch (S) {
          B(e, e.return, S);
        }
        try {
          Pt(5, e, e.return);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 1:
      Pe(n, e), Me(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (
        (Pe(n, e),
        Me(e),
        r & 512 && t !== null && Hn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ot(l, "");
        } catch (S) {
          B(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var u = e.memoizedProps,
          o = t !== null ? t.memoizedProps : u,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null)) {
          try {
            i === "input" && u.type === "radio" && u.name != null && fs(l, u),
              lu(i, o);
            var c = lu(i, u);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                m = s[o + 1];
              v === "style"
                ? hs(l, m)
                : v === "dangerouslySetInnerHTML"
                ? ms(l, m)
                : v === "children"
                ? Ot(l, m)
                : Qu(l, v, m, c);
            }
            switch (i) {
              case "input":
                bl(l, u);
                break;
              case "textarea":
                ds(l, u);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var g = u.value;
                g != null
                  ? Qn(l, !!u.multiple, g, !1)
                  : p !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Qn(l, !!u.multiple, u.defaultValue, !0)
                      : Qn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[At] = u;
          } catch (S) {
            B(e, e.return, S);
          }
        }
      }
      break;
    case 6:
      if ((Pe(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) {
          throw Error(y(162));
        }
        (l = e.stateNode), (u = e.memoizedProps);
        try {
          l.nodeValue = u;
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Pe(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      ) {
        try {
          It(n.containerInfo);
        } catch (S) {
          B(e, e.return, S);
        }
      }
      break;
    case 4:
      Pe(n, e), Me(e);
      break;
    case 13:
      Pe(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((u = l.memoizedState !== null),
          (l.stateNode.isHidden = u),
          !u ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_o = Q())),
        r & 4 && Di(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || v), Pe(n, e), (re = c)) : Pe(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !v && e.mode & 1)
        ) {
          for (k = e, v = e.child; v !== null; ) {
            for (m = k = v; k !== null; ) {
              switch (((p = k), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount === "function") {
                    (r = p), (t = p.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      B(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fi(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (k = g)) : Fi(m);
            }
            v = v.sibling;
          }
        }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((u = l.style),
                      typeof u.setProperty === "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((i = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (i.style.display = vs("display", o)));
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (v === null) {
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                B(e, e.return, S);
              }
            }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) {
            break e;
          }
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) {
              break e;
            }
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(n, e), Me(e), r & 4 && Di(e);
      break;
    case 21:
      break;
    default:
      Pe(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Aa(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ot(l, ""), (r.flags &= -33));
          var u = Mi(e);
          Mu(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            i = Mi(e);
          ju(e, i, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vd(e, n, t) {
  (k = e), Wa(e);
}
function Wa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || vr;
      if (!o) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || re;
        i = vr;
        var c = re;
        if (((vr = o), (re = s) && !c)) {
          for (k = l; k !== null; ) {
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ui(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Ui(l);
          }
        }
        for (; u !== null; ) {
          (k = u), Wa(u), (u = u.sibling);
        }
        (k = l), (vr = i), (re = c);
      }
      Ii(e);
    } else {
      l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (k = u)) : Ii(e);
    }
  }
}
function Ii(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re) {
                if (t === null) {
                  r.componentDidMount();
                } else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              }
              var u = n.updateQueue;
              u !== null && Si(n, u, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null)) {
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                }
                Si(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var v = c.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && It(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        }
        re || (n.flags & 512 && Ou(n));
      } catch (p) {
        B(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Fi(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Ui(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            cl(4, n);
          } catch (s) {
            B(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount === "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(n, l, s);
            }
          }
          var u = n.return;
          try {
            Ou(n);
          } catch (s) {
            B(n, u, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Ou(n);
          } catch (s) {
            B(n, o, s);
          }
      }
    } catch (s) {
      B(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      (i.return = n.return), (k = i);
      break;
    }
    k = n.return;
  }
}
var hd = Math.ceil,
  Gr = Xe.ReactCurrentDispatcher,
  xo = Xe.ReactCurrentOwner,
  xe = Xe.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Wn = mn(0),
  X = 0,
  Yt = null,
  zn = 0,
  fl = 0,
  Co = 0,
  zt = null,
  ae = null,
  _o = 0,
  rt = 1 / 0,
  $e = null,
  Zr = !1,
  Du = null,
  sn = null,
  hr = !1,
  nn = null,
  Jr = 0,
  Lt = 0,
  Iu = null,
  Pr = -1,
  zr = 0;
function oe() {
  return R & 6 ? Q() : Pr !== -1 ? Pr : (Pr = Q());
}
function an(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : bf.transition !== null
      ? (zr === 0 && (zr = zs()), zr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
        e)
    : 1;
}
function Oe(e, n, t, r) {
  if (50 < Lt) {
    throw ((Lt = 0), (Iu = null), Error(y(185)));
  }
  Gt(e, t, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (fl |= t), X === 4 && be(e, b)),
      pe(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((rt = Q() + 500), il && vn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  qc(e, n);
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) {
    t !== null && Yo(t), (e.callbackNode = null), (e.callbackPriority = 0);
  } else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Yo(t), n === 1)) {
      e.tag === 0 ? qf($i.bind(null, e)) : ea($i.bind(null, e)),
        Xf(function () {
          !(R & 6) && vn();
        }),
        (t = null);
    } else {
      switch (Ls(r)) {
        case 1:
          t = Zu;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = Ps;
          break;
        default:
          t = jr;
      }
      t = qa(t, Qa.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Qa(e, n) {
  if (((Pr = -1), (zr = 0), R & 6)) {
    throw Error(y(327));
  }
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) {
    return null;
  }
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) {
    return null;
  }
  if (r & 30 || r & e.expiredLanes || n) {
    n = qr(e, r);
  } else {
    n = r;
    var l = R;
    R |= 2;
    var u = Ya();
    (J !== e || b !== n) && (($e = null), (rt = Q() + 500), xn(e, n));
    do {
      try {
        wd();
        break;
      } catch (i) {
        Ka(e, i);
      }
    } while (!0);
    ao(),
      (Gr.current = u),
      (R = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = au(e)), l !== 0 && ((r = l), (n = Fu(e, l)))), n === 1)
    ) {
      throw ((t = Yt), xn(e, 0), be(e, r), pe(e, Q()), t);
    }
    if (n === 6) {
      be(e, r);
    } else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((n = qr(e, r)),
          n === 2 && ((u = au(e)), u !== 0 && ((r = u), (n = Fu(e, u)))),
          n === 1))
      ) {
        throw ((t = Yt), xn(e, 0), be(e, r), pe(e, Q()), t);
      }
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((n = _o + 500 - Q()), 10 < n))
          ) {
            if (Mr(e, 0) !== 0) {
              break;
            }
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yu(wn.bind(null, e, ae, $e), n);
            break;
          }
          wn(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) {
            break;
          }
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            (u = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~u);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yu(wn.bind(null, e, ae, $e), r);
            break;
          }
          wn(e, ae, $e);
          break;
        case 5:
          wn(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Qa.bind(null, e) : null;
}
function Fu(e, n) {
  var t = zt;
  return (
    e.current.memoizedState.isDehydrated && (xn(e, n).flags |= 256),
    (e = qr(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Uu(n)),
    e
  );
}
function Uu(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function yd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null)) {
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!je(u(), l)) {
              return !1;
            }
          } catch {
            return !1;
          }
        }
      }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null)) {
      (t.return = n), (n = t);
    } else {
      if (n === e) {
        break;
      }
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) {
          return !0;
        }
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (
    n &= ~Co,
      n &= ~fl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Re(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function $i(e) {
  if (R & 6) {
    throw Error(y(327));
  }
  Zn();
  var n = Mr(e, 0);
  if (!(n & 1)) {
    return pe(e, Q()), null;
  }
  var t = qr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = au(e);
    r !== 0 && ((n = r), (t = Fu(e, r)));
  }
  if (t === 1) {
    throw ((t = Yt), xn(e, 0), be(e, n), pe(e, Q()), t);
  }
  if (t === 6) {
    throw Error(y(345));
  }
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    wn(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function No(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((rt = Q() + 500), il && vn());
  }
}
function Ln(e) {
  nn !== null && nn.tag === 0 && !(R & 6) && Zn();
  var n = R;
  R |= 1;
  var t = xe.transition,
    r = O;
  try {
    if (((xe.transition = null), (O = 1), e)) {
      return e();
    }
  } finally {
    (O = r), (xe.transition = t), (R = n), !(R & 6) && vn();
  }
}
function Po() {
  (me = Wn.current), I(Wn);
}
function xn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Yf(t)), K !== null)) {
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((oo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          nt(), I(fe), I(le), ho();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          co(r.type._context);
          break;
        case 22:
        case 23:
          Po();
      }
      t = t.return;
    }
  }
  if (
    ((J = e),
    (K = e = cn(e.current, null)),
    (b = me = n),
    (X = 0),
    (Yt = null),
    (Co = fl = zn = 0),
    (ae = zt = null),
    kn !== null)
  ) {
    for (n = 0; n < kn.length; n++) {
      if (((t = kn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          u = t.pending;
        if (u !== null) {
          var o = u.next;
          (u.next = l), (r.next = o);
        }
        t.pending = r;
      }
    }
    kn = null;
  }
  return e;
}
function Ka(e, n) {
  do {
    var t = K;
    try {
      if ((ao(), (Cr.current = Xr), Yr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((Pn = 0),
        (Z = Y = V = null),
        (Nt = !1),
        (Wt = 0),
        (xo.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Yt = n), (K = null);
        break;
      }
      e: {
        var u = e,
          o = t.return,
          i = t,
          s = n;
        if (
          ((n = b),
          (i.flags |= 32768),
          s !== null && typeof s === "object" && typeof s.then === "function")
        ) {
          var c = s,
            v = i,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var g = Ni(o);
          if (g !== null) {
            (g.flags &= -257),
              Pi(g, o, i, u, n),
              g.mode & 1 && _i(u, c, n),
              (n = g),
              (s = c);
            var w = n.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (n.updateQueue = S);
            } else {
              w.add(s);
            }
            break e;
          } else {
            if (!(n & 1)) {
              _i(u, c, n), zo();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && i.mode & 1) {
          var F = Ni(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Pi(F, o, i, u, n),
              io(tt(s, i));
            break e;
          }
        }
        (u = s = tt(s, i)),
          X !== 4 && (X = 2),
          zt === null ? (zt = [u]) : zt.push(u),
          (u = o);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (n &= -n), (u.lanes |= n);
              var f = La(u, s, n);
              wi(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type,
                d = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof a.getDerivedStateFromError === "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch === "function" &&
                    (sn === null || !sn.has(d))))
              ) {
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var h = Ta(u, i, n);
                wi(u, h);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Ga(t);
    } catch (E) {
      (n = E), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ya() {
  var e = Gr.current;
  return (Gr.current = Xr), e === null ? Xr : e;
}
function zo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(zn & 268435455) && !(fl & 268435455)) || be(J, b);
}
function qr(e, n) {
  var t = R;
  R |= 2;
  var r = Ya();
  (J !== e || b !== n) && (($e = null), xn(e, n));
  do {
    try {
      gd();
      break;
    } catch (l) {
      Ka(e, l);
    }
  } while (!0);
  if ((ao(), (R = t), (Gr.current = r), K !== null)) {
    throw Error(y(261));
  }
  return (J = null), (b = 0), X;
}
function gd() {
  for (; K !== null; ) {
    Xa(K);
  }
}
function wd() {
  for (; K !== null && !Hc(); ) {
    Xa(K);
  }
}
function Xa(e) {
  var n = Ja(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    n === null ? Ga(e) : (K = n),
    (xo.current = null);
}
function Ga(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = dd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null) {
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      } else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = fd(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function wn(e, n, t) {
  var r = O,
    l = xe.transition;
  try {
    (xe.transition = null), (O = 1), Sd(e, n, t, r);
  } finally {
    (xe.transition = l), (O = r);
  }
  return null;
}
function Sd(e, n, t, r) {
  do {
    Zn();
  } while (nn !== null);
  if (R & 6) {
    throw Error(y(327));
  }
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) {
    return null;
  }
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) {
    throw Error(y(177));
  }
  (e.callbackNode = null), (e.callbackPriority = 0);
  var u = t.lanes | t.childLanes;
  if (
    (bc(e, u),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      hr ||
      ((hr = !0),
      qa(jr, function () {
        return Zn(), null;
      })),
    (u = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || u)
  ) {
    (u = xe.transition), (xe.transition = null);
    var o = O;
    O = 1;
    var i = R;
    (R |= 4),
      (xo.current = null),
      md(e, t),
      Ha(t, e),
      Vf(vu),
      (Dr = !!mu),
      (vu = mu = null),
      (e.current = t),
      vd(t),
      Wc(),
      (R = i),
      (O = o),
      (xe.transition = u);
  } else {
    e.current = t;
  }
  if (
    (hr && ((hr = !1), (nn = e), (Jr = l)),
    (u = e.pendingLanes),
    u === 0 && (sn = null),
    Yc(t.stateNode),
    pe(e, Q()),
    n !== null)
  ) {
    for (r = e.onRecoverableError, t = 0; t < n.length; t++) {
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    }
  }
  if (Zr) {
    throw ((Zr = !1), (e = Du), (Du = null), e);
  }
  return (
    Jr & 1 && e.tag !== 0 && Zn(),
    (u = e.pendingLanes),
    u & 1 ? (e === Iu ? Lt++ : ((Lt = 0), (Iu = e))) : (Lt = 0),
    vn(),
    null
  );
}
function Zn() {
  if (nn !== null) {
    var e = Ls(Jr),
      n = xe.transition,
      t = O;
    try {
      if (((xe.transition = null), (O = 16 > e ? 16 : e), nn === null)) {
        var r = !1;
      } else {
        if (((e = nn), (nn = null), (Jr = 0), R & 6)) {
          throw Error(y(331));
        }
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var u = k,
            o = u.child;
          if (k.flags & 16) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (k = c; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pt(8, v, u);
                  }
                  var m = v.child;
                  if (m !== null) {
                    (m.return = v), (k = m);
                  } else {
                    for (; k !== null; ) {
                      v = k;
                      var p = v.sibling,
                        g = v.return;
                      if ((Va(v), v === c)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (k = p);
                        break;
                      }
                      k = g;
                    }
                  }
                }
              }
              var w = u.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var F = S.sibling;
                    (S.sibling = null), (S = F);
                  } while (S !== null);
                }
              }
              k = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) {
            (o.return = u), (k = o);
          } else {
            e: for (; k !== null; ) {
              if (((u = k), u.flags & 2048)) {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pt(9, u, u.return);
                }
              }
              var f = u.sibling;
              if (f !== null) {
                (f.return = u.return), (k = f);
                break e;
              }
              k = u.return;
            }
          }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) {
            (d.return = o), (k = d);
          } else {
            e: for (o = a; k !== null; ) {
              if (((i = k), i.flags & 2048)) {
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, i);
                  }
                } catch (E) {
                  B(i, i.return, E);
                }
              }
              if (i === o) {
                k = null;
                break e;
              }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (k = h);
                break e;
              }
              k = i.return;
            }
          }
        }
        if (
          ((R = l), vn(), Fe && typeof Fe.onPostCommitFiberRoot === "function")
        ) {
          try {
            Fe.onPostCommitFiberRoot(tl, e);
          } catch {}
        }
        r = !0;
      }
      return r;
    } finally {
      (O = t), (xe.transition = n);
    }
  }
  return !1;
}
function Vi(e, n, t) {
  (n = tt(t, n)),
    (n = La(e, n, 1)),
    (e = on(e, n, 1)),
    (n = oe()),
    e !== null && (Gt(e, 1, n), pe(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) {
    Vi(e, e, t);
  } else {
    for (; n !== null; ) {
      if (n.tag === 3) {
        Vi(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError === "function" ||
          (typeof r.componentDidCatch === "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = tt(t, e)),
            (e = Ta(n, e, 1)),
            (n = on(n, e, 1)),
            (e = oe()),
            n !== null && (Gt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
}
function kd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - _o)
        ? xn(e, 0)
        : (Co |= t)),
    pe(e, n);
}
function Za(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ke(e, n)), e !== null && (Gt(e, n, t), pe(e, t));
}
function Ed(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Za(e, t);
}
function xd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Za(e, t);
}
var Ja;
Ja = function (e, n, t) {
  if (e !== null) {
    if (e.memoizedProps !== n.pendingProps || fe.current) {
      ce = !0;
    } else {
      if (!(e.lanes & t) && !(n.flags & 128)) {
        return (ce = !1), cd(e, n, t);
      }
      ce = !!(e.flags & 131072);
    }
  } else {
    (ce = !1), U && n.flags & 1048576 && na(n, Br, n.index);
  }
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Nr(e, n), (e = n.pendingProps);
      var l = qn(n, le.current);
      Gn(n, t), (l = go(null, n, r, e, l, t));
      var u = wo();
      return (
        (n.flags |= 1),
        typeof l === "object" &&
        l !== null &&
        typeof l.render === "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((u = !0), Vr(n)) : (u = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            po(n),
            (l.updater = al),
            (n.stateNode = l),
            (l._reactInternals = n),
            Cu(n, r, e, t),
            (n = Pu(null, n, r, !0, u, t)))
          : ((n.tag = 0), U && u && uo(n), ue(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Nr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = _d(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            n = Nu(null, n, r, e, t);
            break e;
          case 1:
            n = Ti(null, n, r, e, t);
            break e;
          case 11:
            n = zi(null, n, r, e, t);
            break e;
          case 14:
            n = Li(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Nu(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Ti(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Ma(n), e === null)) {
          throw Error(y(387));
        }
        (r = n.pendingProps),
          (u = n.memoizedState),
          (l = u.element),
          ia(e, n),
          Qr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), u.isDehydrated)) {
          if (
            ((u = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = u),
            (n.memoizedState = u),
            n.flags & 256)
          ) {
            (l = tt(Error(y(423)), n)), (n = Ri(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(y(424)), n)), (n = Ri(e, n, r, t, l));
            break e;
          } else {
            for (
              ve = un(n.stateNode.containerInfo.firstChild),
                he = n,
                U = !0,
                Te = null,
                t = ua(n, null, r, t),
                n.child = t;
              t;

            ) {
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
            }
          }
        } else {
          if ((bn(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          ue(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        sa(n),
        e === null && ku(n),
        (r = n.type),
        (l = n.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (o = l.children),
        hu(r, l) ? (o = null) : u !== null && hu(r, u) && (n.flags |= 32),
        ja(e, n),
        ue(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && ku(n), null;
    case 13:
      return Da(e, n, t);
    case 4:
      return (
        mo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = et(n, null, r, t)) : ue(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        zi(e, n, r, l, t)
      );
    case 7:
      return ue(e, n, n.pendingProps, t), n.child;
    case 8:
      return ue(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ue(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (u = n.memoizedProps),
          (o = l.value),
          M(Hr, r._currentValue),
          (r._currentValue = o),
          u !== null)
        ) {
          if (je(u.value, o)) {
            if (u.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else {
            for (u = n.child, u !== null && (u.return = n); u !== null; ) {
              var i = u.dependencies;
              if (i !== null) {
                o = u.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (u.tag === 1) {
                      (s = He(-1, t & -t)), (s.tag = 2);
                      var c = u.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var v = c.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (c.pending = s);
                      }
                    }
                    (u.lanes |= t),
                      (s = u.alternate),
                      s !== null && (s.lanes |= t),
                      Eu(u.return, t, n),
                      (i.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (u.tag === 10) {
                o = u.type === n.type ? null : u.child;
              } else if (u.tag === 18) {
                if (((o = u.return), o === null)) {
                  throw Error(y(341));
                }
                (o.lanes |= t),
                  (i = o.alternate),
                  i !== null && (i.lanes |= t),
                  Eu(o, t, n),
                  (o = u.sibling);
              } else {
                o = u.child;
              }
              if (o !== null) {
                o.return = u;
              } else {
                for (o = u; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((u = o.sibling), u !== null)) {
                    (u.return = o.return), (o = u);
                    break;
                  }
                  o = o.return;
                }
              }
              u = o;
            }
          }
        }
        ue(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Gn(n, t),
        (l = Ce(l)),
        (r = r(l)),
        (n.flags |= 1),
        ue(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = ze(r, n.pendingProps)),
        (l = ze(r.type, l)),
        Li(e, n, r, l, t)
      );
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ze(r, l)),
        Nr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), Vr(n)) : (e = !1),
        Gn(n, t),
        za(n, r, l),
        Cu(n, r, l, t),
        Pu(null, n, r, !0, e, t)
      );
    case 19:
      return Ia(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function qa(e, n) {
  return _s(e, n);
}
function Cd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, n, t, r) {
  return new Cd(e, n, t, r);
}
function Lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e === "function") {
    return Lo(e) ? 1 : 0;
  }
  if (e != null) {
    if (((e = e.$$typeof), e === Yu)) {
      return 11;
    }
    if (e === Xu) {
      return 14;
    }
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ee(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Lr(e, n, t, r, l, u) {
  var o = 2;
  if (((r = e), typeof e === "function")) {
    Lo(e) && (o = 1);
  } else if (typeof e === "string") {
    o = 5;
  } else {
    e: switch (e) {
      case Mn:
        return Cn(t.children, l, u, n);
      case Ku:
        (o = 8), (l |= 8);
        break;
      case Xl:
        return (
          (e = Ee(12, t, n, l | 2)), (e.elementType = Xl), (e.lanes = u), e
        );
      case Gl:
        return (e = Ee(13, t, n, l)), (e.elementType = Gl), (e.lanes = u), e;
      case Zl:
        return (e = Ee(19, t, n, l)), (e.elementType = Zl), (e.lanes = u), e;
      case ss:
        return dl(t, l, u, n);
      default:
        if (typeof e === "object" && e !== null) {
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case is:
              o = 9;
              break e;
            case Yu:
              o = 11;
              break e;
            case Xu:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  }
  return (
    (n = Ee(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
  );
}
function Cn(e, n, t, r) {
  return (e = Ee(7, e, r, n)), (e.lanes = t), e;
}
function dl(e, n, t, r) {
  return (
    (e = Ee(22, e, r, n)),
    (e.elementType = ss),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Wl(e, n, t) {
  return (e = Ee(6, e, null, n)), (e.lanes = t), e;
}
function Ql(e, n, t) {
  return (
    (n = Ee(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Nd(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function To(e, n, t, r, l, u, o, i, s) {
  return (
    (e = new Nd(e, n, t, i, s)),
    n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
    (u = Ee(3, null, null, n)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    po(u),
    e
  );
}
function Pd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ba(e) {
  if (!e) {
    return dn;
  }
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) {
      throw Error(y(170));
    }
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) {
      return bs(e, t, n);
    }
  }
  return n;
}
function ec(e, n, t, r, l, u, o, i, s) {
  return (
    (e = To(t, r, !0, e, l, u, o, i, s)),
    (e.context = ba(null)),
    (t = e.current),
    (r = oe()),
    (l = an(t)),
    (u = He(r, l)),
    (u.callback = n ?? null),
    on(t, u, l),
    (e.current.lanes = l),
    Gt(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, n, t, r) {
  var l = n.current,
    u = oe(),
    o = an(l);
  return (
    (t = ba(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = He(u, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = on(l, n, o)),
    e !== null && (Oe(e, l, o, u), xr(e, l, o)),
    o
  );
}
function br(e) {
  if (((e = e.current), !e.child)) {
    return null;
  }
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ai(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ro(e, n) {
  Ai(e, n), (e = e.alternate) && Ai(e, n);
}
function zd() {
  return null;
}
var nc =
  typeof reportError === "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oo(e) {
  this._internalRoot = e;
}
ml.prototype.render = Oo.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) {
    throw Error(y(409));
  }
  pl(e, n, null, null);
};
ml.prototype.unmount = Oo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Ln(function () {
      pl(null, e, null, null);
    }),
      (n[Qe] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Os();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++) {}
    qe.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function jo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bi() {}
function Ld(e, n, t, r, l) {
  if (l) {
    if (typeof r === "function") {
      var u = r;
      r = function () {
        var c = br(o);
        u.call(c);
      };
    }
    var o = ec(n, r, e, 0, null, !1, !1, "", Bi);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      $t(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      o
    );
  }
  for (; (l = e.lastChild); ) {
    e.removeChild(l);
  }
  if (typeof r === "function") {
    var i = r;
    r = function () {
      var c = br(s);
      i.call(c);
    };
  }
  var s = To(e, 0, !1, null, null, !1, !1, "", Bi);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      pl(n, s, t, r);
    }),
    s
  );
}
function hl(e, n, t, r, l) {
  var u = t._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l === "function") {
      var i = l;
      l = function () {
        var s = br(o);
        i.call(s);
      };
    }
    pl(n, o, e, l);
  } else {
    o = Ld(t, n, e, l, r);
  }
  return br(o);
}
Ts = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = wt(n.pendingLanes);
        t !== 0 &&
          (Ju(n, t | 1), pe(n, Q()), !(R & 6) && ((rt = Q() + 500), vn()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Oe(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
qu = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Oe(n, e, 134217728, t);
    }
    Ro(e, 134217728);
  }
};
Rs = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Oe(t, e, n, r);
    }
    Ro(e, n);
  }
};
Os = function () {
  return O;
};
js = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
ou = function (e, n, t) {
  switch (n) {
    case "input":
      if ((bl(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) {
          t = t.parentNode;
        }
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) {
              throw Error(y(90));
            }
            cs(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, t);
      break;
    case "select":
      (n = t.value), n != null && Qn(e, !!t.multiple, n, !1);
  }
};
ws = No;
Ss = Ln;
var Td = { usingClientEntryPoint: !1, Events: [Jt, Un, ol, ys, gs, No] },
  ht = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rd = {
    bundleType: ht.bundleType,
    version: ht.version,
    rendererPackageName: ht.rendererPackageName,
    rendererConfig: ht.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ht.findFiberByHostInstance || zd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber) {
    try {
      (tl = yr.inject(Rd)), (Fe = yr);
    } catch {}
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td;
ge.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jo(n)) {
    throw Error(y(200));
  }
  return Pd(e, n, null, t);
};
ge.createRoot = function (e, n) {
  if (!jo(e)) {
    throw Error(y(299));
  }
  var t = !1,
    r = "",
    l = nc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = To(e, 1, !1, null, null, t, !1, r, l)),
    (e[Qe] = n.current),
    $t(e.nodeType === 8 ? e.parentNode : e),
    new Oo(n)
  );
};
ge.findDOMNode = function (e) {
  if (e == null) {
    return null;
  }
  if (e.nodeType === 1) {
    return e;
  }
  var n = e._reactInternals;
  if (n === void 0) {
    throw typeof e.render === "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  }
  return (e = xs(n)), (e = e === null ? null : e.stateNode), e;
};
ge.flushSync = function (e) {
  return Ln(e);
};
ge.hydrate = function (e, n, t) {
  if (!vl(n)) {
    throw Error(y(200));
  }
  return hl(null, e, n, !0, t);
};
ge.hydrateRoot = function (e, n, t) {
  if (!jo(e)) {
    throw Error(y(405));
  }
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    u = "",
    o = nc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = ec(n, null, e, 1, t ?? null, l, !1, u, o)),
    (e[Qe] = n.current),
    $t(e),
    r)
  ) {
    for (e = 0; e < r.length; e++) {
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
    }
  }
  return new ml(n);
};
ge.render = function (e, n, t) {
  if (!vl(n)) {
    throw Error(y(200));
  }
  return hl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function (e) {
  if (!vl(e)) {
    throw Error(y(40));
  }
  return e._reactRootContainer
    ? (Ln(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ge.unstable_batchedUpdates = No;
ge.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!vl(t)) {
    throw Error(y(200));
  }
  if (e == null || e._reactInternals === void 0) {
    throw Error(y(38));
  }
  return hl(e, n, t, !1, r);
};
ge.version = "18.3.1-next-f1338f8080-20240426";
function tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"
    )
  ) {
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
  }
}
tc(), (ts.exports = ge);
var Od = ts.exports,
  Hi = Od;
(Kl.createRoot = Hi.createRoot), (Kl.hydrateRoot = Hi.hydrateRoot);
function el({ title: e }) {
  return j.jsxs("div", {
    className:
      "w-[80px] flex justify-between bg-[rgb(59,59,57)] p-[2px] pl-[4px] pr-[4px] rounded-md",
    children: [
      j.jsx("div", { children: "-" }),
      j.jsx("input", {
        className: "w-[40px] text-center",
        maxLength: 3,
        type: "text",
      }),
      j.jsx("div", { children: "+" }),
      j.jsx("div", {
        className: "absolute top-[30px] left-[20px] text-gray-400",
        children: e,
      }),
    ],
  });
}
function jd() {
  return j.jsx("div", {
    className: "w-[196px] h-[80px] flex justify-center items-center",
    children: j.jsxs("div", {
      className:
        "w-[150px] h-[60px] rounded-md border-[1px] border-neutral-400 relative",
      children: [
        j.jsx("div", {
          className: "absolute top-[-12px] left-[32px]",
          children: j.jsx(el, {}),
        }),
        j.jsx("div", {
          className: "absolute top-[45px] left-[32px]",
          children: j.jsx(el, {}),
        }),
      ],
    }),
  });
}
const Md = acquireVsCodeApi();
function Wi({ title: e, element: n }) {
  return j.jsxs("div", {
    className:
      "text-sm w-[100%] h-[90px] p-[15px] flex justify-between items-center",
    children: [
      e,
      j.jsx("div", {
        className: "w-[80%] flex justify-between",
        children: n.map((t) =>
          j.jsx("div", { className: "relative", children: t })
        ),
      }),
    ],
  });
}
function Dd() {
  const [e, n] = Tt.useState({ frame: "" });
  Tt.useEffect(() => {
    window.addEventListener("message", (r) => {
      const l = r.data;
      n({ frame: l });
    });
  }, []);
  const t = () => {
    Md.postMessage("from Editor");
  };
  return j.jsx("div", {
    className: "w-[300px] h-[100vh] bg-[rgb(38,38,36)]",
    children: j.jsxs("div", {
      className:
        "pl-[15px] w-[100%] p-[10px] h-[220px] border-b-[1px] border-zinc-700",
      children: [
        j.jsx("div", {
          className: "font-bold text-neutral-400",
          children: "Frame",
        }),
        j.jsx(Wi, {
          title: "Size",
          element: [
            j.jsx(el, { title: "width" }),
            j.jsx(el, { title: "height" }),
          ],
        }),
        j.jsx(Wi, { title: "Border", element: [j.jsx(jd, {})] }),
        j.jsx("button", { onClick: t, children: "发送信息" }),
        j.jsx("div", { children: e.frame }),
      ],
    }),
  });
}
Kl.createRoot(document.getElementById("root")).render(
  j.jsx(Sc.StrictMode, { children: j.jsx(Dd, {}) })
);
