(function(e){function t(t){for(var a,s,r=t[0],o=t[1],u=t[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i={app:0},c=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-019008a3":"0f00b5a1","chunk-0bf4d1e7":"b9265e82","chunk-182c3f16":"68ffa607","chunk-1d0f81d8":"ce0cd8de","chunk-03b7cb0b":"7ffcbd3b","chunk-04325e24":"223ae1f8","chunk-2d0d5ffe":"0b04367c","chunk-2d0e906b":"e2a2032e","chunk-73ec9fb1":"32f008d0","chunk-17865f60":"653695af","chunk-ab798ce8":"eadbd824","chunk-32f9500c":"d673e3b3","chunk-0551d128":"b61c3654","chunk-2ee2458d":"833beec3","chunk-3b977071":"61afa9d3","chunk-5f4e8cab":"226b4020","chunk-26eed886":"fcab9a7a","chunk-5749d1cc":"e3cdc44c","chunk-69238e9c":"53bc9b16","chunk-35f74662":"36d8ee25","chunk-3913460c":"4f368dab","chunk-50edbd9e":"51c8eb1a","chunk-6e527c09":"76482ef6","chunk-7c760635":"07cda1fd","chunk-7efb1142":"ca0aaa2b"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-019008a3":1,"chunk-0bf4d1e7":1,"chunk-182c3f16":1,"chunk-1d0f81d8":1,"chunk-03b7cb0b":1,"chunk-04325e24":1,"chunk-73ec9fb1":1,"chunk-17865f60":1,"chunk-ab798ce8":1,"chunk-32f9500c":1,"chunk-0551d128":1,"chunk-2ee2458d":1,"chunk-3b977071":1,"chunk-5f4e8cab":1,"chunk-26eed886":1,"chunk-5749d1cc":1,"chunk-69238e9c":1,"chunk-35f74662":1,"chunk-3913460c":1,"chunk-50edbd9e":1,"chunk-6e527c09":1,"chunk-7c760635":1,"chunk-7efb1142":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-019008a3":"f464164e","chunk-0bf4d1e7":"7fe7c73d","chunk-182c3f16":"b48c25c2","chunk-1d0f81d8":"0f6732b4","chunk-03b7cb0b":"abcc1eb2","chunk-04325e24":"3ebfdd76","chunk-2d0d5ffe":"31d6cfe0","chunk-2d0e906b":"31d6cfe0","chunk-73ec9fb1":"89b5d61c","chunk-17865f60":"408221f0","chunk-ab798ce8":"f59c54ec","chunk-32f9500c":"dd881ee4","chunk-0551d128":"b209b222","chunk-2ee2458d":"627c500e","chunk-3b977071":"b40d5db7","chunk-5f4e8cab":"de2cc853","chunk-26eed886":"c065921d","chunk-5749d1cc":"e208d020","chunk-69238e9c":"151140b2","chunk-35f74662":"f2cd04f0","chunk-3913460c":"d6b154bc","chunk-50edbd9e":"693f8134","chunk-6e527c09":"29fae886","chunk-7c760635":"fe830a32","chunk-7efb1142":"ac79527c"}[e]+".css",i=o.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete s[e],f.parentNode.removeChild(f),n(c)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"366d":function(e,t,n){},"42a3":function(e,t,n){},4332:function(e,t,n){"use strict";var a=n("d8ea"),s=n.n(a);s.a},4360:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),s=n("2f62"),i=n("bc3a"),c=n.n(i),r=n("0e44");a["default"].use(s["a"]),t["a"]=new s["a"].Store({state:{auth:!1,apiToken:"",session:"",userInfo:{},site:!1,users:[],theme:!1,roles:[],profilePicture:!1},mutations:{login:function(e,t){e.apiToken=t.token,e.auth=!0,e.userInfo=t,c.a.defaults.headers.common={token:t.token}},logout:function(e){e.apiToken="",e.auth=!1,e.userInfo={},e.site=!1,e.users=[],e.theme=!1,e.roles=[],e.profilePicture=!1,c.a.defaults.headers.common={token:""}},setSite:function(e,t){e.site=t},setUser:function(e,t){e.userInfo=t},setTheme:function(e,t){e.theme=t},setRoles:function(e,t){e.roles=t},setUsers:function(e,t){e.users=t},setProfilePicture:function(e,t){e.profilePicture=t}},actions:{getSiteConfig:function(e){var t=this;return new Promise((function(n,a){t.state.site?n(t.state.site):c.a.get("/site").then((function(a){var s=a.data.data;e.state.site=s,t.commit("setSite",a.data.data),n(s)})).catch((function(e){a(e)}))}))},getTheme:function(){var e=this;return new Promise((function(t,n){e.state.theme?t(e.state.theme):c.a.get("/theme").then((function(n){var a=n.data.data;console.log(a),e.commit("setTheme",a),t(a)})).catch((function(e){n(e)}))}))},getUsers:function(){var e=this;return new Promise((function(t,n){e.state.users.length?t(e.state.users):c.a.get("/users").then((function(n){var a=n.data.data;e.commit("setUsers",a),t(a)})).catch((function(e){n(e)}))}))},getProfilePicture:function(){var e=this;if(this.state.userInfo["profile_picture_id"])return new Promise((function(t,n){c.a.get("/media/"+e.state.userInfo["profile_picture_id"]).then((function(n){var a=n.data.data;e.commit("setProfilePicture",a),t(a)})).catch((function(t){e.commit("setProfilePicture",!1),n(t)}))}))},getRoles:function(){var e=this;return new Promise((function(t,n){e.state.roles.length?t(e.state.roles):c.a.get("/roles").then((function(n){var a=n.data.data;e.commit("setRoles",a),t(a)})).catch((function(e){n(e)}))}))}},modules:{},plugins:[Object(r["a"])()]})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isLoggedIn?n("Sidebar",{attrs:{open:e.sidebarOpen},on:{close:function(t){e.sidebarOpen=!1}}}):e._e(),e.isLoggedIn?n("MobileMenu",{attrs:{sidebar:e.sidebarOpen},on:{"update:sidebar":function(t){e.sidebarOpen=t}}}):e._e(),n("main",[n("div",{staticClass:"router"},[n("span",{staticClass:"router-overlay",class:{"router-overlay-active":e.sidebarOpen},on:{click:function(t){e.sidebarOpen=!1}}}),n("TransitionPage",[n("router-view",{key:e.$route.fullPath,staticClass:"router"})],1)],1)])],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getTheme?n("aside",{staticClass:"aside",class:{"aside-active":e.open}},[n("div",{staticClass:"aside-container"},[n("div",{staticClass:"aside-top"},[e.getSite.logo?n("router-link",{staticClass:"aside-logo",attrs:{to:{name:"home"}}},[n("img",{attrs:{src:e.getSiteUrl+e.getSite.logo}}),n("h2",[e._v("Verbis")])]):e._e(),n("div",{staticClass:"aside-block"},[n("collapse",{attrs:{"use-icon":!1,open:!0},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Site")]),n("i",{staticClass:"feather feather-chevron-down"})])]},proxy:!0},{key:"body",fn:function(){return[n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"site"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"site"}}},[n("i",{staticClass:"feather feather-eye"}),n("span",[e._v("View Site")])])],1)])])]},proxy:!0}],null,!1,3236848722)})],1),n("div",{staticClass:"aside-block"},[n("collapse",{attrs:{"use-icon":!1,open:!0},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Content")]),n("i",{staticClass:"feather feather-chevron-down"})])]},proxy:!0},{key:"body",fn:function(){return[n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item aside-nav-item-icon",class:{"aside-nav-item-active":"pages"===e.activePage||"page"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"resources",params:{resource:"pages"}}}},[n("div",[n("i",{staticClass:"feather feather-file"}),n("span",[e._v("Pages")])]),n("router-link",{staticClass:"aside-icon",attrs:{to:{name:"editor",params:{id:"new"},query:{resource:"pages"}}}},[n("i",{staticClass:"feather feather-plus"})])],1)],1),e._l(e.getTheme.resources,(function(t){return n("li",{key:t.name,staticClass:"aside-nav-item aside-nav-item-icon",class:{"aside-nav-item-active":e.activePage===t.name.toLowerCase()},on:{click:function(t){return e.$emit("close",!0)}}},[""!==t.name?n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"resources",params:{resource:t.name}}}},[n("div",[t.icon?n("i",{class:t.icon}):n("i",{staticClass:"fal fa-file"}),n("span",[e._v(e._s(t["friendly_name"]))])]),n("router-link",{staticClass:"aside-icon",attrs:{to:{name:"editor",params:{id:"new"},query:{resource:t.name}}}},[n("i",{staticClass:"feather feather-plus"})])],1):e._e()],1)}))],2)])]},proxy:!0}],null,!1,85743755)})],1),n("div",{staticClass:"aside-block"},[n("collapse",{attrs:{"use-icon":!1},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Assets")]),n("i",{staticClass:"feather feather-chevron-down"})])]},proxy:!0},{key:"body",fn:function(){return[n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"categories"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"categories"}}},[n("i",{staticClass:"feather feather-tag"}),n("span",[e._v("Categories")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"media"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"media"}}},[n("i",{staticClass:"feather feather-image"}),n("span",[e._v("Media")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"fields"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"fields"}}},[n("i",{staticClass:"feather feather-layout"}),n("span",[e._v("Fields")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"users"===e.activePage||"edit-user"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"users"}}},[n("i",{staticClass:"feather feather-users"}),n("span",[e._v("Users")])])],1)])])]},proxy:!0}],null,!1,146916233)})],1),n("div",{staticClass:"aside-block"},[n("collapse",{attrs:{"use-icon":!1},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Integrations")]),n("i",{staticClass:"feather feather-chevron-down"})])]},proxy:!0},{key:"body",fn:function(){return[n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"console"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"console"}}},[n("i",{staticClass:"feather feather-terminal"}),n("span",[e._v("Console")])])],1)])])]},proxy:!0}],null,!1,3968556696)})],1),n("div",{staticClass:"aside-block"},[n("collapse",{attrs:{"use-icon":!1},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Settings")]),n("i",{staticClass:"feather feather-chevron-down"})])]},proxy:!0},{key:"body",fn:function(){return[n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"settings-general"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"settings-general"}}},[n("i",{staticClass:"feather feather-settings"}),n("span",[e._v("General")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"settings-code-injection"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"settings-code-injection"}}},[n("i",{staticClass:"feather feather-code"}),n("span",[e._v("Code Injection")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"settings-performance"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"settings-performance"}}},[n("i",{staticClass:"feather feather-clock"}),n("span",[e._v("Performance")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"settings-seo-meta"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"settings-seo-meta"}}},[n("i",{staticClass:"feather feather-search"}),n("span",[e._v("SEO & Meta")])])],1),n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"settings-media"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"settings-media"}}},[n("i",{staticClass:"feather feather-film"}),n("span",[e._v("Media")])])],1)])])]},proxy:!0}],null,!1,3206314929)})],1)],1),n("div",{staticClass:"aside-bottom"},[n("collapse",{attrs:{"use-icon":!1,show:!1,reverse:!0},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"aside-bottom-content",on:{click:function(t){e.accountActive=!e.accountActive}}},[e.getProfilePicture["url"]?n("img",{staticClass:"avatar",attrs:{src:e.getSite.url+e.getProfilePicture.url}}):n("span",{staticClass:"avatar",domProps:{innerHTML:e._s(e.getInitials)}}),n("div",{staticClass:"aside-bottom-user"},[n("div",{staticClass:"aside-bottom-user-text"},[n("h4",[e._v(e._s(e.getUserInfo["first_name"])+" "+e._s(e.getUserInfo["last_name"]))]),n("p",[e._v(e._s(e.getUserInfo["email"]))])]),n("div",{staticClass:"icon icon-naked aside-bottom-chevron"},[n("i",{staticClass:"feather feather-chevrons-up",class:{active:e.accountActive}})])])])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"aside-block aside-block-account"},[n("div",{staticClass:"aside-block-nav"},[n("h6",[e._v("Account")])]),n("nav",{staticClass:"aside-nav"},[n("ul",[n("li",{staticClass:"aside-nav-item",class:{"aside-nav-item-active":"profile"===e.activePage},on:{click:function(t){return e.$emit("close",!0)}}},[n("router-link",{staticClass:"aside-nav-link",attrs:{to:{name:"profile"}}},[n("i",{staticClass:"feather feather-user"}),n("span",[e._v("Profile")])])],1),n("li",{staticClass:"aside-nav-item",on:{click:e.doLogout}},[n("div",{staticClass:"aside-nav-link"},[n("i",{staticClass:"feather feather-log-out"}),n("span",[e._v("Logout")])])])])])])]},proxy:!0}],null,!1,1994802987)})],1)])]):e._e()},r=[],o=(n("b0c0"),n("e361")),u={name:"Sidebar",props:{open:{type:Boolean,default:!1}},components:{Collapse:o["a"]},data:function(){return{doingAxios:!1,themeConfig:{},resources:{},activePage:"",collapsed:!1,accountActive:!1}},watch:{$route:function(){this.setActivePage()}},mounted:function(){console.log(this.getTheme.resources)},methods:{doLogout:function(){var e=this;this.axios.post("/logout",{}).then((function(){e.$store.commit("logout"),e.$store.dispatch("getSiteConfig"),e.$router.push("/login")}))},setActivePage:function(){var e=this.$route.query.resource,t=this.$route.params.resource;this.activePage=e||(t||this.$route.name)},collapse:function(){document.querySelector(".auth-container").classList.toggle("auth-container-collapsed"),this.collapsed=!this.collapsed}},computed:{getInitials:function(){var e=this.getUserInfo;return e["first_name"].charAt(0)+e["last_name"].charAt(0).toUpperCase()},getProfilePicture:function(){return this.$store.state.profilePicture}}},l=u,d=(n("4332"),n("2877")),f=Object(d["a"])(l,c,r,!1,null,"2f25e9a4",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu"},[n("ul",{staticClass:"menu-list"},[n("li",{staticClass:"menu-item",class:{"menu-item-active":"home"===e.activePage}},[n("router-link",{staticClass:"menu-link",attrs:{to:{name:"home"}}},[n("i",{staticClass:"feather feather-home"}),n("span",[e._v("Home")])])],1),n("li",{staticClass:"menu-item",class:{"menu-item-active":"pages"===e.activePage}},[n("router-link",{staticClass:"menu-link",attrs:{to:{name:"resources",params:{resource:"pages"}}}},[n("i",{staticClass:"feather feather-file"}),n("span",[e._v("Pages")])])],1),n("li",{staticClass:"menu-item",class:{"menu-item-active":"settings-general"===e.activePage}},[n("router-link",{staticClass:"menu-link",attrs:{to:{name:"settings-general"}}},[n("i",{staticClass:"feather feather-settings"}),n("span",[e._v("General")])])],1),n("li",{staticClass:"menu-item",class:{"menu-item-active":e.sidebarOpen}},[n("div",{staticClass:"menu-link",on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[n("i",{staticClass:"feather feather-menu"}),n("span",[e._v("Menu")])])])])])},p=[],v={name:"MobileMenu",props:{sidebar:{type:Boolean,default:!1}},data:function(){return{activePage:""}},watch:{$route:function(){this.setActivePage()}},methods:{setActivePage:function(){var e=this.$route.query.resource,t=this.$route.params.resource;this.activePage=e||(t||this.$route.name)}},computed:{sidebarOpen:{get:function(){return this.sidebar},set:function(e){this.$emit("update:sidebar",e)}}}},g=v,b=(n("be71"),Object(d["a"])(g,m,p,!1,null,"27fb76e8",null)),k=b.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transitionName,mode:e.transitionMode,"enter-active-class":e.transitionEnterActiveClass},on:{beforeLeave:e.beforeLeave,enter:e.enter,afterEnter:e.afterEnter}},[e._t("default")],2)},y=[],P=(n("ac1f"),n("1276"),"fade"),_="out-in",w={name:"TransitionPage",data:function(){return{prevHeight:0,transitionName:P,transitionMode:_,transitionEnterActiveClass:""}},created:function(){var e=this;this.$router.beforeEach((function(t,n,a){var s=t.meta.transitionName||n.meta.transitionName||P;if("slide"===s){var i=t.path.split("/").length,c=n.path.split("/").length;s=i<c?"slide-right":"slide-left"}e.transitionMode=_,e.transitionEnterActiveClass="".concat(s,"-enter-active"),"zoom"===t.meta.transitionName&&(e.transitionMode="in-out",e.transitionEnterActiveClass="zoom-enter-active",document.body.style.overflow="hidden"),"zoom"===n.meta.transitionName&&(e.transitionMode=null,e.transitionEnterActiveClass=null,document.body.style.overflow=null),e.transitionName=s,a()}))},methods:{beforeLeave:function(e){this.prevHeight=getComputedStyle(e).height},enter:function(e){var t=getComputedStyle(e),n=t.height;e.style.height=this.prevHeight,setTimeout((function(){e.style.height=n}))},afterEnter:function(e){e.style.height="auto"}}},x=w,$=(n("cc1b"),Object(d["a"])(x,C,y,!1,null,null,null)),S=$.exports,O={name:"App",components:{MobileMenu:k,Sidebar:h,TransitionPage:S},metaInfo:{meta:[{charset:"utf-8"},{name:"description",content:"Verbis CMS"},{name:"viewport",content:"width=device-width, initial-scale=1.0"}]},data:function(){return{sidebarOpen:!1}},computed:{isLoggedIn:function(){return!!this.$store.state.auth&&this.$store.state.auth}}},A=O,N=(n("5c0b"),Object(d["a"])(A,s,i,!1,null,null,null)),E=N.exports,j=n("a18c"),T=n("4360"),L=n("bc3a"),I=n.n(L);function H(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var M={created:function(){var e=H(this);e&&(document.title="Verbis - "+e)}},U=n("73e4"),z=n.n(U),q=n("bc9d"),B=n("e57a"),R=(n("4160"),n("4d63"),n("25f0"),n("5319"),n("159b"),{data:function(){return{timeoutDelay:150}},methods:{setAllHeight:function(){this.$nextTick((function(){document.querySelectorAll(".auth-container .collapse-content").forEach((function(e){if("0px"!==e.style.maxHeight){var t=e.querySelectorAll(".field-message-warning");if(t.length){var n=26*t.length+(t.length+7);e.style.maxHeight=n+parseInt(e.style.maxHeight.replace("px",""))+"px"}}}))}))},slugify:function(e){e=e.replace(/^\s+|\s+$/g,""),e=e.toLowerCase();for(var t="ãàáäâẽèéëêìíïîõòóöôùúüûñç·_,:;",n="aaaaaeeeeeiiiiooooouuuunc------",a=0,s=t.length;a<s;a++)e=e.replace(new RegExp(t.charAt(a),"g"),n.charAt(a));return e=e.replace(/[^a-z0-9/ -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"),e}},computed:{getUserInfo:function(){return this.$store.state.userInfo},getSiteUrl:function(){return this.$store.state.site.url},getSite:function(){return this.$store.state.site},getTheme:function(){return this.$store.state.theme}}});n("9f21"),a["default"].config.productionTip=!1,I.a.defaults.headers.common={token:T["a"].state.apiToken||"","Access-Control-Allow-Origin":"*/*","Content-Type":"application/json"},I.a.defaults.withCredentials=!0,I.a.defaults.baseURL="/api/v1",a["default"].prototype.axios=I.a,a["default"].mixin(R),a["default"].mixin(M),a["default"].use(z.a,{timeout:2500,theme:"verbis",progressBar:!0,layout:"bottomRight"}),a["default"].use(n("2ead")),a["default"].use(q["a"]),a["default"].component("PrismEditor",B["a"]),new a["default"]({router:j["a"],store:T["a"],render:function(e){return e(E)}}).$mount("#app"),T["a"].dispatch("getSiteConfig").catch((function(e){a["default"].prototype.helpers.handleResponse(e)}))},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},8118:function(e,t,n){},"9c0c":function(e,t,n){},"9f21":function(e,t,n){"use strict";n.r(t);n("fb6a"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0");var a=n("d4ec"),s=n("bee2"),i=n("2b0e"),c=n("4360"),r=n("bc3a"),o=n.n(r),u=n("a18c"),l=n("7329"),d=n.n(l),f=function(){function e(){Object(a["a"])(this,e),this.debounceTime=1e3}return Object(s["a"])(e,[{key:"isEmptyObject",value:function(e){return 0===Object.keys(e).length&&e.constructor===Object}},{key:"noty",value:function(e){new d.a({text:e,type:"error",timeout:3500,theme:"verbis",progressBar:!1,layout:"bottomRight"}).show()}},{key:"renameKey",value:function(e,t,n){var a=Object.assign({},e),s=a[t];return delete a[t],a[n]=s,a}},{key:"handleResponse",value:function(e){var t=this;if(console.log(e),this.checkServer(e),!c["a"].state.auth)return Promise.reject(e);e&&(401===e.response.status||429===e.response.status?o.a.post("/logout",{}).finally((function(){c["a"].commit("logout"),c["a"].dispatch("getSiteConfig"),u["a"].push("/login");var n=e.response.data.data.errors;void 0!==n["session"]&&t.noty(e.response.data.message)})):429===e.response.status?this.noty(e.response.data.message):this.noty("Error occurred, please refresh the page."))}},{key:"checkServer",value:function(e){console.log(e.response)}},{key:"setHeight",value:function(e){for(var t=e.children,n=0,a=0;a<t.length;a++)n+=t[a].clientHeight;e.style.maxHeight=n+"px"}},{key:"capitalize",value:function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}},{key:"validateEmail",value:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}},{key:"validateUrl",value:function(e){var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)}}]),e}();i["default"].prototype.helpers=new f},a18c:function(e,t,n){"use strict";n("b0c0"),n("d3b7");var a=n("2b0e"),s=n("8c4f"),i=n("4360"),c=n("58ca"),r=[{path:"/",name:"home",component:function(){return n.e("chunk-019008a3").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-50edbd9e").then(n.bind(null,"5326"))},meta:{transitionName:"slide"}},{path:"/password/reset",name:"send-password-reset",component:function(){return n.e("chunk-35f74662").then(n.bind(null,"29e2"))},meta:{transitionName:"slide"}},{path:"/password/reset/:token",name:"password-reset",component:function(){return n.e("chunk-26eed886").then(n.bind(null,"0bff"))},meta:{transitionName:"slide"}},{path:"/site",name:"site",component:function(){return n.e("chunk-3913460c").then(n.bind(null,"d933"))},meta:{transitionName:"fade"}},{path:"/resources/:resource",name:"resources",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-2ee2458d")]).then(n.bind(null,"89fd"))},meta:{transitionName:"fade"}},{path:"/editor/:id",name:"editor",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-2d0e906b"),n.e("chunk-73ec9fb1"),n.e("chunk-ab798ce8")]).then(n.bind(null,"ef67"))},meta:{transitionName:"fade"}},{path:"/editor",redirect:"/editor/new",meta:{transitionName:"fade"}},{path:"/categories",name:"categories",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-3b977071")]).then(n.bind(null,"1f00"))},meta:{transitionName:"fade"}},{path:"/categories/:id",name:"categories-single",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-0551d128")]).then(n.bind(null,"1013"))},meta:{transitionName:"fade"}},{path:"/media",name:"media",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-2d0d5ffe")]).then(n.bind(null,"714b"))},meta:{transitionName:"fade"}},{path:"/fields",name:"fields",component:function(){return n.e("chunk-6e527c09").then(n.bind(null,"08c7"))},meta:{transitionName:"fade"}},{path:"/users",name:"users",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-5f4e8cab")]).then(n.bind(null,"f812"))},meta:{transitionName:"fade"}},{path:"/integrations/console",name:"console",component:function(){return Promise.all([n.e("chunk-2d0e906b"),n.e("chunk-69238e9c")]).then(n.bind(null,"ce78"))},meta:{transitionName:"fade"}},{path:"/profile",name:"profile",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-32f9500c")]).then(n.bind(null,"488c"))},meta:{transitionName:"fade"}},{path:"/users/:id",name:"edit-user",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-32f9500c")]).then(n.bind(null,"488c"))},meta:{transitionName:"fade"}},{path:"/settings/general",name:"settings-general",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-04325e24")]).then(n.bind(null,"bc04"))},meta:{transitionName:"fade"}},{path:"/settings/code-injection",name:"settings-code-injection",component:function(){return Promise.all([n.e("chunk-2d0e906b"),n.e("chunk-5749d1cc")]).then(n.bind(null,"0a8b"))},meta:{transitionName:"fade"}},{path:"/settings/performance",name:"settings-performance",component:function(){return n.e("chunk-0bf4d1e7").then(n.bind(null,"60cd"))},meta:{transitionName:"fade"}},{path:"/settings/seo-meta",name:"settings-seo-meta",component:function(){return Promise.all([n.e("chunk-1d0f81d8"),n.e("chunk-03b7cb0b"),n.e("chunk-2d0e906b"),n.e("chunk-73ec9fb1"),n.e("chunk-17865f60")]).then(n.bind(null,"f729"))},meta:{transitionName:"fade"}},{path:"/settings/media",name:"settings-media",component:function(){return n.e("chunk-7c760635").then(n.bind(null,"659f"))},meta:{transitionName:"fade"}},{path:"/404",name:"not-found",component:function(){return n.e("chunk-7efb1142").then(n.bind(null,"6c37"))},meta:{transitionName:"fade"}},{path:"/error",name:"error",component:function(){return n.e("chunk-182c3f16").then(n.bind(null,"4c00"))},meta:{transitionName:"fade"}},{path:"*",redirect:"/404",meta:{transitionName:"fade"}}];a["default"].use(s["a"]),a["default"].use(c["a"]);var o=new s["a"]({mode:"history",base:"/admin",routes:r});o.beforeEach((function(e,t,n){i["a"].state.auth?"login"===e.name?n({path:t.path}):n():"login"===e.name||"password-reset"===e.name||"send-password-reset"===e.name||"error"===e.name?n():n({name:"login"})})),t["a"]=o},bd9b:function(e,t,n){"use strict";var a=n("42a3"),s=n.n(a);s.a},be71:function(e,t,n){"use strict";var a=n("8118"),s=n.n(a);s.a},cc1b:function(e,t,n){"use strict";var a=n("366d"),s=n.n(a);s.a},d8ea:function(e,t,n){},e361:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collapse"},[n("div",{staticClass:"expand"},[e.reverse?n("div",[n("div",{staticClass:"collapse-item"},[n("div",{ref:"content",staticClass:"collapse-content"},[e._t("body")],2),n("div",{ref:"header",staticClass:"collapse-header"},[e._t("header")],2)])]):n("div",[n("div",{staticClass:"collapse-item"},[n("div",{ref:"header",staticClass:"collapse-header"},[e._t("header")],2),n("div",{ref:"content",staticClass:"collapse-content"},[e._t("body")],2)])])])])},s=[],i={name:"Collapse",props:{show:{type:Boolean,default:!0},useIcon:{type:Boolean,default:!0},reverse:{type:Boolean,default:!1}},data:function(){return{isOpen:!0,content:{},header:{}}},mounted:function(){var e=this;this.content=this.$refs.content,this.header=this.$refs.header,this.$nextTick((function(){setTimeout((function(){e.addListener(),e.setDefaults()}),0)}))},methods:{addListener:function(){var e=this;if(this.useIcon){var t=this.header.querySelector(".feather-chevron-down");t&&t.addEventListener("click",(function(){e.collapse(t)}))}else this.header.addEventListener("click",(function(){e.collapse(e.header.querySelector("i"))}))},setDefaults:function(){if(this.show){var e=this.content.getBoundingClientRect().height,t=35*this.content.querySelectorAll(".field").length;this.content.style.maxHeight=e+t+40+"px"}else this.isOpen=!1,this.content.style.maxHeight="0px"},collapse:function(e){this.isOpen||"0px"===this.content.style.maxHeight?this.isOpen?this.content.style.maxHeight="0px":this.content.style.maxHeight=this.calcHeight(this.content)+"px":this.content.style.maxHeight="0px",e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"),this.isOpen=!this.isOpen},calcHeight:function(e){for(var t=e.children,n=0,a=0;a<t.length;a++)n+=t[a].clientHeight;return n}}},c=i,r=(n("bd9b"),n("2877")),o=Object(r["a"])(c,a,s,!1,null,"26a80e35",null);t["a"]=o.exports}});
//# sourceMappingURL=app.fb210ed2.js.map