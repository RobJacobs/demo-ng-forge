import{a as ue,b as v,c as Ce,d as ve,e as we,g as xe,h as De,j as ye,l as ke}from"./chunk-GEJKSFYS.js";import{a as fe}from"./chunk-A6JSOH66.js";import{a as be}from"./chunk-IF43B4JA.js";import"./chunk-4BJHX2DN.js";import"./chunk-TMLBYOLU.js";import{a as _e}from"./chunk-JCG3AHUO.js";import{a as he}from"./chunk-5G5LBANU.js";import"./chunk-AGZOMTSQ.js";import{E as Y,Ic as ce,Kc as pe,Xb as J,cb as u,d as K,ic as ee,j as W,jc as te,mc as oe,nc as re,oc as ie,pc as ne,pd as me,qd as ge,uc as ae,vc as le,wc as se,xc as de}from"./chunk-T54VJELX.js";import{$b as Z,Ab as m,Bb as H,C as x,E as q,Eb as L,Fb as M,Gb as E,Hb as S,Ib as l,Jb as s,Kb as _,Lb as X,Mb as U,Ob as P,P as D,Rb as b,Sb as c,Z as O,_ as R,_a as a,_b as F,bc as f,cc as I,dc as $,g as A,ha as Q,hb as j,kc as G,mc as z,oc as T,sa as g,ta as h,tb as V,ub as y,yb as k,zb as N}from"./chunk-5VCAQWVT.js";import"./chunk-NCBA65HR.js";var Ee=["table"],Se=["columnHeaderPopover"],Pe=i=>({"forge-table-row--expanded":i});function Fe(i,p){if(i&1&&(l(0,"forge-list-item",6),_(1,"forge-icon",20),l(2,"button",8),f(3),s()()),i&2){let e=p.$implicit;m("value",e),a(),m("name",e.hidden?"check_box_outline_blank":"check_box"),a(2),I(e.header)}}function ze(i,p){if(i&1&&_(0,"forge-icon",24),i&2){let e=c().$implicit;m("name",e.sortDirection==="DESC"?"arrow_downward":e.sortDirection==="ASC"?"arrow_upward":"")}}function Te(i,p){if(i&1){let e=P();l(0,"th",21),b("cdkDragStarted",function(){g(e);let o=c();return h(o.onColumnHeaderDragStart())})("click",function(o){let r=g(e).$implicit,n=c();return h(n.onTableSort(o,r))})("contextmenu",function(o){let r=g(e).$index,n=c();return h(n.onColumnHeaderRightClick(o,r))}),l(1,"div",22)(2,"span",23),f(3),s(),k(4,ze,1,1,"forge-icon",24),s(),l(5,"div",25),_(6,"div",26),l(7,"div",27),b("mousedown",function(o){let r=g(e),n=r.$implicit,d=r.$index,w=c();return h(w.onColumnHeaderResize(o,d+1,n))}),s()()()}if(i&2){let e=p.$implicit,t=p.$index,o=c();H("--table-column-width",e.width),m("id","th-"+t+"-"+o.id),a(3),I(e.header),a(),L(e.sortDirection!=null&&e.sortDirection.length?4:-1)}}function Oe(i,p){if(i&1&&(l(0,"td",32)(1,"div",34),f(2),s()()),i&2){let e=p.$implicit,t=c().$implicit;a(2),$(" ",t[e.property]," ")}}function Re(i,p){if(i&1&&(l(0,"tr",33)(1,"td",35),z(2,"appCallback"),_(3,"app-table-detail",36),s()()),i&2){let e=c().index,t=c();a(),N("colspan",T(2,3,t.tableColumns,t.visibleColumns).length+1),a(2),m("data",t.expandedRows[e])("rowIndex",e)}}function Ve(i,p){if(i&1){let e=P();X(0),l(1,"tr",28)(2,"td",29)(3,"forge-icon-button",30),b("click",function(){let o=g(e),r=o.$implicit,n=o.index,d=c();return h(d.onExpandRow(n,r))}),_(4,"forge-icon",31),s()(),E(5,Oe,3,1,"td",32,M),z(7,"appCallback"),s(),k(8,Re,4,6,"tr",33),U()}if(i&2){let e=p.index,t=c();a(),m("ngClass",G(6,Pe,t.expandedRows[e])),a(3),m("name",t.expandedRows[e]?"expand_less":"expand_more"),a(),S(T(7,3,t.tableColumns,t.visibleColumns)),a(3),L(t.expandedRows[e]?8:-1)}}var et=(()=>{class i{constructor(){this.appDataService=Q(_e),this.tableElementRef=y("table"),this.columnHeaderPopover=y("columnHeaderPopover"),this.virtualScrollViewport=y(v),this.tableColumnResize$=new A,this.isColumnResizing=!1,this.isBusy=!1,this.filterCache={sort:{property:"lastName",direction:u.Ascending},filters:[],skip:0,take:25},this.recordset=V([]),this.tableColumns=[{header:"Id",property:"id",width:48},{header:"First",property:"firstName"},{header:"Last",property:"lastName"},{header:"Gender",property:"gender"},{header:"Occupation",property:"occupation"}],this.tableHeaderOffset=V(0),this.tableRowHeight=56,this.expandedRows=[],this.id=he.elementId("app-"),this.visibleColumns=e=>e.filter(t=>t.hidden!==!0),this.recordsetTrackBy=(e,t)=>t.id}ngOnInit(){this.getRecords(),this.virtualScrollViewport().checkViewportSize()}ngAfterViewInit(){this.virtualScrollViewport()?.renderedRangeStream.subscribe(e=>{this.tableHeaderOffset.set(e.start),!this.isBusy&&e.start>0&&e.end+20>this.recordset().length&&(this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe(D(()=>this.isBusy=!1)).subscribe(t=>{let o=this.recordset().length+1;this.recordset.update(r=>[...r,...t.data.map((n,d)=>(n.id=o+n.id,n))])}))})}ngOnDestroy(){this.tableColumnResize$.next(),this.tableColumnResize$.complete()}onColumnHeaderDragStart(){this.virtualScrollViewport()?.scrollToOffset(0)}onColumnHeaderDragDrop(e){we(this.tableColumns,e.previousIndex,e.currentIndex),this.tableColumns=[...this.tableColumns]}onColumnHeaderResize(e,t,o){e.stopPropagation(),e.preventDefault(),this.tableColumnResize$.next();let r=this.tableElementRef(),n=(r?.nativeElement).querySelectorAll("thead tr th")[t],d=(r?.nativeElement).querySelectorAll(`tbody tr td:nth-child(${t+1})`),w=e.clientX;if(n){this.isColumnResizing=!0,r?.nativeElement.querySelector(".forge-table-head__row")?.classList.add("forge-table-head__row--resizing"),n.classList.add("forge-table-head__cell--resizing"),d.forEach(C=>C.classList.add("forge-table-body__cell--resizing")),x(document.body,"mousemove").pipe(O(this.tableColumnResize$),R(C=>{o.width=n.offsetWidth+(C.clientX-w),w=C.clientX})).subscribe();let B=r?.nativeElement.querySelector("thead");q(x(B,"mouseup"),x(B,"mouseleave")).pipe(D(()=>requestAnimationFrame(()=>{this.isColumnResizing=!1,n=void 0,d=void 0})),O(this.tableColumnResize$),R(C=>{this.tableColumnResize$.next(),this.tableElementRef()?.nativeElement.querySelector(".forge-table-head__row")?.classList.remove("forge-table-head__row--resizing"),n.classList.remove("forge-table-head__cell--resizing"),d.forEach(Me=>Me.classList.remove("forge-table-body__cell--resizing"))})).subscribe()}}onColumnHeaderRightClick(e,t){e.preventDefault();let o=this.columnHeaderPopover();o.nativeElement.open?(o.nativeElement.open=!1,requestAnimationFrame(()=>{this.columnHeaderPopover().nativeElement.anchor=""})):(o.nativeElement.anchor=`th-${t}-${this.id}`,requestAnimationFrame(()=>{this.columnHeaderPopover().nativeElement.open=!0}))}onColumnPopoverItemSelected(e){switch(e){case"reset-column-width":this.tableColumns.forEach(o=>o.width=void 0);break;case"freeze-column":{let o=this.tableElementRef(),r=(o?.nativeElement).querySelectorAll("thead tr th")[0],n=(o?.nativeElement).querySelectorAll("tbody tr td:nth-child(1)");r.classList.add("forge-table-head__cell--frozen"),n.forEach(d=>d.classList.add("forge-table-body__cell--frozen"));break}default:{let o=this.tableColumns.find(r=>r.property===e.property);o&&this.tableColumns.filter(r=>!r.hidden).length&&(o.hidden=Y(o.hidden)?!o.hidden:!0,o.sortDirection=void 0,this.tableColumns=[...this.tableColumns]);break}}let t=this.columnHeaderPopover();t.nativeElement.open=!1,t.nativeElement.anchor=""}onTableSort(e,t){e.stopPropagation();let o=this.columnHeaderPopover();o.nativeElement.open=!1,o.nativeElement.anchor="",this.isColumnResizing||(this.tableColumns.filter(r=>r.property!==t.property).forEach(r=>r.sortDirection=void 0),t.sortDirection===u.Ascending?t.sortDirection=u.Descending:t.sortDirection===u.Descending?t.sortDirection=void 0:t.sortDirection=u.Ascending,this.filterCache.sort=t.sortDirection?{property:t.property,direction:t.sortDirection}:void 0,this.filterCache.skip=0,this.virtualScrollViewport()?.scrollToOffset(0),this.expandedRows.length=0,this.getRecords())}onTablePaginatorChange(e){this.filterCache.skip=e.pageIndex*e.pageSize,this.filterCache.take=e.pageSize,this.expandedRows.length=0,this.getRecords()}onExpandRow(e,t){this.expandedRows[e]?this.expandedRows[e]=void 0:this.expandedRows[e]=t}getRecords(){this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe(D(()=>this.isBusy=!1)).subscribe(e=>{this.recordset.set(e.data)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=j({type:i,selectors:[["app-table-demo"]],viewQuery:function(t,o){t&1&&(F(o.tableElementRef,Ee,5),F(o.columnHeaderPopover,Se,5),F(o.virtualScrollViewport,v,5)),t&2&&Z(3)},decls:31,vars:11,consts:[["columnHeaderPopover",""],["table",""],[1,"header"],["slot","start",1,"forge-typography--subheading4"],["placement","right-end","animation-type","none","open","false"],[1,"column-popover",3,"forge-list-item-select"],[3,"value"],["value","reset-column-width"],["type","button"],["value","freeze-column"],[1,"body"],[1,"body__table"],[3,"itemSize"],[1,"forge-table","forge-table--fixed"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"forge-table-row","forge-table-head__row",3,"cdkDropListDropped"],[1,"forge-table-cell","forge-table-head__cell","forge-table-row__expander"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"--table-column-width","id"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["inverted","true"],["slot","end",1,"forge-typography--label1"],["slot","start",3,"name"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"cdkDragStarted","click","contextmenu","id"],[1,"forge-table-head__cell-container"],[1,"forge-table-head__cell-text"],["aria-hidden","true",1,"forge-table-head__cell-sort-icon",3,"name"],[1,"forge-table-head__cell-actions"],["cdkDragHandle","",1,"forge-table-head__cell-dragger"],[1,"forge-table-head__cell-resizer",3,"mousedown"],[1,"forge-table-row","forge-table-body__row",3,"ngClass"],[1,"forge-table-cell","forge-table-body__cell","forge-table-row__expander"],["aria-label","Toggle details",3,"click"],[3,"name"],[1,"forge-table-cell","forge-table-body__cell"],[1,"forge-table-row","forge-table-body__row","forge-table-row__expandable-content"],[1,"forge-table-cell__container"],[1,"forge-table-row__expandable-content-cell"],[3,"data","rowIndex"]],template:function(t,o){if(t&1){let r=P();l(0,"forge-toolbar",2)(1,"h2",3),f(2,"Table demo"),s()(),l(3,"forge-popover",4,0)(5,"forge-list",5),b("forge-list-item-select",function(d){return g(r),h(o.onColumnPopoverItemSelected(d.detail.value))}),E(6,Fe,4,3,"forge-list-item",6,M),_(8,"forge-divider"),l(9,"forge-list-item",7)(10,"button",8),f(11,"Reset column widths"),s()(),l(12,"forge-list-item",9)(13,"button",8),f(14,"Freeze column"),s()()()(),l(15,"div",10)(16,"div",11)(17,"cdk-virtual-scroll-viewport",12)(18,"table",13,1)(20,"thead")(21,"tr",14),b("cdkDropListDropped",function(d){return g(r),h(o.onColumnHeaderDragDrop(d))}),_(22,"th",15),E(23,Te,8,5,"th",16,M),z(25,"appCallback"),s()(),l(26,"tbody"),k(27,Ve,9,8,"ng-container",17),s()()()(),l(28,"forge-toolbar",18)(29,"span",19),f(30),s()()()}t&2&&(a(6),S(o.tableColumns),a(11),m("itemSize",o.tableRowHeight),a(3),H("--table-header-offset",o.tableHeaderOffset())("--table-header-translate-y",o.tableHeaderOffset()*-o.tableRowHeight+"px"),a(3),S(T(25,8,o.tableColumns,o.visibleColumns)),a(4),m("cdkVirtualForOf",o.recordset())("cdkVirtualForTrackBy",o.recordsetTrackBy),a(3),$("Records: ",o.recordset().length,""))},dependencies:[W,K,ke,ye,De,xe,ve,ue,Ce,v,J,te,ee,ne,ie,oe,re,se,le,de,ae,pe,ce,ge,me,be,fe],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden;background-color:var(--forge-theme-surface)}[_nghost-%COMP%]     .forge-table{--table-row-height: 56px;min-width:100%;width:max-content;position:relative}[_nghost-%COMP%]     .forge-table-head__row{height:var(--table-row-height)}[_nghost-%COMP%]     .forge-table-head__row--resizing .forge-table-head__cell:not(.forge-table-head__cell--resizing) .forge-table-head__cell-actions{display:none}[_nghost-%COMP%]     .forge-table-head__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent;width:calc(var(--table-column-width, 200) * 1px);top:calc(var(--table-header-offset, 0) * var(--table-row-height) * -1)}[_nghost-%COMP%]     .forge-table-head__cell:hover .forge-table-head__cell-actions{transition-delay:.5s;width:48px}[_nghost-%COMP%]     .forge-table-head__cell-sort-icon{display:inline!important}[_nghost-%COMP%]     .forge-table-head__cell-actions{position:absolute;top:4px;bottom:4px;right:8px;display:flex;width:0;overflow:hidden;transition:width .25s;height:calc(var(--table-row-height) - 8)}[_nghost-%COMP%]     .forge-table-head__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-actions{transition-delay:0;width:24px}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-dragger{display:none}[_nghost-%COMP%]     .forge-table-head__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell-dragger, [_nghost-%COMP%]     .forge-table-head__cell-resizer{height:100%;min-width:24px;margin-left:auto;border:1px solid var(--forge-theme-outline);background-color:var(--forge-theme-surface-container-minimum)}[_nghost-%COMP%]     .forge-table-head__cell-dragger{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M12%2021V12M12%2021L15%2018M12%2021L9%2018M12%2012V3M12%2012H3M12%2012H21M12%203L9%206M12%203L15%206M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-head__cell-resizer{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move_Horizontal%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M3%2012H21M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-body__row{height:var(--table-row-height)}[_nghost-%COMP%]     .forge-table-body__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent}[_nghost-%COMP%]     .forge-table-body__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-body__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-row__expander{width:48px;padding-left:0!important;padding-right:0!important}[_nghost-%COMP%]     .forge-table-row__expandable-content{background-color:#e8eaf6!important;border-bottom:1px solid var(--forge-theme-outline)}  .column-popover{min-width:280px;--forge-list-padding: 0}  .column-popover forge-list-item{cursor:pointer}.body[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr auto;overflow:hidden;height:100%}.body[_ngcontent-%COMP%]   cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:100%}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border:1px solid var(--forge-theme-outline);border:solid 2px #3f51b5;display:flex;padding:0 24px}.cdk-drag-preview[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#e8eaf6}.cdk-drag-placeholder[_ngcontent-%COMP%]   .forge-table-head__cell-container[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}






/*# sourceMappingURL=table-demo.component-Z5KYT2Z5.css.map */`]})}}return i})();export{et as TableDemoComponent};
//# sourceMappingURL=chunk-JRSSB6LS.js.map
