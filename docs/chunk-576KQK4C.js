import{a as be,b as z,c as Ce,d as ve,e as xe,g as we,h as ye,j as De,l as ke}from"./chunk-IMFKH2ZM.js";import{a as fe}from"./chunk-EOD454AY.js";import{a as ue}from"./chunk-X6ASINRZ.js";import"./chunk-TWKAR5JE.js";import"./chunk-ZJX5VDNG.js";import"./chunk-T7MAX6OV.js";import{a as _e}from"./chunk-JMGMC3YK.js";import{a as he}from"./chunk-Q65ABCTW.js";import"./chunk-JWSBDH3Q.js";import{E as Z,Jc as ce,Lc as pe,Xb as J,cb as b,d as K,jc as ee,k as W,kc as te,nc as oe,oc as re,pc as ie,qc as ne,qd as me,rd as ge,vc as ae,wc as le,xc as se,yc as de}from"./chunk-TDRYUBHM.js";import{$a as n,$b as G,Ab as X,B as q,Bb as U,Db as E,Gb as u,Hb as d,M as w,Mb as P,Nb as S,Ob as F,Qb as f,Rb as I,Sb as $,W as R,X as V,Zb as Y,bc as O,dc as T,f as B,fa as Q,g as A,ka as j,mb as y,ob as N,pb as m,qb as L,tb as H,ub as D,va as g,vb as k,wa as h,wb as M,xb as a,yb as l,z as x,zb as _}from"./chunk-UO34YWUS.js";import"./chunk-NCBA65HR.js";var Ee=["table"],Pe=["columnHeaderPopover"],Se=i=>({"forge-table-row--expanded":i});function Fe(i,c){if(i&1&&_(0,"forge-icon",23),i&2){let e=d().$implicit;m("name",e.sortDirection==="DESC"?"arrow_downward":e.sortDirection==="ASC"?"arrow_upward":"")}}function Oe(i,c){if(i&1){let e=E();a(0,"th",20),u("cdkDragStarted",function(){g(e);let o=d();return h(o.onColumnHeaderDragStart())})("click",function(o){let r=g(e).$implicit,s=d();return h(s.onTableSort(o,r))})("contextmenu",function(o){let r=g(e).$index,s=d();return h(s.onColumnHeaderRightClick(o,r))}),a(1,"div",21)(2,"span",22),f(3),l(),y(4,Fe,1,1,"forge-icon",23),l(),a(5,"div",24),_(6,"div",25),a(7,"div",26),u("mousedown",function(o){let r=g(e),s=r.$implicit,p=r.$index,v=d();return h(v.onColumnHeaderResize(o,p+1,s))}),l()()()}if(i&2){let e=c.$implicit,t=c.$index,o=d();L("--table-column-width",e.width),m("id","th-"+t+"-"+o.id),n(3),I(e.header),n(),H(e.sortDirection!=null&&e.sortDirection.length?4:-1)}}function Te(i,c){if(i&1&&(a(0,"td",31)(1,"div",33),f(2),l()()),i&2){let e=c.$implicit,t=d().$implicit;n(2),$(" ",t[e.property]," ")}}function ze(i,c){if(i&1&&(a(0,"tr",32)(1,"td",34),O(2,"appCallback"),_(3,"app-table-detail",35),l()()),i&2){let e=d().index,t=d();n(),N("colspan",T(2,3,t.tableColumns,t.visibleColumns).length+1),n(2),m("data",t.expandedRows[e])("rowIndex",e)}}function Re(i,c){if(i&1){let e=E();X(0),a(1,"tr",27)(2,"td",28)(3,"forge-icon-button",29),u("click",function(){let o=g(e),r=o.$implicit,s=o.index,p=d();return h(p.onExpandRow(s,r))}),_(4,"forge-icon",30),l()(),k(5,Te,3,1,"td",31,D),O(7,"appCallback"),l(),y(8,ze,4,6,"tr",32),U()}if(i&2){let e=c.index,t=d();n(),m("ngClass",G(6,Se,t.expandedRows[e])),n(3),m("name",t.expandedRows[e]?"expand_less":"expand_more"),n(),M(T(7,3,t.tableColumns,t.visibleColumns)),n(3),H(t.expandedRows[e]?8:-1)}}function Ve(i,c){if(i&1&&(a(0,"forge-list-item",16),_(1,"forge-icon",36),a(2,"button",18),f(3),l()()),i&2){let e=c.$implicit;m("value",e),n(),m("name",e.hidden?"check_box_outline_blank":"check_box"),n(2),I(e.header)}}var rt=(()=>{class i{constructor(){this.appDataService=Q(_e),this.tableColumnResize$=new B,this.isColumnResizing=!1,this.isBusy=!1,this.filterCache={sort:{property:"lastName",direction:b.Ascending},filters:[],skip:0,take:25},this.recordset=[],this.recordset$=new A([]),this.recordCount=0,this.tableColumns=[{header:"Id",property:"id",width:48},{header:"First",property:"firstName"},{header:"Last",property:"lastName"},{header:"Gender",property:"gender"},{header:"Occupation",property:"occupation"}],this.tableHeaderOffset=0,this.expandedRows=[],this.id=he.elementId("app-"),this.visibleColumns=e=>e.filter(t=>t.hidden!==!0),this.recordsetTrackBy=(e,t)=>t.id}ngOnInit(){this.getRecords()}ngAfterViewInit(){this.virtualScrollViewport?.renderedRangeStream.subscribe(e=>{this.tableHeaderOffset=e.start,!this.isBusy&&e.start>0&&e.end+20>this.recordCount&&(this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe(w(()=>this.isBusy=!1)).subscribe(t=>{let o=this.recordset.length+1;this.recordset=[...this.recordset,...t.data.map((r,s)=>(r.id=o+r.id,r))],this.recordCount=this.recordset.length,this.recordset$.next(this.recordset)}))})}ngOnDestroy(){this.tableColumnResize$.next(),this.tableColumnResize$.complete()}onColumnHeaderDragStart(){this.virtualScrollViewport?.scrollToOffset(0)}onColumnHeaderDragDrop(e){xe(this.tableColumns,e.previousIndex,e.currentIndex),this.tableColumns=[...this.tableColumns]}onColumnHeaderResize(e,t,o){e.stopPropagation(),e.preventDefault(),this.tableColumnResize$.next();let r=(this.tableElementRef?.nativeElement).querySelectorAll("thead tr th")[t],s=(this.tableElementRef?.nativeElement).querySelectorAll(`tbody tr td:nth-child(${t+1})`),p=e.clientX;if(r){this.isColumnResizing=!0,this.tableElementRef?.nativeElement.querySelector(".forge-table-head__row")?.classList.add("forge-table-head__row--resizing"),r.classList.add("forge-table-head__cell--resizing"),s.forEach(C=>C.classList.add("forge-table-body__cell--resizing")),x(document.body,"mousemove").pipe(R(this.tableColumnResize$),V(C=>{o.width=r.offsetWidth+(C.clientX-p),p=C.clientX})).subscribe();let v=this.tableElementRef?.nativeElement.querySelector("thead");q(x(v,"mouseup"),x(v,"mouseleave")).pipe(w(()=>requestAnimationFrame(()=>{this.isColumnResizing=!1,r=void 0,s=void 0})),R(this.tableColumnResize$),V(C=>{this.tableColumnResize$.next(),this.tableElementRef?.nativeElement.querySelector(".forge-table-head__row")?.classList.remove("forge-table-head__row--resizing"),r.classList.remove("forge-table-head__cell--resizing"),s.forEach(Me=>Me.classList.remove("forge-table-body__cell--resizing"))})).subscribe()}}onColumnHeaderRightClick(e,t){e.preventDefault(),this.columnHeaderPopover.nativeElement.open?(this.columnHeaderPopover.nativeElement.open=!1,requestAnimationFrame(()=>{this.columnHeaderPopover.nativeElement.anchor=""})):(this.columnHeaderPopover.nativeElement.anchor=`th-${t}-${this.id}`,requestAnimationFrame(()=>{this.columnHeaderPopover.nativeElement.open=!0}))}onColumnPopoverItemSelected(e){switch(e){case"reset-column-width":this.tableColumns.forEach(t=>t.width=void 0);break;case"freeze-column":{let t=(this.tableElementRef?.nativeElement).querySelectorAll("thead tr th")[0],o=(this.tableElementRef?.nativeElement).querySelectorAll("tbody tr td:nth-child(1)");t.classList.add("forge-table-head__cell--frozen"),o.forEach(r=>r.classList.add("forge-table-body__cell--frozen"));break}default:{let t=this.tableColumns.find(o=>o.property===e.property);t&&this.tableColumns.filter(o=>!o.hidden).length&&(t.hidden=Z(t.hidden)?!t.hidden:!0,t.sortDirection=void 0,this.tableColumns=[...this.tableColumns]);break}}this.columnHeaderPopover.nativeElement.open=!1,this.columnHeaderPopover.nativeElement.anchor=""}onTableSort(e,t){e.stopPropagation(),this.columnHeaderPopover.nativeElement.open=!1,this.columnHeaderPopover.nativeElement.anchor="",this.isColumnResizing||(this.tableColumns.filter(o=>o.property!==t.property).forEach(o=>o.sortDirection=void 0),t.sortDirection===b.Ascending?t.sortDirection=b.Descending:t.sortDirection===b.Descending?t.sortDirection=void 0:t.sortDirection=b.Ascending,this.filterCache.sort=t.sortDirection?{property:t.property,direction:t.sortDirection}:void 0,this.filterCache.skip=0,this.virtualScrollViewport?.scrollToOffset(0),this.expandedRows.length=0,this.getRecords())}onTablePaginatorChange(e){this.filterCache.skip=e.pageIndex*e.pageSize,this.filterCache.take=e.pageSize,this.expandedRows.length=0,this.getRecords()}onExpandRow(e,t){this.expandedRows[e]?this.expandedRows[e]=void 0:this.expandedRows[e]=t}getRecords(){this.isBusy=!0,this.appDataService.getPeople({sort:this.filterCache.sort}).pipe(w(()=>this.isBusy=!1)).subscribe(e=>{this.recordset=e.data,this.recordCount=e.count,this.recordset$.next(this.recordset)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=j({type:i,selectors:[["app-table-demo"]],viewQuery:function(t,o){if(t&1&&(P(Ee,7),P(Pe,5),P(z,5)),t&2){let r;S(r=F())&&(o.tableElementRef=r.first),S(r=F())&&(o.columnHeaderPopover=r.first),S(r=F())&&(o.virtualScrollViewport=r.first)}},standalone:!0,features:[Y],decls:31,vars:10,consts:[["table",""],["columnHeaderPopover",""],[1,"header"],["slot","start",1,"forge-typography--subheading4"],[1,"body"],[1,"body__table"],["itemSize","48"],[1,"forge-table","forge-table--fixed"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"forge-table-row","forge-table-head__row",3,"cdkDropListDropped"],[1,"forge-table-cell","forge-table-head__cell","forge-table-row__expander"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"--table-column-width","id"],[4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["inverted","true"],["slot","end",1,"forge-typography--label1"],["placement","right-end","animation-type","none"],[1,"column-popover",3,"forge-list-item-select"],[3,"value"],["value","reset-column-width"],["type","button"],["value","freeze-column"],["scope","col","cdkDrag","","cdkDragLockAxis","x","tabindex","-1",1,"forge-table-cell","forge-table-head__cell","forge-table-head__cell--sortable",3,"cdkDragStarted","click","contextmenu","id"],[1,"forge-table-head__cell-container"],[1,"forge-table-head__cell-text"],["aria-hidden","true",1,"forge-table-head__cell-sort-icon",3,"name"],[1,"forge-table-head__cell-actions"],["cdkDragHandle","",1,"forge-table-head__cell-dragger"],[1,"forge-table-head__cell-resizer",3,"mousedown"],[1,"forge-table-row","forge-table-body__row",3,"ngClass"],[1,"forge-table-cell","forge-table-body__cell","forge-table-row__expander"],["aria-label","Toggle details",3,"click"],[3,"name"],[1,"forge-table-cell","forge-table-body__cell"],[1,"forge-table-row","forge-table-body__row","forge-table-row__expandable-content"],[1,"forge-table-cell__container"],[1,"forge-table-row__expandable-content-cell"],[3,"data","rowIndex"],["slot","start",3,"name"]],template:function(t,o){if(t&1){let r=E();a(0,"forge-toolbar",2)(1,"h2",3),f(2,"Table demo"),l()(),a(3,"div",4)(4,"div",5)(5,"cdk-virtual-scroll-viewport",6)(6,"table",7,0)(8,"thead")(9,"tr",8),u("cdkDropListDropped",function(p){return g(r),h(o.onColumnHeaderDragDrop(p))}),_(10,"th",9),k(11,Oe,8,5,"th",10,D),O(13,"appCallback"),l()(),a(14,"tbody"),y(15,Re,9,8,"ng-container",11),l()()()(),a(16,"forge-toolbar",12)(17,"span",13),f(18),l()()(),a(19,"forge-popover",14,1)(21,"forge-list",15),u("forge-list-item-select",function(p){return g(r),h(o.onColumnPopoverItemSelected(p.detail.value))}),k(22,Ve,4,3,"forge-list-item",16,D),_(24,"forge-divider"),a(25,"forge-list-item",17)(26,"button",18),f(27,"Reset column widths"),l()(),a(28,"forge-list-item",19)(29,"button",18),f(30,"Freeze column"),l()()()()}t&2&&(n(8),L("--table-header-offset",o.tableHeaderOffset)("--table-header-translate-y",o.tableHeaderOffset*-48+"px"),n(3),M(T(13,7,o.tableColumns,o.visibleColumns)),n(4),m("cdkVirtualForOf",o.recordset$)("cdkVirtualForTrackBy",o.recordsetTrackBy),n(3),$("Records: ",o.recordCount,""),n(4),M(o.tableColumns))},dependencies:[W,K,ke,De,ye,we,ve,be,Ce,z,J,te,ee,ne,ie,oe,re,se,le,de,ae,pe,ce,ge,me,ue,fe],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden;background-color:var(--forge-theme-surface)}[_nghost-%COMP%]     .forge-table{min-width:100%;width:max-content;position:relative}[_nghost-%COMP%]     .forge-table-head__row{height:48px}[_nghost-%COMP%]     .forge-table-head__row--resizing .forge-table-head__cell:not(.forge-table-head__cell--resizing) .forge-table-head__cell-actions{display:none}[_nghost-%COMP%]     .forge-table-head__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent;width:calc(var(--table-column-width, 200) * 1px);top:calc(var(--table-header-offset, 0) * 48px * -1)}[_nghost-%COMP%]     .forge-table-head__cell:hover .forge-table-head__cell-actions{transition-delay:.5s;width:48px}[_nghost-%COMP%]     .forge-table-head__cell-sort-icon{display:inline!important}[_nghost-%COMP%]     .forge-table-head__cell-actions{position:absolute;top:4px;bottom:4px;right:8px;display:flex;width:0;overflow:hidden;transition:width .25s;height:40px}[_nghost-%COMP%]     .forge-table-head__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-actions{transition-delay:0;width:24px}[_nghost-%COMP%]     .forge-table-head__cell--resizing .forge-table-head__cell-dragger{display:none}[_nghost-%COMP%]     .forge-table-head__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-head__cell-dragger, [_nghost-%COMP%]     .forge-table-head__cell-resizer{height:100%;min-width:24px;margin-left:auto;border:1px solid var(--forge-theme-outline);background-color:var(--forge-theme-surface-container-minimum)}[_nghost-%COMP%]     .forge-table-head__cell-dragger{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M12%2021V12M12%2021L15%2018M12%2021L9%2018M12%2012V3M12%2012H3M12%2012H21M12%203L9%206M12%203L15%206M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-head__cell-resizer{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%22Edit%20%2F%20Move_Horizontal%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M3%2012H21M3%2012L6%2015M3%2012L6%209M21%2012L18%209M21%2012L18%2015%22%20stroke%3D%22%23000000%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);background-repeat:no-repeat;background-position:center}[_nghost-%COMP%]     .forge-table-body__row{height:48px}[_nghost-%COMP%]     .forge-table-body__cell{padding-left:12px;padding-right:12px;border-right:1px solid transparent}[_nghost-%COMP%]     .forge-table-body__cell--resizing{border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-body__cell--frozen{position:sticky;left:0;z-index:2!important;background-color:var(--forge-theme-surface);border-right-color:var(--forge-theme-primary)}[_nghost-%COMP%]     .forge-table-row__expander{width:48px;padding-left:0!important;padding-right:0!important}[_nghost-%COMP%]     .forge-table-row__expandable-content{background-color:#e8eaf6!important;border-bottom:1px solid var(--forge-theme-outline)}  .column-popover{min-width:280px;--forge-list-padding: 0}  .column-popover forge-list-item{cursor:pointer}.body[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr auto;overflow:hidden;height:100%}.body[_ngcontent-%COMP%]   cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:100%}.cdk-drag-preview[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border:1px solid var(--forge-theme-outline);border:solid 2px #3f51b5;display:flex;padding:0 24px}.cdk-drag-preview[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#e8eaf6}.cdk-drag-placeholder[_ngcontent-%COMP%]   .forge-table-head__cell-container[_ngcontent-%COMP%]{visibility:hidden}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}






/*# sourceMappingURL=table-demo.component-3I7YZKMY.css.map */`]})}}return i})();export{rt as TableDemoComponent};
//# sourceMappingURL=chunk-576KQK4C.js.map
