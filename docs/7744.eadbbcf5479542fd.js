"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[7744],{53251:(X,x,d)=>{function T(){return[1,0,0,0,1,0,0,0,1]}function L(h,m,U,P,b,j,F,O,W){return[h,m,U,P,b,j,F,O,W]}function C(h,m){return new Float64Array(h,m,9)}d.d(x,{a:()=>C,c:()=>T,f:()=>L}),Object.freeze(Object.defineProperty({__proto__:null,clone:function B(h){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]]},create:T,createView:C,fromValues:L},Symbol.toStringTag,{value:"Module"}))},23160:(X,x,d)=>{function T(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function B(m){return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]]}function C(m,U){return new Float64Array(m,U,16)}d.d(x,{I:()=>R,a:()=>C,b:()=>B,c:()=>T});const R=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:R,clone:B,create:T,createView:C,fromValues:function L(m,U,P,b,j,F,O,W,N,z,v,_,S,w,tt,J){return[m,U,P,b,j,F,O,W,N,z,v,_,S,w,tt,J]}},Symbol.toStringTag,{value:"Module"}))},29042:(X,x,d)=>{function T(){return[0,0,0,1]}function B(m){return[m[0],m[1],m[2],m[3]]}function C(m,U){return new Float64Array(m,U,4)}d.d(x,{I:()=>R,a:()=>T,b:()=>B,c:()=>C});const R=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:R,clone:B,create:T,createView:C,fromValues:function L(m,U,P,b){return[m,U,P,b]}},Symbol.toStringTag,{value:"Module"}))},33659:(X,x,d)=>{d.d(x,{a:()=>w,c:()=>W,g:()=>tt,h:()=>N,j:()=>ht,m:()=>Z}),d(67087);var b,u,B=d(28191),L=d(93142),C=d(53661),R=d(64544),h=d(92950),m=d(77765),U=d(71943),P=d(91746);(u=b||(b={}))[u.X=0]="X",u[u.Y=1]="Y",u[u.Z=2]="Z";var j=d(32684),F=d(84877),O=d(82309);function W(){return(0,P.c)()}function N(u,l=W()){return(0,U.c)(l,u)}function w(u){return u[3]}function tt(u){return u}function et(u,l,f){if((0,C.Wi)(l))return!1;const{origin:E,direction:y}=l,p=it;p[0]=E[0]-u[0],p[1]=E[1]-u[1],p[2]=E[2]-u[2];const D=y[0]*y[0]+y[1]*y[1]+y[2]*y[2];if(0===D)return!1;const V=2*(y[0]*p[0]+y[1]*p[1]+y[2]*p[2]),K=V*V-4*D*(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]-u[3]*u[3]);if(K<0)return!1;const gt=Math.sqrt(K);let k=(-V-gt)/(2*D);const rt=(-V+gt)/(2*D);return(k<0||rt<k&&rt>0)&&(k=rt),!(k<0||(f&&(f[0]=E[0]+y[0]*k,f[1]=E[1]+y[1]*k,f[2]=E[2]+y[2]*k),0))}const it=(0,m.c)();function ht(u,l){return et(u,l,null)}function dt(u,l,f){const E=O.WM.get(),y=O.MP.get();(0,h.f)(E,l.origin,l.direction);const p=w(u);(0,h.f)(f,E,l.origin),(0,h.g)(f,f,1/(0,h.l)(f)*p);const D=ct(u,l.origin),V=(0,F.EU)(l.origin,f);return(0,R.d)(y,V+D,E),(0,h.m)(f,f,y),f}function I(u,l,f){const E=(0,h.b)(O.WM.get(),l,u),y=(0,h.g)(O.WM.get(),E,u[3]/(0,h.l)(E));return(0,h.a)(f,y,u)}function ct(u,l){const f=(0,h.b)(O.WM.get(),l,u),E=(0,h.l)(f),y=w(u),p=y+Math.abs(y-E);return(0,L.ZF)(y/p)}const at=(0,m.c)();function ut(u,l,f,E){const y=(0,h.b)(at,l,u);switch(f){case b.X:{const p=(0,L.jE)(y,at)[2];return(0,h.s)(E,-Math.sin(p),Math.cos(p),0)}case b.Y:{const p=(0,L.jE)(y,at),D=p[1],V=p[2],K=Math.sin(D);return(0,h.s)(E,-K*Math.cos(V),-K*Math.sin(V),Math.cos(D))}case b.Z:return(0,h.n)(E,y);default:return}}function ft(u,l){const f=(0,h.b)(lt,l,u);return(0,h.l)(f)-u[3]}function Z(u,l){const f=(0,h.d)(u,l),E=w(u);return f<=E*E}const lt=(0,m.c)(),a=W();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:ft,angleToSilhouette:ct,axisAt:ut,clear:function _(u){u[0]=u[1]=u[2]=u[3]=0},closestPoint:function nt(u,l,f){return et(u,l,f)?f:((0,j.JI)(l,u,f),I(u,f,f))},closestPointOnSilhouette:dt,containsPoint:Z,copy:N,create:W,distanceToSilhouette:function mt(u,l){const f=(0,h.b)(O.WM.get(),l,u),E=(0,h.p)(f);return Math.sqrt(Math.abs(E-u[3]*u[3]))},elevate:function yt(u,l,f){return u!==f&&(0,h.c)(f,u),f[3]=u[3]+l,f},fromCenterAndRadius:function z(u,l){return(0,P.f)(u[0],u[1],u[2],l)},fromRadius:function S(u,l){return u[0]=u[1]=u[2]=0,u[3]=l,u},fromValues:function J(u,l,f,E){return(0,P.f)(u,l,f,E)},getCenter:tt,getRadius:w,intersectRay:et,intersectRayClosestSilhouette:function st(u,l,f){if(et(u,l,f))return f;const E=dt(u,l,O.WM.get());return(0,h.a)(f,l.origin,(0,h.g)(O.WM.get(),l.direction,(0,h.i)(l.origin,E)/(0,h.l)(l.direction))),f},intersectsRay:ht,projectPoint:I,setAltitudeAt:function $(u,l,f,E){const y=ft(u,l),p=ut(u,l,b.Z,lt),D=(0,h.g)(lt,p,f-y);return(0,h.a)(E,l,D)},setExtent:function ot(u,l,f){return B.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),u===f?f:N(u,f)},tmpSphere:a,wrap:function v(u){return u}},Symbol.toStringTag,{value:"Module"}))},93668:(X,x,d)=>{d.d(x,{x:()=>B});var T=d(16746);class B{constructor(R){this._allocator=R,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,T.Y)(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const R=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*L);this._items.length=Math.min(R,this._items.length),this._itemsPtr=0}_grow(){for(let R=0;R<Math.max(8,Math.min(this._items.length,L));R++)this._items.push(this._allocator())}}const L=1024},32684:(X,x,d)=>{d.d(x,{JI:()=>N,Ue:()=>h,re:()=>P}),d(19420);var B=d(93668),L=d(92950),C=d(77765);function h(v){return v?m((0,C.a)(v.origin),(0,C.a)(v.direction)):m((0,C.c)(),(0,C.c)())}function m(v,_){return{origin:v,direction:_}}function P(v,_){const S=z.get();return S.origin=v,S.direction=_,S}function N(v,_,S){const w=(0,L.e)(v.direction,(0,L.b)(S,_,v.origin));return(0,L.a)(S,v.origin,(0,L.g)(S,v.direction,w)),S}d(82309);const z=new B.x(()=>h())},84877:(X,x,d)=>{d.d(x,{EU:()=>h});var T=d(93142),B=d(92950),L=d(77765);function h(b,j){const F=(0,B.e)(b,j)/((0,B.l)(b)*(0,B.l)(j));return-(0,T.ZF)(F)}(0,L.c)(),(0,L.c)()},82309:(X,x,d)=>{d.d(x,{MP:()=>N,WM:()=>F});var T=d(84625),B=d(16746),L=d(53251),C=d(23160),R=d(29042),h=d(83457),m=d(77765),U=d(91746);class P{constructor(_,S,w){this._itemByteSize=_,this._itemCreate=S,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(w/this._itemByteSize)}get(){0===this._itemsPtr&&(0,B.Y)(()=>this._reset());const _=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=_;){const S=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let w=0;w<this._itemsPerBuffer;++w)this._items.push(this._itemCreate(S,w*this._itemByteSize));this._buffers.push(S)}return this._items[this._itemsPtr++]}_reset(){const _=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>_;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(_=b){return new P(16,h.c,_)}static createVec3f64(_=b){return new P(24,m.b,_)}static createVec4f64(_=b){return new P(32,U.a,_)}static createMat3f64(_=b){return new P(72,L.a,_)}static createMat4f64(_=b){return new P(128,C.a,_)}static createQuatf64(_=b){return new P(32,R.c,_)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const b=4*T.Y8.KILOBYTES,F=(P.createVec2f64(),P.createVec3f64()),N=(P.createVec4f64(),P.createMat3f64(),P.createMat4f64());P.createQuatf64()},37744:(X,x,d)=>{d.r(x),d.d(x,{destroyContext:()=>dt,dracoDecompressPointCloudData:()=>tt,filterObbsForModifications:()=>yt,filterObbsForModificationsSync:()=>ut,initialize:()=>Z,interpretObbModificationResults:()=>at,process:()=>S,setLegacySchema:()=>ht,setModifications:()=>et,setModificationsSync:()=>mt,test:()=>lt});var L,C,a,T=d(71670),B=d(53661);(a=L||(L={}))[a.None=0]="None",a[a.Int16=1]="Int16",a[a.Int32=2]="Int32",function(a){a[a.Replace=0]="Replace",a[a.Outside=1]="Outside",a[a.Inside=2]="Inside",a[a.Finished=3]="Finished"}(C||(C={}));var R=d(74792);function m(a){return(0,R.V)(`esri/libs/i3s/${a}`)}let U;var F,O,W,N,z;function S(a){return w.apply(this,arguments)}function w(){return w=(0,T.Z)(function*(a){yield Z();const M=[a.geometryBuffer];return{result:ct(a,M),transferList:M}}),w.apply(this,arguments)}function tt(a){return J.apply(this,arguments)}function J(){return J=(0,T.Z)(function*(a){yield Z();const M=[a.geometryBuffer],{geometryBuffer:u}=a,l=u.byteLength,f=I._malloc(l),E=new Uint8Array(I.HEAPU8.buffer,f,l);E.set(new Uint8Array(u));const y=I.dracoDecompressPointCloudData(f,E.byteLength);if(I._free(f),y.error.length>0)throw new Error(`i3s.wasm: ${y.error}`);const p=y.featureIds?.length>0?y.featureIds.slice():null,D=y.positions.slice();return p&&M.push(p.buffer),M.push(D.buffer),{result:{positions:D,featureIds:p},transferList:M}}),J.apply(this,arguments)}function yt(a){return ot.apply(this,arguments)}function ot(){return ot=(0,T.Z)(function*(a){yield Z(),ut(a);const M={buffer:a.buffer};return{result:M,transferList:[M.buffer]}}),ot.apply(this,arguments)}function et(a){return it.apply(this,arguments)}function it(){return it=(0,T.Z)(function*(a){yield Z(),mt(a)}),it.apply(this,arguments)}function ht(a){return st.apply(this,arguments)}function st(){return st=(0,T.Z)(function*(a){yield Z(),I.setLegacySchema(a.context,a.jsonSchema)}),st.apply(this,arguments)}function dt(a){ft(a)}let nt,I;function mt(a){const M=a.modifications,u=I._malloc(8*M.length),l=new Float64Array(I.HEAPU8.buffer,u,M.length);for(let f=0;f<M.length;++f)l[f]=M[f];I.setModifications(a.context,u,M.length,a.isGeodetic),I._free(u)}function ct(a,M){if(!I)return null;const{context:u,localOrigin:l,globalTrafo:f,mbs:E,obb:y,elevationOffset:p,geometryBuffer:D,geometryDescriptor:V,indexToVertexProjector:K,vertexToRenderProjector:gt}=a,k=I._malloc(D.byteLength),_t=I._malloc(33*Float64Array.BYTES_PER_ELEMENT),bt=new Uint8Array(I.HEAPU8.buffer,k,D.byteLength);bt.set(new Uint8Array(D));const Y=new Float64Array(I.HEAPU8.buffer,_t,33);$(Y,l);let H=Y.byteOffset+3*Y.BYTES_PER_ELEMENT,G=new Float64Array(Y.buffer,H);$(G,f),H+=16*Y.BYTES_PER_ELEMENT,G=new Float64Array(Y.buffer,H),$(G,E),H+=4*Y.BYTES_PER_ELEMENT,(0,B.pC)(y)&&(G=new Float64Array(Y.buffer,H),$(G,y.center),H+=3*Y.BYTES_PER_ELEMENT,G=new Float64Array(Y.buffer,H),$(G,y.halfSize),H+=3*Y.BYTES_PER_ELEMENT,G=new Float64Array(Y.buffer,H),$(G,y.quaternion));const vt=V,It={isDraco:!1,isLegacy:!1,color:a.layouts.some(Q=>Q.some(q=>"color"===q.name)),normal:a.needNormals&&a.layouts.some(Q=>Q.some(q=>"normalCompressed"===q.name)),uv0:a.layouts.some(Q=>Q.some(q=>"uv0"===q.name)),uvRegion:a.layouts.some(Q=>Q.some(q=>"uvRegion"===q.name)),featureIndex:vt.featureIndex},A=I.process(u,!!a.obb,k,bt.byteLength,vt,It,_t,p,K,gt,a.normalReferenceFrame);if(I._free(_t),I._free(k),A.error.length>0)throw new Error(`i3s.wasm: ${A.error}`);if(A.discarded)return null;const Et=A.componentOffsets.length>0?A.componentOffsets.slice():null,Mt=A.featureIds.length>0?A.featureIds.slice():null,pt=A.interleavedVertedData.slice().buffer,Pt=A.indicesType===L.Int16?new Uint16Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/2).slice():new Uint32Array(A.indices.buffer,A.indices.byteOffset,A.indices.byteLength/4).slice(),St=A.positions.slice(),Lt=A.positionIndicesType===L.Int16?new Uint16Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/2).slice():new Uint32Array(A.positionIndices.buffer,A.positionIndices.byteOffset,A.positionIndices.byteLength/4).slice(),Ot={layout:a.layouts[0],interleavedVertexData:pt,indices:Pt,hasColors:A.hasColors,hasModifications:A.hasModifications,positionData:{data:St,indices:Lt}};return Mt&&M.push(Mt.buffer),Et&&M.push(Et.buffer),M.push(pt),M.push(Pt.buffer),M.push(St.buffer),M.push(Lt.buffer),{componentOffsets:Et,featureIds:Mt,transformedGeometry:Ot,obb:A.obb}}function at(a){return 0===a?O.Unmodified:1===a?O.PotentiallyModified:2===a?O.Culled:O.Unknown}function ut(a){const{context:M,buffer:u}=a,l=I._malloc(u.byteLength),f=u.byteLength/Float64Array.BYTES_PER_ELEMENT,E=new Float64Array(I.HEAPU8.buffer,l,f),y=new Float64Array(u);E.set(y),I.filterOBBs(M,l,f),y.set(E),I._free(l)}function ft(a){I&&I.destroy(a)}function $(a,M){for(let u=0;u<M.length;++u)a[u]=M[u]}function Z(){return I?Promise.resolve():(nt||(nt=function h(){return U||(U=new Promise(a=>d.e(5052).then(d.bind(d,55052)).then(M=>M.i).then(({default:M})=>{const u=M({locateFile:m,onRuntimeInitialized:()=>a(u)});delete u.then})).catch(a=>{throw a})),U}().then(a=>{I=a,nt=null})),nt)}d(33659),function(a){a[a.Unmodified=0]="Unmodified",a[a.Culled=1]="Culled",a[a.NotChecked=2]="NotChecked"}(F||(F={})),function(a){a[a.Unmodified=0]="Unmodified",a[a.PotentiallyModified=1]="PotentiallyModified",a[a.Culled=2]="Culled",a[a.Unknown=3]="Unknown",a[a.NotChecked=4]="NotChecked"}(O||(O={})),function(a){a[a.Unknown=0]="Unknown",a[a.Uncached=1]="Uncached",a[a.Cached=2]="Cached"}(W||(W={})),function(a){a[a.None=0]="None",a[a.MaxScreenThreshold=1]="MaxScreenThreshold",a[a.ScreenSpaceRelative=2]="ScreenSpaceRelative",a[a.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",a[a.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(N||(N={})),function(a){a[a.Hole=0]="Hole",a[a.Leaf=1]="Leaf"}(z||(z={}));const lt={transform:ct,destroy:ft}}}]);
//# sourceMappingURL=7744.eadbbcf5479542fd.js.map