(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-833acc9c"],{e22f:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));e("4160"),e("d3b7"),e("159b");var s={data:function(){return{doingAxios:!0,saving:!1,errors:{},data:{}}},mounted:function(){this.getOptions()},methods:{getOptions:function(){var t=this;this.axios.get("/options").then((function(a){t.data=a.data.data})).catch((function(a){t.helpers.handleResponse(a)})).finally((function(){"function"==typeof t.runAfterGet&&t.runAfterGet(),setTimeout((function(){t.doingAxios=!1}),t.axiosTimeout?200:0)}))},save:function(){var t=this;this.saving=!0,"function"==typeof this.runBeforeSave&&this.runBeforeSave(),console.log(this.data),this.axios.post("/options",this.data).then((function(){t.errors=[],t.$noty.success("Site options updated successfully.")})).catch((function(a){if(t.helpers.checkServer(a),400===a.response.status)return t.validate(a.response.data.data.errors),t.$noty.error(t.errorMsg),void t.setAllHeight();t.helpers.handleResponse(a)})).finally((function(){setTimeout((function(){t.saving=!1}),100),t.axios.get("/site").then((function(a){t.$store.commit("setSite",a.data.data)}))}))},validate:function(t){var a=this;this.errors={},t.forEach((function(t){a.$set(a.errors,t.key,t.message)}))}}}},f729:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"auth-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("header",{staticClass:"header header-with-actions header-margin-large"},[e("div",{staticClass:"header-title"},[e("h1",[t._v("Seo & Meta Settings")]),e("Breadcrumbs")],1),e("div",{staticClass:"header-actions"},[e("button",{staticClass:"btn btn-fixed-height btn-orange btn-with-icon",class:{"btn-loading":t.saving},on:{click:function(a){return a.preventDefault(),t.save(a)}}},[t._v("Update settings")])])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.doingAxios&&t.loadingMeta,expression:"doingAxios && loadingMeta"}],staticClass:"media-spinner spinner-container"},[e("div",{staticClass:"spinner spinner-large spinner-grey"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.doingAxios&&!t.loadingMeta,expression:"!doingAxios && !loadingMeta"}],staticClass:"row trans-fade-in-anim"},[e("div",{staticClass:"col-12"},[e("h6",{staticClass:"margin"},[t._v("Visibility")]),e("div",{staticClass:"card card-small-box-shadow card-expand"},[e("div",{staticClass:"collapse-border-bottom"},[e("div",{staticClass:"card-header card-header-block"},[e("div",[e("h4",{staticClass:"card-title"},[t._v("Public")]),e("p",[t._v("By disabling public, no social media meta data will be outputted and a "),e("code",{domProps:{textContent:t._s("<meta name='robots' content='noindex'>")}}),t._v(" will be placed globally.")])]),e("div",{staticClass:"toggle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data["seo_public"],expression:"data['seo_public']"}],staticClass:"toggle-switch",attrs:{type:"checkbox",id:"site-public","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(t.data["seo_public"])?t._i(t.data["seo_public"],null)>-1:t.data["seo_public"]},on:{change:function(a){var e=t.data["seo_public"],s=a.target,i=!!s.checked;if(Array.isArray(e)){var n=null,o=t._i(e,n);s.checked?o<0&&t.$set(t.data,"seo_public",e.concat([n])):o>-1&&t.$set(t.data,"seo_public",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.data,"seo_public",i)}}}),e("label",{attrs:{for:"site-public"}})])])])])]),e("div",{staticClass:"col-12"},[e("h6",{staticClass:"margin"},[t._v("Global meta")]),t.loadingMeta?t._e():e("div",{staticClass:"card card-small-box-shadow card-expand"},[e("MetaForm",{attrs:{meta:t.meta},on:{update:t.updateMeta}})],1)])])])])},i=[],n=(e("caad"),e("2532"),e("90f8")),o=e("e22f"),r=e("a877"),c={name:"SeoMeta",mixins:[o["a"]],components:{MetaForm:r["a"],Breadcrumbs:n["a"]},data:function(){return{errorMsg:"Fix the errors before saving SEO & Meta settings.",successMsg:"Seo & Meta options updated successfully.",showImageModal:!1,selectedImageType:"",facebookImage:!1,twitterImage:!1,meta:{},loadingMeta:!0}},methods:{runAfterGet:function(){for(var t in this.data)t.includes("meta_")&&this.$set(this.meta,t,this.data[t]);this.loadingMeta=!1},updateMeta:function(t,a){this.$set(this.data,a,t)}}},d=c,l=e("2877"),u=Object(l["a"])(d,s,i,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-833acc9c.baf3e9aa.js.map