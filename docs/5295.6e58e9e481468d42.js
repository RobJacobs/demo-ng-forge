"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[5295],{36302:(Z,m,e)=>{e.r(m),e.d(m,{default:()=>se});var g=e(71670),r=e(18100),L=(e(6010),e(73889)),T=(e(53108),e(72750),e(11822),e(75993),e(33098),e(57712),e(79191),e(70383),e(59574),e(27723)),Q=e(90642),s=e(9497),D=(e(83382),e(19420),e(20891)),C=e(86230),G=e(22735),b=e(32995),B=e(48500),S=e(53661),a=e(79264),A=e(87096),R=e(68230);let y=class extends B.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(t){return this.addResolvingPromise(this._loadOGCServices(this.layer,t)),this.when()}getSource(){const{featureDefinition:{collection:t,layerDefinition:o,spatialReference:n,supportedCrs:p},layer:{apiKey:d,customParameters:u,effectiveMaxRecordCount:l}}=this;return{type:"ogc-source",collection:t,layerDefinition:o,maxRecordCount:l,queryParameters:{apiKey:d,customParameters:u},spatialReference:n,supportedCrs:p}}queryExtent(t,o={}){return null}queryFeatureCount(t,o={}){return null}queryFeatures(t,o={}){return this.queryFeaturesJSON(t,o).then(n=>A.Z.fromJSON(n))}queryFeaturesJSON(t,o={}){const n=this.getSource();return this.load(o).then(()=>(0,a.yN)(n,t,o))}queryObjectIds(t,o={}){return null}serviceSupportsSpatialReference(t){return!(!t.isWGS84&&!t.isWebMercator&&!this.featureDefinition.supportedCrs[t.wkid])}_conformsToType(t,o){const n=new RegExp(`^${o}$`,"i");return t.conformsTo.some(p=>n.test(p))??!1}_getCapabilities(t,o){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:o,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(t){const o=t?.components?.parameters;return o?.limit?.schema?.maximum??o?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(t){const n=(0,a.d)(t.storageCrs??a.$9);return(0,S.Wi)(n)?R.Z.WGS84:new R.Z({wkid:n})}_getSupportedSpatialReferences(t,o){const n="#/crs",p=t.crs??[a.$9],d=p.includes(n)?p.filter(l=>l!==n).concat(o.crs??[]):p,u=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return d.filter(l=>!u.test(l))}_loadOGCServices(t,o){var n=this;return(0,g.Z)(function*(){const p=(0,S.pC)(o)?o.signal:null,{apiKey:d,collectionId:u,customParameters:l,fields:ie,geometryType:ne,hasZ:pe,objectIdField:ae,timeInfo:le,url:ue}=t,de={fields:ie?.map(v=>v.toJSON()),geometryType:C.P.toJSON(ne),hasZ:pe??!1,objectIdField:ae,timeInfo:le?.toJSON()},f={apiKey:d,customParameters:l,signal:p},F=yield(0,a.gp)(ue,f),[j,E]=yield Promise.all([(0,a.G4)(F,f),(0,a.j)(F,f)]);if(!n._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new b.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const h=E.collections.find(v=>v.id===u);if(!h)throw new b.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const ye=n._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?yield(0,a.eS)(F,f):null,M=yield(0,a.w9)(h,de,f),ce=n._getMaxRecordCount(ye),ve=n._getCapabilities(M.hasZ,ce),fe=n._getStorageSpatialReference(h).toJSON(),he=n._getSupportedSpatialReferences(h,E),me=new RegExp(`^${a.Lu}`,"i"),I={};for(const v of he){const O=(0,a.d)(v);(0,S.pC)(O)&&(I[O]||(I[O]=v.replace(me,"")))}n.featureDefinition={capabilities:ve,collection:h,layerDefinition:M,spatialReference:fe,supportedCrs:I}})()}};(0,r._)([(0,s.Cb)()],y.prototype,"featureDefinition",void 0),(0,r._)([(0,s.Cb)({constructOnly:!0})],y.prototype,"layer",void 0),(0,r._)([(0,s.Cb)()],y.prototype,"type",void 0),y=(0,r._)([(0,D.j)("esri.layers.graphics.sources.OGCFeatureSource")],y);var N=e(450),U=e(29812),H=e(55123),z=e(37572),V=e(80828),J=e(33829),W=e(72255),$=e(16617),K=e(17085),Y=e(72450),X=e(37302),c=e(51299),w=e(88419),q=e(23973),k=e(86465),x=e(21230),_=e(85770),ee=e(1586),P=e(28665),te=e(67056),oe=e(10465);const re=(0,k.v)();let i=class extends((0,N.V)((0,H.N)((0,V.M)((0,z.b)((0,U.h)((0,W.c)((0,X.n)((0,Y.M)((0,J.q)((0,$.I)((0,K.Q)((0,Q.R)(G.Z))))))))))))){constructor(t){super(t),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},t).then(()=>this._fetchService(t))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(t){(0,x.YN)(t,this.fieldsIndex),this._set("renderer",t)}on(t,o){return super.on(t,o)}createPopupTemplate(t){return(0,te.eZ)(this,t)}createQuery(){return new P.Z}getField(t){return this.fieldsIndex.get(t)}getFieldDomain(t,o){let n,p=!1;const d=o?.feature?.attributes,u=this.typeIdField&&d?.[this.typeIdField];return null!=u&&this.types&&(p=this.types.some(l=>l.id==u&&(n=l.domains?.[t],"inherited"===n?.type&&(n=this._getLayerDomain(t)),!0))),p||n||(n=this._getLayerDomain(t)),n}queryFeatures(t,o){return this.load().then(()=>this.source.queryFeatures(P.Z.from(t)||this.createQuery(),o)).then(n=>(n?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),n))}serviceSupportsSpatialReference(t){return this.source?.serviceSupportsSpatialReference(t)??!1}_fetchService(t){var o=this;return(0,g.Z)(function*(){yield o.source.load(t),o.read(o.source.featureDefinition,{origin:"service"}),(0,x.YN)(o.renderer,o.fieldsIndex),(0,x.UF)(o.timeInfo,o.fieldsIndex)})()}_getLayerDomain(t){if(!this.fields)return null;for(const o of this.fields)if(o.name===t&&o.domain)return o.domain;return null}};(0,r._)([(0,s.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"copyright",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"definitionExpression",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),(0,r._)([(0,s.Cb)({type:String})],i.prototype,"displayField",void 0),(0,r._)([(0,s.Cb)({type:Number})],i.prototype,"effectiveMaxRecordCount",null),(0,r._)([(0,s.Cb)(c.PV)],i.prototype,"elevationInfo",void 0),(0,r._)([(0,s.Cb)({type:[q.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),(0,r._)([(0,s.Cb)(re.fieldsIndex)],i.prototype,"fieldsIndex",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:oe.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),(0,r._)([(0,s.Cb)({type:C.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.M.read}}}}})],i.prototype,"geometryType",void 0),(0,r._)([(0,s.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),(0,r._)([(0,s.Cb)({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),(0,r._)([(0,s.Cb)({type:[_.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee.r},write:!0}}}})],i.prototype,"labelingInfo",void 0),(0,r._)([(0,s.Cb)(c.iR)],i.prototype,"labelsVisible",void 0),(0,r._)([(0,s.Cb)(c.rn)],i.prototype,"legendEnabled",void 0),(0,r._)([(0,s.Cb)({type:Number})],i.prototype,"maxRecordCount",void 0),(0,r._)([(0,s.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),(0,r._)([(0,s.Cb)({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),(0,r._)([(0,s.Cb)(c.C_)],i.prototype,"popupEnabled",void 0),(0,r._)([(0,s.Cb)({type:L.Z,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),(0,r._)([(0,s.Cb)({types:T.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:T.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),(0,r._)([(0,s.Cb)(c.YI)],i.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.Cb)({readOnly:!0})],i.prototype,"source",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,type:R.Z,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),(0,r._)([(0,s.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),(0,r._)([(0,s.Cb)({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),(0,r._)([(0,s.Cb)({type:[w.Z]})],i.prototype,"types",void 0),(0,r._)([(0,s.Cb)(c.HQ)],i.prototype,"url",void 0),i=(0,r._)([(0,D.j)("esri.layers.OGCFeatureLayer")],i);const se=i},29374:(Z,m,e)=>{e.d(m,{g:()=>g});const g={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=5295.6e58e9e481468d42.js.map