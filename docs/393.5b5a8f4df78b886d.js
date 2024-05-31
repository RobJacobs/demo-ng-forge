"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[393],{3393:(Y,b,c)=>{c.r(b),c.d(b,{EXAMPLES_ROUTES:()=>$});var C=c(3942),_=c(123),e=c(8559);let h=(()=>{class n{constructor(){this.mockData=[];for(let o=0;o<300;o++)this.mockData.push({id:o,code:_.A.formatNumber(o,"3.0"),description:`Item ${_.A.formatNumber(o,"3.0")}`})}getSingleSelectOptions(o,i,t=100){return new C.c(r=>{setTimeout(()=>{let l=[];l=o?.length?this.mockData.filter(p=>p.description.toLocaleLowerCase().includes(o.toLocaleLowerCase())).slice(0,t):i?this.mockData.filter(p=>p.id.toString()===i.toString()):this.mockData.slice(0,t),r.next(l),r.complete()},1e3)})}getMutlipleSelectOptions(o,i,t=100){return new C.c(r=>{setTimeout(()=>{let l=[];l=o?.length?this.mockData.filter(p=>p.description.toLocaleLowerCase().includes(o.toLocaleLowerCase())).slice(0,t):i?.length?[...new Set([...this.mockData.filter(p=>i.map(N=>N.toString()).includes(p.id.toString())),...this.mockData.slice(0,t)])]:this.mockData.slice(0,t),r.next(l),r.complete()},1e3)})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac})}return n})();var v=c(8574);let k=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples"]],standalone:!0,features:[e.aNF],decls:1,vars:0,template:function(i,t){1&i&&e.nrm(0,"router-outlet")},dependencies:[v.iI,v.n3],styles:["[_nghost-%COMP%]{display:block}"]})}return n})();var d=c(316),a=c(496),g=c(5342),f=c(271),s=c(9879);let x=(()=>{class n{constructor(){this.moduleService=(0,e.WQX)(h),this.formGroup=new a.gE({autocomplete01:new a.MJ(1),autocomplete02:new a.MJ({value:{id:2,code:"002",description:"Item 002"},label:"Item 002"}),autocomplete03:new a.MJ([3,4,5]),autocomplete04:new a.MJ,autocomplete05:new a.MJ}),this.autocomplete06=6,this.autocomplete07=7,this.optionBuilder=(o,i,t)=>{const r=document.createElement("span");r.setAttribute("slot","title"),r.innerText=o.value.description,t.appendChild(r);const l=document.createElement("span");l.setAttribute("slot","subtitle"),l.innerText=o.value.code,t.appendChild(l)},this.selectedTextBuilder=o=>o[0]?`${o[0].value} - ${o[0]?.label}`:"",this.singleSelectPrimitiveFilter=(o,i)=>(0,g.s)(i?this.moduleService.getSingleSelectOptions(void 0,i).pipe((0,f.T)(t=>t.map(r=>({value:r.id,label:r.description})))):this.moduleService.getSingleSelectOptions(o).pipe((0,f.T)(t=>t.map(r=>({value:r.id,label:r.description}))))),this.singleSelectObjectFilter=(o,i)=>i?[{label:i.label,value:i}]:(0,g.s)(this.moduleService.getSingleSelectOptions(o).pipe((0,f.T)(t=>t.map(r=>({label:r.description,value:r}))))),this.multipleSelectFilter=(o,i)=>i?[]:(0,g.s)(this.moduleService.getMutlipleSelectOptions(o,this.formGroup.value.autocomplete03).pipe((0,f.T)(t=>t.map(r=>({value:r.id,label:r.description})))))}onAutocompleteChange(o){this.autocomplete07=o.detail}onDisable(){const o=this.formGroup.controls.autocomplete01;o?.disabled?o?.enable():o?.disable()}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-autocomplete"]],standalone:!0,features:[e.aNF],decls:56,vars:18,consts:[["novalidate","","autocomplete","off",1,"form-grid",3,"formGroup"],["formControlName","autocomplete01",3,"filter"],["id","autocomplete01","type","text",3,"disabled"],["for","autocomplete01"],["slot","trailing","name","arrow_drop_down",1,"forge-dropdown-icon"],["type","button",3,"click"],["formControlName","autocomplete02",3,"filter"],["id","autocomplete02","type","text"],["for","autocomplete02"],["formControlName","autocomplete03","multiple","",3,"filter"],["id","autocomplete03","type","text"],["for","autocomplete03"],["formControlName","autocomplete04",3,"filter","optionBuilder"],["id","autocomplete04","type","text"],["for","autocomplete04"],["formControlName","autocomplete05",3,"filter","selectedTextBuilder"],["id","autocomplete05","type","text"],["for","autocomplete05"],[1,"form-grid--col-span"],[1,"form-grid"],[3,"ngModelChange","filter","ngModel"],["id","autocomplete06","type","text"],["for","autocomplete06"],["slot","helper-text"],[3,"forge-autocomplete-change","filter","value"],["id","autocomplete07","type","text"],["for","autocomplete07"]],template:function(i,t){1&i&&(e.j41(0,"form",0)(1,"div")(2,"forge-autocomplete",1)(3,"forge-text-field"),e.nrm(4,"input",2),e.j41(5,"label",3),e.EFF(6,"Autocomplete01 - single primitive"),e.k0s(),e.nrm(7,"forge-icon",4),e.k0s()(),e.j41(8,"forge-button")(9,"button",5),e.bIt("click",function(){return t.onDisable()}),e.EFF(10,"Disable"),e.k0s()()(),e.j41(11,"forge-autocomplete",6)(12,"forge-text-field"),e.nrm(13,"input",7),e.j41(14,"label",8),e.EFF(15,"Autocomplete02 - single object"),e.k0s(),e.nrm(16,"forge-icon",4),e.k0s()(),e.j41(17,"forge-autocomplete",9)(18,"forge-text-field"),e.nrm(19,"input",10),e.j41(20,"label",11),e.EFF(21,"Autocomplete03 - multiple select"),e.k0s(),e.nrm(22,"forge-icon",4),e.k0s()(),e.j41(23,"forge-autocomplete",12)(24,"forge-text-field"),e.nrm(25,"input",13),e.j41(26,"label",14),e.EFF(27,"Autocomplete04 - option builder"),e.k0s(),e.nrm(28,"forge-icon",4),e.k0s()(),e.j41(29,"forge-autocomplete",15)(30,"forge-text-field"),e.nrm(31,"input",16),e.j41(32,"label",17),e.EFF(33,"Autocomplete05 - selected text builder"),e.k0s(),e.nrm(34,"forge-icon",4),e.k0s()(),e.j41(35,"p",18),e.EFF(36),e.nI1(37,"json"),e.k0s()(),e.nrm(38,"forge-divider"),e.j41(39,"div",19)(40,"forge-autocomplete",20),e.mxI("ngModelChange",function(l){return e.DH7(t.autocomplete06,l)||(t.autocomplete06=l),l}),e.j41(41,"forge-text-field"),e.nrm(42,"input",21),e.j41(43,"label",22),e.EFF(44,"Autocomplete06 - ngModel binding"),e.k0s(),e.nrm(45,"forge-icon",4),e.j41(46,"span",23),e.EFF(47),e.k0s()()(),e.j41(48,"forge-autocomplete",24),e.bIt("forge-autocomplete-change",function(l){return t.onAutocompleteChange(l)}),e.j41(49,"forge-text-field"),e.nrm(50,"input",25),e.j41(51,"label",26),e.EFF(52,"Autocomplete07 - value binding"),e.k0s(),e.nrm(53,"forge-icon",4),e.j41(54,"span",23),e.EFF(55),e.k0s()()()()),2&i&&(e.Y8G("formGroup",t.formGroup),e.R7$(2),e.Y8G("filter",t.singleSelectPrimitiveFilter),e.R7$(2),e.Y8G("disabled",t.formGroup.controls.autocomplete01.disabled),e.R7$(7),e.Y8G("filter",t.singleSelectObjectFilter),e.R7$(6),e.Y8G("filter",t.multipleSelectFilter),e.R7$(6),e.Y8G("filter",t.singleSelectObjectFilter)("optionBuilder",t.optionBuilder),e.R7$(6),e.Y8G("filter",t.singleSelectPrimitiveFilter)("selectedTextBuilder",t.selectedTextBuilder),e.R7$(7),e.JRh(e.bMT(37,16,t.formGroup.getRawValue())),e.R7$(4),e.Y8G("filter",t.singleSelectPrimitiveFilter),e.R50("ngModel",t.autocomplete06),e.R7$(7),e.SpI("selected value: ",t.autocomplete06,""),e.R7$(),e.Y8G("filter",t.singleSelectPrimitiveFilter)("value",t.autocomplete07),e.R7$(7),e.SpI("selected value: ",t.autocomplete07,""))},dependencies:[d.MD,d.TG,a.YN,a.qT,a.BC,a.cb,a.vS,a.X1,a.j4,a.JD,s.UHk,s.vP6,s.sHR,s.ei2,s.Qpp,s.b$f,s.heP,s.vzf,s.RlV,s.xYY,s.LHr],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:block;margin:24px;padding:16px;background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px;justify-content:center}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}forge-divider[_ngcontent-%COMP%]{margin:16px 0}']})}return n})();var u=c(6571);const M=n=>[n];function F(n,m){if(1&n&&(e.j41(0,"forge-list-item",6)(1,"span",8),e.EFF(2),e.k0s()()),2&n){const o=m.$implicit;e.R7$(2),e.JRh(o)}}function y(n,m){1&n&&e.nrm(0,"forge-list-item",9)}function D(n,m){if(1&n&&(e.j41(0,"forge-list-item",6)(1,"span",8),e.EFF(2),e.k0s()()),2&n){const o=m.$implicit;e.R7$(2),e.JRh(o)}}function O(n,m){1&n&&e.nrm(0,"forge-list-item",9)}let P=(()=>{class n{constructor(){this.items01=["List 1 - item 01","List 1 - item 02","List 1 - item 03","List 1 - item 04"],this.items02=["List 2 - item 01","List 2 - item 02","List 2 - item 03","List 2 - item 04"]}onDrop(o){o.previousContainer===o.container?(0,u.HD)(o.container.data,o.previousIndex,o.currentIndex):(0,u.eg)(o.previousContainer.data,o.container.data,o.previousIndex,o.currentIndex)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-drag-drop"]],standalone:!0,features:[e.aNF],decls:17,vars:8,consts:[["item01List","cdkDropList"],["item02List","cdkDropList"],["cdkDropListGroup","",1,"card-container"],[1,"card"],[1,"title"],["cdkDropList","",3,"cdkDropListDropped","cdkDropListData","cdkDropListConnectedTo"],["cdkDrag",""],["class","cdk-drag-placeholder",4,"cdkDragPlaceholder"],[1,"cdk-drag__content"],[1,"cdk-drag-placeholder"]],template:function(i,t){if(1&i){const r=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4),e.EFF(3,"List 1"),e.k0s(),e.j41(4,"forge-list",5,0),e.bIt("cdkDropListDropped",function(p){return e.eBV(r),e.Njj(t.onDrop(p))}),e.Z7z(6,F,3,1,"forge-list-item",6,e.Vm6),e.DNE(8,y,1,0,"forge-list-item",7),e.k0s()(),e.j41(9,"div",3)(10,"div",4),e.EFF(11,"List 2"),e.k0s(),e.j41(12,"forge-list",5,1),e.bIt("cdkDropListDropped",function(p){return e.eBV(r),e.Njj(t.onDrop(p))}),e.Z7z(14,D,3,1,"forge-list-item",6,e.Vm6),e.DNE(16,O,1,0,"forge-list-item",7),e.k0s()()()}if(2&i){const r=e.sdS(5),l=e.sdS(13);e.R7$(4),e.Y8G("cdkDropListData",t.items01)("cdkDropListConnectedTo",e.eq3(4,M,l)),e.R7$(2),e.Dyx(t.items01),e.R7$(6),e.Y8G("cdkDropListData",t.items02)("cdkDropListConnectedTo",e.eq3(6,M,r)),e.R7$(2),e.Dyx(t.items02)}},dependencies:[d.MD,u.ad,u.O7,u.RK,u.T1,u.EM,s.nkw,s.Ptl,s.svQ,s.sB8],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:block;padding:24px}.card-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:320px 320px;gap:24px}.card-container[_ngcontent-%COMP%]   forge-list[_ngcontent-%COMP%]{--forge-list-padding: 0}.title[_ngcontent-%COMP%]{margin-bottom:16px}.drag-item[_ngcontent-%COMP%], .cdk-drag[_ngcontent-%COMP%]{background:#fff;background:var(--mdc-theme-surface, #ffffff);border:1px solid var(--forge-theme-border-color);cursor:move}.drag-item-preview[_ngcontent-%COMP%], .cdk-drag-preview[_ngcontent-%COMP%]{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f;background:#fff;background:var(--mdc-theme-surface, #ffffff);border:solid 2px #3f51b5;cursor:move}.drag-item-placeholder[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#e8eaf6;border:dashed 1px #3f51b5}.drag-item-placeholder[_ngcontent-%COMP%]   .cdk-drag__content[_ngcontent-%COMP%], .cdk-drag-placeholder[_ngcontent-%COMP%]   .cdk-drag__content[_ngcontent-%COMP%]{visibility:hidden}.drag-item-animating[_ngcontent-%COMP%], .cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]})}return n})();function S(n,m){if(1&n&&(e.j41(0,"forge-option",2),e.EFF(1),e.k0s()),2&n){const o=m.$implicit;e.Y8G("value",o.value),e.R7$(),e.JRh(o.label)}}let j=(()=>{class n{constructor(){this.moduleService=(0,e.WQX)(h),this.options=this.moduleService.mockData.slice(0,20).map(o=>({value:o.id,label:o.description})),this.objectOptions=this.moduleService.mockData.slice(0,20).map(o=>({value:o,label:o.description})),this.formGroup=new a.gE({select01:new a.MJ(1),select02:new a.MJ(this.objectOptions[2].value),select03:new a.MJ([3,4,5]),select04:new a.MJ,select05:new a.MJ}),this.select06=6,this.select07=7,this.optionBuilder=(o,i)=>{const t=document.createElement("span");t.setAttribute("slot","title"),t.innerText=o.value.description,i.appendChild(t);const r=document.createElement("span");r.setAttribute("slot","subtitle"),r.innerText=o.value.code,i.appendChild(r)},this.selectedTextBuilder=o=>o[0]?`${o[0].value} - ${o[0]?.label}`:""}onSelectChange(o){this.select07=o.detail}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-select"]],standalone:!0,features:[e.aNF],decls:19,vars:16,consts:[["novalidate","","autocomplete","off",1,"form-grid",3,"formGroup"],["formControlName","select01","label","Select01 - single primitive"],[3,"value"],["label","Select02 - single object","formControlName","select02",3,"options"],["label","Select03 - multiple select","multiple","","formControlName","select03",3,"options"],["label","Select04 - option builder","formControlName","select04",3,"options","optionBuilder"],["label","Select05 - selected text builder","formControlName","select05",3,"options","selectedTextBuilder"],[1,"form-grid--col-span"],[1,"form-grid"],["label","Select06 - ngModel binding",3,"ngModelChange","options","ngModel"],["slot","helper-text"],["label","Select07 - value binding",3,"change","options","value"]],template:function(i,t){1&i&&(e.j41(0,"form",0)(1,"forge-select",1),e.Z7z(2,S,2,2,"forge-option",2,e.Vm6),e.k0s(),e.nrm(4,"forge-select",3)(5,"forge-select",4)(6,"forge-select",5)(7,"forge-select",6),e.j41(8,"p",7),e.EFF(9),e.nI1(10,"json"),e.k0s()(),e.nrm(11,"forge-divider"),e.j41(12,"div",8)(13,"forge-select",9),e.mxI("ngModelChange",function(l){return e.DH7(t.select06,l)||(t.select06=l),l}),e.j41(14,"span",10),e.EFF(15),e.k0s()(),e.j41(16,"forge-select",11),e.bIt("change",function(l){return t.onSelectChange(l)}),e.j41(17,"span",10),e.EFF(18),e.k0s()()()),2&i&&(e.Y8G("formGroup",t.formGroup),e.R7$(2),e.Dyx(t.options),e.R7$(2),e.Y8G("options",t.objectOptions),e.R7$(),e.Y8G("options",t.options),e.R7$(),e.Y8G("options",t.objectOptions)("optionBuilder",t.optionBuilder),e.R7$(),e.Y8G("options",t.options)("selectedTextBuilder",t.selectedTextBuilder),e.R7$(2),e.JRh(e.bMT(10,14,t.formGroup.getRawValue())),e.R7$(4),e.Y8G("options",t.options),e.R50("ngModel",t.select06),e.R7$(2),e.SpI("selected value: ",t.select06,""),e.R7$(),e.Y8G("options",t.options)("value",t.select07),e.R7$(2),e.SpI("selected value: ",t.select07,""))},dependencies:[d.MD,d.TG,a.YN,a.qT,a.BC,a.cb,a.vS,a.X1,a.j4,a.JD,s.b$f,s.heP,s.x6t,s.POd,s.KAo,s.Je0,s.wBS],styles:['\n\n\n\n\n[_nghost-%COMP%]{display:block;margin:24px;padding:16px;background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,320px);gap:16px;justify-content:center}.form-grid--row-break[_ngcontent-%COMP%]{grid-column-start:1}.form-grid--col-span[_ngcontent-%COMP%]{grid-column:1/-1}.form-grid--col-span.form-grid--col-span[_ngcontent-%COMP%]{width:auto}.form-grid--col-span2[_ngcontent-%COMP%]{grid-column:span 2}.form-grid--col-span2.form-grid--col-span2[_ngcontent-%COMP%]{width:656px}.form-grid--col-span3[_ngcontent-%COMP%]{grid-column:span 3}.form-grid--col-span3.form-grid--col-span3[_ngcontent-%COMP%]{width:992px}.form-grid[_ngcontent-%COMP%]   [slot=value][_ngcontent-%COMP%]:empty:before{content:"n/a";color:var(--mdc-theme-text-secondary-on-background);font-style:italic}forge-divider[_ngcontent-%COMP%]{margin:16px 0}']})}return n})(),T=(()=>{class n{constructor(){this.nameChange=new e.bkB}onNameChange(){this.nameChange.emit(this.name)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-binding-child"]],inputs:{name:"name"},outputs:{nameChange:"nameChange"},standalone:!0,features:[e.aNF],decls:4,vars:1,consts:[["type","text","id","examples--binding--child--name",3,"ngModelChange","input","ngModel"],["for","examples--binding--child--name","slot","label"]],template:function(i,t){1&i&&(e.j41(0,"forge-text-field")(1,"input",0),e.mxI("ngModelChange",function(l){return e.DH7(t.name,l)||(t.name=l),l}),e.bIt("input",function(){return t.onNameChange()}),e.k0s(),e.j41(2,"label",1),e.EFF(3,"Child component"),e.k0s()()),2&i&&(e.R7$(),e.R50("ngModel",t.name))},dependencies:[d.MD,a.YN,a.me,a.BC,a.vS,s.xYY,s.LHr],styles:["[_nghost-%COMP%]{display:block}"]})}return n})(),R=(()=>{class n{constructor(){this.name="two way binding example"}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-binding"]],standalone:!0,features:[e.aNF],decls:6,vars:2,consts:[[1,"two-way-binding"],["type","text","id","examples--binding--name",3,"ngModelChange","ngModel"],["for","examples--binding--name","slot","label"],[3,"nameChange","name"]],template:function(i,t){1&i&&(e.j41(0,"div",0)(1,"forge-text-field")(2,"input",1),e.mxI("ngModelChange",function(l){return e.DH7(t.name,l)||(t.name=l),l}),e.k0s(),e.j41(3,"label",2),e.EFF(4,"Parent component"),e.k0s()(),e.j41(5,"app-examples-binding-child",3),e.mxI("nameChange",function(l){return e.DH7(t.name,l)||(t.name=l),l}),e.k0s()()),2&i&&(e.R7$(2),e.R50("ngModel",t.name),e.R7$(3),e.R50("name",t.name))},dependencies:[d.MD,a.YN,a.me,a.BC,a.vS,s.xYY,s.LHr,T],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:block;margin:24px;padding:16px;background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.two-way-binding[_ngcontent-%COMP%]   forge-text-field[_ngcontent-%COMP%]{margin-bottom:16px}"]})}return n})();var w=c(9947),E=c(674);let L=(()=>{class n{transform(o,i,t,r){if(!o?.toString().length||!i.length||!t.length)return;const l=i.find(p=>(0,E.Hv)(p[t],o));return l?r?l[r]:l:void 0}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275pipe=e.EJ8({name:"appArrayFind",type:n,pure:!0,standalone:!0})}return n})();const I=()=>({cats:1,dogs:2}),B=n=>({$implicit:n});function G(n,m){if(1&n&&(e.j41(0,"p"),e.EFF(1),e.nI1(2,"json"),e.k0s()),2&n){const o=m.$implicit;e.R7$(),e.JRh(e.bMT(2,1,o))}}const $=[{path:"",component:k,providers:[h],children:[{path:"autocomplete",component:x},{path:"drag-drop",component:P},{path:"select",component:j},{path:"binding",component:R},{path:"misc",component:(()=>{class n{constructor(){this.data=[{value:0,label:"Item 0"},{value:1,label:"Item 1"},{value:2,label:"Item 2"},{value:3,label:"Item 3"},{value:4,label:"Item 4"},{value:5,label:"Item 5"},{value:6,label:"Item 6"},{value:7,label:"Item 7"},{value:8,label:"Item 8"},{value:9,label:"Item 9"}]}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-examples-misc"]],standalone:!0,features:[e.aNF],decls:28,vars:18,consts:[["variableTemplate",""],[1,"header"],["slot","start",1,"forge-typography--title"],[1,"body"],["border","outlined"],["app-card-header","","slot","start"],["app-card-header","","slot","end"],["type","button","aria-label","Close"],["name","close"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["app-card-footer","","slot","end"],["type","outlined"],["type","button"],["type","raised"]],template:function(i,t){if(1&i&&(e.j41(0,"forge-toolbar",1)(1,"h2",2),e.EFF(2,"Misc examples"),e.k0s()(),e.j41(3,"div",3)(4,"app-card",4)(5,"div",5)(6,"span"),e.EFF(7,"Card header"),e.k0s()(),e.j41(8,"div",6)(9,"forge-icon-button")(10,"button",7),e.nrm(11,"forge-icon",8),e.k0s()()(),e.DNE(12,G,3,3,"ng-template",9,0,e.C5r),e.j41(14,"div"),e.EFF(15),e.nI1(16,"appArrayFind"),e.k0s(),e.j41(17,"div"),e.EFF(18),e.nI1(19,"appArrayFind"),e.nI1(20,"json"),e.k0s(),e.j41(21,"div",10)(22,"forge-button",11)(23,"button",12),e.EFF(24,"Cancel"),e.k0s()(),e.j41(25,"forge-button",13)(26,"button",12),e.EFF(27,"Save"),e.k0s()()()()()),2&i){const r=e.sdS(13);e.R7$(12),e.Y8G("ngTemplateOutlet",r)("ngTemplateOutletContext",e.eq3(16,B,e.lJ4(15,I))),e.R7$(3),e.JRh(e.ii3(16,4,0,t.data,"value","label")),e.R7$(3),e.JRh(e.bMT(20,13,e.brH(19,9,1,t.data,"value")))}},dependencies:[d.MD,d.T3,d.TG,s.ei2,s.Qpp,s.nVi,s.xBz,s.RlV,s.vzf,s.N1z,s.H_6,w.i,L],styles:["[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden;height:100%}body.app--layout-sm[_nghost-%COMP%], body.app--layout-sm   [_nghost-%COMP%]{background-color:#d3d3d3}body.app--layout-md[_nghost-%COMP%], body.app--layout-md   [_nghost-%COMP%]{background-color:#90ee90}body.app--layout-lg[_nghost-%COMP%], body.app--layout-lg   [_nghost-%COMP%]{background-color:#add8e6}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}"]})}return n})()},{path:"",redirectTo:"autocomplete",pathMatch:"full"}]}]}}]);
//# sourceMappingURL=393.5b5a8f4df78b886d.js.map