"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[8981],{48981:(A,c,a)=>{a.r(c),a.d(c,{default:()=>x});var h=a(71670),u=a(67087),f=a(53661),m=a(52674),p=a(571);class x{createIndex(t,o){var e=this;return(0,h.Z)(function*(){const s=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m.Q;const r=e._createMeshData(t),l=(0,f.pC)(o)?yield o.invoke("createIndexThread",r,{transferList:s}):e.createIndexThread(r).result;return e._createPooledRBush().fromJSON(l)})()}createIndexThread(t){const o=new Float64Array(t.position),e=this._createPooledRBush();return t.components?this._createIndexComponentsThread(e,o,t.components.map(s=>new Uint32Array(s))):this._createIndexAllThread(e,o)}_createIndexAllThread(t,o){const e=new Array(o.length/9);let s=0;for(let r=0;r<o.length;r+=9)e[s++]=d(o,r+0,r+3,r+6);return t.load(e),{result:t.toJSON()}}_createIndexComponentsThread(t,o,e){let s=0;for(const _ of e)s+=_.length/3;const r=new Array(s);let l=0;for(const _ of e)for(let i=0;i<_.length;i+=3)r[l++]=d(o,3*_[i+0],3*_[i+1],3*_[i+2]);return t.load(r),{result:t.toJSON()}}_createMeshData(t){const o=(t.transform?(0,p.I5)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(e=>!e.faces)?{position:o}:{position:o,components:t.components.map(e=>e.faces)}}_createPooledRBush(){return new m.Q(9,(0,u.Z)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function d(n,t,o,e){return{minX:Math.min(n[t+0],n[o+0],n[e+0]),maxX:Math.max(n[t+0],n[o+0],n[e+0]),minY:Math.min(n[t+1],n[o+1],n[e+1]),maxY:Math.max(n[t+1],n[o+1],n[e+1]),p0:[n[t+0],n[t+1],n[t+2]],p1:[n[o+0],n[o+1],n[o+2]],p2:[n[e+0],n[e+1],n[e+2]]}}}}]);
//# sourceMappingURL=8981.9e9ca8f4e626745b.js.map