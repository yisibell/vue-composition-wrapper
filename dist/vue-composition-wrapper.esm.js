import{getCurrentInstance as r,computed as t}from"@vue/composition-api";function n(){var t=r();if(t)return t.proxy}var u=function(){var r=n();if(!r)throw new Error("This must be called within a setup function.");return{app:r,store:r.$store,router:r.$router,route:t((function(){return r.$route})),query:t((function(){return r.$route.query})),params:t((function(){return r.$route.params}))}},e=function(r,u){return function(){var e=n();if(!e)throw new Error("This must be called within a setup function.");return!1!==u?t((function(){return e[r]})):e[r]}},o=e("$router",!1),i=e("$route"),a=function(r){var t=n();if(!t)throw new Error("This must be called within a setup function.");return t.$store},c=function(){var r=i();return t((function(){return r.value.query}))},f=function(){var r=i();return t((function(){return r.value.params}))};export{u as useContext,i as useRoute,f as useRouteParams,c as useRouteQuery,o as useRouter,a as useStore,e as wrapProperty};
