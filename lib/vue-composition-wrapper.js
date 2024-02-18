import { getCurrentInstance as v, effectScope as A, shallowReactive as N, onUnmounted as x, computed as s, unref as b } from "vue";
const m = function() {
  const e = v();
  if (!e)
    throw new Error("This must be called within a setup function.");
  return e.proxy;
};
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
function l(e) {
  if (!v())
    throw new Error(
      "[vue-router]: Missing current instance. " + e + "() must be called inside <script setup> or setup()."
    );
}
function g() {
  return process.env.NODE_ENV !== "production" && l("useRouter"), v().proxy.$root.$router;
}
function h() {
  process.env.NODE_ENV !== "production" && l("useRoute");
  var e = v().proxy.$root;
  if (!e._$route) {
    var r = A(!0).run(
      function() {
        return N(Object.assign({}, e.$router.currentRoute));
      }
    );
    e._$route = r, e.$router.afterEach(function(t) {
      Object.assign(r, t);
    });
  }
  return e._$route;
}
function j(e) {
  return process.env.NODE_ENV !== "production" && l("onBeforeRouteUpdate"), $(e, O);
}
function O(e, r, t) {
  var u = e.matched, n = r.matched;
  return u.length >= t && u.slice(0, t + 1).every(function(o, a) {
    return o === n[a];
  });
}
function V(e, r, t) {
  var u = e.matched, n = r.matched;
  return u.length < t || u[t] !== n[t];
}
function B(e) {
  return process.env.NODE_ENV !== "production" && l("onBeforeRouteLeave"), $(e, V);
}
var D = function() {
};
function $(e, r) {
  for (var t = v(), u = g(), n = t.proxy; n && n.$vnode && n.$vnode.data && n.$vnode.data.routerViewDepth == null; )
    n = n.$parent;
  var o = n && n.$vnode && n.$vnode.data ? n.$vnode.data.routerViewDepth : null;
  if (o != null) {
    var a = u.beforeEach(function(c, f, i) {
      return r(c, f, o) ? e(c, f, i) : i();
    });
    return x(a), a;
  }
  return D;
}
function _(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      var r = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function L(e, r) {
  var t = function(o) {
    var a = r[o], c = e[o];
    if (typeof a == "string") {
      if (a !== c)
        return { v: !1 };
    } else if (!Array.isArray(c) || c.length !== a.length || a.some(function(f, i) {
      return f !== c[i];
    }))
      return { v: !1 };
  };
  for (var u in r) {
    var n = t(u);
    if (n)
      return n.v;
  }
  return !0;
}
function M(e, r) {
  return Array.isArray(e) ? R(e, r) : Array.isArray(r) ? R(r, e) : e === r;
}
function R(e, r) {
  return Array.isArray(r) ? e.length === r.length && e.every(function(t, u) {
    return t === r[u];
  }) : e.length === 1 && e[0] === r;
}
function P(e, r) {
  if (Object.keys(e).length !== Object.keys(r).length)
    return !1;
  for (var t in e)
    if (!M(e[t], r[t]))
      return !1;
  return !0;
}
function K(e) {
  process.env.NODE_ENV !== "production" && l("useLink");
  var r = g(), t = h(), u = s(function() {
    return r.resolve(b(e.to), t);
  }), n = s(function() {
    var f = u.value.route, i = f.matched, y = i.length, p = i[y - 1], d = t.matched;
    if (!p || !d.length)
      return -1;
    var E = d.indexOf(p);
    if (E > -1)
      return E;
    var w = d[d.length - 2];
    return (
      // we are dealing with nested routes
      y > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      w && w === p.parent
    );
  }), o = s(
    function() {
      return n.value > -1 && L(t.params, u.value.route.params);
    }
  ), a = s(
    function() {
      return n.value > -1 && n.value === t.matched.length - 1 && P(t.params, u.value.route.params);
    }
  ), c = function(f) {
    var i = u.value.route;
    return _(f) ? e.replace ? r.replace(i) : r.push(i) : Promise.resolve();
  };
  return {
    href: s(function() {
      return u.value.href;
    }),
    route: s(function() {
      return u.value.route;
    }),
    isExactActive: a,
    isActive: o,
    navigate: c
  };
}
const C = () => {
  const e = m();
  if (!e)
    throw new Error('"useStore" must be called within a setup function.');
  return e.$store;
}, I = () => {
  const e = h();
  return s(() => e.params);
}, S = () => {
  const e = h();
  return s(() => e.query);
}, U = () => {
  const e = m();
  if (!e)
    throw new Error('"useContext" must be called within a setup function.');
  const r = C(), t = h(), u = g(), n = S(), o = I();
  return {
    app: e,
    store: r,
    router: u,
    route: t,
    query: n,
    params: o
  };
}, k = (e, r) => () => {
  const t = m();
  if (!t)
    throw new Error("This must be called within a setup function.");
  return r !== !1 ? s(() => t[e]) : t[e];
};
export {
  m as getCurrentInstance,
  B as onBeforeRouteLeave,
  j as onBeforeRouteUpdate,
  U as useContext,
  K as useLink,
  h as useRoute,
  I as useRouteParams,
  S as useRouteQuery,
  g as useRouter,
  C as useStore,
  k as wrapProperty
};
