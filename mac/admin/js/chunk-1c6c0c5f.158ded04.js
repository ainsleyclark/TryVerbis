(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c6c0c5f"],{"32ed":function(e,t,a){"use strict";var s=a("91b8"),i=a.n(s);i.a},"60cd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"auth-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("header",{staticClass:"header header-with-actions header-margin-large"},[a("div",{staticClass:"header-title"},[a("h1",[e._v("Performance")]),a("Breadcrumbs")],1),a("div",{staticClass:"header-actions"},[a("button",{staticClass:"btn btn-fixed-height btn-orange btn-with-icon",class:{"btn-loading":e.saving},on:{click:function(t){return t.preventDefault(),e.save(t)}}},[e._v("Update settings")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.doingAxios,expression:"doingAxios"}],staticClass:"media-spinner spinner-container"},[a("div",{staticClass:"spinner spinner-large spinner-grey"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.doingAxios,expression:"!doingAxios"}],staticClass:"row trans-fade-in-anim"},[a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[e._v("Cache control")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["cache_frontend"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Cache assets?")]),a("p",[e._v("By ticking the box, cache headers will be sent from the Verbis server with the expiration times & extensions set below.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["cache_frontend"],expression:"data['cache_frontend']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"cache-frontend",checked:"","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["cache_frontend"])?e._i(e.data["cache_frontend"],null)>-1:e.data["cache_frontend"]},on:{change:function(t){var a=e.data["cache_frontend"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"cache_frontend",a.concat([r])):n>-1&&e.$set(e.data,"cache_frontend",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"cache_frontend",i)}}}),a("label",{attrs:{for:"cache-frontend"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["cache_frontend_request"]||e.errors["cache_frontend_seconds"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Expiration")]),a("p",[e._v("Set an duration in seconds for a duration to set the caching headers.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Request directives"}},[a("div",{staticClass:"form-select-cont form-input"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:e.data["cache_frontend_request"],expression:"data['cache_frontend_request']",modifiers:{number:!0}}],staticClass:"form-select",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.$set(e.data,"cache_frontend_request",t.target.multiple?a:a[0])},e.getRequestMessage]}},[a("option",{attrs:{selected:"",value:"max-age"}},[e._v("max-age")]),a("option",{attrs:{value:"max-stale"}},[e._v("max-stale")]),a("option",{attrs:{value:"min-fresh"}},[e._v("min-fresh")]),a("option",{attrs:{value:"no-cache"}},[e._v("no-cache")]),a("option",{attrs:{value:"no-store"}},[e._v("no-store")]),a("option",{attrs:{value:"no-transform"}},[e._v("no-store")]),a("option",{attrs:{value:"only-if-cached"}},[e._v("only-if-cached")])])]),a("p",[e._v(e._s(e.requestMessage)+" Source: "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control",target:"_blank"}},[e._v("mozilla.org")])])]),a("FormGroup",{attrs:{label:"Maximum age*",error:e.errors["cache_frontend_seconds"]}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.data["cache_frontend_seconds"],expression:"data['cache_frontend_seconds']",modifiers:{number:!0}}],staticClass:"form-input form-input-white",attrs:{type:"number"},domProps:{value:e.data["cache_frontend_seconds"]},on:{input:function(t){t.target.composing||e.$set(e.data,"cache_frontend_seconds",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("Enter a maximum age (in seconds) to cache the assets. "),a("b",[e._v("Duration: "),a("span",[e._v(e._s(e._f("duration")([e.data["cache_frontend_seconds"],"seconds"],"humanize")))])])])])],1)]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["cache_frontend_extension"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("File extensions")]),a("p",[e._v("Assets can be cached by inputting file extensions below, if the file extension is not in the list, it will be ignored.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"File extensions",error:e.errors["cache_frontend_extension"]}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.cacheFileExtension,expression:"cacheFileExtension"}],staticClass:"form-input form-input-white",attrs:{rows:"12",type:"text"},domProps:{value:e.cacheFileExtension},on:{input:function(t){t.target.composing||(e.cacheFileExtension=t.target.value)}}}),a("p",[e._v("Enter file extensions types separated by a new line. "),a("b",[e._v("Note:")]),e._v(" no need to include the dot (.)")])])],1)]},proxy:!0}])})],1)]),a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[e._v("Gzip compression")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["gzip"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Use Gzip compression?")]),a("p",[e._v("By ticking the box, the Verbis server will use gzip compression for assets.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["gzip"],expression:"data['gzip']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"gzip",checked:"","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["gzip"])?e._i(e.data["gzip"],null)>-1:e.data["gzip"]},on:{change:function(t){var a=e.data["gzip"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"gzip",a.concat([r])):n>-1&&e.$set(e.data,"gzip",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"gzip",i)}}}),a("label",{attrs:{for:"gzip"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["gzip_compression"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Compression")]),a("p",[e._v("Set the default compression amount.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Compression amount"}},[a("div",{staticClass:"form-select-cont form-input"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:e.data["gzip_compression"],expression:"data['gzip_compression']",modifiers:{number:!0}}],staticClass:"form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var a="_value"in t?t._value:t.value;return e._n(a)}));e.$set(e.data,"gzip_compression",t.target.multiple?a:a[0])}}},[a("option",{attrs:{selected:"",value:"best-compression"}},[e._v("Best compression")]),a("option",{attrs:{value:"best-speed"}},[e._v("Best speed")]),a("option",{attrs:{value:"default-compression"}},[e._v("Default compression")])])])])],1)]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["gzip_use_paths"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Use excluded paths?")]),a("p",[e._v("The default way to set excluded directives for Gzip is to use fiel extensions, if you would like to use paths, check the toggle.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["gzip_use_paths"],expression:"data['gzip_use_paths']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"gzip-use-paths","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["gzip_use_paths"])?e._i(e.data["gzip_use_paths"],null)>-1:e.data["gzip_use_paths"]},on:{change:function(t){var a=e.data["gzip_use_paths"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"gzip_use_paths",a.concat([r])):n>-1&&e.$set(e.data,"gzip_use_paths",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"gzip_use_paths",i)}}}),a("label",{attrs:{for:"gzip-use-paths"}})])])]},proxy:!0}])}),e.data["gzip_use_paths"]?a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["gzip_excluded_extensions"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Excluded file extensions")]),a("p",[e._v("Set any excluded file extensions to be ignored by gzip compression, such as "),a("code",[e._v("pdf")])])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Excluded file extensions",error:e.errors["gzip_excluded_extensions"]}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.gzipExcludedExtensions,expression:"gzipExcludedExtensions"}],staticClass:"form-input form-input-white",attrs:{rows:"12",type:"text"},domProps:{value:e.gzipExcludedExtensions},on:{input:function(t){t.target.composing||(e.gzipExcludedExtensions=t.target.value)}}}),a("p",[e._v("Enter file extensions types separated by a new line. "),a("b",[e._v("Note:")]),e._v(" no need to include the dot (.)")])])],1)]},proxy:!0}],null,!1,1671952388)}):a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["gzip_excluded_paths"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Excluded paths")]),a("p",[e._v("Set any excluded paths to be ignored by the gzip compression such as "),a("code",[e._v("/assets/pdf")])])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Excluded file extensions",error:e.errors["gzip_excluded_paths"]}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.gzipExcludedPaths,expression:"gzipExcludedPaths"}],staticClass:"form-input form-input-white",attrs:{rows:"12",type:"text"},domProps:{value:e.gzipExcludedPaths},on:{input:function(t){t.target.composing||(e.gzipExcludedPaths=t.target.value)}}}),a("p",[e._v("Enter absolute paths separated by a new line.")])])],1)]},proxy:!0}])})],1)]),a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[e._v("Minify")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_html"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("HTML")]),a("p",[e._v("By ticking the box, the Verbis server will strip the whitespace of HTML files.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_html"],expression:"data['minify_html']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-html","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_html"])?e._i(e.data["minify_html"],null)>-1:e.data["minify_html"]},on:{change:function(t){var a=e.data["minify_html"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_html",a.concat([r])):n>-1&&e.$set(e.data,"minify_html",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_html",i)}}}),a("label",{attrs:{for:"minfy-html"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_js"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Javascript")]),a("p",[e._v("By ticking the box, the Verbis server minify Javascript "),a("code",[e._v(".js")]),e._v(" files.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_js"],expression:"data['minify_js']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-js","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_js"])?e._i(e.data["minify_js"],null)>-1:e.data["minify_js"]},on:{change:function(t){var a=e.data["minify_js"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_js",a.concat([r])):n>-1&&e.$set(e.data,"minify_js",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_js",i)}}}),a("label",{attrs:{for:"minfy-js"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_css"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("CSS")]),a("p",[e._v("By ticking the box, the Verbis server minify CSS "),a("code",[e._v(".css")]),e._v(" files.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_css"],expression:"data['minify_css']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-css","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_css"])?e._i(e.data["minify_css"],null)>-1:e.data["minify_css"]},on:{change:function(t){var a=e.data["minify_css"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_css",a.concat([r])):n>-1&&e.$set(e.data,"minify_css",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_css",i)}}}),a("label",{attrs:{for:"minfy-css"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_svg"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("SVG")]),a("p",[e._v("By ticking the box, the Verbis server minify SVG "),a("code",[e._v(".svg")]),e._v(" images.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_svg"],expression:"data['minify_svg']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-svg","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_svg"])?e._i(e.data["minify_svg"],null)>-1:e.data["minify_svg"]},on:{change:function(t){var a=e.data["minify_svg"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_svg",a.concat([r])):n>-1&&e.$set(e.data,"minify_svg",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_svg",i)}}}),a("label",{attrs:{for:"minfy-svg"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_json"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("JSON")]),a("p",[e._v("By ticking the box, the Verbis server minify SVG "),a("code",[e._v(".json")]),e._v(" files.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_json"],expression:"data['minify_json']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-json","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_json"])?e._i(e.data["minify_json"],null)>-1:e.data["minify_json"]},on:{change:function(t){var a=e.data["minify_json"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_json",a.concat([r])):n>-1&&e.$set(e.data,"minify_json",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_json",i)}}}),a("label",{attrs:{for:"minfy-json"}})])])]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["minify_xml"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("XML")]),a("p",[e._v("By ticking the box, the Verbis server minify XML "),a("code",[e._v(".xml")]),e._v(" files.")])]),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["minify_xml"],expression:"data['minify_xml']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"minfy-xml","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["minify_xml"])?e._i(e.data["minify_xml"],null)>-1:e.data["minify_xml"]},on:{change:function(t){var a=e.data["minify_xml"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);s.checked?n<0&&e.$set(e.data,"minify_xml",a.concat([r])):n>-1&&e.$set(e.data,"minify_xml",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.data,"minify_xml",i)}}}),a("label",{attrs:{for:"minfy-xml"}})])])]},proxy:!0}])})],1)])])])])},i=[],r=(a("a15b"),a("ac1f"),a("1276"),a("90f8")),n=a("e22f"),o=a("e361"),c=a("d7f8"),l={name:"Performance",title:"Performance Settings",mixins:[n["a"]],components:{FormGroup:c["a"],Collapse:o["a"],Breadcrumbs:r["a"]},data:function(){return{errorMsg:"Fix the errors before saving performance settings.",successMsg:"Performance options updated successfully.",requestMessage:"",serverRestart:!0}},methods:{runAfterGet:function(){var e=this.data["cache_frontend_request"];""!==e&&void 0!==e||this.$set(this.data,"cache_frontend_request","max-age");var t=this.data["gzip_compression"];""!==t&&void 0!==t||(console.log("in"),this.$set(this.data,"gzip_compression","default-compression")),this.getRequestMessage()},getRequestMessage:function(){var e=this.data["cache_frontend_request"];switch(e){case"max-age":this.requestMessage="The maximum amount of time a resource is considered fresh. Unlike Expires, this directive is relative to the time of the request.";break;case"s-maxage":this.requestMessage="Overrides max-age or the Expires header, but only for shared caches (e.g., proxies). Ignored by private caches.";break;case"max-stale":this.requestMessage="Indicates the client will accept a stale response. An optional value in seconds indicates the upper limit of staleness the client will accept.";break;case"min-fresh":this.requestMessage="Indicates the client wants a response that will still be fresh for at least the specified number of seconds.";break;case"stale-while-revalidate":this.requestMessage="Indicates the client will accept a stale response, while asynchronously checking in the background for a fresh one. The seconds value indicates how long the client will accept a stale response.";break;case"stale-if-error":this.requestMessage="Indicates the client will accept a stale response if the check for a fresh one fails. The seconds value indicates how long the client will accept the stale response after the initial expiration.";break}}},computed:{cacheFileExtension:{get:function(){var e=this.data["cache_frontend_extensions"];return void 0===e?"":e.join("\n")},set:function(e){this.data["cache_frontend_extensions"]=e.split(/\r\n|\r|\n/)}},gzipExcludedExtensions:{get:function(){var e=this.data["gzip_excluded_extensions"];return void 0===e?"":e.join("\n")},set:function(e){this.data["gzip_excluded_file_extensions"]=e.split(/\r\n|\r|\n/)}},gzipExcludedPaths:{get:function(){var e=this.data["gzip_excluded_paths"];return void 0===e?"":e.join("\n")},set:function(e){this.data["gzip_excluded_paths"]=e.split(/\r\n|\r|\n/)}}}},d=l,u=(a("32ed"),a("2877")),p=Object(u["a"])(d,s,i,!1,null,"253d20a8",null);t["default"]=p.exports},"90f8":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},e._l(e.breadcrumbs,(function(t){return a("li",{key:t.url,staticClass:"breadcrumbs-item"},[a("router-link",{staticClass:"breadcrumbs-link",class:{"breadcrumbs-link-active":t.active},attrs:{to:t.url}},[e._v(e._s(t.name)+" ")])],1)})),0)])},i=[],r=(a("4160"),a("b0c0"),a("ac1f"),a("5319"),a("1276"),a("159b"),{name:"Breadcrumbs",data:function(){return{breadcrumbs:[]}},beforeMount:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{updateList:function(){var e=this;this.breadcrumbs=[];var t=this.$route.fullPath,a=t.split("/");if("home"===this.$route.name)this.breadcrumbs.push({name:"Home",url:"/",active:!0});else{var s="",i=!0;a.forEach((function(t){var a;s+=t+"/",i?(a=s,i=!1):a=s.replace(/\/$/,""),t=t.split("?")[0],e.breadcrumbs.push({name:""===t?"Home":e.capitalize(t),url:a,active:e.$route.fullPath===a})}))}},capitalize:function(e){return e.replace(/(?:^|\s|["'([{])+\S/g,(function(e){return e.toUpperCase()}))}}}),n=r,o=(a("bf3c"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"56e8bec2",null);t["a"]=c.exports},"91b8":function(e,t,a){},a15b:function(e,t,a){"use strict";var s=a("23e7"),i=a("44ad"),r=a("fc6a"),n=a("a640"),o=[].join,c=i!=Object,l=n("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(e){return o.call(r(this),void 0===e?",":e)}})},b97b:function(e,t,a){},bf3c:function(e,t,a){"use strict";var s=a("b97b"),i=a.n(s);i.a},d7f8:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group",class:{"form-group-error":e.getError}},[a("label",{staticClass:"form-label"},[e._v(e._s(e.label))]),e._t("default"),a("transition",{attrs:{name:"trans-fade-height"}},[e.getError?a("span",{staticClass:"field-message field-message-warning"},[e._v(e._s(e.getError))]):e._e()])],2)},i=[],r={name:"FormGroup",props:{label:{type:String,default:""},error:{type:String,default:""}},data:function(){return{show:!0}},computed:{getError:function(){return""!==this.error&&this.error}}},n=r,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,"715e7f67",null);t["a"]=c.exports},e22f:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("4160"),a("d3b7"),a("159b");var s={data:function(){return{doingAxios:!0,saving:!1,errors:{},data:{}}},mounted:function(){this.getOptions()},methods:{getOptions:function(){var e=this;this.axios.get("/options").then((function(t){e.data=t.data.data})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){"function"==typeof e.runAfterGet&&e.runAfterGet(),setTimeout((function(){e.doingAxios=!1}),e.axiosTimeout?200:0)}))},save:function(){var e=this;this.saving=!0,"function"==typeof this.runBeforeSave&&this.runBeforeSave(),console.log(this.data),this.axios.post("/options",this.data).then((function(){e.errors=[],e.$noty.success("Site options updated successfully.")})).catch((function(t){if(e.helpers.checkServer(t),400===t.response.status)return e.validate(t.response.data.data.errors),e.$noty.error(e.errorMsg),void e.setAllHeight();e.helpers.handleResponse(t)})).finally((function(){setTimeout((function(){e.saving=!1}),100),e.axios.get("/site").then((function(t){e.$store.commit("setSite",t.data.data)}))}))},validate:function(e){var t=this;this.errors={},e.forEach((function(e){t.$set(t.errors,e.key,e.message)}))}}}}}]);
//# sourceMappingURL=chunk-1c6c0c5f.158ded04.js.map