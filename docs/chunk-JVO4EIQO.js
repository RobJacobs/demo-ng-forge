import{Fb as w,Hb as S,Xa as s,Ya as F,hd as k,id as E,j as P,kc as T,lc as j,nd as L,od as z}from"./chunk-2RH24LFJ.js";import{Fb as M,Gb as O,Pb as p,Qb as b,Vb as x,Wb as I,_ as f,_a as r,ea as g,ja as u,lb as h,ob as c,sb as _,tb as C,ub as v,vb as y,wb as i,xb as a,yb as l}from"./chunk-6LYE5EFI.js";import"./chunk-NCBA65HR.js";var d=(()=>{class e{constructor(){this.iconOptions=Object.values(s).map(o=>({label:o.name,value:o.name,leadingIcon:o.name,leadingIconType:"component"})),F.define(Object.values(s))}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac})}}return e})();function R(e,m){if(e&1&&l(0,"forge-icon",3),e&2){let o=O();c("name",o.selectedIcon)}}function B(e,m){if(e&1&&(i(0,"div",8),l(1,"forge-icon",9),i(2,"div",10),p(3),a()()),e&2){let o=m.$implicit;r(),c("name",o.value),r(2),b(o.value)}}var Q=(()=>{class e{constructor(){this.cache=g(d),this.iconOptionFilter=(o,t)=>t?[this.cache.iconOptions?.find(n=>n.value===t)]:o.length?this.cache.iconOptions?.filter(n=>n.label.toLocaleLowerCase().includes(o.toLocaleLowerCase())).slice(0,100):this.cache.iconOptions?.slice(0,100)}onIconSelected(o){this.selectedIcon=this.cache.iconOptions?.find(t=>t.value===o)?.value}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=u({type:e,selectors:[["app-icons"]],standalone:!0,features:[x([d]),I],decls:12,vars:2,consts:[[1,"header"],["slot","start",1,"forge-typography--subheading4"],["slot","start",3,"forge-autocomplete-change","filter"],["slot","start",3,"name"],["type","text","aria-label","Filter icons","placeholder","Filter"],["slot","end","name","arrow_drop_down",1,"forge-dropdown-icon"],[1,"body"],[1,"body__icons"],[1,"icon"],["lazy","",3,"name"],[1,"forge-typography--label1"]],template:function(t,n){t&1&&(i(0,"forge-toolbar",0)(1,"h2",1),p(2,"Forge Icons - Standard"),a(),i(3,"forge-autocomplete",2),M("forge-autocomplete-change",function(A){return n.onIconSelected(A.detail)}),i(4,"forge-text-field"),h(5,R,1,1,"forge-icon",3),l(6,"input",4)(7,"forge-icon",5),a()()(),i(8,"div",6)(9,"div",7),v(10,B,4,2,"div",8,C),a()()),t&2&&(r(3),c("filter",n.iconOptionFilter),r(2),_(n.selectedIcon?5:-1),r(5),y(n.cache.iconOptions))},dependencies:[P,S,w,j,T,E,k,z,L],styles:[`[_nghost-%COMP%]{display:grid;grid-template-rows:auto 1fr;overflow:hidden}.header[_ngcontent-%COMP%]   forge-autocomplete[_ngcontent-%COMP%]{margin-left:24px}.header[_ngcontent-%COMP%]   forge-autocomplete[_ngcontent-%COMP%]   forge-text-field[_ngcontent-%COMP%]{--forge-field-height: 2.5rem;width:320px}.header[_ngcontent-%COMP%]   forge-autocomplete[_ngcontent-%COMP%]   forge-text-field[_ngcontent-%COMP%]::part(label){display:none}.body[_ngcontent-%COMP%]{overflow:auto;padding:24px}.body__icons[_ngcontent-%COMP%]{background-color:var(--forge-theme-surface);border-radius:var(--forge-shape-medium);border-color:var(--forge-theme-outline);box-shadow:var(--forge-elevation-1);display:grid;grid-template-columns:repeat(auto-fit,minmax(auto,160px));gap:16px;padding:16px 0;--forge-icon-font-size: 48px}.body__icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;word-break:break-all}.body__icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   forge-icon[_ngcontent-%COMP%]{margin-bottom:8px}






/*# sourceMappingURL=icons.component-MNO3M7ZE.css.map */`]})}}return e})();export{Q as IconsComponent};
//# sourceMappingURL=chunk-JVO4EIQO.js.map
