import"./chunk-KMD4IYCX.js";import{a as te}from"./chunk-VRNZWRAB.js";import{a as y,c as Tt}from"./chunk-GLQJZZJZ.js";import{$ as ie,Aa as Be,Ac as xt,B as Y,Ba as Ee,Bc as yt,C as ee,Ca as Le,Cb as nt,Da as Ae,Db as it,E as oe,Ea as Fe,Eb as at,Fa as Oe,Fb as lt,Ga as Pe,Gb as rt,Ha as Re,Ia as ke,Ja as De,Ka as Ue,La as je,Ma as Ne,Na as We,Oa as $e,Ob as pt,Pa as qe,Pb as E,Qa as Ke,Qc as Mt,Ra as Ze,Rc as zt,Sa as Ge,Ta as Je,Ua as Qe,Va as Xe,Wa as Ye,Xa as et,Ya as tt,_ as ne,_a as ot,aa as ae,ba as le,ca as re,d as W,da as pe,ea as ce,f as b,fa as se,ga as me,ha as he,ia as de,j as w,ja as ve,ka as ge,kc as ct,la as ue,lc as st,ma as _e,mc as C,na as fe,nc as x,oa as we,oc as mt,pa as Ce,pc as ht,q as $,qa as xe,r as q,ra as ye,rd as It,s as K,sa as Me,sc as dt,sd as Ht,t as Z,ta as ze,tc as vt,ua as Ie,uc as gt,v as G,va as He,vc as ut,w as J,wa as Te,wc as _t,x as Q,xa as Ve,xc as ft,y as X,ya as Se,yc as wt,z as B,za as be,zc as Ct}from"./chunk-CNI7K2GC.js";import{Ab as r,Da as V,Ea as k,Eb as d,F as L,Fb as A,Gb as F,Hb as O,Ib as a,Jb as c,Kb as m,Nb as f,Ob as I,Rb as u,Sb as p,_a as l,ac as g,ba as R,bc as H,cc as U,dc as j,ha as h,hb as _,kc as S,lc as N,pb as D,rc as T,sa as M,ta as z,yb as s}from"./chunk-5VCAQWVT.js";import"./chunk-NCBA65HR.js";var Vt=(()=>{class e{constructor(){this.appCache=h(y)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var St=[{path:"dashboard",loadComponent:()=>import("./chunk-NZMRJ4QL.js").then(e=>e.DashboardComponent)},{path:"profile",loadChildren:()=>import("./chunk-NRTPOQCV.js").then(e=>e.PROFILE_ROUTES)},{path:"people",loadChildren:()=>import("./chunk-L3ACB2JL.js").then(e=>e.PEOPLE_ROUTES)},{path:"test",loadChildren:()=>import("./chunk-U4B2HUPX.js").then(e=>e.TEST_ROUTES)},{path:"pets",providers:[{provide:te,useExisting:Vt}],loadChildren:()=>import("./chunk-ASJ2OCVV.js").then(e=>e.PETS_ROUTES)},{path:"search",loadComponent:()=>import("./chunk-B54727NM.js").then(e=>e.SearchComponent)},{path:"query-builder",loadComponent:()=>import("./chunk-H5F474CW.js").then(e=>e.QueryBuilderComponent)},{path:"icons",loadComponent:()=>import("./chunk-KY2CWC2Q.js").then(e=>e.IconsComponent)},{path:"examples",loadChildren:()=>import("./chunk-5AEWX3CT.js").then(e=>e.EXAMPLES_ROUTES)},{path:"formly-demo",loadChildren:()=>import("./chunk-H5RJ45DV.js").then(e=>e.FormlyDemoModule)},{path:"table-demo",loadComponent:()=>import("./chunk-YDQR7DX6.js").then(e=>e.TableDemoComponent)},{path:"ag-grid-demo",loadComponent:()=>import("./chunk-JJYVFL62.js").then(e=>e.AgGridDemoComponent)},{path:"storage",loadComponent:()=>import("./chunk-3ETY4M4Y.js").then(e=>e.StorageComponent)},{path:"imask",loadComponent:()=>import("./chunk-Y2PKQJJI.js").then(e=>e.ImaskComponent)},{path:"charts",loadComponent:()=>import("./chunk-EOMJ3RUG.js").then(e=>e.ChartsComponent)},{path:"text-edit",loadComponent:()=>import("./chunk-KFWETXLN.js").then(e=>e.TextEditorComponent)},{path:"pdf-viewer",loadComponent:()=>import("./chunk-WP4UZN74.js").then(e=>e.PdfViewerDemoComponent)},{path:"css-variables",loadComponent:()=>import("./chunk-XUIFRUYM.js").then(e=>e.CssVariablesComponent)},{path:"",redirectTo:"dashboard",pathMatch:"full"}];var bt=[{provide:$,useClass:Tt,multi:!0}];function kt(){return()=>new Promise(e=>{window.setTimeout(()=>{e()},1e3)})}var Bt={providers:[q(K()),Y(St,ee()),D(kt()),bt]};function Dt(e,i){e&1&&m(0,"forge-linear-progress",5)}var Lt=(()=>{class e{constructor(){this.appCache=h(y)}onThemeChange(){this.appCache.theme==="light"?(this.appCache.theme="dark",document.body.classList.add("forge-theme-dark")):(this.appCache.theme="light",document.body.classList.remove("forge-theme-dark")),localStorage.setItem(this.appCache.storageKey,JSON.stringify({theme:this.appCache.theme}))}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-header"]],decls:7,vars:2,consts:[["title-text","Demo Angular & Forge components","type","static","raised","true"],["slot","logo","name","tyler_talking_t_logo"],["slot","end","aria-label","Toggle theme",3,"click"],[3,"name"],["slot","end"],["determinate","false"]],template:function(o,n){o&1&&(a(0,"forge-app-bar",0),m(1,"forge-icon",1),a(2,"forge-icon-button",2),u("click",function(){return n.onThemeChange()}),m(3,"forge-icon",3),c(),a(4,"forge-tooltip",4),H(5,"Toggle theme"),c()(),s(6,Dt,1,0,"forge-linear-progress",5)),o&2&&(l(3),r("name",n.appCache.theme==="dark"?"wb_sunny":"nightlight_round"),l(3),d(n.appCache.isBusy()?6:-1))},dependencies:[w,rt,lt,x,C,ht,mt,vt,dt,Ht,It],styles:[`[_nghost-%COMP%]{display:block;position:relative}forge-linear-progress[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;z-index:10}
/*# sourceMappingURL=header.component-4VTDO35O.css.map */`]})}}return e})();var jt=(e,i)=>({option:e,index:i}),Nt=e=>({option:e});function Wt(e,i){e&1&&f(0)}function $t(e,i){if(e&1&&s(0,Wt,1,0,"ng-container",3),e&2){let t=i.$implicit,o=i.$index;p();let n=g(5),v=g(7);r("ngTemplateOutlet",t.options!=null&&t.options.length?v:n)("ngTemplateOutletContext",N(2,jt,t,o))}}function qt(e,i){if(e&1&&(m(0,"forge-icon",6),a(1,"button",5),H(2),c()),e&2){let t=p().option;r("name",t.icon),l(2),j(" ",t.label," ")}}function Kt(e,i){if(e&1&&(a(0,"button",5),m(1,"forge-icon",7),c()),e&2){let t=p().option;l(),r("name",t.icon)}}function Zt(e,i){if(e&1&&(a(0,"forge-list-item",4),s(1,qt,3,2)(2,Kt,2,1,"button",5),c()),e&2){let t,o=i.option,n=p();r("value",o.value)("selected",o.value===n.selectedValue()[0]||o.value===((t=n.selectedValue())==null?null:t.join("/"))),l(),d(n.open()?1:2)}}function Gt(e,i){if(e&1&&m(0,"forge-icon",6),e&2){let t=p(2).option;r("name",t.icon)}}function Jt(e,i){e&1&&f(0)}function Qt(e,i){if(e&1&&s(0,Jt,1,0,"ng-container",3),e&2){let t=i.$implicit;p(3);let o=g(5),n=g(7);r("ngTemplateOutlet",t.options!=null&&t.options.length?n:o)("ngTemplateOutletContext",S(2,Nt,t))}}function Xt(e,i){if(e&1&&(a(0,"forge-expansion-panel")(1,"forge-list-item",9),s(2,Gt,1,1,"forge-icon",6),a(3,"span"),H(4),c(),m(5,"forge-open-icon",10),c(),a(6,"forge-list",11),F(7,Qt,1,4,"ng-container",null,A),c()()),e&2){let t=p().option;l(2),d(t.icon?2:-1),l(2),U(t.label),l(3),O(t.options)}}function Yt(e,i){if(e&1&&m(0,"forge-icon",6),e&2){let t=p(2).option;r("name",t.icon)}}function eo(e,i){if(e&1){let t=I();a(0,"forge-menu",12),u("forge-menu-select",function(n){M(t);let v=p(2);return z(v.menuItemSelected(n.detail.value))}),a(1,"forge-list-item",4),s(2,Yt,1,1,"forge-icon",6),c()()}if(e&2){let t,o=p().option,n=p();r("options",o.options),l(),r("value",o.value)("selected",o.value===((t=n.selectedValue())==null?null:t.join("/"))),l(),d(o.icon?2:-1)}}function to(e,i){if(e&1&&s(0,Xt,9,2,"forge-expansion-panel")(1,eo,3,4,"forge-menu",8),e&2){let t=p();d(t.open()?0:1)}}var At=(()=>{class e{constructor(){this.router=h(B),this.options=V(),this.open=V(!0),this.selectedValue=V()}menuItemSelected(t){oe(t)&&this.router.navigate([t])}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-menu"]],inputs:{options:[1,"options"],open:[1,"open"],selectedValue:[1,"selectedValue"]},decls:8,vars:0,consts:[["itemTemplate",""],["itemExpanderTemplate",""],["navlist","",1,"menu",3,"forge-list-item-select"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"menu__item",3,"value","selected"],["type","button"],["slot","start",3,"name"],[3,"name"],["placement","right-start",3,"options"],["slot","header",1,"menu__item","menu__item--expander"],["slot","end"],[1,"menu__item","menu__item--nested"],["placement","right-start",3,"forge-menu-select","options"]],template:function(o,n){if(o&1){let v=I();a(0,"nav")(1,"forge-list",2),u("forge-list-item-select",function(Rt){return M(v),z(n.menuItemSelected(Rt.detail.value))}),F(2,$t,1,5,"ng-container",null,A),c()(),s(4,Zt,3,3,"ng-template",null,0,T)(6,to,2,1,"ng-template",null,1,T)}o&2&&(l(2),O(n.options()))},dependencies:[w,b,E,at,it,nt,x,C,_t,ut,ft,gt,Ct,wt],styles:[`[_nghost-%COMP%]{display:block}.menu[_ngcontent-%COMP%]   forge-menu[_ngcontent-%COMP%]{cursor:pointer}.menu__item[_ngcontent-%COMP%]{--forge-list-padding: 0}.menu__item--nested[_ngcontent-%COMP%]{margin-left:16px}






/*# sourceMappingURL=menu.component-BCA26R7Z.css.map */`]})}}return e})();var oo=e=>({"menu-expander--open":e});function no(e,i){e&1&&f(0)}function io(e,i){if(e&1&&(a(0,"forge-drawer",2),s(1,no,1,0,"ng-container",4),c()),e&2){p();let t=g(7);l(),r("ngTemplateOutlet",t)}}function ao(e,i){e&1&&f(0)}function lo(e,i){if(e&1&&(a(0,"forge-mini-drawer",2),s(1,ao,1,0,"ng-container",4),c()),e&2){p();let t=g(7);l(),r("ngTemplateOutlet",t)}}function ro(e,i){if(e&1){let t=I();m(0,"app-menu",5),a(1,"forge-button",6),u("click",function(){M(t);let n=p();return z(n.expand())}),m(2,"forge-icon",7),c()}if(e&2){let t=p();r("options",t.appCache.menu.options)("open",t.appCache.menu.open)("selectedValue",t.appCache.activeRoute),l(),r("ngClass",S(5,oo,t.appCache.menu.open)),l(),r("name",t.appCache.menu.open?"chevron_left":"chevron_right")}}var Ft=(()=>{class e{constructor(){this.router=h(B),this.route=h(Q),this.elementRef=h(k),this.appCache=h(y),this.initRouteWatch(),this.initLayoutWatch()}expand(){this.appCache.menu.open=!this.appCache.menu.open,this.appCache.menu.open||this.elementRef.nativeElement.querySelectorAll("forge-expansion-panel").forEach(t=>t.open=!1)}initRouteWatch(){this.router.events.pipe(L(t=>t instanceof J)).subscribe(()=>{let t=[],o=n=>{n.url.length&&t.push(n.url[0].path),n.children&&n.children.forEach(v=>o(v))};o(this.route.snapshot),this.appCache.activeRoute=t}),this.router.events.pipe(L(t=>t instanceof G)).subscribe(()=>{this.appCache.cancelHttpRequests.next()})}initLayoutWatch(){let t=()=>{document.body.classList.remove("app--layout-sm","app--layout-md","app--layout-lg"),window.innerWidth<=600?(this.appCache.layoutMode="sm",this.appCache.menu.open=!1):window.innerWidth<=960?this.appCache.layoutMode="md":this.appCache.layoutMode="lg",document.body.classList.add(`app--layout-${this.appCache.layoutMode}`)};window.matchMedia("(max-width: 600px)").addEventListener("change",()=>{t()}),window.matchMedia("(max-width: 960px)").addEventListener("change",()=>{t()}),window.requestAnimationFrame(()=>t())}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-root"]],decls:8,vars:1,consts:[["menuTemplate",""],["slot","header"],["slot","body-left"],["id","app--main-content","tabindex","-1","slot","body",1,"app-content"],[4,"ngTemplateOutlet"],[3,"options","open","selectedValue"],["slot","footer","aria-label","Toggle menu",1,"menu-expander",3,"click","ngClass"],[3,"name"]],template:function(o,n){o&1&&(a(0,"forge-scaffold"),m(1,"app-header",1),s(2,io,2,1,"forge-drawer",2)(3,lo,2,1,"forge-mini-drawer",2),a(4,"div",3),m(5,"router-outlet"),c()(),s(6,ro,3,7,"ng-template",null,0,T)),o&2&&(l(2),d(n.appCache.menu.open?2:3))},dependencies:[X,w,W,b,zt,Mt,st,ct,E,pt,x,C,yt,xt,Lt,At],styles:[`[_nghost-%COMP%]{display:block}[slot=body][_ngcontent-%COMP%]{display:grid;background-color:var(--forge-theme-surface-dim)}.menu-expander[_ngcontent-%COMP%]{--forge-button-height: 3rem}.menu-expander--open[_ngcontent-%COMP%]   forge-icon[_ngcontent-%COMP%]{margin-left:auto;margin-right:8px}






/*# sourceMappingURL=app.component-5IPMY3E6.css.map */`]})}}return e})();var Ot={name:"tyler_talking_t_logo",data:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.5 7.9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S3 10.2 3 9.4s.7-1.5 1.5-1.5M7 10.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m2.5 2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S8 15.2 8 14.4s.7-1.5 1.5-1.5m0 5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S8 20.2 8 19.4s.7-1.5 1.5-1.5m2.5-2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m2.5-2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m-5-5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S8 10.2 8 9.4s.7-1.5 1.5-1.5M12 5.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m2.5 2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m2.5 2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m2.5 2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5m-5-10c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5S13 5.2 13 4.4s.7-1.5 1.5-1.5m3 13c0 .3-.3.6-.6.6s-.6-.3-.6-.6.3-.6.6-.6.6.3.6.6zm-.1 0c0-.3-.2-.5-.5-.5s-.5.2-.5.5.2.5.5.5.5-.2.5-.5zm-.6.4l-.1-.7h.3c.2 0 .2.1.2.2s-.1.2-.2.2l.2.3h-.1l-.2-.3h-.1v.3zm.1-.4c.1 0 .2 0 .2-.1s-.1-.1-.2-.1h-.2v.2h.2z"/></svg>'};var po=[pe,Ie,$e,Re,qe,ye,Ae,Ue,Ze,ue,Ee,He,ae,ie,se,Ve,ze,ge,we,Xe,Ce,xe,Me,ke,ne,be,Be,Pe,Oe,Te,Ge,Se,Ne,je,he,Ye,We,Qe,ce,me,Je,De,Fe,ve,de,Ke,re,et,tt,Le,le,fe,_e],co=[Ot],Pt=()=>{ot.define([...po,...co])};Pt();window.TylerForgeGlobalConfiguration={"forge-field":{labelPosition:"block-start"}};Z(Ft,Bt).catch(e=>console.error(e));
//# sourceMappingURL=main-GEJRMEAN.js.map
