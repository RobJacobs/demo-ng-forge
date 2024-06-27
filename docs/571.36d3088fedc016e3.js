"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[571],{827:(m,v,i)=>{i.d(v,{D:()=>e});var c=i(8559),a=i(6443),l=i(3942),g=i(271),u=i(8758),t=i(123);let e=(()=>{class s{constructor(){this.httpClient=(0,c.WQX)(a.Qq)}getProfile(){return this.httpClient.get("mock-data/profile.json")}getPeople(r){return this.httpClient.get("mock-data/people.json").pipe((0,g.T)(o=>{let d=o.length;return r&&(r.filters?.length&&(d=(o=t.A.filterData(o,r.filters.map(f=>({key:f.property,value:f.value,strict:"gender"===f.property||"id"===f.property})))).length),r.sort&&(o=t.A.sortData(o,r.sort.property,"string",r.sort.direction)),(0,u.Et)(r.skip)&&(0,u.Et)(r.take)&&(o=o.slice(r.skip,r.skip+r.take))),{count:d,data:o}}))}getPerson(r){return this.httpClient.get("mock-data/people.json").pipe((0,g.T)(o=>o.find(d=>d.id.toString()===r.toString())))}getSearches(r){return new l.c(o=>{let d=localStorage.getItem(r);(0,u.O9)(d)&&(d=JSON.parse(d)),o.next(d),o.complete()})}saveSearches(r,o){return new l.c(d=>{localStorage.setItem(r,JSON.stringify(o)),d.next(!0),d.complete()})}getLongRequest(){return this.httpClient.get("http://localhost:5000/long-request")}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275prov=c.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},2575:(m,v,i)=>{i.d(v,{m:()=>s});var c=i(316),a=i(8559),l=i(4607),g=i(123);const u=[[["","app-dialog-header",""]],"*",[["","app-dialog-footer",""]]],t=["[app-dialog-header]","*","[app-dialog-footer]"];function e(n,r){1&n&&(a.j41(0,"forge-toolbar",5),a.SdG(1,2),a.k0s())}let s=(()=>{class n{constructor(){this.dialogRef=(0,a.WQX)(l.cez),this.id=g.A.elementId("app-"),this.showFooter=!0,this.dialogRef.nativeElement.setAttribute("aria-labelledby",`${this.id}--title`)}onClose(){this.dialogRef.close()}static#t=this.\u0275fac=function(d){return new(d||n)};static#e=this.\u0275cmp=a.VBU({type:n,selectors:[["app-dialog"]],inputs:{dialogTitle:"dialogTitle",showFooter:"showFooter"},standalone:!0,features:[a.aNF],ngContentSelectors:t,decls:10,vars:3,consts:[["slot","header",1,"header"],["slot","start",1,"forge-typography--heading4",3,"id"],["slot","end","aria-label","Close",1,"header__close",3,"click"],["name","close"],["slot","body",1,"body"],["slot","footer","inverted","true",1,"footer"]],template:function(d,f){1&d&&(a.NAR(u),a.j41(0,"forge-scaffold")(1,"forge-toolbar",0)(2,"h2",1),a.EFF(3),a.k0s(),a.SdG(4),a.j41(5,"forge-icon-button",2),a.bIt("click",function(){return f.onClose()}),a.nrm(6,"forge-icon",3),a.k0s()(),a.j41(7,"div",4),a.SdG(8,1),a.k0s(),a.DNE(9,e,2,0,"forge-toolbar",5),a.k0s()),2&d&&(a.R7$(2),a.Y8G("id",f.id+"--title"),a.R7$(),a.JRh(f.dialogTitle),a.R7$(6),a.vxM(9,f.showFooter?9:-1))},dependencies:[c.MD,l.nVi,l.xBz,l.RlV,l.vzf,l.g4r,l.A2P,l.N1z,l.H_6],styles:["\n\n\n\n\n[_nghost-%COMP%]{display:contents}.header__close[_ngcontent-%COMP%]{margin-right:-8px}.body[_ngcontent-%COMP%]{padding:16px}.footer[_ngcontent-%COMP%]::part(section-start), .footer[_ngcontent-%COMP%]::part(section-end){column-gap:16px}"]})}return n})()},7123:(m,v,i)=>{i.d(v,{W:()=>n});var c=i(8559),a=i(9074),l=i(8537),g=i(591),u=i(3037),t=i(9999),e=i(271),s=i(1817);let n=(()=>{class r{constructor(){this.destroyRef=(0,c.WQX)(c.abz),this.elementRef=(0,c.WQX)(c.aKT),this.renderer=(0,c.WQX)(c.sFG)}ngOnInit(){const d=(0,l.R)(this.elementRef.nativeElement,"focusout").pipe((0,g.c)(0)),f=this.control.statusChanges.pipe((0,u.Z)(this.control.status));(0,t.z)({event:d,status:f}).pipe((0,e.T)(_=>"INVALID"===_.status&&this.control.touched),(0,s.F)(),(0,a.pQ)(this.destroyRef)).subscribe(_=>{_?(this.renderer.setAttribute(this.elementRef.nativeElement,"invalid",""),this.renderer.addClass(this.elementRef.nativeElement,"app-form-control-invalid")):(this.renderer.removeAttribute(this.elementRef.nativeElement,"invalid"),this.renderer.removeClass(this.elementRef.nativeElement,"app-form-control-invalid"))})}static#t=this.\u0275fac=function(f){return new(f||r)};static#e=this.\u0275dir=c.FsC({type:r,selectors:[["","appFormControlInvalid",""]],inputs:{control:[c.Mj6.None,"appFormControlInvalid","control"]},standalone:!0})}return r})()},123:(m,v,i)=>{i.d(v,{A:()=>g});var c=i(316),a=i(6443),l=i(8758);class g{static sortData(t,e,s,n){return t&&t.length?(s=s||"string","DESC"!==n&&(n="ASC"),t.slice().sort((r,o)=>(r=(0,l.WB)(r,e),o=(0,l.WB)(o,e),"DESC"===n?this.comparator(o,r,s):this.comparator(r,o,s)))):t}static groupData(t,e){return(0,l.cy)(t)&&t.length&&e?.length?t.reduce((s,n)=>{const r=n[e];return s[r]||(s[r]=[]),s[r].push(n),s},{}):t}static filterData(t,e){if(!((0,l.cy)(t)&&t.length&&(0,l.cy)(e)&&e.length))return t;e=e.map(n=>{if((0,l.Kg)(n.value)&&n.value.length){let r;if("<>"===n.value.substring(0,2)){if(2===n.value.length)return n.value="",n;r=n.value.substring(0,2),n.value=n.value.substring(2)}else if("<"===n.value.substring(0,1)||">"===n.value.substring(0,1)){if(1===n.value.length)return n.value="",n;r=n.value.substring(0,1),n.value=n.value.substring(1)}r&&Object.defineProperty(n,"operator",{value:r})}return n.value=(""+n.value).toLowerCase(),n});const s=n=>e.every(r=>{if(!r.value.length)return!0;const o=(""+(0,l.WB)(n,r.key)).toLowerCase();if(!o.length)return!1;if(r.strict)return o===r.value;switch(r.operator){case"<>":return 0!==this.comparator(o,r.value,r.type);case">":return this.comparator(o,r.value,r.type)>0;case"<":return this.comparator(o,r.value,r.type)<0;default:return o.indexOf(r.value)>-1}});return t.filter(n=>s(n))}static comparator(t,e,s="string"){if(t==e)return 0;if(!(0,l.O9)(t))return-1;if(!(0,l.O9)(e))return 1;switch(s){case"boolean":return t?-1:1;case"date":if(t=new Date(t).getTime(),isNaN(t))return-1;if(e=new Date(e).getTime(),isNaN(e))return 1;break;case"number":if(t=parseFloat(t),isNaN(t))return-1;if(e=parseFloat(e),isNaN(e))return 1;break;default:return isNaN(parseFloat(t))||isNaN(parseFloat(e))?(""+t).localeCompare(""+e,navigator.language,{sensitivity:"base"}):(""+t).localeCompare(""+e,navigator.language,{numeric:!0})}return t<e?-1:t>e?1:0}static navigateBack(t,e,s){1===t.getState()?.navigationId?e.navigate(s):t.back()}static elementId(t){return t+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(t,e="MM/dd/yyyy"){return(0,l.O9)(t)?(0,c.Yq)(t,e,navigator.language):""}static formatNumber(t,e="1.2-2"){return(0,c.ZV)(t,navigator.language,e)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){const t={},e=window.location.href.indexOf("?");if(-1!==e){const s=new a.Nl({fromString:window.location.href.substring(e)});s.keys().forEach(n=>{const r=s.getAll(n);r.length&&Object.defineProperty(t,n.toLowerCase(),{value:1===r.length?r[0]:r,enumerable:!0,writable:!0})})}return t}static reduceObject(t){const e={};return Object.keys(t).forEach(s=>{(0,l.O9)(t[s])&&((0,l.cy)(t[s])?t[s].length&&(e[s]=t[s]):(t[s]+"").trim().length&&(e[s]="string"==typeof t[s]?t[s].trim():t[s]))}),e}}},8537:(m,v,i)=>{i.d(v,{R:()=>r});var c=i(2645),a=i(3942),l=i(1365),g=i(8830),u=i(1530),t=i(8067);const e=["addListener","removeListener"],s=["addEventListener","removeEventListener"],n=["on","off"];function r(h,E,p,O){if((0,u.T)(p)&&(O=p,p=void 0),O)return r(h,E,p).pipe((0,t.I)(O));const[P,y]=function _(h){return(0,u.T)(h.addEventListener)&&(0,u.T)(h.removeEventListener)}(h)?s.map(D=>M=>h[D](E,M,p)):function d(h){return(0,u.T)(h.addListener)&&(0,u.T)(h.removeListener)}(h)?e.map(o(h,E)):function f(h){return(0,u.T)(h.on)&&(0,u.T)(h.off)}(h)?n.map(o(h,E)):[];if(!P&&(0,g.X)(h))return(0,l.Z)(D=>r(D,E,p))((0,c.Tg)(h));if(!P)throw new TypeError("Invalid event target");return new a.c(D=>{const M=(...C)=>D.next(1<C.length?C:C[0]);return P(M),()=>y(M)})}function o(h,E){return p=>O=>h[p](E,O)}},4581:(m,v,i)=>{i.d(v,{O:()=>u});var c=i(3942),a=i(8473),l=i(9397);function u(t=0,e,s=a.b){let n=-1;return null!=e&&((0,l.m)(e)?s=e:n=e),new c.c(r=>{let o=function g(t){return t instanceof Date&&!isNaN(t)}(t)?+t-s.now():t;o<0&&(o=0);let d=0;return s.schedule(function(){r.closed||(r.next(d++),0<=n?this.schedule(void 0,n):r.complete())},o)})}},591:(m,v,i)=>{i.d(v,{c:()=>f});var c=i(8473),a=i(3513),l=i(4334),g=i(819),u=i(1687),t=i(4318),s=i(7378),n=i(1365),r=i(2645);function o(_,h){return h?E=>(0,a.x)(h.pipe((0,l.s)(1),function e(){return(0,g.N)((_,h)=>{_.subscribe((0,u._)(h,t.l))})}()),E.pipe(o(_))):(0,n.Z)((E,p)=>(0,r.Tg)(_(E,p)).pipe((0,l.s)(1),(0,s.u)(E)))}var d=i(4581);function f(_,h=c.E){const E=(0,d.O)(_,h);return o(()=>E)}},1817:(m,v,i)=>{i.d(v,{F:()=>g});var c=i(1440),a=i(819),l=i(1687);function g(t,e=c.D){return t=t??u,(0,a.N)((s,n)=>{let r,o=!0;s.subscribe((0,l._)(n,d=>{const f=e(d);(o||!t(r,f))&&(o=!1,r=f,n.next(d))}))})}function u(t,e){return t===e}},428:(m,v,i)=>{i.d(v,{R:()=>u});var c=i(7092);class a extends c.yU{constructor(e,s){super()}schedule(e,s=0){return this}}const l={setInterval(t,e,...s){const{delegate:n}=l;return n?.setInterval?n.setInterval(t,e,...s):setInterval(t,e,...s)},clearInterval(t){const{delegate:e}=l;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var g=i(967);class u extends a{constructor(e,s){super(e,s),this.scheduler=e,this.work=s,this.pending=!1}schedule(e,s=0){var n;if(this.closed)return this;this.state=e;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,s)),this.pending=!0,this.delay=s,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(o,this.id,s),this}requestAsyncId(e,s,n=0){return l.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,s,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return s;null!=s&&l.clearInterval(s)}execute(e,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,s);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,s){let r,n=!1;try{this.work(e)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:e,scheduler:s}=this,{actions:n}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,g.o)(n,this),null!=e&&(this.id=this.recycleAsyncId(s,e,null)),this.delay=null,super.unsubscribe()}}}},9576:(m,v,i)=>{i.d(v,{q:()=>l});var c=i(5152);class a{constructor(u,t=a.now){this.schedulerActionCtor=u,this.now=t}schedule(u,t=0,e){return new this.schedulerActionCtor(this,u).schedule(e,t)}}a.now=c.U.now;class l extends a{constructor(u,t=a.now){super(u,t),this.actions=[],this._active=!1}flush(u){const{actions:t}=this;if(this._active)return void t.push(u);let e;this._active=!0;do{if(e=u.execute(u.state,u.delay))break}while(u=t.shift());if(this._active=!1,e){for(;u=t.shift();)u.unsubscribe();throw e}}}},8473:(m,v,i)=>{i.d(v,{E:()=>l,b:()=>g});var c=i(428);const l=new(i(9576).q)(c.R),g=l},5152:(m,v,i)=>{i.d(v,{U:()=>c});const c={now:()=>(c.delegate||Date).now(),delegate:void 0}}}]);
//# sourceMappingURL=571.36d3088fedc016e3.js.map