import{da as C,av as A,V as D,D as y,S as P,bw as O,bx as E,dO as h,R,fF as B,dT as I,em as T,Z as U,fG as _,f9 as L,aA as Y}from"./njq6ygky3ttysgdk.js";import{r as m,e as F,j as e,M as t,d as G,f as H}from"./fs6h2trisr1juto6.js";import{bk as z,cD as q,U as K,bv as J,cE as Q,cF as V,cG as Z,cH as x,cI as g,cJ as b}from"./d7a6rc8fexfzu7dt.js";function X(){const r=z(),{data:n}=C(),a=A(n),u=a!=null||n!=null,[c,o]=m.useState(!1),d=n?.accountItems,v=q(a?.id??""),w=a?.id,l=d?.find(i=>i.id===w),j=a?.isOwnerOfAccount()&&a.isTeam()&&!a.hasPaidSubscription(),M=a?.isOwnerOfAccount()&&a.isTeam()&&a.hasPaidSubscription(),p=d?.filter(i=>!i.isDeactivated()),k=F(),W=D();let f=T;a?f=a.mustGetSubscriptionBillingCurrency("DeactivatedWorkspaceModal"):(y.addError(new Error("Current account is undefined in DeactivatedWorkspaceModal")),P.logEvent("chatgpt_undefined_current_account"));const S=m.useCallback(()=>{o(!0),K.setPurchaseWorkspaceData({minimumSeats:Math.max(v,J),billingDetails:{currency:f},existingAccount:l}),o(!1)},[v,l,f]),N=async()=>{o(!0);try{const i=await U.fetchCustomerPortalUrl();location.href=i.url,o(!1)}catch{o(!1),W.warning(k.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!l||!p?e.jsx(e.Fragment,{}):e.jsx(O,{type:"success",onClose:E,isOpen:u,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(Q,{src:l.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:l.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),j&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(h,{className:"m-auto mt-2 w-full",loading:c,onClick:S,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),M&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(h,{className:"m-auto mt-2 w-full",loading:c,onClick:N,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(V,{}),e.jsx("div",{className:"w-full justify-center",children:p.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(Z,{data:p})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[r&&r.picture&&e.jsx("img",{alt:"Profile",src:r.picture,width:x.workspaceMedium,height:x.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:r&&e.jsx("span",{children:r.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(h,{title:k.formatMessage(s.createPersonalWorkspaceButton),loading:c,onClick:async()=>{o(!0),await R.safePost("/accounts/personal"),B(_),I()},color:"primary",className:"ml-4"})})]})})]})})}const s=G({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}}),se=L(function(){const n=g(b.workspaces),a=Y(),u=g(b.workspaceId),c=n.find(d=>d.id===u),o=H();return m.useEffect(()=>{a&&(!c||!c.deactivated)&&o("/")},[a,c,o]),a&&(!c||!c.deactivated)?e.jsx("div",{}):e.jsx(X,{})});export{se as default};
//# sourceMappingURL=g9ls06l1j0mty7vc.js.map
