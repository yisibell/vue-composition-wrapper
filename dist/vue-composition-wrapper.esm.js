import{getCurrentInstance as r,computed as t}from"@vue/composition-api";function n(){var t=r();if(t)return t.proxy}var e=function(){var r=n();if(!r)throw new Error("This must be called within a setup function.");return{app:r,store:r.$store,router:r.$router,route:t((function(){return r.$route})),query:t((function(){return r.$route.query})),params:t((function(){return r.$route.params}))}},u=function(r,e){return function(){var u=n();if(!u)throw new Error("This must be called within a setup function.");return!1!==e?t((function(){return u[r]})):u[r]}},o=u("$router",!1),i=u("$route"),a=function(){var r=n();if(!r)throw new Error("This must be called within a setup function.");return r.$store},c=function(){var r=i();return t((function(){return r.value.query}))},f=function(){var r=i();return t((function(){return r.value.params}))},s=function(r){var t=function(){return r?window.localStorage:window.sessionStorage};return{getStorage:function(r){if(!r||!t())return"";try{var n=t().getItem(r)||"";return JSON.parse(n)}catch(r){return""}},setStorage:function(r,n){if(t())return t().setItem(r,JSON.stringify(n))},removeStorage:function(r){if(t())return t().removeItem(r)},clearStorage:function(){if(t)return t().clear()}}},m=function(){return s(!1)},p=function(){return s(!0)};export{e as useContext,p as useLocalStorage,i as useRoute,f as useRouteParams,c as useRouteQuery,o as useRouter,m as useSessionStorage,s as useStorage,a as useStore,u as wrapProperty};
