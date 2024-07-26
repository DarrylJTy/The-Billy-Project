var DR=Object.defineProperty;var NR=(e,t,n)=>t in e?DR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>NR(e,typeof t!="symbol"?t+"":t,n);function $R(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Al=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function GS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var qS={exports:{}},ld={},XS={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),FR=Symbol.for("react.portal"),zR=Symbol.for("react.fragment"),BR=Symbol.for("react.strict_mode"),HR=Symbol.for("react.profiler"),UR=Symbol.for("react.provider"),WR=Symbol.for("react.context"),VR=Symbol.for("react.forward_ref"),YR=Symbol.for("react.suspense"),GR=Symbol.for("react.memo"),qR=Symbol.for("react.lazy"),Iv=Symbol.iterator;function XR(e){return e===null||typeof e!="object"?null:(e=Iv&&e[Iv]||e["@@iterator"],typeof e=="function"?e:null)}var KS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},QS=Object.assign,JS={};function ha(e,t,n){this.props=e,this.context=t,this.refs=JS,this.updater=n||KS}ha.prototype.isReactComponent={};ha.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ha.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ZS(){}ZS.prototype=ha.prototype;function bg(e,t,n){this.props=e,this.context=t,this.refs=JS,this.updater=n||KS}var vg=bg.prototype=new ZS;vg.constructor=bg;QS(vg,ha.prototype);vg.isPureReactComponent=!0;var Mv=Array.isArray,ek=Object.prototype.hasOwnProperty,yg={current:null},tk={key:!0,ref:!0,__self:!0,__source:!0};function nk(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)ek.call(t,r)&&!tk.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:sl,type:e,key:i,ref:a,props:o,_owner:yg.current}}function KR(e,t){return{$$typeof:sl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xg(e){return typeof e=="object"&&e!==null&&e.$$typeof===sl}function QR(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jv=/\/+/g;function Of(e,t){return typeof e=="object"&&e!==null&&e.key!=null?QR(""+e.key):t.toString(36)}function Pc(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sl:case FR:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Of(a,0):r,Mv(o)?(n="",e!=null&&(n=e.replace(jv,"$&/")+"/"),Pc(o,t,n,"",function(c){return c})):o!=null&&(xg(o)&&(o=KR(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(jv,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",Mv(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Of(i,s);a+=Pc(i,t,n,l,o)}else if(l=XR(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Of(i,s++),a+=Pc(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Il(e,t,n){if(e==null)return e;var r=[],o=0;return Pc(e,r,"","",function(i){return t.call(n,i,o++)}),r}function JR(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},Ac={transition:null},ZR={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Ac,ReactCurrentOwner:yg};function rk(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Il,forEach:function(e,t,n){Il(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Il(e,function(){t++}),t},toArray:function(e){return Il(e,function(t){return t})||[]},only:function(e){if(!xg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=ha;he.Fragment=zR;he.Profiler=HR;he.PureComponent=bg;he.StrictMode=BR;he.Suspense=YR;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZR;he.act=rk;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=QS({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=yg.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ek.call(t,l)&&!tk.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:sl,type:e.type,key:o,ref:i,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:WR,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:UR,_context:e},e.Consumer=e};he.createElement=nk;he.createFactory=function(e){var t=nk.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:VR,render:e}};he.isValidElement=xg;he.lazy=function(e){return{$$typeof:qR,_payload:{_status:-1,_result:e},_init:JR}};he.memo=function(e,t){return{$$typeof:GR,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Ac.transition;Ac.transition={};try{e()}finally{Ac.transition=t}};he.unstable_act=rk;he.useCallback=function(e,t){return Pt.current.useCallback(e,t)};he.useContext=function(e){return Pt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};he.useEffect=function(e,t){return Pt.current.useEffect(e,t)};he.useId=function(){return Pt.current.useId()};he.useImperativeHandle=function(e,t,n){return Pt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return Pt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return Pt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return Pt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return Pt.current.useReducer(e,t,n)};he.useRef=function(e){return Pt.current.useRef(e)};he.useState=function(e){return Pt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return Pt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return Pt.current.useTransition()};he.version="18.3.1";XS.exports=he;var O=XS.exports;const U=pa(O),eP=$R({__proto__:null,default:U},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tP=O,nP=Symbol.for("react.element"),rP=Symbol.for("react.fragment"),oP=Object.prototype.hasOwnProperty,iP=tP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aP={key:!0,ref:!0,__self:!0,__source:!0};function ok(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)oP.call(t,r)&&!aP.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nP,type:e,key:i,ref:a,props:o,_owner:iP.current}}ld.Fragment=rP;ld.jsx=ok;ld.jsxs=ok;qS.exports=ld;var x=qS.exports,eh={},ik={exports:{}},en={},ak={exports:{}},sk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var q=M.length;M.push(V);e:for(;0<q;){var oe=q-1>>>1,N=M[oe];if(0<o(N,V))M[oe]=V,M[q]=N,q=oe;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],q=M.pop();if(q!==V){M[0]=q;e:for(var oe=0,N=M.length,F=N>>>1;oe<F;){var D=2*(oe+1)-1,z=M[D],T=D+1,le=M[T];if(0>o(z,q))T<N&&0>o(le,z)?(M[oe]=le,M[T]=q,oe=T):(M[oe]=z,M[D]=q,oe=D);else if(T<N&&0>o(le,q))M[oe]=le,M[T]=q,oe=T;else break e}}return V}function o(M,V){var q=M.sortIndex-V.sortIndex;return q!==0?q:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],u=1,f=null,p=3,m=!1,h=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=M)r(c),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(c)}}function _(M){if(b=!1,y(M),!h)if(n(l)!==null)h=!0,ne(k);else{var V=n(c);V!==null&&ee(_,V.startTime-M)}}function k(M,V){h=!1,b&&(b=!1,v(C),C=-1),m=!0;var q=p;try{for(y(V),f=n(l);f!==null&&(!(f.expirationTime>V)||M&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,p=f.priorityLevel;var N=oe(f.expirationTime<=V);V=e.unstable_now(),typeof N=="function"?f.callback=N:f===n(l)&&r(l),y(V)}else r(l);f=n(l)}if(f!==null)var F=!0;else{var D=n(c);D!==null&&ee(_,D.startTime-V),F=!1}return F}finally{f=null,p=q,m=!1}}var S=!1,E=null,C=-1,A=5,P=-1;function L(){return!(e.unstable_now()-P<A)}function W(){if(E!==null){var M=e.unstable_now();P=M;var V=!0;try{V=E(!0,M)}finally{V?Z():(S=!1,E=null)}}else S=!1}var Z;if(typeof g=="function")Z=function(){g(W)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,X=se.port2;se.port1.onmessage=W,Z=function(){X.postMessage(null)}}else Z=function(){w(W,0)};function ne(M){E=M,S||(S=!0,Z())}function ee(M,V){C=w(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){h||m||(h=!0,ne(k))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var q=p;p=V;try{return M()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var q=p;p=M;try{return V()}finally{p=q}},e.unstable_scheduleCallback=function(M,V,q){var oe=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,M){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,M={id:u++,callback:V,priorityLevel:M,startTime:q,expirationTime:N,sortIndex:-1},q>oe?(M.sortIndex=q,t(c,M),n(l)===null&&M===n(c)&&(b?(v(C),C=-1):b=!0,ee(_,q-oe))):(M.sortIndex=N,t(l,M),h||m||(h=!0,ne(k))),M},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(M){var V=p;return function(){var q=p;p=V;try{return M.apply(this,arguments)}finally{p=q}}}})(sk);ak.exports=sk;var sP=ak.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lP=O,Jt=sP;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lk=new Set,Ts={};function ui(e,t){Qi(e,t),Qi(e+"Capture",t)}function Qi(e,t){for(Ts[e]=t,e=0;e<t.length;e++)lk.add(t[e])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=Object.prototype.hasOwnProperty,cP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lv={},Dv={};function uP(e){return th.call(Dv,e)?!0:th.call(Lv,e)?!1:cP.test(e)?Dv[e]=!0:(Lv[e]=!0,!1)}function dP(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fP(e,t,n,r){if(t===null||typeof t>"u"||dP(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function At(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new At(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new At(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new At(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new At(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new At(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new At(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new At(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new At(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new At(e,5,!1,e.toLowerCase(),null,!1,!1)});var wg=/[\-:]([a-z])/g;function _g(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wg,_g);vt[t]=new At(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wg,_g);vt[t]=new At(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wg,_g);vt[t]=new At(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new At(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new At(e,1,!1,e.toLowerCase(),null,!0,!0)});function Sg(e,t,n,r){var o=vt.hasOwnProperty(t)?vt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fP(t,n,o,r)&&(n=null),r||o===null?uP(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kr=lP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),ck=Symbol.for("react.provider"),uk=Symbol.for("react.context"),Eg=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),Og=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),dk=Symbol.for("react.offscreen"),Nv=Symbol.iterator;function Ca(e){return e===null||typeof e!="object"?null:(e=Nv&&e[Nv]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Cf;function qa(e){if(Cf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cf=t&&t[1]||""}return`
`+Cf+e}var Tf=!1;function Rf(e,t){if(!e||Tf)return"";Tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{Tf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qa(e):""}function pP(e){switch(e.tag){case 5:return qa(e.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return e=Rf(e.type,!1),e;case 11:return e=Rf(e.type.render,!1),e;case 1:return e=Rf(e.type,!0),e;default:return""}}function ih(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pi:return"Fragment";case Ri:return"Portal";case nh:return"Profiler";case kg:return"StrictMode";case rh:return"Suspense";case oh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uk:return(e.displayName||"Context")+".Consumer";case ck:return(e._context.displayName||"Context")+".Provider";case Eg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Og:return t=e.displayName||null,t!==null?t:ih(e.type)||"Memo";case Fr:t=e._payload,e=e._init;try{return ih(e(t))}catch{}}return null}function hP(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(t);case 8:return t===kg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function po(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fk(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mP(e){var t=fk(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jl(e){e._valueTracker||(e._valueTracker=mP(e))}function pk(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fk(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ou(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ah(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $v(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=po(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hk(e,t){t=t.checked,t!=null&&Sg(e,"checked",t,!1)}function sh(e,t){hk(e,t);var n=po(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?lh(e,t.type,n):t.hasOwnProperty("defaultValue")&&lh(e,t.type,po(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function lh(e,t,n){(t!=="number"||ou(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xa=Array.isArray;function Ui(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+po(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ch(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Xa(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:po(n)}}function mk(e,t){var n=po(t.value),r=po(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gk(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gk(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ll,bk=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ll=Ll||document.createElement("div"),Ll.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ll.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gP=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(e){gP.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),us[t]=us[e]})});function vk(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||us.hasOwnProperty(e)&&us[e]?(""+t).trim():t+"px"}function yk(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vk(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bP=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(e,t){if(t){if(bP[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function fh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function Cg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hh=null,Wi=null,Vi=null;function Hv(e){if(e=ul(e)){if(typeof hh!="function")throw Error($(280));var t=e.stateNode;t&&(t=pd(t),hh(e.stateNode,e.type,t))}}function xk(e){Wi?Vi?Vi.push(e):Vi=[e]:Wi=e}function wk(){if(Wi){var e=Wi,t=Vi;if(Vi=Wi=null,Hv(e),t)for(e=0;e<t.length;e++)Hv(t[e])}}function _k(e,t){return e(t)}function Sk(){}var Pf=!1;function kk(e,t,n){if(Pf)return e(t,n);Pf=!0;try{return _k(e,t,n)}finally{Pf=!1,(Wi!==null||Vi!==null)&&(Sk(),wk())}}function Ps(e,t){var n=e.stateNode;if(n===null)return null;var r=pd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var mh=!1;if(vr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){mh=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{mh=!1}function vP(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var ds=!1,iu=null,au=!1,gh=null,yP={onError:function(e){ds=!0,iu=e}};function xP(e,t,n,r,o,i,a,s,l){ds=!1,iu=null,vP.apply(yP,arguments)}function wP(e,t,n,r,o,i,a,s,l){if(xP.apply(this,arguments),ds){if(ds){var c=iu;ds=!1,iu=null}else throw Error($(198));au||(au=!0,gh=c)}}function di(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ek(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uv(e){if(di(e)!==e)throw Error($(188))}function _P(e){var t=e.alternate;if(!t){if(t=di(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Uv(o),e;if(i===r)return Uv(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Ok(e){return e=_P(e),e!==null?Ck(e):null}function Ck(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ck(e);if(t!==null)return t;e=e.sibling}return null}var Tk=Jt.unstable_scheduleCallback,Wv=Jt.unstable_cancelCallback,SP=Jt.unstable_shouldYield,kP=Jt.unstable_requestPaint,tt=Jt.unstable_now,EP=Jt.unstable_getCurrentPriorityLevel,Tg=Jt.unstable_ImmediatePriority,Rk=Jt.unstable_UserBlockingPriority,su=Jt.unstable_NormalPriority,OP=Jt.unstable_LowPriority,Pk=Jt.unstable_IdlePriority,cd=null,Zn=null;function CP(e){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(cd,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:PP,TP=Math.log,RP=Math.LN2;function PP(e){return e>>>=0,e===0?32:31-(TP(e)/RP|0)|0}var Dl=64,Nl=4194304;function Ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Ka(s):(i&=a,i!==0&&(r=Ka(i)))}else a=n&~o,a!==0?r=Ka(a):i!==0&&(r=Ka(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pn(t),o=1<<n,r|=e[n],t&=~o;return r}function AP(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IP(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Pn(i),s=1<<a,l=o[a];l===-1?(!(s&n)||s&r)&&(o[a]=AP(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function bh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ak(){var e=Dl;return Dl<<=1,!(Dl&4194240)&&(Dl=64),e}function Af(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ll(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pn(t),e[t]=n}function MP(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Pn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Rg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ke=0;function Ik(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mk,Pg,jk,Lk,Dk,vh=!1,$l=[],Zr=null,eo=null,to=null,As=new Map,Is=new Map,Hr=[],jP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(e,t){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":As.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Is.delete(t.pointerId)}}function Ra(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ul(t),t!==null&&Pg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function LP(e,t,n,r,o){switch(t){case"focusin":return Zr=Ra(Zr,e,t,n,r,o),!0;case"dragenter":return eo=Ra(eo,e,t,n,r,o),!0;case"mouseover":return to=Ra(to,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return As.set(i,Ra(As.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Is.set(i,Ra(Is.get(i)||null,e,t,n,r,o)),!0}return!1}function Nk(e){var t=zo(e.target);if(t!==null){var n=di(t);if(n!==null){if(t=n.tag,t===13){if(t=Ek(n),t!==null){e.blockedOn=t,Dk(e.priority,function(){jk(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ic(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return t=ul(n),t!==null&&Pg(t),e.blockedOn=n,!1;t.shift()}return!0}function Yv(e,t,n){Ic(e)&&n.delete(t)}function DP(){vh=!1,Zr!==null&&Ic(Zr)&&(Zr=null),eo!==null&&Ic(eo)&&(eo=null),to!==null&&Ic(to)&&(to=null),As.forEach(Yv),Is.forEach(Yv)}function Pa(e,t){e.blockedOn===t&&(e.blockedOn=null,vh||(vh=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,DP)))}function Ms(e){function t(o){return Pa(o,e)}if(0<$l.length){Pa($l[0],e);for(var n=1;n<$l.length;n++){var r=$l[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zr!==null&&Pa(Zr,e),eo!==null&&Pa(eo,e),to!==null&&Pa(to,e),As.forEach(t),Is.forEach(t),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)Nk(n),n.blockedOn===null&&Hr.shift()}var Yi=kr.ReactCurrentBatchConfig,cu=!0;function NP(e,t,n,r){var o=ke,i=Yi.transition;Yi.transition=null;try{ke=1,Ag(e,t,n,r)}finally{ke=o,Yi.transition=i}}function $P(e,t,n,r){var o=ke,i=Yi.transition;Yi.transition=null;try{ke=4,Ag(e,t,n,r)}finally{ke=o,Yi.transition=i}}function Ag(e,t,n,r){if(cu){var o=yh(e,t,n,r);if(o===null)Bf(e,t,r,uu,n),Vv(e,r);else if(LP(o,e,t,n,r))r.stopPropagation();else if(Vv(e,r),t&4&&-1<jP.indexOf(e)){for(;o!==null;){var i=ul(o);if(i!==null&&Mk(i),i=yh(e,t,n,r),i===null&&Bf(e,t,r,uu,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Bf(e,t,r,null,n)}}var uu=null;function yh(e,t,n,r){if(uu=null,e=Cg(r),e=zo(e),e!==null)if(t=di(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ek(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uu=e,null}function $k(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(EP()){case Tg:return 1;case Rk:return 4;case su:case OP:return 16;case Pk:return 536870912;default:return 16}default:return 16}}var Vr=null,Ig=null,Mc=null;function Fk(){if(Mc)return Mc;var e,t=Ig,n=t.length,r,o="value"in Vr?Vr.value:Vr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Mc=o.slice(e,1<r?1-r:void 0)}function jc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fl(){return!0}function Gv(){return!1}function tn(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fl:Gv,this.isPropagationStopped=Gv,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mg=tn(ma),cl=Ye({},ma,{view:0,detail:0}),FP=tn(cl),If,Mf,Aa,ud=Ye({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Aa&&(Aa&&e.type==="mousemove"?(If=e.screenX-Aa.screenX,Mf=e.screenY-Aa.screenY):Mf=If=0,Aa=e),If)},movementY:function(e){return"movementY"in e?e.movementY:Mf}}),qv=tn(ud),zP=Ye({},ud,{dataTransfer:0}),BP=tn(zP),HP=Ye({},cl,{relatedTarget:0}),jf=tn(HP),UP=Ye({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),WP=tn(UP),VP=Ye({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),YP=tn(VP),GP=Ye({},ma,{data:0}),Xv=tn(GP),qP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=KP[e])?!!t[e]:!1}function jg(){return QP}var JP=Ye({},cl,{key:function(e){if(e.key){var t=qP[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?XP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jg,charCode:function(e){return e.type==="keypress"?jc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZP=tn(JP),eA=Ye({},ud,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=tn(eA),tA=Ye({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jg}),nA=tn(tA),rA=Ye({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),oA=tn(rA),iA=Ye({},ud,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aA=tn(iA),sA=[9,13,27,32],Lg=vr&&"CompositionEvent"in window,fs=null;vr&&"documentMode"in document&&(fs=document.documentMode);var lA=vr&&"TextEvent"in window&&!fs,zk=vr&&(!Lg||fs&&8<fs&&11>=fs),Qv=" ",Jv=!1;function Bk(e,t){switch(e){case"keyup":return sA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hk(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function cA(e,t){switch(e){case"compositionend":return Hk(t);case"keypress":return t.which!==32?null:(Jv=!0,Qv);case"textInput":return e=t.data,e===Qv&&Jv?null:e;default:return null}}function uA(e,t){if(Ai)return e==="compositionend"||!Lg&&Bk(e,t)?(e=Fk(),Mc=Ig=Vr=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zk&&t.locale!=="ko"?null:t.data;default:return null}}var dA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dA[e.type]:t==="textarea"}function Uk(e,t,n,r){xk(r),t=du(t,"onChange"),0<t.length&&(n=new Mg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ps=null,js=null;function fA(e){eE(e,0)}function dd(e){var t=ji(e);if(pk(t))return e}function pA(e,t){if(e==="change")return t}var Wk=!1;if(vr){var Lf;if(vr){var Df="oninput"in document;if(!Df){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),Df=typeof ey.oninput=="function"}Lf=Df}else Lf=!1;Wk=Lf&&(!document.documentMode||9<document.documentMode)}function ty(){ps&&(ps.detachEvent("onpropertychange",Vk),js=ps=null)}function Vk(e){if(e.propertyName==="value"&&dd(js)){var t=[];Uk(t,js,e,Cg(e)),kk(fA,t)}}function hA(e,t,n){e==="focusin"?(ty(),ps=t,js=n,ps.attachEvent("onpropertychange",Vk)):e==="focusout"&&ty()}function mA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dd(js)}function gA(e,t){if(e==="click")return dd(t)}function bA(e,t){if(e==="input"||e==="change")return dd(t)}function vA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:vA;function Ls(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!th.call(t,o)||!Ln(e[o],t[o]))return!1}return!0}function ny(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ry(e,t){var n=ny(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ny(n)}}function Yk(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yk(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gk(){for(var e=window,t=ou();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ou(e.document)}return t}function Dg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yA(e){var t=Gk(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yk(n.ownerDocument.documentElement,n)){if(r!==null&&Dg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ry(n,i);var a=ry(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xA=vr&&"documentMode"in document&&11>=document.documentMode,Ii=null,xh=null,hs=null,wh=!1;function oy(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||Ii==null||Ii!==ou(r)||(r=Ii,"selectionStart"in r&&Dg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&Ls(hs,r)||(hs=r,r=du(xh,"onSelect"),0<r.length&&(t=new Mg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ii)))}function zl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mi={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},Nf={},qk={};vr&&(qk=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function fd(e){if(Nf[e])return Nf[e];if(!Mi[e])return e;var t=Mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qk)return Nf[e]=t[n];return e}var Xk=fd("animationend"),Kk=fd("animationiteration"),Qk=fd("animationstart"),Jk=fd("transitionend"),Zk=new Map,iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vo(e,t){Zk.set(e,t),ui(t,[e])}for(var $f=0;$f<iy.length;$f++){var Ff=iy[$f],wA=Ff.toLowerCase(),_A=Ff[0].toUpperCase()+Ff.slice(1);vo(wA,"on"+_A)}vo(Xk,"onAnimationEnd");vo(Kk,"onAnimationIteration");vo(Qk,"onAnimationStart");vo("dblclick","onDoubleClick");vo("focusin","onFocus");vo("focusout","onBlur");vo(Jk,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function ay(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wP(r,t,void 0,e),e.currentTarget=null}function eE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;ay(o,s,c),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;ay(o,s,c),i=l}}}if(au)throw e=gh,au=!1,gh=null,e}function Ae(e,t){var n=t[Oh];n===void 0&&(n=t[Oh]=new Set);var r=e+"__bubble";n.has(r)||(tE(t,e,2,!1),n.add(r))}function zf(e,t,n){var r=0;t&&(r|=4),tE(n,e,r,t)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Ds(e){if(!e[Bl]){e[Bl]=!0,lk.forEach(function(n){n!=="selectionchange"&&(SA.has(n)||zf(n,!1,e),zf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bl]||(t[Bl]=!0,zf("selectionchange",!1,t))}}function tE(e,t,n,r){switch($k(t)){case 1:var o=NP;break;case 4:o=$P;break;default:o=Ag}n=o.bind(null,t,n,e),o=void 0,!mh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bf(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=zo(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}kk(function(){var c=i,u=Cg(n),f=[];e:{var p=Zk.get(e);if(p!==void 0){var m=Mg,h=e;switch(e){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":m=ZP;break;case"focusin":h="focus",m=jf;break;case"focusout":h="blur",m=jf;break;case"beforeblur":case"afterblur":m=jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=BP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=nA;break;case Xk:case Kk:case Qk:m=WP;break;case Jk:m=oA;break;case"scroll":m=FP;break;case"wheel":m=aA;break;case"copy":case"cut":case"paste":m=YP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kv}var b=(t&4)!==0,w=!b&&e==="scroll",v=b?p!==null?p+"Capture":null:p;b=[];for(var g=c,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,v!==null&&(_=Ps(g,v),_!=null&&b.push(Ns(g,_,y)))),w)break;g=g.return}0<b.length&&(p=new m(p,h,null,n,u),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==ph&&(h=n.relatedTarget||n.fromElement)&&(zo(h)||h[yr]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(h=n.relatedTarget||n.toElement,m=c,h=h?zo(h):null,h!==null&&(w=di(h),h!==w||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=c),m!==h)){if(b=qv,_="onMouseLeave",v="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Kv,_="onPointerLeave",v="onPointerEnter",g="pointer"),w=m==null?p:ji(m),y=h==null?p:ji(h),p=new b(_,g+"leave",m,n,u),p.target=w,p.relatedTarget=y,_=null,zo(u)===c&&(b=new b(v,g+"enter",h,n,u),b.target=y,b.relatedTarget=w,_=b),w=_,m&&h)t:{for(b=m,v=h,g=0,y=b;y;y=yi(y))g++;for(y=0,_=v;_;_=yi(_))y++;for(;0<g-y;)b=yi(b),g--;for(;0<y-g;)v=yi(v),y--;for(;g--;){if(b===v||v!==null&&b===v.alternate)break t;b=yi(b),v=yi(v)}b=null}else b=null;m!==null&&sy(f,p,m,b,!1),h!==null&&w!==null&&sy(f,w,h,b,!0)}}e:{if(p=c?ji(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=pA;else if(Zv(p))if(Wk)k=bA;else{k=mA;var S=hA}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=gA);if(k&&(k=k(e,c))){Uk(f,k,n,u);break e}S&&S(e,p,c),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&lh(p,"number",p.value)}switch(S=c?ji(c):window,e){case"focusin":(Zv(S)||S.contentEditable==="true")&&(Ii=S,xh=c,hs=null);break;case"focusout":hs=xh=Ii=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,oy(f,n,u);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":oy(f,n,u)}var E;if(Lg)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ai?Bk(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(zk&&n.locale!=="ko"&&(Ai||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ai&&(E=Fk()):(Vr=u,Ig="value"in Vr?Vr.value:Vr.textContent,Ai=!0)),S=du(c,C),0<S.length&&(C=new Xv(C,e,null,n,u),f.push({event:C,listeners:S}),E?C.data=E:(E=Hk(n),E!==null&&(C.data=E)))),(E=lA?cA(e,n):uA(e,n))&&(c=du(c,"onBeforeInput"),0<c.length&&(u=new Xv("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}eE(f,t)})}function Ns(e,t,n){return{instance:e,listener:t,currentTarget:n}}function du(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ps(e,n),i!=null&&r.unshift(Ns(e,i,o)),i=Ps(e,t),i!=null&&r.push(Ns(e,i,o))),e=e.return}return r}function yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sy(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,o?(l=Ps(n,i),l!=null&&a.unshift(Ns(n,l,s))):o||(l=Ps(n,i),l!=null&&a.push(Ns(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var kA=/\r\n?/g,EA=/\u0000|\uFFFD/g;function ly(e){return(typeof e=="string"?e:""+e).replace(kA,`
`).replace(EA,"")}function Hl(e,t,n){if(t=ly(t),ly(e)!==t&&n)throw Error($(425))}function fu(){}var _h=null,Sh=null;function kh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,OA=typeof clearTimeout=="function"?clearTimeout:void 0,cy=typeof Promise=="function"?Promise:void 0,CA=typeof queueMicrotask=="function"?queueMicrotask:typeof cy<"u"?function(e){return cy.resolve(null).then(e).catch(TA)}:Eh;function TA(e){setTimeout(function(){throw e})}function Hf(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ms(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ms(t)}function no(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Xn="__reactFiber$"+ga,$s="__reactProps$"+ga,yr="__reactContainer$"+ga,Oh="__reactEvents$"+ga,RA="__reactListeners$"+ga,PA="__reactHandles$"+ga;function zo(e){var t=e[Xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yr]||n[Xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uy(e);e!==null;){if(n=e[Xn])return n;e=uy(e)}return t}e=n,n=e.parentNode}return null}function ul(e){return e=e[Xn]||e[yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function pd(e){return e[$s]||null}var Ch=[],Li=-1;function yo(e){return{current:e}}function Me(e){0>Li||(e.current=Ch[Li],Ch[Li]=null,Li--)}function Re(e,t){Li++,Ch[Li]=e.current,e.current=t}var ho={},Et=yo(ho),Ft=yo(!1),Jo=ho;function Ji(e,t){var n=e.type.contextTypes;if(!n)return ho;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function zt(e){return e=e.childContextTypes,e!=null}function pu(){Me(Ft),Me(Et)}function dy(e,t,n){if(Et.current!==ho)throw Error($(168));Re(Et,t),Re(Ft,n)}function nE(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,hP(e)||"Unknown",o));return Ye({},n,r)}function hu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ho,Jo=Et.current,Re(Et,e),Re(Ft,Ft.current),!0}function fy(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=nE(e,t,Jo),r.__reactInternalMemoizedMergedChildContext=e,Me(Ft),Me(Et),Re(Et,e)):Me(Ft),Re(Ft,n)}var cr=null,hd=!1,Uf=!1;function rE(e){cr===null?cr=[e]:cr.push(e)}function AA(e){hd=!0,rE(e)}function xo(){if(!Uf&&cr!==null){Uf=!0;var e=0,t=ke;try{var n=cr;for(ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cr=null,hd=!1}catch(o){throw cr!==null&&(cr=cr.slice(e+1)),Tk(Tg,xo),o}finally{ke=t,Uf=!1}}return null}var Di=[],Ni=0,mu=null,gu=0,ln=[],cn=0,Zo=null,dr=1,fr="";function Io(e,t){Di[Ni++]=gu,Di[Ni++]=mu,mu=e,gu=t}function oE(e,t,n){ln[cn++]=dr,ln[cn++]=fr,ln[cn++]=Zo,Zo=e;var r=dr;e=fr;var o=32-Pn(r)-1;r&=~(1<<o),n+=1;var i=32-Pn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,dr=1<<32-Pn(t)+o|n<<o|r,fr=i+e}else dr=1<<i|n<<o|r,fr=e}function Ng(e){e.return!==null&&(Io(e,1),oE(e,1,0))}function $g(e){for(;e===mu;)mu=Di[--Ni],Di[Ni]=null,gu=Di[--Ni],Di[Ni]=null;for(;e===Zo;)Zo=ln[--cn],ln[cn]=null,fr=ln[--cn],ln[cn]=null,dr=ln[--cn],ln[cn]=null}var Qt=null,Xt=null,$e=!1,En=null;function iE(e,t){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function py(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Xt=no(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zo!==null?{id:dr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qt=e,Xt=null,!0):!1;default:return!1}}function Th(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rh(e){if($e){var t=Xt;if(t){var n=t;if(!py(e,t)){if(Th(e))throw Error($(418));t=no(n.nextSibling);var r=Qt;t&&py(e,t)?iE(r,n):(e.flags=e.flags&-4097|2,$e=!1,Qt=e)}}else{if(Th(e))throw Error($(418));e.flags=e.flags&-4097|2,$e=!1,Qt=e}}}function hy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function Ul(e){if(e!==Qt)return!1;if(!$e)return hy(e),$e=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kh(e.type,e.memoizedProps)),t&&(t=Xt)){if(Th(e))throw aE(),Error($(418));for(;t;)iE(e,t),t=no(t.nextSibling)}if(hy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xt=no(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xt=null}}else Xt=Qt?no(e.stateNode.nextSibling):null;return!0}function aE(){for(var e=Xt;e;)e=no(e.nextSibling)}function Zi(){Xt=Qt=null,$e=!1}function Fg(e){En===null?En=[e]:En.push(e)}var IA=kr.ReactCurrentBatchConfig;function Ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Wl(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function my(e){var t=e._init;return t(e._payload)}function sE(e){function t(v,g){if(e){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function n(v,g){if(!e)return null;for(;g!==null;)t(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function o(v,g){return v=ao(v,g),v.index=0,v.sibling=null,v}function i(v,g,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,g,y,_){return g===null||g.tag!==6?(g=Kf(y,v.mode,_),g.return=v,g):(g=o(g,y),g.return=v,g)}function l(v,g,y,_){var k=y.type;return k===Pi?u(v,g,y.props.children,_,y.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&my(k)===g.type)?(_=o(g,y.props),_.ref=Ia(v,g,y),_.return=v,_):(_=Bc(y.type,y.key,y.props,null,v.mode,_),_.ref=Ia(v,g,y),_.return=v,_)}function c(v,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Qf(y,v.mode,_),g.return=v,g):(g=o(g,y.children||[]),g.return=v,g)}function u(v,g,y,_,k){return g===null||g.tag!==7?(g=Vo(y,v.mode,_,k),g.return=v,g):(g=o(g,y),g.return=v,g)}function f(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Kf(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ml:return y=Bc(g.type,g.key,g.props,null,v.mode,y),y.ref=Ia(v,null,g),y.return=v,y;case Ri:return g=Qf(g,v.mode,y),g.return=v,g;case Fr:var _=g._init;return f(v,_(g._payload),y)}if(Xa(g)||Ca(g))return g=Vo(g,v.mode,y,null),g.return=v,g;Wl(v,g)}return null}function p(v,g,y,_){var k=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(v,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:return y.key===k?l(v,g,y,_):null;case Ri:return y.key===k?c(v,g,y,_):null;case Fr:return k=y._init,p(v,g,k(y._payload),_)}if(Xa(y)||Ca(y))return k!==null?null:u(v,g,y,_,null);Wl(v,y)}return null}function m(v,g,y,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(y)||null,s(g,v,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return v=v.get(_.key===null?y:_.key)||null,l(g,v,_,k);case Ri:return v=v.get(_.key===null?y:_.key)||null,c(g,v,_,k);case Fr:var S=_._init;return m(v,g,y,S(_._payload),k)}if(Xa(_)||Ca(_))return v=v.get(y)||null,u(g,v,_,k,null);Wl(g,_)}return null}function h(v,g,y,_){for(var k=null,S=null,E=g,C=g=0,A=null;E!==null&&C<y.length;C++){E.index>C?(A=E,E=null):A=E.sibling;var P=p(v,E,y[C],_);if(P===null){E===null&&(E=A);break}e&&E&&P.alternate===null&&t(v,E),g=i(P,g,C),S===null?k=P:S.sibling=P,S=P,E=A}if(C===y.length)return n(v,E),$e&&Io(v,C),k;if(E===null){for(;C<y.length;C++)E=f(v,y[C],_),E!==null&&(g=i(E,g,C),S===null?k=E:S.sibling=E,S=E);return $e&&Io(v,C),k}for(E=r(v,E);C<y.length;C++)A=m(E,v,C,y[C],_),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?C:A.key),g=i(A,g,C),S===null?k=A:S.sibling=A,S=A);return e&&E.forEach(function(L){return t(v,L)}),$e&&Io(v,C),k}function b(v,g,y,_){var k=Ca(y);if(typeof k!="function")throw Error($(150));if(y=k.call(y),y==null)throw Error($(151));for(var S=k=null,E=g,C=g=0,A=null,P=y.next();E!==null&&!P.done;C++,P=y.next()){E.index>C?(A=E,E=null):A=E.sibling;var L=p(v,E,P.value,_);if(L===null){E===null&&(E=A);break}e&&E&&L.alternate===null&&t(v,E),g=i(L,g,C),S===null?k=L:S.sibling=L,S=L,E=A}if(P.done)return n(v,E),$e&&Io(v,C),k;if(E===null){for(;!P.done;C++,P=y.next())P=f(v,P.value,_),P!==null&&(g=i(P,g,C),S===null?k=P:S.sibling=P,S=P);return $e&&Io(v,C),k}for(E=r(v,E);!P.done;C++,P=y.next())P=m(E,v,C,P.value,_),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?C:P.key),g=i(P,g,C),S===null?k=P:S.sibling=P,S=P);return e&&E.forEach(function(W){return t(v,W)}),$e&&Io(v,C),k}function w(v,g,y,_){if(typeof y=="object"&&y!==null&&y.type===Pi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:e:{for(var k=y.key,S=g;S!==null;){if(S.key===k){if(k=y.type,k===Pi){if(S.tag===7){n(v,S.sibling),g=o(S,y.props.children),g.return=v,v=g;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&my(k)===S.type){n(v,S.sibling),g=o(S,y.props),g.ref=Ia(v,S,y),g.return=v,v=g;break e}n(v,S);break}else t(v,S);S=S.sibling}y.type===Pi?(g=Vo(y.props.children,v.mode,_,y.key),g.return=v,v=g):(_=Bc(y.type,y.key,y.props,null,v.mode,_),_.ref=Ia(v,g,y),_.return=v,v=_)}return a(v);case Ri:e:{for(S=y.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(v,g.sibling),g=o(g,y.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else t(v,g);g=g.sibling}g=Qf(y,v.mode,_),g.return=v,v=g}return a(v);case Fr:return S=y._init,w(v,g,S(y._payload),_)}if(Xa(y))return h(v,g,y,_);if(Ca(y))return b(v,g,y,_);Wl(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(v,g.sibling),g=o(g,y),g.return=v,v=g):(n(v,g),g=Kf(y,v.mode,_),g.return=v,v=g),a(v)):n(v,g)}return w}var ea=sE(!0),lE=sE(!1),bu=yo(null),vu=null,$i=null,zg=null;function Bg(){zg=$i=vu=null}function Hg(e){var t=bu.current;Me(bu),e._currentValue=t}function Ph(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gi(e,t){vu=e,zg=$i=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(zg!==e)if(e={context:e,memoizedValue:t,next:null},$i===null){if(vu===null)throw Error($(308));$i=e,vu.dependencies={lanes:0,firstContext:e}}else $i=$i.next=e;return t}var Bo=null;function Ug(e){Bo===null?Bo=[e]:Bo.push(e)}function cE(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ug(t)):(n.next=o.next,o.next=n),t.interleaved=n,xr(e,r)}function xr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zr=!1;function Wg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uE(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xr(e,n)}return o=r.interleaved,o===null?(t.next=t,Ug(r)):(t.next=o.next,o.next=t),r.interleaved=t,xr(e,n)}function Lc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rg(e,n)}}function gy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yu(e,t,n,r){var o=e.updateQueue;zr=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;a=0,u=c=l=null,s=i;do{var p=s.lane,m=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,b=s;switch(p=t,m=n,b.tag){case 1:if(h=b.payload,typeof h=="function"){f=h.call(m,f,p);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=b.payload,p=typeof h=="function"?h.call(m,f,p):h,p==null)break e;f=Ye({},f,p);break e;case 2:zr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else m={eventTime:m,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(l=f),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ti|=a,e.lanes=a,e.memoizedState=f}}function by(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var dl={},er=yo(dl),Fs=yo(dl),zs=yo(dl);function Ho(e){if(e===dl)throw Error($(174));return e}function Vg(e,t){switch(Re(zs,t),Re(Fs,e),Re(er,dl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uh(t,e)}Me(er),Re(er,t)}function ta(){Me(er),Me(Fs),Me(zs)}function dE(e){Ho(zs.current);var t=Ho(er.current),n=uh(t,e.type);t!==n&&(Re(Fs,e),Re(er,n))}function Yg(e){Fs.current===e&&(Me(er),Me(Fs))}var Ue=yo(0);function xu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wf=[];function Gg(){for(var e=0;e<Wf.length;e++)Wf[e]._workInProgressVersionPrimary=null;Wf.length=0}var Dc=kr.ReactCurrentDispatcher,Vf=kr.ReactCurrentBatchConfig,ei=0,We=null,lt=null,dt=null,wu=!1,ms=!1,Bs=0,MA=0;function xt(){throw Error($(321))}function qg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function Xg(e,t,n,r,o,i){if(ei=i,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dc.current=e===null||e.memoizedState===null?NA:$A,e=n(r,o),ms){i=0;do{if(ms=!1,Bs=0,25<=i)throw Error($(301));i+=1,dt=lt=null,t.updateQueue=null,Dc.current=FA,e=n(r,o)}while(ms)}if(Dc.current=_u,t=lt!==null&&lt.next!==null,ei=0,dt=lt=We=null,wu=!1,t)throw Error($(300));return e}function Kg(){var e=Bs!==0;return Bs=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?We.memoizedState=dt=e:dt=dt.next=e,dt}function mn(){if(lt===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=dt===null?We.memoizedState:dt.next;if(t!==null)dt=t,lt=e;else{if(e===null)throw Error($(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?We.memoizedState=dt=e:dt=dt.next=e}return dt}function Hs(e,t){return typeof t=="function"?t(e):t}function Yf(e){var t=mn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=lt,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,c=i;do{var u=c.lane;if((ei&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,We.lanes|=u,ti|=u}c=c.next}while(c!==null&&c!==i);l===null?a=r:l.next=s,Ln(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,We.lanes|=i,ti|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gf(e){var t=mn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ln(i,t.memoizedState)||($t=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function fE(){}function pE(e,t){var n=We,r=mn(),o=t(),i=!Ln(r.memoizedState,o);if(i&&(r.memoizedState=o,$t=!0),r=r.queue,Qg(gE.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,Us(9,mE.bind(null,n,r,o,t),void 0,null),pt===null)throw Error($(349));ei&30||hE(n,t,o)}return o}function hE(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mE(e,t,n,r){t.value=n,t.getSnapshot=r,bE(t)&&vE(e)}function gE(e,t,n){return n(function(){bE(t)&&vE(e)})}function bE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function vE(e){var t=xr(e,1);t!==null&&An(t,e,1,-1)}function vy(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hs,lastRenderedState:e},t.queue=e,e=e.dispatch=DA.bind(null,We,e),[t.memoizedState,e]}function Us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yE(){return mn().memoizedState}function Nc(e,t,n,r){var o=Un();We.flags|=e,o.memoizedState=Us(1|t,n,void 0,r===void 0?null:r)}function md(e,t,n,r){var o=mn();r=r===void 0?null:r;var i=void 0;if(lt!==null){var a=lt.memoizedState;if(i=a.destroy,r!==null&&qg(r,a.deps)){o.memoizedState=Us(t,n,i,r);return}}We.flags|=e,o.memoizedState=Us(1|t,n,i,r)}function yy(e,t){return Nc(8390656,8,e,t)}function Qg(e,t){return md(2048,8,e,t)}function xE(e,t){return md(4,2,e,t)}function wE(e,t){return md(4,4,e,t)}function _E(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function SE(e,t,n){return n=n!=null?n.concat([e]):null,md(4,4,_E.bind(null,t,e),n)}function Jg(){}function kE(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function EE(e,t){var n=mn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function OE(e,t,n){return ei&21?(Ln(n,t)||(n=Ak(),We.lanes|=n,ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function jA(e,t){var n=ke;ke=n!==0&&4>n?n:4,e(!0);var r=Vf.transition;Vf.transition={};try{e(!1),t()}finally{ke=n,Vf.transition=r}}function CE(){return mn().memoizedState}function LA(e,t,n){var r=io(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},TE(e))RE(t,n);else if(n=cE(e,t,n,r),n!==null){var o=Rt();An(n,e,r,o),PE(n,t,r)}}function DA(e,t,n){var r=io(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(TE(e))RE(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Ln(s,a)){var l=t.interleaved;l===null?(o.next=o,Ug(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=cE(e,t,o,r),n!==null&&(o=Rt(),An(n,e,r,o),PE(n,t,r))}}function TE(e){var t=e.alternate;return e===We||t!==null&&t===We}function RE(e,t){ms=wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function PE(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Rg(e,n)}}var _u={readContext:hn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},NA={readContext:hn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:yy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nc(4194308,4,_E.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nc(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=LA.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:vy,useDebugValue:Jg,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=vy(!1),t=e[0];return e=jA.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=We,o=Un();if($e){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),pt===null)throw Error($(349));ei&30||hE(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yy(gE.bind(null,r,i,e),[e]),r.flags|=2048,Us(9,mE.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Un(),t=pt.identifierPrefix;if($e){var n=fr,r=dr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=MA++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$A={readContext:hn,useCallback:kE,useContext:hn,useEffect:Qg,useImperativeHandle:SE,useInsertionEffect:xE,useLayoutEffect:wE,useMemo:EE,useReducer:Yf,useRef:yE,useState:function(){return Yf(Hs)},useDebugValue:Jg,useDeferredValue:function(e){var t=mn();return OE(t,lt.memoizedState,e)},useTransition:function(){var e=Yf(Hs)[0],t=mn().memoizedState;return[e,t]},useMutableSource:fE,useSyncExternalStore:pE,useId:CE,unstable_isNewReconciler:!1},FA={readContext:hn,useCallback:kE,useContext:hn,useEffect:Qg,useImperativeHandle:SE,useInsertionEffect:xE,useLayoutEffect:wE,useMemo:EE,useReducer:Gf,useRef:yE,useState:function(){return Gf(Hs)},useDebugValue:Jg,useDeferredValue:function(e){var t=mn();return lt===null?t.memoizedState=e:OE(t,lt.memoizedState,e)},useTransition:function(){var e=Gf(Hs)[0],t=mn().memoizedState;return[e,t]},useMutableSource:fE,useSyncExternalStore:pE,useId:CE,unstable_isNewReconciler:!1};function Sn(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ah(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gd={isMounted:function(e){return(e=e._reactInternals)?di(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Rt(),o=io(e),i=gr(r,o);i.payload=t,n!=null&&(i.callback=n),t=ro(e,i,o),t!==null&&(An(t,e,o,r),Lc(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Rt(),o=io(e),i=gr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ro(e,i,o),t!==null&&(An(t,e,o,r),Lc(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),r=io(e),o=gr(n,r);o.tag=2,t!=null&&(o.callback=t),t=ro(e,o,r),t!==null&&(An(t,e,r,n),Lc(t,e,r))}};function xy(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Ls(n,r)||!Ls(o,i):!0}function AE(e,t,n){var r=!1,o=ho,i=t.contextType;return typeof i=="object"&&i!==null?i=hn(i):(o=zt(t)?Jo:Et.current,r=t.contextTypes,i=(r=r!=null)?Ji(e,o):ho),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function wy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gd.enqueueReplaceState(t,t.state,null)}function Ih(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wg(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=hn(i):(i=zt(t)?Jo:Et.current,o.context=Ji(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ah(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&gd.enqueueReplaceState(o,o.state,null),yu(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function na(e,t){try{var n="",r=t;do n+=pP(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function qf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Mh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zA=typeof WeakMap=="function"?WeakMap:Map;function IE(e,t,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ku||(ku=!0,Uh=r),Mh(e,t)},n}function ME(e,t,n){n=gr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Mh(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Mh(e,t),typeof r!="function"&&(oo===null?oo=new Set([this]):oo.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _y(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zA;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=eI.bind(null,e,t,n),t.then(e,e))}function Sy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ky(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gr(-1,1),t.tag=2,ro(n,t,1))),n.lanes|=1),e)}var BA=kr.ReactCurrentOwner,$t=!1;function Tt(e,t,n,r){t.child=e===null?lE(t,null,n,r):ea(t,e.child,n,r)}function Ey(e,t,n,r,o){n=n.render;var i=t.ref;return Gi(t,o),r=Xg(e,t,n,r,i,o),n=Kg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wr(e,t,o)):($e&&n&&Ng(t),t.flags|=1,Tt(e,t,r,o),t.child)}function Oy(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ab(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jE(e,t,i,r,o)):(e=Bc(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(a,r)&&e.ref===t.ref)return wr(e,t,o)}return t.flags|=1,e=ao(i,r),e.ref=t.ref,e.return=t,t.child=e}function jE(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ls(i,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,wr(e,t,o)}return jh(e,t,n,r,o)}function LE(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(zi,Gt),Gt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(zi,Gt),Gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Re(zi,Gt),Gt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Re(zi,Gt),Gt|=r;return Tt(e,t,o,n),t.child}function DE(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jh(e,t,n,r,o){var i=zt(n)?Jo:Et.current;return i=Ji(t,i),Gi(t,o),n=Xg(e,t,n,r,i,o),r=Kg(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wr(e,t,o)):($e&&r&&Ng(t),t.flags|=1,Tt(e,t,n,o),t.child)}function Cy(e,t,n,r,o){if(zt(n)){var i=!0;hu(t)}else i=!1;if(Gi(t,o),t.stateNode===null)$c(e,t),AE(t,n,r),Ih(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=hn(c):(c=zt(n)?Jo:Et.current,c=Ji(t,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&wy(t,a,r,c),zr=!1;var p=t.memoizedState;a.state=p,yu(t,r,a,o),l=t.memoizedState,s!==r||p!==l||Ft.current||zr?(typeof u=="function"&&(Ah(t,n,u,r),l=t.memoizedState),(s=zr||xy(t,n,s,r,p,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,uE(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Sn(t.type,s),a.props=c,f=t.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=hn(l):(l=zt(n)?Jo:Et.current,l=Ji(t,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||p!==l)&&wy(t,a,r,l),zr=!1,p=t.memoizedState,a.state=p,yu(t,r,a,o);var h=t.memoizedState;s!==f||p!==h||Ft.current||zr?(typeof m=="function"&&(Ah(t,n,m,r),h=t.memoizedState),(c=zr||xy(t,n,c,r,p,h,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Lh(e,t,n,r,i,o)}function Lh(e,t,n,r,o,i){DE(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&fy(t,n,!1),wr(e,t,i);r=t.stateNode,BA.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ea(t,e.child,null,i),t.child=ea(t,null,s,i)):Tt(e,t,s,i),t.memoizedState=r.state,o&&fy(t,n,!0),t.child}function NE(e){var t=e.stateNode;t.pendingContext?dy(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dy(e,t.context,!1),Vg(e,t.containerInfo)}function Ty(e,t,n,r,o){return Zi(),Fg(o),t.flags|=256,Tt(e,t,n,r),t.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Nh(e){return{baseLanes:e,cachePool:null,transitions:null}}function $E(e,t,n){var r=t.pendingProps,o=Ue.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Re(Ue,o&1),e===null)return Rh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=yd(a,r,0,null),e=Vo(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Nh(n),t.memoizedState=Dh,e):Zg(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return HA(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ao(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ao(s,i):(i=Vo(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Nh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Dh,r}return i=e.child,e=i.sibling,r=ao(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zg(e,t){return t=yd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vl(e,t,n,r){return r!==null&&Fg(r),ea(t,e.child,null,n),e=Zg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function HA(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=qf(Error($(422))),Vl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=yd({mode:"visible",children:r.children},o,0,null),i=Vo(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ea(t,e.child,null,a),t.child.memoizedState=Nh(a),t.memoizedState=Dh,i);if(!(t.mode&1))return Vl(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=qf(i,r,void 0),Vl(e,t,a,r)}if(s=(a&e.childLanes)!==0,$t||s){if(r=pt,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xr(e,o),An(r,e,o,-1))}return ib(),r=qf(Error($(421))),Vl(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tI.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xt=no(o.nextSibling),Qt=t,$e=!0,En=null,e!==null&&(ln[cn++]=dr,ln[cn++]=fr,ln[cn++]=Zo,dr=e.id,fr=e.overflow,Zo=t),t=Zg(t,r.children),t.flags|=4096,t)}function Ry(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ph(e.return,t,n)}function Xf(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function FE(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Tt(e,t,r.children,n),r=Ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ry(e,n,t);else if(e.tag===19)Ry(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(Ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xu(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xf(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xu(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xf(t,!0,n,null,i);break;case"together":Xf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $c(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ao(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ao(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function UA(e,t,n){switch(t.tag){case 3:NE(t),Zi();break;case 5:dE(t);break;case 1:zt(t.type)&&hu(t);break;case 4:Vg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Re(bu,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ue,Ue.current&1),t.flags|=128,null):n&t.child.childLanes?$E(e,t,n):(Re(Ue,Ue.current&1),e=wr(e,t,n),e!==null?e.sibling:null);Re(Ue,Ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return FE(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Re(Ue,Ue.current),r)break;return null;case 22:case 23:return t.lanes=0,LE(e,t,n)}return wr(e,t,n)}var zE,$h,BE,HE;zE=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$h=function(){};BE=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ho(er.current);var i=null;switch(n){case"input":o=ah(e,o),r=ah(e,r),i=[];break;case"select":o=Ye({},o,{value:void 0}),r=Ye({},r,{value:void 0}),i=[];break;case"textarea":o=ch(e,o),r=ch(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fu)}dh(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ts.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ae("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};HE=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ma(e,t){if(!$e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function WA(e,t,n){var r=t.pendingProps;switch($g(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return zt(t.type)&&pu(),wt(t),null;case 3:return r=t.stateNode,ta(),Me(Ft),Me(Et),Gg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ul(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,En!==null&&(Yh(En),En=null))),$h(e,t),wt(t),null;case 5:Yg(t);var o=Ho(zs.current);if(n=t.type,e!==null&&t.stateNode!=null)BE(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return wt(t),null}if(e=Ho(er.current),Ul(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Xn]=t,r[$s]=i,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(o=0;o<Qa.length;o++)Ae(Qa[o],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":$v(r,i),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ae("invalid",r);break;case"textarea":zv(r,i),Ae("invalid",r)}dh(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hl(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hl(r.textContent,s,e),o=["children",""+s]):Ts.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ae("scroll",r)}switch(n){case"input":jl(r),Fv(r,i,!0);break;case"textarea":jl(r),Bv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gk(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xn]=t,e[$s]=r,zE(e,t,!1,!1),t.stateNode=e;e:{switch(a=fh(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),o=r;break;case"iframe":case"object":case"embed":Ae("load",e),o=r;break;case"video":case"audio":for(o=0;o<Qa.length;o++)Ae(Qa[o],e);o=r;break;case"source":Ae("error",e),o=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),o=r;break;case"details":Ae("toggle",e),o=r;break;case"input":$v(e,r),o=ah(e,r),Ae("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ye({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":zv(e,r),o=ch(e,r),Ae("invalid",e);break;default:o=r}dh(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?yk(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bk(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rs(e,l):typeof l=="number"&&Rs(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ts.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ae("scroll",e):l!=null&&Sg(e,i,l,a))}switch(n){case"input":jl(e),Fv(e,r,!1);break;case"textarea":jl(e),Bv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+po(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ui(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ui(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)HE(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=Ho(zs.current),Ho(er.current),Ul(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xn]=t,(i=r.nodeValue!==n)&&(e=Qt,e!==null))switch(e.tag){case 3:Hl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=t,t.stateNode=r}return wt(t),null;case 13:if(Me(Ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($e&&Xt!==null&&t.mode&1&&!(t.flags&128))aE(),Zi(),t.flags|=98560,i=!1;else if(i=Ul(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[Xn]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),i=!1}else En!==null&&(Yh(En),En=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?ct===0&&(ct=3):ib())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return ta(),$h(e,t),e===null&&Ds(t.stateNode.containerInfo),wt(t),null;case 10:return Hg(t.type._context),wt(t),null;case 17:return zt(t.type)&&pu(),wt(t),null;case 19:if(Me(Ue),i=t.memoizedState,i===null)return wt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ma(i,!1);else{if(ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=xu(e),a!==null){for(t.flags|=128,Ma(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Ue,Ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&tt()>ra&&(t.flags|=128,r=!0,Ma(i,!1),t.lanes=4194304)}else{if(!r)if(e=xu(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ma(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!$e)return wt(t),null}else 2*tt()-i.renderingStartTime>ra&&n!==1073741824&&(t.flags|=128,r=!0,Ma(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=tt(),t.sibling=null,n=Ue.current,Re(Ue,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return ob(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Gt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function VA(e,t){switch($g(t),t.tag){case 1:return zt(t.type)&&pu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(),Me(Ft),Me(Et),Gg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Yg(t),null;case 13:if(Me(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Me(Ue),null;case 4:return ta(),null;case 10:return Hg(t.type._context),null;case 22:case 23:return ob(),null;case 24:return null;default:return null}}var Yl=!1,St=!1,YA=typeof WeakSet=="function"?WeakSet:Set,G=null;function Fi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function Fh(e,t,n){try{n()}catch(r){Xe(e,t,r)}}var Py=!1;function GA(e,t){if(_h=cu,e=Gk(),Dg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,u=0,f=e,p=null;t:for(;;){for(var m;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++c===o&&(s=a),p===i&&++u===r&&(l=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:e,selectionRange:n},cu=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var b=h.memoizedProps,w=h.memoizedState,v=t.stateNode,g=v.getSnapshotBeforeUpdate(t.elementType===t.type?b:Sn(t.type,b),w);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(_){Xe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return h=Py,Py=!1,h}function gs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fh(t,n,i)}o=o.next}while(o!==r)}}function bd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function UE(e){var t=e.alternate;t!==null&&(e.alternate=null,UE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xn],delete t[$s],delete t[Oh],delete t[RA],delete t[PA])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function WE(e){return e.tag===5||e.tag===3||e.tag===4}function Ay(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||WE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fu));else if(r!==4&&(e=e.child,e!==null))for(Bh(e,t,n),e=e.sibling;e!==null;)Bh(e,t,n),e=e.sibling}function Hh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hh(e,t,n),e=e.sibling;e!==null;)Hh(e,t,n),e=e.sibling}var mt=null,kn=!1;function Mr(e,t,n){for(n=n.child;n!==null;)VE(e,t,n),n=n.sibling}function VE(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(cd,n)}catch{}switch(n.tag){case 5:St||Fi(n,t);case 6:var r=mt,o=kn;mt=null,Mr(e,t,n),mt=r,kn=o,mt!==null&&(kn?(e=mt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(kn?(e=mt,n=n.stateNode,e.nodeType===8?Hf(e.parentNode,n):e.nodeType===1&&Hf(e,n),Ms(e)):Hf(mt,n.stateNode));break;case 4:r=mt,o=kn,mt=n.stateNode.containerInfo,kn=!0,Mr(e,t,n),mt=r,kn=o;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Fh(n,t,a),o=o.next}while(o!==r)}Mr(e,t,n);break;case 1:if(!St&&(Fi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Xe(n,t,s)}Mr(e,t,n);break;case 21:Mr(e,t,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Mr(e,t,n),St=r):Mr(e,t,n);break;default:Mr(e,t,n)}}function Iy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new YA),t.forEach(function(r){var o=nI.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function wn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:mt=s.stateNode,kn=!1;break e;case 3:mt=s.stateNode.containerInfo,kn=!0;break e;case 4:mt=s.stateNode.containerInfo,kn=!0;break e}s=s.return}if(mt===null)throw Error($(160));VE(i,a,o),mt=null,kn=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){Xe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)YE(t,e),t=t.sibling}function YE(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(t,e),Fn(e),r&4){try{gs(3,e,e.return),bd(3,e)}catch(b){Xe(e,e.return,b)}try{gs(5,e,e.return)}catch(b){Xe(e,e.return,b)}}break;case 1:wn(t,e),Fn(e),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(wn(t,e),Fn(e),r&512&&n!==null&&Fi(n,n.return),e.flags&32){var o=e.stateNode;try{Rs(o,"")}catch(b){Xe(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&hk(o,i),fh(s,a);var c=fh(s,i);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?yk(o,f):u==="dangerouslySetInnerHTML"?bk(o,f):u==="children"?Rs(o,f):Sg(o,u,f,c)}switch(s){case"input":sh(o,i);break;case"textarea":mk(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Ui(o,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ui(o,!!i.multiple,i.defaultValue,!0):Ui(o,!!i.multiple,i.multiple?[]:"",!1))}o[$s]=i}catch(b){Xe(e,e.return,b)}}break;case 6:if(wn(t,e),Fn(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){Xe(e,e.return,b)}}break;case 3:if(wn(t,e),Fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ms(t.containerInfo)}catch(b){Xe(e,e.return,b)}break;case 4:wn(t,e),Fn(e);break;case 13:wn(t,e),Fn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nb=tt())),r&4&&Iy(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(St=(c=St)||u,wn(t,e),St=c):wn(t,e),Fn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(G=e,u=e.child;u!==null;){for(f=G=u;G!==null;){switch(p=G,m=p.child,p.tag){case 0:case 11:case 14:case 15:gs(4,p,p.return);break;case 1:Fi(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(b){Xe(r,n,b)}}break;case 5:Fi(p,p.return);break;case 22:if(p.memoizedState!==null){jy(f);continue}}m!==null?(m.return=p,G=m):jy(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=vk("display",a))}catch(b){Xe(e,e.return,b)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){Xe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wn(t,e),Fn(e),r&4&&Iy(e);break;case 21:break;default:wn(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(WE(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Rs(o,""),r.flags&=-33);var i=Ay(e);Hh(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ay(e);Bh(e,s,a);break;default:throw Error($(161))}}catch(l){Xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qA(e,t,n){G=e,GE(e)}function GE(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var o=G,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Yl;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||St;s=Yl;var c=St;if(Yl=a,(St=l)&&!c)for(G=o;G!==null;)a=G,l=a.child,a.tag===22&&a.memoizedState!==null?Ly(o):l!==null?(l.return=a,G=l):Ly(o);for(;i!==null;)G=i,GE(i),i=i.sibling;G=o,Yl=s,St=c}My(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,G=i):My(e)}}function My(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||bd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!St)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Sn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&by(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}by(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ms(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}St||t.flags&512&&zh(t)}catch(p){Xe(t,t.return,p)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function jy(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Ly(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bd(4,t)}catch(l){Xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Xe(t,o,l)}}var i=t.return;try{zh(t)}catch(l){Xe(t,i,l)}break;case 5:var a=t.return;try{zh(t)}catch(l){Xe(t,a,l)}}}catch(l){Xe(t,t.return,l)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var XA=Math.ceil,Su=kr.ReactCurrentDispatcher,eb=kr.ReactCurrentOwner,fn=kr.ReactCurrentBatchConfig,ye=0,pt=null,ot=null,bt=0,Gt=0,zi=yo(0),ct=0,Ws=null,ti=0,vd=0,tb=0,bs=null,Lt=null,nb=0,ra=1/0,lr=null,ku=!1,Uh=null,oo=null,Gl=!1,Yr=null,Eu=0,vs=0,Wh=null,Fc=-1,zc=0;function Rt(){return ye&6?tt():Fc!==-1?Fc:Fc=tt()}function io(e){return e.mode&1?ye&2&&bt!==0?bt&-bt:IA.transition!==null?(zc===0&&(zc=Ak()),zc):(e=ke,e!==0||(e=window.event,e=e===void 0?16:$k(e.type)),e):1}function An(e,t,n,r){if(50<vs)throw vs=0,Wh=null,Error($(185));ll(e,n,r),(!(ye&2)||e!==pt)&&(e===pt&&(!(ye&2)&&(vd|=n),ct===4&&Ur(e,bt)),Bt(e,r),n===1&&ye===0&&!(t.mode&1)&&(ra=tt()+500,hd&&xo()))}function Bt(e,t){var n=e.callbackNode;IP(e,t);var r=lu(e,e===pt?bt:0);if(r===0)n!==null&&Wv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wv(n),t===1)e.tag===0?AA(Dy.bind(null,e)):rE(Dy.bind(null,e)),CA(function(){!(ye&6)&&xo()}),n=null;else{switch(Ik(r)){case 1:n=Tg;break;case 4:n=Rk;break;case 16:n=su;break;case 536870912:n=Pk;break;default:n=su}n=tO(n,qE.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qE(e,t){if(Fc=-1,zc=0,ye&6)throw Error($(327));var n=e.callbackNode;if(qi()&&e.callbackNode!==n)return null;var r=lu(e,e===pt?bt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ou(e,r);else{t=r;var o=ye;ye|=2;var i=KE();(pt!==e||bt!==t)&&(lr=null,ra=tt()+500,Wo(e,t));do try{JA();break}catch(s){XE(e,s)}while(!0);Bg(),Su.current=i,ye=o,ot!==null?t=0:(pt=null,bt=0,t=ct)}if(t!==0){if(t===2&&(o=bh(e),o!==0&&(r=o,t=Vh(e,o))),t===1)throw n=Ws,Wo(e,0),Ur(e,r),Bt(e,tt()),n;if(t===6)Ur(e,r);else{if(o=e.current.alternate,!(r&30)&&!KA(o)&&(t=Ou(e,r),t===2&&(i=bh(e),i!==0&&(r=i,t=Vh(e,i))),t===1))throw n=Ws,Wo(e,0),Ur(e,r),Bt(e,tt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:Mo(e,Lt,lr);break;case 3:if(Ur(e,r),(r&130023424)===r&&(t=nb+500-tt(),10<t)){if(lu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Rt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Eh(Mo.bind(null,e,Lt,lr),t);break}Mo(e,Lt,lr);break;case 4:if(Ur(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Pn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=tt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XA(r/1960))-r,10<r){e.timeoutHandle=Eh(Mo.bind(null,e,Lt,lr),r);break}Mo(e,Lt,lr);break;case 5:Mo(e,Lt,lr);break;default:throw Error($(329))}}}return Bt(e,tt()),e.callbackNode===n?qE.bind(null,e):null}function Vh(e,t){var n=bs;return e.current.memoizedState.isDehydrated&&(Wo(e,t).flags|=256),e=Ou(e,t),e!==2&&(t=Lt,Lt=n,t!==null&&Yh(t)),e}function Yh(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function KA(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ln(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ur(e,t){for(t&=~tb,t&=~vd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pn(t),r=1<<n;e[n]=-1,t&=~r}}function Dy(e){if(ye&6)throw Error($(327));qi();var t=lu(e,0);if(!(t&1))return Bt(e,tt()),null;var n=Ou(e,t);if(e.tag!==0&&n===2){var r=bh(e);r!==0&&(t=r,n=Vh(e,r))}if(n===1)throw n=Ws,Wo(e,0),Ur(e,t),Bt(e,tt()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mo(e,Lt,lr),Bt(e,tt()),null}function rb(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(ra=tt()+500,hd&&xo())}}function ni(e){Yr!==null&&Yr.tag===0&&!(ye&6)&&qi();var t=ye;ye|=1;var n=fn.transition,r=ke;try{if(fn.transition=null,ke=1,e)return e()}finally{ke=r,fn.transition=n,ye=t,!(ye&6)&&xo()}}function ob(){Gt=zi.current,Me(zi)}function Wo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,OA(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch($g(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:ta(),Me(Ft),Me(Et),Gg();break;case 5:Yg(r);break;case 4:ta();break;case 13:Me(Ue);break;case 19:Me(Ue);break;case 10:Hg(r.type._context);break;case 22:case 23:ob()}n=n.return}if(pt=e,ot=e=ao(e.current,null),bt=Gt=t,ct=0,Ws=null,tb=vd=ti=0,Lt=bs=null,Bo!==null){for(t=0;t<Bo.length;t++)if(n=Bo[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Bo=null}return e}function XE(e,t){do{var n=ot;try{if(Bg(),Dc.current=_u,wu){for(var r=We.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wu=!1}if(ei=0,dt=lt=We=null,ms=!1,Bs=0,eb.current=null,n===null||n.return===null){ct=1,Ws=t,ot=null;break}e:{var i=e,a=n.return,s=n,l=t;if(t=bt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Sy(a);if(m!==null){m.flags&=-257,ky(m,a,s,i,t),m.mode&1&&_y(i,c,t),t=m,l=c;var h=t.updateQueue;if(h===null){var b=new Set;b.add(l),t.updateQueue=b}else h.add(l);break e}else{if(!(t&1)){_y(i,c,t),ib();break e}l=Error($(426))}}else if($e&&s.mode&1){var w=Sy(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ky(w,a,s,i,t),Fg(na(l,s));break e}}i=l=na(l,s),ct!==4&&(ct=2),bs===null?bs=[i]:bs.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=IE(i,l,t);gy(i,v);break e;case 1:s=l;var g=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(oo===null||!oo.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=ME(i,s,t);gy(i,_);break e}}i=i.return}while(i!==null)}JE(n)}catch(k){t=k,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function KE(){var e=Su.current;return Su.current=_u,e===null?_u:e}function ib(){(ct===0||ct===3||ct===2)&&(ct=4),pt===null||!(ti&268435455)&&!(vd&268435455)||Ur(pt,bt)}function Ou(e,t){var n=ye;ye|=2;var r=KE();(pt!==e||bt!==t)&&(lr=null,Wo(e,t));do try{QA();break}catch(o){XE(e,o)}while(!0);if(Bg(),ye=n,Su.current=r,ot!==null)throw Error($(261));return pt=null,bt=0,ct}function QA(){for(;ot!==null;)QE(ot)}function JA(){for(;ot!==null&&!SP();)QE(ot)}function QE(e){var t=eO(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,t===null?JE(e):ot=t,eb.current=null}function JE(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=VA(n,t),n!==null){n.flags&=32767,ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ct=6,ot=null;return}}else if(n=WA(n,t,Gt),n!==null){ot=n;return}if(t=t.sibling,t!==null){ot=t;return}ot=t=e}while(t!==null);ct===0&&(ct=5)}function Mo(e,t,n){var r=ke,o=fn.transition;try{fn.transition=null,ke=1,ZA(e,t,n,r)}finally{fn.transition=o,ke=r}return null}function ZA(e,t,n,r){do qi();while(Yr!==null);if(ye&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(MP(e,i),e===pt&&(ot=pt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gl||(Gl=!0,tO(su,function(){return qi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=fn.transition,fn.transition=null;var a=ke;ke=1;var s=ye;ye|=4,eb.current=null,GA(e,n),YE(n,e),yA(Sh),cu=!!_h,Sh=_h=null,e.current=n,qA(n),kP(),ye=s,ke=a,fn.transition=i}else e.current=n;if(Gl&&(Gl=!1,Yr=e,Eu=o),i=e.pendingLanes,i===0&&(oo=null),CP(n.stateNode),Bt(e,tt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ku)throw ku=!1,e=Uh,Uh=null,e;return Eu&1&&e.tag!==0&&qi(),i=e.pendingLanes,i&1?e===Wh?vs++:(vs=0,Wh=e):vs=0,xo(),null}function qi(){if(Yr!==null){var e=Ik(Eu),t=fn.transition,n=ke;try{if(fn.transition=null,ke=16>e?16:e,Yr===null)var r=!1;else{if(e=Yr,Yr=null,Eu=0,ye&6)throw Error($(331));var o=ye;for(ye|=4,G=e.current;G!==null;){var i=G,a=i.child;if(G.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(G=c;G!==null;){var u=G;switch(u.tag){case 0:case 11:case 15:gs(8,u,i)}var f=u.child;if(f!==null)f.return=u,G=f;else for(;G!==null;){u=G;var p=u.sibling,m=u.return;if(UE(u),u===c){G=null;break}if(p!==null){p.return=m,G=p;break}G=m}}}var h=i.alternate;if(h!==null){var b=h.child;if(b!==null){h.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}G=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,G=a;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,G=v;break e}G=i.return}}var g=e.current;for(G=g;G!==null;){a=G;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,G=y;else e:for(a=g;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:bd(9,s)}}catch(k){Xe(s,s.return,k)}if(s===a){G=null;break e}var _=s.sibling;if(_!==null){_.return=s.return,G=_;break e}G=s.return}}if(ye=o,xo(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(cd,e)}catch{}r=!0}return r}finally{ke=n,fn.transition=t}}return!1}function Ny(e,t,n){t=na(n,t),t=IE(e,t,1),e=ro(e,t,1),t=Rt(),e!==null&&(ll(e,1,t),Bt(e,t))}function Xe(e,t,n){if(e.tag===3)Ny(e,e,n);else for(;t!==null;){if(t.tag===3){Ny(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oo===null||!oo.has(r))){e=na(n,e),e=ME(t,e,1),t=ro(t,e,1),e=Rt(),t!==null&&(ll(t,1,e),Bt(t,e));break}}t=t.return}}function eI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Rt(),e.pingedLanes|=e.suspendedLanes&n,pt===e&&(bt&n)===n&&(ct===4||ct===3&&(bt&130023424)===bt&&500>tt()-nb?Wo(e,0):tb|=n),Bt(e,t)}function ZE(e,t){t===0&&(e.mode&1?(t=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):t=1);var n=Rt();e=xr(e,t),e!==null&&(ll(e,t,n),Bt(e,n))}function tI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ZE(e,n)}function nI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),ZE(e,n)}var eO;eO=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,UA(e,t,n);$t=!!(e.flags&131072)}else $t=!1,$e&&t.flags&1048576&&oE(t,gu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$c(e,t),e=t.pendingProps;var o=Ji(t,Et.current);Gi(t,n),o=Xg(null,t,r,e,o,n);var i=Kg();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(i=!0,hu(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wg(t),o.updater=gd,t.stateNode=o,o._reactInternals=t,Ih(t,r,e,n),t=Lh(null,t,r,!0,i,n)):(t.tag=0,$e&&i&&Ng(t),Tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($c(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=oI(r),e=Sn(r,e),o){case 0:t=jh(null,t,r,e,n);break e;case 1:t=Cy(null,t,r,e,n);break e;case 11:t=Ey(null,t,r,e,n);break e;case 14:t=Oy(null,t,r,Sn(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sn(r,o),jh(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sn(r,o),Cy(e,t,r,o,n);case 3:e:{if(NE(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,uE(e,t),yu(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=na(Error($(423)),t),t=Ty(e,t,r,n,o);break e}else if(r!==o){o=na(Error($(424)),t),t=Ty(e,t,r,n,o);break e}else for(Xt=no(t.stateNode.containerInfo.firstChild),Qt=t,$e=!0,En=null,n=lE(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===o){t=wr(e,t,n);break e}Tt(e,t,r,n)}t=t.child}return t;case 5:return dE(t),e===null&&Rh(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,kh(r,o)?a=null:i!==null&&kh(r,i)&&(t.flags|=32),DE(e,t),Tt(e,t,a,n),t.child;case 6:return e===null&&Rh(t),null;case 13:return $E(e,t,n);case 4:return Vg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ea(t,null,r,n):Tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sn(r,o),Ey(e,t,r,o,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Re(bu,r._currentValue),r._currentValue=a,i!==null)if(Ln(i.value,a)){if(i.children===o.children&&!Ft.current){t=wr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=gr(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ph(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error($(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ph(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Gi(t,n),o=hn(o),r=r(o),t.flags|=1,Tt(e,t,r,n),t.child;case 14:return r=t.type,o=Sn(r,t.pendingProps),o=Sn(r.type,o),Oy(e,t,r,o,n);case 15:return jE(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Sn(r,o),$c(e,t),t.tag=1,zt(r)?(e=!0,hu(t)):e=!1,Gi(t,n),AE(t,r,o),Ih(t,r,o,n),Lh(null,t,r,!0,e,n);case 19:return FE(e,t,n);case 22:return LE(e,t,n)}throw Error($(156,t.tag))};function tO(e,t){return Tk(e,t)}function rI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,t,n,r){return new rI(e,t,n,r)}function ab(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oI(e){if(typeof e=="function")return ab(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eg)return 11;if(e===Og)return 14}return 2}function ao(e,t){var n=e.alternate;return n===null?(n=un(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bc(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")ab(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Pi:return Vo(n.children,o,i,t);case kg:a=8,o|=8;break;case nh:return e=un(12,n,t,o|2),e.elementType=nh,e.lanes=i,e;case rh:return e=un(13,n,t,o),e.elementType=rh,e.lanes=i,e;case oh:return e=un(19,n,t,o),e.elementType=oh,e.lanes=i,e;case dk:return yd(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ck:a=10;break e;case uk:a=9;break e;case Eg:a=11;break e;case Og:a=14;break e;case Fr:a=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=un(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Vo(e,t,n,r){return e=un(7,e,r,t),e.lanes=n,e}function yd(e,t,n,r){return e=un(22,e,r,t),e.elementType=dk,e.lanes=n,e.stateNode={isHidden:!1},e}function Kf(e,t,n){return e=un(6,e,null,t),e.lanes=n,e}function Qf(e,t,n){return t=un(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iI(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Af(0),this.expirationTimes=Af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sb(e,t,n,r,o,i,a,s,l){return e=new iI(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=un(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wg(i),e}function aI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nO(e){if(!e)return ho;e=e._reactInternals;e:{if(di(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(zt(n))return nE(e,n,t)}return t}function rO(e,t,n,r,o,i,a,s,l){return e=sb(n,r,!0,e,o,i,a,s,l),e.context=nO(null),n=e.current,r=Rt(),o=io(n),i=gr(r,o),i.callback=t??null,ro(n,i,o),e.current.lanes=o,ll(e,o,r),Bt(e,r),e}function xd(e,t,n,r){var o=t.current,i=Rt(),a=io(o);return n=nO(n),t.context===null?t.context=n:t.pendingContext=n,t=gr(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ro(o,t,a),e!==null&&(An(e,o,a,i),Lc(e,o,a)),a}function Cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $y(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lb(e,t){$y(e,t),(e=e.alternate)&&$y(e,t)}function sI(){return null}var oO=typeof reportError=="function"?reportError:function(e){console.error(e)};function cb(e){this._internalRoot=e}wd.prototype.render=cb.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));xd(e,t,null,null)};wd.prototype.unmount=cb.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ni(function(){xd(null,e,null,null)}),t[yr]=null}};function wd(e){this._internalRoot=e}wd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lk();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hr.length&&t!==0&&t<Hr[n].priority;n++);Hr.splice(n,0,e),n===0&&Nk(e)}};function ub(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fy(){}function lI(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Cu(a);i.call(c)}}var a=rO(t,r,e,0,null,!1,!1,"",Fy);return e._reactRootContainer=a,e[yr]=a.current,Ds(e.nodeType===8?e.parentNode:e),ni(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Cu(l);s.call(c)}}var l=sb(e,0,!1,null,null,!1,!1,"",Fy);return e._reactRootContainer=l,e[yr]=l.current,Ds(e.nodeType===8?e.parentNode:e),ni(function(){xd(t,l,n,r)}),l}function Sd(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Cu(a);s.call(l)}}xd(t,a,e,o)}else a=lI(n,t,e,o,r);return Cu(a)}Mk=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ka(t.pendingLanes);n!==0&&(Rg(t,n|1),Bt(t,tt()),!(ye&6)&&(ra=tt()+500,xo()))}break;case 13:ni(function(){var r=xr(e,1);if(r!==null){var o=Rt();An(r,e,1,o)}}),lb(e,1)}};Pg=function(e){if(e.tag===13){var t=xr(e,134217728);if(t!==null){var n=Rt();An(t,e,134217728,n)}lb(e,134217728)}};jk=function(e){if(e.tag===13){var t=io(e),n=xr(e,t);if(n!==null){var r=Rt();An(n,e,t,r)}lb(e,t)}};Lk=function(){return ke};Dk=function(e,t){var n=ke;try{return ke=e,t()}finally{ke=n}};hh=function(e,t,n){switch(t){case"input":if(sh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=pd(r);if(!o)throw Error($(90));pk(r),sh(r,o)}}}break;case"textarea":mk(e,n);break;case"select":t=n.value,t!=null&&Ui(e,!!n.multiple,t,!1)}};_k=rb;Sk=ni;var cI={usingClientEntryPoint:!1,Events:[ul,ji,pd,xk,wk,rb]},ja={findFiberByHostInstance:zo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uI={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ok(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||sI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{cd=ql.inject(uI),Zn=ql}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ub(t))throw Error($(200));return aI(e,t,null,n)};en.createRoot=function(e,t){if(!ub(e))throw Error($(299));var n=!1,r="",o=oO;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sb(e,1,!1,null,null,n,!1,r,o),e[yr]=t.current,Ds(e.nodeType===8?e.parentNode:e),new cb(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Ok(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return ni(e)};en.hydrate=function(e,t,n){if(!_d(t))throw Error($(200));return Sd(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!ub(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=oO;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rO(t,null,e,1,n??null,o,!1,i,a),e[yr]=t.current,Ds(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wd(t)};en.render=function(e,t,n){if(!_d(t))throw Error($(200));return Sd(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!_d(e))throw Error($(40));return e._reactRootContainer?(ni(function(){Sd(null,null,e,!1,function(){e._reactRootContainer=null,e[yr]=null})}),!0):!1};en.unstable_batchedUpdates=rb;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_d(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Sd(e,t,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function iO(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iO)}catch(e){console.error(e)}}iO(),ik.exports=en;var kd=ik.exports;const Bi=pa(kd);var zy=kd;eh.createRoot=zy.createRoot,eh.hydrateRoot=zy.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vs.apply(this,arguments)}var Gr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gr||(Gr={}));const By="popstate";function dI(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Gh("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Tu(o)}return pI(t,n,null,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function aO(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fI(){return Math.random().toString(36).substr(2,8)}function Hy(e,t){return{usr:e.state,key:e.key,idx:t}}function Gh(e,t,n,r){return n===void 0&&(n=null),Vs({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ba(t):t,{state:n,key:t&&t.key||r||fI()})}function Tu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ba(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pI(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Gr.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Vs({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function f(){s=Gr.Pop;let w=u(),v=w==null?null:w-c;c=w,l&&l({action:s,location:b.location,delta:v})}function p(w,v){s=Gr.Push;let g=Gh(b.location,w,v);c=u()+1;let y=Hy(g,c),_=b.createHref(g);try{a.pushState(y,"",_)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(_)}i&&l&&l({action:s,location:b.location,delta:1})}function m(w,v){s=Gr.Replace;let g=Gh(b.location,w,v);c=u();let y=Hy(g,c),_=b.createHref(g);a.replaceState(y,"",_),i&&l&&l({action:s,location:b.location,delta:0})}function h(w){let v=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof w=="string"?w:Tu(w);return g=g.replace(/ $/,"%20"),Ve(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let b={get action(){return s},get location(){return e(o,a)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(By,f),l=w,()=>{o.removeEventListener(By,f),l=null}},createHref(w){return t(o,w)},createURL:h,encodeLocation(w){let v=h(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:m,go(w){return a.go(w)}};return b}var Uy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uy||(Uy={}));function hI(e,t,n){return n===void 0&&(n="/"),mI(e,t,n,!1)}function mI(e,t,n,r){let o=typeof t=="string"?ba(t):t,i=oa(o.pathname||"/",n);if(i==null)return null;let a=sO(e);gI(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=CI(i);s=EI(a[l],c,r)}return s}function sO(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=so([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(Ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),sO(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:SI(c,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let l of lO(i.path))o(i,a,l)}),t}function lO(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=lO(r.join("/")),s=[];return s.push(...a.map(l=>l===""?i:[i,l].join("/"))),o&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function gI(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bI=/^:[\w-]+$/,vI=3,yI=2,xI=1,wI=10,_I=-2,Wy=e=>e==="*";function SI(e,t){let n=e.split("/"),r=n.length;return n.some(Wy)&&(r+=_I),t&&(r+=yI),n.filter(o=>!Wy(o)).reduce((o,i)=>o+(bI.test(i)?vI:i===""?xI:wI),r)}function kI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function EI(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Ru({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Ru({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(o,f.params),a.push({params:o,pathname:so([i,f.pathname]),pathnameBase:AI(so([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=so([i,f.pathnameBase]))}return a}function Ru(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=OI(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:p,isOptional:m}=u;if(p==="*"){let b=s[f]||"";a=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const h=s[f];return m&&!h?c[p]=void 0:c[p]=(h||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function OI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),aO(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function CI(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return aO(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function oa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function TI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?ba(e):e;return{pathname:n?n.startsWith("/")?n:RI(n,t):t,search:II(r),hash:MI(o)}}function RI(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PI(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function db(e,t){let n=PI(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fb(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=ba(e):(o=Vs({},e),Ve(!o.pathname||!o.pathname.includes("?"),Jf("?","pathname","search",o)),Ve(!o.pathname||!o.pathname.includes("#"),Jf("#","pathname","hash",o)),Ve(!o.search||!o.search.includes("#"),Jf("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;o.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=TI(o,s),c=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const so=e=>e.join("/").replace(/\/\/+/g,"/"),AI=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),II=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,MI=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jI(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cO=["post","put","patch","delete"];new Set(cO);const LI=["get",...cO];new Set(LI);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ys(){return Ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ys.apply(this,arguments)}const Ed=O.createContext(null),uO=O.createContext(null),Er=O.createContext(null),Od=O.createContext(null),Or=O.createContext({outlet:null,matches:[],isDataRoute:!1}),dO=O.createContext(null);function DI(e,t){let{relative:n}=t===void 0?{}:t;va()||Ve(!1);let{basename:r,navigator:o}=O.useContext(Er),{hash:i,pathname:a,search:s}=Td(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:so([r,a])),o.createHref({pathname:l,search:s,hash:i})}function va(){return O.useContext(Od)!=null}function ya(){return va()||Ve(!1),O.useContext(Od).location}function fO(e){O.useContext(Er).static||O.useLayoutEffect(e)}function Cd(){let{isDataRoute:e}=O.useContext(Or);return e?QI():NI()}function NI(){va()||Ve(!1);let e=O.useContext(Ed),{basename:t,future:n,navigator:r}=O.useContext(Er),{matches:o}=O.useContext(Or),{pathname:i}=ya(),a=JSON.stringify(db(o,n.v7_relativeSplatPath)),s=O.useRef(!1);return fO(()=>{s.current=!0}),O.useCallback(function(c,u){if(u===void 0&&(u={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=fb(c,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:so([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,a,i,e])}const $I=O.createContext(null);function FI(e){let t=O.useContext(Or).outlet;return t&&O.createElement($I.Provider,{value:e},t)}function Td(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(Er),{matches:o}=O.useContext(Or),{pathname:i}=ya(),a=JSON.stringify(db(o,r.v7_relativeSplatPath));return O.useMemo(()=>fb(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function zI(e,t){return BI(e,t)}function BI(e,t,n,r){va()||Ve(!1);let{navigator:o}=O.useContext(Er),{matches:i}=O.useContext(Or),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ya(),u;if(t){var f;let w=typeof t=="string"?ba(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||Ve(!1),u=w}else u=c;let p=u.pathname||"/",m=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let h=hI(e,{pathname:m}),b=YI(h&&h.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:so([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:so([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&b?O.createElement(Od.Provider,{value:{location:Ys({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gr.Pop}},b):b}function HI(){let e=KI(),t=jI(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:o},n):null,null)}const UI=O.createElement(HI,null);class WI extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(Or.Provider,{value:this.props.routeContext},O.createElement(dO.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VI(e){let{routeContext:t,match:n,children:r}=e,o=O.useContext(Ed);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Or.Provider,{value:t},r)}function YI(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let u=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Ve(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let f=a[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:p,errors:m}=n,h=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||h){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,f,p)=>{let m,h=!1,b=null,w=null;n&&(m=s&&f.route.id?s[f.route.id]:void 0,b=f.route.errorElement||UI,l&&(c<0&&p===0?(h=!0,w=null):c===p&&(h=!0,w=f.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,p+1)),g=()=>{let y;return m?y=b:h?y=w:f.route.Component?y=O.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,O.createElement(VI,{match:f,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?O.createElement(WI,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var pO=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pO||{}),Pu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pu||{});function GI(e){let t=O.useContext(Ed);return t||Ve(!1),t}function qI(e){let t=O.useContext(uO);return t||Ve(!1),t}function XI(e){let t=O.useContext(Or);return t||Ve(!1),t}function hO(e){let t=XI(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function KI(){var e;let t=O.useContext(dO),n=qI(Pu.UseRouteError),r=hO(Pu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function QI(){let{router:e}=GI(pO.UseNavigateStable),t=hO(Pu.UseNavigateStable),n=O.useRef(!1);return fO(()=>{n.current=!0}),O.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ys({fromRouteId:t},i)))},[e,t])}function Bn(e){let{to:t,replace:n,state:r,relative:o}=e;va()||Ve(!1);let{future:i,static:a}=O.useContext(Er),{matches:s}=O.useContext(Or),{pathname:l}=ya(),c=Cd(),u=fb(t,db(s,i.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(u);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:o}),[c,f,o,n,r]),null}function JI(e){return FI(e.context)}function rt(e){Ve(!1)}function ZI(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Gr.Pop,navigator:i,static:a=!1,future:s}=e;va()&&Ve(!1);let l=t.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:l,navigator:i,static:a,future:Ys({v7_relativeSplatPath:!1},s)}),[l,s,i,a]);typeof r=="string"&&(r=ba(r));let{pathname:u="/",search:f="",hash:p="",state:m=null,key:h="default"}=r,b=O.useMemo(()=>{let w=oa(u,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:m,key:h},navigationType:o}},[l,u,f,p,m,h,o]);return b==null?null:O.createElement(Er.Provider,{value:c},O.createElement(Od.Provider,{children:n,value:b}))}function e5(e){let{children:t,location:n}=e;return zI(qh(t),n)}new Promise(()=>{});function qh(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,o)=>{if(!O.isValidElement(r))return;let i=[...t,o];if(r.type===O.Fragment){n.push.apply(n,qh(r.props.children,i));return}r.type!==rt&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=qh(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Au(){return Au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Au.apply(this,arguments)}function mO(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function t5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n5(e,t){return e.button===0&&(!t||t==="_self")&&!t5(e)}const r5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],o5=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],i5="6";try{window.__reactRouterVersion=i5}catch{}const a5=O.createContext({isTransitioning:!1}),s5="startTransition",Vy=eP[s5];function l5(e){let{basename:t,children:n,future:r,window:o}=e,i=O.useRef();i.current==null&&(i.current=dI({window:o,v5Compat:!0}));let a=i.current,[s,l]=O.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},u=O.useCallback(f=>{c&&Vy?Vy(()=>l(f)):l(f)},[l,c]);return O.useLayoutEffect(()=>a.listen(u),[a,u]),O.createElement(ZI,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const c5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pb=O.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:l,to:c,preventScrollReset:u,unstable_viewTransition:f}=t,p=mO(t,r5),{basename:m}=O.useContext(Er),h,b=!1;if(typeof c=="string"&&u5.test(c)&&(h=c,c5))try{let y=new URL(window.location.href),_=c.startsWith("//")?new URL(y.protocol+c):new URL(c),k=oa(_.pathname,m);_.origin===y.origin&&k!=null?c=k+_.search+_.hash:b=!0}catch{}let w=DI(c,{relative:o}),v=f5(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:o,unstable_viewTransition:f});function g(y){r&&r(y),y.defaultPrevented||v(y)}return O.createElement("a",Au({},p,{href:h||w,onClick:b||i?r:g,ref:n,target:l}))}),Ja=O.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,unstable_viewTransition:c,children:u}=t,f=mO(t,o5),p=Td(l,{relative:f.relative}),m=ya(),h=O.useContext(uO),{navigator:b,basename:w}=O.useContext(Er),v=h!=null&&p5(p)&&c===!0,g=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,y=m.pathname,_=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;o||(y=y.toLowerCase(),_=_?_.toLowerCase():null,g=g.toLowerCase()),_&&w&&(_=oa(_,w)||_);const k=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=y===g||!a&&y.startsWith(g)&&y.charAt(k)==="/",E=_!=null&&(_===g||!a&&_.startsWith(g)&&_.charAt(g.length)==="/"),C={isActive:S,isPending:E,isTransitioning:v},A=S?r:void 0,P;typeof i=="function"?P=i(C):P=[i,S?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(C):s;return O.createElement(pb,Au({},f,{"aria-current":A,className:P,ref:n,style:L,to:l,unstable_viewTransition:c}),typeof u=="function"?u(C):u)});var Xh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xh||(Xh={}));var Yy;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yy||(Yy={}));function d5(e){let t=O.useContext(Ed);return t||Ve(!1),t}function f5(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s}=t===void 0?{}:t,l=Cd(),c=ya(),u=Td(e,{relative:a});return O.useCallback(f=>{if(n5(f,n)){f.preventDefault();let p=r!==void 0?r:Tu(c)===Tu(u);l(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:s})}},[c,l,u,r,o,n,e,i,a,s])}function p5(e,t){t===void 0&&(t={});let n=O.useContext(a5);n==null&&Ve(!1);let{basename:r}=d5(Xh.useViewTransitionState),o=Td(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=oa(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=oa(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ru(o.pathname,a)!=null||Ru(o.pathname,i)!=null}function gO(e,t){return function(){return e.apply(t,arguments)}}const{toString:h5}=Object.prototype,{getPrototypeOf:hb}=Object,Rd=(e=>t=>{const n=h5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Dn=e=>(e=e.toLowerCase(),t=>Rd(t)===e),Pd=e=>t=>typeof t===e,{isArray:xa}=Array,Gs=Pd("undefined");function m5(e){return e!==null&&!Gs(e)&&e.constructor!==null&&!Gs(e.constructor)&&pn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bO=Dn("ArrayBuffer");function g5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bO(e.buffer),t}const b5=Pd("string"),pn=Pd("function"),vO=Pd("number"),Ad=e=>e!==null&&typeof e=="object",v5=e=>e===!0||e===!1,Hc=e=>{if(Rd(e)!=="object")return!1;const t=hb(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},y5=Dn("Date"),x5=Dn("File"),w5=Dn("Blob"),_5=Dn("FileList"),S5=e=>Ad(e)&&pn(e.pipe),k5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||pn(e.append)&&((t=Rd(e))==="formdata"||t==="object"&&pn(e.toString)&&e.toString()==="[object FormData]"))},E5=Dn("URLSearchParams"),[O5,C5,T5,R5]=["ReadableStream","Request","Response","Headers"].map(Dn),P5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),xa(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function yO(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const xO=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wO=e=>!Gs(e)&&e!==xO;function Kh(){const{caseless:e}=wO(this)&&this||{},t={},n=(r,o)=>{const i=e&&yO(t,o)||o;Hc(t[i])&&Hc(r)?t[i]=Kh(t[i],r):Hc(r)?t[i]=Kh({},r):xa(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&fl(arguments[r],n);return t}const A5=(e,t,n,{allOwnKeys:r}={})=>(fl(t,(o,i)=>{n&&pn(o)?e[i]=gO(o,n):e[i]=o},{allOwnKeys:r}),e),I5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),M5=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},j5=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&hb(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},L5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},D5=e=>{if(!e)return null;if(xa(e))return e;let t=e.length;if(!vO(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},N5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hb(Uint8Array)),$5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},F5=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},z5=Dn("HTMLFormElement"),B5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Gy=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),H5=Dn("RegExp"),_O=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};fl(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},U5=e=>{_O(e,(t,n)=>{if(pn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(pn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},W5=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return xa(e)?r(e):r(String(e).split(t)),n},V5=()=>{},Y5=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Zf="abcdefghijklmnopqrstuvwxyz",qy="0123456789",SO={DIGIT:qy,ALPHA:Zf,ALPHA_DIGIT:Zf+Zf.toUpperCase()+qy},G5=(e=16,t=SO.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function q5(e){return!!(e&&pn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const X5=e=>{const t=new Array(10),n=(r,o)=>{if(Ad(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=xa(r)?[]:{};return fl(r,(a,s)=>{const l=n(a,o+1);!Gs(l)&&(i[s]=l)}),t[o]=void 0,i}}return r};return n(e,0)},K5=Dn("AsyncFunction"),Q5=e=>e&&(Ad(e)||pn(e))&&pn(e.then)&&pn(e.catch),I={isArray:xa,isArrayBuffer:bO,isBuffer:m5,isFormData:k5,isArrayBufferView:g5,isString:b5,isNumber:vO,isBoolean:v5,isObject:Ad,isPlainObject:Hc,isReadableStream:O5,isRequest:C5,isResponse:T5,isHeaders:R5,isUndefined:Gs,isDate:y5,isFile:x5,isBlob:w5,isRegExp:H5,isFunction:pn,isStream:S5,isURLSearchParams:E5,isTypedArray:N5,isFileList:_5,forEach:fl,merge:Kh,extend:A5,trim:P5,stripBOM:I5,inherits:M5,toFlatObject:j5,kindOf:Rd,kindOfTest:Dn,endsWith:L5,toArray:D5,forEachEntry:$5,matchAll:F5,isHTMLForm:z5,hasOwnProperty:Gy,hasOwnProp:Gy,reduceDescriptors:_O,freezeMethods:U5,toObjectSet:W5,toCamelCase:B5,noop:V5,toFiniteNumber:Y5,findKey:yO,global:xO,isContextDefined:wO,ALPHABET:SO,generateString:G5,isSpecCompliantForm:q5,toJSONObject:X5,isAsyncFn:K5,isThenable:Q5};function ue(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}I.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:I.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const kO=ue.prototype,EO={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{EO[e]={value:e}});Object.defineProperties(ue,EO);Object.defineProperty(kO,"isAxiosError",{value:!0});ue.from=(e,t,n,r,o,i)=>{const a=Object.create(kO);return I.toFlatObject(e,a,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ue.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const J5=null;function Qh(e){return I.isPlainObject(e)||I.isArray(e)}function OO(e){return I.endsWith(e,"[]")?e.slice(0,-2):e}function Xy(e,t,n){return e?e.concat(t).map(function(o,i){return o=OO(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Z5(e){return I.isArray(e)&&!e.some(Qh)}const eM=I.toFlatObject(I,{},null,function(t){return/^is[A-Z]/.test(t)});function Id(e,t,n){if(!I.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=I.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,w){return!I.isUndefined(w[b])});const r=n.metaTokens,o=n.visitor||u,i=n.dots,a=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&I.isSpecCompliantForm(t);if(!I.isFunction(o))throw new TypeError("visitor must be a function");function c(h){if(h===null)return"";if(I.isDate(h))return h.toISOString();if(!l&&I.isBlob(h))throw new ue("Blob is not supported. Use a Buffer instead.");return I.isArrayBuffer(h)||I.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,w){let v=h;if(h&&!w&&typeof h=="object"){if(I.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(I.isArray(h)&&Z5(h)||(I.isFileList(h)||I.endsWith(b,"[]"))&&(v=I.toArray(h)))return b=OO(b),v.forEach(function(y,_){!(I.isUndefined(y)||y===null)&&t.append(a===!0?Xy([b],_,i):a===null?b:b+"[]",c(y))}),!1}return Qh(h)?!0:(t.append(Xy(w,b,i),c(h)),!1)}const f=[],p=Object.assign(eM,{defaultVisitor:u,convertValue:c,isVisitable:Qh});function m(h,b){if(!I.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(h),I.forEach(h,function(v,g){(!(I.isUndefined(v)||v===null)&&o.call(t,v,I.isString(g)?g.trim():g,b,p))===!0&&m(v,b?b.concat(g):[g])}),f.pop()}}if(!I.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Ky(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function mb(e,t){this._pairs=[],e&&Id(e,this,t)}const CO=mb.prototype;CO.append=function(t,n){this._pairs.push([t,n])};CO.toString=function(t){const n=t?function(r){return t.call(this,r,Ky)}:Ky;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function tM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function TO(e,t,n){if(!t)return e;const r=n&&n.encode||tM,o=n&&n.serialize;let i;if(o?i=o(t,n):i=I.isURLSearchParams(t)?t.toString():new mb(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qy{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){I.forEach(this.handlers,function(r){r!==null&&t(r)})}}const RO={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nM=typeof URLSearchParams<"u"?URLSearchParams:mb,rM=typeof FormData<"u"?FormData:null,oM=typeof Blob<"u"?Blob:null,iM={isBrowser:!0,classes:{URLSearchParams:nM,FormData:rM,Blob:oM},protocols:["http","https","file","blob","url","data"]},gb=typeof window<"u"&&typeof document<"u",aM=(e=>gb&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),sM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lM=gb&&window.location.href||"http://localhost",cM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gb,hasStandardBrowserEnv:aM,hasStandardBrowserWebWorkerEnv:sM,origin:lM},Symbol.toStringTag,{value:"Module"})),In={...cM,...iM};function uM(e,t){return Id(e,new In.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return In.isNode&&I.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function dM(e){return I.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fM(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function PO(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),l=i>=n.length;return a=!a&&I.isArray(o)?o.length:a,l?(I.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!I.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&I.isArray(o[a])&&(o[a]=fM(o[a])),!s)}if(I.isFormData(e)&&I.isFunction(e.entries)){const n={};return I.forEachEntry(e,(r,o)=>{t(dM(r),o,n,0)}),n}return null}function pM(e,t,n){if(I.isString(e))try{return(t||JSON.parse)(e),I.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const pl={transitional:RO,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=I.isObject(t);if(i&&I.isHTMLForm(t)&&(t=new FormData(t)),I.isFormData(t))return o?JSON.stringify(PO(t)):t;if(I.isArrayBuffer(t)||I.isBuffer(t)||I.isStream(t)||I.isFile(t)||I.isBlob(t)||I.isReadableStream(t))return t;if(I.isArrayBufferView(t))return t.buffer;if(I.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return uM(t,this.formSerializer).toString();if((s=I.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Id(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),pM(t)):t}],transformResponse:[function(t){const n=this.transitional||pl.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(I.isResponse(t)||I.isReadableStream(t))return t;if(t&&I.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?ue.from(s,ue.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:In.classes.FormData,Blob:In.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};I.forEach(["delete","get","head","post","put","patch"],e=>{pl.headers[e]={}});const hM=I.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mM=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&hM[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jy=Symbol("internals");function La(e){return e&&String(e).trim().toLowerCase()}function Uc(e){return e===!1||e==null?e:I.isArray(e)?e.map(Uc):String(e)}function gM(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const bM=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ep(e,t,n,r,o){if(I.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!I.isString(t)){if(I.isString(r))return t.indexOf(r)!==-1;if(I.isRegExp(r))return r.test(t)}}function vM(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function yM(e,t){const n=I.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class Ht{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,l,c){const u=La(l);if(!u)throw new Error("header name must be a non-empty string");const f=I.findKey(o,u);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||l]=Uc(s))}const a=(s,l)=>I.forEach(s,(c,u)=>i(c,u,l));if(I.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(I.isString(t)&&(t=t.trim())&&!bM(t))a(mM(t),n);else if(I.isHeaders(t))for(const[s,l]of t.entries())i(l,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=La(t),t){const r=I.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return gM(o);if(I.isFunction(n))return n.call(this,o,r);if(I.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=La(t),t){const r=I.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ep(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=La(a),a){const s=I.findKey(r,a);s&&(!n||ep(r,r[s],s,n))&&(delete r[s],o=!0)}}return I.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||ep(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return I.forEach(this,(o,i)=>{const a=I.findKey(r,i);if(a){n[a]=Uc(o),delete n[i];return}const s=t?vM(i):String(i).trim();s!==i&&delete n[i],n[s]=Uc(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return I.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&I.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Jy]=this[Jy]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=La(a);r[s]||(yM(o,a),r[s]=!0)}return I.isArray(t)?t.forEach(i):i(t),this}}Ht.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);I.reduceDescriptors(Ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});I.freezeMethods(Ht);function tp(e,t){const n=this||pl,r=t||n,o=Ht.from(r.headers);let i=r.data;return I.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function AO(e){return!!(e&&e.__CANCEL__)}function wa(e,t,n){ue.call(this,e??"canceled",ue.ERR_CANCELED,t,n),this.name="CanceledError"}I.inherits(wa,ue,{__CANCEL__:!0});function IO(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ue("Request failed with status code "+n.status,[ue.ERR_BAD_REQUEST,ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function xM(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wM(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[i];a||(a=c),n[o]=l,r[o]=c;let f=i,p=0;for(;f!==o;)p+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-a<t)return;const m=u&&c-u;return m?Math.round(p*1e3/m):void 0}}function _M(e,t){let n=0;const r=1e3/t;let o=null;return function(){const a=this===!0,s=Date.now();if(a||s-n>r)return o&&(clearTimeout(o),o=null),n=s,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Iu=(e,t,n=3)=>{let r=0;const o=wM(50,250);return _M(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,l=a-r,c=o(l),u=a<=s;r=a;const f={loaded:a,total:s,progress:s?a/s:void 0,bytes:l,rate:c||void 0,estimated:c&&s&&u?(s-a)/c:void 0,event:i,lengthComputable:s!=null};f[t?"download":"upload"]=!0,e(f)},n)},SM=In.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=I.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),kM=In.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];I.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),I.isString(r)&&a.push("path="+r),I.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function EM(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function OM(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function MO(e,t){return e&&!EM(t)?OM(e,t):t}const Zy=e=>e instanceof Ht?{...e}:e;function ri(e,t){t=t||{};const n={};function r(c,u,f){return I.isPlainObject(c)&&I.isPlainObject(u)?I.merge.call({caseless:f},c,u):I.isPlainObject(u)?I.merge({},u):I.isArray(u)?u.slice():u}function o(c,u,f){if(I.isUndefined(u)){if(!I.isUndefined(c))return r(void 0,c,f)}else return r(c,u,f)}function i(c,u){if(!I.isUndefined(u))return r(void 0,u)}function a(c,u){if(I.isUndefined(u)){if(!I.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function s(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(c,u)=>o(Zy(c),Zy(u),!0)};return I.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||o,p=f(e[u],t[u],u);I.isUndefined(p)&&f!==s||(n[u]=p)}),n}const jO=e=>{const t=ri({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=Ht.from(a),t.url=TO(MO(t.baseURL,t.url),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(I.isFormData(n)){if(In.hasStandardBrowserEnv||In.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((l=a.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([c||"multipart/form-data",...u].join("; "))}}if(In.hasStandardBrowserEnv&&(r&&I.isFunction(r)&&(r=r(t)),r||r!==!1&&SM(t.url))){const c=o&&i&&kM.read(i);c&&a.set(o,c)}return t},CM=typeof XMLHttpRequest<"u",TM=CM&&function(e){return new Promise(function(n,r){const o=jO(e);let i=o.data;const a=Ht.from(o.headers).normalize();let{responseType:s}=o,l;function c(){o.cancelToken&&o.cancelToken.unsubscribe(l),o.signal&&o.signal.removeEventListener("abort",l)}let u=new XMLHttpRequest;u.open(o.method.toUpperCase(),o.url,!0),u.timeout=o.timeout;function f(){if(!u)return;const m=Ht.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),b={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};IO(function(v){n(v),c()},function(v){r(v),c()},b),u=null}"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new ue("Request aborted",ue.ECONNABORTED,o,u)),u=null)},u.onerror=function(){r(new ue("Network Error",ue.ERR_NETWORK,o,u)),u=null},u.ontimeout=function(){let h=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const b=o.transitional||RO;o.timeoutErrorMessage&&(h=o.timeoutErrorMessage),r(new ue(h,b.clarifyTimeoutError?ue.ETIMEDOUT:ue.ECONNABORTED,o,u)),u=null},i===void 0&&a.setContentType(null),"setRequestHeader"in u&&I.forEach(a.toJSON(),function(h,b){u.setRequestHeader(b,h)}),I.isUndefined(o.withCredentials)||(u.withCredentials=!!o.withCredentials),s&&s!=="json"&&(u.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&u.addEventListener("progress",Iu(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Iu(o.onUploadProgress)),(o.cancelToken||o.signal)&&(l=m=>{u&&(r(!m||m.type?new wa(null,e,u):m),u.abort(),u=null)},o.cancelToken&&o.cancelToken.subscribe(l),o.signal&&(o.signal.aborted?l():o.signal.addEventListener("abort",l)));const p=xM(o.url);if(p&&In.protocols.indexOf(p)===-1){r(new ue("Unsupported protocol "+p+":",ue.ERR_BAD_REQUEST,e));return}u.send(i||null)})},RM=(e,t)=>{let n=new AbortController,r;const o=function(l){if(!r){r=!0,a();const c=l instanceof Error?l:this.reason;n.abort(c instanceof ue?c:new wa(c instanceof Error?c.message:c))}};let i=t&&setTimeout(()=>{o(new ue(`timeout ${t} of ms exceeded`,ue.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",o):l.unsubscribe(o))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",o));const{signal:s}=n;return s.unsubscribe=a,[s,()=>{i&&clearTimeout(i),i=null}]},PM=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},AM=async function*(e,t,n){for await(const r of e)yield*PM(ArrayBuffer.isView(r)?r:await n(String(r)),t)},e0=(e,t,n,r,o)=>{const i=AM(e,t,o);let a=0;return new ReadableStream({type:"bytes",async pull(s){const{done:l,value:c}=await i.next();if(l){s.close(),r();return}let u=c.byteLength;n&&n(a+=u),s.enqueue(new Uint8Array(c))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},t0=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},Md=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",LO=Md&&typeof ReadableStream=="function",Jh=Md&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),IM=LO&&(()=>{let e=!1;const t=new Request(In.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),n0=64*1024,Zh=LO&&!!(()=>{try{return I.isReadableStream(new Response("").body)}catch{}})(),Mu={stream:Zh&&(e=>e.body)};Md&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Mu[t]&&(Mu[t]=I.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ue(`Response type '${t}' is not supported`,ue.ERR_NOT_SUPPORT,r)})})})(new Response);const MM=async e=>{if(e==null)return 0;if(I.isBlob(e))return e.size;if(I.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(I.isArrayBufferView(e))return e.byteLength;if(I.isURLSearchParams(e)&&(e=e+""),I.isString(e))return(await Jh(e)).byteLength},jM=async(e,t)=>{const n=I.toFiniteNumber(e.getContentLength());return n??MM(t)},LM=Md&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:p}=jO(e);c=c?(c+"").toLowerCase():"text";let[m,h]=o||i||a?RM([o,i],a):[],b,w;const v=()=>{!b&&setTimeout(()=>{m&&m.unsubscribe()}),b=!0};let g;try{if(l&&IM&&n!=="get"&&n!=="head"&&(g=await jM(u,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),E;I.isFormData(r)&&(E=S.headers.get("content-type"))&&u.setContentType(E),S.body&&(r=e0(S.body,n0,t0(g,Iu(l)),null,Jh))}I.isString(f)||(f=f?"cors":"omit"),w=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let y=await fetch(w);const _=Zh&&(c==="stream"||c==="response");if(Zh&&(s||_)){const S={};["status","statusText","headers"].forEach(C=>{S[C]=y[C]});const E=I.toFiniteNumber(y.headers.get("content-length"));y=new Response(e0(y.body,n0,s&&t0(E,Iu(s,!0)),_&&v,Jh),S)}c=c||"text";let k=await Mu[I.findKey(Mu,c)||"text"](y,e);return!_&&v(),h&&h(),await new Promise((S,E)=>{IO(S,E,{data:k,headers:Ht.from(y.headers),status:y.status,statusText:y.statusText,config:e,request:w})})}catch(y){throw v(),y&&y.name==="TypeError"&&/fetch/i.test(y.message)?Object.assign(new ue("Network Error",ue.ERR_NETWORK,e,w),{cause:y.cause||y}):ue.from(y,y&&y.code,e,w)}}),em={http:J5,xhr:TM,fetch:LM};I.forEach(em,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const r0=e=>`- ${e}`,DM=e=>I.isFunction(e)||e===null||e===!1,DO={getAdapter:e=>{e=I.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!DM(n)&&(r=em[(a=String(n)).toLowerCase()],r===void 0))throw new ue(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(r0).join(`
`):" "+r0(i[0]):"as no adapter specified";throw new ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:em};function np(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wa(null,e)}function o0(e){return np(e),e.headers=Ht.from(e.headers),e.data=tp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),DO.getAdapter(e.adapter||pl.adapter)(e).then(function(r){return np(e),r.data=tp.call(e,e.transformResponse,r),r.headers=Ht.from(r.headers),r},function(r){return AO(r)||(np(e),r&&r.response&&(r.response.data=tp.call(e,e.transformResponse,r.response),r.response.headers=Ht.from(r.response.headers))),Promise.reject(r)})}const NO="1.7.2",bb={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{bb[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const i0={};bb.transitional=function(t,n,r){function o(i,a){return"[Axios v"+NO+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new ue(o(a," has been removed"+(n?" in "+n:"")),ue.ERR_DEPRECATED);return n&&!i0[a]&&(i0[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function NM(e,t,n){if(typeof e!="object")throw new ue("options must be an object",ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],l=s===void 0||a(s,i,e);if(l!==!0)throw new ue("option "+i+" must be "+l,ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ue("Unknown option "+i,ue.ERR_BAD_OPTION)}}const tm={assertOptions:NM,validators:bb},jr=tm.validators;class Yo{constructor(t){this.defaults=t,this.interceptors={request:new Qy,response:new Qy}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ri(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&tm.assertOptions(r,{silentJSONParsing:jr.transitional(jr.boolean),forcedJSONParsing:jr.transitional(jr.boolean),clarifyTimeoutError:jr.transitional(jr.boolean)},!1),o!=null&&(I.isFunction(o)?n.paramsSerializer={serialize:o}:tm.assertOptions(o,{encode:jr.function,serialize:jr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&I.merge(i.common,i[n.method]);i&&I.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=Ht.concat(a,i);const s=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(l=l&&b.synchronous,s.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!l){const h=[o0.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,c),p=h.length,u=Promise.resolve(n);f<p;)u=u.then(h[f++],h[f++]);return u}p=s.length;let m=n;for(f=0;f<p;){const h=s[f++],b=s[f++];try{m=h(m)}catch(w){b.call(this,w);break}}try{u=o0.call(this,m)}catch(h){return Promise.reject(h)}for(f=0,p=c.length;f<p;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=ri(this.defaults,t);const n=MO(t.baseURL,t.url);return TO(n,t.params,t.paramsSerializer)}}I.forEach(["delete","get","head","options"],function(t){Yo.prototype[t]=function(n,r){return this.request(ri(r||{},{method:t,url:n,data:(r||{}).data}))}});I.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(ri(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Yo.prototype[t]=n(),Yo.prototype[t+"Form"]=n(!0)});class vb{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new wa(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new vb(function(o){t=o}),cancel:t}}}function $M(e){return function(n){return e.apply(null,n)}}function FM(e){return I.isObject(e)&&e.isAxiosError===!0}const nm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nm).forEach(([e,t])=>{nm[t]=e});function $O(e){const t=new Yo(e),n=gO(Yo.prototype.request,t);return I.extend(n,Yo.prototype,t,{allOwnKeys:!0}),I.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return $O(ri(e,o))},n}const ae=$O(pl);ae.Axios=Yo;ae.CanceledError=wa;ae.CancelToken=vb;ae.isCancel=AO;ae.VERSION=NO;ae.toFormData=Id;ae.AxiosError=ue;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=$M;ae.isAxiosError=FM;ae.mergeConfig=ri;ae.AxiosHeaders=Ht;ae.formToJSON=e=>PO(I.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=DO.getAdapter;ae.HttpStatusCode=nm;ae.default=ae;var FO={exports:{}},zM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BM=zM,HM=BM;function zO(){}function BO(){}BO.resetWarningCache=zO;var UM=function(){function e(r,o,i,a,s,l){if(l!==HM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:BO,resetWarningCache:zO};return n.PropTypes=n,n};FO.exports=UM();var fi=FO.exports;const d=pa(fi);var HO={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,r(s)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(HO);var UO=HO.exports;const pe=pa(UO);var WO={exports:{}},Ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb=Symbol.for("react.element"),xb=Symbol.for("react.portal"),jd=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),$d=Symbol.for("react.context"),WM=Symbol.for("react.server_context"),Fd=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Bd=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),VM=Symbol.for("react.offscreen"),VO;VO=Symbol.for("react.module.reference");function gn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yb:switch(e=e.type,e){case jd:case Dd:case Ld:case zd:case Bd:return e;default:switch(e=e&&e.$$typeof,e){case WM:case $d:case Fd:case Ud:case Hd:case Nd:return e;default:return t}}case xb:return t}}}Ee.ContextConsumer=$d;Ee.ContextProvider=Nd;Ee.Element=yb;Ee.ForwardRef=Fd;Ee.Fragment=jd;Ee.Lazy=Ud;Ee.Memo=Hd;Ee.Portal=xb;Ee.Profiler=Dd;Ee.StrictMode=Ld;Ee.Suspense=zd;Ee.SuspenseList=Bd;Ee.isAsyncMode=function(){return!1};Ee.isConcurrentMode=function(){return!1};Ee.isContextConsumer=function(e){return gn(e)===$d};Ee.isContextProvider=function(e){return gn(e)===Nd};Ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yb};Ee.isForwardRef=function(e){return gn(e)===Fd};Ee.isFragment=function(e){return gn(e)===jd};Ee.isLazy=function(e){return gn(e)===Ud};Ee.isMemo=function(e){return gn(e)===Hd};Ee.isPortal=function(e){return gn(e)===xb};Ee.isProfiler=function(e){return gn(e)===Dd};Ee.isStrictMode=function(e){return gn(e)===Ld};Ee.isSuspense=function(e){return gn(e)===zd};Ee.isSuspenseList=function(e){return gn(e)===Bd};Ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jd||e===Dd||e===Ld||e===zd||e===Bd||e===VM||typeof e=="object"&&e!==null&&(e.$$typeof===Ud||e.$$typeof===Hd||e.$$typeof===Nd||e.$$typeof===$d||e.$$typeof===Fd||e.$$typeof===VO||e.getModuleId!==void 0)};Ee.typeOf=gn;WO.exports=Ee;var YO=WO.exports;function YM(e){function t(N,F,D,z,T){for(var le=0,B=0,_e=0,fe=0,me,re,Pe=0,Ce=0,Q,et=Q=me=0,ge=0,it=0,ko=0,at=0,vi=D.length,Eo=vi-1,Ut,ie="",ze="",ve="",$n="",xn;ge<vi;){if(re=D.charCodeAt(ge),ge===Eo&&B+fe+_e+le!==0&&(B!==0&&(re=B===47?10:47),fe=_e=le=0,vi++,Eo++),B+fe+_e+le===0){if(ge===Eo&&(0<it&&(ie=ie.replace(p,"")),0<ie.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:ie+=D.charAt(ge)}re=59}switch(re){case 123:for(ie=ie.trim(),me=ie.charCodeAt(0),Q=1,at=++ge;ge<vi;){switch(re=D.charCodeAt(ge)){case 123:Q++;break;case 125:Q--;break;case 47:switch(re=D.charCodeAt(ge+1)){case 42:case 47:e:{for(et=ge+1;et<Eo;++et)switch(D.charCodeAt(et)){case 47:if(re===42&&D.charCodeAt(et-1)===42&&ge+2!==et){ge=et+1;break e}break;case 10:if(re===47){ge=et+1;break e}}ge=et}}break;case 91:re++;case 40:re++;case 34:case 39:for(;ge++<Eo&&D.charCodeAt(ge)!==re;);}if(Q===0)break;ge++}switch(Q=D.substring(at,ge),me===0&&(me=(ie=ie.replace(f,"").trim()).charCodeAt(0)),me){case 64:switch(0<it&&(ie=ie.replace(p,"")),re=ie.charCodeAt(1),re){case 100:case 109:case 115:case 45:it=F;break;default:it=ne}if(Q=t(F,it,Q,re,T+1),at=Q.length,0<M&&(it=n(ne,ie,ko),xn=s(3,Q,it,F,Z,W,at,re,T,z),ie=it.join(""),xn!==void 0&&(at=(Q=xn.trim()).length)===0&&(re=0,Q="")),0<at)switch(re){case 115:ie=ie.replace(S,a);case 100:case 109:case 45:Q=ie+"{"+Q+"}";break;case 107:ie=ie.replace(g,"$1 $2"),Q=ie+"{"+Q+"}",Q=X===1||X===2&&i("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=ie+Q,z===112&&(Q=(ze+=Q,""))}else Q="";break;default:Q=t(F,n(F,ie,ko),Q,z,T+1)}ve+=Q,Q=ko=it=et=me=0,ie="",re=D.charCodeAt(++ge);break;case 125:case 59:if(ie=(0<it?ie.replace(p,""):ie).trim(),1<(at=ie.length))switch(et===0&&(me=ie.charCodeAt(0),me===45||96<me&&123>me)&&(at=(ie=ie.replace(" ",":")).length),0<M&&(xn=s(1,ie,F,N,Z,W,ze.length,z,T,z))!==void 0&&(at=(ie=xn.trim()).length)===0&&(ie="\0\0"),me=ie.charCodeAt(0),re=ie.charCodeAt(1),me){case 0:break;case 64:if(re===105||re===99){$n+=ie+D.charAt(ge);break}default:ie.charCodeAt(at-1)!==58&&(ze+=o(ie,me,re,ie.charCodeAt(2)))}ko=it=et=me=0,ie="",re=D.charCodeAt(++ge)}}switch(re){case 13:case 10:B===47?B=0:1+me===0&&z!==107&&0<ie.length&&(it=1,ie+="\0"),0<M*q&&s(0,ie,F,N,Z,W,ze.length,z,T,z),W=1,Z++;break;case 59:case 125:if(B+fe+_e+le===0){W++;break}default:switch(W++,Ut=D.charAt(ge),re){case 9:case 32:if(fe+le+B===0)switch(Pe){case 44:case 58:case 9:case 32:Ut="";break;default:re!==32&&(Ut=" ")}break;case 0:Ut="\\0";break;case 12:Ut="\\f";break;case 11:Ut="\\v";break;case 38:fe+B+le===0&&(it=ko=1,Ut="\f"+Ut);break;case 108:if(fe+B+le+se===0&&0<et)switch(ge-et){case 2:Pe===112&&D.charCodeAt(ge-3)===58&&(se=Pe);case 8:Ce===111&&(se=Ce)}break;case 58:fe+B+le===0&&(et=ge);break;case 44:B+_e+fe+le===0&&(it=1,Ut+="\r");break;case 34:case 39:B===0&&(fe=fe===re?0:fe===0?re:fe);break;case 91:fe+B+_e===0&&le++;break;case 93:fe+B+_e===0&&le--;break;case 41:fe+B+le===0&&_e--;break;case 40:if(fe+B+le===0){if(me===0)switch(2*Pe+3*Ce){case 533:break;default:me=1}_e++}break;case 64:B+_e+fe+le+et+Q===0&&(Q=1);break;case 42:case 47:if(!(0<fe+le+_e))switch(B){case 0:switch(2*re+3*D.charCodeAt(ge+1)){case 235:B=47;break;case 220:at=ge,B=42}break;case 42:re===47&&Pe===42&&at+2!==ge&&(D.charCodeAt(at+2)===33&&(ze+=D.substring(at,ge+1)),Ut="",B=0)}}B===0&&(ie+=Ut)}Ce=Pe,Pe=re,ge++}if(at=ze.length,0<at){if(it=F,0<M&&(xn=s(2,ze,it,N,Z,W,at,z,T,z),xn!==void 0&&(ze=xn).length===0))return $n+ze+ve;if(ze=it.join(",")+"{"+ze+"}",X*se!==0){switch(X!==2||i(ze,2)||(se=0),se){case 111:ze=ze.replace(_,":-moz-$1")+ze;break;case 112:ze=ze.replace(y,"::-webkit-input-$1")+ze.replace(y,"::-moz-$1")+ze.replace(y,":-ms-input-$1")+ze}se=0}}return $n+ze+ve}function n(N,F,D){var z=F.trim().split(w);F=z;var T=z.length,le=N.length;switch(le){case 0:case 1:var B=0;for(N=le===0?"":N[0]+" ";B<T;++B)F[B]=r(N,F[B],D).trim();break;default:var _e=B=0;for(F=[];B<T;++B)for(var fe=0;fe<le;++fe)F[_e++]=r(N[fe]+" ",z[B],D).trim()}return F}function r(N,F,D){var z=F.charCodeAt(0);switch(33>z&&(z=(F=F.trim()).charCodeAt(0)),z){case 38:return F.replace(v,"$1"+N.trim());case 58:return N.trim()+F.replace(v,"$1"+N.trim());default:if(0<1*D&&0<F.indexOf("\f"))return F.replace(v,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+F}function o(N,F,D,z){var T=N+";",le=2*F+3*D+4*z;if(le===944){N=T.indexOf(":",9)+1;var B=T.substring(N,T.length-1).trim();return B=T.substring(0,N).trim()+B+";",X===1||X===2&&i(B,1)?"-webkit-"+B+B:B}if(X===0||X===2&&!i(T,1))return T;switch(le){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(L,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return B=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+T+"-ms-flex-pack"+B+T;case 1005:return h.test(T)?T.replace(m,":-webkit-")+T.replace(m,":-moz-")+T:T;case 1e3:switch(B=T.substring(13).trim(),F=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(F)){case 226:B=T.replace(k,"tb");break;case 232:B=T.replace(k,"tb-rl");break;case 220:B=T.replace(k,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+B+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(F=(T=N).length-10,B=(T.charCodeAt(F)===33?T.substring(0,F):T).substring(N.indexOf(":",7)+1).trim(),le=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:T=T.replace(B,"-webkit-"+B)+";"+T;break;case 207:case 102:T=T.replace(B,"-webkit-"+(102<le?"inline-":"")+"box")+";"+T.replace(B,"-webkit-"+B)+";"+T.replace(B,"-ms-"+B+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return B=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+B+"-ms-flex-"+B+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(C,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(C,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(P.test(N)===!0)return(B=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),F,D,z).replace(":fill-available",":stretch"):T.replace(B,"-webkit-"+B)+T.replace(B,"-moz-"+B.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,D+z===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(b,"$1-webkit-$2")+T}return T}function i(N,F){var D=N.indexOf(F===1?":":"{"),z=N.substring(0,F!==3?D:10);return D=N.substring(D+1,N.length-1),V(F!==2?z:z.replace(A,"$1"),D,F)}function a(N,F){var D=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return D!==F+";"?D.replace(E," or ($1)").substring(4):"("+F+")"}function s(N,F,D,z,T,le,B,_e,fe,me){for(var re=0,Pe=F,Ce;re<M;++re)switch(Ce=ee[re].call(u,N,Pe,D,z,T,le,B,_e,fe,me)){case void 0:case!1:case!0:case null:break;default:Pe=Ce}if(Pe!==F)return Pe}function l(N){switch(N){case void 0:case null:M=ee.length=0;break;default:if(typeof N=="function")ee[M++]=N;else if(typeof N=="object")for(var F=0,D=N.length;F<D;++F)l(N[F]);else q=!!N|0}return l}function c(N){return N=N.prefix,N!==void 0&&(V=null,N?typeof N!="function"?X=1:(X=2,V=N):X=0),c}function u(N,F){var D=N;if(33>D.charCodeAt(0)&&(D=D.trim()),oe=D,D=[oe],0<M){var z=s(-1,F,D,D,Z,W,0,0,0,0);z!==void 0&&typeof z=="string"&&(F=z)}var T=t(ne,D,F,0,0);return 0<M&&(z=s(-2,T,D,D,Z,W,T.length,0,0,0),z!==void 0&&(T=z)),oe="",se=0,W=Z=1,T}var f=/^\0+/g,p=/[\0\r\f]/g,m=/: */g,h=/zoo|gra/,b=/([,: ])(transform)/g,w=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,_=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,W=1,Z=1,se=0,X=1,ne=[],ee=[],M=0,V=null,q=0,oe="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var GM={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qM(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var XM=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a0=qM(function(e){return XM.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),GO={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=typeof Symbol=="function"&&Symbol.for,wb=ht?Symbol.for("react.element"):60103,_b=ht?Symbol.for("react.portal"):60106,Wd=ht?Symbol.for("react.fragment"):60107,Vd=ht?Symbol.for("react.strict_mode"):60108,Yd=ht?Symbol.for("react.profiler"):60114,Gd=ht?Symbol.for("react.provider"):60109,qd=ht?Symbol.for("react.context"):60110,Sb=ht?Symbol.for("react.async_mode"):60111,Xd=ht?Symbol.for("react.concurrent_mode"):60111,Kd=ht?Symbol.for("react.forward_ref"):60112,Qd=ht?Symbol.for("react.suspense"):60113,KM=ht?Symbol.for("react.suspense_list"):60120,Jd=ht?Symbol.for("react.memo"):60115,Zd=ht?Symbol.for("react.lazy"):60116,QM=ht?Symbol.for("react.block"):60121,JM=ht?Symbol.for("react.fundamental"):60117,ZM=ht?Symbol.for("react.responder"):60118,ej=ht?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wb:switch(e=e.type,e){case Sb:case Xd:case Wd:case Yd:case Vd:case Qd:return e;default:switch(e=e&&e.$$typeof,e){case qd:case Kd:case Zd:case Jd:case Gd:return e;default:return t}}case _b:return t}}}function qO(e){return nn(e)===Xd}Oe.AsyncMode=Sb;Oe.ConcurrentMode=Xd;Oe.ContextConsumer=qd;Oe.ContextProvider=Gd;Oe.Element=wb;Oe.ForwardRef=Kd;Oe.Fragment=Wd;Oe.Lazy=Zd;Oe.Memo=Jd;Oe.Portal=_b;Oe.Profiler=Yd;Oe.StrictMode=Vd;Oe.Suspense=Qd;Oe.isAsyncMode=function(e){return qO(e)||nn(e)===Sb};Oe.isConcurrentMode=qO;Oe.isContextConsumer=function(e){return nn(e)===qd};Oe.isContextProvider=function(e){return nn(e)===Gd};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wb};Oe.isForwardRef=function(e){return nn(e)===Kd};Oe.isFragment=function(e){return nn(e)===Wd};Oe.isLazy=function(e){return nn(e)===Zd};Oe.isMemo=function(e){return nn(e)===Jd};Oe.isPortal=function(e){return nn(e)===_b};Oe.isProfiler=function(e){return nn(e)===Yd};Oe.isStrictMode=function(e){return nn(e)===Vd};Oe.isSuspense=function(e){return nn(e)===Qd};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wd||e===Xd||e===Yd||e===Vd||e===Qd||e===KM||typeof e=="object"&&e!==null&&(e.$$typeof===Zd||e.$$typeof===Jd||e.$$typeof===Gd||e.$$typeof===qd||e.$$typeof===Kd||e.$$typeof===JM||e.$$typeof===ZM||e.$$typeof===ej||e.$$typeof===QM)};Oe.typeOf=nn;GO.exports=Oe;var tj=GO.exports,kb=tj,nj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oj={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},XO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eb={};Eb[kb.ForwardRef]=oj;Eb[kb.Memo]=XO;function s0(e){return kb.isMemo(e)?XO:Eb[e.$$typeof]||nj}var ij=Object.defineProperty,aj=Object.getOwnPropertyNames,l0=Object.getOwnPropertySymbols,sj=Object.getOwnPropertyDescriptor,lj=Object.getPrototypeOf,c0=Object.prototype;function KO(e,t,n){if(typeof t!="string"){if(c0){var r=lj(t);r&&r!==c0&&KO(e,r,n)}var o=aj(t);l0&&(o=o.concat(l0(t)));for(var i=s0(e),a=s0(t),s=0;s<o.length;++s){var l=o[s];if(!rj[l]&&!(n&&n[l])&&!(a&&a[l])&&!(i&&i[l])){var c=sj(t,l);try{ij(e,l,c)}catch{}}}}return e}var cj=KO;const uj=pa(cj);var an={};function Qn(){return(Qn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u0=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},rm=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!YO.typeOf(e)},ju=Object.freeze([]),lo=Object.freeze({});function ia(e){return typeof e=="function"}function d0(e){return e.displayName||e.name||"Component"}function Ob(e){return e&&typeof e.styledComponentId=="string"}var aa=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",Cb=typeof window<"u"&&"HTMLElement"in window,dj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY));function oi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var fj=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&oi(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Wc=new Map,Lu=new Map,ys=1,Xl=function(e){if(Wc.has(e))return Wc.get(e);for(;Lu.has(ys);)ys++;var t=ys++;return Wc.set(e,t),Lu.set(t,e),t},pj=function(e){return Lu.get(e)},hj=function(e,t){t>=ys&&(ys=t+1),Wc.set(e,t),Lu.set(t,e)},mj="style["+aa+'][data-styled-version="5.3.11"]',gj=new RegExp("^"+aa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),bj=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},vj=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(gj);if(s){var l=0|parseInt(s[1],10),c=s[2];l!==0&&(hj(c,l),bj(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}},yj=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},QO=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var l=s.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(aa))return u}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(aa,"active"),r.setAttribute("data-styled-version","5.3.11");var a=yj();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},xj=function(){function e(n){var r=this.element=QO(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var l=i[a];if(l.ownerNode===o)return l}oi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),wj=function(){function e(n){var r=this.element=QO(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),_j=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),f0=Cb,Sj={isServer:!Cb,useCSSOMInjection:!dj},JO=function(){function e(n,r,o){n===void 0&&(n=lo),r===void 0&&(r={}),this.options=Qn({},Sj,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Cb&&f0&&(f0=!1,function(i){for(var a=document.querySelectorAll(mj),s=0,l=a.length;s<l;s++){var c=a[s];c&&c.getAttribute(aa)!=="active"&&(vj(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return Xl(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new _j(a):i?new xj(a):new wj(a),new fj(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Xl(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Xl(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Xl(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=pj(a);if(s!==void 0){var l=n.names.get(s),c=r.getGroup(a);if(l&&c&&l.size){var u=aa+".g"+a+'[id="'+s+'"]',f="";l!==void 0&&l.forEach(function(p){p.length>0&&(f+=p+",")}),i+=""+c+u+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),kj=/(a)(d)/gi,p0=function(e){return String.fromCharCode(e+(e>25?39:97))};function om(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=p0(t%52)+n;return(p0(t%52)+n).replace(kj,"$1-$2")}var Hi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ZO=function(e){return Hi(5381,e)};function Ej(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ia(n)&&!Ob(n))return!1}return!0}var Oj=ZO("5.3.11"),Cj=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ej(t),this.componentId=n,this.baseHash=Hi(Oj,n),this.baseStyle=r,JO.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=sa(this.rules,t,n,r).join(""),s=om(Hi(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var l=r(a,"."+s,void 0,o);n.insertRules(o,s,l)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=Hi(this.baseHash,r.hash),f="",p=0;p<c;p++){var m=this.rules[p];if(typeof m=="string")f+=m;else if(m){var h=sa(m,t,n,r),b=Array.isArray(h)?h.join(""):h;u=Hi(u,b+p),f+=b}}if(f){var w=om(u>>>0);if(!n.hasNameForId(o,w)){var v=r(f,"."+w,void 0,o);n.insertRules(o,w,v)}i.push(w)}}return i.join(" ")},e}(),Tj=/^\s*\/\/.*$/gm,Rj=[":","[",".","#"];function Pj(e){var t,n,r,o,i=lo,a=i.options,s=a===void 0?lo:a,l=i.plugins,c=l===void 0?ju:l,u=new YM(s),f=[],p=function(b){function w(v){if(v)try{b(v+"}")}catch{}}return function(v,g,y,_,k,S,E,C,A,P){switch(v){case 1:if(A===0&&g.charCodeAt(0)===64)return b(g+";"),"";break;case 2:if(C===0)return g+"/*|*/";break;case 3:switch(C){case 102:case 112:return b(y[0]+g),"";default:return g+(P===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(w)}}}(function(b){f.push(b)}),m=function(b,w,v){return w===0&&Rj.indexOf(v[n.length])!==-1||v.match(o)?b:"."+t};function h(b,w,v,g){g===void 0&&(g="&");var y=b.replace(Tj,""),_=w&&v?v+" "+w+" { "+y+" }":y;return t=g,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(v||!w?"":w,_)}return u.use([].concat(c,[function(b,w,v){b===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,m))},p,function(b){if(b===-2){var w=f;return f=[],w}}])),h.hash=c.length?c.reduce(function(b,w){return w.name||oi(15),Hi(b,w.name)},5381).toString():"",h}var eC=U.createContext();eC.Consumer;var tC=U.createContext(),Aj=(tC.Consumer,new JO),im=Pj();function Ij(){return O.useContext(eC)||Aj}function Mj(){return O.useContext(tC)||im}var nC=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=im);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return oi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=im),this.name+t.hash},e}(),jj=/([A-Z])/,Lj=/([A-Z])/g,Dj=/^ms-/,Nj=function(e){return"-"+e.toLowerCase()};function h0(e){return jj.test(e)?e.replace(Lj,Nj).replace(Dj,"-ms-"):e}var m0=function(e){return e==null||e===!1||e===""};function sa(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=sa(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(m0(e))return"";if(Ob(e))return"."+e.styledComponentId;if(ia(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return sa(l,t,n,r)}var c;return e instanceof nC?n?(e.inject(n,r),e.getName(r)):e:rm(e)?function u(f,p){var m,h,b=[];for(var w in f)f.hasOwnProperty(w)&&!m0(f[w])&&(Array.isArray(f[w])&&f[w].isCss||ia(f[w])?b.push(h0(w)+":",f[w],";"):rm(f[w])?b.push.apply(b,u(f[w],w)):b.push(h0(w)+": "+(m=w,(h=f[w])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||m in GM||m.startsWith("--")?String(h).trim():h+"px")+";"));return p?[p+" {"].concat(b,["}"]):b}(e):e.toString()}var g0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function te(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ia(e)||rm(e)?g0(sa(u0(ju,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:g0(sa(u0(e,n)))}var $j=function(e,t,n){return n===void 0&&(n=lo),e.theme!==n.theme&&e.theme||t||n.theme},Fj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zj=/(^-|-$)/g;function rp(e){return e.replace(Fj,"-").replace(zj,"")}var rC=function(e){return om(ZO(e)>>>0)};function Kl(e){return typeof e=="string"&&!0}var am=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Bj=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Hj(e,t,n){var r=e[n];am(t)&&am(r)?oC(r,t):e[n]=t}function oC(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(am(a))for(var s in a)Bj(s)&&Hj(e,a[s],s)}return e}var Du=U.createContext();Du.Consumer;function pi(e){var t=O.useContext(Du),n=O.useMemo(function(){return function(r,o){if(!r)return oi(14);if(ia(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?oi(8):o?Qn({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?U.createElement(Du.Provider,{value:n},e.children):null}var op={};function iC(e,t,n){var r=Ob(e),o=!Kl(e),i=t.attrs,a=i===void 0?ju:i,s=t.componentId,l=s===void 0?function(g,y){var _=typeof g!="string"?"sc":rp(g);op[_]=(op[_]||0)+1;var k=_+"-"+rC("5.3.11"+_+op[_]);return y?y+"-"+k:k}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(g){return Kl(g)?"styled."+g:"Styled("+d0(g)+")"}(e):c,f=t.displayName&&t.componentId?rp(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(g,y,_){return e.shouldForwardProp(g,y,_)&&t.shouldForwardProp(g,y,_)}:e.shouldForwardProp);var h,b=new Cj(n,f,r?e.componentStyle:void 0),w=b.isStatic&&a.length===0,v=function(g,y){return function(_,k,S,E){var C=_.attrs,A=_.componentStyle,P=_.defaultProps,L=_.foldedComponentIds,W=_.shouldForwardProp,Z=_.styledComponentId,se=_.target,X=function(z,T,le){z===void 0&&(z=lo);var B=Qn({},T,{theme:z}),_e={};return le.forEach(function(fe){var me,re,Pe,Ce=fe;for(me in ia(Ce)&&(Ce=Ce(B)),Ce)B[me]=_e[me]=me==="className"?(re=_e[me],Pe=Ce[me],re&&Pe?re+" "+Pe:re||Pe):Ce[me]}),[B,_e]}($j(k,O.useContext(Du),P)||lo,k,C),ne=X[0],ee=X[1],M=function(z,T,le,B){var _e=Ij(),fe=Mj(),me=T?z.generateAndInjectStyles(lo,_e,fe):z.generateAndInjectStyles(le,_e,fe);return me}(A,E,ne),V=S,q=ee.$as||k.$as||ee.as||k.as||se,oe=Kl(q),N=ee!==k?Qn({},k,{},ee):k,F={};for(var D in N)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?F.as=N[D]:(W?W(D,a0,q):!oe||a0(D))&&(F[D]=N[D]));return k.style&&ee.style!==k.style&&(F.style=Qn({},k.style,{},ee.style)),F.className=Array.prototype.concat(L,Z,M!==Z?M:null,k.className,ee.className).filter(Boolean).join(" "),F.ref=V,O.createElement(q,F)}(h,g,y,w)};return v.displayName=u,(h=U.forwardRef(v)).attrs=p,h.componentStyle=b,h.displayName=u,h.shouldForwardProp=m,h.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ju,h.styledComponentId=f,h.target=r?e.target:e,h.withComponent=function(g){var y=t.componentId,_=function(S,E){if(S==null)return{};var C,A,P={},L=Object.keys(S);for(A=0;A<L.length;A++)C=L[A],E.indexOf(C)>=0||(P[C]=S[C]);return P}(t,["componentId"]),k=y&&y+"-"+(Kl(g)?g:rp(d0(g)));return iC(g,Qn({},_,{attrs:p,componentId:k}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?oC({},e.defaultProps,g):g}}),Object.defineProperty(h,"toString",{value:function(){return"."+h.styledComponentId}}),o&&uj(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var Y=function(e){return function t(n,r,o){if(o===void 0&&(o=lo),!YO.isValidElementType(r))return oi(1,String(r));var i=function(){return n(r,o,te.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Qn({},o,{},a))},i.attrs=function(a){return t(n,r,Qn({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(iC,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Y[e]=Y(e)});function Tb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=te.apply(void 0,[e].concat(n)).join(""),i=rC(o);return new nC(i,o)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var b0=Object.getOwnPropertySymbols,Uj=Object.prototype.hasOwnProperty,Wj=Object.prototype.propertyIsEnumerable;function Vj(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Yj(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(i){return t[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Gj=Yj()?Object.assign:function(e,t){for(var n,r=Vj(e),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)Uj.call(n,a)&&(r[a]=n[a]);if(b0){o=b0(n);for(var s=0;s<o.length;s++)Wj.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const Mn=pa(Gj);var v0=function(t,n){var r=Mn({},t,n);for(var o in t){var i;!t[o]||typeof n[o]!="object"||Mn(r,(i={},i[o]=Mn(t[o],n[o]),i))}return r},qj=function(t){var n={};return Object.keys(t).sort(function(r,o){return r.localeCompare(o,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(r){n[r]=t[r]}),n},Xj={breakpoints:[40,52,64].map(function(e){return e+"em"})},aC=function(t){return"@media screen and (min-width: "+t+")"},Kj=function(t,n){return mo(n,t,t)},mo=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},Rb=function e(t){var n={},r=function(a){var s={},l=!1,c=a.theme&&a.theme.disableStyledSystemCache;for(var u in a)if(t[u]){var f=t[u],p=a[u],m=mo(a.theme,f.scale,f.defaults);if(typeof p=="object"){if(n.breakpoints=!c&&n.breakpoints||mo(a.theme,"breakpoints",Xj.breakpoints),Array.isArray(p)){n.media=!c&&n.media||[null].concat(n.breakpoints.map(aC)),s=v0(s,Qj(n.media,f,m,p,a));continue}p!==null&&(s=v0(s,Jj(n.breakpoints,f,m,p,a)),l=!0);continue}Mn(s,f(p,m,a))}return l&&(s=qj(s)),s};r.config=t,r.propNames=Object.keys(t),r.cache=n;var o=Object.keys(t).filter(function(i){return i!=="config"});return o.length>1&&o.forEach(function(i){var a;r[i]=e((a={},a[i]=t[i],a))}),r},Qj=function(t,n,r,o,i){var a={};return o.slice(0,t.length).forEach(function(s,l){var c=t[l],u=n(s,r,i);if(!c)Mn(a,u);else{var f;Mn(a,(f={},f[c]=Mn({},a[c],u),f))}}),a},Jj=function(t,n,r,o,i){var a={};for(var s in o){var l=t[s],c=o[s],u=n(c,r,i);if(!l)Mn(a,u);else{var f,p=aC(l);Mn(a,(f={},f[p]=Mn({},a[p],u),f))}}return a},y0=function(t){var n=t.properties,r=t.property,o=t.scale,i=t.transform,a=i===void 0?Kj:i,s=t.defaultScale;n=n||[r];var l=function(u,f,p){var m={},h=a(u,f,p);if(h!==null)return n.forEach(function(b){m[b]=h}),m};return l.scale=o,l.defaults=s,l},Nn=function(t){t===void 0&&(t={});var n={};Object.keys(t).forEach(function(o){var i=t[o];if(i===!0){n[o]=y0({property:o,scale:o});return}if(typeof i=="function"){n[o]=i;return}n[o]=y0(i)});var r=Rb(n);return r},Zj=function(){for(var t={},n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];r.forEach(function(a){!a||!a.config||Mn(t,a.config)});var i=Rb(t);return i},eL=function(t){return typeof t=="number"&&!isNaN(t)},tL=function(t,n){return mo(n,t,!eL(t)||t>1?t:t*100+"%")},nL={width:{property:"width",scale:"sizes",transform:tL},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0},bn=Nn(nL),sm={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};sm.bg=sm.backgroundColor;var sC=Nn(sm),rL={fontSizes:[12,14,16,20,24,32,48,64,72]},oL={fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:rL.fontSizes},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0},hi=Nn(oL),iL={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0},rn=Nn(iL),ip={space:[0,4,8,16,32,64,128,256,512]},aL={gridGap:{property:"gridGap",scale:"space",defaultScale:ip.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:ip.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:ip.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},vn=Nn(aL),yt={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"}};yt.borderTopWidth={property:"borderTopWidth",scale:"borderWidths"};yt.borderTopColor={property:"borderTopColor",scale:"colors"};yt.borderTopStyle={property:"borderTopStyle",scale:"borderStyles"};yt.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"};yt.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"};yt.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"};yt.borderBottomColor={property:"borderBottomColor",scale:"colors"};yt.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"};yt.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"};yt.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"};yt.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"};yt.borderLeftColor={property:"borderLeftColor",scale:"colors"};yt.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"};yt.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"};yt.borderRightColor={property:"borderRightColor",scale:"colors"};yt.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var wo=Nn(yt),_r={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};_r.bgImage=_r.backgroundImage;_r.bgSize=_r.backgroundSize;_r.bgPosition=_r.backgroundPosition;_r.bgRepeat=_r.backgroundRepeat;var ef=Nn(_r),Ql={space:[0,4,8,16,32,64,128,256,512]},sL={position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:Ql.space},right:{property:"right",scale:"space",defaultScale:Ql.space},bottom:{property:"bottom",scale:"space",defaultScale:Ql.space},left:{property:"left",scale:"space",defaultScale:Ql.space}},hl=Nn(sL),jt={space:[0,4,8,16,32,64,128,256,512]},x0=function(t){return typeof t=="number"&&!isNaN(t)},Oo=function(t,n){if(!x0(t))return mo(n,t,t);var r=t<0,o=Math.abs(t),i=mo(n,o,o);return x0(i)?i*(r?-1:1):r?"-"+i:i},we={};we.margin={margin:{property:"margin",scale:"space",transform:Oo,defaultScale:jt.space},marginTop:{property:"marginTop",scale:"space",transform:Oo,defaultScale:jt.space},marginRight:{property:"marginRight",scale:"space",transform:Oo,defaultScale:jt.space},marginBottom:{property:"marginBottom",scale:"space",transform:Oo,defaultScale:jt.space},marginLeft:{property:"marginLeft",scale:"space",transform:Oo,defaultScale:jt.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:Oo,defaultScale:jt.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:Oo,defaultScale:jt.space}};we.margin.m=we.margin.margin;we.margin.mt=we.margin.marginTop;we.margin.mr=we.margin.marginRight;we.margin.mb=we.margin.marginBottom;we.margin.ml=we.margin.marginLeft;we.margin.mx=we.margin.marginX;we.margin.my=we.margin.marginY;we.padding={padding:{property:"padding",scale:"space",defaultScale:jt.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:jt.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:jt.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:jt.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:jt.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:jt.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:jt.space}};we.padding.p=we.padding.padding;we.padding.pt=we.padding.paddingTop;we.padding.pr=we.padding.paddingRight;we.padding.pb=we.padding.paddingBottom;we.padding.pl=we.padding.paddingLeft;we.padding.px=we.padding.paddingX;we.padding.py=we.padding.paddingY;var lL=Nn(we.margin),cL=Nn(we.padding),qs=Zj(lL,cL);Nn({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function Xs(){return Xs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xs.apply(this,arguments)}var Vn=function(t,n,r,o,i){for(n=n&&n.split?n.split("."):[n],o=0;o<n.length;o++)t=t?t[n[o]]:i;return t===i?r:t},uL=[40,52,64].map(function(e){return e+"em"}),dL={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},fL={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},w0={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},pL={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},hL=function(t,n){if(typeof n!="number"||n>=0)return Vn(t,n,n);var r=Math.abs(n),o=Vn(t,r,r);return typeof o=="string"?"-"+o:o*-1},mL=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,t){var n;return Xs({},e,(n={},n[t]=hL,n))},{}),gL=function(t){return function(n){var r={},o=Vn(n,"breakpoints",uL),i=[null].concat(o.map(function(u){return"@media screen and (min-width: "+u+")"}));for(var a in t){var s=typeof t[a]=="function"?t[a](n):t[a];if(s!=null){if(!Array.isArray(s)){r[a]=s;continue}for(var l=0;l<s.slice(0,i.length).length;l++){var c=i[l];if(!c){r[a]=s[l];continue}r[c]=r[c]||{},s[l]!=null&&(r[c][a]=s[l])}}}return r}},bL=function e(t){return function(n){n===void 0&&(n={});var r=Xs({},dL,{},n.theme||n),o={},i=typeof t=="function"?t(r):t,a=gL(i)(r);for(var s in a){var l=a[s],c=typeof l=="function"?l(r):l;if(s==="variant"){var u=e(Vn(r,c))(r);o=Xs({},o,{},u);continue}if(c&&typeof c=="object"){o[s]=e(c)(r);continue}var f=Vn(fL,s,s),p=Vn(pL,f),m=Vn(r,p,Vn(r,f,{})),h=Vn(mL,f,Vn),b=h(m,c,c);if(w0[f])for(var w=w0[f],v=0;v<w.length;v++)o[w[v]]=b;else o[f]=b}return o}},Cn=function(t){var n,r=t.scale,o=t.prop,i=o===void 0?"variant":o,a=t.variants,s=a===void 0?{}:a,l=t.key,c;Object.keys(s).length?c=function(m,h,b){return bL(mo(h,m,null))(b.theme)}:c=function(m,h){return mo(h,m,null)},c.scale=r||l,c.defaults=s;var u=(n={},n[i]=c,n),f=Rb(u);return f};Cn({key:"buttons"});Cn({key:"textStyles",prop:"textStyle"});var Zt=Cn({key:"colorStyles",prop:"colors"});bn.width;bn.height;bn.minWidth;bn.minHeight;bn.maxWidth;bn.maxHeight;bn.size;bn.verticalAlign;bn.display;bn.overflow;bn.overflowX;bn.overflowY;sC.opacity;hi.fontSize;hi.fontFamily;hi.fontWeight;hi.lineHeight;hi.textAlign;hi.fontStyle;hi.letterSpacing;rn.alignItems;rn.alignContent;rn.justifyItems;rn.justifyContent;rn.flexWrap;rn.flexDirection;rn.flex;rn.flexGrow;rn.flexShrink;rn.flexBasis;rn.justifySelf;rn.alignSelf;rn.order;vn.gridGap;vn.gridColumnGap;vn.gridRowGap;vn.gridColumn;vn.gridRow;vn.gridAutoFlow;vn.gridAutoColumns;vn.gridAutoRows;vn.gridTemplateColumns;vn.gridTemplateRows;vn.gridTemplateAreas;vn.gridArea;wo.borderWidth;wo.borderStyle;wo.borderColor;wo.borderTop;wo.borderRight;wo.borderBottom;wo.borderLeft;wo.borderRadius;ef.backgroundImage;ef.backgroundSize;ef.backgroundPosition;ef.backgroundRepeat;hl.zIndex;hl.top;hl.right;hl.bottom;hl.left;function Nu(e){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nu(e)}var vL=/^\s+/,yL=/\s+$/;function K(e,t){if(e=e||"",t=t||{},e instanceof K)return e;if(!(this instanceof K))return new K(e,t);var n=xL(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}K.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,o,i,a,s;return n=t.r/255,r=t.g/255,o=t.b/255,n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),.2126*i+.7152*a+.0722*s},setAlpha:function(t){return this._a=lC(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=S0(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=S0(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+o+"%)":"hsva("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var t=_0(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=_0(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+o+"%)":"hsla("+n+", "+r+"%, "+o+"%, "+this._roundA+")"},toHex:function(t){return k0(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return kL(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Ne(this._r,255)*100)+"%",g:Math.round(Ne(this._g,255)*100)+"%",b:Math.round(Ne(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Ne(this._r,255)*100)+"%, "+Math.round(Ne(this._g,255)*100)+"%, "+Math.round(Ne(this._b,255)*100)+"%)":"rgba("+Math.round(Ne(this._r,255)*100)+"%, "+Math.round(Ne(this._g,255)*100)+"%, "+Math.round(Ne(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:DL[k0(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+E0(this._r,this._g,this._b,this._a),r=n,o=this._gradientType?"GradientType = 1, ":"";if(t){var i=K(t);r="#"+E0(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,o=this._a<1&&this._a>=0,i=!n&&o&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return i?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return K(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(TL,arguments)},brighten:function(){return this._applyModification(RL,arguments)},darken:function(){return this._applyModification(PL,arguments)},desaturate:function(){return this._applyModification(EL,arguments)},saturate:function(){return this._applyModification(OL,arguments)},greyscale:function(){return this._applyModification(CL,arguments)},spin:function(){return this._applyModification(AL,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(jL,arguments)},complement:function(){return this._applyCombination(IL,arguments)},monochromatic:function(){return this._applyCombination(LL,arguments)},splitcomplement:function(){return this._applyCombination(ML,arguments)},triad:function(){return this._applyCombination(O0,[3])},tetrad:function(){return this._applyCombination(O0,[4])}};K.fromRatio=function(e,t){if(Nu(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=Za(e[r]));e=n}return K(e,t)};function xL(e){var t={r:0,g:0,b:0},n=1,r=null,o=null,i=null,a=!1,s=!1;return typeof e=="string"&&(e=zL(e)),Nu(e)=="object"&&(or(e.r)&&or(e.g)&&or(e.b)?(t=wL(e.r,e.g,e.b),a=!0,s=String(e.r).substr(-1)==="%"?"prgb":"rgb"):or(e.h)&&or(e.s)&&or(e.v)?(r=Za(e.s),o=Za(e.v),t=SL(e.h,r,o),a=!0,s="hsv"):or(e.h)&&or(e.s)&&or(e.l)&&(r=Za(e.s),i=Za(e.l),t=_L(e.h,r,i),a=!0,s="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=lC(n),{ok:a,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function wL(e,t,n){return{r:Ne(e,255)*255,g:Ne(t,255)*255,b:Ne(n,255)*255}}function _0(e,t,n){e=Ne(e,255),t=Ne(t,255),n=Ne(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=(r+o)/2;if(r==o)i=a=0;else{var l=r-o;switch(a=s>.5?l/(2-r-o):l/(r+o),r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,l:s}}function _L(e,t,n){var r,o,i;e=Ne(e,360),t=Ne(t,100),n=Ne(n,100);function a(c,u,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?c+(u-c)*6*f:f<1/2?u:f<2/3?c+(u-c)*(2/3-f)*6:c}if(t===0)r=o=i=n;else{var s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;r=a(l,s,e+1/3),o=a(l,s,e),i=a(l,s,e-1/3)}return{r:r*255,g:o*255,b:i*255}}function S0(e,t,n){e=Ne(e,255),t=Ne(t,255),n=Ne(n,255);var r=Math.max(e,t,n),o=Math.min(e,t,n),i,a,s=r,l=r-o;if(a=r===0?0:l/r,r==o)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4;break}i/=6}return{h:i,s:a,v:s}}function SL(e,t,n){e=Ne(e,360)*6,t=Ne(t,100),n=Ne(n,100);var r=Math.floor(e),o=e-r,i=n*(1-t),a=n*(1-o*t),s=n*(1-(1-o)*t),l=r%6,c=[n,a,i,i,s,n][l],u=[s,n,n,a,i,i][l],f=[i,i,s,n,n,a][l];return{r:c*255,g:u*255,b:f*255}}function k0(e,t,n,r){var o=[Tn(Math.round(e).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function kL(e,t,n,r,o){var i=[Tn(Math.round(e).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(n).toString(16)),Tn(cC(r))];return o&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function E0(e,t,n,r){var o=[Tn(cC(r)),Tn(Math.round(e).toString(16)),Tn(Math.round(t).toString(16)),Tn(Math.round(n).toString(16))];return o.join("")}K.equals=function(e,t){return!e||!t?!1:K(e).toRgbString()==K(t).toRgbString()};K.random=function(){return K.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function EL(e,t){t=t===0?0:t||10;var n=K(e).toHsl();return n.s-=t/100,n.s=tf(n.s),K(n)}function OL(e,t){t=t===0?0:t||10;var n=K(e).toHsl();return n.s+=t/100,n.s=tf(n.s),K(n)}function CL(e){return K(e).desaturate(100)}function TL(e,t){t=t===0?0:t||10;var n=K(e).toHsl();return n.l+=t/100,n.l=tf(n.l),K(n)}function RL(e,t){t=t===0?0:t||10;var n=K(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),K(n)}function PL(e,t){t=t===0?0:t||10;var n=K(e).toHsl();return n.l-=t/100,n.l=tf(n.l),K(n)}function AL(e,t){var n=K(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,K(n)}function IL(e){var t=K(e).toHsl();return t.h=(t.h+180)%360,K(t)}function O0(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=K(e).toHsl(),r=[K(e)],o=360/t,i=1;i<t;i++)r.push(K({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function ML(e){var t=K(e).toHsl(),n=t.h;return[K(e),K({h:(n+72)%360,s:t.s,l:t.l}),K({h:(n+216)%360,s:t.s,l:t.l})]}function jL(e,t,n){t=t||6,n=n||30;var r=K(e).toHsl(),o=360/n,i=[K(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(K(r));return i}function LL(e,t){t=t||6;for(var n=K(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],s=1/t;t--;)a.push(K({h:r,s:o,v:i})),i=(i+s)%1;return a}K.mix=function(e,t,n){n=n===0?0:n||50;var r=K(e).toRgb(),o=K(t).toRgb(),i=n/100,a={r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a};return K(a)};K.readability=function(e,t){var n=K(e),r=K(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};K.isReadable=function(e,t,n){var r=K.readability(e,t),o,i;switch(i=!1,o=BL(n),o.level+o.size){case"AAsmall":case"AAAlarge":i=r>=4.5;break;case"AAlarge":i=r>=3;break;case"AAAsmall":i=r>=7;break}return i};K.mostReadable=function(e,t,n){var r=null,o=0,i,a,s,l;n=n||{},a=n.includeFallbackColors,s=n.level,l=n.size;for(var c=0;c<t.length;c++)i=K.readability(e,t[c]),i>o&&(o=i,r=K(t[c]));return K.isReadable(e,r,{level:s,size:l})||!a?r:(n.includeFallbackColors=!1,K.mostReadable(e,["#fff","#000"],n))};var lm=K.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},DL=K.hexNames=NL(lm);function NL(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function lC(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ne(e,t){$L(e)&&(e="100%");var n=FL(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function tf(e){return Math.min(1,Math.max(0,e))}function Vt(e){return parseInt(e,16)}function $L(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function FL(e){return typeof e=="string"&&e.indexOf("%")!=-1}function Tn(e){return e.length==1?"0"+e:""+e}function Za(e){return e<=1&&(e=e*100+"%"),e}function cC(e){return Math.round(parseFloat(e)*255).toString(16)}function C0(e){return Vt(e)/255}var _n=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",o="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+o),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+o),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function or(e){return!!_n.CSS_UNIT.exec(e)}function zL(e){e=e.replace(vL,"").replace(yL,"").toLowerCase();var t=!1;if(lm[e])e=lm[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=_n.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=_n.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=_n.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=_n.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=_n.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=_n.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=_n.hex8.exec(e))?{r:Vt(n[1]),g:Vt(n[2]),b:Vt(n[3]),a:C0(n[4]),format:t?"name":"hex8"}:(n=_n.hex6.exec(e))?{r:Vt(n[1]),g:Vt(n[2]),b:Vt(n[3]),format:t?"name":"hex"}:(n=_n.hex4.exec(e))?{r:Vt(n[1]+""+n[1]),g:Vt(n[2]+""+n[2]),b:Vt(n[3]+""+n[3]),a:C0(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=_n.hex3.exec(e))?{r:Vt(n[1]+""+n[1]),g:Vt(n[2]+""+n[2]),b:Vt(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function BL(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}function HL(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function cm(e,t){return cm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},cm(e,t)}function UL(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,cm(e,t)}function WL(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function VL(e,t){e.classList?e.classList.add(t):WL(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function T0(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function YL(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=T0(e.className,t):e.setAttribute("class",T0(e.className&&e.className.baseVal||"",t))}const R0={disabled:!1},uC=U.createContext(null);var GL=function(t){return t.scrollTop},es="unmounted",jo="exited",Br="entering",$o="entered",um="exiting",Cr=function(e){UL(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=jo,i.appearStatus=Br):l=$o:r.unmountOnExit||r.mountOnEnter?l=es:l=jo,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===es?{status:jo}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==Br&&a!==$o&&(i=Br):(a===Br||a===$o)&&(i=um)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===Br){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Bi.findDOMNode(this);a&&GL(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===jo&&this.setState({status:es})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,l=this.props.nodeRef?[s]:[Bi.findDOMNode(this),s],c=l[0],u=l[1],f=this.getTimeouts(),p=s?f.appear:f.enter;if(!o&&!a||R0.disabled){this.safeSetState({status:$o},function(){i.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:Br},function(){i.props.onEntering(c,u),i.onTransitionEnd(p,function(){i.safeSetState({status:$o},function(){i.props.onEntered(c,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:Bi.findDOMNode(this);if(!i||R0.disabled){this.safeSetState({status:jo},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:um},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:jo},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Bi.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===es)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=HL(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return U.createElement(uC.Provider,{value:null},typeof a=="function"?a(o,s):U.cloneElement(U.Children.only(a),s))},t}(U.Component);Cr.contextType=uC;Cr.propTypes={};function xi(){}Cr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:xi,onEntering:xi,onEntered:xi,onExit:xi,onExiting:xi,onExited:xi};Cr.UNMOUNTED=es;Cr.EXITED=jo;Cr.ENTERING=Br;Cr.ENTERED=$o;Cr.EXITING=um;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var dC=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],$u=dC.join(","),fC=typeof Element>"u",ii=fC?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,dm=!fC&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},pC=function(t,n,r){var o=Array.prototype.slice.apply(t.querySelectorAll($u));return n&&ii.call(t,$u)&&o.unshift(t),o=o.filter(r),o},hC=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(a.tagName==="SLOT"){var s=a.assignedElements(),l=s.length?s:a.children,c=e(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scope:a,candidates:c})}else{var u=ii.call(a,$u);u&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var f=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),p=!r.shadowRootFilter||r.shadowRootFilter(a);if(f&&p){var m=e(f===!0?a.children:f.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scope:a,candidates:m})}else i.unshift.apply(i,a.children)}}return o},mC=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},qL=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},gC=function(t){return t.tagName==="INPUT"},XL=function(t){return gC(t)&&t.type==="hidden"},KL=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},QL=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},JL=function(t){if(!t.name)return!0;var n=t.form||dm(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=QL(o,t.form);return!i||i===t},ZL=function(t){return gC(t)&&t.type==="radio"},eD=function(t){return ZL(t)&&!JL(t)},P0=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},tD=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=ii.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(ii.call(a,"details:not([open]) *"))return!0;var s=dm(t).host,l=(s==null?void 0:s.ownerDocument.contains(s))||t.ownerDocument.contains(t);if(!r||r==="full"){if(typeof o=="function"){for(var c=t;t;){var u=t.parentElement,f=dm(t);if(u&&!u.shadowRoot&&o(u)===!0)return P0(t);t.assignedSlot?t=t.assignedSlot:!u&&f!==t.ownerDocument?t=f.host:t=u}t=c}if(l)return!t.getClientRects().length}else if(r==="non-zero-area")return P0(t);return!1},nD=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return ii.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Fu=function(t,n){return!(n.disabled||XL(n)||tD(n,t)||KL(n)||nD(n))},fm=function(t,n){return!(eD(n)||mC(n)<0||!Fu(t,n))},rD=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},oD=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scope,s=a?o.scope:o,l=mC(s,a),c=a?e(o.candidates):s;l===0?a?n.push.apply(n,c):n.push(s):r.push({documentOrder:i,tabIndex:l,item:o,isScope:a,content:c})}),r.sort(qL).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},bC=function(t,n){n=n||{};var r;return n.getShadowRoot?r=hC([t],n.includeContainer,{filter:fm.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:rD}):r=pC(t,n.includeContainer,fm.bind(null,n)),oD(r)},vC=function(t,n){n=n||{};var r;return n.getShadowRoot?r=hC([t],n.includeContainer,{filter:Fu.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=pC(t,n.includeContainer,Fu.bind(null,n)),r},ts=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return ii.call(t,$u)===!1?!1:fm(n,t)},iD=dC.concat("iframe").join(","),Vc=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return ii.call(t,iD)===!1?!1:Fu(n,t)};const aD=Object.freeze(Object.defineProperty({__proto__:null,focusable:vC,isFocusable:Vc,isTabbable:ts,tabbable:bC},Symbol.toStringTag,{value:"Module"}));/*!
* focus-trap 6.9.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function A0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function I0(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?A0(Object(n),!0).forEach(function(r){sD(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function sD(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M0=function(){var e=[];return{activateTrap:function(n){if(e.length>0){var r=e[e.length-1];r!==n&&r.pause()}var o=e.indexOf(n);o===-1||e.splice(o,1),e.push(n)},deactivateTrap:function(n){var r=e.indexOf(n);r!==-1&&e.splice(r,1),e.length>0&&e[e.length-1].unpause()}}}(),lD=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},cD=function(t){return t.key==="Escape"||t.key==="Esc"||t.keyCode===27},uD=function(t){return t.key==="Tab"||t.keyCode===9},j0=function(t){return setTimeout(t,0)},L0=function(t,n){var r=-1;return t.every(function(o,i){return n(o)?(r=i,!1):!0}),r},Da=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return typeof t=="function"?t.apply(void 0,r):t},Jl=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},dD=function(t,n){var r=(n==null?void 0:n.document)||document,o=I0({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),i={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},a,s=function(S,E,C){return S&&S[E]!==void 0?S[E]:o[C||E]},l=function(S){return i.containerGroups.findIndex(function(E){var C=E.container,A=E.tabbableNodes;return C.contains(S)||A.find(function(P){return P===S})})},c=function(S){var E=o[S];if(typeof E=="function"){for(var C=arguments.length,A=new Array(C>1?C-1:0),P=1;P<C;P++)A[P-1]=arguments[P];E=E.apply(void 0,A)}if(E===!0&&(E=void 0),!E){if(E===void 0||E===!1)return E;throw new Error("`".concat(S,"` was specified but was not a node, or did not return a node"))}var L=E;if(typeof E=="string"&&(L=r.querySelector(E),!L))throw new Error("`".concat(S,"` as selector refers to no known node"));return L},u=function(){var S=c("initialFocus");if(S===!1)return!1;if(S===void 0)if(l(r.activeElement)>=0)S=r.activeElement;else{var E=i.tabbableGroups[0],C=E&&E.firstTabbableNode;S=C||c("fallbackFocus")}if(!S)throw new Error("Your focus-trap needs to have at least one focusable element");return S},f=function(){if(i.containerGroups=i.containers.map(function(S){var E=bC(S,o.tabbableOptions),C=vC(S,o.tabbableOptions);return{container:S,tabbableNodes:E,focusableNodes:C,firstTabbableNode:E.length>0?E[0]:null,lastTabbableNode:E.length>0?E[E.length-1]:null,nextTabbableNode:function(P){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,W=C.findIndex(function(Z){return Z===P});if(!(W<0))return L?C.slice(W+1).find(function(Z){return ts(Z,o.tabbableOptions)}):C.slice(0,W).reverse().find(function(Z){return ts(Z,o.tabbableOptions)})}}}),i.tabbableGroups=i.containerGroups.filter(function(S){return S.tabbableNodes.length>0}),i.tabbableGroups.length<=0&&!c("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function k(S){if(S!==!1&&S!==r.activeElement){if(!S||!S.focus){k(u());return}S.focus({preventScroll:!!o.preventScroll}),i.mostRecentlyFocusedNode=S,lD(S)&&S.select()}},m=function(S){var E=c("setReturnFocus",S);return E||(E===!1?!1:S)},h=function(S){var E=Jl(S);if(!(l(E)>=0)){if(Da(o.clickOutsideDeactivates,S)){a.deactivate({returnFocus:o.returnFocusOnDeactivate&&!Vc(E,o.tabbableOptions)});return}Da(o.allowOutsideClick,S)||S.preventDefault()}},b=function(S){var E=Jl(S),C=l(E)>=0;C||E instanceof Document?C&&(i.mostRecentlyFocusedNode=E):(S.stopImmediatePropagation(),p(i.mostRecentlyFocusedNode||u()))},w=function(S){var E=Jl(S);f();var C=null;if(i.tabbableGroups.length>0){var A=l(E),P=A>=0?i.containerGroups[A]:void 0;if(A<0)S.shiftKey?C=i.tabbableGroups[i.tabbableGroups.length-1].lastTabbableNode:C=i.tabbableGroups[0].firstTabbableNode;else if(S.shiftKey){var L=L0(i.tabbableGroups,function(ee){var M=ee.firstTabbableNode;return E===M});if(L<0&&(P.container===E||Vc(E,o.tabbableOptions)&&!ts(E,o.tabbableOptions)&&!P.nextTabbableNode(E,!1))&&(L=A),L>=0){var W=L===0?i.tabbableGroups.length-1:L-1,Z=i.tabbableGroups[W];C=Z.lastTabbableNode}}else{var se=L0(i.tabbableGroups,function(ee){var M=ee.lastTabbableNode;return E===M});if(se<0&&(P.container===E||Vc(E,o.tabbableOptions)&&!ts(E,o.tabbableOptions)&&!P.nextTabbableNode(E))&&(se=A),se>=0){var X=se===i.tabbableGroups.length-1?0:se+1,ne=i.tabbableGroups[X];C=ne.firstTabbableNode}}}else C=c("fallbackFocus");C&&(S.preventDefault(),p(C))},v=function(S){if(cD(S)&&Da(o.escapeDeactivates,S)!==!1){S.preventDefault(),a.deactivate();return}if(uD(S)){w(S);return}},g=function(S){var E=Jl(S);l(E)>=0||Da(o.clickOutsideDeactivates,S)||Da(o.allowOutsideClick,S)||(S.preventDefault(),S.stopImmediatePropagation())},y=function(){if(i.active)return M0.activateTrap(a),i.delayInitialFocusTimer=o.delayInitialFocus?j0(function(){p(u())}):p(u()),r.addEventListener("focusin",b,!0),r.addEventListener("mousedown",h,{capture:!0,passive:!1}),r.addEventListener("touchstart",h,{capture:!0,passive:!1}),r.addEventListener("click",g,{capture:!0,passive:!1}),r.addEventListener("keydown",v,{capture:!0,passive:!1}),a},_=function(){if(i.active)return r.removeEventListener("focusin",b,!0),r.removeEventListener("mousedown",h,!0),r.removeEventListener("touchstart",h,!0),r.removeEventListener("click",g,!0),r.removeEventListener("keydown",v,!0),a};return a={get active(){return i.active},get paused(){return i.paused},activate:function(S){if(i.active)return this;var E=s(S,"onActivate"),C=s(S,"onPostActivate"),A=s(S,"checkCanFocusTrap");A||f(),i.active=!0,i.paused=!1,i.nodeFocusedBeforeActivation=r.activeElement,E&&E();var P=function(){A&&f(),y(),C&&C()};return A?(A(i.containers.concat()).then(P,P),this):(P(),this)},deactivate:function(S){if(!i.active)return this;var E=I0({onDeactivate:o.onDeactivate,onPostDeactivate:o.onPostDeactivate,checkCanReturnFocus:o.checkCanReturnFocus},S);clearTimeout(i.delayInitialFocusTimer),i.delayInitialFocusTimer=void 0,_(),i.active=!1,i.paused=!1,M0.deactivateTrap(a);var C=s(E,"onDeactivate"),A=s(E,"onPostDeactivate"),P=s(E,"checkCanReturnFocus"),L=s(E,"returnFocus","returnFocusOnDeactivate");C&&C();var W=function(){j0(function(){L&&p(m(i.nodeFocusedBeforeActivation)),A&&A()})};return L&&P?(P(m(i.nodeFocusedBeforeActivation)).then(W,W),this):(W(),this)},pause:function(){return i.paused||!i.active?this:(i.paused=!0,_(),this)},unpause:function(){return!i.paused||!i.active?this:(i.paused=!1,f(),y(),this)},updateContainerElements:function(S){var E=[].concat(S).filter(Boolean);return i.containers=E.map(function(C){return typeof C=="string"?r.querySelector(C):C}),i.active&&f(),this}},a.updateContainerElements(t),a};const fD=Object.freeze(Object.defineProperty({__proto__:null,createFocusTrap:dD},Symbol.toStringTag,{value:"Module"})),pD=GS(fD),hD=GS(aD);function pm(e){"@babel/helpers - typeof";return pm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pm(e)}function mD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gD(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bD(e,t,n){return t&&gD(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function vD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hm(e,t)}function hm(e,t){return hm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},hm(e,t)}function yD(e){var t=wD();return function(){var r=zu(e),o;if(t){var i=zu(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return xD(this,o)}}function xD(e,t){if(t&&(pm(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ns(e)}function ns(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wD(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zu(e){return zu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zu(e)}function _D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zl=O,SD=kd,ce=fi,kD=pD,ED=kD.createFocusTrap,OD=hD,CD=OD.isFocusable,yC=function(e){vD(n,e);var t=yD(n);function n(r){var o;mD(this,n),o=t.call(this,r),_D(ns(o),"getNodeForOption",function(s){var l,c=(l=this.internalOptions[s])!==null&&l!==void 0?l:this.originalOptions[s];if(typeof c=="function"){for(var u=arguments.length,f=new Array(u>1?u-1:0),p=1;p<u;p++)f[p-1]=arguments[p];c=c.apply(void 0,f)}if(c===!0&&(c=void 0),!c){if(c===void 0||c===!1)return c;throw new Error("`".concat(s,"` was specified but was not a node, or did not return a node"))}var m=c;if(typeof c=="string"){var h;if(m=(h=this.getDocument())===null||h===void 0?void 0:h.querySelector(c),!m)throw new Error("`".concat(s,"` as selector refers to no known node"))}return m}),o.handleDeactivate=o.handleDeactivate.bind(ns(o)),o.handlePostDeactivate=o.handlePostDeactivate.bind(ns(o)),o.handleClickOutsideDeactivates=o.handleClickOutsideDeactivates.bind(ns(o)),o.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:o.handleDeactivate,onPostDeactivate:o.handlePostDeactivate,clickOutsideDeactivates:o.handleClickOutsideDeactivates},o.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var i=r.focusTrapOptions;for(var a in i)if(Object.prototype.hasOwnProperty.call(i,a)){if(a==="returnFocusOnDeactivate"||a==="onDeactivate"||a==="onPostDeactivate"||a==="checkCanReturnFocus"||a==="clickOutsideDeactivates"){o.originalOptions[a]=i[a];continue}o.internalOptions[a]=i[a]}return o.outsideClick=null,o.focusTrapElements=r.containerElements||[],o.updatePreviousElement(),o}return bD(n,[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||(typeof document<"u"?document:void 0)}},{key:"getReturnFocusNode",value:function(){var o=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return o||(o===!1?!1:this.previouslyFocusedElement)}},{key:"updatePreviousElement",value:function(){var o=this.getDocument();o&&(this.previouslyFocusedElement=o.activeElement)}},{key:"deactivateTrap",value:function(){!this.focusTrap||!this.focusTrap.active||this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(o){var i=typeof this.originalOptions.clickOutsideDeactivates=="function"?this.originalOptions.clickOutsideDeactivates.call(null,o):this.originalOptions.clickOutsideDeactivates;return i&&(this.outsideClick={target:o.target,allowDeactivation:i}),i}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var o=this,i=function(){var s=o.getReturnFocusNode(),l=!!(o.originalOptions.returnFocusOnDeactivate&&s!==null&&s!==void 0&&s.focus&&(!o.outsideClick||o.outsideClick.allowDeactivation&&!CD(o.outsideClick.target,o.internalOptions.tabbableOptions))),c=o.internalOptions.preventScroll,u=c===void 0?!1:c;l&&s.focus({preventScroll:u}),o.originalOptions.onPostDeactivate&&o.originalOptions.onPostDeactivate.call(null),o.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(i,i):i()}},{key:"setupFocusTrap",value:function(){if(!this.focusTrap){var o=this.focusTrapElements.map(SD.findDOMNode),i=o.some(Boolean);i&&(this.focusTrap=this.props._createFocusTrap(o,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(o){if(this.focusTrap){o.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var i=!o.active&&this.props.active,a=o.active&&!this.props.active,s=!o.paused&&this.props.paused,l=o.paused&&!this.props.paused;if(i&&(this.updatePreviousElement(),this.focusTrap.activate()),a){this.deactivateTrap();return}s&&this.focusTrap.pause(),l&&this.focusTrap.unpause()}else o.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var o=this,i=this.props.children?Zl.Children.only(this.props.children):void 0;if(i){if(i.type&&i.type===Zl.Fragment)throw new Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");var a=function(c){var u=o.props.containerElements;i&&(typeof i.ref=="function"?i.ref(c):i.ref&&(i.ref.current=c)),o.focusTrapElements=u||[c]},s=Zl.cloneElement(i,{ref:a});return s}return null}}]),n}(Zl.Component),Na=typeof Element>"u"?Function:Element;yC.propTypes={active:ce.bool,paused:ce.bool,focusTrapOptions:ce.shape({document:ce.object,onActivate:ce.func,onPostActivate:ce.func,checkCanFocusTrap:ce.func,onDeactivate:ce.func,onPostDeactivate:ce.func,checkCanReturnFocus:ce.func,initialFocus:ce.oneOfType([ce.instanceOf(Na),ce.string,ce.bool,ce.func]),fallbackFocus:ce.oneOfType([ce.instanceOf(Na),ce.string,ce.func]),escapeDeactivates:ce.oneOfType([ce.bool,ce.func]),clickOutsideDeactivates:ce.oneOfType([ce.bool,ce.func]),returnFocusOnDeactivate:ce.bool,setReturnFocus:ce.oneOfType([ce.instanceOf(Na),ce.string,ce.bool,ce.func]),allowOutsideClick:ce.oneOfType([ce.bool,ce.func]),preventScroll:ce.bool,tabbableOptions:ce.shape({displayCheck:ce.oneOf(["full","non-zero-area","none"]),getShadowRoot:ce.oneOfType([ce.bool,ce.func])})}),containerElements:ce.arrayOf(ce.instanceOf(Na)),children:ce.oneOfType([ce.element,ce.instanceOf(Na)])};yC.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:ED};var mm=O,TD=fi,RD=UO;function Pb(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var Gn=Pb(mm),st=Pb(TD),ap=Pb(RD);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yn=function(){return Yn=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Yn.apply(this,arguments)};function gm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var PD="range-slider",AD=Gn.default.forwardRef(function(e,t){var n=e.classes,r=e.value,o=e.min,i=e.max,a=e.onChange,s=e.onMouseUpOrTouchEnd,l=e.onMouseUp,c=e.onTouchEnd,u=gm(e,["classes","value","min","max","onChange","onMouseUpOrTouchEnd","onMouseUp","onTouchEnd"]);return Gn.default.createElement("input",Yn({ref:t,type:"range",value:r,min:o,max:i,onChange:function(f){return a(f,f.target.valueAsNumber)},onMouseUp:function(f){s(f),l&&l(f)},onTouchEnd:function(f){s(f),c&&c(f)},className:n,"aria-valuenow":Number(r),"aria-valuemin":Number(o),"aria-valuemax":Number(i)},u))}),ID=Gn.default.memo(AD),xC=Gn.default.forwardRef(function(e,t){var n=e.value,r=e.onChange,o=r===void 0?function(){}:r,i=e.onAfterChange,a=i===void 0?function(){}:i,s=e.disabled,l=s===void 0?!1:s,c=e.size,u=e.min,f=u===void 0?0:u,p=e.max,m=p===void 0?100:p,h=e.step,b=e.variant,w=b===void 0?"primary":b,v=e.inputProps,g=v===void 0?{}:v,y=e.tooltip,_=y===void 0?"auto":y,k=e.tooltipPlacement,S=k===void 0?"bottom":k,E=e.tooltipLabel,C=e.tooltipStyle,A=C===void 0?{}:C,P=e.tooltipProps,L=P===void 0?{}:P,W=e.bsPrefix,Z=e.className,se=gm(e,["value","onChange","onAfterChange","disabled","size","min","max","step","variant","inputProps","tooltip","tooltipPlacement","tooltipLabel","tooltipStyle","tooltipProps","bsPrefix","className"]),X=mm.useState(),ne=X[0],ee=X[1],M=W||PD,V=_==="auto"||_==="on",q=ap.default(Z,M,c&&M+"--"+c,l&&"disabled",w&&M+"--"+w),oe=Yn(Yn({},g),se),N=oe.onMouseUp,F=oe.onTouchEnd,D=gm(oe,["onMouseUp","onTouchEnd"]),z=mm.useCallback(function(Ce){ne!==Ce.target.value&&a(Ce,Ce.target.valueAsNumber),ee(Ce.target.value)},[ne,a]),T=Gn.default.createElement(ID,Yn({},Yn({disabled:l,value:n,min:f,max:m,ref:t,step:h,classes:q,onMouseUpOrTouchEnd:z,onTouchEnd:F,onMouseUp:N,onChange:o},D))),le=ap.default(M+"__wrap",c&&M+"__wrap--"+c),B=ap.default(M+"__tooltip",V&&M+"__tooltip--"+_,S&&M+"__tooltip--"+S,l&&M+"__tooltip--disabled"),_e=c==="sm"?8:c==="lg"?12:10,fe=(Number(n)-f)/(m-f),me=fe*100,re=(fe-.5)*2,Pe=re*-_e;return Gn.default.createElement("span",{className:le},T,V&&Gn.default.createElement("div",Yn({className:B,style:Yn(Yn({},A||{}),{left:"calc("+me+"% + "+Pe+"px)"})},L),Gn.default.createElement("div",{className:M+"__tooltip__label"},E?E(Number(n)):n),Gn.default.createElement("div",{className:M+"__tooltip__caret"})))});xC.propTypes={value:st.default.oneOfType([st.default.number,st.default.string]).isRequired,onChange:st.default.func,onAfterChange:st.default.func,min:st.default.number,max:st.default.number,step:st.default.number,disabled:st.default.bool,size:st.default.oneOf(["sm","lg"]),variant:st.default.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),inputProps:st.default.object,tooltip:st.default.oneOf(["auto","on","off"]),tooltipPlacement:st.default.oneOf(["top","bottom"]),tooltipLabel:st.default.func,tooltipStyle:st.default.object,tooltipProps:st.default.object,className:st.default.string,bsPrefix:st.default.string};Gn.default.memo(xC);var qe={},Ab={},ml={},gl={},wC="Expected a function",D0=NaN,MD="[object Symbol]",jD=/^\s+|\s+$/g,LD=/^[-+]0x[0-9a-f]+$/i,DD=/^0b[01]+$/i,ND=/^0o[0-7]+$/i,$D=parseInt,FD=typeof Al=="object"&&Al&&Al.Object===Object&&Al,zD=typeof self=="object"&&self&&self.Object===Object&&self,BD=FD||zD||Function("return this")(),HD=Object.prototype,UD=HD.toString,WD=Math.max,VD=Math.min,sp=function(){return BD.Date.now()};function YD(e,t,n){var r,o,i,a,s,l,c=0,u=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(wC);t=N0(t)||0,Bu(n)&&(u=!!n.leading,f="maxWait"in n,i=f?WD(N0(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function m(S){var E=r,C=o;return r=o=void 0,c=S,a=e.apply(C,E),a}function h(S){return c=S,s=setTimeout(v,t),u?m(S):a}function b(S){var E=S-l,C=S-c,A=t-E;return f?VD(A,i-C):A}function w(S){var E=S-l,C=S-c;return l===void 0||E>=t||E<0||f&&C>=i}function v(){var S=sp();if(w(S))return g(S);s=setTimeout(v,b(S))}function g(S){return s=void 0,p&&r?m(S):(r=o=void 0,a)}function y(){s!==void 0&&clearTimeout(s),c=0,r=l=o=s=void 0}function _(){return s===void 0?a:g(sp())}function k(){var S=sp(),E=w(S);if(r=arguments,o=this,l=S,E){if(s===void 0)return h(l);if(f)return s=setTimeout(v,t),m(l)}return s===void 0&&(s=setTimeout(v,t)),a}return k.cancel=y,k.flush=_,k}function GD(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(wC);return Bu(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),YD(e,t,{leading:r,maxWait:t,trailing:o})}function Bu(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function qD(e){return!!e&&typeof e=="object"}function XD(e){return typeof e=="symbol"||qD(e)&&UD.call(e)==MD}function N0(e){if(typeof e=="number")return e;if(XD(e))return D0;if(Bu(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Bu(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(jD,"");var n=DD.test(e);return n||ND.test(e)?$D(e.slice(2),n?2:8):LD.test(e)?D0:+e}var KD=GD,bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.addPassiveEventListener=function(t,n,r){var o=r.name;o||(o=n,console.warn("Listener must be a named function.")),Yc.has(n)||Yc.set(n,new Set);var i=Yc.get(n);if(!i.has(o)){var a=function(){var s=!1;try{var l=Object.defineProperty({},"passive",{get:function(){s=!0}});window.addEventListener("test",null,l)}catch{}return s}();t.addEventListener(n,r,a?{passive:!0}:!1),i.add(o)}};bl.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r),Yc.get(n).delete(r.name||n)};var Yc=new Map;Object.defineProperty(gl,"__esModule",{value:!0});var QD=KD,JD=eN(QD),ZD=bl;function eN(e){return e&&e.__esModule?e:{default:e}}var tN=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,JD.default)(t,n)},Be={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=tN(function(o){Be.scrollHandler(t)},n);Be.scrollSpyContainers.push(t),(0,ZD.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return Be.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=Be.scrollSpyContainers[Be.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(Be.currentPositionX(t),Be.currentPositionY(t))})},addStateHandler:function(t){Be.spySetState.push(t)},addSpyHandler:function(t,n){var r=Be.scrollSpyContainers[Be.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(Be.currentPositionX(n),Be.currentPositionY(n))},updateStates:function(){Be.spySetState.forEach(function(t){return t()})},unmount:function(t,n){Be.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),Be.spySetState&&Be.spySetState.length&&Be.spySetState.indexOf(t)>-1&&Be.spySetState.splice(Be.spySetState.indexOf(t),1),document.removeEventListener("scroll",Be.scrollHandler)},update:function(){return Be.scrollSpyContainers.forEach(function(t){return Be.scrollHandler(t)})}};gl.default=Be;var _a={},vl={};Object.defineProperty(vl,"__esModule",{value:!0});var nN=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,a=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",a):history.replaceState(history.state,"",a)},rN=function(){return window.location.hash.replace(/^#/,"")},oN=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},iN=function(t){return getComputedStyle(t).position!=="static"},lp=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},aN=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(iN(t)){if(n.offsetParent!==t){var o=function(u){return u===t||u===document},i=lp(n,o),a=i.offsetTop,s=i.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return a}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(u){return u===document};return lp(n,l).offsetTop-lp(t,l).offsetTop};vl.default={updateHash:nN,getHash:rN,filterElementInContainer:oN,scrollOffset:aN};var nf={},Ib={};Object.defineProperty(Ib,"__esModule",{value:!0});Ib.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Mb={};Object.defineProperty(Mb,"__esModule",{value:!0});var sN=bl,lN=["mousedown","mousewheel","touchmove","keydown"];Mb.default={subscribe:function(t){return typeof document<"u"&&lN.forEach(function(n){return(0,sN.addPassiveEventListener)(document,n,t)})}};var yl={};Object.defineProperty(yl,"__esModule",{value:!0});var bm={registered:{},scrollEvent:{register:function(t,n){bm.registered[t]=n},remove:function(t){bm.registered[t]=null}}};yl.default=bm;Object.defineProperty(nf,"__esModule",{value:!0});var cN=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uN=vl;rf(uN);var dN=Ib,$0=rf(dN),fN=Mb,pN=rf(fN),hN=yl,qn=rf(hN);function rf(e){return e&&e.__esModule?e:{default:e}}var _C=function(t){return $0.default[t.smooth]||$0.default.defaultEasing},mN=function(t){return typeof t=="function"?t:function(){return t}},gN=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},vm=function(){return gN()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),SC=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},kC=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},EC=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},bN=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},vN=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},yN=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){qn.default.registered.end&&qn.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);vm.call(window,i);return}qn.default.registered.end&&qn.default.registered.end(o.to,o.target,o.currentPosition)},jb=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},xl=function(t,n,r,o){n.data=n.data||SC(),window.clearTimeout(n.data.delayTimeout);var i=function(){n.data.cancel=!0};if(pN.default.subscribe(i),jb(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?kC(n):EC(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){qn.default.registered.end&&qn.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=mN(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var a=_C(n),s=yN.bind(null,a,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){qn.default.registered.begin&&qn.default.registered.begin(n.data.to,n.data.target),vm.call(window,s)},n.delay);return}qn.default.registered.begin&&qn.default.registered.begin(n.data.to,n.data.target),vm.call(window,s)},of=function(t){return t=cN({},t),t.data=t.data||SC(),t.absolute=!0,t},xN=function(t){xl(0,of(t))},wN=function(t,n){xl(t,of(n))},_N=function(t){t=of(t),jb(t),xl(t.horizontal?bN(t):vN(t),t)},SN=function(t,n){n=of(n),jb(n);var r=n.horizontal?kC(n):EC(n);xl(t+r,n)};nf.default={animateTopScroll:xl,getAnimationType:_C,scrollToTop:xN,scrollToBottom:_N,scrollTo:wN,scrollMore:SN};Object.defineProperty(_a,"__esModule",{value:!0});var kN=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},EN=vl,ON=Lb(EN),CN=nf,TN=Lb(CN),RN=yl,ec=Lb(RN);function Lb(e){return e&&e.__esModule?e:{default:e}}var tc={},F0=void 0;_a.default={unmount:function(){tc={}},register:function(t,n){tc[t]=n},unregister:function(t){delete tc[t]},get:function(t){return tc[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return F0=t},getActiveLink:function(){return F0},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=kN({},n,{absolute:!1});var o=n.containerId,i=n.container,a=void 0;o?a=document.getElementById(o):i&&i.nodeType?a=i:a=document,n.absolute=!0;var s=n.horizontal,l=ON.default.scrollOffset(a,r,s)+(n.offset||0);if(!n.smooth){ec.default.registered.begin&&ec.default.registered.begin(t,r),a===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):a.scrollTop=l,ec.default.registered.end&&ec.default.registered.end(t,r);return}TN.default.animateTopScroll(l,n,t,r)}};var af={};Object.defineProperty(af,"__esModule",{value:!0});var PN=vl,cp=AN(PN);function AN(e){return e&&e.__esModule?e:{default:e}}var IN={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return cp.default.getHash()},changeHash:function(t,n){this.isInitialized()&&cp.default.getHash()!==t&&cp.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};af.default=IN;Object.defineProperty(ml,"__esModule",{value:!0});var nc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},MN=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),jN=O,z0=wl(jN),LN=gl,rc=wl(LN),DN=_a,NN=wl(DN),$N=fi,De=wl($N),FN=af,Lr=wl(FN);function wl(e){return e&&e.__esModule?e:{default:e}}function zN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function BN(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function HN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var B0={to:De.default.string.isRequired,containerId:De.default.string,container:De.default.object,activeClass:De.default.string,activeStyle:De.default.object,spy:De.default.bool,horizontal:De.default.bool,smooth:De.default.oneOfType([De.default.bool,De.default.string]),offset:De.default.number,delay:De.default.number,isDynamic:De.default.bool,onClick:De.default.func,duration:De.default.oneOfType([De.default.number,De.default.func]),absolute:De.default.bool,onSetActive:De.default.func,onSetInactive:De.default.func,ignoreCancelEvents:De.default.bool,hashSpy:De.default.bool,saveHashHistory:De.default.bool,spyThrottle:De.default.number};ml.default=function(e,t){var n=t||NN.default,r=function(i){HN(a,i);function a(s){zN(this,a);var l=BN(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return o.call(l),l.state={active:!1},l}return MN(a,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();rc.default.isMounted(l)||rc.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(Lr.default.isMounted()||Lr.default.mount(n),Lr.default.mapContainer(this.props.to,l)),rc.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){rc.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=nc({},this.props.style,this.props.activeStyle):c=nc({},this.props.style);var u=nc({},this.props);for(var f in B0)u.hasOwnProperty(f)&&delete u[f];return u.className=l,u.style=c,u.onClick=this.handleClick,z0.default.createElement(e,u)}}]),a}(z0.default.PureComponent),o=function(){var a=this;this.scrollTo=function(s,l){n.scrollTo(s,nc({},a.state,l))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.spyHandler=function(s,l){var c=a.getScrollSpyContainer();if(!(Lr.default.isMounted()&&!Lr.default.isInitialized())){var u=a.props.horizontal,f=a.props.to,p=null,m=void 0,h=void 0;if(u){var b=0,w=0,v=0;if(c.getBoundingClientRect){var g=c.getBoundingClientRect();v=g.left}if(!p||a.props.isDynamic){if(p=n.get(f),!p)return;var y=p.getBoundingClientRect();b=y.left-v+s,w=b+y.width}var _=s-a.props.offset;m=_>=Math.floor(b)&&_<Math.floor(w),h=_<Math.floor(b)||_>=Math.floor(w)}else{var k=0,S=0,E=0;if(c.getBoundingClientRect){var C=c.getBoundingClientRect();E=C.top}if(!p||a.props.isDynamic){if(p=n.get(f),!p)return;var A=p.getBoundingClientRect();k=A.top-E+l,S=k+A.height}var P=l-a.props.offset;m=P>=Math.floor(k)&&P<Math.floor(S),h=P<Math.floor(k)||P>=Math.floor(S)}var L=n.getActiveLink();if(h){if(f===L&&n.setActiveLink(void 0),a.props.hashSpy&&Lr.default.getHash()===f){var W=a.props.saveHashHistory,Z=W===void 0?!1:W;Lr.default.changeHash("",Z)}a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive(f,p))}if(m&&(L!==f||a.state.active===!1)){n.setActiveLink(f);var se=a.props.saveHashHistory,X=se===void 0?!1:se;a.props.hashSpy&&Lr.default.changeHash(f,X),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(f,p))}}}};return r.propTypes=B0,r.defaultProps={offset:0},r};Object.defineProperty(Ab,"__esModule",{value:!0});var UN=O,H0=OC(UN),WN=ml,VN=OC(WN);function OC(e){return e&&e.__esModule?e:{default:e}}function YN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function U0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function GN(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var qN=function(e){GN(t,e);function t(){var n,r,o,i;YN(this,t);for(var a=arguments.length,s=Array(a),l=0;l<a;l++)s[l]=arguments[l];return i=(r=(o=U0(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),o),o.render=function(){return H0.default.createElement("a",o.props,o.props.children)},r),U0(o,i)}return t}(H0.default.Component);Ab.default=(0,VN.default)(qN);var Db={};Object.defineProperty(Db,"__esModule",{value:!0});var XN=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),KN=O,W0=CC(KN),QN=ml,JN=CC(QN);function CC(e){return e&&e.__esModule?e:{default:e}}function ZN(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function e3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function t3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n3=function(e){t3(t,e);function t(){return ZN(this,t),e3(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return XN(t,[{key:"render",value:function(){return W0.default.createElement("button",this.props,this.props.children)}}]),t}(W0.default.Component);Db.default=(0,JN.default)(n3);var Nb={},sf={};Object.defineProperty(sf,"__esModule",{value:!0});var r3=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o3=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i3=O,V0=lf(i3),a3=kd;lf(a3);var s3=_a,Y0=lf(s3),l3=fi,G0=lf(l3);function lf(e){return e&&e.__esModule?e:{default:e}}function c3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function d3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}sf.default=function(e){var t=function(n){d3(r,n);function r(o){c3(this,r);var i=u3(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return o3(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Y0.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){Y0.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return V0.default.createElement(e,r3({},this.props,{parentBindings:this.childBindings}))}}]),r}(V0.default.Component);return t.propTypes={name:G0.default.string,id:G0.default.string},t};Object.defineProperty(Nb,"__esModule",{value:!0});var q0=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f3=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p3=O,X0=$b(p3),h3=sf,m3=$b(h3),g3=fi,K0=$b(g3);function $b(e){return e&&e.__esModule?e:{default:e}}function b3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v3(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function y3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var TC=function(e){y3(t,e);function t(){return b3(this,t),v3(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f3(t,[{key:"render",value:function(){var r=this,o=q0({},this.props);return delete o.name,o.parentBindings&&delete o.parentBindings,X0.default.createElement("div",q0({},o,{ref:function(a){r.props.parentBindings.domNode=a}}),this.props.children)}}]),t}(X0.default.Component);TC.propTypes={name:K0.default.string,id:K0.default.string};Nb.default=(0,m3.default)(TC);var up=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q0=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function J0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z0(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ex(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var oc=O,Co=gl,dp=_a,He=fi,Dr=af,tx={to:He.string.isRequired,containerId:He.string,container:He.object,activeClass:He.string,spy:He.bool,smooth:He.oneOfType([He.bool,He.string]),offset:He.number,delay:He.number,isDynamic:He.bool,onClick:He.func,duration:He.oneOfType([He.number,He.func]),absolute:He.bool,onSetActive:He.func,onSetInactive:He.func,ignoreCancelEvents:He.bool,hashSpy:He.bool,spyThrottle:He.number},x3={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||dp,o=function(a){ex(s,a);function s(l){J0(this,s);var c=Z0(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(c),c.state={active:!1},c}return Q0(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,u=this.props.container;return c?document.getElementById(c):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Co.isMounted(c)||Co.mount(c,this.props.spyThrottle),this.props.hashSpy&&(Dr.isMounted()||Dr.mount(r),Dr.mapContainer(this.props.to,c)),this.props.spy&&Co.addStateHandler(this.stateHandler),Co.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Co.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var u=up({},this.props);for(var f in tx)u.hasOwnProperty(f)&&delete u[f];return u.className=c,u.onClick=this.handleClick,oc.createElement(t,u)}}]),s}(oc.Component),i=function(){var s=this;this.scrollTo=function(l,c){r.scrollTo(l,up({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var c=s.getScrollSpyContainer();if(!(Dr.isMounted()&&!Dr.isInitialized())){var u=s.props.to,f=null,p=0,m=0,h=0;if(c.getBoundingClientRect){var b=c.getBoundingClientRect();h=b.top}if(!f||s.props.isDynamic){if(f=r.get(u),!f)return;var w=f.getBoundingClientRect();p=w.top-h+l,m=p+w.height}var v=l-s.props.offset,g=v>=Math.floor(p)&&v<Math.floor(m),y=v<Math.floor(p)||v>=Math.floor(m),_=r.getActiveLink();if(y)return u===_&&r.setActiveLink(void 0),s.props.hashSpy&&Dr.getHash()===u&&Dr.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Co.updateStates();if(g&&_!==u)return r.setActiveLink(u),s.props.hashSpy&&Dr.changeHash(u),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(u)),Co.updateStates()}}};return o.propTypes=tx,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){ex(o,r);function o(i){J0(this,o);var a=Z0(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a.childBindings={domNode:null},a}return Q0(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(a){this.props.name!==a.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;dp.unregister(this.props.name)}},{key:"registerElems",value:function(a){dp.register(a,this.childBindings.domNode)}},{key:"render",value:function(){return oc.createElement(t,up({},this.props,{parentBindings:this.childBindings}))}}]),o}(oc.Component);return n.propTypes={name:He.string,id:He.string},n}},w3=x3;Object.defineProperty(qe,"__esModule",{value:!0});qe.Helpers=qe.ScrollElement=qe.ScrollLink=qe.animateScroll=qe.scrollSpy=qe.Events=qe.scroller=qe.Element=qe.Button=qe.Link=void 0;var _3=Ab,RC=nr(_3),S3=Db,PC=nr(S3),k3=Nb,AC=nr(k3),E3=_a,IC=nr(E3),O3=yl,MC=nr(O3),C3=gl,jC=nr(C3),T3=nf,LC=nr(T3),R3=ml,DC=nr(R3),P3=sf,NC=nr(P3),A3=w3,$C=nr(A3);function nr(e){return e&&e.__esModule?e:{default:e}}qe.Link=RC.default;qe.Button=PC.default;qe.Element=AC.default;qe.scroller=IC.default;qe.Events=MC.default;qe.scrollSpy=jC.default;qe.animateScroll=LC.default;qe.ScrollLink=DC.default;qe.ScrollElement=NC.default;qe.Helpers=$C.default;qe.default={Link:RC.default,Button:PC.default,Element:AC.default,scroller:IC.default,Events:MC.default,scrollSpy:jC.default,animateScroll:LC.default,ScrollLink:DC.default,ScrollElement:NC.default,Helpers:$C.default};var nx=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),I3=new Uint8Array(16);function M3(){if(!nx)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nx(I3)}var FC=[];for(var ic=0;ic<256;++ic)FC[ic]=(ic+256).toString(16).substr(1);function j3(e,t){var n=0,r=FC;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}function L3(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||M3)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t)for(var i=0;i<16;++i)t[r+i]=o[i];return t||j3(o)}function rx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ym(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rx(Object(n),!0).forEach(function(r){xs(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ox(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N3(e,t,n){return t&&ox(e.prototype,t),n&&ox(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function xs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hu(){return Hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hu.apply(this,arguments)}function $3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xm(e,t)}function Uu(e){return Uu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Uu(e)}function xm(e,t){return xm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},xm(e,t)}function F3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function z3(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B3(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return z3(e)}function H3(e){var t=F3();return function(){var r=Uu(e),o;if(t){var i=Uu(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return B3(this,o)}}function U3(e,t){if(e){if(typeof e=="string")return ix(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ix(e,t)}}function ix(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W3(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=U3(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,s;return{s:function(){n=n.call(e)},n:function(){var l=n.next();return i=l.done,l},e:function(l){a=!0,s=l},f:function(){try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}}}var ax=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ac=function(e){return e&&e.Math==Math&&e},Tr=ac(typeof globalThis=="object"&&globalThis)||ac(typeof window=="object"&&window)||ac(typeof self=="object"&&self)||ac(typeof ax=="object"&&ax)||function(){return this}()||Function("return this")(),Fb={},Rr=function(e){try{return!!e()}catch{return!0}},V3=Rr,_o=!V3(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Y3=Rr,zb=!Y3(function(){var e=(function(){}).bind();return typeof e!="function"||e.hasOwnProperty("prototype")}),G3=zb,sc=Function.prototype.call,Bb=G3?sc.bind(sc):function(){return sc.apply(sc,arguments)},zC={},BC={}.propertyIsEnumerable,HC=Object.getOwnPropertyDescriptor,q3=HC&&!BC.call({1:2},1);zC.f=q3?function(t){var n=HC(this,t);return!!n&&n.enumerable}:BC;var UC=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},WC=zb,VC=Function.prototype,wm=VC.call,X3=WC&&VC.bind.bind(wm,wm),YC=function(e){return WC?X3(e):function(){return wm.apply(e,arguments)}},GC=YC,K3=GC({}.toString),Q3=GC("".slice),cf=function(e){return Q3(K3(e),8,-1)},J3=cf,Z3=YC,rr=function(e){if(J3(e)==="Function")return Z3(e)},e$=rr,t$=Rr,n$=cf,fp=Object,r$=e$("".split),qC=t$(function(){return!fp("z").propertyIsEnumerable(0)})?function(e){return n$(e)=="String"?r$(e,""):fp(e)}:fp,XC=function(e){return e==null},o$=XC,i$=TypeError,KC=function(e){if(o$(e))throw i$("Can't call method on "+e);return e},a$=qC,s$=KC,uf=function(e){return a$(s$(e))},_m=typeof document=="object"&&document.all,l$=typeof _m>"u"&&_m!==void 0,QC={all:_m,IS_HTMLDDA:l$},JC=QC,c$=JC.all,yn=JC.IS_HTMLDDA?function(e){return typeof e=="function"||e===c$}:function(e){return typeof e=="function"},sx=yn,ZC=QC,u$=ZC.all,Sa=ZC.IS_HTMLDDA?function(e){return typeof e=="object"?e!==null:sx(e)||e===u$}:function(e){return typeof e=="object"?e!==null:sx(e)},pp=Tr,d$=yn,f$=function(e){return d$(e)?e:void 0},_l=function(e,t){return arguments.length<2?f$(pp[e]):pp[e]&&pp[e][t]},p$=rr,h$=p$({}.isPrototypeOf),m$=_l,g$=m$("navigator","userAgent")||"",eT=Tr,hp=g$,lx=eT.process,cx=eT.Deno,ux=lx&&lx.versions||cx&&cx.version,dx=ux&&ux.v8,On,Wu;dx&&(On=dx.split("."),Wu=On[0]>0&&On[0]<4?1:+(On[0]+On[1]));!Wu&&hp&&(On=hp.match(/Edge\/(\d+)/),(!On||On[1]>=74)&&(On=hp.match(/Chrome\/(\d+)/),On&&(Wu=+On[1])));var b$=Wu,fx=b$,v$=Rr,tT=!!Object.getOwnPropertySymbols&&!v$(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&fx&&fx<41}),y$=tT,nT=y$&&!Symbol.sham&&typeof Symbol.iterator=="symbol",x$=_l,w$=yn,_$=h$,S$=nT,k$=Object,rT=S$?function(e){return typeof e=="symbol"}:function(e){var t=x$("Symbol");return w$(t)&&_$(t.prototype,k$(e))},E$=String,O$=function(e){try{return E$(e)}catch{return"Object"}},C$=yn,T$=O$,R$=TypeError,oT=function(e){if(C$(e))return e;throw R$(T$(e)+" is not a function")},P$=oT,A$=XC,I$=function(e,t){var n=e[t];return A$(n)?void 0:P$(n)},mp=Bb,gp=yn,bp=Sa,M$=TypeError,j$=function(e,t){var n,r;if(t==="string"&&gp(n=e.toString)&&!bp(r=mp(n,e))||gp(n=e.valueOf)&&!bp(r=mp(n,e))||t!=="string"&&gp(n=e.toString)&&!bp(r=mp(n,e)))return r;throw M$("Can't convert object to primitive value")},Hb={exports:{}},px=Tr,L$=Object.defineProperty,Ub=function(e,t){try{L$(px,e,{value:t,configurable:!0,writable:!0})}catch{px[e]=t}return t},D$=Tr,N$=Ub,hx="__core-js_shared__",$$=D$[hx]||N$(hx,{}),Wb=$$,mx=Wb;(Hb.exports=function(e,t){return mx[e]||(mx[e]=t!==void 0?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var F$=KC,z$=Object,iT=function(e){return z$(F$(e))},B$=rr,H$=iT,U$=B$({}.hasOwnProperty),mi=Object.hasOwn||function(t,n){return U$(H$(t),n)},W$=rr,V$=0,Y$=Math.random(),G$=W$(1 .toString),aT=function(e){return"Symbol("+(e===void 0?"":e)+")_"+G$(++V$+Y$,36)},q$=Tr,X$=Hb.exports,gx=mi,K$=aT,bx=tT,sT=nT,wi=X$("wks"),Go=q$.Symbol,vx=Go&&Go.for,Q$=sT?Go:Go&&Go.withoutSetter||K$,Sl=function(e){if(!gx(wi,e)||!(bx||typeof wi[e]=="string")){var t="Symbol."+e;bx&&gx(Go,e)?wi[e]=Go[e]:sT&&vx?wi[e]=vx(t):wi[e]=Q$(t)}return wi[e]},J$=Bb,yx=Sa,xx=rT,Z$=I$,e4=j$,t4=Sl,n4=TypeError,r4=t4("toPrimitive"),o4=function(e,t){if(!yx(e)||xx(e))return e;var n=Z$(e,r4),r;if(n){if(t===void 0&&(t="default"),r=J$(n,e,t),!yx(r)||xx(r))return r;throw n4("Can't convert object to primitive value")}return t===void 0&&(t="number"),e4(e,t)},i4=o4,a4=rT,lT=function(e){var t=i4(e,"string");return a4(t)?t:t+""},s4=Tr,wx=Sa,Sm=s4.document,l4=wx(Sm)&&wx(Sm.createElement),cT=function(e){return l4?Sm.createElement(e):{}},c4=_o,u4=Rr,d4=cT,uT=!c4&&!u4(function(){return Object.defineProperty(d4("div"),"a",{get:function(){return 7}}).a!=7}),f4=_o,p4=Bb,h4=zC,m4=UC,g4=uf,b4=lT,v4=mi,y4=uT,_x=Object.getOwnPropertyDescriptor;Fb.f=f4?_x:function(t,n){if(t=g4(t),n=b4(n),y4)try{return _x(t,n)}catch{}if(v4(t,n))return m4(!p4(h4.f,t,n),t[n])};var ka={},x4=_o,w4=Rr,dT=x4&&w4(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),_4=Sa,S4=String,k4=TypeError,df=function(e){if(_4(e))return e;throw k4(S4(e)+" is not an object")},E4=_o,O4=uT,C4=dT,lc=df,Sx=lT,T4=TypeError,vp=Object.defineProperty,R4=Object.getOwnPropertyDescriptor,yp="enumerable",xp="configurable",wp="writable";ka.f=E4?C4?function(t,n,r){if(lc(t),n=Sx(n),lc(r),typeof t=="function"&&n==="prototype"&&"value"in r&&wp in r&&!r[wp]){var o=R4(t,n);o&&o[wp]&&(t[n]=r.value,r={configurable:xp in r?r[xp]:o[xp],enumerable:yp in r?r[yp]:o[yp],writable:!1})}return vp(t,n,r)}:vp:function(t,n,r){if(lc(t),n=Sx(n),lc(r),O4)try{return vp(t,n,r)}catch{}if("get"in r||"set"in r)throw T4("Accessors not supported");return"value"in r&&(t[n]=r.value),t};var P4=_o,A4=ka,I4=UC,fT=P4?function(e,t,n){return A4.f(e,t,I4(1,n))}:function(e,t,n){return e[t]=n,e},pT={exports:{}},km=_o,M4=mi,hT=Function.prototype,j4=km&&Object.getOwnPropertyDescriptor,Vb=M4(hT,"name"),L4=Vb&&(function(){}).name==="something",D4=Vb&&(!km||km&&j4(hT,"name").configurable),N4={EXISTS:Vb,PROPER:L4,CONFIGURABLE:D4},$4=rr,F4=yn,Em=Wb,z4=$4(Function.toString);F4(Em.inspectSource)||(Em.inspectSource=function(e){return z4(e)});var mT=Em.inspectSource,B4=Tr,H4=yn,kx=B4.WeakMap,U4=H4(kx)&&/native code/.test(String(kx)),W4=Hb.exports,V4=aT,Ex=W4("keys"),gT=function(e){return Ex[e]||(Ex[e]=V4(e))},Yb={},Y4=U4,bT=Tr,G4=Sa,q4=fT,_p=mi,Sp=Wb,X4=gT,K4=Yb,Ox="Object already initialized",Om=bT.TypeError,Q4=bT.WeakMap,Vu,Ks,Yu,J4=function(e){return Yu(e)?Ks(e):Vu(e,{})},Z4=function(e){return function(t){var n;if(!G4(t)||(n=Ks(t)).type!==e)throw Om("Incompatible receiver, "+e+" required");return n}};if(Y4||Sp.state){var zn=Sp.state||(Sp.state=new Q4);zn.get=zn.get,zn.has=zn.has,zn.set=zn.set,Vu=function(e,t){if(zn.has(e))throw Om(Ox);return t.facade=e,zn.set(e,t),t},Ks=function(e){return zn.get(e)||{}},Yu=function(e){return zn.has(e)}}else{var _i=X4("state");K4[_i]=!0,Vu=function(e,t){if(_p(e,_i))throw Om(Ox);return t.facade=e,q4(e,_i,t),t},Ks=function(e){return _p(e,_i)?e[_i]:{}},Yu=function(e){return _p(e,_i)}}var eF={set:Vu,get:Ks,has:Yu,enforce:J4,getterFor:Z4},tF=Rr,nF=yn,cc=mi,Cm=_o,rF=N4.CONFIGURABLE,oF=mT,vT=eF,iF=vT.enforce,aF=vT.get,Gc=Object.defineProperty,sF=Cm&&!tF(function(){return Gc(function(){},"length",{value:8}).length!==8}),lF=String(String).split("String"),cF=pT.exports=function(e,t,n){String(t).slice(0,7)==="Symbol("&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!cc(e,"name")||rF&&e.name!==t)&&(Cm?Gc(e,"name",{value:t,configurable:!0}):e.name=t),sF&&n&&cc(n,"arity")&&e.length!==n.arity&&Gc(e,"length",{value:n.arity});try{n&&cc(n,"constructor")&&n.constructor?Cm&&Gc(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch{}var r=iF(e);return cc(r,"source")||(r.source=lF.join(typeof t=="string"?t:"")),e};Function.prototype.toString=cF(function(){return nF(this)&&aF(this).source||oF(this)},"toString");var uF=yn,dF=ka,fF=pT.exports,pF=Ub,hF=function(e,t,n,r){r||(r={});var o=r.enumerable,i=r.name!==void 0?r.name:t;if(uF(n)&&fF(n,i,r),r.global)o?e[t]=n:pF(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch{}o?e[t]=n:dF.f(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e},yT={},mF=Math.ceil,gF=Math.floor,bF=Math.trunc||function(t){var n=+t;return(n>0?gF:mF)(n)},vF=bF,xT=function(e){var t=+e;return t!==t||t===0?0:vF(t)},yF=xT,xF=Math.max,wF=Math.min,_F=function(e,t){var n=yF(e);return n<0?xF(n+t,0):wF(n,t)},SF=xT,kF=Math.min,EF=function(e){return e>0?kF(SF(e),9007199254740991):0},OF=EF,wT=function(e){return OF(e.length)},CF=uf,TF=_F,RF=wT,Cx=function(e){return function(t,n,r){var o=CF(t),i=RF(o),a=TF(r,i),s;if(e&&n!=n){for(;i>a;)if(s=o[a++],s!=s)return!0}else for(;i>a;a++)if((e||a in o)&&o[a]===n)return e||a||0;return!e&&-1}},PF={includes:Cx(!0),indexOf:Cx(!1)},AF=rr,kp=mi,IF=uf,MF=PF.indexOf,jF=Yb,Tx=AF([].push),_T=function(e,t){var n=IF(e),r=0,o=[],i;for(i in n)!kp(jF,i)&&kp(n,i)&&Tx(o,i);for(;t.length>r;)kp(n,i=t[r++])&&(~MF(o,i)||Tx(o,i));return o},Gb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],LF=_T,DF=Gb,NF=DF.concat("length","prototype");yT.f=Object.getOwnPropertyNames||function(t){return LF(t,NF)};var ST={};ST.f=Object.getOwnPropertySymbols;var $F=_l,FF=rr,zF=yT,BF=ST,HF=df,UF=FF([].concat),WF=$F("Reflect","ownKeys")||function(t){var n=zF.f(HF(t)),r=BF.f;return r?UF(n,r(t)):n},Rx=mi,VF=WF,YF=Fb,GF=ka,qF=function(e,t,n){for(var r=VF(t),o=GF.f,i=YF.f,a=0;a<r.length;a++){var s=r[a];!Rx(e,s)&&!(n&&Rx(n,s))&&o(e,s,i(t,s))}},XF=Rr,KF=yn,QF=/#|\.prototype\./,kl=function(e,t){var n=ZF[JF(e)];return n==tz?!0:n==ez?!1:KF(t)?XF(t):!!t},JF=kl.normalize=function(e){return String(e).replace(QF,".").toLowerCase()},ZF=kl.data={},ez=kl.NATIVE="N",tz=kl.POLYFILL="P",nz=kl,Ep=Tr,rz=Fb.f,oz=fT,iz=hF,az=Ub,sz=qF,lz=nz,cz=function(e,t){var n=e.target,r=e.global,o=e.stat,i,a,s,l,c,u;if(r?a=Ep:o?a=Ep[n]||az(n,{}):a=(Ep[n]||{}).prototype,a)for(s in t){if(c=t[s],e.dontCallGetSet?(u=rz(a,s),l=u&&u.value):l=a[s],i=lz(r?s:n+(o?".":"#")+s,e.forced),!i&&l!==void 0){if(typeof c==typeof l)continue;sz(c,l)}(e.sham||l&&l.sham)&&oz(c,"sham",!0),iz(a,s,c,e)}},Px=rr,uz=oT,dz=zb,fz=Px(Px.bind),pz=function(e,t){return uz(e),t===void 0?e:dz?fz(e,t):function(){return e.apply(t,arguments)}},hz=cf,mz=Array.isArray||function(t){return hz(t)=="Array"},gz=Sl,bz=gz("toStringTag"),kT={};kT[bz]="z";var vz=String(kT)==="[object z]",yz=vz,xz=yn,qc=cf,wz=Sl,_z=wz("toStringTag"),Sz=Object,kz=qc(function(){return arguments}())=="Arguments",Ez=function(e,t){try{return e[t]}catch{}},Oz=yz?qc:function(e){var t,n,r;return e===void 0?"Undefined":e===null?"Null":typeof(n=Ez(t=Sz(e),_z))=="string"?n:kz?qc(t):(r=qc(t))=="Object"&&xz(t.callee)?"Arguments":r},Cz=rr,Tz=Rr,ET=yn,Rz=Oz,Pz=_l,Az=mT,OT=function(){},Iz=[],CT=Pz("Reflect","construct"),qb=/^\s*(?:class|function)\b/,Mz=Cz(qb.exec),jz=!qb.exec(OT),$a=function(t){if(!ET(t))return!1;try{return CT(OT,Iz,t),!0}catch{return!1}},TT=function(t){if(!ET(t))return!1;switch(Rz(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return jz||!!Mz(qb,Az(t))}catch{return!0}};TT.sham=!0;var Lz=!CT||Tz(function(){var e;return $a($a.call)||!$a(Object)||!$a(function(){e=!0})||e})?TT:$a,Ax=mz,Dz=Lz,Nz=Sa,$z=Sl,Fz=$z("species"),Ix=Array,zz=function(e){var t;return Ax(e)&&(t=e.constructor,Dz(t)&&(t===Ix||Ax(t.prototype))?t=void 0:Nz(t)&&(t=t[Fz],t===null&&(t=void 0))),t===void 0?Ix:t},Bz=zz,Hz=function(e,t){return new(Bz(e))(t===0?0:t)},Uz=pz,Wz=rr,Vz=qC,Yz=iT,Gz=wT,qz=Hz,Mx=Wz([].push),Nr=function(e){var t=e==1,n=e==2,r=e==3,o=e==4,i=e==6,a=e==7,s=e==5||i;return function(l,c,u,f){for(var p=Yz(l),m=Vz(p),h=Uz(c,u),b=Gz(m),w=0,v=f||qz,g=t?v(l,b):n||a?v(l,0):void 0,y,_;b>w;w++)if((s||w in m)&&(y=m[w],_=h(y,w,p),e))if(t)g[w]=_;else if(_)switch(e){case 3:return!0;case 5:return y;case 6:return w;case 2:Mx(g,y)}else switch(e){case 4:return!1;case 7:Mx(g,y)}return i?-1:r||o?o:g}},Xz={forEach:Nr(0),map:Nr(1),filter:Nr(2),some:Nr(3),every:Nr(4),find:Nr(5),findIndex:Nr(6),filterReject:Nr(7)},RT={},Kz=_T,Qz=Gb,Jz=Object.keys||function(t){return Kz(t,Qz)},Zz=_o,eB=dT,tB=ka,nB=df,rB=uf,oB=Jz;RT.f=Zz&&!eB?Object.defineProperties:function(t,n){nB(t);for(var r=rB(n),o=oB(n),i=o.length,a=0,s;i>a;)tB.f(t,s=o[a++],r[s]);return t};var iB=_l,aB=iB("document","documentElement"),sB=df,lB=RT,jx=Gb,cB=Yb,uB=aB,dB=cT,fB=gT,Lx=">",Dx="<",Tm="prototype",Rm="script",PT=fB("IE_PROTO"),Op=function(){},AT=function(e){return Dx+Rm+Lx+e+Dx+"/"+Rm+Lx},Nx=function(e){e.write(AT("")),e.close();var t=e.parentWindow.Object;return e=null,t},pB=function(){var e=dB("iframe"),t="java"+Rm+":",n;return e.style.display="none",uB.appendChild(e),e.src=String(t),n=e.contentWindow.document,n.open(),n.write(AT("document.F=Object")),n.close(),n.F},uc,Xc=function(){try{uc=new ActiveXObject("htmlfile")}catch{}Xc=typeof document<"u"?document.domain&&uc?Nx(uc):pB():Nx(uc);for(var e=jx.length;e--;)delete Xc[Tm][jx[e]];return Xc()};cB[PT]=!0;var hB=Object.create||function(t,n){var r;return t!==null?(Op[Tm]=sB(t),r=new Op,Op[Tm]=null,r[PT]=t):r=Xc(),n===void 0?r:lB.f(r,n)},mB=Sl,gB=hB,bB=ka.f,Pm=mB("unscopables"),Am=Array.prototype;Am[Pm]==null&&bB(Am,Pm,{configurable:!0,value:gB(null)});var vB=function(e){Am[Pm][e]=!0},yB=cz,xB=Xz.find,wB=vB,Im="find",IT=!0;Im in[]&&Array(1)[Im](function(){IT=!1});yB({target:"Array",proto:!0,forced:IT},{find:function(t){return xB(this,t,arguments.length>1?arguments[1]:void 0)}});wB(Im);var sn={GLOBAL:{HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"}},Cp=function(t,n){var r;typeof window.CustomEvent=="function"?r=new window.CustomEvent(t,{detail:n}):(r=document.createEvent("Event"),r.initEvent(t,!1,!0,n)),window.dispatchEvent(r)};function _B(e){e.hide=function(t){Cp(sn.GLOBAL.HIDE,{target:t})},e.rebuild=function(){Cp(sn.GLOBAL.REBUILD)},e.show=function(t){Cp(sn.GLOBAL.SHOW,{target:t})},e.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},e.prototype.globalShow=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.showTooltip({currentTarget:n&&t.detail.target},!0)}},e.prototype.globalHide=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.hideTooltip({currentTarget:n&&t.detail.target},n)}}}function SB(e){e.prototype.bindWindowEvents=function(t){window.removeEventListener(sn.GLOBAL.HIDE,this.globalHide),window.addEventListener(sn.GLOBAL.HIDE,this.globalHide,!1),window.removeEventListener(sn.GLOBAL.REBUILD,this.globalRebuild),window.addEventListener(sn.GLOBAL.REBUILD,this.globalRebuild,!1),window.removeEventListener(sn.GLOBAL.SHOW,this.globalShow),window.addEventListener(sn.GLOBAL.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},e.prototype.unbindWindowEvents=function(){window.removeEventListener(sn.GLOBAL.HIDE,this.globalHide),window.removeEventListener(sn.GLOBAL.REBUILD,this.globalRebuild),window.removeEventListener(sn.GLOBAL.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},e.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}var MT=function(t,n){var r=this.state.show,o=this.props.id,i=this.isCapture(n.currentTarget),a=n.currentTarget.getAttribute("currentItem");i||n.stopPropagation(),r&&a==="true"?t||this.hideTooltip(n):(n.currentTarget.setAttribute("currentItem","true"),kB(n.currentTarget,this.getTargetArray(o)),this.showTooltip(n))},kB=function(t,n){for(var r=0;r<n.length;r++)t!==n[r]?n[r].setAttribute("currentItem","false"):n[r].setAttribute("currentItem","true")},Tp={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,n,r){if(this.id in t){var o=t[this.id];o[n]=r}else Object.defineProperty(t,this.id,{configurable:!0,value:xs({},n,r)})},get:function(t,n){var r=t[this.id];if(r!==void 0)return r[n]}};function EB(e){e.prototype.isCustomEvent=function(t){var n=this.state.event;return n||!!t.getAttribute("data-event")},e.prototype.customBindListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=t.getAttribute("data-event")||o,s=t.getAttribute("data-event-off")||i;a.split(" ").forEach(function(l){t.removeEventListener(l,Tp.get(t,l));var c=MT.bind(n,s);Tp.set(t,l,c),t.addEventListener(l,c,!1)}),s&&s.split(" ").forEach(function(l){t.removeEventListener(l,n.hideTooltip),t.addEventListener(l,n.hideTooltip,!1)})},e.prototype.customUnbindListener=function(t){var n=this.state,r=n.event,o=n.eventOff,i=r||t.getAttribute("data-event"),a=o||t.getAttribute("data-event-off");t.removeEventListener(i,Tp.get(t,r)),a&&t.removeEventListener(a,this.hideTooltip)}}function OB(e){e.prototype.isCapture=function(t){return t&&t.getAttribute("data-iscapture")==="true"||this.props.isCapture||!1}}function CB(e){e.prototype.getEffect=function(t){var n=t.getAttribute("data-effect");return n||this.props.effect||"float"}}var TB=function(t){var n={};for(var r in t)typeof t[r]=="function"?n[r]=t[r].bind(t):n[r]=t[r];return n},Fa=function(t,n,r){for(var o=n.respectEffect,i=o===void 0?!1:o,a=n.customEvent,s=a===void 0?!1:a,l=this.props.id,c=null,u,f=r.target,p;c===null&&f!==null;)p=f,c=f.getAttribute("data-tip")||null,u=f.getAttribute("data-for")||null,f=f.parentElement;if(f=p||r.target,!(this.isCustomEvent(f)&&!s)){var m=l==null&&u==null||u===l;if(c!=null&&(!i||this.getEffect(f)==="float")&&m){var h=TB(r);h.currentTarget=f,t(h)}}},$x=function(t,n){var r={};return t.forEach(function(o){var i=o.getAttribute(n);i&&i.split(" ").forEach(function(a){return r[a]=!0})}),r},Fx=function(){return document.getElementsByTagName("body")[0]};function RB(e){e.prototype.isBodyMode=function(){return!!this.props.bodyMode},e.prototype.bindBodyListener=function(t){var n=this,r=this.state,o=r.event,i=r.eventOff,a=r.possibleCustomEvents,s=r.possibleCustomEventsOff,l=Fx(),c=$x(t,"data-event"),u=$x(t,"data-event-off");o!=null&&(c[o]=!0),i!=null&&(u[i]=!0),a.split(" ").forEach(function(b){return c[b]=!0}),s.split(" ").forEach(function(b){return u[b]=!0}),this.unbindBodyListener(l);var f=this.bodyModeListeners={};o==null&&(f.mouseover=Fa.bind(this,this.showTooltip,{}),f.mousemove=Fa.bind(this,this.updateTooltip,{respectEffect:!0}),f.mouseout=Fa.bind(this,this.hideTooltip,{}));for(var p in c)f[p]=Fa.bind(this,function(b){var w=b.currentTarget.getAttribute("data-event-off")||i;MT.call(n,w,b)},{customEvent:!0});for(var m in u)f[m]=Fa.bind(this,this.hideTooltip,{customEvent:!0});for(var h in f)l.addEventListener(h,f[h])},e.prototype.unbindBodyListener=function(t){t=t||Fx();var n=this.bodyModeListeners;for(var r in n)t.removeEventListener(r,n[r])}}var PB=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver};function AB(e){e.prototype.bindRemovalTracker=function(){var t=this,n=PB();if(n!=null){var r=new n(function(o){for(var i=0;i<o.length;i++)for(var a=o[i],s=0;s<a.removedNodes.length;s++){var l=a.removedNodes[s];if(l===t.state.currentTarget){t.hideTooltip();return}}});r.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=r}},e.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)}}function zx(e,t,n,r,o,i,a){var s=Mm(n),l=s.width,c=s.height,u=Mm(t),f=u.width,p=u.height,m=IB(e,t,i),h=m.mouseX,b=m.mouseY,w=MB(i,f,p,l,c),v=jB(a),g=v.extraOffsetX,y=v.extraOffsetY,_=window.innerWidth,k=window.innerHeight,S=LB(n),E=S.parentTop,C=S.parentLeft,A=function(z){var T=w[z].l;return h+T+g},P=function(z){var T=w[z].r;return h+T+g},L=function(z){var T=w[z].t;return b+T+y},W=function(z){var T=w[z].b;return b+T+y},Z=function(z){return A(z)<0},se=function(z){return P(z)>_},X=function(z){return L(z)<0},ne=function(z){return W(z)>k},ee=function(z){return Z(z)||se(z)||X(z)||ne(z)},M=function(z){return!ee(z)},V={top:M("top"),bottom:M("bottom"),left:M("left"),right:M("right")};function q(){var D=o.split(",").concat(r,["top","bottom","left","right"]),z=W3(D),T;try{for(z.s();!(T=z.n()).done;){var le=T.value;if(V[le])return le}}catch(B){z.e(B)}finally{z.f()}return r}var oe=q(),N=!1,F;return oe&&oe!==r&&(N=!0,F=oe),N?{isNewState:!0,newState:{place:F}}:{isNewState:!1,position:{left:parseInt(A(r)-C,10),top:parseInt(L(r)-E,10)}}}var Mm=function(t){var n=t.getBoundingClientRect(),r=n.height,o=n.width;return{height:parseInt(r,10),width:parseInt(o,10)}},IB=function(t,n,r){var o=n.getBoundingClientRect(),i=o.top,a=o.left,s=Mm(n),l=s.width,c=s.height;return r==="float"?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:a+l/2,mouseY:i+c/2}},MB=function(t,n,r,o,i){var a,s,l,c,u=3,f=2,p=12;return t==="float"?(a={l:-(o/2),r:o/2,t:-(i+u+f),b:-u},l={l:-(o/2),r:o/2,t:u+p,b:i+u+f+p},c={l:-(o+u+f),r:-u,t:-(i/2),b:i/2},s={l:u,r:o+u+f,t:-(i/2),b:i/2}):t==="solid"&&(a={l:-(o/2),r:o/2,t:-(r/2+i+f),b:-(r/2)},l={l:-(o/2),r:o/2,t:r/2,b:r/2+i+f},c={l:-(o+n/2+f),r:-(n/2),t:-(i/2),b:i/2},s={l:n/2,r:o+n/2+f,t:-(i/2),b:i/2}),{top:a,bottom:l,left:c,right:s}},jB=function(t){var n=0,r=0;Object.prototype.toString.apply(t)==="[object String]"&&(t=JSON.parse(t.toString().replace(/'/g,'"')));for(var o in t)o==="top"?r-=parseInt(t[o],10):o==="bottom"?r+=parseInt(t[o],10):o==="left"?n-=parseInt(t[o],10):o==="right"&&(n+=parseInt(t[o],10));return{extraOffsetX:n,extraOffsetY:r}},LB=function(t){for(var n=t;n;){var r=window.getComputedStyle(n);if(r.getPropertyValue("transform")!=="none"||r.getPropertyValue("will-change")==="transform")break;n=n.parentElement}var o=n&&n.getBoundingClientRect().top||0,i=n&&n.getBoundingClientRect().left||0;return{parentTop:o,parentLeft:i}};function Bx(e,t,n,r){if(t)return t;if(n!=null)return n;if(n===null)return null;var o=/<br\s*\/?>/;return!r||r==="false"||!o.test(e)?e:e.split(o).map(function(i,a){return U.createElement("span",{key:a,className:"multi-line"},i)})}function Hx(e){var t={};return Object.keys(e).filter(function(n){return/(^aria-\w+$|^role$)/.test(n)}).forEach(function(n){t[n]=e[n]}),t}function Rp(e){var t=e.length;return e.hasOwnProperty?Array.prototype.slice.call(e):new Array(t).fill().map(function(n){return e[n]})}function DB(){return"t"+L3()}var NB=`.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  bottom: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-bottom::before {
  top: 0;
  left: 50%;
  margin-left: -11px;
}
.__react_component_tooltip.place-left::before {
  right: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip.place-right::before {
  left: 0;
  top: 50%;
  margin-top: -9px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}`,Ux={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function $B(e){return Ux[e]?ym({},Ux[e]):void 0}var FB="8px 21px",zB={tooltip:3,arrow:0};function BB(e,t,n,r,o,i){return HB(e,UB(t,n,r),o,i)}function HB(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:FB,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:zB,o=t.text,i=t.background,a=t.border,s=t.arrow,l=r.arrow,c=r.tooltip;return`
  	.`.concat(e,` {
	    color: `).concat(o,`;
	    background: `).concat(i,`;
	    border: 1px solid `).concat(a,`;
	    border-radius: `).concat(c,`px;
	    padding: `).concat(n,`;
  	}

  	.`).concat(e,`.place-top {
        margin-top: -10px;
    }
    .`).concat(e,`.place-top::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: 2;
        width: 20px;
        height: 12px;
    }
    .`).concat(e,`.place-top::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        bottom: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(135deg);
    }

    .`).concat(e,`.place-bottom {
        margin-top: 10px;
    }
    .`).concat(e,`.place-bottom::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 18px;
        height: 10px;
    }
    .`).concat(e,`.place-bottom::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        top: -6px;
        left: 50%;
        margin-left: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-left {
        margin-left: -10px;
    }
    .`).concat(e,`.place-left::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-left::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        right: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(45deg);
    }

    .`).concat(e,`.place-right {
        margin-left: 10px;
    }
    .`).concat(e,`.place-right::before {
        content: "";
        background-color: inherit;
        position: absolute;
        z-index: -1;
        width: 10px;
        height: 18px;
    }
    .`).concat(e,`.place-right::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border-top-right-radius: `).concat(l,`px;
        border: 1px solid `).concat(a,`;
        background-color: `).concat(s,`;
        z-index: -2;
        left: -6px;
        top: 50%;
        margin-top: -6px;
        transform: rotate(-135deg);
    }
  `)}function UB(e,t,n){var r=e.text,o=e.background,i=e.border,a=e.arrow?e.arrow:e.background,s=$B(t);return r&&(s.text=r),o&&(s.background=o),n&&(i?s.border=i:s.border=t==="light"?"black":"white"),a&&(s.arrow=a),s}var It,za;_B(It=SB(It=EB(It=OB(It=CB(It=RB(It=AB(It=(za=function(e){$3(n,e);var t=H3(n);function n(r){var o;return D3(this,n),o=t.call(this,r),o.state={uuid:r.uuid||DB(),place:r.place||"top",desiredPlace:r.place||"top",type:r.type||"dark",effect:r.effect||"float",show:!1,border:!1,borderClass:"border",customColors:{},customRadius:{},offset:{},padding:r.padding,extraClass:"",html:!1,delayHide:0,delayShow:0,event:r.event||null,eventOff:r.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:Hx(r),isEmptyTip:!1,disable:!1,possibleCustomEvents:r.possibleCustomEvents||"",possibleCustomEventsOff:r.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},o.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),o.mount=!0,o.delayShowLoop=null,o.delayHideLoop=null,o.delayReshow=null,o.intervalUpdateContent=null,o}return N3(n,[{key:"bind",value:function(o){var i=this;o.forEach(function(a){i[a]=i[a].bind(i)})}},{key:"componentDidMount",value:function(){var o=this.props;o.insecure;var i=o.resizeHide,a=o.disableInternalStyle;this.mount=!0,this.bindListener(),this.bindWindowEvents(i),a||this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var o=this.tooltipRef;if(o){for(var i=o.parentNode;i.parentNode;)i=i.parentNode;var a;switch(i.constructor.name){case"Document":case"HTMLDocument":case void 0:a=i.head;break;case"ShadowRoot":default:a=i;break}if(!a.querySelector("style[data-react-tooltip]")){var s=document.createElement("style");s.textContent=NB,s.setAttribute("data-react-tooltip","true"),a.appendChild(s)}}}},{key:"mouseOnToolTip",value:function(){var o=this.state.show;return o&&this.tooltipRef?(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover")):!1}},{key:"getTargetArray",value:function(o){var i=[],a;if(!o)a="[data-tip]:not([data-for])";else{var s=o.replace(/\\/g,"\\\\").replace(/"/g,'\\"');a='[data-tip][data-for="'.concat(s,'"]')}return Rp(document.getElementsByTagName("*")).filter(function(l){return l.shadowRoot}).forEach(function(l){i=i.concat(Rp(l.shadowRoot.querySelectorAll(a)))}),i.concat(Rp(document.querySelectorAll(a)))}},{key:"bindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff,l=i.isCapture,c=this.getTargetArray(a);c.forEach(function(u){u.getAttribute("currentItem")===null&&u.setAttribute("currentItem","false"),o.unbindBasicListener(u),o.isCustomEvent(u)&&o.customUnbindListener(u)}),this.isBodyMode()?this.bindBodyListener(c):c.forEach(function(u){var f=o.isCapture(u),p=o.getEffect(u);if(o.isCustomEvent(u)){o.customBindListener(u);return}u.addEventListener("mouseenter",o.showTooltip,f),u.addEventListener("focus",o.showTooltip,f),p==="float"&&u.addEventListener("mousemove",o.updateTooltip,f),u.addEventListener("mouseleave",o.hideTooltip,f),u.addEventListener("blur",o.hideTooltip,f)}),s&&(window.removeEventListener(s,this.hideTooltip),window.addEventListener(s,this.hideTooltip,l)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var o=this,i=this.props,a=i.id,s=i.globalEventOff;if(this.isBodyMode())this.unbindBodyListener();else{var l=this.getTargetArray(a);l.forEach(function(c){o.unbindBasicListener(c),o.isCustomEvent(c)&&o.customUnbindListener(c)})}s&&window.removeEventListener(s,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(o){var i=this.isCapture(o);o.removeEventListener("mouseenter",this.showTooltip,i),o.removeEventListener("mousemove",this.updateTooltip,i),o.removeEventListener("mouseleave",this.hideTooltip,i)}},{key:"getTooltipContent",value:function(){var o=this.props,i=o.getContent,a=o.children,s;return i&&(Array.isArray(i)?s=i[0]&&i[0](this.state.originTooltip):s=i(this.state.originTooltip)),Bx(this.state.originTooltip,a,s,this.state.isMultiline)}},{key:"isEmptyTip",value:function(o){return typeof o=="string"&&o===""||o===null}},{key:"showTooltip",value:function(o,i){if(this.tooltipRef){if(i){var a=this.getTargetArray(this.props.id),s=a.some(function(C){return C===o.currentTarget});if(!s)return}var l=this.props,c=l.multiline,u=l.getContent,f=o.currentTarget.getAttribute("data-tip"),p=o.currentTarget.getAttribute("data-multiline")||c||!1,m=o instanceof window.FocusEvent||i,h=!0;o.currentTarget.getAttribute("data-scroll-hide")?h=o.currentTarget.getAttribute("data-scroll-hide")==="true":this.props.scrollHide!=null&&(h=this.props.scrollHide),o&&o.currentTarget&&o.currentTarget.setAttribute&&o.currentTarget.setAttribute("aria-describedby",this.props.id||this.state.uuid);var b=o.currentTarget.getAttribute("data-place")||this.props.place||"top",w=m&&"solid"||this.getEffect(o.currentTarget),v=o.currentTarget.getAttribute("data-offset")||this.props.offset||{},g=zx(o,o.currentTarget,this.tooltipRef,b.split(",")[0],b,w,v);g.position&&this.props.overridePosition&&(g.position=this.props.overridePosition(g.position,o,o.currentTarget,this.tooltipRef,b,b,w,v));var y=g.isNewState?g.newState.place:b.split(",")[0];this.clearTimer();var _=o.currentTarget,k=this.state.show?_.getAttribute("data-delay-update")||this.props.delayUpdate:0,S=this,E=function(){S.setState({originTooltip:f,isMultiline:p,desiredPlace:b,place:y,type:_.getAttribute("data-type")||S.props.type||"dark",customColors:{text:_.getAttribute("data-text-color")||S.props.textColor||null,background:_.getAttribute("data-background-color")||S.props.backgroundColor||null,border:_.getAttribute("data-border-color")||S.props.borderColor||null,arrow:_.getAttribute("data-arrow-color")||S.props.arrowColor||null},customRadius:{tooltip:_.getAttribute("data-tooltip-radius")||S.props.tooltipRadius||"3",arrow:_.getAttribute("data-arrow-radius")||S.props.arrowRadius||"0"},effect:w,offset:v,padding:_.getAttribute("data-padding")||S.props.padding,html:(_.getAttribute("data-html")?_.getAttribute("data-html")==="true":S.props.html)||!1,delayShow:_.getAttribute("data-delay-show")||S.props.delayShow||0,delayHide:_.getAttribute("data-delay-hide")||S.props.delayHide||0,delayUpdate:_.getAttribute("data-delay-update")||S.props.delayUpdate||0,border:(_.getAttribute("data-border")?_.getAttribute("data-border")==="true":S.props.border)||!1,borderClass:_.getAttribute("data-border-class")||S.props.borderClass||"border",extraClass:_.getAttribute("data-class")||S.props.class||S.props.className||"",disable:(_.getAttribute("data-tip-disable")?_.getAttribute("data-tip-disable")==="true":S.props.disable)||!1,currentTarget:_},function(){h&&S.addScrollListener(S.state.currentTarget),S.updateTooltip(o),u&&Array.isArray(u)&&(S.intervalUpdateContent=setInterval(function(){if(S.mount){var A=S.props.getContent,P=Bx(f,"",A[0](),p),L=S.isEmptyTip(P);S.setState({isEmptyTip:L}),S.updatePosition()}},u[1]))})};k?this.delayReshow=setTimeout(E,k):E()}}},{key:"updateTooltip",value:function(o){var i=this,a=this.state,s=a.delayShow,l=a.disable,c=this.props,u=c.afterShow,f=c.disable,p=this.getTooltipContent(),m=o.currentTarget||o.target;if(!this.mouseOnToolTip()&&!(this.isEmptyTip(p)||l||f)){var h=this.state.show?0:parseInt(s,10),b=function(){if(Array.isArray(p)&&p.length>0||p){var v=!i.state.show;i.setState({currentEvent:o,currentTarget:m,show:!0},function(){i.updatePosition(function(){v&&u&&u(o)})})}};this.delayShowLoop&&clearTimeout(this.delayShowLoop),h?this.delayShowLoop=setTimeout(b,h):(this.delayShowLoop=null,b())}}},{key:"listenForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){var o=this.state.show;o&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(o,i){var a=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isScroll:!1},l=this.state.disable,c=s.isScroll,u=c?0:this.state.delayHide,f=this.props,p=f.afterHide,m=f.disable,h=this.getTooltipContent();if(this.mount&&!(this.isEmptyTip(h)||l||m)){if(i){var b=this.getTargetArray(this.props.id),w=b.some(function(g){return g===o.currentTarget});if(!w||!this.state.show)return}o&&o.currentTarget&&o.currentTarget.removeAttribute&&o.currentTarget.removeAttribute("aria-describedby");var v=function(){var y=a.state.show;if(a.mouseOnToolTip()){a.listenForTooltipExit();return}a.removeListenerForTooltipExit(),a.setState({show:!1},function(){a.removeScrollListener(a.state.currentTarget),y&&p&&p(o)})};this.clearTimer(),u?this.delayHideLoop=setTimeout(v,parseInt(u,10)):v()}}},{key:"hideTooltipOnScroll",value:function(o,i){this.hideTooltip(o,i,{isScroll:!0})}},{key:"addScrollListener",value:function(o){var i=this.isCapture(o);window.addEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"removeScrollListener",value:function(o){var i=this.isCapture(o);window.removeEventListener("scroll",this.hideTooltipOnScroll,i)}},{key:"updatePosition",value:function(o){var i=this,a=this.state,s=a.currentEvent,l=a.currentTarget,c=a.place,u=a.desiredPlace,f=a.effect,p=a.offset,m=this.tooltipRef,h=zx(s,l,m,c,u,f,p);if(h.position&&this.props.overridePosition&&(h.position=this.props.overridePosition(h.position,s,l,m,c,u,f,p)),h.isNewState)return this.setState(h.newState,function(){i.updatePosition(o)});o&&typeof o=="function"&&o(),m.style.left=h.position.left+"px",m.style.top=h.position.top+"px"}},{key:"clearTimer",value:function(){this.delayShowLoop&&(clearTimeout(this.delayShowLoop),this.delayShowLoop=null),this.delayHideLoop&&(clearTimeout(this.delayHideLoop),this.delayHideLoop=null),this.delayReshow&&(clearTimeout(this.delayReshow),this.delayReshow=null),this.intervalUpdateContent&&(clearInterval(this.intervalUpdateContent),this.intervalUpdateContent=null)}},{key:"hasCustomColors",value:function(){var o=this;return!!(Object.keys(this.state.customColors).find(function(i){return i!=="border"&&o.state.customColors[i]})||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var o=this,i=this.state,a=i.extraClass,s=i.html,l=i.ariaProps,c=i.disable,u=i.uuid,f=this.getTooltipContent(),p=this.isEmptyTip(f),m=this.props.disableInternalStyle?"":BB(this.state.uuid,this.state.customColors,this.state.type,this.state.border,this.state.padding,this.state.customRadius),h="__react_component_tooltip"+" ".concat(this.state.uuid)+(this.state.show&&!c&&!p?" show":"")+(this.state.border?" "+this.state.borderClass:"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),b=this.props.wrapper;n.supportedWrappers.indexOf(b)<0&&(b=n.defaultProps.wrapper);var w=[h,a].filter(Boolean).join(" ");if(s){var v="".concat(f).concat(m?`
<style aria-hidden="true">`.concat(m,"</style>"):"");return U.createElement(b,Hu({className:"".concat(w),id:this.props.id||u,ref:function(y){return o.tooltipRef=y}},l,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:v}}))}else return U.createElement(b,Hu({className:"".concat(w),id:this.props.id||u},l,{ref:function(y){return o.tooltipRef=y},"data-id":"tooltip"}),m&&U.createElement("style",{dangerouslySetInnerHTML:{__html:m},"aria-hidden":"true"}),f)}}],[{key:"propTypes",get:function(){return{uuid:d.string,children:d.any,place:d.string,type:d.string,effect:d.string,offset:d.object,padding:d.string,multiline:d.bool,border:d.bool,borderClass:d.string,textColor:d.string,backgroundColor:d.string,borderColor:d.string,arrowColor:d.string,arrowRadius:d.string,tooltipRadius:d.string,insecure:d.bool,class:d.string,className:d.string,id:d.string,html:d.bool,delayHide:d.number,delayUpdate:d.number,delayShow:d.number,event:d.string,eventOff:d.string,isCapture:d.bool,globalEventOff:d.string,getContent:d.any,afterShow:d.func,afterHide:d.func,overridePosition:d.func,disable:d.bool,scrollHide:d.bool,resizeHide:d.bool,wrapper:d.string,bodyMode:d.bool,possibleCustomEvents:d.string,possibleCustomEventsOff:d.string,clickable:d.bool,disableInternalStyle:d.bool}}},{key:"getDerivedStateFromProps",value:function(o,i){var a=i.ariaProps,s=Hx(o),l=Object.keys(s).some(function(c){return s[c]!==a[c]});return l?ym(ym({},i),{},{ariaProps:s}):null}}]),n}(U.Component),xs(za,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),xs(za,"supportedWrappers",["div","span"]),xs(za,"displayName","ReactTooltip"),za))||It)||It)||It)||It)||It)||It);function jm(){return jm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jm.apply(this,arguments)}function gi(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function j(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Wx;Y.div(Wx||(Wx=j([""])));var R={white:"#FFFFFF",info:"#17A2B8",light:"#EEEEEE",primary:"#3b82f6",primary50:"#eff6ff",primary100:"#dbeafe",primary200:"#bfdbfe",primary300:"#93c5fd",primary400:"#60a5fa",primary500:"#3b82f6",primary600:"#2563eb",primary700:"#1d4ed8",primary800:"#1e40af",primary900:"#1e3a8a",secondary:"#6366f1",secondary50:"#eef2ff",secondary100:"#e0e7ff",secondary200:"#c7d2fe",secondary300:"#a5b4fc",secondary400:"#818cf8",secondary500:"#6366f1",secondary600:"#4f46e5",secondary700:"#4338ca",secondary800:"#3730a3",secondary900:"#312e81",danger:"#ef4444",danger50:"#fef2f2",danger100:"#fee2e2",danger200:"#fecaca",danger300:"#fca5a5",danger400:"#f87171",danger500:"#ef4444",danger600:"#dc2626",danger700:"#b91c1c",danger800:"#991b1b",danger900:"#7f1d1d",success:"#22c55e",success50:"#f0fdf4",success100:"#dcfce7",success200:"#bbf7d0",success300:"#86efac",success400:"#4ade80",success500:"#22c55e",success600:"#16a34a",success700:"#15803d",success800:"#166534",success900:"#14532d",warning:"#eab308",warning50:"#fefce8",warning100:"#fef9c3",warning200:"#fef08a",warning300:"#fde047",warning400:"#facc15",warning500:"#eab308",warning600:"#ca8a04",warning700:"#a16207",warning800:"#854d0e",warning900:"#713f12",brown:"#bfa094",brown50:"#fdf8f6",brown100:"#f2e8e5",brown200:"#eaddd7",brown300:"#e0cec7",brown400:"#d2bab0",brown500:"#bfa094",brown600:"#a18072",brown700:"#977669",brown800:"#846358",brown900:"#43302b",dark:"#111827",dark50:"#f9fafb",dark100:"#f3f4f6",dark200:"#e5e7eb",dark300:"#d1d5db",dark400:"#9ca3af",dark500:"#6b7280",dark600:"#4b5563",dark700:"#374151",dark800:"#1f2937",dark900:"#111827",primaryHover:"#276EF1BD",secondaryHover:"#7356BFBD",successHover:"#05944FBD",warningHover:"#FFE975BD",dangerHover:"#E11900BD",whiteHover:"#FFFFFFD5",darkHover:"#000000BD",infoHover:"#17A2B8BD",lightHover:"#EEEEEEBD"},Pr={colors:R,colorStyles:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary,"&:hover":{color:R.white,backgroundColor:R.primaryHover}},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary,"&:hover":{color:R.white,backgroundColor:R.secondaryHover}},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light,"&:hover":{color:R.dark,backgroundColor:R.lightHover}},success:{color:R.white,borderColor:R.success,backgroundColor:R.success,"&:hover":{color:R.white,backgroundColor:R.successHover}},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger,"&:hover":{color:R.white,backgroundColor:R.dangerHover}},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning,"&:hover":{color:R.dark,backgroundColor:R.warningHover}},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark,"&:hover":{color:R.white,backgroundColor:R.darkHover}},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white,"&:hover":{color:R.dark,backgroundColor:R.whiteHover}},info:{color:R.white,borderColor:R.info,backgroundColor:R.info,"&:hover":{color:R.white,backgroundColor:R.infoHover}}},buttonStyle:{primary:{color:R.white,borderColor:R.primary,backgroundColor:R.primary},secondary:{color:R.white,borderColor:R.secondary,backgroundColor:R.secondary},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},success:{color:R.white,borderColor:R.success,backgroundColor:R.success},danger:{color:R.white,borderColor:R.danger,backgroundColor:R.danger},warning:{color:R.dark,borderColor:R.warning,backgroundColor:R.warning},dark:{color:R.white,borderColor:R.dark,backgroundColor:R.dark},white:{color:R.dark,borderColor:R.white,backgroundColor:R.white},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}},lightStyle:{primary:{color:R.primary,borderColor:R.primary,backgroundColor:"#E6E6FF"},secondary:{color:R.secondary,borderColor:R.secondary,backgroundColor:"#F0EDF8"},success:{color:R.success,borderColor:R.success,backgroundColor:"#E7FAE7"},danger:{color:R.danger,borderColor:R.danger,backgroundColor:"#FCE9E9"},warning:{color:R.dark,borderColor:R.warning,backgroundColor:"#FFFBE6"},dark:{color:R.white,borderColor:R.dark,backgroundColor:"#333333"},white:{color:R.dark,borderColor:R.dark,backgroundColor:"#F9F9F9"},light:{color:R.dark,borderColor:R.light,backgroundColor:R.light},info:{color:R.white,borderColor:R.info,backgroundColor:R.info}}};d.string,d.func,d.string,d.string,d.string,d.bool,d.string;var Vx,Yx;Y.div(Vx||(Vx=j([`
  width: 100%;
  `,`;
  .accordion-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #f4f4f4;
  }
  .accordion-list__item + .accordion-list__item {
    border-top: 1px solid #f4f4f4;
  }
  .accordion-item--opened .accordion-item__icon {
    transform: rotate(180deg);
  }
  .accordion-item--opened .accordion-item__inner {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }
  .accordion-item--opened .accordion-item__content {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }
  .accordion-item__line {
    display: block;
    padding: 0.8rem 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 2;
    position: relative;
  }
  .accordion-item__title {
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
    color: #121212;
  }
  .accordion-item__icon {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABGklEQVR4Ae3RAcZCQRiF4buDfwshBGi+2UQgcIGAVtpSIuS/KyilG+UTcbk6zIH3GQBm3mM6AAAAAAAAAACA+eqf/yZBXcV/2XeCVPYx1FXj/FjGUMd45AQp/1HHGGLZNL+e61jHnKDmv8652YT1IvPfE2LX/Sh27/ycsF60yT/lk58JYn6eU4MJccjnlAmZ/33i0OAH4jg9Qcw/5g9YJpS+m6n0xvzpCfVe+nn59S7kGyYo+YYJWz3fO+E2PaFs9XzPhMy/6fmWCXq+YUJs9HzrhLh+JsQmrnq+bYKeb52g53snXPR88wQ93z9Bz/dP0PP9E/R89wQ93zpBz7dO0POtE/R86wQ93zpBzzdP+MoHAAAAAAAAAADAExTnTW20AtjhAAAAAElFTkSuQmCC);
    opacity: 0.6;
  }
  .accordion-item__inner {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
  }
  .accordion-item__content {
    opacity: 0;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0 1.2rem 1.2rem;
  }
  .accordion-item__paragraph {
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 300;
    line-height: 1.3;
  }
`])),function(e){return e.hideIcon?te(Yx||(Yx=j([`
          .accordion-item__icon {
            display: none;
          }
        `]))):null});d.string,d.string,d.string,d.bool,d.string,d.arrayOf(d.any);var Gx,qx;Y.div(Gx||(Gx=j([`
    `,`
    border-radius: 0px;
    align-items:center;
    justify-content:space-between;
    min-width:500px;
`])),Zt);Y.button(qx||(qx=j([`
	color:inherit;
	border:none;
	background-color:transparent;
    right: 0px;
    position: absolute;
    padding: 0px 1.2em;
	:focus { outline:none;	}
`])));d.string,d.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),d.func,d.func,d.string,d.bool;var Xx,Kx;Y.div(Xx||(Xx=j([""])));Y.div(Kx||(Kx=j([`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .animated.infinite {
    animation-iteration-count: infinite;
  }
  .animated.delay-1s {
    animation-delay: 1s;
  }
  .animated.delay-2s {
    animation-delay: 2s;
  }
  .animated.delay-3s {
    animation-delay: 3s;
  }
  .animated.delay-4s {
    animation-delay: 4s;
  }
  .animated.delay-5s {
    animation-delay: 5s;
  }
  .animated.fast {
    animation-duration: 800ms;
  }
  .animated.faster {
    animation-duration: 500ms;
  }
  .animated.slow {
    animation-duration: 2s;
  }
  .animated.slower {
    animation-duration: 3s;
  }
  @media (prefers-reduced-motion) {
    .animated {
      transition: none !important;
      animation: unset !important;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeft {
    animation-name: fadeInLeft;
  }
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRight {
    animation-name: fadeInRight;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .fadeOut {
    animation-name: fadeOut;
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
  .fadeOutDown {
    animation-name: fadeOutDown;
  }
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .fadeOutLeft {
    animation-name: fadeOutLeft;
  }
  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
  .fadeOutRight {
    animation-name: fadeOutRight;
  }
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
  .fadeOutUp {
    animation-name: fadeOutUp;
  } /*!
 * animate.css -http://daneden.me/animate
 * Version - 3.7.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2018 Daniel Eden
 */
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      transform: translate3d(0, 0, 0);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    40%,
    43% {
      transform: translate3d(0, -30px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    70% {
      transform: translate3d(0, -15px, 0);
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
  .bounce {
    transform-origin: center bottom;
    animation-name: bounce;
  }
  @keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  .flash {
    animation-name: flash;
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    animation-name: pulse;
  }
  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .rubberBand {
    animation-name: rubberBand;
  }
  @keyframes shake {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translate3d(-10px, 0, 0);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translate3d(10px, 0, 0);
    }
  }
  .shake {
    animation-name: shake;
  }
  @keyframes headShake {
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }
  }
  .headShake {
    animation-name: headShake;
    animation-timing-function: ease-in-out;
  }
  @keyframes swing {
    20% {
      transform: rotate3d(0, 0, 1, 15deg);
    }
    40% {
      transform: rotate3d(0, 0, 1, -10deg);
    }
    60% {
      transform: rotate3d(0, 0, 1, 5deg);
    }
    80% {
      transform: rotate3d(0, 0, 1, -5deg);
    }
    to {
      transform: rotate3d(0, 0, 1, 0deg);
    }
  }
  .swing {
    transform-origin: top center;
    animation-name: swing;
  }
  @keyframes tada {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%,
    20% {
      transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }
    30%,
    50%,
    70%,
    90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%,
    60%,
    80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }
  .tada {
    animation-name: tada;
  }
  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0);
    }
    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }
    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }
    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }
    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }
    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .wobble {
    animation-name: wobble;
  }
  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
    77.7% {
      transform: skewX(0.39063deg) skewY(0.39063deg);
    }
    88.8% {
      transform: skewX(-0.19531deg) skewY(-0.19531deg);
    }
  }
  .jello {
    transform-origin: center;
    animation-name: jello;
  }
  @keyframes heartBeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.3);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.3);
    }
    70% {
      transform: scale(1);
    }
  }
  .heartBeat {
    animation-name: heartBeat;
    animation-duration: 1.3s;
    animation-timing-function: ease-in-out;
  }
  @keyframes bounceIn {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .bounceIn {
    animation-name: bounceIn;
    animation-duration: 0.75s;
  }
  @keyframes bounceInDown {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(0, -3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, 25px, 0);
    }
    75% {
      transform: translate3d(0, -10px, 0);
    }
    90% {
      transform: translate3d(0, 5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInDown {
    animation-name: bounceInDown;
  }
  @keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInLeft {
    animation-name: bounceInLeft;
  }
  @keyframes bounceInRight {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(-25px, 0, 0);
    }
    75% {
      transform: translate3d(10px, 0, 0);
    }
    90% {
      transform: translate3d(-5px, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInRight {
    animation-name: bounceInRight;
  }
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    75% {
      transform: translate3d(0, 10px, 0);
    }
    90% {
      transform: translate3d(0, -5px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInUp {
    animation-name: bounceInUp;
  }
  @keyframes bounceOut {
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  .bounceOut {
    animation-name: bounceOut;
    animation-duration: 0.75s;
  }
  @keyframes bounceOutDown {
    20% {
      transform: translate3d(0, 10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, -20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .bounceOutDown {
    animation-name: bounceOutDown;
  }
  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .bounceOutLeft {
    animation-name: bounceOutLeft;
  }
  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      transform: translate3d(-20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .bounceOutRight {
    animation-name: bounceOutRight;
  }
  @keyframes bounceOutUp {
    20% {
      transform: translate3d(0, -10px, 0);
    }
    40%,
    45% {
      opacity: 1;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .bounceOutUp {
    animation-name: bounceOutUp;
  }
  @keyframes fadeInDownBig {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDownBig {
    animation-name: fadeInDownBig;
  }
  @keyframes fadeInLeftBig {
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInLeftBig {
    animation-name: fadeInLeftBig;
  }
  @keyframes fadeInRightBig {
    from {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInRightBig {
    animation-name: fadeInRightBig;
  }
  @keyframes fadeInUpBig {
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUpBig {
    animation-name: fadeInUpBig;
  }
  @keyframes fadeOutDownBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }
  }
  .fadeOutDownBig {
    animation-name: fadeOutDownBig;
  }
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }
  .fadeOutLeftBig {
    animation-name: fadeOutLeftBig;
  }
  @keyframes fadeOutRightBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }
  .fadeOutRightBig {
    animation-name: fadeOutRightBig;
  }
  @keyframes fadeOutUpBig {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  }
  .fadeOutUpBig {
    animation-name: fadeOutUpBig;
  }
  @keyframes flip {
    from {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, -360deg);
      animation-timing-function: ease-out;
    }
    40% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -190deg);
      animation-timing-function: ease-out;
    }
    50% {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
        rotate3d(0, 1, 0, -170deg);
      animation-timing-function: ease-in;
    }
    80% {
      transform: perspective(400px) scale3d(0.95, 0.95, 0.95)
        translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
    to {
      transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)
        rotate3d(0, 1, 0, 0deg);
      animation-timing-function: ease-in;
    }
  }
  .flip {
    backface-visibility: visible;
    animation-name: flip;
  }
  @keyframes flipInX {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInX {
    backface-visibility: visible;
    animation-name: flipInX;
  }
  @keyframes flipInY {
    from {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    }
    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
  .flipInY {
    backface-visibility: visible;
    animation-name: flipInY;
  }
  @keyframes flipOutX {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    }
  }
  .flipOutX {
    animation-name: flipOutX;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes flipOutY {
    from {
      transform: perspective(400px);
    }
    30% {
      opacity: 1;
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    }
    to {
      opacity: 0;
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    }
  }
  .flipOutY {
    animation-name: flipOutY;
    animation-duration: 0.75s;
    backface-visibility: visible;
  }
  @keyframes lightSpeedIn {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(-30deg);
    }
    60% {
      opacity: 1;
      transform: skewX(20deg);
    }
    80% {
      transform: skewX(-5deg);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .lightSpeedIn {
    animation-name: lightSpeedIn;
    animation-timing-function: ease-out;
  }
  @keyframes lightSpeedOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) skewX(30deg);
    }
  }
  .lightSpeedOut {
    animation-name: lightSpeedOut;
    animation-timing-function: ease-in;
  }
  @keyframes rotateIn {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -200deg);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: center;
    }
  }
  .rotateIn {
    animation-name: rotateIn;
  }
  @keyframes rotateInDownLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInDownLeft {
    animation-name: rotateInDownLeft;
  }
  @keyframes rotateInDownRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInDownRight {
    animation-name: rotateInDownRight;
  }
  @keyframes rotateInUpLeft {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: left bottom;
    }
  }
  .rotateInUpLeft {
    animation-name: rotateInUpLeft;
  }
  @keyframes rotateInUpRight {
    from {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -90deg);
      transform-origin: right bottom;
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transform-origin: right bottom;
    }
  }
  .rotateInUpRight {
    animation-name: rotateInUpRight;
  }
  @keyframes rotateOut {
    from {
      opacity: 1;
      transform-origin: center;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 200deg);
      transform-origin: center;
    }
  }
  .rotateOut {
    animation-name: rotateOut;
  }
  @keyframes rotateOutDownLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutDownLeft {
    animation-name: rotateOutDownLeft;
  }
  @keyframes rotateOutDownRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutDownRight {
    animation-name: rotateOutDownRight;
  }
  @keyframes rotateOutUpLeft {
    from {
      opacity: 1;
      transform-origin: left bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, -45deg);
      transform-origin: left bottom;
    }
  }
  .rotateOutUpLeft {
    animation-name: rotateOutUpLeft;
  }
  @keyframes rotateOutUpRight {
    from {
      opacity: 1;
      transform-origin: right bottom;
    }
    to {
      opacity: 0;
      transform: rotate3d(0, 0, 1, 90deg);
      transform-origin: right bottom;
    }
  }
  .rotateOutUpRight {
    animation-name: rotateOutUpRight;
  }
  @keyframes hinge {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    40%,
    80% {
      opacity: 1;
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 700px, 0);
    }
  }
  .hinge {
    animation-name: hinge;
    animation-duration: 2s;
  }
  @keyframes jackInTheBox {
    from {
      opacity: 0;
      transform: scale(0.1) rotate(30deg);
      transform-origin: center bottom;
    }
    50% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(3deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .jackInTheBox {
    animation-name: jackInTheBox;
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .rollIn {
    animation-name: rollIn;
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
  .rollOut {
    animation-name: rollOut;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  }
  .zoomIn {
    animation-name: zoomIn;
  }
  @keyframes zoomInDown {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInDown {
    animation-name: zoomInDown;
  }
  @keyframes zoomInLeft {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInLeft {
    animation-name: zoomInLeft;
  }
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInRight {
    animation-name: zoomInRight;
  }
  @keyframes zoomInUp {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomInUp {
    animation-name: zoomInUp;
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  }
  .zoomOut {
    animation-name: zoomOut;
  }
  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutDown {
    animation-name: zoomOutDown;
  }
  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
  }
  .zoomOutLeft {
    animation-name: zoomOutLeft;
  }
  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    }
    to {
      opacity: 0;
      transform: scale(0.1) translate3d(2000px, 0, 0);
      transform-origin: right center;
    }
  }
  .zoomOutRight {
    animation-name: zoomOutRight;
  }
  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    to {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
      transform-origin: center bottom;
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }
  .zoomOutUp {
    animation-name: zoomOutUp;
  }
  @keyframes slideInDown {
    from {
      visibility: visible;
      transform: translate3d(0, -100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInDown {
    animation-name: slideInDown;
  }
  @keyframes slideInLeft {
    from {
      visibility: visible;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInLeft {
    animation-name: slideInLeft;
  }
  @keyframes slideInRight {
    from {
      visibility: visible;
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInRight {
    animation-name: slideInRight;
  }
  @keyframes slideInUp {
    from {
      visibility: visible;
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .slideInUp {
    animation-name: slideInUp;
  }
  @keyframes slideOutDown {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }
  .slideOutDown {
    animation-name: slideOutDown;
  }
  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }
  .slideOutLeft {
    animation-name: slideOutLeft;
  }
  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }
  .slideOutRight {
    animation-name: slideOutRight;
  }
  @keyframes slideOutUp {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }
  .slideOutUp {
    animation-name: slideOutUp;
  }
`])));d.oneOfType([d.arrayOf(d.node),d.node]),d.string,d.number,d.string,d.oneOfType([d.string,d.number]),d.bool,d.func,d.func,d.func,d.bool,d.node,d.oneOfType([d.func,d.string]),d.string,d.number;var Qx;Y.span(Qx||(Qx=j([`
  display: flex;
  align-items: center;
  `,`
  `,`
  font-weight:200;
  box-shadow: `,`;

  `,`;
  `,`
  .icon {
    `,`
    i {
      `,`
      `,`
    }
  }
`])),qs,Zt,function(e){return e.flat?null:"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},Cn({prop:"borderType",variants:{box:{borderRadius:"0px"},pill:{borderRadius:"20px"}}}),Cn({prop:"size",variants:{large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6.25px 8.75px",fontSize:"0.85rem"},small:{padding:"4px 6px",fontSize:"0.625rem"}}}),Cn({prop:"size",variants:{large:{fontSize:"1rem",marginRight:"12px"},medium:{fontSize:"0.85rem",marginRight:"10px"},small:{fontSize:"0.625rem !important",marginRight:"7.5px"}}}),qs,Cn({prop:"size",variants:{large:{fontSize:"1rem"},medium:{fontSize:"0.85rem"},small:{fontSize:"0.625rem !important"}}}));d.node,d.string,d.bool,d.string,d.string,d.string,d.string,d.oneOfType([d.oneOf([50,100,200,300,400,500,600,700,800,900]),d.string]);var Jx;Y.div(Jx||(Jx=j([`
  `,`
  `,`
`])),qs,sC);d.string,d.string,d.string,d.string,d.node,d.string,d.string,d.string,d.string,d.string,d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.oneOfType([d.number,d.string]),d.string;var Zx;Y.ol(Zx||(Zx=j([`
  `,`;
  font-weight: `,`;
  border-radius: `,`;
  text-transform: `,`;
`])),Zt,function(e){return e.bold?"bold":e.light?"light":null},function(e){return e.circle?"50%":"0"},function(e){return e.uppercase?"uppercase":"capitalize"});d.bool,d.node,d.string,d.bool,d.bool,d.node;var ew,tw,nw,rw,ow,iw,aw,sw;Y.div(ew||(ew=j([`
  border: none;
  box-shadow: `,`;
  box-sizing: border-box;
  font-weight: 600;
  display:flex;
  justify-content:center;
  align-items:center;
  `,`}

    `,`
    
  `,`;

  `,`;

  `,`;

`])),function(e){return e.flat?"none":"0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"},function(e){var t=e.bg;return t&&te(tw||(tw=j([`
      background: `,`;
      color: #fff;
      &:hover {
        `,`;
    `])),R[""+t],function(n){var r=n.bg;return r&&te(nw||(nw=j([`
            transform: scale(1.02);
            color: #fff;
          `])))})},Zt,Cn({prop:"size",variants:{xl:{padding:"12px 18.75px",fontSize:"1rem"},large:{padding:"8.75px 15px",fontSize:"1rem"},medium:{padding:"6px 12px",fontSize:"0.85rem"},small:{padding:"3px 6px",fontSize:"0.625rem"}}}),function(e){return e.circle===!0?te(rw||(rw=j([`
          border-radius: 30px;
        `]))):te(ow||(ow=j([`
          border-radius: 4px;
        `])))},function(e){return e.outline===!0&&te(iw||(iw=j([`
      background: transparent;
      `,`;
      border-width: 2px;
      &:hover {
        background: transparent;
        `,`;
      }
    `])),function(t){var n=t.bg;return n&&te(aw||(aw=j([`
          border: 2px solid `,`;
          color: `,`;
        `])),R[""+n],K(""+R[""+n]).darken(10))},function(t){var n=t.bg;return n&&te(sw||(sw=j([`
            border: 2.4px solid `,`;
            transform: scale(1.02);
            color: `,`;
          `])),R[""+n],K(""+R[""+n]).darken(10))})});d.bool,d.bool,d.bool,d.node,d.bool,d.string,d.string,d.bool,d.string,d.bool,d.any,d.func,d.string,d.string,d.string,d.string,d.string,d.string,d.bool;var lw;Y.div(lw||(lw=j([`
  `,`
  
  .btn {
  	border-radius: 0px;
  }

`])),Zt);d.string,d.node,d.string,d.string,d.string,d.bool;d.string,d.node,d.string,d.string;var cw,uw,dw;Y.div(cw||(cw=j([`
  position: relative;
  background-color: #ffffff;
  `,`
`])),function(e){return e.border?te(uw||(uw=j([`
          border-top: 8px solid #e2e2e2;
          border-bottom: 8px solid #e2e2e2;
        `]))):te(dw||(dw=j([`
          border: 2px solid #e2e2e2;
        `])))});d.string,d.string,d.string,d.bool,d.node;var fw;Y.div(fw||(fw=j([`
`])));d.bool,d.string,d.oneOfType([d.func,d.string]);d.string,d.string,d.bool,d.bool,d.bool,d.any,d.oneOfType([d.func,d.string]),d.bool;d.bool.isRequired,d.string,d.node,d.string,d.string,d.func;d.node,d.string;var pw;Y.div(pw||(pw=j([`
  .carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &.carousel-fade .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block !important;
    opacity: 0;
    z-index: 0;
    transition: transform 0ms ease-in-out, opacity 0.8s ease-out;
  }

  &.carousel-fade .carousel-item.active {
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  &.carousel-multi-item .carousel-item {
    display: inline-block !important;
  }

  &.carousel .carousel-slide-item {
    transition: left 0.5s;
  }

  .carousel-control-prev,
  .carousel-control-next,
  .carousel-item-prev,
  .carousel-item-next {
    z-index: 2;
  }
`])));O.createContext({activeItem:null,length:null,slide:null});d.number,d.node,d.string,d.oneOfType([d.number,d.bool]),d.number,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.oneOfType([d.func,d.string]),d.bool,d.bool;d.bool,d.node,d.string,d.oneOfType([d.func,d.string]);d.bool,d.node,d.string,d.any,d.oneOfType([d.func,d.string]);d.string,d.string,d.func;var hw;Y.div(hw||(hw=j([""])));d.bool,d.string,d.string,d.string,d.bool,d.string,d.string,d.oneOfType([d.func,d.string]),d.bool,d.string,d.string;d.node,d.string,d.oneOfType([d.number,d.shape({hide:d.number,show:d.number})]),d.string,d.oneOfType([d.string,d.bool]),d.bool,d.func,d.func;var mw;Y.div(mw||(mw=j([""])));d.string,d.bool,d.oneOf(["sm","md","lg","xl"]),d.oneOfType([d.func,d.string]);d.bool.isRequired,d.string,d.arrayOf(d.object),d.func,d.bool,d.bool,d.bool,d.bool;var gw,bw,vw;Y.div(gw||(gw=j([`
  table-layout: `,`;
  `,`;
`])),function(e){return e.autoWidth?"auto":null},function(e){return e.scrollY?te(bw||(bw=j([`
          display: block;
          max-height: 200px;
          overflow-y: auto;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        `]))):null});Y.table(vw||(vw=j([""])));d.bool,d.bool,d.bool,d.bool,d.node,d.string,d.bool,d.bool,d.bool,d.string,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.string,d.string;d.node,d.string,d.arrayOf(d.object),d.bool;d.node,d.string,d.arrayOf(d.object),d.bool;d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.func.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.string.isRequired,d.bool.isRequired,d.string.isRequired,d.bool.isRequired,d.node,d.arrayOf(d.object),d.bool,d.arrayOf(d.object);d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.func.isRequired,d.func.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.bool.isRequired,d.string.isRequired,d.bool.isRequired,d.string.isRequired,d.bool.isRequired,d.number.isRequired,d.node,d.arrayOf(d.object),d.string,d.arrayOf(d.object),d.bool,d.bool;d.arrayOf(d.number).isRequired,d.oneOfType([d.string,d.number,d.object]).isRequired,d.func.isRequired,d.number.isRequired;d.bool.isRequired,d.number.isRequired,d.arrayOf(d.number).isRequired,d.func.isRequired,d.oneOfType([d.number,d.object,d.string]).isRequired,d.bool.isRequired,d.bool,d.bool,d.func;var yw,xw,ww;Y.div(yw||(yw=j([`
  // icon container
  .icon {
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon + input:not([type='checkbox']):not([type='radio']),
  textarea {
    padding-left: 30px;
  }
  &.input-group label {
    top: 0;
    margin-bottom: 0;
  }
  &.input-group .input-group-text {
    background-color: #e0e0e0;
  }
  &.input-group .input-group-text.md-addon {
    font-weight: 500;
    background-color: transparent;
    border: none;
  }
  &.input-group .form-control {
    padding: 0.375rem 0.75rem;
    margin: 0;
  }
  & {
    position: relative;
  }
  & {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      border-radius: 4px;
      border: 1px solid #dadce0;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: none;
      padding: 4px 10px;
      min-height: 40px;
      width: 100%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
      &:focus {
        outline: none;
        &::placeholder {
          font-weight: 700 !important;
        }
      }
      &::placeholder {
        color: #757575;
        font-weight: 400;
        font-size: inherit;
        color: #757575;
        cursor: text;
        transition: color 0.2s ease-out;
      }
    }
    textarea {
      padding: 10px !important;
    }
  }
  &.size-lg {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 50px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.size-sm {
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      min-height: 30px;
      font-size: `,`;
      &::placeholder {
        font-size: `,`;
      }
    }
  }
  &.checkbox,
  &.radio {
    margin: 0;
    height: 20px;
    width: 20px;
    &.size-lg {
      transform: scale(1.4);
    }
    &.size-sm {
      transform: scale(0.6);
    }
    position: relative;
    label {
      background-color: #fff;
      border: 1px solid #ccc;
      // border-radius: 4px;
      cursor: pointer;
      height: 20px;
      left: 0;
      position: absolute;
      top: 0;
      width: 20px;
    }

    input[type='checkbox'],
    input[type='radio'] {
      width: 20px;
      height: 20px;
      visibility: hidden;
    }
    input[type='radio'] + label {
      border-radius: 50%;
    }
    input[type='checkbox'] + label:after {
      border: 2px solid `,`;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 2px;
      opacity: 0;
      position: absolute;
      top: 2px;
      transform: rotate(-45deg);
      width: 12px;
    }
    input[type='radio']:not(.browser) + label:after {
      border: 2px solid `,`;
      border-radius: 50%;
      content: '';
      height: 10px;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
    }

    input[type='checkbox']:not(.browser-default):checked + label,
    input[type='radio']:not(.browser-default):checked + label {
      background-color: `,`;
      border: 2px solid `,`;
    }
    input[type='checkbox']:not(.browser-default):checked + label:after,
    input[type='radio']:not(.browser-default):checked + label:after {
      opacity: 1;
    }
    &.input-color {
      &-primary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }

        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-secondary {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-success {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-danger {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-warning {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-info {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
      &-dark {
        input[type='checkbox']:not(.browser-default):checked + label,
        input[type='radio']:not(.browser-default):checked + label {
          background-color: `,`;
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after,
        input[type='radio']:not(.browser-default):checked + label:after {
          border: 2px solid `,`;
        }
        input[type='checkbox']:not(.browser-default):checked + label:after {
          border-top: none;
          border-right: none;
        }
      }
    }
  }
  &.input-color-primary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-secondary {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-success {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  &.input-color-danger {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
    input[type='checkbox']:not(.browser-default),
    input[type='radio']:not(.browser-default) {
      background: red;
    }
  }
  &.input-color-warning {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-info {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }
  &.input-color-dark {
    &.bg {
      input:not([type='checkbox']),
      input:not([type='radio']),
      textarea {
        &:focus,
        &:focus-visible {
          background: `,`;
        }
      }
    }
    input:not([type='checkbox']):not([type='radio']),
    textarea {
      &:focus,
      &:focus-visible {
        border: 1px solid `,`;
        box-shadow: inset 0 0 0 1px `,`;
        &::placeholder {
          color: `,`;
          font-weight: 700;
        }
      }
    }
  }

  & label.active {
    font-weight: 700;
  }
  & .prefix {
    top: 0.25rem;
    font-size: 1.75rem;
  }
  & .prefix ~ input,
  & .prefix ~ textarea {
    width: calc(100% - 2.5rem);
    margin-left: 2.5rem;
  }
  & .prefix ~ label {
    margin-left: 2.5rem;
  }
  & .prefix ~ .form-text {
    margin-left: 2.6rem;
  }
  & .prefix {
    position: absolute;
    transition: color 0.2s;
  }
  & .prefix.active {
    color: #4285f4;
  }
  textarea {
    padding: 0;
    overflow-y: hidden;
  }

  & .form-control.is-valid,
  .was-validated & .form-control:valid {
    padding-right: 0;
  }
  .needs-validation & label {
    left: 0.3rem;
  }
  .custom-file-input:lang(es) ~ .custom-file-label::after {
    content: 'Elegir';
  }
  .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
    content: 'Wybierz';
  }
  .custom-file-input:lang(fr) ~ .custom-file-label::after {
    content: 'Choisir';
  }
  .custom-file-input:lang(in) ~ .custom-file-label::after {
    content: 'Pilih';
  }
  .custom-file-input:lang(zh) ~ .custom-file-label::after {
    content: '選擇';
  }
  .custom-file-input:lang(de) ~ .custom-file-label::after {
    content: 'Wählen';
  }
  .custom-file-input:lang(ru) ~ .custom-file-label::after {
    content: 'Выбрать';
  }
  & > label {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & .input-prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.2s;
    color: rgba(0, 0, 0, 0.87);
    pointer-events: none;
  }
  & .input-prefix.active {
    color: #4285f4;
  }
  &.input-with-pre-icon label {
    left: 36px;
    right: initial;
  }
  &.input-with-pre-icon .input-prefix {
    left: 16px;
    right: initial;
  }
  &.input-with-pre-icon .form-control {
    padding-left: 2.7rem !important;
  }
  &.input-with-post-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon .form-control {
    padding-right: 2.7rem !important;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix {
    right: 16px;
    left: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .input-prefix:first-of-type {
    left: 16px;
    right: initial;
  }
  &.input-with-post-icon.input-with-pre-icon .form-control {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
  }
`])),function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*1.2+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},function(e){var t=e.fontSize;return t&&t*.8+"px"},R.primary,R.primary,R.primary100,R.primary,R.primary100,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.success100,R.success,R.success,R.danger100,R.danger,R.danger,R.warning100,R.warning,R.warning,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.primary100,R.primary,R.primary,R.primary,R.secondary100,R.secondary,R.secondary,R.secondary,R.success100,R.success,R.success,R.success,R.danger100,R.danger,R.danger,R.danger,R.warning100,R.warning,R.warning,R.warning,R.info,R.info,R.info,R.info,R.dark100,R.dark,R.dark,R.dark);Y.textarea(xw||(xw=j([""])));Y.input(ww||(ww=j([""])));var _w,WB=Y.i(_w||(_w=j([`
  padding: 0px 4px;
`]))),VB=["border","brand","className","fab","duotone","fal","fad","far","solid","fixed","fas","flip","icon","inverse","light","list","pull","pulse","regular","rotate","size","spin","stack"],Xb=function(t){var n=t.border,r=t.brand,o=t.className,i=t.fab,a=t.duotone,s=t.fal,l=t.fad,c=t.far,u=t.solid,f=t.fixed,p=t.fas,m=t.flip,h=t.icon,b=t.inverse,w=t.light,v=t.list,g=t.pull,y=t.pulse,_=t.regular,k=t.rotate,S=t.size,E=t.spin,C=t.stack,A=gi(t,VB),P=_||c?"far":u||p?"fas":w||s?"fal":a||l?"fad":r||i?"fab":"fa",L=pe(P,v?"fa-li":!1,h?"fa-"+h:!1,S?"fa-"+S:!1,f?"fa-fw":!1,g?"fa-pull-"+g:!1,n?"fa-border":!1,E?"fa-spin":!1,y?"fa-pulse":!1,k?"fa-rotate-"+k:!1,m?"fa-flip-"+m:!1,b?"fa-inverse":!1,C?"fa-"+C:!1,o);return U.createElement(pi,{theme:Pr},U.createElement(WB,Object.assign({"data-test":"fa"},A,{className:L})))};Xb.propTypes={icon:d.string.isRequired,border:d.bool,brand:d.bool,className:d.string,fab:d.bool,fal:d.bool,far:d.bool,fixed:d.bool,flip:d.string,inverse:d.bool,light:d.bool,list:d.bool,pull:d.string,pulse:d.bool,regular:d.bool,rotate:d.string,size:d.string,spin:d.bool,stack:d.string};Xb.defaultProps={border:!1,brand:!1,className:"",fab:!1,fal:!1,far:!1,fixed:!1,flip:"",inverse:!1,light:!1,list:!1,pull:"",pulse:!1,regular:!1,rotate:"",size:"",spin:!1,stack:"",duotone:!1,solid:!1,fad:!1,fas:!1};d.node,d.bool,d.string,d.string,d.bool,d.bool,d.number,d.func,d.string,d.string,d.bool,d.string,d.string,d.func,d.func,d.func,d.func,d.string,d.string,d.string,d.string,d.bool;Date.now().toString();d.bool,d.string,d.bool,d.func,d.string;d.func.isRequired,d.string.isRequired,d.bool.isRequired,d.bool,d.string,d.bool,d.any,d.string;d.number.isRequired,d.number.isRequired,d.array.isRequired,d.bool.isRequired,d.string.isRequired,d.array.isRequired,d.arrayOf(d.string);var Sw,kw,Ew,Ow,Cw;Y.ul(Sw||(Sw=j([`
  padding: 15px;
  border: 0.75px solid #ccc;
  border-radius: 0;
  .page-link {
    `,`
    `,`
    border-radius: `,`;
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-item {
    `,`
    `,`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0.5px solid #ccc;
    border-radius: `,`;
    font-size: `,`;
  }
`])),Zt,function(e){return e.sm?te(kw||(kw=j([`
            min-width: 30px;
            min-height: 30px;
          `]))):te(Ew||(Ew=j([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},Zt,function(e){return e.sm?te(Ow||(Ow=j([`
            min-width: 30px;
            min-height: 30px;
          `]))):te(Cw||(Cw=j([`
            min-width: 50px;
            min-height: 50px;
          `])))},function(e){return e.circle?"50%":"0"},function(e){return e.size==="big"?"1.25rem":e.size==="small"?"0.75rem":"1rem"});d.node,d.bool,d.string,d.oneOf(["primary","secondary","success","danger","warning","info","white","dark"]),d.string,d.oneOfType([d.func,d.string]),d.bool;var Tw;Y.button(Tw||(Tw=j([`
  margin: 0px 7.5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
`])));d.bool,d.node,d.string,d.bool,d.oneOfType([d.func,d.string]);var Rw;Y.a(Rw||(Rw=j([`
  margin: 0px 7.5px;
  cursor: pointer;

	&.disabled {
		pointer-events:none;
		background:#ccc;
		color:#555;
	}
`])));d.node,d.bool,d.string,d.oneOfType([d.func,d.string]);d.number.isRequired,d.func.isRequired,d.arrayOf(d.string).isRequired,d.array.isRequired,d.number.isRequired,d.string,d.node;d.bool,d.bool,d.bool,d.bool,d.bool,d.node,d.string,d.bool,d.oneOfType([d.object,d.string]),d.bool,d.bool,d.number,d.oneOfType([d.string,d.number,d.object]),d.arrayOf(d.number),d.bool,d.string,d.bool,d.bool,d.bool,d.oneOfType([d.array,d.object,d.string]),d.bool,d.string,d.bool,d.string,d.func,d.func,d.func,d.arrayOf(d.string),d.number,d.arrayOf(d.string),d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool,d.string,d.bool,d.bool,d.arrayOf(d.string),d.bool,d.string,d.bool,d.string,d.bool;var Pw;Y.div(Pw||(Pw=j([`
  `,`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`])),Zt);O.createContext({isOpen:null});d.string,d.bool,d.bool,d.bool,d.bool,d.func,d.string;var Aw,Iw,Mw,jw,Lw,Dw,Nw,$w,Fw,zw,Bw,Hw;Y.button(Aw||(Aw=j([`
  padding: 0.8rem 2rem;
  border: none;
  `,`
  `,`
  :hover, :focus {
    outline: none;
    border: none; 
  }
  `,`;
  `,`
`])),Zt,qs,function(e){return e.circle===!0?te(Iw||(Iw=j([`
          border-radius: 30px;
        `]))):te(Mw||(Mw=j([`
          border-radius: 0px;
        `])))},Cn({prop:"size",variants:{lg:{fontSize:"1.25rem",padding:"20px"},sm:{fontSize:"0.75rem",padding:"5px"}}}));Y.span(jw||(jw=j([`
  .pro-arrow-wrapper {
    position: relative;
    min-width: 10px;
    min-height: 10px;
    .pro-arrow {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      padding: 2.5px;
      vertical-align: middle;
      transition: transform 0.3s;

      `,`
      `,`
    }
  }
`])),function(e){return e.dropup?te(Lw||(Lw=j([`
              transform: rotate(-135deg);
            `]))):e.dropleft?te(Dw||(Dw=j([`
              transform: rotate(135deg);
            `]))):e.dropright?te(Nw||(Nw=j([`
              transform: rotate(-45deg);
            `]))):te($w||($w=j([`
              transform: rotate(45deg);
            `])))},function(e){return e.dropup?te(Fw||(Fw=j([`
              margin-bottom: 0;
            `]))):e.dropleft?te(zw||(zw=j([`
              margin-bottom: 0;
            `]))):e.dropright?te(Bw||(Bw=j([`
              margin-bottom: 0;
            `]))):te(Hw||(Hw=j([`
              margin-bottom: 5px;
            `])))});d.string,d.oneOf(["primary","secondary","success","danger","warning","info"]),d.bool,d.bool,d.bool,d.bool,d.bool,d.string,d.node,d.bool,d.string,d.bool,d.oneOfType([d.func,d.string]);var Uw;Y("div")(Uw||(Uw=j([`
  display: flex;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  background-color: #fff;
  border-radius: 0;
  color: #232323;
  padding: 0.3rem;
  `,`;
`])),function(e){return e.popperStyle});d.string,d.oneOf(["primary","secondary","success","danger","warning","info"]),d.func,d.func,d.string,d.bool,d.bool,d.bool,d.bool;var Ww;Y.div(Ww||(Ww=j([`
  color: #000 !important;
`])));d.bool,d.node,d.string,d.bool,d.bool,d.bool,d.func,d.oneOfType([d.func,d.string]),d.bool;d.string,d.string,d.string;var Vw;Y.div(Vw||(Vw=j([`
  position: relative;
  iframe,
  embed,
  object,
  video {
    margin: 0 auto;
    top: 0;
    bottom: 0;
    left: 0;
    border: 0;
  }
`])));d.string.isRequired,d.bool,d.string,d.number,d.string,d.string,d.func,d.func,d.func,d.string,d.string,d.object,d.string,d.number;var Yw;Y.div(Yw||(Yw=j([`
      .input-flex-fill {
        flex-grow: 1
      }
      .input-background {
        background-color: #f4f4f4;
      }
      .md-form.input-group label {
        top: 0;
        margin-bottom: 0;
      }
      .md-form.input-group .input-group-text {
        background-color: #e0e0e0;
      }
      .md-form.input-group .input-group-text.md-addon {
        font-weight: 500;
        background-color: transparent;
        border: none;
      }
      .md-form.input-group .form-control {
        padding: 0.375rem 0.75rem;
        margin: 0;
      }
      .md-form {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form input:not([type]),
      .md-form input[type="text"]:not(.browser-default),
      .md-form input[type="password"]:not(.browser-default),
      .md-form input[type="email"]:not(.browser-default),
      .md-form input[type="url"]:not(.browser-default),
      .md-form input[type="time"]:not(.browser-default),
      .md-form input[type="date"]:not(.browser-default),
      .md-form input[type="datetime"]:not(.browser-default),
      .md-form input[type="datetime-local"]:not(.browser-default),
      .md-form input[type="tel"]:not(.browser-default),
      .md-form input[type="number"]:not(.browser-default),
      .md-form input[type="search"]:not(.browser-default),
      .md-form input[type="phone"]:not(.browser-default),
      .md-form input[type="search-md"],
      .md-form textarea.md-textarea {
        box-sizing: content-box;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #ced4da;
        border-radius: 0;
        outline: none;
        box-shadow: none;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      .md-form input:not([type]):focus:not([readonly]),
      .md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly]),
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="phone"]:not(.browser-default):focus:not([readonly]),
      .md-form input[type="search-md"]:focus:not([readonly]),
      .md-form textarea.md-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #4285f4;
        box-shadow: 0 1px 0 0 #4285f4;
      }
      .md-form input:not([type]):focus:not([readonly]) + label,
      .md-form
        input[type="text"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="password"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="email"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="url"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="time"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="date"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="tel"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="number"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="search"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form
        input[type="phone"]:not(.browser-default):focus:not([readonly])
        + label,
      .md-form input[type="search-md"]:focus:not([readonly]) + label,
      .md-form textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form input:not([type]) + label::after,
      .md-form input[type="text"]:not(.browser-default) + label::after,
      .md-form input[type="password"]:not(.browser-default) + label::after,
      .md-form input[type="email"]:not(.browser-default) + label::after,
      .md-form input[type="url"]:not(.browser-default) + label::after,
      .md-form input[type="time"]:not(.browser-default) + label::after,
      .md-form input[type="date"]:not(.browser-default) + label::after,
      .md-form input[type="datetime"]:not(.browser-default) + label::after,
      .md-form
        input[type="datetime-local"]:not(.browser-default)
        + label::after,
      .md-form input[type="tel"]:not(.browser-default) + label::after,
      .md-form input[type="number"]:not(.browser-default) + label::after,
      .md-form input[type="search"]:not(.browser-default) + label::after,
      .md-form input[type="phone"]:not(.browser-default) + label::after,
      .md-form input[type="search-md"] + label::after,
      .md-form textarea.md-textarea + label::after {
        position: absolute;
        top: 65px;
        display: block;
        content: "";
        opacity: 0;
        transition: 0.2s opacity ease-out, 0.2s color ease-out;
      }
      .md-form input:not([type]).valid,
      .md-form input:not([type]):focus.valid,
      .md-form input[type="text"]:not(.browser-default).valid,
      .md-form input[type="text"]:not(.browser-default):focus.valid,
      .md-form input[type="password"]:not(.browser-default).valid,
      .md-form input[type="password"]:not(.browser-default):focus.valid,
      .md-form input[type="email"]:not(.browser-default).valid,
      .md-form input[type="email"]:not(.browser-default):focus.valid,
      .md-form input[type="url"]:not(.browser-default).valid,
      .md-form input[type="url"]:not(.browser-default):focus.valid,
      .md-form input[type="time"]:not(.browser-default).valid,
      .md-form input[type="time"]:not(.browser-default):focus.valid,
      .md-form input[type="date"]:not(.browser-default).valid,
      .md-form input[type="date"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime"]:not(.browser-default).valid,
      .md-form input[type="datetime"]:not(.browser-default):focus.valid,
      .md-form input[type="datetime-local"]:not(.browser-default).valid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.valid,
      .md-form input[type="tel"]:not(.browser-default).valid,
      .md-form input[type="tel"]:not(.browser-default):focus.valid,
      .md-form input[type="number"]:not(.browser-default).valid,
      .md-form input[type="number"]:not(.browser-default):focus.valid,
      .md-form input[type="search"]:not(.browser-default).valid,
      .md-form input[type="search"]:not(.browser-default):focus.valid,
      .md-form input[type="phone"]:not(.browser-default).valid,
      .md-form input[type="phone"]:not(.browser-default):focus.valid,
      .md-form input[type="search-md"].valid,
      .md-form input[type="search-md"]:focus.valid,
      .md-form textarea.md-textarea.valid,
      .md-form textarea.md-textarea:focus.valid {
        border-bottom: 1px solid #00c851;
        box-shadow: 0 1px 0 0 #00c851;
      }
      .md-form input:not([type]).valid + label:after,
      .md-form input:not([type]):focus.valid + label:after,
      .md-form input[type="text"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="password"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="datetime"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).valid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.valid
        + label:after,
      .md-form input[type="search-md"].valid + label:after,
      .md-form input[type="search-md"]:focus.valid + label:after,
      .md-form textarea.md-textarea.valid + label:after,
      .md-form textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form input:not([type]).invalid,
      .md-form input:not([type]):focus.invalid,
      .md-form input[type="text"]:not(.browser-default).invalid,
      .md-form input[type="text"]:not(.browser-default):focus.invalid,
      .md-form input[type="password"]:not(.browser-default).invalid,
      .md-form input[type="password"]:not(.browser-default):focus.invalid,
      .md-form input[type="email"]:not(.browser-default).invalid,
      .md-form input[type="email"]:not(.browser-default):focus.invalid,
      .md-form input[type="url"]:not(.browser-default).invalid,
      .md-form input[type="url"]:not(.browser-default):focus.invalid,
      .md-form input[type="time"]:not(.browser-default).invalid,
      .md-form input[type="time"]:not(.browser-default):focus.invalid,
      .md-form input[type="date"]:not(.browser-default).invalid,
      .md-form input[type="date"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime"]:not(.browser-default).invalid,
      .md-form input[type="datetime"]:not(.browser-default):focus.invalid,
      .md-form input[type="datetime-local"]:not(.browser-default).invalid,
      .md-form input[type="datetime-local"]:not(.browser-default):focus.invalid,
      .md-form input[type="tel"]:not(.browser-default).invalid,
      .md-form input[type="tel"]:not(.browser-default):focus.invalid,
      .md-form input[type="number"]:not(.browser-default).invalid,
      .md-form input[type="number"]:not(.browser-default):focus.invalid,
      .md-form input[type="search"]:not(.browser-default).invalid,
      .md-form input[type="search"]:not(.browser-default):focus.invalid,
      .md-form input[type="phone"]:not(.browser-default).invalid,
      .md-form input[type="phone"]:not(.browser-default):focus.invalid,
      .md-form input[type="search-md"].invalid,
      .md-form input[type="search-md"]:focus.invalid,
      .md-form textarea.md-textarea.invalid,
      .md-form textarea.md-textarea:focus.invalid {
        border-bottom: 1px solid #f44336;
        box-shadow: 0 1px 0 0 #f44336;
      }
      .md-form input:not([type]).invalid + label:after,
      .md-form input:not([type]):focus.invalid + label:after,
      .md-form input[type="text"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="email"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="email"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="url"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="url"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="time"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="time"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="date"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="date"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="tel"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="tel"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="number"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="number"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="search"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="phone"]:not(.browser-default).invalid + label:after,
      .md-form
        input[type="phone"]:not(.browser-default):focus.invalid
        + label:after,
      .md-form input[type="search-md"].invalid + label:after,
      .md-form input[type="search-md"]:focus.invalid + label:after,
      .md-form textarea.md-textarea.invalid + label:after,
      .md-form textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form input:not([type]).form-control.valid + label:after,
      .md-form input:not([type]).form-control:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control.valid + label:after,
      .md-form input[type="search-md"].form-control:focus.valid + label:after,
      .md-form textarea.md-textarea.form-control.valid + label:after,
      .md-form textarea.md-textarea.form-control:focus.valid + label:after {
        top: 4.1rem;
      }
      .md-form input:not([type]).form-control.invalid + label:after,
      .md-form input:not([type]).form-control:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control.invalid + label:after,
      .md-form input[type="search-md"].form-control:focus.invalid + label:after,
      .md-form textarea.md-textarea.form-control.invalid + label:after,
      .md-form textarea.md-textarea.form-control:focus.invalid + label:after {
        top: 4rem;
      }
      .md-form input:not([type]).form-control-lg.valid + label:after,
      .md-form input:not([type]).form-control-lg:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.valid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.valid + label:after,
      .md-form textarea.md-textarea.form-control-lg:focus.valid + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-lg.invalid + label:after,
      .md-form input:not([type]).form-control-lg:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-lg:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-lg.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-lg:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-lg.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-lg:focus.invalid
        + label:after {
        top: 4.6rem;
      }
      .md-form input:not([type]).form-control-sm.valid + label:after,
      .md-form input:not([type]).form-control-sm:focus.valid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.valid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.valid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.valid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.valid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.valid + label:after,
      .md-form textarea.md-textarea.form-control-sm:focus.valid + label:after {
        top: 3.7rem;
      }
      .md-form input:not([type]).form-control-sm.invalid + label:after,
      .md-form input:not([type]).form-control-sm:focus.invalid + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="text"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="password"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="email"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="url"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="time"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="date"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="datetime-local"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="tel"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="number"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="search"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm.invalid
        + label:after,
      .md-form
        input[type="phone"]:not(.browser-default).form-control-sm:focus.invalid
        + label:after,
      .md-form input[type="search-md"].form-control-sm.invalid + label:after,
      .md-form
        input[type="search-md"].form-control-sm:focus.invalid
        + label:after,
      .md-form textarea.md-textarea.form-control-sm.invalid + label:after,
      .md-form
        textarea.md-textarea.form-control-sm:focus.invalid
        + label:after {
        top: 3.6rem;
      }
      .md-form > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-27px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-25px);
        transform-origin: 0 0;
      }
      .md-form .was-validated input[type="text"]:valid + label {
        color: #00c851 !important;
      }
      .md-form .was-validated input[type="text"]:invalid + label {
        color: #f44336 !important;
      }
      .md-form .was-validated .form-control:valid:focus {
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .was-validated .form-control:valid {
        border-color: #00c851 !important;
      }
      .md-form .was-validated .form-control:invalid:focus {
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .was-validated .form-control:invalid {
        border-color: #f44336 !important;
      }
      .md-form .form-control {
        height: auto;
        padding: 0.6rem 0 0.4rem 0;
        margin: 0 0 0.5rem 0;
        background-color: transparent;
        border-radius: 0;
      }
      .md-form .form-control:focus {
        box-shadow: none;
      }
      .md-form .form-control:disabled,
      .md-form .form-control[readonly] {
        background-color: transparent;
        border-bottom: 1px solid #bdbdbd;
      }
      .md-form .form-control.is-valid {
        border-color: #00c851;
      }
      .md-form .form-control.is-valid:focus {
        border-color: #00c851 !important;
        box-shadow: 0 1px 0 0 #00c851 !important;
      }
      .md-form .form-control.is-invalid {
        border-color: #f44336;
      }
      .md-form .form-control.is-invalid:focus {
        border-color: #f44336 !important;
        box-shadow: 0 1px 0 0 #f44336 !important;
      }
      .md-form .form-control.is-valid,
      .md-form .form-control.is-invalid {
        background-position: center right !important;
      }
      .md-form .validate {
        margin-bottom: 2.5rem;
      }
      .md-form label {
        font-size: 1rem;
      }
      .md-form label.active {
        font-size: 1rem;
      }
      .md-form .prefix {
        top: 0.25rem;
        font-size: 1.75rem;
      }
      .md-form .prefix ~ input,
      .md-form .prefix ~ textarea {
        width: calc(100% - 2.5rem);
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ label {
        margin-left: 2.5rem;
      }
      .md-form .prefix ~ .form-text {
        margin-left: 2.6rem;
      }
      .md-form label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(12px);
        transform-origin: 0% 100%;
      }
      .md-form label.active {
        transform: translateY(-14px) scale(0.8);
      }
      .md-form .prefix {
        position: absolute;
        transition: color 0.2s;
      }
      .md-form .prefix.active {
        color: #4285f4;
      }
      .md-form.form-lg .validate {
        margin-bottom: 2.8rem;
      }
      .md-form.form-lg label {
        font-size: 1.25rem;
      }
      .md-form.form-lg label.active {
        font-size: 1.15rem;
      }
      .md-form.form-lg .prefix {
        top: 0.4rem;
        font-size: 2rem;
      }
      .md-form.form-lg .prefix ~ input,
      .md-form.form-lg .prefix ~ textarea {
        width: calc(100% - 3rem);
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ label {
        margin-left: 3rem;
      }
      .md-form.form-lg .prefix ~ .form-text {
        margin-left: 3.1rem;
      }
      .md-form.form-sm .validate {
        margin-bottom: 2.3rem;
      }
      .md-form.form-sm label {
        font-size: 0.875rem;
      }
      .md-form.form-sm label.active {
        font-size: 0.95rem;
      }
      .md-form.form-sm .prefix {
        top: 0.35rem;
        font-size: 1.5rem;
      }
      .md-form.form-sm .prefix ~ input,
      .md-form.form-sm .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.form-sm .prefix ~ .form-text {
        margin-left: 2rem;
      }
      .md-form textarea.md-textarea {
        padding: 0;
        overflow-y: hidden;
      }
      .md-form textarea.md-textarea + label {
        top: -0.6rem;
      }
      .md-form textarea.md-textarea-auto {
        padding: 0;
        padding-top: 1.5rem;
      }
      .md-form textarea.md-textarea-auto + label {
        top: 0;
      }
      .md-form.md-outline {
        position: relative;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .md-form.md-outline input[type="text"],
      .md-form.md-outline input[type="password"],
      .md-form.md-outline input[type="email"],
      .md-form.md-outline input[type="url"],
      .md-form.md-outline input[type="time"],
      .md-form.md-outline input[type="date"],
      .md-form.md-outline input[type="datetime-local"],
      .md-form.md-outline input[type="tel"],
      .md-form.md-outline input[type="number"],
      .md-form.md-outline input[type="search-md"],
      .md-form.md-outline input[type="search"],
      .md-form.md-outline textarea.md-textarea {
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #dadce0;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        transition: all 0.3s;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]),
      .md-form.md-outline input[type="password"]:focus:not([readonly]),
      .md-form.md-outline input[type="email"]:focus:not([readonly]),
      .md-form.md-outline input[type="url"]:focus:not([readonly]),
      .md-form.md-outline input[type="time"]:focus:not([readonly]),
      .md-form.md-outline input[type="date"]:focus:not([readonly]),
      .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-outline input[type="tel"]:focus:not([readonly]),
      .md-form.md-outline input[type="number"]:focus:not([readonly]),
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]),
      .md-form.md-outline input[type="search"]:focus:not([readonly]),
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
        border-color: #4285f4;
        box-shadow: inset 0 0 0 1px #4285f4;
      }
      .md-form.md-outline input[type="text"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="password"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="email"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="time"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="date"]:focus:not([readonly]) + label,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly])
        + label,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="number"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label,
      .md-form.md-outline input[type="search"]:focus:not([readonly]) + label,
      .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
        color: #4285f4;
      }
      .md-form.md-outline input[type="text"].valid,
      .md-form.md-outline input[type="text"]:focus.valid,
      .md-form.md-outline input[type="password"].valid,
      .md-form.md-outline input[type="password"]:focus.valid,
      .md-form.md-outline input[type="email"].valid,
      .md-form.md-outline input[type="email"]:focus.valid,
      .md-form.md-outline input[type="url"].valid,
      .md-form.md-outline input[type="url"]:focus.valid,
      .md-form.md-outline input[type="time"].valid,
      .md-form.md-outline input[type="time"]:focus.valid,
      .md-form.md-outline input[type="date"].valid,
      .md-form.md-outline input[type="date"]:focus.valid,
      .md-form.md-outline input[type="datetime-local"].valid,
      .md-form.md-outline input[type="datetime-local"]:focus.valid,
      .md-form.md-outline input[type="tel"].valid,
      .md-form.md-outline input[type="tel"]:focus.valid,
      .md-form.md-outline input[type="number"].valid,
      .md-form.md-outline input[type="number"]:focus.valid,
      .md-form.md-outline input[type="search-md"].valid,
      .md-form.md-outline input[type="search-md"]:focus.valid,
      .md-form.md-outline input[type="search"].valid,
      .md-form.md-outline input[type="search"]:focus.valid,
      .md-form.md-outline textarea.md-textarea.valid,
      .md-form.md-outline textarea.md-textarea:focus.valid {
        border-color: #00c851;
        box-shadow: inset 0 0 0 1px #00c851;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="text"].valid + label:after,
      .md-form.md-outline input[type="text"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="password"].valid + label:after,
      .md-form.md-outline input[type="password"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="email"].valid + label:after,
      .md-form.md-outline input[type="email"]:focus.valid + label:after,
      .md-form.md-outline input[type="url"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="url"].valid + label:after,
      .md-form.md-outline input[type="url"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="time"].valid + label:after,
      .md-form.md-outline input[type="time"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="date"].valid + label:after,
      .md-form.md-outline input[type="date"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="datetime-local"].valid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"]:focus:not([readonly]).valid + label,
      .md-form.md-outline input[type="tel"].valid + label:after,
      .md-form.md-outline input[type="tel"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="number"].valid + label:after,
      .md-form.md-outline input[type="number"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search-md"].valid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.valid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).valid
        + label,
      .md-form.md-outline input[type="search"].valid + label:after,
      .md-form.md-outline input[type="search"]:focus.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).valid
        + label,
      .md-form.md-outline textarea.md-textarea.valid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.valid + label:after {
        color: #00c851;
        content: attr(data-success);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].invalid,
      .md-form.md-outline input[type="text"]:focus.invalid,
      .md-form.md-outline input[type="password"].invalid,
      .md-form.md-outline input[type="password"]:focus.invalid,
      .md-form.md-outline input[type="email"].invalid,
      .md-form.md-outline input[type="email"]:focus.invalid,
      .md-form.md-outline input[type="url"].invalid,
      .md-form.md-outline input[type="url"]:focus.invalid,
      .md-form.md-outline input[type="time"].invalid,
      .md-form.md-outline input[type="time"]:focus.invalid,
      .md-form.md-outline input[type="date"].invalid,
      .md-form.md-outline input[type="date"]:focus.invalid,
      .md-form.md-outline input[type="datetime-local"].invalid,
      .md-form.md-outline input[type="datetime-local"]:focus.invalid,
      .md-form.md-outline input[type="tel"].invalid,
      .md-form.md-outline input[type="tel"]:focus.invalid,
      .md-form.md-outline input[type="number"].invalid,
      .md-form.md-outline input[type="number"]:focus.invalid,
      .md-form.md-outline input[type="search-md"].invalid,
      .md-form.md-outline input[type="search-md"]:focus.invalid,
      .md-form.md-outline input[type="search"].invalid,
      .md-form.md-outline input[type="search"]:focus.invalid,
      .md-form.md-outline textarea.md-textarea.invalid,
      .md-form.md-outline textarea.md-textarea:focus.invalid {
        border-color: #f44336;
        box-shadow: inset 0 0 0 1px #f44336;
      }
      .md-form.md-outline
        input[type="text"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="text"].invalid + label:after,
      .md-form.md-outline input[type="text"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="password"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="password"].invalid + label:after,
      .md-form.md-outline input[type="password"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="email"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="email"].invalid + label:after,
      .md-form.md-outline input[type="email"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="url"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="url"].invalid + label:after,
      .md-form.md-outline input[type="url"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="time"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="time"].invalid + label:after,
      .md-form.md-outline input[type="time"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="date"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="date"].invalid + label:after,
      .md-form.md-outline input[type="date"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="datetime-local"].invalid + label:after,
      .md-form.md-outline
        input[type="datetime-local"]:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="tel"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="tel"].invalid + label:after,
      .md-form.md-outline input[type="tel"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="number"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="number"].invalid + label:after,
      .md-form.md-outline input[type="number"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search-md"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search-md"].invalid + label:after,
      .md-form.md-outline input[type="search-md"]:focus.invalid + label:after,
      .md-form.md-outline
        input[type="search"]:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline input[type="search"].invalid + label:after,
      .md-form.md-outline input[type="search"]:focus.invalid + label:after,
      .md-form.md-outline
        textarea.md-textarea:focus:not([readonly]).invalid
        + label,
      .md-form.md-outline textarea.md-textarea.invalid + label:after,
      .md-form.md-outline textarea.md-textarea:focus.invalid + label:after {
        color: #f44336;
        content: attr(data-error);
        opacity: 1;
      }
      .md-form.md-outline input[type="text"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="email"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="number"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.valid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.valid
        + label:after,
      .md-form.md-outline input[type="search"].form-control.valid + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.valid
        + label:after,
      .md-form.md-outline textarea.md-textarea.form-control.valid + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.valid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline input[type="text"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="text"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="password"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="email"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="url"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="url"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="time"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="time"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="date"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="date"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="datetime-local"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline input[type="tel"].form-control.invalid + label:after,
      .md-form.md-outline
        input[type="tel"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="number"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search-md"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control.invalid
        + label:after,
      .md-form.md-outline
        input[type="search"].form-control:focus.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control.invalid
        + label:after,
      .md-form.md-outline
        textarea.md-textarea.form-control:focus.invalid
        + label:after {
        position: absolute;
        top: 4rem;
        left: 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-outline > input[type="time"]:not(.browser-default) + label {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-size: 1rem;
        font-weight: 500;
        background: #fff;
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-outline
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label.active,
      .md-form.md-outline
        > input[type="time"]:not(.browser-default)
        + label.active {
        transform: translateY(-9px) scale(0.8);
        transform-origin: 0 0;
      }
      @-webkit-keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      @keyframes autofill {
        to {
          color: #495057;
          background: transparent;
        }
      }
      .md-form.md-outline input:-webkit-autofill {
        -webkit-animation-name: autofill;
        animation-name: autofill;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .md-form.md-outline .form-control {
        padding: 0.375rem 0.75rem;
      }
      .md-form.md-outline label {
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 10px;
        font-size: 1rem;
        color: #757575;
        cursor: text;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(9px);
        transform-origin: 0% 100%;
      }
      .md-form.md-outline label.active {
        left: 8px;
        padding-right: 5px;
        padding-left: 5px;
        font-weight: 500;
        background: #fff;
        transform: translateY(-13px) scale(0.8);
      }
      .md-form.md-outline.form-lg .form-control.form-control-lg {
        padding: 0.5rem 0.725rem;
      }
      .md-form.md-outline.form-lg label {
        font-size: 1.25rem;
        transform: translateY(10px);
      }
      .md-form.md-outline.form-lg label.active {
        font-size: 1.1rem;
        transform: translateY(-14px) scale(0.8);
      }
      .md-form.md-outline.form-lg .prefix {
        top: 0.65rem;
        font-size: 25px;
      }
      .md-form.md-outline.form-lg .prefix ~ input,
      .md-form.md-outline.form-lg .prefix ~ textarea {
        width: calc(100% - 2.2rem);
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ label {
        margin-left: 2.2rem;
      }
      .md-form.md-outline.form-lg .prefix ~ .form-text {
        margin-left: 2.3rem;
      }
      .md-form.md-outline.form-sm .form-control.form-control-sm {
        padding: 0.25rem 0.625rem;
      }
      .md-form.md-outline.form-sm label {
        font-size: 0.8rem;
        transform: translateY(8px);
      }
      .md-form.md-outline.form-sm label.active {
        font-size: 0.85rem;
        transform: translateY(-12px) scale(0.8);
      }
      .md-form.md-outline.form-sm .prefix {
        top: 0.5rem;
        font-size: 15px;
      }
      .md-form.md-outline.form-sm .prefix ~ input,
      .md-form.md-outline.form-sm .prefix ~ textarea {
        width: calc(100% - 1.6rem);
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ label {
        margin-left: 1.6rem;
      }
      .md-form.md-outline.form-sm .prefix ~ .form-text {
        margin-left: 1.7rem;
      }
      .md-form.md-outline .prefix {
        position: absolute;
        top: 0.6rem;
        font-size: 20px;
        transition: color 0.2s;
      }
      .md-form.md-outline .prefix:focus {
        color: #4285f4;
      }
      .md-form.md-outline .prefix ~ input,
      .md-form.md-outline .prefix ~ textarea {
        width: calc(100% - 2rem);
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ label {
        margin-left: 2rem;
      }
      .md-form.md-outline .prefix ~ .form-text {
        margin-left: 2.1rem;
      }
      .md-form.md-outline .character-counter {
        margin-top: -0.5rem;
      }
      .md-form.md-bg input[type="text"],
      .md-form.md-bg input[type="password"],
      .md-form.md-bg input[type="email"],
      .md-form.md-bg input[type="url"],
      .md-form.md-bg input[type="time"],
      .md-form.md-bg input[type="date"],
      .md-form.md-bg input[type="datetime-local"],
      .md-form.md-bg input[type="tel"],
      .md-form.md-bg input[type="number"],
      .md-form.md-bg input[type="search-md"],
      .md-form.md-bg input[type="search"],
      .md-form.md-bg textarea.md-textarea {
        box-sizing: border-box;
        padding: 10px 5px;
        background: #f5f5f5 no-repeat;
        background-image: linear-gradient(to bottom, #4285f4, #4285f4),
          linear-gradient(to bottom, #ced4da, #ced4da);
        background-position: 50% 100%, 50% 100%;
        background-size: 0 2px, 100% 1px;
        border: 0;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
      }
      .md-form.md-bg input[type="text"]:focus:not([readonly]),
      .md-form.md-bg input[type="password"]:focus:not([readonly]),
      .md-form.md-bg input[type="email"]:focus:not([readonly]),
      .md-form.md-bg input[type="url"]:focus:not([readonly]),
      .md-form.md-bg input[type="time"]:focus:not([readonly]),
      .md-form.md-bg input[type="date"]:focus:not([readonly]),
      .md-form.md-bg input[type="datetime-local"]:focus:not([readonly]),
      .md-form.md-bg input[type="tel"]:focus:not([readonly]),
      .md-form.md-bg input[type="number"]:focus:not([readonly]),
      .md-form.md-bg input[type="search-md"]:focus:not([readonly]),
      .md-form.md-bg input[type="search"]:focus:not([readonly]),
      .md-form.md-bg textarea.md-textarea:focus:not([readonly]) {
        border-bottom: none;
        box-shadow: none;
      }
      .md-form.md-bg input[type="text"]:focus,
      .md-form.md-bg input[type="password"]:focus,
      .md-form.md-bg input[type="email"]:focus,
      .md-form.md-bg input[type="url"]:focus,
      .md-form.md-bg input[type="time"]:focus,
      .md-form.md-bg input[type="date"]:focus,
      .md-form.md-bg input[type="datetime-local"]:focus,
      .md-form.md-bg input[type="tel"]:focus,
      .md-form.md-bg input[type="number"]:focus,
      .md-form.md-bg input[type="search-md"]:focus,
      .md-form.md-bg input[type="search"]:focus,
      .md-form.md-bg textarea.md-textarea:focus {
        background-color: #dcdcdc;
        background-size: 100% 2px, 100% 1px;
        outline: none;
      }
      .md-form.md-bg > input[type="date"]:not(.browser-default) + label {
        transform: translateY(-12px) scale(0.8);
        transform-origin: 0 0;
      }
      .md-form.md-bg
        > input[type]:-webkit-autofill:not(.browser-default):not([type="search"])
        + label,
      .md-form.md-bg > input[type="time"]:not(.browser-default) + label {
        font-size: 0.8rem;
        transform: translateY(-12px);
        transform-origin: 0 0;
      }
      .md-form.md-bg .form-control {
        padding: 1.1rem 0.7rem 0.4rem !important;
      }
      .md-form.md-bg label {
        top: 0;
        padding-left: 0.7rem;
        font-size: 1rem;
        transition: transform 0.2s ease-out, color 0.2s ease-out;
        transform: translateY(13px);
        transform-origin: 0% 100%;
      }
      .md-form.md-bg label.active {
        padding-left: 0.75rem;
        font-weight: 500;
        transform: translateY(-3px) scale(0.8);
      }
      .md-form.md-bg.form-lg label {
        transform: translateY(16px);
      }
      .md-form.md-bg.form-lg label.active {
        transform: translateY(-4px) scale(0.8);
      }
      .md-form.md-bg.form-sm label {
        transform: translateY(11px);
      }
      .md-form.md-bg.form-sm label.active {
        transform: translateY(-2px) scale(0.8);
      }
      .md-form .form-control.is-invalid,
      .was-validated .md-form .form-control:invalid {
        padding-right: 0;
      }
      .md-form .form-control.is-valid,
      .was-validated .md-form .form-control:valid {
        padding-right: 0;
      }
      .needs-validation .md-form label {
        left: 0.3rem;
      }
      .custom-file-input:lang(es) ~ .custom-file-label::after {
        content: "Elegir";
      }
      .custom-file-input:lang(pl-pl) ~ .custom-file-label::after {
        content: "Wybierz";
      }
      .custom-file-input:lang(fr) ~ .custom-file-label::after {
        content: "Choisir";
      }
      .custom-file-input:lang(in) ~ .custom-file-label::after {
        content: "Pilih";
      }
      .custom-file-input:lang(zh) ~ .custom-file-label::after {
        content: "選擇";
      }
      .custom-file-input:lang(de) ~ .custom-file-label::after {
        content: "Wählen";
      }
      .custom-file-input:lang(ru) ~ .custom-file-label::after {
        content: "Выбрать";
      }
      .md-form > label {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .md-form .form-control {
        box-sizing: border-box !important;
      }
      .md-form .input-prefix {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: color 0.2s;
        color: rgba(0, 0, 0, 0.87);
        pointer-events: none;
      }
      .md-form .input-prefix.active {
        color: #4285f4;
      }
      .md-form.input-with-pre-icon label {
        left: 36px;
        right: initial;
      }
      .md-form.input-with-pre-icon .input-prefix {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-pre-icon .form-control {
        padding-left: 2.7rem !important;
      }
      .md-form.input-with-post-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon .form-control {
        padding-right: 2.7rem !important;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .input-prefix {
        right: 16px;
        left: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon
        .input-prefix:first-of-type {
        left: 16px;
        right: initial;
      }
      .md-form.input-with-post-icon.input-with-pre-icon .form-control {
        padding-left: 2.5rem !important;
        padding-right: 2.5rem !important;
      }
`])));d.oneOfType([d.node,d.string]),d.string,d.string,d.bool,d.node,d.string,d.string,d.string,d.func,d.string,d.string,d.node,d.string,d.string,d.bool,d.func,d.func,d.any,d.string,d.string,d.oneOfType([d.func,d.string]),d.string,d.string,d.string,d.string;var Gw;Y.div(Gw||(Gw=j([""])));d.node,d.string,d.bool;d.bool,d.node,d.string,d.bool,d.string,d.func,d.func;var qw;Y.ul(qw||(qw=j([`
  border: none;
`])));d.node,d.string,d.oneOfType([d.func,d.string]);var Xw,Kw;Y.li(Xw||(Xw=j([`
  `,`
`])),Zt);Y(pb)(Kw||(Kw=j([`
  `,`
`])),Zt);d.bool,d.node,d.string,d.oneOf(["primary","secondary","success","danger","warning","info","white"]),d.bool,d.bool,d.oneOfType([d.func,d.string]);var Ar={pattern1:"img/overlays/01.png",pattern2:"img/overlays/02.png",pattern3:"img/overlays/03.png",pattern4:"img/overlays/04.png",pattern5:"img/overlays/05.png",pattern6:"img/overlays/06.png",pattern7:"img/overlays/07.png",pattern8:"img/overlays/08.png",pattern9:"img/overlays/09.png"},YB=Ar.pattern1,GB=Ar.pattern2,qB=Ar.pattern3,XB=Ar.pattern4,KB=Ar.pattern5,QB=Ar.pattern6,JB=Ar.pattern7,ZB=Ar.pattern8,e6=Ar.pattern9;Y("span")(qs,Zt,{position:"absolute",top:0,right:0,bottom:0,left:0,width:"100 %",height:"100 %",overflow:" hidden",backgroundAttachment:"fixed"},Cn({prop:"pattern",variants:{pattern1:{backgroundImage:"url("+YB+")",backgroundAttachment:"fixed"},pattern2:{backgroundImage:"url("+GB+")",backgroundAttachment:"fixed"},pattern3:{backgroundImage:"url("+qB+")",backgroundAttachment:"fixed"},pattern4:{backgroundImage:"url("+XB+")",backgroundAttachment:"fixed"},pattern5:{backgroundImage:"url("+KB+")",backgroundAttachment:"fixed"},pattern6:{backgroundImage:"url("+QB+")",backgroundAttachment:"fixed"},pattern7:{backgroundImage:"url("+JB+")",backgroundAttachment:"fixed"},pattern8:{backgroundImage:"url("+ZB+")",backgroundAttachment:"fixed"},pattern9:{backgroundImage:"url("+e6+")",backgroundAttachment:"fixed"}}}),Cn({prop:"overlay",variants:{blueLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},redLight:{backgroundColor:"rgba(244,67,54,0.3);",color:"#222222"},pinkLight:{backgroundColor:"rgba(233,30,99,0.3",color:"#222222"},yellowLight:{backgroundColor:"rgba(255,235,59,0.3)",color:"#222222"},orangeLight:{backgroundColor:"rgba(255,152,0,0.3)",color:"#222222"},purpleLight:{backgroundColor:"rgba(156,39,176,0.3)",color:"#222222"},brownLight:{backgroundColor:"rgba(33,150,243,0.3)",color:"#222222"},tealLight:{backgroundColor:"rgba(0,150,136,0.3)",color:"#222222"},cyanLight:{backgroundColor:"rgba(0,188,212,0.3)",color:"#222222"},greenLight:{backgroundColor:"rgba(76,175,80,0.3);",color:"#222222"},indigoLight:{backgroundColor:"rgba(63,81,181,0.3)",color:"#222222"},darkLight:{backgroundColor:"rgba(0,0,0,0.3)",color:"white"},blueStrong:{backgroundColor:"rgba(33,150,243,0.7)",color:"white"},redStrong:{backgroundColor:"rgba(244,67,54,0.7);",color:"white"},pinkStrong:{backgroundColor:"rgba(233,30,99,0.7",color:"white"},yellowStrong:{backgroundColor:"rgba(255,235,59,0.7)",color:"white"},orangeStrong:{backgroundColor:"rgba(255,152,0,0.7)",color:"white"},purpleStrong:{backgroundColor:"rgba(156,39,176,0.7)",color:"white"},brownStrong:{backgroundColor:"rgba(153,102,51,0.7)",color:"white"},tealStrong:{backgroundColor:"rgba(0,150,136,0.7)",color:"white"},cyanStrong:{backgroundColor:"rgba(0,188,212,0.7)",color:"white"},greenStrong:{backgroundColor:"rgba(76,175,80,0.7);",color:"white"},indigoStrong:{backgroundColor:"rgba(63,81,181,0.7)",color:"white"},darkStrong:{backgroundColor:"rgba(0,0,0,0.7)",color:"white"}}}));d.node,d.string,d.string,d.oneOfType([d.string,d.number]),d.string;var Qw;Y.div(Qw||(Qw=j([`
  padding: 0;

  .modal-dialog .modal-content {
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog .modal-content .modal-header {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
  }
  .modal-dialog.cascading-modal {
    margin-top: 10%;
  }
  .modal-dialog.cascading-modal .close {
    color: #fff;
    text-shadow: none;
    outline: 0;
    opacity: 1;
  }
  .modal-dialog.cascading-modal .modal-header {
    padding: 1.5rem;
    margin: -2rem 1rem 1rem 1rem;
    text-align: center;
    border: none;
    border-radius: 0.125rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .modal-dialog.cascading-modal .modal-header .close {
    margin-right: 1rem;
  }
  .modal-dialog.cascading-modal .modal-header .title {
    width: 100%;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  .modal-dialog.cascading-modal .modal-header .title .fas,
  .modal-dialog.cascading-modal .modal-header .title .fab,
  .modal-dialog.cascading-modal .modal-header .title .far {
    margin-right: 9px;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons {
    margin-top: 1.5rem;
  }
  .modal-dialog.cascading-modal .modal-header .social-buttons a {
    font-size: 1rem;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs {
    display: flex;
    margin: -1.5rem 1rem 0 1rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li {
    flex: 1;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .md-tabs li a {
    text-align: center;
  }
  .modal-dialog.cascading-modal .modal-c-tabs .tab-content {
    padding: 1.7rem 0 0 0;
  }
  .modal-dialog.cascading-modal .modal-body,
  .modal-dialog.cascading-modal .modal-footer {
    padding-right: 2rem;
    padding-left: 2rem;
    color: #616161;
  }
  .modal-dialog.cascading-modal .modal-body .additional-option,
  .modal-dialog.cascading-modal .modal-footer .additional-option {
    margin-top: 1rem;
    text-align: center;
  }
  .modal-dialog.cascading-modal.modal-avatar {
    margin-top: 6rem;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header {
    margin: -6rem 0 -1rem;
    box-shadow: none;
  }
  .modal-dialog.cascading-modal.modal-avatar .modal-header img {
    width: 130px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .modal-dialog.modal-notify .heading {
    padding: 0.3rem;
    margin: 0;
    font-size: 1.15rem;
    color: #fff;
  }
  .modal-dialog.modal-notify .modal-header {
    border: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .modal-dialog.modal-notify .close {
    opacity: 1;
  }
  .modal-dialog.modal-notify .modal-body {
    padding: 1.5rem;
    color: #616161;
  }
  .modal-dialog.modal-notify.modal-primary .modal-header {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .fas,
  .modal-dialog.modal-notify.modal-primary .fab,
  .modal-dialog.modal-notify.modal-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .badge {
    background-color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-primary .btn .fas,
  .modal-dialog.modal-notify.modal-primary .btn .fab,
  .modal-dialog.modal-notify.modal-primary .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,
  .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far {
    color: #4285f4;
  }
  .modal-dialog.modal-notify.modal-danger .modal-header {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .fas,
  .modal-dialog.modal-notify.modal-danger .fab,
  .modal-dialog.modal-notify.modal-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .badge {
    background-color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-danger .btn .fas,
  .modal-dialog.modal-notify.modal-danger .btn .fab,
  .modal-dialog.modal-notify.modal-danger .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,
  .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far {
    color: #ff3547;
  }
  .modal-dialog.modal-notify.modal-warning .modal-header {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .fas,
  .modal-dialog.modal-notify.modal-warning .fab,
  .modal-dialog.modal-notify.modal-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .badge {
    background-color: #fb3;
  }
  .modal-dialog.modal-notify.modal-warning .btn .fas,
  .modal-dialog.modal-notify.modal-warning .btn .fab,
  .modal-dialog.modal-notify.modal-warning .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,
  .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far {
    color: #fb3;
  }
  .modal-dialog.modal-notify.modal-success .modal-header {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .fas,
  .modal-dialog.modal-notify.modal-success .fab,
  .modal-dialog.modal-notify.modal-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .badge {
    background-color: #00c851;
  }
  .modal-dialog.modal-notify.modal-success .btn .fas,
  .modal-dialog.modal-notify.modal-success .btn .fab,
  .modal-dialog.modal-notify.modal-success .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,
  .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far {
    color: #00c851;
  }
  .modal-dialog.modal-notify.modal-info .modal-header {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .fas,
  .modal-dialog.modal-notify.modal-info .fab,
  .modal-dialog.modal-notify.modal-info .far {
    color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .badge {
    background-color: #33b5e5;
  }
  .modal-dialog.modal-notify.modal-info .btn .fas,
  .modal-dialog.modal-notify.modal-info .btn .fab,
  .modal-dialog.modal-notify.modal-info .btn .far {
    color: #fff;
  }
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,
  .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far {
    color: #33b5e5;
  }
  @media (min-width: 768px) {
    .modal-dialog.modal-top {
      top: 0;
    }
    .modal-dialog.modal-left {
      left: 0;
    }
    .modal-dialog.modal-right {
      right: 0;
    }
    .modal-dialog.modal-bottom {
      bottom: 0;
    }
    .modal-dialog.modal-top-left {
      top: 10px;
      left: 10px;
    }
    .modal-dialog.modal-top-right {
      top: 10px;
      right: 10px;
    }
    .modal-dialog.modal-bottom-left {
      bottom: 10px;
      left: 10px;
    }
    .modal-dialog.modal-bottom-right {
      right: 10px;
      bottom: 10px;
    }
  }
  .modal.fade.top:not(.show) .modal-dialog {
    transform: translate3d(0, -25%, 0);
  }
  .modal.fade.left:not(.show) .modal-dialog {
    transform: translate3d(-25%, 0, 0);
  }
  .modal.fade.right:not(.show) .modal-dialog {
    transform: translate3d(25%, 0, 0);
  }
  .modal.fade.bottom:not(.show) .modal-dialog {
    transform: translate3d(0, 25%, 0);
  }
  @media (min-width: 992px) {
    .modal.modal-scrolling {
      position: relative;
    }
    .modal.modal-scrolling .modal-dialog {
      position: fixed;
      z-index: 1050;
    }
    .modal.modal-content-clickable {
      top: auto;
      bottom: auto;
    }
    .modal.modal-content-clickable .modal-dialog {
      position: fixed;
    }
    .modal-fluid {
      width: 100%;
      max-width: 100%;
    }
    .modal-fluid .modal-content {
      width: 100%;
    }
    .modal-frame {
      position: absolute;
      width: 100%;
      max-width: 100% !important;
      margin: 0 !important;
    }
    .modal-frame.modal-bottom {
      bottom: 0;
    }
    .modal-full-height {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 400px;
      height: auto;
      min-height: 100%;
      margin: 0;
    }
    .modal-full-height.modal-top,
    .modal-full-height.modal-bottom {
      display: block;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
    .modal-full-height.modal-top {
      bottom: auto;
    }
    .modal-full-height.modal-bottom {
      top: auto;
      min-height: 0;
    }
    .modal-full-height .modal-content {
      width: 100%;
    }
    .modal-full-height.modal-lg {
      width: 90%;
      max-width: 90%;
    }
  }
  @media (min-width: 992px) and (min-width: 992px) {
    .modal-full-height.modal-lg {
      width: 800px;
      max-width: 800px;
    }
  }
  @media (min-width: 992px) and (min-width: 1200px) {
    .modal-full-height.modal-lg {
      width: 1000px;
      max-width: 1000px;
    }
  }
  @media (min-width: 992px) {
    .modal-side {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 400px;
      margin: 0;
    }
  }
`])));d.string,d.bool,d.bool,d.string,d.number,d.bool,d.bool,d.node,d.string,d.string,d.bool,d.bool,d.bool,d.bool,d.bool,d.func,d.func,d.string,d.bool,d.bool,d.bool,d.string,d.string,d.object,d.number,d.bool,d.bool,d.string,d.string,d.func,d.bool,d.string,d.string,d.func,d.string,d.object,d.oneOfType([d.number,d.string]);var Jw;Y.h4(Jw||(Jw=j([`
  .close {
    height: 10px;
    width: 10px;
    margin-right: 10px;
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`])));d.node,d.string,d.string,d.oneOfType([d.func,d.string]),d.func;d.node,d.string;d.node,d.string;var Zw;Y.nav(Zw||(Zw=j([""])));d.string,d.string,d.bool,d.bool,d.oneOfType([d.bool,d.string]),d.string,d.bool,d.bool,d.number,d.string,d.oneOfType([d.func,d.string]),d.bool;var e1;Y.ul(e1||(e1=j([""])));d.node,d.string,d.bool,d.bool,d.oneOfType([d.func,d.string]);var t1;Y(Ja)(t1||(t1=j([""])));d.string,d.string;var n1;Y.li(n1||(n1=j([""])));d.bool,d.node,d.string,d.oneOfType([d.func,d.string]);d.bool,d.node,d.string,d.bool,d.bool,d.string;var r1;Y.button(r1||(r1=j([""])));d.node,d.string,d.string,d.bool,d.bool,d.oneOfType([d.func,d.string]),d.oneOf(["reset","submit","button"]);var o1,i1;Y.div(o1||(o1=j([`
  width: 100%;
  background: `,`;
  border-radius: 20px;
  .progress-bar {
    `,`
    border-radius: 20px;
  }
`])),function(e){return e.colors==="primary"?"#3e98c728":e.colors==="secondary"?"#7356BF28":e.colors==="danger"?"#E1190028":e.colors==="warning"?"#66512C28":e.colors==="info"?"#17A2B828":e.colors==="success"?"#05944F28":"#00000028"},Zt);Y.div(i1||(i1=j([`
  display: block;
  width: 100%;
  .progress-text {
    display: flex;
    width: 100%;
    justify-content: center;
    color: `,`;
  }
`])),function(e){return e.colors==="primary"?"#3e98c7":e.colors==="secondary"?"#7356BF":e.colors==="danger"?"#E11900":e.colors==="warning"?"#66512C":e.colors==="info"?"#17A2B8":e.colors==="success"?"#05944F":"#000000"});d.string,d.node,d.string,d.oneOf(["primary","secondary","success","danger","warning","info","dark"]),d.number,d.number,d.number,d.number,d.object;var a1;Y.div(a1||(a1=j([`
  &.popover {
    width: auto;
    background-color: white;
    color: #97999b;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    z-index: 10;
    max-width: 274px;
    text-align: start;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  &.show.popover {
    z-index: 999;
    opacity: 1;
    visibility: visible;
  }

  .popover-body {
    color: #6c6e71;
  }

  &.popover .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  .popover[x-placement^='top'] {
    margin-bottom: 15px;
  }

  .popover[x-placement^='top'] .popover_arrow {
    border-width: 8px 8px 0 8px;
    border-color: #d6d6d6 transparent transparent transparent;
    bottom: -8px;
    margin-bottom: 0;
  }

  .popover[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    bottom: 1.5px;
    border: solid;
    border-width: 8px 8px 0 8px;
    border-color: white transparent transparent transparent;
  }

  .popover[x-placement^='bottom'] {
    margin-top: 15px;
  }

  .popover[x-placement^='bottom'] .popover_arrow {
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #d6d6d6 transparent;
    top: -8px;
    margin-top: 0;
  }

  .popover[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -8px;
    top: 1.45px;
    border: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent white transparent;
  }

  .popover[x-placement^='right'] {
    margin-left: 15px;
  }

  .popover[x-placement^='right'] .popover_arrow {
    border-width: 8px 8px 8px 0;
    border-color: transparent #d6d6d6 transparent transparent;
    left: -8px;
    margin-left: 0;
  }

  .popover[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    left: 1.45px;
    border: solid;
    border-width: 8px 8px 8px 0;
    border-color: transparent white transparent transparent;
  }

  .popover[x-placement^='left'] {
    margin-right: 15px;
  }

  .popover[x-placement^='left'] .popover_arrow {
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent #d6d6d6;
    right: -8px;
    margin-right: 0;
  }

  .popover[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -8px;
    right: 1.45px;
    border: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent white;
  }

  &.tooltip {
    width: auto;
    background-color: black;
    color: white;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    /* font-size: 0.83em; */
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    /* z-index: 200000; */
    z-index: 15;
    /* max-width: initial; */
    max-width: 274px;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  .tooltip-inner {
    display: block;
  }

  &.show.tooltip {
    z-index: 999;

    opacity: 1;
    visibility: visible;
  }

  &.tooltip .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    color: transparent;
  }

  &.tooltip[x-placement^='top'],
  &.show[x-placement^='top']:not(.tooltip) {
    margin-bottom: 5px;
  }

  &.tooltip[x-placement^='top'] .popover_arrow {
    border-width: 6px 6px 0 6px;
    border-color: #131313 transparent transparent transparent;
    bottom: -6px;
    margin-bottom: 0;
  }

  &.tooltip[x-placement^='top'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    bottom: 1.5px;
    border: solid;
    border-width: 6px 6px 0 6px;
    border-color: black transparent transparent transparent;
  }

  &.tooltip[x-placement^='bottom'],
  &.show[x-placement^='bottom']:not(.tooltip) {
    margin-top: 5px;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow {
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #131313 transparent;
    top: -6px;
    margin-top: 0;
  }

  &.tooltip[x-placement^='bottom'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -6px;
    top: 1.45px;
    border: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent black transparent;
  }

  &.tooltip[x-placement^='right'],
  &.show[x-placement^='right']:not(.tooltip) {
    margin-left: 5px;
  }

  &.tooltip[x-placement^='right'] .popover_arrow {
    border-width: 6px 6px 6px 0;
    border-color: transparent #131313 transparent transparent;
    left: -6px;
    margin-left: 0;
  }

  &.tooltip[x-placement^='right'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    left: 1.45px;
    border: solid;
    border-width: 6px 6px 6px 0;
    border-color: transparent black transparent transparent;
  }

  &.tooltip[x-placement^='left'],
  &.show[x-placement^='left']:not(.tooltip) {
    margin-right: 5px;
  }

  &.tooltip[x-placement^='left'] .popover_arrow {
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #131313;
    right: -6px;
    margin-right: 0;
  }

  &.tooltip[x-placement^='left'] .popover_arrow::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -6px;
    right: 1.45px;
    border: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent black;
  }
`])));d.node,d.bool,d.bool,d.bool,d.string,d.bool,d.bool,d.object,d.string,d.bool,d.bool,d.objectOf(d.string),d.string;d.string,d.arrayOf(d.shape({choosed:d.bool,icon:d.string,tooltip:d.string})),d.bool,d.string,d.oneOfType([d.bool,d.arrayOf(d.string)]),d.func,d.string,d.bool,d.bool,d.string,d.func,d.string;var s1;Y.div(s1||(s1=j([""])));d.bool,d.bool,d.bool,d.bool,d.string,d.bool,d.bool,d.bool,d.oneOfType([d.func,d.string]),d.bool;var l1;Y.select(l1||(l1=j([""])));d.array,d.string;var c1,u1,d1,t6=Y.div(c1||(c1=j([`
  background: `,`;
  color: `,`;
  height: 100%;
  width: `,`;
  min-width: `,`;
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1009;

  &.toggled {
    width: `,`;
    min-width: `,`;
  }
`])),function(e){return e.backgroundColor},function(e){return e.textColor},function(e){var t=e.maxWidth;return t},function(e){var t=e.maxWidth;return t},function(e){var t=e.minWidth;return t},function(e){var t=e.minWidth;return t}),n6=Y.div(u1||(u1=j([`
  height: 100%;
  position: relative;
  z-index: 101;
`]))),r6=Y.div(d1||(d1=j([`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
`]))),o6=["className","minWidth","maxWidth","children","toggled","textColor","backgroundColor","breakpoint"],El=O.createContext({toggled:!1,handleToggleSidebar:function(){},textColor:"",backgroundColor:"",breakpoint:0}),ff=O.forwardRef(function(e,t){var n=e.className,r=e.minWidth,o=e.maxWidth,i=e.children,a=e.toggled,s=e.textColor,l=e.backgroundColor,c=e.breakpoint,u=gi(e,o6),f=function(v){h(jm({},m,{toggled:!v}))},p=O.useState({toggled:a,handleToggleSidebar:f,textColor:s,backgroundColor:l,breakpoint:c}),m=p[0],h=p[1];O.useEffect(function(){f(!a)},[a]);var b=t||U.createRef();return U.createElement(pi,{theme:Pr},U.createElement(El.Provider,{value:m},U.createElement(t6,Object.assign({},u,{ref:b,className:pe("pro-sidebar",n,{toggled:m.toggled}),textColor:s,backgroundColor:l,minWidth:r,maxWidth:o}),U.createElement(n6,null,U.createElement(r6,null,i)))))});ff.propTypes={className:d.string,children:d.any,textColor:d.string,backgroundColor:d.string,breakpoint:d.number,toggled:d.bool};ff.defaultProps={textColor:"#ffffff",backgroundColor:Pr.colors.dark900,breakpoint:720,toggled:!1,minWidth:"80px",maxWidth:"270px",children:null};ff.displayName="Sidebar";var f1,i6=Y.div(f1||(f1=j([`
    flex-grow: 1;
    padding-top: 15px;
`]))),a6=["children","className"],jT=O.forwardRef(function(e,t){var n=e.children,r=e.className,o=gi(e,a6),i=O.useContext(El),a=i.handleToggleSidebar,s=i.breakpoint,l=O.useState(0),c=l[0],u=l[1],f=s||720;O.useEffect(function(){var m=function(){return u(window.innerWidth)};return window.addEventListener("resize",m),c<f&&a(!1),function(){window.removeEventListener("resize",m)}},[a,c,f]);var p=t||U.createRef();return U.createElement(pi,{theme:Pr},U.createElement(i6,Object.assign({},o,{ref:p,className:pe("pro-sidebar-content",r)}),n))});jT.propTypes={className:d.string,children:d.any};var s6=["children","className"],LT=O.forwardRef(function(e,t){var n=e.children,r=e.className,o=gi(e,s6),i=t||U.createRef();return U.createElement(pi,{theme:Pr},U.createElement("div",Object.assign({},o,{ref:i,className:pe("pro-sidebar-footer",r)}),n))});LT.propTypes={className:d.string,children:d.any};var p1,l6=Y.div(p1||(p1=j([`
  border-bottom: 1px solid hsla(0, 0%, 67.8%, 0.2);

  .head-div {
    padding: 24px 30px;
    font-weight: bold;
    font-size: 17px;
    letter-spacing: 1px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

    .icon-suffix {
      cursor: pointer;
    }

    &.toggled {
      justify-content: center;
      .head-text {
        display: none;
      }
      .icon-suffix {
        margin: 0px;
      }
    }
  }
`]))),c6=["children","prefix","className"],DT=O.forwardRef(function(e,t){var n=e.children,r=e.prefix,o=e.className,i=gi(e,c6),a=t||U.createRef(),s=O.useContext(El),l=s.toggled,c=s.handleToggleSidebar;return U.createElement(pi,{theme:Pr},U.createElement(l6,Object.assign({},i,{ref:a,className:pe(o)}),U.createElement("div",{className:pe("head-div",{toggled:l})},U.createElement("span",{className:"head-text"},n),r?U.createElement("span",{className:"icon-suffix",onClick:function(){return c(l)}},r):null)))});DT.propTypes={className:d.string,children:d.any,prefix:d.any};var h1,m1,u6=Y.nav(h1||(h1=j([`
    padding-top: 10px;
    padding-bottom: 10px;
`]))),d6=Y.ul(m1||(m1=j([`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        color: `,`;
        text-decoration:none;
    }
    .activeClicked {
      >li{
            background: `,`;
            color: `,`;
        }
    }
    
`])),function(e){return e.textColor},function(e){return e.textColor},function(e){return e.backgroundColor}),f6=["children","className","popperArrow"],NT=O.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.popperArrow,i=gi(e,f6),a=t||U.createRef(),s=O.useContext(El),l=s.textColor,c=s.backgroundColor;return U.createElement(pi,{theme:Pr},U.createElement(u6,Object.assign({},i,{ref:a,className:pe("pro-menu",r)}),U.createElement(d6,{textColor:l,backgroundColor:c},U.Children.map(n,function(u){return U.cloneElement(u,{firstchild:1,popperarrow:o===!0?1:0})}))))});NT.propTypes={className:d.string,children:d.any,popperArrow:d.bool};var g1,b1,p6=Y.div(g1||(g1=j([`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 2px 8px 15px;
  height: 45px;
  cursor: pointer;
  outline: none;

  .side-icon {
    margin-right: 10px;
    width: 30px;
  }
  &.active {
    background: white;
    color: black;
  }

  .item-content {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: `,`;
  }
  .suffix-wrapper {
    margin-right: 23px;
  }
  &.toggled {
    justify-content: center;
    .item-content {
      width: 0px;
      display: none;
    }
    .suffix-wrapper {
      opacity: 0;
      display: none;
    }
  }
`])),function(e){var t=e.fontSize;return t}),h6=Y.li(b1||(b1=j([`
  list-style: none;
  margin: 10px 15px;
  &.toggled {
    position: relative;
    margin-top: 0px;
    margin-bottom: 0px;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
`]))),m6=["children","className","icon","iconSize","iconType","iconClassName","textFontSize","active","suffix","firstChild","popperArrow"],Fo=O.forwardRef(function(e,t){var n=e.children,r=e.className,o=e.icon,i=e.iconSize,a=e.iconType,s=e.iconClassName,l=e.textFontSize,c=e.active,u=e.suffix,f=gi(e,m6),p=t||U.createRef(),m=O.useContext(El),h=m.toggled;return U.createElement(pi,{theme:Pr},U.createElement(h6,Object.assign({},f,{ref:p,className:pe(r,{active:c},{toggled:h})}),U.createElement(p6,{className:pe({active:c},{toggled:h}),tabIndex:0,fontSize:l,role:"button",toggled:h},o&&U.createElement(Xb,{icon:o,size:i,className:pe(s,"side-icon",a&&"fa-"+a)}),U.createElement("span",{className:"item-content"},n),u?U.createElement("span",{className:"suffix-wrapper"},u):null)))});Fo.propTypes={children:d.any,className:d.string,icon:d.string,iconSize:d.string,iconClassName:d.string,iconType:d.string,active:d.bool,suffix:d.any,firstChild:d.number,popperArrow:d.number,textFontSize:d.string};Fo.defaultProps={iconSize:"md"};d.oneOfType([d.number,d.string]),d.func,d.func,d.number,d.number,d.number,d.bool,d.oneOf(["sm","lg"]),d.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),d.object,d.oneOf(["auto","on","off"]),d.oneOf(["top","bottom"]),d.func,d.object,d.object,d.string,d.string;d.string,d.string,d.bool,d.bool,d.number,d.number,d.string;var v1,y1,x1,w1,_1,S1,k1,g6=Tb(v1||(v1=j([`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`]))),b6=Tb(y1||(y1=j([`
 0% { stroke: #4285f4; }
 25%{stroke: #de3e35;} 50%{stroke: #f7c223} 75%{stroke: #1b9a59}
 100% {  stroke: #4285f4}`]))),E1=Tb(x1||(x1=j([`
 0% { stroke-dashoffset: 187; }
  50%{stroke-dashoffset: 46.75;
transform: rotate(135deg)} 
 100% {   stroke-dashoffset: 187;
transform: rotate(450deg)}`])));Y.svg(w1||(w1=j([`
  stroke-width: 5;
  animation-name: `,`;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
`])),g6);Y.circle(_1||(_1=j([`
  stroke: `,`;

  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: `,`;
`])),function(e){return e.warning?"#FFE975":e.success?"#05944F":e.secondary?"#7356BF":e.dark?"#000000":e.danger?"#E11900":e.info?"#17A2B8":"#276EF1"},function(e){return e.multicolor?te(S1||(S1=j([`
          `," 1.4s ease-in-out infinite, ",` 5.6s ease-in-out infinite
        `])),E1,b6):te(k1||(k1=j([`
          `,` 1.4s ease-in-out infinite
        `])),E1)});d.string,d.string,d.string,d.bool,d.bool,d.bool,d.bool,d.bool,d.bool;var O1;Y.div(O1||(O1=j([`
  .switch-container {
  }

  input[type="checkbox"].switch {
    position:absolute;
    opacity: 0;
  }

  input[type="checkbox"].switch + div {
    vertical-align: middle;
    width: 40px;
    height: 20px;
    border-radius: 100px;
    background-color: #333;
    cursor: pointer;
  }

  input[type="checkbox"].switch:checked + div {
    background-color: #80ff80;
  }

  input[type="checkbox"].switch + div > div {
    margin:0;
    width: 50%;
    height: 100%;
    background: #f2f2f2;
    border-radius: inherit;
    transition:margin 0.3s linear;
  }

  input[type="checkbox"].switch:checked + div > div {
    margin-left:auto;
  }
`])));d.bool,d.string;d.node,d.string,d.arrayOf(d.object),d.bool;var C1,T1,R1,P1;Y.div(C1||(C1=j([`
  position: relative;
  overflow: hidden;
  cursor: default;
  `,`
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  img,
  video {
    position: relative;
    display: block;
  }
  .video.video-intro {
    top: 50%;
    left: 50%;
    z-index: -100;
    width: auto;
    min-width: 100%;
    height: auto;
    min-height: 100%;
    transition: 1s opacity;
    transform: translateX(-50%) translateY(-50%);
  }
  border-radius: `,`;
  `,`
`])),function(e){return e.zoom?te(T1||(T1=j([`
          img,
          video {
            transition: all 0.2s linear;
          }
          &:hover img,
          &:hover video {
            transform: scale(1.1);
          }
        `]))):te(R1||(R1=j([""])))},function(e){return e.rounded?"0.25rem !important":"0"},function(e){return e.hover?te(P1||(P1=j([`
          .mask {
            opacity: 0;
            transition: all 0.4s ease-in-out;
            &:hover {
              opacity: 1;
            }
          }
        `]))):null});d.node,d.string,d.bool,d.bool,d.bool,d.string,d.string;var A1,I1,M1;Y.div(A1||(A1=j([`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px;
  `,`
  `,`

  .steps {
    display: table-cell;
    text-align: center;
    position: relative;
  }
`])),function(e){return e.direction==="vertical"&&te(I1||(I1=j([`
      .step-row-2 {
        height: 100%;
        flex-direction: row;
        .step-content {
          display: flex;
          -ms-flex-align: center;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: space-between !important;
        }
      }
    `])))},function(e){return e.direction==="horizontal"&&te(M1||(M1=j([`
      flex-direction: column;
      .step-row-2 {
        flex-direction: column;
        margin-top: 22px;
        overflow-x: hidden;
        .step-content {
          overflow: auto;
          min-width: 500px;
          justify-content: space-between !important;
          display: flex !important;
          width: 100%;
        }
        &-webkit-scrollbar {
          height: 8px;
        }
        &-webkit-scrollbar-thumb {
          background: #ccc;
        }
        &-webkit-scrollbar-track {
        }
      }
    `])))});var j1,L1,D1;Y.div(j1||(j1=j([`
  display: flex;
  `,`
  `,`
    .content-container {
    width: 100%;
    padding: 15px 10px;
  }
  .content-transition {
    width: 100%;
  }
  .fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-top: -20px;
    }
    100% {
      opacity: 1;
      margin-top: 0px;
    }
  }
`])),function(e){var t=e.direction;return t==="vertical"&&te(L1||(L1=j([`
      width: calc(100% - 150px);
    `])))},function(e){var t=e.direction;return t==="horizontal"&&te(D1||(D1=j([`
      width: 100%;
    `])))});O.createContext({});Pr.colors.dark900;d.string.isRequired,d.number.isRequired,d.array.isRequired,d.number,d.string,d.func,d.bool,d.bool;var N1,$1,F1,z1,B1,H1;Y.div(N1||(N1=j([`
  display: flex;
  `,`
  `,`
  `,`;
  `,`;
  `,`
`])),function(e){var t=e.direction,n=e.size,r=e.showIndex,o=e.showTitle;return t==="vertical"&&te($1||($1=j([`
      width: `,`px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: `,`;
      span {
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 6px;
        height: 50px;
      }
    `])),n,!o&&!r&&"10px")},function(e){var t=e.direction;return t==="horizontal"&&te(F1||(F1=j([`
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      span {
        margin: 0 2px;
        border-radius: 6px;
        transition: 0.4;
      }
      span:nth-child(1) {
        width: 6px;
        height: 6px;
      }
      span:nth-child(2) {
        width: 50px;
        height: 6px;
      }
    `])))},function(e){var t=e.status;return t==="prev"&&te(z1||(z1=j([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #666666;
      }
    `])))},function(e){var t=e.status;return t==="active"&&te(B1||(B1=j([`
      span:nth-child(1) {
        background-color: #666666;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))},function(e){var t=e.status;return t==="next"&&te(H1||(H1=j([`
      span:nth-child(1) {
        background-color: #cccccc;
      }
      span:nth-child(2) {
        background-color: #cccccc;
      }
    `])))});var U1,W1,V1,Y1,G1,q1,X1,K1,Q1,J1,Z1;Y.div(U1||(U1=j([`
  display: flex;
  `,`
  `,`
  .step-title {
    display: flex;
    align-items: center;
    margin-left: 5px;
    padding: 10px 0;
    `,`;
    `,`;
    `,`
    .step-number {
      font-size: 30px;
      font-weight: 600;
    }
    .step-text {
      font-size: 14px;
      line-height: 18px;
      font-weight: 600;
      margin-left: 10px;
      text-align: start;
      max-width: 150px;
      word-wrap: break-word;
    }
  }
  .step-indicators {
    display: flex;
    width: fit-content;
    `,`
    `,`
  }
  .default-node {
    cursor: pointer;
    width: `,`;
    height: `,`;
    color: #000;
    font-size: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: width 0.3;
    align-items: center;
    * {
      position: relative;
    }
    `,`;
    `,`;
    `,`
  }
  .__react_component_tooltip {
    background: `,`;
    font-size: 10px;
    * {
      font-size: inherit;
    }
    padding: 2px 5.5px;
    border-radius: 4px;
    &:before,
    &:after {
      display: none !important;
    }
  }
`])),function(e){var t=e.direction;return t==="horizontal"&&te(W1||(W1=j([`
      flex-direction: column;
    `])))},function(e){var t=e.direction;return t==="vertical"&&te(V1||(V1=j([`
      min-width: 150px;
      max-width: 150px;
    `])))},function(e){var t=e.status;return t==="prev"&&te(Y1||(Y1=j([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="active"&&te(G1||(G1=j([`
        opacity: 1;
      `])))},function(e){var t=e.status;return t==="next"&&te(q1||(q1=j([`
        opacity: 0.6;
      `])))},function(e){var t=e.direction;return t==="horizontal"&&te(X1||(X1=j([`
        flex-direction: row;
      `])))},function(e){var t=e.direction;return t==="vertical"&&te(K1||(K1=j([`
        flex-direction: column;
      `])))},function(e){var t=e.size;return t+"px"},function(e){var t=e.size;return t+"px"},function(e){var t=e.status;return t==="prev"&&te(Q1||(Q1=j([`
        background-color: #333333;
        color: #fff;
        border: 2px solid #cccccc;
      `])))},function(e){var t=e.status;return t==="active"&&te(J1||(J1=j([`
        background-color: #fff;
        border: 2px solid #333333;
        position: relative;
      `])))},function(e){var t=e.status;return t==="next"&&te(Z1||(Z1=j([`
        color: #fff;
        background-color: #9f9d9d;
      `])))},function(e){return e.tooltipBackground});U.createElement("div",null,"Hello");d.string,d.string,d.bool,d.bool,d.bool,d.number,d.node;class rs extends Error{}rs.prototype.name="InvalidTokenError";function v6(e){return decodeURIComponent(atob(e).replace(/(.)/g,(t,n)=>{let r=n.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function y6(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return v6(t)}catch{return atob(t)}}function x6(e,t){if(typeof e!="string")throw new rs("Invalid token specified: must be a string");t||(t={});const n=t.header===!0?0:1,r=e.split(".")[n];if(typeof r!="string")throw new rs(`Invalid token specified: missing part #${n+1}`);let o;try{o=y6(r)}catch(i){throw new rs(`Invalid token specified: invalid base64 for part #${n+1} (${i.message})`)}try{return JSON.parse(o)}catch(i){throw new rs(`Invalid token specified: invalid json for part #${n+1} (${i.message})`)}}const br={getToken:async()=>document.cookie,getAdminFromToken:async()=>{const e=await br.getToken();try{return x6(e)}catch(t){return console.error("Error decoding token:",t),e}},isMasterAdmin:async()=>{const e=await br.getAdminFromToken();return e?e.role==="admin":!1},getBranchId:async()=>(await br.getAdminFromToken()).branch_id};var $T={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const w6=$T.VITE_SERVER_URL||"http://localhost",_6=$T.VITE_SERVER_PORT||"",la={hostname:w6,port:_6},Si=`${la.hostname}/branches`,qr={createBranch:async e=>await ae.post(`${Si}/create`,e),getAllBranches:async()=>await ae.get(`${Si}/getBranches`),getAllBranchWithDeleted:async()=>await ae.get(`${Si}/getBranchesWithDeleted`),getSpecificBranchName:async e=>await ae.post(`${Si}/getSpecificBranchName`,{branch_id:e}),updateBranch:async e=>await ae.post(`${Si}/update`,e),deleteBranch:async e=>(console.log(e),await ae.post(`${Si}/delete`,{branch_id:e}))},S6=()=>{const[e,t]=O.useState(!1),[n,r]=O.useState(null);O.useEffect(()=>{const a=async()=>{const l=await br.isMasterAdmin();l&&t(l)},s=async()=>{const l=await br.getBranchId(),c=await qr.getSpecificBranchName(l);r(c.data[0].branch_name)};a(),s()},[]);const o=async()=>{await ae.get(`${la.hostname}:${la.port}/logout`,{withCredentials:!0}).then(a=>{location.reload(!0)}).catch(a=>console.log(a))},i=()=>e?x.jsxs(x.Fragment,{children:[x.jsx(Ja,{exact:!0,to:"/admins",activeClassName:"activeClicked",children:x.jsx(Fo,{icon:"user",children:"Admins"})}),x.jsx(Ja,{exact:!0,to:"/branches",activeClassName:"activeClicked",children:x.jsx(Fo,{icon:"store",children:"Branches"})})]}):x.jsx(x.Fragment,{});return x.jsx("div",{style:{display:"flex",height:"100vh",overflow:"scroll initial"},children:x.jsxs(ff,{textColor:"#fff",backgroundColor:"#960018",children:[x.jsx(DT,{prefix:x.jsx("i",{className:"fa fa-bars fa-large"}),children:x.jsx("a",{className:"text-decoration-none",style:{color:"inherit"},children:"Mr Billy"})}),x.jsx(jT,{className:"sidebar-content",children:x.jsxs(NT,{children:[x.jsx(Ja,{exact:!0,to:"/dashboard",activeClassName:"activeClicked",children:x.jsx(Fo,{icon:"columns",children:"Dashboard"})}),x.jsx(Ja,{exact:!0,to:e?"/viewallitems":"/viewitems",activeClassName:"activeClicked",children:x.jsx(Fo,{icon:"table",children:"Items"})}),i(),x.jsx(Fo,{icon:"sign-out-alt",onClick:o,children:"Logout"}),x.jsx("hr",{})]})}),x.jsx(LT,{style:{textAlign:"center"},children:x.jsx("div",{style:{padding:"20px 5px"},children:e?"Master Admin":n})})]})})},Ol=({children:e})=>x.jsx("div",{className:"container-fluid",children:x.jsxs("div",{className:"row no-gutters",children:[x.jsx("div",{className:"col-auto p-0 m-0",children:x.jsx(S6,{})}),x.jsx("div",{className:"col p-0 m-0",children:x.jsx("div",{className:"content",children:e})})]})});function k6(){const[e,t]=O.useState({admin_id:"",username:"",password:"",role:"",branch_id:""}),n=Cd(),r=o=>{o.preventDefault(),ae.post("http://localhost:8001/register",e).then(i=>{i.data.Status==="Success"?n("/login"):alert("Error")}).then(i=>console.log(i))};return x.jsx("div",{className:"d-flex justify-content-center align-items-center bg-primary vh-100",children:x.jsxs("div",{className:"bg-white p-3 rounded w-25",children:[x.jsx("h2",{children:"Register"}),x.jsxs("form",{onSubmit:r,children:[x.jsxs("div",{className:"mb-3",children:[x.jsx("label",{htmlFor:"admin_id",children:x.jsx("strong",{children:"Admin ID"})}),x.jsx("input",{type:"text",placeholder:"Enter Admin ID",name:"admin_id",className:"form-control rounded-0",autoComplete:"off",onChange:o=>t({...e,admin_id:o.target.value})})]}),x.jsxs("div",{className:"mb-3",children:[x.jsx("label",{htmlFor:"username",children:x.jsx("strong",{children:"Username"})}),x.jsx("input",{type:"text",placeholder:"Enter Username",name:"username",className:"form-control rounded-0",autoComplete:"off",onChange:o=>t({...e,username:o.target.value})})]}),x.jsxs("div",{className:"mb-3",children:[x.jsx("label",{htmlFor:"password",children:x.jsx("strong",{children:"Pasword"})}),x.jsx("input",{type:"password",placeholder:"Enter Password",name:"password",className:"form-control rounded-0",autoComplete:"off",onChange:o=>t({...e,password:o.target.value})})]}),x.jsxs("div",{className:"form-group mb-2",children:[x.jsx("label",{htmlFor:"role",children:x.jsx("strong",{children:"Role"})}),x.jsxs("select",{name:"role",className:"form-control rounded-0",onChange:o=>t({...e,role:o.target.value}),children:[x.jsx("option",{value:"",children:"Select Role"}),x.jsx("option",{value:"admin",children:"Admin"}),x.jsx("option",{value:"branch_user",children:"Branch User"})]})]}),x.jsxs("div",{className:"mb-3",children:[x.jsx("label",{htmlFor:"branch_id",children:x.jsx("strong",{children:"Branch ID"})}),x.jsx("input",{type:"text",placeholder:"Enter Branch ID",name:"branch_id",className:"form-control rounded-0",autoComplete:"off",onChange:o=>t({...e,branch_id:o.target.value})})]}),x.jsx("button",{type:"submit",className:"btn btn-success w-100 rounded-0",children:"Log in"})]})]})})}const E6=["xxl","xl","lg","md","sm","xs"],O6="xs",pf=O.createContext({prefixes:{},breakpoints:E6,minBreakpoint:O6});function Ge(e,t){const{prefixes:n}=O.useContext(pf);return e||n[t]||t}function FT(){const{breakpoints:e}=O.useContext(pf);return e}function zT(){const{minBreakpoint:e}=O.useContext(pf);return e}function C6(){const{dir:e}=O.useContext(pf);return e==="rtl"}function hf(e){return e&&e.ownerDocument||document}function T6(e){var t=hf(e);return t&&t.defaultView||window}function R6(e,t){return T6(e).getComputedStyle(e,t)}var P6=/([A-Z])/g;function A6(e){return e.replace(P6,"-$1").toLowerCase()}var I6=/^ms-/;function dc(e){return A6(e).replace(I6,"-ms-")}var M6=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function j6(e){return!!(e&&M6.test(e))}function qo(e,t){var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(dc(t))||R6(e).getPropertyValue(dc(t));Object.keys(t).forEach(function(o){var i=t[o];!i&&i!==0?e.style.removeProperty(dc(o)):j6(o)?r+=o+"("+i+") ":n+=dc(o)+": "+i+";"}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}const Ea=!!(typeof window<"u"&&window.document&&window.document.createElement);var Lm=!1,Dm=!1;try{var Pp={get passive(){return Lm=!0},get once(){return Dm=Lm=!0}};Ea&&(window.addEventListener("test",Pp,Pp),window.removeEventListener("test",Pp,!0))}catch{}function BT(e,t,n,r){if(r&&typeof r!="boolean"&&!Dm){var o=r.once,i=r.capture,a=n;!Dm&&o&&(a=n.__once||function s(l){this.removeEventListener(t,s,i),n.call(this,l)},n.__once=a),e.addEventListener(t,a,Lm?r:i)}e.addEventListener(t,n,r)}function Nm(e,t,n,r){var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}function Gu(e,t,n,r){return BT(e,t,n,r),function(){Nm(e,t,n,r)}}function L6(e,t,n,r){if(r===void 0&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function D6(e){var t=qo(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function N6(e,t,n){n===void 0&&(n=5);var r=!1,o=setTimeout(function(){r||L6(e,"transitionend",!0)},t+n),i=Gu(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),i()}}function HT(e,t,n,r){n==null&&(n=D6(e)||0);var o=N6(e,n,r),i=Gu(e,"transitionend",t);return function(){o(),i()}}function e_(e,t){const n=qo(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function $6(e,t){const n=e_(e,"transitionDuration"),r=e_(e,"transitionDelay"),o=HT(e,i=>{i.target===e&&(o(),t(i))},n+r)}function F6(e){e.offsetHeight}const t_=e=>!e||typeof e=="function"?e:t=>{e.current=t};function z6(e,t){const n=t_(e),r=t_(t);return o=>{n&&n(o),r&&r(o)}}function Cl(e,t){return O.useMemo(()=>z6(e,t),[e,t])}function B6(e){return e&&"setState"in e?Bi.findDOMNode(e):e??null}const H6=U.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:s,childRef:l,...c},u)=>{const f=O.useRef(null),p=Cl(f,l),m=S=>{p(B6(S))},h=S=>E=>{S&&f.current&&S(f.current,E)},b=O.useCallback(h(e),[e]),w=O.useCallback(h(t),[t]),v=O.useCallback(h(n),[n]),g=O.useCallback(h(r),[r]),y=O.useCallback(h(o),[o]),_=O.useCallback(h(i),[i]),k=O.useCallback(h(a),[a]);return x.jsx(Cr,{ref:u,...c,onEnter:b,onEntered:v,onEntering:w,onExit:g,onExited:_,onExiting:y,addEndListener:k,nodeRef:f,children:typeof s=="function"?(S,E)=>s(S,{...E,ref:m}):U.cloneElement(s,{ref:m})})});function U6(e){const t=O.useRef(e);return O.useEffect(()=>{t.current=e},[e]),t}function Kn(e){const t=U6(e);return O.useCallback(function(...n){return t.current&&t.current(...n)},[t])}const W6=e=>O.forwardRef((t,n)=>x.jsx("div",{...t,ref:n,className:pe(t.className,e)}));function V6(){return O.useState(null)}function Y6(){const e=O.useRef(!0),t=O.useRef(()=>e.current);return O.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function G6(e){const t=O.useRef(null);return O.useEffect(()=>{t.current=e}),t.current}const q6=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",X6=typeof document<"u",n_=X6||q6?O.useLayoutEffect:O.useEffect,K6=["as","disabled"];function Q6(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function J6(e){return!e||e.trim()==="#"}function UT({tagName:e,disabled:t,href:n,target:r,rel:o,role:i,onClick:a,tabIndex:s=0,type:l}){e||(n!=null||r!=null||o!=null?e="a":e="button");const c={tagName:e};if(e==="button")return[{type:l||"button",disabled:t},c];const u=p=>{if((t||e==="a"&&J6(n))&&p.preventDefault(),t){p.stopPropagation();return}a==null||a(p)},f=p=>{p.key===" "&&(p.preventDefault(),u(p))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:i??"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:e==="a"?r:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:u,onKeyDown:f},c]}const Z6=O.forwardRef((e,t)=>{let{as:n,disabled:r}=e,o=Q6(e,K6);const[i,{tagName:a}]=UT(Object.assign({tagName:n,disabled:r},o));return x.jsx(a,Object.assign({},o,i,{ref:t}))});Z6.displayName="Button";const e8={[Br]:"show",[$o]:"show"},Kb=O.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},s=O.useCallback((l,c)=>{F6(l),r==null||r(l,c)},[r]);return x.jsx(H6,{ref:i,addEndListener:$6,...a,onEnter:s,childRef:t.ref,children:(l,c)=>O.cloneElement(t,{...c,className:pe("fade",e,t.props.className,e8[l],n[l])})})});Kb.displayName="Fade";const t8={"aria-label":d.string,onClick:d.func,variant:d.oneOf(["white"])},Qb=O.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>x.jsx("button",{ref:o,type:"button",className:pe("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));Qb.displayName="CloseButton";Qb.propTypes=t8;const gt=O.forwardRef(({as:e,bsPrefix:t,variant:n="primary",size:r,active:o=!1,disabled:i=!1,className:a,...s},l)=>{const c=Ge(t,"btn"),[u,{tagName:f}]=UT({tagName:e,disabled:i,...s}),p=f;return x.jsx(p,{...u,...s,ref:l,disabled:i,className:pe(a,c,o&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&i&&"disabled")})});gt.displayName="Button";function n8(e){const t=O.useRef(e);return t.current=e,t}function WT(e){const t=n8(e);O.useEffect(()=>()=>t.current(),[])}function r8(e,t){return O.Children.toArray(e).some(n=>O.isValidElement(n)&&n.type===t)}function o8({as:e,bsPrefix:t,className:n,...r}){t=Ge(t,"col");const o=FT(),i=zT(),a=[],s=[];return o.forEach(l=>{const c=r[l];delete r[l];let u,f,p;typeof c=="object"&&c!=null?{span:u,offset:f,order:p}=c:u=c;const m=l!==i?`-${l}`:"";u&&a.push(u===!0?`${t}${m}`:`${t}${m}-${u}`),p!=null&&s.push(`order${m}-${p}`),f!=null&&s.push(`offset${m}-${f}`)}),[{...r,className:pe(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}const ca=O.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:i,spans:a}]=o8(e);return x.jsx(o,{...r,ref:t,className:pe(n,!a.length&&i)})});ca.displayName="Col";const VT=O.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},i)=>{const a=Ge(e,"container"),s=typeof t=="string"?`-${t}`:"-fluid";return x.jsx(n,{ref:i,...o,className:pe(r,t?`${a}${s}`:a)})});VT.displayName="Container";var i8=Function.prototype.bind.call(Function.prototype.call,[].slice);function ki(e,t){return i8(e.querySelectorAll(t))}function r_(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const a8="data-rr-ui-";function s8(e){return`${a8}${e}`}const YT=O.createContext(Ea?window:void 0);YT.Provider;function Jb(){return O.useContext(YT)}const l8={type:d.string,tooltip:d.bool,as:d.elementType},mf=O.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...o},i)=>x.jsx(e,{...o,ref:i,className:pe(t,`${n}-${r?"tooltip":"feedback"}`)}));mf.displayName="Feedback";mf.propTypes=l8;const Sr=O.createContext({}),Zb=O.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:o=!1,isInvalid:i=!1,as:a="input",...s},l)=>{const{controlId:c}=O.useContext(Sr);return t=Ge(t,"form-check-input"),x.jsx(a,{...s,ref:l,type:r,id:e||c,className:pe(n,t,o&&"is-valid",i&&"is-invalid")})});Zb.displayName="FormCheckInput";const qu=O.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},o)=>{const{controlId:i}=O.useContext(Sr);return e=Ge(e,"form-check-label"),x.jsx("label",{...r,ref:o,htmlFor:n||i,className:pe(t,e)})});qu.displayName="FormCheckLabel";const GT=O.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:o=!1,disabled:i=!1,isValid:a=!1,isInvalid:s=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:u,className:f,style:p,title:m="",type:h="checkbox",label:b,children:w,as:v="input",...g},y)=>{t=Ge(t,"form-check"),n=Ge(n,"form-switch");const{controlId:_}=O.useContext(Sr),k=O.useMemo(()=>({controlId:e||_}),[_,e]),S=!w&&b!=null&&b!==!1||r8(w,qu),E=x.jsx(Zb,{...g,type:h==="switch"?"checkbox":h,ref:y,isValid:a,isInvalid:s,disabled:i,as:v});return x.jsx(Sr.Provider,{value:k,children:x.jsx("div",{style:p,className:pe(f,S&&t,r&&`${t}-inline`,o&&`${t}-reverse`,h==="switch"&&n),children:w||x.jsxs(x.Fragment,{children:[E,S&&x.jsx(qu,{title:m,children:b}),c&&x.jsx(mf,{type:u,tooltip:l,children:c})]})})})});GT.displayName="FormCheck";const Xu=Object.assign(GT,{Input:Zb,Label:qu}),qT=O.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:r,id:o,className:i,isValid:a=!1,isInvalid:s=!1,plaintext:l,readOnly:c,as:u="input",...f},p)=>{const{controlId:m}=O.useContext(Sr);return e=Ge(e,"form-control"),x.jsx(u,{...f,type:t,size:r,ref:p,readOnly:c,id:o||m,className:pe(i,l?`${e}-plaintext`:e,n&&`${e}-${n}`,t==="color"&&`${e}-color`,a&&"is-valid",s&&"is-invalid")})});qT.displayName="FormControl";const c8=Object.assign(qT,{Feedback:mf}),XT=O.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Ge(t,"form-floating"),x.jsx(n,{ref:o,className:pe(e,t),...r})));XT.displayName="FormFloating";const ev=O.forwardRef(({controlId:e,as:t="div",...n},r)=>{const o=O.useMemo(()=>({controlId:e}),[e]);return x.jsx(Sr.Provider,{value:o,children:x.jsx(t,{...n,ref:r})})});ev.displayName="FormGroup";const KT=O.forwardRef(({as:e="label",bsPrefix:t,column:n=!1,visuallyHidden:r=!1,className:o,htmlFor:i,...a},s)=>{const{controlId:l}=O.useContext(Sr);t=Ge(t,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const u=pe(o,t,r&&"visually-hidden",n&&c);return i=i||l,n?x.jsx(ca,{ref:s,as:"label",className:u,htmlFor:i,...a}):x.jsx(e,{ref:s,className:u,htmlFor:i,...a})});KT.displayName="FormLabel";const QT=O.forwardRef(({bsPrefix:e,className:t,id:n,...r},o)=>{const{controlId:i}=O.useContext(Sr);return e=Ge(e,"form-range"),x.jsx("input",{...r,type:"range",ref:o,className:pe(t,e),id:n||i})});QT.displayName="FormRange";const JT=O.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:r,isValid:o=!1,isInvalid:i=!1,id:a,...s},l)=>{const{controlId:c}=O.useContext(Sr);return e=Ge(e,"form-select"),x.jsx("select",{...s,size:n,ref:l,className:pe(r,e,t&&`${e}-${t}`,o&&"is-valid",i&&"is-invalid"),id:a||c})});JT.displayName="FormSelect";const ZT=O.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:r,...o},i)=>(e=Ge(e,"form-text"),x.jsx(n,{...o,ref:i,className:pe(t,e,r&&"text-muted")})));ZT.displayName="FormText";const e2=O.forwardRef((e,t)=>x.jsx(Xu,{...e,ref:t,type:"switch"}));e2.displayName="Switch";const u8=Object.assign(e2,{Input:Xu.Input,Label:Xu.Label}),t2=O.forwardRef(({bsPrefix:e,className:t,children:n,controlId:r,label:o,...i},a)=>(e=Ge(e,"form-floating"),x.jsxs(ev,{ref:a,className:pe(t,e),controlId:r,...i,children:[n,x.jsx("label",{htmlFor:r,children:o})]})));t2.displayName="FloatingLabel";const d8={_ref:d.any,validated:d.bool,as:d.elementType},tv=O.forwardRef(({className:e,validated:t,as:n="form",...r},o)=>x.jsx(n,{...r,ref:o,className:pe(e,t&&"was-validated")}));tv.displayName="Form";tv.propTypes=d8;const J=Object.assign(tv,{Group:ev,Control:c8,Floating:XT,Check:Xu,Switch:u8,Label:KT,Text:ZT,Range:QT,Select:JT,FloatingLabel:t2});var fc;function o_(e){if((!fc&&fc!==0||e)&&Ea){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),fc=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return fc}function Ap(e){e===void 0&&(e=hf());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function f8(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const i_=s8("modal-open");class nv{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return f8(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(qo(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(i_,""),qo(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(i_),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Ip=(e,t)=>Ea?e==null?(t||hf()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function p8(e,t){const n=Jb(),[r,o]=O.useState(()=>Ip(e,n==null?void 0:n.document));if(!r){const i=Ip(e);i&&o(i)}return O.useEffect(()=>{},[t,r]),O.useEffect(()=>{const i=Ip(e);i!==r&&o(i)},[e,r]),r}function h8({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){const i=O.useRef(null),a=O.useRef(t),s=Kn(n);O.useEffect(()=>{t?a.current=!0:s(i.current)},[t,s]);const l=Cl(i,e.ref),c=O.cloneElement(e,{ref:l});return t?c:o||!a.current&&r?null:c}function m8(e){return e.code==="Escape"||e.keyCode===27}function g8(){const e=O.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const b8=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function v8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function y8(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:i,onExited:a,addEndListener:s,children:l}=e,c=v8(e,b8);const{major:u}=g8(),f=u>=19?l.props.ref:l.ref,p=O.useRef(null),m=Cl(p,typeof l=="function"?null:f),h=S=>E=>{S&&p.current&&S(p.current,E)},b=O.useCallback(h(t),[t]),w=O.useCallback(h(n),[n]),v=O.useCallback(h(r),[r]),g=O.useCallback(h(o),[o]),y=O.useCallback(h(i),[i]),_=O.useCallback(h(a),[a]),k=O.useCallback(h(s),[s]);return Object.assign({},c,{nodeRef:p},t&&{onEnter:b},n&&{onEntering:w},r&&{onEntered:v},o&&{onExit:g},i&&{onExiting:y},a&&{onExited:_},s&&{addEndListener:k},{children:typeof l=="function"?(S,E)=>l(S,Object.assign({},E,{ref:m})):O.cloneElement(l,{ref:m})})}const x8=["component"];function w8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const _8=O.forwardRef((e,t)=>{let{component:n}=e,r=w8(e,x8);const o=y8(r);return x.jsx(n,Object.assign({ref:t},o))});function S8({in:e,onTransition:t}){const n=O.useRef(null),r=O.useRef(!0),o=Kn(t);return n_(()=>{if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{i=!0}},[e,o]),n_(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function k8({children:e,in:t,onExited:n,onEntered:r,transition:o}){const[i,a]=O.useState(!t);t&&i&&a(!1);const s=S8({in:!!t,onTransition:c=>{const u=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(a(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(u,f=>{throw c.in||a(!0),f})}}),l=Cl(s,e.ref);return i&&!t?null:O.cloneElement(e,{ref:l})}function a_(e,t,n){return e?x.jsx(_8,Object.assign({},n,{component:e})):t?x.jsx(k8,Object.assign({},n,{transition:t})):x.jsx(h8,Object.assign({},n))}const E8=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function O8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let Mp;function C8(e){return Mp||(Mp=new nv({ownerDocument:e==null?void 0:e.document})),Mp}function T8(e){const t=Jb(),n=e||C8(t),r=O.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:O.useCallback(o=>{r.current.dialog=o},[]),setBackdropRef:O.useCallback(o=>{r.current.backdrop=o},[])})}const n2=O.forwardRef((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:s=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:u,transition:f,runTransition:p,backdropTransition:m,runBackdropTransition:h,autoFocus:b=!0,enforceFocus:w=!0,restoreFocus:v=!0,restoreFocusOptions:g,renderDialog:y,renderBackdrop:_=Q=>x.jsx("div",Object.assign({},Q)),manager:k,container:S,onShow:E,onHide:C=()=>{},onExit:A,onExited:P,onExiting:L,onEnter:W,onEntering:Z,onEntered:se}=e,X=O8(e,E8);const ne=Jb(),ee=p8(S),M=T8(k),V=Y6(),q=G6(n),[oe,N]=O.useState(!n),F=O.useRef(null);O.useImperativeHandle(t,()=>M,[M]),Ea&&!q&&n&&(F.current=Ap(ne==null?void 0:ne.document)),n&&oe&&N(!1);const D=Kn(()=>{if(M.add(),fe.current=Gu(document,"keydown",B),_e.current=Gu(document,"focus",()=>setTimeout(T),!0),E&&E(),b){var Q,et;const ge=Ap((Q=(et=M.dialog)==null?void 0:et.ownerDocument)!=null?Q:ne==null?void 0:ne.document);M.dialog&&ge&&!r_(M.dialog,ge)&&(F.current=ge,M.dialog.focus())}}),z=Kn(()=>{if(M.remove(),fe.current==null||fe.current(),_e.current==null||_e.current(),v){var Q;(Q=F.current)==null||Q.focus==null||Q.focus(g),F.current=null}});O.useEffect(()=>{!n||!ee||D()},[n,ee,D]),O.useEffect(()=>{oe&&z()},[oe,z]),WT(()=>{z()});const T=Kn(()=>{if(!w||!V()||!M.isTopModal())return;const Q=Ap(ne==null?void 0:ne.document);M.dialog&&Q&&!r_(M.dialog,Q)&&M.dialog.focus()}),le=Kn(Q=>{Q.target===Q.currentTarget&&(c==null||c(Q),s===!0&&C())}),B=Kn(Q=>{l&&m8(Q)&&M.isTopModal()&&(u==null||u(Q),Q.defaultPrevented||C())}),_e=O.useRef(),fe=O.useRef(),me=(...Q)=>{N(!0),P==null||P(...Q)};if(!ee)return null;const re=Object.assign({role:r,ref:M.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},X,{style:i,className:o,tabIndex:-1});let Pe=y?y(re):x.jsx("div",Object.assign({},re,{children:O.cloneElement(a,{role:"document"})}));Pe=a_(f,p,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:A,onExiting:L,onExited:me,onEnter:W,onEntering:Z,onEntered:se,children:Pe});let Ce=null;return s&&(Ce=_({ref:M.setBackdropRef,onClick:le}),Ce=a_(m,h,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Ce})),x.jsx(x.Fragment,{children:Bi.createPortal(x.jsxs(x.Fragment,{children:[Ce,Pe]}),ee)})});n2.displayName="Modal";const R8=Object.assign(n2,{Manager:nv}),Ei={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class P8 extends nv{adjustAndStore(t,n,r){const o=n.style[t];n.dataset[t]=o,qo(n,{[t]:`${parseFloat(qo(n,t))+r}px`})}restore(t,n){const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],qo(n,{[t]:r}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(VL(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";ki(n,Ei.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),ki(n,Ei.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),ki(n,Ei.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();YL(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";ki(n,Ei.FIXED_CONTENT).forEach(i=>this.restore(r,i)),ki(n,Ei.STICKY_CONTENT).forEach(i=>this.restore(o,i)),ki(n,Ei.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))}}let jp;function A8(e){return jp||(jp=new P8(e)),jp}const r2=O.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Ge(t,"modal-body"),x.jsx(n,{ref:o,className:pe(e,t),...r})));r2.displayName="ModalBody";const o2=O.createContext({onHide(){}}),rv=O.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:r,size:o,fullscreen:i,children:a,scrollable:s,...l},c)=>{e=Ge(e,"modal");const u=`${e}-dialog`,f=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return x.jsx("div",{...l,ref:c,className:pe(u,t,o&&`${e}-${o}`,r&&`${u}-centered`,s&&`${u}-scrollable`,i&&f),children:x.jsx("div",{className:pe(`${e}-content`,n),children:a})})});rv.displayName="ModalDialog";const i2=O.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=Ge(t,"modal-footer"),x.jsx(n,{ref:o,className:pe(e,t),...r})));i2.displayName="ModalFooter";const I8=O.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{const s=O.useContext(o2),l=Kn(()=>{s==null||s.onHide(),r==null||r()});return x.jsxs("div",{ref:a,...i,children:[o,n&&x.jsx(Qb,{"aria-label":e,variant:t,onClick:l})]})}),a2=O.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},i)=>(e=Ge(e,"modal-header"),x.jsx(I8,{ref:i,...o,className:pe(t,e),closeLabel:n,closeButton:r})));a2.displayName="ModalHeader";const M8=W6("h4"),s2=O.forwardRef(({className:e,bsPrefix:t,as:n=M8,...r},o)=>(t=Ge(t,"modal-title"),x.jsx(n,{ref:o,className:pe(e,t),...r})));s2.displayName="ModalTitle";function j8(e){return x.jsx(Kb,{...e,timeout:null})}function L8(e){return x.jsx(Kb,{...e,timeout:null})}const l2=O.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:o,children:i,dialogAs:a=rv,"data-bs-theme":s,"aria-labelledby":l,"aria-describedby":c,"aria-label":u,show:f=!1,animation:p=!0,backdrop:m=!0,keyboard:h=!0,onEscapeKeyDown:b,onShow:w,onHide:v,container:g,autoFocus:y=!0,enforceFocus:_=!0,restoreFocus:k=!0,restoreFocusOptions:S,onEntered:E,onExit:C,onExiting:A,onEnter:P,onEntering:L,onExited:W,backdropClassName:Z,manager:se,...X},ne)=>{const[ee,M]=O.useState({}),[V,q]=O.useState(!1),oe=O.useRef(!1),N=O.useRef(!1),F=O.useRef(null),[D,z]=V6(),T=Cl(ne,z),le=Kn(v),B=C6();e=Ge(e,"modal");const _e=O.useMemo(()=>({onHide:le}),[le]);function fe(){return se||A8({isRTL:B})}function me(ve){if(!Ea)return;const $n=fe().getScrollbarWidth()>0,xn=ve.scrollHeight>hf(ve).documentElement.clientHeight;M({paddingRight:$n&&!xn?o_():void 0,paddingLeft:!$n&&xn?o_():void 0})}const re=Kn(()=>{D&&me(D.dialog)});WT(()=>{Nm(window,"resize",re),F.current==null||F.current()});const Pe=()=>{oe.current=!0},Ce=ve=>{oe.current&&D&&ve.target===D.dialog&&(N.current=!0),oe.current=!1},Q=()=>{q(!0),F.current=HT(D.dialog,()=>{q(!1)})},et=ve=>{ve.target===ve.currentTarget&&Q()},ge=ve=>{if(m==="static"){et(ve);return}if(N.current||ve.target!==ve.currentTarget){N.current=!1;return}v==null||v()},it=ve=>{h?b==null||b(ve):(ve.preventDefault(),m==="static"&&Q())},ko=(ve,$n)=>{ve&&me(ve),P==null||P(ve,$n)},at=ve=>{F.current==null||F.current(),C==null||C(ve)},vi=(ve,$n)=>{L==null||L(ve,$n),BT(window,"resize",re)},Eo=ve=>{ve&&(ve.style.display=""),W==null||W(ve),Nm(window,"resize",re)},Ut=O.useCallback(ve=>x.jsx("div",{...ve,className:pe(`${e}-backdrop`,Z,!p&&"show")}),[p,Z,e]),ie={...n,...ee};ie.display="block";const ze=ve=>x.jsx("div",{role:"dialog",...ve,style:ie,className:pe(t,e,V&&`${e}-static`,!p&&"show"),onClick:m?ge:void 0,onMouseUp:Ce,"data-bs-theme":s,"aria-label":u,"aria-labelledby":l,"aria-describedby":c,children:x.jsx(a,{...X,onMouseDown:Pe,className:r,contentClassName:o,children:i})});return x.jsx(o2.Provider,{value:_e,children:x.jsx(R8,{show:f,ref:T,backdrop:m,container:g,keyboard:!0,autoFocus:y,enforceFocus:_,restoreFocus:k,restoreFocusOptions:S,onEscapeKeyDown:it,onShow:w,onHide:v,onEnter:ko,onEntering:vi,onEntered:E,onExit:at,onExiting:A,onExited:Eo,manager:fe(),transition:p?j8:void 0,backdropTransition:p?L8:void 0,renderBackdrop:Ut,renderDialog:ze})})});l2.displayName="Modal";const dn=Object.assign(l2,{Body:r2,Header:a2,Title:s2,Footer:i2,Dialog:rv,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),ov=O.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const i=Ge(e,"row"),a=FT(),s=zT(),l=`${i}-cols`,c=[];return a.forEach(u=>{const f=r[u];delete r[u];let p;f!=null&&typeof f=="object"?{cols:p}=f:p=f;const m=u!==s?`-${u}`:"";p!=null&&c.push(`${l}${m}-${p}`)}),x.jsx(n,{ref:o,...r,className:pe(t,i,...c)})});ov.displayName="Row";const $m=O.forwardRef(({bsPrefix:e,variant:t,animation:n="border",size:r,as:o="div",className:i,...a},s)=>{e=Ge(e,"spinner");const l=`${e}-${n}`;return x.jsx(o,{ref:s,...a,className:pe(i,l,r&&`${l}-${r}`,t&&`text-${t}`)})});$m.displayName="Spinner";const gf=O.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:o,hover:i,size:a,variant:s,responsive:l,...c},u)=>{const f=Ge(e,"table"),p=pe(t,f,s&&`${f}-${s}`,a&&`${f}-${a}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,o&&`${f}-borderless`,i&&`${f}-hover`),m=x.jsx("table",{...c,className:p,ref:u});if(l){let h=`${f}-responsive`;return typeof l=="string"&&(h=`${h}-${l}`),x.jsx("div",{className:h,children:m})}return m});var D8=["color","size","title","className"];function Fm(){return Fm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fm.apply(this,arguments)}function N8(e,t){if(e==null)return{};var n=$8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var iv=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=N8(e,D8);return U.createElement("svg",Fm({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-box-fill",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{fillRule:"evenodd",d:"M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"}))});iv.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};iv.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var F8=["color","size","title","className"];function zm(){return zm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zm.apply(this,arguments)}function z8(e,t){if(e==null)return{};var n=B8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function B8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var av=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=z8(e,F8);return U.createElement("svg",zm({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-boxes",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{d:"M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"}))});av.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};av.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var H8=["color","size","title","className"];function Bm(){return Bm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bm.apply(this,arguments)}function U8(e,t){if(e==null)return{};var n=W8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function W8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var sv=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=U8(e,H8);return U.createElement("svg",Bm({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-currency-dollar",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{d:"M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"}))});sv.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};sv.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var V8=["color","size","title","className"];function Hm(){return Hm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hm.apply(this,arguments)}function Y8(e,t){if(e==null)return{};var n=G8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function G8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var bf=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=Y8(e,V8);return U.createElement("svg",Hm({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-eye-slash",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{d:"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"}),U.createElement("path",{d:"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"}),U.createElement("path",{d:"M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"}))});bf.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};bf.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var q8=["color","size","title","className"];function Um(){return Um=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Um.apply(this,arguments)}function X8(e,t){if(e==null)return{};var n=K8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function K8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var vf=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=X8(e,q8);return U.createElement("svg",Um({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-eye",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"}),U.createElement("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"}))});vf.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};vf.defaultProps={color:"currentColor",size:"1em",title:null,className:""};var Q8=["color","size","title","className"];function Wm(){return Wm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wm.apply(this,arguments)}function J8(e,t){if(e==null)return{};var n=Z8(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Z8(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var lv=O.forwardRef(function(e,t){var n=e.color,r=e.size,o=e.title,i=e.className,a=J8(e,Q8);return U.createElement("svg",Wm({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n,className:["bi","bi-x-square",i].filter(Boolean).join(" ")},a),o?U.createElement("title",null,o):null,U.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),U.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"}))});lv.propTypes={color:d.string,size:d.oneOfType([d.string,d.number]),title:d.string,className:d.string};lv.defaultProps={color:"currentColor",size:"1em",title:null,className:""};function e7(){const[e,t]=O.useState({username:"",password:""}),[n,r]=O.useState(!1);ae.defaults.withCredentials=!0;const o=Cd(),i=a=>{a.preventDefault(),ae.post(`${la.hostname}/login`,e).then(s=>{s.data.Status==="Success"?(o("/dashboard"),console.log("success")):alert("Error")}).catch(s=>console.log(s))};return x.jsx(VT,{fluid:!0,className:"vh-100",children:x.jsxs(ov,{className:"h-100 m-0",children:[x.jsx(ca,{md:7,className:"d-flex justify-content-center align-items-center p-0",children:x.jsx("img",{src:"/mrbillylogorevamp",alt:"Logo",className:"img-fluid w-80 h-40"})}),x.jsx(ca,{md:5,className:"d-flex justify-content-center align-items-center p-0",children:x.jsx("div",{className:"login-form-container",children:x.jsxs(J,{onSubmit:i,className:"w-100 p-4",children:[x.jsxs(J.Group,{controlId:"formBasicUsername",className:"mb-3",children:[x.jsx(J.Label,{children:x.jsx("strong",{children:"Username"})}),x.jsx(J.Control,{type:"text",placeholder:"Enter Username",value:e.username,onChange:a=>t({...e,username:a.target.value}),autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"formBasicPassword",className:"mb-3",children:[x.jsx(J.Label,{children:x.jsx("strong",{children:"Password"})}),x.jsxs("div",{className:"input-group password-input",children:[x.jsx(J.Control,{type:n?"text":"password",placeholder:"Enter Password",value:e.password,onChange:a=>t({...e,password:a.target.value}),autoComplete:"off"}),x.jsx(gt,{variant:"outline-danger",className:"input-group-text",onClick:()=>r(!n),children:n?x.jsx(bf,{size:20}):x.jsx(vf,{size:20})})]})]}),x.jsx(gt,{variant:"danger",type:"submit",className:"w-100 rounded-0",children:"Log in"})]})})})]})})}const Wt=`${la.hostname}/items`,Dt={getAllItems:async()=>await ae.get(Wt),getAllWithDeleted:async()=>await ae.get(`${Wt}/getAllWithDeleted`),getFromBranch:async e=>await ae.post(`${Wt}/getFromBranch`,{branch_id:e}),createItem:async e=>await ae.post(`${Wt}/create`,e),updateItem:async e=>await ae.post(`${Wt}/update`,e),deleteItem:async e=>await ae.post(`${Wt}/delete`,{item_id:e}),getSizes:async()=>await ae.get(`${Wt}/sizes`),getTotalProducts:async(e,t)=>await ae.post(`${Wt}/totalProductsInBranch`,{branch_id:e,isMasterAdmin:t}),getTotalItemStocks:async(e,t)=>await ae.post(`${Wt}/totalItemStocksInBranch`,{branch_id:e,isMasterAdmin:t}),getTotalOutOfStockInBranch:async(e,t)=>await ae.post(`${Wt}/totalOutOfStockInBranch`,{branch_id:e,isMasterAdmin:t}),getTotalInventoryCost:async(e,t)=>await ae.post(`${Wt}/totalInventoryCostInBranch`,{branch_id:e,isMasterAdmin:t}),getTopItems:async(e,t)=>await ae.post(`${Wt}/topItems`,{branch_id:e,isMasterAdmin:t}),getItemsPerCategory:async(e,t)=>await ae.post(`${Wt}/itemsPerCategory`,{branch_id:e,isMasterAdmin:t})};var s_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},t7=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[n++],a=e[n++],s=e[n++],l=((o&7)<<18|(i&63)<<12|(a&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|a&63)}}return t.join("")},u2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const i=e[o],a=o+1<e.length,s=a?e[o+1]:0,l=o+2<e.length,c=l?e[o+2]:0,u=i>>2,f=(i&3)<<4|s>>4;let p=(s&15)<<2|c>>6,m=c&63;l||(m=64,a||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c2(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):t7(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const i=n[e.charAt(o++)],s=o<e.length?n[e.charAt(o)]:0;++o;const c=o<e.length?n[e.charAt(o)]:64;++o;const f=o<e.length?n[e.charAt(o)]:64;if(++o,i==null||s==null||c==null||f==null)throw new n7;const p=i<<2|s>>4;if(r.push(p),c!==64){const m=s<<4&240|c>>2;if(r.push(m),f!==64){const h=c<<6&192|f;r.push(h)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class n7 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r7=function(e){const t=c2(e);return u2.encodeByteArray(t,!0)},Ku=function(e){return r7(e).replace(/\./g,"")},o7=function(e){try{return u2.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a7=()=>i7().__FIREBASE_DEFAULTS__,s7=()=>{if(typeof process>"u"||typeof s_>"u")return;const e=s_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},l7=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&o7(e[1]);return t&&JSON.parse(t)},d2=()=>{try{return a7()||s7()||l7()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},c7=e=>{var t,n;return(n=(t=d2())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},u7=e=>{const t=c7(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},f2=()=>{var e;return(e=d2())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d7{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f7(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ku(JSON.stringify(n)),Ku(JSON.stringify(a)),""].join(".")}function p7(){try{return typeof indexedDB=="object"}catch{return!1}}function h7(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7="FirebaseError";class Oa extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=m7,Object.setPrototypeOf(this,Oa.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,p2.prototype.create)}}class p2{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,i=this.errors[t],a=i?g7(i,r):"Error",s=`${this.serviceName}: ${a} (${o}).`;return new Oa(o,s,r)}}function g7(e,t){return e.replace(b7,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const b7=/\{\$([^}]+)}/g;function Vm(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const i=e[o],a=t[o];if(l_(i)&&l_(a)){if(!Vm(i,a))return!1}else if(i!==a)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function l_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e){return e&&e._delegate?e._delegate:e}class Qs{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v7{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new d7;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(x7(t))try{this.getOrInitializeService({instanceIdentifier:Lo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(t=Lo){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Lo){return this.instances.has(t)}getOptions(t=Lo){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);r===s&&a.resolve(o)}return o}onInit(t,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(o,i);const a=this.instances.get(o);return a&&t(a,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y7(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Lo){return this.component?this.component.multipleInstances?t:Lo:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y7(e){return e===Lo?void 0:e}function x7(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w7{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new v7(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ie||(Ie={}));const _7={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},S7=Ie.INFO,k7={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},E7=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),o=k7[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class O7{constructor(t){this.name=t,this._logLevel=S7,this._logHandler=E7,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_7[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...t),this._logHandler(this,Ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...t),this._logHandler(this,Ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...t),this._logHandler(this,Ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...t),this._logHandler(this,Ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...t),this._logHandler(this,Ie.ERROR,...t)}}const C7=(e,t)=>t.some(n=>e instanceof n);let c_,u_;function T7(){return c_||(c_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R7(){return u_||(u_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h2=new WeakMap,Ym=new WeakMap,m2=new WeakMap,Lp=new WeakMap,cv=new WeakMap;function P7(e){const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(co(e.result)),o()},a=()=>{r(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&h2.set(n,e)}).catch(()=>{}),cv.set(t,e),t}function A7(e){if(Ym.has(e))return;const t=new Promise((n,r)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),o()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ym.set(e,t)}let Gm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ym.get(e);if(t==="objectStoreNames")return e.objectStoreNames||m2.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return co(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function I7(e){Gm=e(Gm)}function M7(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Dp(this),t,...n);return m2.set(r,t.sort?t.sort():[t]),co(r)}:R7().includes(e)?function(...t){return e.apply(Dp(this),t),co(h2.get(this))}:function(...t){return co(e.apply(Dp(this),t))}}function j7(e){return typeof e=="function"?M7(e):(e instanceof IDBTransaction&&A7(e),C7(e,T7())?new Proxy(e,Gm):e)}function co(e){if(e instanceof IDBRequest)return P7(e);if(Lp.has(e))return Lp.get(e);const t=j7(e);return t!==e&&(Lp.set(e,t),cv.set(t,e)),t}const Dp=e=>cv.get(e);function L7(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=co(a);return r&&a.addEventListener("upgradeneeded",l=>{r(co(a.result),l.oldVersion,l.newVersion,co(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",c=>o(c.oldVersion,c.newVersion,c))}).catch(()=>{}),s}const D7=["get","getKey","getAll","getAllKeys","count"],N7=["put","add","delete","clear"],Np=new Map;function d_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Np.get(t))return Np.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=N7.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||D7.includes(n)))return;const i=async function(a,...s){const l=this.transaction(a,o?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(s.shift())),(await Promise.all([c[n](...s),o&&l.done]))[0]};return Np.set(t,i),i}I7(e=>({...e,get:(t,n,r)=>d_(t,n)||e.get(t,n,r),has:(t,n)=>!!d_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $7{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F7(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function F7(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qm="@firebase/app",f_="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new O7("@firebase/app"),z7="@firebase/app-compat",B7="@firebase/analytics-compat",H7="@firebase/analytics",U7="@firebase/app-check-compat",W7="@firebase/app-check",V7="@firebase/auth",Y7="@firebase/auth-compat",G7="@firebase/database",q7="@firebase/database-compat",X7="@firebase/functions",K7="@firebase/functions-compat",Q7="@firebase/installations",J7="@firebase/installations-compat",Z7="@firebase/messaging",eH="@firebase/messaging-compat",tH="@firebase/performance",nH="@firebase/performance-compat",rH="@firebase/remote-config",oH="@firebase/remote-config-compat",iH="@firebase/storage",aH="@firebase/storage-compat",sH="@firebase/firestore",lH="@firebase/vertexai-preview",cH="@firebase/firestore-compat",uH="firebase",dH="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="[DEFAULT]",fH={[qm]:"fire-core",[z7]:"fire-core-compat",[H7]:"fire-analytics",[B7]:"fire-analytics-compat",[W7]:"fire-app-check",[U7]:"fire-app-check-compat",[V7]:"fire-auth",[Y7]:"fire-auth-compat",[G7]:"fire-rtdb",[q7]:"fire-rtdb-compat",[X7]:"fire-fn",[K7]:"fire-fn-compat",[Q7]:"fire-iid",[J7]:"fire-iid-compat",[Z7]:"fire-fcm",[eH]:"fire-fcm-compat",[tH]:"fire-perf",[nH]:"fire-perf-compat",[rH]:"fire-rc",[oH]:"fire-rc-compat",[iH]:"fire-gcs",[aH]:"fire-gcs-compat",[sH]:"fire-fst",[cH]:"fire-fst-compat",[lH]:"fire-vertex","fire-js":"fire-js",[uH]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map,pH=new Map,Km=new Map;function p_(e,t){try{e.container.addComponent(t)}catch(n){ai.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ju(e){const t=e.name;if(Km.has(t))return ai.debug(`There were multiple attempts to register component ${t}.`),!1;Km.set(t,e);for(const n of Qu.values())p_(n,e);for(const n of pH.values())p_(n,e);return!0}function hH(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mH={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},uo=new p2("app","Firebase",mH);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gH{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw uo.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bH=dH;function g2(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xm,automaticDataCollectionEnabled:!1},t),o=r.name;if(typeof o!="string"||!o)throw uo.create("bad-app-name",{appName:String(o)});if(n||(n=f2()),!n)throw uo.create("no-options");const i=Qu.get(o);if(i){if(Vm(n,i.options)&&Vm(r,i.config))return i;throw uo.create("duplicate-app",{appName:o})}const a=new w7(o);for(const l of Km.values())a.addComponent(l);const s=new gH(n,r,a);return Qu.set(o,s),s}function vH(e=Xm){const t=Qu.get(e);if(!t&&e===Xm&&f2())return g2();if(!t)throw uo.create("no-app",{appName:e});return t}function Xi(e,t,n){var r;let o=(r=fH[e])!==null&&r!==void 0?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${o}" with version "${t}":`];i&&s.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ai.warn(s.join(" "));return}Ju(new Qs(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yH="firebase-heartbeat-database",xH=1,Js="firebase-heartbeat-store";let $p=null;function b2(){return $p||($p=L7(yH,xH,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Js)}catch(n){console.warn(n)}}}}).catch(e=>{throw uo.create("idb-open",{originalErrorMessage:e.message})})),$p}async function wH(e){try{const n=(await b2()).transaction(Js),r=await n.objectStore(Js).get(v2(e));return await n.done,r}catch(t){if(t instanceof Oa)ai.warn(t.message);else{const n=uo.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ai.warn(n.message)}}}async function h_(e,t){try{const r=(await b2()).transaction(Js,"readwrite");await r.objectStore(Js).put(t,v2(e)),await r.done}catch(n){if(n instanceof Oa)ai.warn(n.message);else{const r=uo.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ai.warn(r.message)}}}function v2(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _H=1024,SH=30*24*60*60*1e3;class kH{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OH(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=m_();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const s=new Date(a.date).valueOf();return Date.now()-s<=SH}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=m_(),{heartbeatsToSend:r,unsentEntries:o}=EH(this._heartbeatsCache.heartbeats),i=Ku(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function m_(){return new Date().toISOString().substring(0,10)}function EH(e,t=_H){const n=[];let r=e.slice();for(const o of e){const i=n.find(a=>a.agent===o.agent);if(i){if(i.dates.push(o.date),g_(n)>t){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),g_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OH{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p7()?h7().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wH(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function g_(e){return Ku(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CH(e){Ju(new Qs("platform-logger",t=>new $7(t),"PRIVATE")),Ju(new Qs("heartbeat",t=>new kH(t),"PRIVATE")),Xi(qm,f_,e),Xi(qm,f_,"esm2017"),Xi("fire-js","")}CH("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="firebasestorage.googleapis.com",x2="storageBucket",TH=2*60*1e3,RH=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Oa{constructor(t,n,r=0){super(Fp(t),`Firebase Storage: ${n} (${Fp(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ze.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Fp(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Je;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Je||(Je={}));function Fp(e){return"storage/"+e}function uv(){const e="An unknown error occurred, please check the error payload for server response.";return new Ze(Je.UNKNOWN,e)}function PH(e){return new Ze(Je.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function AH(e){return new Ze(Je.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IH(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ze(Je.UNAUTHENTICATED,e)}function MH(){return new Ze(Je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jH(e){return new Ze(Je.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function LH(){return new Ze(Je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DH(){return new Ze(Je.CANCELED,"User canceled the upload/download.")}function NH(e){return new Ze(Je.INVALID_URL,"Invalid URL '"+e+"'.")}function $H(e){return new Ze(Je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function FH(){return new Ze(Je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+x2+"' property when initializing the app?")}function zH(){return new Ze(Je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BH(){return new Ze(Je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HH(e){return new Ze(Je.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qm(e){return new Ze(Je.INVALID_ARGUMENT,e)}function w2(){return new Ze(Je.APP_DELETED,"The Firebase app was deleted.")}function UH(e){return new Ze(Je.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ws(e,t){return new Ze(Je.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Ba(e){throw new Ze(Je.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Kt.makeFromUrl(t,n)}catch{return new Kt(t,"")}if(r.path==="")return r;throw $H(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function i(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const a="(/(.*))?$",s=new RegExp("^gs://"+o+a,"i"),l={bucket:1,path:3};function c(_){_.path_=decodeURIComponent(_.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${u}/b/${o}/o${p}`,"i"),h={bucket:1,path:3},b=n===y2?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${b}/${o}/${w}`,"i"),y=[{regex:s,indices:l,postModify:i},{regex:m,indices:h,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let _=0;_<y.length;_++){const k=y[_],S=k.regex.exec(t);if(S){const E=S[k.indices.bucket];let C=S[k.indices.path];C||(C=""),r=new Kt(E,C),k.postModify(r);break}}if(r==null)throw NH(t);return r}}class WH{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VH(e,t,n){let r=1,o=null,i=null,a=!1,s=0;function l(){return s===2}let c=!1;function u(...w){c||(c=!0,t.apply(null,w))}function f(w){o=setTimeout(()=>{o=null,e(m,l())},w)}function p(){i&&clearTimeout(i)}function m(w,...v){if(c){p();return}if(w){p(),u.call(null,w,...v);return}if(l()||a){p(),u.call(null,w,...v);return}r<64&&(r*=2);let y;s===1?(s=2,y=0):y=(r+Math.random())*1e3,f(y)}let h=!1;function b(w){h||(h=!0,p(),!c&&(o!==null?(w||(s=2),clearTimeout(o),f(0)):w||(s=1)))}return f(0),i=setTimeout(()=>{a=!0,b(!0)},n),b}function YH(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GH(e){return e!==void 0}function qH(e){return typeof e=="object"&&!Array.isArray(e)}function dv(e){return typeof e=="string"||e instanceof String}function b_(e){return fv()&&e instanceof Blob}function fv(){return typeof Blob<"u"}function v_(e,t,n,r){if(r<t)throw Qm(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Qm(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function _2(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xo;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Xo||(Xo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XH(e,t){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||o||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KH{constructor(t,n,r,o,i,a,s,l,c,u,f,p=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,h)=>{this.resolve_=m,this.reject_=h,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new pc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=s=>{const l=s.loaded,c=s.lengthComputable?s.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const s=i.getErrorCode()===Xo.NO_ERROR,l=i.getStatus();if(!s||XH(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Xo.ABORT;r(!1,new pc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new pc(c,i))})},n=(r,o)=>{const i=this.resolve_,a=this.reject_,s=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(s,s.getResponse());GH(l)?i(l):i()}catch(l){a(l)}else if(s!==null){const l=uv();l.serverResponse=s.getErrorText(),this.errorCallback_?a(this.errorCallback_(s,l)):a(l)}else if(o.canceled){const l=this.appDelete_?w2():DH();a(l)}else{const l=LH();a(l)}};this.canceled_?n(!1,new pc(!1,null,!0)):this.backoffId_=VH(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&YH(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pc{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function QH(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function JH(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ZH(e,t){t&&(e["X-Firebase-GMPID"]=t)}function eU(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function tU(e,t,n,r,o,i,a=!0){const s=_2(e.urlParams),l=e.url+s,c=Object.assign({},e.headers);return ZH(c,t),QH(c,n),JH(c,i),eU(c,r),new KH(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rU(...e){const t=nU();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(fv())return new Blob(e);throw new Ze(Je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oU(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(e){if(typeof atob>"u")throw HH("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zp{constructor(t,n){this.data=t,this.contentType=n||null}}function aU(e,t){switch(e){case Jn.RAW:return new zp(S2(t));case Jn.BASE64:case Jn.BASE64URL:return new zp(k2(e,t));case Jn.DATA_URL:return new zp(lU(t),cU(t))}throw uv()}function S2(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=r,a=e.charCodeAt(++n);r=65536|(i&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function sU(e){let t;try{t=decodeURIComponent(e)}catch{throw ws(Jn.DATA_URL,"Malformed data URL.")}return S2(t)}function k2(e,t){switch(e){case Jn.BASE64:{const o=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(o||i)throw ws(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Jn.BASE64URL:{const o=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(o||i)throw ws(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iU(t)}catch(o){throw o.message.includes("polyfill")?o:ws(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class E2{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw ws(Jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function lU(e){const t=new E2(e);return t.base64?k2(Jn.BASE64,t.rest):sU(t.rest)}function cU(e){return new E2(e).contentType}function uU(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,n){let r=0,o="";b_(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,n){if(b_(this.data_)){const r=this.data_,o=oU(r,t,n);return o===null?null:new Wr(o)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Wr(r,!0)}}static getBlob(...t){if(fv()){const n=t.map(r=>r instanceof Wr?r.data_:r);return new Wr(rU.apply(null,n))}else{const n=t.map(a=>dv(a)?aU(Jn.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const o=new Uint8Array(r);let i=0;return n.forEach(a=>{for(let s=0;s<a.length;s++)o[i++]=a[s]}),new Wr(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(e){let t;try{t=JSON.parse(e)}catch{return null}return qH(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function fU(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function C2(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(e,t){return t}class Ct{constructor(t,n,r,o){this.server=t,this.local=n||t,this.writable=!!r,this.xform=o||pU}}let hc=null;function hU(e){return!dv(e)||e.length<2?e:C2(e)}function T2(){if(hc)return hc;const e=[];e.push(new Ct("bucket")),e.push(new Ct("generation")),e.push(new Ct("metageneration")),e.push(new Ct("name","fullPath",!0));function t(i,a){return hU(a)}const n=new Ct("name");n.xform=t,e.push(n);function r(i,a){return a!==void 0?Number(a):a}const o=new Ct("size");return o.xform=r,e.push(o),e.push(new Ct("timeCreated")),e.push(new Ct("updated")),e.push(new Ct("md5Hash",null,!0)),e.push(new Ct("cacheControl",null,!0)),e.push(new Ct("contentDisposition",null,!0)),e.push(new Ct("contentEncoding",null,!0)),e.push(new Ct("contentLanguage",null,!0)),e.push(new Ct("contentType",null,!0)),e.push(new Ct("metadata","customMetadata",!0)),hc=e,hc}function mU(e,t){function n(){const r=e.bucket,o=e.fullPath,i=new Kt(r,o);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function gU(e,t,n){const r={};r.type="file";const o=n.length;for(let i=0;i<o;i++){const a=n[i];r[a.local]=a.xform(r,t[a.server])}return mU(r,e),r}function R2(e,t,n){const r=O2(t);return r===null?null:gU(e,r,n)}function bU(e,t,n,r){const o=O2(t);if(o===null||!dv(o.downloadTokens))return null;const i=o.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(c=>{const u=e.bucket,f=e.fullPath,p="/b/"+a(u)+"/o/"+a(f),m=pv(p,n,r),h=_2({alt:"media",token:c});return m+h})[0]}function vU(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const i=t[o];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class P2{constructor(t,n,r,o){this.url=t,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(e){if(!e)throw uv()}function yU(e,t){function n(r,o){const i=R2(e,o,t);return A2(i!==null),i}return n}function xU(e,t){function n(r,o){const i=R2(e,o,t);return A2(i!==null),bU(i,o,e.host,e._protocol)}return n}function I2(e){function t(n,r){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=MH():o=IH():n.getStatus()===402?o=AH(e.bucket):n.getStatus()===403?o=jH(e.path):o=r,o.status=n.getStatus(),o.serverResponse=r.serverResponse,o}return t}function wU(e){const t=I2(e);function n(r,o){let i=t(r,o);return r.getStatus()===404&&(i=PH(e.path)),i.serverResponse=o.serverResponse,i}return n}function _U(e,t,n){const r=t.fullServerUrl(),o=pv(r,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,s=new P2(o,i,xU(e,n),a);return s.errorHandler=wU(t),s}function SU(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function kU(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=SU(null,t)),r}function EU(e,t,n,r,o){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){let y="";for(let _=0;_<2;_++)y=y+Math.random().toString().slice(2);return y}const l=s();a["Content-Type"]="multipart/related; boundary="+l;const c=kU(t,r,o),u=vU(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+l+"--",m=Wr.getBlob(f,r,p);if(m===null)throw zH();const h={name:c.fullPath},b=pv(i,e.host,e._protocol),w="POST",v=e.maxUploadRetryTime,g=new P2(b,w,yU(e,n),v);return g.urlParams=h,g.headers=a,g.body=m.uploadData(),g.errorHandler=I2(t),g}class OU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xo.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xo.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xo.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,o){if(this.sent_)throw Ba("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),o!==void 0)for(const i in o)o.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,o[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ba("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ba("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ba("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ba("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class CU extends OU{initXhr(){this.xhr_.responseType="text"}}function M2(){return new CU}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,n){this._service=t,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new si(t,n)}get root(){const t=new Kt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return C2(this._location.path)}get storage(){return this._service}get parent(){const t=dU(this._location.path);if(t===null)return null;const n=new Kt(this._location.bucket,t);return new si(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw UH(t)}}function TU(e,t,n){e._throwIfRoot("uploadBytes");const r=EU(e.storage,e._location,T2(),new Wr(t,!0),n);return e.storage.makeRequestWithTokens(r,M2).then(o=>({metadata:o,ref:e}))}function RU(e){e._throwIfRoot("getDownloadURL");const t=_U(e.storage,e._location,T2());return e.storage.makeRequestWithTokens(t,M2).then(n=>{if(n===null)throw BH();return n})}function PU(e,t){const n=fU(e._location.path,t),r=new Kt(e._location.bucket,n);return new si(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(e){return/^[A-Za-z]+:\/\//.test(e)}function IU(e,t){return new si(e,t)}function j2(e,t){if(e instanceof hv){const n=e;if(n._bucket==null)throw FH();const r=new si(n,n._bucket);return t!=null?j2(r,t):r}else return t!==void 0?PU(e,t):e}function MU(e,t){if(t&&AU(t)){if(e instanceof hv)return IU(e,t);throw Qm("To use ref(service, url), the first argument must be a Storage instance.")}else return j2(e,t)}function y_(e,t){const n=t==null?void 0:t[x2];return n==null?null:Kt.makeFromBucketSpec(n,e)}function jU(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken=typeof o=="string"?o:f7(o,e.app.options.projectId))}class hv{constructor(t,n,r,o,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=y2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TH,this._maxUploadRetryTime=RH,this._requests=new Set,o!=null?this._bucket=Kt.makeFromBucketSpec(o,this._host):this._bucket=y_(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,t):this._bucket=y_(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){v_("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){v_("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new si(this,t)}_makeRequest(t,n,r,o,i=!0){if(this._deleted)return new WH(w2());{const a=tU(t,this._appId,r,o,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const x_="@firebase/storage",w_="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="storage";function Jm(e,t,n){return e=yf(e),TU(e,t,n)}function Zm(e){return e=yf(e),RU(e)}function eg(e,t){return e=yf(e),MU(e,t)}function LU(e=vH(),t){e=yf(e);const r=hH(e,L2).getImmediate({identifier:t}),o=u7("storage");return o&&DU(r,...o),r}function DU(e,t,n,r={}){jU(e,t,n,r)}function NU(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new hv(n,r,o,t,bH)}function $U(){Ju(new Qs(L2,NU,"PUBLIC").setMultipleInstances(!0)),Xi(x_,w_,""),Xi(x_,w_,"esm2017")}$U();var FU="firebase",zU="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xi(FU,zU,"app");var Oi={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const BU={apiKey:Oi.VITE_FIREBASE_API_KEY,authDomain:Oi.VITE_FIREBASE_AUTH_DOMAIN,projectId:Oi.VITE_FIREBASE_PROJECT_ID,storageBucket:Oi.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:Oi.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:Oi.VITE_FIREBASE_APP_ID},HU=g2(BU),tg=LU(HU),UU=({showModal:e,handleCloseModal:t,isUpdateMode:n,selectedItem:r,fetchItems:o,branch_id:i})=>{const[a,s]=O.useState([]),[l,c]=O.useState([]),[u,f]=O.useState(null),[p,m]=O.useState({item_name:"",description:"",category:"",quantity:"",price:"",item_image:""});O.useEffect(()=>{(async()=>{try{const y=await Dt.getSizes();s(y.data)}catch(y){console.error("Error fetching sizes:",y)}})()},[]),O.useEffect(()=>{n&&r?(m({item_name:r.item_name,description:r.description,category:r.category,quantity:r.quantity,price:r.price,item_image:r.item_image}),c(r.sizes?r.sizes.split(","):[])):(m({item_name:"",description:"",category:"",quantity:"",price:"",item_image:""}),c([]))},[r,n]);const h=g=>{const{name:y,value:_}=g.target;m({...p,[y]:_})},b=g=>{c(y=>y.includes(g)?y.filter(_=>_!==g):[...y,g])},w=g=>{f(g.target.files[0])},v=async g=>{g.preventDefault();try{let y=p.item_image;const k=(await qr.getSpecificBranchName(i)).data[0].branch_name,S=`${i}-${k}/`;if(u){const C=eg(tg,`${S}${n?r.item_name:p.item_name}`);await Jm(C,u),y=await Zm(C)}const E={...p,item_image:y,sizes:l.join(","),branch_id:i};n?await Dt.updateItem({...E,item_id:r.item_id}):await Dt.createItem(E),alert("Item has been "+(n?"Updated.":"Created.")),m({item_name:"",description:"",category:"",quantity:"",price:"",item_image:""}),c([]),o(),t()}catch(y){console.error("Error creating or updating item:",y)}};return x.jsxs(dn,{show:e,onHide:t,centered:!0,children:[x.jsx(dn.Header,{closeButton:!0,children:x.jsx(dn.Title,{children:n?"Update Item":"Add New Item"})}),x.jsx(dn.Body,{children:x.jsxs(J,{onSubmit:v,children:[x.jsxs(J.Group,{controlId:"itemName",children:[x.jsx(J.Label,{children:"Item Name"}),x.jsx(J.Control,{type:"text",name:"item_name",value:p.item_name,onChange:h,required:!0,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"description",children:[x.jsx(J.Label,{children:"Description"}),x.jsx(J.Control,{type:"text",name:"description",value:p.description,onChange:h,required:!0,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"category",children:[x.jsx(J.Label,{children:"Category"}),x.jsx(J.Control,{type:"text",name:"category",value:p.category,onChange:h,required:!0,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"sizes",children:[x.jsx(J.Label,{children:"Sizes"}),x.jsx("div",{children:a.length>0?a.map(g=>x.jsx(J.Check,{type:"checkbox",label:g.size_dimension,value:g.size_dimension,checked:l.includes(g.size_dimension),onChange:()=>b(g.size_dimension)},g.size_id)):x.jsx("div",{children:"No sizes available"})})]}),x.jsxs(J.Group,{controlId:"quantity",children:[x.jsx(J.Label,{children:"Quantity"}),x.jsx(J.Control,{type:"number",name:"quantity",value:p.quantity,onChange:h,required:!0,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"price",children:[x.jsx(J.Label,{children:"Price (Php)"}),x.jsx(J.Control,{type:"number",step:"0.01",name:"price",value:p.price,onChange:h,required:!0,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"item_image",children:[x.jsx(J.Label,{children:"Photo"}),x.jsx(J.Control,{type:"file",name:"item_image",onChange:w,accept:"image/*"})]}),x.jsx(gt,{variant:"primary",type:"submit",className:"mt-2",children:n?"Update Item":"Add Item"})]})})]})},WU=()=>{const[e,t]=O.useState([]),[n,r]=O.useState(!1),[o,i]=O.useState(!1),[a,s]=O.useState(null),[l,c]=O.useState(null),[u,f]=O.useState(null),[p,m]=O.useState([]);O.useEffect(()=>{const g=async()=>{try{const k=await br.getBranchId();c(k)}catch(k){console.error("Error fetching branch ID:",k)}},y=async()=>{var k;try{if(l){const S=await qr.getSpecificBranchName(l);f(((k=S.data[0])==null?void 0:k.branch_name)||"")}}catch(S){console.error("Error fetching branch name:",S)}},_=async()=>{try{const k=await Dt.getSizes();m(k.data)}catch(k){console.error("Error fetching sizes:",k)}};g(),y(),_(),h()},[l]);const h=async()=>{try{if(l){const g=await Dt.getFromBranch(l);t(g.data)}}catch(g){console.error("Error fetching items:",g)}},b=async g=>{try{await Dt.deleteItem(g),alert("Successfully Deleted Item."),h()}catch(y){console.error("Error deleting item:",y)}},w=g=>{g?(i(!0),s(g)):(i(!1),s(null)),r(!0)},v=()=>{r(!1),i(!1),s(null)};return x.jsx(Ol,{children:x.jsx("div",{className:"container-fluid vh-100 d-flex align-items-center justify-content-center",children:x.jsxs("div",{className:"col-md-10",children:[x.jsx("h2",{className:"text-left mb-4",children:"Item List"}),x.jsx("div",{className:"table-container",children:x.jsxs(gf,{striped:!0,bordered:!0,hover:!0,className:"table-fixed",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"#"}),x.jsx("th",{children:"Photo"}),x.jsx("th",{children:"Name"}),x.jsx("th",{children:"Description"}),x.jsx("th",{children:"Category"}),x.jsx("th",{children:"Size"}),x.jsx("th",{children:"Quantity"}),x.jsx("th",{children:"Price"}),x.jsx("th",{className:"text-center",children:"Actions"})]})}),x.jsx("tbody",{children:e.map(g=>x.jsxs("tr",{children:[x.jsx("td",{children:g.item_id}),x.jsx("td",{children:g.item_image?x.jsx("img",{src:g.item_image,style:{width:"100px",height:"100px",objectFit:"cover"}}):x.jsx("span",{children:"No image uploaded"})}),x.jsx("td",{children:g.item_name}),x.jsx("td",{children:g.description}),x.jsx("td",{children:g.category}),x.jsx("td",{children:g.sizes?g.sizes:"N/A"}),x.jsx("td",{children:g.quantity}),x.jsxs("td",{children:["Php ",g.price.toFixed(2)]}),x.jsxs("td",{className:"d-flex align-items-center justify-content-center",children:[x.jsx(gt,{variant:"warning",onClick:()=>w(g),className:"m-1",children:"Update"}),x.jsx(gt,{variant:"danger",onClick:()=>b(g.item_id),children:"Delete"})]})]},g.item_id))})]})}),x.jsx("div",{className:"text-center",children:x.jsx(gt,{variant:"success",onClick:()=>w(null),className:"mt-2",children:"Create Item"})}),x.jsx(UU,{showModal:n,handleCloseModal:v,isUpdateMode:o,selectedItem:a,fetchItems:h,sizes:p,branch_id:l})]})})})},VU=()=>{const[e,t]=O.useState([]),[n,r]=O.useState([]),[o,i]=O.useState(""),[a,s]=O.useState(!1);O.useEffect(()=>{l(),c()},[a]);const l=async()=>{try{const b=(a?await Dt.getAllWithDeleted():await Dt.getAllItems()).data.sort((w,v)=>w.isDeleted===v.isDeleted?0:w.isDeleted?1:-1);t(b)}catch(h){console.error("Error fetching items:",h)}},c=async()=>{try{const h=await qr.getAllBranchWithDeleted();r(h.data)}catch(h){console.error("Error fetching branches:",h)}},u=h=>{const b=n.find(w=>w.branch_id===h);return b?b.branch_name:"Unknown Branch"},f=h=>{i(h.target.value)},p=e.filter(h=>!(o&&h.branch_id.toString()!==o)),m=()=>{s(h=>!h)};return x.jsx(Ol,{children:x.jsx("div",{className:"container-fluid vh-100 d-flex align-items-center justify-content-center",children:x.jsxs("div",{className:"col-md-10",children:[x.jsx("h2",{className:"text-left mb-4",children:"Item List"}),x.jsx(J.Group,{controlId:"filters",className:"mb-4",children:x.jsxs(ov,{className:"align-items-center",children:[x.jsxs(ca,{md:3,children:[x.jsx(J.Label,{children:"Branch:"}),x.jsxs(J.Control,{as:"select",defaultValue:"",onChange:f,children:[x.jsx("option",{value:"",children:"All Branches"}),n.map(h=>x.jsx("option",{value:h.branch_id.toString(),children:h.branch_name},h.branch_id))]})]}),x.jsxs(ca,{md:3,children:[x.jsx(J.Label,{children:" "})," ",x.jsx("div",{onClick:m,className:"form-control",style:{cursor:"pointer",textAlign:"center"},children:a?"Hide Deleted Items":"Show Deleted Items"})]})]})}),x.jsx("div",{style:{maxHeight:"500px",overflowY:"auto"},className:"table-container",children:x.jsxs(gf,{striped:!0,bordered:!0,hover:!0,className:"table-fixed",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"#"}),x.jsx("th",{children:"Photo"}),x.jsx("th",{children:"Name"}),x.jsx("th",{children:"Description"}),x.jsx("th",{children:"Sizes"}),x.jsx("th",{children:"Category"}),x.jsx("th",{children:"Quantity"}),x.jsx("th",{children:"Price"}),x.jsx("th",{children:"Branch"}),a&&x.jsx("th",{children:"Deleted"})]})}),x.jsx("tbody",{children:p.map((h,b)=>x.jsxs("tr",{children:[x.jsx("td",{children:h.item_id}),x.jsx("td",{children:h.item_image?x.jsx("img",{src:h.item_image,style:{width:"100px",height:"100px",objectFit:"cover"}}):x.jsx("span",{children:"No image uploaded"})}),x.jsx("td",{children:h.item_name}),x.jsx("td",{children:h.description}),x.jsx("td",{children:h.category}),x.jsx("td",{children:h.sizes?h.sizes:"N/A"}),x.jsx("td",{children:h.quantity}),x.jsxs("td",{children:["Php ",h.price.toFixed(2)]}),x.jsx("td",{children:u(h.branch_id)}),a&&x.jsx("td",{children:x.jsx(J.Check,{type:"checkbox",checked:h.isDeleted,readOnly:!0})})]},h.item_id))})]})})]})})})},__=()=>x.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",textAlign:"center"},children:[x.jsx("h1",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"404"}),x.jsx("p",{style:{fontSize:"1.5rem",marginBottom:"2rem"},children:"Oops! The page you're looking for doesn't exist."}),x.jsx(gt,{as:pb,to:"/ViewItems",variant:"primary",size:"lg",children:"Go to Homepage"})]});function YU(){return document.cookie?x.jsx(JI,{}):x.jsx(Bn,{to:"/login"})}function GU(){const[e,t]=O.useState([]),[n,r]=O.useState(!1),[o,i]=O.useState(!1),[a,s]=O.useState(null),[l,c]=O.useState(null),[u,f]=O.useState({branch_name:"",branch_address:"",branch_contact:"",branch_image:""});O.useEffect(()=>{p()},[]);const p=async()=>{try{const _=await qr.getAllBranches();t(_.data)}catch(_){console.error("Error fetching items:",_)}},m=_=>{_?(i(!0),s(_),f({branch_id:_.branch_id,branch_name:_.branch_name,branch_address:_.branch_address,branch_contact:_.branch_contact,branch_image:""})):(i(!1),f({branch_name:"",branch_address:"",branch_contact:"",branch_image:""})),r(!0),c(null)},h=()=>{r(!1),i(!1),s(null)},b=async _=>{try{let k=_.branch_image;if(l){const E=eg(tg,"Branch-Images/"+l.name);await Jm(E,l),k=await Zm(E),console.log("imageURL:",k)}const S={branch_name:_.branch_name!==""?_.branch_name:a.branch_name,branch_address:_.branch_address!==""?_.branch_address:a.branch_address,branch_contact:_.branch_contact!==""?_.branch_contact:a.branch_contact,branch_image:k!==""?k:a.branch_image,branch_id:a.branch_id};console.log("selected Image:",a.branch_image),await qr.updateBranch(S),alert("Branch Updated"),s(null),p(),h()}catch(k){console.error("Error updating branch:",k)}},w=async _=>{try{await qr.deleteBranch(_),console.log("Deleting branch with id:",_),alert("Branch and releted items have been flag as deleted."),p()}catch(k){console.error("Error deleting branch:",k)}},v=async _=>{_.preventDefault();try{let k=u.branch_image;if(l){const E=eg(tg,"Branch-Images/"+l.name);await Jm(E,l),k=await Zm(E)}const S={...u,branch_image:k};o?await b(S):(await qr.createBranch(S),alert("Branch Added"),p(),h())}catch(k){console.error("Error creating or updating branch:",k)}},g=_=>{const{name:k,value:S}=_.target;f({...u,[k]:S})},y=_=>{c(_.target.files[0])};return x.jsx(Ol,{children:x.jsx("div",{className:"container-fluid vh-100 d-flex align-items-center justify-content-center",children:x.jsxs("div",{className:"col-md-10",children:[x.jsx("h2",{className:"text-left mb-4",children:"Branch List"}),x.jsx("div",{style:{maxHeight:"500px",overflowY:"auto"},children:x.jsxs(gf,{striped:!0,bordered:!0,hover:!0,children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"ID"}),x.jsx("th",{children:"Name"}),x.jsx("th",{children:"Image"}),x.jsx("th",{children:"Address"}),x.jsx("th",{children:"Contect Number"}),x.jsx("th",{className:"text-center",children:"Actions"})]})}),x.jsx("tbody",{children:e.map(_=>x.jsxs("tr",{children:[x.jsx("td",{children:_.branch_id}),x.jsx("td",{children:_.branch_name}),x.jsx("td",{children:_.branch_image?x.jsx("img",{src:_.branch_image,style:{width:"100px",height:"100px",objectFit:"cover"}}):x.jsx("span",{children:"No image uploaded"})}),x.jsx("td",{children:_.branch_address}),x.jsx("td",{children:_.branch_contact}),x.jsxs("td",{className:"d-flex align-items-center justify-content-center",children:[x.jsx(gt,{variant:"warning",onClick:()=>m(_),className:"m-1",children:"Update"}),x.jsx(gt,{variant:"danger",onClick:()=>w(_.branch_id),children:"Delete"})]})]},_.branch_id))})]})}),x.jsx("div",{className:"text-center",children:x.jsx(gt,{variant:"success",onClick:()=>m(null),className:"mt-2",children:"Create Branch"})}),x.jsxs(dn,{show:n,onHide:h,centered:!0,children:[x.jsx(dn.Header,{closeButton:!0,children:x.jsx(dn.Title,{children:o?"Update Branch":"Add New Branch"})}),x.jsx(dn.Body,{children:x.jsxs(J,{onSubmit:v,children:[x.jsxs(J.Group,{controlId:"branchName",children:[x.jsx(J.Label,{children:"Name"}),x.jsx(J.Control,{type:"text",name:"branch_name",value:u.branch_name,onChange:g,required:!o,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"address",children:[x.jsx(J.Label,{children:"Address"}),x.jsx(J.Control,{type:"text",name:"branch_address",value:u.branch_address,onChange:g,required:!o,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"contact",children:[x.jsx(J.Label,{children:"Contact"}),x.jsx(J.Control,{type:"text",name:"branch_contact",value:u.branch_contact,onChange:g,required:!o,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"branch_image",children:[x.jsx(J.Label,{children:"Photo"}),x.jsx(J.Control,{type:"file",name:"branch_image",onChange:y,accept:"image/*"})]}),x.jsx(gt,{variant:"primary",type:"submit",className:"mt-2",children:o?"Update Branch":"Add Branch"})]})})]})]})})})}const Ha=`${la.hostname}/admins`,Bp={getAllAdmins:async()=>await ae.get(`${Ha}/getAdmins`),getAdminById:async e=>await ae.post(`${Ha}/getAdmin`,{admin_id:e}),createAdmin:async e=>(console.log(e),await ae.post(`${Ha}/create`,e)),updateAdmin:async e=>await ae.post(`${Ha}/update`,e),deleteAdmin:async e=>await ae.post(`${Ha}/delete`,{admin_id:e})};function qU(){const[e,t]=O.useState([]),[n,r]=O.useState(!1),[o,i]=O.useState(!1),[a,s]=O.useState(null),[l,c]=O.useState({username:"",password:"",branch_id:""}),[u,f]=O.useState(!1);O.useEffect(()=>{p()},[]);const p=async()=>{try{const y=await Bp.getAllAdmins();t(y.data)}catch(y){console.error("Error fetching admins:",y)}},m=y=>{y?(i(!0),s(y),c({username:y.username,password:y.password,branch_id:y.branch_id})):(i(!1),c({username:"",password:"",branch_id:""})),r(!0)},h=()=>{r(!1),c({username:"",password:"",branch_id:""})},b=async y=>{try{const _={admin_id:a.admin_id,username:y.username!==""?y.username:a.username,password:y.password!==""?y.password:a.password,branch_id:y.branch_id!==""?y.branch_id:a.branch_id};await Bp.updateAdmin(_),alert("Admin Updated"),p(),h()}catch(_){console.error("Error updating admin:",_)}},w=async y=>{y.preventDefault();try{const _={...l};o?await b(_):(await Bp.createAdmin(_),alert("Admin Added"),p(),h())}catch(_){console.error("Error creating or updating admin:",_)}},v=y=>{const{name:_,value:k}=y.target;c({...l,[_]:k})},g=()=>{f(!u)};return x.jsx(Ol,{children:x.jsx("div",{className:"container-fluid vh-100 d-flex align-items-center justify-content-center",children:x.jsxs("div",{className:"col-md-10",children:[x.jsx("h2",{className:"text-left mb-4",children:"Admin List"}),x.jsx("div",{style:{maxHeight:"500px",overflowY:"auto"},children:x.jsxs(gf,{striped:!0,bordered:!0,hover:!0,children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{children:"ID"}),x.jsx("th",{children:"Username"}),x.jsx("th",{children:"Branch ID"}),x.jsx("th",{className:"text-center",children:"Actions"})]})}),x.jsx("tbody",{children:e.map(y=>x.jsxs("tr",{children:[x.jsx("td",{children:y.admin_id}),x.jsx("td",{children:y.username}),x.jsx("td",{children:y.branch_id}),x.jsxs("td",{className:"d-flex align-items-center justify-content-center",children:[x.jsx(gt,{variant:"warning",onClick:()=>m(y),className:"m-1",children:"Update"}),x.jsx(gt,{variant:"danger",onClick:()=>handleDelete(y.admin_id),children:"Delete"})]})]},y.admin_id))})]})}),x.jsx("div",{className:"text-center",children:x.jsx(gt,{variant:"success",onClick:()=>m(null),className:"mt-2",children:"Create Admin"})}),x.jsxs(dn,{show:n,onHide:h,centered:!0,children:[x.jsx(dn.Header,{closeButton:!0,children:x.jsx(dn.Title,{children:o?"Update Admin":"Add New Admin"})}),x.jsx(dn.Body,{children:x.jsxs(J,{onSubmit:w,children:[x.jsxs(J.Group,{controlId:"username",children:[x.jsx(J.Label,{children:"Username"}),x.jsx(J.Control,{type:"text",name:"username",value:l.username,onChange:v,required:!o,autoComplete:"off"})]}),x.jsxs(J.Group,{controlId:"password",children:[x.jsx(J.Label,{children:"Password"}),x.jsxs("div",{className:"input-group",children:[x.jsx(J.Control,{type:u?"text":"password",name:"password",onChange:v,required:!o,autoComplete:"off"}),x.jsx(gt,{variant:"outline-secondary",onClick:g,className:"input-group-text",children:u?x.jsx(bf,{size:20}):x.jsx(vf,{size:20})})]})]}),x.jsxs(J.Group,{controlId:"branch_id",children:[x.jsx(J.Label,{children:"Branch ID"}),x.jsx(J.Control,{type:"text",name:"branch_id",value:l.branch_id,onChange:v,required:!o,autoComplete:"off"})]}),x.jsx(gt,{variant:"primary",type:"submit",className:"mt-2",children:o?"Update Admin":"Add Admin"})]})})]})]})})})}/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function Tl(e){return e+.5|0}const Xr=(e,t,n)=>Math.max(Math.min(e,n),t);function os(e){return Xr(Tl(e*2.55),0,255)}function fo(e){return Xr(Tl(e*255),0,255)}function ur(e){return Xr(Tl(e/2.55)/100,0,1)}function S_(e){return Xr(Tl(e*100),0,100)}const on={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},ng=[..."0123456789ABCDEF"],XU=e=>ng[e&15],KU=e=>ng[(e&240)>>4]+ng[e&15],mc=e=>(e&240)>>4===(e&15),QU=e=>mc(e.r)&&mc(e.g)&&mc(e.b)&&mc(e.a);function JU(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&on[e[1]]*17,g:255&on[e[2]]*17,b:255&on[e[3]]*17,a:t===5?on[e[4]]*17:255}:(t===7||t===9)&&(n={r:on[e[1]]<<4|on[e[2]],g:on[e[3]]<<4|on[e[4]],b:on[e[5]]<<4|on[e[6]],a:t===9?on[e[7]]<<4|on[e[8]]:255})),n}const ZU=(e,t)=>e<255?t(e):"";function e9(e){var t=QU(e)?XU:KU;return e?"#"+t(e.r)+t(e.g)+t(e.b)+ZU(e.a,t):void 0}const t9=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function D2(e,t,n){const r=t*Math.min(n,1-n),o=(i,a=(i+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[o(0),o(8),o(4)]}function n9(e,t,n){const r=(o,i=(o+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function r9(e,t,n){const r=D2(e,1,.5);let o;for(t+n>1&&(o=1/(t+n),t*=o,n*=o),o=0;o<3;o++)r[o]*=1-t-n,r[o]+=t;return r}function o9(e,t,n,r,o){return e===o?(t-n)/r+(t<n?6:0):t===o?(n-e)/r+2:(e-t)/r+4}function mv(e){const n=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(n,r,o),a=Math.min(n,r,o),s=(i+a)/2;let l,c,u;return i!==a&&(u=i-a,c=s>.5?u/(2-i-a):u/(i+a),l=o9(n,r,o,u,i),l=l*60+.5),[l|0,c||0,s]}function gv(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(fo)}function bv(e,t,n){return gv(D2,e,t,n)}function i9(e,t,n){return gv(r9,e,t,n)}function a9(e,t,n){return gv(n9,e,t,n)}function N2(e){return(e%360+360)%360}function s9(e){const t=t9.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?os(+t[5]):fo(+t[5]));const o=N2(+t[2]),i=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?r=i9(o,i,a):t[1]==="hsv"?r=a9(o,i,a):r=bv(o,i,a),{r:r[0],g:r[1],b:r[2],a:n}}function l9(e,t){var n=mv(e);n[0]=N2(n[0]+t),n=bv(n),e.r=n[0],e.g=n[1],e.b=n[2]}function c9(e){if(!e)return;const t=mv(e),n=t[0],r=S_(t[1]),o=S_(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${o}%, ${ur(e.a)})`:`hsl(${n}, ${r}%, ${o}%)`}const k_={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},E_={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function u9(){const e={},t=Object.keys(E_),n=Object.keys(k_);let r,o,i,a,s;for(r=0;r<t.length;r++){for(a=s=t[r],o=0;o<n.length;o++)i=n[o],s=s.replace(i,k_[i]);i=parseInt(E_[a],16),e[s]=[i>>16&255,i>>8&255,i&255]}return e}let gc;function d9(e){gc||(gc=u9(),gc.transparent=[0,0,0,0]);const t=gc[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const f9=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function p9(e){const t=f9.exec(e);let n=255,r,o,i;if(t){if(t[7]!==r){const a=+t[7];n=t[8]?os(a):Xr(a*255,0,255)}return r=+t[1],o=+t[3],i=+t[5],r=255&(t[2]?os(r):Xr(r,0,255)),o=255&(t[4]?os(o):Xr(o,0,255)),i=255&(t[6]?os(i):Xr(i,0,255)),{r,g:o,b:i,a:n}}}function h9(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ur(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const Hp=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Ci=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function m9(e,t,n){const r=Ci(ur(e.r)),o=Ci(ur(e.g)),i=Ci(ur(e.b));return{r:fo(Hp(r+n*(Ci(ur(t.r))-r))),g:fo(Hp(o+n*(Ci(ur(t.g))-o))),b:fo(Hp(i+n*(Ci(ur(t.b))-i))),a:e.a+n*(t.a-e.a)}}function bc(e,t,n){if(e){let r=mv(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=bv(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function $2(e,t){return e&&Object.assign(t||{},e)}function O_(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=fo(e[3]))):(t=$2(e,{r:0,g:0,b:0,a:1}),t.a=fo(t.a)),t}function g9(e){return e.charAt(0)==="r"?p9(e):s9(e)}class Zs{constructor(t){if(t instanceof Zs)return t;const n=typeof t;let r;n==="object"?r=O_(t):n==="string"&&(r=JU(t)||d9(t)||g9(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=$2(this._rgb);return t&&(t.a=ur(t.a)),t}set rgb(t){this._rgb=O_(t)}rgbString(){return this._valid?h9(this._rgb):void 0}hexString(){return this._valid?e9(this._rgb):void 0}hslString(){return this._valid?c9(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,o=t.rgb;let i;const a=n===i?.5:n,s=2*a-1,l=r.a-o.a,c=((s*l===-1?s:(s+l)/(1+s*l))+1)/2;i=1-c,r.r=255&c*r.r+i*o.r+.5,r.g=255&c*r.g+i*o.g+.5,r.b=255&c*r.b+i*o.b+.5,r.a=a*r.a+(1-a)*o.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=m9(this._rgb,t._rgb,n)),this}clone(){return new Zs(this.rgb)}alpha(t){return this._rgb.a=fo(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=Tl(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return bc(this._rgb,2,t),this}darken(t){return bc(this._rgb,2,-t),this}saturate(t){return bc(this._rgb,1,t),this}desaturate(t){return bc(this._rgb,1,-t),this}rotate(t){return l9(this._rgb,t),this}}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */function ir(){}const b9=(()=>{let e=0;return()=>e++})();function xe(e){return e===null||typeof e>"u"}function Fe(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function be(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function Ke(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Yt(e,t){return Ke(e)?e:t}function de(e,t){return typeof e>"u"?t:e}const v9=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,F2=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Te(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Se(e,t,n,r){let o,i,a;if(Fe(e))for(i=e.length,o=0;o<i;o++)t.call(n,e[o],o);else if(be(e))for(a=Object.keys(e),i=a.length,o=0;o<i;o++)t.call(n,e[a[o]],a[o])}function Zu(e,t){let n,r,o,i;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(o=e[n],i=t[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function ed(e){if(Fe(e))return e.map(ed);if(be(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let o=0;for(;o<r;++o)t[n[o]]=ed(e[n[o]]);return t}return e}function z2(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function y9(e,t,n,r){if(!z2(e))return;const o=t[e],i=n[e];be(o)&&be(i)?el(o,i,r):t[e]=ed(i)}function el(e,t,n){const r=Fe(t)?t:[t],o=r.length;if(!be(e))return e;n=n||{};const i=n.merger||y9;let a;for(let s=0;s<o;++s){if(a=r[s],!be(a))continue;const l=Object.keys(a);for(let c=0,u=l.length;c<u;++c)i(l[c],e,a,n)}return e}function _s(e,t){return el(e,t,{merger:x9})}function x9(e,t,n){if(!z2(e))return;const r=t[e],o=n[e];be(r)&&be(o)?_s(r,o):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=ed(o))}const C_={"":e=>e,x:e=>e.x,y:e=>e.y};function w9(e){const t=e.split("."),n=[];let r="";for(const o of t)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function _9(e){const t=w9(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function go(e,t){return(C_[t]||(C_[t]=_9(t)))(e)}function vv(e){return e.charAt(0).toUpperCase()+e.slice(1)}const tl=e=>typeof e<"u",bo=e=>typeof e=="function",T_=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function S9(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Le=Math.PI,je=2*Le,k9=je+Le,td=Number.POSITIVE_INFINITY,E9=Le/180,nt=Le/2,To=Le/4,R_=Le*2/3,Kr=Math.log10,tr=Math.sign;function Ss(e,t,n){return Math.abs(e-t)<n}function P_(e){const t=Math.round(e);e=Ss(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Kr(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function O9(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((o,i)=>o-i).pop(),t}function ua(e){return!isNaN(parseFloat(e))&&isFinite(e)}function C9(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function B2(e,t,n){let r,o,i;for(r=0,o=e.length;r<o;r++)i=e[r][n],isNaN(i)||(t.min=Math.min(t.min,i),t.max=Math.max(t.max,i))}function Rn(e){return e*(Le/180)}function yv(e){return e*(180/Le)}function A_(e){if(!Ke(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function H2(e,t){const n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*Le&&(i+=je),{angle:i,distance:o}}function rg(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function T9(e,t){return(e-t+k9)%je-Le}function qt(e){return(e%je+je)%je}function nl(e,t,n,r){const o=qt(e),i=qt(t),a=qt(n),s=qt(i-o),l=qt(a-o),c=qt(o-i),u=qt(o-a);return o===i||o===a||r&&i===a||s>l&&c<u}function ft(e,t,n){return Math.max(t,Math.min(n,e))}function R9(e){return ft(e,-32768,32767)}function pr(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function xv(e,t,n){n=n||(a=>e[a]<t);let r=e.length-1,o=0,i;for(;r-o>1;)i=o+r>>1,n(i)?o=i:r=i;return{lo:o,hi:r}}const hr=(e,t,n,r)=>xv(e,n,r?o=>{const i=e[o][t];return i<n||i===n&&e[o+1][t]===n}:o=>e[o][t]<n),P9=(e,t,n)=>xv(e,n,r=>e[r][t]>=n);function A9(e,t,n){let r=0,o=e.length;for(;r<o&&e[r]<t;)r++;for(;o>r&&e[o-1]>n;)o--;return r>0||o<e.length?e.slice(r,o):e}const U2=["push","pop","shift","splice","unshift"];function I9(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),U2.forEach(n=>{const r="_onData"+vv(n),o=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...i){const a=o.apply(this,i);return e._chartjs.listeners.forEach(s=>{typeof s[r]=="function"&&s[r](...i)}),a}})})}function I_(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(t);o!==-1&&r.splice(o,1),!(r.length>0)&&(U2.forEach(i=>{delete e[i]}),delete e._chartjs)}function W2(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const V2=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function Y2(e,t){let n=[],r=!1;return function(...o){n=o,r||(r=!0,V2.call(window,()=>{r=!1,e.apply(t,n)}))}}function M9(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const wv=e=>e==="start"?"left":e==="end"?"right":"center",_t=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,j9=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function G2(e,t,n){const r=t.length;let o=0,i=r;if(e._sorted){const{iScale:a,_parsed:s}=e,l=a.axis,{min:c,max:u,minDefined:f,maxDefined:p}=a.getUserBounds();f&&(o=ft(Math.min(hr(s,l,c).lo,n?r:hr(t,l,a.getPixelForValue(c)).lo),0,r-1)),p?i=ft(Math.max(hr(s,a.axis,u,!0).hi+1,n?0:hr(t,l,a.getPixelForValue(u),!0).hi+1),o,r)-o:i=r-o}return{start:o,count:i}}function q2(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,o={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=o,!0;const i=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,o),i}const vc=e=>e===0||e===1,M_=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*je/n)),j_=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*je/n)+1,ks={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*nt)+1,easeOutSine:e=>Math.sin(e*nt),easeInOutSine:e=>-.5*(Math.cos(Le*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>vc(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>vc(e)?e:M_(e,.075,.3),easeOutElastic:e=>vc(e)?e:j_(e,.075,.3),easeInOutElastic(e){return vc(e)?e:e<.5?.5*M_(e*2,.1125,.45):.5+.5*j_(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-ks.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?ks.easeInBounce(e*2)*.5:ks.easeOutBounce(e*2-1)*.5+.5};function _v(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function L_(e){return _v(e)?e:new Zs(e)}function Up(e){return _v(e)?e:new Zs(e).saturate(.5).darken(.1).hexString()}const L9=["x","y","borderWidth","radius","tension"],D9=["color","borderColor","backgroundColor"];function N9(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:D9},numbers:{type:"number",properties:L9}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function $9(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const D_=new Map;function F9(e,t){t=t||{};const n=e+JSON.stringify(t);let r=D_.get(n);return r||(r=new Intl.NumberFormat(e,t),D_.set(n,r)),r}function Rl(e,t,n){return F9(t,n).format(e)}const X2={values(e){return Fe(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let o,i=e;if(n.length>1){const c=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),i=z9(e,n)}const a=Kr(Math.abs(i)),s=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),Rl(e,r,l)},logarithmic(e,t,n){if(e===0)return"0";const r=n[t].significand||e/Math.pow(10,Math.floor(Kr(e)));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?X2.numeric.call(this,e,t,n):""}};function z9(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var xf={formatters:X2};function B9(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:xf.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const li=Object.create(null),og=Object.create(null);function Es(e,t){if(!t)return e;const n=t.split(".");for(let r=0,o=n.length;r<o;++r){const i=n[r];e=e[i]||(e[i]=Object.create(null))}return e}function Wp(e,t,n){return typeof t=="string"?el(Es(e,t),n):el(Es(e,""),t)}class H9{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,o)=>Up(o.backgroundColor),this.hoverBorderColor=(r,o)=>Up(o.borderColor),this.hoverColor=(r,o)=>Up(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return Wp(this,t,n)}get(t){return Es(this,t)}describe(t,n){return Wp(og,t,n)}override(t,n){return Wp(li,t,n)}route(t,n,r,o){const i=Es(this,t),a=Es(this,r),s="_"+n;Object.defineProperties(i,{[s]:{value:i[n],writable:!0},[n]:{enumerable:!0,get(){const l=this[s],c=a[o];return be(l)?Object.assign({},c,l):de(l,c)},set(l){this[s]=l}}})}apply(t){t.forEach(n=>n(this))}}var Qe=new H9({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[N9,$9,B9]);function U9(e){return!e||xe(e.size)||xe(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function nd(e,t,n,r,o){let i=t[o];return i||(i=t[o]=e.measureText(o).width,n.push(o)),i>r&&(r=i),r}function W9(e,t,n,r){r=r||{};let o=r.data=r.data||{},i=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(o=r.data={},i=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let a=0;const s=n.length;let l,c,u,f,p;for(l=0;l<s;l++)if(f=n[l],f!=null&&!Fe(f))a=nd(e,o,i,a,f);else if(Fe(f))for(c=0,u=f.length;c<u;c++)p=f[c],p!=null&&!Fe(p)&&(a=nd(e,o,i,a,p));e.restore();const m=i.length/2;if(m>n.length){for(l=0;l<m;l++)delete o[i[l]];i.splice(0,m)}return a}function Ro(e,t,n){const r=e.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((t-o)*r)/r+o}function N_(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function ig(e,t,n,r){K2(e,t,n,r,null)}function K2(e,t,n,r,o){let i,a,s,l,c,u,f,p;const m=t.pointStyle,h=t.rotation,b=t.radius;let w=(h||0)*E9;if(m&&typeof m=="object"&&(i=m.toString(),i==="[object HTMLImageElement]"||i==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(w),e.drawImage(m,-m.width/2,-m.height/2,m.width,m.height),e.restore();return}if(!(isNaN(b)||b<=0)){switch(e.beginPath(),m){default:o?e.ellipse(n,r,o/2,b,0,0,je):e.arc(n,r,b,0,je),e.closePath();break;case"triangle":u=o?o/2:b,e.moveTo(n+Math.sin(w)*u,r-Math.cos(w)*b),w+=R_,e.lineTo(n+Math.sin(w)*u,r-Math.cos(w)*b),w+=R_,e.lineTo(n+Math.sin(w)*u,r-Math.cos(w)*b),e.closePath();break;case"rectRounded":c=b*.516,l=b-c,a=Math.cos(w+To)*l,f=Math.cos(w+To)*(o?o/2-c:l),s=Math.sin(w+To)*l,p=Math.sin(w+To)*(o?o/2-c:l),e.arc(n-f,r-s,c,w-Le,w-nt),e.arc(n+p,r-a,c,w-nt,w),e.arc(n+f,r+s,c,w,w+nt),e.arc(n-p,r+a,c,w+nt,w+Le),e.closePath();break;case"rect":if(!h){l=Math.SQRT1_2*b,u=o?o/2:l,e.rect(n-u,r-l,2*u,2*l);break}w+=To;case"rectRot":f=Math.cos(w)*(o?o/2:b),a=Math.cos(w)*b,s=Math.sin(w)*b,p=Math.sin(w)*(o?o/2:b),e.moveTo(n-f,r-s),e.lineTo(n+p,r-a),e.lineTo(n+f,r+s),e.lineTo(n-p,r+a),e.closePath();break;case"crossRot":w+=To;case"cross":f=Math.cos(w)*(o?o/2:b),a=Math.cos(w)*b,s=Math.sin(w)*b,p=Math.sin(w)*(o?o/2:b),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"star":f=Math.cos(w)*(o?o/2:b),a=Math.cos(w)*b,s=Math.sin(w)*b,p=Math.sin(w)*(o?o/2:b),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a),w+=To,f=Math.cos(w)*(o?o/2:b),a=Math.cos(w)*b,s=Math.sin(w)*b,p=Math.sin(w)*(o?o/2:b),e.moveTo(n-f,r-s),e.lineTo(n+f,r+s),e.moveTo(n+p,r-a),e.lineTo(n-p,r+a);break;case"line":a=o?o/2:Math.cos(w)*b,s=Math.sin(w)*b,e.moveTo(n-a,r-s),e.lineTo(n+a,r+s);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(w)*(o?o/2:b),r+Math.sin(w)*b);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function mr(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function wf(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function _f(e){e.restore()}function V9(e,t,n,r,o){if(!t)return e.lineTo(n.x,n.y);if(o==="middle"){const i=(t.x+n.x)/2;e.lineTo(i,t.y),e.lineTo(i,n.y)}else o==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function Y9(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function G9(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),xe(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function q9(e,t,n,r,o){if(o.strikethrough||o.underline){const i=e.measureText(r),a=t-i.actualBoundingBoxLeft,s=t+i.actualBoundingBoxRight,l=n-i.actualBoundingBoxAscent,c=n+i.actualBoundingBoxDescent,u=o.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=o.decorationWidth||2,e.moveTo(a,u),e.lineTo(s,u),e.stroke()}}function X9(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function ci(e,t,n,r,o,i={}){const a=Fe(t)?t:[t],s=i.strokeWidth>0&&i.strokeColor!=="";let l,c;for(e.save(),e.font=o.string,G9(e,i),l=0;l<a.length;++l)c=a[l],i.backdrop&&X9(e,i.backdrop),s&&(i.strokeColor&&(e.strokeStyle=i.strokeColor),xe(i.strokeWidth)||(e.lineWidth=i.strokeWidth),e.strokeText(c,n,r,i.maxWidth)),e.fillText(c,n,r,i.maxWidth),q9(e,n,r,c,i),r+=Number(o.lineHeight);e.restore()}function rl(e,t){const{x:n,y:r,w:o,h:i,radius:a}=t;e.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*Le,Le,!0),e.lineTo(n,r+i-a.bottomLeft),e.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,Le,nt,!0),e.lineTo(n+o-a.bottomRight,r+i),e.arc(n+o-a.bottomRight,r+i-a.bottomRight,a.bottomRight,nt,0,!0),e.lineTo(n+o,r+a.topRight),e.arc(n+o-a.topRight,r+a.topRight,a.topRight,0,-nt,!0),e.lineTo(n+a.topLeft,r)}const K9=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Q9=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function J9(e,t){const n=(""+e).match(K9);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const Z9=e=>+e||0;function Sv(e,t){const n={},r=be(t),o=r?Object.keys(t):t,i=be(e)?r?a=>de(e[a],e[t[a]]):a=>e[a]:()=>e;for(const a of o)n[a]=Z9(i(a));return n}function Q2(e){return Sv(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Ko(e){return Sv(e,["topLeft","topRight","bottomLeft","bottomRight"])}function Ot(e){const t=Q2(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ut(e,t){e=e||{},t=t||Qe.font;let n=de(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=de(e.style,t.style);r&&!(""+r).match(Q9)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const o={family:de(e.family,t.family),lineHeight:J9(de(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:de(e.weight,t.weight),string:""};return o.string=U9(o),o}function is(e,t,n,r){let o,i,a;for(o=0,i=e.length;o<i;++o)if(a=e[o],a!==void 0&&a!==void 0)return a}function eW(e,t,n){const{min:r,max:o}=e,i=F2(t,(o-r)/2),a=(s,l)=>n&&s===0?0:s+l;return{min:a(r,-Math.abs(i)),max:a(o,i)}}function So(e,t){return Object.assign(Object.create(e),t)}function kv(e,t=[""],n,r,o=()=>e[0]){const i=n||e;typeof r>"u"&&(r=tR("_fallback",e));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:i,_fallback:r,_getTarget:o,override:s=>kv([s,...e],t,i,r)};return new Proxy(a,{deleteProperty(s,l){return delete s[l],delete s._keys,delete e[0][l],!0},get(s,l){return Z2(s,l,()=>lW(l,t,e,s))},getOwnPropertyDescriptor(s,l){return Reflect.getOwnPropertyDescriptor(s._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(s,l){return F_(s).includes(l)},ownKeys(s){return F_(s)},set(s,l,c){const u=s._storage||(s._storage=o());return s[l]=u[l]=c,delete s._keys,!0}})}function da(e,t,n,r){const o={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:J2(e,r),setContext:i=>da(e,i,n,r),override:i=>da(e.override(i),t,n,r)};return new Proxy(o,{deleteProperty(i,a){return delete i[a],delete e[a],!0},get(i,a,s){return Z2(i,a,()=>nW(i,a,s))},getOwnPropertyDescriptor(i,a){return i._descriptors.allKeys?Reflect.has(e,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,a)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(i,a){return Reflect.has(e,a)},ownKeys(){return Reflect.ownKeys(e)},set(i,a,s){return e[a]=s,delete i[a],!0}})}function J2(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:o=t.allKeys}=e;return{allKeys:o,scriptable:n,indexable:r,isScriptable:bo(n)?n:()=>n,isIndexable:bo(r)?r:()=>r}}const tW=(e,t)=>e?e+vv(t):t,Ev=(e,t)=>be(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Z2(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function nW(e,t,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:a}=e;let s=r[t];return bo(s)&&a.isScriptable(t)&&(s=rW(t,s,e,n)),Fe(s)&&s.length&&(s=oW(t,s,e,a.isIndexable)),Ev(t,s)&&(s=da(s,o,i&&i[t],a)),s}function rW(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_stack:s}=n;if(s.has(e))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+e);s.add(e);let l=t(i,a||r);return s.delete(e),Ev(e,l)&&(l=Ov(o._scopes,o,e,l)),l}function oW(e,t,n,r){const{_proxy:o,_context:i,_subProxy:a,_descriptors:s}=n;if(typeof i.index<"u"&&r(e))return t[i.index%t.length];if(be(t[0])){const l=t,c=o._scopes.filter(u=>u!==l);t=[];for(const u of l){const f=Ov(c,o,e,u);t.push(da(f,i,a&&a[e],s))}}return t}function eR(e,t,n){return bo(e)?e(t,n):e}const iW=(e,t)=>e===!0?t:typeof e=="string"?go(t,e):void 0;function aW(e,t,n,r,o){for(const i of t){const a=iW(n,i);if(a){e.add(a);const s=eR(a._fallback,n,o);if(typeof s<"u"&&s!==n&&s!==r)return s}else if(a===!1&&typeof r<"u"&&n!==r)return null}return!1}function Ov(e,t,n,r){const o=t._rootScopes,i=eR(t._fallback,n,r),a=[...e,...o],s=new Set;s.add(r);let l=$_(s,a,n,i||n,r);return l===null||typeof i<"u"&&i!==n&&(l=$_(s,a,i,l,r),l===null)?!1:kv(Array.from(s),[""],o,i,()=>sW(t,n,r))}function $_(e,t,n,r,o){for(;n;)n=aW(e,t,n,r,o);return n}function sW(e,t,n){const r=e._getTarget();t in r||(r[t]={});const o=r[t];return Fe(o)&&be(n)?n:o||{}}function lW(e,t,n,r){let o;for(const i of t)if(o=tR(tW(i,e),n),typeof o<"u")return Ev(e,o)?Ov(n,r,e,o):o}function tR(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function F_(e){let t=e._keys;return t||(t=e._keys=cW(e._scopes)),t}function cW(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(o=>!o.startsWith("_")))t.add(r);return Array.from(t)}function nR(e,t,n,r){const{iScale:o}=e,{key:i="r"}=this._parsing,a=new Array(r);let s,l,c,u;for(s=0,l=r;s<l;++s)c=s+n,u=t[c],a[s]={r:o.parse(go(u,i),c)};return a}const uW=Number.EPSILON||1e-14,fa=(e,t)=>t<e.length&&!e[t].skip&&e[t],rR=e=>e==="x"?"y":"x";function dW(e,t,n,r){const o=e.skip?t:e,i=t,a=n.skip?t:n,s=rg(i,o),l=rg(a,i);let c=s/(s+l),u=l/(s+l);c=isNaN(c)?0:c,u=isNaN(u)?0:u;const f=r*c,p=r*u;return{previous:{x:i.x-f*(a.x-o.x),y:i.y-f*(a.y-o.y)},next:{x:i.x+p*(a.x-o.x),y:i.y+p*(a.y-o.y)}}}function fW(e,t,n){const r=e.length;let o,i,a,s,l,c=fa(e,0);for(let u=0;u<r-1;++u)if(l=c,c=fa(e,u+1),!(!l||!c)){if(Ss(t[u],0,uW)){n[u]=n[u+1]=0;continue}o=n[u]/t[u],i=n[u+1]/t[u],s=Math.pow(o,2)+Math.pow(i,2),!(s<=9)&&(a=3/Math.sqrt(s),n[u]=o*a*t[u],n[u+1]=i*a*t[u])}}function pW(e,t,n="x"){const r=rR(n),o=e.length;let i,a,s,l=fa(e,0);for(let c=0;c<o;++c){if(a=s,s=l,l=fa(e,c+1),!s)continue;const u=s[n],f=s[r];a&&(i=(u-a[n])/3,s[`cp1${n}`]=u-i,s[`cp1${r}`]=f-i*t[c]),l&&(i=(l[n]-u)/3,s[`cp2${n}`]=u+i,s[`cp2${r}`]=f+i*t[c])}}function hW(e,t="x"){const n=rR(t),r=e.length,o=Array(r).fill(0),i=Array(r);let a,s,l,c=fa(e,0);for(a=0;a<r;++a)if(s=l,l=c,c=fa(e,a+1),!!l){if(c){const u=c[t]-l[t];o[a]=u!==0?(c[n]-l[n])/u:0}i[a]=s?c?tr(o[a-1])!==tr(o[a])?0:(o[a-1]+o[a])/2:o[a-1]:o[a]}fW(e,o,i),pW(e,i,t)}function yc(e,t,n){return Math.max(Math.min(e,n),t)}function mW(e,t){let n,r,o,i,a,s=mr(e[0],t);for(n=0,r=e.length;n<r;++n)a=i,i=s,s=n<r-1&&mr(e[n+1],t),i&&(o=e[n],a&&(o.cp1x=yc(o.cp1x,t.left,t.right),o.cp1y=yc(o.cp1y,t.top,t.bottom)),s&&(o.cp2x=yc(o.cp2x,t.left,t.right),o.cp2y=yc(o.cp2y,t.top,t.bottom)))}function gW(e,t,n,r,o){let i,a,s,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")hW(e,o);else{let c=r?e[e.length-1]:e[0];for(i=0,a=e.length;i<a;++i)s=e[i],l=dW(c,s,e[Math.min(i+1,a-(r?0:1))%a],t.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,c=s}t.capBezierPoints&&mW(e,n)}function Cv(){return typeof window<"u"&&typeof document<"u"}function Tv(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function rd(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const Sf=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function bW(e,t){return Sf(e).getPropertyValue(t)}const vW=["top","right","bottom","left"];function Qo(e,t,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=vW[o];r[i]=parseFloat(e[t+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const yW=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function xW(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:o,offsetY:i}=r;let a=!1,s,l;if(yW(o,i,e.target))s=o,l=i;else{const c=t.getBoundingClientRect();s=r.clientX-c.left,l=r.clientY-c.top,a=!0}return{x:s,y:l,box:a}}function Do(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,o=Sf(n),i=o.boxSizing==="border-box",a=Qo(o,"padding"),s=Qo(o,"border","width"),{x:l,y:c,box:u}=xW(e,n),f=a.left+(u&&s.left),p=a.top+(u&&s.top);let{width:m,height:h}=t;return i&&(m-=a.width+s.width,h-=a.height+s.height),{x:Math.round((l-f)/m*n.width/r),y:Math.round((c-p)/h*n.height/r)}}function wW(e,t,n){let r,o;if(t===void 0||n===void 0){const i=e&&Tv(e);if(!i)t=e.clientWidth,n=e.clientHeight;else{const a=i.getBoundingClientRect(),s=Sf(i),l=Qo(s,"border","width"),c=Qo(s,"padding");t=a.width-c.width-l.width,n=a.height-c.height-l.height,r=rd(s.maxWidth,i,"clientWidth"),o=rd(s.maxHeight,i,"clientHeight")}}return{width:t,height:n,maxWidth:r||td,maxHeight:o||td}}const xc=e=>Math.round(e*10)/10;function _W(e,t,n,r){const o=Sf(e),i=Qo(o,"margin"),a=rd(o.maxWidth,e,"clientWidth")||td,s=rd(o.maxHeight,e,"clientHeight")||td,l=wW(e,t,n);let{width:c,height:u}=l;if(o.boxSizing==="content-box"){const p=Qo(o,"border","width"),m=Qo(o,"padding");c-=m.width+p.width,u-=m.height+p.height}return c=Math.max(0,c-i.width),u=Math.max(0,r?c/r:u-i.height),c=xc(Math.min(c,a,l.maxWidth)),u=xc(Math.min(u,s,l.maxHeight)),c&&!u&&(u=xc(c/2)),(t!==void 0||n!==void 0)&&r&&l.height&&u>l.height&&(u=l.height,c=xc(Math.floor(u*r))),{width:c,height:u}}function z_(e,t,n){const r=t||1,o=Math.floor(e.height*r),i=Math.floor(e.width*r);e.height=Math.floor(e.height),e.width=Math.floor(e.width);const a=e.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${e.height}px`,a.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||a.height!==o||a.width!==i?(e.currentDevicePixelRatio=r,a.height=o,a.width=i,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const SW=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Cv()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function B_(e,t){const n=bW(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function No(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function kW(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function EW(e,t,n,r){const o={x:e.cp2x,y:e.cp2y},i={x:t.cp1x,y:t.cp1y},a=No(e,o,n),s=No(o,i,n),l=No(i,t,n),c=No(a,s,n),u=No(s,l,n);return No(c,u,n)}const OW=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},CW=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ki(e,t,n){return e?OW(t,n):CW()}function oR(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function iR(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function aR(e){return e==="angle"?{between:nl,compare:T9,normalize:qt}:{between:pr,compare:(t,n)=>t-n,normalize:t=>t}}function H_({start:e,end:t,count:n,loop:r,style:o}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:o}}function TW(e,t,n){const{property:r,start:o,end:i}=n,{between:a,normalize:s}=aR(r),l=t.length;let{start:c,end:u,loop:f}=e,p,m;if(f){for(c+=l,u+=l,p=0,m=l;p<m&&a(s(t[c%l][r]),o,i);++p)c--,u--;c%=l,u%=l}return u<c&&(u+=l),{start:c,end:u,loop:f,style:e.style}}function sR(e,t,n){if(!n)return[e];const{property:r,start:o,end:i}=n,a=t.length,{compare:s,between:l,normalize:c}=aR(r),{start:u,end:f,loop:p,style:m}=TW(e,t,n),h=[];let b=!1,w=null,v,g,y;const _=()=>l(o,y,v)&&s(o,y)!==0,k=()=>s(i,v)===0||l(i,y,v),S=()=>b||_(),E=()=>!b||k();for(let C=u,A=u;C<=f;++C)g=t[C%a],!g.skip&&(v=c(g[r]),v!==y&&(b=l(v,o,i),w===null&&S()&&(w=s(v,o)===0?C:A),w!==null&&E()&&(h.push(H_({start:w,end:C,loop:p,count:a,style:m})),w=null),A=C,y=v));return w!==null&&h.push(H_({start:w,end:f,loop:p,count:a,style:m})),h}function lR(e,t){const n=[],r=e.segments;for(let o=0;o<r.length;o++){const i=sR(r[o],e.points,t);i.length&&n.push(...i)}return n}function RW(e,t,n,r){let o=0,i=t-1;if(n&&!r)for(;o<t&&!e[o].skip;)o++;for(;o<t&&e[o].skip;)o++;for(o%=t,n&&(i+=o);i>o&&e[i%t].skip;)i--;return i%=t,{start:o,end:i}}function PW(e,t,n,r){const o=e.length,i=[];let a=t,s=e[t],l;for(l=t+1;l<=n;++l){const c=e[l%o];c.skip||c.stop?s.skip||(r=!1,i.push({start:t%o,end:(l-1)%o,loop:r}),t=a=c.stop?l:null):(a=l,s.skip&&(t=l)),s=c}return a!==null&&i.push({start:t%o,end:a%o,loop:r}),i}function AW(e,t){const n=e.points,r=e.options.spanGaps,o=n.length;if(!o)return[];const i=!!e._loop,{start:a,end:s}=RW(n,o,i,r);if(r===!0)return U_(e,[{start:a,end:s,loop:i}],n,t);const l=s<a?s+o:s,c=!!e._fullLoop&&a===0&&s===o-1;return U_(e,PW(n,a,l,c),n,t)}function U_(e,t,n,r){return!r||!r.setContext||!n?t:IW(e,t,n,r)}function IW(e,t,n,r){const o=e._chart.getContext(),i=W_(e.options),{_datasetIndex:a,options:{spanGaps:s}}=e,l=n.length,c=[];let u=i,f=t[0].start,p=f;function m(h,b,w,v){const g=s?-1:1;if(h!==b){for(h+=l;n[h%l].skip;)h-=g;for(;n[b%l].skip;)b+=g;h%l!==b%l&&(c.push({start:h%l,end:b%l,loop:w,style:v}),u=v,f=b%l)}}for(const h of t){f=s?f:h.start;let b=n[f%l],w;for(p=f+1;p<=h.end;p++){const v=n[p%l];w=W_(r.setContext(So(o,{type:"segment",p0:b,p1:v,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:a}))),MW(w,u)&&m(f,p-1,h.loop,u),b=v,u=w}f<p-1&&m(f,p-1,h.loop,u)}return c}function W_(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function MW(e,t){if(!t)return!1;const n=[],r=function(o,i){return _v(i)?(n.includes(i)||n.push(i),n.indexOf(i)):i};return JSON.stringify(e,r)!==JSON.stringify(t,r)}/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */class jW{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,o){const i=n.listeners[o],a=n.duration;i.forEach(s=>s({chart:t,initial:n.initial,numSteps:a,currentStep:Math.min(r-n.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=V2.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,o)=>{if(!r.running||!r.items.length)return;const i=r.items;let a=i.length-1,s=!1,l;for(;a>=0;--a)l=i[a],l._active?(l._total>r.duration&&(r.duration=l._total),l.tick(t),s=!0):(i[a]=i[i.length-1],i.pop());s&&(o.draw(),this._notify(o,r,t,"progress")),i.length||(r.running=!1,this._notify(o,r,t,"complete"),r.initial=!1),n+=i.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,o)=>Math.max(r,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let o=r.length-1;for(;o>=0;--o)r[o].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ar=new jW;const V_="transparent",LW={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=L_(e||V_),o=r.valid&&L_(t||V_);return o&&o.valid?o.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class DW{constructor(t,n,r,o){const i=n[r];o=is([t.to,o,i,t.from]);const a=is([t.from,i,o]);this._active=!0,this._fn=t.fn||LW[t.type||typeof a],this._easing=ks[t.easing]||ks.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=a,this._to=o,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const o=this._target[this._prop],i=r-this._start,a=this._duration-i;this._start=r,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=is([t.to,n,o,t.from]),this._from=is([t.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,o=this._prop,i=this._from,a=this._loop,s=this._to;let l;if(this._active=i!==s&&(a||n<r),!this._active){this._target[o]=s,this._notify(!0);return}if(n<0){this._target[o]=i;return}l=n/r%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[o]=this._fn(i,s,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let o=0;o<r.length;o++)r[o][n]()}}class cR{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!be(t))return;const n=Object.keys(Qe.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{const i=t[o];if(!be(i))return;const a={};for(const s of n)a[s]=i[s];(Fe(i.properties)&&i.properties||[o]).forEach(s=>{(s===o||!r.has(s))&&r.set(s,a)})})}_animateOptions(t,n){const r=n.options,o=$W(t,r);if(!o)return[];const i=this._createAnimations(o,r);return r.$shared&&NW(t.options.$animations,r).then(()=>{t.options=r},()=>{}),i}_createAnimations(t,n){const r=this._properties,o=[],i=t.$animations||(t.$animations={}),a=Object.keys(n),s=Date.now();let l;for(l=a.length-1;l>=0;--l){const c=a[l];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(t,n));continue}const u=n[c];let f=i[c];const p=r.get(c);if(f)if(p&&f.active()){f.update(p,u,s);continue}else f.cancel();if(!p||!p.duration){t[c]=u;continue}i[c]=f=new DW(p,t,c,u),o.push(f)}return o}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return ar.add(this._chart,r),!0}}function NW(e,t){const n=[],r=Object.keys(t);for(let o=0;o<r.length;o++){const i=e[r[o]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function $W(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Y_(e,t){const n=e&&e.options||{},r=n.reverse,o=n.min===void 0?t:0,i=n.max===void 0?t:0;return{start:r?i:o,end:r?o:i}}function FW(e,t,n){if(n===!1)return!1;const r=Y_(e,n),o=Y_(t,n);return{top:o.end,right:r.end,bottom:o.start,left:r.start}}function zW(e){let t,n,r,o;return be(e)?(t=e.top,n=e.right,r=e.bottom,o=e.left):t=n=r=o=e,{top:t,right:n,bottom:r,left:o,disabled:e===!1}}function uR(e,t){const n=[],r=e._getSortedDatasetMetas(t);let o,i;for(o=0,i=r.length;o<i;++o)n.push(r[o].index);return n}function G_(e,t,n,r={}){const o=e.keys,i=r.mode==="single";let a,s,l,c;if(t!==null){for(a=0,s=o.length;a<s;++a){if(l=+o[a],l===n){if(r.all)continue;break}c=e.values[l],Ke(c)&&(i||t===0||tr(t)===tr(c))&&(t+=c)}return t}}function BW(e,t){const{iScale:n,vScale:r}=t,o=n.axis==="x"?"x":"y",i=r.axis==="x"?"x":"y",a=Object.keys(e),s=new Array(a.length);let l,c,u;for(l=0,c=a.length;l<c;++l)u=a[l],s[l]={[o]:u,[i]:e[u]};return s}function q_(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function HW(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function UW(e){const{min:t,max:n,minDefined:r,maxDefined:o}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function WW(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function X_(e,t,n,r){for(const o of t.getMatchingVisibleMetas(r).reverse()){const i=e[o.index];if(n&&i>0||!n&&i<0)return o.index}return null}function K_(e,t){const{chart:n,_cachedMeta:r}=e,o=n._stacks||(n._stacks={}),{iScale:i,vScale:a,index:s}=r,l=i.axis,c=a.axis,u=HW(i,a,r),f=t.length;let p;for(let m=0;m<f;++m){const h=t[m],{[l]:b,[c]:w}=h,v=h._stacks||(h._stacks={});p=v[c]=WW(o,u,b),p[s]=w,p._top=X_(p,a,!0,r.type),p._bottom=X_(p,a,!1,r.type);const g=p._visualValues||(p._visualValues={});g[s]=w}}function Vp(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function VW(e,t){return So(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function YW(e,t,n){return So(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Ua(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const o of t){const i=o._stacks;if(!i||i[r]===void 0||i[r][n]===void 0)return;delete i[r][n],i[r]._visualValues!==void 0&&i[r]._visualValues[n]!==void 0&&delete i[r]._visualValues[n]}}}const Yp=e=>e==="reset"||e==="none",Q_=(e,t)=>t?e:Object.assign({},e),GW=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:uR(n,!0),values:null};class jn{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=q_(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ua(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),o=(f,p,m,h)=>f==="x"?p:f==="r"?h:m,i=n.xAxisID=de(r.xAxisID,Vp(t,"x")),a=n.yAxisID=de(r.yAxisID,Vp(t,"y")),s=n.rAxisID=de(r.rAxisID,Vp(t,"r")),l=n.indexAxis,c=n.iAxisID=o(l,i,a,s),u=n.vAxisID=o(l,a,i,s);n.xScale=this.getScaleForId(i),n.yScale=this.getScaleForId(a),n.rScale=this.getScaleForId(s),n.iScale=this.getScaleForId(c),n.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&I_(this._data,this),t._stacked&&Ua(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(be(n)){const o=this._cachedMeta;this._data=BW(n,o)}else if(r!==n){if(r){I_(r,this);const o=this._cachedMeta;Ua(o),o._parsed=[]}n&&Object.isExtensible(n)&&I9(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let o=!1;this._dataCheck();const i=n._stacked;n._stacked=q_(n.vScale,n),n.stack!==r.stack&&(o=!0,Ua(n),n.stack=r.stack),this._resyncElements(t),(o||i!==n._stacked)&&K_(this,n._parsed)}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:o}=this,{iScale:i,_stacked:a}=r,s=i.axis;let l=t===0&&n===o.length?!0:r._sorted,c=t>0&&r._parsed[t-1],u,f,p;if(this._parsing===!1)r._parsed=o,r._sorted=!0,p=o;else{Fe(o[t])?p=this.parseArrayData(r,o,t,n):be(o[t])?p=this.parseObjectData(r,o,t,n):p=this.parsePrimitiveData(r,o,t,n);const m=()=>f[s]===null||c&&f[s]<c[s];for(u=0;u<n;++u)r._parsed[u+t]=f=p[u],l&&(m()&&(l=!1),c=f);r._sorted=l}a&&K_(this,p)}parsePrimitiveData(t,n,r,o){const{iScale:i,vScale:a}=t,s=i.axis,l=a.axis,c=i.getLabels(),u=i===a,f=new Array(o);let p,m,h;for(p=0,m=o;p<m;++p)h=p+r,f[p]={[s]:u||i.parse(c[h],h),[l]:a.parse(n[h],h)};return f}parseArrayData(t,n,r,o){const{xScale:i,yScale:a}=t,s=new Array(o);let l,c,u,f;for(l=0,c=o;l<c;++l)u=l+r,f=n[u],s[l]={x:i.parse(f[0],u),y:a.parse(f[1],u)};return s}parseObjectData(t,n,r,o){const{xScale:i,yScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=new Array(o);let u,f,p,m;for(u=0,f=o;u<f;++u)p=u+r,m=n[p],c[u]={x:i.parse(go(m,s),p),y:a.parse(go(m,l),p)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const o=this.chart,i=this._cachedMeta,a=n[t.axis],s={keys:uR(o,!0),values:n._stacks[t.axis]._visualValues};return G_(s,a,i.index,{mode:r})}updateRangeFromParsed(t,n,r,o){const i=r[n.axis];let a=i===null?NaN:i;const s=o&&r._stacks[n.axis];o&&s&&(o.values=s,a=G_(o,i,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,n){const r=this._cachedMeta,o=r._parsed,i=r._sorted&&t===r.iScale,a=o.length,s=this._getOtherScale(t),l=GW(n,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:f}=UW(s);let p,m;function h(){m=o[p];const b=m[s.axis];return!Ke(m[t.axis])||u>b||f<b}for(p=0;p<a&&!(!h()&&(this.updateRangeFromParsed(c,t,m,l),i));++p);if(i){for(p=a-1;p>=0;--p)if(!h()){this.updateRangeFromParsed(c,t,m,l);break}}return c}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let o,i,a;for(o=0,i=n.length;o<i;++o)a=n[o][t.axis],Ke(a)&&r.push(a);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,o=n.vScale,i=this.getParsed(t);return{label:r?""+r.getLabelForValue(i[r.axis]):"",value:o?""+o.getLabelForValue(i[o.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=zW(de(this.options.clip,FW(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,o=r.data||[],i=n.chartArea,a=[],s=this._drawStart||0,l=this._drawCount||o.length-s,c=this.options.drawActiveElementsOnTop;let u;for(r.dataset&&r.dataset.draw(t,i,s,l),u=s;u<s+l;++u){const f=o[u];f.hidden||(f.active&&c?a.push(f):f.draw(t,i))}for(u=0;u<a.length;++u)a[u].draw(t,i)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const o=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];i=a.$context||(a.$context=YW(this.getContext(),t,a)),i.parsed=this.getParsed(t),i.raw=o.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=VW(this.chart.getContext(),this.index)),i.dataset=o,i.index=i.datasetIndex=this.index;return i.active=!!n,i.mode=r,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const o=n==="active",i=this._cachedDataOpts,a=t+"-"+n,s=i[a],l=this.enableOptionSharing&&tl(r);if(s)return Q_(s,l);const c=this.chart.config,u=c.datasetElementScopeKeys(this._type,t),f=o?[`${t}Hover`,"hover",t,""]:[t,""],p=c.getOptionScopes(this.getDataset(),u),m=Object.keys(Qe.elements[t]),h=()=>this.getContext(r,o,n),b=c.resolveNamedOptions(p,m,h,f);return b.$shared&&(b.$shared=l,i[a]=Object.freeze(Q_(b,l))),b}_resolveAnimations(t,n,r){const o=this.chart,i=this._cachedDataOpts,a=`animation-${n}`,s=i[a];if(s)return s;let l;if(o.options.animation!==!1){const u=this.chart.config,f=u.datasetAnimationScopeKeys(this._type,n),p=u.getOptionScopes(this.getDataset(),f);l=u.createResolver(p,this.getContext(t,r,n))}const c=new cR(o,l&&l.animations);return l&&l._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||Yp(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),o=this._sharedOptions,i=this.getSharedOptions(r),a=this.includeOptions(n,i)||i!==o;return this.updateSharedOptions(i,n,r),{sharedOptions:i,includeOptions:a}}updateElement(t,n,r,o){Yp(o)?Object.assign(t,r):this._resolveAnimations(n,o).update(t,r)}updateSharedOptions(t,n,r){t&&!Yp(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,o){t.active=o;const i=this.getStyle(n,o);this._resolveAnimations(n,r,o).update(t,{options:!o&&this.getSharedOptions(i)||i})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[s,l,c]of this._syncList)this[s](l,c);this._syncList=[];const o=r.length,i=n.length,a=Math.min(i,o);a&&this.parse(0,a),i>o?this._insertElements(o,i-o,t):i<o&&this._removeElements(i,o-i)}_insertElements(t,n,r=!0){const o=this._cachedMeta,i=o.data,a=t+n;let s;const l=c=>{for(c.length+=n,s=c.length-1;s>=a;s--)c[s]=c[s-n]};for(l(i),s=t;s<a;++s)i[s]=new this.dataElementType;this._parsing&&l(o._parsed),this.parse(t,n),r&&this.updateElements(i,t,n,"reset")}updateElements(t,n,r,o){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const o=r._parsed.splice(t,n);r._stacked&&Ua(r,o)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,o]=t;this[n](r,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}H(jn,"defaults",{}),H(jn,"datasetElementType",null),H(jn,"dataElementType",null);function qW(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let o=0,i=n.length;o<i;o++)r=r.concat(n[o].controller.getAllParsedValues(e));e._cache.$bar=W2(r.sort((o,i)=>o-i))}return e._cache.$bar}function XW(e){const t=e.iScale,n=qW(t,e.type);let r=t._length,o,i,a,s;const l=()=>{a===32767||a===-32768||(tl(s)&&(r=Math.min(r,Math.abs(a-s)||r)),s=a)};for(o=0,i=n.length;o<i;++o)a=t.getPixelForValue(n[o]),l();for(s=void 0,o=0,i=t.ticks.length;o<i;++o)a=t.getPixelForTick(o),l();return r}function KW(e,t,n,r){const o=n.barThickness;let i,a;return xe(o)?(i=t.min*n.categoryPercentage,a=n.barPercentage):(i=o*r,a=1),{chunk:i/r,ratio:a,start:t.pixels[e]-i/2}}function QW(e,t,n,r){const o=t.pixels,i=o[e];let a=e>0?o[e-1]:null,s=e<o.length-1?o[e+1]:null;const l=n.categoryPercentage;a===null&&(a=i-(s===null?t.end-t.start:s-i)),s===null&&(s=i+i-a);const c=i-(i-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/r,ratio:n.barPercentage,start:c}}function JW(e,t,n,r){const o=n.parse(e[0],r),i=n.parse(e[1],r),a=Math.min(o,i),s=Math.max(o,i);let l=a,c=s;Math.abs(a)>Math.abs(s)&&(l=s,c=a),t[n.axis]=c,t._custom={barStart:l,barEnd:c,start:o,end:i,min:a,max:s}}function dR(e,t,n,r){return Fe(e)?JW(e,t,n,r):t[n.axis]=n.parse(e,r),t}function J_(e,t,n,r){const o=e.iScale,i=e.vScale,a=o.getLabels(),s=o===i,l=[];let c,u,f,p;for(c=n,u=n+r;c<u;++c)p=t[c],f={},f[o.axis]=s||o.parse(a[c],c),l.push(dR(p,f,i,c));return l}function Gp(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function ZW(e,t,n){return e!==0?tr(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function eV(e){let t,n,r,o,i;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(o="end",i="start"):(o="start",i="end"),{start:n,end:r,reverse:t,top:o,bottom:i}}function tV(e,t,n,r){let o=t.borderSkipped;const i={};if(!o){e.borderSkipped=i;return}if(o===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:s,reverse:l,top:c,bottom:u}=eV(e);o==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?o=c:(n._bottom||0)===r?o=u:(i[Z_(u,a,s,l)]=!0,o=c)),i[Z_(o,a,s,l)]=!0,e.borderSkipped=i}function Z_(e,t,n,r){return r?(e=nV(e,t,n),e=eS(e,n,t)):e=eS(e,t,n),e}function nV(e,t,n){return e===t?n:e===n?t:e}function eS(e,t,n){return e==="start"?t:e==="end"?n:e}function rV(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Os extends jn{parsePrimitiveData(t,n,r,o){return J_(t,n,r,o)}parseArrayData(t,n,r,o){return J_(t,n,r,o)}parseObjectData(t,n,r,o){const{iScale:i,vScale:a}=t,{xAxisKey:s="x",yAxisKey:l="y"}=this._parsing,c=i.axis==="x"?s:l,u=a.axis==="x"?s:l,f=[];let p,m,h,b;for(p=r,m=r+o;p<m;++p)b=n[p],h={},h[i.axis]=i.parse(go(b,c),p),f.push(dR(go(b,u),h,a,p));return f}updateRangeFromParsed(t,n,r,o){super.updateRangeFromParsed(t,n,r,o);const i=r._custom;i&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:o}=n,i=this.getParsed(t),a=i._custom,s=Gp(a)?"["+a.start+", "+a.end+"]":""+o.getLabelForValue(i[o.axis]);return{label:""+r.getLabelForValue(i[r.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,o){const i=o==="reset",{index:a,_cachedMeta:{vScale:s}}=this,l=s.getBasePixel(),c=s.isHorizontal(),u=this._getRuler(),{sharedOptions:f,includeOptions:p}=this._getSharedOptions(n,o);for(let m=n;m<n+r;m++){const h=this.getParsed(m),b=i||xe(h[s.axis])?{base:l,head:l}:this._calculateBarValuePixels(m),w=this._calculateBarIndexPixels(m,u),v=(h._stacks||{})[s.axis],g={horizontal:c,base:b.base,enableBorderRadius:!v||Gp(h._custom)||a===v._top||a===v._bottom,x:c?b.head:w.center,y:c?w.center:b.head,height:c?w.size:Math.abs(b.size),width:c?Math.abs(b.size):w.size};p&&(g.options=f||this.resolveDataElementOptions(m,t[m].active?"active":o));const y=g.options||t[m].options;tV(g,y,v,a),rV(g,y,u.ratio),this.updateElement(t[m],m,g,o)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,o=r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),i=r.options.stacked,a=[],s=l=>{const c=l.controller.getParsed(n),u=c&&c[l.vScale.axis];if(xe(u)||isNaN(u))return!0};for(const l of o)if(!(n!==void 0&&s(l))&&((i===!1||a.indexOf(l.stack)===-1||i===void 0&&l.stack===void 0)&&a.push(l.stack),l.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,n,r){const o=this._getStacks(t,r),i=n!==void 0?o.indexOf(n):-1;return i===-1?o.length-1:i}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,o=[];let i,a;for(i=0,a=n.data.length;i<a;++i)o.push(r.getPixelForValue(this.getParsed(i)[r.axis],i));const s=t.barThickness;return{min:s||XW(n),pixels:o,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:o},options:{base:i,minBarLength:a}}=this,s=i||0,l=this.getParsed(t),c=l._custom,u=Gp(c);let f=l[n.axis],p=0,m=r?this.applyStack(n,l,r):f,h,b;m!==f&&(p=m-f,m=f),u&&(f=c.barStart,m=c.barEnd-c.barStart,f!==0&&tr(f)!==tr(c.barEnd)&&(p=0),p+=f);const w=!xe(i)&&!u?i:p;let v=n.getPixelForValue(w);if(this.chart.getDataVisibility(t)?h=n.getPixelForValue(p+m):h=v,b=h-v,Math.abs(b)<a){b=ZW(b,n,s)*a,f===s&&(v-=b/2);const g=n.getPixelForDecimal(0),y=n.getPixelForDecimal(1),_=Math.min(g,y),k=Math.max(g,y);v=Math.max(Math.min(v,k),_),h=v+b,r&&!u&&(l._stacks[n.axis]._visualValues[o]=n.getValueForPixel(h)-n.getValueForPixel(v))}if(v===n.getPixelForValue(s)){const g=tr(b)*n.getLineWidthForValue(s)/2;v+=g,b-=g}return{size:b,base:v,head:h,center:h+b/2}}_calculateBarIndexPixels(t,n){const r=n.scale,o=this.options,i=o.skipNull,a=de(o.maxBarThickness,1/0);let s,l;if(n.grouped){const c=i?this._getStackCount(t):n.stackCount,u=o.barThickness==="flex"?QW(t,n,o,c):KW(t,n,o,c),f=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0);s=u.start+u.chunk*f+u.chunk/2,l=Math.min(a,u.chunk*u.ratio)}else s=r.getPixelForValue(this.getParsed(t)[r.axis],t),l=Math.min(a,n.min*n.ratio);return{base:s-l/2,head:s+l/2,center:s,size:l}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,o=r.length;let i=0;for(;i<o;++i)this.getParsed(i)[n.axis]!==null&&!r[i].hidden&&r[i].draw(this._ctx)}}H(Os,"id","bar"),H(Os,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),H(Os,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Kc extends jn{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,n,r,o){const i=super.parsePrimitiveData(t,n,r,o);for(let a=0;a<i.length;a++)i[a]._custom=this.resolveDataElementOptions(a+r).radius;return i}parseArrayData(t,n,r,o){const i=super.parseArrayData(t,n,r,o);for(let a=0;a<i.length;a++){const s=n[r+a];i[a]._custom=de(s[2],this.resolveDataElementOptions(a+r).radius)}return i}parseObjectData(t,n,r,o){const i=super.parseObjectData(t,n,r,o);for(let a=0;a<i.length;a++){const s=n[r+a];i[a]._custom=de(s&&s.r&&+s.r,this.resolveDataElementOptions(a+r).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let n=0;for(let r=t.length-1;r>=0;--r)n=Math.max(n,t[r].size(this.resolveDataElementOptions(r))/2);return n>0&&n}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:o,yScale:i}=n,a=this.getParsed(t),s=o.getLabelForValue(a.x),l=i.getLabelForValue(a.y),c=a._custom;return{label:r[t]||"",value:"("+s+", "+l+(c?", "+c:"")+")"}}update(t){const n=this._cachedMeta.data;this.updateElements(n,0,n.length,t)}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(n,o),u=a.axis,f=s.axis;for(let p=n;p<n+r;p++){const m=t[p],h=!i&&this.getParsed(p),b={},w=b[u]=i?a.getPixelForDecimal(.5):a.getPixelForValue(h[u]),v=b[f]=i?s.getBasePixel():s.getPixelForValue(h[f]);b.skip=isNaN(w)||isNaN(v),c&&(b.options=l||this.resolveDataElementOptions(p,m.active?"active":o),i&&(b.options.radius=0)),this.updateElement(m,p,b,o)}}resolveDataElementOptions(t,n){const r=this.getParsed(t);let o=super.resolveDataElementOptions(t,n);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const i=o.radius;return n!=="active"&&(o.radius=0),o.radius+=de(r&&r._custom,i),o}}H(Kc,"id","bubble"),H(Kc,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),H(Kc,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function oV(e,t,n){let r=1,o=1,i=0,a=0;if(t<je){const s=e,l=s+t,c=Math.cos(s),u=Math.sin(s),f=Math.cos(l),p=Math.sin(l),m=(y,_,k)=>nl(y,s,l,!0)?1:Math.max(_,_*n,k,k*n),h=(y,_,k)=>nl(y,s,l,!0)?-1:Math.min(_,_*n,k,k*n),b=m(0,c,f),w=m(nt,u,p),v=h(Le,c,f),g=h(Le+nt,u,p);r=(b-v)/2,o=(w-g)/2,i=-(b+v)/2,a=-(w+g)/2}return{ratioX:r,ratioY:o,offsetX:i,offsetY:a}}class Uo extends jn{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=r;else{let i=l=>+r[l];if(be(r[t])){const{key:l="value"}=this._parsing;i=c=>+go(r[c],l)}let a,s;for(a=t,s=t+n;a<s;++a)o._parsed[a]=i(a)}}_getRotation(){return Rn(this.options.rotation-90)}_getCircumference(){return Rn(this.options.circumference)}_getRotationExtents(){let t=je,n=-je;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const o=this.chart.getDatasetMeta(r).controller,i=o._getRotation(),a=o._getCircumference();t=Math.min(t,i),n=Math.max(n,i+a)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,o=this._cachedMeta,i=o.data,a=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,s=Math.max((Math.min(r.width,r.height)-a)/2,0),l=Math.min(v9(this.options.cutout,s),1),c=this._getRingWeight(this.index),{circumference:u,rotation:f}=this._getRotationExtents(),{ratioX:p,ratioY:m,offsetX:h,offsetY:b}=oV(f,u,l),w=(r.width-a)/p,v=(r.height-a)/m,g=Math.max(Math.min(w,v)/2,0),y=F2(this.options.radius,g),_=Math.max(y*l,0),k=(y-_)/this._getVisibleDatasetWeightTotal();this.offsetX=h*y,this.offsetY=b*y,o.total=this.calculateTotal(),this.outerRadius=y-k*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-k*c,0),this.updateElements(i,0,i.length,t)}_circumference(t,n){const r=this.options,o=this._cachedMeta,i=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||o._parsed[t]===null||o.data[t].hidden?0:this.calculateCircumference(o._parsed[t]*i/je)}updateElements(t,n,r,o){const i=o==="reset",a=this.chart,s=a.chartArea,c=a.options.animation,u=(s.left+s.right)/2,f=(s.top+s.bottom)/2,p=i&&c.animateScale,m=p?0:this.innerRadius,h=p?0:this.outerRadius,{sharedOptions:b,includeOptions:w}=this._getSharedOptions(n,o);let v=this._getRotation(),g;for(g=0;g<n;++g)v+=this._circumference(g,i);for(g=n;g<n+r;++g){const y=this._circumference(g,i),_=t[g],k={x:u+this.offsetX,y:f+this.offsetY,startAngle:v,endAngle:v+y,circumference:y,outerRadius:h,innerRadius:m};w&&(k.options=b||this.resolveDataElementOptions(g,_.active?"active":o)),v+=y,this.updateElement(_,g,k,o)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,o;for(o=0;o<n.length;o++){const i=t._parsed[o];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(r+=Math.abs(i))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?je*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,o=r.data.labels||[],i=Rl(n._parsed[t],r.options.locale);return{label:o[t]||"",value:i}}getMaxBorderWidth(t){let n=0;const r=this.chart;let o,i,a,s,l;if(!t){for(o=0,i=r.data.datasets.length;o<i;++o)if(r.isDatasetVisible(o)){a=r.getDatasetMeta(o),t=a.data,s=a.controller;break}}if(!t)return 0;for(o=0,i=t.length;o<i;++o)l=s.resolveDataElementOptions(o),l.borderAlign!=="inner"&&(n=Math.max(n,l.borderWidth||0,l.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,o=t.length;r<o;++r){const i=this.resolveDataElementOptions(r);n=Math.max(n,i.offset||0,i.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(de(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}H(Uo,"id","doughnut"),H(Uo,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),H(Uo,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),H(Uo,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:o}}=t.legend.options;return n.labels.map((i,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:i,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:o,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class Qc extends jn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:o=[],_dataset:i}=n,a=this.chart._animationsDisabled;let{start:s,count:l}=G2(n,o,a);this._drawStart=s,this._drawCount=l,q2(n)&&(s=0,l=o.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!i._decimated,r.points=o;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(r,void 0,{animated:!a,options:c},t),this.updateElements(o,s,l,t)}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:u,includeOptions:f}=this._getSharedOptions(n,o),p=a.axis,m=s.axis,{spanGaps:h,segment:b}=this.options,w=ua(h)?h:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||i||o==="none",g=n+r,y=t.length;let _=n>0&&this.getParsed(n-1);for(let k=0;k<y;++k){const S=t[k],E=v?S:{};if(k<n||k>=g){E.skip=!0;continue}const C=this.getParsed(k),A=xe(C[m]),P=E[p]=a.getPixelForValue(C[p],k),L=E[m]=i||A?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,C,l):C[m],k);E.skip=isNaN(P)||isNaN(L)||A,E.stop=k>0&&Math.abs(C[p]-_[p])>w,b&&(E.parsed=C,E.raw=c.data[k]),f&&(E.options=u||this.resolveDataElementOptions(k,S.active?"active":o)),v||this.updateElement(S,k,E,o),_=C}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,o=t.data||[];if(!o.length)return r;const i=o[0].size(this.resolveDataElementOptions(0)),a=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(r,i,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}H(Qc,"id","line"),H(Qc,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),H(Qc,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Cs extends jn{constructor(t,n){super(t,n),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,o=r.data.labels||[],i=Rl(n._parsed[t].r,r.options.locale);return{label:o[t]||"",value:i}}parseObjectData(t,n,r,o){return nR.bind(this)(t,n,r,o)}update(t){const n=this._cachedMeta.data;this._updateRadius(),this.updateElements(n,0,n.length,t)}getMinMax(){const t=this._cachedMeta,n={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((r,o)=>{const i=this.getParsed(o).r;!isNaN(i)&&this.chart.getDataVisibility(o)&&(i<n.min&&(n.min=i),i>n.max&&(n.max=i))}),n}_updateRadius(){const t=this.chart,n=t.chartArea,r=t.options,o=Math.min(n.right-n.left,n.bottom-n.top),i=Math.max(o/2,0),a=Math.max(r.cutoutPercentage?i/100*r.cutoutPercentage:1,0),s=(i-a)/t.getVisibleDatasetCount();this.outerRadius=i-s*this.index,this.innerRadius=this.outerRadius-s}updateElements(t,n,r,o){const i=o==="reset",a=this.chart,l=a.options.animation,c=this._cachedMeta.rScale,u=c.xCenter,f=c.yCenter,p=c.getIndexAngle(0)-.5*Le;let m=p,h;const b=360/this.countVisibleElements();for(h=0;h<n;++h)m+=this._computeAngle(h,o,b);for(h=n;h<n+r;h++){const w=t[h];let v=m,g=m+this._computeAngle(h,o,b),y=a.getDataVisibility(h)?c.getDistanceFromCenterForValue(this.getParsed(h).r):0;m=g,i&&(l.animateScale&&(y=0),l.animateRotate&&(v=g=p));const _={x:u,y:f,innerRadius:0,outerRadius:y,startAngle:v,endAngle:g,options:this.resolveDataElementOptions(h,w.active?"active":o)};this.updateElement(w,h,_,o)}}countVisibleElements(){const t=this._cachedMeta;let n=0;return t.data.forEach((r,o)=>{!isNaN(this.getParsed(o).r)&&this.chart.getDataVisibility(o)&&n++}),n}_computeAngle(t,n,r){return this.chart.getDataVisibility(t)?Rn(this.resolveDataElementOptions(t,n).angle||r):0}}H(Cs,"id","polarArea"),H(Cs,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),H(Cs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data;if(n.labels.length&&n.datasets.length){const{labels:{pointStyle:r,color:o}}=t.legend.options;return n.labels.map((i,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:i,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:o,lineWidth:l.borderWidth,pointStyle:r,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class od extends Uo{}H(od,"id","pie"),H(od,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Jc extends jn{getLabelAndValue(t){const n=this._cachedMeta.vScale,r=this.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(r[n.axis])}}parseObjectData(t,n,r,o){return nR.bind(this)(t,n,r,o)}update(t){const n=this._cachedMeta,r=n.dataset,o=n.data||[],i=n.iScale.getLabels();if(r.points=o,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const s={_loop:!0,_fullLoop:i.length===o.length,options:a};this.updateElement(r,void 0,s,t)}this.updateElements(o,0,o.length,t)}updateElements(t,n,r,o){const i=this._cachedMeta.rScale,a=o==="reset";for(let s=n;s<n+r;s++){const l=t[s],c=this.resolveDataElementOptions(s,l.active?"active":o),u=i.getPointPositionForValue(s,this.getParsed(s).r),f=a?i.xCenter:u.x,p=a?i.yCenter:u.y,m={x:f,y:p,angle:u.angle,skip:isNaN(f)||isNaN(p),options:c};this.updateElement(l,s,m,o)}}}H(Jc,"id","radar"),H(Jc,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),H(Jc,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Zc extends jn{getLabelAndValue(t){const n=this._cachedMeta,r=this.chart.data.labels||[],{xScale:o,yScale:i}=n,a=this.getParsed(t),s=o.getLabelForValue(a.x),l=i.getLabelForValue(a.y);return{label:r[t]||"",value:"("+s+", "+l+")"}}update(t){const n=this._cachedMeta,{data:r=[]}=n,o=this.chart._animationsDisabled;let{start:i,count:a}=G2(n,r,o);if(this._drawStart=i,this._drawCount=a,q2(n)&&(i=0,a=r.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:s,_dataset:l}=n;s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!l._decimated,s.points=r;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:c},t)}else this.datasetElementType&&(delete n.dataset,this.datasetElementType=!1);this.updateElements(r,i,a,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,n,r,o){const i=o==="reset",{iScale:a,vScale:s,_stacked:l,_dataset:c}=this._cachedMeta,u=this.resolveDataElementOptions(n,o),f=this.getSharedOptions(u),p=this.includeOptions(o,f),m=a.axis,h=s.axis,{spanGaps:b,segment:w}=this.options,v=ua(b)?b:Number.POSITIVE_INFINITY,g=this.chart._animationsDisabled||i||o==="none";let y=n>0&&this.getParsed(n-1);for(let _=n;_<n+r;++_){const k=t[_],S=this.getParsed(_),E=g?k:{},C=xe(S[h]),A=E[m]=a.getPixelForValue(S[m],_),P=E[h]=i||C?s.getBasePixel():s.getPixelForValue(l?this.applyStack(s,S,l):S[h],_);E.skip=isNaN(A)||isNaN(P)||C,E.stop=_>0&&Math.abs(S[m]-y[m])>v,w&&(E.parsed=S,E.raw=c.data[_]),p&&(E.options=f||this.resolveDataElementOptions(_,k.active?"active":o)),g||this.updateElement(k,_,E,o),y=S}this.updateSharedOptions(f,o,u)}getMaxOverflow(){const t=this._cachedMeta,n=t.data||[];if(!this.options.showLine){let s=0;for(let l=n.length-1;l>=0;--l)s=Math.max(s,n[l].size(this.resolveDataElementOptions(l))/2);return s>0&&s}const r=t.dataset,o=r.options&&r.options.borderWidth||0;if(!n.length)return o;const i=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(o,i,a)/2}}H(Zc,"id","scatter"),H(Zc,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),H(Zc,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var iV=Object.freeze({__proto__:null,BarController:Os,BubbleController:Kc,DoughnutController:Uo,LineController:Qc,PieController:od,PolarAreaController:Cs,RadarController:Jc,ScatterController:Zc});function Po(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Rv{constructor(t){H(this,"options");this.options=t||{}}static override(t){Object.assign(Rv.prototype,t)}init(){}formats(){return Po()}parse(){return Po()}format(){return Po()}add(){return Po()}diff(){return Po()}startOf(){return Po()}endOf(){return Po()}}var aV={_date:Rv};function sV(e,t,n,r){const{controller:o,data:i,_sorted:a}=e,s=o._cachedMeta.iScale;if(s&&t===s.axis&&t!=="r"&&a&&i.length){const l=s._reversePixels?P9:hr;if(r){if(o._sharedOptions){const c=i[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const f=l(i,t,n-u),p=l(i,t,n+u);return{lo:f.lo,hi:p.hi}}}}else return l(i,t,n)}return{lo:0,hi:i.length-1}}function Pl(e,t,n,r,o){const i=e.getSortedVisibleDatasetMetas(),a=n[t];for(let s=0,l=i.length;s<l;++s){const{index:c,data:u}=i[s],{lo:f,hi:p}=sV(i[s],t,a,o);for(let m=f;m<=p;++m){const h=u[m];h.skip||r(h,c,m)}}}function lV(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,o){const i=t?Math.abs(r.x-o.x):0,a=n?Math.abs(r.y-o.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(a,2))}}function qp(e,t,n,r,o){const i=[];return!o&&!e.isPointInArea(t)||Pl(e,n,t,function(s,l,c){!o&&!mr(s,e.chartArea,0)||s.inRange(t.x,t.y,r)&&i.push({element:s,datasetIndex:l,index:c})},!0),i}function cV(e,t,n,r){let o=[];function i(a,s,l){const{startAngle:c,endAngle:u}=a.getProps(["startAngle","endAngle"],r),{angle:f}=H2(a,{x:t.x,y:t.y});nl(f,c,u)&&o.push({element:a,datasetIndex:s,index:l})}return Pl(e,n,t,i),o}function uV(e,t,n,r,o,i){let a=[];const s=lV(n);let l=Number.POSITIVE_INFINITY;function c(u,f,p){const m=u.inRange(t.x,t.y,o);if(r&&!m)return;const h=u.getCenterPoint(o);if(!(!!i||e.isPointInArea(h))&&!m)return;const w=s(t,h);w<l?(a=[{element:u,datasetIndex:f,index:p}],l=w):w===l&&a.push({element:u,datasetIndex:f,index:p})}return Pl(e,n,t,c),a}function Xp(e,t,n,r,o,i){return!i&&!e.isPointInArea(t)?[]:n==="r"&&!r?cV(e,t,n,o):uV(e,t,n,r,o,i)}function tS(e,t,n,r,o){const i=[],a=n==="x"?"inXRange":"inYRange";let s=!1;return Pl(e,n,t,(l,c,u)=>{l[a](t[n],o)&&(i.push({element:l,datasetIndex:c,index:u}),s=s||l.inRange(t.x,t.y,o))}),r&&!s?[]:i}var dV={evaluateInteractionItems:Pl,modes:{index(e,t,n,r){const o=Do(t,e),i=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?qp(e,o,i,r,a):Xp(e,o,i,!1,r,a),l=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const u=s[0].index,f=c.data[u];f&&!f.skip&&l.push({element:f,datasetIndex:c.index,index:u})}),l):[]},dataset(e,t,n,r){const o=Do(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?qp(e,o,i,r,a):Xp(e,o,i,!1,r,a);if(s.length>0){const l=s[0].datasetIndex,c=e.getDatasetMeta(l).data;s=[];for(let u=0;u<c.length;++u)s.push({element:c[u],datasetIndex:l,index:u})}return s},point(e,t,n,r){const o=Do(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return qp(e,o,i,r,a)},nearest(e,t,n,r){const o=Do(t,e),i=n.axis||"xy",a=n.includeInvisible||!1;return Xp(e,o,i,n.intersect,r,a)},x(e,t,n,r){const o=Do(t,e);return tS(e,o,"x",n.intersect,r)},y(e,t,n,r){const o=Do(t,e);return tS(e,o,"y",n.intersect,r)}}};const fR=["left","top","right","bottom"];function Wa(e,t){return e.filter(n=>n.pos===t)}function nS(e,t){return e.filter(n=>fR.indexOf(n.pos)===-1&&n.box.axis===t)}function Va(e,t){return e.sort((n,r)=>{const o=t?r:n,i=t?n:r;return o.weight===i.weight?o.index-i.index:o.weight-i.weight})}function fV(e){const t=[];let n,r,o,i,a,s;for(n=0,r=(e||[]).length;n<r;++n)o=e[n],{position:i,options:{stack:a,stackWeight:s=1}}=o,t.push({index:n,box:o,pos:i,horizontal:o.isHorizontal(),weight:o.weight,stack:a&&i+a,stackWeight:s});return t}function pV(e){const t={};for(const n of e){const{stack:r,pos:o,stackWeight:i}=n;if(!r||!fR.includes(o))continue;const a=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function hV(e,t){const n=pV(e),{vBoxMaxWidth:r,hBoxMaxHeight:o}=t;let i,a,s;for(i=0,a=e.length;i<a;++i){s=e[i];const{fullSize:l}=s.box,c=n[s.stack],u=c&&s.stackWeight/c.weight;s.horizontal?(s.width=u?u*r:l&&t.availableWidth,s.height=o):(s.width=r,s.height=u?u*o:l&&t.availableHeight)}return n}function mV(e){const t=fV(e),n=Va(t.filter(c=>c.box.fullSize),!0),r=Va(Wa(t,"left"),!0),o=Va(Wa(t,"right")),i=Va(Wa(t,"top"),!0),a=Va(Wa(t,"bottom")),s=nS(t,"x"),l=nS(t,"y");return{fullSize:n,leftAndTop:r.concat(i),rightAndBottom:o.concat(l).concat(a).concat(s),chartArea:Wa(t,"chartArea"),vertical:r.concat(o).concat(l),horizontal:i.concat(a).concat(s)}}function rS(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function pR(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function gV(e,t,n,r){const{pos:o,box:i}=n,a=e.maxPadding;if(!be(o)){n.size&&(e[o]-=n.size);const f=r[n.stack]||{size:0,count:1};f.size=Math.max(f.size,n.horizontal?i.height:i.width),n.size=f.size/f.count,e[o]+=n.size}i.getPadding&&pR(a,i.getPadding());const s=Math.max(0,t.outerWidth-rS(a,e,"left","right")),l=Math.max(0,t.outerHeight-rS(a,e,"top","bottom")),c=s!==e.w,u=l!==e.h;return e.w=s,e.h=l,n.horizontal?{same:c,other:u}:{same:u,other:c}}function bV(e){const t=e.maxPadding;function n(r){const o=Math.max(t[r]-e[r],0);return e[r]+=o,o}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function vV(e,t){const n=t.maxPadding;function r(o){const i={left:0,top:0,right:0,bottom:0};return o.forEach(a=>{i[a]=Math.max(t[a],n[a])}),i}return r(e?["left","right"]:["top","bottom"])}function as(e,t,n,r){const o=[];let i,a,s,l,c,u;for(i=0,a=e.length,c=0;i<a;++i){s=e[i],l=s.box,l.update(s.width||t.w,s.height||t.h,vV(s.horizontal,t));const{same:f,other:p}=gV(t,n,s,r);c|=f&&o.length,u=u||p,l.fullSize||o.push(s)}return c&&as(o,t,n,r)||u}function wc(e,t,n,r,o){e.top=n,e.left=t,e.right=t+r,e.bottom=n+o,e.width=r,e.height=o}function oS(e,t,n,r){const o=n.padding;let{x:i,y:a}=t;for(const s of e){const l=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},u=s.stackWeight/c.weight||1;if(s.horizontal){const f=t.w*u,p=c.size||l.height;tl(c.start)&&(a=c.start),l.fullSize?wc(l,o.left,a,n.outerWidth-o.right-o.left,p):wc(l,t.left+c.placed,a,f,p),c.start=a,c.placed+=f,a=l.bottom}else{const f=t.h*u,p=c.size||l.width;tl(c.start)&&(i=c.start),l.fullSize?wc(l,i,o.top,p,n.outerHeight-o.bottom-o.top):wc(l,i,t.top+c.placed,p,f),c.start=i,c.placed+=f,i=l.right}}t.x=i,t.y=a}var kt={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const o=Ot(e.options.layout.padding),i=Math.max(t-o.width,0),a=Math.max(n-o.height,0),s=mV(e.boxes),l=s.vertical,c=s.horizontal;Se(e.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const u=l.reduce((b,w)=>w.box.options&&w.box.options.display===!1?b:b+1,0)||1,f=Object.freeze({outerWidth:t,outerHeight:n,padding:o,availableWidth:i,availableHeight:a,vBoxMaxWidth:i/2/u,hBoxMaxHeight:a/2}),p=Object.assign({},o);pR(p,Ot(r));const m=Object.assign({maxPadding:p,w:i,h:a,x:o.left,y:o.top},o),h=hV(l.concat(c),f);as(s.fullSize,m,f,h),as(l,m,f,h),as(c,m,f,h)&&as(l,m,f,h),bV(m),oS(s.leftAndTop,m,f,h),m.x+=m.w,m.y+=m.h,oS(s.rightAndBottom,m,f,h),e.chartArea={left:m.left,top:m.top,right:m.left+m.w,bottom:m.top+m.h,height:m.h,width:m.w},Se(s.chartArea,b=>{const w=b.box;Object.assign(w,e.chartArea),w.update(m.w,m.h,{left:0,top:0,right:0,bottom:0})})}};class hR{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,o){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,o?Math.floor(n/o):r)}}isAttached(t){return!0}updateConfig(t){}}class yV extends hR{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const eu="$chartjs",xV={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},iS=e=>e===null||e==="";function wV(e,t){const n=e.style,r=e.getAttribute("height"),o=e.getAttribute("width");if(e[eu]={initial:{height:r,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",iS(o)){const i=B_(e,"width");i!==void 0&&(e.width=i)}if(iS(r))if(e.style.height==="")e.height=e.width/(t||2);else{const i=B_(e,"height");i!==void 0&&(e.height=i)}return e}const mR=SW?{passive:!0}:!1;function _V(e,t,n){e&&e.addEventListener(t,n,mR)}function SV(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,mR)}function kV(e,t){const n=xV[e.type]||e.type,{x:r,y:o}=Do(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:o!==void 0?o:null}}function id(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function EV(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||id(s.addedNodes,r),a=a&&!id(s.removedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function OV(e,t,n){const r=e.canvas,o=new MutationObserver(i=>{let a=!1;for(const s of i)a=a||id(s.removedNodes,r),a=a&&!id(s.addedNodes,r);a&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const ol=new Map;let aS=0;function gR(){const e=window.devicePixelRatio;e!==aS&&(aS=e,ol.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function CV(e,t){ol.size||window.addEventListener("resize",gR),ol.set(e,t)}function TV(e){ol.delete(e),ol.size||window.removeEventListener("resize",gR)}function RV(e,t,n){const r=e.canvas,o=r&&Tv(r);if(!o)return;const i=Y2((s,l)=>{const c=o.clientWidth;n(s,l),c<o.clientWidth&&n()},window),a=new ResizeObserver(s=>{const l=s[0],c=l.contentRect.width,u=l.contentRect.height;c===0&&u===0||i(c,u)});return a.observe(o),CV(e,i),a}function Kp(e,t,n){n&&n.disconnect(),t==="resize"&&TV(e)}function PV(e,t,n){const r=e.canvas,o=Y2(i=>{e.ctx!==null&&n(kV(i,e))},e);return _V(r,t,o),o}class AV extends hR{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(wV(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[eu])return!1;const r=n[eu].initial;["height","width"].forEach(i=>{const a=r[i];xe(a)?n.removeAttribute(i):n.setAttribute(i,a)});const o=r.style||{};return Object.keys(o).forEach(i=>{n.style[i]=o[i]}),n.width=n.width,delete n[eu],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const o=t.$proxies||(t.$proxies={}),a={attach:EV,detach:OV,resize:RV}[n]||PV;o[n]=a(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),o=r[n];if(!o)return;({attach:Kp,detach:Kp,resize:Kp}[n]||SV)(t,n,o),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,o){return _W(t,n,r,o)}isAttached(t){const n=t&&Tv(t);return!!(n&&n.isConnected)}}function IV(e){return!Cv()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?yV:AV}var Rc;let Ir=(Rc=class{constructor(){H(this,"x");H(this,"y");H(this,"active",!1);H(this,"options");H(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return ua(this.x)&&ua(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const o={};return t.forEach(i=>{o[i]=r[i]&&r[i].active()?r[i]._to:this[i]}),o}},H(Rc,"defaults",{}),H(Rc,"defaultRoutes"),Rc);function MV(e,t){const n=e.options.ticks,r=jV(e),o=Math.min(n.maxTicksLimit||r,r),i=n.major.enabled?DV(t):[],a=i.length,s=i[0],l=i[a-1],c=[];if(a>o)return NV(t,c,i,a/o),c;const u=LV(i,t,o);if(a>0){let f,p;const m=a>1?Math.round((l-s)/(a-1)):null;for(_c(t,c,u,xe(m)?0:s-m,s),f=0,p=a-1;f<p;f++)_c(t,c,u,i[f],i[f+1]);return _c(t,c,u,l,xe(m)?t.length:l+m),c}return _c(t,c,u),c}function jV(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),o=e._maxLength/n;return Math.floor(Math.min(r,o))}function LV(e,t,n){const r=$V(e),o=t.length/n;if(!r)return Math.max(o,1);const i=O9(r);for(let a=0,s=i.length-1;a<s;a++){const l=i[a];if(l>o)return l}return Math.max(o,1)}function DV(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function NV(e,t,n,r){let o=0,i=n[0],a;for(r=Math.ceil(r),a=0;a<e.length;a++)a===i&&(t.push(e[a]),o++,i=n[o*r])}function _c(e,t,n,r,o){const i=de(r,0),a=Math.min(de(o,e.length),e.length);let s=0,l,c,u;for(n=Math.ceil(n),o&&(l=o-r,n=l/Math.floor(l/n)),u=i;u<0;)s++,u=Math.round(i+s*n);for(c=Math.max(i,0);c<a;c++)c===u&&(t.push(e[c]),s++,u=Math.round(i+s*n))}function $V(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const FV=e=>e==="left"?"right":e==="right"?"left":e,sS=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,lS=(e,t)=>Math.min(t||e,e);function cS(e,t){const n=[],r=e.length/t,o=e.length;let i=0;for(;i<o;i+=r)n.push(e[Math.floor(i)]);return n}function zV(e,t,n){const r=e.ticks.length,o=Math.min(t,r-1),i=e._startPixel,a=e._endPixel,s=1e-6;let l=e.getPixelForTick(o),c;if(!(n&&(r===1?c=Math.max(l-i,a-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(o-1))/2,l+=o<t?c:-c,l<i-s||l>a+s)))return l}function BV(e,t){Se(e,n=>{const r=n.gc,o=r.length/2;let i;if(o>t){for(i=0;i<o;++i)delete n.data[r[i]];r.splice(0,o)}})}function Ya(e){return e.drawTicks?e.tickLength:0}function uS(e,t){if(!e.display)return 0;const n=ut(e.font,t),r=Ot(e.padding);return(Fe(e.text)?e.text.length:1)*n.lineHeight+r.height}function HV(e,t){return So(e,{scale:t,type:"scale"})}function UV(e,t,n){return So(e,{tick:n,index:t,type:"tick"})}function WV(e,t,n){let r=wv(e);return(n&&t!=="right"||!n&&t==="right")&&(r=FV(r)),r}function VV(e,t,n,r){const{top:o,left:i,bottom:a,right:s,chart:l}=e,{chartArea:c,scales:u}=l;let f=0,p,m,h;const b=a-o,w=s-i;if(e.isHorizontal()){if(m=_t(r,i,s),be(n)){const v=Object.keys(n)[0],g=n[v];h=u[v].getPixelForValue(g)+b-t}else n==="center"?h=(c.bottom+c.top)/2+b-t:h=sS(e,n,t);p=s-i}else{if(be(n)){const v=Object.keys(n)[0],g=n[v];m=u[v].getPixelForValue(g)-w+t}else n==="center"?m=(c.left+c.right)/2-w+t:m=sS(e,n,t);h=_t(r,a,o),f=n==="left"?-nt:nt}return{titleX:m,titleY:h,maxWidth:p,rotation:f}}class bi extends Ir{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:o}=this;return t=Yt(t,Number.POSITIVE_INFINITY),n=Yt(n,Number.NEGATIVE_INFINITY),r=Yt(r,Number.POSITIVE_INFINITY),o=Yt(o,Number.NEGATIVE_INFINITY),{min:Yt(t,r),max:Yt(n,o),minDefined:Ke(t),maxDefined:Ke(n)}}getMinMax(t){let{min:n,max:r,minDefined:o,maxDefined:i}=this.getUserBounds(),a;if(o&&i)return{min:n,max:r};const s=this.getMatchingVisibleMetas();for(let l=0,c=s.length;l<c;++l)a=s[l].controller.getMinMax(this,t),o||(n=Math.min(n,a.min)),i||(r=Math.max(r,a.max));return n=i&&n>r?r:n,r=o&&n>r?n:r,{min:Yt(n,Yt(r,n)),max:Yt(r,Yt(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Te(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:o,grace:i,ticks:a}=this.options,s=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=eW(this,i,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=s<this.ticks.length;this._convertTicksToLabels(l?cS(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=MV(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Te(this.options.afterUpdate,[this])}beforeSetDimensions(){Te(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Te(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Te(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Te(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],i.label=Te(n.callback,[i.value,r,t],this)}afterTickToLabelConversion(){Te(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Te(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=lS(this.ticks.length,t.ticks.maxTicksLimit),o=n.minRotation||0,i=n.maxRotation;let a=o,s,l,c;if(!this._isVisible()||!n.display||o>=i||r<=1||!this.isHorizontal()){this.labelRotation=o;return}const u=this._getLabelSizes(),f=u.widest.width,p=u.highest.height,m=ft(this.chart.width-f,0,this.maxWidth);s=t.offset?this.maxWidth/r:m/(r-1),f+6>s&&(s=m/(r-(t.offset?.5:1)),l=this.maxHeight-Ya(t.grid)-n.padding-uS(t.title,this.chart.options.font),c=Math.sqrt(f*f+p*p),a=yv(Math.min(Math.asin(ft((u.highest.height+6)/s,-1,1)),Math.asin(ft(l/c,-1,1))-Math.asin(ft(p/c,-1,1)))),a=Math.max(o,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){Te(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Te(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:o,grid:i}}=this,a=this._isVisible(),s=this.isHorizontal();if(a){const l=uS(o,n.options.font);if(s?(t.width=this.maxWidth,t.height=Ya(i)+l):(t.height=this.maxHeight,t.width=Ya(i)+l),r.display&&this.ticks.length){const{first:c,last:u,widest:f,highest:p}=this._getLabelSizes(),m=r.padding*2,h=Rn(this.labelRotation),b=Math.cos(h),w=Math.sin(h);if(s){const v=r.mirror?0:w*f.width+b*p.height;t.height=Math.min(this.maxHeight,t.height+v+m)}else{const v=r.mirror?0:b*f.width+w*p.height;t.width=Math.min(this.maxWidth,t.width+v+m)}this._calculatePadding(c,u,w,b)}}this._handleMargins(),s?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,o){const{ticks:{align:i,padding:a},position:s}=this.options,l=this.labelRotation!==0,c=s!=="top"&&this.axis==="x";if(this.isHorizontal()){const u=this.getPixelForTick(0)-this.left,f=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,m=0;l?c?(p=o*t.width,m=r*n.height):(p=r*t.height,m=o*n.width):i==="start"?m=n.width:i==="end"?p=t.width:i!=="inner"&&(p=t.width/2,m=n.width/2),this.paddingLeft=Math.max((p-u+a)*this.width/(this.width-u),0),this.paddingRight=Math.max((m-f+a)*this.width/(this.width-f),0)}else{let u=n.height/2,f=t.height/2;i==="start"?(u=0,f=t.height):i==="end"&&(u=n.height,f=0),this.paddingTop=u+a,this.paddingBottom=f+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Te(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)xe(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=cS(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:o,_longestTextCache:i}=this,a=[],s=[],l=Math.floor(n/lS(n,r));let c=0,u=0,f,p,m,h,b,w,v,g,y,_,k;for(f=0;f<n;f+=l){if(h=t[f].label,b=this._resolveTickFontOptions(f),o.font=w=b.string,v=i[w]=i[w]||{data:{},gc:[]},g=b.lineHeight,y=_=0,!xe(h)&&!Fe(h))y=nd(o,v.data,v.gc,y,h),_=g;else if(Fe(h))for(p=0,m=h.length;p<m;++p)k=h[p],!xe(k)&&!Fe(k)&&(y=nd(o,v.data,v.gc,y,k),_+=g);a.push(y),s.push(_),c=Math.max(y,c),u=Math.max(_,u)}BV(i,n);const S=a.indexOf(c),E=s.indexOf(u),C=A=>({width:a[A]||0,height:s[A]||0});return{first:C(0),last:C(n-1),widest:C(S),highest:C(E),widths:a,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return R9(this._alignToPixels?Ro(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=UV(this.getContext(),t,r))}return this.$context||(this.$context=HV(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=Rn(this.labelRotation),r=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),i=this._getLabelSizes(),a=t.autoSkipPadding||0,s=i?i.widest.width+a:0,l=i?i.highest.height+a:0;return this.isHorizontal()?l*r>s*o?s/r:l/o:l*o<s*r?l/r:s/o}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,o=this.options,{grid:i,position:a,border:s}=o,l=i.offset,c=this.isHorizontal(),f=this.ticks.length+(l?1:0),p=Ya(i),m=[],h=s.setContext(this.getContext()),b=h.display?h.width:0,w=b/2,v=function(ne){return Ro(r,ne,b)};let g,y,_,k,S,E,C,A,P,L,W,Z;if(a==="top")g=v(this.bottom),E=this.bottom-p,A=g-w,L=v(t.top)+w,Z=t.bottom;else if(a==="bottom")g=v(this.top),L=t.top,Z=v(t.bottom)-w,E=g+w,A=this.top+p;else if(a==="left")g=v(this.right),S=this.right-p,C=g-w,P=v(t.left)+w,W=t.right;else if(a==="right")g=v(this.left),P=t.left,W=v(t.right)-w,S=g+w,C=this.left+p;else if(n==="x"){if(a==="center")g=v((t.top+t.bottom)/2+.5);else if(be(a)){const ne=Object.keys(a)[0],ee=a[ne];g=v(this.chart.scales[ne].getPixelForValue(ee))}L=t.top,Z=t.bottom,E=g+w,A=E+p}else if(n==="y"){if(a==="center")g=v((t.left+t.right)/2);else if(be(a)){const ne=Object.keys(a)[0],ee=a[ne];g=v(this.chart.scales[ne].getPixelForValue(ee))}S=g-w,C=S-p,P=t.left,W=t.right}const se=de(o.ticks.maxTicksLimit,f),X=Math.max(1,Math.ceil(f/se));for(y=0;y<f;y+=X){const ne=this.getContext(y),ee=i.setContext(ne),M=s.setContext(ne),V=ee.lineWidth,q=ee.color,oe=M.dash||[],N=M.dashOffset,F=ee.tickWidth,D=ee.tickColor,z=ee.tickBorderDash||[],T=ee.tickBorderDashOffset;_=zV(this,y,l),_!==void 0&&(k=Ro(r,_,V),c?S=C=P=W=k:E=A=L=Z=k,m.push({tx1:S,ty1:E,tx2:C,ty2:A,x1:P,y1:L,x2:W,y2:Z,width:V,color:q,borderDash:oe,borderDashOffset:N,tickWidth:F,tickColor:D,tickBorderDash:z,tickBorderDashOffset:T}))}return this._ticksLength=f,this._borderValue=g,m}_computeLabelItems(t){const n=this.axis,r=this.options,{position:o,ticks:i}=r,a=this.isHorizontal(),s=this.ticks,{align:l,crossAlign:c,padding:u,mirror:f}=i,p=Ya(r.grid),m=p+u,h=f?-u:m,b=-Rn(this.labelRotation),w=[];let v,g,y,_,k,S,E,C,A,P,L,W,Z="middle";if(o==="top")S=this.bottom-h,E=this._getXAxisLabelAlignment();else if(o==="bottom")S=this.top+h,E=this._getXAxisLabelAlignment();else if(o==="left"){const X=this._getYAxisLabelAlignment(p);E=X.textAlign,k=X.x}else if(o==="right"){const X=this._getYAxisLabelAlignment(p);E=X.textAlign,k=X.x}else if(n==="x"){if(o==="center")S=(t.top+t.bottom)/2+m;else if(be(o)){const X=Object.keys(o)[0],ne=o[X];S=this.chart.scales[X].getPixelForValue(ne)+m}E=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")k=(t.left+t.right)/2-m;else if(be(o)){const X=Object.keys(o)[0],ne=o[X];k=this.chart.scales[X].getPixelForValue(ne)}E=this._getYAxisLabelAlignment(p).textAlign}n==="y"&&(l==="start"?Z="top":l==="end"&&(Z="bottom"));const se=this._getLabelSizes();for(v=0,g=s.length;v<g;++v){y=s[v],_=y.label;const X=i.setContext(this.getContext(v));C=this.getPixelForTick(v)+i.labelOffset,A=this._resolveTickFontOptions(v),P=A.lineHeight,L=Fe(_)?_.length:1;const ne=L/2,ee=X.color,M=X.textStrokeColor,V=X.textStrokeWidth;let q=E;a?(k=C,E==="inner"&&(v===g-1?q=this.options.reverse?"left":"right":v===0?q=this.options.reverse?"right":"left":q="center"),o==="top"?c==="near"||b!==0?W=-L*P+P/2:c==="center"?W=-se.highest.height/2-ne*P+P:W=-se.highest.height+P/2:c==="near"||b!==0?W=P/2:c==="center"?W=se.highest.height/2-ne*P:W=se.highest.height-L*P,f&&(W*=-1),b!==0&&!X.showLabelBackdrop&&(k+=P/2*Math.sin(b))):(S=C,W=(1-L)*P/2);let oe;if(X.showLabelBackdrop){const N=Ot(X.backdropPadding),F=se.heights[v],D=se.widths[v];let z=W-N.top,T=0-N.left;switch(Z){case"middle":z-=F/2;break;case"bottom":z-=F;break}switch(E){case"center":T-=D/2;break;case"right":T-=D;break;case"inner":v===g-1?T-=D:v>0&&(T-=D/2);break}oe={left:T,top:z,width:D+N.width,height:F+N.height,color:X.backdropColor}}w.push({label:_,font:A,textOffset:W,options:{rotation:b,color:ee,strokeColor:M,strokeWidth:V,textAlign:q,textBaseline:Z,translation:[k,S],backdrop:oe}})}return w}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-Rn(this.labelRotation))return t==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:o,padding:i}}=this.options,a=this._getLabelSizes(),s=t+i,l=a.widest.width;let c,u;return n==="left"?o?(u=this.right+i,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u+=l)):(u=this.right-s,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u=this.left)):n==="right"?o?(u=this.left+i,r==="near"?c="right":r==="center"?(c="center",u-=l/2):(c="left",u-=l)):(u=this.left+s,r==="near"?c="left":r==="center"?(c="center",u+=l/2):(c="right",u=this.right)):c="right",{textAlign:c,x:u}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:o,width:i,height:a}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,o,i,a),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(i=>i.value===t);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,a;const s=(l,c,u)=>{!u.width||!u.color||(r.save(),r.lineWidth=u.width,r.strokeStyle=u.color,r.setLineDash(u.borderDash||[]),r.lineDashOffset=u.borderDashOffset,r.beginPath(),r.moveTo(l.x,l.y),r.lineTo(c.x,c.y),r.stroke(),r.restore())};if(n.display)for(i=0,a=o.length;i<a;++i){const l=o[i];n.drawOnChartArea&&s({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),n.drawTicks&&s({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:o}}=this,i=r.setContext(this.getContext()),a=r.display?i.width:0;if(!a)return;const s=o.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,u,f,p;this.isHorizontal()?(c=Ro(t,this.left,a)-a/2,u=Ro(t,this.right,s)+s/2,f=p=l):(f=Ro(t,this.top,a)-a/2,p=Ro(t,this.bottom,s)+s/2,c=u=l),n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.beginPath(),n.moveTo(c,f),n.lineTo(u,p),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,o=this._computeLabelArea();o&&wf(r,o);const i=this.getLabelItems(t);for(const a of i){const s=a.options,l=a.font,c=a.label,u=a.textOffset;ci(r,c,0,u,l,s)}o&&_f(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:o}}=this;if(!r.display)return;const i=ut(r.font),a=Ot(r.padding),s=r.align;let l=i.lineHeight/2;n==="bottom"||n==="center"||be(n)?(l+=a.bottom,Fe(r.text)&&(l+=i.lineHeight*(r.text.length-1))):l+=a.top;const{titleX:c,titleY:u,maxWidth:f,rotation:p}=VV(this,l,n,s);ci(t,r.text,0,0,i,{color:r.color,maxWidth:f,rotation:p,textAlign:WV(s,n,o),textBaseline:"middle",translation:[c,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=de(t.grid&&t.grid.z,-1),o=de(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==bi.prototype.draw?[{z:n,draw:i=>{this.draw(i)}}]:[{z:r,draw:i=>{this.drawBackground(),this.drawGrid(i),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:i=>{this.drawLabels(i)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",o=[];let i,a;for(i=0,a=n.length;i<a;++i){const s=n[i];s[r]===this.id&&(!t||s.type===t)&&o.push(s)}return o}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return ut(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Sc{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;qV(n)&&(r=this.register(n));const o=this.items,i=t.id,a=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in o||(o[i]=t,YV(t,a,r),this.override&&Qe.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,o=this.scope;r in n&&delete n[r],o&&r in Qe[o]&&(delete Qe[o][r],this.override&&delete li[r])}}function YV(e,t,n){const r=el(Object.create(null),[n?Qe.get(n):{},Qe.get(t),e.defaults]);Qe.set(t,r),e.defaultRoutes&&GV(t,e.defaultRoutes),e.descriptors&&Qe.describe(t,e.descriptors)}function GV(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),o=r.pop(),i=[e].concat(r).join("."),a=t[n].split("."),s=a.pop(),l=a.join(".");Qe.route(i,o,l,s)})}function qV(e){return"id"in e&&"defaults"in e}class XV{constructor(){this.controllers=new Sc(jn,"datasets",!0),this.elements=new Sc(Ir,"elements"),this.plugins=new Sc(Object,"plugins"),this.scales=new Sc(bi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(o=>{const i=r||this._getRegistryForType(o);r||i.isForType(o)||i===this.plugins&&o.id?this._exec(t,i,o):Se(o,a=>{const s=r||this._getRegistryForType(a);this._exec(t,s,a)})})}_exec(t,n,r){const o=vv(t);Te(r["before"+o],[],r),n[t](r),Te(r["after"+o],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const o=n.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return o}}var Wn=new XV;class KV{constructor(){this._init=[]}notify(t,n,r,o){n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const i=o?this._descriptors(t).filter(o):this._descriptors(t),a=this._notify(i,t,n,r);return n==="afterDestroy"&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall")),a}_notify(t,n,r,o){o=o||{};for(const i of t){const a=i.plugin,s=a[r],l=[n,o,i.options];if(Te(s,l,a)===!1&&o.cancelable)return!1}return!0}invalidate(){xe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,o=de(r.options&&r.options.plugins,{}),i=QV(r);return o===!1&&!n?[]:ZV(t,i,o,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,o=(i,a)=>i.filter(s=>!a.some(l=>s.plugin.id===l.plugin.id));this._notify(o(n,r),t,"stop"),this._notify(o(r,n),t,"start")}}function QV(e){const t={},n=[],r=Object.keys(Wn.plugins.items);for(let i=0;i<r.length;i++)n.push(Wn.getPlugin(r[i]));const o=e.plugins||[];for(let i=0;i<o.length;i++){const a=o[i];n.indexOf(a)===-1&&(n.push(a),t[a.id]=!0)}return{plugins:n,localIds:t}}function JV(e,t){return!t&&e===!1?null:e===!0?{}:e}function ZV(e,{plugins:t,localIds:n},r,o){const i=[],a=e.getContext();for(const s of t){const l=s.id,c=JV(r[l],o);c!==null&&i.push({plugin:s,options:eY(e.config,{plugin:s,local:n[l]},c,a)})}return i}function eY(e,{plugin:t,local:n},r,o){const i=e.pluginScopeKeys(t),a=e.getOptionScopes(r,i);return n&&t.defaults&&a.push(t.defaults),e.createResolver(a,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ag(e,t){const n=Qe.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function tY(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function nY(e,t){return e===t?"_index_":"_value_"}function dS(e){if(e==="x"||e==="y"||e==="r")return e}function rY(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function sg(e,...t){if(dS(e))return e;for(const n of t){const r=n.axis||rY(n.position)||e.length>1&&dS(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function fS(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function oY(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return fS(e,"x",n[0])||fS(e,"y",n[0])}return{}}function iY(e,t){const n=li[e.type]||{scales:{}},r=t.scales||{},o=ag(e.type,t),i=Object.create(null);return Object.keys(r).forEach(a=>{const s=r[a];if(!be(s))return console.error(`Invalid scale configuration for scale: ${a}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=sg(a,s,oY(a,e),Qe.scales[s.type]),c=nY(l,o),u=n.scales||{};i[a]=_s(Object.create(null),[{axis:l},s,u[l],u[c]])}),e.data.datasets.forEach(a=>{const s=a.type||e.type,l=a.indexAxis||ag(s,t),u=(li[s]||{}).scales||{};Object.keys(u).forEach(f=>{const p=tY(f,l),m=a[p+"AxisID"]||p;i[m]=i[m]||Object.create(null),_s(i[m],[{axis:p},r[m],u[f]])})}),Object.keys(i).forEach(a=>{const s=i[a];_s(s,[Qe.scales[s.type],Qe.scale])}),i}function bR(e){const t=e.options||(e.options={});t.plugins=de(t.plugins,{}),t.scales=iY(e,t)}function vR(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function aY(e){return e=e||{},e.data=vR(e.data),bR(e),e}const pS=new Map,yR=new Set;function kc(e,t){let n=pS.get(e);return n||(n=t(),pS.set(e,n),yR.add(n)),n}const Ga=(e,t,n)=>{const r=go(t,n);r!==void 0&&e.add(r)};class sY{constructor(t){this._config=aY(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=vR(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),bR(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return kc(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return kc(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return kc(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return kc(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let o=r.get(t);return(!o||n)&&(o=new Map,r.set(t,o)),o}getOptionScopes(t,n,r){const{options:o,type:i}=this,a=this._cachedScopes(t,r),s=a.get(n);if(s)return s;const l=new Set;n.forEach(u=>{t&&(l.add(t),u.forEach(f=>Ga(l,t,f))),u.forEach(f=>Ga(l,o,f)),u.forEach(f=>Ga(l,li[i]||{},f)),u.forEach(f=>Ga(l,Qe,f)),u.forEach(f=>Ga(l,og,f))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),yR.has(n)&&a.set(n,c),c}chartOptionScopes(){const{options:t,type:n}=this;return[t,li[n]||{},Qe.datasets[n]||{},{type:n},Qe,og]}resolveNamedOptions(t,n,r,o=[""]){const i={$shared:!0},{resolver:a,subPrefixes:s}=hS(this._resolverCache,t,o);let l=a;if(cY(a,n)){i.$shared=!1,r=bo(r)?r():r;const c=this.createResolver(t,r,s);l=da(a,r,c)}for(const c of n)i[c]=l[c];return i}createResolver(t,n,r=[""],o){const{resolver:i}=hS(this._resolverCache,t,r);return be(n)?da(i,n,void 0,o):i}}function hS(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const o=n.join();let i=r.get(o);return i||(i={resolver:kv(t,n),subPrefixes:n.filter(s=>!s.toLowerCase().includes("hover"))},r.set(o,i)),i}const lY=e=>be(e)&&Object.getOwnPropertyNames(e).some(t=>bo(e[t]));function cY(e,t){const{isScriptable:n,isIndexable:r}=J2(e);for(const o of t){const i=n(o),a=r(o),s=(a||i)&&e[o];if(i&&(bo(s)||lY(s))||a&&Fe(s))return!0}return!1}var uY="4.4.3";const dY=["top","bottom","left","right","chartArea"];function mS(e,t){return e==="top"||e==="bottom"||dY.indexOf(e)===-1&&t==="x"}function gS(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function bS(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Te(n&&n.onComplete,[e],t)}function fY(e){const t=e.chart,n=t.options.animation;Te(n&&n.onProgress,[e],t)}function xR(e){return Cv()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const tu={},vS=e=>{const t=xR(e);return Object.values(tu).filter(n=>n.canvas===t).pop()};function pY(e,t,n){const r=Object.keys(e);for(const o of r){const i=+o;if(i>=t){const a=e[o];delete e[o],(n>0||i>t)&&(e[i+n]=a)}}}function hY(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}function Ec(e,t,n){return e.options.clip?e[n]:t[n]}function mY(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Ec(n,t,"left"),right:Ec(n,t,"right"),top:Ec(r,t,"top"),bottom:Ec(r,t,"bottom")}:t}var $r;let kf=($r=class{static register(...t){Wn.add(...t),yS()}static unregister(...t){Wn.remove(...t),yS()}constructor(t,n){const r=this.config=new sY(n),o=xR(t),i=vS(o);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas with ID '"+i.canvas.id+"' can be reused.");const a=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||IV(o)),this.platform.updateConfig(r);const s=this.platform.acquireContext(o,a.aspectRatio),l=s&&s.canvas,c=l&&l.height,u=l&&l.width;if(this.id=b9(),this.ctx=s,this.canvas=l,this.width=u,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new KV,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=M9(f=>this.update(f),a.resizeDelay||0),this._dataChanges=[],tu[this.id]=this,!s||!l){console.error("Failed to create chart: can't acquire context from the given item");return}ar.listen(this,"complete",bS),ar.listen(this,"progress",fY),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:o,_aspectRatio:i}=this;return xe(t)?n&&i?i:o?r/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Wn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():z_(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return N_(this.canvas,this.ctx),this}stop(){return ar.stop(this),this}resize(t,n){ar.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,o=this.canvas,i=r.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(o,t,n,i),s=r.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,z_(this,s,!0)&&(this.notifyPlugins("resize",{size:a}),Te(r.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Se(n,(r,o)=>{r.id=o})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,o=Object.keys(r).reduce((a,s)=>(a[s]=!1,a),{});let i=[];n&&(i=i.concat(Object.keys(n).map(a=>{const s=n[a],l=sg(a,s),c=l==="r",u=l==="x";return{options:s,dposition:c?"chartArea":u?"bottom":"left",dtype:c?"radialLinear":u?"category":"linear"}}))),Se(i,a=>{const s=a.options,l=s.id,c=sg(l,s),u=de(s.type,a.dtype);(s.position===void 0||mS(s.position,c)!==mS(a.dposition))&&(s.position=a.dposition),o[l]=!0;let f=null;if(l in r&&r[l].type===u)f=r[l];else{const p=Wn.getScale(u);f=new p({id:l,type:u,ctx:this.ctx,chart:this}),r[f.id]=f}f.init(s,t)}),Se(o,(a,s)=>{a||delete r[s]}),Se(r,a=>{kt.configure(this,a,a.options),kt.addBox(this,a)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((o,i)=>o.index-i.index),r>n){for(let o=n;o<r;++o)this._destroyDatasetMeta(o);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(gS("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,o)=>{n.filter(i=>i===r._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,o;for(this._removeUnreferencedMetasets(),r=0,o=n.length;r<o;r++){const i=n[r];let a=this.getDatasetMeta(r);const s=i.type||this.config.type;if(a.type&&a.type!==s&&(this._destroyDatasetMeta(r),a=this.getDatasetMeta(r)),a.type=s,a.indexAxis=i.indexAxis||ag(s,this.options),a.order=i.order||0,a.index=r,a.label=""+i.label,a.visible=this.isDatasetVisible(r),a.controller)a.controller.updateIndex(r),a.controller.linkScales();else{const l=Wn.getController(s),{datasetElementType:c,dataElementType:u}=Qe.datasets[s];Object.assign(l,{dataElementType:Wn.getElement(u),datasetElementType:c&&Wn.getElement(c)}),a.controller=new l(this,r),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){Se(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,u=this.data.datasets.length;c<u;c++){const{controller:f}=this.getDatasetMeta(c),p=!o&&i.indexOf(f)===-1;f.buildOrUpdateElements(p),a=Math.max(+f.getMaxOverflow(),a)}a=this._minPadding=r.layout.autoPadding?a:0,this._updateLayout(a),o||Se(i,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(gS("z","_idx"));const{_active:s,_lastEvent:l}=this;l?this._eventHandler(l,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){Se(this.scales,t=>{kt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!T_(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:o,count:i}of n){const a=r==="_removeElements"?-i:i;pY(t,o,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=i=>new Set(t.filter(a=>a[0]===i).map((a,s)=>s+","+a.splice(1).join(","))),o=r(0);for(let i=1;i<n;i++)if(!T_(o,r(i)))return;return Array.from(o).map(i=>i.split(",")).map(i=>({method:i[1],start:+i[2],count:+i[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;kt.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Se(this.boxes,o=>{r&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,i)=>{o._idx=i}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,bo(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),o={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(r.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ar.has(this)?this.attached&&!ar.running(this)&&ar.start(this):(this.draw(),bS({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:o}=this._resizeBeforeDraw;this._resize(r,o),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let o,i;for(o=0,i=n.length;o<i;++o){const a=n[o];(!t||a.visible)&&r.push(a)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r=t._clip,o=!r.disabled,i=mY(t,this.chartArea),a={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",a)!==!1&&(o&&wf(n,{left:r.left===!1?0:i.left-r.left,right:r.right===!1?this.width:i.right+r.right,top:r.top===!1?0:i.top-r.top,bottom:r.bottom===!1?this.height:i.bottom+r.bottom}),t.controller.draw(),o&&_f(n),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return mr(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,o){const i=dV.modes[n];return typeof i=="function"?i(this,t,r,o):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let o=r.filter(i=>i&&i._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(o)),o}getContext(){return this.$context||(this.$context=So(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const o=r?"show":"hide",i=this.getDatasetMeta(t),a=i.controller._resolveAnimations(void 0,o);tl(n)?(i.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),a.update(i,{visible:r}),this.update(s=>s.datasetIndex===t?o:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),ar.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),N_(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete tu[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(i,a)=>{n.addEventListener(this,i,a),t[i]=a},o=(i,a,s)=>{i.offsetX=a,i.offsetY=s,this._eventHandler(i)};Se(this.options.events,i=>r(i,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(l,c)=>{n.addEventListener(this,l,c),t[l]=c},o=(l,c)=>{t[l]&&(n.removeEventListener(this,l,c),delete t[l])},i=(l,c)=>{this.canvas&&this.resize(l,c)};let a;const s=()=>{o("attach",s),this.attached=!0,this.resize(),r("resize",i),r("detach",a)};a=()=>{this.attached=!1,o("resize",i),this._stop(),this._resize(0,0),r("attach",s)},n.isAttached(this.canvas)?s():a()}unbindEvents(){Se(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Se(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const o=r?"set":"remove";let i,a,s,l;for(n==="dataset"&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+o+"DatasetHoverStyle"]()),s=0,l=t.length;s<l;++s){a=t[s];const c=a&&this.getDatasetMeta(a.datasetIndex).controller;c&&c[o+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:i,index:a})=>{const s=this.getDatasetMeta(i);if(!s)throw new Error("No dataset found at index "+i);return{datasetIndex:i,element:s.data[a],index:a}});!Zu(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const o=this.options.hover,i=(l,c)=>l.filter(u=>!c.some(f=>u.datasetIndex===f.datasetIndex&&u.index===f.index)),a=i(n,t),s=r?t:i(t,n);a.length&&this.updateHoverStyle(a,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},o=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,o)===!1)return;const i=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,o),(i||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:o=[],options:i}=this,a=n,s=this._getActiveElements(t,o,r,a),l=S9(t),c=hY(t,this._lastEvent,r,l);r&&(this._lastEvent=null,Te(i.onHover,[t,s,this],this),l&&Te(i.onClick,[t,s,this],this));const u=!Zu(s,o);return(u||n)&&(this._active=s,this._updateHoverStyles(s,o,n)),this._lastEvent=c,u}_getActiveElements(t,n,r,o){if(t.type==="mouseout")return[];if(!r)return n;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,o)}},H($r,"defaults",Qe),H($r,"instances",tu),H($r,"overrides",li),H($r,"registry",Wn),H($r,"version",uY),H($r,"getChart",vS),$r);function yS(){return Se(kf.instances,e=>e._plugins.invalidate())}function gY(e,t,n){const{startAngle:r,pixelMargin:o,x:i,y:a,outerRadius:s,innerRadius:l}=t;let c=o/s;e.beginPath(),e.arc(i,a,s,r-c,n+c),l>o?(c=o/l,e.arc(i,a,l,n+c,r-c,!0)):e.arc(i,a,o,n+nt,r-nt),e.closePath(),e.clip()}function bY(e){return Sv(e,["outerStart","outerEnd","innerStart","innerEnd"])}function vY(e,t,n,r){const o=bY(e.options.borderRadius),i=(n-t)/2,a=Math.min(i,r*t/2),s=l=>{const c=(n-Math.min(i,l))*r/2;return ft(l,0,Math.min(i,c))};return{outerStart:s(o.outerStart),outerEnd:s(o.outerEnd),innerStart:ft(o.innerStart,0,a),innerEnd:ft(o.innerEnd,0,a)}}function Ti(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function ad(e,t,n,r,o,i){const{x:a,y:s,startAngle:l,pixelMargin:c,innerRadius:u}=t,f=Math.max(t.outerRadius+r+n-c,0),p=u>0?u+r+n+c:0;let m=0;const h=o-l;if(r){const X=u>0?u-r:0,ne=f>0?f-r:0,ee=(X+ne)/2,M=ee!==0?h*ee/(ee+r):h;m=(h-M)/2}const b=Math.max(.001,h*f-n/Le)/f,w=(h-b)/2,v=l+w+m,g=o-w-m,{outerStart:y,outerEnd:_,innerStart:k,innerEnd:S}=vY(t,p,f,g-v),E=f-y,C=f-_,A=v+y/E,P=g-_/C,L=p+k,W=p+S,Z=v+k/L,se=g-S/W;if(e.beginPath(),i){const X=(A+P)/2;if(e.arc(a,s,f,A,X),e.arc(a,s,f,X,P),_>0){const V=Ti(C,P,a,s);e.arc(V.x,V.y,_,P,g+nt)}const ne=Ti(W,g,a,s);if(e.lineTo(ne.x,ne.y),S>0){const V=Ti(W,se,a,s);e.arc(V.x,V.y,S,g+nt,se+Math.PI)}const ee=(g-S/p+(v+k/p))/2;if(e.arc(a,s,p,g-S/p,ee,!0),e.arc(a,s,p,ee,v+k/p,!0),k>0){const V=Ti(L,Z,a,s);e.arc(V.x,V.y,k,Z+Math.PI,v-nt)}const M=Ti(E,v,a,s);if(e.lineTo(M.x,M.y),y>0){const V=Ti(E,A,a,s);e.arc(V.x,V.y,y,v-nt,A)}}else{e.moveTo(a,s);const X=Math.cos(A)*f+a,ne=Math.sin(A)*f+s;e.lineTo(X,ne);const ee=Math.cos(P)*f+a,M=Math.sin(P)*f+s;e.lineTo(ee,M)}e.closePath()}function yY(e,t,n,r,o){const{fullCircles:i,startAngle:a,circumference:s}=t;let l=t.endAngle;if(i){ad(e,t,n,r,l,o);for(let c=0;c<i;++c)e.fill();isNaN(s)||(l=a+(s%je||je))}return ad(e,t,n,r,l,o),e.fill(),l}function xY(e,t,n,r,o){const{fullCircles:i,startAngle:a,circumference:s,options:l}=t,{borderWidth:c,borderJoinStyle:u,borderDash:f,borderDashOffset:p}=l,m=l.borderAlign==="inner";if(!c)return;e.setLineDash(f||[]),e.lineDashOffset=p,m?(e.lineWidth=c*2,e.lineJoin=u||"round"):(e.lineWidth=c,e.lineJoin=u||"bevel");let h=t.endAngle;if(i){ad(e,t,n,r,h,o);for(let b=0;b<i;++b)e.stroke();isNaN(s)||(h=a+(s%je||je))}m&&gY(e,t,h),i||(ad(e,t,n,r,h,o),e.stroke())}class ss extends Ir{constructor(n){super();H(this,"circumference");H(this,"endAngle");H(this,"fullCircles");H(this,"innerRadius");H(this,"outerRadius");H(this,"pixelMargin");H(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,o){const i=this.getProps(["x","y"],o),{angle:a,distance:s}=H2(i,{x:n,y:r}),{startAngle:l,endAngle:c,innerRadius:u,outerRadius:f,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),m=(this.options.spacing+this.options.borderWidth)/2,b=de(p,c-l)>=je||nl(a,l,c),w=pr(s,u+m,f+m);return b&&w}getCenterPoint(n){const{x:r,y:o,startAngle:i,endAngle:a,innerRadius:s,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:u}=this.options,f=(i+a)/2,p=(s+l+u+c)/2;return{x:r+Math.cos(f)*p,y:o+Math.sin(f)*p}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:o}=this,i=(r.offset||0)/4,a=(r.spacing||0)/2,s=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=o>je?Math.floor(o/je):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const l=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(l)*i,Math.sin(l)*i);const c=1-Math.sin(Math.min(Le,o||0)),u=i*c;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,yY(n,this,u,a,s),xY(n,this,u,a,s),n.restore()}}H(ss,"id","arc"),H(ss,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0}),H(ss,"defaultRoutes",{backgroundColor:"backgroundColor"}),H(ss,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function wR(e,t,n=t){e.lineCap=de(n.borderCapStyle,t.borderCapStyle),e.setLineDash(de(n.borderDash,t.borderDash)),e.lineDashOffset=de(n.borderDashOffset,t.borderDashOffset),e.lineJoin=de(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=de(n.borderWidth,t.borderWidth),e.strokeStyle=de(n.borderColor,t.borderColor)}function wY(e,t,n){e.lineTo(n.x,n.y)}function _Y(e){return e.stepped?V9:e.tension||e.cubicInterpolationMode==="monotone"?Y9:wY}function _R(e,t,n={}){const r=e.length,{start:o=0,end:i=r-1}=n,{start:a,end:s}=t,l=Math.max(o,a),c=Math.min(i,s),u=o<a&&i<a||o>s&&i>s;return{count:r,start:l,loop:t.loop,ilen:c<l&&!u?r+c-l:c-l}}function SY(e,t,n,r){const{points:o,options:i}=t,{count:a,start:s,loop:l,ilen:c}=_R(o,n,r),u=_Y(i);let{move:f=!0,reverse:p}=r||{},m,h,b;for(m=0;m<=c;++m)h=o[(s+(p?c-m:m))%a],!h.skip&&(f?(e.moveTo(h.x,h.y),f=!1):u(e,b,h,p,i.stepped),b=h);return l&&(h=o[(s+(p?c:0))%a],u(e,b,h,p,i.stepped)),!!l}function kY(e,t,n,r){const o=t.points,{count:i,start:a,ilen:s}=_R(o,n,r),{move:l=!0,reverse:c}=r||{};let u=0,f=0,p,m,h,b,w,v;const g=_=>(a+(c?s-_:_))%i,y=()=>{b!==w&&(e.lineTo(u,w),e.lineTo(u,b),e.lineTo(u,v))};for(l&&(m=o[g(0)],e.moveTo(m.x,m.y)),p=0;p<=s;++p){if(m=o[g(p)],m.skip)continue;const _=m.x,k=m.y,S=_|0;S===h?(k<b?b=k:k>w&&(w=k),u=(f*u+_)/++f):(y(),e.lineTo(_,k),h=S,f=0,b=w=k),v=k}y()}function lg(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?kY:SY}function EY(e){return e.stepped?kW:e.tension||e.cubicInterpolationMode==="monotone"?EW:No}function OY(e,t,n,r){let o=t._path;o||(o=t._path=new Path2D,t.path(o,n,r)&&o.closePath()),wR(e,t.options),e.stroke(o)}function CY(e,t,n,r){const{segments:o,options:i}=t,a=lg(t);for(const s of o)wR(e,i,s.style),e.beginPath(),a(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const TY=typeof Path2D=="function";function RY(e,t,n,r){TY&&!t.options.segment?OY(e,t,n,r):CY(e,t,n,r)}class Qr extends Ir{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const o=r.spanGaps?this._loop:this._fullLoop;gW(this._points,r,t,o,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=AW(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,o=t[n],i=this.points,a=lR(this,{property:n,start:o,end:o});if(!a.length)return;const s=[],l=EY(r);let c,u;for(c=0,u=a.length;c<u;++c){const{start:f,end:p}=a[c],m=i[f],h=i[p];if(m===h){s.push(m);continue}const b=Math.abs((o-m[n])/(h[n]-m[n])),w=l(m,h,b,r.stepped);w[n]=t[n],s.push(w)}return s.length===1?s[0]:s}pathSegment(t,n,r){return lg(this)(t,this,n,r)}path(t,n,r){const o=this.segments,i=lg(this);let a=this._loop;n=n||0,r=r||this.points.length-n;for(const s of o)a&=i(t,this,s,{start:n,end:n+r-1});return!!a}draw(t,n,r,o){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),RY(t,this,r,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}H(Qr,"id","line"),H(Qr,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),H(Qr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),H(Qr,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function xS(e,t,n,r){const o=e.options,{[n]:i}=e.getProps([n],r);return Math.abs(t-i)<o.radius+o.hitRadius}class nu extends Ir{constructor(n){super();H(this,"parsed");H(this,"skip");H(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,o){const i=this.options,{x:a,y:s}=this.getProps(["x","y"],o);return Math.pow(n-a,2)+Math.pow(r-s,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(n,r){return xS(this,n,"x",r)}inYRange(n,r){return xS(this,n,"y",r)}getCenterPoint(n){const{x:r,y:o}=this.getProps(["x","y"],n);return{x:r,y:o}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const o=r&&n.borderWidth||0;return(r+o)*2}draw(n,r){const o=this.options;this.skip||o.radius<.1||!mr(this,r,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,ig(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}H(nu,"id","point"),H(nu,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),H(nu,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function SR(e,t){const{x:n,y:r,base:o,width:i,height:a}=e.getProps(["x","y","base","width","height"],t);let s,l,c,u,f;return e.horizontal?(f=a/2,s=Math.min(n,o),l=Math.max(n,o),c=r-f,u=r+f):(f=i/2,s=n-f,l=n+f,c=Math.min(r,o),u=Math.max(r,o)),{left:s,top:c,right:l,bottom:u}}function Jr(e,t,n,r){return e?0:ft(t,n,r)}function PY(e,t,n){const r=e.options.borderWidth,o=e.borderSkipped,i=Q2(r);return{t:Jr(o.top,i.top,0,n),r:Jr(o.right,i.right,0,t),b:Jr(o.bottom,i.bottom,0,n),l:Jr(o.left,i.left,0,t)}}function AY(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),o=e.options.borderRadius,i=Ko(o),a=Math.min(t,n),s=e.borderSkipped,l=r||be(o);return{topLeft:Jr(!l||s.top||s.left,i.topLeft,0,a),topRight:Jr(!l||s.top||s.right,i.topRight,0,a),bottomLeft:Jr(!l||s.bottom||s.left,i.bottomLeft,0,a),bottomRight:Jr(!l||s.bottom||s.right,i.bottomRight,0,a)}}function IY(e){const t=SR(e),n=t.right-t.left,r=t.bottom-t.top,o=PY(e,n/2,r/2),i=AY(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:i},inner:{x:t.left+o.l,y:t.top+o.t,w:n-o.l-o.r,h:r-o.t-o.b,radius:{topLeft:Math.max(0,i.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,i.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,i.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,i.bottomRight-Math.max(o.b,o.r))}}}}function Qp(e,t,n,r){const o=t===null,i=n===null,s=e&&!(o&&i)&&SR(e,r);return s&&(o||pr(t,s.left,s.right))&&(i||pr(n,s.top,s.bottom))}function MY(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function jY(e,t){e.rect(t.x,t.y,t.w,t.h)}function Jp(e,t,n={}){const r=e.x!==n.x?-t:0,o=e.y!==n.y?-t:0,i=(e.x+e.w!==n.x+n.w?t:0)-r,a=(e.y+e.h!==n.y+n.h?t:0)-o;return{x:e.x+r,y:e.y+o,w:e.w+i,h:e.h+a,radius:e.radius}}class ru extends Ir{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:o}}=this,{inner:i,outer:a}=IY(this),s=MY(a.radius)?rl:jY;t.save(),(a.w!==i.w||a.h!==i.h)&&(t.beginPath(),s(t,Jp(a,n,i)),t.clip(),s(t,Jp(i,-n,a)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),s(t,Jp(i,n)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,n,r){return Qp(this,t,n,r)}inXRange(t,n){return Qp(this,t,null,n)}inYRange(t,n){return Qp(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:o,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(n+o)/2:n,y:i?r:(r+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}H(ru,"id","bar"),H(ru,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),H(ru,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var LY=Object.freeze({__proto__:null,ArcElement:ss,BarElement:ru,LineElement:Qr,PointElement:nu});const cg=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],wS=cg.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function kR(e){return cg[e%cg.length]}function ER(e){return wS[e%wS.length]}function DY(e,t){return e.borderColor=kR(t),e.backgroundColor=ER(t),++t}function NY(e,t){return e.backgroundColor=e.data.map(()=>kR(t++)),t}function $Y(e,t){return e.backgroundColor=e.data.map(()=>ER(t++)),t}function FY(e){let t=0;return(n,r)=>{const o=e.getDatasetMeta(r).controller;o instanceof Uo?t=NY(n,t):o instanceof Cs?t=$Y(n,t):o&&(t=DY(n,t))}}function _S(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function zY(e){return e&&(e.borderColor||e.backgroundColor)}var BY={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;const{data:{datasets:r},options:o}=e.config,{elements:i}=o;if(!n.forceOverride&&(_S(r)||zY(o)||i&&_S(i)))return;const a=FY(e);r.forEach(a)}};function HY(e,t,n,r,o){const i=o.samples||r;if(i>=n)return e.slice(t,t+n);const a=[],s=(n-2)/(i-2);let l=0;const c=t+n-1;let u=t,f,p,m,h,b;for(a[l++]=e[u],f=0;f<i-2;f++){let w=0,v=0,g;const y=Math.floor((f+1)*s)+1+t,_=Math.min(Math.floor((f+2)*s)+1,n)+t,k=_-y;for(g=y;g<_;g++)w+=e[g].x,v+=e[g].y;w/=k,v/=k;const S=Math.floor(f*s)+1+t,E=Math.min(Math.floor((f+1)*s)+1,n)+t,{x:C,y:A}=e[u];for(m=h=-1,g=S;g<E;g++)h=.5*Math.abs((C-w)*(e[g].y-A)-(C-e[g].x)*(v-A)),h>m&&(m=h,p=e[g],b=g);a[l++]=p,u=b}return a[l++]=e[c],a}function UY(e,t,n,r){let o=0,i=0,a,s,l,c,u,f,p,m,h,b;const w=[],v=t+n-1,g=e[t].x,_=e[v].x-g;for(a=t;a<t+n;++a){s=e[a],l=(s.x-g)/_*r,c=s.y;const k=l|0;if(k===u)c<h?(h=c,f=a):c>b&&(b=c,p=a),o=(i*o+s.x)/++i;else{const S=a-1;if(!xe(f)&&!xe(p)){const E=Math.min(f,p),C=Math.max(f,p);E!==m&&E!==S&&w.push({...e[E],x:o}),C!==m&&C!==S&&w.push({...e[C],x:o})}a>0&&S!==m&&w.push(e[S]),w.push(s),u=k,i=0,h=b=c,f=p=m=a}}return w}function OR(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function SS(e){e.data.datasets.forEach(t=>{OR(t)})}function WY(e,t){const n=t.length;let r=0,o;const{iScale:i}=e,{min:a,max:s,minDefined:l,maxDefined:c}=i.getUserBounds();return l&&(r=ft(hr(t,i.axis,a).lo,0,n-1)),c?o=ft(hr(t,i.axis,s).hi+1,r,n)-r:o=n-r,{start:r,count:o}}var VY={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){SS(e);return}const r=e.width;e.data.datasets.forEach((o,i)=>{const{_data:a,indexAxis:s}=o,l=e.getDatasetMeta(i),c=a||o.data;if(is([s,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const u=e.scales[l.xAxisID];if(u.type!=="linear"&&u.type!=="time"||e.options.parsing)return;let{start:f,count:p}=WY(l,c);const m=n.threshold||4*r;if(p<=m){OR(o);return}xe(a)&&(o._data=c,delete o.data,Object.defineProperty(o,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(b){this._data=b}}));let h;switch(n.algorithm){case"lttb":h=HY(c,f,p,r,n);break;case"min-max":h=UY(c,f,p,r);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}o._decimated=h})},destroy(e){SS(e)}};function YY(e,t,n){const r=e.segments,o=e.points,i=t.points,a=[];for(const s of r){let{start:l,end:c}=s;c=Pv(l,c,o);const u=ug(n,o[l],o[c],s.loop);if(!t.segments){a.push({source:s,target:u,start:o[l],end:o[c]});continue}const f=lR(t,u);for(const p of f){const m=ug(n,i[p.start],i[p.end],p.loop),h=sR(s,o,m);for(const b of h)a.push({source:b,target:p,start:{[n]:kS(u,m,"start",Math.max)},end:{[n]:kS(u,m,"end",Math.min)}})}}return a}function ug(e,t,n,r){if(r)return;let o=t[e],i=n[e];return e==="angle"&&(o=qt(o),i=qt(i)),{property:e,start:o,end:i}}function GY(e,t){const{x:n=null,y:r=null}=e||{},o=t.points,i=[];return t.segments.forEach(({start:a,end:s})=>{s=Pv(a,s,o);const l=o[a],c=o[s];r!==null?(i.push({x:l.x,y:r}),i.push({x:c.x,y:r})):n!==null&&(i.push({x:n,y:l.y}),i.push({x:n,y:c.y}))}),i}function Pv(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function kS(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function CR(e,t){let n=[],r=!1;return Fe(e)?(r=!0,n=e):n=GY(e,t),n.length?new Qr({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function ES(e){return e&&e.fill!==!1}function qY(e,t,n){let o=e[t].fill;const i=[t];let a;if(!n)return o;for(;o!==!1&&i.indexOf(o)===-1;){if(!Ke(o))return o;if(a=e[o],!a)return!1;if(a.visible)return o;i.push(o),o=a.fill}return!1}function XY(e,t,n){const r=ZY(e);if(be(r))return isNaN(r.value)?!1:r;let o=parseFloat(r);return Ke(o)&&Math.floor(o)===o?KY(r[0],t,o,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function KY(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function QY(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:be(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function JY(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:be(e)?r=e.value:r=t.getBaseValue(),r}function ZY(e){const t=e.options,n=t.fill;let r=de(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function eG(e){const{scale:t,index:n,line:r}=e,o=[],i=r.segments,a=r.points,s=tG(t,n);s.push(CR({x:null,y:t.bottom},r));for(let l=0;l<i.length;l++){const c=i[l];for(let u=c.start;u<=c.end;u++)nG(o,a[u],s)}return new Qr({points:o,options:{}})}function tG(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let o=0;o<r.length;o++){const i=r[o];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function nG(e,t,n){const r=[];for(let o=0;o<n.length;o++){const i=n[o],{first:a,last:s,point:l}=rG(i,t,"x");if(!(!l||a&&s)){if(a)r.unshift(l);else if(e.push(l),!s)break}}e.push(...r)}function rG(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const o=r[n],i=e.segments,a=e.points;let s=!1,l=!1;for(let c=0;c<i.length;c++){const u=i[c],f=a[u.start][n],p=a[u.end][n];if(pr(o,f,p)){s=o===f,l=o===p;break}}return{first:s,last:l,point:r}}class TR{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:o,y:i,radius:a}=this;return n=n||{start:0,end:je},t.arc(o,i,a,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:o}=this,i=t.angle;return{x:n+Math.cos(i)*o,y:r+Math.sin(i)*o,angle:i}}}function oG(e){const{chart:t,fill:n,line:r}=e;if(Ke(n))return iG(t,n);if(n==="stack")return eG(e);if(n==="shape")return!0;const o=aG(e);return o instanceof TR?o:CR(o,r)}function iG(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function aG(e){return(e.scale||{}).getPointPositionForValue?lG(e):sG(e)}function sG(e){const{scale:t={},fill:n}=e,r=QY(n,t);if(Ke(r)){const o=t.isHorizontal();return{x:o?r:null,y:o?null:r}}return null}function lG(e){const{scale:t,fill:n}=e,r=t.options,o=t.getLabels().length,i=r.reverse?t.max:t.min,a=JY(n,t,i),s=[];if(r.grid.circular){const l=t.getPointPositionForValue(0,i);return new TR({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(a)})}for(let l=0;l<o;++l)s.push(t.getPointPositionForValue(l,a));return s}function Zp(e,t,n){const r=oG(t),{line:o,scale:i,axis:a}=t,s=o.options,l=s.fill,c=s.backgroundColor,{above:u=c,below:f=c}=l||{};r&&o.points.length&&(wf(e,n),cG(e,{line:o,target:r,above:u,below:f,area:n,scale:i,axis:a}),_f(e))}function cG(e,t){const{line:n,target:r,above:o,below:i,area:a,scale:s}=t,l=n._loop?"angle":t.axis;e.save(),l==="x"&&i!==o&&(OS(e,r,a.top),CS(e,{line:n,target:r,color:o,scale:s,property:l}),e.restore(),e.save(),OS(e,r,a.bottom)),CS(e,{line:n,target:r,color:i,scale:s,property:l}),e.restore()}function OS(e,t,n){const{segments:r,points:o}=t;let i=!0,a=!1;e.beginPath();for(const s of r){const{start:l,end:c}=s,u=o[l],f=o[Pv(l,c,o)];i?(e.moveTo(u.x,u.y),i=!1):(e.lineTo(u.x,n),e.lineTo(u.x,u.y)),a=!!t.pathSegment(e,s,{move:a}),a?e.closePath():e.lineTo(f.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function CS(e,t){const{line:n,target:r,property:o,color:i,scale:a}=t,s=YY(n,r,o);for(const{source:l,target:c,start:u,end:f}of s){const{style:{backgroundColor:p=i}={}}=l,m=r!==!0;e.save(),e.fillStyle=p,uG(e,a,m&&ug(o,u,f)),e.beginPath();const h=!!n.pathSegment(e,l);let b;if(m){h?e.closePath():TS(e,r,f,o);const w=!!r.pathSegment(e,c,{move:h,reverse:!0});b=h&&w,b||TS(e,r,u,o)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function uG(e,t,n){const{top:r,bottom:o}=t.chart.chartArea,{property:i,start:a,end:s}=n||{};i==="x"&&(e.beginPath(),e.rect(a,r,s-a,o-r),e.clip())}function TS(e,t,n,r){const o=t.interpolate(n,r);o&&e.lineTo(o.x,o.y)}var dG={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,o=[];let i,a,s,l;for(a=0;a<r;++a)i=e.getDatasetMeta(a),s=i.dataset,l=null,s&&s.options&&s instanceof Qr&&(l={visible:e.isDatasetVisible(a),index:a,fill:XY(s,a,r),chart:e,axis:i.controller.options.indexAxis,scale:i.vScale,line:s}),i.$filler=l,o.push(l);for(a=0;a<r;++a)l=o[a],!(!l||l.fill===!1)&&(l.fill=qY(o,a,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",o=e.getSortedVisibleDatasetMetas(),i=e.chartArea;for(let a=o.length-1;a>=0;--a){const s=o[a].$filler;s&&(s.line.updateControlPoints(i,s.axis),r&&s.fill&&Zp(e.ctx,s,i))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let o=r.length-1;o>=0;--o){const i=r[o].$filler;ES(i)&&Zp(e.ctx,i,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!ES(r)||n.drawTime!=="beforeDatasetDraw"||Zp(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const RS=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},fG=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class PS extends Ir{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Te(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,o)=>t.sort(r,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,o=ut(r.font),i=o.size,a=this._computeTitleHeight(),{boxWidth:s,itemHeight:l}=RS(r,i);let c,u;n.font=o.string,this.isHorizontal()?(c=this.maxWidth,u=this._fitRows(a,i,s,l)+10):(u=this.maxHeight,c=this._fitCols(a,o,s,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,o){const{ctx:i,maxWidth:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],u=o+s;let f=t;i.textAlign="left",i.textBaseline="middle";let p=-1,m=-u;return this.legendItems.forEach((h,b)=>{const w=r+n/2+i.measureText(h.text).width;(b===0||c[c.length-1]+w+2*s>a)&&(f+=u,c[c.length-(b>0?0:1)]=0,m+=u,p++),l[b]={left:0,top:m,row:p,width:w,height:o},c[c.length-1]+=w+s}),f}_fitCols(t,n,r,o){const{ctx:i,maxHeight:a,options:{labels:{padding:s}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],u=a-t;let f=s,p=0,m=0,h=0,b=0;return this.legendItems.forEach((w,v)=>{const{itemWidth:g,itemHeight:y}=pG(r,n,i,w,o);v>0&&m+y+2*s>u&&(f+=p+s,c.push({width:p,height:m}),h+=p+s,b++,p=m=0),l[v]={left:h,top:m,col:b,width:g,height:y},p=Math.max(p,g),m+=y+s}),f+=p,c.push({width:p,height:m}),f}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:o},rtl:i}}=this,a=Ki(i,this.left,this.width);if(this.isHorizontal()){let s=0,l=_t(r,this.left+o,this.right-this.lineWidths[s]);for(const c of n)s!==c.row&&(s=c.row,l=_t(r,this.left+o,this.right-this.lineWidths[s])),c.top+=this.top+t+o,c.left=a.leftForLtr(a.x(l),c.width),l+=c.width+o}else{let s=0,l=_t(r,this.top+t+o,this.bottom-this.columnSizes[s].height);for(const c of n)c.col!==s&&(s=c.col,l=_t(r,this.top+t+o,this.bottom-this.columnSizes[s].height)),c.top=l,c.left+=this.left+o,c.left=a.leftForLtr(a.x(c.left),c.width),l+=c.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;wf(t,this),this._draw(),_f(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:o}=this,{align:i,labels:a}=t,s=Qe.color,l=Ki(t.rtl,this.left,this.width),c=ut(a.font),{padding:u}=a,f=c.size,p=f/2;let m;this.drawTitle(),o.textAlign=l.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=c.string;const{boxWidth:h,boxHeight:b,itemHeight:w}=RS(a,f),v=function(S,E,C){if(isNaN(h)||h<=0||isNaN(b)||b<0)return;o.save();const A=de(C.lineWidth,1);if(o.fillStyle=de(C.fillStyle,s),o.lineCap=de(C.lineCap,"butt"),o.lineDashOffset=de(C.lineDashOffset,0),o.lineJoin=de(C.lineJoin,"miter"),o.lineWidth=A,o.strokeStyle=de(C.strokeStyle,s),o.setLineDash(de(C.lineDash,[])),a.usePointStyle){const P={radius:b*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:A},L=l.xPlus(S,h/2),W=E+p;K2(o,P,L,W,a.pointStyleWidth&&h)}else{const P=E+Math.max((f-b)/2,0),L=l.leftForLtr(S,h),W=Ko(C.borderRadius);o.beginPath(),Object.values(W).some(Z=>Z!==0)?rl(o,{x:L,y:P,w:h,h:b,radius:W}):o.rect(L,P,h,b),o.fill(),A!==0&&o.stroke()}o.restore()},g=function(S,E,C){ci(o,C.text,S,E+w/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},y=this.isHorizontal(),_=this._computeTitleHeight();y?m={x:_t(i,this.left+u,this.right-r[0]),y:this.top+u+_,line:0}:m={x:this.left+u,y:_t(i,this.top+_+u,this.bottom-n[0].height),line:0},oR(this.ctx,t.textDirection);const k=w+u;this.legendItems.forEach((S,E)=>{o.strokeStyle=S.fontColor,o.fillStyle=S.fontColor;const C=o.measureText(S.text).width,A=l.textAlign(S.textAlign||(S.textAlign=a.textAlign)),P=h+p+C;let L=m.x,W=m.y;l.setWidth(this.width),y?E>0&&L+P+u>this.right&&(W=m.y+=k,m.line++,L=m.x=_t(i,this.left+u,this.right-r[m.line])):E>0&&W+k>this.bottom&&(L=m.x=L+n[m.line].width+u,m.line++,W=m.y=_t(i,this.top+_+u,this.bottom-n[m.line].height));const Z=l.x(L);if(v(Z,W,S),L=j9(A,L+h+p,y?L+P:this.right,t.rtl),g(l.x(L),W,S),y)m.x+=P+u;else if(typeof S.text!="string"){const se=c.lineHeight;m.y+=RR(S,se)+u}else m.y+=k}),iR(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=ut(n.font),o=Ot(n.padding);if(!n.display)return;const i=Ki(t.rtl,this.left,this.width),a=this.ctx,s=n.position,l=r.size/2,c=o.top+l;let u,f=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),u=this.top+c,f=_t(t.align,f,this.right-p);else{const h=this.columnSizes.reduce((b,w)=>Math.max(b,w.height),0);u=c+_t(t.align,this.top,this.bottom-h-t.labels.padding-this._computeTitleHeight())}const m=_t(s,f,f+p);a.textAlign=i.textAlign(wv(s)),a.textBaseline="middle",a.strokeStyle=n.color,a.fillStyle=n.color,a.font=r.string,ci(a,n.text,m,u,r)}_computeTitleHeight(){const t=this.options.title,n=ut(t.font),r=Ot(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,o,i;if(pr(t,this.left,this.right)&&pr(n,this.top,this.bottom)){for(i=this.legendHitBoxes,r=0;r<i.length;++r)if(o=i[r],pr(t,o.left,o.left+o.width)&&pr(n,o.top,o.top+o.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!gG(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const o=this._hoveredItem,i=fG(o,r);o&&!i&&Te(n.onLeave,[t,o,this],this),this._hoveredItem=r,r&&!i&&Te(n.onHover,[t,r,this],this)}else r&&Te(n.onClick,[t,r,this],this)}}function pG(e,t,n,r,o){const i=hG(r,e,t,n),a=mG(o,r,t.lineHeight);return{itemWidth:i,itemHeight:a}}function hG(e,t,n,r){let o=e.text;return o&&typeof o!="string"&&(o=o.reduce((i,a)=>i.length>a.length?i:a)),t+n.size/2+r.measureText(o).width}function mG(e,t,n){let r=e;return typeof t.text!="string"&&(r=RR(t,n)),r}function RR(e,t){const n=e.text?e.text.length:0;return t*n}function gG(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var bG={id:"legend",_element:PS,start(e,t,n){const r=e.legend=new PS({ctx:e.ctx,options:n,chart:e});kt.configure(e,r,n),kt.addBox(e,r)},stop(e){kt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;kt.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,o=n.chart;o.isDatasetVisible(r)?(o.hide(r),t.hidden=!0):(o.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:o,color:i,useBorderRadius:a,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(n?0:void 0),u=Ot(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:i,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(u.width+u.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:o||c.textAlign,borderRadius:a&&(s||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Av extends Ir{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const o=Fe(r.text)?r.text.length:1;this._padding=Ot(r.padding);const i=o*ut(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:o,right:i,options:a}=this,s=a.align;let l=0,c,u,f;return this.isHorizontal()?(u=_t(s,r,i),f=n+t,c=i-r):(a.position==="left"?(u=r+t,f=_t(s,o,n),l=Le*-.5):(u=i-t,f=_t(s,n,o),l=Le*.5),c=o-n),{titleX:u,titleY:f,maxWidth:c,rotation:l}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=ut(n.font),i=r.lineHeight/2+this._padding.top,{titleX:a,titleY:s,maxWidth:l,rotation:c}=this._drawArgs(i);ci(t,n.text,0,0,r,{color:n.color,maxWidth:l,rotation:c,textAlign:wv(n.align),textBaseline:"middle",translation:[a,s]})}}function vG(e,t){const n=new Av({ctx:e.ctx,options:t,chart:e});kt.configure(e,n,t),kt.addBox(e,n),e.titleBlock=n}var yG={id:"title",_element:Av,start(e,t,n){vG(e,n)},stop(e){const t=e.titleBlock;kt.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;kt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Oc=new WeakMap;var xG={id:"subtitle",start(e,t,n){const r=new Av({ctx:e.ctx,options:n,chart:e});kt.configure(e,r,n),kt.addBox(e,r),Oc.set(e,r)},stop(e){kt.removeBox(e,Oc.get(e)),Oc.delete(e)},beforeUpdate(e,t,n){const r=Oc.get(e);kt.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ls={average(e){if(!e.length)return!1;let t,n,r=new Set,o=0,i=0;for(t=0,n=e.length;t<n;++t){const s=e[t].element;if(s&&s.hasValue()){const l=s.tooltipPosition();r.add(l.x),o+=l.y,++i}}return{x:[...r].reduce((s,l)=>s+l)/r.size,y:o/i}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,o=Number.POSITIVE_INFINITY,i,a,s;for(i=0,a=e.length;i<a;++i){const l=e[i].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),u=rg(t,c);u<o&&(o=u,s=l)}}if(s){const l=s.tooltipPosition();n=l.x,r=l.y}return{x:n,y:r}}};function Hn(e,t){return t&&(Fe(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function sr(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function wG(e,t){const{element:n,datasetIndex:r,index:o}=t,i=e.getDatasetMeta(r).controller,{label:a,value:s}=i.getLabelAndValue(o);return{chart:e,label:a,parsed:i.getParsed(o),raw:e.data.datasets[r].data[o],formattedValue:s,dataset:i.getDataset(),dataIndex:o,datasetIndex:r,element:n}}function AS(e,t){const n=e.chart.ctx,{body:r,footer:o,title:i}=e,{boxWidth:a,boxHeight:s}=t,l=ut(t.bodyFont),c=ut(t.titleFont),u=ut(t.footerFont),f=i.length,p=o.length,m=r.length,h=Ot(t.padding);let b=h.height,w=0,v=r.reduce((_,k)=>_+k.before.length+k.lines.length+k.after.length,0);if(v+=e.beforeBody.length+e.afterBody.length,f&&(b+=f*c.lineHeight+(f-1)*t.titleSpacing+t.titleMarginBottom),v){const _=t.displayColors?Math.max(s,l.lineHeight):l.lineHeight;b+=m*_+(v-m)*l.lineHeight+(v-1)*t.bodySpacing}p&&(b+=t.footerMarginTop+p*u.lineHeight+(p-1)*t.footerSpacing);let g=0;const y=function(_){w=Math.max(w,n.measureText(_).width+g)};return n.save(),n.font=c.string,Se(e.title,y),n.font=l.string,Se(e.beforeBody.concat(e.afterBody),y),g=t.displayColors?a+2+t.boxPadding:0,Se(r,_=>{Se(_.before,y),Se(_.lines,y),Se(_.after,y)}),g=0,n.font=u.string,Se(e.footer,y),n.restore(),w+=h.width,{width:w,height:b}}function _G(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function SG(e,t,n,r){const{x:o,width:i}=r,a=n.caretSize+n.caretPadding;if(e==="left"&&o+i+a>t.width||e==="right"&&o-i-a<0)return!0}function kG(e,t,n,r){const{x:o,width:i}=n,{width:a,chartArea:{left:s,right:l}}=e;let c="center";return r==="center"?c=o<=(s+l)/2?"left":"right":o<=i/2?c="left":o>=a-i/2&&(c="right"),SG(c,e,t,n)&&(c="center"),c}function IS(e,t,n){const r=n.yAlign||t.yAlign||_G(e,n);return{xAlign:n.xAlign||t.xAlign||kG(e,t,n,r),yAlign:r}}function EG(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function OG(e,t,n){let{y:r,height:o}=e;return t==="top"?r+=n:t==="bottom"?r-=o+n:r-=o/2,r}function MS(e,t,n,r){const{caretSize:o,caretPadding:i,cornerRadius:a}=e,{xAlign:s,yAlign:l}=n,c=o+i,{topLeft:u,topRight:f,bottomLeft:p,bottomRight:m}=Ko(a);let h=EG(t,s);const b=OG(t,l,c);return l==="center"?s==="left"?h+=c:s==="right"&&(h-=c):s==="left"?h-=Math.max(u,p)+o:s==="right"&&(h+=Math.max(f,m)+o),{x:ft(h,0,r.width-t.width),y:ft(b,0,r.height-t.height)}}function Cc(e,t,n){const r=Ot(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function jS(e){return Hn([],sr(e))}function CG(e,t,n){return So(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function LS(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const PR={beforeTitle:ir,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:ir,beforeBody:ir,beforeLabel:ir,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return xe(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:ir,afterBody:ir,beforeFooter:ir,footer:ir,afterFooter:ir};function Mt(e,t,n,r){const o=e[t].call(n,r);return typeof o>"u"?PR[t].call(n,r):o}class dg extends Ir{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),o=r.enabled&&n.options.animation&&r.animations,i=new cR(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=CG(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,o=Mt(r,"beforeTitle",this,t),i=Mt(r,"title",this,t),a=Mt(r,"afterTitle",this,t);let s=[];return s=Hn(s,sr(o)),s=Hn(s,sr(i)),s=Hn(s,sr(a)),s}getBeforeBody(t,n){return jS(Mt(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,o=[];return Se(t,i=>{const a={before:[],lines:[],after:[]},s=LS(r,i);Hn(a.before,sr(Mt(s,"beforeLabel",this,i))),Hn(a.lines,Mt(s,"label",this,i)),Hn(a.after,sr(Mt(s,"afterLabel",this,i))),o.push(a)}),o}getAfterBody(t,n){return jS(Mt(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,o=Mt(r,"beforeFooter",this,t),i=Mt(r,"footer",this,t),a=Mt(r,"afterFooter",this,t);let s=[];return s=Hn(s,sr(o)),s=Hn(s,sr(i)),s=Hn(s,sr(a)),s}_createItems(t){const n=this._active,r=this.chart.data,o=[],i=[],a=[];let s=[],l,c;for(l=0,c=n.length;l<c;++l)s.push(wG(this.chart,n[l]));return t.filter&&(s=s.filter((u,f,p)=>t.filter(u,f,p,r))),t.itemSort&&(s=s.sort((u,f)=>t.itemSort(u,f,r))),Se(s,u=>{const f=LS(t.callbacks,u);o.push(Mt(f,"labelColor",this,u)),i.push(Mt(f,"labelPointStyle",this,u)),a.push(Mt(f,"labelTextColor",this,u))}),this.labelColors=o,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=s,s}update(t,n){const r=this.options.setContext(this.getContext()),o=this._active;let i,a=[];if(!o.length)this.opacity!==0&&(i={opacity:0});else{const s=ls[r.position].call(this,o,this._eventPosition);a=this._createItems(r),this.title=this.getTitle(a,r),this.beforeBody=this.getBeforeBody(a,r),this.body=this.getBody(a,r),this.afterBody=this.getAfterBody(a,r),this.footer=this.getFooter(a,r);const l=this._size=AS(this,r),c=Object.assign({},s,l),u=IS(this.chart,r,c),f=MS(r,c,u,this.chart);this.xAlign=u.xAlign,this.yAlign=u.yAlign,i={opacity:1,x:f.x,y:f.y,width:l.width,height:l.height,caretX:s.x,caretY:s.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,o){const i=this.getCaretPosition(t,r,o);n.lineTo(i.x1,i.y1),n.lineTo(i.x2,i.y2),n.lineTo(i.x3,i.y3)}getCaretPosition(t,n,r){const{xAlign:o,yAlign:i}=this,{caretSize:a,cornerRadius:s}=r,{topLeft:l,topRight:c,bottomLeft:u,bottomRight:f}=Ko(s),{x:p,y:m}=t,{width:h,height:b}=n;let w,v,g,y,_,k;return i==="center"?(_=m+b/2,o==="left"?(w=p,v=w-a,y=_+a,k=_-a):(w=p+h,v=w+a,y=_-a,k=_+a),g=w):(o==="left"?v=p+Math.max(l,u)+a:o==="right"?v=p+h-Math.max(c,f)-a:v=this.caretX,i==="top"?(y=m,_=y-a,w=v-a,g=v+a):(y=m+b,_=y+a,w=v+a,g=v-a),k=y),{x1:w,x2:v,x3:g,y1:y,y2:_,y3:k}}drawTitle(t,n,r){const o=this.title,i=o.length;let a,s,l;if(i){const c=Ki(r.rtl,this.x,this.width);for(t.x=Cc(this,r.titleAlign,r),n.textAlign=c.textAlign(r.titleAlign),n.textBaseline="middle",a=ut(r.titleFont),s=r.titleSpacing,n.fillStyle=r.titleColor,n.font=a.string,l=0;l<i;++l)n.fillText(o[l],c.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+s,l+1===i&&(t.y+=r.titleMarginBottom-s)}}_drawColorBox(t,n,r,o,i){const a=this.labelColors[r],s=this.labelPointStyles[r],{boxHeight:l,boxWidth:c}=i,u=ut(i.bodyFont),f=Cc(this,"left",i),p=o.x(f),m=l<u.lineHeight?(u.lineHeight-l)/2:0,h=n.y+m;if(i.usePointStyle){const b={radius:Math.min(c,l)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},w=o.leftForLtr(p,c)+c/2,v=h+l/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,ig(t,b,w,v),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,ig(t,b,w,v)}else{t.lineWidth=be(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const b=o.leftForLtr(p,c),w=o.leftForLtr(o.xPlus(p,1),c-2),v=Ko(a.borderRadius);Object.values(v).some(g=>g!==0)?(t.beginPath(),t.fillStyle=i.multiKeyBackground,rl(t,{x:b,y:h,w:c,h:l,radius:v}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),rl(t,{x:w,y:h+1,w:c-2,h:l-2,radius:v}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(b,h,c,l),t.strokeRect(b,h,c,l),t.fillStyle=a.backgroundColor,t.fillRect(w,h+1,c-2,l-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:o}=this,{bodySpacing:i,bodyAlign:a,displayColors:s,boxHeight:l,boxWidth:c,boxPadding:u}=r,f=ut(r.bodyFont);let p=f.lineHeight,m=0;const h=Ki(r.rtl,this.x,this.width),b=function(C){n.fillText(C,h.x(t.x+m),t.y+p/2),t.y+=p+i},w=h.textAlign(a);let v,g,y,_,k,S,E;for(n.textAlign=a,n.textBaseline="middle",n.font=f.string,t.x=Cc(this,w,r),n.fillStyle=r.bodyColor,Se(this.beforeBody,b),m=s&&w!=="right"?a==="center"?c/2+u:c+2+u:0,_=0,S=o.length;_<S;++_){for(v=o[_],g=this.labelTextColors[_],n.fillStyle=g,Se(v.before,b),y=v.lines,s&&y.length&&(this._drawColorBox(n,t,_,h,r),p=Math.max(f.lineHeight,l)),k=0,E=y.length;k<E;++k)b(y[k]),p=f.lineHeight;Se(v.after,b)}m=0,p=f.lineHeight,Se(this.afterBody,b),t.y-=i}drawFooter(t,n,r){const o=this.footer,i=o.length;let a,s;if(i){const l=Ki(r.rtl,this.x,this.width);for(t.x=Cc(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=l.textAlign(r.footerAlign),n.textBaseline="middle",a=ut(r.footerFont),n.fillStyle=r.footerColor,n.font=a.string,s=0;s<i;++s)n.fillText(o[s],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r.footerSpacing}}drawBackground(t,n,r,o){const{xAlign:i,yAlign:a}=this,{x:s,y:l}=t,{width:c,height:u}=r,{topLeft:f,topRight:p,bottomLeft:m,bottomRight:h}=Ko(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(s+f,l),a==="top"&&this.drawCaret(t,n,r,o),n.lineTo(s+c-p,l),n.quadraticCurveTo(s+c,l,s+c,l+p),a==="center"&&i==="right"&&this.drawCaret(t,n,r,o),n.lineTo(s+c,l+u-h),n.quadraticCurveTo(s+c,l+u,s+c-h,l+u),a==="bottom"&&this.drawCaret(t,n,r,o),n.lineTo(s+m,l+u),n.quadraticCurveTo(s,l+u,s,l+u-m),a==="center"&&i==="left"&&this.drawCaret(t,n,r,o),n.lineTo(s,l+f),n.quadraticCurveTo(s,l,s+f,l),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,o=r&&r.x,i=r&&r.y;if(o||i){const a=ls[t.position].call(this,this._active,this._eventPosition);if(!a)return;const s=this._size=AS(this,t),l=Object.assign({},a,this._size),c=IS(n,t,l),u=MS(t,l,c,n);(o._to!==u.x||i._to!==u.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=s.width,this.height=s.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,u))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},i={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const a=Ot(n.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&s&&(t.save(),t.globalAlpha=r,this.drawBackground(i,t,o,n),oR(t,n.textDirection),i.y+=a.top,this.drawTitle(i,t,n),this.drawBody(i,t,n),this.drawFooter(i,t,n),iR(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,o=t.map(({datasetIndex:s,index:l})=>{const c=this.chart.getDatasetMeta(s);if(!c)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:c.data[l],index:l}}),i=!Zu(r,o),a=this._positionChanged(o,n);(i||a)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,i=this._active||[],a=this._getActiveElements(t,i,n,r),s=this._positionChanged(a,t),l=n||!Zu(a,i)||s;return l&&(this._active=a,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),l}_getActiveElements(t,n,r,o){const i=this.options;if(t.type==="mouseout")return[];if(!o)return n.filter(s=>this.chart.data.datasets[s.datasetIndex]&&this.chart.getDatasetMeta(s.datasetIndex).controller.getParsed(s.index)!==void 0);const a=this.chart.getElementsAtEventForMode(t,i.mode,i,r);return i.reverse&&a.reverse(),a}_positionChanged(t,n){const{caretX:r,caretY:o,options:i}=this,a=ls[i.position].call(this,t,n);return a!==!1&&(r!==a.x||o!==a.y)}}H(dg,"positioners",ls);var TG={id:"tooltip",_element:dg,positioners:ls,afterInit(e,t,n){n&&(e.tooltip=new dg({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:PR},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},RG=Object.freeze({__proto__:null,Colors:BY,Decimation:VY,Filler:dG,Legend:bG,SubTitle:xG,Title:yG,Tooltip:TG});const PG=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function AG(e,t,n,r){const o=e.indexOf(t);if(o===-1)return PG(e,t,n,r);const i=e.lastIndexOf(t);return o!==i?n:o}const IG=(e,t)=>e===null?null:ft(Math.round(e),0,t);function DS(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class fg extends bi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:o,label:i}of n)r[o]===i&&r.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(xe(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:AG(r,t,de(n,t),this._addedLabels),IG(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(o=this.getLabels().length-1)),this.min=r,this.max=o}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,o=[];let i=this.getLabels();i=t===0&&n===i.length-1?i:i.slice(t,n+1),this._valueRange=Math.max(i.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let a=t;a<=n;a++)o.push({value:a});return o}getLabelForValue(t){return DS.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}H(fg,"id","category"),H(fg,"defaults",{ticks:{callback:DS}});function MG(e,t){const n=[],{bounds:o,step:i,min:a,max:s,precision:l,count:c,maxTicks:u,maxDigits:f,includeBounds:p}=e,m=i||1,h=u-1,{min:b,max:w}=t,v=!xe(a),g=!xe(s),y=!xe(c),_=(w-b)/(f+1);let k=P_((w-b)/h/m)*m,S,E,C,A;if(k<1e-14&&!v&&!g)return[{value:b},{value:w}];A=Math.ceil(w/k)-Math.floor(b/k),A>h&&(k=P_(A*k/h/m)*m),xe(l)||(S=Math.pow(10,l),k=Math.ceil(k*S)/S),o==="ticks"?(E=Math.floor(b/k)*k,C=Math.ceil(w/k)*k):(E=b,C=w),v&&g&&i&&C9((s-a)/i,k/1e3)?(A=Math.round(Math.min((s-a)/k,u)),k=(s-a)/A,E=a,C=s):y?(E=v?a:E,C=g?s:C,A=c-1,k=(C-E)/A):(A=(C-E)/k,Ss(A,Math.round(A),k/1e3)?A=Math.round(A):A=Math.ceil(A));const P=Math.max(A_(k),A_(E));S=Math.pow(10,xe(l)?P:l),E=Math.round(E*S)/S,C=Math.round(C*S)/S;let L=0;for(v&&(p&&E!==a?(n.push({value:a}),E<a&&L++,Ss(Math.round((E+L*k)*S)/S,a,NS(a,_,e))&&L++):E<a&&L++);L<A;++L){const W=Math.round((E+L*k)*S)/S;if(g&&W>s)break;n.push({value:W})}return g&&p&&C!==s?n.length&&Ss(n[n.length-1].value,s,NS(s,_,e))?n[n.length-1].value=s:n.push({value:s}):(!g||C===s)&&n.push({value:C}),n}function NS(e,t,{horizontal:n,minRotation:r}){const o=Rn(r),i=(n?Math.sin(o):Math.cos(o))||.001,a=.75*t*(""+e).length;return Math.min(t/i,a)}class sd extends bi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return xe(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:o,max:i}=this;const a=l=>o=n?o:l,s=l=>i=r?i:l;if(t){const l=tr(o),c=tr(i);l<0&&c<0?s(0):l>0&&c>0&&a(0)}if(o===i){let l=i===0?1:Math.abs(i*.05);s(i+l),t||a(o-l)}this.min=o,this.max=i}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,o;return r?(o=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const o={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},i=this._range||this,a=MG(o,i);return t.bounds==="ticks"&&B2(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const o=(r-n)/Math.max(t.length-1,1)/2;n-=o,r+=o}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return Rl(t,this.chart.options.locale,this.options.ticks.format)}}class pg extends sd{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ke(t)?t:0,this.max=Ke(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=Rn(this.options.ticks.minRotation),o=(t?Math.sin(r):Math.cos(r))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,i.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}H(pg,"id","linear"),H(pg,"defaults",{ticks:{callback:xf.formatters.numeric}});const il=e=>Math.floor(Kr(e)),Ao=(e,t)=>Math.pow(10,il(e)+t);function $S(e){return e/Math.pow(10,il(e))===1}function FS(e,t,n){const r=Math.pow(10,n),o=Math.floor(e/r);return Math.ceil(t/r)-o}function jG(e,t){const n=t-e;let r=il(n);for(;FS(e,t,r)>10;)r++;for(;FS(e,t,r)<10;)r--;return Math.min(r,il(e))}function LG(e,{min:t,max:n}){t=Yt(e.min,t);const r=[],o=il(t);let i=jG(t,n),a=i<0?Math.pow(10,Math.abs(i)):1;const s=Math.pow(10,i),l=o>i?Math.pow(10,o):0,c=Math.round((t-l)*a)/a,u=Math.floor((t-l)/s/10)*s*10;let f=Math.floor((c-u)/Math.pow(10,i)),p=Yt(e.min,Math.round((l+u+f*Math.pow(10,i))*a)/a);for(;p<n;)r.push({value:p,major:$S(p),significand:f}),f>=10?f=f<15?15:20:f++,f>=20&&(i++,f=2,a=i>=0?1:a),p=Math.round((l+u+f*Math.pow(10,i))*a)/a;const m=Yt(e.max,p);return r.push({value:m,major:$S(m),significand:f}),r}class hg extends bi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,n){const r=sd.prototype.parse.apply(this,[t,n]);if(r===0){this._zero=!0;return}return Ke(r)&&r>0?r:null}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=Ke(t)?Math.max(0,t):null,this.max=Ke(n)?Math.max(0,n):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!Ke(this._userMin)&&(this.min=t===Ao(this.min,0)?Ao(this.min,-1):Ao(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let r=this.min,o=this.max;const i=s=>r=t?r:s,a=s=>o=n?o:s;r===o&&(r<=0?(i(1),a(10)):(i(Ao(r,-1)),a(Ao(o,1)))),r<=0&&i(Ao(o,-1)),o<=0&&a(Ao(r,1)),this.min=r,this.max=o}buildTicks(){const t=this.options,n={min:this._userMin,max:this._userMax},r=LG(n,this);return t.bounds==="ticks"&&B2(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}getLabelForValue(t){return t===void 0?"0":Rl(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Kr(t),this._valueRange=Kr(this.max)-Kr(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Kr(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const n=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+n*this._valueRange)}}H(hg,"id","logarithmic"),H(hg,"defaults",{ticks:{callback:xf.formatters.logarithmic,major:{enabled:!0}}});function mg(e){const t=e.ticks;if(t.display&&e.display){const n=Ot(t.backdropPadding);return de(t.font&&t.font.size,Qe.font.size)+n.height}return 0}function DG(e,t,n){return n=Fe(n)?n:[n],{w:W9(e,t.string,n),h:n.length*t.lineHeight}}function zS(e,t,n,r,o){return e===r||e===o?{start:t-n/2,end:t+n/2}:e<r||e>o?{start:t-n,end:t}:{start:t,end:t+n}}function NG(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],o=[],i=e._pointLabels.length,a=e.options.pointLabels,s=a.centerPointLabels?Le/i:0;for(let l=0;l<i;l++){const c=a.setContext(e.getPointLabelContext(l));o[l]=c.padding;const u=e.getPointPosition(l,e.drawingArea+o[l],s),f=ut(c.font),p=DG(e.ctx,f,e._pointLabels[l]);r[l]=p;const m=qt(e.getIndexAngle(l)+s),h=Math.round(yv(m)),b=zS(h,u.x,p.w,0,180),w=zS(h,u.y,p.h,90,270);$G(n,t,m,b,w)}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=BG(e,r,o)}function $G(e,t,n,r,o){const i=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<t.l?(s=(t.l-r.start)/i,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/i,e.r=Math.max(e.r,t.r+s)),o.start<t.t?(l=(t.t-o.start)/a,e.t=Math.min(e.t,t.t-l)):o.end>t.b&&(l=(o.end-t.b)/a,e.b=Math.max(e.b,t.b+l))}function FG(e,t,n){const r=e.drawingArea,{extra:o,additionalAngle:i,padding:a,size:s}=n,l=e.getPointPosition(t,r+o+a,i),c=Math.round(yv(qt(l.angle+nt))),u=WG(l.y,s.h,c),f=HG(c),p=UG(l.x,s.w,f);return{visible:!0,x:l.x,y:u,textAlign:f,left:p,top:u,right:p+s.w,bottom:u+s.h}}function zG(e,t){if(!t)return!0;const{left:n,top:r,right:o,bottom:i}=e;return!(mr({x:n,y:r},t)||mr({x:n,y:i},t)||mr({x:o,y:r},t)||mr({x:o,y:i},t))}function BG(e,t,n){const r=[],o=e._pointLabels.length,i=e.options,{centerPointLabels:a,display:s}=i.pointLabels,l={extra:mg(i)/2,additionalAngle:a?Le/o:0};let c;for(let u=0;u<o;u++){l.padding=n[u],l.size=t[u];const f=FG(e,u,l);r.push(f),s==="auto"&&(f.visible=zG(f,c),f.visible&&(c=f))}return r}function HG(e){return e===0||e===180?"center":e<180?"left":"right"}function UG(e,t,n){return n==="right"?e-=t:n==="center"&&(e-=t/2),e}function WG(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function VG(e,t,n){const{left:r,top:o,right:i,bottom:a}=n,{backdropColor:s}=t;if(!xe(s)){const l=Ko(t.borderRadius),c=Ot(t.backdropPadding);e.fillStyle=s;const u=r-c.left,f=o-c.top,p=i-r+c.width,m=a-o+c.height;Object.values(l).some(h=>h!==0)?(e.beginPath(),rl(e,{x:u,y:f,w:p,h:m,radius:l}),e.fill()):e.fillRect(u,f,p,m)}}function YG(e,t){const{ctx:n,options:{pointLabels:r}}=e;for(let o=t-1;o>=0;o--){const i=e._pointLabelItems[o];if(!i.visible)continue;const a=r.setContext(e.getPointLabelContext(o));VG(n,a,i);const s=ut(a.font),{x:l,y:c,textAlign:u}=i;ci(n,e._pointLabels[o],l,c+s.lineHeight/2,s,{color:a.color,textAlign:u,textBaseline:"middle"})}}function AR(e,t,n,r){const{ctx:o}=e;if(n)o.arc(e.xCenter,e.yCenter,t,0,je);else{let i=e.getPointPosition(0,t);o.moveTo(i.x,i.y);for(let a=1;a<r;a++)i=e.getPointPosition(a,t),o.lineTo(i.x,i.y)}}function GG(e,t,n,r,o){const i=e.ctx,a=t.circular,{color:s,lineWidth:l}=t;!a&&!r||!s||!l||n<0||(i.save(),i.strokeStyle=s,i.lineWidth=l,i.setLineDash(o.dash),i.lineDashOffset=o.dashOffset,i.beginPath(),AR(e,n,a,r),i.closePath(),i.stroke(),i.restore())}function qG(e,t,n){return So(e,{label:n,index:t,type:"pointLabel"})}class cs extends sd{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ot(mg(this.options)/2),n=this.width=this.maxWidth-t.width,r=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+n/2+t.left),this.yCenter=Math.floor(this.top+r/2+t.top),this.drawingArea=Math.floor(Math.min(n,r)/2)}determineDataLimits(){const{min:t,max:n}=this.getMinMax(!1);this.min=Ke(t)&&!isNaN(t)?t:0,this.max=Ke(n)&&!isNaN(n)?n:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/mg(this.options))}generateTickLabels(t){sd.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((n,r)=>{const o=Te(this.options.pointLabels.callback,[n,r],this);return o||o===0?o:""}).filter((n,r)=>this.chart.getDataVisibility(r))}fit(){const t=this.options;t.display&&t.pointLabels.display?NG(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,n,r,o){this.xCenter+=Math.floor((t-n)/2),this.yCenter+=Math.floor((r-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,n,r,o))}getIndexAngle(t){const n=je/(this._pointLabels.length||1),r=this.options.startAngle||0;return qt(t*n+Rn(r))}getDistanceFromCenterForValue(t){if(xe(t))return NaN;const n=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*n:(t-this.min)*n}getValueForDistanceFromCenter(t){if(xe(t))return NaN;const n=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-n:this.min+n}getPointLabelContext(t){const n=this._pointLabels||[];if(t>=0&&t<n.length){const r=n[t];return qG(this.getContext(),t,r)}}getPointPosition(t,n,r=0){const o=this.getIndexAngle(t)-nt+r;return{x:Math.cos(o)*n+this.xCenter,y:Math.sin(o)*n+this.yCenter,angle:o}}getPointPositionForValue(t,n){return this.getPointPosition(t,this.getDistanceFromCenterForValue(n))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:n,top:r,right:o,bottom:i}=this._pointLabelItems[t];return{left:n,top:r,right:o,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:n}}=this.options;if(t){const r=this.ctx;r.save(),r.beginPath(),AR(this,this.getDistanceFromCenterForValue(this._endValue),n,this._pointLabels.length),r.closePath(),r.fillStyle=t,r.fill(),r.restore()}}drawGrid(){const t=this.ctx,n=this.options,{angleLines:r,grid:o,border:i}=n,a=this._pointLabels.length;let s,l,c;if(n.pointLabels.display&&YG(this,a),o.display&&this.ticks.forEach((u,f)=>{if(f!==0||f===0&&this.min<0){l=this.getDistanceFromCenterForValue(u.value);const p=this.getContext(f),m=o.setContext(p),h=i.setContext(p);GG(this,m,l,a,h)}}),r.display){for(t.save(),s=a-1;s>=0;s--){const u=r.setContext(this.getPointLabelContext(s)),{color:f,lineWidth:p}=u;!p||!f||(t.lineWidth=p,t.strokeStyle=f,t.setLineDash(u.borderDash),t.lineDashOffset=u.borderDashOffset,l=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),c=this.getPointPosition(s,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;const o=this.getIndexAngle(0);let i,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,l)=>{if(l===0&&this.min>=0&&!n.reverse)return;const c=r.setContext(this.getContext(l)),u=ut(c.font);if(i=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=u.string,a=t.measureText(s.label).width,t.fillStyle=c.backdropColor;const f=Ot(c.backdropPadding);t.fillRect(-a/2-f.left,-i-u.size/2-f.top,a+f.width,u.size+f.height)}ci(t,s.label,0,-i,u,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}H(cs,"id","radialLinear"),H(cs,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:xf.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),H(cs,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),H(cs,"descriptors",{angleLines:{_fallback:"grid"}});const Ef={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Nt=Object.keys(Ef);function BS(e,t){return e-t}function HS(e,t){if(xe(t))return null;const n=e._adapter,{parser:r,round:o,isoWeekday:i}=e._parseOpts;let a=t;return typeof r=="function"&&(a=r(a)),Ke(a)||(a=typeof r=="string"?n.parse(a,r):n.parse(a)),a===null?null:(o&&(a=o==="week"&&(ua(i)||i===!0)?n.startOf(a,"isoWeek",i):n.startOf(a,o)),+a)}function US(e,t,n,r){const o=Nt.length;for(let i=Nt.indexOf(e);i<o-1;++i){const a=Ef[Nt[i]],s=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((n-t)/(s*a.size))<=r)return Nt[i]}return Nt[o-1]}function XG(e,t,n,r,o){for(let i=Nt.length-1;i>=Nt.indexOf(n);i--){const a=Nt[i];if(Ef[a].common&&e._adapter.diff(o,r,a)>=t-1)return a}return Nt[n?Nt.indexOf(n):0]}function KG(e){for(let t=Nt.indexOf(e)+1,n=Nt.length;t<n;++t)if(Ef[Nt[t]].common)return Nt[t]}function WS(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:o}=xv(n,t),i=n[r]>=t?n[r]:n[o];e[i]=!0}}function QG(e,t,n,r){const o=e._adapter,i=+o.startOf(t[0].value,r),a=t[t.length-1].value;let s,l;for(s=i;s<=a;s=+o.add(s,1,r))l=n[s],l>=0&&(t[l].major=!0);return t}function VS(e,t,n){const r=[],o={},i=t.length;let a,s;for(a=0;a<i;++a)s=t[a],o[s]=a,r.push({value:s,major:!1});return i===0||!n?r:QG(e,r,o,n)}class al extends bi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),o=this._adapter=new aV._date(t.adapters.date);o.init(n),_s(r.displayFormats,o.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:HS(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:o,max:i,minDefined:a,maxDefined:s}=this.getUserBounds();function l(c){!a&&!isNaN(c.min)&&(o=Math.min(o,c.min)),!s&&!isNaN(c.max)&&(i=Math.max(i,c.max))}(!a||!s)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),o=Ke(o)&&!isNaN(o)?o:+n.startOf(Date.now(),r),i=Ke(i)&&!isNaN(i)?i:+n.endOf(Date.now(),r)+1,this.min=Math.min(o,i-1),this.max=Math.max(o+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,o=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const i=this.min,a=this.max,s=A9(o,i,a);return this._unit=n.unit||(r.autoSkip?US(n.minUnit,this.min,this.max,this._getLabelCapacity(i)):XG(this,s.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:KG(this._unit),this.initOffsets(o),t.reverse&&s.reverse(),VS(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,o,i;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?n=1-o:n=(this.getDecimalForValue(t[1])-o)/2,i=this.getDecimalForValue(t[t.length-1]),t.length===1?r=i:r=(i-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;n=ft(n,0,a),r=ft(r,0,a),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,o=this.options,i=o.time,a=i.unit||US(i.minUnit,n,r,this._getLabelCapacity(n)),s=de(o.ticks.stepSize,1),l=a==="week"?i.isoWeekday:!1,c=ua(l)||l===!0,u={};let f=n,p,m;if(c&&(f=+t.startOf(f,"isoWeek",l)),f=+t.startOf(f,c?"day":a),t.diff(r,n,a)>1e5*s)throw new Error(n+" and "+r+" are too far apart with stepSize of "+s+" "+a);const h=o.ticks.source==="data"&&this.getDataTimestamps();for(p=f,m=0;p<r;p=+t.add(p,s,a),m++)WS(u,p,h);return(p===r||o.bounds==="ticks"||m===1)&&WS(u,p,h),Object.keys(u).sort(BS).map(b=>+b)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const o=this.options.time.displayFormats,i=this._unit,a=n||o[i];return this._adapter.format(t,a)}_tickFormatFunction(t,n,r,o){const i=this.options,a=i.ticks.callback;if(a)return Te(a,[t,n,r],this);const s=i.time.displayFormats,l=this._unit,c=this._majorUnit,u=l&&s[l],f=c&&s[c],p=r[n],m=c&&f&&p&&p.major;return this._adapter.format(t,o||(m?f:u))}generateTickLabels(t){let n,r,o;for(n=0,r=t.length;n<r;++n)o=t[n],o.label=this._tickFormatFunction(o.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,o=Rn(this.isHorizontal()?n.maxRotation:n.minRotation),i=Math.cos(o),a=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:r*i+s*a,h:r*a+s*i}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,o=r[n.unit]||r.millisecond,i=this._tickFormatFunction(t,0,VS(this,[t],this._majorUnit),o),a=this._getLabelSize(i),s=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,r=o.length;n<r;++n)t=t.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const o=this.getLabels();for(n=0,r=o.length;n<r;++n)t.push(HS(this,o[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return W2(t.sort(BS))}}H(al,"id","time"),H(al,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Tc(e,t,n){let r=0,o=e.length-1,i,a,s,l;n?(t>=e[r].pos&&t<=e[o].pos&&({lo:r,hi:o}=hr(e,"pos",t)),{pos:i,time:s}=e[r],{pos:a,time:l}=e[o]):(t>=e[r].time&&t<=e[o].time&&({lo:r,hi:o}=hr(e,"time",t)),{time:i,pos:s}=e[r],{time:a,pos:l}=e[o]);const c=a-i;return c?s+(l-s)*(t-i)/c:s}class gg extends al{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Tc(n,this.min),this._tableRange=Tc(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,o=[],i=[];let a,s,l,c,u;for(a=0,s=t.length;a<s;++a)c=t[a],c>=n&&c<=r&&o.push(c);if(o.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(a=0,s=o.length;a<s;++a)u=o[a+1],l=o[a-1],c=o[a],Math.round((u+l)/2)!==c&&i.push({time:c,pos:a/(s-1)});return i}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((o,i)=>o-i)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Tc(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Tc(this._table,r*this._tableRange+this._minPos,!0)}}H(gg,"id","timeseries"),H(gg,"defaults",al.defaults);var JG=Object.freeze({__proto__:null,CategoryScale:fg,LinearScale:pg,LogarithmicScale:hg,RadialLinearScale:cs,TimeScale:al,TimeSeriesScale:gg});const ZG=[iV,LY,RG,JG];kf.register(...ZG);const IR="label";function YS(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function eq(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function MR(e,t){e.labels=t}function jR(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:IR;const r=[];e.datasets=t.map(o=>{const i=e.datasets.find(a=>a[n]===o[n]);return!i||!o.data||r.includes(i)?{...o}:(r.push(i),Object.assign(i,o),i)})}function tq(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:IR;const n={labels:[],datasets:[]};return MR(n,e.labels),jR(n,e.datasets,t),n}function nq(e,t){const{height:n=150,width:r=300,redraw:o=!1,datasetIdKey:i,type:a,data:s,options:l,plugins:c=[],fallbackContent:u,updateMode:f,...p}=e,m=O.useRef(null),h=O.useRef(),b=()=>{m.current&&(h.current=new kf(m.current,{type:a,data:tq(s,i),options:l&&{...l},plugins:c}),YS(t,h.current))},w=()=>{YS(t,null),h.current&&(h.current.destroy(),h.current=null)};return O.useEffect(()=>{!o&&h.current&&l&&eq(h.current,l)},[o,l]),O.useEffect(()=>{!o&&h.current&&MR(h.current.config.data,s.labels)},[o,s.labels]),O.useEffect(()=>{!o&&h.current&&s.datasets&&jR(h.current.config.data,s.datasets,i)},[o,s.datasets]),O.useEffect(()=>{h.current&&(o?(w(),setTimeout(b)):h.current.update(f))},[o,l,s.labels,s.datasets,f]),O.useEffect(()=>{h.current&&(w(),setTimeout(b))},[a]),O.useEffect(()=>(b(),()=>w()),[]),U.createElement("canvas",Object.assign({ref:m,role:"img",height:n,width:r},p),u)}const rq=O.forwardRef(nq);function LR(e,t){return kf.register(t),O.forwardRef((n,r)=>U.createElement(rq,Object.assign({},n,{ref:r,type:e})))}const oq=LR("bar",Os),iq=LR("pie",od);function aq({chartData:e}){return x.jsx("div",{className:"bg-white border border-secondary",children:e?x.jsx(oq,{data:e}):x.jsx("div",{children:"No data available"})})}function sq({chartData:e}){return x.jsx("div",{className:"bg-white border border-secondary",children:x.jsx(iq,{data:e})})}function lq(){const[e,t]=O.useState(null),[n,r]=O.useState(!1),[o,i]=O.useState(null),[a,s]=O.useState(null),[l,c]=O.useState(null),[u,f]=O.useState(null),[p,m]=O.useState(null),[h,b]=O.useState(null);return O.useEffect(()=>{const w=async()=>{try{const E=await br.isMasterAdmin(),C=await br.getBranchId();t(C),r(E)}catch(E){console.error("Error fetching branch ID:",E)}},v=async()=>{try{const E=await Dt.getTotalProducts(e,n);i(E.data.total_products)}catch(E){console.error("Error fetching total products:",E)}},g=async()=>{try{const E=await Dt.getTotalItemStocks(e,n);s(E.data.total_item_stocks)}catch(E){console.error("Error fetching total item stocks:",E)}},y=async()=>{try{const E=await Dt.getTotalOutOfStockInBranch(e,n);c(E.data.total_out_of_stock_items)}catch(E){console.error("Error fetching total items out of stock:",E)}},_=async()=>{try{const E=await Dt.getTotalInventoryCost(e,n);f(E.data.total_inventory_cost)}catch(E){console.error("Error fetching total inventory cost:",E)}},k=async()=>{try{const E=await Dt.getItemsPerCategory(e),C=E.data.map(L=>L.category),A=E.data.map(L=>L.count);b({labels:C,datasets:[{label:"Items per Category",backgroundColor:"rgb(255, 192, 192)",borderColor:"rgb(0)",data:A}]})}catch(E){console.error("Error fetching pie chart data:",E)}},S=async()=>{try{const C=(await Dt.getTopItems(e,n)).data,A=C.map(L=>L.item_name),P=C.map(L=>L.total_quantity);m({labels:A,datasets:[{label:"Top 10 Items by Quantity",backgroundColor:"rgb(255, 192, 192)",borderColor:"rgb(0)",borderWidth:1,data:P}]})}catch(E){console.error("Error fetching top items:",E)}};e?(v(),g(),y(),_(),S(),k()):w()},[e]),x.jsx(Ol,{children:x.jsx("div",{className:"p-3 bg-light",children:x.jsxs("div",{className:"container-fluid",children:[x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light",children:x.jsxs("div",{className:"d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm",children:[x.jsx(iv,{className:"fs-1 text-danger"}),x.jsxs("div",{children:[x.jsx("span",{children:"Products"}),x.jsx("h2",{children:o==null?void 0:o.toLocaleString()})]})]})}),x.jsx("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light",children:x.jsxs("div",{className:"d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm",children:[x.jsx(av,{className:"fs-1 text-primary"}),x.jsxs("div",{children:[x.jsx("span",{children:"Total Item Stocks"}),x.jsx("h2",{children:a==null?void 0:a.toLocaleString()})]})]})}),x.jsx("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light",children:x.jsxs("div",{className:"d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm",children:[x.jsx(lv,{className:"fs-1 text-danger"}),x.jsxs("div",{children:[x.jsx("span",{children:"Items Out of Stock"}),x.jsx("h2",{children:l==null?void 0:l.toLocaleString()})]})]})}),x.jsx("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light",children:x.jsxs("div",{className:"d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm",children:[x.jsx(sv,{className:"fs-1 text-success"}),x.jsxs("div",{children:[x.jsx("span",{children:"Total Inventory Cost"}),x.jsx("h2",{children:u==null?void 0:u.toLocaleString()})]})]})})]}),x.jsxs("div",{className:"row",children:[x.jsx("div",{className:"col-12 col-md-8 p-3",children:p?x.jsx(aq,{chartData:p}):x.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100px"},children:x.jsx($m,{animation:"border"})})}),x.jsx("div",{className:"col-12 col-md-4 p-3",children:h?x.jsx(sq,{chartData:h}):x.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100px"},children:x.jsx($m,{animation:"border"})})})]})]})})})}function cq(){const[e,t]=O.useState(null),[n,r]=O.useState(!1);return O.useEffect(()=>{(async()=>{const i=await br.isMasterAdmin();console.log(i),r(i)})()},[]),x.jsx(l5,{children:x.jsxs(e5,{children:[!e&&x.jsxs(x.Fragment,{children:[x.jsx(rt,{path:"/",element:x.jsx(Bn,{to:"/login"})}),x.jsx(rt,{path:"/register",element:x.jsx(k6,{})}),x.jsx(rt,{path:"/login",element:x.jsx(e7,{})})]}),x.jsxs(rt,{element:x.jsx(YU,{}),children:[" ",x.jsx(rt,{path:"/",element:x.jsx(Bn,{to:"/dashboard"})}),x.jsx(rt,{path:"/dashboard",element:x.jsx(lq,{})}),x.jsx(rt,{path:"/login",element:x.jsx(Bn,{to:"/viewitems"})}),x.jsx(rt,{path:"/register",element:x.jsx(Bn,{to:"/viewitems"})}),x.jsx(rt,{path:"/404",element:x.jsx(__,{}),exact:!0}),n?x.jsxs(x.Fragment,{children:[x.jsx(rt,{path:"/viewallitems",element:x.jsx(VU,{})}),x.jsx(rt,{path:"/viewitems",element:x.jsx(Bn,{to:"/viewallitems"})}),x.jsx(rt,{path:"/branches",element:x.jsx(GU,{})}),x.jsx(rt,{path:"/admins",element:x.jsx(qU,{})})]}):x.jsxs(x.Fragment,{children:[x.jsx(rt,{path:"/viewitems",element:x.jsx(WU,{})}),x.jsx(rt,{path:"/viewallitems",element:x.jsx(Bn,{to:"/viewitems"})}),x.jsx(rt,{path:"/branches",element:x.jsx(Bn,{to:"/viewitems"})}),x.jsx(rt,{path:"/admins",element:x.jsx(Bn,{to:"/viewitems"})})]})]}),x.jsx(rt,{path:"/404",element:x.jsx(__,{})}),x.jsx(rt,{path:"*",element:x.jsx(Bn,{to:"/404"})})]})})}eh.createRoot(document.getElementById("root")).render(x.jsx(U.StrictMode,{children:x.jsx(cq,{})}));
