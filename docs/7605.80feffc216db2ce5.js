"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[7605],{47605:(M,f,s)=>{s.r(f),s.d(f,{default:()=>v});var i=s(71670),l=(s(6010),s(53661)),E=s(16161),a=s(76082),d=s(13549),_=s(26890),P=s(65428),m=s(13110),D=s(34589),u=s(62265),p=s(58971),S=s(47088),h=s(45809),c=s(10465);class v{convertVectorFieldData(t){const e=a.Z.fromJSON(t.pixelBlock),r=(0,u.KC)(e,t.type);return Promise.resolve((0,l.pC)(r)?r.toJSON():null)}decode(t){return(0,i.Z)(function*(){const e=yield(0,d.J)(t.data,t.options);return e&&e.toJSON()})()}symbolize(t){t.pixelBlock=a.Z.fromJSON(t.pixelBlock),t.extent=t.extent?c.Z.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve((0,l.pC)(e)?e.toJSON():null)}updateSymbolizer(t){var e=this;return(0,i.Z)(function*(){e.symbolizer=S.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===e.symbolizer?.rendererJSON.type&&(e.symbolizer.rendererJSON.histograms=t.histograms)})()}updateRasterFunction(t){var e=this;return(0,i.Z)(function*(){e.rasterFunction=(0,P.Ue)(t.rasterFunctionJSON)})()}process(t){var e=this;return(0,i.Z)(function*(){const r=e.rasterFunction.process({extent:c.Z.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>(0,l.pC)(o)?a.Z.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return(0,l.pC)(r)?r.toJSON():null})()}stretch(t){const e=this.symbolizer.simpleStretch(a.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve((0,l.pC)(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=(0,D.Hv)(a.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=(0,_.Vl)(a.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((r,o)=>{e.set(o,r?.toJSON())}),Promise.resolve(e)}mosaicAndTransform(t){return(0,i.Z)(function*(){const e=t.srcPixelBlocks.map(O=>O?new a.Z(O):null),r=(0,_.us)(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,n=r;return t.coefs&&(n=(0,_.Uk)(r,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=(0,_.Qh)(t.destDimension,t.gcsGrid),n=(0,l.Wg)((0,u.xQ)(n,t.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:n?.toJSON(),localNorthDirections:o}})()}createFlowMesh(t,e){return(0,i.Z)(function*(){const r={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:n}=yield(0,h.GE)(t.meshType,t.simulationSettings,r,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:n.buffer},transferList:[o.buffer,n.buffer]}})()}getProjectionOffsetGrid(t){return(0,i.Z)(function*(){const e=c.Z.fromJSON(t.projectedExtent),r=c.Z.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new E.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,m.Mk)(e.spatialReference,r.spatialReference,o))&&(yield(0,m.zD)());const n=t.rasterTransform?(0,p.c)(t.rasterTransform):null;return(0,m.Qp)({...t,projectedExtent:e,srcBufferExtent:r,datumTransformation:o,rasterTransform:n})})()}}}}]);
//# sourceMappingURL=7605.80feffc216db2ce5.js.map