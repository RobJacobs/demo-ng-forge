"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[7397],{99704:(x,S,e)=>{e.d(S,{T:()=>C});var o=e(71670),b=e(30801),O=e(20834),T=e(28679),d=e(53971),h=e(53661),P=e(55798),A=e(82769),c=e(1611),m=e(52300),E=e(70260),j=e(51399),y=e(86626);function U(V,t){const r=t.length;if(V<t[0].value||1===r)return t[0].size;for(let s=1;s<r;s++)if(V<t[s].value)return t[s-1].size+(V-t[s-1].value)/(t[s].value-t[s-1].value)*(t[s].size-t[s-1].size);return t[r-1].size}class f{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.outsideLabelsVisible=!1,this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=E.v}getSizeVVFieldStops(t){const r=this._vvSizeFieldStops;if(r)switch(r.type){case"static":return r;case"level-dependent":return(0,h.Pt)(r.levels[t],()=>{let s=1/0,p=0;for(const i in r.levels){const n=parseFloat(i),l=Math.abs(t-n);l<s&&(s=l,p=n)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const g=2**((t-p)/2),R=(0,h.Wg)(r.levels[p]),a=new Float32Array(R.values);return a[2]*=g,a[3]*=g,{sizes:(0,h.Wg)(R.sizes),values:a}});default:return}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){(0,h.pC)(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,r,s){this._updateEffects(s),this._vvInfo=r,this._technique=(0,j.EJ)(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:(0,y.hc)("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){this.outsideLabelsVisible=!!(0,h.pC)(t)&&t.excludedLabelsVisible}_updateVisualVariables(t,r){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return;const p=t.size;if(p){if(s.vvSizeEnabled=!0,p.minMaxValue){const i=p.minMaxValue;let n,l;if((0,m.$K)(i.minSize)&&(0,m.$K)(i.maxSize))if((0,m.hj)(i.minSize)&&(0,m.hj)(i.maxSize))n=(0,P.F2)(i.minSize),l=(0,P.F2)(i.maxSize);else{const v=r.scale;n=(0,P.F2)(U(v,i.minSize.stops)),l=(0,P.F2)(U(v,i.maxSize.stops))}this.vvSizeMinMaxValue.set([i.minDataValue,i.maxDataValue,n,l])}if(p.scaleStops&&(this.vvSizeScaleStopsValue=(0,P.F2)(U(r.scale,p.scaleStops.stops))),p.unitValue){const i=(0,A.c9)(r.spatialReference)/c.a[p.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=i/r.resolution}p.fieldStops&&(this._vvSizeFieldStops=p.fieldStops)}const g=t.color;g&&(s.vvColorEnabled=!0,this.vvColorValues.set(g.values),this.vvColors.set(g.colors));const R=t.opacity;R&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(R.values),this.vvOpacities.set(R.opacities));const a=t.rotation;a&&(s.vvRotationEnabled=!0,s.vvRotationType=a.type)}}class C extends d.Z{constructor(t){super(t),this._rendererInfo=new f,this._materialItemsRequestQueue=new O.Z,this.attributeView=new T.H(()=>this.onAttributeStoreUpdate())}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,r,s){this._rendererInfo.setInfo(t,r,s),this.requestRender()}getMaterialItems(t,r){var s=this;return(0,o.Z)(function*(){if(!t||0===t.length)return[];const p=(0,b.hh)();return s._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:p}),s.requestRender(),p.promise})()}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let r=this._materialItemsRequestQueue.pop();for(;r;)this._processMaterialItemRequest(t,r),r=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const r of this.children)r.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}updateTransforms(t){if(this.children.some(r=>r.hasData))for(const r of this.children)r.setTransform(t)}createRenderParams(t){const r=super.createRenderParams(t);return r.rendererInfo=this._rendererInfo,r.attributeView=this.attributeView,r}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:r,abortOptions:s,resolver:p}){const{painter:g,pixelRatio:R}=t,a=r.map(i=>g.textureManager.rasterizeItem(i.symbol,R,i.glyphIds,s));Promise.all(a).then(i=>{if(!this.stage)return void p.reject();const n=i.map((l,v)=>({id:r[v].id,mosaicItem:l}));p.resolve(n)},p.reject)}}},53971:(x,S,e)=>{e.d(S,{Z:()=>P});var o=e(67087),b=e(20753),O=e(83345),T=e(26877),d=e(67135);const h=(A,c)=>A.key.level-c.key.level!=0?A.key.level-c.key.level:A.key.row-c.key.row!=0?A.key.row-c.key.row:A.key.col-c.key.col;class P extends O.Z{constructor(c){super(),this._tileInfoView=c}get requiresDedicatedFBO(){return!1}renderChildren(c){this.sortChildren(h),this.setStencilReference(c),super.renderChildren(c)}createRenderParams(c){const{state:m}=c,E=super.createRenderParams(c);return E.requiredLevel=this._tileInfoView.getClosestInfoForScale(m.scale).level,E.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(m.scale),E}prepareRenderPasses(c){const m=super.prepareRenderPasses(c);return m.push(c.registerRenderPass({name:"stencil",brushes:[d.Z],drawPhase:b.jx.DEBUG|b.jx.MAP|b.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,o.Z)("esri-tiles-debug")&&m.push(c.registerRenderPass({name:"tileInfo",brushes:[T.Z],drawPhase:b.jx.DEBUG,target:()=>this.children})),m}getStencilTarget(){return this.children}setStencilReference(c){let m=1;for(const E of this.children)E.stencilRef=m++}}},63982:(x,S,e)=>{e.d(S,{y:()=>I});var o=e(18100),b=e(97621),O=e(40434),T=e(32995),d=e(7521),h=e(9497),c=(e(83382),e(19420),e(20891)),m=e(98806),E=e(21795),j=e(44480);let y=class extends j.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,o._)([(0,h.Cb)({readOnly:!0})],y.prototype,"version",null),y=(0,o._)([(0,c.j)("esri.views.layers.support.ClipArea")],y);const U=y;var f;let C=f=class extends U{constructor(L){super(L),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,o._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"left",void 0),(0,o._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"right",void 0),(0,o._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"top",void 0),(0,o._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],C.prototype,"bottom",void 0),C=f=(0,o._)([(0,c.j)("esri.views.layers.support.ClipRect")],C);const V=C;e(6010);var R,r=e(70535),s=e(71182),p=e(10465),g=e(55733);const a={base:r.Z,key:"type",typeMap:{extent:p.Z,polygon:g.Z}};let i=R=class extends U{constructor(L){super(L),this.type="geometry",this.geometry=null}clone(){return new R({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,o._)([(0,h.Cb)({types:a,json:{read:s.im,write:!0}})],i.prototype,"geometry",void 0),i=R=(0,o._)([(0,c.j)("esri.views.layers.support.Geometry")],i);const n=i;let l=class extends U{constructor(L){super(L),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,o._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],l.prototype,"path",void 0),l=(0,o._)([(0,c.j)("esri.views.layers.support.Path")],l);const D=b.Z.ofType({key:"type",base:null,typeMap:{rect:V,path:l,geometry:n}}),I=L=>{let M=class extends L{constructor(){super(...arguments),this.attached=!1,this.clips=new D,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const _=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&_&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new T.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new m.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,d.YP)(()=>this.suspended,u=>{this.container&&(this.container.visible=!u),this.view&&!u&&this.updateRequested&&this.view.requestUpdate()},d.tX),(0,d.YP)(()=>this.layer?.opacity??1,u=>{this.container&&(this.container.opacity=u)},d.tX),(0,d.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",u=>{this.container&&(this.container.blendMode=u)},d.tX),(0,d.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,u=>{this.container&&(this.container.effect=u)},d.tX),(0,d.YP)(()=>this.highlightOptions,u=>this.container.highlightOptions=u,d.tX),(0,d.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},d.tX),(0,d.YP)(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:u})=>{const B=null!=u&&this.isVisibleAtScale(u);B!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",B)},d.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(u=>{u===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const _=this.view?.spatialReference;return null==_||this.supportsSpatialReference(_)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(_){const w=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!w)return!0;const{minScale:u,maxScale:B}=w;return(0===u||_<=u)&&(0===B||_>=B)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(_){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",_),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(_))):this.updateRequested=!1}hitTest(_,w){return Promise.resolve(null)}supportsSpatialReference(_){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const _=super.getSuspendInfo(),w=!this.spatialReferenceSupported,u=this.visibleAtCurrentScale;return w&&(_.spatialReferenceNotSupported=w),u&&(_.outsideScaleRange=u),_}addAttachHandles(_){this.addHandles(_,"attach")}};return(0,o._)([(0,h.Cb)()],M.prototype,"attached",void 0),(0,o._)([(0,h.Cb)({type:D,set(_){const w=(0,O.Z)(_,this._get("clips"),D);this._set("clips",w)}})],M.prototype,"clips",void 0),(0,o._)([(0,h.Cb)()],M.prototype,"container",void 0),(0,o._)([(0,h.Cb)()],M.prototype,"moving",void 0),(0,o._)([(0,h.Cb)({readOnly:!0})],M.prototype,"spatialReferenceSupported",null),(0,o._)([(0,h.Cb)({readOnly:!0})],M.prototype,"updateParameters",void 0),(0,o._)([(0,h.Cb)()],M.prototype,"updateRequested",void 0),(0,o._)([(0,h.Cb)()],M.prototype,"updating",null),(0,o._)([(0,h.Cb)()],M.prototype,"view",void 0),(0,o._)([(0,h.Cb)({readOnly:!0})],M.prototype,"visibleAtCurrentScale",void 0),(0,o._)([(0,h.Cb)({type:E.Z})],M.prototype,"highlightOptions",void 0),M=(0,o._)([(0,c.j)("esri.views.2d.layers.LayerView2D")],M),M}},17397:(x,S,e)=>{e.r(S),e.d(S,{default:()=>R});var o=e(71670),b=e(18100),O=e(26763),T=e(97621),d=e(53661),h=e(7521),j=(e(28191),e(83382),e(19420),e(32995),e(67087),e(20891)),y=e(98806),U=e(87656),f=e(63982),C=e(76179),V=e(18825),t=e(3589);const r="sublayers",s="layerView",p=Object.freeze({remove(){},pause(){},resume(){}});let g=class extends((0,f.y)(t.Z)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new U.G}fetchPopupFeatures(a){var i=this;return(0,o.Z)(function*(){return Array.from(i.graphicsViews(),n=>n.hitTest(a).filter(l=>!!l.popupTemplate)).flat()})()}*graphicsViews(){(0,d.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,d.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}hitTest(a,i){var n=this;return(0,o.Z)(function*(){return Array.from(n.graphicsViews(),l=>{const v=l.hitTest(a);if((0,d.pC)(n._graphicsViewsFeatureCollectionMap)){const D=n._graphicsViewsFeatureCollectionMap.get(l);for(const I of v)!I.popupTemplate&&D.popupTemplate&&(I.popupTemplate=D.popupTemplate),I.sourceLayer=I.layer=n.layer}return v}).flat().map(l=>({type:"graphic",graphic:l,layer:n.layer,mapPoint:a}))})()}highlight(a){let i;"number"==typeof a?i=[a]:a instanceof O.Z?i=[a.uid]:Array.isArray(a)&&a.length>0?i="number"==typeof a[0]?a:a.map(l=>l&&l.uid):T.Z.isCollection(a)&&(i=a.map(l=>l&&l.uid).toArray());const n=i?.filter(d.pC);return n?.length?(this._addHighlight(n),{remove:()=>{this._removeHighlight(n)}}):p}update(a){for(const i of this.graphicsViews())i.processUpdate(a)}attach(){const a=this.view,i=()=>this.requestUpdate(),n=this.layer.featureCollections;if((0,d.pC)(n)&&n.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const l of n){const v=new C.Z(this.view.featuresTilingScheme),D=new V.Z({view:a,graphics:l.source,renderer:l.renderer,requestUpdateCallback:i,container:v});this._graphicsViewsFeatureCollectionMap.set(D,l),this.container.addChild(D.container),this.addHandles([(0,h.YP)(()=>l.visible,I=>D.container.visible=I,h.nn),(0,h.YP)(()=>D.updating,()=>this.notifyChange("updating"),h.nn)],s)}this._updateHighlight()}else(0,d.pC)(this.layer.sublayers)&&this.addHandles((0,h.on)(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),r)}detach(){this._destroyGraphicsViews(),this.removeHandles(r)}moveStart(){}moveEnd(){}viewChange(){for(const a of this.graphicsViews())a.viewChange()}isUpdating(){for(const a of this.graphicsViews())if(a.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(s);for(const a of this.graphicsViews())a.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,d.Wi)(this.layer.sublayers))return;const a=[],i=this.view,n=()=>this.requestUpdate();for(const l of this.layer.sublayers){const v=new y.W,D=new C.Z(this.view.featuresTilingScheme);D.fadeTransitionEnabled=!0;const I=new V.Z({view:i,graphics:l.graphics,requestUpdateCallback:n,container:D});this.addHandles([l.on("graphic-update",I.graphicUpdateHandler),(0,h.YP)(()=>l.visible,L=>I.container.visible=L,h.nn),(0,h.YP)(()=>I.updating,()=>this.notifyChange("updating"),h.nn)],s),v.addChild(I.container),this.container.addChild(v),a.push(I)}this._graphicsViews=a,this._updateHighlight()}_addHighlight(a){for(const i of a)if(this._highlightIds.has(i)){const n=this._highlightIds.get(i);this._highlightIds.set(i,n+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_removeHighlight(a){for(const i of a)if(this._highlightIds.has(i)){const n=this._highlightIds.get(i)-1;0===n?this._highlightIds.delete(i):this._highlightIds.set(i,n)}this._updateHighlight()}_updateHighlight(){const a=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(a)}};g=(0,b._)([(0,j.j)("esri.views.2d.layers.MapNotesLayerView2D")],g);const R=g},37436:(x,S,e)=>{e.d(S,{Z:()=>V});var o=e(53661),b=e(99704),O=e(38974),T=e(40334),d=e(12288),h=e(49533),P=e(42758),A=e(99390),c=e(52300),m=e(10615),E=e(69923),j=e(19955);const y=Math.PI/180;class f extends A.s{constructor(r){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,T.c)(),this._localOrigin={x:0,y:0},this._getBounds=r}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,o.M2)(this._program)}doRender(r){const{context:s}=r,p=this._getBounds();if(p.length<1)return;this._createShaderProgram(s),this._updateMatricesAndLocalOrigin(r),this._updateBufferData(s,p),s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setBlendFunction(E.zi.ONE,E.zi.ONE_MINUS_SRC_ALPHA),s.setColorMask(!0,!0,!0,!0);const g=this._program;s.bindVAO(this._vao),s.useProgram(g),g.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),s.gl.lineWidth(1),s.drawElements(E.MX.LINES,8*p.length,E.g.UNSIGNED_INT,0),s.bindVAO()}_createTransforms(){return{dvs:(0,T.c)()}}_createShaderProgram(r){this._program||(this._program=r.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",C().attributes))}_updateMatricesAndLocalOrigin(r){const{state:s}=r,{displayMat3:p,size:g,resolution:R,pixelRatio:a,rotation:i,viewpoint:n}=s,l=y*i,{x:v,y:D}=n.targetGeometry,I=(0,P.or)(v,s.spatialReference);this._localOrigin.x=I,this._localOrigin.y=D;const L=a*g[0],M=a*g[1],_=R*L,w=R*M,u=(0,O.g)(this._dvsMat3);(0,O.m)(u,u,p),(0,O.h)(u,u,(0,d.f)(L/2,M/2)),(0,O.d)(u,u,(0,h.f)(g[0]/_,-M/w,1)),(0,O.r)(u,u,-l)}_updateBufferData(r,s){const{x:p,y:g}=this._localOrigin,a=new Float32Array(8*s.length),i=new Uint32Array(8*s.length);let n=0,l=0;for(const v of s)v&&(a[2*n+0]=v[0]-p,a[2*n+1]=v[1]-g,a[2*n+2]=v[0]-p,a[2*n+3]=v[3]-g,a[2*n+4]=v[2]-p,a[2*n+5]=v[3]-g,a[2*n+6]=v[2]-p,a[2*n+7]=v[1]-g,i[l+0]=n+0,i[l+1]=n+3,i[l+2]=n+3,i[l+3]=n+2,i[l+4]=n+2,i[l+5]=n+1,i[l+6]=n+1,i[l+7]=n+0,n+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=m.f.createVertex(r,E.l1.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(i):this._indexBuffer=m.f.createIndex(r,E.l1.DYNAMIC_DRAW,i),!this._vao){const v=C();this._vao=new j.U(r,v.attributes,v.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const C=()=>(0,c.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:E.g.FLOAT}]});let V=class extends b.T{constructor(t){super(t),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,o.SC)(this._boundsRenderer)}enableRenderingBounds(t){this._boundsRenderer=new f(t),this.requestRender()}get hasLabels(){return!1}onTileData(t,r){t.patch(r),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){t.clear(),this.contains(t)||this.addChild(t)}_renderChildren(t,r){for(const s of this.children)s.isReady&&s.hasData&&(s.commit(t),t.context.setStencilFunction(E.wb.EQUAL,s.stencilRef,255),s.getDisplayList().replay(t,s,r))}}},76179:(x,S,e)=>{e.d(S,{Z:()=>O});var o=e(20753),b=e(37436);class O extends b.Z{renderChildren(d){this.attributeView.update(),this.children.some(h=>h.hasData)&&(this.attributeView.bindTextures(d.context,!1),super.renderChildren(d),d.drawPhase===o.jx.MAP&&this._renderChildren(d),this.hasHighlight()&&d.drawPhase===o.jx.HIGHLIGHT&&this._renderHighlight(d),this._boundsRenderer&&this._boundsRenderer.doRender(d))}_renderHighlight(d){const{painter:h}=d,P=h.effects.highlight;P.bind(d),this._renderChildren(d,P.defines),P.draw(d),P.unbind()}}},3589:(x,S,e)=>{e.d(S,{Z:()=>U});var o=e(18100),b=e(6365),O=e(95442),T=e(31882),d=e(20711),h=e(28191),P=e(53661),A=e(99508),c=e(9497),j=(e(83382),e(19420),e(20891));let y=class extends((0,T.p)((0,d.IG)((0,A.v)(O.Z.EventedMixin(b.Z))))){constructor(f){super(f),this.layer=null,this.parent=null}initialize(){this.when().catch(f=>{if("layerview:create-error"!==f.name){const C=this.layer&&this.layer.id||"no id",V=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${V}', id: '${C}')`,f)}})}get fullOpacity(){return(0,P.Pt)(this.get("layer.opacity"),1)*(0,P.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(f){this._overrideIfSome("visible",f)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const f=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(f.viewNotReady=!0),this.layer&&this.layer.loaded||(f.layerNotLoaded=!0),this.visible||(f.layerInvisible=!0),f}isUpdating(){return!1}};(0,o._)([(0,c.Cb)()],y.prototype,"fullOpacity",null),(0,o._)([(0,c.Cb)()],y.prototype,"layer",void 0),(0,o._)([(0,c.Cb)()],y.prototype,"parent",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,o._)([(0,c.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,o._)([(0,c.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,o._)([(0,c.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,o._)([(0,c.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,o._)([(0,c.Cb)()],y.prototype,"visible",null),(0,o._)([(0,c.Cb)()],y.prototype,"view",void 0),y=(0,o._)([(0,j.j)("esri.views.layers.LayerView")],y);const U=y}}]);
//# sourceMappingURL=7397.e64741b438352386.js.map