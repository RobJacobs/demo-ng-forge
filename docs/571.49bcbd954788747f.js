"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[571],{53251:(at,H,_)=>{function O(){return[1,0,0,0,1,0,0,0,1]}function L(h,m,d,M,c,F,E,g,S){return[h,m,d,M,c,F,E,g,S]}function j(h,m){return new Float64Array(h,m,9)}_.d(H,{a:()=>j,c:()=>O,f:()=>L}),Object.freeze(Object.defineProperty({__proto__:null,clone:function C(h){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]]},create:O,createView:j,fromValues:L},Symbol.toStringTag,{value:"Module"}))},23160:(at,H,_)=>{function O(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function C(m){return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]]}function j(m,d){return new Float64Array(m,d,16)}_.d(H,{I:()=>I,a:()=>j,b:()=>C,c:()=>O});const I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:I,clone:C,create:O,createView:j,fromValues:function L(m,d,M,c,F,E,g,S,z,Z,b,x,k,Q,y,D){return[m,d,M,c,F,E,g,S,z,Z,b,x,k,Q,y,D]}},Symbol.toStringTag,{value:"Module"}))},50894:(at,H,_)=>{_.d(H,{c:()=>x,g:()=>M,j:()=>W,k:()=>Q,m:()=>c,s:()=>d});var O=_(53251),C=_(29042),L=_(77765),j=_(33980),I=_(92950),h=_(71943);function d(t,r,p){p*=.5;const u=Math.sin(p);return t[0]=u*r[0],t[1]=u*r[1],t[2]=u*r[2],t[3]=Math.cos(p),t}function M(t,r){const p=2*Math.acos(r[3]),u=Math.sin(p/2);return u>(0,j.g)()?(t[0]=r[0]/u,t[1]=r[1]/u,t[2]=r[2]/u):(t[0]=1,t[1]=0,t[2]=0),p}function c(t,r,p){const u=r[0],P=r[1],R=r[2],K=r[3],V=p[0],Y=p[1],et=p[2],_t=p[3];return t[0]=u*_t+K*V+P*et-R*Y,t[1]=P*_t+K*Y+R*V-u*et,t[2]=R*_t+K*et+u*Y-P*V,t[3]=K*_t-u*V-P*Y-R*et,t}function z(t,r,p,u){const P=r[0],R=r[1],K=r[2],V=r[3];let Y,et,_t,ct,st,ut=p[0],lt=p[1],ft=p[2],Et=p[3];return et=P*ut+R*lt+K*ft+V*Et,et<0&&(et=-et,ut=-ut,lt=-lt,ft=-ft,Et=-Et),1-et>(0,j.g)()?(Y=Math.acos(et),_t=Math.sin(Y),ct=Math.sin((1-u)*Y)/_t,st=Math.sin(u*Y)/_t):(ct=1-u,st=u),t[0]=ct*P+st*ut,t[1]=ct*R+st*lt,t[2]=ct*K+st*ft,t[3]=ct*V+st*Et,t}function x(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function k(t,r){const p=r[0]+r[4]+r[8];let u;if(p>0)u=Math.sqrt(p+1),t[3]=.5*u,u=.5/u,t[0]=(r[5]-r[7])*u,t[1]=(r[6]-r[2])*u,t[2]=(r[1]-r[3])*u;else{let P=0;r[4]>r[0]&&(P=1),r[8]>r[3*P+P]&&(P=2);const R=(P+1)%3,K=(P+2)%3;u=Math.sqrt(r[3*P+P]-r[3*R+R]-r[3*K+K]+1),t[P]=.5*u,u=.5/u,t[3]=(r[3*R+K]-r[3*K+R])*u,t[R]=(r[3*R+P]+r[3*P+R])*u,t[K]=(r[3*K+P]+r[3*P+K])*u}return t}function Q(t,r,p,u){const P=.5*Math.PI/180;r*=P,p*=P,u*=P;const R=Math.sin(r),K=Math.cos(r),V=Math.sin(p),Y=Math.cos(p),et=Math.sin(u),_t=Math.cos(u);return t[0]=R*Y*_t-K*V*et,t[1]=K*V*_t+R*Y*et,t[2]=K*Y*et-R*V*_t,t[3]=K*Y*_t+R*V*et,t}const D=h.c,N=h.s,$=h.a,B=c,J=h.b,X=h.d,w=h.l,q=h.e,G=q,tt=h.f,U=tt,f=h.n,W=h.g,o=h.h,n=(0,L.c)(),l=(0,L.f)(1,0,0),T=(0,L.f)(0,1,0),v=(0,C.a)(),rt=(0,C.a)(),it=(0,O.c)();Object.freeze(Object.defineProperty({__proto__:null,add:$,calculateW:function S(t,r){const p=r[0],u=r[1],P=r[2];return t[0]=p,t[1]=u,t[2]=P,t[3]=Math.sqrt(Math.abs(1-p*p-u*u-P*P)),t},conjugate:x,copy:D,dot:X,equals:o,exactEquals:W,fromEuler:Q,fromMat3:k,getAxisAngle:M,identity:function m(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function b(t,r){const p=r[0],u=r[1],P=r[2],R=r[3],K=p*p+u*u+P*P+R*R,V=K?1/K:0;return t[0]=-p*V,t[1]=-u*V,t[2]=-P*V,t[3]=R*V,t},len:G,length:q,lerp:w,mul:B,multiply:c,normalize:f,random:function Z(t){const r=j.R,p=r(),u=r(),P=r(),R=Math.sqrt(1-p),K=Math.sqrt(p);return t[0]=R*Math.sin(2*Math.PI*u),t[1]=R*Math.cos(2*Math.PI*u),t[2]=K*Math.sin(2*Math.PI*P),t[3]=K*Math.cos(2*Math.PI*P),t},rotateX:function F(t,r,p){p*=.5;const u=r[0],P=r[1],R=r[2],K=r[3],V=Math.sin(p),Y=Math.cos(p);return t[0]=u*Y+K*V,t[1]=P*Y+R*V,t[2]=R*Y-P*V,t[3]=K*Y-u*V,t},rotateY:function E(t,r,p){p*=.5;const u=r[0],P=r[1],R=r[2],K=r[3],V=Math.sin(p),Y=Math.cos(p);return t[0]=u*Y-R*V,t[1]=P*Y+K*V,t[2]=R*Y+u*V,t[3]=K*Y-P*V,t},rotateZ:function g(t,r,p){p*=.5;const u=r[0],P=r[1],R=r[2],K=r[3],V=Math.sin(p),Y=Math.cos(p);return t[0]=u*Y+P*V,t[1]=P*Y-u*V,t[2]=R*Y+K*V,t[3]=K*Y-R*V,t},rotationTo:function a(t,r,p){const u=(0,I.e)(r,p);return u<-.999999?((0,I.f)(n,l,r),(0,I.u)(n)<1e-6&&(0,I.f)(n,T,r),(0,I.n)(n,n),d(t,n,Math.PI),t):u>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,I.f)(n,r,p),t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=1+u,f(t,t))},scale:J,set:N,setAxes:function ot(t,r,p,u){const P=it;return P[0]=p[0],P[3]=p[1],P[6]=p[2],P[1]=u[0],P[4]=u[1],P[7]=u[2],P[2]=-r[0],P[5]=-r[1],P[8]=-r[2],f(t,k(t,P))},setAxisAngle:d,slerp:z,sqlerp:function A(t,r,p,u,P,R){return z(v,r,P,R),z(rt,p,u,R),z(t,v,rt,2*R*(1-R)),t},sqrLen:U,squaredLength:tt,str:function y(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},29042:(at,H,_)=>{function O(){return[0,0,0,1]}function C(m){return[m[0],m[1],m[2],m[3]]}function j(m,d){return new Float64Array(m,d,4)}_.d(H,{I:()=>I,a:()=>O,b:()=>C,c:()=>j});const I=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:I,clone:C,create:O,createView:j,fromValues:function L(m,d,M,c){return[m,d,M,c]}},Symbol.toStringTag,{value:"Module"}))},72507:(at,H,_)=>{_.d(H,{a:()=>L,b:()=>h,n:()=>I,s:()=>j,t:()=>C});var O=_(97277);function C(d,M,c){if(d.count!==M.count)return void O.c.error("source and destination buffers need to have the same number of elements");const F=d.count,E=c[0],g=c[1],S=c[2],z=c[4],Z=c[5],b=c[6],x=c[8],k=c[9],Q=c[10],y=c[12],D=c[13],N=c[14],$=d.typedBuffer,B=d.typedBufferStride,J=M.typedBuffer,X=M.typedBufferStride;for(let w=0;w<F;w++){const q=w*B,G=w*X,tt=J[G],U=J[G+1],f=J[G+2];$[q]=E*tt+z*U+x*f+y,$[q+1]=g*tt+Z*U+k*f+D,$[q+2]=S*tt+b*U+Q*f+N}}function L(d,M,c){if(d.count!==M.count)return void O.c.error("source and destination buffers need to have the same number of elements");const F=d.count,E=c[0],g=c[1],S=c[2],z=c[3],Z=c[4],b=c[5],x=c[6],k=c[7],Q=c[8],y=d.typedBuffer,D=d.typedBufferStride,N=M.typedBuffer,$=M.typedBufferStride;for(let B=0;B<F;B++){const J=B*D,X=B*$,w=N[X],q=N[X+1],G=N[X+2];y[J]=E*w+z*q+x*G,y[J+1]=g*w+Z*q+k*G,y[J+2]=S*w+b*q+Q*G}}function j(d,M,c){const F=Math.min(d.count,M.count),E=d.typedBuffer,g=d.typedBufferStride,S=M.typedBuffer,z=M.typedBufferStride;for(let Z=0;Z<F;Z++){const b=Z*g,x=Z*z;E[b]=c*S[x],E[b+1]=c*S[x+1],E[b+2]=c*S[x+2]}}function I(d,M){const c=Math.min(d.count,M.count),F=d.typedBuffer,E=d.typedBufferStride,g=M.typedBuffer,S=M.typedBufferStride;for(let z=0;z<c;z++){const Z=z*E,b=z*S,x=g[b],k=g[b+1],Q=g[b+2],y=x*x+k*k+Q*Q;if(y>0){const D=1/Math.sqrt(y);F[Z]=D*x,F[Z+1]=D*k,F[Z+2]=D*Q}}}function h(d,M,c){const F=Math.min(d.count,M.count),E=d.typedBuffer,g=d.typedBufferStride,S=M.typedBuffer,z=M.typedBufferStride;for(let Z=0;Z<F;Z++){const b=Z*g,x=Z*z;E[b]=S[x]>>c,E[b+1]=S[x+1]>>c,E[b+2]=S[x+2]>>c}}Object.freeze(Object.defineProperty({__proto__:null,normalize:I,scale:j,shiftRight:h,transformMat3:L,transformMat4:C},Symbol.toStringTag,{value:"Module"}))},93916:(at,H,_)=>{function O(j,I,h){const m=j.typedBuffer,d=j.typedBufferStride,M=I.typedBuffer,c=I.typedBufferStride,F=h?h.count:I.count;let E=(h&&h.dstIndex?h.dstIndex:0)*d,g=(h&&h.srcIndex?h.srcIndex:0)*c;for(let S=0;S<F;++S)m[E]=M[g],m[E+1]=M[g+1],m[E+2]=M[g+2],E+=d,g+=c}function C(j,I,h,m,d){const M=j.typedBuffer,c=j.typedBufferStride,F=d?.count??j.count;let E=(d?.dstIndex??0)*c;for(let g=0;g<F;++g)M[E]=I,M[E+1]=h,M[E+2]=m,E+=c}_.d(H,{c:()=>O,f:()=>C}),Object.freeze(Object.defineProperty({__proto__:null,copy:O,fill:C},Symbol.toStringTag,{value:"Module"}))},99491:(at,H,_)=>{_.d(H,{rS:()=>d});var O=_(64004),C=_(68230),L=_(53492);const j=new C.Z(O.kU),I=new C.Z(O.JL),h=new C.Z(O.mM);function d(M){return M&&((0,L.BZ)(M)||(0,L.fS)(M,I))?I:M&&((0,L.V2)(M)||(0,L.fS)(M,h))?h:j}new C.Z(O.pn)},84374:(at,H,_)=>{_.d(H,{Z:()=>$});var y,O=_(18100),C=_(44480),L=_(53661),j=_(9497),m=(_(83382),_(19420),_(20891)),d=_(64544),M=_(23160),c=_(50894),F=_(29042),E=_(92950),g=_(77765),S=_(35787),z=_(21789),Z=_(99491),b=_(29200),x=_(9565),k=_(72507),Q=_(93916);let D=y=class extends C.wq{constructor(B){super(B),this.origin=(0,g.c)(),this.translation=(0,g.c)(),this.rotation=(0,b.Ue)(),this.scale=(0,g.f)(1,1,1),this.geographic=!0}get localMatrix(){const B=(0,M.c)();return(0,c.s)(N,(0,b.ZZ)(this.rotation),(0,b.WH)(this.rotation)),(0,d.g)(B,N,this.translation,this.scale),B}get localMatrixInverse(){return(0,d.a)((0,M.c)(),this.localMatrix)}applyLocal(B,J){return(0,E.m)(J,B,this.localMatrix)}applyLocalInverse(B,J){return(0,E.m)(J,B,this.localMatrixInverse)}project(B,J){const X=new Float64Array(B.length),w=x.fP.fromTypedArray(X),q=x.fP.fromTypedArray(B);if(this.geographic){const U=(0,Z.rS)(J),f=(0,M.c)();return(0,z.Bm)(J,this.origin,f,U),(0,d.m)(f,f,this.localMatrix),(0,k.t)(w,q,f),(0,z.CM)(X,U,0,X,J,0,X.length/3),X}const{localMatrix:G,origin:tt}=this;(0,d.h)(G,M.I)?(0,Q.c)(w,q):(0,k.t)(w,q,G);for(let U=0;U<X.length;U+=3)X[U+0]+=tt[0],X[U+1]+=tt[1],X[U+2]+=tt[2];return X}getOriginPoint(B){const[J,X,w]=this.origin;return new S.Z({x:J,y:X,z:w,spatialReference:B})}equals(B){return(0,L.pC)(B)&&this.geographic===B.geographic&&(0,E.k)(this.origin,B.origin)&&(0,d.j)(this.localMatrix,B.localMatrix)}clone(){const B={origin:(0,g.a)(this.origin),translation:(0,g.a)(this.translation),rotation:(0,b.Ue)(this.rotation),scale:(0,g.a)(this.scale),geographic:this.geographic};return new y(B)}};(0,O._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],D.prototype,"origin",void 0),(0,O._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],D.prototype,"translation",void 0),(0,O._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],D.prototype,"rotation",void 0),(0,O._)([(0,j.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],D.prototype,"scale",void 0),(0,O._)([(0,j.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],D.prototype,"geographic",void 0),(0,O._)([(0,j.Cb)()],D.prototype,"localMatrix",null),(0,O._)([(0,j.Cb)()],D.prototype,"localMatrixInverse",null),D=y=(0,O._)([(0,m.j)("esri.geometry.support.MeshTransform")],D);const N=(0,F.a)(),$=D},29200:(at,H,_)=>{_.d(H,{Ue:()=>I,WH:()=>z,ZZ:()=>g,qC:()=>E,uT:()=>c});var O=_(93142),C=_(50894),L=_(29042),j=_(92950);function I(y=b){return[y[0],y[1],y[2],y[3]]}function c(y,D,N=I()){return(0,j.c)(N,y),N[3]=D,N}function E(y,D,N=I()){return(0,C.s)(x,y,z(y)),(0,C.s)(k,D,z(D)),(0,C.m)(x,k,x),function Z(y,D){return y[3]=D,y}(N,(0,O.BV)((0,C.g)(N,x)))}function g(y){return y}function z(y){return(0,O.Vl)(y[3])}const b=[0,0,1,0],x=(0,L.a)(),k=(0,L.a)();I()},97277:(at,H,_)=>{_.d(H,{c:()=>C});const C=_(28191).Z.getLogger("esri.views.3d.support.buffer.math")},82590:(at,H,_)=>{function O(C,L){return C.isGeographic||C.isWebMercator&&(L?.geographic??!0)}_.d(H,{h:()=>O})},571:(at,H,_)=>{_.d(H,{FF:()=>b,I5:()=>z,Yq:()=>x,iv:()=>S,w1:()=>Z});var O=_(53661),C=_(82769),L=_(53251),j=_(64544),I=_(23160),h=_(38974),m=_(21789),d=_(99491),M=_(84374),c=_(9565),F=_(72507),E=_(82590),g=_(26834);function S(o,a,n){return(0,E.h)(a.spatialReference,n)?function Q(o,a,n){const l=a.spatialReference,T=J(a,n,tt),A=new Float64Array(o.position.length),v=function y(o,a,n,l){(0,F.t)(c.fP.fromTypedArray(l),c.fP.fromTypedArray(o),a);const T=new Float64Array(o.length);return(0,g.To)(l,T,n)}(o.position,T,l,A),rt=(0,h.b)(f,T);return{position:v,normal:D(v,A,o.normal,rt,l),tangent:N(v,A,o.tangent,rt,l)}}(o,a,n):function k(o,a,n){const l=new Float64Array(o.position.length),T=o.position,A=a.x,v=a.y,rt=a.z||0,{horizontal:ot,vertical:it}=G(n?n.unit:null,a.spatialReference);for(let nt=0;nt<T.length;nt+=3)l[nt+0]=T[nt+0]*ot+A,l[nt+1]=T[nt+1]*ot+v,l[nt+2]=T[nt+2]*it+rt;return{position:l,normal:o.normal,tangent:o.tangent}}(o,a,n)}function z(o,a,n){const{position:l,normal:T,tangent:A}=o;if((0,O.Wi)(a))return{position:l,normal:T,tangent:A};const v=a.localMatrix;return S({position:(0,g.zZ)(l,new Float64Array(l.length),v),normal:(0,O.pC)(T)?(0,g.w9)(T,new Float32Array(T.length),v):null,tangent:(0,O.pC)(A)?(0,g.VS)(A,new Float32Array(A.length),v):null},a.getOriginPoint(n),{geographic:a.geographic})}function Z(o,a,n){if(n?.useTransform){const{position:l,normal:T,tangent:A}=o;return{vertexAttributes:{position:l,normal:T,tangent:A},transform:new M.Z({origin:[a.x,a.y,a.z??0],geographic:(0,E.h)(a.spatialReference,n)})}}return{vertexAttributes:S(o,a,n),transform:null}}function b(o,a,n){return(0,E.h)(a.spatialReference,n)?function B(o,a,n){const l=a.spatialReference;J(a,n,tt);const T=(0,j.a)(U,tt),A=new Float64Array(o.position.length),v=function X(o,a,n,l){const T=(0,g.XO)(o,a,l),A=c.fP.fromTypedArray(T),v=new Float64Array(T.length),rt=c.fP.fromTypedArray(v);return(0,F.t)(rt,A,n),v}(o.position,l,T,A),rt=(0,h.b)(f,T);return{position:v,normal:w(o.normal,o.position,A,l,rt),tangent:q(o.tangent,o.position,A,l,rt)}}(o,a,n):$(o,a,n)}function x(o,a,n,l){if((0,O.Wi)(a))return b(o,n,l);const T=z(o,a,n.spatialReference);return n.equals(a.getOriginPoint(n.spatialReference))?$(T,n,l):b(T,n,l)}function D(o,a,n,l,T){if((0,O.Wi)(n))return null;const A=new Float32Array(n.length);return(0,F.a)(c.ct.fromTypedArray(A),c.ct.fromTypedArray(n),l),(0,g.Yk)(A,o,a,T,A),A}function N(o,a,n,l,T){if((0,O.Wi)(n))return null;const A=new Float32Array(n.length);(0,F.a)(c.ct.fromTypedArray(A,4*Float32Array.BYTES_PER_ELEMENT),c.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),l);for(let v=3;v<A.length;v+=4)A[v]=n[v];return(0,g.M2)(A,o,a,T,A),A}function $(o,a,n){const l=new Float64Array(o.position.length),T=o.position,A=a.x,v=a.y,rt=a.z||0,{horizontal:ot,vertical:it}=G(n?n.unit:null,a.spatialReference);for(let nt=0;nt<T.length;nt+=3)l[nt+0]=(T[nt+0]-A)/ot,l[nt+1]=(T[nt+1]-v)/ot,l[nt+2]=(T[nt+2]-rt)/it;return{position:l,normal:o.normal,tangent:o.tangent}}function J(o,a,n){(0,m.Bm)(o.spatialReference,[o.x,o.y,o.z||0],n,(0,d.rS)(o.spatialReference));const{horizontal:l,vertical:T}=G(a?a.unit:null,o.spatialReference);return(0,j.k)(n,n,[l,l,T]),n}function w(o,a,n,l,T){if((0,O.Wi)(o))return null;const A=(0,g.Iz)(o,a,n,l,new Float32Array(o.length)),v=c.ct.fromTypedArray(A);return(0,F.a)(v,v,T),A}function q(o,a,n,l,T){if((0,O.Wi)(o))return null;const A=(0,g.wi)(o,a,n,l,new Float32Array(o.length)),v=c.ct.fromTypedArray(A,4*Float32Array.BYTES_PER_ELEMENT);return(0,F.a)(v,v,T),A}function G(o,a){if((0,O.Wi)(o))return W;const n=a.isGeographic?1:(0,C.c9)(a),l=a.isGeographic?1:(0,C._R)(a),T=(0,C.En)(1,o,"meters");return{horizontal:T*n,vertical:T*l}}const tt=(0,I.c)(),U=(0,I.c)(),f=(0,L.c)(),W={horizontal:1,vertical:1}},26834:(at,H,_)=>{_.d(H,{Iz:()=>z,M2:()=>N,To:()=>x,VS:()=>y,XO:()=>b,Yk:()=>Z,w9:()=>Q,wi:()=>D,zZ:()=>k});var O=_(28191),C=_(53661),L=_(38974),j=_(53251),I=_(23160),h=_(92950),m=_(77765),d=_(21789),M=_(99491),c=_(53492),F=_(83550),E=_(9565),g=_(72507);const S=O.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function z(f,W,o,a,n){return B(a)?($(w.TO_PCPF,E.ct.fromTypedArray(f),E.fP.fromTypedArray(W),E.fP.fromTypedArray(o),a,E.ct.fromTypedArray(n)),n):(S.error("Cannot convert spatial reference to PCPF"),n)}function Z(f,W,o,a,n){return B(a)?($(w.FROM_PCPF,E.ct.fromTypedArray(f),E.fP.fromTypedArray(W),E.fP.fromTypedArray(o),a,E.ct.fromTypedArray(n)),n):(S.error("Cannot convert to spatial reference from PCPF"),n)}function b(f,W,o){return(0,d.CM)(f,W,0,o,(0,M.rS)(W),0,f.length/3),o}function x(f,W,o){return(0,d.CM)(f,(0,M.rS)(o),0,W,o,0,f.length/3),W}function k(f,W,o){if((0,C.Wi)(f))return W;const a=E.fP.fromTypedArray(f),n=E.fP.fromTypedArray(W);return(0,g.t)(n,a,o),W}function Q(f,W,o){if((0,C.Wi)(f))return W;(0,L.b)(U,o);const a=E.ct.fromTypedArray(f),n=E.ct.fromTypedArray(W);return(0,g.a)(n,a,U),(0,L.i)(U)||(0,g.n)(n,n),W}function y(f,W,o){if((0,C.Wi)(f))return W;(0,L.b)(U,o);const a=E.ct.fromTypedArray(f,4*Float32Array.BYTES_PER_ELEMENT),n=E.ct.fromTypedArray(W,4*Float32Array.BYTES_PER_ELEMENT);if((0,g.a)(n,a,U),(0,L.i)(U)||(0,g.n)(n,n),f!==W)for(let l=3;l<f.length;l+=4)W[l]=f[l];return W}function D(f,W,o,a,n){if(!B(a))return S.error("Cannot convert spatial reference to PCPF"),n;$(w.TO_PCPF,E.ct.fromTypedArray(f,4*Float32Array.BYTES_PER_ELEMENT),E.fP.fromTypedArray(W),E.fP.fromTypedArray(o),a,E.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let l=3;l<f.length;l+=4)n[l]=f[l];return n}function N(f,W,o,a,n){if(!B(a))return S.error("Cannot convert to spatial reference from PCPF"),n;$(w.FROM_PCPF,E.ct.fromTypedArray(f,16),E.fP.fromTypedArray(W),E.fP.fromTypedArray(o),a,E.ct.fromTypedArray(n,16));for(let l=3;l<f.length;l+=4)n[l]=f[l];return n}function $(f,W,o,a,n,l){if(!W)return;const T=o.count,A=(0,M.rS)(n);if(J(n))for(let v=0;v<T;v++)a.getVec(v,q),W.getVec(v,G),(0,d.Bm)(A,q,tt,A),(0,L.f)(U,tt),f===w.FROM_PCPF&&(0,L.t)(U,U),(0,h.t)(G,G,U),l.setVec(v,G);else for(let v=0;v<T;v++){a.getVec(v,q),W.getVec(v,G),(0,d.Bm)(A,q,tt,A),(0,L.f)(U,tt);const rt=(0,F.mZ)(o.get(v,1));let ot=Math.cos(rt);f===w.TO_PCPF&&(ot=1/ot),U[0]*=ot,U[1]*=ot,U[2]*=ot,U[3]*=ot,U[4]*=ot,U[5]*=ot,f===w.FROM_PCPF&&(0,L.t)(U,U),(0,h.t)(G,G,U),(0,h.n)(G,G),l.setVec(v,G)}return l}function B(f){return J(f)||function X(f){return f.isWebMercator}(f)}function J(f){return f.isWGS84||(0,c.yW)(f)||(0,c.BZ)(f)||(0,c.V2)(f)}var w,f;(f=w||(w={}))[f.TO_PCPF=0]="TO_PCPF",f[f.FROM_PCPF=1]="FROM_PCPF";const q=(0,m.c)(),G=(0,m.c)(),tt=(0,I.c)(),U=(0,j.c)()}}]);
//# sourceMappingURL=571.49bcbd954788747f.js.map