import{F as u,G as m,I as s,S as l,b as o,c as g,o as c}from"./chunk-AWYXD4HD.js";var v=class{static sortData(r,e,n,t){return!r||!r.length?r:(n=n||"string",t!=="DESC"&&(t="ASC"),r.slice().sort((a,i)=>(a=l(a,e),i=l(i,e),t==="DESC"?this.comparator(i,a,n):this.comparator(a,i,n))))}static groupData(r,e){return!s(r)||!r.length||!e?.length?r:r.reduce((n,t)=>{let a=t[e];return n[a]||(n[a]=[]),n[a].push(t),n},{})}static filterData(r,e){if(!s(r)||!r.length||!s(e)||!e.length)return r;e=e.map(t=>{if(m(t.value)&&t.value.length){let a;if(t.value.substring(0,2)==="<>"){if(t.value.length===2)return t.value="",t;a=t.value.substring(0,2),t.value=t.value.substring(2)}else if(t.value.substring(0,1)==="<"||t.value.substring(0,1)===">"){if(t.value.length===1)return t.value="",t;a=t.value.substring(0,1),t.value=t.value.substring(1)}a&&Object.defineProperty(t,"operator",{value:a})}return t.value=(""+t.value).toLowerCase(),t});let n=t=>e.every(a=>{if(!a.value.length)return!0;let i=(""+l(t,a.key)).toLowerCase();if(!i.length)return!1;if(a.strict)return i===a.value;switch(a.operator){case"<>":return this.comparator(i,a.value,a.type)!==0;case">":return this.comparator(i,a.value,a.type)>0;case"<":return this.comparator(i,a.value,a.type)<0;default:return i.indexOf(a.value)>-1}});return r.filter(t=>n(t))}static comparator(r,e,n="string"){if(r==e)return 0;if(!u(r))return-1;if(!u(e))return 1;switch(n){case"boolean":return r?-1:1;case"date":if(r=new Date(r).getTime(),isNaN(r))return-1;if(e=new Date(e).getTime(),isNaN(e))return 1;break;case"number":if(r=parseFloat(r),isNaN(r))return-1;if(e=parseFloat(e),isNaN(e))return 1;break;default:return!isNaN(parseFloat(r))&&!isNaN(parseFloat(e))?(""+r).localeCompare(""+e,navigator.language,{numeric:!0}):(""+r).localeCompare(""+e,navigator.language,{sensitivity:"base"})}return r<e?-1:r>e?1:0}static navigateBack(r,e,n){r.getState()?.navigationId===1?e.navigate(n):r.back()}static elementId(r){return r+Math.random().toString(36).replace(/[^a-z]+/g,"")}static formatDate(r,e="MM/dd/yyyy"){return u(r)?o(r,e,navigator.language):""}static formatNumber(r,e="1.2-2"){return g(r,navigator.language,e)}static uniqueId(){return Math.random().toString(36).substring(2)}static parseQueryStringParameters(){let r={},e=window.location.href.indexOf("?");if(e!==-1){let n=new c({fromString:window.location.href.substring(e)});n.keys().forEach(t=>{let a=n.getAll(t);a.length&&Object.defineProperty(r,t.toLowerCase(),{value:a.length===1?a[0]:a,enumerable:!0,writable:!0})})}return r}static reduceObject(r){let e={};return Object.keys(r).forEach(n=>{u(r[n])&&(s(r[n])?r[n].length&&(e[n]=r[n]):(r[n]+"").trim().length&&(e[n]=typeof r[n]=="string"?r[n].trim():r[n]))}),e}};export{v as a};
//# sourceMappingURL=chunk-DA33O62B.js.map