"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[6010],{70554:(be,Y,y)=>{y.d(Y,{O3:()=>fe,lG:()=>oe,my:()=>ye,q9:()=>h});var T=y(32995),z=y(33510),E=y(93846),d=y(21230);const w={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function h(n){return w[n]}function*D(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const s of n.features)s&&(yield s)}}function*j(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const s of n.coordinates)yield*s;break;case"MultiPolygon":for(const s of n.coordinates)for(const l of s)yield*l}}function k(n){for(const s of n)if(s.length>2)return!0;return!1}function ee(n){let s=0;for(let l=0;l<n.length;l++){const p=n[l],m=n[(l+1)%n.length];s+=p[0]*m[1]-m[0]*p[1]}return s<=0}function te(n){const s=n[0],l=n[n.length-1];return s[0]===l[0]&&s[1]===l[1]&&s[2]===l[2]||n.push(s),n}function ue(n,s,l){switch(s.type){case"LineString":return function le(n,s,l){return I(n,s.coordinates,l),n}(n,s,l);case"MultiLineString":return function N(n,s,l){for(const p of s.coordinates)I(n,p,l);return n}(n,s,l);case"MultiPoint":return function O(n,s,l){return I(n,s.coordinates,l),n}(n,s,l);case"MultiPolygon":return function ne(n,s,l){for(const p of s.coordinates){R(n,p[0],l);for(let m=1;m<p.length;m++)$(n,p[m],l)}return n}(n,s,l);case"Point":return function ce(n,s,l){return V(n,s.coordinates,l),n}(n,s,l);case"Polygon":return function B(n,s,l){const p=s.coordinates;R(n,p[0],l);for(let m=1;m<p.length;m++)$(n,p[m],l);return n}(n,s,l)}}function R(n,s,l){const p=te(s);!function ie(n){return!ee(n)}(p)?I(n,p,l):re(n,p,l)}function $(n,s,l){const p=te(s);!function ae(n){return ee(n)}(p)?I(n,p,l):re(n,p,l)}function I(n,s,l){for(const p of s)V(n,p,l);n.lengths.push(s.length)}function re(n,s,l){for(let p=s.length-1;p>=0;p--)V(n,s[p],l);n.lengths.push(s.length)}function V(n,s,l){const[p,m,P]=s;n.coords.push(p,m),l.hasZ&&n.coords.push(P||0)}function pe(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function fe(n){if(!n)throw new T.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==n.type&&"FeatureCollection"!==n.type)throw new T.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:s}=n;if(!s)return;const l="string"==typeof s?s:"name"===s.type?s.properties.name:"EPSG"===s.type?s.properties.code:null,p=new RegExp(".*(CRS84H?|4326)$","i");if(!l||!p.test(l))throw new T.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:s})}function ye(n,s={}){const l=[],p=new Set,m=new Set;let P,L=!1,b=null,G=!1,{geometryType:C=null}=s,J=!1;for(const W of D(n)){const{geometry:U,properties:v,id:Z}=W;if((!U||(C||(C=h(U.type)),h(U.type)===C))&&(L||(L=k(j(U))),G||(G=null!=Z,G&&(P=typeof Z,v&&(b=Object.keys(v).filter(A=>v[A]===Z)))),v&&b&&G&&null!=Z&&(b.length>1?b=b.filter(A=>v[A]===Z):1===b.length&&(b=v[b[0]]===Z?b:[])),!J&&v)){let A=!0;for(const F in v){if(p.has(F))continue;const _=v[F];if(null==_){A=!1,m.add(F);continue}const se=pe(_);if("unknown"===se){m.add(F);continue}m.delete(F),p.add(F);const X=(0,d.q6)(F);X&&l.push({name:X,alias:F,type:se})}J=A}}const H=(0,d.q6)(1===b?.length&&b[0]||null)??void 0;if(H)for(const W of l)if(W.name===H&&(0,d.H7)(W)){W.type="esriFieldTypeOID";break}return{fields:l,geometryType:C,hasZ:L,objectIdFieldName:H,objectIdFieldType:P,unknownFields:Array.from(m)}}function oe(n,s){return Array.from(function*q(n,s={}){const{geometryType:l,objectIdField:p}=s;for(const m of n){const{geometry:P,properties:L,id:b}=m;if(P&&h(P.type)!==l)continue;const G=L||{};let C;p&&(C=G[p],null==b||C||(G[p]=C=b)),yield new z.u_(P?ue(new E.Z,P,s):null,G,null,C??void 0)}}(D(n),s))}},66010:(be,Y,y)=>{y.d(Y,{M8:()=>$,ft:()=>H,FU:()=>p,Bm:()=>Te,be:()=>W,eB:()=>_});var T=y(71670),E=(y(6010),y(1897)),d=y(32995),w=y(91800),h=y(53661),D=y(30801),j=y(55050),q=y(21789),k=y(53492),ie=y(86230),ae=y(70554);const le=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var N=y(53890),O=y(23973),ne=y(68230),ce=y(10465);const B="xlink:href",R="2.0.0",$="__esri_wfs_id__",I="wfs-layer:getWFSLayerTypeInfo-error",re="wfs-layer:empty-service",V="wfs-layer:feature-type-not-found",pe="wfs-layer:geojson-not-supported",fe="wfs-layer:kvp-encoding-not-supported",ye="wfs-layer:malformed-json",oe="wfs-layer:unknown-geometry-type",n="wfs-layer:unknown-field-type",s="wfs-layer:unsupported-spatial-reference",l="wfs-layer:unsupported-wfs-version";function p(o,r){return m.apply(this,arguments)}function m(){return(m=(0,T.Z)(function*(o,r){const t=function P(o){const r=he(o);(function Ce(o){const r=o.firstElementChild?.getAttribute("version");if(r&&r!==R)throw new d.Z(l,`Unsupported WFS version ${r}. Supported version: ${R}`)})(r),we(r);const t=r.firstElementChild,i=(0,w.Fs)(function C(o){return(0,N.H)(o,{FeatureTypeList:{FeatureType:r=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},i=new Set([4326]),a=u=>{const c=parseInt(u.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(c)||i.add(c)};return(0,N.h)(r,{Name:u=>{const{name:c,prefix:f}=K(u.textContent);t.typeName=`${f}:${c}`,t.name=c,t.namespacePrefix=f,t.namespaceUri=u.lookupNamespaceURI(f)},Abstract:u=>{t.description=u.textContent},Title:u=>{t.title=u.textContent},WGS84BoundingBox:u=>{t.extent=function J(o){let r,t,i,a;for(const u of o.children)switch(u.localName){case"LowerCorner":[r,t]=u.textContent.split(" ").map(c=>Number.parseFloat(c));break;case"UpperCorner":[i,a]=u.textContent.split(" ").map(c=>Number.parseFloat(c))}return{xmin:r,ymin:t,xmax:i,ymax:a,spatialReference:k.Zn}}(u)},DefaultSRS:a,DefaultCRS:a,OtherSRS:a,OtherCRS:a}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...i),t}}})}(t));return{operations:b(t),get featureTypes(){return Array.from(i())},readFeatureTypes:i}}((yield(0,E.default)(o,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:R,...r?.customParameters},signal:r?.signal})).data);return function G(o,r){(0,j.$U)(o)&&((0,j.D6)(o,r.operations.DescribeFeatureType.url,!0)&&(r.operations.DescribeFeatureType.url=(0,j.hO)(r.operations.DescribeFeatureType.url)),(0,j.D6)(o,r.operations.GetFeature.url,!0)&&(r.operations.GetFeature.url=(0,j.hO)(r.operations.GetFeature.url)))}(o,t),t})).apply(this,arguments)}const L=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function b(o){let r=!1;const t={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,N.h)(o,{OperationsMetadata:{Operation:i=>{switch(i.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:a=>{t.GetCapabilities.url=a.getAttribute(B)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:a=>{t.DescribeFeatureType.url=a.getAttribute(B)}}}};case"GetFeature":return{DCP:{HTTP:{Get:a=>{t.GetFeature.url=a.getAttribute(B)}}},Parameter:a=>{if("outputFormat"===a.getAttribute("name"))return{AllowedValues:{Value:u=>{const c=u.textContent;c&&L.has(c.toLowerCase())&&(t.GetFeature.outputFormat=c)}}}}}}},Constraint:i=>{switch(i.getAttribute("name")){case"KVPEncoding":return{DefaultValue:a=>{r="true"===a.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:a=>{t.GetFeature.supportsPagination="true"===a.textContent.toLowerCase()}}}}}}),!r)throw new d.Z(fe,"WFS service doesn't support key/value pair (KVP) encoding");if((0,h.Wi)(t.GetFeature.outputFormat))throw new d.Z(pe,"WFS service doesn't support GeoJSON output format");return t}function H(o,r,t){return(0,w.sE)(o,i=>t?i.name===r&&i.namespaceUri===t:i.typeName===r||i.name===r)}function W(o,r,t){return U.apply(this,arguments)}function U(){return U=(0,T.Z)(function*(o,r,t,i={}){const{featureType:a,extent:u}=yield function v(o,r,t){return Z.apply(this,arguments)}(o,r,t,i),{fields:c,geometryType:f,swapXY:g,objectIdField:S,geometryField:x}=yield function A(o,r){return F.apply(this,arguments)}(o,a.typeName,i);return{url:o.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:c,geometryField:x,geometryType:f,objectIdField:S,spatialReference:i.spatialReference??ne.Z.WGS84,extent:u,swapXY:g,wfsCapabilities:o,customParameters:i.customParameters}}),U.apply(this,arguments)}function Z(){return(Z=(0,T.Z)(function*(o,r,t,i={}){const{spatialReference:a=ne.Z.WGS84}=i,u=o.readFeatureTypes(),c=r?H(u,r,t):u.next().value;if((0,h.Wi)(c))throw r?new d.Z(V,`The type '${r}' could not be found in the service`):new d.Z(re,"The service is empty");let f=new ce.Z({...c.extent,spatialReference:a});if(!(0,k.fS)(a,k.Zn))try{yield(0,q.iQ)(k.Zn,a,void 0,i),f=(0,q.iV)(f,k.Zn)}catch{throw new d.Z(s,"Projection not supported")}return{extent:f,spatialReference:a,featureType:c}})).apply(this,arguments)}function F(){return(F=(0,T.Z)(function*(o,r,t={}){const[i,a]=yield(0,D.as)([xe(o.operations.DescribeFeatureType.url,r,t),se(o,r,t)]);if(i.error||a.error)throw new d.Z(I,`An error occurred while getting info about the feature type '${r}'`,{error:i.error||a.error});const{fields:u,errors:c}=i.value??{},f=i.value?.geometryType||a.value?.geometryType,g=a.value?.swapXY??!1;if((0,h.Wi)(f))throw new d.Z(oe,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:f,fields:u,errors:c});return{..._(u??[]),geometryType:f,swapXY:g}})).apply(this,arguments)}function _(o){const r=o.find(i=>"geometry"===i.type);let t=o.find(i=>"oid"===i.type);return o=o.filter(i=>"geometry"!==i.type),t||(t=new O.Z({name:$,type:"oid",alias:$}),o.unshift(t)),{geometryField:r?.name??null,objectIdField:t.name,fields:o}}function se(o,r){return X.apply(this,arguments)}function X(){return(X=(0,T.Z)(function*(o,r,t={}){let i,a=!1;const[u,c]=yield Promise.all([Te(o.operations.GetFeature.url,r,o.operations.GetFeature.outputFormat,{...t,count:1}),(0,E.default)(o.operations.GetFeature.url,{responseType:"text",query:Se(r,void 0,{...t,count:1}),signal:t?.signal})]),f="FeatureCollection"===u.type&&u.features[0]?.geometry;if(f){let g;switch(i=ie.M.fromJSON((0,ae.q9)(f.type)),f.type){case"Point":g=f.coordinates;break;case"LineString":case"MultiPoint":g=f.coordinates[0];break;case"MultiLineString":case"Polygon":g=f.coordinates[0][0];break;case"MultiPolygon":g=f.coordinates[0][0][0]}const S=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(c.data);if(S){const x=g[0].toFixed(3),M=g[1].toFixed(3),Q=parseFloat(S[1]).toFixed(3);x===parseFloat(S[2]).toFixed(3)&&M===Q&&(a=!0)}}return{geometryType:i,swapXY:a}})).apply(this,arguments)}function xe(o,r,t){return de.apply(this,arguments)}function de(){return(de=(0,T.Z)(function*(o,r,t){return function Fe(o,r){const{name:t}=K(o),i=he(r);we(i);const a=(0,w.sE)((0,N.H)(i.firstElementChild,{element:u=>({name:u.getAttribute("name"),typeName:K(u.getAttribute("type")).name})}),({name:u})=>u===t);if((0,h.pC)(a)){const u=(0,w.sE)((0,N.H)(i.firstElementChild,{complexType:c=>c}),c=>c.getAttribute("name")===a.typeName);if((0,h.pC)(u))return function Pe(o){const r=[],t=[];let i;const a=(0,N.H)(o,{complexContent:{extension:{sequence:{element:u=>u}}}});for(const u of a){const c=u.getAttribute("name");if(!c)continue;let f,g;if(u.hasAttribute("type")?f=K(u.getAttribute("type")).name:(0,N.h)(u,{simpleType:{restriction:M=>(f=K(M.getAttribute("base")).name,{maxLength:Q=>{g=+Q.getAttribute("value")}})}}),!f)continue;const S="true"===u.getAttribute("nillable");let x=!1;switch(f.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":t.push(new O.Z({name:c,alias:c,type:"integer",nullable:S}));break;case"float":case"double":case"decimal":t.push(new O.Z({name:c,alias:c,type:"double",nullable:S}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":t.push(new O.Z({name:c,alias:c,type:"string",nullable:S,length:g??255}));break;case"datetime":case"date":t.push(new O.Z({name:c,alias:c,type:"date",nullable:S,length:g??36}));break;case"pointpropertytype":i="point",x=!0;break;case"multipointpropertytype":i="multipoint",x=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",x=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",x=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":x=!0,r.push(new d.Z(oe,`geometry type '${f}' is not supported`,{type:(new XMLSerializer).serializeToString(o)}));break;default:r.push(new d.Z(n,`Unknown field type '${f}'`,{type:(new XMLSerializer).serializeToString(o)}))}x&&t.push(new O.Z({name:c,alias:c,type:"geometry",nullable:S}))}for(const u of t)if("integer"===u.type&&!u.nullable&&Ee.has(u.name.toLowerCase())){u.type="oid";break}return{geometryType:i,fields:t,errors:r}}(u)}throw new d.Z(V,`Type '${o}' not found in document`,{document:(new XMLSerializer).serializeToString(i)})}(r,(yield(0,E.default)(o,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:R,TYPENAME:r,...t?.customParameters},signal:t?.signal})).data)})).apply(this,arguments)}const Ee=new Set(["objectid","fid"]);function Te(o,r,t,i){return me.apply(this,arguments)}function me(){return(me=(0,T.Z)(function*(o,r,t,i){let{data:a}=yield(0,E.default)(o,{responseType:"text",query:Se(r,t,i),signal:i?.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(i?.dateFields?.length){const u=new Set(i.dateFields);return JSON.parse(a,(c,f)=>u.has(c)?function ee(o){return function ue(o){const r=le.exec(o);if(!r?.groups)return null;const t=r.groups,i=+t.year,a=+t.month-1,u=+t.day,c=+(t.hours??"0"),f=+(t.minutes??"0"),g=+(t.seconds??"0");if(c>23||f>59||g>59)return null;const S=t.ms??"0",x=S?+S.padEnd(3,"0").substring(0,3):0;let M;return M=t.isUTC?Date.UTC(i,a,u,c,f,g,x):t.offsetSign?6e4*("+"===t.offsetSign?-1:1)*(60*+t.offsetHours+ +t.offsetMinutes)+Date.UTC(i,a,u,c,f,g,x):new Date(i,a,u,c,f,g,x).getTime(),Number.isNaN(M)?null:M}(o)??function te(o){const r=new Date(o).getTime();return Number.isNaN(r)?null:r}(o)}(f):f)}return JSON.parse(a)}catch(u){throw new d.Z(ye,"Error while parsing the\xa0response",{response:a,error:u})}})).apply(this,arguments)}function Se(o,r,t){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:R,TYPENAMES:o,OUTPUTFORMAT:r,SRSNAME:"EPSG:4326",STARTINDEX:t?.startIndex,COUNT:t?.count,...t?.customParameters}}function he(o){return(new DOMParser).parseFromString(o.trim(),"text/xml")}function K(o){const[r,t]=o.split(":");return{prefix:t?r:"",name:t??r}}function we(o){let r="",t="";if((0,N.h)(o.firstElementChild,{Exception:i=>(r=i.getAttribute("exceptionCode"),{ExceptionText:a=>{t=a.textContent}})}),r)throw new d.Z(`wfs-layer:${r}`,t)}},53890:(be,Y,y)=>{function T(E,d){if(E&&d)for(const w of E.children)if(w.localName in d){const h=d[w.localName];if("function"==typeof h){const D=h(w);D&&T(w,D)}else T(w,h)}}function*z(E,d){for(const w of E.children)if(w.localName in d){const h=d[w.localName];"function"==typeof h?yield h(w):yield*z(w,h)}}y.d(Y,{H:()=>z,h:()=>T})}}]);
//# sourceMappingURL=6010.81f1a370ccdfc725.js.map