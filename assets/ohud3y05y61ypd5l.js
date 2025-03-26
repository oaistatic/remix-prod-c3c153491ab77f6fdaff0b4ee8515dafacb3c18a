import{e as M,r as d,j as e,M as i}from"./fs6h2trisr1juto6.js";import{bk as O,bl as U,bm as q,bn as m,bo as z,bp as A,bq as H,br as X,bs as G,bt as Y,bu as E,bv as Z,bw as J}from"./d7a6rc8fexfzu7dt.js";import{W as K}from"./cy1fz3zsxte7sdpo.js";import{bH as Q,V as $,e6 as B,aM as ee,aA as L,P as g,a as y,S as W,bw as D,dO as P,d as te,Z as se,ft as _}from"./njq6ygky3ttysgdk.js";import{c as ae}from"./iej0cupg2dqkmejt.js";var F=(a=>(a.FLEXIBLE="month",a.ANNUAL="year",a))(F||{});const ne=ae(F),oe=({isOpen:a,onClose:n,onSubmit:p})=>{const u=L(),[r,o]=d.useState(""),l=d.useMemo(()=>u?.subscriptionAnalyticsParams,[u]);d.useEffect(()=>{g.logEvent(y.accountPayCreateWorkspaceModalShow,l),W.logEvent("chatgpt_select_team_plan_modal_show",null,{})},[l]);const t=k=>{g.logEvent(y.accountPayCreateWorkspaceModalClicked,{...l,...k})},s=()=>{g.logEvent(y.accountPayCreateWorkspaceModalDismiss,l)},c=M();return e.jsxs(D,{type:"success",isOpen:a,onClose:()=>{n(),s()},className:"max-w-lg",showCloseButton:!0,title:e.jsx(i,{...m.createWorkspace}),children:[e.jsx("div",{className:"flex flex-col justify-center bg-token-main-surface-primary pb-2",children:e.jsx(K,{workspaceName:r,onChangeWorkspaceName:o})}),e.jsxs("div",{className:"mt-4 flex flex-row justify-end",children:[e.jsx(P,{title:c.formatMessage(m.cancel),onClick:()=>{n(),t({buttonType:"Cancel"})}}),e.jsx(P,{title:c.formatMessage(m.selectBillingOption),onClick:()=>{p(r),t({buttonType:"Billing Options"})},disabled:r==="",color:"primary",className:"ml-4"})]})]})},le=Q.p`text-base font-medium mb-3`,ce=({isOpen:a,onClose:n,onSubmit:p,minimumSeats:u,billingDetails:r})=>{const o=L(),{config:l}=B("2513291161"),t=l.get("enabled",!1),[s,c]=d.useState(t?"month":"year"),[k,v]=d.useState(!1),S=M(),[f,T]=d.useState(Math.max(z,u)),C=Math.max(u,Z),{flexibleBillingPlan:h,annualBillingPlan:N}=A(r.currency),b=H(isNaN(f)?0:f,C,X),j=d.useMemo(()=>o?.subscriptionAnalyticsParams,[o]);d.useEffect(()=>{g.logEvent(y.accountPaySelectTeamPlanModalShow,j)},[j]);const I=x=>{switch(x){case"month":g.logEvent(y.accountPayTeamPlanSelectionClicked,{...j,buttonType:"Continue",numberOfSeats:f,planLength:_.MONTHLY});break;case"year":g.logEvent(y.accountPaySelectTeamPlanModalClicked,{...j,buttonType:"Continue",numberOfSeats:f,planLength:_.ANNUAL});break}},R=(x,w)=>{g.logEvent(y.accountPaySelectTeamPlanModalClicked,{...j,buttonType:"Continue",numberOfSeats:w,planLength:x}),W.logEvent("chatgpt_select_team_plan_modal_continue_to_billing_clicked",x,{number_of_seats:w.toString()})},V=()=>{g.logEvent(y.accountPaySelectTeamPlanModalDismiss,j)};return e.jsx(D,{type:"success",isOpen:a,onClose:()=>{n(),V()},size:"custom",noPadding:!0,removePopoverStyling:!0,className:"max-w-4xl",showCloseButton:!0,title:S.formatMessage(m.selectTeamPlanModalTitle),children:e.jsxs("div",{className:"grid grid-flow-row grid-cols-3",children:[e.jsxs("div",{className:"flex-column col-span-3 p-5 md:col-span-2 md:grid-cols-2",children:[e.jsx(G,{numSeats:f,minSeats:C,setNumSeats:T}),e.jsxs(Y,{className:"col-span-3 mt-5 grid gap-4 md:col-span-2 md:grid-cols-2",defaultValue:s,onValueChange:x=>{ne(x)&&(c(x),I(x))},children:[e.jsx(E,{billingType:"year",...N,selectedValue:s}),e.jsx(E,{billingType:"month",...h,selectedValue:s})]})]}),e.jsxs("div",{className:"col-span-3 flex h-full flex-col overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[e.jsx(le,{children:e.jsx(i,{...m.summaryTitle})}),e.jsx(re,{numSeats:b,selectedPlan:s,billingDetails:r,totalLabel:m.allPlansTodayTotal,billDate:e.jsx(i,{...m.today})}),e.jsx(P,{title:S.formatMessage(m.continueToBillingButton),onClick:()=>{v(!0),p(s,b),R(s,b)},disabled:!1,loading:k,color:"primary",className:"w-full rounded-xl"})]})]})})},re=({numSeats:a,selectedPlan:n,billingDetails:p,totalLabel:u,billDate:r})=>{const o=M(),{flexibleBillingPlan:l,annualBillingPlan:t}=A(p.currency),s=n==="month"?l:t,c=J[n];return e.jsxs("div",{className:"flex flex-grow flex-col text-sm",children:[e.jsxs("div",{className:"flex w-full justify-between text-sm text-token-text-secondary",children:[e.jsx("div",{className:"flex",children:e.jsx(i,{...c.name})}),e.jsx("div",{className:"flex",children:e.jsx(i,{...m.allPlansPreDiscountTotal,values:{currencySign:o.formatMessage(s.currencySign),preDiscountTotalAmount:((a||0)*(n==="year"?t.monthlyCost*12:l.monthlyCost)).toLocaleString()}})})]}),e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(i,{...c.breakdown,values:{currencySign:o.formatMessage(s.currencySign),monthlyCost:s.monthlyCost,numSeats:a}})}),e.jsxs("div",{className:"mt-3 flex w-full justify-between text-sm text-token-text-secondary",children:[e.jsx("div",{className:"flex",children:e.jsx(i,{...m.planDiscountLabel})}),e.jsx("div",{className:te("flex",n==="year"&&t.discountedMonthlyCost<t.monthlyCost&&"font-medium text-[#10A37F]"),children:e.jsx(i,{...c.discountAmount,values:{currencySign:o.formatMessage(l.currencySign),discountAmount:((a||0)*(n==="year"?(t.monthlyCost-t.discountedMonthlyCost)*12:l.monthlyCost-l.discountedMonthlyCost)).toLocaleString()}})})]}),c.discountDescription&&t.discountedMonthlyCost<t.monthlyCost&&n==="year"&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(i,{...c.discountDescription,values:{discountPercentage:Math.floor((1-t.discountedMonthlyCost/t.monthlyCost)*100)}})}),e.jsx("hr",{className:"my-3 border-token-border-light"}),e.jsxs("div",{className:"flex w-full justify-between text-base font-medium",children:[e.jsx("div",{className:"flex",children:e.jsx(i,{...u})}),e.jsx("div",{className:"flex",children:e.jsx(i,{...c.total,values:{currencyCode:o.formatMessage(s.currencyCode),currencySign:o.formatMessage(s.currencySign),totalAmount:((a||0)*s.unitCost).toLocaleString()}})})]}),e.jsx("div",{className:"mb-8 text-xs text-token-text-tertiary",children:e.jsx(i,{...c.billed,values:{billDate:r}})})]})};function ge({isOpen:a,onClose:n,minimumSeats:p,billingDetails:u,existingAccount:r=void 0}){const o=M(),l=$(),t=O(),s=r?U(o,r):"",c=q(o,r,t),{config:k}=B("3217984440"),v=k.get("enabled",!1),[S,f]=d.useState(v?c:s),T=ee(),C=async(h,N)=>{try{const b=await se.getCheckoutLink(T,"Teams",{plan_name:"chatgptteamplan",team_plan_data:{workspace_name:S,price_interval:h,seat_quantity:N,existing_workspace_id:r?.id},billing_details:u});window.location.href=b.url}catch{l.warning(o.formatMessage(m.paymentErrorWarning),{hasCloseButton:!0})}};return S===""?e.jsx(oe,{isOpen:a,onClose:n,onSubmit:h=>{f(h)}}):e.jsx(ce,{isOpen:a,onClose:n,onSubmit:(h,N)=>C(h,N),minimumSeats:p,billingDetails:u})}export{re as B,ge as T};
//# sourceMappingURL=ohud3y05y61ypd5l.js.map
