"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[664],{53251:(Me,ee,c)=>{function t(){return[1,0,0,0,1,0,0,0,1]}function q(V,D,o,C,te,de,j,A,J){return[V,D,o,C,te,de,j,A,J]}function E(V,D){return new Float64Array(V,D,9)}c.d(ee,{a:()=>E,c:()=>t,f:()=>q}),Object.freeze(Object.defineProperty({__proto__:null,clone:function b(V){return[V[0],V[1],V[2],V[3],V[4],V[5],V[6],V[7],V[8]]},create:t,createView:E,fromValues:q},Symbol.toStringTag,{value:"Module"}))},50894:(Me,ee,c)=>{c.d(ee,{c:()=>Ve,g:()=>C,j:()=>ge,k:()=>je,m:()=>te,s:()=>o});var t=c(53251),b=c(29042),q=c(77765),E=c(33980),T=c(92950),V=c(71943);function o(r,s,u){u*=.5;const l=Math.sin(u);return r[0]=l*s[0],r[1]=l*s[1],r[2]=l*s[2],r[3]=Math.cos(u),r}function C(r,s){const u=2*Math.acos(s[3]),l=Math.sin(u/2);return l>(0,E.g)()?(r[0]=s[0]/l,r[1]=s[1]/l,r[2]=s[2]/l):(r[0]=1,r[1]=0,r[2]=0),u}function te(r,s,u){const l=s[0],a=s[1],h=s[2],d=s[3],g=u[0],v=u[1],w=u[2],z=u[3];return r[0]=l*z+d*g+a*w-h*v,r[1]=a*z+d*v+h*g-l*w,r[2]=h*z+d*w+l*v-a*g,r[3]=d*z-l*g-a*v-h*w,r}function se(r,s,u,l){const a=s[0],h=s[1],d=s[2],g=s[3];let v,w,z,X,$,P=u[0],Y=u[1],re=u[2],G=u[3];return w=a*P+h*Y+d*re+g*G,w<0&&(w=-w,P=-P,Y=-Y,re=-re,G=-G),1-w>(0,E.g)()?(v=Math.acos(w),z=Math.sin(v),X=Math.sin((1-l)*v)/z,$=Math.sin(l*v)/z):(X=1-l,$=l),r[0]=X*a+$*P,r[1]=X*h+$*Y,r[2]=X*d+$*re,r[3]=X*g+$*G,r}function Ve(r,s){return r[0]=-s[0],r[1]=-s[1],r[2]=-s[2],r[3]=s[3],r}function Ce(r,s){const u=s[0]+s[4]+s[8];let l;if(u>0)l=Math.sqrt(u+1),r[3]=.5*l,l=.5/l,r[0]=(s[5]-s[7])*l,r[1]=(s[6]-s[2])*l,r[2]=(s[1]-s[3])*l;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const h=(a+1)%3,d=(a+2)%3;l=Math.sqrt(s[3*a+a]-s[3*h+h]-s[3*d+d]+1),r[a]=.5*l,l=.5/l,r[3]=(s[3*h+d]-s[3*d+h])*l,r[h]=(s[3*h+a]+s[3*a+h])*l,r[d]=(s[3*d+a]+s[3*a+d])*l}return r}function je(r,s,u,l){const a=.5*Math.PI/180;s*=a,u*=a,l*=a;const h=Math.sin(s),d=Math.cos(s),g=Math.sin(u),v=Math.cos(u),w=Math.sin(l),z=Math.cos(l);return r[0]=h*v*z-d*g*w,r[1]=d*g*z+h*v*w,r[2]=d*v*w-h*g*z,r[3]=d*v*z+h*g*w,r}const De=V.c,Ae=V.s,be=V.a,oe=te,W=V.b,O=V.d,I=V.l,we=V.e,he=we,le=V.f,me=le,R=V.n,ge=V.g,ze=V.h,L=(0,q.c)(),Ze=(0,q.f)(1,0,0),Le=(0,q.f)(0,1,0),ae=(0,b.a)(),pe=(0,b.a)(),ve=(0,t.c)();Object.freeze(Object.defineProperty({__proto__:null,add:be,calculateW:function J(r,s){const u=s[0],l=s[1],a=s[2];return r[0]=u,r[1]=l,r[2]=a,r[3]=Math.sqrt(Math.abs(1-u*u-l*l-a*a)),r},conjugate:Ve,copy:De,dot:O,equals:ze,exactEquals:ge,fromEuler:je,fromMat3:Ce,getAxisAngle:C,identity:function D(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r},invert:function Ne(r,s){const u=s[0],l=s[1],a=s[2],h=s[3],d=u*u+l*l+a*a+h*h,g=d?1/d:0;return r[0]=-u*g,r[1]=-l*g,r[2]=-a*g,r[3]=h*g,r},len:he,length:we,lerp:I,mul:oe,multiply:te,normalize:R,random:function Te(r){const s=E.R,u=s(),l=s(),a=s(),h=Math.sqrt(1-u),d=Math.sqrt(u);return r[0]=h*Math.sin(2*Math.PI*l),r[1]=h*Math.cos(2*Math.PI*l),r[2]=d*Math.sin(2*Math.PI*a),r[3]=d*Math.cos(2*Math.PI*a),r},rotateX:function de(r,s,u){u*=.5;const l=s[0],a=s[1],h=s[2],d=s[3],g=Math.sin(u),v=Math.cos(u);return r[0]=l*v+d*g,r[1]=a*v+h*g,r[2]=h*v-a*g,r[3]=d*v-l*g,r},rotateY:function j(r,s,u){u*=.5;const l=s[0],a=s[1],h=s[2],d=s[3],g=Math.sin(u),v=Math.cos(u);return r[0]=l*v-h*g,r[1]=a*v+d*g,r[2]=h*v+l*g,r[3]=d*v-a*g,r},rotateZ:function A(r,s,u){u*=.5;const l=s[0],a=s[1],h=s[2],d=s[3],g=Math.sin(u),v=Math.cos(u);return r[0]=l*v+a*g,r[1]=a*v-l*g,r[2]=h*v+d*g,r[3]=d*v-h*g,r},rotationTo:function Ie(r,s,u){const l=(0,T.e)(s,u);return l<-.999999?((0,T.f)(L,Ze,s),(0,T.u)(L)<1e-6&&(0,T.f)(L,Le,s),(0,T.n)(L,L),o(r,L,Math.PI),r):l>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):((0,T.f)(L,s,u),r[0]=L[0],r[1]=L[1],r[2]=L[2],r[3]=1+l,R(r,r))},scale:W,set:Ae,setAxes:function K(r,s,u,l){const a=ve;return a[0]=u[0],a[3]=u[1],a[6]=u[2],a[1]=l[0],a[4]=l[1],a[7]=l[2],a[2]=-s[0],a[5]=-s[1],a[8]=-s[2],R(r,Ce(r,a))},setAxisAngle:o,slerp:se,sqlerp:function ie(r,s,u,l,a,h){return se(ae,s,a,h),se(pe,u,l,h),se(r,ae,pe,2*h*(1-h)),r},sqrLen:me,squaredLength:le,str:function _e(r){return"quat("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+")"}},Symbol.toStringTag,{value:"Module"}))},29042:(Me,ee,c)=>{function t(){return[0,0,0,1]}function b(D){return[D[0],D[1],D[2],D[3]]}function E(D,o){return new Float64Array(D,o,4)}c.d(ee,{I:()=>T,a:()=>t,b:()=>b,c:()=>E});const T=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:T,clone:b,create:t,createView:E,fromValues:function q(D,o,C,te){return[D,o,C,te]}},Symbol.toStringTag,{value:"Module"}))},20664:(Me,ee,c)=>{c.r(ee),c.d(ee,{default:()=>lt});var t=c(18100),b=c(97621),q=c(32995),E=c(28191),T=c(53661),V=c(90642),D=c(30801),o=c(9497),C=c(83382),de=(c(19420),c(66508)),j=c(20891),A=c(92950),J=c(77765),se=c(10465),Te=c(22735),Ne=c(450),Ve=c(6363),Ce=c(33829),je=c(16617),_e=c(72450),De=c(49605),Ae=c(4583),be=c(51299),oe=c(23973),W=c(94904),O=c(59257),I=c(44480),we=c(2153),he=c(50894),le=c(29042),me=c(33980);const R=(0,J.c)(),ge=(0,le.a)(),ze=(0,le.a)(),Ie=(0,le.a)(),L=(0,J.f)(0,0,1),Ze=(0,J.f)(0,1,0),Le=(0,J.f)(1,0,0);function ie(e){(0,A.c)(R,e),(0,A.n)(R,R);const i=Math.atan2(R[1],R[0]),n=(0,he.s)((0,le.a)(),L,-i);(0,A.q)(R,R,n);const p=-1*Math.atan2(R[2],R[0]);return[(0,me.a)(i)+270,(0,me.a)(p)+90]}function ae(e,i){return(0,he.s)(ze,L,(0,me.t)(e-270)),(0,he.s)(Ie,Ze,(0,me.t)(i-90)),(0,he.m)(ge,ze,Ie),(0,A.c)(R,Le),(0,A.q)(R,R,ge),(0,A.n)(R,R),[R[0],R[1],R[2]]}var pe=c(36734);let K=class extends((0,W.J)(I.wq)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(e),0,!0)}set orientation(e){const i=ae(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(i),0,!0)}set tilt(e){const i=ae(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};(0,t._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],K.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],K.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,pe.p)(e=>O.BV.normalize((0,C.q9)(e),0,!0))],K.prototype,"orientation",null),(0,t._)([(0,o.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,pe.p)(e=>O.BV.normalize((0,C.q9)(e),0,!0))],K.prototype,"tilt",null),(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],K.prototype,"normal",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],K.prototype,"point",void 0),K=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelSlice")],K);const ve=K;var Je=c(29184);let r=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(i),0,!0)}};(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!0,write:!0}})],r.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:String,json:{origins:{service:{read:Je.r}},write:{enabled:!0,isRequired:!0}}}),(0,we.B)({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],r.prototype,"href",void 0),(0,t._)([(0,o.Cb)({type:C.z8,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],r.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],r.prototype,"orientation",null),(0,t._)([(0,o.Cb)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],r.prototype,"tilt",null),(0,t._)([(0,o.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"normal",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"point",void 0),(0,t._)([(0,o.Cb)({type:[C.z8],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"sizeInPixel",void 0),(0,t._)([(0,o.Cb)({type:[ve],json:{write:!0}})],r.prototype,"slices",void 0),(0,t._)([(0,o.Cb)({type:C.z8,json:{default:0,write:!0}})],r.prototype,"timeId",void 0),(0,t._)([(0,o.Cb)({type:C.z8,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"variableId",void 0),r=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelSection")],r);const s=r;let u=class extends I.wq{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,t._)([(0,o.Cb)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"diffuseFactor",void 0),(0,t._)([(0,o.Cb)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],u.prototype,"specularFactor",void 0),u=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelSimpleShading")],u);const l=u;let a=class extends I.wq{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,t._)([(0,o.Cb)({type:["discrete","continuous"],json:{write:!0}})],a.prototype,"continuity",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],a.prototype,"hasNoData",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],a.prototype,"noData",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],a.prototype,"offset",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],a.prototype,"scale",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"type",void 0),a=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelFormat")],a);const h=a;let d=class extends I.wq{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"name",void 0),(0,t._)([(0,o.Cb)({type:h,json:{write:!0}})],d.prototype,"originalFormat",void 0),(0,t._)([(0,o.Cb)({type:h,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"renderingFormat",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],d.prototype,"unit",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],d.prototype,"volumeId",void 0),(0,t._)([(0,o.Cb)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],d.prototype,"type",void 0),d=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelVariable")],d);const g=d;var v=c(88684),w=c(25764);let z=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.color=w.Z.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};(0,t._)([(0,o.Cb)({type:w.Z,json:{type:[C.z8],write:{enabled:!0,isRequired:!0}}})],z.prototype,"color",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"value",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!0,write:!0}})],z.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],z.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!1,write:!0}})],z.prototype,"colorLocked",void 0),z=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelIsosurface")],z);const X=z;var $=c(40434),P=c(93142);let Y=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.color=null,this.position=0}};(0,t._)([(0,o.Cb)({type:w.Z,json:{type:[C.z8],write:{enabled:!0,isRequired:!0}}})],Y.prototype,"color",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],Y.prototype,"position",void 0),Y=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelColorStop")],Y);const re=Y;let G=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.opacity=1,this.position=0}};(0,t._)([(0,o.Cb)({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],G.prototype,"opacity",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],G.prototype,"position",void 0),G=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelOpacityStop")],G);const Pe=G;let fe=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!1,write:!0}})],fe.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],fe.prototype,"range",void 0),fe=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelRangeFilter")],fe);const ke=fe;var B,e;(e=B||(B={}))[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both";let H=class extends((0,W.J)(I.wq)){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(b.Z.ofType(re)),this.opacityStops=new(b.Z.ofType(Pe))}set colorStops(e){this._set("colorStops",(0,$.Z)(e,this._get("colorStops"),b.Z.ofType(re)))}set opacityStops(e){this._set("opacityStops",(0,$.Z)(e,this._get("opacityStops"),b.Z.ofType(Pe)))}getPreviousNext(e,i,n){let p=e;for(;--p>0&&i[p].type!==n&&i[p].type!==B.Both;);let y=e;const m=i.length;for(;++y<m&&i[y].type!==n&&i[y].type!==B.Both;);return[p,y]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],n=[];for(const S of this.colorStops){if(!S.color)return e;n.push({color:{r:S.color.r,g:S.color.g,b:S.color.b,a:Math.round(255*(1-S.color.a))},position:S.position,type:B.Color})}if(0===this.opacityStops.length)for(const S of n)i.push({color:S.color,position:S.position});else{for(const x of this.opacityStops){const M=(0,P.uZ)(x.position,0,1),N=Math.round(255*(0,P.uZ)(1-x.opacity,0,1));let Z=!1;for(const _ of n)if(_.type===B.Color&&Math.abs(_.position-M)<1e-5){_.color.a=N,_.type=B.Both,Z=!0;break}Z||n.push({color:{r:0,g:0,b:0,a:N},position:x.position,type:B.Alpha})}n.sort((x,M)=>x.position<M.position?-1:1);const S=n.length;for(let x=0;x<S;++x){const M=n[x];if(M.type!==B.Both)if(M.type===B.Color){const[N,Z]=this.getPreviousNext(x,n,B.Alpha);M.color.a=-1!==N&&Z!==S?Math.round((0,P.t7)(n[N].color.a,n[Z].color.a,(M.position-n[N].position)/(n[Z].position-n[N].position))):-1!==N?n[N].color.a:n[Z].color.a}else{const[N,Z]=this.getPreviousNext(x,n,B.Color);if(-1!==N&&Z!==S){const _=(M.position-n[N].position)/(n[Z].position-n[N].position),xe=n[N].color,at=n[Z].color;["r","g","b"].forEach(Ue=>{M.color[Ue]=Math.round((0,P.t7)(xe[Ue],at[Ue],_))})}else["r","g","b"].forEach(-1!==N?_=>{M.color[_]=n[N][_]}:_=>{M.color[_]=n[Z][_]})}}for(const x of n)i.push({color:x.color,position:x.position})}i[0].position=0,i[i.length-1].position=1;let y=0,m=1;for(let S=0;S<this._colorMapSize;++S){const x=S/this._colorMapSize;for(;x>i[m].position;)y=m++;const M=(x-i[y].position)/(i[m].position-i[y].position),N=i[y].color,Z=i[m].color,_=new w.Z;["r","g","b"].forEach(xe=>{_[xe]=Math.round((0,P.t7)(N[xe],Z[xe],M))}),_.a=(0,P.uZ)(1-(0,P.t7)(N.a,Z.a,M)/255,0,1),e.push(_)}return e}getColorForContinuousDataValue(e,i){const n=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||n.length<256)return null;let p=this.stretchRange[0],y=this.stretchRange[1];if(p>y){const S=p;p=y,y=S}e=(0,P.uZ)(e,p,y);const m=n[Math.round((e-p)/(y-p)*(this._colorMapSize-1))].clone();return i||(m.a=1),m}};(0,t._)([(0,o.Cb)({type:["linear","nearest"],json:{write:!0}})],H.prototype,"interpolation",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"stretchRange",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(re),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],H.prototype,"colorStops",null),(0,t._)([(0,o.Cb)({type:b.Z.ofType(Pe),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],H.prototype,"opacityStops",null),(0,t._)([(0,o.Cb)({type:ke,json:{write:!0}})],H.prototype,"rangeFilter",void 0),(0,t._)([(0,o.Cb)({type:[w.Z],clonable:!1,json:{read:!1}})],H.prototype,"rasterizedTransferFunction",null),H=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelTransferFunctionStyle")],H);const et=H;let ue=class extends((0,W.J)(I.wq)){constructor(){super(...arguments),this.color=w.Z.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};(0,t._)([(0,o.Cb)({type:w.Z,json:{type:[C.z8],write:{enabled:!0,isRequired:!0}}})],ue.prototype,"color",void 0),(0,t._)([(0,o.Cb)({type:C.z8,json:{write:{enabled:!0,isRequired:!0}}})],ue.prototype,"value",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!0,write:!0}})],ue.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],ue.prototype,"label",void 0),ue=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelUniqueValue")],ue);const We=ue;var Fe;let ne=Fe=class extends I.wq{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(b.Z.ofType(We)),this.isosurfaces=new(b.Z.ofType(X))}clone(){return new Fe({variableId:this.variableId,label:this.label,transferFunction:(0,v.d9)(this.transferFunction),uniqueValues:(0,v.d9)(this.uniqueValues),isosurfaces:(0,v.d9)(this.isosurfaces)})}};(0,t._)([(0,o.Cb)({type:C.z8,json:{write:{enabled:!0,isRequired:!0}}})],ne.prototype,"variableId",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],ne.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:et,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],ne.prototype,"transferFunction",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(We),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],ne.prototype,"uniqueValues",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(X),json:{write:{enabled:!0,overridePolicy(){return{enabled:(!this.uniqueValues||this.uniqueValues.length<1)&&!!this.isosurfaces&&this.isosurfaces.length>0}}}}})],ne.prototype,"isosurfaces",void 0),ne=Fe=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelVariableStyle")],ne);const Ke=ne;var qe=c(35787),$e=c(68230),tt=c(53492);let Re=class extends I.wq{constructor(){super(...arguments),this.values=null}};(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],Re.prototype,"values",void 0),Re=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelIrregularSpacing")],Re);const ot=Re;let Se=class extends I.wq{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],Se.prototype,"scale",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],Se.prototype,"offset",void 0),Se=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelRegularSpacing")],Se);const it=Se;let F=class extends I.wq{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,t._)([(0,o.Cb)({type:ot,json:{write:!0}})],F.prototype,"irregularSpacing",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"isPositiveUp",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],F.prototype,"isWrappedDateLine",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],F.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],F.prototype,"name",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],F.prototype,"quantity",void 0),(0,t._)([(0,o.Cb)({type:it,json:{write:!0}})],F.prototype,"regularSpacing",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:!0}})],F.prototype,"size",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],F.prototype,"unit",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{read:!1}})],F.prototype,"isRegular",null),F=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelDimension")],F);const rt=F,Ye="esri.layers.voxel.VoxelVolume",Ge=E.Z.getLogger(Ye);let U=class extends I.wq{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=$e.Z.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!(!this.dimensions||!Array.isArray(this.dimensions)||4!==this.dimensions.length||this.dimensions[0].size<1||this.dimensions[1].size<1||-1===this.zDimension||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),n=this.dimensions[2],p=n.isRegular?n.getRange():[0,n.size];return[e[0],i[0],p[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),n=this.dimensions[2],p=n.isRegular?n.getRange():[0,n.size],y=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let m=0;m<3;++m)y[m]<2?y[m]=1:y[m]-=1;return n.isRegular&&!n.isPositiveUp&&(y[2]*=-1),[(e[1]-e[0])/y[0],(i[1]-i[0])/y[1],(p[1]-p[0])/y[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){return this.isValid?[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[this.zDimension].size]:[0,0,0]}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return Ge.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,tt.fS)(this.spatialReference,e.spatialReference))return Ge.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=(0,J.f)(e.x,e.y,e.z??0);(0,A.b)(i,i,this.originInLayerSpace3D),(0,A.C)(i,i,this.voxelSizeInLayerSpaceSigned);const n=this.dimensions[this.zDimension];if(!n.isRegular&&Array.isArray(n.irregularSpacing?.values)&&n.irregularSpacing.values.length>1){const p=e.z??0,y=n.irregularSpacing.values,m=n.isPositiveUp?1:-1,S=y.reduce((x,M)=>Math.abs(m*M-p)<Math.abs(m*x-p)?M:x);for(let x=0;x<y.length;++x)if(y[x]===S){i[2]=x;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new qe.Z({x:0,y:0,spatialReference:this.spatialReference});const i=(0,J.d)(e);if((0,A.B)(i,i,this.voxelSizeInLayerSpaceSigned),(0,A.a)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new qe.Z({x:i[0],y:i[1],spatialReference:this.spatialReference});const n=this.dimensions[this.zDimension];return n.isRegular||Array.isArray(n.irregularSpacing?.values)&&(i[2]=e[2]<0?n.irregularSpacing.values[0]:e[2]<n.irregularSpacing.values.length?n.irregularSpacing.values[e[2]]:n.irregularSpacing.values[n.irregularSpacing.values.length-1],n.isPositiveUp||(i[2]*=-1)),new qe.Z({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"id",void 0),(0,t._)([(0,o.Cb)({type:[rt],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"dimensions",void 0),(0,t._)([(0,o.Cb)({type:$e.Z,json:{read:{enabled:!1}}})],U.prototype,"spatialReference",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{read:!1}})],U.prototype,"zDimension",null),(0,t._)([(0,o.Cb)({type:[Boolean],json:{read:!1}})],U.prototype,"isValid",null),(0,t._)([(0,o.Cb)({type:[Number],json:{read:!1}})],U.prototype,"originInLayerSpace3D",null),(0,t._)([(0,o.Cb)({type:[Number],json:{read:!1}})],U.prototype,"voxelSizeInLayerSpaceSigned",null),(0,t._)([(0,o.Cb)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],U.prototype,"volumeType",null),(0,t._)([(0,o.Cb)({type:[Number],json:{read:!1}})],U.prototype,"sizeInVoxels",null),U=(0,t._)([(0,j.j)(Ye)],U);const Xe=U;var Ee;let ce=Ee=class extends I.wq{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new Ee;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]}};(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"apronWidth",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"brickSize",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"maxLodLevel",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],ce.prototype,"nodeSize",void 0),ce=Ee=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelVolumeIndex")],ce);const nt=ce;let Q=class extends((0,W.J)(I.wq)){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(e),0,!0)}set orientation(e){const i=ae(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,i]=ie(this.normal);return O.BV.normalize((0,C.q9)(i),0,!0)}set tilt(e){const i=ae(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};(0,t._)([(0,o.Cb)({type:Boolean,json:{default:!0,write:!0}})],Q.prototype,"enabled",void 0),(0,t._)([(0,o.Cb)({type:String,json:{write:!0}})],Q.prototype,"label",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,pe.p)(e=>O.BV.normalize((0,C.q9)(e),0,!0))],Q.prototype,"orientation",null),(0,t._)([(0,o.Cb)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,pe.p)(e=>O.BV.normalize((0,C.q9)(e),0,!0))],Q.prototype,"tilt",null),(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],Q.prototype,"normal",void 0),(0,t._)([(0,o.Cb)({type:[Number],json:{write:!0}})],Q.prototype,"point",void 0),Q=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelDynamicSection")],Q);const Oe=Q;var Be;let k=Be=class extends I.wq{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(b.Z.ofType(ve)),this.dynamicSections=new(b.Z.ofType(Oe))}set slices(e){this._set("slices",(0,$.Z)(e,this._get("slices"),b.Z.ofType(ve)))}set dynamicSections(e){this._set("dynamicSections",(0,$.Z)(e,this._get("dynamicSections"),b.Z.ofType(Oe)))}clone(){return new Be({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:(0,v.d9)(this.slices),dynamicSections:(0,v.d9)(this.dynamicSections)})}};(0,t._)([(0,o.Cb)({type:C.z8,json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"volumeId",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{default:1,write:!0}})],k.prototype,"verticalExaggeration",void 0),(0,t._)([(0,o.Cb)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],k.prototype,"exaggerationMode",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{default:0,write:!0}})],k.prototype,"verticalOffset",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(ve),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],k.prototype,"slices",null),(0,t._)([(0,o.Cb)({type:b.Z.ofType(Oe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],k.prototype,"dynamicSections",null),k=Be=(0,t._)([(0,j.j)("esri.layers.voxel.VoxelVolumeStyle")],k);const He=k;var st=c(67056);const Qe="esri.layers.VoxelLayer",ye=E.Z.getLogger(Qe);let f=class extends((0,De.Vt)((0,Ve.Y)((0,Ce.q)((0,je.I)((0,_e.M)((0,V.R)((0,Ne.V)(Te.Z)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new l,this.opacity=1,this.variables=new b.Z,this.volumes=new b.Z,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!0,this.popupTemplate=null,this.test=null,this.volumeStyles=new(b.Z.ofType(He)),this.variableStyles=new(b.Z.ofType(Ke)),this.sections=new(b.Z.ofType(s)),e?.constantUpscaling&&(this.test={constantUpscaling:!0})}set url(e){this._set("url",(0,Ae.Nm)(e,ye))}load(e){const i=(0,T.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(D.r9).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(n),Promise.resolve(this)}read(e,i){super.read(e,i);for(const n of this.volumes)n.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new q.Z("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new q.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new q.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,n){if(null!=e&&"object"==typeof e){const p=se.Z.fromJSON(e,n);if(0===p.zmin&&0===p.zmax&&Array.isArray(i.volumes)){const y=Xe.fromJSON(i.volumes[0]);if(y.isValid&&"xyt"!==y.volumeType){const m=y.dimensions[2];if(m.isRegular){let S=m.regularSpacing.offset,x=m.regularSpacing.offset+m.regularSpacing.scale*(m.size-1);if(S>x){const M=S;S=x,x=M}p.zmin=S,p.zmax=x}}}return p}return null}get voxelFields(){const e=[new oe.Z({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new oe.Z({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new oe.Z({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],i=this.getVolume(null);if((0,T.pC)(i)){if("xyzt"===i.volumeType||"xyt"===i.volumeType){const n=new oe.Z({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(n);const p=new oe.Z({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(p)}if("xyt"!==i.volumeType){const n=new oe.Z({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(n)}}return e}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){return(0,st.eZ)({fields:this.voxelFields,title:this.title},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=(0,T.pC)(e)?e:this.currentVariableId,!this.variableStyles||-1===i)return null;const n=this.variableStyles.findIndex(p=>p.variableId===i);return n<0?null:this.variableStyles.getItemAt(n)}getVariable(e){let i=-1;if(i=(0,T.pC)(e)?e:this.currentVariableId,!this.variables||-1===i)return null;const n=this.variables.findIndex(p=>p.id===i);return n<0?null:this.variables.getItemAt(n)}getVolume(e){const i=this.getVariable(e);return(0,T.pC)(i)?this.volumes.find(({id:n})=>n===i.volumeId):null}getVolumeStyle(e){const i=this.getVariable(e);return(0,T.pC)(i)?this.volumeStyles.find(({volumeId:n})=>n===i.volumeId):null}getColorForContinuousDataValue(e,i,n){const p=this.getVariable(e);if((0,T.Wi)(p)||"continuous"!==p.renderingFormat?.continuity||!this.variableStyles)return null;const y=this.variableStyles.findIndex(S=>S.variableId===e);if(y<0)return null;const m=this.variableStyles.getItemAt(y);return m.transferFunction?m.transferFunction.getColorForContinuousDataValue(i,n):null}getSections(){const e=[];for(const i of this.sections)e.push(new s({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const n=this._getVariable(i);if((0,T.pC)(n)){const p=i.clone();p.isosurfaces.length>4&&(p.isosurfaces=p.isosurfaces.slice(0,3),ye.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const y of p.isosurfaces)if(!y.colorLocked){const m=this.getColorForContinuousDataValue(p.variableId,y.value,!1);null===m||m.equals(y.color)||(y.color=m)}if("continuous"===n.renderingFormat.continuity)(null===p.transferFunction||p.transferFunction.colorStops.length<2)&&ye.error(`VoxelVariableStyle for variable ${n.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==p.transferFunction&&(Array.isArray(p.transferFunction.stretchRange)&&2===p.transferFunction.stretchRange.length||(ye.error(`VoxelVariableStyle for variable ${n.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),p.transferFunction.stretchRange=[0,1],p.transferFunction.colorStops.removeAll()));else if("discrete"===n.renderingFormat.continuity)if(0===i.uniqueValues.length)ye.error(`VoxelVariableStyle for variable ${n.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const y of i.uniqueValues)null!=y.label||null==y.value||(y.label=y.value.toString());e.push(p)}else ye.error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const n=this._getVolumeFromVolumeId(i.volumeId);if((0,T.pC)(n)){const p=i.clone();for(const y of p.slices)this._isPlaneValid(y,[0,1,n.zDimension],n.dimensions)||(y.enabled=!1,y.label="invalid");for(const y of p.dynamicSections)this._isPlaneValid(y,[0,1,n.zDimension],n.dimensions)||(y.enabled=!1,y.label="invalid");e.push(p)}else ye.error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const n of this.variables)if(n.id===i)return n;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,n){if(!(e.point&&Array.isArray(e.point)&&3===e.point.length&&e.normal&&Array.isArray(e.normal)&&3===e.normal.length))return!1;for(let m=0;m<3;++m){const S=e.point[m];if(S<0||S>=n[i[m]].size)return!1}const p=(0,J.f)(e.normal[0],e.normal[1],e.normal[2]);return(0,A.n)(p,p),!(Math.abs(p[0])+Math.abs(p[1])+Math.abs(p[2])<1e-6||(e.normal[0]=p[0],e.normal[1]=p[1],e.normal[2]=p[2],0))}};(0,t._)([(0,o.Cb)({type:["Voxel"]})],f.prototype,"operationalLayerType",void 0),(0,t._)([(0,o.Cb)(be.rn)],f.prototype,"legendEnabled",void 0),(0,t._)([(0,o.Cb)({json:{write:!0}})],f.prototype,"title",void 0),(0,t._)([(0,o.Cb)(be.HQ)],f.prototype,"url",null),(0,t._)([(0,o.Cb)({type:b.Z.ofType(s),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],f.prototype,"sections",void 0),(0,t._)([(0,o.Cb)({type:C.z8,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],f.prototype,"currentVariableId",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(He),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],f.prototype,"volumeStyles",void 0),(0,t._)([(0,o.Cb)({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],f.prototype,"renderMode",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(Ke),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],f.prototype,"variableStyles",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],f.prototype,"enableSlices",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],f.prototype,"enableSections",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],f.prototype,"enableDynamicSections",void 0),(0,t._)([(0,o.Cb)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],f.prototype,"enableIsosurfaces",void 0),(0,t._)([(0,o.Cb)({type:l,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],f.prototype,"shading",void 0),(0,t._)([(0,o.Cb)({type:["show","hide"]})],f.prototype,"listMode",void 0),(0,t._)([(0,o.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"opacity",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(g)})],f.prototype,"variables",void 0),(0,t._)([(0,o.Cb)({type:b.Z.ofType(Xe)})],f.prototype,"volumes",void 0),(0,t._)([(0,o.Cb)({type:nt})],f.prototype,"index",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],f.prototype,"minScale",void 0),(0,t._)([(0,o.Cb)({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],f.prototype,"maxScale",void 0),(0,t._)([(0,o.Cb)({json:{read:!1},readOnly:!0})],f.prototype,"type",void 0),(0,t._)([(0,o.Cb)({readOnly:!0,json:{name:"serviceVersion"}})],f.prototype,"version",void 0),(0,t._)([(0,de.r)("service","version")],f.prototype,"readVersion",null),(0,t._)([(0,o.Cb)({type:se.Z})],f.prototype,"fullExtent",void 0),(0,t._)([(0,de.r)("service","fullExtent",["fullExtent"])],f.prototype,"readFullExtent",null),(0,t._)([(0,o.Cb)({readOnly:!0,clonable:!1,json:{read:!1}})],f.prototype,"voxelFields",null),(0,t._)([(0,o.Cb)(be.C_)],f.prototype,"popupEnabled",void 0),(0,t._)([(0,o.Cb)({readOnly:!0})],f.prototype,"defaultPopupTemplate",null),f=(0,t._)([(0,j.j)(Qe)],f);const lt=f}}]);
//# sourceMappingURL=664.21fb17dd23c38488.js.map