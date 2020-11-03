(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26eed886"],{"0bff":function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("section",{staticClass:"auth reset-password"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row auth-row"},[r("div",{staticClass:"col-12"},[t.getSite.logo?r("figure",{staticClass:"auth-logo"},[r("img",{attrs:{src:t.getSiteUrl+t.getSite.logo}})]):t._e(),r("div",{staticClass:"auth-card"},[r("div",{staticClass:"auth-card-cont"},[t._m(0),r("form",{staticClass:"form form-center"},[r("FormGroup",{attrs:{error:t.errors["new_password"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",autocomplete:"new-password",placeholder:"New password*"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),r("FormGroup",{attrs:{error:t.errors["confirm_password"]}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],staticClass:"form-input",attrs:{type:"password",autocomplete:"new-password",placeholder:"Confirm password*"},domProps:{value:t.confirmPassword},on:{input:function(s){s.target.composing||(t.confirmPassword=s.target.value)}}})]),r("router-link",{staticClass:"auth-link",attrs:{to:{name:"login"}}},[t._v("Back to login")]),r("div",{staticClass:"auth-btn-cont"},[r("button",{staticClass:"btn btn-arrow btn-transparent btn-arrow",class:{"btn-loading":t.doingAxios},attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),t.doReset(s)}}},[t._v("Reset")])])],1)])])])])])])},o=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"auth-text"},[r("h2",[t._v("Forgot password?")]),r("p",[t._v("Enter your new password below.")])])}],a=(r("4160"),r("d3b7"),r("159b"),r("d7f8")),n={name:"ResetPassword",title:"Reset Password",components:{FormGroup:a["a"]},data:function(){return{doingAxios:!1,password:"",confirmPassword:"",token:"",errors:[]}},mounted:function(){this.token=this.$route.params.token,this.doVerify()},methods:{doVerify:function(){var t=this;this.axios.get("/password/verify/"+this.token).catch((function(){t.$router.push({name:"login"})}))},doReset:function(){var t=this;this.doingAxios=!0,this.axios.post("/password/reset",{new_password:this.password,confirm_password:this.confirmPassword,token:this.token}).then((function(){t.$router.push({name:"login",query:{reset:"true"}})})).catch((function(s){if(t.helpers.checkServer(s),400===s.response.status)return t.validate(s.response.data.data.errors),void t.$noty.error("Fix the errors before resetting your password.");t.helpers.handleResponse(s)})).finally((function(){setTimeout((function(){t.doingAxios=!1}),t.timeoutDelay)}))},validate:function(t){var s=this;this.errors={},t.forEach((function(t){s.$set(s.errors,t.key,t.message)}))}}},i=n,c=(r("839f"),r("2877")),u=Object(c["a"])(i,e,o,!1,null,"7969ed85",null);s["default"]=u.exports},"839f":function(t,s,r){"use strict";var e=r("a7c2"),o=r.n(e);o.a},a7c2:function(t,s,r){},d7f8:function(t,s,r){"use strict";var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"form-group",class:{"form-group-error":t.getError}},[r("label",{staticClass:"form-label"},[t._v(t._s(t.label))]),t._t("default"),r("transition",{attrs:{name:"trans-fade-height"}},[t.getError?r("span",{staticClass:"field-message field-message-warning"},[t._v(t._s(t.getError))]):t._e()])],2)},o=[],a={name:"FormGroup",props:{label:{type:String,default:""},error:{type:String,default:""}},data:function(){return{show:!0}},computed:{getError:function(){return""!==this.error&&this.error}}},n=a,i=r("2877"),c=Object(i["a"])(n,e,o,!1,null,"715e7f67",null);s["a"]=c.exports}}]);
//# sourceMappingURL=chunk-26eed886.234b2464.js.map