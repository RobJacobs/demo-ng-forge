"use strict";(self.webpackChunkdemo_ng_forge=self.webpackChunkdemo_ng_forge||[]).push([[1945],{81945:(_,g,f)=>{f.r(g),f.d(g,{createSymbolSchema:()=>j});var i=f(20753),l=f(21605);function u(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function y(e){return(0,l.hF)(e)}function j(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function b(e,t,r){const a=(0,l.jj)(i.LW.FILL,t),n=r?y(a):a,s=e.clone(),o=s.outline,m=(0,l.jy)(t.symbologyType);m||(s.outline=null);const p={materialKey:n,hash:s.hash(),...u(s)};if(m)return p;const c=[];if(c.push(p),o){const h=(0,l.jj)(i.LW.LINE,{...t,isOutline:!0}),V={materialKey:r?y(h):h,hash:o.hash(),...u(o)};c.push(V)}return{type:"composite-symbol",layers:c,hash:c.reduce((h,V)=>V.hash+h,"")}}(e,t,r);case"simple-marker":case"picture-marker":return function K(e,t,r){const a=(0,l.jj)(i.LW.MARKER,t),n=r?y(a):a,s=u(e);return{materialKey:n,hash:e.hash(),...s,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"simple-line":return function d(e,t,r){const a=(0,l.jy)(t.symbologyType)?i.mD.DEFAULT:t.symbologyType,n=(0,l.jj)(i.LW.LINE,{...t,symbologyType:a}),s=r?y(n):n,o=e.clone(),m=o.marker;o.marker=null;const p=[];if(p.push({materialKey:s,hash:o.hash(),...u(o)}),m){const c=(0,l.jj)(i.LW.MARKER,t),h=r?y(c):c;m.color=m.color??o.color,p.push({materialKey:h,hash:m.hash(),lineWidth:o.width,...u(m)})}return{type:"composite-symbol",layers:p,hash:p.reduce((c,h)=>h.hash+c,"")}}(e,t,r);case"text":return function L(e,t,r){const a=(0,l.jj)(i.LW.TEXT,t),n=r?y(a):a,s=u(e);return{materialKey:n,hash:e.hash(),...s,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,r);case"label":return function S(e,t,r){const a=e.toJSON(),n=(0,l.jj)(i.LW.LABEL,{...t,placement:a.labelPlacement});return{materialKey:r?y(n):n,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...u(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}}}]);
//# sourceMappingURL=1945.6341a7414889dbd4.js.map