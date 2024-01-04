"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[523],{5162:(A,R,d)=>{d.d(R,{c:()=>v});var w=d(6575),l=d(4860),p=d(6907),C=d(4135);class v{static sortData(r,c,n,s){return r&&r.length?(n=n||"string","DESC"!==s&&(s="ASC"),r.slice().sort((u,f)=>(u=(0,p.SX)(u,c),f=(0,p.SX)(f,c),"DESC"===s?this.comparator(f,u,n):this.comparator(u,f,n)))):r}static groupData(r,c){return(0,C.kJ)(r)&&r.length&&c?.length?r.reduce((n,s)=>{const u=s[c];return n[u]||(n[u]=[]),n[u].push(s),n},{}):r}static filterData(r,c){if(!((0,C.kJ)(r)&&r.length&&(0,C.kJ)(c)&&c.length))return r;c=c.map(s=>{if((0,C.HD)(s.value)&&s.value.length){let u;if("<>"===s.value.substring(0,2)){if(2===s.value.length)return s.value="",s;u=s.value.substring(0,2),s.value=s.value.substring(2)}else if("<"===s.value.substring(0,1)||">"===s.value.substring(0,1)){if(1===s.value.length)return s.value="",s;u=s.value.substring(0,1),s.value=s.value.substring(1)}u&&Object.defineProperty(s,"operator",{value:u})}return s.value=(""+s.value).toLowerCase(),s});const n=s=>c.every(u=>{if(!u.value.length)return!0;const f=(""+(0,p.SX)(s,u.key)).toLowerCase();if(!f.length)return!1;if(u.strict)return f===u.value;switch(u.operator){case"<>":return 0!==this.comparator(f,u.value,u.type);case">":return this.comparator(f,u.value,u.type)>0;case"<":return this.comparator(f,u.value,u.type)<0;default:return f.indexOf(u.value)>-1}});return r.filter(s=>n(s))}static comparator(r,c,n="string"){if(r==c)return 0;if(!(0,C.$K)(r))return-1;if(!(0,C.$K)(c))return 1;switch(n){case"boolean":return r?-1:1;case"date":if(r=new Date(r).getTime(),isNaN(r))return-1;if(c=new Date(c).getTime(),isNaN(c))return 1;break;case"number":if(r=parseFloat(r),isNaN(r))return-1;if(c=parseFloat(c),isNaN(c))return 1;break;default:return isNaN(parseFloat(r))||isNaN(parseFloat(c))?(""+r).localeCompare(""+c):(""+r).localeCompare(""+c,navigator.language,{numeric:!0})}return r<c?-1:r>c?1:0}static navigateBack(r,c,n){1===r.getState()?.navigationId?c.navigate(n):r.back()}static elementId(r){return r+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(r,c="MM/dd/yyyy"){return(0,C.$K)(r)?(0,w.p6)(r,c,navigator.language):""}static formatNumber(r,c="1.2-2"){return(0,w.uf)(r,navigator.language,c)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){const r={};if(window.location.search.length){const c=new l.LE({fromString:window.location.search.substring(1)});c.keys().forEach(n=>{const s=c.getAll(n);s.length&&Object.defineProperty(r,n.toLowerCase(),{value:1===s.length?s[0]:s,enumerable:!0,writable:!0})})}return r}static reduceObject(r){const c={};return Object.keys(r).forEach(n=>{(0,C.$K)(r[n])&&((0,C.kJ)(r[n])?r[n].length&&(c[n]=r[n]):(r[n]+"").trim().length&&(c[n]="string"==typeof r[n]?r[n].trim():r[n]))}),c}}},9016:(A,R,d)=>{d.d(R,{R:()=>s});var w=d(384),l=d(2235),p=d(9912),C=d(1287),v=d(2602),m=d(7825);const r=["addListener","removeListener"],c=["addEventListener","removeEventListener"],n=["on","off"];function s(b,T,I,V){if((0,v.m)(I)&&(V=I,I=void 0),V)return s(b,T,I).pipe((0,m.Z)(V));const[z,W]=function O(b){return(0,v.m)(b.addEventListener)&&(0,v.m)(b.removeEventListener)}(b)?c.map(P=>_=>b[P](T,_,I)):function f(b){return(0,v.m)(b.addListener)&&(0,v.m)(b.removeListener)}(b)?r.map(u(b,T)):function y(b){return(0,v.m)(b.on)&&(0,v.m)(b.off)}(b)?n.map(u(b,T)):[];if(!z&&(0,C.z)(b))return(0,p.z)(P=>s(P,T,I))((0,w.Xf)(b));if(!z)throw new TypeError("Invalid event target");return new l.y(P=>{const _=(...x)=>P.next(1<x.length?x:x[0]);return z(_),()=>W(_)})}function u(b,T){return I=>V=>b[I](T,V)}},530:(A,R,d)=>{d.d(R,{H:()=>v});var w=d(2235),l=d(7777),p=d(7426);function v(m=0,r,c=l.P){let n=-1;return null!=r&&((0,p.K)(r)?c=r:n=r),new w.y(s=>{let u=function C(m){return m instanceof Date&&!isNaN(m)}(m)?+m-c.now():m;u<0&&(u=0);let f=0;return c.schedule(function(){s.closed||(s.next(f++),0<=n?this.schedule(void 0,n):s.complete())},u)})}},9422:(A,R,d)=>{d.d(R,{G:()=>p});var w=d(4114),l=d(5678);function p(){return(0,w.e)((C,v)=>{let m,r=!1;C.subscribe((0,l.x)(v,c=>{const n=m;m=c,r&&v.next([n,c]),r=!0}))})}},3149:(A,R,d)=>{d.d(R,{d:()=>v});var w=d(9877),l=d(6926);class p extends w.x{constructor(r=1/0,c=1/0,n=l.l){super(),this._bufferSize=r,this._windowTime=c,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=c===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,c)}next(r){const{isStopped:c,_buffer:n,_infiniteTimeWindow:s,_timestampProvider:u,_windowTime:f}=this;c||(n.push(r),!s&&n.push(u.now()+f)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const c=this._innerSubscribe(r),{_infiniteTimeWindow:n,_buffer:s}=this,u=s.slice();for(let f=0;f<u.length&&!r.closed;f+=n?1:2)r.next(u[f]);return this._checkFinalizedStatuses(r),c}_trimBuffer(){const{_bufferSize:r,_timestampProvider:c,_buffer:n,_infiniteTimeWindow:s}=this,u=(s?1:2)*r;if(r<1/0&&u<n.length&&n.splice(0,n.length-u),!s){const f=c.now();let y=0;for(let O=1;O<n.length&&n[O]<=f;O+=2)y=O;y&&n.splice(0,y+1)}}}var C=d(5584);function v(m,r,c){let n,s=!1;return m&&"object"==typeof m?({bufferSize:n=1/0,windowTime:r=1/0,refCount:s=!1,scheduler:c}=m):n=m??1/0,(0,C.B)({connector:()=>new p(n,r,c),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}},857:(A,R,d)=>{d.d(R,{o:()=>v});var w=d(6482);class l extends w.w0{constructor(r,c){super()}schedule(r,c=0){return this}}const p={setInterval(m,r,...c){const{delegate:n}=p;return n?.setInterval?n.setInterval(m,r,...c):setInterval(m,r,...c)},clearInterval(m){const{delegate:r}=p;return(r?.clearInterval||clearInterval)(m)},delegate:void 0};var C=d(5559);class v extends l{constructor(r,c){super(r,c),this.scheduler=r,this.work=c,this.pending=!1}schedule(r,c=0){var n;if(this.closed)return this;this.state=r;const s=this.id,u=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(u,s,c)),this.pending=!0,this.delay=c,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(u,this.id,c),this}requestAsyncId(r,c,n=0){return p.setInterval(r.flush.bind(r,this),n)}recycleAsyncId(r,c,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return c;null!=c&&p.clearInterval(c)}execute(r,c){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(r,c);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(r,c){let s,n=!1;try{this.work(r)}catch(u){n=!0,s=u||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:r,scheduler:c}=this,{actions:n}=c;this.work=this.state=this.scheduler=null,this.pending=!1,(0,C.P)(n,this),null!=r&&(this.id=this.recycleAsyncId(c,r,null)),this.delay=null,super.unsubscribe()}}}},8924:(A,R,d)=>{d.d(R,{v:()=>p});var w=d(6926);class l{constructor(v,m=l.now){this.schedulerActionCtor=v,this.now=m}schedule(v,m=0,r){return new this.schedulerActionCtor(this,v).schedule(r,m)}}l.now=w.l.now;class p extends l{constructor(v,m=l.now){super(v,m),this.actions=[],this._active=!1}flush(v){const{actions:m}=this;if(this._active)return void m.push(v);let r;this._active=!0;do{if(r=v.execute(v.state,v.delay))break}while(v=m.shift());if(this._active=!1,r){for(;v=m.shift();)v.unsubscribe();throw r}}}},7403:(A,R,d)=>{d.d(R,{Z:()=>r});var w=d(857),l=d(6482);const p={schedule(n){let s=requestAnimationFrame,u=cancelAnimationFrame;const{delegate:f}=p;f&&(s=f.requestAnimationFrame,u=f.cancelAnimationFrame);const y=s(O=>{u=void 0,n(O)});return new l.w0(()=>u?.(y))},requestAnimationFrame(...n){const{delegate:s}=p;return(s?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:s}=p;return(s?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};var v=d(8924);const r=new class m extends v.v{flush(s){this._active=!0;const u=this._scheduled;this._scheduled=void 0;const{actions:f}=this;let y;s=s||f.shift();do{if(y=s.execute(s.state,s.delay))break}while((s=f[0])&&s.id===u&&f.shift());if(this._active=!1,y){for(;(s=f[0])&&s.id===u&&f.shift();)s.unsubscribe();throw y}}}(class C extends w.o{constructor(s,u){super(s,u),this.scheduler=s,this.work=u}requestAsyncId(s,u,f=0){return null!==f&&f>0?super.requestAsyncId(s,u,f):(s.actions.push(this),s._scheduled||(s._scheduled=p.requestAnimationFrame(()=>s.flush(void 0))))}recycleAsyncId(s,u,f=0){var y;if(null!=f?f>0:this.delay>0)return super.recycleAsyncId(s,u,f);const{actions:O}=s;null!=u&&(null===(y=O[O.length-1])||void 0===y?void 0:y.id)!==u&&(p.cancelAnimationFrame(u),s._scheduled=void 0)}})},7777:(A,R,d)=>{d.d(R,{P:()=>C,z:()=>p});var w=d(857);const p=new(d(8924).v)(w.o),C=p},6926:(A,R,d)=>{d.d(R,{l:()=>w});const w={now:()=>(w.delegate||Date).now(),delegate:void 0}},4565:(A,R,d)=>{d.d(R,{Is:()=>r,vT:()=>n});var w=d(1699),l=d(6575);const p=new w.OlP("cdk-dir-doc",{providedIn:"root",factory:function C(){return(0,w.f3M)(l.K0)}}),v=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let r=(()=>{class s{constructor(f){this.value="ltr",this.change=new w.vpe,f&&(this.value=function m(s){const u=s?.toLowerCase()||"";return"auto"===u&&typeof navigator<"u"&&navigator?.language?v.test(navigator.language)?"rtl":"ltr":"rtl"===u?"rtl":"ltr"}((f.body?f.body.dir:null)||(f.documentElement?f.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static#e=this.\u0275fac=function(y){return new(y||s)(w.LFG(p,8))};static#t=this.\u0275prov=w.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),n=(()=>{class s{static#e=this.\u0275fac=function(y){return new(y||s)};static#t=this.\u0275mod=w.oAB({type:s});static#i=this.\u0275inj=w.cJS({})}return s})()},5998:(A,R,d)=>{d.d(R,{Eq:()=>v,Ig:()=>l,fI:()=>r,su:()=>p});var w=d(1699);function l(n){return null!=n&&"false"!=`${n}`}function p(n,s=0){return function C(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}(n)?Number(n):s}function v(n){return Array.isArray(n)?n:[n]}function r(n){return n instanceof w.SBq?n.nativeElement:n}},3274:(A,R,d)=>{d.d(R,{Mq:()=>O,_i:()=>b,i$:()=>u,kV:()=>V,sA:()=>W,t4:()=>C});var w=d(1699),l=d(6575);let p;try{p=typeof Intl<"u"&&Intl.v8BreakIterator}catch{p=!1}let n,f,y,T,C=(()=>{class _{constructor(k){this._platformId=k,this.isBrowser=this._platformId?(0,l.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!p)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static#e=this.\u0275fac=function(B){return new(B||_)(w.LFG(w.Lbi))};static#t=this.\u0275prov=w.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();function u(_){return function s(){if(null==n&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>n=!0}))}finally{n=n||!1}return n}()?_:!!_.capture}function O(){if(null==y){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return y=!1,y;if("scrollBehavior"in document.documentElement.style)y=!0;else{const _=Element.prototype.scrollTo;y=!!_&&!/\{\s*\[native code\]\s*\}/.test(_.toString())}}return y}function b(){if("object"!=typeof document||!document)return 0;if(null==f){const _=document.createElement("div"),x=_.style;_.dir="rtl",x.width="1px",x.overflow="auto",x.visibility="hidden",x.pointerEvents="none",x.position="absolute";const k=document.createElement("div"),B=k.style;B.width="2px",B.height="1px",_.appendChild(k),document.body.appendChild(_),f=0,0===_.scrollLeft&&(_.scrollLeft=1,f=0===_.scrollLeft?1:2),_.remove()}return f}function V(_){if(function I(){if(null==T){const _=typeof document<"u"?document.head:null;T=!(!_||!_.createShadowRoot&&!_.attachShadow)}return T}()){const x=_.getRootNode?_.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&x instanceof ShadowRoot)return x}return null}function W(_){return _.composedPath?_.composedPath()[0]:_.target}},2542:(A,R,d)=>{d.d(R,{xd:()=>Se,ZD:()=>K,x0:()=>be,N7:()=>ee,mF:()=>j,Cl:()=>xe,rL:()=>J});var w=d(5998),l=d(1699),p=d(9877),C=d(4980),v=d(2235),m=d(9016),r=d(7403),c=d(857);let s,n=1;const u={};function f(h){return h in u&&(delete u[h],!0)}const y={setImmediate(h){const i=n++;return u[i]=!0,s||(s=Promise.resolve()),s.then(()=>f(i)&&h()),i},clearImmediate(h){f(h)}},{setImmediate:b,clearImmediate:T}=y,I={setImmediate(...h){const{delegate:i}=I;return(i?.setImmediate||b)(...h)},clearImmediate(h){const{delegate:i}=I;return(i?.clearImmediate||T)(h)},delegate:void 0};var z=d(8924);const P=new class W extends z.v{flush(i){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let o;i=i||t.shift();do{if(o=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===e&&t.shift());if(this._active=!1,o){for(;(i=t[0])&&i.id===e&&t.shift();)i.unsubscribe();throw o}}}(class V extends c.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,t=0){return null!==t&&t>0?super.requestAsyncId(i,e,t):(i.actions.push(this),i._scheduled||(i._scheduled=I.setImmediate(i.flush.bind(i,void 0))))}recycleAsyncId(i,e,t=0){var o;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,e,t);const{actions:a}=i;null!=e&&(null===(o=a[a.length-1])||void 0===o?void 0:o.id)!==e&&(I.clearImmediate(e),i._scheduled===e&&(i._scheduled=void 0))}});var x=d(6482),k=d(2568),B=d(3317),ie=d(7777),ne=d(4114),re=d(384),G=d(5678),oe=d(530);function Y(h,i=ie.z){return function se(h){return(0,ne.e)((i,e)=>{let t=!1,o=null,a=null,g=!1;const D=()=>{if(a?.unsubscribe(),a=null,t){t=!1;const E=o;o=null,e.next(E)}g&&e.complete()},S=()=>{a=null,g&&e.complete()};i.subscribe((0,G.x)(e,E=>{t=!0,o=E,a||(0,re.Xf)(h(E)).subscribe(a=(0,G.x)(e,D,S))},()=>{g=!0,(!t||!a||a.closed)&&e.complete()}))})}(()=>(0,oe.H)(h,i))}var le=d(4520),U=d(274),Z=d(5043),ae=d(9422),ce=d(1891),de=d(3149),L=d(3274),H=d(6575),N=d(4565),he=d(3249);class ue{}class me extends ue{constructor(i){super(),this._data=i}connect(){return(0,k.b)(this._data)?this._data:(0,C.of)(this._data)}disconnect(){}}class ge{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(i,e,t,o,a){i.forEachOperation((g,D,S)=>{let E,M;null==g.previousIndex?(E=this._insertView(()=>t(g,D,S),S,e,o(g)),M=E?1:0):null==S?(this._detachAndCacheView(D,e),M=3):(E=this._moveView(D,S,e,o(g)),M=2),a&&a({context:E?.context,operation:M,record:g})})}detach(){for(const i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,o){const a=this._insertViewFromCache(e,t);if(a)return void(a.context.$implicit=o);const g=i();return t.createEmbeddedView(g.templateRef,g.context,g.index)}_detachAndCacheView(i,e){const t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,o){const a=t.get(i);return t.move(a,e),a.context.$implicit=o,a}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{const t=e.indexOf(i);-1===t?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){const t=this._viewCache.pop();return t&&e.insert(t,i),t||null}}const $=new l.OlP("_ViewRepeater"),_e=["contentWrapper"],pe=["*"],Q=new l.OlP("VIRTUAL_SCROLL_STRATEGY");class ve{constructor(i,e,t){this._scrolledIndexChange=new p.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,B.x)()),this._viewport=null,this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t}attach(i){this._viewport=i,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(i,e,t){this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(i,e){this._viewport&&this._viewport.scrollToOffset(i*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const i=this._viewport.getRenderedRange(),e={start:i.start,end:i.end},t=this._viewport.getViewportSize(),o=this._viewport.getDataLength();let a=this._viewport.measureScrollOffset(),g=this._itemSize>0?a/this._itemSize:0;if(e.end>o){const S=Math.ceil(t/this._itemSize),E=Math.max(0,Math.min(g,o-S));g!=E&&(g=E,a=E*this._itemSize,e.start=Math.floor(g)),e.end=Math.max(0,Math.min(o,e.start+S))}const D=a-e.start*this._itemSize;if(D<this._minBufferPx&&0!=e.start){const S=Math.ceil((this._maxBufferPx-D)/this._itemSize);e.start=Math.max(0,e.start-S),e.end=Math.min(o,Math.ceil(g+(t+this._minBufferPx)/this._itemSize))}else{const S=e.end*this._itemSize-(a+t);if(S<this._minBufferPx&&e.end!=o){const E=Math.ceil((this._maxBufferPx-S)/this._itemSize);E>0&&(e.end=Math.min(o,e.end+E),e.start=Math.max(0,Math.floor(g-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(g))}}function we(h){return h._scrollStrategy}let Se=(()=>{class h{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ve(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,w.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,w.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,w.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static#e=this.\u0275fac=function(t){return new(t||h)};static#t=this.\u0275dir=l.lG2({type:h,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[l._Bn([{provide:Q,useFactory:we,deps:[(0,l.Gpc)(()=>h)]}]),l.TTD]})}return h})(),j=(()=>{class h{constructor(e,t,o){this._ngZone=e,this._platform=t,this._scrolled=new p.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=o}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new v.y(t=>{this._globalSubscription||this._addGlobalListener();const o=e>0?this._scrolled.pipe(Y(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,C.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,le.h)(a=>!a||o.indexOf(a)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((o,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let o=(0,w.fI)(t),a=e.getElementRef().nativeElement;do{if(o==a)return!0}while(o=o.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,m.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(t){return new(t||h)(l.LFG(l.R0b),l.LFG(L.t4),l.LFG(H.K0,8))};static#t=this.\u0275prov=l.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})(),X=(()=>{class h{constructor(e,t,o,a){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=o,this.dir=a,this._destroyed=new p.x,this._elementScrolled=new v.y(g=>this.ngZone.runOutsideAngular(()=>(0,m.R)(this.elementRef.nativeElement,"scroll").pipe((0,U.R)(this._destroyed)).subscribe(g)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,o=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=o?e.end:e.start),null==e.right&&(e.right=o?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),o&&0!=(0,L._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,L._i)()?e.left=e.right:1==(0,L._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,L.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",o="right",a=this.elementRef.nativeElement;if("top"==e)return a.scrollTop;if("bottom"==e)return a.scrollHeight-a.clientHeight-a.scrollTop;const g=this.dir&&"rtl"==this.dir.value;return"start"==e?e=g?o:t:"end"==e&&(e=g?t:o),g&&2==(0,L._i)()?e==t?a.scrollWidth-a.clientWidth-a.scrollLeft:a.scrollLeft:g&&1==(0,L._i)()?e==t?a.scrollLeft+a.scrollWidth-a.clientWidth:-a.scrollLeft:e==t?a.scrollLeft:a.scrollWidth-a.clientWidth-a.scrollLeft}static#e=this.\u0275fac=function(t){return new(t||h)(l.Y36(l.SBq),l.Y36(j),l.Y36(l.R0b),l.Y36(N.Is,8))};static#t=this.\u0275dir=l.lG2({type:h,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}return h})(),J=(()=>{class h{constructor(e,t,o){this._platform=e,this._change=new p.x,this._changeListener=a=>{this._change.next(a)},this._document=o,t.runOutsideAngular(()=>{if(e.isBrowser){const a=this._getWindow();a.addEventListener("resize",this._changeListener),a.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),o=e.documentElement,a=o.getBoundingClientRect();return{top:-a.top||e.body.scrollTop||t.scrollY||o.scrollTop||0,left:-a.left||e.body.scrollLeft||t.scrollX||o.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(Y(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(t){return new(t||h)(l.LFG(L.t4),l.LFG(l.R0b),l.LFG(H.K0,8))};static#t=this.\u0275prov=l.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})();const q=new l.OlP("VIRTUAL_SCROLLABLE");let Ee=(()=>{class h extends X{constructor(e,t,o,a){super(e,t,o,a)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static#e=this.\u0275fac=function(t){return new(t||h)(l.Y36(l.SBq),l.Y36(j),l.Y36(l.R0b),l.Y36(N.Is,8))};static#t=this.\u0275dir=l.lG2({type:h,features:[l.qOj]})}return h})();const Re=typeof requestAnimationFrame<"u"?r.Z:P;let ee=(()=>{class h extends Ee{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,w.Ig)(e)}constructor(e,t,o,a,g,D,S,E){super(e,D,o,g),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=a,this.scrollable=E,this._platform=(0,l.f3M)(L.t4),this._detachedSubject=new p.x,this._renderedRangeSubject=new p.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new v.y(M=>this._scrollStrategy.scrolledIndexChange.subscribe(F=>Promise.resolve().then(()=>this.ngZone.run(()=>M.next(F))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=x.w0.EMPTY,this._viewportChanges=S.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,Z.O)(null),Y(0,Re),(0,U.R)(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,U.R)(this._detachedSubject)).subscribe(t=>{const o=t.length;o!==this._dataLength&&(this._dataLength=o,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function De(h,i){return h.start==i.start&&h.end==i.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const a="horizontal"==this.orientation,g=a?"X":"Y";let S=`translate${g}(${Number((a&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(S+=` translate${g}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=S&&(this._renderedContentTransform=S,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const o={behavior:t};"horizontal"===this.orientation?o.start=e:o.top=e,this.scrollable.scrollTo(o)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?o=>super.measureScrollOffset(o):o=>this.scrollable.measureScrollOffset(o),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const o="left",a="right",g="rtl"==this.dir?.value;t="start"==e?g?a:o:"end"==e?g?o:a:e||("horizontal"===this.orientation?"left":"top");const D=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-D}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static#e=this.\u0275fac=function(t){return new(t||h)(l.Y36(l.SBq),l.Y36(l.sBO),l.Y36(l.R0b),l.Y36(Q,8),l.Y36(N.Is,8),l.Y36(j),l.Y36(J),l.Y36(q,8))};static#t=this.\u0275cmp=l.Xpm({type:h,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,o){if(1&t&&l.Gf(_e,7),2&t){let a;l.iGM(a=l.CRH())&&(o._contentWrapper=a.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,o){2&t&&l.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===o.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==o.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[l._Bn([{provide:X,useFactory:(e,t)=>e||t,deps:[[new l.FiY,new l.tBr(q)],h]}]),l.qOj,l.jDz],ngContentSelectors:pe,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,o){1&t&&(l.F$t(),l.TgZ(0,"div",0,1),l.Hsn(2),l.qZA(),l._UZ(3,"div",2)),2&t&&(l.xp6(3),l.Udp("width",o._totalContentWidth)("height",o._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return h})();function te(h,i,e){if(!e.getBoundingClientRect)return 0;const o=e.getBoundingClientRect();return"horizontal"===h?"start"===i?o.left:o.right:"start"===i?o.top:o.bottom}let be=(()=>{class h{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,function fe(h){return h&&"function"==typeof h.connect&&!(h instanceof he.c)}(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new me((0,k.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,o)=>e(t+(this._renderedRange?this._renderedRange.start:0),o):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,w.su)(e)}constructor(e,t,o,a,g,D){this._viewContainerRef=e,this._template=t,this._differs=o,this._viewRepeater=a,this._viewport=g,this.viewChange=new p.x,this._dataSourceChanges=new p.x,this.dataStream=this._dataSourceChanges.pipe((0,Z.O)(null),(0,ae.G)(),(0,ce.w)(([S,E])=>this._changeDataSource(S,E)),(0,de.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new p.x,this.dataStream.subscribe(S=>{this._data=S,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,U.R)(this._destroyed)).subscribe(S=>{this._renderedRange=S,this.viewChange.observers.length&&D.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const o=e.start-this._renderedRange.start,a=e.end-e.start;let g,D;for(let S=0;S<a;S++){const E=this._viewContainerRef.get(S+o);if(E&&E.rootNodes.length){g=D=E.rootNodes[0];break}}for(let S=a-1;S>-1;S--){const E=this._viewContainerRef.get(S+o);if(E&&E.rootNodes.length){D=E.rootNodes[E.rootNodes.length-1];break}}return g&&D?te(t,"end",D)-te(t,"start",g):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,C.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const o=this._viewContainerRef.get(t);o.context.index=this._renderedRange.start+t,o.context.count=e,this._updateComputedContextProperties(o.context),o.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(a,g,D)=>this._getEmbeddedViewArgs(a,D),a=>a.item),e.forEachIdentityChange(a=>{this._viewContainerRef.get(a.currentIndex).context.$implicit=a.item});const t=this._data.length;let o=this._viewContainerRef.length;for(;o--;){const a=this._viewContainerRef.get(o);a.context.index=this._renderedRange.start+o,a.context.count=t,this._updateComputedContextProperties(a.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static#e=this.\u0275fac=function(t){return new(t||h)(l.Y36(l.s_b),l.Y36(l.Rgc),l.Y36(l.ZZ4),l.Y36($),l.Y36(ee,4),l.Y36(l.R0b))};static#t=this.\u0275dir=l.lG2({type:h,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[l._Bn([{provide:$,useClass:ge}])]})}return h})(),K=(()=>{class h{static#e=this.\u0275fac=function(t){return new(t||h)};static#t=this.\u0275mod=l.oAB({type:h});static#i=this.\u0275inj=l.cJS({})}return h})(),xe=(()=>{class h{static#e=this.\u0275fac=function(t){return new(t||h)};static#t=this.\u0275mod=l.oAB({type:h});static#i=this.\u0275inj=l.cJS({imports:[N.vT,K,N.vT,K]})}return h})()}}]);
//# sourceMappingURL=523.c2971e8d9d6c503b.js.map