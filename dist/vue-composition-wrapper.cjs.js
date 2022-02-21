"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@vue/composition-api");function e(){var e=r.getCurrentInstance();if(e)return e.proxy}var t=function(t,u){return function(){var n=e();if(!n)throw new Error("This must be called within a setup function.");return!1!==u?r.computed((function(){return n[t]})):n[t]}},u=t("$router",!1),n=t("$route"),o=function(r){var e=function(){return r?window.localStorage:window.sessionStorage};return{getStorage:function(r){if(!r||!e())return"";try{var t=e().getItem(r)||"";return JSON.parse(t)}catch(r){return""}},setStorage:function(r,t){if(e())return e().setItem(r,JSON.stringify(t))},removeStorage:function(r){if(e())return e().removeItem(r)},clearStorage:function(){if(e)return e().clear()}}};exports.useContext=function(){var t=e();if(!t)throw new Error("This must be called within a setup function.");return{app:t,store:t.$store,router:t.$router,route:r.computed((function(){return t.$route})),query:r.computed((function(){return t.$route.query})),params:r.computed((function(){return t.$route.params}))}},exports.useLocalStorage=function(){return o(!0)},exports.useRoute=n,exports.useRouteParams=function(){var e=n();return r.computed((function(){return e.value.params}))},exports.useRouteQuery=function(){var e=n();return r.computed((function(){return e.value.query}))},exports.useRouter=u,exports.useSessionStorage=function(){return o(!1)},exports.useStorage=o,exports.useStore=function(){var r=e();if(!r)throw new Error("This must be called within a setup function.");return r.$store},exports.wrapProperty=t;
