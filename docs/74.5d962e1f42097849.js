"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[74],{685:(I,T,m)=>{m.r(T),m.d(T,{QueryBuilderModule:()=>J});var g=m(6575),b=m(6687),C=m(9189),l=m(2024),_=m(4135),Z=m(5162),e=m(1699),n=m(6538),u=m(353);function o(r,s){1&r&&e.GkF(0)}const p=function(r,s){return{formGroup:r,index:s}};function c(r,s){if(1&r&&(e.ynx(0),e.TgZ(1,"div",8),e.YNc(2,o,1,0,"ng-container",9),e.qZA(),e.BQk()),2&r){const t=s.$implicit,i=s.index;e.oxw();const a=e.MAs(11);e.xp6(2),e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.WLB(2,p,t,i))}}function B(r,s){1&r&&e.GkF(0)}const E=function(r){return{formGroup:r}};function d(r,s){if(1&r&&(e.ynx(0),e.YNc(1,B,1,0,"ng-container",9),e.BQk()),2&r){const t=e.oxw().formGroup;e.oxw();const i=e.MAs(13);e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.VKq(2,E,t))}}function x(r,s){if(1&r&&(e.TgZ(0,"forge-option",29),e._uU(1),e.qZA()),2&r){const t=s.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.label)}}function v(r,s){if(1&r&&(e.TgZ(0,"forge-text-field",14),e._UZ(1,"input",30),e.TgZ(2,"label",31),e._uU(3,"Value"),e.qZA(),e.TgZ(4,"span",18),e._uU(5,"A value is required"),e.qZA()()),2&r){const t=e.oxw(),a=t.index;e.Q6J("appFormControlInvalid",t.formGroup.get("value")),e.xp6(1),e.s9C("id","app--query-builder--filter-value-"+a),e.xp6(1),e.s9C("for","app--query-builder--filter-value-"+a)}}function h(r,s){if(1&r&&(e.TgZ(0,"div",32)(1,"forge-text-field",14),e._UZ(2,"input",33),e.TgZ(3,"label",31),e._uU(4,"Minimum"),e.qZA(),e.TgZ(5,"span",18),e._uU(6,"A minimum value is required"),e.qZA()(),e.TgZ(7,"forge-text-field",14),e._UZ(8,"input",34),e.TgZ(9,"label",31),e._uU(10,"Maximum"),e.qZA(),e.TgZ(11,"span",18),e._uU(12),e.qZA()()()),2&r){const t=e.oxw(),i=t.formGroup,a=t.index;e.xp6(1),e.Q6J("appFormControlInvalid",i.get("minValue")),e.xp6(1),e.s9C("id","app--query-builder--filter-min-"+a),e.xp6(1),e.s9C("for","app--query-builder--filter-min-"+a),e.xp6(4),e.Q6J("appFormControlInvalid",i.get("maxValue")),e.xp6(1),e.s9C("id","app--query-builder--filter-max-"+a),e.xp6(1),e.s9C("for","app--query-builder--filter-max-"+a),e.xp6(3),e.hij(" ",i.get("maxValue").errors.required?"A maximum value is required":i.get("maxValue").errors.range?"Max value must be greater or equal to min value":""," ")}}function Q(r,s){1&r&&e.GkF(0)}function P(r,s){1&r&&e.GkF(0)}function y(r,s){if(1&r&&(e.ynx(0),e.YNc(1,Q,1,0,"ng-container",9),e.TgZ(2,"div",8),e.YNc(3,P,1,0,"ng-container",9),e.qZA(),e.BQk()),2&r){const t=s.$implicit,i=s.index;e.oxw(3);const a=e.MAs(13),f=e.MAs(11);e.xp6(1),e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.VKq(4,E,t)),e.xp6(2),e.Q6J("ngTemplateOutlet",f)("ngTemplateOutletContext",e.WLB(6,p,t,i))}}function M(r,s){if(1&r&&(e.ynx(0,1),e.YNc(1,y,4,9,"ng-container",2),e.BQk()),2&r){const t=e.oxw().formGroup;let i;e.xp6(1),e.Q6J("ngForOf",null==(i=t.get("filters"))?null:i.controls)}}function A(r,s){if(1&r){const t=e.EpF();e.YNc(0,d,2,4,"ng-container",10),e.ynx(1,11),e.TgZ(2,"div",12)(3,"forge-autocomplete",13)(4,"forge-text-field",14),e._UZ(5,"input",15),e.TgZ(6,"label",16),e._uU(7,"Property"),e.qZA(),e._UZ(8,"forge-icon",17),e.TgZ(9,"span",18),e._uU(10,"A property is required"),e.qZA()()(),e.TgZ(11,"forge-select",19),e.YNc(12,x,2,2,"forge-option",20),e.TgZ(13,"span",18),e._uU(14,"An operator is required"),e.qZA()(),e.YNc(15,v,6,3,"forge-text-field",21),e.YNc(16,h,13,7,"div",22),e.TgZ(17,"div",23)(18,"forge-menu",24),e.NdJ("forge-menu-select",function(a){const O=e.CHM(t).formGroup,F=e.oxw();return e.KtG(F.onAddFilter(O,a.detail.value))}),e.TgZ(19,"forge-icon-button")(20,"button",25),e._UZ(21,"forge-icon",5),e.qZA()()(),e.TgZ(22,"forge-icon-button")(23,"button",26),e.NdJ("click",function(){const f=e.CHM(t).formGroup,O=e.oxw();return e.KtG(O.onDeleteFilter(f))}),e._UZ(24,"forge-icon",27),e.qZA()()()(),e.YNc(25,M,2,1,"ng-container",28),e.BQk()}if(2&r){const t=s.formGroup,i=s.index,a=e.oxw();let f;e.Q6J("ngIf",i>0),e.xp6(1),e.Q6J("formGroup",t),e.xp6(2),e.Q6J("options",a.propertyOptions)("filter",a.propertyFilter),e.xp6(1),e.Q6J("appFormControlInvalid",t.get("property")),e.xp6(1),e.s9C("id","app--query-builder--filter-property"+i),e.xp6(1),e.s9C("for","app--query-builder--filter-property"+i),e.xp6(5),e.Q6J("appFormControlInvalid",t.get("operator")),e.xp6(1),e.Q6J("ngForOf",a.operatorOptions),e.xp6(3),e.Q6J("ngIf",6!==t.get("operator").value),e.xp6(1),e.Q6J("ngIf",6===t.get("operator").value),e.xp6(2),e.Q6J("options",a.filterOptions),e.xp6(7),e.Q6J("ngIf",null==(f=t.get("filters"))||null==f.controls?null:f.controls.length)}}function w(r,s){if(1&r&&(e.TgZ(0,"forge-option",29),e._uU(1),e.qZA()),2&r){const t=s.$implicit;e.Q6J("value",t.value),e.xp6(1),e.Oqu(t.label)}}function G(r,s){if(1&r&&(e.TgZ(0,"div",35)(1,"forge-select",36),e.YNc(2,w,2,2,"forge-option",20),e.qZA()()),2&r){const t=s.formGroup,i=e.oxw();e.xp6(1),e.Q6J("formControl",t.get("condition")),e.xp6(1),e.Q6J("ngForOf",i.conditionOptions)}}const N=[{path:"**",component:(()=>{class r{constructor(){this.formGroup=new l.cw({filters:new l.Oe([this.buildFilterFormGroup()])}),this.conditionOptions=[{value:"and",label:"And"},{value:"or",label:"Or"}],this.propertyOptions=[{value:"firstName",label:"First name"},{value:"lastName",label:"Last name"},{value:"dateOfBirth",label:"Date of birth"},{value:"gender",label:"Gender"},{value:"occupation",label:"Occupation"}],this.operatorOptions=[{value:0,label:"Equal"},{value:1,label:"Not equal"},{value:2,label:"Greater than"},{value:3,label:"Less than"},{value:4,label:"Greater than equal to"},{value:5,label:"Less than equal to"},{value:6,label:"Range"},{value:7,label:"Contains"},{value:8,label:"Not contains"},{value:9,label:"Empty"}],this.filterOptions=[{value:"condition",label:"Add condition"},{value:"group",label:"Add group"}],this.propertyFilter=t=>Z.c.filterData(this.propertyOptions,[{key:"label",value:t}])}onAddFilter(t,i){if(t===this.formGroup)this.formGroup.get("filters").push(this.buildFilterFormGroup());else switch(i){case"condition":{const a=t.parent.controls.indexOf(t)+1;t.parent.insert(a,this.buildFilterFormGroup());break}case"group":t.get("filters").push(this.buildFilterFormGroup())}}onDeleteFilter(t){const i=t.parent,a=i.controls.indexOf(t);-1!==a&&i.removeAt(a)}buildFilterFormGroup(t){return new l.cw({property:new l.NI(t?.property,{validators:[l.kI.required]}),condition:new l.NI(t?.condition||"and",{validators:[l.kI.required]}),operator:new l.NI(t?.operator,{validators:[l.kI.required]}),value:new l.NI(t?.value,{validators:[this.validateFilterValue("value")]}),minValue:new l.NI(t?.minValue,{validators:[this.validateFilterValue("minValue")]}),maxValue:new l.NI(t?.minValue,{validators:[this.validateFilterValue("maxValue")]}),filters:new l.Oe([])})}validateFilterValue(t){return i=>{const a=i.parent;if(!a)return null;const f=a.value.operator;if(!(0,_.$K)(f))return null;if(6===f){if("value"===t)return null;if(!(0,_.$K)(i.value)||!i.value.toString().length)return{required:!0};const O=a.value.minValue,F=a.value.maxValue;if("minValue"===t&&(0,_.$K)(F)&&O.localeCompare(F,navigator.language,{numeric:!0,ignorePunctuation:!0})<1&&a.get("maxValue")?.setErrors(null),"maxValue"===t){if(!(0,_.$K)(O))return null;if(O.localeCompare(F,navigator.language,{numeric:!0,ignorePunctuation:!0})>0)return{range:!0}}return null}return"minValue"===t||"maxValue"===t||(0,_.$K)(i.value)&&i.value.toString().length?null:{required:!0}}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-query-builder"]],decls:14,vars:5,consts:[["novalidate","","autocomplete","off",3,"formGroup"],["formArrayName","filters"],[4,"ngFor","ngForOf"],[1,"filter__group__add"],["type","button",3,"click"],["name","add_circle"],["filterFormTemplate",""],["filterHeaderTemplate",""],[1,"filter__group"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"formGroup"],[1,"filter__form"],["formControlName","property",3,"options","filter"],["required","",3,"appFormControlInvalid"],["type","text",3,"id"],[3,"for"],["slot","trailing","name","arrow_drop_down",1,"forge-dropdown-icon"],["slot","helper-text",1,"app-form-control-invalid"],["formControlName","operator","label","Operator","required","",3,"appFormControlInvalid"],[3,"value",4,"ngFor","ngForOf"],["required","",3,"appFormControlInvalid",4,"ngIf"],["class","filter__form__range",4,"ngIf"],[1,"filter__form__action"],[3,"options","forge-menu-select"],["type","button","aria-label","add filter item"],["type","button","aria-label","Delete filter",3,"click"],["name","delete"],["formArrayName","filters",4,"ngIf"],[3,"value"],["type","text","formControlName","value",3,"id"],["slot","label",3,"for"],[1,"filter__form__range"],["type","text","formControlName","minValue",3,"id"],["type","text","formControlName","maxValue",3,"id"],[1,"filter__header"],[1,"filter__header__condition",3,"formControl"]],template:function(t,i){if(1&t&&(e.TgZ(0,"form",0)(1,"div",1),e.YNc(2,c,3,5,"ng-container",2),e.qZA(),e.TgZ(3,"forge-button",3)(4,"button",4),e.NdJ("click",function(){return i.onAddFilter(i.formGroup,"condition")}),e._UZ(5,"forge-icon",5),e._uU(6," Add a new condition "),e.qZA()(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"json"),e.qZA()(),e.YNc(10,A,26,13,"ng-template",null,6,e.W1O),e.YNc(12,G,3,2,"ng-template",null,7,e.W1O)),2&t){let a;e.Q6J("formGroup",i.formGroup),e.xp6(2),e.Q6J("ngForOf",null==(a=i.formGroup.get("filters"))?null:a.controls),e.xp6(6),e.Oqu(e.lcZ(9,3,i.formGroup.getRawValue()))}},dependencies:[g.sg,g.O5,g.tP,l._Y,l.Fj,l.JJ,l.JL,l.Q7,l.oH,l.sg,l.u,l.CE,n.$RD,n.YRL,n.r0F,n.oJW,n.r2H,n.Mnp,n.x8v,n.QIx,n.Hr0,n.afy,u.c,g.Ts],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:block;padding:24px}.filter__header[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin:8px 0}.filter__header__condition[_ngcontent-%COMP%]{width:96px;background-color:#eee;border-radius:4px}.filter__header__condition[_ngcontent-%COMP%]::part(container):before{border:none}.filter__header__condition[_ngcontent-%COMP%]::part(text){padding:0 16px}.filter__form[_ngcontent-%COMP%]{display:grid;grid-gap:0 16px;grid-template-columns:216px 168px minmax(400px,1fr) 96px;align-items:start}.filter__form__range[_ngcontent-%COMP%]{display:grid;grid-gap:0 16px;grid-template-columns:minmax(192px,1fr) minmax(192px,1fr);align-items:start}.filter__form__action[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.filter__group[_ngcontent-%COMP%]{background-color:#fff;background-color:var(--mdc-theme-surface, #ffffff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border:1px solid var(--forge-theme-border-color);padding:16px;border-left:4px solid #3f51b5;margin:16px 0}.filter__group[_ngcontent-%COMP%]   .filter__group[_ngcontent-%COMP%]{border:1px dashed #9e9e9e;margin:8px 0;padding:8px 16px}.filter__group[_ngcontent-%COMP%]:first-of-type{margin-top:0}.filter__group__add[_ngcontent-%COMP%]{border:1px dashed #9e9e9e;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#f5f5f5;width:100%}.filter__group__add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;padding:16px;height:auto}.app-form-control-invalid[_ngcontent-%COMP%]{display:none}.app-form-control-invalid[invalid][_ngcontent-%COMP%], .app-form-control-invalid[invalid][_ngcontent-%COMP%]   .app-form-control-invalid[_ngcontent-%COMP%]{display:block}"]}),r})()}];let J=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.ez,b.Bz.forChild(N),C.F,b.Bz]}),r})()},5162:(I,T,m)=>{m.d(T,{c:()=>_});var g=m(6575),b=m(4860),C=m(6907),l=m(4135);class _{static sortData(e,n,u,o){return e&&e.length?(u=u||"string","DESC"!==o&&(o="ASC"),e.slice().sort((p,c)=>(p=(0,C.SX)(p,n),c=(0,C.SX)(c,n),"DESC"===o?this.comparator(c,p,u):this.comparator(p,c,u)))):e}static groupData(e,n){return(0,l.kJ)(e)&&e.length&&n?.length?e.reduce((u,o)=>{const p=o[n];return u[p]||(u[p]=[]),u[p].push(o),u},{}):e}static filterData(e,n){if(!((0,l.kJ)(e)&&e.length&&(0,l.kJ)(n)&&n.length))return e;n=n.map(o=>{if((0,l.HD)(o.value)&&o.value.length){let p;if("<>"===o.value.substring(0,2)){if(2===o.value.length)return o.value="",o;p=o.value.substring(0,2),o.value=o.value.substring(2)}else if("<"===o.value.substring(0,1)||">"===o.value.substring(0,1)){if(1===o.value.length)return o.value="",o;p=o.value.substring(0,1),o.value=o.value.substring(1)}p&&Object.defineProperty(o,"operator",{value:p})}return o.value=(""+o.value).toLowerCase(),o});const u=o=>n.every(p=>{if(!p.value.length)return!0;const c=(""+(0,C.SX)(o,p.key)).toLowerCase();if(!c.length)return!1;if(p.strict)return c===p.value;switch(p.operator){case"<>":return 0!==this.comparator(c,p.value,p.type);case">":return this.comparator(c,p.value,p.type)>0;case"<":return this.comparator(c,p.value,p.type)<0;default:return c.indexOf(p.value)>-1}});return e.filter(o=>u(o))}static comparator(e,n,u="string"){if(e==n)return 0;if(!(0,l.$K)(e))return-1;if(!(0,l.$K)(n))return 1;switch(u){case"boolean":return e?-1:1;case"date":if(e=new Date(e).getTime(),isNaN(e))return-1;if(n=new Date(n).getTime(),isNaN(n))return 1;break;case"number":if(e=parseFloat(e),isNaN(e))return-1;if(n=parseFloat(n),isNaN(n))return 1;break;default:return isNaN(parseFloat(e))||isNaN(parseFloat(n))?(""+e).localeCompare(""+n):(""+e).localeCompare(""+n,navigator.language,{numeric:!0})}return e<n?-1:e>n?1:0}static navigateBack(e,n,u){1===e.getState()?.navigationId?n.navigate(u):e.back()}static elementId(e){return e+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(e,n="MM/dd/yyyy"){return(0,l.$K)(e)?(0,g.p6)(e,n,navigator.language):""}static formatNumber(e,n="1.2-2"){return(0,g.uf)(e,navigator.language,n)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){const e={};if(window.location.search.length){const n=new b.LE({fromString:window.location.search.substring(1)});n.keys().forEach(u=>{const o=n.getAll(u);o.length&&Object.defineProperty(e,u.toLowerCase(),{value:1===o.length?o[0]:o,enumerable:!0,writable:!0})})}return e}static reduceObject(e){const n={};return Object.keys(e).forEach(u=>{(0,l.$K)(e[u])&&((0,l.kJ)(e[u])?e[u].length&&(n[u]=e[u]):(e[u]+"").trim().length&&(n[u]="string"==typeof e[u]?e[u].trim():e[u]))}),n}}},9016:(I,T,m)=>{m.d(T,{R:()=>o});var g=m(384),b=m(2235),C=m(9912),l=m(1287),_=m(2602),Z=m(7825);const e=["addListener","removeListener"],n=["addEventListener","removeEventListener"],u=["on","off"];function o(d,x,v,h){if((0,_.m)(v)&&(h=v,v=void 0),h)return o(d,x,v).pipe((0,Z.Z)(h));const[Q,P]=function E(d){return(0,_.m)(d.addEventListener)&&(0,_.m)(d.removeEventListener)}(d)?n.map(y=>M=>d[y](x,M,v)):function c(d){return(0,_.m)(d.addListener)&&(0,_.m)(d.removeListener)}(d)?e.map(p(d,x)):function B(d){return(0,_.m)(d.on)&&(0,_.m)(d.off)}(d)?u.map(p(d,x)):[];if(!Q&&(0,l.z)(d))return(0,C.z)(y=>o(y,x,v))((0,g.Xf)(d));if(!Q)throw new TypeError("Invalid event target");return new b.y(y=>{const M=(...A)=>y.next(1<A.length?A:A[0]);return Q(M),()=>P(M)})}function p(d,x){return v=>h=>d[v](x,h)}}}]);
//# sourceMappingURL=74.5d962e1f42097849.js.map