import{R as i,r as d,j as e}from"./fs6h2trisr1juto6.js";import{M as c,z as x,d as m,bw as p}from"./njq6ygky3ttysgdk.js";import{S as u}from"./dxyq241jyvrm1jhv.js";function h({message:s,className:o}){const[r,a]=d.useState(!1),l=s.content.content_type===c.ModelEditableContext?s.content.model_set_context:null,n=x(s),{recipient:t}=s;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m(o,"mt-6 flex flex-col items-start gap-2 overflow-x-auto whitespace-pre-wrap break-words first:mt-0"),children:[e.jsxs("div",{className:"text-xs",children:[e.jsx("div",{className:"uppercase text-red-500",children:"debug message"}),!!l&&e.jsxs("button",{onClick:()=>a(!0),className:"flex cursor-pointer items-center gap-1",children:[e.jsx(u,{className:"icon-sm"}),e.jsx("div",{className:"underline",children:"View all model memories"})]})]}),e.jsx("div",{className:"flex w-full items-start justify-between",children:e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["From: ",s.author.name??s.author.role]}),!!t&&t!=="all"&&e.jsxs("div",{children:["To: ",t]})]})}),e.jsx("div",{className:"whitespace-pre-wrap font-mono text-sm",children:n}),e.jsxs("div",{className:"flex gap-3",children:[s.metadata?.rebase_system_message&&e.jsx("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Rebased System Message"}),s.metadata?.rebase_developer_message&&e.jsx("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Rebased Developer Message"}),s.metadata?.is_user_system_message&&e.jsx("div",{className:"rounded-xl bg-blue-200 px-3 py-1 text-xs text-black",children:"Custom Instruction"})]})]}),e.jsx(p,{title:"All Model Memories",type:"success",isOpen:r,onClose:()=>a(!1),children:e.jsx("div",{className:"max-h-[80vh] overflow-auto whitespace-pre-wrap font-mono text-sm",children:l})})]})}const v=i.memo(h);export{v as default};
//# sourceMappingURL=etqj4xq4j5wad3vw.js.map
