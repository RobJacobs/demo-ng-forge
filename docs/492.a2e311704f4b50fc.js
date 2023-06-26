"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[492],{4635:(x,S,p)=>{p.d(S,{U:()=>s});var _=p(2235),y=p(9736),e=p(4135),u=p(5162),o=p(1699),D=p(4860);let s=(()=>{class c{constructor(l){this.httpClient=l}getProfile(){return this.httpClient.get("mock-data/profile.json")}getPeople(l){return this.httpClient.get("mock-data/people.json").pipe((0,y.U)(d=>{let m=d.length;return l&&(l.filters?.length&&(m=(d=u.c.filterData(d,l.filters.map(M=>({key:M.property,value:M.value,strict:"gender"===M.property||"id"===M.property})))).length),l.sort&&(d=u.c.sortData(d,l.sort.property,"string",l.sort.direction)),(0,e.hj)(l.skip)&&(0,e.hj)(l.take)&&(d=d.slice(l.skip,l.skip+l.take))),{count:m,data:d}}))}getPerson(l){return this.httpClient.get("mock-data/people.json").pipe((0,y.U)(d=>d.find(m=>m.id.toString()===l.toString())))}getSearches(l){return new _.y(d=>{let m=localStorage.getItem(l);(0,e.$K)(m)&&(m=JSON.parse(m)),d.next(m),d.complete()})}saveSearches(l,d){return new _.y(m=>{localStorage.setItem(l,JSON.stringify(d)),m.next(!0),m.complete()})}getLongRequest(){return this.httpClient.get("http://localhost:5000/long-request")}}return c.\u0275fac=function(l){return new(l||c)(o.LFG(D.eN))},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},9492:(x,S,p)=>{p.r(S),p.d(S,{ProfileModule:()=>ze});var _=p(6575),y=p(5387),e=p(1699),u=p(4135),o=p(2024);p(4980);let L=(()=>{class r{canDeactivate(t,i,a,v){return t.canDeactivate?t.canDeactivate({currentRoute:i,currentState:a,nextState:v}):(console.warn("Component does not implement the TylCanDeactivate interface. Route navigation will proceed."),!0)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var pe=p(9189),fe=p(2235),ve=p(5162),me=p(8305),h=p(6538);function he(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",6)(1,"forge-button",7)(2,"button",8),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onClose())}),e._uU(3,"Cancel"),e.qZA()(),e.TgZ(4,"forge-button",9)(5,"button",10),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onClose(!0))}),e._uU(6,"Ok"),e.qZA()()()}}let ge=(()=>{class r{constructor(t,i){this.dialogConfig=t,this.dialogRef=i,this.title=t.data.title,this.message=t.data.message,this.showFooter=!(0,u.$K)(t.data.showFooter)||t.data.showFooter}onClose(t=!1){this.dialogRef.close(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(h.ibs),e.Y36(h.zjC))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-confirm-dialog"]],standalone:!0,features:[e.jDz],decls:9,vars:3,consts:[[1,"dialog__header"],[1,"forge-typography--headline5"],["type","button","aria-label","close",3,"click"],["name","close"],[1,"dialog__body"],["class","dialog__footer",4,"ngIf"],[1,"dialog__footer"],["type","outlined"],["type","button",3,"click"],["type","raised"],["appAutoFocus","","type","button",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2),e.qZA(),e.TgZ(3,"forge-icon-button")(4,"button",2),e.NdJ("click",function(){return i.onClose()}),e._UZ(5,"forge-icon",3),e.qZA()()(),e.TgZ(6,"div",4),e._uU(7),e.qZA(),e.YNc(8,he,7,0,"div",5)),2&t&&(e.xp6(2),e.Oqu(i.title),e.xp6(5),e.hij(" ",i.message,"\n"),e.xp6(1),e.Q6J("ngIf",i.showFooter))},dependencies:[_.ez,_.O5,me.h],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:flex;flex-direction:column;overflow:hidden}.dialog__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:8px 8px 8px 16px;border-bottom:1px solid var(--forge-theme-border-color)}.dialog__header[_ngcontent-%COMP%]   .forge-typography--headline5[_ngcontent-%COMP%]{margin-right:16px}.dialog__header[_ngcontent-%COMP%]   forge-icon-button[_ngcontent-%COMP%]:first-of-type{margin-left:auto}.dialog__body[_ngcontent-%COMP%]{flex-grow:1;overflow:auto;padding:16px}.dialog__footer[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;column-gap:16px;padding:8px 16px;border-top:1px solid var(--forge-theme-border-color)}[_nghost-%COMP%]{min-width:320px}"]}),r})();var j=p(4635);let _e=(()=>{class r{constructor(t){this.toastService=t}show(t){const i=this.toastService.show({message:`${t}`,actionHandler:()=>i.hide(),placement:"bottom",duration:3e3})}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(h.klp))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),E=(()=>{class r{constructor(){this.formGroup=new o.cw({personalFormGroup:new o.cw({firstName:new o.NI(null,{validators:[o.kI.required]}),lastName:new o.NI(null,{validators:[o.kI.required]}),gender:new o.NI(null),email:new o.NI(null,{validators:[o.kI.required]}),phone:new o.NI(null,{validators:[o.kI.required]}),dateOfBirth:new o.NI(null),comment:new o.NI(null),rank:new o.NI(0),size:new o.NI(null),friends:new o.Oe([])}),addressFormGroup:new o.cw({name:new o.NI(null,{validators:[o.kI.required]}),street:new o.NI(null,{validators:[o.kI.required]}),city:new o.NI(null,{validators:[o.kI.required]}),state:new o.NI(null,{validators:[o.kI.required]}),zip:new o.NI(null,{validators:[o.kI.required]})})})}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var F=p(9923);function ye(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"img",15),e.NdJ("error",function(a){e.CHM(t);const v=e.oxw();return e.KtG(v.onImageError(a))}),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("src",t.imageUrl,e.LSH)}}function De(r,n){1&r&&e._UZ(0,"forge-icon",16)}function be(r,n){1&r&&e._UZ(0,"forge-icon",16)}const Y=function(r,n){return[r,n]};function Se(r,n){1&r&&(e.TgZ(0,"span",15),e._uU(1,"Name is required"),e.qZA())}function Pe(r,n){1&r&&(e.TgZ(0,"span",15),e._uU(1,"Street is required"),e.qZA())}function Oe(r,n){1&r&&(e.TgZ(0,"span",15),e._uU(1,"City is required"),e.qZA())}function Me(r,n){1&r&&(e.TgZ(0,"span",15),e._uU(1,"State is required"),e.qZA())}function Ie(r,n){1&r&&(e.TgZ(0,"span",15),e._uU(1,"Zip code is required"),e.qZA())}const b=function(r,n){return[r,n]};function Ae(r,n){1&r&&(e.TgZ(0,"span",28),e._uU(1,"First name is required"),e.qZA())}function Te(r,n){1&r&&(e.TgZ(0,"span",28),e._uU(1,"Last name is required"),e.qZA())}function xe(r,n){1&r&&(e.TgZ(0,"span",28),e._uU(1,"Email is required"),e.qZA())}function Fe(r,n){1&r&&(e.TgZ(0,"span",28),e._uU(1,"Phone number is required"),e.qZA())}function we(r,n){if(1&r&&(e.TgZ(0,"forge-radio"),e._UZ(1,"input",29),e.TgZ(2,"label",30),e._uU(3),e.qZA()()),2&r){const t=n.$implicit,i=n.index;e.xp6(1),e.MGl("id","personal-form--size-",i,""),e.s9C("value",t.value),e.xp6(1),e.MGl("for","personal-form--size-",i,""),e.xp6(1),e.Oqu(t.label)}}function Ze(r,n){1&r&&(e.TgZ(0,"span",28),e._uU(1,"A friend is required"),e.qZA())}const C=function(r,n){return[r,n]};function Ve(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",31)(1,"forge-select",32),e.ALo(2,"appFormControlInvalid"),e.YNc(3,Ze,2,0,"span",5),e.ALo(4,"appFormControlInvalid"),e.qZA(),e.TgZ(5,"forge-icon-button")(6,"button",33),e.NdJ("click",function(){const v=e.CHM(t).index,g=e.oxw();return e.KtG(g.onDeleteFriend(v))}),e._UZ(7,"forge-icon",34),e.qZA()()()}if(2&r){const t=n.$implicit,i=n.index,a=e.oxw();e.xp6(1),e.Q6J("options",a.friendOptions)("formControlName",i)("invalid",e.lcZ(2,4,e.WLB(8,C,t.invalid,t.touched))),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,6,e.WLB(11,C,t.invalid,t.touched)))}}const Le=[{path:"",component:(()=>{class r{get personalFormGroup(){return this.cache.formGroup.get("personalFormGroup")}get addressFormGroup(){return this.cache.formGroup.get("addressFormGroup")}constructor(t,i,a,v,g){this.router=t,this.appDataService=i,this.dialogService=a,this.appToastService=v,this.cache=g,this.noImageUrl="mock-data/no-image.png",this.activeTab=0,this.cache.profile&&this.loadForm(this.cache.profile)}canDeactivate(t){return!this.cache.formGroup.dirty||new fe.y(i=>{const v=this.dialogService.show(ge,{backdropClose:!1,escapeClose:!1},{data:{title:"Unsaved changes",message:"You have unsaved changes which will be lost, do you want to continue?"}}).afterClosed.subscribe(g=>{v.unsubscribe(),g&&this.cache.formGroup.reset(),i.next(g)})})}onLoadProfile(){this.appDataService.getProfile().subscribe(t=>{this.cache.formGroup.reset(),this.cache.profile=t,this.loadForm(this.cache.profile)})}onTabSelected(t){switch(this.activeTab){case 0:this.personalFormGroup.markAsTouched();break;case 1:this.addressFormGroup.markAsTouched()}switch(t){case"personal":this.activeTab=0;break;case"address":this.activeTab=1}this.router.navigate([`profile/${t}`])}onSave(){this.cache.formGroup.invalid||(this.cache.profile=this.parseForm(this.cache.profile?.id),this.cache.formGroup.markAsPristine(),this.appToastService.show("Profile saved."))}onCancel(){this.cache.formGroup.reset(),this.imageUrl=void 0,this.cache.profile=void 0}onImageError(t){const i=t.target;i.src.includes(this.noImageUrl)||(i.src=this.noImageUrl,i.onerror=null)}loadForm(t){this.imageUrl=`mock-data/${ve.c.formatNumber(this.cache.profile?.id,"2.0-0")}-small.png`,this.personalFormGroup.get("friends")?.clear(),this.personalFormGroup.patchValue(t),this.addressFormGroup.patchValue(t.address)}parseForm(t){return{id:t||-1,firstName:this.personalFormGroup.value.firstName,lastName:this.personalFormGroup.value.lastName,gender:this.personalFormGroup.value.gender,email:this.personalFormGroup.value.email,phone:this.personalFormGroup.value.phone,dateOfBirth:this.personalFormGroup.value.dateOfBirth,address:this.addressFormGroup.value}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(y.F0),e.Y36(j.U),e.Y36(h.xAy),e.Y36(_e),e.Y36(E))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:32,vars:19,consts:[[1,"header"],["slot","start"],[1,"forge-typography--title"],["alt","",3,"src","error",4,"ngIf"],["slot","end"],["type","outlined"],["type","button",3,"click"],[3,"activeTab"],[3,"forge-tab-interacted"],["slot","trailing","name","error",4,"ngIf"],[1,"body"],["novalidate","","autocomplete","off",3,"formGroup"],["inverted","",1,"footer"],["type","raised"],["type","button",3,"disabled","click"],["alt","",3,"src","error"],["slot","trailing","name","error"]],template:function(t,i){1&t&&(e.TgZ(0,"forge-toolbar",0)(1,"div",1)(2,"h2",2),e._uU(3,"Profile"),e.qZA(),e.YNc(4,ye,1,1,"img",3),e.qZA(),e.TgZ(5,"div",4)(6,"forge-button",5)(7,"button",6),e.NdJ("click",function(){return i.onLoadProfile()}),e._uU(8,"Load profile"),e.qZA()()()(),e.TgZ(9,"forge-tab-bar",7)(10,"forge-tab",8),e.NdJ("forge-tab-interacted",function(){return i.onTabSelected("personal")}),e._uU(11," Personal "),e.YNc(12,De,1,0,"forge-icon",9),e.ALo(13,"appFormControlInvalid"),e.qZA(),e.TgZ(14,"forge-tab",8),e.NdJ("forge-tab-interacted",function(){return i.onTabSelected("address")}),e._uU(15," Address "),e.YNc(16,be,1,0,"forge-icon",9),e.ALo(17,"appFormControlInvalid"),e.qZA()(),e.TgZ(18,"div",10)(19,"form",11),e._UZ(20,"router-outlet"),e.TgZ(21,"p"),e._uU(22),e.ALo(23,"json"),e.qZA()()(),e.TgZ(24,"forge-toolbar",12)(25,"div",4)(26,"forge-button",5)(27,"button",6),e.NdJ("click",function(){return i.onCancel()}),e._uU(28,"Cancel"),e.qZA()(),e.TgZ(29,"forge-button",13)(30,"button",14),e.NdJ("click",function(){return i.onSave()}),e._uU(31,"Save"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",i.imageUrl),e.xp6(5),e.Q6J("activeTab",i.activeTab),e.xp6(3),e.Q6J("ngIf",e.lcZ(13,7,e.WLB(13,Y,i.personalFormGroup.invalid,i.personalFormGroup.touched))),e.xp6(4),e.Q6J("ngIf",e.lcZ(17,9,e.WLB(16,Y,i.addressFormGroup.invalid,i.addressFormGroup.touched))),e.xp6(3),e.Q6J("formGroup",i.cache.formGroup),e.xp6(3),e.hij(" ",e.lcZ(23,11,i.cache.formGroup.value)," "),e.xp6(8),e.Q6J("disabled",i.cache.formGroup.invalid||!i.cache.formGroup.dirty))},dependencies:[_.O5,y.lC,o._Y,o.JL,o.sg,h.r0F,h.oJW,h.idV,h.pub,h.nVy,_.Ts,F.$],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto auto 1fr auto;overflow:hidden;background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff)}.header[_ngcontent-%COMP%]{--forge-toolbar-border-bottom: none}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.header[_ngcontent-%COMP%]   [slot=end][_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   [slot=start][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin:0 16px}forge-tab-bar[_ngcontent-%COMP%]{display:inline-flex;border-bottom:1px solid var(--forge-theme-border-color)}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]{min-width:240px}forge-tab-bar[_ngcontent-%COMP%]   forge-tab[_ngcontent-%COMP%]   forge-icon[_ngcontent-%COMP%]{color:#b00020}.body[_ngcontent-%COMP%]{padding:24px;overflow:auto}.footer[_ngcontent-%COMP%]   [slot=end] forge-button[_ngcontent-%COMP%]{margin-left:16px}"]}),r})(),canDeactivate:[L],children:[{path:"address",component:(()=>{class r{get formGroup(){return this.cache.formGroup.get("addressFormGroup")}constructor(t){this.cache=t}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(E))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile-address"]],decls:37,vars:61,consts:[[1,"form-grid",3,"formGroup"],["required","",1,"form-grid--row-break",3,"invalid"],["type","text","id","address-form--name","formControlName","name"],["for","address-form--name","slot","label"],["slot","helper-text",4,"ngIf"],["type","text","id","address-form--street","formControlName","street"],["for","address-form--street","slot","label"],["required","",3,"invalid"],["type","text","id","address-form--city","formControlName","city"],["for","address-form--city","slot","label"],[1,"form-grid__state-zip"],["type","text","id","address-form--state","formControlName","state"],["for","address-form--state","slot","label"],["type","text","id","address-form--zip","formControlName","zip"],["for","address-form--zip","slot","label"],["slot","helper-text"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"forge-text-field",1),e.ALo(2,"appFormControlInvalid"),e._UZ(3,"input",2),e.TgZ(4,"label",3),e._uU(5,"Name"),e.qZA(),e.YNc(6,Se,2,0,"span",4),e.ALo(7,"appFormControlInvalid"),e.qZA(),e.TgZ(8,"forge-text-field",1),e.ALo(9,"appFormControlInvalid"),e._UZ(10,"input",5),e.TgZ(11,"label",6),e._uU(12,"Street"),e.qZA(),e.YNc(13,Pe,2,0,"span",4),e.ALo(14,"appFormControlInvalid"),e.qZA(),e.TgZ(15,"forge-text-field",7),e.ALo(16,"appFormControlInvalid"),e._UZ(17,"input",8),e.TgZ(18,"label",9),e._uU(19,"City"),e.qZA(),e.YNc(20,Oe,2,0,"span",4),e.ALo(21,"appFormControlInvalid"),e.qZA(),e.TgZ(22,"div",10)(23,"forge-text-field",7),e.ALo(24,"appFormControlInvalid"),e._UZ(25,"input",11),e.TgZ(26,"label",12),e._uU(27,"State"),e.qZA(),e.YNc(28,Me,2,0,"span",4),e.ALo(29,"appFormControlInvalid"),e.qZA(),e.TgZ(30,"forge-text-field",7),e.ALo(31,"appFormControlInvalid"),e._UZ(32,"input",13),e.TgZ(33,"label",14),e._uU(34,"Zip code"),e.qZA(),e.YNc(35,Ie,2,0,"span",4),e.ALo(36,"appFormControlInvalid"),e.qZA()()()),2&t&&(e.Q6J("formGroup",i.formGroup),e.xp6(1),e.Q6J("invalid",e.lcZ(2,11,e.WLB(31,b,i.formGroup.get("name").invalid,i.formGroup.get("name").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(7,13,e.WLB(34,b,i.formGroup.get("name").invalid,i.formGroup.get("name").touched))),e.xp6(2),e.Q6J("invalid",e.lcZ(9,15,e.WLB(37,b,i.formGroup.get("street").invalid,i.formGroup.get("street").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(14,17,e.WLB(40,b,i.formGroup.get("street").invalid,i.formGroup.get("street").touched))),e.xp6(2),e.Q6J("invalid",e.lcZ(16,19,e.WLB(43,b,i.formGroup.get("city").invalid,i.formGroup.get("city").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(21,21,e.WLB(46,b,i.formGroup.get("city").invalid,i.formGroup.get("city").touched))),e.xp6(3),e.Q6J("invalid",e.lcZ(24,23,e.WLB(49,b,i.formGroup.get("state").invalid,i.formGroup.get("state").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(29,25,e.WLB(52,b,i.formGroup.get("state").invalid,i.formGroup.get("state").touched))),e.xp6(2),e.Q6J("invalid",e.lcZ(31,27,e.WLB(55,b,i.formGroup.get("zip").invalid,i.formGroup.get("zip").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(36,29,e.WLB(58,b,i.formGroup.get("zip").invalid,i.formGroup.get("zip").touched))))},dependencies:[_.O5,o.Fj,o.JJ,o.JL,o.sg,o.u,h.afy,F.$],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.form-grid__name[_ngcontent-%COMP%], .form-grid__street[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid__state-zip[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 2fr;column-gap:16px}']}),r})()},{path:"personal",component:(()=>{class r{get formGroup(){return this.cache.formGroup.get("personalFormGroup")}get friendsFormArray(){return this.formGroup.get("friends")}constructor(t,i){this.cache=t,this.appDataService=i,this.genderOptions=[{label:"",value:null},{label:"Male",value:"M"},{label:"Female",value:"F"},{label:"Undecided",value:"U"}],this.friendOptions=[],this.sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"}],this.appDataService.getPeople().subscribe(a=>{this.friendOptions=a.data.map(v=>({label:`${v.firstName} ${v.lastName}`,value:v.id}))})}onAddFriend(){this.friendsFormArray.push(new o.NI(null,{validators:[o.kI.required]}))}onDeleteFriend(t){this.friendsFormArray.removeAt(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(E),e.Y36(j.U))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile-personal"]],decls:54,vars:53,consts:[[3,"formGroup"],[1,"form-grid"],["required","",3,"invalid"],["type","text","id","personal-form--first-name","formControlName","firstName"],["for","personal-form--first-name","slot","label"],["slot","helper-text",4,"ngIf"],["type","text","id","personal-form--first-name","formControlName","lastName"],["for","personal-form--last-name","slot","label"],["label","Gender","formControlName","gender",3,"options"],["type","text","id","personal-form--email","formControlName","email"],["for","personal-form--email","slot","label"],["type","text","id","personal-form--phone","formControlName","phone"],["for","personal-form--phone","slot","label"],["type","text","id","personal-form--dob","formControlName","dateOfBirth"],["for","personal-form--dob"],[1,"form-grid__comment","form-grid--col-span"],["type","text","id","personal-form--comment","formControlName","comment","rows","4"],["for","personal-form--comment"],["slot","label"],["slot","value",2,"margin","0 -8px"],["type","discrete","min","0","max","10","formControlName","rank"],["role","radiogroup","aria-label","Choose size option"],[4,"ngFor","ngForOf"],[1,"friends"],["formArrayName","friends"],["class","friend",4,"ngFor","ngForOf"],["type","raised"],["type","button",3,"click"],["slot","helper-text"],["type","radio","formControlName","size",3,"id","value"],[3,"for"],[1,"friend"],["label","Friend",3,"options","formControlName","invalid"],["type","button","aria-label","delete",3,"click"],["name","delete"]],template:function(t,i){if(1&t&&(e.ynx(0,0),e.TgZ(1,"div",1)(2,"forge-text-field",2),e.ALo(3,"appFormControlInvalid"),e._UZ(4,"input",3),e.TgZ(5,"label",4),e._uU(6,"First Name"),e.qZA(),e.YNc(7,Ae,2,0,"span",5),e.ALo(8,"appFormControlInvalid"),e.qZA(),e.TgZ(9,"forge-text-field",2),e.ALo(10,"appFormControlInvalid"),e._UZ(11,"input",6),e.TgZ(12,"label",7),e._uU(13,"Last Name"),e.qZA(),e.YNc(14,Te,2,0,"span",5),e.ALo(15,"appFormControlInvalid"),e.qZA(),e._UZ(16,"forge-select",8),e.TgZ(17,"forge-text-field",2),e.ALo(18,"appFormControlInvalid"),e._UZ(19,"input",9),e.TgZ(20,"label",10),e._uU(21,"Email"),e.qZA(),e.YNc(22,xe,2,0,"span",5),e.ALo(23,"appFormControlInvalid"),e.qZA(),e.TgZ(24,"forge-text-field",2),e.ALo(25,"appFormControlInvalid"),e._UZ(26,"input",11),e.TgZ(27,"label",12),e._uU(28,"Phone"),e.qZA(),e.YNc(29,Fe,2,0,"span",5),e.ALo(30,"appFormControlInvalid"),e.qZA(),e.TgZ(31,"forge-date-picker")(32,"forge-text-field"),e._UZ(33,"input",13),e.TgZ(34,"label",14),e._uU(35,"Date of birth"),e.qZA()()(),e.TgZ(36,"forge-text-field",15),e._UZ(37,"textarea",16),e.TgZ(38,"label",17),e._uU(39,"Comment"),e.qZA()(),e.TgZ(40,"forge-label-value")(41,"span",18),e._uU(42),e.qZA(),e.TgZ(43,"div",19),e._UZ(44,"forge-slider",20),e.qZA()(),e.TgZ(45,"div",21),e.YNc(46,we,4,4,"forge-radio",22),e.qZA()(),e._UZ(47,"forge-divider"),e.TgZ(48,"div",23),e.ynx(49,24),e.YNc(50,Ve,8,14,"div",25),e.TgZ(51,"forge-button",26)(52,"button",27),e.NdJ("click",function(){return i.onAddFriend()}),e._uU(53,"Add friend"),e.qZA()(),e.BQk(),e.qZA(),e.BQk()),2&t){let a;e.Q6J("formGroup",i.formGroup),e.xp6(2),e.Q6J("invalid",e.lcZ(3,13,e.WLB(29,C,i.formGroup.get("firstName").invalid,i.formGroup.get("firstName").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(8,15,e.WLB(32,C,i.formGroup.get("firstName").invalid,i.formGroup.get("firstName").touched))),e.xp6(2),e.Q6J("invalid",e.lcZ(10,17,e.WLB(35,C,i.formGroup.get("lastName").invalid,i.formGroup.get("lastName").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(15,19,e.WLB(38,C,i.formGroup.get("lastName").invalid,i.formGroup.get("lastName").touched))),e.xp6(2),e.Q6J("options",i.genderOptions),e.xp6(1),e.Q6J("invalid",e.lcZ(18,21,e.WLB(41,C,i.formGroup.get("email").invalid,i.formGroup.get("email").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(23,23,e.WLB(44,C,i.formGroup.get("email").invalid,i.formGroup.get("email").touched))),e.xp6(2),e.Q6J("invalid",e.lcZ(25,25,e.WLB(47,C,i.formGroup.get("phone").invalid,i.formGroup.get("phone").touched))),e.xp6(5),e.Q6J("ngIf",e.lcZ(30,27,e.WLB(50,C,i.formGroup.get("phone").invalid,i.formGroup.get("phone").touched))),e.xp6(13),e.hij("Rank ",null==i.formGroup?null:i.formGroup.value.rank,""),e.xp6(4),e.Q6J("ngForOf",i.sizeOptions),e.xp6(4),e.Q6J("ngForOf",null==(a=i.formGroup.get("friends"))?null:a.controls)}},dependencies:[_.sg,_.O5,o.Fj,o._,o.JJ,o.JL,o.sg,o.u,o.CE,h.r0F,h.Lr3,h.Xo5,h.oJW,h.r2H,h.tTc,h.UKb,h.QIx,h.Hr0,h.PKP,h.Pi8,h.afy,F.$],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:block}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}.form-grid__comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none}forge-divider[_ngcontent-%COMP%]{margin:16px 0}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;padding-bottom:16px}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   forge-select[_ngcontent-%COMP%]{min-width:320px}.friends[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   forge-icon-button[_ngcontent-%COMP%]{margin-top:4px}']}),r})()},{path:"",redirectTo:"personal",pathMatch:"full"}]}];let ze=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[E,L],imports:[_.ez,y.Bz.forChild(Le),pe.F,y.Bz]}),r})()},9189:(x,S,p)=>{p.d(S,{F:()=>o});var _=p(6575),y=p(2024),e=p(6538),u=p(1699);let o=(()=>{class D{}return D.\u0275fac=function(c){return new(c||D)},D.\u0275mod=u.oAB({type:D}),D.\u0275inj=u.cJS({imports:[_.ez,y.u5,y.UX,e.xXH]}),D})()},5162:(x,S,p)=>{p.d(S,{c:()=>o});var _=p(6575),y=p(4860),e=p(6907),u=p(4135);class o{static sortData(s,c,f,l){return s&&s.length?(f=f||"string","DESC"!==l&&(l="ASC"),s.slice().sort((d,m)=>(d=(0,e.SX)(d,c),m=(0,e.SX)(m,c),"DESC"===l?this.comparator(m,d,f):this.comparator(d,m,f)))):s}static groupData(s,c){return(0,u.kJ)(s)&&s.length&&c?.length?s.reduce((f,l)=>{const d=l[c];return f[d]||(f[d]=[]),f[d].push(l),f},{}):s}static filterData(s,c){if(!((0,u.kJ)(s)&&s.length&&(0,u.kJ)(c)&&c.length))return s;c=c.map(l=>{if((0,u.HD)(l.value)&&l.value.length){let d;if("<>"===l.value.substring(0,2)){if(2===l.value.length)return l.value="",l;d=l.value.substring(0,2),l.value=l.value.substring(2)}else if("<"===l.value.substring(0,1)||">"===l.value.substring(0,1)){if(1===l.value.length)return l.value="",l;d=l.value.substring(0,1),l.value=l.value.substring(1)}d&&Object.defineProperty(l,"operator",{value:d})}return l.value=(""+l.value).toLowerCase(),l});const f=l=>c.every(d=>{if(!d.value.length)return!0;const m=(""+(0,e.SX)(l,d.key)).toLowerCase();if(!m.length)return!1;if(d.strict)return m===d.value;switch(d.operator){case"<>":return 0!==this.comparator(m,d.value,d.type);case">":return this.comparator(m,d.value,d.type)>0;case"<":return this.comparator(m,d.value,d.type)<0;default:return m.indexOf(d.value)>-1}});return s.filter(l=>f(l))}static comparator(s,c,f="string"){if(s==c)return 0;if(!(0,u.$K)(s))return-1;if(!(0,u.$K)(c))return 1;switch(f){case"boolean":return s?-1:1;case"date":if(s=new Date(s).getTime(),isNaN(s))return-1;if(c=new Date(c).getTime(),isNaN(c))return 1;break;case"number":if(s=parseFloat(s),isNaN(s))return-1;if(c=parseFloat(c),isNaN(c))return 1;break;default:return isNaN(parseFloat(s))||isNaN(parseFloat(c))?(""+s).localeCompare(""+c):(""+s).localeCompare(""+c,navigator.language,{numeric:!0})}return s<c?-1:s>c?1:0}static navigateBack(s,c,f){1===s.getState()?.navigationId?c.navigate(f):s.back()}static elementId(s){return s+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(s,c="MM/dd/yyyy"){return(0,u.$K)(s)?(0,_.p6)(s,c,navigator.language):""}static formatNumber(s,c="1.2-2"){return(0,_.uf)(s,navigator.language,c)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){const s={};if(window.location.search.length){const c=new y.LE({fromString:window.location.search.substring(1)});c.keys().forEach(f=>{const l=c.getAll(f);l.length&&Object.defineProperty(s,f.toLowerCase(),{value:1===l.length?l[0]:l,enumerable:!0,writable:!0})})}return s}static reduceObject(s){const c={};return Object.keys(s).forEach(f=>{(0,u.$K)(s[f])&&((0,u.kJ)(s[f])?s[f].length&&(c[f]=s[f]):(s[f]+"").trim().length&&(c[f]="string"==typeof s[f]?s[f].trim():s[f]))}),c}}}}]);
//# sourceMappingURL=492.a2e311704f4b50fc.js.map