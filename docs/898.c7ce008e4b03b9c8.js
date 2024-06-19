"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[898],{827:(M,F,u)=>{u.d(F,{D:()=>s});var _=u(8559),e=u(6443),f=u(3942),C=u(271),O=u(8758),l=u(123);let s=(()=>{class c{constructor(){this.httpClient=(0,_.WQX)(e.Qq)}getProfile(){return this.httpClient.get("mock-data/profile.json")}getPeople(a){return this.httpClient.get("mock-data/people.json").pipe((0,C.T)(d=>{let m=d.length;return a&&(a.filters?.length&&(m=(d=l.A.filterData(d,a.filters.map(w=>({key:w.property,value:w.value,strict:"gender"===w.property||"id"===w.property})))).length),a.sort&&(d=l.A.sortData(d,a.sort.property,"string",a.sort.direction)),(0,O.Et)(a.skip)&&(0,O.Et)(a.take)&&(d=d.slice(a.skip,a.skip+a.take))),{count:m,data:d}}))}getPerson(a){return this.httpClient.get("mock-data/people.json").pipe((0,C.T)(d=>d.find(m=>m.id.toString()===a.toString())))}getSearches(a){return new f.c(d=>{let m=localStorage.getItem(a);(0,O.O9)(m)&&(m=JSON.parse(m)),d.next(m),d.complete()})}saveSearches(a,d){return new f.c(m=>{localStorage.setItem(a,JSON.stringify(d)),m.next(!0),m.complete()})}getLongRequest(){return this.httpClient.get("http://localhost:5000/long-request")}static#e=this.\u0275fac=function(d){return new(d||c)};static#t=this.\u0275prov=_.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},6770:(M,F,u)=>{u.r(F),u.d(F,{PEOPLE_ROUTES:()=>Z});var _=u(8574),e=u(8559);let f=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-people"]],standalone:!0,features:[e.aNF],decls:1,vars:0,template:function(n,o){1&n&&e.nrm(0,"router-outlet")},dependencies:[_.n3],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;overflow:hidden}"]})}return i})();var C=u(316),O=u(9475),l=u(8758),s=u(9877),c=u(7322),r=u(4607),a=u(123);class d{static createLinkButton(g,t){const n=document.createElement("button");return n.classList.add("forge-hyperlink"),n.innerText=g.toString(),n.type="button",n.style.minWidth="36px",n.addEventListener("click",t),n}static createIconButton(g,t,n){const o=document.createElement("div"),p=document.createElement("forge-icon-button");p.setAttribute("aria-label",n),p.addEventListener("click",v=>{v.stopPropagation(),t(v)}),o.appendChild(p);const h=document.createElement("forge-icon");h.setAttribute("name",g),p.appendChild(h);const y=document.createElement("forge-tooltip");return y.innerHTML=n,o.appendChild(y),o}static createMenuButton(g,t,n,o){const p=document.createElement("forge-menu");return p.options=n,p.addEventListener("forge-menu-select",t),p.appendChild(this.createIconButton(g,()=>{},o)),p}static createExpanderRow(g,t,n,o,p,h,y){let v;const R=d.createIconButton("expand_more",()=>{const D=t.isRowExpanded(g);R.querySelector("forge-icon")?.setAttribute("name",D?"expand_more":"expand_less"),D?t.collapseRow(g).then(()=>{v?.destroy(),v=null}):t.expandRow(g,()=>(v=n.createComponent(o),v.instance.rowIndex=g,(0,l.O9)(h)&&(v.instance.data=h),(0,l.O9)(y)&&(v.instance.callback=y),v.hostView.rootNodes[0]))},p);return R}}var m=u(827);let w=(()=>{class i{constructor(){this.recordCount=0}initializeSort(){if(this.tableColumns.filter(t=>t.initialSort||(0,l.O9)(t.sortDirection)).forEach(t=>{t.initialSort=!1,t.sortDirection=void 0}),this.filterCache?.sort?.property.length){const t=this.tableColumns.find(n=>n.property===this.filterCache?.sort?.property);(0,l.O9)(t)&&(t.sortDirection=this.filterCache?.sort?.direction,t.initialSort=!0)}}initializeFilter(){this.filterCache.filters?.forEach(t=>{const n=this.tableColumns.find(o=>o.property===t.property&&(0,l.O9)(o.filterDelegate));n&&(n.filterDelegate.value=t.value)})}get isFiltered(){return!!this.filterCache?.filters?.length}getColumnIndex(t){return this.tableColumns.findIndex(n=>n.property===t)}onTableSort(t){const n=this.getColumnFromEventIndex(t.columnIndex).property;this.filterCache.sort={property:n,direction:t.direction},this.filterCache.skip=0,this.getRecords()}onTablePaginatorChange(t){this.filterCache.skip=t.pageIndex*t.pageSize,this.filterCache.take=t.pageSize,this.getRecords()}onTableFilter(t){t.value=t.value?.trim();const n=this.getColumnFromEventIndex(t.columnIndex);if(n?.property?.length){const o=this.filterCache.filters?.findIndex(p=>p.property===n.property);-1!==o?t.value?.length?this.filterCache.filters[o].value=t.value:this.filterCache.filters?.splice(o,1):t.value.length&&(this.filterCache.filters?.length?this.filterCache.filters.push({property:n.property,value:t.value,label:n.header}):this.filterCache.filters=[{property:n.property,value:t.value,label:n.header}]),this.getRecords()}}destroy(){this.setTableFiltersAF&&window.cancelAnimationFrame(this.setTableFiltersAF)}resetTable(){this.filterCache.filters=void 0,this.filterCache.skip=0}getColumnFromEventIndex(t){return this.tableColumns.filter(n=>!n.hidden)[t]}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac})}return i})();const j=i=>({"routerlink--disabled":i});function I(i,g){if(1&i&&(e.j41(0,"forge-tooltip"),e.EFF(1),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.JRh(t.label)}}let N=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-routerlink-button"]],inputs:{route:"route",queryParams:"queryParams",label:"label",icon:"icon",disabled:"disabled"},standalone:!0,features:[e.aNF],decls:4,vars:8,consts:[["role","presentation","tabindex","-1"],[1,"forge-icon-button",3,"routerLink","queryParams","ngClass"],[3,"name"]],template:function(n,o){1&n&&(e.j41(0,"forge-icon-button",0)(1,"a",1),e.nrm(2,"forge-icon",2),e.k0s()(),e.DNE(3,I,2,1,"forge-tooltip")),2&n&&(e.R7$(),e.Y8G("routerLink",o.route)("queryParams",o.queryParams)("ngClass",e.eq3(6,j,o.disabled)),e.BMQ("aria-label",o.label),e.R7$(),e.Y8G("name",o.icon),e.R7$(),e.vxM(3,null!=o.label&&o.label.length?3:-1))},dependencies:[C.MD,C.YU,_.iI,_.Wk,r.nVi,r.xBz,r.RlV,r.vzf,r.jk$,r.b6T],styles:["[_nghost-%COMP%]{display:block}.routerlink--disabled[_ngcontent-%COMP%]{pointer-events:none}"]})}return i})();function B(i,g){if(1&i&&(e.j41(0,"forge-chip",1),e.EFF(1),e.k0s()),2&i){const t=g.$implicit;e.Y8G("value",t.property),e.R7$(),e.JRh(t.label)}}let S=(()=>{class i{constructor(){this.filters=[],this.filter=new e.bkB}onFilterDelete(t){const n=this.filters.findIndex(o=>o.property===t.detail.value);-1!==n&&(this.filters.splice(n,1),this.filter.emit())}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-filter-chips"]],inputs:{filters:"filters"},outputs:{filter:"filter"},standalone:!0,features:[e.aNF],decls:3,vars:0,consts:[["type","input","dense","true",3,"forge-chip-delete"],[3,"value"]],template:function(n,o){1&n&&(e.j41(0,"forge-chip-set",0),e.bIt("forge-chip-delete",function(h){return o.onFilterDelete(h)}),e.Z7z(1,B,2,2,"forge-chip",1,e.Vm6),e.k0s()),2&n&&(e.R7$(),e.Dyx(o.filters))},dependencies:[C.MD,r.mrZ,r.wux,r.yFd,r.svl],styles:["[_nghost-%COMP%]{display:block}"]})}return i})();var V=u(411);let P=(()=>{class i{constructor(){this.homeView={storageKey:"people-home",showFilter:!1,filter:{sort:{property:"lastName",direction:s.UE.Ascending},filters:[],skip:0,take:25}}}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac})}return i})();var b=u(496),G=u(9452),E=u(3399),A=u(2267);let k=(()=>{class i{constructor(){this.appCache=(0,e.WQX)(E.v),this.cache=(0,e.WQX)(P),this.filter=new e.bkB,this.viewCache=this.cache.homeView,this.formGroup=new b.gE({firstName:new b.MJ,lastName:new b.MJ,gender:new b.MJ,occupation:new b.MJ,facet:new b.MJ}),this.genderOptions=[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Undecided",value:"undecided"}],this.facetFilter=t=>{const n=[];for(let o=0;o<20;o++)n.push({value:o,label:`Facet Option ${o}`});return(0,G.of)(n)}}ngOnInit(){this.loadForm(this.cache.homeView.filter.filters)}onClearFilter(){this.formGroup.reset(),this.cache.homeView.filter.filters=[]}onApplyFilter(){this.cache.homeView.filter.filters=Object.entries(a.A.reduceObject(this.formGroup.value)).map(t=>({property:t[0],value:t[1],label:this.propertyLabel(t[0])}))||[],this.filter.emit()}loadForm(t){this.formGroup.reset(),t.forEach(n=>{const o=this.formGroup.get(n.property);o&&o.setValue(n.value)})}propertyLabel(t){switch(t){case"firstName":return"First name";case"lastName":return"Last name";case"gender":return"Gender";case"occupation":return"Occupation";case"facet":return"Facet";default:return""}}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-people-home-filter"]],outputs:{filter:"filter"},standalone:!0,features:[e.aNF],decls:27,vars:4,consts:[["direction","right","open","false",3,"forge-drawer-close","open"],["slot","header",1,"header"],[1,"header__title","forge-typography--subheading2"],["aria-label","Close",1,"app--flex-right",3,"click"],["name","close"],["novalidate","","autocomplete","off",1,"body",3,"ngSubmit","formGroup"],["type","text","id","people--home--filter--first-name","formControlName","firstName"],["for","people--home--filter--first-name","slot","label"],["type","text","id","people--home--filter--last-name","formControlName","lastName"],["for","people--home--filter--last-name","slot","label"],["label","Gender","formControlName","gender","multiple","true",3,"options"],["type","text","id","people--home--filter--occupation","formControlName","occupation"],["for","people--home--filter--occupation","slot","label"],["formControlName","facet","label","Facet",3,"optionFilter"],["slot","footer",1,"footer"],["variant","outlined",3,"click"],["variant","raised","type","submit",3,"click"]],template:function(n,o){1&n&&(e.j41(0,"forge-drawer",0),e.bIt("forge-drawer-close",function(){return o.viewCache.showFilter=!1}),e.j41(1,"div",1)(2,"span",2),e.EFF(3,"Filter people"),e.k0s(),e.j41(4,"forge-icon-button",3),e.bIt("click",function(){return o.viewCache.showFilter=!1}),e.nrm(5,"forge-icon",4),e.k0s()(),e.j41(6,"form",5),e.bIt("ngSubmit",function(){return o.onApplyFilter()}),e.j41(7,"forge-text-field"),e.nrm(8,"input",6),e.j41(9,"label",7),e.EFF(10,"First name"),e.k0s()(),e.j41(11,"forge-text-field"),e.nrm(12,"input",8),e.j41(13,"label",9),e.EFF(14,"Last name"),e.k0s()(),e.nrm(15,"forge-select",10),e.j41(16,"forge-text-field"),e.nrm(17,"input",11),e.j41(18,"label",12),e.EFF(19,"Occupation"),e.k0s()(),e.nrm(20,"forge-divider")(21,"app-autocomplete-range",13),e.k0s(),e.j41(22,"div",14)(23,"forge-button",15),e.bIt("click",function(){return o.onClearFilter()}),e.EFF(24," Clear "),e.k0s(),e.j41(25,"forge-button",16),e.bIt("click",function(){return o.onApplyFilter()}),e.EFF(26," Apply "),e.k0s()()()),2&n&&(e.Y8G("open",o.viewCache.showFilter),e.R7$(6),e.Y8G("formGroup",o.formGroup),e.R7$(9),e.Y8G("options",o.genderOptions),e.R7$(6),e.Y8G("optionFilter",o.facetFilter))},dependencies:[b.X1,b.qT,b.me,b.BC,b.cb,b.j4,b.JD,r.ei2,r.Qpp,r.b$f,r.heP,r.JUP,r.DGl,r.nVi,r.xBz,r.RlV,r.vzf,r.KAo,r.Je0,r.wBS,r.xYY,r.LHr,A.h],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:block;height:100%;overflow:hidden}forge-drawer[_ngcontent-%COMP%]{--forge-drawer-width: auto}.header[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;border-bottom:1px solid var(--forge-theme-outline)}.header__title[_ngcontent-%COMP%]{margin-left:16px}.body[_ngcontent-%COMP%]{padding:8px 16px;display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.body--row-break[_ngcontent-%COMP%]{grid-column-start:1}.body--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.body--col-span.body--col-span[_ngcontent-%COMP%]{width:auto}.body--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.body--col-span2.body--col-span2[_ngcontent-%COMP%]{width:656px}.body--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.body--col-span3.body--col-span3[_ngcontent-%COMP%]{width:992px}.body[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--forge-theme-outline)}.footer[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:8px}']})}return i})();const $=["peopleTable"],x=i=>({"app--hidden":i}),L=i=>({"table__header-action":i});function W(i,g){if(1&i&&(e.j41(0,"forge-badge",15),e.EFF(1),e.k0s()),2&i){const t=e.XpG(2);e.R7$(),e.JRh(t.filterCache.filters.length)}}function U(i,g){1&i&&e.nrm(0,"forge-icon",20)}function H(i,g){if(1&i&&(e.j41(0,"forge-option",19),e.EFF(1),e.k0s()),2&i){const t=g.$implicit;e.Y8G("value",t.property),e.R7$(),e.SpI(" ",t.header," ")}}function z(i,g){if(1&i){const t=e.RV6();e.j41(0,"app-filter-chips",13),e.bIt("filter",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.onApplyFilter(!0))}),e.k0s(),e.j41(1,"forge-button",14),e.bIt("click",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.onTableShowFilter())}),e.DNE(2,W,2,1,"forge-badge",15)(3,U,1,0),e.j41(4,"span"),e.EFF(5,"Filter"),e.k0s()(),e.j41(6,"forge-icon-button",16),e.nrm(7,"forge-icon",17),e.k0s(),e.j41(8,"forge-select-dropdown",18),e.bIt("change",function(o){e.eBV(t);const p=e.XpG();return e.Njj(p.onTableOptionSelected(o.detail))}),e.Z7z(9,H,2,2,"forge-option",19,e.Vm6),e.k0s()}if(2&i){const t=e.XpG();e.Y8G("filters",t.filterCache.filters),e.R7$(2),e.vxM(2,t.filterCache.filters.length?2:3),e.R7$(6),e.Y8G("value",t.selectedTableColumns),e.R7$(),e.Dyx(t.optionalTableColumns)}}function X(i,g){if(1&i&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&i){const t=e.XpG();e.R7$(),e.SpI("",t.selectedPeople.length," people selected")}}function Q(i,g){if(1&i){const t=e.RV6();e.j41(0,"div",9)(1,"forge-paginator",21),e.bIt("forge-paginator-change",function(o){e.eBV(t);const p=e.XpG();return e.Njj(p.onTablePaginatorChange(o.detail))}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(),e.Y8G("pageIndex",t.filterCache.skip/t.filterCache.take)("pageSize",t.filterCache.take)("total",t.recordCount)}}function Y(i,g){1&i&&(e.j41(0,"div",10),e.nrm(1,"img",22),e.j41(2,"div"),e.EFF(3,"No people found."),e.k0s()())}function J(i,g){1&i&&(e.j41(0,"div",11),e.nrm(1,"forge-skeleton",23)(2,"forge-skeleton",23)(3,"forge-skeleton",23),e.k0s())}let K=(()=>{class i extends w{get selectedTableColumns(){return this.optionalTableColumns.filter(t=>!t.hidden).map(t=>t.property)}constructor(){super(),this.router=(0,e.WQX)(_.Ix),this.appDataService=(0,e.WQX)(m.D),this.cache=(0,e.WQX)(P),this.viewContainerRef=(0,e.WQX)(e.c1b),this.ngZone=(0,e.WQX)(e.SKi),this.isBusy=!1,this.recordset=[],this.filterCache=this.cache.homeView.filter,this.viewCache=this.cache.homeView,this.optionalTableColumns=[{property:"image",header:"Image",hidden:!1},{property:"firstName",header:"First",hidden:!1},{property:"lastName",header:"Last",hidden:!1},{property:"gender",header:"Gender",hidden:!1},{property:"occupation",header:"Occupation",hidden:!1}],this.tableColumns=[{property:"image",width:48,align:s.uP.Center,template:(n,o,p)=>{const h=document.createElement("img");return h.src=`mock-data/${a.A.formatNumber(p.id,"2.0-0")}-small.png`,h.setAttribute("alt",""),h.classList.add("forge-table-cell__image"),h}},{header:"Id",property:"id",sortable:!0,filter:!0,filterDelegate:new c.C},{header:"First",property:"firstName",sortable:!0,filter:!0,filterDelegate:new c.C},{header:"Last",property:"lastName",sortable:!0,filter:!0,filterDelegate:new c.C},{header:"Gender",property:"gender",sortable:!0,filter:!0,filterDelegate:new c.C},{header:"Occupation",property:"occupation",sortable:!0,filter:!0,filterDelegate:new c.C},{align:s.uP.Right,template:(n,o,p)=>(this.ngZone.run(()=>{o.appendChild(d.createExpanderRow(n,this.peopleTable,this.viewContainerRef,V.j,"Toggle table detail",p)),o.appendChild(d.createMenuButton("more_vert",h=>{console.log(h)},[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],"More options")),o.appendChild(d.createIconButton("keyboard_arrow_right",h=>{this.ngZone.run(()=>{this.router.navigate([`people/detail/${p.id}`])})},"View person details"))}),"")}],this.selectedPeople=[];const t=localStorage.getItem(this.cache.homeView.storageKey);if(t?.length){const n=JSON.parse(t);(0,l.cy)(n)&&(this.optionalTableColumns.forEach(o=>{const p=n.find(h=>h.property===o.property);p&&(o.hidden=p.hidden)}),this.setTableColumnsVisibilty())}}ngOnInit(){this.initializeSort(),this.viewCache.showFilter&&this.initializeFilter(),this.getRecords()}ngOnDestroy(){this.destroy()}onPeopleSelected(t=!1){t?(this.selectedPeople.length=0,this.peopleTable?.clearSelections()):this.selectedPeople=this.peopleTable?.getSelectedRows()}onTableOptionSelected(t){this.optionalTableColumns=this.optionalTableColumns.map(n=>(n.hidden=!t.includes(n.property),n)),this.setTableColumnsVisibilty(),localStorage.setItem(this.cache.homeView.storageKey,JSON.stringify(this.optionalTableColumns.map(n=>({property:n.property,hidden:n.hidden}))))}onTableShowFilter(){this.viewCache.showFilter=!this.viewCache.showFilter,this.viewCache.showFilter&&this.initializeFilter()}onApplyFilter(t){this.getRecords(),t&&this.peopleFilter.loadForm(this.filterCache.filters)}getRecords(){this.onPeopleSelected(!0),this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort,filters:this.filterCache.filters,skip:this.filterCache.skip,take:this.filterCache.take}).pipe((0,O.j)(()=>this.isBusy=!1)).subscribe(t=>{this.recordset=t.data,this.recordCount=t.count})}setTableColumnsVisibilty(){this.tableColumns.forEach(t=>{const n=this.optionalTableColumns.find(o=>o.property===t.property);if(n&&t.hidden!==n.hidden){t.hidden=n.hidden;const o=this.getColumnIndex(t.property);t.hidden?this.peopleTable?.hideColumn(o):this.peopleTable?.showColumn(o)}})}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-people-home"]],viewQuery:function(n,o){if(1&n&&(e.GBs($,7),e.GBs(k,5)),2&n){let p;e.mGM(p=e.lsd())&&(o.peopleTable=p.first),e.mGM(p=e.lsd())&&(o.peopleFilter=p.first)}},standalone:!0,features:[e.Vt3,e.aNF],decls:16,vars:16,consts:[["peopleTable",""],[1,"header"],["slot","start",1,"forge-typography--subheading4"],["slot","end","route","/profile","icon","person","label","View profile"],[1,"body"],[1,"body__left"],[1,"table",3,"ngClass"],[1,"table__header",3,"ngClass"],["select-key","id","fixed-headers","true",1,"table__body",3,"forge-table-sort","forge-table-select","forge-table-select-all","forge-table-filter","ngClass","data","columnConfigurations","filter"],[1,"table__footer"],[1,"empty-state"],[1,"busy-state"],[3,"filter"],[3,"filter","filters"],["variant","outlined",1,"app--flex-right",3,"click"],["theme","info-primary",1,"table__header__filter-count"],["id","people--home--column-select","aria-label","Choose table columns",1,"table__header__columns"],["name","view_column"],["target","#people--home--column-select","multiple","",3,"change","value"],[3,"value"],["name","filter_list"],[1,"app--flex-right",3,"forge-paginator-change","pageIndex","pageSize","total"],["src","https://cdn.forge.tylertech.com/v1/images/spot-hero/general-empty-state-spot-hero.svg","alt",""],["list-item",""]],template:function(n,o){if(1&n){const p=e.RV6();e.j41(0,"forge-toolbar",1)(1,"h2",2),e.EFF(2,"People"),e.k0s(),e.nrm(3,"app-routerlink-button",3),e.k0s(),e.j41(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e.DNE(8,z,11,3)(9,X,2,1),e.k0s(),e.j41(10,"forge-table",8,0),e.bIt("forge-table-sort",function(y){return e.eBV(p),e.Njj(o.onTableSort(y.detail))})("forge-table-select",function(){return e.eBV(p),e.Njj(o.onPeopleSelected())})("forge-table-select-all",function(){return e.eBV(p),e.Njj(o.onPeopleSelected())})("forge-table-filter",function(y){return e.eBV(p),e.Njj(o.onTableFilter(y.detail))}),e.k0s(),e.DNE(12,Q,2,3,"div",9),e.k0s(),e.DNE(13,Y,4,0,"div",10)(14,J,4,0,"div",11),e.k0s(),e.j41(15,"app-people-home-filter",12),e.bIt("filter",function(){return e.eBV(p),e.Njj(o.onApplyFilter(!1))}),e.k0s()()}2&n&&(e.R7$(6),e.Y8G("ngClass",e.eq3(10,x,o.isBusy)),e.R7$(),e.Y8G("ngClass",e.eq3(12,L,o.selectedPeople.length)),e.R7$(),e.vxM(8,o.selectedPeople.length?9:8),e.R7$(2),e.Y8G("ngClass",e.eq3(14,x,!o.recordCount))("data",o.recordset)("columnConfigurations",o.tableColumns)("filter",o.viewCache.showFilter),e.R7$(2),e.vxM(12,o.recordCount?12:-1),e.R7$(),e.vxM(13,o.isBusy||o.recordCount?-1:13),e.R7$(),e.vxM(14,o.isBusy?14:-1))},dependencies:[C.MD,C.YU,r.jcE,r.nSt,r.ei2,r.Qpp,r.nVi,r.xBz,r.RlV,r.vzf,r.x6t,r.POd,r.n0d,r.h5Y,r.n$I,r.DWK,r.htm,r.NOb,r.eqj,r.Or1,r.N1z,r.H_6,N,S,k],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden;background-color:var(--forge-theme-surface)}[_nghost-%COMP%]     .forge-table-row__expandable-content{background-color:#e8eaf6!important;border-bottom:1px solid var(--forge-theme-outline)}[_nghost-%COMP%]     .forge-table-row>.forge-table-cell:last-child{padding-right:0;width:1px}[_nghost-%COMP%]     .forge-table-cell__image{width:48px;height:48px;border-radius:50%}.header[_ngcontent-%COMP%]{overflow:hidden}.body[_ngcontent-%COMP%]{overflow:hidden;display:grid;grid-template-columns:1fr auto}.body__left[_ngcontent-%COMP%]{overflow:auto;padding-top:8px}.body[_ngcontent-%COMP%]   app-people-home-filter[_ngcontent-%COMP%]{grid-column:2}.table[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr auto;height:100%}.table__header[_ngcontent-%COMP%]{margin:0 16px;min-height:48px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.table__header-action[_ngcontent-%COMP%]{border-radius:4px;padding:8px;background-color:#e8eaf6}.table__body[_ngcontent-%COMP%]{padding:0 16px}.table__footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;border-top:1px solid var(--forge-theme-outline)}.table__footer[_ngcontent-%COMP%]   forge-paginator[_ngcontent-%COMP%]{margin-left:auto}.table__header__filter-count[_ngcontent-%COMP%]{margin-right:8px}.table__header__columns[_ngcontent-%COMP%]{margin-left:8px}.table__body[_ngcontent-%COMP%]{overflow:auto}.busy-state[_ngcontent-%COMP%]{padding:16px}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;padding:24px}.empty-state[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:256px}"]})}return i})(),T=(()=>{class i{constructor(){this.route=(0,e.WQX)(_.nX),this.router=(0,e.WQX)(_.Ix),this.appCache=(0,e.WQX)(E.v),this.appDataService=(0,e.WQX)(m.D),this.cache=(0,e.WQX)(P),this.index=0,this.noImageUrl="mock-data/no-image.png";const t=this.route.snapshot.params.id;(0,l.O9)(t)?this.appDataService.getPerson(t).subscribe(n=>{this.person=n,this.imageUrl=`mock-data/${a.A.formatNumber(this.person?.id,"2.0-0")}.png`}):this.router.navigate(["people/home"])}onNavigate(t){"back"===t&&this.router.navigate(["people/home"])}onViewWiki(){window.open(this.person?.url,"_blank")}onImageError(t){const n=t.target;n.src.includes(this.noImageUrl)||(n.src=this.noImageUrl,n.onerror=null)}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-people-detail"]],standalone:!0,features:[e.aNF],decls:28,vars:6,consts:[[1,"header"],["slot","start"],["aria-label","Go back",3,"click"],["name","arrow_back"],[1,"forge-typography--subheading4"],["slot","end"],["variant","outlined",3,"click","disabled"],[1,"body"],[1,"body__left"],["slot","label"],["slot","value"],[1,"body__right"],["alt","",3,"error","src"]],template:function(n,o){1&n&&(e.j41(0,"forge-toolbar",0)(1,"div",1)(2,"forge-icon-button",2),e.bIt("click",function(){return o.onNavigate("back")}),e.nrm(3,"forge-icon",3),e.k0s(),e.j41(4,"h2",4),e.EFF(5),e.k0s()(),e.j41(6,"div",5)(7,"forge-button",6),e.bIt("click",function(){return o.onViewWiki()}),e.EFF(8," View wiki "),e.k0s()()(),e.j41(9,"div",7)(10,"div",8)(11,"forge-label-value")(12,"span",9),e.EFF(13,"Gender"),e.k0s(),e.j41(14,"span",10),e.EFF(15),e.k0s()(),e.j41(16,"forge-label-value")(17,"span",9),e.EFF(18,"Occupation"),e.k0s(),e.j41(19,"span",10),e.EFF(20),e.k0s()(),e.j41(21,"forge-label-value")(22,"span",9),e.EFF(23,"Quote"),e.k0s(),e.j41(24,"span",10),e.EFF(25),e.k0s()()(),e.j41(26,"div",11)(27,"img",12),e.bIt("error",function(h){return o.onImageError(h)}),e.k0s()()()),2&n&&(e.R7$(5),e.JRh((null==o.person?null:o.person.firstName)+" "+(null==o.person?null:o.person.lastName)),e.R7$(2),e.Y8G("disabled",!(null!=o.person&&null!=o.person.url&&o.person.url.length)),e.R7$(8),e.JRh(null==o.person?null:o.person.gender),e.R7$(5),e.JRh(null==o.person?null:o.person.occupation),e.R7$(5),e.JRh(null==o.person?null:o.person.quote),e.R7$(2),e.Y8G("src",o.imageUrl,e.B4B))},dependencies:[C.MD,r.ei2,r.Qpp,r.nVi,r.xBz,r.RlV,r.vzf,r.Twd,r.Lnm,r.N1z,r.H_6],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr auto;overflow:hidden}.header[_ngcontent-%COMP%]{overflow:hidden}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.body[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(auto,480px) 1fr;align-items:flex-start;column-gap:48px;overflow:auto;padding:24px}.body__left[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border-color:var(--forge-theme-outline);box-shadow:var(--forge-elevation-1);display:flex;flex-direction:column;row-gap:16px;padding:16px}.body__right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:480px}"]})}return i})();const Z=[{path:"",component:f,providers:[P],children:[{path:"home",component:K},{path:"detail",component:T},{path:"detail/:id",component:T},{path:"",redirectTo:"home",pathMatch:"full"}]}]},9947:(M,F,u)=>{u.d(F,{i:()=>l});var _=u(316),e=u(4607),f=u(8559);const C=[[["","app-card-header",""]],"*",[["","app-card-footer",""]]],O=["[app-card-header]","*","[app-card-footer]"];let l=(()=>{class s{constructor(){this.border="raised"}get raisedClass(){return"raised"===this.border}get outlinedClass(){return"outlined"===this.border}static#e=this.\u0275fac=function(a){return new(a||s)};static#t=this.\u0275cmp=f.VBU({type:s,selectors:[["app-card"]],hostVars:4,hostBindings:function(a,d){2&a&&f.AVh("app-card--raised",d.raisedClass)("app-card--outlined",d.outlinedClass)},inputs:{border:"border"},standalone:!0,features:[f.aNF],ngContentSelectors:O,decls:6,vars:0,consts:[[1,"header"],[1,"body"],["inverted","true",1,"footer"]],template:function(a,d){1&a&&(f.NAR(C),f.j41(0,"forge-toolbar",0),f.SdG(1),f.k0s(),f.j41(2,"div",1),f.SdG(3,1),f.k0s(),f.j41(4,"forge-toolbar",2),f.SdG(5,2),f.k0s())},dependencies:[_.MD,e.N1z,e.H_6],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.app-card--raised[_nghost-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border-color:var(--forge-theme-outline);box-shadow:var(--forge-elevation-1)}.app-card--outlined[_nghost-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border:1px solid var(--forge-theme-outline)}.header[_ngcontent-%COMP%]     [slot=end] forge-icon-button:last-child{margin-right:-8px}.header[_ngcontent-%COMP%]:empty{display:none}.body[_ngcontent-%COMP%]{padding:16px;overflow:auto;flex-grow:1}.footer[_ngcontent-%COMP%]     [slot=start] forge-button+forge-button{margin-right:16px}.footer[_ngcontent-%COMP%]     [slot=end] forge-button+forge-button{margin-left:16px}.footer[_ngcontent-%COMP%]:empty{display:none}"]})}return s})()},123:(M,F,u)=>{u.d(F,{A:()=>C});var _=u(316),e=u(6443),f=u(8758);class C{static sortData(l,s,c,r){return l&&l.length?(c=c||"string","DESC"!==r&&(r="ASC"),l.slice().sort((a,d)=>(a=(0,f.WB)(a,s),d=(0,f.WB)(d,s),"DESC"===r?this.comparator(d,a,c):this.comparator(a,d,c)))):l}static groupData(l,s){return(0,f.cy)(l)&&l.length&&s?.length?l.reduce((c,r)=>{const a=r[s];return c[a]||(c[a]=[]),c[a].push(r),c},{}):l}static filterData(l,s){if(!((0,f.cy)(l)&&l.length&&(0,f.cy)(s)&&s.length))return l;s=s.map(r=>{if((0,f.Kg)(r.value)&&r.value.length){let a;if("<>"===r.value.substring(0,2)){if(2===r.value.length)return r.value="",r;a=r.value.substring(0,2),r.value=r.value.substring(2)}else if("<"===r.value.substring(0,1)||">"===r.value.substring(0,1)){if(1===r.value.length)return r.value="",r;a=r.value.substring(0,1),r.value=r.value.substring(1)}a&&Object.defineProperty(r,"operator",{value:a})}return r.value=(""+r.value).toLowerCase(),r});const c=r=>s.every(a=>{if(!a.value.length)return!0;const d=(""+(0,f.WB)(r,a.key)).toLowerCase();if(!d.length)return!1;if(a.strict)return d===a.value;switch(a.operator){case"<>":return 0!==this.comparator(d,a.value,a.type);case">":return this.comparator(d,a.value,a.type)>0;case"<":return this.comparator(d,a.value,a.type)<0;default:return d.indexOf(a.value)>-1}});return l.filter(r=>c(r))}static comparator(l,s,c="string"){if(l==s)return 0;if(!(0,f.O9)(l))return-1;if(!(0,f.O9)(s))return 1;switch(c){case"boolean":return l?-1:1;case"date":if(l=new Date(l).getTime(),isNaN(l))return-1;if(s=new Date(s).getTime(),isNaN(s))return 1;break;case"number":if(l=parseFloat(l),isNaN(l))return-1;if(s=parseFloat(s),isNaN(s))return 1;break;default:return isNaN(parseFloat(l))||isNaN(parseFloat(s))?(""+l).localeCompare(""+s,navigator.language,{sensitivity:"base"}):(""+l).localeCompare(""+s,navigator.language,{numeric:!0})}return l<s?-1:l>s?1:0}static navigateBack(l,s,c){1===l.getState()?.navigationId?s.navigate(c):l.back()}static elementId(l){return l+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(l,s="MM/dd/yyyy"){return(0,f.O9)(l)?(0,_.Yq)(l,s,navigator.language):""}static formatNumber(l,s="1.2-2"){return(0,_.ZV)(l,navigator.language,s)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){const l={},s=window.location.href.indexOf("?");if(-1!==s){const c=new e.Nl({fromString:window.location.href.substring(s)});c.keys().forEach(r=>{const a=c.getAll(r);a.length&&Object.defineProperty(l,r.toLowerCase(),{value:1===a.length?a[0]:a,enumerable:!0,writable:!0})})}return l}static reduceObject(l){const s={};return Object.keys(l).forEach(c=>{(0,f.O9)(l[c])&&((0,f.cy)(l[c])?l[c].length&&(s[c]=l[c]):(l[c]+"").trim().length&&(s[c]="string"==typeof l[c]?l[c].trim():l[c]))}),s}}}}]);
//# sourceMappingURL=898.c7ce008e4b03b9c8.js.map