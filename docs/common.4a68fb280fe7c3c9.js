"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[76],{2267:(f,_,l)=>{l.d(_,{h:()=>R});var e=l(8559),u=l(316),s=l(496),p=l(8758),t=l(4607),r=l(123);const c=["rangeAutocomplete"],h=["rangeTemplate"],d=["filterInput"];function E(g,M){if(1&g&&(e.j41(0,"div",14),e.EFF(1),e.k0s()),2&g){const i=e.XpG(2);e.R7$(),e.JRh(i.rangeMessage)}}function v(g,M){if(1&g){const i=e.RV6();e.j41(0,"forge-list-item")(1,"forge-icon-button",16),e.bIt("click",function(){const n=e.eBV(i).$implicit,a=e.XpG(2);return e.Njj(a.onDeleteRangeOption(n))}),e.nrm(2,"forge-icon",17),e.k0s(),e.EFF(3),e.k0s()}if(2&g){const i=M.$implicit;e.R7$(3),e.SpI(" ",i.label," ")}}function C(g,M){if(1&g){const i=e.RV6();e.j41(0,"div",6)(1,"div",7)(2,"span",8),e.EFF(3,"Enter a search range"),e.k0s(),e.j41(4,"div",9)(5,"forge-text-field")(6,"input",10),e.mxI("ngModelChange",function(n){e.eBV(i);const a=e.XpG();return e.DH7(a.rangeMin,n)||(a.rangeMin=n),e.Njj(n)}),e.k0s()(),e.j41(7,"span"),e.EFF(8,"to"),e.k0s(),e.j41(9,"forge-text-field")(10,"input",11),e.mxI("ngModelChange",function(n){e.eBV(i);const a=e.XpG();return e.DH7(a.rangeMax,n)||(a.rangeMax=n),e.Njj(n)}),e.k0s()(),e.j41(11,"forge-icon-button",12),e.bIt("click",function(){e.eBV(i);const n=e.XpG();return e.Njj(n.onAddRangeOption())}),e.nrm(12,"forge-icon",13),e.k0s()(),e.DNE(13,E,2,1,"div",14),e.k0s(),e.j41(14,"forge-list",15),e.Z7z(15,v,4,1,"forge-list-item",null,e.Vm6),e.k0s(),e.nrm(17,"forge-divider"),e.k0s()}if(2&g){const i=e.XpG();e.R7$(6),e.R50("ngModel",i.rangeMin),e.BMQ("maxlength",i.maxlength),e.R7$(4),e.R50("ngModel",i.rangeMax),e.BMQ("maxlength",i.maxlength),e.R7$(3),e.vxM(13,i.rangeMessage?13:-1),e.R7$(2),e.Dyx(i.rangeOptions)}}let R=(()=>{class g{constructor(){this.ngZone=(0,e.WQX)(e.SKi),this.viewContainerRef=(0,e.WQX)(e.c1b),this.valueChange=new e.bkB,this.maxlength=null,this.rangeOptions=[],this.elementId=r.A.uniqueId(),this.filter="",this.onChange=i=>{},this.onTouched=()=>{},this.onFilter=i=>(this.filter=i,new Promise((o,n)=>{this.optionFilter&&this.optionFilter(this.filter).subscribe({next:a=>{const m=[];a.forEach(x=>(0,p.cy)(x.value)?this.rangeOptions.push(x):m.push(x)),o(m)},error:()=>n()})})),this.optionHeaderBuilder=()=>(this.ngZone.run(()=>{this.rangeMin=void 0,this.rangeMax=void 0,this.rangeMessage=void 0}),this.rangeRef?.rootNodes[0]),this.selectedTextBuilder=i=>{if(this.autocompleteRef?.nativeElement.open&&this.filter.length)return this.filter;const o=i?.length,n=this.rangeOptions?.length;return o>0&&n>0?`${o} option(s) selected, ${n} range(s)`:o>0?`${o} option(s) selected`:n>0?`${n} range(s)`:""}}autocompleteBlur(){this.onTouched()}set value(i){this.writeValue(i)}writeValue(i){const o=[];this.rangeOptions.length=0,(0,p.cy)(i)&&i.forEach(n=>{if((0,p.cy)(n)||(0,p.cy)(n.value)){const a=(0,p.O9)(n.value)?n.value:n;this.rangeOptions.push({label:`${a[0]} to ${a[1]}`,value:a})}else o.push(n)}),window.requestAnimationFrame(()=>{this.autocompleteRef.nativeElement.value=o})}ngAfterViewInit(){window.requestAnimationFrame(()=>{this.rangeRef=this.viewContainerRef.createEmbeddedView(this.rangeTemplateRef),this.rangeRef.rootNodes[0].remove()})}ngOnDestroy(){this.rangeRef?.destroy()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i}onAutocompleteChange(){this.emitChangeEvents()}onAddRangeOption(){if(this.rangeMin?.length||this.rangeMax?.length){if(this.rangeMin=(0,p.Kg)(this.rangeMin)?this.rangeMin?.trim():this.rangeMin,this.rangeMax=(0,p.Kg)(this.rangeMax)?this.rangeMax?.trim():this.rangeMax,this.rangeMin?.length&&this.rangeMax?.length){const n=r.A.comparator(this.rangeMin,this.rangeMax,"string");if(0===n)return void(this.rangeMessage="Min and Max cannot be the same value.");if(1===n)return void(this.rangeMessage="Min value cannot be greater than Max value.")}-1===this.rangeOptions.findIndex(n=>n.value[0]===this.rangeMin&&n.value[1]===this.rangeMax)?(this.rangeMessage=void 0,this.rangeOptions.push({label:this.rangeMin?.length&&this.rangeMax?.length?`${this.rangeMin} to ${this.rangeMax}`:this.rangeMin?.length?`Greater than ${this.rangeMin}`:`Less than ${this.rangeMax}`,value:[this.rangeMin,this.rangeMax]}),this.emitChangeEvents(),this.rangeMin=void 0,this.rangeMax=void 0,this.filterInputRef.nativeElement.value=this.selectedTextBuilder(this.autocompleteRef?.nativeElement.value)):this.rangeMessage="This range is already defined."}else this.rangeMessage="A min or max value is required."}onDeleteRangeOption(i){(this.rangeRef?.rootNodes[0]).focus();const o=this.rangeOptions.findIndex(n=>n.value===i.value);-1!==o&&(this.rangeOptions.splice(o,1),this.filterInputRef.nativeElement.value=this.selectedTextBuilder(this.autocompleteRef?.nativeElement.value),this.emitChangeEvents())}emitChangeEvents(){const i=[];(0,p.cy)(this.rangeOptions)&&this.rangeOptions.length&&i.push(...this.rangeOptions.map(n=>n.value));const o=this.autocompleteRef?.nativeElement.value;(0,p.cy)(o)&&o.length&&i.push(...o),this.onChange(i),this.valueChange.emit(i)}static#e=this.\u0275fac=function(o){return new(o||g)};static#t=this.\u0275cmp=e.VBU({type:g,selectors:[["app-autocomplete-range"]],viewQuery:function(o,n){if(1&o&&(e.GBs(c,5),e.GBs(h,5),e.GBs(d,5)),2&o){let a;e.mGM(a=e.lsd())&&(n.autocompleteRef=a.first),e.mGM(a=e.lsd())&&(n.rangeTemplateRef=a.first),e.mGM(a=e.lsd())&&(n.filterInputRef=a.first)}},hostBindings:function(o,n){1&o&&e.bIt("focusout",function(m){return n.autocompleteBlur(m)})},inputs:{optionFilter:"optionFilter",value:"value",label:"label",maxlength:"maxlength"},outputs:{valueChange:"valueChange"},standalone:!0,features:[e.Jv_([{provide:s.kq,useExisting:(0,e.Rfq)(()=>g),multi:!0}]),e.aNF],decls:10,vars:6,consts:[["rangeAutocomplete",""],["filterInput",""],["rangeTemplate",""],["multiple","",3,"forge-autocomplete-change","filter","selectedTextBuilder","popupHeaderBuilder"],["type","text"],["slot","end","name","arrow_drop_down",1,"forge-dropdown-icon"],["tabindex","-1",1,"range"],[1,"range__input"],[1,"forge-typography--subheading2","range__input__header"],[1,"range__input__body"],["type","text","placeholder","min",3,"ngModelChange","ngModel"],["type","text","placeholder","max",3,"ngModelChange","ngModel"],["aria-label","Add search range",3,"click"],["name","add"],[1,"forge-typography--label1"],[1,"range__options"],["slot","start","aria-label","Delete search range",3,"click"],["name","delete"]],template:function(o,n){if(1&o){const a=e.RV6();e.j41(0,"forge-autocomplete",3,0),e.bIt("forge-autocomplete-change",function(){return e.eBV(a),e.Njj(n.onAutocompleteChange())}),e.j41(2,"forge-text-field"),e.nrm(3,"input",4,1),e.j41(5,"label"),e.EFF(6),e.k0s(),e.nrm(7,"forge-icon",5),e.k0s()(),e.DNE(8,C,18,5,"ng-template",null,2,e.C5r)}2&o&&(e.Y8G("filter",n.onFilter)("selectedTextBuilder",n.selectedTextBuilder)("popupHeaderBuilder",n.optionHeaderBuilder),e.R7$(3),e.BMQ("id",n.elementId),e.R7$(2),e.BMQ("for",n.elementId),e.R7$(),e.JRh(n.label))},dependencies:[u.MD,s.YN,s.me,s.BC,s.vS,t.UHk,t.sHR,t.b$f,t.heP,t.nVi,t.xBz,t.RlV,t.vzf,t.nkw,t.Ptl,t.svQ,t.sB8,t.xYY,t.LHr],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:block}.range[_ngcontent-%COMP%]{outline:none}.range__input[_ngcontent-%COMP%]{padding-left:16px;padding-bottom:8px;--forge-field-height: 2.5rem}.range__input__header[_ngcontent-%COMP%]{font-size:14px}.range__input__body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto 1fr auto;column-gap:8px;align-items:center}.range__input[_ngcontent-%COMP%]   .forge-typography--label1[_ngcontent-%COMP%]{color:var(--forge-theme-error)}.range__options[_ngcontent-%COMP%]{--forge-list-item-padding: 0 16px 0 4px;--forge-list-item-leading-margin-right: 4px}"]})}return g})()},411:(f,_,l)=>{l.d(_,{j:()=>p});var e=l(316),u=l(9947),s=l(8559);let p=(()=>{class t{static#e=this.\u0275fac=function(h){return new(h||t)};static#t=this.\u0275cmp=s.VBU({type:t,selectors:[["app-table-detail"]],inputs:{rowIndex:"rowIndex",data:"data"},standalone:!0,features:[s.aNF],decls:7,vars:4,consts:[["app-card-header","","slot","start"]],template:function(h,d){1&h&&(s.j41(0,"app-card")(1,"div",0)(2,"span"),s.EFF(3),s.k0s()(),s.j41(4,"p"),s.EFF(5),s.nI1(6,"json"),s.k0s()()),2&h&&(s.R7$(3),s.SpI("Table row detail ",d.rowIndex,""),s.R7$(2),s.JRh(s.bMT(6,2,d.data)))},dependencies:[e.MD,e.TG,u.i],styles:["[_nghost-%COMP%]{display:block;padding:16px}"]})}return t})()},1103:(f,_,l)=>{l.d(_,{q:()=>u});var e=l(8559);let u=(()=>{class s{transform(t,r,...c){return r(t,...c)}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275pipe=e.EJ8({name:"appCallback",type:s,pure:!0,standalone:!0})}return s})()},7322:(f,_,l)=>{l.d(_,{C:()=>s});var e=l(623),u=l(126);class s extends e.T{constructor(t){super(t)}_build(){const t=document.createElement(u.P.elementName);return this._inputElement=this._buildInputElement(t),t.append(this._inputElement),t}_configure(){this._config.options?.id&&(this._element.id=this._config.options.id),this._config.options?.label&&this._createLabel(this._config.options.label),this._config.options?.startElement&&(this._config.options.startElement.slot="start",this._element.append(this._config.options.startElement)),this._config.options?.leadingElement&&(this._config.options.leadingElement.slot="start",this._element.append(this._config.options.leadingElement)),this._config.options?.endElement&&(this._config.options.endElement.slot="end",this._element.append(this._config.options.endElement)),this._config.options?.trailingElement&&(this._config.options.trailingElement.slot="end",this._element.append(this._config.options.trailingElement)),this._config.options?.accessoryElement&&(this._config.options.accessoryElement.slot="accessory",this._element.append(this._config.options.accessoryElement))}get value(){return this._inputElement.value}set value(t){this._inputElement.value=t}get disabled(){return this._inputElement.disabled}set disabled(t){this._inputElement.disabled=t}get invalid(){return this._element.invalid}set invalid(t){this._element.invalid=t}get inputElement(){return this._inputElement}get labelElement(){return this._labelElement}onChange(t){this._inputElement.addEventListener("input",r=>t(r.target.value))}onFocus(t){this._inputElement.addEventListener("focus",r=>t(r))}onBlur(t){this._inputElement.addEventListener("blur",r=>t(r))}setLabel(t){t?this._labelElement?this._labelElement.textContent=t:this._createLabel(t):(this._labelElement?.remove(),this._labelElement=void 0)}setSupportText(t){if(t)return this._supportTextElement||(this._supportTextElement=document.createElement("span"),this._supportTextElement.slot="support-text",this._element.append(this._supportTextElement)),void(this._supportTextElement.textContent=t);this._supportTextElement?.remove(),this._supportTextElement=void 0}setHelperText(t){this.setSupportText(t)}setSupportTextEnd(t){if(t)return this._supportTextEndElement||(this._supportTextEndElement=document.createElement("span"),this._supportTextEndElement.slot="support-text-end",this._element.append(this._supportTextEndElement)),void(this._supportTextEndElement.textContent=t);this._supportTextEndElement?.remove(),this._supportTextEndElement=void 0}floatLabel(t){this._element.floatLabel=t}_createLabel(t){this._labelElement=document.createElement("label"),this._labelElement.textContent=t,this._labelElement.slot="label",this._config.options?.id&&(this._labelElement.htmlFor=this._config.options.id),this._element.append(this._labelElement)}_buildInputElement(t){const r=document.createElement("input");return r.type=this._config.options?.type??"text",void 0!==this._config.options?.value&&(r.value=this._config.options.value),this._config.options?.id&&(r.id=this._config.options.id),void 0!==this._config.options?.placeholder&&(r.placeholder=this._config.options.placeholder),t.append(r),r}}},5342:(f,_,l)=>{l.d(_,{s:()=>u});var e=l(3335);function u(s,p){const t="object"==typeof p;return new Promise((r,c)=>{let d,h=!1;s.subscribe({next:E=>{d=E,h=!0},error:c,complete:()=>{h?r(d):t?r(p.defaultValue):c(new e.G)}})})}}}]);
//# sourceMappingURL=common.4a68fb280fe7c3c9.js.map