import{a as St}from"./chunk-EOD454AY.js";import{a as _e,c as D,d as xt,e as wt,g as Tt}from"./chunk-DIEDREB3.js";import{s as Pt}from"./chunk-MQ3GSWWI.js";import{b as me}from"./chunk-3RMJ5DR6.js";import{a as Ft}from"./chunk-AS3IUQRI.js";import{a as le}from"./chunk-AQM4HU7X.js";import{a as se}from"./chunk-T7MAX6OV.js";import{a as ae}from"./chunk-JMGMC3YK.js";import{a as ne}from"./chunk-Q65ABCTW.js";import"./chunk-JWSBDH3Q.js";import{$c as st,A as Ne,Ab as x,Bb as ve,E as j,Jc as Ye,Lc as Ze,Mc as Xe,Nc as et,Ob as R,Oc as tt,Pb as V,Pc as ot,Qb as qe,Qc as it,Rb as Le,Tc as rt,Uc as nt,Vc as at,_c as lt,ab as Re,ad as mt,bd as pt,cc as ze,cd as dt,db as Ce,dc as He,dd as ct,eb as X,ec as je,ed as ft,fc as $e,fd as ut,gb as P,gc as Qe,gd as gt,hd as ht,i as Ie,ib as u,ic as Ke,jc as oe,k as y,kb as E,kc as ie,kd as U,lb as G,ld as q,md as Ct,nb as ee,nc as A,nd as vt,ob as d,oc as w,od as _t,pc as re,pd as bt,qb as Ve,qc as B,qd as yt,rc as Je,rd as Mt,sb as Ae,sc as We,tb as N,vb as Be,wb as te,y as Ee,yb as Ue,z as Ge}from"./chunk-TDRYUBHM.js";import{$ as Q,$a as l,Aa as Se,Ab as z,Bb as H,Db as S,Gb as f,Ha as Pe,Hb as C,Kb as Te,Mb as K,Nb as J,Ob as W,Qb as a,Rb as ke,Sb as k,Tb as De,Ya as xe,Yb as Y,Zb as b,_ as $,ac as ge,bc as Z,c as ye,cc as Oe,dc as he,fa as c,ib as we,ka as _,ma as Me,mb as M,ob as de,pb as s,tb as F,ub as ce,va as g,vb as fe,wa as h,wb as ue,xa as Fe,xb as i,yb as n,zb as m}from"./chunk-UO34YWUS.js";import"./chunk-NCBA65HR.js";var kt=(()=>{class r{constructor(){this.toastService=c(bt)}show(e){let o=this.toastService.show({message:`${e}`,actionHandler:()=>o.close(),placement:"bottom",duration:3e3})}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275prov=Q({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function Vt(r,v){if(r&1){let e=S();z(0,1),i(1,"forge-button",2),f("click",function(){g(e);let t=C();return h(t.onClose())}),a(2," Cancel "),n(),i(3,"forge-button",3),f("click",function(){g(e);let t=C();return h(t.onClose(!0))}),a(4," Ok "),n(),H()}}var Dt=(()=>{class r{constructor(){this.dialogConfig=c($e),this.dialogRef=c(Qe),this.dialogTitle=this.dialogConfig.title,this.message=this.dialogConfig.message,this.showFooter=j(this.dialogConfig.showFooter)?this.dialogConfig.showFooter:!0}onClose(e=!1){this.dialogRef.close(e)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-confirm-dialog"]],standalone:!0,features:[b],decls:3,vars:3,consts:[[3,"dialogTitle"],["app-dialog-footer",""],["slot","end","variant","outlined",3,"click"],["slot","end","variant","raised","appAutoFocus","","autofocus","",3,"click"]],template:function(o,t){o&1&&(i(0,"app-dialog",0),a(1),M(2,Vt,5,0,"ng-container",1),n()),o&2&&(s("dialogTitle",t.dialogTitle),l(),k(" ",t.message," "),l(),F(t.showFooter?2:-1))},dependencies:[y,V,R,B,w,Ft],styles:[`[_nghost-%COMP%]{display:contents}app-dialog[_ngcontent-%COMP%]{min-width:320px;max-width:600px}






/*# sourceMappingURL=confirm-dialog.component-J53BX3YK.css.map */`]})}}return r})();var T=(()=>{class r{constructor(){this.formGroup=new ee({personalFormGroup:new ee({firstName:new d(null,{validators:[u.required]}),lastName:new d(null,{validators:[u.required]}),gender:new d(null),email:new d(null,{validators:[u.required]}),phone:new d(null,{validators:[u.required]}),dateOfBirth:new d(null),comment:new d(null),rank:new d(5),size:new d(null),citizen:new d(!1),entryDate:new d(null),friends:new Ue([])}),addressFormGroup:new ee({name:new d(null,{validators:[u.required]}),street:new d(null,{validators:[u.required]}),city:new d(null,{validators:[u.required]}),state:new d(null,{validators:[u.required]}),zip:new d(null,{validators:[u.required]})})})}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275prov=Q({token:r,factory:r.\u0275fac})}}return r})();var Ot=(r,v)=>[r,v];function At(r,v){if(r&1){let e=S();i(0,"img",13),f("error",function(t){g(e);let p=C();return h(p.onImageError(t))}),n()}if(r&2){let e=C();s("src",e.imageUrl,xe)}}function Bt(r,v){r&1&&m(0,"forge-icon",8)}function Ut(r,v){r&1&&m(0,"forge-icon",8)}var It=(()=>{class r{get personalFormGroup(){return this.cache.formGroup.controls.personalFormGroup}get addressFormGroup(){return this.cache.formGroup.controls.addressFormGroup}constructor(){this.router=c(Ne),this.route=c(Ee),this.appDataService=c(ae),this.dialogService=c(Ke),this.appToastService=c(kt),this.cache=c(T),this.noImageUrl="mock-data/no-image.png",this.activeTab=0,this.cache.profile&&this.loadForm(this.cache.profile),this.route.snapshot.children.map(e=>e.url.map(o=>o.path)).flat().includes("address")&&(this.activeTab=1)}canDeactivate(){return this.cache.formGroup.dirty?new ye(e=>{this.dialogService.open(Dt,{options:{persistent:!0},data:{title:"Unsaved changes",message:"You have unsaved changes which will be lost, do you want to continue?"}}).afterClosed.subscribe(o=>{o&&this.cache.formGroup.reset(),e.next(o)})}):!0}onLoadProfile(){this.appDataService.getProfile().subscribe(e=>{this.cache.formGroup.reset(),this.cache.profile=e,this.loadForm(this.cache.profile)})}onTabSelected(e){switch(this.activeTab){case 0:this.personalFormGroup.markAsTouched();break;case 1:this.addressFormGroup.markAsTouched();break}switch(e){case"personal":this.activeTab=0;break;case"address":this.activeTab=1;break}this.router.navigate([`profile/${e}`])}onSave(){this.cache.formGroup.invalid||(this.cache.profile=this.parseForm(this.cache.profile?.id),this.cache.formGroup.markAsPristine(),this.appToastService.show("Profile saved."))}onCancel(){this.cache.formGroup.reset(),this.cache.formGroup.markAsPristine(),this.imageUrl=void 0,this.cache.profile=void 0}onImageError(e){let o=e.target;o.src.includes(this.noImageUrl)||(o.src=this.noImageUrl,o.onerror=null)}isInvalid(e){return e.every(o=>o===!0)}loadForm(e){this.imageUrl=`mock-data/${ne.formatNumber(this.cache.profile?.id,"2.0-0")}-small.png`,this.personalFormGroup.controls.friends?.clear(),this.personalFormGroup.patchValue(e),this.addressFormGroup.patchValue(e.address)}parseForm(e){return{id:e||-1,firstName:this.personalFormGroup.value.firstName,lastName:this.personalFormGroup.value.lastName,gender:this.personalFormGroup.value.gender,email:this.personalFormGroup.value.email,phone:this.personalFormGroup.value.phone,dateOfBirth:this.personalFormGroup.value.dateOfBirth,address:this.addressFormGroup.value}}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile"]],standalone:!0,features:[b],decls:29,vars:21,consts:[[1,"header"],["slot","start"],[1,"forge-typography--subheading4"],["alt","",3,"src"],["slot","end"],["variant","outlined",3,"click"],["secondary","",3,"activeTab"],[3,"forge-tab-select"],["slot","end","name","error"],[1,"body"],["novalidate","","autocomplete","off",3,"formGroup"],["inverted","",1,"footer"],["variant","raised",3,"click","disabled"],["alt","",3,"error","src"]],template:function(o,t){o&1&&(i(0,"forge-toolbar",0)(1,"div",1)(2,"h2",2),a(3,"Profile"),n(),M(4,At,1,1,"img",3),n(),i(5,"div",4)(6,"forge-button",5),f("click",function(){return t.onLoadProfile()}),a(7," Load profile "),n()()(),i(8,"forge-tab-bar",6)(9,"forge-tab",7),f("forge-tab-select",function(){return t.onTabSelected("personal")}),a(10," Personal "),M(11,Bt,1,0,"forge-icon",8),Z(12,"appCallback"),n(),i(13,"forge-tab",7),f("forge-tab-select",function(){return t.onTabSelected("address")}),a(14," Address "),M(15,Ut,1,0,"forge-icon",8),Z(16,"appCallback"),n()(),i(17,"div",9)(18,"form",10),m(19,"router-outlet"),i(20,"p"),a(21),Z(22,"json"),n()()(),i(23,"forge-toolbar",11)(24,"div",4)(25,"forge-button",5),f("click",function(){return t.onCancel()}),a(26," Cancel "),n(),i(27,"forge-button",12),f("click",function(){return t.onSave()}),a(28," Save "),n()()()),o&2&&(l(4),F(t.imageUrl?4:-1),l(4),s("activeTab",t.activeTab),l(3),F(he(12,7,ge(15,Ot,t.personalFormGroup.invalid,t.personalFormGroup.touched),t.isInvalid)?11:-1),l(4),F(he(16,10,ge(18,Ot,t.addressFormGroup.invalid,t.addressFormGroup.touched),t.isInvalid)?15:-1),l(3),s("formGroup",t.cache.formGroup),l(3),k(" ",Oe(22,13,t.cache.formGroup.getRawValue())," "),l(6),s("disabled",t.cache.formGroup.invalid||!t.cache.formGroup.dirty))},dependencies:[y,Ie,Ge,x,Ve,G,N,V,R,w,A,ht,gt,ft,ut,Mt,yt,St],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto auto 1fr auto;overflow:hidden;background-color:var(--forge-theme-surface)}.header[_ngcontent-%COMP%]{overflow:hidden;--forge-toolbar-border-bottom: none}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin:0 16px}forge-tab-bar[_ngcontent-%COMP%]::part(container){justify-items:flex-start}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]{min-width:240px}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]   forge-icon[_ngcontent-%COMP%]{color:var(--forge-theme-error)}.body[_ngcontent-%COMP%]{padding:24px;overflow:auto}.footer[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:16px}






/*# sourceMappingURL=profile.component-VJHU5A55.css.map */`]})}}return r})();var Et=(()=>{class r{constructor(){this.cache=c(T)}get formGroup(){return this.cache.formGroup.controls.addressFormGroup}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile-address"]],standalone:!0,features:[b],decls:32,vars:6,consts:[[1,"form-grid",3,"formGroup"],["required","",1,"form-grid--row-break",3,"appFormControlInvalid"],["type","text","id","profile--address--name","formControlName","name","appAutoFocus",""],["for","profile--address--name","slot","label"],["slot","support-text",1,"app-form-control-invalid"],["type","text","id","profile--address--street","formControlName","street"],["for","profile--address--street","slot","label"],["required","",3,"appFormControlInvalid"],["type","text","id","profile--address-city","formControlName","city"],["for","profile--address--city","slot","label"],[1,"form-grid__state-zip"],["type","text","id","profile--address--state","formControlName","state"],["for","profile--address--state","slot","label"],["type","text","id","profile--address--zip","formControlName","zip"],["for","profile--address--zip","slot","label"]],template:function(o,t){o&1&&(i(0,"div",0)(1,"forge-text-field",1),m(2,"input",2),i(3,"label",3),a(4,"Name"),n(),i(5,"span",4),a(6,"Name is required"),n()(),i(7,"forge-text-field",1),m(8,"input",5),i(9,"label",6),a(10,"Street"),n(),i(11,"span",4),a(12,"Street is required"),n()(),i(13,"forge-text-field",7),m(14,"input",8),i(15,"label",9),a(16,"City"),n(),i(17,"span",4),a(18,"City is required"),n()(),i(19,"div",10)(20,"forge-text-field",7),m(21,"input",11),i(22,"label",12),a(23,"State"),n(),i(24,"span",4),a(25,"State is required"),n()(),i(26,"forge-text-field",7),m(27,"input",13),i(28,"label",14),a(29,"Zip code"),n(),i(30,"span",4),a(31,"Zip code is required"),n()()()()),o&2&&(s("formGroup",t.formGroup),l(),s("appFormControlInvalid",t.formGroup.controls.name),l(6),s("appFormControlInvalid",t.formGroup.controls.street),l(6),s("appFormControlInvalid",t.formGroup.controls.city),l(7),s("appFormControlInvalid",t.formGroup.controls.state),l(6),s("appFormControlInvalid",t.formGroup.controls.zip))},dependencies:[y,x,P,E,G,N,te,q,U,le,se],styles:[`[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.form-grid__name[_ngcontent-%COMP%], .form-grid__street[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid__state-zip[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;column-gap:16px}.app-form-control-invalid[_ngcontent-%COMP%]{display:none}.app-form-control-invalid[invalid][_ngcontent-%COMP%], .app-form-control-invalid[invalid][_ngcontent-%COMP%]   .app-form-control-invalid[_ngcontent-%COMP%]{display:block}






/*# sourceMappingURL=address.component-W42GIDTE.css.map */`]})}}return r})();var Gt=(()=>{class r extends P{inputHandler(e){let o=e.target,t=o.selectionStart;o.value=this.#e==="lower"?o.value.toLowerCase():o.value.toUpperCase(),o.setSelectionRange(t,t),this.onChange(o.value)}#e="upper";set appInputCasing(e){this.#e=e}static{this.\u0275fac=(()=>{let e;return function(t){return(e||(e=Fe(r)))(t||r)}})()}static{this.\u0275dir=Me({type:r,selectors:[["","appInputCasing",""]],hostBindings:function(o,t){o&1&&f("input",function(I){return t.inputHandler(I)})},inputs:{appInputCasing:"appInputCasing"},standalone:!0,features:[Y([{provide:X,multi:!0,useExisting:$(()=>r)}]),we]})}}return r})();var qt=["dateTimeInput"],Lt=["timeInput"],zt=["calendar"];function Ht(r,v){if(r&1&&(i(0,"label",4),a(1),n()),r&2){let e=C();de("for",e.id),l(),ke(e.label)}}var Nt=(()=>{class r{componentFocusout(){setTimeout(()=>{this.elementRef.nativeElement.contains(document.activeElement)||this.onTouched()},100)}#e;set timePrecision(e){switch(this.#e=e,this.#e){case"m":this.timeFormat="hh:mm aa";break;case"s":this.timeFormat="hh:mm:ss aa";break}this.mask&&(this.mask=this.buildDateTimeMask())}get timePrecision(){return this.#e}set disabled(e){e?this.dateTime.disable():this.dateTime.enable()}constructor(){this.destroyRef=c(Se),this.elementRef=c(Pe),this.timeFormat="hh:mm aa",this.#e="m",this.id=ne.elementId("app-"),this.time=new d(null),this.dateTime=new d(null),this.onChange=e=>{},this.onTouched=()=>{},this.dateTime.valueChanges.pipe(ve(this.destroyRef)).subscribe(e=>{this.onChange(e)}),this.time.valueChanges.pipe(ve(this.destroyRef)).subscribe(e=>{let o=_e(this.mask.value.substring(0,10),"MM/dd/yyyy",new Date);j(e)&&me(o)&&this.dateTime.setValue(Ce(o,e,this.timePrecision==="s"))})}ngOnInit(){this.mask||(this.mask=this.buildDateTimeMask())}onPopoverToggle(e){e.detail.newState==="closed"&&(!document.activeElement||document.activeElement===document.body)&&this.dateTimeInputElementRef.nativeElement.focus()}onDateSelected(e){let o=e.detail.date;j(this.time.value)&&(o=Ce(o,this.time.value,this.timePrecision==="s")),this.dateTime.setValue(o)}onKeyDown(e){e.target===this.timeInputElementRef.nativeElement&&(e.preventDefault(),this.calendarElementRef.nativeElement?.shadowRoot?.querySelector(Re.selectors.PREVIOUS_BUTTON)?.focus())}writeValue(e){this.dateTime.setValue(e),this.setTimeValue(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){e?this.dateTime.disable():this.dateTime.enable()}buildDateTimeMask(){return new xt({mask:Date,pattern:this.timePrecision==="s"?"MM/`dd/`yyyy `hh:`mm:`ss `a`M":"MM/`dd/`yyyy `hh:`mm `a`M",placeholderChar:" ",blocks:{MM:{mask:D,from:1,to:12,maxLength:2},dd:{mask:D,from:1,to:31,maxLength:2},yyyy:{mask:D,from:1900,to:9999,maxLength:4},hh:{mask:D,from:1,to:12,maxLength:2},mm:{mask:D,from:0,to:59,maxLength:2},ss:{mask:D,from:0,to:59,maxLength:2},a:{mask:wt,enum:["A","P"]}},autofix:!1,lazy:!1,overwrite:!1,format:e=>me(e)?Pt(e,`MM/dd/yyyy ${this.timeFormat}`).toUpperCase():"",parse:e=>_e(e.toUpperCase(),`MM/dd/yyyy ${this.timeFormat}`,new Date),prepare(e,o,t){return e.toUpperCase()}})}setTimeValue(e){let o=[0,0,0];me(e)&&(this.timePrecision==="s"?o=[e.getHours(),e.getMinutes(),e.getSeconds()]:o=[e.getHours(),e.getMinutes(),0]),this.time.setValue(o.map(t=>t.toString().padStart(2,"0")).join(":"))}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-date-time"]],viewQuery:function(o,t){if(o&1&&(K(qt,7),K(Lt,7),K(zt,5)),o&2){let p;J(p=W())&&(t.dateTimeInputElementRef=p.first),J(p=W())&&(t.timeInputElementRef=p.first),J(p=W())&&(t.calendarElementRef=p.first)}},hostBindings:function(o,t){o&1&&f("focusout",function(I){return t.componentFocusout(I)})},inputs:{label:"label",timePrecision:"timePrecision",disabled:"disabled"},standalone:!0,features:[Y([{provide:X,useExisting:$(()=>r),multi:!0}]),b],decls:17,vars:12,consts:[["dateTimeInput",""],["calendar",""],["timeInput",""],["type","text",3,"id","formControl","imask","unmask"],["slot","label"],["slot","end","tabindex","-1","aria-label","Open calendar",3,"id","disabled"],["name","insert_invitation"],["placement","bottom-end","animationType","none",3,"forge-popover-toggle","anchor"],[1,"calendar-popover",3,"keydown.tab"],["prevent-focus","true",3,"forge-calendar-date-select","id"],[3,"formControl"],["type","text","placeholder","hh:mm:ss aa","autofocus","",3,"id"]],template:function(o,t){if(o&1){let p=S();i(0,"forge-text-field"),m(1,"input",3,0),M(3,Ht,2,2,"label",4),i(4,"forge-icon-button",5),m(5,"forge-icon",6),n(),i(6,"forge-popover",7),f("forge-popover-toggle",function(L){return g(p),h(t.onPopoverToggle(L))}),i(7,"div",8),f("keydown.tab",function(L){return g(p),h(t.onKeyDown(L))}),i(8,"forge-calendar",9,1),f("forge-calendar-date-select",function(L){return g(p),h(t.onDateSelected(L))}),n(),m(10,"forge-divider"),i(11,"forge-time-picker",10)(12,"forge-text-field"),m(13,"input",11,2),i(15,"label",4),a(16,"Time"),n()()()()()()}o&2&&(l(),s("id",t.id)("formControl",t.dateTime)("imask",t.mask)("unmask","typed"),l(2),F(t.label!=null&&t.label.length?3:-1),l(),s("id","popover-toggle-"+t.id)("disabled",t.dateTime.disabled),l(2),s("anchor","popover-toggle-"+t.id),l(2),s("id","calendar-"+t.id),l(3),s("formControl",t.time),l(2),s("id","time-"+t.id),l(2),de("for","time-"+t.id))},dependencies:[y,x,P,E,Ae,Tt,Le,qe,ie,oe,B,re,A,w,Ze,Ye,q,U,_t,vt,Ct],styles:[`[_nghost-%COMP%]{display:block}.calendar-popover[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:8px;padding:16px}.calendar-popover[_ngcontent-%COMP%]   forge-calendar[_ngcontent-%COMP%]{--forge-calendar-width: 320px}
/*# sourceMappingURL=date-time.component-EE32KDE4.css.map */`]})}}return r})();function jt(r,v){if(r&1&&(i(0,"forge-radio",24),a(1),n()),r&2){let e=v.$implicit;Te("value",e.value),l(),k(" ",e.label," ")}}function $t(r,v){if(r&1){let e=S();i(0,"div",29)(1,"forge-select",31)(2,"span",5),a(3,"A friend is required"),n()(),i(4,"forge-icon-button",32),f("click",function(){let t=g(e).$index,p=C();return h(p.onDeleteFriend(t))}),m(5,"forge-icon",33),n()()}if(r&2){let e=v.$index,o=C();l(),s("options",o.friendOptions)("formControlName",e)("appFormControlInvalid",o.formGroup.controls.friends.controls[e])}}var Rt=(()=>{class r{get formGroup(){return this.cache.formGroup.controls.personalFormGroup}get friendsFormArray(){return this.formGroup.controls.friends}constructor(){this.cache=c(T),this.appDataService=c(ae),this.genderOptions=[{label:"",value:null},{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Undecided",value:"U"}],this.friendOptions=[],this.sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}],this.appDataService.getPeople().subscribe(e=>{this.friendOptions=e.data.map(o=>({label:`${o.firstName} ${o.lastName}`,value:o.id}))})}onAddFriend(){this.friendsFormArray.push(new d(null,{validators:[u.required]})),this.cache.formGroup.controls.personalFormGroup.controls.entryDate.disabled?this.cache.formGroup.controls.personalFormGroup.controls.entryDate.enable():this.cache.formGroup.controls.personalFormGroup.controls.entryDate.disable()}onDeleteFriend(e){this.friendsFormArray.removeAt(e)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile-personal"]],standalone:!0,features:[b],decls:60,vars:10,consts:[[3,"formGroup"],[1,"form-grid"],["required","",3,"appFormControlInvalid"],["type","text","id","profile--personal--first-name","formControlName","firstName","appAutoFocus","",3,"appInputCasing"],["for","profile--personal--first-name","slot","label"],["slot","support-text",1,"app-form-control-invalid"],["type","text","id","profile--personal--last-name","formControlName","lastName"],["for","profile--personal--last-name","slot","label"],["label","Gender","formControlName","gender",3,"options"],["type","text","id","profile--personal--email","formControlName","email"],["for","profile--personal--email","slot","label"],["type","text","id","profile--personal--phone","formControlName","phone"],["for","profile--personal--phone","slot","label"],["formControlName","dateOfBirth"],["type","text","id","profile--personal--dob"],["for","profile--personal--dob"],[1,"form-grid__comment","form-grid--col-span"],["type","text","id","profile--personal--comment","formControlName","comment","rows","4"],["for","profile--personal--comment"],[2,"--forge-label-value-align","stretch"],["slot","label"],["slot","value"],["min","0","max","10","formControlName","rank"],["slot","value","aria-label","Choose a size option","name","profile--personal--size"],["name","profile--personal--size","formControlName","size",3,"value"],["formControlName","citizen"],["label","Entry date","formControlName","entryDate"],[1,"friends"],["formArrayName","friends"],[1,"friend"],["variant","raised",3,"click"],["label","Friend",3,"options","formControlName","appFormControlInvalid"],["aria-label","Delete",3,"click"],["name","delete"]],template:function(o,t){o&1&&(z(0,0),i(1,"div",1)(2,"forge-text-field",2),m(3,"input",3),i(4,"label",4),a(5,"First name"),n(),i(6,"span",5),a(7),n()(),i(8,"forge-text-field",2),m(9,"input",6),i(10,"label",7),a(11,"Last name"),n(),i(12,"span",5),a(13,"Last name is required"),n()(),m(14,"forge-select",8),i(15,"forge-text-field",2),m(16,"input",9),i(17,"label",10),a(18,"Email"),n(),i(19,"span",5),a(20,"Email is required"),n()(),i(21,"forge-text-field",2),m(22,"input",11),i(23,"label",12),a(24,"Phone"),n(),i(25,"span",5),a(26,"Phone number is required"),n()(),i(27,"forge-date-picker",13)(28,"forge-text-field"),m(29,"input",14),i(30,"label",15),a(31,"Date of birth"),n()()(),i(32,"forge-text-field",16),m(33,"textarea",17),i(34,"label",18),a(35,"Comment"),n()(),i(36,"forge-label-value",19)(37,"span",20),a(38),n(),i(39,"div",21),m(40,"forge-slider",22),n()(),i(41,"forge-label-value")(42,"span",20),a(43,"Size"),n(),i(44,"forge-radio-group",23),fe(45,jt,2,2,"forge-radio",24,ce),n()(),i(47,"forge-label-value")(48,"span",20),a(49,"Citizen"),n(),i(50,"div",21),m(51,"forge-switch",25),n()(),m(52,"app-date-time",26),n(),m(53,"forge-divider"),i(54,"div",27),z(55,28),fe(56,$t,6,3,"div",29,ce),i(58,"forge-button",30),f("click",function(){return t.onAddFriend()}),a(59," Add friend"),n(),H(),n(),H()),o&2&&(s("formGroup",t.formGroup),l(2),s("appFormControlInvalid",t.formGroup.controls.firstName),l(),s("appInputCasing","upper"),l(4),De("First name is required ",t.formGroup.controls.firstName.invalid," ",t.formGroup.controls.firstName.touched,""),l(),s("appFormControlInvalid",t.formGroup.controls.lastName),l(6),s("options",t.genderOptions),l(),s("appFormControlInvalid",t.formGroup.controls.email),l(6),s("appFormControlInvalid",t.formGroup.controls.phone),l(17),k("Rank ",t.formGroup.value.rank,""),l(7),ue(t.sizeOptions),l(11),ue(t.formGroup.controls.friends.controls))},dependencies:[y,x,P,E,G,N,te,Be,V,R,je,He,ze,ie,oe,B,re,A,w,We,Je,it,ot,et,tt,Xe,at,nt,rt,mt,st,lt,ct,dt,pt,q,U,le,Gt,Nt,se],styles:[`[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.form-grid__comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none}forge-divider[_ngcontent-%COMP%]{margin:16px 0}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-end;padding-bottom:16px}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   forge-select[_ngcontent-%COMP%]{min-width:320px}.app-form-control-invalid[_ngcontent-%COMP%]{display:none}.app-form-control-invalid[invalid][_ngcontent-%COMP%], .app-form-control-invalid[invalid][_ngcontent-%COMP%]   .app-form-control-invalid[_ngcontent-%COMP%]{display:block}






/*# sourceMappingURL=personal.component-OGBN5F63.css.map */`]})}}return r})();var gi=[{path:"",component:It,canDeactivate:[r=>r.canDeactivate()],providers:[T],children:[{path:"address",component:Et},{path:"personal",component:Rt},{path:"",redirectTo:"personal",pathMatch:"full"}]}];export{gi as PROFILE_ROUTES};
//# sourceMappingURL=chunk-OR55YQZF.js.map
