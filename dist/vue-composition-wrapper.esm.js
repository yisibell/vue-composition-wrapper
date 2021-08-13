import { getCurrentInstance as getCurrentInstance$1, computed } from '@vue/composition-api';

function getCurrentInstance() {
    var vm = getCurrentInstance$1();
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
        route: computed(function () { return vm.$route; }),
        query: computed(function () { return vm.$route.query; }),
        params: computed(function () { return vm.$route.params; }),
    };
};

var wrapProperty = function (property, makeComputed) {
    return function () {
        var vm = getCurrentInstance();
        if (!vm)
            throw new Error('This must be called within a setup function.');
        return makeComputed !== false
            ? computed(function () { return vm[property]; })
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

export { useContext, useRoute, useRouter, useStore, wrapProperty };
