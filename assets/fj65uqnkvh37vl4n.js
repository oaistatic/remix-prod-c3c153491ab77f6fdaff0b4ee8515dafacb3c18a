const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/h2e6s6ucndbipzzc.js","assets/fs6h2trisr1juto6.js","assets/d7a6rc8fexfzu7dt.js","assets/njq6ygky3ttysgdk.js","assets/root-cl538jor.css","assets/conversation-small-m9kq0y4e.css","assets/ijutvl794yycgs5p.js","assets/csg4i0wk6hi0jvkd.js","assets/lj0prj6na7gf1jpf.js","assets/n9whwsbg0rx5cs8k.js","assets/jcwamkbb0g9bz1kh.js","assets/emjevy1zmzft3tmm.js","assets/hrv8rdfcz5e1nz3e.js","assets/gvhvfcdqhc5unmaw.js","assets/ora9zmv2zdoi2bvo.js","assets/n630l50mugak0hae.js","assets/o3d0pfqxdj7nivvr.js","assets/loh8e64j4csffv26.js","assets/dr3h4pxnog1msvu6.js","assets/48b1r0bzghcb5a9u.js","assets/fu6bathgya5b9rdr.js","assets/kukctmibghbbqwq7.js","assets/gunpso70jnmarvod.js","assets/jyg6m0czwgwjnl3i.js","assets/en8ogvlmn3lccz09.js","assets/wqepkoieaii7q4ep.js","assets/gfo75oujoeaedm5y.js","assets/n1h3bv0q1kp4dflt.js","assets/o634nz6bc7e8bevz.js","assets/ohq33fk3dbalo2mk.js","assets/cffgjlidl1olpt2q.js","assets/i6ze5suolzahci5v.js","assets/npeck75bz46c490i.js","assets/m97sb2fnwj0a6vyo.js","assets/cm0hdcditutj2jz2.js","assets/jcoe6v231ph25bfi.js","assets/mfnl9tbidoj0ik29.js","assets/kjfpfp7cny491i17.js","assets/mi16gkof274z4h73.js","assets/ek0zfw3jxl64p1zu.js"])))=>i.map(i=>d[i]);
import{S as me,P as he,a as pe,d9 as we,I as Oe,dQ as Ae,dP as Ie,dN as je,a3 as Ee,da as Ne,av as Pe,aF as ye,e9 as Te,gh as ne,bw as _e,bx as De,eb as Le,bQ as w,bR as O,gi as Be,a0 as Re,gj as Fe,dx as ie,l as re,fY as Ve,fX as We,dV as Ge,g5 as Ue,E as ze,am as He,aZ as qe}from"./njq6ygky3ttysgdk.js";import{r as l,j as e,a7 as Me,f as Qe,b as be,e as xe,a5 as _,d as Ke,h as le,k as Ye}from"./fs6h2trisr1juto6.js";import{hO as Xe,hP as Ce,hQ as Ze,hR as Je,hS as $e,hT as ea,cI as I,hU as aa,hV as oa,ej as sa,hW as ta,hX as na,hY as ia,hZ as ra,h_ as la,h$ as da,i0 as ca,i1 as ua,i2 as fa,eD as ga,i3 as ma,i4 as ha,i5 as pa,i6 as Ma,i7 as ba,i8 as xa,i9 as Ca,ia as Sa,ib as va,ic as ka,id as wa,ie as Oa,ig as Aa,ih as Ia,ii as ja,ij as Ea,ik as Na,il as Pa,im as ya,H as Ta,Z as y,U as de,g8 as ce,cJ as L,io as _a,ip as Da,iq as La,ir as Ba,is as ue,it as Ra,cg as D,ch as T,iu as Fa,iv as Va,iw as Wa,ix as Ga,iy as Ua,k as za,eM as Ha,iz as qa,bA as Qa,F as Ka,iA as Ya,iB as Xa,T as fe,iC as Za,iD as Ja,iE as $a,e8 as eo}from"./d7a6rc8fexfzu7dt.js";import{b as ao,u as oo}from"./fu6bathgya5b9rdr.js";import{u as so,I as to}from"./kukctmibghbbqwq7.js";import{f as no,N as io,C as ro,a as lo}from"./ijutvl794yycgs5p.js";import{C as co}from"./n1h3bv0q1kp4dflt.js";import{M as uo}from"./cffgjlidl1olpt2q.js";import{K as fo}from"./mfnl9tbidoj0ik29.js";import{P as go}from"./csg4i0wk6hi0jvkd.js";function mo({clientThreadId:o}){const a=Xe(n=>n.notifications),t=l.useRef(new Set);return l.useEffect(()=>{a.filter(s=>s.clientThreadId===void 0||o===s.clientThreadId).map(s=>s.id).filter(s=>s!==void 0).forEach(s=>Ce(s)),a.forEach(s=>{s.id&&!t.current.has(s.id)&&(me.logEvent("chatgpt_notification_shown"),he.logEvent(pe.notificationShown),t.current.add(s.id))})},[o,a]),a.length===0||we?null:e.jsx("div",{className:"fixed right-4 top-8 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4",children:e.jsx(Me,{children:a.map(n=>e.jsx(po,{...n},n.id))})})}function ho({notification:o}){return e.jsx(Ze,{iconName:"openai",size:"medium",className:"border-token-secondary rounded-full border bg-token-main-surface-primary text-token-text-primary"})}function po({...o}){const a=Qe(),t=be(),n=xe(),s=Oe(o.clientThreadId),u=()=>{me.logEvent("chatgpt_notification_clicked"),he.logEvent(pe.notificationClicked),o.onClick!=null?o.onClick():s&&Je(a,t,s),o.id&&Ce(o.id)};return e.jsxs(_.div,{onClick:u,className:"inline-flex w-80 cursor-pointer items-center justify-start gap-2.5 rounded-2xl border border-token-border-light bg-token-main-surface-primary px-3 py-3 align-middle shadow-lg",initial:{opacity:0,x:320},animate:{opacity:1,x:0},exit:{opacity:0,x:320},transition:{duration:.5},children:[e.jsx(ho,{notification:o}),e.jsxs("div",{className:"inline-flex w-full shrink grow basis-0 flex-col items-start justify-start overflow-hidden",children:[e.jsx("div",{className:"w-full truncate text-sm font-medium text-token-text-primary",children:o.title??n.formatMessage({id:"mpXAeu",defaultMessage:"New chat"})}),e.jsx("div",{className:"w-full truncate text-sm text-token-text-tertiary",children:o.subtitle??n.formatMessage({id:"qMEc8J",defaultMessage:"New Message"})}),o.payload?.display_image_url&&e.jsx("img",{className:"mt-2 h-12 w-12 rounded-sm",src:o.payload.display_image_url,alt:o.title})]})]})}const Mo=({onClose:o})=>{const a=xe(),t=I(L.isBusinessWorkspace),n=I(u=>u.currentWorkspace),s=t?a.formatMessage(ge.workspaceWelcome,{workspaceName:n?.name}):"ChatGPT";return e.jsx(_e,{isOpen:!0,onClose:De,type:"success",title:s,size:"custom",noPadding:!0,className:"max-w-3xl",description:a.formatMessage(ge.personalOnboardingSubheading),children:e.jsx(_a,{onClose:o,scope:Da.Personal})})},bo=({onClose:o})=>{const a=Le.useStore();return l.useEffect(()=>(a.setOnCloseSideEffect(o),a.setManualVisibility(!0),()=>{a.setManualVisibility(!1)}),[o,a]),null};function xo({clientThreadId:o}){const[a,t]=l.useState(0),{hasSeenOnboardingDate:n}=$e(),{hasSeenTeamOwnerOnboardingDate:s}=ea(),u=I(L.isBusinessWorkspace),[A,i]=l.useState(!1),{data:m,isPending:j,isEnabled:E}=aa(),x=oa(m,j&&E),C=Ae(),S=Ie(),v=je(),[p,M]=Ee(o,r=>[!r||r.isLoading,r?.conversationOrigin]),{data:c,isError:g}=Ne(),b=Pe(c),f=c!=null,d=c&&c?.accountItems.length>1&&c.currentAccountId==null,k=c?.accountItems.some(r=>r.isPersonalAccount()),B=!!c?.accountItems&&c.accountItems.length>0&&c.accountItems.every(({canAccessWithCurrentSession:r})=>!r),{eligible:R,isLoading:F}=sa(),{value:V}=ye("1542198993"),{punchOutRequireLoginInfo:W}=ta(),{state:G}=na(),{isOpen:U,isLoading:z}=ia(),{isOpen:H,isLoading:q}=ra(),{isOpen:Q,isLoading:K}=la(),{isOpen:Y,isLoading:X}=da(),{state:Z}=ca(),J=ua(),$=so(),{isOpen:ee,isLoading:ae}=fa(),Se=ga(o),{shouldShowCookieBanner:oe,isCookieConsentBannerLoading:se}=Te(),h=l.useMemo(()=>[{Component:ma,getModalState:()=>W?"show":"hide",isDeferrable:!1},{Component:ha,getModalState:()=>G,isDeferrable:!1},{Component:pa,getModalState:()=>Z,isDeferrable:!1},{Component:Ma,getModalState:()=>ae?"loading":ee?"show":"hide",isDeferrable:!1},{Component:ba,getModalState:()=>z||p?"loading":M===ne.APPLE?"hide":U?"show":"hide",isDeferrable:!0},{Component:xa,getModalState:()=>X||p?"loading":M===ne.APPLE?"hide":Y?"show":"hide",isDeferrable:!0},{Component:bo,getModalState:()=>se?"loading":oe?"show":"hide",isDeferrable:!1},{Component:Mo,getModalState:()=>u?"hide":n===null?"loading":n===!1?"show":"hide",isDeferrable:!0},{Component:Ca,getModalState:()=>g?"hide":d?"show":f?"hide":"loading",isDeferrable:!1},{Component:Sa,getModalState:()=>C!==null?"show":g||f?"hide":"loading",isDeferrable:!1},{Component:va,getModalState:()=>S!==null?"show":g||f?"hide":"loading",isDeferrable:!1},{Component:ka,getModalState:()=>v!=null?"show":g||f?"hide":"loading",isDeferrable:!1},{Component:wa,getModalState:()=>f?B?"show":"hide":"loading",isDeferrable:!1},{Component:Oa,getModalState:()=>q?"loading":H?"show":"hide",isDeferrable:!1},{Component:Aa,getModalState:()=>K?"loading":Q?"show":"hide",isDeferrable:!1},{Component:Ia,getModalState:()=>"hide",isDeferrable:!1},{Component:ja,getModalState:()=>!b?.isTeam()||!b?.isOwnerOfAccount()||!k?"hide":!f||s===null?"loading":s===!1?"show":"hide",isDeferrable:!1},{Component:Ea,getModalState:()=>u?n===null?"loading":n===!1?"show":"hide":"hide",isDeferrable:!0},{Component:Na,getModalState:()=>F?"loading":R&&V?"show":"hide",isDeferrable:!1},{Component:Pa,getModalState:()=>x,isDeferrable:!1},{Component:ya,getModalState:()=>J,isDeferrable:!1},{Component:r=>e.jsx(to,{clientThreadId:o,...r}),getModalState:()=>$,isDeferrable:!1}],[W,G,Z,ae,ee,z,p,M,U,X,Y,se,oe,u,n,g,d,f,C,S,v,B,q,H,K,Q,b,k,s,F,R,V,x,J,o,$]);l.useEffect(()=>{if(h[a]&&h[a].getModalState()==="hide"){const r=h.findIndex(ke=>ke.getModalState()!=="hide");t(r)}},[a,h]);const N=h[a],P=N?.getModalState()==="show";if(l.useEffect(()=>{const r=Ta.getState().activeModals.has(y.BlockingInitialComponent);P!==r&&(P?de.openModal(y.BlockingInitialComponent):de.closeModal(y.BlockingInitialComponent))},[P]),N==null)return ce.trackNamespace(ce.NS_COMPOSER),e.jsx("span",{"data-testid":"blocking-initial-modals-done",className:"hidden"});if(h[a].isDeferrable&&(A||Se))return t(r=>r+1),null;const te=N.getModalState();if(te==="loading")return null;te==="hide"&&t(r=>r+1);const ve=h[a].Component;return e.jsx(ve,{onClose:()=>{i(!0),t(r=>r+1)}})}const ge=Ke({workspaceWelcome:{id:"BlockingInitialModals.workspaceWelcome",defaultMessage:"Welcome to the {workspaceName} workspace"},personalOnboardingSubheading:{id:"BlockingInitialModals.personalOnboardingSubheading",defaultMessage:"Tips for getting started"}}),Co=w(()=>O(()=>import("./h2e6s6ucndbipzzc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(o=>o.MadlibsModal));function So(){const o=no();return e.jsxs(e.Fragment,{children:[e.jsx(vo,{}),o&&e.jsx(io,{})]})}function vo(){const{isOpen:o}=La();return o?e.jsx(Co,{}):null}const ko=450;function wo({children:o,clientThreadId:a,isOpen:t,onClose:n,type:s}){return e.jsx(Me,{children:t&&e.jsx(Be,{children:e.jsx(Ba.Provider,{value:{isEmbeddedInFocusedView:!0,type:s},children:e.jsxs("div",{className:"absolute inset-0 flex flex-col",children:[e.jsx(_.div,{className:"h-full w-full bg-token-main-surface-secondary",...ue}),e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx("div",{className:"flex-grow overflow-auto",children:o}),e.jsx(_.div,{className:"relative shrink-0 border-l border-token-border-medium bg-token-main-surface-primary",style:{width:ko},...ue,children:e.jsx("div",{className:"h-[100vh] pb-4",children:e.jsx(uo,{clientThreadId:a,hideHeader:!0,hideFooter:!0,hideToolsOverlay:!0,messagesVerticalAlign:"bottom"},a)})})]})]})})})})}const Oo=w(()=>O(()=>import("./jcwamkbb0g9bz1kh.js"),__vite__mapDeps([10,3,1,4,2,5,11,12,13,14]))),Ao=w(()=>O(()=>import("./n630l50mugak0hae.js"),__vite__mapDeps([15,3,1,4,2,5,16,17,18,19,20,8,7,21,6,9,22,23,24,13,25,26,27,28,29,30,31,32,33,34,35,36])).then(o=>o.ImageEditor)),Io=w(async()=>O(()=>import("./kjfpfp7cny491i17.js"),__vite__mapDeps([37,3,1,4,2,5,16,17,18,38,19,20,8,7,21,6,9,22,23,24,13,25,26,27,28,29,30,31,32,33,34,35,36])).then(o=>o.ImageGenEditor));function jo({clientThreadId:o}){const a=Ra();l.useEffect(()=>{D.close()},[o]);let t;return a?.type===T.ADAVisualization?t=e.jsx(Oo,{clientThreadId:o,visualization:a.visualization}):a?.type===T.Image?t=e.jsx(Ao,{clientThreadId:o,messageId:a.messageId,image:a.image,allImages:a.allImages},a.image.asset_pointer):a?.type===T.ImageGen&&(t=e.jsx(Io,{clientThreadId:o,messageId:a.messageId,image:a.image,allImages:a.allImages},a.image.asset_pointer)),e.jsx(wo,{clientThreadId:o,isOpen:a!=null,onClose:D.close,type:a?.type,children:t})}var Eo={};const No=w(()=>O(()=>import("./ek0zfw3jxl64p1zu.js"),__vite__mapDeps([39,1,3,4,2,5,20,8,7,6,9,30,31,24,23,21,22,13,25,26,32,33,34,35])));function Uo(o){const{urlThreadId:a,clientThreadId:t,prefetchSearch:n}=o,s=Re(),u=le(),[A]=Ye(),[i,m]=l.useState(()=>{if(a!==void 0){const d=a;return Fe(d)??d}return t!==void 0?t:ie()});a!==void 0&&i!==a&&(re(i)===a||m(a));const j=Fa(le());l.useEffect(()=>{a===void 0&&re(i)!==void 0&&m(ie())},[a,i,j]);const E=I(L.workspaceId),{eligible:x,isLoading:C,markAsViewed:S}=Va(),v=Wa(),{eligible:p,isLoading:M,markAsViewed:c}=Ga(),g=Ua(),b=za();l.useEffect(()=>{Ve(!0).then(d=>{d.force_login&&b({authType:"login"}),Ha.initializeAndGatherData(d),We.initializeAndGatherData(d)})},[b]),l.useEffect(()=>{const d=A.get(qa)==="true";s!==d&&Ge.setIsTemporaryChatEnabled(d)},[s,A]),l.useEffect(()=>{u.state?.focusObject&&D.setFocusedObject(u.state.focusObject)},[u.state?.focusObject]),l.useEffect(()=>{!C&&x&&(S(),v())},[x,C,S,v]),l.useEffect(()=>{!M&&p&&(c(),g())},[p,M,c,g]),ao(i);const f=be();return l.useEffect(()=>Ue(qe,{completionFinished:d=>{if(d.serverThreadId!=null&&!s){const k=ze(d.serverThreadId)?.mode;k?.kind===He.GizmoInteraction&&eo.handleGizmoInteracted(f,k.gizmo_id)}}}),[s,f]),e.jsx(Qa.Provider,{value:null,children:e.jsx(Ka,{children:e.jsxs(Ya,{clientThreadId:i,children:[e.jsxs(ro,{clientThreadId:i,children:[e.jsx(go,{clientThreadId:i,children:e.jsx(xo,{clientThreadId:i},E)}),e.jsx(Po,{clientThreadId:i,setClientThreadId:m}),e.jsx(fo,{}),e.jsx(Xa,{}),e.jsx(lo,{clientThreadId:i,setClientThreadId:m,prefetchSearchPromises:n,children:e.jsxs(fe,{clientThreadId:i,children:[e.jsx(co,{urlThreadId:a,clientThreadId:i,setClientThreadId:m}),e.jsx(So,{})]})})]}),e.jsx(fe,{clientThreadId:i,children:e.jsx(jo,{clientThreadId:i})}),e.jsx(Za,{clientThreadId:i}),e.jsx(Ja,{}),e.jsx(mo,{clientThreadId:i}),e.jsx($a,{}),null]})})})}function Po({clientThreadId:o,setClientThreadId:a}){const{isOpen:t,isLoading:n}=oo();return!n&&t?e.jsx(No,{clientThreadId:o,setClientThreadId:a}):null}typeof window<"u"&&(window._g=Eo.GOKU_SERVICE);export{Uo as C,ko as F};
//# sourceMappingURL=fj65uqnkvh37vl4n.js.map
