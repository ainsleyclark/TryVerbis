(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10fc44d5"],{"057f":function(e,t,i){var a=i("fc6a"),n=i("241c").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(e){try{return n(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==r.call(e)?o(e):n(a(e))}},1148:function(e,t,i){"use strict";var a=i("a691"),n=i("1d80");e.exports="".repeat||function(e){var t=String(n(this)),i="",r=a(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(i+=t);return i}},2532:function(e,t,i){"use strict";var a=i("23e7"),n=i("5a34"),r=i("1d80"),s=i("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(r(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"283e":function(e,t,i){"use strict";var a=i("67c5"),n=i.n(a);n.a},2909:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function n(e){if(Array.isArray(e))return a(e)}i.d(t,"a",(function(){return d}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}i("fb6a"),i("b0c0"),i("25f0");function s(e,t){if(e){if("string"===typeof e)return a(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return n(e)||r(e)||s(e)||o()}},"408a":function(e,t,i){var a=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"4df4":function(e,t,i){"use strict";var a=i("0366"),n=i("7b0b"),r=i("9bdd"),s=i("e95a"),o=i("50c4"),d=i("8418"),c=i("35a1");e.exports=function(e){var t,i,l,u,f,p,h=n(e),m="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,b=void 0!==v,y=c(h),w=0;if(b&&(v=a(v,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&s(y))for(t=o(h.length),i=new m(t);t>w;w++)p=b?v(h[w],w):h[w],d(i,w,p);else for(u=y.call(h),f=u.next,i=new m;!(l=f.call(u)).done;w++)p=b?r(u,v,[l.value,w],!0):l.value,d(i,w,p);return i.length=w,i}},"5a34":function(e,t,i){var a=i("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"67c5":function(e,t,i){},"746f":function(e,t,i){var a=i("428f"),n=i("5135"),r=i("e538"),s=i("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||s(t,e,{value:r.f(e)})}},a434:function(e,t,i){"use strict";var a=i("23e7"),n=i("23cb"),r=i("a691"),s=i("50c4"),o=i("7b0b"),d=i("65f0"),c=i("8418"),l=i("1dde"),u=i("ae40"),f=l("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var i,a,l,u,f,p,b=o(this),y=s(b.length),w=n(e,y),_=arguments.length;if(0===_?i=a=0:1===_?(i=0,a=y-w):(i=_-2,a=m(h(r(t),0),y-w)),y+i-a>g)throw TypeError(v);for(l=d(b,a),u=0;u<a;u++)f=w+u,f in b&&c(l,u,b[f]);if(l.length=a,i<a){for(u=w;u<y-a;u++)f=u+a,p=u+i,f in b?b[p]=b[f]:delete b[p];for(u=y;u>y-a+i;u--)delete b[u-1]}else if(i>a)for(u=y-a;u>w;u--)f=u+a-1,p=u+i-1,f in b?b[p]=b[f]:delete b[p];for(u=0;u<i;u++)b[u+w]=arguments[u+2];return b.length=y-a+i,l}})},a4d3:function(e,t,i){"use strict";var a=i("23e7"),n=i("da84"),r=i("d066"),s=i("c430"),o=i("83ab"),d=i("4930"),c=i("fdbf"),l=i("d039"),u=i("5135"),f=i("e8b5"),p=i("861d"),h=i("825a"),m=i("7b0b"),g=i("fc6a"),v=i("c04e"),b=i("5c6c"),y=i("7c73"),w=i("df75"),_=i("241c"),M=i("057f"),C=i("7418"),x=i("06cf"),k=i("9bf2"),S=i("d1e7"),O=i("9112"),A=i("6eeb"),I=i("5692"),T=i("f772"),j=i("d012"),P=i("90e3"),E=i("b622"),D=i("e538"),N=i("746f"),B=i("d44e"),$=i("69f3"),F=i("b727").forEach,U=T("hidden"),z="Symbol",R="prototype",L=E("toPrimitive"),K=$.set,J=$.getterFor(z),Y=Object[R],W=n.Symbol,G=r("JSON","stringify"),q=x.f,H=k.f,Q=M.f,Z=S.f,V=I("symbols"),X=I("op-symbols"),ee=I("string-to-symbol-registry"),te=I("symbol-to-string-registry"),ie=I("wks"),ae=n.QObject,ne=!ae||!ae[R]||!ae[R].findChild,re=o&&l((function(){return 7!=y(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,i){var a=q(Y,t);a&&delete Y[t],H(e,t,i),a&&e!==Y&&H(Y,t,a)}:H,se=function(e,t){var i=V[e]=y(W[R]);return K(i,{type:z,tag:e,description:t}),o||(i.description=t),i},oe=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},de=function(e,t,i){e===Y&&de(X,t,i),h(e);var a=v(t,!0);return h(i),u(V,a)?(i.enumerable?(u(e,U)&&e[U][a]&&(e[U][a]=!1),i=y(i,{enumerable:b(0,!1)})):(u(e,U)||H(e,U,b(1,{})),e[U][a]=!0),re(e,a,i)):H(e,a,i)},ce=function(e,t){h(e);var i=g(t),a=w(i).concat(he(i));return F(a,(function(t){o&&!ue.call(i,t)||de(e,t,i[t])})),e},le=function(e,t){return void 0===t?y(e):ce(y(e),t)},ue=function(e){var t=v(e,!0),i=Z.call(this,t);return!(this===Y&&u(V,t)&&!u(X,t))&&(!(i||!u(this,t)||!u(V,t)||u(this,U)&&this[U][t])||i)},fe=function(e,t){var i=g(e),a=v(t,!0);if(i!==Y||!u(V,a)||u(X,a)){var n=q(i,a);return!n||!u(V,a)||u(i,U)&&i[U][a]||(n.enumerable=!0),n}},pe=function(e){var t=Q(g(e)),i=[];return F(t,(function(e){u(V,e)||u(j,e)||i.push(e)})),i},he=function(e){var t=e===Y,i=Q(t?X:g(e)),a=[];return F(i,(function(e){!u(V,e)||t&&!u(Y,e)||a.push(V[e])})),a};if(d||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=P(e),i=function(e){this===Y&&i.call(X,e),u(this,U)&&u(this[U],t)&&(this[U][t]=!1),re(this,t,b(1,e))};return o&&ne&&re(Y,t,{configurable:!0,set:i}),se(t,e)},A(W[R],"toString",(function(){return J(this).tag})),A(W,"withoutSetter",(function(e){return se(P(e),e)})),S.f=ue,k.f=de,x.f=fe,_.f=M.f=pe,C.f=he,D.f=function(e){return se(E(e),e)},o&&(H(W[R],"description",{configurable:!0,get:function(){return J(this).description}}),s||A(Y,"propertyIsEnumerable",ue,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:W}),F(w(ie),(function(e){N(e)})),a({target:z,stat:!0,forced:!d},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var i=W(t);return ee[t]=i,te[i]=t,i},keyFor:function(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!d,sham:!o},{create:le,defineProperty:de,defineProperties:ce,getOwnPropertyDescriptor:fe}),a({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:pe,getOwnPropertySymbols:he}),a({target:"Object",stat:!0,forced:l((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(m(e))}}),G){var me=!d||l((function(){var e=W();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));a({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,i){var a,n=[e],r=1;while(arguments.length>r)n.push(arguments[r++]);if(a=t,(p(t)||void 0!==e)&&!oe(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!oe(t))return t}),n[1]=t,G.apply(null,n)}})}W[R][L]||O(W[R],L,W[R].valueOf),B(W,z),j[U]=!0},a630:function(e,t,i){var a=i("23e7"),n=i("4df4"),r=i("1c7e"),s=!r((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:n})},ab13:function(e,t,i){var a=i("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},b680:function(e,t,i){"use strict";var a=i("23e7"),n=i("a691"),r=i("408a"),s=i("1148"),o=i("d039"),d=1..toFixed,c=Math.floor,l=function(e,t,i){return 0===t?i:t%2===1?l(e,t-1,i*e):l(e*e,t/2,i)},u=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},f=d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){d.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,i,a,o,d=r(this),f=n(e),p=[0,0,0,0,0,0],h="",m="0",g=function(e,t){var i=-1,a=t;while(++i<6)a+=e*p[i],p[i]=a%1e7,a=c(a/1e7)},v=function(e){var t=6,i=0;while(--t>=0)i+=p[t],p[t]=c(i/e),i=i%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var i=String(p[e]);t=""===t?i:t+s.call("0",7-i.length)+i}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(h="-",d=-d),d>1e-21)if(t=u(d*l(2,69,1))-69,i=t<0?d*l(2,-t,1):d/l(2,t,1),i*=4503599627370496,t=52-t,t>0){g(0,i),a=f;while(a>=7)g(1e7,0),a-=7;g(l(10,a,1),0),a=t-1;while(a>=23)v(1<<23),a-=23;v(1<<a),g(1,1),v(2),m=b()}else g(0,i),g(1<<-t,0),m=b()+s.call("0",f);return f>0?(o=m.length,m=h+(o<=f?"0."+s.call("0",f-o)+m:m.slice(0,o-f)+"."+m.slice(o-f))):m=h+m,m}})},c975:function(e,t,i){"use strict";var a=i("23e7"),n=i("4d64").indexOf,r=i("a640"),s=i("ae40"),o=[].indexOf,d=!!o&&1/[1].indexOf(1,-0)<0,c=r("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:d||!c||!l},{indexOf:function(e){return d?o.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},caad:function(e,t,i){"use strict";var a=i("23e7"),n=i("4d64").includes,r=i("44d2"),s=i("ae40"),o=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!o},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("includes")},d28b:function(e,t,i){var a=i("746f");a("iterator")},e01a:function(e,t,i){"use strict";var a=i("23e7"),n=i("83ab"),r=i("da84"),s=i("5135"),o=i("861d"),d=i("9bf2").f,c=i("e893"),l=r.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var u={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(u[t]=!0),t};c(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,m="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;d(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=h.call(e);if(s(u,e))return"";var i=m?t.slice(7,-1):t.replace(g,"$1");return""===i?void 0:i}}),a({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,i){var a=i("b622");t.f=a},f84c:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("caad"),i("b680");var a={methods:{formatBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var i=1024,a=t<0?0:t,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,r)).toFixed(a))+" "+n[r]},getMediaType:function(e){var t=["image/png","image/jpeg","image/gif","image/webp","image/bmp","image/svg+xml"],i=["video/mpeg","video/mp4","video/webm"];return t.includes(e)?"image":i.includes(e)?"video":"file"}}}},fb0b:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"media"},[e.filters?i("Tabs",{on:{update:e.filterTabs}},[i("template",{slot:"item"},[e._v("Show all")]),i("template",{slot:"item"},[e._v("JPG's")]),i("template",{slot:"item"},[e._v("PNG's")]),i("template",{slot:"item"},[e._v("Files")])],2):e._e(),e.modal?i("div",{staticClass:"media-insert"},[i("h2",[e._v("Insert media item")]),i("div",[e.selectMultiple?i("button",{staticClass:"btn btn-margin-right",on:{click:function(t){e.bulkMode=!0}}},[e._v("Select multiple")]):e._e(),e._t("close"),i("button",{staticClass:"btn btn-green btn-icon-mob",on:{click:e.insertItem}},[i("i",{staticClass:"feather feather-check"}),i("span",[e._v("Insert")])])],2)]):e._e(),i("input",{ref:"file",staticClass:"media-input",attrs:{id:"browse-file",type:"file",multiple:""},on:{change:function(t){return e.addFile(t,!0)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.doingAxios&&e.loadingImages,expression:"doingAxios && loadingImages"}],staticClass:"media-spinner spinner-container"},[i("div",{staticClass:"spinner spinner-large spinner-grey"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.doingAxios,expression:"!doingAxios"}],staticClass:"row media-row trans-fade-in-anim"},[e.options?i("div",{staticClass:"col-12 col-desk-4 col-hd-3 order-desk-last media-col media-side"},[e.selectedMedia?i("div",[i("div",{staticClass:"media-options card card-small-box-shadow card-expand card-expand-full-width card-margin-none"},[i("Collapse",{staticClass:"collapse-border-bottom",scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("h3",{staticClass:"card-title"},[e._v("Options")]),i("div",{staticClass:"card-controls"},[i("i",{staticClass:"feather feather-trash-2",class:{"btn-loading":e.isDeleting},on:{click:function(t){t.preventDefault(),e.showDeleteModal=!0}}}),i("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[i("div",{staticClass:"card-body"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-label",attrs:{for:"media-title"}},[e._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMedia.title,expression:"selectedMedia.title"}],staticClass:"form-input form-input-white",attrs:{id:"media-title",type:"text"},domProps:{value:e.selectedMedia.title},on:{keyup:e.save,input:function(t){t.target.composing||e.$set(e.selectedMedia,"title",t.target.value)}}})]),"file"!==e.getMediaType(e.selectedMedia.type)?i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-label",attrs:{for:"media-alt"}},[e._v("Alternative text")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMedia.alt,expression:"selectedMedia.alt"}],staticClass:"form-input form-input-white",attrs:{id:"media-alt",type:"text"},domProps:{value:e.selectedMedia.alt},on:{keyup:e.save,input:function(t){t.target.composing||e.$set(e.selectedMedia,"alt",t.target.value)}}})]):e._e(),i("div",{staticClass:"form-group"},[i("label",{staticClass:"form-label",attrs:{for:"media-description"}},[e._v("Description")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMedia.description,expression:"selectedMedia.description"}],staticClass:"form-input form-input-white",attrs:{id:"media-description",type:"text"},domProps:{value:e.selectedMedia.description},on:{keyup:e.save,input:function(t){t.target.composing||e.$set(e.selectedMedia,"description",t.target.value)}}})])])]},proxy:!0}],null,!1,3685960482)}),e.modal?e._e():i("Collapse",{staticClass:"collapse-border-bottom",attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("h3",{staticClass:"card-title"},[e._v("Information")]),i("div",{staticClass:"card-controls"},[i("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[i("div",{staticClass:"card-body"},[i("div",{staticClass:"text-cont"},[i("h6",[e._v("Url:")]),i("p",[i("a",{attrs:{href:e.getSiteUrl+e.selectedMedia.url,target:"_blank"}},[e._v(e._s(e.selectedMedia.url))])])]),i("div",{staticClass:"text-cont"},[i("h6",[e._v("Filesize:")]),i("p",[e._v(e._s(e.formatBytes(e.selectedMedia["file_size"])))])]),i("div",{staticClass:"text-cont"},[i("h6",[e._v("Uploaded by:")]),i("p",[e._v(e._s(e.selectedMedia["uploaded_by"]["full_name"]))])]),i("div",{staticClass:"text-cont"},[i("h6",[e._v("Type:")]),i("p",[e._v(e._s(e.selectedMedia.type))])]),i("div",{staticClass:"text-cont text-cont-no-margin"},[i("h6",[e._v("Uploaded at:")]),i("p",[e._v(e._s(e._f("moment")(e.selectedMedia["created_at"],"dddd, MMMM Do YYYY")))])])])]},proxy:!0}],null,!1,1162291960)}),e.selectedMedia.sizes?i("Collapse",{staticClass:"collapse-border-bottom",attrs:{show:!1},scopedSlots:e._u([{key:"header",fn:function(){return[i("div",{staticClass:"card-header"},[i("h3",{staticClass:"card-title"},[e._v("Sizes")]),i("div",{staticClass:"card-controls"},[i("i",{staticClass:"feather feather-chevron-down"})])])]},proxy:!0},{key:"body",fn:function(){return[i("div",{staticClass:"card-body"},e._l(e.sortSizes(e.selectedMedia.sizes),(function(t){return i("div",{key:t.uuid,staticClass:"media-size"},[i("div",{staticClass:"media-size-header"},[i("h4",[e._v(e._s(t["size_name"]))]),i("div",{staticClass:"badge badge-green"},[e._v(e._s(e.formatBytes(t["file_size"])))])]),i("div",{staticClass:"media-size-body"},[i("p",[i("span",[e._v("Crop:")]),e._v(" "+e._s(t.crop))]),i("p",[i("span",[e._v("Url:")]),e._v(" "+e._s(t.url))]),i("p",[i("span",[e._v("Width:")]),e._v(" "+e._s(t.width)+"px")]),i("p",[i("span",[e._v("Height:")]),e._v(" "+e._s(t.height)+"px")])])])})),0)]},proxy:!0}],null,!1,2093837628)}):e._e()],1)]):!e.selectedMedia&&e.media.length?i("div",{staticClass:"trans-fade-in-anim"},[e._m(0)]):e._e()]):e._e(),i("div",{staticClass:"col-12 media-col media-col-item",class:{"col-desk-8 col-hd-9":e.media.length&&e.options},on:{dragover:function(t){return t.preventDefault(),t.stopPropagation(),e.handleDrag(t)}}},[i("transition",{attrs:{name:"trans-fade-quick"}},[e.dragging?i("div",{staticClass:"media-dragging",class:{"media-dragging-centered":!e.media.length||e.media.length<15},on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.addFile(t,!1)},dragexit:function(t){t.stopPropagation(),e.dragging=!1},dragleave:function(t){t.stopPropagation(),e.dragging=!1},mouseleave:function(t){e.dragging=!1}}},[i("i",{staticClass:"feather feather-upload-cloud"}),i("h4",[e._v("Drop!")]),i("p",[e._v("Drop files to upload them instantly to the media library.")])]):e._e()]),i("div",{staticClass:"media-files"},[e.media.length||e.doingAxios?e._l(e.media,(function(t,a){return i("div",{key:t.uuid,staticClass:"media-item",class:{"media-item-active":e.selectedMedia&&e.selectedMedia["uuid"]===t["uuid"],"media-item-plain":t.loading,"media-item-bulk":e.checked.includes(t.id),"media-item-icon":"image"!==e.getMediaType(t.type)&&"video"!==e.getMediaType(t.type)||t["unsupported"],"media-item-error":t.loading&&t["unsupported"],"media-item-no-options":!e.options},on:{click:function(i){return i.preventDefault(),i.stopPropagation(),e.handleMediaClick(t)}}},[i("div",{staticClass:"form-checkbox media-item-checkbox"},[i("input",{attrs:{type:"checkbox",checked:"",id:"media-item-"+t.uuid}}),i("label",{attrs:{for:"media-item-"+t.uuid}},[i("i",{staticClass:"fal fa-check"})])]),t.loading&&!t["unsupported"]?i("div",{key:t.uuid+"-loading",staticClass:"media-item-trans"},[i("div",{staticClass:"spinner spinner-grey spinner-large"}),i("h4",[e._v(e._s(t.name))])]):t["unsupported"]?i("div",{staticClass:"media-item-icon-cont media-item-trans"},[i("i",{staticClass:"feather feather-alert-circle"}),i("p",[e._v(e._s(t["unsupported"]))]),i("i",{staticClass:"media-close feather feather-x",on:{click:function(i){return e.removeErrorItem(t,a)}}})]):"image"===e.getMediaType(t.type)?i("div",{ref:"images",refInFor:!0,staticClass:"media-item-image media-item-trans"},[i("img",{directives:[{name:"onload",rawName:"v-onload",value:e.getSiteUrl+t.url,expression:"getSiteUrl + item.url"}],attrs:{alt:t.alt},on:{loaded:function(t){return e.loadImages(t)}}})]):"video"===e.getMediaType(t.type)?i("div",{staticClass:"media-item-video media-item-trans"},[i("video",{attrs:{controls:"",preload:"none",disablepictureinpicture:"",controlslist:"nodownload"}},[i("source",{attrs:{src:e.getSiteUrl+t.url}})])]):"file"===e.getMediaType(t.type)?i("div",{staticClass:"media-item-icon-cont media-item-trans"},[i("i",{staticClass:"feather feather-file"}),i("p",[e._v(e._s(t["file_name"]))])]):e._e()])})):i("div",{staticClass:"media-placeholder"},[i("i",{staticClass:"feather feather-image"}),i("h4",[e._v("No media items found!")]),i("p",[e._v("Drag and drop files here or click the button above.")])])],2),i("transition",{attrs:{name:"trans-fade"}},[!e.doingAxios&&e.paginationObj&&e.media.length?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 media-col"},[i("Pagination",{attrs:{pagination:e.paginationObj},on:{update:e.setPagination}})],1)]):e._e()])],1)]),i("Modal",{staticClass:"modal-with-icon modal-with-warning",attrs:{show:e.showDeleteModal},on:{"update:show":function(t){e.showDeleteModal=t}}},[i("template",{slot:"button"},[i("button",{staticClass:"btn",on:{click:e.deleteItem}},[e._v("Delete")])]),i("template",{slot:"text"},[i("h2",[e._v("Are you sure?")]),e.checked.length?i("p",[e._v("Are you sure want to delete "+e._s(e.checked.length)+" media items?")]):i("p",[e._v("Are you sure want to delete this media item?")])])],2)],1)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card card-small-box-shadow media-select-card"},[i("div",{staticClass:"card-body"},[i("i",{staticClass:"feather feather-edit"}),i("div",[i("h4",[e._v("No file selected")]),i("p",[e._v("Select media to edit & view information")])])])])}],r=(i("a4d3"),i("e01a"),i("99af"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("c975"),i("d81d"),i("a434"),i("b0c0"),i("a9e3"),i("d3b7"),i("2532"),i("3ca3"),i("159b"),i("ddb0"),i("96cf"),i("1da1")),s=i("2909"),o=i("9556"),d=i("3af4"),c=i("2121"),l=i("f84c"),u=i("e361"),f={name:"Uploader",mixins:[l["a"]],props:{filters:{type:Boolean,default:!1},bulkAction:{type:Boolean,default:!1},deleting:{type:Boolean,default:!1},modal:{type:Boolean,default:!1},selectMultiple:{type:Boolean,default:!1},rows:{type:Number,default:6},options:{type:Boolean,default:!0}},components:{Collapse:u["a"],Modal:o["a"],Pagination:c["a"],Tabs:d["a"]},data:function(){return{doingAxios:!0,media:[],selectedMedia:!1,users:[],filter:"",pagination:"",paginationObj:{},checked:[],activeAction:"",uploading:!1,timeout:null,isDeleting:!1,dragging:!1,loadingImages:!0,loadedImages:[],initial:!0,showDeleteModal:!1}},mounted:function(){this.getMedia(),this.getUsers()},watch:{deleting:function(){this.checked.length?this.showDeleteModal=!0:this.$noty.warning("Select items in order to apply bulk actions")},bulkAction:function(e){e?this.selectedMedia=!1:this.checked=[]}},methods:{getMedia:function(){var e=this;this.doingAxios=!0,this.axios.get("media?order=created_at,desc&filter=".concat(this.filter,"&").concat(this.pagination,"&limit=").concat(5*this.rows),{paramsSerializer:function(e){return e}}).then((function(t){e.media=[],e.paginationObj={},e.paginationObj=t.data.meta.pagination;var i=t.data.data;i.length&&(e.media=i),e.initialLoad?e.doingAxios=!1:setTimeout((function(){e.doingAxios=!1}),200)})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){e.initialLoad=!0}))},addFile:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.uploading)return this.$noty.warning("Wait for the other files to finish uploading"),void(this.dragging=!1);this.uploading=!0,this.dragging=!1;var a=i?e.target.files:e.dataTransfer.files;a&&Object(s["a"])(a).forEach((function(e,i){t.media.unshift({name:e.name,loading:!0,index:i}),t.upload(e,i)}))},upload:function(e,t){var i=this,a=new FormData;a.append("file",e),this.axios("/media",{method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){setTimeout((function(){i.$set(i.media,t,e.data.data)}),Math.floor(131*Math.random())+100)})).catch((function(e){i.helpers.checkServer(e),415!==e.response.status?i.helpers.handleResponse(e):setTimeout((function(){i.$set(i.media[t],"unsupported",e.response.data.message)}),Math.floor(231*Math.random())+200)})).finally((function(){i.uploading=!1}))},save:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){e.axios.put("/media/"+e.selectedMedia.id,{title:e.selectedMedia.title,description:e.selectedMedia.description,alt:e.selectedMedia.alt}).then((function(){e.$noty.success("Media item updated successfully.")})).catch((function(t){e.helpers.handleResponse(t)}))}),1e3)},deleteItem:function(){var e=this;this.isDeleting=!0;var t=[];this.selectedMedia?t.push(this.selectedMedia.id):t=this.checked;var i=[];t.forEach((function(t){i.push(e.deleteItemAxios(t))})),Promise.all(i).then((function(){e.$noty.success("Media item deleted successfully."),e.getMedia(),e.$store.dispatch("getProfilePicture")})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){e.paginationObj&&(e.paginationObj.page=0),e.selectedMedia=!1,e.isDeleting=!1,e.bulkMode=!1,e.showDeleteModal=!1,e.axios.get("/site").then((function(t){e.$store.commit("setSite",t.data.data)}))}))},deleteItemAxios:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.axios.delete("/media/"+e);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}}),i)})))()},handleDrag:function(){this.dragging=!0,this.bulkMode=!1},insertItem:function(){var e=this;if(this.selectedMedia||this.checked.length||!this.bulkMode)if(this.checked.length){var t=this.checked.map((function(t){return e.findMediaById(t)}));this.$emit("insert",t)}else this.$emit("insert",this.selectedMedia);else this.$noty.warning("Select media item to insert.")},handleMediaClick:function(e){if(!e["unsupported"])if(this.bulkMode){if(this.checked.includes(e.id)){var t=this.checked.indexOf(e.id);return void this.checked.splice(t,1)}this.checked.push(e.id)}else this.changeSelectedMedia(e)},loadImages:function(e){var t=this;if(this.loadedImages.push(e),this.$refs.images.length===this.loadedImages.length){if(this.initial)return void setTimeout((function(){t.loadingImages=!1,t.initial=!1}),this.timeoutDelay);this.loadingImages=!1}},changeSelectedMedia:function(e){this.selectedMedia={};var t=this.findUserById(e["user_id"]);t["full_name"]="".concat(t["first_name"]," ").concat(t["last_name"]),e["uploaded_by"]=t,this.selectedMedia=e},filterTabs:function(e){var t="";switch(e){case 2:t='{"type":[{"operator":"=", "value": "image/jpeg" }]}';break;case 3:t='{"type":[{"operator":"=", "value": "image/png" }]}';break;case 4:t='{"type":[{"operator": "NOT LIKE", "value": "image/png"},{"operator": "NOT LIKE", "value": "image/jpeg"},{"operator": "NOT LIKE", "value": "image/gif"},{"operator": "NOT LIKE", "value": "image/webp"},{"operator": "NOT LIKE", "value": "image/bmp"},{"operator": "NOT LIKE", "value": "image/svg+xml"}]}'}this.selectedMedia=!1,this.filter=t,this.getMedia()},setPagination:function(e){this.activeAction="",this.pagination=e,this.getMedia()},sortSizes:function(e){return e},removeErrorItem:function(e,t){this.$delete(this.media,t)},getUsers:function(){var e=this;this.$store.dispatch("getUsers").then((function(t){e.users=t})).catch((function(t){e.helpers.handleResponse(t)}))},findUserById:function(e){return this.users.find((function(t){return t.id===e}))},findMediaById:function(e){return this.media.find((function(t){return t.id===e}))}},computed:{bulkMode:{get:function(){return this.bulkAction},set:function(e){this.$emit("update:bulk-action",e)}}}},p=f,h=(i("283e"),i("2877")),m=Object(h["a"])(p,a,n,!1,null,null,null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-10fc44d5.7ac14fcb.js.map