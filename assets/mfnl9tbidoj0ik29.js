import{e as x,r as m,j as e,M as h,d as p}from"./fs6h2trisr1juto6.js";import{H as f,Z as l,U as u}from"./d7a6rc8fexfzu7dt.js";import{a as g,g as j}from"./wqepkoieaii7q4ep.js";import{bw as b,d as r}from"./njq6ygky3ttysgdk.js";const k=()=>{const s=x(),t=f(a=>a.activeModals.has(l.KeyboardActions)),i=()=>{u.closeModal(l.KeyboardActions)},o=g(),c=m.useMemo(()=>{const a=Math.ceil(o.length/2);return[o.slice(0,a),o.slice(a)]},[o]);return e.jsx(b,{isOpen:t,onClose:i,type:"success",size:"custom",className:"md:max-w-[672px] lg:max-w-[796px] xl:max-w-4xl",showCloseButton:!0,title:s.formatMessage(w.keyboardActionsModalTitle),children:e.jsx(e.Fragment,{children:e.jsx("div",{className:"grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9",children:c.map((a,d)=>e.jsx("div",{className:"flex flex-col overflow-hidden",children:a.map(n=>e.jsx(y,{action:n},n.key))},`col-${d}`))})})})},y=({action:s})=>e.jsxs("div",{className:"flex items-center justify-between overflow-hidden text-token-text-primary",children:[e.jsx("div",{className:"flex flex-shrink items-center overflow-hidden text-sm",children:e.jsx("div",{className:"truncate",children:e.jsx(h,{...s.actionMessageDescriptor})})}),e.jsx("div",{className:"ml-3 flex flex-row gap-2",children:j(s.keyboardBinding).map((t,i)=>e.jsx(M,{keyName:t},`${s.key}-${i}`))})]}),M=({keyName:s})=>{const t=r("my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary");return s.length>1?s.length>3?e.jsx("div",{className:r(t,"min-w-[50px]"),children:e.jsx("span",{className:"text-xs",children:s})}):e.jsx("div",{className:r(t,"min-w-[32px]"),children:e.jsx("span",{className:"text-xs",children:s})}):e.jsx("div",{className:r(t,"min-w-[32px]"),children:e.jsx("span",{className:"text-sm",children:s})})},w=p({keyboardActionsModalTitle:{id:"KeyboardActionsModal.keyboardActionsModalTitle",defaultMessage:"Keyboard shortcuts"}});export{k as K};
//# sourceMappingURL=mfnl9tbidoj0ik29.js.map
