"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[352],{6300:(E,P,p)=>{p.r(P),p.d(P,{SearchModule:()=>q});var _=p(6575),y=p(1076),S=p(9189),M=p(4808),i=p(2024),f=p(4135),T=p(1236),w=p(4980),A=p(9736),e=p(1699),l=p(8189),N=p(353),I=p(8305);let U=(()=>{class a{constructor(t,r){this.dialogConfig=t,this.dialogRef=r,this.formGroup=new i.cw({name:new i.NI(null,{validators:[i.kI.required]}),description:new i.NI,isDefault:new i.NI,isPublic:new i.NI}),this.record=t.data,this.formGroup.patchValue(this.record)}onSave(){this.dialogRef.close(this.parseFormGroup())}onCancel(){this.dialogRef.close(!1)}parseFormGroup(){return{id:this.record.id,name:this.formGroup.value.name,description:this.formGroup.value.description,isDefault:this.formGroup.value.isDefault,isPublic:this.formGroup.value.isPublic,filters:this.record.filters}}static#e=this.\u0275fac=function(r){return new(r||a)(e.Y36(l.ibs),e.Y36(l.zjC))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-search-save"]],decls:33,vars:3,consts:[[1,"dialog__header"],[1,"forge-typography--headline5"],[1,"forge-flex-item--right"],["type","button","aria-label","close",3,"click"],["name","close"],[1,"dialog__body"],["novalidate","","autocomplete","off",1,"form-grid",3,"formGroup"],["required","",3,"appFormControlInvalid"],["type","text","appAutoFocus","","id","search-save-name","formControlName","name"],["for","search-save-name","slot","label"],["slot","helper-text",1,"app-form-control-invalid"],["type","text","id","search-save-description","formControlName","description"],["for","search-save-description","slot","label"],["type","checkbox","id","search-save-default","formControlName","isDefault"],["for","search-save-default"],["type","checkbox","id","search-save-public","formControlName","isPublic"],["for","search-save-public"],[1,"dialog__footer"],["type","outlined",1,"forge-flex-item--right"],["type","button",3,"click"],["type","raised"],["type","button",3,"disabled","click"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2,"Save search"),e.qZA(),e.TgZ(3,"forge-icon-button",2)(4,"button",3),e.NdJ("click",function(){return o.onCancel()}),e._UZ(5,"forge-icon",4),e.qZA()()(),e.TgZ(6,"div",5)(7,"form",6)(8,"forge-text-field",7),e._UZ(9,"input",8),e.TgZ(10,"label",9),e._uU(11,"Name"),e.qZA(),e.TgZ(12,"span",10),e._uU(13,"A name is required"),e.qZA()(),e.TgZ(14,"forge-text-field"),e._UZ(15,"input",11),e.TgZ(16,"label",12),e._uU(17,"Description"),e.qZA()(),e.TgZ(18,"forge-checkbox"),e._UZ(19,"input",13),e.TgZ(20,"label",14),e._uU(21,"Make this your default search"),e.qZA()(),e.TgZ(22,"forge-checkbox"),e._UZ(23,"input",15),e.TgZ(24,"label",16),e._uU(25,"Make this search public"),e.qZA()()()(),e.TgZ(26,"div",17)(27,"forge-button",18)(28,"button",19),e.NdJ("click",function(){return o.onCancel()}),e._uU(29,"Cancel"),e.qZA()(),e.TgZ(30,"forge-button",20)(31,"button",21),e.NdJ("click",function(){return o.onSave()}),e._uU(32,"Save"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("appFormControlInvalid",o.formGroup.get("name")),e.xp6(23),e.Q6J("disabled",o.formGroup.invalid))},dependencies:[i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,l.r0F,l.bK4,l.oJW,l.r2H,l.afy,N.c,I.h],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.dialog__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:8px 8px 8px 16px;border-bottom:1px solid var(--forge-theme-border-color)}.dialog__header[_ngcontent-%COMP%]   .forge-typography--headline5[_ngcontent-%COMP%]{margin-right:16px}.dialog__header[_ngcontent-%COMP%]   forge-icon-button[_ngcontent-%COMP%]:first-of-type{margin-left:auto}.dialog__body[_ngcontent-%COMP%]{flex-grow:1;overflow:auto;padding:16px}.dialog__footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;column-gap:16px;padding:8px 16px;border-top:1px solid var(--forge-theme-border-color)}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.app-form-control-invalid[_ngcontent-%COMP%]{display:none}.app-form-control-invalid[invalid][_ngcontent-%COMP%], .app-form-control-invalid[invalid][_ngcontent-%COMP%]   .app-form-control-invalid[_ngcontent-%COMP%]{display:block}']})}return a})();var d=p(4635);const g={provide:i.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0};let u=(()=>{class a{#e;#t;elementChange(){this.#t?((0,f.$K)(this.#e)?this.#e?this.#e=!1:this.#e=null:this.#e=!0,this.elementRef.nativeElement.indeterminate=!(0,f.$K)(this.#e),this.elementRef.nativeElement.checked=!!this.#e):this.#e=this.elementRef.nativeElement.checked,this.change(this.#e),this.onTouched()}elementBlur(){this.onTouched()}set appIndeterminate(t){this.#t="false"!==t?.toString(),!this.#t&&this.elementRef.nativeElement.indeterminate&&(this.elementRef.nativeElement.indeterminate=!1,this.elementRef.nativeElement.checked=!1,this.#e=!1,this.change(this.#e))}constructor(t){this.elementRef=t,this.#t=!0,this.onChange=r=>{},this.onTouched=()=>{}}writeValue(t){this.#e!==t&&(this.#e=t,this.#t&&(this.elementRef.nativeElement.indeterminate=!(0,f.$K)(this.#e)),this.elementRef.nativeElement.checked=!!this.#e)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}change(t){this.onChange(t)}static#o=this.\u0275fac=function(r){return new(r||a)(e.Y36(e.SBq))};static#n=this.\u0275dir=e.lG2({type:a,selectors:[["","appIndeterminate",""]],hostBindings:function(r,o){1&r&&e.NdJ("change",function(){return o.elementChange()})("blur",function(){return o.elementBlur()})},inputs:{appIndeterminate:"appIndeterminate"},standalone:!0,features:[e._Bn([g])]})}return a})();const C=["searchesPopup"];function O(a,m){if(1&a&&(e.ynx(0),e._UZ(1,"forge-divider",37),e.TgZ(2,"span",38),e._uU(3),e.qZA(),e.TgZ(4,"span",39),e._uU(5),e.qZA(),e.BQk()),2&a){const t=e.oxw();e.xp6(3),e.Oqu(t.searchName),e.xp6(2),e.Oqu(t.searchDescription)}}function k(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"forge-list-item",42)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"div",43)(4,"forge-icon-button")(5,"button",44),e.NdJ("click",function(o){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.onSearchAction(o,"edit",s.id))}),e._UZ(6,"forge-icon",45),e.qZA()(),e.TgZ(7,"forge-icon-button")(8,"button",44),e.NdJ("click",function(o){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.onSearchAction(o,"delete",s.id))}),e._UZ(9,"forge-icon",46),e.qZA()()()()}if(2&a){const t=m.$implicit;e.Q6J("value",t.id),e.xp6(2),e.Oqu(t.name)}}function v(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"forge-list",40),e.NdJ("forge-list-item-select",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.onSearchAction(o,"search",o.detail.value))}),e.TgZ(1,"forge-list-item")(2,"span"),e._uU(3,"Add new search"),e.qZA()(),e._UZ(4,"forge-divider"),e.YNc(5,k,10,2,"forge-list-item",41),e.qZA()}if(2&a){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",t.searchCache.searches)}}function x(a,m){1&a&&e.GkF(0)}const b=function(a){return{"operator__addon--selected":a}};function G(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"forge-icon-button",19)(1,"button",20,47),e.NdJ("click",function(o){const s=e.CHM(t).name,c=e.MAs(2),h=e.oxw();return e.KtG(h.onOperatorPopupOpen(o,c,s))}),e._UZ(3,"forge-icon",22),e.qZA()()}if(2&a){const t=m.name,r=e.oxw(),o=e.MAs(66);let n;e.Q6J("ngClass",e.VKq(2,b,null==(n=r.formGroup.get(t))?null:n.value.operator)),e.xp6(1),e.Q6J("forgePopup",o)}}function J(a,m){1&a&&e._UZ(0,"forge-icon",52)}function F(a,m){if(1&a&&(e.TgZ(0,"forge-list-item",50)(1,"span"),e._uU(2),e.qZA(),e.YNc(3,J,1,0,"forge-icon",51),e.qZA()),2&a){const t=m.$implicit,r=e.oxw(2);e.Q6J("value",t.value)("selected",r.operatorPopupFormGroup.value.operator===t.value),e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("ngIf",r.operatorPopupFormGroup.value.operator===t.value)}}function D(a,m){if(1&a){const t=e.EpF();e.TgZ(0,"forge-list",48),e.NdJ("forge-list-item-select",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.onOperatorSelected(o.detail.value))}),e.YNc(1,F,4,4,"forge-list-item",49),e.qZA()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.operatorOptions)}}const K=function(){return{name:"address"}},L=[{path:"**",component:(()=>{class a{constructor(t,r,o){this.dialogService=t,this.toastService=r,this.dataService=o,this.storageKey="search-searches",this.searchCache={activeSearchId:void 0,searches:[]},this.formGroup=new i.cw({name:new i.cw({value:new i.NI,operator:new i.NI}),dateOfBirth:new i.cw({value:new i.NI,operator:new i.NI}),address:new i.cw({value:new i.NI,operator:new i.NI}),include:new i.NI,facet:new i.NI}),this.facetOptions=[],this.operatorOptions=[{value:null,label:"None"},{value:1,label:"Not equal"},{value:2,label:"Greater than"},{value:3,label:"Less than"},{value:7,label:"Contains"},{value:8,label:"Not contains"}],this.nameFilter=n=>(0,T.n)(this.dataService.getPeople().pipe((0,A.U)(s=>s.data.filter(c=>c.firstName.toLocaleLowerCase().includes(n.toLocaleLowerCase())||c.lastName.toLocaleLowerCase().includes(n.toLocaleLowerCase())).map(c=>({label:`${c.firstName} ${c.lastName}`,value:c.id}))))),this.facetFilter=n=>(0,w.of)(this.facetOptions),this.dataService.getSearches(this.storageKey).subscribe(n=>{this.searchCache.searches=n||[]});for(let n=0;n<20;n++)this.facetOptions.push({value:n,label:`Facet Option ${n}`})}ngOnInit(){const t=this.searchCache.searches.find(r=>r.id===this.searchCache.activeSearchId);(0,f.$K)(t)&&(this.searchName=t?.name,this.searchDescription=t?.description,this.formGroup.patchValue(t?.filters))}onSearch(){}onSaveSearch(t){const r=(0,f.$K)(t)?t:this.searchCache.searches.find(c=>c.id===this.searchCache.activeSearchId),s=this.dialogService.show(U,{backdropClose:!1,escapeClose:!1},{data:{id:r?.id,name:r?.name,description:r?.description,isDefault:r?.isDefault,isPublic:r?.isPublic,filters:this.formGroup.value}}).afterClosed.subscribe(c=>{if(s.unsubscribe(),c){if((0,f.$K)(c.id)){const h=this.searchCache.searches.findIndex(Z=>Z.id===c.id);-1!==h&&(this.searchCache.searches[h]=c)}else c.id=this.searchCache.searches.length?Math.max(...this.searchCache.searches.map(h=>h.id))+1:1,this.searchCache.searches.push(c);this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe({next:()=>{this.searchCache.activeSearchId=c.id,this.searchName=c.name,this.searchDescription=c.description,this.toastService.show({message:"Search saved"})},error:()=>this.toastService.show({message:"Search save failed"})})}})}onClearSearch(){this.formGroup.get("include")?.setValue(null),this.formGroup.reset()}onSearchAction(t,r,o){if(t.stopPropagation(),this.searchesPopup?.close(),(0,f.$K)(o)){const n=this.searchCache.searches.find(s=>s.id===o);if((0,f.$K)(n))switch(r){case"search":this.searchCache.activeSearchId=n?.id,this.searchName=n?.name,this.searchDescription=n?.description,this.onSearch();break;case"edit":this.searchCache.activeSearchId=n?.id,this.searchName=n?.name,this.searchDescription=n?.description,this.formGroup.patchValue(n?.filters);break;case"copy":{const s=JSON.parse(JSON.stringify(n));s.id=void 0,s.name=`${s.name} copy`,s.isDefault=!1,this.onSaveSearch(s);break}case"delete":{const s=this.searchCache.searches.findIndex(c=>c.id===n?.id);-1!==s&&(this.searchCache.searches.splice(s,1),this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe(c=>{})),this.searchCache.activeSearchId===n?.id&&(this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="");break}}}else this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="",this.formGroup.reset()}onOperatorPopupOpen(t,r,o){t.stopPropagation(),this.operatorPopupFormGroup=this.formGroup.get(o),this.operatorPopup=r,this.operatorPopup.open()}onOperatorSelected(t){t=parseInt(t,10),this.operatorPopupFormGroup?.get("operator")?.setValue(t),this.operatorPopup?.close()}static#e=this.\u0275fac=function(r){return new(r||a)(e.Y36(l.xAy),e.Y36(l.klp),e.Y36(d.U))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-search"]],viewQuery:function(r,o){if(1&r&&e.Gf(C,5),2&r){let n;e.iGM(n=e.CRH())&&(o.searchesPopup=n.first)}},decls:67,vars:20,consts:[[1,"header"],["slot","start"],[1,"forge-typography--title"],[4,"ngIf"],["slot","end"],["type","outlined"],["type","button",3,"click"],["type","button",3,"forgePopup","forgePopupPlacement","click"],["searchesPopup","forgePopup"],["name","arrow_drop_down"],["type","raised"],["searchesPopupTemplate",""],[1,"body"],["novalidate","","autocomplete","off",1,"form",3,"formGroup","ngSubmit"],["formGroupName","name"],["multiple","true","formControlName","value","allow-unmatched","true",3,"filter"],["type","text","id","app--search--name"],["for","app--search--name"],["slot","trailing","name","arrow_drop_down",1,"forge-dropdown-icon"],["slot","addon-end",1,"operator__addon",3,"ngClass"],["type","button",3,"forgePopup","click"],["nameOperatorPopup","forgePopup"],["name","bolt"],["formGroupName","dateOfBirth"],["formControlName","value"],["type","text","id","app--search--date-of-birth"],["for","app--search--date-of-birth"],["dateOfBirthOperatorPopup","forgePopup"],["formGroupName","address"],["type","text","id","app--search--address","formControlName","value"],["for","app--search--address","slot","label"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","checkbox","id","app--search--include","formControlName","include","appIndeterminate",""],["for","app--search--include"],["formControlName","facet","label","Facet",3,"optionFilter"],["opertatorAddonTemplate",""],["operatorPopupTemplate",""],["vertical",""],[1,"forge-typography--subtitle1-secondary"],[1,"forge-typography--subtitle2-secondary"],[1,"searches-popup",3,"forge-list-item-select"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["slot","trailing"],[3,"click"],["name","edit"],["name","delete"],["operatorPopup","forgePopup"],[1,"operator-popup",3,"forge-list-item-select"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"],["name","check","slot","trailing",4,"ngIf"],["name","check","slot","trailing"]],template:function(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"forge-toolbar",0)(1,"div",1)(2,"h2",2),e._uU(3,"Search"),e.qZA(),e.YNc(4,O,6,2,"ng-container",3),e.qZA(),e.TgZ(5,"div",4)(6,"forge-button",5)(7,"button",6),e.NdJ("click",function(){return o.onSaveSearch()}),e.TgZ(8,"span"),e._uU(9,"Save search"),e.qZA()()(),e.TgZ(10,"forge-button",5)(11,"button",7,8),e.NdJ("click",function(){e.CHM(n);const c=e.MAs(12);return e.KtG(c.open())}),e.TgZ(13,"span"),e._uU(14,"Saved searches"),e.qZA(),e._UZ(15,"forge-icon",9),e.qZA()(),e.TgZ(16,"forge-button",5)(17,"button",6),e.NdJ("click",function(){return o.onClearSearch()}),e.TgZ(18,"span"),e._uU(19,"Clear all"),e.qZA()()(),e.TgZ(20,"forge-button",10)(21,"button",6),e.NdJ("click",function(){return o.onSearch()}),e.TgZ(22,"span"),e._uU(23,"Search"),e.qZA()()()()(),e.YNc(24,v,6,1,"ng-template",null,11,e.W1O),e.TgZ(26,"div",12)(27,"form",13),e.NdJ("ngSubmit",function(){return o.onSearch()}),e.ynx(28,14),e.TgZ(29,"forge-autocomplete",15)(30,"forge-text-field"),e._UZ(31,"input",16),e.TgZ(32,"label",17),e._uU(33,"Name"),e.qZA(),e._UZ(34,"forge-icon",18),e.TgZ(35,"forge-icon-button",19)(36,"button",20,21),e.NdJ("click",function(c){e.CHM(n);const h=e.MAs(37);return e.KtG(o.onOperatorPopupOpen(c,h,"name"))}),e._UZ(38,"forge-icon",22),e.qZA()()()(),e.BQk(),e.ynx(39,23),e.TgZ(40,"forge-date-picker",24)(41,"forge-text-field"),e._UZ(42,"input",25),e.TgZ(43,"label",26),e._uU(44,"Date"),e.qZA(),e.TgZ(45,"forge-icon-button",19)(46,"button",20,27),e.NdJ("click",function(c){e.CHM(n);const h=e.MAs(47);return e.KtG(o.onOperatorPopupOpen(c,h,"dateOfBirth"))}),e._UZ(48,"forge-icon",22),e.qZA()()()(),e.BQk(),e.ynx(49,28),e.TgZ(50,"forge-text-field"),e._UZ(51,"input",29),e.TgZ(52,"label",30),e._uU(53,"Address"),e.qZA(),e.YNc(54,x,1,0,"ng-container",31),e.qZA(),e.BQk(),e.TgZ(55,"forge-checkbox"),e._UZ(56,"input",32),e.TgZ(57,"label",33),e._uU(58,"Include"),e.qZA()(),e._UZ(59,"app-autocomplete-range",34),e.qZA(),e.TgZ(60,"p"),e._uU(61),e.ALo(62,"json"),e.qZA()(),e.YNc(63,G,4,4,"ng-template",null,35,e.W1O),e.YNc(65,D,2,1,"ng-template",null,36,e.W1O)}if(2&r){const n=e.MAs(25),s=e.MAs(64),c=e.MAs(66);let h,Z;e.xp6(4),e.Q6J("ngIf",o.searchCache.activeSearchId),e.xp6(7),e.Q6J("forgePopup",n)("forgePopupPlacement","bottom-start"),e.xp6(16),e.Q6J("formGroup",o.formGroup),e.xp6(2),e.Q6J("filter",o.nameFilter),e.xp6(6),e.Q6J("ngClass",e.VKq(15,b,null==(h=o.formGroup.get("name"))?null:h.value.operator)),e.xp6(1),e.Q6J("forgePopup",c),e.xp6(9),e.Q6J("ngClass",e.VKq(17,b,null==(Z=o.formGroup.get("dateOfBirth"))?null:Z.value.operator)),e.xp6(1),e.Q6J("forgePopup",c),e.xp6(8),e.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",e.DdM(19,K)),e.xp6(5),e.Q6J("optionFilter",o.facetFilter),e.xp6(2),e.Oqu(e.lcZ(62,13,o.formGroup.getRawValue()))}},dependencies:[_.mk,_.sg,_.O5,_.tP,i._Y,i.Fj,i.Wl,i.JJ,i.JL,i.sg,i.u,i.x0,l.$RD,l.YRL,l.r0F,l.bK4,l.o_V,l.Lr3,l.Xo5,l.oJW,l.r2H,l.nsn,l.GBp,l.cPI,l.afy,l.nVy,M.v,u,_.Ts],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden}  .searches-popup{min-width:280px}  .searches-popup *[slot=trailing]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin-right:-16px}  .operator-popup{min-width:200px}  .operator-popup forge-list-item{cursor:pointer}.header[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap}.header[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:16px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=start] forge-divider[_ngcontent-%COMP%]{margin:0 16px;height:32px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:16px}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;padding:16px;display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.body[_ngcontent-%COMP%]   .form--row-break[_ngcontent-%COMP%]{grid-column-start:1}.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.body[_ngcontent-%COMP%]   .form--col-span.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{width:auto}.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.body[_ngcontent-%COMP%]   .form--col-span2.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{width:656px}.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.body[_ngcontent-%COMP%]   .form--col-span3.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{width:992px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.operator__addon[_ngcontent-%COMP%]{border-radius:50%}.operator__addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:36px;height:36px}.operator__addon--selected[_ngcontent-%COMP%]{background-color:#c5cae9}']})}return a})()}];let q=(()=>{class a{static#e=this.\u0275fac=function(r){return new(r||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[_.ez,y.Bz.forChild(L),S.F,M.v,y.Bz]})}return a})()},9016:(E,P,p)=>{p.d(P,{R:()=>e});var _=p(384),y=p(2235),S=p(9912),M=p(1287),i=p(2602),f=p(7825);const T=["addListener","removeListener"],w=["addEventListener","removeEventListener"],A=["on","off"];function e(d,g,u,C){if((0,i.m)(u)&&(C=u,u=void 0),C)return e(d,g,u).pipe((0,f.Z)(C));const[O,k]=function U(d){return(0,i.m)(d.addEventListener)&&(0,i.m)(d.removeEventListener)}(d)?w.map(v=>x=>d[v](g,x,u)):function N(d){return(0,i.m)(d.addListener)&&(0,i.m)(d.removeListener)}(d)?T.map(l(d,g)):function I(d){return(0,i.m)(d.on)&&(0,i.m)(d.off)}(d)?A.map(l(d,g)):[];if(!O&&(0,M.z)(d))return(0,S.z)(v=>e(v,g,u))((0,_.Xf)(d));if(!O)throw new TypeError("Invalid event target");return new y.y(v=>{const x=(...b)=>v.next(1<b.length?b:b[0]);return O(x),()=>k(x)})}function l(d,g){return u=>C=>d[u](g,C)}}}]);
//# sourceMappingURL=352.059b20e481db66fd.js.map