import{V as He,dA as Ye,S as V,P as H,a as N,aF as Qe,aG as Ze,bw as se,cD as ue,by as U,c5 as Se,d as K,fS as Xe,bT as me,aq as Ne,cj as Te,bG as te,aM as $e,al as Je,T as v,Z as et,R as ge,A as tt,gc as st,C as at,h as ot,j as rt,a3 as Ee,a0 as lt,bP as it,cH as le,bF as nt,F as dt,g as ie,L as ne}from"./njq6ygky3ttysgdk.js";import{e as he,r as u,j as e,M as l,L as ct,a7 as Ie,a5 as Ue,d as xe,b as ut,c as mt,u as fe,k as gt}from"./fs6h2trisr1juto6.js";import{hn as ht,U as xt,Z as ft,bk as pt,ho as Mt,hp as bt,hq as yt,hr as je,hs as Ct,c7 as St,ht as Tt,fq as jt,Y as vt,hu as wt,hv as kt,hw as Pt,dH as _t,hx as Ht,hy as Nt,bi as Le,gp as ve,hz as Et,hA as It,ds as Ut,hB as Lt,c6 as At,b$ as Bt,hC as Dt,hD as Ot,g4 as S,hE as Rt,hF as Ft,hG as zt,hH as Wt}from"./d7a6rc8fexfzu7dt.js";function Gt({onSuccess:s,onError:t}){const o=ut();return mt({mutationFn:({userContext:a})=>et.createOrUpdateUserSystemMessage(a),onSettled:(a,c)=>{const d=["userContext"];a!==null&&!c?o.setQueryData(d,a):o.invalidateQueries({queryKey:d})},onSuccess:s,onError:t})}function qt(s){const t=he(),o=He();return fe({queryKey:["userContext"],queryFn:()=>ge.safeGet("/user_system_messages").catch(a=>{throw o.danger(t.formatMessage({id:"userContextModal.getCustomInstructionsError",defaultMessage:"Failed to get your settings"})),a}),enabled:s,select:a=>({aboutUserMessage:a.about_user_message??"",aboutModelMessage:a.about_model_message??"",nameUserMessage:a.name_user_message??"",roleUserMessage:a.role_user_message??"",traitsModelMessage:a.traits_model_message??"",otherUserMessage:a.other_user_message??"",disabledTools:a.disabled_tools??[],enabled:a.enabled??!0})})}function Vt(){return fe({queryKey:["userIsInSearchHoldoutWithWebDisabled"],queryFn:()=>ge.safeGet("/user_is_in_search_holdout_with_web_disabled",{authOption:tt.SendIfAvailable}),select:s=>({userIsInSearchHoldoutWithWebDisabled:s.user_is_in_search_holdout_with_web_disabled??!1})})}const we={aboutUserMessage:void 0,aboutModelMessage:void 0,nameUserMessage:void 0,roleUserMessage:void 0,traitsModelMessage:void 0,otherUserMessage:void 0,disabledTools:void 0,enabled:void 0};function cs({isModalOpen:s}){const t=he(),o=He(),a=ht(),[c,d]=u.useState(!1),{isLoading:n,data:x}=qt(s),{aboutUserMessage:f="",aboutModelMessage:g="",nameUserMessage:m="",roleUserMessage:h="",traitsModelMessage:y="",otherUserMessage:T="",disabledTools:O=[],enabled:R}=x??{},[F,q]=u.useState(we),{aboutUserMessage:C,aboutModelMessage:j,nameUserMessage:L,roleUserMessage:E,traitsModelMessage:_,otherUserMessage:A,disabledTools:B,enabled:p}=F,w=p??!!R,[z,oe]=u.useState(null),k=r=>{const M=(b,Ve,Ke)=>b!==void 0?b:Ve??Ke;q(b=>({...b,...r,aboutUserMessage:M(r.aboutUserMessage,b.aboutUserMessage,f),aboutModelMessage:M(r.aboutModelMessage,b.aboutModelMessage,g),nameUserMessage:M(r.nameUserMessage,b.nameUserMessage,m),roleUserMessage:M(r.roleUserMessage,b.roleUserMessage,h),traitsModelMessage:M(r.traitsModelMessage,b.traitsModelMessage,y),otherUserMessage:M(r.otherUserMessage,b.otherUserMessage,T),enabled:M(r.enabled,b.enabled,w),disabledTools:M(r.disabledTools,b.disabledTools,O)}))},Y=u.useCallback(()=>{xt.closeModal(ft.UserContext),q(we),oe(null)},[]),Be=pt(),{isPending:Q,mutate:pe}=Gt({onSuccess:r=>{const M=st(r,Be);M&&at.setCookie(ot.GreetingName,M),Y()},onError:r=>(r.response?.reason==="content_policy"&&r.response?.field?oe(r.response?.field):o.danger(t.formatMessage({id:"userContextModal.saveError",defaultMessage:"Failed to update settings"})),r)}),[Me,be]=u.useState(!1),[Z,De]=u.useState(!1),[re,Oe]=u.useState([]),X=[C,j,L,E,_,A].some(r=>ae(r??"")),$=[{local:j,server:g},{local:C,server:f},{local:L,server:m},{local:E,server:h},{local:_,server:y},{local:A,server:T}].some(({local:r,server:M})=>r!==void 0&&r!==M)||B!==void 0&&!Ye(B,O)||p!==void 0&&p!==R,J=u.useCallback(()=>{V.logEvent("chatgpt_user_context_cancel_clicked"),H.logEvent(N.userContextCancelClicked),$?be(!0):Y()},[Y,$]),ye=u.useCallback(async()=>{if(!Q){oe(null);const r={aboutUserMessage:C??"",aboutModelMessage:j??"",nameUserMessage:L??"",roleUserMessage:E??"",traitsModelMessage:_??"",otherUserMessage:A??"",disabledTools:B??[],enabled:!!p},M={name:m,role:h,traits:y,other:T},b={name:r.nameUserMessage,role:r.roleUserMessage,traits:r.traitsModelMessage,other:r.otherUserMessage,traitPillsSelected:re};H.logEvent(N.userContextSaveCustomizeChatGPT,{previousState:M,newState:b}),V.logEvent("chatgpt_user_context_save_custom_instructions",void 0,{previousState:JSON.stringify(M),newState:JSON.stringify(b)}),pe({userContext:r})}},[Q,j,C,L,E,_,A,B,p,re,m,h,y,T,pe]),I=u.useCallback(()=>{if(X){const r=ae(C??""),M=ae(j??"");r&&(V.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_user_message",limit:D.toString(),character_length:C?.length.toString()??""}),H.logEvent(N.userContextModelMessagePastLimit,{type:"about_user_message",limit:D.toString(),character_length:C?.length.toString()??""})),M&&(V.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_model_message",limit:D.toString(),character_length:j?.length.toString()??""}),H.logEvent(N.userContextModelMessagePastLimit,{type:"about_model_message",limit:D.toString(),character_length:j?.length.toString()??""})),o.danger(t.formatMessage(i.messageLimitError,{limit:D}),{duration:4,hasCloseButton:!0});return}ye()},[t,X,j,C,ye,o]),{value:Re}=Qe("809056127"),{layer:Fe}=Ze("3206655705"),ze=Re&&Fe.get("enable_new_ux",!0),ee=u.useRef(null),[Ce,We]=u.useState(0),[Ge,qe]=u.useState(!0);if(u.useEffect(()=>{const r=setTimeout(()=>{qe(!1)},1e3),M=setInterval(()=>{We(b=>(b+1)%ce.length)},5500);return()=>{clearInterval(M),clearTimeout(r)}},[]),u.useEffect(()=>{Z&&ee.current&&ee.current.scrollIntoView({behavior:"smooth",block:"start"})},[Z,ee]),s&&!Me&&ze)return e.jsxs(se,{isOpen:s,onClose:J,type:"success",size:"custom",className:"max-w-xl",title:e.jsx(l,{...i.profileTitle}),description:e.jsxs("div",{className:"flex flex-row items-center text-token-text-secondary",children:[e.jsx("div",{className:"mr-1",children:e.jsx(l,{...i.profileSubtitle})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-2 mt-2 text-sm font-normal",children:e.jsx(l,{...i.profileSubtitleTooltip,values:{link:r=>e.jsx(ct,{className:"underline",target:"_blank",rel:"noreferrer",to:i.profileSubtitleTooltip.link??"",children:r})}})}),icon:e.jsx(Mt,{className:"h-4 w-4 text-token-text-tertiary"})})]}),children:[n?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(ue,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsx("p",{className:"text-muted py-2 text-sm font-medium",children:e.jsx(l,{...i.customizeName})}),e.jsx(W,{className:"mb-3",onSubmit:I,disabled:!w,hasModError:z==="name_user_message",value:L??m,placeholder:t.formatMessage(i.customizeNamePlaceholder),onChange:r=>k({nameUserMessage:r.target.value}),size:"sm",showCharacterCount:!1}),e.jsx("p",{className:"text-muted py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeRole})}),e.jsxs("div",{className:"relative mb-3 overflow-hidden",children:[!(E??h)&&e.jsx(Ie,{mode:"wait",children:e.jsx(Ue.span,{variants:$t,initial:Ge?!1:"initial",animate:"animate",exit:"exit",className:"pointer-events-none absolute left-[0.81rem] top-[0.55rem] text-sm text-gray-400",children:t.formatMessage(Xt[ce[Ce]])},ce[Ce])}),e.jsx(W,{onSubmit:I,disabled:!w,hasModError:z==="role_user_message",value:E??h,placeholder:"",onChange:r=>k({roleUserMessage:r.target.value}),size:"sm",showCharacterCount:!1})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeTraits})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-[6px] mt-3 text-sm font-medium",children:e.jsx(l,{...i.traitsTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem3})})]})})]}),e.jsx(W,{onSubmit:I,disabled:!w,hasModError:z==="traits_model_message",value:_??y,placeholder:t.formatMessage(i.customizeTraitsPlaceholder),onChange:r=>k({traitsModelMessage:r.target.value}),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsx("div",{className:"mb-4",children:e.jsx(Yt,{onSelect:r=>{k({traitsModelMessage:`${_??y} ${r}`.trim()})},selectedTraits:re,setSelectedTraits:Oe})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeOther})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-2 mt-3 text-sm font-medium",children:e.jsx(l,{...i.otherTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem3})})]})})]}),e.jsx(W,{onSubmit:I,disabled:!w,hasModError:z==="other_user_message",value:A??T,placeholder:t.formatMessage(i.customizeOtherPlaceholder),onChange:r=>k({otherUserMessage:r.target.value}),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsxs("div",{className:"mt-3 pb-8",ref:ee,children:[e.jsxs("button",{onClick:()=>De(r=>!r),className:"text-muted flex items-center justify-between py-2 text-sm font-medium text-token-text-primary",children:[e.jsx(l,{...i.advanced}),Z?e.jsx(bt,{className:"ml-1 h-5 w-5"}):e.jsx(yt,{className:"ml-1 h-5 w-5"})]}),Z&&e.jsx("div",{className:"mt-2",children:e.jsx(Pe,{disabledTools:F.disabledTools??O??[],onDisabledToolsChanged:r=>k({disabledTools:r}),isNewCustomInstructionsUIEnabled:!0})})]})]}),e.jsx("div",{className:"-ml-6 -mr-6 border-t",children:e.jsxs("div",{className:"ml-6 mr-6 flex flex-grow flex-col items-stretch justify-between gap-0 pb-1 pt-2 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx(je,{enabled:w,onChange:r=>{k({enabled:r})},label:w?t.formatMessage(i.disableToggleLabel):t.formatMessage(i.enableToggleLabel)}),e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(l,{...i.chatPreferencesEnable})})]}),e.jsx(U.Actions,{secondaryButton:e.jsx(U.Button,{onClick:J,children:e.jsx(l,{...i.cancel})}),primaryButton:e.jsx(U.Button,{loading:Q,onClick:I,color:"primary",visuallyDisabled:X,disabled:!$,children:e.jsx(l,{...i.save})})})]})})]},"user-context");if(s&&a&&!c)return e.jsx(Ct,{onClose:()=>{d(!0)}});if(s&&Me){const r=()=>{be(!1),V.logEvent("chatgpt_user_context_confirm_close_clicked"),H.logEvent(N.userContextConfirmCloseClicked)};return e.jsx(se,{isOpen:!0,onClose:r,type:"success",title:t.formatMessage(i.confirmCloseTitle),primaryButton:e.jsx(U.Button,{title:t.formatMessage(i.confirmCloseOk),color:"danger",onClick:()=>{Y(),r()}}),secondaryButton:e.jsx(U.Button,{title:t.formatMessage(i.confirmCloseCancel),color:"secondary",onClick:r}),children:e.jsx("div",{className:"text-sm",children:e.jsx(l,{...i.confirmCloseBody})})},"confirm-close")}return e.jsxs(se,{isOpen:s,onClose:J,type:"success",size:"custom",className:"max-w-lg xl:max-w-xl",title:e.jsx(l,{...i.profileTitle}),children:[n?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(ue,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"text-sm font-semibold",children:e.jsx(l,{...i.customInstructionsTitle})}),e.jsx(Ae,{label:e.jsx(l,{...i.customInstructionsTooltip,values:{article:r=>e.jsx("a",{href:St,target:"_blank",className:"underline",rel:"noreferrer",children:r})}})})]}),e.jsx("p",{className:"text-muted pb-3 pt-2 text-sm text-token-text-primary",children:e.jsx(l,{...i.aboutYouHelpText})}),e.jsx(W,{className:"mb-3",onSubmit:I,disabled:!w,tip:e.jsx(ke,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip1})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip2})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip3})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip4})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip5})})]})}),hasModError:z==="about_user_message",value:C??f,onChange:r=>k({aboutUserMessage:r.target.value})}),e.jsx("p",{className:"text-muted py-3 text-sm text-token-text-primary",children:e.jsx(l,{...i.modelHelpText})}),e.jsx(W,{onSubmit:I,disabled:!w,tip:e.jsx(ke,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(l,{...i.modelTip1})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip2})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip3})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip4})})]})}),hasModError:z==="about_model_message",value:j??g,onChange:r=>k({aboutModelMessage:r.target.value})}),e.jsx("div",{className:"my-6 h-px bg-token-border-light"}),e.jsx(Pe,{disabledTools:F.disabledTools??O??[],onDisabledToolsChanged:r=>k({disabledTools:r})})]}),e.jsx("div",{className:"mt-4 md:mt-5",children:e.jsxs("div",{className:"flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(l,{...i.chatPreferencesEnable})}),e.jsx(je,{enabled:w,onChange:r=>{k({enabled:r})},label:w?t.formatMessage(i.disableToggleLabel):t.formatMessage(i.enableToggleLabel)})]}),e.jsx(U.Actions,{secondaryButton:e.jsx(U.Button,{onClick:J,children:e.jsx(l,{...i.cancel})}),primaryButton:e.jsx(U.Button,{loading:Q,onClick:I,color:"primary",visuallyDisabled:X,disabled:!$,children:e.jsx(l,{...i.save})})})]})})]},"user-context")}function Kt(){return fe({queryKey:["traitPills"],queryFn:async()=>{try{const s=await ge.safeGet("/user_system_message_trait_pills");return s?Array.isArray(s)?s:[]:[]}catch{return[...Qt.map(t=>({key:t,label:t,description:_e[t].defaultMessage||""})),...Zt.map(t=>({key:t,label:t,description:_e[t].defaultMessage||""}))]}},select:s=>{const t=Math.ceil(s.length/2-1);return{firstSet:s.slice(0,t),secondSet:s.slice(t)}}})}const Yt=({onSelect:s,selectedTraits:t,setSelectedTraits:o})=>{const{data:a,isLoading:c}=Kt(),[d,n]=u.useState(!0);if(c)return e.jsx(ue,{});if(!a)return null;const x=d?a.firstSet:a.secondSet,f=m=>{t.includes(m.key)||(o(h=>[...h,m.key]),s(m.description))},g=()=>{o([]),n(m=>!m)};return e.jsx("div",{children:e.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-1 gap-y-2",children:[x.map(m=>!t.includes(m.key)&&e.jsxs(Se,{size:"small",color:"secondary",className:"py-2 pl-2 pr-3 text-xs font-normal text-token-text-secondary",onClick:()=>f(m),children:[e.jsx(Tt,{className:"mr-[1px] h-4 w-4"}),m.label]},m.key)),e.jsx(Se,{size:"small",color:"secondary",className:"text-token-text-secondary",onClick:g,children:e.jsx(jt,{className:"-mx-1 h-4 w-4"})})]})})},ke=({children:s})=>e.jsx("div",{className:"whitespace-pre-line",children:s}),D=1500,ae=s=>s.length>D,W=({disabled:s,onChange:t,onSubmit:o,placeholder:a,value:c,tip:d,hasModError:n,className:x,size:f="md",showCharacterCount:g=!0,isNewCustomInstructionsUIEnabled:m=!1})=>{const h=he(),y=u.useRef(null),T=vt(),O=wt(),R=!T,[F,q]=u.useState(!1),[C,j]=u.useState(R),L=!R&&F&&!C,E=R&&!C,_=ae(c),A=p=>{p.nativeEvent.isComposing||!s&&p.key==="Enter"&&p.metaKey&&!p.shiftKey&&!p.nativeEvent.isComposing&&(p.preventDefault(),o())},B=u.useRef(null);return e.jsxs(e.Fragment,{children:[d&&e.jsx(se,{isOpen:E,type:"success",size:"custom",className:"max-w-lg",title:h.formatMessage(i.tipsHeader),showCloseButton:!0,onClose:()=>{j(!0)},children:d}),e.jsxs(kt,{open:L,children:[e.jsxs("div",{className:x,ref:B,children:[e.jsx(Pt,{asChild:!0,children:e.jsx("textarea",{ref:y,className:K("w-full resize-none bg-token-main-surface-primary",{"rounded p-4":f!=="sm"&&!m,"rounded-lg border text-sm":f==="sm"||m,"border-orange-400 focus:border-orange-400":n,"border-red-500 focus:border-red-500":_&&!n,"focus-token-border-heavy border-token-border-light":!_&&!n,"opacity-30":s,"placeholder:text-gray-400":f==="sm"||m,"placeholder:text-gray-300":!m}),disabled:s,placeholder:a,onKeyDown:A,rows:f==="sm"?1:T&&!O?6:5,value:c,onChange:t,onBlur:()=>{q(!1)},onFocus:()=>{q(!0)}})}),e.jsx("div",{className:K("flex items-center justify-between px-1 text-xs tabular-nums",_?"text-red-600":"text-token-text-tertiary"),children:n?e.jsx("div",{className:"visible mt-2 text-left text-xs text-orange-400",children:e.jsx(l,{...i.modApiVoilation,values:{policyLink:p=>e.jsx("a",{href:"https://platform.openai.com/docs/usage-policies/content-policy",className:"underline",target:"_blank",rel:"noreferrer",children:p}),feedbackLink:p=>e.jsx("a",{href:"https://forms.gle/3gyAMj5r5rTEcgbs5",className:"underline",target:"_blank",rel:"noreferrer",children:p})}})}):e.jsxs(e.Fragment,{children:[g&&e.jsx("div",{children:`${c.length}/${D}`}),d&&e.jsx("button",{className:"flex items-center gap-1",onClick:()=>{y.current?.focus(),j(!C)},tabIndex:-1,children:e.jsx(Ie,{initial:!1,children:F&&e.jsx(Ue.div,{className:"flex items-center gap-1",initial:{opacity:0},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:C?e.jsxs(e.Fragment,{children:[e.jsx(l,{...i.showTips}),e.jsx(_t,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{...i.hideTips}),e.jsx(Xe,{className:"icon-xs"})]})},"show-hide")})})]})})]}),d&&e.jsx(Ht,{container:B.current?.ownerDocument.body,children:e.jsx(Nt,{side:"right",align:"start",sideOffset:12,className:"popover relative z-50 max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border border-token-border-light bg-token-main-surface-primary p-4 text-sm text-token-text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.06)] xl:max-w-xs",onOpenAutoFocus:p=>{p.preventDefault()},onCloseAutoFocus:p=>{p.preventDefault()},children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("strong",{children:e.jsx(l,{...i.tipsHeader})}),d]})})})]})]})};function de({primaryLabel:s,secondaryLabel:t,side:o="top",icon:a=e.jsx(Le,{className:"h-4 w-4 text-token-text-tertiary"})}){return e.jsx(me,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:s}),secondaryLabel:e.jsx("div",{children:t}),side:o,delayDuration:0,theme:"primary",customPrimaryLabelColorStyle:"primary",customPaddingClassName:"p-2",customBorderClassName:"border border-token-border-light",labelTextAlign:"left",children:a})}function Ae({label:s,side:t="bottom"}){return e.jsx(me,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:s}),side:t,children:e.jsx(Le,{className:"h-4 w-4 text-token-text-tertiary"})})}function Pe({disabledTools:s,onDisabledToolsChanged:t,isNewCustomInstructionsUIEnabled:o=!1}){u.useEffect(()=>{H.logEvent(N.userContextGpt4CapabilitiesShown)},[]);const c=Ne()?.isEnterprisey()??!1,d=!Te(te.BrowsingAvailable)&&c,n=h=>{const y=s.includes(h)?s.filter(T=>T!==h):[...s,h];t(y)},x=$e(),{value:f}=Je("2044826081"),g=!Te(te.Canvas)&&c;var m;return x?.includes(te.SearchTool)&&!x.includes(te.SearchToolHoldout)?m=e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.web",defaultMessage:"Web Search"}),tooltipLabel:d?e.jsx(l,{id:"Osf0vy",defaultMessage:"Web Search is disabled by your organization"}):e.jsx(l,{id:"userContexModal.tools.webSearchTooltip",defaultMessage:"Automatically search the web to get answers"}),tool:v.BROWSER,onClick:n,Icon:ve,checked:!s.includes(v.BROWSER)&&!d,disabled:d,isNewCustomInstructionsUIEnabled:o}):m=e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.browse",defaultMessage:"Browsing"}),tooltipLabel:d?e.jsx(l,{id:"5SuA2c",defaultMessage:"Browsing is disabled by your organization"}):e.jsx(l,{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"}),tool:v.BROWSER,onClick:n,Icon:ve,checked:!s.includes(v.BROWSER)&&!d,disabled:d,isNewCustomInstructionsUIEnabled:o}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:K("text-sm",{"text-muted font-medium":o,"font-semibold":!o}),children:e.jsx(l,{id:"userContextModal.gpt4CapabilitiesTitle",defaultMessage:"ChatGPT capabilities"})}),e.jsx(Ae,{label:e.jsx(l,{id:"userContextModal.tools.capabilitiesInfo.1",defaultMessage:"Choose which tools can be used with GPT-4"}),side:"top"})]}),e.jsxs("div",{className:"mt-2 flex flex-col flex-wrap gap-3 md:flex-row",children:[m,e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.dalle",defaultMessage:"DALL·E"}),tooltipLabel:e.jsx(l,{id:"userContextModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"}),tool:v.DALLE,onClick:n,Icon:Et,checked:!s.includes(v.DALLE),isNewCustomInstructionsUIEnabled:o}),e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.codeInterpreter.1",defaultMessage:"Code"}),tooltipLabel:e.jsx(l,{id:"userContextModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"}),tool:v.PYTHON,onClick:n,Icon:It,checked:!s.includes(v.PYTHON),isNewCustomInstructionsUIEnabled:o}),f&&!g&&e.jsx(G,{title:e.jsx(l,{id:"FW2C7Y",defaultMessage:"Canvas"}),tooltipLabel:e.jsx(l,{id:"dP6U4B",defaultMessage:"Collaborate with ChatGPT on text and code"}),tool:v.CANMORE,onClick:n,Icon:Ut,checked:!s.includes(v.CANMORE),isNewCustomInstructionsUIEnabled:o}),e.jsx(G,{title:e.jsx(l,{id:"yaclI7",defaultMessage:"Advanced Voice"}),tooltipLabel:e.jsx(l,{id:"Pd4tO1",defaultMessage:"More natural conversations in voice mode"}),tool:v.ADVANCED_VOICE,onClick:n,Icon:Lt,checked:!s.includes(v.ADVANCED_VOICE),isNewCustomInstructionsUIEnabled:o})]})]})}function G({tool:s,title:t,tooltipLabel:o,Icon:a,onClick:c,checked:d,disabled:n,isNewCustomInstructionsUIEnabled:x=!1}){return e.jsx(me,{className:"block",label:o,side:"top",sideOffset:4,children:e.jsxs("button",{className:K("flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border border-token-border-medium p-2",{"cursor-not-allowed text-token-text-quaternary":n}),onClick:()=>c(s),disabled:n,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{className:"h-4 w-4 text-token-text-tertiary"}),e.jsx("div",{className:K("text-sm",x?"text-muted font-medium":"font-semibold"),children:t})]}),e.jsx(At,{id:s,checked:d&&!n,disabled:n})]})})}const i=xe({tipsHeader:{id:"userContextModal.tipsHeader",defaultMessage:"Thought starters"},aboutUserTip1:{id:"userContextModal.aboutUserTip1",defaultMessage:"Where are you based?"},aboutUserTip2:{id:"userContextModal.aboutUserTip2",defaultMessage:"What do you do for work?"},aboutUserTip3:{id:"userContextModal.aboutUserTip3",defaultMessage:"What are your hobbies and interests?"},aboutUserTip4:{id:"userContextModal.aboutUserTip4",defaultMessage:"What subjects can you talk about for hours?"},aboutUserTip5:{id:"userContextModal.aboutUserTip5",defaultMessage:"What are some goals you have?"},modelTip1:{id:"userContextModal.modelTip1",defaultMessage:"How formal or casual should ChatGPT be?"},modelTip2:{id:"userContextModal.modelTip2",defaultMessage:"How long or short should responses generally be?"},modelTip3:{id:"userContextModal.modelTip3",defaultMessage:"How do you want to be addressed?"},modelTip4:{id:"userContextModal.modelTip4",defaultMessage:"Should ChatGPT have opinions on topics or remain neutral?"},save:{id:"userContextModal.save",defaultMessage:"Save"},chatPreferencesEnable:{id:"userContextModal.chatPreferencesEnable",defaultMessage:"Enable for new chats"},enableToggleLabel:{id:"userContextModal.enableToggleLabel",defaultMessage:"Enable chat preferences"},disableToggleLabel:{id:"userContextModal.disableToggleLabel",defaultMessage:"Disable chat preferences"},cancel:{id:"userContextModal.cancel",defaultMessage:"Cancel"},aboutYouHelpText:{id:"userContextModal.aboutYouHelpText",defaultMessage:"What would you like ChatGPT to know about you to provide better responses?"},modelHelpText:{id:"userContextModal.modelHelpText",defaultMessage:"How would you like ChatGPT to respond?"},profileTitle:{id:"userContextModal.title.1",defaultMessage:"Customize ChatGPT"},profileSubtitle:{id:"userContextModal.profileSubtitle",defaultMessage:"Introduce yourself to get better, more personalized responses"},profileSubtitleTooltip:{id:"userContextModal.profileSubtitleTooltip",defaultMessage:"ChatGPT will use the information you provide to tailor its responses to you. <link>Learn more</link> about how we use your data.",link:"https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt"},customizeName:{id:"userContextModal.customizeName",defaultMessage:"What should ChatGPT call you?"},customizeNamePlaceholder:{id:"userContextModal.customizeNamePlaceholder",defaultMessage:"Name"},customizeRole:{id:"userContextModal.customizeRole",defaultMessage:"What do you do?"},customizeRolePlaceholder:{id:"userContextModal.customizeRolePlaceholder",defaultMessage:"Engineer, student, etc."},customizeTraits:{id:"userContextModal.customizeTraits",defaultMessage:"What traits should ChatGPT have?"},customizeTraitsPlaceholder:{id:"userContextModal.customizeTraitsPlaceholder",defaultMessage:"Describe or select traits"},customizeOther:{id:"userContextModal.customizeOther",defaultMessage:"Anything else ChatGPT should know about you?"},customizeOtherPlaceholder:{id:"userContextModal.customizeOtherPlaceholder",defaultMessage:"Interests, values, or preferences to keep in mind"},customInstructionsTitle:{id:"userContextModal.customInstructionsTitle",defaultMessage:"Custom Instructions"},customInstructionsTooltip:{id:"userContextModal.customInstructionsTooltip",defaultMessage:"<article>Learn more</article> about Custom Instructions and how they're used to help ChatGPT provide better responses."},traitsTooltipTitle:{id:"userContextModal.traitsTooltipTitle",defaultMessage:"You can tell ChatGPT to do things like..."},traitsTooltipBodyItem1:{id:"userContextModal.traitsTooltipBodyItem1",defaultMessage:"Use a formal, professional tone."},traitsTooltipBodyItem2:{id:"userContextModal.traitsTooltipBodyItem2",defaultMessage:"Be casual and chatty."},traitsTooltipBodyItem3:{id:"userContextModal.traitsTooltipBodyItem3",defaultMessage:"Be opinionated. If a question could have multiple answers, try to give only the best one."},otherTooltipTitle:{id:"userContextModal.otherTooltipTitle",defaultMessage:"You can share things like..."},otherTooltipBodyItem1:{id:"userContextModal.otherTooltipBodyItem1",defaultMessage:"I love hiking and jazz."},otherTooltipBodyItem2:{id:"userContextModal.otherTooltipBodyItem2",defaultMessage:"I'm vegetarian."},otherTooltipBodyItem3:{id:"userContextModal.otherTooltipBodyItem3",defaultMessage:"I'm trying to learn French."},messageLimitError:{id:"userContextModal.messageLimitError",defaultMessage:"Please limit your responses to {limit} characters or less."},showTips:{id:"userContextModal.showTips",defaultMessage:"Show tips"},hideTips:{id:"userContextModal.hideTips",defaultMessage:"Hide tips"},confirmCloseTitle:{id:"userContextModal.confirmCloseTitle",defaultMessage:"You have unsaved changes."},confirmCloseBody:{id:"userContextModal.confirmCloseBody",defaultMessage:"Are you sure you want to exit? Any changes you made will be permanently lost."},confirmCloseCancel:{id:"userContextModal.confirmCloseCancel",defaultMessage:"Back"},confirmCloseOk:{id:"userContextModal.confirmCloseOk",defaultMessage:"Exit"},modApiVoilation:{id:"userContextModal.modApiVoilation",defaultMessage:"This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area."},browser:{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"},dalle:{id:"userContexModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"},python:{id:"userContexModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"},advanced:{id:"userContextModal.advanced",defaultMessage:"Advanced"}}),Qt=["Chatty","Witty","Opinionated","StraightShooting","GenZ","Encouraging","Skeptical","ForwardThinking"],Zt=["Poetic","Respectful","Humble","Professional","Corporate","Direct","Silly","Pragmatic","Chill","OutsideTheBox"],_e=xe({Chatty:{id:"userContextModal.chattySentence",defaultMessage:"Be talkative and conversational."},Witty:{id:"userContextModal.wittySentence",defaultMessage:"Use quick and clever humor when appropriate."},StraightShooting:{id:"userContextModal.straightShootingSentence",defaultMessage:"Tell it like it is; don't sugar-coat responses."},Encouraging:{id:"userContextModal.encouragingSentence",defaultMessage:"Use an encouraging tone."},GenZ:{id:"userContextModal.genZSentence",defaultMessage:"Talk like a member of Gen Z."},Skeptical:{id:"userContextModal.skepticalSentence",defaultMessage:"Adopt a skeptical, questioning approach."},ForwardThinking:{id:"userContextModal.forwardThinkingSentence",defaultMessage:"Take a forward-thinking view."},Poetic:{id:"userContextModal.poeticSentence",defaultMessage:"Use a poetic, lyrical tone."},Opinionated:{id:"userContextModal.opinionatedSentence",defaultMessage:"Readily share strong opinions."},Respectful:{id:"userContextModal.respectfulSentence",defaultMessage:"Always be respectful."},Humble:{id:"userContextModal.humbleSentence",defaultMessage:"Be humble when appropriate."},Professional:{id:"userContextModal.professionalSentence",defaultMessage:"Use a formal, professional tone."},Silly:{id:"userContextModal.sillySentence",defaultMessage:"Be playful and goofy."},Direct:{id:"userContextModal.directSentence",defaultMessage:"Get right to the point."},Pragmatic:{id:"userContextModal.pragmaticSentence",defaultMessage:"Be practical above all."},Corporate:{id:"userContextModal.corporateSentence",defaultMessage:"Respond with corporate jargon."},Chill:{id:"userContextModal.chillSentence",defaultMessage:"Keep it relaxed and easygoing."},OutsideTheBox:{id:"userContextModal.outsideTheBoxSentence",defaultMessage:"Be innovative and think outside the box."}}),Xt=xe({engineeringStudent:{id:"userContextModal.rolePlaceholder.engineeringStudent",defaultMessage:"Engineering student at University of Waterloo"},gastroenterologist:{id:"userContextModal.rolePlaceholder.gastroenterologist",defaultMessage:"Gastroenterologist"},sourdoughBaker:{id:"userContextModal.rolePlaceholder.sourdoughBaker",defaultMessage:"Small-batch home sourdough baker"},interiorDesigner:{id:"userContextModal.rolePlaceholder.interiorDesigner",defaultMessage:"Interior designer"},daycareManager:{id:"userContextModal.rolePlaceholder.daycareManager",defaultMessage:"Home daycare manager"},familyLawAttorney:{id:"userContextModal.rolePlaceholder.familyLawAttorney",defaultMessage:"Family law attorney"},excelWizard:{id:"userContextModal.rolePlaceholder.excelWizard",defaultMessage:"Excel wizard"},level10Mage:{id:"userContextModal.rolePlaceholder.level10Mage",defaultMessage:"Level 10 mage"},pharmaSales:{id:"userContextModal.rolePlaceholder.pharmaSales",defaultMessage:"Pharma sales"},freelanceCopywriter:{id:"userContextModal.rolePlaceholder.freelanceCopywriter",defaultMessage:"Freelance copywriter"},weddingPhotographer:{id:"userContextModal.rolePlaceholder.weddingPhotographer",defaultMessage:"Wedding photographer"},catHerder:{id:"userContextModal.rolePlaceholder.catHerder",defaultMessage:"Professional cat herder"},cdlDriver:{id:"userContextModal.rolePlaceholder.cdlDriver",defaultMessage:"CDL driver"},thirdGradeTeacher:{id:"userContextModal.rolePlaceholder.thirdGradeTeacher",defaultMessage:"Third-grade teacher"}}),$t={initial:{opacity:0,y:8},animate:{opacity:1,y:0,transition:{duration:.2}},exit:{opacity:0,y:-8,transition:{duration:.2}}},ce=["engineeringStudent","gastroenterologist","sourdoughBaker","interiorDesigner","daycareManager","familyLawAttorney","excelWizard","level10Mage","pharmaSales","freelanceCopywriter","weddingPhotographer","catHerder","cdlDriver","thirdGradeTeacher"];function Jt(){const s=Ne(),{isUnauthenticated:t}=rt(),o=Vt();return t||s&&!s.isFree()?{userIsInSearchHoldoutWithWebDisabled:!1}:{userIsInSearchHoldoutWithWebDisabled:o.isLoading?!0:o.data?.userIsInSearchHoldoutWithWebDisabled}}function es(s){const t=Bt(s);let o=Ee(s,g=>g?.mode);const a=Dt(),c=u.useMemo(()=>(a.isSuccess&&a.data?a.data:void 0)??[],[a.data,a.isSuccess]),d=Ot({clientThreadId:s}),{userIsInSearchHoldoutWithWebDisabled:n}=Jt(),x=lt(),f=u.useMemo(()=>ts({modelConfig:t,userIsInSearchHoldoutWithWebDisabled:n,isTemporaryChatEnabled:x,conversationMode:o,systemHints:c,modelSwitcherDenials:d}),[c,t,d,o,n,x]);return{systemHints:c,activeSystemHints:f,isLoading:a.isLoading}}function ts({modelConfig:s,userIsInSearchHoldoutWithWebDisabled:t,isTemporaryChatEnabled:o,conversationMode:a,systemHints:c,modelSwitcherDenials:d}){return ss({modelConfig:s,systemHints:c,isTemporaryChatEnabled:o}).filter(n=>!(n.systemHint===S.Search&&t||!(n.requiredModels.length===0||n.requiredModels.some(g=>!d[g]))||!(n.requiredConversationModes.length===0||n.requiredConversationModes.some(g=>g===a?.kind))))}function ss({modelConfig:s,systemHints:t,isTemporaryChatEnabled:o}){const a=new Set(s?.enabledTools||[]);return t.filter(c=>s?.enabledTools===void 0||c.requiredFeatures.length===0||c.requiredFeatures.every(n=>a.has(n))?c.systemHint==="contextual_answers"&&s?c.requiredModels?.includes(s.id):!(!c.allowInTemporaryChat&&o):!1)}class P extends it()(({initialHints:t,availableHints:o})=>({persistedSystemHints:new Set(t),persistedSystemHintTriggers:{},availableHints:o})){static getPersistedSystemHints=({persistedSystemHints:t})=>t;static getAvailableSystemHints=({availableHints:t})=>t;addPersistedSystemHint=(t,o,a)=>{t===S.Search&&H.logEventWithStatsig(N.searchModeEngaged,"search_mode_engaged",{...le(o),triggerSource:a}),this.setState(({persistedSystemHints:c,persistedSystemHintTriggers:d})=>({persistedSystemHints:new Set(c).add(t),persistedSystemHintTriggers:{...d,[t]:a}}))};removePersistedSystemHint=(t,o)=>{t===S.Search&&H.logEventWithStatsig(N.searchModeDisabled,"search_mode_disabled",le(o)),this.setState(({persistedSystemHints:a,persistedSystemHintTriggers:c})=>{const d=new Set(a);d.delete(t);const n={...c};return delete n[t],{persistedSystemHints:d,persistedSystemHintTriggers:n}})};getPersistedSystemHintTrigger=t=>{if(this.getState().persistedSystemHints.has(t))return this.getState().persistedSystemHintTriggers[t]};clearPersistedSystemHintTrigger=t=>{this.setState(({persistedSystemHints:o,persistedSystemHintTriggers:a})=>{const c={...a};delete c[t];const d=new Set(o);return d.delete(t),{persistedSystemHints:d,persistedSystemHintTriggers:c}})};clearAllPersistedSystemHintTriggers=()=>{this.setState(()=>({persistedSystemHints:new Set,persistedSystemHintTriggers:{}}))};updatePersistedSystemHint=(t,o,a)=>{t===S.Search&&H.logEventWithStatsig(N.searchModeEngaged,"search_mode_engaged",{...le(o),triggerSource:a}),this.setState(()=>({persistedSystemHints:new Set(t?[t]:[]),persistedSystemHintTriggers:t?{[t]:a}:{}}))}}const us=()=>P.useState(P.getPersistedSystemHints);function as(s){const t=[];return s&&t.push(S.Search),t}function ms({children:s,clientThreadId:t}){const[o]=gt(),a=o.get(Rt)===S.Search,{systemHints:c}=es(t),d=Ft(),n=zt(t),x=Wt(n,nt.Search),g=(Ee(t,dt.getLastMessageSystemHints).includes(S.Search)||a)&&x;let m=as(g);const[h]=u.useState(()=>new P({initialHints:m,availableHints:Object.values(d)}));return u.useEffect(()=>{const y=h.getState().persistedSystemHints;g&&!y.has(S.Search)&&h?.addPersistedSystemHint(S.Search,{clientThreadId:t,turnIndex:0})},[g,h,t]),u.useEffect(()=>{const y=c.filter(T=>T.systemHint!==S.Think&&!T.composerBarButtonInfo?.upsell);h.setState({availableHints:os(d,y)})},[c,h,d]),e.jsx(P.Provider,{store:h,children:s})}const os=(s,t)=>{const o=t.filter(a=>!s[a.systemHint]&&a.systemHint!==S.Picture);return[...Object.keys(s).map(a=>t.find(d=>d.systemHint===a||d.systemHint===S.Picture&&a===S.PictureV2)??s[a]),...o]},rs="prompt-textarea",gs=["gpt-4o-jawbone"];function hs(){document.getElementById(rs)?.focus()}const xs={getAndReset:(s,t)=>{const o=ie.getItem(ne.RestoreMessageAfterOauthRedirect);return ie.removeItem(ne.RestoreMessageAfterOauthRedirect),!o||o.userId!==s||t!==o.serverThreadId||Date.now()>o.expiresAt?null:o},set:(s,t,o)=>{const a={userId:s,serverThreadId:t,inputText:o,expiresAt:Date.now()+6e4};ie.setItem(ne.RestoreMessageAfterOauthRedirect,a)}},fs=()=>P.useState(P.getPersistedSystemHints).has(S.Search),ps=()=>P.useState(P.getPersistedSystemHints),Ms=s=>P.useState(P.getPersistedSystemHints).has(s),bs=()=>{const s=P.useStore(),t=u.useCallback(n=>s.getPersistedSystemHintTrigger(n),[s]),o=u.useCallback(n=>s.clearPersistedSystemHintTrigger(n),[s]),a=u.useCallback(()=>s.clearAllPersistedSystemHintTriggers(),[s]),c=u.useCallback((n,x,f,g)=>{(x?s.addPersistedSystemHint:s.removePersistedSystemHint)(n,f,g)},[s]),d=u.useCallback((n,x,f)=>{s.updatePersistedSystemHint(n,x,f)},[s]);return{getSystemHintModeTrigger:t,clearSystemHintModeTrigger:o,setThreadSystemHintMode:c,clearAllSystemHintModeTriggers:a,updateSystemHint:d}},ys=(s,t,o,a,c)=>s?"file_upload_pending":a?"async_task_pending":t?o?"text_content_too_long":void 0:"empty_text_content",ls=s=>s.replace(/[\u{E0000}-\u{E007F}]+/gu,""),Cs=s=>{const t=ls(s.getContentToSend().content);return Math.ceil(t.length/4)};function Ss(s,t){return s?t===void 0?!0:t.includes(s):!1}export{ms as P,rs as T,cs as U,bs as a,ps as b,fs as c,P as d,qt as e,Jt as f,ss as g,es as h,Ms as i,Cs as j,xs as k,Ss as l,gs as m,ys as n,ls as s,hs as t,us as u};
//# sourceMappingURL=csg4i0wk6hi0jvkd.js.map
