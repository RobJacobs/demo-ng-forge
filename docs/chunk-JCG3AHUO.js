import{a}from"./chunk-5G5LBANU.js";import{b as d}from"./chunk-AGZOMTSQ.js";import{E as u,G as s,o as g,p as h}from"./chunk-T54VJELX.js";import{N as l,ba as c,d as n,ha as m,v as p}from"./chunk-5VCAQWVT.js";var x=(()=>{class r{constructor(){this.httpClient=m(h)}getProfile(){return this.httpClient.get("mock-data/profile.json")}getPeople(t){return this.httpClient.get("mock-data/people.json").pipe(l(1e3),p(e=>{let o=e.length;return t&&(t.filters?.length&&(e=a.filterData(e,t.filters.map(i=>({key:i.property,value:i.value,strict:i.property==="gender"||i.property==="id"}))),o=e.length),t.sort&&(e=a.sortData(e,t.sort.property,"string",t.sort.direction)),s(t.skip)&&s(t.take)&&(e=e.slice(t.skip,t.skip+t.take))),{count:o,data:e}}))}getPerson(t){return this.httpClient.get("mock-data/people.json").pipe(p(e=>e.find(o=>o.id.toString()===t.toString())))}getSearches(t){return new n(e=>{let o=localStorage.getItem(t);u(o)&&(o=JSON.parse(o)),e.next(o),e.complete()})}saveSearches(t,e){return new n(o=>{localStorage.setItem(t,JSON.stringify(e)),o.next(!0),o.complete()})}getLongRequest(){return this.httpClient.get("http://localhost:5000/long-request",{context:new g().set(d,!0)})}getFile(t){return this.httpClient.get(`mock-data/${t}`,{responseType:"blob"})}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275prov=c({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{x as a};
//# sourceMappingURL=chunk-JCG3AHUO.js.map
