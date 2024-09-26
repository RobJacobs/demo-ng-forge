import{a as I}from"./chunk-Q65ABCTW.js";import{E as Z,F as T,H as g,Hb as X,Jb as Y,eb as G,gb as j,jc as ee,k as U,kb as z,kc as te,kd as pe,ld as ue,nc as ne,oc as ie,pb as J,pc as oe,qc as re,vc as ae,wc as le,xc as se,yc as ge,zb as K}from"./chunk-TDRYUBHM.js";import{$a as l,Ca as B,Da as S,Db as _,Gb as f,Hb as s,Mb as x,Nb as M,Ob as C,Qb as d,Rb as E,Sb as Q,Vb as O,Wb as b,Xb as A,Yb as $,Zb as q,_ as F,fa as y,gb as P,gc as W,ka as V,mb as R,ob as h,pb as D,tb as L,ub as k,va as p,vb as H,wa as u,wb as N,xb as a,yb as r,zb as m}from"./chunk-UO34YWUS.js";var me=["rangeAutocomplete"],de=["rangeTemplate"],ce=["filterInput"];function he(o,v){if(o&1&&(a(0,"div",14),d(1),r()),o&2){let t=s(2);l(),E(t.rangeMessage)}}function fe(o,v){if(o&1){let t=_();a(0,"forge-list-item")(1,"forge-icon-button",16),f("click",function(){let e=p(t).$implicit,i=s(2);return u(i.onDeleteRangeOption(e))}),m(2,"forge-icon",17),r(),d(3),r()}if(o&2){let t=v.$implicit;l(3),Q(" ",t.label," ")}}function _e(o,v){if(o&1){let t=_();a(0,"div",6)(1,"div",7)(2,"span",8),d(3,"Enter a search range"),r(),a(4,"div",9)(5,"forge-text-field")(6,"input",10),A("ngModelChange",function(e){p(t);let i=s();return b(i.rangeMin,e)||(i.rangeMin=e),u(e)}),r()(),a(7,"span"),d(8,"to"),r(),a(9,"forge-text-field")(10,"input",11),A("ngModelChange",function(e){p(t);let i=s();return b(i.rangeMax,e)||(i.rangeMax=e),u(e)}),r()(),a(11,"forge-icon-button",12),f("click",function(){p(t);let e=s();return u(e.onAddRangeOption())}),m(12,"forge-icon",13),r()(),R(13,he,2,1,"div",14),r(),a(14,"forge-list",15),H(15,fe,4,1,"forge-list-item",null,k),r(),m(17,"forge-divider"),r()}if(o&2){let t=s();l(6),O("ngModel",t.rangeMin),h("maxlength",t.maxlength),l(4),O("ngModel",t.rangeMax),h("maxlength",t.maxlength),l(3),L(t.rangeMessage?13:-1),l(2),N(t.rangeOptions)}}var Ve=(()=>{class o{constructor(){this.ngZone=y(S),this.viewContainerRef=y(P),this.valueChange=new B,this.maxlength=null,this.rangeOptions=[],this.elementId=I.uniqueId(),this.filter="",this.onChange=t=>{},this.onTouched=()=>{},this.onFilter=t=>(this.filter=t,new Promise((n,e)=>{this.optionFilter&&this.optionFilter(this.filter).subscribe({next:i=>{let c=[];i.forEach(w=>g(w.value)?this.rangeOptions.push(w):c.push(w)),n(c)},error:()=>e()})})),this.optionHeaderBuilder=()=>(this.ngZone.run(()=>{this.rangeMin=void 0,this.rangeMax=void 0,this.rangeMessage=void 0}),this.rangeRef?.rootNodes[0]),this.selectedTextBuilder=t=>{if(this.autocompleteRef?.nativeElement.open&&this.filter.length)return this.filter;let n=t?.length,e=this.rangeOptions?.length;return n>0&&e>0?`${n} option(s) selected, ${e} range(s)`:n>0?`${n} option(s) selected`:e>0?`${e} range(s)`:""}}autocompleteBlur(){this.onTouched()}set value(t){this.writeValue(t)}writeValue(t){let n=[];this.rangeOptions.length=0,g(t)&&t.forEach(e=>{if(g(e)||g(e.value)){let i=Z(e.value)?e.value:e;this.rangeOptions.push({label:`${i[0]} to ${i[1]}`,value:i})}else n.push(e)}),window.requestAnimationFrame(()=>{this.autocompleteRef.nativeElement.value=n})}ngAfterViewInit(){window.requestAnimationFrame(()=>{this.rangeRef=this.viewContainerRef.createEmbeddedView(this.rangeTemplateRef),this.rangeRef.rootNodes[0].remove()})}ngOnDestroy(){this.rangeRef?.destroy()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}onAutocompleteChange(){this.emitChangeEvents()}onAddRangeOption(){if(!this.rangeMin?.length&&!this.rangeMax?.length){this.rangeMessage="A min or max value is required.";return}if(this.rangeMin=T(this.rangeMin)?this.rangeMin?.trim():this.rangeMin,this.rangeMax=T(this.rangeMax)?this.rangeMax?.trim():this.rangeMax,this.rangeMin?.length&&this.rangeMax?.length){let e=I.comparator(this.rangeMin,this.rangeMax,"string");if(e===0){this.rangeMessage="Min and Max cannot be the same value.";return}if(e===1){this.rangeMessage="Min value cannot be greater than Max value.";return}}if(this.rangeOptions.findIndex(e=>e.value[0]===this.rangeMin&&e.value[1]===this.rangeMax)!==-1){this.rangeMessage="This range is already defined.";return}this.rangeMessage=void 0;let n=this.rangeMin?.length&&this.rangeMax?.length?`${this.rangeMin} to ${this.rangeMax}`:this.rangeMin?.length?`Greater than ${this.rangeMin}`:`Less than ${this.rangeMax}`;this.rangeOptions.push({label:n,value:[this.rangeMin,this.rangeMax]}),this.emitChangeEvents(),this.rangeMin=void 0,this.rangeMax=void 0,this.filterInputRef.nativeElement.value=this.selectedTextBuilder(this.autocompleteRef?.nativeElement.value)}onDeleteRangeOption(t){(this.rangeRef?.rootNodes[0]).focus();let n=this.rangeOptions.findIndex(e=>e.value===t.value);n!==-1&&(this.rangeOptions.splice(n,1),this.filterInputRef.nativeElement.value=this.selectedTextBuilder(this.autocompleteRef?.nativeElement.value),this.emitChangeEvents())}emitChangeEvents(){let t=[];g(this.rangeOptions)&&this.rangeOptions.length&&t.push(...this.rangeOptions.map(e=>e.value));let n=this.autocompleteRef?.nativeElement.value;g(n)&&n.length&&t.push(...n),this.onChange(t),this.valueChange.emit(t)}static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=V({type:o,selectors:[["app-autocomplete-range"]],viewQuery:function(n,e){if(n&1&&(x(me,5),x(de,5),x(ce,5)),n&2){let i;M(i=C())&&(e.autocompleteRef=i.first),M(i=C())&&(e.rangeTemplateRef=i.first),M(i=C())&&(e.filterInputRef=i.first)}},hostBindings:function(n,e){n&1&&f("focusout",function(c){return e.autocompleteBlur(c)})},inputs:{optionFilter:"optionFilter",value:"value",label:"label",maxlength:"maxlength"},outputs:{valueChange:"valueChange"},standalone:!0,features:[$([{provide:G,useExisting:F(()=>o),multi:!0}]),q],decls:10,vars:6,consts:[["rangeAutocomplete",""],["filterInput",""],["rangeTemplate",""],["multiple","",3,"forge-autocomplete-change","filter","selectedTextBuilder","popupHeaderBuilder"],["type","text"],["slot","end","name","arrow_drop_down",1,"forge-dropdown-icon"],["tabindex","-1",1,"range"],[1,"range__input"],[1,"forge-typography--subheading2","range__input__header"],[1,"range__input__body"],["type","text","placeholder","min",3,"ngModelChange","ngModel"],["type","text","placeholder","max",3,"ngModelChange","ngModel"],["aria-label","Add search range",3,"click"],["name","add"],[1,"forge-typography--label1"],[1,"range__options"],["slot","start","aria-label","Delete search range",3,"click"],["name","delete"]],template:function(n,e){if(n&1){let i=_();a(0,"forge-autocomplete",3,0),f("forge-autocomplete-change",function(){return p(i),u(e.onAutocompleteChange())}),a(2,"forge-text-field"),m(3,"input",4,1),a(5,"label"),d(6),r(),m(7,"forge-icon",5),r()(),R(8,_e,18,5,"ng-template",null,2,W)}n&2&&(D("filter",e.onFilter)("selectedTextBuilder",e.selectedTextBuilder)("popupHeaderBuilder",e.optionHeaderBuilder),l(3),h("id",e.elementId),l(2),h("for",e.elementId),l(),E(e.label))},dependencies:[U,K,j,z,J,Y,X,te,ee,re,oe,ne,ie,se,le,ge,ae,ue,pe],styles:[`[_nghost-%COMP%]{display:block}.range[_ngcontent-%COMP%]{outline:none}.range__input[_ngcontent-%COMP%]{padding-left:16px;padding-bottom:8px;--forge-field-height: 2.5rem}.range__input__header[_ngcontent-%COMP%]{font-size:14px}.range__input__body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr auto;column-gap:8px;align-items:center}.range__input[_ngcontent-%COMP%]   .forge-typography--label1[_ngcontent-%COMP%]{color:var(--forge-theme-error)}.range__options[_ngcontent-%COMP%]{--forge-list-item-padding: 0 16px 0 4px;--forge-list-item-leading-margin-right: 4px}






/*# sourceMappingURL=autocomplete-range.component-C3U53UNJ.css.map */`]})}}return o})();export{Ve as a};
//# sourceMappingURL=chunk-7OND2EID.js.map
