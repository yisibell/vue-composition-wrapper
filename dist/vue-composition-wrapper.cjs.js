'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var compositionApi = require('@vue/composition-api');

function getCurrentInstance() {
    var vm = compositionApi.getCurrentInstance();
    if (!vm)
        return;
    return vm.proxy;
}

var useContext = function () {
    var vm = getCurrentInstance();
    if (!vm)
        throw new Error('This must be called within a setup function.');
    return {
        app: vm,
        store: vm.$store,
        router: vm.$router,
        route: compositionApi.computed(function () { return vm.$route; }),
        query: compositionApi.computed(function () { return vm.$route.query; }),
        params: compositionApi.computed(function () { return vm.$route.params; }),
    };
};

var wrapProperty = function (property, makeComputed) {
    return function () {
        var vm = getCurrentInstance();
        if (!vm)
            throw new Error('This must be called within a setup function.');
        return makeComputed !== false
            ? compositionApi.computed(function () { return vm[property]; })
            : vm[property];
    };
};
var useRouter = wrapProperty('$router', false);
var useRoute = wrapProperty('$route');
var useStore = function (key) {
    var vm = getCurrentInstance();
    if (!vm)
        throw new Error('This must be called within a setup function.');
    return vm.$store;
};

exports.useContext = useContext;
exports.useRoute = useRoute;
exports.useRouter = useRouter;
exports.useStore = useStore;
exports.wrapProperty = wrapProperty;
Object.keys(compositionApi).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return compositionApi[k];
        }
    });
});
