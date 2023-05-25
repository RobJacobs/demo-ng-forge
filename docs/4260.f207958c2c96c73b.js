"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[4260],{99704:(j,A,e)=>{e.d(A,{T:()=>I});var o=e(71670),b=e(30801),O=e(20834),L=e(28679),l=e(53971),c=e(53661),M=e(55798),U=e(82769),d=e(1611),P=e(52300),C=e(70260),w=e(51399),m=e(86626);function T(V,t){const r=t.length;if(V<t[0].value||1===r)return t[0].size;for(let s=1;s<r;s++)if(V<t[s].value)return t[s-1].size+(V-t[s-1].value)/(t[s].value-t[s-1].value)*(t[s].size-t[s-1].size);return t[r-1].size}class R{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=C.v}getSizeVVFieldStops(t){const r=this._vvSizeFieldStops;if(r)switch(r.type){case"static":return r;case"level-dependent":return(0,c.Pt)(r.levels[t],()=>{let s=1/0,p=0;for(const h in r.levels){const _=parseFloat(h),y=Math.abs(t-_);y<s&&(s=y,p=_)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const E=2**((t-p)/2),D=(0,c.Wg)(r.levels[p]),g=new Float32Array(D.values);return g[2]*=E,g[3]*=E,{sizes:(0,c.Wg)(D.sizes),values:g}});default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){(0,c.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,r,s){this._updateEffects(s),this._vvInfo=r,this._technique=(0,w.EJ)(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,m.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){this.outsideLabelsVisible=!!(0,c.pC)(t)&&t.excludedLabelsVisible}_updateVisualVariables(t,r){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return;const p=t.size;if(p){if(s.vvSizeEnabled=!0,p.minMaxValue){const h=p.minMaxValue;let _,y;if((0,P.$K)(h.minSize)&&(0,P.$K)(h.maxSize))if((0,P.hj)(h.minSize)&&(0,P.hj)(h.maxSize))_=(0,M.F2)(h.minSize),y=(0,M.F2)(h.maxSize);else{const f=r.scale;_=(0,M.F2)(T(f,h.minSize.stops)),y=(0,M.F2)(T(f,h.maxSize.stops))}this.vvSizeMinMaxValue.set([h.minDataValue,h.maxDataValue,_,y])}if(p.scaleStops&&(this.vvSizeScaleStopsValue=(0,M.F2)(T(r.scale,p.scaleStops.stops))),p.unitValue){const h=(0,U.c9)(r.spatialReference)/d.a[p.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=h/r.resolution}p.fieldStops&&(this._vvSizeFieldStops=p.fieldStops)}const E=t.color;E&&(s.vvColorEnabled=!0,this.vvColorValues.set(E.values),this.vvColors.set(E.colors));const D=t.opacity;D&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(D.values),this.vvOpacities.set(D.opacities));const g=t.rotation;g&&(s.vvRotationEnabled=!0,s.vvRotationType=g.type)}}class I extends l.Z{constructor(t){super(t),this._rendererInfo=new R,this._materialItemsRequestQueue=new O.Z,this.attributeView=new L.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,r,s){this._rendererInfo.setInfo(t,r,s),this.requestRender()}getMaterialItems(t,r){var s=this;return(0,o.Z)(function*(){if(!t||0===t.length)return[];const p=(0,b.hh)();return s._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:p}),s.requestRender(),p.promise})()}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let r=this._materialItemsRequestQueue.pop();for(;r;)this._processMaterialItemRequest(t,r),r=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const r of this.children)r.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}updateTransforms(t){if(this.children.some(r=>r.hasData))for(const r of this.children)r.setTransform(t)}createRenderParams(t){const r=super.createRenderParams(t);return r.rendererInfo=this._rendererInfo,r.attributeView=this.attributeView,r}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:r,abortOptions:s,resolver:p}){const{painter:E,pixelRatio:D}=t,g=r.map(h=>E.textureManager.rasterizeItem(h.symbol,D,h.glyphIds,s));Promise.all(g).then(h=>{if(!this.stage)return void p.reject();const _=h.map((y,f)=>({id:r[f].id,mosaicItem:y}));p.resolve(_)},p.reject)}}},53971:(j,A,e)=>{e.d(A,{Z:()=>M});var o=e(67087),b=e(20753),O=e(83345),L=e(26877),l=e(67135);const c=(U,d)=>U.key.level-d.key.level!=0?U.key.level-d.key.level:U.key.row-d.key.row!=0?U.key.row-d.key.row:U.key.col-d.key.col;class M extends O.Z{constructor(d){super(),this._tileInfoView=d}get requiresDedicatedFBO(){return!1}renderChildren(d){this.sortChildren(c),this.setStencilReference(d),super.renderChildren(d)}createRenderParams(d){const{state:P}=d,C=super.createRenderParams(d);return C.requiredLevel=this._tileInfoView.getClosestInfoForScale(P.scale).level,C.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(P.scale),C}prepareRenderPasses(d){const P=super.prepareRenderPasses(d);return P.push(d.registerRenderPass({name:"stencil",brushes:[l.Z],drawPhase:b.jx.DEBUG|b.jx.MAP|b.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,o.Z)("esri-tiles-debug")&&P.push(d.registerRenderPass({name:"tileInfo",brushes:[L.Z],drawPhase:b.jx.DEBUG,target:()=>this.children})),P}getStencilTarget(){return this.children}setStencilReference(d){let P=1;for(const C of this.children)C.stencilRef=P++}}},63982:(j,A,e)=>{e.d(A,{y:()=>i});var o=e(18100),b=e(97621),O=e(40434),L=e(32995),l=e(7521),c=e(9497),d=(e(83382),e(19420),e(20891)),P=e(98806),C=e(21795),w=e(44480);let m=class extends w.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,o._)([(0,c.Cb)({readOnly:!0})],m.prototype,"version",null),m=(0,o._)([(0,d.j)("esri.views.layers.support.ClipArea")],m);const T=m;var R;let I=R=class extends T{constructor(a){super(a),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new R({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,o._)([(0,c.Cb)({type:[Number,String],json:{write:!0}})],I.prototype,"left",void 0),(0,o._)([(0,c.Cb)({type:[Number,String],json:{write:!0}})],I.prototype,"right",void 0),(0,o._)([(0,c.Cb)({type:[Number,String],json:{write:!0}})],I.prototype,"top",void 0),(0,o._)([(0,c.Cb)({type:[Number,String],json:{write:!0}})],I.prototype,"bottom",void 0),I=R=(0,o._)([(0,d.j)("esri.views.layers.support.ClipRect")],I);const V=I;e(6010);var D,r=e(70535),s=e(71182),p=e(10465),E=e(55733);const g={base:r.Z,key:"type",typeMap:{extent:p.Z,polygon:E.Z}};let h=D=class extends T{constructor(a){super(a),this.type="geometry",this.geometry=null}clone(){return new D({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,o._)([(0,c.Cb)({types:g,json:{read:s.im,write:!0}})],h.prototype,"geometry",void 0),h=D=(0,o._)([(0,d.j)("esri.views.layers.support.Geometry")],h);const _=h;let y=class extends T{constructor(a){super(a),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,o._)([(0,c.Cb)({type:[[[Number]]],json:{write:!0}})],y.prototype,"path",void 0),y=(0,o._)([(0,d.j)("esri.views.layers.support.Path")],y);const B=b.Z.ofType({key:"type",base:null,typeMap:{rect:V,path:y,geometry:_}}),i=a=>{let n=class extends a{constructor(){super(...arguments),this.attached=!1,this.clips=new B,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const v=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&v&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new L.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new P.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.YP)(()=>this.suspended,u=>{this.container&&(this.container.visible=!u),this.view&&!u&&this.updateRequested&&this.view.requestUpdate()},l.tX),(0,l.YP)(()=>this.layer?.opacity??1,u=>{this.container&&(this.container.opacity=u)},l.tX),(0,l.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",u=>{this.container&&(this.container.blendMode=u)},l.tX),(0,l.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,u=>{this.container&&(this.container.effect=u)},l.tX),(0,l.YP)(()=>this.highlightOptions,u=>this.container.highlightOptions=u,l.tX),(0,l.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},l.tX),(0,l.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:u})=>{const x=null!=u&&this.isVisibleAtScale(u);x!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",x)},l.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(u=>{u===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const v=this.view?.spatialReference;return null==v||this.supportsSpatialReference(v)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(v){const S=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!S)return!0;const{minScale:u,maxScale:x}=S;return(0===u||v<=u)&&(0===x||v>=x)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(v){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",v),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(v))):this.updateRequested=!1}hitTest(v,S){return Promise.resolve(null)}supportsSpatialReference(v){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const v=super.getSuspendInfo(),S=!this.spatialReferenceSupported,u=this.visibleAtCurrentScale;return S&&(v.spatialReferenceNotSupported=S),u&&(v.outsideScaleRange=u),v}addAttachHandles(v){this.addHandles(v,"attach")}};return(0,o._)([(0,c.Cb)()],n.prototype,"attached",void 0),(0,o._)([(0,c.Cb)({type:B,set(v){const S=(0,O.Z)(v,this._get("clips"),B);this._set("clips",S)}})],n.prototype,"clips",void 0),(0,o._)([(0,c.Cb)()],n.prototype,"container",void 0),(0,o._)([(0,c.Cb)()],n.prototype,"moving",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],n.prototype,"spatialReferenceSupported",null),(0,o._)([(0,c.Cb)({readOnly:!0})],n.prototype,"updateParameters",void 0),(0,o._)([(0,c.Cb)()],n.prototype,"updateRequested",void 0),(0,o._)([(0,c.Cb)()],n.prototype,"updating",null),(0,o._)([(0,c.Cb)()],n.prototype,"view",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],n.prototype,"visibleAtCurrentScale",void 0),(0,o._)([(0,c.Cb)({type:C.Z})],n.prototype,"highlightOptions",void 0),n=(0,o._)([(0,d.j)("esri.views.2d.layers.LayerView2D")],n),n}},44260:(j,A,e)=>{e.r(A),e.d(A,{default:()=>B});var o=e(71670),b=e(18100),O=e(97621),L=e(47384),l=e(53661),c=e(7521),M=e(9497),P=(e(83382),e(19420),e(20891)),C=e(39173),w=e(697),m=e(31620),T=e(13125),R=e(29031),I=e(68277),V=e(6876),t=e(63982),r=e(76179),s=e(18825),p=e(3589);const E=Object.freeze({remove(){},pause(){},resume(){}}),D=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],g={graphic:null,property:null,oldValue:null,newValue:null};function h(i){return i instanceof C.Z||i instanceof w.Z||i instanceof m.Z||i instanceof T.Z||i instanceof R.Z||i instanceof I.Z||i instanceof V.Z}let f=class extends((0,t.y)(p.Z)){constructor(){super(...arguments),this._graphics=new O.Z,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new L.Z({getCollections:()=>(0,l.pC)(this.layer)&&!this.destroyed?[(0,l.pC)(this.layer.routeInfo)?new O.Z([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,i=>this._routeItemsChanged(i),c.nn)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}fetchPopupFeatures(i){var a=this;return(0,o.Z)(function*(){return a._graphicsView.hitTest(i).filter(n=>!!n.popupTemplate)})()}highlight(i){let a;a=h(i)?[this._getNetworkFeatureUid(i)]:function y(i){return Array.isArray(i)&&i.length>0&&h(i[0])}(i)?i.map(v=>this._getNetworkFeatureUid(v)):function _(i){return O.Z.isCollection(i)&&i.length&&h(i.getItemAt(0))}(i)?i.map(v=>this._getNetworkFeatureUid(v)).toArray():[i.uid];const n=a.filter(l.pC);return n.length?(this._addHighlight(n),{remove:()=>this._removeHighlight(n)}):E}hitTest(i,a){var n=this;return(0,o.Z)(function*(){if(n.suspended)return null;const v=n._graphicsView.hitTest(i).filter(l.pC).map(u=>n._networkGraphicMap.get(u));if(!v.length)return null;const{layer:S}=n;return v.reverse().map(u=>({type:"route",layer:S,mapPoint:i,networkFeature:u}))})()}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(i){this._graphicsView.processUpdate(i)}viewChange(){this._graphicsView.viewChange()}_addHighlight(i){for(const a of i)if(this._highlightIds.has(a)){const n=this._highlightIds.get(a);this._highlightIds.set(a,n+1)}else this._highlightIds.set(a,1);this._updateHighlight()}_createGraphic(i){const a=i.toGraphic();return a.layer=this.layer,a.sourceLayer=this.layer,a}_createGraphicsView(){const i=this.view,n=new r.Z(i.featuresTilingScheme);this._graphicsView=new s.Z({container:n,graphics:this._graphics,requestUpdateCallback:()=>this.requestUpdate(),view:i}),this.container.addChild(n),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(i){const a=this._networkGraphicMap.get(i);return D.indexOf(a.type)}_getNetworkFeatureUid(i){return this._networkFeatureMap.has(i)?this._networkFeatureMap.get(i).uid:null}_removeHighlight(i){for(const a of i)if(this._highlightIds.has(a)){const n=this._highlightIds.get(a)-1;0===n?this._highlightIds.delete(a):this._highlightIds.set(a,n)}this._updateHighlight()}_routeItemsChanged(i){if(i.removed.length){this._graphics.removeMany(i.removed.map(a=>{const n=this._networkFeatureMap.get(a);return this._networkFeatureMap.delete(a),this._networkGraphicMap.delete(n),n}));for(const a of i.removed)this.removeHandles(a)}if(i.added.length){this._graphics.addMany(i.added.map(a=>{const n=this._createGraphic(a);return(0,l.Wi)(n.symbol)?null:(this._networkFeatureMap.set(a,n),this._networkGraphicMap.set(n,a),n)}).filter(l.pC));for(const a of i.added)this.addHandles([(0,c.YP)(()=>a.geometry,(n,v)=>{this._updateGraphic(a,"geometry",n,v)}),(0,c.YP)(()=>a.symbol,(n,v)=>{this._updateGraphic(a,"symbol",n,v)})],a);this._graphics.sort((a,n)=>this._getDrawOrder(a)-this._getDrawOrder(n))}}_updateGraphic(i,a,n,v){if(!this._networkFeatureMap.has(i)){const u=this._createGraphic(i);return this._networkFeatureMap.set(i,u),this._networkGraphicMap.set(u,i),void this._graphics.add(u)}const S=this._networkFeatureMap.get(i);S[a]=n,g.graphic=S,g.property=a,g.oldValue=v,g.newValue=n,this._graphicsView.graphicUpdateHandler(g)}_updateHighlight(){const i=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(i)}};(0,b._)([(0,M.Cb)()],f.prototype,"_graphics",void 0),(0,b._)([(0,M.Cb)()],f.prototype,"_routeItems",null),f=(0,b._)([(0,P.j)("esri.views.2d.layers.RouteLayerView2D")],f);const B=f},37436:(j,A,e)=>{e.d(A,{Z:()=>V});var o=e(53661),b=e(99704),O=e(38974),L=e(40334),l=e(12288),c=e(49533),M=e(42758),U=e(99390),d=e(52300),P=e(10615),C=e(69923),w=e(19955);const m=Math.PI/180;class R extends U.s{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,L.c)(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,o.M2)(this._program)}doRender(r){const{context:s}=r,p=this._getBounds();if(p.length<1)return;this._createShaderProgram(s),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(s,p),s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setBlendFunction(C.zi.ONE,C.zi.ONE_MINUS_SRC_ALPHA),s.setColorMask(!0,!0,!0,!0);const E=this._program;s.bindVAO(this._vao),s.useProgram(E),E.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),s.gl.lineWidth(1),s.drawElements(C.MX.LINES,8*p.length,C.g.UNSIGNED_INT,0),s.bindVAO()}_createTransforms(){return{dvs:(0,L.c)()}}_createShaderProgram(r){this._program||(this._program=r.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",I().attributes))}_updateMatricesAndLocalOrigin(r){const{state:s}=r,{displayMat3:p,size:E,resolution:D,pixelRatio:g,rotation:h,viewpoint:_}=s,y=m*h,{x:f,y:B}=_.targetGeometry,i=(0,M.or)(f,s.spatialReference);this._localOrigin.x=i,this._localOrigin.y=B;const a=g*E[0],n=g*E[1],v=D*a,S=D*n,u=(0,O.g)(this._dvsMat3);(0,O.m)(u,u,p),(0,O.h)(u,u,(0,l.f)(a/2,n/2)),(0,O.d)(u,u,(0,c.f)(E[0]/v,-n/S,1)),(0,O.r)(u,u,-y)}_updateBufferData(r,s){const{x:p,y:E}=this._localOrigin,g=new Float32Array(8*s.length),h=new Uint32Array(8*s.length);let _=0,y=0;for(const f of s)f&&(g[2*_+0]=f[0]-p,g[2*_+1]=f[1]-E,g[2*_+2]=f[0]-p,g[2*_+3]=f[3]-E,g[2*_+4]=f[2]-p,g[2*_+5]=f[3]-E,g[2*_+6]=f[2]-p,g[2*_+7]=f[1]-E,h[y+0]=_+0,h[y+1]=_+3,h[y+2]=_+3,h[y+3]=_+2,h[y+4]=_+2,h[y+5]=_+1,h[y+6]=_+1,h[y+7]=_+0,_+=4,y+=8);if(this._vertexBuffer?this._vertexBuffer.setData(g.buffer):this._vertexBuffer=P.f.createVertex(r,C.l1.DYNAMIC_DRAW,g.buffer),this._indexBuffer?this._indexBuffer.setData(h):this._indexBuffer=P.f.createIndex(r,C.l1.DYNAMIC_DRAW,h),!this._vao){const f=I();this._vao=new w.U(r,f.attributes,f.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const I=()=>(0,d.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:C.g.FLOAT}]});let V=class extends b.T{constructor(t){super(t),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,o.SC)(this._boundsRenderer)}enableRenderingBounds(t){this._boundsRenderer=new R(t),this.requestRender()}get hasLabels(){return!1}onTileData(t,r){t.patch(r),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){t.clear(),this.contains(t)||this.addChild(t)}_renderChildren(t,r){for(const s of this.children)s.isReady&&s.hasData&&(s.commit(t),t.context.setStencilFunction(C.wb.EQUAL,s.stencilRef,255),s.getDisplayList().replay(t,s,r))}}},76179:(j,A,e)=>{e.d(A,{Z:()=>O});var o=e(20753),b=e(37436);class O extends b.Z{renderChildren(l){this.attributeView.update(),this.children.some(c=>c.hasData)&&(this.attributeView.bindTextures(l.context,!1),super.renderChildren(l),l.drawPhase===o.jx.MAP&&this._renderChildren(l),this.hasHighlight()&&l.drawPhase===o.jx.HIGHLIGHT&&this._renderHighlight(l),this._boundsRenderer&&this._boundsRenderer.doRender(l))}_renderHighlight(l){const{painter:c}=l,M=c.effects.highlight;M.bind(l),this._renderChildren(l,M.defines),M.draw(l),M.unbind()}}},3589:(j,A,e)=>{e.d(A,{Z:()=>T});var o=e(18100),b=e(6365),O=e(95442),L=e(31882),l=e(20711),c=e(28191),M=e(53661),U=e(99508),d=e(9497),w=(e(83382),e(19420),e(20891));let m=class extends((0,L.p)((0,l.IG)((0,U.v)(O.Z.EventedMixin(b.Z))))){constructor(R){super(R),this.layer=null,this.parent=null}initialize(){this.when().catch(R=>{if("layerview:create-error"!==R.name){const I=this.layer&&this.layer.id||"no id",V=this.layer&&this.layer.title||"no title";c.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${V}', id: '${I}')`,R)}})}get fullOpacity(){return(0,M.Pt)(this.get("layer.opacity"),1)*(0,M.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(R){this._overrideIfSome("visible",R)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const R=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(R.viewNotReady=!0),this.layer&&this.layer.loaded||(R.layerNotLoaded=!0),this.visible||(R.layerInvisible=!0),R}isUpdating(){return!1}};(0,o._)([(0,d.Cb)()],m.prototype,"fullOpacity",null),(0,o._)([(0,d.Cb)()],m.prototype,"layer",void 0),(0,o._)([(0,d.Cb)()],m.prototype,"parent",void 0),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"suspended",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"suspendInfo",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"legendEnabled",null),(0,o._)([(0,d.Cb)({type:Boolean,readOnly:!0})],m.prototype,"updating",null),(0,o._)([(0,d.Cb)({readOnly:!0})],m.prototype,"updatingProgress",null),(0,o._)([(0,d.Cb)()],m.prototype,"visible",null),(0,o._)([(0,d.Cb)()],m.prototype,"view",void 0),m=(0,o._)([(0,w.j)("esri.views.layers.LayerView")],m);const T=m}}]);
//# sourceMappingURL=4260.f207958c2c96c73b.js.map