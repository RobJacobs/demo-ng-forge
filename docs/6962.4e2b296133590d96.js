"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[6962],{96962:(O,_,t)=>{t.r(_),t.d(_,{default:()=>D});var u=t(18100),y=t(67087),h=t(53661),o=t(7521),p=(t(28191),t(83382),t(19420),t(32995),t(20891)),E=t(84298),c=t(74241);let l=class extends c.default{initialize(){this.addHandles([(0,o.YP)(()=>this.view.scale,()=>this._update(),o.nn)],"constructor")}isUpdating(){const s=this.layer.sublayers.some(P=>null!=P.renderer),e=this._commandsQueue.updating,n=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,d=s&&(e||n||i||r||a);return(0,y.Z)("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}\n  -> hasRenderer ${s}\n  -> hasPendingCommand ${e}\n  -> updatingRequiredFields ${n}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${r}\n  -> updatingTileRenderer ${a}\n`),d}_injectOverrides(s){let e=super._injectOverrides(s);const n=this.view.scale,i=this.layer.sublayers.filter(a=>function g(s,e){return!s.visible||0!==s.minScale&&e>s.minScale||0!==s.maxScale&&e<s.maxScale}(a,n)).map(a=>a.subtypeCode);if(!i.length)return e;e=(0,h.pC)(e)?e:(new E.Z).toJSON();const r=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(s){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),n=s.attributes[e.name],i=this.layer.sublayers.find(r=>r.subtypeCode===n);s.layer=s.sourceLayer=i}_createSchemaConfig(){const s={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(",");let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2",{...super._createSchemaConfig(),...s,definitionExpression:i}}};l=(0,u._)([(0,p.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],l);const D=l}}]);
//# sourceMappingURL=6962.4e2b296133590d96.js.map