import{bH as se,cL as ie,S as h,fH as ne,V as le,aq as oe,Z as D,D as ce,d6 as k,c5 as p,cD as de,P as v,a as j,C as ue,h as fe,aJ as P,f9 as xe}from"./njq6ygky3ttysgdk.js";import{e as O,r as f,j as e,u as me,f as ge,c as he,a5 as w,M as s,L as pe,d as ve,l as E,A as je}from"./fs6h2trisr1juto6.js";import{L as ye,T as _e,m as T}from"./oss048ggk5zi0vdb.js";import{cI as U,cJ as H,cK as I,cL as be,n as L}from"./d7a6rc8fexfzu7dt.js";import{c as ke}from"./bf8j41shu74ow6id.js";import"./isjdmfmhzv09v01t.js";function A(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(de,{})})}const Ie=({referralCodeId:r,sessionUser:a,auth0Provider:n,redirectUrl:o})=>{const x=O(),c=ie(),l=f.useRef(null);return f.useEffect(()=>{h.logEvent("chatgpt_referral_invite_loaded",a?.id?"has_user":"user_logged_out",{user_id:a?.id?a.id:"_no_user",referral_code_id:r})},[r,a?.id]),f.useEffect(()=>{l.current===null&&(l.current=document.body.style.backgroundColor);const d=c?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=d,()=>{l.current!==null&&(document.body.style.backgroundColor=l.current)}},[c]),e.jsxs("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[e.jsx(ye,{}),e.jsxs("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[e.jsx("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:e.jsx("h1",{"aria-label":x.formatMessage(t.ariaLabel),children:e.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:e.jsx("div",{children:_e})})})}),e.jsx(we,{sessionUser:a,auth0Provider:n,redirectUrl:o,referralCodeId:r}),e.jsxs("div",{className:"flex flex-col items-center justify-end",children:[e.jsx("div",{className:"flex text-gray-300",children:e.jsx(ne,{className:"h-[22px] w-auto"})}),e.jsx("div",{className:"opacity-50",children:e.jsx(ke,{isStorageComplianceEnabled:!1})})]})]})]})},Ne=({offerDollarValue:r,sessionUser:a,isLoading:n,isLoadingLogin:o,handleClaimInvite:x,handleSignupWarning:c,handleLogin:l})=>{const d=U(H.hasPaidSubscription),y=be(T.signUp);return a?.id?e.jsx(p,{disabled:n||d,loading:n,color:d?"disabled":"blue",size:"large",fullWidth:!0,onClick:x,children:d?e.jsx(s,{...t.alreadyPaidUserCta}):e.jsx(s,{...t.acceptInviteCtaLoggedIn,values:{dollarValue:r}})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:e.jsx(s,{...t.claimInviteLoginOrSignUp})}),e.jsx("div",{className:"flex flex-col space-y-4 px-3",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[e.jsx(p,{disabled:n,loading:o,fullWidth:!0,onClick:l,children:e.jsx(s,{...T.logIn})}),e.jsx(p,{onClick:c,disabled:n,fullWidth:!0,children:e.jsx(s,{...y})})]})})]})};function we({sessionUser:r,referralCodeId:a,redirectUrl:n,auth0Provider:o}){const[x,c]=f.useState(!1),[l,d]=f.useState(!1),[y,m]=f.useState(!1),[B,M]=f.useState(!1),R=r?.id??"_no_user",{data:F,isLoading:G,isError:_}=me({queryKey:["referral-invite",a],queryFn:()=>D.getPublicReferralInvite(a)}),u=O(),W=le(),i=F?.result.invite_metadata?.invite_data,C=`$${i?.referral_trial_dollar_value}`,V=i?.referrer_public_avatar_url,q="$20",$=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?u.formatMessage(t.monthsOfService,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.daysOfService,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,K=i?.referrer_user_name,Y=i?.referral_trial_duration_months?i?.referral_trial_duration_months>1?u.formatMessage(t.monthsOfBenefit,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.daysOfBenefit,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,z=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?u.formatMessage(t.ctaHeaderMonths,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.ctaHeaderDays,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,J=u.formatMessage(t.dollarValue,{offerDollarValue:C}),Q="ChatGPT Plus",X=oe(),S=U(H.workspaceId),b=ge(),{mutateAsync:Z}=he({mutationFn:()=>D.postClaimReferralInvite(a,S||""),onSettled:()=>{m(!1)},onError:async()=>{W.danger(u.formatMessage(t.claimReferralError))},onSuccess:()=>{c(!0),b(`/invite/accepted?referralCodeId=${a}`)}}),ee=async()=>{m(!0),h.logEvent("chatgpt_referral_invite_claim",a,{referralCodeId:a,userId:R}),v.logEvent(j.chatgptReferralInviteClaim,{content:R}),await Z()},ae=()=>{m(!0),d(!0),h.logEvent("chatgpt_referral_invite_explain_signup",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteExplainSignup,{content:a}),m(!1)},te=()=>{m(!0),M(!0),h.logEvent("chatgpt_referral_invite_login",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteLogin,{content:a});const g=ue.getCookie(fe.DeviceId)?.toString();E.signIn(o,{callbackUrl:n,...g?{device_id:g}:{}},{prompt:"login",...L(P())})},re=()=>{m(!0),M(!0),h.logEvent("chatgpt_referral_invite_signup",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteSignup,{content:a}),E.signIn(o,{callbackUrl:n},{prompt:"login",screen_hint:"signup",...L(P())})};return f.useEffect(()=>{_&&(b("/?e=oldi"),ce.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[_,b]),_?e.jsx(Re,{}):G||X==null&&r?.id||x?e.jsx(Ce,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[l&&e.jsx(w.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx(Me,{handleSignup:re,setHasRequestedSignup:d})}),!l&&e.jsx(w.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:z}),e.jsx(Se,{referrerPublicAvatarUrl:V,referrerName:K,benefitWithTime:Y,receivedPlan:Q,dollarValue:J}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.benefitPointsHeader})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.demandAccess})})]}),e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.responseSpeed})})]}),e.jsxs(N,{className:"pb-2",children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.modelFeatures})})]})]}),e.jsx("div",{className:"w-full",children:e.jsx(Ne,{handleClaimInvite:ee,handleSignupWarning:ae,handleLogin:te,sessionUser:r,offerDollarValue:C,isLoading:y,isLoadingLogin:B})}),e.jsxs("div",{className:"space-y-1.5 py-1 text-center",children:[e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaFollowUpSummary,values:{monthlyCost:q,monthsOfService:$}})}),r?.id&&e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaNotice,values:{userEmail:r?.email,avatar:()=>e.jsx("img",{className:"inline-block h-4 w-4 rounded-full",src:r?.picture??void 0,alt:r?.name}),email:g=>e.jsx("span",{className:"font-semibold",children:g}),link:g=>e.jsx(pe,{className:"underline",to:"/auth/logout",children:g})}})})]})]})})})]})})}const Me=({setHasRequestedSignup:r,handleSignup:a})=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:e.jsx(s,{...t.signUpExplainTitle})}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.signUpExplainDescription})})}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(p,{fullWidth:!0,onClick:()=>{r(!1)},color:"secondary",children:e.jsx(s,{...t.signUpCtaBack})}),e.jsx(p,{onClick:a,fullWidth:!0,color:"primary",children:e.jsx(s,{...t.signUpCtaProceed})})]})]}),Re=()=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(A,{})}),e.jsx(w.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-sm font-semibold",children:e.jsx(s,{...t.errorHeader})}),e.jsx("p",{className:"text-xs font-normal",children:e.jsx(s,{...t.errorDescription,values:{link:r=>e.jsx("a",{href:"/",className:"underline",children:r})}})})]})})]}),Ce=()=>e.jsx("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(A,{})})}),N=se.div`gap-2 flex flex-row justify-start text-sm items-start`,Se=({referrerPublicAvatarUrl:r,referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:x})=>e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("div",{className:"flex-shrink-0 pt-0.5",children:e.jsx("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:r,alt:a})}),e.jsx("div",{className:"ml-3 w-0 flex-1",children:e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(s,{...t.socialProofText,values:{referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:x,highlight:c=>e.jsx("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:c})}})})})]}),t=ve({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}}),Ue=xe(function(){const a=je();return e.jsx(Ie,{...a})});export{Ue as default};
//# sourceMappingURL=beej61eiwd74kbmy.js.map
