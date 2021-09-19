/*!
 * chartjs-plugin-datasource-prometheus v1.0.2
 * github.com/samber/chartjs-plugin-datasource-prometheus
 * (c) 2021 chartjs-plugin-datasource-prometheus Contributors
 * Released under the MIT License
 */
/*!
 * chartjs-plugin-datasource-prometheus v1.0.2
 * github.com/samber/chartjs-plugin-datasource-prometheus
 * (c) 2021 chartjs-plugin-datasource-prometheus Contributors
 * Released under the MIT License
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ChartDatasourcePrometheusPlugin=t()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;
/*!
	 * prometheus-query v3.0.2
	 * github.com/samber/prometheus-query-js
	 * (c) 2021 prometheus-query-js Contributors
	 * Released under the MIT License
	 */
var e=function(e){var t={exports:{}};return e(t,t.exports),t.exports}((function(e,t){!function(e){var t=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},r=Object.prototype.toString;function n(e){return"[object Array]"===r.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function a(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function i(e){return"[object Function]"===r.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var c={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:a,isUndefined:o,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:i,isStream:function(e){return s(e)&&i(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function r(r,o){a(t[o])&&a(r)?t[o]=e(t[o],r):a(r)?t[o]=e({},r):n(r)?t[o]=r.slice():t[o]=r}for(var o=0,s=arguments.length;o<s;o++)u(arguments[o],r);return t},extend:function(e,r,n){return u(r,(function(r,o){e[o]=n&&"function"==typeof r?t(r,n):r})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function l(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var f=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(c.isURLSearchParams(t))n=t.toString();else{var o=[];c.forEach(t,(function(e,t){null!=e&&(c.isArray(e)?t+="[]":e=[e],c.forEach(e,(function(e){c.isDate(e)?e=e.toISOString():c.isObject(e)&&(e=JSON.stringify(e)),o.push(l(t)+"="+l(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function d(){this.handlers=[]}d.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},d.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},d.prototype.forEach=function(e){c.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var p=d,h=function(e,t,r){return c.forEach(r,(function(r){e=r(e,t)})),e},m=function(e){return!(!e||!e.__CANCEL__)},g=function(e,t){c.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},y=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},b=c.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),c.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),c.isString(n)&&a.push("path="+n),c.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},w=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],v=c.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=c.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},x=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;c.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+i)}var u,l,d=(u=e.baseURL,l=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,l):l);if(s.open(e.method.toUpperCase(),f(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,a,i,u,l="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),u={},n?(c.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),o=c.trim(e.substr(0,i)).toLowerCase(),a=c.trim(e.substr(i+1)),o){if(u[o]&&w.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([a]):u[o]?u[o]+", "+a:a}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:l,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(y("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),s=null}},s.onabort=function(){s&&(r(y("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(y("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(y(t,e,"ECONNABORTED",s)),s=null},c.isStandardBrowserEnv()){var p=(e.withCredentials||v(d))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}if("setRequestHeader"in s&&c.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),c.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},E={"Content-Type":"application/x-www-form-urlencoded"};function T(e,t){!c.isUndefined(e)&&c.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var R,S={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(R=x),R),transformRequest:[function(e,t){return g(t,"Accept"),g(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(T(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)?(T(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],(function(e){S.headers[e]={}})),c.forEach(["post","put","patch"],(function(e){S.headers[e]=c.merge(E)}));var O=S;function A(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var N=function(e){return A(e),e.headers=e.headers||{},e.data=h(e.data,e.headers,e.transformRequest),e.headers=c.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),c.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||O.adapter)(e).then((function(t){return A(e),t.data=h(t.data,t.headers,e.transformResponse),t}),(function(t){return m(t)||(A(e),t&&t.response&&(t.response.data=h(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},j=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return c.isPlainObject(e)&&c.isPlainObject(t)?c.merge(e,t):c.isPlainObject(t)?c.merge({},t):c.isArray(t)?t.slice():t}function u(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}c.forEach(n,(function(e){c.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),c.forEach(o,u),c.forEach(s,(function(n){c.isUndefined(t[n])?c.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),c.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var l=n.concat(o).concat(s).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return c.forEach(f,u),r};function C(e){this.defaults=e,this.interceptors={request:new p,response:new p}}C.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=j(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[N,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},C.prototype.getUri=function(e){return e=j(this.defaults,e),f(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},c.forEach(["delete","get","head","options"],(function(e){C.prototype[e]=function(t,r){return this.request(j(r||{},{method:e,url:t,data:(r||{}).data}))}})),c.forEach(["post","put","patch"],(function(e){C.prototype[e]=function(t,r,n){return this.request(j(n||{},{method:e,url:t,data:r}))}}));var U=C;function D(e){this.message=e}D.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},D.prototype.__CANCEL__=!0;var q=D;function P(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new q(e),t(r.reason))}))}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},P.source=function(){var e;return{token:new P((function(t){e=t})),cancel:e}};var I=P;function B(e){var r=new U(e),n=t(U.prototype.request,r);return c.extend(n,U.prototype,r),c.extend(n,r),n}var M=B(O);M.Axios=U,M.create=function(e){return B(j(M.defaults,e))},M.Cancel=q,M.CancelToken=I,M.isCancel=m,M.all=function(e){return Promise.all(e)},M.spread=function(e){return function(t){return e.apply(null,t)}},M.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var k=M,L=M;k.default=L;var G,J=k;(G=e.ResponseType||(e.ResponseType={})).MATRIX="matrix",G.VECTOR="vector",G.SCALAR="scalar",G.STRING="string";class _{constructor(e,t){if(e&&"string"!=typeof e)throw new Error("Wrong name format. Expected string.");if(t&&"object"!=typeof t)throw new Error("Wrong labels format. Expected object.");this.name=e,this.labels=t}static fromJSON(e){const t=e.__name__,r=Object.assign({},e);return delete r.__name__,new _(t,r)}toString(){return(this.name?this.name:"")+"{"+Object.keys(this.labels).map((e=>e+'="'+this.labels[e]+'"')).join(", ")+"}"}}class ${constructor(e,t){if("object"!=typeof e||"Date"!=e.constructor.name)throw new Error("Wrong time format. Expected Date.");if("number"!=typeof t)throw new Error("Wrong value format. Expected float.");this.time=e,this.value=t}static fromJSON(e){const t=new Date(1e3*e[0]),r=parseFloat(e[1]);return new $(t,r)}toString(){return this.time+": "+this.value}}class F{constructor(e,t){this.metric=e,this.values=t}static fromJSON(e){const t=e.metric?_.fromJSON(e.metric):null,r=e.values.map($.fromJSON);return new F(t,r)}}class H{constructor(e,t){this.metric=e,this.value=t}static fromJSON(e){const t=e.metric?_.fromJSON(e.metric):null,r=$.fromJSON(e.value);return new H(t,r)}}class V{constructor(e,t){this.resultType=e,this.result=t}static fromJSON(t){const r=t.resultType;let n=null;switch(r){case e.ResponseType.MATRIX:n=t.result.map(F.fromJSON);break;case e.ResponseType.VECTOR:n=t.result.map(H.fromJSON);break;case e.ResponseType.SCALAR:case e.ResponseType.STRING:n=t.result;break;default:throw new Error(`Unexpected resultType: ${r}`)}return new V(r,n)}}class Q{constructor(e,t,r,n,o,s,a,i){if(e&&"object"!=typeof e)throw new Error(`Unexpected format for discoveredLabels. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for labels. Got ${typeof t} instead of object`);if(r&&"string"!=typeof r)throw new Error(`Unexpected format for scrapePool. Got ${typeof r} instead of string`);if(n&&"string"!=typeof n)throw new Error(`Unexpected format for scrapeUrl. Got ${typeof n} instead of string`);if(o&&"string"!=typeof o)throw new Error(`Unexpected format for lastError. Got ${typeof o} instead of string`);if(s&&("object"!=typeof s||"Date"!=s.constructor.name))throw new Error(`Unexpected format for lastScrape. Got ${typeof s} instead of object`);if(a&&"number"!=typeof a)throw new Error(`Unexpected format for lastScrapeDuration. Got ${typeof a} instead of number`);if(i&&"string"!=typeof i)throw new Error(`Unexpected format for health. Got ${typeof i} instead of string`);this.discoveredLabels=e,this.labels=t,this.scrapePool=r,this.scrapeUrl=n,this.lastError=o,this.lastScrape=s,this.lastScrapeDuration=a,this.health=i}static fromJSON(e){return new Q(e.discoveredLabels,e.labels,e.scrapePool,e.scrapeUrl,e.lastError,e.lastScrape?new Date(e.lastScrape):null,e.lastScrapeDuration?parseFloat(e.lastScrapeDuration):null,e.health)}}class z{constructor(e,t,r,n,o){if(e&&("object"!=typeof e||"Date"!=e.constructor.name))throw new Error(`Unexpected format for activeAt. Got ${typeof e} instead of object`);if(t&&"object"!=typeof t)throw new Error(`Unexpected format for annotations. Got ${typeof t} instead of object`);if(r&&"object"!=typeof r)throw new Error(`Unexpected format for labels. Got ${typeof r} instead of object`);if(o&&"number"!=typeof o)throw new Error(`Unexpected format for value. Got ${typeof o} instead of number`);this.activeAt=e,this.annotations=t,this.labels=r,this.state=n,this.value=o}static fromJSON(t){return new z(t.activeAt?new Date(t.activeAt):null,t.annotations,t.labels,e.ResponseType[t.state],t.value?parseFloat(t.value):null)}}class W{constructor(e,t,r,n,o,s,a,i){this.alerts=e,this.annotations=t,this.duration=r,this.health=n,this.labels=o,this.name=s,this.query=a,this.type=i}static fromJSON(e){return new W(e.alerts?e.alerts.map(z.fromJSON):[],e.annotations,e.duration,e.health,e.labels,e.name,e.query,e.type)}}class X{constructor(e,t,r,n){this.rules=e,this.file=t,this.interval=r,this.name=n}static fromJSON(e){return new X(e.rules?e.rules.map(W.fromJSON):[],e.file,e.interval,e.name)}}class K{constructor(){this.baseURL="/api/v1/",this.headers={},this.auth=null,this.proxy=null,this.withCredentials=!1,this.timeout=1e4,this.warningHook=null}}e.Alert=z,e.InstantVector=H,e.Metric=_,e.PrometheusConnectionOptions=K,e.PrometheusDriver=class{constructor(e){if(!(e=e||new K).endpoint)throw"Endpoint is required";e.endpoint=e.endpoint.replace(/\/$/,""),e.baseURL=e.baseURL||"/api/v1/",e.withCredentials=e.withCredentials||!1,e.timeout=e.timeout||1e4,this.options=e}request(e,t,r,n){var o,s,a,i,u,c;const l=Object.assign({},this.options.headers||{});return J.request({baseURL:this.options.endpoint+this.options.baseURL,url:t,method:e,params:r,data:n,headers:l,auth:(null===(o=this.options.auth)||void 0===o?void 0:o.username)&&(null===(s=this.options.auth)||void 0===s?void 0:s.password)?{username:this.options.auth.username,password:this.options.auth.password}:null,proxy:(null===(a=this.options.proxy)||void 0===a?void 0:a.host)&&(null===(i=this.options.proxy)||void 0===i?void 0:i.port)?{host:null===(u=this.options.proxy)||void 0===u?void 0:u.host,port:null===(c=this.options.proxy)||void 0===c?void 0:c.port}:null,withCredentials:this.options.withCredentials,timeout:this.options.timeout}).then((e=>this.handleResponse(e))).catch((e=>this.handleResponse(e)))}handleResponse(e){const t=e.isAxiosError||!1;if(t&&(e=e.response),!e)throw{status:"error",errorType:"unexpected_error",error:"unexpected http error"};this.options.warningHook&&e.warnings&&e.warnings.length>0&&this.options.warningHook(e.warnings);const r=e.data;if(!r||null==r.status)throw{status:"error",errorType:"client_error",error:"unexpected client error"};if(t)throw e;return r.data}formatTimeToPrometheus(e,t){var r;if(e||(e=t),"number"==typeof e)return e/1e3;if("object"==typeof e&&"Date"==(null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.name))return e.getTime()/1e3;throw new Error("Wrong time format. Expected number or Date.")}instantQuery(e,t){const r={query:e,time:this.formatTimeToPrometheus(t,new Date)};return this.request("GET","query",r).then((e=>V.fromJSON(e)))}rangeQuery(e,t,r,n){const o={query:e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r),step:n};return this.request("GET","query_range",o).then((e=>V.fromJSON(e)))}series(e,t,r){const n={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("GET","series",n).then((e=>e.map(_.fromJSON)))}labelNames(){return this.request("GET","labels")}labelValues(e){return this.request("GET",`label/${e}/values`)}targets(e){const t={query:e||"any"};return this.request("GET","targets",t).then((e=>({activeTargets:e.activeTargets?e.activeTargets.map(Q.fromJSON):[],droppedTargets:e.droppedTargets?e.droppedTargets.map(Q.fromJSON):[]})))}targetsMetadata(e,t,r){const n={match_target:e,metric:t,limit:r};return this.request("GET","targets/metadata",n)}metadata(e,t){const r={metric:e,limit:t};return this.request("GET","metadata",r)}rules(){return this.request("GET","rules").then((e=>(e.groups?e.groups:[]).map(X.fromJSON)))}alerts(){return this.request("GET","alerts").then((e=>(e.alerts?e.alerts:[]).map(z.fromJSON)))}alertmanagers(){return this.request("GET","alertmanagers")}status(){return this.request("GET","status/config")}statusFlags(){return this.request("GET","status/flags")}statusRuntimeInfo(){return this.request("GET","status/runtimeinfo")}statusBuildinfo(){return this.request("GET","status/buildinfo")}statusTSDB(){return this.request("GET","status/tsdb")}adminSnapshot(e){const t={skip_head:e};return this.request("POST","admin/tsdb/snapshot",t)}adminDeleteSeries(e,t,r){const n={"match[]":e,start:this.formatTimeToPrometheus(t),end:this.formatTimeToPrometheus(r)};return this.request("POST","admin/tsdb/delete_series",n)}adminCleanTombstones(){return this.request("POST","admin/tsdb/clean_tombstones")}},e.QueryResult=V,e.RangeVector=F,e.Rule=W,e.RuleGroup=X,e.SampleValue=$,e.Target=Q,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));var t={getPrometheusStepAuto:(e,t,r)=>{const n=(t.getTime()-e.getTime())/1e3,o=25*Math.floor(n/r);return o<1?1:o},getStartAndEndDates(e){if(e.type=e.type?e.type:"absolute","absolute"===e.type)return{type:"absolute",start:e.start,end:e.end};if("relative"===e.type)return{type:"absolute",start:new Date((new Date).getTime()+e.start),end:new Date((new Date).getTime()+e.end)};throw new Error("Unexpected options.timeRange value.")},executeQueries:(t,r,n,o,s)=>{const a=null!=r.find((e=>"string"==typeof e)),i=t&&a?new e.PrometheusDriver(t):null;return r.map((t=>"string"==typeof t?i.rangeQuery(t,n,o,s):t(n,o,s).then((t=>e.QueryResult.fromJSON(t)))))}};class r{constructor(){this.message="No data to display",this.font="16px normal 'Helvetica Nueue'",this.textAlign="center",this.textBaseline="middle",this.direction="ltr"}}class n{constructor(){this.message=null,this.font="16px normal 'Helvetica Nueue'",this.textAlign="center",this.textBaseline="middle",this.direction="ltr"}}class o{constructor(){this.prometheus=null,this.fillGaps=!1,this.tension=.4,this.cubicInterpolationMode="default",this.stepped=!1,this.fill=!1,this.borderWidth=3,this.borderColor=["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],this.backgroundColor=["transparent","transparent","transparent","transparent","transparent","transparent","transparent","transparent"],this.noDataMsg=new r,this.errorMsg=new n,this.findInLabelMap=null,this.findInBorderColorMap=null,this.findInBackgroundColorMap=null,this.dataSetHook=null}assertPluginOptions(){if(!this.query)throw new Error("options.query is undefined");if(!this.timeRange)throw new Error("options.timeRange is undefined");if(null==this.timeRange.start)throw new Error("options.timeRange.start is undefined");if(null==this.timeRange.end)throw new Error("options.timeRange.end is undefined");if("object"!=typeof this.timeRange)throw new Error("options.timeRange must be a object");if("string"!=typeof this.timeRange.type)throw new Error("options.timeRange.type must be a string");if("relative"!=this.timeRange.type&&"absolute"!=this.timeRange.type)throw new Error('options.timeRange.type must be either "relative" or "absolute"');if("number"!=typeof this.timeRange.start&&("object"!=typeof this.timeRange.start||"Date"!=this.timeRange.start.constructor.name))throw new Error("options.timeRange.start must be a Date object (absolute) or integer (relative)");if("number"!=typeof this.timeRange.end&&("object"!=typeof this.timeRange.end||"Date"!=this.timeRange.end.constructor.name))throw new Error("options.timeRange.end must be a Date object (absolute) or integer (relative)");if(null!=this.timeRange.msUpdateInterval&&"number"!=typeof this.timeRange.msUpdateInterval)throw new Error("options.timeRange.msUpdateInterval must be a integer");if(null!=this.timeRange.msUpdateInterval&&this.timeRange.msUpdateInterval<1e3)throw new Error("options.timeRange.msUpdateInterval must be greater than 1s.")}getQueries(){var e,t;return"Array"!=(null===(t=null===(e=this.query)||void 0===e?void 0:e.constructor)||void 0===t?void 0:t.name)?[this.query]:this.query}}function s(e){e.config.options.scales=e.config.options.scales?e.config.options.scales:{},e.config.options.scales.xAxes=e.config.options.scales.xAxes&&e.config.options.scales.xAxes.length>0?e.config.options.scales.xAxes:[{}],e.config.options.scales.xAxes[0].time=e.config.options.scales.xAxes[0].time?e.config.options.scales.xAxes[0].time:{},e.config.options.scales.xAxes[0].type="time",e.config.options.scales.xAxes[0].distribution=e.config.options.scales.xAxes[0].distribution||"linear",e.config.options.scales.xAxes[0].time.minUnit=e.config.options.scales.xAxes[0].time.minUnit||"second"}function a(e,t,r){const n=t.metric.toString();return e.findInLabelMap&&e.findInLabelMap(t.metric)||n}function i(e,t,r){const n=e.backgroundColor[r%e.backgroundColor.length];return e.findInBackgroundColorMap&&e.findInBackgroundColorMap(t.metric)||n}function u(e,t,r){const n=e.borderColor[r%e.borderColor.length];return e.findInBorderColorMap&&e.findInBorderColorMap(t.metric)||n}class c{constructor(){this.loading=!1,this.updateInterval=null,this.error=null}}return new class{constructor(){this.id="datasource-prometheus"}beforeInit(e,t){e["datasource-prometheus"]=new c}afterInit(e,t){if("line"!=e.config.type)throw"ChartDatasourcePrometheusPlugin is already compatible with Line chart\nFeel free to contribute for more!";if(!t)throw"ChartDatasourcePrometheusPlugin.options is undefined";const r=Object.assign(new o,t);r.assertPluginOptions(),r&&r.timeRange&&(r.timeRange.msUpdateInterval?e["datasource-prometheus"].updateInterval=setInterval((()=>{e.update()}),r.timeRange.msUpdateInterval):e.update())}beforeUpdate(e,r){if(e["datasource-prometheus"]&&1==e["datasource-prometheus"].loading)return;const n=Object.assign(new o,r),c=n.prometheus,l=n.getQueries(),{start:f,end:d}=t.getStartAndEndDates(n.timeRange),p=n.timeRange.step||t.getPrometheusStepAuto(f,d,e.width),h=n.timeRange.minStep||p,m=h>=p?h:p;if(e["datasource-prometheus"]&&e["datasource-prometheus"].step==m&&e["datasource-prometheus"].start==f&&e["datasource-prometheus"].end==d)return;e["datasource-prometheus"].step=m,e["datasource-prometheus"].start=f,e["datasource-prometheus"].end=d,e["datasource-prometheus"].error=null;const g=t.executeQueries(c,l,f,d,m);let y={};if(e.data.datasets.length>0)for(let t in e.data.datasets){const r=e.data.datasets[t];let n=0;for(let e in r._meta)n=e;y[r.label]=!e.isDatasetVisible(r._meta[n].index)}const b=e.config.options.scales.yAxes;Promise.all(g).then((t=>{const r=t.reduce(((e,t,r)=>{if(0==t.result.length)return e;const o=e.length,s=t.result.map(((e,t)=>({yAxisID:b&&b.length>0?b[r%b.length].id:null,tension:n.tension,cubicInterpolationMode:n.cubicInterpolationMode||"default",stepped:n.stepped,fill:n.fill||!1,label:a(n,e),data:e.values.map(((e,t)=>({t:e.time,y:e.value}))),backgroundColor:i(n,e,o+t),borderColor:u(n,e,o+t),borderWidth:n.borderWidth,hidden:y[a(n,e)]||!1})));return e.concat(...s)}),[]);e.data.datasets=r,e.data.datasets.length>0&&(n.fillGaps&&function(e,t,r,n,o){let s=o.timeRange.minStep||n;s=s>=n?s:n,e.data.datasets.forEach(((n,o)=>{for(let e=n.data.length-2;e>0;e--)if(n.data[e+1].t-n.data[e].t>1100*s)for(let t=(n.data[e+1].t-n.data[e].t)/(1e3*s);t>1;t--){const t={t:new Date(n.data[e+1].t.getTime()-1e3*s),v:Number.NaN};n.data.splice(e+1,0,t)}if(Math.abs(t.getTime()-n.data[0].t)>1100*s)for(let r=Math.abs(t.getTime()-n.data[0].t)/(1e3*s);r>1;r--)e.data.datasets[o].data.unshift({t:new Date(n.data[0].t.getTime()-1e3*s),v:Number.NaN});if(Math.abs(r.getTime()-n.data[n.data.length-1].t)>1100*s)for(let t=Math.abs(r.getTime()-n.data[n.data.length-1].t)/(1e3*s);t>1;t--)e.data.datasets[o].data.push({t:new Date(n.data[e.data.datasets[o].data.length-1].t.getTime()+1e3*s),v:Number.NaN})}))}(e,f,d,m,n),n.dataSetHook&&(e.data.datasets=n.dataSetHook(e.data.datasets)),s(e),e["datasource-prometheus"].loading=!0,e.update(),e["datasource-prometheus"].loading=!1)})).catch((t=>{throw e.data.datasets=[],s(e),e["datasource-prometheus"].error="Failed to fetch data",t}))}beforeRender(e,t){var r;const n=Object.assign(new o,t);if(null!=e["datasource-prometheus"].error){const t=e.ctx,o=e.width,s=e.height;return e.clear(),t.save(),t.direction=n.errorMsg.direction,t.textAlign=n.errorMsg.textAlign,t.textBaseline=n.errorMsg.textBaseline,t.font="16px normal 'Helvetica Nueue'",t.fillText((null===(r=n.errorMsg)||void 0===r?void 0:r.message)||e["datasource-prometheus"].error,o/2,s/2),void t.restore()}if(0==e.data.datasets.length){const t=e.ctx,r=e.width,o=e.height;return e.clear(),t.save(),t.direction=n.noDataMsg.direction,t.textAlign=n.noDataMsg.textAlign,t.textBaseline=n.noDataMsg.textBaseline,t.font=n.noDataMsg.font,t.fillText(n.noDataMsg.message,r/2,o/2),void t.restore()}}destroy(e){e["datasource-prometheus"].updateInterval&&clearInterval(e["datasource-prometheus"].updateInterval)}}}));
//# sourceMappingURL=chartjs-plugin-datasource-prometheus.umd.js.map
