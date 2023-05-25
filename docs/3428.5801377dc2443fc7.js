"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[3428],{58787:(O,f,s)=>{s.d(f,{D:()=>d});var l=s(65341);function d(u){u&&u.writtenProperties&&u.writtenProperties.forEach(({target:y,propName:i,newOrigin:_})=>{(0,l.l)(y)&&_&&y.originOf(i)!==_&&y.updateOrigin(i,_)})}},65341:(O,f,s)=>{function l(d){return d&&"getAtOrigin"in d&&"originOf"in d}s.d(f,{l:()=>l})},63428:(O,f,s)=>{s.r(f),s.d(f,{save:()=>ue,saveAll:()=>pe,saveAs:()=>de});var l=s(71670),d=s(19420),u=s(32995),y=s(28191),i=s(53661),_=s(30801),E=s(58787),h=s(36102),P=s(4583),D=s(50714),w=s(63719),H=s(37753),X=s(66673),M=s(45773),m=s(39712);const k=y.Z.getLogger("esri.layers.FeatureLayer"),I="Feature Service";function v(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function N(e,t){if(t.type!==I)throw new u.Z("feature-layer:portal-item-wrong-type",v(e,`should have portal item of type "${I}"`))}function J(e){return x.apply(this,arguments)}function x(){return(x=(0,l.Z)(function*(e){if(yield e.load(),(0,w.rQ)(e))throw new u.Z("feature-layer:save",v(e,"using an in-memory source cannot be saved to a portal item"))})).apply(this,arguments)}function T(e,t,a){return U.apply(this,arguments)}function U(){return(U=(0,l.Z)(function*(e,t,a){"beforeSave"in e&&"function"==typeof e.beforeSave&&(yield e.beforeSave());const r=e.write({},t);return function q(e,t){let a=(e.messages??[]).filter(({type:r})=>"error"===r).map(({name:r,message:o,details:n})=>new u.Z(r,o,n));if(t?.ignoreUnsupported&&(a=a.filter(({name:r})=>"layer:unsupported"!==r&&"symbol:unsupported"!==r&&"symbol-layer:unsupported"!==r&&"property:unsupported"!==r&&"url:unsupported"!==r)),a.length>0)throw new u.Z("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}(t,a),r})).apply(this,arguments)}function $(e){const{layer:t,layerJSON:a}=e;return t.isTable?{layers:[],tables:[a]}:{layers:[a],tables:[]}}function K(e){(0,m.qj)(e,m.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((t,a,r)=>r.indexOf(t)===a))}function z(e,t){return L.apply(this,arguments)}function L(){return L=(0,l.Z)(function*(e,t){return/\/\d+\/?$/.test(e.url??"")?$(t[0]):function te(e,t){return A.apply(this,arguments)}(e,t)}),L.apply(this,arguments)}function A(){return A=(0,l.Z)(function*(e,t){const{layer:{url:a,customParameters:r,apiKey:o}}=t[0];let n=yield e.fetchData("json");n&&null!=n.layers&&null!=n.tables||(n=yield function re(e,t,a){return C.apply(this,arguments)}(n,{url:a??"",customParameters:r,apiKey:o},t.map(p=>p.layer.layerId)));for(const p of t)Y(p.layer,p.layerJSON,n);return n}),A.apply(this,arguments)}function C(){return C=(0,l.Z)(function*(e,t,a){var r,o;e||(e={}),(r=e).layers||(r.layers=[]),(o=e).tables||(o.tables=[]);const{url:n,customParameters:p,apiKey:c}=t,{serviceJSON:g,layersJSON:W}=yield(0,D.V)(n,{customParameters:p,apiKey:c}),V=F(e.layers,g.layers,a),Q=F(e.tables,g.tables,a);e.layers=V.itemResources,e.tables=Q.itemResources;const fe=[...V.added,...Q.added],ce=W?[...W.layers,...W.tables]:[];return yield function ae(e,t,a,r){return j.apply(this,arguments)}(e,fe,n,ce),e}),C.apply(this,arguments)}function F(e,t,a){const r=(0,d.e5)(e,t,(n,p)=>n.id===p.id);e=e.filter(n=>!r.removed.some(p=>p.id===n.id));const o=r.added.map(({id:n})=>({id:n}));return o.forEach(({id:n})=>{e.push({id:n})}),{itemResources:e,added:o.filter(({id:n})=>!a.includes(n))}}function j(){return(j=(0,l.Z)(function*(e,t,a,r){const o=t.map(({id:n})=>new h.default({url:a,layerId:n,sourceJSON:r.find(({id:p})=>p===n)}));yield(0,_.as)(o.map(n=>n.load())),o.forEach(n=>{const{layerId:p,loaded:c,defaultPopupTemplate:g}=n;!c||(0,i.Wi)(g)||Y(n,{id:p,popupInfo:g.toJSON()},e)})})).apply(this,arguments)}function Y(e,t,a){!function G(e,t){if(!e)return;const a=e.findIndex(({id:r})=>r===t.id);-1===a?e.push(t):e[a]=t}(e.isTable?a.tables:a.layers,t)}function ne(e){const{portalItem:t}=e;return(0,w.y2)(e)&&!e.dynamicDataSource&&!!t?.loaded&&t.type===I}function R(){return(R=(0,l.Z)(function*(e){if(!e?.length)throw new u.Z("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");yield Promise.all(e.map(r=>r.load()));for(const r of e)if(!ne(r))throw new u.Z("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${v(r,"does not conform")}`,{layer:r});const t=e.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new u.Z("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const a=e.map(r=>r.layerId);if(new Set(a).size!==a.length)throw new u.Z("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")})).apply(this,arguments)}function S(){return(S=(0,l.Z)(function*(e,t){const{url:a,layerId:r,title:o,fullExtent:n,isTable:p}=e,c=(0,P.Qc)(a),g=(0,i.pC)(c)&&"FeatureServer"===c.serverType;t.url=g?a:`${a}/${r}`,t.title||(t.title=o),t.extent=null,!p&&(0,i.pC)(n)&&(t.extent=yield(0,m.$o)(n)),(0,m.ck)(t,m.Kz.METADATA),(0,m.ck)(t,m.Kz.MULTI_LAYER),(0,m.qj)(t,m.Kz.SINGLE_LAYER),p&&(0,m.qj)(t,m.Kz.TABLE),K(t)})).apply(this,arguments)}function Z(){return(Z=(0,l.Z)(function*(e,t,a){const r=e.portal;yield r?.signIn(),yield r?.user?.addItem({item:e,data:t,folder:a?.folder})})).apply(this,arguments)}const ue=(0,_.Ds)(function _e(e,t){return b.apply(this,arguments)});function b(){return(b=(0,l.Z)(function*(e,t){yield J(e),function ee(e){const t=e.portalItem;if(!t)throw k.error("save: requires the portalItem property to be set"),new u.Z("feature-layer:portal-item-not-set",v(e,"requires the portalItem property to be set"));if(!t.loaded)throw new u.Z("feature-layer:portal-item-not-loaded",v(e,"cannot be saved to a portal item that does not exist or is inaccessible"));N(e,t)}(e);const a=e.portalItem,r=(0,M.Y)(a),o=yield T(e,r,t),n=yield z(a,[{layer:e,layerJSON:o}]);return K(a),yield a.update({data:n}),(0,E.D)(r),a})).apply(this,arguments)}const pe=(0,_.Ds)(function(){var e=(0,l.Z)(function*(t,a){yield function se(e){return R.apply(this,arguments)}(t);const r=t[0].portalItem,o=(0,M.Y)(r),n=yield Promise.all(t.map(c=>T(c,o,a))),p=yield z(r,t.map((c,g)=>({layer:c,layerJSON:n[g]})));return K(r),yield r.update({data:p}),yield Promise.all(t.slice(1).map(c=>c.portalItem.reload())),(0,E.D)(o),r.clone()});return function(t,a){return e.apply(this,arguments)}}()),de=(0,_.Ds)(function ye(e,t,a){return B.apply(this,arguments)});function B(){return B=(0,l.Z)(function*(e,t,a){yield J(e);const r=function oe(e,t){var a,r;let o=X.default.from(t);return o.id&&(o=o.clone(),o.id=null),(a=o).type??(a.type=I),(r=o).portal??(r.portal=H.Z.getDefault()),N(e,o),o}(e,t),o=(0,M.Y)(r),n=$({layer:e,layerJSON:yield T(e,o,a)});return yield function le(e,t){return S.apply(this,arguments)}(e,r),yield function ie(e,t,a){return Z.apply(this,arguments)}(r,n,a),e.portalItem=r,(0,E.D)(o),r}),B.apply(this,arguments)}},50714:(O,f,s)=>{s.d(f,{V:()=>u});var l=s(71670),d=s(2013);function u(_,E){return y.apply(this,arguments)}function y(){return(y=(0,l.Z)(function*(_,E){const h=yield(0,d.T)(_,E);h.layers=h.layers.filter(i);const P={serviceJSON:h};if((h.currentVersion??0)<10.5)return P;const D=yield(0,d.T)(_+"/layers",E);return P.layersJSON={layers:D.layers.filter(i),tables:D.tables},P})).apply(this,arguments)}function i(_){return!_.type||"Feature Layer"===_.type}},45773:(O,f,s)=>{s.d(f,{Y:()=>y,h:()=>u});var l=s(55050),d=s(37753);function u(i){return{origin:"portal-item",url:(0,l.mN)(i.itemUrl),portal:i.portal||d.Z.getDefault(),portalItem:i,readResourcePaths:[]}}function y(i){return{origin:"portal-item",messages:[],writtenProperties:[],url:i.itemUrl?(0,l.mN)(i.itemUrl):null,portal:i.portal||d.Z.getDefault(),portalItem:i}}},2013:(O,f,s)=>{s.d(f,{T:()=>u});var l=s(71670),d=s(1897);function u(i,_){return y.apply(this,arguments)}function y(){return(y=(0,l.Z)(function*(i,_){const{data:E}=yield(0,d.default)(i,{responseType:"json",query:{f:"json",..._?.customParameters,token:_?.apiKey}});return E})).apply(this,arguments)}}}]);
//# sourceMappingURL=3428.5801377dc2443fc7.js.map