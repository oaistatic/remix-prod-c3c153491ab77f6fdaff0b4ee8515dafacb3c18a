import{al as B,bH as C,d as g,el as D,cD as Z,dv as j,cJ as Y,bx as K,bw as Q,c5 as E,e$ as X,gb as ee,f9 as te,fa as se,aq as ne,ff as ae}from"./njq6ygky3ttysgdk.js";import{r as x,j as e,e as P,M as c,ae as F,a7 as ie,f as _,a5 as H,u as oe,z as re}from"./fs6h2trisr1juto6.js";import{N as le}from"./l4ce2zdnnawhaijx.js";import{hh as de,hi as ce,o as ue,hj as me,hk as k,hl as xe,fq as fe,gR as ge,d7 as Ce,dB as pe,hm as he}from"./d7a6rc8fexfzu7dt.js";import{G as je}from"./en8ogvlmn3lccz09.js";import{G as ye}from"./nfsyatvjas08jshp.js";import{F as p,a as h,b as I,c as ve,G as be}from"./bkmz6jrk6gvxlvc5.js";const we=x.memo(function({onSelectVersion:t,selectedVersion:s,currentVersion:o,gizmoVersions:i}){const{value:a}=B("3645668434");return a?e.jsx(_e,{selectedVersion:s,onSelectVersion:t,currentVersion:o,gizmoVersions:i}):null}),ze=C.div`flex h-full w-full max-w-3xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary px-2 py-6`;function _e({onSelectVersion:n,selectedVersion:t,currentVersion:s,gizmoVersions:o}){const i=o?.items.reduce((a,l)=>{const d=new Date(l.updated_at),m=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;return a[m]||(a[m]=[]),a[m].push(l),a},{});return i?e.jsx(ze,{children:Object.keys(i).map((a,l)=>e.jsx(Se,{date:a,entries:i[a],selectedVersion:t,onSelectVersion:n,currentVersion:s},l))}):null}const T=({name:n,userId:t,showName:s=!1})=>e.jsxs("div",{className:"flex items-center gap-1.5",children:[s&&e.jsx("span",{className:"max-w-[100px] text-ellipsis text-xs text-token-text-secondary",children:n},t),e.jsx("div",{className:g("flex h-[18px] w-[18px] items-center justify-center rounded-full text-[8px] text-white",de(t)),children:ce(n)})]}),Ne=C.div`flex w-full flex-col rounded-lg px-3 py-2 text-base hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary`,Me=C.div`px-3 text-sm font-medium text-token-text-secondary`,Ve=C.div`flex flex-col space-y-1`,Ie=C.div`mb-8 flex flex-col space-y-2`;function U(n,t){const s=new Date(t),o=new Date,i=new Date(o);i.setDate(o.getDate()-1);const a=n.locale||"en-US";return s.toDateString()===o.toDateString()?"Today":s.toDateString()===i.toDateString()?"Yesterday":new Intl.DateTimeFormat(a,{dateStyle:"medium"}).format(s)}const Se=({date:n,entries:t,onSelectVersion:s,selectedVersion:o,currentVersion:i})=>{const a=P(),l=d=>d===i;return e.jsxs(Ie,{children:[e.jsx(Me,{children:U(a,n)}),e.jsx(Ve,{children:t.map((d,m)=>e.jsx(Le,{item:d,isCurrentVersion:l,selectedVersion:o,onSelectVersion:s},m))})]})},Le=({item:n,isCurrentVersion:t,selectedVersion:s,onSelectVersion:o})=>{const[i,a]=x.useState(!1),{version:l,updated_at:d,author:m}=n;return e.jsx(Ne,{className:g(s===l&&"bg-token-sidebar-surface-tertiary"),onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),onClick:()=>o(l),children:e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx("div",{className:"text-base",children:t(l)?e.jsx(c,{id:"gizmo.version.current",defaultMessage:"Current version"}):e.jsx(F,{value:d,timeStyle:"short"})}),e.jsx(ie,{children:!t(l)&&m&&e.jsx(T,{showName:s===l||i,name:m.user_name,userId:m.user_id})})]})})},ke=n=>x.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},x.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.33359 1.33325C7.70178 1.33325 8.00025 1.63173 8.00025 1.99992V13.9999C8.00025 14.3681 7.70178 14.6666 7.33359 14.6666C6.96539 14.6666 6.66692 14.3681 6.66692 13.9999V13.3333H5.17273C4.63608 13.3333 4.19317 13.3333 3.83237 13.3038C3.45764 13.2732 3.11317 13.2075 2.78961 13.0426C2.28785 12.7869 1.8799 12.379 1.62423 11.8772C1.45937 11.5537 1.39366 11.2092 1.36305 10.8345C1.34434 10.6055 1.33751 10.3435 1.33502 10.0455C1.33319 10.0186 1.33302 9.99171 1.33445 9.96494C1.33358 9.81672 1.33358 9.65989 1.33359 9.49412V6.50572C1.33358 5.96907 1.33357 5.52617 1.36305 5.16537C1.39366 4.79064 1.45937 4.44617 1.62423 4.12261C1.8799 3.62085 2.28785 3.2129 2.78961 2.95723C3.11317 2.79237 3.45764 2.72666 3.83237 2.69605C4.19316 2.66657 4.63607 2.66658 5.17272 2.66658L6.66692 2.66659V1.99992C6.66692 1.63173 6.96539 1.33325 7.33359 1.33325Z",fill:"currentColor"}),x.createElement("path",{d:"M10.8278 2.66658C11.3644 2.66658 11.8073 2.66657 12.1681 2.69605C12.5429 2.72666 12.8873 2.79237 13.2109 2.95723C13.7127 3.2129 14.1206 3.62085 14.3763 4.12261C14.5411 4.44617 14.6068 4.79064 14.6375 5.16537C14.6669 5.52617 14.6669 5.96907 14.6669 6.50572V9.49412C14.6669 10.0308 14.6669 10.4737 14.6375 10.8345C14.6068 11.2092 14.5411 11.5537 14.3763 11.8772C14.1206 12.379 13.7127 12.7869 13.2109 13.0426C12.8873 13.2075 12.5429 13.2732 12.1681 13.3038C11.8073 13.3333 11.3644 13.3333 10.8278 13.3333H10.0003C9.63206 13.3333 9.33359 13.0348 9.33359 12.6666C9.33359 12.2984 9.63206 11.9999 10.0003 11.9999H10.8003C11.3713 11.9999 11.7595 11.9994 12.0596 11.9749C12.3518 11.951 12.5013 11.9077 12.6056 11.8546C12.8565 11.7268 13.0604 11.5228 13.1883 11.2719C13.2414 11.1676 13.2847 11.0182 13.3086 10.7259C13.3331 10.4258 13.3336 10.0376 13.3336 9.46659V6.53325C13.3336 5.9622 13.3331 5.574 13.3086 5.27394C13.2847 4.98167 13.2414 4.8322 13.1883 4.72793C13.0604 4.47705 12.8565 4.27307 12.6056 4.14524C12.5013 4.09212 12.3518 4.04883 12.0596 4.02495C11.7595 4.00044 11.3713 3.99992 10.8003 3.99992H10.0003C9.63206 3.99992 9.33359 3.70144 9.33359 3.33325C9.33359 2.96506 9.63206 2.66659 10.0003 2.66659L10.8278 2.66658Z",fill:"currentColor"})),Re=n=>x.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},x.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00074 1.99967C8.00074 1.63148 7.70226 1.33301 7.33407 1.33301C6.96588 1.33301 6.66741 1.63148 6.66741 1.99967V2.66634L5.17321 2.66634H5.1732H5.1732H5.1732C4.63656 2.66633 4.19365 2.66633 3.83286 2.6958C3.45812 2.72642 3.11366 2.79213 2.7901 2.95699C2.28833 3.21265 1.88039 3.6206 1.62472 4.12237C1.45986 4.44592 1.39415 4.79039 1.36354 5.16512C1.33406 5.52592 1.33406 5.96883 1.33407 6.50548V9.49387C1.33407 9.65965 1.33407 9.81647 1.33493 9.9647C1.33351 9.99147 1.33368 10.0184 1.3355 10.0453C1.338 10.3433 1.34483 10.6053 1.36354 10.8342C1.39415 11.209 1.45986 11.5534 1.62472 11.877C1.88039 12.3787 2.28833 12.7867 2.7901 13.0424C3.11366 13.2072 3.45812 13.2729 3.83286 13.3035C4.19366 13.333 4.63657 13.333 5.17322 13.333H6.66741V13.9997C6.66741 14.3679 6.96588 14.6663 7.33407 14.6663C7.70226 14.6663 8.00074 14.3679 8.00074 13.9997V1.99967ZM12.1686 2.6958C11.8078 2.66633 11.3649 2.66633 10.8283 2.66634L10.0007 2.66634C9.63255 2.66634 9.33407 2.96482 9.33407 3.33301C9.33407 3.7012 9.63255 3.99967 10.0007 3.99967H10.8007C11.3718 3.99967 11.76 4.00019 12.06 4.02471C12.3523 4.04859 12.5018 4.09187 12.6061 4.145C12.8569 4.27283 13.0609 4.4768 13.1887 4.72769C13.2419 4.83195 13.2852 4.98142 13.309 5.2737C13.3336 5.57376 13.3341 5.96196 13.3341 6.53301V9.46634C13.3341 10.0374 13.3336 10.4256 13.309 10.7256C13.2852 11.0179 13.2419 11.1674 13.1887 11.2717C13.0609 11.5225 12.8569 11.7265 12.6061 11.8544C12.5018 11.9075 12.3523 11.9508 12.06 11.9746C11.76 11.9992 11.3718 11.9997 10.8007 11.9997H10.0007C9.63255 11.9997 9.33407 12.2982 9.33407 12.6663C9.33407 13.0345 9.63255 13.333 10.0007 13.333H10.8283C11.3649 13.333 11.8078 13.333 12.1686 13.3035C12.5434 13.2729 12.8878 13.2072 13.2114 13.0424C13.7131 12.7867 14.1211 12.3787 14.3768 11.877C14.5416 11.5534 14.6073 11.209 14.6379 10.8342C14.6674 10.4734 14.6674 10.0305 14.6674 9.49387V6.50548C14.6674 5.96883 14.6674 5.52592 14.6379 5.16512C14.6073 4.79039 14.5416 4.44592 14.3768 4.12237C14.1211 3.6206 13.7131 3.21265 13.2114 2.95699C12.8878 2.79213 12.5434 2.72642 12.1686 2.6958ZM2.69251 10.7257C2.68373 10.6182 2.67803 10.4994 2.67433 10.365L2.66748 8.79692V6.53309C2.66748 5.96204 2.668 5.57384 2.69251 5.27378C2.71639 4.9815 2.75968 4.83204 2.81281 4.72777C2.94064 4.47689 3.14461 4.27291 3.39549 4.14508C3.49976 4.09195 3.64923 4.04867 3.94151 4.02479C4.24157 4.00027 4.62976 3.99976 5.20081 3.99976H6.66748V9.90973V11.9998H5.20081C4.62976 11.9998 4.24157 11.9992 3.94151 11.9747C3.64923 11.9508 3.49976 11.9076 3.39549 11.8544C3.14461 11.7266 2.94064 11.5226 2.81281 11.2717C2.75968 11.1675 2.71639 11.018 2.69251 10.7257Z",fill:"currentColor"})),Ae=({gizmoId:n,version:t,skip:s=!1})=>oe({queryFn:async()=>Ce.getVersion({gizmoId:n,version:t}),queryKey:["gizmo","version",{gizmoId:n,version:t}],enabled:!s}),O=(n,t)=>`/gpts/editor/${n}?version=${t}`,G=C.div`flex h-screen w-full flex-col items-center`,$=C.div`flex w-full grow overflow-hidden`,J=C.div`flex h-full grow flex-wrap items-start justify-between gap-4 overflow-auto`,q=C.div`sticky top-0 flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium bg-token-main-surface-primary px-3 py-3`;function De({gizmoId:n}){const{data:t,isLoading:s,refetch:o}=ue(n),i=t?.gizmo?.current_user_permission,a=i?.can_write??!1,l=i?.can_view_config??!1;return!t||s?null:a?e.jsx(He,{gizmoResource:t,refetchGizmo:o}):l?e.jsx(Ee,{gizmoResource:t}):null}const W=({children:n})=>{const t=_();return e.jsxs("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>t(-1),children:[e.jsx(X,{className:"icon-lg"}),e.jsx("div",{className:"font-semibold",children:n})]})},Ee=({gizmoResource:n})=>{const t=_(),s=me(),o=n.gizmo.id,i=async()=>{const a=await s.mutateAsync({gizmoId:o});a.gizmo.id&&t(`/gpts/editor/${a.gizmo.id}`)};return e.jsxs(G,{children:[e.jsxs(q,{children:[e.jsx(W,{children:e.jsx(c,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})}),e.jsx("div",{className:"mr-4 flex gap-2",children:e.jsx(k,{color:"secondary",loading:s.isPending,onClick:i,children:e.jsx(c,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]}),e.jsx($,{children:e.jsx(J,{children:e.jsx(R,{displayGizmo:n})})})]})},He=({gizmoResource:n,refetchGizmo:t})=>{const s=n.gizmo.id,{data:o,refetch:i}=xe({gizmoId:s});x.useEffect(()=>{t(),i()},[t,i]);const a=n?.gizmo.live_version;return a==null||!o?null:e.jsx(Oe,{gizmoResource:n,currentVersion:a,gizmoVersions:o})};function Oe({gizmoResource:n,currentVersion:t,gizmoVersions:s}){const o=_(),i=n.gizmo.id,[a,l]=x.useState(t),[d,m]=x.useState(!1),[u,b]=x.useState(!1),w=()=>{o(a?O(i,a):pe(i))},z=()=>{if(a!==t&&n.tools.find(v=>v.type===j.JIT_PLUGIN&&v.metadata.auth?.type!==ee.None)){b(!0);return}o(O(i,a))},N=()=>{a===t&&t>1&&l(t-1),d&&l(t),m(!d)},y=t>1;x.useEffect(()=>{a===t&&m(!1)},[a,t]);const{data:r,isLoading:f}=Ae({gizmoId:i,version:a});return e.jsxs(G,{children:[e.jsxs(q,{children:[e.jsx(W,{children:e.jsx(c,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"})}),e.jsxs("div",{className:"mr-4 flex gap-2",children:[y&&e.jsx(D,{label:e.jsx(c,{id:"gizmo.readonly.compareTooltip",defaultMessage:"Compare to the previous version"}),disabled:!y||d,children:e.jsx(k,{color:d?"primary":"secondary",className:g("btn rounded-full border transition-colors",d?g(le,"border-transparent"):"border-token-border-light bg-transparent hover:bg-token-surface-hover"),onClick:N,icon:d?ke:Re,children:d?e.jsx(c,{id:"gizmo.readonly.comparing",defaultMessage:"Comparing changes"}):e.jsx(c,{id:"gizmo.readonly.compare",defaultMessage:"Compare changes"})})}),e.jsx(D,{label:e.jsx(c,{id:"gizmo.readonly.restoreVersionTooltip",defaultMessage:"You will be able to edit before publishing"}),disabled:a===t,children:e.jsx(k,{color:"secondary",disabled:a===t,icon:fe,onClick:z,children:e.jsx(c,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})})})]})]}),e.jsxs($,{children:[e.jsx(we,{selectedVersion:a,currentVersion:t,onSelectVersion:l,gizmoVersions:s}),f&&e.jsx("div",{className:"flex h-full w-full grow flex-col items-center justify-center",children:e.jsx(Z,{})}),r&&e.jsxs(J,{children:[e.jsx(R,{displayGizmo:r,isComparing:d,gizmoVersions:s}),d&&e.jsx(R,{displayGizmo:n,compareToGizmo:r,setIsComparing:m,isComparing:!0,gizmoVersions:s})]})]}),u&&e.jsx(Fe,{onClose:()=>b(!1),onContinue:w})]})}const S=(n,t=[],s=[],o)=>n?[...s,...t.filter(o)]:t,L=(n,t)=>g(n&&t?"bg-blue-1000/10":"bg-token-main-surface-secondary");function R({isComparing:n,displayGizmo:t,compareToGizmo:s,setIsComparing:o,gizmoVersions:i}){const a=P(),l=t.gizmo.display.name!==s?.gizmo.display.name,d=t.gizmo.display.description!==s?.gizmo.display.description,m=t.gizmo.instructions!==s?.gizmo.instructions,u=n&&!!s,b=S(u,t.gizmo.display.prompt_starters??[],s?.gizmo.display.prompt_starters??[],r=>!s?.gizmo.display.prompt_starters?.includes(r)),w=S(u,t.files??[],s?.files??[],r=>!s?.files?.find(f=>f.id===r.id)),z=S(u,t.tools?.filter(r=>r.type===j.JIT_PLUGIN)??[],s?.tools?.filter(r=>r.type===j.JIT_PLUGIN)??[],r=>r.type===j.JIT_PLUGIN&&!s?.tools.find(f=>f.type===j.JIT_PLUGIN&&f.metadata.action_id===r.metadata.action_id)),N=t.gizmo.display.profile_picture_url!==s?.gizmo.display.profile_picture_url,y=i?.items.find(r=>r.version===t.gizmo.version)?.author;return e.jsx(H.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.2},className:g("relative flex min-w-0 flex-1 flex-grow justify-center overflow-auto",u&&"border-l"),children:e.jsxs("div",{className:"flex w-full max-w-2xl flex-col px-4 py-8 text-sm",children:[e.jsxs(H.div,{initial:{opacity:n?0:1},animate:{opacity:n?1:0},transition:{duration:.2},className:"mb-4 flex w-full items-center justify-between",children:[e.jsx("div",{className:"text-base text-token-text-tertiary",children:s?e.jsx(c,{id:"gizmo.readonly.currentVersion",defaultMessage:"Current"}):e.jsx(c,{id:"gizmo.readonly.previous",defaultMessage:"Previous"})}),e.jsxs("div",{className:"flex items-center gap-2",children:[t.gizmo.version_updated_at&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(c,{id:"gizmo.readonly.updatedAt",defaultMessage:"{date} at {time}",values:{date:U(a,t.gizmo.version_updated_at),time:e.jsx(F,{value:new Date(t.gizmo.version_updated_at),hour:"numeric",minute:"numeric"})}})}),y&&e.jsx(T,{name:y.user_name,userId:y.user_id}),s&&o&&e.jsx(Y,{onClick:()=>o(!1)})]})]}),e.jsx(p,{className:"self-center",children:e.jsx(je,{src:t.gizmo.display.profile_picture_url,isFirstParty:!1,className:g("h-20 w-20",N&&s&&"rounded-full border-4 border-blue-1000 border-opacity-10"),showLoading:!0})}),e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),e.jsx(I,{type:"text",value:t.gizmo.display.name??"",disabled:!0,className:L(u,l)})]}),e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),e.jsx(I,{type:"text",value:t.gizmo.display.description??"",disabled:!0,className:L(u,d)})]}),e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),e.jsx(ve,{rows:8,value:t.gizmo.instructions??"",disabled:!0,className:g("resize-none",L(u,m))})]}),b.length>0&&e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),b.map((r,f)=>{const v=!s?.gizmo.display.prompt_starters?.includes(r),M=!t.gizmo.display.prompt_starters?.includes(r);return e.jsx(I,{type:"text",value:r,disabled:!0,className:g("mb-2 resize-none bg-token-main-surface-secondary",A(u,v,M))},f)})]}),w.length>0&&e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),e.jsx("div",{className:"flex flex-wrap gap-1",children:w.map((r,f)=>{const v=!s?.files?.find(V=>V.id===r.id),M=!t.files?.find(V=>V.id===r.id);return e.jsx(ge,{file:r.name,fileId:r.id,className:A(u,v,M)},f)})})]}),e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),e.jsx(ye,{enabledTools:t.tools,diffedEnabledTools:s?.tools,onEnabledToolsChange:K})]}),!!z.length&&e.jsxs(p,{children:[e.jsx(h,{label:e.jsx(c,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),e.jsx("div",{className:"flex flex-col gap-1",children:z.map((r,f)=>e.jsx(Pe,{tool:r,isDiffed:u,compareToGizmo:s,displayGizmo:t},f))})]})]})})}const Be=C.textarea`mb-8 rounded-lg block h-96 w-full border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary`,Pe=({tool:n,compareToGizmo:t,displayGizmo:s,isDiffed:o})=>{const i=n,[a,l]=x.useState(!1),d=!t?.tools?.find(u=>u.type===j.JIT_PLUGIN&&u.metadata.action_id===i.metadata.action_id),m=!s.tools.find(u=>u.type===j.JIT_PLUGIN&&u.metadata.action_id===i.metadata.action_id);return e.jsxs(e.Fragment,{children:[e.jsx(be,{isDisabled:!1,actionTool:i,className:A(o,d,m),onShowActionsEditor:()=>l(u=>!u)}),a&&e.jsx(Be,{readOnly:!0,value:i.metadata.raw_spec??""})]})},A=(n,t,s)=>g(n&&t&&"!bg-blue-1000/10",n&&s&&"!bg-blue-1000/10 text-token-text-secondary line-through opacity-50");function Fe({onClose:n,onContinue:t}){const[s,o]=x.useState(!1);return e.jsx(Q,{isOpen:!0,onClose:n,type:"warning",showCloseButton:!0,title:e.jsx(c,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:e.jsx(E,{onClick:()=>{o(!0),t()},loading:s,color:"secondary",children:e.jsx(c,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:e.jsx(E,{onClick:n,color:"secondary",children:e.jsx(c,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:e.jsx(c,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}const Ze=()=>(se(),null),Ye=te(function(){const t=ne(),s=_(),i=re().gizmoId??"",a=ae(i),{value:l}=B("3645668434");return x.useEffect(()=>{t!=null&&t.isFree()&&s("/")},[t,s]),x.useEffect(()=>{a&&he(a)&&s(`/g/${i}/project`)},[a,s,i]),l?e.jsx(De,{gizmoId:a}):null});export{Ze as clientLoader,Ye as default};
//# sourceMappingURL=i7xbew2mdpg6exbt.js.map
