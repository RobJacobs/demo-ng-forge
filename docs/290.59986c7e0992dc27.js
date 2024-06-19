"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[290],{827:(M,C,l)=>{l.d(C,{D:()=>x});var e=l(8559),D=l(6443),E=l(3942),v=l(271),m=l(8758),f=l(123);let x=(()=>{class p{constructor(){this.httpClient=(0,e.WQX)(D.Qq)}getProfile(){return this.httpClient.get("mock-data/profile.json")}getPeople(i){return this.httpClient.get("mock-data/people.json").pipe((0,v.T)(s=>{let d=s.length;return i&&(i.filters?.length&&(d=(s=f.A.filterData(s,i.filters.map(u=>({key:u.property,value:u.value,strict:"gender"===u.property||"id"===u.property})))).length),i.sort&&(s=f.A.sortData(s,i.sort.property,"string",i.sort.direction)),(0,m.Et)(i.skip)&&(0,m.Et)(i.take)&&(s=s.slice(i.skip,i.skip+i.take))),{count:d,data:s}}))}getPerson(i){return this.httpClient.get("mock-data/people.json").pipe((0,v.T)(s=>s.find(d=>d.id.toString()===i.toString())))}getSearches(i){return new E.c(s=>{let d=localStorage.getItem(i);(0,m.O9)(d)&&(d=JSON.parse(d)),s.next(d),s.complete()})}saveSearches(i,s){return new E.c(d=>{localStorage.setItem(i,JSON.stringify(s)),d.next(!0),d.complete()})}getLongRequest(){return this.httpClient.get("http://localhost:5000/long-request")}static#e=this.\u0275fac=function(s){return new(s||p)};static#t=this.\u0275prov=e.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},5290:(M,C,l)=>{l.r(C),l.d(C,{TableDemoComponent:()=>A});var e=l(8559),D=l(316),E=l(4205),v=l(5797),m=l(9475),f=l(8537),x=l(3900),p=l(8764),O=l(3617),i=l(3948),s=l(9696),d=l(9877),u=l(8758),c=l(4607),y=l(827),R=l(1103),k=l(411);const w=["table"],T=["columnHeaderPopup"],F=a=>({"forge-table-row--expanded":a});function L(a,g){if(1&a&&e.nrm(0,"forge-icon",18),2&a){const t=e.XpG().$implicit;e.Y8G("name","DESC"===t.sortDirection?"arrow_downward":"ASC"===t.sortDirection?"arrow_upward":"")}}function z(a,g){if(1&a){const t=e.RV6();e.j41(0,"th",15,2),e.bIt("cdkDragStarted",function(){e.eBV(t);const r=e.XpG();return e.Njj(r.onColumnHeaderDragStart())})("click",function(){const r=e.eBV(t).$implicit,n=e.sdS(1),_=e.XpG();return n.close(),e.Njj(_.onTableSort(r))})("contextmenu",function(r){e.eBV(t);const n=e.XpG();return e.Njj(n.onColumnHeaderRightClick(r))}),e.j41(2,"div",16)(3,"span",17),e.EFF(4),e.k0s(),e.DNE(5,L,1,1,"forge-icon",18),e.k0s(),e.j41(6,"div",19),e.nrm(7,"div",20),e.j41(8,"div",21),e.bIt("mousedown",function(r){const n=e.eBV(t),_=n.$implicit,h=n.$index,P=e.XpG();return e.Njj(P.onColumnHeaderResize(r,h+1,_))}),e.k0s()()()}if(2&a){const t=g.$implicit;e.XpG();const o=e.sdS(20);e.xc7("--table-column-width",t.width),e.Y8G("forgePopover",o)("forgePopoverPlacement","right-end"),e.R7$(4),e.JRh(t.header),e.R7$(),e.vxM(5,null!=t.sortDirection&&t.sortDirection.length?5:-1)}}function B(a,g){if(1&a&&(e.j41(0,"td",26)(1,"div",28),e.EFF(2),e.k0s()()),2&a){const t=g.$implicit,o=e.XpG().$implicit;e.R7$(2),e.SpI(" ",o[t.property]," ")}}function I(a,g){if(1&a&&(e.j41(0,"tr",27)(1,"td",29),e.nI1(2,"appCallback"),e.nrm(3,"app-table-detail",30),e.k0s()()),2&a){const t=e.XpG().index,o=e.XpG();e.R7$(),e.BMQ("colspan",e.i5U(2,3,o.tableColumns,o.visibleColumns).length+1),e.R7$(2),e.Y8G("data",o.expandedRows[t])("rowIndex",t)}}function j(a,g){if(1&a){const t=e.RV6();e.qex(0),e.j41(1,"tr",22)(2,"td",23)(3,"forge-icon-button",24),e.bIt("click",function(){const r=e.eBV(t),n=r.$implicit,_=r.index,h=e.XpG();return e.Njj(h.onExpandRow(_,n))}),e.nrm(4,"forge-icon",25),e.k0s()(),e.Z7z(5,B,3,1,"td",26,e.Vm6),e.nI1(7,"appCallback"),e.k0s(),e.DNE(8,I,4,6,"tr",27),e.bVm()}if(2&a){const t=g.index,o=e.XpG();e.R7$(),e.Y8G("ngClass",e.eq3(6,F,o.expandedRows[t])),e.R7$(3),e.Y8G("name",o.expandedRows[t]?"expand_less":"expand_more"),e.R7$(),e.Dyx(e.i5U(7,3,o.tableColumns,o.visibleColumns)),e.R7$(3),e.vxM(8,o.expandedRows[t]?8:-1)}}function S(a,g){if(1&a&&(e.j41(0,"forge-list-item",32),e.nrm(1,"forge-checkbox",35),e.j41(2,"span"),e.EFF(3),e.k0s()()),2&a){const t=g.$implicit;e.Y8G("value",t),e.R7$(),e.Y8G("checked",!t.hidden),e.R7$(2),e.JRh(t.header)}}function $(a,g){if(1&a){const t=e.RV6();e.j41(0,"forge-list",31),e.bIt("forge-list-item-select",function(r){e.eBV(t);const n=e.XpG();return e.Njj(n.onColumnPopupItemSelected(r.detail.value))}),e.Z7z(1,S,4,3,"forge-list-item",32,e.Vm6),e.nrm(3,"forge-divider"),e.j41(4,"forge-list-item",33)(5,"span"),e.EFF(6,"Reset column widths"),e.k0s()(),e.j41(7,"forge-list-item",34)(8,"span"),e.EFF(9,"Freeze column"),e.k0s()()()}if(2&a){const t=e.XpG();e.R7$(),e.Dyx(t.tableColumns)}}let A=(()=>{class a{constructor(){this.appDataService=(0,e.WQX)(y.D),this.tableColumnResize$=new E.B,this.isColumnResizing=!1,this.isBusy=!1,this.filterCache={sort:{property:"lastName",direction:d.UE.Ascending},filters:[],skip:0,take:25},this.recordset=[],this.recordset$=new v.t([]),this.recordCount=0,this.tableColumns=[{header:"Id",property:"id",width:48},{header:"First",property:"firstName"},{header:"Last",property:"lastName"},{header:"Gender",property:"gender"},{header:"Occupation",property:"occupation"}],this.tableHeaderOffset=0,this.expandedRows=[],this.visibleColumns=t=>t.filter(o=>!0!==o.hidden),this.recordsetTrackBy=(t,o)=>o.id}ngOnInit(){this.getRecords()}ngAfterViewInit(){this.virtualScrollViewport?.renderedRangeStream.subscribe(t=>{this.tableHeaderOffset=t.start,!this.isBusy&&t.start>0&&t.end+67>this.recordCount&&(this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe((0,m.j)(()=>this.isBusy=!1)).subscribe(o=>{const r=this.recordset.length+1;this.recordset=[...this.recordset,...o.data.map((n,_)=>(n.id=r+n.id,n))],this.recordCount=this.recordset.length,this.recordset$.next(this.recordset)}))})}ngOnDestroy(){this.tableColumnResize$.next(),this.tableColumnResize$.complete()}onColumnHeaderDragStart(){this.virtualScrollViewport?.scrollToOffset(0)}onColumnHeaderDragDrop(t){(0,i.HD)(this.tableColumns,t.previousIndex,t.currentIndex),this.tableColumns=[...this.tableColumns]}onColumnHeaderResize(t,o,r){t.stopPropagation(),t.preventDefault(),this.tableColumnResize$.next();let n=(this.tableElementRef?.nativeElement).querySelectorAll("thead tr th")[o],_=(this.tableElementRef?.nativeElement).querySelectorAll(`tbody tr td:nth-child(${o+1})`),h=t.clientX;if(n){this.isColumnResizing=!0,this.tableElementRef?.nativeElement.querySelector(".forge-table-head__row")?.classList.add("forge-table-head__row--resizing"),n.classList.add("forge-table-head__cell--resizing"),_.forEach(b=>b.classList.add("forge-table-body__cell--resizing")),(0,f.R)(document.body,"mousemove").pipe((0,x.Q)(this.tableColumnResize$),(0,p.M)(b=>{r.width=n.offsetWidth+(b.clientX-h),h=b.clientX})).subscribe();const P=this.tableElementRef?.nativeElement.querySelector("thead");(0,O.h)((0,f.R)(P,"mouseup"),(0,f.R)(P,"mouseleave")).pipe((0,m.j)(()=>requestAnimationFrame(()=>{this.isColumnResizing=!1,n=void 0,_=void 0})),(0,x.Q)(this.tableColumnResize$),(0,p.M)(b=>{this.tableColumnResize$.next(),this.tableElementRef?.nativeElement.querySelector(".forge-table-head__row")?.classList.remove("forge-table-head__row--resizing"),n.classList.remove("forge-table-head__cell--resizing"),_.forEach(H=>H.classList.remove("forge-table-body__cell--resizing"))})).subscribe()}}onColumnHeaderRightClick(t){t.preventDefault(),this.columnHeaderPopupDirective?.popoverElement?this.columnHeaderPopupDirective.close():this.columnHeaderPopupDirective?.open()}onColumnPopupItemSelected(t){switch(t){case"reset-column-width":this.tableColumns.forEach(o=>o.width=void 0);break;case"freeze-column":{const o=(this.tableElementRef?.nativeElement).querySelectorAll("thead tr th")[0],r=(this.tableElementRef?.nativeElement).querySelectorAll("tbody tr td:nth-child(1)");o.classList.add("forge-table-head__cell--frozen"),r.forEach(n=>n.classList.add("forge-table-body__cell--frozen"));break}default:{const o=this.tableColumns.find(r=>r.property===t.property);o&&this.tableColumns.filter(r=>!r.hidden).length&&(o.hidden=!(0,u.O9)(o.hidden)||!o.hidden,o.sortDirection=void 0,this.tableColumns=[...this.tableColumns]);break}}this.columnHeaderPopupDirective?.close()}onTableSort(t){this.isColumnResizing||(this.tableColumns.filter(o=>o.property!==t.property).forEach(o=>o.sortDirection=void 0),t.sortDirection=t.sortDirection===d.UE.Ascending?d.UE.Descending:t.sortDirection===d.UE.Descending?void 0:d.UE.Ascending,this.filterCache.sort=t.sortDirection?{property:t.property,direction:t.sortDirection}:void 0,this.filterCache.skip=0,this.virtualScrollViewport?.scrollToOffset(0),this.expandedRows.length=0,this.getRecords())}onTablePaginatorChange(t){this.filterCache.skip=t.pageIndex*t.pageSize,this.filterCache.take=t.pageSize,this.expandedRows.length=0,this.getRecords()}onExpandRow(t,o){this.expandedRows[t]=this.expandedRows[t]?void 0:o}getRecords(){this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe((0,m.j)(()=>this.isBusy=!1)).subscribe(t=>{this.recordset=t.data,this.recordCount=t.count,this.recordset$.next(this.recordset)})}static#e=this.\u0275fac=function(o){return new(o||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-table-demo"]],viewQuery:function(o,r){if(1&o&&(e.GBs(w,7),e.GBs(T,5,c.Hci),e.GBs(s.d6,5)),2&o){let n;e.mGM(n=e.lsd())&&(r.tableElementRef=n.first),e.mGM(n=e.lsd())&&(r.columnHeaderPopupDirective=n.first),e.mGM(n=e.lsd())&&(r.virtualScrollViewport=n.first)}},standalone:!0,features:[e.aNF],decls:21,vars:10,consts:[["table",""],["columnHeaderPopupTemplate",""],["columnHeaderPopup","forgePopover"],[1,"header"],["slot","start",1,"forge-typography--subheading4"],[1,"body"],[1,"body__table"],["itemSize","48"],[1,"forge-table","forge-table--fixed"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"forge-table-row","forge-table-head__row",3,"cdkDropListDropped"],[1,"forge-table-cell","forge-table-head__cell","forge-table-row__expander"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"forgePopover","forgePopoverPlacement","--table-column-width"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["inverted","true"],["slot","end",1,"forge-typography--label1"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"cdkDragStarted","click","contextmenu","forgePopover","forgePopoverPlacement"],[1,"forge-table-head__cell-container"],[1,"forge-table-head__cell-text"],["aria-hidden","true",1,"forge-table-head__cell-sort-icon",3,"name"],[1,"forge-table-head__cell-actions"],["cdkDragHandle","",1,"forge-table-head__cell-dragger"],[1,"forge-table-head__cell-resizer",3,"mousedown"],[1,"forge-table-row","forge-table-body__row",3,"ngClass"],[1,"forge-table-cell","forge-table-body__cell","forge-table-row__expander"],["aria-label","Toggle details",3,"click"],[3,"name"],[1,"forge-table-cell","forge-table-body__cell"],[1,"forge-table-row","forge-table-body__row","forge-table-row__expandable-content"],[1,"forge-table-cell__container"],[1,"forge-table-row__expandable-content-cell"],[3,"data","rowIndex"],[1,"column-popup",3,"forge-list-item-select"],[3,"value"],["value","reset-column-width"],["value","freeze-column"],["slot","start","checked","","aria-label","Show/hide table column",3,"checked"]],template:function(o,r){if(1&o){const n=e.RV6();e.j41(0,"forge-toolbar",3)(1,"h2",4),e.EFF(2,"Table demo"),e.k0s()(),e.j41(3,"div",5)(4,"div",6)(5,"cdk-virtual-scroll-viewport",7)(6,"table",8,0)(8,"thead")(9,"tr",9),e.bIt("cdkDropListDropped",function(h){return e.eBV(n),e.Njj(r.onColumnHeaderDragDrop(h))}),e.nrm(10,"th",10),e.Z7z(11,z,9,6,"th",11,e.Vm6),e.nI1(13,"appCallback"),e.k0s()(),e.j41(14,"tbody"),e.DNE(15,j,9,8,"ng-container",12),e.k0s()()()(),e.j41(16,"forge-toolbar",13)(17,"span",14),e.EFF(18),e.k0s()()(),e.DNE(19,$,10,0,"ng-template",null,1,e.C5r)}2&o&&(e.R7$(8),e.xc7("--table-header-offset",r.tableHeaderOffset)("--table-header-translate-y",-48*r.tableHeaderOffset+"px"),e.R7$(3),e.Dyx(e.i5U(13,7,r.tableColumns,r.visibleColumns)),e.R7$(4),e.Y8G("cdkVirtualForOf",r.recordset$)("cdkVirtualForTrackBy",r.recordsetTrackBy),e.R7$(3),e.SpI("Records: ",r.recordCount,""))},dependencies:[D.MD,D.YU,i.ad,i.O7,i.T1,i.Fb,s.E9,s.yg,s.E$,s.d6,c.VQY,c.PYJ,c.b$f,c.heP,c.nVi,c.xBz,c.RlV,c.vzf,c.nkw,c.Ptl,c.svQ,c.sB8,c.fNY,c.Hci,c.N1z,c.H_6,k.j,R.q],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden;background-color:var(--forge-theme-surface)}[_nghost-%COMP%]     .forge-table{min-width:100%;width:max-content;position:relative}[_nghost-%COMP%]     .forge-table-head__row{height:48px}[_nghost-%COMP%]     .forge-table-head__row--resizing .forge-table-head__cell:not(.forge-table-head__cell--resizing) .forge-table-head__cell-actions{display:none}[_nghost-%COMP%]     .forge-table-head__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent;width:calc(var(--table-column-width, 200) * 1px);top:calc(var(--table-header-offset, 0) * 48px * -1)}[_nghost-%COMP%]     .forge-table-head__cell:hover .forge-table-head__cell-actions{transition-delay:.5s;width:48px}[_nghost-%COMP%]     .forge-table-head__cell-sort-icon{display:inline!important}[_nghost-%COMP%]     .forge-table-head__cell-actions{position:absolute;top:4px;bottom:4px;right:8px;display:flex;width:0;overflow:hidden;transition:width .25s;height:40px}[_nghost-%COMP%]     .forge-table-head__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-actions{transition-delay:0;width:24px}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-dragger{display:none}[_nghost-%COMP%]     .forge-table-head__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell-dragger, [_nghost-%COMP%]     .forge-table-head__cell-resizer{height:100%;min-width:24px;margin-left:auto;border:1px solid var(--forge-theme-outline);background-color:var(--forge-theme-scrollbar-track-hover)}[_nghost-%COMP%]     .forge-table-head__cell-dragger{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M12%2021V12M12%2021L15%2018M12%2021L9%2018M12%2012V3M12%2012H3M12%2012H21M12%203L9%206M12%203L15%206M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-head__cell-resizer{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move_Horizontal%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M3%2012H21M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-body__row{height:48px}[_nghost-%COMP%]     .forge-table-body__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent}[_nghost-%COMP%]     .forge-table-body__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-body__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-row__expander{width:48px;padding-left:0!important;padding-right:0!important}[_nghost-%COMP%]     .forge-table-row__expandable-content{background-color:#e8eaf6!important;border-bottom:1px solid var(--forge-theme-outline)}  .column-popup{min-width:280px;--forge-list-padding: 0}  .column-popup forge-list-item{cursor:pointer}.body[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr auto;overflow:hidden;height:100%}.body[_ngcontent-%COMP%]   cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:100%}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border:1px solid var(--forge-theme-outline);border:solid 2px #3f51b5;display:flex;padding:0 24px}.cdk-drag-preview[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#e8eaf6}.cdk-drag-placeholder[_ngcontent-%COMP%]   .forge-table-head__cell-container[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]})}return a})()}}]);
//# sourceMappingURL=290.59986c7e0992dc27.js.map