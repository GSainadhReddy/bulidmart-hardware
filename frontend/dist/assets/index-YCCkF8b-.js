function Ud(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(n,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}})();function Wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tc={exports:{}},Ii={},rc={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=Symbol.for("react.element"),Vd=Symbol.for("react.portal"),Hd=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Zd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),Ro=Symbol.iterator;function ef(e){return e===null||typeof e!="object"?null:(e=Ro&&e[Ro]||e["@@iterator"],typeof e=="function"?e:null)}var nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,ac={};function Lr(e,t,r){this.props=e,this.context=t,this.refs=ac,this.updater=r||nc}Lr.prototype.isReactComponent={};Lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Lr.prototype;function Ll(e,t,r){this.props=e,this.context=t,this.refs=ac,this.updater=r||nc}var Ml=Ll.prototype=new lc;Ml.constructor=Ll;ic(Ml,Lr.prototype);Ml.isPureReactComponent=!0;var To=Array.isArray,oc=Object.prototype.hasOwnProperty,Rl={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function cc(e,t,r){var n,a={},l=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)oc.call(t,n)&&!sc.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:Cn,type:e,key:l,ref:o,props:a,_owner:Rl.current}}function tf(e,t){return{$$typeof:Cn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cn}function rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Io=/\/+/g;function ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rf(""+e.key):t.toString(36)}function Yn(e,t,r,n,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Cn:case Vd:o=!0}}if(o)return o=e,a=a(o),e=n===""?"."+ra(o,0):n,To(a)?(r="",e!=null&&(r=e.replace(Io,"$&/")+"/"),Yn(a,t,r,"",function(u){return u})):a!=null&&(Tl(a)&&(a=tf(a,r+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Io,"$&/")+"/")+e)),t.push(a)),1;if(o=0,n=n===""?".":n+":",To(e))for(var s=0;s<e.length;s++){l=e[s];var c=n+ra(l,s);o+=Yn(l,t,r,c,a)}else if(c=ef(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=n+ra(l,s++),o+=Yn(l,t,r,c,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Mn(e,t,r){if(e==null)return e;var n=[],a=0;return Yn(e,n,"","",function(l){return t.call(r,l,a++)}),n}function nf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Gn={transition:null},af={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Gn,ReactCurrentOwner:Rl};function uc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Mn,forEach:function(e,t,r){Mn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Mn(e,function(){t++}),t},toArray:function(e){return Mn(e,function(t){return t})||[]},only:function(e){if(!Tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Lr;A.Fragment=Hd;A.Profiler=Qd;A.PureComponent=Ll;A.StrictMode=qd;A.Suspense=Xd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;A.act=uc;A.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ic({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Rl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)oc.call(t,c)&&!sc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Cn,type:e.type,key:a,ref:l,props:n,_owner:o}};A.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kd,_context:e},e.Consumer=e};A.createElement=cc;A.createFactory=function(e){var t=cc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Gd,render:e}};A.isValidElement=Tl;A.lazy=function(e){return{$$typeof:Jd,_payload:{_status:-1,_result:e},_init:nf}};A.memo=function(e,t){return{$$typeof:Zd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Gn.transition;Gn.transition={};try{e()}finally{Gn.transition=t}};A.unstable_act=uc;A.useCallback=function(e,t){return ye.current.useCallback(e,t)};A.useContext=function(e){return ye.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};A.useEffect=function(e,t){return ye.current.useEffect(e,t)};A.useId=function(){return ye.current.useId()};A.useImperativeHandle=function(e,t,r){return ye.current.useImperativeHandle(e,t,r)};A.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ye.current.useMemo(e,t)};A.useReducer=function(e,t,r){return ye.current.useReducer(e,t,r)};A.useRef=function(e){return ye.current.useRef(e)};A.useState=function(e){return ye.current.useState(e)};A.useSyncExternalStore=function(e,t,r){return ye.current.useSyncExternalStore(e,t,r)};A.useTransition=function(){return ye.current.useTransition()};A.version="18.3.1";rc.exports=A;var y=rc.exports;const dc=Wd(y),lf=Ud({__proto__:null,default:dc},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=y,sf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),uf=Object.prototype.hasOwnProperty,df=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ff={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,t,r){var n,a={},l=null,o=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)uf.call(t,n)&&!ff.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:sf,type:e,key:l,ref:o,props:a,_owner:df.current}}Ii.Fragment=cf;Ii.jsx=fc;Ii.jsxs=fc;tc.exports=Ii;var i=tc.exports,La={},mc={exports:{}},_e={},pc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var O=E.length;E.push(T);e:for(;0<O;){var V=O-1>>>1,te=E[V];if(0<a(te,T))E[V]=T,E[O]=te,O=V;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var T=E[0],O=E.pop();if(O!==T){E[0]=O;e:for(var V=0,te=E.length,Dt=te>>>1;V<Dt;){var $e=2*(V+1)-1,rr=E[$e],Ke=$e+1,At=E[Ke];if(0>a(rr,O))Ke<te&&0>a(At,rr)?(E[V]=At,E[Ke]=O,V=Ke):(E[V]=rr,E[$e]=O,V=$e);else if(Ke<te&&0>a(At,O))E[V]=At,E[Ke]=O,V=Ke;else break e}}return T}function a(E,T){var O=E.sortIndex-T.sortIndex;return O!==0?O:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],h=1,m=null,g=3,v=!1,w=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=r(u);T!==null;){if(T.callback===null)n(u);else if(T.startTime<=E)n(u),T.sortIndex=T.expirationTime,t(c,T);else break;T=r(u)}}function j(E){if(k=!1,p(E),!w)if(r(c)!==null)w=!0,et(x);else{var T=r(u);T!==null&&tt(j,T.startTime-E)}}function x(E,T){w=!1,k&&(k=!1,f(_),_=-1),v=!0;var O=g;try{for(p(T),m=r(c);m!==null&&(!(m.expirationTime>T)||E&&!$());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var te=V(m.expirationTime<=T);T=e.unstable_now(),typeof te=="function"?m.callback=te:m===r(c)&&n(c),p(T)}else n(c);m=r(c)}if(m!==null)var Dt=!0;else{var $e=r(u);$e!==null&&tt(j,$e.startTime-T),Dt=!1}return Dt}finally{m=null,g=O,v=!1}}var N=!1,z=null,_=-1,I=5,P=-1;function $(){return!(e.unstable_now()-P<I)}function ee(){if(z!==null){var E=e.unstable_now();P=E;var T=!0;try{T=z(!0,E)}finally{T?M():(N=!1,z=null)}}else N=!1}var M;if(typeof d=="function")M=function(){d(ee)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Me=se.port2;se.port1.onmessage=ee,M=function(){Me.postMessage(null)}}else M=function(){C(ee,0)};function et(E){z=E,N||(N=!0,M())}function tt(E,T){_=C(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,et(x))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var O=g;g=T;try{return E()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var O=g;g=E;try{return T()}finally{g=O}},e.unstable_scheduleCallback=function(E,T,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,E){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=O+te,E={id:h++,callback:T,priorityLevel:E,startTime:O,expirationTime:te,sortIndex:-1},O>V?(E.sortIndex=O,t(u,E),r(c)===null&&E===r(u)&&(k?(f(_),_=-1):k=!0,tt(j,O-V))):(E.sortIndex=te,t(c,E),w||v||(w=!0,et(x))),E},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(E){var T=g;return function(){var O=g;g=T;try{return E.apply(this,arguments)}finally{g=O}}}})(hc);pc.exports=hc;var mf=pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=y,Ee=mf;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gc=new Set,ln={};function Jt(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(ln[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ma=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oo={},Fo={};function gf(e){return Ma.call(Fo,e)?!0:Ma.call(Oo,e)?!1:hf.test(e)?Fo[e]=!0:(Oo[e]=!0,!1)}function vf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yf(e,t,r,n){if(t===null||typeof t>"u"||vf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,r,n,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Il=/[\-:]([a-z])/g;function Ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Il,Ol);de[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Il,Ol);de[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Il,Ol);de[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fl(e,t,r,n){var a=de.hasOwnProperty(t)?de[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yf(t,r,a,n)&&(r=null),n||a===null?gf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ft=pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),Ta=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),xc=Symbol.for("react.offscreen"),Do=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Do&&e[Do]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,na;function qr(e){if(na===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ia=!1;function aa(e,t){if(!e||ia)return"";ia=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=n.stack.split(`
`),o=a.length-1,s=l.length-1;1<=o&&0<=s&&a[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==l[s]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{ia=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qr(e):""}function xf(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case Ra:return"Profiler";case Dl:return"StrictMode";case Ta:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case vc:return(e._context.displayName||"Context")+".Provider";case Al:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $l:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function wf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jf(e){var t=wc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tn(e){e._valueTracker||(e._valueTracker=jf(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=wc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fa(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ao(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Mt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kc(e,t){t=t.checked,t!=null&&Fl(e,"checked",t,!1)}function Da(e,t){kc(e,t);var r=Mt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Aa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Aa(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $o(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Aa(e,t,r){(t!=="number"||oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Qr=Array.isArray;function vr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Mt(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function $a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Qr(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Mt(r)}}function bc(e,t){var r=Mt(t.value),n=Mt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var In,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(In=In||document.createElement("div"),In.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=In.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function on(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kf=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){kf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gr[t]=Gr[e]})});function Cc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+t).trim():t+"px"}function zc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Cc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var bf=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,t){if(t){if(bf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function Bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,yr=null,xr=null;function Wo(e){if(e=En(e)){if(typeof Ha!="function")throw Error(S(280));var t=e.stateNode;t&&(t=$i(t),Ha(e.stateNode,e.type,t))}}function Pc(e){yr?xr?xr.push(e):xr=[e]:yr=e}function Ec(){if(yr){var e=yr,t=xr;if(xr=yr=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function _c(e,t){return e(t)}function Lc(){}var la=!1;function Mc(e,t,r){if(la)return e(t,r);la=!0;try{return _c(e,t,r)}finally{la=!1,(yr!==null||xr!==null)&&(Lc(),Ec())}}function sn(e,t){var r=e.stateNode;if(r===null)return null;var n=$i(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var qa=!1;if(st)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){qa=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{qa=!1}function Nf(e,t,r,n,a,l,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var Xr=!1,si=null,ci=!1,Qa=null,Sf={onError:function(e){Xr=!0,si=e}};function Cf(e,t,r,n,a,l,o,s,c){Xr=!1,si=null,Nf.apply(Sf,arguments)}function zf(e,t,r,n,a,l,o,s,c){if(Cf.apply(this,arguments),Xr){if(Xr){var u=si;Xr=!1,si=null}else throw Error(S(198));ci||(ci=!0,Qa=u)}}function er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vo(e){if(er(e)!==e)throw Error(S(188))}function Pf(e){var t=e.alternate;if(!t){if(t=er(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return Vo(a),e;if(l===n)return Vo(a),t;l=l.sibling}throw Error(S(188))}if(r.return!==n.return)r=a,n=l;else{for(var o=!1,s=a.child;s;){if(s===r){o=!0,r=a,n=l;break}if(s===n){o=!0,n=a,r=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===r){o=!0,r=l,n=a;break}if(s===n){o=!0,n=l,r=a;break}s=s.sibling}if(!o)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Tc(e){return e=Pf(e),e!==null?Ic(e):null}function Ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ic(e);if(t!==null)return t;e=e.sibling}return null}var Oc=Ee.unstable_scheduleCallback,Ho=Ee.unstable_cancelCallback,Ef=Ee.unstable_shouldYield,_f=Ee.unstable_requestPaint,re=Ee.unstable_now,Lf=Ee.unstable_getCurrentPriorityLevel,Ul=Ee.unstable_ImmediatePriority,Fc=Ee.unstable_UserBlockingPriority,ui=Ee.unstable_NormalPriority,Mf=Ee.unstable_LowPriority,Dc=Ee.unstable_IdlePriority,Oi=null,Ze=null;function Rf(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Of,Tf=Math.log,If=Math.LN2;function Of(e){return e>>>=0,e===0?32:31-(Tf(e)/If|0)|0}var On=64,Fn=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~a;s!==0?n=Kr(s):(l&=o,l!==0&&(n=Kr(l)))}else o=r&~a,o!==0?n=Kr(o):l!==0&&(n=Kr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-He(t),a=1<<r,n|=e[r],t&=~a;return n}function Ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Df(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-He(l),s=1<<o,c=a[o];c===-1?(!(s&r)||s&n)&&(a[o]=Ff(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function Ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ac(){var e=On;return On<<=1,!(On&4194240)&&(On=64),e}function oa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function zn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=r}function Af(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-He(r),l=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~l}}function Wl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-He(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var U=0;function $c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bc,Vl,Uc,Wc,Vc,Ya=!1,Dn=[],bt=null,Nt=null,St=null,cn=new Map,un=new Map,yt=[],$f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":St=null;break;case"pointerover":case"pointerout":cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(t.pointerId)}}function Ar(e,t,r,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},t!==null&&(t=En(t),t!==null&&Vl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Bf(e,t,r,n,a){switch(t){case"focusin":return bt=Ar(bt,e,t,r,n,a),!0;case"dragenter":return Nt=Ar(Nt,e,t,r,n,a),!0;case"mouseover":return St=Ar(St,e,t,r,n,a),!0;case"pointerover":var l=a.pointerId;return cn.set(l,Ar(cn.get(l)||null,e,t,r,n,a)),!0;case"gotpointercapture":return l=a.pointerId,un.set(l,Ar(un.get(l)||null,e,t,r,n,a)),!0}return!1}function Hc(e){var t=Wt(e.target);if(t!==null){var r=er(t);if(r!==null){if(t=r.tag,t===13){if(t=Rc(r),t!==null){e.blockedOn=t,Vc(e.priority,function(){Uc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Va=n,r.target.dispatchEvent(n),Va=null}else return t=En(r),t!==null&&Vl(t),e.blockedOn=r,!1;t.shift()}return!0}function Qo(e,t,r){Xn(e)&&r.delete(t)}function Uf(){Ya=!1,bt!==null&&Xn(bt)&&(bt=null),Nt!==null&&Xn(Nt)&&(Nt=null),St!==null&&Xn(St)&&(St=null),cn.forEach(Qo),un.forEach(Qo)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Ya||(Ya=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Uf)))}function dn(e){function t(a){return $r(a,e)}if(0<Dn.length){$r(Dn[0],e);for(var r=1;r<Dn.length;r++){var n=Dn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(bt!==null&&$r(bt,e),Nt!==null&&$r(Nt,e),St!==null&&$r(St,e),cn.forEach(t),un.forEach(t),r=0;r<yt.length;r++)n=yt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<yt.length&&(r=yt[0],r.blockedOn===null);)Hc(r),r.blockedOn===null&&yt.shift()}var wr=ft.ReactCurrentBatchConfig,fi=!0;function Wf(e,t,r,n){var a=U,l=wr.transition;wr.transition=null;try{U=1,Hl(e,t,r,n)}finally{U=a,wr.transition=l}}function Vf(e,t,r,n){var a=U,l=wr.transition;wr.transition=null;try{U=4,Hl(e,t,r,n)}finally{U=a,wr.transition=l}}function Hl(e,t,r,n){if(fi){var a=Ga(e,t,r,n);if(a===null)va(e,t,n,mi,r),qo(e,n);else if(Bf(a,e,t,r,n))n.stopPropagation();else if(qo(e,n),t&4&&-1<$f.indexOf(e)){for(;a!==null;){var l=En(a);if(l!==null&&Bc(l),l=Ga(e,t,r,n),l===null&&va(e,t,n,mi,r),l===a)break;a=l}a!==null&&n.stopPropagation()}else va(e,t,n,null,r)}}var mi=null;function Ga(e,t,r,n){if(mi=null,e=Bl(n),e=Wt(e),e!==null)if(t=er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Rc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function qc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case Ul:return 1;case Fc:return 4;case ui:case Mf:return 16;case Dc:return 536870912;default:return 16}default:return 16}}var wt=null,ql=null,Zn=null;function Qc(){if(Zn)return Zn;var e,t=ql,r=t.length,n,a="value"in wt?wt.value:wt.textContent,l=a.length;for(e=0;e<r&&t[e]===a[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===a[l-n];n++);return Zn=a.slice(e,1<n?1-n:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function An(){return!0}function Ko(){return!1}function Le(e){function t(r,n,a,l,o){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?An:Ko,this.isPropagationStopped=Ko,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Le(Mr),Pn=X({},Mr,{view:0,detail:0}),Hf=Le(Pn),sa,ca,Br,Fi=X({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(sa=e.screenX-Br.screenX,ca=e.screenY-Br.screenY):ca=sa=0,Br=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),Yo=Le(Fi),qf=X({},Fi,{dataTransfer:0}),Qf=Le(qf),Kf=X({},Pn,{relatedTarget:0}),ua=Le(Kf),Yf=X({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gf=Le(Yf),Xf=X({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zf=Le(Xf),Jf=X({},Mr,{data:0}),Go=Le(Jf),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rm[e])?!!t[e]:!1}function Kl(){return nm}var im=X({},Pn,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=Le(im),lm=X({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=Le(lm),om=X({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),sm=Le(om),cm=X({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),um=Le(cm),dm=X({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Le(dm),mm=[9,13,27,32],Yl=st&&"CompositionEvent"in window,Zr=null;st&&"documentMode"in document&&(Zr=document.documentMode);var pm=st&&"TextEvent"in window&&!Zr,Kc=st&&(!Yl||Zr&&8<Zr&&11>=Zr),Zo=" ",Jo=!1;function Yc(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function hm(e,t){switch(e){case"compositionend":return Gc(t);case"keypress":return t.which!==32?null:(Jo=!0,Zo);case"textInput":return e=t.data,e===Zo&&Jo?null:e;default:return null}}function gm(e,t){if(or)return e==="compositionend"||!Yl&&Yc(e,t)?(e=Qc(),Zn=ql=wt=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Xc(e,t,r,n){Pc(n),t=pi(t,"onChange"),0<t.length&&(r=new Ql("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Jr=null,fn=null;function ym(e){su(e,0)}function Di(e){var t=ur(e);if(jc(t))return e}function xm(e,t){if(e==="change")return t}var Zc=!1;if(st){var da;if(st){var fa="oninput"in document;if(!fa){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),fa=typeof ts.oninput=="function"}da=fa}else da=!1;Zc=da&&(!document.documentMode||9<document.documentMode)}function rs(){Jr&&(Jr.detachEvent("onpropertychange",Jc),fn=Jr=null)}function Jc(e){if(e.propertyName==="value"&&Di(fn)){var t=[];Xc(t,fn,e,Bl(e)),Mc(ym,t)}}function wm(e,t,r){e==="focusin"?(rs(),Jr=t,fn=r,Jr.attachEvent("onpropertychange",Jc)):e==="focusout"&&rs()}function jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(fn)}function km(e,t){if(e==="click")return Di(t)}function bm(e,t){if(e==="input"||e==="change")return Di(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:Nm;function mn(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Ma.call(t,a)||!Qe(e[a],t[a]))return!1}return!0}function ns(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function is(e,t){var r=ns(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ns(r)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oi(e.document)}return t}function Gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=tu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&eu(r.ownerDocument.documentElement,r)){if(n!==null&&Gl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=is(r,l);var o=is(r,n);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=st&&"documentMode"in document&&11>=document.documentMode,sr=null,Xa=null,en=null,Za=!1;function as(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Za||sr==null||sr!==oi(n)||(n=sr,"selectionStart"in n&&Gl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),en&&mn(en,n)||(en=n,n=pi(Xa,"onSelect"),0<n.length&&(t=new Ql("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=sr)))}function $n(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var cr={animationend:$n("Animation","AnimationEnd"),animationiteration:$n("Animation","AnimationIteration"),animationstart:$n("Animation","AnimationStart"),transitionend:$n("Transition","TransitionEnd")},ma={},ru={};st&&(ru=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ai(e){if(ma[e])return ma[e];if(!cr[e])return e;var t=cr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in ru)return ma[e]=t[r];return e}var nu=Ai("animationend"),iu=Ai("animationiteration"),au=Ai("animationstart"),lu=Ai("transitionend"),ou=new Map,ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){ou.set(e,t),Jt(t,[e])}for(var pa=0;pa<ls.length;pa++){var ha=ls[pa],zm=ha.toLowerCase(),Pm=ha[0].toUpperCase()+ha.slice(1);Tt(zm,"on"+Pm)}Tt(nu,"onAnimationEnd");Tt(iu,"onAnimationIteration");Tt(au,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(lu,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Em=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function os(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,zf(n,t,void 0,e),e.currentTarget=null}function su(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&a.isPropagationStopped())break e;os(a,s,u),l=c}else for(o=0;o<n.length;o++){if(s=n[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&a.isPropagationStopped())break e;os(a,s,u),l=c}}}if(ci)throw e=Qa,ci=!1,Qa=null,e}function H(e,t){var r=t[nl];r===void 0&&(r=t[nl]=new Set);var n=e+"__bubble";r.has(n)||(cu(t,e,2,!1),r.add(n))}function ga(e,t,r){var n=0;t&&(n|=4),cu(r,e,n,t)}var Bn="_reactListening"+Math.random().toString(36).slice(2);function pn(e){if(!e[Bn]){e[Bn]=!0,gc.forEach(function(r){r!=="selectionchange"&&(Em.has(r)||ga(r,!1,e),ga(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bn]||(t[Bn]=!0,ga("selectionchange",!1,t))}}function cu(e,t,r,n){switch(qc(t)){case 1:var a=Wf;break;case 4:a=Vf;break;default:a=Hl}r=a.bind(null,t,r,e),a=void 0,!qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function va(e,t,r,n,a){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;s!==null;){if(o=Wt(s),o===null)return;if(c=o.tag,c===5||c===6){n=l=o;continue e}s=s.parentNode}}n=n.return}Mc(function(){var u=l,h=Bl(r),m=[];e:{var g=ou.get(e);if(g!==void 0){var v=Ql,w=e;switch(e){case"keypress":if(Jn(r)===0)break e;case"keydown":case"keyup":v=am;break;case"focusin":w="focus",v=ua;break;case"focusout":w="blur",v=ua;break;case"beforeblur":case"afterblur":v=ua;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sm;break;case nu:case iu:case au:v=Gf;break;case lu:v=um;break;case"scroll":v=Hf;break;case"wheel":v=fm;break;case"copy":case"cut":case"paste":v=Zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xo}var k=(t&4)!==0,C=!k&&e==="scroll",f=k?g!==null?g+"Capture":null:g;k=[];for(var d=u,p;d!==null;){p=d;var j=p.stateNode;if(p.tag===5&&j!==null&&(p=j,f!==null&&(j=sn(d,f),j!=null&&k.push(hn(d,j,p)))),C)break;d=d.return}0<k.length&&(g=new v(g,w,null,r,h),m.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&r!==Va&&(w=r.relatedTarget||r.fromElement)&&(Wt(w)||w[ct]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=r.relatedTarget||r.toElement,v=u,w=w?Wt(w):null,w!==null&&(C=er(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(k=Yo,j="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Xo,j="onPointerLeave",f="onPointerEnter",d="pointer"),C=v==null?g:ur(v),p=w==null?g:ur(w),g=new k(j,d+"leave",v,r,h),g.target=C,g.relatedTarget=p,j=null,Wt(h)===u&&(k=new k(f,d+"enter",w,r,h),k.target=p,k.relatedTarget=C,j=k),C=j,v&&w)t:{for(k=v,f=w,d=0,p=k;p;p=ir(p))d++;for(p=0,j=f;j;j=ir(j))p++;for(;0<d-p;)k=ir(k),d--;for(;0<p-d;)f=ir(f),p--;for(;d--;){if(k===f||f!==null&&k===f.alternate)break t;k=ir(k),f=ir(f)}k=null}else k=null;v!==null&&ss(m,g,v,k,!1),w!==null&&C!==null&&ss(m,C,w,k,!0)}}e:{if(g=u?ur(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var x=xm;else if(es(g))if(Zc)x=bm;else{x=jm;var N=wm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=km);if(x&&(x=x(e,u))){Xc(m,x,r,h);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Aa(g,"number",g.value)}switch(N=u?ur(u):window,e){case"focusin":(es(N)||N.contentEditable==="true")&&(sr=N,Xa=u,en=null);break;case"focusout":en=Xa=sr=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,as(m,r,h);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":as(m,r,h)}var z;if(Yl)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else or?Yc(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(Kc&&r.locale!=="ko"&&(or||_!=="onCompositionStart"?_==="onCompositionEnd"&&or&&(z=Qc()):(wt=h,ql="value"in wt?wt.value:wt.textContent,or=!0)),N=pi(u,_),0<N.length&&(_=new Go(_,e,null,r,h),m.push({event:_,listeners:N}),z?_.data=z:(z=Gc(r),z!==null&&(_.data=z)))),(z=pm?hm(e,r):gm(e,r))&&(u=pi(u,"onBeforeInput"),0<u.length&&(h=new Go("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:u}),h.data=z))}su(m,t)})}function hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pi(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=sn(e,r),l!=null&&n.unshift(hn(e,l,a)),l=sn(e,t),l!=null&&n.push(hn(e,l,a))),e=e.return}return n}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ss(e,t,r,n,a){for(var l=t._reactName,o=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,a?(c=sn(r,l),c!=null&&o.unshift(hn(r,c,s))):a||(c=sn(r,l),c!=null&&o.push(hn(r,c,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var _m=/\r\n?/g,Lm=/\u0000|\uFFFD/g;function cs(e){return(typeof e=="string"?e:""+e).replace(_m,`
`).replace(Lm,"")}function Un(e,t,r){if(t=cs(t),cs(e)!==t&&r)throw Error(S(425))}function hi(){}var Ja=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rl=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,us=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof us<"u"?function(e){return us.resolve(null).then(e).catch(Tm)}:rl;function Tm(e){setTimeout(function(){throw e})}function ya(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),dn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);dn(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Rr,gn="__reactProps$"+Rr,ct="__reactContainer$"+Rr,nl="__reactEvents$"+Rr,Im="__reactListeners$"+Rr,Om="__reactHandles$"+Rr;function Wt(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ct]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ds(e);e!==null;){if(r=e[Xe])return r;e=ds(e)}return t}e=r,r=e.parentNode}return null}function En(e){return e=e[Xe]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function $i(e){return e[gn]||null}var il=[],dr=-1;function It(e){return{current:e}}function q(e){0>dr||(e.current=il[dr],il[dr]=null,dr--)}function W(e,t){dr++,il[dr]=e.current,e.current=t}var Rt={},he=It(Rt),ke=It(!1),Kt=Rt;function Nr(e,t){var r=e.type.contextTypes;if(!r)return Rt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in r)a[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function be(e){return e=e.childContextTypes,e!=null}function gi(){q(ke),q(he)}function fs(e,t,r){if(he.current!==Rt)throw Error(S(168));W(he,t),W(ke,r)}function uu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(S(108,wf(e)||"Unknown",a));return X({},r,n)}function vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,Kt=he.current,W(he,e),W(ke,ke.current),!0}function ms(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=uu(e,t,Kt),n.__reactInternalMemoizedMergedChildContext=e,q(ke),q(he),W(he,e)):q(ke),W(ke,r)}var it=null,Bi=!1,xa=!1;function du(e){it===null?it=[e]:it.push(e)}function Fm(e){Bi=!0,du(e)}function Ot(){if(!xa&&it!==null){xa=!0;var e=0,t=U;try{var r=it;for(U=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}it=null,Bi=!1}catch(a){throw it!==null&&(it=it.slice(e+1)),Oc(Ul,Ot),a}finally{U=t,xa=!1}}return null}var fr=[],mr=0,yi=null,xi=0,Te=[],Ie=0,Yt=null,at=1,lt="";function Bt(e,t){fr[mr++]=xi,fr[mr++]=yi,yi=e,xi=t}function fu(e,t,r){Te[Ie++]=at,Te[Ie++]=lt,Te[Ie++]=Yt,Yt=e;var n=at;e=lt;var a=32-He(n)-1;n&=~(1<<a),r+=1;var l=32-He(t)+a;if(30<l){var o=a-a%5;l=(n&(1<<o)-1).toString(32),n>>=o,a-=o,at=1<<32-He(t)+a|r<<a|n,lt=l+e}else at=1<<l|r<<a|n,lt=e}function Xl(e){e.return!==null&&(Bt(e,1),fu(e,1,0))}function Zl(e){for(;e===yi;)yi=fr[--mr],fr[mr]=null,xi=fr[--mr],fr[mr]=null;for(;e===Yt;)Yt=Te[--Ie],Te[Ie]=null,lt=Te[--Ie],Te[Ie]=null,at=Te[--Ie],Te[Ie]=null}var Pe=null,ze=null,Q=!1,Ve=null;function mu(e,t){var r=Oe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ps(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,ze=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Yt!==null?{id:at,overflow:lt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Oe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Pe=e,ze=null,!0):!1;default:return!1}}function al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(Q){var t=ze;if(t){var r=t;if(!ps(e,t)){if(al(e))throw Error(S(418));t=Ct(r.nextSibling);var n=Pe;t&&ps(e,t)?mu(n,r):(e.flags=e.flags&-4097|2,Q=!1,Pe=e)}}else{if(al(e))throw Error(S(418));e.flags=e.flags&-4097|2,Q=!1,Pe=e}}}function hs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Wn(e){if(e!==Pe)return!1;if(!Q)return hs(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=ze)){if(al(e))throw pu(),Error(S(418));for(;t;)mu(e,t),t=Ct(t.nextSibling)}if(hs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ze=Ct(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Pe?Ct(e.stateNode.nextSibling):null;return!0}function pu(){for(var e=ze;e;)e=Ct(e.nextSibling)}function Sr(){ze=Pe=null,Q=!1}function Jl(e){Ve===null?Ve=[e]:Ve.push(e)}var Dm=ft.ReactCurrentBatchConfig;function Ur(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var a=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=a.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Vn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gs(e){var t=e._init;return t(e._payload)}function hu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=_t(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,j){return d===null||d.tag!==6?(d=Ca(p,f.mode,j),d.return=f,d):(d=a(d,p),d.return=f,d)}function c(f,d,p,j){var x=p.type;return x===lr?h(f,d,p.props.children,j,p.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gt&&gs(x)===d.type)?(j=a(d,p.props),j.ref=Ur(f,d,p),j.return=f,j):(j=li(p.type,p.key,p.props,null,f.mode,j),j.ref=Ur(f,d,p),j.return=f,j)}function u(f,d,p,j){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=za(p,f.mode,j),d.return=f,d):(d=a(d,p.children||[]),d.return=f,d)}function h(f,d,p,j,x){return d===null||d.tag!==7?(d=Qt(p,f.mode,j,x),d.return=f,d):(d=a(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ca(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Rn:return p=li(d.type,d.key,d.props,null,f.mode,p),p.ref=Ur(f,null,d),p.return=f,p;case ar:return d=za(d,f.mode,p),d.return=f,d;case gt:var j=d._init;return m(f,j(d._payload),p)}if(Qr(d)||Fr(d))return d=Qt(d,f.mode,p,null),d.return=f,d;Vn(f,d)}return null}function g(f,d,p,j){var x=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:s(f,d,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rn:return p.key===x?c(f,d,p,j):null;case ar:return p.key===x?u(f,d,p,j):null;case gt:return x=p._init,g(f,d,x(p._payload),j)}if(Qr(p)||Fr(p))return x!==null?null:h(f,d,p,j,null);Vn(f,p)}return null}function v(f,d,p,j,x){if(typeof j=="string"&&j!==""||typeof j=="number")return f=f.get(p)||null,s(d,f,""+j,x);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Rn:return f=f.get(j.key===null?p:j.key)||null,c(d,f,j,x);case ar:return f=f.get(j.key===null?p:j.key)||null,u(d,f,j,x);case gt:var N=j._init;return v(f,d,p,N(j._payload),x)}if(Qr(j)||Fr(j))return f=f.get(p)||null,h(d,f,j,x,null);Vn(d,j)}return null}function w(f,d,p,j){for(var x=null,N=null,z=d,_=d=0,I=null;z!==null&&_<p.length;_++){z.index>_?(I=z,z=null):I=z.sibling;var P=g(f,z,p[_],j);if(P===null){z===null&&(z=I);break}e&&z&&P.alternate===null&&t(f,z),d=l(P,d,_),N===null?x=P:N.sibling=P,N=P,z=I}if(_===p.length)return r(f,z),Q&&Bt(f,_),x;if(z===null){for(;_<p.length;_++)z=m(f,p[_],j),z!==null&&(d=l(z,d,_),N===null?x=z:N.sibling=z,N=z);return Q&&Bt(f,_),x}for(z=n(f,z);_<p.length;_++)I=v(z,f,_,p[_],j),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?_:I.key),d=l(I,d,_),N===null?x=I:N.sibling=I,N=I);return e&&z.forEach(function($){return t(f,$)}),Q&&Bt(f,_),x}function k(f,d,p,j){var x=Fr(p);if(typeof x!="function")throw Error(S(150));if(p=x.call(p),p==null)throw Error(S(151));for(var N=x=null,z=d,_=d=0,I=null,P=p.next();z!==null&&!P.done;_++,P=p.next()){z.index>_?(I=z,z=null):I=z.sibling;var $=g(f,z,P.value,j);if($===null){z===null&&(z=I);break}e&&z&&$.alternate===null&&t(f,z),d=l($,d,_),N===null?x=$:N.sibling=$,N=$,z=I}if(P.done)return r(f,z),Q&&Bt(f,_),x;if(z===null){for(;!P.done;_++,P=p.next())P=m(f,P.value,j),P!==null&&(d=l(P,d,_),N===null?x=P:N.sibling=P,N=P);return Q&&Bt(f,_),x}for(z=n(f,z);!P.done;_++,P=p.next())P=v(z,f,_,P.value,j),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?_:P.key),d=l(P,d,_),N===null?x=P:N.sibling=P,N=P);return e&&z.forEach(function(ee){return t(f,ee)}),Q&&Bt(f,_),x}function C(f,d,p,j){if(typeof p=="object"&&p!==null&&p.type===lr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Rn:e:{for(var x=p.key,N=d;N!==null;){if(N.key===x){if(x=p.type,x===lr){if(N.tag===7){r(f,N.sibling),d=a(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gt&&gs(x)===N.type){r(f,N.sibling),d=a(N,p.props),d.ref=Ur(f,N,p),d.return=f,f=d;break e}r(f,N);break}else t(f,N);N=N.sibling}p.type===lr?(d=Qt(p.props.children,f.mode,j,p.key),d.return=f,f=d):(j=li(p.type,p.key,p.props,null,f.mode,j),j.ref=Ur(f,d,p),j.return=f,f=j)}return o(f);case ar:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=a(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=za(p,f.mode,j),d.return=f,f=d}return o(f);case gt:return N=p._init,C(f,d,N(p._payload),j)}if(Qr(p))return w(f,d,p,j);if(Fr(p))return k(f,d,p,j);Vn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=a(d,p),d.return=f,f=d):(r(f,d),d=Ca(p,f.mode,j),d.return=f,f=d),o(f)):r(f,d)}return C}var Cr=hu(!0),gu=hu(!1),wi=It(null),ji=null,pr=null,eo=null;function to(){eo=pr=ji=null}function ro(e){var t=wi.current;q(wi),e._currentValue=t}function ol(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function jr(e,t){ji=e,eo=pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(eo!==e)if(e={context:e,memoizedValue:t,next:null},pr===null){if(ji===null)throw Error(S(308));pr=e,ji.dependencies={lanes:0,firstContext:e}}else pr=pr.next=e;return t}var Vt=null;function no(e){Vt===null?Vt=[e]:Vt.push(e)}function vu(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,no(t)):(r.next=a.next,a.next=r),t.interleaved=r,ut(e,n)}function ut(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var vt=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,ut(e,r)}return a=n.interleaved,a===null?(t.next=t,no(n)):(t.next=a.next,a.next=t),n.interleaved=t,ut(e,r)}function ei(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wl(e,r)}}function vs(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?a=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?a=l=t:l=l.next=t}else a=l=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ki(e,t,r,n){var a=e.updateQueue;vt=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?l=u:o.next=u,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(l!==null){var m=a.baseState;o=0,h=u=c=null,s=l;do{var g=s.lane,v=s.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(g=t,v=r,k.tag){case 1:if(w=k.payload,typeof w=="function"){m=w.call(v,m,g);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(v,m,g):w,g==null)break e;m=X({},m,g);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=v,c=m):h=h.next=v,o|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(h===null&&(c=m),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Xt|=o,e.lanes=o,e.memoizedState=m}}function ys(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(S(191,a));a.call(n)}}}var _n={},Je=It(_n),vn=It(_n),yn=It(_n);function Ht(e){if(e===_n)throw Error(S(174));return e}function ao(e,t){switch(W(yn,t),W(vn,e),W(Je,_n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ba(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ba(t,e)}q(Je),W(Je,t)}function zr(){q(Je),q(vn),q(yn)}function xu(e){Ht(yn.current);var t=Ht(Je.current),r=Ba(t,e.type);t!==r&&(W(vn,e),W(Je,r))}function lo(e){vn.current===e&&(q(Je),q(vn))}var K=It(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function oo(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var ti=ft.ReactCurrentDispatcher,ja=ft.ReactCurrentBatchConfig,Gt=0,Y=null,ie=null,le=null,Ni=!1,tn=!1,xn=0,Am=0;function fe(){throw Error(S(321))}function so(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Qe(e[r],t[r]))return!1;return!0}function co(e,t,r,n,a,l){if(Gt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Wm:Vm,e=r(n,a),tn){l=0;do{if(tn=!1,xn=0,25<=l)throw Error(S(301));l+=1,le=ie=null,t.updateQueue=null,ti.current=Hm,e=r(n,a)}while(tn)}if(ti.current=Si,t=ie!==null&&ie.next!==null,Gt=0,le=ie=Y=null,Ni=!1,t)throw Error(S(300));return e}function uo(){var e=xn!==0;return xn=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Ae(){if(ie===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(S(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function wn(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=Ae(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=ie,a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}n.baseQueue=a=l,r.pending=null}if(a!==null){l=a.next,n=n.baseState;var s=o=null,c=null,u=l;do{var h=u.lane;if((Gt&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=m,o=n):c=c.next=m,Y.lanes|=h,Xt|=h}u=u.next}while(u!==null&&u!==l);c===null?o=n:c.next=s,Qe(n,t.memoizedState)||(je=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do l=a.lane,Y.lanes|=l,Xt|=l,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ba(e){var t=Ae(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,l=t.memoizedState;if(a!==null){r.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);Qe(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function wu(){}function ju(e,t){var r=Y,n=Ae(),a=t(),l=!Qe(n.memoizedState,a);if(l&&(n.memoizedState=a,je=!0),n=n.queue,fo(Nu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,jn(9,bu.bind(null,r,n,a,t),void 0,null),oe===null)throw Error(S(349));Gt&30||ku(r,t,a)}return a}function ku(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bu(e,t,r,n){t.value=r,t.getSnapshot=n,Su(t)&&Cu(e)}function Nu(e,t,r){return r(function(){Su(t)&&Cu(e)})}function Su(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Qe(e,r)}catch{return!0}}function Cu(e){var t=ut(e,1);t!==null&&qe(t,e,1,-1)}function xs(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t.queue=e,e=e.dispatch=Um.bind(null,Y,e),[t.memoizedState,e]}function jn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function zu(){return Ae().memoizedState}function ri(e,t,r,n){var a=Ge();Y.flags|=e,a.memoizedState=jn(1|t,r,void 0,n===void 0?null:n)}function Ui(e,t,r,n){var a=Ae();n=n===void 0?null:n;var l=void 0;if(ie!==null){var o=ie.memoizedState;if(l=o.destroy,n!==null&&so(n,o.deps)){a.memoizedState=jn(t,r,l,n);return}}Y.flags|=e,a.memoizedState=jn(1|t,r,l,n)}function ws(e,t){return ri(8390656,8,e,t)}function fo(e,t){return Ui(2048,8,e,t)}function Pu(e,t){return Ui(4,2,e,t)}function Eu(e,t){return Ui(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lu(e,t,r){return r=r!=null?r.concat([e]):null,Ui(4,4,_u.bind(null,t,e),r)}function mo(){}function Mu(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&so(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Ru(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&so(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Tu(e,t,r){return Gt&21?(Qe(r,t)||(r=Ac(),Y.lanes|=r,Xt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=r)}function $m(e,t){var r=U;U=r!==0&&4>r?r:4,e(!0);var n=ja.transition;ja.transition={};try{e(!1),t()}finally{U=r,ja.transition=n}}function Iu(){return Ae().memoizedState}function Bm(e,t,r){var n=Et(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Ou(e))Fu(t,r);else if(r=vu(e,t,r,n),r!==null){var a=ve();qe(r,e,n,a),Du(r,t,n)}}function Um(e,t,r){var n=Et(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Fu(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,r);if(a.hasEagerState=!0,a.eagerState=s,Qe(s,o)){var c=t.interleaved;c===null?(a.next=a,no(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=vu(e,t,a,n),r!==null&&(a=ve(),qe(r,e,n,a),Du(r,t,n))}}function Ou(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Fu(e,t){tn=Ni=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Du(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wl(e,r)}}var Si={readContext:De,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Wm={readContext:De,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ws,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ri(4194308,4,_u.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var r=Ge();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ge();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Bm.bind(null,Y,e),[n.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:xs,useDebugValue:mo,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=xs(!1),t=e[0];return e=$m.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Y,a=Ge();if(Q){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),oe===null)throw Error(S(349));Gt&30||ku(n,t,r)}a.memoizedState=r;var l={value:r,getSnapshot:t};return a.queue=l,ws(Nu.bind(null,n,l,e),[e]),n.flags|=2048,jn(9,bu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Ge(),t=oe.identifierPrefix;if(Q){var r=lt,n=at;r=(n&~(1<<32-He(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=xn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Am++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vm={readContext:De,useCallback:Mu,useContext:De,useEffect:fo,useImperativeHandle:Lu,useInsertionEffect:Pu,useLayoutEffect:Eu,useMemo:Ru,useReducer:ka,useRef:zu,useState:function(){return ka(wn)},useDebugValue:mo,useDeferredValue:function(e){var t=Ae();return Tu(t,ie.memoizedState,e)},useTransition:function(){var e=ka(wn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ju,useId:Iu,unstable_isNewReconciler:!1},Hm={readContext:De,useCallback:Mu,useContext:De,useEffect:fo,useImperativeHandle:Lu,useInsertionEffect:Pu,useLayoutEffect:Eu,useMemo:Ru,useReducer:ba,useRef:zu,useState:function(){return ba(wn)},useDebugValue:mo,useDeferredValue:function(e){var t=Ae();return ie===null?t.memoizedState=e:Tu(t,ie.memoizedState,e)},useTransition:function(){var e=ba(wn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:wu,useSyncExternalStore:ju,useId:Iu,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function sl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Wi={isMounted:function(e){return(e=e._reactInternals)?er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ve(),a=Et(e),l=ot(n,a);l.payload=t,r!=null&&(l.callback=r),t=zt(e,l,a),t!==null&&(qe(t,e,a,n),ei(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ve(),a=Et(e),l=ot(n,a);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=zt(e,l,a),t!==null&&(qe(t,e,a,n),ei(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ve(),n=Et(e),a=ot(r,n);a.tag=2,t!=null&&(a.callback=t),t=zt(e,a,n),t!==null&&(qe(t,e,n,r),ei(t,e,n))}};function js(e,t,r,n,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!mn(r,n)||!mn(a,l):!0}function Au(e,t,r){var n=!1,a=Rt,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(a=be(t)?Kt:he.current,n=t.contextTypes,l=(n=n!=null)?Nr(e,a):Rt),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function ks(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function cl(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},io(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=De(l):(l=be(t)?Kt:he.current,a.context=Nr(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(sl(e,t,l,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Wi.enqueueReplaceState(a,a.state,null),ki(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t){try{var r="",n=t;do r+=xf(n),n=n.return;while(n);var a=r}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function Na(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var qm=typeof WeakMap=="function"?WeakMap:Map;function $u(e,t,r){r=ot(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){zi||(zi=!0,wl=n),ul(e,t)},r}function Bu(e,t,r){r=ot(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){ul(e,t),typeof n!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function bs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new qm;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=lp.bind(null,e,t,r),t.then(e,e))}function Ns(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ss(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=ot(-1,1),t.tag=2,zt(r,t,1))),r.lanes|=1),e)}var Qm=ft.ReactCurrentOwner,je=!1;function ge(e,t,r,n){t.child=e===null?gu(t,null,r,n):Cr(t,e.child,r,n)}function Cs(e,t,r,n,a){r=r.render;var l=t.ref;return jr(t,a),n=co(e,t,r,n,l,a),r=uo(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dt(e,t,a)):(Q&&r&&Xl(t),t.flags|=1,ge(e,t,n,a),t.child)}function zs(e,t,r,n,a){if(e===null){var l=r.type;return typeof l=="function"&&!jo(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Uu(e,t,l,n,a)):(e=li(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:mn,r(o,n)&&e.ref===t.ref)return dt(e,t,a)}return t.flags|=1,e=_t(l,n),e.ref=t.ref,e.return=t,t.child=e}function Uu(e,t,r,n,a){if(e!==null){var l=e.memoizedProps;if(mn(l,n)&&e.ref===t.ref)if(je=!1,t.pendingProps=n=l,(e.lanes&a)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,dt(e,t,a)}return dl(e,t,r,n,a)}function Wu(e,t,r){var n=t.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(gr,Ce),Ce|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(gr,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,W(gr,Ce),Ce|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,W(gr,Ce),Ce|=n;return ge(e,t,a,r),t.child}function Vu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,r,n,a){var l=be(r)?Kt:he.current;return l=Nr(t,l),jr(t,a),r=co(e,t,r,n,l,a),n=uo(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,dt(e,t,a)):(Q&&n&&Xl(t),t.flags|=1,ge(e,t,r,a),t.child)}function Ps(e,t,r,n,a){if(be(r)){var l=!0;vi(t)}else l=!1;if(jr(t,a),t.stateNode===null)ni(e,t),Au(t,r,n),cl(t,r,n,a),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=De(u):(u=be(r)?Kt:he.current,u=Nr(t,u));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||c!==u)&&ks(t,o,n,u),vt=!1;var g=t.memoizedState;o.state=g,ki(t,n,o,a),c=t.memoizedState,s!==n||g!==c||ke.current||vt?(typeof h=="function"&&(sl(t,r,h,n),c=t.memoizedState),(s=vt||js(t,r,s,n,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,yu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ue(t.type,s),o.props=u,m=t.pendingProps,g=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=De(c):(c=be(r)?Kt:he.current,c=Nr(t,c));var v=r.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||g!==c)&&ks(t,o,n,c),vt=!1,g=t.memoizedState,o.state=g,ki(t,n,o,a);var w=t.memoizedState;s!==m||g!==w||ke.current||vt?(typeof v=="function"&&(sl(t,r,v,n),w=t.memoizedState),(u=vt||js(t,r,u,n,g,w,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,w,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,w,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),o.props=n,o.state=w,o.context=c,n=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return fl(e,t,r,n,l,a)}function fl(e,t,r,n,a,l){Vu(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return a&&ms(t,r,!1),dt(e,t,l);n=t.stateNode,Qm.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Cr(t,e.child,null,l),t.child=Cr(t,null,s,l)):ge(e,t,s,l),t.memoizedState=n.state,a&&ms(t,r,!0),t.child}function Hu(e){var t=e.stateNode;t.pendingContext?fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fs(e,t.context,!1),ao(e,t.containerInfo)}function Es(e,t,r,n,a){return Sr(),Jl(a),t.flags|=256,ge(e,t,r,n),t.child}var ml={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function qu(e,t,r){var n=t.pendingProps,a=K.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(K,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,l?(n=t.mode,l=t.child,o={mode:"hidden",children:o},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=qi(o,n,0,null),e=Qt(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=pl(r),t.memoizedState=ml,e):po(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Km(e,t,o,n,s,a,r);if(l){l=n.fallback,o=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=_t(a,c),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=_t(s,l):(l=Qt(l,o,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,o=e.child.memoizedState,o=o===null?pl(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~r,t.memoizedState=ml,n}return l=e.child,e=l.sibling,n=_t(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function po(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hn(e,t,r,n){return n!==null&&Jl(n),Cr(t,e.child,null,r),e=po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,r,n,a,l,o){if(r)return t.flags&256?(t.flags&=-257,n=Na(Error(S(422))),Hn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,a=t.mode,n=qi({mode:"visible",children:n.children},a,0,null),l=Qt(l,a,o,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&Cr(t,e.child,null,o),t.child.memoizedState=pl(o),t.memoizedState=ml,l);if(!(t.mode&1))return Hn(e,t,o,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,l=Error(S(419)),n=Na(l,n,void 0),Hn(e,t,o,n)}if(s=(o&e.childLanes)!==0,je||s){if(n=oe,n!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,ut(e,a),qe(n,e,a,-1))}return wo(),n=Na(Error(S(421))),Hn(e,t,o,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=op.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,ze=Ct(a.nextSibling),Pe=t,Q=!0,Ve=null,e!==null&&(Te[Ie++]=at,Te[Ie++]=lt,Te[Ie++]=Yt,at=e.id,lt=e.overflow,Yt=t),t=po(t,n.children),t.flags|=4096,t)}function _s(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ol(e.return,t,r)}function Sa(e,t,r,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=a)}function Qu(e,t,r){var n=t.pendingProps,a=n.revealOrder,l=n.tail;if(ge(e,t,n.children,r),n=K.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_s(e,r,t);else if(e.tag===19)_s(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(W(K,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&bi(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),Sa(t,!1,a,r,l);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&bi(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}Sa(t,!0,r,null,l);break;case"together":Sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=_t(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_t(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ym(e,t,r){switch(t.tag){case 3:Hu(t),Sr();break;case 5:xu(t);break;case 1:be(t.type)&&vi(t);break;case 4:ao(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;W(wi,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):r&t.child.childLanes?qu(e,t,r):(W(K,K.current&1),e=dt(e,t,r),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Qu(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(K,K.current),n)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,r)}return dt(e,t,r)}var Ku,hl,Yu,Gu;Ku=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};hl=function(){};Yu=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Ht(Je.current);var l=null;switch(r){case"input":a=Fa(e,a),n=Fa(e,n),l=[];break;case"select":a=X({},a,{value:void 0}),n=X({},n,{value:void 0}),l=[];break;case"textarea":a=$a(e,a),n=$a(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=hi)}Ua(r,n);var o;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ln.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in n){var c=n[u];if(s=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(l||(l=[]),l.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ln.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&H("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}r&&(l=l||[]).push("style",r);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Gu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Wr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Gm(e,t,r){var n=t.pendingProps;switch(Zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return be(t.type)&&gi(),me(t),null;case 3:return n=t.stateNode,zr(),q(ke),q(he),oo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(bl(Ve),Ve=null))),hl(e,t),me(t),null;case 5:lo(t);var a=Ht(yn.current);if(r=t.type,e!==null&&t.stateNode!=null)Yu(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Ht(Je.current),Wn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Xe]=t,n[gn]=l,e=(t.mode&1)!==0,r){case"dialog":H("cancel",n),H("close",n);break;case"iframe":case"object":case"embed":H("load",n);break;case"video":case"audio":for(a=0;a<Yr.length;a++)H(Yr[a],n);break;case"source":H("error",n);break;case"img":case"image":case"link":H("error",n),H("load",n);break;case"details":H("toggle",n);break;case"input":Ao(n,l),H("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},H("invalid",n);break;case"textarea":Bo(n,l),H("invalid",n)}Ua(r,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?n.textContent!==s&&(l.suppressHydrationWarning!==!0&&Un(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Un(n.textContent,s,e),a=["children",""+s]):ln.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&H("scroll",n)}switch(r){case"input":Tn(n),$o(n,l,!0);break;case"textarea":Tn(n),Uo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=hi)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Xe]=t,e[gn]=n,Ku(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wa(r,n),r){case"dialog":H("cancel",e),H("close",e),a=n;break;case"iframe":case"object":case"embed":H("load",e),a=n;break;case"video":case"audio":for(a=0;a<Yr.length;a++)H(Yr[a],e);a=n;break;case"source":H("error",e),a=n;break;case"img":case"image":case"link":H("error",e),H("load",e),a=n;break;case"details":H("toggle",e),a=n;break;case"input":Ao(e,n),a=Fa(e,n),H("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=X({},n,{value:void 0}),H("invalid",e);break;case"textarea":Bo(e,n),a=$a(e,n),H("invalid",e);break;default:a=n}Ua(r,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?zc(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Sc(e,c)):l==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&on(e,c):typeof c=="number"&&on(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ln.hasOwnProperty(l)?c!=null&&l==="onScroll"&&H("scroll",e):c!=null&&Fl(e,l,c,o))}switch(r){case"input":Tn(e),$o(e,n,!1);break;case"textarea":Tn(e),Uo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Mt(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?vr(e,!!n.multiple,l,!1):n.defaultValue!=null&&vr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=hi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Ht(yn.current),Ht(Je.current),Wn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Xe]=t,(l=n.nodeValue!==r)&&(e=Pe,e!==null))switch(e.tag){case 3:Un(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Un(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Xe]=t,t.stateNode=n}return me(t),null;case 13:if(q(K),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))pu(),Sr(),t.flags|=98560,l=!1;else if(l=Wn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Xe]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ve!==null&&(bl(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ae===0&&(ae=3):wo())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return zr(),hl(e,t),e===null&&pn(t.stateNode.containerInfo),me(t),null;case 10:return ro(t.type._context),me(t),null;case 17:return be(t.type)&&gi(),me(t),null;case 19:if(q(K),l=t.memoizedState,l===null)return me(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)Wr(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=bi(e),o!==null){for(t.flags|=128,Wr(l,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&re()>Er&&(t.flags|=128,n=!0,Wr(l,!1),t.lanes=4194304)}else{if(!n)if(e=bi(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Wr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Q)return me(t),null}else 2*re()-l.renderingStartTime>Er&&r!==1073741824&&(t.flags|=128,n=!0,Wr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(r=l.last,r!==null?r.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=re(),t.sibling=null,r=K.current,W(K,n?r&1|2:r&1),t):(me(t),null);case 22:case 23:return xo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ce&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Xm(e,t){switch(Zl(t),t.tag){case 1:return be(t.type)&&gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),q(ke),q(he),oo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lo(t),null;case 13:if(q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(K),null;case 4:return zr(),null;case 10:return ro(t.type._context),null;case 22:case 23:return xo(),null;case 24:return null;default:return null}}var qn=!1,pe=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,L=null;function hr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){J(e,t,n)}else r.current=null}function gl(e,t,r){try{r()}catch(n){J(e,t,n)}}var Ls=!1;function Jm(e,t){if(Ja=fi,e=tu(),Gl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var o=0,s=-1,c=-1,u=0,h=0,m=e,g=null;t:for(;;){for(var v;m!==r||a!==0&&m.nodeType!==3||(s=o+a),m!==l||n!==0&&m.nodeType!==3||(c=o+n),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===r&&++u===a&&(s=o),g===l&&++h===n&&(c=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(el={focusedElem:e,selectionRange:r},fi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ue(t.type,k),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(j){J(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=Ls,Ls=!1,w}function rn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&gl(t,r,l)}a=a.next}while(a!==n)}}function Vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function vl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[gn],delete t[nl],delete t[Im],delete t[Om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zu(e){return e.tag===5||e.tag===3||e.tag===4}function Ms(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=hi));else if(n!==4&&(e=e.child,e!==null))for(yl(e,t,r),e=e.sibling;e!==null;)yl(e,t,r),e=e.sibling}function xl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(xl(e,t,r),e=e.sibling;e!==null;)xl(e,t,r),e=e.sibling}var ce=null,We=!1;function ht(e,t,r){for(r=r.child;r!==null;)Ju(e,t,r),r=r.sibling}function Ju(e,t,r){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Oi,r)}catch{}switch(r.tag){case 5:pe||hr(r,t);case 6:var n=ce,a=We;ce=null,ht(e,t,r),ce=n,We=a,ce!==null&&(We?(e=ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ce.removeChild(r.stateNode));break;case 18:ce!==null&&(We?(e=ce,r=r.stateNode,e.nodeType===8?ya(e.parentNode,r):e.nodeType===1&&ya(e,r),dn(e)):ya(ce,r.stateNode));break;case 4:n=ce,a=We,ce=r.stateNode.containerInfo,We=!0,ht(e,t,r),ce=n,We=a;break;case 0:case 11:case 14:case 15:if(!pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&gl(r,t,o),a=a.next}while(a!==n)}ht(e,t,r);break;case 1:if(!pe&&(hr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){J(r,t,s)}ht(e,t,r);break;case 21:ht(e,t,r);break;case 22:r.mode&1?(pe=(n=pe)||r.memoizedState!==null,ht(e,t,r),pe=n):ht(e,t,r);break;default:ht(e,t,r)}}function Rs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Zm),t.forEach(function(n){var a=sp.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Be(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ce=s.stateNode,We=!1;break e;case 3:ce=s.stateNode.containerInfo,We=!0;break e;case 4:ce=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(ce===null)throw Error(S(160));Ju(l,o,a),ce=null,We=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){J(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}function ed(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),n&4){try{rn(3,e,e.return),Vi(3,e)}catch(k){J(e,e.return,k)}try{rn(5,e,e.return)}catch(k){J(e,e.return,k)}}break;case 1:Be(t,e),Ye(e),n&512&&r!==null&&hr(r,r.return);break;case 5:if(Be(t,e),Ye(e),n&512&&r!==null&&hr(r,r.return),e.flags&32){var a=e.stateNode;try{on(a,"")}catch(k){J(e,e.return,k)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=r!==null?r.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&kc(a,l),Wa(s,o);var u=Wa(s,l);for(o=0;o<c.length;o+=2){var h=c[o],m=c[o+1];h==="style"?zc(a,m):h==="dangerouslySetInnerHTML"?Sc(a,m):h==="children"?on(a,m):Fl(a,h,m,u)}switch(s){case"input":Da(a,l);break;case"textarea":bc(a,l);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?vr(a,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?vr(a,!!l.multiple,l.defaultValue,!0):vr(a,!!l.multiple,l.multiple?[]:"",!1))}a[gn]=l}catch(k){J(e,e.return,k)}}break;case 6:if(Be(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(k){J(e,e.return,k)}}break;case 3:if(Be(t,e),Ye(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(k){J(e,e.return,k)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(vo=re())),n&4&&Rs(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(pe=(u=pe)||h,Be(t,e),pe=u):Be(t,e),Ye(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(m=L=h;L!==null;){switch(g=L,v=g.child,g.tag){case 0:case 11:case 14:case 15:rn(4,g,g.return);break;case 1:hr(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){J(n,r,k)}}break;case 5:hr(g,g.return);break;case 22:if(g.memoizedState!==null){Is(m);continue}}v!==null?(v.return=g,L=v):Is(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{a=m.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Cc("display",o))}catch(k){J(e,e.return,k)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){J(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ye(e),n&4&&Rs(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Zu(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(on(a,""),n.flags&=-33);var l=Ms(e);xl(e,l,a);break;case 3:case 4:var o=n.stateNode.containerInfo,s=Ms(e);yl(e,s,o);break;default:throw Error(S(161))}}catch(c){J(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,r){L=e,td(e)}function td(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var a=L,l=a.child;if(a.tag===22&&n){var o=a.memoizedState!==null||qn;if(!o){var s=a.alternate,c=s!==null&&s.memoizedState!==null||pe;s=qn;var u=pe;if(qn=o,(pe=c)&&!u)for(L=a;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?Os(a):c!==null?(c.return=o,L=c):Os(a);for(;l!==null;)L=l,td(l),l=l.sibling;L=a,qn=s,pe=u}Ts(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,L=l):Ts(e)}}function Ts(e){for(;L!==null;){var t=L;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Vi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!pe)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Ue(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ys(t,l,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ys(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&dn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&vl(t)}catch(g){J(t,t.return,g)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function Is(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function Os(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Vi(4,t)}catch(c){J(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){J(t,a,c)}}var l=t.return;try{vl(t)}catch(c){J(t,l,c)}break;case 5:var o=t.return;try{vl(t)}catch(c){J(t,o,c)}}}catch(c){J(t,t.return,c)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var tp=Math.ceil,Ci=ft.ReactCurrentDispatcher,ho=ft.ReactCurrentOwner,Fe=ft.ReactCurrentBatchConfig,B=0,oe=null,ne=null,ue=0,Ce=0,gr=It(0),ae=0,kn=null,Xt=0,Hi=0,go=0,nn=null,we=null,vo=0,Er=1/0,nt=null,zi=!1,wl=null,Pt=null,Qn=!1,jt=null,Pi=0,an=0,jl=null,ii=-1,ai=0;function ve(){return B&6?re():ii!==-1?ii:ii=re()}function Et(e){return e.mode&1?B&2&&ue!==0?ue&-ue:Dm.transition!==null?(ai===0&&(ai=Ac()),ai):(e=U,e!==0||(e=window.event,e=e===void 0?16:qc(e.type)),e):1}function qe(e,t,r,n){if(50<an)throw an=0,jl=null,Error(S(185));zn(e,r,n),(!(B&2)||e!==oe)&&(e===oe&&(!(B&2)&&(Hi|=r),ae===4&&xt(e,ue)),Ne(e,n),r===1&&B===0&&!(t.mode&1)&&(Er=re()+500,Bi&&Ot()))}function Ne(e,t){var r=e.callbackNode;Df(e,t);var n=di(e,e===oe?ue:0);if(n===0)r!==null&&Ho(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ho(r),t===1)e.tag===0?Fm(Fs.bind(null,e)):du(Fs.bind(null,e)),Rm(function(){!(B&6)&&Ot()}),r=null;else{switch($c(n)){case 1:r=Ul;break;case 4:r=Fc;break;case 16:r=ui;break;case 536870912:r=Dc;break;default:r=ui}r=cd(r,rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function rd(e,t){if(ii=-1,ai=0,B&6)throw Error(S(327));var r=e.callbackNode;if(kr()&&e.callbackNode!==r)return null;var n=di(e,e===oe?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ei(e,n);else{t=n;var a=B;B|=2;var l=id();(oe!==e||ue!==t)&&(nt=null,Er=re()+500,qt(e,t));do try{ip();break}catch(s){nd(e,s)}while(!0);to(),Ci.current=l,B=a,ne!==null?t=0:(oe=null,ue=0,t=ae)}if(t!==0){if(t===2&&(a=Ka(e),a!==0&&(n=a,t=kl(e,a))),t===1)throw r=kn,qt(e,0),xt(e,n),Ne(e,re()),r;if(t===6)xt(e,n);else{if(a=e.current.alternate,!(n&30)&&!rp(a)&&(t=Ei(e,n),t===2&&(l=Ka(e),l!==0&&(n=l,t=kl(e,l))),t===1))throw r=kn,qt(e,0),xt(e,n),Ne(e,re()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:Ut(e,we,nt);break;case 3:if(xt(e,n),(n&130023424)===n&&(t=vo+500-re(),10<t)){if(di(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ve(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=rl(Ut.bind(null,e,we,nt),t);break}Ut(e,we,nt);break;case 4:if(xt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var o=31-He(n);l=1<<o,o=t[o],o>a&&(a=o),n&=~l}if(n=a,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*tp(n/1960))-n,10<n){e.timeoutHandle=rl(Ut.bind(null,e,we,nt),n);break}Ut(e,we,nt);break;case 5:Ut(e,we,nt);break;default:throw Error(S(329))}}}return Ne(e,re()),e.callbackNode===r?rd.bind(null,e):null}function kl(e,t){var r=nn;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=we,we=r,t!==null&&bl(t)),e}function bl(e){we===null?we=e:we.push.apply(we,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],l=a.getSnapshot;a=a.value;try{if(!Qe(l(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~go,t&=~Hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-He(t),n=1<<r;e[r]=-1,t&=~n}}function Fs(e){if(B&6)throw Error(S(327));kr();var t=di(e,0);if(!(t&1))return Ne(e,re()),null;var r=Ei(e,t);if(e.tag!==0&&r===2){var n=Ka(e);n!==0&&(t=n,r=kl(e,n))}if(r===1)throw r=kn,qt(e,0),xt(e,t),Ne(e,re()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,we,nt),Ne(e,re()),null}function yo(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Er=re()+500,Bi&&Ot())}}function Zt(e){jt!==null&&jt.tag===0&&!(B&6)&&kr();var t=B;B|=1;var r=Fe.transition,n=U;try{if(Fe.transition=null,U=1,e)return e()}finally{U=n,Fe.transition=r,B=t,!(B&6)&&Ot()}}function xo(){Ce=gr.current,q(gr)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Mm(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(Zl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&gi();break;case 3:zr(),q(ke),q(he),oo();break;case 5:lo(n);break;case 4:zr();break;case 13:q(K);break;case 19:q(K);break;case 10:ro(n.type._context);break;case 22:case 23:xo()}r=r.return}if(oe=e,ne=e=_t(e.current,null),ue=Ce=t,ae=0,kn=null,go=Hi=Xt=0,we=nn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(r=Vt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,l=r.pending;if(l!==null){var o=l.next;l.next=a,n.next=o}r.pending=n}Vt=null}return e}function nd(e,t){do{var r=ne;try{if(to(),ti.current=Si,Ni){for(var n=Y.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ni=!1}if(Gt=0,le=ie=Y=null,tn=!1,xn=0,ho.current=null,r===null||r.return===null){ae=1,kn=t,ne=null;break}e:{var l=e,o=r.return,s=r,c=t;if(t=ue,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ns(o);if(v!==null){v.flags&=-257,Ss(v,o,s,l,t),v.mode&1&&bs(l,u,t),t=v,c=u;var w=t.updateQueue;if(w===null){var k=new Set;k.add(c),t.updateQueue=k}else w.add(c);break e}else{if(!(t&1)){bs(l,u,t),wo();break e}c=Error(S(426))}}else if(Q&&s.mode&1){var C=Ns(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ss(C,o,s,l,t),Jl(Pr(c,s));break e}}l=c=Pr(c,s),ae!==4&&(ae=2),nn===null?nn=[l]:nn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=$u(l,c,t);vs(l,f);break e;case 1:s=c;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pt===null||!Pt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=Bu(l,s,t);vs(l,j);break e}}l=l.return}while(l!==null)}ld(r)}catch(x){t=x,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function id(){var e=Ci.current;return Ci.current=Si,e===null?Si:e}function wo(){(ae===0||ae===3||ae===2)&&(ae=4),oe===null||!(Xt&268435455)&&!(Hi&268435455)||xt(oe,ue)}function Ei(e,t){var r=B;B|=2;var n=id();(oe!==e||ue!==t)&&(nt=null,qt(e,t));do try{np();break}catch(a){nd(e,a)}while(!0);if(to(),B=r,Ci.current=n,ne!==null)throw Error(S(261));return oe=null,ue=0,ae}function np(){for(;ne!==null;)ad(ne)}function ip(){for(;ne!==null&&!Ef();)ad(ne)}function ad(e){var t=sd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?ld(e):ne=t,ho.current=null}function ld(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Xm(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ne=null;return}}else if(r=Gm(r,t,Ce),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ae===0&&(ae=5)}function Ut(e,t,r){var n=U,a=Fe.transition;try{Fe.transition=null,U=1,ap(e,t,r,n)}finally{Fe.transition=a,U=n}return null}function ap(e,t,r,n){do kr();while(jt!==null);if(B&6)throw Error(S(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(Af(e,l),e===oe&&(ne=oe=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Qn||(Qn=!0,cd(ui,function(){return kr(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=U;U=1;var s=B;B|=4,ho.current=null,Jm(e,r),ed(r,e),Sm(el),fi=!!Ja,el=Ja=null,e.current=r,ep(r),_f(),B=s,U=o,Fe.transition=l}else e.current=r;if(Qn&&(Qn=!1,jt=e,Pi=a),l=e.pendingLanes,l===0&&(Pt=null),Rf(r.stateNode),Ne(e,re()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(zi)throw zi=!1,e=wl,wl=null,e;return Pi&1&&e.tag!==0&&kr(),l=e.pendingLanes,l&1?e===jl?an++:(an=0,jl=e):an=0,Ot(),null}function kr(){if(jt!==null){var e=$c(Pi),t=Fe.transition,r=U;try{if(Fe.transition=null,U=16>e?16:e,jt===null)var n=!1;else{if(e=jt,jt=null,Pi=0,B&6)throw Error(S(331));var a=B;for(B|=4,L=e.current;L!==null;){var l=L,o=l.child;if(L.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:rn(8,h,l)}var m=h.child;if(m!==null)m.return=h,L=m;else for(;L!==null;){h=L;var g=h.sibling,v=h.return;if(Xu(h),h===u){L=null;break}if(g!==null){g.return=v,L=g;break}L=v}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}L=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,L=o;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:rn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,L=f;break e}L=l.return}}var d=e.current;for(L=d;L!==null;){o=L;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,L=p;else e:for(o=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Vi(9,s)}}catch(x){J(s,s.return,x)}if(s===o){L=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,L=j;break e}L=s.return}}if(B=a,Ot(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Oi,e)}catch{}n=!0}return n}finally{U=r,Fe.transition=t}}return!1}function Ds(e,t,r){t=Pr(r,t),t=$u(e,t,1),e=zt(e,t,1),t=ve(),e!==null&&(zn(e,1,t),Ne(e,t))}function J(e,t,r){if(e.tag===3)Ds(e,e,r);else for(;t!==null;){if(t.tag===3){Ds(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Pt===null||!Pt.has(n))){e=Pr(r,e),e=Bu(t,e,1),t=zt(t,e,1),e=ve(),t!==null&&(zn(t,1,e),Ne(t,e));break}}t=t.return}}function lp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&r,oe===e&&(ue&r)===r&&(ae===4||ae===3&&(ue&130023424)===ue&&500>re()-vo?qt(e,0):go|=r),Ne(e,t)}function od(e,t){t===0&&(e.mode&1?(t=Fn,Fn<<=1,!(Fn&130023424)&&(Fn=4194304)):t=1);var r=ve();e=ut(e,t),e!==null&&(zn(e,t,r),Ne(e,r))}function op(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),od(e,r)}function sp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),od(e,r)}var sd;sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)je=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return je=!1,Ym(e,t,r);je=!!(e.flags&131072)}else je=!1,Q&&t.flags&1048576&&fu(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ni(e,t),e=t.pendingProps;var a=Nr(t,he.current);jr(t,r),a=co(null,t,n,e,a,r);var l=uo();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(n)?(l=!0,vi(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,io(t),a.updater=Wi,t.stateNode=a,a._reactInternals=t,cl(t,n,e,r),t=fl(null,t,n,!0,l,r)):(t.tag=0,Q&&l&&Xl(t),ge(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=up(n),e=Ue(n,e),a){case 0:t=dl(null,t,n,e,r);break e;case 1:t=Ps(null,t,n,e,r);break e;case 11:t=Cs(null,t,n,e,r);break e;case 14:t=zs(null,t,n,Ue(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ue(n,a),dl(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ue(n,a),Ps(e,t,n,a,r);case 3:e:{if(Hu(t),e===null)throw Error(S(387));n=t.pendingProps,l=t.memoizedState,a=l.element,yu(e,t),ki(t,n,null,r);var o=t.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=Pr(Error(S(423)),t),t=Es(e,t,n,r,a);break e}else if(n!==a){a=Pr(Error(S(424)),t),t=Es(e,t,n,r,a);break e}else for(ze=Ct(t.stateNode.containerInfo.firstChild),Pe=t,Q=!0,Ve=null,r=gu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),n===a){t=dt(e,t,r);break e}ge(e,t,n,r)}t=t.child}return t;case 5:return xu(t),e===null&&ll(t),n=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,tl(n,a)?o=null:l!==null&&tl(n,l)&&(t.flags|=32),Vu(e,t),ge(e,t,o,r),t.child;case 6:return e===null&&ll(t),null;case 13:return qu(e,t,r);case 4:return ao(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Cr(t,null,n,r):ge(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ue(n,a),Cs(e,t,n,a,r);case 7:return ge(e,t,t.pendingProps,r),t.child;case 8:return ge(e,t,t.pendingProps.children,r),t.child;case 12:return ge(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,W(wi,n._currentValue),n._currentValue=o,l!==null)if(Qe(l.value,o)){if(l.children===a.children&&!ke.current){t=dt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(l.tag===1){c=ot(-1,r&-r),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),ol(l.return,r,t),s.lanes|=r;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),ol(o,r,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ge(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,jr(t,r),a=De(a),n=n(a),t.flags|=1,ge(e,t,n,r),t.child;case 14:return n=t.type,a=Ue(n,t.pendingProps),a=Ue(n.type,a),zs(e,t,n,a,r);case 15:return Uu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Ue(n,a),ni(e,t),t.tag=1,be(n)?(e=!0,vi(t)):e=!1,jr(t,r),Au(t,n,a),cl(t,n,a,r),fl(null,t,n,!0,e,r);case 19:return Qu(e,t,r);case 22:return Wu(e,t,r)}throw Error(S(156,t.tag))};function cd(e,t){return Oc(e,t)}function cp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,r,n){return new cp(e,t,r,n)}function jo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return jo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Al)return 11;if(e===$l)return 14}return 2}function _t(e,t){var r=e.alternate;return r===null?(r=Oe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function li(e,t,r,n,a,l){var o=2;if(n=e,typeof e=="function")jo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case lr:return Qt(r.children,a,l,t);case Dl:o=8,a|=8;break;case Ra:return e=Oe(12,r,t,a|2),e.elementType=Ra,e.lanes=l,e;case Ta:return e=Oe(13,r,t,a),e.elementType=Ta,e.lanes=l,e;case Ia:return e=Oe(19,r,t,a),e.elementType=Ia,e.lanes=l,e;case xc:return qi(r,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vc:o=10;break e;case yc:o=9;break e;case Al:o=11;break e;case $l:o=14;break e;case gt:o=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Oe(o,r,t,a),t.elementType=e,t.type=n,t.lanes=l,t}function Qt(e,t,r,n){return e=Oe(7,e,n,t),e.lanes=r,e}function qi(e,t,r,n){return e=Oe(22,e,n,t),e.elementType=xc,e.lanes=r,e.stateNode={isHidden:!1},e}function Ca(e,t,r){return e=Oe(6,e,null,t),e.lanes=r,e}function za(e,t,r){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dp(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ko(e,t,r,n,a,l,o,s,c){return e=new dp(e,t,r,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(l),e}function fp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ud(e){if(!e)return Rt;e=e._reactInternals;e:{if(er(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(be(r))return uu(e,r,t)}return t}function dd(e,t,r,n,a,l,o,s,c){return e=ko(r,n,!0,e,a,l,o,s,c),e.context=ud(null),r=e.current,n=ve(),a=Et(r),l=ot(n,a),l.callback=t??null,zt(r,l,a),e.current.lanes=a,zn(e,a,n),Ne(e,n),e}function Qi(e,t,r,n){var a=t.current,l=ve(),o=Et(a);return r=ud(r),t.context===null?t.context=r:t.pendingContext=r,t=ot(l,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=zt(a,t,o),e!==null&&(qe(e,a,o,l),ei(e,a,o)),o}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function As(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bo(e,t){As(e,t),(e=e.alternate)&&As(e,t)}function mp(){return null}var fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}Ki.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Qi(e,t,null,null)};Ki.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){Qi(null,e,null,null)}),t[ct]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<yt.length&&t!==0&&t<yt[r].priority;r++);yt.splice(r,0,e),r===0&&Hc(e)}};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $s(){}function pp(e,t,r,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var u=_i(o);l.call(u)}}var o=dd(t,n,e,0,null,!1,!1,"",$s);return e._reactRootContainer=o,e[ct]=o.current,pn(e.nodeType===8?e.parentNode:e),Zt(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var u=_i(c);s.call(u)}}var c=ko(e,0,!1,null,null,!1,!1,"",$s);return e._reactRootContainer=c,e[ct]=c.current,pn(e.nodeType===8?e.parentNode:e),Zt(function(){Qi(t,c,r,n)}),c}function Gi(e,t,r,n,a){var l=r._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var s=a;a=function(){var c=_i(o);s.call(c)}}Qi(t,o,e,a)}else o=pp(r,t,e,a,n);return _i(o)}Bc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Kr(t.pendingLanes);r!==0&&(Wl(t,r|1),Ne(t,re()),!(B&6)&&(Er=re()+500,Ot()))}break;case 13:Zt(function(){var n=ut(e,1);if(n!==null){var a=ve();qe(n,e,1,a)}}),bo(e,1)}};Vl=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var r=ve();qe(t,e,134217728,r)}bo(e,134217728)}};Uc=function(e){if(e.tag===13){var t=Et(e),r=ut(e,t);if(r!==null){var n=ve();qe(r,e,t,n)}bo(e,t)}};Wc=function(){return U};Vc=function(e,t){var r=U;try{return U=e,t()}finally{U=r}};Ha=function(e,t,r){switch(t){case"input":if(Da(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=$i(n);if(!a)throw Error(S(90));jc(n),Da(n,a)}}}break;case"textarea":bc(e,r);break;case"select":t=r.value,t!=null&&vr(e,!!r.multiple,t,!1)}};_c=yo;Lc=Zt;var hp={usingClientEntryPoint:!1,Events:[En,ur,$i,Pc,Ec,yo]},Vr={findFiberByHostInstance:Wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gp={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kn.isDisabled&&Kn.supportsFiber)try{Oi=Kn.inject(gp),Ze=Kn}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hp;_e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(t))throw Error(S(200));return fp(e,t,null,r)};_e.createRoot=function(e,t){if(!So(e))throw Error(S(299));var r=!1,n="",a=fd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ko(e,1,!1,null,null,r,!1,n,a),e[ct]=t.current,pn(e.nodeType===8?e.parentNode:e),new No(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Zt(e)};_e.hydrate=function(e,t,r){if(!Yi(t))throw Error(S(200));return Gi(null,e,t,!0,r)};_e.hydrateRoot=function(e,t,r){if(!So(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,a=!1,l="",o=fd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=dd(t,null,e,1,r??null,a,!1,l,o),e[ct]=t.current,pn(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Ki(t)};_e.render=function(e,t,r){if(!Yi(t))throw Error(S(200));return Gi(null,e,t,!1,r)};_e.unmountComponentAtNode=function(e){if(!Yi(e))throw Error(S(40));return e._reactRootContainer?(Zt(function(){Gi(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};_e.unstable_batchedUpdates=yo;_e.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Yi(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Gi(e,t,r,!1,n)};_e.version="18.3.1-next-f1338f8080-20240426";function md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)}catch(e){console.error(e)}}md(),mc.exports=_e;var vp=mc.exports,Bs=vp;La.createRoot=Bs.createRoot,La.hydrateRoot=Bs.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bn(){return bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bn.apply(null,arguments)}var kt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(kt||(kt={}));const Us="popstate";function yp(e){e===void 0&&(e={});function t(n,a){let{pathname:l,search:o,hash:s}=n.location;return Nl("",{pathname:l,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Li(a)}return wp(t,r,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Co(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xp(){return Math.random().toString(36).substr(2,8)}function Ws(e,t){return{usr:e.state,key:e.key,idx:t}}function Nl(e,t,r,n){return r===void 0&&(r=null),bn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tr(t):t,{state:r,key:t&&t.key||n||xp()})}function Li(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Tr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function wp(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:l=!1}=n,o=a.history,s=kt.Pop,c=null,u=h();u==null&&(u=0,o.replaceState(bn({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function m(){s=kt.Pop;let C=h(),f=C==null?null:C-u;u=C,c&&c({action:s,location:k.location,delta:f})}function g(C,f){s=kt.Push;let d=Nl(k.location,C,f);u=h()+1;let p=Ws(d,u),j=k.createHref(d);try{o.pushState(p,"",j)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;a.location.assign(j)}l&&c&&c({action:s,location:k.location,delta:1})}function v(C,f){s=kt.Replace;let d=Nl(k.location,C,f);u=h();let p=Ws(d,u),j=k.createHref(d);o.replaceState(p,"",j),l&&c&&c({action:s,location:k.location,delta:0})}function w(C){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof C=="string"?C:Li(C);return d=d.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let k={get action(){return s},get location(){return e(a,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Us,m),c=C,()=>{a.removeEventListener(Us,m),c=null}},createHref(C){return t(a,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(C){return o.go(C)}};return k}var Vs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vs||(Vs={}));function jp(e,t,r){return r===void 0&&(r="/"),kp(e,t,r)}function kp(e,t,r,n){let a=typeof t=="string"?Tr(t):t,l=_r(a.pathname||"/",r);if(l==null)return null;let o=pd(e);bp(o);let s=null,c=Tp(l);for(let u=0;s==null&&u<o.length;++u)s=Mp(o[u],c);return s}function pd(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(l,o,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Lt([n,c.relativePath]),h=r.concat(c);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pd(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:_p(u,l.index),routesMeta:h})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,o);else for(let c of hd(l.path))a(l,o,c)}),t}function hd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return a?[l,""]:[l];let o=hd(n.join("/")),s=[];return s.push(...o.map(c=>c===""?l:[l,c].join("/"))),a&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function bp(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Lp(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Np=/^:[\w-]+$/,Sp=3,Cp=2,zp=1,Pp=10,Ep=-2,Hs=e=>e==="*";function _p(e,t){let r=e.split("/"),n=r.length;return r.some(Hs)&&(n+=Ep),t&&(n+=Cp),r.filter(a=>!Hs(a)).reduce((a,l)=>a+(Np.test(l)?Sp:l===""?zp:Pp),n)}function Lp(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Mp(e,t,r){let{routesMeta:n}=e,a={},l="/",o=[];for(let s=0;s<n.length;++s){let c=n[s],u=s===n.length-1,h=l==="/"?t:t.slice(l.length)||"/",m=Sl({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),g=c.route;if(!m)return null;Object.assign(a,m.params),o.push({params:a,pathname:Lt([l,m.pathname]),pathnameBase:Ap(Lt([l,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(l=Lt([l,m.pathnameBase]))}return o}function Sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Rp(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let l=a[0],o=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((u,h,m)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let k=s[m]||"";o=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const w=s[m];return v&&!w?u[g]=void 0:u[g]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:o,pattern:e}}function Rp(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Co(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Tp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Co(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _r(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Op=e=>Ip.test(e);function Fp(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Tr(e):e,l;if(r)if(Op(r))l=r;else{if(r.includes("//")){let o=r;r=gd(r),Co(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?l=qs(r.substring(1),"/"):l=qs(r,t)}else l=t;return{pathname:l,search:$p(n),hash:Bp(a)}}function qs(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Pa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dp(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function zo(e,t){let r=Dp(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Po(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Tr(e):(a=bn({},e),G(!a.pathname||!a.pathname.includes("?"),Pa("?","pathname","search",a)),G(!a.pathname||!a.pathname.includes("#"),Pa("#","pathname","hash",a)),G(!a.search||!a.search.includes("#"),Pa("#","search","hash",a)));let l=e===""||a.pathname==="",o=l?"/":a.pathname,s;if(o==null)s=r;else{let m=t.length-1;if(!n&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;a.pathname=g.join("/")}s=m>=0?t[m]:"/"}let c=Fp(a,s),u=o&&o!=="/"&&o.endsWith("/"),h=(l||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const gd=e=>e.replace(/\/\/+/g,"/"),Lt=e=>gd(e.join("/")),Ap=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$p=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Up(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vd=["post","put","patch","delete"];new Set(vd);const Wp=["get",...vd];new Set(Wp);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nn(){return Nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Nn.apply(null,arguments)}const Xi=y.createContext(null),yd=y.createContext(null),mt=y.createContext(null),Zi=y.createContext(null),pt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),xd=y.createContext(null);function Vp(e,t){let{relative:r}=t===void 0?{}:t;Ir()||G(!1);let{basename:n,navigator:a}=y.useContext(mt),{hash:l,pathname:o,search:s}=Ji(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:Lt([n,o])),a.createHref({pathname:c,search:s,hash:l})}function Ir(){return y.useContext(Zi)!=null}function tr(){return Ir()||G(!1),y.useContext(Zi).location}function wd(e){y.useContext(mt).static||y.useLayoutEffect(e)}function Ft(){let{isDataRoute:e}=y.useContext(pt);return e?nh():Hp()}function Hp(){Ir()||G(!1);let e=y.useContext(Xi),{basename:t,future:r,navigator:n}=y.useContext(mt),{matches:a}=y.useContext(pt),{pathname:l}=tr(),o=JSON.stringify(zo(a,r.v7_relativeSplatPath)),s=y.useRef(!1);return wd(()=>{s.current=!0}),y.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){n.go(u);return}let m=Po(u,JSON.parse(o),l,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Lt([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,o,l,e])}function jd(){let{matches:e}=y.useContext(pt),t=e[e.length-1];return t?t.params:{}}function Ji(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=y.useContext(mt),{matches:a}=y.useContext(pt),{pathname:l}=tr(),o=JSON.stringify(zo(a,n.v7_relativeSplatPath));return y.useMemo(()=>Po(e,JSON.parse(o),l,r==="path"),[e,o,l,r])}function qp(e,t){return Qp(e,t)}function Qp(e,t,r,n){Ir()||G(!1);let{navigator:a}=y.useContext(mt),{matches:l}=y.useContext(pt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=tr(),h;if(t){var m;let C=typeof t=="string"?Tr(t):t;c==="/"||(m=C.pathname)!=null&&m.startsWith(c)||G(!1),h=C}else h=u;let g=h.pathname||"/",v=g;if(c!=="/"){let C=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=jp(e,{pathname:v}),k=Zp(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Lt([c,a.encodeLocation?a.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:Lt([c,a.encodeLocation?a.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),l,r,n);return t&&k?y.createElement(Zi.Provider,{value:{location:Nn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:kt.Pop}},k):k}function Kp(){let e=rh(),t=Up(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:a},r):null,null)}const Yp=y.createElement(Kp,null);class Gp extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement(pt.Provider,{value:this.props.routeContext},y.createElement(xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xp(e){let{routeContext:t,match:r,children:n}=e,a=y.useContext(Xi);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(pt.Provider,{value:t},n)}function Zp(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=(a=r)==null?void 0:a.errors;if(s!=null){let h=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);h>=0||G(!1),o=o.slice(0,Math.min(o.length,h+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:g,errors:v}=r,w=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,m,g)=>{let v,w=!1,k=null,C=null;r&&(v=s&&m.route.id?s[m.route.id]:void 0,k=m.route.errorElement||Yp,c&&(u<0&&g===0?(ih("route-fallback"),w=!0,C=null):u===g&&(w=!0,C=m.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return v?p=k:w?p=C:m.route.Component?p=y.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,y.createElement(Xp,{match:m,routeContext:{outlet:h,matches:f,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?y.createElement(Gp,{location:r.location,revalidation:r.revalidation,component:k,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var kd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kd||{}),bd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bd||{});function Jp(e){let t=y.useContext(Xi);return t||G(!1),t}function eh(e){let t=y.useContext(yd);return t||G(!1),t}function th(e){let t=y.useContext(pt);return t||G(!1),t}function Nd(e){let t=th(),r=t.matches[t.matches.length-1];return r.route.id||G(!1),r.route.id}function rh(){var e;let t=y.useContext(xd),r=eh(),n=Nd();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function nh(){let{router:e}=Jp(kd.UseNavigateStable),t=Nd(bd.UseNavigateStable),r=y.useRef(!1);return wd(()=>{r.current=!0}),y.useCallback(function(a,l){l===void 0&&(l={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Nn({fromRouteId:t},l)))},[e,t])}const Qs={};function ih(e,t,r){Qs[e]||(Qs[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hr(e){let{to:t,replace:r,state:n,relative:a}=e;Ir()||G(!1);let{future:l,static:o}=y.useContext(mt),{matches:s}=y.useContext(pt),{pathname:c}=tr(),u=Ft(),h=Po(t,zo(s,l.v7_relativeSplatPath),c,a==="path"),m=JSON.stringify(h);return y.useEffect(()=>u(JSON.parse(m),{replace:r,state:n,relative:a}),[u,m,a,r,n]),null}function Re(e){G(!1)}function lh(e){let{basename:t="/",children:r=null,location:n,navigationType:a=kt.Pop,navigator:l,static:o=!1,future:s}=e;Ir()&&G(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:l,static:o,future:Nn({v7_relativeSplatPath:!1},s)}),[c,s,l,o]);typeof n=="string"&&(n=Tr(n));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:w="default"}=n,k=y.useMemo(()=>{let C=_r(h,c);return C==null?null:{location:{pathname:C,search:m,hash:g,state:v,key:w},navigationType:a}},[c,h,m,g,v,w,a]);return k==null?null:y.createElement(mt.Provider,{value:u},y.createElement(Zi.Provider,{children:r,value:k}))}function oh(e){let{children:t,location:r}=e;return qp(Cl(t),r)}new Promise(()=>{});function Cl(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,a)=>{if(!y.isValidElement(n))return;let l=[...t,a];if(n.type===y.Fragment){r.push.apply(r,Cl(n.props.children,l));return}n.type!==Re&&G(!1),!n.props.index||!n.props.children||G(!1);let o={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Cl(n.props.children,l)),r.push(o)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mi.apply(null,arguments)}function Sd(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function sh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ch(e,t){return e.button===0&&(!t||t==="_self")&&!sh(e)}function zl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function uh(e,t){let r=zl(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(l=>{r.append(a,l)})}),r}const dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],mh="6";try{window.__reactRouterVersion=mh}catch{}const ph=y.createContext({isTransitioning:!1}),hh="startTransition",Ks=lf[hh];function gh(e){let{basename:t,children:r,future:n,window:a}=e,l=y.useRef();l.current==null&&(l.current=yp({window:a,v5Compat:!0}));let o=l.current,[s,c]=y.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},h=y.useCallback(m=>{u&&Ks?Ks(()=>c(m)):c(m)},[c,u]);return y.useLayoutEffect(()=>o.listen(h),[o,h]),y.useEffect(()=>ah(n),[n]),y.createElement(lh,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}const vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D=y.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:l,replace:o,state:s,target:c,to:u,preventScrollReset:h,viewTransition:m}=t,g=Sd(t,dh),{basename:v}=y.useContext(mt),w,k=!1;if(typeof u=="string"&&yh.test(u)&&(w=u,vh))try{let p=new URL(window.location.href),j=u.startsWith("//")?new URL(p.protocol+u):new URL(u),x=_r(j.pathname,v);j.origin===p.origin&&x!=null?u=x+j.search+j.hash:k=!0}catch{}let C=Vp(u,{relative:a}),f=wh(u,{replace:o,state:s,target:c,preventScrollReset:h,relative:a,viewTransition:m});function d(p){n&&n(p),p.defaultPrevented||f(p)}return y.createElement("a",Mi({},g,{href:w||C,onClick:k||l?n:d,ref:r,target:c}))}),Ea=y.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:a=!1,className:l="",end:o=!1,style:s,to:c,viewTransition:u,children:h}=t,m=Sd(t,fh),g=Ji(c,{relative:m.relative}),v=tr(),w=y.useContext(yd),{navigator:k,basename:C}=y.useContext(mt),f=w!=null&&jh(g)&&u===!0,d=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,p=v.pathname,j=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(p=p.toLowerCase(),j=j?j.toLowerCase():null,d=d.toLowerCase()),j&&C&&(j=_r(j,C)||j);const x=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=p===d||!o&&p.startsWith(d)&&p.charAt(x)==="/",z=j!=null&&(j===d||!o&&j.startsWith(d)&&j.charAt(d.length)==="/"),_={isActive:N,isPending:z,isTransitioning:f},I=N?n:void 0,P;typeof l=="function"?P=l(_):P=[l,N?"active":null,z?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let $=typeof s=="function"?s(_):s;return y.createElement(D,Mi({},m,{"aria-current":I,className:P,ref:r,style:$,to:c,viewTransition:u}),typeof h=="function"?h(_):h)});var Pl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pl||(Pl={}));var Ys;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ys||(Ys={}));function xh(e){let t=y.useContext(Xi);return t||G(!1),t}function wh(e,t){let{target:r,replace:n,state:a,preventScrollReset:l,relative:o,viewTransition:s}=t===void 0?{}:t,c=Ft(),u=tr(),h=Ji(e,{relative:o});return y.useCallback(m=>{if(ch(m,r)){m.preventDefault();let g=n!==void 0?n:Li(u)===Li(h);c(e,{replace:g,state:a,preventScrollReset:l,relative:o,viewTransition:s})}},[u,c,h,n,a,r,e,l,o,s])}function Cd(e){let t=y.useRef(zl(e)),r=y.useRef(!1),n=tr(),a=y.useMemo(()=>uh(n.search,r.current?null:t.current),[n.search]),l=Ft(),o=y.useCallback((s,c)=>{const u=zl(typeof s=="function"?s(a):s);r.current=!0,l("?"+u,c)},[l,a]);return[a,o]}function jh(e,t){t===void 0&&(t={});let r=y.useContext(ph);r==null&&G(!1);let{basename:n}=xh(Pl.useViewTransitionState),a=Ji(e,{relative:t.relative});if(!r.isTransitioning)return!1;let l=_r(r.currentLocation.pathname,n)||r.currentLocation.pathname,o=_r(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Sl(a.pathname,o)!=null||Sl(a.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),R=(e,t)=>{const r=y.forwardRef(({color:n="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:s="",children:c,...u},h)=>y.createElement("svg",{ref:h,...kh,width:a,height:a,stroke:n,strokeWidth:o?Number(l)*24/Number(a):l,className:["lucide",`lucide-${bh(e)}`,s].join(" "),...u},[...t.map(([m,g])=>y.createElement(m,g)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=R("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=R("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=R("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=R("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=R("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=R("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=R("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=R("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=R("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=R("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=R("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=R("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=R("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=R("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=R("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=R("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=R("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=R("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=R("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=R("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=R("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=R("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=R("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=R("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=R("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=R("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=R("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=R("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Hh({user:e,logout:t,cartCount:r,wishlistCount:n}){const[a,l]=y.useState(!1);Ft();const o=()=>{l(!1)};return i.jsxs("header",{className:"navbar-wrapper",children:[i.jsxs("nav",{className:"navbar-container",children:[i.jsxs(D,{to:"/",className:"brand-logo",onClick:o,children:[i.jsx("div",{className:"logo-icon",children:i.jsx(Lh,{size:24,color:"#ffffff",strokeWidth:2.5})}),i.jsxs("span",{className:"brand-text",children:["Build",i.jsx("span",{children:"Mart"})]})]}),i.jsxs("ul",{className:"nav-links",children:[i.jsx("li",{children:i.jsx(Ea,{to:"/",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"Home"})}),i.jsx("li",{children:i.jsx(Ea,{to:"/catalog",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"Products"})}),i.jsx("li",{children:i.jsx(Ea,{to:"/contact",className:({isActive:s})=>s?"nav-link active":"nav-link",children:"Contact Us"})})]}),i.jsxs("div",{className:"navbar-actions",children:[e&&e.role==="admin"&&i.jsxs(D,{to:"/admin",className:"action-btn admin-badge",title:"Admin Panel",children:[i.jsx(Ed,{size:20}),i.jsx("span",{className:"btn-label",children:"Dashboard"})]}),i.jsxs(D,{to:"/profile",className:"action-btn",title:"Wishlist",children:[i.jsx(Sn,{size:20}),n>0&&i.jsx("span",{className:"action-badge bg-primary",children:n})]}),i.jsxs(D,{to:"/cart",className:"action-btn",title:"Shopping Cart",children:[i.jsx(ta,{size:20}),r>0&&i.jsx("span",{className:"action-badge bg-secondary",children:r})]}),e?i.jsxs("div",{className:"user-dropdown-trigger",children:[i.jsxs(D,{to:"/profile",className:"action-btn profile-trigger",children:[i.jsx(Lo,{size:20}),i.jsx("span",{className:"username-display",children:e.name.split(" ")[0]})]}),i.jsx("button",{onClick:t,className:"logout-btn",title:"Log Out",children:i.jsx(_d,{size:18})})]}):i.jsx(D,{to:"/login",className:"login-link-btn",children:"Sign In"}),i.jsx("button",{className:"mobile-toggle",onClick:()=>l(!a),children:a?i.jsx(Vh,{size:24}):i.jsx(Ih,{size:24})})]})]}),a&&i.jsx("div",{className:"mobile-drawer animate-fade",children:i.jsxs("ul",{className:"drawer-links",children:[i.jsx("li",{children:i.jsx(D,{to:"/",onClick:o,children:"Home"})}),i.jsx("li",{children:i.jsx(D,{to:"/catalog",onClick:o,children:"Browse Products"})}),i.jsx("li",{children:i.jsx(D,{to:"/contact",onClick:o,children:"Contact Us"})}),e&&e.role==="admin"&&i.jsx("li",{children:i.jsx(D,{to:"/admin",onClick:o,children:"Admin Dashboard"})}),i.jsx("li",{children:i.jsx(D,{to:"/profile",onClick:o,children:"My Account"})}),!e&&i.jsx("li",{children:i.jsx(D,{to:"/login",onClick:o,children:"Sign In"})})]})}),i.jsx("style",{children:`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(26, 54, 93, 0.95); /* Deep industrial navy with blur */
          backdrop-filter: blur(8px);
          color: var(--bg-white);
          z-index: 1000;
          border-bottom: 2px solid var(--primary);
          box-shadow: var(--shadow-md);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: var(--max-width);
          margin: 0 auto;
          padding: 1rem 1.5rem;
          height: 70px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .logo-icon {
          background: var(--primary);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-text span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          transition: var(--transition-fast);
          position: relative;
          padding: 0.25rem 0;
        }
        .nav-link:hover {
          color: var(--bg-white);
        }
        .nav-link.active {
          color: var(--primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          transition: var(--transition-fast);
        }
        .action-btn:hover {
          color: var(--primary);
        }
        .action-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          font-size: 0.65rem;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--bg-white);
        }
        .action-badge.bg-primary { background-color: var(--primary); }
        .action-badge.bg-secondary { background-color: var(--accent); }
        .admin-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          gap: 0.4rem;
        }
        .admin-badge:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--bg-white);
        }
        .user-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .profile-trigger {
          gap: 0.4rem;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .username-display {
          max-width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .logout-btn {
          color: rgba(255, 255, 255, 0.6);
          margin-left: 0.25rem;
        }
        .logout-btn:hover {
          color: var(--danger);
        }
        .login-link-btn {
          background: var(--primary);
          color: var(--bg-white);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .login-link-btn:hover {
          background: var(--primary-hover);
        }
        .mobile-toggle {
          display: none;
          color: var(--bg-white);
        }
        .mobile-drawer {
          display: none;
          background: var(--secondary-hover);
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .drawer-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 1rem 0;
        }
        .drawer-links a {
          display: block;
          padding: 0.75rem 1.5rem;
          font-size: 1.05rem;
          border-left: 3px solid transparent;
        }
        .drawer-links a:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--primary);
        }
        @media (max-width: 768px) {
          .nav-links, .username-display {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `})]})}function qh(){return i.jsxs("footer",{className:"footer-wrapper",children:[i.jsxs("div",{className:"footer-container",children:[i.jsxs("div",{className:"footer-section",children:[i.jsxs("h3",{children:["Build",i.jsx("span",{children:"Mart"})]}),i.jsx("p",{className:"about-text",children:"Your premium partner in construction and home-building supplies. We provide top-grade steel, cement, pipes, tools, and paint for contractors and homeowners alike."}),i.jsxs("div",{className:"certified-badge",children:[i.jsx(ea,{size:18,color:"var(--primary)"}),i.jsx("span",{children:"ISO 9001:2015 Certified Materials"})]})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h4",{children:"Material Categories"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(D,{to:"/catalog?category=1",children:"Cement & Concrete"})}),i.jsx("li",{children:i.jsx(D,{to:"/catalog?category=2",children:"Clay & Bricks"})}),i.jsx("li",{children:i.jsx(D,{to:"/catalog?category=3",children:"Steel & Reinforcement"})}),i.jsx("li",{children:i.jsx(D,{to:"/catalog?category=4",children:"Paints & Coats"})}),i.jsx("li",{children:i.jsx(D,{to:"/catalog?category=7",children:"Electrical & Power Tools"})})]})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h4",{children:"Quick Links"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(D,{to:"/catalog",children:"Browse Catalog"})}),i.jsx("li",{children:i.jsx(D,{to:"/contact",children:"Contact Support"})}),i.jsx("li",{children:i.jsx(D,{to:"/login",children:"Account Access"})}),i.jsx("li",{children:i.jsx(D,{to:"/profile",children:"My Order History"})})]})]}),i.jsxs("div",{className:"footer-section",children:[i.jsx("h4",{children:"Store Operations"}),i.jsxs("ul",{className:"contact-details",children:[i.jsxs("li",{children:[i.jsx(Ld,{size:18,className:"contact-icon"}),i.jsx("span",{children:"123 Industrial Way, Builders Zone, Bangalore, KA, India"})]}),i.jsxs("li",{children:[i.jsx(Md,{size:18,className:"contact-icon"}),i.jsx("span",{children:"+91 98765 43210"})]}),i.jsxs("li",{children:[i.jsx(_o,{size:18,className:"contact-icon"}),i.jsx("span",{children:"support@buildmart.com"})]}),i.jsxs("li",{children:[i.jsx(Eo,{size:18,className:"contact-icon"}),i.jsxs("span",{children:["Mon - Sat: 8:00 AM - 8:00 PM",i.jsx("br",{}),"Sun: 9:00 AM - 2:00 PM"]})]})]})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsxs("p",{children:["© ",new Date().getFullYear()," BuildMart Store. All Rights Reserved. Engineered for Quality."]})}),i.jsx("style",{children:`
        .footer-wrapper {
          background: #101e31; /* Even darker blue for contrast */
          color: #a0aec0;
          border-top: 4px solid var(--primary);
          padding: 4rem 1.5rem 1.5rem 1.5rem;
          font-size: 0.9rem;
        }
        .footer-container {
          max-width: var(--max-width);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .footer-section h3 {
          font-size: 1.6rem;
          color: var(--bg-white);
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .footer-section h3 span {
          color: var(--primary);
        }
        .footer-section h4 {
          font-size: 1.1rem;
          color: var(--bg-white);
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-section h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 2px;
          background: var(--primary);
        }
        .about-text {
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .certified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.05);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--bg-white);
          border: 1px dashed rgba(255,255,255,0.15);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          transition: var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .contact-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .contact-details li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .contact-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-bottom {
          max-width: var(--max-width);
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
        }
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 500px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function _l({product:e,addToCart:t,toggleWishlist:r,wishlist:n}){const a=n.some(u=>u.product_id===e.id),l=e.stock>0&&e.stock<=e.min_stock_level,o=e.stock===0,s=u=>{const h=[],m=Math.floor(u),g=u%1>=.4;for(let v=1;v<=5;v++)v<=m?h.push(i.jsx(Z,{size:14,className:"star-icon fill-star"},v)):v===m+1&&g?h.push(i.jsx(Z,{size:14,className:"star-icon half-star"},v)):h.push(i.jsx(Z,{size:14,className:"star-icon empty-star"},v));return h},c=u=>u&&u!=="default_product.jpg"&&!u.endsWith("/default_product.jpg")?u:`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="220" viewBox="0 0 300 220" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="300" height="220" fill="%231a365d" opacity="0.05"/>
      <circle cx="150" cy="95" r="45" fill="%23f56a00" opacity="0.1"/>
      <path d="M150 75 L170 110 L130 110 Z" fill="%23f56a00" stroke="%23f56a00" stroke-width="3"/>
      <rect x="140" y="110" width="20" height="20" fill="%23f56a00"/>
      <text x="50%" y="175" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold" fill="%23102a43">${encodeURIComponent(e.name)}</text>
      <text x="50%" y="195" dominant-baseline="middle" text-anchor="middle" font-size="11" fill="%23627d98">${encodeURIComponent(e.unit||"pcs")}</text>
    </svg>`;return i.jsxs("div",{className:"product-card animate-scale",children:[i.jsx("button",{className:`wishlist-toggle-btn ${a?"wishlisted":""}`,onClick:u=>{u.preventDefault(),r(e.id)},title:a?"Remove from Wishlist":"Add to Wishlist",children:i.jsx(Sn,{size:16,fill:a?"var(--danger)":"none",stroke:a?"var(--danger)":"currentColor"})}),i.jsxs(D,{to:`/product/${e.id}`,className:"card-link",children:[i.jsxs("div",{className:"product-img-wrapper",children:[i.jsx("img",{src:c(e.image_url),alt:e.name,loading:"lazy"}),i.jsxs("div",{className:"badge-container",children:[o&&i.jsx("span",{className:"badge badge-danger",children:"Out of stock"}),l&&!o&&i.jsx("span",{className:"badge badge-warning",children:"Low stock"}),e.is_featured===1&&i.jsx("span",{className:"badge badge-primary",children:"Featured"})]})]}),i.jsxs("div",{className:"product-meta",children:[i.jsx("span",{className:"product-category-tag",children:e.category_name}),i.jsx("h3",{className:"product-title",children:e.name}),i.jsxs("div",{className:"product-rating-box",children:[i.jsx("div",{className:"stars-wrapper",children:s(e.rating||0)}),i.jsxs("span",{className:"rating-text",children:["(",e.rating_count||0,")"]})]}),i.jsxs("div",{className:"card-bottom",children:[i.jsxs("div",{className:"price-tag",children:[i.jsx("span",{className:"currency",children:"INR"}),i.jsx("span",{className:"price-value",children:parseFloat(e.price).toFixed(2)}),i.jsxs("span",{className:"price-unit",children:["/",e.unit]})]}),i.jsx("button",{className:"quick-add-cart-btn",disabled:o,onClick:u=>{u.preventDefault(),t(e,1)},title:o?"Out of Stock":"Quick Add to Cart",children:i.jsx(ta,{size:16})})]})]})]}),i.jsx("style",{children:`
        .product-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-flat);
          transition: all var(--transition-normal);
          position: relative;
          border: 1px solid var(--border-color);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(245, 106, 0, 0.4);
        }
        .wishlist-toggle-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--bg-white);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          color: var(--gray);
          z-index: 10;
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }
        .wishlist-toggle-btn:hover {
          color: var(--danger);
          transform: scale(1.1);
        }
        .wishlist-toggle-btn.wishlisted {
          color: var(--danger);
          border-color: rgba(239, 68, 68, 0.2);
          background: #fef2f2;
        }
        .card-link {
          display: block;
        }
        .product-img-wrapper {
          height: 180px;
          overflow: hidden;
          position: relative;
          background: #f1f5f9;
        }
        .product-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }
        .product-card:hover .product-img-wrapper img {
          transform: scale(1.05);
        }
        .badge-container {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .product-meta {
          padding: 1.25rem;
        }
        .product-category-tag {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.35rem;
        }
        .product-title {
          font-size: 1rem;
          color: var(--dark);
          font-weight: 600;
          margin-bottom: 0.5rem;
          height: 2.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.25;
        }
        .product-rating-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .stars-wrapper {
          display: flex;
          color: var(--warning);
        }
        .star-icon.fill-star { fill: currentColor; }
        .star-icon.half-star { fill: currentColor; opacity: 0.7; }
        .star-icon.empty-star { color: #cbd5e1; }
        .rating-text {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
          margin-top: 0.5rem;
        }
        .price-tag {
          display: flex;
          align-items: baseline;
        }
        .currency {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--gray);
          margin-right: 2px;
        }
        .price-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--dark);
        }
        .price-unit {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .quick-add-cart-btn {
          background: var(--secondary);
          color: var(--bg-white);
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }
        .quick-add-cart-btn:hover:not(:disabled) {
          background: var(--primary);
          transform: scale(1.05);
        }
        .quick-add-cart-btn:disabled {
          background: var(--light-gray);
          cursor: not-allowed;
        }
      `})]})}function Qh({addToCart:e,toggleWishlist:t,wishlist:r}){const[n,a]=y.useState([]),[l,o]=y.useState([]),[s,c]=y.useState([]),[u,h]=y.useState(""),[m,g]=y.useState({}),v=Ft();y.useEffect(()=>{fetch("/api/products").then(f=>f.json()).then(f=>{const d=f.products||[];a(d.filter(p=>p.is_featured===1).slice(0,4)),o(d.filter(p=>p.is_bestseller===1).slice(0,4))}).catch(f=>console.error("Error loading products",f)),fetch("/api/categories").then(f=>f.json()).then(f=>{c((f.categories||[]).slice(0,6))}).catch(f=>console.error("Error loading categories",f))},[]);const w=f=>{f.preventDefault(),u.trim()?v(`/catalog?search=${encodeURIComponent(u)}`):v("/catalog")},k=f=>{g(d=>({...d,[f]:!d[f]}))},C=f=>{switch(f.toLowerCase()){case"cement":return"🧱";case"bricks":return"🧱";case"steel & iron":return"🔗";case"paints":return"🎨";case"plumbing materials":return"🚰";case"electrical supplies":return"🔌";case"power tools":return"🔌";case"hand tools":return"🔧";case"safety equipment":return"🦺";default:return"🛠️"}};return i.jsxs("div",{className:"home-page animate-fade",children:[i.jsxs("section",{className:"hero-section",children:[i.jsx("div",{className:"hero-overlay"}),i.jsxs("div",{className:"hero-content",children:[i.jsx("span",{className:"hero-badge",children:"🧱 PREMIUM CONSTRUCTION MATERIALS"}),i.jsx("h1",{children:"Build Stronger, Build Smarter with BuildMart"}),i.jsx("p",{children:"Get top-quality cement, reinforcement steel, tools, paints, and safety equipment delivered directly to your construction site. Wholesale pricing and unmatched durability."}),i.jsxs("form",{className:"hero-search-form",onSubmit:w,children:[i.jsx("input",{type:"text",placeholder:"Search for cement, bricks, power tools, steel rods...",value:u,onChange:f=>h(f.target.value)}),i.jsxs("button",{type:"submit",className:"hero-search-btn",children:[i.jsx(Td,{size:18}),i.jsx("span",{children:"Search"})]})]}),i.jsxs("div",{className:"hero-cta-buttons",children:[i.jsx(D,{to:"/catalog",className:"btn btn-primary",children:"Browse Catalog"}),i.jsx(D,{to:"/contact",className:"btn btn-outline",style:{color:"var(--bg-white)",borderColor:"var(--bg-white)"},children:"Contact Support"})]})]})]}),i.jsx("section",{className:"usp-section",children:i.jsxs("div",{className:"usp-grid",children:[i.jsxs("div",{className:"usp-card",children:[i.jsx($h,{size:32,className:"usp-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"A-Grade Certification"}),i.jsx("p",{children:"All materials comply with ISO standards"})]})]}),i.jsxs("div",{className:"usp-card",children:[i.jsx(Ti,{size:32,className:"usp-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Site Delivery"}),i.jsx("p",{children:"Reliable shipping directly to your site"})]})]}),i.jsxs("div",{className:"usp-card",children:[i.jsx(Uh,{size:32,className:"usp-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Best Price Guarantee"}),i.jsx("p",{children:"Bulk rates for developers and builders"})]})]})]})}),i.jsxs("section",{className:"home-categories-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Shop by Category"}),i.jsx("p",{className:"section-subtitle",children:"Find standard materials for columns, walls, wiring, plumbing, and finishing"})]}),i.jsx("div",{className:"categories-grid grid-cols-3",children:s.map(f=>i.jsxs(D,{to:`/catalog?category=${f.id}`,className:"cat-card",children:[i.jsx("span",{className:"cat-icon",children:C(f.name)}),i.jsxs("div",{children:[i.jsx("h4",{children:f.name}),i.jsx("p",{children:f.description||"Browse professional equipment"})]})]},f.id))})]}),i.jsxs("section",{className:"products-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Featured Products"}),i.jsx("p",{className:"section-subtitle",children:"Specially curated high-strength components and tools in demand today"})]}),i.jsx("div",{className:"products-grid grid-cols-4",children:n.map(f=>i.jsx(_l,{product:f,addToCart:e,toggleWishlist:t,wishlist:r},f.id))})]}),i.jsx("section",{className:"products-section alternate-bg",children:i.jsxs("div",{className:"products-container",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Top Sellers"}),i.jsx("p",{className:"section-subtitle",children:"Tested, verified, and heavily stocked materials used by major developers"})]}),i.jsx("div",{className:"products-grid grid-cols-4",children:l.map(f=>i.jsx(_l,{product:f,addToCart:e,toggleWishlist:t,wishlist:r},f.id))})]})}),i.jsxs("section",{className:"testimonials-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"Contractor Reviews"}),i.jsx("p",{className:"section-subtitle",children:"What engineers and developers say about buying from BuildMart"})]}),i.jsxs("div",{className:"testimonials-grid grid-cols-3",children:[i.jsxs("div",{className:"testimonial-card",children:[i.jsxs("div",{className:"stars",children:[i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"})]}),i.jsx("p",{children:'"BuildMart has saved us tons of time. We get steel rods and cement delivered straight to our site in hours. Great pricing and responsive support."'}),i.jsxs("div",{className:"testimonial-author",children:[i.jsx("div",{className:"author-init",children:"A"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Arun R."}),i.jsx("span",{children:"Site Engineer, SV Builders"})]})]})]}),i.jsxs("div",{className:"testimonial-card",children:[i.jsxs("div",{className:"stars",children:[i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"})]}),i.jsx("p",{children:'"Outstanding customer care! One of our order items was short in stock, they instantly upgraded us to a higher tier wire without charging extra. Recommended!"'}),i.jsxs("div",{className:"testimonial-author",children:[i.jsx("div",{className:"author-init",children:"M"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Megha K."}),i.jsx("span",{children:"Interior Designer, DecorLab"})]})]})]}),i.jsxs("div",{className:"testimonial-card",children:[i.jsxs("div",{className:"stars",children:[i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"}),i.jsx(Z,{size:16,fill:"currentColor"})]}),i.jsx("p",{children:'"The admin panel invoices make expense reports very convenient. Orders are fast, stock counts are exact, and they carry all major power tool brands."'}),i.jsxs("div",{className:"testimonial-author",children:[i.jsx("div",{className:"author-init",children:"V"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Vikram S."}),i.jsx("span",{children:"Independent Contractor"})]})]})]})]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h2",{className:"section-title",children:"FAQs"}),i.jsx("p",{className:"section-subtitle",children:"Common questions about order placements, wholesale rates, and delivery"})]}),i.jsx("div",{className:"faq-accordion-list",children:[{q:"Do you deliver to construction sites directly?",a:"Yes! We specialize in direct-to-site shipping. When placing your order, specify the correct gate location, site plot number, and a contact phone number for our delivery truck drivers."},{q:"Can I receive wholesale pricing on large bulk orders?",a:"Absolutely. We offer competitive rates for bulk quantities of cement bags, bricks, and steel rods. Contact our customer sales desk via our Contact Page to receive a custom bulk quote."},{q:"Are the steel bars and cement bags ISO certified?",a:"Yes. All reinforcement steel (TMT Bars) and cement grades we supply carry official manufacturer certification and comply fully with national building code structural regulations."},{q:"How do I track the progress of my delivery truck?",a:"Once your order is processed, check your 'Profile' page or use the specific tracking URL sent to you. You can see whether the order is Pending, Packaging, In Transit, or Delivered in real-time."}].map((f,d)=>i.jsxs("div",{className:`faq-item ${m[d]?"open":""}`,children:[i.jsxs("button",{className:"faq-trigger",onClick:()=>k(d),children:[i.jsx("span",{children:f.q}),i.jsx(zh,{size:18,className:"faq-arrow"})]}),m[d]&&i.jsx("div",{className:"faq-content",children:i.jsx("p",{children:f.a})})]},d))})]}),i.jsx("style",{children:`
        .home-page {
          width: 100%;
        }
        .hero-section {
          position: relative;
          background-image: url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop'); /* Structural building grid */
          background-size: cover;
          background-position: center;
          color: var(--bg-white);
          padding: 6rem 3rem;
          border-radius: var(--radius-lg);
          margin-bottom: 2rem;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(26, 54, 93, 0.95), rgba(15, 23, 42, 0.75));
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 750px;
        }
        .hero-badge {
          background: var(--primary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .hero-content h1 {
          color: var(--bg-white);
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          font-weight: 800;
        }
        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.5;
        }
        .hero-search-form {
          display: flex;
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          padding: 0.25rem;
          margin-bottom: 2rem;
          border: 2px solid transparent;
        }
        .hero-search-form:focus-within {
          border-color: var(--primary);
        }
        .hero-search-form input {
          flex: 1;
          border: none;
          padding: 0.75rem 1.25rem;
          outline: none;
          color: var(--dark-gray);
        }
        .hero-search-btn {
          background: var(--primary);
          color: var(--bg-white);
          border: none;
          padding: 0 1.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        .hero-search-btn:hover {
          background: var(--primary-hover);
        }
        .hero-cta-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .usp-section {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 3.5rem;
          border: 1px solid var(--border-color);
        }
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .usp-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .usp-icon {
          color: var(--primary);
        }
        .usp-card h5 {
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .usp-card p {
          font-size: 0.85rem;
          color: var(--gray);
        }

        .home-categories-section {
          margin-bottom: 4rem;
        }
        .cat-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: all var(--transition-normal);
        }
        .cat-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .cat-icon {
          font-size: 2.25rem;
          background: var(--secondary-light);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
        }
        .cat-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .cat-card p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .products-section {
          margin-bottom: 4rem;
        }
        .products-section.alternate-bg {
          background: var(--secondary-light);
          padding: 4rem 2rem;
          border-radius: var(--radius-lg);
          margin-left: -2rem;
          margin-right: -2rem;
        }
        .products-container {
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .testimonials-section {
          margin-bottom: 4rem;
        }
        .testimonial-card {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .testimonial-card .stars {
          color: var(--warning);
          display: flex;
          gap: 2px;
        }
        .testimonial-card p {
          font-style: italic;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: auto;
        }
        .author-init {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--secondary);
          color: var(--bg-white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .testimonial-author h5 {
          font-size: 0.95rem;
        }
        .testimonial-author span {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .faq-section {
          margin-bottom: 2rem;
        }
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          background: var(--bg-white);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item.open {
          border-color: var(--primary);
        }
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem;
          font-weight: 600;
          color: var(--dark);
          text-align: left;
        }
        .faq-arrow {
          transition: transform var(--transition-normal);
          color: var(--gray);
        }
        .faq-item.open .faq-arrow {
          transform: rotate(180deg);
          color: var(--primary);
        }
        .faq-content {
          padding: 0 1.25rem 1.25rem 1.25rem;
          font-size: 0.95rem;
          color: var(--dark-gray);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem;
          }
          .hero-content h1 {
            font-size: 2.25rem;
          }
          .hero-search-form {
            flex-direction: column;
            background: transparent;
            padding: 0;
            gap: 0.5rem;
          }
          .hero-search-form input {
            background: var(--bg-white);
            border-radius: var(--radius-md);
          }
          .hero-search-btn {
            padding: 0.75rem;
            justify-content: center;
            border-radius: var(--radius-md);
          }
          .usp-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .products-section.alternate-bg {
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            padding: 2rem 1rem;
          }
        }
      `})]})}function Kh({addToCart:e,toggleWishlist:t,wishlist:r}){const[n,a]=Cd(),[l,o]=y.useState([]),[s,c]=y.useState([]),[u,h]=y.useState(!0),m=n.get("search")||"",g=n.get("category")||"",v=n.get("sort")||"",w=n.get("minPrice")||"",k=n.get("maxPrice")||"",[C,f]=y.useState(m),[d,p]=y.useState(w),[j,x]=y.useState(k);y.useEffect(()=>{f(m),p(w),x(k)},[m,g,v,w,k]),y.useEffect(()=>{fetch("/api/categories").then(P=>P.json()).then(P=>c(P.categories||[])).catch(P=>console.error("Error loading categories",P))},[]),y.useEffect(()=>{h(!0);let P="/api/products?";const $=[];m&&$.push(`search=${encodeURIComponent(m)}`),g&&$.push(`category=${g}`),v&&$.push(`sort=${v}`),P+=$.join("&"),fetch(P).then(ee=>ee.json()).then(ee=>{let M=ee.products||[];w&&(M=M.filter(se=>se.price>=parseFloat(w))),k&&(M=M.filter(se=>se.price<=parseFloat(k))),o(M),h(!1)}).catch(ee=>{console.error("Error loading products",ee),h(!1)})},[m,g,v,w,k]);const N=(P,$)=>{const ee=new URLSearchParams(n);$?ee.set(P,$):ee.delete(P),a(ee)},z=P=>{P.preventDefault(),N("search",C)},_=P=>{P.preventDefault();const $=new URLSearchParams(n);d?$.set("minPrice",d):$.delete("minPrice"),j?$.set("maxPrice",j):$.delete("maxPrice"),a($)},I=()=>{f(""),p(""),x(""),a(new URLSearchParams)};return i.jsxs("div",{className:"catalog-page animate-fade",children:[i.jsxs("div",{className:"catalog-header",children:[i.jsxs("div",{children:[i.jsx("h1",{children:"Product Catalog"}),i.jsx("p",{className:"results-count",children:u?"Searching...":`Found ${l.length} materials in stock`})]}),i.jsxs("div",{className:"catalog-sort-wrapper",children:[i.jsx("label",{htmlFor:"sort-select",children:"Sort By:"}),i.jsxs("select",{id:"sort-select",value:v,onChange:P=>N("sort",P.target.value),children:[i.jsx("option",{value:"",children:"Latest Arrival"}),i.jsx("option",{value:"price_asc",children:"Price: Low to High"}),i.jsx("option",{value:"price_desc",children:"Price: High to Low"}),i.jsx("option",{value:"rating",children:"Customer Rating"})]})]})]}),i.jsxs("div",{className:"catalog-layout",children:[i.jsxs("aside",{className:"filters-sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx(Bh,{size:18}),i.jsx("h3",{children:"Filter Materials"}),(m||g||v||w||k)&&i.jsx("button",{className:"reset-btn",onClick:I,title:"Reset all filters",children:i.jsx(Ah,{size:14})})]}),i.jsxs("form",{className:"sidebar-search",onSubmit:z,children:[i.jsx("input",{type:"text",placeholder:"Search store...",value:C,onChange:P=>f(P.target.value)}),i.jsx("button",{type:"submit",children:i.jsx(Td,{size:16})})]}),i.jsxs("div",{className:"filter-group",children:[i.jsx("h4",{children:"Material Categories"}),i.jsxs("div",{className:"category-links-list",children:[i.jsx("button",{className:`category-filter-btn ${g?"":"active"}`,onClick:()=>N("category",""),children:"All Categories"}),s.map(P=>i.jsx("button",{className:`category-filter-btn ${g===P.id.toString()?"active":""}`,onClick:()=>N("category",P.id.toString()),children:P.name},P.id))]})]}),i.jsxs("div",{className:"filter-group",children:[i.jsx("h4",{children:"Price Limits (INR)"}),i.jsxs("form",{className:"price-range-form",onSubmit:_,children:[i.jsxs("div",{className:"price-inputs",children:[i.jsx("input",{type:"number",placeholder:"Min",value:d,onChange:P=>p(P.target.value),min:"0"}),i.jsx("span",{className:"price-range-separator",children:"-"}),i.jsx("input",{type:"number",placeholder:"Max",value:j,onChange:P=>x(P.target.value),min:"0"})]}),i.jsx("button",{type:"submit",className:"btn btn-outline btn-sm apply-btn",children:"Apply Price"})]})]})]}),i.jsx("main",{className:"catalog-main",children:u?i.jsx("div",{className:"spinner"}):l.length===0?i.jsxs("div",{className:"empty-catalog animate-scale",children:[i.jsx("span",{className:"empty-icon",children:"🔍"}),i.jsx("h3",{children:"No products found"}),i.jsx("p",{children:"We couldn't find matches for your selection. Try adjusting your search keywords or price filter levels."}),i.jsx("button",{className:"btn btn-primary btn-sm",onClick:I,children:"Clear Filters"})]}):i.jsx("div",{className:"products-grid grid-cols-3",children:l.map(P=>i.jsx(_l,{product:P,addToCart:e,toggleWishlist:t,wishlist:r},P.id))})})]}),i.jsx("style",{children:`
        .catalog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
        }
        .catalog-header h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        .results-count {
          color: var(--gray);
          font-size: 0.95rem;
        }
        .catalog-sort-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .catalog-sort-wrapper label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark);
        }
        .catalog-sort-wrapper select {
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border-color);
          outline: none;
          background-color: var(--bg-white);
        }
        .catalog-sort-wrapper select:focus {
          border-color: var(--primary);
        }

        .catalog-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .filters-sidebar {
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .sidebar-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .reset-btn {
          margin-left: auto;
          color: var(--gray);
        }
        .reset-btn:hover {
          color: var(--primary);
        }
        
        .sidebar-search {
          display: flex;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .sidebar-search input {
          flex: 1;
          border: none;
          padding: 0.5rem 0.75rem;
          outline: none;
          font-size: 0.85rem;
        }
        .sidebar-search button {
          padding: 0 0.75rem;
          background: var(--bg-light);
          border-left: 1px solid var(--border-color);
          color: var(--gray);
        }
        
        .filter-group {
          margin-bottom: 1.75rem;
        }
        .filter-group h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .category-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .category-filter-btn {
          width: 100%;
          text-align: left;
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          color: var(--dark-gray);
          border-left: 3px solid transparent;
        }
        .category-filter-btn:hover {
          background: var(--bg-light);
          color: var(--primary);
        }
        .category-filter-btn.active {
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 600;
          border-left-color: var(--primary);
        }

        .price-inputs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .price-inputs input {
          width: 100%;
          padding: 0.45rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border-color);
          outline: none;
          text-align: center;
          font-size: 0.85rem;
        }
        .price-inputs input:focus {
          border-color: var(--primary);
        }
        .price-range-separator {
          color: var(--gray);
        }
        .apply-btn {
          width: 100%;
          padding: 0.5rem;
          font-size: 0.8rem;
        }

        .empty-catalog {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .empty-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }
        .empty-catalog h3 {
          margin-bottom: 0.5rem;
        }
        .empty-catalog p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .catalog-layout {
            grid-template-columns: 240px 1fr;
          }
        }
        @media (max-width: 768px) {
          .catalog-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .catalog-layout {
            grid-template-columns: 1fr;
          }
          .filters-sidebar {
            position: relative;
          }
        }
      `})]})}function Yh({addToCart:e,toggleWishlist:t,wishlist:r,user:n,token:a,showToast:l}){const{id:o}=jd(),s=Ft(),[c,u]=y.useState(null),[h,m]=y.useState([]),[g,v]=y.useState(!0),[w,k]=y.useState(1),[C,f]=y.useState(5),[d,p]=y.useState(""),[j,x]=y.useState(!1),N=r.some(M=>M.product_id===parseInt(o)),z=()=>{v(!0),fetch(`/api/products/${o}`).then(M=>{if(!M.ok)throw new Error("Product not found");return M.json()}).then(M=>{u(M.product),m(M.reviews||[]),v(!1)}).catch(M=>{console.error(M),l("Error loading product details.","danger"),s("/catalog")})};if(y.useEffect(()=>{z()},[o]),g)return i.jsx("div",{className:"spinner",style:{marginTop:"10rem"}});if(!c)return i.jsx("div",{className:"text-center",children:"Product not found"});const _=c.stock>0&&c.stock<=c.min_stock_level,I=c.stock===0,P=async M=>{if(M.preventDefault(),!n){l("Please log in to submit a review.","warning");return}x(!0);try{const se=await fetch(`/api/products/${o}/reviews`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({rating:C,comment:d})}),Me=await se.json();se.ok?(l("Review submitted successfully!","success"),p(""),z()):l(Me.message||"Error submitting review.","warning")}catch{l("Connection failed.","danger")}finally{x(!1)}},$=M=>M&&M!=="default_product.jpg"&&!M.endsWith("/default_product.jpg")?M:`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="400" height="300" fill="%231a365d" opacity="0.05"/>
      <circle cx="200" cy="130" r="55" fill="%23f56a00" opacity="0.1"/>
      <path d="M200 105 L225 145 L175 145 Z" fill="%23f56a00" stroke="%23f56a00" stroke-width="4"/>
      <rect x="188" y="145" width="24" height="24" fill="%23f56a00"/>
      <text x="50%" y="225" dominant-baseline="middle" text-anchor="middle" font-size="18" font-weight="bold" fill="%23102a43">${encodeURIComponent(c.name)}</text>
    </svg>`,ee=(M,se=16)=>{const Me=[],et=Math.floor(M),tt=M%1>=.4;for(let E=1;E<=5;E++)E<=et?Me.push(i.jsx(Z,{size:se,className:"star-fill"},E)):E===et+1&&tt?Me.push(i.jsx(Z,{size:se,className:"star-half"},E)):Me.push(i.jsx(Z,{size:se,className:"star-empty"},E));return Me};return i.jsxs("div",{className:"product-detail-page animate-fade",children:[i.jsxs(D,{to:"/catalog",className:"back-link",children:[i.jsx(zd,{size:16}),i.jsx("span",{children:"Back to Catalog"})]}),i.jsxs("div",{className:"detail-layout",children:[i.jsx("div",{className:"detail-image-panel",children:i.jsx("div",{className:"detail-img-wrapper",children:i.jsx("img",{src:$(c.image_url),alt:c.name})})}),i.jsxs("div",{className:"detail-info-panel",children:[i.jsx("span",{className:"info-category",children:c.category_name}),i.jsx("h1",{className:"info-title",children:c.name}),i.jsxs("div",{className:"rating-summary-row",children:[i.jsx("div",{className:"stars",children:ee(c.rating||0,18)}),i.jsx("span",{className:"rating-score",children:c.rating||"0.0"}),i.jsxs("span",{className:"rating-count",children:["(",h.length," customer reviews)"]})]}),i.jsxs("div",{className:"info-price-row",children:[i.jsxs("span",{className:"info-price",children:["INR ",parseFloat(c.price).toFixed(2)]}),i.jsxs("span",{className:"info-unit",children:["per ",c.unit]})]}),i.jsx("p",{className:"info-description",children:c.description||"No product details provided."}),i.jsx("div",{className:"stock-status-box",children:I?i.jsxs("div",{className:"stock-alert danger",children:[i.jsx(Js,{size:18}),i.jsx("span",{children:"Out of Stock - Materials temporarily unavailable"})]}):_?i.jsxs("div",{className:"stock-alert warning",children:[i.jsx(Js,{size:18}),i.jsxs("span",{children:["Low Stock Alert - Only ",c.stock," ",c.unit,"s remaining"]})]}):i.jsx("div",{className:"stock-alert success",children:i.jsxs("span",{children:["In Stock - ",c.stock," ",c.unit,"s available for immediate site delivery"]})})}),!I&&i.jsxs("div",{className:"purchase-controls",children:[i.jsxs("div",{className:"qty-picker",children:[i.jsx("button",{onClick:()=>k(Math.max(1,w-1)),children:"-"}),i.jsx("span",{children:w}),i.jsx("button",{onClick:()=>k(Math.min(c.stock,w+1)),children:"+"})]}),i.jsxs("button",{className:"btn btn-primary",onClick:()=>e(c,w),children:[i.jsx(ta,{size:18}),i.jsx("span",{children:"Add to Cart"})]}),i.jsxs("button",{className:`btn btn-outline wishlist-btn ${N?"wishlisted":""}`,onClick:()=>t(c.id),children:[i.jsx(Sn,{size:18,fill:N?"var(--danger)":"none"}),i.jsx("span",{children:N?"Wishlisted":"Wishlist"})]})]})]})]}),i.jsxs("div",{className:"reviews-section",children:[i.jsx("h2",{children:"Customer Reviews & Feedbacks"}),i.jsxs("div",{className:"reviews-layout",children:[i.jsxs("div",{className:"write-review-panel",children:[i.jsx("h3",{children:"Write a Review"}),n?i.jsxs("form",{onSubmit:P,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Select Star Rating"}),i.jsx("div",{className:"star-rating-select",children:[1,2,3,4,5].map(M=>i.jsx("button",{type:"button",onClick:()=>f(M),className:M<=C?"selected":"",children:i.jsx(Z,{size:24,fill:M<=C?"var(--warning)":"none"})},M))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"comment-text",children:"Your Comments"}),i.jsx("textarea",{id:"comment-text",className:"form-input",rows:"4",placeholder:"Describe your experience with this material (durability, delivery condition)...",value:d,onChange:M=>p(M.target.value),required:!0})]}),i.jsxs("button",{type:"submit",className:"btn btn-secondary",disabled:j,children:[i.jsx(Id,{size:16}),i.jsx("span",{children:j?"Submitting...":"Submit Feedback"})]})]}):i.jsxs("div",{className:"login-prompt-box",children:[i.jsx("p",{children:"You must be signed in to submit product reviews."}),i.jsx(D,{to:"/login",className:"btn btn-outline btn-sm",children:"Sign In Account"})]})]}),i.jsxs("div",{className:"reviews-list-panel",children:[i.jsxs("h3",{children:["Recent Feedbacks (",h.length,")"]}),h.length===0?i.jsx("p",{className:"no-reviews",children:"No reviews submitted yet for this product. Be the first to leave a feedback!"}):i.jsx("div",{className:"reviews-list",children:h.map(M=>i.jsxs("div",{className:"review-card",children:[i.jsxs("div",{className:"review-card-header",children:[i.jsx("h5",{children:M.user_name}),i.jsx("span",{className:"review-date",children:new Date(M.created_at).toLocaleDateString()})]}),i.jsx("div",{className:"stars-wrapper",children:ee(M.rating,14)}),i.jsx("p",{className:"review-comment",children:M.comment})]},M.id))})]})]})]}),i.jsx("style",{children:`
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gray);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .back-link:hover {
          color: var(--primary);
        }

        .detail-layout {
          display: grid;
          grid-template-columns: 1.2fr 1.5fr;
          gap: 3rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 3.5rem;
        }
        .detail-image-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .detail-img-wrapper img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
        }

        .detail-info-panel {
          display: flex;
          flex-direction: column;
        }
        .info-category {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        .info-title {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.15;
        }
        .rating-summary-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .rating-summary-row .stars {
          color: var(--warning);
          display: flex;
        }
        .star-fill { fill: currentColor; }
        .star-half { fill: currentColor; opacity: 0.7; }
        .star-empty { color: #cbd5e1; }
        .rating-score {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--dark);
        }
        .rating-count {
          font-size: 0.85rem;
          color: var(--gray);
        }
        .info-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .info-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--dark);
        }
        .info-unit {
          color: var(--gray);
        }
        .info-description {
          font-size: 1rem;
          color: var(--dark-gray);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .stock-status-box {
          margin-bottom: 2rem;
        }
        .stock-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 600;
        }
        .stock-alert.success {
          background-color: #d1fae5;
          color: #065f46;
        }
        .stock-alert.warning {
          background-color: #fef3c7;
          color: #92400e;
        }
        .stock-alert.danger {
          background-color: #fee2e2;
          color: #991b1b;
        }

        .purchase-controls {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: auto;
        }
        .qty-picker {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background-color: var(--bg-light);
        }
        .qty-picker button {
          padding: 0.75rem 1.25rem;
          font-weight: 700;
          font-size: 1.1rem;
        }
        .qty-picker button:hover {
          background-color: #e2e8f0;
        }
        .qty-picker span {
          padding: 0 1rem;
          font-weight: 700;
          min-width: 45px;
          text-align: center;
        }
        .wishlist-btn.wishlisted {
          color: var(--danger);
          border-color: var(--danger);
          background-color: #fef2f2;
        }

        .reviews-section {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .reviews-section h2 {
          font-size: 1.5rem;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 0.75rem;
          margin-bottom: 2rem;
        }
        .reviews-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3.5rem;
        }
        .write-review-panel h3, .reviews-list-panel h3 {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
        }
        .star-rating-select {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .star-rating-select button {
          color: #cbd5e1;
        }
        .star-rating-select button.selected {
          color: var(--warning);
        }
        .login-prompt-box {
          background-color: var(--bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          text-align: center;
          border: 1px dashed var(--border-color);
        }
        .login-prompt-box p {
          font-size: 0.9rem;
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .reviews-list-panel {
          border-left: 1px solid var(--border-color);
          padding-left: 3.5rem;
        }
        .no-reviews {
          color: var(--gray);
          font-style: italic;
          font-size: 0.95rem;
        }
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.5rem;
        }
        .review-card {
          padding: 1rem;
          background-color: var(--bg-light);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .review-card-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .review-card-header h5 {
          font-size: 0.95rem;
          font-weight: 600;
        }
        .review-date {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .review-card .stars-wrapper {
          color: var(--warning);
          margin-bottom: 0.5rem;
        }
        .review-comment {
          font-size: 0.9rem;
          color: var(--dark-gray);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1.75rem;
          }
          .reviews-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .reviews-list-panel {
            border-left: none;
            padding-left: 0;
          }
        }
      `})]})}function Gh({cart:e,updateCartQty:t,removeFromCart:r}){const n=e.reduce((s,c)=>s+c.price*c.quantity,0),a=n>5e3||n===0?0:300,l=n+a,o=s=>s.image_url&&s.image_url!=="default_product.jpg"&&!s.image_url.endsWith("/default_product.jpg")?s.image_url:`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="80" height="80" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="%23f56a00">🧱</text>
    </svg>`;return e.length===0?i.jsxs("div",{className:"empty-cart-page animate-scale",children:[i.jsx(El,{size:64,className:"empty-cart-icon"}),i.jsx("h2",{children:"Your Shopping Cart is Empty"}),i.jsx("p",{children:"You haven't added any construction or home building materials yet. Head over to our catalog to select cement, tools, bricks, or paints."}),i.jsx(D,{to:"/catalog",className:"btn btn-primary",children:"Browse Materials"})]}):i.jsxs("div",{className:"cart-page animate-fade",children:[i.jsx("h1",{children:"Shopping Cart"}),i.jsxs("div",{className:"cart-layout",children:[i.jsxs("div",{className:"cart-items-panel",children:[i.jsxs("div",{className:"table-header-row",children:[i.jsx("span",{children:"Product Details"}),i.jsx("span",{children:"Quantity"}),i.jsx("span",{children:"Total Price"})]}),i.jsx("div",{className:"cart-items-list",children:e.map(s=>i.jsxs("div",{className:"cart-item-row",children:[i.jsxs("div",{className:"item-details",children:[i.jsx("img",{src:o(s),alt:s.name,className:"item-img"}),i.jsxs("div",{children:[i.jsx("h3",{className:"item-name",children:i.jsx(D,{to:`/product/${s.product_id}`,children:s.name})}),i.jsxs("div",{className:"item-price-desc",children:["INR ",parseFloat(s.price).toFixed(2)," / ",s.unit]}),i.jsxs("button",{className:"remove-item-btn",onClick:()=>r(s.product_id),children:[i.jsx(Ri,{size:14}),i.jsx("span",{children:"Remove"})]})]})]}),i.jsxs("div",{className:"item-quantity",children:[i.jsxs("div",{className:"cart-qty-picker",children:[i.jsx("button",{onClick:()=>t(s.product_id,s.quantity-1),children:i.jsx(Oh,{size:12})}),i.jsx("span",{children:s.quantity}),i.jsx("button",{onClick:()=>t(s.product_id,s.quantity+1),children:i.jsx(Rd,{size:12})})]}),i.jsxs("span",{className:"unit-label",children:[s.unit,"s"]})]}),i.jsxs("div",{className:"item-subtotal",children:["INR ",(s.price*s.quantity).toFixed(2)]})]},s.product_id))})]}),i.jsxs("aside",{className:"order-summary-panel",children:[i.jsx("h3",{children:"Order Summary"}),i.jsxs("div",{className:"summary-details",children:[i.jsxs("div",{className:"summary-row",children:[i.jsxs("span",{children:["Subtotal (",e.reduce((s,c)=>s+c.quantity,0)," items)"]}),i.jsxs("span",{children:["INR ",n.toFixed(2)]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Cargo Site Shipping"}),i.jsx("span",{children:a===0?i.jsx("span",{className:"free-shipping",children:"FREE"}):`INR ${a.toFixed(2)}`})]}),a>0&&i.jsxs("div",{className:"shipping-hint",children:["Add ",i.jsxs("strong",{children:["INR ",(5e3-n).toFixed(2)]})," more in products to qualify for free site shipping!"]}),i.jsx("div",{className:"summary-divider"}),i.jsxs("div",{className:"summary-row total-row",children:[i.jsx("span",{children:"Total Price"}),i.jsxs("span",{children:["INR ",l.toFixed(2)]})]})]}),i.jsxs(D,{to:"/checkout",className:"btn btn-primary checkout-action-btn",children:[i.jsx("span",{children:"Proceed to Checkout"}),i.jsx(Sh,{size:18})]}),i.jsx("div",{className:"security-guarantee",children:"🔒 Safe & Secure Checkout Guarantee"})]})]}),i.jsx("style",{children:`
        .empty-cart-page {
          text-align: center;
          padding: 5rem 2rem;
          background: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 4rem auto;
        }
        .empty-cart-icon {
          color: var(--light-gray);
          margin-bottom: 1.5rem;
        }
        .empty-cart-page h2 {
          margin-bottom: 0.75rem;
        }
        .empty-cart-page p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .cart-page h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .cart-items-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .table-header-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 1rem 1.5rem;
          background-color: var(--bg-light);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--dark-gray);
          border-bottom: 1px solid var(--border-color);
        }
        .cart-item-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          align-items: center;
        }
        .cart-item-row:last-child {
          border-bottom: none;
        }
        
        .item-details {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }
        .item-img {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: #f1f5f9;
          border: 1px solid var(--border-color);
        }
        .item-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .item-name a:hover {
          color: var(--primary);
        }
        .item-price-desc {
          font-size: 0.8rem;
          color: var(--gray);
          margin-bottom: 0.5rem;
        }
        .remove-item-btn {
          color: var(--gray);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .remove-item-btn:hover {
          color: var(--danger);
        }
        
        .item-quantity {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }
        .cart-qty-picker {
          display: flex;
          align-items: center;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--bg-light);
        }
        .cart-qty-picker button {
          padding: 0.4rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-qty-picker button:hover {
          background-color: var(--light-gray);
        }
        .cart-qty-picker span {
          min-width: 30px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .unit-label {
          font-size: 0.75rem;
          color: var(--gray);
          margin-left: 2px;
        }
        
        .item-subtotal {
          font-weight: 700;
          color: var(--dark);
          font-size: 1.1rem;
        }

        .order-summary-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .order-summary-panel h3 {
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .summary-row.total-row {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--dark);
          margin-top: 1rem;
        }
        .free-shipping {
          color: var(--success);
          font-weight: 700;
        }
        .shipping-hint {
          font-size: 0.75rem;
          background-color: var(--primary-light);
          color: var(--primary);
          padding: 0.6rem 0.85rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
          border: 1px dashed rgba(245,106,0,0.2);
        }
        .summary-divider {
          border-top: 1px solid var(--border-color);
          margin: 1rem 0;
        }
        .checkout-action-btn {
          width: 100%;
          padding: 0.9rem;
          gap: 0.75rem;
        }
        .security-guarantee {
          font-size: 0.75rem;
          color: var(--gray);
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 900px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .table-header-row {
            display: none;
          }
          .cart-item-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            text-align: center;
          }
          .item-details {
            flex-direction: column;
          }
          .item-quantity {
            align-items: center;
          }
        }
      `})]})}function Xh({cart:e,user:t,token:r,clearCart:n,showToast:a}){const l=Ft(),[o,s]=y.useState(""),[c,u]=y.useState(""),[h,m]=y.useState("cod"),[g,v]=y.useState(!1),w=e.reduce((d,p)=>d+p.price*p.quantity,0),k=w>5e3||w===0?0:300,C=w+k;if(e.length===0)return i.jsxs("div",{className:"empty-checkout text-center animate-scale",style:{padding:"6rem 2rem"},children:[i.jsx("h2",{children:"No Items to Checkout"}),i.jsx("p",{style:{margin:"1rem 0 2rem 0",color:"var(--gray)"},children:"Your cart is empty. Please select materials from our store first."}),i.jsx(D,{to:"/catalog",className:"btn btn-primary",children:"Browse Catalog"})]});const f=async d=>{if(d.preventDefault(),!o.trim()){a("Please specify a delivery/site address.","warning");return}if(!c.trim()||c.length<10){a("Please enter a valid 10-digit mobile number.","warning");return}v(!0);try{const p=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({items:e.map(x=>({product_id:x.product_id,quantity:x.quantity,price:x.price})),total_amount:C,shipping_address:o,phone:c,payment_method:h})}),j=await p.json();p.ok?(a("Order placed successfully! Delivery is being arranged.","success"),n(),l(`/order-tracking/${j.orderId}`)):a(j.message||"Error placing order.","warning")}catch{a("Server connection failed.","danger")}finally{v(!1)}};return i.jsxs("div",{className:"checkout-page animate-fade",children:[i.jsx("h1",{children:"Checkout & Delivery Arrangements"}),i.jsxs("div",{className:"checkout-layout",children:[i.jsxs("form",{className:"checkout-form-panel",onSubmit:f,children:[i.jsxs("div",{className:"checkout-section",children:[i.jsxs("h3",{className:"section-subtitle-custom",children:[i.jsx(Ti,{size:18}),i.jsx("span",{children:"1. Site Delivery Address"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"delivery-address",children:"Site Location / Shipping Address *"}),i.jsx("textarea",{id:"delivery-address",className:"form-input",rows:"4",placeholder:"Enter complete address, plot/site number, contractor contact person name, building gate instructions...",value:o,onChange:d=>s(d.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"phone-number",children:"On-Site Contact Mobile Number *"}),i.jsx("input",{id:"phone-number",type:"tel",className:"form-input",placeholder:"e.g. 9876543210",value:c,onChange:d=>u(d.target.value),required:!0}),i.jsx("span",{className:"input-helper-text",children:"Our logistics coordinator or delivery truck drivers will use this to call on arrival."})]})]}),i.jsxs("div",{className:"checkout-section",children:[i.jsxs("h3",{className:"section-subtitle-custom",children:[i.jsx(ea,{size:18}),i.jsx("span",{children:"2. Select Billing Option"})]}),i.jsxs("div",{className:"payment-options-grid",children:[i.jsxs("div",{className:`payment-card ${h==="cod"?"active":""}`,onClick:()=>m("cod"),children:[i.jsx("div",{className:"card-selection-indicator",children:h==="cod"&&i.jsx(_a,{size:12})}),i.jsx(Ti,{size:24,className:"payment-card-icon"}),i.jsxs("div",{className:"payment-card-meta",children:[i.jsx("h5",{children:"Cash / Pay on Delivery"}),i.jsx("p",{children:"Pay with Cash, UPI, or Card at your building site on delivery."})]})]}),i.jsxs("div",{className:`payment-card ${h==="upi"?"active":""}`,onClick:()=>m("upi"),children:[i.jsx("div",{className:"card-selection-indicator",children:h==="upi"&&i.jsx(_a,{size:12})}),i.jsx(Mh,{size:24,className:"payment-card-icon"}),i.jsxs("div",{className:"payment-card-meta",children:[i.jsx("h5",{children:"Instant UPI / NetBanking"}),i.jsx("p",{children:"Pay instantly using PhonePe, GooglePay, PayTM, or bank transfer."})]})]}),i.jsxs("div",{className:`payment-card ${h==="card"?"active":""}`,onClick:()=>m("card"),children:[i.jsx("div",{className:"card-selection-indicator",children:h==="card"&&i.jsx(_a,{size:12})}),i.jsx(Ph,{size:24,className:"payment-card-icon"}),i.jsxs("div",{className:"payment-card-meta",children:[i.jsx("h5",{children:"Credit / Debit Cards"}),i.jsx("p",{children:"Secure payment checkout using major Visa or MasterCard."})]})]})]})]}),i.jsx("button",{type:"submit",className:"btn btn-primary place-order-btn",disabled:g,children:g?"Fulfilling Order...":`Confirm & Place Order (INR ${C.toFixed(2)})`})]}),i.jsxs("aside",{className:"checkout-summary-panel",children:[i.jsx("h3",{children:"Items Summary"}),i.jsx("div",{className:"checkout-items-list",children:e.map(d=>i.jsxs("div",{className:"summary-item",children:[i.jsxs("span",{className:"qty-tag",children:[d.quantity,"x"]}),i.jsxs("div",{className:"summary-item-details",children:[i.jsx("span",{className:"item-title",children:d.name}),i.jsxs("span",{className:"item-unit-desc",children:["INR ",parseFloat(d.price).toFixed(2)," / ",d.unit]})]}),i.jsxs("span",{className:"item-sub-price",children:["INR ",(d.price*d.quantity).toFixed(2)]})]},d.product_id))}),i.jsx("div",{className:"summary-divider"}),i.jsxs("div",{className:"checkout-totals",children:[i.jsxs("div",{className:"total-row-item",children:[i.jsx("span",{children:"Subtotal"}),i.jsxs("span",{children:["INR ",w.toFixed(2)]})]}),i.jsxs("div",{className:"total-row-item",children:[i.jsx("span",{children:"Site Cargo Shipping"}),i.jsx("span",{children:k===0?i.jsx("span",{style:{color:"var(--success)",fontWeight:"bold"},children:"FREE"}):`INR ${k.toFixed(2)}`})]}),i.jsx("div",{className:"summary-divider"}),i.jsxs("div",{className:"total-row-item grand-total",children:[i.jsx("span",{children:"Grand Total"}),i.jsxs("span",{children:["INR ",C.toFixed(2)]})]})]})]})]}),i.jsx("style",{children:`
        .checkout-page h1 {
          font-size: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .checkout-form-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .checkout-section {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .section-subtitle-custom {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .input-helper-text {
          font-size: 0.75rem;
          color: var(--gray);
          margin-top: 0.35rem;
          display: block;
        }

        .payment-options-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .payment-card {
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
        }
        .payment-card:hover {
          border-color: var(--primary);
          background-color: var(--bg-light);
        }
        .payment-card.active {
          border-color: var(--primary);
          background-color: var(--primary-light);
        }
        .card-selection-indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1.5px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-white);
        }
        .payment-card.active .card-selection-indicator {
          border-color: var(--primary);
          background-color: var(--primary);
          color: var(--bg-white);
        }
        .payment-card-icon {
          color: var(--secondary);
        }
        .payment-card.active .payment-card-icon {
          color: var(--primary);
        }
        .payment-card-meta h5 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.15rem;
        }
        .payment-card-meta p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .place-order-btn {
          padding: 1rem;
          font-size: 1.1rem;
          box-shadow: 0 4px 14px rgba(245, 106, 0, 0.3);
        }

        .checkout-summary-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 90px;
        }
        .checkout-summary-panel h3 {
          font-size: 1.2rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .checkout-items-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 250px;
          overflow-y: auto;
          margin-bottom: 1.25rem;
          padding-right: 0.25rem;
        }
        .summary-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
        }
        .qty-tag {
          font-weight: 700;
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
        }
        .summary-item-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .item-title {
          font-weight: 600;
          color: var(--dark);
        }
        .item-unit-desc {
          font-size: 0.75rem;
          color: var(--gray);
        }
        .item-sub-price {
          font-weight: 700;
          color: var(--dark);
        }
        .checkout-totals {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .total-row-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--dark-gray);
        }
        .total-row-item.grand-total {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--dark);
        }

        @media (max-width: 900px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }
          .checkout-summary-panel {
            position: relative;
            top: 0;
          }
        }
      `})]})}function Zh({token:e}){const{id:t}=jd(),[r,n]=y.useState(null),[a,l]=y.useState(!0);if(y.useEffect(()=>{l(!0),fetch("/api/orders").then(u=>u.json()).then(u=>{const h=(u.orders||[]).find(m=>m.id===parseInt(t));n(h),l(!1)}).catch(u=>{console.error(u),l(!1)})},[t]),a)return i.jsx("div",{className:"spinner",style:{marginTop:"10rem"}});if(!r)return i.jsxs("div",{className:"text-center animate-scale",style:{padding:"6rem 2rem"},children:[i.jsx("h2",{children:"Order Not Found"}),i.jsx("p",{style:{margin:"1rem 0 2rem 0",color:"var(--gray)"},children:"We couldn't locate this order code in your account logs."}),i.jsx(D,{to:"/profile",className:"btn btn-primary btn-sm",children:"Go to My Orders"})]});const s=(u=>{switch(u){case"Pending":return 1;case"Packaging":return 2;case"In Transit":return 3;case"Delivered":return 4;default:return 1}})(r.status),c=[{label:"Order Confirmed",icon:i.jsx(Eo,{size:20}),desc:"Awaiting supplier allocation"},{label:"Packaging Materials",icon:i.jsx(Fh,{size:20}),desc:"Loading products onto cargo truck"},{label:"In Transit",icon:i.jsx(Ti,{size:20}),desc:"Delivery vehicle en route to site"},{label:"Delivered",icon:i.jsx(ea,{size:20}),desc:"Receipt signed on-site"}];return i.jsxs("div",{className:"tracking-page animate-fade",children:[i.jsxs(D,{to:"/profile",className:"back-link",children:[i.jsx(zd,{size:16}),i.jsx("span",{children:"Go to Order History"})]}),i.jsxs("div",{className:"tracking-wrapper",children:[i.jsxs("div",{className:"tracking-header-card",children:[i.jsxs("div",{children:[i.jsxs("span",{className:"order-id-badge",children:["Order ID: BM-",r.id.toString().padStart(6,"0")]}),i.jsx("h1",{children:"Delivery Tracking status"}),i.jsxs("p",{children:["Placing Date: ",new Date(r.created_at).toLocaleString()]})]}),i.jsxs("a",{href:`/api/invoices/${r.id}`,download:!0,className:"btn btn-outline download-invoice-btn",style:{padding:"0.6rem 1rem",fontSize:"0.85rem"},children:[i.jsx(_h,{size:16}),i.jsx("span",{children:"Download PDF Invoice"})]})]}),i.jsxs("div",{className:"stepper-container",children:[i.jsx("div",{className:"stepper-progress-bar",children:i.jsx("div",{className:"progress-line",style:{width:`${(s-1)/(c.length-1)*100}%`}})}),i.jsx("div",{className:"stepper-nodes",children:c.map((u,h)=>{const m=h+1,g=m<=s,v=m===s;return i.jsxs("div",{className:`step-node ${g?"active":""} ${v?"current":""}`,children:[i.jsx("div",{className:"step-icon-circle",children:u.icon}),i.jsxs("div",{className:"step-text-meta",children:[i.jsx("h4",{children:u.label}),i.jsx("p",{children:u.desc})]})]},h)})})]}),i.jsxs("div",{className:"tracking-details-grid",children:[i.jsxs("div",{className:"details-card",children:[i.jsx("h3",{children:"Site Delivery Information"}),i.jsxs("ul",{className:"details-list",children:[i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Delivery Address:"}),i.jsx("span",{className:"details-value",children:r.shipping_address})]}),i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Site Contact Phone:"}),i.jsx("span",{className:"details-value",children:r.phone})]}),i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Fulfillment Status:"}),i.jsx("span",{className:"details-value font-bold text-primary",children:r.status})]})]})]}),i.jsxs("div",{className:"details-card",children:[i.jsx("h3",{children:"Fulfillment & Billing Details"}),i.jsxs("ul",{className:"details-list",children:[i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Payment Method:"}),i.jsx("span",{className:"details-value text-uppercase",children:r.payment_method})]}),i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Invoice Grand Total:"}),i.jsxs("span",{className:"details-value font-bold",children:["INR ",parseFloat(r.total_amount).toFixed(2)]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"details-label",children:"Delivery Partner:"}),i.jsx("span",{className:"details-value",children:"BuildMart Heavy Cargo Logistics"})]})]})]})]})]}),i.jsx("style",{children:`
        .tracking-wrapper {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .tracking-header-card {
          padding: 2rem;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .order-id-badge {
          background-color: var(--secondary-light);
          color: var(--secondary);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        .tracking-header-card h1 {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }
        .tracking-header-card p {
          font-size: 0.8rem;
          color: var(--gray);
        }

        .stepper-container {
          padding: 4rem 3rem;
          position: relative;
          max-width: 950px;
          margin: 0 auto;
        }
        .stepper-progress-bar {
          position: absolute;
          top: 80px; /* Aligns with circle center */
          left: 60px;
          right: 60px;
          height: 4px;
          background-color: var(--border-color);
          z-index: 1;
        }
        .progress-line {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width var(--transition-slow);
        }
        .stepper-nodes {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
        }
        .step-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 120px;
          text-align: center;
        }
        .step-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--bg-white);
          border: 3px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--light-gray);
          margin-bottom: 1rem;
          transition: all var(--transition-normal);
        }
        .step-node.active .step-icon-circle {
          border-color: var(--primary);
          background-color: var(--primary);
          color: var(--bg-white);
          box-shadow: 0 4px 10px rgba(245, 106, 0, 0.25);
        }
        .step-node.current .step-icon-circle {
          border-color: var(--primary);
          background-color: var(--bg-white);
          color: var(--primary);
          animation: pulseBorder 1.5s infinite;
        }
        @keyframes pulseBorder {
          0% { box-shadow: 0 0 0 0 rgba(245, 106, 0, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(245, 106, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(245, 106, 0, 0); }
        }
        .step-text-meta h4 {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--light-gray);
          margin-bottom: 0.25rem;
          transition: var(--transition-fast);
        }
        .step-node.active .step-text-meta h4 {
          color: var(--dark);
        }
        .step-text-meta p {
          font-size: 0.7rem;
          color: var(--gray);
          line-height: 1.3;
        }

        .tracking-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding: 2.5rem;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-color);
        }
        .details-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }
        .details-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .details-list li {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .details-label {
          color: var(--gray);
          font-weight: 500;
        }
        .details-value {
          color: var(--dark);
          max-width: 250px;
          text-align: right;
        }
        .text-primary { color: var(--primary); }
        .font-bold { font-weight: 700; }
        .text-uppercase { text-transform: uppercase; }

        @media (max-width: 768px) {
          .tracking-header-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .stepper-container {
            padding: 3rem 1rem;
          }
          .stepper-progress-bar {
            display: none;
          }
          .stepper-nodes {
            flex-direction: column;
            gap: 2rem;
          }
          .step-node {
            flex-direction: row;
            width: 100%;
            text-align: left;
            gap: 1.25rem;
          }
          .step-icon-circle {
            margin-bottom: 0;
          }
          .tracking-details-grid {
            grid-template-columns: 1fr;
            padding: 1.5rem;
          }
        }
      `})]})}function Jh({user:e,token:t,wishlist:r,removeFromWishlist:n,addToCart:a,logout:l}){const[o,s]=y.useState("orders"),[c,u]=y.useState([]),[h,m]=y.useState(!0);y.useEffect(()=>{o==="orders"&&(m(!0),fetch("/api/orders/my-orders",{headers:{Authorization:`Bearer ${t}`}}).then(v=>v.json()).then(v=>{u(v.orders||[]),m(!1)}).catch(v=>{console.error("Error fetching orders:",v),m(!1)}))},[o]);const g=v=>v&&v!=="default_product.jpg"&&!v.endsWith("/default_product.jpg")?v:`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 80 80" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="80" height="80" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="28" fill="%23f56a00">🧱</text>
    </svg>`;return i.jsxs("div",{className:"profile-page animate-fade",children:[i.jsxs("div",{className:"profile-layout",children:[i.jsxs("aside",{className:"profile-sidebar-card",children:[i.jsxs("div",{className:"profile-user-info",children:[i.jsx("div",{className:"avatar-circle",children:i.jsx(Lo,{size:36})}),i.jsx("h2",{children:e.name}),i.jsx("span",{className:"user-email-label",children:e.email}),i.jsx("span",{className:"role-tag-badge",children:e.role.toUpperCase()})]}),i.jsxs("div",{className:"profile-menu",children:[i.jsxs("button",{className:`menu-tab-btn ${o==="orders"?"active":""}`,onClick:()=>s("orders"),children:[i.jsx(Gs,{size:18}),i.jsx("span",{children:"Order History"})]}),i.jsxs("button",{className:`menu-tab-btn ${o==="wishlist"?"active":""}`,onClick:()=>s("wishlist"),children:[i.jsx(Sn,{size:18}),i.jsxs("span",{children:["My Wishlist (",r.length,")"]})]}),i.jsx("div",{className:"sidebar-divider"}),i.jsxs("button",{className:"menu-tab-btn logout-tab-btn",onClick:l,children:[i.jsx(_d,{size:18}),i.jsx("span",{children:"Sign Out Account"})]})]})]}),i.jsxs("main",{className:"profile-main-panel",children:[o==="orders"&&i.jsxs("div",{className:"tab-container animate-scale",children:[i.jsx("h2",{className:"tab-title",children:"My Orders Log"}),h?i.jsx("div",{className:"spinner"}):c.length===0?i.jsxs("div",{className:"empty-history text-center",children:[i.jsx(Gs,{size:48,className:"empty-icon-gray"}),i.jsx("h3",{children:"No Orders Placed Yet"}),i.jsx("p",{children:"Browse our wide range of construction materials and place your first site order online today."}),i.jsx(D,{to:"/catalog",className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:"Browse Catalog"})]}):i.jsx("div",{className:"orders-log-list",children:c.map(v=>i.jsxs("div",{className:"order-log-card",children:[i.jsxs("div",{className:"order-card-header",children:[i.jsxs("div",{children:[i.jsxs("span",{className:"order-id",children:["ID: BM-",v.id.toString().padStart(6,"0")]}),i.jsx("span",{className:"order-date",children:new Date(v.created_at).toLocaleDateString()})]}),i.jsxs("div",{className:"order-actions",children:[i.jsx("span",{className:`status-badge status-${v.status.toLowerCase().replace(" ","-")}`,children:v.status}),i.jsxs(D,{to:`/order-tracking/${v.id}`,className:"btn btn-outline btn-sm track-btn",children:[i.jsx(Eh,{size:14}),i.jsx("span",{children:"Track Delivery"})]}),i.jsxs("a",{href:`/api/invoices/${v.id}`,download:!0,className:"btn btn-outline btn-sm download-invoice-btn",children:[i.jsx(Pd,{size:14}),i.jsx("span",{children:"Invoice"})]})]})]}),i.jsx("div",{className:"order-card-items",children:v.items&&v.items.map(w=>i.jsxs("div",{className:"order-item-tiny",children:[i.jsx("img",{src:g(w.image_url),alt:w.product_name,className:"tiny-img"}),i.jsxs("div",{className:"tiny-meta",children:[i.jsx("h5",{children:w.product_name}),i.jsxs("p",{children:[w.quantity," x INR ",parseFloat(w.price).toFixed(2)]})]})]},w.id))}),i.jsxs("div",{className:"order-card-bottom",children:[i.jsxs("span",{children:["Paid via ",i.jsx("strong",{children:v.payment_method.toUpperCase()})]}),i.jsxs("div",{className:"total-display",children:[i.jsx("span",{children:"Grand Total:"}),i.jsxs("strong",{children:["INR ",parseFloat(v.total_amount).toFixed(2)]})]})]})]},v.id))})]}),o==="wishlist"&&i.jsxs("div",{className:"tab-container animate-scale",children:[i.jsx("h2",{className:"tab-title",children:"My Wishlisted Items"}),r.length===0?i.jsxs("div",{className:"empty-history text-center",children:[i.jsx(Sn,{size:48,className:"empty-icon-gray"}),i.jsx("h3",{children:"Wishlist is Empty"}),i.jsx("p",{children:"Select the heart icon on any product card in the catalog to save materials for quick access later."}),i.jsx(D,{to:"/catalog",className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:"Browse Catalog"})]}):i.jsx("div",{className:"wishlist-grid grid-cols-2",children:r.map(v=>i.jsxs("div",{className:"wishlist-item-card",children:[i.jsx("img",{src:g(v.image_url),alt:v.name,className:"wish-img"}),i.jsxs("div",{className:"wish-meta",children:[i.jsx("h4",{children:v.name}),i.jsxs("div",{className:"wish-price",children:["INR ",parseFloat(v.price).toFixed(2)]}),i.jsxs("div",{className:"wish-actions",children:[i.jsxs("button",{className:"btn btn-primary btn-sm",disabled:v.stock===0,onClick:()=>a({id:v.product_id,name:v.name,price:v.price,image_url:v.image_url,stock:v.stock,unit:"pcs"},1),children:[i.jsx(ta,{size:14}),i.jsx("span",{children:"Add to Cart"})]}),i.jsx("button",{className:"wish-delete-btn",onClick:()=>n(v.product_id),title:"Remove from wishlist",children:i.jsx(Ri,{size:16})})]})]})]},v.id))})]})]})]}),i.jsx("style",{children:`
        .profile-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .profile-sidebar-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .profile-user-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 2rem;
        }
        .avatar-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: var(--secondary-light);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border: 2px solid var(--border-color);
        }
        .profile-user-info h2 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }
        .user-email-label {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 0.75rem;
        }
        .role-tag-badge {
          background-color: var(--primary-light);
          color: var(--primary);
          padding: 0.25rem 0.65rem;
          font-size: 0.7rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
          letter-spacing: 0.5px;
        }

        .profile-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .menu-tab-btn {
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--dark-gray);
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .menu-tab-btn:hover {
          background-color: var(--bg-light);
          color: var(--primary);
        }
        .menu-tab-btn.active {
          background-color: var(--secondary);
          color: var(--bg-white);
        }
        .sidebar-divider {
          border-top: 1px solid var(--border-color);
          margin: 0.75rem 0;
        }
        .logout-tab-btn {
          color: var(--danger);
        }
        .logout-tab-btn:hover {
          background-color: #fee2e2;
          color: var(--danger);
        }

        .profile-main-panel {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          min-height: 500px;
        }
        .tab-title {
          font-size: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
          margin-bottom: 1.75rem;
        }
        
        .empty-history {
          padding: 4rem 1.5rem;
          color: var(--gray);
        }
        .empty-icon-gray {
          color: var(--light-gray);
          margin-bottom: 1rem;
        }
        
        .orders-log-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .order-log-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .order-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background-color: var(--bg-light);
          border-bottom: 1px solid var(--border-color);
        }
        .order-id {
          font-weight: 700;
          color: var(--dark);
          margin-right: 0.5rem;
        }
        .order-date {
          font-size: 0.8rem;
          color: var(--gray);
        }
        .order-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .status-badge {
          padding: 0.25rem 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        .status-pending { background-color: #fef3c7; color: #d97706; }
        .status-packaging { background-color: #e0f2fe; color: #0369a1; }
        .status-in-transit { background-color: #e0e7ff; color: #4f46e5; }
        .status-delivered { background-color: #d1fae5; color: #059669; }
        .status-cancelled { background-color: #fee2e2; color: #dc2626; }

        .order-card-items {
          padding: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        .order-item-tiny {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tiny-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
        }
        .tiny-meta h5 {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--dark);
        }
        .tiny-meta p {
          font-size: 0.75rem;
          color: var(--gray);
        }
        
        .order-card-bottom {
          padding: 1rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }
        .total-display span {
          color: var(--gray);
          margin-right: 0.25rem;
        }
        .total-display strong {
          font-size: 1.05rem;
          color: var(--dark);
        }

        .wishlist-item-card {
          background-color: var(--bg-light);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
        }
        .wish-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
        }
        .wish-meta {
          flex: 1;
        }
        .wish-meta h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .wish-price {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }
        .wish-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .wish-delete-btn {
          color: var(--gray);
          padding: 0.25rem;
        }
        .wish-delete-btn:hover {
          color: var(--danger);
        }

        @media (max-width: 900px) {
          .profile-layout {
            grid-template-columns: 1fr;
          }
          .profile-main-panel {
            padding: 1.5rem;
          }
          .order-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `})]})}function eg({setToken:e,user:t,showToast:r}){const n=Ft(),[a]=Cd(),l=a.get("redirect")||"/",[o,s]=y.useState("login"),[c,u]=y.useState(""),[h,m]=y.useState(""),[g,v]=y.useState(""),[w,k]=y.useState(""),[C,f]=y.useState(!1),[d,p]=y.useState("");y.useEffect(()=>{t&&n(l)},[t,l,n]);const j=N=>String(N).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),x=async N=>{if(N.preventDefault(),p(""),!h||!g){p("Email and password fields are required.");return}if(!j(h)){p("Please enter a valid email format.");return}if(g.length<6){p("Password must be at least 6 characters long.");return}if(o==="register"){if(!c){p("Please fill in your name.");return}if(g!==w){p("Passwords do not match.");return}}f(!0);try{const I=await fetch(o==="login"?"/api/auth/login":"/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o==="login"?{email:h,password:g}:{name:c,email:h,password:g})}),P=await I.json();I.ok?o==="login"?(r("Signed in successfully!","success"),e(P.token)):(r("Registration complete! Please sign in.","success"),s("login"),v(""),k("")):p(P.message||"Authorization failed. Please try again.")}catch{p("Failed to connect to the backend server.")}finally{f(!1)}};return i.jsxs("div",{className:"auth-page animate-fade",children:[i.jsxs("div",{className:"auth-container",children:[i.jsxs("div",{className:"auth-tabs",children:[i.jsxs("button",{className:`auth-tab-btn ${o==="login"?"active":""}`,onClick:()=>{s("login"),p("")},children:[i.jsx(Th,{size:18}),i.jsx("span",{children:"Sign In"})]}),i.jsxs("button",{className:`auth-tab-btn ${o==="register"?"active":""}`,onClick:()=>{s("register"),p("")},children:[i.jsx(Wh,{size:18}),i.jsx("span",{children:"Register"})]})]}),i.jsxs("div",{className:"auth-form-panel",children:[i.jsxs("div",{className:"auth-header-desc text-center",children:[i.jsx("h2",{children:o==="login"?"Welcome Back":"Create Builder Account"}),i.jsx("p",{children:"Access BuildMart order tracking, wishlists, and wholesale billing rates."})]}),d&&i.jsx("div",{className:"auth-error-box animate-scale",children:i.jsxs("span",{children:["⚠️ ",d]})}),i.jsxs("form",{onSubmit:x,children:[o==="register"&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"register-name",children:"Full Name *"}),i.jsxs("div",{className:"input-with-icon",children:[i.jsx(Lo,{size:16,className:"input-field-icon"}),i.jsx("input",{id:"register-name",type:"text",className:"form-input",placeholder:"Enter your name",value:c,onChange:N=>u(N.target.value),required:!0})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"auth-email",children:"Email Address *"}),i.jsxs("div",{className:"input-with-icon",children:[i.jsx(_o,{size:16,className:"input-field-icon"}),i.jsx("input",{id:"auth-email",type:"email",className:"form-input",placeholder:"name@gmail.com",value:h,onChange:N=>m(N.target.value),required:!0})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"auth-password",children:"Password *"}),i.jsxs("div",{className:"input-with-icon",children:[i.jsx(Xs,{size:16,className:"input-field-icon"}),i.jsx("input",{id:"auth-password",type:"password",className:"form-input",placeholder:"Enter secret password (min 6 chars)",value:g,onChange:N=>v(N.target.value),required:!0})]})]}),o==="register"&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"auth-confirm-password",children:"Confirm Password *"}),i.jsxs("div",{className:"input-with-icon",children:[i.jsx(Xs,{size:16,className:"input-field-icon"}),i.jsx("input",{id:"auth-confirm-password",type:"password",className:"form-input",placeholder:"Re-enter password",value:w,onChange:N=>k(N.target.value),required:!0})]})]}),i.jsx("button",{type:"submit",className:"btn btn-primary auth-submit-btn",disabled:C,children:C?"Processing...":o==="login"?"Sign In Account":"Register Builder Account"})]}),o==="login"?i.jsxs("p",{className:"auth-footer-text text-center",children:["Don't have a professional account?"," ",i.jsx("button",{className:"toggle-link",onClick:()=>s("register"),children:"Register here"})]}):i.jsxs("p",{className:"auth-footer-text text-center",children:["Already registered?"," ",i.jsx("button",{className:"toggle-link",onClick:()=>s("login"),children:"Sign in here"})]}),i.jsxs("div",{className:"seed-accounts-box",children:[i.jsx("h5",{children:"💡 Try BuildMart Demo Accounts"}),i.jsxs("div",{className:"account-row",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"Customer:"})," john@gmail.com"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"Pass:"})," user123"]})]}),i.jsxs("div",{className:"account-row",children:[i.jsxs("span",{children:[i.jsx("strong",{children:"Admin:"})," admin@buildmart.com"]}),i.jsxs("span",{children:[i.jsx("strong",{children:"Pass:"})," admin123"]})]})]})]})]}),i.jsx("style",{children:`
        .auth-page {
          padding: 4rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        .auth-container {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          width: 100%;
          max-width: 450px;
          box-shadow: var(--shadow-lg);
        }
        
        .auth-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border-color);
        }
        .auth-tab-btn {
          padding: 1.25rem;
          font-weight: 700;
          color: var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-bottom: 3px solid transparent;
        }
        .auth-tab-btn:hover {
          color: var(--primary);
          background-color: var(--bg-light);
        }
        .auth-tab-btn.active {
          color: var(--primary);
          border-bottom-color: var(--primary);
          background-color: var(--bg-white);
        }
        
        .auth-form-panel {
          padding: 2.5rem;
        }
        .auth-header-desc h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .auth-header-desc p {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 1.75rem;
        }
        
        .auth-error-box {
          background-color: #fee2e2;
          color: #b91c1c;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .input-with-icon {
          position: relative;
        }
        .input-field-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray);
          pointer-events: none;
        }
        .input-with-icon .form-input {
          padding-left: 2.75rem;
        }
        
        .auth-submit-btn {
          width: 100%;
          padding: 0.85rem;
          margin-top: 1.5rem;
        }
        
        .auth-footer-text {
          font-size: 0.85rem;
          color: var(--gray);
          margin-top: 1.5rem;
        }
        .toggle-link {
          color: var(--primary);
          font-weight: 700;
        }
        .toggle-link:hover {
          text-decoration: underline;
        }
        
        .seed-accounts-box {
          margin-top: 2rem;
          border-top: 1px dashed var(--border-color);
          padding-top: 1.25rem;
          background-color: var(--bg-light);
          padding: 1rem;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
        }
        .seed-accounts-box h5 {
          font-weight: 700;
          color: var(--dark-gray);
          margin-bottom: 0.5rem;
        }
        .account-row {
          display: flex;
          justify-content: space-between;
          color: var(--gray);
          margin-bottom: 0.25rem;
        }
        .account-row:last-child {
          margin-bottom: 0;
        }
        .text-center { text-align: center; }
      `})]})}function tg({showToast:e}){const[t,r]=y.useState(""),[n,a]=y.useState(""),[l,o]=y.useState(""),[s,c]=y.useState(!1),u=h=>{if(h.preventDefault(),!t||!n||!l){e("Please fill out all contact fields.","warning");return}c(!0),setTimeout(()=>{e("Thank you! Your message has been routed to our customer support desk.","success"),r(""),a(""),o(""),c(!1)},1200)};return i.jsxs("div",{className:"contact-page animate-fade",children:[i.jsxs("div",{className:"section-header text-center",children:[i.jsx("h1",{className:"section-title",children:"Contact BuildMart Support"}),i.jsx("p",{className:"section-subtitle",children:"Get in touch with our heavy materials sales desk, check order statuses, or request custom quotes."})]}),i.jsxs("div",{className:"contact-layout",children:[i.jsxs("div",{className:"contact-info-panel",children:[i.jsxs("div",{className:"info-card",children:[i.jsx("h3",{children:"Headquarters Sales Office"}),i.jsxs("ul",{className:"info-list",children:[i.jsxs("li",{children:[i.jsx(Ld,{size:20,className:"info-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Street Location"}),i.jsx("p",{children:"123 Industrial Way, Builders Zone, Bangalore, KA, India"})]})]}),i.jsxs("li",{children:[i.jsx(Md,{size:20,className:"info-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Customer Hotline"}),i.jsx("p",{children:"+91 98765 43210 (Sales Desk)"}),i.jsx("p",{children:"+91 98765 43219 (Logistics / Truck Dispatch)"})]})]}),i.jsxs("li",{children:[i.jsx(_o,{size:20,className:"info-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Email Channels"}),i.jsx("p",{children:"support@buildmart.com (General Help)"}),i.jsx("p",{children:"quotes@buildmart.com (Bulk Pricing requests)"})]})]}),i.jsxs("li",{children:[i.jsx(Eo,{size:20,className:"info-icon"}),i.jsxs("div",{children:[i.jsx("h5",{children:"Business Hours"}),i.jsx("p",{children:"Mon - Sat: 8:00 AM - 8:00 PM"}),i.jsx("p",{children:"Sunday: 9:00 AM - 2:00 PM"})]})]})]})]}),i.jsxs("div",{className:"certified-panel",children:[i.jsx(ea,{size:24,color:"var(--primary)"}),i.jsxs("div",{children:[i.jsx("h4",{children:"Authorized Distributor"}),i.jsx("p",{children:"BuildMart is an authorized vendor for UltraTech Cement, Asian Paints, Bosch Power Tools, and Tata Steel."})]})]})]}),i.jsx("div",{className:"contact-form-panel",children:i.jsxs("div",{className:"form-card",children:[i.jsx("h3",{children:"Send Us a Message"}),i.jsx("p",{className:"form-desc",children:"Have a question about product availability, regional delivery coverage, or custom wholesale ordering? Drop us a line."}),i.jsxs("form",{onSubmit:u,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"contact-name",children:"Your Full Name *"}),i.jsx("input",{id:"contact-name",type:"text",className:"form-input",placeholder:"Enter your name",value:t,onChange:h=>r(h.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"contact-email",children:"Email Address *"}),i.jsx("input",{id:"contact-email",type:"email",className:"form-input",placeholder:"name@example.com",value:n,onChange:h=>a(h.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"contact-message",children:"How can we help? *"}),i.jsx("textarea",{id:"contact-message",className:"form-input",rows:"5",placeholder:"Write details of your query or custom materials requirements...",value:l,onChange:h=>o(h.target.value),required:!0})]}),i.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:s,children:[i.jsx(Id,{size:16}),i.jsx("span",{children:s?"Sending...":"Send Message"})]})]})]})})]}),i.jsx("style",{children:`
        .contact-page {
          padding-bottom: 2rem;
        }
        .text-center { text-align: center; }
        
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          margin-top: 2rem;
          align-items: flex-start;
        }
        
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .info-card h3 {
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
          color: var(--secondary);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-list li {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .info-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .info-list h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 0.2rem;
        }
        .info-list p {
          font-size: 0.85rem;
          color: var(--dark-gray);
        }
        
        .certified-panel {
          background-color: var(--secondary-light);
          border: 1.5px dashed var(--accent);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .certified-panel h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.25rem;
        }
        .certified-panel p {
          font-size: 0.8rem;
          color: var(--dark-gray);
          line-height: 1.4;
        }

        .form-card {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
        }
        .form-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.5rem;
          color: var(--secondary);
        }
        .form-desc {
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 1.75rem;
        }
        .submit-btn {
          width: 100%;
          padding: 0.85rem;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `})]})}function rg({token:e,showToast:t}){const[r,n]=y.useState("analytics"),[a,l]=y.useState(null),[o,s]=y.useState([]),[c,u]=y.useState([]),[h,m]=y.useState([]),[g,v]=y.useState([]),[w,k]=y.useState(!0),[C,f]=y.useState(!1),[d,p]=y.useState(null),[j,x]=y.useState(""),[N,z]=y.useState(""),[_,I]=y.useState(""),[P,$]=y.useState(""),[ee,M]=y.useState("pcs"),[se,Me]=y.useState(""),[et,tt]=y.useState("10"),[E,T]=y.useState(!1),[O,V]=y.useState(!1),[te,Dt]=y.useState(null),[$e,rr]=y.useState(""),[Ke,At]=y.useState(""),nr=async()=>{k(!0);try{const b={Authorization:`Bearer ${e}`},F=await fetch("/api/orders/analytics",{headers:b});if(F.ok){const rt=await F.json();l(rt)}const Se=await fetch("/api/products");if(Se.ok){const rt=await Se.json();s(rt.products||[])}const Or=await fetch("/api/categories");if(Or.ok){const rt=await Or.json();u(rt.categories||[])}const $t=await fetch("/api/orders",{headers:b});if($t.ok){const rt=await $t.json();m(rt.orders||[])}const Ln=await fetch("/api/auth/customers",{headers:b});if(Ln.ok){const rt=await Ln.json();v(rt.customers||[])}}catch(b){console.error("Error loading dashboard data",b),t("Connection error fetching dashboard data.","danger")}finally{k(!1)}};y.useEffect(()=>{nr()},[e]);const Mo=(b=null)=>{var F;b?(p(b),x(b.name),z(b.category_id.toString()),I(b.price.toString()),$(b.stock.toString()),M(b.unit),Me(b.description||""),tt(b.min_stock_level.toString()),T(b.is_featured===1),V(b.is_bestseller===1)):(p(null),x(""),z(((F=c[0])==null?void 0:F.id.toString())||""),I(""),$(""),M("pcs"),Me(""),tt("10"),T(!1),V(!1)),Dt(null),f(!0)},Od=async b=>{if(b.preventDefault(),!j||!N||!_||P===""){t("Name, Category, Price, and Stock are required fields.","warning");return}const F=new FormData;F.append("name",j),F.append("category_id",N),F.append("price",_),F.append("stock",P),F.append("unit",ee),F.append("description",se),F.append("min_stock_level",et),F.append("is_featured",E?"1":"0"),F.append("is_bestseller",O?"1":"0"),te&&F.append("image",te);try{const Se=d?`/api/products/${d.id}`:"/api/products",$t=await fetch(Se,{method:d?"PUT":"POST",headers:{Authorization:`Bearer ${e}`},body:F});if($t.ok)t(d?"Product updated successfully.":"Product created successfully.","success"),f(!1),nr();else{const Ln=await $t.json();t(Ln.message||"Error saving product.","warning")}}catch{t("Connection failed saving product.","danger")}},Fd=async b=>{if(window.confirm("Are you sure you want to delete this product? This action cannot be undone."))try{(await fetch(`/api/products/${b}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}})).ok?(t("Product deleted from inventory.","info"),nr()):t("Failed to delete product.","warning")}catch{t("Connection error.","danger")}},Dd=async b=>{if(b.preventDefault(),!$e.trim()){t("Category name is required.","warning");return}try{const F=await fetch("/api/categories",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({name:$e,description:Ke})}),Se=await F.json();F.ok?(t("New category added successfully.","success"),rr(""),At(""),nr()):t(Se.message||"Error adding category.","warning")}catch{t("Connection error.","danger")}},Ad=async b=>{if(window.confirm("Delete this category? Products linked to this category may display errors."))try{const F=await fetch(`/api/categories/${b}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}});if(F.ok)t("Category deleted.","info"),nr();else{const Se=await F.json();t(Se.message||"Failed to delete category.","warning")}}catch{t("Connection error.","danger")}},$d=async(b,F)=>{try{(await fetch(`/api/orders/${b}/status`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({status:F})})).ok?(t(`Order status updated to "${F}".`,"success"),nr()):t("Failed to update status.","warning")}catch{t("Connection error.","danger")}},Bd=b=>b&&b!=="default_product.jpg"&&!b.endsWith("/default_product.jpg")?b:`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" style="background:%23edf2f7;font-family:sans-serif;">
      <rect x="0" y="0" width="40" height="40" fill="%231a365d" opacity="0.05"/>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="%23f56a00">🧱</text>
    </svg>`;return i.jsxs("div",{className:"admin-page animate-fade",children:[i.jsxs("div",{className:"admin-layout",children:[i.jsxs("aside",{className:"admin-sidebar",children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsx("div",{className:"admin-icon-box",children:"🛡️"}),i.jsxs("div",{children:[i.jsx("h3",{children:"Admin Console"}),i.jsx("p",{children:"Store Management"})]})]}),i.jsxs("div",{className:"sidebar-menu",children:[i.jsxs("button",{className:`menu-btn ${r==="analytics"?"active":""}`,onClick:()=>n("analytics"),children:[i.jsx(Ed,{size:18}),i.jsx("span",{children:"Analytics Overview"})]}),i.jsxs("button",{className:`menu-btn ${r==="products"?"active":""}`,onClick:()=>n("products"),children:[i.jsx(Zs,{size:18}),i.jsx("span",{children:"Product Inventory"})]}),i.jsxs("button",{className:`menu-btn ${r==="categories"?"active":""}`,onClick:()=>n("categories"),children:[i.jsx(Rh,{size:18}),i.jsx("span",{children:"Categories Settings"})]}),i.jsxs("button",{className:`menu-btn ${r==="orders"?"active":""}`,onClick:()=>n("orders"),children:[i.jsx(El,{size:18}),i.jsx("span",{children:"Customer Orders"})]}),i.jsxs("button",{className:`menu-btn ${r==="customers"?"active":""}`,onClick:()=>n("customers"),children:[i.jsx(ec,{size:18}),i.jsx("span",{children:"Registered Users"})]})]})]}),i.jsx("main",{className:"admin-main-viewport",children:w?i.jsx("div",{className:"spinner",style:{marginTop:"10rem"}}):i.jsxs(i.Fragment,{children:[r==="analytics"&&a&&i.jsxs("div",{className:"panel-container animate-scale",children:[i.jsx("h2",{children:"Sales & Operations Analytics"}),i.jsxs("div",{className:"analytics-summary-grid",children:[i.jsxs("div",{className:"summary-card text-secondary",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("span",{children:"Grand Revenue"}),i.jsx(ng,{size:24})]}),i.jsxs("h3",{children:["INR ",a.summary.totalSales.toFixed(2)]}),i.jsx("p",{children:"Total successful orders receipts"})]}),i.jsxs("div",{className:"summary-card text-primary",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("span",{children:"Total Orders"}),i.jsx(El,{size:24})]}),i.jsx("h3",{children:a.summary.orderCount}),i.jsx("p",{children:"Transactions processed"})]}),i.jsxs("div",{className:"summary-card text-success",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("span",{children:"Catalog Items"}),i.jsx(Zs,{size:24})]}),i.jsx("h3",{children:a.summary.productCount}),i.jsx("p",{children:"Materials products defined"})]}),i.jsxs("div",{className:"summary-card text-info",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("span",{children:"Registered Builders"}),i.jsx(ec,{size:24})]}),i.jsx("h3",{children:a.summary.customerCount}),i.jsx("p",{children:"Clients in database"})]})]}),i.jsxs("div",{className:"analytics-details-layout",children:[i.jsxs("div",{className:"analytics-sub-card low-stock-card",children:[i.jsxs("div",{className:"sub-card-header",children:[i.jsx(Nh,{size:18,color:"var(--danger)"}),i.jsx("h4",{children:"Low Stock Alerts"})]}),a.lowStockItems.length===0?i.jsxs("div",{className:"success-stock-state",children:[i.jsx(Ch,{size:36,color:"var(--success)"}),i.jsx("p",{children:"All product inventories are healthy!"})]}):i.jsx("div",{className:"low-stock-list",children:a.lowStockItems.map(b=>i.jsxs("div",{className:"low-stock-item",children:[i.jsxs("div",{children:[i.jsx("h5",{children:b.name}),i.jsx("span",{className:"category-label",children:b.category_name})]}),i.jsxs("div",{className:"stock-alert-values text-right",children:[i.jsx("strong",{className:"text-danger",children:b.stock})," / ",b.min_stock_level," ",b.unit,i.jsx("p",{className:"stock-desc-label",children:"Current / Min Limit"})]})]},b.id))})]}),i.jsxs("div",{className:"analytics-sub-card category-revenue-card",children:[i.jsx("h4",{children:"Revenue Breakdown by Category"}),a.categorySales.length===0?i.jsx("p",{style:{color:"var(--gray)",fontSize:"0.9rem",fontStyle:"italic",padding:"1rem 0"},children:"No sales data available yet."}):i.jsx("div",{className:"category-revenue-chart",children:a.categorySales.map((b,F)=>{const Se=Math.max(...a.categorySales.map($t=>$t.revenue))||1,Or=b.revenue/Se*100;return i.jsxs("div",{className:"chart-row",children:[i.jsx("span",{className:"chart-row-label",children:b.category_name}),i.jsx("div",{className:"chart-bar-wrapper",children:i.jsx("div",{className:"chart-bar",style:{width:`${Or}%`}})}),i.jsxs("span",{className:"chart-row-value",children:["INR ",parseFloat(b.revenue).toFixed(0)]})]},F)})})]})]})]}),r==="products"&&i.jsxs("div",{className:"panel-container animate-scale",children:[i.jsxs("div",{className:"panel-header-actions",children:[i.jsx("h2",{children:"Material Inventory"}),i.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Mo(null),children:[i.jsx(Rd,{size:16}),i.jsx("span",{children:"Add Product"})]})]}),i.jsx("div",{className:"table-responsive-wrapper",children:i.jsxs("table",{className:"data-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Image"}),i.jsx("th",{children:"Material Name"}),i.jsx("th",{children:"Category"}),i.jsx("th",{children:"Price (INR)"}),i.jsx("th",{children:"Stock Level"}),i.jsx("th",{children:"Min Level"}),i.jsx("th",{children:"Ftr / Best"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:o.map(b=>{const F=b.stock<=b.min_stock_level;return i.jsxs("tr",{className:F?"table-row-warning":"",children:[i.jsx("td",{children:i.jsx("img",{src:Bd(b.image_url),alt:"",className:"table-thumbnail"})}),i.jsx("td",{className:"font-bold",children:b.name}),i.jsx("td",{children:b.category_name}),i.jsxs("td",{children:[parseFloat(b.price).toFixed(2)," / ",b.unit]}),i.jsx("td",{children:i.jsxs("span",{className:`table-stock-badge ${F?"text-danger font-bold":""}`,children:[b.stock," ",b.unit,"s"]})}),i.jsx("td",{children:b.min_stock_level}),i.jsxs("td",{children:[b.is_featured===1&&i.jsx("span",{className:"tiny-badge bg-primary",children:"F"}),b.is_bestseller===1&&i.jsx("span",{className:"tiny-badge bg-secondary",children:"B"})]}),i.jsx("td",{children:i.jsxs("div",{className:"table-row-actions",children:[i.jsx("button",{className:"icon-btn edit-btn",onClick:()=>Mo(b),title:"Edit product",children:i.jsx(Dh,{size:14})}),i.jsx("button",{className:"icon-btn delete-btn",onClick:()=>Fd(b.id),title:"Delete product",children:i.jsx(Ri,{size:14})})]})})]},b.id)})})]})})]}),r==="categories"&&i.jsxs("div",{className:"panel-container animate-scale",children:[i.jsx("h2",{children:"Categories Settings"}),i.jsxs("div",{className:"categories-settings-layout",children:[i.jsxs("form",{className:"add-category-card",onSubmit:Dd,children:[i.jsx("h3",{children:"Add New Category"}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"cat-name",children:"Category Title *"}),i.jsx("input",{id:"cat-name",type:"text",className:"form-input",placeholder:"e.g. Plumbing Materials",value:$e,onChange:b=>rr(b.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"cat-desc",children:"Description"}),i.jsx("textarea",{id:"cat-desc",className:"form-input",rows:"3",placeholder:"Brief description of materials...",value:Ke,onChange:b=>At(b.target.value)})]}),i.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",style:{width:"100%"},children:"Add Category"})]}),i.jsxs("div",{className:"categories-list-card",children:[i.jsx("h3",{children:"Available Categories"}),i.jsx("div",{className:"categories-list",children:c.map(b=>i.jsxs("div",{className:"category-item-row",children:[i.jsxs("div",{children:[i.jsx("h4",{children:b.name}),i.jsx("p",{children:b.description||"No description provided."})]}),i.jsx("button",{className:"delete-cat-btn",onClick:()=>Ad(b.id),children:i.jsx(Ri,{size:16})})]},b.id))})]})]})]}),r==="orders"&&i.jsxs("div",{className:"panel-container animate-scale",children:[i.jsx("h2",{children:"Fulfillment & Customer Orders"}),i.jsx("div",{className:"table-responsive-wrapper",children:i.jsxs("table",{className:"data-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"ID"}),i.jsx("th",{children:"Client Name"}),i.jsx("th",{children:"Items Summary"}),i.jsx("th",{children:"Total Price"}),i.jsx("th",{children:"Payment"}),i.jsx("th",{children:"Delivery Address"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Actions"})]})}),i.jsx("tbody",{children:h.map(b=>i.jsxs("tr",{children:[i.jsxs("td",{children:["BM-",b.id.toString().padStart(5,"0")]}),i.jsxs("td",{children:[i.jsx("strong",{children:b.customer_name}),i.jsx("p",{style:{fontSize:"0.75rem",color:"var(--gray)"},children:b.customer_email})]}),i.jsx("td",{children:i.jsx("div",{className:"order-items-tooltip-list",children:b.items&&b.items.map(F=>i.jsx("div",{className:"tooltip-item-row",children:i.jsxs("span",{children:[F.quantity,"x ",F.product_name]})},F.id))})}),i.jsxs("td",{className:"font-bold",children:["INR ",parseFloat(b.total_amount).toFixed(2)]}),i.jsx("td",{className:"text-uppercase",children:b.payment_method}),i.jsxs("td",{children:[i.jsx("span",{className:"address-cell-text",title:b.shipping_address,children:b.shipping_address}),i.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--gray)"},children:["Tel: ",b.phone]})]}),i.jsx("td",{children:i.jsxs("select",{className:`status-dropdown status-select-${b.status.toLowerCase().replace(" ","-")}`,value:b.status,onChange:F=>$d(b.id,F.target.value),children:[i.jsx("option",{value:"Pending",children:"Pending"}),i.jsx("option",{value:"Packaging",children:"Packaging"}),i.jsx("option",{value:"In Transit",children:"In Transit"}),i.jsx("option",{value:"Delivered",children:"Delivered"}),i.jsx("option",{value:"Cancelled",children:"Cancelled"})]})}),i.jsx("td",{children:i.jsx("a",{href:`/api/invoices/${b.id}`,download:!0,className:"icon-btn edit-btn",style:{display:"inline-flex",alignHeight:"center"},title:"Download PDF invoice",children:i.jsx(Pd,{size:14})})})]},b.id))})]})})]}),r==="customers"&&i.jsxs("div",{className:"panel-container animate-scale",children:[i.jsx("h2",{children:"Registered Clients Database"}),i.jsx("div",{className:"table-responsive-wrapper",children:i.jsxs("table",{className:"data-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Client ID"}),i.jsx("th",{children:"Full Name"}),i.jsx("th",{children:"Email Address"}),i.jsx("th",{children:"Role Type"}),i.jsx("th",{children:"Registration Date"})]})}),i.jsx("tbody",{children:g.map(b=>i.jsxs("tr",{children:[i.jsxs("td",{children:["CL-",b.id.toString().padStart(4,"0")]}),i.jsx("td",{className:"font-bold",children:b.name}),i.jsx("td",{children:b.email}),i.jsx("td",{children:i.jsx("span",{className:"badge badge-info",children:b.role})}),i.jsx("td",{children:new Date(b.created_at).toLocaleString()})]},b.id))})]})})]})]})})]}),C&&i.jsx("div",{className:"modal-overlay animate-fade",children:i.jsxs("div",{className:"modal-content animate-scale",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h3",{children:d?"Edit Inventory Product":"Add Material Product"}),i.jsx("button",{className:"modal-close-btn",onClick:()=>f(!1),children:"×"})]}),i.jsxs("form",{onSubmit:Od,className:"modal-body-form",children:[i.jsxs("div",{className:"grid-cols-2",style:{gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-name",children:"Material Name *"}),i.jsx("input",{id:"modal-name",type:"text",className:"form-input",placeholder:"e.g. UltraTech Cement",value:j,onChange:b=>x(b.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-category",children:"Category *"}),i.jsxs("select",{id:"modal-category",className:"form-input",value:N,onChange:b=>z(b.target.value),required:!0,children:[i.jsx("option",{value:"",children:"Select Category"}),c.map(b=>i.jsx("option",{value:b.id,children:b.name},b.id))]})]})]}),i.jsxs("div",{className:"grid-cols-3",style:{gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-price",children:"Price (INR) *"}),i.jsx("input",{id:"modal-price",type:"number",className:"form-input",placeholder:"450.00",step:"0.01",value:_,onChange:b=>I(b.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-stock",children:"Initial Stock *"}),i.jsx("input",{id:"modal-stock",type:"number",className:"form-input",placeholder:"100",value:P,onChange:b=>$(b.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-unit",children:"Unit *"}),i.jsx("input",{id:"modal-unit",type:"text",className:"form-input",placeholder:"e.g. bag, pcs, box",value:ee,onChange:b=>M(b.target.value),required:!0})]})]}),i.jsxs("div",{className:"grid-cols-2",style:{gap:"1rem"},children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-min-stock",children:"Min Stock Level Warning *"}),i.jsx("input",{id:"modal-min-stock",type:"number",className:"form-input",value:et,onChange:b=>tt(b.target.value),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-image",children:"Product Image File"}),i.jsx("input",{id:"modal-image",type:"file",accept:"image/*",className:"form-input",onChange:b=>Dt(b.target.files[0])}),i.jsx("span",{className:"input-helper-text",children:"Select a JPG/PNG to upload to the server."})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",htmlFor:"modal-desc",children:"Description"}),i.jsx("textarea",{id:"modal-desc",className:"form-input",rows:"3",placeholder:"Material specs, usage instructions, strength ratings...",value:se,onChange:b=>Me(b.target.value)})]}),i.jsxs("div",{className:"form-group checkbox-row",style:{display:"flex",gap:"2rem"},children:[i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[i.jsx("input",{type:"checkbox",checked:E,onChange:b=>T(b.target.checked)}),i.jsx("strong",{children:"Is Featured Product"})]}),i.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer"},children:[i.jsx("input",{type:"checkbox",checked:O,onChange:b=>V(b.target.checked)}),i.jsx("strong",{children:"Is Bestselling Material"})]})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",className:"btn btn-outline btn-sm",onClick:()=>f(!1),children:"Cancel"}),i.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Save Product"})]})]})]})}),i.jsx("style",{children:`
        .admin-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
          align-items: flex-start;
        }
        
        .admin-sidebar {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .admin-icon-box {
          font-size: 1.75rem;
          background-color: var(--secondary-light);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .sidebar-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
        }
        .sidebar-header p {
          font-size: 0.75rem;
          color: var(--gray);
        }
        
        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .menu-btn {
          width: 100%;
          text-align: left;
          padding: 0.7rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          color: var(--dark-gray);
          transition: var(--transition-fast);
        }
        .menu-btn:hover {
          background-color: var(--bg-light);
          color: var(--primary);
        }
        .menu-btn.active {
          background-color: var(--primary);
          color: var(--bg-white);
          font-weight: 600;
        }

        .admin-main-viewport {
          background-color: var(--bg-white);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          min-height: 600px;
        }
        .panel-container h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        
        .analytics-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .summary-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          background-color: var(--bg-light);
        }
        .summary-card.text-secondary { border-left: 4px solid var(--secondary); }
        .summary-card.text-primary { border-left: 4px solid var(--primary); }
        .summary-card.text-success { border-left: 4px solid var(--success); }
        .summary-card.text-info { border-left: 4px solid var(--accent); }
        
        .card-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--gray);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .summary-card h3 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 0.25rem;
        }
        .summary-card p {
          font-size: 0.75rem;
          color: var(--gray);
        }

        .analytics-details-layout {
          display: grid;
          grid-template-columns: 1.1fr 1.5fr;
          gap: 2rem;
        }
        .analytics-sub-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
        }
        .sub-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .analytics-sub-card h4 {
          font-size: 1rem;
          font-weight: 700;
        }
        .success-stock-state {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--gray);
        }
        .success-stock-state p {
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
        .low-stock-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 250px;
          overflow-y: auto;
        }
        .low-stock-item {
          display: flex;
          justify-content: space-between;
          background-color: var(--bg-light);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          border-left: 3.5px solid var(--danger);
          font-size: 0.85rem;
        }
        .low-stock-item h5 {
          font-weight: 600;
        }
        .category-label {
          font-size: 0.7rem;
          color: var(--gray);
        }
        .stock-alert-values {
          font-weight: 600;
        }
        .stock-desc-label {
          font-size: 0.65rem;
          color: var(--gray);
          font-weight: normal;
        }

        .category-revenue-card h4 {
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .category-revenue-chart {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chart-row {
          display: grid;
          grid-template-columns: 130px 1fr 90px;
          align-items: center;
          gap: 1rem;
          font-size: 0.85rem;
        }
        .chart-row-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        .chart-bar-wrapper {
          height: 12px;
          background-color: var(--bg-light);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .chart-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          border-radius: var(--radius-full);
        }
        .chart-row-value {
          text-align: right;
          font-weight: 700;
          color: var(--dark);
        }

        .panel-header-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }
        .panel-header-actions h2 {
          border: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        /* Data Tables Styling */
        .table-responsive-wrapper {
          width: 100%;
          overflow-x: auto;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .data-table th {
          background-color: var(--bg-light);
          padding: 1rem 1.25rem;
          font-weight: 700;
          color: var(--dark-gray);
          border-bottom: 1.5px solid var(--border-color);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
        }
        .data-table td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--dark-gray);
        }
        .data-table tbody tr:hover {
          background-color: var(--bg-light);
        }
        .table-row-warning {
          background-color: #fffbeb;
        }
        .table-row-warning:hover {
          background-color: #fef3c7 !important;
        }
        .table-thumbnail {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          background-color: var(--bg-white);
        }
        .table-row-actions {
          display: flex;
          gap: 0.5rem;
        }
        .icon-btn {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          background-color: var(--bg-white);
          color: var(--gray);
        }
        .icon-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }
        .icon-btn.delete-btn:hover {
          color: var(--danger);
          border-color: var(--danger);
          background-color: #fef2f2;
        }
        
        .address-cell-text {
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .status-dropdown {
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.75rem;
          border: 1.5px solid var(--border-color);
          outline: none;
        }
        .status-select-pending { background-color: #fef3c7; color: #b45309; border-color: #fde68a; }
        .status-select-packaging { background-color: #e0f2fe; color: #0369a1; border-color: #bae6fd; }
        .status-select-in-transit { background-color: #e0e7ff; color: #4338ca; border-color: #c7d2fe; }
        .status-select-delivered { background-color: #d1fae5; color: #047857; border-color: #a7f3d0; }
        .status-select-cancelled { background-color: #fee2e2; color: #b91c1c; border-color: #fca5a5; }

        .categories-settings-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }
        .add-category-card, .categories-list-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
        }
        .add-category-card h3, .categories-list-card h3 {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 400px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .category-item-row {
          background-color: var(--bg-light);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .category-item-row h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .category-item-row p {
          font-size: 0.8rem;
          color: var(--gray);
        }
        .delete-cat-btn {
          color: var(--gray);
        }
        .delete-cat-btn:hover {
          color: var(--danger);
        }

        /* Modal Overlays */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 1050;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .modal-content {
          background-color: var(--bg-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 650px;
          overflow: hidden;
        }
        .modal-header {
          padding: 1.25rem 1.75rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--bg-light);
        }
        .modal-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }
        .modal-close-btn {
          font-size: 1.75rem;
          color: var(--gray);
          line-height: 1;
        }
        .modal-close-btn:hover {
          color: var(--dark);
        }
        .modal-body-form {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
          margin-top: 1rem;
        }
        .checkbox-row {
          margin-top: 0.5rem;
        }
        .font-bold { font-weight: 700; }
        .text-uppercase { text-transform: uppercase; }
        .text-danger { color: var(--danger); }
        .text-right { text-align: right; }

        @media (max-width: 1024px) {
          .admin-layout {
            grid-template-columns: 1fr;
          }
          .analytics-summary-grid {
            grid-template-columns: 1fr 1fr;
          }
          .analytics-details-layout {
            grid-template-columns: 1fr;
          }
          .categories-settings-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function ng(e){return i.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||24,height:e.size||24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"3",y1:"22",x2:"21",y2:"22"}),i.jsx("line",{x1:"6",y1:"18",x2:"6",y2:"11"}),i.jsx("line",{x1:"10",y1:"18",x2:"10",y2:"11"}),i.jsx("line",{x1:"14",y1:"18",x2:"14",y2:"11"}),i.jsx("line",{x1:"18",y1:"18",x2:"18",y2:"11"}),i.jsx("polygon",{points:"12 2 2 7 22 7"})]})}const ig=e=>{try{const r=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(r).split("").map(a=>"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch{return null}};function ag(){const[e,t]=y.useState(localStorage.getItem("bm_token")||null),[r,n]=y.useState(null),[a,l]=y.useState([]),[o,s]=y.useState([]),[c,u]=y.useState(null);y.useEffect(()=>{if(e){const x=ig(e);x&&x.exp*1e3>Date.now()?(n(x),localStorage.setItem("bm_token",e)):g()}else n(null),localStorage.removeItem("bm_token")},[e]),y.useEffect(()=>{r&&e?v():s([])},[r]),y.useEffect(()=>{const x=localStorage.getItem("bm_cart");if(x)try{l(JSON.parse(x))}catch{l([])}},[]);const h=x=>{l(x),localStorage.setItem("bm_cart",JSON.stringify(x))},m=(x,N="info")=>{u({message:x,type:N}),setTimeout(()=>{u(null)},3e3)},g=()=>{t(null),n(null),localStorage.removeItem("bm_token"),m("Logged out successfully.","info")},v=async()=>{try{const x=await fetch("/api/products/wishlist/items",{headers:{Authorization:`Bearer ${e}`}}),N=await x.json();x.ok&&s(N.wishlist||[])}catch(x){console.error("Wishlist loading failed",x)}},w=async x=>{if(!r){m("Please log in to add items to your wishlist.","warning");return}try{const N=await fetch("/api/products/wishlist/add",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({product_id:x})}),z=await N.json();N.ok?(m("Added to wishlist.","success"),v()):m(z.message||"Error updating wishlist.","warning")}catch{m("Connection failed. Wishlist not updated.","danger")}},k=async x=>{if(r)try{(await fetch(`/api/products/wishlist/remove/${x}`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`}})).ok&&(m("Removed from wishlist.","info"),v())}catch{m("Connection error.","danger")}},C=x=>{o.some(z=>z.product_id===x)?k(x):w(x)},f=(x,N=1)=>{const z=a.findIndex(_=>_.product_id===x.id);if(z!==-1){const _=a[z].quantity+N;if(_>x.stock){m(`Cannot add more. Stock limit: ${x.stock}`,"warning");return}const I=[...a];I[z].quantity=_,h(I)}else{if(N>x.stock){m(`Insufficient stock. Available: ${x.stock}`,"warning");return}h([...a,{product_id:x.id,name:x.name,price:x.price,image_url:x.image_url,quantity:N,unit:x.unit,stock:x.stock}])}m("Added to shopping cart.","success")},d=(x,N)=>{const z=a.findIndex(P=>P.product_id===x);if(z===-1)return;if(N<=0){p(x);return}const _=a[z];if(N>_.stock){m(`Cannot exceed current stock level of ${_.stock}`,"warning");return}const I=[...a];I[z].quantity=N,h(I)},p=x=>{const N=a.filter(z=>z.product_id!==x);h(N),m("Item removed from cart.","info")},j=()=>{h([])};return i.jsx(gh,{children:i.jsxs("div",{className:"app-container",children:[i.jsx(Hh,{user:r,logout:g,cartCount:a.reduce((x,N)=>x+N.quantity,0),wishlistCount:o.length}),i.jsx("main",{className:"main-content",children:i.jsxs(oh,{children:[i.jsx(Re,{path:"/",element:i.jsx(Qh,{addToCart:f,toggleWishlist:C,wishlist:o})}),i.jsx(Re,{path:"/catalog",element:i.jsx(Kh,{addToCart:f,toggleWishlist:C,wishlist:o})}),i.jsx(Re,{path:"/product/:id",element:i.jsx(Yh,{addToCart:f,toggleWishlist:C,wishlist:o,user:r,token:e,showToast:m})}),i.jsx(Re,{path:"/cart",element:i.jsx(Gh,{cart:a,updateCartQty:d,removeFromCart:p})}),i.jsx(Re,{path:"/checkout",element:r?i.jsx(Xh,{cart:a,user:r,token:e,clearCart:j,showToast:m}):i.jsx(Hr,{to:"/login?redirect=checkout"})}),i.jsx(Re,{path:"/order-tracking/:id",element:r?i.jsx(Zh,{token:e}):i.jsx(Hr,{to:"/login"})}),i.jsx(Re,{path:"/profile",element:r?i.jsx(Jh,{user:r,token:e,wishlist:o,removeFromWishlist:k,addToCart:f,logout:g}):i.jsx(Hr,{to:"/login"})}),i.jsx(Re,{path:"/login",element:i.jsx(eg,{setToken:t,user:r,showToast:m})}),i.jsx(Re,{path:"/contact",element:i.jsx(tg,{showToast:m})}),i.jsx(Re,{path:"/admin",element:r&&r.role==="admin"?i.jsx(rg,{token:e,showToast:m}):i.jsx(Hr,{to:"/"})}),i.jsx(Re,{path:"*",element:i.jsx(Hr,{to:"/"})})]})}),i.jsx(qh,{}),c&&i.jsxs("div",{className:"toast animate-fade",children:[i.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:c.type==="success"?"var(--success)":c.type==="warning"?"var(--warning)":c.type==="danger"?"var(--danger)":"var(--accent)"}}),i.jsx("span",{children:c.message})]})]})})}La.createRoot(document.getElementById("root")).render(i.jsx(dc.StrictMode,{children:i.jsx(ag,{})}));
