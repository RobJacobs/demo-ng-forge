"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[5708],{25708:(M,L,n)=>{n.r(L),n.d(L,{fromUrl:()=>R});var e=n(71670),g=n(32995),t=n(53661),r=n(55050),v=n(4583),i=n(50714),P=n(63719),I=n(15392),h=n(2013);const T={FeatureLayer:!0,SceneLayer:!0};function R(l){return E.apply(this,arguments)}function E(){return E=(0,e.Z)(function*(l){const o=l.properties?.customParameters,s=yield function K(l,o){return Z.apply(this,arguments)}(l.url,o),a={...l.properties,url:l.url};if(!s.sublayerIds)return null!=s.layerOrTableId&&(a.layerId=s.layerOrTableId,a.sourceJSON=s.sourceJSON),new s.Constructor(a);const u=new((yield n.e(2073).then(n.bind(n,22073))).default)({title:s.parsedUrl.title});return function B(l,o,s){function a(u,y){const d={...s,layerId:u,sublayerTitleMode:"service-name"};return(0,t.pC)(y)&&(d.sourceJSON=y),new o.Constructor(d)}o.sublayerIds.forEach(u=>{const y=a(u,p(o.sublayerInfos,u));l.add(y)}),o.tableIds.forEach(u=>{const y=a(u,p(o.tableInfos,u));l.tables.add(y)})}(u,s,a),u}),E.apply(this,arguments)}function p(l,o){return l?l.find(s=>s.id===o):null}function Z(){return Z=(0,e.Z)(function*(l,o){let s=(0,v.Qc)(l);if((0,t.Wi)(s)&&(s=yield function j(l,o){return C.apply(this,arguments)}(l,o)),(0,t.Wi)(s))throw new g.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:l});const{serverType:a,sublayer:u}=s;let y;const d={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":y=null!=u?"FeatureLayer":(yield function N(l,o){return W.apply(this,arguments)}(l,o))?"TileLayer":"MapImageLayer";break;case"ImageServer":{const f=yield(0,h.T)(l,{customParameters:o}),{tileInfo:O,cacheType:S}=f;y=O?"LERC"!==O?.format?.toUpperCase()||S&&"elevation"!==S.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const f=yield(0,h.T)(s.url.path,{customParameters:o});if(y="SceneLayer",f){const O=f?.layers;if("Voxel"===f?.layerType)y="VoxelLayer";else if(O?.length){const S=O[0]?.layerType;null!=S&&null!=P.fb[S]&&(y=P.fb[S])}}break}default:y=d[a]}const m="FeatureServer"===a,c={parsedUrl:s,Constructor:null,layerOrTableId:m?u:void 0,sublayerIds:null,tableIds:null};if(T[y]&&null==u){const f=yield function F(l,o,s){return D.apply(this,arguments)}(l,a,o);m&&(c.sublayerInfos=f.layerInfos,c.tableInfos=f.tableInfos),f.layerIds.length+f.tableIds.length!==1?(c.sublayerIds=f.layerIds,c.tableIds=f.tableIds):m&&(c.layerOrTableId=f.layerIds[0]??f.tableIds[0],c.sourceJSON=f.layerInfos?.[0]??f.tableInfos?.[0])}return c.Constructor=yield function G(l){return U.apply(this,arguments)}(y),c}),Z.apply(this,arguments)}function C(){return(C=(0,e.Z)(function*(l,o){const s=yield(0,h.T)(l,{customParameters:o});let a=null,u=null;const y=s.type;if("Feature Layer"===y||"Table"===y?(a="FeatureServer",u=s.id??null):"indexedVector"===y?a="VectorTileServer":s.hasOwnProperty("mapName")?a="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?a="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":s.hasOwnProperty("streamUrls")?a="StreamServer":x(s)?(a="SceneServer",u=s.id):s.hasOwnProperty("layers")&&x(s.layers?.[0])&&(a="SceneServer"),!a)return null;const d=null!=u?(0,v.DR)(l):null;return{title:(0,t.pC)(d)&&s.name||(0,r.vt)(l),serverType:a,sublayer:u,url:{path:(0,t.pC)(d)?d.serviceUrl:(0,r.mN)(l).path}}})).apply(this,arguments)}function x(l){return null!=l&&l.hasOwnProperty("store")&&l.hasOwnProperty("id")&&"number"==typeof l.id}function D(){return(D=(0,e.Z)(function*(l,o,s){let a,u=!1;if("FeatureServer"===o){const m=yield(0,i.V)(l,{customParameters:s});u=!!m.layersJSON,a=m.layersJSON||m.serviceJSON}else a=yield(0,h.T)(l,{customParameters:s});const y=a?.layers,d=a?.tables;return{layerIds:y?.map(m=>m.id).reverse()||[],tableIds:d?.map(m=>m.id).reverse()||[],layerInfos:u?y:[],tableInfos:u?d:[]}})).apply(this,arguments)}function U(){return(U=(0,e.Z)(function*(l){return(0,I.T[l])()})).apply(this,arguments)}function W(){return(W=(0,e.Z)(function*(l,o){return(yield(0,h.T)(l,{customParameters:o})).tileInfo})).apply(this,arguments)}},50714:(M,L,n)=>{n.d(L,{V:()=>t});var e=n(71670),g=n(2013);function t(i,P){return r.apply(this,arguments)}function r(){return(r=(0,e.Z)(function*(i,P){const I=yield(0,g.T)(i,P);I.layers=I.layers.filter(v);const h={serviceJSON:I};if((I.currentVersion??0)<10.5)return h;const T=yield(0,g.T)(i+"/layers",P);return h.layersJSON={layers:T.layers.filter(v),tables:T.tables},h})).apply(this,arguments)}function v(i){return!i.type||"Feature Layer"===i.type}},15392:(M,L,n)=>{n.d(L,{T:()=>g});var e=n(71670);const g={BingMapsLayer:(t=(0,e.Z)(function*(){return(yield n.e(9864).then(n.bind(n,49864))).default}),function(){return t.apply(this,arguments)}),BuildingSceneLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9605),n.e(1507),n.e(8439),n.e(5353)]).then(n.bind(n,15353))).default});return function(){return t.apply(this,arguments)}}(),CSVLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(7709).then(n.bind(n,77709))).default});return function(){return t.apply(this,arguments)}}(),DimensionLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(1645)]).then(n.bind(n,1645))).default});return function(){return t.apply(this,arguments)}}(),ElevationLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(6243)]).then(n.bind(n,16243))).default});return function(){return t.apply(this,arguments)}}(),FeatureLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.resolve().then(n.bind(n,36102))).default});return function(){return t.apply(this,arguments)}}(),GeoJSONLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(2728).then(n.bind(n,72728))).default});return function(){return t.apply(this,arguments)}}(),GeoRSSLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(4799).then(n.bind(n,4799))).default});return function(){return t.apply(this,arguments)}}(),GroupLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(2073).then(n.bind(n,22073))).default});return function(){return t.apply(this,arguments)}}(),ImageryLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(2043),n.e(921),n.e(9991),n.e(5860)]).then(n.bind(n,95860))).default});return function(){return t.apply(this,arguments)}}(),ImageryTileLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(2043),n.e(3110),n.e(921),n.e(508),n.e(9991),n.e(8592),n.e(8230)]).then(n.bind(n,28230))).default});return function(){return t.apply(this,arguments)}}(),IntegratedMeshLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9605),n.e(8592),n.e(4436)]).then(n.bind(n,74436))).default});return function(){return t.apply(this,arguments)}}(),KMLLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(4053)]).then(n.bind(n,44053))).default});return function(){return t.apply(this,arguments)}}(),LineOfSightLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(777)]).then(n.bind(n,25465))).default});return function(){return t.apply(this,arguments)}}(),MapImageLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(1516),n.e(8592),n.e(2598)]).then(n.bind(n,9915))).default});return function(){return t.apply(this,arguments)}}(),MapNotesLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(8645)]).then(n.bind(n,48645))).default});return function(){return t.apply(this,arguments)}}(),MediaLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(3658)]).then(n.bind(n,49122))).default});return function(){return t.apply(this,arguments)}}(),OGCFeatureLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9264),n.e(5295)]).then(n.bind(n,36302))).default});return function(){return t.apply(this,arguments)}}(),OpenStreetMapLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(2035)]).then(n.bind(n,32487))).default});return function(){return t.apply(this,arguments)}}(),OrientedImageryLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(6636).then(n.bind(n,76636))).default});return function(){return t.apply(this,arguments)}}(),PointCloudLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9605),n.e(8592),n.e(5601)]).then(n.bind(n,25601))).default});return function(){return t.apply(this,arguments)}}(),RouteLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8431),n.e(1688)]).then(n.bind(n,11688))).default});return function(){return t.apply(this,arguments)}}(),SceneLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9605),n.e(1507),n.e(8439),n.e(8592),n.e(5039)]).then(n.bind(n,75039))).default});return function(){return t.apply(this,arguments)}}(),StreamLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(5627).then(n.bind(n,75627))).default});return function(){return t.apply(this,arguments)}}(),SubtypeGroupLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(9645).then(n.bind(n,59645))).default});return function(){return t.apply(this,arguments)}}(),TileLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(1516),n.e(8592),n.e(2501)]).then(n.bind(n,2501))).default});return function(){return t.apply(this,arguments)}}(),UnknownLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(9228).then(n.bind(n,69228))).default});return function(){return t.apply(this,arguments)}}(),UnsupportedLayer:function(){var t=(0,e.Z)(function*(){return(yield n.e(3520).then(n.bind(n,53520))).default});return function(){return t.apply(this,arguments)}}(),VectorTileLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(292),n.e(8592),n.e(5453)]).then(n.bind(n,32248))).default});return function(){return t.apply(this,arguments)}}(),VoxelLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(9605),n.e(8592),n.e(664)]).then(n.bind(n,20664))).default});return function(){return t.apply(this,arguments)}}(),WFSLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(6010),n.e(4404)]).then(n.bind(n,64404))).default});return function(){return t.apply(this,arguments)}}(),WMSLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(2259)]).then(n.bind(n,72259))).default});return function(){return t.apply(this,arguments)}}(),WMTSLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(3949)]).then(n.bind(n,3949))).default});return function(){return t.apply(this,arguments)}}(),WebTileLayer:function(){var t=(0,e.Z)(function*(){return(yield Promise.all([n.e(8592),n.e(7062)]).then(n.bind(n,71815))).default});return function(){return t.apply(this,arguments)}}()};var t},2013:(M,L,n)=>{n.d(L,{T:()=>t});var e=n(71670),g=n(1897);function t(v,i){return r.apply(this,arguments)}function r(){return(r=(0,e.Z)(function*(v,i){const{data:P}=yield(0,g.default)(v,{responseType:"json",query:{f:"json",...i?.customParameters,token:i?.apiKey}});return P})).apply(this,arguments)}}}]);
//# sourceMappingURL=5708.76ff63e8c3458de8.js.map