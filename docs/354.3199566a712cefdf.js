"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[354],{4336:(G,M,p)=>{p.r(M),p.d(M,{SearchComponent:()=>L});var e=p(8559),s=p(496),d=p(674),i=p(9879),f=p(5342),y=p(9452),k=p(271),E=p(827),_=p(316),b=p(2181),S=p(7123);let F=(()=>{class a{constructor(){this.dialogConfig=(0,e.WQX)(i.Pe9),this.dialogRef=(0,e.WQX)(i.cez),this.trapFocusDirective=(0,e.WQX)(b.kB),this.formGroup=new s.gE({name:new s.MJ(null,{validators:[s.k0.required]}),description:new s.MJ,isDefault:new s.MJ,isPublic:new s.MJ}),this.record=this.dialogConfig.data,this.formGroup.patchValue(this.record),this.dialogRef.nativeElement.setAttribute("aria-labelledby","save-search--title"),this.trapFocusDirective.autoCapture=!0}onSave(){this.dialogRef.close(this.formGroup.getRawValue())}onCancel(){this.formGroup.markAsPristine(),this.dialogRef.close(!1)}static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-search-save"]],standalone:!0,features:[e.nM4([b.kB]),e.aNF],decls:33,vars:3,consts:[[1,"dialog__header"],["id","save-search--title",1,"forge-typography--headline5"],[1,"forge-flex-item--right"],["type","button","aria-label","Close",3,"click"],["name","close"],[1,"dialog__body"],["novalidate","","autocomplete","off",1,"form-grid",3,"formGroup"],["required","",3,"appFormControlInvalid"],["type","text","id","search-save-name","formControlName","name"],["for","search-save-name","slot","label"],["slot","helper-text",1,"app-form-control-invalid"],["type","text","id","search-save-description","formControlName","description"],["for","search-save-description","slot","label"],["type","checkbox","id","search-save-default","formControlName","isDefault"],["for","search-save-default"],["type","checkbox","id","search-save-public","formControlName","isPublic"],["for","search-save-public"],[1,"dialog__footer"],["type","outlined",1,"forge-flex-item--right"],["type","button",3,"click"],["type","raised"],["type","button",3,"click","disabled"]],template:function(r,o){1&r&&(e.j41(0,"div",0)(1,"h2",1),e.EFF(2,"Save search"),e.k0s(),e.j41(3,"forge-icon-button",2)(4,"button",3),e.bIt("click",function(){return o.onCancel()}),e.nrm(5,"forge-icon",4),e.k0s()()(),e.j41(6,"div",5)(7,"form",6)(8,"forge-text-field",7),e.nrm(9,"input",8),e.j41(10,"label",9),e.EFF(11,"Name"),e.k0s(),e.j41(12,"span",10),e.EFF(13,"A name is required"),e.k0s()(),e.j41(14,"forge-text-field"),e.nrm(15,"input",11),e.j41(16,"label",12),e.EFF(17,"Description"),e.k0s()(),e.j41(18,"forge-checkbox"),e.nrm(19,"input",13),e.j41(20,"label",14),e.EFF(21,"Make this your default search"),e.k0s()(),e.j41(22,"forge-checkbox"),e.nrm(23,"input",15),e.j41(24,"label",16),e.EFF(25,"Make this search public"),e.k0s()()()(),e.j41(26,"div",17)(27,"forge-button",18)(28,"button",19),e.bIt("click",function(){return o.onCancel()}),e.EFF(29,"Cancel"),e.k0s()(),e.j41(30,"forge-button",20)(31,"button",21),e.bIt("click",function(){return o.onSave()}),e.EFF(32,"Save"),e.k0s()()()),2&r&&(e.R7$(7),e.Y8G("formGroup",o.formGroup),e.R7$(),e.Y8G("appFormControlInvalid",o.formGroup.controls.name),e.R7$(23),e.Y8G("disabled",o.formGroup.invalid))},dependencies:[_.MD,s.X1,s.qT,s.me,s.Zm,s.BC,s.cb,s.j4,s.JD,i.ei2,i.Qpp,i.VQY,i.PYJ,i.nVi,i.xBz,i.RlV,i.vzf,i.xYY,i.LHr,S.W],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.dialog__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:8px 8px 8px 16px;border-bottom:1px solid var(--forge-theme-border-color)}.dialog__header[_ngcontent-%COMP%]   .forge-typography--headline5[_ngcontent-%COMP%]{margin-right:16px}.dialog__header[_ngcontent-%COMP%]   forge-icon-button[_ngcontent-%COMP%]:first-of-type{margin-left:auto}.dialog__body[_ngcontent-%COMP%]{flex-grow:1;overflow:auto;padding:16px}.dialog__footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;column-gap:16px;padding:8px 16px;border-top:1px solid var(--forge-theme-border-color)}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.app-form-control-invalid[_ngcontent-%COMP%]{display:none}.app-form-control-invalid[invalid][_ngcontent-%COMP%], .app-form-control-invalid[invalid][_ngcontent-%COMP%]   .app-form-control-invalid[_ngcontent-%COMP%]{display:block}']})}return a})();var T=p(2267);const j={provide:s.kq,useExisting:(0,e.Rfq)(()=>l),multi:!0};let l=(()=>{class a{constructor(){this.elementRef=(0,e.WQX)(e.aKT),this.#t=!0,this.onChange=t=>{},this.onTouched=()=>{}}#e;#t;elementChange(){this.#t?((0,d.O9)(this.#e)?this.#e?this.#e=!1:this.#e=null:this.#e=!0,this.elementRef.nativeElement.indeterminate=!(0,d.O9)(this.#e),this.elementRef.nativeElement.checked=!!this.#e):this.#e=this.elementRef.nativeElement.checked,this.change(this.#e),this.onTouched()}elementBlur(){this.onTouched()}set appIndeterminate(t){this.#t="false"!==t?.toString(),!this.#t&&this.elementRef.nativeElement.indeterminate&&(this.elementRef.nativeElement.indeterminate=!1,this.elementRef.nativeElement.checked=!1,this.#e=!1,this.change(this.#e))}writeValue(t){this.#e!==t&&(this.#e=t,this.#t&&(this.elementRef.nativeElement.indeterminate=!(0,d.O9)(this.#e)),this.elementRef.nativeElement.checked=!!this.#e)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}change(t){this.onChange(t)}static#n=this.\u0275fac=function(r){return new(r||a)};static#o=this.\u0275dir=e.FsC({type:a,selectors:[["","appIndeterminate",""]],hostBindings:function(r,o){1&r&&e.bIt("change",function(){return o.elementChange()})("blur",function(){return o.elementBlur()})},inputs:{appIndeterminate:"appIndeterminate"},standalone:!0,features:[e.Jv_([j])]})}return a})();const u=["searchesPopup"],m=(a,h)=>h.id,v=()=>({name:"name"}),O=()=>({name:"dateOfBirth"}),w=()=>({name:"address"}),C=a=>({"operator__addon--selected":a});function P(a,h){if(1&a&&(e.nrm(0,"forge-divider",32),e.j41(1,"span",33),e.EFF(2),e.k0s(),e.j41(3,"span",34),e.EFF(4),e.k0s()),2&a){const t=e.XpG();e.R7$(2),e.JRh(t.searchName),e.R7$(2),e.JRh(t.searchDescription)}}function x(a,h){if(1&a){const t=e.RV6();e.j41(0,"forge-list-item",36)(1,"span"),e.EFF(2),e.k0s(),e.j41(3,"div",37)(4,"forge-icon-button")(5,"button",38),e.bIt("click",function(o){const n=e.eBV(t).$implicit,c=e.XpG(2);return e.Njj(c.onSearchAction(o,"edit",n.id))}),e.nrm(6,"forge-icon",39),e.k0s()(),e.j41(7,"forge-icon-button")(8,"button",40),e.bIt("click",function(o){const n=e.eBV(t).$implicit,c=e.XpG(2);return e.Njj(c.onSearchAction(o,"delete",n.id))}),e.nrm(9,"forge-icon",41),e.k0s()()()()}if(2&a){const t=h.$implicit;e.Y8G("value",t.id),e.R7$(2),e.JRh(t.name)}}function R(a,h){if(1&a){const t=e.RV6();e.j41(0,"forge-list",35),e.bIt("forge-list-item-select",function(o){e.eBV(t);const n=e.XpG();return e.Njj(n.onSearchAction(o,"search",o.detail.value))}),e.j41(1,"forge-list-item")(2,"span"),e.EFF(3,"Add new search"),e.k0s()(),e.nrm(4,"forge-divider"),e.Z7z(5,x,10,2,"forge-list-item",36,m),e.k0s()}if(2&a){const t=e.XpG();e.R7$(5),e.Dyx(t.searchCache.searches)}}function I(a,h){1&a&&e.eu8(0)}function N(a,h){1&a&&e.eu8(0)}function D(a,h){1&a&&e.eu8(0)}function B(a,h){if(1&a){const t=e.RV6();e.j41(0,"forge-icon-button",42)(1,"button",43,4),e.bIt("click",function(o){const n=e.eBV(t).name,c=e.sdS(2),g=e.XpG();return e.Njj(g.onOperatorPopupOpen(o,c,n))}),e.nrm(3,"forge-icon",44),e.k0s()()}if(2&a){let t;const r=h.name,o=e.XpG(),n=e.sdS(60);e.Y8G("ngClass",e.eq3(2,C,null==(t=o.formGroup.get(r))?null:t.value.operator)),e.R7$(),e.Y8G("forgePopup",n)}}function V(a,h){1&a&&e.nrm(0,"forge-icon",47)}function $(a,h){if(1&a&&(e.j41(0,"forge-list-item",46)(1,"span"),e.EFF(2),e.k0s(),e.DNE(3,V,1,0,"forge-icon",47),e.k0s()),2&a){const t=h.$implicit,r=e.XpG(2);e.Y8G("value",t.value)("selected",(null==r.operatorPopupFormGroup?null:r.operatorPopupFormGroup.value.operator)===t.value),e.R7$(2),e.JRh(t.label),e.R7$(),e.vxM(3,(null==r.operatorPopupFormGroup?null:r.operatorPopupFormGroup.value.operator)===t.value?3:-1)}}function J(a,h){if(1&a){const t=e.RV6();e.j41(0,"forge-list",45),e.bIt("forge-list-item-select",function(o){e.eBV(t);const n=e.XpG();return e.Njj(n.onOperatorSelected(o.detail.value))}),e.Z7z(1,$,4,4,"forge-list-item",46,e.Vm6),e.k0s()}if(2&a){const t=e.XpG();e.R7$(),e.Dyx(t.operatorOptions)}}let L=(()=>{class a{constructor(){this.dialogService=(0,e.WQX)(i.o3x),this.toastService=(0,e.WQX)(i.fwc),this.dataService=(0,e.WQX)(E.D),this.storageKey="search-searches",this.searchCache={activeSearchId:void 0,searches:[]},this.formGroup=new s.gE({name:new s.gE({value:new s.MJ,operator:new s.MJ}),dateOfBirth:new s.gE({value:new s.MJ,operator:new s.MJ}),address:new s.gE({value:new s.MJ,operator:new s.MJ}),include:new s.MJ,facet:new s.MJ}),this.facetOptions=[],this.operatorOptions=[{value:null,label:"None"},{value:0,label:"Equal"},{value:1,label:"Not equal"},{value:2,label:"Greater than"},{value:3,label:"Less than"},{value:4,label:"Greater than equal to"},{value:5,label:"Less than equal to"},{value:6,label:"Range"},{value:7,label:"Contains"},{value:8,label:"Not contains"},{value:9,label:"Empty"}],this.nameFilter=t=>(0,f.s)(this.dataService.getPeople().pipe((0,k.T)(r=>r.data.filter(o=>o.firstName.toLocaleLowerCase().includes(t.toLocaleLowerCase())||o.lastName.toLocaleLowerCase().includes(t.toLocaleLowerCase())).map(o=>({label:`${o.firstName} ${o.lastName}`,value:o.id}))))),this.facetFilter=t=>(0,y.of)(this.facetOptions)}ngOnInit(){this.dataService.getSearches(this.storageKey).subscribe(t=>{this.searchCache.searches=t||[];const r=this.searchCache.searches.find(o=>o.id===this.searchCache.activeSearchId);(0,d.O9)(r)&&(this.searchName=r?.name,this.searchDescription=r?.description,this.formGroup.patchValue(r?.filters))});for(let t=0;t<20;t++)this.facetOptions.push({value:t,label:`Facet Option ${t}`})}onSearch(){}onSaveSearch(t){const r=(0,d.O9)(t)?t:this.searchCache.searches.find(n=>n.id===this.searchCache.activeSearchId);this.dialogService.show(F,{backdropClose:!1,escapeClose:!1},{data:{id:r?.id,name:r?.name,description:r?.description,isDefault:r?.isDefault,isPublic:r?.isPublic,filters:this.formGroup.value}}).afterClosed.subscribe(n=>{if(n){if((0,d.O9)(n.id)){const c=this.searchCache.searches.findIndex(g=>g.id===n.id);-1!==c&&(this.searchCache.searches[c]=n)}else n.id=this.searchCache.searches.length?Math.max(...this.searchCache.searches.map(c=>c.id))+1:1,this.searchCache.searches.push(n);this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe({next:()=>{this.searchCache.activeSearchId=n.id,this.searchName=n.name,this.searchDescription=n.description,this.toastService.show({message:"Search saved"})},error:()=>this.toastService.show({message:"Search save failed"})})}})}onClearSearch(){this.formGroup.controls.include.setValue(null),this.formGroup.reset()}onSearchAction(t,r,o){if(t.stopPropagation(),this.searchesPopup?.close(),(0,d.O9)(o)){const n=this.searchCache.searches.find(c=>c.id===o);if((0,d.O9)(n))switch(r){case"search":this.searchCache.activeSearchId=n?.id,this.searchName=n?.name,this.searchDescription=n?.description,this.onSearch();break;case"edit":this.searchCache.activeSearchId=n?.id,this.searchName=n?.name,this.searchDescription=n?.description,this.formGroup.patchValue(n?.filters);break;case"copy":{const c=JSON.parse(JSON.stringify(n));c.id=void 0,c.name=`${c.name} copy`,c.isDefault=!1,this.onSaveSearch(c);break}case"delete":{const c=this.searchCache.searches.findIndex(g=>g.id===n?.id);-1!==c&&(this.searchCache.searches.splice(c,1),this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe(g=>{})),this.searchCache.activeSearchId===n?.id&&(this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="");break}}}else this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="",this.formGroup.reset()}onOperatorPopupOpen(t,r,o){t.stopPropagation(),this.operatorPopupFormGroup=this.formGroup.get(o),this.operatorPopup=r,this.operatorPopup.open()}onOperatorSelected(t){t=parseInt(t,10),this.operatorPopupFormGroup?.get("operator")?.setValue(t),this.operatorPopup?.close()}static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-search"]],viewQuery:function(r,o){if(1&r&&e.GBs(u,5),2&r){let n;e.mGM(n=e.lsd())&&(o.searchesPopup=n.first)}},standalone:!0,features:[e.aNF],decls:61,vars:19,consts:[["searchesPopup","forgePopup"],["searchesPopupTemplate",""],["opertatorAddonTemplate",""],["operatorPopupTemplate",""],["operatorPopup","forgePopup"],[1,"header"],["slot","start"],[1,"forge-typography--title"],["slot","end"],["type","outlined"],["type","button",3,"click"],["type","button",3,"click","forgePopup","forgePopupPlacement"],["name","arrow_drop_down"],["type","raised"],[1,"body"],["novalidate","","autocomplete","off",1,"form",3,"ngSubmit","formGroup"],["formGroupName","name"],["multiple","true","formControlName","value","allow-unmatched","true",3,"filter"],["type","text","id","app--search--name"],["for","app--search--name"],["slot","trailing","name","arrow_drop_down",1,"forge-dropdown-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["formGroupName","dateOfBirth"],["formControlName","value"],["type","text","id","app--search--date-of-birth"],["for","app--search--date-of-birth"],["formGroupName","address"],["type","text","id","app--search--address","formControlName","value"],["for","app--search--address","slot","label"],["type","checkbox","id","app--search--include","formControlName","include",3,"appIndeterminate"],["for","app--search--include"],["formControlName","facet","label","Facet",3,"optionFilter"],["vertical",""],[1,"forge-typography--subtitle1-secondary"],[1,"forge-typography--subtitle2-secondary"],[1,"searches-popup",3,"forge-list-item-select"],[3,"value"],["slot","trailing"],["aria-label","Edit",3,"click"],["name","edit"],["aria-label","Delete",3,"click"],["name","delete"],["slot","addon-end",1,"operator__addon",3,"ngClass"],["type","button","aria-label","Filter operator",3,"click","forgePopup"],["name","bolt"],[1,"operator-popup",3,"forge-list-item-select"],[3,"value","selected"],["name","check","slot","trailing"]],template:function(r,o){if(1&r){const n=e.RV6();e.j41(0,"forge-toolbar",5)(1,"div",6)(2,"h2",7),e.EFF(3,"Search"),e.k0s(),e.DNE(4,P,5,2),e.k0s(),e.j41(5,"div",8)(6,"forge-button",9)(7,"button",10),e.bIt("click",function(){return e.eBV(n),e.Njj(o.onSaveSearch())}),e.j41(8,"span"),e.EFF(9,"Save search"),e.k0s()()(),e.j41(10,"forge-button",9)(11,"button",11,0),e.bIt("click",function(){e.eBV(n);const g=e.sdS(12);return e.Njj(g.open())}),e.j41(13,"span"),e.EFF(14,"Saved searches"),e.k0s(),e.nrm(15,"forge-icon",12),e.k0s()(),e.j41(16,"forge-button",9)(17,"button",10),e.bIt("click",function(){return e.eBV(n),e.Njj(o.onClearSearch())}),e.j41(18,"span"),e.EFF(19,"Clear all"),e.k0s()()(),e.j41(20,"forge-button",13)(21,"button",10),e.bIt("click",function(){return e.eBV(n),e.Njj(o.onSearch())}),e.j41(22,"span"),e.EFF(23,"Search"),e.k0s()()()()(),e.DNE(24,R,7,0,"ng-template",null,1,e.C5r),e.j41(26,"div",14)(27,"form",15),e.bIt("ngSubmit",function(){return e.eBV(n),e.Njj(o.onSearch())}),e.qex(28,16),e.j41(29,"forge-autocomplete",17)(30,"forge-text-field"),e.nrm(31,"input",18),e.j41(32,"label",19),e.EFF(33,"Name"),e.k0s(),e.nrm(34,"forge-icon",20),e.DNE(35,I,1,0,"ng-container",21),e.k0s()(),e.bVm(),e.qex(36,22),e.j41(37,"forge-date-picker",23)(38,"forge-text-field"),e.nrm(39,"input",24),e.j41(40,"label",25),e.EFF(41,"Date"),e.k0s(),e.DNE(42,N,1,0,"ng-container",21),e.k0s()(),e.bVm(),e.qex(43,26),e.j41(44,"forge-text-field"),e.nrm(45,"input",27),e.j41(46,"label",28),e.EFF(47,"Address"),e.k0s(),e.DNE(48,D,1,0,"ng-container",21),e.k0s(),e.bVm(),e.j41(49,"forge-checkbox"),e.nrm(50,"input",29),e.j41(51,"label",30),e.EFF(52,"Include"),e.k0s()(),e.nrm(53,"app-autocomplete-range",31),e.k0s(),e.j41(54,"p"),e.EFF(55),e.nI1(56,"json"),e.k0s()(),e.DNE(57,B,4,4,"ng-template",null,2,e.C5r)(59,J,3,0,"ng-template",null,3,e.C5r)}if(2&r){const n=e.sdS(25),c=e.sdS(58);e.R7$(4),e.vxM(4,o.searchCache.activeSearchId?4:-1),e.R7$(7),e.Y8G("forgePopup",n)("forgePopupPlacement","bottom-start"),e.R7$(16),e.Y8G("formGroup",o.formGroup),e.R7$(2),e.Y8G("filter",o.nameFilter),e.R7$(6),e.Y8G("ngTemplateOutlet",c)("ngTemplateOutletContext",e.lJ4(16,v)),e.R7$(7),e.Y8G("ngTemplateOutlet",c)("ngTemplateOutletContext",e.lJ4(17,O)),e.R7$(6),e.Y8G("ngTemplateOutlet",c)("ngTemplateOutletContext",e.lJ4(18,w)),e.R7$(2),e.Y8G("appIndeterminate",!0),e.R7$(3),e.Y8G("optionFilter",o.facetFilter),e.R7$(2),e.JRh(e.bMT(56,14,o.formGroup.getRawValue()))}},dependencies:[_.MD,_.YU,_.T3,_.TG,s.X1,s.qT,s.me,s.Zm,s.BC,s.cb,s.j4,s.JD,s.$R,i.UHk,i.vP6,i.sHR,i.ei2,i.Qpp,i.VQY,i.PYJ,i.mJn,i.dBB,i.Iah,i.b$f,i.heP,i.nVi,i.xBz,i.RlV,i.vzf,i.nkw,i.Ptl,i.svQ,i.sB8,i.Odv,i.wGN,i.xYY,i.LHr,i.N1z,i.H_6,T.h,l],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden}  .searches-popup{min-width:280px}  .searches-popup *[slot=trailing]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin-right:-16px}  .operator-popup{min-width:200px}  .operator-popup forge-list-item{cursor:pointer}.header[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap}.header[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:16px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   forge-divider[_ngcontent-%COMP%]{margin:0 16px;height:32px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:16px}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;padding:16px;display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.body[_ngcontent-%COMP%]   .form--row-break[_ngcontent-%COMP%]{grid-column-start:1}.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.body[_ngcontent-%COMP%]   .form--col-span.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{width:auto}.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.body[_ngcontent-%COMP%]   .form--col-span2.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{width:656px}.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.body[_ngcontent-%COMP%]   .form--col-span3.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{width:992px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.operator__addon[_ngcontent-%COMP%]{border-radius:50%}.operator__addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px}.operator__addon--selected[_ngcontent-%COMP%]{background-color:#c5cae9}']})}return a})()},8537:(G,M,p)=>{p.d(M,{R:()=>b});var e=p(2645),s=p(3942),d=p(1365),i=p(8830),f=p(1530),y=p(8067);const k=["addListener","removeListener"],E=["addEventListener","removeEventListener"],_=["on","off"];function b(l,u,m,v){if((0,f.T)(m)&&(v=m,m=void 0),v)return b(l,u,m).pipe((0,y.I)(v));const[O,w]=function j(l){return(0,f.T)(l.addEventListener)&&(0,f.T)(l.removeEventListener)}(l)?E.map(C=>P=>l[C](u,P,m)):function F(l){return(0,f.T)(l.addListener)&&(0,f.T)(l.removeListener)}(l)?k.map(S(l,u)):function T(l){return(0,f.T)(l.on)&&(0,f.T)(l.off)}(l)?_.map(S(l,u)):[];if(!O&&(0,i.X)(l))return(0,d.Z)(C=>b(C,u,m))((0,e.Tg)(l));if(!O)throw new TypeError("Invalid event target");return new s.c(C=>{const P=(...x)=>C.next(1<x.length?x:x[0]);return O(P),()=>w(P)})}function S(l,u){return m=>v=>l[m](u,v)}}}]);
//# sourceMappingURL=354.3199566a712cefdf.js.map