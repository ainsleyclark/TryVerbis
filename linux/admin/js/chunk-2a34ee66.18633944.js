(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a34ee66"],{"4c2d":function(t,e,a){"use strict";var r=a("cdcc"),s=a.n(r);s.a},"90f8":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},t._l(t.breadcrumbs,(function(e){return a("li",{key:e.url,staticClass:"breadcrumbs-item"},[a("router-link",{staticClass:"breadcrumbs-link",class:{"breadcrumbs-link-active":e.active},attrs:{to:e.url}},[t._v(t._s(e.name)+" ")])],1)})),0)])},s=[],c=(a("4160"),a("b0c0"),a("ac1f"),a("5319"),a("1276"),a("159b"),{name:"Breadcrumbs",data:function(){return{breadcrumbs:[]}},beforeMount:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{updateList:function(){var t=this;this.breadcrumbs=[];var e=this.$route.fullPath,a=e.split("/");if("home"===this.$route.name)this.breadcrumbs.push({name:"Home",url:"/",active:!0});else{var r="",s=!0;a.forEach((function(e){var a;r+=e+"/",s?(a=r,s=!1):a=r.replace(/\/$/,""),e=e.split("?")[0],t.breadcrumbs.push({name:""===e?"Home":t.capitalize(e),url:a,active:t.$route.fullPath===a})}))}},capitalize:function(t){return t.replace(/(?:^|\s|["'([{])+\S/g,(function(t){return t.toUpperCase()}))}}}),n=c,i=(a("bf3c"),a("2877")),u=Object(i["a"])(n,r,s,!1,null,"56e8bec2",null);e["a"]=u.exports},a71d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"trans-fade-quick",mode:"out-in"}},[t.show?a("div",{staticClass:"alert alert-background",class:"alert-"+t.colour},[a("div",{staticClass:"alert-icon"},["error"===t.type?a("i",{staticClass:"feather feather-alert-triangle"}):t._e(),"warning"===t.type?a("i",{staticClass:"feather feather-alert-circle"}):t._e(),"success"===t.type?a("i",{staticClass:"feather feather-check-circle"}):t._e()]),a("div",{staticClass:"alert-text"},[t._t("default")],2),a("button",{staticClass:"alert-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.show=!1}}},[a("i",{staticClass:"feather feather-x"})])]):t._e()])},s=[],c={name:"Alert",props:{colour:{type:String,default:""},type:{type:String,default:"error"}},data:function(){return{show:!0}}},n=c,i=(a("4c2d"),a("2877")),u=Object(i["a"])(n,r,s,!1,null,null,null);e["a"]=u.exports},b97b:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"auth-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("Home")]),a("Breadcrumbs"),a("Alert",{attrs:{colour:"green"}},[t._t("default",[a("strong",[t._v("Welcome back "+t._s(t.getUserInfo["first_name"]))])])],2)],1)])])])},s=[],c=a("90f8"),n=a("a71d"),i={name:"Home",components:{Alert:n["a"],Breadcrumbs:c["a"]},data:function(){return{}},methods:{}},u=i,l=a("2877"),o=Object(l["a"])(u,r,s,!1,null,"5a3c8150",null);e["default"]=o.exports},bf3c:function(t,e,a){"use strict";var r=a("b97b"),s=a.n(r);s.a},cdcc:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2a34ee66.18633944.js.map