(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5749d1cc"],{"0a8b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"auth-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("header",{staticClass:"header header-with-actions header-margin-large"},[a("div",{staticClass:"header-title"},[a("h1",[t._v("Code Injection")]),a("Breadcrumbs")],1),a("div",{staticClass:"header-actions"},[a("button",{staticClass:"btn btn-fixed-height btn-orange",class:{"btn-loading":t.saving},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v(" Update "),a("span",{staticClass:"btn-hide-text-mob"},[t._v("Settings")])])])])]),t._m(0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[t._v("Header")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":t.errors["codeinjection_head"]},attrs:{show:!0},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[t._v("Head")]),a("p",[t._v("Any code inputted here will be injected the "),a("code",{domProps:{innerHTML:t._s("{{ verbisHead }}")}}),t._v(" of the site.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("prism-editor",{staticClass:"prism",attrs:{highlight:t.highlighter,"line-numbers":""},model:{value:t.data["codeinjection_head"],callback:function(e){t.$set(t.data,"codeinjection_head",e)},expression:"data['codeinjection_head']"}})],1)]},proxy:!0}])})],1),a("h6",{staticClass:"margin"},[t._v("Footer")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":t.errors["codeinjection_foot"]},attrs:{show:!0},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[t._v("Foot")]),a("p",[t._v("Any code inputted here will be injected to the "),a("code",{domProps:{innerHTML:t._s("{{ verbisFooter }}")}}),t._v(" before the closing body tag.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("prism-editor",{staticClass:"prism",attrs:{highlight:t.highlighter,"line-numbers":""},model:{value:t.data["codeinjection_foot"],callback:function(e){t.$set(t.data,"codeinjection_foot",e)},expression:"data['codeinjection_foot']"}})],1)]},proxy:!0}])})],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-cont"},[a("h2",[t._v("How to use")]),a("p",[t._v("Code injection allows you to inject a small snippet of HTML into your site. It can be a css override, analytics of a block javascript. To insert code into a specific page, visit the page in the resources section.")])])])}],n=a("90f8"),r=a("e22f"),o=a("8c7a"),c=(a("6cf3"),a("e361")),d={name:"CodeInjection",title:"Code Injection",mixins:[r["a"]],components:{Breadcrumbs:n["a"],Collapse:c["a"]},data:function(){return{errorMsg:"Fix the errors before saving code injection.",successMsg:"Code injection updated successfully."}},methods:{highlighter:function(t){return Object(o["highlight"])(t,o["languages"].html,"html")}}},u=d,l=(a("79be"),a("2877")),h=Object(l["a"])(u,s,i,!1,null,"1914c5cd",null);e["default"]=h.exports},"5ee2":function(t,e,a){"use strict";var s=a("f836"),i=a.n(s);i.a},"6cf3":function(t,e){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup["tag"].inside["attr-value"].inside["entity"]=Prism.languages.markup["entity"],Prism.languages.markup["doctype"].inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes["title"]=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,e){var a={};a["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};s["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return t})),"i"),lookbehind:!0,greedy:!0,inside:s},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml},"79be":function(t,e,a){"use strict";var s=a("dd41"),i=a.n(s);i.a},"7db0":function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").find,n=a("44d2"),r=a("ae40"),o="find",c=!0,d=r(o);o in[]&&Array(1)[o]((function(){c=!1})),s({target:"Array",proto:!0,forced:c||!d},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},"90f8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},t._l(t.breadcrumbs,(function(e){return a("li",{key:e.url,staticClass:"breadcrumbs-item"},[a("router-link",{staticClass:"breadcrumbs-link",class:{"breadcrumbs-link-active":e.active},attrs:{to:e.url}},[t._v(t._s(e.name)+" ")])],1)})),0)])},i=[],n=(a("7db0"),a("4160"),a("b0c0"),a("ac1f"),a("5319"),a("1276"),a("159b"),{name:"Breadcrumbs",data:function(){return{breadcrumbs:[]}},beforeMount:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{updateList:function(){var t=this;this.breadcrumbs=[];var e=this.$route.fullPath,a=e.split("/");if("home"===this.$route.name)this.breadcrumbs.push({name:"Home",url:"/",active:!0});else{var s="",i=!0;a.forEach((function(e){var a;s+=e+"/",i?(a=s,i=!1):a=s.replace(/\/$/,""),e=e.split("?")[0],"resources"===e&&"settings"===e||t.breadcrumbs.push({name:""===e?"Home":t.capitalize(e),url:a,active:t.$route.fullPath===a})}))}},addPage:function(){},getRoute:function(t){return this.$router.options.routes.find((function(e){return e.name===t}))},capitalize:function(t){return t.replace(/(?:^|\s|["'([{])+\S/g,(function(t){return t.toUpperCase()}))}}}),r=n,o=(a("5ee2"),a("2877")),c=Object(o["a"])(r,s,i,!1,null,"7d86a761",null);e["a"]=c.exports},dd41:function(t,e,a){},e22f:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("4160"),a("d3b7"),a("159b");var s={data:function(){return{doingAxios:!0,saving:!1,errors:{},data:{}}},mounted:function(){this.getOptions()},methods:{getOptions:function(){var t=this;this.axios.get("/options").then((function(e){t.data=e.data.data})).catch((function(e){t.helpers.handleResponse(e)})).finally((function(){"function"==typeof t.runAfterGet&&t.runAfterGet(),setTimeout((function(){t.doingAxios=!1}),t.axiosTimeout?200:0)}))},save:function(){var t=this;this.saving=!0,"function"==typeof this.runBeforeSave&&this.runBeforeSave(),this.axios.post("/options",this.data).then((function(){t.errors=[],t.$noty.success("Site options updated successfully.")})).catch((function(e){if(t.helpers.checkServer(e),400===e.response.status)return t.validate(e.response.data.data.errors),t.$noty.error(t.errorMsg),void t.setAllHeight();t.helpers.handleResponse(e)})).finally((function(){setTimeout((function(){t.saving=!1}),t.timeoutDelay),setTimeout((function(){t.axios.get("/site").then((function(e){t.$store.commit("setSite",e.data.data)}))}),500)}))},validate:function(t){var e=this;this.errors={},t.forEach((function(t){e.$set(e.errors,t.key,t.message)}))}}}},f836:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5749d1cc.e3cdc44c.js.map