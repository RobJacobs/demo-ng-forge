"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[8645],{48645:(ie,P,o)=>{o.r(P),o.d(P,{default:()=>te});var N=o(71670),l=o(18100),B=(o(6010),o(26763)),M=(o(97708),o(97621)),U=o(32995),h=o(88684),_=o(53661),A=o(90642),K=o(44054),L=o(23476),n=o(9497),O=(o(83382),o(66508)),v=o(20891),J=o(70425),f=o(21789),d=o(6848),x=o(42758),Z=o(53492),G=o(36102),w=o(32870),F=o(22735),z=o(26793),H=o(29812),$=o(33829),Q=o(16617),V=o(72450),T=o(23973),X=o(54084),Y=o(21225),I=o(84738),k=o(52289),C=o(68230),q=o(10465);function S(t){return"markup"===t.featureCollectionType||t.layers.some(e=>null!=e.layerDefinition.visibilityField||!R(e))}function R({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return b.find(a=>r===a.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===a.identifyingSymbol.type)}function j(){return new q.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const W=new T.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ee=new T.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let m=class extends w.Z{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?(0,_.Wi)(e)?(0,f.dz)(j(),t).geometry:(0,d.HH)(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=(0,d.cS)();return this.graphics.forEach(r=>{const a=(0,_.pC)(r.geometry)?(0,f.dz)(r.geometry,t).geometry:null;(0,_.pC)(a)&&(0,d.jn)(e,"point"===a.type?a:a.extent,e)}),(0,d.fS)(e,d.Gv)?null:e}get sublayers(){return this.graphics}};(0,l._)([(0,n.Cb)({readOnly:!0})],m.prototype,"fullExtent",null),(0,l._)([(0,n.Cb)({readOnly:!0})],m.prototype,"fullBounds",null),(0,l._)([(0,n.Cb)({readOnly:!0})],m.prototype,"sublayers",null),(0,l._)([(0,n.Cb)()],m.prototype,"layer",void 0),(0,l._)([(0,n.Cb)()],m.prototype,"layerId",void 0),(0,l._)([(0,n.Cb)({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=(0,l._)([(0,v.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const b=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new X.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new Y.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new I.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new I.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new k.Z).toJSON()}];let i=class extends((0,H.h)((0,V.M)((0,$.q)((0,Q.I)((0,A.R)(F.Z)))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=C.Z.WGS84,this.sublayers=new M.Z(b.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!S(e)&&"portal-item"!==r?.origin}}}readFeatureCollections(t,e,r){if(!S(e))return null;const a=e.layers.map(y=>{const s=new G.default;return s.read(y,r),s});return new M.Z({items:a})}readLegacyfeatureCollectionJSON(t,e){return S(e)?(0,h.d9)(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=(0,d.cS)();return(0,_.pC)(this.sublayers)?this.sublayers.forEach(({fullBounds:r})=>(0,_.pC)(r)?(0,d.jn)(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const a=(0,f.dz)(r.layerDefinition.extent,t).geometry;(0,_.pC)(a)&&(0,d.jn)(e,a,e)}),(0,d.fS)(e,d.Gv)?(0,f.dz)(j(),t).geometry:(0,d.HH)(e,t)}readMinScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?C.Z.fromJSON(e.layers[0].layerDefinition.spatialReference):C.Z.WGS84}readSublayers(t,e,r){if(S(e))return null;const a=[];let y=e.layers.reduce((s,p)=>Math.max(s,p.layerDefinition.id??-1),-1)+1;for(const s of e.layers){const{layerDefinition:p,featureSet:u}=s,E=p.id??y++,c=R(s);if((0,_.pC)(c)){const g=new m({id:c.id,title:p.name,layerId:E,layer:this,graphics:u.features.map(({geometry:D,symbol:re,attributes:oe,popupInfo:le})=>B.Z.fromJSON({attributes:oe,geometry:D,symbol:re,popupTemplate:le}))});a.push(g)}}return new M.Z(a)}writeSublayers(t,e,r,a){const{minScale:y,maxScale:s}=this;if((0,_.Wi)(t))return;const p=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&a?.messages?.push(new U.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const u=[];let E=this.spatialReference.toJSON();e:for(const c of t)for(const g of c.graphics)if((0,_.pC)(g.geometry)){E=g.geometry.spatialReference.toJSON();break e}for(const c of b){const g=t.find(D=>c.id===D.id);this._writeMapNoteSublayer(u,g,c,y,s,E,a)}(0,K.RB)("featureCollection.layers",u,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=(0,h.d9)(t),Object.assign(t,t.featureCollection)),super.read(t,e)}beforeSave(){var t=this;return(0,N.Z)(function*(){if((0,_.Wi)(t.sublayers))return;let e=null;const r=[];for(const y of t.sublayers)for(const s of y.graphics)if((0,_.pC)(s.geometry)){const p=s.geometry;e?(0,Z.fS)(p.spatialReference,e)||((0,f.Up)(p.spatialReference,e)||(0,f.kR)()||(yield(0,f.zD)()),s.geometry=(0,f.iV)(p,e)):e=p.spatialReference,r.push(s)}const a=yield(0,x.aX)(r.map(y=>y.geometry));r.forEach((y,s)=>y.geometry=a[s])})()}_findSublayer(t){return(0,_.Wi)(this.sublayers)?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,a,y,s,p){const u=[];if(!(0,_.Wi)(e)){for(const E of e.graphics)this._writeMapNote(u,E,r.geometryType,p);this._normalizeObjectIds(u,W),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:(0,h.d9)(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:a,maxScale:y,objectIdField:"OBJECTID",fields:[W.toJSON(),ee.toJSON()],spatialReference:s},featureSet:{features:u,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,a){if((0,_.Wi)(e))return;const{geometry:y,symbol:s,popupTemplate:p}=e;if((0,_.Wi)(y))return;if(y.type!==r)return void a?.messages?.push(new L.Z("map-notes-layer:invalid-geometry-type",`Geometry "${y.type}" cannot be saved in "${r}" layer`,{graphic:e}));if((0,_.Wi)(s))return void a?.messages?.push(new L.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const u={attributes:{...e.attributes},geometry:y.toJSON(),symbol:s.toJSON()};(0,_.pC)(p)&&(u.popupInfo=p.toJSON()),t.push(u)}_normalizeObjectIds(t,e){const r=e.name;let a=(0,z.S)(r,t)+1;const y=new Set;for(const s of t){s.attributes||(s.attributes={});const{attributes:p}=s;(null==p[r]||y.has(p[r]))&&(p[r]=a++),y.add(p[r])}}};(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"capabilities",void 0),(0,l._)([(0,O.r)(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"featureCollections",void 0),(0,l._)([(0,O.r)(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),(0,l._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),(0,l._)([(0,O.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),(0,l._)([(0,n.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"fullExtent",null),(0,l._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],i.prototype,"legendEnabled",void 0),(0,l._)([(0,n.Cb)({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),(0,l._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),(0,l._)([(0,O.r)(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),(0,l._)([(0,n.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),(0,l._)([(0,O.r)(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"multipointLayer",null),(0,l._)([(0,n.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"pointLayer",null),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"polygonLayer",null),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"polylineLayer",null),(0,l._)([(0,n.Cb)({type:C.Z})],i.prototype,"spatialReference",void 0),(0,l._)([(0,O.r)(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),(0,l._)([(0,n.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),(0,l._)([(0,O.r)("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),(0,l._)([(0,J.c)("web-map","sublayers")],i.prototype,"writeSublayers",null),(0,l._)([(0,n.Cb)({readOnly:!0})],i.prototype,"textLayer",null),(0,l._)([(0,n.Cb)()],i.prototype,"title",void 0),(0,l._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=(0,l._)([(0,v.j)("esri.layers.MapNotesLayer")],i);const te=i}}]);
//# sourceMappingURL=8645.8109daea757b5f41.js.map