(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74283440"],{"46c5":function(e,t,a){},"4c2d":function(e,t,a){"use strict";var s=a("cdcc"),i=a.n(s);i.a},"659f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"auth-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("header",{staticClass:"header header-with-actions header-margin-large"},[a("div",{staticClass:"header-title"},[a("h1",[e._v("Media Settings")]),a("Breadcrumbs")],1),a("div",{staticClass:"header-actions"},[a("button",{staticClass:"btn btn-fixed-height btn-orange btn-with-icon",class:{"btn-loading":e.saving},on:{click:function(t){return t.preventDefault(),e.save(t)}}},[e._v("Update settings")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.doingAxios,expression:"doingAxios"}],staticClass:"media-spinner spinner-container"},[a("div",{staticClass:"spinner spinner-large spinner-grey"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.doingAxios,expression:"!doingAxios"}],staticClass:"row trans-fade-in-anim"},[a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[e._v("General options")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["media_upload_max_size"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Maximum size")]),a("p",[e._v("Set the maximum size (in bytes) of a media item allowed to be uploaded to the library.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Maximum size",error:e.errors["media_upload_max_size"]}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxSize,expression:"maxSize",modifiers:{number:!0}}],staticClass:"form-input form-input-white",attrs:{type:"number"},domProps:{value:e.maxSize},on:{input:function(t){t.target.composing||(e.maxSize=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("If the maximum size is set to 0, no upload file size restrictions will apply.")])])],1)]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["media_upload_max_width"]||e.errors["media_upload_max_height"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Maximum dimensions")]),a("p",[e._v("Set the maximum width & height (in pixels) of a media item allowed to be uploaded to the library.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Maximum width*",error:e.errors["media_upload_max_width"]}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxWidth,expression:"maxWidth",modifiers:{number:!0}}],staticClass:"form-input form-input-white",attrs:{type:"number"},domProps:{value:e.maxWidth},on:{input:function(t){t.target.composing||(e.maxWidth=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("If the maximum width is set to 0, no upload restrictions will apply.")])]),a("FormGroup",{attrs:{label:"Maximum height*",error:e.errors["media_upload_max_height"]}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxHeight,expression:"maxHeight",modifiers:{number:!0}}],staticClass:"form-input form-input-white",attrs:{type:"number"},domProps:{value:e.maxHeight},on:{input:function(t){t.target.composing||(e.maxHeight=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("If the maximum height is set to 0, no upload restrictions will apply.")])])],1)]},proxy:!0}])}),a("Collapse",{staticClass:"collapse-border-bottom",class:{"card-expand-error":e.errors["media_compression"]},attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("div",[a("h4",{staticClass:"card-title"},[e._v("Compression")]),a("p",[e._v("Set the image compression from 0 to 100.")]),a("p",[e._v("100 being the most amount of compression & 0 being none.")])]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"card-body"},[a("FormGroup",{attrs:{label:"Media compression*",error:e.errors["media_compression"]}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.compression,expression:"compression",modifiers:{number:!0}}],staticClass:"form-input form-input-white",attrs:{type:"text"},domProps:{value:e.compression},on:{input:function(t){t.target.composing||(e.compression=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])],1)]},proxy:!0}])}),a("div",{staticClass:"collapse-border-bottom"},[a("div",{staticClass:"card-header"},[e._m(0),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["media_organise_year_month"],expression:"data['media_organise_year_month']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"media-size-year","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["media_organise_year_month"])?e._i(e.data["media_organise_year_month"],null)>-1:e.data["media_organise_year_month"]},on:{change:function(t){var a=e.data["media_organise_year_month"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&e.$set(e.data,"media_organise_year_month",a.concat([r])):o>-1&&e.$set(e.data,"media_organise_year_month",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.data,"media_organise_year_month",i)}}}),a("label",{attrs:{for:"media-size-year"}})])])])],1)]),a("div",{staticClass:"col-12"},[a("h6",{staticClass:"margin"},[e._v("WebP Options")]),a("div",{staticClass:"card card-small-box-shadow card-expand"},[a("div",{staticClass:"collapse-border-bottom"},[a("div",{staticClass:"card-header"},[e._m(1),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["media_convert_webp"],expression:"data['media_convert_webp']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"media-convert-webp","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["media_convert_webp"])?e._i(e.data["media_convert_webp"],null)>-1:e.data["media_convert_webp"]},on:{change:function(t){var a=e.data["media_convert_webp"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&e.$set(e.data,"media_convert_webp",a.concat([r])):o>-1&&e.$set(e.data,"media_convert_webp",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.data,"media_convert_webp",i)}}}),a("label",{attrs:{for:"media-convert-webp"}})])])]),a("div",{staticClass:"collapse-border-bottom"},[a("div",{staticClass:"card-header card-header-block"},[e._m(2),a("div",{staticClass:"toggle"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.data["media_serve_webp"],expression:"data['media_serve_webp']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"media-serve-webp","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.data["media_serve_webp"])?e._i(e.data["media_serve_webp"],null)>-1:e.data["media_serve_webp"]},on:{change:function(t){var a=e.data["media_serve_webp"],s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&e.$set(e.data,"media_serve_webp",a.concat([r])):o>-1&&e.$set(e.data,"media_serve_webp",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.data,"media_serve_webp",i)}}}),a("label",{attrs:{for:"media-serve-webp"}})])])])])]),a("div",{staticClass:"col-12"},[a("h6",[e._v("Image Sizes")]),a("p",[e._v("The image sizes determines the maximum dimensions in pixels when an image is uploaded to the media library.")]),a("transition",{attrs:{name:"trans-fade",mode:"out-in"}},[e.sizes.length?a("div",{staticClass:"card card-small-box-shadow card-expand card-margin-none"},e._l(e.sizes,(function(t,s){return a("Collapse",{key:t.id,staticClass:"collapse-border-bottom",attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"card-title"},[e._v(e._s(t.name))]),a("div",{staticClass:"card-controls"},[a("i",{staticClass:"feather feather-trash-2",on:{click:function(t){return e.deleteSize(s)}}}),a("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[a("div",{ref:"sizes",refInFor:!0,staticClass:"card-body media-sizes"},[a("FormGroup",{attrs:{label:"Key"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sizes[s].key,expression:"sizes[sizeKey].key"}],staticClass:"form-input",attrs:{id:"media-size-key-"+s,type:"text",placeholder:"Enter a key"},domProps:{value:e.sizes[s].key},on:{input:function(t){t.target.composing||e.$set(e.sizes[s],"key",t.target.value)}}}),a("p",[e._v("Set the key used to access the media size in the templates.")])]),a("FormGroup",{attrs:{label:"Name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sizes[s].name,expression:"sizes[sizeKey].name"}],staticClass:"form-input",attrs:{id:"media-size-name-"+s,type:"text",placeholder:"Enter a key"},domProps:{value:e.sizes[s].name},on:{input:function(t){t.target.composing||e.$set(e.sizes[s],"name",t.target.value)}}}),a("p",[e._v("Set the friendly name for the media size.")])]),a("FormGroup",{attrs:{label:"Width"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sizes[s].width,expression:"sizes[sizeKey].width",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"media-size-width-"+s,type:"number",placeholder:"Enter a width"},domProps:{value:e.sizes[s].width},on:{input:function(t){t.target.composing||e.$set(e.sizes[s],"width",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("Set the the width (in pixels) of the image size.")])]),a("FormGroup",{attrs:{label:"Height"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sizes[s].height,expression:"sizes[sizeKey].height",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"media-size-height-"+s,type:"number",placeholder:"Enter a height"},domProps:{value:e.sizes[s].height},on:{input:function(t){t.target.composing||e.$set(e.sizes[s],"height",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("Set the the height (in pixels) of the image size.")])]),a("FormGroup",[a("div",{staticClass:"form-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.sizes[s].crop,expression:"sizes[sizeKey].crop"}],attrs:{type:"checkbox",id:"media-size-crop-"+s,"true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.sizes[s].crop)?e._i(e.sizes[s].crop,null)>-1:e.sizes[s].crop},on:{change:function(t){var a=e.sizes[s].crop,i=t.target,r=!!i.checked;if(Array.isArray(a)){var o=null,n=e._i(a,o);i.checked?n<0&&e.$set(e.sizes[s],"crop",a.concat([o])):n>-1&&e.$set(e.sizes[s],"crop",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.sizes[s],"crop",r)}}}),a("label",{attrs:{for:"media-size-crop-"+s}},[a("i",{staticClass:"fal fa-check"})]),a("div",{staticClass:"form-checkbox-text"},[e._v("Crop image?")])])])],1)]},proxy:!0}],null,!0)})})),1):a("div",[a("Alert",{attrs:{type:"warning",colour:"orange"}},[e._v(" No media sizes found, consider making some to use with the "),a("code",{domProps:{textContent:e._s("<picture>")}}),e._v(" element for increase speed. ")])],1)]),a("div",{staticClass:"media-btn-cont"},[a("button",{staticClass:"btn",on:{click:e.addImageSize}},[e._v("Add image size")])])],1)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",{staticClass:"card-title"},[e._v("Organise by date")]),a("p",[e._v("By ticking the box, the Verbis server will organise media items by year & month, e.g. /uploads/2020/01")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",{staticClass:"card-title"},[e._v("Convert to Webp's")]),a("p",[e._v("By ticking the box, the Verbis media library will automatically convert Jpg's & Png's to Webp's on upload.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h4",{staticClass:"card-title"},[e._v("Serve Webp images")]),a("p",[e._v("By ticking the box, the Verbis server will automagically serve Webp images if the browser supports it.")])])}],r=(a("4160"),a("a434"),a("b0c0"),a("159b"),a("90f8")),o=a("e22f"),n=a("e361"),c=a("d7f8"),d=a("87f5"),l=a("a71d"),m={name:"Media",title:"Media Settings",mixins:[o["a"],d["a"]],components:{Alert:l["a"],FormGroup:c["a"],Breadcrumbs:r["a"],Collapse:n["a"]},data:function(){return{sizes:[],errorMsg:"Fix the errors before saving media settings.",successMsg:"Media options updated successfully.",axiosTimeout:!0}},methods:{runAfterGet:function(){this.processImageSizes()},runBeforeSave:function(){var e=this,t={};for(var a in this.sizes.forEach((function(a,s){var i=void 0===a.key||""===a.key?"media-size-".concat(s+1):a.key,r=""===a.name||"Enter size"==a.name?"Media size ".concat(s+1):a.name;t[i]=t[i]||{};var o={name:r,width:a.width,height:a.height,crop:a.crop};t[i]=o,o.id=a.id,o.key=i,e.$set(e.sizes,s,o)})),this.helpers.isEmptyObject(t)&&(t=null),t)delete t[a].id,delete t[a].key;this.$delete(this.data,"media_images_sizes"),this.$set(this.data,"media_images_sizes",t)},processImageSizes:function(){for(var e in this.data["media_images_sizes"]){var t=this.data["media_images_sizes"][e];this.sizes.push({key:e,name:t.name,width:t.width,height:t.height,crop:t.crop,id:this.createPassword()})}this.sortImageSizes()},sortImageSizes:function(){this.sizes.sort((function(e,t){return parseFloat(e.width)-parseFloat(t.width)}))},addImageSize:function(){this.sizes.push({crop:!1,width:0,height:0,name:"Enter size"}),this.$nextTick((function(){var e=this.$refs.sizes[this.sizes.length-1];this.helpers.setHeight(e.closest(".collapse-content"))}))},deleteSize:function(e){this.sizes.splice(e,1)}},computed:{maxSize:{get:function(){return this.data["media_upload_max_size"]},set:function(e){console.log(e),""!==e?this.$set(this.data,"media_upload_max_size",e):this.$set(this.data,"media_upload_max_size",null)}},maxWidth:{get:function(){return this.data["media_upload_max_width"]},set:function(e){""===e?this.$set(this.data,"media_upload_max_width",null):this.$set(this.data,"media_upload_max_width",e)}},maxHeight:{get:function(){return this.data["media_upload_max_height"]},set:function(e){""!==e?this.$set(this.data,"media_upload_max_height",e):this.$set(this.data,"media_upload_max_height",null)}},compression:{get:function(){return this.data["media_compression"]},set:function(e){console.log(e),""!==e?this.$set(this.data,"media_compression",e):this.$set(this.data,"media_compression",null)}}}},u=m,h=(a("93ed"),a("2877")),p=Object(h["a"])(u,s,i,!1,null,"f7969798",null);t["default"]=p.exports},"87f5":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s={methods:{createPassword:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@:\\/@£$%=^&&*()_+?><",a=t.length,s=24,i=0;i<s;i++)e+=t.charAt(Math.floor(Math.random()*a));return e}}}},"90f8":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"breadcrumbs"},[a("ul",{staticClass:"breadcrumbs-list"},e._l(e.breadcrumbs,(function(t){return a("li",{key:t.url,staticClass:"breadcrumbs-item"},[a("router-link",{staticClass:"breadcrumbs-link",class:{"breadcrumbs-link-active":t.active},attrs:{to:t.url}},[e._v(e._s(t.name)+" ")])],1)})),0)])},i=[],r=(a("4160"),a("b0c0"),a("ac1f"),a("5319"),a("1276"),a("159b"),{name:"Breadcrumbs",data:function(){return{breadcrumbs:[]}},beforeMount:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{updateList:function(){var e=this;this.breadcrumbs=[];var t=this.$route.fullPath,a=t.split("/");if("home"===this.$route.name)this.breadcrumbs.push({name:"Home",url:"/",active:!0});else{var s="",i=!0;a.forEach((function(t){var a;s+=t+"/",i?(a=s,i=!1):a=s.replace(/\/$/,""),t=t.split("?")[0],e.breadcrumbs.push({name:""===t?"Home":e.capitalize(t),url:a,active:e.$route.fullPath===a})}))}},capitalize:function(e){return e.replace(/(?:^|\s|["'([{])+\S/g,(function(e){return e.toUpperCase()}))}}}),o=r,n=(a("bf3c"),a("2877")),c=Object(n["a"])(o,s,i,!1,null,"56e8bec2",null);t["a"]=c.exports},"93ed":function(e,t,a){"use strict";var s=a("46c5"),i=a.n(s);i.a},a434:function(e,t,a){"use strict";var s=a("23e7"),i=a("23cb"),r=a("a691"),o=a("50c4"),n=a("7b0b"),c=a("65f0"),d=a("8418"),l=a("1dde"),m=a("ae40"),u=l("splice"),h=m("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,f=Math.min,v=9007199254740991,_="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u||!h},{splice:function(e,t){var a,s,l,m,u,h,g=n(this),b=o(g.length),y=i(e,b),x=arguments.length;if(0===x?a=s=0:1===x?(a=0,s=b-y):(a=x-2,s=f(p(r(t),0),b-y)),b+a-s>v)throw TypeError(_);for(l=c(g,s),m=0;m<s;m++)u=y+m,u in g&&d(l,m,g[u]);if(l.length=s,a<s){for(m=y;m<b-s;m++)u=m+s,h=m+a,u in g?g[h]=g[u]:delete g[h];for(m=b;m>b-s+a;m--)delete g[m-1]}else if(a>s)for(m=b-s;m>y;m--)u=m+s-1,h=m+a-1,u in g?g[h]=g[u]:delete g[h];for(m=0;m<a;m++)g[m+y]=arguments[m+2];return g.length=b-s+a,l}})},a71d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"trans-fade-quick",mode:"out-in"}},[e.show?a("div",{staticClass:"alert alert-background",class:"alert-"+e.colour},[a("div",{staticClass:"alert-icon"},["error"===e.type?a("i",{staticClass:"feather feather-alert-triangle"}):e._e(),"warning"===e.type?a("i",{staticClass:"feather feather-alert-circle"}):e._e(),"success"===e.type?a("i",{staticClass:"feather feather-check-circle"}):e._e()]),a("div",{staticClass:"alert-text"},[e._t("default")],2),a("button",{staticClass:"alert-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.show=!1}}},[a("i",{staticClass:"feather feather-x"})])]):e._e()])},i=[],r={name:"Alert",props:{colour:{type:String,default:""},type:{type:String,default:"error"}},data:function(){return{show:!0}}},o=r,n=(a("4c2d"),a("2877")),c=Object(n["a"])(o,s,i,!1,null,null,null);t["a"]=c.exports},b97b:function(e,t,a){},bf3c:function(e,t,a){"use strict";var s=a("b97b"),i=a.n(s);i.a},cdcc:function(e,t,a){},d7f8:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group",class:{"form-group-error":e.getError}},[a("label",{staticClass:"form-label"},[e._v(e._s(e.label))]),e._t("default"),a("transition",{attrs:{name:"trans-fade-height"}},[e.getError?a("span",{staticClass:"field-message field-message-warning"},[e._v(e._s(e.getError))]):e._e()])],2)},i=[],r={name:"FormGroup",props:{label:{type:String,default:""},error:{type:String,default:""}},data:function(){return{show:!0}},computed:{getError:function(){return""!==this.error&&this.error}}},o=r,n=a("2877"),c=Object(n["a"])(o,s,i,!1,null,"715e7f67",null);t["a"]=c.exports},e22f:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("4160"),a("d3b7"),a("159b");var s={data:function(){return{doingAxios:!0,saving:!1,errors:{},data:{}}},mounted:function(){this.getOptions()},methods:{getOptions:function(){var e=this;this.axios.get("/options").then((function(t){e.data=t.data.data})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){"function"==typeof e.runAfterGet&&e.runAfterGet(),setTimeout((function(){e.doingAxios=!1}),e.axiosTimeout?200:0)}))},save:function(){var e=this;this.saving=!0,"function"==typeof this.runBeforeSave&&this.runBeforeSave(),console.log(this.data),this.axios.post("/options",this.data).then((function(){e.errors=[],e.$noty.success("Site options updated successfully.")})).catch((function(t){if(e.helpers.checkServer(t),400===t.response.status)return e.validate(t.response.data.data.errors),e.$noty.error(e.errorMsg),void e.setAllHeight();e.helpers.handleResponse(t)})).finally((function(){setTimeout((function(){e.saving=!1}),100),e.axios.get("/site").then((function(t){e.$store.commit("setSite",t.data.data)}))}))},validate:function(e){var t=this;this.errors={},e.forEach((function(e){t.$set(t.errors,e.key,e.message)}))}}}}}]);
//# sourceMappingURL=chunk-74283440.abace9bb.js.map