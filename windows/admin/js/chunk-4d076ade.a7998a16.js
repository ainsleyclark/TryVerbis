(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d076ade"],{"1f00":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("div",{staticClass:"auth-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("header",{staticClass:"header header-with-actions"},[a("div",{staticClass:"header-title"},[a("h1",[e._v("Categories")]),a("Breadcrumbs")],1),a("div",{staticClass:"header-actions"},[a("form",{staticClass:"form form-actions"},[a("div",{staticClass:"form-select-cont form-input header-hide-mob"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.bulkType,expression:"bulkType"}],staticClass:"form-select",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.bulkType=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Bulk actions")]),a("option",{attrs:{value:"delete"}},[e._v("Delete permanently")])])]),a("button",{staticClass:"btn btn-fixed-height btn-margin btn-white header-hide-mob",class:{"btn-loading":e.isDoingBulk},on:{click:function(t){return t.preventDefault(),e.doBulkAction(t)}}},[e._v("Apply")]),a("router-link",{staticClass:"btn btn-orange btn-fixed-height btn-flex",attrs:{to:{name:"categories-single",params:{id:"new"}}}},[e._v(" New Category ")])],1)])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Tabs",{on:{update:e.filterTabs}},[a("template",{slot:"item"},[e._v("Show all")]),a("template",{slot:"item"},[e._v("Pages")]),e._l(e.getTheme["resources"],(function(t){return a("template",{slot:"item"},[e._v(e._s(t["friendly_name"]))])}))],2),e.doingAxios?a("div",{staticClass:"media-spinner spinner-container"},[a("div",{staticClass:"spinner spinner-large spinner-grey"})]):a("div",[a("transition",{attrs:{name:"trans-fade",mode:"out-in"}},[e.categories.length?a("div",{staticClass:"table-wrapper"},[a("div",{staticClass:"table-scroll table-with-hover"},[a("table",{staticClass:"table categories-table"},[a("thead",[a("tr",[a("th",{staticClass:"table-header-checkbox"},[a("div",{staticClass:"form-checkbox form-checkbox-dark"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedAll,expression:"checkedAll"}],attrs:{type:"checkbox",id:"categories-check-all"},domProps:{checked:Array.isArray(e.checkedAll)?e._i(e.checkedAll,null)>-1:e.checkedAll},on:{change:function(t){var a=e.checkedAll,s=t.target,i=!!s.checked;if(Array.isArray(a)){var c=null,r=e._i(a,c);s.checked?r<0&&(e.checkedAll=a.concat([c])):r>-1&&(e.checkedAll=a.slice(0,r).concat(a.slice(r+1)))}else e.checkedAll=i}}}),a("label",{attrs:{for:"categories-check-all"}},[a("i",{staticClass:"fal fa-check"})])])]),a("th",{staticClass:"table-order",class:{active:"name"===e.activeOrder},on:{click:function(t){return e.changeOrderBy("name")}}},[a("span",[e._v("Name")]),a("i",{staticClass:"fas fa-caret-down",class:{active:"asc"!==e.orderBy["first_name"]}})]),a("th",{staticClass:"table-order",class:{active:"resource"===e.activeOrder},on:{click:function(t){return e.changeOrderBy("resource")}}},[a("span",[e._v("Resource")]),a("i",{staticClass:"fas fa-caret-down",class:{active:"asc"!==e.orderBy["resource"]}})]),a("th",[a("span",[e._v("Parent")])]),a("th",{staticClass:"table-order",class:{active:"updated_at"===e.activeOrder},on:{click:function(t){return e.changeOrderBy("updated_at")}}},[a("span",[e._v("Updated at")]),a("i",{staticClass:"fas fa-caret-down",class:{active:"asc"!==e.orderBy["updated_at"]}})]),a("th",{staticClass:"table-order",class:{active:"created_at"===e.activeOrder},on:{click:function(t){return e.changeOrderBy("created_at")}}},[a("span",[e._v("Created at")]),a("i",{staticClass:"fas fa-caret-down",class:{active:"asc"!==e.orderBy["created_at"]}})]),a("th")])]),a("tbody",e._l(e.categories,(function(t,s){return a("tr",{key:t.uuid,staticClass:"trans-fade-in-anim-slow"},[a("td",{staticClass:"table-checkbox"},[a("div",{staticClass:"form-checkbox form-checkbox-dark"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:t.uuid},domProps:{value:t.id,checked:Array.isArray(e.checked)?e._i(e.checked,t.id)>-1:e.checked},on:{change:function(a){var s=e.checked,i=a.target,c=!!i.checked;if(Array.isArray(s)){var r=t.id,o=e._i(s,r);i.checked?o<0&&(e.checked=s.concat([r])):o>-1&&(e.checked=s.slice(0,o).concat(s.slice(o+1)))}else e.checked=c}}}),a("label",{attrs:{for:t.uuid}},[a("i",{staticClass:"fal fa-check"})])])]),a("td",[a("router-link",{attrs:{to:{name:"categories-single",params:{id:t.id}}}},[e._v(" "+e._s(t["name"])+" ")])],1),a("td",[a("div",{staticClass:"badge badge-green"},[e._v(e._s(e.capitalize(t.resource)))])]),a("td",[e.filterCategoryById(t["parent_id"])?a("p",[e._v(e._s(e.filterCategoryById(t["parent_id"])["name"]))]):a("p",[e._v("No parent")])]),a("td",[a("span",[e._v(e._s(e._f("moment")(t["updated_at"],"dddd, MMMM Do YYYY")))])]),a("td",[a("span",[e._v(e._s(e._f("moment")(t["created_at"],"dddd, MMMM Do YYYY")))])]),a("td",{staticClass:"table-actions"},[a("Popover",{attrs:{triangle:!1,classes:s+1>e.categories.length-4?"popover-table popover-table-top":"popover-table popover-table-bottom","item-key":t.uuid,active:e.activeAction},on:{update:function(a){return e.updateActions(a,t.uuid)}}},[a("template",{slot:"items"},[a("router-link",{staticClass:"popover-item popover-item-icon",attrs:{to:{name:"categories-single",params:{id:t.id}}}},[a("i",{staticClass:"feather feather-edit"}),a("span",[e._v("Edit")])]),a("div",{staticClass:"popover-line"}),a("div",{staticClass:"popover-item popover-item-icon popover-item-border popover-item-orange",on:{click:function(a){return e.handleDelete(t)}}},[a("i",{staticClass:"feather feather-trash-2"}),a("span",[e._v("Delete")])])],1),a("template",{slot:"button"},[a("i",{staticClass:"icon icon-square far fa-ellipsis-h",class:{"icon-square-active":e.activeAction===t.uuid}})])],2)],1)])})),0)])])]):a("Alert",{attrs:{colour:"orange"}},[e._t("default",[a("h3",[e._v("No "+e._s("all"===e.activeTabName?"":e.activeTabName)+" categories available. ")]),a("p",[e._v("To create a new one, click the button above.")])])],2)],1)],1)],1)]),a("transition",{attrs:{name:"trans-fade-in-anim"}},[!e.doingAxios&&e.paginationObj?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("Pagination",{attrs:{pagination:e.paginationObj},on:{update:e.setPagination}})],1)]):e._e()])],1),a("Modal",{staticClass:"modal-with-icon modal-with-warning",attrs:{show:e.showDeleteModal},on:{"update:show":function(t){e.showDeleteModal=t}}},[a("template",{slot:"button"},[a("button",{staticClass:"btn",class:{"btn-loading":e.isDeleting},on:{click:function(t){return e.deleteCategory(!1)}}},[e._v("Delete")])]),a("template",{slot:"text"},[a("h2",[e._v("Are you sure?")]),e.selectedCategory?a("p",[e._v("Are you sure want to delete this category?")]):a("p",[e._v("Are you sure want to delete "+e._s(e.checked.length)+" categories?")])])],2)],1)},i=[],c=(a("99af"),a("4de4"),a("7db0"),a("4160"),a("d81d"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("96cf"),a("1da1")),r=a("90f8"),o=a("3af4"),n=a("a71d"),l=a("2121"),d=a("9556"),u=a("e6e0"),h={name:"Categories",components:{Modal:d["a"],Pagination:l["a"],Alert:n["a"],Tabs:o["a"],Breadcrumbs:r["a"],Popover:u["a"]},data:function(){return{doingAxios:!0,categories:[],selectedCategory:!1,errors:[],paginationObj:{},activeTab:1,activeTabName:"all",order:"",orderBy:{name:"asc",user_id:"asc",status:"asc",published_at:"asc"},activeOrder:"",filter:"",pagination:"",bulkType:"",checked:[],activeAction:"",showDeleteModal:!1,showCreateModal:!1,selectedDeleteId:null,isDeleting:!1,isDoingBulk:!1}},mounted:function(){this.getCategories(),this.getMessage()},methods:{getMessage:function(){this.$route.query.delete&&this.$noty.success("Successfully deleted category.")},getCategories:function(){var e=this;this.axios.get("/categories?order=".concat(this.order,"&filter=").concat(this.filter,"&").concat(this.pagination),{paramsSerializer:function(e){return e}}).then((function(t){e.categories=[],e.paginationObj={},e.paginationObj=t.data.meta.pagination,e.categories=t.data.data})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){e.doingAxios=!1}))},deleteCategory:function(){var e=this;this.isDeleting=!0;var t=this.selectedCategory?[this.selectedCategory.id]:this.checked,a=[];t.forEach((function(t){console.log(t),a.push(e.deleteCategoryAxios(t))})),Promise.all(a).then((function(){var a=1===t.length?"Category deleted successfully.":"Categories deleted successfully.";e.$noty.success(a),e.getCategories()})).catch((function(t){e.helpers.handleResponse(t)})).finally((function(){e.activeAction="",e.checked=[],e.checkedAll=!1,e.showDeleteModal=!1,e.bulkType="",e.isDeleting=!1,e.selectedCategory=!1}))},deleteCategoryAxios:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.axios.delete("/categories/"+e);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}}),a)})))()},handleDelete:function(e){this.selectedCategory=e,this.showDeleteModal=!0},changeOrderBy:function(e){this.activeOrder=e,"desc"===this.orderBy[e]||""===this.orderBy[e]?this.$set(this.orderBy,e,"asc"):this.$set(this.orderBy,e,"desc"),this.order=e+","+this.orderBy[e],this.getCategories()},filterTabs:function(e){this.pagination="page=1",this.activeTab=e;var t="";switch(e){case 1:this.activeTabName="all";break;case 2:this.activeTabName="page",t='{"resource":[{"operator":"=", "value": "pages"}]}';break;default:var a=this.getTheme["resources"],s=a[Object.keys(a)[e-3]];if(s){var i=Object.keys(a).find((function(e){return a[e]===s}));this.activeTabName=s["singular_name"],t='{"resource":[{"operator":"=", "value": "'.concat(i,'"}]}')}break}this.filter=t,this.getCategories()},setPagination:function(e){this.activeAction="",this.pagination=e,this.getCategories()},doBulkAction:function(){var e=this;if(this.isDoingBulk=!0,!this.checked.length)return this.$noty.warning("Select items in order to apply bulk actions"),void setTimeout((function(){e.isDoingBulk=!1}),this.timeoutDelay);"delete"===this.bulkType&&(setTimeout((function(){e.isDoingBulk=!1}),this.timeoutDelay),this.showDeleteModal=!0)},updateActions:function(e,t){this.activeAction=e?t:""},filterCategoryById:function(e){var t=!1;return this.categories.forEach((function(a){e===a.id&&(t=a)})),t},capitalize:function(e){return e.replace(/(?:^|\s|["'([{])+\S/g,(function(e){return e.toUpperCase()}))}},computed:{checkedAll:{get:function(){return this.checked.length===this.categories.length},set:function(e){this.checked=e?this.categories.map((function(e){return e.id})):[]}}}},p=h,v=(a("cc6e"),a("2877")),f=Object(v["a"])(p,s,i,!1,null,"13ca353a",null);t["default"]=f.exports},"4c2d":function(e,t,a){"use strict";var s=a("cdcc"),i=a.n(s);i.a},"60c6":function(e,t,a){},a71d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"trans-fade-quick",mode:"out-in"}},[e.show?a("div",{staticClass:"alert alert-background",class:"alert-"+e.colour},[a("div",{staticClass:"alert-icon"},["error"===e.type?a("i",{staticClass:"feather feather-alert-triangle"}):e._e(),"warning"===e.type?a("i",{staticClass:"feather feather-alert-circle"}):e._e(),"success"===e.type?a("i",{staticClass:"feather feather-check-circle"}):e._e()]),a("div",{staticClass:"alert-text"},[e._t("default")],2),a("button",{staticClass:"alert-close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.show=!1}}},[a("i",{staticClass:"feather feather-x"})])]):e._e()])},i=[],c={name:"Alert",props:{colour:{type:String,default:""},type:{type:String,default:"error"}},data:function(){return{show:!0}}},r=c,o=(a("4c2d"),a("2877")),n=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=n.exports},c07a:function(e,t,a){},cc6e:function(e,t,a){"use strict";var s=a("c07a"),i=a.n(s);i.a},cdcc:function(e,t,a){},d69c:function(e,t,a){"use strict";var s=a("60c6"),i=a.n(s);i.a},e6e0:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popover-cont",class:{"popover-hover":e.hover}},[a("div",{staticClass:"popover-btn",on:{click:e.update}},[e._t("button")],2),a("div",{ref:"popover",staticClass:"popover",class:[{"popover-triangle":e.triangle},{"popover-active":e.show&&e.itemKey===e.active},e.classes]},[a("div",{staticClass:"popover-items-cont"},[e._t("items")],2)])])},i=[],c={name:"Alert",props:{items:{type:Array},triangle:{type:Boolean,default:!1},classes:{type:String,default:""},itemKey:{type:String,default:""},active:{type:String,default:""},hover:{type:Boolean,default:!1}},data:function(){return{show:!1}},methods:{update:function(){this.hover||(this.show=!this.show,this.$emit("update",this.show))}},computed:{getItems:function(){return this.items}}},r=c,o=(a("d69c"),a("2877")),n=Object(o["a"])(r,s,i,!1,null,null,null);t["a"]=n.exports}}]);
//# sourceMappingURL=chunk-4d076ade.a7998a16.js.map