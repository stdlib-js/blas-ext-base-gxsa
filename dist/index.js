"use strict";var f=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var g=f(function(D,y){
function k(i,e,r,u,n){var s,a,o,t,v;for(s=r.data,a=r.accessors[0],o=r.accessors[1],t=n,v=0;v<i;v++)o(s,t,a(s,t)-e),t+=u;return r}y.exports=k
});var q=f(function(E,b){
var M=require('@stdlib/array-base-arraylike2object/dist'),O=g(),c=5;function P(i,e,r,u,n){var s,a,o,t;if(i<=0||e===0)return r;if(o=M(r),o.accessorProtocol)return O(i,e,o,u,n);if(s=n,u===1){if(a=i%c,a>0)for(t=0;t<a;t++)r[s]-=e,s+=u;if(i<c)return r;for(t=a;t<i;t+=c)r[s]-=e,r[s+1]-=e,r[s+2]-=e,r[s+3]-=e,r[s+4]-=e,s+=c;return r}for(t=0;t<i;t++)r[s]-=e,s+=u;return r}b.exports=P
});var m=f(function(F,d){
var R=require('@stdlib/strided-base-stride2offset/dist'),w=q();function z(i,e,r,u){return w(i,e,r,u,R(i,u))}d.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=m(),B=q();A(j,"ndarray",B);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
