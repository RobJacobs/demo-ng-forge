import{a as Ft}from"./chunk-UNODQMYK.js";import{a as Ce,c as k,d as Pt,e as xt,g as Tt}from"./chunk-4GGZVHBD.js";import{p as St}from"./chunk-SWINKNK2.js";import{h as le}from"./chunk-PSWJZLWW.js";import{a as ae}from"./chunk-LQ6WE2F2.js";import{a as Mt}from"./chunk-TS7FVY6Y.js";import{a as ne}from"./chunk-BQZCN6XW.js";import{a as re}from"./chunk-22V6ZWMG.js";import{a as ie}from"./chunk-BPL7HX3P.js";import"./chunk-GLQJZZJZ.js";import{$c as st,Ab as P,Bb as he,E as H,Ic as Ze,Kc as Ye,Lc as Je,Mc as Xe,Nc as et,Ob as R,Oc as tt,Pb as N,Pc as ot,Qb as Le,Rb as Ue,Sc as it,Tc as rt,Uc as nt,Zc as at,_c as lt,ab as Re,ad as mt,bd as pt,cc as qe,cd as dt,db as ge,dc as ze,dd as ct,eb as Y,ec as He,ed as ft,fc as je,fd as ut,gb as S,gc as $e,gd as gt,h as Ie,hc as Qe,ib as u,ic as ee,j as b,jc as te,jd as B,kb as E,kd as L,lb as O,ld as ht,mc as A,md as Ct,nb as J,nc as x,nd as vt,ob as p,oc as oe,od as _t,pc as V,pd as bt,qb as Ne,qc as Ke,qd as yt,rc as We,sb as Ae,tb as G,vb as Ve,wb as X,x as Ee,y as Oe,yb as Be,z as Ge}from"./chunk-CNI7K2GC.js";import{$b as we,Ab as s,Da as Me,Ea as Fe,Eb as M,Fb as pe,Gb as de,Hb as ce,Ib as i,Jb as n,Kb as m,Lb as q,Mb as z,Ob as F,Rb as d,Sb as C,Vb as Te,Xa as Se,_a as l,_b as K,aa as j,ba as $,bc as a,cc as ke,d as _e,dc as w,ha as c,hb as _,ic as W,jb as Pe,lc as fe,mc as Z,nc as De,oc as ue,sa as g,ta as h,ua as be,ub as Q,wb as xe,xa as ye,yb as y,zb as me}from"./chunk-5VCAQWVT.js";import"./chunk-NCBA65HR.js";var wt=(()=>{class r{constructor(){this.toastService=c(_t)}show(e){let o=this.toastService.show({message:`${e}`,actionHandler:()=>o.close(),placement:"bottom",duration:3e3})}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275prov=$({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();function Nt(r,v){if(r&1){let e=F();q(0,2),i(1,"forge-button",3),d("click",function(){g(e);let t=C();return h(t.onClose())}),a(2,"Cancel"),n(),i(3,"forge-button",4),d("click",function(){g(e);let t=C();return h(t.onClose(!0))}),a(4,"Ok"),n(),z()}}var kt=(()=>{class r{constructor(){this.dialogData=c(je),this.dialogRef=c($e),this.dialogTitle=this.dialogData.title,this.message=this.dialogData.message,this.showFooter=H(this.dialogData.showFooter)?this.dialogData.showFooter:!0}onClose(e=!1){this.dialogRef.close(e)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-confirm-dialog"]],decls:4,vars:3,consts:[[3,"dialogClose","dialogTitle"],[1,"body"],["app-dialog-footer",""],["slot","end","variant","outlined",3,"click"],["slot","end","variant","raised","autofocus","",3,"click"]],template:function(o,t){o&1&&(i(0,"app-dialog-template",0),d("dialogClose",function(){return t.onClose()}),i(1,"div",1),a(2),n(),y(3,Nt,5,0,"ng-container",2),n()),o&2&&(s("dialogTitle",t.dialogTitle),l(2),w(" ",t.message," "),l(),M(t.showFooter?3:-1))},dependencies:[b,N,R,V,x,Mt],styles:[`[_nghost-%COMP%]{display:contents}.body[_ngcontent-%COMP%]{padding:16px;min-width:320px;max-width:600px}






/*# sourceMappingURL=confirm-dialog.component-YQCZ6BST.css.map */`]})}}return r})();var T=(()=>{class r{constructor(){this.formGroup=new J({personalFormGroup:new J({firstName:new p(null,{validators:[u.required]}),lastName:new p(null,{validators:[u.required]}),gender:new p(null),email:new p(null,{validators:[u.required]}),phone:new p(null,{validators:[u.required]}),dateOfBirth:new p(null),comment:new p(null),rank:new p(5),size:new p(null),citizen:new p(!1),entryDate:new p(null),friends:new Be([])}),addressFormGroup:new J({name:new p(null,{validators:[u.required]}),street:new p(null,{validators:[u.required]}),city:new p(null,{validators:[u.required]}),state:new p(null,{validators:[u.required]}),zip:new p(null,{validators:[u.required]})})})}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275prov=$({token:r,factory:r.\u0275fac})}}return r})();var Dt=(r,v)=>[r,v];function At(r,v){if(r&1){let e=F();i(0,"img",14),d("error",function(t){g(e);let f=C();return h(f.onImageError(t))}),n()}if(r&2){let e=C();s("src",e.imageUrl,Se)}}function Vt(r,v){r&1&&m(0,"forge-icon",8)}function Bt(r,v){r&1&&m(0,"forge-icon",8)}var It=(()=>{class r{get personalFormGroup(){return this.cache.formGroup.controls.personalFormGroup}get addressFormGroup(){return this.cache.formGroup.controls.addressFormGroup}constructor(){this.router=c(Ge),this.route=c(Ee),this.appDataService=c(re),this.dialogService=c(Qe),this.appToastService=c(wt),this.cache=c(T),this.noImageUrl="mock-data/no-image.png",this.activeTab=0,this.cache.profile&&this.loadForm(this.cache.profile),this.route.snapshot.children.map(e=>e.url.map(o=>o.path)).flat().includes("address")&&(this.activeTab=1)}canDeactivate(){return this.cache.formGroup.dirty?new _e(e=>{this.dialogService.open(kt,{options:{persistent:!0},data:{title:"Unsaved changes",message:"You have unsaved changes which will be lost, do you want to continue?"}}).afterClosed.subscribe(o=>{o&&this.cache.formGroup.reset(),e.next(o)})}):!0}onLoadProfile(){this.appDataService.getProfile().subscribe(e=>{this.cache.formGroup.reset(),this.cache.profile=e,this.loadForm(this.cache.profile)})}onTabSelected(e){switch(this.activeTab){case 0:this.personalFormGroup.markAsTouched();break;case 1:this.addressFormGroup.markAsTouched();break}switch(e){case"personal":this.activeTab=0;break;case"address":this.activeTab=1;break}this.router.navigate([`profile/${e}`])}onSave(){this.cache.formGroup.invalid||(this.cache.profile=this.parseForm(this.cache.profile?.id),this.cache.formGroup.markAsPristine(),this.appToastService.show("Profile saved."))}onCancel(){this.cache.formGroup.reset(),this.cache.formGroup.markAsPristine(),this.imageUrl=void 0,this.cache.profile=void 0}onImageError(e){let o=e.target;o.src.includes(this.noImageUrl)||(o.src=this.noImageUrl,o.onerror=null)}isInvalid(e){return e.every(o=>o===!0)}loadForm(e){this.imageUrl=`mock-data/${ie.formatNumber(this.cache.profile?.id,"2.0-0")}-small.png`,this.personalFormGroup.controls.friends?.clear(),this.personalFormGroup.patchValue(e),this.addressFormGroup.patchValue(e.address)}parseForm(e){return{id:e||-1,firstName:this.personalFormGroup.value.firstName,lastName:this.personalFormGroup.value.lastName,gender:this.personalFormGroup.value.gender,email:this.personalFormGroup.value.email,phone:this.personalFormGroup.value.phone,dateOfBirth:this.personalFormGroup.value.dateOfBirth,address:this.addressFormGroup.value}}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile"]],decls:29,vars:21,consts:[[1,"header"],["slot","start"],[1,"forge-typography--subheading4"],["alt","",3,"src"],["slot","end"],["variant","outlined",3,"click"],["secondary","",3,"activeTab"],["aria-controls","app--profile--personal",3,"forge-tab-select"],["slot","end","name","error"],["aria-controls","app--profile--address",3,"forge-tab-select"],[1,"body"],["novalidate","","autocomplete","off",3,"formGroup"],["inverted","",1,"footer"],["variant","raised",3,"click","disabled"],["alt","",3,"error","src"]],template:function(o,t){o&1&&(i(0,"forge-toolbar",0)(1,"div",1)(2,"h2",2),a(3,"Profile"),n(),y(4,At,1,1,"img",3),n(),i(5,"div",4)(6,"forge-button",5),d("click",function(){return t.onLoadProfile()}),a(7," Load profile "),n()()(),i(8,"forge-tab-bar",6)(9,"forge-tab",7),d("forge-tab-select",function(){return t.onTabSelected("personal")}),a(10," Personal "),y(11,Vt,1,0,"forge-icon",8),Z(12,"appCallback"),n(),i(13,"forge-tab",9),d("forge-tab-select",function(){return t.onTabSelected("address")}),a(14," Address "),y(15,Bt,1,0,"forge-icon",8),Z(16,"appCallback"),n()(),i(17,"div",10)(18,"form",11),m(19,"router-outlet"),i(20,"p"),a(21),Z(22,"json"),n()()(),i(23,"forge-toolbar",12)(24,"div",4)(25,"forge-button",5),d("click",function(){return t.onCancel()}),a(26,"Cancel"),n(),i(27,"forge-button",13),d("click",function(){return t.onSave()}),a(28," Save "),n()()()),o&2&&(l(4),M(t.imageUrl?4:-1),l(4),s("activeTab",t.activeTab),l(3),M(ue(12,7,fe(15,Dt,t.personalFormGroup.invalid,t.personalFormGroup.touched),t.isInvalid)?11:-1),l(4),M(ue(16,10,fe(18,Dt,t.addressFormGroup.invalid,t.addressFormGroup.touched),t.isInvalid)?15:-1),l(3),s("formGroup",t.cache.formGroup),l(3),w(" ",De(22,13,t.cache.formGroup.getRawValue())," "),l(6),s("disabled",t.cache.formGroup.invalid||!t.cache.formGroup.dirty))},dependencies:[b,Ie,Oe,P,Ne,O,G,N,R,x,A,gt,ut,ct,ft,yt,bt,Ft],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto auto 1fr auto;overflow:hidden;background-color:var(--forge-theme-surface)}.header[_ngcontent-%COMP%]{overflow:hidden;--forge-toolbar-border-bottom: none}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin:0 16px}forge-tab-bar[_ngcontent-%COMP%]::part(container){justify-items:flex-start}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]{min-width:240px}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]   forge-icon[_ngcontent-%COMP%]{color:var(--forge-theme-error)}.body[_ngcontent-%COMP%]{padding:24px;overflow:auto}.footer[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   forge-button[_ngcontent-%COMP%]{margin-left:16px}






/*# sourceMappingURL=profile.component-TKDIKGHP.css.map */`]})}}return r})();var Et=(()=>{class r{constructor(){this.cache=c(T)}get formGroup(){return this.cache.formGroup.controls.addressFormGroup}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile-address"]],hostAttrs:["role","tabpanel","id","app--profile--address"],decls:32,vars:6,consts:[[1,"form-grid",3,"formGroup"],["required","",1,"form-grid--row-break",3,"appFormControlInvalid"],["type","text","id","profile--address--name","formControlName","name","appAutoFocus",""],["for","profile--address--name","slot","label"],["slot","support-text",1,"app--form-control-invalid"],["type","text","id","profile--address--street","formControlName","street"],["for","profile--address--street","slot","label"],["required","",3,"appFormControlInvalid"],["type","text","id","profile--address-city","formControlName","city"],["for","profile--address--city","slot","label"],[1,"form-grid__state-zip"],["type","text","id","profile--address--state","formControlName","state"],["for","profile--address--state","slot","label"],["type","text","id","profile--address--zip","formControlName","zip"],["for","profile--address--zip","slot","label"]],template:function(o,t){o&1&&(i(0,"div",0)(1,"forge-text-field",1),m(2,"input",2),i(3,"label",3),a(4,"Name"),n(),i(5,"span",4),a(6,"Name is required"),n()(),i(7,"forge-text-field",1),m(8,"input",5),i(9,"label",6),a(10,"Street"),n(),i(11,"span",4),a(12,"Street is required"),n()(),i(13,"forge-text-field",7),m(14,"input",8),i(15,"label",9),a(16,"City"),n(),i(17,"span",4),a(18,"City is required"),n()(),i(19,"div",10)(20,"forge-text-field",7),m(21,"input",11),i(22,"label",12),a(23,"State"),n(),i(24,"span",4),a(25,"State is required"),n()(),i(26,"forge-text-field",7),m(27,"input",13),i(28,"label",14),a(29,"Zip code"),n(),i(30,"span",4),a(31,"Zip code is required"),n()()()()),o&2&&(s("formGroup",t.formGroup),l(),s("appFormControlInvalid",t.formGroup.controls.name),l(6),s("appFormControlInvalid",t.formGroup.controls.street),l(6),s("appFormControlInvalid",t.formGroup.controls.city),l(7),s("appFormControlInvalid",t.formGroup.controls.state),l(6),s("appFormControlInvalid",t.formGroup.controls.zip))},dependencies:[b,P,S,E,O,G,X,L,B,ne,ae],styles:[`[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.form-grid__name[_ngcontent-%COMP%], .form-grid__street[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid__state-zip[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;column-gap:16px}






/*# sourceMappingURL=address.component-LQWHFTWC.css.map */`]})}}return r})();var Ot=(()=>{class r extends S{constructor(){super(...arguments),this.appInputCasing=Me("upper")}inputHandler(e){let o=e.target,t=o.selectionStart;o.value=this.appInputCasing()==="lower"?o.value.toLowerCase():o.value.toUpperCase(),o.setSelectionRange(t,t),this.onChange(o.value)}static{this.\u0275fac=(()=>{let e;return function(t){return(e||(e=be(r)))(t||r)}})()}static{this.\u0275dir=Pe({type:r,selectors:[["","appInputCasing",""]],hostBindings:function(o,t){o&1&&d("input",function(I){return t.inputHandler(I)})},inputs:{appInputCasing:[1,"appInputCasing"]},features:[W([{provide:Y,multi:!0,useExisting:j(()=>r)}]),xe]})}}return r})();var Lt=["dateTimeInput"],Ut=["timeInput"],qt=["calendar"];function zt(r,v){if(r&1&&(i(0,"label",4),a(1),n()),r&2){let e=C();me("for",e.id),l(),ke(e.label)}}var Gt=(()=>{class r{componentFocusout(){setTimeout(()=>{this.elementRef.nativeElement.contains(document.activeElement)||this.onTouched()},100)}#e;set timePrecision(e){switch(this.#e=e,this.#e){case"m":this.timeFormat="hh:mm aa";break;case"s":this.timeFormat="hh:mm:ss aa";break}this.mask&&(this.mask=this.buildDateTimeMask())}get timePrecision(){return this.#e}set disabled(e){e?this.dateTime.disable():this.dateTime.enable()}constructor(){this.dateTimeInputElementRef=Q("dateTimeInput"),this.timeInputElementRef=Q("timeInput"),this.calendarElementRef=Q("calendar"),this.destroyRef=c(ye),this.elementRef=c(Fe),this.timeFormat="hh:mm aa",this.#e="m",this.id=ie.elementId("app-"),this.time=new p(null),this.dateTime=new p(null),this.onChange=e=>{},this.onTouched=()=>{},this.dateTime.valueChanges.pipe(he(this.destroyRef)).subscribe(e=>{this.onChange(e)}),this.time.valueChanges.pipe(he(this.destroyRef)).subscribe(e=>{let o=Ce(this.mask.value.substring(0,10),"MM/dd/yyyy",new Date);H(e)&&le(o)&&this.dateTime.setValue(ge(o,e,this.timePrecision==="s"))})}ngOnInit(){this.mask||(this.mask=this.buildDateTimeMask())}onPopoverToggle(e){e.detail.newState==="closed"&&(!document.activeElement||document.activeElement===document.body)&&this.dateTimeInputElementRef().nativeElement.focus()}onDateSelected(e){let o=e.detail.date;H(this.time.value)&&(o=ge(o,this.time.value,this.timePrecision==="s")),this.dateTime.setValue(o)}onKeyDown(e){e.target===this.timeInputElementRef().nativeElement&&(e.preventDefault(),this.calendarElementRef().nativeElement?.shadowRoot?.querySelector(Re.selectors.PREVIOUS_BUTTON)?.focus())}writeValue(e){this.dateTime.setValue(e),this.setTimeValue(e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){e?this.dateTime.disable():this.dateTime.enable()}buildDateTimeMask(){return new Pt({mask:Date,pattern:this.timePrecision==="s"?"MM/`dd/`yyyy `hh:`mm:`ss `a`M":"MM/`dd/`yyyy `hh:`mm `a`M",placeholderChar:" ",blocks:{MM:{mask:k,from:1,to:12,maxLength:2},dd:{mask:k,from:1,to:31,maxLength:2},yyyy:{mask:k,from:1900,to:9999,maxLength:4},hh:{mask:k,from:1,to:12,maxLength:2},mm:{mask:k,from:0,to:59,maxLength:2},ss:{mask:k,from:0,to:59,maxLength:2},a:{mask:xt,enum:["A","P"]}},autofix:!1,lazy:!1,overwrite:!1,format:e=>le(e)?St(e,`MM/dd/yyyy ${this.timeFormat}`).toUpperCase():"",parse:e=>Ce(e.toUpperCase(),`MM/dd/yyyy ${this.timeFormat}`,new Date),prepare(e,o,t){return e.toUpperCase()}})}setTimeValue(e){let o=[0,0,0];le(e)&&(this.timePrecision==="s"?o=[e.getHours(),e.getMinutes(),e.getSeconds()]:o=[e.getHours(),e.getMinutes(),0]),this.time.setValue(o.map(t=>t.toString().padStart(2,"0")).join(":"))}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-date-time"]],viewQuery:function(o,t){o&1&&(K(t.dateTimeInputElementRef,Lt,5),K(t.timeInputElementRef,Ut,5),K(t.calendarElementRef,qt,5)),o&2&&we(3)},hostBindings:function(o,t){o&1&&d("focusout",function(I){return t.componentFocusout(I)})},inputs:{label:"label",timePrecision:"timePrecision",disabled:"disabled"},features:[W([{provide:Y,useExisting:j(()=>r),multi:!0}])],decls:17,vars:12,consts:[["dateTimeInput",""],["calendar",""],["timeInput",""],["type","text",3,"id","formControl","imask","unmask"],["slot","label"],["slot","end","tabindex","-1","aria-label","Open calendar","density","medium",3,"id","disabled"],["name","insert_invitation"],["placement","bottom-end","animationType","none",3,"forge-popover-toggle","anchor"],[1,"calendar-popover",3,"keydown.tab"],["prevent-focus","true",3,"forge-calendar-date-select","id"],[3,"formControl"],["type","text","placeholder","hh:mm:ss aa","autofocus","",3,"id"]],template:function(o,t){if(o&1){let f=F();i(0,"forge-text-field"),m(1,"input",3,0),y(3,zt,2,2,"label",4),i(4,"forge-icon-button",5),m(5,"forge-icon",6),n(),i(6,"forge-popover",7),d("forge-popover-toggle",function(U){return g(f),h(t.onPopoverToggle(U))}),i(7,"div",8),d("keydown.tab",function(U){return g(f),h(t.onKeyDown(U))}),i(8,"forge-calendar",9,1),d("forge-calendar-date-select",function(U){return g(f),h(t.onDateSelected(U))}),n(),m(10,"forge-divider"),i(11,"forge-time-picker",10)(12,"forge-text-field"),m(13,"input",11,2),i(15,"label",4),a(16,"Time"),n()()()()()()}o&2&&(l(),s("id",t.id)("formControl",t.dateTime)("imask",t.mask)("unmask","typed"),l(2),M(t.label!=null&&t.label.length?3:-1),l(),s("id","popover-toggle-"+t.id)("disabled",t.dateTime.disabled),l(2),s("anchor","popover-toggle-"+t.id),l(2),s("id","calendar-"+t.id),l(3),s("formControl",t.time),l(2),s("id","time-"+t.id),l(2),me("for","time-"+t.id))},dependencies:[b,P,S,E,Ae,Tt,Ue,Le,te,ee,V,oe,A,x,Ye,Ze,L,B,vt,Ct,ht],styles:[`[_nghost-%COMP%]{display:block}.calendar-popover[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:8px;padding:16px}.calendar-popover[_ngcontent-%COMP%]   forge-calendar[_ngcontent-%COMP%]{--forge-calendar-width: 320px}
/*# sourceMappingURL=date-time.component-EE32KDE4.css.map */`]})}}return r})();function Ht(r,v){if(r&1&&(i(0,"forge-radio",24),a(1),n()),r&2){let e=v.$implicit;Te("value",e.value),l(),w(" ",e.label," ")}}function jt(r,v){if(r&1){let e=F();i(0,"div",29)(1,"forge-select",31)(2,"span",5),a(3,"A friend is required"),n()(),i(4,"forge-icon-button",32),d("click",function(){let t=g(e).$index,f=C();return h(f.onDeleteFriend(t))}),m(5,"forge-icon",33),n()()}if(r&2){let e=v.$index,o=C();l(),s("options",o.friendOptions)("formControlName",e)("appFormControlInvalid",o.formGroup.controls.friends.controls[e])}}var Rt=(()=>{class r{get formGroup(){return this.cache.formGroup.controls.personalFormGroup}get friendsFormArray(){return this.formGroup.controls.friends}constructor(){this.cache=c(T),this.appDataService=c(re),this.genderOptions=[{label:"",value:null},{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Undecided",value:"U"}],this.friendOptions=[],this.sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}],this.appDataService.getPeople().subscribe(e=>{this.friendOptions=e.data.map(o=>({label:`${o.firstName} ${o.lastName}`,value:o.id}))})}onAddFriend(){this.friendsFormArray.push(new p(null,{validators:[u.required]}))}onDeleteFriend(e){this.friendsFormArray.removeAt(e)}static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275cmp=_({type:r,selectors:[["app-profile-personal"]],hostAttrs:["role","tabpanel","id","app--profile--personal"],decls:60,vars:8,consts:[[3,"formGroup"],[1,"form-grid"],["required","",3,"appFormControlInvalid"],["type","text","id","profile--personal--first-name","formControlName","firstName","appAutoFocus","",3,"appInputCasing"],["for","profile--personal--first-name","slot","label"],["slot","support-text",1,"app--form-control-invalid"],["type","text","id","profile--personal--last-name","formControlName","lastName"],["for","profile--personal--last-name","slot","label"],["label","Gender","formControlName","gender",3,"options"],["type","text","id","profile--personal--email","formControlName","email"],["for","profile--personal--email","slot","label"],["type","text","id","profile--personal--phone","formControlName","phone"],["for","profile--personal--phone","slot","label"],["formControlName","dateOfBirth"],["type","text","id","profile--personal--dob"],["for","profile--personal--dob"],[1,"form-grid__comment","form-grid--col-span"],["type","text","id","profile--personal--comment","formControlName","comment","rows","4"],["for","profile--personal--comment"],[2,"--forge-label-value-align","stretch"],["slot","label"],["slot","value"],["min","0","max","10","formControlName","rank"],["slot","value","aria-label","Choose a size option","name","profile--personal--size"],["name","profile--personal--size","formControlName","size",3,"value"],["formControlName","citizen"],["label","Entry date","formControlName","entryDate"],[1,"friends"],["formArrayName","friends"],[1,"friend"],["variant","raised",3,"click"],["label","Friend",3,"options","formControlName","appFormControlInvalid"],["aria-label","Delete",3,"click"],["name","delete"]],template:function(o,t){o&1&&(q(0,0),i(1,"div",1)(2,"forge-text-field",2),m(3,"input",3),i(4,"label",4),a(5,"First name"),n(),i(6,"span",5),a(7,"First name is required"),n()(),i(8,"forge-text-field",2),m(9,"input",6),i(10,"label",7),a(11,"Last name"),n(),i(12,"span",5),a(13,"Last name is required"),n()(),m(14,"forge-select",8),i(15,"forge-text-field",2),m(16,"input",9),i(17,"label",10),a(18,"Email"),n(),i(19,"span",5),a(20,"Email is required"),n()(),i(21,"forge-text-field",2),m(22,"input",11),i(23,"label",12),a(24,"Phone"),n(),i(25,"span",5),a(26,"Phone number is required"),n()(),i(27,"forge-date-picker",13)(28,"forge-text-field"),m(29,"input",14),i(30,"label",15),a(31,"Date of birth"),n()()(),i(32,"forge-text-field",16),m(33,"textarea",17),i(34,"label",18),a(35,"Comment"),n()(),i(36,"forge-label-value",19)(37,"span",20),a(38),n(),i(39,"div",21),m(40,"forge-slider",22),n()(),i(41,"forge-label-value")(42,"span",20),a(43,"Size"),n(),i(44,"forge-radio-group",23),de(45,Ht,2,2,"forge-radio",24,pe),n()(),i(47,"forge-label-value")(48,"span",20),a(49,"Citizen"),n(),i(50,"div",21),m(51,"forge-switch",25),n()(),m(52,"app-date-time",26),n(),m(53,"forge-divider"),i(54,"div",27),q(55,28),de(56,jt,6,3,"div",29,pe),i(58,"forge-button",30),d("click",function(){return t.onAddFriend()}),a(59," Add friend"),n(),z(),n(),z()),o&2&&(s("formGroup",t.formGroup),l(2),s("appFormControlInvalid",t.formGroup.controls.firstName),l(),s("appInputCasing","upper"),l(5),s("appFormControlInvalid",t.formGroup.controls.lastName),l(6),s("options",t.genderOptions),l(),s("appFormControlInvalid",t.formGroup.controls.email),l(6),s("appFormControlInvalid",t.formGroup.controls.phone),l(17),w("Rank ",t.formGroup.value.rank,""),l(7),ce(t.sizeOptions),l(11),ce(t.formGroup.controls.friends.controls))},dependencies:[b,P,S,E,O,G,X,Ve,N,R,He,ze,qe,te,ee,V,oe,A,x,We,Ke,ot,tt,Xe,et,Je,nt,rt,it,st,lt,at,dt,pt,mt,L,B,ne,Ot,Gt,ae],styles:[`[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--forge-theme-text-medium);font-style:italic}.form-grid__comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none}forge-divider[_ngcontent-%COMP%]{margin:16px 0}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-end;padding-bottom:16px}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   forge-select[_ngcontent-%COMP%]{min-width:320px}






/*# sourceMappingURL=personal.component-2TWZN2NI.css.map */`]})}}return r})();var ci=[{path:"",component:It,canDeactivate:[r=>r.canDeactivate()],providers:[T],children:[{path:"address",component:Et},{path:"personal",component:Rt},{path:"",redirectTo:"personal",pathMatch:"full"}]}];export{ci as PROFILE_ROUTES};
//# sourceMappingURL=chunk-NRTPOQCV.js.map
