import{r as l,f as xt,b as Cn,e as Tn,g as At,j as w,M as Y,a5 as Ct}from"./fs6h2trisr1juto6.js";import{fM as D,R as nn,h8 as tn,fX as je,e as _n,eh as kn,v as En,aJ as Tt,V as Dn,W as In,I as _t,$ as on,am as Ue,F as Ne,E as Oe,a0 as kt,dA as Et,h9 as Dt,gw as It,bX as Pt,gy as Rt,c8 as rn,cL as Pn,d as ae,c5 as ve,cD as an,j as Mt,cN as Ft,P as Lt,dx as Ut,D as Nt,cG as Ot}from"./njq6ygky3ttysgdk.js";import{cU as qe,fY as zt,hR as Rn,H as ge,fZ as Vt,p as Mn,p_ as Bt,p$ as jt,d as qt,ec as Wt,k as Ht,dV as $t,ja as Gt}from"./d7a6rc8fexfzu7dt.js";import{u as Xt}from"./e3h9yvwr92nxzy63.js";import{V as Z,i as Fn,a as C,P as T,b as q,j as Yt,R as Kt,g as se,u as Jt,e as Qt,m as Ln,h as Zt,T as ke}from"./mqk4d73u62uob59y.js";import{b as eo}from"./wqepkoieaii7q4ep.js";var W=(e=>(e.StateUpdate="state_update",e.ActionRequest="action_request",e.ConversationUpdate="conversation_update",e.RelayMessage="relay_message",e.Unknown="unknown",e.UsageUpdate="usage_update",e.ToolUpdate="tool_update",e.TurnContext="turn_context",e.Performance="performance",e))(W||{}),B=(e=>(e.StartListeningIntently="start_listening",e.StopListeningIntently="stop_listening",e.HaltAllActivity="stop_speaking",e.ResumeListening="resume_listening",e.RelayMessage="relay_message",e))(B||{}),L=(e=>(e.Connecting="connecting",e.Idle="idle",e.Connected="connected",e.Halted="halted",e.Listening="listening",e.ListeningIntently="listening_intently",e.Thinking="thinking",e.Speaking="speaking",e))(L||{}),ze=(e=>(e.Add="add",e.Remove="remove",e))(ze||{});const no=window.location.origin+"/voice";class Un{static async getVoiceToken(n,t,o){const r={eventSource:t,voice:n.voice,voice_mode:n.voice_mode??"undefined",voice_session_id:n.voice_session_id},i=performance.now();return D.getToken.request(r),nn.post(`${no}/get_token`,n,{additionalHeaders:o?{[tn.ProofToken]:o}:{}}).then(a=>{const s=performance.now()-i;return D.getToken.success({...r,durationMs:s}),a}).catch(a=>{const s=performance.now()-i;throw D.getToken.failure({...r,durationMs:s,error:a?.message,voice_session_id:n.voice_session_id}),a})}static async getVoiceStatus(n,t){const o={eventSource:t,requested_voice_mode:n.requested_voice_mode??"null"},r=await je.getRequirementsToken();return D.getVoiceStatus.request(o),nn.safePost("/conversation/voice/status",{parameters:{},requestBody:n,additionalHeaders:{[tn.ProofToken]:r}}).then(i=>(D.getVoiceStatus.success(o),i)).catch(i=>{throw D.getVoiceStatus.failure({...o,error:i?.message}),i})}}class to{logger=Z.createChild("VoiceTurnContext");publish=async()=>{throw new Error("VoiceTurnContext does not have a set publisher.")};store=_n(kn(En(()=>({parts:{},attachments:{}}))));useState(n){return this.store(n||(t=>t))}setPublisher(n){this.publish=n}async add({parts:n,attachments:t}){if(!n&&!t)return;let o={},r={};t&&(o=Object.fromEntries(t.map(a=>[this.makeId("attachment"),a]))),n&&(r=Object.fromEntries(n.map(a=>[this.makeId("part"),a])));const i={type:W.TurnContext,payload:{type:W.TurnContext,action:ze.Add,attachments:o,parts:r}};await this.publish(i),this.store.setState(a=>{a.parts=Object.assign(a.parts,r),a.attachments=Object.assign(a.attachments,o)}),this.logger.info("Added",{payload:i})}async remove({parts:n,attachments:t}){if(!n&&!t)return;this.logger.info("Removing turn context attachment",{parts:n,attachments:t});let o={},r={};const i=this.store.getState();t&&t.forEach(s=>{i.attachments[s]&&(o[s]=i.attachments[s])}),n&&n.forEach(s=>{i.parts[s]&&(r[s]=i.parts[s])});const a={type:W.TurnContext,payload:{type:W.TurnContext,action:ze.Remove,attachments:o,parts:r}};this.publish(a),this.store.setState(s=>{Object.keys(r).forEach(c=>{delete s.parts[c]}),Object.keys(o).forEach(c=>{delete s.attachments[c]})}),this.logger.info("Removed",{payload:a})}async clear(){this.store.setState(n=>{n.parts={},n.attachments={}}),this.logger.info("Cleared")}makeId(n){return`client:${n?`${n}:`:""}${Date.now()}-${Math.random().toString(36).substring(2,15)}`}}const We={conversationId:null,voiceSessionId:null,isActivityHalted:!1,isVoiceModeActive:!1,video:null,screenshare:null,dev:{room:null},credentials:{token:null,url:null,e2eeKey:null},server:{actions:null,connectionState:null,remoteState:null,messages:[],usage:null,toolUpdate:null,voiceConnectionQuality:null,turnContext:new to},disconnectPending:void 0},oo=e=>_n(kn(En(()=>We))),ro=oo(),io=l.createContext(null);function O(){return l.useContext(io)??ro}function j(e){return O()(e)}function ao(){return j(e=>!!(e.credentials.token&&e.credentials.url&&e.credentials.e2eeKey&&e.server.remoteState))}function so(){return O()(n=>n.voiceStatus)}function co(){const{voiceName:e}=qe(),n=O();return async function(t,o){const r=await Un.getVoiceStatus({...t,timezone_offset_min:new Date().getTimezoneOffset(),nonce:Tt(),voice:t.voice??e},o);return r?.chatreq&&je.startEnforcement(r?.chatreq),n.setState({voiceStatus:r}),r}}function qi(){const[e,n]=l.useState(!1),t=O(),o=l.useCallback(async()=>{n(!0);const r=t.getState().dev.room;if(r){const i=r.localParticipant.isMicrophoneEnabled,a=i?"mute":"unmute";D.toggleMuteButton.click({toggleTo:a});try{await r.localParticipant.setMicrophoneEnabled(!i)}finally{n(!1)}}},[t]);return{isMuting:e,toggleMute:o}}function Ee(e,n){if(e){const{credentials:t,conversationId:o,voiceSessionId:r,voiceMode:i}=e;Z.debug("setting credentials",e),n.setState(a=>{a.conversationId=o,a.credentials=t,a.voiceSessionId=r,a.voiceMode=i});return}Z.debug("clearing credentials"),Nn(n)}function uo(){const e=j(i=>i.video!=null),n=j(i=>i.video==="starting"),t=O(),o=l.useCallback(i=>{t.setState(a=>{const s=a.video?"off":"on";D.toggleVideoButton.click({eventSource:i,toggleTo:s}),a.video?a.video=null:(a.screenshare&&(a.screenshare=null),a.video="starting")})},[t]),r=l.useCallback(i=>{t.setState(a=>{i?a.video="enabled":a.video=null})},[t]);return{isVideoEnabled:e,isStartingVideo:n,endStartingVideo:r,toggleVideo:o}}function lo(){const e=j(i=>i.screenshare!=null),n=j(i=>i.screenshare==="starting"),t=O(),o=l.useCallback(i=>{t.setState(a=>{const s=a.screenshare?"off":"on";D.toggleScreenShareButton.click({eventSource:i,toggleTo:s}),a.screenshare?a.screenshare=null:(a.video&&(a.video=null),a.screenshare="starting")})},[t]),r=l.useCallback(i=>{t.setState(a=>{i?a.screenshare="enabled":a.screenshare=null})},[t]);return{isScreenshareEnabled:e,isScreenshareStarting:n,toggleScreenShare:o,endStartingScreenshare:r}}function Nn(e){e.setState(n=>({...We,isVoiceModeActive:n.isVoiceModeActive}))}function fo(e){const n=e.default_voice_mode,t=e.modes.find(o=>o.mode===n);if(!t)throw new Error("Voice status returned a default_voice_mode that does not exist in the modes array");return t}const po=()=>{const e=Dn(),n=O(),t=l.useCallback(()=>n.getState().isVoiceModeActive,[n]);return l.useMemo(()=>new Proxy(e,{get(o,r){const i=o[r];return t()||r==="closeAll"?i:()=>{}}}),[t,e])};function On(){const e=so();if(!e)return{video:!1,screenshare:!1};const n=fo(e);return{video:n?.features?.video??!1,screenshare:n?.features?.screen_sharing??!1}}var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zn={exports:{}};(function(e){(function(n,t){e.exports?e.exports=t():n.log=t()})(vo,function(){var n=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],i={},a=null;function s(p,m){var v=p[m];if(typeof v.bind=="function")return v.bind(p);try{return Function.prototype.bind.call(v,p)}catch{return function(){return Function.prototype.apply.apply(v,[p,arguments])}}}function c(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(p){return p==="debug"&&(p="log"),typeof console===t?!1:p==="trace"&&o?c:console[p]!==void 0?s(console,p):console.log!==void 0?s(console,"log"):n}function f(){for(var p=this.getLevel(),m=0;m<r.length;m++){var v=r[m];this[v]=m<p?n:this.methodFactory(v,p,this.name)}if(this.log=this.debug,typeof console===t&&p<this.levels.SILENT)return"No console available for logging"}function h(p){return function(){typeof console!==t&&(f.call(this),this[p].apply(this,arguments))}}function b(p,m,v){return u(p)||h.apply(this,arguments)}function d(p,m){var v=this,y,S,k,x="loglevel";typeof p=="string"?x+=":"+p:typeof p=="symbol"&&(x=void 0);function E(_){var P=(r[_]||"silent").toUpperCase();if(!(typeof window===t||!x)){try{window.localStorage[x]=P;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+P+";"}catch{}}}function A(){var _;if(!(typeof window===t||!x)){try{_=window.localStorage[x]}catch{}if(typeof _===t)try{var P=window.document.cookie,G=encodeURIComponent(x),X=P.indexOf(G+"=");X!==-1&&(_=/^([^;]+)/.exec(P.slice(X+G.length+1))[1])}catch{}return v.levels[_]===void 0&&(_=void 0),_}}function I(){if(!(typeof window===t||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function U(_){var P=_;if(typeof P=="string"&&v.levels[P.toUpperCase()]!==void 0&&(P=v.levels[P.toUpperCase()]),typeof P=="number"&&P>=0&&P<=v.levels.SILENT)return P;throw new TypeError("log.setLevel() called with invalid level: "+_)}v.name=p,v.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},v.methodFactory=m||b,v.getLevel=function(){return k??S??y},v.setLevel=function(_,P){return k=U(_),P!==!1&&E(k),f.call(v)},v.setDefaultLevel=function(_){S=U(_),A()||v.setLevel(_,!1)},v.resetLevel=function(){k=null,I(),f.call(v)},v.enableAll=function(_){v.setLevel(v.levels.TRACE,_)},v.disableAll=function(_){v.setLevel(v.levels.SILENT,_)},v.rebuild=function(){if(a!==v&&(y=U(a.getLevel())),f.call(v),a===v)for(var _ in i)i[_].rebuild()},y=U(a?a.getLevel():"WARN");var F=A();F!=null&&(k=U(F)),f.call(v)}a=new d,a.getLogger=function(p){if(typeof p!="symbol"&&typeof p!="string"||p==="")throw new TypeError("You must supply a name when creating a logger.");var m=i[p];return m||(m=i[p]=new d(p,a.methodFactory)),m};var g=typeof window!==t?window.log:void 0;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=g),a},a.getLoggers=function(){return i},a.default=a,a})})(zn);var ho=zn.exports;const go=mo(ho);var Ve=function(e,n){return Ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},Ve(e,n)};function $(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Ve(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function bo(e,n,t,o){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function s(f){try{u(o.next(f))}catch(h){a(h)}}function c(f){try{u(o.throw(f))}catch(h){a(h)}}function u(f){f.done?i(f.value):r(f.value).then(s,c)}u((o=o.apply(e,[])).next())})}function Vn(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(f){return c([u,f])}}function c(u){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(t=0)),t;)try{if(o=1,r&&(i=u[0]&2?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,r=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1],i=u;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(u);break}i[2]&&t.ops.pop(),t.trys.pop();continue}u=n.call(e,t)}catch(f){u=[6,f],r=0}finally{o=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function ee(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function be(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),r,i=[],a;try{for(;(n===void 0||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i}function ye(e,n,t){if(arguments.length===2)for(var o=0,r=n.length,i;o<r;o++)(i||!(o in n))&&(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}function Q(e){return this instanceof Q?(this.v=e,this):new Q(e)}function yo(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),r,i=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(d){return function(g){return Promise.resolve(g).then(d,h)}}function s(d,g){o[d]&&(r[d]=function(p){return new Promise(function(m,v){i.push([d,p,m,v])>1||c(d,p)})},g&&(r[d]=g(r[d])))}function c(d,g){try{u(o[d](g))}catch(p){b(i[0][3],p)}}function u(d){d.value instanceof Q?Promise.resolve(d.value.v).then(f,h):b(i[0][2],d)}function f(d){c("next",d)}function h(d){c("throw",d)}function b(d,g){d(g),i.shift(),i.length&&c(i[0][0],i[0][1])}}function So(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof ee=="function"?ee(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(a){return new Promise(function(s,c){a=e[i](a),r(s,c,a.done,a.value)})}}function r(i,a,s,c){Promise.resolve(c).then(function(u){i({value:u,done:s})},a)}}function M(e){return typeof e=="function"}function He(e){var n=function(o){Error.call(o),o.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var De=He(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(t,o){return o+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Se(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var ce=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,o,r,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=ee(a),c=s.next();!c.done;c=s.next()){var u=c.value;u.remove(this)}}catch(p){n={error:p}}finally{try{c&&!c.done&&(t=s.return)&&t.call(s)}finally{if(n)throw n.error}}else a.remove(this);var f=this.initialTeardown;if(M(f))try{f()}catch(p){i=p instanceof De?p.errors:[p]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var b=ee(h),d=b.next();!d.done;d=b.next()){var g=d.value;try{sn(g)}catch(p){i=i??[],p instanceof De?i=ye(ye([],be(i)),be(p.errors)):i.push(p)}}}catch(p){o={error:p}}finally{try{d&&!d.done&&(r=b.return)&&r.call(b)}finally{if(o)throw o.error}}}if(i)throw new De(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)sn(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&Se(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&Se(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),Bn=ce.EMPTY;function jn(e){return e instanceof ce||e&&"closed"in e&&M(e.remove)&&M(e.add)&&M(e.unsubscribe)}function sn(e){M(e)?e():e.unsubscribe()}var qn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},wo={setTimeout:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return setTimeout.apply(void 0,ye([e,n],be(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function Wn(e){wo.setTimeout(function(){throw e})}function cn(){}function he(e){e()}var $e=function(e){$(n,e);function n(t){var o=e.call(this)||this;return o.isStopped=!1,t?(o.destination=t,jn(t)&&t.add(o)):o.destination=To,o}return n.create=function(t,o,r){return new Be(t,o,r)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(ce),xo=Function.prototype.bind;function Ie(e,n){return xo.call(e,n)}var Ao=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(o){me(o)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(o){me(o)}else me(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){me(t)}},e}(),Be=function(e){$(n,e);function n(t,o,r){var i=e.call(this)||this,a;if(M(t)||!t)a={next:t??void 0,error:o??void 0,complete:r??void 0};else{var s;i&&qn.useDeprecatedNextContext?(s=Object.create(t),s.unsubscribe=function(){return i.unsubscribe()},a={next:t.next&&Ie(t.next,s),error:t.error&&Ie(t.error,s),complete:t.complete&&Ie(t.complete,s)}):a=t}return i.destination=new Ao(a),i}return n}($e);function me(e){Wn(e)}function Co(e){throw e}var To={closed:!0,next:cn,error:Co,complete:cn},Ge=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Hn(e){return e}function _o(e){return e.length===0?Hn:e.length===1?e[0]:function(n){return e.reduce(function(t,o){return o(t)},n)}}var z=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,o){var r=this,i=Eo(n)?n:new Be(n,t,o);return he(function(){var a=r,s=a.operator,c=a.source;i.add(s?s.call(i,c):c?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var o=this;return t=un(t),new t(function(r,i){var a=new Be({next:function(s){try{n(s)}catch(c){i(c),a.unsubscribe()}},error:i,complete:r});o.subscribe(a)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Ge]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return _o(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=un(n),new n(function(o,r){var i;t.subscribe(function(a){return i=a},function(a){return r(a)},function(){return o(i)})})},e.create=function(n){return new e(n)},e}();function un(e){var n;return(n=e??qn.Promise)!==null&&n!==void 0?n:Promise}function ko(e){return e&&M(e.next)&&M(e.error)&&M(e.complete)}function Eo(e){return e&&e instanceof $e||ko(e)&&jn(e)}function Do(e){return M(e?.lift)}function ue(e){return function(n){if(Do(n))return n.lift(function(t){try{return e(t,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function we(e,n,t,o,r){return new Io(e,n,t,o,r)}var Io=function(e){$(n,e);function n(t,o,r,i,a,s){var c=e.call(this,t)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=o?function(u){try{o(u)}catch(f){t.error(f)}}:e.prototype._next,c._error=i?function(u){try{i(u)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=r?function(){try{r()}catch(u){t.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,c}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;e.prototype.unsubscribe.call(this),!o&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}($e),Po=He(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),$n=function(e){$(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var o=new ln(this,this);return o.operator=t,o},n.prototype._throwIfClosed=function(){if(this.closed)throw new Po},n.prototype.next=function(t){var o=this;he(function(){var r,i;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var a=ee(o.currentObservers),s=a.next();!s.done;s=a.next()){var c=s.value;c.next(t)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}}})},n.prototype.error=function(t){var o=this;he(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=t;for(var r=o.observers;r.length;)r.shift().error(t)}})},n.prototype.complete=function(){var t=this;he(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var o=t.observers;o.length;)o.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var o=this,r=this,i=r.hasError,a=r.isStopped,s=r.observers;return i||a?Bn:(this.currentObservers=null,s.push(t),new ce(function(){o.currentObservers=null,Se(s,t)}))},n.prototype._checkFinalizedStatuses=function(t){var o=this,r=o.hasError,i=o.thrownError,a=o.isStopped;r?t.error(i):a&&t.complete()},n.prototype.asObservable=function(){var t=new z;return t.source=this,t},n.create=function(t,o){return new ln(t,o)},n}(z),ln=function(e){$(n,e);function n(t,o){var r=e.call(this)||this;return r.destination=t,r.source=o,r}return n.prototype.next=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.next)===null||r===void 0||r.call(o,t)},n.prototype.error=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.error)===null||r===void 0||r.call(o,t)},n.prototype.complete=function(){var t,o;(o=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||o===void 0||o.call(t)},n.prototype._subscribe=function(t){var o,r;return(r=(o=this.source)===null||o===void 0?void 0:o.subscribe(t))!==null&&r!==void 0?r:Bn},n}($n);(function(e){$(n,e);function n(t){var o=e.call(this)||this;return o._value=t,o}return Object.defineProperty(n.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),n.prototype._subscribe=function(t){var o=e.prototype._subscribe.call(this,t);return!o.closed&&t.next(this._value),o},n.prototype.getValue=function(){var t=this,o=t.hasError,r=t.thrownError,i=t._value;if(o)throw r;return this._throwIfClosed(),i},n.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},n})($n);var Ro={now:function(){return Date.now()},delegate:void 0},Mo=function(e){$(n,e);function n(t,o){return e.call(this)||this}return n.prototype.schedule=function(t,o){return this},n}(ce),dn={setInterval:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return setInterval.apply(void 0,ye([e,n],be(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Fo=function(e){$(n,e);function n(t,o){var r=e.call(this,t,o)||this;return r.scheduler=t,r.work=o,r.pending=!1,r}return n.prototype.schedule=function(t,o){var r;if(o===void 0&&(o=0),this.closed)return this;this.state=t;var i=this.id,a=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(a,i,o)),this.pending=!0,this.delay=o,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(a,this.id,o),this},n.prototype.requestAsyncId=function(t,o,r){return r===void 0&&(r=0),dn.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,o,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return o;o!=null&&dn.clearInterval(o)},n.prototype.execute=function(t,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,o);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,o){var r=!1,i;try{this.work(t)}catch(a){r=!0,i=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,o=t.id,r=t.scheduler,i=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Se(i,this),o!=null&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(Mo),fn=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,o){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(o,t)},e.now=Ro.now,e}(),Lo=function(e){$(n,e);function n(t,o){o===void 0&&(o=fn.now);var r=e.call(this,t,o)||this;return r.actions=[],r._active=!1,r}return n.prototype.flush=function(t){var o=this.actions;if(this._active){o.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=o.shift());if(this._active=!1,r){for(;t=o.shift();)t.unsubscribe();throw r}},n}(fn);new Lo(Fo);function Uo(e){return e&&M(e.schedule)}function No(e){return e[e.length-1]}function Gn(e){return Uo(No(e))?e.pop():void 0}var Xn=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Yn(e){return M(e?.then)}function Kn(e){return M(e[Ge])}function Jn(e){return Symbol.asyncIterator&&M(e?.[Symbol.asyncIterator])}function Qn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Oo(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Zn=Oo();function et(e){return M(e?.[Zn])}function nt(e){return yo(this,arguments,function(){var n,t,o,r;return Vn(this,function(i){switch(i.label){case 0:n=e.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,Q(n.read())];case 3:return t=i.sent(),o=t.value,r=t.done,r?[4,Q(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,Q(o)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function tt(e){return M(e?.getReader)}function le(e){if(e instanceof z)return e;if(e!=null){if(Kn(e))return zo(e);if(Xn(e))return Vo(e);if(Yn(e))return Bo(e);if(Jn(e))return ot(e);if(et(e))return jo(e);if(tt(e))return qo(e)}throw Qn(e)}function zo(e){return new z(function(n){var t=e[Ge]();if(M(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Vo(e){return new z(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Bo(e){return new z(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,Wn)})}function jo(e){return new z(function(n){var t,o;try{for(var r=ee(e),i=r.next();!i.done;i=r.next()){var a=i.value;if(n.next(a),n.closed)return}}catch(s){t={error:s}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}n.complete()})}function ot(e){return new z(function(n){Wo(e,n).catch(function(t){return n.error(t)})})}function qo(e){return ot(nt(e))}function Wo(e,n){var t,o,r,i;return bo(this,void 0,void 0,function(){var a,s;return Vn(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),t=So(e),c.label=1;case 1:return[4,t.next()];case 2:if(o=c.sent(),!!o.done)return[3,4];if(a=o.value,n.next(a),n.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),r={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),o&&!o.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function K(e,n,t,o,r){o===void 0&&(o=0),r===void 0&&(r=!1);var i=n.schedule(function(){t(),r?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(i),!r)return i}function rt(e,n){return n===void 0&&(n=0),ue(function(t,o){t.subscribe(we(o,function(r){return K(o,e,function(){return o.next(r)},n)},function(){return K(o,e,function(){return o.complete()},n)},function(r){return K(o,e,function(){return o.error(r)},n)}))})}function it(e,n){return n===void 0&&(n=0),ue(function(t,o){o.add(e.schedule(function(){return t.subscribe(o)},n))})}function Ho(e,n){return le(e).pipe(it(n),rt(n))}function $o(e,n){return le(e).pipe(it(n),rt(n))}function Go(e,n){return new z(function(t){var o=0;return n.schedule(function(){o===e.length?t.complete():(t.next(e[o++]),t.closed||this.schedule())})})}function Xo(e,n){return new z(function(t){var o;return K(t,n,function(){o=e[Zn](),K(t,n,function(){var r,i,a;try{r=o.next(),i=r.value,a=r.done}catch(s){t.error(s);return}a?t.complete():t.next(i)},0,!0)}),function(){return M(o?.return)&&o.return()}})}function at(e,n){if(!e)throw new Error("Iterable cannot be null");return new z(function(t){K(t,n,function(){var o=e[Symbol.asyncIterator]();K(t,n,function(){o.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function Yo(e,n){return at(nt(e),n)}function Ko(e,n){if(e!=null){if(Kn(e))return Ho(e,n);if(Xn(e))return Go(e,n);if(Yn(e))return $o(e,n);if(Jn(e))return at(e,n);if(et(e))return Xo(e,n);if(tt(e))return Yo(e,n)}throw Qn(e)}function Jo(e,n){return n?Ko(e,n):le(e)}He(function(e){return function(n){n===void 0&&(n=null),e(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=n}});function de(e,n){return ue(function(t,o){var r=0;t.subscribe(we(o,function(i){o.next(e.call(n,i,r++))}))})}function Qo(e,n,t,o,r,i,a,s){var c=[],u=0,f=0,h=!1,b=function(){h&&!c.length&&!u&&n.complete()},d=function(p){return u<o?g(p):c.push(p)},g=function(p){u++;var m=!1;le(t(p,f++)).subscribe(we(n,function(v){n.next(v)},function(){m=!0},void 0,function(){if(m)try{u--;for(var v=function(){var y=c.shift();a||g(y)};c.length&&u<o;)v();b()}catch(y){n.error(y)}}))};return e.subscribe(we(n,d,function(){h=!0,b()})),function(){}}function st(e,n,t){return t===void 0&&(t=1/0),M(n)?st(function(o,r){return de(function(i,a){return n(o,i,r,a)})(le(e(o,r)))},t):(typeof n=="number"&&(t=n),ue(function(o,r){return Qo(o,r,e,t)}))}function Zo(e){return st(Hn,e)}function er(){return Zo(1)}function pn(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return er()(Jo(e,Gn(e)))}function fe(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Gn(e);return ue(function(o,r){(t?pn(e,o,t):pn(e,o)).subscribe(r)})}var nr="lk";function ct(e){return typeof e>"u"?!1:tr(e)||or(e)}function tr(e){var n;return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("track")&&typeof((n=e.publication)==null?void 0:n.track)<"u":!1}function or(e){return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("publication")&&typeof e.publication<"u":!1}function rr(e){return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&typeof e.publication>"u":!1}function Wi(e){if(typeof e=="string"||typeof e=="number")return`${e}`;if(rr(e))return`${e.participant.identity}_${e.source}_placeholder`;if(ct(e))return`${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;throw new Error(`Can't generate a id for the given track reference: ${e}`)}function Hi(e){return e instanceof Fn}var ir=[C.ConnectionStateChanged,C.RoomMetadataChanged,C.ActiveSpeakersChanged,C.ConnectionQualityChanged,C.ParticipantConnected,C.ParticipantDisconnected,C.ParticipantPermissionsChanged,C.ParticipantMetadataChanged,C.ParticipantNameChanged,C.ParticipantAttributesChanged,C.TrackMuted,C.TrackUnmuted,C.TrackPublished,C.TrackUnpublished,C.TrackStreamStateChanged,C.TrackSubscriptionFailed,C.TrackSubscriptionPermissionChanged,C.TrackSubscriptionStatusChanged],ar=[...ir,C.LocalTrackPublished,C.LocalTrackUnpublished];T.TrackPublished,T.TrackUnpublished,T.TrackMuted,T.TrackUnmuted,T.TrackStreamStateChanged,T.TrackSubscribed,T.TrackUnsubscribed,T.TrackSubscriptionPermissionChanged,T.TrackSubscriptionFailed,T.LocalTrackPublished,T.LocalTrackUnpublished;var sr=[T.ConnectionQualityChanged,T.IsSpeakingChanged,T.ParticipantMetadataChanged,T.ParticipantPermissionsChanged,T.TrackMuted,T.TrackUnmuted,T.TrackPublished,T.TrackUnpublished,T.TrackStreamStateChanged,T.TrackSubscriptionFailed,T.TrackSubscriptionPermissionChanged,T.TrackSubscriptionStatusChanged];[...sr,T.LocalTrackPublished,T.LocalTrackUnpublished];var xe=go.getLogger("lk-components-js");xe.setDefaultLevel("WARN");function ut(e){return typeof e=="object"}function lt(e){return Array.isArray(e)&&e.filter(ut).length>0}function cr(e){return`${nr}-${e}`}function $i(e){const n=vn(e),t=dt(e.participant).pipe(de(()=>vn(e)),fe(n));return{className:cr(e.source===q.Source.Camera||e.source===q.Source.ScreenShare?"participant-media-video":"participant-media-audio"),trackObserver:t}}function vn(e){if(ct(e))return e.publication;{const{source:n,name:t,participant:o}=e;if(n&&t)return o.getTrackPublications().find(r=>r.source===n&&r.trackName===t);if(t)return o.getTrackPublicationByName(t);if(n)return o.getTrackPublication(n);throw new Error("At least one of source and name needs to be defined")}}function ur(e,...n){return new z(t=>{const o=()=>{t.next(e)};return n.forEach(r=>{e.on(r,o)}),()=>{n.forEach(r=>{e.off(r,o)})}}).pipe(fe(e))}function lr(e,n){return new z(t=>{const o=(...r)=>{t.next(r)};return e.on(n,o),()=>{e.off(n,o)}})}function dr(e){return lr(e,C.ConnectionStateChanged).pipe(de(([n])=>n),fe(e.state))}function fr(e,...n){return new z(t=>{const o=()=>{t.next(e)};return n.forEach(r=>{e.on(r,o)}),()=>{n.forEach(r=>{e.off(r,o)})}}).pipe(fe(e))}function dt(e){return fr(e,T.TrackMuted,T.TrackUnmuted,T.ParticipantPermissionsChanged,T.TrackPublished,T.TrackUnpublished,T.LocalTrackPublished,T.LocalTrackUnpublished,T.MediaDevicesError,T.TrackSubscriptionStatusChanged).pipe(de(n=>{const{isMicrophoneEnabled:t,isCameraEnabled:o,isScreenShareEnabled:r}=n,i=n.getTrackPublication(q.Source.Microphone),a=n.getTrackPublication(q.Source.Camera);return{isCameraEnabled:o,isMicrophoneEnabled:t,isScreenShareEnabled:r,cameraTrack:a,microphoneTrack:i,participant:n}}))}new TextEncoder;new TextDecoder;function Gi(){return{className:"lk-room-container"}}function mn(e,n,t=!0){const o=[e.localParticipant,...Array.from(e.remoteParticipants.values())],r=[];return o.forEach(i=>{n.forEach(a=>{const s=Array.from(i.trackPublications.values()).filter(c=>c.source===a&&(!t||c.track)).map(c=>({participant:i,publication:c,source:c.source}));r.push(...s)})}),{trackReferences:r,participants:o}}function pr(e,n,t){var o,r;const i=(o=t.additionalRoomEvents)!=null?o:ar,a=(r=t.onlySubscribed)!=null?r:!0,s=Array.from(new Set([C.ParticipantConnected,C.ParticipantDisconnected,C.ConnectionStateChanged,C.LocalTrackPublished,C.LocalTrackUnpublished,C.TrackPublished,C.TrackUnpublished,C.TrackSubscriptionStatusChanged,...i]).values());return ur(e,...s).pipe(de(c=>{const u=mn(c,n,a);return xe.debug(`TrackReference[] was updated. (length ${u.trackReferences.length})`,u),u}),fe(mn(e,n,a)))}l.createContext(void 0);const vr=l.createContext(void 0);function mr(){return l.useContext(vr)}function Xi(e){const n=mr(),t=e??n;if(!t)throw new Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");return t}l.createContext(void 0);const hr=l.createContext(void 0);function ft(){return l.useContext(hr)}function Xe(e){const n=ft(),t=e??n;if(!t)throw new Error("No room provided, make sure you are inside a Room context or pass the room explicitly");return t}const Yi=l.createContext(void 0);function gr(e,n,t=!0){const[o,r]=l.useState(n);return l.useEffect(()=>{if(t&&r(n),typeof window>"u"||!e)return;const i=e.subscribe(r);return()=>i.unsubscribe()},[e,t]),o}function br(e){const n=Xe(e),t=l.useMemo(()=>dr(n),[n]);return gr(t,n.state)}function Ki(e={}){const n=Xe(e.room),[t,o]=l.useState(n.localParticipant),[r,i]=l.useState(t.isMicrophoneEnabled),[a,s]=l.useState(t.isMicrophoneEnabled),[c,u]=l.useState(t.lastMicrophoneError),[f,h]=l.useState(t.lastCameraError),[b,d]=l.useState(t.isMicrophoneEnabled),[g,p]=l.useState(void 0),[m,v]=l.useState(void 0),y=S=>{s(S.isCameraEnabled),i(S.isMicrophoneEnabled),d(S.isScreenShareEnabled),v(S.cameraTrack),p(S.microphoneTrack),u(S.participant.lastMicrophoneError),h(S.participant.lastCameraError),o(S.participant)};return l.useEffect(()=>{const S=dt(n.localParticipant).subscribe(y);return()=>S.unsubscribe()},[n]),{isMicrophoneEnabled:r,isScreenShareEnabled:b,isCameraEnabled:a,microphoneTrack:g,cameraTrack:m,lastMicrophoneError:c,lastCameraError:f,localParticipant:t}}function Ji(e=[q.Source.Camera,q.Source.Microphone,q.Source.ScreenShare,q.Source.ScreenShareAudio,q.Source.Unknown],n={}){const t=Xe(n.room),[o,r]=l.useState([]),[i,a]=l.useState([]),s=l.useMemo(()=>e.map(c=>ut(c)?c.source:c),[JSON.stringify(e)]);return l.useEffect(()=>{const c=pr(t,s,{additionalRoomEvents:n.updateOnlyOn,onlySubscribed:n.onlySubscribed}).subscribe(({trackReferences:u,participants:f})=>{xe.debug("setting track bundles",u,f),r(u),a(f)});return()=>c.unsubscribe()},[t,JSON.stringify(n.onlySubscribed),JSON.stringify(n.updateOnlyOn),JSON.stringify(e)]),l.useMemo(()=>{if(lt(e)){const c=Sr(e,i),u=Array.from(o);return i.forEach(f=>{c.has(f.identity)&&(c.get(f.identity)??[]).forEach(h=>{if(o.find(({participant:d,publication:g})=>f.identity===d.identity&&g.source===h))return;xe.debug(`Add ${h} placeholder for participant ${f.identity}.`);const b={participant:f,source:h};u.push(b)})}),u}else return o},[o,i,e])}function yr(e,n){const t=new Set(e);for(const o of n)t.delete(o);return t}function Sr(e,n){const t=new Map;if(lt(e)){const o=e.filter(r=>r.withPlaceholder).map(r=>r.source);n.forEach(r=>{const i=r.getTrackPublications().map(s=>{var c;return(c=s.track)==null?void 0:c.source}).filter(s=>s!==void 0),a=Array.from(yr(new Set(o),new Set(i)));a.length>0&&t.set(r.identity,a)})}return t}const wr=e=>{const n=t=>{let o=1-Math.max(-100,Math.min(-10,t))*-1/100;return o=Math.sqrt(o),o};return e.map(t=>t===-1/0?0:n(t))},xr={bands:5,loPass:100,hiPass:600,updateInterval:32,analyserOptions:{fftSize:2048}};function Ar(e,n={}){var t;const o=e instanceof q?e:(t=e?.publication)==null?void 0:t.track,r={...xr,...n},[i,a]=l.useState(new Array(r.bands).fill(0));return l.useEffect(()=>{if(!o||!(o!=null&&o.mediaStream))return;const{analyser:s,cleanup:c}=Yt(o,r.analyserOptions),u=s.frequencyBinCount,f=new Float32Array(u),h=setInterval(()=>{s.getFloatFrequencyData(f);let b=new Float32Array(f.length);for(let m=0;m<f.length;m++)b[m]=f[m];b=b.slice(n.loPass,n.hiPass);const d=wr(b),g=Math.ceil(d.length/r.bands),p=[];for(let m=0;m<r.bands;m++){const v=d.slice(m*g,(m+1)*g).reduce((y,S)=>y+=S,0);p.push(v/g)}a(p)},r.updateInterval);return()=>{c(),clearInterval(h)}},[o,o?.mediaStream,JSON.stringify(n)]),i}function V(){const e=ft(),n=l.useRef({debug:(...t)=>Z.debug(`[${e?.name??"no room"}]`,...t),encoder:new TextEncoder,decoder:new TextDecoder}).current;return{room:e,...n}}function Cr(){_r(),kr(),Er(),Tr()}function Tr(){const{room:e,debug:n}=V(),o=On().video,r=l.useMemo(()=>{const i=["audioinput","audiooutput"];return o&&i.push("videoinput"),i},[o]);l.useEffect(()=>{async function i(){Promise.all(r.map(async a=>{const s=await Kt.getLocalDevices(a),c=e?.getActiveDevice(a);if(!s.find(f=>f.deviceId===c)){const f=await se(a);let h=null;f?h=f.deviceId:s[0]&&(h=s[0].deviceId),n(`switching ${a} to ${h}`),h&&await e?.switchActiveDevice(a,h)}}))}if(navigator)return navigator.mediaDevices.addEventListener("devicechange",i),()=>{navigator.mediaDevices.removeEventListener("devicechange",i)}},[e,n,r])}function _r(){const{room:e,debug:n}=V(),t=e?.getActiveDevice("audioinput"),o=e?.getActiveDevice("audiooutput");l.useEffect(()=>{async function r(){const i=(await se("audioinput"))?.deviceId,a=(await se("audiooutput"))?.deviceId,s=async()=>{i&&t!==i&&(n("switching audio input to default"),await e?.switchActiveDevice("audioinput",i))},c=async()=>{if(a&&o!==a){n("switching audio output to default");try{await e?.switchActiveDevice("audiooutput",a)}catch(u){n("failed to switch audio output",u)}}};await Promise.all([s(),c()])}r()},[t,o,n,e])}function kr(){const{isVideoEnabled:e,endStartingVideo:n}=uo(),{room:t,debug:o}=V(),i=On().video,a=i?t?.getActiveDevice("videoinput"):void 0;l.useEffect(()=>{async function s(){if(e)try{await t?.localParticipant.setCameraEnabled(!0),n(!0)}catch{n(!1)}else await t?.localParticipant.setCameraEnabled(!1)}t&&s()},[e,n,t]),l.useEffect(()=>{async function s(){const c=(await se("videoinput"))?.deviceId;await(async()=>{c&&a!==c&&(o("switching video input to default"),await t?.switchActiveDevice("videoinput",c))})()}i&&s()},[a,o,t,i])}function Er(){const{room:e}=V(),{isScreenshareEnabled:n,endStartingScreenshare:t}=lo();l.useEffect(()=>{async function o(){if(n)try{await e?.localParticipant.setScreenShareEnabled(!0,{video:{displaySurface:"monitor"}}),t(!0)}catch{t(!1)}else await e?.localParticipant.setScreenShareEnabled(!1)}e&&o()},[e,n,t])}function pt(){const{debug:e}=V(),n=j(o=>o.conversationId),t=Dn();return l.useCallback(async o=>{const r=o,i=n&&!In(n)?n:void 0,a=r??i;if(a){e(`refetch conversationId ${a}`);try{await zt(a,!0)}catch(s){const c="Failed to update conversation";e(c,s),t.danger(c)}}},[n,e,t])}const Dr=5e3,Ir=2e3,Pr=e=>{const n=O(),{room:t}=V(),o=j(g=>g.disconnectPending),r=j(g=>g.server.remoteState===L.Speaking),i=j(g=>g.conversationId)??void 0,a=_t(i),s=l.useRef(!1),c=pt(),u=xt(),f=Cn();s.current=r||s.current;const h=l.useCallback(async g=>{clearTimeout(o),n.setState(m=>{m.disconnectPending=void 0}),t?.disconnect(),await c(a),n.setState(We);const p=a??g;p&&Rn(u,f,p),e?.refetchLater&&window.setTimeout(()=>{c(a)},Ir)},[o,t,c,a,e?.refetchLater,u,f,n]),b=s.current&&!a,d=l.useCallback(()=>{n.setState(g=>{g.disconnectPending=window.setTimeout(h,Dr)})},[h,n]);return{disconnectPending:o!==void 0,shouldDelayDisconnect:b,delayDisconnect:d,immediateDisconnect:h}};function Rr(){const e=Cn(),n=O(),{room:t,debug:o,decoder:r}=V(),{disconnectPending:i,shouldDelayDisconnect:a,delayDisconnect:s,immediateDisconnect:c}=Pr(),u=pt(),f=l.useRef(!1),h=l.useRef(!1),b=l.useRef(!1),d=l.useRef(!1),g=ge(p=>p.lastVoiceSessionStartTime);l.useEffect(()=>{const p=async E=>{const{new_state:A}=E;if(n.setState(I=>{I.server.remoteState=A}),A===L.Listening&&!h.current&&g instanceof Date){const U=new Date().getTime()-g.getTime();D.firstListeningLatency.success({durationMs:U}),h.current=!0}if(A===L.ListeningIntently)D.voiceSessionListeningIntently.stateChange();else if(A===L.Listening){if(!b.current){const I=n.getState().voiceSessionId;D.voiceSessionFirstListening.stateChange({voice_session_id:I??"unknown"}),b.current=!0}b.current=!0,D.voiceSessionListening.stateChange()}else if(A===L.Thinking)D.voiceSessionThinking.stateChange();else if(A===L.Speaking){if(!d.current){const I=n.getState().voiceSessionId;D.voiceSessionFirstSpeaking.stateChange({voice_session_id:I??"unknown"}),d.current=!0}D.voiceSessionSpeaking.stateChange()}else A===L.Halted&&D.voiceSessionHalted.stateChange()},m=async E=>{n.setState(A=>{A.server.usage=E})},v=async E=>{n.setState(A=>{A.server.toolUpdate={...E}}),E.update_type==="hangup"&&(a?s():c())},y=async E=>{let A;try{A=JSON.parse(r.decode(E)),o("data recevied",A)}catch(I){o("error parsing data",I);return}switch(n.setState(I=>(I.server.messages.push({...A,timestamp:new Date,source:"remote"}),I)),A.type){case W.StateUpdate:o("state update",A.payload);const{new_state:I,delay_s:U}=A.payload;if([L.Thinking,L.Speaking].includes(I)&&n.getState().server.turnContext.clear(),I===L.Listening&&!f.current){f.current=!0,performance.mark("voice_mode.end");const F=performance.measure("voice_mode","voice_mode.start","voice_mode.end").duration.toFixed(0);D.voiceMode.connect({durationMs:F})}I===L.Thinking&&U&&(o(`${t?.name} delay thinking state by ${U} seconds`),p({new_state:L.ListeningIntently,delay_s:U}),await new Promise(F=>setTimeout(F,U*1e3))),p(A.payload);break;case W.ConversationUpdate:{o("conversation update",A.payload);const F=n.getState().conversationId,{conversation_id:_}=A.payload;if(F&&In(F)){on.initThread(F,{kind:Ue.PrimaryAssistant}),on.setServerIdForNewThread(F,_),n.setState(G=>{G.conversationId=_}),Rn(Mn,e,_);const P=Ne.getGizmoId(Oe(F));Vt(e,P)}await u(_),i&&c(_);break}case W.UsageUpdate:m(A.payload);break;case W.ToolUpdate:v(A.payload);break}},S=(E,A)=>{o("track published",E,A)},k=()=>{o("disconnected"),Nn(n),D.voiceSessionDisconnected.stateChange()},x=(E,A)=>{A instanceof Fn&&(o(`Connection quality changed for participant ${A.identity}: ${E}`),n.setState(I=>{I.server.voiceConnectionQuality=E}))};return t?.on(C.DataReceived,y),t?.on(C.TrackPublished,S),t?.on(C.ConnectionQualityChanged,x),t?.on(C.Disconnected,k),()=>{t?.off(C.DataReceived,y),t?.off(C.TrackPublished,S),t?.off(C.ConnectionQualityChanged,x),t?.off(C.Disconnected,k)}},[o,r,s,i,c,g,e,u,t,a,n])}function Mr(){Fr(),Lr(),Ur(),Nr(),Or()}function Fr(){const{room:e}=V(),n=O();l.useEffect(()=>{n.setState(t=>{t.dev.room=e})},[e,n])}function Lr(){const{room:e}=V(),n=br(e),t=O();l.useEffect(()=>{t.setState(o=>{o.server.connectionState=n})},[n,t])}function Ur(){const{room:e,debug:n,encoder:t}=V(),o=O();l.useEffect(()=>{const r=!!o.getState().server.actions;if(e&&!r){const i=async a=>{n("publishing action",a);const s={type:W.ActionRequest,payload:{action:a}};await e.localParticipant.publishData(t.encode(JSON.stringify(s)),{reliable:!0}),o.setState(c=>{c.server.messages.push({...s,timestamp:new Date,source:"local"})})};o.setState(a=>{a.server.actions={[B.StartListeningIntently]:()=>i(B.StartListeningIntently),[B.StopListeningIntently]:()=>i(B.StopListeningIntently),[B.HaltAllActivity]:()=>i(B.HaltAllActivity),[B.ResumeListening]:()=>i(B.ResumeListening),[B.RelayMessage]:()=>i(B.RelayMessage)}})}},[e,n,t,o])}function Nr(){const n=O()(t=>t.isVoiceModeActive);l.useEffect(()=>(ge.setState({isVoiceActive:n}),()=>{ge.setState({isVoiceActive:!1})}),[n])}function Or(){const e=O(),{room:n,encoder:t}=V(),o=l.useCallback(async r=>{await n?.localParticipant.publishData(t.encode(JSON.stringify(r)),{reliable:!0}),e.setState(i=>{i.server.messages.push({...r,timestamp:new Date,source:"local"})})},[n,t,e]);l.useEffect(()=>{e.setState(r=>{r.server.turnContext.setPublisher(o)})},[o,e])}const Qi=l.memo(function(){return Rr(),Mr(),Cr(),null});function Zi(e){return{conversation_id:e.serverThreadId,parent_message_id:e.parentMessageId,voice_mode:e.isAdvancedMode?"advanced":"standard",eventSource:e.eventSource,clientThreadId:e.clientThreadId,gizmo_id:e.gizmoId,voice:e.voice}}function zr({requestMicPermissions:e}={requestMicPermissions:!1}){const n=Tn(),t=O(),o=po(),{voiceName:r,voiceMainLanguage:i,voiceTrainingAllowed:a,videoTrainingAllowed:s}=qe(),c=j(v=>v.isVoiceModeActive),u=ao(),{room:f}=V(),h=co(),b=Jt(),d=kt(),g=n.formatMessage({id:"useVoiceModeButtonAction.error",defaultMessage:"Failed to start voice mode"}),p=l.useCallback(async()=>{u&&(await f?.disconnect(),Ee(null,t),t.setState(v=>{v.server.remoteState=L.Halted}))},[u,f,t]);return{startVoiceMode:l.useCallback(async v=>{u&&(await f?.disconnect(),Ee(null,t)),e&&await b();const y=await se("audioinput");t.setState(x=>{x.audioInputDevice=y,x.isVoiceModeActive=!0,x.voiceMode=v.voice_mode,x.server.remoteState=L.Connecting});const S=performance.now(),k=[8,4,4,4,12].map(x=>Math.floor(Math.random()*Math.pow(10,x)).toString(16).padStart(x,"0").toUpperCase()).join("-");try{D.livekit.connectCalled();const x=await h({conversation_id:v.conversation_id??null,requested_voice_mode:v.voice_mode??null,gizmo_id:v.gizmo_id??null,voice:v.voice,requested_default_model:v.requested_default_model??null},v.eventSource),{default_voice_mode:E,modes:A,chatreq:I}=x;performance.mark("livekit.start"),performance.mark("voice_mode.start");const{eventSource:U,voice:F,clientThreadId:_,voice_mode:P,gizmo_id:G,...X}=v,ne=A.find(J=>J.mode===E);if(!ne)throw new Error("No voice status mode found for default mode "+E);const pe=ne.default_model_slug,te=E==="advanced"?pe:void 0,Te=I?await je.getEnforcementToken(I):null,_e=v.gizmo_id?{kind:Ue.GizmoInteraction,gizmo_id:v.gizmo_id}:{kind:Ue.PrimaryAssistant},H=await Un.getVoiceToken({...X,voice:F??r,language_code:i,voice_session_id:k,timezone_offset_min:new Date().getTimezoneOffset(),voice_mode:E,model_slug:pe,model_slug_advanced:te,chatreq_token:I?.token,history_and_training_disabled:d,conversation_mode:_e,voice_training_allowed:a,video_training_allowed:s},v.eventSource,Te);H&&H.token&&H.url&&H.e2ee_key&&(ge.setState({lastVoiceSessionStartTime:new Date}),t.setState(J=>{J.server.remoteState=L.Listening}),Ee({conversationId:v.conversation_id??v.clientThreadId,voiceSessionId:k,voiceMode:H.voice_mode_decision.voice_mode,credentials:{...H,e2eeKey:H.e2ee_key}},t)),performance.mark("livekit.end"),D.livekit.success({durationMs:performance.measure("livekit","livekit.start","livekit.end").duration.toFixed(0),voice_session_id:k}),D.connectionLatency.success({durationMs:performance.now()-S})}catch(x){const E=Qt(t.getState());throw D.livekit.failure(x,{...E,voice_session_id:k,eventSource:v.eventSource,voice:v.voice??"(undefined)",requested_voice_mode:v.voice_mode??"(undefined)",gizmo_id:v.gizmo_id??"(undefined)"}),Z.debug("failed to get voice token",x),t.setState(A=>{A.server.remoteState=L.Halted}),D.connectionLatency.failure({durationMs:performance.now()-S}),o.danger(g),x}},[b,g,h,u,d,e,f,o,s,i,r,t,a]),stopVoiceMode:p,isConnected:u,isVoiceModeActive:c}}const Vr=2,Br=({viewport:e,canvasSize:n,shouldMeasurePerf:t,source:o})=>{const r=l.useRef({}),i=l.useCallback(a=>{const s=a.getExtension("WEBGL_debug_renderer_info");s&&(r.current.vendor=a.getParameter(s.UNMASKED_VENDOR_WEBGL),r.current.renderer=a.getParameter(s.UNMASKED_RENDERER_WEBGL))},[]);return l.useEffect(()=>{const a={vendor:r.current.vendor??"(unavailable)",renderer:r.current.renderer??"(unavailable)",width:e[0],height:e[1],canvasWidth:n[0],canvasHeight:n[1],dpr:window.devicePixelRatio,source:o};!Et(a,r.current)&&t&&(r.current=a,Ln(Vr).then(c=>{D.bloop.performance({...a,fps:c})}))},[n,t,e,o]),i},jr=.25,qr=3,hn=28,Pe=55,Re=200,gn=1.1,Wr=({viewport:e,initialScale:n,shouldCalibrate:t})=>{const[o,r]=l.useState(n),i=l.useRef(void 0),a=l.useRef(void 0),s=l.useRef(void 0),c=l.useRef("down"),u=l.useCallback(()=>{const f=c.current==="up"?qr:jr;Ln(f).then(h=>{if(h<hn){c.current="down";const b=Math.max(h,1),d=Math.sqrt(b/hn);r(g=>g*d),a.current=window.setTimeout(u,Re)}else if(s.current){const b=h>=Pe,d=h>=s.current*gn;if(b||d)c.current="up",r(g=>g*gn),a.current=window.setTimeout(u,Re);else if(h<Pe){c.current="down";const g=Math.sqrt(h/Pe);r(p=>p*g)}}s.current=h})},[]);return l.useEffect(()=>{const[f,h]=e,[b,d]=i.current??[];return t&&(b!==f||d!==h)&&(i.current=e,clearTimeout(a.current),r(n),a.current=window.setTimeout(u,Re)),()=>{clearTimeout(a.current)}},[t,u,n,e]),o},Hr=60,Ce=Math.floor(1e3/Hr);var $r=Dt,Gr=Pt,Xr=Rt,Yr=It,Kr=Bt,Jr=Math.max;function Qr(e){if(!(e&&e.length))return[];var n=0;return e=$r(e,function(t){if(Kr(t))return n=Jr(t.length,n),!0}),Yr(n,function(t){return Gr(e,Xr(t))})}var Zr=Qr,ei=jt,ni=Zr,ti=ei(ni),oi=ti;const Me=At(oi),Ye=240,vt=2048,mt=new Array(Ye).fill(0),ri=e=>{const n=Ar(e,{bands:Ye,updateInterval:Ce,loPass:0,hiPass:400,analyserOptions:{fftSize:vt}});return n.length===0?mt:n},Ke=e=>{const{magnitudes:n,binCount:t,gainMultiplier:o}=e;if(n.length===0)return new Array(t).fill(0);const r=Math.ceil(n.length/t),i=[];for(let a=0;a<n.length;a+=r){const s=Math.min(a+r,n.length),c=n.slice(a,s).sort((b,d)=>b-d),u=Math.floor(c.length/2);let f;c.length%2===0?f=(c[u-1]+c[u])/2:f=c[u],f=Math.abs(f),f*=o;const h=f/(f+1);i.push(h)}return i},ht=(e,n)=>{const t=n.sampleRate,o=e.length,r=n.bandCount,i=n.binCount,a=n.gainMultipliers;if(a.length!==r)throw new Error("gainMultipliers must have length equal to bandCount");const s=o*2,c=t/s,u=e.map((g,p)=>p*c),f=20,h=t/2,b=new Array(r+1).fill(0).map((g,p)=>f*Math.pow(h/f,p/r)),d=new Array(r).fill(null).map(()=>[]);for(let g=0;g<u.length;g+=1)for(let p=0;p<r;p+=1)if(u[g]>=b[p]&&u[g]<b[p+1]){d[p].push(e[g]);break}for(let g=0;g<r;g+=1){const p=d[g],m=a[g];d[g]=Ke({magnitudes:p,binCount:i,gainMultiplier:m})}return d},bn=60,gt=48e3,ii=1,ai=2,si=40,ci=2;function yn({time:e,timeConstant:n}){return 1-Math.exp(-e/n)}function Sn(e,n){const t=n[1]-n[0];return n[0]+e*t}const Fe=e=>{if(!Array.isArray(e)||e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},ui=e=>{const{prevAudioData:n,prevCumulativeAudioData:t,deltaTimeS:o,audioDataRaw:r}=e,i=r.map(b=>b*o*bn*ii),a=yn({time:o,timeConstant:ai}),s=Me(n,i).map(b=>(Fe(b),Sn(a,b))),c=r.map(b=>b*o*bn*si),u=Me(t,c).map(b=>(Fe(b),b[0]+b[1])),f=yn({time:o,timeConstant:ci}),h=Me(t,u).map(b=>(Fe(b),Sn(f,b)));return{audioData:s,cumulativeAudioData:h}},ea=(e,n)=>{const t=ri(e),o=ht(t,{sampleRate:gt,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),r=Ke({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:o,cumulativeMagnitude:r}},re=Z.createChild("GLCanvas");function li({className:e,vert:n,frag:t,Behaviors:o,onViewportUpdate:r,onRenderComplete:i,onGlAvailable:a,onCanvasSizeUpdate:s,scale:c}){const u=l.useRef(null),f=l.useRef(null),[h,b]=l.useState(null),[d,g]=l.useState(),p=l.useRef(qt(y=>{const{width:S,height:k}=y.contentRect,x=Math.floor(Math.min(S??0,k??0));b(x),r?.({width:x,height:x})},100)),m=Wt(p.current);if(rn(()=>{const y=u.current,{width:S,height:k}=y??{};if(y&&h!=null&&S&&k){const x=y.getContext("webgl2",{premultipliedAlpha:!0});x?g(x):re.error("webgl2 context not supported")}},[h]),rn(()=>{if(!d)return;const y=d.createProgram(),S=d.createShader(d.VERTEX_SHADER),k=d.createShader(d.FRAGMENT_SHADER);if(!y){re.debug("failed to create program");return}if(!S||!k){re.debug("failed to create shaders",S,k);return}let x="";if(d.shaderSource(S,n),d.compileShader(S),x+=`vertShader:
${d.getShaderInfoLog(S)}
`,d.attachShader(y,S),d.shaderSource(k,t),d.compileShader(k),x+=`fragShader:
${d.getShaderInfoLog(k)}
`,d.attachShader(y,k),d.linkProgram(y),d.useProgram(y),x+=d.getProgramInfoLog(y),!d.getProgramParameter(y,d.LINK_STATUS))throw`Could not compile WebGL program. 

${x}`;f.current=y,re.debug("program created"),a?.(d,y);const E=d.fenceSync(d.SYNC_GPU_COMMANDS_COMPLETE,0);return E&&(d.waitSync(E,0,d.TIMEOUT_IGNORED),i?.()),()=>{re.debug("cleaning up"),f.current=null,d.detachShader(y,S),d.detachShader(y,k),d.deleteShader(S),d.deleteShader(k),d.deleteProgram(y)}},[d,t,n]),h!=null&&d&&u.current){const y=u.current,S=h*window.devicePixelRatio*(c??1);y.width=S,y.height=S,d.viewport(0,0,S,S),s?.({width:S,height:S})}const v=f.current;return w.jsxs("div",{className:e,ref:m,children:[w.jsx("canvas",{ref:u,style:{width:h??void 0,height:h??void 0}},h),d&&v&&o&&w.jsx(o,{ctx:d,program:v})]})}function di({GLUniformsSetter:e,textureImage:n,textureName:t,variablesRef:o,className:r,vert:i,frag:a,onViewportUpdate:s,onRenderComplete:c,onGlAvailable:u,onCanvasSizeUpdate:f,scale:h}){const b=l.useRef(void 0),d=l.useCallback(async(m,v)=>{if(b.current=new e(m,v),n&&t){const y=m.createTexture();m.bindTexture(m.TEXTURE_2D,y),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.LINEAR),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.LINEAR),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,m.RGBA,m.UNSIGNED_BYTE,n);const S=m.getUniformLocation(v,t);m.activeTexture(m.TEXTURE0),m.bindTexture(m.TEXTURE_2D,y),m.uniform1i(S,0)}u?.(m,v)},[e,n,t,u]),g=l.useRef(void 0),p=l.useCallback(()=>{b.current&&o.current&&b.current.setVariablesAndRender(o.current),g.current=requestAnimationFrame(p)},[o]);return l.useEffect(()=>(p(),()=>{g.current&&cancelAnimationFrame(g.current)}),[p]),w.jsx(li,{className:r,vert:i,frag:a,onViewportUpdate:s,onRenderComplete:c,onGlAvailable:d,onCanvasSizeUpdate:f,scale:h,Behaviors:()=>null})}const fi="webp",pi=512,vi=512,mi="srgb",hi=3,gi="uchar",bi=72,yi=!1,Si=8,wi=!1,xi=!1,Ai="/assets/noise-watercolor-m3j88gni.webp",Ci={format:fi,width:pi,height:vi,space:mi,channels:hi,depth:gi,density:bi,isProgressive:yi,paletteBitDepth:Si,hasProfile:wi,hasAlpha:xi,src:Ai};let bt;const Ae=new window.Image;Ae.crossOrigin="anonymous";Ae.src=Ci.src;Ae.onload=()=>{bt=Ae};var Ti=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,_i=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;class Je{#o;#a;#e;#r=[];#i={};#n;#t;static#s="BlorbUniformsObject";constructor(n,t){this.#e=n;const o=n.getUniformBlockIndex(t,Je.#s),r=n.getActiveUniformBlockParameter(t,o,n.UNIFORM_BLOCK_DATA_SIZE);this.#n=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#n),n.bufferData(n.UNIFORM_BUFFER,r,n.DYNAMIC_DRAW);const i=0;n.bindBufferBase(n.UNIFORM_BUFFER,i,this.#n),n.uniformBlockBinding(t,o,i);const a=n.getActiveUniformBlockParameter(t,o,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#r=[],this.#i={};for(let s=0;s<a.length;s++){const c=a[s],u=n.getActiveUniform(t,c);if(!u)throw new Error("No uniformInfo for index "+c);let f=u.name;f=f.replace(/\[0\]$/,"");const h=n.getActiveUniforms(t,[c],n.UNIFORM_OFFSET)[0];this.#r.push(f),this.#i[f]=h}this.#t=new ArrayBuffer(r),this.#o=new Float32Array(this.#t),this.#a=new Int32Array(this.#t)}setVariablesAndRender(n){for(const t of this.#r){const[,o]=t.split("."),i=this.#i[t]/4,a=n[o];typeof a=="number"?this.#o[i]=a:typeof a=="boolean"?this.#a[i]=a?1:0:Array.isArray(a)&&this.#o.set(a,i)}this.#e.bindBuffer(this.#e.UNIFORM_BUFFER,this.#n),this.#e.bufferSubData(this.#e.UNIFORM_BUFFER,0,this.#t),this.#e.drawArrays(this.#e.TRIANGLE_STRIP,0,6)}}function R(e){const n=e.replace("#",""),t=parseInt(n.substring(0,2),16)/255,o=parseInt(n.substring(2,4),16)/255,r=parseInt(n.substring(4,6),16)/255;return new Float32Array([t,o,r])}const Le={BLUE:{bloopColorMain:R("#DCF7FF"),bloopColorLow:R("#0181FE"),bloopColorMid:R("#A4EFFF"),bloopColorHigh:R("#FFFDEF")},DARK_BLUE:{bloopColorMain:R("#DAF5FF"),bloopColorLow:R("#0066CC"),bloopColorMid:R("#2EC6F5"),bloopColorHigh:R("#72EAF5")},GREYSCALE:{bloopColorMain:R("#D7D7D7"),bloopColorLow:R("#303030"),bloopColorMid:R("#989898"),bloopColorHigh:R("#FFFFFF")},WHITE:{bloopColorMain:R("#FFFFFF"),bloopColorLow:R("#FFFFFF"),bloopColorMid:R("#FFFFFF"),bloopColorHigh:R("#FFFFFF")},BLACK:{bloopColorMain:R("#000000"),bloopColorLow:R("#000000"),bloopColorMid:R("#000000"),bloopColorHigh:R("#000000")}},ki=e=>{const n=Pn();return e?Le.BLUE:n?Le.WHITE:Le.BLACK},wn=[300,300],Ei={bands:4,loPass:0,hiPass:400},Di=e=>{const n=t=>{let i=1-Math.max(-100,Math.min(-10,t))*-1/100;return i=Math.sqrt(i),i};return e.map(t=>t===-1/0?0:n(t))};function yt(e,n){const[t,o]=l.useState([]),r=l.useRef(void 0);return l.useEffect(()=>{if(!e)return;if(!r.current){const h=new AudioContext,b=h.createMediaElementSource(e),d=h.createAnalyser();b.connect(d),d.connect(h.destination),r.current={audioContext:h,mediaElementAudioSourceNode:b,analyserNode:d}}const{analyserNode:i,audioContext:a}=r.current,s=i?.frequencyBinCount??0,c=new Float32Array(s),f=setInterval(()=>{if(!i)return;i.getFloatFrequencyData(c);let h=c.slice(n.loPass,n.hiPass);const b=Di(h),d=Math.ceil(b.length/n.bands),g=[];for(let p=0;p<n.bands;p++){const m=b.slice(p*d,(p+1)*d).reduce((v,y)=>v+y,0);g.push(m/d)}o(g)},n.updateInterval);return()=>{clearInterval(f),a&&a.close()}},[e,n.bands,n.hiPass,n.loPass,n.updateInterval]),t}const Ii=e=>{const n=yt(e,{bands:Ye,updateInterval:Ce,loPass:0,hiPass:400,analyserOptions:{fftSize:vt}});return n.length===0?mt:n},Pi=(e,n)=>{const t=Ii(e),o=ht(t,{sampleRate:gt,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),r=Ke({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:o,cumulativeMagnitude:r}},Ri=e=>{const[n,t]=l.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),o=l.useRef([0,0,0,0]),r=l.useRef(void 0),i=l.useRef(performance.now()),{bandMagnitudes:a,cumulativeMagnitude:s}=Pi(e,{bands:3,bins:1,gainMultipliers:[10,1,1]});o.current=[...a,s].flat();const c=l.useCallback(()=>{const u=performance.now(),f=(u-i.current)/1e3;i.current=u;const h=o.current,{audioData:b,cumulativeAudioData:d}=n,g=ui({deltaTimeS:f,audioDataRaw:h,prevAudioData:b,prevCumulativeAudioData:d});t(g)},[n]);return l.useEffect(()=>(r.current||(r.current=window.setInterval(c,Ce)),()=>{clearInterval(r.current),r.current=void 0}),[c]),n},xn=Promise.resolve();function St({url:e,readyToPlay:n}){const t=l.useRef(void 0),o=l.useRef(xn);return l.useEffect(()=>(t.current||(t.current=document.createElement("audio")),()=>{o.current.then(()=>{t.current&&(t.current.pause(),t.current.removeAttribute("src"),t.current.remove(),o.current=xn)})}),[]),l.useEffect(()=>{e&&t.current&&t.current.src!==e&&n&&o.current.then(()=>{t.current&&(t.current.crossOrigin="anonymous",t.current.src=e,o.current=t.current.play())})},[n,e]),t.current}function Mi({className:e,url:n}){const[t,o]=l.useState(!1),r=St({url:n,readyToPlay:t}),i=yt(r,Ei),a=l.useMemo(()=>[0,0,0,0],[]);return w.jsx(wt,{className:e,isAdvanced:!1,avgMag:i,cumulativeAudioData:a,onRenderComplete:()=>o(!0)})}function Fi({className:e,url:n}){const[t,o]=l.useState(!1),r=St({url:n,readyToPlay:t}),i=Ri(r),{audioData:a,cumulativeAudioData:s}=i;return w.jsx(wt,{className:e,isAdvanced:!0,avgMag:a,cumulativeAudioData:s,onRenderComplete:()=>o(!0)})}const wt=({className:e,avgMag:n,cumulativeAudioData:t,isAdvanced:o,onRenderComplete:r})=>{const i=Pn(),a=l.useMemo(()=>performance.now()/1e3,[]),s=l.useMemo(()=>performance.now()/1e3,[]),c=l.useRef(void 0),[u,f]=l.useState(wn),{canvasSizeRef:h,handleCanvasSizeUpdate:b}=Zt(wn),d=l.useCallback(S=>{f([S.width,S.height])},[]),[g,p]=l.useState(performance.now()/1e3);l.useEffect(()=>{const S=setInterval(()=>{p(performance.now()/1e3)},Ce);return()=>clearInterval(S)},[]);const m=ki(o),v=Br({viewport:u,canvasSize:h.current,shouldMeasurePerf:!0,source:"VoicePicker"}),y=Wr({shouldCalibrate:!0,viewport:u,initialScale:1});return c.current={time:g,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:s,readyTimestamp:a,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:t,isNewBloop:!0,isAdvancedBloop:o,bloopColorMain:Array.from(m.bloopColorMain),bloopColorLow:Array.from(m.bloopColorLow),bloopColorMid:Array.from(m.bloopColorMid),bloopColorHigh:Array.from(m.bloopColorHigh),isDarkMode:i,screenScaleFactor:window.devicePixelRatio,viewport:u,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1},w.jsx(di,{className:ae("flex items-center justify-center",e),variablesRef:c,onViewportUpdate:d,onRenderComplete:r,textureImage:bt,textureName:"uTextureNoise",onGlAvailable:v,onCanvasSizeUpdate:b,scale:y,GLUniformsSetter:Je,vert:_i,frag:Ti})};function Li({isUnauthenticated:e,loading:n,handleLoginClick:t,handleCancelClick:o,handleConfirmClick:r,selectedVoice:i,currentVoiceName:a,cameFromNux:s}){const c="w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";return e?w.jsxs(w.Fragment,{children:[w.jsx(ve,{className:ae(c,"text-white"),onClick:t,children:n?w.jsx(an,{}):w.jsx(Y,{id:"IRALWH",defaultMessage:"Log in"})}),w.jsx(ve,{className:ae(c,"text-black dark:text-white"),color:"ghost",onClick:o,children:w.jsx(Y,{id:"8fumUc",defaultMessage:"Back to chat"})})]}):w.jsxs(w.Fragment,{children:[w.jsx(ve,{className:ae(c,"text-white"),onClick:r,children:n?w.jsx(an,{}):i?.voice===a&&!s?w.jsx(Y,{id:"MyKAgb",defaultMessage:"Done"}):w.jsx(Y,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),w.jsx(ve,{className:ae(c,"text-black dark:text-white"),color:"ghost",onClick:o,children:w.jsx(Y,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})}const Ui={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function na({conversationId:e,onClose:n,cameFromNux:t=!1,initialVoiceName:o}){const{isUnauthenticated:r}=Mt(),i=Ht(),{voiceName:a}=qe(),s=$t(),[c,u]=l.useState(!1),f=Ne.getGizmoId(Oe(e)),[h,b]=l.useState(!1),[d,g]=l.useState(!1);l.useEffect(()=>{requestAnimationFrame(()=>b(!0))},[]);const[p,m]=l.useState(!1),[v,y]=l.useState(null);l.useEffect(()=>{if(s.length>0){const N=s.findIndex(oe=>oe.voice===(o||a));N>=0?y(N):y(2),m(!0)}},[s,a,o]);const S=v!=null?(v-2+s.length)%s.length:0,k=v!=null?(v-1+s.length)%s.length:1,x=v!=null?(v+1)%s.length:3,E=v!=null?(v+2)%s.length:4,A=s[v??0],I=s[S],U=s[k],F=s[x],_=s[E],P=N=>{y(N)},{stopVoiceMode:G,startVoiceMode:X}=zr({requestMicPermissions:t}),{setValue:ne}=Xt(Ft.VoiceName),pe=j(N=>N.voiceMode),te=t&&!f?"advanced":pe,Te=l.useCallback(()=>{g(!t),setTimeout(()=>{const N=v!=null?s[v]?.voice:s[0]?.voice;sessionStorage.setItem("selectedVoiceName",N),i({authType:"login",callback:oe=>{Lt.logLogInButtonClicked({provider:oe,location:"Voice Picker Page"})}})},ke)},[t,i,v,s]),_e=l.useCallback(async()=>{g(!t),setTimeout(async()=>{u(!0);const N=v!=null?s[v]?.voice:s[0]?.voice;if(t||N!==a){t||D.voiceSelected.click({action:"changed",voice:N}),ne(N),await G(),Mn("/");try{await X({conversation_id:void 0,eventSource:"voice_picker",voice_mode:te,voice:N,clientThreadId:Ut(),gizmo_id:Ne.getGizmoId(Oe(e))})}catch(oe){Nt.addError(`Failed to start voice mode after voice picker: ${oe}`)}}else D.voiceSelected.click({action:"kept",voice:a});u(!1),n()},ke)},[t,e,a,n,v,ne,X,G,te,s]),H=()=>{g(!0),setTimeout(n,ke)};eo({setSelectedVoiceIndex:y,prevVoiceIndex:k,nextVoiceIndex:x});const[J,Qe]=l.useState(!1),Ze=N=>{N==="prev"?P(k):N==="next"&&P(x),Qe(!0),setTimeout(()=>{Qe(!1)},175)},en=l.useMemo(()=>({className:"h-max min-h-bloop w-max min-w-bloop",url:A?.preview_url}),[A?.preview_url]);return!p||v==null?w.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full bg-token-main-surface-primary"}):w.jsxs("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${h&&!d?"opacity-100":"opacity-0"}`,children:[w.jsx("h1",{className:"mb-8 mt-36 text-3xl font-semibold",children:r?w.jsx(Y,{id:"P4GR/e",defaultMessage:"Try voice mode for free"}):w.jsx(Y,{id:"2whyE9",defaultMessage:"Choose a voice"})}),w.jsx("div",{className:"flex h-full w-full items-center justify-center",children:A?t&&!f||te==="advanced"?w.jsx(Fi,{...en}):w.jsx(Mi,{...en}):null}),w.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:w.jsxs("div",{className:"relative flex h-24 w-48",children:[w.jsx(ie,{voice:I,variant:"offscreenLeft"},I?.name),w.jsx(ie,{voice:U,variant:"left",onClick:()=>P(k)},U?.name),w.jsx(An,{direction:"prev",onClick:()=>Ze("prev"),isFading:J}),w.jsx(ie,{voice:A,variant:"center"},A?.name),w.jsx(An,{direction:"next",onClick:()=>Ze("next"),isFading:J}),w.jsx(ie,{voice:F,variant:"right",onClick:()=>P(x)},F?.name),w.jsx(ie,{voice:_,variant:"offscreenRight"},_?.name),w.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-gradient-to-r from-[var(--main-surface-background)] to-transparent"}),w.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-gradient-to-l from-[var(--main-surface-background)] to-transparent"}),w.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"}),w.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"})]})}),w.jsx("div",{className:"mb-36 flex flex-col space-y-3",children:w.jsx(Li,{isUnauthenticated:r,loading:c,handleLoginClick:Te,handleCancelClick:H,handleConfirmClick:_e,selectedVoice:A,currentVoiceName:a,cameFromNux:t})})]})}function ie({voice:e,variant:n,onClick:t}){return w.jsxs(Ct.button,{onClick:t,className:"absolute flex w-48 select-none flex-col items-center justify-center",variants:Ui,animate:n,initial:n,transition:{duration:.25,ease:"easeInOut"},children:[w.jsx("p",{className:`text-lg ${n==="center"?"font-semibold":""}`,children:e?.name}),w.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:e?.description})]})}function An({direction:e,onClick:n,isFading:t}){const o=e==="prev"?Gt:Ot,r=Tn(),i=e==="prev"?r.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):r.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return w.jsx("button",{className:`duration-175 absolute ${e==="prev"?"-left-4":"-right-4"} top-2 z-50 transition-opacity ${t?"opacity-20":"opacity-100"}`,onClick:n,"aria-label":i,children:w.jsx(o,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})})}export{hr as $,Qi as A,Ce as B,Yi as C,ct as F,di as G,Xi as I,Wi as N,Hi as O,vn as R,vo as S,na as V,Ji as W,Ar as X,$i as Y,xe as _,j as a,zr as b,so as c,W as d,po as e,Pr as f,Zi as g,qi as h,On as i,uo as j,lo as k,ea as l,L as m,ki as n,Br as o,Wr as p,bt as q,Nn as r,ui as s,Je as t,O as u,_i as v,Ti as w,mo as x,Gi as y,Ki as z};
//# sourceMappingURL=izb3j19uxzfgwjiq.js.map
