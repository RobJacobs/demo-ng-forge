import{o as c}from"./chunk-TDRYUBHM.js";import{$ as l,M as o,f as i,fa as s,hb as r}from"./chunk-UO34YWUS.js";var n=(()=>{class e{constructor(){this.isBusy=r(!1),this.storageKey="demo-ng-forge--app",this.theme="light",this.layoutMode="lg",this.menu={open:!0,options:[{label:"Dashboard",value:"dashboard",icon:"home"},{label:"Profile",value:"profile",icon:"person"},{label:"People",value:"people",icon:"list_alt"},{label:"Pets",value:"pets",icon:"pets"},{label:"Test",icon:"child_friendly",options:[{label:"Parent",value:"test/parent",icon:"home",leadingIconType:"component"},{label:"Child",value:"test/child",icon:"person",leadingIconType:"component"}]},{label:"Search",value:"search",icon:"search"},{label:"Query Builder",value:"query-builder",icon:"category"},{label:"Icons",value:"icons",icon:"star"},{label:"CSS Variables",value:"css-variables",icon:"adjust"},{label:"Examples",icon:"directions",options:[{label:"Autocomplete",value:"examples/autocomplete"},{label:"Drag Drop",value:"examples/drag-drop"},{label:"Select",value:"examples/select"},{label:"Binding",value:"examples/binding"},{label:"Misc",value:"examples/misc"}]},{label:"Formly",value:"formly-demo",icon:"article"},{label:"Table",value:"table-demo",icon:"table_rows"},{label:"AG Grid",value:"ag-grid-demo",icon:"table_rows"},{label:"Storage",value:"storage",icon:"storage"},{label:"IMask",value:"imask",icon:"masks"},{label:"Charts",value:"charts",icon:"bar_chart"},{label:"Text Edit",value:"text-edit",icon:"auto_stories"},{label:"PDF Viewer",value:"pdf-viewer",icon:"picture_as_pdf"}]},this.activeRoute=[],this.cancelHttpRequests=new i}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var u=new c(()=>!1),I=(()=>{class e{constructor(){this.appCache=s(n),this.activeRequests=0}intercept(a,t){return a.context.get(u)?(this.activeRequests===0&&this.appCache.isBusy.set(!0),this.activeRequests++,t.handle(a).pipe(o(()=>{this.activeRequests--,this.activeRequests===0&&this.appCache.isBusy.set(!1)}))):t.handle(a)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=l({token:e,factory:e.\u0275fac})}}return e})();export{n as a,u as b,I as c};
//# sourceMappingURL=chunk-JWSBDH3Q.js.map
