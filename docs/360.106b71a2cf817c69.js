"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[360],{8360:(f,g,l)=>{l.r(g),l.d(g,{CssVariablesComponent:()=>c});var h=l(316),n=l(496),u=l(8758),_=l(9877),s=l(4607),e=l(8559);let c=(()=>{class i{constructor(){this.globalCssVariables=[],this.recordset=this.globalCssVariables,this.tableColumns=[{property:"name",header:"Name"},{header:"Color",width:48,align:_.uP.Center,template:(o,r,t)=>{if(t.value.startsWith("#")&&7===t.value.length||t.value.startsWith("rgba")){const a=document.createElement("div");a.style.height="32px",a.style.width="32px",a.style.backgroundColor=t.value,r.appendChild(a)}return""}},{property:"value",header:"Value"}],this.variableFilter="",this.onFilter=(0,u.sg)(()=>{this.recordset=this.globalCssVariables.filter(o=>o.name.includes(this.variableFilter))},500)}ngOnInit(){Array.from(document.styleSheets).forEach(o=>{try{Array.from(o.cssRules).filter(r=>r.cssText.startsWith(":root")).forEach(r=>{this.globalCssVariables.push(...r.cssText.split("{")[1].replace("}","").split(";").map(t=>t.trim()).filter(t=>t.startsWith("--forge")).map(t=>{const a=t.split(":");return{name:a[0].trim(),value:a[1].trim()}}))})}catch{}}),this.recordset=this.globalCssVariables}static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-css-variables"]],standalone:!0,features:[e.aNF],decls:8,vars:3,consts:[[1,"header"],["slot","start",1,"forge-typography--subheading4"],["slot","start"],["type","text","placeholder","Filter","aria-label","Filter variables",3,"ngModelChange","input","ngModel"],[1,"body"],[1,"body__table"],[3,"columnConfigurations","data"]],template:function(r,t){1&r&&(e.j41(0,"forge-toolbar",0)(1,"h2",1),e.EFF(2,"Forge CSS Variables"),e.k0s(),e.j41(3,"forge-text-field",2)(4,"input",3),e.mxI("ngModelChange",function(d){return e.DH7(t.variableFilter,d)||(t.variableFilter=d),d}),e.bIt("input",function(){return t.onFilter()}),e.k0s()()(),e.j41(5,"div",4)(6,"div",5),e.nrm(7,"forge-table",6),e.k0s()()),2&r&&(e.R7$(4),e.R50("ngModel",t.variableFilter),e.R7$(3),e.Y8G("columnConfigurations",t.tableColumns)("data",t.recordset))},dependencies:[h.MD,n.YN,n.me,n.BC,n.vS,s.eqj,s.Or1,s.xYY,s.LHr,s.N1z,s.H_6],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden}.header[_ngcontent-%COMP%]   forge-text-field[_ngcontent-%COMP%]{margin-left:24px;--forge-field-height: 2.5rem;width:320px}.header[_ngcontent-%COMP%]   forge-text-field[_ngcontent-%COMP%]::part(label){display:none}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}.body__table[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border-color:var(--forge-theme-outline);box-shadow:var(--forge-elevation-1)}"]})}return i})()}}]);
//# sourceMappingURL=360.106b71a2cf817c69.js.map