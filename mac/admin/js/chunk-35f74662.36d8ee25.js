(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35f74662"],{"29e2":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"auth reset-password"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row auth-row"},[r("div",{staticClass:"col-12"},[t.getSite.logo?r("figure",{staticClass:"auth-logo"},[r("img",{attrs:{src:t.getSiteUrl+t.getSite.logo}})]):t._e(),r("div",{staticClass:"auth-card"},[r("div",{staticClass:"auth-card-cont"},[t._m(0),r("form",{staticClass:"form form-center"},[r("FormGroup",{attrs:{error:t.errors["email"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",attrs:{type:"text",autocomplete:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("router-link",{staticClass:"auth-link",attrs:{to:{name:"login"}}},[t._v("Back to login")]),r("div",{staticClass:"auth-btn-cont"},[r("button",{staticClass:"btn btn-arrow btn-transparent btn-arrow",class:{"btn-loading":t.doingAxios},attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.doReset(e)}}},[t._v("Reset")])])],1)])])])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-text"},[r("h2",[t._v("Forgot password?")]),r("p",[t._v("Enter your email below to get a verification link sent to reset your password.")])])}],o=(r("4160"),r("d3b7"),r("159b"),r("d7f8")),i={name:"SendResetPassword",title:"Reset Password",components:{FormGroup:o["a"]},data:function(){return{doingAxios:!1,email:"",errors:[]}},methods:{doReset:function(){var t=this;this.doingAxios=!0,this.axios.post("/password/email",{email:this.email}).then((function(e){console.log(e.data.message),t.$noty.success("A fresh link has been sent to your email."),t.$router.push({name:"login"})})).catch((function(e){if(t.helpers.checkServer(e),400===e.response.status){var r=e.response.data.data.errors;return r?(t.validate(r),void t.$noty.error("Fix the errors before resetting your password.")):void t.$noty.error("Invalid email address.")}t.helpers.handleResponse(e)})).finally((function(){setTimeout((function(){t.doingAxios=!1}),t.timeoutDelay)}))},validate:function(t){var e=this;this.errors={},t.forEach((function(t){e.$set(e.errors,t.key,t.message)}))}}},n=i,l=(r("3cb7"),r("2877")),c=Object(l["a"])(n,s,a,!1,null,"173b8926",null);e["default"]=c.exports},"3cb7":function(t,e,r){"use strict";var s=r("fe8f"),a=r.n(s);a.a},d7f8:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group",class:{"form-group-error":t.getError}},[r("label",{staticClass:"form-label"},[t._v(t._s(t.label))]),t._t("default"),r("transition",{attrs:{name:"trans-fade-height"}},[t.getError?r("span",{staticClass:"field-message field-message-warning"},[t._v(t._s(t.getError))]):t._e()])],2)},a=[],o={name:"FormGroup",props:{label:{type:String,default:""},error:{type:String,default:""}},data:function(){return{show:!0}},computed:{getError:function(){return""!==this.error&&this.error}}},i=o,n=r("2877"),l=Object(n["a"])(i,s,a,!1,null,"715e7f67",null);e["a"]=l.exports},fe8f:function(t,e,r){}}]);
//# sourceMappingURL=chunk-35f74662.36d8ee25.js.map