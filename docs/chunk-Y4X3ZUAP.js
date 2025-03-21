import{a as Ue}from"./chunk-KFPL2LUS.js";import{a as Je}from"./chunk-INHZFDIB.js";import{a as Xe}from"./chunk-3AI7OFTP.js";import{a as je}from"./chunk-JCG3AHUO.js";import"./chunk-5G5LBANU.js";import"./chunk-AGZOMTSQ.js";import{Ab as L,E as M,Hb as be,Ib as xe,Jb as Pe,Jc as qe,Kc as He,Ob as B,Pb as q,Ub as H,Vb as we,Wb as ye,Xb as Oe,cc as Me,d as ue,dc as Ee,eb as Ce,ec as Fe,f as ge,fc as Te,gb as N,gc as ke,h as _e,hc as De,ib as ve,ic as Ne,j as D,jc as Ve,jd as Q,kb as V,kd as j,lb as G,mc as Ge,nb as b,nc as $,ob as f,oc as Ie,od as $e,pc as K,pd as Ke,qb as I,qd as Qe,tb as R,ub as Se,uc as Re,vc as Ae,wb as A,wc as Le,xc as Be}from"./chunk-T54VJELX.js";import{$b as ce,Ab as d,Ea as oe,Eb as J,Fb as se,Gb as X,Hb as Z,Ib as i,Jb as a,Kb as p,Lb as x,Mb as P,Nb as F,Ob as w,Rb as m,Sb as _,_a as c,_b as le,aa as te,ac as y,bc as l,cc as O,fb as re,ha as C,hb as E,ic as me,jb as ne,jc as T,kc as pe,mc as de,nc as he,p as W,rc as k,sa as u,t as Y,ta as g,ub as ie,v as ee,xb as ae,yb as S,yc as fe}from"./chunk-5VCAQWVT.js";import{a as U}from"./chunk-NCBA65HR.js";var We={provide:Ce,useExisting:te(()=>z),multi:!0},z=(()=>{class n{constructor(){this.renderer=C(re),this.elementRef=C(oe),this.threeStateEnabled=!1,this.onChange=e=>{},this.onTouched=()=>{}}hostChange(e){this.threeStateEnabled?(this.value=this.value===!0?!1:this.value===!1?null:!0,this.setCheckboxState()):this.value=this.elementRef.nativeElement.checked,this.onChange(this.value),this.onTouched()}hostBlur(){this.onTouched()}set threeState(e){this.threeStateEnabled!==e&&(this.threeStateEnabled=e,!this.threeStateEnabled&&this.elementRef.nativeElement.indeterminate&&(this.renderer.setProperty(this.elementRef.nativeElement,"indeterminate",!1),this.value=!1),this.setCheckboxState())}writeValue(e){this.value!==e&&(this.value=e,this.setCheckboxState())}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}setCheckboxState(){this.threeStateEnabled?this.value===!0?(this.renderer.setProperty(this.elementRef.nativeElement,"indeterminate",!1),requestAnimationFrame(()=>{this.renderer.setProperty(this.elementRef.nativeElement,"checked",!0)})):this.value===!1?(this.renderer.setProperty(this.elementRef.nativeElement,"indeterminate",!1),requestAnimationFrame(()=>{this.renderer.setProperty(this.elementRef.nativeElement,"checked",!1)})):(this.renderer.setProperty(this.elementRef.nativeElement,"checked",!1),requestAnimationFrame(()=>{this.renderer.setProperty(this.elementRef.nativeElement,"indeterminate",!0)})):this.renderer.setProperty(this.elementRef.nativeElement,"checked",!!this.value)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275dir=ne({type:n,selectors:[["forge-checkbox","formControlName",""],["forge-checkbox","formControl",""],["forge-checkbox","ngModel",""]],hostBindings:function(r,t){r&1&&m("change",function(s){return t.hostChange(s)})("blur",function(){return t.hostBlur()})},inputs:{threeState:[2,"threeState","threeState",fe]},features:[me([We]),ae]})}}return n})();var ze=(()=>{class n{constructor(){this.dialogConfig=C(Te),this.dialogRef=C(ke),this.formGroup=new b({name:new f(null,{validators:[ve.required]}),description:new f,isDefault:new f,isPublic:new f}),this.record=this.dialogConfig,this.formGroup.patchValue(this.record)}onSave(){this.dialogRef.close(U(U({},this.record),this.formGroup.getRawValue()))}onCancel(){this.formGroup.markAsPristine(),this.dialogRef.close(!1)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=E({type:n,selectors:[["app-search-save"]],decls:22,vars:3,consts:[["dialogTitle","Save search",3,"dialogClose"],["novalidate","","autocomplete","off",1,"form-grid",3,"formGroup"],["required","",3,"appFormControlInvalid"],["type","text","id","search-save--name","formControlName","name","autofocus",""],["for","search-save--name","slot","label"],["slot","support-text",1,"app--form-control-invalid"],["type","text","id","search-save--description","formControlName","description"],["for","search-save--description","slot","label"],["formControlName","isDefault"],["formControlName","isPublic"],["app-dialog-footer",""],["slot","end","variant","outlined",3,"click"],["slot","end","variant","raised",3,"click","disabled"]],template:function(r,t){r&1&&(i(0,"app-dialog-template",0),m("dialogClose",function(){return t.onCancel()}),i(1,"form",1)(2,"forge-text-field",2),p(3,"input",3),i(4,"label",4),l(5,"Name"),a(),i(6,"span",5),l(7,"A name is required"),a()(),i(8,"forge-text-field"),p(9,"input",6),i(10,"label",7),l(11,"Description"),a()(),i(12,"div")(13,"forge-checkbox",8),l(14," Make this your default search "),a(),i(15,"forge-checkbox",9),l(16," Make this search public "),a()()(),x(17,10),i(18,"forge-button",11),m("click",function(){return t.onCancel()}),l(19,"Cancel"),a(),i(20,"forge-button",12),m("click",function(){return t.onSave()}),l(21,"Save"),a(),P(),a()),r&2&&(c(),d("formGroup",t.formGroup),c(),d("appFormControlInvalid",t.formGroup.controls.name),c(18),d("disabled",t.formGroup.invalid||!t.formGroup.dirty))},dependencies:[D,L,I,N,V,G,R,A,q,B,Oe,ye,H,K,$,j,Q,Je,Ue],styles:[`[_nghost-%COMP%]{display:contents}.form-grid[_ngcontent-%COMP%]{padding:16px;display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}






/*# sourceMappingURL=search-save.component-SF3RXQOT.css.map */`]})}}return n})();var tt=["searchesPopover"],ot=(n,h)=>h.id,rt=()=>({name:"name"}),nt=()=>({name:"dateOfBirth"}),it=()=>({name:"address"}),at=n=>({"operator__addon--selected":n});function st(n,h){if(n&1&&(p(0,"forge-divider",30),i(1,"span",31),l(2),a(),i(3,"span",32),l(4),a()),n&2){let e=_();c(2),O(e.searchName),c(2),O(e.searchDescription)}}function lt(n,h){if(n&1){let e=w();i(0,"forge-list-item",35)(1,"button",34),l(2),a(),i(3,"div",8)(4,"forge-icon-button",36),m("mousedown",function(t){let o=u(e).$implicit,s=_(2);return g(s.onSearchAction(t,"edit",o.id))}),p(5,"forge-icon",37),a(),i(6,"forge-icon-button",38),m("mousedown",function(t){let o=u(e).$implicit,s=_(2);return g(s.onSearchAction(t,"delete",o.id))}),p(7,"forge-icon",39),a()()()}if(n&2){let e=h.$implicit;d("value",e.id),c(2),O(e.name)}}function ct(n,h){if(n&1){let e=w();i(0,"forge-list",33),m("forge-list-item-select",function(t){u(e);let o=_();return g(o.onSearchAction(t,"search",t.detail.value))}),i(1,"forge-list-item")(2,"button",34),l(3,"Add new search"),a()(),p(4,"forge-divider"),X(5,lt,8,2,"forge-list-item",35,ot),a()}if(n&2){let e=_();c(5),Z(e.searchCache.searches)}}function mt(n,h){n&1&&F(0)}function pt(n,h){n&1&&F(0)}function dt(n,h){n&1&&F(0)}function ht(n,h){if(n&1){let e=w();i(0,"forge-icon-button",40,4),m("click",function(t){let o=u(e).name,s=y(1),v=_();return g(v.onOperatorPopoverOpen(t,s,o))}),p(2,"forge-icon",41),a()}if(n&2){let e,r=h.name,t=_(),o=y(51);d("ngClass",pe(2,at,(e=t.formGroup.get(r))==null?null:e.value.operator))("forgePopover",o)}}function ft(n,h){n&1&&p(0,"forge-icon",44)}function ut(n,h){if(n&1&&(i(0,"forge-list-item",43)(1,"button",34),l(2),a(),S(3,ft,1,0,"forge-icon",44),a()),n&2){let e=h.$implicit,r=_(2);d("value",e.value)("selected",(r.operatorPopoverFormGroup==null?null:r.operatorPopoverFormGroup.value.operator)===e.value),c(2),O(e.label),c(),J((r.operatorPopoverFormGroup==null?null:r.operatorPopoverFormGroup.value.operator)===e.value?3:-1)}}function gt(n,h){if(n&1){let e=w();i(0,"forge-list",42),m("forge-list-item-select",function(t){u(e);let o=_();return g(o.onOperatorSelected(t.detail.value))}),X(1,ut,4,4,"forge-list-item",43,se),a()}if(n&2){let e=_();c(),Z(e.operatorOptions)}}var Qt=(()=>{class n{constructor(){this.dialogService=C(De),this.toastService=C($e),this.dataService=C(je),this.searchesPopover=ie("searchesPopover"),this.storageKey="search-searches",this.searchCache={activeSearchId:void 0,searches:[]},this.formGroup=new b({name:new b({value:new f,operator:new f}),dateOfBirth:new b({value:new f,operator:new f}),address:new b({value:new f,operator:new f}),include:new f,facet:new f}),this.facetOptions=[],this.operatorOptions=[{value:null,label:"None"},{value:0,label:"Equal"},{value:1,label:"Not equal"},{value:2,label:"Greater than"},{value:3,label:"Less than"},{value:4,label:"Greater than equal to"},{value:5,label:"Less than equal to"},{value:6,label:"Range"},{value:7,label:"Contains"},{value:8,label:"Not contains"},{value:9,label:"Empty"}],this.nameFilter=e=>Y(this.dataService.getPeople().pipe(ee(r=>r.data.filter(t=>t.firstName.toLocaleLowerCase().includes(e.toLocaleLowerCase())||t.lastName.toLocaleLowerCase().includes(e.toLocaleLowerCase())).map(t=>({label:`${t.firstName} ${t.lastName}`,value:t.id}))))),this.facetFilter=e=>W(this.facetOptions)}ngOnInit(){this.dataService.getSearches(this.storageKey).subscribe(e=>{this.searchCache.searches=e||[];let r=this.searchCache.searches.find(t=>t.id===this.searchCache.activeSearchId);M(r)&&(this.searchName=r?.name,this.searchDescription=r?.description,this.formGroup.patchValue(r?.filters))});for(let e=0;e<20;e++)this.facetOptions.push({value:e,label:`Facet Option ${e}`})}onSearch(){}onSaveSearch(e){let r=M(e)?e:this.searchCache.searches.find(o=>o.id===this.searchCache.activeSearchId),t={id:r?.id,name:r?.name,description:r?.description,isDefault:r?.isDefault,isPublic:r?.isPublic,filters:this.formGroup.value};this.dialogService.open(ze,{data:t,options:{persistent:!0}}).afterClosed.subscribe(o=>{if(o){if(M(o.id)){let s=this.searchCache.searches.findIndex(v=>v.id===o.id);s!==-1&&(this.searchCache.searches[s]=o)}else o.id=this.searchCache.searches.length?Math.max(...this.searchCache.searches.map(s=>s.id))+1:1,this.searchCache.searches.push(o);this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe({next:()=>{this.searchCache.activeSearchId=o.id,this.searchName=o.name,this.searchDescription=o.description,this.toastService.show({message:"Search saved"})},error:()=>this.toastService.show({message:"Search save failed"})})}})}onClearSearch(){this.formGroup.controls.include.setValue(null),this.formGroup.reset()}onSearchAction(e,r,t){if(e.stopPropagation(),this.searchesPopover()?.close(),!M(t))this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="",this.formGroup.reset();else{let o=this.searchCache.searches.find(s=>s.id===t);if(M(o))switch(r){case"search":this.searchCache.activeSearchId=o?.id,this.searchName=o?.name,this.searchDescription=o?.description,this.formGroup.patchValue(o?.filters),this.onSearch();break;case"edit":this.searchCache.activeSearchId=o?.id,this.searchName=o?.name,this.searchDescription=o?.description,this.formGroup.patchValue(o?.filters);break;case"copy":{let s=JSON.parse(JSON.stringify(o));s.id=void 0,s.name=`${s.name} copy`,s.isDefault=!1,this.onSaveSearch(s);break}case"delete":{let s=this.searchCache.searches.findIndex(v=>v.id===o?.id);s!==-1&&(this.searchCache.searches.splice(s,1),this.dataService.saveSearches(this.storageKey,this.searchCache.searches).subscribe(v=>{})),this.searchCache.activeSearchId===o?.id&&(this.searchCache.activeSearchId=void 0,this.searchName="",this.searchDescription="");break}}}}onOperatorPopoverOpen(e,r,t){e.stopPropagation(),this.operatorPopoverFormGroup=this.formGroup.get(t),this.operatorPopover=r,this.operatorPopover.open()}onOperatorSelected(e){e=parseInt(e,10),this.operatorPopoverFormGroup?.get("operator")?.setValue(e),this.operatorPopover?.close()}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=E({type:n,selectors:[["app-search"]],viewQuery:function(r,t){r&1&&le(t.searchesPopover,tt,5),r&2&&ce()},decls:52,vars:18,consts:[["searchesPopover","forgePopover"],["searchesPopoverTemplate",""],["opertatorAddonTemplate",""],["operatorPopoverTemplate",""],["operatorPopover","forgePopover"],[1,"header"],["slot","start"],[1,"forge-typography--subheading4"],["slot","end"],["variant","outlined",3,"click"],["variant","outlined",3,"click","forgePopover","forgePopoverPlacement"],["name","arrow_drop_down"],["variant","raised",3,"click"],[1,"body"],["novalidate","","autocomplete","off",1,"form",3,"ngSubmit","formGroup"],["formGroupName","name"],["multiple","true","formControlName","value","allow-unmatched","true",3,"filter"],["type","text","id","search--name"],["for","search--name"],["slot","end","name","arrow_drop_down",1,"forge-dropdown-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["formGroupName","dateOfBirth"],["formControlName","value"],["type","text","id","search--date-of-birth"],["for","search--date-of-birth"],["formGroupName","address"],["type","text","id","search--address","formControlName","value"],["for","search--address","slot","label"],["formControlName","facet","label","Facet",3,"optionFilter"],["threeState","true","formControlName","include",2,"align-self","flex-end"],["vertical",""],[1,"forge-typography--heading2"],[1,"forge-typography--subheading1"],[1,"searches-popover",3,"forge-list-item-select"],["type","button"],[3,"value"],["aria-label","Edit",3,"mousedown"],["name","edit"],["aria-label","Delete",3,"mousedown"],["name","delete"],["slot","addon-end","density","medium","aria-label","Filter operator",1,"operator__addon",3,"click","ngClass","forgePopover"],["name","bolt"],[1,"operator-popover",3,"forge-list-item-select"],[3,"value","selected"],["name","check","slot","end"]],template:function(r,t){if(r&1){let o=w();i(0,"forge-toolbar",5)(1,"div",6)(2,"h2",7),l(3,"Search"),a(),S(4,st,5,2),a(),i(5,"div",8)(6,"forge-button",9),m("click",function(){return u(o),g(t.onSaveSearch())}),l(7,"Save search"),a(),i(8,"forge-button",10,0),m("click",function(){u(o);let v=y(9);return g(v.open())}),i(10,"span"),l(11,"Saved searches"),a(),p(12,"forge-icon",11),a(),i(13,"forge-button",9),m("click",function(){return u(o),g(t.onClearSearch())}),l(14,"Clear all"),a(),i(15,"forge-button",12),m("click",function(){return u(o),g(t.onSearch())}),l(16,"Search"),a()()(),S(17,ct,7,0,"ng-template",null,1,k),i(19,"div",13)(20,"form",14),m("ngSubmit",function(){return u(o),g(t.onSearch())}),x(21,15),i(22,"forge-autocomplete",16)(23,"forge-text-field"),p(24,"input",17),i(25,"label",18),l(26,"Name"),a(),p(27,"forge-icon",19),S(28,mt,1,0,"ng-container",20),a()(),P(),x(29,21),i(30,"forge-date-picker",22)(31,"forge-text-field"),p(32,"input",23),i(33,"label",24),l(34,"Date"),a(),S(35,pt,1,0,"ng-container",20),a()(),P(),x(36,25),i(37,"forge-text-field"),p(38,"input",26),i(39,"label",27),l(40,"Address"),a(),S(41,dt,1,0,"ng-container",20),a(),P(),p(42,"app-autocomplete-range",28),i(43,"forge-checkbox",29),l(44,"Include"),a()(),i(45,"p"),l(46),de(47,"json"),a()(),S(48,ht,3,4,"ng-template",null,2,k)(50,gt,3,0,"ng-template",null,3,k)}if(r&2){let o=y(18),s=y(49);c(4),J(t.searchCache.activeSearchId?4:-1),c(4),d("forgePopover",o)("forgePopoverPlacement","bottom-start"),c(12),d("formGroup",t.formGroup),c(2),d("filter",t.nameFilter),c(6),d("ngTemplateOutlet",s)("ngTemplateOutletContext",T(15,rt)),c(7),d("ngTemplateOutlet",s)("ngTemplateOutletContext",T(16,nt)),c(6),d("ngTemplateOutlet",s)("ngTemplateOutletContext",T(17,it)),c(),d("optionFilter",t.facetFilter),c(4),O(he(47,13,t.formGroup.getRawValue()))}},dependencies:[D,ue,ge,_e,L,I,N,V,G,R,A,Se,Pe,xe,be,q,B,we,H,Fe,Ee,Me,Ve,Ne,K,Ie,Ge,$,Le,Ae,Be,Re,He,qe,j,Q,Qe,Ke,Xe,z],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden}  .searches-popover{min-width:280px}  .searches-popover *[slot=trailing]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin-right:-16px}  .operator-popover{min-width:200px}  .operator-popover forge-list-item{cursor:pointer}.header[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap}.header[_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:16px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   forge-divider[_ngcontent-%COMP%]{margin:0 16px;height:32px}.header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{margin-left:16px}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border-color:var(--forge-theme-outline);box-shadow:var(--forge-elevation-1);padding:16px;display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.body[_ngcontent-%COMP%]   .form--row-break[_ngcontent-%COMP%]{grid-column-start:1}.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.body[_ngcontent-%COMP%]   .form--col-span.body[_ngcontent-%COMP%]   .form--col-span[_ngcontent-%COMP%]{width:auto}.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.body[_ngcontent-%COMP%]   .form--col-span2.body[_ngcontent-%COMP%]   .form--col-span2[_ngcontent-%COMP%]{width:656px}.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.body[_ngcontent-%COMP%]   .form--col-span3.body[_ngcontent-%COMP%]   .form--col-span3[_ngcontent-%COMP%]{width:992px}.body[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.operator__addon--selected[_ngcontent-%COMP%]{color:var(--forge-theme-info)}






/*# sourceMappingURL=search.component-ZTQRIXZD.css.map */`]})}}return n})();export{Qt as SearchComponent};
//# sourceMappingURL=chunk-Y4X3ZUAP.js.map
