/*!
 * @project        SEOmatic
 * @name           content-seo.js
 * @author         Andrew Welch
 * @build          Tue, Jul 30, 2019 9:51 PM ET
 * @release        16302f137d84b18ff4cb897725055606c3a2e39b [feature/refactor-content-seo-page]
 * @copyright      Copyright (c) 2019 nystudio107
 *
 */!function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],f=0,p=[];f<o.length;f++)r=o[f],i[r]&&p.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(u&&u(e);p.length;)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={2:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([58,0,9]),a()}({58:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a.n(n),s=a(19),r=a.n(s),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4"},[a("vuetable-filter-bar"),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfoTop"}),t._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":t.onChangePage}})],1),t._v(" "),a("vuetable",{ref:"vuetable",attrs:{"api-url":"/seomatic/content-seo/meta-bundles","per-page":20,fields:t.fields,css:t.css,"sort-order":t.sortOrder,"append-params":t.moreParams},on:{"vuetable:pagination-data":t.onPaginationData}}),t._v(" "),a("div",{staticClass:"vuetable-pagination clearafter"},[a("vuetable-pagination-info",{ref:"paginationInfo"}),t._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":t.onChangePage}})],1)],1)};o._withStripped=!0;var l=[{name:"__component:content-seo-url",sortField:"sourceName",title:"Name",titleClass:"text-left",dataClass:"text-left"},{name:"entries",title:"Entries",titleClass:"text-center",dataClass:"text-center"},{name:"sourceType",sortField:"sourceType",title:"Type",titleClass:"text-left",dataClass:"text-left"},{name:"title",title:"Title",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"description",title:"Description",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"image",title:"Image",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"sitemap",title:"Sitemap",titleClass:"text-center",dataClass:"text-center",callback:"settingFormatter"},{name:"robots",title:"Robots",titleClass:"text-center",dataClass:"text-center"}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"status",style:{backgroundColor:t.rowData.setup.color},attrs:{title:"Setup Grade: "+t.rowData.setup.name}}),t._v(" "),a("a",{staticClass:"go",attrs:{href:t.rowData.contentSeoUrl,title:t.linkTitle}},[t._v(t._s(t.rowData.sourceName))])])};c._withStripped=!0;var u={props:{rowData:{type:Object,required:!0},rowIndex:{type:Number}},computed:{linkTitle:function(){var t="";return t+=this.rowData.sourceName}}},f=a(0),p=Object(f.a)(u,c,[],!1,null,null,null);p.options.__file="src/assetbundles/seomatic/src/vue/ContentSeoUrl.vue";var d=p.exports,g=a(22),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination&&t.tablePagination.last_page>1,expression:"tablePagination && tablePagination.last_page > 1"}],class:t.css.wrapperClass},[a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(1)}}},[""!=t.css.icons.first?a("i",{class:[t.css.icons.first]}):a("span",[t._v("«")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnFirstPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("prev")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.prev]}):a("span",[t._v(" ‹")])]),t._v(" "),t.notEnoughPages?[t._l(t.totalPage,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(e)?t.css.activeClass:""],domProps:{innerHTML:t._s(e)},on:{click:function(a){return t.loadPage(e)}}})]})]:[t._l(t.windowSize,function(e){return[a("a",{class:[t.css.pageClass,t.isCurrentPage(t.windowStart+e-1)?t.css.activeClass:""],domProps:{innerHTML:t._s(t.windowStart+e-1)},on:{click:function(a){return t.loadPage(t.windowStart+e-1)}}})]})],t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage("next")}}},[""!=t.css.icons.next?a("i",{class:[t.css.icons.next]}):a("span",[t._v("› ")])]),t._v(" "),a("a",{class:["btn-nav",t.css.linkClass,t.isOnLastPage?t.css.disabledClass:""],on:{click:function(e){return t.loadPage(t.totalPage)}}},[""!=t.css.icons.last?a("i",{class:[t.css.icons.last]}):a("span",[t._v("»")])])],2)};v._withStripped=!0;var b={props:{css:{type:Object,default:function(){return{wrapperClass:"vuetable pagination float-right py-4",activeClass:"active large",disabledClass:"disabled",pageClass:"item btn",linkClass:"item btn",paginationClass:"ui bottom attached segment grid",paginationInfoClass:"left floated left aligned six wide column",dropdownClass:"ui search dropdown",icons:{first:"",prev:"",next:"",last:""}}}},onEachSide:{type:Number,default:function(){return 2}}},data:function(){return{eventPrefix:"vuetable-pagination:",tablePagination:null}},computed:{totalPage:function(){return null===this.tablePagination?0:this.tablePagination.last_page},isOnFirstPage:function(){return null!==this.tablePagination&&1===this.tablePagination.current_page},isOnLastPage:function(){return null!==this.tablePagination&&this.tablePagination.current_page===this.tablePagination.last_page},notEnoughPages:function(){return this.totalPage<2*this.onEachSide+4},windowSize:function(){return 2*this.onEachSide+1},windowStart:function(){return!this.tablePagination||this.tablePagination.current_page<=this.onEachSide?1:this.tablePagination.current_page>=this.totalPage-this.onEachSide?this.totalPage-2*this.onEachSide:this.tablePagination.current_page-this.onEachSide}},methods:{loadPage:function(t){this.$emit(this.eventPrefix+"change-page",t)},isCurrentPage:function(t){return t===this.tablePagination.current_page},setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},h=Object(f.a)(b,void 0,void 0,!1,null,null,null);h.options.__file="src/assetbundles/seomatic/src/vue/VuetablePaginationMixin.vue";var m={mixins:[h.exports]},P=Object(f.a)(m,v,[],!1,null,null,null);P.options.__file="src/assetbundles/seomatic/src/vue/VuetablePagination.vue";var _=P.exports,C=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["vuetable-pagination-info",this.css.infoClass],domProps:{innerHTML:this._s(this.paginationInfo)}})};C._withStripped=!0;var x={props:{css:{type:Object,default:function(){return{infoClass:"left floated left py-5 text-gray-600"}}},infoTemplate:{type:String,default:function(){return"Displaying {from} to {to} of {total} items"}},noDataTemplate:{type:String,default:function(){return"No relevant data"}}},data:function(){return{tablePagination:null}},computed:{paginationInfo:function(){return null==this.tablePagination||0==this.tablePagination.total?this.noDataTemplate:this.infoTemplate.replace("{from}",this.tablePagination.from||0).replace("{to}",this.tablePagination.to||0).replace("{total}",this.tablePagination.total||0)}},methods:{setPaginationData:function(t){this.tablePagination=t},resetData:function(){this.tablePagination=null}}},w=Object(f.a)(x,void 0,void 0,!1,null,null,null);w.options.__file="src/assetbundles/seomatic/src/vue/VuetablePaginationInfoMixin.vue";var y={mixins:[w.exports]},S=Object(f.a)(y,C,[],!1,null,null,null);S.options.__file="src/assetbundles/seomatic/src/vue/VuetablePaginationInfo.vue";var T=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-bar"},[a("div",{staticClass:"ui form"},[a("div",{staticClass:"inline field"},[a("label",{staticClass:"text-gray-600"},[t._v("Search for:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],staticClass:"text nicetext",attrs:{type:"text",placeholder:""},domProps:{value:t.filterText},on:{keyup:t.doFilter,input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),t._v(" "),a("button",{staticClass:"btn delete icon",on:{click:t.resetFilter}},[t._v("Reset")])])])])};O._withStripped=!0;var $={data:function(){return{filterText:""}},methods:{doFilter:function(){this.$events.fire("filter-set",this.filterText)},resetFilter:function(){this.filterText="",this.$events.fire("filter-reset")}}},k=Object(f.a)($,O,[],!1,null,null,null);k.options.__file="src/assetbundles/seomatic/src/vue/VuetableFilterBar.vue";var I=k.exports;i.a.component("content-seo-url",d);var F={components:{vuetable:g.a,"vuetable-pagination":_,"vuetable-pagination-info":T,"vuetable-filter-bar":I},props:{siteId:{type:Number,default:0},refreshIntervalSecs:{type:Number,default:0}},data:function(){return{moreParams:{siteId:this.siteId},css:{tableClass:"data fullwidth seomatic-content-seo",ascendingIcon:"menubtn seomatic-menubtn-asc",descendingIcon:"menubtn seomatic-menubtn-desc"},sortOrder:[{field:"__component:content-seo-url",sortField:"sourceName",direction:"asc"}],fields:l}},mounted:function(){var t=this;this.$events.$on("filter-set",function(e){return t.onFilterSet(e)}),this.$events.$on("filter-reset",function(e){return t.onFilterReset()}),this.refreshIntervalSecs&&setInterval(function(){void 0!==t.$refs.pagination&&t.$refs.pagination.isOnFirstPage&&void 0!==t.$refs.vuetable&&t.$refs.vuetable.refresh()},1e3*this.refreshIntervalSecs)},methods:{onFilterSet:function(t){this.moreParams={siteId:this.siteId,filter:t},this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset:function(){this.moreParams={siteId:this.siteId},this.$events.fire("refresh-table",this.$refs.vuetable)},onPaginationData:function(t){this.$refs.paginationTop.setPaginationData(t),this.$refs.paginationInfoTop.setPaginationData(t),this.$refs.pagination.setPaginationData(t),this.$refs.paginationInfo.setPaginationData(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t)},urlFormatter:function(t){return""===t?"":'\n            <a class="go" href="'.concat(t,'" title="').concat(t,'" target="_blank" rel="noopener">').concat(t,"</a>\n            ")},settingFormatter:function(t){return"\n            <span class='status ".concat(t," inline-item'></span>\n            ")}}},D=Object(f.a)(F,o,[],!1,null,null,null);D.options.__file="src/assetbundles/seomatic/src/vue/ContentSeoTable.vue";var j=D.exports;i.a.use(r.a);new i.a({el:"#cp-nav-content",components:{"content-seo-table":j},data:{},methods:{onTableRefresh:function(t){i.a.nextTick(function(){return t.refresh()})}},mounted:function(){var t=this;this.$events.$on("refresh-table",function(e){return t.onTableRefresh(e)})}})}});
//# sourceMappingURL=content-seo.js.map